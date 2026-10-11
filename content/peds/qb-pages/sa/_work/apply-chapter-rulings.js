// Applies _work/chapters-rulings.jsonl to sa-chapters.json. Keeps the first sort as sa-chapters.first-sort.json.
// Refuses to write if a ruling names an unknown id or its `first` is not what the file holds.
const fs = require('fs'), path = require('path');
const SA = path.join(__dirname, '..');
const file = path.join(SA, 'sa-chapters.json'), keep = path.join(SA, 'sa-chapters.first-sort.json');
if (!fs.existsSync(keep)) fs.copyFileSync(file, keep);
const base = JSON.parse(fs.readFileSync(keep, 'utf8'));
const rulings = fs.readFileSync(path.join(__dirname, 'chapters-rulings.jsonl'), 'utf8').split(/\r?\n/).filter(Boolean).map(l => JSON.parse(l));
const bad = rulings.filter(r => !base[r.id] || base[r.id].chapter !== r.first);
if (bad.length) { console.log('REFUSED, mismatched rulings:', bad.map(r => r.id).join(' ')); process.exit(1); }
let moved = 0;
for (const r of rulings) {
  if (r.final !== r.first) moved++;
  base[r.id] = Object.assign({}, base[r.id], { chapter: r.final }, r.secondary ? { secondary: r.secondary } : {});
}
fs.writeFileSync(file, JSON.stringify(base, null, 1));
const per = {};
for (const v of Object.values(base)) per[v.chapter] = (per[v.chapter] || 0) + 1;
console.log('entries', Object.keys(base).length, '| rulings', rulings.length, '| moved', moved, '| chapters used', Object.keys(per).length);
console.log(Object.entries(per).sort((a, b) => b[1] - a[1]).map(([k, n]) => k + ' ' + n).join(' · '));
