// reprint-s15-pd-ep2.js — write section 15's reprint citations onto the entries that already carry
// the questions.  Section 15 is Model Final Exam 4, pp.1759-1921 of Pediatrics endpoint part2.pdf,
// and 63 of its 80 questions are reprints; those 63 are never drafted as entries, they are cited
// onto the entry that already holds the question.
//
// 80 staged = 63 reprints (here) + 1 within-section fold (n75 reprints n67, both staged in this same
// pass, so it takes splice-pd-ep2.js's folded: key and not this tool -- there is no live entry to
// extend) + 16 drafted.  The four adjudication files are
// content\peds\qb-pages\endpoint-p2-s15-fold-adjudication-A..D.md, and every one of the 80 carries an
// explicit verdict there, including the eleven the candidate generator produced nothing for: a
// candidate list's silence is not a verdict, and all eleven were ruled by hand.
//
// NOT the same tool as reprint-s14-pd-ep2.js or reprint-s14-pd-ep.js.  Neither is reused or
// overwritten.
//
// ⚠️ Part 1 and part 2 are one bank.  Both files carry bank:'endpoint', so a part-1 match is a
// within-bank duplicate exactly like a part-2 one.  Twelve of the 63 targets live in
// questions.peds.ep.js -- by far the most of any section in this stream -- and they are the only
// twelve rows allowed to touch that file.  Nothing here adds alsoIn: that is only ever for a House
// match, and no House match folds.
//
// ⚠️ The page numbers collide across the two files.  Part 1 has a Model Final Exam 4 of its own, and
// questions.peds.ep.js already contains the string "reprinted in Model Final Exam 4, p.1" fourteen
// times, none of them from this pass.  The census below therefore uses a different mark per file,
// each measured at 0 in the file it is counted in before the pass runs, and each file is scanned only
// for its own rows.
//
// ⚠️ Five live entries are named by TWO section-15 questions each.  The book prints those five
// questions twice inside one exam, so each of those entries takes two clauses.  DOUBLE_OK declares
// them by name and by the pair of n that may name them; an undeclared second naming still stops the
// pass, because that is what a mis-adjudicated fold looks like.  mergeCitation applied twice in
// succession is correct: the second clause joins the parenthetical the first one opened.
//
// PLAN's tails were written from cmp15.js's measured comparison of each staged printing against its
// adjudicated live target -- key text, key index, option count, per-option text and both stems -- and
// not from prose.  Straight quotes are curled throughout, because a clause containing the quote
// character that closes the target's source string cannot be spliced into it.
//
// Dry run by default; --write to apply.
const fs = require('fs'), vm = require('vm'), cp = require('child_process');
const R = 'D:/claude os/Medical school/Herophilus/';
const D = R + 'app/data/';
const WRITE = process.argv.includes('--write');
const EP2 = 'questions.peds.ep2.js', EP1 = 'questions.peds.ep.js';
const EXAM = 'Model Final Exam 4';
const PAGE_LO = 1759, PAGE_HI = 1921;   // n1 is p.1759, n80 is p.1921; the banner page stages nothing
const EXPECTED = 63;
const STAGING = R + 'content/peds/qb-pages/endpoint-p2-s15-mfe4.array.js';
const SVAR = 'PEDEP2_S15_STAGED';

// Every key the exam prints in different words from the live entry.  Measured, then read against
// both printings one row at a time; an unlisted key-text move stops the pass, because a key that
// moved for a real reason is a different question and not a reprint.  All eight below are the same
// answer renamed, never a different answer.
const KEYTEXT_OK = {
  32: ['G6PD deficiency', 'Glucose-6-phosphate dehydrogenase deficiency (G6PD)', 'the abbreviation spelled out, p.1823'],
  58: ['Epstein-Barr virus (EBV) infection', 'Epstein-Barr infection (EBV)', 'the same organism, the word virus dropped and the abbreviation moved to the end, p.1877'],
  60: ['Viral wheeze', 'Viral episodic wheeze', 'episodic added to the same diagnosis, p.1881'],
  61: ['Upper respiratory tract infection', 'Common cold', 'the same diagnosis under its lay name, p.1883'],
  65: ['Grunting increases end expiratory pressure and promotes gas exchange', 'Grunting increases end-expiratory pressure and promotes gas exchange', 'end-expiratory hyphenated, p.1891'],
  66: ['The presence of symptoms between coughs and colds', 'The presence of symptoms between coughs', 'and colds dropped from the end of the same option, p.1893'],
  70: ['Continuous positive airway pressure (CPAP)', 'C-PAP', 'the same modality abbreviated, p.1901'],
  72: ['It establishes normal cochlear function.', 'It establishes normal cochlear function', 'the trailing full stop dropped, p.1905'],
};

