// Section 11 (Model Final Exam 2) reprint pass over app/data/questions.peds.ep.js.
//   node tools/bank-harness/reprint-s11-pd-ep.js            # dry run, writes nothing
//   node tools/bank-harness/reprint-s11-pd-ep.js --write
//
// ⚠️ THIS PASS DROPS NOTHING AND CHANGES NO KEY. It is not a fold in the fold*-pd-ep.js sense:
// those pick a survivor from two LIVE entries and delete the loser. Here the 33 reprints are
// never drafted at all -- the exam reprints a question the book already printed, so the entry
// that would have been created is not created, and the live entry's `source` gains the exam page.
// Entry count is unchanged by design; `source` is the only field any entry gains.
//
// WHY IT RUNS BEFORE THE SPLICE. splice-pd-ep.js demands every staged n be drafted exactly once.
// Section 11 stages 79 and drafts 46, so SEC[11].reprints there records the 33 that are
// deliberately absent. This file is where that list is PROVED against the two files on disk --
// the splicer only reads the count.
//
// HOW THE 33 WERE FOUND. Two probes that share no input. reprint-pd-ep.js matches the OCR text of
// every answered page in pp.1323-1483 against the live file; a second probe matched the STAGED
// TRANSCRIPTION -- a human read of the same pages -- against the same file. Both returned the same
// 34 pages, which is what makes the set worth trusting: the OCR probe is blind to anything OCR
// dropped (it returned "stem too short to match" on p.1382, which the transcription probe resolved
// as no match at all), and the transcription probe is blind to nothing but shares its input with
// the staging. 34 candidates, 33 reprints, and the 34th is the finding below.
//
// ⚠️⚠️ N24 IS NOT IN THIS FILE, AND ITS ABSENCE IS THE POINT. Staged n24 (p.1370) matches live
// pedep-emg-23 (p.622) on the stem, and the two printings GIVE DIFFERENT ANSWERS. The body
// printing offers both "10 mL/kg bolus of normal saline" and "20 mL/kg bolus of normal saline" and
// keys the 20; the exam printing drops the 20 mL/kg option entirely and keys the 10. The exam's
// answer is an option the body bank prints as a distractor. That is a contradiction inside one
// bank, and the standing rule is that a contradiction is RECORDED, never corrected, and the key
// never moves -- so n24 is DRAFTED as its own entry carrying the exam's printed key, and its
// explanation records what p.622 prints instead. Folding it would have destroyed one of two
// conflicting doses and left no trace. Do not "tidy" n24 into EXACT or NEAR later.
//
// Written with the Write tool, not a heredoc: the heredoc collapses \\ to \ and would eat the
// regexes below.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';
const LIVE = R + 'app/data/questions.peds.ep.js';

// ---- the map, one line per reprint: staged n -> live id, and what the exam printing did ----
//
// EXACT: stem, options and printed key all identical once the apostrophe glyph is ignored. The
// candidate list came from a punctuation-blind probe, so some of these will not survive the strict
// check below; when one fails it is MOVED to NEAR with a clause naming what moved, never relaxed
// in place. Section 10 learned this the expensive way -- its journal called 25 pairs byte-exact
// and strictly 19 were.
const EXACT = {
  1: 'emg-57', 3: 'gp-3', 5: 'gp-66', 6: 'gp-67', 7: 'gp-4', 9: 'gp-70', 10: 'per-22',
  12: 'nut-58', 15: 'nut-59', 16: 'gp-6', 17: 'nut-60', 18: 'gi-66', 26: 'nut-61', 27: 'gi-58',
  38: 'gp-7', 40: 'gp-9', 42: 'gp-10', 43: 'gi-64', 52: 'emg-58', 53: 'nut-62', 57: 'nut-63',
  74: 'emg-59', 76: 'gi-59',
};

