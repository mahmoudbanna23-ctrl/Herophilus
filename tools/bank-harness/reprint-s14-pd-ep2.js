// reprint-s14-pd-ep2.js — write section 14's reprint citations onto the entries that already carry
// the questions.  Section 14 is Model Final Exam 3, pp.1595-1756 of Pediatrics endpoint part2.pdf,
// and 48 of its 80 questions are reprints; those 48 are never drafted as entries, they are cited
// onto the entry that already holds the question.
//
// NOT the same tool as reprint-s14-pd-ep.js, which is part 1's and must not be reused or overwritten.
//
// ⚠️ Part 1 and part 2 are one bank.  Both files carry bank:'endpoint', so a part-1 match is a
// within-bank duplicate exactly like a part-2 one.  Two of the 48 targets live in
// questions.peds.ep.js and they are the only two rows allowed to touch that file.  Nothing here
// adds alsoIn: that is only ever for a House match, and no House match folds.
//
// ⚠️ The page numbers collide across the two files.  Part 1 has a Model Final Exam 3 of its own
// whose pages overlap part 2's section 14 exactly -- questions.peds.ep.js already contains the
// string "reprinted in Model Final Exam 3, p.1" nineteen times, none of them from this pass.  The
// census below therefore uses a different mark per file, each chosen to measure 0 in the file it is
// counted in before the pass runs, and each file is scanned only for its own rows.
//
// PLAN's tails were lifted from the three section-14 adjudication files, not retyped, then:
//   - the five House cross-bank sentences were cut (they belong to the map, not to a citation;
//     nothing folds across banks and the closing sweep has not run);
//   - the markdown backticks around ids were stripped (0 live source strings contain one);
//   - n76's trailing Model Final Exam 2 sentence was cut, because the 2026-09-06 fold now writes
//     that printing into pedep2-car-43's own source and it would otherwise be cited twice;
//   - straight quotes were curled to match the quoting already used in these source strings, which
//     also keeps a clause from breaking the single-quoted string it is spliced into;
//   - and three tails were corrected against the two printings before any of that:
//       n8  said the labs were unchanged.  The exam prints the white cell count and the platelets
//           per millilitre against this entry's per-litre values -- a unit, not a typo.
//       n9  said the four options were unchanged.  The exam prints a fifth.
//       n39 said the options were unchanged.  The exam prints a fifth.
//
// Dry run by default; --write to apply.
const fs = require('fs'), vm = require('vm'), cp = require('child_process');
const R = 'D:/claude os/Medical school/Herophilus/';
const D = R + 'app/data/';
const WRITE = process.argv.includes('--write');
const EP2 = 'questions.peds.ep2.js', EP1 = 'questions.peds.ep.js';
const EXAM = 'Model Final Exam 3';
const PAGE_LO = 1597, PAGE_HI = 1755;   // n1 is p.1597; the banner page 1595 stages nothing
const EXPECTED = 49;
const STAGING = R + 'content/peds/qb-pages/endpoint-p2-s14-mfe3.array.js';
const SVAR = 'PEDEP2_S14_STAGED';

// Every key the exam prints in different words from the live entry.  Measured, then read against
// both printings one row at a time; an unlisted key-text move stops the pass, because a key that
// moved for a real reason is a different question and not a reprint.
const KEYTEXT_OK = {
  22: ['Thalassaemia major', 'Thalassemia major', 'the same key respelled American, p.1639'],
  38: ['Occur between the ages of 6 months and 5 years', 'Occur between ages of 6 months and 5 years', 'the article dropped, p.1671'],
  40: ['Hb concentration falls after birth until around 7 weeks', 'Hemoglobin concentration falls after birth until around 7 weeks', 'Hb spelled out, p.1675'],
  56: ['Repeated infections', 'Susceptibility to infections', 'the same rewording this entry already records for the Model Final Exam 1 printing, p.1707'],
  65: ['Prenatal cause', 'Prenatal', 'the option shortened, p.1725'],
  69: ['Observation and follow up', 'Observation and follow-up', 'hyphenated, p.1733'],
  70: ['Basal-bolus regimen', 'Basal-bolus', 'the word regimen dropped, p.1735'],
  77: ['Insertion of ventriculoperitoneal shunt', 'Ventriculo-peritoneal shunt', 'the procedure named rather than the act, p.1749'],
};

