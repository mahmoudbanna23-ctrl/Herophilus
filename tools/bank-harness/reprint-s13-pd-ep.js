// Section 13 (Model Final Exam 4) reprint pass over app/data/questions.peds.ep.js.
//   node tools/bank-harness/reprint-s13-pd-ep.js            # dry run, writes nothing
//   node tools/bank-harness/reprint-s13-pd-ep.js --write
//
// ⚠️ THIS PASS DROPS NOTHING AND CHANGES NO KEY. Same shape as reprint-s12-pd-ep.js: a reprint is
// never drafted at all -- the exam reprints a question the book already printed, so the entry that
// would have been created is not created, and the live entry's `source` gains the exam page. Entry
// count is unchanged by design; `source` is the only field any entry gains.
//
// WHY IT RUNS BEFORE THE SPLICE. splice-pd-ep.js demands every staged n be drafted exactly once.
// Section 13 stages 80 and drafts 59, so SEC[13].reprints there records the 21 that are
// deliberately absent. This file is where that list is PROVED against the two files on disk.
//
// HOW THE 21 WERE FOUND, AND WHY IT IS TWENTY-ONE AND NOT FOURTEEN. Section 12 closed with a
// finding about instruments rather than about the section: two probes sharing no input agreed on
// 18 candidates and were wrong by two, because both matched on the STEM and both missed a printing
// the live entry records in prose inside `source`. Section 13 therefore started from the method
// that would have caught them, and ran three arms rather than two.
//   (a) reprint-pd-ep.js over the OCR text of pp.1644-1804 -- 14 endpoint-side candidate pages.
//   (b) a stem-head arm over the human transcription -- 4 exact and 10 near, 14 rows.
//   (c) a whole-text arm searching stem, options, explanation AND source of every live entry for
//       each staged row's key text and its rarest words, plus an OPTION-SET arm comparing option
//       menus directly, which is what found section 12's misses outright.
// Arms (a) and (b) named the same 14 pages. Arm (c) added nine more -- n16, n19, n25, n35, n37,
// n38, n44, n55 and n59 -- and two of arm (a)'s fourteen turned out not to be reprints at all.
// The under-count is the same shape both times: a stem probe is blind to a reprint whose vignette
// was rewritten around an unchanged option ladder, and blind to a variant recorded inside `source`.
//
// ⚠️ NINE CANDIDATES ARE DELIBERATELY ABSENT, AND THEIR ABSENCE IS THE POINT. Each shares a stem
// or a menu with a live entry and is DRAFTED as its own entry, with the pairing recorded in its
// explanation. Do not "tidy" any of them into EXACT or NEAR later.
//   n4  vs pedep-nut-73  -- same question, and the live menu offers three benefits as distractors
//                           where the exam offers four drawbacks. Different menus, different items.
//   n7  vs pedep-mf1-19  -- same question, two of four distractors replaced.
//   n12 vs pedep-alg-9   -- same vignette at a DIFFERENT AGE (5 years here, 7 there) and on a
//                           different menu. Different numbers mean a different question.
//   n19's second hit, pedep-gp-41 -- the same four-option growth-phase menu asking which phase is
//                           FASTEST here and where faltering is most COMMONLY SEEN there. A shared
//                           menu pairs questions; it never folds them.
//   n25's second hit, pedep-gi-3 -- same vignette, two distractors replaced. Replacement is not
//                           the dropped-filler shape. (n25 IS a reprint, of pedep-mf1-49 below.)
//   n53 vs pedep-mf3-28 / pedep-neo-12 / pedep-neo-13 -- one elective-caesarean respiratory
//                           distress stem printed against a fourth different option menu. Section
//                           12 already kept this stem separate for exactly this reason.
//   n58 vs pedep-mf3-40  -- same slapped-cheek vignette, two distractors replaced.
//   n61 vs pedep-alg-1   -- same anaphylaxis vignette asking for the MANAGEMENT here and the
//                           DIAGNOSIS there. The keys are not the same kind of thing.
//   n62 vs pedep-emg-24  -- same peanut-anaphylaxis vignette; the live menu prints doses and
//                           routes, the exam menu prints bare drug names.
//   n64 vs pedep-mf3-77  -- congenital diaphragmatic hernia asked NOT-true here and TRUE there, on
//                           menus with no option in common.
//
// ⚠️ A LIVE-FILE DEBT SURFACED AS A BY-PRODUCT, AND THIS PASS DOES NOT REPAIR IT. Four live
// entries matched a staged row on options and key while carrying a stem far shorter than the one
// the exam prints -- pedep-inf-8, pedep-inf-56, pedep-inf-69 and pedep-inf-75, all in pp.981-1115.
// Their stems read as summaries rather than transcriptions ("A 6-month-old develops a blanching
// rash after fever resolves. Cultures are negative."). Repairing them means re-reading pp.981-1115,
// which is not this section's work, and writing the exam's fuller text under the body bank's
// citation would be worse than leaving it. The source clause names the fuller printing; the debt
// is recorded in the journal.
//
// Cross-bank hits are NOT here either. The OCR probe also matched pp.1694, 1702, 1714, 1718, 1752,
// 1754, 1758, 1760, 1766 and 1768 against Chat B's House file. Neither chat folds into the other's
// file while both are writing; those ten are recorded in the journal and settled by the
// end-of-stream sweep.
//
// Written with the Write tool, not a heredoc: the heredoc collapses \\ to \ and would eat the
// regexes below.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';
const LIVE = R + 'app/data/questions.peds.ep.js';
const EXAM = 'Model Final Exam 4';

