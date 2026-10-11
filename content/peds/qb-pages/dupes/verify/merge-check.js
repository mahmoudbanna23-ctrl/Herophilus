// Independent check of a merged Pediatrics data set against the set before it. Does not share code with splice.js.
// Usage (from the Herophilus root): node content/peds/qb-pages/dupes/verify/merge-check.js <before dir> <after dir>
// Before = the four question files as they stood just before the splice; after = splice/out or app/data.
const fs = require('fs'), path = require('path'), vm = require('vm');
const [bd, ad] = process.argv.slice(2).map(d => path.resolve(d));
const FILES = [['questions.peds.js', 'Q_PEDS'], ['questions.peds.ep.js', 'Q_PEDS_EP'], ['questions.peds.ep2.js', 'Q_PEDS_EP2'], ['questions.peds.sa.js', 'Q_PEDS_SA']];
const run = (dir, f) => { const box = {}; vm.runInNewContext(fs.readFileSync(path.join(dir, f), 'utf8'), box); return box; };
const load = dir => { const m = new Map(); for (const [f, n] of FILES) { const A = run(dir, f)[n]; for (let i = 0; i < A.length; i++) { if (!(i in A)) throw new Error(f + ': hole at ' + i); if (m.has(A[i].id)) throw new Error('id twice: ' + A[i].id); m.set(A[i].id, A[i]); } } return m; };
const list = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'merge-list.json'), 'utf8'));
const B = load(bd), A = load(ad), bad = [], S = JSON.stringify;
const banks = q => new Set([q.bank, ...(q.alsoIn || [])]);
const dead = new Map(list.map(m => [m.dead, m.keep])), keeps = new Set(list.map(m => m.keep));
if (A.size !== B.size - list.length) bad.push('count ' + B.size + ' - ' + list.length + ' != ' + A.size);
for (const { keep, dead: d } of list) {
  if (A.has(d)) bad.push(d + ': removed copy still present');
  const k = A.get(keep), x = B.get(d);
  if (!k || !x) { bad.push(keep + ' / ' + d + ': missing'); continue; }
  for (const b of banks(x)) if (!banks(k).has(b)) bad.push(keep + ': lost source tag ' + b + ' of ' + d);
  if (x.image && !k.image) bad.push(keep + ': picture of ' + d + ' lost');
}
for (const [id, a] of A) {
  const b = B.get(id);
  if (!b) { bad.push(id + ': not in the set before'); continue; }
  for (const f of new Set([...Object.keys(a), ...Object.keys(b)])) {
    if (S(a[f]) === S(b[f]) || (keeps.has(id) && (f === 'alsoIn' || f === 'source'))) continue;
    bad.push(id + '.' + f + ': changed');
  }
  if (keeps.has(id) && !String(a.source).startsWith(String(b.source).replace(/[.\s]+$/, ''))) bad.push(id + '.source: original citation not kept at the front');
  const named = (S(a).match(/ped[a-z0-9]+-[a-z0-9]+-[0-9]+(?:-[0-9]+)?/g) || []).filter(x => dead.has(x));
  if (named.length) bad.push(id + ': names removed id ' + named[0]);
}
for (const id of B.keys()) if (!A.has(id) && !dead.has(id)) bad.push(id + ': gone but not on the merge list');
const F = run(ad, 'folds.js').FOLDED || {};
for (const [d, k] of dead) if (F[d] !== k) bad.push('folds.js: ' + d + ' -> ' + F[d] + ', want ' + k);
const ex = fs.readFileSync(path.join(ad, 'exams.peds.js'), 'utf8').match(/ped[a-z0-9]+-[a-z0-9]+-[0-9]+(?:-[0-9]+)?/g) || [];
for (const id of new Set(ex)) if (!A.has(id)) bad.push('exams.peds.js names ' + id + ', not a live question');
console.log('before', B.size, '| after', A.size, '| removed', list.length, '| kept copies', keeps.size, '| exam ids', new Set(ex).size, '| failed checks', bad.length);
if (bad.length) { console.log(bad.slice(0, 40).join('\n')); process.exit(1); }
