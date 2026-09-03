// Byte-level splice of a peds House chapter's draft halves into app/data/questions.peds.js.
//   node tools/bank-harness/splice-pd.js <chapter>            # dry run, reports and writes nothing
//   node tools/bank-harness/splice-pd.js <chapter> --write    # performs the splice
//
// Generalised from splice-pd10.js, which hardcoded two halves and their counts (10 and 5).
// The counts per half are a split decision and cannot be measured; the chapter TOTAL can be,
// so it is taken from the staging record and the halves are required to sum to it. That is
// the check that catches a half truncated by an agent dying on a usage limit -- the failure
// splice-pd10.js could not have seen.
//
// Halves are discovered by globbing draft-*.js, so a 2-way or 3-way split needs no edit here.
//
// Written with the Write tool, not a heredoc: the heredoc collapses \\ to \ and would eat the
// regexes below.
const fs = require('fs'), vm = require('vm'), path = require('path');
const R = 'D:/claude os/Medical school/Herophilus/';
const LIVE = R + 'app/data/questions.peds.js';
const QB = R + 'content/peds/qb-pages/';

const CH = {
  10: { prefix: 'pedhd-nutr-',   staging: 'house-ch10-nutrition.array.js',        svar: 'PEDHD_NUTR_STAGED',
        draft: 'house-ch10-nutrition.draft-',        dvar: 'PEDHD_NUTR_DRAFT_' },
  11: { prefix: 'pedhd-gastro-', staging: 'house-ch11-gastroenterology.array.js', svar: 'PEDHD_GASTRO_STAGED',
        draft: 'house-ch11-gastroenterology.draft-', dvar: 'PEDHD_GASTRO_DRAFT_' },
  12: { prefix: 'pedhd-neuro-',  staging: 'house-ch12-neurological.array.js',     svar: 'PEDHD_NEURO_STAGED',
        draft: 'house-ch12-neurological.draft-',     dvar: 'PEDHD_NEURO_DRAFT_' },
  13: { prefix: 'pedhd-resp-',   staging: 'house-ch13-respiratory.array.js',      svar: 'PEDHD_RESP_STAGED',
        draft: 'house-ch13-respiratory.draft-',      dvar: 'PEDHD_RESP_DRAFT_' },
  14: { prefix: 'pedhd-endo-',   staging: 'house-ch14-endocrine.array.js',        svar: 'PEDHD_ENDO_STAGED',
        draft: 'house-ch14-endocrine.draft-',        dvar: 'PEDHD_ENDO_DRAFT_' },
  15: { prefix: 'pedhd-alg-',    staging: 'house-ch15-allergy.array.js',        svar: 'PEDHD_ALLERGY_STAGED',
        draft: 'house-ch15-allergy.draft-',          dvar: 'PEDHD_ALLERGY_DRAFT_' },
  16: { prefix: 'pedhd-gp-',     staging: 'house-ch16-growth.array.js',          svar: 'PEDHD_GROWTH_STAGED',
        draft: 'house-ch16-growth.draft-',           dvar: 'PEDHD_GROWTH_DRAFT_' },
  17: { prefix: 'pedhd-emg-',    staging: 'house-ch17-emergencies.array.js',     svar: 'PEDHD_EMG_STAGED',
        draft: 'house-ch17-emergencies.draft-',      dvar: 'PEDHD_EMG_DRAFT_' },
  18: { prefix: 'pedhd-acc-',    staging: 'house-ch18-accidents.array.js',       svar: 'PEDHD_ACC_STAGED',
        draft: 'house-ch18-accidents.draft-',        dvar: 'PEDHD_ACC_DRAFT_' },
  19: { prefix: 'pedhd-liv-',    staging: 'house-ch19-liver.array.js',           svar: 'PEDHD_LIV_STAGED',
        draft: 'house-ch19-liver.draft-',            dvar: 'PEDHD_LIV_DRAFT_' },
  20: { prefix: 'pedhd-mal-',    staging: 'house-ch20-malignant.array.js',       svar: 'PEDHD_MAL_STAGED',
        draft: 'house-ch20-malignant.draft-',        dvar: 'PEDHD_MAL_DRAFT_' },
};

const chNum = process.argv[2];
const doWrite = process.argv.includes('--write');
const cfg = CH[chNum];
if (!cfg) { console.error('usage: node splice-pd.js <' + Object.keys(CH).join('|') + '> [--write]'); process.exit(2); }

function run(p, tail) {
  return vm.runInThisContext(fs.readFileSync(p, 'utf8') + (tail || ''), { filename: p });
}

// ---- what the chapter is, measured from staging ----
run(QB + cfg.staging);
const S = globalThis[cfg.svar];
if (!Array.isArray(S)) { console.error('staging var ' + cfg.svar + ' did not load'); process.exit(2); }
const wantIds = S.map(s => cfg.prefix + s.n);

// ---- find the halves ----
const base = path.basename(cfg.draft);
const halves = fs.readdirSync(QB)
  .filter(f => f.startsWith(base) && f.endsWith('.js'))
  .map(f => f.slice(base.length, -3))
  .filter(x => /^[A-Z]$/.test(x))
  .sort();
if (!halves.length) { console.error('no draft halves found matching ' + cfg.draft + '*.js'); process.exit(2); }

