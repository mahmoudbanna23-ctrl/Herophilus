/* op-white — "The White Eye", Ophthalmology. Written 2026-08-17 under
   START-HERE.md §14 (§14.1 budget, §14.2 coverage floor, §14.3 style,
   §14.3a layout, §14.5 the deferral register) and
   content\ophtho\theory-plan.md. Shape copied from
   content\ophtho\theory-drafts\op-insid.draft.js and
   content\ophtho\theory-drafts\op-systemic.draft.js.

   DECK LABELS USED IN THE Src LINES:
     L33,34 = L33,34) The White Eye.txt   — THIS CHAPTER'S ONLY COUNTED DECK.
     L3,4   = L3,4) Clinical- Ocular examination.txt          — cited only
     L12    = L12) Glaucoma 2 Cong, PACG, 2ry.txt             — cited only
     L15,16 = L15,16) Cornea.txt                              — cited only
     L17    = L17) Cataract I.txt                             — cited only
     L18    = L18) Cataract II.txt                            — cited only
     L19.2  = L19.2) Retinal Vascular Disorders.txt           — cited only
     L23    = L23) Ocular manifestations of systemic diseases.txt — cited only

   ✅ NO RENDER WAS DONE AND NONE WAS AUTHORISED. L33,34's text layer is
   sufficient and is listed in `theory-plan.md`'s "text layer sufficient"
   table. The cache was used directly; no page of any PDF was opened.

   ============================================================================
   BUDGET — §14.1, budget = max(summed lecture words, 25 x linked questions),
   floor 600, cap 3,000. BOTH TERMS MEASURED FROM DISK BY LINE RANGE.

     TERM 1 — L33,34, BY LINE RANGE (§14.1(a)). File total 597 w.
       lines   1–  2     6 w  — the transcriber's SOURCE path. NOT the
                                lecture. NOT counted.
       lines   3– 11    19 w  — title slide, author, affiliation,
                                "Disclosures: None". NOT counted.
       lines  12– 35    71 w  — THE FRONT VIEW OF THE EYE, three progressive
                                reveals: the normal four colours, then the
                                white-peripheral / white-central split, then
                                the three-level sort of a central white
                                (cornea · aperture · lens · retro-pupil).
                                COUNTED.
       lines  36– 66    58 w  — THE CLINICAL-PICTURE CHART: three symptoms,
                                and the signs branch by branch, ending on the
                                seven-name leukocoria list. COUNTED.
       lines  67– 85    36 w  — CORNEAL TRANSPARENCY, physiological and
                                pathological — the three requirements and
                                their three failures. COUNTED.
       lines  86–216   131 w  — THE CORNEAL OPACITY TREES: the aetiological
                                tree (congenital / acquired, healed
                                inflammation / post-hydrops, traumatic /
                                non-traumatic, infectious / non-infectious,
                                viral / bacterial / fungal / parasitic), the
                                morphological tree, and the treatment ladder.
                                COUNTED. ⚠️ SEE THE REPETITION NOTE BELOW —
                                this figure is inflated by the deck itself.
       lines 217–226    28 w  — THE PUPILLARY MEMBRANE: congenital and
                                acquired, and its two treatments. COUNTED.
       lines 227–260    33 w  — THE LENS BRANCH: cataract congenital versus
                                acquired, the three classification axes, and
                                extraction + aphakia rehabilitation. COUNTED.
       lines 261–329   143 w  — LEUKOCORIA: the definition, retinoblastoma as
                                most dangerous with its four treatments,
                                congenital cataract as most common with its
                                two, and the five remaining causes with a
                                one-line definition each plus the
                                treat-the-cause list. COUNTED.
       lines 330–343    68 w  — THE TAKE HOME MESSAGE, seven bullets.
                                COUNTED (they are the deck's own summary of
                                its content, and three of them state a fact
                                no other slide states outright).
       lines 344–348     4 w  — "Thank You", the date, the lecturer's email.
                                NOT counted.
       = 568 words claimed of the file's 597. Reconciles exactly:
         597 − 6 − 19 − 4 = 568.

     TERM 2 — 25 x 0 linked questions = 0. ⚠️ VERIFIED FROM DISK, NOT ASSUMED.
       Over `app\data\questions.ophtho.js`:
         grep -c "op-white"                     → 0
         grep -o "chapter: *[\"']op-[a-z-]*"    → 21 distinct chapters
                                                  summing to 138, and
                                                  `op-white` is not one of
                                                  them.
       ⚠️ The two-form grep is the one that matters: this file writes the
       field BOTH as `chapter:'op-va'` and `chapter: 'op-orbit'` (with a
       space), so a single-pattern grep under-reports it. Both forms were
       captured; the 21 chapters sum to exactly 138, which is the module
       total in `MEMORY.md`, so nothing was missed.
       SO: NO QUESTION IN THE MODULE CARRIES chapter:'op-white'. The LECTURE
       side of the §14.2 floor does all the work, and every section's `qs` is
       legitimately empty — the same audited case as `op-trauma`,
       `op-systemic` and `op-insid`. Nothing must be "fixed" by linking
       another chapter's questions here.

     max(568 · 0) = 568 → ⚠️ BELOW THE FLOOR. **THE 600-WORD FLOOR GOVERNS,
     AND IT IS THE ONLY TERM THAT SAYS ANYTHING.** Operative ceiling per
     §14.1 is ~2,400 body words / ~10 printed pages, and this chapter comes
     nowhere near it.

     ⚠️ The `theory-plan.md` table gives this chapter 642 words. That is
     `pdftotext`'s count of the PDF; the CACHE on disk is 597, and §14.1 says
     to count the cached file. The 45-word difference is not chased.

   ⚠️ DECK-SHAPE CHECK (§14.1's diagram-deck rule) — AND THE PER-PAGE FIGURE
   IS THE DECISIVE ONE, NOT THE PER-LINE FIGURE.
     · per line: 568 words over 201 non-blank lines = **2.83 w/line**, just
       above the ~2 that marks a labelled-diagram deck. Marginal, so it
       decides nothing on its own.
     · per page: **597 words over 21 pages = 28 words a page.** That is a
       LABEL-AND-DIAGRAM deck by any reading — the fourth pattern
       `theory-plan.md` identifies from the `L9` calibration read. TERM 1
       here is measuring **tree nodes and figure captions, not teaching.**
     · ⚠️ AND TERM 1 IS INFLATED BY THE DECK'S OWN REPETITION. Lines 86–184
       are ONE aetiological tree revealed FIVE TIMES with increasing depth
       (86–100 → 101–120 → 121–134 → 135–156 → 157–184); every reveal
       reprints the nodes above it. `Congenital`/`Acquired` is printed five
       times, `Keratoconus`/`Buphthalmos` three, `Traumatic`/`Non-traumatic`
       three. **The distinct content of that 131-word block is roughly 55
       words.** So the honest TERM 1 is nearer **490** than 568 — further
       below the floor, not nearer it. Stated rather than used, since the
       floor governs either way.

   ⚠️⚠️ ENTITY FLOOR, COUNTED BEFORE WRITING — THE EXPECTED OVERRUN IS SAID
   UP FRONT, NOT DISCOVERED IN COMPRESSION. This is the `ent-dysph` survey
   shape in its purest form: a differential is BY DEFINITION many entities
   thinly stated, and here the bank files ZERO questions, so TERM 2 is not
   merely low but nil.

     DISTINCT ENTITIES, COUNTED FROM THE DECK: 21.
       Corneal (11) — anterior segment dysgenesis · Peters anomaly ·
         sclerocornea · corneal keloid · corneal dermoid · intrauterine-
         infection scar · post-traumatic scar · infectious keratitis ·
         immunological keratitis · keratoconus (post-hydrops) ·
         buphthalmos (post-hydrops).
       Pupillary aperture (2) — persistent pupillary membrane ·
         inflammatory (uveitic) membrane.
       Lens (2) — congenital cataract · acquired cataract.
       Retro-pupil (6) — retinoblastoma · ROP · Coats disease · persistent
         fetal vasculature · toxoplasma/toxocara granuloma · retinal
         dysplasia.
     At §14.1's ~90 w of floor each that is **~1,890 words BEFORE a single
     framework slide** — more than three times TERM 1 and more than three
     times the floor.

     ⚠️ BUT THAT NUMBER IS NOT THE FORECAST, because 9 of the 21 are HELD TO
     A ROW plus a cross-reference rather than written — see the block below.
     Costing them at ~25 w each instead of ~90 removes ~585.

     FRAMEWORK SLIDES, COSTED ONE BY ONE (§14.1's `ent-neck` rule):
       the normal front view + the peripheral/central split       ~90
       the three-level sort of a central white                    ~70
       the clinical-picture chart — 3 symptoms + the sign branches ~110
       corneal transparency: 3 requirements x 2 states (a 3x2
          grid costed at rows x columns per `ent-phon`)           ~110
       the AETIOLOGICAL TREE, ~14 leaf nodes                      ~200
       the MORPHOLOGICAL tree — 4 shapes with their examples      ~100
       the corneal treatment ladder, 3 rungs                       ~60
       the pupillary-membrane block (2 causes, 2 treatments)       ~80
       the lens branch — 3 classification axes + treatment         ~90
       leukocoria: definition + most-dangerous/most-common pair
          + RB's 4 treatments + cataract's 2                      ~150
       the six remaining causes, one definition each              ~170
       the treat-the-cause grid (4 rows)                           ~60
       ### sub-headings, counted as lines not as free (§14.3a)     ~45
                                                          = ~1,335

     Entities-written-in-full (12 x ~90 = ~1,080) and entities-held-to-a-row
     (9 x ~25 = ~225) overlap the framework by their "what it is" lines,
     ~700 w, which are written INSIDE the tree and leukocoria blocks.

     REALISTIC FLOOR ≈ 1,080 + 225 + 1,335 − 700 ≈ **1,940 words**, i.e.
     **~3.2x TERM 1 and ~3.2x the 600 floor**. At the ÷240 estimator that is
     **~8 printed pages — INSIDE the ~10-page operative ceiling.** NO SPLIT
     PROPOSED and none is near. **A short, complete chapter is the correct
     outcome here** and no padding toward 2,400 was done: `op-orbit-mass`
     prints at 7 pages and is not a defect.

     ⚠️ WHY THE OVERRUN IS NOT A COMPRESSION FAILURE. 568 words of deck is
     21 entities' worth of TREE — a node is a name, and a name is not a
     fact anybody can revise from. Reaching 600 would mean printing the tree
     and defining nothing in it, which is the deck's own weakness, not a
     format to copy. §14.1: the budget is a ceiling on words, never a licence
     to delete a protected fact; here it is a FLOOR that the content clears
     for a structural reason, stated in advance.

   ============================================================================
   ⚠️⚠️ WHAT THIS CHAPTER DOES NOT REWRITE — NINE ENTITIES ALREADY OWNED BY
   MERGED CHAPTERS. Each was greped in `app\data\theory.ophtho.js` BEFORE its
   row was written, and each is handled by the DISCRIMINATION plus a
   whole-line italic cross-reference (§14.3a's fourth line kind), never by
   re-derivation. NO REGISTER ROW IS OPENED FOR THESE — a merged receiver
   already has the fact.

     · THE RED REFLEX AND ITS COLOUR GRID -> `op-pupil` (MERGED). `pup-9`
       carries the whole grid — normal red, black shadows, absent, grey,
       yellow/white — AND the rule "leukocoria in a child is retinoblastoma
       until proved otherwise", AND the pupil-colour triad without an
       ophthalmoscope. wht-2 and wht-7 point there and do not restate it.
     · PUPIL COLOUR AND THE CATARACT APPEARANCES -> `op-va` (MERGED).
       `va-13` prints the four-row pupil-colour / red-reflex table and the
       four appearances (IMSC, MSC, hypermature shrunken, Morgagnian).
       wht-6 gives the deck's three AXES only and points at `va-13`.
     · CATARACT AS A DISEASE -> `op-cat` (MERGED, 11 sections). `cat-2` is
       the three-axis classification, `cat-3` the seven cause groups, `cat-5`
       maturity with the shadow test and the red-reflex column, `cat-11`
       paediatric cataract, leukocoria and the "exclude retinoblastoma,
       urgent B-scan + MRI" rule. wht-6 writes only what L33,34 states.
     · CATARACT SURGERY AND APHAKIA -> `op-cat-surg` (MERGED). `cts-4` the
       techniques, `cts-7` aphakia and its correction. L33,34 prints only
       "Extraction, followed by visual rehabilitation of aphakia"; wht-6
       keeps that clause and points at `cts-7`.
     · KERATOCONUS AND ACUTE HYDROPS -> `op-cornea-surg` (MERGED). `cor-12`
       carries ectasia, Vogt striae, Munson sign, topography, the six-rung
       ladder, and defines **acute hydrops as sudden stromal oedema from a
       rupture of Descemet membrane** — which is the mechanism L33,34's
       "post-hydrops" branch depends on and never states. Cited, not
       re-derived.
     · BUPHTHALMOS -> `op-glauc` (MERGED). `glc-17` carries congenital
       glaucoma's corneal oedema, **Haab's striae**, enlarged corneal
       diameter, and the clear-versus-opaque-cornea operation split. wht-4
       names it as a post-hydrops cause and points there.
     · INFECTIOUS KERATITIS, ALL FOUR ORGANISMS -> `op-cornea` (MERGED).
       `cor-3` bacterial, `cor-4` fungal, `cor-5` HSV, `cor-6` HZO, `cor-7`
       acanthamoeba, `cor-8` the four-way discrimination grid. wht-4 keeps
       only the deck's own viral/bacterial/fungal/parasitic split.
     · IMMUNOLOGICAL KERATITIS -> `op-cornea-surg` (MERGED). ⚠️ EXPECTED TO
       BE A GAP AND IT IS NOT: `cor-18` carries marginal keratitis, Mooren
       ulcer and PUK with their mechanisms, associations and management,
       from `L15,16` lines 368–377. wht-4 and wht-5 cite it.
     · KERATOPLASTY -> `op-cornea-surg` (MERGED). `cor-19` carries the three
       indication groups, the contraindications and the PKP/DALK/DSAEK/DMEK
       comparison. L33,34's whole treatment slide is three words; wht-5
       keeps the ladder and points at `cor-19`.

     Also cross-referenced, not rewritten: `orb-17` (evisceration /
     enucleation / exenteration, defined) for retinoblastoma's surgical
     rung; `cor-1` (the corneal layers, the endothelial pump, the orthogonal
     stromal lamellae) behind the transparency triad; `cor-24` (irregular
     astigmatism and why a rigid lens works) behind the "refractive
     correction" rung; `orb-16` (ORBITAL dermoid cyst as a choristoma) beside
     the CORNEAL dermoid, which is a different lesion.

   ============================================================================
   ⚠️ CROSS-CHAPTER DEFERRALS (§14.5) — named, so each is a promise and not a
   deletion. ⚠️ NO QUESTION FILED IN THIS CHAPTER CAN BE HARMED BY ANY OF
   THEM, because this chapter has NO questions at all.

     ROW 1 — RETINOBLASTOMA AS A TUMOUR: biology, genetics, staging, the
       work-up.                                                  -> `op-onc`
       ⚠️⚠️ **THIS IS NOT A NEW ROW. `op-cat` ALREADY OPENED IT** — §14.5
       register, `| op-cat | Retinoblastoma and the leukocoria differential
       as a TUMOUR | op-onc | ☐ |`. It is the SAME fact and the SAME
       receiver, so per the brief it is pointed at rather than duplicated.
       Two chapters converging on one owed fact is now the THIRD time in
       this module (after `op-systemic`+`op-insid` on diabetic retinopathy,
       and `op-glauc`+`op-va` on L3,4 sl.24–26).
       ⚠️ WHAT THIS CHAPTER ADDS TO THAT ROW rather than deferring: L33,34 is
       the only deck in the module that prints **retinoblastoma's treatment**
       — chemoRx, radioRx, laser Rx, surgical (enucleation, exenteration) —
       and the only one that calls it a **malignant tumour of the
       photoreceptors**. Both are written in wht-7. `op-onc` therefore
       inherits a PARTLY WRITTEN entity and should cross-reference wht-7 for
       the treatment list. Receiver is blocked on a visual read (`L24`,
       78 pp, rasterised text).

     ROW 2 — ROP AS RETINAL DISEASE: the three zones, extent in clock hours,
       the staging, threshold disease (5 contiguous or 8 non-contiguous
       clock hours in zone I or II with 'plus' disease), cryotherapy versus
       laser, and the 75 % / 25 % outcome figures.               -> `op-ret`
       ✅ **THE RECEIVER'S OWN DECK PRINTS ALL OF IT** — `L19.2) Retinal
       Vascular Disorders` lines 362–395, which is text-sufficient. This row
       costs L33,34 nothing and is deliverable today; `op-ret` is not
       blocked on this one. **Kept here:** the DEFINITION and this deck's own
       treatment list, because `L19.2`'s modality list is cryo + laser only
       and L33,34 adds **intravitreal anti-VEGF and PPV** — a genuine
       addition, written in wht-8.

     ROW 3 — UVEITIS AS A DISEASE, behind the acquired inflammatory
       pupillary membrane: the entity, its anatomical classification, cells
       and flare, posterior synechiae.                          -> `op-uvea`
       L33,34 prints the single word "uveitis" as an example, so what is
       deferred is the entity and not a slide. ⚠️ RECEIVER BLOCKED ON A
       VISUAL READ — `L13,14) Uvea & Sclera` extracts ZERO characters over
       41 pages and has no cache at all. Three existing register rows
       already flag this receiver as blocked; this one adds a fourth.

   ⚠️⚠️ AND FOUR THINGS THAT ARE **NOT** DEFERRED, DELIBERATELY — REVERSE
   NOTICES, WRITTEN HERE BECAUSE THE MODULE HAS NO OTHER SOURCE. Each stem
   was greped across all 27 cached decks and across `theory.ophtho.js`:

     · **COATS DISEASE.** `Coats` returns L33,34 alone. (⚠️ The `L1,2` hit is
       a FALSE POSITIVE — line 33, "Coats of the Eyeball", the tunics.)
       `telangiect` returns L33,34 alone, one line. Zero hits in the merged
       theory file. **This deck is the module's only source.**
     · **PERSISTENT FETAL VASCULATURE.** `hyaloid` returns L33,34 alone;
       `fetal vascul` and `foetal vascul` return **zero across all 27
       decks**, the deck's own words being split across a garbled slide.
     · **TOXOCARA / PARASITIC RETINAL GRANULOMA.** `toxocar` returns L33,34
       alone. (`toxoplasm` also hits `L23` line 326 — but as "toxoplasmic
       uveitis and retinitis" in a list of AIDS-related disease, not as a
       leukocoria cause and with no definition.)
     · **RETINAL DYSPLASIA, and the three congenital corneal anomalies.**
       `dysplasia`, `Peters`, `sclerocorne`, `anterior segment dysgenes` and
       `keloid` each return **L33,34 and nothing else** across 27 decks, and
       **zero** across `theory.ophtho.js`.
     Deferring any of these would repeat the `central serous
     chorioretinopathy` failure `op-systemic` flagged — a promise the
     material cannot keep. **`op-ret` should CROSS-REFERENCE wht-8, and
     `op-ant` (which has NO DECK OF ITS OWN) should cross-reference wht-4,
     rather than rewriting either.**

   ⚠️ ROWS THIS CHAPTER ADDS TO THE REGISTER, to be copied into
   START-HERE.md §14.5 by the hub — TWO NEW, ONE POINTER:
     | `op-white` (L33,34 ll.261–286) | ⚠️ **DUPLICATE — DO NOT OPEN.**
       Retinoblastoma as a tumour is already owed to `op-onc` by `op-cat`.
       Note against that existing row instead: **L33,34 is the module's only
       source for RB's four treatment modalities and the
       "tumour of the photoreceptors" definition, and both are written in
       `wht-7`** | `op-onc` | pointer, not a new row |
     | `op-white` (L33,34 ll.287–329) | ROP as retinal disease — zones,
       clock hours, staging, threshold disease, cryo vs laser, 75 %/25 %.
       ✅ receiver's own deck `L19.2` ll.362–395 prints it and is
       text-sufficient | `op-ret` | open |
     | `op-white` (L33,34 ll.217–226) | Uveitis as a disease — the entity
       behind the acquired inflammatory pupillary membrane | `op-uvea` |
       open ⚠️ receiver blocked on a visual read (`L13,14`, 41 pp, zero
       characters, no cache) |

   ============================================================================
   GAPS — ANSWERED AND TAGGED, NOT DECLARED (§4). ⚠️ EVERY ONE WAS GREPED AS
   A STEM ACROSS ALL 27 CACHED DECKS **AND** ACROSS THE MERGED
   `theory.ophtho.js` BEFORE BEING CALLED A GAP. FOUR THINGS EXPECTED TO BE
   GAPS TURNED OUT PRINTED, AND ALL FOUR CHANGED WHAT IS WRITTEN BELOW:

     ✅ NOT A GAP — ACUTE HYDROPS. L33,34 makes "post-hydrops" a whole branch
        of its tree and never says what hydrops is. `L15,16` defines it —
        **sudden stromal oedema from a rupture of Descemet membrane** — and
        the MERGED `cor-12` carries it. SOURCED and cross-referenced in
        wht-4, not supplied.
     ✅ NOT A GAP — IMMUNOLOGICAL KERATITIS. A leaf node here with no
        content. `L15,16` lines 368–377 and the MERGED `cor-18` carry
        marginal keratitis, Mooren ulcer and PUK in full. SOURCED.
     ✅ NOT A GAP — ROP. Expected to need supplying; `L19.2` lines 362–395
        print zones, extent, staging, threshold disease, both modalities and
        the outcome figures. This is the brief's "check the deck against the
        MODULE" rule paying out — the sixteenth time.
     ✅ NOT A GAP — BUPHTHALMOS' CORNEA. The tree names it and stops.
        `L12` and the MERGED `glc-17` carry corneal oedema, **Haab's
        striae** (breaks in Descemet from stretching) and enlarged corneal
        diameter. SOURCED.

   THE REAL GAPS, each settled by proving a negative across 27 decks AND the
   merged theory file, and each answered in ONE tagged clause:

     1. **PETERS ANOMALY.** Printed three times as a name, defined nowhere;
        `Peters` returns L33,34 alone. Supplied in wht-4: a central corneal
        opacity with absent posterior stroma, Descemet and endothelium,
        often with iridocorneal or keratolenticular adhesions.
     2. **SCLEROCORNEA.** Same — name only, L33,34 alone. Supplied: the
        cornea is opaque and vascularised like sclera, classically
        PERIPHERAL and sometimes total, with no clear limbus.
     3. **ANTERIOR SEGMENT DYSGENESIS.** The deck's own umbrella term, used
        as a heading and never defined. Supplied: maldevelopment of the
        structures derived from the neural crest at the front of the eye —
        cornea, angle, iris and lens — which is why the deck files
        "unclassified", Peters and sclerocornea beneath it.
     4. **CORNEAL KELOID and CORNEAL DERMOID.** Names only; `keloid`
        returns L33,34 alone. Supplied: a keloid is exuberant fibrous
        overgrowth after a corneal wound; a dermoid is a **CHORISTOMA** —
        normal tissue in an abnormal place — typically a pale limbal mass
        with hair follicles. ⚠️ The choristoma word is SOURCED, from the
        merged `orb-16`, which uses it of the ORBITAL dermoid cyst; the
        corneal/limbal lesion itself is not printed anywhere.
     5. **WHY "CUSTOMISED" KERATOPLASTY.** L33,34's whole corneal treatment
        slide is "Observation · Refractive correction · Keratoplasty
        (customised)". The reason the operation is customised — the depth of
        the opacity chooses the graft — is not stated. Supplied in wht-5 in
        one clause and pointed at `cor-19`, which prints the four operations
        by depth.
     6. **WHY A LOCALISED OPACITY IS "REFRACTIVELY CORRECTED".** The rung is
        printed with no rationale. Supplied: a localised scar distorts the
        surface, so the blur is IRREGULAR ASTIGMATISM and a rigid lens
        resurfaces it — the mechanism being `cor-24`'s, which is cited.

   ============================================================================
   DEFECT NOTES (§4b — noted, never disputed), each one line in the body:
     · ⚠️ **THE EXTRACTED CLINICAL-PICTURE CHART HAS MISALIGNED COLUMNS**
       (lines 36–66). Under the four sign-headings "Transparent | Membrane |
       Lens | Retro-pupil", the extractor drops "Regular arrangement of
       collagen fibers → scar", "Dehydrated state → oedema" and "No vessels,
       no Myelin" under the wrong ones. **All three belong to the CORNEA
       column**, which lines 71–85 prove by printing exactly those three as
       the cornea's physiology. Read that way in wht-2 and wht-3; recorded,
       not disputed.
     · ⚠️ **LINES 287–329 INTERLEAVE FIVE CAPTIONS INTO ONE UNREADABLE
       BLOCK.** The five leukocoria definitions are printed as five figure
       captions whose lines the extractor has shuffled together. Every word
       reconstructs into exactly five sentences with nothing left over, and
       the reconstruction is written in wht-8:
         ROP — "proliferative retinopathy in preterm and low birth weight
           infants with subsequent extensive p[re]retinal fibrosis and
           tractional retinal detachment"
         Coats — "peripheral retinal telangiectasia with extensive
           subretinal lipid exudation and variable extent exudative retinal
           detachment"
         PFV — "persistence of the hyaloid system with variable extent
           posteriorly, lenticularly, or anteriorly"
         Toxoplasma / Toxocara / parasitic — "retinal granulomas in the
           retina / choroid"
         Retinal dysplasia — "congenital malformation of the retina"
       ⚠️ The reconstruction is a READING of a garbled extraction, not a
       supplied fact — flagged as such in the body so the hub can check it
       against a render if it ever wants to.
     · L33,34 line 301 prints **"piretinal"** → preretinal. Recorded in
       wht-8.
     · The aetiological tree is printed FIVE times with progressive reveal
       (lines 86–184), so the same nodes are counted up to five times by
       `wc -w`. Stated in the budget block; no body consequence.
     · Line 189–191 prints "Anterior Segment Dysgenesis scar /
       Post-infectious / Post-infectious scar" as three stacked overlay
       labels on one figure — duplicated text from the figure's build
       animation, not three separate entities. Read as two.
     · Line 26 is a bare "The White Eye" slide with no content at all — a
       full-page photograph. Recorded in the omission note.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection (§14.2) — moot, the chapter links
        no questions.
     2. The title slide, author, affiliation and "Disclosures: None"
        (lines 3–11), and the closing "Thank You" / date / email
        (lines 344–348). The arithmetic is in the budget block.
     3. The bare photograph slide at line 26.
     4. The TAKE HOME MESSAGE as a section of its own. §14.3 bans closing
        summary sections (100 % duplication, measured). Its seven bullets
        were COUNTED in TERM 1 and are distributed: bullet 1 → wht-1,
        bullet 2 → wht-2, bullet 3 → wht-2 and wht-5, bullet 4 → wht-4,
        bullet 5 → wht-6, bullet 6 → wht-6, bullet 7 → wht-7. **Three of
        them state something no other slide states outright** — that
        treatment depends on the cause, that corneal scars follow healed
        inflammation OR hydrops, and that a white pupil in a child may be
        retinoblastoma — so none was dropped.
     5. Question ids in body text, teaching voice, per-fact citation clauses
        (one Src line per section).
     6. Retinoblastoma's genetics, staging and work-up. Deferred — see the
        register block; `op-cat` owns the row.
     7. The full cataract account. L33,34 prints a 3-axis skeleton that
        `cat-2`, `cat-3` and `cat-5` already carry with their stages,
        shadow test and acuity ladder; wht-6 keeps the skeleton and points.
     8. **NO PADDING TOWARD THE ~2,400-WORD CEILING.** The forecast was ~8
        pages and the brief is explicit that a short complete chapter is a
        correct outcome. Nothing was added to close the gap.

   ============================================================================
   ⚠️ FINAL MEASUREMENT — DELIBERATELY ABSENT FROM THIS HEADER.

   §14.1's header rule has been broken eleven times in this project, most
   recently on `op-va`. `op-trauma`, `op-systemic`, `op-insid` and `op-cat`
   answered it by stating NO numbers in the file and reporting them to the
   hub instead. THAT IS COPIED HERE. The counter was run over this file ON
   DISK after the final content edit and after the §14.3a layout pass; the
   figures are in the completion report, not in this file, because a number
   written into the file must be re-verified after every subsequent edit —
   and this file WILL be edited again when it is spliced into
   `app\data\theory.ophtho.js`.

   ⚠️ TWO DEFINITIONS OF "BODY WORDS" ARE IN USE AND THEY DIFFER. The command
   below reports BOTH: excluding `Src:` lines, and including them. The hub's
   canonical definition is `W(s.body)` over every section, **`Src:` INCLUDED**
   (`theory-plan.md`, "Measurement"). Both are labelled in the report.

     node -e "const vm=require('vm'),fs=require('fs');
       const c={};vm.createContext(c);
       vm.runInContext(fs.readFileSync('content/ophtho/theory-drafts/op-white.draft.js','utf8'),c);
       const ch=c.THEORY_DRAFT['op-white'];
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
   No nested bullets anywhere — the renderer has never been given one.
   ============================================================================ */