// Every key the exam prints in a different position.  Each one is accounted for by an option the
// exam adds, drops or reorders, and in all eight the key TEXT still names the same answer.
const KEYINDEX_OK = {
  5:  [0, 3, 'the whole option menu is the neuromuscular-level menu, p.1605'],
  11: [4, 3, 'Spastic diplegia dropped, p.1617'],
  16: [1, 3, 'the options reordered, p.1627'],
  42: [2, 4, 'the five options reordered, p.1679'],
  58: [2, 4, 'the five options reordered, p.1711'],
  70: [1, 2, 'the Model Final Exam 2 option order, p.1735'],
  77: [2, 3, 'a third option inserted, p.1749'],
  80: [2, 4, 'the last three options reordered, p.1755'],
};

// Every row where the two printings carry a different NUMBER of options.  This is the difference
// that hides a fold, so it is declared rather than tolerated.
const OPTCOUNT_OK = {
  9:  [4, 5, 'Change the present antibiotic regimen added, p.1613'],
  11: [5, 4, 'Spastic diplegia dropped, p.1617'],
  14: [5, 4, 'Y-linked dropped, p.1623'],
  20: [5, 4, 'Tet spells dropped, p.1635'],
  39: [4, 5, 'Robertsonian translocation added, p.1673'],
  49: [4, 5, 'High indirect bilirubin added, p.1693'],
  57: [4, 5, 'Heart failure added, p.1709'],
  70: [4, 5, 'Once daily long-acting insulin added, p.1735'],
  77: [4, 5, 'Skull bone reconstructive surgery added, p.1749'],
};

// The proof-of-run marks.  Each measures 0 in its own file before the pass; see the header.
const MARKS = [
  { file: EP2, mark: 'reprinted in ' + EXAM + ', p.1', expect: 47 },
  { file: EP1, mark: 'reprinted in Pediatrics endpoint part2.pdf, ' + EXAM + ', p.1', expect: 2 },
];

