const fs = require('fs'), path = require('path'), vm = require('vm');
const D = __dirname, root = path.resolve(D, '..', '..', '..', '..', '..');
const mentions = JSON.parse(fs.readFileSync(path.join(D, 'mentions.json'), 'utf8'));
const verdicts = JSON.parse(fs.readFileSync(path.join(D, 'verdicts.json'), 'utf8'));
const merges = JSON.parse(fs.readFileSync(path.join(D, '..', 'merge-list.json'), 'utf8'));
const removed = new Set(merges.map(x => x.dead));
const entries = new Map();
for (const [file, name] of [['questions.peds.js','Q_PEDS'],['questions.peds.ep.js','Q_PEDS_EP'],['questions.peds.ep2.js','Q_PEDS_EP2'],['questions.peds.sa.js','Q_PEDS_SA']]) {
  const box = {}; vm.runInNewContext(fs.readFileSync(path.join(root, 'app', 'data', file), 'utf8'), box);
  for (const q of box[name]) if (q) entries.set(q.id, q);
}
const count = (s, needle) => s.split(needle).length - 1;
const fail = message => { throw new Error(message); };
if (mentions.length !== 74 || verdicts.length !== 74) fail(`expected 74 rows; mentions=${mentions.length}, verdicts=${verdicts.length}`);
for (let i = 0; i < 74; i++) {
  const m = mentions[i], v = verdicts[i];
  for (const key of ['carrier','field','dead','keep']) if (v[key] !== m[key]) fail(`row ${i}: ${key} differs from mentions`);
  if (!['swap','reword','append-keeper','flag'].includes(v.op)) fail(`row ${i}: invalid op`);
  const field = entries.get(v.carrier)[v.field];
  const text = typeof field === 'string' ? field : JSON.stringify(field);
  if (!v.find || !text.includes(v.find)) fail(`row ${i}: find is absent from decoded field`);
  if (v.op === 'reword' && count(text, v.find) !== 1) fail(`row ${i}: reword find is not unique`);
  const idsInReplace = v.replace ? (v.replace.match(/ped[a-z0-9]+-[a-z0-9]+-[0-9]+/g) || []) : [];
  if (idsInReplace.some(id => removed.has(id))) fail(`row ${i}: replace contains a removed id`);
  if (v.op === 'append-keeper') {
    const dead = entries.get(v.dead);
    if (!dead || typeof v.append !== 'string' || !dead.explanation.includes(v.append)) fail(`row ${i}: append is not a literal substring of removed explanation`);
  }
}
console.log(`OK: 74 ordered verdicts checked; ${verdicts.filter(v => v.op === 'swap').length} swap, ${verdicts.filter(v => v.op === 'reword').length} reword, ${verdicts.filter(v => v.op === 'append-keeper').length} append-keeper, ${verdicts.filter(v => v.op === 'flag').length} flag.`);
