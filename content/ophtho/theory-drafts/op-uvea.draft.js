/* op-uvea + op-sclera — "The Uveal Tract" and "The Sclera", Ophthalmology.
   Written 2026-08-18 under START-HERE.md §14 (slide-density revision notes),
   §14.1 (budget and page prediction), §14.2 (the two-sided coverage floor),
   §14.3 (telegraphic style), §14.3a (layout and the mdLead() anchor rule) and
   §14.5 (the deferral register), plus content\ophtho\theory-plan.md ("What
   writing the first twelve chapters taught", and the two USER RULINGS of
   2026-08-18). Shape copied from content\ophtho\theory-drafts\op-ret.draft.js
   and op-refract.draft.js.

   ⚠️ THIS FILE HOLDS TWO CHAPTERS, BOTH WITH EXISTING KEYS. Neither is new;
   no modules.js registration is needed. This file touches no app\data\* file,
   no MEMORY.md, no resume file and no git.

     `op-uvea`    the existing key — 1 linked question, `opqb-t1-59`
     `op-sclera`  the existing key — 0 linked questions

   ⚠️ NO NUMBER IN THIS HEADER IS A MEASUREMENT OF THE FINISHED FILE. Per the
   eleven header faults recorded in §14.1 and theory-plan.md, this header
   states reasoning, sources and deferrals and states NO totals. Every figure
   below is derived from the SOURCE, never from the draft. The hub measures
   body words from disk — canonical W(s.body) over every section, Src: lines
   INCLUDED — and prints the chapters.

   ===========================================================================
   ⚠️⚠️ THIS IS THE FIRST PAIR OF CHAPTERS IN THE PROJECT WRITTEN FROM THE
   BOOK RATHER THAN FROM A LECTURE DECK.

   The user ruled on 2026-08-18 that `ophthalmology.pdf` — "OPHTHALMOLOGY WITH
   TUTORIALS", BY HEALIX TEAM, Fifth Year — is the module's main reference and
   that the last few decks are compilations. These two chapters were the
   module's most blocked: their only assigned deck, `L13,14) Uvea & Sclera`,
   extracts ZERO characters over 41 pages and has no cache at all. The two
   book chapters were rendered and read on 2026-08-18 and are the sources:

     content\ophtho\book\ch10-uveal-tract.txt  printed pp.130–141, 12 pp
     content\ophtho\book\ch07-sclera.txt       printed pp. 96–102,  7 pp

   ⚠️ CITATIONS ARE THE **PRINTED** PAGE — the number the reader sees at the
   bottom-left of the page. PDF page = printed page + 2, and no PDF page
   appears anywhere in a chapter body. Every Src: line reads
   `ophthalmology.pdf (HEALIX) ch.<N> p.<printed>`.

   ⚠️ NO RENDER WAS COMMISSIONED BY THIS AGENT AND NONE WAS AUTHORISED. Both
   caches were written by the reading agent from 150 dpi renders (one 400 dpi
   crop each) and both record their own verified absences page by page. Where
   this file says the book prints nothing, that is the cache's NOT-COVERED
   list, not an inference from silence.

   ===========================================================================
   BUDGET (§14.1). Both terms are computed, and TERM 2 collapses as it does in
   every ophthalmology chapter.

     TERM 1, source words — the book chapters replace the (unreadable) deck:
       ch.10 The Uveal Tract   3,768 w of teaching  → `op-uvea`
       ch.7  The Sclera        2,154 w of teaching  → `op-sclera`
     TERM 2, 25 × linked questions:
       `op-uvea`   25 × 1 = 25   — under the floor
       `op-sclera` 25 × 0 =  0   — under the floor

     budget = max(TERM 1, TERM 2), floor 600, cap 3,000:
       `op-uvea`   3,000 (TERM 1 capped)
       `op-sclera` 2,154

   ⚠️ THE OPERATIVE CEILING GOVERNS `op-uvea`, NOT ITS BUDGET. §14.1's measured
   ceiling is ~2,400 body words / ~10 printed pages, and at `pages ≈ words ÷
   240` the raw source would print at ~15.7 pp. So `op-uvea` is written DOWN
   to roughly two thirds of its source. `op-sclera`'s source is ~9.0 pp at
   1:1, already inside the shape, and it is written at close to source length.

   ⚠️ AND THE ÷240 ESTIMATOR HAS OVER-PREDICTED IN THIS MODULE — by 5, 2 and
   2 pages (`op-glauc` is the one exception, under by 1.2). The page count is
   the hub's to measure. Nothing was cut to reach a number: §14.1's rule
   stands, that hitting a word target by deleting a protected fact is the
   failure and the overrun is not.

   ⚠️ TWO DRAFTING PASSES WERE MADE, AND THE FIRST ONE FAILED. Pass one came
   in for `op-uvea` at close to SOURCE length — transcribed, not compressed,
   exactly the failure §14 was written to stop — and was measured, caught and
   rewritten section by section before delivery. Pass two is what is below.
   Recorded because the difference between them is entirely apparatus and
   repetition, NOT content: no fact, number, eponym or Tutorial marker present
   in pass one is absent from pass two. What went: chained sub-bullets folded
   into their parents, the two grading tables merged into one, the comparison
   grid's redundant "Site" row (already in `uv-3`) and its non-discriminating
   "treat the cause" cells (stated once beneath it instead), the p.141
   navigation table converted to a pointer paragraph, and every
   cross-reference rewritten from sentences into pointer lists.

   ⚠️⚠️ AND THE BILL, STATED RATHER THAN PAID BY DELETING SOMETHING (§14.1).
   `op-sclera` lands inside the shape the brief asked for and needs no ruling.
   **`op-uvea` did NOT reach the ~2,400-word operative ceiling.** It sits
   between the ceiling and its 3,000-word budget, which is precisely §14.1's
   "state the bill and let the hub rule on pages" band, and the reason is
   itemisable rather than vague:
     · ch.10 is a TWELVE-PAGE chapter with FOUR disease entities, each given
       definition / aetiology / symptoms / signs / complications / treatment,
       PLUS two anatomy pages, PLUS two more entities (VKH, sympathetic
       ophthalmia), PLUS a seven-item iris page. At §14.1's measured ~90-word
       entity floor that is ~540 words before a single table, and the entity
       floor is the term that governs a survey chapter.
     · TWO WHOLE SECTIONS ARE GAP-FILLS THE REGISTER DEMANDED — `uv-6`
       (the cell and flare grading, ~215 w) and the JIA screening block
       inside `uv-4` (~120 w). Neither is in any source; both were ordered
       by rows the brief called high-yield. Together they are most of the
       distance to the ceiling.
     · THE FOUR-WAY GRID IN `uv-10` is 6 rows × 4 columns = 24 cells, and
       §14.1's own rule is that a grid costs rows × columns, not one slide.
   **What the next 400 words of cutting would cost, named:** the anatomy of
   `uv-1`/`uv-2` back to a stub (losing the pars plana that names pars
   planitis, and Bruch's membrane), or the p.141 iris page, or one of the two
   gap-fills. All three are refused here per §14.1's rule that a chapter which
   hits its number by losing a protected fact has failed. **If the hub's
   printed page count is unacceptable, the cut is the hub's to order and the
   three candidates above are the menu.** Note also that this module's ÷240
   estimator has over-predicted by 5, 2 and 2 pages, so the printed figure is
   expected to land well under the divide.

   WHERE `op-uvea` WAS COMPRESSED, AND WHY — in the brief's own priority
   order, itemised so the hub can see what moved rather than what is missing:

     (a) THE PURE ANATOMY of iris, ciliary body and choroid — printed pp.131–
         133, ~1,150 w — is written at well under half source length in
         `uv-1` and `uv-2`. What was KEPT is every fact a disease section
         later needs: the two iris layers and their muscles, the iris root
         against the trabecular meshwork (why iris disease moves the IOP),
         the uveoscleral pathway, pars plicata / pars plana (aqueous
         secretion → "ciliary body shutdown", and the pars plana that gives
         pars planitis its name), the ciliary body's three functions, the
         four choroidal layers and Bruch's membrane. What was COMPRESSED to
         a clause each: the pupillary/ciliary zones, the collarette, the
         crypts and the furrows — descriptive surface anatomy no disease in
         the chapter turns on, and the examination material is already
         written in `op-va` (`va-12`, `va-14`) and `op-pupil` (`pup-1`–
         `pup-3`). NOTHING WAS DROPPED: every named structure is present.
         ⚠️ The book's FIGURE-ONLY teaching is kept and labelled as such —
         contraction/radial furrows, the three ciliary-muscle fibre
         orientations, the supraciliary lamina, and Haller's / Sattler's
         layers. Those appear in no prose anywhere in the chapter.
     (b) THE TUTORIAL-MARKED BLOCKS — the book itself down-weights them.
         They are carried whole but compressed into single tagged clauses
         rather than given their own bullets, and every one is marked.
     (c) MATERIAL ALREADY WRITTEN ELSEWHERE is cross-referenced, never
         re-taught: hypopyon (9 sections), KPs (5), posterior synechiae (6),
         band keratopathy (`cor-16`), complicated cataract (`cat-3`), the
         uveitic secondary open-angle glaucoma mechanism with plasmoid
         aqueous (`glc-10`), accommodation (`ref-12`, `ast-7`), the two
         aqueous outflow pathways (`glc-2`, `glc-3`), AMD/CNV and Bruch's
         (`ins-7`), exudative detachment (`rd-8`), sympathetic ophthalmia's
         latency and terminology (`trm-9`).
     (d) THE FOUR-TYPE ACCOUNT WAS RESTRUCTURED, NOT SHORTENED. The book
         teaches a page per type and THEN prints two summary tables (pp.139
         and 140 top). Written 1:1 that is the same content twice, which
         §14.3 bans. So anterior uveitis — the type with its own question,
         two register rows and by far the most detail — keeps four sections
         of its own; intermediate, posterior and panuveitis keep one section
         each carrying only what a grid cannot hold (the epidemiology
         numbers, snowballs and snow banking, the masquerade syndrome, the
         three infection routes, the Tutorial boxes); and the book's own
         comparison grid is written ONCE, in `uv-10`, as the four-way
         discrimination it is.

   ===========================================================================
   ⚠️ THE BOOK'S OWN STUDY-PRIORITY MARKER — CARRIED THROUGH, NOT DISCARDED.

   The contents page (PDF p.3) states: "In this book, anything we put
   (Tutorial) or (T) beside / before it , study in round & skip in final".
   Every such mark is therefore the BOOK'S OWN statement that the item is
   lower priority for the final exam, and it is a study signal, not
   decoration. It is carried on the claim, never silently promoted and never
   deleted. The tag is spelled out in full at its first appearance in each
   chapter and shortened to *(Tutorial — skip in final)* thereafter.

   ch.10 carries EIGHT markers; ALL EIGHT are in the chapters below:
     1. p.135  posterior synechiae → "irregular shape of the iris"   → `uv-7`
     2. p.135  cycloplegics "to prevent and break recently formed
               posterior synechiae"                                  → `uv-7`
     3. p.135  boxed "+ Treatment of secondary ocular complications" → `uv-7`
     4. p.137  boxed "+ Tutorial": vasculitis · spill-over anterior
               uveitis is common                                     → `uv-9`
     5. p.137  boxed "+ complications from Tutorial": epiretinal
               membrane · choroidal neovascularization · RD          → `uv-9`
     6. p.137  boxed "Tutorial": immunosuppressives · vitrectomy as
               in tractional retinal detachment                      → `uv-9`
     7. p.138  boxed "N.B. from tutorial about uveitis treatment",
               two statements                                       → `uv-10`
     8. p.141  THE WHOLE PAGE, headed "This page is from Tutorial"  → `uv-12`

   ch.7 carries FIVE markers; ALL FIVE are in the chapters below:
     1. p.98  boxed: no discharge; if present minimal & watery       → `scl-3`
     2. p.99  boxed: + topical anti-inflammatory agents, lubricants  → `scl-3`
     3. p.99  inline: anterior scleritis "in middle aged females"    → `scl-4`
     4. p.99  boxed: ± history of autoimmune disease (RA) · the
              bluish-violet hue = deep episcleral plexus engorgement
              + scleral thinning                                     → `scl-4`
     5. p.99  inline: "U/S: Scleral thickening ± RD"                 → `scl-4`

   ⚠️ AND ONE DIFFERENT, UNDEFINED MARKER. ch.7 p.97 tags the sub-section
   "Normal Scleral color" as **(++ Additional)**. That is NOT the Tutorial
   marker; nothing in the front matter defines it. It is recorded verbatim in
   `scl-1` as printed and NOT interpreted, per the brief.

   ===========================================================================
   THE FIVE REGISTER ROWS OWED TO `op-uvea`, AND THE TWO OWED TO `op-sclera`
   (§14.5). Every row was verified against its named source AND against the
   merged `app\data\theory.ophtho.js` — INCLUDING the row's second clause,
   which is the clause nobody was checking.

   ROW 1 — `op-systemic` (L23 ll.268–300) → `op-uvea`:
     "Uveitis as a disease … the entity, its grading and the JIA screening
     schedule are the uvea chapter's."
     ✅ SECOND CLAUSE VERIFIED TRUE. `sys-9` carries the sarcoid and
     connective-tissue associations and the JIA percentages, and its own
     defect note says the screening instruction "is not invented here — it is
     `op-uvea`'s". It writes no entity account.
     ✅ ENTITY DELIVERED from the book, in full — `uv-3` to `uv-10`.
     ❌ GRADING NOT IN THE BOOK → supplied and tagged in `uv-6`.
     ❌ JIA SCHEDULE NOT IN THE BOOK → supplied and tagged in `uv-4`.

   ROW 2 — `op-red` (L37) → `op-uvea`: "Iritis / iridocyclitis in full",
     with the JIA clause already struck out as undeliverable from `L37`.
     ✅ SECOND CLAUSE VERIFIED TRUE. `red-8` carries only `L37`'s fragment —
     "inflammation of the iris alone, or of the iris and ciliary body",
     ciliary flush, and the status line — and explicitly says "uveitis in
     full is `op-uvea`'s". `rdm-1`–`rdm-5` carry iridocyclitis only as a
     red-eye symptom column.
     ✅ DELIVERED — `uv-4`, `uv-5`, `uv-7`, from ch.10 pp.134–135:
     definition, the 75 % idiopathic figure, the full aetiology, symptoms,
     seven signs, the two-way IOP, five complications, four treatment steps.

   ROW 3 — `op-va` (L3,4 sl.17–18) → `op-sclera`, `op-uvea`. Already marked
     ✅ CLOSED-AS-DELIVERED-BY-THIRD-PARTIES on 2026-08-17, with an amendment
     naming the real residue.
     ✅ THE CLOSURE RE-VERIFIED: episcleritis vs scleritis is in `red-7` and
     `cor-9`; `iridodialysis` in `pup-1`/`va-12`/`trm-7`/`rd-9`; posterior
     synechiae in six sections; `rubeosis` in `va-12`/`vsc-5`/`glc-15`.
     ⚠️⚠️ BUT THE AMENDMENT IS WRONG ON ONE TERM — see the CONTRADICTIONS
     block below. `staphyloma` does NOT return zero module-wide.

   ROW 4 — `op-va` (L3,4 sl.27) → `op-uvea`, `op-trauma`, narrowed
     2026-08-17 to "the entities are written, the GRADING is not".
     ✅ NARROWING RE-VERIFIED: `va-14` lists "Cells & flare — uveitis" among
     the anterior-chamber contents and grades nothing; `grading of cells`
     returns zero across the theory file, and every `SUN` hit is the word
     "sun" inside another word.
     ❌ THE BOOK DOES NOT PRINT IT EITHER — ch.10's NOT-COVERED list is
     explicit over all twelve pages. → supplied and tagged in `uv-6`.

   ROW 5 — `op-white` (L33,34) → `op-uvea`: "Uveitis as a disease."
     ✅ SECOND CLAUSE VERIFIED TRUE. `wht-6` writes only the inflammatory
     pupillary membrane and closes with "Uveitis as a disease — the entity,
     its classification, cells and flare, posterior synechiae — is deferred
     to `op-uvea`."
     ✅ DELIVERED — `uv-3` to `uv-10`, and the synechiae complication in
     `uv-7`.

   ROW 6 — `op-red` (L37) → `op-sclera`: "Scleritis and episcleritis in full
     — classification, the phenylephrine test, scleromalacia."
     ✅ SECOND CLAUSE VERIFIED TRUE, and it is the strongest row in the set.
     `red-7` carries both entities and a seven-row discrimination grid from
     `L37`, and carries NO classification, NO phenylephrine and NO
     scleromalacia. `scleromalacia`, `necrotis`/`necrotiz`, `phenylephrine`
     and `pars planitis` all return ZERO across the whole theory file.
     ✅ DELIVERED IN FULL from ch.7 p.99 (`scl-4`), p.101 (`scl-6`) and
     p.102 (`scl-7`).

   ROW 7 — `op-va` (L3,4 sl.17–18) → `op-sclera`, the same row as ROW 3 seen
     from the sclera side. Its 2026-08-17 amendment names `op-sclera`'s real
     scope as the scleritis CLASSIFICATION. ✅ That is exactly what `scl-4`
     is, and the classification came from the book, not from `L13,14`.

   ===========================================================================
   ⚠️⚠️ WHAT THE SOURCES CONTRADICTED — INCLUDING THIS BRIEF. Reported, not
   quietly worked around.

   (1) ⚠️ `staphyloma` DOES NOT RETURN ZERO MODULE-WIDE. The brief states
       that "`scleromalacia`, `nodular`, `necrotising`, `anterior`/
       `posterior` scleritis, and `staphyloma`" all return zero, quoting the
       §14.5 amendment of 2026-08-17. Four of the five are correct and
       verified. **`staphyloma` is not:** `ref-9` ("Myopia — complications,
       and the staphyloma") carries FOUR hits, including a full definition —
       "a localised bulge of thinned, ectatic sclera lined by uveal tissue",
       tagged there as *(not in course material)* — and a four-row site
       table (posterior / intercalary / ciliary / equatorial), three rows of
       which are also tagged as supplied.
       **The consequence is a GOOD one and it is why this matters:** ch.7
       p.97 PRINTS the definition, so what `ref-9` had to supply is now
       SOURCED. `scl-1` writes it from the book and says so; `ref-9`'s
       tag can be retired by the hub at the reconciliation pass. The four
       SITES remain supplied — the book classifies no staphyloma at all.
       **This is the ninth fault shape seen from the other side: a row can
       under-state what the module already carries, which makes the receiver
       believe it is writing something new.**

   (2) ⚠️ THE p.141 IRIS LIST IS SEVEN ITEMS, NOT SIX, AND TWO ARE NEW, NOT
       ONE. The brief says ch.10 p.141 lists six iris conditions and that
       "five of the six are already written", then names four. The fifth is
       `iridodonesis`, which IS written — `cts-7`, as the tremulous iris of
       aphakia, and named again in `ref-11`. But the book's own box also
       lists **iridectomy** under "Iris defect", making seven items, and
       BOTH `coloboma` AND `iridectomy` return ZERO across the theory file.
       Both are supplied and tagged in `uv-12`; the other five are
       cross-referenced, not re-taught.

   (3) ⚠️ BEHÇET'S DISEASE RETURNS ZERO ACROSS THE WHOLE THEORY FILE. A
       grep for "Beh" hits `orb-12` and `vsc-7` and BOTH are false
       positives — "Behind the septum" and "Behaviour" in a table header.
       So Behçet's is genuinely new material here, in three places at once:
       posterior uveitis (`uv-9`), panuveitis (`uv-10`) and the
       episcleritis vasculitides (`scl-2`). It is not cross-referenced
       anywhere because there is nothing to point at.

   (4) ⚠️ HLA-B27 AND ANKYLOSING SPONDYLITIS ALSO RETURN ZERO module-wide,
       as do `albinism`, `osteogenesis`, `blue sclera`, `collarette`,
       `choriocapillaris`, `intermediate uveitis`, `pars planitis`,
       `snowball` and `snow bank`. The uveitis aetiology and the whole
       intermediate-uveitis section are new material, not restatement.

   (5) ⚠️ `va-12` CALLS EPISCLERITIS "usually painless"; THE BOOK DOES NOT.
       ch.7 p.98 gives "Discomfort photophobia or tenderness" as its
       symptoms and "TENDER episcleral nodules" as a sign, and p.102's grid
       gives "Irritation: discomfort, photophobia, Tenderness". `va-12`'s
       gloss is tagged there as supplied, so this is a divergence, not a
       source conflict — but it is a divergence a reader would trip on.
       Recorded in `scl-3`.

   (6) ⚠️ `red-7`'s GRID GIVES EPISCLERITIS AS "sectoral" AND SCLERITIS AS
       "localised or diffuse". The book prints simple episcleritis as
       **sectoral in 2/3 and DIFFUSE in 1/3**. Not a contradiction — `red-7`
       is faithful to `L37` — but incomplete against the book, and the
       incompleteness points the wrong way for a discrimination grid.
       Both are recorded, in `scl-2`.

   (7) ⚠️ `red-7` NAMES **granulomatosis with polyangiitis** AS A SCLERITIS
       ASSOCIATION. The book's cause list (ch.7 p.100) does not: it gives
       rheumatoid arthritis as the commonest, then SLE, seronegative
       spondyloarthropathies, gout, infections, chemical/physical injuries
       and idiopathic. `L37` is the only source for GPA. Recorded in
       `scl-5` and `scl-7` so neither list reads as the complete one.

   (8) ⚠️ THE BOOK CONTRADICTS ITSELF ON PHENYLEPHRINE, AND RESOLVES IT
       ITSELF. p.98 says episcleritis does NOT blanch (at 2.5 %); p.102's
       grid says episcleritis DOES blanch (at 10 %). The p.101 NOTES table
       reconciles them — the concentrations differ. All three are written
       as printed in `scl-6`, with the resolution stated. Nothing was
       corrected.

   (9) ⚠️ TWO PRINTED DEFECTS IN ch.10, transcribed and not corrected:
       p.131 heads a list "The iris is divided into two major regions" and
       prints THREE items, the third being the collarette (noted in
       `uv-1`); and the panuveitis definition — "inflammation of all uveal
       components of the eye with localization to a specific part of the
       uvea" — is internally odd and is printed VERBATIM TWICE (p.138 and
       the p.139 table), so it is the book's settled wording, not a typo
       (noted in `uv-10`).

  (10) ⚠️ THE BOOK'S OWN COMPARISON GRID RUNS ITS COLUMNS Anterior /
       Posterior / Intermediate / Panuveitis — not the order the chapter
       teaches them in — and compresses the whole of p.135's IOP teaching
       into the five characters "IOP ↓ or ↑". `uv-10` reorders the columns
       to the teaching order and says so, and points at `uv-5` for the
       pressure. The book's aetiology row is MERGED across three of the
       four columns; that merge is preserved as a stated fact, not silently
       expanded.

  (11) ⚠️ ch.10 GIVES SYMPATHETIC OPHTHALMIA WITHOUT ITS CLASSIC
       APPARATUS. `trm-9` already writes it — supplied and tagged — with
       the exciting/sympathising eye terminology and the 2 weeks–3 months
       interval. The book sources the DEFINITION and the MECHANISM (immune
       sensitisation to melanin) and adds three findings `trm-9` does not
       have (iris nodules, mutton-fat KPs, disc oedema), and prints NO
       latency, NO incidence and NO enucleation rule and never uses the
       words "exciting" or "sympathising". So `trm-9`'s tags remain
       correct. `uv-11` writes the newly-sourced half and points at
       `trm-9`; neither re-derives the other. **Notice, not a debt.**

  (12) ⚠️ ch.10 SOURCES A MECHANISM `glc-10` ALREADY CARRIES. p.135 gives
       uveitic secondary glaucoma as trabeculitis (HSV/HZV) plus plasmoid
       aqueous and large WBCs blocking the meshwork; `glc-10` already has
       the plasmoid-aqueous route from `L11`. Written once, in `uv-5`, with
       the cross-reference. **Notice, not a debt.**

   ===========================================================================
   DEFERRALS OPENED BY THESE TWO CHAPTERS (§14.5 — an unrecorded promise is a
   deletion). The hub adds these rows to the register.

   | Deferred from | Payload | Owed to |
   |---|---|---|
   | `op-uvea` (HEALIX ch.10 p.137) | **The masquerade malignancies as TUMOURS** — retinoblastoma, choroidal melanoma, leukaemic infiltrate, intraocular lymphoma. Written here only as an aetiology of posterior uveitis, i.e. as the thing that must be excluded before an eye is immunosuppressed | `op-onc` ⚠️ blocked on `L24`'s visual read (78 pp) — and `op-onc` already holds three rows |
   | `op-uvea` (HEALIX ch.10 p.132) | **Diffuse iris melanoma as a TUMOUR** — named here only as one of the three causes of acquired heterochromia | `op-onc` ⚠️ same block |
   | `op-uvea` (HEALIX ch.10 pp.136–137) | **Cystoid macular oedema as MACULAR DISEASE.** Macular oedema is a complication of all three uveitis types (30 % in intermediate) and is written here as a complication only. ⚠️ **MERGE with the existing open row `op-cat` → `op-ret` "Cystoid macular oedema / Irvine–Gass"** — two chapters have now converged on the same fact | `op-ret` |
   | `op-sclera` (HEALIX ch.7 p.97) | **Marfan syndrome and osteogenesis imperfecta as SYSTEMIC DISEASES** — written here only as the two named associations of blue sclera. ⚠️ `Marfan` returns ONE hit module-wide (`cat-10`, ectopia lentis) and `osteogenesis` returns ZERO | `op-systemic` ⚠️ already merged; reconciliation work |
   | `op-sclera` (HEALIX ch.7 p.97) | ⚠️ **REVERSE NOTICE, NOT A DEBT — the staphyloma definition is now SOURCED here** and `ref-9`'s *(not in course material)* tag on it can be retired. The four SITE types in `ref-9` stay supplied: the book classifies no staphyloma. `ref-9` must not be rewritten, only re-tagged | `op-refract` ⚠️ already merged; reconciliation work |
   | `op-sclera` (HEALIX ch.7 p.98) | **Temporal arteritis as an entity** — named here only as one of the vasculitic causes of episcleritis. ⚠️ `temporal arteritis` and `ESR` already return ZERO module-wide, a hole recorded against `op-acute` on 2026-08-17. This row does not close it | `op-acute` ⚠️ already merged; reconciliation work |
   | `op-uvea` (HEALIX ch.10 p.133) | ⚠️ **REVERSE NOTICE — Bruch's membrane's four-layer context is written here**, and its role in AMD (`ins-7`), choroidal rupture (`rd-9`) and CNV is already written. Nothing is owed; recorded so no later chapter re-derives the choroidal layers | `op-ret` |

   ⚠️ NOTHING WAS DEFERRED THAT A LINKED QUESTION TESTS. `op-uvea`'s single
   question, `opqb-t1-59`, asks what iritis typically shows in the anterior
   chamber (key: cells & flare, against hypopyon / shallow chamber / clear
   chamber). All four options are decided inside `uv-5`, and `uv-6` and
   `va-14` carry the rest. `op-sclera` has no questions at all.

   ===========================================================================
   §14.2 COVERAGE FLOOR — the one question, checked.

   `opqb-t1-59` — "Iritis typically shows which finding in the anterior
   chamber?" · options Hypopyon / Cells & flare / Shallow chamber / Clear
   chamber · key = Cells & flare.
     · CELLS defined as a sign, sourced           → `uv-5` sign table
     · FLARE defined as protein → plasmoid, sourced → `uv-5` sign table
     · HYPOPYON defined as settled neutrophils, and why it is the sharp
       distractor (severe, not typical)           → `uv-5` sign table
     · SHALLOW CHAMBER as the sign of angle closure, not inflammation
                                                  → `uv-5` cross-ref to `va-14`
     · the active/inactive difference between cells and flare, which is what
       makes cells the answer                     → `uv-6`
   ✅ Answerable from the notes alone.

   ===========================================================================
   §14.3a LAYOUT — audited on the finished file, not asserted. Every bold lead
   in both chapters carries a `:` or `—` inside its first 44 characters, or is
   itself ≤44 characters, so `mdLead()` anchors all of them. No bold-led
   paragraph exceeds 55 words. No nested bullets. One `Src:` line per section.
   Both `intro` strings are under 50 words.
*/

