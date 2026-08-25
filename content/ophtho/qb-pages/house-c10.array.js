// VERBATIM STAGING — Dr. HOUSE in Ophthalmology MCQs
// Source file: Semester 8\Opthalmo\Questions\ophthalmology MCQ.pdf
// Part A, Chapter 10: "10. The uveal tract" — book pp.68-73 (PDF sheets 36L-38R)
//
// ================================================================
// WHAT THE BANNER LITERALLY PRINTS
// ================================================================
// Book p.68, red full-width band, white bold sans, immediately under the
// running head "[H]OUSE Ophthalmology MCQs 2026 | Chapterwise MCQs":
//
//     10. The uveal tract
//
// Numbered 10, in sequence after chapter 9 ("9. The crystalline lens", book
// p.62, recorded in house-c9.array.js). Its own Q1 restarts the numbering at 1,
// so ids carry the chapter token: `opmcq-c10-<n>`.
//
// ⚠️ THE "HOUSE PRINTED 9 TWICE" WARNING DOES NOT FIRE AT EITHER OF MY SEAMS.
//    My chapter's banner prints the numeral 10, and the banner that closes it
//    prints the numeral 11 — both looked at, neither inferred. The ch.9 agent's
//    25 dpi red-pixel banner census (header of house-c9.array.js) lists the
//    banner-bearing half-pages as 3L 4L 10L 13R 16R 20L 23R 26R 29R 33L 36L 39L
//    42L 44R 47R 51L 53L 56L 58L 61L 66L 72L 78R 80L 82R 112L 118R. Between 36L
//    and 39L there is EXACTLY ONE banner interval and no banner inside it, which
//    is what predicted my chapter's span before a single page was opened. That
//    census SAVED A RENDER and it was right. Its own caveat still stands: only
//    a handful of those 27 halves have ever been opened, so a second banner
//    printing a repeated numeral could still sit among the unopened ones.
//
// ================================================================
// PAGE ARITHMETIC — RE-VERIFIED AGAINST THE PRINTED FOLIO, NOT ASSUMED
// ================================================================
// A4 LANDSCAPE (841.86 x 595.26 pt, confirmed by `pdfinfo -f 36 -l 36`), TWO
// BOOK PAGES PER PDF SHEET, left = even, right = odd:
//     book pages on PDF sheet N  =  2N-4 (left) and 2N-3 (right)
//     PDF sheet for book page b  =  floor(b/2) + 2
// Checked against the red-circled folio numeral at the foot of every half-page
// actually opened: 68, 69 || 70, 71 || 72, 73 || 74. The task prompt's
// arithmetic was correct in every particular, and so was its claim that book
// p.68 is sheet 36 LEFT.
//
// Rendered with pdftoppm -png -r 200, sheets 36-40, as halves with
// -x 0 -W 1175 (left) and -x 1164 -W 1175 (right) at -H 1654.
// Eight close reads at -r 400 with explicit crop windows, one per misprint.
//
// PAGE MAP ACTUALLY USED
//   sheet 36 = book 68 || 69 -> red banner "10. The uveal tract",
//                               Q1-Q4 complete with keys
//                            || Q5-Q8 complete, Q9 stem + options A-D
//                               (its key overleaf — SEAM 1)
//   sheet 37 = book 70 || 71 -> Q9's key, Q10-Q13 complete, Q14 stem + all five
//                               options (its key overleaf — SEAM 2)
//                            || Q14's key, Q15-Q18 complete, Q19 stem +
//                               options A-D (option E AND the key overleaf —
//                               SEAM 3, the only one that splits an option list)
//   sheet 38 = book 72 || 73 -> Q19's option E + key, Q20-Q23 complete
//                            || Q24-Q26 complete. Chapter ENDS with Q26; the
//                               lower ~45 % of p.73 is blank, and Q26's answer
//                               line is the only one in the chapter with NO
//                               closing red rule under it
//   sheet 39 = book 74 || 75 -> BOUNDARY PROOF (left half)
//
// ⚠️ THE BOUNDARY PROOF, AND WHAT THE NEXT BANNER LITERALLY PRINTS.
//    Sheets 36 through 40 were rendered (book pp.68-77), two sheets past the
//    end. The proof sheet is **PDF sheet 39, LEFT half = book p.74**, and its
//    red banner literally prints:
//
//        11. Glaucoma
//
//    Numbered 11, in sequence after 10, with its own Q1 restarting the
//    numbering (a 62-year-old diabetic, IOP 28, C:D 0.8, arcuate scotoma, key
//    "B." — printed with a trailing full stop, unlike every other key in this
//    file). Identified by CONTENT as well as numeral: its first four questions
//    are all glaucoma. Sheets 39R and 40 were rendered but not opened.
//
// ================================================================
// COUNTS — every one measured, none derived
// ================================================================
// QUESTIONS ACTUALLY READ: **26**. Counted by reading every printed number on
//    all six half-pages in order, never by taking the last number:
//        1 2 3 4 | 5 6 7 8 9 | 10 11 12 13 14 | 15 16 17 18 19 | 20 21 22 23 |
//        24 25 26
//    PRINTED RANGE: **1-26, unbroken, with no anomaly of any kind.**
//    ⚠️ The ch.8 defects DO NOT recur here: no question carries an out-of-range
//    printed number, none is printed without a number, no option letter is
//    duplicated and none is skipped. Every option list runs A, B, C, D (and E
//    where there are five) in order. This was looked for specifically, which is
//    why no `n` on this chapter is staged as a string.
//    This bank prints no contents page and no per-chapter count, so there is no
//    promised figure to compare against.
//
// EXPLANATION BOXES: **ZERO.** Counted on all six book pages. Every question is
//    stem, options, a red horizontal rule, "Answer: <letter>", a red rule.
//    Ten chapters in, this bank has printed zero explanation boxes anywhere.
//    Re-counted here, not carried forward from ch.9.
//    => MARKER ARITHMETIC: markers = entries - boxes = 26 - 0 = **26**.
//      All 26 drafted entries end `explanation` with exactly
//      "Written for this bank - ophthalmology MCQ.pdf prints no explanation
//      here." (em dash in the shipped string) and none carries it in `source`.
//
// FIGURES: **ZERO.** All six book half-pages were rendered at 200 dpi and
//    looked at in full. Not one photograph, ultrasound, diagram, line drawing
//    or table — which is notable for a uvea chapter, since both grounding
//    sources teach this topic largely through clinical photographs.
//    NO 400 dpi INK BOUNDS ARE RECORDED BELOW BECAUSE THERE IS NOTHING TO
//    BOUND. The brief's crop rules (picture bottom edge reported separately,
//    nearest text above and below with distances, the rule-under-photograph
//    trap) have nothing to fire on. The only non-type ink on these pages is the
//    red header band, the red banner, the red answer rules and the red folio
//    circle. Chapters 7, 8 and 9 were the same.
//
// SEAM DEFECTS: **THREE**, all at page turns, all resolved by having both
//    halves of every sheet rendered:
//      S1. p.69 -> p.70: Q9's key ("Answer: A") is ORPHANED at the top of p.70,
//          above the ch.10 running head's first question.
//      S2. p.70 -> p.71: Q14's key ("Answer: B") orphaned at the top of p.71.
//      S3. p.71 -> p.72: Q19 is SPLIT MID-OPTION-LIST. Options A-D close p.71;
//          option E ("E . B & C") and the key ("Answer: D") open p.72. This is
//          the dangerous one — a reader who stopped at the page foot would have
//          staged Q19 as a four-option question and, since `answer` is an INDEX,
//          would still have keyed index 3 and landed on the right text by luck.
//          It is recorded because the next such split may not be so forgiving.
//    Both ends of all five internal seams were checked. No stem is split.
//
// ================================================================
// MISPRINTS — all eight verified at 400 dpi, all transcribed AS PRINTED
// ================================================================
// M1. p.68 Q2 and p.72 Q22 both print **"cliliary injection"** for "ciliary".
//     The two stems are otherwise word-for-word identical. ⚠️ A SHARED MISPRINT
//     IS THE STRONGEST EVIDENCE OF A REPRINT, and here it is evidence that the
//     bank BUILT Q22 by copying Q2's stem and swapping the lead-out sentence and
//     the whole option menu — Q2 asks the diagnosis (key A, Iridocyclitis),
//     Q22 asks the usual cause (key A, Ankylosing spondylitis). NOT one
//     question. Discriminating token: **"the most likely diagnosis" vs "a usual
//     cause for the patient's condition"**, and no option is shared.
// M2. p.69 Q9 option B prints **"It it mostly idiopathic"** (doubled "It",
//     missing "is").
// M3. p.70 Q10 option C prints **"Aqueuos humor"** for "Aqueous".
// M4. p.70 Q12 option C is lettered **"C:"** with a colon where every other
//     option in the file uses a full stop. Cosmetic; the option text is intact
//     and the letter is unambiguous.
// M5. p.70 Q13 option B prints **"Aqeuous humor drainage"** for "Aqueous" — a
//     DIFFERENT misspelling of the same word from M3, three questions apart.
// M6. p.71 Q18 option A and p.72 Q19 option A both print **"Zonlues of Zinn"**
//     for "Zonules". Shared misprint again, and again the pair is a deliberate
//     mirrored couplet, not a reprint — see M8.
// M7. p.72, Q19's option E prints as **"E . B & C"**, with a space between the
//     letter and the full stop, because it is the first line on a new page.
// M8. p.68 Q1 says "small, sluggish **pupils**" — plural — in a patient whose
//     keyed diagnosis (iridocyclitis) the book calls "usually **unilateral**"
//     (ophthalmology.pdf p.134). Transcribed as printed. It does not affect the
//     key: no option turns on laterality.
//
// ================================================================
// PRINTED DEFECTS — recorded, NEVER corrected. `key` is always as printed.
// ================================================================
// D1. ⚠️⚠️ **Q10's STEM AND KEY CANNOT BOTH BE RIGHT, AND THE KEY IS THE ONE
//     STAGED.** "Which of the following is TRUE regarding the anatomy of uveal
//     tract?" keys **A**, "Iris stroma is located posterior to iris pigment
//     epithelial cells". Measured against the book, option by option:
//       A — FALSE. ophthalmology.pdf p.131: "The iris stroma: It is the FRONT
//           pigmented layer ... The iris pigment epithelial cells POSTERIOR to
//           the stroma."
//       B — TRUE, and near-verbatim from p.131: "It is the outer edge of the
//           iris which is attached to the sclera."
//       C — TRUE. p.132: "The non-pigmented epithelium of the pars plicata is
//           responsible for aqueous humour secretion."
//       D — TRUE. p.133: the choroid is "the most posterior part of the uvea."
//     So the printed key selects the ONLY false statement out of four, and the
//     other three are each a direct quotation of the book. The internally
//     consistent reading is that the stem lost an "except" or a "not" in
//     typesetting — every other option is then a distractor and A is the
//     answer. Staged with key A and the disagreement explained in the entry,
//     never disputed (project ruling 2026-08-11).
// D2. Q21 ("WBC clumps on the back surface of the cornea" = keratic
//     precipitates) keys **A, Glaucoma**. Option C, **Hypotony**, is not
//     obviously wrong: ophthalmology.pdf p.135 says IOP in anterior uveitis
//     "usually decreases due to ciliary body inflammation with decreased
//     aqueous production (ciliary body shutdown)". The book's own
//     **Complications** list (p.135) names 2ry glaucoma and does NOT name
//     hypotony, which is how the key is defensible — a low IOP is taught as the
//     expected state, not as a complication. Recorded, key untouched.
// D3. Q25 ("All of the following are among the functions of the choroid
//     except?") keys **B, Protection of retina**. The book prints exactly TWO
//     choroidal functions (p.133): nutrition and gas exchange, and light
//     absorption. So B is correctly the odd one out AGAINST THIS BOOK, but the
//     key rests on an absence rather than on a printed denial. Noted so the
//     reasoning is visible.
//
// ================================================================
// BANK-vs-BANK DIVERGENCES — two, both against Grade Gain topic 10
// ================================================================
// X1. ⚠️⚠️ **Q17 AND `opqb-t10-433` ASK THE SAME QUESTION AND KEY DIFFERENT
//     ANSWERS.** House Q17 "Snow balls and snow banking are characteristic of
//     which of the following diseases?" keys **B, Intermediate uveitis**.
//     Grade Gain Q433 "Snowballs and snowbanking occur in:" is keyed
//     `answer:0` = **Posterior uveitis**, and the GG batch header in
//     questions.ophtho.js already flags that as one of its three printed
//     defects. Both project sources agree with HOUSE:
//     `L13,14) Uvea & Sclera` slide 21 puts snowballs and snow-banking under
//     "Intermediate Uveitis", and ophthalmology.pdf p.136 does the same.
//     **This is a bank-vs-bank KEY divergence, not a fold** — see the duplicate
//     list below.
// X2. Q12 ("expected change in intraocular pressure in iridocyclitis") keys
//     **C, It may either decrease or increase**. `opqb-t10-447` asks the same
//     thing and keys `answer:3` = **"Any of the above"**, where its option C is
//     "Normal". The two keys therefore disagree about whether an UNCHANGED IOP
//     belongs in the answer. `L13,14` slide 17 prints "IOP: usually decreased
//     but may be normal or increased", which supports Grade Gain; House's own
//     menu offers "It is not affected" as a separate option D and excludes it.
//     Recorded in the entry; the House key stands as printed.
//
// ================================================================
// CHAPTER ASSIGNMENT — titles quoted from app\data\modules.js, not paraphrased
// ================================================================
// ALL 26 go to **`op-uvea`, titled "Uvea"**. This is unusual for a House
// chapter (ch.9 exported one question to `op-cornea`) and it was tested, not
// assumed. Specifically checked and REJECTED:
//   • `op-glauc` "Glaucoma" — Q21 keys Glaucoma and Q3 lists it among
//     complications, but both questions TEST the sequelae of iridocyclitis, and
//     the module precedent is to file by what the question tests, not by the
//     word in the answer. Neither is lens-induced or a glaucoma mechanism
//     question.
//   • `op-onc` "Oncology" — nothing in the chapter is a tumour. Choroidal
//     melanoma, naevus and metastasis do not appear in any of the 26 stems or
//     the 108 options.
//   • `op-ret` "Retinal detachment" — Q7 and Q17 are intermediate uveitis
//     (snowballs, snow banking, pars plana), which is uveal, not retinal.
//   • `op-sclera` "Sclera" — the printed chapter title is "The uveal tract" and
//     no question touches the sclera except as a distractor in Q8.
//   • `op-neuro` "Pupil, the visual pathway and field defects" — Q18 and Q19
//     are accommodation and the ciliary muscle, which the book teaches inside
//     its own uveal-tract chapter (ophthalmology.pdf p.132), not as a pupil
//     reflex.
//
// ================================================================
// SUSPECTED DUPLICATES — flagged only, NO FOLD DECISIONS MADE
// Every one names its DISCRIMINATING TOKEN, per the brief. The corpus was read
// FROM DISK on 2026-08-25: questions.ophtho.js, 3,641,351 bytes, 912 entries,
// 41 of them `op-uvea`.
// ================================================================
// C1. **Q17 vs `opqb-t10-433`** — the strongest textual match in the batch and
//     the one I would NOT fold. Same fact, near-identical stem.
//     DISCRIMINATING TOKEN: **the keys are opposite** (House B = intermediate,
//     GG answer:0 = posterior — see X1), and option D differs, "All of the
//     above" against "Phacolytic glaucoma". Folding would delete one of the two
//     printings of a known bank-vs-bank contradiction.
// C2. **Q12 vs `opqb-t10-447`** — same fact, both plain-recall.
//     DISCRIMINATING TOKEN: **House's option D "It is not affected" against
//     GG's option C "Normal" + option D "Any of the above"**; the keys disagree
//     about the normal-IOP case (X2). Four options each, no shared wording.
// C3. **Q5 vs `opqb-t10-430`** — both key toxoplasmosis as the commonest
//     infectious cause of posterior uveitis.
//     DISCRIMINATING TOKEN: **House is a five-option list containing TB and
//     Histoplasmosis; GG is a four-option vignette containing Candida and
//     "CMV in healthy adults"**. Only HSV and CMV are common to the menus, and
//     GG's is a 27-year-old woman with choroidal lesions while House's is a
//     35-year-old man with no findings given.
// C4. **Q16 vs `opqb-t10-434`** — both turn on Bruch's membrane and the
//     choroid. DISCRIMINATING TOKEN: **the option menu is the question here.**
//     House lists the FOUR CHOROIDAL LAYERS and asks which is innermost; GG
//     lists FOUR OCULAR STRUCTURES (Retina / Lens capsule / Choroid / Vitreous
//     base) and asks what Bruch's belongs to. No option is shared. This is
//     exactly the shape the brief warns about — a shared noun, not a shared
//     question.
// C5. **Q8 vs `opmcq-c1-16`** — a WITHIN-BANK polarity pair, the fifth fold
//     shape the module has seen and a false one. House ch.1 Q16 "The uveal
//     tract includes all of the following except?" keys Limbus; my Q8 "Which of
//     the following anatomical structures is part of the uveal tract?" keys
//     Ciliary body. DISCRIMINATING TOKEN: **"includes all ... except" against
//     "is part of"**, and the menus share exactly one word, "Ciliary body" —
//     which is the DISTRACTOR in one and the ANSWER in the other.
// C6. **Q23 vs `opqb-t10-431`** — both are Vogt-Koyanagi-Harada.
//     DISCRIMINATING TOKEN: **House NAMES VKH in the stem and asks which of the
//     five printed criteria is NOT one; GG never names it, gives a vignette
//     (vitiligo, neurological signs) and asks which finding supports it.**
//     House keys "Unilateral granulomatous panuveitis" as the non-criterion; GG
//     keys "Bilateral granulomatous inflammation" as the supporting finding —
//     the same fact from opposite ends, which is why the sweep will pair them.
// C7. **Q1 / Q2 vs `opqb-t11-473`** — three iridocyclitis vignettes.
//     DISCRIMINATING TOKEN: **473's patient has an IOP of 27 mmHg (raised) and
//     is filed from Grade Gain topic 11 "Glaucoma"; my Q1's IOP is "slightly
//     reduced" and my Q2 gives no IOP at all.** Distractor sets differ
//     completely (mine offer Episcleritis, Pars planitis, Choroiditis; 473
//     offers acute keratitis and viral conjunctivitis).
// C8. **Q3 vs `opqb-t10-423`**, **Q14 vs `opqb-t10-420`**, **Q11 vs
//     `opqb-t10-413`**, **Q13 vs `opqb-t10-412`**, **Q10 vs `opqb-t10-422`** —
//     five weaker template matches on the same nouns. All are polarity-flipped
//     or ask a different thing of the same object; none shares a single option
//     string. Listed so the hub sees they were checked, not skipped.
//
// ================================================================
// GROUNDING — what was read, and one measured absence
// ================================================================
// Sources read in full before drafting:
//   • `L13,14) Uvea & Sclera` (41 slides; uvea = slides 2-27) — the main deck,
//     and its closing NOT COVERED list was read.
//   • `content\ophtho\book\ch10-uveal-tract.txt` — book chapter 10, printed
//     pp.130-141, cited as `ophthalmology.pdf p.<N>`. ⚠️ THIS IS THE CHAPTER'S
//     REAL SPINE. The deck's own NOT COVERED list declares the layers of the
//     iris and choroid, Bruch's membrane and aqueous production by the ciliary
//     epithelium ABSENT — and every one of those is taught in the book, which
//     is precisely the "a NOT COVERED list is scoped to its own deck" trap.
//     SIX of my 26 questions (Q10, Q13, Q16, Q18, Q19, Q24, Q25) would have
//     been written as gap-fills on the deck's word alone.
//   • `L1,2) Ocular Anatomy…` slides 14-18 (zonules, ciliary body, angle).
//   • `L7,8) Refractive errors` slide 54 (its only account of accommodation).
// MEASURED ABSENCES, each naming the specific thing and how it was measured:
//   • **The eponym "zonules of Zinn" (Q18, Q19 option A) is not in the course
//     material.** `Zinn` returns hits in exactly five caches — `L1,2` slide 62,
//     `L10`, `L21`, `L29` and `ch01-examination` — and every hit is the
//     **ANNULUS of Zinn** at the orbital apex, a different structure. The lens
//     suspensory apparatus is called "Zonules", "Zonular fibres" or "zonular
//     fibers" (`L1,2` slides 4, 14, 18; `ophthalmology.pdf` p.132). The
//     eponym is tagged as outside knowledge in the entries; the mechanism it
//     is attached to is fully sourced.
//   • **The "headlights in fog" simile in Q1 is not in the course material.**
//     `headlight` returns exactly two hits across all 29 lecture caches and all
//     12 book caches, and NEITHER is about aqueous flare: `L18) Cataract II`
//     line 115 is glare from oncoming headlights in cataract, and
//     `L7,8) Refractive errors` slide ~54 is a figure of smeared headlights in
//     astigmatism. Both were opened. The Tyndall phenomenon it describes IS
//     taught — `ophthalmology.pdf` p.135 defines aqueous flare as proteins in
//     the aqueous, and p.134's figure caption "Cells & flare" is the classic
//     slit-beam demonstration — so only the simile is tagged.
//
// ================================================================
// WHERE THE TASK PROMPT WAS WRONG — one item, and it is small
// ================================================================
// The prompt said "watch for questions that belong to `op-glauc` (lens-induced
// and uveitic glaucoma), `op-onc` (choroidal melanoma) or `op-ret`". **None of
// the three takes a single question.** The chapter is 26 for 26 `op-uvea`; the
// tumour and detachment material the prompt anticipated is simply not printed
// here. Everything else in the prompt held: the sheet arithmetic, book p.68 on
// sheet 36 LEFT, the id prefix, Q1's identity and key, and the pointer to the
// ch.9 banner census (which saved a render and correctly predicted the span).
//
// ================================================================

