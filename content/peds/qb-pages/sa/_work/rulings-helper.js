// Prints the next N open items not yet in chapters-rulings.jsonl. Assigns nothing.
// usage: node rulings-helper.js show [N]   |   node rulings-helper.js check
const fs = require('fs'), vm = require('vm');
const SA = 'D:/claude os/Medical school/Herophilus/content/peds/qb-pages/sa/';
const W = SA + '_work/';
let all = [];
for (const [f, v] of [['sa-book.array.js', 'SA_BOOK'], ['sa-p1.array.js', 'SA_P1'], ['sa-p2.array.js', 'SA_P2']]) {
  const ctx = {}; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(SA + f, 'utf8') + ';this.X=' + v, ctx);
  all = all.concat(ctx.X);
}
const byId = {}; all.forEach(q => byId[q.id] = q);
const wr = JSON.parse(fs.readFileSync(W + 'chapters-disagree.json', 'utf8')).filter(r => r.cls === 'DISAGREE' || r.cls === 'INVALID');
const bk = JSON.parse(fs.readFileSync(W + 'chapters-disagree-book.json', 'utf8'));
const owed = wr.concat(bk);
const rf = W + 'chapters-rulings.jsonl';
const done = {};
if (fs.existsSync(rf)) fs.readFileSync(rf, 'utf8').split('\n').filter(Boolean).forEach(l => { const o = JSON.parse(l); done[o.id] = o; });

// chapter ids from modules.js lines 353-424
const mod = fs.readFileSync('D:/claude os/Medical school/Herophilus/app/data/modules.js', 'utf8').split('\n').slice(352, 424).join('\n');
const valid = new Set([...mod.matchAll(/\['([a-z0-9-]+)','/g)].map(m => m[1]));

const cmd = process.argv[2] || 'show';
if (cmd === 'show') {
  const n = +process.argv[3] || 30;
  const todo = owed.filter(r => !done[r.id]);
  console.log('owed', owed.length, 'done', Object.keys(done).length, 'remaining', todo.length);
  todo.slice(0, n).forEach(r => {
    const q = byId[r.id];
    if (!q) { console.log('## ' + r.id + ' NOT FOUND'); return; }
    let s = q.stem;
    if (s.length > 520) s = s.slice(0, 160) + ' [...] ' + s.slice(-340);
    console.log('## ' + r.id + ' [' + r.cls + '] ' + (q.kind) + ' ' + (q.bookChapterTitle || q.setTitle || q.block || ''));
    console.log('Q: ' + s);
    console.log('KEY: ' + q.keyLetter + '. ' + q.options[q.answer]);
    console.log('1st: ' + r.first + (r.firstSecondary ? ' (+' + r.firstSecondary + ')' : '') + ' | 2nd: ' + (r.second || 'none') + (r.secondSecondary ? ' (+' + r.secondSecondary + ')' : ''));
  });
} else if (cmd === 'check') {
  const lines = Object.values(done);
  const owedIds = new Set(owed.map(r => r.id));
  let bad = [], extra = [], eqF = 0, eqS = 0, neither = 0, mism = [];
  lines.forEach(o => {
    if (!valid.has(o.final)) bad.push(o.id + ':' + o.final);
    if (o.secondary && !valid.has(o.secondary) && o.secondary.length < 25 && /^[a-z-]+$/.test(o.secondary) && false) {}
    if (!owedIds.has(o.id)) extra.push(o.id);
    const r = owed.find(x => x.id === o.id);
    if (r) {
      if (o.first !== r.first) mism.push(o.id + ' first');
      if ((o.second || null) !== (r.second || null)) mism.push(o.id + ' second');
    }
    if (o.final === o.first) eqF++; else if (o.second && o.final === o.second) eqS++; else neither++;
  });
  console.log('lines', lines.length, 'of', owed.length, 'final==first', eqF, 'final==second', eqS, 'neither', neither);
  console.log('invalid final:', bad.length ? bad.join(' ') : 'none');
  console.log('not in owed list:', extra.join(' ') || 'none');
  console.log('first/second mismatch vs source:', mism.join(' ') || 'none');
  console.log('missing:', owed.filter(r => !done[r.id]).length);
  const sc = {}; lines.forEach(o => { if (o.second && !valid.has(o.second)) sc[o.second] = (sc[o.second] || 0) + 1; });
  console.log('second values not valid chapter ids:', JSON.stringify(sc));
  console.log('valid ids:', valid.size);
}
