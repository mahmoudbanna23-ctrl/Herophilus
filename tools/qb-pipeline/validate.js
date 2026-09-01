// Whole-corpus validation, run AFTER a splice. REBUILT 2026-09-02.
//
//   node tools/qb-pipeline/validate.js            (all four modules)
//   node tools/qb-pipeline/validate.js ophtho     (one)
//
// Counting questions in this repo is a trap in three separate ways, and all
// three are handled here rather than by grep:
//   * the files are classic scripts — require() gives undefined, so vm.
//   * they MIX quoted-key ("id":) and bare-key (id:) entries, so a key grep
//     undercounts catastrophically and reads as data loss.
//   * grep -c "^  { id:" undercounts questions.ophtho.js outright (mixed
//     CRLF/LF and mixed indentation).
// Load the array and read .length. Nothing else is a count.

'use strict';
const fs = require('fs');
const path = require('path');
const L = require('./lib.js');

const ROOT = path.resolve(__dirname, '..', '..');
const DATA = path.join(ROOT, 'app', 'data');
const MODULES = { ent: 'ent', ophtho: 'ophtho', neuro: 'neuro', peds: 'peds' };

const only = process.argv[2];
const modulesSrc = fs.readFileSync(path.join(DATA, 'modules.js'), 'utf8');
const knownChapters = new Set([...modulesSrc.matchAll(/\[\s*'([a-z0-9-]+)'\s*,/g)].map(m => m[1]));

let fail = 0, total = 0;
const bad = m => { fail++; console.log('  FAIL ' + m); };

for (const key of Object.keys(MODULES)) {
  if (only && only !== key) continue;
  const qPath = path.join(DATA, 'questions.' + key + '.js');
  const cPath = path.join(DATA, 'cases.' + key + '.js');
  if (!fs.existsSync(qPath)) continue;

  const qs = L.loadCorpus(qPath);
  const cases = fs.existsSync(cPath) ? L.loadCorpus(cPath) : [];
  console.log(key + ':  ' + qs.length + ' questions + ' + cases.length + ' cases = ' + (qs.length + cases.length));
  total += qs.length + cases.length;

  // sparse holes — Array.filter skips them
  for (let i = 0; i < qs.length; i++) if (!(i in qs)) bad(key + ' sparse hole at index ' + i);

  const ids = new Set();
  qs.concat(cases).forEach(q => {
    if (!q.id) return bad(key + ' entry with no id');
    if (ids.has(q.id)) bad('duplicate id ' + q.id);
    ids.add(q.id);
    if (q.chapter && !knownChapters.has(q.chapter)) bad(q.id + ' -> unknown chapter ' + q.chapter);
    if (q.type !== 'case') {
      const n = (q.options || []).length;
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= n)
        bad(q.id + ' answer ' + q.answer + ' out of range for ' + n + ' options');
    }
  });

  // dead backticked id references, corpus-wide
  const dead = [];
  qs.concat(cases).forEach(q => {
    (String(q.explanation).match(/`([a-z]+-[a-z0-9-]*\d+)`/g) || []).forEach(r => {
      const id = r.slice(1, -1);
      if (!ids.has(id) && /^(opmcq|entep|npqb|op|ent)/.test(id)) dead.push(q.id + ' -> ' + id);
    });
  });
  if (dead.length) bad(key + ' dead id references (' + dead.length + '):\n       ' + dead.slice(0, 40).join('\n       '));

  // per-bank counts. These SUM OVER the question count on purpose: a question
  // in two banks is one entry with `alsoIn`, never two entries.
  const banks = {};
  qs.forEach(q => {
    const all = new Set([q.bank].concat(q.alsoIn || []).filter(Boolean));
    all.forEach(b => banks[b] = (banks[b] || 0) + 1);
  });
  const parts = Object.keys(banks).sort().map(b => b + ' ' + banks[b]);
  if (parts.length) console.log('       banks: ' + parts.join('  ') +
    '   (summing past ' + qs.length + ' is correct — alsoIn)');

  // options range
  const counts = {};
  qs.forEach(q => { const n = (q.options || []).length; counts[n] = (counts[n] || 0) + 1; });
  console.log('       option counts: ' + Object.keys(counts).sort((a,b)=>a-b).map(n => n + 'x' + counts[n]).join('  '));

  // images
  const imgs = qs.filter(q => q.image);
  const noAlt = imgs.filter(q => !q.imgAlt).map(q => q.id);
  if (noAlt.length) bad('image without imgAlt: ' + noAlt.join(', '));
  if (imgs.length) console.log('       images: ' + imgs.length);
}

console.log('\ncorpus total (loaded, not grepped): ' + total);
console.log(fail ? (fail + ' FAILURES') : 'clean');
process.exit(fail ? 1 : 0);
