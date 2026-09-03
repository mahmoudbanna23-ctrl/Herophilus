// Byte-level splice of a peds ENDPOINT section's draft(s) into app/data/questions.peds.ep.js.
//   node tools/bank-harness/splice-pd-ep.js <section>            # dry run, reports and writes nothing
//   node tools/bank-harness/splice-pd-ep.js <section> --write    # performs the splice
//
// Copied from splice-pd.js on 2026-09-02 and retargeted. THE HOUSE ORIGINAL WRITES
// app/data/questions.peds.js -- Chat B's live file -- and its only guard is "is this id already
// live", which a pedep- id passes. Running it on endpoint drafts would splice endpoint questions
// into the House bank underneath a running chat. This file knows one target, questions.peds.ep.js,
// and creates it on the first --write if it does not exist yet.
//
// Drafts are found by globbing: draft-A.js, draft-B.js, ... when the section was split, or the
// single draft.js when it was not. A draft may carry `var NAME = [` or be a bare fragment of
// object literals; both are carved the same way and parsed before anything is counted.
//
// Written with the Write tool, not a heredoc: the heredoc collapses \\ to \ and would eat the
// regexes below.
const fs = require('fs'), vm = require('vm'), path = require('path');
const R = 'D:/claude os/Medical school/Herophilus/';
const LIVE = R + 'app/data/questions.peds.ep.js';
const LIVE_VAR = 'Q_PEDS_EP';
const QB = R + 'content/peds/qb-pages/';

const SEC = {
  1: { prefix: 'pedep-gp-', staging: 'endpoint-s01-growth-puberty.array.js', svar: 'PEDEP_S01_STAGED',
       draft: 'endpoint-s01-growth-puberty.draft' },
  2: { prefix: 'pedep-nut-', staging: 'endpoint-s02-nutrition.array.js', svar: 'PEDEP_S02_STAGED',
       draft: 'endpoint-s02-nutrition.draft' },
  3: { prefix: 'pedep-gi-', staging: 'endpoint-s03-gastro.array.js', svar: 'PEDEP_S03_STAGED',
       draft: 'endpoint-s03-gastro.draft' },
  4: { prefix: 'pedep-acc-', staging: 'endpoint-s04-accidents.array.js', svar: 'PEDEP_S04_STAGED',
       draft: 'endpoint-s04-accidents.draft' },
  5: { prefix: 'pedep-emg-', staging: 'endpoint-s05-emergencies.array.js', svar: 'PEDEP_S05_STAGED',
       draft: 'endpoint-s05-emergencies.draft' },
};

const HEADER = `/* Pediatrics ENDPOINT questions (Pediatrics endpoint part1.pdf).
   Kept apart from questions.peds.js (the House bank) so the two banks can be written by two
   chats at once without either touching the other's file. Same schema per question:
   id, module, chapter, bank, stem, options, answer, explanation, objective, source.
   \`var\`, not \`const\`: the aggregator reads these off \`window\`, so a missing
   file degrades to an empty list instead of throwing a ReferenceError. */
var ${LIVE_VAR} = [
];
`;

const secNum = process.argv[2];
const doWrite = process.argv.includes('--write');
const cfg = SEC[secNum];
if (!cfg) { console.error('usage: node splice-pd-ep.js <' + Object.keys(SEC).join('|') + '> [--write]'); process.exit(2); }

// ---- find the drafts ----
// This runs BEFORE the validator gate because the gate has to know which halves exist:
// val-pd-ep.js takes the half letter as its second argument and resolves a different file
// for each. Section 1 was drafted as a single draft.js, so the gate was never exercised on a
// split section until section 2, where it called val-pd-ep.js with no letter and sent it
// looking for an endpoint-s02-nutrition.draft.js that has never existed. Fixed 2026-09-03.
const base = path.basename(cfg.draft);
let files = fs.readdirSync(QB)
  .filter(f => f.startsWith(base + '-') && /^-[A-Z]\.js$/.test(f.slice(base.length)))
  .sort();
if (!files.length && fs.existsSync(QB + base + '.js')) files = [base + '.js'];
if (!files.length) { console.error('no draft found matching ' + cfg.draft + '[-X].js'); process.exit(2); }

