// The merge kept one copy's explanation whole and dropped the removed copy's. Where the removed copy
// opened with the endpoint file's own PRINTED explanation box, that box is source text and must
// survive the merge. This puts each dropped box into the kept entry, cited to its page.
// Usage (from the Herophilus root):
//   node content/peds/qb-pages/dupes/splice/restore-boxes.js <dir of the files before the merge>           dry run
//   node content/peds/qb-pages/dupes/splice/restore-boxes.js <dir of the files before the merge> --write
// Safe to re-run: a box already present in the kept entry is skipped.
const fs = require('fs'), path = require('path'), vm = require('vm');
const D = path.join(__dirname, '..'), APP = path.join(D, '../../../../app/data');
const FILES = [['questions.peds.js', 'Q_PEDS'], ['questions.peds.ep.js', 'Q_PEDS_EP'], ['questions.peds.ep2.js', 'Q_PEDS_EP2'], ['questions.peds.sa.js', 'Q_PEDS_SA']];
const run = (dir, f) => { const box = {}; vm.runInNewContext(fs.readFileSync(path.join(dir, f), 'utf8'), box); return box; };
const load = dir => { const m = new Map(); for (const [f, n] of FILES) { const A = run(dir, f)[n]; for (let i = 0; i < A.length; i++) { if (!(i in A)) throw new Error(f + ': hole at ' + i); m.set(A[i].id, Object.assign({ _file: f }, A[i])); } } return m; };
const before = process.argv[2], WRITE = process.argv[3] === '--write';
if (!before) { console.error('give the folder holding the four files as they stood before the merge'); process.exit(2); }
const B4 = load(path.resolve(before)), NOW = load(APP), F = run(APP, 'folds.js').FOLDED || {};
const live = id => { let k = id; while (F[k]) k = F[k]; return k; };
const list = JSON.parse(fs.readFileSync(path.join(D, 'merge-list.json'), 'utf8'));
const norm = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
// a printed box = bold "... prints ..." heading, blank line, a run of quoted lines
const HEAD = /^\*\*([^*\n]*prints[^*\n]*)\*\*[ \t]*\n[ \t]*\n((?:>.*(?:\n|$))+)/;
const head = x => { const m = HEAD.exec(String(x || '')); return m ? { end: m[0].length, text: m[2].replace(/\n+$/, '').split('\n').map(l => l.replace(/^>\s?/, '')).join('\n') } : null; };
const quote = t => t.split('\n').map(l => l ? '> ' + l : '>').join('\n');
const TAIL = 'Written for this bank';
// the heading cites file and page only; a bracketed note stays only when it says where the box itself is printed
// (the reprint notes live whole in `source`, and a first ;-segment can end inside an open bracket)
const tidy = c => { const at = c.indexOf(' ('); if (at < 0) return c; const rest = c.slice(at + 2), end = rest.indexOf(')'), par = end < 0 ? rest : rest.slice(0, end); return c.slice(0, at) + (/^the explanation/i.test(par) ? ' (' + par + ')' : ''); };

const want = new Map(), notes = { pairs: 0, already: 0, citeNotInSource: [] };
for (const m of list) {
  const a = B4.get(m.dead), k = NOW.get(live(m.keep));
  if (!a || !k) throw new Error('pair not found: ' + m.dead + ' / ' + m.keep);
  const h = head(a.explanation); if (!h) continue;
  notes.pairs++;
  if (norm(k.explanation).includes(norm(h.text))) { notes.already++; continue; }
  const cite = String(a.source).split(/;\s*/)[0].trim();
  if (!String(k.source).includes(cite)) notes.citeNotInSource.push(m.dead + ' -> ' + k.id + ' : ' + cite);
  const boxes = want.get(k.id) || []; want.set(k.id, boxes);
  const same = boxes.find(b => norm(b.text) === norm(h.text));
  const short = tidy(cite);
  if (same) { if (!same.cites.includes(short)) same.cites.push(short); } else boxes.push({ text: h.text, cites: [short] });
}

