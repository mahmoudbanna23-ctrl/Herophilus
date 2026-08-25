// VERBATIM STAGING — Dr. HOUSE in Ophthalmology MCQs
// Source file: Semester 8\Opthalmo\Questions\ophthalmology MCQ.pdf
// Part A, Chapter 9: "9. The crystalline lens" — book pp.62-67 (PDF sheets 33L-35R)
//
// ================================================================
// WHAT THE BANNER LITERALLY PRINTS
// ================================================================
// Book p.62, red full-width band, white bold sans, immediately under the
// running head "[H]OUSE Ophthalmology MCQs 2026 | Chapterwise MCQs":
//
//     9. The crystalline lens
//
// Numbered 9, in sequence after chapter 8 ("8. The cornea", book p.55, recorded
// in house-c8.array.js) and before chapter 10 ("10. The uveal tract", book
// p.68, seen by me — see the boundary proof below). Its own Q1 restarts the
// numbering at 1. Ids therefore carry the chapter token: `opmcq-c9-<n>`.
//
// ⚠️ THE BRIEF WARNED THAT HOUSE HAS PRINTED "9" TWICE SOMEWHERE IN THIS
//    PROJECT. IT DOES NOT DO SO AT THIS SEAM, AND THAT WAS MEASURED, NOT
//    ASSUMED. Every one of the 124 sheets of this PDF (PDF pp.3-126) was
//    rendered at 25 dpi and scanned programmatically for the red banner band:
//    for each sheet-half, the count of pixels satisfying
//    `R > 140 AND (R-G) > 60 AND (R-B) > 60` inside the vertical window
//    0.06h - 0.21h. Baseline (running head only) is 280-660; a chapter banner
//    scores 1019-1665. The banner-bearing halves are exactly:
//        3L 4L 10L 13R 16R 20L 23R 26R 29R 33L 36L 39L 42L 44R 47R 51L 53L
//        56L 58L 61L 66L 72L 78R 80L 82R 112L 118R
//    = 27 banners in 124 sheets. Between chapter 8's banner (29R = book p.55)
//    and chapter 10's banner (36L = book p.68) there is EXACTLY ONE banner,
//    33L = book p.62, and it is mine. Only three of those 27 were opened by me
//    (29R was opened by the ch.8 agent) — a second banner also *printing* the
//    numeral 9 could in principle sit later in the file among the halves I did
//    not open, so the sheet list is left here for the hub to check cheaply.
//
// ================================================================
// PAGE ARITHMETIC — RE-VERIFIED, NOT ASSUMED
// ================================================================
// A4 LANDSCAPE (841.86 x 595.26 pt, confirmed by pdfinfo on sheet 33), TWO BOOK
// PAGES PER PDF SHEET, left = even, right = odd:
//     book pages on PDF sheet N  =  2N-4 (left) and 2N-3 (right)
//     PDF sheet for book page b  =  floor(b/2) + 2
// Checked against the printed folio numeral in the red circle at the foot of
// every half-page actually opened: 62, 63 || 64, 65 || 66, 67 || 68.
// The brief's arithmetic was correct in every particular.
//
// Rendered with pdftoppm -png -r 200, sheets 33-44, then re-rendered as halves
// with -x 0 -W 1175 (left) and -x 1164 -W 1175 (right) at -H 1654.
// Close reads at -r 400 with an explicit crop window.
//
// PAGE MAP ACTUALLY USED
//   sheet 33 = book 62 || 63 -> red banner "9. The crystalline lens",
//                               Q1-Q4 complete with keys
//                            || Q5-Q8 complete, Q9 stem + options A-D
//                               (option E and the key overleaf)
//   sheet 34 = book 64 || 65 -> Q9's option E + key, Q10-Q13 complete,
//                               Q14 stem + options A and B only
//                            || Q14's options C, D, E + key, Q15-Q18 complete.
//                               About a third of p.65 below Q18's answer line
//                               is blank
//   sheet 35 = book 66 || 67 -> Q19-Q23 complete
//                            || Q24-Q28 complete. Chapter ENDS with Q28; the
//                               foot of p.67 below its answer rule is blank
//   sheet 36 = book 68 || 69 -> BOUNDARY PROOF (left half)
//
// ⚠️ THE BOUNDARY PROOF, AND WHAT THE NEXT BANNER LITERALLY PRINTS.
//    Sheets 33 through 44 were rendered (book pp.62-85) — nine sheets past the
//    end, far past the standing "render one past" rule. The proof sheet is
//    **PDF sheet 36, LEFT half = book p.68**, and its red banner literally
//    prints:
//
//        10. The uveal tract
//
//    Numbered 10, in sequence after 9, with its own Q1 ("A 30-year-old man
//    presents with a painful, photophobic eye and blurred vision... protein
//    'flare'... headlights in fog", key C, iridocyclitis) and the numbering
//    restarted. Identified by CONTENT as well as numeral: four uveitis
//    questions on that half-page alone. Sheets 36R-44 were rendered but not
//    opened; chapter 10 is not this job.
//
// ================================================================
// COUNTS — every one measured, none derived
// ================================================================
// QUESTIONS ACTUALLY READ: **28**. Counted by reading every printed number on
//    all six half-pages in order, not by taking the last number:
//        1 2 3 4 | 5 6 7 8 9 | 10 11 12 13 14 | 15 16 17 18 | 19 20 21 22 23 |
//        24 25 26 27 28
//    PRINTED RANGE: **1-28, unbroken, with no anomaly of any kind.**
//    ⚠️ The ch.8 defects DO NOT recur here: no question is numbered "214", no
//    question is printed without a number, no option letter is duplicated and
//    no option letter is skipped. Every option list runs A, B, C, D (and E
//    where there are five) in order. This was looked for specifically.
//    This bank prints no contents page and no per-chapter count, so there is no
//    promised figure to compare against.
//
// EXPLANATION BOXES: **ZERO.** Counted on all six book pages. Every question is
//    stem, options, a red horizontal rule, "Answer: <letter>", a red rule.
//    Nine chapters in, this bank has printed zero explanation boxes anywhere.
//    Re-counted here, not carried forward.
//    => MARKER ARITHMETIC: markers = entries - boxes = 28 - 0 = **28**.
//      All 28 drafted entries must end `explanation` with exactly
//      "Written for this bank - ophthalmology MCQ.pdf prints no explanation
//      here." (em dash in the shipped string) and none may carry it in
//      `source`.
//
// FIGURES: **ZERO.** All six book half-pages were rendered at 200 dpi and
//    looked at in full. Not one photograph, ultrasound, diagram, line drawing
//    or table. NO 400 dpi INK BOUNDS ARE RECORDED BELOW BECAUSE THERE IS
//    NOTHING TO BOUND, and the brief's instruction to check for a printed rule
//    or option text under a photograph has nothing to fire on. The only ink
//    other than type on these pages is the red header band, the red banner, the
//    red answer rules and the red folio circle. (Chapters 7 and 8 were the
//    same.)
//
// ================================================================
// MISPRINTS AND DEFECTS — recorded, never corrected in `key` or `opts` order
// ================================================================
// M1. **Q3's options B and C are ungrammatical, and they are transcribed as
//     printed.** Verified at 400 dpi: "B. It is a good new; so he has to
//     congratulate the patient" (for "good news") and "C. It may be a bad news;
//     so he has to further evaluate the patient" (article + plural). The key is
//     C and the fault is cosmetic.
//
// M2. **Q22 AND Q26 ARE THE SAME THREE STATEMENTS WITH THE POLARITY FLIPPED.**
//     p.66 Q22 "All of the following are true regarding senile cataract
//     except?" A/B/C identical to p.67 Q26 "Which of the following is true
//     regarding senile cataract?" A/B/C, and only the fourth option differs -
//     "D. None of the above" (key D) against "D. All of the above" (key D).
//     ⚠️ This is the shared-option-menu shape the brief warns about, and the
//     two are CONSISTENT, not contradictory: both keys say all three statements
//     are true. Not a duplicate. Discriminating token: **the word "except" in
//     the stem, and option D.**
//
// M3. **Q10 AND Q11 SHARE AN IDENTICAL FOUR-OPTION MENU IN IDENTICAL ORDER**
//     (Endophthalmitis / Posterior capsular opacification / Recurrence / All of
//     the above), differing only in one word of the stem - "most common"
//     (key B) against "most serious" (key A). Same shape as M2 and as the WHO
//     trachoma-grade pair in ch.6. Discriminating token: **common vs serious**,
//     and the keys are different letters.
//
// M4. **Q14 AND Q15 SHARE AN IDENTICAL FIVE-OPTION MENU IN IDENTICAL ORDER**
//     (Phacomorphic glaucoma / Phacolytic glaucoma / Morgagnian cataract /
//     Cataracta nigra / None of the above), differing only in the adjective
//     applied to the lens capsule - "intumescent" (key A) against "wrinkled"
//     (key B). Discriminating token: **intumescent vs wrinkled.**
//
// M5. **Q27 IS A CORNEA QUESTION PRINTED INSIDE THE LENS CHAPTER.** p.67, a
//     23-year-old contact lens wearer with a central corneal infiltrate and a
//     staining epithelial defect; key C, culture then broad-spectrum
//     antibiotics. Nothing in it touches the lens. The bank's own chapter 8 is
//     "The cornea". Staged here because it is printed here; filed to
//     `op-cornea` in the draft, with the misfiling recorded in the entry.
//
// M6. **Q24 KEYS A DRUG CLASS THE COURSE NAMES ONLY BY A MEMBER.** "Which of the
//     following medications can cause cataract?" keys C, Phenothiazine.
//     Measured: `phenothiazine` returns **exactly zero hits,
//     case-insensitively, across all 29 cached lecture files and all 12 cached
//     book chapters** - but `chlorpromazine` returns **exactly one**, and it is
//     the head of a printed list. `L35,36) Chronic visual loss`, cataract block:
//     "**Cataratogenic drugs** [sic] / Chlorpromazine · Miotics · Myleran ·
//     Amiodarone · gold". **Chlorpromazine IS a phenothiazine**, so the option
//     is sourced; only the class word is missing, and that identification is
//     tagged in the draft as outside knowledge.
//     ⚠️⚠️ **THIS NOTE WAS WRITTEN WRONG FIRST AND IS CORRECTED IN PLACE.** The
//     original said the course "never names" the agent, on the strength of a
//     zero-hit grep for the CLASS name. `L35,36) Chronic visual loss` is a
//     third lens source that neither the brief nor I had counted (`L17` and
//     `L18` were briefed as "your main decks") and it carries a full cataract
//     block - aetiology, drug list, pathogenesis, symptoms, examination
//     sequence and management. **Grep the drug, not the class.**
//     ⚠️ Note also that the course's own headline cataractogenic drug, the
//     **steroid**, is NOT on this menu at all.
//
// M7. **Q25's option B is arguably a second correct name.** "Which of the
//     following is the name of the described phenomenon?" keys D, "Second sight
//     phenomenon"; option B is "Myopic shift", which `L18) Cataract II` slide 6
//     uses for the same event ("Increased nuclear refractive index -> acquired
//     myopia"; "'Second sight': elderly regain near vision temporarily"). The
//     printed key stands; the overlap is explained in the entry, not disputed.
//     The same slide is why the two are not synonyms - the myopic shift is the
//     refractive change, second sight is the symptom it produces.
//
// M8. **NOT A DEFECT - RETRACTED. Q21's lens zonation IS taught, in a FIGURE.**
//     "Which of the following is the innermost layer of the crystalline lens?"
//     keys B, Embryonic nucleus. `L1,2) Ocular Anatomy, Symptomatology & Basic
//     Eye Examination` **slide 17**, captioned *zones of the lens*, prints a
//     sectional drawing with the labels bracketed down the left: "Anterior
//     capsule · Anterior epithelium · Cortex · **Nucleus - bracketed into four
//     zones, listed top to bottom: Adult · Infantile · Fetal · Embryonic**".
//     Outermost to innermost. The key is fully sourced.
//     ⚠️⚠️ **THIS NOTE ALSO WAS WRITTEN WRONG FIRST AND IS CORRECTED IN PLACE.**
//     The original called it a gap to be filled from outside knowledge. The
//     grep for `embryonic` DID hit `L1,2` and I dismissed the hit from the
//     filename instead of opening it - the exact fault the brief names
//     ("OPEN THE HIT BEFORE WRITING THE ABSENCE"). `fetal nucleus` returns zero
//     because the cache writes the zone list as bare words in a figure
//     transcription, not as a phrase. **A slide-deck cache that transcribes
//     FIGURES will not answer a prose grep; the absence was manufactured by
//     searching for prose in a deck that draws.**
//
// ================================================================
// PAGE-SEAM AUDIT — BOTH ENDS OF EVERY SEAM CHECKED
// ================================================================
// The chapter has five internal seams (62|63, 63|64, 64|65, 65|66, 66|67) and
// both ends of each were read. Result: **two split OPTION LISTS, each of which
// carries its answer line over with it**, and no other seam defect.
//   • 62|63 — clean. Q4 complete with its key on p.62; Q5 opens p.63
//   • 63|64 — Q9 stem + options A, B, C, D at foot of p.63; **option E ("B & C")
//             and "Answer: E" at head of p.64**
//   • 64|65 — Q14 stem + options A, B at foot of p.64; **options C, D, E and
//             "Answer: A" at head of p.65**
//   • 65|66 — clean. Q18 complete with its key on p.65; Q19 opens p.66
//   • 66|67 — clean. Q23 complete with its key on p.66; Q24 opens p.67
//   => split option lists = 2 · orphaned answer lines standing alone = 0
//      · split stems = 0
//   ⚠️ The ch.7 defect shape (a STEM split at a page break) does not recur, and
//   it was looked for at all five seams.
//
// ================================================================
// BACK-REFERENCES — one, and its antecedent was READ, not assumed
// ================================================================
// Q4 is printed "In the previous case, what is the most likely explanation for
// the patient's improvement of vision?". The antecedent is Q3, printed
// immediately above it on the same page (book p.62), and it was opened at
// 400 dpi to confirm. The chain is one deep, not two: Q3 introduces its own
// 52-year-old patient. The reconstruction in the draft repeats Q3's FINDINGS
// (no longer needs the reading glasses, near vision better than ever) and stops
// there - it must not say "cataract", because that is what Q4 itself keys, nor
// "this may be bad news", because that is Q3's key.
//
// ================================================================
// SCHEMA
// ================================================================
// { n, p, key, stem, opts, note }
//   n    printed question number (a NUMBER throughout this chapter - unlike
//        ch.8, nothing here needed staging as a string)
//   p    BOOK page carrying the stem
//   key  the printed answer LETTER, verbatim
//   opts option TEXT with the letter stripped, in printed order
//   note defects, seams and anything the plain fields cannot carry

