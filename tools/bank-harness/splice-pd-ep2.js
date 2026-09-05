// Byte-level splice of a peds ENDPOINT PART 2 section's draft(s) into
// app/data/questions.peds.ep2.js.
//   node tools/bank-harness/splice-pd-ep2.js <section>            # dry run, reports and writes nothing
//   node tools/bank-harness/splice-pd-ep2.js <section> --write    # performs the splice
//
// Copied from splice-pd-ep.js on 2026-09-04 and retargeted at PART 2. Each splicer in this folder
// writes ONE live file and its only id guard is "is this id already live", which an id from
// another bank passes silently:
//   splice-pd.js     -> app/data/questions.peds.js      (House, Chat B)
//   splice-pd-ep.js  -> app/data/questions.peds.ep.js   (endpoint part 1, the part-1 chat)
//   splice-pd-ep2.js -> app/data/questions.peds.ep2.js  (endpoint part 2, THIS one)
// Running the wrong one splices a section into a live file underneath a running chat. This file
// knows one target, questions.peds.ep2.js, and creates it on the first --write if absent.
//
// Drafts are found by globbing: draft-A.js, draft-B.js, ... when the section was split, or the
// single draft.js when it was not. A draft may carry `var NAME = [` or be a bare fragment of
// object literals; both are carved the same way and parsed before anything is counted.
//
// Written with the Write tool, not a heredoc: the heredoc collapses \\ to \ and would eat the
// regexes below.
const fs = require('fs'), vm = require('vm'), path = require('path');
const R = 'D:/claude os/Medical school/Herophilus/';
const LIVE = R + 'app/data/questions.peds.ep2.js';
const LIVE_VAR = 'Q_PEDS_EP2';
const QB = R + 'content/peds/qb-pages/';