const edits = [];
for (const [id, boxes] of want) {
  const k = NOW.get(id), x = k.explanation, own = head(x), t = x.lastIndexOf(TAIL);
  let next;
  if (own) {
    // the kept entry opens with its own printed box: the other printing's box goes straight after it
    const blocks = boxes.map(b => '**A second printing in the endpoint file (' + b.cites.join(' and ') + ') prints this explanation:**\n\n' + quote(b.text));
    next = x.slice(0, own.end).trimEnd() + '\n\n' + blocks.join('\n\n') + '\n\n' + x.slice(own.end).trimStart();
  } else {
    const blocks = boxes.map(b => '**The endpoint file prints this explanation (' + b.cites.join(' and ') + '):**\n\n' + quote(b.text));
    const body = t < 0 ? x.trimEnd() : x.slice(0, t).trimEnd();
    next = body + '\n\n---\n\n' + blocks.join('\n\n') + (t < 0 ? '' : '\n\n' + x.slice(t));
  }
  edits.push({ id, file: k._file, old: x, next, boxes: boxes.length, shape: own ? 'second-printing' : t < 0 ? 'no-tail' : 'before-tail' });
}

const tally = {}; edits.forEach(e => { tally[e.shape] = (tally[e.shape] || 0) + 1; });
console.log('pairs whose removed copy carried a printed box', notes.pairs, '| already in the kept entry', notes.already,
  '| kept entries to edit', edits.length, JSON.stringify(tally), '| boxes to add', edits.reduce((n, e) => n + e.boxes, 0));
if (notes.citeNotInSource.length) console.log('page not in the kept source line (' + notes.citeNotInSource.length + '):\n ' + notes.citeNotInSource.join('\n '));
if (!edits.length) process.exit(0);

// text-level replace of the one explanation literal, so nothing else in the file moves
const texts = {};
for (const e of edits) {
  const t = texts[e.file] || (texts[e.file] = fs.readFileSync(path.join(APP, e.file), 'utf8'));
  const lit = JSON.stringify(e.old), at = t.indexOf(lit);
  if (at < 0 || t.indexOf(lit, at + 1) >= 0) throw new Error(e.id + ': explanation literal ' + (at < 0 ? 'not found' : 'found twice') + ' in ' + e.file);
  texts[e.file] = t.slice(0, at) + JSON.stringify(e.next) + t.slice(at + lit.length);
}
// prove it before writing: every entry unchanged except the edited explanations
const strip = e => { const c = Object.assign({}, e); delete c._file; return JSON.stringify(c); };
const byId = new Map(edits.map(e => [e.id, e]));
let seen = 0;
for (const [f, n] of FILES) {
  const box = {}; vm.runInNewContext(texts[f] || fs.readFileSync(path.join(APP, f), 'utf8'), box);
  for (const e of box[n]) {
    const was = NOW.get(e.id), ed = byId.get(e.id);
    if (!was) throw new Error('new id appeared: ' + e.id);
    if (ed) { if (e.explanation !== ed.next) throw new Error(e.id + ': edit did not land'); seen++; if (strip(Object.assign({}, e, { explanation: was.explanation })) !== strip(was)) throw new Error(e.id + ': another field moved'); }
    else if (JSON.stringify(e) !== strip(was)) throw new Error(e.id + ': changed but not in the edit list');
  }
  if (box[n].length !== [...NOW.values()].filter(e => e._file === f).length) throw new Error(f + ': entry count moved');
}
if (seen !== edits.length) throw new Error('edits landed ' + seen + ' of ' + edits.length);
console.log('proved in memory: ' + seen + ' explanations changed, nothing else moved');
if (!WRITE) { const s = edits.find(e => e.shape === 'before-tail'), p = edits.find(e => e.shape === 'second-printing'); for (const e of [s, p]) if (e) console.log('\n--- sample ' + e.id + ' (' + e.shape + ')\n' + (e.shape === 'second-printing' ? e.next.slice(0, 700) : e.next.slice(-700))); process.exit(0); }
for (const f of Object.keys(texts)) fs.writeFileSync(path.join(APP, f), texts[f]);
console.log('written: ' + Object.keys(texts).join(', '));
