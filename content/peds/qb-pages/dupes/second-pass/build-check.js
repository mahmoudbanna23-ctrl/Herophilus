// Builds the outside second-read job for the seven second-pass pairs (verdicts not shown to the reader).
// Reads the pre-merge snapshot so the removed copies are still there.
//   node content/peds/qb-pages/dupes/second-pass/build-check.js "<before-merge snapshot dir>"
//   node "D:/claude os/Tools/factory/factory.mjs" run content/peds/qb-pages/dupes/second-pass/check-job
const fs = require('fs'), path = require('path'), vm = require('vm');
const J = path.join(__dirname, 'check-job');
const FILES = [['questions.peds.js', 'Q_PEDS'], ['questions.peds.ep.js', 'Q_PEDS_EP'], ['questions.peds.ep2.js', 'Q_PEDS_EP2'], ['questions.peds.sa.js', 'Q_PEDS_SA']];
const Q = new Map();
for (const [f, n] of FILES) { const box = {}; vm.runInNewContext(fs.readFileSync(path.join(process.argv[2], f), 'utf8'), box); for (const q of box[n]) Q.set(q.id, q); }
const PAIRS = ['pedhd-renal-8|pedep2-ren-42', 'pedhd-peri-5|pedep-per-5', 'pedhd-peri-9|pedep-mf3-16', 'pedhd-alg-2|pedep-alg-2', 'pedhd-emg-12|pedep-mf2-2', 'pedep-neo-36|pedep-mf3-21', 'pedep-gp-6|pedep-nut-21'];
const show = q => q.stem + '\n' + q.options.map((o, i) => String.fromCharCode(65 + i) + '. ' + o).join('\n') + '\nMarked answer: ' + q.options[q.answer];
fs.mkdirSync(path.join(J, 'items'), { recursive: true });
fs.copyFileSync(path.join(__dirname, '..', 'check-job', 'job.json'), path.join(J, 'job.json')); // same prompt as the first-pass second read
for (const p of PAIRS) {
  const [a, b] = p.split('|').map(id => Q.get(id));
  if (!a || !b) throw new Error('missing ' + p);
  fs.writeFileSync(path.join(J, 'items', p.replace('|', '__') + '.json'), JSON.stringify({ input: 'QUESTION A\n' + show(a) + '\n\nQUESTION B\n' + show(b) }));
}
console.log('items ' + PAIRS.length);
