// Section 15 (Model Training Exam 2) reprint pass over app/data/questions.peds.ep.js.
//   node tools/bank-harness/reprint-s15-pd-ep.js            # dry run, writes nothing
//   node tools/bank-harness/reprint-s15-pd-ep.js --write
//
// ⚠️ THIS PASS DROPS NOTHING AND CHANGES NO KEY. Same shape as reprint-s14-pd-ep.js: a reprint is
// never drafted at all -- the exam reprints a question the book already printed, so the entry that
// would have been created is not created, and the live entry's `source` gains the exam page. Entry
// count is unchanged by design; `source` is the only field any entry gains.
//
// WHY IT RUNS BEFORE THE SPLICE. splice-pd-ep.js demands every staged n be drafted exactly once.
// Section 15 stages 31 and drafts 16, so SEC[15].reprints there records the fifteen that are
// deliberately absent. This file is where that list is PROVED against the two files on disk.
//
// ⚠️ FIFTEEN REPRINTS IN THIRTY-ONE. THIS SECTION IS NOTHING LIKE SECTION 14. Model Training
// Exam 1 reprinted one question in thirty; this exam reprints just under half its paper, and the
// reprints are not scattered -- rows n18 through n31 are a solid block of them, broken only by
// n29's moved clause. A one-in-thirty rate is not the book's rate, and neither is this one. Count
// every section; never carry one section's ratio into the next.
//
// FIVE ARMS, THE SAME FIVE SECTION 14 SETTLED ON.
//   (a) the staged-vs-live stem sweep in sweep-staged-ep.js -- 19 candidate pairs against the live
//       endpoint file, 3 against the live House file (record-only, House is a different bank and a
//       different chat's file; nothing here writes to it) and 0 within the section itself.
//   (b) an option-SET arm over the same rows -- 2 further pairs that the stem arm could not see,
//       and 0 shared menus, which is what tells us the exam is reprinting questions rather than
//       reusing a template.
//   (c) EXACT-TEXT adjudication of all 21 candidates, one row printed beside its candidate and
//       read: 15 reprints, 1 genuine variant (n1, below) and 5 record-only relatives.
//   (d) a KEY-TEXT arm over the 16 rows with no stem or option-set hit -- 8 hits across n1, n4, n7
//       and n9, EVERY ONE hand-read and EVERY ONE a different question that happens to share an
//       answer. n4's exam vignette is a 6-year-old boy with tender cervical nodes and a coated
//       tongue against pedep-inf-2 and pedep-inf-40's 4-year-old girls with circumoral pallor, on
//       a menu that replaces Chickenpox and Mumps with Infectious Mononucleosis and Erythema
//       infectiosum. n7 is a bare "You are assessing child nutrition" against pedep-gp-6's and
//       pedep-nut-21's fussy 2-year-old, on a five-option menu that drops Skinfold thickness for
//       Mid upper arm circumference. n9 gives a 25-day-old's TSB figures where pedep-neo-23 gives
//       "Talia is 2 weeks old". Same fact is not same question.
//   (e) ⚠️ THE KEY-TEXT ARM HAS A 6-CHARACTER FLOOR AND n8'S KEY IS "3", so the arm cannot see
//       that row at all. n8 was read by hand for exactly that reason: it asks the one-minute Apgar
//       score of a depressed neonate on a ladder of bare numerals, and the only live entry with a
//       numeric ladder near it, pedep-per-8, scores a vigorous term infant. Different question.
//
// ⚠️ n1 IS THE FINDING OF THIS SECTION AND IT IS DELIBERATELY ABSENT FROM THE MAP BELOW. p.1876
// prints pedep-mf3-8's question (p.1499) on FOUR options where the live entry prints five, with
// two of them replaced: the exam's [Rubella, Roseola, Erythema infectiosum, Erythema multiforme]
// against the live [Rubella, Measles, Roseola infantum, Erythema infectiosum, Chickenpox]. It also
// expands the vignette -- "During the next 24 h, she develops tender swelling of her wrists and
// redness of her eyes." Key text is Rubella in both. Under the standing rule -- same stem plus any
// option replaced, added or removed means DRAFT and record the pairing -- n1 is drafted as its own
// entry with the cross-reference written into its explanation. Do not "tidy" it into NEAR later.
//
// FIVE RELATIVES ARE RECORDED AND NONE OF THEM IS FOLDED OR WRITTEN HERE. n19 vs pedep-mf3-35
// (a bare stem on the same menu with one option genuinely different -- a shared menu pairs
// questions, it never folds them), n20 vs pedep-nut-70 (a live duplicate pair that predates this
// section and is not this pass's business), n27 vs pedep-nut-21 (a different vignette, the menu
// differing only in hyphenation), n29 vs pedep-neo-14 (the body-bank ancestor, ischaemic against
// ischemic) and n31 vs pedep-neo-17 (a condensed printing sharing the menu). The three House hits
// -- pedhd-emg-19, pedhd-neo-14, pedhd-neo-17 -- are record-only for the same reason plus one
// more: questions.peds.js belongs to another chat and nothing in this stream writes to it.
//
// Written with the Write tool, not a heredoc: the heredoc collapses \\ to \ and would eat the
// regexes below.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';
const LIVE = R + 'app/data/questions.peds.ep.js';
const EXAM = 'Model Training Exam 2';

