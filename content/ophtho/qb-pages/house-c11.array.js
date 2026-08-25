// VERBATIM STAGING — Dr. HOUSE in Ophthalmology MCQs
// Source file: Semester 8\Opthalmo\Questions\ophthalmology MCQ.pdf
// Part A, Chapter 11: "11. Glaucoma" — book pp.74-79 (PDF sheets 39L-41R)
//
// ================================================================
// WHAT THE BANNER LITERALLY PRINTS
// ================================================================
// Book p.74, red full-width band, white bold sans, immediately under the
// running head "[H]OUSE Ophthalmology MCQs 2026 | Chapterwise MCQs":
//
//     11. Glaucoma
//
// Numbered 11, in sequence after chapter 10 ("10. The uveal tract", book p.68,
// recorded in house-c10.array.js). Its own Q1 restarts the numbering at 1, so
// ids carry the chapter token: `opmcq-c11-<n>`.
//
// ================================================================
// THE BANNER CENSUS — WHAT IT PREDICTED, AND WHETHER IT HELD
// ================================================================
// The ch.9 agent scanned all 124 sheets (PDF pp.3-126) at 25 dpi for the red
// banner band and listed the banner-bearing half-pages as
//     3L 4L 10L 13R 16R 20L 23R 26R 29R 33L 36L 39L 42L 44R 47R 51L 53L
//     56L 58L 61L 66L 72L 78R 80L 82R 112L 118R
// (header of house-c9.array.js). Read for chapter 11 that census predicts:
//   • my banner at **39L = book p.74**;
//   • the NEXT banner at **42L = book p.80**, with NO banner between;
//   • therefore a chapter of **exactly six book pages, 74-79, sheets 39-41**.
// ✅ **IT HELD, IN EVERY PARTICULAR.** Sheet 39L carries "11. Glaucoma"; sheets
// 39R, 40L, 40R, 41L and 41R carry glaucoma questions and no banner; the
// chapter's last question (Q26) ends part-way down p.79 and the rest of that
// page is blank. The census predicted the span before a page was opened, for
// the second chapter running, and it saved a render sweep.
//
// ⚠️ ONE SHEET PAST THE END, AS THE STANDING RULE REQUIRES — AND WHAT THE NEXT
//    BANNER LITERALLY PRINTS. Sheets 39 through 42 were rendered. The proof
//    sheet is **PDF sheet 42, LEFT half = book p.80**, and its red banner
//    literally prints:
//
//        12. Vitreous
//
//    Numbered 12, in sequence after 11, with its own Q1 restarting the
//    numbering (a 60-year-old man, severe pain, redness and discharge one day
//    after cataract surgery, altered red reflex with a yellowish tint, key D,
//    Endophthalmitis). Identified by CONTENT as well as numeral: its first four
//    questions are endophthalmitis, its management, and posterior vitreous
//    detachment. Sheet 42R was rendered but not opened; chapter 12 is not this
//    job.
//
// ================================================================
// PAGE ARITHMETIC — RE-VERIFIED AGAINST THE PRINTED FOLIO, NOT ASSUMED
// ================================================================
// A4 LANDSCAPE (841.86 x 595.26 pt, confirmed by `pdfinfo -f 39 -l 39`), TWO
// BOOK PAGES PER PDF SHEET, left = even, right = odd:
//     book pages on PDF sheet N  =  2N-4 (left) and 2N-3 (right)
//     PDF sheet for book page b  =  floor(b/2) + 2
// Checked against the red-circled folio numeral at the foot of every half-page
// actually opened: 74, 75 || 76, 77 || 78, 79 || 80. The task prompt's
// arithmetic was correct in every particular, and so was its claim that book
// p.74 is sheet 39 LEFT and carries the chapter's own Q1.
//
// Rendered with pdftoppm -png -r 200, sheets 39-42, as halves with
// -x 0 -W 1175 (left) and -x 1164 -W 1175 (right) at -H 1654.
// Six close reads at -r 400 with explicit crop windows, one per misprint.
//
// PAGE MAP ACTUALLY USED
//   sheet 39 = book 74 || 75 -> red banner "11. Glaucoma",
//                               Q1-Q4 complete with keys
//                            || Q5-Q8 complete, Q9 stem + options A-C
//                               (option D AND the key overleaf — SEAM 1)
//   sheet 40 = book 76 || 77 -> Q9's option D + key, Q10-Q13 complete
//                            || Q14-Q17 complete, Q18 stem + all five options
//                               (its key overleaf — SEAM 2)
//   sheet 41 = book 78 || 79 -> Q18's key, Q19-Q22 complete, Q23 stem +
//                               options A-C (options D, E AND the key
//                               overleaf — SEAM 3)
//                            || Q23's options D, E + key, Q24-Q26 complete.
//                               Chapter ENDS with Q26; the lower ~40 % of p.79
//                               is blank, and Q26's answer line is the only one
//                               in the chapter with NO closing red rule under it
//   sheet 42 = book 80 || 81 -> BOUNDARY PROOF (left half)
//
// ================================================================
// COUNTS — every one measured, none derived
// ================================================================
// QUESTIONS ACTUALLY READ: **26**. Counted by reading every printed number on
//    all six half-pages in order, never by taking the last number:
//        1 2 3 4 | 5 6 7 8 9 | 10 11 12 13 | 14 15 16 17 18 |
//        19 20 21 22 23 | 24 25 26
//    PRINTED RANGE: **1-26, unbroken, with no anomaly of any kind.**
//    ⚠️ The ch.8 defects DO NOT recur here: no question carries an out-of-range
//    printed number (nothing like ch.8's "214"), none is printed without a
//    number, no option letter is duplicated and none is skipped. Every option
//    list runs A, B, C, D (and E where there are five) in order. This was
//    looked for specifically, which is why no `n` below is staged as a string.
//    This bank prints no contents page and no per-chapter count, so there is no
//    promised figure to compare against.
//
// EXPLANATION BOXES: **ZERO.** Counted on all six book pages. Every question is
//    stem, options, a red horizontal rule, "Answer: <letter>", a red rule.
//    Eleven chapters in, this bank has printed zero explanation boxes anywhere.
//    Re-counted here, not carried forward from ch.10.
//    => MARKER ARITHMETIC: markers = entries - boxes = 26 - 0 = **26**.
//      All 26 drafted entries end `explanation` with exactly
//      "Written for this bank - ophthalmology MCQ.pdf prints no explanation
//      here." (em dash in the shipped string) and none carries it in `source`.
//
// FIGURES: **ZERO.** All six book half-pages were rendered at 200 dpi and
//    looked at in full. Not one photograph, perimetry printout, fundus image,
//    diagram, line drawing or table — which is notable for a glaucoma chapter,
//    since Q2, Q19 and Q25 all describe a disc or a field printout in prose
//    that a figure would normally carry. NO 400 dpi INK BOUNDS ARE RECORDED
//    BELOW BECAUSE THERE IS NOTHING TO BOUND. The brief's crop rules (the
//    picture's own bottom edge reported separately from the ink bound, the
//    nearest printed text above and below with measured distances, the
//    rule-under-photograph trap) have nothing to fire on. The only non-type ink
//    on these pages is the red header band, the red banner, the red answer
//    rules and the red folio circle. Chapters 7, 8, 9 and 10 were the same.
//
// SEAM DEFECTS: **THREE** in five internal seams, all at page turns, all
//    resolved by having both halves of every sheet rendered:
//      S1. p.75 -> p.76: **Q9 IS SPLIT MID-OPTION-LIST.** Options A, B and C
//          close p.75; option D ("All of the above") and the key ("Answer: A")
//          open p.76. ⚠️ A reader who stopped at the page foot would have
//          staged Q9 as a three-option question — and because `answer` is an
//          INDEX, keying "A" would still have landed on index 0 by luck. The
//          option COUNT would have been wrong and nothing downstream would
//          have noticed.
//      S2. p.77 -> p.78: Q18's key ("Answer: B") is ORPHANED at the top of
//          p.78, above the chapter's next question.
//      S3. p.78 -> p.79: **Q23 IS SPLIT MID-OPTION-LIST, and this one is not
//          forgiving.** Options A, B and C close p.78; options D and E and the
//          key ("Answer: C") open p.79. A three-option reading would have kept
//          index 2 and landed on the right text, but would have dropped the
//          option that carries the misprint (M1) and the "None of the above"
//          that makes the menu five-wide.
//    The remaining two internal seams (p.74 -> p.75 and p.76 -> p.77) are
//    clean: a question ends and its key is printed before the page turns.
//    Both ends of all five internal seams were checked. No stem is split.
//
// ================================================================
// MISPRINTS — all verified at 400 dpi, all transcribed AS PRINTED
// ================================================================
// M1. p.79 Q23 option D prints **"Topical prostaglandin analgoues"** for
//     "analogues". The same drug class is spelled correctly at Q9 option B
//     (p.75), Q20 option B (p.78) and Q26 option A (p.79) — so the typo is
//     local to this one line, three questions after a correct printing.
// M2. p.74 Q1's key prints **"Answer: B."**, with a TRAILING FULL STOP. It is
//     the only key so punctuated in the chapter; the other twenty-five print
//     a bare letter. (The ch.10 agent saw this from the far side of the seam
//     and recorded it as a property of "the next chapter's Q1"; confirmed here
//     at 400 dpi.)
// M3. p.75 Q7 prints **"with iris bombe'."** — "bombe" followed by a RIGHT
//     SINGLE QUOTATION MARK, a mangled acute accent on the e of "bombé".
//     `L12) Glaucoma 2 Cong, PACG, 2ry` prints it unaccented as "iris bombe"
//     (line 175) and "Iris bombe (forward bowing)" (line 215); `L13,14) Uvea &
//     Sclera` prints "IRIS BOMBÉ" with a proper accent. Transcribed as the bank
//     prints it.
// M4. p.77 Q18 option C prints **"Southeast asians"** with a lower-case "a"
//     on the demonym. `L12` line 119 prints "Race (South-East Asians)".
// M5. p.78 Q22 prints a **BLANK LINE between option D and option E**, unlike
//     every other option list in the chapter, which are set solid. Cosmetic;
//     both letters are unambiguous and neither is duplicated.
// M6. p.74 Q3 options B and C both print **"functional damage in form of
//     visual field changed"** — ungrammatical, and the same error twice.
//     "in form of" (no article) and "changed" (for "change" or "changes").
//     Verified at 400 dpi in both options. It does not affect the key: B and C
//     differ ONLY in "with / without elevation of IOP" versus "with elevation
//     of IOP", which is the entire point of the question.
// M7. p.78 Q19 option B prints the abbreviation **"esp."** mid-option —
//     "Notching of the cup edge esp. inferotemporally". Kept as printed.
//
// ================================================================
// PRINTED DEFECTS — recorded, NEVER corrected. `key` is always as printed.
// ================================================================
// D1. ⚠️⚠️ **Q22's STEM SAYS "EXCEPT" AND ITS KEY SAYS "ALL OF THE ABOVE".**
//     "All of the following can cause secondary angle closure glaucoma
//     except?" keys **D, "All of the above"**, with E printed as "None of the
//     above". Read literally the question is unanswerable: an "except" stem
//     asks which option does NOT belong, and "All of the above" is not a
//     candidate for that. The internally consistent reading is that the stem
//     kept an "except" it should have lost — every one of A, B and C is a
//     genuine cause (see the entry), so as a positive question the key is
//     right, and as an "except" question the only defensible answer would be
//     E. Staged with key D and the disagreement explained in the entry, never
//     disputed (project ruling 2026-08-11).
// D2. ⚠️ **Q21 AND Q22 CONTRADICT EACH OTHER ABOUT UVEITIS, four questions
//     apart on facing halves of the same sheet.** Q21 asks which condition is
//     "among the causes of secondary ANGLE CLOSURE glaucoma" and keys D
//     (Phacomorphic), thereby excluding its option B, "Inflammatory glaucoma".
//     Q22 then prints "Posterior synechiae due to uveitis" as option A of a
//     list whose key asserts that all three CAN cause secondary angle closure
//     glaucoma. Both are defensible on the material — uveitis causes secondary
//     OPEN angle glaucoma by trabecular blockage (`L11` lines 171-173) and
//     secondary CLOSED angle glaucoma by seclusio pupillae and iris bombé —
//     but the two questions cannot both be read as exhaustive. Recorded in
//     both entries; neither key touched.
// D3. Q17 option A prints **"Alpha blockers"**. Both glaucoma decks print
//     alpha **AGONISTS** — `L11` line 210 (decrease production) and line 212
//     (increase drainage), `L12` line 224 "Topical alpha agonists". An alpha
//     BLOCKER is not a glaucoma drug in this material at all, so the option is
//     a distractor that does not exist rather than a wrong-mechanism one.
//     Noted; the key (C, Mannitol) is unaffected.
// D4. Q9 and Q20 are **the same question printed twice, eleven apart, with the
//     same four options in the same order and the same key A** — see the
//     duplicate list below. That is a property of the printing, not a defect in
//     either key.
//
// ================================================================
// CHAPTER ASSIGNMENT — titles quoted from app\data\modules.js, not paraphrased
// ================================================================
// ALL 26 go to **`op-glauc`, titled "Glaucoma"**. Tested question by question
// against the theory roster in app\data\theory.ophtho.js (sections glc-1 to
// glc-17), not assumed from the banner. Specifically checked and REJECTED:
//   • `op-cat` "Cataract — types, maturity and clinical picture" — **the
//     closest call in the chapter, and it was decided by the theory file's own
//     cross-reference.** Q21's KEY is "Phacomorphic glaucoma", and the project
//     does file the lens-induced glaucomas there: `cat-*` carries phacomorphic
//     and phacolytic in full from `L17`/`L18`, and its own text says
//     "`op-glauc` is written from `L11` and `L12`, which print no lens-induced
//     glaucoma at all — this is where the module carries it." But Q21 TESTS the
//     open-versus-closed classification of secondary glaucoma (its three
//     distractors are traumatic, inflammatory and steroid-induced, all of them
//     `L11`'s secondary OPEN angle list), and the module precedent is to file
//     by what the question tests, not by the word in the answer. Filed
//     `op-glauc` with `op-cat` named as the secondary chapter in the entry.
//   • `op-intro` "Introduction, history and the anatomy the module assumes" —
//     Q5 and Q6 are the 10 % / 90 % outflow split, and the ONLY source for that
//     number in the whole module is `L1,2) Ocular Anatomy` slide 25, which is
//     `op-intro`'s deck. `glc-3` already cites it ("`L1,2) Ocular Anatomy`
//     splits outflow trabecular (conventional) 90 % / uveoscleral
//     (unconventional) 10 % — `op-intro`'s deck, cited only"), so the fact is
//     carried inside the glaucoma chapter by design. Filed `op-glauc`, with
//     `op-intro` named as secondary in both entries.
//   • `op-neuro-optic` "The optic nerve" — Q2 and Q19 are optic-disc questions
//     and `L21) Optic Nerve` slides 10-13 photograph the glaucomatous disc. But
//     `glc-7` is titled "The glaucomatous disc — structural change" and is
//     written for exactly this, and both questions name glaucoma in the stem.
//   • `op-insid` "Insidious Visual Loss" — Q16 asks the most common form of
//     glaucoma, and `L35,36) Chronic visual loss` is where the module's
//     glaucoma epidemiology lives. The question tests classification, not
//     epidemiology of blindness; `op-insid` named as secondary in that entry.
//   • `op-red` "Red eye — the approach and the causes" — Q7 is a painful red
//     eye with ciliary injection, and `L37) Red Eye` teaches acute angle
//     closure inside the red-eye differential. But the five options are five
//     glaucoma subtypes; nothing in the menu is a non-glaucomatous red eye, so
//     the question tests the angle-closure continuum (`glc-13`), not the
//     differential.
//   • `op-uvea` "Uvea" — Q22's option A is posterior synechiae due to uveitis,
//     but it is one option of five in a secondary-glaucoma question.
//   • `op-ret-dr` / `op-ret-vasc` — Q22's PDR and CRVO are likewise single
//     options; `glc-15` already carries retinal vein occlusion as a cause of
//     secondary narrow angle glaucoma.
//
// ================================================================
// SUSPECTED DUPLICATES — flagged only, NO FOLD DECISIONS MADE
// Every one names its DISCRIMINATING TOKEN, per the brief. The corpus was read
// FROM DISK on 2026-08-25 by parsing app\data\questions.ophtho.js in a VM:
// 3,865,686 bytes, **998 entries**, **56 of them `op-glauc`**.
// ================================================================
//
// ⚠️⚠️ **WITHIN-BATCH, AND IT IS THE STRONGEST CANDIDATE IN THE CHAPTER:
//    Q9 and Q20.** Both ask for the first / initial medication in acute angle
//    closure glaucoma; both print the SAME FOUR OPTIONS IN THE SAME ORDER
//    ("Carbonic anhydrase inhibitors", "Topical prostaglandin analogues",
//    "Topical cholinergics", "All of the above"); both key **A**. Q9 is a
//    back-reference inside the Q7-Q11 case chain ("In the previous case, which
//    of the following is the initial medication used in order to rapidly
//    control the condition?"); Q20 is free-standing ("Which of the following
//    medications is the first line of treatment of acute angle closure
//    glaucoma?").
//    **DISCRIMINATING TOKEN: there is none in the content.** The only
//    difference is the framing — "In the previous case" plus "rapidly control"
//    against a standalone "first line of treatment". Same menu, same order,
//    same key, same fact. ⚠️ This is NOT the shared-menu pattern the brief
//    warns about (ch.6's TT/TS pair, and Q5/Q6, Q12/Q16 and Q15/Q24 in THIS
//    chapter, all share a menu and key DIFFERENTLY). Here the keys agree.
//    Flagged for the hub; no fold made.
//
// WITHIN-BATCH PAIRS THAT ARE **NOT** DUPLICATES — the shared-menu shape, four
// times in one chapter, exactly as the brief predicts:
//   • Q5 / Q6 — identical menu (10 %, 20 %, 50 %, 90 %). Keys **A** and **D**.
//     DISCRIMINATING TOKEN: **"uveo-scleral" vs "trabecular"**.
//   • Q12 / Q16 — identical five-option menu of glaucoma subtypes. Keys **B**
//     and **A**. DISCRIMINATING TOKEN: Q12 is a vignette (migraine, nocturnal
//     hypotension, **IOP 18**) asking a diagnosis; Q16 asks **"most common
//     form"** with no patient at all.
//   • Q15 / Q24 — identical menu (nasal fibres, arcuate fibres, papillomacular
//     bundle, all, none). Keys **B** and **C**. DISCRIMINATING TOKEN: **"most
//     vulnerable" vs "most resistant"** — one word, and it inverts the answer.
//     This is the ch.6 TT/TS shape exactly.
//   • Q9 / Q20 — see above. This one is NOT in this list.
//
// AGAINST THE LIVE CORPUS:
//   1. ⚠️ **Q23 vs `opqb-t11-469` (Grade Gain topic 11) — CROSS-BANK, and the
//      strongest corpus candidate.** Both ask which drug does NOT increase
//      aqueous drainage and both key **beta blockers**.
//      House Q23: "All of the following medications increase aqueous humor
//      drainage except?" — Topical cholinergics / Topical alpha adrenergics /
//      **Topical beta blockers** / Topical prostaglandin analgoues / None of
//      the above (five options, key C).
//      `opqb-t11-469`: "All of these drugs increase aqueous drainage EXCEPT:"
//      — Prostaglandins / Alpha adrenergic **blockers** / Cholinergic agonists
//      / **Beta blockers** (four options, `answer:3`).
//      DISCRIMINATING TOKENS, and there are three: **Grade Gain prints "alpha
//      adrenergic BLOCKERS" where House prints "alpha adrenergics"** (and both
//      decks print alpha AGONISTS — `L11` line 212 — so Grade Gain's option is
//      itself defective); **House prefixes every option with "Topical"**; and
//      **House carries a fifth option, "None of the above", that Grade Gain
//      does not.** The option ORDER is different too. If the hub folds this it
//      is an `alsoIn`, not a second entry — but the fifth option and the
//      "blockers"/"adrenergics" divergence are real content differences, not a
//      respelling. **NOT a shared misprint: the two spellings are of different
//      words.**
//   2. Q26 vs `opqb-t11-457` — **NOT a duplicate, and worth saying why.** Both
//      are about which drugs cut aqueous production. `opqb-t11-457` asks which
//      does **NOT** decrease formation (Beta blockers / Prostaglandin
//      analogues / CAI / Alpha adrenergic agonists, `answer:1`); House Q26 asks
//      which class **DOES** reduce production (Prostaglandin analogues / **Beta
//      agonists** / Carbonic anhydrase inhibitors / Miotics, key C).
//      DISCRIMINATING TOKEN: **House's option B is "Beta AGONISTS", Grade
//      Gain's is "Beta BLOCKERS"** — opposite drugs — and House offers
//      "Miotics" where Grade Gain offers "Alpha adrenergic agonists". Two of
//      four options differ and the polarity of the stem is inverted.
//   3. Q1 vs `opqb-t11-495` — **weak, flagged for completeness.** Both are
//      vignettes with a **C/D of 0.8** and an **IOP of 28** keying an
//      open-angle diagnosis. DISCRIMINATING TOKEN: **House's distractors are
//      non-glaucomatous** (Optic neuritis, Retinal vein occlusion) and its
//      patient is diabetic with nyctalopia-like symptoms; **Grade Gain's four
//      options are all glaucomas** (POAG / NTG / phacolytic / phacomorphic) and
//      its patient has a cataract and a blind fellow eye. No option string is
//      shared except the two glaucoma names.
//   4. Q11 vs `opqb-t11-449` — **NOT a duplicate.** Both key a laser
//      iridotomy in angle closure. DISCRIMINATING TOKEN: **`opqb-t11-449` asks
//      about "the OTHER eye"** (prophylaxis of the fellow eye) while House Q11
//      asks the definitive treatment of the **presenting** eye; and House's
//      menu (Lensectomy / Trabeculectomy / Laser iridotomy / Valve surgery /
//      None) shares only "trabeculectomy" with Grade Gain's.
//   5. Q9 and Q20 vs `opqb-t11-491` — **NOT duplicates.** `opqb-t11-491` is a
//      vignette keying **carbonic anhydrase inhibitors** as the first line.
//      DISCRIMINATING TOKEN: **Grade Gain's menu contrasts MEDICAL against
//      SURGICAL** (CAI / Laser iridotomy / Filtering operation /
//      Cyclo-cryo-therapy); **House's contrasts four DRUG CLASSES** and offers
//      "All of the above". No distractor is shared.
//   6. Q17 vs `opqb-t11-484` — **NOT a duplicate.** Both key **Mannitol**.
//      DISCRIMINATING TOKEN: `opqb-t11-484` asks which agent has the
//      **"strongest therapeutic effect"** in lowering IOP, with a menu of
//      prostaglandins / beta blockers / pilocarpine / mannitol; House Q17 asks
//      the best line in a **DIABETIC** with acute angle closure, and its menu
//      (Alpha blockers / Topical mydriatics / Mannitol / Glycerine) exists to
//      set mannitol against **glycerine**, which is the whole point of the
//      question and of Q10.
//   7. Q18 vs `opqb-t11-485` — **NOT a duplicate.** Both turn on refraction in
//      angle closure. DISCRIMINATING TOKEN: `opqb-t11-485` is a four-option
//      positive question ("The eye susceptible to AACG": Hypermetropic /
//      Myopic / Astigmatic / Aphakic); House Q18 is a five-option **"except"**
//      risk-factor list whose other four options (Female gender, Southeast
//      asians, Phenothiazines, Dark environments) have no Grade Gain
//      counterpart anywhere in the corpus.
//   8. Q4 and Q25 vs `opqb-t11-462` / `opqb-t11-468` — **NOT duplicates.**
//      All four are about arcuate scotomata. DISCRIMINATING TOKENS: Q4's menu
//      is **not a field-defect menu at all** (Floaters, Bitemporal hemianopia,
//      Xanthopsia — one symptom, one chiasmal defect, one colour disturbance);
//      Q25 is a **vignette describing a perimetry printout** and asks for the
//      defect's NAME against Central scotoma / Altitudinal defect / Ring
//      scotoma. Grade Gain's two are flat recall lists sharing only the words
//      "arcuate scotoma".
//   9. **Zero-hit checks, done before writing any of the above.** Across all
//      998 corpus entries: **"uveo"** returns 0, **"trabecular pathway"**
//      returns 0, **"papillomacular"** returns 0, **"arcuate fibre/fiber"**
//      returns 0, **"notching"** returns 0, **"nocturnal"** returns 0,
//      **"glycerin"** returns 0, **"Southeast / South-East"** returns 0,
//      **"end stage / end-stage"** returns 0. So Q2, Q5, Q6, Q10, Q12, Q14,
//      Q15, Q18, Q19 and Q24 have no corpus counterpart on their
//      distinguishing term. Measured, not assumed.
//
// ================================================================
// ABSENCES — each names the specific thing absent and how it was measured
// ================================================================
// A1. **"papillomacular" returns ZERO hits across all 29 cached lecture files
//     and all 12 cached book chapters** (also tried "papillo-macular" and
//     "maculopapillar"). So does **"arcuate fibres"/"arcuate fibers"** and so
//     does **"vulnerab"**. `L11` teaches the arcuate SCOTOMA (lines 145-157)
//     and never the fibre bundle behind it. Q15 and Q24 are therefore filled
//     from general medical knowledge and tagged in the entries.
// A2. **"phenothiazin" returns ZERO hits across all 29 decks and 12 book
//     chapters.** (It appears once in the live corpus, at `opmcq-c9-24`, as a
//     cause of CATARACT.) `L12` line 127 prints "Use of systemic medications
//     (anticholinergics)" as an angle-closure risk; the phenothiazine-to-
//     anticholinergic step is supplied and tagged in Q18's entry.
// A3. **The glaucomatous cup enlarging VERTICALLY is absent.** "vertically
//     oval" returns exactly two hits — `L12` line 213 and `ophthalmology.pdf`
//     ch.1 (the mid-dilated PUPIL of acute angle closure), neither about the
//     cup — and "oval cup" returns zero. The BOOK does print the normal DISC as
//     "slightly oval in the vertical meridian" (ch.1 p.36). Q19's option C is
//     answered from that plus general knowledge, tagged.
// A4. **Nocturnal hypotension and migraine as normal-tension-glaucoma risk
//     factors are absent from the glaucoma decks.** "nocturnal" hits `L31,32`
//     and book ch.14 — both about non-arteritic AION — and "migraine" hits book
//     ch.1 and ch.14 as a cause of transient visual loss. `L11` line 69 names
//     normal tension glaucoma once, as an exception to the definition, with no
//     risk factors. Q12's entry supplies the association and tags it.
// A5. **What is NOT absent, and was nearly written off.** Before claiming the
//     10 % / 90 % outflow split was ungrounded I grepped every cache: it is on
//     `L1,2) Ocular Anatomy` **slide 25**, a deck nobody named in the brief,
//     inside a FLOW-CHART transcription rather than prose. Likewise **peripheral
//     anterior synechiae** (Q8) exists only as `L1,2` **slide 24**, a
//     gonioscopic PHOTOGRAPH transcription with an arrow label. Both would have
//     been missed by a prose grep of the two glaucoma decks. Neither `L11` nor
//     `L12` prints a NOT COVERED list at all, so there was nothing to be misled
//     by on that front.
//
// ================================================================
// THE STAGING RECORD
// `n` = printed number · `p` = BOOK page · `key` = printed letter
// Option letters are stripped from `opts`; everything else is verbatim.
// ================================================================