// The half letters, in the same order as `files`; a single unsplit draft.js contributes ''.
const halves = files.map(f => {
  const m = f.slice(base.length).match(/^-([A-Z])\.js$/);
  return m ? m[1] : '';
});

// The validator gates the splice. Found 2026-09-02: this dry run reported "all pre-splice checks
// passed" on a draft val-pd-ep.js rejected with 25 failures -- the two tools check different
// things, and nothing forced them to be run in order. Now nothing splices unless the validator
// exits 0 on the same section. No flag skips this.
//
// EVERY half must pass. A split section that validated only one half would let the other through
// unchecked, which is the whole failure this gate exists to prevent.
for (const h of halves) {
  const args = [path.join(__dirname, 'val-pd-ep.js'), String(secNum)];
  if (h) args.push(h);
  const v = require('child_process').spawnSync(process.execPath, args, { encoding: 'utf8' });
  const who = 'section ' + secNum + (h ? ' half ' + h : '');
  if (v.status !== 0) {
    console.error('VALIDATOR FAILED for ' + who + ' (exit ' + v.status + ') -- fix the draft before splicing. Its output:');
    console.error((v.stdout || '') + (v.stderr || ''));
    process.exit(1);
  }
  console.log('validator: ALL CHECKS PASSED for ' + who);
}

function run(p, tail) {
  return vm.runInThisContext(fs.readFileSync(p, 'utf8') + (tail || ''), { filename: p });
}

// ---- what the section is, measured from staging ----
run(QB + cfg.staging);
const S = globalThis[cfg.svar];
if (!Array.isArray(S)) { console.error('staging var ' + cfg.svar + ' did not load'); process.exit(2); }
const wantIds = S.map(s => cfg.prefix + s.n);

