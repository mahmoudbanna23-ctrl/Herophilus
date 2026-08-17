/* op-cat + op-cat-surg — "Cataract", Ophthalmology. Written 2026-08-17 under
   START-HERE.md §14 (slide-density revision notes), §14.1 (budget), §14.3a
   (layout) and §14.5 (deferral register), plus
   content\ophtho\theory-plan.md. Shape copied from
   content\ophtho\theory-drafts\op-trauma.draft.js and
   content\ophtho\theory-drafts\op-cornea.draft.js (the module's split
   precedent).

   ⚠️⚠️ THIS FILE HOLDS TWO CHAPTERS. The second key, `op-cat-surg`, is NEW
   and must be registered in app\data\modules.js by the hub — this file does
   not touch that shared file.

     `op-cat`       suggested title "Cataract — types, maturity and clinical
                    picture"
     `op-cat-surg`  suggested title "Cataract surgery, IOLs and the aphakic
                    eye"

   Naming follows the module's own descriptive style, e.g. `op-cornea` =
   "Cornea, keratitis and corneal trauma" / `op-cornea-surg` = "Corneal
   ectasia, dystrophies and surgery".

   ============================================================================
   THE SPLIT DECISION, AND IT WAS MADE BEFORE A WORD OF BODY TEXT WAS WRITTEN.

   FORECAST FOR ONE CHAPTER: ~4,200–4,500 body words, ~17–19 printed pages at
   the ÷240 estimator. That is roughly DOUBLE the ~10-page operative ceiling
   and well past the ~12-page split trigger. The forecast is itemised entity
   by entity below, framework slides one by one, grids at rows x columns, per
   §14.1.

   THE PRECEDENTS AGREE. The cornea deck is 3,053 cached words and was split
   into two chapters printing at 9 pages each. The orbit deck is 3,222 and
   printed at 14 pages, and had to be split AFTER writing. These two decks
   sum to 3,577 cached words — larger than either — and unlike orbit they are
   BOTH TEXT-SUFFICIENT, so nothing here is a caption standing in for a slide
   of teaching. The word count is the teaching.

   ⚠️ NO RENDER WAS DONE AND NONE WAS NEEDED. Both decks were written from the
   cache. CACHE INTEGRITY WAS CHECKED RATHER THAN ASSUMED, and it is a CLEAN
   POSITIVE on both files: a fresh `pdftotext -layout` of the two source PDFs
   returns 869 w / 351 lines for L17 against the cache's 874 / 354, and
   2,698 w / 651 lines for L18 against the cache's 2,703 / 654. The five-word
   difference in each is the cache's own SOURCE header line. THE CACHE IS THE
   WHOLE DECK, twice over.
   ⚠️ And `theory-plan.md`'s figure of 3,938 text words for this chapter is
   STALE — the real cached total is 3,577. Same shape as the plan's 3,511 for
   cornea against a 3,053 cache. Worth correcting in the plan.

   THE SEAM: MEDICAL vs SURGICAL — the same seam `op-cornea` chose.
     `op-cat`       definition, lens anatomy, classification, aetiology,
                    morphology, maturity, clinical picture, epidemiology,
                    complications, traumatic and paediatric cataract.
     `op-cat-surg`  the treatment decision, indications, pre-operative
                    assessment, surgical technique, IOLs, post-operative
                    complications, aphakia and pseudophakia, modern advances.

   WHY THIS SEAM AND NOT THE TWO NEAREST ALTERNATIVES:

     1. IT IS THE SEAM BOTH LECTURERS ALREADY DREW. `L17`'s own overview
        slide (lines 13–37) lists "Definition / Natural crystalline lens /
        Types / Clinical picture" and then "Treatment" as its last item, and
        `L18`'s learning objectives split the same way — "classify cataract
        by morphology and maturity" and "recognise the key signs" on one
        side, "outline surgical options and intraocular lens types" and
        "identify postoperative complications" on the other. The seam is
        read off the source, not imposed on it.
     2. ZERO QUESTIONS STRADDLE IT. The chapter has exactly ONE linked
        question, `opqb-t1-70` (nuclear cataract, myopic shift, "second
        sight"), and it sits wholly inside `op-cat` — section cat-4. The
        orbit split was chosen by which seam left fewest questions
        straddling; here the count is zero, which no other seam can beat.
     3. EVERY INBOUND REGISTER ROW LANDS ON ONE SIDE. The `op-va` staging row
        and both `op-trauma` rows are diagnosis-side; only "phaco vs ECCE"
        crosses, and it crosses as a one-line cross-reference.

     REJECTED — SPLIT BY DECK (`L17` = chapter 1, `L18` = chapter 2). Both
     decks teach BOTH halves: `L17` carries the treatment ladder, the surgery
     options and the whole aphakic-optics slide (spectacle 30 % magnification,
     contact lens 7–10 %, IOL 3 %, anisokonia, biometry), while `L18` carries
     the entire morphology, maturity and clinical-picture teaching. This seam
     would put aphakic optics in the "diagnosis" chapter and IOL types in the
     other, and the pre-op work-up would be written twice. It is the seam that
     maximises duplication.

     REJECTED — SPLIT BY AETIOLOGY (senile vs congenital/traumatic/
     complicated). It cuts the morphology teaching in half, because PSC is
     simultaneously a senile morphology and THE pattern of steroid, diabetic
     and uveitic cataract — one slide, two chapters. It also leaves the halves
     lopsided, since the ~1,900 words of surgical material would all fall in
     the senile half, and paediatric cataract surgery plus paediatric aphakia
     would straddle. §14.1 costs a grid whole; this seam splits three grids.

   ============================================================================
   DECK LABELS USED IN THE Src LINES:
     L17    = L17) Cataract I.txt  — "Cataract (Congenital, Complicated,
              Traumatic)", Prof. Nader Bayoumi. 28 slides. COUNTED.
     L18    = L18) Cataract II.txt — "THE LENS: Anatomy · Cataract · Surgery ·
              Complications", Dr Amr Said. 28 slides. COUNTED.
     L35,36 = L35,36) Chronic visual loss.txt   — cited only, NOT counted
     L26    = L26) Trauma II.txt                — cited only
     L25    = L25) Trauma I.txt                 — cited only
     L3,4   = L3,4) Clinical- Ocular examination.txt — cited only
     L7,8   = L7,8) Refractive errors.txt       — cited only
     L10    = L10) orbit.txt                    — cited only

   ============================================================================
   BUDGET — §14.1: budget = max(summed lecture words, 25 x linked questions),
   floor 600, cap 3,000. MEASURED FROM DISK BY LINE RANGE (§14.1(a)).

   TERM 1 — L17 (874 w in the cache):
     lines   1–  2     5 w — the cache's SOURCE header. NOT counted.
     lines   3– 12    20 w — title slide, author, affiliation, disclosures.
                             NOT counted.
     lines  13– 37    19 w — the OVERVIEW slide, a contents index. NOT counted
                             (§14.1's ILO-index precedent from `ent-swallow`).
     lines  38– 67   125 w — definition, lens anatomy, composition,
                             consistency, physiology. COUNTED.
     lines  68– 76     7 w — the classification title slide. COUNTED.
     lines  77– 96    39 w — the aetiological classification in full. COUNTED.
     lines  97–183   197 w — the whole MORPHOLOGICAL run: nuclear, the four
                             cortical stages, traumatic, thermal/complicated,
                             the six congenital patterns. COUNTED.
     lines 184–227   111 w — symptoms and signs. COUNTED.
     lines 228–241    54 w — epidemiology. COUNTED.
     lines 242–279    78 w — intumescence and lens-induced glaucoma. COUNTED.
     lines 280–310    55 w — the treatment-determinant ladder and surgery by
                             age. COUNTED (spent in `op-cat-surg`).
     lines 311–333    73 w — optical rehabilitation of aphakia and biometry.
                             COUNTED (spent in `op-cat-surg`).
     lines 334–349    86 w — the TAKE HOME MESSAGE slide. NOT counted — it is
                             a closing summary and every clause of it is on an
                             earlier slide this file already writes (one-third
                             dioptric power line 67, the aetiology line 82,
                             gradual painless DOV line 187, never worse than HM
                             line 217, the treatment/rehabilitation ladder
                             lines 296–324). §14.3 bans a closing summary
                             section at 100 % duplication; counting the slide
                             would bill the same content twice inside one file.
     lines 350–354     5 w — "Thank You", date, e-mail. NOT counted.
     = 739 words claimed of the file's 874.

   TERM 1 — L18 (2,703 w in the cache):
     lines   1– 18    34 w — SOURCE header, title slide, author. NOT counted.
     lines  19– 46    82 w — LEARNING OBJECTIVES. An ILO index. NOT counted.
     lines  47– 76    58 w — anatomy of the crystalline lens. COUNTED.
     lines  77–103   106 w — definition, the four-way overview, global burden,
                             the never-below-HM principle. COUNTED.
     lines 104–135   128 w — senile cataract symptoms and signs. COUNTED.
     lines 136–166   160 w — classification by morphology, three types with
                             their pearls. COUNTED.
     lines 167–202   167 w — classification by MATURITY and the shadow test.
                             COUNTED.
     lines 203–239   102 w — the morphological comparison grid, 7 rows x 3
                             columns. COUNTED.
     lines 240–271   134 w — pre-operative assessment, four boxes. COUNTED.
     lines 272–311   204 w — surgical techniques, phaco/ECCE/ICCE + FLACS.
                             COUNTED.
     lines 312–345   153 w — IOL types by position, material and optics.
                             COUNTED.
     lines 346–378   111 w — indications for surgery, elective vs urgent.
                             COUNTED.
     lines 379–425   234 w — post-operative complications, six boxes. COUNTED.
     lines 426–466   162 w — pseudophakia and aphakia grid. COUNTED.
     lines 467–498   144 w — the clinical approach framework, four boxes.
                             COUNTED.
     lines 499–537   172 w — the rapid-fire high-yield Q&A slide. COUNTED —
                             it carries content printed NOWHERE else in either
                             deck (Marfan and homocystinuria lens directions,
                             snowflake diabetic cataract, retinoblastoma as
                             the first exclusion in leukocoria).
     lines 538–568   174 w — modern advances. COUNTED.
     lines 569–602   203 w — CASE 1 with its five printed key answers. NOT
                             counted and not written out. Every one of the
                             five answers is a fact already on a slide this
                             file writes: PSC morphology (slide 6), the
                             nodal-point/miosis mechanism (slides 6 and 8),
                             the dark posterior plaque on retroillumination
                             (slide 8), biometry/B-scan/steroid-DM screening
                             (slide 12), and the functional indication for
                             surgery (slide 15). Same handling as the three
                             clinical problems in `op-trauma`.
     lines 603–641   160 w — the SUMMARY grid, 8 rows x 6 columns. COUNTED,
                             and deliberately NOT treated like L17's take-home
                             slide: it is not duplication. Its paediatric,
                             traumatic, complicated, phacomorphic and
                             phacolytic ROWS carry facts printed nowhere else
                             in the deck (aspiration ± IOL for children,
                             "treat cause first" for complicated cataract, the
                             typical-patient column).
     lines 642–654    15 w — "Thank You" and the affiliation. NOT counted.
     = 2,369 words claimed of the file's 2,703.

   TERM 1 TOTAL = 739 + 2,369 = 3,108 words.

   TERM 2 — 25 x 1 linked question = 25. ⚠️ VERIFIED FROM DISK:
     `grep -n "op-cat" app\data\questions.ophtho.js` returns exactly ONE line,
     `opqb-t1-70` at line 704. TERM 2 does not approach the floor, let alone
     govern.

   max(3,108 · 25) = 3,108 → ⚠️ THE 3,000 CAP BINDS. BUDGET = 3,000, and it is
   the FIRST ophthalmology chapter to reach the cap. Split across the two
   chapters below.

   ⚠️ THE CAP IS WHY THE L35,36 CATARACT BLOCK IS CITED ONLY — see the module
   check immediately below. Adding it could not raise a capped budget by one
   word, and counting it would strip `op-insid` of material it has not yet
   written. §14.1(b): deferring and counting are opposites.

   DIAGRAM-DECK CHECK (§14.1). L17 lines 38–333: 739 w over 213 non-blank
   lines = 3.5 w/line. L18 lines 47–641: 2,369 w over 434 non-blank lines =
   5.5 w/line. Both are well above the ~2 that marks a labelled-diagram deck,
   so no diagram-deck correction applies and TERM 1 is a fair measure of the
   teaching. This is the module's first chapter where that is true of BOTH
   its decks — `op-orbit`, `op-va`, `op-pupil` and `op-trauma` all rested on
   banked visual reads, where the words-per-line test measures the
   transcriber rather than the deck.

   ⚠️ ENTITY / FRAMEWORK FLOOR, COUNTED BEFORE WRITING (§14.1's `ent-dysph`
   and `ent-neck` rules — say the overrun up front, cost framework slides one
   by one, cost a grid at rows x columns):

     DIAGNOSIS SIDE (`op-cat`)
       Lens anatomy + composition + consistency + optics + pathogenesis:
         framework, ~200
       Classification, three axes: framework slide, ~140
       Aetiology — 7 groups (age, local ocular, systemic, metabolic, drugs,
         traumatic, intrauterine/hereditary): ~250
       The three senile morphologies, 3 entities at ~90 = 270, PLUS the
         7 x 3 comparison grid at 21 cells = ~130. Note the grid is NOT free
         and NOT a substitute — the bullets carry mechanism, the grid carries
         discrimination: ~350
       Maturity — 4 stages x 4 columns = 16 cells, plus the shadow test as a
         method: ~280
       Symptoms, 9 named: ~180
       Signs, 11 named across two decks: ~200
       Epidemiology, 8 statements incl. two Egypt figures: ~150
       Complications — intumescence + phacomorphic + phacolytic +
         phacoanaphylactic, each with a mechanism: ~250
       Traumatic/heat/radiation cataract (inbound deferral): ~220
       Paediatric cataract and leukocoria: ~200
       = ~2,420
     SURGICAL SIDE (`op-cat-surg`)
       Treatment determinants, a 3-row ladder: ~120
       Indications, 6 elective + 6 urgent: ~180
       Pre-operative assessment, 5 framework boxes costed one by one
         (history 5 · visual function 6 · posterior segment 5 · biometry 4 ·
         slit lamp 5): ~300
       Techniques, 3 x ~6 bullets + FLACS: ~300
       IOLs, 3 axes x 4 items = 12: ~210
       Post-operative complications, 6 boxes: ~310
       Aphakia — signs + the three optical corrections with their
         magnification figures: ~250
       Pseudophakia, a 5-row grid: ~130
       Modern advances, 6 items: ~150
       = ~1,950

     COMBINED FORECAST ≈ 4,370 body words. As ONE chapter that is
     4,370 ÷ 240 ≈ **18.2 printed pages** — 82 % over the operative ceiling
     and half again past the ~12-page split trigger. SPLIT.
     As two: **~2,420 (≈10.1 pp)** and **~1,950 (≈8.1 pp)**, both inside the
     shape. Against TERM 1's 3,108 the pair runs **+41 %**, and the cause is
     stated rather than discovered: this is a TWO-LECTURE topic taught twice
     over by two different professors, so almost every entity is printed in
     two places and must be reconciled into one account — reconciliation costs
     words that neither deck's own count contains.

   ============================================================================
   ⚠️ MODULE CHECK — THE DECK'S OWN COVERAGE IS NOT THE MODULE'S. Every term
   below was greped across ALL 27 cached ophthalmology decks before anything
   was called a gap, misspellings included. THE SINGLE LARGEST FINDING IN THIS
   CHAPTER CAME OUT OF IT:

     ⚠️⚠️ `L35,36) Chronic visual loss` CARRIES A WHOLE THIRD CATARACT
     LECTURE — lines 129–249, roughly 450 words, and it is assigned in
     `theory-plan.md` to `op-insid`, which is NOT YET WRITTEN. It prints the
     aetiology that L17 and L18 between them never give:
       · CATARACTOGENIC DRUGS by name — chlorpromazine, miotics, myleran,
         amiodarone, gold. Neither cataract deck lists a single one; L18 only
         says to ask about "steroids, alpha-blockers, amiodarone" in the
         pre-op history.
       · The METABOLIC causes — galactosaemia, glucokinase deficiency,
         mannosidosis, Fabry disease, Lowe syndrome, hypocalcaemic syndrome.
         L17 gives three systemic causes and stops.
       · The INTRAUTERINE causes — rubella, toxoplasma, CMV — plus Down
         syndrome and "hereditary 1/3". L17 and L18 name congenital cataract
         repeatedly and never once say what causes it.
       · TWO EGYPT EPIDEMIOLOGY FIGURES — 22.9 % of over-60s, ~2.2 million
         people, and "the primary cause of reversible blindness of Egypt".
       · The PATHOGENESIS — the lens grows for life, 35 % protein by mass,
         the insoluble fraction rising with age.
       · INTUMESCENT as a fourth MATURITY stage (L17 and L18 both treat
         intumescence as a complication, not a stage).
     ALL OF IT IS USED, and ALL OF IT IS CITED ONLY, NOT COUNTED — the cap
     already binds, so counting could not buy a word, and `op-insid` keeps its
     lines intact. A budget notice is filed in the register block below.

     ✅ NOT A GAP — THE VOSSIUS RING and the rosette-vs-diffuse split. `L25`
        prints it as a photograph titled with the misspelling "Vossious", so
        `Vossius` returns zero there; `L18` line 624 prints "Vossius ring
        (blunt)" and "Rosette (blunt), diffuse (penetrating)". The misspelling
        was greped, exactly as the brief requires. SOURCED, in cat-10.
     ✅ NOT A GAP — GLASS BLOWER'S CATARACT. `L17` lines 93–96 classify it
        under Traumatic → Physical → Heat; `L26` lines 109–111 list it under
        IR rays beside eclipse blindness. Two independent sources. cat-10.
     ✅ NOT A GAP — RADIATION CATARACT. `L26` lines 114–115: "Irradiation /
        Burns → Cataract, Retinopathy, Optic neuropathy". cat-10.
     ✅ NOT A GAP — MARFAN AND HOMOCYSTINURIA LENS DIRECTIONS. Expected to be
        absent from a deck of slide bullets; `L18` lines 509–524 print both
        with their reasons. `Marfan` and `omocystinuria` return `L18` and
        nothing else in 27 decks. cat-10.
     ✅ NOT A GAP — SNOWFLAKE CATARACT. `nowflake` returns `L18` alone
        (line 522). cat-11.
     ✅ NOT A GAP — THE LEUKOCORIA DIFFERENTIAL. `L17` line 225 writes
        "(D.Dx of leukocoria)" and gives no list — a dead end on its own deck.
        `L3,4` sl.49–52 (already written as `pup-9`) prints the red-reflex
        colour grid with retinoblastoma and endophthalmitis, and `L18` line
        533 names retinoblastoma as the first exclusion. Cross-referenced in
        cat-11 rather than rewritten.

   THE REAL GAPS — each settled by proving a negative across all 27 decks,
   each answered and tagged in place, never declared (§4a):
     1. ECTOPIA LENTIS AS A TERM. `ectopia lentis` returns ZERO corpus-wide.
        `L25` prints "subluxation", `L3,4` sl.23 "the lens may be subluxated",
        `L18` gives the two syndromic directions — the concept is taught four
        times and never named. The name is supplied and tagged in cat-10.
     2. IFIS EXPANDED. `L18` prints the abbreviation twice (lines 248, 421)
        and never expands it; `loppy iris` returns zero in 27 decks. Expanded
        and tagged in cts-3.
     3. THE COPPER ASSOCIATION OF SUNFLOWER CATARACT. `L17` line 152 assigns
        "sunflower cataract" to trauma with no mechanism; `halcosis` and
        `iderosis` both return ZERO corpus-wide. Supplied in one tagged
        clause in cat-10.
     4. THE MECHANISM OF PHACOMORPHIC ANGLE CLOSURE AS A CLINICAL PICTURE
        (red eye, pain, corneal oedema). `L18` line 631 prints exactly that
        row, so only the linking sentence is written; nothing is supplied.
        Recorded here because it was checked and did NOT need supplying.

   ============================================================================
   ⚠️ REGISTER ROWS THIS CHAPTER WAS OWED — VERIFIED ONE BY ONE AGAINST THE
   NAMED DECK'S OWN LINES AND AGAINST THE MERGED CHAPTER, NOT AGAINST THE ROW.

     1. `op-va` (L3,4 sl.21–23) → `op-cat`: "the four cataract stages and lens
        subluxation as DISEASES — named in `va-13` with one-line glosses; the
        staging detail (shadow test, VA at each stage, the red-reflex column)
        is L17/L18's and was cited only, not counted."
        ✅ **VERIFIED EXACT ON EVERY COUNT.** `va-13` as merged carries the
        four appearances (IMSC / MSC / hypermature shrunken / Morgagnian) at
        one line each, plus "the lens may be SUBLUXATED" as a sign. It carries
        NO shadow test, NO VA ladder and NO maturity red-reflex column, and
        its own `Src` line reads "L17 lines 139–147, L18 lines 168–197
        (`op-cat`'s decks — cited only, not counted)". Those lines are
        genuinely unspent and are counted here.
        ⚠️ ONE DECLARED OVERLAP, NEITHER SIDE REMOVABLE: `va-13` prints a
        red-reflex column of its own — bright RR for nuclear sclerosis, dim
        for IMSC — from `L3,4` sl.20, and cat-5 prints `L18`'s maturity
        red-reflex column, which is a different four-row table from a
        different deck. Both are correct; the divergence between them is
        recorded as a defect note in cat-5 and was already flagged inside
        `va-13`.
     2. `op-trauma` (L25 sl.30–33 · L18) → `op-cat`: "traumatic cataract as a
        CATARACT — rosette vs diffuse in full, subluxation / ectopia lentis,
        phaco vs ECCE."
        ✅ **VERIFIED, WITH ONE OVER-SPECIFICATION.** `trm-7` as merged gives
        Vossius ring, rosette-vs-diffuse and subluxation ONE TABLE ROW each
        and closes with "Traumatic cataract management: phacoemulsification or
        ECCE… *Full account in `op-cat`*". The deferral is real and the full
        account is written here in cat-10.
        ⚠️ THE ROW OVER-SPECIFIES ON ONE WORD: "ectopia lentis" is not printed
        by `L25`, by `L18`, or by ANY of the 27 cached decks. The row names a
        term the module does not use. No delivery consequence — the concept is
        written and the NAME is supplied and tagged — but the row should not
        be read as a promise that a deck prints it.
     3. `op-trauma` (L26 · L17) → `op-cat`: "radiation and heat cataract as
        CATARACT — `L17` classifies glass-blower's cataract under Traumatic →
        Physical → Heat."
        ✅ **VERIFIED EXACT.** `L17` lines 93–96 read
        "Traumatic / Physical (thermal, mechanical, etc) / Heat (glass blower
        cataract) / Mechanical", verbatim. `trm-6` as merged carries the
        three-row UV/IR/irradiation grid and defers with "*The full cataract
        account is `op-cat`'s*". Written in cat-10 with both decks cited.

     NO ROW WAS TICKED THAT COULD NOT BE VERIFIED, and no row was found to be
     absent from its deck, on the wrong deck, on the wrong slide, or circular.
     The one fault is the over-specification in row 2.

   ⚠️ ROWS THIS FILE ADDS TO THE REGISTER, to be copied into START-HERE.md
   §14.5 by the hub:
     | `op-cat` (L35,36 lines 129–249) | ⚠️ BUDGET NOTICE, NOT A DEBT — the
       whole cataract block of `L35,36` (causes incl. the drug and metabolic
       lists, the Egypt figures, the pathogenesis, the age-of-onset axis and
       the "intumescent" maturity stage) is USED here but CITED ONLY, NOT
       COUNTED, because `op-cat`'s TERM 1 already reaches the 3,000 cap.
       `op-insid` keeps all 450 words and may write them as its own |
       `op-insid` | ☐ budget notice |
     | `op-cat` (L17 line 225 · L18 line 533) | The LEUKOCORIA DIFFERENTIAL
       and RETINOBLASTOMA as a TUMOUR — biology, staging, management. `op-cat`
       carries only "retinoblastoma until proved otherwise, urgent B-scan and
       MRI" and cross-references `pup-9`'s red-reflex grid | `op-onc` | ☐ |
     | `op-cat` (L18 lines 379–425) | CYSTOID MACULAR OEDEMA / Irvine–Gass as
       MACULAR DISEASE — Henle's layer, the OCT petaloid pattern and the wider
       differential of post-operative macular oedema. Written here only as a
       post-operative complication | `op-ret` | ☐ |
     | `op-cat` (L18 lines 142–147 · L7,8) | INDEX MYOPIA and the myopic shift
       as a REFRACTIVE ERROR — `op-cat` writes it as the nuclear-cataract
       mechanism only; `L7,8` classifies it under refractive myopia |
       `op-refract` | ☐ |
     | `op-cat` (L18 lines 620, 365) | PAEDIATRIC CATARACT as a cause of
       AMBLYOPIA and of SQUINT — the amblyopia mechanism, occlusion therapy
       and the squint work-up. `op-cat` carries only the urgency rule |
       `op-squint` | ☐ |
     | `op-cat-surg` (L18 lines 404–420) | CORNEAL DECOMPENSATION and BULLOUS
       KERATOPATHY, and the DSAEK/DMEK keratoplasty ladder, as CORNEAL
       disease. Written here as a post-operative complication only |
       `op-cornea-surg` | ☐ ⚠️ already merged; reconciliation work |
     | `op-cat` (L17 lines 242–279 · L18 lines 346–378) | ⚠️ REVERSE NOTICE —
       LENS-INDUCED GLAUCOMA (phacomorphic, phacolytic, phacoanaphylactic) IS
       WRITTEN HERE IN FULL AND `op-glauc` DOES NOT CARRY IT. Verified:
       `phacomorphic` and `phacolytic` return ZERO in the whole of
       `app\data\theory.ophtho.js`, and `L11`/`L12`, `op-glauc`'s own decks,
       print neither — its secondary-glaucoma grids run pseudoexfoliation /
       pigment dispersion / steroid / uveitic and neovascular / ICE / tumour /
       RVO. Nothing is owed; this is a notice so the hub knows where the
       module keeps it | `op-glauc` | ☐ notice ⚠️ already merged |

   DECLARED OVERLAP WITH AN ALREADY-MERGED CHAPTER, NEITHER SIDE REMOVABLE:
     · ENDOPHTHALMITIS. `orb-12` in `op-orbit-mass` already carries the
       post-cataract endophthalmitis picture in full — 24–72 h timing, CoNS /
       S. aureus / streptococci, hypopyon and vitreous haze, vitreous tap plus
       intravitreal vancomycin and ceftazidime — sourced from `L18`, "cited
       only". `L18` lines 379–425 are THIS chapter's counted deck, and
       endophthalmitis is the most serious complication of the operation this
       chapter teaches, so cts-6 writes it compactly and points at
       `op-orbit-mass` for the endophthalmitis-vs-panophthalmitis-vs-cellulitis
       map rather than repeating it. Said, not silently duplicated.
     · BIOMETRY AND KERATOMETRY. `op-cornea-surg` already states that
       "biometry (axial length) and keratometry belong to cataract surgery and
       IOL power (L18)". cts-3 writes them as its own; the pre-LASIK contrast
       stays there.
     · THE SHALLOW-ANTERIOR-CHAMBER CAUSE LIST. `va-14` and `op-glauc` carry
       "intumescent cataract" as a cause of a shallow chamber. cat-9 writes
       intumescence as a lens complication and does not repeat the chamber
       table.

   ============================================================================
   DEFECT NOTES (§4b — noted, never disputed), each one line in the body:
     · The two decks give DIFFERENT visual acuities for immature cataract.
       `L17` line 213: "Incipient, immature cortical cataract → 6/6 → HM".
       `L18` line 179: immature "6/18 – CF (variable)", with HM reserved for
       mature. Recorded in cat-5; neither is treated as the error.
     · `L18` CONTRADICTS ITSELF ON THE FLOOR OF VISION. Line 97 states
       cataract "should NEVER reduce vision to less than Hand Motion (HM)",
       and line 191 gives hypermature cataract "VA: HM or less". `L17`
       line 217 is unambiguous — "Never PL or No PL due to cataract or any
       media opacity". Recorded in cat-6 as printed, and the examinable rule
       is `L17`'s.
     · The traumatic morphology is named DIFFERENTLY by the two decks — `L17`
       line 152 "Traumatic → sunflower cataract", `L18` line 623 "Rosette
       (blunt), diffuse (penetrating)". Both are printed and both are written
       in cat-10; neither is called wrong.
     · `L18` line 161 opens a pearl with a stray colon — ":nuclear cataract →
       myopia, not hyperopia". A typography slip, not a content defect; the
       sentence is used as written minus the colon.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection (§14.2). The chapter's one question
        already carries it in its own `explanation`.
     2. `L18`'s CASE 1 written out as a vignette (lines 569–602, 203 w). All
        five printed answers are facts written in cat-4, cat-5 and cts-2/cts-3;
        the vignette would be ~200 words restating them. The arithmetic is in
        the budget block above.
     3. `L17`'s TAKE HOME MESSAGE slide as a section (lines 334–349, 86 w) —
        §14.3 bans a closing summary at 100 % duplication. Its one clause with
        no exact earlier twin, "cataract is the most common cause of gradual
        progressive painless diminution of vision", IS written, in cat-6.
     4. Question ids in body text, teaching voice, bank meta-commentary,
        per-fact citation clauses (one `Src:` line per section), and any
        closing summary section.
     5. Slide figure labels ("Normal-Optical Section", "Normal-Red Reflex",
        "Normal-Diffuse Illumination") — these are photograph captions
        repeated on almost every `L17` slide, not teaching.
     6. Drug doses. Neither deck prints one anywhere, for any drug.
     7. The IOL formula MATHEMATICS. Both decks name the formulae (SRK/T,
        Haigis, Holladay, Kane, Pearl-DGS, ORCA) and neither gives a single
        equation or constant.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field.

   ============================================================================
   ⚠️ NO MEASURED WORD COUNT IS WRITTEN INTO THIS HEADER, DELIBERATELY, and
   the same choice `op-trauma` and `op-systemic` made. Eleven headers in this
   project have carried a number that the file did not support — including one
   whose per-section breakdown summed exactly and was still stale. A number in
   the header must be re-verified after every later edit, and this file will be
   edited again when it is spliced into `app\data\theory.ophtho.js`. THE
   COUNTS ARE REPORTED IN THE COMPLETION MANIFEST; the hub measures from disk.

   TO RE-MEASURE, canonical definition — `W(s.body)` over every section, which
   INCLUDES the `Src:` lines, and is what `vth.js` and every ENT/peds count
   use:

     node -e "const vm=require('vm'),fs=require('fs');
       const c={};vm.createContext(c);
       vm.runInContext(fs.readFileSync('content/ophtho/theory-drafts/op-cat.draft.js','utf8'),c);
       for(const k of Object.keys(c.THEORY_DRAFT)){
         const ch=c.THEORY_DRAFT[k];let t=0;
         for(const s of ch.sections){
           const w=s.body.split(/\s+/).filter(Boolean).length;
           console.log(k,s.id,w);t+=w}
         console.log(k,'sections',ch.sections.length,'body',t,
                     'intro',ch.intro.split(/\s+/).length,
                     'pages~',(t/240).toFixed(1))}"

   ============================================================================ */