// Every key the exam prints in a different position.  Each one is accounted for by an option the
// exam adds, drops or reorders, and in all four the key TEXT still names the same answer.
const KEYINDEX_OK = {
  66: [4, 3, 'two distractors substituted and the five-option menu cut to four, p.1893'],
  70: [1, 3, 'the four-option menu reordered and a fifth option added, p.1901'],
  72: [4, 3, 'There are no false positive results dropped and the remaining four reordered, p.1905'],
  78: [1, 2, 'the X-linked pair printed first and Sporadic dropped, p.1917'],
};

// Every row where the two printings carry a different NUMBER of options.  This is the difference
// that hides a fold, so it is declared rather than tolerated: each row names the option that the
// exam adds or drops.
const OPTCOUNT_OK = {
  26: [4, 5, 'the exam adds Folate deficiency as a fifth option, p.1810'],
  55: [4, 5, 'the exam adds Neurogenic shock as a fifth option, p.1871'],
  66: [5, 4, 'the exam drops Finger clubbing and Peak-flow variability diary and adds Spasmodic cough, p.1893'],
  70: [4, 5, 'the exam adds Bronchodilators as a fifth option, p.1901'],
  72: [5, 4, 'the exam drops There are no false positive results, p.1905'],
  76: [4, 5, 'the exam adds Tension headache as a fifth option, p.1913'],
  77: [4, 5, 'the exam adds Thyroid function tests as a fifth option, p.1915'],
  78: [5, 4, 'the exam drops Sporadic, p.1917'],
};

// The five entries the book prints twice inside this one exam.  Each was hand-checked against both
// printings before it was allowed here -- four of the five were listed by the sweep only as shared
// option MENUS, and a shared menu pairs questions rather than folding them, so the discriminating
// tokens were named one pair at a time:
//   pedep2-mf1-51  n4 / n57   identical option ladder, identical key
//   pedep2-nd-19   n9 / n51   one option swapped (Gross motor delay / Normal developmental
//                             milestones), same key text and same key index
//   pedep2-res-22  n17 / n60  identical ladder, key index 0 both times, key text Viral wheeze against
//                             Viral episodic wheeze, the child 3 against 2
//   pedep2-res-25  n18 / n59  same 6-year-old and same prior drugs, key index 3 and key text
//                             unchanged, options 0/1/3 identical, two fillers swapped
//   pedep-gi-17    n12 / n54  identical ladder and key; the two printings put the pyloric mass in
//                             opposite upper quadrants -- n12 (p.1781) prints it LEFT, which is
//                             where this entry's own printing has it, and n54 (p.1869) prints it
//                             RIGHT, which is where the Model Final Exam 3 reprint already recorded
//                             on this entry has it. Only n54's tail carries a location clause,
//                             because only n54 moves the mass. Recorded, never corrected.
const DOUBLE_OK = {
  'pedep2-mf1-51': [4, 57],
  'pedep2-nd-19':  [9, 51],
  'pedep2-res-22': [17, 60],
  'pedep2-res-25': [18, 59],
  'pedep-gi-17':   [12, 54],
};

