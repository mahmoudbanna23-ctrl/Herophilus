// Builds repoint/post-merge-verdicts.json: the notes the outside checker found missing after the merge
// (a removed copy printed something its kept copy does not record). Feed it to apply.js:
//   node content/peds/qb-pages/dupes/repoint/post-merge-notes.js "<before-merge snapshot dir>"
//   node content/peds/qb-pages/dupes/repoint/apply.js --verdicts content/peds/qb-pages/dupes/repoint/post-merge-verdicts.json [--write]
// Every row is a whole-field reword, so apply.js's own reload-and-compare check covers it.
const fs = require('fs'), path = require('path'), vm = require('vm');
const D = __dirname, root = path.resolve(D, '..', '..', '..', '..', '..');
const FILES = [['questions.peds.js', 'Q_PEDS'], ['questions.peds.ep.js', 'Q_PEDS_EP'], ['questions.peds.ep2.js', 'Q_PEDS_EP2'], ['questions.peds.sa.js', 'Q_PEDS_SA']];
const load = dir => { const m = new Map(); for (const [f, n] of FILES) { const box = {}; vm.runInNewContext(fs.readFileSync(path.join(dir, f), 'utf8'), box); for (const q of box[n]) m.set(q.id, q); } return m; };
const B = load(process.argv[2]), A = load(path.join(root, 'app', 'data'));
const keepOf = new Map(JSON.parse(fs.readFileSync(path.join(D, '..', 'merge-list.json'), 'utf8')).map(m => [m.dead, m.keep]));
const MARK = /\s*(?:Written for this bank\b|\*The expansion above this line)[^]*$/; // same closing markers as apply.js
const ins = (s, note) => { const m = s.match(MARK); return m ? s.slice(0, m.index) + '\n\n' + note + m[0] : s + '\n\n' + note; };
const must = (ok, msg) => { if (!ok) { console.log('STOP: ' + msg); process.exit(1); } };
const rows = [];
const note = (dead, text, why) => {
  const keep = keepOf.get(dead); must(keep && A.has(keep) && B.has(dead), dead + ' is not a merged pair');
  const s = A.get(keep).explanation; must(!s.includes(text), keep + ' already holds the note');
  rows.push({ carrier: keep, field: 'explanation', dead, keep, op: 'reword', find: s, replace: ins(s, text), why });
};
const src1 = id => B.get(id).source.split(';')[0].trim();

// 1. The exam printing gives the age; the topic printing does not.
note('pedep-mf3-14', 'The Model Final Exam printing of this question (' + src1('pedep-mf3-14') + ') words the stem: "' + B.get('pedep-mf3-14').stem.trim() + '"',
  'checker F3: age in the removed stem was not on the kept copy');

// 2. The per-question table that three surviving entries point at lived only in the removed copy.
const table = B.get('pedep2-liv-6').explanation.split('\n').filter(l => l.trim().startsWith('|'));
must(table.length >= 6, 'liv-6 table not found');
note('pedep2-liv-6', 'The four questions that share this option list:\n\n' + table.join('\n'), 'checker F4: table named by pedep2-liv-7/8/9 carried over from the removed copy');

// 3. Option C is printed without the alpha in the endpoint copy.
must(B.get('pedep2-hem-31').options[2] === 'Thalassaemia major', 'hem-31 option C is not as recorded');
note('pedep2-hem-31', 'The endpoint printing (' + src1('pedep2-hem-31') + ') gives option C as "Thalassaemia major", without the α.', 'ruling 377: endpoint wording of option C recorded');

// 4. Urine white cell unit: only when the page read confirms it (argv[3] = "mm2").
if (process.argv[3] === 'mm2') for (const n of [11, 12, 13, 14])
  note('pedep2-ren-' + n, 'The endpoint printing (' + src1('pedep2-ren-' + n) + ') gives the white blood cell counts per mm² where this book prints mm³.', 'checker F1: unit as printed in the removed copy, read off the page');

// (checker F2, platelet exponent: pedhd-haem-5 already carries the printing note; its stem was corrected by hand, page read 2026-10-11.)

// 5. An objective that promises a table its target does not hold.
const old = JSON.parse(fs.readFileSync(path.join(D, 'verdicts.json'), 'utf8')).find(v => v.carrier === 'pedep-inf-44' && v.field === 'objective');
const o = A.get('pedep-inf-44').objective, bad = 'full comparative table at';
must(old && o.split(bad).length === 2, 'inf-44 objective is not as recorded');
rows.push({ carrier: 'pedep-inf-44', field: 'objective', dead: old.dead, keep: old.keep, op: 'reword', find: o, replace: o.replace(bad, 'comparative reasoning at'), why: 'checker F5: no table at the named entry' });

fs.writeFileSync(path.join(D, 'post-merge-verdicts.json'), JSON.stringify(rows, null, 1));
console.log('rows', rows.length, rows.map(r => r.carrier).join(' '));
