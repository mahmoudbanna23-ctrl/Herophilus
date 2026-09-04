// Section 12 (Model Final Exam 3) reprint pass over app/data/questions.peds.ep.js.
//   node tools/bank-harness/reprint-s12-pd-ep.js            # dry run, writes nothing
//   node tools/bank-harness/reprint-s12-pd-ep.js --write
//
// ⚠️ THIS PASS DROPS NOTHING AND CHANGES NO KEY. Same shape as reprint-s11-pd-ep.js: the 17
// reprints are never drafted at all -- the exam reprints a question the book already printed, so
// the entry that would have been created is not created, and the live entry's `source` gains the
// exam page. Entry count is unchanged by design; `source` is the only field any entry gains.
//
// WHY IT RUNS BEFORE THE SPLICE. splice-pd-ep.js demands every staged n be drafted exactly once.
// Section 12 stages 80 and drafts 63, so SEC[12].reprints there records the 17 that are
// deliberately absent. This file is where that list is PROVED against the two files on disk --
// the splicer only reads the count.
//
// ⚠️ THE WITHIN-SECTION PAIR IS NOT THIS PASS'S BUSINESS. Staged n50 (p.1583) and n58 (p.1599) are
// word for word the same question, same five options, same key, differing only in the explanation
// box. Neither is a reprint of anything LIVE, so both stay in the drafted 63 and the pair is
// resolved after the splice by a fold, which is the one operation that may pick a survivor and
// delete the loser. Putting n58 in `reprints` would be wrong twice over: there is no live entry
// for its source to gain, and this pass would have nothing to write.
//
// HOW THE 17 WERE FOUND. Two probes that share no input, the section-11 method. reprint-pd-ep.js
// matches the OCR text of every answered page in pp.1484-1643 against the live file and returned
// 22 cross-file candidates, four of them HOUSE pages rather than endpoint ones. A second probe
// matched the STAGED TRANSCRIPTION -- a human read of the same pages -- against the same file, and
// returned 10 exact and 8 near. Both probes named the same 18 endpoint pages. 18 candidates,
// 17 reprints, and the 18th is the finding below.
//
// ⚠️⚠️ N7 IS NOT IN THIS FILE, AND ITS ABSENCE IS THE POINT. Staged n7 (p.1497) shares a rickets
// vignette with live pedep-nut-71 (p.380) -- the same convulsing infant, the same wide fontanelle
// and broad wrists, the same 37.8°C -- and the two printings ASK DIFFERENT QUESTIONS. The live
// entry asks which pattern of results is expected and offers five calcium/phosphate/alkaline
// phosphatase combinations; the exam asks which investigation reveals the cause and offers CT
// brain, EEG, coagulation profile, serum calcium and skull X-ray. There is no option in common and
// no key in common: the live key is a result pattern, the exam key is "Serum calcium". Folding it
// would delete a question rather than merge two printings of one, so n7 is DRAFTED as its own
// entry and the shared vignette is recorded in its explanation. Do not "tidy" n7 into EXACT or
// NEAR later.
//
// Cross-bank hits are NOT here either. The OCR probe also matched pp.1489, 1491, 1509 and 1561
// against pedhd-gastro-17, pedhd-emg-19, pedhd-dev-19 and pedhd-peri-5 in Chat B's House file.
// Neither chat folds into the other's file while both are writing; those four are recorded in the
// journal and settled by the end-of-stream sweep.
//
// Written with the Write tool, not a heredoc: the heredoc collapses \\ to \ and would eat the
// regexes below.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';
const LIVE = R + 'app/data/questions.peds.ep.js';

// ---- the map, one line per reprint: staged n -> live id, and what the exam printing did ----
//
// EXACT: stem, options and printed key all identical once the apostrophe glyph, letter case and
// spacing are ignored. The candidate list came from a punctuation-blind probe, so some of these
// may not survive the strict check below; when one fails it is MOVED to NEAR with a clause naming
// what moved, never relaxed in place.
const EXACT = {
  11: 'gi-64', 12: 'gp-87', 17: 'gi-65', 24: 'mf2-41', 39: 'neo-35', 47: 'nut-65', 52: 'nut-66',
  53: 'neo-32', 57: 'gp-75', 59: 'emg-54',
};

