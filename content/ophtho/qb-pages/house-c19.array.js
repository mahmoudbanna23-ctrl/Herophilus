// house-c19.array.js — House bank (ophthalmology MCQ.pdf), Chapter 19
// "Ocular manifestations of systemic diseases"
// Verbatim staging record. Written before the draft, per the brief.
//
// ⚠️ THE FULL RECORD IS AT THE FOOT OF THIS FILE, AFTER THE ARRAY — boundary proof at
// both ends, page map, the three independent counts, the lettering-gap check, the source
// defect list, the anti-drift pass, the back-references and the fold pointers. This
// header was written first, from the first half-sheet, and is deliberately short.
//
// WHAT THE BANNER LITERALLY PRINTS
//   Book p.118 (PDF sheet 61, LEFT half) opens with a full-width red band, white bold
//   sans-serif text: "19. Ocular manifestations of systemic diseases" — exactly as
//   house-c18.array.js predicted from its own lower-boundary check. Numbering restarts
//   at 1 beneath it. Folio numeral "118" read off the pixels at the foot of the half.
//
// (BOUNDARY PROOF, PAGE MAP, PRINTED COUNT, DEFECT LIST — see the "FINAL RECORD" block
//  at the FOOT of this file, after the array. Everything above the array that is not a
//  direct reading of a page is provisional.)

