// VERBATIM STAGING — Dr. HOUSE in Ophthalmology MCQs
// Source file: Semester 8\Opthalmo\Questions\ophthalmology MCQ.pdf
// Part A, Chapter 4: "4. Lacrimal system" — book pp.29-35 (PDF pp.16-19)
//
// ⚠️ THE RUNNING HEADER SAYS 2026, NOT "December 2025". Every one of the seven book
//    half-pages read for this chapter carries the same header block:
//    "[HOUSE] Ophthalmology MCQs 2026" on the left, "Chapterwise MCQs" on the right.
//    The cover was NOT re-rendered (per the brief), so the cover's own wording is
//    neither confirmed nor disputed here — but the running header reads 2026 on all
//    seven pages. Third chapter in a row with the same finding (chapters 2 and 3).
//
// ⚠️ PAGE ARITHMETIC — CONFIRMED AGAIN, THE BRIEF WAS RIGHT. A4 LANDSCAPE, TWO BOOK
//    PAGES per PDF page, left = even, right = odd:
//        book pages on PDF page N  =  2N-4 (left) and 2N-3 (right)
//        PDF page for book page b  =  floor(b/2) + 2
//    Verified against the printed folio numeral in the footer of every half-page
//    actually read: 28‖29, 30‖31, 32‖33, 34‖35, 36‖37. There is no "book + k" offset,
//    and BOTH halves of every sheet were read.
//
// PAGE MAP ACTUALLY USED — seven sheets were supplied, FIVE were opened, FOUR carry
// chapter 4 and the fifth was opened only to prove the chapter had ended:
//    p-016.png = book 28 ‖ 29  -> [ch.3 Q24-Q28 tail] ‖ red banner "4. Lacrimal system" + Q1-Q4
//    p-017.png = book 30 ‖ 31  -> Q5-Q9 ‖ Q10-Q14 (Q14's key runs over)
//    p-018.png = book 32 ‖ 33  -> [Q14 key] Q15-Q19 (part) ‖ [Q19 tail+key] Q20-Q24 (part)
//    p-019.png = book 34 ‖ 35  -> [Q24 tail+key] Q25-Q29 (part) ‖ [Q29 tail+key] Q30, page ENDS
//    p-020.png = book 36 ‖ 37  -> BOUNDARY CHECK ONLY: red banner "5. Eyelids" heads book
//                                 p.36 and its Q1 restarts the numbering. Not transcribed.
//    p-021.png = book 38 ‖ 39  -> NOT OPENED (chapter 5)
//    p-022.png = book 40 ‖ 41  -> NOT OPENED (chapter 5)
//
// ⚠️ CHAPTER LENGTH ESTABLISHED BY READING, NOT ASSUMED. Chapter 4 runs Q1-Q30 over
//    book pp.29-35. PRINTED COUNT: 30. No printed total appears anywhere in the file;
//    this is a read count, and every one of the thirty numbers 1..30 was seen in
//    sequence with no gap and no repeat. The boundary is printed and unambiguous at
//    BOTH ends — the red banner "4. Lacrimal system" heads book p.29 (right half of
//    sheet p-016), and the red banner "5. Eyelids" heads book p.36 (left half of sheet
//    p-020). Book p.35 carries ONLY Q30 and is then blank for about three quarters of
//    its height — the chapter stops, it is not cut off.
//    THE CHAPTER DID NOT RUN PAST THE RENDERED RANGE. `qpages.js` was not needed and
//    was not run. Two of the seven supplied sheets were surplus.
//
// ⚠️ ANSWERS ARE PRINTED INLINE beneath each question, as "Answer: <letter>", with a
//    full-width red rule separating consecutive questions. There is no pooled answer
//    page. EVERY ONE OF THE THIRTY QUESTIONS WAS CHECKED INDIVIDUALLY FOR ITS OWN
//    ANSWER LINE, one at a time, against the image — 30 questions, 30 answer lines,
//    NONE MISSING. Q10 and Q11 print the same key because they are the same question
//    printed twice (see the duplicate note below), not because a key was dropped.
//
// ⚠️ ORPHANED ANSWER LINES — THE DEFECT IS STILL HERE, BUT ⚠️ **IT DID NOT WORSEN THIS
//    CHAPTER; IT PLATEAUED.** The brief predicted a further rise. Measured:
//      chapter 2 = 2 orphans · chapter 3 = 4 orphans (3 of them with option text)
//      chapter 4 = 4 orphans (3 of them with option text) — IDENTICAL to chapter 3,
//      not worse. The rate per question fell, because chapter 4 is 30 questions
//      against chapter 3's 28. The four breaks:
//        Q14 — p.31 ends after option "D. None of the above"; the key "Answer: A" is
//              the first line of p.32. Options intact, KEY ONLY orphaned.
//        Q19 — p.32 ends after option "B. Dacryocystitis"; options C and D AND the key
//              open p.33.
//        Q24 — p.33 ends after option "A. Dry eye disease"; options B, C, D AND the key
//              open p.34.
//        Q29 — p.34 ends after option "A. Chalazion"; options B, C, D AND the key open
//              p.35.
//      That is FOUR questions broken across a page break, three of them losing option
//      text as well as the key. Reading only the page a question starts on would have
//      lost four keys and nine option lines out of this chapter alone. Every one was
//      recovered by reading the next half-page.
//
// ⚠️ EXPLANATION BOXES: **ZERO.** Not one printed explanation, rationale, box, frame,
//    tint panel or footnote appears anywhere on book pp.29-35. Every question is
//    stem + options + "Answer: <letter>" and nothing else. I looked at all seven
//    half-pages at full width for this specifically; the only non-text ink on any of
//    them is the header band, the red inter-question rules and the footer folio rule.
//    Chapters 1, 2 and 3 also printed zero, so this is now four chapters in a row —
//    but it was COUNTED here, not carried over.
//
// ⚠️ FIGURES: **ZERO.** No photograph, no diagram, no dacryocystogram, no probing
//    illustration, no anatomical drawing — nothing. The brief was right to flag
//    lacrimal as a plausible place for a figure; the bank did not put one here. No
//    crop was cut, and none was needed.
//
// ⚠️ NUMBERING RESTARTS AT 1 IN EVERY CHAPTER — ids therefore carry the chapter token:
//    opmcq-c4-<n>, n = 1..30.
//
// ⚠️⚠️ AN EXACT DUPLICATE IS PRINTED INSIDE THIS CHAPTER: Q10 AND Q11 ARE THE SAME
//    QUESTION, TWICE, ON THE SAME PAGE (book p.31), one immediately after the other.
//    Stem identical word for word INCLUDING the typo "peformed"; the four options
//    identical word for word and in the same order; the key identical ("Answer: C").
//    Compared character by character off the image, not by impression. This is a
//    within-bank duplicate, not a cross-bank one, and it is not mine to fold — both
//    are staged and both are drafted so the hub can see exactly what the page prints.
//
// ⚠️ A CONTRASTED PAIR WHOSE KEYS RUN AGAINST THE BOOK IN ONE DIRECTION: Q3 and Q4
//    (book p.29) are word-identical except for ONE word — Q3 says the reflux is
//    "purulent material", Q4 says it is "mucus" — and they carry DIFFERENT keys, B and
//    C. Q3's key B ("massage and probing surgery if no response after 1 year of age")
//    is exactly the book's ladder; Q4's key C ("Immediate probing") in a 6-month-old
//    contradicts `ophthalmology.pdf` p.67 ("Nasolacrimal duct probing AFTER the age of
//    one year"). Recorded here and explained in the draft. THE KEY IS NOT DISPUTED.
//
// ⚠️ SOURCE SPELLING AND TYPOGRAPHY KEPT EXACTLY: "peformed" (Q10, Q11), "It increase
//    tear film production" (Q9 option C), "Non of the above" (Q23 option D),
//    "Sjögren" with the diaeresis in Q1 but "Sjogren" without it in Q28 option A —
//    the bank spells it both ways within seven pages. No hyphen was broken across a
//    line break anywhere in this chapter, so no word or number needed rejoining.
//
// ⚠️ OPTION COUNTS ARE NOT UNIFORM: 28 questions print four options (A-D); Q21 and Q27
//    print FIVE (A-E). Both fives were re-read to be sure the E line was not the next
//    question's stem.
//
// SOURCES USED FOR THE DRAFT (listed before citing, per the grounding rule):
//   content\ophtho\lectures\ — 29 cached decks; the lacrimal deck is
//     `L9) lacrimal system..txt` (DOUBLE DOT in the filename, 41,013 bytes, 33 slides).
//   content\ophtho\book\ch04-lacrimal-system.txt — book ch.4, printed pp.62-69.
//   Also used: `L10) orbit.txt` slide 31 (acute dacryoadenitis — the ONLY deck that
//     teaches it), `L3,4) Clinical- Ocular examination.txt` slide 7 (the +ve regurge
//     photo trio), `L15,16) Cornea.txt` (the only deck that names Schirmer and TBUT,
//     as pre-LASIK checks), book ch01-examination.txt.
//
// ⚠️ WHICH SOURCE TEACHES WHAT — THE BRIEF WAS RIGHT THAT THE TWO DIVERGE, AND THE
//    SPLIT IS SHARPER THAN "different tests". MEASURED, not assumed:
//      L9 teaches, book does NOT: tear-film layer THICKNESSES (slide 3), the glands of
//        Krause and Wolfring by name (slide 4), the drainage MEASUREMENTS (slide 6:
//        sac 12-15 mm, canaliculus 8-10 mm, NLD 12-18 mm), the valve of Krause and
//        Hasner's valve (slide 7), JONES I and JONES II with their result-to-diagnosis
//        captions (slides 18-19), contrast dacryocystography (slide 20), congenital
//        dacryocoele (slide 23), conjunctivochalasis (24), punctal stenosis primary
//        and secondary (25-26), canalicular obstruction (27), CHRONIC CANALICULITIS
//        and Actinomyces israelii (31), external vs endoscopic DCR (29).
//      Book teaches, L9 does NOT: DRY EYE DISEASE as a whole topic — Sjögren, the
//        aqueous-deficient / evaporative / mixed classification, the whole aetiology
//        list, TBUT with its ≥10 s normal, artificial tears, CYCLOSPORINE A 0.05 %,
//        topical steroids, punctal plugs, tarsorrhaphy (pp.64-65); DACRYOADENITIS
//        entirely (pp.68-69); the four-test tutorial block regurge / fluorescein
//        disappearance / probing / irrigation (p.66); the congenital NLDO age ladder
//        (p.67).
//      L9's own NOT COVERED list says in as many words that dry eye, Sjögren,
//        dacryoadenitis, TBUT and Schirmer are absent from that deck. TWENTY-FOUR of
//        this chapter's thirty questions therefore rest on the BOOK, not on L9.
//
// ⚠️ AND A DECK'S "NOT COVERED" LIST IS SCOPED TO THAT DECK — CHECKED, NOT ASSUMED.
//    Grepped case-insensitively across all 29 cached decks AND all 12 cached book
//    chapters and OPENED every hit:
//      "schirmer"  — real teaching hits in `L15,16) Cornea.txt` (line 458, pre-LASIK
//                    "Adequate tear film (Schirmer's, TBUT)"); every other hit is
//                    inside another cache's own absence list. NOT in ch.4, NOT in L9.
//      "TBUT / break-up" — same single real teaching hit in L15,16; plus the book's
//                    own ch.4 p.65 bullet and its tutorial box. So TBUT IS taught by
//                    the course, in the book chapter this bank is examining.
//      "cyclosporin" — book ch.4 p.65 (the 0.05 % drop), ch.5 p.?, ch.6, ch.7. In NO
//                    ophthalmology deck: `L6) Conjunctiva.txt` records "cyclosporin = 0".
//      "dacryoadenitis" — `L10) orbit.txt` slide 31 and `L3,4)` slide 7 (a photo label)
//                    are the only DECK hits; book ch.3 mentions it only in a boundary
//                    note, ch.4 pp.68-69 is the real account.
//      "scintigraph" — ZERO real hits. It appears only inside L9's and ch.4's absence
//                    lists. Q5's option A is therefore a term the course never teaches.
//
// ⚠️ THE THREE RECORDED DIVERGENCES, ALL LEFT UNRESOLVED, ALL RECORDED IN PLACE:
//   1. CONGENITAL NLDO CONSERVATIVE WINDOW. Grade Gain's printed box sets it at
//      6 MONTHS (`opqb-t4-141`, key "Massage with antibiotics up to the age of 6
//      months"); `ophthalmology.pdf` p.67 sets it at ONE YEAR; `L9` slide 22 gives NO
//      age threshold at all (its own absence list says so explicitly). House sides
//      with the BOOK in Q3 and Q21, and against it in Q4. Recorded, not resolved.
//   2. TEAR-FILM MUCIN THICKNESS. `L9` slide 3 prints "MUCIN LAYER 0.2 µm";
//      `L1,2` slide 56 prints 0.02-0.05 µm; lipid 0.1 µm and aqueous 8 µm agree
//      exactly between the two. The book prints NO thickness at all. No question in
//      this chapter turns on a thickness — Q13 asks only which layer is the "main
//      bulk", which the book answers in words — so the divergence does not bite here.
//      Flagged anyway so nobody has to re-derive it.
//   3. WHERE THE NLD OPENS. `ophthalmology.pdf` p.63 and p.66 say inferior turbinate /
//      inferior meatus; p.67 defines DCR into the MIDDLE meatus; `L9` slide 6 labels
//      the turbinates and leaves the opening unnamed. Already recorded in
//      `opqb-t4-139`'s explanation. No chapter-4 House question asks it.
//
// ⚠️ CROSS-BANK: THE BRIEF PREDICTED GENUINE OVERLAP AND IT IS HERE. Grade Gain topic 4
//    "Lacrimal System" holds 26 questions, `opqb-t4-139` .. `opqb-t4-164`, all present
//    in app\data\questions.ophtho.js and all read for this comparison. Every suspected
//    match is recorded in the individual `note` below with the Grade Gain id, and each
//    one is flagged on the STEM, not on a shared option menu. Summary, strongest first:
//      Q14  ↔ opqb-t4-142  — same question, near-identical wording, same key (sac).
//      Q25  ↔ opqb-t4-159  — same question (oily layer), same key, option menus differ.
//      Q7   ↔ opqb-t4-155  — same question (commonest infectious cause), same key (EBV).
//      Q5   ↔ opqb-t4-156  — same question (best initial imaging), same key (CT orbit).
//      Q19  ↔ opqb-t4-160  — same question shape (DCR NOT indicated), DIFFERENT key
//                            because the option menus differ; NOT a reprint.
//      Q30  ↔ opqb-t4-154  — same question (initial mgmt of acute dacryocystitis).
//      Q9   ↔ opqb-t4-157  — same fact (cyclosporine increases production), different
//                            stem shape (mechanism vs which-drug).
//      Q3/Q4 ↔ opqb-t4-141, -143, -163, -164 — same topic and same ladder, four
//                            different ages; none is a stem match.
//      Q2/Q10/Q11 ↔ opqb-t4-162, -149..-151 — TBUT; GG asks what it measures and pairs
//                            it with a Schirmer value, House asks a seconds threshold.
//      Q24  ↔ opqb-t4-147  — both "epiphora / defective drainage EXCEPT", different
//                            option menus and different keys.
//      I DO NOT MAKE FOLD DECISIONS. These are flags for the hub.

