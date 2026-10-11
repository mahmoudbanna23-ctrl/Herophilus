/* Splice duplicate Pediatrics questions: fold each dead entry into its kept entry.
   Usage: node splice.js [--list <merge-list.json>] [--write]
   Default is DRY-RUN: output goes to ./out/ and app/ is not touched.
   --write copies the verified output into app/data/ (data files, folds.js, exams.peds.js).
   Input list: [{ "keep": "<id>", "dead": "<id>" }, ...]. See ./README-splice.txt. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..', '..', '..', '..', '..');
const dataDir = path.join(root, 'app', 'data');
const outDir = path.join(__dirname, 'out');
const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const li = args.indexOf('--list');
const listPath = li >= 0 ? path.resolve(args[li + 1]) : path.join(__dirname, '..', 'merge-list.json');

const DATA = [
  { file: 'questions.peds.js', name: 'Q_PEDS' },
  { file: 'questions.peds.ep.js', name: 'Q_PEDS_EP' },
  { file: 'questions.peds.ep2.js', name: 'Q_PEDS_EP2' },
  { file: 'questions.peds.sa.js', name: 'Q_PEDS_SA' },
];
const THEORY = ['theory.ent.js', 'theory.neuro.js', 'theory.ophtho.js', 'theory.peds.js'];

function fail(msg) { console.error('FAIL: ' + msg); process.exit(1); }
const rd = (p) => fs.readFileSync(p, 'utf8'); // utf8, no newline translation
function loadVar(text, name, file) {
  const box = {};
  try { vm.runInNewContext(text, box, { filename: file }); } catch (e) { fail(file + ' does not load: ' + e.message); }
  return box[name];
}

/* ---- string-aware scanner: element spans of the top-level array ---- */
function scanSpans(text, name, file) {
  const m = new RegExp('var\\s+' + name + '\\s*=\\s*\\[').exec(text);
  if (!m) fail(file + ': no "var ' + name + ' = [" found');
  let i = m.index + m[0].length;
  const spans = [];
  for (;;) {
    for (;;) { // skip whitespace, commas, comments
      const c = text[i];
      if (c === ' ' || c === '\t' || c === '\r' || c === '\n' || c === ',') i++;
      else if (c === '/' && text[i + 1] === '*') { const e = text.indexOf('*/', i + 2); if (e < 0) fail(file + ': open comment'); i = e + 2; }
      else if (c === '/' && text[i + 1] === '/') { const e = text.indexOf('\n', i); i = e < 0 ? text.length : e + 1; }
      else break;
    }
    if (text[i] === ']') break;
    if (text[i] !== '{') fail(file + ': unexpected char ' + JSON.stringify(text[i]) + ' at ' + i);
    const start = i;
    let depth = 0;
    for (; i < text.length; i++) {
      const c = text[i];
      if (c === '"' || c === "'" || c === '`') {
        for (i++; i < text.length && text[i] !== c; i++) if (text[i] === '\\') i++;
      } else if (c === '{') depth++;
      else if (c === '}') { depth--; if (depth === 0) { i++; break; } }
    }
    if (depth !== 0) fail(file + ': unbalanced braces from ' + start);
    spans.push({ start, end: i });
  }
  return spans;
}
function evalSpan(src) { return vm.runInNewContext('(' + src + ')'); }

/* ---- load before-state ---- */
const before = DATA.map((d) => {
  const text = rd(path.join(dataDir, d.file));
  const arr = loadVar(text, d.name, d.file);
  const spans = scanSpans(text, d.name, d.file);
  if (spans.length !== arr.length) fail(d.file + ': scanner found ' + spans.length + ' spans, array has ' + arr.length);
  spans.forEach((s, k) => {
    const o = evalSpan(text.slice(s.start, s.end));
    if (o.id !== arr[k].id) fail(d.file + ': span ' + k + ' id ' + o.id + ' != ' + arr[k].id);
    s.id = o.id;
  });
  return { ...d, text, arr, spans };
});
const byId = new Map();
before.forEach((b) => b.arr.forEach((q, k) => {
  if (byId.has(q.id)) fail('duplicate id in input data: ' + q.id);
  byId.set(q.id, { q, b, k });
}));