var THEORY_DRAFT = {

  /* ══════════════════════════ CHAPTER 1 of 2 ══════════════════════════ */
  'op-cat': {

    intro: 'Cataract is any opacity of the crystalline lens that impairs vision, and it is the leading cause of reversible blindness in the world. Three questions decide the case: where in the lens, how mature, and what caused it.',

    sections: [

{
  id: 'cat-1', w: 'must',
  h: 'The normal lens — and the definition of cataract',
  body: [
    '- **Definition:** **any opacity of the natural crystalline lens sufficient to impair vision**.',
    '',
    '### Anatomy',
    '',
    '|Feature|Detail|',
    '|---|---|',
    '|**Shape**|**BICONVEX** — the **POSTERIOR curve is steeper**|',
    '|**Size**|**equatorial diameter ~9 mm · anteroposterior ~4 mm**|',
    '|**Position**|anterior segment, **BEHIND the iris**, in front of the vitreous|',
    '|**Suspension**|**ZONULAR fibres** from the **ciliary processes** to the equatorial capsule|',
    '|**Vascularity**|**AVASCULAR and transparent — nourished by the AQUEOUS**|',
    '',
    '### Composition — three components',
    '- **Capsule:** outermost, **basement-membrane-like material**.',
    '- **Lens epithelium:** lines the **ANTERIOR capsule only**.',
    '- **Lens fibres:** made by **continuous division of epithelial cells at the EQUATOR**, then elongation.',
    '',
    '### Consistency changes with age',
    '- **Young:** the whole lens is **fluid**.',
    '- **Older:** a **solid centre — the NUCLEUS** — with a **fluid periphery, the CORTEX**.',
    '',
    '### Optics — the number that gets asked',
    '- **Power:** **~18–20 D**, which is **ONE THIRD of the eye’s total ~60 D**.',
    '- **Refractive index:** **1.386 in the nucleus**, and it **RISES with age**.',
    '- **Function:** transmits light to the interior of the eye.',
    '',
    '### Pathogenesis of the ageing lens',
    '- **Growth never stops:** the epithelium keeps laying down cortical fibres, so **size, weight and density rise for life**.',
    '- **Protein:** the normal lens is **35 % protein by mass**, and the **INSOLUBLE fraction rises** with age and with cataract.',
    '',
    'Src: L17 lines 38–67; L18 lines 47–76; L35,36 lines 194–201 (pathogenesis — cited only, not counted)'
  ].join('\n'),
  qs: []
},

{
  id: 'cat-2', w: 'must',
  h: 'Classification — three axes, and they are asked together',
  body: [
    '### 1 — Chronological',
    '- **Congenital / developmental** · **acquired**.',
    '- **Finer version:** congenital · infantile · presenile · senile.',
    '',
    '### 2 — Aetiological',
    '- **Age-related (primary, senile)** — the commonest.',
    '- **Complicated** — secondary to a local ocular or a systemic disease.',
    '- **Traumatic** — physical, i.e. thermal or mechanical.',
    '',
    '### 3 — Morphological',
    '- **By SITE:** **nuclear · cortical · posterior subcapsular (PSC)**.',
    '- **By MATURITY:** **incipient · immature · mature · hypermature**.',
    '- *`L35,36` puts a fifth term, **intumescent**, in this list; both cataract decks treat intumescence as a complication instead.*',
    '- **Congenital patterns** are named as a separate group.',
    '',
    '- **⚠️ The trap:** the axes are **independent** — *senile* is aetiological, *nuclear* morphological. A PSC may be senile, steroid-induced or diabetic.',
    '',
    'Src: L17 lines 68–96, 97–183; L35,36 lines 177–183 (the age-of-onset axis — cited only, not counted)'
  ].join('\n'),
  qs: []
},

{
  id: 'cat-3', w: 'must',
  h: 'What causes a cataract — seven groups',
  body: [
    '### Age-related (senile) — the commonest of all',
    '- **From the 5th decade onward**, with **no gender and no laterality predilection**.',
    '- **Predisposing:** **chronic exposure to excessive ULTRAVIOLET light**.',
    '',
    '### Complicated — local ocular causes',
    '- **Local ocular —** high myopia · anterior uveitis · topical steroids.',
    '- **Also listed by `L35,36`:** **retinal dystrophy and retinitis pigmentosa** · **acute glaucoma**.',
    '',
    '### Complicated — systemic causes',
    '- **Systemic —** diabetes mellitus · Cushing syndrome · hyperthyroidism.',
    '',
    '### Metabolic causes',
    '- **The seven —** diabetic · galactosaemia · glucokinase deficiency · mannosidosis · Fabry disease · Lowe syndrome · hypocalcaemic syndrome.',
    '',
    '### Cataractogenic drugs',
    '- **The five —** chlorpromazine · miotics · myleran · amiodarone · gold.',
    '- **Plus steroids and amiodarone**, from `L18`’s pre-operative drug history.',
    '',
    '### Traumatic and physical',
    '- **Physical:** **heat — glass blower’s cataract** · **mechanical**. *Written in full in cat-10.*',
    '',
    '### Intrauterine and hereditary',
    '- **Intrauterine infection:** **rubella, toxoplasma, CMV**.',
    '- **Syndromic:** **Down syndrome**. **Hereditary in about one third.**',
    '',
    '### ⚠️ What each cause looks like',
    '- **The PSC group:** **steroids, diabetes, uveitis, irradiation, myotonic dystrophy** all produce a **posterior subcapsular** opacity.',
    '- **Complicated cataract is usually PSC**, with **posterior synechiae** where uveitis is the cause — and the rule is **treat the cause first**.',
    '',
    'Src: L17 lines 77–96, 228–241; L18 lines 155–157, 246–251, 628; L35,36 lines 137–174 (the metabolic, drug and intrauterine lists — cited only, not counted)'
  ].join('\n'),
  qs: []
},

{
  id: 'cat-4', w: 'must',
  h: 'The three senile morphologies — mechanism, then the discrimination grid',
  body: [
    '### Nuclear',
    '- **Mechanism:** **exaggeration of nuclear sclerosis** — yellowing progressing to **BRUNESCENCE**; `L17` grades the colour **grey → yellow-brown → black**.',
    '- **⚠️ Optics:** the **raised nuclear refractive index** makes the lens stronger → **ACQUIRED (INDEX) MYOPIA**, with no change in axial length or corneal curvature.',
    '- **Vision:** interferes **predominantly with DISTANCE** vision.',
    '- **‘Second sight’:** the myopic shift lets an elderly patient **read without glasses again — temporarily**.',
    '- **Red reflex:** central distortion, a **dark nucleus against the reflex**.',
    '',
    '### Cortical',
    '- **Mechanism:** **opacification of the lens fibres surrounding the nucleus**.',
    '- **Pattern:** begins as **wedge-shaped, spoke-like PERIPHERAL opacities**.',
    '- **Vision:** impact **depends on how close the spokes come to the visual axis**.',
    '- **Glare:** prominent **when the opacities are equatorial**.',
    '- **⚠️ Easily missed:** the spokes are **asymmetric and peripheral — dilate, or they are not seen**.',
    '',
    '### Posterior subcapsular (PSC)',
    '- **Site:** at the **posterior capsule**, which is the **NODAL POINT** of the eye.',
    '- **⚠️ Consequence:** **the most visually disabling type per unit size**, because a small opacity there sits where the rays cross.',
    '- **Worst for:** **near vision, bright light and MIOSIS** — all three drive the pupil across the plaque.',
    '- **Red reflex:** a **dark plaque on retroillumination**.',
    '- **Causes:** **steroids, DM, uveitis, irradiation, myotonic dystrophy**.',
    '',
    '### The comparison grid',
    '',
    '|Feature|**Nuclear**|**Cortical**|**PSC**|',
    '|---|---|---|---|',
    '|**Location**|central nucleus|peripheral cortex|posterior capsule|',
    '|**Near vs distance**|**DISTANCE worse** (myopic shift)|variable — depends on axis proximity|**NEAR worse** (miosis aggravates)|',
    '|**Glare**|mild|moderate|**SEVERE, especially at night**|',
    '|**Slit lamp**|**yellow/brown nucleus**|**spoke-like peripheral opacities**|**granular posterior capsule plaque**|',
    '|**Red reflex**|dark nucleus **centrally**|dark spokes **peripherally**|dark plaque at the **posterior pole**|',
    '|**Special feature**|**‘second sight’, myopia**|asymmetric, often bilateral|**steroid-induced pattern**|',
    '|**Most troubled by**|driving and TV|any visual task|**reading and bright sunlight**|',
    '',
    '- **⚠️ The exam pairing:** **PSC + a young patient + systemic steroids → always ask about steroid use.**',
    '- **⚠️ The other one:** **nuclear cataract causes MYOPIA, not hyperopia.**',
    '',
    'Src: L17 lines 97–102, 153; L18 lines 136–166, 203–239; L35,36 lines 216–223 (cited only, not counted)'
  ].join('\n'),
  qs: ['opqb-t1-70']
},

{
  id: 'cat-5', w: 'must',
  h: 'Maturity — the four stages, the red reflex, and the shadow test',
  body: [
    '|Stage|**VA**|**Red reflex**|What the lens looks like|',
    '|---|---|---|---|',
    '|**Incipient**|**6/18 – 6/6** (mild or none)|**clear centrally, dark periphery**|spoke-like cortical opacities at the periphery; minimal complaint|',
    '|**Immature (IMSC)**|**6/18 – CF** (variable)|**DIM**|**incomplete** opacification of cortex and nucleus; **water clefts** visible|',
    '|**Mature (MSC)**|**HM only — not less**|**ABSENT**|**complete** opacification — a **totally opaque white lens**|',
    '|**Hypermature**|**HM or less**|variable|**shrinkage of the capsule with liquefaction of the cortex**|',
    '',
    '### The two hypermature types',
    '- **Typical (shrunken):** **shrinkage, calcification and cholesterol deposits on the capsule**; the cortex leaks and the capsule wrinkles.',
    '- **⚠️ Morgagnian:** **liquefaction of the cortex with the NUCLEUS SINKING inferiorly** — a **pathognomonic pseudohypopyon-like appearance**. **Risk: phacolytic glaucoma.**',
    '',
    '### ⚠️ The shadow test (oblique illumination)',
    '- **Method:** shine a torch **obliquely from the TEMPORAL side**, and look for an iris shadow cast on the lens.',
    '- **POSITIVE — a crescentic iris shadow:** **IMMATURE**. The opacity is partial, so light bends around the opaque cortex.',
    '- **NEGATIVE — no shadow:** **MATURE**. The lens is totally opaque, so all light is reflected at its surface.',
    '',
    '### The prognostic pair',
    '- **In a mature cataract:** **good light projection in all four directions + intact colour discrimination = good prognosis**.',
    '',
    '*The same four appearances as pupil signs, with `L3,4`’s bright-versus-dim red reflex, are in `va-13` — a different table from a different deck.*',
    '',
    '*Defect note: `L17` allows immature cataract "6/6 → HM"; `L18` caps it at CF and reserves HM for mature. Both as printed.*',
    '',
    'Src: L18 lines 167–202; L17 lines 104–148, 211–217; L35,36 lines 180–181, 209–211 (cited only, not counted)'
  ].join('\n'),
  qs: []
},

{
  id: 'cat-6', w: 'must',
  h: 'Symptoms — one headline sentence, then eight variations',
  body: [
    '- **⚠️ The headline:** **"gradual progressive PAINLESS diminution of vision"**.',
    '- **⚠️ And its epidemiology:** **cataract is the most common cause of that sentence**.',
    '',
    '### The eight symptoms',
    '- **Diminution of vision:** **"foggy vision"** — blur first, then diminution, then failure.',
    '- **Glare:** **defective vision with bright illumination beside the visual target** — oncoming headlights. **Worst in PSC.**',
    '- **Duskiness:** the sensation of a **poorly illuminated environment**.',
    '- **Halos around lights:** from the **prismatic effect of the opaque fibres**.',
    '- **Monocular diplopia:** **multiple images with ONE eye**, from **irregular refraction within the lens** — cortical or nuclear.',
    '- **Defective colour vision:** **colour desaturation** and altered perception.',
    '- **Variation with illumination:** vision differs between **dark and light** conditions.',
    '- **‘Second sight’:** the nuclear myopic shift — **temporary**.',
    '',
    '### ⚠️ In children the symptoms are behavioural',
    '- **Poor visual attention.**',
    '- **Squint** — when the cataract is **unilateral**.',
    '- **Nystagmus** — when it is **bilateral**.',
    '',
    '*Uniocular diplopia localises the fault INSIDE the eye — never a nerve or a muscle; the trauma version is in `trm-7`.*',
    '',
    'Src: L17 lines 184–205, 343; L18 lines 104–135; L35,36 lines 212–223 (cited only, not counted)'
  ].join('\n'),
  qs: []
},

{
  id: 'cat-7', w: 'must',
  h: 'Signs — the lens is abnormal and everything else is normal',
  body: [
    '### Visual acuity',
    '- **Incipient and immature cortical cataract:** **6/6 down to HM**.',
    '- **Mature cataract:** **HM**.',
    '- **⚠️⚠️ The floor:** **NEVER PL or no PL from a cataract, or from any media opacity.**',
    '- **⚠️ So VA worse than HM means:** **concurrent retinal or optic nerve pathology** — find it before booking surgery.',
    '',
    '### ⚠️ The rest of the examination is NORMAL, and that is the diagnostic point',
    '- **Pupillary reaction normal** — the afferent pathway is intact, so **there is no RAPD**.',
    '- **Visual field normal by confrontation** — retinal function preserved.',
    '- **Two-point discrimination intact.**',
    '- **Light projection:** **good in all four directions** = good prognosis.',
    '- **Colour discrimination, red versus green** = good retinal function.',
    '',
    '### The lens itself',
    '- **Pupil colour change:** **grey, white or brown**, seen with a **penlight**.',
    '- **Absent THIRD PURKINJE image** — the reflection from the anterior lens surface, lost at the slit lamp.',
    '- **Red reflex:** **absent** in mature · **dim** in immature · **altered** in nuclear.',
    '- **Slit lamp:** the pattern is **nuclear, cortical or posterior**.',
    '',
    '### In children',
    '- **LEUKOCORIA — a white pupil.** *The differential, and what must be excluded first, is in cat-11.*',
    '',
    '*Defect note: `L18` says cataract never reduces vision below HM, then gives hypermature "HM or less". Both as printed; `L17`’s rule is the unambiguous one.*',
    '',
    'Src: L17 lines 206–227; L18 lines 104–135'
  ].join('\n'),
  qs: []
},

{
  id: 'cat-8', w: 'high',
  h: 'Epidemiology — the numbers that get asked',
  body: [
    '- **⚠️ The headline:** **senile cataract is the MOST COMMON CAUSE OF REVERSIBLE BLINDNESS in the world**.',
    '- **Share of world blindness:** **51 % (WHO)**.',
    '- **Egypt and the Arab world:** the **commonest cause of AVOIDABLE blindness**, particularly in **rural settings**; prevalence **rises steeply after age 60**.',
    '- **Egypt, measured:** **22.9 % of the population over 60**, roughly **2.2 million people**.',
    '- **Onset:** from the **5th decade**, with **no gender and no laterality predilection**.',
    '- **Risk factor:** **chronic exposure to excessive ultraviolet light**.',
    '- **Congenital / developmental cataract:** a **leading cause of CHILDHOOD blindness and lifelong disability**.',
    '- **The counterweight:** it is **one of the most successfully treated conditions in all of surgery**.',
    '',
    'Src: L17 lines 228–241; L18 lines 77–103; L35,36 lines 184–193 (the Egypt figures — cited only, not counted)'
  ].join('\n'),
  qs: []
},

{
  id: 'cat-9', w: 'must',
  h: 'Complications — intumescence, and the three lens-induced disasters',
  body: [
    '### Intumescence',
    '- **Mechanism:** **liquefaction of the lens fibres with fluid imbibition → SWELLING of the lens.**',
    '',
    '### Phacomorphic glaucoma — the lens is SWOLLEN',
    '- **Chain:** **intumescence → increased lens THICKNESS → PUPIL BLOCK → elevated IOP.**',
    '- **The lens:** **immature and swollen.**',
    '- **Presentation:** **angle closure — red eye, pain, HM vision, raised IOP, corneal oedema.**',
    '- **Treatment:** **urgent lens removal (phaco).**',
    '',
    '### Phacolytic glaucoma — the lens LEAKS',
    '- **Chain:** **degeneration of the lens capsule → leakage of lens PROTEINS.**',
    '- **Two routes** to the pressure, and the deck gives both.',
    '- **Route 1 —** immune reaction in the anterior chamber (uveitis) → **uveitic glaucoma**.',
    '- **Route 2 —** protein macromolecules **clog the trabecular meshwork** → **secondary OPEN angle (trabecular) glaucoma**; the blockers are **macrophages**.',
    '- **The lens:** **mature or HYPERMATURE** — this is the Morgagnian risk.',
    '- **Treatment:** **urgent lens removal.**',
    '',
    '### Phacoanaphylactic uveitis',
    '- **Mechanism:** **hypersensitivity to lens protein.**',
    '- **Treatment:** surgery, **mandatory if it does not respond to medical therapy**.',
    '',
    '### ⚠️ Telling the two glaucomas apart',
    '',
    '||**Phacomorphic**|**Phacolytic**|',
    '|---|---|---|',
    '|**Maturity**|**IMMATURE, swollen**|**MATURE or HYPERMATURE**|',
    '|**Mechanism**|**swollen lens → ANGLE CLOSURE**|**leaking protein → MACROPHAGES BLOCK THE MESHWORK**|',
    '|**Angle**|**closed**|**open**|',
    '|**Treatment**|**urgent phaco**|**urgent lens removal**|',
    '',
    '*`op-glauc` is written from `L11` and `L12`, which print no lens-induced glaucoma at all — this is where the module carries it.*',
    '',
    'Src: L17 lines 242–279; L18 lines 346–378, 603–641'
  ].join('\n'),
  qs: []
},

{
  id: 'cat-10', w: 'must',
  h: 'Traumatic, heat and radiation cataract — and the displaced lens',
  body: [
    '### Blunt trauma',
    '- **ROSETTE cataract:** the **blunt-trauma morphology**.',
    '- **VOSSIUS RING:** a **ring of PIGMENT imprinted on the ANTERIOR LENS CAPSULE** by the pupil margin. Blunt injury.',
    '',
    '### Penetrating trauma',
    '- **DIFFUSE cataract:** the penetrating-trauma morphology.',
    '',
    '### Lens displacement',
    '- **SUBLUXATION:** **partial zonular rupture** — the **displaced lens edge is seen crossing the pupil**, and it gives **UNIOCULAR DIPLOPIA**. Complete displacement is dislocation.',
    '- **The name:** **ECTOPIA LENTIS**, for a lens out of place *(the term is printed by none of the 27 cached decks — not taken from the course material; they teach it as "subluxation")*.',
    '',
    '### ⚠️ The two syndromic directions, and the reason for each',
    '',
    '|Condition|Direction|Why|',
    '|---|---|---|',
    '|**Marfan syndrome**|**SUPERO-TEMPORAL**|**the inferior zonules stay intact**, so the lens is held up|',
    '|**Homocystinuria**|**INFERO-NASAL**|**all the zonules are weak**, so the lens simply falls|',
    '',
    '### Physical injury — heat and radiation',
    '- **Infrared / heat:** **GLASS BLOWER’S CATARACT**, classified by `L17` under **traumatic → physical → HEAT**, and by `L26` under **IR rays** beside **eclipse blindness**.',
    '- **Irradiation and burns:** **cataract · retinopathy · optic neuropathy**.',
    '- **Ultraviolet** burns the surface instead — **photophthalmia, snow blindness**. *Full grid in `trm-6`.*',
    '',
    '### The other named traumatic morphology',
    '- **SUNFLOWER cataract:** `L17`’s name for the traumatic pattern *(classically an intraocular COPPER foreign body — chalcosis — named by no cached deck; not taken from the course material)*.',
    '',
    '### Management',
    '- **Phacoemulsification or ECCE**, with the timing set by severity.',
    '- **⚠️ ICCE survives for one thing:** **Morgagnian cataract with zonular weakness**, carefully selected.',
    '',
    '*The blunt-trauma lesion list front to back, hyphaema and the open-globe protocol are in `trm-7` and `trm-8`.*',
    '',
    '*Defect note: `L17` names the traumatic morphology "sunflower", `L18` "rosette (blunt), diffuse (penetrating)". Both printed; both written.*',
    '',
    'Src: L17 lines 93–96, 149–153, 298; L18 lines 499–537, 603–641; L26 lines 104–115; L25 (the ring, printed as "Vossious"), cited only'
  ].join('\n'),
  qs: []
},

{
  id: 'cat-11', w: 'must',
  h: 'Paediatric cataract and leukocoria — the one that is urgent',
  body: [
    '### ⚠️ Why it cannot wait',
    '- **⚠️ The rule:** a dense congenital cataract is operated **WITHIN WEEKS — to prevent AMBLYOPIA**.',
    '- Congenital and developmental cataract is a **leading cause of childhood blindness and lifelong disability**.',
    '',
    '### How it presents',
    '- **Leukocoria** — the white pupil.',
    '- **Squint** if **unilateral** · **nystagmus** if **bilateral** · **poor visual attention**.',
    '',
    '### The morphological patterns',
    '- **The six —** lamellar · blue dot · anterior pyramidal · posterior polar · membranous · sutural.',
    '',
    '### Causes',
    '- **Intrauterine infection:** **rubella, toxoplasma, CMV**.',
    '- **Syndromic:** **Down syndrome**. **Hereditary in about a third.**',
    '- **Metabolic:** **galactosaemia, Lowe syndrome, hypocalcaemic syndrome**.',
    '',
    '### ⚠️ Leukocoria — what is excluded first',
    '- **RETINOBLASTOMA, until proved otherwise** — **malignant**, and it needs **urgent B-scan plus MRI**.',
    '- The other causes of a white or yellow reflex, and the full red-reflex colour grid, are in `pup-9`.',
    '',
    '### Snowflake cataract',
    '- **The young diabetic:** **acute hyperglycaemia**, **bilateral and rapidly progressive**.',
    '',
    '*Surgery in children — irrigation/aspiration, and the contact-lens-before-IOL rule under two years — is in `cts-4` and `cts-7`.*',
    '',
    'Src: L17 lines 161–183, 201–205, 225, 233–235; L18 lines 365, 499–537, 620; L35,36 lines 170–174 (cited only, not counted)'
  ].join('\n'),
  qs: []
}

    ]
  },

  /* ══════════════════════════ CHAPTER 2 of 2 ══════════════════════════ */
  'op-cat-surg': {

    intro: 'Not every cataract is operated. This chapter is the decision, the work-up that protects it, the three extraction techniques, the lens that replaces the one removed, and what goes wrong afterwards.',

    sections: [

{
  id: 'cts-1', w: 'must',
  h: 'The treatment decision — two determinants, three options',
  body: [
    '### The two determinants',
    '- **The FUNCTIONAL SIGNIFICANCE of the opacity** — what it stops the patient doing.',
    '- **The presence of COMPLICATIONS.**',
    '',
    '### The ladder',
    '',
    '|Option|When|',
    '|---|---|',
    '|**Observation**|**functionally INSIGNIFICANT and no complications**|',
    '|**Refractive correction**|**functionally significant BUT amenable to improvement by refraction**, and no complications|',
    '|**Surgery (lens extraction)**|**functionally significant AND/OR complications**|',
    '',
    '- **⚠️ The principle:** **not all cataracts need operating** — the decision is shared, and driven by **function, not by the look of the lens**.',
    '',
    'Src: L17 lines 280–304; L18 lines 346–348'
  ].join('\n'),
  qs: []
},

{
  id: 'cts-2', w: 'must',
  h: 'Indications for surgery — elective, and the six that are urgent',
  body: [
    '### Elective — most cases',
    '- **Visual impairment affecting quality of life** — driving, reading, activities of daily living.',
    '- **Patient-reported functional disability** despite an updated glasses prescription.',
    '- **VA below the driving standard** — typically **<6/12 in the driving eye**.',
    '- **Monocular diplopia** interfering with daily activities.',
    '- **Access:** to allow management of **POSTERIOR SEGMENT disease** — e.g. diabetic retinopathy needing laser or OCT monitoring.',
    '- **Refractive cataract surgery** — lens-based refractive correction.',
    '',
    '### ⚠️ Urgent / mandatory',
    '- **Phacomorphic glaucoma** — the swollen lens closing the angle.',
    '- **Phacolytic glaucoma** — leaking proteins, macrophage-induced raised IOP.',
    '- **Phacoanaphylactic uveitis** — lens protein hypersensitivity.',
    '- **Dense congenital cataract** — **within weeks, to prevent amblyopia**.',
    '- **Subluxated lens with acute pupillary block.**',
    '- **Lens-induced uveitis** unresponsive to medical therapy.',
    '',
    '- **⚠️ The pattern in the urgent list:** **five of the six are the lens itself causing a second disease.** *Their mechanisms are in cat-9.*',
    '',
    'Src: L18 lines 346–378'
  ].join('\n'),
  qs: []
},

{
  id: 'cts-3', w: 'must',
  h: 'Pre-operative assessment — five boxes, and the surgeon’s pre-flight checklist',
  body: [
    '### History',
    '- **Symptom duration**, and its impact on daily activities.',
    '- **⚠️ Medications:** **anticoagulants** · **ALPHA-1 BLOCKERS → IFIS risk** · amiodarone · steroids.',
    '- **Systemic disease:** **DM, hypertension, bleeding disorders**.',
    '- **Prior eye surgery or trauma**, previous **uveitis**, **glaucoma drops**.',
    '- **Lens status:** **monocular versus binocular patient** — it changes the threshold entirely.',
    '',
    '*IFIS is **intraoperative floppy iris syndrome**: a flaccid iris that billows, prolapses and progressively constricts during phaco (the expansion is not printed by any cached deck — not taken from the course material).*',
    '',
    '### Visual function tests',
    '- **BCVA**, distance **and** near.',
    '- **Projection of light in all four quadrants** — essential in a dense cataract.',
    '- **Colour discrimination**, the **red versus green** torch test.',
    '- **Potential acuity measurement (PAM)** where macular function is in doubt.',
    '- **⚠️ Pupillary reflexes:** **an RAPD means another pathology** — the cataract is not the whole story.',
    '- **Visual fields by confrontation.**',
    '',
    '### Slit lamp',
    '- **Lids, conjunctiva, cornea** — **Fuchs’ endothelial dystrophy?**',
    '- **Anterior chamber:** depth, **cells, flare, synechiae**.',
    '- **Lens:** morphology and maturity — **⚠️ DILATION IS ESSENTIAL to grade the opacity properly**.',
    '- **Vitreous:** any pigment? **Schafer sign → retinal tear.**',
    '',
    '### Posterior segment evaluation',
    '- **⚠️ B-scan ultrasound:** whenever the fundus is not visible — to rule out **retinal detachment or tumour**. Mandatory.',
    '- **Electroretinogram (ERG)** if macular disease is suspected.',
    '- **OCT when possible** in hypermature cataract.',
    '- **Dilated fundus —** with a +90 D or indirect lens: **macula** (AMD, diabetic maculopathy, ERM) · **disc** (glaucomatous cupping) · **periphery** (breaks, lattice).',
    '',
    '### Biometry and IOL calculation',
    '- **Axial length** — **IOL Master or Lenstar preferred**.',
    '- **Keratometry** — corneal curvature.',
    '- **Formulae:** **SRK/T** standard; **Haigis** and **Holladay** for long and short eyes.',
    '- **Target refraction:** **plano** as standard, or **slight myopia in the elderly**.',
    '- **The inputs, stated generally:** ocular dimensions and biometric characteristics — **corneal curvature, axial length — plus the EFFECTIVE LENS POSITION**.',
    '',
    'Src: L17 lines 323–333; L18 lines 240–271, 467–498; L35,36 lines 224–240 (the referral sequence — cited only, not counted)'
  ].join('\n'),
  qs: []
},

{
  id: 'cts-4', w: 'must',
  h: 'Surgical techniques — phaco, ECCE, ICCE',
  body: [
    '### Phacoemulsification — the STANDARD',
    '- **Incision:** **2.2–3.0 mm**, clear corneal or scleral tunnel.',
    '- **Continuous curvilinear capsulorhexis (CCC)** — the anterior capsule opening.',
    '- **Hydrodissection** separates cortex from capsule.',
    '- **Ultrasonic probe emulsifies the nucleus** into fragments — *divide and conquer, stop and chop, phaco chop*.',
    '- **Aspiration of cortex**, then **IOL implantation into the CAPSULAR BAG**.',
    '- **FOLDABLE acrylic IOL**, passing through the 2.2 mm incision.',
    '- **⚠️ Self-sealing incision — NO sutures, so LESS ASTIGMATISM.** This is why it is the **gold standard worldwide**.',
    '',
    '### ECCE — extracapsular extraction',
    '- **Incision:** **8–10 mm limbal**.',
    '- **Manual expression of the nucleus** through an anterior capsulotomy.',
    '- **⚠️ The POSTERIOR CAPSULE IS LEFT IN PLACE** — it supports the IOL. That is what "extracapsular" means.',
    '- **RIGID PMMA IOL**, which does not fold.',
    '- **Sutures:** **10/0 nylon required → significant astigmatism.**',
    '- **Still used for:** **very hard grade 4–5 nuclei**, **subluxated lenses**, and **resource-limited settings**.',
    '',
    '### ICCE — intracapsular extraction',
    '- **What comes out:** **the ENTIRE lens INCLUDING THE CAPSULE**, by cryo or forceps, through a large incision.',
    '- **Historical** — rarely performed today.',
    '- **⚠️ No capsular bag**, so the IOL goes into the **anterior chamber (ACIOL)**.',
    '- **High complication rate:** **bullous keratopathy, glaucoma, vitreous prolapse**.',
    '- **Still performed in:** **MORGAGNIAN cataract with zonular weakness**, on careful selection.',
    '',
    '### Children',
    '- **Irrigation / aspiration** — the paediatric lens is **soft**, so there is no nucleus to emulsify.',
    '',
    '### FLACS — femtosecond laser-assisted cataract surgery',
    '- **What the laser does:** **the incision, the capsulorhexis and the nuclear fragmentation**; phaco finishes the case.',
    '- **Emerging, not yet universally adopted.**',
    '',
    'Src: L17 lines 305–310; L18 lines 272–311; L35,36 lines 241–249 (cited only, not counted)'
  ].join('\n'),
  qs: []
},

{
  id: 'cts-5', w: 'high',
  h: 'Intraocular lenses — position, material, optics',
  body: [
    '### By POSITION',
    '- **Posterior chamber IOL (PCIOL):** **in the CAPSULAR BAG (preferred)** or in the ciliary sulcus. **The most physiological position.**',
    '- **Anterior chamber IOL (ACIOL):** **when there is no capsular support** — angle-supported or **iris-fixated (Artisan)**.',
    '- **Scleral-fixated IOL:** **sutured to the sclera when there is no capsule** — technically demanding.',
    '',
    '### By MATERIAL',
    '- **Foldable acrylic** (hydrophobic or hydrophilic): **the standard for phaco**; passes through 2.2 mm; **reduced PCO versus PMMA**.',
    '- **Rigid PMMA:** for **ECCE** — needs the large incision, but **durable and cheap**.',
    '- **Silicone**, and **collamer (STAAR)**.',
    '',
    '### By OPTICS',
    '- **Monofocal:** a **single focal point** — the standard. **Glasses still needed** for near or distance.',
    '- **Multifocal:** **near + distance foci**, at the cost of **halos and glare**; **high patient selection required**.',
    '- **Extended depth of focus (EDOF):** a **continuous range**, with **fewer halos than multifocal**.',
    '- **Toric:** **corrects corneal astigmatism** — **⚠️ the axis must be marked pre-operatively**.',
    '- **Blue-light filtering:** protective against phototoxicity; standard in most modern IOLs.',
    '',
    '- **⚠️ The power comes from biometry**, not from the lens type — *cts-3*.',
    '',
    'Src: L18 lines 312–345'
  ].join('\n'),
  qs: []
},

{
  id: 'cts-6', w: 'must',
  h: 'Post-operative complications — most common, and most serious',
  body: [
    '### ⚠️ PCO — posterior capsule opacification. MOST COMMON, late',
    '- **Timing:** **months to years.**',
    '- **Mechanism:** **lens epithelial cells migrate onto the posterior capsule** — the **"after-cataract"**.',
    '- **Presentation:** **gradual RETURN of visual blurring** after a good result.',
    '- **Treatment: Nd:YAG laser capsulotomy** — outpatient, definitive, excellent outcomes.',
    '',
    '### ⚠️ Endophthalmitis. MOST SERIOUS, sight-threatening',
    '- **Timing:** **24–72 h (acute)**, or **weeks (delayed)**.',
    '- **Organisms:** **CoNS — Staphylococcus epidermidis most common** — then S. aureus, streptococci.',
    '- **Signs:** **pain, redness, reduced VA, HYPOPYON, yellowish vitreous haze.**',
    '- **Treatment:** **urgent VITREOUS TAP + intravitreal antibiotics — vancomycin + ceftazidime**; **vitrectomy** if severe.',
    '- *The map separating endophthalmitis from panophthalmitis and from orbital cellulitis is in `op-orbit-mass`.*',
    '',
    '### Cystoid macular oedema (CME) — Irvine–Gass syndrome',
    '- **Timing:** **weeks to months.**',
    '- **Mechanism:** **fluid accumulating in HENLE’S LAYER** of the macula.',
    '- **Risk raised by:** **vitreous loss, uveitis, DM, pre-existing CME**.',
    '- **Diagnosis: OCT — the PETALOID fluid pattern.**',
    '- **Treatment:** topical **NSAIDs + steroids**; **sub-Tenon’s triamcinolone**.',
    '',
    '### Corneal decompensation',
    '- **Mechanism:** **bullous keratopathy from ENDOTHELIAL CELL LOSS** — especially in **Fuchs’ dystrophy**.',
    '- **Also:** retained viscoelastic, raised IOP.',
    '- **Prevention:** **low-energy phaco**, and **removal of the OVD**.',
    '- **Treatment:** **penetrating or endothelial keratoplasty (DSAEK / DMEK)**.',
    '',
    '### Refractive surprise — immediate',
    '- **Cause:** **biometry inaccuracy, the wrong formula, or IOL misidentification.**',
    '- **Prevention:** double-check the calculation; **modern formulae for outlier eyes**.',
    '- **Treatment:** **IOL exchange, piggyback IOL, or LASIK enhancement.**',
    '',
    '### The rest',
    '- **⚠️ Capsule rupture:** **posterior capsule rupture with vitreous loss (intra-operative) → higher risk of RETINAL DETACHMENT**.',
    '- **Dropped nucleus** — needs vitrectomy.',
    '- **IOL decentration or dislocation** · **raised IOP**, transient or glaucomatous.',
    '- **Wound leak or wound burn** (phaco tip) · **iris trauma (IFIS)**.',
    '',
    'Src: L18 lines 379–425'
  ].join('\n'),
  qs: []
},

{
  id: 'cts-7', w: 'must',
  h: 'Aphakia — the eye with no lens, and how it is corrected',
  body: [
    '### Causes',
    '- **ICCE** (historical) · **posterior dislocation of the IOL into the vitreous** · **traumatic lens loss**.',
    '',
    '### Refractive consequence',
    '- **+10 to +12 D of HYPERMETROPIA** in a previously emmetropic eye — the eye has lost a third of its power.',
    '',
    '### Classic signs',
    '- **Iridodonesis** — a **tremulous iris**, with nothing behind it to rest on.',
    '- **Deep anterior chamber** · **jet-black (dark) pupil** · **absence of the lens**.',
    '',
    '### ⚠️ The three corrections, and the number that separates them',
    '',
    '|Correction|Binocular aphakia|Monocular aphakia|Image magnification|',
    '|---|---|---|---|',
    '|**Aphakic spectacles (+10–12 D)**|**suitable**|**LEAST suitable**|**~30 % → ANISOKONIA → binocular diplopia**|',
    '|**Contact lens**|**suitable**|**suitable**|**~7–10 % → minimal anisokonia, no diplopia**|',
    '|**IOL**|**suitable**|**suitable — MOST PHYSIOLOGICAL**|**~3 % → no anisokonia**|',
    '',
    '- **⚠️ The rule the table encodes:** **the closer the correction sits to the lens’s own plane, the smaller the magnification** — spectacles sit furthest forward and magnify most, which is why **monocular aphakia must not be corrected with glasses**.',
    '- **Spectacle drawbacks in full:** **thick, minifying, and a RING SCOTOMA**.',
    '- *`L17` spells it **anisokonia**; the standard spelling is aniseikonia (not taken from the course material).*',
    '',
    '### Paediatric aphakia',
    '- **Contact lens preferred under 2 years**; **secondary IOL once eye growth stabilises (~2 years)**.',
    '',
    'Src: L17 lines 311–333; L18 lines 426–466'
  ].join('\n'),
  qs: []
},

{
  id: 'cts-8', w: 'high',
  h: 'Pseudophakia — the eye with an artificial lens',
  body: [
    '|Feature|Finding|',
    '|---|---|',
    '|**Slit-lamp signs**|**IOL visible in the pupillary area**; **haptics** may be seen at the periphery; **Purkinje reflexes from the IOL surfaces**|',
    '|**Posterior capsule**|**remains** — it supports the IOL in the bag, and **can opacify (PCO → YAG laser)**|',
    '|**Refraction**|usually **emmetropic if the biometry was correct**; **NO ACCOMMODATION** — a presbyopia-like state|',
    '|**Key finding**|absent crystalline lens, **PCIOL in the capsular bag**, **clear red reflex if there is no PCO**|',
    '|**Watch for**|**PCO · decentration · tilt · sunset/sunrise syndrome**|',
    '',
    '- **⚠️ Aphakic versus pseudophakic, at a glance:** the **aphakic** eye is **+10 to +12 D hypermetropic with a tremulous iris**; the **pseudophakic** eye is **emmetropic with a visible implant**. Both have lost accommodation.',
    '',
    'Src: L18 lines 426–466'
  ].join('\n'),
  qs: []
},

{
  id: 'cts-9', w: 'know',
  h: 'Modern advances — six, and what each actually changes',
  body: [
    '- **FLACS — femtosecond laser:** laser incisions, capsulorhexis and nuclear fragmentation. **More reproducible capsulorhexis, less phaco energy — but NO clear superiority over conventional phaco in most RCTs** for routine cases.',
    '- **EDOF and trifocal IOLs:** premium lenses reducing spectacle dependence. **EDOF** gives a continuous range with fewer halos; **trifocal** gives near, intermediate and distance. **Patient selection is critical.**',
    '- **Light-adjustable IOL (LAL):** **non-invasive UV adjustment of IOL power AFTER healing.** FDA approved; **excellent for post-LASIK eyes with unreliable biometry**.',
    '- **Dropless cataract surgery:** **intracameral antibiotics (cefuroxime, moxifloxacin) ± steroids** at the end of the case. Cuts the drop burden and **guarantees compliance**; becoming standard.',
    '- **AI in biometry:** **Kane, Pearl-DGS, ORCA** — machine-learning formulae that **outperform traditional ones in outlier eyes**.',
    '- **⚠️ Pharmacologic treatment:** **lanosterol and oxysterols**, drops aiming to dissolve early cataract. **Preclinical and early trials — NOT clinical standard. SURGERY REMAINS THE DEFINITIVE TREATMENT.**',
    '',
    'Src: L18 lines 309–310, 538–568'
  ].join('\n'),
  qs: []
}

    ]
  }
};

/* ============================================================================
   ⚠️⚠️ FINAL MEASUREMENT — DELIBERATELY EMPTY OF NUMBERS.

   Placed here, after the closing brace, because it is physically the last
   thing in the file. The counts were taken from disk after the last content
   edit and are reported in the completion manifest, not written here — a
   number written into the file is a number that must be re-verified after
   every subsequent edit, and this file will be edited again when it is
   spliced into `app\data\theory.ophtho.js`. Eleven headers in this project
   have already documented work their file did not contain, including one
   whose per-section breakdown summed exactly and was still stale.

   The re-measure command is in the header block above.
   ============================================================================ */
