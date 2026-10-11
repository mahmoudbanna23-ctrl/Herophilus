// control.js - positive control for make-pairs.js. Plants 5 live questions (lightly reworded, one with
// options reordered) into a COPY of the book array, re-runs the proposer on the copy, writes control.txt.
const fs = require('fs'), path = require('path'), vm = require('vm'), cp = require('child_process'), os = require('os');
const ROOT = path.resolve(__dirname, '..', '..', '..', '..', '..', '..', '..');
const load = (f, v) => { const c = vm.createContext({}); vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8') + ';this.O=' + v, c); return c.O; };
const book = load('content/peds/qb-pages/sa/sa-book.array.js', 'SA_BOOK');
const rows = JSON.parse(fs.readFileSync(path.join(__dirname, 'book-pairs.json'), 'utf8'));
const hit = new Set(rows.map(r => r.other));
const live = load('app/data/questions.peds.js', 'Q_PEDS').concat(load('app/data/questions.peds.ep.js', 'Q_PEDS_EP'), load('app/data/questions.peds.ep2.js', 'Q_PEDS_EP2'));
// pool: live questions the sweep never paired with the book, 5 options, a real clinical stem
const pool = live.filter(q => !hit.has(q.id) && q.options && q.options.length === 5 && String(q.stem).length > 120 && typeof q.answer === 'number');
const picks = [0, 1, 2, 3, 4].map(i => pool[Math.floor((i + 0.5) * pool.length / 5)]);
const reword = s => String(s).replace(/most likely/g, 'most probable').replace(/\bchild\b/g, 'patient').replace(/\bwhat is\b/gi, 'which is') + ' Select one answer only.';
const planted = picks.map((q, i) => {
  const c = JSON.parse(JSON.stringify(q)); c.id = 'ctl-' + (i + 1); c.stem = reword(q.stem);
  if (i === 2) { // reorder options (reverse): key letter moves
    const k = c.options[c.answer]; c.options = c.options.slice(1).concat(c.options[0]); c.answer = c.options.indexOf(k);
  }
  return c;
});
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ctl-'));
const copy = path.join(tmp, 'book-plus-control.array.js');
fs.writeFileSync(copy, 'var SA_BOOK = ' + JSON.stringify(book.concat(planted)) + ';');
const out = path.join(tmp, 'out');
cp.execFileSync('node', [path.join(__dirname, 'make-pairs.js'), '--book', copy, '--var', 'SA_BOOK', '--out', out], { stdio: 'pipe' });
const res = JSON.parse(fs.readFileSync(path.join(out, 'book-pairs.json'), 'utf8'));
const L = ['POSITIVE CONTROL - 5 live questions planted into a copy of the book array as ctl-1..ctl-5', 'copy: ' + copy, ''];
let found = 0;
planted.forEach((p, i) => {
  const r = res.find(x => x.book === p.id && x.other === picks[i].id);
  if (r && r.proposed === 'SAME') found++;
  L.push(p.id + ' planted from ' + picks[i].id + (i === 2 ? ' (options rotated by one)' : '') + ' -> ' + (r ? 'FOUND as ' + r.proposed + ' (cls ' + r.cls + '), stemDice ' + r.stemDice + ', keyTextSame ' + r.keyTextSame + ', keyLetterMoved ' + r.keyLetterMoved : 'NOT FOUND'));
  L.push('    planted stem: ' + p.stem.slice(0, 140));
});
L.push('', 'found ' + found + ' of 5 proposed SAME');
fs.writeFileSync(path.join(__dirname, 'control.txt'), L.join('\n') + '\n');
console.log(L.join('\n'));
if (found !== 5) process.exitCode = 1;