/* ---- 1. read + resolve the list ---- */
let rows;
try { rows = JSON.parse(rd(listPath)); } catch (e) { fail('cannot read list ' + listPath + ': ' + e.message); }
if (!Array.isArray(rows)) fail('list is not an array');
const keepOf = new Map(); // dead -> keep, as given
rows.forEach((r, n) => {
  if (!r || typeof r.keep !== 'string' || typeof r.dead !== 'string') fail('row ' + n + ' malformed');
  if (r.keep === r.dead) fail('keep === dead: ' + r.keep);
  if (!byId.has(r.keep)) fail('unknown id: ' + r.keep);
  if (!byId.has(r.dead)) fail('unknown id: ' + r.dead);
  if (keepOf.has(r.dead) && keepOf.get(r.dead) !== r.keep)
    fail('dead twice with different keeps: ' + r.dead + ' -> ' + keepOf.get(r.dead) + ' and ' + r.keep);
  keepOf.set(r.dead, r.keep);
});
const final = new Map(); // dead -> final kept id
for (const dead of keepOf.keys()) {
  const seen = [dead];
  let cur = keepOf.get(dead);
  while (keepOf.has(cur)) {
    if (seen.includes(cur)) fail('cycle: ' + seen.concat(cur).join(' -> '));
    seen.push(cur);
    cur = keepOf.get(cur);
  }
  final.set(dead, cur);
}
const deadSet = new Set(final.keys());
const keptSet = new Set(final.values());
const chains = [...final.keys()].filter((d) => final.get(d) !== keepOf.get(d));

/* ---- 2. fold info into kept entries ---- */
// source shape: copy from the first existing entry that has alsoIn and a two-citation source
const CITE_SPLIT = /;\s(?=[A-Za-z][^;()]*\.pdf\s+p\.\d)/;
let shapeId = null, SEP = null;
for (const b of before) {
  for (const q of b.arr) {
    if (q.alsoIn && q.alsoIn.length && typeof q.source === 'string') {
      const parts = q.source.split(CITE_SPLIT);
      if (parts.length === 2) { shapeId = q.id; SEP = q.source.slice(parts[0].length, q.source.length - parts[1].length); break; }
    }
  }
  if (shapeId) break;
}
if (!shapeId) fail('no two-citation source with alsoIn found to copy the shape from');
const citeKeys = (s) => { const out = []; const re = /([A-Za-z][^;()]*?\.pdf)\s+p\.(\d+)/g; let m; while ((m = re.exec(s))) out.push(m[1].trim() + ' p.' + m[2]); return out; };

const kept = new Map(); // kept id -> new entry (key order preserved)
let cross = 0, same = 0;
const changedKept = new Set();
for (const [dead, keepId] of final) {
  const D = byId.get(dead).q;
  const K = kept.get(keepId) || JSON.parse(JSON.stringify(byId.get(keepId).q));
  kept.set(keepId, K);
  const carried = [D.bank].concat(D.alsoIn || []).filter((x) => x && x !== K.bank);
  const isCross = D.bank !== K.bank || carried.some((x) => !(K.alsoIn || []).includes(x));
  if (isCross) {
    cross++;
    const add = [];
    carried.forEach((x) => { if (!(K.alsoIn || []).includes(x) && !add.includes(x)) add.push(x); });
    if (add.length) {
      const merged = (K.alsoIn || []).concat(add);
      if (K.alsoIn) K.alsoIn = merged;
      else { // new key goes right after id, as in the existing alsoIn entries
        const o = {}; for (const k of Object.keys(K)) { o[k] = K[k]; if (k === 'id') o.alsoIn = merged; }
        for (const k of Object.keys(K)) delete K[k]; Object.assign(K, o);
      }
    }
  } else same++;
  // fold the citation(s)
  const have = new Set(citeKeys(K.source || ''));
  (D.source || '').split(CITE_SPLIT).forEach((part) => {
    const keys = citeKeys(part);
    const present = keys.length ? keys.every((k) => have.has(k)) : (K.source || '').includes(part);
    if (!present && part) { K.source = (K.source || '') + SEP + part; keys.forEach((k) => have.add(k)); }
  });
  changedKept.add(keepId);
}