const PLAN = [
  { n: 4, p: 1603, id: 'pedep2-mf1-12', file: EP2, sep: ',',
    tail: "giving the baby’s age as 7 days rather than 2 and reordering to “E. coli positive blood cultures”; the options and the key are unchanged" },
  { n: 5, p: 1605, id: 'pedep2-neu-26', file: EP2, sep: ',',
    tail: "again giving the girl her age, twelve, softening “diarrhea” to “signs”, and pairing the stem with the “level of the neuromuscular lesion” menu that belongs to pedep2-neu-51 (Disorder of neuromuscular transmission / Muscle disorder / Poliomyelitis / Guillain-Barré syndrome / Disorder of anterior horn cell) instead of this entry’s own named-disease menu; Guillain-Barré syndrome is still keyed, now as option D" },
  { n: 6, p: 1607, id: 'pedep2-mf1-54', file: EP2, sep: ',',
    tail: "with the same five options and the same key" },
  { n: 7, p: 1609, id: 'pedep2-ren-5', file: EP2, sep: ',',
    tail: "again wording the history and the urine findings differently and dropping the name “Eesa” and the Pakistani ethnicity; the options and the key are unchanged" },
  { n: 8, p: 1611, id: 'pedep2-hem-39', file: EP2, sep: ',',
    tail: "giving the girl’s age as 8 rather than 3, dropping the Afro-Caribbean ethnicity, annotating the MCV as normal, spelling “G6PD deficiency” out as “Glucose-6-phosphate dehydrogenase deficiency”, and printing the white cell count as “6,000/ml” and the platelets as “300,000/ml” against this entry’s 6.0 x 10^9/L and 300 x 10^9/L — the same values read per microlitre, printed here per millilitre; the options and the key are unchanged" },
  { n: 9, p: 1613, id: 'pedep2-car-19', file: EP2, sep: ',',
    tail: "wording the diagnosis “a lower respiratory chest infection” rather than “a lower respiratory tract infection” and adding a fifth option, “Change the present antibiotic regimen”; the key, the innocent-murmur option, is unchanged in text and stays fourth" },
  { n: 11, p: 1617, id: 'pedep2-dp-12', file: EP2, sep: ',',
    tail: "without the “Spastic diplegia” option; the key, Spastic quadriplegia, is unchanged in text and moves from index 4 to index 3 as a result" },
  { n: 12, p: 1619, id: 'pedep2-ren-21', file: EP2, sep: ',',
    tail: "giving the child as a boy rather than a girl and adding “There is no hypertension”; the options and the key are unchanged" },
  { n: 13, p: 1621, id: 'pedep2-car-18', file: EP2, sep: ',',
    tail: "dropping the baby’s age (“3-day-old”) and shortening “a single loud second heart sound” to “a single heart sound”; the options and the key are unchanged" },
  { n: 14, p: 1623, id: 'pedep2-mf1-47', file: EP2, sep: ',',
    tail: "without the “Y-linked” option; the key, Autosomal dominant, is unchanged in text and position" },
  { n: 15, p: 1625, id: 'pedep2-hem-58', file: EP2, sep: ',',
    tail: "again spelling the fourth option “Miliary tuberculosis” and rewording the stem lightly; the options and the key are unchanged" },
  { n: 16, p: 1627, id: 'pedep2-liv-9', file: EP2, sep: ',',
    tail: "dropping the name “Lee,” the Chinese ethnicity and the 2-years-in-the-UK detail, reordering the options, and substituting “Bacterial infection” for “Primary sclerosing cholangitis” as the unkeyed filler option; Hepatitis B is still keyed, now as option D" },
  { n: 18, p: 1631, id: 'pedep2-mf1-7', file: EP2, sep: ',',
    tail: "giving the murmur as grade V/VI rather than grade I/VI — a discrepancy recorded here, not reconciled; the options and the key are unchanged" },
  { n: 20, p: 1635, id: 'pedep2-neu-21', file: EP2, sep: ',',
    tail: "again without the “Tet spells” option; the key text is unchanged" },
  { n: 21, p: 1637, id: 'pedep2-mf1-71', file: EP2, sep: ',',
    tail: "with the stem condensed into shorter sentences; the values, the options and the key are unchanged" },
  { n: 22, p: 1639, id: 'pedep2-hem-41', file: EP2, sep: ',',
    tail: "giving the girl’s age as 11 months rather than 8, dropping the Greek-Cypriot ethnicity and the 25th-centile birth detail, and rewording “fallen” as “dropped”; the labs, options and key are unchanged" },
  { n: 24, p: 1643, id: 'pedep2-end-13', file: EP2, sep: ',',
    tail: "giving the child’s age as 2 months rather than describing him only as a newborn; the options and the key are unchanged" },
  { n: 28, p: 1651, id: 'pedep2-mf1-49', file: EP2, sep: ',',
    tail: "with the stem reworded and condensed — the diagnosis confirmation and the parents’ concern are dropped in favour of a direct two-sentence case plus question; the options and the key are unchanged" },
  { n: 30, p: 1655, id: 'pedep-neo-20', file: EP1, sep: ',',
    tail: "with the specific bilirubin values and the blood-count sentence condensed to “Labs show elevated conjugated bilirubin”; the options and the key are unchanged" },
  { n: 31, p: 1657, id: 'pedep2-mf2-43', file: EP2, sep: ';',
    tail: "the options and the key are unchanged" },
  { n: 32, p: 1659, id: 'pedep2-mf2-44', file: EP2, sep: ';',
    tail: "the options and the key are unchanged" },
  // Added after the first run of this pass, and after fold-gen24-pd-ep2.js.  The adjudication
  // rejected n33 on the ground that its age change (2 days to 3 months) plus a dropped maternal age
  // is too large to be cosmetic -- but n8, n13 and n22 are accepted rows of exactly that shape, and
  // n42 is accepted with the whole vignette stripped out.  The rejection also leaned on
  // pedep2-gen-24 and pedep2-car-25 being deliberate never-folded siblings; they were never
  // compared, and folding them is what surfaced this row.  The target below is the survivor.
  { n: 33, p: 1661, id: 'pedep2-gen-24', file: EP2, sep: ',',
    tail: "giving the baby’s age as 3 months rather than 2 days, describing the birth as following “an uneventful perinatal period” rather than “an uneventful pregnancy”, and dropping the mother’s age; the options and the key are unchanged, and the box is shortened to “The baby shows features of Down syndrome (hypotonia, single palmar crease, epicanthic folds). AV septal defect is the most common heart lesion in Down syndrome.”" },
  { n: 36, p: 1667, id: 'pedep2-dp-19', file: EP2, sep: ',',
    tail: "with the child’s age printed as 15 months rather than 18 months; the options and the key are unchanged" },
  { n: 37, p: 1669, id: 'pedep2-car-21', file: EP2, sep: ',',
    tail: "as a bare question with the clinical vignette stripped out entirely — “What is the most likely causative pathogen in infective endocarditis?” — the five options, their order, and the key, Streptococcus viridans, are all unchanged" },
  { n: 38, p: 1671, id: 'pedep2-neu-1', file: EP2, sep: ',',
    tail: "with the opening sentence that establishes the patient dropped, leaving the stem open on the dangling reference “her parents” with no antecedent on the page — a printed defect, carried across as printed; the options and the key are unchanged" },
  { n: 39, p: 1673, id: 'pedep2-mf1-69', file: EP2, sep: ';',
    tail: "with a fifth option, “Robertsonian translocation”, printed after “Mosaicism”; the four options this entry carries, their order, and the key, Meiotic nondisjunction, are unchanged" },
  { n: 40, p: 1675, id: 'pedep2-hem-37', file: EP2, sep: ',',
    tail: "with the stem’s “extrauterine” printed as “extra-uterine” and option B’s “Hb” spelled out as “Hemoglobin”; the key is unchanged" },
  { n: 41, p: 1677, id: 'pedep2-mf2-20', file: EP2, sep: ';',
    tail: "the options and the key are unchanged" },
  { n: 42, p: 1679, id: 'pedep-emg-28', file: EP1, sep: ',',
    tail: "as a bare question with the vignette stripped out — “What would be the initial step in the management of diabetic ketoacidosis (DKA)?” — with the same five options reordered, moving the key, an IV bolus of normal saline, from third position to fifth, and “NaHCO3” printed as “IV NaHCO3”; the answer is unchanged" },
  { n: 43, p: 1681, id: 'pedep2-mf2-9', file: EP2, sep: ';',
    tail: "the options and the key are unchanged" },
  { n: 45, p: 1685, id: 'pedep2-mf2-1', file: EP2, sep: ';',
    tail: "the options and the key are unchanged" },
  { n: 46, p: 1687, id: 'pedep2-mf1-39', file: EP2, sep: ',',
    tail: "with option A printed as “Enzyme deficiency GPO” rather than “Enzyme deficiency”; the key, Amino acid replacement, is unchanged" },
  { n: 49, p: 1693, id: 'pedep2-mf1-65', file: EP2, sep: ',',
    tail: "with an additional option, “High indirect bilirubin,” printed between the key and “Positive Coombs test” — a five-option printing where this printing carries only four; the key, “Low reticulocyte count,” is unchanged and unmoved" },
  { n: 52, p: 1699, id: 'pedep2-mf2-69', file: EP2, sep: ',',
    tail: "with option E printed as “Bone marrow radiation relapse” rather than “Bone marrow radiation”; the key, Intrathecal chemotherapy, is unchanged" },
  { n: 54, p: 1703, id: 'pedep2-mf1-70', file: EP2, sep: ';',
    tail: "the options and the key are unchanged" },
  { n: 56, p: 1707, id: 'pedep2-ren-41', file: EP2, sep: ',',
    tail: "with the same “Electrolyte disturbances” and “Susceptibility to infections” wording as the Model Final Exam 1 printing, and with “Acute renal failure” additionally reworded to “Acute kidney injury”; the answer and its first position are unchanged" },
  { n: 57, p: 1709, id: 'pedep2-car-28', file: EP2, sep: ',',
    tail: "as a question, “Which clinical problem is a serious complication of Fallot tetralogy?”, with a fifth option, “Heart failure”, added at the end; the key, Cerebrovascular accidents, keeps its third position" },
  { n: 58, p: 1711, id: 'pedep2-ren-1', file: EP2, sep: ',',
    tail: "with the vignette stripped out and the stem generalised to “the preferred method to collect a urine sample for culture in female infants,” and the five options reordered (Bag sample, Catheter sample, Pad/cotton wool balls in nappy, Suprapubic aspirate, Clean catch); the key, Clean catch, is unchanged and now sits fifth" },
  { n: 59, p: 1713, id: 'pedep2-hem-68', file: EP2, sep: '',
    tail: '' },
  { n: 61, p: 1717, id: 'pedep2-mf2-58', file: EP2, sep: ',',
    tail: "with “HSP” expanded to “Henoch-Schönlein Purpura (HSP)” in the stem; the options, their order, and the key are unchanged" },
  { n: 62, p: 1719, id: 'pedep2-mf2-6', file: EP2, sep: ',',
    tail: "with “Brainstem” printed as two words, “Brain stem”; otherwise word for word, same key" },
  { n: 65, p: 1725, id: 'pedep2-mf1-79', file: EP2, sep: ',',
    tail: "with the first option shortened from “Prenatal cause” to “Prenatal”; otherwise unchanged, same key" },
  { n: 69, p: 1733, id: 'pedep2-hem-84', file: EP2, sep: ',',
    tail: "restoring the “or mucous membrane purpura” clause and the 30,000/dL unit from this printing while keeping the Model Final Exam 2 wording of the options; the key and its fourth position are unchanged in both" },
  { n: 70, p: 1735, id: 'pedep2-end-24', file: EP2, sep: ',',
    tail: "with the same five-option order as the Model Final Exam 2 printing (Once daily long-acting insulin first, key third), the stem reworded “Which of the following is the most ideal insulin regimen for an 8-year-old child recently diagnosed with type 1 diabetes mellitus, who has regular meals a day?” (dropping the “3” before “regular meals”), and the key printed as “Basal-bolus” (hyphenated, without “regimen”)" },
  { n: 71, p: 1737, id: 'pedep2-gen-27', file: EP2, sep: ',',
    tail: "with the introductory sentence about trisomy 21 and chromosome 21 folded into the question stem, “Which of the following statements is true about Down syndrome?”; the options, their order and the key are unchanged" },
  { n: 72, p: 1739, id: 'pedep2-mf2-59', file: EP2, sep: '',
    tail: '' },
  { n: 76, p: 1747, id: 'pedep2-car-43', file: EP2, sep: ',',
    tail: "with the stem reworded “Which clinical finding should not be associated with rheumatic fever?” and “migratory arthritis” spelled out as “migratory polyarthritis”; the option order and the key, Maculopapular rash at fourth position, are unchanged" },
  { n: 77, p: 1749, id: 'pedep2-mf2-12', file: EP2, sep: ',',
    tail: "with “Skull bone reconstructive surgery” inserted as a third option, moving the key, reworded from “Insertion of ventriculoperitoneal shunt” to “Ventriculo-peritoneal shunt”, from third position to fourth" },
  { n: 80, p: 1755, id: 'pedep2-mf1-38', file: EP2, sep: ',',
    tail: "with the third, fourth and fifth options reordered: this printing puts “High retic count and marked red cell hypochromia” third, “Marked red cell hypochromia and microcytosis” fourth, and the key, “High retic count and normal bilirubin,” fifth, against this entry’s own third-position key; the first two options and the key’s text are unchanged" },
];

