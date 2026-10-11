// Builds dupes/merge-list.json ([{keep,dead}]) from the two reads, the picture verdicts and rulings.json.
// A copy is removed only if nothing is lost: the kept copy holds every option of the removed one (same
// numbers), the same key text, its picture, and a stem no shorter than 80% of it. A topic copy is kept
// over a model-exam copy. Everything that does not merge is written to merge-stays.json with the reason.
// Usage (from the Herophilus root): node content/peds/qb-pages/dupes/build-merge-list.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const D = __dirname, root = path.resolve(D, '..', '..', '..', '..');
const J = f => JSON.parse(fs.readFileSync(path.join(D, f), 'utf8'));

const E = new Map();
for (const [f, n] of [['questions.peds.js', 'Q_PEDS'], ['questions.peds.ep.js', 'Q_PEDS_EP'], ['questions.peds.ep2.js', 'Q_PEDS_EP2'], ['questions.peds.sa.js', 'Q_PEDS_SA']]) {
  const box = {}; vm.runInNewContext(fs.readFileSync(path.join(root, 'app', 'data', f), 'utf8'), box);
  for (const q of box[n]) E.set(q.id, q);
}

const norm = s => String(s).toLowerCase().replace(/ae/g, 'e').replace(/oe/g, 'e').replace(/[^a-z0-9]/g, '');
const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
// thousands commas and superscript digits are print variants, not different numbers
const nums = s => (String(s).replace(/(\d),(?=\d{3})/g, '$1').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, c => '^' + SUP.indexOf(c)).match(/\d+(\.\d+)?/g) || []).sort().join(',');
const grams = s => { const m = new Map(); for (let i = 0; i < s.length - 1; i++) { const g = s.slice(i, i + 2); m.set(g, (m.get(g) || 0) + 1); } return m; };
function dice(a, b) {
  if (a === b) return 1;
  const A = grams(a), B = grams(b); let hit = 0, na = 0, nb = 0;
  for (const [, c] of A) na += c;
  for (const [g, c] of B) { nb += c; hit += Math.min(c, A.get(g) || 0); }
  return na + nb ? 2 * hit / (na + nb) : 0;
}
// comparators and Greek letters carry meaning that norm() strips: "<37" against "≤ 37" is a different option;
// a spelled-out "Alpha-" / "Beta-" is the same print as the letter
const signs = s => (String(s).replace(/µ/g, 'μ').replace(/\balpha\b/gi, 'α').replace(/\bbeta\b/gi, 'β').match(/[<>≤≥±Ͱ-Ͽ]/g) || []).join('');
const same = (x, y) => nums(x) === nums(y) && signs(x) === signs(y) && dice(norm(x), norm(y)) >= 0.82;
const key = q => typeof q.answer === 'number' ? q.options[q.answer] : JSON.stringify(q.answer);
const isExam = q => /-mf\d+-/.test(q.id);
// why K cannot stand in for X ('' = it can)
const forced = new Set(), forcedMiss = []; // pairs Claude read and ruled wording-only (rulings.json force:true)
function lost(K, X) {
  const f = forced.has(K.id + '|' + X.id);
  if (!f && !same(key(K), key(X))) return 'key text differs';
  const miss = (X.options || []).filter(o => !(K.options || []).some(k => same(k, o)));
  if (f && miss.length) forcedMiss.push(K.id + ' <- ' + X.id + ': ' + miss.join(' | '));
  if (!f && miss.length) return 'option not in kept copy: ' + miss.join(' | ');
  if (X.image && !K.image) return 'picture only in removed copy';
  const short = String(K.stem || '').length < 0.8 * String(X.stem || '').length;
  if (f && short) forcedMiss.push(K.id + ' <- ' + X.id + ': kept stem shorter');
  if (!f && short) return 'kept stem shorter';
  if (isExam(K) && !isExam(X)) return 'kept copy is the exam copy';
  return '';
}

const rulings = J('rulings.json');
const disagree = new Map(J('check-job/disagree.json').map(r => [r.n, r.why]));
const eyes = new Map();
for (const r of J('eyes-job/list.json')) {
  const f = path.join(D, 'eyes-job', 'results', `pair-${r.n}.json`);
  const v = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null;
  let a = v && v.ok ? v.answer : null;
  if (typeof a === 'string') { try { a = JSON.parse(a); } catch (e) { a = null; } }
  if (a) { eyes.set(r.a + '|' + r.b, a.same === true); eyes.set(r.b + '|' + r.a, a.same === true); }
}
// second look by a Claude role (different house); it wins, and anything but a clear "same" keeps both
if (fs.existsSync(path.join(D, 'eyes-job', 'claude.json')))
  for (const r of J('eyes-job/claude.json')) { eyes.set(r.a + '|' + r.b, r.same === true); eyes.set(r.b + '|' + r.a, r.same === true); }