/* ---- 3. build new texts ---- */
function eolNear(text, s) {
  if (/\r\n/.test(text.slice(s.start, s.end))) return '\r\n';
  return /\r\n/.test(text.slice(Math.max(0, s.start - 300), s.start)) ? '\r\n' : '\n';
}
function applyEdits(b) {
  const edits = []; // {s,e,text}
  b.spans.forEach((sp) => {
    const t = b.text;
    if (deadSet.has(sp.id)) {
      let rs = sp.start;
      let p = rs; while (p > 0 && (t[p - 1] === ' ' || t[p - 1] === '\t')) p--;
      if (p === 0 || t[p - 1] === '\n') rs = p;
      let re = sp.end;
      while (t[re] === ' ' || t[re] === '\t') re++;
      if (t[re] === ',') {
        re++;
        while (t[re] === ' ' || t[re] === '\t') re++;
        if (t[re] === '\r' && t[re + 1] === '\n') re += 2; else if (t[re] === '\n') re++;
      } else { // last element, no comma: take the comma before it
        let q = rs - 1; while (q >= 0 && /\s/.test(t[q])) q--;
        if (t[q] === ',') rs = q;
      }
      edits.push({ s: rs, e: re, text: '' });
    } else if (kept.has(sp.id)) {
      const eol = eolNear(t, sp);
      const json = JSON.stringify(kept.get(sp.id), null, 2).replace(/\n/g, eol);
      edits.push({ s: sp.start, e: sp.end, text: json });
    }
  });
  edits.sort((a, b2) => a.s - b2.s);
  for (let k = 1; k < edits.length; k++) if (edits[k].s < edits[k - 1].e) fail(b.file + ': overlapping edits near ' + edits[k].s);
  let out = '', pos = 0;
  edits.forEach((ed) => { out += b.text.slice(pos, ed.s) + ed.text; pos = ed.e; });
  return out + b.text.slice(pos);
}
const outTexts = new Map();
before.forEach((b) => outTexts.set(b.file, applyEdits(b)));

// FOLDED
const foldsOld = rd(path.join(dataDir, 'folds.js'));
const FOLD_OLD = loadVar(foldsOld, 'FOLDED', 'folds.js') || {};
const FOLDED = {};
Object.keys(FOLD_OLD).forEach((k) => { let v = FOLD_OLD[k]; if (final.has(v)) v = final.get(v); FOLDED[k] = v; });
for (const [d, k] of final) FOLDED[d] = k;
const FOLDED_SORTED = {}; Object.keys(FOLDED).sort().forEach((k) => { FOLDED_SORTED[k] = FOLDED[k]; });
outTexts.set('folds.js', foldsOld.slice(0, foldsOld.search(/var\s+FOLDED\s*=/)) + 'var FOLDED = ' + JSON.stringify(FOLDED_SORTED, null, 2) + ';\n');

// exam rows
const examsOldText = rd(path.join(dataDir, 'exams.peds.js'));
const EXAMS_OLD = loadVar(examsOldText, 'EXAMS_PEDS', 'exams.peds.js');
const EXAMS = {}; const examDupes = [];
let examMapped = 0;
Object.keys(EXAMS_OLD).forEach((ex) => {
  const seen = new Set(); EXAMS[ex] = [];
  EXAMS_OLD[ex].forEach((id) => {
    const m = FOLDED[id] || id; if (m !== id) examMapped++;
    if (seen.has(m)) { examDupes.push(ex + ': later ' + id + ' (maps to ' + m + ') dropped, kept id already earlier in the exam'); return; }
    seen.add(m); EXAMS[ex].push(m);
  });
});
outTexts.set('exams.peds.js', examsOldText.slice(0, examsOldText.search(/var\s+EXAMS_PEDS\s*=/)) + 'var EXAMS_PEDS = ' + JSON.stringify(EXAMS, null, 2) + ';\n');

/* ---- write ---- */
fs.mkdirSync(outDir, { recursive: true });
for (const [f, t] of outTexts) fs.writeFileSync(path.join(outDir, f), t); // utf8, no translation

