// house-c17.array.js — House bank (ophthalmology MCQ.pdf), Chapter 17 "Ocular malignancies"
// Verbatim staging record. Written before the draft, per the brief.
//
// WHAT THE BANNER LITERALLY PRINTS
//   Book p.108 (sheet 56, LEFT half) opens with a full-width red band, white bold
//   sans-serif text: "17. Ocular malignancies" — lower-case "malignancies", exactly as
//   house-c16.array.js predicted from its own boundary check. Numbering restarts at 1
//   beneath it.
//   Boundary proof, BOTH ends, read off the pixels rather than inferred:
//     • Upper end — book p.107 was the tail of chapter 16 (its Q23–Q25, per
//       house-c16.array.js), and p.108 carries the ch.17 banner.
//     • Lower end — book p.111 (sheet 57, RIGHT half) ends with Q17's answer rule; the
//       whole lower third of that half-sheet is blank. Book p.112 (sheet 58, LEFT half)
//       opens with the next red band: "18. Ocular trauma", its Q1 numbering restarted.
//       Rendered and READ, not assumed.
//   ⇒ Chapter 17 = book pp.108–111 = PDF sheets 56–57. Four book pages, two PDF sheets.
//
// THE PAGE MAP I ACTUALLY USED
//   A4 LANDSCAPE, TWO book pages per PDF sheet, left = even, right = odd. Both halves of
//   every sheet were read; the folio numeral was confirmed on every half (108, 109, 110,
//   111, 112). Renders at 200 dpi in <scratchpad>\ocr\h17\.
//     p-056.png = book 108 | 109   (108 = banner + Q1–Q4 | 109 = Q5–Q8, then Q9's STEM
//                                   ALONE — p.109 ends there, verified on a 2x crop)
//     p-057.png = book 110 | 111   (110 = Q9's options + answer, Q10–Q12, Q13 stem +
//                                   options A–D | 111 = Q13 option E + answer, Q14–Q17;
//                                   below Q17's rule the page is blank)
//     p-058.png = book 112 | 113   (rendered PAST the last question: "18. Ocular trauma"
//                                   banner confirmed at p.112 — chapter closed)
//   ⚠️ TWO questions straddle a page break in this chapter (Q9 and Q13). The `p` field
//   below carries the page the STEM is printed on; the straddle is named in the note.
//
// PRINTED COUNT
//   17 questions, numbered 1–17 with no gap and no repeated number. Counted forwards from
//   the banner and backwards from Q17; both passes agree. The brief's first-pass OCR count
//   of 17 is CORRECT.
//   Answers are printed INLINE beneath each option list ("Answer: C"), House style. There
//   is no pooled key page and no key section anywhere in the chapter.
//
// PRINTED EXPLANATION BOXES — ZERO. FIGURES — ZERO.
//   Counted page by page on this chapter's own pages (108, 109, 110, 111), not carried
//   forward from chapter 16: every band between one question and the next contains only
//   the option list, the "Answer:" line and the red rule. No shaded box, no photograph,
//   no diagram, no table anywhere in the chapter. Both half-sheets are pure text.
//   Markers required in the draft = 17 entries − 0 boxes = 17.
//
// ⚠️⚠️ DEFECTS HIT — TWO MISSING OPTION LETTERS, NOT ONE
//   The brief flagged Q2. There is a SECOND one it did not know about, Q9, of exactly the
//   same family. Both verified on 2x–2.2x crops at full render resolution.
//
//   • Q2 (p.108) — THE BOOK ITSELF PRINTS A MENU THAT SKIPS FROM C TO E. This is a SOURCE
//     DEFECT, not an OCR drop. The four printed lines, quoted exactly:
//         "A. Squamous cell carcinoma"
//         "B. Basal cell carcinoma"
//         "C. Retinoblastoma"
//         "E. Choroidal melanoma"
//     There is no D line, and no blank line where a D could have been: B, C and E sit on
//     consecutive baselines at the same leading as every other option list on the page.
//     Transcribed as printed. Key C is unaffected — C is "Retinoblastoma" either way.
//
//   • Q9 (stem p.109, options p.110) — THE BOOK PRINTS NO OPTION A AT ALL. The stem is the
//     last thing on p.109 (nothing below it but the folio rule). p.110 resumes directly
//     under the running header with:
//         "B. Radiotherapy"
//         "C. Chemo-radiotherapy"
//         "D. Complete excisioh with a safety margin followed by reconstruction"
//         "E. None of the above"
//         "Answer: D"
//     No A line on either page. Four printed options, lettered B–E. Key D is unaffected.
//     ⚠️ NOTE THE ASYMMETRY WITH Q2: Q2 loses a MIDDLE letter, Q9 loses the FIRST. The
//     option INDEX therefore shifts for Q9 and not for Q2 — see the draft's answer field.
//
//   • Q4 (p.108) — A CONSTRUCTION DEFECT IN THE ITEM, recorded not corrected. The stem is
//     "All of the following are true regarding basal cell carcinoma of the eyelid except?"
//     and A, B and C are each independently TRUE of BCC by the book (p.215). The key is E,
//     "All of the above". The item is only coherent if E is read as "all of the above [are
//     true]" — i.e. the "except" has no referent. Keyed E as printed; never disputed.
//
//   • PRESERVED PRINTED TYPOS (all confirmed on the page, none repaired):
//       Q9  option D — "excisioh" (for "excision")
//       Q17 option C — "indiviuals" (for "individuals")
//       Q12 stem     — "is the most common sites" (singular verb, plural noun)
//       Q16 stem     — "are the most common sites" (plural verb; the two stems disagree
//                      with each other, and each disagrees with itself — as printed)
//       Q12 stem     — "of eyelid" (no article)
//
//   • OCR DEFECTS REPAIRED SILENTLY AS TRANSCRIPTION HYGIENE (cosmetic only, every one
//     re-read against the pixels): missing space after punctuation throughout ("2.Which",
//     "previous case,what"); options merged onto one line; "Squa mous" → "Squamous"
//     (Q3 option A); junk digit runs "38022126920", "-583906562", "03319218" dropped;
//     garbled running header ("田oUSE", "回OUSE", "画OUSE") dropped.
//   ⚠️ The OCR also FLOATED Q10's options A and B above its own stem on p.110 and printed
//     them out of order ("B. Basal cell carcinoma" before "A. Squamous cell carcinoma").
//     On the page they sit under the stem in normal A–D order. Reading order only.
//
// BACK-REFERENCES (THREE; every antecedent READ off the page, not assumed — each is in
// fact the immediately preceding number, and that was confirmed rather than presumed)
//   • Q6 "In the previous case…" → antecedent Q5, the retinoblastoma vignette directly
//     above it on p.109. Repair restates FINDINGS ONLY (5-year-old girl, impaired vision
//     + strabismus, leukocoria, calcified retinal mass on U/S) — NOT the diagnosis, which
//     is Q5's key.
//   • Q9 "In the previous case…" → antecedent Q8, the 74-year-old man with chronic
//     conjunctivitis directly above it on p.109.
//     ⚠️ THE ONE REPAIR IN THIS CHAPTER THAT COULD NOT BE MADE FINDINGS-ONLY, FLAGGED FOR
//     THE HUB. Q8's key is an ACTION — "Look for a sebaceous carcinoma". Q9 then asks for
//     the best LINE OF MANAGEMENT, keying "complete excision with a safety margin followed
//     by reconstruction". A findings-only repair ("a 74-year-old man with chronic
//     conjunctivitis — what is the best line of management?") makes Q9's own key absurd:
//     you do not excise a conjunctivitis. So the repair names the confirmed diagnosis.
//     Hand-read both ways: naming it does NOT answer Q9's own question (the treatment
//     still has to be known), but it DOES restate the substance of Q8's key. Judged the
//     lesser fault against an unanswerable item; the hub can overrule by swapping in the
//     findings-only form, which is written out in the draft's note.
//   • Q11 "In the previous case…" → antecedent Q10, the 59-year-old with the lid ulcer
//     directly above it on p.110. Repair restates FINDINGS ONLY (ulcerative lesion, beaded
//     edges, dilated vessels on the ulcer margin) — deliberately NOT the diagnosis, because
//     Q11's own options B ("usually arises in the lower eyelid") and C ("It's the most
//     common eyelid malignancy") are themselves the defining facts of that diagnosis;
//     naming it would hand over two of the four options as well as Q10's key.
//
// ⚠️⚠️ THE THREE FOLD CANDIDATES THE BRIEF NAMED — VERDICTS. Chapter 16's entries were
// read from app\data\questions.ophtho.js AND from house-c16.array.js (the verbatim
// staging record), because the app entry for a back-reference carries the REPAIRED stem,
// not the printed one, and comparing a repair against a printing is how a fold gets
// mis-verdicted. Verdicts are reported; the HUB decides and merges.
//
//   1. ch.17 Q5  vs  ch.16 Q5  →  ✅ EXACT CROSS-CHAPTER REPRINT. CONFIRMED.
//      Stem WORD-IDENTICAL, checked token by token on a 1.9x crop against the c16 array
//      string — same clauses, same punctuation, same "(leukocoria)" parenthesis.
//      Options IDENTICAL IN TEXT AND IN ORDER, all five: Squamous cell carcinoma / Basal
//      cell carcinoma / Retinoblastoma / Sebaceous carcinoma / Choroidal melanoma.
//      Printed keys AGREE: C in both, and C is "Retinoblastoma" in both — the key letter
//      does NOT move, because the order does not move.
//      Fold shape: cross-CHAPTER exact (shape 5 of the six on record).
//
//   2. ch.17 Q6  vs  ch.16 Q6  →  ⚠️ NOT VERBATIM. ONE WORD DIFFERS. Otherwise identical.
//      ch.16 Q6 prints: "…would be the best next step in evaluation of that girl?"
//      ch.17 Q6 prints: "…would be the best next step in THE evaluation of that girl?"
//      The definite article "the" before "evaluation" is present in ch.17 and absent in
//      ch.16. Verified on a 1.9x crop of p.109 against the c16 array's verbatim string;
//      this is a difference between the two PRINTINGS, not between a printing and a repair.
//      Everything else matches: the rest of the stem is word-identical, and the five
//      options are IDENTICAL IN TEXT AND IN ORDER (Radiotherapy, chemotherapy combined
//      with laser therapy / Radical surgery / Check for a similar mass in the other eye
//      before treatment / Chemotherapy and radiotherapy only / None of the above).
//      Printed keys AGREE: C in both; key letter does not move.
//      Fold shape: cross-CHAPTER RESPELLED (shape 2 crossed with shape 5) — a reprint
//      differing by one function word. The brief said "believed verbatim"; it is not
//      quite, and the difference is recorded here so the hub folds on fact, not on belief.
//
//   3. ch.17 Q2  vs  ch.16 Q19  →  ⚠️⚠️ THE BRIEF IS WRONG ABOUT WHAT THIS ONE IS.
//      The brief (and the forward-flag note inside ch.16's own Q19) says ch.17 Q2 reprints
//      the ch.16 Q19 stem "with a FIFTH option ADDED, E. Choroidal melanoma" — a
//      menu-LENGTHENED reprint. IT IS NOT LENGTHENED. Both questions print FOUR options.
//        ch.16 Q19 prints  A. Squamous cell carcinoma / B. Basal cell carcinoma /
//                          C. Retinoblastoma / D. Sebaceous carcinoma        (letters A–D)
//        ch.17 Q2  prints  A. Squamous cell carcinoma / B. Basal cell carcinoma /
//                          C. Retinoblastoma / E. Choroidal melanoma         (letters A,B,C,E)
//      So what actually happened is TWO things at once, and the brief collapsed them into
//      one: (i) the fourth printed option's TEXT differs — "Sebaceous carcinoma" in ch.16,
//      "Choroidal melanoma" in ch.17; and (ii) ch.17's copy skips the letter D, which is
//      the Q2 defect recorded above. Seeing an "E." and assuming an A–E menu is how the
//      boundary-check glance produced "a fifth option added".
//      Stem: WORD-IDENTICAL ("Which of the following is the most common primary
//      intraocular malignancy in pediatric age group?" — including the missing article
//      before "pediatric").
//      Printed keys AGREE: C in both, and C is "Retinoblastoma" in both. The key letter
//      does NOT move, and the key TEXT does not move — the swap is confined to a distractor.
//      DISCRIMINATING TOKEN (the thing that differs, if the hub folds and keeps one):
//      the fourth option — "SEBACEOUS CARCINOMA" (ch.16 Q19) vs "CHOROIDAL MELANOMA"
//      (ch.17 Q2). Nothing else in either question differs.
//      Fold shape: a SEVENTH shape, not on the six-shape list — a DISTRACTOR-SWAPPED
//      reprint carrying a LETTERING GAP. Not "dropped filler": neither swapped option is
//      filler, both are real malignancies, and the count did not change.
//      ⚠️ If the hub folds these, the surviving entry must say WHICH distractor menu it
//      carries, because a learner meeting "Choroidal melanoma" in the pediatric stem is
//      being offered the adult answer as the near-miss, which ch.16's menu never offered.
//
// ⚠️ A FOURTH PAIR THE BRIEF DID NOT NAME — AND IT MUST NOT BE FOLDED.
//   Q14 and Q15 sit adjacent on p.111, share an IDENTICAL five-option menu in an IDENTICAL
//   order (Squamous cell carcinoma / Basal cell carcinoma / Retinoblastoma / Choroidal
//   melanoma / Secondaries from other sites), and their stems differ by ONE WORD. Their
//   keys are DIFFERENT — D for Q14, E for Q15.
//     Q14: "the most common PRIMARY intraocular malignancy in the adult age group" → D
//     Q15: "the most common intraocular malignancy in the adult age group"          → E
//   DISCRIMINATING TOKEN: the word **"primary"**. This is precisely the House chapter-6
//   trachoma trap (TT vs TS) in a new costume — a shared menu PAIRING two questions rather
//   than duplicating one. A similarity scorer that weights the shared 5-option menu will
//   rank this pair near 1.00; folding it would delete one question and leave the survivor
//   keyed for the wrong one of the two facts. DO NOT FOLD. The book teaches both halves in
//   consecutive bullets on ophthalmology.pdf p.215, which is why the bank asks both.
//
// ⚠️ CROSS-BANK CANDIDATE (not a within-bank fold — flagged for the hub, NOT decided here).
//   ch.17 Q1 vs Grade Gain `opqb-t19-790`. Same fact, same four option TEXTS, DIFFERENT
//   ORDER, and therefore a DIFFERENT KEY LETTER:
//     House ch.17 Q1: Retina / Optic nerve / Choroid / Ciliary body      → key C (index 2)
//     GG opqb-t19-790: Retina / Choroid / Ciliary body / Optic nerve     → key B (index 1)
//   Stems are reworded, not identical ("the most common intraocular site for metastatic
//   tumors" vs "the most common site of ocular metastasis"). Because the banks differ this
//   is the `alsoIn` case, not the fold case — but the reordering MOVES THE KEY LETTER, so
//   whichever printing survives must carry its own order and its own answer index. Named
//   here so the hub adjudicates on the measurement rather than on the stem's smell.
//
// ⚠️ WHERE THE BRIEF WAS WRONG, in one place beyond fold candidate 3:
//   The brief says "Grade Gain topic 16 (`opqb-t16-*`) and topic 24 material cover
//   retinoblastoma and ocular tumours". THERE IS NO `opqb-t24` IN THE CORPUS — the Grade
//   Gain topic ids run t1–t22, counted by id prefix over app\data\questions.ophtho.js.
//   The Grade Gain ocular-tumour topic is **t17** (`opqb-t17-705`, `-706`, `-708`, `-713`,
//   `-714`, `-715`); ocular metastasis is **t19** (`opqb-t19-790`); the chalazion-biopsy
//   rule is **t5** (`opqb-t5-222`); and t16 carries the paediatric/leukocoria and
//   retinoblastoma-management items (`opqb-t16-682`, `-683`, `-702`, `-703`, `-704`).
//   Only ids verified to exist are cited in the draft.
//
// OPTION-COUNT PRINTING IN THIS CHAPTER
//   Five printed options (11): Q3, Q4, Q5, Q6, Q7, Q8, Q12, Q13, Q14, Q15, Q17.
//   Four printed options  (6): Q1, Q2 (lettered A,B,C,E), Q9 (lettered B,C,D,E), Q10,
//                              Q11, Q16.
//   11 + 6 = 17 ✓ — re-counted off the parsed file, not off this header's first draft,
//   which had Q4 in the wrong column (it prints five: three BCC facts, "A & B", "All of
//   the above").
//   ⚠️ Q2 and Q9 print four options each but are LETTERED to five — that is the defect,
//   and it is why the answer index in the draft must be computed from the PRINTED POSITION
//   for Q9 (key D = the 3rd printed line = index 2) and from the letter for Q2 (key C =
//   the 3rd printed line = index 2, the two happening to coincide).

