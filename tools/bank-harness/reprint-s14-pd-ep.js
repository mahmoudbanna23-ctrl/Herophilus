// Section 14 (Model Training Exam 1) reprint pass over app/data/questions.peds.ep.js.
//   node tools/bank-harness/reprint-s14-pd-ep.js            # dry run, writes nothing
//   node tools/bank-harness/reprint-s14-pd-ep.js --write
//
// ⚠️ THIS PASS DROPS NOTHING AND CHANGES NO KEY. Same shape as reprint-s13-pd-ep.js: a reprint is
// never drafted at all -- the exam reprints a question the book already printed, so the entry that
// would have been created is not created, and the live entry's `source` gains the exam page. Entry
// count is unchanged by design; `source` is the only field any entry gains.
//
// WHY IT RUNS BEFORE THE SPLICE. splice-pd-ep.js demands every staged n be drafted exactly once.
// Section 14 stages 30 and drafts 29, so SEC[14].reprints there records the one that is
// deliberately absent. This file is where that list is PROVED against the two files on disk.
//
// ONE REPRINT IN THIRTY, FOUND BY FIVE ARMS THAT ALL AGREE. Section 12 was wrong by two because
// both its probes matched on the STEM; section 13 answered that with a third arm and found nine
// more. Section 14 ran five, and this time they converge rather than diverge -- which is a
// statement about this exam, not about the instruments.
//   (a) reprint-pd-ep.js over the OCR text of pp.1805-1873 -- 2 candidate pages, 1815 and 1817.
//   (b) a stem-head arm over the human transcription -- 1 exact (n4) and 1 near (n5), the same two
//       pages, and 28 rows with no stem match at all.
//   (c) a whole-text arm searching stem, options, explanation AND source of every live entry for
//       each staged row's key text and its rarest words -- 49 candidate lines over 17 of the 28
//       unmatched rows, top scores 7, 6 and 5. Every one was hand-read and every one is a
//       different question.
//   (d) an option-SET arm comparing option menus directly by Jaccard over tight()-normalised sets,
//       the arm that found section 13's four stem-blind reprints. It scored 0.000 on all 28
//       unmatched rows. Widening its thresholds from 0.50/0.60 to 0.35/0.35 added only noise
//       thrown off by n4's short template stem.
//   (e) NEW HERE: a KEY-TEXT arm, which asks whether any live entry's key option is the same
//       string as a staged row's key option, on the theory that a reprint keeps its answer even
//       when the vignette and the distractors are rewritten. Four rows hit -- n4 (this reprint),
//       n15 vs pedep-neo-4 ("Duodenal atresia"), n17 vs pedep-mf2-69 ("Rectal biopsy") and n22 vs
//       pedep-mf1-80 ("Neuroblastoma"). The last three were hand-read: different vignettes on
//       different menus asking a different question that happens to have the same answer. Same
//       fact is not same question. ⚠️ The arm has a 6-character floor on the key text, so n18,
//       whose key is "MRCP", is invisible to it; n18 was read by hand for that reason.
//   Pass 4 of the stem arm found NO live source already citing any page in 1805-1873.
//
// ⚠️ n5 IS THE FINDING OF THIS SECTION AND IT IS DELIBERATELY ABSENT FROM THE MAP BELOW. p.1817
// reprints pedep-mf4-63 (p.1770, section 13's own entry) with the stem identical apart from "What
// is a poor prognostic indicator" for "Which of the following is a poor prognostic indicator" --
// and with TWO OPTIONS REPLACED BY THEIR OPPOSITES and the key moved with them. The exam prints
// "Presence of stomach down in the abdomen" where the live entry prints "Presence of stomach in
// the chest" (its key), and "Lung-head ratio of 0.8" (the exam's key) where the live entry prints
// "Lung-to-head ratio (LHR) of 1.5". Both printings are internally correct: a stomach in the chest
// and an LHR of 0.8 are both poor prognostic indicators in congenital diaphragmatic hernia. Under
// the standing rule -- same stem plus any option replaced means DRAFT and record the pairing --
// n5 is drafted as its own entry with the cross-reference written into its explanation. Do not
// "tidy" it into NEAR later; the two sheets do not print the same question.
//
// Three further pairings were identified for the drafters to record in prose, and none of them
// belongs here either: n7 vs pedep-mf1-74 (pyloric stenosis biochemistry, vignette against bare
// fact), n20 vs pedep-mf1-53 and pedep-mf3-79 (inguinal hernia, treatment against management),
// and n12 vs pedep-mf1-58.
//
// Written with the Write tool, not a heredoc: the heredoc collapses \\ to \ and would eat the
// regexes below.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';
const LIVE = R + 'app/data/questions.peds.ep.js';
const EXAM = 'Model Training Exam 1';

// ---- the map, one line per reprint: staged n -> live id, and what the exam printing did ----
//
// EXACT: stem, options and printed key all identical once the apostrophe glyph, letter case and
// spacing are ignored. When one fails the strict check below it is MOVED to NEAR with a clause
// naming what moved, never relaxed in place.
const EXACT = { 4: 'mf1-70' };

// NEAR: each clause names, in its own words, what moved. Empty here -- the exam's one reprint is
// word for word, and the one near-miss the stem arm flagged (n5) is a different question, not a
// reworded printing of the same one. See the block above.
const NEAR = {};

// KEY_REWORDED: the narrow, named escape for a NEAR row whose key option text does not match while
// still keying the same answer. Empty here because NEAR is empty. It is kept rather than deleted
// so a later editor adding a NEAR row meets the mechanism instead of inventing a looser comparator.
const KEY_REWORDED = {};

// ---- load ----
vm.runInThisContext(fs.readFileSync(R + 'content/peds/qb-pages/endpoint-s14-tre1.array.js', 'utf8'));
const S = globalThis.PEDEP_S14_STAGED;
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

// An entry whose source already names this exam is a row this pass has already written, not a
// failure. The count gate below still demands the full 1, so a silently skipped row cannot pass
// unnoticed -- it just has to be already correct rather than freshly written.
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
  plan.push([q, NEAR[k][1].replace('PAGE', String(s.p))]);
});

if (fail.length) { console.log('FAILURES:\n  ' + fail.join('\n  ')); process.exit(1); }
if (plan.length + done.length !== 1) { console.log('expected 1 reprint, planned ' + plan.length + ' and found ' + done.length + ' already written'); process.exit(1); }
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
if (after.srcs !== 1) { console.error('expected 1 source naming ' + EXAM + ', got ' + after.srcs); process.exit(1); }

console.log('edited ' + edited + ' sources | entries ' + before.n + ' -> ' + after.n + ' (unchanged, as intended) | holes ' + after.holes);
if (!process.argv.includes('--write')) { console.log('DRY RUN. Re-run with --write.'); process.exit(0); }
fs.writeFileSync(LIVE, out, 'utf8');
const chk = count(fs.readFileSync(LIVE, 'utf8'));
console.log('written. entries ' + chk.n + ' | holes ' + chk.holes + ' | sources naming ' + EXAM + ': ' + chk.srcs);