var HOUSE_C19 = [

  // ─── book p.118 (PDF sheet 61, LEFT half) ───────────────────────────────────

  { n:19, num:1, page:118,
    stem:"A 45-year-old woman with known hyperthyroidism presents with eye redness and a \"staring\" appearance. Examination shows lid retraction, lid lag on downgaze, and mild proptosis. Extraocular movements are restricted, especially on upgaze. What is the most likely diagnosis?",
    options:["Orbital cellulitis","Thyroid eye disease","Myasthenia gravis","Cavernous sinus thrombosis"],
    answer:"B" },

  { n:19, num:2, page:118,
    stem:"A 27-year-old man presents with sudden onset flashes and floaters. Fundus exam confirms a superior rhegmatogenous retinal detachment, but the macula is still flat and attached. What does this indicate about his visual outcome after surgery?",
    options:["Very poor prognosis","Guarded prognosis","Good prognosis","Unpredictable prognosis"],
    answer:"C" },

  // ⚠️ SOURCE DEFECT — the stem is printed "3. 474. Tight glycemic control…". A stray
  // "474." sits between the question number and the stem proper. Confirmed at 3x on a
  // full-resolution crop. Transcribed here EXACTLY as printed, stray numeral included;
  // the draft strips it and records the printed form in the explanation.
  { n:19, num:3, page:118,
    stem:"474. Tight glycemic control of blood sugar level in diabetic patients means that the level of HbA1c needs to be less than which value?",
    options:["6%","7%","8%","9%"],
    answer:"B" },

  // ⚠️ SOURCE DEFECT — the stem prints "hemorhage" (one r), not "hemorrhage".
  // Confirmed at 3x. Kept as printed.
  { n:19, num:4, page:118,
    stem:"An old hypertensive male patient developed sudden acute rise in blood pressure that was accompanied by blurred vision and large subconjunctival hemorhage. Ophthalmoscopy revealed exudative retinal detachment. Which of the following is the most appropriate initial step to be carried out in that patient?",
    options:["Surgical treatment of retinal detachment","Gradual reduction of blood pressure","Vigorous reduction of blood pressure","Vitrectomy"],
    answer:"B" },

  // ─── book p.119 (PDF sheet 61, RIGHT half) ──────────────────────────────────

  { n:19, num:5, page:119,
    stem:"What is the grade of hypertensive retinopathy characterized by (obvious arterial narrowing with focal irregularities)?",
    options:["Grade 1","Grade 2","Grade 3","Grade 4"],
    answer:"B" },

  { n:19, num:6, page:119,
    stem:"What is the grade of HTN retinopathy characterized by (optic disc edema)?",
    options:["Grade 1","Grade 2","Grade 3","Grade 4"],
    answer:"D" },

  // ⚠️ SOURCE DEFECT — "severe pain the left temporal region": the book DROPS the word
  // "in" between "pain" and "the". Confirmed at 3x on a full-resolution crop. Kept as
  // printed.
  { n:19, num:7, page:119,
    stem:"A 66-year-old woman presents with a complaint of acutely diminished vision in the left eye coupled with severe pain the left temporal region. Examination revealed tender and cord-like texture of temporal artery on palpation. Which of the following is the most likely diagnosis?",
    options:["Thyroid eye disease","Multiple sclerosis","Giant cell arteritis","Sarcoidosis","None of the above"],
    answer:"C" },

  { n:19, num:8, page:119,
    stem:"In the previous case, which of the following is the confirmatory diagnostic test / imaging modality?",
    options:["ESR / CRP","X ray","Ultrasound","CT / MRI","Biopsy"],
    answer:"E" },

  // straddle — stem + options A–C on book p.119; options D–E and "Answer: B" on p.120.
  { n:19, num:9, page:119,
    stem:"In the previous case, which of the following is the preferred line of management?",
    options:["NSAIDs","High dose of systemic steroids","Antibiotics","Immunomodulators","None of the above"],
    answer:"B" },

  // ─── book p.120 (PDF sheet 62, LEFT half) ───────────────────────────────────

  { n:19, num:10, page:120,
    stem:"A 60-year-old hypertensive male patient was found by an ophthalmologist to have a light reflex that occupies most of the width of the vessels (copper-wire arterioles). Fundoscopy revealed retinal hemorrhages and exudates. Which of the following is a potential complication for such a patient?",
    options:["Rhegmatogenous retinal detachment","Tractional retinal detachment","Exudative retinal detachment","All of the above"],
    answer:"C" },

  { n:19, num:11, page:120,
    stem:"In the previous case, what is the most important step to prevent further progress of the condition and avoid complications?",
    options:["PRP","Anti-VEGF","Lowering blood pressure in a controlled fashion","None of the above"],
    answer:"C" },

  { n:19, num:12, page:120,
    stem:"A diabetic patient with pre-existing diabetic retinopathy was informed by her ophthalmologist that she developed new blood vessel formation on retina and iris. What's the best line of management for that patient?",
    options:["Anti-VEGF","Focal laser therapy","PRP","Pneumatic retinopexy"],
    answer:"C" },

  { n:19, num:13, page:120,
    stem:"What is the ideal treatment of PDR?",
    options:["Focal laser therapy","PRP","Anti-VEGF","None of the above"],
    answer:"B" },

  // ─── book p.121 (PDF sheet 62, RIGHT half) ──────────────────────────────────

  { n:19, num:14, page:121,
    stem:"What is the ideal treatment of diabetic macular edema?",
    options:["Focal laser therapy","PRP","Anti-VEGF","None of the above"],
    answer:"C" },

  { n:19, num:15, page:121,
    stem:"Which of the following is a potential complication of thyroid eye disease?",
    options:["Exposure keratopathy","Diplopia","Compressive optic neuropathy","Eyelid edema","All of the above"],
    answer:"E" },

  { n:19, num:16, page:121,
    stem:"What is the risk of diabetic retinopathy at the initial time of diagnosis of diabetes mellitus type 2?",
    options:["20%","50%","60%","80%"],
    answer:"A" },

  // ⚠️ SOURCE DEFECT — option B prints "Decreasec corneal sensitivity" (a "c" where the
  // "d" of "Decreased" belongs). Confirmed at 5x. Kept as printed.
  { n:19, num:17, page:121,
    stem:"Which of the following is NOT among the physiological changes that usually accompany pregnancy?",
    options:["Increased IOP","Decreasec corneal sensitivity","Weakness of accommodation","Dryness of the eye"],
    answer:"A" },

  { n:19, num:18, page:121,
    stem:"Which of the following is the retinal lesion resulting from infarction of nerve fiber layer?",
    options:["Microaneurysm","Hard exudate","Soft exudate","Retinal hemorrhage","None of the above"],
    answer:"C" },

  // ─── book p.122 (PDF sheet 63, LEFT half) ───────────────────────────────────

  { n:19, num:19, page:122,
    stem:"Which of the following conditions is commonly associated with venous nicking in the context of hypertensive retinopathy?",
    options:["CRAO","BRAO","CRVO","BRVO"],
    answer:"D" },

  { n:19, num:20, page:122,
    stem:"Which of the following is the most suitable treatment for macular edema?",
    options:["Panretinal photocoagulation","Steroid eye drops","Intravitreal injection of ranibizumab","Vitrectomy"],
    answer:"C" },

  { n:19, num:21, page:122,
    stem:"Which of the following can NOT be found in a patient with sarcoidosis?",
    options:["Iridocyclitis","Retinal hemorrhages","Hypocalcemia","Abnormal chest X-ray with hilar lymphadenopathy","None of the above"],
    answer:"C" },

  { n:19, num:22, page:122,
    stem:"What is the risk of diabetic retinopathy 10 years after diagnosis of type 1 DM?",
    options:["20%","50%","60%","80%"],
    answer:"C" },

  { n:19, num:23, page:122,
    stem:"What is the percentage of those with severe NPDR who will develop PDR within one year?",
    options:["20%","40%","60%","80%","None of the above"],
    answer:"B" },

  // ─── book p.123 (PDF sheet 63, RIGHT half) ──────────────────────────────────

  { n:19, num:24, page:123,
    stem:"What is the percentage of diabetic patients who will reach the stage of PDR?",
    options:["5%","10%","15%","20%","None of the above"],
    answer:"A" },

  { n:19, num:25, page:123,
    stem:"Which of the following is NOT among the complications observed in a patient with sarcoid eye disease?",
    options:["Glaucoma","Cataract","Anterior synechiae","None of the above"],
    answer:"C" },

  { n:19, num:26, page:123,
    stem:"Which of the following is true regarding thyroid eye disease?",
    options:["It occurs with hyperthyroidism","It can occur with hypothyroidism","It can occur with good hormonal control of thyroid gland dysfunction","All of the above"],
    answer:"D" },

  { n:19, num:27, page:123,
    stem:"A 62-year-old diabetic woman with pre-existing proliferative diabetic retinopathy (PDR) is at risk of developing which of the following?",
    options:["Rhegmatogenous retinal detachment","Tractional retinal detachment","Exudative retinal detachment","All of the above"],
    answer:"B" },

  { n:19, num:28, page:123,
    stem:"Which of the following is a well-known cause of diminished visual capability in a diabetic patient?",
    options:["Macular edema","Exudative retinal detachment","Posterior vitreous detachment","All of the above"],
    answer:"A" },

  // ─── book p.124 (PDF sheet 64, LEFT half) ───────────────────────────────────

  { n:19, num:29, page:124,
    stem:"Which of the following is among the criteria needed to diagnose NPDR?",
    options:["Widespread large blot hemorrhages in 4 quadrants","Venous tortuosity in 2 quadrants","IRMA in 1 quadrant","All of the above combined together","Any of the above"],
    answer:"E" },

  { n:19, num:30, page:124,
    stem:"Ocular signs that manifest in patients with multiple sclerosis include all of the following except?",
    options:["Ptosis","Nystagmus","RAPD","Peripheral scotoma"],
    answer:"D" },

  // ⚠️ SOURCE DEFECT — the stem prints "worldide?" for "worldwide?". Confirmed at 5x.
  // Kept as printed.
  { n:19, num:31, page:124,
    stem:"Which of the following are the leading causes of irreversible blindness worldide?",
    options:["Cataract","Presbyopia","AMD & glaucoma","Hypertensive retinopathy"],
    answer:"C" },

  { n:19, num:32, page:124,
    stem:"Which of the following is true regarding the effect of tight glycemic control?",
    options:["It reduces the incidence of macular edema","It reduces the need for PRP","It slows the progression of DR","All of the above"],
    answer:"D" },

  { n:19, num:33, page:124,
    stem:"A patient with known diabetic retinopathy was found to have IRMA in 1 quadrant and venous tortuosity in 2 quadrants. Which of the following is the right grading of that patient's retinopathy?",
    options:["NPDR","Severe NPDR","PDR","None of the above"],
    answer:"B" },

  // ─── book p.125 (PDF sheet 64, RIGHT half) ──────────────────────────────────

  { n:19, num:34, page:125,
    stem:"A 72-year-old woman presents with sudden, painless loss of vision in her right eye. She reports new headaches, scalp tenderness when combing her hair, and jaw pain when chewing. ESR and CRP are markedly elevated. What is the most appropriate diagnostic test?",
    options:["MRI orbit","Temporal artery biopsy","Carotid Doppler","ANA testing"],
    answer:"B" },

  // ⚠️ SOURCE DEFECT (cosmetic) — the answer line prints "Answer: C." with a TRAILING
  // FULL STOP. It is the only answer line in the chapter that carries one; confirmed at
  // 6x. Recorded here, not repaired in the `answer` field.
  { n:19, num:35, page:125,
    stem:"A 32-year-old woman had papilledema 6 months ago due to untreated idiopathic intracranial hypertension. Now she presents with slowly worsening vision. Fundus exam shows an optic disc that is pale with residual gliosis and slightly blurred margins—not the hyperemic swollen disc seen previously. What is the most likely diagnosis now?",
    options:["Primary optic atrophy","Papilledema","Secondary optic atrophy","Optic disc edema from uveitis"],
    answer:"C" },

  { n:19, num:36, page:125,
    stem:"Which of the following is a common ocular complication of diabetes mellitus?",
    options:["Vitreous hemorrhage","Retinitis pigmentosa","Optic nerve hypoplasia","Keratoconus"],
    answer:"A" },

  { n:19, num:37, page:125,
    stem:"Which of the following findings is commonly seen in advanced proliferative diabetic retinopathy and can lead to neovascular glaucoma?",
    options:["Iris heterochromia","Neovascularization of the iris","Iris coloboma","Persistent pupillary membrane"],
    answer:"B" },

  // straddle — stem begins on book p.125 and breaks after "…true disc edema. What is";
  // it resumes at the top of p.126 with "likely grade of hypertensive retinopathy?".
  // Options and "Answer: D" are all on p.126.
  // ⚠️ SOURCE DEFECT — the resumed sentence reads "What is likely grade of hypertensive
  // retinopathy?": the article "the" is DROPPED across the page break. Both sides of the
  // join were cropped at 4x/5x and read; nothing is missing from the render. Kept as
  // printed.
  { n:19, num:38, page:125,
    stem:"A 55-year-old man with uncontrolled hypertension presents with sudden blurred vision. Fundus examination shows flame-shaped hemorrhages, cotton-wool spots, and a star-shaped pattern of hard exudates around the macula. The optic disc margins are elevated and blurred, indicating true disc edema. What is likely grade of hypertensive retinopathy?",
    options:["Grade 1","Grade 2","Grade 3","Grade 4"],
    answer:"D" },

  // ─── book p.126 (PDF sheet 65, LEFT half) ───────────────────────────────────

  { n:19, num:39, page:126,
    stem:"A 55-year-old man with poorly controlled diabetes presents with sudden blurry vision in both eyes. Refraction shows a new myopic shift compared to his previous prescription. No cataract progression is noted. What is the most likely cause of his refractive change?",
    options:["Corneal edema","Hyperglycemia causing increased lens curvature","Posterior subcapsular cataract","Vitreous syneresis"],
    answer:"B" },

  // NOTE — the book sets "-2.00 D" with a typographic MINUS (U+2212), not a hyphen;
  // normalised to ASCII here as transcription hygiene, the same way the book's curly
  // apostrophes are. Confirmed at 4x.
  { n:19, num:40, page:126,
    stem:"A 42-year-old man presents with a 3-week history of progressive difficulty seeing distant objects, while his near vision has paradoxically improved. He denies eye pain, diplopia, or headache. Refraction reveals a -2.00 D shift in both eyes compared to his previous prescription. Slit-lamp examination shows a clear lens, normal cornea, and no signs of uveitis. Fundus examination is unremarkable with no microaneurysms or hemorrhages. OCT macula is normal. In clinic, he is found to have polyuria and mild dehydration. What is the most likely explanation for his refractive change?",
    options:["Early nuclear sclerotic lens changes","Accommodative spasm","Undiagnosed diabetes causing osmotic swelling of the lens","Early posterior subcapsular cataract"],
    answer:"C" },

  { n:19, num:41, page:126,
    stem:"A diabetic patient had a recent episode of high blood sugar that caused a temporary myopic shift. Today he reports that his vision suddenly returned to normal without changing his glasses. His blood glucose test in the clinic is low. What is the most likely explanation for the return to normal vision?",
    options:["Corneal swelling","Hypoglycemia","New cataract formation","Vitreous detachment"],
    answer:"B" },

  // ─── book p.127 (PDF sheet 65, RIGHT half) — LAST page of the chapter ───────
  // Below Q43's "Answer: D" the half-sheet is BLANK to the folio rule. No red band, no
  // further question, no orphaned option.

  { n:19, num:42, page:127,
    stem:"What is the first-line treatment for neovascular (wet) age-related macular degeneration?",
    options:["Laser photocoagulation","Oral steroids","Anti-VEGF injections","Photodynamic therapy"],
    answer:"C" },

  { n:19, num:43, page:127,
    stem:"What is the appropriate management for age-related macular degeneration when the macula has already developed a disciform scar?",
    options:["Anti-VEGF injections","Photodynamic therapy","Laser photocoagulation","No treatment"],
    answer:"D" },

];