var HOUSE_C17_PAGES = [

{ n:1, p:108, key:'C',
  stem:'What is the most common intraocular site for metastatic tumors?',
  opts:['Retina','Optic nerve','Choroid','Ciliary body'],
  note:'Four options, A–D, no defect. First question under the banner. FLAG (cross-bank, not a fold): Grade Gain opqb-t19-790 asks the same fact with the SAME four option texts in a DIFFERENT order (Retina / Choroid / Ciliary body / Optic nerve, key B) — the reorder moves the key letter. Hub adjudicates alsoIn.' },

{ n:2, p:108, key:'C',
  stem:'Which of the following is the most common primary intraocular malignancy in pediatric age group?',
  opts:['Squamous cell carcinoma','Basal cell carcinoma','Retinoblastoma','Choroidal melanoma'],
  note:'⚠️⚠️ SOURCE DEFECT, VERIFIED ON A 2.2x CROP: the book prints the option letters A, B, C, E — THERE IS NO D LINE. The four opts above are the four printed lines in printed order; the fourth is lettered "E." on the page. Key C = the third printed line = index 2, unaffected by the gap. FOLD CANDIDATE 3: stem is word-identical to ch.16 Q19, whose fourth option is "Sebaceous carcinoma" lettered D — so this is a DISTRACTOR-SWAPPED reprint with a lettering gap, NOT the "fifth option added" the brief describes. Discriminating token: "Choroidal melanoma" vs "Sebaceous carcinoma".' },

{ n:3, p:108, key:'B',
  stem:'Which of the following is the most common eyelid malignancy?',
  opts:['Squamous cell carcinoma','Basal cell carcinoma','Retinoblastoma','Sebaceous carcinoma','Choroidal melanoma'],
  note:'Five options, A–E, no defect. This is the chapter\'s "master menu" — the same five names in the same order carry Q5 and Q13 as well. OCR read option A as "Squa mous cell carcinoma"; the page prints "Squamous". Note this menu is NOT evidence that Q3/Q5/Q13 are one question — they test three different facts (commonest lid malignancy / a paediatric vignette / recurrent chalazion). Discriminating tokens: "eyelid" vs "5-year-old ... calcified mass" vs "recurrent chalazia".' },

{ n:4, p:108, key:'E',
  stem:'All of the following are true regarding basal cell carcinoma of the eyelid except?',
  opts:['BCC ulcer has rolled edges','It spreads by local invasion of adjacent tissues','Treatment is by complete excision with safety margin','A & B','All of the above'],
  note:'⚠️ CONSTRUCTION DEFECT, recorded not corrected. A, B and C are each independently TRUE of BCC per ophthalmology.pdf p.215, so an "except" stem has no true referent; the key E ("All of the above") is coherent only read as "all of the above are true". Keyed E as printed. The "A & B" / "All of the above" pairing at D/E is the menu shape the brief warned needs care.' },

{ n:5, p:109, key:'C',
  stem:'A 5-year-old girl was brought to the ophthalmologist with a complaint of impaired vision and strabismus. Red reflex was altered (leukocoria) and ultrasonography revealed a calcified mass within the retina. Which of the following is the most likely diagnosis?',
  opts:['Squamous cell carcinoma','Basal cell carcinoma','Retinoblastoma','Sebaceous carcinoma','Choroidal melanoma'],
  note:'⚠️ FOLD CANDIDATE 1 — VERIFIED EXACT CROSS-CHAPTER REPRINT of ch.16 Q5 (book p.103). Stem word-identical; five options identical in TEXT and in ORDER; keys agree (C both, "Retinoblastoma" both); the key letter does not move. Antecedent for Q6.' },

{ n:6, p:109, key:'C',
  stem:'In the previous case, if the parents gave a history of a similar mass in other children of the family, which of the following would be the best next step in the evaluation of that girl?',
  opts:['Radiotherapy, chemotherapy combined with laser therapy','Radical surgery','Check for a similar mass in the other eye before treatment','Chemotherapy and radiotherapy only','None of the above'],
  note:'Back-reference → Q5 (the vignette directly above on p.109; READ, not assumed). Repair restates FINDINGS ONLY, never the diagnosis (Q5\'s key). ⚠️ FOLD CANDIDATE 2 — NOT verbatim against ch.16 Q6: this printing has "in THE evaluation of that girl", ch.16 p.103 prints "in evaluation of that girl". One function word, verified on a 1.9x crop against the c16 verbatim string. Options identical in text and order; keys agree (C both).' },

{ n:7, p:109, key:'C',
  stem:'Which of the following eyelid malignancies occurs commonly in the geriatric age group (7th and 8th decades of life)?',
  opts:['Basal cell carcinoma','Squamous cell carcinoma','Sebaceous carcinoma','Malignant melanoma','None of the above'],
  note:'Five options. ⚠️ The option ORDER here is NOT the chapter master menu — BCC and SCC are swapped relative to Q3/Q5/Q13, and options D/E differ. Any comparison against Q3 must be made on text, not on position.' },

{ n:8, p:109, key:'C',
  stem:'A 74-year-old man complains of chronic conjunctivitis in the left eye. What is the best management of that patient\'s condition?',
  opts:['Treatment of the conjunctivitis only','Look for a systemic illness that may be responsible for that presentation','Look for a sebaceous carcinoma','Symptomatic treatment','None of the above'],
  note:'Five options. Antecedent for Q9. Key is an ACTION (a work-up decision), not a diagnosis — which is what makes Q9\'s repair awkward; see the header.' },

{ n:9, p:109, key:'D',
  stem:'In the previous case, what is the best line of management?',
  opts:['Radiotherapy','Chemo-radiotherapy','Complete excisioh with a safety margin followed by reconstruction','None of the above'],
  note:'⚠️⚠️ SOURCE DEFECT, VERIFIED ON A 2x CROP: NO OPTION A IS PRINTED ANYWHERE. The stem is the last item on p.109; p.110 resumes directly with "B. Radiotherapy". The four opts above are the four printed lines in printed order, lettered B, C, D, E on the page. ⚠️ THE KEY INDEX SHIFTS: key D = the THIRD printed line = index 2, NOT index 3. Straddles the p.109/p.110 break. Printed typo preserved: "excisioh". Back-reference → Q8 (READ, directly above on p.109); the repair is the one that could not be made findings-only — see the header.' },

{ n:10, p:110, key:'B',
  stem:'A 59-year-old male patient visits the ophthalmologist with a complaint of a lid ulcer. He reported that the ulcer appeared 5 weeks ago and enlarged in size over that period. Examination revealed an ulcerative lesion with beaded edges and dilated vessels on the ulcer margin. Which of the following is the most likely diagnosis?',
  opts:['Squamous cell carcinoma','Basal cell carcinoma','Retinoblastoma','Sebaceous carcinoma'],
  note:'Four options, A–D, no defect (the chapter master menu minus "Choroidal melanoma"). ⚠️ The OCR floated options A and B above the stem and printed B before A; on the page they sit beneath the stem in normal A–D order. Antecedent for Q11.' },

{ n:11, p:110, key:'A',
  stem:'In the previous case, which of the following is NOT a characteristic of the lesion observed in that patient?',
  opts:['It usually metastasizes early','It usually arises in the lower eyelid','It\'s the most common eyelid malignancy','None of the above'],
  note:'Back-reference → Q10 (the lid-ulcer vignette directly above on p.110; READ, not assumed). Repair restates FINDINGS ONLY and deliberately does NOT name the diagnosis: options B and C are themselves that diagnosis\'s defining facts, so naming it would hand over two of the four options as well as Q10\'s key. Hand-read against Q11\'s own key (A) — the repair does not answer it.' },

{ n:12, p:110, key:'D',
  stem:'Which of the following is the most common sites of basal cell carcinoma of eyelid?',
  opts:['Temporal part of upper lid','Temporal part lower lid','Nasal part of upper lid','Nasal part of lower lid','None of the above'],
  note:'Five options. Printed grammar preserved: "is the most common sites", and "of eyelid" without an article. Option B prints "Temporal part lower lid" (no "of"), option A prints "Temporal part of upper lid" (with "of") — the source\'s own inconsistency, kept.' },

{ n:13, p:110, key:'D',
  stem:'Which of the following lesions should be suspected in an old patient with recurrent chalazia?',
  opts:['Squamous cell carcinoma','Basal cell carcinoma','Retinoblastoma','Sebaceous carcinoma','Choroidal melanoma'],
  note:'Five options, the chapter master menu again. Straddles the page break: stem + options A–D on p.110, option E and "Answer: D" at the top of p.111. Plural "chalazia" as printed.' },

{ n:14, p:111, key:'D',
  stem:'Which of the following is the most common primary intraocular malignancy in the adult age group?',
  opts:['Squamous cell carcinoma','Basal cell carcinoma','Retinoblastoma','Choroidal melanoma','Secondaries from other sites'],
  note:'⚠️ PAIRED WITH Q15, NOT DUPLICATED BY IT. Identical five-option menu in identical order, adjacent on the page, stems differing by the single word "primary", and DIFFERENT KEYS (D here, E at Q15). DO NOT FOLD — see the header. Discriminating token: "primary".' },

{ n:15, p:111, key:'E',
  stem:'Which of the following is the most common intraocular malignancy in the adult age group?',
  opts:['Squamous cell carcinoma','Basal cell carcinoma','Retinoblastoma','Choroidal melanoma','Secondaries from other sites'],
  note:'⚠️ The other half of the Q14/Q15 pair. Same menu, same order, key E not D. The word "primary" is absent from this stem and present in Q14\'s — that single token is the whole question. DO NOT FOLD.' },

{ n:16, p:111, key:'B',
  stem:'Which of the following are the most common sites of squamous cell carcinoma of the eyelid?',
  opts:['Upper lid & medial canthus','Upper lid & lateral canthus','Lower lid & medial canthus','Lower lid & lateral canthus'],
  note:'Four options, A–D, no defect. A 2x2 grid of lid × canthus. Companion to Q12 (the same question for BCC) — paired, not duplicated: different tumour, different key, and the option menus are built on different axes (Q12 is nasal/temporal × upper/lower). Discriminating token: "squamous cell carcinoma" vs "basal cell carcinoma".' },

{ n:17, p:111, key:'D',
  stem:'Which of the following is true regarding choroidal melanoma?',
  opts:['It represents >80% of the uveal tract tumors','Distant metastasis is common','It\'s more prevalent in dark-skinned indiviuals','A & B','A & C'],
  note:'Five options, A–E, no lettering defect. Printed typo preserved in option C: "indiviuals". Option C is FALSE by two sources (ophthalmology.pdf p.217 "more prevalent in fair-skinned individuals"; L24 slide 13 "Race: Caucasians (rare in blacks)"), which is what makes D correct and E wrong. Last question of the chapter — below its answer rule p.111 is blank, and p.112 opens "18. Ocular trauma".' }

];