var HOUSE_C4 = [

{ n:1, p:29, key:'B',
  stem:'Which condition presents with dryness, burning, and foreign-body sensation, and is commonly associated with autoimmune diseases such as Sjögren syndrome?',
  opts:['Blepharitis','Keratoconjunctivitis sicca','Episcleritis','Viral keratitis'],
  note:'First question under the red banner on book p.29. "Sjögren" printed with the diaeresis here; Q28 prints "Sjogren" without it. Book p.64 prints the pairing verbatim: "Sjögren Syndrome ( Keratoconjunctivitis Sicca [KCS] )". No GG stem match — GG t4 never asks KCS by name.' },

{ n:2, p:29, key:'D',
  stem:'A patient complains of foreign body sensation, burning and redness of eye. Dry eye disease was suspected so tear film breakup time test was done and it was 13 seconds. Which of the following applies to that patient?',
  opts:['Severe dry eye disease','Moderate dry eye disease','Mild dry eye disease','No dry eye disease'],
  note:'Threshold question. Book p.65: TBUT "normally more than 10 seconds (if less, it is an indication of an unstable tear film)"; the tutorial box repeats "Normal ≥ 10 sec". 13 > 10, so the key is D. The bank offers a severity ladder the book never prints — the book grades nothing by seconds. Pairs with Q10/Q11 (7 seconds). Related GG: `opqb-t4-162` asks what TBUT MEASURES, not a threshold — not a stem match.' },

{ n:3, p:29, key:'B',
  stem:"A 6-month-old child presented with epiphora due to nasolacrimal duct obstruction. Pressure over lacrimal sac caused reflux of purulent material from lacrimal punctum. What's the best management for that child?",
  opts:['Lacrimal sac massage only','Lacrimal sac massage and probing surgery if no response after 1 year of age','Immediate probing','Incision and drainage'],
  note:'⚠️ HALF OF A CONTRASTED PAIR. Word-identical to Q4 except "purulent material" here vs "mucus" there, and the keys differ (B here, C there). Key B matches `ophthalmology.pdf` p.67 exactly. Options and key re-read off the image at 2x to be certain the pair was not mis-transcribed. Related GG: `opqb-t4-141` (3-month-old, mucous regurgitation, key "Massage with antibiotics up to the age of 6 months" — the 6-month window), `opqb-t4-143`, `opqb-t4-163`, `opqb-t4-164` (14-month-old, key probing). Same ladder, four different ages; no stem match.' },

{ n:4, p:29, key:'C',
  stem:"A 6-month-old child presented with epiphora due to nasolacrimal duct obstruction. Pressure over lacrimal sac caused reflux of mucus from lacrimal punctum. What's the best management for that child?",
  opts:['Lacrimal sac massage only','Lacrimal sac massage and probing surgery if no response after 1 year of age','Immediate probing','Incision and drainage'],
  note:"⚠️ THE OTHER HALF, AND THE ONE THAT RUNS AGAINST THE BOOK. Key C, immediate probing at 6 months, contradicts `ophthalmology.pdf` p.67 (\"Nasolacrimal duct probing after the age of one year\") and has no support in `L9` slide 22, which gives no age at all. Keyed as printed; the divergence is written into the explanation and NOT disputed. Verified at 2x that Q3 keys B and Q4 keys C and not the reverse." },

{ n:5, p:30, key:'B',
  stem:"A 33-year-old woman presents with ptosis with S-shaped deformity of the upper eyelid. Examination revealed tenderness, edema and erythema of the outer third of the upper eyelid. Which of the following is the best next step in management of that patient's condition?",
  opts:['Lacrimal gland scintigraphy','CT orbit','Ophthalmoscopy','None of the above'],
  note:'Head of a three-question vignette chain: Q5 (next step) -> Q6 ("In the previous case") -> Q7 ("In the previous case"). ⚠️ Q7\'s antecedent is Q5\'s VIGNETTE, reached through Q6 — two links, not one. Option A names a test taught NOWHERE in the course: "scintigraph" returns zero real hits across 29 decks and 12 book chapters (only absence lists). Strong GG match: `opqb-t4-156`, 19-year-old male, same signs, "What is the best initial imaging?", key CT orbit — same question, different patient.' },

{ n:6, p:30, key:'C',
  stem:'In the previous case, what is the most likely diagnosis?',
  opts:['Acute dacryocystitis','Chronic dacryocystitis','Acute dacryoadenitis','Dry eye disease'],
  note:'BACK-REFERENCE, one link: the antecedent is Q5. Repaired in the draft by restating Q5\'s vignette (ptosis, S-shaped deformity, tenderness/oedema/erythema of the outer third of the upper lid) — which is a sign list, not a diagnosis, so the restatement does not answer the question. No GG stem match.' },

{ n:7, p:30, key:'C',
  stem:'In the previous case, what is the most common cause of that condition?',
  opts:['Staphylococci','Streptococci','Epstein Barr virus','Thyroid eye disease'],
  note:'⚠️ BACK-REFERENCE, TWO LINKS: "the previous case" is Q6, whose case is Q5\'s. The draft restates Q5\'s VIGNETTE, deliberately NOT Q6\'s answer — naming "acute dacryoadenitis" in the stem would leak the key of the question immediately above it. Book p.68: "Most commonly viral Epstein-Barr virus." ⚠️ `L10) orbit.txt` slide 31 lists "mumps, Epstein-Barr, cytomegalovirus" with "e.g." and no ranking — the deck does not name a commonest, only the book does. Strong GG match: `opqb-t4-155`, same signs, "most common infectious cause", key EBV.' },

{ n:8, p:30, key:'C',
  stem:'What is the function of inner mucus layer of the tear film?',
  opts:['Prevent / decrease tear evaporation','Keep the ocular surface lubricated','Maintain adherence / stability of tear film','None of the above'],
  note:'Straight book recall, p.63, and the three options are the book\'s own three phrasings redistributed: A is the OILY layer\'s function ("prevent/decrease tear evaporation"), B is the wording of BASIC SECRETION ("constant to keep the ocular surface lubricated all the time"), C is the mucous layer\'s ("Helps maintain the adherence and stability of the tear film"). Every distractor is a real sentence from the same page. No GG stem match.' },

{ n:9, p:30, key:'C',
  stem:'Cyclosporine A 0.05% eye drops may be used in a patient with dry eye disease. Which of the following is the mechanism by which cyclosporine enhances recovery of dry eye disease?',
  opts:['It enhances tear film stability','It reduces tear film evaporation','It increase tear film production','All of the above'],
  note:'Option C printed "It increase tear film production" — verb agreement fault kept verbatim. Book p.65: "Cyclosporine A 0.05% eye drops (increase tear production)". This is the ONLY drug strength in the whole book chapter, and cyclosporine appears in NO ophthalmology deck (`L6` records "cyclosporin = 0"). GG asks the same fact from the other side: `opqb-t4-157` gives a rheumatoid patient and asks which drug increases tear production, key "Cyclosporine A 0.05%" — same fact, different stem shape.' },

{ n:10, p:31, key:'C',
  stem:'A 25-year-old man complains of foreign body sensation in the eye coupled with tearing, redness and itching. Tear film breakup time test was peformed and it was found to be 7 seconds. Based on the previous data, which of the following would be the most accurate conclusion?',
  opts:['Exclude dry eye disease since TBUT is normal','Suspect dry eye disease since TBUT is non-conclusive','Confirm dry eye disease and look for its cause since TBUT is lower than normal','Artificial tear prescription would provide definitive treatment'],
  note:'⚠️ "peformed" is the bank\'s typo, kept. ⚠️ THIS QUESTION IS PRINTED TWICE: Q11 on the same page is identical word for word, option for option, key for key. Both staged. Book p.65 gives the ≥10 s normal; 7 s is below it, so C. Option D is refuted by book p.65\'s own treatment list, where "Treatment of the cause" is a separate third heading beside the medical measures.' },

{ n:11, p:31, key:'C',
  stem:'A 25-year-old man complains of foreign body sensation in the eye coupled with tearing, redness and itching. Tear film breakup time test was peformed and it was found to be 7 seconds. Based on the previous data, which of the following would be the most accurate conclusion?',
  opts:['Exclude dry eye disease since TBUT is normal','Suspect dry eye disease since TBUT is non-conclusive','Confirm dry eye disease and look for its cause since TBUT is lower than normal','Artificial tear prescription would provide definitive treatment'],
  note:'⚠️ EXACT DUPLICATE OF Q10, printed immediately below it on book p.31 with its own number, its own red rule and its own "Answer: C". Compared character by character off the image, including the shared typo "peformed". Not a transcription error on my side and not a fold decision on my side — staged so the hub can see the page as it prints.' },

{ n:12, p:31, key:'B',
  stem:'All of the following are true regarding acute dacryoadenitis except?',
  opts:['It causes pain in superolateral part of the orbit aggravated by eye movement','It causes diplopia especially in medial gaze','It presents with ptosis and S-shaped deformity of the upper lid','It is less common than chronic dacryocystitis'],
  note:'Option D re-cropped at 2x to confirm it reads "chronic dacryocystitis" and NOT "chronic dacryoadenitis" — it reads dacryoCYSTitis. Key B: book p.69 prints "Diplopia especially in up gaze or lateral gaze", never medial. A and C are book p.69 verbatim. D compares acute dacryoadenitis with a disease from a different section; neither source ranks them against each other, so D is an unsourced comparison that the key nonetheless treats as true. No GG stem match.' },

{ n:13, p:31, key:'B',
  stem:'Which of the following layers is main bulk of tear film?',
  opts:['Outer oily layer','Middle aqueous layer','Inner mucus layer','All of the above'],
  note:'Book p.63, middle aqueous layer: "It forms the main bulk of the tear film" — the stem is the book\'s own phrase. ⚠️ Note the chapter never asks a THICKNESS, which is where the L9-vs-L1,2 mucin divergence (0.2 µm vs 0.02-0.05 µm) would have bitten. `L9` slide 3 independently supports the key: water 8 µm against lipid 0.1 and mucin 0.2. No GG stem match.' },

{ n:14, p:31, key:'A',
  stem:'All of the following are among the secretory components of lacrimal system except?',
  opts:['Lacrimal sac','Goblet cells','Meibomian glands','None of the above'],
  note:'⚠️ ORPHANED KEY: book p.31 ends after option D; "Answer: A" is the FIRST LINE of book p.32. Recovered by reading the next half-page. Book p.63 lists the secretory part as "the main lacrimal gland, the accessory lacrimal glands, conjunctival goblet cells and the Meibomian glands" and puts the sac in the EXCRETORY part. ⚠️⚠️ STRONGEST CROSS-BANK MATCH IN THE CHAPTER: `opqb-t4-142`, "The lacrimal **secretory** system consists of the following parts **EXCEPT**:", options lacrimal gland / accessory lacrimal gland / goblet cells / lacrimal sac, key = the lacrimal sac. Same question, same key, option menus overlap in three of four.' },

{ n:15, p:32, key:'B',
  stem:'A 32-year-old man presents with a complaint of excessive tearing. Examination revealed a painless lacrimal sac swelling at the inner canthus. Which of the following is the most likely diagnosis?',
  opts:['Acute dacryocystitis','Chronic dacryocystitis','Acute dacryoadenitis','Chronic dacryoadenitis'],
  note:'Head of a two-question chain: Q16 back-references it. Book p.68, chronic dacryocystitis: "Painless lacrimal sac swelling (mucocele) at the inner canthus." `L9` slide 32 prints the same sentence. PAINLESS is the whole discriminator against Q17. No GG stem match, though `opqb-t4-148` shares the chronic-dacryocystitis territory from an irrigation angle.' },

{ n:16, p:32, key:'D',
  stem:'In the previous case, which of the following is the best line of management?',
  opts:['Warm compresses and nasal decongestants','Systemic and topical antibiotics','Delayed DCR','Immediate DCR'],
  note:'BACK-REFERENCE, one link: antecedent is Q15. Repaired by restating Q15\'s vignette (painless lacrimal sac swelling at the inner canthus with excessive tearing) — a sign list, not the diagnosis, so no leak. Book p.68 gives chronic dacryocystitis exactly one treatment: "Dacryocystorhinostomy (DCR)". A and B are the book\'s ACUTE treatment (p.67) offered as distractors; "Delayed DCR" is what acute disease gets ("Once the infection resolves, consider dacryocystorhinostomy"). No GG stem match.' },

{ n:17, p:32, key:'A',
  stem:'A 33-year-old female patient presents to the ophthalmologist with a painful red swelling localized over the medial canthal area. Which of the following is the most suitable diagnosis for such a swelling?',
  opts:['Acute dacryocystitis','Acute dacryoadenitis','Chronic dacryocystitis','Chronic dacryoadenitis'],
  note:'The mirror of Q15 — PAINFUL and RED versus painless. Book p.67: "Pain, redness and swelling over the lacrimal sac below the medial canthal area... Very tender and tense swelling with overlying skin erythema." Note the same four-item menu as Q15 but REORDERED (acute dacryoadenitis is B here, C there) — the option order is preserved exactly as printed in both. Related GG: `opqb-t4-154` uses the same vignette ("painful, red swelling below the medial canthus, very tender, with fever") but asks MANAGEMENT, which is House Q30\'s question.' },

{ n:18, p:32, key:'C',
  stem:'Which of the following is the structure responsible for secreting inner mucus layer of tear film?',
  opts:['Meibomian glands','Lacrimal glands','Goblet cells','All of the above'],
  note:'One of three sibling questions with the SAME four options in the SAME order asking about the three layers: Q18 (mucus, key C), Q20 (watery, key B), Q25 (oily, key A). Book p.63 sources all three. Only the oily one has a GG twin (`opqb-t4-159`).' },

{ n:19, p:32, key:'C',
  stem:'Dacryocystorhinostomy (DCR) is indicated in all of the following conditions except?',
  opts:['Epiphora','Dacryocystitis','Dacryoadenitis','None of the above'],
  note:'⚠️ ORPHANED OPTIONS AND KEY: book p.32 ends after "B. Dacryocystitis"; options C and D AND "Answer: C" open book p.33. Recovered from the next half-page. Key C is sound on the book: DCR appears p.67 (epiphora treatment) and p.68 (dacryocystitis), and NEVER in the dacryoadenitis section pp.68-69, whose treatment is antibiotics/steroids. GG has the same question shape with a DIFFERENT menu and therefore a different key: `opqb-t4-160`, "One of the following is **not** an indication for DCR", options lacrimal fistula / acute dacryocystitis / chronic dacryocystitis / mucocele, key = ACUTE dacryocystitis. Same idea, NOT a reprint — do not fold on the shape alone.' },

{ n:20, p:33, key:'B',
  stem:'Which of the following is the structure responsible for secreting middle watery layer of tear film?',
  opts:['Meibomian glands','Lacrimal glands','Goblet cells','All of the above'],
  note:'Sibling of Q18 and Q25, same menu and order. Book p.63: the aqueous layer is "Secreted from the main lacrimal gland as well as the accessory lacrimal glands in the conjunctiva" — note the key is plural "Lacrimal glands", which covers main plus accessory. `L9` slide 4 names the accessory glands (Krause, Wolfring) that the book leaves unnamed. No GG stem match.' },

{ n:21, p:33, key:'B',
  stem:'All of the following are true regarding treatment of congenital nasolacrimal duct obstruction except?',
  opts:['Digital massage is usually the 1st line of treatment','Probing is carried out only one time, after 1 year of age','Silastic intubation is resorted to in case of failure of probing','DCR is usually the last resort in case of intubation failure','None of the above'],
  note:'⚠️ FIVE OPTIONS (A-E) — re-read to confirm E is an option and not the next stem. Key B is exact against book p.67: "Nasolacrimal duct probing after the age of one year. It can be repeated ONLY ONCE if the first attempt was not curative" — so probing may be done twice, and "only one time" is the false statement. A, C and D are p.67 steps (a), (c) and (d) verbatim in order. This question is the book\'s four-rung ladder printed as a question. It also sits against Q4\'s key. No GG stem match; `opqb-t4-143` asks the first line only.' },

{ n:22, p:33, key:'C',
  stem:'Which of the following is the most important line of management of dry eye disease?',
  opts:['Artificial tears','Interventions as punctal plug insertion','Treatment of the cause','Topical steroids'],
  note:'Book p.65 prints the treatment as three numbered headings — 1. Medical, 2. Interventional, 3. Treatment of the cause — and the bank\'s four options are one from each heading plus a second medical item, with the key on heading 3. The book does not rank them in words; the key rests on "Treatment of the cause: e.g., blepharitis" being a heading of its own rather than an item inside Medical. Related GG: `opqb-t4-151` asks "Best FIRST-LINE management?" of an evaporative case and keys ARTIFICIAL TEARS — different question (first-line vs most important), different key. ⚠️ Worth the hub\'s eye: the two banks key different options on adjacent ideas.' },

{ n:23, p:33, key:'B',
  stem:'All of the following are true regarding epiphora except?',
  opts:['DCR may be used as a line of management','Probing is curative in children and adults','It’s either due to increased production or decreased drainage of tears','Non of the above'],
  note:'⚠️ Option D printed "Non of the above" — the bank\'s typo, kept as printed (contrast Q24 and Q19, which print "None"). Key B is exact against book p.67\'s standalone note: "N.B: Probing is not curative in adults." A and C are book p.66-67. No GG stem match; `opqb-t4-147` is the nearest EXCEPT-question on drainage and has a different menu and key.' },

{ n:24, p:33, key:'D',
  stem:'All of the following conditions can cause epiphora except?',
  opts:['Dry eye disease','Entropion','Ectropion','None of the above'],
  note:'⚠️ ORPHANED OPTIONS AND KEY: book p.33 ends after "A. Dry eye disease"; options B, C, D AND "Answer: D" open book p.34. Recovered from the next half-page. Key D ("None of the above" — i.e. all three DO cause epiphora) is book p.66 exactly: dry eye under "Overproduction of tears... Dry eye (reflex lacrimation)", entropion under "Ocular surface irritation (entropion - trichiasis)", ectropion under "Malposition of the lacrimal puncta (e.g. ectropion)". `L9` slide 9 prints the same two-mechanism split. Related GG: `opqb-t4-147`, "Defective lacrimal drainage can result in any of these conditions EXCEPT", key trichiasis — different menu, different key, same family.' },

{ n:25, p:34, key:'A',
  stem:'Which of the following is the structure responsible for secreting the outer oily layer of the tear film?',
  opts:['Meibomian glands','Lacrimal glands','Goblet cells','All of the above'],
  note:'Third sibling with Q18 and Q20 (note this one alone adds "the" twice in the stem). Book p.63: "Outer oily layer: Secreted by the Meibomian glands." ⚠️ STRONG CROSS-BANK MATCH: `opqb-t4-159`, "Which gland produces the tear film **oily layer**?", key Meibomian glands. Same question and same key; GG\'s fourth option is "Glands of Krause" where House prints "All of the above", so the menus are not identical.' },

{ n:26, p:34, key:'C',
  stem:'Dacryoadenitis is mostly caused by which of the following organisms?',
  opts:['Herpes simplex virus','Adenovirus','Epstein-Barr virus','Mumps virus'],
  note:'Same fact as Q7, asked without a vignette; note this one hyphenates "Epstein-Barr" where Q7 prints "Epstein Barr". Book p.68: "Most commonly viral Epstein-Barr virus. Less common viral causes include adenovirus, varicella zoster, herpes simplex, rhinovirus, cytomegalovirus, or mumps" — so options A, B and D are all named on the same page as LESS common, which is what makes the menu a fair test. ⚠️ `L10) orbit.txt` slide 31 lists "mumps, Epstein-Barr, cytomegalovirus" with mumps FIRST but explicitly as "e.g." and with no ranking — a reader working from the deck alone could pick D. The ranking exists only in the book. GG twin of Q7: `opqb-t4-155`.' },

{ n:27, p:34, key:'E',
  stem:'Which of the following is / are among the causes of dry eye disease?',
  opts:['Diabetes','LASIK','Pregnancy','Contact lenses','All of the above'],
  note:'⚠️ FIVE OPTIONS (A-E). Every one of the four is on the book\'s p.64 aetiology list: "Diabetes"; "Post refractive surgery ( LASIK or Photorefractive Keratectomy [PRK] )"; "Pregnancy and associated hormonal changes"; "Contact lens use" — the last three all under "↓ corneal sensation" or the hormonal group. Key E. No GG stem match; `opqb-t4-158` asks specifically for an EVAPORATIVE cause.' },

{ n:28, p:34, key:'D',
  stem:'Which of the following conditions contributes to dry eye disease by 2 mechanisms: decreased tear secretion and increased tear evaporation?',
  opts:['Sjogren syndrome','Lagophthalmos','Infrequent blinking','Thyroid eye disease'],
  note:'⚠️ "Sjogren" printed WITHOUT the diaeresis here, where Q1 prints "Sjögren" with it — both kept as printed. Key D is the one condition the book lists on BOTH sides of p.64: under aqueous deficiency, "Thyroid eye conditions (can be due to evaporative element too)", and under evaporative, "Thyroid eye disease with lid retraction, proptosis, infrequent blinking and/or lagophthalmos". The parenthesis is the whole question. A is aqueous-only; B and C are evaporative-only, and both are named inside the thyroid bullet, which is the trap. No GG stem match.' },

{ n:29, p:34, key:'B',
  stem:'What is a possible complication of acute dacryoadenitis?',
  opts:['Chalazion','Abscess','Dry eye','Canaliculitis'],
  note:'⚠️ ORPHANED OPTIONS AND KEY: book p.34 ends after "A. Chalazion"; options B, C, D AND "Answer: B" open book p.35. Recovered from the next half-page. ⚠️ THE KEY IS NOT SOURCED IN THIS CHAPTER: `ophthalmology.pdf` pp.68-69 gives dacryoadenitis no complications at all, and the book\'s abscess sentences belong to acute dacryoCYSTitis (p.67) — as do `L9` slide 32 and Fig. 3.21(B). Lacrimal gland abscess is real but is outside knowledge here and is tagged as such in the draft. Option D, canaliculitis, is taught only by `L9` slide 31 (Actinomyces israelii) and is absent from the book entirely. No GG stem match.' },

{ n:30, p:35, key:'C',
  stem:'What is the appropriate initial treatment for acute dacryocystitis?',
  opts:['Warm compresses only','Topical steroids','Topical and systemic antibiotics','Immediate dacryocystorhinostomy'],
  note:'LAST QUESTION OF THE CHAPTER. Book p.35 carries only this question and is then blank; chapter 5 "Eyelids" opens on book p.36. Book p.67 acute dacryocystitis treatment: "Warm compresses and nasal decongestants. Systemic and topical antibiotics. Once the infection resolves, consider dacryocystorhinostomy DCR." Option A is the trap — warm compresses ARE in the list, but "only" fails, because the antibiotics are a separate bullet. `L9` slide 32 says the same and adds "Irrigation and probing should not be performed." GG match on the fact: `opqb-t4-154`, same clinical picture, key "Systemic antibiotics + warm compress" — House\'s menu forces a choice between the two halves that GG combines into one option. ⚠️ Worth the hub\'s eye when folding.' }

];