// ---- the map, one line per reprint: staged n -> live id, and what the exam printing did ----
//
// EXACT: stem, options and printed key all identical once the apostrophe glyph, letter case and
// spacing are ignored. When one fails the strict check below it is MOVED to NEAR with a clause
// naming what moved, never relaxed in place.
const EXACT = { 1: 'nut-57', 33: 'mf1-10', 46: 'gp-88', 60: 'gi-65' };

// NEAR: each clause names, in its own words, what moved. Written from the two printings put side
// by side on disk, and phrased from the LIVE entry's side, because that is the side a reader meets
// the sentence on.
const NEAR = {
  16: ['gp-85', 'reprinted in ' + EXAM + ', p.PAGE, asking for the "latest" sign rather than the ' +
       '"last" one and swapping the second and fourth options, which leaves the key where it is; ' +
       'the key text is unchanged'],
  19: ['gp-15', 'and again in ' + EXAM + ', p.PAGE, phrased "Which of the following phases of ' +
       'growth is the most rapid one (fastest one)?" and printing only four options -- ' +
       '"Prepubertal" is dropped -- which leaves the key first; the key text is unchanged'],
  // ⚠️ THE KEY OPTION IS REWORDED HERE, and the pass is told about it explicitly below rather than
  // being allowed to slide past a check. Both printings key the same proposition about vitamin C.
  22: ['nut-70', 'reprinted in ' + EXAM + ', p.PAGE, with the five options in a third order, which ' +
       'moves the key from last to second, and the key option printed "Vitamin C deficiency can ' +
       'cause mucosal bleeding and petechiae"; the answer is unchanged'],
  // ⚠️ A NUMBER DIFFERS BETWEEN THE TWO PRINTINGS and it is recorded, not reconciled. Both were
  // read off the rendered page, and the p.418 printing of this same vignette (live pedep-gi-3)
  // agrees with the exam at two weeks.
  25: ['mf1-49', 'reprinted in ' + EXAM + ', p.PAGE, naming the girl Ellie and printing the ' +
       'loose-stool history as TWO WEEKS where the printing above prints two days; the five ' +
       'options and the key are unchanged, the fifth option spelled "Wilms tumour"'],
  29: ['gi-2', 'reprinted in ' + EXAM + ', p.PAGE, in British spelling ' +
       '("diarrhoea", "colour")'],
  31: ['mf3-27', 'reprinted in ' + EXAM + ', p.PAGE, with two options abbreviated -- "Hemophilus ' +
       'influenzae Vaccine" as "H. Influenza vaccine" and "Diphtheria, Pertussis, Tetanus (DPT) ' +
       'Vaccine" as "DPT vaccine"; the order and the key are unchanged'],
  // ⚠️ NOT A COSMETIC DEFECT. The exam prints two identical options, so its ladder offers four
  // distinct answers where the printing above offers five. Staged exactly as printed.
  32: ['mf3-32', 'reprinted in ' + EXAM + ', p.PAGE, abbreviating the two polio options to IPV and ' +
       'OPV and printing the fifth option as "Hepatitis A vaccine", identical to the fourth, where ' +
       'the printing above prints "Hepatitis B vaccine"; the key is unchanged'],
  35: ['inf-69', 'reprinted in ' + EXAM + ', p.PAGE, on a fuller vignette -- a 6-month-old girl ' +
       'with four days of fever without focus, a negative septic screen and normal inflammatory ' +
       'markers, the blanching morbilliform rash appearing on day 7 as the fever subsides; the ' +
       'five options and the key are unchanged'],
  37: ['inf-56', 'reprinted in ' + EXAM + ', p.PAGE, on a fuller vignette naming the boy Graham ' +
       'and setting the lumbar puncture result out line by line; the five options and the key are ' +
       'unchanged'],
  38: ['mf3-9', 'reprinted in ' + EXAM + ', p.PAGE, with the stem phrased "Which of ' +
       'the following is a characteristic of lactose intolerance in children?" and the second ' +
       'option "It always presents with nausea and vomiting"; the order and the key are unchanged'],
  // ⚠️ THE EXAM PRINTING TRUNCATES THE KEY OPTION mid-phrase, ending at "compensated" with no
  // noun. That is what the sheet prints and it is staged as printed; the printing above is the
  // whole sentence.
  44: ['emg-61', 'reprinted in ' + EXAM + ', p.PAGE, with the five options reworded and the ' +
       'anaphylaxis and gastroenteritis statements exchanged, and with the key option broken off ' +
       'before its noun as "Mottled, pale and cold skin is found in compensated"; the key is the ' +
       'same statement and stands in the same position'],
  52: ['mf1-43', 'and again in ' + EXAM + ', p.PAGE, with "Parvo B19 virus" printed "Parvovirus ' +
       'B19" and the closing question asking for the causative organism rather than the ' +
       'microorganism; the key is unchanged'],
  54: ['nut-60', 'reprinted in ' + EXAM + ', p.PAGE, with the tooth-eruption clause written as a ' +
       'sentence of its own; the five options and the key are unchanged'],
  55: ['inf-75', 'reprinted in ' + EXAM + ', p.PAGE, on a fuller vignette -- chest pain on ' +
       'exertion, the prolonged febrile illness at 3 years observed and discharged without ' +
       'diagnosis, an abnormal ECG and diffuse dilatation of the left coronary artery on ' +
       'echocardiography; the five options and the key are unchanged'],
  57: ['nut-11', 'reprinted in ' + EXAM + ', p.PAGE, asking for the most likely ' +
       'diagnosis "of that patient"'],
  // The fourth appearance of this one. Its source already documents the p.387 wording and the two
  // model exams that reprint it; this exam reprints that same wording again.
  59: ['nut-59', 'and again in ' + EXAM + ', p.PAGE, in the p.387 wording as Model Final Exam 3 ' +
       'has it -- the same five options in the same order, the key in the same position, and ' +
       '"Function as prebiotics" for "Work as prebiotics"'],
  68: ['mf3-63', 'reprinted in ' + EXAM + ', p.PAGE, spelling the third option "Hirschsprung\x27s disease" in full'],
};