// ---- the map, one line per reprint: staged n -> live id, and what the exam printing did ----
//
// EXACT: stem, options and printed key all identical once the apostrophe glyph, letter case and
// spacing are ignored. When one fails the strict check below it is MOVED to NEAR with a clause
// naming what moved, never relaxed in place. n18 sits here rather than in NEAR because the only
// difference between the two printings is a paragraph break the live entry does not carry, and
// whitespace is one of the three classes this comparator is blind to.
const EXACT = {
  12: 'mf2-41', 18: 'emg-57', 20: 'nut-58', 21: 'gp-85', 22: 'mf1-63', 23: 'mf1-68',
  24: 'gp-89', 25: 'mf2-11', 26: 'mf2-13', 27: 'gp-6', 28: 'mf2-19', 30: 'nut-61',
};

// NEAR: each clause names, in its own words, what moved. Three rows, and every clause below was
// written from the two printings read side by side, not from a score.
const NEAR = {
  19: ['emg-35', 'reprinted in ' + EXAM + ', p.PAGE, with the first option respelled again ' +
       '("Capillary refill time greater than 3 seconds"); the key text is unchanged'],
  29: ['mf3-2', 'reprinted in ' + EXAM + ', p.PAGE, with the clause "On assessment, she has ' +
       'global developmental delay" moved from mid-stem to the end of the vignette; the options ' +
       'and the key text are unchanged'],
  31: ['mf2-37', 'reprinted in ' + EXAM + ', p.PAGE, dropping the leading "A" from the stem; the ' +
       'options and the key text are unchanged'],
};

// KEY_REWORDED: the narrow, named escape for a NEAR row whose key option text does not match while
// still keying the same answer. Empty here -- all three NEAR rows key the same option text, which
// is what made them reprints rather than pairs. It is kept rather than deleted so a later editor
// adding a NEAR row meets the mechanism instead of inventing a looser comparator.
const KEY_REWORDED = {};

// ---- load ----
vm.runInThisContext(fs.readFileSync(R + 'content/peds/qb-pages/endpoint-s15-tre2.array.js', 'utf8'));
const S = globalThis.PEDEP_S15_STAGED;
if (!Array.isArray(S)) { console.error('staging did not load'); process.exit(2); }
const liveSrc = fs.readFileSync(LIVE, 'utf8');
vm.runInThisContext(liveSrc, { filename: 'questions.peds.ep.js' });
const L = globalThis.Q_PEDS_EP;
if (!Array.isArray(L)) { console.error('live did not load'); process.exit(2); }
const byId = new Map(L.map(q => [q.id, q]));