// PART 2's OWN SECTIONS -- kept identical to the SEC table in val-pd-ep2.js, minus the fields
// only the validator documents. Agreed with the user 2026-09-04; the measurement behind every
// page range is in content/peds/qb-pages/endpoint-p2-section-map.md.
//
// ⚠️ IF YOU EDIT ONE OF THESE TWO TABLES, EDIT THE OTHER. The splicer spawns the validator and
// refuses to write unless it exits 0, so a prefix or filename that disagrees between them does
// not produce a wrong splice -- it produces a confusing refusal.
const SEC = {
  1: { prefix: 'pedep2-nd-', staging: 'endpoint-p2-s01-normal-dev.array.js', svar: 'PEDEP2_S01_STAGED',
       draft: 'endpoint-p2-s01-normal-dev.draft' },
  2: { prefix: 'pedep2-dp-', staging: 'endpoint-p2-s02-dev-problems.array.js', svar: 'PEDEP2_S02_STAGED',
       draft: 'endpoint-p2-s02-dev-problems.draft' },
  3: { prefix: 'pedep2-gen-', staging: 'endpoint-p2-s03-genetics.array.js', svar: 'PEDEP2_S03_STAGED',
       draft: 'endpoint-p2-s03-genetics.draft' },
  // `folded` lists staged entries adjudicated as duplicate printings WITHIN this section and
  // dropped at drafting -- n53 (p.375) into n86 (p.442), n89 (p.448) into n57 (p.383), n90 (p.450)
  // into n82 (p.434). It is NOT the same thing as `reprints` below and must not be merged with it:
  // a reprint is a model-exam re-printing of a question already live from a body section, folded by
  // extending an existing entry's `source`, and `reprintPass` proves each pair. A fold here is two
  // printings inside the same section, both staged in the same pass, the survivor drafted in the
  // same batch -- there is no live entry to extend and no reprint pass to run, so the reprint
  // machinery's proof check would fail on a correct file. Both mean "staged but deliberately not
  // drafted"; only that part is shared.
  // ⚠️ Same defect, same day, as the one recorded in val-pd-ep2.js: without this the splicer reads
  // the three discards as MISSING and refuses a correct set of drafts. The adjudication lives in
  // content/peds/qb-pages/endpoint-p2-section-map.md; it has to be recorded in the tool as well,
  // because nothing in the staged array distinguishes a discard from an entry someone forgot.
  4: { prefix: 'pedep2-hem-', staging: 'endpoint-p2-s04-haematology.array.js', svar: 'PEDEP2_S04_STAGED',
       draft: 'endpoint-p2-s04-haematology.draft', folded: [53, 89, 90] },
  5: { prefix: 'pedep2-res-', staging: 'endpoint-p2-s05-respiratory.array.js', svar: 'PEDEP2_S05_STAGED',
       draft: 'endpoint-p2-s05-respiratory.draft' },
  // Section 6's two within-section folds: n57 (p.743) into n26 (p.680), and n73 (p.775) into
  // n32 (p.693). Both discards were adjudicated by comparing the two printings' explanation
  // boxes and keeping the fuller one (318 chars against 114; 160 against 134). The n32/n73 pair
  // disagrees about a number -- "a graded pansystolic murmur" against "a grade 4 pan-systolic
  // murmur" -- so the kept stem stays byte-identical to its own printing and the second
  // printing's grade is recorded in the explanation rather than merged into the stem.
  6: { prefix: 'pedep2-car-', staging: 'endpoint-p2-s06-cardiac.array.js', svar: 'PEDEP2_S06_STAGED',
       draft: 'endpoint-p2-s06-cardiac.draft', folded: [57, 73] },
  // Section 7's four within-section folds -- kept printing first: n49 into n36, n47 into n39,
  // n51 into n31, n30 into n1 (that last one a REORDER, which moves the key from index 2 to
  // index 3). Four further near-duplicate pairs raised by the same sweep are deliberately NOT
  // folded -- n41/n54, n29/n50, n11/n43, n13/n35 -- because their option sets differ in what they
  // discriminate rather than merely in order. The full adjudication is in val-pd-ep2.js above
  // this section's entry; do not re-derive it here.
  7: { prefix: 'pedep2-ren-', staging: 'endpoint-p2-s07-renal.array.js', svar: 'PEDEP2_S07_STAGED',
       draft: 'endpoint-p2-s07-renal.draft', folded: [30, 47, 49, 51] },
  // n47 -> n17 and n59 -> n26 within the section; n34 -> pedep2-dp-25 and n41 -> pedep2-dp-2
  // against entries already live in section 2. Reasoning in val-pd-ep2.js's section-8 block.
  8: { prefix: 'pedep2-neu-', staging: 'endpoint-p2-s08-neuro.array.js', svar: 'PEDEP2_S08_STAGED',
       draft: 'endpoint-p2-s08-neuro.draft', folded: [34, 41, 47, 59] },
  // Section 9's one within-section fold: n23 (p.1138) into n2 (p.1094), the James hypoglycaemia
  // vignette reprinted with a condensed stem, the same five options in the same order and the same
  // key -- confirmed on both page images, where option D is highlighted, bold and underlined on each.
  // ⚠️ The book prints a DIFFERENTLY WORDED explanation box under each printing and neither is a
  // superset: p.1094 has "cannot swallow", p.1138 has "without needing IV access". The survivor keeps
  // its own box verbatim and unmixed and the reprint's extra detail is carried in the expansion below
  // the rule, attributed to p.1138. Blending two printings into one blockquote would fabricate a box
  // the book never printed. Reasoning in endpoint-p2-s09-drafting-notes.md.
  9: { prefix: 'pedep2-end-', staging: 'endpoint-p2-s09-endocrine.array.js', svar: 'PEDEP2_S09_STAGED',
       draft: 'endpoint-p2-s09-endocrine.draft', folded: [23] },
  10: { prefix: 'pedep2-liv-', staging: 'endpoint-p2-s10-liver.array.js', svar: 'PEDEP2_S10_STAGED',
        draft: 'endpoint-p2-s10-liver.draft' },
  11: { prefix: 'pedep2-mal-', staging: 'endpoint-p2-s11-malignant.array.js', svar: 'PEDEP2_S11_STAGED',
        draft: 'endpoint-p2-s11-malignant.draft' },

  // ⚠️ SECTIONS 12-15 ARE THE FOUR MODEL FINAL EXAMS, and a model exam DRAFTS FEWER QUESTIONS
  // THAN IT STAGES: its questions are largely reprints of the body sections, which are already
  // live. The standing rule for a reprint is "extend `source`, no new entry", so a reprint is
  // never drafted -- a `reprints` array here lists the staged `n` values that are expected to
  // have no draft entry, and `reprintPass` names the file that PROVES each pair page-by-page.
  // Part 1's Model Final Exam 1 ran 30 of 80.
  //
  // ⚠️ THE ARRAYS BELOW ARE DELIBERATELY ABSENT, NOT EMPTY. A section with no `reprints` key
  // behaves as staged == drafted, which is the correct behaviour until reprint-pd-ep2.js has
  // actually been run over that exam's page range and each hit confirmed on the page image.
  // Adding a guessed array here would make the splicer accept missing entries silently.
  12: { prefix: 'pedep2-mf1-', staging: 'endpoint-p2-s12-mfe1.array.js', svar: 'PEDEP2_S12_STAGED',
        draft: 'endpoint-p2-s12-mfe1.draft' },
  13: { prefix: 'pedep2-mf2-', staging: 'endpoint-p2-s13-mfe2.array.js', svar: 'PEDEP2_S13_STAGED',
        draft: 'endpoint-p2-s13-mfe2.draft' },
  14: { prefix: 'pedep2-mf3-', staging: 'endpoint-p2-s14-mfe3.array.js', svar: 'PEDEP2_S14_STAGED',
        draft: 'endpoint-p2-s14-mfe3.draft' },
  15: { prefix: 'pedep2-mf4-', staging: 'endpoint-p2-s15-mfe4.array.js', svar: 'PEDEP2_S15_STAGED',
        draft: 'endpoint-p2-s15-mfe4.draft' },

  // Sections 16 and 17 print the answered page only -- no unanswered twin, verified on p.1923
  // and p.1949. Section 18 (Exam Night Review) has no entry and must not get one: it is prose
  // revision cards, no questions at all. See the section map.
  16: { prefix: 'pedep2-rm-', staging: 'endpoint-p2-s16-recent-mod.array.js', svar: 'PEDEP2_S16_STAGED',
        draft: 'endpoint-p2-s16-recent-mod.draft' },
  17: { prefix: 'pedep2-ra-', staging: 'endpoint-p2-s17-recent-add.array.js', svar: 'PEDEP2_S17_STAGED',
        draft: 'endpoint-p2-s17-recent-add.draft' },
};