// ⚠️ THE TWO ROWS WHOSE KEY TEXT DOES NOT MATCH, NAMED HERE RATHER THAN HIDDEN BY A LOOSER
// COMPARATOR. The key-text check below is what separates a reprint from a question that merely
// shares a vignette, so it is not relaxed for everyone to let two rows through. Each row here says
// why the two printings key the same answer, and the tool prints the sentence when it uses it.
const KEY_REWORDED = {
  22: 'both printings key the vitamin C statement; the exam prints "can cause mucosal bleeding and ' +
      'petechiae" for "can lead to petechiae and mucosal bleeding" -- the same two signs, ' +
      'coordinated the other way round',
  44: 'both printings key the mottled, pale and cold skin of compensated shock; the exam sheet ' +
      'breaks the option off before its noun, which is a defect in the printing and not a ' +
      'different answer',
};

// ---- load ----
vm.runInThisContext(fs.readFileSync(R + 'content/peds/qb-pages/endpoint-s13-mfe4.array.js', 'utf8'));
const S = globalThis.PEDEP_S13_STAGED;
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
// failure. The count gate below still demands the full 21, so a silently skipped row cannot pass
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
  // is the distinction a similarity score cannot make, and the one that separates every entry in
  // this file from the nine paired rows named at the top. Punctuation- and case-blind, whitespace
  // removed rather than collapsed, and -ae-/-oe-blind on top for the British and American
  // spellings the two printings mix, applied AFTER the spaces come out. Every transform is applied
  // to BOTH sides, so none can manufacture a match, and none touches a digit, a unit or a dose.
  const flat = t => ap(t).toLowerCase().replace(/[.,;:()-]/g, ' ')
                         .replace(/\s+/g, '')
                         .replace(/ae/g, 'e').replace(/oe/g, 'e');
  const liveKey = flat(q.options[q.answer]), examKey = flat(s.opts[s.key]);
  // Two narrow ways past the key-text check, and neither is a bare exception list.
  // (1) The entry's own record: if the live `source` already quotes the exam's key text, the entry
  //     has documented that printing itself and this pass is naming a later appearance of a
  //     variant it already knows about. n59 is the case.
  // (2) A sentence in KEY_REWORDED saying why the two texts are the same answer. It is printed
  //     when used, so it lands in the run log and in the journal rather than staying silent.
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
if (plan.length + done.length !== 21) { console.log('expected 21 reprints, planned ' + plan.length + ' and found ' + done.length + ' already written'); process.exit(1); }
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
if (after.srcs !== 21) { console.error('expected 21 sources naming ' + EXAM + ', got ' + after.srcs); process.exit(1); }

console.log('edited ' + edited + ' sources | entries ' + before.n + ' -> ' + after.n + ' (unchanged, as intended) | holes ' + after.holes);
if (!process.argv.includes('--write')) { console.log('DRY RUN. Re-run with --write.'); process.exit(0); }
fs.writeFileSync(LIVE, out, 'utf8');
const chk = count(fs.readFileSync(LIVE, 'utf8'));
console.log('written. entries ' + chk.n + ' | holes ' + chk.holes + ' | sources naming ' + EXAM + ': ' + chk.srcs);