const ap = s => String(s).replace(/\u2019/g, "'");

// EXACT's comparator is blind to three cosmetic classes and to nothing else -- apostrophe glyph,
// letter case and whitespace -- each of them a difference the standing rule transcribes silently.
// It stays strict about everything that can change meaning: a dropped or added word, a different
// number, unit or dose, a different option, a different key.
const cos = s => ap(s).toLowerCase().replace(/\s+/g, '');
// Options get one blindness the stem does not: a full stop, semicolon or comma at the END of an
// option. Anchored to the end on purpose -- punctuation INSIDE an option can separate a dose from
// a route or a value from its unit, and stays strict.
const cosOpt = s => cos(String(s).replace(/[.;,]+$/, ''));

const fail = [], plan = [], done = [];
const EXPECT = Object.keys(EXACT).length + Object.keys(NEAR).length;

// An entry whose source already names this exam is a row this pass has already written, not a
// failure. The count gate below still demands the full EXPECT, so a silently skipped row cannot
// pass unnoticed -- it just has to be already correct rather than freshly written.
function target(n, suf) {
  const id = 'pedep-' + suf;
  const q = byId.get(id);
  if (!q) { fail.push('n' + n + ' -> ' + id + ': not live'); return null; }
  if (new RegExp(EXAM).test(q.source || '')) { done.push('n' + n + ' -> ' + id); return null; }
  return q;
}

Object.keys(EXACT).forEach(k => {
  const n = Number(k), s = S.find(x => x.n === n);
  const q = target(n, EXACT[k]);
  if (!q) return;
  if (cos(q.stem) !== cos(s.stem)) fail.push('n' + n + ' -> ' + q.id + ': stem differs beyond glyph, case and spacing -- move it to NEAR with a clause naming what moved, do not relax this check');
  if (JSON.stringify(q.options.map(cosOpt)) !== JSON.stringify(s.opts.map(cosOpt))) fail.push('n' + n + ' -> ' + q.id + ': options differ beyond glyph, case and spacing -- move it to NEAR with a clause naming what moved, do not relax this check');
  if (q.answer !== s.key) fail.push('n' + n + ' -> ' + q.id + ': KEY DISAGREES -- live ' + q.answer + ', exam ' + s.key + '. Record it, never fold it.');
  plan.push([q, 'reprinted word for word in ' + EXAM + ', p.' + s.p]);
});

Object.keys(NEAR).forEach(k => {
  const n = Number(k), s = S.find(x => x.n === n);
  const q = target(n, NEAR[k][0]);
  if (!q) return;
  // A near reprint is not proved by text equality -- it was proved by reading the two printings
  // side by side. What IS checked here is that the key still lands on the same option TEXT, which
  // is the distinction a similarity score cannot make, and the one that separates a reprint from a
  // question that merely shares a vignette. Punctuation- and case-blind, whitespace removed rather
  // than collapsed, and -ae-/-oe-blind on top for the British and American spellings the two
  // printings mix, applied AFTER the spaces come out. Every transform is applied to BOTH sides, so
  // none can manufacture a match, and none touches a digit, a unit or a dose.
  const flat = t => ap(t).toLowerCase().replace(/[.,;:()-]/g, ' ')
                         .replace(/\s+/g, '')
                         .replace(/ae/g, 'e').replace(/oe/g, 'e');
  const liveKey = flat(q.options[q.answer]), examKey = flat(s.opts[s.key]);
  const recorded = liveKey !== examKey && flat(q.source || '').indexOf(examKey) >= 0;
  if (recorded) console.log('n' + n + ' -> ' + q.id + ': key text differs, and the live source already records it as a variant of this same question');
  if (liveKey !== examKey && !recorded && KEY_REWORDED[n]) console.log('n' + n + ' -> ' + q.id + ': key text differs -- ' + KEY_REWORDED[n]);
  if (liveKey !== examKey && !recorded && !KEY_REWORDED[n]) {
    fail.push('n' + n + ' -> ' + q.id + ': KEY TEXT DIFFERS -- live "' + q.options[q.answer] +
      '", exam "' + s.opts[s.key] + '". That is the paired shape, not a reprint. Draft it and ' +
      'record the divergence; do not add an exception here.');
  }
  // A NEAR row still must not move the key INDEX silently. The clause above names what moved in
  // words; this asserts the printed key itself did not.
  if (q.answer !== s.key) fail.push('n' + n + ' -> ' + q.id + ': KEY INDEX DISAGREES -- live ' + q.answer + ', exam ' + s.key + '. Record it, never fold it.');
  plan.push([q, NEAR[k][1].replace('PAGE', String(s.p))]);
});