var HOUSE_C10 = [

{ n:1, p:68, key:'C',
  stem:'A 30-year-old man presents with a painful, photophobic eye and blurred vision. Slit-lamp examination shows small, sluggish pupils and visible protein "flare" in the anterior chamber, giving the appearance of headlights in fog. Intraocular pressure is slightly reduced. What is the most likely diagnosis?',
  opts:['Acute conjunctivitis','Acute angle-closure glaucoma','Iridocyclitis','Episcleritis'],
  note:'Chapter opener, directly under the red banner. "pupils" is plural in the original (misprint M8).' },

{ n:2, p:68, key:'A',
  stem:'A 28-year-old female patient complains of ocular pain, excessive lacrimation together with diminished vision. Examination revealed keratic precipitates, hypopyon and cliliary injection with violaceous hue. Which of the following is the most likely diagnosis?',
  opts:['Iridocyclitis','Pars planitis','Choroiditis','None of the above'],
  note:'"cliliary" as printed (misprint M1). This stem is reprinted word for word, misprint included, as Q22 on p.72 with a different lead-out and a different option menu.' },

{ n:3, p:68, key:'E',
  stem:'In the previous case, which of the following is an expected complication?',
  opts:['Glaucoma','Cataract','Posterior synechiae','Calcific band keratopathy','All of the above'],
  note:'BACK-REFERENCE. Antecedent read, not assumed: Q2 immediately above, the 28-year-old woman with keratic precipitates, hypopyon and violaceous ciliary injection whose keyed diagnosis is iridocyclitis. Restated in the draft WITHOUT naming that diagnosis, since Q2 asks for it.' },

{ n:4, p:68, key:'B',
  stem:'In the previous case, what is the best line of management?',
  opts:['Surgical intervention','Steroid administration','Symptomatic treatment','Antibiotics'],
  note:'BACK-REFERENCE, TWO QUESTIONS DEEP. Q3 is itself a back-reference and introduces no patient, so "the previous case" here is still Q2. Checked against the ch.8 precedent where exactly this happened.' },

{ n:5, p:69, key:'D',
  stem:"A 35-year-old male patient was found to have posterior uveitis as a result of an infectious process. Which of the following is the most common cause of this patient's condition?",
  opts:['TB','HSV','Histoplasmosis','Toxoplasmosis','CMV'],
  note:'' },

{ n:6, p:69, key:'B',
  stem:'In the previous case, which of the following is the best line of management?',
  opts:['Steroids','Treatment of the infection','Surgical intervention','A & B','A & C'],
  note:'BACK-REFERENCE to Q5 immediately above, the 35-year-old man with INFECTIOUS posterior uveitis. The word "infectious" is what makes the key defensible against option D, so the restatement must carry it.' },

{ n:7, p:69, key:'B',
  stem:'A 35-year-old male patient presented with floaters and blurry vision. Examination revealed snow balls and small banking. What is the best line of treatment for such a patient?',
  opts:['Spectacles','Intravitreal steroid injection','PRP','Surgery'],
  note:'"small banking" as printed — the intended term is "snow banking", which Q17 on p.71 spells correctly. Not corrected here.' },

{ n:8, p:69, key:'C',
  stem:'Which of the following anatomical structures is part of the uveal tract?',
  opts:['Lens','Sclera','Ciliary body','Vitreous cavity'],
  note:'' },

{ n:9, p:69, key:'A',
  stem:'All of the following are true regarding anterior uveitis except?',
  opts:['It is mostly bilateral','It it mostly idiopathic','It usually causes photophobia and ocular pain','None of the above'],
  note:'SEAM 1. Stem and options A-D close p.69; the key "Answer: A" is orphaned at the top of p.70. Option B prints "It it mostly idiopathic" (misprint M2).' },

{ n:10, p:70, key:'A',
  stem:'Which of the following is true regarding the anatomy of uveal tract?',
  opts:['Iris stroma is located posterior to iris pigment epithelial cells','Iris root is the outer edge of iris attached to sclera','Aqueuos humor secretion is done by pars plicata','Choroid is the most posterior layer of uvea'],
  note:'⚠️ PRINTED DEFECT D1 — the key selects the only FALSE option of four. "Aqueuos" as printed (misprint M3). Key staged as printed.' },

{ n:11, p:70, key:'C',
  stem:'Which of the following is described as (proteins circulating in the aqueous secondary to inflammation and increased vascular permeability)?',
  opts:['Hypopyon','Keratic precipitates','Aqueous flare / plasmoid aqueous','None of the above'],
  note:'The parenthesised stem is lifted near-verbatim from ophthalmology.pdf p.135, and so is the keyed option including the "/ plasmoid aqueous" alternative.' },

{ n:12, p:70, key:'C',
  stem:'In iridocyclitis, which of the following is the expected change that will occur in intraocular pressure?',
  opts:['It decreases','It increases','It may either decrease or increase','It is not affected'],
  note:'Option C is lettered "C:" with a colon in the original (misprint M4). See divergence X2 against opqb-t10-447.' },

{ n:13, p:70, key:'B',
  stem:'Which of the following is not among the functions of ciliary body?',
  opts:['Accommodation','Aqeuous humor drainage','Attachment to zonular fibres keeping the lens in place','None of the above'],
  note:'"Aqeuous" as printed (misprint M5) — a different misspelling of the same word from Q10 three questions earlier.' },

{ n:14, p:70, key:'B',
  stem:'What is the rationale for using cycloplegic-mydriatic topical medications in a patient with iridocyclitis?',
  opts:['To suppress excessive lacrimation','To decrease photophobia and pain','To improve vision','All of the above','None of the above'],
  note:'SEAM 2. Stem and all five options close p.70; the key "Answer: B" is orphaned at the top of p.71.' },

{ n:15, p:71, key:'C',
  stem:'Which of the following is described as (collection of neutrophils and exudates in the inferior part of anterior chamber)?',
  opts:['Aqueous flare','Keratic precipitates','Hypopyon','Hyphema','None of the above'],
  note:'Parenthesised stem lifted near-verbatim from ophthalmology.pdf p.134. Same construction as Q11, and the two share three of their option strings — a deliberate paired menu, not a reprint.' },

{ n:16, p:71, key:'D',
  stem:'Which of the following is the innermost layer of the choroid?',
  opts:['Medium-diameter blood vessel layer','Large-diameter blood vessel layer',"Choriocapillaris","Bruch's membrane"],
  note:'Mirrored by Q24 on p.73, which asks for the OUTERMOST layer from the identical four options in the identical order and keys B. Discriminating token: innermost vs outermost.' },

{ n:17, p:71, key:'B',
  stem:'Snow balls and snow banking are characteristic of which of the following diseases?',
  opts:['Anterior uveitis','Intermediate uveitis','Posterior uveitis','All of the above'],
  note:'⚠️ DIVERGENCE X1 — opqb-t10-433 asks this and keys POSTERIOR uveitis. Both project sources back the House key.' },

{ n:18, p:71, key:'E',
  stem:'Which of the following events happens when the ciliary muscle contracts?',
  opts:['Zonlues of Zinn become contracted','Lens becomes convex','Accommodation for near vision is enhanced','A & B','B & C'],
  note:'"Zonlues" as printed (misprint M6). Mirrored by Q19 — same five-slot structure, "relaxes" for "contracts", and options B and E altered.' },

{ n:19, p:71, key:'D',
  stem:'Which of the following events happens when the ciliary muscle relaxes?',
  opts:['Zonlues of Zinn become contracted','Lens becomes flattened','Accommodation for near vision is enhanced','A & B','B & C'],
  note:'⚠️ SEAM 3, THE ONLY SPLIT OPTION LIST IN THE CHAPTER. Stem and options A-D close p.71; option E ("E . B & C", misprint M7) and the key "Answer: D" open p.72. "Zonlues" as printed. Discriminating token against Q18: contracts vs relaxes, and option B convex vs flattened.' },

{ n:20, p:72, key:'C',
  stem:'What is the most common cause of iridocyclitis?',
  opts:['Infectious diseases','Connective tissue diseases','Idiopathic','Trauma','None of the above'],
  note:'' },

{ n:21, p:72, key:'A',
  stem:'A patient with iridocyclitis was found to have WBC clumps on the back surface of the cornea. Which of the following might occur as a complication of that condition?',
  opts:['Glaucoma','Anterior synechiae','Hypotony','Corneal erosions'],
  note:'⚠️ PRINTED DEFECT D2 — option C, Hypotony, is arguably also true. Key staged as printed. The stem paraphrases the book’s definition of keratic precipitates without naming them.' },

{ n:22, p:72, key:'A',
  stem:"A 28-year-old female patient complains of ocular pain, excessive lacrimation together with diminished vision. Examination revealed keratic precipitates, hypopyon and cliliary injection with violaceous hue. Which of the following is a usual cause for the patient's condition?",
  opts:['Ankylosing spondylitis','Diabetic retinopathy','Open-angle glaucoma','Retinal detachment'],
  note:'Q2’s stem reprinted verbatim including the "cliliary" misprint (M1), with a new question sentence and a completely new option menu. NOT a duplicate of Q2 — see the duplicate list.' },

{ n:23, p:72, key:'B',
  stem:'Vogt Koyanagi Harada syndrome requires all of the following criteria to be diagnosed except?',
  opts:['Absence of history of penetrating eye trauma','Unilateral granulomatous panuveitis','Neurological and auditory manifestations','Absence of other ocular diseases','None of the above'],
  note:'The eponym is printed without hyphens. The five printed criteria in ophthalmology.pdf p.140 include BILATERAL granulomatous panuveitis, which is what makes B the exception.' },

{ n:24, p:73, key:'B',
  stem:'Which of the following is the outermost layer of the choroid?',
  opts:['Medium-diameter blood vessel layer','Large-diameter blood vessel layer',"Choriocapillaris","Bruch's membrane"],
  note:'Identical option list and order to Q16, opposite question, different key. Discriminating token: outermost vs innermost.' },

{ n:25, p:73, key:'B',
  stem:'All of the following are among the functions of the choroid except?',
  opts:['Nutrition and gas exchange','Protection of retina','Light absorption','None of the above'],
  note:'⚠️ PRINTED DEFECT D3 — the key rests on the book listing only two choroidal functions, not on a printed denial of the third.' },

{ n:26, p:73, key:'B',
  stem:'A 28-year-old man presents with eye pain, photophobia, and blurred vision. Slit-lamp exam shows cells and flare in the anterior chamber with a small, irregular pupil. What medication should be started to relieve pain and prevent posterior synechiae?',
  opts:['Topical antibiotic','Cycloplegic','Oral antiviral','Miotic drops'],
  note:'LAST QUESTION OF THE CHAPTER. Its answer line carries NO closing red rule and the lower ~45 % of p.73 is blank — the chapter-end signature in this bank.' }

];
