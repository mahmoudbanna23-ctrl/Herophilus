// VERBATIM STAGING — Dr. HOUSE in Ophthalmology MCQs
// Source file: Semester 8\Opthalmo\Questions\ophthalmology MCQ.pdf
// Part A, Chapter 8: "8. The cornea" — book pp.55-61 (PDF sheets 29R-32R)
//
// ================================================================
// WHAT THE BANNER LITERALLY PRINTS
// ================================================================
// Book p.55, red full-width banner, white bold sans:
//
//     8. The cornea
//
// Numbered 8, in sequence after chapter 7 ("7. The sclera", book p.49), with
// its own Q1 restarting the numbering. The "House printed 9 twice" defect
// recorded elsewhere in this project does NOT recur at this seam.
// Ids therefore carry the chapter token: `opmcq-c8-<n>`.
//
// ================================================================
// PAGE ARITHMETIC — RE-VERIFIED, NOT ASSUMED
// ================================================================
// A4 LANDSCAPE, TWO BOOK PAGES PER PDF SHEET, left = even, right = odd:
//     book pages on PDF sheet N  =  2N-4 (left) and 2N-3 (right)
//     PDF sheet for book page b  =  floor(b/2) + 2
// Checked against the printed folio numeral in the red circle at the foot of
// every half-page actually opened: 55, 56 ‖ 57, 58 ‖ 59, 60 ‖ 61, 62.
// The brief's arithmetic was correct in every particular.
// Rendered with pdftoppm -r 200, cropped to halves at -x 0/-x 1169 -W 1170.
//
// PAGE MAP ACTUALLY USED
//   sheet 29 = book 54 ‖ 55 -> [left: end of ch.7, not re-read] ‖ red banner
//                              "8. The cornea", Q1-Q4 complete with keys
//   sheet 30 = book 56 ‖ 57 -> Q5-Q8 complete, Q9 stem+options (key overleaf)
//                            ‖ Q9's key, Q10-Q13 complete, then the
//                              question printed "214." (stem+options; key
//                              overleaf)
//   sheet 31 = book 58 ‖ 59 -> "214."'s key, Q14-Q17 complete, Q18 stem +
//                              options A and B only
//                            ‖ Q18's options C and E + key, Q19-Q21 complete,
//                              Q22 stem+options (key overleaf)
//   sheet 32 = book 60 ‖ 61 -> Q22's key, Q23-Q26 complete, then an
//                              UNNUMBERED question, stem + options A and B
//                            ‖ the unnumbered question's options C and D +
//                              key, Q27-Q28 complete. Chapter ENDS with Q28;
//                              roughly half of p.61 below its answer line is
//                              blank
//   sheet 33 = book 62 ‖ 63 -> BOUNDARY PROOF (left half)
//
// ⚠️ THE BOUNDARY PROOF, AND WHAT THE NEXT BANNER LITERALLY PRINTS.
//    Sheets 29 through 40 were rendered (book pp.54-76) — eight sheets past
//    the end, well past the standing "render one past" rule. The proof sheet
//    is **PDF sheet 33, LEFT half = book p.62**, and its red banner literally
//    prints:
//
//        9. The crystalline lens
//
//    Numbered 9, in sequence after 8, with its own Q1 ("A 70-year-old man
//    presents with a white, opaque lens and cannot see the chart...", key C,
//    mature cataract) and numbering restarted. Identified by CONTENT as well
//    as numeral: four cataract questions on that page alone. Sheets 33R-40
//    were rendered but not opened; chapter 9 is not this job.
//
// ================================================================
// COUNTS — every one measured, none derived
// ================================================================
// PRINTED COUNT: **30 questions**, but the printed NUMBERS run only to 28,
//    because two questions are mis-labelled. Measured by reading every
//    printed number on all seven half-pages in order:
//        1 2 3 4 5 6 7 8 9 10 11 12 13 [214] 14 15 16 17 18 19 20 21 22 23
//        24 25 26 [no number] 27 28
//    The run is otherwise unbroken. This bank prints no contents page and no
//    per-chapter count, so there is no promised figure to compare against.
//
// ⚠️ THE BRIEF EXPECTED A LONG CHAPTER ("Grade Gain's cornea topic runs 52").
//    IT IS 30. Seven book pages, not the ~13 a 52-question chapter would need.
//    Reported rather than worked around: nothing was skipped, the boundary was
//    proved by banner, and eight sheets past the end were rendered.
//
// EXPLANATION BOXES: **ZERO.** Counted on all seven book pages. Every question
//    is stem, options, a red horizontal rule, "Answer: <letter>", a red rule.
//    Eight chapters in, this bank has printed zero explanation boxes anywhere.
//    Re-counted here, not carried forward.
//    ⇒ MARKER ARITHMETIC: markers = entries − boxes = 30 − 0 = **30**.
//      All 30 drafted entries must end `explanation` with exactly
//      "Written for this bank — ophthalmology MCQ.pdf prints no explanation
//      here." and none may carry it in `source`.
//
// FIGURES: **ZERO.** All seven book half-pages were rendered at 200 dpi and
//    looked at in full. Not one photograph, ultrasound, diagram, line drawing
//    or table. NO CROP BOUNDS ARE RECORDED BELOW BECAUSE THERE IS NOTHING TO
//    BOUND, and the brief's instruction to check for a printed horizontal rule
//    or option text under a photograph has nothing to fire on. (Chapter 7 was
//    the same. The only ink other than type on these pages is the red header
//    band, the red answer rules and the red folio circle.)
//
// ================================================================
// MISPRINTS — five, all recorded, none corrected in `key` or `opts` order
// ================================================================
// M1. **Q5 PRINTS THE OPTION LETTER B TWICE, WITH IDENTICAL TEXT.** p.56, five
//     option lines reading A. Dacryocystitis / B. Entropion / B. Entropion /
//     C. Trigeminal nerve palsy / D. None of the above. Verified at 400 dpi —
//     it is a genuine duplicated line, not a scan artefact. The key is B.
//     Because the duplicate carries the SAME letter and the SAME text, the
//     printed key B is unambiguous. Staged with five opts as printed; the
//     draft collapses the duplicate to four options and records the fault.
//
// M2. **THE QUESTION AFTER Q13 IS NUMBERED "214."** p.57, verified at 400 dpi.
//     It sits between the printed 13 and the printed 14 and is plainly the
//     chapter's fourteenth question, but the very next question is ALSO
//     numbered 14. Staged with n:'214' (a string, deliberately) so that
//     nothing downstream silently coerces it to a position.
//     ⚠️ **ID RULING NEEDED FROM THE HUB.** The draft uses `opmcq-c8-214`,
//     i.e. id = printed number, per the brief's rule. The alternative
//     (`opmcq-c8-14` for this one and `opmcq-c8-14b` for the Munson question)
//     was rejected because it renames a question the book numbers 14.
//
// M3. **Q18'S OPTION LETTERS SKIP D**: A. Vitamin A / B. Vitamin B /
//     C. Vitamin C / **E.** Vitamin D. pp.58-59, and the four options are
//     themselves split across the page seam (A and B on 58, C and E on 59).
//     Four options, letters A B C E. Key A, which is unaffected.
//
// M4. **ONE QUESTION IS PRINTED WITH NO NUMBER AT ALL.** p.60 foot / p.61 head:
//     "Which term describes small, dot-like areas of epithelial staining on the
//     cornea seen with fluorescein dye?" It sits between the printed 26 and the
//     printed 27. Staged as n:'26b'. Not the same defect as Grade Gain Q126
//     (a question printed with no question SENTENCE) — here the sentence is
//     complete and only the numeral is missing.
//
// M5. **TYPOGRAPHICAL, transcribed verbatim and listed once here** so that the
//     draft's silent repairs are visible: Q6 "Amsler's gird" (for grid) ·
//     Q8 "Flourescine dye" · Q14 "diminshed" · Q15 "In the prevoius case" ·
//     Q17 "conreal perforation" · Q23 "Neithe A nor B" · Q24 "Down's sydnrome".
//     Q2's option E "Geronotoxon" is left exactly as printed — it is the
//     German/older spelling of gerontoxon (arcus senilis) and may be
//     deliberate rather than a slip.
//
// ================================================================
// PAGE-SEAM AUDIT — BOTH ENDS OF EVERY SEAM CHECKED
// ================================================================
// The chapter has three internal seams (56|57, 58|59, 60|61) and both ends of
// each were read. Result: **three orphaned ANSWER lines** and **two split
// OPTION LISTS**. No stem is split across a seam in this chapter — the ch.7
// defect shape (a STEM split at a page break) does not recur here, and it was
// looked for specifically.
//   • Q9   — stem + all five options on p.56; "Answer: C" alone at head of p.57
//   • 214  — stem + all five options on p.57; "Answer: C" alone at head of p.58
//   • Q18  — stem + options A, B at foot of p.58; options C, E + key on p.59
//   • Q22  — stem + all four options on p.59; "Answer: B" alone at head of p.60
//   • 26b  — stem + options A, B at foot of p.60; options C, D + key on p.61
//   ⇒ orphaned-answer count = 3 · split-option count = 2 · split stems = 0
//
// ================================================================
// SCHEMA
// ================================================================
// { n, p, key, stem, opts, note }
//   n    printed question number (string where the printed label is defective)
//   p    BOOK page carrying the stem
//   key  the printed answer LETTER, verbatim
//   opts option TEXT with the letter stripped, in printed order
//   note defects, seams and anything the plain fields cannot carry