var HOUSE_C9 = [

  { n:1, p:62, key:'C',
    stem:"A 70-year-old man presents with a white, opaque lens and cannot see the chart. He can only detect hand movements close to his face. What is the most likely diagnosis?",
    opts:["Nuclear sclerosis","Posterior subcapsular cataract","Mature cataract","Corneal edema"] },

  { n:2, p:62, key:'C',
    stem:"A 70-year-old man reports that he can suddenly read without his glasses, even though his distance vision has worsened. He denies eye pain. Slit-lamp exam shows yellowing and hardening of the central part of the lens. What is the most likely diagnosis?",
    opts:["Posterior subcapsular cataract","Cortical cataract","Nuclear cataract","Mature cataract"] },

  { n:3, p:62, key:'C',
    stem:"A 52-year-old man tells his ophthalmologist that he no longer needs the reading glasses as he can now see the near objects more clearly than ever. How should the ophthalmologist react to this data?",
    opts:["It is insignificant; so he has to ignore it","It is a good new; so he has to congratulate the patient","It may be a bad news; so he has to further evaluate the patient","None of the above"],
    note:"M1 — options B and C are printed exactly as staged, ungrammatical. Verified at 400 dpi. This is the ANTECEDENT of Q4." },

  { n:4, p:62, key:'C',
    stem:"In the previous case, what is the most likely explanation for the patient's improvement of vision?",
    opts:["The reading glasses made the patient's near vision better and more flexible","The patient was just feeling so but this can't be true","Refractive index of the lens nucleus increased due to cataract","None of the above"],
    note:"BACK-REFERENCE, one deep. Antecedent = Q3 on the same page (52-year-old man who no longer needs his reading glasses and sees near objects more clearly than ever). Read, not assumed." },

  { n:5, p:63, key:'C',
    stem:"A 66-year-old male patient complaining of recent progressive difficulty in seeing far objects (myopic shift). He reports that he used to see perfectly before. Which of the following might be the cause of that patient's condition?",
    opts:["Presbyopia","Glaucoma","Nuclear cataract","Retinitis pigmentosa"],
    note:"The stem hands over the mechanism in parentheses — 'myopic shift' is printed in the stem, not withheld." },

  { n:6, p:63, key:'C',
    stem:"A 64-year-old man complains of gradual painless vision impairment. Ophthalmoscopic examination showed absent red reflex. Which of the following is the most likely diagnosis?",
    opts:["Nuclear cataract","Cortical cataract","Mature cataract","Posterior subcapsular cataract"] },

  { n:7, p:63, key:'B',
    stem:"Which of the following is the best treatment option for a patient complaining of diminution of vision 2 years following cataract surgery?",
    opts:["Topical steroids","YAG laser capsulotomy","Intraocular lens exchange","Optical coherence tomography (OCT)"] },

  { n:8, p:63, key:'B',
    stem:"Which of the following is the most commonly used surgical technique in order to treat a patient with cataract?",
    opts:["Extracapsular cataract extraction","Phacoemulsification","Intracapsular cataract extraction","None of the above"] },

  { n:9, p:63, key:'E',
    stem:"Which of the following best differentiates nuclear sclerosis from nuclear cataract?",
    opts:["Nuclear sclerosis alters red reflex while nuclear cataract doesn't alter it","Nuclear cataract alters red reflex while nuclear sclerosis doesn't alter it","Nuclear sclerosis doesn't affect vision while nuclear cataract affects it","A & B","B & C"],
    note:"SPLIT OPTION LIST across the 63|64 seam: stem and options A-D on p.63, option E ('B & C') and 'Answer: E' at the head of p.64. Both ends read." },

  { n:10, p:64, key:'B',
    stem:"Which of the following is the most common postoperative complication following treatment of cataract?",
    opts:["Endophthalmitis","Posterior capsular opacification","Recurrence","All of the above"],
    note:"M3 — identical menu, identical order, to Q11; the stems differ by one word ('most common' vs 'most serious') and the keys differ." },

  { n:11, p:64, key:'A',
    stem:"Which of the following is the most serious postoperative complication following treatment of cataract?",
    opts:["Endophthalmitis","Posterior capsular opacification","Recurrence","All of the above"],
    note:"M3 — see Q10." },

  { n:12, p:64, key:'C',
    stem:"Which of the following causes jet black appearance of the pupillary aperture?",
    opts:["Cataract","Pseudophakia","Posterior lens dislocation","All of the above"] },

  { n:13, p:64, key:'D',
    stem:"Which of the following is true regarding the crystalline lens?",
    opts:["Anterior lens surface is flatter than posterior surface","The lens lacks nerves, vessels or connective tissue","The lens is a semi-transparent biconvex structure","A & B","A & C"],
    note:"Verified at 400 dpi. Option C's 'semi-transparent' is the deliberate falsehood — the lens is transparent." },

  { n:14, p:64, key:'A',
    stem:"When lens capsule becomes intumescent, it results in which of the following types of conditions?",
    opts:["Phacomorphic glaucoma","Phacolytic glaucoma","Morgagnian cataract","Cataracta nigra","None of the above"],
    note:"SPLIT OPTION LIST across the 64|65 seam: stem and options A, B at the foot of p.64; options C, D, E and 'Answer: A' at the head of p.65. Both ends read. M4 — identical menu to Q15." },

  { n:15, p:65, key:'B',
    stem:"When lens capsule becomes wrinkled, it results in which of the following types of conditions?",
    opts:["Phacomorphic glaucoma","Phacolytic glaucoma","Morgagnian cataract","Cataracta nigra","None of the above"],
    note:"M4 — see Q14." },

  { n:16, p:65, key:'B',
    stem:"Which of the following is best described as (presence of IOL inside the eye that was previously surgically implanted)?",
    opts:["Aphakia","Pseudophakia","Ectopia lentis","None of the above"],
    note:"The bank's own parentheses, transcribed as printed." },

  { n:17, p:65, key:'B',
    stem:"Which of the following is best described as (tremulousness of the iris with eye movement)?",
    opts:["Iridodialysis","Iridodonesis","Iridocyclitis","None of the above"],
    note:"The bank's own parentheses, transcribed as printed." },

  { n:18, p:65, key:'E',
    stem:"Which of the following is NOT among the indications of cataract surgery?",
    opts:["Secondary acute elevation of the IOP as in phacomorphic / phacolytic glaucoma","Congenital cataract","Visually significant traumatic cataract","Impaired vision","None of the above"],
    note:"Key E — the bank's position is that all four ARE indications." },

  { n:19, p:66, key:'B',
    stem:"Which of the following best describes (Morgagnian cataract)?",
    opts:["It's a form of mature cataract with lens cortex liquefaction causing the dark nucleus to sink inferiorly inside the lens capsule","It's a form of hypermature cataract with lens cortex liquefaction causing the dark nucleus to sink inferiorly inside the lens capsule","It's a type of cataract in which the lens nucleus acquires a dark brown to black color","None of the above"],
    note:"A and B are identical except for the single word mature / hypermature — that word is the whole question. Option C describes cataracta nigra." },

  { n:20, p:66, key:'A',
    stem:"A 58-year-old male patient presents with complete lens opacification. What is the best tool used to visualize retina in that patient?",
    opts:["Ultrasonography","Ophthalmoscopy","Pachymetry","Pentacam"] },

  { n:21, p:66, key:'B',
    stem:"Which of the following is the innermost layer of the crystalline lens?",
    opts:["Fetal nucleus","Embryonic nucleus","Adult nucleus","Lens cortex"],
    note:"M8 — the zonation is not taught in any cached deck or book chapter; measured." },

  { n:22, p:66, key:'D',
    stem:"All of the following are true regarding senile cataract except?",
    opts:["It occurs in patients above 40 years of age","It comprises 90% of cataract cases","It's either incipient, immature, mature or hypermature","None of the above"],
    note:"M2 — A/B/C identical to Q26; only option D and the word 'except' differ." },

  { n:23, p:66, key:'D',
    stem:"Ectopia lentis can be caused by which of the following conditions?",
    opts:["Marfan syndrome","Homocystinuria","Trauma","All of the above"] },

  { n:24, p:67, key:'C',
    stem:"Which of the following medications can cause cataract?",
    opts:["Beta blockers","NSAIDs","Phenothiazine","All of the above"],
    note:"M6 — `phenothiazine` returns zero hits across all 29 cached decks and all 12 cached book chapters. The course's own cataractogenic drug (steroid) is not on the menu." },

  { n:25, p:67, key:'D',
    stem:"An old male patient reports an improvement in his near vision and that he no longer needs his reading glasses, however, he reports that his far vision has deteriorated. Which of the following is the name of the described phenomenon?",
    opts:["Presbyopia","Myopic shift","Nuclear cataract","Second sight phenomenon"],
    note:"M7 — option B is a defensible second name for the same event; the printed key D stands and the overlap is explained, not disputed." },

  { n:26, p:67, key:'D',
    stem:"Which of the following is true regarding senile cataract?",
    opts:["It occurs in patients above 40 years of age","It comprises 90% of cataract cases","It's either incipient, immature, mature or hypermature","All of the above"],
    note:"M2 — see Q22." },

  { n:27, p:67, key:'C',
    stem:"A 23-year-old contact lens wearer presents with a painful red eye, photophobia, and a central corneal infiltrate. There is a small epithelial defect that stains with fluorescein. What is the most appropriate initial management?",
    opts:["Start steroids immediately","Wash the eye only","Culture the ulcer, start broad-spectrum antibiotics, then modify based on sensitivity","Observe for 24 hours"],
    note:"M5 — a CORNEA question printed inside the lens chapter. Nothing in it touches the lens. Filed to `op-cornea` in the draft." },

  { n:28, p:67, key:'C',
    stem:"A 65-year-old man underwent cataract surgery one year ago and initially had excellent vision. He now complains of gradual blurring again, though the intraocular lens appears well centered. Slit-lamp exam shows a cloudy membrane behind the IOL. What is the most likely diagnosis?",
    opts:["Cystoid macular edema","Retinal detachment","Posterior capsular opacification","Endophthalmitis"],
    note:"Last question of the chapter; the foot of p.67 below its answer rule is blank." }

];
