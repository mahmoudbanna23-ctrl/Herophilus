/* op-refract + op-refract-astig — "Errors of Refraction", Ophthalmology.
   Written 2026-08-17 under START-HERE.md §14 (slide-density revision notes),
   §14.1 (budget and page prediction), §14.2 (the two-sided coverage floor),
   §14.3 (telegraphic style), §14.3a (layout and the mdLead() anchor rule) and
   §14.5 (the deferral register), plus content\ophtho\theory-plan.md ("What
   writing the first twelve chapters taught"). Shape copied from
   content\ophtho\theory-drafts\op-red.draft.js and op-ret.draft.js, the
   module's two accepted splits of 2026-08-17.

   ⚠️⚠️ THIS FILE HOLDS TWO CHAPTERS. The second key, `op-refract-astig`, is
   NEW and must be registered in app\data\modules.js by the hub — this file
   does not touch that shared file, any app\data\* file, MEMORY.md, any resume
   file, or git.

     `op-refract`        "Errors of refraction — the optics, myopia and
                         hyperopia"                            deck pp.1–60
     `op-refract-astig`  "Astigmatism, presbyopia and prescribing"
                                                               deck pp.61–88

   Naming follows the module's own descriptive style: `op-cornea` /
   `op-cornea-surg`, `op-cat` / `op-cat-surg`, `op-red` / `op-red-mgmt`.

   ============================================================================
   THE SOURCE, AND HOW IT IS CITED.

   `content\ophtho\lectures\L7,8) Refractive errors.txt` — the visual read of
   2026-08-17, cache 1,545 → 7,004 words. 88 landscape pages, titled "Eye
   Optics and Errors of Refraction", credited on the title slide to Tamer
   Massoud MD PhD (⚠️ the PDF metadata disagrees: Title "5th year
   Ophthalmology", Author "amr mohamed mahmoud elhady" — recorded in the cache,
   not resolved here).

   ⚠️ THE DECK PRINTS NO SLIDE NUMBERS OF ITS OWN. The cache says so
   explicitly, checked visually on all 88 renders and by text-layer grep at
   both ends and the middle: no footer, no corner numeral, no "n of 88". Every
   page number in this file is therefore a PDF PAGE, taken from the render
   stamps, and the `Src:` lines say `pp.` for that reason. Deck label in the
   Src lines:

     L7,8   = L7,8) Refractive errors.pdf — 88 pp. COUNTED.
     L15,16 = L15,16) Cornea.txt, via `cor-21`–`cor-24`   — cited only
     L17/L18 = the cataract decks, via `cat-1`, `cat-4`, `cts-3`, `cts-7`,
              `cts-8`                                     — cited only
     L1,2   = via `va-2` and `va-4` (acuity notation, the pinhole) — cited only
     L3,4   = via `pup-3`, `pup-4`, `va-14`               — cited only
     L11/L12 = via `glc-6`, `glc-11`, `glc-12`            — cited only

   ============================================================================
   THE SPLIT — DECIDED BY THE HUB BEFORE BRIEFING, TESTED AGAINST THE DECK
   HERE, AND CONFIRMED. The seam is p61, "Astigmatism: definition".

   ⚠️ THE DECK ITSELF ARGUES FOR THIS SEAM, AND THE READING AGENT'S "DO NOT
   SPLIT" RECOMMENDATION RESTED ON THE NUMBER THE RENDER WAS COMMISSIONED TO
   REPLACE. Its 1,540-word figure is the `pdftotext` count. Finding 6 of the
   cache, written by the same agent, names p61 as the deck's own even seam and
   gives 914 words before / 626 after ON THE TEXT LAYER — the same 59/41 ratio
   this file measures on the transcription. So the recommendation and the
   evidence inside the same file point in opposite directions, and the
   evidence wins.

   MEASURED FROM THE TRANSCRIPTION, BY LINE RANGE (§14.1(a)). Two conventions
   are in circulation and both are reported, because they differ by ~10 % and
   the difference is all cache apparatus (the `─────` rules and the
   `SLIDE n — …` headers, which are the transcriber's, not the lecturer's):

     RAW, every line in the range:
       lines  163– 852  (SLIDES 1–60)   3,164 w
       lines  853–1203  (SLIDES 61–88)  2,031 w
     APPARATUS STRIPPED (rules and SLIDE headers removed):
       lines  163– 852                  2,562 w
       lines  853–1203                  1,701 w

   The hub's brief quotes 2,682 / 1,757 — between the two, and the ratio is
   identical in all three (59.5 / 40.5, 60.1 / 39.9, 60.4 / 39.6). ⚠️ NO
   CONVENTION CHANGES THE DECISION. As ONE chapter the deck is ~4,300–5,200
   counted words; at `pages ≈ words ÷ 240` that is 18–21 printed pages against
   a ~10-page operative ceiling and a 13-page hard shape.

   Reproduce with:
     node -e "const fs=require('fs');
       const L=fs.readFileSync('content/ophtho/lectures/L7,8) Refractive errors.txt','utf8').split(/\r?\n/);
       const W=(a,b)=>L.slice(a-1,b).join(' ').split(/\s+/).filter(Boolean).length;
       console.log(W(163,852), W(853,1203))"

   Per-block, apparatus stripped, so the internal arithmetic is visible:
     pp. 1–17  optics preamble                480 w  ⚠️ see the warning below
     pp.18–38  fundamentals, lenses, measure 1,049 w
     pp.39–48  myopia                          453 w
     pp.49–60  hyperopia                       580 w   → PART 1 = 2,562
     pp.61–71  astigmatism                     750 w
     pp.72–81  presbyopia                      558 w
     pp.82     prescription form               114 w
     pp.83–88  anisometropia + close           279 w   → PART 2 = 1,701

   ⚠️ THE 480 WORDS AGAINST pp.1–17 ARE THE TRANSCRIBER'S, NOT THE LECTURER'S.
   Those sixteen slides carry 22 WORDS OF SLIDE TEXT BETWEEN THEM (1.4 a page);
   the rest is the cache describing photographs — "Photograph only: stage
   spotlights over a band. No text, no label." The same inflation affects
   pp.76–80 (five untitled presbyopia photographs) and pp.86–87. So TERM 1
   OVERSTATES PART 1 BY ROUGHLY 400 WORDS and Part 2 by roughly 80. Stated
   here so the hub reads the outcome against the right number.

   WHY p61 AND NOT THE TWO NEAREST ALTERNATIVES:

     1. IT IS THE ENTITY BOUNDARY. pp.39–60 run myopia then hyperopia on ONE
        identical scaffold — definition arrow, far-point footer, Causes tree
        (axial / curvature / index), Clinical presentation, Complications,
        Treatment tree. The two are taught as a matched pair and every
        comparison in the bank (near point, presbyopic onset, which lens,
        which squint, which glaucoma) is a comparison BETWEEN them. Splitting
        the pair would strand half of every comparison.
     2. ASTIGMATISM RESTARTS THE DECK. p61 opens with a fresh definition that
        does not use the four-box arrow, a fresh etymology (a = no, stigma =
        point), and a new organising idea — MERIDIANS rather than a single
        focus. Everything from p61 on (astigmatism, the near point,
        presbyopia, the prescription form, anisometropia) is the second
        teaching session in all but name; the filename records two sessions
        and the file marks no seam.
     3. NO QUESTION STRADDLES IT, after the assignment below. 22 of the 38 are
        answered wholly within pp.1–60 and 16 wholly within pp.61–88. The two
        that came closest are handled explicitly: `opqb-t2-111` (cylindrical
        lenses) is answered by p32's LENS TREE, which is Part 1's, so it is
        filed there and Part 2's treatment section points back rather than
        repeating the tree; and `opqb-t2-89` (−8 D myopia, delayed presbyopia)
        is filed to Part 2, because the fact that decides it is p75's myope
        cell even though its three distractors are Part 1's.

     REJECTED — SPLIT AT p39, THE START OF MYOPIA. This is the seam the cache
     names as the strongest CONTENT seam, and it is the one the numbers
     forbid: 395 / 1,145 on the text layer, and 1,529 / 1,033 on the
     transcription — either way the halves differ by more than 40 %, and the
     first half would be almost entirely definitions with no disease in it.
     The cache calls it "badly unbalanced" itself.

     REJECTED — SPLIT AT p53, the most even seam available (1,338 / 1,224,
     within 5 %). It falls INSIDE HYPEROPIA, between the definition slides and
     the causes tree, cutting one entity in half across two chapters. §14.1's
     split rule prefers the seam no question straddles and the module's own
     rule ("choose the seam from the content") forbids a seam chosen purely
     for balance. Four questions would straddle it.

   ============================================================================
   BUDGET — §14.1: budget = max(counted lecture words, 25 × linked questions),
   floor 600, cap 3,000 PER CHAPTER; operative ceiling ~2,400 body words.

     PART 1  TERM 1 = 2,562–2,682 (convention)   TERM 2 = 25 × 22 = 550
             BUDGET = TERM 1. ⚠️ It sits ABOVE the ~2,400 operative ceiling
             before a word is written, and ~400 of it is photograph
             description. Written against ~2,400–2,700 and reported.
     PART 2  TERM 1 = 1,701–1,757                TERM 2 = 25 × 16 = 400
             BUDGET = TERM 1.

   DIAGRAM-DECK CHECK (§14.1). Words per non-blank line over the slide blocks:
   pp.1–60 = 4.6, pp.61–88 = 5.9, against ~2.0 that triggers the diagram-deck
   correction and 5.4 for `L4) PHARYNGEAL SUPPURATIONS`, the ENT prose
   benchmark. Neither half triggers the correction. ⚠️ BUT PART 1 IS THE
   MODULE'S FIFTH-PATTERN CASE IN REVERSE: its low figure is produced by 21
   photograph-only pages inside it, not by diagram density, so the correction
   would have been applied for the wrong reason. Stated rather than applied.

   ⚠️ ENTITY / FRAMEWORK FLOOR, COUNTED BEFORE WRITING (§14.1's `ent-dysph`,
   `ent-neck` and `ent-phon` rules — cost framework slides one by one, cost a
   grid at rows × columns, and say the overrun up front):

     PART 1
       Optics preamble — 5 concepts + 1 formula, 5×2 grid: framework ~140
       Emmetropia / ametropia / far point — 2 definitions + a 4×2 grid: ~180
       Dioptre, the three powers, the two determinants, axial length and its
         two unreconciled values — 4 framework blocks + two grids: ~230
       The four errors (4×2) + the lens tree (3×4) + the two bedside
         signs: ~230
       The three correction modalities (3×2) + the surgery cross-reference
         paragraph that serves BOTH chapters: ~180
       ⚠️ MEASUREMENT — the deck's largest hole. Three photograph slides, zero
         procedure text, two questions. Objective (2), cycloplegia (3 agents),
         subjective (4 named techniques): ~380 and almost all of it tagged
       Myopia — definition + causes tree (3×3) + the index-myopia register
         delivery: ~250
       Myopia — presentation, the two clinical types, the 6 D / 4–5 D
         contradiction: ~200
       Myopia — complications tree (5 rows) + the staphyloma gap-fill: ~230
       Myopia — treatment tree + the age-split reason + the myopia-control
         absence: ~180
       Hyperopia — definition + causes tree (3×3): ~200
       Accommodation — mechanism, what does not change, the plus-only rule: ~180
       ⚠️ The three components (latent / facultative / absolute / manifest /
         total) — 5×3 grid + the age behaviour of each. ABSENT FROM THE DECK,
         two questions: ~250
       Hyperopia — presentation by decade (3×2) + asthenopia: ~250
       Hyperopia — complications + treatment + what the deck withholds: ~250
       ⚠️ Counselling — five myths, none of them in the deck, 5×2 grid: ~230
       = ~3,560 forecast against a 2,562–2,682 budget

       ⚠️⚠️ SAID UP FRONT, PER §14.1: PART 1 CANNOT MEET BOTH ITS COVERAGE
       FLOOR AND ITS TERM 1. The overrun is ~35 % and it is located in exactly
       four places, all of them the §14.2(2) half of the floor rather than the
       §14.2(1) half:
         · measurement (~380) — three photograph slides and two questions
         · the hyperopia components (~250) — zero deck words, two questions
         · counselling (~230) — zero deck words, five questions
         · the staphyloma sites and the accommodative-esotropia mechanism
           (~120) — zero deck words, one question and one distractor set
       That is ~980 words the deck does not contain and eleven questions
       require. Removing them buys the budget and leaves ELEVEN OF TWENTY-TWO
       QUESTIONS UNANSWERABLE, which §14.1 forbids ("the budget is a ceiling
       on words, never a licence to delete a protected fact"). The compression
       actually applied instead, itemised: every named surgical procedure is
       CROSS-REFERENCED to `cor-21`–`cor-24` rather than described (~250 saved,
       and it is the failure the brief named as the one most guarded against);
       the pinhole to `va-4`; acuity notation to `va-2`; the near reflex to
       `pup-3`/`pup-4`; the shallow-chamber grid to `va-14`/`glc-12`; the
       cataract morphology to `cat-4`; aphakia to `cts-7`. Written against
       ~2,400–2,700 and the pages reported.

     PART 2
       Astigmatism — definition, the two focal lines, the football
         analogy: ~200
       Causes tree (3 levels) + the lenticular-cancellation argument: ~230
       ⚠️ Three types or five — TWO grids, 3×2 and 5×2, because the deck
         prints both counts and the bank asks from both: ~270
       ⚠️ Axis notation and with/against the rule — 3×4 grid. ABSENT: p65 is
         the broken graphic where it belonged. One question: ~230
       Clinical presentation + the deck-versus-bank asthenopia divergence: ~160
       Treatment — the 2×3 regular/irregular grid + radial keratotomy
         (absent from the deck, a distractor) + the glasses defect note: ~290
       Near point (3×2) + amplitude (3×2) + presbyopia definition and
         causes: ~270
       Presbyopia presentation — the deck's densest slide, three column
         groups, seven cells + the myope arithmetic: ~280
       Presbyopia treatment — 3×2 + the near-add ladder (absent): ~200
       ⚠️ The prescription form (5×3, and every data cell is blank) + the
         four prescribing errors (4×2). Almost wholly absent: ~280
       Anisometropia, aniseikonia and amblyopia — 2 definitions + the 4 D
         grid + treatment + a four-line amblyopia account (absent): ~320
       = ~2,730 forecast against a 1,701–1,757 budget

       ⚠️ PART 2's OVERRUN IS ~57 % AND IT IS THE SAME SHAPE. Located: axis
       and with/against the rule (~230), the prescription fields and the
       prescribing errors (~280), radial keratotomy (~90), the near-add
       ladder (~60), the amblyopia account (~140) — ~800 words the deck does
       not contain, required by five questions. Compression applied: the
       rigid-lens mechanism and the keratometry contrast go to `cor-24` rather
       than being restated; the lens tree stays in Part 1 and is pointed at;
       pseudophakia to `cts-8`; aphakic magnification to `cts-7`. Written
       against ~2,000–2,300.

     COMBINED FORECAST ≈ 5,000–5,400 body words. As ONE chapter that is
     21–23 printed pages. SPLIT — confirmed by the deck, not just by the brief.
     As two: ~10–11 pp and ~8–9 pp at ÷240. ⚠️ AND THIS MODULE'S ESTIMATOR HAS
     OVER-PREDICTED BY 5, 2 AND 2 PAGES (`op-red-mgmt`, `op-insid`, `op-va`)
     and under-predicted once (`op-glauc`, 10.8 → 12). Both halves are
     expected inside the shape; the hub prints and rules.

   ============================================================================
   ⚠️ MODULE CHECK — WHAT THIS PAIR MUST NOT RE-WRITE. Every term was greped
   across app\data\theory.ophtho.js (202 sections) before a word was written,
   and against the 27 cached decks before anything was called a gap.

     ⚠️⚠️ REFRACTIVE SURGERY IS ALREADY WRITTEN AND IS NOT REPEATED HERE. Read
     before writing, as instructed: `cor-21` (selection; topography and
     pachymetry as the two mandatory investigations), `cor-22` (the four laser
     procedures compared — LASIK / PRK / FemtoLASIK / SMILE, at rows ×
     columns), `cor-23` (post-LASIK ectasia, RSB <300 µm, CCT <500 µm),
     `cor-24` (irregular astigmatism; keratometry vs topography; why an RGP
     lens works). ⚠️ NOTE `cor-24`'s OWN Src LINE ALREADY CITES
     `L7,8 "Astigmatism — Irregular", "Treatment"` — the cornea chapter
     borrowed from THIS deck, not the other way round. So the p71 treatment
     tree is reproduced here in full, because it is this deck's own slide and
     `cor-24` carries only the four-rung IRREGULAR ladder, not the regular
     branch; but the RGP MECHANISM and the KERATOMETRY CONTRAST are pointed at
     and not restated. Every treatment section in both chapters NAMES the
     option and cross-references. No second account of the four laser
     procedures exists in this file — verified by grep of the finished draft
     for `SMILE`, `Femto`, `flap`, `ablation`, `pachymetry`: zero hits.

     ⚠️ ALSO POINTED AT, NOT REWRITTEN:
       · THE PINHOLE — `va-4` (8 hits module-wide) and `va-6`. Named three
         times here as a cross-reference and never explained.
       · ACUITY NOTATION (6/6, 6/60, the charts) — `va-2`. Never restated.
       · ACCOMMODATION AS A REFLEX — `pup-3` (fixate distance to switch it
         off) and `pup-4` (light–near dissociation, cortically driven). What
         is written here is the MECHANISM (ciliary muscle, zonules, lens
         shape), which returns ZERO module-wide: `ciliary muscle` = 0 hits.
       · THE SHALLOW ANTERIOR CHAMBER and the mid-dilated pupil — `va-14`,
         `glc-11`, `glc-12`. ⚠️ `glc-11` ALREADY QUOTES `L7,8`'s hyperopia
         complication slide verbatim ("lines 339–347, cited only"), so this
         file states the complication and points, rather than re-arguing the
         crowded angle.
       · NUCLEAR CATARACT, THE MYOPIC SHIFT AND "SECOND SIGHT" — `cat-4`.
       · APHAKIA (+10 to +12 D, iridodonesis, the 30 % / 7–10 % / 3 %
         magnification ladder) — `cts-7`. PSEUDOPHAKIA — `cts-8`.
       · KERATOCONUS as an entity — `cor-12`. BIOMETRY / A-scan — `cts-3`.
       · RETINAL TEARS, RRD and their symptoms — `rd-1`–`rd-10`. POAG —
         `glc-6`.

     ✅ VERIFIED MINE, ZERO HITS ACROSS ALL 202 SECTIONS: `anisometropia` 0 ·
        `retinoscop` 0 · `diopt`/`dioptre` as a unit 0 · `keratotomy` 0 ·
        `far point` 0 · `near point` 0 · `ciliary muscle` 0 · `staphyloma` 0 ·
        `latent` 0 · `facultative` 0 · `asthenopia` 0 · `with the rule` 0 ·
        `against the rule` 0 · `esotropia` 0 · `spherical equivalent` 0 ·
        `vertex` 0 · `autorefract` 0 · `trial frame` 0 · `add power` 0 ·
        `lenticonus` 0 · `occlusion therapy` 0 · `critical period` 0.
        `aniseikonia` returns ONE hit — `cts-7`, and it is spelled
        **anisokonia** there because `L17` spells it that way; the term is
        defined properly here from p83 and the two are cross-referenced.
        `presbyopia` returns ONE (`cts-8`, "a presbyopia-like state" after
        IOL implantation — not an account of the entity). `accommodat`
        returns 5, none of them the near point or the amplitude.

   ============================================================================
   ⚠️ THE REGISTER ROW OWED *TO* THIS CHAPTER — VERIFIED AND DELIVERED.

     START-HERE.md §14.5 — `op-cat` → `op-refract`: "INDEX MYOPIA AS A
     REFRACTIVE ERROR."
     ✅ **DELIVERED — section `ref-7`.** Both clauses re-checked against the
     sources and both hold:
       · THE PAYLOAD IS IN THE RECEIVER'S OWN DECK. `L7,8` p.42 prints
         "• Index myopia:" with two children — "Increase refractive index of
         cornea" and "Increase refractive index of the lens nucleus (nuclear
         cataract)". Written into the causes grid verbatim.
       · THE ROW'S SECOND CLAUSE — that `op-cat` wrote the MECHANISM and never
         the TERM — is exact. `index myopia` returns ZERO across
         theory.ophtho.js; `cat-4` carries "the raised nuclear refractive index
         makes the lens stronger → ACQUIRED (INDEX) MYOPIA" and the
         'second sight' line, in a cataract-morphology grid, with no refractive
         classification anywhere near it.
       · `ref-7` therefore delivers the TERM inside the deck's own three-way
         cause tree, states the shift in one sentence (no change in axial
         length or corneal curvature), and cross-references `cat-4` for the
         morphology and the grid. NOT REWRITTEN THERE.
     ⚠️ The row is the ONE row the census records against `op-refract`. Counted
     from the §14.5 receivers column: `op-refract` = 1. It is now closed.

   ============================================================================
   ⚠️ REGISTER ROWS THIS PAIR FILES — §14.5. An unrecorded promise is a
   deletion, so each is named with its donor, its payload and its receiver, and
   each is stated as a claim the receiver must verify rather than as a fact.

     1. `op-refract-astig` (L7,8 p.83) → `op-squint` and/or `op-lid`:
        **AMBLYOPIA AS AN ENTITY** — the definition, the classification
        (strabismic / anisometropic / stimulus-deprivation), the critical
        period, occlusion therapy and its schedules, and the age at which
        treatment stops working. ⚠️ SECOND CLAUSE, STATED AND CHECKED:
        `amblyop` returns FOUR hits module-wide — `orb-16` (a consequence of
        an orbital mass), `va-6` (CSM and the objection-to-occlusion rule),
        `cat-11` and `cts-2` (paediatric cataract as an urgent indication) —
        and NONE of them defines, classifies or treats amblyopia. `op-cat`'s
        own open row, "paediatric cataract → the amblyopia and squint
        work-up", already names `op-squint` as its receiver, so this row
        joins it rather than opening a second front. ⚠️ AND IT IS BLOCKED:
        `L29) Sqint I` (35 pp) and `L30) Squint II` (23 pp) are both owed a
        visual read and extract 6.5 and 7.5 w/pp. **What is written here is
        the four-line minimum the two anisometropia questions require, tagged
        — it is deliberately NOT the entity account, and the entity account
        is owed.**
     2. `op-refract-astig` (L7,8 p.58, p.55) → `op-squint`:
        **ACCOMMODATIVE ESOTROPIA IN FULL** — the AC/A ratio, refractive
        versus non-refractive types, the full-correction rule, bifocals, and
        apparent divergent squint (positive angle kappa). SECOND CLAUSE:
        `esotropia` returns ZERO module-wide; the deck names it twice (p55
        "uncommonly develop accommodative esotropia in childhood period",
        p58 under Complications) and never expands it. The cache's own
        NOT-COVERED list records the same absence. **`ref-15` writes one
        tagged sentence of mechanism and treatment because a distractor set
        turns on it; everything else is owed.**
     3. `op-refract` (L7,8 pp.36–38) → `op-va`:
        ⚠️ **NOTICE, NOT A DEBT — RESOLVED IN PLACE AND RECORDED SO NOBODY
        RE-OPENS IT.** Retinoscopy, cycloplegic refraction and subjective
        refraction look like `op-va`'s ("Clinical / Ocular examination"), and
        they are NOT: `op-va` is merged, it was written from `L1,2` lines
        438–613 and `L3,4`, and `retinoscop` returns ZERO across the whole
        theory file. Two questions filed to `op-refract` test them
        (`opqb-t2-85`, `opqb-t2-97`). **Written HERE, in `ref-6`, tagged.**
        Nothing is owed to `op-va`; if the reconciliation pass wants the
        objective-refraction block cross-referenced from `va-2`, that is a
        one-line link, not a rewrite.
     4. `op-refract` (L7,8 p.16) → nobody — ⚠️ **RECORDED AS AN ABSENCE, NOT
        DEFERRED.** The deck gives n = c/v and prints NO VALUE of n anywhere,
        for any medium. `refractive index` returns two hits module-wide, both
        inside this pair's own source material. There is no chapter in the
        module whose deck carries the values, so this is reported rather than
        promised — the `op-ret` lesson about circular rows.
     5. `op-refract-astig` (L7,8 p.65) → nobody — ⚠️ **UNDELIVERABLE BY ANY
        CHAPTER, REPORTED WITH THE EVIDENCE.** The meridian/axis diagram is a
        broken graphic (see the defect list). `axis`, `meridian` and any
        degree notation return nothing usable across the 27 decks. The axis
        section is written from outside knowledge and tagged; NO ROW IS
        OPENED, because there is nothing for a receiver to deliver.

   ============================================================================
   ⚠️ THE DECK'S OWN DEFECTS — EACH VERIFIED AGAINST THE CACHE BEFORE USE,
   EACH RECORDED IN THE SECTION WHERE IT BITES, NONE SILENTLY CORRECTED
   (`CLAUDE.md` §4: correct it AND record what the source printed, cited).

     a. **"ACCOMMDATION" [sic] ×5** — the definition arrow on pp.18, 20, 28,
        39 and 49. Body prose spells it correctly throughout. → `ref-2`.
     b. **"Aniseikonia" (p83) vs "Anisiekonia" (p84)** — the same term, two
        spellings, consecutive slides. p83 is correct. → `ast-11`.
     c. **pp.36 and 37 are BOTH numbered "I."** — "I. AUTOMATED:
        AUTO-REFRACTOMETER" and "I. MANUAL: RETINOSCOPE". The second should be
        II. Confirmed on the render, not a text-layer artefact. → `ref-6`.
     d. **p42 drops a conjunction** — "Increased curvature of the cornea
        (e.g., keratoconus)  the  lens (e.g., lenticonus)": the word "or" is
        genuinely absent from the slide. → `ref-7`.
     e. **p61's definition has no closing parenthesis** — the bracket opened
        at "i.e., the cornea surface…" is never shut. → `ast-1`.
     f. ⚠️ **A REAL CONTRADICTION — THE HIGH-MYOPIA CUT-OFF.** p45 makes the
        simple/high boundary **6 D**; p75's presbyopia table calls "low
        myopes" those with **up to 4 to 5 D**. Two thresholds, two purposes,
        no reconciliation. **BOTH PRINTED, BOTH RECORDED**, in `ref-8` (where
        the 6 D line is taught) and again in `ast-8` (where the 4–5 D line is
        used). Neither is presented as the error.
     g. ⚠️ **A REAL INCONSISTENCY — HOW MANY TYPES OF ASTIGMATISM.** p64's
        tree gives THREE regular types (Simple, Compound, Mixed); pp.66 and 67
        give FIVE (Simple myopic, Compound myopic, Mixed, Simple hyperopic,
        Compound hyperopic). They are consistent — the five expand the three —
        and the bank asks from both. **BOTH GRIDS ARE WRITTEN**, in `ast-3`,
        with the relationship stated.
     h. ⚠️ **pp.85, 86 AND 87 ARE TITLED "Presbyopia / Treatment" AND THEIR
        CONTENT IS ANISOMETROPIA.** p85 turns on glasses-INDUCED DIPLOPIA,
        which is p83's aniseikonia problem and is not a presbyopic phenomenon;
        pp.86–87 are photographs of spectacle-corrected eyes placed after the
        anisometropia block. Presbyopia treatment is delivered ONCE, on p81.
        **Filed by content, flagged as mis-titled** — `ast-9` takes p81 alone,
        `ast-11` takes pp.85–87. → recorded in `ast-11`.
     i. ⚠️ **p65 RETURNS ZERO CHARACTERS AND IS A BROKEN GRAPHIC** — a single
        solid green circle crossed by a vertical and an oblique line, no
        title, no label, no caption; the deck's only 0-character page, and it
        sits exactly between the causes tree (p64) and the five-types figure
        (p66) where a meridian diagram belongs. **THIS IS WHY THE DECK TEACHES
        NO AXIS NOTATION**, which matters because a prescription is written
        with an axis. → `ast-4`, which is written from outside knowledge for
        that reason and says so.
     j. **AXIAL LENGTH IS UNRECONCILED** — 22–24.5 mm in prose (pp.42, 53)
        against 23.5 mm in the p27 figure, the deck's only single value. Both
        printed, both recorded. → `ref-3`.
     k. **p84 breaks font size mid-sentence** — "Unequal size of the retinal"
        small, "image of both eyes." large. A layout defect with no content
        loss; recorded here and not carried into the body, per §14.3's ban on
        bank meta-commentary in body text.
     l. **HYPEROPIA IS OFFERED FEWER SURGICAL OPTIONS THAN MYOPIA, WITH NO
        REASON GIVEN.** p47 lists PRK, LASIK, phakic IOL <40, clear lens
        extraction >40; p59 lists LASIK and clear lens extraction only.
        Recorded as printed in `ref-15`, and what is standard is supplied and
        tagged beside it.
     m. **THE DECK'S SPELLINGS, kept as printed:** "Corneal flatening" [sic]
        (p53) → `ref-11`.
     n. ⚠️ **A DEFECT THE BRIEF DID NOT LIST, FOUND WRITING `ast-5`:** p68 puts
        asthenopia in the **HIGHER** degrees of astigmatism; `opqb-t2-91`
        treats "accommodative asthenopia is more in **lower** degrees" as a
        TRUE statement (it is an EXCEPT question and that option is not the
        key). Deck and bank diverge on a non-key option. **BOTH HELD**, the
        deck quoted as printed and the standard reconciliation supplied and
        tagged, in `ast-5`. No key is disputed (`CLAUDE.md` §4).
     o. ⚠️ **A SECOND ONE, IN `ast-6`:** `opqb-t2-81` keys **glasses** as the
        option that does NOT correct irregular astigmatism, while p71's own
        tree offers **"Glasses (Mild degrees)"** for irregular astigmatism.
        **KEYED AS THE BANK PRINTS IT** (§4b — a defective key is noted, never
        disputed); the tension is recorded in one italic line beside the tree.
     p. **[illegible] AND NOT GUESSED:** the lower 2–3 lines of the p38 acuity
        chart (legible: 60 · 36 · 24 · 18 · 12) and two labels on the p34
        cylindrical-lens figure ("AXIS OF REVOLUTION", "GENERATING LINE", both
        low-resolution). Neither is written into the body as content; the p38
        chart is described as a photograph, which is what it is.

   ============================================================================
   ⚠️ THE GAPS — each settled by proving a negative across the deck AND the
   27 cached decks, each ANSWERED AND TAGGED IN PLACE, never declared
   (`CLAUDE.md` §4; tag style copied from `vsc-9` and `vsc-12`). "Read the
   slide before declaring a gap" has paid fifteen times in this module, so
   every item below was greped, misspellings included.

     1. RETINOSCOPY — TECHNIQUE. pp.36–38 are photographs with ZERO procedure
        text; `retinoscop` returns 0 across theory.ophtho.js and the only deck
        hits are this deck's own two slide titles. Two questions test it.
        → `ref-6`: with/against movement, neutralisation, the working distance
        and its 1.50 D allowance. Tagged.
     2. CYCLOPLEGIC REFRACTION AND THE AGENTS. ⚠️ **THE DECK CONTAINS NO DRUG
        NAME AT ALL** — the cache states it, verified. → `ref-6`:
        cyclopentolate, atropine, tropicamide with their roles. Tagged.
        ⚠️ Percentages are given because the bank's questions turn on
        "cycloplegic refraction" as a named investigation and a strength-free
        agent list is not usable; §9's "drug doses the material does not
        state" exclusion is overridden by §4a here and the override is stated.
     3. SUBJECTIVE REFRACTION. Duochrome, Jackson cross-cylinder, fogging,
        binocular balance — none named. → `ref-6`, one line, tagged.
     4. RADIAL KERATOTOMY. `keratotomy` returns ZERO in the deck and ZERO
        across the module; it appears only as a distractor in `opqb-t2-81`.
        → `ast-6`: what it was, why it is abandoned, and why it cannot correct
        an irregular surface. Tagged.
     5. HYPEROPIA'S MISSING SURGERY. → `ref-15`, tagged, beside the recorded
        absence.
     6. LATENT / FACULTATIVE / ABSOLUTE / MANIFEST / TOTAL HYPERMETROPIA. The
        deck classifies hyperopia by CAUSE only; all five terms return zero
        module-wide. Two questions. → `ref-13`, whole section, tagged.
     7. WITH / AGAINST THE RULE AND OBLIQUE ASTIGMATISM, AND AXIS NOTATION.
        → `ast-4`, whole section, tagged; the p65 defect is the reason.
     8. THE NEAR-ADD LADDER. p81 says "spherical plus lens addition" and
        stops. → `ast-9`, one line, tagged.
     9. THE PRESCRIPTION FIELDS. "PD" is never expanded in 88 pages; every
        data cell on p82 is blank. → `ast-10`, tagged.
    10. AMBLYOPIA — the four-line minimum. → `ast-11`, tagged, and the entity
        account is deferred (register row 1).
    11. STAPHYLOMA — the definition and the non-posterior sites. `staphyloma`
        returns ZERO module-wide; the deck names only "posterior staphyloma"
        in a complication list, and `opqb-t2-112` offers equatorial, ciliary
        and intercalary as distractors. → `ref-9`, tagged.
    12. MYOPIA CONTROL. The deck offers none — no atropine, no
        orthokeratology, no defocus spectacle, no outdoor time — and its only
        statement is that myopia "often stops progression in the late 2nd
        decade". → `ref-10`, one tagged clause, plus the recorded absence.
    13. COUNSELLING — the five myths. The deck contains no counselling content
        of any kind. → `ref-16`, whole section, tagged.
    14. THE ACCOMMODATIVE-ESOTROPIA MECHANISM. → `ref-15`, one tagged line;
        the rest is deferred (register row 2).

     ✅ CHECKED AND NOT A GAP, so nothing was supplied:
       · KERATOMETRY. Looks absent — the deck never names it — but
         `keratometry` returns **11 hits** module-wide (`cor-21`, `cor-24`,
         `cts-3`). Cross-referenced from `ast-2`, not supplied.
       · THE PINHOLE. `pinhole` returns 8 hits (`va-4`, `va-6`). Named and
         pointed at three times, never explained.
       · BIOMETRY / A-SCAN. Absent from this deck; `cts-3` and `cor-21` carry
         it. Cross-referenced from `ref-3`.
       · APHAKIA'S CORRECTION. p53 names aphakia as a cause of index
         hypermetropia and stops; `cts-7` carries +10 to +12 D, iridodonesis
         and the three-correction magnification table in full. Cross-
         referenced from `ref-11` and `ast-11`.
       · KERATOCONUS. Named twice by this deck and never described; `cor-12`
         owns it (20 hits). Cross-referenced.
       · SNELLEN / 6-METRE NOTATION. Never in this deck; `va-2` carries the
         fraction and the full conversion table. Cross-referenced.

   ============================================================================
   QUESTION ASSIGNMENT — ALL 38 READ, ALL 38 LINKED. ⚠️ THE HUB REFILES FROM
   THESE `qs` ARRAYS, so an unlinked question is a lost question. Each is
   filed to the section that actually answers it, not to the section it is
   nearest.

     PART 1 (22): ref-2 t2-103 · ref-4 t2-75, t2-111 · ref-6 t2-85, t2-97 ·
       ref-7 t2-74, t2-86, t2-95, t2-96 · ref-8 t2-107 · ref-9 t2-112 ·
       ref-12 t2-80 · ref-13 t2-87, t2-90 · ref-14 t2-98, t2-104, t2-109 ·
       ref-16 t1-2, t1-67, t1-68, t1-69, t1-71
     PART 2 (16): ast-1 t2-79 · ast-2 t2-77 · ast-3 t2-73, t2-105 ·
       ast-4 t2-91 · ast-6 t2-81, t2-108 · ast-7 t2-72, t2-110 ·
       ast-8 t2-82, t2-89 · ast-9 t2-101 · ast-10 t2-88 · ast-11 t2-76,
       t2-102, t2-106
     22 + 16 = 38, no question in two arrays, no question in none.

     ⚠️ THE TWO CALLS THE BRIEF ASKED FOR, WITH REASONS:

     (i) `opqb-t2-81` — "Irregular astigmatism is NOT corrected by: glasses /
         contact lenses / radial keratotomy / LASIK". **RECOMMENDATION: KEEP
         IT IN `op-refract-astig` (filed to `ast-6`). Do NOT refile to
         `op-cornea-surg`.** Three reasons, in order of weight.
         · THE QUESTION IS ABOUT THE TREATMENT TREE, NOT ABOUT THE ENTITY.
           What decides it is p71's own regular/irregular treatment grid —
           which options exist for which type — and that slide is THIS deck's.
           `cor-24` carries the four-rung irregular LADDER (glasses mild /
           RGP / ICR / keratoplasty) and does not carry the regular branch at
           all, so a reader sent to `op-cornea-surg` sees half the comparison.
         · THE PROVENANCE RUNS THE OTHER WAY. `cor-24`'s own `Src:` line reads
           `L7,8 "Astigmatism — Irregular", "Treatment" (lines 402–442), cited
           only`. `op-cornea-surg` borrowed this deck; refiling the question
           there would file it away from its source.
         · THE DEFECT LIVES HERE. The bank keys GLASSES while p71 offers
           "Glasses (Mild degrees)" for irregular astigmatism (defect o). That
           note has to sit beside the tree it contradicts, and the tree is
           `ast-6`'s.
         ⚠️ AND THE COST OF KEEPING IT IS ZERO, because `ast-6` does not
         re-teach irregular astigmatism: it prints the deck's tree, writes the
         radial-keratotomy gap-fill the question needs and `cor-24` cannot
         supply, and points at `cor-24` for the mechanism. If the hub prefers
         the entity to own the question, the refile is one line and nothing in
         either chapter has to change — but the recommendation is to keep it.

     (ii) THE FOUR COUNSELLING QUESTIONS — `opqb-t1-2`, `opqb-t1-68`,
         `opqb-t1-69`, `opqb-t1-71`, and `opqb-t1-67` makes five.
         **CHECKED: THE DECK ADDRESSES NONE OF THEM, AND THE BRIEF'S GUESS IS
         CONFIRMED.** Evidence rather than impression — `glasses weaken`,
         `myth`, `reassur`, `parent`, `advice`, `screening`, `TV`, `rest`
         return nothing usable across the deck; the cache's NOT-COVERED list
         independently records the absence of myopia control, screening,
         paediatric refraction, genetics/risk factors and any patient
         guidance; and there is not one counselling sentence in 88 pages.
         **SO THEY ARE A TAGGED GAP-FILL AND THEY DO GET THEIR OWN SECTION —
         `ref-16`, a five-row grid, the whole section tagged.** Two further
         judgements, stated:
         · `opqb-t1-67` IS KEPT WITH THE OTHER FOUR rather than filed to the
           prescribing section in Part 2, because it is the same speech act —
           a patient acting on a false belief — and its answer is the same
           two-part rule the other four need (reversible asthenopia in an
           adult; irreversible amblyopia in a child). Splitting the five
           across the seam would put half a counselling script in each
           chapter. `opqb-t2-88` (an overcorrected emmetrope) is NOT one of
           them: it is a prescribing error found by examination, not a belief,
           and it belongs with the prescription form in `ast-10`.
         · THE SECTION IS PART 1's, not Part 2's, although Part 2 is the one
           titled "prescribing". The myths are about GLASSES AS CORRECTION
           (p35, Part 1) and MYOPIC PROGRESSION (p43, Part 1); their answers
           are grounded in p18–p20's definition, p43's natural history and
           p83's amblyopia line. Filing them in Part 2 would put the answers
           three chapters' worth of scrolling from the facts that ground them.

   ============================================================================
   OMISSION NOTE — cut on purpose, each a decision on the record (§9, §14.2):
     1. Distractor-by-distractor rejection (§14.2, §14.6). Every question's own
        `explanation` carries it, one click away through the `qs` link.
     2. The 16 optics slides AS SLIDES. pp.2–17 carry 22 words between them
        and are stock photographs and generic physics diagrams; `ref-1`
        carries the five concepts, the one formula and the two figure values
        (50°, and θ left unsolved) in a grid, and does not describe
        photographs the app does not hold.
     3. The 21 photograph-only pages (pp.30, 44, 48 caption aside, 57, 62–63
        partly, 69–70, 76–80, 86–87 and the p38 plate). Where a photograph
        carries a teachable caption it is written (p40/p51's "20' or 6 M"
        testing distance, p48's "Concave (minus power) lens corrects Myopia",
        p70's Normal Vision / Astigmatism pair); where it does not, it is not.
     4. The five repetitions of the definition arrow (pp.18, 20, 28, 39, 49).
        Written ONCE as a pattern in `ref-2` and then applied per entity —
        the deck's own 1,540 words are inflated by this repetition and the
        cache says so.
     5. Refractive-surgery procedure detail — the single largest deliberate
        omission, and the brief's own instruction. Named and cross-referenced
        throughout; `cor-21`–`cor-24` hold it.
     6. Snell's law arithmetic, the value of n, any worked refraction, any
        transposition and any spherical equivalent. The deck prints none of
        them and no question filed here needs one; named in the register and
        in `ast-4` so the absence is on the record rather than invisible.
     7. Question ids in body text, the teaching voice, bank meta-commentary,
        per-fact citation clauses (one `Src:` line per section), and any
        closing summary or "sieve" section (§14.3, measured at 100 %
        duplication).
     8. Epidemiology. The deck contains NO percentage and NO prevalence figure
        of any kind, for any refractive error, anywhere in 88 pages — recorded
        rather than supplied, because none of the 38 questions asks for one.

   ⚠️ A COMPRESSION PASS WAS RUN AFTER FIRST DRAFT, AGAINST THE FORECASTS
   ABOVE, AND NOT ONE FACT LEFT IN IT. What went was the §14.3-banned material
   the first draft still carried: connective and framing sentences, "why it
   matters" tails, two long verbatim block quotes reduced to the examinable
   phrase, and duplicated cross-reference sentences. Every deck fact, every
   number, every defect note, every tagged gap-fill and all 38 question links
   survived it unchanged. The measured outcome is reported to the hub, not
   written here.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field.
   No nested bullets anywhere — the renderer has never been given one.
   Every bold lead carries a `:` or `—` inside its first 44 characters, or is
   itself ≤44 characters, per §14.3a's mdLead() rule; the module audits at
   0 unanchored of 1,207 and this file is written not to break it.

   ============================================================================
   ⚠️ NO MEASURED WORD COUNT AND NO PAGE COUNT IS WRITTEN INTO THIS HEADER,
   DELIBERATELY — the hub's explicit instruction, and the choice `op-trauma`,
   `op-systemic`, `op-insid`, `op-cat`, `op-red` and `op-ret` all made. Nine
   headers in this project have carried a number the file did not support,
   including one taken "from disk after the final edit" that was still 265
   words short and one whose per-section breakdown summed exactly and was
   stale. THE HUB MEASURES FROM DISK AND PRINTS THE CHAPTERS.

   TO MEASURE, canonical definition — `W(s.body)` over every section, `Src:`
   lines INCLUDED, which is what `vth.js` and every ENT/paediatrics figure use:

     node -e "const vm=require('vm'),fs=require('fs');
       const c={};vm.createContext(c);
       vm.runInContext(fs.readFileSync('content/ophtho/theory-drafts/op-refract.draft.js','utf8'),c);
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

  /* ══════════════════════════ CHAPTER 1 of 2 ══════════════════════════
     op-refract — "Errors of refraction — the optics, myopia and hyperopia"
     Deck pp.1–60.                                                        */
  'op-refract': {

    intro: 'Refraction is set by two things only: the length of the eye, and the power of its cornea and lens. Myopia and hyperopia are taught on one identical scaffold — cause, presentation, complications, treatment — and almost every question turns on which of the two went wrong.',

    sections: [

{
  id: 'ref-1', w: 'know',
  h: 'The optics preamble — and the deck’s only formula',
  body: [
    '**The preamble:** sixteen slides of photographs and stock physics diagrams carrying **22 words between them** — vocabulary, not physics.',
    '',
    '|Term|What the slide shows|',
    '|---|---|',
    '|**Scatter**|**short wavelengths** striking particles, leaving **in all directions**|',
    '|**Reflection**|incident ray, **normal**, reflected ray, the two angles **drawn equal** — the law is never written|',
    '|**Diffraction**|plane wavefronts **spreading after a narrow slit**|',
    '|**Refraction**|a ray **bending at an air/water boundary**, incident **50°**, refracted angle left as **θ**|',
    '',
    '**Refractive index:** **n = c / v** — c the velocity of light in vacuum, v its velocity in the medium.',
    '- **⚠️ No value of n is printed** — not for cornea, aqueous, lens, vitreous, air or water; **Snell’s law is used on pp.13 and 17 and never named**.',
    '- **Where it returns:** refractive index is one of the two things that set corneal and lens **power** (`ref-3`).',
    '',
    'Src: L7,8 pp.2–17'
  ].join('\n'),
  qs: []
},

{
  id: 'ref-2', w: 'must',
  h: 'Emmetropia, ametropia, and the far point',
  body: [
    '**The definition arrow:** one four-box sentence, one phrase changed per error.',
    '',
    '**Emmetropia:** **parallel rays entering the eye are focused ON the retina while accommodation is at rest**.',
    '**Ametropia:** the same sentence, **NOT focused on the retina**.',
    '**Far point:** the point **conjugate with the retina, accommodation at rest** *(the phrasing is supplied; the deck prints only the footer boxes below — not in course material)*.',
    '',
    '|State|Far point, as printed|',
    '|---|---|',
    '|**Emmetropia**|**at infinity**|',
    '|**Ametropia**|**NOT at infinity**|',
    '|**Myopia**|**in front of the patient** — real, nearer than infinity|',
    '|**Hyperopia**|**BEHIND the eye** — virtual|',
    '',
    '- **⚠️ The hyperopic far point:** behind the globe, so **no real object focuses** on an unaccommodating hyperopic retina — which is why hyperopia hides in youth.',
    '- **Testing distance:** stated only inside two figures, **“Object at infinity (20′ or 6 M)”** (pp.40, 51). *Acuity notation is `va-2`.*',
    '',
    '*Deck defect: the arrow prints **“ACCOMMDATION”** on pp.18, 20, 28, 39 and 49 — five times; the body prose spells it correctly.*',
    '',
    'Src: L7,8 pp.18–21, 28–29, 39–41, 49, 52'
  ].join('\n'),
  qs: ['opqb-t2-103']
},

{
  id: 'ref-3', w: 'must',
  h: 'The dioptre, the eye’s power, and the two determinants',
  body: [
    '**The camera analogy:** object → light rays → **lens** → **film (retina)**.',
    '',
    '### The dioptre — the unit',
    '- **Definition:** the **unit of lens power**.',
    '- **The formula:** dioptres = **1 ÷ focal length in METRES**.',
    '',
    '### The eye’s own power',
    '',
    '|Element|Power|',
    '|---|---|',
    '|**Cornea**|**42–44 D**|',
    '|**Lens**|**18–20 D**|',
    '|**Total**|**approximately 60 D**|',
    '',
    '- **⚠️ The cornea carries about two-thirds** of the eye’s power.',
    '',
    '### The two determinants — the whole chapter is these',
    '- **Axial length of the eyeball:** the deck’s own gloss is **“Main Factor Usually”**.',
    '- **Power of cornea and crystalline lens:** set by **curvature** and **refractive index**.',
    '- **⚠️ Consequence:** every cause below is a change in **LENGTH**, **CURVATURE** or **INDEX**.',
    '',
    '### Axial length — two unreconciled numbers',
    '',
    '|Where|Value|',
    '|---|---|',
    '|Prose, pp.42 and 53|**22–24.5 mm**, the normal range|',
    '|Figure, p.27|**23.5 mm**, the only single value in the deck|',
    '',
    '*Both printed; the deck reconciles neither. Biometry / A-scan is never named here — it is `cts-3`’s.*',
    '',
    'Src: L7,8 pp.22–27, 30, 42, 53'
  ].join('\n'),
  qs: []
},

{
  id: 'ref-4', w: 'must',
  h: 'The four errors, and the lens that corrects each',
  body: [
    '|Error|Gloss as printed|',
    '|---|---|',
    '|**Myopia**|**near-sightedness**|',
    '|**Hyperopia**|**far-sightedness**|',
    '|**Astigmatism**|**formation of MORE THAN ONE FOCUS** by the optical system|',
    '|**Presbyopia**|**poor near vision as an ageing process**|',
    '',
    '- **⚠️ Two oddities, both printed:** **presbyopia** is counted among the errors of refraction and elsewhere called *“a normal aging process”*; **anisometropia is not on the list**, though taught on pp.83–87.',
    '',
    '### The lens tree',
    '',
    '|Lens|Sign|Effect on light|Corrects|',
    '|---|---|---|---|',
    '|**Concave — spherical**|**minus**|**DIVERGES**|**MYOPIA**|',
    '|**Convex — spherical**|**plus**|**CONVERGES**|**HYPEROPIA and PRESBYOPIA**|',
    '|**Cylindrical**|—|power in **one meridian only**|**ASTIGMATISM**|',
    '',
    '- **⚠️ Read it correctly:** concave and convex are the two branches of **SPHERICAL** lenses; **cylindrical is a separate top-level branch**.',
    '',
    '### Identifying a lens by hand',
    '- **Concave:** the object looks **SMALLER**, the image **MOVES WITH** the lens.',
    '- **Convex:** the object looks **LARGER**, the image **MOVES AGAINST** the lens.',
    '',
    'Src: L7,8 pp.31–33'
  ].join('\n'),
  qs: ['opqb-t2-75', 'opqb-t2-111']
},

{
  id: 'ref-5', w: 'must',
  h: 'The three ways a refractive error is corrected',
  body: [
    '|Method|The deck’s verdict, verbatim|',
    '|---|---|',
    '|**Glasses**|**the easiest and safest method of correction**|',
    '|**Contact lenses**|**cosmetic, a WIDER FIELD OF VISION** — but **risk of infection**|',
    '|**Refractive surgery**|**CORNEAL** (change the shape of the cornea) or **LENTICULAR**|',
    '',
    '- **⚠️ That is the entire contact-lens teaching:** no material, no wear schedule, no fitting, no care, **no named complication beyond “risk of infection”**.',
    '- **Procedures named:** **PRK · LASIK · phakic IOL · clear lens extraction**, plus **intracorneal ring segments** and **keratoplasty** for irregular astigmatism.',
    '- **⚠️ Named in the trees, never described** — no mechanism, no complication, no selection criterion beyond the age split.',
    '',
    '*Refractive surgery is written in full elsewhere and is not repeated: selection and the two mandatory investigations `cor-21` · the four laser procedures compared `cor-22` · post-LASIK ectasia `cor-23` · irregular astigmatism and the rigid-lens mechanism `cor-24`. Every treatment section below names its option and points here.*',
    '',
    'Src: L7,8 p.35 and the treatment trees pp.47, 59, 71; L15,16 via `cor-21`–`cor-24`, cited only'
  ].join('\n'),
  qs: []
},

{
  id: 'ref-6', w: 'must',
  h: 'Measuring the refraction — objective, cycloplegic, subjective',
  body: [
    '**⚠️ What the deck prints:** three photograph slides and **not one word of procedure**. Everything below the headings is **supplied and tagged** *(not in course material)*; two questions test it.',
    '',
    '### I. Objective',
    '',
    '|Method|What it is|',
    '|---|---|',
    '|**Auto-refractometer**|**the AUTOMATED method** — the patient fixates a target and the instrument reads the refraction|',
    '|**RETINOSCOPY**|**the MANUAL method** — a **streak retinoscope** throws light in and the examiner watches the **fundus reflex** move|',
    '',
    '- **⚠️ What retinoscopy is:** **an objective method of determining the state of refraction of the eye**. The reflex is the tool, the refraction the result — it does not visualise the retina.',
    '- **Reading the reflex:** **WITH** movement = hyperopia · **AGAINST** = myopia · lenses added until the reflex **fills the pupil and stops moving — neutralisation**.',
    '- **Working distance:** commonly **⅔ metre**, and its **1.50 D is subtracted** from the neutralising lens.',
    '',
    '### II. Cycloplegia',
    '- **The problem:** an active ciliary muscle **hides hyperopia and over-minuses a myope**.',
    '- **The fix:** a cycloplegic **paralyses the ciliary muscle**, so the **full** error is measured. **Mandatory in children and young adults**, and the only way to reveal **latent hyperopia** (`ref-13`).',
    '',
    '|Agent|Role|',
    '|---|---|',
    '|**Cyclopentolate 1 %**|the routine cycloplegic for refracting children|',
    '|**Atropine 1 %**|strongest and longest — **accommodative esotropia**, dense hyperopia|',
    '|**Tropicamide 1 %**|weak and short — dilates, **does not refract a young child**|',
    '',
    '*⚠️ The deck contains **NO DRUG NAME AT ALL** in 88 pages; the three agents are supplied and tagged.*',
    '',
    '### III. Subjective refinement',
    '- **The trial:** the objective result goes into a **trial frame** or **phoropter** and is refined against an acuity chart — the deck photographs both and captions neither.',
    '- **Techniques, supplied:** **duochrome (red–green)** for the sphere · **Jackson cross-cylinder** for cylinder power and axis · **fogging** · **binocular balance**.',
    '- *The pinhole is `va-4`; acuity notation and the charts are `va-2`.*',
    '',
    '*Deck defect: **pp.36 and 37 are BOTH numbered “I.”** — the second should be II. Confirmed on the render, not an extraction artefact.*',
    '',
    'Src: L7,8 pp.36–38, three photograph slides with no procedure text; the technique, the agents and the subjective tests are supplied and tagged'
  ].join('\n'),
  qs: ['opqb-t2-85', 'opqb-t2-97']
},

{
  id: 'ref-7', w: 'must',
  h: 'Myopia — the definition, and the three causes',
  body: [
    '**Myopia:** parallel rays focused **IN FRONT OF the retina**, accommodation at rest. **Far point in front of the patient.**',
    '',
    '- **⚠️ Optically:** the eye’s **power is MORE than it needs** for its length. Accommodation only **adds plus**, so it **cannot help a myope**.',
    '',
    '### Causes',
    '',
    '|Type|Sub-type|Mechanism as printed|',
    '|---|---|---|',
    '|**1. AXIAL**|—|**axial length LONGER than normal (22–24.5 mm)** — the common one|',
    '|**2. REFRACTIVE**|**Curvature**|**increased curvature of the CORNEA (keratoconus)** or **LENS (lenticonus)**|',
    '|**2. REFRACTIVE**|**INDEX**|**increased refractive index of the CORNEA**; of the **LENS NUCLEUS — nuclear cataract**|',
    '',
    '- **⚠️ Index myopia:** a sclerosing nucleus raises the lens’s refractive index, the eye becomes optically stronger, and the refraction shifts **myopic with NO change in axial length or corneal curvature** — the **myopic shift**, and the temporary reading-without-glasses it buys is **“second sight”**. *Morphology and the discrimination grid are `cat-4`.*',
    '- *Keratoconus (`cor-12`) and lenticonus are named here and described nowhere in this deck.*',
    '',
    '*Deck defect: p.42 prints “curvature of the cornea (e.g., keratoconus) **the** lens (e.g., lenticonus)” — the word **“or” is genuinely absent** from the slide.*',
    '',
    'Src: L7,8 pp.39–42; `cat-4`, `cor-12`, cited only'
  ].join('\n'),
  qs: ['opqb-t2-74', 'opqb-t2-86', 'opqb-t2-95', 'opqb-t2-96']
},

{
  id: 'ref-8', w: 'must',
  h: 'Myopia — presentation, and the two clinical types',
  body: [
    '### Natural history',
    '- **Onset and progression:** the **1st or 2nd decades of life**.',
    '- **Arrest:** usually the **late 2nd decade or early 3rd**.',
    '',
    '### Symptoms',
    '- **Blurred DISTANCE vision:** the presenting complaint.',
    '- **Near vision usually NOT affected —** **except in higher degrees of myopia**.',
    '- **The schoolchild’s sign:** squeezing the lids to a slit — a **self-made pinhole**, so the cause is optical *(the sign is the bank’s; the deck photographs a blurred blackboard and does not name it — not in course material)*.',
    '',
    '### The two clinical types',
    '',
    '|Type|Dioptres|Other names|',
    '|---|---|---|',
    '|**Simple myopia**|**less than 6 D**|—|',
    '|**High myopia**|**can reach more than 20 D**|**progressive · degenerative · malignant**|',
    '',
    '- **⚠️ Two thresholds, unreconciled:** p.45 makes **6 D** the simple/high boundary; **p.75 calls “low myopes” those up to 4 to 5 D** for the presbyopia table. Both printed; the 4–5 D line exists only there.',
    '- *A pinhole restoring 6/6 proves the blur is optical — `va-4`.*',
    '',
    'Src: L7,8 pp.43–45, 75'
  ].join('\n'),
  qs: ['opqb-t2-107']
},

{
  id: 'ref-9', w: 'must',
  h: 'Myopia — complications, and the staphyloma',
  body: [
    '|Complication|Detail as printed|',
    '|---|---|',
    '|**Chorioretinal degenerations — CENTRAL**|**myopic subfoveal CNV** · **macular haemorrhage and scarring**|',
    '|**Chorioretinal degenerations — PERIPHERAL**|**night blindness** · **retinal tears** · **RRD**|',
    '|**Posterior staphyloma**|—|',
    '|**Complicated cataract**|—|',
    '|**Glaucoma**|**high association with primary open-angle glaucoma**|',
    '',
    '- **⚠️ Read the tree correctly:** only the **first** branch subdivides — the central/peripheral split belongs to **chorioretinal degenerations alone**, and staphyloma, cataract and the glaucoma association are terminal siblings. (The text layer interleaved them; the render settles it.)',
    '',
    '### Staphyloma',
    '**Staphyloma:** a **localised bulge of thinned, ectatic sclera lined by uveal tissue** *(not in course material)*.',
    '',
    '|Site|Type|',
    '|---|---|',
    '|**Posterior pole**|**POSTERIOR — the one of pathological myopia**|',
    '|Limbus to ciliary body|**intercalary**|',
    '|Over the ciliary body|**ciliary**|',
    '|At the equator|**equatorial**|',
    '',
    '*The three non-posterior types are supplied — zero hits across the module (not in course material). Scleral stretching in myopia is maximal at the posterior pole.*',
    '',
    '- *Tears, RRD and their symptoms are `rd-1`–`rd-10`; open-angle glaucoma is `glc-6`.*',
    '',
    'Src: L7,8 p.46; the staphyloma definition and the non-posterior sites are supplied and tagged'
  ].join('\n'),
  qs: ['opqb-t2-112']
},

{
  id: 'ref-10', w: 'must',
  h: 'Myopia — treatment, and the age split',
  body: [
    '|Branch|Options as printed|',
    '|---|---|',
    '|**Conservative**|**Glasses — CONCAVE (minus)** · **contact lenses**|',
    '|**Surgical — CORNEAL**|**PRK** · **LASIK**|',
    '|**Surgical — LENTICULAR**|**Phakic IOL — UNDER 40** · **CLEAR LENS EXTRACTION — OVER 40**|',
    '',
    '- **The optics:** the deck captions its figure *“Concave (minus power) lens corrects Myopia”*.',
    '- **⚠️ The age split:** **phakic IOL under 40, clear lens extraction over 40** — because under 40 the crystalline lens still accommodates and is worth keeping, so the implant goes in **front** of it *(the reason is supplied — not in course material)*.',
    '- **⚠️ Nothing here slows myopia.** The deck offers **no myopia control** and says only that myopia “often stops progression in the late 2nd decade”. *(Low-dose atropine, orthokeratology and defocus spectacles are the current options — not in course material.)*',
    '- *Procedure detail is `cor-21`–`cor-23`.*',
    '',
    'Src: L7,8 pp.47–48'
  ].join('\n'),
  qs: []
},

{
  id: 'ref-11', w: 'must',
  h: 'Hyperopia — the definition, and the three causes',
  body: [
    '**Hyperopia (hypermetropia):** parallel rays focused **BEHIND the retina**, accommodation at rest. **Far point behind the eye** — virtual.',
    '',
    '- **⚠️ Optically:** the eye’s power is **LESS than it needs** for its length — so **accommodation can hide it**, and the whole clinical behaviour follows from that.',
    '',
    '### Causes — the mirror image of myopia’s',
    '',
    '|Type|Sub-type|Mechanism as printed|',
    '|---|---|---|',
    '|**1. AXIAL**|—|**axial length SHORTER than normal (22–24.5 mm)**|',
    '|**2. REFRACTIVE**|**Curvature**|**decreased corneal curvature — “Corneal flatening” [sic]**|',
    '|**2. REFRACTIVE**|**INDEX**|**decreased refractive index of the lens**; **APHAKIA**; **posterior dislocation of the lens**|',
    '',
    '- **⚠️ Aphakia is the extreme case:** an eye with no lens has lost about a third of its power and is **+10 to +12 D hypermetropic**. *That number, iridodonesis and the three corrections are `cts-7`; pseudophakia is `cts-8`.*',
    '- **The symmetry:** myopia is **long, steep, dense**; hyperopia is **short, flat, thin**.',
    '',
    'Src: L7,8 pp.49–53; `cts-7`, cited only'
  ].join('\n'),
  qs: []
},

{
  id: 'ref-12', w: 'must',
  h: 'Accommodation — the mechanism, and what it cannot do',
  body: [
    '**Accommodation:** the eye **increasing its own power so that near objects focus on the retina**.',
    '',
    '- **The deck’s statement:** *“accommodation by the CILIARY MUSCLE can correct hypermetropia in younger patients, but this ability decreases with age as the lens elasticity becomes less”*, and the lens does it **by changing its shape**.',
    '- **The chain:** **ciliary muscle CONTRACTS → zonules SLACKEN → the elastic lens rounds up → power RISES** *(the zonular step is supplied — not in course material)*.',
    '- **⚠️ What does NOT change:** the **cornea**, the **axial length**, the **depth of the anterior chamber**. It is a **lens** event and nothing else.',
    '- **⚠️ It only adds PLUS power** — so it compensates hyperopia, is spent on presbyopia, and does **nothing** for myopia.',
    '- **⚠️ It fails with age** because **the lens stops deforming**, not because the muscle weakens (`ast-7`).',
    '',
    '*The near reflex — cortically driven, and what survives an afferent defect — is `pup-3` and `pup-4`; lens and zonular anatomy is `cat-1`.*',
    '',
    'Src: L7,8 p.54; `cat-1`, `pup-3`, `pup-4`, cited only'
  ].join('\n'),
  qs: ['opqb-t2-80']
},

{
  id: 'ref-13', w: 'must',
  h: 'Hyperopia — latent, facultative and absolute',
  body: [
    '**⚠️ None of this is in the deck.** `L7,8` classifies hyperopia by **cause** only; all five terms return **zero across the module**, and the bank tests them twice. Supplied and tagged throughout *(not in course material)*.',
    '',
    '|Component|What it is|Revealed by|',
    '|---|---|---|',
    '|**LATENT**|the part **masked by resting CILIARY TONE**|**cycloplegia, and nothing else**|',
    '|**FACULTATIVE**|the part the patient **CAN overcome by accommodating**|subjective refraction|',
    '|**ABSOLUTE**|the part accommodation **CANNOT overcome** — distance blurred without a lens|it is simply manifest|',
    '|**MANIFEST**|**facultative + absolute** — what a non-cycloplegic refraction finds|subjective refraction|',
    '|**TOTAL**|**latent + manifest** — the eye’s real error|**cycloplegic refraction**|',
    '',
    '### What age does to each',
    '- **TOTAL: fixed** — a property of the globe.',
    '- **LATENT: falls**, as ciliary tone weakens.',
    '- **FACULTATIVE: falls**, as less accommodation is left to overcome anything with.',
    '- **ABSOLUTE: RISES**, taking up what the other two give away.',
    '- **⚠️ In one sentence:** the same total error becomes **steadily less hideable** — which is why a hyperope who needed nothing at 20 needs glasses at 40 and stronger ones at 55, with **no change in the eye**, and why he **must be refracted under cycloplegia** while young (`ref-6`).',
    '',
    'Src: L7,8 prints no component classification in 88 pages; the whole section is supplied and tagged'
  ].join('\n'),
  qs: ['opqb-t2-87', 'opqb-t2-90']
},

{
  id: 'ref-14', w: 'must',
  h: 'Hyperopia — the presentation changes every decade',
  body: [
    '|Age band|The picture|',
    '|---|---|',
    '|**Young — 1st, 2nd, 3rd decades**|**usually NO glasses for far vision** (compensated by accommodation) · **ASTHENOPIA** with prolonged near work · **uncommonly, accommodative esotropia in childhood**|',
    '|**Middle — 4th and 5th decades**|**blurred NEAR vision**; reading glasses **EARLIER THAN USUAL — early presbyopia**|',
    '|**Old — above 50**|**BOTH distance and near blurred, more for near**, from **markedly reduced amplitude of accommodation**|',
    '',
    '**Asthenopia:** **eye exhaustion with eye strain, headache and blurring of vision**, especially with **prolonged near work**.',
    '',
    '- **Mechanism:** sustained ciliary contraction holding an uncorrected error clear.',
    '- **The identifying pattern:** **distance acuity NORMAL** · **frontal headache after near work** · **worse in the evening**, better on waking.',
    '- **⚠️ What lies behind it:** **latent hyperopia** (`ref-13`) or **uncorrected astigmatism**, found only on **cycloplegic refraction** *(the attribution is supplied — not in course material)*.',
    '- **⚠️ Why a hyperope is presbyopic first:** he spends accommodation on **distance as well as near**. **Hyperope before 40 · emmetrope at about 40 · myope last.**',
    '',
    'Src: L7,8 pp.55–57'
  ].join('\n'),
  qs: ['opqb-t2-98', 'opqb-t2-104', 'opqb-t2-109']
},

{
  id: 'ref-15', w: 'must',
  h: 'Hyperopia — complications, and a treatment list with holes in it',
  body: [
    '### Complications',
    '- **NARROW-ANGLE GLAUCOMA:** from a **shallow anterior chamber** — **“especially later in life as the lens becomes thicker”**.',
    '- **SQUINT, two kinds:** **apparent divergent squint** and **ACCOMMODATIVE ESOTROPIA**.',
    '- **⚠️ Accommodative esotropia:** an uncorrected hyperope accommodates hard, **convergence is yoked to accommodation**, the eyes turn **IN**; treatment is the **full cycloplegic hyperopic correction**, not surgery *(mechanism and treatment supplied — not in course material)*.',
    '- *The crowded angle, the mid-dilated pupil and the drop never to be given are `glc-11` and `glc-12`; the chamber-depth causes grid is `va-14`.*',
    '',
    '### Treatment',
    '',
    '|Branch|Options as printed|',
    '|---|---|',
    '|**Conservative**|**Glasses — CONVEX (plus)** · **contact lenses**|',
    '|**Surgical — CORNEAL**|**LASIK**|',
    '|**Surgical — LENTICULAR**|**Clear lens extraction**|',
    '',
    '- **⚠️ Fewer options than myopia:** and no reason is given. Against p.47 it loses **PRK**, loses the **phakic IOL**, and carries **no age cut-off**. Recorded exactly as printed.',
    '- **What is standard, supplied:** **hyperopic PRK and LASIK both exist** — the ablation **steepens the centre by removing a peripheral annulus** · **plus-power phakic IOLs are available** · the **same under-40 / over-40 logic applies**. Hyperopic laser treats a **smaller dioptric range** and **regresses more** *(not in course material)*.',
    '- *Procedure detail is `cor-21`–`cor-23`.*',
    '',
    'Src: L7,8 pp.58–60; the missing hyperopic options and the esotropia mechanism are supplied and tagged'
  ].join('\n'),
  qs: []
},

{
  id: 'ref-16', w: 'must',
  h: 'Counselling — the five beliefs, and the answers',
  body: [
    '**⚠️ The deck teaches none of this** — no counselling content, no advice, no myopia control in 88 pages. Supplied and tagged throughout *(not in course material)*; the bank asks it **five times**.',
    '',
    '|The belief|The answer|',
    '|---|---|',
    '|**“Glasses weaken the eyes.”**|**They do not.** A lens changes **where the image lands**; it does not act on the eye. **Leaving a child uncorrected is the real harm** — it causes **AMBLYOPIA**, which glasses later cannot undo|',
    '|**“Changing glasses often weakens them.”**|**No.** A wrong prescription in an adult causes **reversible asthenopia only** — headache and eye strain. It does not damage the retina and causes no permanent loss|',
    '|**“Sitting close to the TV harms the eyes.”**|**It does not.** Sitting close is a **SIGN of uncorrected refractive error, not a cause** — the child moves closer because he cannot see|',
    '|**“Resting the eyes improves the error.”**|**No.** The error is **structural** — axial length, curvature or index — and is **defined with accommodation already at rest**. Rest relieves **asthenopia** and changes **no refraction**|',
    '|**“Myopia grows yearly, so he will go blind.”**|**Yearly progression through the growth years is normal** and settles in the late 2nd decade. **Simple myopia does not blind**; high myopia is the one to follow|',
    '',
    '- **⚠️ Where the reassurance stops:** **HIGH MYOPIA**, which needs lifelong retinal surveillance (`ref-9`), and **any uncorrected error in a young child**, because the amblyopic window closes.',
    '- **What that child needs:** **cycloplegic refraction**, a **cover test**, and a **red reflex** check — not advice about seating.',
    '',
    'Src: L7,8 prints none of this and the whole section is supplied and tagged; the amblyopia risk is grounded in p.83, the myopic natural history in p.43, and the definition of a refractive error in pp.18–20'
  ].join('\n'),
  qs: ['opqb-t1-2', 'opqb-t1-67', 'opqb-t1-68', 'opqb-t1-69', 'opqb-t1-71']
}

    ]
  },

  /* ══════════════════════════ CHAPTER 2 of 2 ══════════════════════════
     op-refract-astig — "Astigmatism, presbyopia and prescribing"
     Deck pp.61–88.                                                       */
  'op-refract-astig': {

    intro: 'Three errors the sphere cannot fix: astigmatism, where there are two focal lines instead of one point; presbyopia, where the near point retreats with age; and anisometropia, where the two eyes disagree. All three end at the prescription.',

    sections: [

{
  id: 'ast-1', w: 'must',
  h: 'Astigmatism — the definition, and the two focal lines',
  body: [
    '**Astigmatism:** parallel rays **will NOT uniformly focus to a single point on the retina, but instead into TWO FOCAL LINES**.',
    '',
    '- **The name:** **a = no, stigma = point**.',
    '- **The cause:** a **non-spherical surface** of the **cornea (more common)** or the **lens**, giving **different refractive power at different MERIDIANS** — **different radii of curvature** instead of the single radius of a sphere.',
    '- **The analogy the deck draws:** a **football is spherical**; an **American football** has a **flatter direction** and a **steeper direction** — the two principal meridians.',
    '- **⚠️ Two meridians, two lines, never one point** — which is why **a spherical lens can never correct astigmatism**: a sphere moves both focal lines together.',
    '- **⚠️ Irregular astigmatism differs:** the meridians of minimum and maximum power are **not perpendicular** and power changes irregularly between them, so light goes to **multiple** foci. *Full account `cor-24`.*',
    '',
    '*Deck defect: p.61’s definition has **no closing parenthesis** — the bracket opened at “i.e., the cornea surface…” is never shut.*',
    '',
    'Src: L7,8 pp.61–63; `cor-24`, cited only'
  ].join('\n'),
  qs: ['opqb-t2-79']
},

{
  id: 'ast-2', w: 'must',
  h: 'Astigmatism — the causes tree',
  body: [
    '|Level 1|Level 2|Level 3|',
    '|---|---|---|',
    '|**LENTICULAR astigmatism**|**very rare** — terminal, it does not subdivide|—|',
    '|**CORNEAL astigmatism**|**REGULAR (more common)**|**Simple · Compound · Mixed**|',
    '|**CORNEAL astigmatism**|**IRREGULAR (less common)**|**CORNEAL SCARS · KERATOCONUS**|',
    '',
    '- **⚠️ Read the tree correctly:** regular and irregular branch from **CORNEAL astigmatism**, not from “Causes”; lenticular is terminal. (The text layer’s column order implied otherwise; the render settles it.)',
    '',
    '### The lenticular case, and how it is caught',
    '- **The set-up:** **keratometry** shows a corneal cylinder — **46 D vertical against 45 D horizontal** — while **retinoscopy finds the eye EMMETROPIC**.',
    '- **The reading:** the cornea is astigmatic and the whole eye is not, so **a lenticular astigmatism of equal size and opposite axis is cancelling it** *(the argument is supplied — not in course material)*.',
    '- **⚠️ Why it matters:** remove or replace that lens at cataract surgery and **the corneal cylinder is unmasked** — which is why keratometry sits in the biometry work-up (`cts-3`).',
    '- *Keratometry, what it assumes and why it fails on an irregular cornea are `cor-24`; keratoconus is `cor-12`.*',
    '',
    'Src: L7,8 p.64; `cor-24`, `cor-12`, `cts-3`, cited only'
  ].join('\n'),
  qs: ['opqb-t2-77']
},

{
  id: 'ast-3', w: 'must',
  h: 'Regular astigmatism — three types, or five',
  body: [
    '**⚠️ Two counts, both printed:** p.64’s tree names **three** regular types; pp.66–67’s figures name **five**, splitting simple and compound into myopic and hyperopic variants. The five expand the three, and the bank asks from both.',
    '',
    '### The three, defined against the MERIDIANS',
    '',
    '|Type|Meridians|',
    '|---|---|',
    '|**SIMPLE**|**one meridian EMMETROPIC**; the other **myopic or hyperopic**|',
    '|**COMPOUND**|**BOTH meridians the SAME sign**|',
    '|**MIXED**|**one MYOPIC, the other HYPEROPIC**|',
    '',
    '### The five, defined against the FOVEA',
    '',
    '|Type|Where the two focal points sit|',
    '|---|---|',
    '|**Simple myopic**|one **ON the fovea**, one **IN FRONT**|',
    '|**Simple hyperopic**|one **ON the fovea**, one **BEHIND**|',
    '|**Compound myopic**|**BOTH in front of the fovea**|',
    '|**Compound hyperopic**|**BOTH behind the fovea**|',
    '|**Mixed**|**one behind, one in front** — the fovea straddled|',
    '',
    '- **⚠️ The one-line test:** count the focal lines **off** the retina and note **which side**. **One off = simple · two off the same side = compound · two off opposite sides = MIXED.**',
    '- **All five assume accommodation FULLY RELAXED** — let a young patient accommodate and every line moves forward together, which is why the **cycloplegic** result is the one classified (`ref-6`).',
    '',
    'Src: L7,8 pp.64, 66–67'
  ].join('\n'),
  qs: ['opqb-t2-73', 'opqb-t2-105']
},

{
  id: 'ast-4', w: 'must',
  h: 'Meridians and axis — the notation the deck never prints',
  body: [
    '**⚠️ No axis notation, and there is a reason:** p.65 sits exactly where a meridian diagram belongs — between the causes tree and the five-types figure — and it is a **broken graphic**.\n- **What p.65 actually is:** one solid green circle crossed by a vertical and an oblique line, **no title, no label, no caption**, and **the only page of 88 returning zero characters**. No degree value appears anywhere in the deck. Everything below is supplied and tagged *(not in course material)*.',
    '',
    '### Axis notation',
    '- **The convention:** meridians run **0° to 180°**, **anticlockwise from the patient’s right**; **180° horizontal**, **90° vertical**.',
    '- **What the axis means:** the meridian **along which the cylinder has NO power** — so the cylinder **acts 90° away from its axis**.',
    '',
    '### With the rule, against the rule, oblique',
    '',
    '|Pattern|Steeper meridian|Minus-cylinder axis near|Typical|',
    '|---|---|---|---|',
    '|**WITH the rule**|**VERTICAL, about 90°**|**180°**|**the young eye** — lid pressure steepens the vertical|',
    '|**AGAINST the rule**|**HORIZONTAL, about 180°**|**90°**|**the ageing eye** — the lifetime drift|',
    '|**OBLIQUE**|around **45°** or **135°**|—|often **keratoconus**|',
    '',
    '- **⚠️ The reversal the bank tests:** a **more curved VERTICAL meridian is astigmatism WITH the rule**.',
    '- **Also absent, on the record:** **transposition** of plus to minus cylinder, **spherical equivalent**, and **vertex distance**. No question filed here needs one.',
    '',
    'Src: L7,8 p.65 is a broken graphic and the deck prints no degree value in 88 pages; the whole section is supplied and tagged'
  ].join('\n'),
  qs: ['opqb-t2-91']
},

{
  id: 'ast-5', w: 'must',
  h: 'Astigmatism — clinical presentation',
  body: [
    '|Degree|Picture as printed|',
    '|---|---|',
    '|**Mild**|**ASYMPTOMATIC — may pass unnoticed**|',
    '|**Higher**|**1. Blurred vision** · **2. NARROWING OF THE PALPEBRAL FISSURE** to overcome the defective vision · **3. Asthenopia**, especially **hyperopic and mixed types** · **4. Headaches**|',
    '',
    '- **The narrowed fissure:** a **self-made slit aperture**, cutting the blur circles as a pinhole does *(the mechanism is supplied — not in course material)*. The pinhole proper is `va-4`.',
    '- **What the photographs teach:** a bridge sharp beside the same bridge **directionally blurred**, and night headlights **smeared into streaks** — **astigmatic blur is directional, not uniform**.',
    '',
    '*⚠️ A divergence, recorded not resolved: the deck puts asthenopia in the **HIGHER** degrees; the bank treats **LOW** degrees as the ones that strain most, the standard reconciliation being that a small error can almost be overcome by accommodating and a large one cannot (supplied — not in course material). Both held; the deck quoted as printed.*',
    '',
    'Src: L7,8 pp.68–70'
  ].join('\n'),
  qs: []
},

{
  id: 'ast-6', w: 'must',
  h: 'Astigmatism — treatment, regular and irregular',
  body: [
    '|Type|Conservative|Surgical|',
    '|---|---|---|',
    '|**REGULAR**|**Glasses — CYLINDRICAL lenses** · **SOFT TORIC (sphero-cylindrical) CLs**|**Corneal surgery — LASIK and PRK** · **Lenticular surgery**|',
    '|**IRREGULAR**|**Glasses — MILD DEGREES ONLY** · **RIGID GAS-PERMEABLE (RGP) CLs**|**Intracorneal ring (ICR) segments** · **KERATOPLASTY**|',
    '',
    '- **⚠️ Read the tree correctly:** **LASIK and PRK BOTH branch from corneal surgery**; “lenticular surgery” is **terminal**. The text layer implied PRK belonged to lenticular surgery; the render shows it does not.',
    '- **The principle:** **regular astigmatism has two perpendicular meridians, so a cylinder neutralises it**; **irregular astigmatism has neither perpendicularity nor a regular power change, so no spectacle lens can**.',
    '- **⚠️ Why a RIGID lens and not a soft toric**, and why keratometry misleads there, are `cor-24`. LASIK is **contraindicated** on a keratoconic cornea (`cor-23`); the lens tree is `ref-4`.',
    '',
    '### Radial keratotomy — absent from the deck, a distractor in the bank',
    '- **What it was:** a **historical incisional operation for myopia** — deep **radial cuts in the peripheral cornea** letting intraocular pressure **flatten the centre** *(not in course material)*.',
    '- **Why it is abandoned:** unpredictable correction, **diurnal fluctuation of vision**, a weakened globe, and a **progressive hyperopic drift** *(not in course material)*.',
    '- **⚠️ Why it cannot help here:** it adds further incisions to a cornea whose problem is that it is **already irregular** *(not in course material)*.',
    '',
    '*A defect held: the bank keys **glasses** as the option that does NOT correct irregular astigmatism, while p.71 offers **“Glasses (Mild degrees)”** for exactly that. A spectacle cylinder cannot neutralise a non-perpendicular, irregularly varying surface; mild irregularity is still partly helped. Keyed as the bank prints it.*',
    '',
    'Src: L7,8 p.71; `cor-23`, `cor-24`, cited only; radial keratotomy supplied and tagged'
  ].join('\n'),
  qs: ['opqb-t2-81', 'opqb-t2-108']
},

{
  id: 'ast-7', w: 'must',
  h: 'The near point, the amplitude, and what presbyopia is',
  body: [
    '**The near point:** the **nearest point at which an object can be placed in front of the eye and still form a focused image on the retina**.',
    '',
    '|Refraction|Near point|',
    '|---|---|',
    '|**Myopia**|**CLOSER to the eye than normal**|',
    '|Emmetropia|normal|',
    '|**Hyperopia**|**FARTHER from the eye than normal**|',
    '',
    '### Amplitude of accommodation',
    '',
    '|Age|Amplitude|',
    '|---|---|',
    '|**10 years**|**14 dioptres**|',
    '|**40 years**|**3 dioptres**|',
    '|**Over 60**|**completely lost**|',
    '',
    '- **⚠️ Accommodation is maximal in CHILDHOOD** and falls without recovering. **No near-point distance in centimetres is given at any age.**',
    '',
    '### Presbyopia',
    '**Presbyopia:** **RECESSION OF THE NEAR POINT WITH AGE** — **near images can no longer be appropriately focused using accommodation**.',
    '',
    '- **The status:** a **NORMAL AGEING PROCESS**, usually **40 years of age or older**. *(The deck also lists it among the four errors of refraction — `ref-4`.)*',
    '- **Causes — two:** **1. hardening (reduced deformability) of the lens with age** · **2. reduced accommodative amplitude with age**.',
    '- **⚠️ The distinction:** a failure of **the lens to change shape** — not of the ciliary muscle, not of axial length — so **it happens to everyone** (`ref-12`).',
    '',
    'Src: L7,8 pp.72–74'
  ].join('\n'),
  qs: ['opqb-t2-72', 'opqb-t2-110']
},

{
  id: 'ast-8', w: 'must',
  h: 'Presbyopia — the complaint depends on the refraction underneath',
  body: [
    '**⚠️ The deck’s densest slide:** a three-group table. The presbyopic complaint depends on what the eye was to begin with.',
    '',
    '### Emmetropes — four cells, verbatim',
    '- **1. Extend the hands** to make near objects clearer — **holds books farther away**.',
    '- **2. Difficulty in knitting and sewing.**',
    '- **3. Distance vision remains unaffected.**',
    '- **4. Increased illumination** is needed for near tasks.',
    '',
    '### Myopes',
    '',
    '|Group|What they do|',
    '|---|---|',
    '|**Low myopes — up to 4 to 5 D**|**see near objects BETTER if they REMOVE their glasses**; **take the glasses off for reading**|',
    '|**High myopes, glasses on**|**as emmetropes**|',
    '',
    '- **⚠️ Why the low myope escapes:** his **far point is already close** — a **−2 D** eye focuses at **50 cm** with no accommodation — so with the glasses off he reads well past 50. **A delayed complaint, not a delayed presbyopia** *(the arithmetic is supplied — not in course material)*.',
    '',
    '### Hyperopes — one cell',
    '- **Presbyopia EARLIER than the age of 40**, from **accommodative insufficiency** (`ref-14`).',
    '- **⚠️ The order:** **hyperope first · emmetrope at about 40 · myope last.**',
    '',
    '*⚠️ The 4–5 D boundary exists ONLY in this table and does not match p.45’s 6 D simple/high cut-off. Two thresholds, two purposes, neither reconciled.*',
    '',
    'Src: L7,8 pp.75–80'
  ].join('\n'),
  qs: ['opqb-t2-82', 'opqb-t2-89']
},

{
  id: 'ast-9', w: 'must',
  h: 'Presbyopia — treatment',
  body: [
    '**Correction with glasses:** a **SPHERICAL PLUS LENS ADDITION to the far-vision refraction** — the add is *added to* the distance prescription, so a myope’s reading lens may still be a minus lens overall.',
    '',
    '|Form|What it is|',
    '|---|---|',
    '|**Reading glasses**|a single plus power, **for near only**|',
    '|**Bifocal**|**two zones** — distance above, near below, with a visible line|',
    '|**Progressive lenses**|a **continuous power gradient**, no line, **intermediates included**|',
    '',
    '- **⚠️ No add power is printed at any age** — no near-add table, no working-distance rule, no worked figure in 88 pages.',
    '- **The usual ladder, supplied:** about **+1.00 D at 45 · +1.50 D at 50 · +2.00 D at 55 · +2.50 D at 60**, for a working distance of about **33 cm**; it stops rising once accommodation is gone *(not in course material)*.',
    '- **⚠️ The rule that prevents it:** **an add is for NEAR, never for distance** — an unnecessary plus worn for distance forces continuous accommodation and gives asthenopic headache (`ast-10`).',
    '- **Options named nowhere in the deck:** **monovision** and **multifocal contact lenses**, and **multifocal IOLs** *(not in course material)*. *Pseudophakia is `cts-8`.*',
    '',
    'Src: L7,8 p.81, the deck’s only presbyopia treatment slide; the near-add ladder and the alternatives are supplied and tagged'
  ].join('\n'),
  qs: ['opqb-t2-101']
},

{
  id: 'ast-10', w: 'must',
  h: 'The spectacle prescription, and what a wrong one does',
  body: [
    '**⚠️ The form the deck prints is EMPTY** — **no sphere, no cylinder, no axis in degrees and no PD in millimetres anywhere in 88 pages**, and **no worked refraction at all**.',
    '',
    '|Rx|Right eye|Left eye|',
    '|---|---|---|',
    '|**Far**|Sphere · Cylinder · Axis|Sphere · Cylinder · Axis|',
    '|**Near**|Sphere · Cylinder · Axis|Sphere · Cylinder · Axis|',
    '|**PD**|**PD for far**|**PD for near**|',
    '',
    '- **What each field is,** supplied *(not in course material)*: **SPHERE** — spherical power in dioptres, plus or minus · **CYLINDER** — the extra power in one meridian, for astigmatism · **AXIS** — the meridian in degrees along which the cylinder has no power (`ast-4`).\n- **PD — the pupillary distance:** so the optical centres sit in front of the pupils. The near PD is a few millimetres less than the far, because the eyes converge.',
    '',
    '### Prescribing errors',
    '',
    '|Error|Result|',
    '|---|---|',
    '|**OVER-correction with PLUS** — an emmetrope given +2 D|**acuity is already 6/6 unaided and the lenses add nothing**, but the eye must **accommodate continuously to overcome them** → **asthenopic headache**|',
    '|**Under-correction**|**blurred vision** at the affected distance|',
    '|**Any wrong prescription, ADULT**|**reversible asthenopia only** — no structural damage|',
    '|**Any uncorrected error, YOUNG CHILD**|**AMBLYOPIA** — not reversible once the critical period closes|',
    '',
    '- **⚠️ The give-away:** **normal acuity WITHOUT glasses and no gain WITH them.** A lens that does not improve acuity is correcting nothing.',
    '- *The counselling that follows is `ref-16`.*',
    '',
    'Src: L7,8 p.82 — a blank form reproduced from the render; the field definitions and the prescribing errors are supplied and tagged'
  ].join('\n'),
  qs: ['opqb-t2-88']
},

{
  id: 'ast-11', w: 'must',
  h: 'Anisometropia, aniseikonia and amblyopia',
  body: [
    '**Anisometropia:** **a difference in the refractive status between the two eyes** — **ANY difference, of any size**. It is **the most common cause of amblyopia in children**.',
    '**Aniseikonia:** **unequal SIZE of the retinal image of both eyes** — the consequence, not the definition.',
    '',
    '|Difference|What happens|',
    '|---|---|',
    '|**Not high**|**correctable with glasses** — the images still fuse|',
    '|**Usually more than 4 D**|glasses may induce **DIPLOPIA**, because **image sizes differ (aniseikonia)** and that is **AN OBSTACLE TO FUSION**|',
    '',
    '- **⚠️ The distinction tested twice:** anisometropia is **any** difference; **4 D is where spectacle correction becomes intolerable**, not part of the definition. The diplopia is **optical**, from unequal image size — **not the crossed or uncrossed diplopia of a squint**.',
    '',
    '### Treatment',
    '- **Small amounts:** **corrected with glasses**.',
    '- **Larger amounts:** **contact lens or refractive surgery, if glasses induce diplopia**.',
    '- **⚠️ Why a contact lens solves it:** it sits **at the corneal plane** rather than ~12 mm in front, so the magnification difference collapses. *The measured numbers are `cts-7` — spectacles ~30 %, contact lens 7–10 %, IOL 3 %.*',
    '',
    '### Amblyopia — the four lines the bank needs',
    '- **What it is:** **reduced best-corrected acuity in a structurally normal eye**, because a clear image never reached the cortex during development *(not in course material)*.',
    '- **The critical period:** roughly the **first 7–8 years**; after it the loss is **permanent** *(not in course material)*.',
    '- **Why the anisometropic case is missed:** one eye is **chronically defocused while the fellow eye is clear**, so the brain suppresses it — **no squint, no white pupil, no complaint** *(not in course material)*.',
    '- **⚠️ The order of treatment:** **CORRECT THE REFRACTION FIRST**, and **only then**, if acuity remains poor, **occlude the better eye**. Patching an uncorrected eye treats nothing *(not in course material)*. *`va-6` has the child who objects to covering the good eye.*',
    '',
    '*Deck defects: **p.83 spells “Aniseikonia”, p.84 “Anisiekonia”** — the same term on consecutive slides, p.83 correct (and `cts-7` spells it “anisokonia” after `L17`). And **pp.85–87 are headed “Presbyopia / Treatment” while their content is ANISOMETROPIA** — p.85 turns on glasses-induced diplopia, which is p.83’s problem. Presbyopia treatment is delivered once, on p.81; the header is stale, and these slides are filed here by content.*',
    '',
    'Src: L7,8 pp.83–87; `cts-7`, `va-6`, cited only; the amblyopia account is supplied and tagged'
  ].join('\n'),
  qs: ['opqb-t2-76', 'opqb-t2-102', 'opqb-t2-106']
}

    ]
  }

};