/* ---- 8. verification (reads back from disk) ---- */
function verify(dir, label) {
  const errs = [];
  const E = (m) => errs.push(m);
  const after = DATA.map((d) => {
    const text = rd(path.join(dir, d.file));
    let arr; try { arr = loadVar(text, d.name, d.file); } catch (e) { E(d.file + ' load'); arr = []; }
    for (let i = 0; i < arr.length; i++) if (!(i in arr)) E(d.file + ' sparse hole at ' + i);
    return { ...d, text, arr };
  });
  const afterId = new Map();
  after.forEach((a) => a.arr.forEach((q) => { if (afterId.has(q.id)) E('duplicate id ' + q.id); afterId.set(q.id, q); }));
  const oldTotal = before.reduce((n, b) => n + b.arr.length, 0), newTotal = after.reduce((n, a) => n + a.arr.length, 0);
  if (newTotal !== oldTotal - deadSet.size) E('total ' + newTotal + ' != ' + oldTotal + ' - ' + deadSet.size);
  const foldsNew = loadVar(rd(path.join(dir, 'folds.js')), 'FOLDED', 'folds.js');
  const added = Object.keys(foldsNew).filter((k) => !(k in FOLD_OLD));
  if (added.length !== deadSet.size) E('FOLDED additions ' + added.length + ' != dead ' + deadSet.size);
  for (const [id, o] of byId) {
    const n = afterId.get(id);
    if (deadSet.has(id)) { if (n) E('dead id still present: ' + id); continue; }
    if (!n) { E('lost entry ' + id); continue; }
    if (keptSet.has(id)) {
      const a = Object.assign({}, o.q), c = Object.assign({}, n);
      ['alsoIn', 'source'].forEach((k) => { delete a[k]; delete c[k]; });
      if (JSON.stringify(a) !== JSON.stringify(c)) E('kept entry changed beyond alsoIn/source: ' + id);
      if (n.alsoIn && n.alsoIn.includes(n.bank)) E('kept alsoIn contains own bank: ' + id);
    } else if (JSON.stringify(o.q) !== JSON.stringify(n)) E('untouched entry changed: ' + id);
  }
  for (const k of Object.keys(foldsNew)) {
    if (afterId.has(k)) E('FOLDED key present in data: ' + k);
    if (!afterId.has(foldsNew[k])) E('FOLDED value missing from data: ' + k + ' -> ' + foldsNew[k]);
  }
  // dead ids as text
  const TOK = /[A-Za-z][\w]*(?:-[\w]+)+/g;
  const tokHit = (text, where) => { const hit = new Set(); let m; TOK.lastIndex = 0; while ((m = TOK.exec(text))) if (deadSet.has(m[0])) hit.add(m[0]); if (hit.size) E('dead id as text in ' + where + ': ' + [...hit].slice(0, 8).join(', ') + (hit.size > 8 ? ' (+' + (hit.size - 8) + ')' : '')); };
  deadSet.forEach((d) => { if (!new RegExp('^' + TOK.source + '$').test(d)) E('dead id not token-shaped, text check unreliable: ' + d); });
  after.forEach((a) => { tokHit(a.text, a.file); a.arr.forEach((q) => { const js = JSON.stringify(q); let m; TOK.lastIndex = 0; while ((m = TOK.exec(js))) if (deadSet.has(m[0])) E('  carried by entry ' + q.id + ' (mentions dead id ' + m[0] + ')'); }); });
  tokHit(rd(path.join(dir, 'exams.peds.js')), 'exams.peds.js');
  const examsNew = loadVar(rd(path.join(dir, 'exams.peds.js')), 'EXAMS_PEDS', 'exams.peds.js');
  Object.keys(examsNew).forEach((ex) => examsNew[ex].forEach((id) => { if (!afterId.has(id)) E('exam ' + ex + ' lists id not in bank: ' + id); }));
  // theory qs lists
  let theoryChecked = 0, qsLists = 0; const theorySkipped = [];
  THEORY.forEach((f) => {
    const p = path.join(dataDir, f);
    if (!fs.existsSync(p)) { theorySkipped.push(f + ' (missing)'); return; }
    let box = {}; box.window = box;
    try { vm.runInNewContext(rd(p), box, { filename: f }); } catch (e) { theorySkipped.push(f + ' (' + e.message + ')'); return; }
    theoryChecked++;
    const seenObj = new Set();
    (function walk(o, depth) {
      if (!o || typeof o !== 'object' || depth > 8 || seenObj.has(o)) return;
      seenObj.add(o);
      if (Array.isArray(o.qs)) { qsLists++; o.qs.forEach((id) => { if (deadSet.has(id)) E('dead id in qs of ' + f + ': ' + id + (o.id ? ' (chapter ' + o.id + ')' : '')); }); }
      Object.keys(o).forEach((k) => walk(o[k], depth + 1));
    })(box, 0);
  });
  // other data files: warning only
  const warn = [];
  fs.readdirSync(dataDir).filter((f) => /\.js$/.test(f) && !DATA.some((d) => d.file === f) && !THEORY.includes(f) && !['folds.js', 'exams.peds.js', 'fonts.js'].includes(f)).forEach((f) => {
    const t = rd(path.join(dataDir, f)); let m, hit = new Set(); TOK.lastIndex = 0;
    while ((m = TOK.exec(t))) if (deadSet.has(m[0])) hit.add(m[0]);
    if (hit.size) warn.push(f + ': ' + [...hit].slice(0, 5).join(', '));
  });
  // stats
  const bankCount = (arrs) => { const c = {}; arrs.forEach((a) => a.forEach((q) => { [q.bank].concat(q.alsoIn || []).forEach((b) => { c[b] = (c[b] || 0) + 1; }); })); return c; };
  console.log('[' + label + '] per-file before/after: ' + before.map((b, i) => b.file + ' ' + b.arr.length + '/' + after[i].arr.length).join(' | '));
  console.log('[' + label + '] per-bank (bank+alsoIn) before: ' + JSON.stringify(bankCount(before.map((b) => b.arr))));
  console.log('[' + label + '] per-bank (bank+alsoIn) after:  ' + JSON.stringify(bankCount(after.map((a) => a.arr))));
  console.log('[' + label + '] theory data files loaded ' + theoryChecked + '/' + THEORY.length + ', qs lists scanned ' + qsLists + (theorySkipped.length ? '; could not check: ' + theorySkipped.join('; ') : ''));
  if (warn.length) console.log('[' + label + '] WARNING dead ids in other data files: ' + warn.join(' | '));
  return errs;
}