const HEADER = `/* Pediatrics ENDPOINT PART 2 questions (Pediatrics endpoint part2.pdf).
   Own file, separate from questions.peds.ep.js (part 1) so two chats can write without
   touching each other. Same schema; bank:'endpoint' so the app shows one endpoint bank.
   \`var\`, not \`const\`, so the aggregator reads it off \`window\` and degrades to [] if this
   file fails to parse. */
var ${LIVE_VAR} = [
];
`;

const secNum = process.argv[2];
const doWrite = process.argv.includes('--write');
const cfg = SEC[secNum];
if (!cfg) { console.error('usage: node splice-pd-ep2.js <' + Object.keys(SEC).join('|') + '> [--write]'); process.exit(2); }

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
  const args = [path.join(__dirname, 'val-pd-ep2.js'), String(secNum)];
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
// A reprint is staged but deliberately not drafted, so it is not a wanted id -- and because it is
// not wanted, drafting one anyway trips the EXTRA check below rather than passing silently.
const REPRINTS = new Set(cfg.reprints || []);
// A folded discard is staged and deliberately not drafted, exactly like a reprint, so it drops out
// of the wanted set the same way -- and drafting one anyway still trips EXTRA, which is what keeps
// a silent duplicate out of the live bank.
const FOLDED = new Set(cfg.folded || []);
const SKIP = new Set([...REPRINTS, ...FOLDED]);
const wantIds = S.filter(s => !SKIP.has(s.n)).map(s => cfg.prefix + s.n);

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
    // A drafting agent may open the file with a /* … */ provenance header -- both section-5 halves
    // do, section 4's did not, and the validator tolerates one while this carve did not, so the
    // splice failed on two files that had already passed every check. The header is worth keeping
    // in the draft and must NOT reach the live data file, so it is stripped here rather than
    // deleted from the drafts. Only a comment BEFORE the first entry is removed; the guard below
    // still fires on anything else that is not an entry.
    block = t.replace(/^\s*(?:\/\*[\s\S]*?\*\/\s*|\/\/[^\n]*\n\s*)*/, '')
             .replace(/,\s*$/, '').replace(/\s+$/, '');
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