// ════════════════════════════════════════════════════════════════════════════════
// FINAL RECORD — written after all ten half-sheets were read, plus one page past.
// ════════════════════════════════════════════════════════════════════════════════
//
// CHAPTER TITLE AS PRINTED
//   "19. Ocular manifestations of systemic diseases" — full-width red band, white bold
//   sans-serif, on book p.118. No sub-title, no epigraph, no contents list.
//
// BOUNDARY PROOF, BOTH ENDS, READ OFF THE PIXELS
//   • Upper end — book p.118 (PDF sheet 61, LEFT half) carries the chapter 19 banner and
//     Q1 immediately beneath it. house-c18.array.js had already recorded this half-sheet
//     as chapter 18's lower boundary; the two readings agree independently.
//   • Lower end — book p.127 (PDF sheet 65, RIGHT half) ends with Q43's "Answer: D", and
//     the WHOLE of the half-sheet below that line is blank down to the folio rule. No red
//     band, no orphaned option, no Q44. Book p.128 (PDF sheet 66, LEFT half) was RENDERED
//     AND READ one page past the last question, per the standing rule: it opens with the
//     next red band, "20. Drugs & the eye", numbering restarted at 1 ("1. A 65-year-old
//     woman is scheduled for cataract surgery under retrobulbar anesthesia…"). Chapter 19
//     is therefore closed at p.127 by direct observation, not by inference.
//   ⇒ Chapter 19 = book pp.118–127 = PDF sheets 61–65. TEN book pages, five PDF sheets,
//     ten half-sheets, every one of them read.
//
// THE PAGE MAP I ACTUALLY USED
//   A4 LANDSCAPE, TWO book pages per PDF sheet, left = even, right = odd. The folio
//   numeral was CONFIRMED ON EVERY HALF at the foot of the page — 118, 119, 120, 121,
//   122, 123, 124, 125, 126, 127, and 128 on the page past the end. None was derived.
//   Renders at 200 dpi in <scratchpad>\ocr\h19\.
//     p-061.png = book 118 | 119   (118 = banner + Q1–Q4 | 119 = Q5–Q8, then Q9's stem
//                                   and options A–C only)
//     p-062.png = book 120 | 121   (120 = Q9's options D–E + answer, Q10–Q13
//                                   | 121 = Q14–Q18)
//     p-063.png = book 122 | 123   (122 = Q19–Q23 | 123 = Q24–Q28)
//     p-064.png = book 124 | 125   (124 = Q29–Q33 | 125 = Q34–Q37, then Q38's stem, which
//                                   breaks mid-sentence after "…true disc edema. What is")
//     p-065.png = book 126 | 127   (126 = rest of Q38's stem + options + answer, Q39–Q41
//                                   | 127 = Q42, Q43; blank below Q43's answer line)
//     p-066.png = book 128 | 129   (rendered PAST the last question: the "20. Drugs & the
//                                   eye" banner is confirmed at p.128 — chapter closed)
//   p-067.png (book 130 | 131) was not needed and was not read.
//
// ⚠️ WHERE THE BRIEF WAS RIGHT, AND WHERE IT WAS WRONG
//   • RIGHT — the page arithmetic. PDF sheet N carries book pages 2N−4 and 2N−3, and it
//     held on all six sheets touched. Every folio was still read off the pixels.
//   • RIGHT — the banner is on book p.118, the chapter-20 banner on book p.128, and the
//     question count is 43. All three were re-derived here and all three match. Unlike
//     ch.18, THERE IS NOTHING IN THIS BRIEF TO OVERRULE.
//   • The brief's one open worry — "if a number is skipped, say so" — does not arise.
//     See the count block below.
//
// PRINTED COUNT — 43 QUESTIONS, NUMBERED 1–43, NO GAP AND NO REPEAT
//   Counted THREE independent ways, and all three agree:
//     (1) Forwards from the banner on p.118 to Q43 on p.127, question number by question
//         number: 1,2,3,…,43 with every integer used exactly once. There is no jump of
//         the ch.18 "no Q11" shape anywhere in this chapter.
//     (2) By counting the inline "Answer:" lines on each half-sheet, which is a DIFFERENT
//         instrument from the numbering because it does not read the numerals:
//           p.118 = 4 · p.119 = 4 · p.120 = 5 · p.121 = 5 · p.122 = 5 · p.123 = 5 ·
//           p.124 = 5 · p.125 = 4 · p.126 = 4 · p.127 = 2   → 43.
//         ⚠️ The two straddles are what make the per-page answer count differ from the
//         per-page stem count: p.119 starts five questions but prints only four answers
//         (Q9's is on p.120), and p.125 starts five but prints only four (Q38's is on
//         p.126). The two offsets cancel in the total — which is exactly why the parts
//         were counted and not just the sum.
//     (3) By parsing the array below: 43 entries, numbers strictly increasing 1→43,
//         no gap, no duplicate, per-page entry counts
//         {118:4, 119:5, 120:4, 121:5, 122:5, 123:5, 124:5, 125:5, 126:3, 127:2} = 43.
//   ⇒ The brief's "questions numbered 1-43" is CORRECT and is now measured, not assumed.
//   Answers are printed INLINE beneath each option list, House style. There is no pooled
//   key page and no key section anywhere in the chapter.
//
// ⚠️ NO LETTERING GAP ANYWHERE IN THIS CHAPTER.
//   Every one of the 43 menus was checked letter by letter, on a purpose-built montage
//   that stitched the option-letter column out of all ten half-sheets into one image, so
//   that the letters could be scanned as a single column rather than page by page. Every
//   menu runs from A upward with no gap and no repeat. Menu lengths are 4 or 5 only:
//   thirty-four 4-option menus, nine 5-option menus (Q7, Q8, Q9, Q15, Q18, Q21, Q23, Q24,
//   Q29). The array's own option-count distribution ({4:34, 5:9}) agrees.
//   ⇒ For every question in this chapter the printed key letter and the zero-based index
//   into the printed option order AGREE (A=0, B=1, C=2, D=3, E=4). Derived from the
//   printed POSITION first, then checked against the letter, on the montage: 43 for 43.
//
// PRINTED EXPLANATION BOXES — ZERO. FIGURES — ZERO.
//   Counted page by page on this chapter's own ten half-sheets, not carried forward from
//   chapter 18: every band between one question and the next contains only the option
//   list, the "Answer:" line and the red rule. No shaded box, no photograph, no diagram,
//   no table. All ten half-sheets are pure text. This is the NINETEENTH consecutive
//   chapter with zero of each, and it was still counted rather than assumed.
//   Markers required in the draft = 43 entries − 0 boxes = 43.
//
// ⚠️ ORPHANED ANSWERS / ORPHANED OPTIONS — TWO STRADDLES, BOTH RECOVERED
//   Every question was checked one at a time for a printed answer line; all 43 have one.
//     • Q9  — stem and options A–C ("A. NSAIDs", "B. High dose of systemic steroids",
//             "C. Antibiotics") on book p.119; options D–E ("D. Immunomodulators",
//             "E. None of the above") and "Answer: B" at the top of p.120. Read only
//             p.119 and Q9 looks like a three-option question with no key — and the KEY
//             option is present, but the menu is not, so the key letter would still be
//             unverifiable.
//     • Q38 — stem BEGINS on book p.125 and breaks mid-sentence after "…indicating true
//             disc edema. What is"; it resumes at the top of p.126 with "likely grade of
//             hypertensive retinopathy?". Options and "Answer: D" are all on p.126. Read
//             only p.125 and Q38 has no question, no menu and no key. Both sides of this
//             join were cropped at 4x and 5x and read against each other.
//   The `page` field carries the page the STEM STARTS on; both straddles are named in a
//   `// straddle` comment on their own entry.
//
// ⚠️ SOURCE DEFECTS — FIVE, EVERY ONE CONFIRMED ON A FULL-RESOLUTION CROP AT 3x–6x AND
//   PRESERVED IN THE ARRAY EXACTLY AS PRINTED. None is repaired here; the draft repairs
//   them and quotes the printed form in the explanation.
//     Q3  stem — "3. 474. Tight glycemic control…"   A STRAY "474." sits between the
//                question number and the stem. Almost certainly a number left behind from
//                whatever pooled bank this item was lifted from. Transcribed into `stem`
//                as the leading "474. " because that is where the page puts it.
//     Q4  stem — "subconjunctival hemorhage"          (one r, for "hemorrhage")
//     Q7  stem — "severe pain the left temporal region"  the word "in" is DROPPED
//     Q17 opt B — "Decreasec corneal sensitivity"     (a "c" for the "d" of "Decreased")
//     Q31 stem — "irreversible blindness worldide?"   (for "worldwide")
//     Q38 stem — "What is likely grade of hypertensive retinopathy?"  the article "the"
//                is DROPPED, across the page break. Not a render fault: both halves of
//                the join were cropped and read, and nothing is missing from the render.
//   ⚠️ ONE FURTHER DEFECT, COSMETIC, RECORDED BUT NOT CARRIED INTO A FIELD:
//     Q35 answer line prints "Answer: C." WITH A TRAILING FULL STOP. Confirmed at 6x. It
//     is the only answer line in the chapter that carries one; all 42 others print
//     "Answer: <letter>" bare. The `answer` field holds "C".
//
// TRANSCRIPTION HYGIENE — the only normalisations applied, all cosmetic, all re-read
//   against the pixels:
//     • The book's curly apostrophes (’) are written as ASCII ' — as house-c18.array.js
//       does. Affects Q12 ("What's") and Q33 ("patient's").
//     • Q40's "−2.00 D" is set on the page with a typographic MINUS (U+2212); written
//       here as an ASCII hyphen-minus.
//     • Q35's em dash ("margins—not") is PRESERVED as an em dash, because it is
//       load-bearing punctuation inside the sentence rather than a character-set artefact.
//   AMERICAN SPELLING IS PRESERVED THROUGHOUT AND WAS NOT BRITISH-ISED: "hemorrhages",
//   "hemorrhage", "edema", "papilledema", "hyperemic", "anesthesia", "characterized",
//   "Neovascularization", "glycemic", "Hypocalcemia". Checked against the page every time
//   one of these words appears.
//
// ⚠️ ANTI-DRIFT PASS — the ch.18 fault (14 of 26 stems silently copy-edited into authored
//   prose) was actively guarded against here, not merely avoided by intention:
//     • The six longest vignette stems (Q10, Q12, Q34, Q35, Q40, Q41) were re-cropped at
//       2.2x into a single montage and read a SECOND time, word by word, against what had
//       already been written into this file. All six matched exactly, including the mixed
//       tenses ("was found by an ophthalmologist to have", "had papilledema 6 months ago…
//       Now she presents"), the parenthetical "(copper-wire arterioles)", "(PDR)",
//       "(wet)", "(obvious arterial narrowing with focal irregularities)" and
//       "(optic disc edema)", and the question marks that fall AFTER the closing bracket.
//     • Q30's stem ends "…include all of the following except?" — a question mark after
//       "except", which reads wrong but IS what the page prints. Not smoothed.
//     • Options are transcribed in PRINTED ORDER on every question; nothing was
//       alphabetised, re-ordered or tidied.
//
// BACK-REFERENCES (THREE; every antecedent READ off the page, not assumed)
//   • Q8, Q9 "In the previous case…" → antecedent Q7, the 66-year-old woman with acutely
//     diminished vision, temporal pain and a tender cord-like temporal artery on p.119.
//     Q8 follows Q7 directly; Q9 does NOT — its literal "previous" neighbour is Q8, which
//     is itself a follow-up, not a case. Confirmed by CONTENT as well as by position:
//     Q8's key (biopsy) and Q9's key (high-dose systemic steroids) are the confirmatory
//     test and the treatment of GIANT CELL ARTERITIS, which is Q7's own key.
//   • Q11 "In the previous case…" → antecedent Q10, the 60-year-old hypertensive with
//     copper-wire arterioles on p.120. Q11 follows Q10 directly. Q11's key (lowering
//     blood pressure in a controlled fashion) is the management of Q10's subject.
//   ⚠️ EVERY BACK-REFERENCE WAS HAND-READ AGAINST ITS ANTECEDENT *AND* AGAINST ITS OWN
//   KEY. Q8 and Q9 restate NOTHING of Q7's findings and never name giant cell arteritis,
//   because that is Q7's own key; Q11 likewise never names hypertensive retinopathy or
//   copper-wiring, because Q10's menu turns on the type of detachment. If any of the three
//   is spliced into the app without its antecedent's vignette in scope, it is
//   unanswerable — that repair belongs to the draft, and the repaired stem must be
//   re-read against its antecedent before it ships.
//
// FOLD / DUPLICATE CANDIDATES — NOT ASSESSED HERE. This file is the verbatim staging
//   record only; the six-stage sweep against chapters 1–18 and against the Grade Gain
//   topics is the draft stage's work and THE HUB DECIDES. Two shapes worth pointing the
//   sweep at, named because they were noticed while reading and would be cheap to miss:
//     • Q5 and Q6 share an identical four-option menu ("Grade 1"…"Grade 4"), and so does
//       Q38. A SHARED OPTION MENU PAIRS QUESTIONS, IT NEVER FOLDS THEM: Q5 asks which
//       grade shows obvious arterial narrowing with focal irregularities (key B), Q6 which
//       shows optic disc edema (key D), Q38 which grade a described fundus is (key D).
//       Three different discriminating tokens; three separate questions.
//     • Q10 and Q27 share the menu "Rhegmatogenous / Tractional / Exudative / All of the
//       above" and both ask what a patient is at risk of — but Q10's patient is
//       HYPERTENSIVE (key C, exudative) and Q27's is a PDR diabetic (key B, tractional).
//       Same menu, opposite keys. Do not fold, and do not let a stem-only matcher pair
//       them.
//     • Q13, Q14, Q20, Q32, Q42, Q43 are short treatment-recall items of exactly the kind
//       that recur across chapters; the sweep should grep the SIGN and the drug, not the
//       disease name alone.
