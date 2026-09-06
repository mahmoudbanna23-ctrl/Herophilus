/* Every image: a question names must exist on disk, and every file on disk
 * should be named by a question.
 *
 *   node tools/boot-check/image-check.js
 *   node tools/boot-check/image-check.js --selftest
 *
 * ⚠️ DO NOT DO THIS WITH A REGEX. A previous version scraped image= out of the
 * file text and reported six figures missing that were sitting right there —
 * it had matched JS template literals inside index.html as HTML attributes.
 * The arrays are loaded in a vm context instead, the same way the app loads
 * them, so what is checked is what the app will actually ask for.
 *
 * The extension is not stored: the app stores a basename and qImgSrc() builds
 * the path, so any of the extensions below counts as present.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const DATA = path.join(ROOT, 'app', 'data');
const ASSETS = path.join(ROOT, 'app', 'assets', 'q');
const EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
const SELFTEST = process.argv.includes('--selftest');

const sandbox = { window: {}, document: { addEventListener() {} } };
sandbox.window.window = sandbox.window;
vm.createContext(sandbox);

const files = fs.readdirSync(DATA).filter(f => /^(questions|cases)\..*\.js$/.test(f)).sort();
if (!files.length) { console.error('no per-subject data files found in ' + DATA); process.exit(1); }
for (const f of files) {
  const src = fs.readFileSync(path.join(DATA, f), 'utf8');
  try { vm.runInContext(src, sandbox, { filename: f }); }
  catch (e) { console.error('FAILED TO LOAD ' + f + ': ' + e.message); process.exit(1); }
}

/* The per-subject files use var, so they land on the sandbox's global object.
   Collect every array they defined rather than naming them one by one — a new
   subject file must not be able to slip past this check by not being listed. */
const arrays = [];
for (const k of Object.keys(sandbox)) {
  if (Array.isArray(sandbox[k]) && /^(Q|C)_/.test(k)) arrays.push([k, sandbox[k]]);
}
if (!arrays.length) { console.error('loaded the data files but found no Q_*/C_* arrays'); process.exit(1); }

const onDisk = new Set(fs.existsSync(ASSETS) ? fs.readdirSync(ASSETS) : []);
const wanted = new Map();   // basename -> [question ids]
let holes = 0, total = 0, withImage = 0, noAlt = [];

for (const [name, arr] of arrays) {
  // ⚠️ Array.filter and forEach SKIP sparse holes. Index it.
  for (let i = 0; i < arr.length; i++) {
    if (!(i in arr)) { holes++; console.error('SPARSE HOLE: ' + name + '[' + i + ']'); continue; }
    const q = arr[i]; total++;
    if (!q || !q.image) continue;
    withImage++;
    if (!wanted.has(q.image)) wanted.set(q.image, []);
    wanted.get(q.image).push(q.id);
    if (!q.imgAlt || !String(q.imgAlt).trim()) noAlt.push(q.id);
  }
}

if (SELFTEST) {
  // A check that has never been seen failing is not evidence. Ask for a file
  // that certainly is not there and require the report below to catch it.
  wanted.set('__selftest_not_a_real_figure__', ['SELFTEST']);
}

const missing = [];
for (const [base, ids] of wanted) {
  if (!EXTS.some(e => onDisk.has(base + e))) missing.push([base, ids]);
}

const named = new Set();
for (const base of wanted.keys()) EXTS.forEach(e => named.add(base + e));
const orphans = [...onDisk].filter(f => !named.has(f) && /\.(jpg|jpeg|png|webp|gif)$/i.test(f));

console.log('data files       ' + files.length + '   arrays ' + arrays.length + '   questions ' + total);
console.log('with a figure    ' + withImage + '   distinct files named ' + wanted.size);
console.log('files on disk    ' + [...onDisk].filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f)).length);
console.log('');
console.log('sparse holes     ' + holes);
console.log('missing figures  ' + missing.length);
missing.forEach(([b, ids]) => console.log('  ! ' + b + '  wanted by ' + ids.join(', ')));
console.log('orphan files     ' + orphans.length + (orphans.length ? '  (on disk, no question names them)' : ''));
orphans.forEach(f => console.log('  - ' + f));
console.log('figures with no imgAlt  ' + noAlt.length);
noAlt.forEach(id => console.log('  ! ' + id));

if (SELFTEST) {
  const caught = missing.some(([b]) => b === '__selftest_not_a_real_figure__');
  console.log('\n' + (caught
    ? 'SELFTEST PASS — the invented figure was reported missing.'
    : 'SELFTEST FAILED — an invented figure was not reported. This check is blind.'));
  process.exit(caught ? 0 : 1);
}

const bad = holes + missing.length + noAlt.length;
console.log('\n' + (bad ? 'PROBLEMS: ' + bad : 'CLEAN — every figure a question names is on disk, and every one has alt text'));
process.exit(bad ? 1 : 0);