const ap   = s => String(s).replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
const flat = t => ap(t).toLowerCase().replace(/[.,;:]/g, '').replace(/\s+/g, ' ').trim();

function clauseFor(F) {
  // A part-2 target does not name the file: its source already opens with it.  A part-1 target must,
  // because its source opens with part1.pdf and the two books both have a Model Final Exam 3.
  const where = F.file === EP1
    ? 'reprinted in Pediatrics endpoint part2.pdf, ' + EXAM + ', p.' + F.p
    : 'reprinted in ' + EXAM + ', p.' + F.p;
  if (!F.tail) return where;
  return where + (F.sep === ';' ? '; ' : ', ') + F.tail;
}

// Find one entry's block by scanning structurally.  Three entry shapes are live in these files --
// multi-line with single-quoted source, multi-line with double-quoted source, and a one-line-ish
// form ending `source:'...' },` -- so nothing here anchors on a fixed layout.
function entryBlock(lines, id) {
  const pats = ["id:'" + id + "'", 'id:"' + id + '"', "id: '" + id + "'", 'id: "' + id + '"'];
  let open = -1, found = null;
  for (let i = 0; i < lines.length; i++) {
    const L = lines[i];
    if (/^\{/.test(L.trim()) || /^\s*\{\s*id[:\s]/.test(L)) open = i;
    if (pats.some(p => L.indexOf(p) !== -1)) {
      if (found) throw new Error('id appears in two entries: ' + id);
      if (open === -1) throw new Error('id line found with no open brace above it: ' + id);
      let close = -1;
      for (let j = open; j < lines.length; j++) {
        if (/\},\s*$/.test(lines[j]) || /^\},?\s*$/.test(lines[j].trim())) { close = j; break; }
      }
      if (close === -1) throw new Error('no closing "}," found for ' + id);
      if (close < i) throw new Error('block for ' + id + ' closed before its id line');
      found = { from: open, to: close };
    }
  }
  if (!found) throw new Error('entry not found: ' + id);
  return found;
}

