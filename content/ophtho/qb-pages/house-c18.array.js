// house-c18.array.js — House bank (ophthalmology MCQ.pdf), Chapter 18 "Ocular trauma"
// Verbatim staging record. Written before the draft, per the brief.
//
// WHAT THE BANNER LITERALLY PRINTS
//   Book p.112 (sheet 58, LEFT half) opens with a full-width red band, white bold
//   sans-serif text: "18. Ocular trauma" — lower-case "trauma", exactly as
//   house-c17.array.js predicted from its own boundary check. Numbering restarts at 1
//   beneath it.
//   Boundary proof, BOTH ends, read off the pixels rather than inferred:
//     • Upper end — book p.111 (sheet 57, RIGHT half) is the tail of chapter 17, and
//       p.112 carries the ch.18 banner.
//     • Lower end — book p.117 (sheet 60, RIGHT half) ends with Q27's answer line; there
//       is NO red rule under it and the whole lower half of that half-sheet is blank.
//       Book p.118 (sheet 61, LEFT half) opens with the next red band:
//       "19. Ocular manifestations of systemic diseases", its Q1 numbering restarted.
//       Rendered and READ, not assumed.
//   ⇒ Chapter 18 = book pp.112–117 = PDF sheets 58–60. SIX book pages, three PDF sheets.
//
// THE PAGE MAP I ACTUALLY USED
//   A4 LANDSCAPE, TWO book pages per PDF sheet, left = even, right = odd. Both halves of
//   every sheet were read; the folio numeral was confirmed on every half (112, 113, 114,
//   115, 116, 117, 118, 119). Renders at 200 dpi in <scratchpad>\ocr\h17\.
//     p-058.png = book 112 | 113   (112 = banner + Q1–Q4 | 113 = Q5–Q8, then Q9's STEM
//                                   BEGINS and breaks mid-sentence at "…the ophthalmologist
//                                   who")
//     p-059.png = book 114 | 115   (114 = rest of Q9's stem + its options + answer, Q10,
//                                   Q12, Q13, then Q14 stem + options A–B only
//                                   | 115 = Q14 options C–D + answer, Q15–Q18, then Q19
//                                   stem + option A only)
//     p-060.png = book 116 | 117   (116 = Q19 options B–D + answer, Q20–Q23 | 117 =
//                                   Q24–Q27; below Q27's "Answer: B" the page is blank)
//     p-061.png = book 118 | 119   (rendered PAST the last question: "19. Ocular
//                                   manifestations of systemic diseases" banner confirmed
//                                   at p.118 — chapter closed)
//   ⚠️ THE BRIEF'S PAGE ARITHMETIC IS CORRECT AND WAS RE-PROVED HERE. PDF sheet N carries
//   book pages 2N−4 and 2N−3; every folio numeral was read off the pixels, not derived.
//   ⚠️ The brief said "chapter 18 lives on p-058, p-059, p-060 and THE FIRST HALF OF
//   p-061". That last clause is WRONG. p-061's LEFT half (book 118) is already the
//   chapter 19 banner. Chapter 18 ends on p-060's right half (book 117). Nothing of
//   chapter 18 is printed on p-061 at all.
//
// ⚠️⚠️ THE Q11 VERDICT — (a) THE BOOK ITSELF SKIPS THE NUMBER 11. SOURCE DEFECT.
//   26 questions printed under 27 numbers. There is no Q11 on the page, no blank band
//   where one could have been, and no straddle that could have swallowed one.
//   Settled on book p.114 (sheet 59, LEFT half) at full render resolution on a 2x crop.
//   The printed lines, in printed order, with nothing omitted between them:
//
//       "10. In the previous case, what is the source of bleeding?"
//       "A. Iris root"
//       "B. Ciliary body"
//       "C. Choroid"
//       "D. Conjunctival vessels"
//       "E. Vitreous"
//       ""
//       "Answer: A"
//       ────────────────────────────  [the standard red inter-question rule]
//       ""
//       "12. In the previous case, which of the following is an expected complication?"
//       "A. Blood staining of the cornea"
//
//   The band between Q10's "Answer: A" and Q12's number is the SAME HEIGHT as every other
//   inter-question band on that half-sheet — measured against the Q12/Q13 and Q13/Q14
//   gaps immediately below it. A whole question with a five-line menu and an answer line
//   cannot fit in it. Q10 and Q12 are printed consecutively; the numeral 11 is simply
//   never used.
//   ⇒ The brief's option (a) is the fact. This bank has done it before — chapter 8 printed
//   "30 questions under 28 numbers". Recorded, never corrected: the ids follow the
//   PRINTED numbers, so `opmcq-c18-11` does not exist and must not be created.
//   The two measurements in the brief are now reconciled: highest printed number 27,
//   inline "Answer:" lines 26, questions 26. Both were describing the same page correctly.
//
// PRINTED COUNT
//   26 questions, numbered 1–10 and 12–27. Counted forwards from the banner and backwards
//   from Q27; both passes agree, and the answer-line count (26) agrees with both.
//   Answers are printed INLINE beneath each option list ("Answer: C"), House style. There
//   is no pooled key page and no key section anywhere in the chapter.
//
// PRINTED EXPLANATION BOXES — ZERO. FIGURES — ZERO.
//   Counted page by page on this chapter's own pages (112, 113, 114, 115, 116, 117), not
//   carried forward from chapter 17: every band between one question and the next contains
//   only the option list, the "Answer:" line and the red rule. No shaded box, no
//   photograph, no diagram, no table anywhere in the chapter. All six half-sheets are pure
//   text. This is the EIGHTEENTH consecutive chapter with zero of each, and it was still
//   counted rather than assumed.
//   Markers required in the draft = 26 entries − 0 boxes = 26.
//
// ⚠️ NO LETTERING GAP ANYWHERE IN THIS CHAPTER.
//   Chapter 17 printed two menus with a missing letter (its Q2 skipped D, its Q9 had no
//   A), and the brief warned to "expect the same shape here". IT DOES NOT OCCUR. Every
//   one of the 26 menus in chapter 18 runs from A upward with no gap and no repeat —
//   checked letter by letter on all six half-sheets. Menu lengths are 4 or 5 options only.
//   ⇒ For every question in this chapter the printed key letter and the zero-based index
//   into the printed option order AGREE (A=0, B=1, C=2, D=3, E=4). Both were derived
//   independently anyway — from the printed POSITION first, then checked against the
//   letter — and they matched 26 times out of 26.
//
// ⚠️ ORPHANED ANSWERS / ORPHANED OPTIONS — THREE STRADDLES, ALL RECOVERED
//   Every question was checked one at a time for a printed answer line; all 26 have one.
//     • Q9  — stem BEGINS on book p.113 and breaks mid-sentence after "He headed to the
//             ophthalmologist who"; it resumes at the top of p.114 with "examined his eye
//             and found that…". Options and "Answer: C" are all on p.114.
//     • Q14 — stem and options A–B on p.114; options C–D and "Answer: A" on p.115. This is
//             the ch.5-Q19 shape the brief warned about: read only p.114 and Q14 looks
//             like a TWO-option question with no key. It has four options and key A.
//     • Q19 — stem and option A on p.115; options B–D and "Answer: B" on p.116. Read only
//             p.115 and the key option ("Hypoxia from apnea…") is invisible, which would
//             make the question unanswerable.
//   The `p` field below carries the page the STEM STARTS on; every straddle is named in
//   its own note.
//
// PRESERVED PRINTED TYPOS (all confirmed on the page at 2x, none repaired in this file)
//   Q9  stem — "blooda accumulation"      (for "blood accumulation")
//   Q9  stem — "sharply demarkated"       (for "demarcated")
//   Q14 stem — "Digitally- measured IOP"  (hyphen followed by a space, mid-word)
//   Q21 opts — "sulphuric" / "hydrochloric" (British spelling; kept)
//   The draft repairs these and quotes the printed form in the explanation.
//
// OCR DEFECTS REPAIRED SILENTLY AS TRANSCRIPTION HYGIENE (cosmetic only, every one
//   re-read against the pixels): missing space after punctuation throughout ("2.Which",
//   "previous case,what", "A45-year-old"); options merged onto one line and onto the
//   answer line ("D.Iridodialysis Answer:A", "D.All have similar effect and prognosis
//   Answer:C"); fused words ("ofintraocular", "Digitally-measuredIOPwas"); junk digit runs
//   ("03319218", "31784126756", "06384", "0-43", "-5278712863") dropped; garbled running
//   header ("田oUSE", "回OUSE", "画OUSE", "DOUSE") dropped.
//   ⚠️ The OCR also FLOATED three option blocks away from their own stems in reading order:
//   Q7's options A–E printed ABOVE its stem; Q9's options B and C swapped
//   ("C. Traumatic hyphema" before "B. Retrobulbar hemorrhage"); Q26's options printed
//   above its stem and out of order. On the page all three sit under their stem in normal
//   A→E order. Reading order only — the printed order is what is transcribed below.
//
// BACK-REFERENCES (SIX; every antecedent READ off the page, not assumed — and TWO of them
// are NOT the immediately preceding number)
//   • Q6, Q7, Q8 "In the previous case…" → antecedent Q5, the 26-year-old with severe head
//     trauma on p.113. Q6 follows Q5 directly; Q7 and Q8 do NOT — their literal "previous"
//     neighbour is another follow-up question, not a case. The case is Q5 in all three.
//   • Q10, Q12, Q13 "In the previous case…" → antecedent Q9, the 30-year-old fist-blow
//     vignette that starts on p.113 and finishes on p.114. Q10 follows Q9 directly; Q12
//     and Q13 do NOT. ⚠️ The brief is RIGHT that Q12's and Q13's antecedent is Q9 — and
//     right for a reason it did not state: Q12's own key ("All of the above" = blood
//     staining + rebleeding + optic neuropathy) and Q13's own key (hospitalisation, head
//     elevation, cycloplegia, evacuation) are the complications and the management of
//     HYPHAEMA, which is Q9's subject. Q10 asks only where the blood came from and could
//     not carry a case forward. Confirmed by content as well as by position.
//   ⚠️ EVERY REPAIRED BACK-REFERENCE WAS HAND-READ AGAINST ITS ANTECEDENT *AND* AGAINST ITS
//   OWN KEY. Q6/Q7/Q8 restate Q5's FINDINGS ONLY and never name retrobulbar haemorrhage,
//   because that is Q5's own key AND because Q8's menu is four ways of treating it.
//   Q10/Q12/Q13 restate Q9's FINDINGS ONLY (fist blow, severe pain, a sharply demarcated
//   fluid level of blood in the anterior chamber) and never say the word "hyphaema",
//   because that is Q9's key — and, for Q10, because naming it would not answer Q10 but
//   WOULD hand over Q9.
//
// FOLD / DUPLICATE CANDIDATES — verdicts reported, THE HUB DECIDES. Chapters 1–17 were
// read from app\data\questions.ophtho.js, and the Grade Gain trauma topic (opqb-t18-*, 39
// questions) and orbit topic (opqb-t3-*) were dumped and read in full. Details at the foot
// of this file, after the array.
//
// ⚠️ WHERE THIS BRIEF WAS WRONG — see the "BRIEF CORRECTIONS" block at the foot.