// carve() returns the raw entry text; the loaded array is what gets counted and checked.
// Both are needed: the splice is byte-level, but a byte-level splice cannot see a hole.
function carve(file, varName) {
  const p = QB + file;
  const t = fs.readFileSync(p, 'utf8');
  const v = t.indexOf('var ' + varName + ' = [');
  if (v < 0) throw new Error(file + ': var line "var ' + varName + ' = [" not found');
  // Entries do not always start at column 0. A hand-drafted half writes "{" flush left; a half
  // written by tools/chapter-loop.js is JSON.stringify(list, null, 2), so every entry opens at two
  // spaces. Anchoring on "\n{" found nothing in a Codex half and the carve failed outright --
  // loudly, which is the one good thing about it. Detect the indent instead of assuming it, and
  // strip it so the live file keeps one entry style throughout. Corrected 2026-09-03.
  const m = new RegExp('\\n([ \\t]*)\\{').exec(t.slice(v));
  if (!m) throw new Error(file + ': entries not found');
  const first = v + m.index;
  const indent = m[1];
  const close = t.lastIndexOf('\n];');
  if (close < first) throw new Error(file + ': entries not found');
  // A half may close its last entry "}," or "}" -- carve to "];" and trim rather than
  // anchoring on "\n},".
  let block = t.slice(first + 1, close).replace(/,\s*$/, '').replace(/\s+$/, '');
  // JSON.stringify escapes newlines inside strings, so no literal spans lines and a per-line
  // de-indent cannot cut into content.
  if (indent) block = block.split('\n').map(l => l.startsWith(indent) ? l.slice(indent.length) : l).join('\n');
  run(p);
  const arr = globalThis[varName];
  if (!Array.isArray(arr)) throw new Error(file + ': var ' + varName + ' did not load as an array');
  let holes = 0;
  for (let i = 0; i < arr.length; i++) if (!(i in arr)) holes++;   // Array.filter skips sparse holes
  if (holes) throw new Error(file + ': ' + holes + ' sparse holes');
  // The text block and the parsed array must agree, or the splice is moving something the
  // checks below never inspected.
  const textCount = (block.match(/\n\{/g) || []).length + 1;   // block is de-indented above
  if (textCount !== arr.length)
    throw new Error(file + ': carved text holds ' + textCount + ' entries but the array parses ' + arr.length);
  return { block, arr, file };
}

let parts;
try { parts = halves.map(h => carve(cfg.draft + h + '.js', cfg.dvar + h)); }
catch (e) { console.error('CARVE FAILED: ' + e.message); process.exit(1); }

const drafted = [].concat(...parts.map(p => p.arr));
const fail = [];

// ---- the checks ----
// 1. every staged question drafted exactly once, and nothing drafted that was not staged
const gotIds = drafted.map(q => q.id);
const seen = new Map();
gotIds.forEach(id => seen.set(id, (seen.get(id) || 0) + 1));
wantIds.forEach(id => { if (!seen.has(id)) fail.push('MISSING: ' + id + ' is staged but not drafted'); });
gotIds.forEach(id => { if (!wantIds.includes(id)) fail.push('EXTRA: ' + id + ' is drafted but not staged'); });
[...seen].forEach(([id, c]) => { if (c > 1) fail.push('DUPLICATE: ' + id + ' drafted ' + c + ' times'); });

// 2. the halves sum to the chapter. Stated separately from check 1 because a half truncated
//    mid-file is the specific failure this splicer exists to refuse.
if (drafted.length !== S.length)
  fail.push('COUNT: halves sum to ' + drafted.length + ' but staging holds ' + S.length);

// 3. nothing already live -- splicing a chapter twice is silent otherwise
const live = fs.readFileSync(LIVE, 'utf8');
wantIds.forEach(id => {
  if (live.indexOf("'" + id + "'") >= 0 || live.indexOf('"' + id + '"') >= 0)
    fail.push('ALREADY LIVE: ' + id + ' is already in questions.peds.js');
});

console.log('ch.' + chNum + '  halves ' + halves.map((h, i) => h + ':' + parts[i].arr.length).join(' ')
  + '  = ' + drafted.length + '  staged ' + S.length);
if (fail.length) { console.log('FAILURES:\n  ' + fail.join('\n  ')); process.exit(1); }
console.log('all pre-splice checks passed');

// ---- splice ----
const tail = '\n}\n];';
const at = live.lastIndexOf(tail);
if (at < 0) { console.error('live: closing tail not found'); process.exit(1); }
const out = live.slice(0, at) + '\n},\n\n'
  + parts.map(p => p.block).join(',\n\n') + '\n];' + live.slice(at + tail.length);

// Parse the RESULT before writing it. A data-file syntax slip fails silently in the app --
// it boots and reports a plausible smaller number.
const before = (function () { run(LIVE); const a = globalThis.Q_PEDS; return Array.isArray(a) ? a.length : null; })();
try { new vm.Script(out, { filename: 'questions.peds.js (spliced, in memory)' }); }
catch (e) { console.error('SPLICED FILE DOES NOT PARSE: ' + e.message); process.exit(1); }

if (!doWrite) {
  console.log('DRY RUN. live ' + before + ' entries, ' + live.length + ' bytes -> would be '
    + (before + drafted.length) + ' entries, ' + out.length + ' bytes. Re-run with --write.');
  process.exit(0);
}

fs.writeFileSync(LIVE, out, 'utf8');
const after = (function () { run(LIVE); const a = globalThis.Q_PEDS; return Array.isArray(a) ? a.length : null; })();
let holes = 0;
const A = globalThis.Q_PEDS;
for (let i = 0; i < A.length; i++) if (!(i in A)) holes++;
console.log('spliced. bytes ' + live.length + ' -> ' + out.length
  + ' | entries ' + before + ' -> ' + after + ' (expected ' + (before + drafted.length) + ') | holes ' + holes);
if (after !== before + drafted.length) { console.error('POST-SPLICE COUNT WRONG'); process.exit(1); }