console.log('list: ' + listPath + ' | rows ' + rows.length + ' | dead ' + deadSet.size + ' | kept ' + keptSet.size + ' | chains resolved ' + chains.length);
console.log('folds: cross-source ' + cross + ', same-source ' + same + ' | source shape copied from ' + shapeId + ' (separator ' + JSON.stringify(SEP) + ')');
const deadMf = [...deadSet].filter((d) => /^pedep2?-mf/.test(d));
const unreachable = deadMf.filter((d) => { const ex = /^(pedep2?-mf\d)-/.exec(d)[1]; return !(final.get(d).indexOf(ex + '-') === 0); });
console.log('exam rows: ' + examMapped + ' id(s) remapped; dead model-exam ids ' + deadMf.length + ', of which ' + unreachable.length + ' the exam builder could NOT place (kept id is outside that exam)' + (examDupes.length ? '; dupes: ' + examDupes.join(' ; ') : ''));
let errs = verify(outDir, 'out');
if (errs.length) { errs.slice(0, 40).forEach((e) => console.error('CHECK FAILED: ' + e)); console.error(errs.length + ' check(s) failed'); process.exit(1); }
console.log('all checks passed on ' + outDir);
if (WRITE) {
  for (const [f, t] of outTexts) fs.writeFileSync(path.join(dataDir, f), t);
  errs = verify(dataDir, 'app');
  if (errs.length) { errs.slice(0, 40).forEach((e) => console.error('CHECK FAILED (after write): ' + e)); process.exit(1); }
  console.log('WROTE into ' + dataDir + ' and re-verified');
} else console.log('DRY-RUN: app/ untouched');