// 2. the drafts sum to the section, less anything recorded as a reprint or a within-section fold
if (drafted.length !== S.length - SKIP.size) {
  const less = [REPRINTS.size ? REPRINTS.size + ' reprints' : '', FOLDED.size ? FOLDED.size + ' folded' : '']
    .filter(Boolean).join(' and ');
  fail.push('COUNT: drafts sum to ' + drafted.length + ' but staging holds ' + S.length
    + (less ? ' less ' + less + ' = ' + (S.length - SKIP.size) : ''));
}

// 2a. THE REPRINT PASS MUST ALREADY HAVE RUN. Splicing first would leave the 30 live entries with
// no record of the exam printing, and nothing afterwards would notice: the count is right either
// way, so only this check can catch the ordering. Same reasoning as the validator gate above.
if (REPRINTS.size) {
  const n = (fs.existsSync(LIVE) ? fs.readFileSync(LIVE, 'utf8') : '').split(cfg.reprintMark).length - 1;
  if (n < REPRINTS.size)
    fail.push('REPRINT PASS HAS NOT RUN: ' + n + ' of ' + REPRINTS.size + ' live sources name "'
      + cfg.reprintMark + '". Run tools/bank-harness/' + cfg.reprintPass + ' --write first.');
}

// 3. every entry is an endpoint entry -- the one check that would have caught a House/endpoint mix
drafted.forEach(q => { if (q.bank !== 'endpoint') fail.push('BANK: ' + q.id + ' is bank ' + JSON.stringify(q.bank) + ', not endpoint'); });

// 4. nothing already live -- splicing a section twice is silent otherwise
const exists = fs.existsSync(LIVE);
const live = exists ? fs.readFileSync(LIVE, 'utf8') : HEADER;
wantIds.forEach(id => {
  if (live.indexOf("'" + id + "'") >= 0 || live.indexOf('"' + id + '"') >= 0)
    fail.push('ALREADY LIVE: ' + id + ' is already in questions.peds.ep2.js');
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
  vm.runInThisContext(text, { filename: 'questions.peds.ep2.js (in memory)' });
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
  // chars, not bytes: the file carries non-ASCII (arrows, en-dashes, the warning glyph), so
  // this number sits BELOW `git cat-file -s` by 1-2 per such character. Measured 2026-09-04
  // after section 2: 119697 chars, 120159 bytes, 231 non-ASCII. Labelling it 'bytes' invited
  // exactly the bytes-vs-count mismatch MEMORY.md treats as evidence of a broken count.
  console.log('DRY RUN. live ' + before.n + ' entries, ' + live.length + ' chars -> would be '
    + after.n + ' entries, ' + out.length + ' chars. Re-run with --write.');
  process.exit(0);
}

fs.writeFileSync(LIVE, out, 'utf8');
const check = count(fs.readFileSync(LIVE, 'utf8'));
console.log('spliced. chars ' + live.length + ' -> ' + out.length + ' | entries ' + before.n + ' -> ' + check.n
  + ' (expected ' + after.n + ') | holes ' + check.holes);
if (check.n !== after.n) { console.error('POST-WRITE COUNT WRONG'); process.exit(1); }
