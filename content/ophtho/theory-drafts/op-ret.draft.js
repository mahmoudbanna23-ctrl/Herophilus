/* op-ret-dr + op-ret-vasc + op-ret — "Retina", Ophthalmology. Written
   2026-08-17 under START-HERE.md §14 (slide-density revision notes), §14.1
   (budget), §14.2 (coverage floor), §14.3 (telegraphic style), §14.3a
   (layout) and §14.5 (deferral register), plus
   content\ophtho\theory-plan.md. Shape copied from
   content\ophtho\theory-drafts\op-red.draft.js, the module's most recent
   split.

   ⚠️⚠️ THIS FILE HOLDS THREE CHAPTERS. Two keys are NEW and must be
   registered in app\data\modules.js by the hub — this file does not touch
   that shared file.

     `op-ret-dr`    suggested title "Diabetic retinopathy and the macula"
     `op-ret-vasc`  suggested title "Retinal vascular disorders"
     `op-ret`       suggested title "Retinal detachment" — THE EXISTING KEY,
                    kept for the detachment third

   Naming follows the module's own style (`op-cornea`/`op-cornea-surg`,
   `op-cat`/`op-cat-surg`, `op-red`/`op-red-mgmt`, `op-orbit`/
   `op-orbit-mass`), where the base key survives with one of the halves.
   ⚠️ The base key was left on the DETACHMENT chapter deliberately: FOUR of
   the chapter's FIVE questions are detachment questions, so keeping
   `op-ret` there means only ONE question has to be refiled instead of five.
   If the hub prefers symmetry it may rename it `op-ret-rd`, in which case
   all five refile.

   ============================================================================
   NO RENDER WAS DONE AND NONE WAS AUTHORISED. All three decks are
   text-usable from the cache. `L20`'s cache was rebuilt by visual read on
   2026-08-17 by another agent and is cited slide by slide as `L20 sl.<n>`.

   ⚠️⚠️ THE THREE DECKS ARE "TEXT-SUFFICIENT" AND STILL UNDER-MEASURE THEIR
   OWN TEACHING, FOR A REASON THE PLAN'S FOUR PATTERNS DO NOT NAME.
   `L19.1` and `L19.2` extract completely — and what extracts is a CAPTION
   SET, not prose: photographs with two-to-five-word legends. Measured,
   words per NON-BLANK line: `L19.1` **4.18**, `L19.2` **4.06**, against
   `L4) PHARYNGEAL SUPPURATIONS`'s 5.4 (the ENT prose benchmark) and the
   ~2.0 that marks a labelled-diagram deck. So neither triggers §14.1's
   diagram-deck correction on the numbers, yet
   *"Microaneurysms usually temporal to fovea"* is FIVE extracted words
   carrying a sign, its location and a diagnostic criterion, and
   *"Grading of arteriolosclerosis"* (`L19.2` line 325) is a THREE-WORD
   slide whose whole content is a raster. **A fifth deck pattern, worth
   recording in the plan: THE CAPTION DECK — extraction complete, teaching
   density high, TERM 1 badly understated.** This is why all three chapters
   below overrun TERM 1, and the overrun is forecast, not discovered.

   ⚠️ TWO SLIDES IN A "TEXT-SUFFICIENT" DECK ARE IMAGE-ONLY AND ARE THE
   SLIDES THAT MATTER MOST:
     · `L19.2` line 325 "Grading of arteriolosclerosis" — bare title. Not
       this chapter's (hypertensive retinopathy is `op-systemic`'s), but
       recorded because the plan calls `L19.2` text-sufficient.
     · `L19.2` line 377 "Staging of active retinopathy of prematurity" —
       BARE TITLE. **The ROP stages are NOT in the text layer**, although
       the zones, the clock hours, threshold disease and the outcome
       figures on the slides either side of it ARE. Supplied and tagged in
       `vsc-14`, and reported against the register row that promised
       "staging".

   ============================================================================
   ⚠️⚠️ THE SPLIT DECISION, MADE BEFORE A WORD OF BODY TEXT WAS WRITTEN.

   FORECAST FOR ONE CHAPTER: ~6,900 body words, ~29 printed pages at the
   ÷240 estimator. That is nearly THREE TIMES the ~10-page operative
   ceiling and the largest single-chapter forecast in the module, ahead of
   `op-red`'s ~21 pp. Itemised entity by entity below, framework slides one
   by one, grids at rows × columns, per §14.1.

   THREE DRIVERS, NOT ONE. `op-red` was large because its source was large.
   This chapter is large for three separate reasons that add up:
     (a) THREE DECKS, 2,743 counted words between them (arithmetic below).
     (b) TWELVE REGISTER ROWS — more than any other chapter in the module,
         from six different donors (`op-systemic` ×4, `op-insid` ×3,
         `op-white` ×2, `op-glauc`, `op-cat`, `op-trauma`).
     (c) `L20` NEVER DELIVERS THE "DEGENERATIONS" HALF OF ITS OWN TITLE,
         and its own NOT-COVERED list names ~25 further detachment topics
         it also omits — several of which the chapter's own questions turn
         on. That is a large, unavoidable supplied-and-tagged component.

   THE SEAMS: THE SOURCE FILES THEMSELVES, AND THERE ARE TWO OF THEM.

     `op-ret-dr`    `L19.1) Diabetic Retinopathy` — 19 pp, one lecturer
                    (Faten Husein). Diabetic retinopathy and diabetic
                    maculopathy: NPDR/PDR, CSMO, the three maculopathies,
                    laser, involution, vitrectomy, retinal imaging, and
                    central serous chorioretinopathy.
     `op-ret-vasc`  `L19.2) Retinal Vascular Disorders` — 43 pp, same
                    lecturer, and its own contents slide lists exactly what
                    the chapter covers: "1. Retinal vein occlusion
                    2. Retinal artery occlusion 3. Hypertensive retinopathy
                    4. Sickle-cell retinopathy 5. Retinopathy of
                    prematurity", plus macroaneurysm and blood dyscrasias.
     `op-ret`       `L20) Retinal detachment and degenerations` — 33 pp, a
                    DIFFERENT lecturer (Dr. Ahmed metwaly), a different
                    PowerPoint template, and a different subject: the
                    mechanical retina.

   WHY THESE SEAMS AND NOT THE THREE NEAREST ALTERNATIVES:

     1. THE LECTURER DREW THEM. These are not headings inside one file;
        they are THREE SEPARATE PDFs, and the last one is by a different
        teacher. No seam in this module has ever been better evidenced —
        `op-red`'s best seam was a first-order heading inside one book
        chapter, and `op-cat`'s was two decks. Here the split is the
        syllabus's own.
     2. IT SPLITS THE THREE MECHANISMS THAT DO NOT MIX. Diabetes damages
        capillaries from the inside (`op-ret-dr`); an occlusion stops flow
        in one named vessel (`op-ret-vasc`); a detachment separates two
        layers (`op-ret`). Almost nothing crosses: the one real crossing,
        TRACTIONAL detachment from proliferative diabetic retinopathy, is
        written in `op-ret` (`L20` sl.7/10/15 own it) and cross-referenced
        from `op-ret-dr`, once, in one line.
     3. ZERO QUESTIONS STRADDLE ANY SEAM. Four of the five are detachment
        questions and stay in `op-ret`; the fifth is a macular-imaging
        question and moves to `op-ret-dr`. `op-ret-vasc` gets none — which
        is normal in this module (`op-systemic`, `op-insid`, `op-white` and
        `op-trauma` all have zero) and is the lecture side of the §14.2
        floor.

     REJECTED — TWO-WAY, VASCULAR vs MECHANICAL (`L19.1`+`L19.2` | `L20`).
     The obvious candidate, and the one the brief names. Costed: 4,645 and
     2,320 body words, ~19.4 pp and ~9.7 pp. **Chapter 1 would need
     splitting again immediately** — which is the `op-orbit` failure
     (split after printing 14 pp) repeated deliberately, and
     `theory-plan.md`'s first finding forbids it. It also merges two
     lecture files whose only shared property is the word "vascular".

     REJECTED — THREE-WAY ON CATEGORY: "the proliferative retinopathies"
     (diabetic + sickle + ROP + blood dyscrasias) | "the occlusions" |
     detachment. Costed at ~2,485 / ~2,160 / ~2,320 — **the most balanced
     of any option, all three inside ~10 pp**, and it is rejected anyway.
     It breaks `L19.2`'s own five-item contents slide across two chapters,
     which is the `rhin-14` principle inverted (a deck's own
     classification is left where the deck puts it), and it puts a
     neonatal-screening topic inside a diabetes chapter. The balance gain
     is ~1 page against a real loss of structure.

     REJECTED — FOUR-WAY, splitting `op-ret-vasc` at the occlusions. Costed
     at ~1,890 (`vsc-1`–`vsc-11`) and ~805 (`vsc-12`–`vsc-16`). The second
     chapter clears the 600 floor by only 205 words, and four chapters for
     three lecture files invents a boundary the syllabus does not have.
     ⚠️ **BUT IT IS THE PRE-IDENTIFIED FALLBACK**: `op-ret-vasc` is
     forecast at ~11 pp, over the shape. If it PRINTS over ~12 pp, split it
     exactly there — occlusions and carotid disease against the four
     non-occlusive retinopathies — and no question moves, because that
     chapter has none. Stating the fallback in advance costs nothing and
     means an overrun does not become a rewrite.

   ============================================================================
   DECK LABELS USED IN THE Src LINES:
     L19.1  = L19.1) Diabetic Retinopathy.txt        — COUNTED (line numbers)
     L19.2  = L19.2) Retinal Vascular Disorders.txt  — COUNTED (line numbers)
     L20    = L20) Retinal detachment and degenerations.txt — COUNTED,
              cited as `L20 sl.<n>`; the cache is a slide-by-slide visual
              read and slide number = PDF page number
     L23    = L23) Ocular manifestations of systemic diseases.txt — cited only
     L35,36 = L35,36) Chronic visual loss.txt        — cited only
     L33,34 = L33,34) The White Eye.txt              — cited only
     L31,32 = L31,32) Acute visual Loss.txt          — cited only
     L18    = L18) Cataract II.txt                   — cited only
     L1,2   = L1,2) Ocular Anatomy… .txt             — cited only
     L25    = L25) Trauma I.txt                      — cited only
     L12    = L12) Glaucoma 2 Cong, PACG, 2ry.txt    — cited only
     L7,8   = L7,8) Refractive errors.txt            — cited only

   ============================================================================
   BUDGET — §14.1: budget = max(summed lecture words, 25 × linked
   questions), floor 600, cap 3,000 PER CHAPTER. MEASURED FROM DISK BY LINE
   RANGE (§14.1(a)).

   ⚠️ DEFINITION STATED, BECAUSE THE TWO IN CIRCULATION DIVERGE BY ~10 % ON
   THESE FILES. All TERM 1 figures below are `wc -w` — the definition
   §14.1 names — reproducible with:

     sed -n '<a>,<b>p' "content/ophtho/lectures/<file>" | wc -w

   A node `split(/\s+/)` count returns 503 / 1,089 / 2,603 for the three
   files against `wc -w`'s 456 / 982 / 2,376, because these decks are full
   of `•` and `·` glyphs that node counts as words and `wc -w` does not.
   The brief's figures are `wc -w`, so `wc -w` is used throughout.
   (⚠️ Unrelated but worth the hub's note: `op-red`'s header claims its
   cache is "5,104 words … an exact match" to `theory-plan.md`. Neither
   method reproduces that — `wc -w` gives 5,825 and node 5,829 for
   `L37) Red Eye.txt`. The plan's 5,104 is a `pdftotext` figure for the
   PDF, not a count of the cache. No consequence for that chapter's
   content; the claim of an exact match is wrong.)

   TERM 1 — `L19.1`, 456 w in the cache (109 non-blank lines):
     lines   1–  2     5 w — cache SOURCE header. NOT counted.
     lines   3–  6     7 w — "RETINAL DISEASE / By / Faten Husein /
                             DIABETIC RETINOPATHY". Title block.
                             NOT counted.
     lines   7– 15    21 w — the six-item contents slide. NOT counted — an
                             ILO index (§14.1's `ent-swallow` precedent);
                             every item is a heading below.
     lines  16–181   423 w — ALL CONTENT. COUNTED.
     `op-ret-dr` TERM 1 = 456 − 5 − 7 − 21 = **423 w**.

   TERM 1 — `L19.2`, 982 w in the cache (242 non-blank lines):
     lines   1–  2     6 w — cache SOURCE header. NOT counted.
     lines   3–  4     3 w — title slide. NOT counted.
     lines   5– 15    26 w — the five-item contents slide. NOT counted —
                             ILO index.
     lines 311–325    24 w — hypertensive retinopathy: arteriolar
                             constriction, the extravascular signs, and the
                             bare-title arteriolosclerosis grading.
                             ⚠️ CITED ONLY, NOT COUNTED. Every fact is
                             already written in the merged `sys-3`/`sys-4`
                             from `L23`, and this chapter cross-references
                             rather than re-deriving. Under-counting is the
                             safe direction (§14.5's "the budget may
                             understate a chapter, never overstate it").
     lines 326–336    18 w — the four ocular associations of hypertension.
                             ⚠️ CITED ONLY, NOT COUNTED — the same list is
                             in merged `sys-5`. The two entities this
                             chapter OWNS (vein occlusion, macroaneurysm)
                             are written from their own full slides at
                             lines 16–147 and 402–432, which ARE counted.
     everything else 905 w — COUNTED.
     `op-ret-vasc` TERM 1 = 982 − 6 − 3 − 26 − 24 − 18 = **905 w**.

   TERM 1 — `L20`, 2,376 w in the cache — ⚠️⚠️ AND THIS IS THE BIGGEST
   BUDGET CORRECTION IN THE FILE. The cache is a visual-read transcription
   and 1,071 of its 2,376 words are the TRANSCRIBER'S OWN ANNOTATION, not
   the deck. **The brief's "TERM 1 is therefore ~3,814 words" counts all of
   it; the deck's real content is 1,415.** Itemised:
     lines   1– 37   333 w — the cache's header: the pdftotext finding, the
                             triage answer, the pages-17–32 finding, the
                             template note, the garbled-label warning.
                             ANNOTATION. NOT counted.
     lines  38– 45    20 w — slide 1, title + "interior-design stock
                             photograph. Template decoration."
                             NOT counted.
     lines  46– 55    52 w — slide 2, a section title, the leftover
                             "GROWTH MARKETING PLAN" sidebar and a photo
                             credit. CITED ONLY, NOT COUNTED — the one
                             usable observation in it (a bullous
                             detachment as a smooth dome over the vessels)
                             is used in `rd-3` as figure evidence.
     lines  56– 62    15 w — slide 3, an UNLABELLED normal fundus
                             photograph. NOT counted — no teaching.
     lines  63– 94   118 w — slide 4, the retinal layers as a labelled
                             diagram. COUNTED — the `L9` precedent: on a
                             labelled diagram the LABELS are the teaching.
     lines  95–110    92 w — slide 5, four histology panels + the
                             abbreviation stack + the fovea panel. COUNTED.
     lines 111–124    77 w — slide 6, RRD. COUNTED.
     lines 125–137    78 w — slide 7, TRD. COUNTED.
     lines 138–150    78 w — slide 8, ERD. COUNTED.
     lines 151–166    96 w — slide 9, the differentiation table (a raster;
                             the deck's single most examinable slide).
                             COUNTED.
     lines 167–196   160 w — slide 10, the three-mechanisms figure with its
                             cross-section labels. COUNTED.
     lines 197–211   119 w — slide 11, the symptoms table (a raster).
                             COUNTED.
     lines 212–243   179 w — slide 12, the four-panel labelled fundus
                             figure. COUNTED.
     lines 244–251    30 w — slide 13, the management opener. COUNTED.
     lines 252–270   134 w — slide 14, RRD surgery + the vitrectomy figure
                             labels. COUNTED.
     lines 271–286    98 w — slide 15, TRD surgery + figure. COUNTED.
     lines 287–306   156 w — slide 16, ERD management + the pasted-figure
                             layout defect. COUNTED whole; ~45 w of it is
                             the defect annotation, so this range slightly
                             OVER-counts and it is stated rather than
                             adjusted away.
     lines 307–319    90 w — the sixteen blank template slides.
                             ANNOTATION about ABSENCE. NOT counted.
     lines 320–326    13 w — slide 33, "Thank YOU". NOT counted.
     lines 327–379   438 w — ⚠️ THE NOT-COVERED LIST. NOT COUNTED, and the
                             single most important exclusion here: it is an
                             INVENTORY OF WHAT THE DECK DOES NOT CONTAIN.
                             Counting 438 words of absence as a writing
                             budget would be the exact inverse of §14.1(b).
                             It is used heavily — it is what lets this
                             chapter prove negatives instead of guessing —
                             but it is worth ZERO words of budget.
     `op-ret` TERM 1 = 118+92+77+78+78+96+160+119+179+30+134+98+156
                     = **1,415 w** of deck content out of 2,376 cached.

   TERM 2 — 25 × linked questions. ⚠️ VERIFIED FROM DISK. `grep -nE
   "chapter: *[\"']op-ret" app\data\questions.ophtho.js` returns exactly
   FIVE lines — `opqb-t1-18`, `opqb-t1-19`, `opqb-t1-60`, `opqb-t1-61`,
   `opqb-t2-83`. (The file writes the field both with and without a space
   after the colon; all five here are unspaced.) TERM 2 =
   `op-ret-dr` 25 · `op-ret-vasc` 0 · `op-ret` 100. It governs nowhere.

   BUDGETS:
     `op-ret-dr`   = max(423 · 25) = 423 → **BELOW THE FLOOR. Budget 600.**
     `op-ret-vasc` = max(905 ·  0) = **905.**
     `op-ret`      = max(1,415 · 100) = **1,415.**

   ⚠️ ENTITY / FRAMEWORK FLOOR, COUNTED BEFORE WRITING (§14.1's `ent-dysph`
   and `ent-neck` rules — state the overrun up front, cost framework slides
   one by one, cost a grid at rows × columns):

     `op-ret-dr` — DIABETIC RETINOPATHY AND THE MACULA
       Risk factors + the deck's own DR tree (NPDR mild/mod/severe · PDR ·
         maculopathy leakage/ischaemic) — framework, and mostly a
         cross-reference to `sys-1`/`ins-8`: ~170
       NPDR — 4 mild signs WITH their locations + 4 severe signs + the
         "watch for proliferative disease" rule. `sys-2` has the signs, so
         held to locations and the rule: ~180
       PDR + panretinal photocoagulation. The three treatment indications
         are `sys-2`'s; the PRP TECHNIQUE (burn count, spot size, duration,
         follow-up) is new: ~240
       Involution after laser — a 2 × 3 grid, good against poor: ~140
       Vitreoretinal surgery — 4 indications, each a picture: ~130
       Maculopathy — the classification, leakage (focal/diffuse/cystoid)
         against ischaemic, and why it is not a stage: ~150
       CSMO — a THREE-criterion definition carrying 500 µm, 500 µm and
         1,500 µm. Framework, costed alone: ~200
       The three maculopathies compared — 3 columns × 6 axes = 18 cells,
         costed at rows × columns per `ent-phon`: ~250
       Treating CSMO — grid against focal, with both sets of laser
         parameters: 2 × 4 = 8 cells + leads: ~200
       Retinal imaging — FA, OCT, B-scan, and why AMD is not an ultrasound
         diagnosis (the chapter's one question): ~230
       Central serous chorioretinopathy — supplied and tagged: ~170
       = ~2,060

     `op-ret-vasc` — RETINAL VASCULAR DISORDERS
       RVO predisposing factors (4 systemic + 2 ocular) + the
         pathophysiology chain, as a flow: ~170
       BRVO — acute signs, FA early/late, the old occlusion, prognosis
         figure, the two complications named: ~190
       BRVO's complications managed — chronic macular oedema (the 6–12
         week rule, the perfusion decision, the 6/18 threshold) +
         neovascularization (30–50 %, 6–12 months, sectoral laser): ~180
       CRVO — non-ischaemic against ischaemic, 2 columns × 9 axes =
         18 cells, plus the two FA appearances: ~250
       CRVO management + RUBEOSIS IRIDIS and the ischaemia behind
         neovascular glaucoma (register row): ~170
       Papillophlebitis — one entity, 6 facts: ~100
       RAO — the two mechanisms + the three emboli at 3 × ~35: ~220
       Vaso-obliteration + the young patient's thrombophilia list: ~140
       BRAO / cilioretinal / CRAO — 3 columns × 6 axes = 18 cells, plus
         the cilioretinal artery's three settings with three prognoses:
         ~240
       Carotid disease — 4 imaging modalities + medical and surgical
         treatment with the >70 % rule: ~230
       Hypertensive retinopathy — cross-reference `sys-3`/`4`/`5`, the two
         associations this chapter owns, the bare-title defect: ~100
       Sickle-cell retinopathy — the five stages (register row), the two
         lesion sets, and the management the deck does NOT print: ~190
       ROP — 3 zones + clock hours + 5 stages (SUPPLIED) + threshold
         disease + 2 modalities + the 75/25 figures + 3 cicatricial forms:
         ~260
       Retinal artery macroaneurysm — the entity, FA, rupture, chronic
         leakage: ~170
       Retinopathy in blood dyscrasias — 2 groups, 6 signs: ~85
       = ~2,695

     `op-ret` — RETINAL DETACHMENT
       The retina in layers — 9 layers + 9 cell/membrane labels + the
         inverted light path + the foveal section: ~220
       The three types — 3 entities × (definition + mechanism + causes),
         plus what the mechanisms FIGURE adds over the prose: ~280
       Telling them apart — the 3 × 3 differentiation table + the
         four-panel fundus mapping: ~240
       Symptoms — a 3 × 2 table + the module's own RRD case: ~180
       How a detachment BEGINS — PVD, syneresis, break morphology. ⚠️ ALL
         SUPPLIED AND TAGGED; two questions turn on it: ~300
       The examination and the investigations `L20` omits — grey reflex,
         low IOP, RAPD, Schafer sign, B-scan, macula-on/off. Part
         cross-reference, part supplied; two questions: ~280
       RRD surgery — 3 operations + laser/cryo + tamponade: ~220
       TRD and ERD management — 2 × 3 facts: ~190
       Trauma and the retina — commotio, breaks, choroidal rupture
         (register row), largely a cross-reference: ~160
       The peripheral degenerations — the half the lecture never
         delivered. SUPPLIED AND TAGGED: ~230
       = ~2,300

     COMBINED FORECAST ≈ 7,055 body words. As ONE chapter,
     7,055 ÷ 240 ≈ 29.4 printed pages — the largest forecast in the
     module. SPLIT THREE WAYS.
     As three: ~2,060 (≈8.6 pp) · ~2,695 (≈11.2 pp) · ~2,300 (≈9.6 pp).
     ⚠️ EVERY ONE OVERRUNS ITS TERM 1 — by +387 %, +198 % and +63 % — and
     the reason is the caption-deck finding at the top of this header plus
     twelve register rows plus `L20`'s missing half. The overruns are
     forecast, not discovered, and NO FACT IS DROPPED TO REACH A NUMBER.
     ⚠️ `op-ret-vasc` at ~11.2 pp is over the ~10-page shape; the fallback
     seam is named above and the hub rules on pages after printing
     (§14.1: over 10 %, render and count before ordering compression).

   ============================================================================
   ⚠️ MODULE CHECK — THE SOURCE'S OWN COVERAGE IS NOT THE MODULE'S. Every
   term below was greped across ALL 27 cached ophthalmology decks AND
   across `app\data\theory.ophtho.js` before anything was called a gap,
   misspellings included (the `Vossious`/`Amsilar` rule).

     ⚠️⚠️ THE LARGEST FINDING, AND IT IS THE MISSPELLING RULE PAYING
     AGAIN: **SHAFER'S SIGN IS PRINTED IN THE MODULE.** `L20`'s
     NOT-COVERED list says "TOBACCO-DUST / SHAFER'S SIGN — not named", and
     `Shafer` does return `L20` alone. But `L18) Cataract II` line 495
     prints **"Vitreous: any pigment? Schafer sign → retinal tear?"** —
     spelled **Schafer**, with a `c`. It is already written in the MERGED
     `cts-3`. So the sign is sourced, not supplied, and `rd-6`
     cross-references `cts-3` instead of tagging it.

     ⚠️⚠️ SECOND FINDING, SAME SLIDE: **LATTICE DEGENERATION AND RETINAL
     BREAKS ARE NAMED IN THE MODULE**, on `L18` line 493 — "Periphery:
     retinal breaks, lattice degeneration" — and are written in merged
     `cts-3` as "periphery (breaks, lattice)". `L20`'s NOT-COVERED list is
     right about `L20` and wrong about the module. The NAME is sourced;
     the description, prevalence and prophylaxis are not, and those are
     tagged in `rd-10`. **A deck's not-covered list bounds the deck, never
     the module** — the `L35,36`-carries-a-cataract-lecture finding, seen
     from the other end.

     ⚠️ THIRD: **B-SCAN ULTRASOUND WHEN THE FUNDUS IS NOT VISIBLE IS
     PRINTED**, twice — `L18` line 496 ("If not visible → B-scan
     ultrasound mandatory", written in merged `cts-3`) and `L19.2` line 276
     (duplex as "high resolution real-time B-scan ultrasonography"). `L20`
     lists "ANY INVESTIGATION" as absent, which is true of `L20`.

     ✅ NOT A GAP — CLOPIDOGREL. `clopidogrel` returns ZERO across all 27
        decks because `L19.2` line 305 prints **"Clopidorel (Plavix)"**.
        Written with both spellings in `vsc-10` so a search from either
        side finds it — the `uvelopalato`/`ostiomeatal` treatment.
     ✅ NOT A GAP — CENTRAL SEROUS CHORIORETINOPATHY IS *NAMED*. See the
        register verdict below; the register row calls it absent from all
        27 decks and `L23` line 213 prints it.
     ✅ NOT A GAP — THE "CURTAIN". `L20` sl.11 prints *a "curtain" or
        shadow in the peripheral vision*, and `L31,32` Case 4 prints
        "like a curtain coming down". Both used in `rd-4`.
     ✅ NOT A GAP — FLOATERS AND PHOTOPSIA AS DEFINED SYMPTOMS. `L1,2`
        lines 264–271 define both ("seeing flashes of light in the absence
        of a light source"; "seeing floating black shadows in bright
        illumination"). Cited only — those lines are `op-intro`'s /
        `op-vissym`'s.
     ✅ NOT A GAP — THE GREY RED REFLEX OF DETACHMENT. Written in merged
        `pup-9` from `L3,4`. Cross-referenced in `rd-6`, not re-derived.
     ✅ NOT A GAP — RETINAL DETACHMENT AND CRAO AS OCULAR EMERGENCIES.
        `L1,2` line ~651 puts both on the VISION-THREATENING list.
        ⚠️ Cited only, not counted: `op-red`'s register row already
        reserves `L1,2` lines 614–659 for `op-intro`/`op-vissym` and
        explicitly leaves the non-red entries — CRAO, RD, IOFB, GCA —
        whole. One line each here; nothing is claimed.
     ✅ NOT A GAP — MYOPIA AS A RETINAL RISK. `L7,8) Refractive errors`
        lists retinal tears and RRD among the peripheral complications of
        high myopia, and `L20` sl.6 names high myopia as an RRD cause.
        Both cited in `rd-2`/`rd-5`.

   THE REAL GAPS — each settled by proving a negative across all 27 decks
   AND the merged theory, each ANSWERED AND TAGGED IN PLACE, never declared
   (`CLAUDE.md` §4a). ⚠️ Each tag sits on its OWN claim so the reader
   always knows which side of the line a sentence is on:
     1. POSTERIOR VITREOUS DETACHMENT AND SYNERESIS. `posterior vitreous`
        and `PVD` return `L20`'s NOT-COVERED list and nothing else;
        `syneresis` returns **ZERO across all 27 decks**. `L20` sl.6 says
        only "Aging (vitreous shrinkage)". ⚠️ TWO of the chapter's five
        questions key on exactly this — `opqb-t1-18` (PVD) and
        `opqb-t1-19` (syneresis/condensation) — so §14.2 makes it
        compulsory, not optional. Supplied and tagged in `rd-5`, with the
        deck's own phrase "vitreous shrinkage" written beside the term.
     2. BREAK MORPHOLOGY. Horseshoe/flap tear, operculated hole, atrophic
        round hole, giant tear, dialysis — none named anywhere. `L18` gives
        "retinal breaks" as a category only. Supplied, tagged, `rd-5`.
     3. MACULA-ON versus MACULA-OFF AND THE TIMING OF SURGERY. No time
        window anywhere in the module. Supplied, tagged, `rd-6` — and
        `opqb-t1-61`'s own explanation calls it "the single most important
        prognostic distinction", so the notes must carry it.
     4. THE LOW IOP OF A DETACHED RETINA, AND THE RAPD. Absent from `L20`;
        `L22` does list "retinal detachment (total)" among the causes of
        mydriasis, which is `op-neuro`'s deck. Supplied and tagged, `rd-6`.
     5. PROLIFERATIVE VITREORETINOPATHY, SHIFTING SUBRETINAL FLUID,
        LEOPARD SPOTS, TAMPONADE AGENTS BY NAME, LINCOFF'S RULES, LASER
        RETINOPEXY FOR A BREAK WITHOUT DETACHMENT, AND ANY SUCCESS RATE.
        All confirmed absent module-wide. Supplied where the chapter cannot
        be understood without them (`rd-7`, `rd-8`), each tagged; Lincoff's
        rules are named once and not reproduced, because no question needs
        them and the chapter has no fluid-contour figure to hang them on.
     6. THE PERIPHERAL DEGENERATIONS — lattice's description, snail-track,
        paving-stone, retinoschisis, white-with-pressure. `snail`,
        `paving`, `cobblestone`, `retinoschisis` return `L20`'s
        NOT-COVERED list only; `white with pressure` returns zero
        anywhere. ⚠️ `lattice` in `L15,16` and `L18` line 493 is TWO
        different things — a corneal dystrophy and the retinal
        degeneration — and only the second is this chapter's. Supplied and
        tagged in `rd-10`, kept deliberately short: no question tests any
        of it and the deck promises it only in its title.
     7. THE ROP STAGES. `L19.2` line 377 is the bare title "Staging of
        active retinopathy of prematurity" over an image. The zones, clock
        hours, threshold definition and outcome figures around it ARE
        printed. Stages 1–5 supplied and tagged in `vsc-14`, and the
        register row that promised "staging" is reported.
     8. THE MANAGEMENT OF SICKLE PROLIFERATIVE RETINOPATHY. The register
        row assigns it here; **neither `L19.2` nor `L23` prints any sickle
        treatment.** Supplied and tagged in `vsc-13`, and the row reported
        as partly undeliverable rather than ticked.
     9. CENTRAL SEROUS CHORIORETINOPATHY, everything except its name.
        Supplied and tagged in `dr-11`.
    10. COMMOTIO RETINAE'S MECHANISM AND COURSE, AND CHOROIDAL RUPTURE'S.
        `L25` sl.35–39 are FOUR PHOTOGRAPH LABELS. Supplied and tagged in
        `rd-9`; merged `trm-7` already carries the labels themselves.

   ============================================================================
   ⚠️⚠️ THE TWELVE REGISTER ROWS THIS CHAPTER WAS OWED — VERIFIED ONE BY
   ONE AGAINST THE NAMED SOURCE'S OWN LINES *AND* AGAINST THE MERGED
   CHAPTER, INCLUDING EACH ROW'S SECOND CLAUSE (`theory-plan.md`: "verify a
   row's SECOND clause too"). It is the module's most-owed chapter; six
   donors, twelve rows, and **five of the twelve are wrong in some way.**

     1. §14.5 line 1033 — `op-glauc` (L12) → `op-ret`: "Rubeosis iridis
        and the retinal ischaemia behind it — `op-glauc` writes
        neovascular glaucoma as a secondary glaucoma; the retinal cause
        (proliferative diabetic retinopathy, CRVO) belongs to the retina
        chapter."
        ⚠️ VERDICT: **CONTENT DELIVERABLE AND DELIVERED; THE DECK
        ATTRIBUTION IN THE ROW'S OWN HEADER IS WRONG.** `rubeos` returns
        **ZERO in `L12`** across the whole file — `L12` prints only
        "Neovascular Glaucoma" and the membrane mechanism (line 292). The
        word and the ischaemia are on **`L19.2`**, this chapter's own deck:
        line 128 "Rubeosis irides in 50%" under ischaemic CRVO, and lines
        140–147 "Look for rubeosis and angle new vessels … treat
        neovascularization by panretinal photocoagulation".
        ✅ SECOND CLAUSE TRUE: merged `glc-15` does write neovascular
        glaucoma as a secondary narrow-angle glaucoma (anterior pulling),
        with RVO as posterior pushing, and its own aside already points at
        `L19.2` correctly. Delivered in `vsc-5`. ⚠️ Merged `va-12` already
        defines rubeosis as "new vessels on the iris surface, from retinal
        ischaemia" — so the DEFINITION is not re-derived; `vsc-5` writes
        the ischaemia, the 50 % figure, the surveillance schedule and PRP.
     2. §14.5 line 1035 — `op-systemic` (L23 ll.21–106) → `op-ret`:
        "Diabetic retinopathy as RETINAL DISEASE — `sys-2` writes it as
        the systemic complication and the screening rule; the
        classification, grading and laser/anti-VEGF management belong to
        the retina chapter (`L19.1`)."
        ⚠️ VERDICT: **RANGE EXACT, SECOND CLAUSE HALF WRONG.** `L23`
        line 21 is "Diabetes Mellitus" and line 103 ends the DR block
        (line 104 begins hypertensive retinopathy), so the range is right
        to within three lines. But merged `sys-2` **already carries the
        classification and the grading** — the NPDR/severe NPDR/PDR stage
        table, the sign locations, the 5–10 % and 60 %-after-30-years
        figures, NVD/NVE, the disc-area rule, all three PDR treatment
        indications and diffuse maculopathy with grid laser. The row's
        "the classification, grading … belong to the retina chapter" is
        the CIRCULAR shape: the deferring chapter wrote it. **What is
        genuinely left, and is written here, is the LASER AND SURGERY in
        full plus the whole maculopathy account** — CSMO's three criteria,
        focal and ischaemic maculopathy, both laser parameter sets, PRP
        technique, involution, and the four vitrectomy indications, none of
        which is in `sys-2`. ⚠️ And a screening rule is not in `sys-2`
        either: the row's phrase "and the screening rule" describes
        nothing in the merged chapter. Reported, not manufactured.
     3. §14.5 line 1036 — `op-systemic` (L23 ll.107–210) → `op-ret`:
        "Retinal vein occlusion and retinal artery macroaneurysm as
        RETINAL DISEASE — written here only as hypertension's ocular
        consequences."
        ✅ VERDICT: **EXACT, ON BOTH CLAUSES.** `L23` prints both terms
        exactly once, on line 186, as two captions in the "Ocular
        associations of hypertension" plate; there is no entity account of
        either anywhere in `L23`. Merged `sys-5` lists all four
        associations and says so. Delivered in `vsc-1`–`vsc-5` (vein
        occlusion, ~800 words of it) and `vsc-15` (macroaneurysm).
     4. §14.5 line 1037 — `op-systemic` (L23 ll.247–267) → `op-ret`: "The
        five stages of sickle proliferative retinopathy and their
        management — these are printed, on `L19.2` lines 343–347 …
        `sys-9` names the stages, the retinal chapter owns the
        management."
        ⚠️ VERDICT: **THE STAGES CLAIM IS EXACT TO THE LINE; THE
        MANAGEMENT CLAIM IS UNDELIVERABLE FROM THE MATERIAL, AND THE
        CHAPTER ATTRIBUTION IS WRONG.** `L19.2` lines 343–347 print the
        five stages verbatim — peripheral arteriolar occlusion ·
        peripheral arteriovenous anastomoses · neovascularization
        ("sea-fan") · vitreous haemorrhage · fibrovascular proliferation
        and traction. ✅ But the stages are in **`sys-8`**, not `sys-9`
        (`sys-9` is sarcoidosis and the autoimmune dry eye) — and `sys-8`
        carries them IN FULL, with the cascade and both lesion sets.
        ❌ **NO DECK PRINTS ANY SICKLE TREATMENT.** `L19.2`'s sickle block
        (lines 337–361) is the staging list and two plates; `L23`'s
        (247–267) is the genotype paradox, the cascade and the same two
        plates. The management is therefore SUPPLIED AND TAGGED in
        `vsc-13`, and the row is reported as half undeliverable rather
        than ticked.
     5. §14.5 line 1038 — `op-systemic` (L23) → `op-ret`: "Central serous
        chorioretinopathy — ⚠️ ABSENT FROM ALL 27 DECKS."
        ⚠️ VERDICT: **THE ABSENCE CLAIM IS OVER-STATED, AND THE ROW IS
        ALSO SELF-DELIVERED IN PART.** `L23` lines 212–214 print, on the
        pregnancy slide: "There is an increased incidence of **central
        serous chorioretinopathy** and uveal effusions in pregnant versus
        nonpregnant women." So the ENTITY IS NAMED in the material, and
        merged `sys-6` already writes that association in bold, with its
        own aside saying no cached deck defines it. What is genuinely
        absent module-wide is **any definition, clinical picture,
        investigation or management** — confirmed, `chorioretinopathy`
        returns `L23` line 214 and `L20`'s not-covered list and nothing
        else. Written in `dr-11`: the name and the pregnancy link SOURCED
        to `L23`/`sys-6`, everything else supplied and tagged claim by
        claim. **The row is not a promise the material cannot keep; it is
        a promise the material can keep one clause of.**
     6. §14.5 line 1063 — `op-insid` (L35,36 ll.250–262) → `op-ret`:
        "Macular and foveal anatomy as ANATOMY."
        ⚠️ VERDICT: **CIRCULAR — THE DEFERRING CHAPTER WROTE IT, IN FULL,
        AND BILLED THE WORDS.** Source claim exact: `L35,36` lines 251–262
        print the macula 2 disc diameters temporal, rods and cones, the
        avascular darker centre, the foveal depression with cones and no
        rods, and the foveal reflex as a concave mirror. **All of it is in
        merged `ins-6`**, whose own `Src:` reads "L35,36 lines 250–309" —
        so `op-insid` counted the range AND wrote the content. `ins-6` also
        carries the five macular functions, the six symptoms and the eight
        tests. **Nothing is missing and nothing is re-derived**: `rd-1`
        cross-references `ins-6` in one italic line, and writes instead the
        anatomy `ins-6` has NOT got — `L20` sl.4/5's nine retinal layers,
        the nine cell and membrane labels, the inverted light path, and the
        foveal histology — which is the layer anatomy a detachment needs.
     7. §14.5 line 1064 — `op-insid` (L35,36 ll.369–408) → `op-ret`:
        "Diabetic retinopathy as retinal disease — FA/OCT, PRP,
        anti-VEGF, vitrectomy. ⚠️ MERGE WITH `op-systemic`'s DR ROW ABOVE
        — `op-ret` writes it ONCE, against both."
        ⚠️ VERDICT: **THE MERGE INSTRUCTION IS RIGHT AND WAS FOLLOWED; THE
        ROW IS OVER-SPECIFIED ON ITS OWN SOURCE.** Read directly, `L35,36`
        lines 369–408 print risk factors, the two pathogenetic arms, the
        three types and a management table (NPDR observation · PDR PRP ·
        macular oedema focal & grid laser + anti-VEGF). **It prints no FA,
        no OCT and no vitrectomy** — `OCT` returns `L35,36` line 74 only,
        in an optic-nerve/glaucoma context. And every one of the four
        things it DOES print is already in merged `ins-8`, so this row is
        circular too. FA and vitrectomy are real and are on **`L19.1`**
        (this chapter's own deck: FA at lines 111, 119, 128; "Indications
        for vitreoretinal surgery" at line 169); OCT is printed on
        **`L18`** (lines 264, 370, 396) and written in merged `cts-3`/
        `cts-6`. So `dr-10` writes the imaging from `L19.1` and `L18`, not
        from `L35,36`. **DR is written ONCE in this file**, in
        `dr-1`–`dr-10`, against rows 2 and 7 together.
     8. §14.5 line 1065 — `op-insid` → `op-ret`, ⚠️ NOTICE, NOT DEFERRED:
        "AMD IS WRITTEN IN FULL IN `ins-7` AND MUST NOT BE RE-DERIVED."
        ✅ VERDICT: **EXACT, AND OBEYED.** Verified: `drusen` and `Bruch`
        return `L35,36` alone across all 27 decks; `choroidal
        neovascularization`, `geographic atrophy` and `AREDS` return zero
        outside it. Merged `ins-7` carries AMD in full — the 90/10 dry/wet
        split, the Alexandria prevalence figures, drusen in Bruch's
        membrane, the risk-factor grid and both treatments. **NOT
        REWRITTEN.** One italic cross-reference in `dr-10`, where the
        chapter's own question turns on AMD being an OCT-and-angiography
        diagnosis rather than an ultrasound one.
     9. §14.5 line 1068 — `op-white` (L33,34) → `op-ret`: "Retinopathy of
        prematurity as retinal disease — zones, clock hours, staging,
        threshold disease, cryo vs laser, the 75 %/25 % figures. ✅ NOT
        blocked — the receiver's own `L19.2` lines 362–395 print all of it
        and are text-sufficient."
        ⚠️ VERDICT: **RIGHT ABOUT SIX ITEMS OUT OF SEVEN, AND WRONG ABOUT
        "ALL OF IT".** Verified line by line in `L19.2` 362–401: zones ✅
        (three, centred on the optic disc, printed as a figure with 1/2/3
        labels), extent in clock hours ✅ (line 376), threshold disease ✅
        (line 388, "5 contiguous or 8 non-contiguous clock hours in zone I
        or zone II, associated with 'plus' disease"), cryotherapy and laser
        ✅ (lines 381–382), 75 % success and 25 % progression ✅ (lines
        393–394), cicatricial ROP ✅ (lines 395–401, three forms).
        ❌ **STAGING — line 377 is the BARE TITLE "Staging of active
        retinopathy of prematurity" with the content inside an image.** The
        stages are supplied and tagged in `vsc-14`. Also ⚠️ "plus" disease
        is named and never defined anywhere in the module; supplied and
        tagged in the same section.
    10. §14.5 line 1070 — `op-white` → `op-ret`, ⚠️ REVERSE NOTICE:
        "Coats disease · persistent fetal vasculature · toxocara/
        toxoplasma granuloma · retinal dysplasia … written there, not to
        be re-derived. `op-ret` cross-references `wht-8`."
        ✅ VERDICT: **EXACT, AND OBEYED.** Merged `wht-8` carries all five
        of the third-tier leukocoria causes with the deck's own
        definitions, the ROP-pulls/Coats-floats contrast and the treatment
        grid. **NOT REWRITTEN.** Cross-referenced twice where it matters:
        in `rd-2`, because Coats is the module's clearest EXUDATIVE
        detachment and ROP its clearest TRACTIONAL one — which is exactly
        `L20`'s three-type split seen in a child — and in `vsc-14` for
        ROP's anti-VEGF and PPV, two modalities `L19.2` does not print.
    11. §14.5 line 1071 — `op-cat` → `op-ret`: "Cystoid macular oedema /
        Irvine–Gass as MACULAR DISEASE."
        ⚠️ VERDICT: **CIRCULAR AGAIN — SELF-DELIVERED IN THE SAME DRAFT
        FILE.** The row names `op-cat` as donor, and CME is written in full
        in merged **`cts-6`** (`op-cat-surg`, the second chapter of the
        same draft file): weeks-to-months timing, fluid in Henle's layer,
        the risk list, OCT's petaloid pattern, NSAIDs + steroids and
        sub-Tenon's triamcinolone. **NOT REWRITTEN.** What this chapter
        owns and writes is CME as a form of DIABETIC maculopathy — `L19.1`
        line 86 lists "cystoid" as a third kind of leakage and line 120
        puts "frequent cystoid macular oedema" inside diffuse maculopathy —
        and as the chief complication of vein occlusion (`vsc-3`). Two
        different diseases sharing one appearance; both cross-referenced,
        neither duplicated.
    12. §14.5 line 1076 — `op-trauma` (L25 sl.35–39) → `op-ret`: "Commotio
        retinae, retinal breaks, retinal detachment and choroidal rupture
        as RETINAL DISEASE."
        ⚠️ VERDICT: **SOURCE EXACT, PAYLOAD ALMOST EMPTY — `L25` sl.35–39
        ARE FOUR PHOTOGRAPH LABELS.** Read directly: sl.35/36 is a fundus
        photograph labelled "CHERRY-RED SPOT · RETINAL EDEMA" under the
        title "Commotio retinae (Berlin's edema)"; sl.37/38 is two
        photographs labelled "RETINAL TEAR" and "RETINAL DETACHMENT";
        sl.39 is a photograph of a concentric crescent temporal to the
        disc. **There is no prose on any of them.** Merged `trm-7` already
        carries all four as table rows with exactly that content. So the
        row is deliverable only by SUPPLYING the retinal account, which
        `rd-9` does, tagged, cross-referencing `trm-7` for the labels
        themselves and `L20` for the mechanism by which a break detaches a
        retina.

     ⚠️ TALLY, because the pattern matters more than any single row:
     of TWELVE rows, **four verified exact** (3, 8, 10, and 9-in-part),
     **three CIRCULAR** — the deferring chapter had already written what it
     deferred (6, 7, 11; and 2's second clause) — **one with the wrong
     deck** (1), **one with the wrong receiving section** (4, `sys-9` for
     `sys-8`), **one over-stating an absence** (5), **one over-specifying
     its source** (7), and **two whose payload is photograph labels rather
     than teaching** (9-in-part, 12). NO ROW WAS TICKED THAT COULD NOT BE
     VERIFIED, and the two undeliverable halves — sickle management and
     the ROP stages — are supplied, tagged, and reported as undeliverable
     rather than quietly filled.

   ⚠️ ROWS THIS FILE ADDS TO THE REGISTER, to be copied into START-HERE.md
   §14.5 by the hub. ⚠️ = the receiving chapter is BLOCKED on an owed
   visual read:
     | `op-ret-vasc` (L19.2 lines 274–310) | **CAROTID DISEASE AS A
       SYSTEMIC PROBLEM** — the four imaging techniques and the
       antiplatelet/anticoagulant/endarterectomy ladder are written here
       because they are the work-up of an embolic retinal artery
       occlusion. The stroke risk itself, and giant cell arteritis as a
       disease, are not | `op-systemic`, `op-neuro` | ☐ ⚠️ `op-systemic`
       already merged; `op-neuro` blocked on `L21`+`L22` |
     | `op-ret-vasc` (L19.2 lines 236–250, 251–266) | **AMAUROSIS FUGAX
       AND GIANT CELL ARTERITIS AS PRESENTATIONS OF ACUTE VISUAL LOSS** —
       written here only as an embolic consequence and as the company
       cilioretinal-plus-AION keeps. `L31,32` Case 1 (CRAO) and Case 3
       (AION) are the presentations, and `L1,2` puts GCA and CRAO on the
       vision-threatening emergency list | `op-acute`, `op-neuro` | ☐
       ⚠️ both blocked on owed visual reads |
     | `op-ret-vasc` (L19.2 lines 402–441) | ⚠️ **NOTICE, NOT A DEBT — the
       RETINAL ARTERY MACROANEURYSM and the BLOOD-DYSCRASIA retinopathies
       are written HERE, in full, and nothing was owed.** `macroaneurysm`
       returns `L19.2` and `L23` line 186 only; `Roth spot` and
       `hyperviscosity` return **`L19.2` alone across all 27 decks** and
       zero across the merged theory. The module had no home for either
       until now | `op-systemic` | ⚠️ notice — already merged |
     | `op-ret` (L20 sl.4–5) | **THE NINE RETINAL LAYERS AND THE NINE CELL
       AND MEMBRANE LABELS** — written here because a detachment is a
       separation between two named layers. Merged `ins-6` carries the
       macula and fovea as a functional unit and no layer anatomy at all;
       neither chapter is removable | `op-insid` | ⚠️ notice — already
       merged; reconciliation work |
     | `op-ret` (L20 sl.16) | **UVEITIS AND VKH AS CAUSES OF EXUDATIVE
       DETACHMENT** — `L20` names both and defines neither; VKH appears
       nowhere else in the module as more than the bare abbreviation.
       `op-ret` carries only their role as an ERD cause and the
       steroid/immunosuppressant response | `op-uvea` | ☐ ⚠️ BLOCKED —
       `L13,14` extracts ZERO characters over 41 pp |
     | `op-ret` (L20 sl.8, sl.12) | **CHOROIDAL MELANOMA AS A TUMOUR** —
       `L20` names it as an ERD cause; the transillumination and
       ultrasound work-up that separates a choroidal tumour from an
       exudative detachment is on `L20`'s own NOT-COVERED list, so nobody
       has it. `op-ret` carries the ERD role only | `op-onc` | ☐ ⚠️
       BLOCKED — `L24` is 78 pp of rasterised text |
     | `op-ret-dr` (L19.1 lines 130–141, 150–158) | ⚠️ **NOTICE — THE
       LASER PARAMETERS ARE PRINTED ONLY HERE.** Spot sizes, burn
       durations, burn counts and the 500 µm / 1,500 µm / 3,000 µm
       distances appear on no other deck in the module and nowhere in the
       merged theory. `sys-2` and `ins-8` name the laser types and no
       numbers | `op-systemic`, `op-insid` | ⚠️ notice — both merged |
     | `op-ret` (L20, whole deck) | ⚠️ **DECLARED LOSS, NOT A DEFERRAL —
       `L20` NEVER DELIVERS THE "DEGENERATIONS" HALF OF ITS OWN TITLE.**
       Sixteen consecutive pages (17–32, 48 % of the file) render
       byte-identical as decorative clip art. There is no slide on
       lattice, snail-track, paving-stone, retinoschisis, PVD or
       white-with-pressure. `rd-5` and `rd-10` supply what the chapter
       cannot stand without, tagged. **A render buys NOTHING here** —
       the pages were rendered and are genuinely blank, which is the
       inverse of this module's usual finding | — | ☐ **recorded loss;
       do NOT commission a render** |

   DECLARED OVERLAP WITH AN ALREADY-MERGED CHAPTER, NEITHER SIDE REMOVABLE
   — these are the entities this file CROSS-REFERENCES instead of writing:
     · AGE-RELATED MACULAR DEGENERATION — `ins-7`, in full. `dr-10` names
       it only as the imaging exception.
     · THE MACULA AND FOVEA AS A FUNCTIONAL UNIT, the five functions, the
       six symptoms, the eight tests — `ins-6`.
     · DIABETIC RETINOPATHY'S STAGES, SIGNS, PDR FIGURES AND TREATMENT
       INDICATIONS — `sys-2`. Its systemic determinants — `sys-1`. Its two
       pathogenetic arms, three types and management table — `ins-8`.
     · HYPERTENSIVE RETINOPATHY — `sys-3`, `sys-4`, `sys-5` (arteriolar
       sclerosis, the A/V crossing, malignant hypertension, the macular
       star, the modified Scheie grades).
     · SICKLE-CELL DISEASE — `sys-8` (the SC/S-Thal paradox, the cascade,
       both lesion sets, the five stages). `vsc-13` adds only the
       management, supplied.
     · THE LEUKOCORIA FIVE — `wht-8` (ROP, Coats, PFV, granuloma, retinal
       dysplasia) and `wht-7` (retinoblastoma, congenital cataract).
     · CYSTOID MACULAR OEDEMA AFTER SURGERY / IRVINE–GASS — `cts-6`.
     · NEOVASCULAR GLAUCOMA AS A SECONDARY GLAUCOMA — `glc-15`. Rubeosis
       as an iris sign — `va-12`.
     · THE GREY RED REFLEX — `pup-9`. Direct ophthalmoscopy and the
       myopic fundus — `pup-10`.
     · SCHAFER SIGN, PERIPHERAL BREAKS AND LATTICE AS PRE-OPERATIVE
       FINDINGS, AND B-SCAN WHEN THE FUNDUS IS NOT VISIBLE — `cts-3`,
       from `L18`.
     · COMMOTIO RETINAE, RETINAL BREAK ± DETACHMENT AND CHOROIDAL RUPTURE
       AS BLUNT-TRAUMA LESIONS — `trm-7`. The four-step trauma
       examination — `trm-12`.
     · ENDOPHTHALMITIS — `cts-6` and `orb-12`.

   ============================================================================
   DEFECT NOTES (§4b — noted, never disputed), each one line in the body:
     · ⚠️ `L19.1` LOSES THE MICRON SYMBOL EVERYWHERE. Lines 93–105 and
       137–141 print "500 m", "1500 m", "100-200 m", "200-500 m",
       "500-3000 m". The µ did not survive extraction; read as micrometres
       throughout, which the 1,500 µm = one disc diameter equivalence on
       line 105 confirms internally. Recorded in `dr-7`.
     · ⚠️ `L19.1` MISSPELLINGS: "Sever NPDR" for severe (lines 32, 55),
       "anti VEGEF" (line 140), "Ischemic"/"Ischaemic" both used.
       Recorded once, in `dr-2`.
     · ⚠️ `L19.2` PRINTS "Clopidorel (Plavix)" (line 305) — `clopidogrel`
       returns zero across all 27 decks because of it. Both spellings are
       written in `vsc-10`.
     · ⚠️ `L19.2` PRINTS "Rubeosis irides" (line 128) for *iridis*.
       Recorded in `vsc-5`.
     · ⚠️ TWO SLIDES OF `L19.2` ARE IMAGE-ONLY IN A DECK THE PLAN CALLS
       TEXT-SUFFICIENT — line 325 "Grading of arteriolosclerosis" and
       line 377 "Staging of active retinopathy of prematurity". Recorded
       in `vsc-12` and `vsc-14`.
     · ⚠️ `L20` sl.7 SAYS "advanced diabetic retinopathy" WHERE sl.10's
       FIGURE SAYS "PROLIFERATIVE". Both printed; the figure is the more
       specific and both are given, in `rd-2`.
     · ⚠️ `L20` sl.12 CARRIES GARBLED FIGURE LABELS: "White fibroti scar
       tissue retinopathy", "Subretinal subretinal fluid", "Retina, and
       pale- temporal quadrant", and **"Choroid accuromatic macusis",
       which the cache flags as having no plausible reading. It is NOT
       treated as a real term and is not written anywhere in the body.**
       Recorded in `rd-3`.
     · ⚠️ `L20` sl.16 HAS A LAYOUT DEFECT ON THE LIVE SLIDE — a six-panel
       scleral-buckling figure is pasted over the right third of the
       exudative-detachment text and obscures three bullet ends as
       projected. The wording is recovered from the text layer, so nothing
       is lost, and the figure belongs to sl.14's topic. Recorded in
       `rd-8`.
     · ⚠️ `L20` IS BUILT ON A RE-USED COMMERCIAL TEMPLATE — sl.2 carries a
       leftover "GROWTH MARKETING PLAN" sidebar and sl.1/33 use
       interior-design stock renders. Not medical content, not written.
     · ⚠️ `L20` CONTAINS NO PERCENTAGE, NO INCIDENCE, NO TIME INTERVAL AND
       NO DRUG DOSE — its only numbers are a 25 µm scale bar and the slide
       numbers. Every figure in the detachment chapter is therefore either
       cross-referenced from another deck or supplied and tagged. Recorded
       in `rd-7`.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection (§14.2). The five questions
        carry it in their own `explanation` fields.
     2. The contents slides of `L19.1` (lines 7–15) and `L19.2` (lines
        5–15) as sections — ILO indexes; every item is a heading below.
     3. `L20`'s sixteen blank template slides, its two stock-render
        decoration slides, its "Thank YOU" slide, and the "GROWTH
        MARKETING PLAN" sidebar.
     4. The FA plate captions of `L19.2` reduced to their findings.
        "Early - blocked background fluorescence due to haemorrhage" is a
        finding and is written; a description of a photograph the app does
        not hold is not.
     5. LINCOFF'S RULES for locating the primary break, named once in
        `rd-5` and not reproduced — absent module-wide, no question needs
        them, and there is no fluid-contour figure to attach them to.
     6. The full stroke work-up behind carotid disease, and giant cell
        arteritis as a disease. Both registered above; `op-neuro` and
        `op-acute` own them.
     7. Question ids in body text, teaching voice, bank meta-commentary,
        per-fact citation clauses (one `Src:` line per section), and any
        closing summary section.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted
   field. No nested bullets anywhere.

   ============================================================================
   ⚠️ NO MEASURED WORD COUNT IS WRITTEN INTO THIS HEADER, DELIBERATELY —
   the choice `op-trauma`, `op-systemic`, `op-insid`, `op-cat` and `op-red`
   all made. Eleven headers in this project have carried a number the file
   did not support, one of them with a per-section breakdown that summed
   exactly and was still stale. THE COUNTS ARE REPORTED IN THE COMPLETION
   MANIFEST; the hub measures from disk.

   TO RE-MEASURE, canonical definition — `W(s.body)` over every section,
   which INCLUDES the `Src:` lines:

     node -e "const vm=require('vm'),fs=require('fs');
       const c={};vm.createContext(c);
       vm.runInContext(fs.readFileSync('content/ophtho/theory-drafts/op-ret.draft.js','utf8'),c);
       for(const k of Object.keys(c.THEORY_DRAFT)){
         const ch=c.THEORY_DRAFT[k];let t=0;
         for(const s of ch.sections){
           const w=s.body.split(/\s+/).filter(Boolean).length;
           console.log(k,s.id,w);t+=w}
         console.log(k,'sections',ch.sections.length,'body',t,
                     'intro',ch.intro.split(/\s+/).length,
                     'pages~',(t/240).toFixed(1))}"

   ============================================================================ */

