const fs = require('fs');
const ROOT = 'D:/claude os/Medical school/Herophilus/';
function loadArr(p) {
  let s = fs.readFileSync(ROOT + p, 'utf8');
  s = s.replace(/^[\s\S]*?var\s+\w+\s*=\s*\[/, '[');
  return eval(s);
}
const S = loadArr('content/peds/qb-pages/house-ch04-haem.array.js');
const D = loadArr('content/peds/qb-pages/house-ch04-haem.draft-B.js');
const mods = fs.readFileSync(ROOT + 'app/data/modules.js', 'utf8');
const qs = fs.readFileSync(ROOT + 'app/data/questions.peds.js', 'utf8');
const shipped = new Set((qs.match(/id\s*:\s*'[^']+'/g) || []).map(s => s.slice(s.indexOf("'") + 1, -1)));
const MARK = 'Written for this bank \u2014 pediatric .pdf prints no explanation here.';
let bad = 0;
const say = m => { console.log(m); if (m.indexOf('BAD') === 0) bad++; };

console.log('entries: ' + D.length + '  (expect 12)');
for (let i = 0; i < D.length; i++) if (!(i in D)) say('BAD sparse hole at index ' + i);

D.forEach((q, i) => {
  const n = 14 + i;
  const s = S.find(x => x.n === n);
  if (!s) { say('BAD no staging entry for Q' + n); return; }
  if (q.id !== 'pedhd-haem-' + n) say('BAD id ' + q.id + ' expected pedhd-haem-' + n);
  ['id','bank','module','chapter','stem','options','answer','explanation','objective','source'].forEach(k => {
    if (q[k] === undefined) say('BAD ' + q.id + ' missing field ' + k);
  });
  const order = Object.keys(q).join(',');
  if (order !== 'id,bank,module,chapter,stem,options,answer,explanation,objective,source') say('BAD field order ' + q.id + ' -> ' + order);
  if (q.bank !== 'house') say('BAD bank ' + q.id);
  if (q.module !== 'pediatrics') say('BAD module ' + q.id);
  if (mods.indexOf("['" + q.chapter + "'") < 0) say('BAD chapter token absent from modules.js: ' + q.chapter + ' (' + q.id + ')');
  if (q.stem !== s.stem) say('BAD stem differs from staging ' + q.id);
  if (JSON.stringify(q.options) !== JSON.stringify(s.opts)) say('BAD options differ from staging ' + q.id);
  const want = 'ABCDE'.indexOf(s.key);
  if (q.answer !== want) say('BAD answer ' + q.id + ' = ' + q.answer + ' but printed key is ' + s.key + ' (' + want + ')');
  if (!(q.answer >= 0 && q.answer < q.options.length)) say('BAD answer out of range ' + q.id);
  if (q.explanation.slice(-MARK.length) !== MARK) say('BAD marker not final line: ' + q.id);
  if (q.explanation.split(MARK).length !== 2) say('BAD marker occurs ' + (q.explanation.split(MARK).length - 1) + 'x in ' + q.id);
  if (q.source.indexOf('Written for this bank') >= 0) say('BAD marker leaked into source ' + q.id);
  const pg = String(s.p).split(' ')[0];
  if (q.source.indexOf('pediatric .pdf p.' + pg + ' (Part I, ch.4 Q' + n) !== 0) say('BAD source ' + q.id + ' -> ' + q.source + '   staging p=' + s.p);
  if (!/^[A-Z]/.test(q.objective) || q.objective.length < 40) say('BAD objective ' + q.id);
  if (q.image !== undefined) say('BAD unexpected image field ' + q.id);
});

const mine = new Set(D.map(q => q.id));
const draftA = new Set();
for (let k = 1; k <= 13; k++) draftA.add('pedhd-haem-' + k);
const refs = new Set();
D.forEach(q => (q.explanation.match(/pedhd-[a-z]+-\d+/g) || []).forEach(r => refs.add(r)));
[...refs].sort().forEach(r => {
  if (!shipped.has(r) && !mine.has(r) && !draftA.has(r)) say('BAD cross-ref to unknown id ' + r);
});
console.log('cross-refs -> shipped file : ' + [...refs].filter(r => shipped.has(r)).sort().join(' '));
console.log('cross-refs -> this draft   : ' + [...refs].filter(r => mine.has(r)).sort().join(' '));
console.log('cross-refs -> draft-A Q1-13: ' + [...refs].filter(r => draftA.has(r)).sort().join(' '));
console.log('');
D.forEach(q => {
  console.log('  ' + q.id.padEnd(16) + ' ch=' + q.chapter.padEnd(14) + ' ans=' + q.answer +
    ' opts=' + q.options.length + ' expl=' + q.explanation.split(/\s+/).length + 'w  ' + q.source);
});
console.log('');
console.log(bad ? ('FAIL: ' + bad + ' BAD') : 'PASS: 0 BAD, 12/12 entries, all stems+options byte-identical to staging, all keys match printed letters, all markers final.');