if (fail.length) { console.log('FAILURES:\n  ' + fail.join('\n  ')); process.exit(1); }
if (plan.length + done.length !== EXPECT) { console.log('expected ' + EXPECT + ' reprints, planned ' + plan.length + ' and found ' + done.length + ' already written'); process.exit(1); }
if (done.length) console.log('already written, left alone: ' + done.join(', '));

// ---- rewrite each source, byte-level, in the live text ----
// The existing sources are two shapes: a bare citation, and a citation with a trailing
// parenthetical. Appending a second parenthetical to the latter reads badly, so the clause is
// merged into the one already there.
let out = liveSrc, edited = 0;
for (const [q, clause] of plan) {
  const old = q.source;
  const neu = /\)$/.test(old) ? old.slice(0, -1) + '; ' + clause + ')' : old + ' (' + clause + ')';
  const needle = JSON.stringify(old);
  const single = "'" + old.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
  let hit = null;
  if (out.indexOf(needle) >= 0) hit = [needle, JSON.stringify(neu)];
  else if (out.indexOf(single) >= 0) hit = [single, "'" + neu.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'"];
  if (!hit) { console.error('could not locate the source text of ' + q.id + ' in the live file'); process.exit(1); }
  if (out.split(hit[0]).length - 1 !== 1) { console.error(q.id + ': its source text appears ' + (out.split(hit[0]).length - 1) + ' times -- not a unique anchor'); process.exit(1); }
  out = out.replace(hit[0], hit[1]);
  edited++;
  console.log(q.id.padEnd(14) + ' <- ' + clause);
}

function count(text) {
  vm.runInThisContext(text, { filename: 'questions.peds.ep.js (in memory)' });
  const a = globalThis.Q_PEDS_EP;
  let holes = 0;
  for (let i = 0; i < a.length; i++) if (!(i in a)) holes++;
  return { n: a.length, holes, srcs: a.filter(q => new RegExp(EXAM).test(q.source || '')).length };
}
const before = count(liveSrc);
let after;
try { after = count(out); } catch (e) { console.error('REWRITTEN FILE DOES NOT PARSE: ' + e.message); process.exit(1); }
if (after.n !== before.n) { console.error('ENTRY COUNT MOVED: ' + before.n + ' -> ' + after.n + '. This pass must not change it.'); process.exit(1); }
if (after.holes) { console.error('REWRITTEN FILE HAS HOLES'); process.exit(1); }
if (after.srcs !== EXPECT) { console.error('expected ' + EXPECT + ' sources naming ' + EXAM + ', got ' + after.srcs); process.exit(1); }

console.log('edited ' + edited + ' sources | entries ' + before.n + ' -> ' + after.n + ' (unchanged, as intended) | holes ' + after.holes);
if (!process.argv.includes('--write')) { console.log('DRY RUN. Re-run with --write.'); process.exit(0); }
fs.writeFileSync(LIVE, out, 'utf8');
const chk = count(fs.readFileSync(LIVE, 'utf8'));
console.log('written. entries ' + chk.n + ' | holes ' + chk.holes + ' | sources naming ' + EXAM + ': ' + chk.srcs);