// NEAR: each clause names, in its own words, what moved. Written from the two texts printed side
// by side on disk, not from a summary of them, and phrased from the LIVE entry's side, because
// that is the side a reader meets the sentence on.
const NEAR = {
  // ⚠️ A SIDE CHANGED BETWEEN PRINTINGS. Left upper quadrant here, right upper quadrant in the
  // exam, for the same 5-week-old with projectile vomiting. It is not a number, a unit or a dose,
  // but it is anatomy and it is the finding the vignette turns on, so it is named rather than
  // transcribed silently. Both printings key metabolic alkalosis on the same five-option ladder.
  3: ['gi-17', 'reprinted in Model Final Exam 3, p.PAGE, with the mass moved to the RIGHT upper ' +
      'quadrant and the blood gas values withheld -- the exam prints no pH, pCO2 or bicarbonate ' +
      'and asks what finding is expected rather than what the printed gas represents; the options ' +
      'and the key are unchanged, and the printing above is the fuller one'],
  4: ['emg-57', 'and a third time in Model Final Exam 3, p.PAGE, with a fifth option added ' +
      '("Neurogenic shock", printed last); the key text is unchanged'],
  5: ['gi-59', 'and a third time in Model Final Exam 3, p.PAGE, where one distractor is replaced ' +
      '("Gastroenteritis" giving way to "Hirschsprung\'s disease") and the sentence "She cries ' +
      'when she vomits" is dropped from the vignette; the key is unchanged'],
  56: ['gp-40', 'reprinted in Model Final Exam 3, p.PAGE, with three of the four options replaced ' +
       '-- physiological gastroesophageal reflux and frequent minor upper respiratory infections ' +
       'giving way to acute UTI, mild intermittent asthma and acute gastroenteritis requiring IV ' +
       'fluids, a five-option ladder -- which moves the key from the second option to the third; ' +
       'the key text is unchanged'],
  60: ['emg-59', 'and a fourth time in Model Final Exam 3, p.PAGE, on the four-option menu the ' +
       'p.689 printing uses rather than the five-option one above, with the key text again at a ' +
       'different position; the key text is unchanged'],
  61: ['emg-56', 'reprinted in Model Final Exam 3, p.PAGE, with "occurrence" spelled "occurence"; ' +
       'the options and the key are unchanged'],
  67: ['mf2-66', 'reprinted again in Model Final Exam 3, p.PAGE, with the first distractor ' +
       'reworded ("Posteriorly in the diaphragm" as "Postero-laterally in the diaphragm") and ' +
       '"retrosternal" hyphenated; the key is unchanged'],
};

// ---- load ----
vm.runInThisContext(fs.readFileSync(R + 'content/peds/qb-pages/endpoint-s12-mfe3.array.js', 'utf8'));
const S = globalThis.PEDEP_S12_STAGED;
if (!Array.isArray(S)) { console.error('staging did not load'); process.exit(2); }
const liveSrc = fs.readFileSync(LIVE, 'utf8');
vm.runInThisContext(liveSrc, { filename: 'questions.peds.ep.js' });
const L = globalThis.Q_PEDS_EP;
if (!Array.isArray(L)) { console.error('live did not load'); process.exit(2); }
const byId = new Map(L.map(q => [q.id, q]));

const ap = s => String(s).replace(/\u2019/g, "'");

// EXACT's comparator is blind to three cosmetic classes and to nothing else -- apostrophe glyph,
// letter case and whitespace -- each of them a difference the standing rule transcribes silently
// rather than catalogues in a user-visible string. It stays strict about everything that can
// change meaning: a dropped or added word, a different number, unit or dose, a different option, a
// different key. Those halt the pass.
const cos = s => ap(s).toLowerCase().replace(/\s+/g, '');
// Options get one blindness the stem does not: a full stop, semicolon or comma at the END of an
// option. Measured on n53/pedep-neo-32, where the exam punctuates all five options of a TRUE/FALSE
// ladder and the live printing punctuates none, and nothing else about the pair differs. That is
// typography, and the standing rule transcribes it silently rather than catalogues it in a
// user-visible clause. It is deliberately anchored to the end of the string: punctuation INSIDE an
// option can separate a dose from a route or a value from its unit, and stays strict.
const cosOpt = s => cos(String(s).replace(/[.;,]+$/, ''));

const fail = [], plan = [];

function target(n, suf) {
  const id = 'pedep-' + suf;
  const q = byId.get(id);
  if (!q) { fail.push('n' + n + ' -> ' + id + ': not live'); return null; }
  if (/Model Final Exam 3/.test(q.source || '')) { fail.push('n' + n + ' -> ' + id + ': source already names Model Final Exam 3 -- this pass has already run'); return null; }
  return q;
}

