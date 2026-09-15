// Live count of the malignancy questions across every peds bank file.
//
// The chapter's tier bars and its 64-of-64 coverage claim were both measured before the
// peds endpoint part 2 bank finished transcribing, so the denominator moves as that chat
// lands entries. Run this again whenever part 2 closes; never hardcode the number it prints.
//
// Read-only. It loads the data files and touches nothing.
//
//   node tools/malignancy-questions/count.js            counts and lists ids
//   node tools/malignancy-questions/count.js --dump out.json   also writes the full entries

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const DATA = path.join(ROOT, 'app', 'data');

const CHAPTERS = ['malignant', 'malignant-solid'];

const FILES = [
  ['questions.peds.js', 'Q_PEDS', 'house'],
  ['questions.peds.ep.js', 'Q_PEDS_EP', 'endpoint p1'],
  ['questions.peds.ep2.js', 'Q_PEDS_EP2', 'endpoint p2 (LIVE - still transcribing)'],
];

function load(file, varName) {
  const full = path.join(DATA, file);
  if (!fs.existsSync(full)) return { error: 'file not found' };
  const src = fs.readFileSync(full, 'utf8');
  try {
    // The data files declare with var, which leaks out of eval; append the name so the
    // array is the completion value either way.
    const arr = (0, eval)(src + ';' + varName);
    if (!Array.isArray(arr)) return { error: varName + ' is not an array' };
    return { arr };
  } catch (e) {
    return { error: e.message };
  }
}

const rows = [];
const all = [];
let holes = 0;

for (const [file, varName, label] of FILES) {
  const { arr, error } = load(file, varName);
  if (error) {
    rows.push({ label, file, error });
    continue;
  }
  // Never use filter here: a sparse hole is skipped silently and the count reads clean.
  const hit = [];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!(i in arr)) { holes++; continue; }
    total++;
    const q = arr[i];
    if (CHAPTERS.indexOf(q.chapter) !== -1) hit.push(q);
  }
  rows.push({ label, file, total, hit: hit.length });
  for (const q of hit) all.push(Object.assign({ _file: file }, q));
}

console.log('malignancy questions, live count at ' + new Date().toISOString().slice(0, 10));
console.log('chapters counted: ' + CHAPTERS.join(', '));
console.log('');
for (const r of rows) {
  if (r.error) { console.log('  ' + r.label.padEnd(38) + 'FAILED: ' + r.error); continue; }
  console.log('  ' + r.label.padEnd(38) + String(r.hit).padStart(4) + '  of ' + r.total + ' in file');
}
console.log('');
console.log('  TOTAL' .padEnd(40) + String(all.length).padStart(4));
if (holes) console.log('  sparse holes seen while walking: ' + holes);

// Split by the two chapters so the tier bars can be rebuilt per topic.
const byChapter = {};
for (const q of all) byChapter[q.chapter] = (byChapter[q.chapter] || 0) + 1;
console.log('');
for (const c of CHAPTERS) console.log('  ' + c.padEnd(20) + String(byChapter[c] || 0).padStart(4));

console.log('');
console.log('ids:');
for (const q of all) console.log('  ' + q.id + '  [' + q.chapter + ']  ' + String(q.q || '').slice(0, 72).replace(/\s+/g, ' '));

const dumpAt = process.argv.indexOf('--dump');
if (dumpAt !== -1 && process.argv[dumpAt + 1]) {
  fs.writeFileSync(process.argv[dumpAt + 1], JSON.stringify(all, null, 2));
  console.log('');
  console.log('wrote ' + all.length + ' full entries to ' + process.argv[dumpAt + 1]);
}
