// Write Model Exams 1-5 reprint citations onto the existing ophthalmology survivors.
// Dry run by default.  The live files are changed only with --write.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const QB = path.join(ROOT, 'content', 'ophtho', 'qb-pages');
const DATA = path.join(ROOT, 'app', 'data');
const OUT = path.join(QB, '_close-work', 'reprint-cites.plan.md');
const WRITE = process.argv.includes('--write');

function read(file) { return fs.readFileSync(file, 'utf8'); }
// Kept equivalent to the supplied scratchpad loader: each classic data file is
// evaluated in its own context and its declared array is explicitly returned.
function loadClassic(file, variable) {
  const context = {};
  vm.createContext(context);
  vm.runInContext(read(file) + ';this.__r=' + variable + ';', context, { filename: file });
  if (!Array.isArray(context.__r)) throw new Error(file + ' did not define ' + variable);
  return context.__r;
}
function rows(file, variable) { return loadClassic(file, variable).filter(Boolean); }
function fail(message) { problems.push(message); }
function pageText(p, mp) { return p === mp ? 'p.' + mp : 'p.' + p + '-' + mp; }
function piece(exam, p, mp, verdict) {
  return 'Model Exam ' + exam + ' at ' + pageText(p, mp) +
    (verdict !== 'IDENTICAL' ? ' (reworded)' : '');
}

const problems = [];
const folds = { 22: 0, 23: 0, 24: 0, 25: 0, 26: 0 };
const candidates = [];
function add(exam, id, p, mp, verdict, tag) {
  if (!id || !Number.isInteger(p) || !Number.isInteger(mp)) {
    fail(tag + ': incomplete target or page mapping'); return;
  }
  candidates.push({ exam, id, p, mp, verdict, tag, text: piece(exam, p, mp, verdict) });
}

// Model Exam 1: the staging check makes the printed two-page pairing explicit.
const s22 = JSON.parse(read(path.join(QB, '_s22-work', 's22.folds.json')));
folds[22] = s22.length;
const s22stage = JSON.parse(read(path.join(QB, '_s22-work', 'oph-ep-p2-s22-model-exam-1.staging.json')));
for (const f of s22) {
  const pair = s22stage.filter(r => parseInt(String(r.printed_q), 10) === f.q);
  const unmarked = pair.find(r => r.page_type === 'question_unmarked');
  const marked = pair.find(r => r.page_type === 'question_marked');
  if (!unmarked || !marked || unmarked.pdf_page !== f.marked_page - 1 || marked.pdf_page !== f.marked_page) {
    fail('s22 q' + f.q + ': staging does not confirm p.' + (f.marked_page - 1) + '-' + f.marked_page); continue;
  }
  for (const id of f.live || []) add(1, id, unmarked.pdf_page, marked.pdf_page, 'IDENTICAL', 's22 q' + f.q);
}

// Model Exam 2: image-check files are authoritative for the row->survivor map.
const s23text = read(path.join(QB, '_s23-work', 's23.imgcheck-A.md')) + '\n' +
  read(path.join(QB, '_s23-work', 's23.imgcheck-B.md'));
const s23map = new Map();
for (const line of s23text.split(/\r?\n/)) {
  const m = line.match(/^q(\d+)\s+p\.(\d+)\s+([\w-]+)\s+\|\s+(IDENTICAL|VARIANT|REWORDED[^|]*)/i) ||
    line.match(/\bn(\d+)\s+p(\d+)(?:\/\d+)?[^\n]*?reprint\s+MATCH\(([^)]+)\)/i);
  if (!m) continue;
  const n = Number(m[1]), mp = Number(m[2]), id = m[3].trim();
  const verdict = /^IDENTICAL$/i.test(m[4] || '') ? 'IDENTICAL' : 'REWORDED';
  if (s23map.has(n)) fail('s23 q' + n + ': image check maps it twice');
  else s23map.set(n, { id, mp, verdict });
}
const s23stage = JSON.parse(read(path.join(QB, '_s23-work', 'oph-ep-p2-s23-model-exam-2.staging.json')));
const s23pages = new Map();
for (const r of s23stage) {
  const n = Number(r.printed_q);
  if (!Number.isInteger(n)) continue;
  const x = s23pages.get(n) || {};
  if (r.page_type === 'question_unmarked') x.p = r.pdf_page;
  if (r.page_type === 'question_marked') x.mp = r.pdf_page;
  s23pages.set(n, x);
}
for (let n = 1; n <= 77; n++) {
  const hit = s23map.get(n), staged = s23pages.get(n) || {};
  if (!hit) { fail('s23 q' + n + ': no image-check survivor mapping'); continue; }
  const p = staged.p === hit.mp - 1 ? staged.p : hit.mp - 1;
  if (staged.mp !== undefined && staged.mp !== hit.mp) fail('s23 q' + n + ': staging marked page disagrees with image check');
  add(2, hit.id, p, hit.mp, hit.verdict, 's23 q' + n);
}
folds[23] = 77;

for (const spec of [
  [24, 3, 'oph-ep-p2-s24-model-exam-3.array.js', 's24'],
  [25, 4, 'oph-ep-p2-s25-model-exam-4.array.js', 's25'],
  [26, 5, 'oph-ep-p2-s26-model-exam-5.array.js', 's26'],
]) {
  const [section, exam, arrayFile, key] = spec;
  const fspec = JSON.parse(read(path.join(QB, '_' + key + '-work', key + '.folds.json')));
  folds[section] = fspec.length;
  const staged = rows(path.join(QB, arrayFile), 'OPHEP2_S' + section + '_STAGED');
  const byN = new Map(staged.map(r => [Number(r.n), r]));
  for (const f of fspec) {
    const r = byN.get(Number(f.n));
    if (!r) { fail(key + ' n' + f.n + ': no staged row'); continue; }
    add(exam, f.into, r.p, r.mp, f.verdict, key + ' n' + f.n);
  }
}