Object.keys(EXACT).forEach(k => {
  const n = Number(k), s = S.find(x => x.n === n);
  const q = target(n, EXACT[k]);
  if (!q) return;
  if (cos(q.stem) !== cos(s.stem)) fail.push('n' + n + ' -> ' + q.id + ': stem differs beyond glyph, case and spacing -- move it to NEAR with a clause naming what moved, do not relax this check');
  if (JSON.stringify(q.options.map(cosOpt)) !== JSON.stringify(s.opts.map(cosOpt))) fail.push('n' + n + ' -> ' + q.id + ': options differ beyond glyph, case and spacing -- move it to NEAR with a clause naming what moved, do not relax this check');
  if (q.answer !== s.key) fail.push('n' + n + ' -> ' + q.id + ': KEY DISAGREES -- live ' + q.answer + ', exam ' + s.key + '. Record it, never fold it.');
  plan.push([q, 'reprinted word for word in Model Final Exam 3, p.' + s.p]);
});

Object.keys(NEAR).forEach(k => {
  const n = Number(k), s = S.find(x => x.n === n);
  const q = target(n, NEAR[k][0]);
  if (!q) return;
  // A near reprint is not proved by text equality -- it was proved by reading the two printings
  // side by side. What IS checked here is that the key still lands on the same option TEXT, which
  // is the distinction a similarity score cannot make, and the distinction that separates every
  // entry in this file from n7. Punctuation- and case-blind, because one printing punctuates its
  // options and the other does not. Whitespace is REMOVED rather than collapsed, which is what the
  // EXACT comparator above already does and what this section needed: n5 keys
  // "Gastro-esophageal reflux" against the live "Gastroesophageal reflux", and the section-11
  // version of this line -- which turned a hyphen into a space -- would have called that a
  // different answer. -ae-/-oe-blind on top, for the American/British spellings the two printings
  // mix, and applied AFTER the spaces come out rather than before: run in the other order it
  // rewrote the live "gastroesophageal" and left the exam's hyphenated "gastro esophageal" alone,
  // which manufactured a difference out of the very pair this line exists to match. Every
  // transform is applied to BOTH sides, so none can manufacture a match between texts that
  // genuinely differ, and none touches a digit, a unit or a dose.
  const flat = t => ap(t).toLowerCase().replace(/[.,;:()-]/g, ' ')
                         .replace(/\s+/g, '')
                         .replace(/ae/g, 'e').replace(/oe/g, 'e');
  const liveKey = flat(q.options[q.answer]), examKey = flat(s.opts[s.key]);
  if (liveKey !== examKey) {
    fail.push('n' + n + ' -> ' + q.id + ': KEY TEXT DIFFERS -- live "' + q.options[q.answer] +
      '", exam "' + s.opts[s.key] + '". That is the n7 shape: it is not a reprint. Draft it and ' +
      'record the divergence; do not add an exception here.');
  }
  plan.push([q, NEAR[k][1].replace('PAGE', String(s.p))]);
});

if (fail.length) { console.log('FAILURES:\n  ' + fail.join('\n  ')); process.exit(1); }
if (plan.length !== 17) { console.log('expected 17 reprints, planned ' + plan.length); process.exit(1); }

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
  return { n: a.length, holes, srcs: a.filter(q => /Model Final Exam 3/.test(q.source || '')).length };
}
const before = count(liveSrc);
let after;
try { after = count(out); } catch (e) { console.error('REWRITTEN FILE DOES NOT PARSE: ' + e.message); process.exit(1); }
if (after.n !== before.n) { console.error('ENTRY COUNT MOVED: ' + before.n + ' -> ' + after.n + '. This pass must not change it.'); process.exit(1); }
if (after.holes) { console.error('REWRITTEN FILE HAS HOLES'); process.exit(1); }
if (after.srcs !== 17) { console.error('expected 17 sources naming Model Final Exam 3, got ' + after.srcs); process.exit(1); }

console.log('edited ' + edited + ' sources | entries ' + before.n + ' -> ' + after.n + ' (unchanged, as intended) | holes ' + after.holes);
if (!process.argv.includes('--write')) { console.log('DRY RUN. Re-run with --write.'); process.exit(0); }
fs.writeFileSync(LIVE, out, 'utf8');
const chk = count(fs.readFileSync(LIVE, 'utf8'));
console.log('written. entries ' + chk.n + ' | holes ' + chk.holes + ' | sources naming Model Final Exam 3: ' + chk.srcs);