const stays = [], links = [], pictureDriven = [];
const all = J('pairs/judged/all.json'), auto = J('pairs/auto.json');
for (const p of [...auto.map(p => Object.assign({ read: false }, p)), ...all.map(p => Object.assign({ read: true }, p))]) {
  const a = E.get(p.a), b = E.get(p.b), tag = p.read ? 'n=' + p.n : 'auto';
  const stay = why => stays.push({ pair: tag, a: p.a, b: p.b, class: p.class, why });
  if (!a || !b) { stay('id not in the data files'); continue; }
  if (!['exact', 'near', 'clash'].includes(p.class)) { stay('class ' + p.class); continue; }
  const r = p.read ? rulings[p.n] : rulings[p.a + '|' + p.b] || rulings[p.b + '|' + p.a], why2 = p.read ? disagree.get(p.n) : null;
  if (r && r.merge === false) { stay('ruled: ' + r.why); continue; }
  if (r && r.force) { forced.add(p.a + '|' + p.b); forced.add(p.b + '|' + p.a); }
  if (!(r && r.merge) && (why2 === 'notSame' || why2 === 'keyDiffers' || why2 === 'missing')) { stay('second reader: ' + why2 + ', no ruling'); continue; }
  if (a.image && b.image && a.image !== b.image) {
    const v = eyes.get(p.a + '|' + p.b);
    if (v === undefined) { stay('picture not compared yet'); continue; }
    if (!v) { stay('pictures differ'); continue; }
    pictureDriven.push({ a: p.a, b: p.b, ia: a.image, ib: b.image });
  }
  const ab = lost(a, b), ba = lost(b, a);
  if (ab && ba) { stay('lossy both ways: ' + ab + ' // ' + ba); continue; }
  links.push([p.a, p.b]);
}

// groups (union-find), one keeper per group
const par = new Map(), find = x => { while (par.get(x) !== x) { par.set(x, par.get(par.get(x))); x = par.get(x); } return x; };
for (const [a, b] of links) { for (const x of [a, b]) if (!par.has(x)) par.set(x, x); par.set(find(a), find(b)); }
const groups = new Map();
for (const id of par.keys()) { const g = find(id); if (!groups.has(g)) groups.set(g, []); groups.get(g).push(id); }
const score = q => [isExam(q) ? 0 : 1, (q.options || []).length, q.image ? 1 : 0, String(q.stem || '').length, String(q.explanation || '').length, /^pedhd-/.test(q.id) ? 1 : 0];
const cmp = (x, y) => { const a = score(E.get(x)), b = score(E.get(y)); for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return b[i] - a[i]; return x < y ? -1 : 1; };
const list = [], groupOf = new Map();
for (const ids of groups.values()) {
  ids.sort(cmp);
  // stems of near-equal length (within 5%) are the same printing respelled: the richer explanation then decides,
  // but only when that copy absorbs everything the default keeper would (owner rule: keep the fuller printing)
  const top = q => score(q).slice(0, 3).join(), len = (q, f) => String(q[f] || '').length, k0 = ids[0], can = k => ids.filter(x => x !== k && !lost(E.get(k), E.get(x))).length;
  const k1 = ids.filter(x => x !== k0 && top(E.get(x)) === top(E.get(k0)) && len(E.get(x), 'stem') >= 0.95 * len(E.get(k0), 'stem') && len(E.get(x), 'explanation') > len(E.get(k0), 'explanation') && can(x) >= can(k0))
    .sort((x, y) => len(E.get(y), 'explanation') - len(E.get(x), 'explanation'))[0];
  const keep = k1 || k0;
  if (k1) ids.splice(ids.indexOf(k1), 1), ids.unshift(k1);
  for (const dead of ids.slice(1)) {
    const why = lost(E.get(keep), E.get(dead));
    if (why) { stays.push({ pair: 'group', a: keep, b: dead, class: 'group', why: 'keeper cannot stand in: ' + why }); continue; }
    list.push({ keep, dead }); groupOf.set(dead, keep);
  }
  groupOf.set(keep, keep);
}
// a pair ruled to stay must not have been merged through a third copy
const together = s => groupOf.has(s.a) && groupOf.get(s.a) === groupOf.get(s.b);
const conflicts = stays.filter(s => s.pair !== 'group' && !s.why.startsWith('lossy') && together(s));
// a pair that was lossy on its own but is covered by a fuller third copy did merge: not a stay
for (let i = stays.length - 1; i >= 0; i--) if (stays[i].why.startsWith('lossy') && together(stays[i])) stays.splice(i, 1);

fs.writeFileSync(path.join(D, 'merge-list.json'), JSON.stringify(list, null, 1));
fs.writeFileSync(path.join(D, 'merge-stays.json'), JSON.stringify(stays, null, 1));
fs.writeFileSync(path.join(D, 'eyes-job', 'confirm.json'), JSON.stringify(pictureDriven.filter(p => groupOf.has(p.a) && groupOf.get(p.a) === groupOf.get(p.b)), null, 1));
const bank = id => id.replace(/-.*/, '').replace(/\d$/, '');
const tally = {}; for (const s of stays) { const k = s.why.replace(/:.*/, ''); tally[k] = (tally[k] || 0) + 1; }
console.log('candidate pairs', auto.length + all.length, '| groups', groups.size, '| removed copies', list.length,
  '| cross-source', list.filter(m => bank(m.keep) !== bank(m.dead)).length, '| exam copy folded into topic', list.filter(m => isExam(E.get(m.dead)) && !isExam(E.get(m.keep))).length);
console.log('stays', JSON.stringify(tally, null, 1));
console.log('forced pairs, options only in the removed copy: ' + forcedMiss.length + '\n' + [...new Set(forcedMiss)].join('\n'));
console.log(conflicts.length ? 'CONFLICTS ' + conflicts.length + '\n' + conflicts.map(c => `${c.pair} ${c.a} ${c.b} ${c.why}`).join('\n') : 'no conflicts');
