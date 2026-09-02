const fs = require('fs');
const ROOT = 'D:/claude os/Medical school/Herophilus/';
function loadArr(p) {
  let s = fs.readFileSync(ROOT + p, 'utf8');
  s = s.replace(/^[\s\S]*?var\s+\w+\s*=\s*\[/, '[');
  return eval(s);
}
const S = loadArr('content/peds/qb-pages/house-ch04-haem.array.js');
const D = loadArr('content/peds/qb-pages/house-ch04-haem.draft-B.js');
const a = S.find(x => x.n === 17).stem;
const b = D.find(x => x.id === 'pedhd-haem-17').stem;
console.log('staging len', a.length, 'draft len', b.length);
for (let i = 0; i < Math.max(a.length, b.length); i++) {
  if (a[i] !== b[i]) {
    console.log('first diff at ' + i);
    console.log('staging: ...' + JSON.stringify(a.slice(Math.max(0, i - 40), i + 40)));
    console.log('draft  : ...' + JSON.stringify(b.slice(Math.max(0, i - 40), i + 40)));
    break;
  }
}