const epFile = path.join(DATA, 'questions.ophtho.ep.js');
const ep2File = path.join(DATA, 'questions.ophtho.ep2.js');
const beforeEP = loadClassic(epFile, 'Q_OPHTHO_EP');
const beforeEP2 = loadClassic(ep2File, 'Q_OPHTHO_EP2');
if (beforeEP.length !== 439) fail('Q_OPHTHO_EP has ' + beforeEP.length + ' entries, expected 439');
if (beforeEP2.length !== 148) fail('Q_OPHTHO_EP2 has ' + beforeEP2.length + ' entries, expected 148');
const live = new Map([...beforeEP, ...beforeEP2].map(q => [q.id, q]));
const plan = new Map();
let skipped = 0;
for (const c of candidates.sort((a, b) => a.exam - b.exam || a.tag.localeCompare(b.tag))) {
  const q = live.get(c.id);
  if (!q) { fail(c.tag + ': survivor not found: ' + c.id); continue; }
  const bare = c.text.replace(/^Model Exam \d at /, '');
  if (String(q.source).includes(c.text) || (String(q.source).includes('Model Exam ' + c.exam + ' at ') && String(q.source).includes(bare))) { skipped++; continue; }
  const item = plan.get(c.id) || { q, pieces: [], last: null };
  if (item.last === c.exam) item.pieces[item.pieces.length - 1] += ' and ' + bare;
  else item.pieces.push(c.text);
  item.last = c.exam;
  plan.set(c.id, item);
}
function extendedSource(source, pieces) {
  let s = String(source);
  for (const p of pieces) {
    s += s.includes('reprinted in') ? ', and in ' + p : '; reprinted in ' + p;
  }
  return s;
}
function tail(s) { return String(s).replace(/\s+/g, ' ').slice(-150); }
fs.mkdirSync(path.dirname(OUT), { recursive: true });
const planLines = [...plan.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([id, x]) =>
  id + ' | ' + tail(x.q.source) + ' | ' + x.pieces.map(p => (String(x.q.source).includes('reprinted in') ? ', and in ' : '; reprinted in ') + p).join(''));
fs.writeFileSync(OUT, planLines.join('\n') + (planLines.length ? '\n' : ''), { encoding: 'utf8' });

console.log('folds read: s22=' + folds[22] + ', s23=' + folds[23] + ', s24=' + folds[24] + ', s25=' + folds[25] + ', s26=' + folds[26]);
console.log('distinct survivors touched: ' + plan.size);
console.log('pieces skipped as already cited: ' + skipped);
console.log('unresolvable folds: ' + (problems.length ? problems.join('; ') : 'none'));
console.log('plan: ' + OUT);
if (problems.length) process.exitCode = 1;

if (!WRITE || problems.length) process.exit();

function escapeFor(value, quote) {
  return String(value).replace(/\\/g, '\\\\').replace(new RegExp(quote, 'g'), '\\' + quote)
    .replace(/\r/g, '\\r').replace(/\n/g, '\\n');
}
function replaceSource(file, id, oldValue, newValue) {
  const text = read(file);
  const idRe = new RegExp('\\bid\\s*:\\s*[\\\'\\"]' + id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[\\\'\\"]');
  const start = text.search(idRe);
  if (start < 0) throw new Error(id + ': source block not found in ' + file);
  const end = text.indexOf('\n}', start);
  const blockEnd = end < 0 ? text.length : end;
  const block = text.slice(start, blockEnd);
  const m = block.match(/(["']?source["']?\s*:\s*)(['"])(?:\\.|(?!\2)[\s\S])*?\2/);
  if (!m) throw new Error(id + ': source property not found');
  const literal = m[1] + m[2] + escapeFor(newValue, m[2]) + m[2];
  const next = text.slice(0, start) + block.replace(m[0], literal) + text.slice(blockEnd);
  if (next === text || !String(oldValue)) throw new Error(id + ': source replacement failed');
  fs.writeFileSync(file, next, { encoding: 'utf8' });
}
const touched = new Set(plan.keys());
for (const [id, x] of plan) {
  const file = beforeEP.some(q => q.id === id) ? epFile : ep2File;
  replaceSource(file, id, x.q.source, extendedSource(x.q.source, x.pieces));
}
const afterEP = loadClassic(epFile, 'Q_OPHTHO_EP'), afterEP2 = loadClassic(ep2File, 'Q_OPHTHO_EP2');
if (afterEP.length !== 439 || afterEP2.length !== 148) throw new Error('post-write array counts changed');
const after = new Map([...afterEP, ...afterEP2].map(q => [q.id, q]));
for (const [id, oldQ] of live) {
  const newQ = after.get(id); if (!newQ) throw new Error('post-write id missing: ' + id);
  for (const k of new Set([...Object.keys(oldQ), ...Object.keys(newQ)])) {
    if (JSON.stringify(oldQ[k]) !== JSON.stringify(newQ[k]) && !(touched.has(id) && k === 'source'))
      throw new Error('post-write unexpected change: ' + id + '.' + k);
  }
}
for (const file of [epFile, ep2File]) {
  const check = require('child_process').spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
  if (check.status !== 0) throw new Error('--check failed: ' + file + '\n' + check.stderr);
}
console.log('write verification passed');
