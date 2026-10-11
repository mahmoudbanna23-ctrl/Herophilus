// Second pass: prints the seven loose-rule pairs side by side for a ruling, with the lossless-rule facts.
//   node content/peds/qb-pages/dupes/second-pass/dump.js > content/peds/qb-pages/dupes/second-pass/dump.txt
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(__dirname, '..', '..', '..', '..', '..');
const FILES = [['questions.peds.js', 'Q_PEDS'], ['questions.peds.ep.js', 'Q_PEDS_EP'], ['questions.peds.ep2.js', 'Q_PEDS_EP2'], ['questions.peds.sa.js', 'Q_PEDS_SA']];
const Q = new Map();
for (const [f, n] of FILES) { const box = {}; vm.runInNewContext(fs.readFileSync(path.join(root, 'app', 'data', f), 'utf8'), box); for (const q of box[n]) Q.set(q.id, Object.assign({ _file: f }, q)); }
const PAIRS = ['pedhd-renal-8|pedep2-ren-42', 'pedhd-peri-5|pedep-per-5', 'pedhd-peri-9|pedep-mf3-16', 'pedhd-alg-2|pedep-alg-2', 'pedhd-emg-12|pedep-mf2-2', 'pedep-neo-36|pedep-mf3-21', 'pedep-gp-6|pedep-nut-21'];
const norm = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const show = q => {
  console.log('--- ' + q.id + '  [' + q._file + ']  module/chapter ' + q.module + '/' + q.chapter + '  bank ' + q.bank + '  alsoIn ' + JSON.stringify(q.alsoIn || []) + '  image ' + (q.image || '-') + '  type ' + (q.type || 'mcq'));
  console.log('STEM (' + q.stem.length + '): ' + q.stem);
  (q.options || []).forEach((o, i) => console.log('  ' + (i === q.answer ? '*' : ' ') + String.fromCharCode(97 + i) + ') ' + o));
  console.log('SOURCE: ' + q.source);
};
for (const p of PAIRS) {
  const [a, b] = p.split('|').map(id => Q.get(id));
  console.log('\n==================== ' + p);
  if (!a || !b) { console.log('MISSING ' + (!a ? p.split('|')[0] : '') + ' ' + (!b ? p.split('|')[1] : '')); continue; }
  show(a); show(b);
  const A = a.options.map(norm), B = b.options.map(norm);
  console.log('FACTS: options ' + A.length + ' vs ' + B.length + ' | only in first: ' + JSON.stringify(a.options.filter((o, i) => !B.includes(A[i]))) + ' | only in second: ' + JSON.stringify(b.options.filter((o, i) => !A.includes(B[i]))) +
    ' | key text same: ' + (norm(a.options[a.answer]) === norm(b.options[b.answer])) + ' | stem ratio ' + (Math.min(a.stem.length, b.stem.length) / Math.max(a.stem.length, b.stem.length)).toFixed(2));
}
