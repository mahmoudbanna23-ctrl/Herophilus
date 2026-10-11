// Script check of the third pair read (check9/verdicts.jsonl) against the first reader's call.
// Prints coverage, proof-of-reading signals, the control result and every pair that must not fold.
const fs = require('fs'), path = require('path');
const dump = JSON.parse(fs.readFileSync(path.join(__dirname, '../check7/pairs-dump.json'), 'utf8'));
const lines = fs.readFileSync(path.join(__dirname, 'verdicts.jsonl'), 'utf8').split(/\r?\n/).filter(Boolean);
const bad = [], by = new Map();
for (const l of lines) { try { const v = JSON.parse(l); by.set(v.n, v); } catch (e) { bad.push(l.slice(0, 60)); } }

const norm = s => String(s || '').toLowerCase().replace(/[^a-z0-9 ]/g, ' ');
const words = s => new Set(norm(s).split(/\s+/).filter(w => w.length > 3));
const missing = [], idWrong = [], noToken = [], control = [], disagree = [];
const whys = new Map();
for (const r of dump) {
  const v = by.get(r.n);
  if (!v) { missing.push(r.n); continue; }
  if (v.book !== r.book.id || v.other !== r.other.id) idWrong.push(r.n);
  whys.set(v.why, (whys.get(v.why) || 0) + 1);
  // proof of reading: the reason and the two "asks" lines must share a word with this pair's own text
  const own = words([r.book.stem, r.other.stem, r.book.key, r.other.key].join(' '));
  const said = [...words([v.why, v.bookAsks, v.otherAsks].join(' '))];
  if (!said.some(w => own.has(w))) noToken.push(r.n);
  const first = r.cls === 'SAME' ? 'SAME' : 'DIFFERENT';
  if (r.cls !== 'SAME') control.push(r.n + ':' + r.cls + '>' + v.verdict);
  if (v.verdict !== first) disagree.push({ n: r.n, book: r.book.id, other: r.other.id, first: r.cls, second: v.verdict, why: v.why });
}
const repeated = [...whys].filter(([, c]) => c > 1).sort((a, b) => b[1] - a[1]);
const b15 = dump.find(r => r.book.id === 'pedsa-b15-7' && r.other.id === 'pedep-mf1-37');
console.log('lines', lines.length, 'unparsed', bad.length, 'distinct n', by.size, 'of', dump.length);
console.log('missing', missing.length, missing.slice(0, 30).join(','));
console.log('id mismatch', idWrong.length, idWrong.slice(0, 20).join(','));
console.log('distinct reasons', whys.size, '| repeated reasons', repeated.length, repeated.slice(0, 3).map(([w, c]) => c + 'x ' + w.slice(0, 50)).join(' || '));
console.log('reason shares no word with the pair', noToken.length, noToken.slice(0, 30).join(','));
console.log('control (first reader said not SAME):', control.join(' '));
console.log('b15-7 pair:', b15 && by.get(b15.n) ? by.get(b15.n).verdict : 'not read');
console.log('disagree with first reader', disagree.length);
fs.writeFileSync(path.join(__dirname, 'disagree.json'), JSON.stringify(disagree, null, 1));
fs.writeFileSync(path.join(__dirname, 'missing.json'), JSON.stringify(missing));