var HOUSE_C18 = [

  { n:1, p:112, key:'B', keyIndex:1,
    stem:"A 45-year-old man presents months after a metallic penetrating eye injury. He now has slowly worsening vision. Exam shows a brownish discoloration of the iris, sluggish pupil, and a rusty staining of the anterior lens capsule. ERG shows reduced amplitudes. What is the most likely diagnosis?",
    opts:["A. Chalcosis","B. Siderosis","C. Uveitis","D. Traumatic cataract"],
    note:"Key printed 'Answer: B'; B is the SECOND printed option ⇒ index 1. FOUR options, lettered A–D with no gap. First question of the chapter, printed directly beneath the red banner. ⚠️ A is 'Chalcosis' and B is 'Siderosis' — the two are one letter apart in the menu and one metal apart in fact, which is the whole item; read the key letter off the page, not off the alphabetical instinct that copper comes first." },

  { n:2, p:112, key:'A', keyIndex:0,
    stem:"Which of the following is the definitive treatment of an intraocular foreign body (IOFB)?",
    opts:["A. Removal","B. Topical antibiotics","C. Observation","D. Eye patching"],
    note:"Four options, A–D, no gap. Printed key A = first option = index 0. The abbreviation is printed '(IOFB)' — confirmed on a 2x crop; the OCR's '(IOFB)' is right." },

  { n:3, p:112, key:'A', keyIndex:0,
    stem:"Which of the following conditions is associated with deep anterior chamber?",
    opts:["A. Scleral laceration","B. Corneal laceration","C. Intumescent traumatic cataract","D. A & B","E. B & C"],
    note:"Five options, A–E, no gap. Key A = index 0. ⚠️ SHARED OPTION MENU WITH Q4 — identical in text AND in order, all five. The keys differ (A here, E in Q4). Discriminating token: 'deep' vs 'shallow'. NOT a fold; see the fold block at the foot." },

  { n:4, p:112, key:'E', keyIndex:4,
    stem:"Which of the following traumatic conditions is associated with shallow anterior chamber?",
    opts:["A. Scleral laceration","B. Corneal laceration","C. Intumescent traumatic cataract","D. A & B","E. B & C"],
    note:"Five options, A–E, no gap. Key E = fifth option = index 4. Last question on p.112. The brief flagged 'Q4 keyed E on a question whose menu you must count' — counted: five options, E is the fifth, index 4. The stem adds the word 'traumatic' that Q3's stem lacks; otherwise the two stems differ only in deep/shallow." },

  { n:5, p:113, key:'B', keyIndex:1,
    stem:"A 26-year-old male presents to the emergency department after he had a severe head trauma. He complained of severe left eye pain with swelling of the left lower lid. Examination revealed limitation of ocular motility with ecchymosis and lid hematoma. Which of the following is the most likely diagnosis?",
    opts:["A. Orbital floor fracture","B. Retrobulbar hemorrhage","C. Lid surgical emphysema","D. Hypopyon","E. None of the above"],
    note:"Five options, A–E, no gap. Key B = index 1. First question on p.113. ANTECEDENT of Q6, Q7 and Q8. ⚠️ The vignette as printed does not name the signs that separate retrobulbar haemorrhage from the distractor A (orbital floor fracture) — no proptosis, no visual loss, no RAPD, no tense orbit, no raised IOP. Both A and B fit 'ecchymosis + limited motility + lid haematoma after blunt head trauma'. The printed key is B and Q6/Q7/Q8 confirm that retrobulbar haemorrhage is what the writer intended (imaging withheld, a 2-hour window, canthotomy + cantholysis). Recorded, NOT disputed." },

  { n:6, p:113, key:'B', keyIndex:1,
    stem:"In the previous case, what is the role of imaging in order to confirm the diagnosis?",
    opts:["A. Imaging is mandatory before treatment","B. Imaging is not recommended as it's a clinically diagnosed condition and needs to be treated as soon as possible","C. The need for imaging depends on the situation and is determined by the ophthalmologist","D. Imaging is needed just to define the disease extent but not for diagnosis"],
    note:"FOUR options only, A–D, no gap and no E. Key B = index 1. Antecedent = Q5 (directly above)." },

  { n:7, p:113, key:'C', keyIndex:2,
    stem:"In the previous case, what is the time window during which the definitive treatment must be carried out?",
    opts:["A. 30 minutes","B. 1 hour","C. 2 hours","D. 3 hours","E. 4 hours"],
    note:"Five options, A–E, no gap. Key C = index 2. Antecedent = Q5, NOT Q6 (Q6 is itself a follow-up, not a case). ⚠️ The OCR printed this question's option block ABOVE its own stem; on the page the options sit beneath the stem in normal order. Reading order only." },

  { n:8, p:113, key:'C', keyIndex:2,
    stem:"In the previous case, what is the definitive treatment?",
    opts:["A. Medical management","B. Lateral canthotomy & cantholysis","C. Lateral canthotomy, cantholysis & medical management","D. Watchful waiting","E. None of the above"],
    note:"Five options, A–E, no gap. Key C = index 2. Antecedent = Q5. ⚠️ B and C differ only by the trailing '& medical management' — B is a strict subset of C, which is why the key is C." },

  { n:9, p:113, key:'C', keyIndex:2,
    stem:"A 30-year-old man got a fist blow in his right eye during a quarrel with his wife that made him feel severe eye pain. He headed to the ophthalmologist who examined his eye and found that the trauma caused hemorrhage and blooda accumulation in the anterior chamber. Fluid level was sharply demarkated. Which of the following is the most likely diagnosis?",
    opts:["A. Orbital floor fracture","B. Retrobulbar hemorrhage","C. Traumatic hyphema","D. Hypopyon","E. None of the above"],
    note:"⚠️ STRADDLE. Stem BEGINS as the last block on p.113 and breaks mid-sentence after 'He headed to the ophthalmologist who'; it resumes at the top of p.114 with 'examined his eye and found that…'. Options and 'Answer: C' are on p.114. Five options, A–E, no gap; key C = index 2. PRINTED TYPOS KEPT: 'blooda accumulation' and 'sharply demarkated'. ⚠️ The OCR swapped options B and C in reading order; on the page they are A, B, C, D, E in order. ANTECEDENT of Q10, Q12 and Q13. Its option menu is Q5's menu with option C changed from 'Lid surgical emphysema' to 'Traumatic hyphema' — a REUSED four-fifths menu, which pairs the two vignettes; it does not fold them." },

  { n:10, p:114, key:'A', keyIndex:0,
    stem:"In the previous case, what is the source of bleeding?",
    opts:["A. Iris root","B. Ciliary body","C. Choroid","D. Conjunctival vessels","E. Vitreous"],
    note:"Five options, A–E, no gap. Key A = index 0. Antecedent = Q9. ⚠️ THE LAST QUESTION BEFORE THE SKIPPED NUMBER — its 'Answer: A' is followed by the standard red rule and then '12.'. See the Q11 verdict in the header." },

  // ⚠️⚠️ NO Q11 EXISTS. THE BOOK SKIPS THE NUMBER 11. Nothing is missing from this array;
  // nothing was dropped by the OCR; `opmcq-c18-11` must never be created. Verdict (a),
  // settled on the pixels of book p.114 — full quotation in the header block above.

  { n:12, p:114, key:'D', keyIndex:3,
    stem:"In the previous case, which of the following is an expected complication?",
    opts:["A. Blood staining of the cornea","B. Ischemic optic neuropathy","C. Rebleeding","D. All of the above","E. None of the above"],
    note:"Five options, A–E, no gap. Key D = index 3. ⚠️ ANTECEDENT IS Q9, NOT Q10 — Q10 asks where the blood came from and is itself a follow-up; the case is the fist-blow hyphaema. Confirmed by content: A, B and C are the complications of hyphaema. The FIRST question printed after the skipped number 11." },

  { n:13, p:114, key:'E', keyIndex:4,
    stem:"In the previous case, which of the following is the most appropriate line of management?",
    opts:["A. Hospitalization","B. Elevation of the head of the bed","C. Cycloplegic eye drops","D. Surgical evacuation of blood in anterior chamber","E. All of the above"],
    note:"Five options, A–E, no gap. Key E = index 4. ANTECEDENT IS Q9. ⚠️ Divergence to record in the draft: `L25) Trauma I.txt` slide 28 prints 'Hospitalization: NOT EVERY CASE' and restricts surgical evacuation to persistent high IOP or total hyphaema > 5 days, so an 'All of the above' key is broader than the lecture. Recorded, never disputed." },

  { n:14, p:114, key:'A', keyIndex:0,
    stem:"A 44-year-old female patient suffered a severe eye trauma that led to large subconjunctival hemorrhage. Digitally- measured IOP was lower than normal. Which of the following is the most likely diagnosis?",
    opts:["A. Globe rupture","B. Retrobulbar hemorrhage","C. Hyphema","D. Iridodialysis"],
    note:"⚠️ STRADDLE, AND THE DANGEROUS SHAPE. Stem and options A–B are the last block on p.114; options C–D and 'Answer: A' are the first thing on p.115, printed directly under the running header. Read p.114 alone and this is a two-option question with no key. FOUR options, A–D, no gap; key A = index 0. PRINTED TYPO KEPT: 'Digitally- measured' — hyphen followed by a space, confirmed at 2x. ⚠️ The stem describes DIGITAL PALPATION of IOP in a suspected open globe, which `L25) Trauma I.txt` slide 51 forbids ('DO NOT CHECK EYE PRESSURE'). Recorded for the draft." },

  { n:15, p:115, key:'C', keyIndex:2,
    stem:"What is the grade of chemical eye injury that is characterized by total loss of corneal epithelium and stromal haze obscuring iris details?",
    opts:["A. Grade 1","B. Grade 2","C. Grade 3","D. Grade 4"],
    note:"Four options, A–D, no gap. Key C = index 2. Matches `L25) Trauma I.txt` slide 7 grade III word for word ('Total epithelial loss, stromal haze, obscured iris details')." },

  { n:16, p:115, key:'B', keyIndex:1,
    stem:"What is the prognosis of chemical eye injury that is characterized by hazy cornea with visible iris details?",
    opts:["A. Excellent","B. Good","C. Guarded","D. Poor"],
    note:"Four options, A–D, no gap. Key B = index 1. ⚠️ PAIRS WITH Q15 on a shared subject and a near-shared construction ('What is the grade/prognosis of chemical eye injury that is characterized by…'). Different menus, different keys, different targets. Discriminating tokens: 'grade' vs 'prognosis', and 'obscuring iris details' vs 'visible iris details'. NOT a fold." },

  { n:17, p:115, key:'C', keyIndex:2,
    stem:"Which of the following imaging modalities is absolutely contraindicated in a patient with intra-ocular metallic foreign body?",
    opts:["A. CT","B. X ray","C. MRI","D. Ultrasound"],
    note:"Four options, A–D, no gap. Key C = index 2. Printed 'intra-ocular' hyphenated and 'X ray' unhyphenated — both kept." },

  { n:18, p:115, key:'E', keyIndex:4,
    stem:"Which of the following is a complication of intraocular foreign bodies?",
    opts:["A. Endophthalmitis","B. Cataract","C. Retinal detachment","D. Vitreous hemorrhage","E. All of the above"],
    note:"Five options, A–E, no gap. Key E = index 4. ⚠️ The OCR printed options C and D swapped; on the page the order is A, B, C, D, E. Reading order only." },

  { n:19, p:115, key:'B', keyIndex:1,
    stem:"What is the mechanism of brain damage in shaken baby syndrome?",
    opts:["A. Trauma","B. Hypoxia from apnea caused by brainstem injury","C. Both A & B","D. Neither A nor B"],
    note:"⚠️ STRADDLE. Stem and option A are the last block on p.115; options B–D and 'Answer: B' open p.116. Read p.115 alone and the KEY OPTION IS INVISIBLE. FOUR options, A–D, no gap; key B = index 1. ⚠️ Note the shape: 'C. Both A & B' is present and is NOT the key — the item deliberately rejects trauma as the mechanism of the BRAIN damage in favour of hypoxia. The only question in the chapter on a topic that appears NOWHERE in the cached material (see the grounding note in the draft)." },

  { n:20, p:116, key:'D', keyIndex:3,
    stem:"A 26-year-old male patient heads to the emergency department after getting injured in a quarrel. He reports that he got a fist blow trauma. Which of the following is the most common area fractured in that kind of trauma?",
    opts:["A. Medial orbital wall","B. Lateral orbital wall","C. Roof of the orbit","D. Floor of the orbit"],
    note:"Four options, A–D, no gap. Key D = index 3. ⚠️ Its opening clause is nearly Q5's ('A 26-year-old male … emergency department … quarrel/head trauma'), but the two ask different questions from different presentations. Discriminating token: 'most common area fractured' vs 'most likely diagnosis'. NOT a fold." },

  { n:21, p:116, key:'C', keyIndex:2,
    stem:"Which of the following has the poorest prognosis ever?",
    opts:["A. Injury to eye by sulphuric acid","B. Injury to eye by hydrochloric acid","C. Injury to eye by sodium hydroxide","D. All have similar effect and prognosis"],
    note:"Four options, A–D, no gap. Key C = index 2. British spellings 'sulphuric'/'hydrochloric' kept. The stem never says 'chemical' — the three named agents are two acids and one alkali, and the whole item turns on recognising NaOH as the alkali." },

  { n:22, p:116, key:'E', keyIndex:4,
    stem:"Which of the following is best described as (two full-thickness wounds, one at entry and one at exit, usually caused by a missile)?",
    opts:["A. Open injury","B. Globe rupture","C. Laceration","D. Penetrating injury","E. Perforation"],
    note:"Five options, A–E, no gap. Key E = fifth option = index 4. Parentheses around the definition are printed. ⚠️⚠️ SHARED OPTION MENU WITH Q25 — identical in text AND in order, all five. Keys differ (E here, C in Q25). Discriminating tokens: 'two … one at entry and one at exit … missile' vs 'tearing injury … direct impact'. NOT a fold; see the fold block at the foot." },

  { n:23, p:116, key:'E', keyIndex:4,
    stem:"Grading of chemical eye injuries depends on which of the following factors?",
    opts:["A. Corneal clarity","B. Duration of exposure","C. Severity of limbal ischemia","D. A & B","E. A & C"],
    note:"Five options, A–E, no gap. Key E = fifth option = index 4. The brief flagged 'Q23 keyed E on a question whose menu you must count' — counted: five options, E is the fifth, index 4. ⚠️ Option B ('Duration of exposure') is TRUE of the SEVERITY of a chemical injury (`L25) Trauma I.txt` slide 3) but is not one of the two GRADING axes (slide 7: limbal ischaemia + corneal involvement). That is precisely the trap; it is not a defect." },

  { n:24, p:117, key:'B', keyIndex:1,
    stem:"What is the initial management in case of chemical eye burn?",
    opts:["A. Neutralization","B. Copious irrigation","C. Antibiotics","D. Eye patching"],
    note:"Four options, A–D, no gap. Key B = index 1. First question on p.117." },

  { n:25, p:117, key:'C', keyIndex:2,
    stem:"Which of the following is best described as (full-thickness defect in the eye wall produced by a tearing injury, usually as a result of a direct impact)?",
    opts:["A. Open injury","B. Globe rupture","C. Laceration","D. Penetrating injury","E. Perforation"],
    note:"Five options, A–E, no gap. Key C = index 2. Parentheses printed. ⚠️⚠️ SHARED OPTION MENU WITH Q22 (see above). ⚠️ The definition is ambiguous against the module's own material: `L25) Trauma I.txt` slide 43 assigns the BLUNT/tearing mechanism to RUPTURE GLOBE and slide 44 assigns laceration to a SHARP OBJECT, and Grade Gain `opqb-t18-750` keys 'Rupture' for 'a full thickness wound of the eyewall caused by a BLUNT object'. The printed key here is C (Laceration) and is kept; the discriminating phrase is 'as a result of a direct impact' — i.e. AT the impact site, outside-in, which is laceration — against rupture's inside-out mechanism, which the stem does not describe. Recorded in the draft, never disputed." },

  { n:26, p:117, key:'C', keyIndex:2,
    stem:"What is the appropriate initial management when a penetrating eye injury is complicated by a suspected intraocular foreign body?",
    opts:["A. Topical steroids","B. Oral antivirals","C. IV antibiotics","D. Warm compresses"],
    note:"Four options, A–D, no gap. Key C = index 2. ⚠️ The OCR printed this question's option block ABOVE its stem and out of order; on the page the options sit beneath the stem as A, B, C, D. Reading order only." },

  { n:27, p:117, key:'B', keyIndex:1,
    stem:"A 20-year-old man presents after being punched in the eye during a fight. He reports decreased vision and eye pain. On examination, a visible fluid level of blood is seen in the anterior chamber. What is the most likely diagnosis?",
    opts:["A. Subconjunctival hemorrhage","B. Hyphema","C. Vitreous hemorrhage","D. Corneal abrasion"],
    note:"Four options, A–D, no gap. Key B = index 1. LAST question of the chapter — no red rule beneath its answer line, and the rest of p.117 is blank. ⚠️ NEAR-DUPLICATE OF Q9 on the same fact; see the fold block at the foot." }

];

