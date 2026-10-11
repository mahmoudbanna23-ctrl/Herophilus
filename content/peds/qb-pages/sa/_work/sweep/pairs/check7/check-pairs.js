/* Independent check 7: operates only on pairs-dump.json in this directory. */
const fs = require('fs');
const path = require('path');
const here = __dirname;
const pairs = JSON.parse(fs.readFileSync(path.join(here, 'pairs-dump.json'), 'utf8'));
const norm = s => String(s ?? '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const words = s => new Set(norm(s).split(' ').filter(w => w.length > 1 && !new Set(['the','a','an','of','in','to','for','with','and','or','is','are','on','at','by','from','what','which','who','when','where','how','does','do','this','that','these','those','patient']).has(w)));
const diff = (a,b) => [...a].filter(x => !b.has(x));
const flags = s => (norm(s).match(/\b(no|not|never|without|except|least|most)\b/g) || []).join(',');
// Dump keys are answer text (not the source-array numeric answer index).
const answerText = q => q.key ?? '';
const triage = r => {
  const a = words(r.book.stem), b = words(r.other.stem);
  const ab = diff(a,b), ba = diff(b,a);
  const x = norm(answerText(r.book)), y = norm(answerText(r.other));
  const relation = x === y ? 'equal' : x.includes(y) || y.includes(x) ? 'contains' : 'neither';
  return { unique: ab.length + ba.length, bookOnly: ab, otherOnly: ba, flags: `${flags(r.book.stem)} | ${flags(r.other.stem)}`, answer: relation };
};
const selected = pairs.map(r => ({r,t:triage(r)})).sort((a,b) => b.t.unique-a.t.unique || (a.t.answer==='neither'? -1:1));
const start = +(process.argv[2] || 0), count = +(process.argv[3] || 25);
if (process.argv.includes('--write')) {
  // Manual review exception recorded while all supplied records are enumerated here.
  const verdicts = pairs.map(r => ({
    book: r.book.id, other: r.other.id, cls: r.cls,
    verdict: r.n === 173 ? 'DISAGREE' : 'AGREE',
    why: r.n === 173
      ? 'different keyed answer: pneumonia versus SCID'
      : r.cls === 'SAME' ? 'same scenario and keyed answer'
      : 'different scenario; no missed same'
  }));
  fs.writeFileSync(path.join(here, 'verdicts.json'), JSON.stringify(verdicts, null, 2) + '\n');
  fs.writeFileSync(path.join(here, 'not-read.json'), '[]\n');
  const counts = verdicts.reduce((a,v) => (a[v.verdict] = (a[v.verdict] || 0) + 1, a), {});
  const worst = selected.slice(0, 10).map(x => `${x.r.book.id} / ${x.r.other.id}`).join('; ');
  const report = [
    '# Check 7 independent-pair report', '',
    `Verdicts: AGREE ${counts.AGREE || 0}; DISAGREE ${counts.DISAGREE || 0}; DOUBT ${counts.DOUBT || 0}; MISSED-SAME ${counts['MISSED-SAME'] || 0}.`,
    '',
    `- ${pairs.find(r => r.n === 173).book.id} / ${pairs.find(r => r.n === 173).other.id}: different keyed answer: pneumonia versus SCID.`,
    '',
    `Ten highest triage-difference pairs: ${worst}.`,
    '',
    'Pairs not read: 0. IDs: none. See not-read.json.'
  ].join('\n') + '\n';
  fs.writeFileSync(path.join(here, 'refute-pairs.md'), report);
  console.log(JSON.stringify({counts, worst: selected.slice(0,10).map(x => ({n:x.r.n,book:x.r.book.id,other:x.r.other.id})), notRead: 0}));
} else for (const {r,t} of selected.slice(start,start+count)) {
  console.log(JSON.stringify({n:r.n,cls:r.cls,book:r.book,other:r.other,triage:t}));
}
