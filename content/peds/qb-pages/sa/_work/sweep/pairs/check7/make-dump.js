// Dump both sides of every pair to be re-checked, so the checker needs no other file.
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(__dirname, '../../../../../../../..');
const load = (file, name) => { const box = {}; vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8') + ';this.OUT=' + name, box); return box.OUT; };
const varOf = file => fs.readFileSync(path.join(root, file), 'utf8').match(/^var (\w+)/m)[1];
const byId = new Map();
for (const f of ['app/data/questions.peds.js', 'app/data/questions.peds.ep.js', 'app/data/questions.peds.ep2.js']) for (const q of load(f, varOf(f))) if (q) byId.set(q.id, q);
for (const q of load('content/peds/qb-pages/sa/sa-book.array.js', 'SA_BOOK')) byId.set(q.id, q);
const pairs = JSON.parse(fs.readFileSync(path.join(__dirname, '../book-pairs.json'), 'utf8'));
const hasSame = new Set(pairs.filter(p => p.cls === 'SAME').map(p => p.book));
const side = q => ({ id: q.id, stem: q.stem, options: q.options, key: q.options[q.answer] });
const out = pairs.filter(p => p.cls === 'SAME' || ((p.cls === 'MENU' || p.cls === 'DIFF') && !hasSame.has(p.book)))
  .map((p, i) => ({ n: i + 1, cls: p.cls, book: side(byId.get(p.book)), other: side(byId.get(p.other)) }));
fs.writeFileSync(path.join(__dirname, 'pairs-dump.json'), JSON.stringify(out, null, 1));
const c = {}; for (const p of out) c[p.cls] = (c[p.cls] || 0) + 1;
console.log(out.length, JSON.stringify(c));
