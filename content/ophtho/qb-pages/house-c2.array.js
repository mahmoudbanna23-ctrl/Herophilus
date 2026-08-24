// VERBATIM STAGING — Dr. HOUSE in Ophthalmology MCQs
// Source file: Semester 8\Opthalmo\Questions\ophthalmology MCQ.pdf
// Part A, Chapter 2: "2. Optics & errors of refraction" — book pp.16-22 (PDF pp.10-13)
//
// ⚠️ THE BRIEF SAID "December 2025 edition". THE RUNNING HEADER ON EVERY PAGE OF THIS
//    CHAPTER PRINTS "Ophthalmology MCQs 2026" (left header block, all seven book pages
//    read). The cover was not re-rendered for this run, so the cover's own wording is
//    not disputed here — but the running header says 2026 and that is what I read.
//
// ⚠️ PAGE ARITHMETIC — CONFIRMED, THE BRIEF WAS RIGHT. A4 LANDSCAPE, TWO BOOK PAGES per
//    PDF page, left = even, right = odd. From PDF p.3 onward:
//        book pages on PDF page N  =  2N-4 (left) and 2N-3 (right)
//        PDF page for book page b  =  floor(b/2) + 2
//    Verified against the printed folio numerals in the footer of every half-page read.
//
// PAGE MAP ACTUALLY USED — six sheets were supplied, FOUR were needed:
//    p-010.png = book 16 ‖ 17   -> chapter title + Q1-Q4 ‖ Q5-Q9
//    p-011.png = book 18 ‖ 19   -> Q10-Q14 ‖ Q15-Q19 (Q19's answer line runs over)
//    p-012.png = book 20 ‖ 21   -> [Q19 answer] Q20-Q24 ‖ [Q24 answer] Q25-Q29
//    p-013.png = book 22 ‖ 23   -> Q30-Q32, then the page ENDS ‖ "3. The Orbit" begins
//    p-014.png = book 24 ‖ 25   -> NOT USED (chapter 3)
//    p-015.png = book 26 ‖ 27   -> NOT USED (chapter 3)
//
// ⚠️ CHAPTER LENGTH ESTABLISHED BY READING, NOT ASSUMED. Chapter 2 runs Q1-Q32 over book
//    pp.16-22. The right-hand half of sheet p-013 (book p.23) carries the red banner
//    "3. The Orbit" and its own Q1, so the chapter boundary is printed and unambiguous.
//    Book p.22 is HALF EMPTY below Q32 — the chapter stops mid-page, it is not cut off.
//    PRINTED COUNT: 32. No printed total is given anywhere; this is a read count.
//
// ⚠️ ANSWERS ARE PRINTED INLINE beneath each question ("Answer: X"). CHECKED ONE BY ONE:
//    ALL 32 QUESTIONS CARRY AN ANSWER LINE. Two of them sit on the NEXT book page,
//    orphaned from their question by the page break — Q19's "Answer: A" is the first
//    line of book p.20, and Q24's "Answer: D" is the first line of book p.21. Reading
//    only the page a question starts on would have lost both keys.
//
// ⚠️ EXPLANATION BOXES PRINTED IN THIS CHAPTER: ZERO. Counted on all seven book pages
//    (16,17,18,19,20,21,22). The chapter's only furniture is the question, its lettered
//    options, the "Answer: X" line and a red horizontal rule between questions.
//    (Chapter 1 also printed zero — but this was counted here, not carried over.)
//
// ⚠️ FIGURES PRINTED IN THIS CHAPTER: ZERO. No image, diagram, chart or photograph on
//    any of the seven book pages. NO CROPS WERE CUT and none is needed: every stem in
//    the chapter is fully answerable from its own text.
//
// ⚠️ QUESTION NUMBERING RESTARTS AT 1 IN EVERY CHAPTER — confirmed again here (chapter 2
//    opens at Q1 on book p.16, chapter 3 opens at Q1 on book p.23). Ids carry a chapter
//    token: opmcq-c2-<n>.
//
// Transcribed 2026-08-24. Fields: n (printed number), p (BOOK page), key (printed
// letter), stem, opts, and note where the transcription needed a decision.
// VERBATIM: the source's own typos, spellings and capitals stay in this file unrepaired.

