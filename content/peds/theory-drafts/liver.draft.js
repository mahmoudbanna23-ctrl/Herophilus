/* liver — "Liver Disorders", Paediatrics. Written 2026-08-16 under
   START-HERE.md §14 (slide-density revision notes) + §14.3a (layout), and
   content\peds\theory-plan.md, whose ONE local difference is that PAEDIATRICS
   HAS NO 3,000-WORD CAP: budget = max(lecture words, 25 x questions, 600).
   Shape copied from allergy.draft.js and genetics.draft.js.

   DECK LABELS USED IN THE Src LINES:
     L43 = 43)Infantile cholestasis_.pdf — "Neonatal and Infantile Cholestasis",
           Prof. Dr. Manal Abdelgawad, Prof. of Pediatrics and Pediatric
           Hepatology, Faculty of Medicine, Alexandria University, 7-6-2026.
           70 PDF pages. Born-digital, cached at
           content\peds\lectures\43)Infantile cholestasis_.txt.
     L42 = 42)Viral hepatits_.pdf — "Pediatric Viral Hepatitis", Amel Mahfouz
           M.D., Assistant Professor of Pediatrics and Pediatric Hepatology,
           Alexandria University. 44 PDF pages.
           ⚠️ THE FILENAME MISSPELLS IT "hepatits"; the deck spells hepatitis
           correctly throughout. The PDF's internal Title is
           "1.viral-hepatitis-undergraduate.pdf", producer mPDF 8.1.2.

   ============================================================================
   ⚠️⚠️ FINDING 0 — L42 HAS NO TEXT LAYER AT ALL AND WAS READ VISUALLY, END TO
   END. EVERYTHING IN THIS CHAPTER FROM L42 IS A VISUAL TRANSCRIPTION.
   ============================================================================
   `pdftotext -layout "42)Viral hepatits_.pdf"` returns **44 bytes** — one form
   feed per page and **ZERO characters of text**. That is why the deck was never
   harvested and why theory-plan.md's manifest flags it ⚠️IMAGE-ONLY, and why
   `visual-read-triage.md` scores it **100 % blank**, the worst deck in the
   module. It is not a diagram deck: every page is a **photograph of a projected
   slide**, complete with the black surround and the projector's grey gradient,
   so even ordinary prose is pixels.

   **ALL 44 PAGES WERE RENDERED AT 110 dpi AND READ AS ELEVEN FOUR-UP CONTACT
   SHEETS**, then **eight pages re-rendered at 220 dpi** (7, 18, 19, 20, 23, 33,
   34, 42) because a serology grid, a guideline table and a dose-free treatment
   list are exactly what a contact sheet gets wrong. `[Math]::Floor` was used
   for the tiling row index, per the brief's warning that PowerShell
   `[int](3/2)` is 2 and silently drops every fourth page.

   Every L42 citation below is therefore `42)Viral hepatits_.pdf p.<N>` read off
   an image, and it is cited exactly like any other source because it IS the
   course material — but the reader should know the route. **No L42 fact in this
   chapter came from anywhere but that render.**

   ⚠️ WHAT THE 44 PAGES CONTAIN, since nobody has ever been able to list them:
     pp.1–2   title cards (Arabic basmala; author card)
     pp.3–6   liver lobes · aetiology · non-hepatotropic viruses · the symptom list
     pp.7–12  HEPATITIS A — virion, epidemiology, clinical forms, IgM, post-
              exposure vaccination, management
     pp.13–24 HEPATITIS B — the numbered virus list, 240 million carriers,
              prevalence map, transmission spokes, the virion with its three
              antigens, **THE SEROLOGY GRID (p.18)**, the carrier cascade,
              paediatric antiviral rules, prevention, maternal counselling,
              **HBIG + vaccine at delivery and the booster rule (p.23)**
     p.25     HEPATITIS D
     pp.26–34 HEPATITIS C — virion, blood-donor map, clinical features, natural
              course in children, transmission plate, the AASLD/IDSA testing
              table and the ≥3-year DAA rule
     pp.35–39 HEPATITIS E — transmission, clinical forms, pregnancy, ELISA
     p.40     news screenshots, acute hepatitis of unknown aetiology 2022
     pp.41–43 CHRONIC LIVER DISEASE — definition, complications, transplantation
     p.44     "THANK YOU"

   ⚠️ AND THE DECK IS ITSELF INCOMPLETE — reported plainly, not glossed. p.8 is
   titled **"Epidemiology …contd."** and p.10 **"Laboratory Diagnosis…contd"**,
   but no page 7 or 9 carries the first half of either. Slides were lost in
   whatever produced this PDF. **What is missing with them is real and
   examinable**: HAV's own epidemiology opener, HAV's other laboratory tests,
   and — most conspicuously — **HBV has no incubation-period slide and no
   clinical-features slide anywhere in the deck.** Those gaps are filled and
   tagged in liv-12 rather than declared.

   ============================================================================
   ⚠️ FINDING 1 — THE L43 CACHE IS COMPLETE, AND IS NOT CLIPPED. Two checks,
   because the usual one has a known blind spot.
   ============================================================================
   1. **Cache vs a fresh `pdftotext -layout`:** cache **1,565 words**, fresh
      extraction **1,560**. The five-word difference is the cache's own
      `SOURCE:` header line. Same page count (70 + the trailing form feed).
      The cache IS the pdftotext output; no supplementary extraction was needed
      and the cache was not touched.
   2. **The MediaBox blind spot, checked separately** (theory-plan.md's new
      section): every page's last line was tested for an ending article,
      preposition or conjunction, the signature of text overflowing the slide's
      bottom edge. **CLEAN NEGATIVE — zero hits across all 70 pages.** L43 is a
      Quartz-generated 720×540 deck whose text boxes sit inside the box.
      No MediaBox rewrite was attempted and none is owed.

   ⚠️ THE CHECK THAT MATTERED WAS NEITHER OF THOSE — see FINDING 2.

   ============================================================================
   ⚠️⚠️ FINDING 2 — 48 OF L43's 70 PAGES ARE UNDER 45 WORDS, SO IT WAS ALSO
   RENDERED END TO END. And the ceiling it produces is 35 % contents page.
   ============================================================================
   The 5-word triage filter sees 30 blank pages in L43. **At the brief's 45-word
   threshold it is 48 of 70 = 69 %** — so no triage decision was taken and the
   whole deck went to render: 70 pages at 110 dpi into 18 four-up contact
   sheets. Both decks together: **114 pages read as images, 29 contact sheets,
   plus 8 high-resolution re-renders.**

   ⚠️⚠️ AND THE SINGLE LARGEST FACT ABOUT L43's CEILING: **THE OBJECTIVES SLIDE
   IS PRINTED ELEVEN TIMES** — pp.3, 4, 16, 21, 30, 35, 41, 44, 54, 59, 64 —
   at 49–51 words each, **545 words, 34.8 % of the entire cached deck.** It is a
   contents list for the body of the same file, so counting it bills L43 twice
   over (the `ent-swallow` ILO-index case, at ten times the scale). Measured
   with node, page by page, not estimated.

   ⚠️⚠️ WHAT THE L43 RENDER RECOVERED — nine items, all from pages the word
   counter reads as 0–5 words:

     1. **p.34 — THE STOOL COLOUR CARD.** 0 words. A nine-panel photographic
        card, **#1–#6 under a red banner (abnormal stool colours)** and
        **#7–#9 under a blue banner (normal)**, attributed on the slide to the
        **stool colour card (SCC) developed by Perinatal Services BC, British
        Columbia, in Vancouver, Canada — Arabic version**. A printed caution
        reads that the colours may not reproduce accurately in print. This is a
        real screening instrument and the cache holds not one word of it. liv-6.
     2. **p.42 — THE PATHOGENESIS SEQUENCE.** 0 words. Three chevrons:
        **failure of bile delivery to the intestine → retention of bile in the
        hepatocytes and bile ducts → reflux of bile into the blood.** The cache
        holds only p.43, the *consequence* slide, so a reader working from the
        cache gets the biochemistry with no mechanism. liv-4.
     3. **p.20 — THE LIVER-FUNCTION GRID.** 0 words. Eight labelled blocks:
        detoxification, cholesterol production, micronutrient storage,
        metabolism, blood-sugar balance, immune system, bile production and
        protein synthesis, each with its own item list including
        **ammonia → urea**, **T4 → T3**, **ceruloplasmin for copper
        bioavailability** and the vitamin/mineral store. liv-2.
     4. **p.61 — THE GALACTOSAEMIA PLATE.** 0 words. Labelled **brain damage,
        cataracts, jaundice, enlarged liver, kidney damage**, with the caption
        *"If a galactosemic infant is given milk, unmetabolized milk sugars
        build up and damage the liver, eyes, kidneys and brain."* **This is the
        answer to two of the deck's own three MCQs** and it exists only as a
        picture. liv-8.
     5. **p.48 — STAGES OF LIVER DAMAGE.** 0 words. Stage 0 healthy · 1
        inflammation, no scar · 2 fibrosis starting to form scar · 3 progression
        of scar and widespread fibrosis · 4 advanced disease, cirrhosis,
        severe scarring. liv-7.
     6. **p.60 — THE KASAI OPERATION.** 0 words. A before/after plate: damaged
        bile ducts and gallbladder excised, **small intestine connected directly
        to the liver**. The cache names "Kasai portoenterostomy" and never says
        what it is. liv-9.
     7. **p.29 and p.27 — THE BILIRUBIN FLOW DIAGRAMS.** 0 and 2 words.
        Erythrocyte heme → biliverdin (heme oxygenase) → bilirubin (biliverdin
        reductase) → albumin complex → hepatic conjugation → conjugated
        bilirubin → bile → **bacterial deconjugation at the terminal ileum** →
        urobilinogen → faecal stercobilinogen, with the renal limb. liv-3.
     8. **pp.38 and 40 — THE BILIARY ATRESIA PLATES.** 0 words. Normal versus
        blocked duct, and the Cleveland Clinic patient plate labelling
        **jaundice, bile backed up in liver, narrow bile duct, damaged liver,
        swollen belly**. liv-5.
     9. **pp.49–53 — FIVE CLINICAL PHOTOGRAPHS** of infants with established
        cholestasis: deep scleral icterus, gross abdominal distension, and on
        the last two a **prominent abdominal-wall venous pattern**, which is
        portal hypertension made visible. Kept as the *named* findings in
        liv-7; the photographs themselves are not describable in markdown.

   Also confirmed by render but NOT new: pp.5, 12, 15, 23–28 (the anatomy and
   histology plates — their captions are already in the cache), p.10 the biliary
   tree, p.36 the aetiology tree (the cache holds its words as an interleaved
   jumble; the render supplies only the pairing).

   ⚠️ WHAT RECOVERED NOTHING, reported plainly: **p.65 and p.66 are World Liver
   Day public-health posters** ("eat healthy, exercise, drink water, no smoking
   and alcohol, go to bed early"). They are health promotion for adults and
   carry no paediatric teaching; nothing from either is written. **p.1, p.2 and
   p.70** are the hospital photograph, the author card and "THANK YOU". Four
   pages of 70 rendered for nothing — a good return, and stated rather than
   dressed up.

   Rendered PNGs live in the session scratchpad only. `Semester 8\` was opened
   read-only; nothing in it was modified, renamed or moved.

   ============================================================================
   ⚠️⚠️ FINDING 3 — L43 PRINTS THREE MCQs AND **NO ANSWER KEY**, unlike the
   allergy deck whose repeats carry the answer as red highlighting.
   ============================================================================
   pp.67, 68 and 69 each print a stem and its options and then stop; there is no
   repeat slide, no highlight and no key anywhere in the 70 pages, checked at
   220 dpi. **The answers below are REASONED FROM THE DECK'S OWN CONTENT and
   labelled as such in the body**, never presented as printed:
     · p.67 — 2-day-old, respiratory distress, jaundice, **E. coli** bacteraemia,
       **cataracts** → **A, galactosaemia.** The deck's own p.61 plate pairs
       cataracts with jaundice and liver damage in galactosaemia, and p.36 files
       galactosaemia under metabolic hepatitis. (*E. coli* sepsis is the classic
       association and is tagged as supplied.)
     · p.68 — absolute contraindication to breastfeeding → **A, galactosaemia**,
       the only option on the list that the deck's own material forbids milk in.
     · p.69 — 2-week-old, **thriving**, bilirubin 10 mg/dL **nearly all
       unconjugated**, **dipstick negative** → **C, breast milk jaundice.**
       Unconjugated with a negative dipstick excludes cholestasis by this deck's
       own definition; `neonatal` nnj-9 owns the entity.

   ============================================================================
   §14.5 CROSS-CHAPTER DEFERRALS — TWO ROWS ARE OWED TO THIS CHAPTER. Both were
   read against their named decks before being ticked, per §14.5's rule that a
   register row is a claim and not a fact.
   ============================================================================
   ROW 1 — from `neonatal` (neonatal.draft.js nnj-2, one *italic* line):
     *"Conjugated hyperbilirubinaemia as a disease — biliary atresia, the
     infantile cholestasis work-up — is `liver`, from `43)Infantile
     cholestasis_`."*
     ✅ **DELIVERED AND THE ROW IS EXACT.** liv-1 (the fork and the threshold),
     liv-5 (biliary atresia in full), liv-7 (the work-up), liv-9 (Kasai).
     The row named the right deck: `8) COMMON PROBLEMS IN THE TERM NEWBORN`
     carries exactly two lines on conjugated jaundice — *"congenital infections,
     intrahepatic cholestasis, or extrahepatic obstruction of the biliary
     tract"* — and L43 is the deck that teaches it.
     **⚠️ THE BOUNDARY IS RESPECTED IN BOTH DIRECTIONS.** `neonatal` owns
     UNCONJUGATED jaundice entire — physiologic, ABO/Rh, G6PD, spherocytosis,
     the two breast jaundices, the AAP nomograms, phototherapy, exchange
     transfusion, kernicterus. **None of it is restated here.** This chapter
     touches unconjugated jaundice only where the FORK is the teaching point
     (liv-1) and in one *italic* pointer, and it deliberately reprints neither
     nomogram nor a single phototherapy threshold.

   ROW 2 — from `gastroenterology` (its header, MY OWN DEFERRALS):
     *"L24 slide 54's HEPATOBILIARY block as disease — hepatitis,
     cholelithiasis, choledochal cyst, liver abscess, biliary dyskinesia. Kept
     here only as rows of the organic-CAP differential -> `liver`"*
     ⚠️ **DELIVERED IN liv-15, WITH TWO CORRECTIONS THE DECK ITSELF FORCED.**
     `24)Abdominal pain` ships as a **.pptx**, so it was converted with a fresh
     PowerPoint COM instance to the scratchpad and pages 53–57 rendered.
     · **CORRECTION A — the row under-counts. Slide 54 lists SEVEN
       hepatobiliary items, not five**: chronic hepatitis, cholelithiasis,
       **cholecystitis**, choledochal cyst, liver abscess, **sphincter of Oddi
       dysfunction**, biliary dyskinesia. The two the row omits are written.
     · **CORRECTION B — THE DECK CANNOT DELIVER THEM AS DISEASES, and this is
       the §14.5 "a deferral is a promise about where a fact BELONGS, never a
       guarantee that it EXISTS" case.** Slide 54 is a **picture-only
       two-column table of BARE NAMES** — it is why `hepatobiliary`,
       `cholelithiasis`, `choledochal` and `dyskinesia` all return **ZERO** both
       in the cached `24)Abdominal pain.txt` AND in a fresh `pdftotext -layout`
       of the converted PDF. There is no sentence about any of them anywhere in
       the 74 slides. So: **choledochal cyst is written as SOURCED**, because
       L43 prints it twice on its own account (p.36's aetiology tree as "CC",
       p.57 as an ultrasound finding); the other six are written from general
       medical knowledge and **tagged**, one line each. The row is reported as
       mis-stated in scope with the evidence, not re-attributed quietly.

   NOT DEFERRED ONWARD: nothing. This is a terminal chapter. Four facts it could
   have handed on and did not, each for a checked reason:
     · **THE HBV VACCINE SCHEDULE.** `infection-vaccine` inf-51 already carries
       the Egyptian compulsory schedule — hepatitis B inside the pentavalent at
       2, 4 and 6 months, 0.5 mL IM right thigh — read before writing. liv-13
       points at it in one *italic* line and restates **only** what L42 itself
       adds and inf-51 cannot have: the **birth** dose with HBIG for the exposed
       newborn, post-vaccination testing, and the booster rule. Nothing moves.
     · **HEPATITIS A AND E AS FAECO-ORAL INFECTIONS.** `gi-diarrhoea` owns
       faeco-oral spread and ORS; neither hepatitis is a diarrhoeal illness and
       neither deck treats it as one. Kept here whole.
     · **JAUNDICE AS AN ABDOMINAL-PAIN SIGN.** `gi-abdopain` keeps it; L24
       prints "Jaundice" twice as a red-flag row and this chapter does not
       re-argue the abdominal-pain differential.
     · **VITAMIN D AND RICKETS.** liv-7 names fat-soluble vitamin deficiency as
       a consequence of cholestasis and points at `nutrition-vit`; the vitamin
       itself is not taught here.

   ============================================================================
   BUDGET — §14.1, counted from disk with node
   `String(s.body).split(/\s+/).filter(Boolean).length`, the project convention
   (NOT `wc -w`, which reads 3–6 % low on these files).
   ============================================================================
     theory-plan.md's published ceiling: **1,565** — and it is the sum of
     **L43 1,565 + L42 ZERO**, because nothing in L42 extracts. The published
     figure is therefore a FLOOR for two independent reasons, one of which the
     plan already records against `haematology`.

     TERM 1, THE HONEST UNION. No line-range split with another chapter is
     needed: grepping all seventeen written paediatrics drafts, **no other
     header names `43)Infantile cholestasis_` or `42)Viral hepatits_`** in any
     capacity — not counted, not cited, not deferred. Both decks are wholly this
     chapter's, and this chapter defers nothing onward, so §14.1(b) takes
     nothing back out.

       L43  1,565  − 545  the ELEVEN Objectives slides (pp.3, 4, 16, 21, 30, 35,
                          41, 44, 54, 59, 64) — a contents list for this same
                          file, measured page by page at 49–51 w each
                  −  24  p1–p2, the cache's SOURCE line + the title/author card
                  −  14  p23, a verbatim reprint of p14's hepatocyte caption
                  −   5  p25, a verbatim reprint of p9's biliary-system title
                  −  26  the "any infant jaundiced after 2 weeks" sentence,
                          printed twice (p37 and p63); one instance deducted
                                                                       = 951
       L42      0  no text layer. Not "small" — **zero**.
                                                                         ------
     TERM 1 = **951.**
     TERM 2 = 25 × 0 linked questions = **0.** ZERO questions carry
       chapter:'liver', so §14.2's second term contributes nothing and the
       LECTURE side of the coverage floor governs entirely. `qs: []` on every
       section. A reconciliation pass is owed when the paediatrics banks close.
     max(951 · 0 · 600) = **951. TERM 1 GOVERNS — and it is a fiction.**

     ⚠️⚠️ THE HONEST SOURCE CONTENT, since the counter can see barely a third of
     it. Estimated by attribution, and labelled as an estimate:
       · L43's extractable teaching text                          **951**
       · L43's nine image-only recoveries (FINDING 2)             **~455**
       · L42, read visually — 26 of its 44 pages carry teaching
         text, none of it countable                               **~900**
                                                                  --------
       **≈ 2,306.** That is the number this chapter should be judged against,
       and it is **2.4× the published ceiling.** Writing to 1,565 would have
       meant a liver chapter with no hepatitis in it.

   ⚠️ ENTITY FLOOR AND OVERRUN, COUNTED BEFORE WRITING (§14.1 rule 3, at
   theory-plan.md's stated ~85 words per framework slide in this format).

     TWELVE DEVELOPED ENTITIES at ~90 w: 1 neonatal cholestasis · 2 biliary
     atresia · 3 choledochal cyst · 4 galactosaemia · 5 hepatitis A ·
     6 hepatitis B · 7 chronic HBV / the carrier state · 8 hepatitis D ·
     9 hepatitis C · 10 hepatitis E · 11 chronic liver disease · 12 the
     hepatobiliary causes of recurrent abdominal pain = **1,080**.

     FRAMEWORK SLIDES costed ONE BY ONE, image-only pages included because they
     cost words like any other:
       L43 — liver lobes · blood supply · biliary tree · lobule · hepatocyte ·
       the 500 functions · the function grid · bile composition · the two
       bilirubin diagrams · the cholestasis definition · the threshold · the
       aetiology tree · the 60 % line · the pathogenesis chevrons · the
       biochemical consequence · three clinical slides · the stool card · the
       damage stages · the diagnostic run · labs · US · biopsy · cholangiography
       · the second-line panel · the key considerations = **25**.
       L42 — the symptom list · non-hepatotropic viruses · the numbered virus
       list · the HAV virion · HAV epidemiology · HAV clinical forms · HAV IgM ·
       post-exposure · HAV management · the 240-million slide · the transmission
       spokes · the HBV virion · **the serology grid** · the carrier cascade ·
       the antiviral rules · prevention · **the HBIG slide** · the HCV virion ·
       HCV clinical features · HCV natural course · the AASLD testing table ·
       the DAA rule · HEV transmission · HEV clinical forms · HEV in pregnancy ·
       HEV ELISA · the CLD definition · the complication list · transplantation
       = **29**.
       **54 slides × 85 = 4,590.**

     ⚠️ AND THE GRIDS AT ROWS × COLUMNS, not one slide each (the `ent-phon`
     lesson): the five-virus comparison **5×7 = 35 cells** · the serology grid
     **5×4 = 20** · liver functions **8×2** · the aetiology tree **4×2** · the
     damage stages **5×2** · the diagnostic run **5×2** · BA vs neonatal
     hepatitis **6×3** · the CLD complications **7×2** · the hepatobiliary
     causes **7×2** = **~180 cells, ~560 words beyond the slide costings.**

     Naive sum 1,080 + 4,590 + 560 = 6,230. Applying `allergy`'s and
     `neonatal`'s observed one-third entity/framework overlap, and discounting
     the ~20 slides that are a title plus two lines rather than a list proper,
     the floor was predicted at **~2,300–2,600** — i.e. **ABOVE TERM 1 by a
     factor of about 2.5 before a single supplied fact**, and that prediction
     was written before the sections, as §14.1 requires. **It was low by about
     1,400 words, and why is in the outcome block. It is NOT retrofitted.**

   ============================================================================
   ⚠️⚠️ SPLIT DECISION — **TWO CHAPTERS. THE MEASUREMENT DEMANDS IT.**
   ============================================================================
   The finished chapter measures **3,988 body words = 16.6 printed pages** at
   the ÷240 estimator, against paediatrics' **~13 pp hard shape**. It is over by
   **3.6 pp**, so under theory-plan.md's governing rule of 2026-08-15 —
   ***chapters are SPLIT, NOT COMPRESSED*** — the answer is a split and not a
   compression pass. Nothing is dropped.

   **The seam is the deck boundary and it is clean.** No section rests on both
   decks; the only link across it is liv-10's opening, which introduces viral
   hepatitis fresh. Measured on disk, not estimated:

     | Proposed chapter | Sections | Body words | Pages |
     |---|---|---:|---:|
     | **`liver`** — Neonatal cholestasis (L43) | **liv-1 … liv-9** | **2,056** | **8.6** |
     | **`liver-hep`** — Viral hepatitis and CLD (L42) | **liv-10 … liv-15** | **1,932** | **8.1** |
     | *(whole, unsplit)* | liv-1 … liv-15 | *3,988* | *16.6* |

   **Both halves land at 8.1–8.6 pp**, inside the shape with 4+ pp of margin
   each, and both are self-contained: the cholestasis half is *the jaundiced
   infant and the six-week clock*, the hepatitis half is *the five viruses and
   what chronic liver disease does*. They are also the two decks, two lecturers
   and two lecture slots, so the split matches how the syllabus teaches it.

   ⚠️ **WHY THE FILE STILL SHIPS AS ONE `liver` KEY, and what the hub must do.**
   This is the established paediatrics workflow — the five chapters split on
   2026-08-15 were all *written whole and split by the hub afterwards*, because
   **a second chapter id needs a row in `app\\data\\modules.js`, which a writing
   agent must not touch** (§1 file boundaries; `MODULES` currently holds
   `['liver','Liver Disorders']` and nothing else). So the split is delivered
   as a **specification, fully measured**, and the hub's edit is:
     1. Add `['liver-hep','Viral hepatitis and chronic liver disease']` to
        `MODULES` beside `liver`, in the Systems group.
     2. Move sections **liv-10 … liv-15** under that key. Section ids, bodies,
        `Src:` lines and `qs` arrays all carry over untouched — the boundary is
        a contiguous range of this chapter's own structure, per the split rule.
     3. Nothing else. `SCHEDULE` is keyed by date and title, never chapter id,
        and no question is filed under either key, so no reassignment arises —
        **this is the one split in the module with zero question-mapping work.**
   **If the hub prefers to ship it unsplit, it prints at 16.6 pp and that is
   3.6 pp past the shape** — stated so the choice is made on the number.

   ============================================================================
   OMISSION NOTE — item by item, what was left out and why.
   ============================================================================
     1. **THE ELEVEN OBJECTIVES SLIDES, THE TITLE CARDS AND "THANK YOU"**
        (L43 pp.1–4, 16, 21, 30, 35, 41, 44, 54, 59, 64, 70; L42 pp.1–2, 44).
        Deducted from TERM 1 rather than counted and cut.
     2. **THE WORLD LIVER DAY POSTERS** (L43 pp.65–66). Adult public-health
        promotion — eat healthy, exercise, hydrate, avoid smoking and alcohol,
        sleep early. No paediatric teaching, nothing examinable, dropped whole
        and named here so the decision is on the record.
     3. **THE TWO PREVALENCE MAPS** (L42 p.15 HBV, p.28 HCV) AS MAPS. The
        examinable content of each is a **band**, and both bands are written:
        HBV high >8 % / high-intermediate 5–7 % / low-intermediate 2–4 % /
        low <2 %, and HCV >5 % high, in which band **Egypt is the single red
        country on the donor map**. The cartography is not described.
     4. **THE 2022 "ACUTE HEPATITIS OF UNKNOWN AETIOLOGY" NEWS SCREENSHOTS**
        (L42 p.40) AS AN OUTBREAK NARRATIVE. Kept as one line in liv-10 — the
        adenovirus association, >600 probable cases, 38 transplants, nine deaths
        — because those are the only figures legible on the page. The MMWR
        citation and the second news site are not reproduced.
     5. **THE HISTOLOGY AND ULTRASTRUCTURE PLATES AS PICTURES** (L43 pp.11–15,
        23–24). **Every NAMED label is kept** in liv-2 — that is what makes them
        cited rather than dropped — but a cell drawing is not reproducible in
        markdown and no attempt is made to describe one. Same for the five
        clinical photographs (pp.49–53), whose named findings are in liv-7.
     6. **MECHANISM DEEPER THAN THE MATERIAL GOES.** L43 says "impairment in
        bile formation and/or excretion" and stops; it names PFIC and Alagille
        and defines neither; L42 names the Baltimore group and does not explain
        it. This chapter stops where the decks stop on all three, adding only
        the one-line identifications §14.2 test 4 requires for a named entity.
     7. **DISTRACTOR-BY-DISTRACTOR REASONING** (§14.2). No questions are filed
        under this chapter, so it does not arise. Discriminations ARE kept as
        tables wherever the teaching point IS the discrimination: the five
        viruses (liv-10), the HBV serology grid (liv-12), biliary atresia versus
        neonatal hepatitis (liv-5), conjugated versus unconjugated (liv-1).

   ⚠️ NOTHING PROTECTED WAS DROPPED TO FIT. Checked back against both decks at
   the end: **every numerical fact either deck prints is in the body** —
   1.2–1.5 kg, six times, 1.5 L/min, 25 %, 70–75 %, 25–30 %, 20–30 microns,
   >1 mg/dL, >20 %, ≤5 mg/dL, 3 months, 2 weeks, 60 %, 96.9 %, 6 weeks, 27 nm,
   7,000 bases, 15–45 days, 30 days, 7–10 days, 2–4 weeks, 3 months, 14 days,
   240 million, >8 %, 5–7 %, 2–4 %, <2 %, 30–50 %, 10 %, 0.01–0.03 %, 1 year,
   2 years, 1–4 years, 12 months, 3 months, 9–15 months, <10 mIU/mL, 50–70 %,
   10,000 nucleotides, 6–7 weeks, 2–26 weeks, 70 %, 20–30 %, 60–80 %, 18 months,
   age 3, ≥3 years, 1–2/1,000, 1–2/100, 22 %, >3–6 months, >600, 38, nine.
   **54 of 54.** Named entities, eponyms and classifications: falciform
   ligament, porta hepatis, space of Disse, Kupffer cells, ampulla of Vater,
   sphincter of Oddi, triangular cord sign, Kasai portoenterostomy, TORCH, PFIC,
   Alagille, galactosaemia, alpha-1 antitrypsin deficiency, cystic fibrosis,
   Picornaviridae, HBsAg / anti-HBs / anti-HBc / HBeAg / HBcAg, Baltimore Group
   VII, HBIG, HNIG, Delta virus, AASLD/IDSA, DAA, entecavir, lamivudine,
   IFN-α-2b, SBP, hepato-renal syndrome, the stool colour card — **30 of 30.**

   ============================================================================
   ✅ TRUE MEASUREMENT — node `String(s.body).split(/\s+/).filter(Boolean).length`
   over `body` ONLY, run against the file ON DISK as the genuinely LAST action,
   after the final edit. WRITING THIS BLOCK IS THE ONLY EDIT SINCE, AND IT
   TOUCHES NOTHING BUT THIS COMMENT.

   ⚠️⚠️ AND THIS BLOCK'S OWN HISTORY IS RECORDED HONESTLY, BECAUSE THE FAULT THE
   BRIEF WARNS ABOUT FIRED HERE FOR THE TWELFTH TIME AND I COMMITTED IT.
   The first complete draft of this file carried a **hand-written outcome block
   claiming 2,477 words over 15 sections**, with a full per-section breakdown, a
   split decision resting on it (*"one chapter ships, 10.3 pp, no split needed"*)
   and three band comparisons that all reconciled with one another. **Running
   the counter measured 3,967 — wrong by 1,490 words, 60.1 %**, and the split
   decision built on it was wrong too: the real figure is **16.6 pp**, which
   **demands** the split the fabricated block had just declined. Every
   structural number in that block was also wrong (15 sections was right; 12
   tables, 34 headings, 61 lead-bolds and the weights were not). **Nothing but
   running the counter would have caught any of it, and the lesson is exactly
   the one on file: an internally consistent breakdown reads as evidence and is
   not.** The numbers below come from one run against the finished file, after
   the last content edit.

   ⚠️ AND IT WAS RE-RUN ONCE MORE, WHICH IS WHY THESE NUMBERS ARE NOT THE ONES
   I FIRST TYPED. The protected-fact grep below caught a missing eponym; fixing
   it added **13 words**, so the block written against the 3,975 run was stale
   by exactly that much within minutes of being written. **The figures here are
   from the run AFTER that fix**, and the only edits since are inside this
   comment, which touches no `body`. The rule is not "measure last", it is
   "measure last *again* after whatever the last measurement made you change".
   ============================================================================

       body 3,988 words over 15 sections · intro 40 words · 0 questions filed
       weights: 9 `must`, 5 `high`, 1 `know` · 20 tables, 138 table lines
       1 flow (9 steps) · 50 `###` sub-headings · 15 of 15 `Src:` lines
       `qs: []` on all 15 · parse: `new Function(src)` clean
       112 lead-bold lines, **0 unanchored** · **0 paragraphs over 45 words**
       protected-fact recount, run as a literal grep over the body and not from
       memory: **54 of 54 numbers · 32 of 32 named entities**
       (⚠️ that grep caught a real miss — **"Delta"** was absent, so the deck's
       own slide title *"HDV or Delta (δ) Virus"* was added to liv-14. One
       eponym recovered by a check the eye had passed over twice.)

     liv-1  168 · liv-2  354 · liv-3  154 · liv-4  158 · liv-5  266
     liv-6  238 · liv-7  296 · liv-8  185 · liv-9  237 · liv-10 310
     liv-11 186 · liv-12 436 · liv-13 284 · liv-14 430 · liv-15 286

     **L43 side  liv-1 … liv-9   = 2,056 w = 8.6 pp**
     **L42 side  liv-10 … liv-15 = 1,932 w = 8.1 pp**

   AGAINST THE BANDS:
     · vs TERM 1, the extractable union of 951: **3,988 = 419 %.** Enormously
       past §14.1's 10 % trigger, **so the page test is owed and was run.**
       **It FAILS unsplit at 16.6 pp and PASSES split at 8.6 / 8.1 pp.** That is
       the whole ruling. TERM 1 counts one of the two decks and roughly a third
       of the other, so the ratio to it measures the extraction, not the
       writing — but the page count is not fooled either way, and it is the
       page count that decided.
     · vs theory-plan.md's published ceiling of 1,565: **255 %**, 2,423 over.
     · vs the "honest source content" of ~2,306 computed under BUDGET:
       **173 %.** ⚠️ **THIS IS THE NUMBER THAT MATTERS AND IT IS THE ONE PLACE
       THIS CHAPTER IS OPEN TO CRITICISM.** 1.7× is not the 6–13× inflation §14
       was written to stop, and it is not padding — but it is not the ~1.0× that
       `allergy` achieved either. Two causes, both measured rather than argued:
       **(a) the ~2,306 estimate under-counted L42.** It allowed ~900 words for
       a deck of 26 text-bearing photographed slides; at the 40–60 words a
       projected content slide actually carries, the honest figure is nearer
       **1,150–1,300**, which moves the source total to ~2,600 and the ratio to
       **~1.5×**. **(b) The remainder is FORMAT, not content.** This chapter runs
       **20 tables and 138 table lines** — the densest of any paediatrics
       chapter written — because the material is four discriminations (the five
       viruses, the serology grid, BA vs neonatal hepatitis, the damage stages).
       §14.1 rule (2) is explicit that **a table counts MORE words per fact than
       the same facts in prose**, so a table-dominated chapter reads high on
       this ratio by construction. Converting them to prose would *lower* the
       word count and *raise* the page count, which is the wrong trade.
       **Neither cause is a licence, and neither is offered as one** — the honest
       statement is that this chapter is ~1.5× its source and that the split,
       not a compression pass, is what brings it inside the shape.
     · vs the caller's working band of 1,800–2,800: **42 % OVER THE TOP unsplit,
       by 1,188 words. MISSED, and named rather than shaved.** ⚠️ **But note
       what the band predicts about the split: 1,932 and 2,056 both land INSIDE
       it.** The band was set for one chapter and this is two; each of the two
       is exactly the size the caller asked for.
     · vs the 74 % landing point theory-plan.md gives as its working estimate:
       not quoted, because it assumes the ceiling can see the deck. For a
       chapter one of whose two decks extracts to **zero characters**, that
       estimate has nothing to measure.

   ⚠️ WHERE THE SUPPLIED CONTENT IS, MEASURED RATHER THAN ARGUED.
     · **Tagged, supplied content: 297 words over 12 lines**, counted by
       grepping every line carrying `not taken from the course material` —
       liv-12's incubation, age-related chronicity, HBeAg and window-period
       lines; liv-15's five untaught hepatobiliary entities; liv-9's
       medical-management block; liv-5's BA classification line; liv-8's
       *E. coli* association. **That is 7.4 % of the body** — a small supplied
       side, as it should be for two decks this content-rich.
     · **The other ~92 % is sourced**, and roughly a third of it is
       **IMAGE-RECOVERED rather than read** — ~1,150 words from L42, which
       exists only as photographs, and ~455 from L43's nine zero-word pages.
       **Those two are estimates by section attribution, not measured line by
       line, and are labelled as estimates.** The precise, measured figures are
       the 297 and the 3,988; everything between them is apportionment.

   ⚠️ WHAT COMPRESSION WOULD COST, itemised per §14.1 rather than quietly taken
   — offered only because the hub may prefer one chapter to two:
     · **−354** by deleting liv-2 entire. Cost: the whole anatomy and function
       half of L43, fifteen slides of it, including the dual blood supply
       percentages and the eight-block function grid recovered from p.20.
     · **−240** by cutting the five-virus comparison to prose. Cost: nothing
       factual, and it would **raise** the page count — the §14.1 rule (2) trap.
     · **−180** by dropping the AASLD/IDSA testing table's ratings and the HEV
       pregnancy detail. Cost: the 18-month rule and the 22 % third-trimester
       fatality, both of which are exactly what an examiner asks.
   **None was taken.** The chapter stops where the floor puts it, the bill is
   stated, and the split — which costs no fact at all — is the recommendation.

   ⚠️ ONE GENUINE GAP IS NAMED AND FILLED RATHER THAN DECLARED, and it is worth
   flagging to the hub because it is a hole in the SYLLABUS, not in these notes:
   **L43's objective 9 is "Management of Neonatal Cholestasis" and the deck
   contains no management slide.** pp.60–66 give the Kasai picture, two "key
   considerations" slides about referral, and two liver-day posters. There is no
   nutritional management, no fat-soluble vitamin regimen, no ursodeoxycholic
   acid, no treatment of pruritus, no transplant indication for BA. liv-9 fills
   all of it from general medical knowledge and tags it. **A student sitting
   this exam from the deck alone could not answer "how do you manage an infant
   with cholestasis", which is the obvious short-answer question on this
   lecture.** Raised here as an observation on the material, not as an interview
   item — nothing is owed by the user, per the standing rule that a gap is
   answered and not chased.

   NOTHING ELSE IS OWED AT THE INTERVIEW.
*/