// ═══════════════════════════════════════════════════════════════════════════════════
// FOLD / DUPLICATE CANDIDATES — VERDICTS REPORTED, THE HUB DECIDES EVERY FOLD BY HAND
// ═══════════════════════════════════════════════════════════════════════════════════
// Compared against: (a) opmcq-c1-* … opmcq-c17-* read from app\data\questions.ophtho.js;
// (b) the Grade Gain trauma topic opqb-t18-* (39 questions) and orbit topic opqb-t3-*,
// dumped in full and read one by one; (c) this chapter against itself.
//
// ⚠️ NOT ONE FOLD IS PROPOSED. Every candidate below is REJECTED BY NAME, with the
// discriminating token stated. Zero folds is the measurement, and here is how it was
// measured: 26 stems were compared against the 39 Grade Gain trauma questions and against
// the 450 House entries already live, and the four within-chapter shared-menu pairs were
// hand-read option by option.
//
// ⚠️ NOTE FOR THE HUB, ON THE DRAFT'S CROSS-REFERENCES. Four of this chapter's questions
// host a shared table (Q5 retrobulbar haemorrhage, Q9 hyphaema, Q15 chemical grading,
// Q22 open-globe vocabulary), and three of those four hosts — Q9, Q15, Q22 — are
// themselves members of the flagged pairs below. Because a folded id has to be able to
// disappear cleanly, NO id belonging to a flagged pair (Q3, Q4, Q9, Q15, Q16, Q22, Q25,
// Q27) is backticked anywhere in the draft: those 28 cross-references are written as
// prose instead ("the chemical-burn grading question in this chapter", "the fist-blow
// hyphaema case in this chapter"). Every OTHER cross-reference is a normal backticked id.
// Once the hub has ruled on the four pairs, the surviving hosts' ids can be restored.
//
// WITHIN-CHAPTER — FOUR SHARED-MENU PAIRS, ALL REJECTED
//   1. Q3 vs Q4 — option menus IDENTICAL IN TEXT AND IN ORDER, all five, letter for
//      letter. Keys DISAGREE (A vs E). Stems differ by TWO words: Q3 "Which of the
//      following conditions", Q4 "Which of the following traumatic conditions"; and Q3
//      "deep anterior chamber", Q4 "shallow anterior chamber".
//      DISCRIMINATING TOKEN: deep / shallow. These are complementary questions built on
//      one menu — the bank's signature pairing device. NOT the same question.
//   2. Q22 vs Q25 — option menus IDENTICAL IN TEXT AND IN ORDER, all five. Keys DISAGREE
//      (E vs C). Both stems open "Which of the following is best described as (…)?" —
//      exactly the trap the brief named.
//      DISCRIMINATING TOKENS: "two full-thickness wounds, one at entry and one at exit …
//      missile" (Q22 = perforation) vs "produced by a tearing injury … direct impact"
//      (Q25 = laceration). Two different BETT definitions sharing one menu. NOT the same
//      question.
//   3. Q15 vs Q16 — menus DIFFER (Grade 1–4 vs Excellent/Good/Guarded/Poor). Stems share
//      the frame "…chemical eye injury that is characterized by…".
//      DISCRIMINATING TOKENS: "grade" vs "prognosis"; "obscuring iris details" (grade III)
//      vs "visible iris details" (grade II). Different grades AND different questions.
//   4. Q9 vs Q27 — the closest pair in the chapter and STILL NOT A FOLD. Both are blunt
//      assault vignettes keying hyphaema.
//        · Stems NOT word-identical and not close: Q9 = 30-year-old, fist blow, quarrel
//          with his wife, severe eye pain, "hemorrhage and blooda accumulation in the
//          anterior chamber", "Fluid level was sharply demarkated". Q27 = 20-year-old,
//          punched during a fight, decreased vision AND eye pain, "a visible fluid level
//          of blood is seen in the anterior chamber".
//        · Option lists DIFFER IN LENGTH, TEXT AND ORDER. Q9: Orbital floor fracture /
//          Retrobulbar hemorrhage / Traumatic hyphema / Hypopyon / None of the above
//          (five). Q27: Subconjunctival hemorrhage / Hyphema / Vitreous hemorrhage /
//          Corneal abrasion (four). Only ONE option is common to both, and it is spelled
//          differently ("Traumatic hyphema" vs "Hyphema").
//        · Keys: C in Q9, B in Q27 — different letters, and the correct option sits at
//          index 2 in Q9 and index 1 in Q27. ⚠️ THE KEY MOVES.
//        · DISCRIMINATING TOKENS: "sharply demarkated" / "quarrel with his wife" / age 30
//          vs "decreased vision" / "during a fight" / age 20. And structurally: Q9 is the
//          ANTECEDENT of three follow-up questions and cannot be folded away without
//          orphaning Q10, Q12 and Q13. Q27 is standalone.
//      VERDICT: a same-fact pair, deliberately printed twice at the two ends of the
//      chapter. Not a fold.
//
// CROSS-BANK, AGAINST GRADE GAIN opqb-t18-* — SIX SAME-FACT PAIRS, ALL REJECTED
//   (`alsoIn` is NOT proposed for any of these; none is a reprint.)
//   • Q10 vs `opqb-t18-729` — both key the IRIS ROOT as the source of hyphaema bleeding.
//     Stems unrelated: Q10 is a bare back-reference ("In the previous case, what is the
//     source of bleeding?"); t18-729 is a 17-year-old hit with a football with an elevated
//     IOP. Menus differ in length (5 vs 4), in members (Q10 has Conjunctival vessels and
//     Vitreous; t18-729 has Lens capsule) and in order. ⚠️ THE KEY MOVES: index 0 in Q10,
//     index 2 in t18-729. DISCRIMINATING TOKEN: "football" / "IOP is elevated".
//   • Q13 vs `opqb-t18-730` — both on hyphaema management. t18-730 keys ONE measure ("Bed
//     rest with 45° head elevation"); Q13 keys "All of the above" over four measures.
//     DISCRIMINATING TOKEN: "best initial management" (one step) vs "most appropriate line
//     of management" (the whole line). Different menus entirely.
//   • Q17 vs `opqb-t18-739` — the SAME FACT ASKED IN OPPOSITE DIRECTIONS. Q17 gives the
//     foreign body and asks for the modality (key MRI). t18-739 gives the modality and
//     asks for the foreign body (key "Metallic IOFB suspected"). Neither menu overlaps the
//     other. Also `opqb-t18-717`, which reaches it a third way ("all of the following tests
//     are useful … EXCEPT", key MRI). Three distinct items, one fact.
//   • Q1 vs `opqb-t18-738` — both on iron IOFB. t18-738 is bare recall ("What complication
//     may occur due to an iron intraocular foreign body?", key "Siderosis bulbi") with
//     chalcosis, band keratopathy and keratoconus as distractors. Q1 is a four-sign
//     vignette (brown iris, sluggish pupil, rusty lens capsule, reduced ERG) with uveitis
//     and traumatic cataract as distractors. DISCRIMINATING TOKEN: "ERG shows reduced
//     amplitudes" — t18-738 contains no clinical picture at all.
//   • Q21/Q23/Q24 vs `opqb-t18-716`, `-720`, `-723`, `-725`, `-726` — the Grade Gain
//     chemical-burn cluster. Overlapping subject, no shared stem and no shared menu.
//     Closest: Q24 ("initial management in case of chemical eye burn", key "Copious
//     irrigation") vs t18-716 ("first line of management of an acidic chemical injury",
//     key "Wash with water immediately"). DISCRIMINATING TOKENS: "acidic" (t18-716 is
//     agent-specific) and the printed answer wording, which is not the same phrase.
//     Q16 vs `opqb-t18-725` likewise: t18-725 gives a cement splash with limbal ischaemia
//     <30% and asks the GRADE (key Grade 2); Q16 gives the corneal appearance only and
//     asks the PROGNOSIS (key Good). Same grade, different question.
//   • Q5–Q8 vs `opqb-t18-727` / `opqb-t18-728` — the retrobulbar-haemorrhage cluster.
//     t18-727 asks the NEXT IMMEDIATE MANAGEMENT of a punched eye with proptosis, tight
//     lids and an RAPD (key "Lateral canthotomy + cantholysis"); House Q8 asks the
//     DEFINITIVE TREATMENT and keys "Lateral canthotomy, cantholysis & medical management"
//     — a THIRD option that t18-727's menu does not contain. DISCRIMINATING TOKEN:
//     "& medical management". t18-728 asks the pathophysiology; no House question does.
//     ⚠️ Nothing in the House cluster asks what t18-727 asks in the way it asks it, and
//     the House menus include "Watchful waiting" and "None of the above", which the Grade
//     Gain menu does not.
//
//   ALSO CHECKED AND CLEARLY DISTINCT (listed so the sweep is auditable rather than
//   asserted): Q20 vs `opqb-t18-722` (House asks the AREA — floor of the orbit; Grade Gain
//   asks the BONE — maxillary; different answers to the same anatomy, different menus) and
//   vs `opqb-t18-754` (defective ELEVATION in blow-out — a motility question, not a
//   fracture-site question). Q14 vs `opqb-t18-736`/`-737` (both open-globe, but Grade Gain
//   asks what to DO and what NOT to do; House asks the DIAGNOSIS). Q18 vs `opqb-t18-735`
//   (hypopyon in trauma = endophthalmitis — one complication, not the list). Q22/Q25 vs
//   `opqb-t18-750` (rupture = blunt object; the House pair never uses the word "blunt").
//
// CROSS-CHAPTER, AGAINST opmcq-c1-* … opmcq-c17-*
//   NO CANDIDATE. Measured, not assumed: the live House corpus was searched for every
//   discriminating noun in this chapter — hyphema/hyphaema (9+5 hits, all in Grade Gain
//   ids), siderosis (6), chalcosis (3), canthotomy (11), iridodialysis (36), globe rupture
//   (12), shaken (ZERO across the whole file) — and every House hit belonged to a Grade
//   Gain entry's explanation prose, not to an opmcq-c* stem. Chapters 1–17 print no trauma
//   question. The nearest neighbours are opmcq-c16-* (paediatric) and opmcq-c17-*
//   (malignancies), neither of which touches trauma.
//   ⇒ ZERO cross-chapter folds, and the House chapters are genuinely disjoint here — this
//   is a topic the earlier chapters never entered, not a topic where the search failed.
//
// ═══════════════════════════════════════════════════════════════════════════════════
// GROUNDING — WHAT THE CACHED MATERIAL DOES AND DOES NOT COVER
// ═══════════════════════════════════════════════════════════════════════════════════
// Lecture directory LISTED before citing (29 .txt files, not 34). Primary sources used:
//   `L25) Trauma I.txt` (68 slides — chemical grading, blow-out fracture, hyphaema,
//   open-globe rules, IOFB, Seidel), `L26) Trauma II.txt` (chemical injuries in full),
//   plus `ophthalmology.pdf` pp.58–59 via `content\ophtho\book\ch03-orbit.txt` for the
//   blow-out fracture.
//
// ⚠️ TWO REAL GAPS, EACH MEASURED AND EACH NAMED SPECIFICALLY (not "the topic"):
//   1. RETROBULBAR HAEMORRHAGE / ORBITAL COMPARTMENT SYNDROME — Q5, Q6, Q7, Q8.
//      A case-insensitive grep for "canthotom" and "cantholys" across ALL 29 cached
//      lecture files and ALL 12 cached book chapters returns exactly ONE hit, and that hit
//      is `L25) Trauma I.txt`'s own NOT-COVERED list recording the absence. "retrobulbar"
//      returns 6 lecture hits: L10 twice (once as a cause of proptosis, once about thyroid
//      symptoms), L21 and ch14 as "retrobulbar neuritis" (a different disease), L31,32 in
//      a list, and L25's not-covered note. NEITHER DECK DESCRIBES THE ENTITY.
//      ⚠️ AND THE BOOK DEFERS IT IN WRITING: `content\ophtho\book\ch03-orbit.txt` at
//      printed p.58 prints "4) **Orbital/ Retrobulbar haemorrhage:** (refer to ocular
//      trauma chapter)" and gives only three lines — acute onset, history of trauma,
//      "Ophthalmic emergency due to markedly raised IOP with risk of CRAO". THE BOOK'S
//      OWN TRAUMA CHAPTER (ch.18) IS NOT CACHED and has never been read.
//      ⇒ This is NOT the two-decks-agreeing trap: the book cache was grepped separately
//      and it explicitly points elsewhere rather than covering it.
//      ⇒ Handled per the rule: PREFER ANOTHER SOURCE IN THE MODULE. Grade Gain
//      `opqb-t18-727` and `opqb-t18-728` carry the presentation, the pathophysiology and
//      the canthotomy/cantholysis answer, and are cited in the draft. Only the 2-hour
//      window (Q7) has no in-module source at all and is tagged as outside knowledge.
//   2. SHAKEN BABY SYNDROME — Q19. ZERO hits for "shaken", "shaking" (one unrelated ch14
//      hit about environment shaking), "non-accidental", "nonaccidental" and "subdural"
//      across all 29 lecture files AND all 12 cached book chapters, case-insensitively.
//      "abuse" returns exactly one hit, "topical anaesthetic abuse" in the cornea deck.
//      The specific things absent: the syndrome by name, its retinal haemorrhages, and the
//      apnoea/hypoxia mechanism the key turns on. Filled from general medical knowledge
//      and tagged on the claim in the draft.
//
// ⚠️ THINGS I CHECKED BEFORE CLAIMING THEM ABSENT AND FOUND PRESENT (so the absence was
//   never written): blow-out fracture (L25 slides 19–24 AND book pp.58–59 in full),
//   chemical grading with prognosis (L25 slide 7 AND L26), hyphaema grading, complications
//   and treatment (L25 slides 25–28), siderosis/chalcosis by name (L25 slides 46/47),
//   the MRI prohibition (L25 slide 52 verbatim), open-globe signs and the shield rule
//   (L25 slides 49–51), deep/shallow anterior chamber as an open-globe sign (L25 slide 50).
//
// ═══════════════════════════════════════════════════════════════════════════════════
// BRIEF CORRECTIONS — WHERE THE INSTRUCTION WAS WRONG
// ═══════════════════════════════════════════════════════════════════════════════════
// 1. "Chapter 18 lives on p-058, p-059, p-060 AND THE FIRST HALF OF p-061." WRONG.
//    p-061's first (left) half is book p.118 and carries the chapter 19 banner. Chapter 18
//    ends on p-060's right half, book p.117. p-061 was still read, as the brief intended,
//    to prove the lower boundary.
// 2. "Expect the same shape here" (a menu printed with a letter missing, as in ch.17 Q2
//    and Q9). DID NOT OCCUR. All 26 menus are lettered consecutively from A. No key index
//    is shifted anywhere in this chapter.
// 3. "The OCR already shows Q4 keyed E and Q23 keyed E on questions whose menus you must
//    count." Counted — both menus have five options and in both cases E is the fifth, so
//    index 4. Neither is anomalous.
// 4. The Q11 gap IS exactly as the brief described option (a), and the brief was right to
//    refuse to guess: the OCR could not have told the difference. Settled on the pixels.
// 5. The brief's page arithmetic (PDF sheet N = book 2N−4 | 2N−3) held on all four sheets
//    and was re-proved from the printed folio numerals rather than assumed.
// 6. Everything else in the brief — the inline answers, the numbering restart, the zero
//    boxes and zero figures, the antecedent of Q12/Q13 being Q9, and the shared-menu trap
//    at Q22/Q25 — was correct.
