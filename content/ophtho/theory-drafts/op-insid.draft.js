/* op-insid — "Insidious Visual Loss", Ophthalmology. Written 2026-08-17 under
   START-HERE.md §14 (§14.1 budget, §14.2 coverage floor, §14.3 style,
   §14.3a layout, §14.5 the deferral register) and
   content\ophtho\theory-plan.md. Shape copied from
   content\ophtho\theory-drafts\op-systemic.draft.js and
   content\ophtho\theory-drafts\op-trauma.draft.js.

   DECK LABELS USED IN THE Src LINES:
     L35,36 = L35,36) Chronic visual loss.txt
              — THIS CHAPTER'S ONLY COUNTED DECK.
     L1,2  = L1,2) Ocular Anatomy, Symptomatology & Basic Eye Examination.txt
                                                            — cited only
     L3,4  = L3,4) Clinical- Ocular examination.txt          — cited only
     L11   = L11) Glaucoma Diag, POAG.txt                    — cited only
     L12   = L12) Glaucoma 2 Cong, PACG, 2ry.txt             — cited only
     L17   = L17) Cataract I.txt                             — cited only
     L18   = L18) Cataract II.txt                            — cited only
     L19.1 = L19.1) Diabetic Retinopathy.txt                 — cited only
     L23   = L23) Ocular manifestations of systemic diseases.txt — cited only

   ✅ NO RENDER WAS DONE AND NONE WAS AUTHORISED. L35,36's text layer is
   sufficient — 1,519 cached words over 52 pages (31 w/pp), listed in
   `theory-plan.md`'s "text layer sufficient" table. The cache was used
   directly and no page of any PDF was opened.

   ============================================================================
   BUDGET — §14.1, budget = max(summed lecture words, 25 x linked questions),
   floor 600, cap 3,000. BOTH TERMS MEASURED FROM DISK BY LINE RANGE.

     TERM 1 — L35,36, BY LINE RANGE (§14.1(a)). File total 1,519 w.
       lines   1–  2     6 w  — the transcriber's SOURCE path. NOT the
                                lecture. NOT counted.
       lines   3– 20    95 w  — the two OBJECTIVES slides plus the title
                                slide. ⚠️ NOT COUNTED. Lines 7–10 name the
                                same four diseases the body then teaches, and
                                13–20 are four generic learner objectives.
                                Same call `op-systemic` made on L23 lines
                                7–20, on the `ent-swallow` ILO-index
                                precedent: counting a contents list bills the
                                same content twice inside one file.
       lines  21– 28    24 w  — THE FOUR CAUSES of slowly progressive visual
                                loss in an adult. COUNTED.
       lines  29– 37    37 w  — THE FOUR EXAMINATION STEPS — tonometer, nerve
                                head, lens clarity, macula. COUNTED.
       lines  38–128   390 w  — GLAUCOMA: epidemiology, relevance, the four
                                headline facts, POAG's insidious course, the
                                EGS definition, pathogenesis, IOP as a
                                screen, the optic-disc features, diagnosis.
                                COUNTED.
       lines 129–249   423 w  — CATARACT: definition, the cause lists
                                (age-related, traumatic, metabolic, drugs,
                                complicated, intrauterine, syndromic,
                                hereditary), the three-axis classification,
                                senile cataract in Egypt, lens pathogenesis,
                                symptoms, points to remember, examination,
                                management. COUNTED.
       lines 250–368   465 w  — MACULA AND AMD: macular anatomy, the five
                                macular functions, the six macular symptoms,
                                relevance, Egyptian prevalence, the eight
                                macular function tests, dry versus wet,
                                drusen, the two risk-factor lists,
                                treatment. COUNTED.
       lines 369–408    79 w  — DIABETIC RETINOPATHY: risk factors,
                                pathogenesis, types, management. COUNTED.
       = 1,418 words claimed of the file's 1,519. Reconciles exactly:
         1,519 − 6 − 95 = 1,418.

     TERM 2 — 25 x 0 linked questions = 0. ⚠️ VERIFIED FROM DISK, NOT ASSUMED.
       Two greps over `app\data\questions.ophtho.js`:
         grep -c "op-insid"                      → 0
         grep -o 'chapter: *["'']op-[a-z-]*'     → 20 distinct chapters,
                                                   summing to 138, and
                                                   `op-insid` is not one of
                                                   them.
       The single hit for the STRING "insidious" in that file is inside an
       `op-orbit-mass` explanation (optic nerve sheath meningioma "presents
       as insidious visual loss") — a word, not a link. ⚠️ NOTE FOR THE HUB:
       the second grep is the one that matters, because `chapter: 'op-orbit'`
       is written WITH a space in 24 entries and `chapter:'op-glauc'` without
       one in others; a single-pattern grep under-reports this file.
       SO: NO QUESTION IN THE MODULE CARRIES chapter:'op-insid'. The LECTURE
       side of the §14.2 floor does all the work, TERM 1 governs alone, and
       every section's `qs` is legitimately empty — the same audited case as
       `op-trauma` and `op-systemic`. Nothing must be "fixed" by linking
       another chapter's questions here.

     max(1,418 · 0) = 1,418 → floor 600 clears, cap 3,000 does not bind.
     BUDGET = 1,418. Operative ceiling per §14.1 is ~2,400 body words /
     ~10 printed pages.

     ⚠️ The `theory-plan.md` table gives this chapter 1,606 words. That is
     `pdftotext`'s count of the PDF; the CACHE on disk is 1,519, and §14.1
     says to count the cached file. The 87-word difference is not chased.

   DIAGRAM-DECK CHECK (§14.1). L35,36 lines 21–408: 1,418 words over 327
   non-blank lines = 4.34 w/line, well above the ~2 that marks a
   labelled-diagram deck. NO diagram-deck correction applies. This is a
   genuine text extraction of a real prose-and-bullet deck, so the number
   measures the deck.

   ⚠️⚠️ ENTITY FLOOR, COUNTED BEFORE WRITING — AND THIS IS EXACTLY THE
   `ent-dysph` SURVEY-CHAPTER FAILURE §14.1 WARNS ABOUT, IN ITS PUREST FORM.
   Both terms are low and they agree only BECAUSE both are low: the deck is a
   survey of four large diseases in 1,418 words of bullets (TERM 1 low), and
   the bank files ZERO questions here (TERM 2 not merely low but nil). Said
   up front, not discovered in compression.

     DISTINCT ENTITIES, COUNTED: 4 headline diseases (POAG, cataract, AMD,
     diabetic retinopathy) + 3 sub-entities the deck defines in their own
     right (dry AMD, wet AMD, drusen) = 7. At §14.1's ~90 w of floor each —
     what it is, how it presents, what confirms it, what treats it — that is
     ~630 words BEFORE a single framework slide.

     FRAMEWORK SLIDES, COSTED ONE BY ONE (§14.1's `ent-neck` rule — a list of
     names has no fat in it):
       the four causes + L1,2's wider chronic column          ~90
       the four-step examination, each step mapped to a cause ~80
       ⚠️ THE DISCRIMINATION GRID — 4 causes x 6 axes = 24
          cells, costed at rows x columns per `ent-phon`      ~250
       glaucoma epidemiology and the four headline facts      ~90
       the EGS 2003 definition + pathogenesis + normal-IOP
          caveat                                              ~120
       the optic-disc feature list (5 items)                  ~90
       the cataract AETIOLOGY grid — 7 groups, ~22 named
          agents and conditions                               ~180
       the three-axis classification grid                     ~90
       senile cataract in Egypt (3 figures)                   ~70
       lens pathogenesis (growth, the 35 % protein figure)    ~70
       the five cataract symptoms                             ~110
       "points to remember" — the coexisting-disease trap     ~80
       the seven-step cataract examination run                ~50
       the cataract management ladder (5 operations)          ~70
       macular anatomy                                        ~100
       the five macular functions                             ~50
       the six macular symptoms                               ~70
       the eight macular function tests                       ~110
       AMD relevance + Alexandria prevalence (3 figures)      ~110
       the two AMD risk-factor lists (4 fixed + 9 modifiable) ~90
       AMD treatment, split dry/wet                           ~50
       DR: risk factors + two pathogenic arms + three types
          + the management grid                               ~180
                                                     = ~2,100

     Entities and framework overlap by roughly the seven entities' "what it
     is" lines, ~150 w, which are written inside the framework blocks.

     REALISTIC FLOOR ≈ 630 + 2,100 − 150 ≈ **2,580 words — ~82 % OVER
     TERM 1's 1,418**, and this is SAID HERE, IN ADVANCE. At the ÷240
     estimator that is 2,580 ÷ 240 ≈ **10.8 printed pages** — over the ~10-page
     operative ceiling, INSIDE the ~12-page / ~2,900-word split trigger the
     brief set. **NO SPLIT PROPOSED — the shape holds**, and it holds because
     five of the seven entities are held to their DISCRIMINATION and pointed
     at their owning chapter rather than re-derived (see the cross-reference
     block below). Written in full they would have cost ~1,400 more.

     ⚠️ THREE COMPRESSION PASSES WERE RUN AFTER WRITING, and the outcome sits
     just above the ~10-page operative ceiling. §14.1 requires the next cut to
     be ITEMISED rather than taken silently, so — WHAT A FURTHER ~200 WORDS
     WOULD COST, in the order it would have to go:
       · ins-3's EGS 2003 definition quote and the "the definition does not
         contain the word PRESSURE" discriminator (~55 w). This is the fact
         that makes normal-tension glaucoma make sense, and `glc-1`'s
         definition is the deck's OWN triad, not the EGS one.
       · ins-6's photostress and laser-interferometry clauses (~55 w) — the
         two supplied gap-fills. Cutting them returns the deck's test list to
         eight words with two of them meaningless.
       · ins-4's seven-group cause GRID collapsed to a name list (~50 w),
         losing the group each of the ~22 named agents belongs to — which is
         the only thing the grid is for.
       · ins-2's four ambiguous-case rules (~45 w), which ARE the chapter.
     ALL FOUR ARE PROTECTED FACTS OR THE CHAPTER'S ONLY ORIGINAL CONTENT, so
     the cut was NOT taken. §14.1: stop at the floor and say so. Everything
     removable — teaching voice, connective sentences, restated tables — was
     already removed in the three passes. **The page count is the hub's call,
     and §14.1's remedy for it is LAYOUT, not more word cuts.**

     ⚠️ THE SEAM, IF THE HUB DISAGREES AND WANTS ONE ANYWAY, is chosen from
     the content and not from the word count. The deck itself breaks cleanly
     at LINE 250: lines 21–249 are THE FRONT OF THE EYE — pressure and media,
     glaucoma and cataract — and lines 250–408 are THE BACK — macula, AMD and
     diabetic retinopathy. Split there: `op-insid-front` (ins-1 to ins-5,
     ~1,580 w / ~6.6 pp) and `op-insid-back` (ins-6 to ins-8, ~1,000 w /
     ~4.2 pp). ⚠️ THE COST OF THAT SPLIT IS THE CHAPTER'S ONLY REAL CONTENT:
     ins-2's discrimination grid spans all four diseases and would have to be
     duplicated or arbitrarily assigned. Recorded so the decision is
     available; not taken.

   ============================================================================
   ⚠️⚠️ WHAT THIS CHAPTER DOES NOT REWRITE — FIVE ENTITIES ALREADY OWNED BY
   MERGED CHAPTERS. Each was greped in `app\data\theory.ophtho.js` BEFORE its
   block was written, and each is handled by the DISCRIMINATION plus a
   whole-line italic cross-reference (§14.3a's fourth line kind), never by
   re-derivation. NO REGISTER ROW IS OPENED FOR THESE — a merged receiver
   already has the fact.

     · PRIMARY OPEN ANGLE GLAUCOMA -> `op-glauc` (MERGED, 17 sections).
       `glc-6` carries the trabecular pathology and the five predisposing
       factors; `glc-7` the glaucomatous disc; `glc-8` the field-defect
       sequence (paracentral → arcuate → nasal step → ring → tubular →
       temporal island) and "central vision lost only in END-STAGE";
       `glc-9` presentation, examination and the four-step treatment ladder.
       ins-3 writes ONLY what L35,36 adds: the epidemiology, the EGS 2003
       definition, the normal-pressure caveat, and the deck's own disc
       criteria — and points at all four sections.
     · CATARACT MORPHOLOGY AND MATURITY -> `op-va` (MERGED). `va-13` already
       prints the pupil-colour / red-reflex grid and the four appearances
       (IMSC, MSC, hypermature shrunken, Morgagnian), and `pup-9` in
       `op-pupil` (MERGED) prints the red-reflex colour grid including
       "black shadows = cataract" and "absent = mature cataract". ins-4 gives
       the classification as the deck's three AXES only and points at
       `va-13`; ins-2 uses the red reflex as a discriminator and points at
       `pup-9`.
     · DIABETIC RETINOPATHY -> `op-systemic` (MERGED). `sys-1` carries the
       five systemic determinants, `sys-2` the NPDR / severe NPDR / PDR
       stage-and-sign grid, the NVD/NVE definitions, the three PDR treatment
       indications and diffuse maculopathy. ins-8 writes ONLY the three
       things L35,36 adds and `sys-2` does not have — the two pathogenic
       ARMS, the deck's own three-type list, and its management grid — and
       points at `sys-2`.
     · CORNEAL OPACITY -> `op-cornea` / `op-cornea-surg` (BOTH MERGED).
       ⚠️ L35,36 NEVER MENTIONS THE CORNEA. It is named in ins-1 only as one
       of the causes the deck's four-item list leaves out, tagged, with the
       pointer.
     · THE AMSLER GRID -> `op-va` (MERGED). `va-11` prints it with the
       central 10° from L1,2. ins-6 names it in the test list and points
       there rather than restating the scope.

   ============================================================================
   ⚠️ CROSS-CHAPTER DEFERRALS (§14.5) — named, so each is a promise and not a
   deletion. ⚠️ NO QUESTION FILED IN THIS CHAPTER CAN BE HARMED BY ANY OF
   THEM, because this chapter has NO questions at all. Each receiver's merge
   state is stated, because a merged receiver cannot be ticked without a
   reconciliation pass — and ALL FOUR RECEIVERS BELOW ARE UNMERGED.

     · L35,36 lines 241–249 — CATARACT SURGERY AS SURGERY: what ICCE, ECCE,
       ECCE+IOL and PHACO+IOL actually are, the incision sizes, IOL types and
       placement, the complications, and the indications for congenital lens
       aspiration.                                                -> `op-cat`
       Kept here as the five-rung LADDER and its ordering logic, which is
       what a chapter about telling causes apart needs. ✅ `op-cat` is NOT
       merged and `L17) Cataract I` + `L18) Cataract II` are ITS OWN decks —
       `L18` lines 275–330 already print the three-column PHACO / ECCE / ICCE
       comparison and the IOL table, so this row costs L35,36 nothing and can
       be delivered from a source this chapter never spent.
     · L35,36 lines 175–183 + 203–211 — THE MORPHOLOGICAL AND MATURITY
       CLASSIFICATIONS IN FULL: nuclear colour progression, the cortical
       stages (incipient water vacuoles → immature → mature → hypermature,
       typical versus Morgagnian), sunflower and posterior subcapsular
       patterns, and the acuity each stage gives.                 -> `op-cat`
       Kept here as the three AXES and the immature/mature definition the
       deck itself prints. ✅ not merged; `L17` lines 100–160 and 213 print
       every stage with its acuity range. ⚠️ PARTIAL OVERLAP DECLARED:
       `op-va`'s `va-13` (MERGED) already carries four of these appearances,
       so `op-cat` inherits a fact that two chapters touch — said here rather
       than silently duplicated.
     · L35,36 lines 369–408 — DIABETIC RETINOPATHY AS RETINAL DISEASE: the
       microvascular lesion in full, fluorescein angiography and OCT as a
       work-up, panretinal and focal/grid photocoagulation as procedures,
       anti-VEGF agents, vitrectomy.                              -> `op-ret`
       ⚠️ THIS ROW DUPLICATES ONE `op-systemic` ALREADY OPENED against L23
       lines 48–106. It is stated anyway, from a different deck, so that the
       hub can merge the two rows rather than discover the second later.
       ✅ `op-ret` is not merged; `L19.1) Diabetic Retinopathy` is its own
       deck and prints focal and panretinal photocoagulation at lines
       112–159.
     · L35,36 lines 250–262 — MACULAR AND FOVEAL ANATOMY AS ANATOMY: the
       retinal layers, the RPE–Bruch–choriocapillaris complex, the
       rod-and-cone distribution curve.                           -> `op-ret`
       Kept here as the four anatomical facts the deck states and the
       clinical use of each. ✅ not merged. ⚠️ `L20) Retinal detachment and
       degenerations` extracts almost nothing and is owed a visual read, so
       this row cannot be ticked until that is done.

   ⚠️⚠️ AND ONE THING THAT IS **NOT** DEFERRED, DELIBERATELY —
   AGE-RELATED MACULAR DEGENERATION IS WRITTEN HERE IN FULL. Greped as a stem
   across all 27 cached decks: `drusen` returns **L35,36 alone**, three lines
   of it; `Bruch` returns **zero hits outside L35,36**; `choroidal neovasc`,
   `geographic atroph` and `AREDS` return **zero anywhere in the module**;
   `macular degeneration` outside L35,36 returns exactly three incidental
   mentions — `L1,2` line 369 (a family-history list), `L1,2` line 622 (one
   cell of a triage grid) and `L18` line 489 (a fundus checklist). **L35,36 is
   the ONLY deck in Ophthalmology that teaches AMD.** Deferring it to `op-ret`
   would hand the receiver a subject its own deck cannot supply — the
   `central serous chorioretinopathy` failure `op-systemic` flagged, repeated.
   So ins-7 writes it, and the note for the hub is the reverse of a deferral:
   **`op-ret` should CROSS-REFERENCE ins-7, not rewrite it.**

   ⚠️ ROWS THIS CHAPTER ADDS TO THE REGISTER, to be copied into
   START-HERE.md §14.5 by the hub:
     | `op-insid` (L35,36 ll.241–249) | Cataract surgery as surgery — ICCE /
       ECCE / ECCE+IOL / PHACO+IOL in detail, IOLs, complications,
       congenital lens aspiration | `op-cat` | open |
     | `op-insid` (L35,36 ll.175–183, 203–211) | The morphological and
       maturity classifications in full — nuclear colours, the cortical
       stages, sunflower and PSC patterns ⚠️ partly already in the MERGED
       `va-13` | `op-cat` | open |
     | `op-insid` (L35,36 ll.369–408) | Diabetic retinopathy as retinal
       disease — the microvascular lesion, FA/OCT, PRP and focal/grid laser,
       anti-VEGF, vitrectomy ⚠️ MERGE WITH `op-systemic`'s identical row |
       `op-ret` | open |
     | `op-insid` (L35,36 ll.250–262) | Macular and foveal anatomy as
       anatomy — retinal layers, RPE/Bruch/choriocapillaris, the
       rod-and-cone distribution | `op-ret` | open ⚠️ receiver's deck L20 is
       owed a visual read |

   ============================================================================
   GAPS — ANSWERED AND TAGGED, NOT DECLARED (§4). ⚠️ EVERY ONE WAS GREPED AS A
   STEM ACROSS ALL 27 CACHED OPHTHALMOLOGY DECKS BEFORE BEING CALLED A GAP,
   AND THE OBVIOUS MISSPELLING TRIED. FOUR THINGS I EXPECTED TO BE GAPS TURNED
   OUT PRINTED, AND ALL FOUR CHANGED WHAT IS WRITTEN BELOW:

     ✅ NOT A GAP — THE AMSLER GRID'S SCOPE. L35,36 line 306 prints only
        "Amsilar grid". `L1,2` line 551 prints it correctly WITH its scope —
        "Amsler Grid — For the central 10° of the visual field" — and the
        MERGED `va-11` already carries that row. SOURCED and cross-referenced
        in ins-6, not supplied. This is the misspelling rule paying out: the
        deck's own spelling returns nothing, the correct one returns two
        decks and a merged chapter.
     ✅ NOT A GAP — MICROPSIA, MACROPSIA AND METAMORPHOPSIA AS A GROUP.
        `L1,2` lines 278–291 print all three under the heading "Visual
        complaints related to macular diseases", which independently
        corroborates L35,36's symptom list. ⚠️ BUT `L1,2` PRINTS THE NAMES
        ONLY, under a figure — no definitions anywhere in 27 decks — so the
        one-clause definitions in ins-6 are supplied and tagged.
     ✅ NOT A GAP — THE WIDER LIST OF CHRONIC VISUAL-LOSS CAUSES. L35,36
        prints four. `L1,2` lines 615–627 print a three-column
        SUDDEN / ACUTE / CHRONIC triage grid whose CHRONIC column reads
        **refractive error · cataract · AMD · diabetic retinopathy · optic
        neuropathy**. Two additions, one absence (that column omits
        glaucoma), all sourced and written into ins-1. This is the brief's
        "check the deck against the module" rule paying out — a deck's own
        list is true of that deck and not of the module.
     ✅ NOT A GAP — THE CUP/DISC THRESHOLD IS PRINTED TWICE, DIFFERENTLY.
        L35,36 line 119 says **0.5 or more** raises suspicion; `L11` line 137
        says **enlargement beyond 0.3**, and the merged `glc-7` carries the
        0.3 figure. Both are recorded in ins-3 as a one-line divergence note,
        neither disputed (§4b).

   THE THREE REAL GAPS, each settled by proving a negative across 27 decks:

     1. LASER INTERFEROMETRY. L35,36 line 308 names it in the macular-test
        list and never says what it is. Greped: `interferometr` returns
        **ZERO hits in all 27 decks** outside that one line. What it is —
        a potential-acuity test that projects interference fringes through a
        cloudy lens to predict the acuity surgery would deliver — is SUPPLIED
        AND TAGGED in ins-6, in one clause, because without it the deck's
        list is a word with no meaning.
     2. THE PHOTOSTRESS TEST. L35,36 line 307 prints "Phtosterss test".
        Greped `photostress`, `photo stress`, `photo-stress` and the deck's
        own spelling: **ZERO hits anywhere else**. Supplied and tagged in
        ins-6 as one clause — bleach the macula with a bright light, time the
        return to pre-test acuity; delayed in maculopathy, normal in optic
        neuropathy. That contrast is the reason the test is on the list.
     3. THE DRY-AMD SUPPLEMENT. L35,36 line 364 prescribes "dietary
        supplements of minerals and vitamins especially Vit. E" and names no
        formulation. Greped `AREDS`, `zinc`, `lutein`: **ZERO** in 27 decks.
        One tagged clause in ins-7 names the AREDS formulation, because a
        bare "vitamins" is not an answerable fact.

   One smaller supplied item, tagged in place:
     · Why a cataract cannot cause a relative afferent pupillary defect
       (ins-2). The merged `pup-4` states the rule — "a media opacity never
       causes one" — and is cited; the one-clause MECHANISM beside it is
       supplied.

   ============================================================================
   DEFECT NOTES (§4b — noted, never disputed), each one line in the body:
     · L35,36 line 119 CUP/DISC ≥ 0.5 versus `L11` line 137's > 0.3.
       Divergence between two decks of the same module, both recorded in
       ins-3, neither disputed. ⚠️ The merged `glc-7` prints 0.3.
     · L35,36 lines 44–45 read "The majority of Chronic visual loss are
       primary open angle glaucoma followed by secondary angle closure
       glaucoma." As printed this contradicts the deck's OWN four-cause list
       two slides earlier. Read in context it ranks the glaucoma subtypes,
       not the causes of chronic visual loss. Recorded in ins-3 as printed,
       with the reading that makes it consistent.
     · L35,36 line 149 prints "Glacokinase defiency" among the metabolic
       cataracts. ⚠️ GALACTOKINASE deficiency is the cataract-causing enzyme
       defect, and it sits beside galactosaemia in the same list;
       GLUCOKINASE deficiency causes MODY and not cataract. Written as
       galactokinase with the deck's spelling recorded, in ins-4.
     · L35,36 line 256 reads "The central macula is a vascular and appears
       darker". Word-split defect: **avascular** — the foveal avascular zone,
       which is WHY it looks darker. Recorded in ins-6.
     · L35,36 line 306 "Amsilar grid" → Amsler; line 307 "Phtosterss test" →
       photostress. Both recorded once in ins-6.
     · L35,36 line 282 dates the AMD burden to "people aged 52 or older".
       An unusual threshold; printed as the deck states it, recorded in
       ins-7, not corrected.
     · L35,36 line 372 lists "Good metabolic control" among the RISK factors
       for diabetic retinopathy. As printed, a protective factor in a risk
       list; the deck means the determinant. Recorded in ins-8.
     · Transcription slips carried through silently, listed here once and not
       in the body: "itumescent"→intumescent, "dowen"→Down,
       "Hypocacemic"→hypocalcaemic, "Heredetary"→hereditary,
       "conistitute"→constituents, "Thikened"→thickened,
       "Capilary"→capillary, "NEOVASCULARIZATIONJ"→neovascularization,
       "Flourescine"→fluorescein, "Myleran"→busulfan's trade name,
       "hypertemsion"→hypertension, "depressionof"→depression of,
       "Syndroms"→syndromes.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection (§14.2) — moot, the chapter links
        no questions.
     2. The two OBJECTIVES slides as body text. They name the same four
        diseases the body teaches plus four generic learner objectives; the
        arithmetic is in the budget block.
     3. The five slide headings that carry no content at all — line 113
        "ANGLE OF AC", lines 114–115 "INTRAOCULAR PRESSURE (IOP)", line 194
        "ANATOMY", line 326 "Go to fullsize image", line 341 "WET AMD". They
        are figure captions with no text beneath them.
     4. Question ids in body text, teaching voice, per-fact citation clauses
        (one Src line per section), and a closing summary section.
     5. Drug names for the glaucoma ladder. L35,36 gives none; the merged
        `glc-9` carries the full four-rung protocol with the drug classes and
        is cross-referenced instead.
     6. Anti-VEGF AGENT names (ranibizumab, aflibercept, bevacizumab).
        Absent from L35,36 and from all 27 decks; no question tests them;
        supplying them would pad a chapter already ~82 % over TERM 1.
        Recorded, NOT supplied.
     7. The IOP normal range and the tonometer types. L35,36 prints the
        heading and nothing else; `op-va`'s `va-5`/`va-6` and `op-glauc`'s
        `glc-4` (both MERGED) carry the number, the finger estimate and the
        applanation-versus-indentation comparison.

   ============================================================================
   ⚠️ FINAL MEASUREMENT — DELIBERATELY ABSENT FROM THIS HEADER.

   §14.1's rule has been broken ELEVEN times in this project. `op-trauma` and
   `op-systemic` solved it by stating NO numbers in the file and reporting
   them to the hub instead. THAT IS COPIED HERE. The counter was run over this
   file ON DISK after the final content edit and after the §14.3a layout pass;
   the figures are in the completion report, not in this file, because a
   number written into the file must be re-verified after every subsequent
   edit — and this file WILL be edited again when it is spliced into
   `app\data\theory.ophtho.js`.

   ⚠️ TWO DEFINITIONS OF "BODY WORDS" ARE IN USE AND THEY DIFFER. The command
   below EXCLUDES `Src:` lines; the hub's canonical validator counts
   `W(s.body)` over the whole body string and therefore INCLUDES them. Both
   numbers are given in the completion report, each labelled.

     node -e "const vm=require('vm'),fs=require('fs');
       const c={};vm.createContext(c);
       vm.runInContext(fs.readFileSync('content/ophtho/theory-drafts/op-insid.draft.js','utf8'),c);
       const ch=c.THEORY_DRAFT['op-insid'];
       let t=0,tt=0;for(const s of ch.sections){
         const all=s.body.split(/\s+/).filter(Boolean).length;
         const w=s.body.split('\n').filter(l=>!/^Src:/.test(l))
                  .join(' ').split(/\s+/).filter(Boolean).length;
         console.log(s.id,w,all);t+=w;tt+=all}
       console.log('sections',ch.sections.length,'body(no Src)',t,
                   'body(with Src)',tt,
                   'intro',ch.intro.split(/\s+/).length,
                   'pages~',(tt/240).toFixed(1));"

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field.
   ============================================================================ */