function mergeCitation(line, clause) {
  const m = line.match(/^(\s*source:\s*)(['"])([\s\S]*?)\2(\s*(?:\})?\s*,?\s*)$/);
  if (!m) throw new Error('unrecognised source line: ' + line);
  const head = m[1], q = m[2], inner = m[3], punct = m[4];
  if (clause.indexOf(q) !== -1) throw new Error('the clause contains the quote character that closes this string: ' + clause);
  // Where the citation already ends in a parenthetical the clause joins it with '; ' rather than
  // opening a second one beside it.
  const neu = /\)$/.test(inner) ? inner.slice(0, -1) + '; ' + clause + ')' : inner + ' (' + clause + ')';
  return head + q + neu + q + punct;
}

function loadLive(f, v) {
  vm.runInThisContext(fs.readFileSync(D + f, 'utf8'), { filename: f });
  const a = globalThis[v] || [], out = [];
  let holes = 0;
  for (let i = 0; i < a.length; i++) { if (i in a) out.push(a[i]); else holes++; }
  return { n: out.length, holes: holes, all: out };
}

let bad = 0;
const fail = m => { console.log('  FAIL  ' + m); bad++; };

if (PLAN.length !== EXPECTED) fail('PLAN holds ' + PLAN.length + ' rows, expected ' + EXPECTED);

const seenN = new Set(), seenId = new Set();
for (const F of PLAN) {
  if (seenN.has(F.n)) fail('question n' + F.n + ' is planned twice');
  if (seenId.has(F.id)) fail('target ' + F.id + ' is named by two questions');
  seenN.add(F.n); seenId.add(F.id);
}

vm.runInThisContext(fs.readFileSync(STAGING, 'utf8'), { filename: STAGING });
const STAGED = (globalThis[SVAR] || []).filter(Boolean);
if (STAGED.length !== 80) throw new Error('staging holds ' + STAGED.length + ' entries, expected 80');
const byN = new Map(STAGED.map(s => [s.n, s]));

const live = {};
live[EP2] = loadLive(EP2, 'Q_PEDS_EP2');
live[EP1] = loadLive(EP1, 'Q_PEDS_EP');
for (const f of [EP2, EP1]) if (live[f].holes) fail(f + ' has ' + live[f].holes + ' sparse holes');
const byId = new Map();
for (const f of [EP2, EP1]) for (const q of live[f].all) byId.set(q.id, { f: f, q: q });

for (const F of PLAN) {
  const tag = 'n' + F.n + ' (p.' + F.p + ' -> ' + F.id + ')';
  const s = byN.get(F.n);
  if (!s) { fail(tag + ': no staged question with that n'); continue; }
  if (s.p !== F.p) fail(tag + ': staging puts n' + F.n + ' on p.' + s.p);
  if (s.p < PAGE_LO || s.p > PAGE_HI) fail(tag + ': p.' + s.p + ' is outside ' + PAGE_LO + '-' + PAGE_HI);

  const L = byId.get(F.id);
  if (!L) { fail(tag + ': target does not exist in either file'); continue; }
  if (L.f !== F.file) { fail(tag + ': target lives in ' + L.f + ', PLAN says ' + F.file); continue; }

  const liveKey = L.q.options[L.q.answer], examKey = s.opts[s.key];
  if (flat(liveKey) !== flat(examKey)) {
    const ok = KEYTEXT_OK[F.n];
    if (!ok) fail(tag + ': key text differs and is not declared -- live "' + liveKey + '" vs exam "' + examKey + '"');
    else if (flat(ok[0]) !== flat(liveKey) || flat(ok[1]) !== flat(examKey))
      fail(tag + ': declared key text does not match what is on disk -- live "' + liveKey + '" vs exam "' + examKey + '"');
  }
  if (L.q.answer !== s.key) {
    const ok = KEYINDEX_OK[F.n];
    if (!ok) fail(tag + ': key index differs and is not declared -- live ' + L.q.answer + ' vs exam ' + s.key);
    else if (ok[0] !== L.q.answer || ok[1] !== s.key)
      fail(tag + ': declared key index does not match disk -- live ' + L.q.answer + ' vs exam ' + s.key);
  }
  if (L.q.options.length !== s.opts.length) {
    const ok = OPTCOUNT_OK[F.n];
    if (!ok) fail(tag + ': option counts differ and it is not declared -- live ' + L.q.options.length + ' vs exam ' + s.opts.length);
    else if (ok[0] !== L.q.options.length || ok[1] !== s.opts.length)
      fail(tag + ': declared option counts do not match disk -- live ' + L.q.options.length + ' vs exam ' + s.opts.length);
  }
}

// Idempotency is keyed on the exact clause, never on the bare exam name: part 1's own reprints
// already name Model Final Exam 3, and section 14's own targets may name Model Final Exam 1 or 2.
const todo = [];
for (const F of PLAN) {
  const L = byId.get(F.id);
  if (!L) continue;
  const clause = clauseFor(F);
  if (String(L.q.source).indexOf(clause) !== -1) console.log('  already cited, skipping: n' + F.n + ' ' + F.id);
  else todo.push({ F: F, clause: clause });
}

console.log('');
console.log('PLAN ' + PLAN.length + ' rows -- ' + PLAN.filter(F => F.file === EP2).length + ' in ' + EP2 +
            ', ' + PLAN.filter(F => F.file === EP1).length + ' in ' + EP1);
console.log('to write: ' + todo.length + ' (whether each merges or opens a parenthetical is counted at write time)');
if (bad) { console.log(''); console.log(bad + ' PROBLEM(S). Nothing written.'); process.exit(1); }

// Before-state of both marks, measured rather than assumed.
for (const M of MARKS) {
  const src = fs.readFileSync(D + M.file, 'utf8');
  const before = src.split(M.mark).length - 1;
  console.log('  before: "' + M.mark + '" appears ' + before + ' time(s) in ' + M.file);
}

if (!WRITE) {
  console.log('');
  for (const t of todo.slice(0, 3)) console.log('  sample n' + t.F.n + ': ' + t.clause);
  console.log('');
  console.log('DRY RUN. Nothing written. Re-run with --write.');
  process.exit(0);
}

const files = {};
for (const f of [EP2, EP1]) files[f] = fs.readFileSync(D + f, 'utf8').split('\n');
let merged = 0, opened = 0;
for (const t of todo) {
  const lines = files[t.F.file];
  const blk = entryBlock(lines, t.F.id);
  let si = -1;
  for (let i = blk.from; i <= blk.to; i++) if (/^\s*source:/.test(lines[i])) { si = i; break; }
  if (si === -1) throw new Error('no source line inside the block for ' + t.F.id);
  if (/\)\s*['"]\s*(?:\})?\s*,?\s*$/.test(lines[si])) merged++; else opened++;
  lines[si] = mergeCitation(lines[si], t.clause);
}
for (const f of [EP2, EP1]) fs.writeFileSync(D + f, files[f].join('\n'));
console.log('written: ' + todo.length + ' citations -- ' + merged + ' merged into an existing parenthetical, ' + opened + ' opened a new one');

for (const f of [EP2, EP1]) {
  const r = cp.spawnSync('node', ['--check', D + f], { encoding: 'utf8' });
  if (r.status !== 0) { console.log('  node --check FAILED on ' + f); console.log(r.stderr); process.exit(1); }
  console.log('  node --check ' + f + ': ok');
}

// Reloading is the only way to know the write did not eat an entry.  A citation edit must not move
// either count by one.
const before2 = { [EP2]: live[EP2].n, [EP1]: live[EP1].n };
const after = {};
after[EP2] = loadLive(EP2, 'Q_PEDS_EP2');
after[EP1] = loadLive(EP1, 'Q_PEDS_EP');
for (const f of [EP2, EP1]) {
  const ok = after[f].n === before2[f] && after[f].holes === 0;
  console.log('  ' + f + ': ' + before2[f] + ' -> ' + after[f].n + ' entries, ' + after[f].holes + ' holes  ' + (ok ? 'ok' : 'CHANGED -- investigate'));
  if (!ok) bad++;
}

// Census: each file is scanned only for its own rows, because part 1 already carries a byte-identical
// clause of its own for a different question on a colliding page number.
for (const M of MARKS) {
  const src = fs.readFileSync(D + M.file, 'utf8');
  const n = src.split(M.mark).length - 1;
  const ok = n === M.expect;
  console.log('  census ' + M.file + ': "' + M.mark + '" x' + n + ' (expected ' + M.expect + ') ' + (ok ? 'ok' : 'MISMATCH'));
  if (!ok) bad++;
}

// Every planned clause must now be readable on its own target, in the right file.
let placed = 0;
const after2 = new Map();
for (const f of [EP2, EP1]) for (const q of after[f].all) after2.set(q.id, { f: f, q: q });
for (const F of PLAN) {
  const L = after2.get(F.id);
  if (!L) { console.log('  target vanished: ' + F.id); bad++; continue; }
  if (String(L.q.source).indexOf(clauseFor(F)) === -1) { console.log('  clause missing on ' + F.id); bad++; }
  else placed++;
}
console.log('  ' + placed + ' of ' + PLAN.length + ' clauses read back off their targets');

console.log('');
console.log(bad ? bad + ' PROBLEM(S) after the write.' : 'section 14 reprints written and verified.');
process.exit(bad ? 1 : 0);
