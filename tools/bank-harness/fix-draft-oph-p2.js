// Applies refuter fixes to _s<sec>-work/draft-*.txt. Pairs are plain text; they are JSON-escaped
// here to match the fragments' string-literal escaping. Each old string must occur exactly once.
// Usage: node fix-draft-oph-p2.js <sec> <pairs.json>     pairs = [[old,new],...]
const fs = require('fs');
const [SEC, PAIRS] = process.argv.slice(2);
const W = 'D:/claude os/Medical school/Herophilus/content/ophtho/qb-pages/_s' + SEC + '-work/';
const files = fs.readdirSync(W).filter(f => /^draft-[A-Z]\.txt$/.test(f));
const enc = t => JSON.stringify(t).slice(1, -1);
for (const [a, b] of JSON.parse(fs.readFileSync(PAIRS, 'utf8'))) {
  const hits = files.filter(f => fs.readFileSync(W + f, 'utf8').split(enc(a)).length === 2);
  if (hits.length !== 1) throw new Error('not exactly once: ' + a.slice(0, 60));
  const s = fs.readFileSync(W + hits[0], 'utf8');
  fs.writeFileSync(W + hits[0], s.replace(enc(a), () => enc(b)), 'utf8');
  console.log('fixed in', hits[0], ':', a.slice(0, 50));
}
