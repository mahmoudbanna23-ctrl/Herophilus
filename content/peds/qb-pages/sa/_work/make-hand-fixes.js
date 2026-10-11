// make-hand-fixes.js - adds hand repairs for items whose stem/options picked up figure or neighbour text.
// Reads the current sa-book.array.js (any state), cuts, and merges entries into hand-entries.json. Idempotent.
const fs = require('fs'), vm = require('vm'), path = require('path');
const box = {}; vm.createContext(box);
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'sa-book.array.js'), 'utf8'), box);
const hp = path.join(__dirname, 'hand-entries.json');
const hand = JSON.parse(fs.readFileSync(hp, 'utf8'));
const get = n => box.SA_BOOK.find(x => x.num === n);
const SEL = 'Select one answer only.';
function cutStem(s) { const i = s.indexOf(SEL); return i < 0 ? s : s.slice(0, i + SEL.length); }
function cutLast(opts, marker) { const o = opts.slice(); const i = o[o.length - 1].indexOf(marker); if (i >= 0) o[o.length - 1] = o[o.length - 1].slice(0, i).trim(); return o; }
const fixes = {
  '4.6': { reason: 'figure axis text leaked into stem and option E', marker: ' Left ear 125' },
  '4.8': { reason: 'figure axis text leaked into stem and option E', marker: ' Left ear 125' },
  '4.5': { reason: 'figure axis text leaked into option E', marker: ' Right ear 125' },
  '4.7': { reason: 'figure axis text leaked into option E', marker: ' Right ear 125' },
  '7.9': { reason: 'figure table text leaked into option E and stem', marker: ' 12 12' },
  '6.2': { reason: 'neighbour 6.1 text leaked into option E; stem tail figure letters', marker: ' Where is the most' },
  '26.4': { reason: 'next-page figure text leaked into stem and option E', marker: ' Insulin injection' },
};
for (const [n, f] of Object.entries(fixes)) {
  const x = get(n); if (!x) throw new Error('missing ' + n);
  hand['pedsa-b' + n.split('.').join('-')] = { reason: f.reason, stem: cutStem(x.stem), options: cutLast(x.options, f.marker) };
}
hand['pedsa-b7-9'].stem = get('7.9').stem.replace(' 12 12 12 12 34 34', ''); // body-chart fraction labels (1½, 1¾) leaked into the stem
// 6.2: Fig. 6.1 belongs to 6.1 (its text leaked into option E); only Fig. 6.2 is cited by this item
hand['pedsa-b6-2'].figs = get('6.2').figs.filter(f => f.label !== 'Fig. 6.1');
// 29.11 / 29.12: EEG figure channel numbers and scale label are inside the stem text
for (const n of ['29.11', '29.12']) {
  const x = get(n);
  hand['pedsa-b' + n.split('.').join('-')] = { reason: 'EEG figure channel numbers leaked into stem', stem: x.stem.replace(/ 1 2 3 4 5 6 7 8 9 10 11 12 (?:200 )?µV¹³ 14 15 16/, '') };
}
// 18.6.1-5: the scenario of each sub-item is a trace inside Fig. 18.1 (PDF p.111), printed there only as its label
for (let k = 1; k <= 5; k++) {
  const n = '18.6.' + k, x = get(n), lab = n;
  hand['pedsa-b18-6-' + k] = { reason: 'scenario is a figure (Fig. 18.1); stem = set lead-in + printed sub-item label', stem: x.stem.endsWith(' ' + lab) ? x.stem : x.stem + ' ' + lab, figs: [{ label: 'Fig. 18.1', page: 111, where: 'question' }] };
}
// 7.10: the page prints option E (Liver function tests) above option D (Serum iron); lettered here by the printed letters
const x710 = get('7.10');
hand['pedsa-b7-10'] = { reason: 'options D/E printed out of order; figure text in stem', stem: cutStem(x710.stem), options: [x710.options[0], x710.options[1], x710.options[2], 'Serum iron', 'Liver function tests'] };
fs.writeFileSync(hp, JSON.stringify(hand, null, 2) + '\n', 'utf8');
console.log('hand entries now', Object.keys(hand).length);
