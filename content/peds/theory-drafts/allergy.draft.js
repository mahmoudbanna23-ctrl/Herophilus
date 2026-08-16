/* allergy — "Allergy", Paediatrics. Written 2026-08-16 under
   START-HERE.md §14 (slide-density revision notes) + §14.3a (layout), and
   content\peds\theory-plan.md, whose ONE local difference is that PAEDIATRICS
   HAS NO 3,000-WORD CAP: budget = max(lecture words, 25 x questions, 600).
   Shape copied from genetics.draft.js and neonatal.draft.js.

   DECK LABELS USED IN THE Src LINES:
     L26 = 26)allergy_.txt — "ALLERGY IN CHILDREN", Dr Ashraf Galal, Professor
           of Pediatrics. 34 PDF pages. Ends with TWO self-test MCQs, each
           printed twice (question, then question-with-answer).
     L27 = 27)Anaphylaxsis.txt — Engy Saad Elkaragy, Lecturer in Pediatric
           Pulmonology and Allergy, Unit of Pediatric Pulmonology, Allergy,
           Immunology and Rheumatology, Pediatric Department, Alexandria
           University, 2026. Course of the 5th year medical students.
           27 PDF pages. ⚠️ THE FILENAME MISSPELLS IT "Anaphylaxsis"; the
           deck itself spells anaphylaxis correctly throughout.
     Both are born-digital PDFs in Semester 8\Pedo\Theoritical\PPT\. NEITHER is
     on the 14-file PowerPoint-COM conversion list — both ship as PDFs, so no
     conversion was needed and none was done.

   ⚠️ PAGE NUMBERING. Split page N = PDF page N for both decks. `pdftotext`
   leaves a trailing form feed, so a naive split reports 35 and 28 against
   `pdfinfo`'s real 34 and 27. There is no L26 p35 and no L27 p28. Every Src
   page below is a real, verified page.

   ============================================================================
   ⚠️ FINDING 0 — ONE CHAPTER SHIPS. NO SPLIT. Measured, not forecast.
   ============================================================================
   MEASURED body = **2,719 words = 11.3 printed pages** at the ÷240 estimator,
   against the ~13 pp hard shape. It passes with **1.7 pp of margin**, so no
   split is recorded and none is needed. The natural seam, had one been wanted,
   is the deck boundary itself: alg-1…alg-8 are L26 (allergy, **1,386 w =
   5.8 pp**) and alg-9…alg-14 are L27 (anaphylaxis, **1,333 w = 5.6 pp**). No
   section rests on both decks; the only link across the seam is alg-9's
   one-line *italic* pointer back to alg-1's definition, which points and does
   not depend. Recorded only so the seam is on file if the owed reconciliation
   pass adds questions and pushes this over.

   ============================================================================
   ⚠️ FINDING 1 — BOTH CACHES ARE COMPLETE. Checked, as instructed, before
   writing — and the check was NOT the one that mattered. See FINDING 2.
   ============================================================================
   `pdftotext -layout` of each source PDF against its cached .txt, vocabulary
   diff over tokens of 3+ characters:

     L26 — **PDF-only 0 of 444 (0.0 %)**; cache-only 6, every one from the
           cache's own `SOURCE:` header (source, semester, pedo, theoritical,
           ppt, pdf).
     L27 — **PDF-only 0 of 358 (0.0 %)**; cache-only 7, the same header plus
           "anaphylaxsis" from the filename.

   So both caches ARE the `pdftotext` output. Neither is the `14) Puberty`
   case; no supplementary extraction was needed and neither cache was touched.

   ⚠️⚠️ BUT A THIRD EXTRACTION MODE EXISTS THAT NEITHER THE CACHE NOR A PLAIN
   `pdftotext` CAN SEE, AND IT HID A DRUG DOSE. **L27 p23's text box OVERFLOWS
   THE BOTTOM OF THE SLIDE.** Both the cache and a fresh `pdftotext -layout`
   stop dead at *"…intramuscularly in the mid-outer thigh in a"* — and the
   sentence continues **"dose of 0.01 mg/kg"** in text that lies OUTSIDE the
   MediaBox. `pdftoppm` clips it too: the 260 dpi render shows the top halves
   of the glyphs sheared off by the page edge.

   RECOVERED by rewriting the MediaBox of a SCRATCHPAD COPY of the PDF from
   `[0 0 1280 720]` to `[0 -300 1280 720]` and re-extracting. Poppler warns
   "PDF file is damaged - attempting to reconstruct xref table" and then reads
   the clipped line cleanly. **The source PDF in `Semester 8\` was never
   written to** — the copy lives in the session scratchpad and is deleted with
   it. A whole-deck diff of the enlarged copy against the cache returned
   exactly TWO clipped fragments and nothing else:

     · p23 — **"dose of 0.01 mg/kg"** (the main therapy sentence).
     · p10 — **"Inhalants: rare"**, a fourth trigger category the cache loses
       entirely, so a reader working from the cache would list three.

   The same treatment applied to L26 revealed **nothing** — it has no clipped
   text. A clean negative on one deck and two real recoveries on the other.

   ⚠️ THE GENERALISABLE FORM: a cache can be a 100 % faithful copy of
   `pdftotext` and still be missing words, because `pdftotext` itself honours
   the MediaBox. **Where a slide's last visible line ends mid-clause, the rest
   of the sentence may be off the page rather than absent.** One command
   settles it.

   ============================================================================
   ⚠️⚠️ FINDING 2 — THE VISUAL READ IS THE REASON THIS CHAPTER HAS AN
   ANAPHYLAXIS ALGORITHM AT ALL. The largest single recovery so far.
   ============================================================================
   `visual-read-triage.md` puts `allergy` at **33 % blank pages**, which is
   already high. At the brief's **45-word** threshold it is far worse:

     L26 — **18 of 34 pages (53 %)** under 45 words, 5 of them completely empty.
     L27 — **16 of 27 pages (59 %)** under 45 words, 9 of them completely empty.

   The 5-word triage filter saw 5 and 9. **Both decks were therefore rendered
   END TO END** — 61 pages at 110 dpi into 16 four-up contact sheets, plus six
   re-renders at 260–300 dpi for the dose text.
   `[Math]::Floor` was used for the tiling row index, per the brief's warning
   that PowerShell `[int](3/2)` is 2 and silently drops every fourth page.

   ⚠️⚠️ WHAT IT RECOVERED — L27 pp.20–22, THE WAO TEN-STEP EMERGENCY PROTOCOL.
   **The cache holds NOT ONE WORD of it.** Pages 20, 21 and 22 extract as three
   consecutive zero-word pages, and they carry the entire management algorithm
   as a graphic: the ten numbered steps, the adrenaline dose with its
   concentration and both maxima, the repeat interval, the oxygen flow rate,
   the cannula gauge and the fluid bolus. **Every drug dose in this chapter
   except the bare 0.01 mg/kg comes from those three image-only pages.**
   A chapter written from the cache alone would have taught "inject
   epinephrine IM in the thigh" and no number whatsoever.

   The full list of recoveries, all written into the body:

     1. **L27 pp.20–22 — the WAO 10-step protocol.** alg-14 entire, including
        its flowchart and the whole dose table. Read at 110 dpi, then the dose
        text re-cropped at 300 dpi because a decimal point is exactly what a
        contact sheet gets wrong. Verified character by character:
        **0.01 mg/kg of a 1:1,000 (1 mg/mL) solution, maximum 0.5 mg (adult)
        or 0.3 mg (child)**; **repeat every 5–15 minutes**; **oxygen 6–8
        L/minute**; **cannula 14–16 gauge**; **1–2 litres 0.9 % saline,
        5–10 mL/kg to an adult in the first 5–10 minutes, 10 mL/kg to a child**.
     2. **L27 p19 — the anaphylaxis emergency action plan card**, a photograph
        of a printed form, 4 words extractable. Re-rendered at 260 dpi. It
        carries the **severe / mild symptom plates** (7 + 4 body areas), the
        **one-system versus more-than-one-system rule**, the **"about 5 minutes
        or more"** community repeat interval, the **auto-injector strength
        checkboxes 0.1 / 0.15 / 0.3 mg IM**, the **4-hour ER observation rule**
        with its stated reason, and the header line **"Do not depend on
        antihistamines or inhalers (bronchodilators) to treat a severe
        reaction. USE EPINEPHRINE."** All of alg-13 rests on this one page.
     3. **L27 p11 — the anaphylaxis-triggers infographic.** Supplies the three
        inhalant examples (pollen, mould, dust mites) that make sense of the
        clipped "Inhalants: rare", plus the direct-mast-cell-activator list
        (radiocontrast media, opioids, certain medications) and the NSAID
        examples (aspirin, ibuprofen). alg-10.
     4. **L27 p14 — the risk-factor infographic**, 0 words. Adds five items
        p15's text list does not have: **labour and delivery**, **the elderly**
        (increased fatality from medication and venom-triggered anaphylaxis),
        **mastocytosis / clonal mast cell disorders**, **allergic rhinitis and
        eczema**, and the whole **co-factors that AMPLIFY** row — exercise,
        acute infection, emotional stress, disruption of routine, premenstrual
        status. alg-12.
     5. **L27 pp.8–9 — the multisystem plate.** The cache's p7 table already
        carries the five systems; the plate confirms the row-to-system pairing,
        which the text extraction interleaves. Counted as a confirmation, not
        a recovery.
     6. **L26 pp.30–33 — BOTH MCQ ANSWERS.** Each question is printed twice and
        the answer exists ONLY as red highlighting in the second printing,
        which is colour, not text. **Q1 = C, Sensitization. Q2 = B, Non-IgE-
        mediated food allergy.** These are the lecturer's own two examinable
        points and both are written into the body as discriminators (alg-1 and
        alg-6). Without the render the deck would appear to ask two questions
        and answer neither.
     7. **L26 pp.8–10 — the sensitisation cascade**, three consecutive
        zero-word pages. Supplies **sensitization → IgE production → arming of
        the mast cell → release of mediators → clinical effects**, the
        first-exposure / second-exposure contrast, **cross-linking**, the
        **IgE Fc receptor**, and the three named clinical effects
        (anaphylaxis, asthma, hay fever). alg-2.
     8. **L26 p12 — the type 1 / type 4 figure.** The cache renders p13's grid
        as an interleaved column of orphaned labels in which the row headings
        and the cells cannot be paired. The render fixes the pairing and adds
        the immunology row: **DC → TSLP, IL-33 → T cell; Th2 cytokines IL-4,
        IL-13, IL-5; cytotoxicity**. alg-3.
     9. **L26 pp.14–15 — the laboratory plate.** The cache is four words
        ("Laboratory", "skin prick test"). The plate gives the SPT sequence
        (drop of allergen → small skin prick → skin reaction) and states what
        the blood test measures: **the concentration of specific IgE antibodies
        in the blood**. alg-4.
    10. **L26 p29 — the atopic march ring.** The cache holds five bare
        abbreviations on separate lines with no expansion. See DEFECT NOTES
        item 3 for what the render could and could NOT settle.

   ⚠️ WHAT RECOVERED NOTHING, reported plainly rather than dressed up: L26 p19
   (a photo plate of wheat, egg, cow's milk and soya, captioned only with those
   four words, all four already in the p16 allergen list), L26 p15's lower half
   (a stock skin-prick illustration), L27 pp.25–26 (two Arabic calligraphy
   "thank you" cards) and L26 p34 ("THANK YOU"). L26 p7's histology of normal
   skin is a photomicrograph whose caption already says everything examinable.
   Five pages rendered for nothing out of 61; that is the price of the ten
   above and it was worth paying.

   Rendered PNGs live in the session scratchpad only. `Semester 8\` was opened
   read-only; nothing in it was modified, renamed or moved.

   ============================================================================
   DEFECT NOTES — noted, never disputed (CLAUDE.md §4b, MEMORY.md item 0).
   One line each in the body, at the place the reader meets the fact.
   ============================================================================
     1. ⚠️⚠️ THE TWO ADRENALINE REPEAT INTERVALS DISAGREE, AND BOTH ARE
        PRINTED. The WAO protocol (pp.20, 22) says **"repeat every 5–15
        minutes, if needed"**; the emergency action plan card (p19) says
        **"more doses of epinephrine can be given about 5 minutes or more after
        the last dose"**. These are not the same instruction — one is a window,
        one is a floor. BOTH are recorded in alg-14's dose table and neither is
        silently picked. (They are reconcilable in practice: the card is a
        layperson's community instruction, the protocol a clinician's. The deck
        never says so.)
     2. ⚠️ THE INJECTION SITE IS NAMED TWO WAYS. p23 writes **"mid-outer
        thigh"**; the WAO protocol writes **"mid-anterolateral aspect of the
        thigh"**. The same site, two wordings; both printed in alg-14 so a
        learner meeting either phrase in a question recognises it.
     3. ⚠️ THE LOW-SYSTOLIC-BP FOOTNOTE DIFFERS BETWEEN THE TWO CRITERIA
        SLIDES. p13 gives **three** age bands — **< 70 mmHg from 1 month to 1
        year**, **< (70 + [2 × age]) from 1 to 10 years**, **< 90 from 11 to 17
        years**. p12 gives **two**, dropping the infant band entirely and
        writing **"11 to adult age"** for the third. p13 is the fuller and is
        the one tabulated; p12's two divergences are named beside it. **The
        infant band exists on ONE slide only, and it is the band a paediatric
        examiner is likeliest to ask.**
     4. ⚠️ THE ATOPIC MARCH RING CANNOT BE READ AS A SEQUENCE, and this is
        recorded rather than guessed. p29 draws five circles — AD, FA, AC, AR,
        BA — joined by five arrows. Read at 300 dpi, **the arrows do not
        circulate**: AD has arrows pointing AWAY on both sides, and both AR→BA
        and AC→FA point inward toward the top, so BA and FA each receive two
        arrows and AR and AC each source two. It is decorative SmartArt, not a
        directed pathway. The five abbreviations are never expanded anywhere in
        the deck either. **What IS sourced** is the set of five: L26 p3's atopy
        definition names *asthma, allergic rhinitis and conjunctivitis, eczema
        and food allergy* — the same five. So alg-8 gives the five expansions
        as sourced and marks the classic ORDER as supplied.
     5. THE TYPE 1 / TYPE 4 GRID'S FOURTH ROW READS **"Can help" / "avoid"**.
        "avoid" is the printed word for the Type 4 column of the
        *total-and-allergen-specific-IgE* row; the sense is that the test is of
        no use in a T-cell-mediated reaction. Printed word kept in alg-3 with
        its reading beside it.
     6. p23's MAIN-THERAPY SENTENCE IS TRUNCATED ON THE SLIDE ITSELF, not just
        in extraction — see FINDING 1. The completion is the deck's own text,
        recovered, not supplied, and is NOT tagged.

   ============================================================================
   §14.5 CROSS-CHAPTER DEFERRALS
   ============================================================================
   ROWS OWED TO THIS CHAPTER: **NONE.** The register in START-HERE.md §14.5 was
   read end to end and greped for `allerg` and `anaphyla`. The only hits are
   ENT rows (`ent-nasalmass` → `ent-rhin`, allergic rhinitis) and one line of
   §14.5 prose. **No paediatrics row names `allergy` as a receiving chapter**,
   so nothing is discharged here and nothing was left waiting.

   NOT DEFERRED ONWARD: nothing. This is a terminal chapter. Three facts it
   could have handed on and did not, each for a checked reason:
     · ASTHMA. L26 names it four times, always as an association (atopy,
       atopic march, the clinical-effects triple) and never teaches it.
       `respiratory` owns asthma across three decks. KEPT here only as the
       association the deck states, with an *italic* pointer. Nothing moves.
     · THE WHEEZY CHILD. `respiratory` resp-14 already carries a twelve-row
       differential of the acutely noisy child, read before writing. alg-6
       points at it in one italic line and restates nothing.
     · EGG ALLERGY AND VACCINATION. `infection-vaccine` inf-53 owns the MMR /
       egg question and already carries it. alg-5 names egg as one of the eight
       commonest allergens, which is L26's own content, and stops there.

   ============================================================================
   BUDGET — §14.1, counted from disk with node
   `String(s.body).split(/\s+/).filter(Boolean).length`, the project convention
   (NOT `wc -w`, which reads 3–6 % low on these files).
   ============================================================================
     The cached decks: **L26 1,309 + L27 913 = 2,222 words**, exactly
     theory-plan.md's published ceiling.

     TERM 1, THE HONEST UNION. No line-range split with another chapter is
     needed: grepping all seventeen written paediatrics drafts, NO other header
     names `26)allergy_` or `27)Anaphylaxsis` in any capacity — not counted, not
     cited, not deferred. Both decks are wholly this chapter's, and this chapter
     defers nothing onward, so §14.1(b) takes nothing back out.

       L26  1,309  −  12  p1 (the cache's own SOURCE line + title/author card)
                   −   2  p34 "THANK YOU"
                   −  57  p31, a verbatim reprint of p30's MCQ
                   −  46  p33, a verbatim reprint of p32's MCQ
                                                                     = 1,192
       L27    913  −  32  p1 (SOURCE line + title/author/institution card)
                   −  25  p2, the contents/outline slide
                                                                     =   856
                                                                       ------
     TERM 1 = **2,048.**
     TERM 2 = 25 × 0 linked questions = **0.** ZERO questions carry
       chapter:'allergy', so §14.2's second term contributes nothing and the
       LECTURE side of the coverage floor governs entirely. `qs: []` on every
       section. A reconciliation pass is owed when the paediatrics banks close.
     max(2,048 · 0 · 600) = **2,048. TERM 1 GOVERNS.**

     ⚠️⚠️ AND TERM 1 IS AN UNDERSTATEMENT HERE, FOR THE REASON theory-plan.md
     RECORDS AGAINST `haematology`: **the ceiling counts only what extracts.**
     This chapter's three most examinable pages — L27 pp.20–22 — extract as
     ZERO and carry roughly **240 words** of protocol; p19's action-plan card
     carries roughly **250** more; p14's risk infographic roughly **90**; p11's
     trigger infographic roughly **40**; L26 pp.8–10 and p12 roughly **60**
     between them. **The honest source content is nearer 2,730 than 2,048**,
     and a chapter written to 2,048 would be a chapter that dropped the
     algorithm. Treat the ceiling as a floor, as that rule says.

   ⚠️ ENTITY FLOOR AND OVERRUN, COUNTED BEFORE WRITING (§14.1 rule 3, at the
   caller's stated ~100 words per framework slide in this format).

     FIVE DEVELOPED ENTITIES at ~90 w: 1 IgE-mediated food allergy ·
     2 non-IgE-mediated food allergy (with FPIES and proctitis) · 3 pollen
     food allergy / oral allergy syndrome · 4 anaphylaxis · 5 the atopic march
     = **450**.

     ⚠️ THIS IS A FRAMEWORK-DOMINATED CHAPTER AND THE ENTITY COUNT CANNOT SEE
     IT — it is two mechanism lectures and one emergency algorithm, not a
     diseases lecture. Framework slides costed ONE BY ONE (the `ent-neck`
     lesson), image-only pages included because they cost words like any other:
       L26 — p2 scale · pp.3–4 the five definitions · p6 genes/epigenetics ·
       p7 filaggrin · pp.8–10 the cascade · p11 mediator effects · pp.12–13 the
       type grid · pp.14–15 laboratory · p16 allergens · p17 primary/secondary ·
       p18 the classification · pp.20–22 clinical features · p23 diagnosis ·
       p24 three pillars · p25 the challenge · p26 natural history ·
       p27 management · p28 oral tolerance · p29 the march = 19.
       L27 — p3 epidemiology · p4 definition · pp.5–6 pathophysiology ·
       pp.7–9 multisystem · pp.10–11 triggers · p12 WAO 2020 · p13 the older
       criteria · pp.14–15 risk factors · p16 tryptase · pp.17–18 preparedness ·
       p19 the action-plan card · pp.20–22 the ten steps · p23 hospital and the
       dose · p24 additional treatments = 14.
       **33 slides × 100 = 3,300.**

     ⚠️ AND THE GRIDS AT ROWS × COLUMNS, not one slide each (the `ent-phon`
     lesson): definitions 5×2 · type 1 vs 4 6×3 · IgE clinical features 7×2 ·
     multisystem 5×2 · triggers 6×3 · WAO criteria 2×2 + 3×2 · low BP 4×2 ·
     risk factors 4×2 · severe symptoms 8×2 · mild symptoms 4×2 · natural
     history 2×2 · three pillars 3×2 · the dose table 6×4 · the epidemiology
     numbers 4×2 = **~190 cells, ~600 words beyond the slide costings.**

     Naive sum 450 + 3,300 + 600 = 4,350. Applying `neonatal`'s one-third
     entity/framework overlap and discounting the ~15 slides that are bare
     definitions or two-line lists rather than lists proper, the floor was
     predicted at **~2,300–2,600 — i.e. ABOVE TERM 1 by 250–550 words before a
     single supplied fact**, and that prediction was written before the
     sections, as §14.1 requires. What it got right and wrong is in the
     outcome block, which is NOT retrofitted onto it.

   ============================================================================
   OMISSION NOTE — item by item, what was left out and why.
   ============================================================================
     1. THE TITLE, AUTHOR, CONTENTS AND "THANK YOU" CARDS (L26 pp.1, 34;
        L27 pp.1, 2, 25, 26). Deducted from TERM 1 rather than counted and cut.
     2. THE SECOND PRINTING OF EACH MCQ (L26 pp.31, 33). Deducted as
        duplication — but **the answers, which exist only in those second
        printings, are KEPT** and are written into alg-1 and alg-6 as the
        discriminators they are. Nothing examinable was lost with the words.
     3. THE CLINICAL AND STOCK PHOTOGRAPHS AS PHOTOGRAPHS — L26 p7 (normal skin
        histology), p13's urticaria and dermatitis plates, p15 (skin-prick
        illustration), p19 (wheat / egg / cow's milk / soya), p28 (two crawling
        infants); L27's cartoon child, EpiPen pack and alert bracelet. **Every
        NAMED feature on every plate is kept** — that is what makes them cited
        rather than dropped — but a photograph is not reproducible in markdown
        and no attempt is made to describe one.
     4. THE SENSITISATION AND DEGRANULATION DIAGRAMS AS DIAGRAMS (L26 pp.8–10,
        L27 p5). Their READABLE CONTENT — the step sequence, the cross-linking,
        the Fc receptor, the named mediators — is in alg-2 and alg-9. The cell
        drawings themselves are not described.
     5. THE ANAPHYLAXIS SCENARIO SLIDE (L27 p27, 117 words) AS A NARRATIVE. It
        is a worked vignette that re-states facts taught on pp.19–24 — recumbent
        with feet up, lateral thigh, epinephrine autopen, oxygen and nebuliser,
        4-hour wait, the nut-allergy bracelet. **Every clinical element in it is
        already in alg-13 and alg-14**, so re-telling the story would be pure
        duplication. Its one contribution not otherwise stated — that the
        4-hour wait is advised BEFORE RETURNING HOME as well as in the ER — is
        folded into alg-13's line.
     6. MECHANISM DEEPER THAN THE MATERIAL GOES. L26 names PAF and "others" and
        stops; it names Th2 cytokines and does not explain them; it says
        "epigenetic condition" and does not define epigenetics. This chapter
        stops where the decks stop on all three, per §14.2's drop list.
     7. HYPERSENSITIVITY TYPES 2 AND 3. L26 teaches only Types 1 and 4 and
        never mentions the others. Named in one tagged italic line in alg-3 so
        a learner is not left thinking the classification has two members, and
        not developed.
     8. DISTRACTOR-BY-DISTRACTOR REASONING (§14.2). No questions are filed
        under this chapter, so it does not arise. Discriminations ARE kept as
        tables wherever the teaching point IS the discrimination: type 1 vs
        type 4 (alg-3), IgE vs non-IgE food allergy (alg-6), the two sets of
        WAO criteria (alg-11), severe vs mild symptoms (alg-13).

   ⚠️ NOTHING PROTECTED WAS DROPPED TO FIT. Checked back against both decks at
   the end: **every numerical fact both decks print is in the body** — 40 %,
   3–6 %, 80 %, 10–15 min, 2 h, 4 h, 50–112/100,000, 0.3–5.1 %, 1–761/100,000,
   0.76 %, 27–54 %, 1.5–25 y, 70 mmHg, 70+[2×age], 90 mmHg, 30 %, 30–120 min,
   24 h, 0.01 mg/kg, 1:1,000, 1 mg/mL, 0.5 mg, 0.3 mg, 0.1 mg, 0.15 mg,
   5–15 min, 5 min, 6–8 L/min, 14–16 gauge, 1–2 litres, 5–10 mL/kg, 5–10 min,
   10 mL/kg. **33 of 33.** Named entities, eponyms and classifications: WAO
   2020, EAACI, Hymenoptera, filaggrin, FPIES, oral/pollen food allergy
   syndrome, the atopic march, serum tryptase — 8 of 8.

   ============================================================================
   ✅ TRUE MEASUREMENT — node `String(s.body).split(/\s+/).filter(Boolean).length`
   over `body` ONLY, run against the file ON DISK as the genuinely LAST action,
   after the final edit. WRITING THIS BLOCK IS THE ONLY EDIT SINCE, AND IT
   TOUCHES NOTHING BUT THIS COMMENT.

   ⚠️⚠️ AND THIS BLOCK'S OWN HISTORY IS RECORDED, BECAUSE THE PROJECT'S MOST
   EXPENSIVE RECURRING FAULT HAPPENED HERE FOR THE ELEVENTH TIME AND WAS CAUGHT
   ONLY BY THE COUNTER. The first complete draft of this file carried a
   hand-written outcome block claiming **2,437 words over 14 sections with a
   full per-section breakdown, a per-source overrun analysis, and a
   three-item compression bill that all reconciled with each other**. Running
   the counter measured **2,946** — wrong by **509 words, 20.9 %**. Every
   structural number in it (14 sections, 1 flow, 14 `Src:` lines) was right,
   and the arithmetic inside it was internally consistent, which is exactly the
   §14.1 shape that reads as evidence and is not. **Nothing but running the
   counter would have caught it.** Two compression passes then took the file
   **2,946 → 2,774 → 2,719**, and the numbers below are from that last state
   and from no other. The forecast is not retrofitted; it is reported as a
   forecast that was wrong, and the working band it was aimed at was missed.
   ============================================================================

       body 2,719 words over 14 sections · intro 39 words · 0 questions filed
       weights: 8 `must`, 5 `high`, 1 `know` · 16 tables, 70 table rows
       1 flow (10 steps) · 32 `###` sub-headings · 14 of 14 `Src:` lines
       `qs: []` on all 14 · parse: `new Function(src)` clean
       68 lead-bold lines, **0 unanchored** · **0 paragraphs over 45 words**
       protected-fact recount: **33 of 33 numbers · 8 of 8 named entities**

     alg-1  208 · alg-2  197 · alg-3  101 · alg-4  120 · alg-5  160
     alg-6  214 · alg-7  128 · alg-8  258 · alg-9  167 · alg-10 114
     alg-11 193 · alg-12 186 · alg-13 339 · alg-14 334

   AGAINST THE BANDS:
     · vs TERM 1, the honest union of 2,048: **2,719 = 132.8 %**, 671 over.
       **Far past §14.1's 10 % trigger, so the page test is owed and was run** —
       **11.3 pp against paediatrics' ~13 pp hard shape, 1.7 pp of margin.**
       It passes, so the overrun is accepted, stated and itemised, not cut.
       (Against ENT's older ~10 pp ceiling it would fail by 1.3 pp; the
       paediatrics shape is the one theory-plan.md sets for this module.)
     · vs theory-plan.md's published ceiling of 2,222: **122.4 %**, 497 over.
     · vs the "honest source content" of ~2,730 computed under BUDGET above,
       which counts the image-only pages the ceiling cannot see: **99.6 %.**
       **That is the number that actually describes this chapter.** 2,719 words
       of notes against roughly 2,730 words of teaching is 1.00× the source —
       not the 6–13× inflation §14 was written to stop, and not padding.
     · vs the caller's working band of 1,700–2,400: **13.3 % over the top**,
       319 words. **MISSED, and named rather than shaved.** The bill for
       closing it is itemised below; every item on it is a fact, not a phrase.
     · vs the 74 % landing point theory-plan.md gives as its working estimate:
       this chapter lands at 133 % of TERM 1, the worst overshoot of any
       paediatrics chapter so far, **for a structural reason that is the whole
       finding of this draft.** The chapters that landed at 74 % had decks that
       repeat themselves IN PROSE, so there was air to let out. Here the
       repetition is between a slide and its own picture, and **the picture is
       where the content is** — so the extractable text the ceiling counts is
       not the teaching, it is roughly three quarters of it.

   ⚠️ WHERE THE OVERRUN IS, MEASURED RATHER THAN ARGUED.
     · **Tagged, supplied content: 192 words**, counted by grepping every line
       carrying `not taken from the course material` — alg-14's three
       deck-states-no-dose rows (111), alg-3's types 2 and 3 line (27), alg-8's
       march-order caveat (31), alg-13's biphasic line (23). **That is 7 % of
       the body and 29 % of the overrun.** The supplied side is small here,
       unlike `genetics` where it was the whole of it.
     · **The other 479 words of overrun are IMAGE-RECOVERED, not invented** —
       principally alg-14 (334, the ten steps and every dose, from three
       zero-word pages), alg-13's severe and mild plates and community rules
       (~200 of its 339, from one zero-word photograph of a card), alg-12's
       infographic additions (~70) and alg-10's inhalant and activator rows
       (~40). **Estimated by section attribution, not measured line by line,
       and labelled as an estimate.** The precise figures are the 192 above and
       the 2,719 total; everything between them is apportionment.
     · **So the cache side is comfortably under budget and the overrun is
       almost entirely content the word counter could not see.**

   ⚠️ WHAT THE NEXT 320 WORDS OF COMPRESSION WOULD COST, itemised per §14.1
   rather than quietly taken. Two compression passes have already removed the
   framing sentences, the teaching voice, the duplicated definitions and the
   loose cells — 227 words, with no fact lost. What is left is content:
     · **−200** by cutting alg-13's severe and mild symptom plates to a
       sentence. Cost: the **ONE-SYSTEM versus MORE-THAN-ONE-SYSTEM rule**,
       which is the decision the whole card is built around, and the eleven
       body-area findings a candidate is expected to recognise on sight.
     · **−111** by deleting alg-14's three "the deck states no dose" rows.
       Cost: a learner asked for the chlorphenamine dose finds nothing and
       **cannot tell whether the deck omitted it or the notes did.** Those rows
       exist precisely to make that distinction visible.
     · **−70** by dropping alg-12's p14 infographic additions. Cost: five risk
       factors that appear on no other slide, including labour and delivery and
       the whole amplifying-co-factor row.
   None was taken. **The chapter stops where the floor puts it and the bill is
   stated**, which is the outcome §14.1 asks for when the budget and the floor
   cannot both be met. The hub rules on the page count, which passes.
*/

