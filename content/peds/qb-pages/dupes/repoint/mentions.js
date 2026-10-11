// Lists every place a surviving Pediatrics entry names an id the merge list removes.
// Usage (from the Herophilus root): node content/peds/qb-pages/dupes/repoint/mentions.js [data dir, default app/data]
// Writes repoint/mentions.json: [{carrier, file, field, dead, keep, self}] (self = the carrier is the keeper of that id).
const fs = require('fs'), path = require('path'), vm = require('vm');
const D = __dirname, root = path.resolve(D, '..', '..', '..', '..', '..');
const dir = path.resolve(root, process.argv[2] || 'app/data');
const keepOf = new Map(JSON.parse(fs.readFileSync(path.join(D, '..', 'merge-list.json'), 'utf8')).map(m => [m.dead, m.keep]));
const out = [];
for (const [f, n] of [['questions.peds.js', 'Q_PEDS'], ['questions.peds.ep.js', 'Q_PEDS_EP'], ['questions.peds.ep2.js', 'Q_PEDS_EP2'], ['questions.peds.sa.js', 'Q_PEDS_SA']]) {
  const box = {}; vm.runInNewContext(fs.readFileSync(path.join(dir, f), 'utf8'), box);
  for (let i = 0; i < box[n].length; i++) {
    const q = box[n][i];
    if (!q || keepOf.has(q.id)) continue;
    for (const field of Object.keys(q)) {
      if (field === 'id') continue;
      for (const m of new Set(JSON.stringify(q[field]).match(/ped[a-z0-9]+-[a-z0-9]+-[0-9]+(?:-[0-9]+)?/g) || []))
        if (keepOf.has(m)) out.push({ carrier: q.id, file: f, field, dead: m, keep: keepOf.get(m), self: keepOf.get(m) === q.id });
    }
  }
}
fs.writeFileSync(path.join(D, 'mentions.json'), JSON.stringify(out, null, 1));
const tally = k => JSON.stringify(out.reduce((t, r) => (t[r[k]] = (t[r[k]] || 0) + 1, t), {}));
console.log('mentions', out.length, '| carriers', new Set(out.map(r => r.carrier)).size, '| removed ids named', new Set(out.map(r => r.dead)).size, '| self', out.filter(r => r.self).length);
console.log('by field', tally('field'), '| by file', tally('file'));