var HOUSE_C8 = [

{ n:1, p:55, key:'B',
  stem:"A 70-year-old woman presents with acute redness and severe ocular pain in her right eye. She reports tingling over the right forehead for 2 days. Vision is reduced to 6/18. Slit-lamp exam shows conjunctival injection, fine keratic precipitates, and pseudodendritic corneal epithelial lesions that stain poorly with fluorescein and lack terminal bulbs. Corneal sensation is markedly reduced. Intraocular pressure is elevated at 32 mmHg. What is the most likely diagnosis?",
  opts:["Herpes simplex epithelial keratitis","HZO (Herpes zoster ophthalmicus)","CMV anterior uveitis","Toxic epitheliopathy"],
  note:"First question of the chapter, directly under the banner. Four options." },

{ n:2, p:55, key:'B',
  stem:"A 38-year-old male patient complains of eye pain, excessive tearing and redness. History is significant for severe unilateral facial pain that was followed by appearance of skin vesicles. Which of the following is the most likely diagnosis?",
  opts:["Herpes simplex keratitis","Herpes zoster ophthalmicus","Calcific band keratopathy","Exposure keratopathy","Geronotoxon"],
  note:"Option E printed 'Geronotoxon' — left verbatim. Antecedent of Q3 and Q4." },

{ n:3, p:55, key:'D',
  stem:"In the previous case, which of the following complications can occur?",
  opts:["Neuralgic pain","Lid ptosis, scarring, ectropion and entropion","Scleral and limbal atrophy","All of the above"],
  note:"BACK-REFERENCE. Antecedent READ, not assumed: it is Q2, printed immediately above on the same page (38-year-old male, unilateral facial pain then skin vesicles, herpes zoster ophthalmicus)." },

{ n:4, p:55, key:'B',
  stem:"In the previous case, which of the following is the line of management use to properly treat that condition?",
  opts:["Topical ganciclovir","Oral acyclovir","Systemic steroids","Surgical intervention"],
  note:"BACK-REFERENCE, TWO DEEP. 'The previous case' is still Q2's patient — Q3 is itself a back-reference and introduces no new patient. Read both, did not assume." },

{ n:5, p:56, key:'B',
  stem:"Which of the following is among the complications of herpes zoster ophthalmicus?",
  opts:["Dacryocystitis","Entropion","Entropion","Trigeminal nerve palsy","None of the above"],
  note:"⚠️ MISPRINT M1. FIVE option lines are printed and the LETTER B IS USED TWICE, both times with the text 'Entropion': A. Dacryocystitis / B. Entropion / B. Entropion / C. Trigeminal nerve palsy / D. None of the above. Confirmed at 400 dpi. Because both duplicates carry the same letter AND the same text, the printed key 'B' is unambiguous. Staged verbatim with five entries; the draft ships four options." },

{ n:6, p:56, key:'C',
  stem:"A young boy with Down syndrome presents to the ophthalmologist with conical protrusion and thinning of the cornea. Which of the following is a useful tool for decision making and management of that patient?",
  opts:["Amsler's gird","CT orbit","Pentacam","None of the above"],
  note:"Option A printed 'Amsler's gird' (for grid) — verbatim." },

{ n:7, p:56, key:'E',
  stem:"Which of the following symptoms will be present in a patient with corneal foreign body?",
  opts:["Pain","Excessive lacrimation","Red eye","Photophobia","All of the above"],
  note:"" },

{ n:8, p:56, key:'A',
  stem:"Which of the following is used to detect corneal abrasions?",
  opts:["Flourescine dye","Steroids","Pachymetry","None of the above"],
  note:"Option A printed 'Flourescine dye' — verbatim." },

{ n:9, p:56, key:'C',
  stem:"Herpes simplex virus can cause all of the following ocular conditions except?",
  opts:["Blepharitis","Keratitis","Scleritis","Iridocyclitis","None of the above"],
  note:"⚠️ ORPHANED ANSWER 1 of 3. Stem and all five options end p.56; 'Answer: C' stands alone at the head of p.57 above the red rule. Both ends of the seam read." },

{ n:10, p:57, key:'C',
  stem:"All of the following is among the layers of cornea except?",
  opts:["Bowman's membrane","Descemet's membrane","Bruch's membrane","Endothelial cells","Stroma"],
  note:"" },

{ n:11, p:57, key:'D',
  stem:"Which of the following factors contributes to corneal transparency?",
  opts:["Avascularity","Regular arrangement of collagen bundles","Relative dehydration of the cornea","All of the above"],
  note:"" },

{ n:12, p:57, key:'B',
  stem:"Which of the following is the most important and prevalent complication of herpes zoster ophthalmicus?",
  opts:["Cicatrisation of skin","Postherpetic neuralgia","Limbal atrophy","Vision loss"],
  note:"Antecedent of nothing, but the setup for Q13 by topic rather than by back-reference." },

{ n:13, p:57, key:'D',
  stem:"Which of the following is the best treatment of postherpetic neuralgia?",
  opts:["NSAIDs","Acetaminophen","Massive doses of steroids","Gabapentin"],
  note:"" },

{ n:'214', p:57, key:'C',
  stem:"Which of the following is described as (dust-like calcium deposits in corneal subepithelium, bowman's layer and anterior stroma)?",
  opts:["Arcus senilis","Keratoconus","Band keratopathy","Exposure keratopathy","None of the above"],
  note:"⚠️ MISPRINT M2 — THE PRINTED NUMBER IS '214.', verified at 400 dpi. It sits between the printed 13 and the printed 14. ⚠️ ORPHANED ANSWER 2 of 3: stem and all five options on p.57, 'Answer: C' alone at the head of p.58. Parenthesis and lower-case 'bowman's' are as printed." },

{ n:14, p:58, key:'D',
  stem:"A 21-year-old male patient complains of diminshed vision in the left eye. Examination revealed positive Munson's sign in the affected eye. Which of the following is the most likely diagnosis?",
  opts:["Herpes zoster ophthalmicus","Calcific band keratopathy","Photokeratitis","Keratoconus","Corneal ulcer"],
  note:"'diminshed' verbatim. ⚠️ This is the SECOND question in the chapter to occupy position 14 — see M2. Antecedent of Q15." },

{ n:15, p:58, key:'D',
  stem:"In the prevoius case, which of the following may be used to accurately assess the patient's condition?",
  opts:["Corneal topography","Pachymetry","Pentacam","All of the above","None of the above"],
  note:"BACK-REFERENCE. 'prevoius' verbatim. Antecedent READ: Q14 (21-year-old male, positive Munson's sign), printed immediately above." },

{ n:16, p:58, key:'D',
  stem:"All of the following are true regarding Hutchinson's sign except?",
  opts:["It's applied in case of herpes zoster ophthalmicus","It states that eye is involved in 75% of the cases if tip of nose is involved","It's applied in case of nasociliary nerve affection","It's a highly sensitive and specific sign"],
  note:"" },

{ n:17, p:58, key:'B',
  stem:"Which of the following is the use of Seidel test?",
  opts:["To detect corneal scarring","To detect conreal perforation","To detect corneal foreign body","All of the above","None of the above"],
  note:"Option B printed 'conreal perforation' — verbatim." },

{ n:18, p:58, key:'A',
  stem:"Deficiency of which of the following vitamins can cause corneal ulcers?",
  opts:["Vitamin A","Vitamin B","Vitamin C","Vitamin D"],
  note:"⚠️ MISPRINT M3 + SPLIT OPTION LIST 1 of 2. Four options are printed with the letters A, B, C, **E** — the letter D is skipped and 'Vitamin D' is lettered E. The list also straddles the seam: 'A. Vitamin A' and 'B. Vitamin B' are the last two lines of p.58; 'C. Vitamin C', 'E. Vitamin D' and 'Answer: A' open p.59. Both ends read. The key A is unaffected by the letter skip." },

{ n:19, p:59, key:'D',
  stem:"All of the following are among the complications of corneal foreign body except?",
  opts:["Rust ring","Corneal scarring","Infectious keratitis","Cataract"],
  note:"" },

{ n:20, p:59, key:'C',
  stem:"A 65-year-old man visits the ophthalmologist with a complaint of noticing a brown ring in both eyes. From history, there was no blurred vision or any other complaint. Examination revealed bilateral grayish brown ring around the limbus and separated from the limbus by a clear scleral zone. Which of the following would be the most important next step to do for such a patient?",
  opts:["Urgent surgery","CT orbit","Lipid profile and reassurance","Massive steroid administration","Ophthalmoscopic examination"],
  note:"Antecedent of Q21. ⚠️ The stem says the clear zone separates the ring from the limbus and calls that zone 'scleral' — the course describes the clear interval as lying between the arc and the limbus within the CORNEA. Recorded, not corrected." },

{ n:21, p:59, key:'C',
  stem:"In the previous case, what is the most likely diagnosis?",
  opts:["Keratoconus","Corneal ulcer","Arcus senilis","Arcus juveniles"],
  note:"BACK-REFERENCE. Antecedent READ: Q20 (65-year-old man, bilateral grayish-brown limbal ring with a clear separating zone, asymptomatic). ⚠️ A restatement must NOT name the lipid profile — that is Q20's own key. Option D printed 'Arcus juveniles'." },

{ n:22, p:59, key:'B',
  stem:"A 29-year-old woman complains of eye redness, pain and blurred vision. After staining with fluorescein, examination revealed a dendritic ulcer in the affected eye. Which of the following is absolutely contraindicated in the treatment of that patient?",
  opts:["Topical antiviral medications","Topical steroids","Prophylactic antibiotics","All of the above"],
  note:"⚠️ ORPHANED ANSWER 3 of 3: stem and all four options on p.59; 'Answer: B' alone at the head of p.60. Antecedent of Q23." },

{ n:23, p:60, key:'A',
  stem:"In the previous case, what is the best line of management?",
  opts:["Ganciclovir eye drops","Surgical intervention","A & B together","Neithe A nor B"],
  note:"BACK-REFERENCE. Antecedent READ: Q22 (29-year-old woman, fluorescein-positive dendritic ulcer). ⚠️ A restatement must NOT name topical steroids as contraindicated — that is Q22's own key. Option D printed 'Neithe A nor B'. Option letters stripped per the brief: the printed lines are 'C. A & B together' and 'D. Neithe A nor B', and the internal A/B references are part of the option TEXT and are kept." },

{ n:24, p:60, key:'B',
  stem:"An 11-year-old boy with Down's sydnrome shows angulation of the lower eyelid upon looking downwards. Which of the following is the name of this sign?",
  opts:["Inverse Darier's sign","Munson's sign","Lid lag sign","None of the above"],
  note:"'sydnrome' verbatim." },

{ n:25, p:60, key:'B',
  stem:"A 33-year-old woman presented with sudden ocular pain after her 6-month-old infant stroke her eye with his fingernail. Which of the following is the most appropriate line of management?",
  opts:["Topical steroids","Topical antibiotics","Hospitalization","Watchful waiting"],
  note:"'stroke' for 'struck' is as printed." },

{ n:26, p:60, key:'B',
  stem:"A patient with a history of herpes simplex keratitis was mistakenly treated with topical corticosteroids. The corneal epithelial lesion enlarged and developed irregular, scalloped borders. What is this type of corneal ulcer called?",
  opts:["Dendritic ulcer","Geographical ulcer","Punctate epithelial keratitis","Neurotrophic ulcer"],
  note:"" },

{ n:'26b', p:60, key:'B',
  stem:"Which term describes small, dot-like areas of epithelial staining on the cornea seen with fluorescein dye?",
  opts:["Dendritic ulcer","Punctate epithelial keratitis","Geographic ulcer","Filamentary keratitis"],
  note:"⚠️ MISPRINT M4 — THIS QUESTION IS PRINTED WITH NO NUMBER AT ALL. It sits between the printed 26 and the printed 27, in the chapter's normal typography, with its own red rules above and below. Staged n:'26b'. ⚠️ SPLIT OPTION LIST 2 of 2: stem plus 'A. Dendritic ulcer' and 'B. Punctate epithelial keratitis' close p.60; 'C. Geographic ulcer', 'D. Filamentary keratitis' and 'Answer: B' open p.61. Both ends read. ⚠️ Note the chapter spells the same entity 'Geographical' in Q26 and 'Geographic' here." },

{ n:27, p:61, key:'B',
  stem:"Which corneal condition is commonly associated with chronic eye rubbing in patients with atopy?",
  opts:["Band keratopathy","Keratoconus","Corneal guttata","Arcus senilis"],
  note:"" },

{ n:28, p:61, key:'B',
  stem:"A 58-year-old man with a long history of chronic uveitis presents complaining of gradual, painless blurring of vision and glare. Slit-lamp examination shows a horizontal, interpalpebral, chalk-white, plaque-like opacity at the level of Bowman's layer with small clear holes around corneal nerves. The opacity has a Swiss-cheese appearance and does not stain with fluorescein. Visual axis is partially involved. The ophthalmologist decides to treat by removing the epithelium and applying a calcium-binding agent to dissolve the deposits. What is the most appropriate management?",
  opts:["Phototherapeutic keratectomy (PTK)","EDTA chelation therapy","Amniotic membrane grafting","Lamellar keratoplasty"],
  note:"LAST QUESTION OF THE CHAPTER. Roughly half of p.61 below its answer rule is blank; the next printed matter in the book is the chapter 9 banner on p.62. ⚠️ The stem hands over the answer in its own last clause ('removing the epithelium and applying a calcium-binding agent') — that is the printed stem, transcribed as printed, not a reconstruction." }

];
