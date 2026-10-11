// Print the sweep's candidate pairs side by side, and run a positive control on the sweep.
// usage: node show-pairs.js
const path = require('path');
const fs = require('fs');
const { execFileSync } = require('child_process');
const ROOT = path.resolve(__dirname, '../../../../..');
const L = require(path.join(ROOT, 'tools/qb-pipeline/lib.js'));
const SA = path.join(ROOT, 'content/peds/qb-pages/sa');
const files = [
  path.join(SA, 'sa-p1.array.js'), path.join(SA, 'sa-p2.array.js'),
  path.join(ROOT, 'app/data/questions.peds.js'),
  path.join(ROOT, 'app/data/questions.peds.ep.js'),
  path.join(ROOT, 'app/data/questions.peds.ep2.js'),
];
const byId = {};
files.forEach(f => L.loadCorpus(f).forEach(q => { byId[q.id] = q; }));

const pairs = [
  ['pedsa2-5-3', 'pedep2-res-44'], ['pedsa2-1-5', 'pedep2-mf4-67'],
  ['pedsa1-9-2', 'pedsa2-6-18'], ['pedsa1-9-2', 'pedsa2-7-1'],
  ['pedsa1-3-5', 'pedsa1-10-2'], ['pedsa1-3-14', 'pedsa1-m-3'],
  ['pedsa2-4-5', 'pedsa2-13-18'], ['pedsa2-6-4', 'pedsa2-13-1'],
  ['pedsa2-8-11', 'pedsa2-10-9'], ['pedsa2-11-3', 'pedsa2-13-16'],
];
const show = id => {
  const q = byId[id];
  if (!q) return id + '  MISSING';
  const o = q.options || [];
  return id + ' [' + (q.kind || q.bank) + '] ' + String(q.stem).slice(0, 300) +
    '\n     opts: ' + o.map((t, i) => (i === q.answer ? '*' : '') + String(t).slice(0, 40)).join(' | ');
};
pairs.forEach(([a, b]) => console.log('--\n' + show(a) + '\n' + show(b)));

// positive control: five shipped questions fed back in must come out as exact hits
const ep2 = L.loadCorpus(files[4]);
const pick = [3, 150, 300, 450, 600].map(i => ep2[i]);
const ctl = path.join(__dirname, 'sweep', 'control.array.js');
fs.writeFileSync(ctl, 'var CTL = ' + JSON.stringify(pick) + ';\n');
const out = execFileSync('node', [path.join(ROOT, 'tools/qb-pipeline/sweep.js'), ctl, files[4]], { encoding: 'utf8' });
const hits = pick.filter(q => new RegExp('A exact\\s+' + q.id + '\\s+' + q.id).test(out)).length;
console.log('--\nCONTROL: ' + hits + ' of ' + pick.length + ' planted questions found as exact');