var THEORY_DRAFT = {
  'op-white': {

    intro: 'A white eye is white in the wrong place. Normal white is peripheral sclera; disease is white at the CENTRE — cornea, pupillary membrane, lens, or behind the lens. Each entity is written in depth elsewhere; what this chapter carries is the sort.',

    sections: [

{
  id: 'wht-1', w: 'must',
  h: 'The front view of the eye — where white is normal, and where it is not',
  body: [
    '**The deck’s opening move:** describe the normal front view by colour, then ask which colour is in the wrong place.',
    '',
    '### The normal front view, by colour',
    '',
    '|What is seen|Its normal appearance|',
    '|---|---|',
    '|**Sclera**|**WHITE** — and it is peripheral|',
    '|**Cornea**|**TRANSPARENT** — colourless, so what shows through it is the iris|',
    '|**Iris**|**brown / grey / blue**|',
    '|**Pupil**|**BLACK** — an aperture onto the lens, which is itself clear|',
    '',
    '### The one question that sorts the whole chapter',
    '- **Where is the white?** **Peripheral white is the sclera** and is normal.',
    '- **⚠️ CENTRAL white is the disease** — and only four structures can produce it.',
    '',
    '### The four levels of a central white eye',
    '',
    '|Level|The structure|What is wrong with it|',
    '|---|---|---|',
    '|**1**|**CORNEA**|opacity — **localised or generalised**|',
    '|**2**|**PUPILLARY APERTURE**, in front of the lens|a **MEMBRANE** across it|',
    '|**3**|**LENS**|**CATARACT**|',
    '|**4**|**RETRO-PUPILLARY**, behind the lens|**LEUKOCORIA** from posterior segment disease|',
    '',
    '- **⚠️ The order is anatomical, front to back**, and it is the order the examination follows.',
    '- **The deck’s own summary:** the white eye involves a lesion of the **cornea, pupillary membrane, lens or posterior segment**.',
    '',
    'Src: L33,34 lines 12–35, 330–331'
  ].join('\n'),
  qs: []
},

{
  id: 'wht-2', w: 'must',
  h: 'The clinical picture — three symptoms, and the signs that place the white by depth',
  body: [
    '### Symptoms — three, and only one of them is about vision',
    '- **Diminution of vision:** variable in degree, and it is the complaint that brings the patient.',
    '- **Disfigurement:** the white itself. A quiet eye with normal vision may still be presented for this alone.',
    '- **According to the cause:** everything else — pain, watering, photophobia — belongs to the underlying lesion, not to the whiteness.',
    '',
    '### Signs — the sorting run',
    '- **First, confirm the diminution of vision** and record its degree.',
    '- **Then locate the opacity:** is the white in the **CORNEA**, or in the **PUPIL**?',
    '- **⚠️ Then go deeper, in one order:** **aperture → lens → retro-pupil**.',
    '',
    '### What each level looks like',
    '',
    '|Level|The sign that names it|',
    '|---|---|',
    '|**Cornea**|the white is **in front of the iris** and the iris detail behind it is lost|',
    '|**Aperture**|a **membrane** across an otherwise clear pupil, **generally pigmented, occasionally white**|',
    '|**Lens**|**cataract** — the whole pupil whitens, the iris stays normal|',
    '|**Retro-pupil**|**leukocoria** — a white reflex from behind a clear cornea and a clear lens|',
    '',
    '- **⚠️ The instrument for levels 3 and 4:** the **red reflex**.',
    '- **A media opacity —** silhouetted as a **dark shadow** against the reflex.',
    '- **A retro-pupillary lesion —** a **WHITE or YELLOW reflex** instead.',
    '- **⚠️ And the general rule:** **treatment depends on the cause**, at every level.',
    '- **There is no treatment for "a white eye" —** only for what made it white.',
    '',
    '*The full red-reflex colour grid — normal, black shadows, absent, grey, yellow/white — and the pupil-colour triad are `pup-9`. The pupil-colour and cataract-appearance table is `va-13`.*',
    '',
    '*⚠️ Defect note: the extracted chart drops the three corneal transparency requirements under the wrong sign columns; lines 71–85 print them as the cornea’s, and they are read that way here.*',
    '',
    'Src: L33,34 lines 36–66, 332–335'
  ].join('\n'),
  qs: []
},

{
  id: 'wht-3', w: 'must',
  h: 'Corneal transparency — the three requirements, and the three ways they fail',
  body: [
    '**The deck’s frame:** the cornea is transparent for three physiological reasons, and each has one pathological inverse. Every corneal white eye is one of the three.',
    '',
    '|Requirement — physiological|Failure — pathological|What is then seen|',
    '|---|---|---|',
    '|**A DEHYDRATED state**|**oedema**|**BLUISH discolouration** of the cornea|',
    '|**REGULAR arrangement of collagen fibres**|**irregular arrangement**|**SCAR** — the commonest white cornea|',
    '|**NO vessels, NO myelin**|**vascularisation**, carrying **MYELINATION** with it|a vascularised, opaque cornea|',
    '',
    '### The three, used at the bedside',
    '- **A BLUE-grey haze:** think oedema, and therefore a pressure or an endothelial problem, not a scar.',
    '- **A dense WHITE patch:** think scar — collagen laid down irregularly after healing.',
    '- **⚠️ Visible VESSELS crossing the limbus:** the cornea has been chronically inflamed. Vessels also carry the graft-rejection risk that decides prognosis.',
    '',
    '*The mechanism behind requirement one is the endothelial Na/K pump, and behind requirement two the orthogonal stromal lamellae — both `cor-1`, with the layer table and the rule that Bowman and endothelium never regenerate.*',
    '',
    'Src: L33,34 lines 67–85; L15,16 (cited only, `op-cornea`’s deck)'
  ].join('\n'),
  qs: []
},

{
  id: 'wht-4', w: 'must',
  h: 'Corneal opacity by cause — the tree, congenital and acquired',
  body: [
    '**The top split:** every corneal opacity is **CONGENITAL** or **ACQUIRED**, and the deck builds the acquired half two levels deeper.',
    '',
    '### Congenital — two groups',
    '',
    '|Group|Members|',
    '|---|---|',
    '|**Anterior segment dysgenesis**|**unclassified** · **Peters anomaly** · **sclerocornea**|',
    '|**Other congenital**|**corneal keloid** · **corneal dermoid** · **scar from intrauterine infection**|',
    '',
    '- **Anterior segment dysgenesis:** maldevelopment of the neural-crest-derived front of the eye — cornea, angle, iris, lens *(definition not in course material)*.',
    '- **Peters anomaly:** a **CENTRAL** corneal opacity with absent posterior stroma, Descemet and endothelium, often with iris or lens adhesions *(not in course material)*.',
    '- **Sclerocornea:** cornea opaque and vascularised like sclera, classically **PERIPHERAL**, sometimes total, with **no clear limbus** *(not in course material)*.',
    '- **Corneal keloid:** exuberant fibrous overgrowth following a corneal wound *(not in course material)*.',
    '- **Corneal dermoid:** a **CHORISTOMA** — normal tissue in an abnormal place — as a pale limbal mass *(not in course material)*.',
    '- **⚠️ "Choristoma" is SOURCED —** `orb-16` uses it of the ORBITAL dermoid cyst, a different lesion.',
    '',
    '### Acquired — two mechanisms, and the deck names them both',
    '- **The deck’s summary line:** corneal scars may follow **healed inflammation** or **hydrops**.',
    '',
    '### Healed inflammation',
    '',
    '|Branch|Sub-branch|Members|',
    '|---|---|---|',
    '|**TRAUMATIC**|**accidental**|any perforating or abrading injury|',
    '|**TRAUMATIC**|**surgical**|the scar of a previous operation|',
    '|**NON-TRAUMATIC**|**INFECTIOUS (keratitis)**|**viral · bacterial · fungal · parasitic**|',
    '|**NON-TRAUMATIC**|**NON-INFECTIOUS**|**immunological keratitis**|',
    '',
    '### Post-hydrops — two causes, one mechanism',
    '- **What hydrops is:** **sudden stromal oedema from a rupture of Descemet membrane**, sourced from `L15,16`, not from this deck.',
    '- **⚠️ Why it scars:** the oedema resolves once the endothelium re-covers the break.',
    '- **The stroma then heals —** with **IRREGULAR COLLAGEN**: requirement two of `wht-3`, permanently lost.',
    '- **Keratoconus:** progressive thinning and protrusion; **acute hydrops** is its recognised complication.',
    '- **Buphthalmos:** the stretched congenitally glaucomatous eye; the same Descemet breaks are **Haab’s striae**.',
    '',
    '*The four infectious keratitides with their organisms, signs and discrimination grid are `cor-3` to `cor-8`. Immunological keratitis — marginal keratitis, Mooren ulcer, PUK — is `cor-18`. Keratoconus, Vogt striae, Munson sign and the hydrops definition are `cor-12`. Buphthalmos, Haab’s striae and congenital glaucoma are `glc-17`.*',
    '',
    '*⚠️ Note: this tree is printed five times over five slides, each reveal adding one level. It is ONE tree, not five.*',
    '',
    'Src: L33,34 lines 86–184, 336–337; L15,16, L12 (cited only)'
  ].join('\n'),
  qs: []
},

{
  id: 'wht-5', w: 'high',
  h: 'Corneal opacity by shape, and the three-rung treatment ladder',
  body: [
    '**The second axis:** the same opacity is also classified **morphologically**, and this is the axis that decides whether vision is lost.',
    '',
    '|Shape|Where|The deck’s examples|',
    '|---|---|---|',
    '|**Localised — CENTRAL**|on the visual axis|**Peters anomaly · anterior segment dysgenesis · post-infectious**|',
    '|**Localised — PERIPHERAL**|off the visual axis|**sclerocornea · post-infectious · immunological keratitis**|',
    '|**Localised — IRREGULAR**|any shape, any site|**traumatic**|',
    '|**GENERALISED (total)**|the whole cornea|—|',
    '',
    '### ⚠️ Why the shape matters more than the size',
    '- **Central beats peripheral:** a small central scar can cost more acuity than a large peripheral one.',
    '- **Irregular is the worst optically:** it distorts the surface rather than simply blocking it.',
    '- **⚠️ And it explains the examples:** the two congenital anomalies sit in different rows.',
    '- **Peters is CENTRAL, sclerocornea PERIPHERAL —** that is their bedside distinction.',
    '',
    '### Treatment — three rungs',
    '',
    '|Rung|When it is enough|',
    '|---|---|',
    '|**Observation**|peripheral or off-axis opacity, acuity preserved|',
    '|**Refractive correction**|the opacity distorts rather than blocks|',
    '|**Keratoplasty (CUSTOMISED)**|the visual axis is obscured|',
    '',
    '- **Why refractive correction works:** a localised scar produces **IRREGULAR ASTIGMATISM**, and a rigid lens resurfaces the cornea optically *(mechanism not in course material)*.',
    '- **⚠️ What "customised" means:** the **DEPTH** of the opacity chooses the operation *(not in course material)*.',
    '- **So a full-thickness graft —** is not given for a purely anterior scar.',
    '',
    '*Why keratometry fails on an irregular cornea and why a rigid lens fixes it is `cor-24`. The four keratoplasties by depth — PKP, DALK, DSAEK, DMEK — with their indications and rejection rates are `cor-19`.*',
    '',
    'Src: L33,34 lines 185–216; L15,16 (cited only)'
  ].join('\n'),
  qs: []
},

{
  id: 'wht-6', w: 'must',
  h: 'The pupil, levels two and three — the membrane and the lens',
  body: [
    '### The pupillary membrane — a white ACROSS the aperture, in front of the lens',
    '',
    '|Type|What it is|Appearance|',
    '|---|---|---|',
    '|**CONGENITAL**|**persistent pupillary membrane** — the embryonic membrane fails to regress|**generally PIGMENTED, occasionally WHITE**|',
    '|**ACQUIRED**|**inflammatory**, e.g. **uveitis**|an inflammatory membrane across the pupil|',
    '',
    '- **⚠️ The colour is the trap:** a persistent pupillary membrane is **usually pigmented, not white**.',
    '- **So it reaches this chapter —** only in its occasional white form.',
    '- **Treatment:** **observation**, or **surgical excision** if it obstructs the axis.',
    '- **The deck’s summary line:** pupillary membranes may be **congenital or acquired (inflammatory)**.',
    '',
    '### The lens — cataract',
    '- **The deck’s summary line:** cataracts may be **congenital or acquired**.',
    '- **⚠️ Congenital cataract:** filed by the deck under the **differential diagnosis of leukocoria**, with no separate account.',
    '- **That is where it belongs —** and `wht-7` takes it up there.',
    '',
    '**Acquired cataract — the three axes this deck prints:**',
    '',
    '|Axis|Divisions|',
    '|---|---|',
    '|**Morphological**|**cortical · nuclear**|',
    '|**Aetiological**|**age-related (senile) · complicated**|',
    '|**Extent**|**immature · mature (complete)**|',
    '',
    '- **Treatment:** **extraction, followed by visual rehabilitation of the aphakia** it creates.',
    '- **⚠️ Why the second half is not optional:** removing the lens removes **~+20 D** of power *(figure not in course material)*.',
    '- **An uncorrected aphakic eye —** has traded a white pupil for a blurred one.',
    '',
    '*The three axes in full, with the seven cause groups, the four maturity stages, the shadow test and the acuity ladder, are `cat-2`, `cat-3` and `cat-5`. The pupil-colour and appearance table is `va-13`. Aphakia and its correction are `cts-7`; the extraction techniques `cts-4`.*',
    '',
    '*Uveitis as a disease — the entity, its classification, cells and flare, posterior synechiae — is deferred to `op-uvea`.*',
    '',
    'Src: L33,34 lines 217–260, 338–341; L17, L18 (cited only, `op-cat`’s decks)'
  ].join('\n'),
  qs: []
},

{
  id: 'wht-7', w: 'must',
  h: 'Leukocoria — the white pupil in a child, and the two that head the list',
  body: [
    '**Leukocoria, defined by the deck:** *"white pupil in a child"*. It is the retro-pupillary level — cornea clear, aperture clear, and the white comes from behind.',
    '',
    '### ⚠️ The deck sorts it by two different questions at once',
    '- **Most DANGEROUS:** **retinoblastoma**.',
    '- **Most COMMON:** **congenital cataract**.',
    '- **⚠️ Why both must be asked:** the commonest cause and the lethal cause are **different diseases**.',
    '- **So a white pupil —** is never triaged on likelihood alone.',
    '',
    '### Retinoblastoma',
    '- **What it is:** a **MALIGNANT tumour of the PHOTORECEPTORS**.',
    '- **⚠️ The rule it generates:** leukocoria in a child is **retinoblastoma until proved otherwise**.',
    '- **Hence the red reflex —** checked at every paediatric eye examination.',
    '',
    '**Treatment — four modalities:**',
    '',
    '|Modality|Note|',
    '|---|---|',
    '|**chemoRx**|chemotherapy|',
    '|**radioRx**|radiotherapy|',
    '|**laser Rx**|—|',
    '|**Surgical**|**enucleation**, or **exenteration** for orbital extension|',
    '',
    '- **⚠️ The ladder’s logic:** the first three try to save the eye; **surgery is what is left when the tumour has outgrown them**.',
    '',
    '### Congenital cataract',
    '- **Treatment:** **observation**, or **extraction**.',
    '- **⚠️ Observation is not "do nothing":** it is the option only while the opacity is off-axis and vision is developing normally.',
    '',
    '*Retinoblastoma’s work-up — urgent B-scan plus MRI — and paediatric cataract’s amblyopia deadline, morphological patterns and causes are `cat-11`. The red-reflex grid that finds the white pupil is `pup-9`. Evisceration, enucleation and exenteration are defined side by side in `orb-17`.*',
    '',
    '*⚠️ For the hub: the tumour biology and staging of retinoblastoma are already owed to `op-onc` by `op-cat`; no second row is opened. The treatment list above and the "tumour of the photoreceptors" definition appear on no other deck in the module.*',
    '',
    'Src: L33,34 lines 261–286, 342–343'
  ].join('\n'),
  qs: []
},

{
  id: 'wht-8', w: 'must',
  h: 'The rest of the leukocoria differential — five more causes, defined, and treated by cause',
  body: [
    '**The deck’s third tier:** *"less dangerous and less common"* — ROP, Coats, PFV, toxoplasma, toxocara, retinal dysplasia, and others unnamed.',
    '',
    '|Cause|The deck’s definition|',
    '|---|---|',
    '|**Retinopathy of prematurity (ROP)**|**proliferative retinopathy in preterm, low-birth-weight infants**, with subsequent extensive **preretinal fibrosis** and **TRACTIONAL retinal detachment**|',
    '|**Coats disease**|**peripheral retinal TELANGIECTASIA** with extensive **subretinal LIPID exudation** and variable-extent **EXUDATIVE retinal detachment**|',
    '|**Persistent fetal vasculature (PFV)**|**persistence of the HYALOID SYSTEM**, of variable extent — **posteriorly, lenticularly, or anteriorly**|',
    '|**Toxoplasma · Toxocara · parasitic**|**retinal GRANULOMAS** in the **retina / choroid**|',
    '|**Retinal dysplasia**|**congenital malformation of the retina**|',
    '',
    '- **⚠️ The pattern worth carrying:** two of the five detach the retina, by **opposite mechanisms**.',
    '- **ROP PULLS it off —** tractional. **Coats FLOATS it off —** exudative.',
    '',
    '### Treatment — of the cause, never of the leukocoria',
    '',
    '|Cause|Treatment|',
    '|---|---|',
    '|**ROP**|**observation · laser · intravitreal anti-VEGF · PPV** (pars plana vitrectomy)|',
    '|**Granuloma**|**observation**|',
    '|**Retinal dysplasia**|**observation**|',
    '|**Coats**|**laser · cryo**|',
    '',
    '- **⚠️ Read the column, not the rows:** three of the four begin at **observation**.',
    '- **The urgency belongs to retinoblastoma —** which is why the deck ranks the list by danger.',
    '- **⚠️ PFV carries no treatment line** on this deck — recorded as printed, not filled in.',
    '',
    '*ROP in depth — the three zones, extent in clock hours, the staging, threshold disease and the cryo-versus-laser outcome figures — is `L19.2`’s and is deferred to `op-ret`. The two modalities above that `L19.2` does NOT print, anti-VEGF and PPV, are this deck’s own.*',
    '',
    '*⚠️ For the hub: Coats, PFV, toxocara granuloma and retinal dysplasia appear on NO other deck in the module and nowhere in the merged theory. They are written here, not deferred; `op-ret` should cross-reference this section rather than rewrite it.*',
    '',
    '*⚠️ Defect note: these five definitions are printed as five figure captions whose lines the extractor interleaves into one block (lines 287–329). Every word reconstructs into exactly five sentences with none left over; the deck prints "piretinal" for preretinal.*',
    '',
    'Src: L33,34 lines 287–329; L19.2 lines 362–395, L23 line 326 (cited only)'
  ].join('\n'),
  qs: []
}

    ]
  }
};