/* ⚠️⚠️ HUB DECISION, 2026-08-17 — THE FOURTH CHAPTER WAS DROPPED AND ITS
   SECTIONS MERGED BACK. The draft arrived as FOUR chapters: the header
   describes three, and a fourth (`op-ret-mgmt`, rd-6..rd-10) had been split
   off the detachment third without the header being updated — the agent died
   at its anchor audit. Before accepting it the hub PRINTED the two halves
   joined, in the scratch harness: **detachment as ONE chapter prints at 10
   PAGES**, against the 15.2 the ÷240 estimator forecast for 3,637 words. The
   estimator over-predicted by five pages, which is the same direction it
   missed on op-va (10.8 -> 9) and op-insid (10.9 -> 9).
   So rd-1..rd-10 are ONE chapter, `op-ret`, and the split is 3-way not 4-way.
   That also vindicates the header's own reasoning: keeping the base key on
   detachment means ONE question refiles instead of five, and the fourth
   chapter would have broken that by moving two of the four away. */

var THEORY_DRAFT = {
  "op-ret-dr": {
    "intro": "Diabetes damages retinal capillaries two ways at once, and the retina answers with new vessels or with a wet macula. The stages are graded elsewhere in this module; what decides treatment is where the leak sits relative to the fovea.",
    "sections": [
      {
        "id": "dr-1",
        "w": "must",
        "h": "The deck’s own map of diabetic retinopathy, and its six risk factors",
        "body": "**One disease, three branches:** the deck opens with a single tree, and every later slide hangs off it.\n\n### The tree\n- **NPDR —** non-proliferative, graded **mild · moderate · severe**.\n- **PDR —** proliferative.\n- **Maculopathy —** split into **leakage** and **ischaemic**.\n- **⚠️ Not a stage:** maculopathy is a THIRD BRANCH — it coexists with either NPDR or PDR, which is why it carries its own treatment.\n\n### Adverse risk factors — the deck’s six, in its order\n- **1 — Long duration of diabetes.** **2 — Poor metabolic control.**\n- **3 — Pregnancy.** **4 — Hypertension.** **5 — Renal disease.**\n- **6 — \"Other\":** the deck’s own sixth item, left open.\n\n*The systemic determinants in full — type, the intensive-control trials, tight blood-pressure control, neuropathy, nephropathy and cardiovascular disease — are `sys-1`. The two pathogenetic arms (microvascular occlusion against microvascular leakage), the three types and the management table are `ins-8`. Neither is repeated here.*\n\nSrc: L19.1 lines 16–41; L23, L35,36 (cited only, not counted)",
        "qs": []
      },
      {
        "id": "dr-2",
        "w": "must",
        "h": "NPDR — where each sign is looked for, and the one instruction the deck gives",
        "body": "**Held to what `L19.1` adds:** the stage table and the sign lists are in `sys-2`; what this deck supplies is **where each sign sits** and how it is seen.\n\n### Mild NPDR — four signs, each with its location or its method\n\n|Sign|What the deck specifies|\n|---|---|\n|**Microaneurysms**|usually **TEMPORAL TO THE FOVEA**|\n|**Intraretinal haemorrhages**|**DOT AND BLOT**|\n|**Hard exudates**|frequently in **CLUMPS OR RINGS**|\n|**Retinal oedema**|seen as **THICKENING on BIOMICROSCOPY** — not as a colour|\n\n- **⚠️ Why the oedema row matters:** retinal thickening is a **stereoscopic** finding. A flat photograph will not show it, so a slit-lamp fundus lens is not optional.\n\n### Severe NPDR — four signs\n- **Cotton-wool spots** · **dark blot haemorrhages**.\n- **Venous irregularities** · **intraretinal microvascular abnormalities (IRMA)**.\n\n### The instruction\n- **Treatment:** **NOT required.**\n- **⚠️ But:** **watch for proliferative disease.** Severe NPDR is a surveillance diagnosis, not a treatment one.\n\n*The deck prints \"Sever NPDR\" for severe, twice, and \"anti VEGEF\" on the treatment slide; read as intended.*\n\nSrc: L19.1 lines 42–65; sys-2 (cited only)",
        "qs": []
      },
      {
        "id": "dr-3",
        "w": "must",
        "h": "Proliferative disease and panretinal photocoagulation — the technique in full",
        "body": "**Where new vessels grow, and how much:** **NVD** is neovascularization **of the disc**, **NVE** neovascularization **elsewhere**; each may be **flat or elevated**, and severity is judged by **comparing the vessels with the AREA OF THE DISC**.\n\n### The three indications for treating PDR\n- **NVD greater than 1/3 disc area.**\n- **Less extensive NVD PLUS haemorrhage.**\n- **NVE —** greater than **1/2 disc area PLUS haemorrhage**.\n- **⚠️ Read the pattern:** haemorrhage lowers the threshold. Vessels that have already bled are treated at half the extent.\n\n### Laser panretinal photocoagulation — the parameters\n\n|Parameter|The deck’s figure|\n|---|---|\n|**Initial treatment**|**2,000–3,000 burns**|\n|**Spot size**|**200–500 µm**, depending on **contact-lens magnification**|\n|**Intensity**|a **GENTLE** burn, **0.10–0.05 sec**|\n|**Extent**|the area covered by a **COMPLETE PRP**|\n|**Follow-up**|**4 to 8 weeks**|\n\n- **⚠️ Why the spot size is not a fixed number:** the contact lens magnifies, so the same dial setting lays down a different burn through a different lens.\n- **The mechanism, in one line:** PRP **destroys ischaemic peripheral retina**, removing the stimulus that drives new vessels.\n\n*The frequency figures — PDR in 5–10 % of diabetics, 60 % of insulin-dependent patients after 30 years — and the stage table are `sys-2`. The PRP/anti-VEGF/observation management grid is `ins-8`.*\n\nSrc: L19.1 lines 66–77, 142–158",
        "qs": []
      },
      {
        "id": "dr-4",
        "w": "must",
        "h": "Assessment after photocoagulation — good involution against poor",
        "body": "**What the follow-up visit is for:** deciding whether the laser worked. The deck gives three findings on each side.\n\n|Good involution|Poor involution|\n|---|---|\n|**REGRESSION of neovascularization**|**PERSISTENT neovascularization**|\n|**Residual \"GHOST\" vessels or FIBROUS TISSUE**|**HAEMORRHAGE**|\n|**DISC PALLOR**|**RE-TREATMENT REQUIRED**|\n\n- **⚠️ The counter-intuitive column:** **disc pallor and ghost vessels are signs of SUCCESS**, not of damage — they are what a treated, closed new-vessel complex leaves behind.\n- **⚠️ Fibrous tissue cuts both ways:** as a residue after involution it is a good sign; as a **contracting** membrane it is what pulls a retina off, which is the tractional detachment of `L20`.\n\nSrc: L19.1 lines 159–168",
        "qs": []
      },
      {
        "id": "dr-5",
        "w": "must",
        "h": "Vitreoretinal surgery — the four indications",
        "body": "**When laser has been outrun:** the deck gives four pictures, and each is a reason the laser can no longer reach or no longer help.\n- **1 — Severe PERSISTENT vitreous haemorrhage:** blood blocks the laser and blocks the view.\n- **2 — Dense PERSISTENT PREMACULAR haemorrhage:** the macula is shadowed by blood in front of it.\n- **3 — PROGRESSIVE PROLIFERATION despite laser therapy:** the drive has not been removed.\n- **4 — RETINAL DETACHMENT INVOLVING THE MACULA:** traction has won.\n\n- **⚠️ The common thread:** two are about **blood that will not clear**, two about **fibrovascular tissue that keeps contracting**.\n- **The operation:** **pars plana vitrectomy**, removing the gel, the blood and the membranes together *(the technique is `L20`’s; the indications are this deck’s)*.\n\n*Advanced — and specifically PROLIFERATIVE — diabetic retinopathy is named \"the most common cause\" of tractional retinal detachment on `L20` sl.7 and sl.10, where the surgery is written in full.*\n\nSrc: L19.1 lines 169–181; L20 sl.7, sl.10, sl.15 (cited only)",
        "qs": []
      },
      {
        "id": "dr-6",
        "w": "must",
        "h": "Diabetic maculopathy — the classification, and why it decides the treatment",
        "body": "**Definition by mechanism:** maculopathy is either **fluid arriving** or **blood not arriving**. The deck splits it exactly there.\n\n### The two branches\n- **LEAKAGE —** three forms: **focal · diffuse · cystoid**.\n- **ISCHAEMIC —** capillary non-perfusion at the macula.\n\n- **⚠️ Why the split is the whole point:** **leakage can be dried, ischaemia cannot be reperfused.** One branch has three treatments; the other has none.\n- **⚠️ Why it matters:** maculopathy is the commonest cause of visual loss in diabetes *(not in course material)* — the retinopathy that blinds slowly does it at the fovea, not at the periphery.\n\n*Cystoid macular oedema after cataract surgery — Irvine–Gass, Henle’s layer, the petaloid OCT pattern and its treatment — is `cts-6`. The same appearance, a different disease.*\n\nSrc: L19.1 lines 78–89",
        "qs": []
      },
      {
        "id": "dr-7",
        "w": "must",
        "h": "Clinically significant macular oedema — the three criteria, and their distances",
        "body": "**Why a definition with numbers in it exists:** CSMO is the threshold at which a macula is treated. It is defined by **distance from the centre of the fovea**, not by how bad the vision is.\n\n### Any ONE of these three is CSMO\n\n|№|The criterion|\n|---|---|\n|**1**|**RETINAL OEDEMA within 500 µm** of the centre of the fovea|\n|**2**|**HARD EXUDATES within 500 µm** of the centre of the fovea, **with adjacent oedema** — and that oedema **may extend beyond the 500 µm limit**|\n|**3**|**RETINAL OEDEMA one disc area or larger**, any part of which lies **within one disc diameter (1,500 µm)** of the centre of the fovea|\n\n- **⚠️ Criterion 2 —** it is about the **EXUDATE, not the oedema**: the exudate must be inside 500 µm; the oedema attached to it may sit outside.\n- **⚠️ Criterion 3 trades proximity for SIZE:** a large area of oedema qualifies from three times further out.\n- **The equivalence to hold:** **one disc diameter = 1,500 µm**, so 500 µm is **one third of a disc diameter**.\n\n*⚠️ The deck loses the micron symbol throughout — it prints \"500 m\" and \"1500 m\". Read as micrometres; its own \"one disc diameter (1500 m)\" confirms the scale.*\n\nSrc: L19.1 lines 90–105",
        "qs": []
      },
      {
        "id": "dr-8",
        "w": "must",
        "h": "The three maculopathies compared — appearance, angiogram, prognosis",
        "body": "**One table:** the deck’s answer to \"which maculopathy is this, and what do I do\".\n\n|Axis|FOCAL|DIFFUSE|ISCHAEMIC|\n|---|---|---|---|\n|**Thickening**|**CIRCUMSCRIBED**|**DIFFUSE**|macula appears **RELATIVELY NORMAL**|\n|**Exudates**|**complete or incomplete CIRCINATE rings**|—|—|\n|**Cystoid oedema**|—|**FREQUENT**|—|\n|**Visual acuity**|—|**VARIABLE impairment**|**POOR**|\n|**On FA**|**FOCAL leakage**|**GENERALIZED leakage**|**CAPILLARY NON-PERFUSION**|\n|**Treatment**|**FOCAL photocoagulation**|**intravitreal INJECTION**|**NOT APPROPRIATE**|\n|**Prognosis**|**GOOD**|**GUARDED**|— (poor acuity is the presenting state)|\n\n### The two traps in that table\n- **⚠️ Ischaemic maculopathy looks NORMAL:** a macula that appears unremarkable beside a visual acuity that is not **is the diagnosis**, and the angiogram is what proves it.\n- **⚠️ It is the one form with NO treatment.** Recognising it prevents a pointless laser.\n- **⚠️ Circinate means a RING:** a complete or broken ring of hard exudate encircling the leaking microaneurysms at its centre — which is why the focal laser is aimed at the middle of the ring, not at the ring.\n\nSrc: L19.1 lines 106–129",
        "qs": []
      },
      {
        "id": "dr-9",
        "w": "must",
        "h": "Treating clinically significant macular oedema — grid against focal",
        "body": "**Two lasers, two targets:** the grid treats an area, the focal treats a lesion. The deck gives each its own distances.\n\n|Axis|GRID treatment|FOCAL treatment|\n|---|---|---|\n|**For**|**DIFFUSE retinal thickening**|**MICROANEURYSMS in the centre of hard-exudate RINGS**|\n|**Where**|**more than 500 µm from the centre of the fovea**, and **500 µm from the TEMPORAL MARGIN OF THE DISC**|**500–3,000 µm from the centre of the fovea**|\n|**Also**|**intravitreal injection of anti-VEGF**|—|\n|**Endpoint**|—|**GENTLE WHITENING OR DARKENING** of the microaneurysm (**100–200 µm, 0.10 sec**)|\n\n### Why each boundary exists\n- **The 500 µm foveal exclusion —** laser inside it destroys the fovea it is meant to save.\n- **⚠️ The 500 µm DISC exclusion is different:** burns close to the temporal disc margin damage the **nerve fibres** streaming into it, taking field rather than acuity.\n- **The 3,000 µm outer limit —** beyond it a leaking microaneurysm no longer threatens the fovea, so treatment buys nothing.\n- **The endpoint is deliberately weak:** *whitening or darkening*, not a crater. The aim is to close the microaneurysm, not to burn the retina under it.\n\n*The laser burn sizes and distances on this slide and the PRP slide are printed on NO other deck in the module — `sys-2` and `ins-8` name the laser types and give no numbers.*\n\nSrc: L19.1 lines 130–141",
        "qs": []
      },
      {
        "id": "dr-10",
        "w": "must",
        "h": "Imaging the retina — what each modality can and cannot see",
        "body": "**One governing principle:** **ultrasound is the tool for when you CANNOT SEE IN.** Sound crosses opaque media that defeat every optical instrument — and it resolves millimetres, not microns.\n\n### The three modalities, and their proper questions\n\n|Modality|What it answers|\n|---|---|\n|**Fluorescein angiography (FA)**|is the leak **FOCAL or GENERALIZED**, and is the capillary bed **PERFUSED**? The deck uses it for exactly that on all three maculopathies|\n|**OCT**|**cross-sectional macular thickness** at micron scale — oedema, subretinal fluid, the **PETALOID** pattern of cystoid oedema|\n|**B-scan ultrasound**|**gross structure BEHIND an opacity** — is there a detachment or a mass behind this vitreous haemorrhage or this cataract?|\n\n### The exception that defines the rule\n- **⚠️ The exception:** ultrasound **cannot diagnose age-related macular degeneration**. AMD is a disease of layers **tens of microns** thick in an eye whose media are **clear** — nothing to see through, and nothing ultrasound could resolve if there were.\n- **AMD is diagnosed by:** **fundus examination** (drusen, RPE change, haemorrhage) · **Amsler grid** · **OCT** · **fluorescein angiography**.\n- **⚠️ Where it IS right:** in the same eye, with a **dense cataract** blocking the view — B-scan then excludes a gross posterior abnormality, and **A-scan biometry** measures axial length for the implant.\n- **The classic indication:** diabetic vitreous haemorrhage — no view, and the urgent question is whether a **tractional detachment** sits behind the blood.\n\n*AMD in full — dry against wet, drusen in Bruch’s membrane, the Alexandria prevalence figures, the risk grid and both treatments — is `ins-7`, the module’s only source for it. Not repeated. The Amsler grid’s central 10° is `va-11`; OCT and the mandatory B-scan for an invisible fundus are `cts-3` and `cts-6`, from `L18`.*\n\nSrc: L19.1 lines 111, 119, 128, 174–175; L18 lines 264, 396, 496 and L35,36 (cited only)",
        "qs": [
          "opqb-t2-83"
        ]
      },
      {
        "id": "dr-11",
        "w": "know",
        "h": "Central serous chorioretinopathy — the one macular disease the module only names",
        "body": "**What the material gives:** exactly one clause. `L23`’s pregnancy slide records an **increased incidence of central serous chorioretinopathy and uveal effusions in pregnant versus non-pregnant women** — and that is the whole of it, module-wide.\n\n### The rest is supplied, and each claim is tagged\n- **What it is:** a **serous detachment of the neurosensory retina at the macula**, from focal leakage through the retinal pigment epithelium *(not in course material)*.\n- **Who:** typically a **young or middle-aged man**, often with a **type-A temperament**, **corticosteroid exposure** or high endogenous cortisol — and, per `L23`, in **pregnancy** *(the demographic profile is not in course material; the pregnancy link is `L23`’s)*.\n- **Symptoms:** **blurred central vision, METAMORPHOPSIA, MICROPSIA** and a relative central scotoma, usually **unilateral** *(not in course material)*.\n- **Signs:** a **round, shallow, transparent dome of subretinal fluid** at the macula with **loss of the foveal reflex** *(not in course material)*.\n- **On investigation:** **OCT shows subretinal fluid**; FA shows a focal leak that classically expands as a **\"smokestack\"** *(not in course material)*.\n- **Course:** **most resolve spontaneously in 3–6 months** with good acuity; chronic or recurrent disease needs referral *(not in course material)*.\n\n- **⚠️ Why it belongs here:** in a diabetic-maculopathy chapter, it is the young patient’s **exudative macula**, and it is the differential a fovea full of fluid raises when there is no diabetes and no vein occlusion.\n\n*`sys-6` carries the pregnancy association as a pathological ocular change of pregnancy. `L20` sl.16’s exudative-detachment mechanism — fluid from the choroid entering the subretinal space with no tear and no traction — is the same mechanism at the macula.*\n\nSrc: L23 lines 212–214 (cited only); everything beyond the name is supplied and tagged above",
        "qs": []
      }
    ]
  },
  "op-ret-vasc": {
    "intro": "A retinal vessel can be blocked, leaked from, or driven to grow new branches. The deck takes the veins first, the arteries second, and then three retinopathies that are vascular without being occlusive.",
    "sections": [
      {
        "id": "vsc-1",
        "w": "must",
        "h": "Retinal vein occlusion — who gets one, and what stagnant blood does",
        "body": "**Six predisposing factors, in two groups.** The ocular pair matters clinically: they are the two the ophthalmologist can find and treat.\n\n|Systemic|Ocular|\n|---|---|\n|**Increasing AGE**|**RAISED INTRAOCULAR PRESSURE**|\n|**HYPERTENSION**|**PERIPHLEBITIS**|\n|**DIABETES**|—|\n|**Abnormalities of COAGULATION**|—|\n\n- **⚠️ Raised IOP as a cause of vein occlusion:** pressure outside the vessel compresses the vein where it leaves the eye — which is why every vein occlusion gets its pressure measured.\n- **⚠️ Why a BRANCH occludes at a crossing:** artery and vein **share a common sheath** where they cross, so a sclerosed arteriole compresses the vein beside it *(the shared sheath is `sys-3`’s, from `L23`)*.\n\n### The chain, and every sign is on it\n- **Occlusion → STAGNATION.** Then stagnation does two things at once.\n- **Raised extravascular pressure → OEDEMA.** **Hypoxia → HAEMORRHAGE** and, later, new vessels.\n\nSrc: L19.2 lines 16–46; L23 (cited only)",
        "flow": {
          "title": "Why a blocked vein both bleeds and swells",
          "steps": [
            {
              "k": "step",
              "t": "VENOUS OCCLUSION",
              "n": "at a crossing (branch) or at the disc (central)"
            },
            {
              "k": "step",
              "t": "STAGNATION of the blood column"
            },
            {
              "k": "step",
              "t": "Increased EXTRAVASCULAR pressure",
              "n": "plasma is forced out of the vessel"
            },
            {
              "k": "step",
              "t": "HYPOXIA of the drained retina",
              "n": "and, months later, the drive to new vessels"
            },
            {
              "k": "alert",
              "t": "OEDEMA AND HAEMORRHAGE",
              "n": "the fundus picture of every vein occlusion"
            }
          ]
        },
        "qs": []
      },
      {
        "id": "vsc-2",
        "w": "must",
        "h": "Branch retinal vein occlusion — acute signs, the angiogram, and the old occlusion",
        "body": "**Acute BRVO — three sign groups**, all confined to the drainage territory of the blocked branch.\n- **The vein:** **TORTUOSITY and DILATATION.**\n- **The blood:** **FLAME-SHAPED** and **\"DOT-BLOT\" haemorrhages**.\n- **The ischaemia and the fluid:** **COTTON-WOOL SPOTS** and **RETINAL OEDEMA**.\n\n- **⚠️ Why two haemorrhage shapes:** flame-shaped blood lies in the **nerve fibre layer** and follows its arcades; dot-blot blood lies deeper, in the compact middle retina *(the layer attribution is not in course material)*.\n\n### Prognosis and complications, as the deck states them\n- **Prognosis:** **VA 6/12 or better after 6 months in 50 %.**\n- **Complications:** **CHRONIC MACULAR OEDEMA** and **NEOVASCULARIZATION** — the two things `vsc-3` is about.\n\n### The angiogram, and the old occlusion\n\n|Stage|What is seen|\n|---|---|\n|**FA early**|**BLOCKED background fluorescence**, because haemorrhage masks it|\n|**FA late**|**HYPERFLUORESCENCE from DIFFUSE OEDEMA**|\n|**Old BRVO**|**VASCULAR SHEATHING and COLLATERALS** · **HARD EXUDATES**|\n\n- **⚠️ Collaterals are the healed sign:** vessels that have grown around the block. They are not new vessels and are not treated.\n\nSrc: L19.2 lines 47–75",
        "qs": []
      },
      {
        "id": "vsc-3",
        "w": "must",
        "h": "BRVO’s two complications — the oedema that waits and the vessels that follow",
        "body": "**Both are managed by a clock**, and the deck gives the interval for each.\n\n### Chronic macular oedema\n- **Its rank:** the **MOST COMMON cause of persistent poor visual acuity** after a branch occlusion.\n- **The first move:** **WAIT 6–12 WEEKS and perform FA.** Not sooner — haemorrhage blocks the angiogram and early oedema may settle.\n- **⚠️ The angiogram decides —** a two-way switch:\n\n|FA result|What follows|\n|---|---|\n|**MACULAR NON-PERFUSION**|**NO TREATMENT** — the capillary bed is gone|\n|**GOOD macular perfusion** and **VA 6/18 or worse after 3 months**|**CONSIDER LASER PHOTOCOAGULATION**|\n\n### Neovascularization\n- **How often:** in about **30–50 % of eyes**.\n- **When:** **most frequently after 6–12 months** — so a branch occlusion is followed for a year, not a month.\n- **Treatment:** **laser photocoagulation TO THE INVOLVED SEGMENT** — sectoral, because only one territory is ischaemic.\n\n- **⚠️ The principle behind both:** **perfused retina is treatable, non-perfused retina is not** — but non-perfused retina is what later grows the new vessels. The angiogram that forbids macular laser is the one that predicts sectoral laser.\n\nSrc: L19.2 lines 76–93",
        "qs": []
      },
      {
        "id": "vsc-4",
        "w": "must",
        "h": "Central retinal vein occlusion — non-ischaemic against ischaemic",
        "body": "**One occlusion, two diseases.** Every axis below separates them, and the first two are bedside findings that need no angiogram.\n\n|Axis|NON-ISCHAEMIC|ISCHAEMIC|\n|---|---|---|\n|**Visual acuity**|**BETTER than counting fingers**|**WORSE than 6/60**|\n|**Afferent defect (APD)**|**MILD**|**MARKED**|\n|**Venous change**|**MILD** tortuosity and dilatation|**MARKED** tortuosity and **ENGORGEMENT**|\n|**Haemorrhages**|**MILD to MODERATE**|**EXTENSIVE**|\n|**Cotton-wool spots**|**VARIABLE**|**VARIABLE**|\n|**Disc oedema**|**MILD to MODERATE**|**SEVERE**|\n|**Macula**|**CHRONIC MACULAR OEDEMA**|**MACULAR ISCHAEMIA**|\n|**Rubeosis**|—|**in 50 %**|\n|**Prognosis**|**GUARDED**|**VERY POOR**|\n|**On FA**|**GOOD retinal capillary perfusion**|**EXTENSIVE capillary NON-PERFUSION**|\n\n### Two things the table cannot show\n- **⚠️ Conversion:** the non-ischaemic form **MAY SUBSEQUENTLY CONVERT to ischaemic** — which is why it is followed rather than discharged.\n- **⚠️ The macular row:** the prognosis in miniature — oedema can be dried, ischaemia cannot. Same vessel, same block, two different endings.\n\nSrc: L19.2 lines 94–134",
        "qs": []
      },
      {
        "id": "vsc-5",
        "w": "must",
        "h": "Managing ischaemic CRVO — rubeosis iridis, and the ischaemia behind neovascular glaucoma",
        "body": "**The management:** a surveillance schedule with one thing to find.\n- **Check EVERY MONTH for 6 MONTHS.**\n- **Look for RUBEOSIS and ANGLE NEW VESSELS.**\n- **Treatment —** neovascularization by **PANRETINAL PHOTOCOAGULATION**.\n\n### Rubeosis iridis — the retinal disease behind an iris sign\n- **What it is:** **new vessels on the iris surface**, driven by **retinal ischaemia**.\n- **How often after an ischaemic CRVO:** **50 %** — one eye in two.\n- **The two retinal causes to hold:** **ischaemic CRVO** and **PROLIFERATIVE DIABETIC RETINOPATHY** — both are large areas of non-perfused retina.\n- **⚠️ The chain:** ischaemic retina releases **vasoproliferative factor** → new vessels grow on the **iris** and into the **angle** → a fibrovascular membrane over the trabecular meshwork **contracts** → the angle closes → **NEOVASCULAR GLAUCOMA** *(the diffusible-factor step is not in course material; the membrane step is `L12`’s)*.\n- **⚠️ Why PRP treats an iris problem:** it removes the ischaemic retina that is issuing the signal. The laser is aimed nowhere near the iris.\n\n*Neovascular glaucoma as a secondary narrow-angle glaucoma — anterior pulling, alongside ICE syndrome, tumours and the venous congestion that pushes the iris–lens diaphragm forward — is `glc-15`. Rubeosis as an iris sign at the slit lamp is `va-12`. `L12` prints the membrane mechanism and never the word rubeosis; the word and the 50 % are this deck’s.*\n\n*The deck prints \"Rubeosis irides\" for iridis.*\n\nSrc: L19.2 lines 117–147; L12 line 292 (cited only)",
        "qs": []
      },
      {
        "id": "vsc-6",
        "w": "know",
        "h": "Papillophlebitis — the young patient’s vein occlusion",
        "body": "**Who:** **HEALTHY patients UNDER 50.** That alone separates it from CRVO, which is a disease of the old and the arteriopathic.\n\n|Feature|In papillophlebitis|\n|---|---|\n|**Visual acuity**|**SLIGHT decrease** only|\n|**Afferent defect**|**ABSENT**|\n|**Veins**|**tortuosity and dilatation**|\n|**Cotton-wool spots and haemorrhages**|**VARIABLE**|\n|**Disc**|**SEVERE oedema**|\n|**Prognosis**|**VERY GOOD in 80 %**|\n\n- **⚠️ The pair that clinches it:** a **severely swollen disc** with an **absent** afferent defect and near-normal acuity. In an ischaemic CRVO the disc oedema comes with a marked APD and vision worse than 6/60.\n- **⚠️ Read the name:** *papillo-* the disc, *-phlebitis* the vein. The inflammation is at the disc, so the disc swells out of proportion to everything else.\n\nSrc: L19.2 lines 148–161",
        "qs": []
      },
      {
        "id": "vsc-7",
        "w": "must",
        "h": "Retinal artery occlusion — the two mechanisms, and the three emboli",
        "body": "**Two mechanisms only:** **EMBOLISM**, and **VASO-OBLITERATION** of the vessel itself.\n- **Where emboli come from:** **CARDIAC** or **CAROTID**.\n\n### The three emboli, each with its own appearance and its own risk\n\n|Embolus|Appearance|Behaviour|\n|---|---|---|\n|**CHOLESTEROL — Hollenhorst plaques**|**MULTIPLE, BRIGHT, REFRACTILE crystals**, often at **arteriolar BIFURCATIONS**|**frequently ASYMPTOMATIC**|\n|**FIBRINOPLATELET**|**MULTIPLE, DULL GREY particles**, occasionally **filling the entire lumen**|may cause **AMAUROSIS FUGAX**, occasionally **permanent** obstruction|\n|**CALCIFIC**|**usually SINGLE, WHITE, and CLOSE TO THE DISC**|may cause **PERMANENT** obstruction|\n\n### The three discriminators worth carrying\n- **Number:** cholesterol and fibrinoplatelet emboli are **multiple**; the calcific one is **single**.\n- **Brightness:** cholesterol **glitters**, fibrinoplatelet is **dull grey**, calcific is **chalk white**.\n- **⚠️ Danger is inverse to visibility:** the bright, obvious cholesterol plaque is usually harmless; the dull grey and the single white ones occlude.\n- **⚠️ Amaurosis fugax:** transient monocular visual loss, the retinal equivalent of a TIA — a warning that arrives before the permanent occlusion.\n\nSrc: L19.2 lines 162–200",
        "qs": []
      },
      {
        "id": "vsc-8",
        "w": "must",
        "h": "Vaso-obliteration — and recurrent occlusion in a young patient",
        "body": "**Two named causes**, and each occludes a different calibre.\n- **ATHEROSCLEROSIS:** the **MOST COMMON cause of CENTRAL artery occlusion**.\n- **PERIARTERITIS:** **SLE may cause BRANCH artery occlusion.**\n\n- **⚠️ Read the pairing:** big-vessel disease closes the **main trunk**, inflammatory small-vessel disease closes a **branch**. It is the first thing a branch occlusion in a young patient should suggest.\n\n### Recurrent occlusions in young individuals — the deck’s thrombophilia list\n- **PROTEIN S deficiency** · **PROTEIN C deficiency**.\n- **ANTITHROMBIN III deficiency.**\n- **\"STICKY PLATELET SYNDROMES\"** and **ANTIPHOSPHOLIPID ANTIBODY SYNDROME**.\n\n- **⚠️ When to send this panel:** the deck’s own trigger is **RECURRENT** occlusion in a **YOUNG** individual — not a single event in an arteriopath, where the carotids and the heart are the investigation.\n\nSrc: L19.2 lines 201–213",
        "qs": []
      },
      {
        "id": "vsc-9",
        "w": "must",
        "h": "Branch, cilioretinal and central artery occlusion compared",
        "body": "**Three occlusions, one table.** Acuity and the afferent defect track how much retina has been lost.\n\n|Axis|BRAO|CILIORETINAL|CRAO|\n|---|---|---|---|\n|**Visual acuity**|**VARIABLE**|by setting (below)|**WORSE than 6/60**|\n|**Afferent defect**|**MILD or ABSENT**|—|**MARKED**|\n|**Retina**|**WHITENING** of the affected sector|the strip it supplies|**WHITENING**, generalized|\n|**Macula**|—|—|**\"CHERRY-RED SPOT\"**|\n|**Vessels**|**ARTERIOLAR NARROWING**|—|**ARTERIOLAR AND VENULAR narrowing** · **SLUDGING and SEGMENTATION of the blood column (CATTLE-TRUCKING)**|\n|**Prognosis**|by territory|by setting|**VERY POOR**|\n|**On FA**|**early MASKING** · **extreme DELAY of the arterial phase** · **late STAINING of arterial walls**|—|**early filling of the CILIORETINAL artery** · **NON-FILLING of the others** · **late staining of vessel walls**|\n\n### The cherry-red spot, explained\n- **⚠️ Why the macula stays red:** while the retina goes white — the swollen, infarcted inner retina is **opaque and pale** — but the **fovea has no inner retinal layers**, so at that one point the **choroidal red** still shows through. The spot is normal choroid seen through a hole in the pallor *(the mechanism is not in course material; the sign is the deck’s)*.\n\n### The cilioretinal artery — 30 % of people, three very different stories\n- **What it is:** an artery **derived from the POSTERIOR CILIARY circulation**, **present in about 30 %** of individuals.\n\n|Setting|Who|Prognosis|\n|---|---|---|\n|**ISOLATED**|**young**, with a **systemic VASCULITIS**|**usually GOOD**|\n|**Combined with CRVO**|—|**GUARDED**|\n|**Combined with ANTERIOR ISCHAEMIC OPTIC NEUROPATHY**|**ELDERLY**, with **GIANT CELL ARTERITIS**|**VERY POOR**|\n\n- **⚠️ The third row:** a medical emergency, not an ophthalmic one — untreated giant cell arteritis takes the fellow eye. **AION and giant cell arteritis as diseases are `op-neuro`’s and `op-acute`’s**; what belongs here is the company the occlusion keeps.\n- **⚠️ The same vessel protects, too:** in a CRAO, where a cilioretinal artery is present and spared, a strip of macula survives and central acuity can be preserved — which is why the angiogram’s first finding is early filling of that artery alone.\n\nSrc: L19.2 lines 214–273",
        "qs": []
      },
      {
        "id": "vsc-10",
        "w": "high",
        "h": "Carotid disease — imaging the neck, and treating what is found",
        "body": "**Why a retinal chapter images the neck:** an embolic occlusion is a **stroke warning**. The eye has already had its infarct.\n\n### Four imaging techniques\n\n|Technique|What it is, and what it adds|\n|---|---|\n|**DUPLEX SCANNING**|**high-resolution real-time B-scan ultrasonography with DOPPLER FLOW ANALYSIS** — structure and flow together. The first-line study|\n|**Digital intravenous SUBTRACTION ANGIOGRAPHY**|contrast **into the SUPERIOR VENA CAVA**; images built by **computer-assisted subtraction**|\n|**MAGNETIC RESONANCE ANGIOGRAPHY**|**also images ISCHAEMIC CEREBRAL LESIONS** — the brain and the vessel in one study|\n|**INTRA-ARTERIAL ANGIOGRAPHY**|**EXCELLENT visualization** · **POTENTIAL MORBIDITY** · **SELDOM PERFORMED**|\n\n- **⚠️ The ladder is ordered by invasiveness:** ultrasound risks nothing, an intra-arterial catheter can cause the stroke it is looking for.\n\n### Treatment — medical first\n- **Antiplatelet therapy:** **ASPIRIN 75 mg daily** · **aspirin + DIPYRIDAMOLE (Persantin)** · **CLOPIDOGREL (Plavix) 75 mg daily** *(the deck prints it \"Clopidorel\")*.\n- **Anticoagulants:** **if antiplatelet therapy is ineffective.**\n\n### Treatment — surgical\n- **CAROTID ENDARTERECTOMY**, in two groups.\n- **Patients with OTHER RISK FACTORS FOR STROKE.**\n- **The threshold —** a **SYMPTOMATIC** carotid stenosis **GREATER THAN 70 %**.\n- **⚠️ Both words count:** in \"symptomatic stenosis\" — the 70 % threshold applies to a stenosis that has already declared itself — and amaurosis fugax or a retinal embolus **is** the symptom.\n\nSrc: L19.2 lines 274–310",
        "qs": []
      },
      {
        "id": "vsc-11",
        "w": "know",
        "h": "Hypertensive retinopathy — where it is written, and the two associations this chapter owns",
        "body": "**The sign plate only:** this deck carries it, and the account is elsewhere. `L19.2` groups the signs exactly as `L23` does — **arteriolar constriction** (focal, generalized, arteriolosclerosis with its A-V changes) against the **extravascular signs** (flame-shaped haemorrhages, cotton-wool spots with a macular star, disc oedema).\n\n- **⚠️ The division to hold:** constriction and sclerosis are **inside the vessel wall**; the extravascular group is **what has leaked out of it**.\n\n### The four ocular associations, and who writes each\n- **RETINAL VEIN OCCLUSION —** this chapter, `vsc-1` to `vsc-5`.\n- **RETINAL ARTERY MACROANEURYSM —** this chapter, `vsc-15`.\n- **ANTERIOR ISCHAEMIC OPTIC NEUROPATHY** and **OCULAR MOTOR NERVE PALSIES —** `op-neuro`’s.\n\n*Arteriolar sclerosis, the light streak, copper and silver wiring, the shared sheath at the A/V crossing, the fibrinoid necrosis of a severe acute rise, the macular star in Henle’s layer, the modified Scheie grades and the controlled-lowering rule are `sys-3`, `sys-4` and `sys-5`, from `L23`. Not repeated; these fifteen lines were cited only and not counted.*\n\n*⚠️ Defect note: `L19.2` line 325 is the bare title \"Grading of arteriolosclerosis\" over an image — one of two image-only slides in a deck the module’s plan classes as text-sufficient.*\n\nSrc: L19.2 lines 311–336 (cited only, not counted); sys-3, sys-4, sys-5",
        "qs": []
      },
      {
        "id": "vsc-12",
        "w": "must",
        "h": "Sickle-cell retinopathy — five stages, and the treatment the decks never print",
        "body": "**The staging is the examinable part**, and it is a sequence: occlusion, then a shunt, then new vessels, then blood, then traction.\n\n|Stage|What is present|\n|---|---|\n|**1**|**PERIPHERAL ARTERIOLAR OCCLUSION**|\n|**2**|**PERIPHERAL ARTERIOVENOUS ANASTOMOSES**|\n|**3**|**NEOVASCULARIZATION — \"SEA-FAN\"**|\n|**4**|**VITREOUS HAEMORRHAGE**|\n|**5**|**FIBROVASCULAR PROLIFERATION and TRACTION**|\n\n- **⚠️ Stage 5 —** a **tractional retinal detachment**, the same mechanism as advanced diabetic disease, reached by a different route. `L20` names sickle-cell disease as a cause of TRD.\n- **⚠️ The stages are PERIPHERAL throughout:** central acuity can be normal in stage 3, which is why screening looks at the periphery.\n\n### Management — supplied, because no deck prints any\n- **Stages 1 and 2:** **observation** *(not in course material)*.\n- **Stage 3, sea-fans:** **scatter laser photocoagulation to the feeding arteriole and the peripheral ischaemic retina** *(not in course material)*.\n- **Stages 4 and 5:** non-clearing vitreous haemorrhage, or traction — **vitrectomy**, with an anterior-segment-ischaemia risk that makes surgery cautious in these eyes *(not in course material)*.\n- **Systemic:** **avoid dehydration, hypoxia and acidosis**; treat the haemoglobinopathy *(not in course material)*.\n\n*The genotype paradox — complications commoner in SC and S-Thal than in SS — the sickling cascade, and both lesion sets (proliferative: sea-fan, fibrovascular proliferation, proliferation with bleeding; non-proliferative: salmon patches, black sunbursts, retinal holes) are `sys-8`, from `L23`. The five stages above are this deck’s.*\n\nSrc: L19.2 lines 337–361; L23 lines 247–267 and L20 sl.7 (cited only). The management is supplied and tagged",
        "qs": []
      },
      {
        "id": "vsc-13",
        "w": "must",
        "h": "Retinopathy of prematurity — grading by place, extent and stage",
        "body": "**Three questions grade an active ROP:** *where* is it, *how much* of the circumference, and *how far* has it gone.\n\n### Location — three ZONES centred on the OPTIC DISC\n- **Zone I —** the innermost, centred on the disc and enclosing the fovea.\n- **Zone II —** the middle annulus. **Zone III —** the outermost temporal crescent.\n- **⚠️ The centre is the DISC, not the fovea** — the retina vascularises outward from the disc, so the map follows the blood supply.\n\n### Extent — the NUMBER OF CLOCK HOURS involved\n- **Twelve clock hours to the circumference**, counted around the ridge.\n\n### Stage — ⚠️ supplied, because the deck’s staging slide is an image\n- **Stage 1 —** a flat **DEMARCATION LINE** between vascularised and avascular retina *(not in course material)*.\n- **Stage 2 —** the line becomes a **RIDGE** with height and width *(not in course material)*.\n- **Stage 3 —** ridge with **EXTRARETINAL FIBROVASCULAR PROLIFERATION** *(not in course material)*.\n- **Stage 4 —** **PARTIAL retinal detachment** — **4A** sparing the fovea, **4B** including it *(not in course material)*.\n- **Stage 5 —** **TOTAL retinal detachment** *(not in course material)*.\n- **\"PLUS\" disease —** **venous dilatation and arteriolar tortuosity at the POSTERIOR POLE**, a sign of activity that can accompany any stage *(not in course material; the deck names \"plus\" disease and never defines it)*.\n\n### Treatment\n- **Modality:** **CRYOTHERAPY** or **LASER PHOTOCOAGULATION**.\n- **Indication — THRESHOLD DISEASE:** **5 CONTIGUOUS or 8 NON-CONTIGUOUS CLOCK HOURS in zone I or zone II, associated with \"PLUS\" DISEASE.**\n- **Results:** **75 % SUCCESS** · **25 % PROGRESS TO DETACHMENT DESPITE TREATMENT.**\n- **⚠️ Read the 25 %:** a quarter of correctly and promptly treated eyes still detach. Treatment lowers the odds; it does not settle them.\n\n### Cicatricial ROP — what is left when it is over\n- **Three forms:** **TEMPORAL VITREORETINAL FIBROSIS with DRAGGING OF THE DISC** · **FALCIFORM RETINAL FOLD** · **TOTAL RETINAL DETACHMENT.**\n\n*ROP as a cause of leukocoria — the deck definition \"proliferative retinopathy in preterm, low-birth-weight infants\" with preretinal fibrosis and tractional detachment, and the two modalities `L19.2` does NOT print, intravitreal anti-VEGF and pars plana vitrectomy — is `wht-8`, from `L33,34`.*\n\n*⚠️ Defect note: `L19.2` line 377 is the bare title \"Staging of active retinopathy of prematurity\" over an image; the zones, clock hours, threshold definition and outcome figures around it are printed in full.*\n\nSrc: L19.2 lines 362–401; L33,34 (cited only). The five stages and the definition of \"plus\" disease are supplied and tagged",
        "qs": []
      },
      {
        "id": "vsc-14",
        "w": "know",
        "h": "Retinal artery macroaneurysm — an arteriole that bulges, bleeds and often heals itself",
        "body": "**Who and where:** **typically ELDERLY HYPERTENSIVE FEMALES**; a **LOCALIZED DILATATION of a retinal ARTERIOLE**, **most frequently along the TEMPORAL ARCADES**.\n- **What surrounds it:** **RETINAL HAEMORRHAGE.**\n- **⚠️ An unusual prognosis:** for a vascular lesion — **SPONTANEOUS INVOLUTION IS COMMON**, so watching is a real option.\n\n### On fluorescein angiography\n- **IMMEDIATE UNIFORM FILLING** of the macroaneurysm — it is an arterial lesion, so it fills with the arterial phase.\n- **LATE LEAKAGE.**\n\n### The two ways it damages vision\n\n|Event|What is seen|\n|---|---|\n|**RUPTURE**|**PRE-RETINAL and RETINAL haemorrhage** · **SUBRETINAL haemorrhage** · then **SPONTANEOUS ABSORPTION of the subretinal blood**|\n|**CHRONIC LEAKAGE**|**RETINAL OEDEMA and HARD EXUDATES** — treated by **PHOTOCOAGULATION**|\n\n- **⚠️ Two problems, two decisions:** a **rupture** is usually watched, because the blood absorbs; **chronic leakage** at the macula is lasered, because oedema and exudate will not clear on their own.\n\nSrc: L19.2 lines 402–432",
        "qs": []
      },
      {
        "id": "vsc-15",
        "w": "know",
        "h": "Retinopathy in blood dyscrasias — thick blood and thin blood",
        "body": "**Two groups, and the veins report both.**\n\n|Group|Signs|\n|---|---|\n|**HYPERVISCOSITY**|**VENOUS DILATATION, SEGMENTATION and TORTUOSITY** · **HAEMORRHAGES**|\n|**ANAEMIAS and LEUKAEMIAS**|**HAEMORRHAGES, COTTON-WOOL SPOTS and VENOUS TORTUOSITY** · **occasionally ROTH SPOTS**|\n\n- **⚠️ Segmentation is the hyperviscosity sign:** a blood column that visibly breaks into segments as it slows — the same appearance as the **cattle-trucking** of a central artery occlusion, arrived at by sludging rather than by a block.\n- **Roth spot:** a **white-centred retinal haemorrhage** *(the definition is not in course material; the deck prints only the name)*.\n- **⚠️ Why this matters at the bedside:** an unexplained retinopathy with widespread haemorrhages and tortuous veins in a systemically unwell patient is a **blood count**, not a laser.\n\n*Leukaemic infiltrates and lymphoma as intraocular TUMOURS are `op-onc`’s; `sys-10` carries the systemic malignancy link.*\n\nSrc: L19.2 lines 433–441",
        "qs": []
      }
    ]
  },
  "op-ret": {
    "intro": "A detachment separates the neurosensory retina from the pigment epithelium under it. Three mechanisms do it — a tear, a pull, a leak — and the mechanism decides the surface, the symptoms and the operation.",
    "sections": [
      {
        "id": "rd-1",
        "w": "must",
        "h": "The retina in layers — what separates from what",
        "body": "**Why the layers come first:** a detachment is a separation between two named layers, and every type is defined by how fluid gets between them.\n\n### The nine layers, inner to outer\n- **1 Nerve fibre layer** · **2 Ganglion cell layer** · **3 Inner plexiform layer**.\n- **4 Inner nuclear layer** · **5 Outer plexiform layer** · **6 Outer nuclear layer**.\n- **7 Layer of RODS AND CONES** · **8 RETINAL PIGMENT EPITHELIUM** · then the **CHOROID**.\n- **⚠️ The plane of a detachment:** between **7 and 8** — photoreceptors lift off the RPE. The RPE stays with the choroid.\n\n### The cells and membranes the diagram labels\n- **Bounding membranes:** **INTERNAL limiting membrane** (inner) and **EXTERNAL limiting membrane**.\n- **The cells:** **ganglion · amacrine · bipolar · horizontal · MÜLLER glial**, and the **rod** and **cone** themselves.\n- **The abbreviation stack the deck uses:** **NFL · GCL · IPL · INL · OPL · ONL · ISRC · OSRC · RPE**, with **ILM** and **OLM** arrowed on. *(ISRC and OSRC are the inner and outer segments of rods and cones; the deck prints the abbreviations and no expansion.)*\n\n### Two facts the diagram makes explicit\n- **⚠️ The retina is INVERTED —** light enters at the **nerve fibre layer** and reaches the **rods and cones LAST**, having crossed every other layer first.\n- **The fovea in section —** the retina **thins to a pit**: the inner layers are **absent** and the **photoreceptor layer is thickened**. Scale bar on the slide: **25 µm**.\n- **⚠️ Why the pit matters twice:** it is why the fovea has the best acuity, and it is why a central artery occlusion leaves a **cherry-red spot** — with no inner layers to go white, the choroid still shows through.\n\n*The macula and fovea as a FUNCTIONAL unit — 2 disc diameters temporal to the disc, the avascular darker centre, the foveal reflex, the five macular functions, the six symptoms of maculopathy and the eight tests — is `ins-6`, from `L35,36`. This section carries the LAYER anatomy, which `ins-6` has not got; neither is removable.*\n\nSrc: L20 sl.4, sl.5",
        "qs": []
      },
      {
        "id": "rd-2",
        "w": "must",
        "h": "The three types — a tear, a pull, and a leak",
        "body": "**One question sorts them:** how did fluid get under the retina? The deck’s three answers are the three types, and each has its own cause list.\n\n### 1 — RHEGMATOGENOUS (RRD): a physical tear\n- **Its rank:** the **MOST COMMON type**.\n- **Definition:** a **TEAR OR BREAK develops in the retina**.\n- **Mechanism:** **vitreous FLUID seeps THROUGH the tear** and collects in the **SUBRETINAL SPACE**, **physically pushing the retina away from its underlying blood supply**.\n- **Causes:** **AGEING (vitreous shrinkage)** · **HIGH MYOPIA** · **eye TRAUMA**.\n- **⚠️ Why it must be LIQUID vitreous:** a solid gel cannot pass a break. Liquefaction is therefore both the cause of the tear and the fluid that exploits it.\n\n### 2 — TRACTIONAL (TRD): a pull\n- **Definition:** the retina is **PULLED away** by **scar tissue or membranes**.\n- **Mechanism:** scar tissue **CONTRACTS on the retinal surface**, creating traction that lifts it. **⚠️ UNLIKE RRD, THERE IS TYPICALLY NO INITIAL TEAR.**\n- **Causes:** **ADVANCED DIABETIC RETINOPATHY — THE MOST COMMON CAUSE** · **SICKLE-CELL disease** · **previous ocular TRAUMA**.\n- *The deck’s prose says \"advanced\" diabetic retinopathy; its mechanism figure says **PROLIFERATIVE**. Both are printed; the figure is the more specific.*\n\n### 3 — EXUDATIVE / SEROUS (ERD): a leak\n- **Definition:** **fluid LEAKS and builds up behind the retina WITHOUT ANY TEARS OR TRACTION**.\n- **Mechanism:** inflammatory or vascular conditions drive **fluid FROM THE CHOROID into the subretinal space**.\n- **Causes:** **inflammatory disease (UVEITIS)** · **TUMOURS (CHOROIDAL MELANOMA)** · **severe HYPERTENSION**.\n\n- **⚠️ The three mechanisms in the fewest words:** **RRD lets fluid IN · TRD pulls the retina OFF · ERD pushes fluid UNDER.**\n- **⚠️ The paediatric proof of the split:** **retinopathy of prematurity PULLS a retina off (tractional) and COATS DISEASE FLOATS it off (exudative)** — two causes of leukocoria demonstrating two of these three mechanisms. Both are written in `wht-8`.\n\n*`L7,8) Refractive errors` lists retinal tears and RRD among the peripheral complications of high myopia, which is the same risk factor from the refractive side.*\n\nSrc: L20 sl.6, sl.7, sl.8, sl.10; L33,34 and L7,8 (cited only)",
        "qs": []
      },
      {
        "id": "rd-3",
        "w": "must",
        "h": "Telling the three apart — the surface, the risk factor, and the fundus",
        "body": "**The differentiation table:** the middle row is the one the deck actually teaches.\n\n|Feature|RHEGMATOGENOUS|TRACTIONAL|EXUDATIVE|\n|---|---|---|---|\n|**Main cause**|**RETINAL TEAR / BREAK**|**SCAR TISSUE PULLING**|**FLUID LEAKAGE**|\n|**Retinal surface**|**CORRUGATED / WRINKLED**|**SMOOTH / TAUT**|**SMOOTH / BULLOUS**|\n|**Common risk**|**MYOPIA, AGEING**|**DIABETES**|**INFLAMMATION, TUMOURS**|\n\n- **⚠️ The surface row is the discriminator:** **corrugated = rhegmatogenous · taut = tractional · bullous = exudative.** Two of the three are \"smooth\", so smoothness alone decides nothing — it is smooth-and-stretched against smooth-and-domed.\n- **The bullous appearance in a photograph:** the detached retina lifts as a **smooth dome over the vessels**, which is the deck’s own opening image.\n\n### What the fundus figure adds, panel by panel\n\n|Type|Labels on the figure|\n|---|---|\n|**RRD**|**flashes of light · DARK FLOATERS · CURTAIN** · a **PALE GREY temporal quadrant** against orange attached retina|\n|**TRD**|**diabetic retinopathy · WHITE FIBROTIC SCAR TISSUE · DOT-BLOT haemorrhages · NEOVASCULARIZATION · TRACTION** arrowed toward the disc|\n|**ERD**|**SUBRETINAL FLUID** as a dome between retina and choroid · **DRUSEN or inflammatory DEPOSITS**|\n|**Normal, for comparison**|macula darkening · fovea · optic disc with **clear margins** · retinal arteries and veins|\n\n- **⚠️ The exam-usable mapping:** **floaters + flashes + curtain + a pale quadrant → RRD** · **dot-blot haemorrhages + white fibrotic bands + new vessels → TRD** · **deposits + a smooth yellow dome of subretinal fluid → ERD**.\n\n*⚠️ Defect note: several labels on that figure are garbled — \"White fibroti scar tissue retinopathy\", \"Subretinal subretinal fluid\", and **\"Choroid accuromatic macusis\", which has no plausible reading and is NOT treated here as a real term**.*\n\nSrc: L20 sl.2, sl.9, sl.12",
        "qs": []
      },
      {
        "id": "rd-4",
        "w": "must",
        "h": "Symptoms — three presentations, and the module’s own case",
        "body": "**Symptoms by type:** each has its own set, and its own speed.\n\n|Type|Key symptoms|Progression|\n|---|---|---|\n|**RRD**|**FLOATERS**, flashes of light, and a **\"CURTAIN\" or shadow in the PERIPHERAL vision**|often **SUDDEN and RAPID**|\n|**TRD**|**GRADUAL** vision loss, **DISTORTED or WAVY** vision|**SLOW or progressive** as the scar tissue pulls|\n|**ERD**|**DECREASED CENTRAL vision** and general blurriness|**varies with the underlying disease**|\n\n*The deck’s own emphasis falls on \"floaters\" for RRD and \"distorted\" for TRD.*\n\n### The two symptoms defined\n- **Photopsia —** \"seeing **flashes of light in the absence of a light source**\".\n- **Floaters —** \"seeing **floating black shadows in bright illumination**\".\n\n### The module’s own retinal detachment case\n- **The history:** a healthy **48-year-old** with **\"floating black dots\"** for **2 days**, and **\"the sensation of flashing lights in the periphery\"**.\n- **Then the field:** **\"a disturbance in the temporal field of vision, like a CURTAIN COMING DOWN\"**.\n- **The findings:** acuity **20/20 in both eyes**, **pupils normal**, anterior segment normal — and a **red reflex revealing MOBILE OPACITIES** in the affected eye. Then dilated fundus examination.\n- **The diagnosis:** **RRD.**\n- **⚠️ Read the 20/20:** the retina is off in the temporal periphery and the **macula is still on** — which is exactly the eye that must be operated before it is not.\n\n*The cases are `L31,32) Acute visual Loss`’s and are `op-acute`’s to write; cited only. `L1,2` also puts retinal detachment on its list of VISION-THREATENING ocular emergencies.*\n\nSrc: L20 sl.11; L1,2 lines 264–271 and L31,32 Case 4 (cited only)",
        "qs": [
          "opqb-t1-18"
        ]
      },
      {
        "id": "rd-5",
        "w": "must",
        "h": "How a rhegmatogenous detachment begins — the step the deck leaves out",
        "body": "**The deck names the cause and stops.** `L20` sl.6 gives \"ageing (vitreous shrinkage)\" and never says what shrinks, why it tears a retina, or what a break looks like. That chain is supplied below, and every supplied claim is tagged.\n\n### The vitreous, and what age does to it\n- **What it is:** about **99 % water**, held as a gel by a sparse scaffold of **type II collagen** stabilised by **hyaluronan** *(not in course material)*.\n- **SYNERESIS —** the age-related **LIQUEFACTION** of the gel: hyaluronan releases its bound water and **liquid pockets (lacunae)** form *(not in course material; the deck’s own word for it is **\"vitreous shrinkage\"**)*.\n- **CONDENSATION —** the collagen left behind **clumps into strands and membranes**, which cast the mobile shadows the patient calls **floaters** *(not in course material)*.\n\n### POSTERIOR VITREOUS DETACHMENT — the event syneresis produces\n- **What happens:** the shrunken, part-liquid gel **peels away from the retinal surface**, from the posterior pole forward *(not in course material)*.\n- **The flashes:** where the gel is **still adherent it TUGS**, and the retina can signal only one thing — so **traction is perceived as LIGHT** *(not in course material; photopsia is defined on `L1,2`)*.\n- **The WEISS RING —** the ring of glial tissue torn from the disc margin, floating free in the visual axis *(not in course material)*.\n- **⚠️ PVD itself is benign:** near-universal with age. The danger is what it can do on the way out.\n\n### From traction to a break, and from a break to a detachment\n- **⚠️ The critical step:** where the adhesion is **stronger than the retina**, the peeling gel **TEARS** it instead of separating cleanly *(not in course material)*.\n- **Then the deck resumes:** **liquefied vitreous seeps through the tear into the subretinal space, physically pushing the retina away from its underlying blood supply.**\n- **Why myopia and trauma sit on the same list:** a **longer globe** has a **thinner, stretched peripheral retina** and **earlier vitreous liquefaction**, so a myope has PVD younger and tears more readily *(the mechanism is not in course material; myopia and trauma as RRD causes are `L20` sl.6, and `L7,8` lists tears and RRD among myopia’s peripheral complications)*.\n\n### The types of break — none of which is named anywhere in the module\n- **HORSESHOE (FLAP) TEAR —** a U-shaped tear with its flap still attached, held open by the vitreous that made it. **The most dangerous** *(not in course material)*.\n- **OPERCULATED HOLE —** the flap has torn free; traction has been relieved *(not in course material)*.\n- **ATROPHIC ROUND HOLE —** no traction at all; a thin patch that gave way. Low risk *(not in course material)*.\n- **GIANT RETINAL TEAR —** 90° or more of circumference *(not in course material)*.\n- **RETINAL DIALYSIS —** a circumferential separation at the retinal periphery, classically **post-traumatic and in the young** *(not in course material)*.\n- **⚠️ Superior breaks detach faster** — gravity carries subretinal fluid downward from them *(not in course material)*. **Lincoff’s rules** formalise this into a method for predicting where the primary break lies from the shape of the fluid; they are named here and not reproduced, being absent module-wide.\n\nSrc: L20 sl.6; L1,2 lines 264–271 and L7,8 (cited only). The vitreous chain and the break morphology are supplied and tagged above",
        "qs": [
          "opqb-t1-19"
        ]
      },
      {
        "id": "rd-6",
        "w": "must",
        "h": "Examining the eye, and the investigations `L20` never mentions",
        "body": "**Why this section is mostly borrowed:** `L20` prints **no investigation of any kind** — no ultrasound, no OCT, no angiography, no ophthalmoscopy technique. What follows is drawn from the rest of the module first, and supplied only where the module has nothing.\n\n### At the bedside, painlessly\n- **⚠️ Retinal detachment is PAINLESS.** The retina has no pain fibres. A painless sudden loss points to retina or optic nerve; a painful one to the anterior segment.\n- **The field first, the centre last:** the defect begins **peripherally** — the **curtain** — and central vision falls only when the **macula** detaches.\n- **The RED REFLEX:** a **GREY reflex replaces the red one**, because the lifted, oedematous retina masks the vascular choroid behind it. **Mobile opacities** may be seen in the reflex.\n- **Ophthalmoscopy:** a **grey, elevated, mobile** retina whose folds **undulate on eye movement**; the break is usually peripheral *(the undulation is not in course material)*.\n- **A relative afferent pupillary defect** if the detachment is large *(not in course material)*. `L22` does list **total retinal detachment** among the ocular causes of **mydriasis**.\n- **⚠️ The pressure is LOW:** in the affected eye *(not in course material)* — the one bedside number that separates a detachment from most other causes of a grey fundus.\n- **SCHAFER SIGN —** **pigment (\"tobacco dust\") in the anterior vitreous**, which means a **retinal tear** until proved otherwise. Printed on `L18` and written in `cts-3`.\n\n### The investigations\n- **INDIRECT OPHTHALMOSCOPY —** with **SCLERAL INDENTATION**: the examination that finds the break, and the reason a symptomatic patient is **dilated the same day** rather than reassured *(not in course material)*.\n- **B-SCAN ULTRASOUND —** for a fundus that cannot be seen, through **vitreous haemorrhage or a dense cataract**. Printed on `L18` as **mandatory** when the fundus is not visible.\n- **OCT —** whether the **macula is on or off**, and how much subretinal fluid sits under it *(the retinal application is not in course material; OCT itself is printed on `L18`)*.\n\n### ⚠️ MACULA-ON against MACULA-OFF — the distinction that decides the prognosis\n- **Macula ON:** central acuity still good. **Operate urgently — within about 24–72 hours** — and excellent vision can be kept *(not in course material)*.\n- **Macula OFF:** central vision already lost. Surgery still worth doing, **ideally within about 7–10 days**, but the acuity recovered is **often permanently reduced** *(not in course material)*.\n- **⚠️ A question about TIME:** not about size — photoreceptors separated from the RPE die. `L20` gives **no time window anywhere**, and that absence is what this paragraph fills.\n- **⚠️ And PVD against a tear:** they cannot be separated by history — the symptoms are **identical**. That is precisely why every acute symptomatic PVD is dilated and indented. Roughly one in ten harbours a tear *(not in course material)*.\n\n*The grey-against-red reflex grid is `pup-9`; Schafer sign, peripheral breaks and lattice as pre-operative findings, and the mandatory B-scan, are `cts-3`; direct ophthalmoscopy and the myopic fundus are `pup-10`; the four-step trauma examination is `trm-12`.*\n\nSrc: L20 (no investigation printed — its own not-covered list); L18 lines 493–496, L22 and L3,4 (cited only). The timing, the low IOP, indentation and the RAPD are supplied and tagged",
        "qs": [
          "opqb-t1-60",
          "opqb-t1-61"
        ]
      },
      {
        "id": "rd-7",
        "w": "must",
        "h": "Repairing a tear — the three operations",
        "body": "**The deck’s rule:** **SURGICAL INTERVENTION IS ALMOST ALWAYS REQUIRED** to seal a retinal break. Three procedures, and they attack the problem from three directions.\n\n|Operation|What is done|Where it acts|\n|---|---|---|\n|**VITRECTOMY**|the surgeon **removes the vitreous gel** and replaces it with a **GAS OR OIL BUBBLE** to push the retina back|from **inside** the eye|\n|**SCLERAL BUCKLING**|a **SILICONE BAND** is placed **around the eye** to push the eye wall **inward**|from **outside** the eye|\n|**PNEUMATIC RETINOPEXY**|a **GAS BUBBLE** is injected to **seal the tear from the inside**, often followed by **LASER or CRYOTHERAPY (freezing)**|**inside**, without removing the gel|\n\n- **⚠️ Two different jobs in every operation:** **close the break** (laser or cryotherapy scars retina to RPE) and **remove the traction** (take the gel out, or indent the wall so the gel no longer pulls). A bubble only holds the retina still while the scar forms.\n- **The vitrectomy figure:** two instruments enter **through the pars plana**, with a **light source** alongside; the labels name cornea, lens, vitreous, floaters, retinal tear and detachment.\n\n### What the deck does not name\n- **The tamponade agents:** **SF6** and **C3F8** gases, and **SILICONE OIL** for complex or inferior detachments — the deck says only \"gas or oil\" *(not in course material)*.\n- **Positioning after surgery:** the bubble rises, so the head is postured to float it against the break; **air travel is forbidden while a gas bubble remains** *(not in course material)*.\n- **LASER RETINOPEXY —** for a break **WITHOUT** detachment: a barrage of laser around a symptomatic tear, in clinic, which prevents the detachment entirely *(not in course material)*.\n- **PROLIFERATIVE VITREORETINOPATHY —** membranes growing on the retinal surface after a detachment or its repair, contracting and re-detaching it. **The commonest reason a repair fails** *(not in course material)*.\n- **⚠️ And no figure of any kind:** `L20` contains **no percentage, no incidence, no time interval and no drug dose** — its only numbers are a 25 µm scale bar and the slide numbers. Every success rate, redetachment rate and time window in this chapter is therefore either borrowed from another deck or tagged.\n\nSrc: L20 sl.13, sl.14. The tamponade agents, posturing, prophylactic laser and PVR are supplied and tagged",
        "qs": []
      },
      {
        "id": "rd-8",
        "w": "must",
        "h": "Relieving a pull, and treating a leak",
        "body": "**Both attack the CAUSE:** not the detachment itself.\n\n### TRACTIONAL detachment — remove the mechanical force\n- **VITRECTOMY AND MEMBRANE PEELING:** remove the vitreous and carefully **peel away FIBROVASCULAR MEMBRANES** or scar tissue pulling on the retina.\n- **UNDERLYING DISEASE CONTROL:** long-term, **strict control of the causative condition — MOST COMMONLY DIABETIC RETINOPATHY**.\n- **⚠️ Why peeling and not buckling:** there is **no break to close**. Indenting the wall would achieve nothing; the membrane has to come off.\n- *The deck’s figure is four line-art panels, A–D, of a pars plana vitrectomy with membrane delamination — successive stages, no per-panel captions.*\n\n### EXUDATIVE detachment — stop the leak\n- **⚠️ SURGERY IS RARELY THE FIRST STEP.** The focus is on stopping fluid leakage.\n- **Medical therapy:** **CORTICOSTEROIDS or IMMUNOSUPPRESSANTS** for inflammatory conditions such as **UVEITIS** or **VKH SYNDROME**.\n- **Injections:** **ANTI-VEGF** drugs, to stop leaking from abnormal vessels.\n- **Specific treatments:** targeted therapy for **infections**, **hypertension control**, or **radiation / surgery for OCULAR TUMOURS**.\n- **⚠️ The one that must not be missed:** an exudative detachment over a **choroidal melanoma**. Steroids will not help it, and the eye is not the whole problem.\n- **SHIFTING SUBRETINAL FLUID —** the classic sign: the fluid moves with posture, because nothing tethers it. The deck gives only \"smooth / bullous\" *(not in course material)*.\n\n*Uveitis and VKH as diseases are `op-uvea`’s (`L13,14`, unread); choroidal melanoma as a tumour is `op-onc`’s (`L24`, unread). Register rows are filed for both. Central serous chorioretinopathy is the same mechanism confined to the macula, in `dr-11`.*\n\n*⚠️ Defect note: on the live slide a six-panel scleral-buckling figure is pasted over the right third of this text and obscures three bullet ends as projected. The wording above is recovered from the text layer, and the figure belongs to sl.14’s topic.*\n\nSrc: L20 sl.15, sl.16",
        "qs": []
      },
      {
        "id": "rd-9",
        "w": "know",
        "h": "Blunt trauma and the retina — three lesions, all photograph labels",
        "body": "**What the trauma deck gives:** four photographs with their labels, and no prose. The lesions themselves are in `trm-7`; what they mean for the retina is here.\n\n|Lesion|The label|What it is|\n|---|---|---|\n|**COMMOTIO RETINAE — Berlin’s oedema**|**CHERRY-RED SPOT · RETINAL OEDEMA**|**concussive whitening of the outer retina** after a blunt blow; **photoreceptor outer-segment disruption**, not true oedema. **Usually resolves spontaneously** *(mechanism and course not in course material)*|\n|**RETINAL BREAK ± DETACHMENT**|**RETINAL TEAR · RETINAL DETACHMENT**|the tear first, then the detachment — trauma is `L20`’s third cause of RRD, and **dialysis** is the classically traumatic break *(dialysis not in course material)*|\n|**CHOROIDAL RUPTURE**|**concentric crescent TEMPORAL to the disc**|a break in **Bruch’s membrane**; sight is lost if it crosses the fovea, and **choroidal neovascularization** may follow later *(both not in course material)*|\n\n- **⚠️ Commotio against a CRAO:** both can show a pale retina and a red fovea. **Commotio follows a blow and recovers; a CRAO follows an embolus, takes the acuity to below 6/60 and does not.**\n- **⚠️ Why re-examine weeks later:** a break made today can detach months from now, and a choroidal rupture can neovascularise *(not in course material)*.\n\n*Iridodialysis, the Vossius ring, rosette cataract, lens subluxation and the whole blunt-trauma lesion list are `trm-7`, from `L25`; the four-step trauma examination, including ophthalmoscopy for detachment and vitreous haemorrhage, is `trm-12`.*\n\nSrc: L25 sl.35–39 (photograph labels only) and L20 sl.6; trm-7. The pathophysiology and course of each lesion are supplied and tagged",
        "qs": []
      },
      {
        "id": "rd-10",
        "w": "know",
        "h": "The peripheral degenerations — the half of the lecture that was never delivered",
        "body": "**Stated plainly:** because it changes how this section is read — the lecture is titled *\"Retinal detachment AND DEGENERATIONS\"* and **the deck contains no slide on any degeneration**. Sixteen consecutive pages — 48 % of the file — are decorative filler. The module names two of these lesions in passing, on the cataract deck; the rest is supplied and tagged.\n\n### What the module does print\n- **On the pre-operative fundus examination:** **\"Periphery: retinal BREAKS, LATTICE DEGENERATION\"** — `L18`, and written in `cts-3`. **The names are sourced; nothing more is.**\n- **⚠️ Two different \"lattices\" in this module:** **lattice CORNEAL DYSTROPHY** (amyloid, Congo-red positive, in the cornea chapters) and **lattice RETINAL degeneration**. Only the second is this chapter’s.\n\n### The degenerations that predispose to a detachment — all supplied\n\n|Lesion|What it looks like, and what it means|\n|---|---|\n|**LATTICE degeneration**|**circumferential, oval areas of retinal thinning** with **branching white lines** (sclerosed vessels), in roughly **6–8 % of the population**; **atrophic holes** within, and **firm vitreous adhesion at the margins**. The commonest degeneration behind an RRD *(not in course material)*|\n|**SNAIL-TRACK degeneration**|**bands of tightly packed white \"frost\"**, closely related to lattice, same significance *(not in course material)*|\n|**PAVING-STONE (cobblestone)**|**discrete yellow-white patches of chorioretinal atrophy** at the inferior periphery. **HARMLESS — does not predispose to detachment** *(not in course material)*|\n|**RETINOSCHISIS**|a **SPLIT WITHIN the retina**, not a separation from the RPE: a **smooth, dome-shaped, immobile** elevation with an **ABSOLUTE** field defect *(not in course material)*|\n|**WHITE-WITH-PRESSURE / without pressure**|a **grey-white sheen** to the peripheral retina, with or without indentation; a marker of **vitreoretinal adhesion** *(not in course material)*|\n\n### Two discriminations worth the space\n- **⚠️ RETINOSCHISIS against DETACHMENT:** schisis is **immobile, smooth-domed** and gives an **absolute** field defect; a detachment is **mobile, corrugated** and gives a **relative** one. Schisis is usually left alone *(not in course material)*.\n- **⚠️ Which lesions matter:** **lattice and snail-track do** (thinning plus vitreous adhesion), **paving-stone does not** (atrophy with no traction). Prophylactic laser is reserved for a **symptomatic** break or a high-risk lesion in a fellow eye *(not in course material)*.\n\n### Also absent from this deck, and named so the gap is on the record\n- **Posterior vitreous detachment** as an entity — supplied in `rd-5`. **Break morphology** — `rd-5`. **PVR, tamponade agents, macula-on/off timing, shifting fluid, LEOPARD SPOTS, Shafer sign, every investigation and every success rate** — supplied or borrowed in `rd-6` to `rd-8`, each tagged where it is written.\n\nSrc: L20 (no slide — its own not-covered list); L18 line 493 and cts-3 for the names. Every description above is supplied and tagged",
        "qs": []
      }
    ]
  }
};