// NEAR: each clause names, in its own words, what moved. Written from the two texts printed side
// by side on disk, not from a summary of them, and phrased from the LIVE entry's side, because
// that is the side a reader meets the sentence on.
const NEAR = {
  4: ['emg-35', 'reprinted in Model Final Exam 2, p.PAGE, with the first option respelled ' +
      '(“Capillary refilling time greater than 3 sec.” as “Capillary refill time greater than ' +
      '3 seconds”) and the trailing full stops dropped; the key text is unchanged'],
  8: ['gp-5', 'and a fourth time in Model Final Exam 2, p.PAGE, where the last option regains its ' +
      'unit (“less than 500” printed as “less than 500 g”); the key is unchanged'],
  25: ['neo-14', 'reprinted in Model Final Exam 2, p.PAGE, with the vignette expanded — the ' +
       'spontaneous vaginal delivery and the neonatal-unit admission spelled out — and the key ' +
       'option spelled “Hypoxic-ischemic”; the options and the key are unchanged'],
  39: ['gp-8', 'and a third time in Model Final Exam 2, p.PAGE, reworded again, with the same ' +
       'options and the same key'],
  // ⚠️ A NUMBER CHANGED BETWEEN PRINTINGS, WHICH IS THE ONE CLASS OF DIFFERENCE THAT IS NEVER
  // TRANSCRIBED SILENTLY. Both printings key "No treatment required", so this is a reprint and not
  // the n24 shape; but the value, the unit and the conjugated fraction all differ, and a reader
  // meeting 5 mg/dl here and 68 micromol/L there needs to be told rather than left to reconcile it.
  47: ['neo-21', 'reprinted in Model Final Exam 2, p.PAGE, with the bilirubin restated in ' +
       'different units and without the conjugated fraction: the exam prints “Her bilirubin is ' +
       '5 mg/dl” where the printing above gives 68 μmol/L (normal <100 μmol/L) with a conjugated ' +
       'level of 8 μmol/L (normal <20 μmol/L). The options and the key are unchanged, and the ' +
       'printing above is the fuller one'],
  54: ['gp-79', 'and again in Model Final Exam 2, p.PAGE, with one clause reordered (“It does not ' +
       'occur at weekends usually” as “It usually does not occur at weekends”); the options and ' +
       'the key are unchanged'],
  70: ['mf1-35', 'reprinted again in Model Final Exam 2, p.PAGE, with two distractors replaced — ' +
       '“Varicella” and “Scarlet fever” giving way to “Drug reaction to antipyretics” and ' +
       '“Enteroviral infection” — which moves the key from the fifth option to the fourth; the ' +
       'key text is unchanged'],
  72: ['mf1-43', 'reprinted again in Model Final Exam 2, p.PAGE, with one option respelled ' +
       '(“Parvo B19 virus” as “Parvovirus B19”); the key is unchanged'],
  73: ['inf-73', 'reprinted in Model Final Exam 2, p.PAGE, with a fifth option added (“Consider ' +
       'medical child abuse”, inserted second), which moves the key letter; the key text is ' +
       'unchanged'],
  79: ['neo-39', 'reprinted in Model Final Exam 2, p.PAGE, with “24 h” written out as ' +
       '“24 hours”; the options and the key are unchanged'],
};

// ---- load ----
vm.runInThisContext(fs.readFileSync(R + 'content/peds/qb-pages/endpoint-s11-mfe2.array.js', 'utf8'));
const S = globalThis.PEDEP_S11_STAGED;
if (!Array.isArray(S)) { console.error('staging did not load'); process.exit(2); }
const liveSrc = fs.readFileSync(LIVE, 'utf8');
vm.runInThisContext(liveSrc, { filename: 'questions.peds.ep.js' });
const L = globalThis.Q_PEDS_EP;
if (!Array.isArray(L)) { console.error('live did not load'); process.exit(2); }
const byId = new Map(L.map(q => [q.id, q]));

const ap = s => String(s).replace(/\u2019/g, "'");

// EXACT's comparator is blind to three cosmetic classes and to nothing else. Each was added
// because a real pair here failed on it, and each is a difference the standing rule transcribes
// silently rather than catalogues in a user-visible string:
//   apostrophe glyph  -- ASCII U+0027 against curly U+2019, the section-10 shape (6 pairs there)
//   letter case       -- n5 prints \u201cPalpable Breast bud\u201d for \u201cPalpable breast bud\u201d
//   whitespace        -- n16 prints \u201c...pasta each day.What is...\u201d with the space after the full
//                        stop lost, which is typography, not a reworded stem
// It stays strict about everything that can change meaning: a dropped or added word, a different
// number, unit or dose, a different option, a different key. Those halt the pass.
const cos = s => ap(s).toLowerCase().replace(/\s+/g, '');

const fail = [], plan = [];

function target(n, suf) {
  const id = 'pedep-' + suf;
  const q = byId.get(id);
  if (!q) { fail.push('n' + n + ' -> ' + id + ': not live'); return null; }
  if (/Model Final Exam 2/.test(q.source || '')) { fail.push('n' + n + ' -> ' + id + ': source already names Model Final Exam 2 -- this pass has already run'); return null; }
  return q;
}