// Each mark measures 0 in its own file before this pass runs, measured 2026-09-06:
//   questions.peds.ep2.js  "reprinted in Model Final Exam 4, p.1"                             x0
//   questions.peds.ep.js   "reprinted in Pediatrics endpoint part2.pdf, Model Final Exam 4, p.1" x0
// Part 1 separately carries "reprinted in Model Final Exam 4, p.1" fourteen times from its own pass,
// which is exactly why part 1's mark names the file.
const MARKS = [
  { file: EP2, mark: 'reprinted in ' + EXAM + ', p.1', expect: 51 },
  { file: EP1, mark: 'reprinted in Pediatrics endpoint part2.pdf, ' + EXAM + ', p.1', expect: 12 },
];

const PLAN = [
  { n: 2, p: 1761, id: 'pedep2-car-18', file: EP2, sep: ',',
    tail: "spelling out “chest X-ray” where this printing abbreviates it “CXR”; the options and the key are unchanged" },
  { n: 4, p: 1765, id: 'pedep2-mf1-51', file: EP2, sep: ',',
    tail: "dropping that the boy was brought in by ambulance at night and examined in the emergency department, presenting the same cough, stridor and barking cough directly; the options and the key are unchanged" },
  { n: 5, p: 1767, id: 'pedep2-end-13', file: EP2, sep: ',',
    tail: "abbreviating option 4 to “CK” where this printing spells it “Creatine kinase (CK)”, and calling the glucose value “Blood glucose” rather than “Blood sugar levels”; the key is unchanged" },
  { n: 6, p: 1769, id: 'pedep2-end-14', file: EP2, sep: ',',
    tail: "dropping the 1-day symptom duration and that he was born at term with a normal postnatal period, and asking for the confirming test without mentioning resuscitation first; the options and the key are unchanged" },
  { n: 7, p: 1771, id: 'pedep2-gen-24', file: EP2, sep: ',',
    tail: "dropping that the baby was born by vaginal delivery following an uneventful pregnancy to a 38-year-old primiparous mother, and that he had been feeding well, leaving only the bare murmur with the hypotonia, palmar creases and epicanthic folds; the options and the key are unchanged" },
  { n: 8, p: 1773, id: 'pedep2-car-20', file: EP2, sep: ',',
    tail: "dropping the mother’s urgent request for review, the note that there is no murmur, and the baby being brought to the neonatal unit for further care; the options and the key are unchanged" },
  { n: 9, p: 1775, id: 'pedep2-nd-19', file: EP2, sep: ',',
    tail: "calling it a routine consultation rather than a health visitor consultation, dropping that he was responding to his name and holding a crayon, and reporting the left-hand preference directly rather than via the father’s report; the options and the key are unchanged" },
  { n: 10, p: 1777, id: 'pedep2-nd-20', file: EP2, sep: ',',
    tail: "dropping that he was referred to a community paediatrician, that he holds the railing on the stairs, and that the drawers are at the desk, and asking for the “most likely delay” rather than the “most likely finding here”; the options and the key are unchanged" },
  { n: 11, p: 1779, id: 'pedep2-end-15', file: EP2, sep: ',',
    tail: "dropping the insulin infusion rate (0.1 units/kg/h), and calling it “blood glucose” rather than “blood sugar”; the options and the key are unchanged" },
  { n: 12, p: 1781, id: 'pedep-gi-17', file: EP1, sep: ',',
    tail: "abbreviating “bicarbonate” to “HCO3” and asking what the gas “indicates” rather than what it “represents”; the options and the key are unchanged" },
  { n: 13, p: 1783, id: 'pedep2-car-21', file: EP2, sep: ',',
    tail: "adding a comma before each of the two “and”s this printing runs together, otherwise repeating the vignette verbatim; the options and the key are unchanged" },
  { n: 14, p: 1785, id: 'pedep2-car-22', file: EP2, sep: ',',
    tail: "dropping “the” from option 1, “Coarctation of aorta” rather than “Coarctation of the aorta”, and adding “and” before “the baby is pink” in the stem; the key is unchanged" },
  { n: 16, p: 1789, id: 'pedep2-res-21', file: EP2, sep: ',',
    tail: "spelling out “BD” as “twice daily” and “fortnightly” as “approximately once every two weeks” — the same dosing frequency each time — and rewording “has had to use” to “has used”; the options and the key are unchanged" },
  { n: 17, p: 1792, id: 'pedep2-res-22', file: EP2, sep: ',',
    tail: "calling her “previously” rather than “otherwise” fit and well, and separating “She is thriving” from the examination findings into its own sentence; the options and the key are unchanged" },
  { n: 18, p: 1794, id: 'pedep2-res-25', file: EP2, sep: ',',
    tail: "giving the boy’s age as 3 years rather than 6, and abbreviating option 2 to “Request a CXR” where this printing spells it “Request a chest X-ray”; the key is unchanged" },
  { n: 20, p: 1798, id: 'pedep2-res-23', file: EP2, sep: ',',
    tail: "wording “commenced” as “initiated” and adding a comma before “and intravenous antibiotics”; the options and the key are unchanged" },
  { n: 22, p: 1802, id: 'pedep2-res-26', file: EP2, sep: ';',
    tail: "the stem, options and key are unchanged" },
  { n: 23, p: 1804, id: 'pedep2-res-24', file: EP2, sep: ';',
    tail: "the stem, options and key are unchanged" },
  { n: 24, p: 1806, id: 'pedep2-mf1-67', file: EP2, sep: ',',
    tail: "dropping the quotation marks around “stony dull”; the options and the key are unchanged" },
  { n: 26, p: 1810, id: 'pedep2-hem-38', file: EP2, sep: ',',
    tail: "calling the test a “full blood count (FBC) arranged in view of the pallor” and spelling out “mean corpuscular volume (MCV)” where this entry says “complete blood count (FBC) shows” and “MCV”, and adding a fifth option, “Folate deficiency”; the key is unchanged" },
  { n: 27, p: 1812, id: 'pedep2-ren-19', file: EP2, sep: ',',
    tail: "rewording the stem throughout — “presents with pain in his abdomen and joints for the past 24 hours” for “presents with a 24-hour history of abdominal and joint pain”, and “urine dip” for “urine dipstick” — while keeping the same clinical detail; the options and the key are unchanged" },
  { n: 28, p: 1814, id: 'pedep2-hem-39', file: EP2, sep: ',',
    tail: "dropping the Afro-Caribbean ethnicity and the mucosal pallor from the stem, and labelling the count “white cell count (WCC)” where this entry prints “WBC”, spelling the third option “Anaemia of chronic disease” against this entry’s “Anemia of chronic disease”, and spelling the fourth option out as “Glucose-6-phosphate dehydrogenase deficiency” where this entry abbreviates it “G6PD deficiency” — the same answer differently spelled; the key is unchanged" },
  { n: 29, p: 1816, id: 'pedep2-hem-40', file: EP2, sep: ',',
    tail: "labelling the white cell count “WBC” where this entry prints “WCC”; the options and the key are unchanged" },
  { n: 30, p: 1818, id: 'pedep2-hem-41', file: EP2, sep: ',',
    tail: "spelling the third option out as “Glucose-6-phosphate dehydrogenase deficiency (G6PD)” where this entry abbreviates it “G6PD deficiency” — the same answer differently spelled; the key is unchanged" },
  { n: 31, p: 1820, id: 'pedep2-mf3-10', file: EP2, sep: ',',
    tail: "adding “legs” to the petechiae distribution alongside the chest and abdomen this entry names, giving Hb 10.4 g/dL against this entry’s 14 g/dL — the two printings disagree, and both are recorded as printed — printing the white cell and platelet counts as “13 × 10^9/L” and “15 × 10^9/L” against this entry’s “13,000/ml” and “15,000/ml”, the same values read per microlitre, printed here per millilitre, and spelling the second, fourth and fifth options in British spelling, as “Haemophilia B (Christmas disease)”, “Meningococcal septicaemia” and “Hemolytic uraemic syndrome (HUS)”, against this entry’s American spelling “Hemophilia B (Christmas disease)”, “Meningococcal septicemia” and “Hemolytic uremic syndrome (HUS)”; the options and the key are otherwise unchanged" },
  { n: 32, p: 1823, id: 'pedep2-hem-44', file: EP2, sep: ',',
    tail: "rewording the stem throughout — keeping “A&E” only as “accident and emergency room”, adding that the visit followed “holiday in West Africa”, and describing “deep jaundice” where this entry says he is simply “jaundiced” — without changing the labs, and spelling the first option out as “Glucose-6-phosphate dehydrogenase deficiency (G6PD)” where this entry abbreviates it “G6PD deficiency” — the same answer spelled out, not a moved answer; the key is unchanged" },
  { n: 33, p: 1825, id: 'pedep2-hem-45', file: EP2, sep: ',',
    tail: "combining the opening two sentences into one and labelling the count “WBC” where this entry prints “WCC”, naming the first option “Packed red blood cell transfusion” against this entry’s “Packed red cell transfusion”, and rewording the third option “Administration of G-CSF” against this entry’s “G-CSF administration”; the key is unchanged" },
  { n: 35, p: 1830, id: 'pedep2-mal-21', file: EP2, sep: ',',
    tail: "adding an introductory sentence — “Brain tumors are the most common solid tumor of childhood, and presentation may be insidious, leading to late diagnosis” — not present in this entry, and spelling “tumors” in American spelling against this entry’s “tumours”; the options and the key are unchanged" },
  { n: 37, p: 1834, id: 'pedep2-ren-20', file: EP2, sep: ',',
    tail: "spelling “haematuria” in British spelling where this entry has “hematuria”, adding that the tonsillitis was treated “by her GP”, and printing the fourth option as “Henoch-Schoenlein purpura”, its en dash printed as a hyphen and its “ö” dropped, against this entry’s “Henoch–Schönlein purpura”; the key is unchanged" },
  { n: 38, p: 1836, id: 'pedep2-ren-21', file: EP2, sep: ';',
    tail: "the stem, options and key are unchanged" },
  { n: 39, p: 1838, id: 'pedep2-ren-22', file: EP2, sep: ',',
    tail: "labelling the white cell count “WBC” where this entry prints “WCC”, and closing with “The most likely diagnosis is:” where this entry asks “What is the most likely diagnosis?”; the options and the key are unchanged" },
  { n: 40, p: 1840, id: 'pedep2-ren-23', file: EP2, sep: ',',
    tail: "rewording the closing question — “Which of the following organisms is most likely to be responsible for her urinary tract infection?” against this entry’s “Which organism is most likely responsible for her urinary tract infection?” — and calling it “a dipstick” rather than “a urine dipstick”; the options and the key are unchanged" },
  { n: 41, p: 1842, id: 'pedep2-end-16', file: EP2, sep: ',',
    tail: "trimming the stem to “A baby has bilaterally undescended testes. Genitalia appear to be male”, without the newborn-exam framing, and printing the first option as “Karyotype with FISH for sex-determining region of the Y chromosome” where this entry gives the abbreviated “Karyotype with FISH for SRY”; the option count and the key are unchanged" },

  { n: 42, p: 1844, id: 'pedep2-dp-17', file: EP2, sep: ',',
    tail: "spelling out “ADHD (attention deficit hyperactivity disorder)” where this entry gives “suspected ADHD”, and expanding the presenting picture with the teachers’ account that he is “restless and constantly running around the classroom” where this entry keeps only “is restless”; the options and the key are unchanged" },

  { n: 43, p: 1846, id: 'pedep2-mf2-46', file: EP2, sep: ',',
    tail: "reordering “has only” to “only has” and printing “During the surgery” where this entry gives “In the surgery”; the options and the key are unchanged" },

  { n: 45, p: 1850, id: 'pedep2-neu-25', file: EP2, sep: ';',
    tail: "the stem, the options and the key are unchanged" },

  { n: 46, p: 1852, id: 'pedep2-neu-21', file: EP2, sep: ',',
    tail: "trimming “boy” and “in the clinic” to “is seen in clinic”, and printing the second option as “Tet’ spells” where this entry gives “Tet spells”; the option count and the key are unchanged" },

  { n: 47, p: 1854, id: 'pedep2-neu-22', file: EP2, sep: ',',
    tail: "printing “spikes at 3 Hz” where this entry gives the fuller “3 Hz spike-and-wave discharges”, ending the stem “The likely diagnosis is:” rather than “The most likely diagnosis is which of the following?”, and naming the first option “ADHD-inattentive form” where this entry gives “ADHD, inattentive type”; the option count and the key are unchanged" },

  { n: 48, p: 1856, id: 'pedep2-neu-23', file: EP2, sep: ',',
    tail: "expanding “due to frequent irritability” into two sentences, printing “head up” for this entry’s “head upward”, and writing “An EEG is performed, which shows” where this entry gives “An EEG shows”; the options and the key are unchanged" },

  { n: 49, p: 1858, id: 'pedep-emg-25', file: EP1, sep: ',',
    tail: "phrasing the timing of the buccal midazolam as “5 minutes later” where this entry gives “after 5 minutes”; the options and the key are unchanged" },

  { n: 50, p: 1860, id: 'pedep2-neu-24', file: EP2, sep: ',',
    tail: "adding “the seizure” after “terminate” and printing “a decision is made” in the present tense where this entry gives “a decision was made”; the options and the key are unchanged" },

  { n: 51, p: 1862, id: 'pedep2-nd-19', file: EP2, sep: ',',
    tail: "printing “responding to his mama” where this entry gives “responding to his name”, and “holding something in his left hand” where this entry specifies “holding a crayon”, and naming the first option “Normal developmental milestones” where this entry gives “Gross motor delay”; the option count and the key are unchanged" },

  { n: 52, p: 1864, id: 'pedep-mf3-6', file: EP1, sep: ',',
    tail: "rephrasing “her central capillary refill time is 4 seconds” as “a central capillary refill time of 4 seconds” and dropping the colon before “89% in air”; the options and the key are unchanged" },

  { n: 53, p: 1867, id: 'pedep-mf3-7', file: EP1, sep: ',',
    tail: "adding the articles “a large head with a wide anterior fontanelle” where this entry gives “large head with wide-anterior fontanelle”; the options and the key are unchanged" },

  { n: 54, p: 1869, id: 'pedep-gi-17', file: EP1, sep: ',',
    tail: "moving the mass to the RIGHT upper quadrant and withholding the blood gas values, asking what finding is expected rather than what the printed gas represents; the options and the key are unchanged" },

  { n: 55, p: 1871, id: 'pedep-emg-57', file: EP1, sep: ',',
    tail: "printing a fifth option, “Neurogenic shock,” last, and giving the blood pressure as “75 mm Hg” where this entry prints “75 mmHg”; the option count moves to 5 and the key is unchanged" },

  { n: 57, p: 1875, id: 'pedep2-mf1-51', file: EP2, sep: ',',
    tail: "dropping the quotation marks around “barking cough” and asking for the “most likely common causative organism” where this entry asks for the “most likely causative organism”; the options and the key are unchanged" },

  { n: 58, p: 1877, id: 'pedep2-mf1-25', file: EP2, sep: ',',
    tail: "dropping “purulent” before “discharge” in the stem, printing the second option as “Beta hemolytic Streptococcus” where this entry hyphenates it “Beta-hemolytic Streptococcus”, and the fourth option as “Non-Hodgkin lymphoma” where this entry gives “Non-Hodgkin’s lymphoma”; the key option itself is reworded from this entry’s “Epstein-Barr virus (EBV) infection” to “Epstein-Barr infection (EBV)”, the same answer at the same index; the option count is unchanged" },

  { n: 59, p: 1879, id: 'pedep2-res-25', file: EP2, sep: ',',
    tail: "re-skinning the stem so the oxygen requirement is given as “High-flow oxygen” rather than this entry’s dosed “Fifteen liters of oxygen”, and substituting two distractors: the third option “Request a chest X-ray” becomes “Give high dose inhaled steroids”, and the fifth option “Admit to ward” becomes “Give inhaled long-acting beta agonist”; the key text and index are unchanged" },

  { n: 60, p: 1881, id: 'pedep2-res-22', file: EP2, sep: ',',
    tail: "giving the girl’s age as 2 years and denying atopic history outright rather than this entry’s “mild eczema”, and rewording the key option from this entry’s “Viral wheeze” to “Viral episodic wheeze”; the option count and the key index are unchanged" },
  { n: 61, p: 1883, id: 'pedep2-res-8', file: EP2, sep: ',',
    tail: "dropping the name “Norah”, replacing the described respiratory rate and chest exam with “28/min” and “no recessions and bilateral equal air entry” rather than “normal” and “no chest recession”, trimming the Pneumonia option from “Pneumonia (lower respiratory tract infection)” to “Pneumonia”, and renaming the key from “Upper respiratory tract infection” to “Common cold”, the same answer" },
  { n: 62, p: 1885, id: 'pedep-mf3-29', file: EP1, sep: ',',
    tail: "adding an Oxford comma before “and crawl”; the options and the key are unchanged" },
  { n: 63, p: 1887, id: 'pedep-mf3-31', file: EP1, sep: ',',
    tail: "capitalizing “Epinephrine” in the key option where the live entry prints “epinephrine”; the stem and the remaining options are reprinted verbatim and the key is unchanged" },
  { n: 64, p: 1889, id: 'pedep-mf3-34', file: EP1, sep: ',',
    tail: "dropping the hyphen from the live entry’s “red-flag age” to print “red flag age”, and omitting “of” before the closing “18 months”; the options and the key are unchanged" },
  { n: 65, p: 1891, id: 'pedep-mf3-37', file: EP1, sep: ',',
    tail: "adding “she has” before “developed audible grunting sounds” where the live entry has just “developed”, punctuating “grunting” with a comma in the oxygen-consumption, lung-volume and bronchial-diameter options where the live entry runs those clauses on without one, and hyphenating “end-expiratory” in the key text where the live entry prints “end expiratory”; the key index and answer are unchanged" },
  { n: 66, p: 1893, id: 'pedep2-mf2-67', file: EP2, sep: ';',
    tail: "the stems are printed identically; the exam prints “Spasmodic cough” where the live entry prints “Finger clubbing”, drops the live entry’s “Peak-flow variability diary” option entirely, carries the live entry’s “Persistent moist cough” up one slot, and truncates the key from “The presence of symptoms between coughs and colds” to “The presence of symptoms between coughs”, moving it from the live entry’s fourth option to the exam’s third" },
  { n: 68, p: 1897, id: 'pedep-mf3-22', file: EP1, sep: ',',
    tail: "spelling “Hemophilus influenzae” where the live entry prints “Haemophilus influenzae”, and dropping the hyphen in “Gram-negative cocci” to “Gram negative cocci”; the stem and the key are unchanged" },
  { n: 70, p: 1901, id: 'pedep2-mf2-51', file: EP2, sep: ',',
    tail: "opening the stem as “Which clinical intervention is of evidence-based benefit” rather than the live entry’s “Which of the following is of evidence-based benefit”, adding “Bronchodilators” as a fifth option, swapping the positions of “Antibiotics” and the key option, and abbreviating the key text to “C-PAP” where the live entry spells it “Continuous positive airway pressure (CPAP)”, moving it from the live entry’s second option to the exam’s fourth" },
  { n: 72, p: 1905, id: 'pedep2-mf1-42', file: EP2, sep: ',',
    tail: "printing “Automated otoacoustic emissions” in lowercase and plural where the live entry has the title-cased singular “Automated Otoacoustic Emission”, and dropping “neonatal” before “hearing screening test”, printing the auditory-neuropathy and brain-function options without the full stops the live entry adds, omitting the live entry’s extra option “There are no false positive results.”, and dropping the trailing full stop from the key while its position moves from the exam’s third option to the live entry’s fourth" },
  { n: 74, p: 1909, id: 'pedep-mf3-10', file: EP1, sep: ';',
    tail: "the stem, the options and the key are all printed identically" },
  { n: 76, p: 1913, id: 'pedep2-neu-5', file: EP2, sep: ',',
    tail: "printing “maths class” without a comma where the live entry has “math class,”, omitting “the” before “hospital”, and dropping the Oxford comma after “normal vision”; the exam adds “Tension headache” as a fifth option not in the live entry, and the key Migraine is unchanged" },
  { n: 77, p: 1915, id: 'pedep2-dp-7', file: EP2, sep: ',',
    tail: "spelling “learnt” and keeping the comma before “and is able to crawl” where the live entry has “learned” and “and can crawl” without the comma, keeping “that” after “Her mother says” which the live entry drops, and rewording the closing question from “Which of these investigations would you choose to initially undertake to confirm the diagnosis of developmental delay in the child described in this clinical scenario?” to the live entry’s “Which investigation would you initially undertake to confirm the diagnosis of developmental delay in this scenario?”; the exam adds “Thyroid function tests” as a fifth option not in the live entry, and the key CT or MRI scan of the brain is unchanged" },
  { n: 78, p: 1917, id: 'pedep2-gen-3', file: EP2, sep: ',',
    tail: "rewording the stem as “What is the pattern of inheritance that occurs in the heterozygous state despite the presence of an intact copy of the relevant gene, and is characterized by equal affection of males and females?” where the live entry asks “Regarding modes of inheritance, the condition that occurs in heterozygous state, males and females are equally affected is:”, reordering the four inheritance options and hyphenating “X-linked” where the live entry prints “X linked”, dropping the live entry’s fifth option “Sporadic”, and moving the key Autosomal dominant from the live entry’s second option to the exam’s third" },
];

