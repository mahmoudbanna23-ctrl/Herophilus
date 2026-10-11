// Compare blind second sort of the 452 book questions against sa-chapters.json (first sort).
// Output: chapters-disagree-book.json (non-AGREE rows only) + four counts on stdout.
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.resolve(__dirname, '..');
const JOB = process.argv[2] || 'D:/claude os/Tools/factory/jobs/queue/peds-sa-chapters-check-book-2026-10-11';
const c = {}; vm.createContext(c);
vm.runInContext(fs.readFileSync(path.join(root, 'sa-book.array.js'), 'utf8') + ';this.OUT=SA_BOOK', c);
const items = c.OUT;
const MODULES = eval(fs.readFileSync(path.resolve(root, '../../../../app/data/modules.js'), 'utf8') + ';MODULES');
const allowed = new Set(MODULES.find(m => m.id === 'pediatrics').groups.flatMap(g => g.chapters.map(ch => ch[0])));
const first = JSON.parse(fs.readFileSync(path.join(root, 'sa-chapters.json'), 'utf8'));

function second(id) {
  const f = path.join(JOB, 'results', id + '.json');
  if (!fs.existsSync(f)) return null;
  let r; try { r = JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { return null; }
  if (!r.ok) return null;
  let a; try { a = typeof r.answer === 'string' ? JSON.parse(r.answer) : r.answer; } catch (e) { return null; }
  if (!a || !allowed.has(a.chapter)) return null;
  let sec = a.secondary || '';
  if (sec && !allowed.has(sec)) sec = '';
  return { chapter: a.chapter, secondary: sec };
}

const counts = { AGREE: 0, SWAP: 0, DISAGREE: 0, MISSING: 0 };
const rows = [], dis = {};
for (const it of items) {
  const f = first[it.id] || {};
  const s = second(it.id);
  const row = { id: it.id, cls: '', first: f.chapter || '', firstSecondary: f.secondary || '', second: s ? s.chapter : '', secondSecondary: s ? s.secondary : '' };
  if (!s || !f.chapter) row.cls = 'MISSING';
  else if (s.chapter === f.chapter) row.cls = 'AGREE';
  else if ((f.secondary && s.chapter === f.secondary) || (s.secondary && s.secondary === f.chapter)) row.cls = 'SWAP';
  else row.cls = 'DISAGREE';
  counts[row.cls]++;
  if (row.cls !== 'AGREE') rows.push(row);
  if (row.cls === 'DISAGREE') dis[row.first] = (dis[row.first] || 0) + 1;
}
fs.writeFileSync(path.join(__dirname, 'chapters-disagree-book.json'), JSON.stringify(rows, null, 1));
console.log(JSON.stringify(counts));
console.log('top DISAGREE by first-sort chapter:', Object.entries(dis).sort((a, b) => b[1] - a[1]).slice(0, 10).map(e => e.join(': ')).join(', '));