Object.keys(EXACT).forEach(k => {
  const n = Number(k), s = S.find(x => x.n === n);
  const q = target(n, EXACT[k]);
  if (!q) return;
  if (cos(q.stem) !== cos(s.stem)) fail.push('n' + n + ' -> ' + q.id + ': stem differs beyond glyph, case and spacing -- move it to NEAR with a clause naming what moved, do not relax this check');
  if (JSON.stringify(q.options.map(cos)) !== JSON.stringify(s.opts.map(cos))) fail.push('n' + n + ' -> ' + q.id + ': options differ beyond glyph, case and spacing -- move it to NEAR with a clause naming what moved, do not relax this check');
  if (q.answer !== s.key) fail.push('n' + n + ' -> ' + q.id + ': KEY DISAGREES -- live ' + q.answer + ', exam ' + s.key + '. Record it, never fold it.');
  plan.push([q, 'reprinted word for word in Model Final Exam 2, p.' + s.p]);
});

Object.keys(NEAR).forEach(k => {
  const n = Number(k), s = S.find(x => x.n === n);
  const q = target(n, NEAR[k][0]);
  if (!q) return;
  // A near reprint is not proved by text equality -- it was proved by reading the two printings
  // side by side. What IS checked here is that the key still lands on the same option TEXT, which
  // is the distinction a similarity score cannot make, and the distinction that separates every
  // entry in this file from n24. Punctuation- and case-blind, because one printing punctuates its
  // options and the other does not and left strict that single full stop reads as a contradiction.
  // Hyphen-blind and -ae-/-oe-blind on top of the punctuation blindness, both for measured
  // reasons: n73 prints “work-up” and “broad-spectrum” where the live entry prints them open, and
  // n25 prints the American “Hypoxic-ischemic” for the live British “Hypoxic-ischaemic”. Neither
  // is a different answer. Both transforms are applied to BOTH sides, so they cannot manufacture a
  // match between two texts that genuinely differ -- and neither touches a digit, a unit or a
  // dose, which is the difference this check exists to catch and the one n24 was caught by.
  const flat = t => ap(t).toLowerCase().replace(/[.,;:()-]/g, ' ')
                         .replace(/ae/g, 'e').replace(/oe/g, 'e')
                         .replace(/\s+/g, ' ').trim();
  const liveKey = flat(q.options[q.answer]), examKey = flat(s.opts[s.key]);
  if (liveKey !== examKey) {
    fail.push('n' + n + ' -> ' + q.id + ': KEY TEXT DIFFERS -- live "' + q.options[q.answer] +
      '", exam "' + s.opts[s.key] + '". That is the n24 shape: it is not a reprint. Draft it and ' +
      'record the divergence; do not add an exception here.');
  }
  plan.push([q, NEAR[k][1].replace('PAGE', String(s.p))]);
});

if (fail.length) { console.log('FAILURES:\n  ' + fail.join('\n  ')); process.exit(1); }
if (plan.length !== 33) { console.log('expected 33 reprints, planned ' + plan.length); process.exit(1); }

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
  return { n: a.length, holes, srcs: a.filter(q => /Model Final Exam 2/.test(q.source || '')).length };
}
const before = count(liveSrc);
let after;
try { after = count(out); } catch (e) { console.error('REWRITTEN FILE DOES NOT PARSE: ' + e.message); process.exit(1); }
if (after.n !== before.n) { console.error('ENTRY COUNT MOVED: ' + before.n + ' -> ' + after.n + '. This pass must not change it.'); process.exit(1); }
if (after.holes) { console.error('REWRITTEN FILE HAS HOLES'); process.exit(1); }
if (after.srcs !== 33) { console.error('expected 33 sources naming Model Final Exam 2, got ' + after.srcs); process.exit(1); }

console.log('edited ' + edited + ' sources | entries ' + before.n + ' -> ' + after.n + ' (unchanged, as intended) | holes ' + after.holes);
if (!process.argv.includes('--write')) { console.log('DRY RUN. Re-run with --write.'); process.exit(0); }
fs.writeFileSync(LIVE, out, 'utf8');
const chk = count(fs.readFileSync(LIVE, 'utf8'));
console.log('written. entries ' + chk.n + ' | holes ' + chk.holes + ' | sources naming Model Final Exam 2: ' + chk.srcs);