const ap   = s => String(s).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
const flat = t => ap(t).toLowerCase().replace(/[.,;:]/g, '').replace(/\s+/g, ' ').trim();

function clauseFor(F) {
  // A part-2 target does not name the file: its source already opens with it.  A part-1 target must,
  // because its source opens with part1.pdf and the two books both have a Model Final Exam 4.
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
  // opening a second one beside it.  This is also what makes a doubled target work: the second
  // clause merges into the parenthetical the first one opened.
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

const seenN = new Set(), byTarget = new Map();
for (const F of PLAN) {
  if (seenN.has(F.n)) fail('question n' + F.n + ' is planned twice');
  seenN.add(F.n);
  if (!byTarget.has(F.id)) byTarget.set(F.id, []);
  byTarget.get(F.id).push(F.n);
}
for (const [id, ns] of byTarget) {
  if (ns.length === 1) continue;
  const ok = DOUBLE_OK[id];
  if (!ok) fail('target ' + id + ' is named by ' + ns.length + ' questions (n' + ns.join(', n') + ') and is not declared');
  else if (ok.length !== ns.length || ok.some((v, i) => v !== ns[i]))
    fail('target ' + id + ' is declared for n' + ok.join(', n') + ' but planned for n' + ns.join(', n'));
}
for (const id of Object.keys(DOUBLE_OK))
  if (!byTarget.has(id)) fail('DOUBLE_OK names ' + id + ', which no PLAN row targets');

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
// already name Model Final Exam 4, and section 15's own targets may name Model Final Exam 1, 2 or 3.
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
            ', ' + PLAN.filter(F => F.file === EP1).length + ' in ' + EP1 +
            ' (' + byTarget.size + ' distinct targets; ' + Object.keys(DOUBLE_OK).length + ' of them cited twice)');
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

// Every planned clause must now be readable on its own target, in the right file.  The five doubled
// targets are read twice, once per clause, so a second clause that silently overwrote the first
// would be caught here rather than by the census alone.
let placed = 0;
const after2 = new Map();
for (const f of [EP2, EP1]) for (const q of after[f].all) after2.set(q.id, { f: f, q: q });
for (const F of PLAN) {
  const L = after2.get(F.id);
  if (!L) { console.log('  target vanished: ' + F.id); bad++; continue; }
  if (String(L.q.source).indexOf(clauseFor(F)) === -1) { console.log('  clause missing on ' + F.id + ' (n' + F.n + ')'); bad++; }
  else placed++;
}
console.log('  ' + placed + ' of ' + PLAN.length + ' clauses read back off their targets');

console.log('');
console.log(bad ? bad + ' PROBLEM(S) after the write.' : 'section 15 reprints written and verified.');
process.exit(bad ? 1 : 0);
