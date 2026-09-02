// Pre-splice check on a .draft.js. REBUILT 2026-09-02 (see lib.js).
//
//   node tools/qb-pipeline/stagecheck.js <draft.js> <staging.array.js> <corpus.js> <modules.js>
//
// Everything here is a check the project has been burned by at least once.
// It refuses to pass a file it cannot fully account for.

'use strict';
const fs = require('fs');
const L = require('./lib.js');

const [draftPath, stagePath, corpusPath, modulesPath] = process.argv.slice(2);
if (!draftPath || !corpusPath) {
  console.error('usage: stagecheck.js <draft> [staging] <corpus> [modules]');
  process.exit(2);
}

const draft = L.loadDraft(draftPath);
const corpus = L.loadCorpus(corpusPath);
const staging = stagePath && fs.existsSync(stagePath) ? L.loadStaging(stagePath) : null;

let fail = 0;
const bad = (msg) => { fail++; console.log('FAIL  ' + msg); };
const ok = (msg) => console.log('ok    ' + msg);

// --- sparse holes. Array.filter SKIPS them; index instead. -------------------
let holes = 0;
for (let i = 0; i < draft.length; i++) if (!(i in draft)) holes++;
holes ? bad(holes + ' sparse holes in the draft array') : ok('no sparse holes (' + draft.length + ' entries)');

// --- ids: shape, uniqueness, collision with the shipped corpus ---------------
const shipped = new Set(corpus.map(q => q.id));
const seen = new Set();
draft.forEach((q, i) => {
  if (!q.id) return bad('entry ' + i + ' has no id');
  if (seen.has(q.id)) bad('duplicate id inside the draft: ' + q.id);
  seen.add(q.id);
  if (shipped.has(q.id)) bad('id ALREADY SHIPPED: ' + q.id);
});
if (!fail) ok('ids unique, none already in the corpus');

// --- answer is a ZERO-BASED INDEX, and it must be in range -------------------
draft.forEach(q => {
  const n = (q.options || []).length;
  if (typeof q.answer !== 'number') bad(q.id + ': answer is ' + JSON.stringify(q.answer) + ', not a number');
  else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= n)
    bad(q.id + ': answer ' + q.answer + ' out of range for ' + n + ' options');
  if (n < 2) bad(q.id + ': ' + n + ' options');
});
ok('answer indices checked against option counts');

// --- required fields ---------------------------------------------------------
['module', 'chapter', 'bank', 'stem', 'options', 'explanation', 'source'].forEach(f => {
  const missing = draft.filter(q => q[f] === undefined || q[f] === '' ).map(q => q.id);
  if (missing.length) bad('missing ' + f + ': ' + missing.join(', '));
});
ok('required fields present');

// --- chapter ids must exist in modules.js ------------------------------------
if (modulesPath && fs.existsSync(modulesPath)) {
  const src = fs.readFileSync(modulesPath, 'utf8');
  const known = new Set([...src.matchAll(/\[\s*'([a-z0-9-]+)'\s*,/g)].map(m => m[1]));
  const unknown = [...new Set(draft.map(q => q.chapter))].filter(c => !known.has(c));
  unknown.length ? bad('chapter ids not found in modules.js: ' + unknown.join(', '))
                 : ok('every chapter id resolves in modules.js');
}

// --- the explanation marker. Delta must equal new entries minus boxed. -------
//
// ⚠️ 2026-09-02: this test was anchored `\.$` and read 26 correct entries as
// missing the marker. The rule is that the explanation ENDS with the marker,
// but the shipped corpus has always tolerated a short coda after it — 383 of
// 3,287 marked entries carry one, 45 of them the "*(Secondary chapter: …)*"
// note that CLAUDE.md §4 itself requires for a straddling question. Test for
// PRESENCE; report a coda separately so it can be eyeballed, not failed.
const MARKER = /prints no explanation here\./;
const marker = q => MARKER.test(String(q.explanation));
const marked = draft.filter(marker).length;
console.log('      explanation marker present on ' + marked + ' of ' + draft.length +
            ' — the rest must be VERBATIM printed boxes. Confirm that count by hand.');
const codas = draft.filter(marker).map(q => {
  const e = String(q.explanation);
  const t = e.slice(e.indexOf('prints no explanation here.') + 27).trim();
  return t ? q.id + ' -> ' + t.slice(0, 60) : null;
}).filter(Boolean);
if (codas.length) {
  const stray = codas.filter(s => !/Secondary chapter/i.test(s));
  console.log('      ' + codas.length + ' explanations carry a coda after the marker (' +
              (codas.length - stray.length) + ' are secondary-chapter notes, which are required).');
  stray.forEach(s => console.log('        coda, NOT a secondary-chapter note: ' + s));
}

// --- the marker must never live in `source` ---------------------------------
const inSource = draft.filter(q => /prints no explanation here/.test(String(q.source))).map(q => q.id);
inSource.length ? bad('marker leaked into `source`: ' + inSource.join(', ')) : ok('marker is not in `source`');

// --- staging reconciliation: written + folded = printed ----------------------
if (staging) {
  const printed = staging.length;
  const written = draft.length;
  console.log('      staged ' + printed + '  drafted ' + written +
              '  => ' + (printed - written) + ' must be accounted for as FOLDS. Name each one.');
  const nums = new Set(draft.map(q => {
    const m = String(q.id).match(/-(\d+)$/); return m ? Number(m[1]) : null;
  }));
  const missing = staging.map(s => s.num || s.n).filter(n => n && !nums.has(n));
  if (missing.length) console.log('      staged-but-not-drafted: ' + missing.join(', '));
}

// --- dead ids: every backticked id inside an explanation must exist ----------
const live = new Set([...shipped, ...seen]);
const dead = new Set();
draft.forEach(q => {
  const refs = String(q.explanation).match(/`([a-z]+-[a-z0-9-]*\d+)`/g) || [];
  refs.forEach(r => { const id = r.slice(1, -1); if (!live.has(id)) dead.add(q.id + ' -> ' + id); });
});
dead.size ? bad('dead id references:\n        ' + [...dead].join('\n        '))
          : ok('every backticked id reference resolves');
console.log('      (a dead-id list full of obviously-real ids means the FILE DID NOT PARSE)');

console.log('');
console.log(fail ? ('BLOCKED — ' + fail + ' failures') : 'CLEAR to splice');
process.exit(fail ? 1 : 0);