// carve() returns the raw entry text; the loaded array is what gets counted and checked.
// Both are needed: the splice is byte-level, but a byte-level splice cannot see a hole.
function carve(file) {
  const p = QB + file;
  const t = fs.readFileSync(p, 'utf8');
  const v = t.match(/var ([A-Za-z0-9_]+) = \[/);
  let block, arr;
  if (v) {
    const first = t.indexOf('\n{', t.indexOf(v[0]));
    const close = t.lastIndexOf('\n];');
    if (first < 0 || close < first) throw new Error(file + ': entries not found');
    block = t.slice(first + 1, close).replace(/,\s*$/, '').replace(/\s+$/, '');
    run(p);
    arr = globalThis[v[1]];
  } else {
    block = t.replace(/^\s+/, '').replace(/,\s*$/, '').replace(/\s+$/, '');
    if (!block.startsWith('{')) throw new Error(file + ': bare fragment does not start with "{"');
    arr = vm.runInThisContext('[\n' + block + '\n]', { filename: file });
  }
  if (!Array.isArray(arr)) throw new Error(file + ': did not load as an array');
  let holes = 0;
  for (let i = 0; i < arr.length; i++) if (!(i in arr)) holes++;
  if (holes) throw new Error(file + ': ' + holes + ' sparse holes');
  const textCount = (block.match(/\n\{/g) || []).length + 1;
  if (textCount !== arr.length)
    throw new Error(file + ': carved text holds ' + textCount + ' entries but the array parses ' + arr.length);
  return { block, arr, file };
}

let parts;
try { parts = files.map(carve); }
catch (e) { console.error('CARVE FAILED: ' + e.message); process.exit(1); }

const drafted = [].concat(...parts.map(p => p.arr));
const fail = [];

// 1. every staged question drafted exactly once, and nothing drafted that was not staged
const gotIds = drafted.map(q => q.id);
const seen = new Map();
gotIds.forEach(id => seen.set(id, (seen.get(id) || 0) + 1));
wantIds.forEach(id => { if (!seen.has(id)) fail.push('MISSING: ' + id + ' is staged but not drafted'); });
gotIds.forEach(id => { if (!wantIds.includes(id)) fail.push('EXTRA: ' + id + ' is drafted but not staged'); });
[...seen].forEach(([id, c]) => { if (c > 1) fail.push('DUPLICATE: ' + id + ' drafted ' + c + ' times'); });

// 2. the drafts sum to the section
if (drafted.length !== S.length)
  fail.push('COUNT: drafts sum to ' + drafted.length + ' but staging holds ' + S.length);

// 3. every entry is an endpoint entry -- the one check that would have caught a House/endpoint mix
drafted.forEach(q => { if (q.bank !== 'endpoint') fail.push('BANK: ' + q.id + ' is bank ' + JSON.stringify(q.bank) + ', not endpoint'); });

// 4. nothing already live -- splicing a section twice is silent otherwise
const exists = fs.existsSync(LIVE);
const live = exists ? fs.readFileSync(LIVE, 'utf8') : HEADER;
wantIds.forEach(id => {
  if (live.indexOf("'" + id + "'") >= 0 || live.indexOf('"' + id + '"') >= 0)
    fail.push('ALREADY LIVE: ' + id + ' is already in questions.peds.ep.js');
});

console.log('section ' + secNum + '  drafts ' + files.map((f, i) => f.slice(base.length) + ':' + parts[i].arr.length).join(' ')
  + '  = ' + drafted.length + '  staged ' + S.length + (exists ? '' : '  (live file does not exist yet -- will be created)'));
if (fail.length) { console.log('FAILURES:\n  ' + fail.join('\n  ')); process.exit(1); }
console.log('all pre-splice checks passed');

// ---- splice ----
// ⚠️ The last entry's closing brace is NOT always on a line of its own. The fold passes rewrite
// entries and leave the brace on the last field's line (`source:'...' }`), so a fixed '\n}\n];'
// tail match found nothing after fold 2 and reported "neither a closing entry nor an empty array"
// -- which reads like a corrupt live file and is not one. Find the array's closing '];' instead,
// then walk back to the last '}' before it, allowing only whitespace between the two.
const empty = live.lastIndexOf('[\n];');
const close = live.lastIndexOf('\n];');
let at = -1;
if (close >= 0) {
  const brace = live.lastIndexOf('}', close);
  if (brace >= 0 && !live.slice(brace + 1, close).trim()) at = brace;
}
let out;
if (at >= 0) {
  out = live.slice(0, at) + '},\n\n' + parts.map(p => p.block).join(',\n\n') + '\n];' + live.slice(close + 3);
} else if (empty >= 0) {
  out = live.slice(0, empty + 2) + parts.map(p => p.block).join(',\n\n') + '\n];' + live.slice(empty + 4);
} else { console.error('live: neither a closing entry nor an empty array found'); process.exit(1); }

function count(text) {
  vm.runInThisContext(text, { filename: 'questions.peds.ep.js (in memory)' });
  const a = globalThis[LIVE_VAR];
  if (!Array.isArray(a)) return null;
  let holes = 0;
  for (let i = 0; i < a.length; i++) if (!(i in a)) holes++;
  return { n: a.length, holes };
}
let before, after;
try { before = count(live); } catch (e) { console.error('LIVE FILE DOES NOT PARSE: ' + e.message); process.exit(1); }
try { after = count(out); } catch (e) { console.error('SPLICED FILE DOES NOT PARSE: ' + e.message); process.exit(1); }
if (after.holes) { console.error('SPLICED FILE HAS ' + after.holes + ' HOLES'); process.exit(1); }
if (after.n !== before.n + drafted.length) { console.error('POST-SPLICE COUNT WRONG: ' + before.n + ' + ' + drafted.length + ' != ' + after.n); process.exit(1); }

if (!doWrite) {
  console.log('DRY RUN. live ' + before.n + ' entries, ' + live.length + ' bytes -> would be '
    + after.n + ' entries, ' + out.length + ' bytes. Re-run with --write.');
  process.exit(0);
}

fs.writeFileSync(LIVE, out, 'utf8');
const check = count(fs.readFileSync(LIVE, 'utf8'));
console.log('spliced. bytes ' + live.length + ' -> ' + out.length + ' | entries ' + before.n + ' -> ' + check.n
  + ' (expected ' + after.n + ') | holes ' + check.holes);
if (check.n !== after.n) { console.error('POST-WRITE COUNT WRONG'); process.exit(1); }