var THEORY_DRAFT = {
  'op-insid': {

    intro: 'Four diseases take an adult’s sight slowly and painlessly — glaucoma, cataract, macular degeneration, diabetic retinopathy — and four bedside steps separate them. Each is written in depth elsewhere; what this chapter carries is the discrimination.',

    sections: [

{
  id: 'ins-1', w: 'must',
  h: 'The four causes, and the four-step examination built to separate them',
  body: [
    '**The deck’s question:** an adult reports vision faded over months, the eye **white and painless**. Four diseases account for it.',
    '',
    '### The four causes',
    '- **In the deck’s order:** **glaucoma** · **cataract** · **macular degeneration** · **diabetic retinopathy**.',
    '',
    '### The four steps — each step exists to catch one of them',
    '',
    '|Step|What is done|Which cause it catches|',
    '|---|---|---|',
    '|**1**|**Measure the intraocular pressure** with a tonometer|**Glaucoma**|',
    '|**2**|**Evaluate the nerve head** — normal or abnormal|**Glaucoma**|',
    '|**3**|**Evaluate the clarity of the lens**|**Cataract**|',
    '|**4**|**Evaluate the function AND appearance of the macula**|**AMD, diabetic maculopathy**|',
    '',
    '- **⚠️ Step 2 outranks step 1:** the disc detects glaucoma even when the pressure reads normal.',
    '- **⚠️ Step 4 is two tests, not one:** function (acuity, Amsler, colour) **and** appearance (ophthalmoscopy).',
    '',
    '### ⚠️ The deck’s four are not the module’s four',
    '- **A second deck triages** loss of vision as **sudden / acute / chronic**, and its CHRONIC column runs wider.',
    '- **Also chronic there:** **refractive error** · **optic neuropathy** — neither on this deck’s list.',
    '- **⚠️ Absent from that column:** **glaucoma**, which this deck makes cause number one.',
    '- **Neither list names CORNEAL OPACITY**, a media cause of gradual blur *(not in course material)*.',
    '',
    '*Refractive error is `op-refract`’s; optic neuropathy `op-neuro`’s; corneal opacity, dystrophy and degeneration are `op-cornea` and `op-cornea-surg`.*',
    '',
    'Src: L35,36 lines 21–37; L1,2 lines 615–627 (cited only, not counted)'
  ].join('\n'),
  qs: []
},

{
  id: 'ins-2', w: 'must',
  h: 'Telling the four apart — the grid the whole deck is built to support',
  body: [
    '**Why the deck insists on it:** the four differ in what can be done — **cataract surgically correctable**, **glaucoma medically or surgically treatable**, **macular degeneration potentially laser treatable**. The cause decides the referral.',
    '',
    '### The discrimination',
    '',
    '|Axis|Glaucoma (POAG)|Cataract|Macular degeneration|Diabetic retinopathy|',
    '|---|---|---|---|---|',
    '|**Which vision goes first**|**PERIPHERAL field** — central spared until late|**whole image blurs**, uniformly|**CENTRAL vision**|**central**, once the macula is involved|',
    '|**The giveaway symptom**|**none** — asymptomatic early|**glare**, **monocular diplopia**, **lenticular myopia**|**metamorphopsia**, **central scotoma**|often **none** until oedema or haemorrhage|',
    '|**The media**|**clear**|**OPAQUE** — dark shadows, then leukocoria|clear|clear|',
    '|**The optic disc**|**CUPPED**, rim thinned|normal, but **may be unviewable**|normal|normal|',
    '|**The macula**|normal|normal, but **may be unviewable**|**drusen, atrophy or CNV**|**oedema, exudates, haemorrhage**|',
    '|**Reversible?**|**NO** — damage is irreversible|**YES** — surgery restores it|**NO** for lost central vision|**NO** for lost vision|',
    '',
    '### Four rules that decide the ambiguous case',
    '- **Peripheral loss with 6/6 acuity:** glaucoma. Acuity is the wrong screening test for it.',
    '- **⚠️ A dense cataract hides the other three:** with a densely cataractous lens, **retinal and optic nerve pathology cannot be adequately evaluated**.',
    '- **⚠️ A cataract NEVER causes an RAPD:** the opacity dims the image, the nerve still transmits it.',
    '- **So an RAPD in a cataractous eye:** means **a second disease behind the lens** *(mechanism supplied; the deck states the rule)*.',
    '- **Near-work difficulty or metamorphopsia:** examine the macula with special attention, whatever else is found.',
    '',
    '*The red-reflex colour grid is `pup-9`; the pupil-colour and cataract-appearance grid `va-13`; the swinging flashlight test and the media-opacity rule `pup-4`.*',
    '',
    'Src: L35,36 lines 21–37, 66–81, 224–232, 287–290; L3,4 (cited only)'
  ].join('\n'),
  qs: []
},

{
  id: 'ins-3', w: 'must',
  h: 'Glaucoma — why it is the insidious one, and what this deck asks about the disc',
  body: [
    '### The four headline facts',
    '- **A major cause of blindness** — the **leading cause of IRREVERSIBLE blindness**.',
    '- **Often asymptomatic** early · **damage is irreversible** · **effective treatment is available**.',
    '',
    '### The numbers',
    '- **Blindness among glaucoma patients:** **7.6 %–19.7 %**.',
    '- **Often diagnosed in ADVANCED stages**, especially in **rural areas**.',
    '- **In the United States:** the **second** most important cause of blindness, and the **single most important** cause in **African Americans**.',
    '',
    '*The deck also states "the majority of chronic visual loss are primary open angle glaucoma followed by secondary angle closure glaucoma" — as printed it contradicts its own four-cause slide; as a ranking of glaucoma subtypes it is consistent. Noted as printed.*',
    '',
    '### Why POAG is insidious',
    '- **Symptoms and field defects occur LATE** — **scotomas** plus **peripheral contraction**, **central vision spared until late**.',
    '- **No pain, no ocular inflammation** in the great majority.',
    '- **⚠️ The consequence:** much peripheral vision can be lost before the patient notices anything.',
    '- **Early detection needs special testing:** **visual field testing · OCT · optic nerve photography**.',
    '',
    '### The definition — EGS Terminology and Guidelines, 2nd ed., 2003',
    '- **The examinable phrase:** *"progressive optic neuropathies… characteristic morphological changes at the optic nerve head and retinal fiber layer in the absence of other ocular disease"*, with **progressive ganglion cell death and field loss**.',
    '- **⚠️ What it does NOT contain:** the word **pressure**. Glaucoma is defined by the **nerve**, not the number.',
    '',
    '### ⚠️ Pathogenesis — and why the pressure can read normal',
    '- **Prolonged elevation of IOP** can lead to optic nerve damage.',
    '- **⚠️ But:** glaucomatous nerve changes are **evident despite an apparently "normal" pressure** in many cases.',
    '- **⚠️ Therefore:** **examination of the optic nerve is the MOST IMPORTANT way to detect glaucoma** in primary care.',
    '- **IOP still earns its place:** a **valuable means of SCREENING** — a screen, not a diagnosis.',
    '',
    '### The disc — the five things looked at',
    '- **Cup size:** the larger the cup, the greater the suspicion.',
    '- **⚠️ The threshold:** a **cup–disc ratio of 0.5 or more** raises suspicion.',
    '- **Vessel bending** at the edge of the cup · **vessel displacement** · **disc colour**.',
    '- **Diagnosis rests on two legs:** the **optic disc** and the **field changes**.',
    '',
    '*⚠️ Divergence: this deck sets the suspicious cup–disc ratio at **0.5 or more**; `L11` sets it at **enlargement beyond 0.3**, which `glc-7` prints. Both recorded, neither disputed.*',
    '',
    '*The rest of glaucoma is `op-glauc`: pathology and predisposing factors `glc-6` · the disc `glc-7` · the field-defect sequence `glc-8` · presentation and treatment `glc-9` · tonometry `glc-4`, `va-5`.*',
    '',
    'Src: L35,36 lines 38–128; L11 (cited only, `op-glauc`’s deck)'
  ].join('\n'),
  qs: []
},

{
  id: 'ins-4', w: 'must',
  h: 'Cataract — what it is, why the lens clouds, and every cause the deck lists',
  body: [
    '- **Cataract:** **opacity of the lens**.',
    '- **⚠️ The CLINICAL definition is narrower:** reserved for opacities that **affect visual acuity**, because many normal lenses carry small, insignificant opacities.',
    '',
    '### Pathogenesis — an organ that never stops growing',
    '- **The lens grows throughout life:** epithelial cells keep making **cortical fibres**, so size, weight and density rise over the years.',
    '- **The protein figure:** the normal lens is **35 % protein by mass**.',
    '- **What changes:** **INSOLUBLE protein rises** as the lens ages and as a cataract develops.',
    '',
    '### The causes — seven groups',
    '',
    '|Group|Members|',
    '|---|---|',
    '|**Age-related**|**subcapsular · nuclear · cortical**|',
    '|**Traumatic**|—|',
    '|**Metabolic**|**diabetic · galactosaemia · galactokinase deficiency · mannosidosis · Fabry disease · Lowe syndrome · hypocalcaemic syndrome**|',
    '|**Cataractogenic drugs**|**chlorpromazine · miotics · myleran (busulfan) · amiodarone · gold**|',
    '|**Complicated**|**uveitis · retinal dystrophy and retinitis pigmentosa · high myopia · acute glaucoma**|',
    '|**Intrauterine**|**rubella · toxoplasma · CMV**|',
    '|**Syndromic**|**Down syndrome**|',
    '',
    '- **Hereditary:** accounts for **one third** of cases.',
    '- **⚠️ A cataract in a young patient:** never age-related — metabolic, drug-induced, complicated, traumatic or intrauterine, and the history decides which.',
    '',
    '*⚠️ The deck prints "Glacokinase defiency". **Galactokinase** deficiency is the cataract-causing defect and sits beside galactosaemia in the same pathway; glucokinase deficiency causes MODY, not cataract (correction not in course material).*',
    '',
    '### Classification — three axes, and an examiner may ask on any of them',
    '',
    '|Axis|Divisions|',
    '|---|---|',
    '|**Morphological**|**nuclear · subcapsular · cortical** — each **anterior or posterior** in location|',
    '|**Maturity**|**immature · mature · intumescent · hypermature**|',
    '|**Age of onset**|**congenital · infantile · presenile · senile**|',
    '',
    '- **Immature:** **clear cortex remaining**.',
    '- **Mature:** **totally opacified cortex**.',
    '',
    '### Senile cataract — the Egyptian figures',
    '- **⚠️ The headline:** senile cataract is the **primary cause of REVERSIBLE blindness in Egypt** — the mirror image of glaucoma.',
    '- **Prevalence:** approximately **22.9 % of the elderly population** (aged above 60) in Egypt.',
    '- **Burden:** roughly **2.2 million individuals** affected.',
    '- **⚠️ And:** **one of the most successfully treated conditions in all of surgery**.',
    '',
    '*The four cataract appearances at the slit lamp — IMSC, MSC, hypermature shrunken, Morgagnian — and the pupil-colour grid are `va-13`; the red-reflex grid is `pup-9`. The stage-by-stage morphology is deferred to `op-cat`.*',
    '',
    'Src: L35,36 lines 129–211; L17, L18 (cited only, `op-cat`’s decks)'
  ].join('\n'),
  qs: []
},

{
  id: 'ins-5', w: 'high',
  h: 'Cataract — the five symptoms, the trap, and the operations',
  body: [
    '### The symptoms, in the order the patient reports them',
    '- **The sequence:** **disturbance** → **diminution** → **failure** of vision; the first complaint is **image blur**.',
    '',
    '**The four that name the morphology:**',
    '',
    '|Symptom|What it means|',
    '|---|---|',
    '|**Lenticular MYOPIA**, increasing|**nuclear sclerosis** — the denser nucleus has greater refractive power|',
    '|**Monocular double or multiple images**|**irregular refraction within the lens**|',
    '|**Rapid loss of NEAR vision**|**posterior subcapsular** cataract|',
    '|**GLARE**, with blur and distortion|**posterior subcapsular** cataract|',
    '',
    '- **⚠️ Second sight:** an elderly patient who suddenly **reads without glasses** is not improving — the nucleus is hardening.',
    '',
    '### ⚠️ Points to remember — the trap this chapter exists to avoid',
    '- **Evaluate the optic nerve and retina too**, to detect **coexisting disease** also reducing the acuity.',
    '- **Give the macula special attention** on **near-work difficulty** or **metamorphopsia**.',
    '- **⚠️ The hard limit:** a **densely cataractous** lens leaves retinal and optic nerve pathology **unevaluable** — the surgeon operates blind to what is behind it.',
    '',
    '### Examination — seven steps',
    '- **The run:** **history · visual acuity · pupillary reaction · slit lamp · ophthalmoscopy · ultrasonography · referral**.',
    '- **⚠️ Why ultrasonography:** it images the retina **through** an opaque lens — the answer to the trap above.',
    '- **⚠️ Why pupillary reaction:** the one test a cataract cannot corrupt; an RAPD means disease behind the lens.',
    '',
    '### Management',
    '',
    '|Setting|Operation|',
    '|---|---|',
    '|**Congenital**|**lens aspiration ± IOL**|',
    '|**Acquired**|**ICCE** — intracapsular extraction|',
    '|**Acquired**|**ECCE** — extracapsular extraction|',
    '|**Acquired**|**ECCE + IOL**|',
    '|**Acquired**|**PHACO + IOL** — phacoemulsification|',
    '',
    '- **⚠️ The ladder’s logic:** each rung removes **less** of the capsule through a **smaller** incision, and the last two leave a capsular bag able to hold an IOL.',
    '',
    '*The operations themselves, the IOL types and the complications are deferred to `op-cat`, whose decks `L17` and `L18` print the three-way comparison in full.*',
    '',
    'Src: L35,36 lines 212–249'
  ].join('\n'),
  qs: []
},

{
  id: 'ins-6', w: 'must',
  h: 'The macula — anatomy, the five functions, and how it is tested',
  body: [
    '### Anatomy — four facts, each with a use',
    '- **Position:** an oval area about **2 disc diameters TEMPORAL to the optic disc**.',
    '- **Composition:** **both rods and cones**; responsible for **detailed, fine CENTRAL vision**.',
    '- **⚠️ The central macula is AVASCULAR**, so it appears **DARKER** than surrounding retina — which is how it is found. *(The deck word-splits this as "a vascular".)*',
    '- **The fovea:** an **oval depression** at the macula’s centre — **high density of CONES, NO rods**.',
    '- **The foveal reflex:** the depression acts as a **concave mirror** on ophthalmoscopy, giving a light reflection.',
    '- **Its loss:** an early sign of **macular oedema** *(clinical use not in course material)*.',
    '',
    '### The five macular functions',
    '- **Sharp clear vision** · **colour perception** · **form vision** · **point-to-point discrimination** · **UV and blue-light protection**.',
    '',
    '### The six symptoms of maculopathy',
    '',
    '|Symptom|What the patient describes|',
    '|---|---|',
    '|**Diminution of vision**|central blur|',
    '|**Colour vision defects**|colours washed out|',
    '|**Micropsia**|objects look **SMALLER** — receptors spread by oedema|',
    '|**Macropsia**|objects look **LARGER** — receptors crowded|',
    '|**Metamorphopsia**|**straight lines look bent** — the most specific|',
    '|**Scotoma**|a **central** blind patch|',
    '',
    '*`L1,2` corroborates the three -opsias under "visual complaints related to macular diseases", but prints the names without definitions anywhere in the module — the meanings above are supplied.*',
    '',
    '### The eight tests of macular function',
    '',
    '|Test|What it adds|',
    '|---|---|',
    '|**Visual acuity**|the macula’s headline number|',
    '|**Pupillary light reaction**|normal in media opacity, impaired in extensive macular disease|',
    '|**Colour vision**|an early macular function to fail|',
    '|**Ophthalmoscopy**|drusen, atrophy, oedema, haemorrhage|',
    '|**Amsler grid**|metamorphopsia and central scotoma, mapped by the patient|',
    '|**Photostress test**|separates **macula** from **optic nerve**|',
    '|**Laser interferometry**|predicts acuity **through** a cataract|',
    '|**Fluorescein angiography**|leakage and choroidal neovascularization|',
    '',
    '- **Photostress:** bleach the macula, time the return to pre-test acuity — **delayed in maculopathy, normal in optic neuropathy** *(supplied; the deck prints only "Phtosterss test")*.',
    '- **Laser interferometry:** fringes projected through a cloudy lens give the acuity the retina can still reach — it answers "will surgery help?" *(supplied; nowhere else in 27 decks)*.',
    '',
    '*The Amsler grid’s scope — the **central 10°** — is `va-11`, from `L1,2`. The deck spells it "Amsilar".*',
    '',
    'Src: L35,36 lines 250–309; L1,2 lines 278–291, 551 (cited only, not counted)'
  ].join('\n'),
  qs: []
},

{
  id: 'ins-7', w: 'must',
  h: 'Age-related macular degeneration — dry, wet, drusen, and what changes the management',
  body: [
    '**AMD:** the **most common cause of vision loss over 60**, and in the United States the **leading cause of IRREVERSIBLE CENTRAL visual loss** (20/200 or worse) in people aged **52 or older** *(the deck’s threshold, printed as stated)*.',
    '',
    '- **What it costs:** difficulty **reading, driving**, any task needing fine detail — central function, never the peripheral field.',
    '- **Why it must be recognised:** certain types are **treated effectively with laser**, so the referral changes the outcome.',
    '',
    '### Prevalence in Egypt — Alexandria',
    '- **Overall AMD prevalence:** **6.6 %**.',
    '- **Early AMD 5.3 %**, **late AMD 2.4 %**.',
    '- **Age effect:** significantly higher prevalence of both early and late AMD in those aged **at least 75** than in other age groups.',
    '',
    '### The two types',
    '',
    '|Type|Share|The lesion|',
    '|---|---|---|',
    '|**DRY**|**90 %**|**slow progressive ATROPHY of the RPE and photoreceptors**|',
    '|**WET**|**10 %**|**RPE DETACHMENT and CHOROIDAL NEOVASCULARIZATION**|',
    '',
    '- **⚠️ The asymmetry:** dry is **nine times commoner**; wet is **far more destructive** and turns central vision off quickly.',
    '',
    '### Drusen',
    '- **What they are:** **hyaline nodules (colloid bodies)** deposited in **BRUCH’S MEMBRANE**.',
    '- **Where that is:** Bruch’s membrane **separates the inner choroidal vessels from the RPE**.',
    '- **Appearance:** **small and discrete**, or **larger with irregular shapes and indistinct edges**.',
    '- **⚠️ Drusen alone:** **normal or near-normal acuity**, **minimal metamorphopsia** — a finding, not yet a disease.',
    '',
    '### Risk factors',
    '',
    '|Cannot be controlled|Can be controlled|',
    '|---|---|',
    '|**Age**|**Smoking** · **high blood pressure** · **high cholesterol**|',
    '|**Race**|**Poor nutrition** · **excessive sugar intake** · **obesity**|',
    '|**Gender**|**Sedentary lifestyle**|',
    '|**Genetics**|**Unprotected exposure to sunlight / ultraviolet light**|',
    '',
    '- **⚠️ The pattern:** the controllable list is the **cardiovascular** risk set — AMD behaves like a vascular disease of the outer retina.',
    '',
    '### Treatment — it splits exactly on the type',
    '- **DRY AMD:** **dietary supplements of minerals and vitamins, especially vitamin E.** *(The formulation is the AREDS combination — vitamins C and E, zinc, copper, carotenoids; not in course material.)*',
    '- **WET AMD:** **injections of anti-VEGF.**',
    '- **⚠️ Neither restores lost vision** — both slow or halt progression, which is why the loss is called irreversible.',
    '',
    '*⚠️ For the hub: AMD is written here, not deferred. `drusen`, `Bruch`, `choroidal neovascularization` and `AREDS` return no hits in the other 26 cached decks — L35,36 is the module’s only source, so `op-ret` should cross-reference this section rather than rewrite it.*',
    '',
    'Src: L35,36 lines 278–368'
  ].join('\n'),
  qs: []
},

{
  id: 'ins-8', w: 'high',
  h: 'Diabetic retinopathy — the three things this deck adds',
  body: [
    '**Held to what L35,36 adds:** the stages, the signs, the NVD/NVE definitions and the treatment indications are already written in `sys-2` and are not repeated.',
    '',
    '### Risk factors',
    '- **Duration of the disease** — the dominant one.',
    '- **Metabolic control** · **pregnancy** · **hypertension** · **renal disease** · **anaemia**.',
    '',
    '*The slide prints "good metabolic control" inside a RISK list — a protective factor among risks; the deck means glycaemic control is the determinant. Noted as printed.*',
    '',
    '### ⚠️ Pathogenesis — two arms, and every sign belongs to one of them',
    '',
    '|Arm|The chain|What it produces|',
    '|---|---|---|',
    '|**Microvascular OCCLUSION**|**thickened capillary basement membrane** → **capillary endothelial cell damage** → **changes in RBCs** → **RETINAL ISCHAEMIA**|**AV shunts** and **NEOVASCULARIZATION**|',
    '|**Microvascular LEAKAGE**|**loss of PERICYTES** between endothelial cells|**leakage of plasma constituents into the retina — EXUDATE**|',
    '',
    '- **⚠️ The rule this gives:** an **ischaemic** sign (cotton-wool spots, new vessels) belongs to the occlusive arm; a **wet** sign (hard exudate, oedema) to the leakage arm.',
    '',
    '### The three types',
    '- **The deck’s list:** **non-proliferative (NPDR)** · **proliferative (PDR)** · **macular oedema**.',
    '- **⚠️ Macular oedema:** a THIRD category, **not a stage** — it coexists with either of the others, hence its own treatment row.',
    '',
    '### Management',
    '',
    '|Type|Treatment|',
    '|---|---|',
    '|**NPDR**|**OBSERVATION**|',
    '|**PDR**|**PRP** — panretinal photocoagulation|',
    '|**Macular oedema**|**FOCAL and GRID laser** · **anti-VEGF**|',
    '',
    '- **⚠️ The logic:** PRP **destroys ischaemic retina** to remove the drive to new vessels; focal/grid laser and anti-VEGF **dry the macula** — one arm each.',
    '',
    '*The stages and signs, severe NPDR, NVD versus NVE, the PDR treatment indications and diffuse maculopathy are `sys-2`; the systemic determinants `sys-1`. The full retinal account — FA and OCT, laser technique, anti-VEGF agents, vitrectomy — is deferred to `op-ret`.*',
    '',
    'Src: L35,36 lines 369–408; L23, L19.1 (cited only)'
  ].join('\n'),
  qs: []
}

    ]
  }
};
