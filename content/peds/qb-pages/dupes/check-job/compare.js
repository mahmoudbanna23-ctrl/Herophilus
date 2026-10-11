// Compares the second read with the first reader's verdict. Writes check-job/disagree.json:
// every merge candidate the second reader calls not-same, keys-differ, low confidence, or did not answer.
// Usage (from the Herophilus root): node content/peds/qb-pages/dupes/check-job/compare.js
const fs = require('fs'), path = require('path');
const J = __dirname;
const judged = JSON.parse(fs.readFileSync(path.join(J, '../pairs/judged/all.json'), 'utf8'))
  .filter(j => ['exact', 'near', 'clash'].includes(j.class));
const tally = { agree: 0, notSame: 0, keyDiffers: 0, low: 0, missing: 0 }, out = [];
// the factory seat ran out of quota after 110 pairs; the rest were read by Claude (claude/out-*.jsonl)
const claude = new Map(), CD = path.join(J, 'claude');
for (const f of fs.existsSync(CD) ? fs.readdirSync(CD).filter(f => /^out-.*\.jsonl$/.test(f)) : [])
  for (const line of fs.readFileSync(path.join(CD, f), 'utf8').split(/\r?\n/).filter(l => l.trim())) {
    const v = JSON.parse(line);
    if (claude.has(v.n)) console.log('judged twice by claude: pair', v.n);
    claude.set(v.n, v);
  }
for (const j of judged) {
  const f = path.join(J, 'results', `pair-${j.n}.json`);
  let r = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null;
  let a = r && r.ok ? r.answer : null;
  if (typeof a === 'string') { try { a = JSON.parse(a); } catch (e) { a = null; } }
  if (!a && claude.has(j.n)) { a = claude.get(j.n); r = { house: 'claude' }; }
  const why = !a ? 'missing' : a.same !== 'yes' ? 'notSame' : a.keySame !== 'yes' ? 'keyDiffers' : a.confidence !== 'high' ? 'low' : 'agree';
  tally[why]++;
  if (why !== 'agree') out.push({ n: j.n, a: j.a, b: j.b, first: j.class, sameFile: j.sameFile, why, firstDiff: j.diff, second: a && a.differs, house: r && r.house });
}
fs.writeFileSync(path.join(J, 'disagree.json'), JSON.stringify(out, null, 1));
console.log('merge candidates', judged.length, JSON.stringify(tally));
