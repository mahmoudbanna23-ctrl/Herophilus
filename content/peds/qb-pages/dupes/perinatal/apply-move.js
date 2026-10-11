// Moves the 60 no-lecture perinatal questions (class "unsure" in candidates.json) into the Perinatal
// medicine row, owner ruling 2026-10-11. Only the chapter field changes; ids stay. Dry run by default.
// Self-check: every array is reloaded and must equal the old one except chapter on those ids.
// Also writes move-60.json (id, old chapter, stem, options, key) for the different-house checker.
// Usage (from the Herophilus root): node content/peds/qb-pages/dupes/perinatal/apply-move.js [--write]
const fs = require('fs'), path = require('path'), vm = require('vm');
const D = __dirname, root = path.resolve(D, '..', '..', '..', '..', '..'), TO = 'perinatal-med';
const write = process.argv.includes('--write');
const FILES = [['questions.peds.js', 'Q_PEDS'], ['questions.peds.ep.js', 'Q_PEDS_EP'], ['questions.peds.ep2.js', 'Q_PEDS_EP2'], ['questions.peds.sa.js', 'Q_PEDS_SA']];
const load = (src, n) => { const box = {}; vm.runInNewContext(src, box); return box[n]; };
const c = JSON.parse(fs.readFileSync(path.join(D, 'candidates.json'), 'utf8'));
const ids = new Set((Array.isArray(c) ? c : c.rows || Object.values(c)).filter(r => r.class === 'unsure').map(r => r.id));
const idAt = /(?<![A-Za-z0-9_])(["']?)id\1\s*:\s*(["'])([^"']+)\2/g; // both key styles, both quote styles
const chapterAt = /(?<![A-Za-z0-9_])(["']?)chapter\1\s*:\s*(["'])([^"']+)\2/;
let moved = 0; const dump = [], out = [];
for (const [f, n] of FILES) {
  const p = path.join(root, 'app', 'data', f); let src = fs.readFileSync(p, 'utf8');
  const before = load(src, n), marks = [...src.matchAll(idAt)], edits = [];
  marks.forEach((m, i) => {
    if (!ids.has(m[3])) return;
    const end = i + 1 < marks.length ? marks[i + 1].index : src.length;
    const ch = chapterAt.exec(src.slice(m.index, end));
    if (!ch) throw new Error('no chapter field after id ' + m[3]);
    edits.push([m.index + ch.index + ch[0].lastIndexOf(ch[3]), ch[3].length]);
  });
  for (const [at, len] of edits.reverse()) src = src.slice(0, at) + TO + src.slice(at + len);
  const after = load(src, n);
  if (after.length !== before.length) throw new Error(f + ': length changed');
  for (let i = 0; i < before.length; i++) {
    if (!(i in before) || !(i in after)) throw new Error(f + ': hole at ' + i);
    const a = before[i], hit = ids.has(a.id);
    if (JSON.stringify(hit ? Object.assign({}, a, { chapter: TO }) : a) !== JSON.stringify(after[i])) throw new Error('unexpected change at ' + a.id);
    if (hit) { moved++; dump.push({ id: a.id, from: a.chapter, stem: a.stem, options: a.options, answer: a.answer }); }
  }
  out.push([p, src]);
}
if (moved !== ids.size) throw new Error('moved ' + moved + ' of ' + ids.size);
fs.writeFileSync(path.join(D, 'move-60.json'), JSON.stringify(dump, null, 1));
if (write) for (const [p, src] of out) fs.writeFileSync(p, src);
console.log((write ? 'WROTE' : 'dry run ok') + ': ' + moved + ' questions -> ' + TO);