var THEORY_DRAFT = {
  allergy: {
    intro: 'Two lectures, two shapes. The allergy half is definitions and discriminations — sensitization versus allergy, IgE versus non-IgE, type 1 versus type 4. The anaphylaxis half is one algorithm and one drug, and every number in it is examinable.',
    sections: [

{
  id: 'alg-1', w: 'must',
  h: 'The five definitions, and the one that is a trap',
  body: [
    '- **Allergic disorders in UK children:** up to **40 %** — **eczema, allergic rhinitis or asthma**. **Food allergy 3–6 %**.',
    '- **What an allergic disease is:** an **abnormal immune response to harmless environmental stimuli, usually proteins**.',
    '',
    '### The definitions as the deck words them',
    '',
    '|Term|Definition|',
    '|---|---|',
    '|**Hypersensitivity**|**Objectively reproducible** symptoms or signs after a defined stimulus (food, drug, pollen) **at a dose usually tolerated by most people**|',
    '|**Allergy**|Immune reaction to antigens known as **allergens**. **IgE-mediated** (peanut) **or non-IgE-mediated** (coeliac disease)|',
    '|**Atopy**|**Genetically mediated predisposition** to produce **specific IgE** after exposure. Strongly associated with **asthma, allergic rhinitis and conjunctivitis, eczema, food allergy**|',
    '|**Sensitization**|**A positive test only** — skin prick or specific IgE. **Does NOT equate to allergy** unless exposure initiates a clinical reaction. **The more positive tests, the more likely** the person is allergic|',
    '|**Anaphylaxis**|Serious allergic reaction with **bronchial, laryngeal or cardiovascular** involvement, **rapid in onset**, **may cause death**|',
    '',
    '### ⚠️ Sensitization is not allergy — the deck asks it directly',
    '',
    '- **The vignette:** 10-month-old, **positive peanut skin prick test**, has **NEVER eaten peanut**, no symptoms with other foods.',
    '- **The answer:** **sensitization** — not clinical peanut allergy, not anaphylaxis, not oral allergy syndrome.',
    '',
    'Src: L26 pp.2–4, 30–31 (the answer is red highlighting on the repeat slide, image-only, recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'alg-2', w: 'high',
  h: 'Pathogenesis — the barrier, the cascade, and four mediator effects',
  body: [
    '### Why some children and not others',
    '',
    '- **Genes:** many linked to allergic disease; **polymorphisms or mutations** create a **susceptibility**.',
    '- **An "epigenetic condition":** the **environment interacts with those genes**.',
    '- **The skin barrier:** in health, a **protective barrier against external irritants, moisture loss and infection**.',
    '- **Filaggrin:** a **structural epidermal protein** whose **breakdown products** are critical to barrier function, **including skin moisturization**.',
    '- **⚠️ Filaggrin gene alterations:** increased risk of **eczema AND food allergy** — one gene, both ends of the atopic march.',
    '',
    '### The sensitisation cascade',
    '',
    '**The chain:** **sensitization → IgE production → arming of the mast cell → release of mediators → clinical effects**.',
    '',
    '- **First exposure:** allergen crosses skin or mucosa → IgE B cell → **IgE antibody** binds the **IgE Fc receptor** on mast cells **just below** it.',
    '- **Second exposure:** allergen **cross-links** two adjacent immunoglobulins → **degranulation** → **primary and secondary mediators**.',
    '- **The clinical effects named:** **anaphylaxis · asthma · hay fever**.',
    '',
    '### Four mediator effects — every allergic symptom is one of them',
    '',
    '|Effect|Symptom it produces|',
    '|---|---|',
    '|**Vasodilation**|**Erythema**|',
    '|**Increased vascular permeability**|**Swelling**|',
    '|**Smooth muscle constriction**|**Bronchoconstriction** and **abdominal pain**|',
    '|**Nerve activation**|**Itching, sneezing, coughing**|',
    '',
    'Src: L26 pp.5–11 (pp.8–10 image-only, recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'alg-3', w: 'must',
  h: 'Type 1 versus type 4 — the grid the deck builds the lecture on',
  body: [
    '|Axis|**Type 1 — IMMEDIATE, IgE-mediated**|**Type 4 — DELAYED, T-cell mediated**|',
    '|---|---|---|',
    '|**Typical disease**|**Urticaria / angioedema**|**Dermatitis**|',
    '|**Chemical mediator**|**Histamine**|**T cell-derived cytokines**|',
    '|**Onset**|**MINUTES**|**HOURS**|',
    '|**Total and allergen-specific IgE**|**Can help**|**"avoid"** — the printed word; the test is of no use here|',
    '|**Antihistamine**|**Helps**|**NOT effective**|',
    '|**Immunology on the figure**|Mast cell **degranulation** driven by surface IgE|**Dendritic cell → TSLP, IL-33 → T cell**; **Th2 cytokines IL-4, IL-13, IL-5**; **cytotoxicity**|',
    '',
    '*The deck teaches only types 1 and 4 and never mentions the others (not taken from the course material: type 2 is cytotoxic antibody-mediated, type 3 immune-complex).*',
    '',
    'Src: L26 pp.12–13 (the immunology row from p12\'s figure, image-only, recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'alg-4', w: 'high',
  h: 'The laboratory — three tests and what a positive one is worth',
  body: [
    '### The tests the deck names',
    '',
    '- **Skin prick test:** a **drop of allergen**, a **small skin prick** through it, then read the **skin reaction** — the wheal.',
    '- **Allergy blood test:** measures **the concentration of specific IgE antibodies in the blood**.',
    '- **Total and allergen-specific IgE:** **can help in type 1**; of no use in type 4.',
    '',
    '### ⚠️ How to read the result',
    '',
    '- **A positive test is SENSITIZATION**, not allergy — see alg-1.',
    '- **The clinical history is the key** in food allergy diagnosis; the tests are **confirmatory**.',
    '- **Therapeutic response:** antihistamines help in **type 1** and not in **type 4** — the response is itself information.',
    '',
    'Src: L26 pp.3, 13–15, 23 (pp.14–15 image-only, recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'alg-5', w: 'must',
  h: 'Food allergy — who gets it, to what, and the two routes in',
  body: [
    '- **Over 80 %** of children with food allergy **present in the first year of life**; **many have atopic eczema**.',
    '- **The commonest food allergens:** **milk · egg · soy · wheat · peanut · tree nuts · fish · shellfish**.',
    '- **Seeds:** increasingly identified as allergens, with **sesame the commonest**.',
    '',
    '### Primary versus secondary',
    '',
    '- **Primary — the usual route:** **most commonly primary**; children **usually react on FIRST exposure**.',
    '- **Secondary:** **cross-reactivity** between proteins in **fresh fruits, vegetables and nuts** and those in **pollens**.',
    '- **The worked example:** a child who eats apples may **become apple-allergic when older** on becoming allergic to **birch tree pollen** — the two **share a very similar protein**.',
    '- **The name for it:** **"pollen food allergy syndrome"**, also called **"oral allergy syndrome"**.',
    '',
    '### Adverse reactions to foods — the classification',
    '',
    '|Branch|Sub-division|',
    '|---|---|',
    '|**Food intolerances**|Not immune-mediated; the deck does not develop them|',
    '|**Food allergies**|**IgE-mediated** · **non-IgE-mediated**|',
    '',
    '*Egg allergy and vaccination is `infection-vaccine`.*',
    '',
    'Src: L26 pp.16–18'
  ].join('\n'),
  qs: []
},

{
  id: 'alg-6', w: 'must',
  h: 'IgE versus non-IgE food allergy — the timing decides it',
  body: [
    '### IgE-mediated — minutes, and any system',
    '',
    '**Timing:** usually **10–15 minutes**, up to **2 hours**, after ingestion; symptoms range from **urticaria** through **facial swelling** to **anaphylaxis**.',
    '',
    '|System|Features|',
    '|---|---|',
    '|**Cutaneous**|Urticaria, angioedema, pruritus, flushing, **morbilliform rash**|',
    '|**Gastrointestinal**|Swelling of **lips, tongue and uvula**, nausea, vomiting, abdominal cramps, diarrhoea|',
    '|**Cardiovascular**|Tachycardia, hypotension, pallor, **shock, loss of consciousness**|',
    '|**Respiratory — upper**|Rhinorrhoea, nasal pruritus, nasal congestion, sneezing, **hoarseness, STRIDOR**|',
    '|**Respiratory — lower**|Cough, wheeze, dyspnoea, **cyanosis**|',
    '|**Neurologic**|Anxiety, headache, seizure, altered mental status, **feeling of impending doom**|',
    '|**Ocular**|Conjunctival erythema and tearing|',
    '',
    '### Non-IgE-mediated — hours, and mostly gut',
    '',
    '- **Timing:** **hours** after ingestion, not minutes.',
    '- **Tract:** **gastrointestinal** — **diarrhoea, vomiting, abdominal pain**, and sometimes **faltering growth**.',
    '- **Proctitis:** presents in an infant as **blood in the stools in the first few weeks of life**.',
    '- **FPIES:** rarely, **severe repetitive vomiting** in an infant following **milk or rice**, **which can result in SHOCK** — **food protein induced enterocolitis syndrome**.',
    '',
    '### ⚠️ The deck\'s own discriminator',
    '',
    '- **The vignette:** severe repetitive vomiting and diarrhoea **consistently 4 hours** after cow\'s milk.',
    '- **The answer:** **non-IgE-mediated food allergy** — not type 1, not immediate hypersensitivity. **The timing alone decides it.**',
    '',
    '*The acutely wheezy child in general is `respiratory` resp-14.*',
    '',
    'Src: L26 pp.20–22, 32–33 (the answer is red highlighting on the repeat slide, image-only, recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'alg-7', w: 'high',
  h: 'Diagnosis — three pillars, and where a challenge may be done',
  body: [
    '|Pillar|What it contributes|',
    '|---|---|',
    '|**Careful clinical history**|**The key.** Suspect food allergy if **typical symptoms follow exposure to a particular food**|',
    '|**Evidence of allergen-specific IgE**|For IgE-mediated allergy the **most helpful confirmatory tests** are **skin prick tests** and **specific IgE in blood**|',
    '|**Oral food challenge**|Used when **history and investigations are not clear**, or when the child is **thought to have grown out of** an allergy|',
    '',
    '### The oral food challenge, as the deck describes it',
    '',
    '- **Method:** **increasing quantities** of the food, **starting with a tiny amount, until a full portion is reached**.',
    '- **Blinding:** sometimes **placebo-controlled** — child and parents **do not know** which challenge holds the food.',
    '- **⚠️ Where:** **in a hospital with full resuscitation facilities available**, with **close monitoring for signs of anaphylaxis**.',
    '',
    'Src: L26 pp.23–25'
  ].join('\n'),
  qs: []
},

{
  id: 'alg-8', w: 'high',
  h: 'Natural history, management, prevention and the atopic march',
  body: [
    '### Natural history — the allergen decides the course',
    '',
    '|Allergen|Course|',
    '|---|---|',
    '|**Milk, egg, wheat, soy**|**MOST OUTGROW** these allergies|',
    '|**Peanut, tree nut, fish, shellfish**|**Tend to be LIFELONG**|',
    '',
    '### Management',
    '',
    '- **Avoidance** of the relevant food or foods — the core of it.',
    '- **Related allergies** must be considered once a child is diagnosed with one.',
    '- **Heat and processing:** proteins with an **unstable tertiary structure** may be **rendered non-allergenic** by **heat degradation** or processing.',
    '- **The family, not only the diet:** child and family **must be able to manage an allergic reaction**.',
    '- **Immunotherapy:** **minute amounts of the food**, **built up over time**.',
    '',
    '### Prevention — oral tolerance induction',
    '',
    '- **What it is:** inducing **"immune tolerance"** by **feeding common allergens — eggs, cow\'s milk, peanut — to young infants**.',
    '- **Where it is used:** now often in **infant feeding guidelines** where food allergy is common.',
    '- **⚠️ The hypothesis:** tolerance depends on **EARLY EXPOSURE THROUGH THE GIT**; **sensitization occurs through an IMPAIRED SKIN BARRIER**. Supported by many clinical studies.',
    '',
    '### The atopic march',
    '',
    '- **The five conditions ringed together:** **AD** atopic dermatitis / eczema · **FA** food allergy · **AC** allergic conjunctivitis · **AR** allergic rhinitis · **BA** bronchial asthma.',
    '',
    '*The deck never expands the abbreviations; the five come from its own atopy definition.*',
    '',
    '*Its arrows do not circulate, so no order reads off the slide — the classic sequence, eczema and food allergy first then airway disease, is not taken from the course material.*',
    '',
    '*Asthma itself is `respiratory`.*',
    '',
    'Src: L26 pp.3, 26–29 (p29 image-only, read at 300 dpi)'
  ].join('\n'),
  qs: []
},

{
  id: 'alg-9', w: 'must',
  h: 'Anaphylaxis — the definition, the numbers, and two mechanisms',
  body: [
    '### Definition — five elements, all of them wanted',
    '',
    '**Anaphylaxis:** a **sudden**, **severe, serious, life-threatening**, **generalized or systemic hypersensitivity reaction**, due to **sudden release of potent biologically active mediators from inflammatory cells**, presented by **systemic symptoms and signs**.',
    '',
    '*L26 words it shorter — see alg-1.*',
    '',
    '### The epidemiology the deck opens with',
    '',
    '|Figure|Value|',
    '|---|---|',
    '|**Global incidence**|**50–112 episodes per 100,000 person-years** — 1 episode for every 1,000 persons|',
    '|**Estimated lifetime prevalence**|**0.3–5.1 %**|',
    '|**Incidence in children**|**1–761 per 100,000 person-years (0.76 %)**|',
    '|**Recurrence**|**27–54 %** of patients, over follow-up of **1.5 to 25 years**|',
    '',
    '### The two mechanisms',
    '',
    '- **Immune mediated — the commonest:** **IgE-mediated the commonest** of these, **IgG-mediated less common**.',
    '- **The cascade:** allergen → **bridging of TWO immunoglobulins** on **mast cell / basophil receptors** → **degranulation** → **histamine, PAF and others**.',
    '- **Non-immune mediated —** **direct mast cell activation**: **viral and bacterial infections · serum sickness and transfusion reactions · certain drugs (opioids, radiocontrast agents, vancomycin, anaesthesia drugs) · exercise**.',
    '',
    'Src: L27 pp.3–6; the short definition L26 p4'
  ].join('\n'),
  qs: []
},

{
  id: 'alg-10', w: 'high',
  h: 'Triggers — four ranked categories, plus two with no rank',
  body: [
    '|Rank|Trigger|Detail|',
    '|---|---|---|',
    '|**1**|**FOOD — the most common and important**|**Milk, egg · peanut / tree nut · fish / shellfish · soy, wheat**|',
    '|**2**|**Medications**|**The most common INPATIENT allergens.** Antibiotics, **NSAIDs** (aspirin, ibuprofen), **rubber latex**, contrast agents|',
    '|**3**|**Insect bites**|**Hymenoptera** species — **honey bees, wasps, ants, yellow jackets, hornets**|',
    '|**4**|**Inhalants — RARE**|**Pollen, mould, dust mites**|',
    '|—|**Direct mast cell activators**|**Radiocontrast media, opioids, certain medications**|',
    '|—|**Idiopathic anaphylaxis**|**No identifiable cause**|',
    '',
    '*"Inhalants: rare" is the last line of p10 and falls OFF the bottom edge of the slide, so it is absent from the cached text; its three examples are read off p11\'s figure.*',
    '',
    'Src: L27 pp.10–11 (p11 image-only, recovered by render; p10\'s last line recovered by enlarging the page box)'
  ].join('\n'),
  qs: []
},

{
  id: 'alg-11', w: 'must',
  h: 'The clinical criteria for diagnosis, and low blood pressure by age',
  body: [
    '### WAO 2020 — acute onset of an illness over minutes to several hours, then either',
    '',
    '|Setting|What is required|',
    '|---|---|',
    '|**Allergen UNKNOWN**|**Skin / mucous membrane** **PLUS ONE** of: **respiratory** · **hypotension** · **end-organ dysfunction (collapse / incontinence)** · **severe GI symptoms**|',
    '|**Allergen LIKELY or KNOWN**|**ONE** of: **hypotension** · **bronchospasm** · **laryngeal involvement**|',
    '',
    '### The older three-criterion version the deck also prints',
    '',
    '|Setting|What is required|',
    '|---|---|',
    '|**Allergen unknown**|Skin / mucous membrane **PLUS ONE** of: respiratory · reduced BP · end-organ dysfunction (collapse / incontinence)|',
    '|**Allergen likely**|**PLUS TWO** of: skin / mucous membrane · respiratory · reduced BP · end organ · **GIT**|',
    '|**Allergen known**|**Reduced BP alone** is enough|',
    '',
    '### ⚠️ Low systolic BP in children — the two slides do not agree',
    '',
    '|Age|Low systolic blood pressure|',
    '|---|---|',
    '|**1 month – 1 year**|**< 70 mmHg** — *on p13 only; p12\'s footnote starts at 1 year and omits infants altogether*|',
    '|**1 – 10 years**|**< (70 mmHg + [2 × age])** — both slides agree|',
    '|**11 years upward**|**< 90 mmHg** — *p13 writes "11 to 17 years", p12 writes "11 to adult age"*|',
    '|**Any age**|**or greater than a 30 % DECREASE in systolic BP**|',
    '',
    'Src: L27 pp.12–13'
  ].join('\n'),
  qs: []
},

{
  id: 'alg-12', w: 'know',
  h: 'Who is at risk, and the one blood test that is taken twice',
  body: [
    '### Factors increasing the risk, or making anaphylaxis difficult to treat',
    '',
    '|Group|Items|',
    '|---|---|',
    '|**Age**|**Infants — difficult to diagnose**, cannot describe symptoms · **adolescents — risky behaviours** · **labour and delivery** · **the elderly — increased fatality** from medication and venom-triggered anaphylaxis|',
    '|**Concomitant disease**|**Asthma and atopy** · chronic lung disease · cardiovascular disease · **depression and cognitive dysfunction** · allergic rhinitis and eczema · **mastocytosis / clonal mast cell disorders**|',
    '|**Drugs**|**β-blockers, ACE inhibitors** · psychiatric medications, alcohol, substances of abuse · ethanol, sedatives, hypnotics, antidepressants, recreational drugs|',
    '|**Co-factors that AMPLIFY**|**Exercise** · **acute infection** (a cold or fever) · **emotional stress** · **disruption of routine** (travel) · **premenstrual status**|',
    '',
    '### Serum tryptase — a retrospective test, not a bedside one',
    '',
    '- **First sample: 30–120 minutes** after the start of the attack.',
    '- **Baseline sample:** at least **24 hours after complete resolution** of symptoms.',
    '- **Whose recommendation:** the **EAACI task force**.',
    '- **What it is for:** **diagnosing anaphylaxis RETROSPECTIVELY** — an elevated level **within two hours**, against a baseline measured before or after, **confirms the diagnosis at a later allergy consultation**.',
    '',
    'Src: L27 pp.14–16 (p14 image-only, recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'alg-13', w: 'must',
  h: 'Community management — the auto-injector, the plan, and the card',
  body: [
    '### Emergency preparedness — three parts',
    '',
    '- **Auto-injector (EAI):** self-injectable epinephrine, **prescribed to ALL patients who have had anaphylaxis**.',
    '- **Emergency action plan:** in **all primary care settings**.',
    '- **Medical identification:** the alert bracelet.',
    '',
    '### ⚠️ The rule printed across the head of the card',
    '',
    '- **The instruction:** **do NOT depend on antihistamines or inhalers (bronchodilators) to treat a severe reaction. USE EPINEPHRINE.**',
    '- **Asthma:** ticked as **"higher risk for a severe reaction"**.',
    '',
    '### Severe symptoms — any ONE means epinephrine immediately',
    '',
    '|Body area|Severe finding|',
    '|---|---|',
    '|**Lung**|Shortness of breath, wheezing, **repetitive cough**|',
    '|**Heart**|**Pale or bluish skin**, faintness, **weak pulse**, dizziness|',
    '|**Throat**|**Tight or hoarse throat**, trouble breathing or swallowing|',
    '|**Mouth**|**Significant swelling of the tongue or lips**|',
    '|**Skin**|**Many hives**, widespread redness|',
    '|**Gut**|**Repetitive vomiting**, severe diarrhoea|',
    '|**Other**|**Feeling something bad is about to happen**, anxiety, confusion|',
    '|**Or**|**A COMBINATION of symptoms from different body areas**|',
    '',
    '### Mild symptoms — and the rule that turns them severe',
    '',
    '|Body area|Mild finding|',
    '|---|---|',
    '|**Nose**|Itchy or runny nose, sneezing|',
    '|**Mouth**|Itchy mouth|',
    '|**Skin**|A few hives, mild itch|',
    '|**Gut**|Mild nausea or discomfort|',
    '',
    '- **⚠️ More than one area:** mild symptoms in **MORE THAN ONE system area → GIVE EPINEPHRINE**.',
    '- **A single area:** **antihistamine if ordered by a healthcare provider**; **stay with the person**, alert emergency contacts, **watch closely — if symptoms worsen, give epinephrine**.',
    '',
    '### After the injection, in the community',
    '',
    '- **Position:** **lay flat, raise the legs, keep warm**. If breathing is difficult or they are vomiting, **let them sit up or lie on their side**.',
    '- **Repeat:** if symptoms **do not improve or return**, further doses **about 5 minutes or more after the last dose**.',
    '- **⚠️ Observation:** transport to the ER **even if symptoms resolve**, and **remain there at least 4 HOURS, because symptoms may return** — the same 4 hours the worked scenario advises before going home.',
    '',
    '*The deck never uses the term **biphasic reaction**, which is the recurrence the 4-hour rule guards against (not taken from the course material).*',
    '',
    'Src: L27 pp.17–19, 27 (p19, the action-plan card, image-only, recovered by render at 260 dpi)'
  ].join('\n'),
  qs: []
},

{
  id: 'alg-14', w: 'must',
  h: 'Hospital management — the ten steps, and every dose the deck states',
  body: [
    '### ⚠️ EVERY DOSE, AS PRINTED',
    '',
    '|Agent|Dose the deck states|Route and site|Repeat and notes|',
    '|---|---|---|---|',
    '|**Adrenaline (epinephrine)**|**0.01 mg/kg of a 1:1,000 (1 mg/mL) solution** · max **0.5 mg (adult)** or **0.3 mg (child)**|**IM**, **mid-anterolateral thigh** — p23 words it **"mid-outer thigh"**|**RECORD THE TIME.** **Repeat every 5–15 min** if needed; **most respond to 1 or 2 doses**|',
    '|**Auto-injector strengths**|**0.1 mg · 0.15 mg · 0.3 mg**|**IM**, the action-plan card\'s checkboxes|Community repeat: **about 5 min or more after the last dose**|',
    '|**Oxygen**|**High-flow, 6–8 L/minute**|**Face mask or oropharyngeal airway**|"When indicated"|',
    '|**0.9 % (isotonic) saline**|**1–2 litres** · **5–10 mL/kg in the first 5–10 min to an ADULT** · **10 mL/kg to a CHILD**|**IV**, **wide-bore cannula 14–16 gauge**|Given **rapidly**|',
    '|**Inhaled salbutamol**|**No dose stated**|Nebulised or inhaled|**Additional**, after adrenaline|',
    '|**Antihistamines, steroids**|**No dose stated**|—|**Additional only — never instead of adrenaline**|',
    '',
    '- **⚠️ Two intervals, both printed:** the protocol says **every 5–15 minutes**, the card **about 5 minutes or more**. Both recorded; neither corrected here.',
    '- **Monitor:** **BP · ECG · SO₂**, at frequent regular intervals — **cardiac rate and function, respiratory status, oxygenation; continuously if possible**.',
    '',
    '### Doses the deck names a drug for but never gives',
    '',
    '- **Auto-injector by weight:** **0.1 mg for 7.5–15 kg · 0.15 mg for 15–30 kg · 0.3 mg for 30 kg and over** *(not taken from the course material)*.',
    '- **Chlorphenamine**, IM or slow IV: **250 micrograms/kg under 6 months · 2.5 mg 6 months–6 years · 5 mg 6–12 years · 10 mg over 12** *(not taken from the course material)*.',
    '- **Hydrocortisone**, IM or slow IV: **25 mg under 6 months · 50 mg 6 months–6 years · 100 mg 6–12 years · 200 mg over 12** *(not taken from the course material; both are adjuncts AFTER adrenaline, and current guidance no longer places either in the initial algorithm)*.',
    '',
    'Src: L27 pp.20–24 (pp.20–22 image-only, the whole protocol recovered by render and the dose re-read at 300 dpi; p23\'s "0.01 mg/kg" lies off the slide edge and was recovered by enlarging the page box)'
  ].join('\n'),
  flow: {
    title: 'Anaphylaxis — the WAO emergency protocol',
    steps: [
      { k: 'step', t: 'WRITTEN PROTOCOL — have a printed emergency protocol for recognition and treatment of anaphylaxis, and rehearse it regularly', n: 'steps 1-7 run PROMPTLY AND SIMULTANEOUSLY' },
      { k: 'step', t: 'REMOVE EXPOSURE to the trigger if possible — e.g. discontinue an intravenous diagnostic or therapeutic agent that seems to be triggering symptoms', n: 'step 2' },
      { k: 'step', t: 'ASSESS THE PATIENT — airway, breathing, circulation, mental status, skin, and body weight (mass)', n: 'step 3' },
      { k: 'step', t: 'CALL FOR HELP — the resuscitation team in hospital, or emergency medical services in the community', n: 'step 4' },
      { k: 'alert', t: 'INJECT ADRENALINE (EPINEPHRINE) intramuscularly in the mid-anterolateral thigh — 0.01 mg/kg of a 1:1,000 (1 mg/mL) solution, maximum 0.5 mg in an adult or 0.3 mg in a child. RECORD THE TIME OF THE DOSE and repeat every 5-15 minutes if needed. Most patients respond to 1 or 2 doses', n: 'step 5 — the only drug that saves life' },
      { k: 'alert', t: 'POSITION the patient on the back, or in a position of comfort if there is respiratory distress and/or vomiting; ELEVATE THE LOWER EXTREMITIES. Fatality can occur within seconds if the patient stands or sits up suddenly', n: 'step 6 — position kills or saves' },
      { k: 'step', t: 'OXYGEN when indicated — high-flow supplemental oxygen at 6-8 L/minute, by face mask or oropharyngeal airway', n: 'step 7' },
      { k: 'step', t: 'IV ACCESS using needles or catheters with a wide-bore cannula, 14-16 gauge. Consider 1-2 litres of 0.9 % isotonic saline rapidly: 5-10 mL/kg in the first 5-10 minutes to an adult, 10 mL/kg to a child', n: 'steps 8-10 IN ADDITION' },
      { k: 'decision', t: 'Cardiac arrest at any time?', yes: 'Cardiopulmonary resuscitation with CONTINUOUS chest compressions (step 9)', no: 'Go on monitoring' },
      { k: 'step', t: 'MONITOR at frequent, regular intervals — blood pressure, cardiac rate and function, respiratory status and oxygenation; continuously if possible', n: 'step 10' }
    ]
  },
  qs: []
}

    ]
  }
};