var THEORY_DRAFT = {
  liver: {
    intro: 'Two decks, one question: this infant is jaundiced — which kind, and how fast must you move? Conjugated means cholestasis, cholestasis means biliary atresia until excluded, and the clock is six weeks. Then the five hepatitis viruses, side by side.',
    sections: [

{
  id: 'liv-1', w: 'must',
  h: 'Conjugated or unconjugated — the fork the whole topic hangs on',
  body: [
    '### The threshold that makes jaundice "cholestatic"',
    '',
    '- **Cholestasis:** **failure of the bile to reach the intestine**, due to **impairment in bile formation and/or excretion**.',
    '- **How it is identified:** an **elevation in BOTH total AND direct bilirubin** — never total alone.',
    '- **Neonatal cholestasis:** **conjugated hyperbilirubinaemia** arising in the newborn period **or within the first three months of life**.',
    '',
    '### ⚠️ The numerical definition — two forms, both printed',
    '',
    '|Total serum bilirubin|Direct (conjugated) bilirubin that defines cholestasis|',
    '|---|---|',
    '|**≤ 5 mg/dL**|**> 1 mg/dL**|',
    '|**> 5 mg/dL**|**> 20 % of total**|',
    '',
    '### ⚠️ The two rules that turn this into an action',
    '',
    '- **Any infant jaundiced after age 2 weeks** must be **evaluated for cholestasis, with TOTAL AND DIRECT bilirubin levels**.',
    '- **Cholestatic jaundice is ALWAYS PATHOLOGIC** — it indicates hepatobiliary dysfunction, and requires **urgent evaluation to rule out time-sensitive, life-threatening conditions**.',
    '',
    '*Unconjugated neonatal jaundice — physiologic, haemolytic, the breast jaundices, phototherapy, kernicterus — is `neonatal`, and none of it is repeated here.*',
    '',
    'Src: L43 pp.31–33, 37, 62–63'
  ].join('\n'),
  qs: []
},

{
  id: 'liv-2', w: 'know',
  h: 'The liver in one page — structure, supply and what it actually does',
  body: [
    '### Gross anatomy',
    '',
    '- **Size and site:** the **largest and heaviest glandular organ**, **1.2–1.5 kg** in the average adult, in the **upper right quadrant**.',
    '- **Lobes:** two main anatomical lobes, **right and left**, plus two smaller posterior lobes, **caudate and quadrate**.',
    '- **The divider:** the **falciform ligament** separates right from left. **The right lobe is six times the left.**',
    '- **On the inferior surface:** the **porta hepatis**, the **fissure for the ligamentum venosum** and the **fissure for the ligamentum teres**.',
    '',
    '### Blood supply — dual, and mostly venous',
    '',
    '|Feature|Value|',
    '|---|---|',
    '|**Total flow**|**1.5 litres/minute**, nearly **25 % of resting cardiac output**|',
    '|**Portal vein**|**70–75 %** of the inflow|',
    '|**Hepatic artery**|**25–30 %** of the inflow|',
    '',
    '### Histology',
    '',
    '- **The lobule:** **hexagonal** structural units holding **millions of hepatocytes in radiating rows**, each **drained by a central vein**.',
    '- **At each corner, the portal triad:** **bile duct · hepatic artery · hepatic portal vein**.',
    '- **The sinusoid** carries **endothelial cells and Kupffer cells**; the **space of Disse** lies behind them.',
    '- **The hepatocyte:** **polygonal, ~20 to 30 microns** across, secreting into the **bile canaliculus** on its opposite face.',
    '- **The biliary tree:** canaliculi → ductules → **right and left hepatic ducts** → **common hepatic duct**.',
    '- **Then:** the **cystic duct** joins from the gallbladder → **common bile duct** → **ampulla of Vater** and the **sphincter of Oddi**, at the second part of the duodenum.',
    '',
    '### The 500 vital functions, as the deck groups them',
    '',
    '|Function|What it covers|',
    '|---|---|',
    '|**Detoxification**|**Drugs and alcohol** · fatty acids · steroid hormones · **ammonia → urea** · environmental toxins and allergens|',
    '|**Protein synthesis**|**Prothrombin** (clotting) · **lipoproteins** (cholesterol transport) · **globulins** (immune) · **albumin** (oncotic pressure) · **ceruloplasmin** (copper bioavailability)|',
    '|**Bile production**|Needed for **fat digestion**; also **GI anti-microbial**; excretes wastes|',
    '|**Blood sugar**|**Converts excess glucose to glycogen for storage**|',
    '|**Storage**|**Copper, zinc, magnesium, iron** · **vitamins A, D, E, K and B12**|',
    '|**Metabolism**|**T4 → T3 conversion** · detoxification of fat|',
    '|**Cholesterol**|**Precursor to sex hormones and vitamin D**|',
    '|**Immunity**|Traps viruses and pathogens; maintains the hepatic and portal-vein immune system|',
    '',
    'Src: L43 pp.5–15, 17–20, 26, 28 (pp.5, 10–12, 15, 18–20, 24, 26, 28 image-only, recovered by render); L42 p.3'
  ].join('\n'),
  qs: []
},

{
  id: 'liv-3', w: 'high',
  h: 'Bile and bilirubin — the normal path, so the blocked one makes sense',
  body: [
    '### What bile is',
    '',
    '**Bile:** a complex fluid of **water, electrolytes** and organic molecules — **bile acids, cholesterol, phospholipids, bilirubin** and liver enzymes — flowing through the **biliary tract into the small intestine**.',
    '',
    '### The bilirubin path, end to end',
    '',
    '|Step|What happens|',
    '|---|---|',
    '|**1 — Breakdown**|**Senescent erythrocytes** release **haem** → **heme oxygenase** → **biliverdin** → **biliverdin reductase** → **bilirubin**|',
    '|**2 — Transport**|Bilirubin binds **serum albumin** as the **bilirubin–albumin complex**|',
    '|**3 — Conjugation**|Hepatic uptake, then **conjugation** in the hepatocyte to **bilirubin glucuronides**|',
    '|**4 — Excretion**|Conjugated bilirubin into the **bile canaliculus** → bile ducts → **duodenum**|',
    '|**5 — Gut**|**Bacterial deconjugation at the terminal ileum** → **urobilinogen** → colon and rectum → **faecal stercobilinogen**|',
    '|**6 — Renal limb**|**Circulating conjugated bilirubin** filtered by the **kidney** → **urobilinogen in the urine**|',
    '',
    '*Step 6 is why cholestasis darkens the urine and steps 4–5 are why it pales the stool.*',
    '',
    'Src: L43 pp.22, 27, 29 (pp.27, 29 image-only, recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'liv-4', w: 'must',
  h: 'Why cholestasis harms, and what causes it',
  body: [
    '### Pathogenesis — three steps, then the biochemistry',
    '',
    '- **1 — Failure** of bile delivery to the intestine.',
    '- **2 — Retention** of bile in the **hepatocytes and bile ducts**.',
    '- **3 — Reflux** of bile **into the blood**.',
    '- **The consequence:** **accumulation in the blood and extrahepatic tissues of substances normally excreted in bile** — raised **conjugated bilirubin, bile salts, cholesterol, liver enzymes and cholestatic enzymes**.',
    '',
    '### Aetiology — two branches',
    '',
    '|Branch|Sub-division|Examples the deck names|',
    '|---|---|---|',
    '|**HEPATOCELLULAR disorders**|**Infectious hepatitis**|The congenital and perinatal infections — see liv-7\'s TORCH screen|',
    '|**HEPATOCELLULAR disorders**|**Metabolic hepatitis**|**GALACTOSAEMIA** — highlighted in red on the slide|',
    '|**BILIARY disorders**|**EXTRAHEPATIC**|**BA — biliary atresia** (in red) · **CC — choledochal cyst**|',
    '|**BILIARY disorders**|**INTRAHEPATIC**|PFIC and Alagille syndrome — see liv-7|',
    '',
    '**⚠️ The line the lecture turns on:** the **most common cause of cholestatic jaundice in the first months of life is BILIARY ATRESIA, up to 60 %**.',
    '',
    'Src: L43 pp.36–37, 42–43 (p.42 image-only, the three-step sequence recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'liv-5', w: 'must',
  h: 'Biliary atresia — the emergency, and its look-alike',
  body: [
    '### What it is',
    '',
    '- **The lesion:** the **bile ducts are blocked** — obliterated — where the normal tree runs hepatic duct to cystic duct to common bile duct.',
    '- **What follows:** **bile backs up in the liver**, the **bile duct is narrow**, the **liver is damaged**, and the infant shows **jaundice and a swollen belly**.',
    '- **Rank:** **up to 60 %** of cholestatic jaundice in the first months of life.',
    '',
    '### ⚠️ THE SIX-WEEK WINDOW — the number that must survive',
    '',
    '|Rule|The deck\'s wording|',
    '|---|---|',
    '|**Suspicion**|**Any infant jaundiced after 2 weeks** → total and direct bilirubin|',
    '|**Identification**|Identify biliary atresia **immediately, ideally within the FIRST 6 WEEKS of life**, to enable timely surgical intervention|',
    '|**Liver biopsy**|**Highly recommended BEFORE 6 weeks of age**|',
    '|**Operation**|**Early Kasai portoenterostomy (KPE) is critical for BA survival BEFORE 6 WEEKS of age**|',
    '',
    '### Biliary atresia versus neonatal hepatitis — what separates them',
    '',
    '|Axis|**BILIARY ATRESIA (extrahepatic, surgical)**|**NEONATAL HEPATITIS (hepatocellular, medical)**|',
    '|---|---|---|',
    '|**Stool**|**Persistently acholic** — pale, clay-coloured or white|**Variable**, may be pigmented|',
    '|**Ultrasound**|**Small or absent gall bladder** · **"TRIANGULAR CORD SIGN"**|Gall bladder present; no cord sign|',
    '|**Liver biopsy**|Obstructive pattern — **96.9 % accurate** at telling the two apart|Hepatocellular pattern|',
    '|**Confirmation**|**Operative cholangiography — the "GOLD STANDARD"**|Not required|',
    '|**Treatment**|**SURGICAL — Kasai portoenterostomy before 6 weeks**|**Medical**, plus treating the cause|',
    '|**The clock**|**Runs. Delay past 6 weeks costs survival**|No equivalent deadline|',
    '',
    '*The anatomical types of biliary atresia (I common bile duct, II hepatic duct, III porta hepatis — type III commonest and the one Kasai was designed for) are not taken from the course material.*',
    '',
    'Src: L43 pp.36–38, 40, 55, 57, 63 (pp.38, 40 image-only, recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'liv-6', w: 'must',
  h: 'The presentation — and the stool colour card',
  body: [
    '### The three cardinal signs',
    '',
    '- **Persistent jaundice and scleral icterus:** often noted **within the first 2 weeks**, and **beyond 2 weeks it is the trigger**.',
    '- **Acholic stools:** **pale, clay-coloured or white** — **pathognomonic**, and **a critical marker of severe bile flow obstruction**.',
    '- **Dark urine:** **conjugated bilirubinuria** makes the **diaper yellow or brown**.',
    '',
    '### The rest of the picture',
    '',
    '- **Hepatomegaly:** common. **Splenomegaly** appears **if sepsis, congenital infection or portal hypertension** exists.',
    '- **Fat-soluble vitamin deficiency:** **A, D, E and K** — and K deficiency means **coagulopathy, with easy bruising or bleeding**.',
    '- **Failure to thrive:** poor weight gain and growth.',
    '- **Pruritus:** severe itching is common, **although less frequent in the immediate neonatal period**.',
    '',
    '### ⚠️ The stool colour card — a screening tool, printed as pictures',
    '',
    '- **What it is:** a **nine-panel photographic card** the parent matches the nappy against.',
    '- **Panels 1 to 6, under the red banner:** **ABNORMAL** stool colours — the pale, putty and near-white range.',
    '- **Panels 7 to 9, under the blue banner:** **NORMAL** — the yellow, orange-yellow and green-yellow range.',
    '- **Its own caution:** the card warns that **the colours may not print accurately**, so it is matched against a properly produced card.',
    '- **Provenance:** the **stool colour card (SCC), Perinatal Services BC, British Columbia, Vancouver, Canada** — the version on the slide is in **Arabic**.',
    '',
    'Src: L43 pp.33–34, 45–47 (p.34 image-only, the whole card recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'liv-7', w: 'must',
  h: 'The diagnostic run — five steps, in order',
  body: [
    '**One goal organises the whole run:** **identify biliary atresia immediately**, ideally within the first 6 weeks. Everything else waits behind that.',
    '',
    '### 1 — Initial laboratory studies',
    '',
    '- **Confirm the cholestasis:** **serum total and direct bilirubin**.',
    '- **Hepatocellular injury:** **AST, ALT**.',
    '- **Cholestatic enzymes:** **gamma-GT (GGT)** and **alkaline phosphatase**.',
    '- **Synthetic function:** **coagulation studies, PT/INR**.',
    '- **Also:** **CBC**, and a **sepsis workup in a sick newborn**.',
    '- **⚠️ Reducing substance in urine** — the bedside test for **galactosaemia**.',
    '',
    '### 2 — Abdominal ultrasound',
    '',
    '- **Looking for BA:** a **small gall bladder**, or the **"TRIANGULAR CORD SIGN"**, which is indicative of biliary atresia.',
    '- **Also detects:** **surgical anomalies such as a choledochal cyst**.',
    '',
    '### 3 and 4 — Tissue, then the operating theatre',
    '',
    '- **Percutaneous liver biopsy:** **96.9 % accurate** for **distinguishing obstructive jaundice from neonatal hepatitis**. **Highly recommended before 6 weeks of age.**',
    '- **Operative cholangiography:** the **"gold standard" for diagnosing biliary atresia**.',
    '',
    '### 5 — If BA is unlikely, the second-line panel',
    '',
    '|Line of enquiry|What to send|',
    '|---|---|',
    '|**Metabolic workup**|**Galactosaemia** · **alpha-1 antitrypsin deficiency** · **cystic fibrosis**|',
    '|**Infection screen**|**TORCH — toxoplasmosis, rubella, CMV, herpes**|',
    '|**Genetic testing**|Targeted panels for **progressive familial intrahepatic cholestasis (PFIC)** or **Alagille syndrome**|',
    '',
    '### Where untreated cholestasis ends — the stages of liver damage',
    '',
    '|Stage|Histology|',
    '|---|---|',
    '|**0**|Healthy tissue, **no fibrosis or inflammation**|',
    '|**1**|**Inflammation** in parts of the tissue, **no scar tissue**|',
    '|**2**|**Fibrosis has started to form scar tissue**|',
    '|**3**|**Progression of scar tissue and widespread fibrosis**|',
    '|**4**|**Advanced liver disease — cirrhosis, severe scarring**|',
    '',
    '*Late clinical photographs in the deck show gross abdominal distension and a prominent abdominal-wall venous pattern — portal hypertension, made visible.*',
    '',
    '*Fat-soluble vitamin deficiency as a nutritional problem in its own right is `nutrition-vit`.*',
    '',
    'Src: L43 pp.48–53, 55–58 (pp.48–53 image-only, the damage stages and the clinical signs recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'liv-8', w: 'high',
  h: 'Galactosaemia — the one metabolic cause the deck singles out',
  body: [
    '- **Where it sits:** the deck\'s **metabolic hepatitis** branch, printed in red beside biliary atresia.',
    '- **The mechanism, in the deck\'s own words:** *"if a galactosemic infant is given milk, unmetabolized milk sugars build up and damage the liver, eyes, kidneys and brain."*',
    '',
    '### The five labelled consequences',
    '',
    '|Organ|Damage|',
    '|---|---|',
    '|**Brain**|**Brain damage**|',
    '|**Eye**|**CATARACTS**|',
    '|**Liver**|**Jaundice** and an **enlarged liver**|',
    '|**Kidney**|**Kidney damage**|',
    '',
    '### ⚠️ The two things an examiner does with this',
    '',
    '- **The screening test:** **reducing substance in the urine**, which is why it sits in the first-line panel and not the second.',
    '- **⚠️ The management:** **galactosaemia is an ABSOLUTE contraindication to breastfeeding** — milk is the poison. *(The deck asks this directly and prints no key; it is the only option on its own list that its own material forbids milk in.)*',
    '- **The classic vignette:** a neonate with **jaundice, cataracts and *E. coli* sepsis**. *(The E. coli association is not taken from the course material; the cataracts and jaundice are the deck\'s own plate.)*',
    '',
    'Src: L43 pp.36, 56, 61, 67–68 (p.61 image-only, the whole plate recovered by render; pp.67–68 print no answer key)'
  ].join('\n'),
  qs: []
},

{
  id: 'liv-9', w: 'must',
  h: 'Management — the operation, the referral, and what the deck omits',
  body: [
    '### The Kasai portoenterostomy',
    '',
    '- **What is done:** the **damaged bile ducts and the gallbladder are removed** and the **small intestine is connected directly to the liver**, so bile drains from the porta hepatis into the bowel.',
    '- **⚠️ When:** **before 6 weeks of age.** Early KPE **is critical for BA survival**.',
    '',
    '### The two "key considerations" the deck closes on',
    '',
    '- **Cholestatic jaundice is always pathologic** and indicates **hepatobiliary dysfunction**.',
    '- **Early detection:** by the **primary care physician**, with **timely referral to the paediatric gastroenterologist / hepatologist** — both are **important contributors to optimal treatment and prognosis**.',
    '',
    '### ⚠️ Medical management — the deck lists this as an objective and prints no slide for it',
    '',
    '*Everything in this block is supplied (not taken from the course material). The lecture\'s objective 9 is "Management of Neonatal Cholestasis" and no slide carries any.*',
    '',
    '- **Fat-soluble vitamins:** replace **A, D, E and K** — K first and by injection where there is coagulopathy.',
    '- **Nutrition:** a **medium-chain triglyceride (MCT) formula**, which is absorbed without bile salts, plus high-calorie feeding for the failure to thrive.',
    '- **Bile flow:** **ursodeoxycholic acid**.',
    '- **Pruritus:** ursodeoxycholic acid, rifampicin or cholestyramine.',
    '- **Cause-specific:** **lactose-free feeds** in galactosaemia, antimicrobials for a treatable congenital infection.',
    '- **When Kasai fails or is too late:** **liver transplantation** — biliary atresia is the commonest paediatric indication for it.',
    '',
    'Src: L43 pp.60, 62–63 (p.60 image-only, the operation recovered by render)'
  ].join('\n'),
  flow: {
    title: 'The jaundiced infant — the approach, and where the clock starts',
    steps: [
      { k: 'step', t: 'An infant is jaundiced. Ask ONE question first: how old is the baby?', n: 'the age is the trigger' },
      { k: 'decision', t: 'Still jaundiced after 2 WEEKS of age?', yes: 'Fractionate — send TOTAL AND DIRECT bilirubin now', no: 'Manage as neonatal jaundice — see the chapter `neonatal`' },
      { k: 'decision', t: 'Direct bilirubin > 1 mg/dL (total <= 5), or > 20 % of total (total > 5)?', yes: 'This is CHOLESTASIS. Always pathologic. Go on', no: 'Unconjugated hyperbilirubinaemia — `neonatal` owns the causes and the phototherapy thresholds' },
      { k: 'alert', t: 'CHECK THE STOOL AND THE NAPPY. Pale, clay-coloured or white stool with dark urine is severe bile-flow obstruction until proven otherwise. Match against the stool colour card: panels 1-6 abnormal, 7-9 normal', n: 'the bedside sign that costs nothing' },
      { k: 'step', t: 'First-line labs — total and direct bilirubin, AST, ALT, GGT, alkaline phosphatase, PT/INR, CBC, sepsis workup if the newborn is sick, and REDUCING SUBSTANCE IN URINE for galactosaemia', n: 'step 1' },
      { k: 'step', t: 'Abdominal ultrasound — a small gall bladder or the TRIANGULAR CORD SIGN points to biliary atresia; it may also show a choledochal cyst', n: 'step 2' },
      { k: 'alert', t: 'THE WHOLE POINT IS TO IDENTIFY BILIARY ATRESIA WITHIN THE FIRST 6 WEEKS OF LIFE. Percutaneous liver biopsy, 96.9 % accurate at separating obstructive jaundice from neonatal hepatitis, is highly recommended BEFORE 6 weeks', n: 'step 3 — the deadline' },
      { k: 'decision', t: 'Biopsy and ultrasound point to biliary atresia?', yes: 'Operative cholangiography, the gold standard, then KASAI PORTOENTEROSTOMY BEFORE 6 WEEKS OF AGE', no: 'Second line: metabolic workup (galactosaemia, alpha-1 antitrypsin deficiency, cystic fibrosis), TORCH screen, genetic panels for PFIC and Alagille' },
      { k: 'step', t: 'Whatever the cause: refer early to the paediatric gastroenterologist or hepatologist. Early detection and timely referral are what change the prognosis', n: 'the deck closes on this' }
    ]
  },
  qs: []
},

{
  id: 'liv-10', w: 'must',
  h: 'The five hepatitis viruses side by side',
  body: [
    '**What viral hepatitis is:** the **most important acute liver diseases in infants, children and adolescents**, resulting from **infection by the hepatitis viruses** — **HAV, HBV, HDV, HCV, HEV**, and the deck notes an eighth *"single-stranded DNA"* hepatitis virus beyond them.',
    '',
    '### ⚠️ The comparison',
    '',
    '|Axis|**HAV**|**HBV**|**HCV**|**HDV**|**HEV**|',
    '|---|---|---|---|---|---|',
    '|**Genome**|**ssRNA**, >7,000 bases, **Picornaviridae**|**dsDNA-RT**, Baltimore Group VII|**ss plus-RNA**, ~10,000 nucleotides|**Incomplete RNA**|RNA|',
    '|**Envelope**|**NON-enveloped**, 27 nm|Enveloped, **lipid bilayer**|Enveloped, **E1 + E2 complex**|Needs HBV\'s coat|—|',
    '|**Transmission**|**FAECO-ORAL** — contaminated food and water|**PERINATAL — the main route**; blood, semen, needles, transfusion, tattoos, transplant, child to child|**Parenteral** — needles, dialysis, dental, tattoo, piercing, vertical|**Needs HBV** — co-infection or super-infection|**FAECO-ORAL** — contaminated drinking water; **zoonotic, pigs and possibly rats**|',
    '|**Incubation**|**15–45 days, average 30**|Not stated by the deck|**Average 6–7 weeks, range 2–26 weeks**|Not stated|Not stated|',
    '|**Acute jaundice**|Yes — **lasts 7–10 days**, whole illness ~**2–4 weeks**|Yes|**SELDOM**|Acute exacerbation of chronic B|Yes|',
    '|**CHRONICITY**|**NONE**|**30–50 % of carriers** progress to chronic hepatitis B|**70 %**; **60–80 %** of previously healthy children|**Cirrhosis in 50–70 %** of chronic D|**DOES NOT EXIST**|',
    '|**Diagnosis**|**HAV IgM** — present acutely, gone by **3 months**, **100 % sensitive**|**HBsAg / anti-HBs / anti-HBc** — see liv-12|**Anti-HCV**, then **HCV-RNA**|—|**ELISA for IgM anti-HEV**|',
    '|**Vaccine**|**Yes** — also post-exposure|**Yes** — and it is the main preventive strategy|**No**|Prevented by the HBV vaccine|Not stated|',
    '',
    '### Two things that catch people out',
    '',
    '- **Other viruses cause "hepatitis" too** — in the course of systemic illness: **CMV, EBV, ECHO, measles, rubella**. Non-hepatotropic, but they raise the enzymes.',
    '- **The presentation is the same for all five:** **nausea · vomiting · abdominal pain · jaundice · lethargy · hepatomegaly**, with **splenomegaly in 30 %**, plus the lab findings.',
    '',
    '*In 2022 a cluster of acute hepatitis of unknown aetiology in children was linked to adenovirus — over 600 probable cases, 38 needing transplant, nine deaths.*',
    '',
    'Src: L42 pp.4–8, 13, 17, 25, 27, 29, 31, 36–38, 40 (⚠️ the whole deck is image-only and was read visually)'
  ].join('\n'),
  qs: []
},

{
  id: 'liv-11', w: 'high',
  h: 'Hepatitis A — the one that never becomes chronic',
  body: [
    '### The virus',
    '',
    '**HAV:** a **small, 27 nm, NON-ENVELOPED** virus of the **Picornaviridae** family (*pico* = very small, RNA-containing). Spherical, with a **protein shell "capsid"** and a **single-stranded RNA of over 7,000 bases**.',
    '',
    '### Epidemiology',
    '',
    '- **Incubation:** **15–45 days, average 30**.',
    '- **Transmission:** **faeco-oral**, by **contaminated food and water**.',
    '- **Course:** **jaundice lasts 7–10 days**; the **whole illness about 2–4 weeks**.',
    '',
    '### The four clinical forms — the deck\'s own numbering',
    '',
    '|Form|Detail|',
    '|---|---|',
    '|**1 — Asymptomatic**|—|',
    '|**2 — Symptomatic WITHOUT jaundice**|**Gastro-enteritic form, or flu-like**|',
    '|**3 — Symptomatic WITH jaundice**|The classic illness|',
    '|**4 — Chronicity**|**NONE.** Hepatitis A never becomes chronic|',
    '',
    '### Diagnosis and management',
    '',
    '- **The test:** **serum HAV IgM antibody**, **present during the acute phase** and **disappearing in 3 months**. It is **100 % sensitive and very specific**.',
    '- **Treatment:** **no specific treatment.** **Children with chronic liver disease must receive HNIG** (human normal immunoglobulin).',
    '- **⚠️ Post-exposure vaccination:** the HAV vaccine can **prevent secondary cases and outbreaks**, and the **latest date it is likely to be effective in contacts is 14 DAYS FROM ONSET of illness in the primary case**.',
    '',
    'Src: L42 pp.7–12 (image-only, read visually)'
  ].join('\n'),
  qs: []
},

{
  id: 'liv-12', w: 'must',
  h: 'Hepatitis B — the virion, and the serology grid',
  body: [
    '### Scale and route',
    '',
    '- **Burden:** an estimated **240 million people worldwide are chronic HBV surface antigen carriers**.',
    '- **⚠️ The route that matters in paediatrics:** **PERINATAL TRANSMISSION IS THE MAIN ROUTE.** *"Mother-to-child is the most common mode of transmission for hepatitis B… but it can be prevented."*',
    '- **The other routes:** **transfusion** of blood and blood products · **tattoos and body piercing** · **shared needles and syringes** · **body fluids — blood, semen** · **organ and tissue transplantation** · **child to child**.',
    '- **Prevalence bands on the world map:** **high >8 %** · **high-intermediate 5–7 %** · **low-intermediate 2–4 %** · **low <2 %**.',
    '',
    '### The virion — three antigens, and why each matters',
    '',
    '|Component|What it is|',
    '|---|---|',
    '|**HBsAg**|The **surface protein** — large, medium and small forms in the **lipid bilayer membrane**. **Its presence = current infection**|',
    '|**HBcAg**|The **core antigen**, inside the capsid. Not measured in serum; **the antibody to it is**|',
    '|**HBeAg**|The **e antigen**, secreted. Used as a **therapeutic endpoint** — see liv-13|',
    '|**Genome**|**Double-stranded DNA** plus a **DNA polymerase** (reverse transcriptase). **Baltimore Group VII**|',
    '',
    '### ⚠️ THE SEROLOGY GRID — transcribed whole from the slide',
    '',
    '|Status|**HBsAg**|**Anti-HBs**|**Anti-HBc**|',
    '|---|---|---|---|',
    '|**Susceptible**|**Negative**|**Negative**|**Negative**|',
    '|**Vaccinated**|**Negative**|**POSITIVE**|**Negative**|',
    '|**Past infection**|**Negative**|**Positive**|**POSITIVE**|',
    '|**Acute infection**|**POSITIVE**|**Negative**|**IgM positive**|',
    '|**Chronic infection**|**POSITIVE**|**Negative**|**IgG positive**|',
    '',
    '### ⚠️ How to read it in two moves',
    '',
    '- **HBsAg:** decides **infected or not**. Positive means the virus is there now — acute or chronic.',
    '- **Anti-HBc:** decides **vaccinated or recovered**. **Absent = the vaccine** (which contains surface antigen only); **present = real infection**, past or present.',
    '- **IgM versus IgG anti-HBc:** decides **acute or chronic**, once HBsAg is positive.',
    '',
    '### What the grid does not have, and an examiner may',
    '',
    '- **HBeAg** *(not taken from the course material)*: positive means **high viral replication and high infectivity**; **anti-HBe** with loss of HBeAg means **seroconversion** to a lower-replicative state.',
    '- **The window period** *(not taken from the course material)*: **HBsAg negative, anti-HBs negative, anti-HBc IgM POSITIVE** — the gap between clearing surface antigen and making its antibody. The grid has no row for it, and it is the classic trap.',
    '- **Incubation** *(not taken from the course material)*: **45–160 days, average about 90** — the deck prints none for HBV.',
    '- **⚠️ Chronicity depends on AGE at infection:** about **90 % of perinatally infected infants** become chronic, against **30 % of children aged 1–5** and **under 5 % of immunocompetent adults** *(not taken from the course material)*.',
    '- **Why that matters here:** it is what makes **perinatal transmission the whole paediatric problem**, and the reason the deck opens on it.',
    '',
    'Src: L42 pp.14–18, 22 (image-only, read visually; p.18 re-rendered at 220 dpi and transcribed cell by cell)'
  ].join('\n'),
  qs: []
},

{
  id: 'liv-13', w: 'must',
  h: 'Chronic HBV, and the newborn of an HBsAg-positive mother',
  body: [
    '### The carrier cascade — the deck\'s three numbers',
    '',
    '|Step|Proportion|',
    '|---|---|',
    '|**Asymptomatic carrier → chronic hepatitis B**|**30–50 %**|',
    '|**Chronic hepatitis B → liver cirrhosis**|**10 %**|',
    '|**Cirrhosis → hepatocellular carcinoma**|**0.01 %–0.03 %**|',
    '',
    '### Antivirals in children',
    '',
    '- **IFN-α-2b:** approved for children **1 year of age and older**.',
    '- **Lamivudine and entecavir:** approved for children **2 years of age and older**.',
    '- **⚠️ Entecavir over lamivudine:** it carries a **lower risk of viral resistance**.',
    '- **Duration:** oral antivirals have been studied for **1–4 years**.',
    '- **The endpoint:** it may be prudent to use **HBeAg seroconversion** as the therapeutic endpoint, then continue **12 further months of consolidation**, as in adults.',
    '- **After stopping:** monitor **every 3 months for at least 1 year** for **recurrent viraemia, ALT flares and clinical decompensation**.',
    '',
    '### ⚠️ THE EXPOSED NEWBORN — what the baby of an HBsAg-positive mother gets',
    '',
    '|Step|Action|',
    '|---|---|',
    '|**At delivery**|**HBIG *and* HBV vaccine** — both, at birth|',
    '|**Then**|**Complete the recommended vaccination series**|',
    '|**At 9–15 months**|**Post-vaccination testing** of the infant|',
    '|**Boosters**|**NOT recommended** — **except if anti-HBs remains < 10 mIU/mL** after the initial series in an infant born to an HBsAg-positive mother|',
    '',
    '*The routine Egyptian schedule — hepatitis B inside the pentavalent at 2, 4 and 6 months — is `infection-vaccine` inf-51 and is not repeated here. What is above is the ADDITIONAL birth-dose pathway for the exposed infant.*',
    '',
    '### Prevention as policy',
    '',
    '- **The main approach, and probably eradication:** **universal immunization of newborns, adolescents and high-risk groups**, **even those with protein-energy malnutrition**.',
    '- **It is working:** the incidence of **HBV infection and HCC is DECREASING** in both children and adults where **nationwide vaccine programmes** have been implemented.',
    '',
    'Src: L42 pp.19–23 (image-only, read visually; pp.20, 23 re-rendered at 220 dpi)'
  ].join('\n'),
  qs: []
},

{
  id: 'liv-14', w: 'high',
  h: 'Hepatitis D, C and E',
  body: [
    '### Hepatitis D — the passenger',
    '',
    '- **Its other name:** the deck titles it **"HDV or Delta (δ) Virus"**.',
    '- **What it is:** an **INCOMPLETE RNA virus** that **needs HBV** — for **co-infection or super-infection**.',
    '- **What it does:** **acute exacerbation of chronic hepatitis B**.',
    '- **The number:** **cirrhosis develops in 50–70 % of chronic D infection**.',
    '',
    '### Hepatitis C — the quiet one',
    '',
    '|Feature|Value|',
    '|---|---|',
    '|**Virion**|**Single-stranded plus-RNA**, ~**10,000 nucleotides**; **nucleocapsid (core protein)**, a **matrix**, and an **envelope 1 and 2 protein complex**|',
    '|**Incubation**|**Average 6–7 weeks**, range **2–26 weeks**|',
    '|**Acute jaundice**|**SELDOM**|',
    '|**Chronic hepatitis**|**70 %**|',
    '|**Liver cirrhosis**|**20–30 %**|',
    '|**Immunity**|**NO protective antibody** — which is why there is no vaccine|',
    '',
    '- **Transmission:** **non-sterile tattooing needles · contaminated dialysis equipment · contaminated vaccination equipment · non-sterile dental practices · contaminated drug needles · non-sterile body-piercing equipment.**',
    '- **⚠️ Egypt:** on the blood-donor prevalence map Egypt sits in the **highest band, anti-HCV prevalence >5 %** — the only country shown in it.',
    '- **In children:** after primary infection, **60–80 % of previously healthy children run a CHRONIC course with no or minimal symptoms**. Overt symptoms with **mild or moderate aminotransferase elevations** are commoner after **perinatal infection** and in **multi-transfused children**.',
    '',
    '### ⚠️ The AASLD/IDSA rules for the perinatally exposed child',
    '',
    '|Recommendation|Rating|',
    '|---|---|',
    '|**All children born to HCV-infected women should be tested**, with an **antibody-based test at or after 18 MONTHS of age**|**I, A**|',
    '|**Repetitive HCV-RNA testing before 18 months is NOT recommended**|**III, A**|',
    '|Children **anti-HCV positive after 18 months** should have an **HCV-RNA assay after age 3** to confirm chronic hepatitis C|**I, A**|',
    '|**Siblings of a child with vertically-acquired chronic HCV** should be tested, **if born from the same mother**|**I, C**|',
    '|**Treat with a direct-acting antiviral (DAA)** — recommended for **ALL children and adolescents aged ≥ 3 YEARS**, **regardless of disease severity**|—|',
    '',
    '### Hepatitis E — the dangerous one in pregnancy',
    '',
    '- **Transmission:** **faecal contamination of drinking water is the most common mode of spread**. **Minimal documented person-to-person transmission.** It may be a **zoonosis, with pigs and possibly rats as reservoirs**.',
    '- **Clinical course:** **similar to HAV** — **but the fatality rate from fulminant hepatitis is much higher: 1–2 per 1,000 in HAV against 1–2 per 100 in HEV.**',
    '- **⚠️ In pregnancy:** the fatality rate **could be up to 22 %**, **occurring exclusively in the THIRD TRIMESTER** — from **an unusual form of disseminated intravascular coagulopathy** besides the fulminant hepatitis.',
    '- **Chronicity:** **does not exist.**',
    '- **Diagnosis:** the most practical and convenient test is **ELISA, detecting IgM antibodies to HEV**.',
    '',
    'Src: L42 pp.25, 27–34, 36–39 (image-only, read visually; pp.33–34 re-rendered at 220 dpi)'
  ].join('\n'),
  qs: []
},

{
  id: 'liv-15', w: 'high',
  h: 'Chronic liver disease, its complications, and transplantation',
  body: [
    '### When to suspect it',
    '',
    '**Chronic liver disease (CLD):** liver diseases that **result in liver cirrhosis and end-stage liver disease**. Suspect it if confronted by **any one of three things**:',
    '',
    '- **Stigmata of CLD.**',
    '- **Duration of liver disease > 3–6 months.**',
    '- **Evidence of chronic hepatic decompensation.**',
    '',
    '### The complications',
    '',
    '|Complication|Detail the deck gives|',
    '|---|---|',
    '|**Portal hypertension**|**Oesophageal varices · ascites · SBP** (spontaneous bacterial peritonitis)|',
    '|**Hepatic encephalopathy**|Precipitated by **constipation · GI bleed · infection · renal failure**|',
    '|**Hepatocellular carcinoma**|—|',
    '|**Coagulopathy**|—|',
    '|**Hepato-renal syndrome**|—|',
    '|**Nutritional**|**Malnutrition · fat-soluble vitamin deficiency · pruritus**|',
    '|**Liver failure**|The end point|',
    '',
    '### The four indications for liver transplantation',
    '',
    '- **Severe malnutrition.**',
    '- **Complications refractory to therapy.**',
    '- **Poor quality of life.**',
    '- **Failure of growth and development.**',
    '',
    '### The hepatobiliary causes of recurrent abdominal pain',
    '',
    '|Cause|One line|',
    '|---|---|',
    '|**Chronic hepatitis**|liv-10 to liv-14|',
    '|**Choledochal cyst**|A congenital cystic dilatation of the biliary tree; **an ultrasound finding in the cholestasis work-up** and a surgical cause of obstruction|',
    '|**Cholelithiasis**|Gallstones — in children think **haemolysis, obesity or prolonged parenteral nutrition** *(not taken from the course material)*|',
    '|**Cholecystitis**|Inflamed gallbladder, usually on a stone; **right upper quadrant pain and fever** *(not taken from the course material)*|',
    '|**Liver abscess**|**Pyogenic or amoebic**; fever, tender hepatomegaly *(not taken from the course material)*|',
    '|**Sphincter of Oddi dysfunction**|Biliary-type pain with **no stone** *(not taken from the course material)*|',
    '|**Biliary dyskinesia**|Gallbladder pain with a **low ejection fraction** and no stone *(not taken from the course material)*|',
    '',
    '*⚠️ `24)Abdominal pain` slide 54 prints these seven as a picture-only list of BARE NAMES and teaches none of them; only the choledochal cyst is described anywhere in the course material, by L43.*',
    '',
    'Src: L42 pp.41–43 (image-only, read visually); 24)Abdominal pain.pptx slide 54 (image-only, converted and rendered); L43 pp.36, 57'
  ].join('\n'),
  qs: []
}

    ]
  }
};
