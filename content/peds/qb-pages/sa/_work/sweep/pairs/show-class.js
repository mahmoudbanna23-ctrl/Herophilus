// Print pairs of one class side by side. usage: node show-class.js <CLS> [maxStem]
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(__dirname, '../../../../../../..');
const load = (file, name) => { const box = {}; vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8') + ';this.OUT=' + name, box); return box.OUT; };
const varOf = file => fs.readFileSync(path.join(root, file), 'utf8').match(/^var (\w+)/m)[1];
const files = ['app/data/questions.peds.js', 'app/data/questions.peds.ep.js', 'app/data/questions.peds.ep2.js'];
const byId = new Map();
for (const f of files) for (const q of load(f, varOf(f))) if (q) byId.set(q.id, q);
for (const q of load('content/peds/qb-pages/sa/sa-book.array.js', 'SA_BOOK')) byId.set(q.id, q);
const [cls, max = '260', only = ''] = process.argv.slice(2); // only = comma list of book ids; prints full options
const pairs = JSON.parse(fs.readFileSync(path.join(__dirname, 'book-pairs.json'), 'utf8')).filter(p => p.cls === cls && (!only || only.split(',').includes(p.book)));
const show = q => q.id + ' [' + q.options.length + ' opts] ' + q.stem.slice(0, +max) + '\n   KEY: ' + q.options[q.answer] + (only ? '\n   OPTS: ' + q.options.join(' | ') : '');
for (const p of pairs) console.log(show(byId.get(p.book)) + '\n' + show(byId.get(p.other)) + '\n   why: ' + p.why + '\n');
console.log(cls + ': ' + pairs.length);