var HOUSE_C2_STAGED = [
{ n:1, p:16, key:"D",
  stem:"While examining a 30-year-old man, the opthalmologist noticed that the focal lines of the 2 principal meridians are focused in front of the retina. What is the type of refractive error seen in this patient?",
  opts:["Myopia","Hyperopia","Simple astigmatism","Compound astigmatism","Mixed astigmatism"],
  note:"'opthalmologist' [sic] — misspelled here and again in Q2; spelled correctly in the chapter-3 stems on book p.23. Five options; the chapter's only 5-option shape apart from Q2, Q4, Q16, Q17 and Q31. ⚠️ CLOSE TO AN EXISTING CORPUS ENTRY: opqb-t2-105 (Grade Gain) asks the SAME fact from the other end — 'In compound myopic astigmatism ... would form:' keyed 'Two focal lines in front of the retina'. Stem and options differ; flagged for the sweep, not folded here." },

{ n:2, p:16, key:"E",
  stem:"While examining a 22-year-old man, the opthalmologist noticed that the focal lines of the 2 principal meridians are located on both sides of the retina. What is the type of refractive error seen in this patient?",
  opts:["Myopia","Hyperopia","Simple astigmatism","Compound astigmatism","Mixed astigmatism"],
  note:"'opthalmologist' [sic] again. ⚠️ TWO EXISTING CORPUS ENTRIES ARE CLOSE: opqb-t2-73 (Grade Gain) reaches the same key 'Mixed astigmatism' from the meridian wording, and opqb-t2-105's distractor D is this stem almost word for word ('Two focal lines, one behind and the other in front of the retina'). Flagged for the sweep." },

{ n:3, p:16, key:"A",
  stem:"Which of the following is the type of lenses used to correct simple astigmatism?",
  opts:["Cylindrical lenses only","Spherical lenses only","A & B together","None of the above"],
  note:"⚠️ Paired with Q22, which asks the same question for compound OR mixed astigmatism and keys C. The two are a deliberate pair and must not be folded into each other. Partial overlap with opqb-t2-111 (Grade Gain, 'Cylindrical lenses are used in:' -> Astigmatism)." },

{ n:4, p:16, key:"D",
  stem:"Which of the following is true regarding myopia?",
  opts:["It often stops progression in late 2nd or early 3rd decade","It causes blurred distant vision","It might be complicated by posterior staphyloma","All of the above","None of the above"] },

{ n:5, p:17, key:"B",
  stem:"A 34-year-old man complains of blurred near vision. Which of the following is the most likely cause of that patient's condition?",
  opts:["Presbyopia","Hyperopia","Myopia","Astigmatism"],
  note:"This is the antecedent for the Q6 and Q7 back-references. READ, not assumed — see the notes on those two." },

{ n:6, p:17, key:"A",
  stem:"In the previous case, all of the following lines of treatment may be employed to correct the patient's refracrtive error except?",
  opts:["Spherical concave lens glasses","Spherical convex lens glasses","Contact lenses","LASIK surgery"],
  note:"'refracrtive' [sic]. BACK-REFERENCE: 'the previous case' is Q5 — the 34-year-old man with blurred near vision, keyed hyperopia. Verified by reading Q5, not assumed from position." },

{ n:7, p:17, key:"C",
  stem:"In the previous case, which of the following is NOT among the complications that might arise in that patient?",
  opts:["Squint (accommodative esotropia)","Narrow angle glaucoma","Amblyopia","None of the above"],
  note:"BACK-REFERENCE, TWO LINKS DEEP. 'the previous case' is literally Q6, but Q6 is not a case — it is itself a back-reference. The patient is Q5's 34-year-old hyperope, and 'that patient' in this stem points at the same man. Reading 'previous' as Q6 alone yields no patient at all. ⚠️ The reconstruction must NOT say 'hyperope' outright: Q5's own key is hyperopia, and naming it here would answer Q5 for anyone who met these questions in this order. The draft restates the patient by his clinical description, not by his diagnosis." },

{ n:8, p:17, key:"D",
  stem:"A 22-year-old male complains of frequent headaches and blurred vision. Eye examination revealed that the corneal surface is NOT spherical. What's the diagnosis of that condition?",
  opts:["Myopia","Hypermetropia","Lenticular astigmatism","Corneal astigmatism"],
  note:"Antecedent for the Q9 and Q10 back-references." },

{ n:9, p:17, key:"C",
  stem:"What is the prevalence of the condition mentioned in the previous case?",
  opts:["10%","20%","30%","40%"],
  note:"BACK-REFERENCE: 'the previous case' is Q8 — corneal astigmatism. ⚠️ GAP: the lecture deck prints NO prevalence figure of any kind. Measured, not assumed — the cache's complete numeric inventory for L7,8 lists every number on all 88 slides and contains no percentage, and its NOT-COVERED block states 'The deck contains no percentage and no prevalence figure of any kind, for any refractive error, anywhere.' Answered from general knowledge in the draft and tagged there. ⚠️ Compare Q24, whose keyed option gives myopia '30-40% of the population' — the same defect twice in one chapter, and the two figures are not reconciled by the bank." },

{ n:10, p:18, key:"C",
  stem:"What is the type of glasses used to treat patients with the condition mentioned in the previous case?",
  opts:["Minus lenses","Plus lenses","Cylindrical lenses","Reading glasses"],
  note:"BACK-REFERENCE, TWO LINKS DEEP again. 'the previous case' is Q9, which is itself a back-reference; the condition is Q8's corneal astigmatism. Verified by reading Q8 and Q9 rather than by counting back one." },

{ n:11, p:18, key:"D",
  stem:"Amblyopia occurs commonly with which of the following refractive errors?",
  opts:["Low myopia","High myopia","Low hyperopia","High hyperopia"] },

{ n:12, p:18, key:"A",
  stem:"All of the following conditions can contribute to the occurence of hyperopia except?",
  opts:["Increased refractive index of the lens","Short axial length of the eye","Aphakia","None of the above"],
  note:"'occurence' [sic]." },

{ n:13, p:18, key:"B",
  stem:"Which of the following is the most common cause of amblyopia in children?",
  opts:["Strabismus","Anisometropia","Occlusion ambylopia","Bilateral uncorrected refractive errors"],
  note:"'ambylopia' [sic] in option C — the same word is spelled correctly in the stem and in Q11. Repaired in the draft's option text and recorded there." },

{ n:14, p:18, key:"C",
  stem:"In hypermetropia, blurring of both distant and near vision occurs in which of the following age groups?",
  opts:["Young age","Middle age","Old age","All of the above"] },

{ n:15, p:19, key:"A",
  stem:"In myopia, the near point is situated in which of the following sites?",
  opts:["Closer to the eye than normal","Further from the eye than normal","Behind the eye","Normal location"] },

{ n:16, p:19, key:"D",
  stem:"Which of the following is not among the complications of hyperopia?",
  opts:["Squint","Amblyopia if it develops in young children","Narrow angle glaucoma","Open angle glaucoma","None of the above"] },

{ n:17, p:19, key:"D",
  stem:"Which of the following is among the lines of management used to treat irregular astigmatism?",
  opts:["RGP contact lenses","Soft toric contact lenses","ICR segments","A & C","B & C"],
  note:"⚠️ RELATED CORPUS ENTRY: opqb-t2-81 (Grade Gain) asks the opposite polarity — 'Irregular astigmatism is NOT corrected by:' keyed 'Glasses'. Same slide (L7,8 p71), different question. Flagged for the sweep, not folded." },

{ n:18, p:19, key:"B",
  stem:"A 52-year-old male patient underwent a cataract surgery during which the lens was removed and not replaced by an artificial one. What is the expected refractive error that will develop in such a patient after the operation?",
  opts:["Myopia","Hypermetropia","Astigmatism","Presbyopia"] },

{ n:19, p:19, key:"A",
  stem:"A 15-year-old boy complains of blurry far vision with intact near vision. What is the expected refractive change that causes that condition?",
  opts:["Increased dioptric power of the eye above normal","Decreased dioptric power of the eye above normal","Short axial length of the globe","None of the above"],
  note:"⚠️ THE ANSWER LINE IS ORPHANED ON THE NEXT BOOK PAGE. Q19's stem and options fill the bottom of book p.19; 'Answer: A' is the FIRST LINE of book p.20, above Q20. Read on the p-012 sheet. ⚠️ Option B as printed reads 'Decreased dioptric power of the eye above normal', which is self-contradictory — 'above normal' belongs only to A. Recorded verbatim here; the draft explains what the option is evidently reaching for without silently rewriting it." },

{ n:20, p:20, key:"C",
  stem:"An 18-year-old girl was informed by the ophthalmologist that her eyesight was (-3) in her right eye and (-2.5) in her left eye. Which of the following accurately describes the girl's condition?",
  opts:["It mostly arises due to increased axial length of the eye globe","It's characterized by clear near vision with blurred far vision","Both A & B","Neither A nor B"],
  note:"'ophthalmologist' is spelled correctly here, unlike Q1 and Q2." },

{ n:21, p:20, key:"B",
  stem:"Which of the following is true regarding presbyopia?",
  opts:["It's caused by increased deformability of the lens that accompanies aging","It's characterized by reduced accommodative power that accompanies aging","By the age of 40, the accommodative eye power is lost totally","All of the above"] },

{ n:22, p:20, key:"C",
  stem:"Which of the following is the type of lenses used to correct compound OR mixed astigmatism?",
  opts:["Cylindrical lenses only","Spherical lenses only","A & B together","None of the above"],
  note:"The deliberate pair to Q3 — identical options, different astigmatism subtype, different key. Do not fold." },

{ n:23, p:20, key:"C",
  stem:"Which of the following is a known complication of high myopia?",
  opts:["Diabetic retinopathy","Optic neuritis","Rhegmatogenous retinal detachment","Central retinal artery occlusion"] },

{ n:24, p:20, key:"D",
  stem:"Which of the following is true regarding (near-sightedness)?",
  opts:["It's also known as hyperopia","It's characterized by blurred near vision","It mostly occurs in old age","It happens in around 30-40% of the population"],
  note:"⚠️ THE ANSWER LINE IS ORPHANED ON THE NEXT BOOK PAGE — Q24's options end the bottom of book p.20 and 'Answer: D' is the FIRST LINE of book p.21. Read on the p-012 sheet. ⚠️ GAP, same as Q9: the deck prints no prevalence figure at all. Answered and tagged in the draft." },

{ n:25, p:21, key:"D",
  stem:"Which of the following is true regarding the dioptric power of the eye?",
  opts:["Cornea is the major contibutor of eye dioptric power (42-44 dioptres)","Lens contributes by about 1/3 of eye dioptric power","The average dioptric power of eye is about 60 dioptres","All of the above"],
  note:"'contibutor' [sic] in option A. Repaired in the draft's option text and recorded there." },

{ n:26, p:21, key:"B",
  stem:"All of the following are true regarding light refraction in the eye except?",
  opts:["The 2nd medium (cornea and lens) is optically denser","Light speed is increased as it passes into the 2nd medium","Light rays are focused on the macula","All of the above"] },

{ n:27, p:21, key:"C",
  stem:"Keratoconus (conical protrusion and thinning of the cornea) is a known cause of which of the following refreative errors?",
  opts:["Myopia","Hyperopia","Astigmatism","None of the above"],
  note:"'refreative' [sic] — verified at 2x zoom on the crop, not read at page scale. Repaired in the draft and recorded there. ⚠️ DIVERGENCE WORTH FLAGGING: the lecture names keratoconus in TWO places — as a cause of curvature MYOPIA (L7,8 p42) and as a cause of irregular ASTIGMATISM (L7,8 p64). The bank keys astigmatism. Both printings are quoted in the draft; the key is not disputed." },

{ n:28, p:21, key:"C",
  stem:"Which of the following is the most common form of astigmatism?",
  opts:["Regular lenticular astigmatism","Irregular lenticular astigmatism","Regular corneal astigmatism","Irregular corneal astigmatism"] },

{ n:29, p:21, key:"B",
  stem:"Which of the following is a characteristic feature of presbyopia?",
  opts:["The far point of the eye becomes nearer","It is caused by hardening of the lens with age","It is usually unilateral","All of the above"] },

{ n:30, p:22, key:"B",
  stem:"Accommodative esotropia occurs on top of which of the following refractive errors?",
  opts:["Myopia","Hypermetropia","Astigmatism","Presbyopia"] },

{ n:31, p:22, key:"B",
  stem:"Which of the following is true regarding treatment of hyperopia?",
  opts:["It's indicated in all cases","It's indicated only in symptomatic or complicated cases","It's done through refractive surgery in young age","It maybe done using minus lenses","All of the above"],
  note:"'It maybe done' [sic] — one word for 'may be'." },

{ n:32, p:22, key:"B",
  stem:"Which structure in the eye provides the greatest refractive power?",
  opts:["Lens","Cornea","Vitreous","Aqueous humor"],
  note:"Last question of the chapter. Book p.22 is half blank below this answer line; chapter 3 begins on book p.23." }
];