var HOUSE_C11 = [

{ n:1, p:74, key:'B',
  stem:"A 62-year-old diabetic man presents with progressive difficulty navigating in dim light and frequent tripping over objects. He reports no pain or redness. Examination shows IOP of 28 mmHg in both eyes, an increased cup-to-disc ratio of 0.8, and arcuate scotoma on automated perimetry. What is the most likely diagnosis?",
  opts:["Normal-tension glaucoma","Chronic open-angle glaucoma","Optic neuritis","Retinal vein occlusion"],
  note:"First question of the chapter, under the red banner. ⚠️ M2: the key prints as \"Answer: B.\" with a trailing full stop — the only one so punctuated in the chapter." },

{ n:2, p:74, key:'B',
  stem:"A 64-year-old man with no eye pain presents with gradually reduced peripheral vision. IOP is 26 mmHg. Fundus exam shows cupping of the optic disc with a focal thinning of the neuroretinal rim between 6 and 7 o'clock. Visual field testing shows a corresponding superior arcuate scotoma. What is the most likely finding?",
  opts:["Temporal pallor","Inferotemporal notching","Peripapillary atrophy","Optic disc drusen"],
  note:"The stem prints \"6 and 7 o'clock\" with a typographic right single quote in \"o'clock\". No figure — the disc is described entirely in prose." },

{ n:3, p:74, key:'B',
  stem:"What is the most accurate definition of glaucoma?",
  opts:["Increased IOP above normal with / without structural damage to optic disc","Structural damage to optic disc and functional damage in form of visual field changed with / without elevation of IOP","Structural damage to optic disc and functional damage in form of visual field changed with elevation of IOP","Decreased IOP below normal"],
  note:"⚠️ M6: options B and C both print \"functional damage in form of visual field changed\" — ungrammatical, twice. Verified at 400 dpi. B and C differ ONLY in \"with / without elevation of IOP\" against \"with elevation of IOP\"." },

{ n:4, p:74, key:'B',
  stem:"Which of the following is considered a visual field defect that is characteristic of glaucoma?",
  opts:["Floaters","Arcuate scotomata","Bitemporal hemianopia","Xanthopsia"],
  note:"Last question on p.74; its answer rule sits immediately above the folio circle." },

{ n:5, p:75, key:'A',
  stem:"What is the percentage of aqueous humor that is drained by the uveo-scleral pathway?",
  opts:["10%","20%","50%","90%"],
  note:"Paired with Q6 on the same menu — see the duplicate list. \"uveo-scleral\" is printed hyphenated here; the module's source (`L1,2` slide 25) prints \"Uveoscleral\" solid." },

{ n:6, p:75, key:'D',
  stem:"What is the percentage of aqueous humor that is drained by the trabecular pathway?",
  opts:["10%","20%","50%","90%"],
  note:"Identical menu to Q5, opposite key. Not a duplicate — see the duplicate list." },

{ n:7, p:75, key:'A',
  stem:"A 48-year-old female patient complains of diminished vision and severe pain in her left eye. Examination revealed marked ciliary injection, shallow anterior chamber, with iris bombe'. IOP was found to be 65 mmHg. Which of the following is the most likely diagnosis?",
  opts:["Acute angle closure glaucoma","Subacute angle closure glaucoma","Chronic angle closure glaucoma","Primary open angle glaucoma","None of the above"],
  note:"⚠️ M3: \"iris bombe'\" — a right single quotation mark stands where the acute accent of \"bombé\" belongs. Verified at 400 dpi. This is the antecedent of Q8, Q9, Q10 AND Q11 — a four-deep back-reference chain, the longest in the chapter." },

{ n:8, p:75, key:'C',
  stem:"In the previous case, which of the following is an expected complication if the patient's condition is left untreated?",
  opts:["Permanent vision loss","Permanent peripheral anterior synechiae","A & B together","Neither A nor B"],
  note:"Back-reference to Q7, printed immediately above on the same page." },

{ n:9, p:75, key:'A',
  stem:"In the previous case, which of the following is the initial medication used in order to rapidly control the condition?",
  opts:["Carbonic anhydrase inhibitors","Topical prostaglandin analogues","Topical cholinergics","All of the above"],
  note:"⚠️ SEAM 1. Options A, B and C close p.75; option D (\"All of the above\") and the key (\"Answer: A\") open p.76. Back-reference reaches TWO questions back, to Q7 — Q8 introduces no patient of its own. ⚠️ Same menu, same order, same key as Q20 — the chapter's strongest duplicate candidate." },

{ n:10, p:76, key:'C',
  stem:"In the previous case, if the patient addressed is known to be diabetic, which of the following medications would be contraindicated?",
  opts:["Carbonic anhydrase inhibitors","Mannitol","Glycerine","Beta blockers"],
  note:"Back-reference reaches THREE questions back, to Q7. \"the patient addressed\" is printed as such." },

{ n:11, p:76, key:'C',
  stem:"In the previous case, which of the following is the definitive treatment?",
  opts:["Lensectomy","Trabeculectomy","Laser iridotomy","Valve surgery","None of the above"],
  note:"Back-reference reaches FOUR questions back, to Q7. Closes the Q7-Q11 chain." },

{ n:12, p:76, key:'B',
  stem:"A 68-year-old male patient complains of seeing black spots in his visual field. History was taken and it showed that the patient also suffered migraine and nocturnal hypotension. IOP was measured and found to be 18 mmHg. Which of the following is the most likely diagnosis?",
  opts:["Primary open angle glaucoma","Normal tension glaucoma","Secondary open angle glaucoma","Primary angle closure glaucoma","Secondary angle closure glaucoma"],
  note:"Opens the Q12-Q14 chain. Same five-option menu as Q16, different key — not a duplicate." },

{ n:13, p:76, key:'A',
  stem:"In the previous case, which of the following is the ocular symptom / sign that causes the patient to see black spots in his visual field?",
  opts:["Scotomata","Floaters","Flashes","Glare","None of the above"],
  note:"Back-reference to Q12. Last question on p.76." },

{ n:14, p:77, key:'C',
  stem:"In the previous case, which of the following is the end stage of the patient's disease process?",
  opts:["Visual field changes","Blurred vision","Permanent vision loss","None of the above"],
  note:"Back-reference reaches TWO questions back, to Q12 — Q13 introduces no patient of its own. Closes the Q12-Q14 chain. First question on p.77, printed under the running head with no orphaned key above it (the p.76 -> p.77 seam is clean)." },

{ n:15, p:77, key:'B',
  stem:"Which of the following fibres are the most vulnerable to glaucomatous damage?",
  opts:["Nasal fibres","Arcuate fibres","Papillomacular bundle","All of the above","None of the above"],
  note:"Paired with Q24 on an identical menu, opposite key. \"fibres\" is printed with the British spelling in both stems and in options A and B." },

{ n:16, p:77, key:'A',
  stem:"Which of the following is the most common form of glaucoma?",
  opts:["Primary open angle glaucoma","Normal tension glaucoma","Secondary open angle glaucoma","Primary angle closure glaucoma","Secondary angle closure glaucoma"],
  note:"Identical five-option menu to Q12, different key. Not a duplicate." },

{ n:17, p:77, key:'C',
  stem:"Which of the following is the best line of management of a diabetic patient presenting with acute angle closure glaucoma?",
  opts:["Alpha blockers","Topical mydriatics","Mannitol","Glycerine"],
  note:"⚠️ D3: option A prints \"Alpha blockers\"; both decks print alpha AGONISTS. The question is the positive mirror of Q10 — Q10 asks what is contraindicated in a diabetic (Glycerine), Q17 asks what to give instead (Mannitol)." },

{ n:18, p:77, key:'B',
  stem:"All of the following are among the risk factors of primary angle closure glaucoma except?",
  opts:["Female gender","Myopia","Southeast asians","Phenothiazines","Dark environments"],
  note:"⚠️ SEAM 2. The stem and all five options close p.77; the key (\"Answer: B\") is ORPHANED at the top of p.78. ⚠️ M4: option C prints \"Southeast asians\", lower-case demonym." },

{ n:19, p:78, key:'C',
  stem:"All of the following are among the characteristics of glaucomatous optic disc except?",
  opts:["Nasal shifting of blood vessels","Notching of the cup edge esp. inferotemporally","Optic cup becomes horizontally oval","Asymmetry of the size of the right and left optic disc cups > 0.2"],
  note:"⚠️ M7: option B prints the abbreviation \"esp.\". Option D prints the mathematical \"> 0.2\" with spaces either side. No article before \"glaucomatous optic disc\" in the stem — as printed." },

{ n:20, p:78, key:'A',
  stem:"Which of the following medications is the first line of treatment of acute angle closure glaucoma?",
  opts:["Carbonic anhydrase inhibitors","Topical prostaglandin analogues","Topical cholinergics","All of the above"],
  note:"⚠️ Same four options in the same order and the same key as Q9, eleven questions earlier. See the duplicate list — this is the chapter's strongest within-batch candidate." },

{ n:21, p:78, key:'D',
  stem:"Which of the following conditions is among the causes of secondary angle closure glaucoma?",
  opts:["Traumatic glaucoma","Inflammatory glaucoma","Steroid-induced glaucoma","Phacomorphic glaucoma"],
  note:"⚠️ D2: sits four questions before Q22, which prints uveitic synechiae as a cause of secondary ANGLE CLOSURE glaucoma while this question's option B (\"Inflammatory glaucoma\") is excluded by its key." },

{ n:22, p:78, key:'D',
  stem:"All of the following can cause secondary angle closure glaucoma except?",
  opts:["Posterior synechiae due to uveitis","PDR","CRVO","All of the above","None of the above"],
  note:"⚠️ D1: an \"except\" stem keyed \"All of the above\". ⚠️ M5: a blank line is printed between option D and option E — the only option list in the chapter that is not set solid. Verified at 400 dpi." },

{ n:23, p:78, key:'C',
  stem:"All of the following medications increase aqueous humor drainage except?",
  opts:["Topical cholinergics","Topical alpha adrenergics","Topical beta blockers","Topical prostaglandin analgoues","None of the above"],
  note:"⚠️ SEAM 3. Options A, B and C close p.78; options D and E and the key (\"Answer: C\") open p.79. ⚠️ M1: option D prints \"analgoues\" for \"analogues\", verified at 400 dpi — the same word is spelled correctly at Q9 B, Q20 B and Q26 A. ⚠️ Cross-bank candidate against `opqb-t11-469`; see the duplicate list." },

{ n:24, p:79, key:'C',
  stem:"Which of the following fibres are the most resistant to glaucomatous damage?",
  opts:["Nasal fibres","Arcuate fibres","Papillomacular bundle","All of the above","None of the above"],
  note:"Identical menu to Q15, opposite key. The discriminating word is \"resistant\" against \"vulnerable\" — one word, and it inverts the answer." },

{ n:25, p:79, key:'B',
  stem:"A 60-year-old man with glaucoma does a visual field test. The printout shows a curved area of vision loss that arches above fixation in the pattern of the nerve fiber layer. What is this defect called?",
  opts:["Central scotoma","Arcuate scotoma","Altitudinal defect","Ring scotoma"],
  note:"The stem describes a perimetry printout in prose; NO figure is printed. \"fiber\" here is American-spelled, against \"fibres\" in Q15 and Q24 on the facing page." },

{ n:26, p:79, key:'C',
  stem:"Which class of medications lowers intraocular pressure by reducing aqueous humor production and is commonly used in the treatment of glaucoma?",
  opts:["Prostaglandin analogues","Beta agonists","Carbonic anhydrase inhibitors","Miotics"],
  note:"LAST QUESTION OF THE CHAPTER. Its \"Answer: C\" is the only answer line in the chapter with NO closing red rule beneath it; the lower ~40 % of p.79 is blank. ⚠️ Option B prints \"Beta agonists\", not blockers." }

];

if (typeof module !== 'undefined') { module.exports = HOUSE_C11; }