var THEORY_DRAFT = {

  "op-uvea": {
    "intro": "The uvea is the eye’s vascular middle coat, and nearly all its pathology is one disease — uveitis — sorted by which of the three parts is inflamed. Anterior is three-quarters idiopathic, unilateral and painful; posterior is painless and mostly infective.",
    "sections": [

      {
        "id": "uv-1",
        "w": "must",
        "h": "The uveal tract, the iris, and the colour of the eye",
        "body": "**The uvea:** the **VASCULAR MIDDLE layer** of the eye — **iris, ciliary body, choroid**, front to back.\n\n### The iris\n- **What it is:** the **anterior-most** part, and what colours the eye.\n- **Its aperture:** the **pupil**, regulating the light that enters.\n- **Why pigment matters:** heavy iris pigment **blocks light**, restricting entry to the pupil alone.\n- **Two layers:** the **iris STROMA** in front — pigmented, **NO epithelium**, holding **sphincter and dilator pupillae** — and the **iris PIGMENT EPITHELIUM** behind it.\n- **The iris root:** the outer edge, **attached to the sclera**, **continuous with the ciliary body** behind.\n- **⚠️ The drain sits in front of it:** the **TRABECULAR MESHWORK**, so **iris disease often has important effects on IOP**.\n- **The second drain:** iris plus **anterior ciliary body** give the **UVEOSCLERAL pathway**.\n- **Surface markings:** **pupillary zone** inside, **ciliary zone** outside, the **COLLARETTE** — the thickest part — between them; **crypts** lie between the **dilator** bundles.\n- **Figure-only:** **contraction** and **radial furrows**, labelled on the photographs and in no prose.\n- *Defect note: the book heads this list \"two major regions\" and prints three items, the third being the collarette.*\n\n### Iris colour\n- **The range:** brown, hazel, green, grey, blue.\n- **Albinism:** colour from a **LACK of pigmentation** — a **pinkish-white** iris.\n- **Heterochromia:** **COMPLETE**, one iris differing from the other; **PARTIAL**, part of one differing from its remainder.\n- **⚠️ What it can indicate:** **congenital HORNER · chronic IRITIS · diffuse IRIS MELANOMA** — or nothing at all.\n\n*Pupil assessment and Horner’s heterochromia: `pup-1`–`pup-3`, `orb-4`. Outflow pathways: `glc-2`, `glc-3`. Iris melanoma is `op-onc`’s — row filed.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.10 pp.131–132",
        "qs": []
      },

      {
        "id": "uv-2",
        "w": "must",
        "h": "The ciliary body and the choroid — the anatomy the diseases need",
        "body": "### The ciliary body\n- **What it is:** the **MIDDLE** part — **iris root** in front, **choroid** behind.\n- **Where it sits:** a **ring-shaped thickening** between the **posterior chamber** and the **vitreous**.\n- **Contents:** blood vessels, connective tissue, **ciliary muscle**.\n- **Two parts:** **pars PLICATA** anteriorly · **pars PLANA** posteriorly.\n- **⚠️ The secreting cell:** the **NON-PIGMENTED epithelium of the pars plicata** makes the **aqueous humour**.\n- **The ciliary muscle:** contracts → **zonules relax** → **lens more convex** → near focus (**accommodation**); relaxes → zonules taut → lens flattens → far focus.\n- **Three functions:** **accommodation · aqueous production · zonular attachment**, keeping the lens in place.\n- **Figure-only:** the **circular, longitudinal and radial** fibre orientations and the **SUPRACILIARY LAMINA** are labelled and never written.\n\n### The choroid\n- **What it is:** the **most POSTERIOR** part, **between retina and sclera**, feeding the **outer retina**.\n- **Four layers, outwards in:** **large vessels** → **medium vessels** → **CHORIOCAPILLARIS** → **BRUCH’S MEMBRANE**, the innermost.\n- **⚠️ Why Bruch’s matters:** the **RPE’s basement membrane is part of it**, so RPE disease and choroidal disease are one problem.\n- **Figure-only:** **HALLER’S** = large vessels, **SATTLER’S** = medium (printed \"Settler’s\"); Bruch’s five-part substructure is drawn, never written.\n- **Function one — nutrition and gas exchange:** direct for the uvea; indirect for the **outer retina, sclera and lens**, which have **no blood supply**.\n- **Function two — light absorption:** improves **retinal-image contrast**, cutting internal reflection and light coming through the sclera.\n\n*Accommodation: `ref-12`, `ast-7`. Aqueous and outflow: `glc-3`, `glc-2`. Bruch’s in AMD and choroidal rupture: `ins-7`, `rd-9`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.10 pp.132–133",
        "qs": []
      },

      {
        "id": "uv-3",
        "w": "must",
        "h": "Uveitis — what it is, and the classification everything hangs on",
        "body": "- **Uveitis:** inflammation involving **one, two or all three** parts of the uveal tract.\n- **Cause, most often:** **IDIOPATHIC** — otherwise **autoimmune, infectious or malignant**.\n- **⚠️ The book’s status line:** *\"It must be managed by an ophthalmologist.\"*\n\n|Type|What is inflamed|\n|---|---|\n|**1. ANTERIOR** — iritis / iridocyclitis|**iris ± ciliary body**|\n|**2. INTERMEDIATE** — pars planitis, cyclitis|**vitreous and peripheral retina**|\n|**3. POSTERIOR** — choroiditis / chorioretinitis|**choroid ± retina**|\n|**4. PANUVEITIS**|**all three parts simultaneously**|\n\n- **⚠️ The classification is ANATOMICAL:** where, not why — the same organism can produce any of the four.\n- **⚠️ And it is the only one given:** there is **no granulomatous vs non-granulomatous** split in the twelve pages. \"Granulomatous\" appears only inside the VKH and sympathetic-ophthalmia definitions.\n- **The objectives flowchart disagrees:** it draws **panuveitis as a SIBLING of uveitis**, where the prose lists it as item 4. Recorded as printed.\n\n*Red eye: `red-8`. Acute visual loss: `acu-1`. Secondary open-angle glaucoma: `glc-10`. Inflammatory pupillary membrane: `wht-6`. Systemic associations: `sys-9`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.10 pp.130, 133",
        "qs": []
      },

      {
        "id": "uv-4",
        "w": "must",
        "h": "Anterior uveitis — the causes, and the child who has no symptoms",
        "body": "- **Anterior uveitis:** inflammation of the **iris (iritis)**, **usually with cyclitis** — the ciliary body — hence **iridocyclitis**.\n- **Laterality: usually UNILATERAL.**\n\n### Aetiology\n\n|Group|Members|\n|---|---|\n|**IDIOPATHIC — 75 % of cases**|—|\n|**Connective tissue, HLA-B27**|**ankylosing spondylitis · psoriatic arthritis · inflammatory bowel disease** (ulcerative colitis, Crohn’s)|\n|**Connective tissue, NON-HLA-B27**|**juvenile idiopathic arthritis**|\n|**Infectious**|**syphilis · TB · toxoplasmosis · HSV · HZV**|\n|**Other**|**sarcoidosis** · **TRAUMA — the commonest cause of NON-idiopathic iridocyclitis** · following ocular surgery|\n\n- **⚠️ The two numbers asked:** **75 % idiopathic**, and **trauma leads everything that is not**.\n\n### ⚠️ JIA and the silent eye — supplied\n*Not taken from the course material. The book names JIA twice and prints no screening rule; `L23` stops mid-sentence at \"Patients who have JIA, especially the pauciarticular form,\" and `sys-9` recorded the hole rather than invent it.*\n- **⚠️ Why a schedule exists:** JIA uveitis is **CHRONIC and ASYMPTOMATIC** — a **WHITE, PAINLESS eye**, with nothing to bring the child in.\n- **The sourced numbers:** **~10 %** of all JIA patients get iritis; **20–30 %** of the **pauciarticular** form (`sys-9`).\n- **Highest risk:** **ANA-POSITIVE · oligoarticular · young onset · female** *(not in course material)*.\n- **The intervals, supplied:** slit-lamp **3-monthly** at high risk, **6-monthly** at intermediate risk, **12-monthly** in systemic-onset JIA, for years after the arthritis quietens *(not in course material)*.\n- **⚠️ What it prevents:** **band keratopathy · complicated cataract · secondary glaucoma**. Untreated, the child presents with the complication.\n\n*Band keratopathy in full: `cor-16`. The JIA percentages and the autoimmune associations: `sys-9`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.10 p.134. The screening intervals and risk factors are supplied and tagged",
        "qs": []
      },

      {
        "id": "uv-5",
        "w": "must",
        "h": "Anterior uveitis — the symptoms, the seven signs, and a pressure that goes both ways",
        "body": "### Symptoms\n- **PHOTOPHOBIA:** intolerance of ordinary illumination, from **reactive SPASM of the inflamed iris muscles**.\n- **Ocular pain:** with **globe tenderness** and **brow ache** — ciliary muscle spasm.\n- **Lacrimation · red eye · decreased vision.**\n\n### Signs\n\n|Sign|What it is|\n|---|---|\n|**PERILIMBAL (ciliary) injection**|with a **VIOLACEOUS hue**|\n|**MIOSIS — an EARLY sign**|with a **SLUGGISH** light reaction|\n|**AC CELLS**|**leukocytes in the aqueous**, from inflammation with increased vascular permeability|\n|**AQUEOUS FLARE**|**PROTEIN** circulating in the aqueous; the viscid result is **PLASMOID AQUEOUS**|\n|**KERATIC PRECIPITATES (KPs)**|clumps of **WBCs on the corneal ENDOTHELIUM**|\n|**HYPOPYON**|**neutrophils and exudate collected in the INFERIOR anterior chamber**|\n|**Decreased vision**|—|\n\n- **⚠️ Cells and flare make it:** a hypopyon is the exclamation mark — the cell load is heavy enough to **sediment**, meaning severe or infective disease, not typical iritis.\n- **⚠️ A shallow chamber is not a sign here:** that is **angle closure**, separated at the penlight and not on redness — the causes are in `va-14`.\n\n### ⚠️ The IOP goes both ways\n- **Usually DOWN:** ciliary body inflammation cuts aqueous production — **\"ciliary body shutdown\"**.\n- **Sometimes UP:** **secondary inflammatory glaucoma**, by **TRABECULITIS** as in HSV or HZV iritis, or by **plasmoid aqueous and large circulating WBCs obstructing the meshwork**.\n- **⚠️ So a normal pressure excludes nothing**, and a LOW one is as much a sign as a high one.\n\n*AC contents and the shallow/deep table: `va-14`. Ciliary flush: `red-8`. KPs: `cor-5`, `red-3`. Hypopyon in keratitis and endophthalmitis: `cor-3`, `cts-6`. The plasmoid mechanism is already written in `glc-10` and is not re-derived here.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.10 pp.134–135",
        "qs": [
          "opqb-t1-59"
        ]
      },

      {
        "id": "uv-6",
        "w": "must",
        "h": "Grading cells and flare — the whole scheme, supplied",
        "body": "*⚠️ Not taken from the course material, and the absence is verified, not assumed: neither the book nor any of the 27 cached decks prints a grading scheme — no SUN classification, no cell grade, no flare grade, no vitreous haze grade, no onset or duration terms. Supplied because grading is how uveitis activity is recorded and followed.*\n\n- **The beam:** a **1 × 1 mm slit**, full brightness, high magnification, angled obliquely into the anterior chamber; count the cells crossing it.\n\n|Grade|**CELLS** per 1 × 1 mm field|**FLARE**, judged on iris and lens detail|\n|---|---|---|\n|**0**|<1|none|\n|**0.5+**|1–5|—|\n|**1+**|6–15|faint|\n|**2+**|16–25|moderate — detail still clear|\n|**3+**|26–50|marked — detail hazy|\n|**4+**|>50|intense, with **fibrin or plastic aqueous**|\n\n- **⚠️ They mean different things:** **cells = ACTIVE inflammation now**; **flare = a leaky blood–aqueous barrier**, which can persist for years after the disease is quiet.\n- **⚠️ So treatment is titrated on cells:** chasing flare with steroid is treating a scar.\n- **By duration:** **acute** — sudden, ≤3 months · **recurrent** — repeated episodes with ≥3 quiet months off treatment · **chronic** — persistent, relapsing within 3 months of stopping.\n\n*The signs as the book prints them: `uv-5`. Cells and flare as anterior-chamber contents: `va-14`.*\n\nSrc: no source — supplied and tagged throughout, against a verified absence across ophthalmology.pdf (HEALIX) ch.10 pp.130–141",
        "qs": []
      },

      {
        "id": "uv-7",
        "w": "must",
        "h": "Anterior uveitis — five complications and four treatment steps",
        "body": "### Complications\n- **Secondary glaucoma.**\n- **POSTERIOR SYNECHIAE:** giving an **irregular iris and pupil** *(the book marks this **Tutorial** — its own instruction is \"study in round & skip in final\")*.\n- **Complicated cataract.**\n- **CALCIFIC BAND KERATOPATHY:** if the iritis becomes **CHRONIC**, and **especially in juvenile idiopathic arthritis**.\n- **Macular oedema:** also with chronicity.\n\n### Treatment\n\n|Step|What it is for|\n|---|---|\n|**1. STEROIDS** — topical, periocular, systemic|**control the inflammation**, **cut the complication rate**|\n|**2. CYCLOPLEGIC–MYDRIATIC drops**|relieve **photophobia and pain** from iris and ciliary spasm · *and prevent and break recently formed posterior synechiae (**Tutorial** — skip in final)*|\n|**3. ANTIGLAUCOMA drugs** if the IOP rises|**⚠️ AVOID PROSTAGLANDIN ANALOGUES**|\n|**4. CONTROL THE CAUSE**|after a **systemic work-up**, especially in **recurrent** cases|\n\n- **⚠️ The prescribing trap:** **prostaglandin analogues are avoided** in uveitic glaucoma. The instruction is printed; the reason — pro-inflammatory, and they worsen macular oedema — is *not in course material*.\n- **Also boxed:** **treatment of the secondary ocular complications** *(**Tutorial** — skip in final)*.\n- **⚠️ What is never printed:** **no dose, no drop frequency, no follow-up interval** anywhere in the chapter.\n\n*Festooned pupil: `pup-1`. Complicated cataract: `cat-3`. Band keratopathy with EDTA chelation: `cor-16`. Uveitic and steroid-induced secondary glaucoma: `glc-10`; the steroid-responder figure is in `op-red-mgmt`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.10 p.135",
        "qs": []
      },

      {
        "id": "uv-8",
        "w": "must",
        "h": "Intermediate uveitis — pars planitis, and the two signs named after snow",
        "body": "- **What it is:** intraocular inflammation focused on the **VITREOUS and PERIPHERAL RETINA**.\n- **What it incorporates:** **pars planitis · posterior cyclitis · vitritis**.\n\n### Who gets it\n- **Age: 15 to 40 years**, and it is **20 % of all paediatric uveitis**.\n- **Geography:** usually **idiopathic in developed countries**, **infectious in developing** ones.\n- **Infectious causes:** **TB · syphilis · toxoplasmosis · toxocariasis**.\n- **Non-infectious causes:** **sarcoidosis · MULTIPLE SCLEROSIS**.\n\n### Clinical picture, complications, treatment\n- **Onset: typically INSIDIOUS** — no pain, no redness to force a visit.\n- **Laterality:** starts **unilateral**, becomes **bilateral but ASYMMETRICAL**.\n- **Symptoms: FLOATERS** and blurred vision.\n- **⚠️ Anterior uveitis coexists in ~50 %:** so an anterior picture does not exclude it.\n- **Vitreous:** **cells**, and **condensations with a hazy vitreous body**.\n- **SNOWBALLS:** aggregates of inflammatory cells in the **INFERIOR VITREOUS**.\n- **SNOW BANKING:** **grey-white FIBROVASCULAR plaques on the INFERIOR PARS PLANA** — the sign it is named for.\n- **Complications: cataract · glaucoma · MACULAR OEDEMA in 30 %.**\n- **Treatment, in order:** treat the cause → **steroids** (topical, periocular, **intravitreal**, systemic) → **immunosuppressives** in non-responders and as **steroid-sparing** agents → **surgery: vitrectomy, cryotherapy, laser photocoagulation**.\n- **⚠️ Two routes anterior uveitis skips:** **INTRAVITREAL** steroid and **VITRECTOMY**. The inflammation is behind the lens, so the drug has to be.\n\n*Multiple sclerosis is `op-neuro`’s. Cystoid macular oedema is `op-ret`’s — row filed. Vitrectomy as an operation: `rd-7`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.10 p.136",
        "qs": []
      },

      {
        "id": "uv-9",
        "w": "must",
        "h": "Posterior uveitis — painless, mostly infective, and one that is not inflammation at all",
        "body": "- **What it is:** inflammation of the **CHOROID**, with or without the **retina**.\n\n### Aetiology\n\n|Group|Members|\n|---|---|\n|**Bacterial**|**TB · syphilis · leprosy**|\n|**Viral**|**HSV · HZV · CMV**, especially in **acquired immunodeficiency syndrome**|\n|**Fungal**|**histoplasmosis · candidiasis**|\n|**Parasitic**|**TOXOPLASMOSIS — the commonest** · toxocariasis|\n|**Non-infectious**|systemic **immunosuppression**, predisposing to the above · autoimmune — **BEHÇET’S DISEASE** (oral ulcers, genital ulcers, posterior uveitis)|\n|**⚠️ MASQUERADE SYNDROME**|a **malignancy in disguise** — **retinoblastoma · choroidal melanoma · leukaemia · lymphoma**|\n\n### Clinical picture, complications, treatment\n- **⚠️ PAINLESS diminution of vision:** the single discriminator against anterior uveitis.\n- **Floaters**, with **vitreous haziness, cells and opacities** · **± hypopyon**.\n- *Boxed: **vasculitis**, and **spill-over anterior uveitis is common** (**Tutorial** — skip in final).*\n- **Complications: MACULAR OEDEMA · VITRITIS · VISUAL FIELD DEFECTS.**\n- *Boxed as further complications: **epiretinal membrane · choroidal neovascularization · retinal detachment** (**Tutorial** — skip in final).*\n- **Treatment:** **steroids** — topical, periocular, intravitreal, systemic — and **treatment of the cause**.\n- *Boxed: **immunosuppressives** in non-responders and as steroid-sparing agents · **vitrectomy, as in tractional retinal detachment** (**Tutorial** — skip in final).*\n- **⚠️ Investigate before immunosuppressing:** a masquerading tumour given steroid gets worse, and the delay costs more than the eye.\n\n*Masquerade malignancies as tumours are `op-onc`’s — row filed; retinoblastoma’s treatment is in `wht-7`. Epiretinal membrane and CNV: `ins-7`, `dr-11`. Exudative and tractional detachment: `rd-8`. **Behçet’s appears nowhere else in this module.***\n\nSrc: ophthalmology.pdf (HEALIX) ch.10 p.137",
        "qs": []
      },

      {
        "id": "uv-10",
        "w": "must",
        "h": "Panuveitis, and the four types side by side",
        "body": "- **Panuveitis, as printed:** *\"inflammation of all uveal components of the eye with localization to a specific part of the uvea\"*.\n- *Defect note: the wording is internally odd — all components, yet localised — and is printed **verbatim twice**, on p.138 and again in the p.139 table. It is the book’s settled wording, not a typo.*\n- **Clinical picture:** the **SUMMATION** of anterior, intermediate and posterior uveitis.\n\n### Aetiology — the three infection routes\n\n|Route|How the organism arrives|\n|---|---|\n|**EXOGENOUS**|introduced through a **perforating wound or ulcer**|\n|**SECONDARY**|spread **from another ocular tissue** — cornea, sclera, retina|\n|**ENDOGENOUS**|**bloodborne from another organ**: bacterial (**syphilis, TB**) · viral (**mumps, smallpox, influenza**) · protozoal (**toxoplasmosis**)|\n|**Non-infectious**|autoimmune (**Behçet’s**) · neoplastic (**masquerade**) · **trauma**|\n\n- **Treatment:** **corticosteroids · cycloplegics · systemic immunosuppression · treatment of the underlying disease.**\n- *Boxed, on uveitis treatment generally: **corticosteroids are the mainstay for NON-infectious causes**, and although infection is an uncommon cause, **rule it out before starting immunosuppressive therapy** (**Tutorial** — skip in final).*\n\n### ⚠️ The four types side by side\n\n|  |**ANTERIOR**|**INTERMEDIATE**|**POSTERIOR**|**PAN**|\n|---|---|---|---|---|\n|**Laterality**|**unilateral**|unilateral → **bilateral, asymmetrical**|—|—|\n|**Symptoms**|**PAINFUL**, red, photophobic; lacrimation; ↓vision|**FLOATERS**, blurring, **insidious**, painless|**PAINLESS** ↓vision, floaters|summation|\n|**Signs**|**KPs · cells & flare · miosis · hypopyon · ciliary injection**|**SNOWBALLS · SNOW BANKING** · vitreous cells|**vitreous haze, cells, opacities** ± hypopyon|summation|\n|**Complications**|2ry glaucoma · **synechiae** · cataract · **band keratopathy** · macular oedema|cataract · glaucoma · **macular oedema 30 %**|**macular oedema · vitritis · FIELD DEFECTS**|*(blank in the book)*|\n|**Treatment**|steroid · **cycloplegic** · antiglaucoma (**no prostaglandins**)|steroid · **immunosuppressive** · **surgery**|steroid|steroid · cycloplegic · **systemic immunosuppression**|\n\n- **⚠️ All four also treat the cause:** left out of the grid above only because it does not discriminate between them.\n- **⚠️ The aetiology row is MERGED** in the book across posterior, intermediate and pan into one cell reading **\"infectious / non-infectious\"**. Only anterior gets its own causes — `uv-4`.\n- *Defect note: the printed columns run Anterior, Posterior, Intermediate, Pan — not the teaching order — and compress p.135’s whole pressure teaching into \"IOP ↓ or ↑\". Reordered here; read `uv-5` for the pressure.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.10 pp.138–140",
        "qs": []
      },

      {
        "id": "uv-11",
        "w": "high",
        "h": "VKH and sympathetic ophthalmia — two bilateral granulomatous panuveitides",
        "body": "**What links them:** both are **BILATERAL GRANULOMATOUS PANUVEITIS**, and **trauma separates them**.\n\n### Vogt–Koyanagi–Harada syndrome\n- **What it is:** an **IDIOPATHIC MULTISYSTEM AUTOIMMUNE** disease inflaming **MELANOCYTE-containing tissues** — **uvea, skin, ear, meninges**.\n- **⚠️ All five criteria are required:** **(1)** no history of penetrating ocular trauma · **(2)** absence of other ocular disease entities · **(3)** **BILATERAL GRANULOMATOUS PANUVEITIS** · **(4)** **neurological and auditory** manifestations · **(5)** **skin and adnexa — vitiligo, alopecia, poliosis**.\n- **⚠️ Criterion 1 is the discriminator:** it separates VKH from sympathetic ophthalmia, which is the same picture *after* trauma.\n\n### Sympathetic ophthalmia\n- **What it is:** a **bilateral granulomatous panuveitis after PENETRATING TRAUMA to one eye**.\n- **Mechanism:** **immune sensitisation to MELANIN** or melanin-associated proteins in uveal tissue.\n- **The three findings printed:** **IRIS NODULES · MUTTON-FAT KPs · DISC OEDEMA**.\n- **⚠️ Mutton-fat KPs appear only here** — the anterior-uveitis section never uses the term.\n- **⚠️ What is not printed:** no latent period, no incidence, no enucleation rule, and neither **exciting** nor **sympathising** eye. Those, and the 2 weeks–3 months interval, are supplied in `trm-9`.\n- **⚠️ And for VKH:** no treatment, no staging, no sunset-glow fundus.\n\n*The open globe and its repair: `trm-9`. VKH as a cause of exudative retinal detachment: `rd-8`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.10 p.140; `trm-9`, cited only",
        "qs": []
      },

      {
        "id": "uv-12",
        "w": "know",
        "h": "The iris-disease page — seven conditions listed, pictured, never defined",
        "body": "*⚠️ The whole of printed p.141 is headed **\"This page is from Tutorial\"** — the book’s own mark that it is round material, skippable in the final. It is headings and photographs only: seven iris conditions are named and shown, and **not one is defined anywhere in the chapter**.*\n\n**The book’s list:** heterochromia · **synechiae** · **tremulous iris (iridodonesis)** · **iris defects** — iridectomy, iridodialysis, coloboma, aniridia · **rubeosis iridis**.\n\n### Five of the seven are already written\n*Cross-references only — none is re-taught here. **Heterochromia:** `uv-1`, and as a Horner sign in `pup-2`/`orb-4`. **Posterior synechiae:** `pup-1`, the festooned pupil, plus `va-12` and `uv-7`. **Iridodonesis**, the tremulous iris of aphakia: `cts-7`, named again in `ref-11`. **Iridodialysis**, the root torn away leaving a D-shaped peripheral gap: `va-12`, `trm-7`, `rd-9`. **Aniridia**, PAX6 and WAGR: `sys-13`, with its developmental glaucoma in `glc-16`. **Rubeosis iridis:** `va-12` for the definition, `vsc-5` for the retinal ischaemia, `glc-15` for the glaucoma.*\n\n- **ANTERIOR SYNECHIAE:** the iris **adherent to the CORNEA**, shown in a slit photograph and defined by neither the book nor the module *(definition not in course material)*.\n\n### The two the module has never carried — supplied\n- **IRIS COLOBOMA:** a **wedge-shaped iris defect** from failed closure of the **embryonic fissure**, classically **INFERONASAL** — the **\"keyhole\" pupil**; it may extend back to ciliary body, choroid and disc *(not in course material)*.\n- **SURGICAL IRIDECTOMY:** a full-thickness piece of iris deliberately removed — **peripheral**, to bypass pupil block, or **sector**, for access. **A defect the surgeon makes**, not a disease *(not in course material)*.\n\nSrc: ophthalmology.pdf (HEALIX) ch.10 p.141 — the whole page is marked Tutorial. Coloboma and iridectomy are supplied and tagged; the rest are cross-references",
        "qs": []
      }

    ]
  },

  "op-sclera": {
    "intro": "The sclera is five-sixths of the eye’s outer coat, and it inflames at two depths. Almost the whole chapter is telling those two apart — and one drop of phenylephrine, at the right concentration, does it.",
    "sections": [

      {
        "id": "scl-1",
        "w": "must",
        "h": "The sclera — what it is, the colour it should be, and the staphyloma",
        "body": "- **The sclera:** the **\"white of the eye\"** — **5/6 of the OUTER FIBROUS protective coat** of the globe; the cornea is the other **1/6**.\n- **Why it is opaque:** **IRREGULARLY distributed collagen bundles**. That irregularity is the whole difference from the cornea.\n- **Continuity:** with the **CORNEA anteriorly**, and with the **DURA MATER covering the optic nerve posteriorly**.\n- **The episclera:** a thin layer of **VASCULARISED connective tissue** over the sclera’s outer surface — and where this chapter’s first disease sits.\n\n### Normal scleral colour\n*The book tags this sub-section **(++ Additional)** — a second marker, different from the Tutorial marker, and defined nowhere in the front matter. Recorded exactly as printed, not interpreted.*\n\n|Age|Colour|Why|\n|---|---|---|\n|**Adult**|**WHITE**|**scattering of all wavelengths** by the dense irregular collagen|\n|**Child**|**BLUISH**|**extremely thin sclera**, letting the choroid show through|\n|**Older age**|slightly **YELLOWISH**|**deposition of fat**|\n\n### Blue sclera, and staphyloma\n- **Blue sclera:** bluish discoloration from **THINNING and consequent transparency of scleral collagen**, allowing increased visibility of **underlying choroidal pigment**.\n- **The two named associations:** **MARFAN SYNDROME · OSTEOGENESIS IMPERFECTA**.\n- **STAPHYLOMA:** a **localised protrusion of the sclera LINED BY UVEAL TISSUE** — which is exactly why it is **blue** (Fig 7-1).\n- **⚠️ One mechanism, two appearances:** in both, uvea is being seen through sclera that is too thin. **Blue sclera is diffuse; a staphyloma is a bulge.**\n- **⚠️ No staphyloma is classified:** and no cause is given beyond \"localised protrusion\". The **posterior / intercalary / ciliary / equatorial** sites are supplied in `ref-9`.\n\n*⚠️ Reconciliation note: `ref-9` tags the staphyloma **definition** as *(not in course material)* because it returned nowhere in the module. **This page prints it, so the definition is now SOURCED** and that tag can be retired; the four site types stay supplied. `ref-9` also carries posterior staphyloma as a complication of pathological myopia.*\n\n*Marfan is named once module-wide (`cat-10`) and osteogenesis imperfecta nowhere; a row is filed to `op-systemic`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.7 p.97",
        "qs": []
      },

      {
        "id": "scl-2",
        "w": "must",
        "h": "Episcleritis — the entity, its two types, and its causes",
        "body": "- **Episcleritis:** inflammation of the **EPISCLERAL tissues**.\n- **Character: relatively common, BENIGN, SELF-LIMITED** — a red eye that is not an emergency.\n- **Laterality: 2/3 of cases are UNILATERAL.**\n- **Sex: more common in females, 3:1.**\n- **⚠️ When it stops being trivial:** **RECURRENT cases may signify an underlying systemic inflammatory disease**.\n\n### The two clinical types\n\n|Type|What is seen|Onset and course|\n|---|---|---|\n|**NODULAR**|a **discrete ELEVATED area** of inflamed episcleral tissue|**less acute onset, more prolonged course**|\n|**SIMPLE — MORE COMMON**|**vascular congestion in the ABSENCE of an obvious nodule**|acute onset|\n\n- **Simple divides again:** **SECTORAL in 2/3** of cases, **DIFFUSE in 1/3**.\n- *⚠️ Divergence worth knowing: `red-7`’s grid, written from `L37`, gives episcleritis as **sectoral** and scleritis as localised **or diffuse**. The book prints diffuse episcleritis in a third of simple cases, so sectoral is the commonest appearance and not the only one. Both are recorded; neither is corrected.*\n\n### Causes\n- **IDIOPATHIC — most cases.**\n- **Collagen vascular disease:** **rheumatoid arthritis · systemic lupus erythematosus · seronegative spondyloarthropathies**.\n- **Vasculitides:** **polyarteritis nodosa · temporal arteritis · BEHÇET’S DISEASE**.\n- **Inflammatory bowel disease:** **Crohn’s disease · ulcerative colitis**.\n- **Also: dermatologic (ROSACEA) · metabolic (GOUT) · atopy.**\n- **Infections: herpes zoster · herpes simplex · syphilis.**\n\n*Episcleritis after herpes zoster ophthalmicus: `cor-6`. In the red-eye cause list: `red-1`. **Behçet’s and temporal arteritis appear nowhere else in this module** — `temporal arteritis` and `ESR` both return zero, a hole already recorded against `op-acute`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.7 p.98",
        "qs": []
      },

      {
        "id": "scl-3",
        "w": "must",
        "h": "Episcleritis — the clinical picture, and a disease that treats itself",
        "body": "### Symptoms\n- **Red eye — ACUTE onset in simple episcleritis, GRADUAL in nodular.**\n- **Discomfort, photophobia or TENDERNESS.**\n- *Boxed: **no discharge**; if any is present it is **minimal and watery** (the book marks this **Tutorial** — its own instruction is \"study in round & skip in final\").*\n- *⚠️ Divergence: `va-12` calls episcleritis \"usually painless\". That gloss is tagged as supplied there, and the book disagrees — it prints discomfort, photophobia, tenderness, and **tender** nodules. Recorded, not corrected.*\n\n### Signs\n- **SECTORAL or DIFFUSE injection.**\n- **Chemosis.**\n- **⚠️ Tender episcleral NODULES:** **EASILY MOBILISED over the sclera** — the bedside manoeuvre, and the one scleritis does not permit.\n- **The 2.5 % test:** **phenylephrine 2.5 %** blanches the conjunctiva in **conjunctivitis** and the hyperaemia disappears; **not so in episcleritis**. Full table in `scl-6`.\n\n### Management\n- **⚠️ It is SELF-LIMITED** and usually clears on its own **without any treatment**.\n- **For pain or discomfort:** supportive measures — **cold compresses**, **iced artificial tears** — or medical therapy.\n- **Oral NSAIDs are the main line: IBUPROFEN 800 mg three times daily** — the only dose printed in the chapter.\n- **Topical steroids:** prescribed and monitored **by an ophthalmologist**.\n- **Recurrent attacks:** may require **systemic evaluation**, and **treating the associated systemic disease helps control the eye**.\n- *Boxed: **topical anti-inflammatory agents and lubricants** (**Tutorial** — skip in final).*\n\n*Against keratitis, conjunctivitis and dry eye: `cor-9`. Against scleritis on `L37`’s axes: `red-7`. The full grid from this book: `scl-7`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.7 pp.98–99",
        "qs": []
      },

      {
        "id": "scl-4",
        "w": "must",
        "h": "Scleritis — the classification, and the severe form that does not hurt",
        "body": "- **Scleritis:** inflammation of the sclera, presenting as a **PAINFUL RED EYE**, with or without vision loss.\n\n### The classification — the whole of it\n\n|Level|Where, and what it divides into|\n|---|---|\n|**1. ANTERIOR — MORE COMMON**|**anterior to the INSERTION OF THE RECTUS MUSCLES**; **DIFFUSE · NODULAR · NECROTIZING** in appearance|\n|**2. POSTERIOR — RARE**|**posterior to the insertion of the rectus muscles**|\n\n- **⚠️ NECROTIZING anterior scleritis:** the **most severe form** — **severe pain**, **extreme scleral tenderness**, **with or without necrosis and EXPOSURE OF THE CHOROID**.\n- **SCLEROMALACIA PERFORANS:** a **RARE form of necrotizing anterior scleritis WITHOUT PAIN** (Fig 7-4) — a thinned, translucent grey-blue patch with uvea showing through, in an eye that looks quiet.\n- **⚠️ The trap it sets:** scleritis is defined by pain, and **its worst form is painless**. A white, quiet, thinning sclera in a rheumatoid patient is scleromalacia perforans until proved otherwise.\n- **⚠️ Diffuse and nodular are NAMED ONLY** — the book gives neither any features, unlike the necrotizing form. That absence is verified, not assumed.\n\n### Posterior scleritis\n- **Associations:** **SEROUS RETINAL DETACHMENT**, **loss of vision**, and **PAIN ON EYE MOVEMENT**.\n- **Ultrasound:** **scleral thickening ± retinal detachment** *(**Tutorial** — skip in final)*.\n- **The \"T SIGN\":** a **severely thickened sclera** with fluid tracking into Tenon’s space, alongside **anterior nasal choroidal detachments**. **⚠️ Printed only in a figure caption** — the prose never names it.\n- *All **Tutorial**, skip in final: anterior scleritis is more common **in middle-aged females** · **± a history of autoimmune disease (rheumatoid arthritis)** · the **bluish-violet discoloration** is **engorgement of the DEEP EPISCLERAL PLEXUS** plus **SCLERAL THINNING**.*\n\n*This is the module’s only account of the scleritis classification: `scleromalacia`, `necrotising`/`necrotizing` and `posterior scleritis` all returned zero across the theory file before it. `red-7` carries the two entities and their `L37` discrimination; posterior scleritis appears in `orb-18`’s acute-orbit differential; serous and exudative detachment are `rd-8`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.7 p.99",
        "qs": []
      },

      {
        "id": "scl-5",
        "w": "must",
        "h": "Scleritis — causes, clinical picture, treatment, and a prognosis that is not ocular",
        "body": "### Causes\n- **RHEUMATOID ARTHRITIS — the most common association.**\n- **Other collagen vascular disease:** **systemic lupus erythematosus · seronegative spondyloarthropathies**.\n- **Also: metabolic (GOUT) · infections (TB, syphilis, herpes zoster) · chemical or physical injury · idiopathic.**\n- *⚠️ `red-7` also names **granulomatosis with polyangiitis** as a scleritis association. That comes from `L37`; this book’s cause list does not print it. Neither list is the complete one.*\n\n### Clinical picture\n- **⚠️ Onset is GRADUAL:** ocular pain with globe tenderness — and **PAIN is the most important indicator of disease progression**.\n- **Red eye**, localised or diffuse; **decreased vision may be present**.\n- **The colour:** a characteristic **VIOLET-BLUISH hue**, with **scleral oedema** and **overlying chemosis**.\n- **⚠️ NO BLANCHING with phenylephrine 10 %** — the printed differentiation from episcleritis.\n- **In the anterior segment:** associated **keratitis with corneal thinning**, **uveitis**, and **TRABECULITIS with an elevated IOP**.\n- **In posterior scleritis: SEROUS RETINAL DETACHMENT.**\n- **⚠️ Examine the patient, not the eye:** **non-ocular signs are important**, because the systemic association usually is the disease.\n\n### Management\n- **Investigations: OCULAR B-SCAN ULTRASONOGRAPHY and orbital MRI**, used to detect **posterior** scleritis.\n- **⚠️ VISION-THREATENING:** it requires **URGENT referral** to an ophthalmologist.\n- **Drugs, in the book’s order:** **oral NSAIDs** → **systemic (oral or intravenous) corticosteroids**, topical steroid less commonly → **immunomodulators: METHOTREXATE · CYCLOPHOSPHAMIDE · MYCOPHENOLATE · CYCLOSPORIN · TNF-α inhibitors** (printed \"TNF-X\"), which control the systemic disease as well as the ocular one.\n- **Surgery:** for **scleral perforation**, or **excessive scleral thinning with a high risk of rupture**.\n\n### Prognosis\n- **Mild or moderate scleritis:** patients **usually maintain excellent vision**.\n- **Visual loss tracks the SEVERITY** of the scleritis.\n- **Course:** may be **active for several months or years** before long-term remission.\n- **⚠️ NECROTIZING scleritis is different:** a **high incidence of visual loss AND an INCREASED MORTALITY RATE**. The eye is reporting a systemic vasculitis, which is why the prognosis is not an ocular one.\n\n*Trabeculitis as a route to secondary glaucoma: `uv-5`, `glc-10`. Uveitis in full: `op-uvea`. The rheumatoid corneal melt and autoimmune dry eye: `sys-9`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.7 p.100",
        "qs": []
      },

      {
        "id": "scl-6",
        "w": "must",
        "h": "The phenylephrine test — one drop, two concentrations, three answers",
        "body": "**The whole discrimination in six cells,** and it exists nowhere else in this module — `phenylephrine` returns zero across every other chapter.\n\n|  |**Phenylephrine 2.5 %**|**Phenylephrine 10 %**|\n|---|---|---|\n|**Conjunctivitis**|**BLANCHES**|**BLANCHES**|\n|**Episcleritis**|**no blanch**|**BLANCHES**|\n|**Anterior scleritis**|**no blanch**|**no blanch**|\n\n- **How to read it:** the **deeper the vessels, the stronger the drop needed** to constrict them — and **scleral vessels do not blanch at all**.\n- **2.5 %:** separates **CONJUNCTIVITIS** from **EPISCLERITIS**.\n- **10 %:** separates **EPISCLERITIS** from **SCLERITIS**.\n- **⚠️ A negative 2.5 % is not a diagnosis:** it only rules the conjunctiva out. The second drop is what names the disease.\n- *Defect note: the two halves are printed separately and read as a contradiction — p.98 says episcleritis does **not** blanch, and the p.102 grid says it **does**. The p.101 NOTES table resolves them: the concentrations differ. All three statements are recorded as printed and none is corrected.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.7 pp.98, 100, 101, 102",
        "qs": []
      },

      {
        "id": "scl-7",
        "w": "must",
        "h": "Episcleritis against scleritis — the book’s full-page grid",
        "body": "|  |**EPISCLERITIS**|**SCLERITIS**|\n|---|---|---|\n|**Definition**|inflammation of the **EPISCLERAL tissues**|inflammation of the **SCLERAL STROMA** or all layers of sclera|\n|**Incidence**|**MORE common**|less common|\n|**Sex**|**females 3:1**|*(blank in the book)*|\n|**Character**|**self-limited, benign, 2/3 unilateral**|**VISION-THREATENING — urgent referral**|\n|**Clinical types**|**nodular** · **simple** (more common)|**anterior** (more common) · **posterior** (rare)|\n|**Causes**|**IDIOPATHIC**, most cases|**RHEUMATOID ARTHRITIS**, the commonest association|\n|**Symptoms**|red eye, acute (simple) or gradual (nodular) · **irritation, discomfort, photophobia** · **tenderness** · **NO visual affection**|red eye, localised or diffuse · **PAIN** · **decreased vision** may be present · may associate with **uveitis**|\n|**Phenylephrine 10 %**|**BLANCHES**|**does NOT blanch**|\n|**Investigations**|**not needed**|**B-scan ultrasonography and MRI**|\n|**Treatment**|self-limited, usually clears untreated · **oral NSAIDs — ibuprofen 800 mg three times daily**|**urgent referral** · surgery for **scleral perforation** or **thinning at high risk of rupture**|\n|**Prognosis**|**SELF-LIMITED**|mild/moderate keep excellent vision · loss tracks **severity** · **necrotizing: visual loss and increased mortality**|\n\n- **⚠️ Three things decide it:** **PAIN** — irritation against severe · **VISION** — unaffected against threatened · **THE DROP** — blanches at 10 % against does not.\n- **⚠️ All three measure DEPTH:** episcleral vessels are superficial, mobile over the sclera and constrict to phenylephrine; scleral vessels are none of those.\n- **⚠️ One asymmetry to hold:** episcleritis needs a systemic work-up only if it **recurs**; scleritis is a systemic disease from the first attack.\n\n*`red-7` gives the same discrimination from `L37` on different axes — depth, profile, extent, colour — and names **granulomatosis with polyangiitis**, which this book does not. `cor-9` sets episcleritis against keratitis, conjunctivitis and dry eye. The three grids are complementary, not duplicates.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.7 p.102",
        "qs": []
      }

    ]
  }
};
