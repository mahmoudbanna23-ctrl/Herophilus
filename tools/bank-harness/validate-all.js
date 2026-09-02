// Read-only sweep of every LIVE question file at once. Writes nothing, touches no draft.
//   node tools/bank-harness/validate-all.js            # every app/data/questions.*.js
//   node tools/bank-harness/validate-all.js peds neuro # only those files
//
// Written 2026-09-02 by the watch session: the per-bank validators check a DRAFT against its
// staging record; nothing checked the live files as a set, so a dead id created by one chat's
// fold and a duplicate id across two files were both invisible until boot. This is the one
// command the watch runs after any splice. Hard failures exit 1; the rest is counts to look at.
//
// HARD (exit 1):  file does not parse / not an array / sparse holes / duplicate id across files /
//                 answer index outside options / fewer than 2 options / a backticked id-shaped
//                 token whose prefix belongs to a live bank but which no live file holds.
// SOFT (listed):  source without a "p.N" page citation / explanation under 120 words /
//                 identical normalised stems across entries (same bank AND cross-bank) /
//                 the phrase "held as one question" (every time it has been checked it was false).
const fs = require('fs'), vm = require('vm'), path = require('path');
const R = path.join(__dirname, '..', '..');
const DIR = path.join(R, 'app', 'data');
const want = process.argv.slice(2);
let files = fs.readdirSync(DIR).filter(f => /^questions\.[a-z.]+\.js$/.test(f)).sort();
if (want.length) files = files.filter(f => want.some(w => f === 'questions.' + w + '.js'));
if (!files.length) { console.error('no question files matched'); process.exit(2); }

const hard = [], soft = [];
const all = [];            // {q, file}
const byId = new Map();
for (const f of files) {
  const p = path.join(DIR, f);
  const t = fs.readFileSync(p, 'utf8');
  const m = t.match(/^var ([A-Za-z0-9_]+) = \[/m);
  if (!m) { hard.push(f + ': no "var NAME = [" header'); continue; }
  let arr;
  try { vm.runInThisContext(t, { filename: f }); arr = globalThis[m[1]]; }
  catch (e) { hard.push(f + ': DOES NOT PARSE: ' + e.message); continue; }
  if (!Array.isArray(arr)) { hard.push(f + ': ' + m[1] + ' is not an array'); continue; }
  let holes = 0;
  for (let i = 0; i < arr.length; i++) if (!(i in arr)) holes++;
  if (holes) hard.push(f + ': ' + holes + ' sparse holes');
  arr.forEach((q, i) => {
    if (!q || typeof q !== 'object') { hard.push(f + '[' + i + ']: not an object'); return; }
    all.push({ q, file: f });
    if (byId.has(q.id)) hard.push('DUPLICATE ID ' + q.id + ' in ' + byId.get(q.id) + ' and ' + f);
    else byId.set(q.id, f);
  });
  console.log(f.padEnd(26) + m[1].padEnd(10) + String(arr.length).padStart(5) + ' entries, holes ' + holes);
}

// prefixes that belong to live banks: everything up to the last '-' + digits
const prefixes = new Set();
for (const id of byId.keys()) { const m = /^(.*-)\d+[a-z]?$/.exec(id); if (m) prefixes.add(m[1]); }
const WORD = /[A-Za-z0-9]+/g;
const norm = s => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const stems = new Map();
let noPage = 0, thin = 0, heldAsOne = 0;
for (const { q, file } of all) {
  const tag = file + ' ' + q.id;
  if (q.type === 'case') continue;
  if (!Array.isArray(q.options) || q.options.length < 2) hard.push(tag + ': ' + (q.options ? q.options.length : 'no') + ' options');
  else if (!(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length))
    hard.push(tag + ': answer ' + JSON.stringify(q.answer) + ' outside options[0..' + (q.options.length - 1) + ']');
  const text = (q.explanation || '') + ' ' + (q.source || '') + ' ' + (q.objective || '');
  for (const m of text.matchAll(/`([a-z][a-z0-9]*(?:-[a-z0-9]+)+)`/g)) {
    const id = m[1];
    if (byId.has(id)) continue;
    const pm = /^(.*-)\d+[a-z]?$/.exec(id);
    if (pm && prefixes.has(pm[1])) hard.push(tag + ': DEAD ID `' + id + '`');
  }
  if (!/\bp\.\s?\d+/.test(q.source || '')) { noPage++; soft.push(tag + ': source has no p.N citation'); }
  const words = ((q.explanation || '').match(WORD) || []).length;
  if (words < 120) { thin++; soft.push(tag + ': explanation ' + words + ' words'); }
  if (/held as one question/i.test(q.explanation || '')) { heldAsOne++; soft.push(tag + ': says "held as one question"'); }
  const k = norm(q.stem);
  if (k.length > 20) { if (!stems.has(k)) stems.set(k, []); stems.get(k).push(tag); }
}
const dupGroups = [...stems.values()].filter(g => g.length > 1);
const cross = dupGroups.filter(g => new Set(g.map(x => x.split(' ')[0])).size > 1);

console.log('\nlive entries ' + all.length + ' | ids ' + byId.size + ' | prefixes ' + [...prefixes].join(' '));
console.log('soft: no page citation ' + noPage + ' | thin (<120 w) ' + thin + ' | "held as one" ' + heldAsOne
  + ' | duplicate-stem groups ' + dupGroups.length + ' (' + cross.length + ' cross-file)');
if (process.argv.includes('--soft')) console.log('  ' + soft.join('\n  '));
if (dupGroups.length) {
  console.log('duplicate stems (same normalised text):');
  dupGroups.slice(0, process.argv.includes('--all-dups') ? 1e9 : 25).forEach(g => console.log('  ' + g.join(' | ')));
  if (dupGroups.length > 25 && !process.argv.includes('--all-dups')) console.log('  ... --all-dups for the rest');
}
if (hard.length) { console.log('\nHARD FAILURES ' + hard.length + ':\n  ' + hard.join('\n  ')); process.exit(1); }
console.log('\nALL HARD CHECKS PASSED (' + files.length + ' files). --soft lists the soft items one per line.');
