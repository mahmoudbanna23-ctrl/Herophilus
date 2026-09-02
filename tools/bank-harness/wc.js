const fs = require('fs');
const ROOT = 'D:/claude os/Medical school/Herophilus/';
function words(t) {
  return t.replace(/\|/g, ' ').replace(/[*`_>#-]/g, ' ')
    .split(/\s+/).filter(w => /[A-Za-z0-9]/.test(w)).length;
}
function loadArr(p) {
  let s = fs.readFileSync(ROOT + p, 'utf8');
  s = s.replace(/^[\s\S]*?var\s+\w+\s*=\s*\[/, '[');
  return eval(s);
}
const D = loadArr('content/peds/qb-pages/house-ch04-haem.draft-B.js');
console.log('--- draft-B ---');
D.forEach(q => console.log('  ' + q.id.padEnd(16) + words(q.explanation) + 'w'));
const src = fs.readFileSync(ROOT + 'app/data/questions.peds.js', 'utf8');
const Q = eval(src.replace(/^[\s\S]*?var\s+\w+\s*=\s*\[/, '[').replace(/;\s*$/, ''));
console.log('--- shipped models ---');
['pedhd-inf-1', 'pedhd-inf-2', 'pedhd-inf-19'].forEach(id => {
  const q = Q.find(x => x.id === id);
  console.log('  ' + id.padEnd(16) + (q ? words(q.explanation) + 'w' : 'NOT FOUND'));
});
const all = Q.filter(q => q.explanation).map(q => words(q.explanation)).sort((a, b) => a - b);
console.log('shipped peds n=' + all.length + '  min=' + all[0] + '  median=' + all[Math.floor(all.length / 2)] + '  max=' + all[all.length - 1]);
