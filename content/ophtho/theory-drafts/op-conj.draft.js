/* op-conj + op-squint — "Conjunctiva" and "Squint", Ophthalmology.
   Written 2026-08-18 under START-HERE.md §14 (slide-density revision notes),
   §14.1 (budget and page prediction), §14.2 (the two-sided coverage floor),
   §14.3 (telegraphic style), §14.3a (layout and the mdLead() anchor rule) and
   §14.5 (the deferral register), plus content\ophtho\theory-plan.md ("What
   writing the first twelve chapters taught" and the two USER RULINGS of
   2026-08-18). Shape copied from op-uvea.draft.js and op-neuro.draft.js.

   ⚠️ THIS FILE HOLDS TWO CHAPTERS, BOTH WITH EXISTING KEYS in modules.js
   (line 33 `op-conj` "Conjunctiva"; line 98 `op-squint` "Squint"). Neither is
   new; no modules.js registration is needed. This file touches no app\data\*
   file, no MEMORY.md, no resume file and no git.

     `op-conj`    1 linked question  — `opqb-t1-66`
     `op-squint`  6 linked questions — `opqb-t1-43`, `-44`, `-45`, `-53`,
                  `-54`, `opqb-t2-94`

   ⚠️ NO NUMBER IN THIS HEADER IS A MEASUREMENT OF THE FINISHED FILE. Per the
   eleven header faults recorded in §14.1 and theory-plan.md, this header
   states reasoning, sources and deferrals and states NO totals. Every figure
   below is derived from the SOURCE, never from the draft. The hub measures
   body words from disk — canonical W(s.body) over every section, Src: lines
   INCLUDED — and prints the chapters.

   ===========================================================================
   SOURCES, AND ONE THAT THE BRIEF DID NOT NAME

   Primary, both read 2026-08-18 and cached:
     content\ophtho\book\ch06-conjunctiva.txt  printed pp.82–95, 14 pp, 6.5 %
     content\ophtho\book\ch15-squint.txt       printed pp.196–203, 8 pp, 3 %

   ⚠️⚠️ AND THE TWO SQUINT DECKS ARE USED, WHICH THE BRIEF DID NOT MENTION.
   `content\ophtho\lectures\L29) Sqint I.txt` (227 w) and `L30) Squint II.txt`
   (178 w) exist on disk and are NOT empty. Three reasons they are in:
     (1) §14.2's first floor is "everything important the LECTURE states goes
         in" — the deck is the syllabus, the book is the reference (the
         2026-08-18 ruling says exactly this: "The deck is still the authority
         on what was TAUGHT").
     (2) MERGED `mot-1` ALREADY POINTS HERE. Its own aside reads: "`L30)
         Squint II` teaches the same presentation as paralytic squint and adds
         what the book omits … That deck is `op-squint`'s; it is cited here
         and not counted." So L30's words are unspent and are this chapter's.
         That is a REVERSE NOTICE the brief's register list did not carry, and
         it is registered below.
     (3) The decks carry EIGHT things the book does not print at all: the
         apparent / latent / manifest classification · the phoria symptom list
         (asthenopia, intermittent diplopia, distress watching moving objects)
         · phoria treatment (orthoptics, relieving vs exercising prisms) ·
         the three causes of comitant squint · the sensory adaptations
         (confusion, suppression, amblyopia) as a named sequence · the five
         exotropias and four esotropias · **AC/A** and **cross fixation** ·
         and the surgery vocabulary — **recession, resection, transposition**.
         `AC/A`, `orthoptic`, `cross fixation`, `simultaneous perception` and
         `botulinum` all return ZERO across `theory.ophtho.js`.

   ⚠️ CITATIONS ARE THE **PRINTED** PAGE. PDF page = printed + 2, and no PDF
   page appears anywhere in a chapter body. Book Src: lines read
   `ophthalmology.pdf (HEALIX) ch.<N> p.<printed>`; deck lines read `L29`/`L30`.

   ⚠️ NO RENDER WAS COMMISSIONED BY THIS AGENT AND NONE WAS AUTHORISED. Both
   book caches were written by the reading agent from 150 dpi renders (with
   300 dpi re-crops on ch.6 p.86's three captions and ch.15 p.202's two
   figures) and both record their own verified absences page by page. Where
   this file says the book prints nothing, that is the cache's NOT-COVERED
   list, not an inference from silence.

   ===========================================================================
   BUDGET (§14.1). Both terms computed; TERM 2 collapses, as in every
   ophthalmology chapter.

     TERM 1, source words:
       `op-conj`    ch.6  4,962 w of teaching
                    + `L6) Conjunctiva` — 342 w over 66 slides, a photo atlas.
                      **Cited only, NOT counted**: 5.2 w/slide is far under
                      §14.1's "words-per-line under ~2 means a diagram deck"
                      threshold in spirit, and every one of its usable slides
                      is a bare title. Counting 342 words for five entity
                      names would be the arithmetic inflation §14.5 warns of.
       `op-squint`  ch.15 3,306 w of teaching
                    + `L29` 227 w (counted — its own deck, unspent)
                    + `L30` 178 w (counted — `mot-1` declined them expressly)
     TERM 2, 25 × linked questions:
       `op-conj`    25 × 1 =  25  — under the floor
       `op-squint`  25 × 6 = 150  — under the floor

     budget = max(TERM 1, TERM 2), floor 600, cap 3,000:
       `op-conj`    3,000 (TERM 1 capped)
       `op-squint`  3,000 (TERM 1 capped)

   ⚠️ THE OPERATIVE CEILING GOVERNS BOTH, NOT THE BUDGET. §14.1's measured
   ceiling is ~2,400 body words / ~10 printed pages. At `pages ≈ words ÷ 240`
   the raw sources would print at **20.7 pp** (`op-conj`) and **13.8 pp**
   (`op-squint`). Both are therefore written DOWN — `op-conj` to roughly half
   its source, `op-squint` to a little over two thirds.

   ⚠️ AND THE ÷240 ESTIMATOR HAS OVER-PREDICTED EVERY TIME IN THIS MODULE —
   by 5, 2, 2, 1.5, 2.3, 2.1 and 3 pages. The page count is the hub's to
   measure. Nothing was cut to reach a number.

   ⚠️⚠️ THE BILL, STATED RATHER THAN PAID BY DELETING SOMETHING (§14.1).
   Neither chapter is expected to sit far under the ~2,400-word ceiling, and
   the reasons are itemisable rather than vague:

     `op-conj` — a SURVEY chapter, the §14.1 failure mode where both terms
       agree because both are low. It carries **eleven distinct entities**
       (seasonal/perennial, VKC, AKC, viral, acute bacterial, adult
       chlamydial, trachoma, pinguecula, pterygium, subconjunctival
       haemorrhage, plus the five lecture-only names) at §14.1's measured
       ~90-word entity floor = ~990 w before a single table — and it has
       **five tables**: the 4-column discharge grid (8 cells), the
       true/pseudo-membrane grid (6 cells), the viral-presentation grid
       (10 cells), the WHO five-grade box, and the p.94 DD grid at 5 × 3
       plus an assembled chlamydial column = 20 cells. §14.1's own rule is
       that a grid costs rows × columns, not one slide.
     `op-squint` — the examination block is protected by the brief and is
       written at FULL weight (three sections), and the two decks add a
       ninth through sixteenth entity on top of the book's classification.

   ⚠️⚠️ THREE DRAFTING PASSES WERE MADE, AND THE FIRST TWO OVERSHOT — recorded
   because the differences between them are apparatus, NOT content.
     PASS 1 came in at close to SOURCE length for both chapters — the failure
       §14 exists to stop, and the same one op-uvea recorded. Measured, caught,
       and rewritten section by section.
     PASS 2 rewrote every section telegraphically: chained sub-bullets folded
       into their parents, restated cells cut out of tables, and the book’s own
       repetition (p.94 restates pp.85–86) written ONCE.
     PASS 3 removed 22 writer-added emphasis lines carrying no source fact, no
       defect note, no Tutorial marker and no tagged gap-fill, and shortened the
       longest cross-reference asides.
   ⚠️ NO FACT, NUMBER, EPONYM, DEFECT NOTE, TUTORIAL MARKER OR TAGGED GAP-FILL
   PRESENT IN PASS 1 IS ABSENT FROM PASS 3. What went was emphasis and length.

   ⚠️ AND BOTH CHAPTERS STILL SIT ABOVE THE ~2,400-WORD OPERATIVE CEILING.
   Reported, not hidden. This is §14.1’s "state the bill and let the hub rule on
   pages" band, and further cutting now costs protected facts, which §14.1
   forbids: "STOP AT THE FLOOR AND SAY SO, itemising what the next 200 words
   would cost." The itemisation is immediately below. For calibration: the
   largest chapter this module has accepted is op-neuro-optic at 3,362 body
   words, printing at ELEVEN pages, and op-uvea at 2,992 printing at TEN — i.e.
   this module’s book-sourced chapters run near 300 words per printed page, not
   the estimator’s 240.

   WHAT THE NEXT 300 WORDS OF CUTTING WOULD COST, NAMED, so the hub has a
   menu rather than an argument:
     `op-conj`  · `cnj-1`'s histology and the four gland/crypt eponyms back
                  to a stub (they are figure-only teaching the brief lists as
                  primary content) · or `cnj-15`, the five lecture-only
                  entities · or the trachoma drug doses, which are the only
                  four doses in the whole chapter.
     `op-squint` · `sqt-9` (amblyopia) back to a cross-reference at `ast-11`
                  · or the L29 phoria-treatment and exotropia/esotropia type
                  lists · **NOT the examination block**, which the brief
                  protects and five of six questions turn on.

   WHERE `op-conj` WAS COMPRESSED, in the brief's own priority order:
     (a) ANATOMY AND HISTOLOGY — ch.6 pp.83–84, ~600 w — is one section
         (`cnj-1`) at well under half source length. KEPT WHOLE: every named
         structure, both epithelial transformations, the palisades of Vogt
         and stem-cell deficiency, and all five figure-only items the brief
         named (three-layer histology · Manz and Henle · marginal/tarsal/
         limbal naming · the accessory glands · the cornea as part of the
         sac). COMPRESSED TO A CLAUSE: the Tenon's-capsule figure, which
         names a relationship the bulbar bullet already carries. NOTHING WAS
         DROPPED. The examination-side material — lid eversion, what is then
         seen — stays in merged `va-10` and is cross-referenced.
     (b) MATERIAL `op-red` / `op-red-mgmt` ALREADY CARRIES is cross-
         referenced, never re-taught: the conjunctival vs ciliary injection
         discrimination (`rdm-2`), the six-column symptom and sign grids
         (`rdm-5`), the discharge-type table and preauricular node (`rdm-4`),
         the conjunctival cytology (`rdm-7`), the history clues (`red-9`),
         the topical antibiotic regimen and the corticosteroid warning
         (`rdm-10`), pterygium as a red eye (`red-10`) and as a corneal
         degeneration (`cor-16`).
     (c) THE BOOK'S REPETITION was written once. p.94's DD grid restates
         p.85–86's discharge and sign material; the grid is written whole in
         `cnj-12` as the discrimination it is, and `cnj-3`/`cnj-4` carry only
         what a grid cannot hold.

   ===========================================================================
   ⚠️⚠️ THE SKIP-IN-FINAL CONFLICT — HOW IT WAS HANDLED, AND WHERE THE READER
   IS TOLD.

   ch.15 p.201 closes the department material with "This is the end of
   strabismus in the department book"; p.202 opens "The next two pages are
   from tutorial .. Skip in Final". The whole examination sequence — history,
   inspection, corneal light reflex / Hirschberg, EOM testing, the cover and
   cover–uncover tests, the alternate cover test — is inside those two pages,
   and so is patching, the only amblyopia treatment the chapter names.

   FIVE OF THE CHAPTER'S SIX QUESTIONS TEST THAT MATERIAL. Verified by reading
   all six out of `app\data\questions.ophtho.js`, not from the brief:
     `opqb-t1-43`  first assessment in a 2-y-old → corneal light reflex
     `opqb-t1-44`  reflex NASAL on the right cornea → which deviation
     `opqb-t1-45`  cover test — covering R makes L move inward
     `opqb-t1-54`  a phoria is best detected by → cover–uncover test
     `opqb-t2-94`  the corneal light reflex estimates the angle
     `opqb-t1-53`  concomitant strabismus — the only non-tutorial one

   WHAT WAS DONE:
     · The examination material is written IN FULL and at FULL WEIGHT — three
       sections of the twelve (`sqt-10`, `sqt-11`, `sqt-12`), the largest
       block in the chapter. Nothing is abbreviated, buried or down-weighted.
     · The book's tag is RECORDED, at clause granularity, because the tag is
       data about what the book says.
     · THE READER IS TOLD BOTH FACTS, IN THREE PLACES, none of them muted:
         1. the chapter `intro` — names the disagreement in its second
            sentence, so it is read before any section is opened;
         2. `sqt-10`, at the head of the examination block, as a bold-led
            three-bullet note in the writer's own words — what the book says,
            what the bank does, and what was done here;
         3. `sqt-8`, on patching, where the same tag falls on the only
            amblyopia treatment the chapter names.
     · §14.3's ban on "bank meta-commentary in body text" is respected: no
       question id appears in any body, and the note says "the question bank"
       without counting keys at the reader.

   ⚠️ AND THE SHORTCUT IS REFUSED ON THE RECORD. theory-plan.md warns that the
   (Tutorial)/(T) marker "looked like a free way to cut length in a module
   that keeps overrunning its budget. It is not." No marked item anywhere in
   either chapter was shortened, moved or dropped because of its tag.

   ===========================================================================
   ⚠️ THE TUTORIAL MARKERS, CARRIED THROUGH — ALL OF THEM.

   The contents page (PDF p.3) states: "In this book, anything we put
   (Tutorial) or (T) beside / before it , study in round & skip in final".
   Spelled out in full at first appearance in each chapter, shortened to
   *(Tutorial — skip in final)* thereafter.

   ch.6 carries markers in FOUR physical forms; every one is below:
     1. p.85  true-membrane definition-by-adherence → [T]        → `cnj-3`
     2. p.85  pseudo-membrane cause (gonococcal) → [T]           → `cnj-3`
     3. p.86  follicle cause 4, "folliculosis in children"       → `cnj-4`
     4. p.87  the WHOLE framed allergic-conjunctivitis intro box
              — the classification cross and the clinical picture → `cnj-5`
     5. p.91  bacterial symptom "blurred vision improves with
              blinking" → (T)                                    → `cnj-9`
     6. p.91  bacterial symptom "initially unilateral …" → (T)    → `cnj-9`
     7. p.91  bacterial sign "conjunctival papillae" → (T)        → `cnj-9`
     8. p.91  the dashed Tutorial-tab REFERRAL box                → `cnj-9`
     9. p.95  subconjunctival haemorrhage "no pain, no vision
              loss, no discharge" (Tutorial)                      → `cnj-14`
    10. p.95  the Valsalva EXAMPLES only → Tutorial               → `cnj-14`
    11. p.95  the globe-rupture referral parenthetical → [T]      → `cnj-14`
    12. p.95  the dashed Tutorial-tab ANTICOAGULANT box           → `cnj-14`

   ch.15 carries THREE, one of them the new whole-page-range form:
     1. p.201 dashed box, "Tutorial → Surgical correction in cases of
              constant deviation and not corrected by glasses"    → `sqt-8`
     2. p.201 "patching (to correct amblyopia)" → Tutorial        → `sqt-8`
     3. p.202 the WHOLE-PAGE-RANGE declaration covering pp.202–203 → `sqt-10`,
              `sqt-11`, `sqt-12`, flagged at the head of `sqt-10`

   ⚠️ NO "(++ Additional)" TAG IN EITHER CHAPTER. The ch.7 variant does not
   recur.

   ===========================================================================
   ⚠️ THE BOOK'S OWN DEFECTS — RECORDED IN PLACE, NEVER SILENTLY CORRECTED.

   ch.6
     · p.91's serovar FIGURE prints trachoma as "A, B, & C"; p.92's PROSE
       prints "A, B, Ba and C". Both held, cited, neither corrected → the
       figure version in `cnj-10`, the prose version in `cnj-11`, and the
       disagreement stated in `cnj-11`.
     · The p.94 DD grid has NO CHLAMYDIAL COLUMN although pp.91–92 teach
       adult chlamydial conjunctivitis. Stated at the grid, and the column is
       assembled from pp.91–92 beneath it, labelled as assembled → `cnj-12`.
     · The p.91 dashed Tutorial REFERRAL box is reprinted almost verbatim,
       UNMARKED, as the Bacterial "Referral" cell of the p.94 table — the
       same content tutorial in one place and core in the other. One line in
       `cnj-12`. The marker is NOT propagated to the table.
     · "Acute bacterial infection" is printed in BOTH the Mucopurulent and
       the Purulent column of the p.85 discharge table. The book's own
       printing → noted in `cnj-3`.
     · Spelling as printed: "Coniunctival" (p.87), "alergens" (p.87),
       "Herber't Pit" in-figure vs "Herbert pits" in text (p.92),
       "ophthalmologust" (p.95), "Pingueculum" in the heading vs
       "Pinguecula" in the caption (p.94), "Settler's" for Sattler's. Kept
       [sic] where used.
     · Figure numbering: Fig 6-1, 6-4, 6-5, 6-6, 6-7, 6-8 exist; **6-2 and
       6-3 do not appear anywhere**, and ~20 figures are unnumbered. NO
       FIGURE NUMBER IS USED AS AN INDEX in either chapter.

   ch.15
     · "Sequalae" (p.197) and "commitance" (p.198) are printed as such and
       transcribed [sic] where used → `sqt-1`, `sqt-3`.
     · "Unward" for "Upward" in the four-quadrant direction figure (p.197)
       and "pseudostabismus" (p.202) → recorded in `sqt-2`, `sqt-10`.
     · The heading spells "Comitant", the bullets under it spell
       "concomitant". Both printed → `sqt-3`.
     · NO figure in ch.15 is numbered at all — the inconsistency is within
       the book, not just between books.
     · The Hirschberg left panel's scale runs 0/15/30/45/**70**; the right
       panel's chart has only four rows, 0°/15°/30°/45°, and **no 70° row**.
       Both transcribed, the mismatch stated → `sqt-11`.
     · The chapter names ACCOMMODATIVE only in a figure caption; its own
       heading says "Refractive esotropia" → `sqt-5`.

   ===========================================================================
   FIGURE-ONLY TEACHING USED AS PRIMARY CONTENT (the brief's list, all in):
     ch.6  three-layer histology (`cnj-1`) · Glands of Manz and Crypts of
           Henle, and Krause/Wolfring (`cnj-1`) · marginal / tarsal / limbal
           regional naming (`cnj-1`) · the cornea as part of the conjunctival
           sac (`cnj-1`) · the serovar split A,B,C vs D→K (`cnj-10`) ·
           viral-vs-trachomatous follicle appearance (`cnj-4`) · the giant-
           vs-ordinary papilla appearance (`cnj-4`) · superior pannus and the
           row-of-notches Herbert pits (`cnj-11`) · where the pterygium
           autograft is harvested (`cnj-13`).
     ch.15 **HIRSCHBERG — the eponym exists only inside the pseudostrabismus
           figure**; the prose says only "corneal light reflex" (`sqt-11`) ·
           the 0/15/30/45/70 scale and the 0°/15°/30°/45° chart (`sqt-11`) ·
           epicanthus→pseudo-esotropia and hypertelorism→pseudo-exotropia
           (`sqt-10`) · the three-row incomitance demonstration, the only
           place the book shows how incomitance is detected (`sqt-3`) · the
           drift-and-recovery cover sequence (`sqt-4`, `sqt-12`) · the
           before-and-after-glasses accommodative demonstration (`sqt-5`).
     ⚠️ `Hirschberg` returns ZERO across `theory.ophtho.js` — verified, not
     assumed. So does `phoria`, `comitant`/`concomitant`, `cover–uncover`,
     `pannus`, `goblet`, `Krause`, `Wolfring`, `Manz`, `palisade`, `Arlt`,
     `Herbert`, `ropy`, `vernal`, `Tranta`, `shield ulcer`, `azithromycin`,
     `mitomycin`, `autograft`, `Ketotifen`, `olopatadine`, `epidemic
     keratoconjunctivitis`, `WHO grading`, `ophthalmia neonatorum`, `INR`,
     `epicanthus`, `hypertelorism`, `prism dioptre`, `AC/A`, `orthoptic`,
     `cross fixation`, `simultaneous perception`, `botulinum`, `angular
     conjunctivitis` and `phlyctenular`.

   ===========================================================================
   GAPS FILLED AND TAGGED (`Herophilus\CLAUDE.md` §4 — a gap is ANSWERED, NOT
   DECLARED; the tag is a short clause on the claim, never a dead-end
   sentence). House style copied from `vsc-9`/`vsc-12` and `uv-6`.

   1. **OPHTHALMIA NEONATORUM — `cnj-10`.** ch.6 names it ONCE, inside the
      p.91 serovar figure, with no organism, timing, prophylaxis or
      treatment; it returns ZERO across the module. Supplied whole —
      definition, the four causes with their incubation windows, the
      gonococcal emergency, prophylaxis, treatment — and tagged. Chapter 16
      was NOT read: the user has ruled paediatric ophthalmology out of scope
      as a chapter, and the brief says do not chase it.
   2. **THE SYSTEMIC ANTIBIOTIC for acute bacterial conjunctivitis —
      `cnj-9`.** ⚠️ THE BRIEF IS SLIGHTLY WIDER THAN THE HOLE. The book says
      only "Systemic antibiotics are needed in gonococcal and meningococcal
      and H influenzae infections" and names no drug — but the module ALREADY
      carries the TOPICAL regimen, sourced: merged `rdm-10` prints
      "trimethoprim/sulfacetamide or fluoroquinolones, 4–6 times a day" from
      `L37`. Per CLAUDE.md §4 ("prefer the other source to outside knowledge
      where it prints the fact"), the topical half is CROSS-REFERENCED, not
      supplied, and only the systemic drug is supplied and tagged.
   3. **AMBLYOPIA — `sqt-9`.** ⚠️ THE BRIEF SAYS "Amblyopia is never defined
      in ch.15" — true of the book, and the module is NOT silent: merged
      `ast-11` already carries a definition and the critical period, itself
      tagged. So `sqt-9` writes the squint-facing account — the mechanism
      via suppression, the classification, the treatment ladder and the
      occlusion regime — supplies and tags what is new, and cross-references
      `ast-11` rather than writing a second definition.
   4. **SQUINT SURGERY — `sqt-8`.** The book names "surgery" and "surgical
      correction" and nothing else: no muscle, no millimetres, no botulinum.
      ⚠️ AND AGAIN THE DECK IS NOT SILENT: `L29` prints "Surgery: Recession -
      Resection" and `L30` prints the rule — after 6 months, resection–
      recession for incomplete paralysis, muscle transposition for complete.
      Those are SOURCED. Only the millimetre principle and botulinum toxin
      are supplied and tagged.
   5. **THE PRISM DIOPTRE AND THE mm-TO-DEGREE RULE — `sqt-11`.** Neither
      appears anywhere in ch.15, and `prism dioptre` returns zero module-wide.
      The absence is stated where a reader would look for it, and the
      standard 1 mm ≈ 7° ≈ 15 Δ is supplied and tagged, because a linked
      question's own explanation turns on the quantification.
   6. **THE FIVE LECTURE-ONLY ENTITIES — `cnj-15`.** `L6` names angular
      conjunctivitis, phlyctenular keratoconjunctivitis, trachomatous nebula
      ex pannus, Bitôt's spot and symblepharon as bare slide titles; ch.6's
      own NOT-COVERED list confirms the first two and symblepharon are absent
      from the book. One tagged line each, so the lecture's own scope is not
      quietly narrower in the notes than it was in the hall.
   7. Small tagged clauses in place: the peel-bleeding mechanism (`cnj-3`),
      why itching is the allergic discriminator (`cnj-12`), the pterygium UV
      mechanism ABSENCE stated rather than filled (`cnj-13`), why a hyperope
      converges (`sqt-5`), why a phoria decompensates (`sqt-4`).

   ===========================================================================
   ⚠️ REGISTER ROWS (§14.5) — EVERY ROW VERIFIED AGAINST ITS NAMED SOURCE AND
   AGAINST THE MERGED `app\data\theory.ophtho.js`, SECOND CLAUSES INCLUDED.
   Nine fault shapes are documented; three rows below are defective and the
   evidence is given rather than the defect worked around.

   ROW 1 — `op-red` (L37) → `op-conj`: "Conjunctivitis in full (types,
     membranes, neonatal, trachoma) · pterygium in full (pathology,
     pinguecula, grading, autograft)."
     ✅ SECOND CLAUSE VERIFIED TRUE FOR CONJUNCTIVITIS. Merged `red-9` carries
        only the five cause-groups and the four history clues, and its own
        aside says "Conjunctivitis as a disease — the types in full,
        membranes, the neonatal forms, trachoma — is `op-conj`'s".
     ✅ TYPES, MEMBRANES, TRACHOMA DELIVERED IN FULL — `cnj-3`, `cnj-5`–
        `cnj-11`.
     ❌ NEONATAL NOT IN THE BOOK → supplied and tagged in `cnj-10`.
     ⚠️ THE PTERYGIUM HALF IS PARTLY CIRCULAR — the shape first seen on
        `op-orbit`/`op-systemic`. `red-10` ALREADY writes pterygium as a full
        entity (triangular fold, nasal, UV, tropical, the visual-axis
        surgical trigger) and merged `cor-16` ALREADY prints a
        pterygium-vs-pinguecula grid. The deferring chapter wrote what it
        deferred. **Resolved as a declared overlap:** `cnj-13` writes only
        what neither carries — pinguecula in full (hyaline and elastic
        subepithelial deposit, sun/wind/ageing, lubricants, excision for
        cosmesis only), the four surgical indications, the ONE-THIRD
        recurrence, the 5 % autograft figure, mitomycin-C, and the
        figure-only harvest site — and points at `cor-16` and `red-10` for
        the rest.
     ❌ "GRADING" IS UNDELIVERABLE FROM ch.6 — reported, not manufactured.
        The cache's NOT-COVERED item 26 is explicit: "Pterygium grading,
        recurrence risk factors, amniotic-membrane grafting … absent", as is
        item 25 for the histology/UV pathogenesis. Stated as absent in
        `cnj-13`; nothing invented to tick the row.

   ROW 2 — `op-va` (L3,4 sl.11–13) → `op-conj` + `op-red`, the SPLIT VERDICT:
     papillae vs follicles vs giant papillae, trachomatous scarring T4, PTCs,
     pterygium, and the conjunctival-vs-ciliary injection discrimination.
     ✅ SECOND CLAUSE VERIFIED TRUE. Merged `va-10` lists "Papillae ·
        follicles · giant papillae" and "Pterygium · scarring T4 · PTCs" as
        bare inspection labels and says so itself: "the full discrimination is
        `op-red`'s and `op-conj`'s".
     ✅ `op-red`'s two halves confirmed already delivered — injection in
        `rdm-2` (a six-row grid), pterygium in `red-10`.
     ✅ `op-conj`'s half, BLOCKED on `L6` since 2026-08-17, IS NOW DELIVERED
        from the book: follicles and papillae with the structural contrast and
        the 1 mm giant threshold (`cnj-4`), conjunctival scarring and Arlt's
        line (`cnj-11`), PTCs (`cnj-11`).
     ⚠️ TWO CORRECTIONS TO THE ROW, both reported rather than absorbed:
        (a) **"trachomatous scarring T4" NAMES A GRADE THAT DOES NOT EXIST.**
            The book's WHO system has five grades and none of them is T4:
            **TF · TI · TS · TT · CO**. "T4" is not printed anywhere in ch.6.
            Written as the book prints it in `cnj-11`, and the row's label
            recorded as unsourced.
        (b) ✅ **"PTCs is never expanded anywhere" IS NOW RESOLVED** — a
            flagged unknown closed, not a defect. ch.6 p.93 prints
            **"Post-trachomatous concretions (PTCs)"** in full, with their
            symptom (chronic irritation and foreign-body sensation). Written
            in `cnj-11`; merged `va-10` glosses it as "pale trachomatous /
            conjunctival concretions" and can be corrected by the hub at
            reconciliation.

   ROW 3 — `op-pupil` (L3,4 sl.45) → `op-squint`: "The corneal light reflex
     in full — symmetry, the reflex deviating OPPOSITE to the squint, and
     estimating the angle from it. Written in `pup-8` … but `opqb-t1-43` and
     `opqb-t2-94` are `op-squint`'s and turn on it."
     ✅ SECOND CLAUSE VERIFIED TRUE AND EXACT. `pup-8` §1 carries all three
        claims verbatim in substance, and both named questions are filed
        under `op-squint` (checked in `questions.ophtho.js`, not assumed).
     ✅ TREATED AS THE BRIEF DIRECTS — a CROSS-REFERENCE NOTICE, not a debt.
        `sqt-11` points at `pup-8` for the technique and owns what `pup-8`
        does not carry and the questions need: **the direction table**
        (a NASAL reflex = the eye is turned OUT = exotropia — this is
        `opqb-t1-44`'s whole content and `pup-8` states only the principle),
        the **HIRSCHBERG** eponym, the numeric scale, and the
        pseudostrabismus exclusion.

   ROW 4 — `op-pupil` (L3,4 sl.43–44) → `op-squint`: the EOM action/nerve
     grid and the six cardinal positions, "named here so `op-squint`
     cross-references rather than re-derives".
     ✅ SECOND CLAUSE VERIFIED TRUE. `pup-7` carries the full 6 × 3 grid with
        LR₆SO₄, `pup-8` §3 the six cardinal positions and the four motility
        words. NOTHING IS RE-DERIVED. `sqt-3` and `sqt-7` point at them.
     ⚠️ AND THE BOOK AGREES WITH THE ROW: ch.15 p.197 delegates it in prose —
        "You will find nerve supply & action of EOM in Examination chapter
        (page 15)" — and p.203 delegates EOM testing to "(Page 16)". Both
        recorded in `sqt-3`/`sqt-12`. **The two page numbers are NOT resolved
        here**: ch.15's own cache flags a documented one-page anomaly at
        chapter 1, and chapter 1 has not been read.

   ROW 5 — `op-cat` → `op-squint`: "Paediatric cataract → the amblyopia and
     squint work-up."
     ✅ SECOND CLAUSE VERIFIED. Merged `cat-11` carries "Squint if unilateral
        · nystagmus if bilateral" and the within-weeks amblyopia rule, and
        `cts-2` repeats the rule as a surgical indication; NEITHER writes a
        work-up, an amblyopia account or any squint assessment.
     ✅ DELIVERED — the work-up in `sqt-10` (which prints the book's own
        "Examination anterior segment: corneal opacity, **cataract**" line,
        so the two chapters meet exactly where the row said they would) and
        amblyopia in `sqt-9`, cross-referenced back to `cat-11` and `cts-2`.

   ROW 6 — ⚠️ **REVERSE NOTICE, OPENED BY A MERGED CHAPTER AND NOT IN THE
     BRIEF'S LIST.** `op-neuro-motil` (`mot-1`) → `op-squint`: "`L30) Squint
     II` … adds what the book omits — a secondary angle greater than the
     primary, crossed against uncrossed diplopia, the three head postures as
     a system, false orientation with vertigo, nausea and uncertain gait, and
     the surgery itself (after 6 months; resection–recession for incomplete
     paralysis, muscle transposition for complete). That deck is
     `op-squint`'s; it is cited here and not counted."
     ✅ VERIFIED AGAINST THE DECK LINE BY LINE — all six items are printed in
        `L30`'s 178 words, and `mot-1`'s own `Src:` line confirms "L30 (cited
        only, not counted)", so the words are unspent.
     ✅ DELIVERED — `sqt-7` (angle, diplopia, postures, false orientation)
        and `sqt-8` (the surgery). `mot-1`–`mot-7` are cross-referenced for
        the neurological detail and NOT re-derived.

   ===========================================================================
   DEFERRALS OPENED BY THESE TWO CHAPTERS (§14.5 — an unrecorded promise is a
   deletion). Each was checked against the questions filed here before being
   deferred; none of the seven turns on any of them.

   | Deferred from | Fact | Owed to |
   |---|---|---|
   | `op-conj` (ch.6 p.83) | **Tenon's capsule as a structure** — the anterior and posterior capsule, the orbital septum and the muscle relations, all labelled in the p.83 horizontal-section figure. `cnj-1` keeps only "the bulbar conjunctiva is loosely attached to sclera and Tenon's" | `op-ant` (which has no deck; grep before writing) |
   | `op-conj` (ch.6 p.83) | **Corneal limbal stem-cell deficiency as a corneal disease** — conjunctivalization, superficial vascularization, and the keratoplasty/limbal-graft ladder. `cnj-1` keeps the palisades of Vogt and the one-clause consequence | `op-cornea-surg` (⚠️ already merged; reconciliation work — `trm-2`/`trm-5` carry the chemical-burn version) |
   | `op-conj` (ch.6 pp.88–89) | **Shield ulcer, pseudo-gerontoxon and keratoconus as CORNEAL lesions** — `cnj-6` writes them as VKC's corneal signs only. ⚠️ Keratoconus is already written in eight sections (`cor-11`–`cor-13` etc.); only the VKC association is new | `op-cornea` (⚠️ already merged) |
   | `op-conj` (ch.6 p.95) | **Globe rupture and the occult open globe** — `cnj-14` keeps only the book's clause that a large traumatic subconjunctival haemorrhage should raise suspicion. Verified already written in `trm-9` before deferring | `op-trauma` ✅ **already written** |
   | `op-conj` (`L6` sl.62) | **Bitôt's spot and vitamin A deficiency as a SYSTEMIC/nutritional eye disease** — xerophthalmia, keratomalacia, night blindness. `cnj-15` supplies one tagged line. ⚠️ `Bitôt` and `xerophthalmia` return zero module-wide | `op-systemic` (⚠️ already merged; reconciliation work) |
   | `op-squint` (ch.15 p.200 · `L30`) | **III, IV and VI nerve palsy in neurological depth** — aetiology lists, the pupil rule, the recovery figures, myasthenia and nystagmus. `sqt-7` keeps only the strabismus framing: which deviation each palsy produces | `op-neuro-motil` ✅ **already written** — `mot-1`–`mot-8`, verified before deferring |
   | `op-squint` (ch.15 p.202) | **Retinoblastoma as a cause of leukocoria and of squint** — `sqt-10` keeps only the book's own fundus-examination line naming it. Verified already written in `wht-7` and `cat-11` before deferring | `op-white`, `op-onc` ✅ **`wht-7` already written**; the genetics and staging remain `op-onc`'s open row |

   ===========================================================================
   ⚠️⚠️ WHAT CONTRADICTS THE BRIEF — reported, not quietly worked around.

   (1) **THE BRIEF NAMES NO LECTURE SOURCE FOR `op-squint`, AND TWO EXIST.**
       `L29) Sqint I.txt` (227 w) and `L30) Squint II.txt` (178 w) are on
       disk with real content, and merged `mot-1` expressly reserves L30 for
       this chapter. Writing from the book alone would have lost AC/A, cross
       fixation, orthoptics, the prism types, the sensory-adaptation sequence
       and the surgery vocabulary — all of which return ZERO module-wide.
       Both decks are used, counted, and cited.
   (2) **`op-conj`'s DECK `L6` IS ALSO NOT EMPTY, AND IT NAMES FIVE ENTITIES
       THE BOOK DOES NOT TEACH** — angular conjunctivitis, phlyctenular
       keratoconjunctivitis, trachomatous nebula ex pannus, Bitôt's spot,
       symblepharon. ch.6's own NOT-COVERED list confirms their absence from
       the book. They are supplied and tagged in `cnj-15` and the deck is
       cited only, not counted (342 w over 66 slides of photographs).
   (3) **"AMBLYOPIA IS NEVER DEFINED" IS TRUE OF ch.15 AND FALSE OF THE
       MODULE.** Merged `ast-11` defines it — "reduced best-corrected acuity
       in a structurally normal eye" — with the 7–8-year critical period,
       both already tagged as supplied. `sqt-9` therefore writes the
       squint-facing account and points there, rather than writing a second
       definition that would read as a second source.
   (4) **"NO ANTIBIOTIC IS NAMED FOR ACUTE BACTERIAL CONJUNCTIVITIS" IS TRUE
       OF THE BOOK AND HALF-FALSE OF THE MODULE.** `rdm-10` carries the
       topical regimen from `L37`, sourced. Only the systemic drug is
       supplied. See gap 2 above.
   (5) **"PTERYGIUM IN FULL" AND "GRADING" (ROW 1) ARE PARTLY CIRCULAR AND
       PARTLY UNDELIVERABLE** — see ROW 1. `red-10` and `cor-16` already
       carry the entity; the book prints no grading at all.
   (6) **"TRACHOMATOUS SCARRING T4" (ROW 2) NAMES A GRADE THE BOOK DOES NOT
       PRINT** — the five WHO grades are TF/TI/TS/TT/CO. See ROW 2(a).
   (7) **THE BRIEF'S PAGE FORECAST FOR `op-conj` IS 20.7 pp AT 1:1 AND ASKS
       FOR "ROUGHLY HALF".** That is what was written, but the chapter is a
       survey with eleven entities and five tables, so it is expected to land
       between the ~2,400-word ceiling and its 3,000-word budget — §14.1's
       "state the bill and let the hub rule on pages" band. The cut menu is
       in the BUDGET block above. Nothing was deleted to reach a number.

   ===========================================================================
   RE-MEASURE COMMAND FOR THE HUB (the header states no totals; run this):
     node -e "global.window={};var fs=require('fs');
       eval(fs.readFileSync('content/ophtho/theory-drafts/op-conj.draft.js','utf8'));
       Object.keys(THEORY_DRAFT).forEach(function(k){var t=0;
         THEORY_DRAFT[k].sections.forEach(function(s){t+=s.body.trim().split(/\s+/).length;});
         console.log(k, THEORY_DRAFT[k].sections.length+' sections', t+' body words');});"
   =========================================================================== */

var THEORY_DRAFT = {

  "op-conj": {
    "intro": "One inflammation sorted four ways — allergic, viral, bacterial, chlamydial — plus two degenerations and a haemorrhage. Normal vision, normal pupil, no photophobia and a clear cornea are what make it conjunctivitis; anything else is a different red eye.",
    "sections": [

      {
        "id": "cnj-1",
        "w": "must",
        "h": "Anatomy and histology — including four eponyms that exist only in the figures",
        "body": "**The conjunctiva:** a **thin VASCULAR MUCOUS MEMBRANE** over the globe except the cornea, and behind both lids.\n\n### The parts, and how each is attached\n- **BULBAR:** **LOOSELY** attached to sclera and **Tenon's capsule** — **firmly at the LIMBUS**.\n- **PALPEBRAL:** **FIRMLY ADHERENT to the TARSAL PLATES**.\n- **FORNICES:** superior and inferior, where the two meet.\n- **CONJUNCTIVAL SAC:** the **potential dead space** when the lids close — a **cul-de-sac, leading nowhere**.\n- **Figure-only naming:** **MARGINAL · TARSAL · LIMBAL** conjunctiva; the prose names only bulbar, palpebral, fornix.\n- **Figure-only:** the **CORNEAL SURFACE functions as part of the conjunctival sac**.\n- **PALISADES OF VOGT:** at the limbus, holding the **STEM CELLS** that regenerate corneal epithelium.\n\n### Histology\n- **Epithelium:** **NON-KERATINIZED** — basal cuboidal, overlying polyhedral, and **GOBLET CELLS**.\n- **At the limbus:** transforms into the cornea's **non-keratinized stratified squamous** epithelium.\n- **At the lid margin:** transforms into skin's **KERATINIZED stratified squamous** epithelium.\n- **Figure-only, three layers:** **EPITHELIUM · ADENOID LAYER · FIBROUS LAYER** — nowhere in the prose.\n- **Figure-only glands:** accessory lacrimal **KRAUSE** and **WOLFRING**; **GLANDS OF MANZ**; **CRYPTS OF HENLE**.\n\n*Lid eversion and what is seen: `va-10`. Tenon's capsule deferred to `op-ant`; stem-cell deficiency as corneal disease to `op-cornea-surg` (burns: `trm-2`, `trm-5`).*\n\nSrc: ophthalmology.pdf (HEALIX) ch.6 pp.83–84",
        "qs": []
      },

      {
        "id": "cnj-2",
        "w": "must",
        "h": "Conjunctivitis — the definition, and where the causes come from",
        "body": "- **Conjunctivitis:** **inflammation of the conjunctiva** — **DILATED conjunctival vessels** → **hyperaemia and OEDEMA**, typically with **DISCHARGE**.\n- **Prevalence varies with the cause**, itself influenced by **AGE** and **SEASON**.\n\n### Non-infectious\n- **ALLERGIC — the MOST FREQUENT cause of all**, **15–40 % of the population**; commoner in spring and summer.\n- **TOXIC (chemical):** topical drugs, e.g. **BRIMONIDINE** · smoke, irradiation, chemicals, fumes.\n- **Secondary, local:** **dacryocystitis · dacryoadenitis · cellulitis**.\n- **Secondary, systemic:** **immune-mediated** disease, **neoplastic** processes.\n\n### Infectious\n- **The list:** **bacterial · viral · chlamydial · fungal · parasitic**.\n- **⚠️ Put the two rankings together:** **allergic is commonest overall; VIRAL is the commonest INFECTIVE cause.** Bacterial is neither.\n- **Fungal and parasitic** are named here and **never developed** anywhere in the chapter.\n\n*Cause-groups and history clues: `red-9`. Systemic disease with a red eye: `rdm-6`. Dacryocystitis: `op-lac`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.6 p.84",
        "qs": []
      },

      {
        "id": "cnj-3",
        "w": "must",
        "h": "The clinical features — discharge, and the two kinds of membrane",
        "body": "**Nine features are listed.** Six are here; follicles, papillae and the node are `cnj-4`.\n\n- **1. FOREIGN-BODY SENSATION** — grittiness, sand in the eye.\n- **3. RED EYE:** injection **SPARING THE LIMBAL AREA** — the discriminator against ciliary flush.\n- **4. CONJUNCTIVAL HAEMORRHAGES:** some **viral**, and **severe bacterial** disease.\n- **5. CHEMOSIS:** conjunctival **oedema**.\n\n### 2. Discharge — four types\n\n|WATERY|MUCOID|MUCOPURULENT (MPC)|PURULENT|\n|---|---|---|---|\n|**Viral**|**Allergic**|**Chlamydial**|**Acute bacterial**|\n|**Allergic**|**Toxic (chemical)**, **dry eye**|**Acute bacterial**|**⚠️ SEVERE purulent suggests GONOCOCCAL**|\n\n- *Defect note: acute bacterial infection is printed in BOTH the mucopurulent and the purulent column — the book's own printing. **MPC** is defined only in this table.*\n\n### 6. Membranes — true against pseudo\n\n||**TRUE**|**PSEUDO**|\n|---|---|---|\n|**What**|**necrotic and granulation tissue INFILTRATES the epithelium**, firm adherence *(Tutorial — the book's mark for \"study in round & skip in final\")*|**COAGULATED EXUDATE on the SURFACE** of inflamed but **INTACT** epithelium|\n|**⚠️ On peeling**|**BLEEDS** — epithelium destroyed, stroma exposed|**NO bleeding**|\n|**Cause**|**Corynebacterium diphtheriae**|**severe GONOCOCCAL** *(Tutorial — skip in final)*|\n\n\n*Discharge as primary care grades it, and the preauricular node: `rdm-4`. The six-column symptom and sign grids: `rdm-5`. The cytology: `rdm-7`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.6 pp.85–86",
        "qs": []
      },

      {
        "id": "cnj-4",
        "w": "must",
        "h": "Follicles, papillae and the node — the three surface reactions told apart",
        "body": "### 7. Follicles\n- **What:** **discrete, slightly elevated lesions** with **blood vessels running AROUND them**.\n- **Contents:** **leucocytic infiltration, mainly LYMPHOCYTES**.\n- **The corneal counterpart:** **SUBEPITHELIAL INFILTRATES**, as in **ADENOVIRUS** epidemic keratoconjunctivitis.\n- **Causes:** **viral · chlamydial (trachoma) · hypersensitivity to topical drugs** (brimonidine) · **folliculosis in children** *(Tutorial — skip in final)*.\n- **Figure-only:** **VIRAL follicles are small and pale; TRACHOMATOUS ones LARGER and CONFLUENT** on a beefy red tarsus. The prose never contrasts them.\n\n### 8. Papillae\n- **What:** a **FIBROVASCULAR CORE**, surrounded by **hyperplastic epithelium**.\n- **⚠️ The one-line discriminator:** **vessels AROUND a follicle, a vessel IN a papilla.**\n- **They develop with:** **bacterial conjunctivitis** and **chronic blepharitis**.\n- **GIANT PAPILLAE:** **over 1 mm**, **FLAT-TOPPED** — the **COBBLESTONE appearance**.\n- **Their causes:** **vernal catarrh** · **prolonged CONTACT LENS wear** · **foreign body**, as in artificial-eye users.\n- **Figure-only:** ordinary papillae look **fine and velvety**; only the 1 mm threshold is written.\n\n### 9. Preauricular lymphadenopathy (± submandibular)\n- **Three causes:** **VIRAL · CHLAMYDIAL · severe BACTERIAL, especially GONOCOCCAL**.\n\n*`va-10` carries these as bare labels and says the discrimination belongs here; the node and Parinaud syndrome: `rdm-4`. **Giant papillary conjunctivitis gets no section in the book.***\n\nSrc: ophthalmology.pdf (HEALIX) ch.6 p.86",
        "qs": []
      },

      {
        "id": "cnj-5",
        "w": "must",
        "h": "Allergic conjunctivitis — the family, and the seasonal and perennial forms",
        "body": "*⚠️ The framed overview below is headed **\"Intro about allergic conjunctivitis From Tutorial\"** — round material, skippable in the final. Written in full: it is the only classification of allergic eye disease the chapter gives.*\n\n### The family, as the book draws it\n- **Associated with:** **allergic rhinitis, eczema or asthma**.\n- **Hay fever:** acute allergic **rhino-conjunctivitis**, the **most common form** of ocular and nasal allergy.\n- **Branch 1:** allergic rhino-conjunctivitis — **SEASONAL** (hay fever) and **PERENNIAL**.\n- **Branch 2: VERNAL keratoconjunctivitis (VKC)**, spring catarrh. **Branch 3: ATOPIC keratoconjunctivitis (AKC)**, with atopic dermatitis.\n- **Shared picture:** **BILATERAL · INTENSE ITCHING · painless tearing · diffuse redness · MUCOID/ROPY discharge · PAPILLAE · lid oedema · chemosis** *(printed \"Coniunctival\" [sic])*.\n\n### Seasonal against perennial\n\n||**SEASONAL**|**PERENNIAL**|\n|---|---|---|\n|**When**|worse **spring and summer**|**all year**, usually **MILDER**|\n|**Allergen**|usually **POLLEN**, varying with geography|**house dust mites · animal dander · fungal allergens**|\n\n- **Symptoms:** itching, lacrimation, red eye — **± sneezing and nasal discharge**.\n- **Signs:** injection, and a **MILD PAPILLARY reaction** only.\n- **Treatment:** **cold compresses** · **artificial tears** to dilute allergens *(printed \"alergens\" [sic])* · **topical MAST CELL STABILIZERS and ANTIHISTAMINES** · **topical steroids, effective but RARELY needed**.\n- **⚠️ These two boxes are NOT tutorial-marked**, unlike the overview above them.\n\n*Hay fever's seasonal rhinitis: `rdm-6`. ⚠️ The chapter prints **no hypersensitivity type, no IgE and no mediator list**.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.6 p.87",
        "qs": []
      },

      {
        "id": "cnj-6",
        "w": "must",
        "h": "Vernal keratoconjunctivitis — the morning misery, and a cornea in three registers",
        "body": "### Epidemiology\n- **Where:** **hot, dry climates** — **West Africa, the Mediterranean basin, the MIDDLE EAST**; speculated to be higher pollen and allergen pollution.\n- **Age: 5–25 years**, mean onset **10–12**; **spontaneous resolution in the LATE SECOND DECADE**.\n\n### Symptoms — \"The morning Misery\"\n*The book's only literature citation, printed in full: **(1988 by Buckley, R.J.)**.*\n- **Symptoms:** **SEVERE ITCHING · PHOTOPHOBIA · foreign-body sensation · MUCOUS \"ROPY\" DISCHARGE.**\n- **Typically BILATERAL** and seasonally recurrent — *vernal* meaning **springtime**.\n\n### Signs — conjunctival, limbal, corneal\n- **Conjunctival:** diffuse injection · **TARSAL GIANT PAPILLAE** (cobblestones).\n- **Limbal: TRANTA SPOTS** — limbal papillae with **WHITISH DOTS** of **DEGENERATED EOSINOPHILS**.\n- **⚠️ Limbal disease costs the cornea:** **stem-cell deficiency** → **corneal NEOVASCULARIZATION**.\n- **Corneal, mildest first: PUNCTATE EPITHELIAL EROSIONS.**\n- **SHIELD ULCER:** an **OVAL ulcer in the UPPER ONE THIRD**, usually covered by a **plaque of fibrin and mucus**.\n- **PSEUDO-GERONTOXON:** **LIPID DEPOSITION** in peripheral superficial stroma — an arcus in a young eye.\n- **KERATOCONUS:** commoner in VKC, **possibly from chronic EYE RUBBING**.\n\n### Treatment\n- **Dark glasses and cold compresses.**\n- **Topical:** **mast cell stabilizers · antihistamines · vasoconstrictor–antihistamine drops during the attack only**.\n- **STEROID for acute attacks — avoid long-term use.**\n- **CYCLOSPORINE or topical TACROLIMUS:** severe cases, and as **STEROID-SPARING** agents.\n- **⚠️ Shield-ulcer management is never printed** — the ulcer is described and never treated.\n\n*Arcus and the corneal degenerations: `cor-16`. Keratoconus in full: `cor-11`–`cor-13`. The steroid-responder IOP rise and the steroid-cataract latency: `op-red-mgmt`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.6 pp.88–89",
        "qs": []
      },

      {
        "id": "cnj-7",
        "w": "high",
        "h": "Atopic keratoconjunctivitis — the adult version, and worse in winter",
        "body": "- **AKC:** **RARE, BILATERAL**, in **ADULTS aged 30–50**, on a background of **ATOPIC DERMATITIS (eczema)** or **asthma**.\n- **Course: CHRONIC and UNREMITTING**, with a low possibility of resolution.\n- **⚠️ Season: PERENNIAL and WORSE IN WINTER** — the inverse of VKC, and the fastest way to separate them.\n- **Symptoms: similar to VKC but MORE SEVERE.**\n\n### Signs, by tissue\n- **Eyelids:** **ECZEMA** — redness, scaling, dry skin · **STAPHYLOCOCCAL BLEPHARITIS**.\n- **Conjunctiva:** **MORE WATERY than VKC** · injection ± chemosis · **SMALL papillae**, not giant.\n- **Cornea:** superficial punctate erosions · **PERSISTENT EPITHELIAL DEFECTS** · keratoconus common.\n\n### Treatment\n- **Cold compresses.**\n- **Drugs named:** **topical antihistamines and mast cell stabilizers — KETOTIFEN, OLOPATADINE.**\n- **⚠️ Steroids:** **topical corticosteroids RESTRICTED to the ACUTE symptoms**, to avoid the complications of prolonged use.\n\n### ⚠️ VKC against AKC\n\n||**VKC**|**AKC**|\n|---|---|---|\n|**Age**|**5–25 y**, onset 10–12|**30–50 y**|\n|**Season**|**spring**, 23 % perennial|perennial, **WORSE IN WINTER**|\n|**Papillae**|**GIANT, cobblestone**|**SMALL**|\n|**Outcome**|**resolves** late 2nd decade|**chronic, unremitting**|\n\n*Blepharitis: `rdm-8`. ⚠️ Chronic steroid complications are never named here; see `glc-10`, `op-cat`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.6 p.89",
        "qs": []
      },

      {
        "id": "cnj-8",
        "w": "must",
        "h": "Viral conjunctivitis — adenovirus, and the serovars that matter",
        "body": "- **The most common EXTERNAL OCULAR INFECTION** of any kind; **ADENOVIRUS causes 90 %**.\n- **Highly contagious**, appearing as **EPIDEMICS**; transmitted by **respiratory or ocular secretions**.\n\n### The five presentations\n\n|Presentation|What defines it|\n|---|---|\n|**Non-specific acute FOLLICULAR**|the **MOST COMMON** · initially **UNILATERAL**, then the other eye · watering, redness, irritation, mild itching, photophobia · **sore throat or a cold** may accompany|\n|**PHARYNGOCONJUNCTIVAL FEVER**|serovars **3, 4 and 7**|\n|**EPIDEMIC KERATOCONJUNCTIVITIS**|serovars **8, 19 and 37** · the **MOST SEVERE** ocular adenoviral infection · **marked keratitis and photophobia** · **cornea may be chronically affected**|\n|**HSV follicular conjunctivitis**|blepharoconjunctivitis|\n|**Systemic viral infection**|**varicella · measles · mumps**|\n\n\n### Signs and treatment\n- **Injection** · **FOLLICLES, mainly LOWER tarsal** · **PSEUDOMEMBRANES** may be present · **PREAURICULAR node** · lid oedema.\n- **KERATITIS:** **subepithelial infiltrates**, **punctate epithelial keratitis**.\n- **⚠️ Spontaneous resolution in 2–3 WEEKS — no specific treatment necessary.**\n- **STRICT HYGIENE** to restrict transmission.\n- **Topical steroids with gradual tapering** for severe symptoms only · **topical antibiotics** if secondary bacterial infection is suspected · **antihistamines and vasoconstrictors** for itching.\n\n*Pharyngoconjunctival fever as a systemic association: `rdm-6`. \"No specific medicinal treatment, instruct in precautions against contagion\": `rdm-10`. Herpetic corneal disease and the dendritic ulcer are `op-cornea`'s.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.6 p.90",
        "qs": []
      },

      {
        "id": "cnj-9",
        "w": "must",
        "h": "Acute bacterial conjunctivitis — four organisms, and two that ulcerate the cornea",
        "body": "*⚠️ The book files trachoma and adult chlamydial disease UNDER \"Bacterial Conjunctivitis\", as items 2 and 3 of this banner, with no chlamydial branch of its own. Its objectives flowchart does the same. Recorded as printed.*\n\n- **Transmission:** **direct contact with infected secretions**.\n- **Common organisms:** **H. INFLUENZAE · S. PNEUMONIAE · S. AUREUS · MORAXELLA CATARRHALIS**.\n- **Rare:** **N. GONORRHOEAE** in very few cases; **N. MENINGITIDIS** rare, **usually in children**.\n\n### Symptoms\n- **Onset:** **acute redness, grittiness, burning and discharge.**\n- **MATTING of lids and lashes on awakening**, with difficulty opening the eye · systemic symptoms of the organism.\n- *Blurred vision IMPROVING WITH BLINKING — discharge on the surface (Tutorial — skip in final).*\n- *Initially unilateral, the second eye shortly after (Tutorial — skip in final).*\n\n### Signs and investigation\n- *Conjunctival PAPILLAE (Tutorial — skip in final).*\n- **Lid oedema and erythema** · **injection and chemosis** · **MUCOPURULENT or PURULENT discharge**.\n- **⚠️ CORNEAL ULCERATION — in GONOCOCCAL and MENINGOCOCCAL infection only**, as are the **preauricular and submandibular nodes**.\n- **Conjunctival swabs for URGENT GRAM STAINING**, to exclude those two · **culture** if possible.\n- *Boxed: referral is **usually ELECTIVE**; be aware it may cause **MARGINAL KERATITIS** (Tutorial — skip in final).*\n\n### Treatment\n- **⚠️ AVOID EYE PATCHING**, and **stop contact lenses** · **strict hygiene** · **topical antibiotics**.\n- **SYSTEMIC antibiotics —** needed in **GONOCOCCAL, MENINGOCOCCAL and H. INFLUENZAE** infection.\n- **⚠️ No systemic drug and no dose are printed.** The standard for gonococcal disease is **CEFTRIAXONE by injection**, with the eye **irrigated** and the **partner treated**; meningococcal disease adds **contact prophylaxis** *(not in course material)*.\n\n*The topical regimen is sourced in `rdm-10` — **trimethoprim/sulfacetamide or fluoroquinolones, 4–6 times a day**; the culture triggers: `rdm-7`. **Gonococcal conjunctivitis is never given its own heading in ch.6.***\n\nSrc: ophthalmology.pdf (HEALIX) ch.6 p.91; the systemic drug is supplied and tagged",
        "qs": []
      },

      {
        "id": "cnj-10",
        "w": "must",
        "h": "Adult chlamydial conjunctivitis, the serovar split, and the newborn eye",
        "body": "- **Organism: CHLAMYDIA TRACHOMATIS, serovars D → K.**\n- **⚠️ Sexually transmitted**, and it **can cause URETHRITIS**; **untreated it becomes CHRONIC**.\n- **Symptoms: SUBACUTE** onset of red eye, tearing, discharge.\n- **Signs:** **MUCOPURULENT discharge** · **TENDER preauricular nodes** · **FOLLICLES on UPPER AND LOWER tarsal conjunctiva** · **papillae if chronic**.\n- **Treatment:** **genitourinary referral** · **systemic AZITHROMYCIN, DOXYCYCLINE or ERYTHROMYCIN** (doses only under trachoma, `cnj-11`) · **topical TETRACYCLINE or ERYTHROMYCIN ointment** · **exclude other STIs**.\n\n### The serovar split — figure-only\n- **Serovars A, B, & C → TRACHOMA.**\n- **Serovars D → K:** **adult chlamydial (inclusion) conjunctivitis, AND OPHTHALMIA NEONATORUM.**\n- *Defect note: this figure prints **\"A, B, & C\"**; the p.92 prose prints **\"A, B, Ba and C\"**. Both recorded; neither corrected.*\n\n### ⚠️ Ophthalmia neonatorum — supplied\n*Not taken from the course material. ch.6 names it **once**, in the figure above — no organisms, no timing, no prophylaxis, no treatment — and it returns zero across the module.*\n- **What it is:** **any conjunctivitis in the first 28 days of life**, acquired from the **birth canal**; **notifiable**.\n- **CHEMICAL, day 1:** from silver nitrate prophylaxis; self-limiting.\n- **GONOCOCCAL, days 2–5:** **HYPERACUTE**, copious purulent discharge, marked lid oedema — it **PERFORATES THE CORNEA**, and is a **sight-threatening emergency**.\n- **CHLAMYDIAL, days 5–14:** the **commonest**; mucopurulent, milder, but risks **PNEUMONITIS**.\n- **HERPETIC, days 5–14:** with **vesicles**, and a risk of disseminated disease.\n- **⚠️ Follicles do NOT form in the newborn** — no conjunctival lymphoid tissue yet, so the reaction is papillary.\n- **Prophylaxis:** topical **erythromycin** (or tetracycline) ointment at birth — historically **CREDÉ's silver nitrate**.\n- **Treatment:** **systemic CEFTRIAXONE plus saline irrigation** for gonococcal; **ORAL erythromycin** for chlamydial, because topical treatment does not clear the nasopharynx. **Treat the mother and her partner.**\n\nSrc: ophthalmology.pdf (HEALIX) ch.6 pp.91–92; ophthalmia neonatorum supplied and tagged against a verified near-absence",
        "qs": []
      },

      {
        "id": "cnj-11",
        "w": "must",
        "h": "Trachoma — active, cicatricial, and the five WHO grades",
        "body": "- **⚠️ Trachoma:** the world's **LEADING CAUSE OF PREVENTABLE IRREVERSIBLE BLINDNESS**, related to **POVERTY, OVERCROWDING and POOR HYGIENE**.\n- **Organism: Chlamydia trachomatis, serovars A, B, Ba and C** *(the p.91 figure omits Ba — `cnj-10`)*.\n- **Two stages, with considerable overlap:** **ACTIVE** inflammatory and **CICATRICIAL** chronic.\n\n### Active — the child\n- **Commonest in PRESCHOOL CHILDREN.**\n- **UPPER TARSAL FOLLICULAR conjunctivitis** with **mucopurulent discharge**; a papillary reaction may coexist.\n- **Cornea: SUPERIOR EPITHELIAL KERATITIS**, and **PANNUS** — **superficial corneal VASCULARIZATION and cellular infiltration**.\n- **Figure-only:** the pannus advances **from the SUPERIOR limbus** downward; the direction is drawn, never written.\n\n### Cicatricial — middle age\n- **CONJUNCTIVAL SCARRING:** most prominent on the **UPPER TARSAL PLATE**.\n- **Mild: LINEAR or STELLATE** scars. **Severe: broad confluent scars — ARLT'S LINE.**\n- **HERBERT PITS:** **superior LIMBAL follicles resolving into a ROW OF SHALLOW DEPRESSIONS** *(in-figure \"Herber't Pit\" [sic])*.\n- **POST-TRACHOMATOUS CONCRETIONS (PTCs):** causing **chronic irritation and foreign-body sensation**.\n- **Late complications:** **TRICHIASIS · corneal vascularization · CICATRICIAL ENTROPION · severe corneal opacification.**\n\n### ⚠️ WHO grading — five grades, and the numbers are the question\n\n|Grade|Definition|\n|---|---|\n|**TF** inflammation, follicular|**5 or more follicles**, each **> 0.5 mm**, on the **superior tarsal plate**|\n|**TI** inflammation, intense|diffuse tarsal involvement **obscuring ≥ 50 % of the deep tarsal vessels**; papillae present|\n|**TS** conjunctival scarring|**easily visible fibrous white tarsal bands**|\n|**TT** trachomatous trichiasis|**at least ONE lash touching the globe**|\n|**CO** corneal opacity|enough to **blur at least part of the pupillary margin**|\n\n- *Defect note: no grade is called \"T4\" anywhere — the five above are the whole system, and the **MacCallan** classification is not printed at all.*\n\n### Management — SAFE, and the only four doses in the chapter\n- **S**urgery for trichiasis · **A**ntibiotics for active disease · **F**acial hygiene · **E**nvironmental improvement.\n- **Treat the patient AND ALL FAMILY MEMBERS**; **⚠️ communities may need ANNUAL treatment**, one course being unreliable in an individual.\n- **AZITHROMYCIN —** a **SINGLE DOSE of 20 mg/kg up to 1 g**, and the **TREATMENT OF CHOICE**.\n- **ERYTHROMYCIN 500 mg twice daily × 14 days**, or **DOXYCYCLINE 100 mg twice daily × 10 days**.\n- **⚠️ Tetracyclines:** relatively contraindicated in **PREGNANCY, BREASTFEEDING and UNDER 12s**.\n- **TOPICAL 1 % TETRACYCLINE:** **LESS EFFECTIVE than oral treatment**.\n\n*Entropion and trichiasis as lid disease are `op-lid`'s; `va-9` and `red-11` carry the labels. ⚠️ Merged `va-10` glosses PTCs as \"pale trachomatous / conjunctival concretions\" — the book's own expansion is the one above.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.6 pp.92–93",
        "qs": []
      },

      {
        "id": "cnj-12",
        "w": "must",
        "h": "The differential grid — and the column the book left out",
        "body": "**⚠️ The chapter's whole discrimination:** conjunctivitis means **NORMAL VA · NORMAL PUPIL · NO PHOTOPHOBIA · CLEAR CORNEA · NORMAL ANTERIOR CHAMBER**. The only place those five negatives appear.\n\n### The book's grid, as printed\n\n||**VIRAL**|**BACTERIAL**|**ALLERGIC**|\n|---|---|---|---|\n|**Itching**|mild|mild|**INTENSE**|\n|**Discharge**|**watery**|**mucopurulent / purulent**|**mucoid (ropy)**|\n|**Signs**|**FOLLICLES + preauricular node**|**PAPILLAE**|**PAPILLAE (cobblestone)**|\n|**Referral**|elective|usually elective; **may cause MARGINAL KERATITIS**|elective; **refer if resistant, to exclude VKC**|\n|**Treatment**|cold compresses · artificial tears · **± short topical steroid** for relief|**topical antibiotics** (drops and ointment)|cold compresses · **topical antihistamine** · **mast cell stabilizer** · short steroid course|\n\n- **⚠️ Itching is the allergic discriminator** — the only cell in the top row that is not \"mild\". *Histamine on conjunctival H1 receptors produces itch; neither virus nor bacterium releases it in quantity (not in course material).*\n\n### ⚠️ Two defects, recorded\n- **THERE IS NO CHLAMYDIAL COLUMN**, although pp.91–92 teach adult chlamydial disease in full. It is discriminated in no grid anywhere.\n- **The Bacterial \"Referral\" cell:** it **REPRINTS the p.91 dashed Tutorial box almost verbatim, UNMARKED** — the same content skip-in-final in one place and core in the other. **The marker is not propagated to the table.**\n\n### The missing column, assembled from pp.91–92\n- **Itching** absent · **discharge MUCOPURULENT** · **onset SUBACUTE**, neither acute-bacterial nor days-long viral.\n- **Signs: FOLLICLES on UPPER AND LOWER tarsal conjunctiva · TENDER preauricular nodes**, papillae if chronic.\n- **Treatment: systemic azithromycin / doxycycline / erythromycin**, topical ointment, **genitourinary referral**.\n- *Assembled here from the chapter's own prose — not printed as a column by the book.*\n\n*⚠️ `rdm-5` prints a larger six-column grid from `L37`, graded 0–3; this one adds the **sign** and **treatment** rows it has no room for. `cor-9` is a third version.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.6 p.94",
        "qs": []
      },

      {
        "id": "cnj-13",
        "w": "must",
        "h": "The two degenerations — one spares the cornea and one climbs onto it",
        "body": "### Pingueculum\n*The book's heading spelling; its own figure caption prints \"Pinguecula\".*\n- **What:** a **YELLOW-WHITE SUBEPITHELIAL deposit of HYALINE and ELASTIC tissue** at the **NASAL or TEMPORAL limbus**, **SPARING THE CORNEA**.\n- **Associated with: SUN and WIND exposure, and AGEING**; **BENIGN**, sometimes enlarging slowly.\n- **Why it irritates:** **abnormal TEAR-FILM DISTRIBUTION** over the raised surface.\n- **Treatment: LUBRICATING DROPS** for irritation · **excision for COSMESIS ONLY**.\n\n### Pterygium\n*The book prints an Arabic marginal gloss beside the heading — **\"تيجي على الكورنيا\"**, \"it comes onto the cornea\" — as the mnemonic against pingueculum.*\n- **What:** a **FIBROVASCULAR, TRIANGULAR, WING-LIKE ENCROACHMENT** of epithelial tissue **ONTO THE CORNEA**.\n- **How it costs vision:** by **inducing ASTIGMATISM**, or by **covering the PUPILLARY AREA**.\n- **SIMPLE EXCISION WITH BARE SCLERA**, for four indications: **chronic inflammation · threat to the visual axis · induced astigmatism · cosmesis**.\n- **⚠️ ONE THIRD RECUR after simple excision.**\n- **CONJUNCTIVAL AUTOGRAFT — recurrence falls to 5 %**, or **MITOMYCIN-C** after simple excision.\n- **Figure-only:** the autograft is **HARVESTED FROM THE SUPERIOR BULBAR CONJUNCTIVA**. The prose names the graft and never says where it comes from.\n- **⚠️ Not printed anywhere in the chapter:** any **GRADING**, the **elastotic-degeneration / UV pathogenesis**, **Stocker's line**, **Fuchs' flecks**, the head/neck/body anatomy, and the complications of mitomycin-C. Stated rather than filled.\n\n*Pterygium as a red eye: `red-10`; as a corneal degeneration, with the crosses-the-limbus grid: `cor-16`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.6 pp.94–95",
        "qs": []
      },

      {
        "id": "cnj-14",
        "w": "must",
        "h": "Subconjunctival haemorrhage — alarming, benign, and one exception",
        "body": "- **What it is:** **blood under the conjunctiva**, otherwise **asymptomatic**.\n- *No significant pain, no effect on vision, no discharge (Tutorial — skip in final).*\n\n### Causes\n- **IDIOPATHIC**, or associated with **TRAUMA**.\n- **VALSALVA MANOEUVRE** *— the examples, coughing / sneezing / straining, are Tutorial-marked; the manoeuvre itself is core.*\n- **Systemic:** **BLEEDING DISORDERS · HYPERTENSION · ANTICOAGULATION THERAPY.**\n\n### Management\n- **Reassurance**, if there are **no other ocular findings** · **MEASURE THE BLOOD PRESSURE** and work up for a cause.\n- **⚠️ It RESOLVES SPONTANEOUSLY in 2–3 WEEKS.** No drops, no antibiotic, no treatment at all.\n- **⚠️ THE ONE EXCEPTION:** a **LARGE** haemorrhage **with a history of TRAUMA** should raise **high suspicion of GLOBE RUPTURE**, the rupture being **obscured by the blood** *(the referral clause is Tutorial-marked; the suspicion is core)*.\n- *Boxed (Tutorial — skip in final): **artificial tears** for discomfort · **if on an ANTICOAGULANT, CHECK THE INR** · **if RECURRENT, investigate for a bleeding disorder**.*\n\n*The venous-pressure mechanism and the 1–2-day tenderness: `rdm-10`. The flat sheet with no visible vessels: `rdm-2`. The open globe: `trm-9`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.6 p.95",
        "qs": [
          "opqb-t1-66"
        ]
      },

      {
        "id": "cnj-15",
        "w": "know",
        "h": "Five the lecture names and the book never teaches",
        "body": "*⚠️ `L6) Conjunctiva` is a 66-slide photograph atlas, 342 words, most slides a bare title. Five titles name entities ch.6's not-covered list confirms are absent from the book. **All five supplied and tagged**, so the lecture's scope is not narrower here than in the hall.*\n\n- **ANGULAR CONJUNCTIVITIS:** chronic conjunctivitis at the **OUTER and INNER CANTHI** with **maceration of adjacent skin**, classically **MORAXELLA LACUNATA**; topical **tetracycline or zinc** *(not in course material)*.\n- **PHLYCTENULAR KERATOCONJUNCTIVITIS:** a **DELAYED-HYPERSENSITIVITY nodule at the LIMBUS** — pinkish-white, with a leash of vessels — classically to **tuberculoprotein** or **staphylococcal** antigen; **topical steroid**, plus treat the cause *(not in course material)*.\n- **TRACHOMATOUS NEBULA EX PANNUS:** the **faint corneal SCAR left when a trachomatous pannus regresses** — the healed end of `cnj-11`'s vascularization *(not in course material)*.\n- **BITÔT'S SPOT:** a **foamy triangular dry white patch on the TEMPORAL bulbar conjunctiva**, the ocular marker of **VITAMIN A DEFICIENCY**, with **xerosis, night blindness and keratomalacia**; treated with **vitamin A** *(not in course material)*.\n- **SYMBLEPHARON:** an **ADHESION between palpebral and bulbar conjunctiva**, from **cicatrising conjunctivitis** — chemical burn, Stevens–Johnson, ocular pemphigoid, severe trachoma *(not in course material)*.\n\n*Symblepharon after burns: `trm-2`, `trm-5`; in Stevens–Johnson: `rdm-6`. Vitamin A deficiency deferred to `op-systemic`. ⚠️ The book teaches **none** of the cicatrising conjunctivitides.*\n\nSrc: L6 slides 24, 29, 46, 62, 63 (titles only — cited, not counted); every definition supplied and tagged",
        "qs": []
      }

    ]
  },

  "op-squint": {
    "intro": "Four classifications — direction, comitance, intermittency, aetiology — then an examination. The book marks that examination \"skip in final\" while the question bank asks it repeatedly, so it is written here in full, with the book's own tag recorded on it.",
    "sections": [

      {
        "id": "sqt-1",
        "w": "must",
        "h": "Definition, pseudostrabismus, and what an untreated squint costs",
        "body": "- **Strabismus:** the eyes are **MISALIGNED**, so **both cannot be directed at the object of regard at the same time**.\n- *The contents page prints \"Squint\", the opener \"Strabismus (Squint)\", the banner \"Strabismus (squint)\". Grep all three.*\n\n### Pseudostrabismus\n- **What:** the eyes **FALSELY APPEAR deviated** while **the visual axes are properly ALIGNED**.\n- **Causes: prominent EPICANTHAL FOLDS · HYPERTELORISM** — increased distance between the eyes or orbits.\n\n### Sequelae *(printed \"Sequalae\" [sic])*\n- **AMBLYOPIA — before the age of 8–10 YEARS.**\n- **DIPLOPIA and CONFUSION — in OLDER age groups.**\n\n### The lecture's own first cut — three kinds\n- **APPARENT:** nasal bridge and epicanthus — the book's pseudostrabismus.\n- **LATENT: heterophoria** (`sqt-4`). **MANIFEST: PARALYTIC or COMITANT** (`sqt-3`, `sqt-7`).\n\n*Amblyopia in full: `sqt-9`, its definition also in `ast-11`. Confusion and suppression as sensory adaptations: `sqt-4`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.15 p.197; L29",
        "qs": []
      },

      {
        "id": "sqt-2",
        "w": "must",
        "h": "A) By direction — the four deviations, and the words for them",
        "body": "### Horizontal\n- **ESOTROPIA:** turned **INWARDS** — **CONVERGENT** strabismus.\n- **EXOTROPIA:** turned **OUTWARDS** — **DIVERGENT** strabismus.\n\n### Vertical\n- **HYPERTROPIA:** shifted **UPWARDS**. **HYPOTROPIA:** shifted **DOWNWARDS**.\n\n### ⚠️ How the words are built\n- **The prefix is the DIRECTION** — eso in, exo out, hyper up, hypo down.\n- **The suffix is the STATE** — **-TROPIA** manifest, **-PHORIA** latent (`sqt-4`).\n\n- **Figure-only:** the prose defines each in a clause and **never says which eye is the deviating one or how it looks**; a four-quadrant diagram and four photographs carry recognition.\n- *Defect note: the direction figure labels hypertropia **\"Unward turning\"** [sic].*\n\n*The muscle, its nerve and the six cardinal positions: `pup-7`, `pup-8` — not re-derived here.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.15 p.197",
        "qs": []
      },

      {
        "id": "sqt-3",
        "w": "must",
        "h": "B) By comitance — the division that decides how worried to be",
        "body": "*The book heads this **\"commitance\"** [sic], spells the heading **\"Comitant\"** and its own bullets **\"concomitant\"**. All three as printed.*\n\n### Comitant (concomitant)\n- **The definition:** the **ANGLE of misalignment is APPROXIMATELY EQUAL IN ALL DIRECTIONS OF GAZE**.\n- **The muscles are individually NORMAL** — both eyes simply are not directed at the same target.\n- **Onset:** most begins **in CHILDHOOD**; the child develops **SUPPRESSION** to overcome double vision → **STRABISMIC AMBLYOPIA**.\n- **⚠️ Under age 6:** it is **RARELY caused by serious neurologic disease**.\n- **⚠️ Arising LATER in life:** it may have a **SPECIFIC AND SERIOUS NEUROLOGIC BASIS**.\n\n### Incomitant\n- **The definition:** the **misalignment VARIES WITH THE DIRECTION OF GAZE**.\n- **Two mechanisms:** muscles or nerves **not functioning — PARALYTIC**; or movement **MECHANICALLY RESTRICTED — RESTRICTIVE**.\n- **⚠️ What it may indicate:** **third nerve palsy · orbital disease · trauma · the restrictive ophthalmopathy of THYROID disease · a BLOWOUT FRACTURE**.\n\n### ⚠️ How incomitance is detected — figure-only\n- **The manoeuvre:** compare the deviation **in the primary position** with the deviation **in each gaze direction**.\n- **The book's worked left sixth-nerve example:** moderate **left esotropia in primary position** → **normal abduction right, normal adduction left** → **normal adduction right, SEVERELY RESTRICTED ABDUCTION LEFT**.\n- **⚠️ The rule it demonstrates:** **the angle GROWS in the field of action of the UNDERACTING muscle.** The prose defines incomitance and never shows the manoeuvre.\n\n||**COMITANT**|**INCOMITANT**|\n|---|---|---|\n|**Angle**|**same in all gaze positions**|**varies**, largest in the weak muscle's field|\n|**Muscles**|**normal individually**|**paralysed, paretic or restricted**|\n|**Usual age**|**childhood**|any; **new onset in an adult is the alarming one**|\n|**Concern**|**under 6, rarely neurologic**|**neurologic or orbital until excluded**|\n\n*EOM actions and nerves: `pup-7`; ductions, versions, cardinal positions: `pup-8`. ⚠️ The book delegates the same in prose — p.197 sends the reader to \"Examination chapter (page 15)\". **That page number is NOT resolved here**: chapter 1 carries a documented one-page anomaly and has not been read. Blow-out fracture: `orb-14`, `trm-7`; thyroid eye disease: `orb-6`, `sys-7`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.15 p.198",
        "qs": [
          "opqb-t1-53"
        ]
      },

      {
        "id": "sqt-4",
        "w": "must",
        "h": "C) By intermittency — heterophoria, heterotropia, and the words that get swapped",
        "body": "### Intermittent strabismus\n- **Not always manifest**; frequency and timing vary between patients. **HETEROPHORIA belongs in this spectrum**, at its latent end.\n\n### Heterophoria — the latent tendency\n- **What:** a **LATENT TENDENCY for misalignment**, **MANIFEST ONLY IF BINOCULAR VISION IS INTERRUPTED** — by covering one eye.\n- **Binocular viewing:** both eyes **aligned perfectly** on the same object.\n- **One eye covered:** it **DRIFTS TO ITS POSITION OF REST**. **Cover removed:** it **REALIGNS** with the other.\n- **⚠️ A minor degree —** **HETEROPHORIA IS NORMAL FOR MOST INDIVIDUALS**, and not a disease until it decompensates.\n\n### Constant (manifest) strabismus\n- **The patient CANNOT FUSE**; the strabismus is **ALWAYS MANIFEST**. **HETEROTROPIA** is another term for it.\n- **TROPIA:** a **MANIFEST deviation present with BOTH EYES OPEN, no covers**; **binocular vision usually reduced**.\n- **⚠️ But:** some show an **INTERMITTENT heterotropia**, achieving binocular vision part of the time.\n\n### The lecture's phoria — symptoms and treatment\n- **Causes: ERRORS OF REFRACTION** and **MUSCULAR IMBALANCE**.\n- **Symptoms, ascending: NONE · MUSCULAR ASTHENOPIA · INTERMITTENT DIPLOPIA · DISTRESS WATCHING MOVING OBJECTS.**\n- **Treatment ladder: NO TREATMENT · GLASSES** for eso- and exophoria · **ORTHOPTIC TREATMENT · PRISMS, RELIEVING or EXERCISING · SURGERY.**\n\n### Sensory adaptations — what the brain does instead\n- **DIPLOPIA and CONFUSION** first — two images, and two scenes on one retinal point.\n- **SUPPRESSION** next, to abolish them; **AMBLYOPIA** last, when suppression is constant and one-sided (`sqt-9`).\n\n- **Figure-only:** a three-panel diagram — **straight → one eye occluded and drifting → cover removed, both recovering** — is the book's only depiction of what a cover does, and it reappears in the cover–uncover cell on p.203.\n\n*Asthenopia as a refractive symptom: `ref-14`, `ast-5`. Fusion as a sensory act: `pup-8`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.15 pp.198–199; L29",
        "qs": []
      },

      {
        "id": "sqt-5",
        "w": "must",
        "h": "D) By aetiology — the two esotropias of childhood",
        "body": "### Refractive (accommodative) esotropia\n*The heading prints \"Refractive esotropia\"; **ACCOMMODATIVE** appears only in a figure caption, and is the standard name.*\n- **Who: children with HIGH HYPERMETROPIA**, manifesting at **AGE 2–4 YEARS** *(the lecture prints **2.5–5**)*.\n- **The mechanism:** uncorrected hypermetropia forces **CONSTANT ACCOMMODATION** to see clearly.\n- **The link:** accommodation is part of the **NEAR-REFLEX TRIAD — ACCOMMODATION, CONVERGENCE, MIOSIS**.\n- **⚠️ The consequence:** excessive accommodation drags excessive **CONVERGENCE** with it → **ESOTROPIA**.\n- **Treatment: HYPERMETROPIC GLASSES** — the full correction, not surgery.\n- **HIGH AC/A RATIO:** the lecture's term for accommodative convergence per dioptre of accommodation — why a small error makes a large turn.\n- **Drugs, from the lecture: ATROPINE** and **MIOTICS**, which shift the accommodative demand.\n- **Figure-only:** the before-and-after-glasses pair. The prose says glasses correct it; only the figure shows **full** correction.\n\n### Infantile (congenital) esotropia\n- **When: the FIRST YEAR OF LIFE** — the lecture sharpens it to **UNDER 6 MONTHS**.\n- **Characterised by a LARGE-ANGLE, CONSTANT** strabismus.\n- **CROSS FIXATION:** the lecture's sign — the child uses the **right eye to look LEFT** and vice versa, so **neither eye ever abducts** and abduction looks falsely absent.\n- **Treatment: it usually REQUIRES SURGERY.** Glasses do not correct it.\n\n||**ACCOMMODATIVE**|**INFANTILE**|\n|---|---|---|\n|**Onset**|**2–4 y** (deck 2.5–5)|**first year**, deck **< 6 months**|\n|**Angle**|variable, driven by accommodation|**LARGE and CONSTANT**|\n|**Refraction**|**high HYPERMETROPIA**|not the driver|\n|**Treatment**|**GLASSES**|**SURGERY**|\n\n*Hypermetropia in full, and the accommodative-esotropia mechanism: `ref-14`, `ref-15`. The near-reflex triad: `pup-3`, `pup-4`, `ref-12`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.15 p.199; L29",
        "qs": []
      },

      {
        "id": "sqt-6",
        "w": "must",
        "h": "D) continued — exotropia, the sensory eye, and the trapped muscle",
        "body": "### Intermittent exotropia\n- **A COMMON type**, presenting usually **in CHILDREN**.\n- **⚠️ Its course:** it **DETERIORATES and usually REQUIRES SURGERY** — the one intermittent deviation that does not stay intermittent.\n- **Figure-only:** the same patient photographed straight and deviated is what \"intermittent\" means.\n- **Lecture treatment ladder: GLASSES** for the refractive error · **ORTHOPTICS with CONVERGENCE EXERCISES · BASE-IN PRISMS · SURGERY at 4 YEARS**.\n\n### Sensory strabismus\n- **The mechanism:** **vision POOR IN ONE EYE FOR A LONG TIME** → that eye **may deviate**, either way — **sensory EXOTROPIA or ESOTROPIA**.\n\n### Restrictive strabismus\n- **The mechanism: MECHANICAL LIMITATION** to eye movement.\n- **The book's example:** an **ORBITAL FLOOR FRACTURE** → **ENTRAPMENT OF THE INFERIOR RECTUS** → **restricted movement UPWARDS**.\n- **The other named cause:** the **restrictive ophthalmopathy of THYROID disease**.\n\n### The lecture's own type lists\n- **Five exotropias: intermittent · congenital · accommodative · sensory · CONSECUTIVE** — the last following surgery for an esotropia.\n- **Four esotropias: congenital · accommodative · sensory · consecutive.**\n- **⚠️ \"Consecutive\":** the deck's word, and **the book prints neither list** — it names the iatrogenic case the book has no vocabulary for.\n\n*Blow-out fracture in full: `orb-14`, `trm-7`. Thyroid eye disease: `orb-6`, `sys-7`. The causes of a long-standing poor eye: `cat-11`, `wht-7`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.15 p.200; L29",
        "qs": []
      },

      {
        "id": "sqt-7",
        "w": "must",
        "h": "D) continued — paralytic squint, and what marks it out from every other kind",
        "body": "- **Paralytic strabismus:** **paralysis of one of the nerves — 3rd, 4th, 6th — that move the extraocular muscles**.\n\n### The three palsies, as deviations\n\n||**Deviation produced**|**The extra sign**|\n|---|---|---|\n|**SIXTH**|**ESOTROPIA** with **limitation of ABDUCTION**|**the commonest nerve affected by RAISED INTRACRANIAL PRESSURE**|\n|**THIRD**|**EXOTROPIA and HYPOTROPIA** — only **LR and SO** still work|**PTOSIS, which MASKS the diplopia** (external ophthalmoplegia)|\n|**FOURTH**|**HYPERTROPIA and HEAD TILT**|**CONGENITAL IV palsy is the commonest cause of head tilt in children**|\n\n- **⚠️ The third nerve's pupil: MYDRIASIS may be present** — total (external and internal) ophthalmoplegia — because the nerve carries the **parasympathetic fibres to the sphincter pupillae**.\n- **⚠️ And what that can mean:** an **ENLARGING ANEURYSM IN THE CIRCLE OF WILLIS**.\n\n### Causes — the same four for any of the three nerves\n- **Four causes:** **DIABETES MELLITUS · HEAD TRAUMA · SPACE-OCCUPYING LESION** and other causes of **RAISED INTRACRANIAL PRESSURE** · **rarely CONGENITAL or IDIOPATHIC**.\n- **⚠️ The investigation rule: ACUTE-ONSET** paralytic strabismus is investigated for **DIABETES** and with an **MRI OF THE BRAIN**.\n\n### What the lecture adds, and the book omits\n- **⚠️ SECONDARY ANGLE > PRIMARY ANGLE:** the deviation with the **paralysed** eye fixing exceeds that with the normal eye fixing. **It is the sign of a paralytic squint**, and does not occur in a comitant one.\n- **DIPLOPIA, typed: UNCROSSED or CROSSED.**\n- **ABNORMAL HEAD POSTURE, three components**, each **in the direction of action of the paralysed muscle**: **FACE TURN · CHIN elevation or depression · HEAD TILT**.\n- **FALSE ORIENTATION:** projection into the paralysed muscle's field, producing **VERTIGO, NAUSEA and an UNCERTAIN GAIT**.\n\n*The three palsies in neurological depth — aetiology and percentages, the pupil-sparing rule, recovery times, myasthenia, nystagmus — are written in full in `mot-1`–`mot-8` and NOT re-derived here.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.15 pp.200–201; L30",
        "qs": []
      },

      {
        "id": "sqt-8",
        "w": "must",
        "h": "Treatment — three lines, and one of them is tutorial-marked",
        "body": "**The stated aim:** the most effective way to **support FUSION** is to **treat the amblyopia AND equalize the vision**. Alignment comes second.\n\n### Glasses\n- **In hyperopia:** glasses **treat SOME OR ALL of the esotropia**.\n- **In myopia:** they may **DECREASE THE FREQUENCY of deviation** in an individual with exotropia.\n\n### Surgery\n- **Still necessary** particularly in children with esotropia **BEFORE THE AGE OF 6 MONTHS** — congenital esotropia.\n- **⚠️ Cosmesis is a VALID INDICATION:** even where binocular vision is unachievable, the **impact of a disfiguring strabismus on self-image** justifies operating.\n- *Boxed: surgical correction in **CONSTANT deviation NOT CORRECTED BY GLASSES** (Tutorial — the book's mark for \"study in round & skip in final\").*\n- **⚠️ PARALYTIC squint from trauma or diabetes: SPONTANEOUS RESOLUTION WITHIN 6 MONTHS** may occur. If it does not, surgery corrects it.\n\n### The operations, from the lecture\n- **RECESSION:** the muscle is **reattached further back**, weakening it. **RESECTION:** a length is **excised**, strengthening it.\n- **⚠️ Incomplete paralysis: RESECTION–RECESSION. Complete paralysis: MUSCLE TRANSPOSITION**, borrowing a working muscle's action.\n- **Timing in paralytic squint: AFTER 6 MONTHS**, once the angle is stable.\n- **⚠️ No millimetres:** neither the book nor either deck prints one. In practice the dose is calculated in **mm per prism dioptre**, and **BOTULINUM TOXIN** into the antagonist is an alternative in selected cases *(neither is in the course material)*.\n\n### Orthoptics and occlusion\n- **PATCHING, to correct amblyopia** *(Tutorial — skip in final)*.\n- **⚠️ Note what that means:** the only amblyopia treatment the book names is the one it tells you to skip — no regimen, no hours, no age limit. See `sqt-9`.\n- **ORTHOPTIC TREATMENT —** for binocular vision, in three grades: **SIMULTANEOUS PERCEPTION · FUSION · DEPTH PERCEPTION**.\n\n*Prisms in glasses and monocular occlusion as the general treatment of any cranial nerve palsy: `mot-1`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.15 p.201; L29, L30. The millimetre principle and botulinum toxin are supplied and tagged",
        "qs": []
      },

      {
        "id": "sqt-9",
        "w": "must",
        "h": "Amblyopia — named five times, defined never",
        "body": "*⚠️ The book names amblyopia five times and **defines it nowhere**. It gives one date — before **8–10 years** — one type name, **strabismic**, and one treatment, **patching**, which it marks Tutorial. Everything beyond those three items is supplied and tagged.*\n\n- **What it is:** **reduced best-corrected acuity in a STRUCTURALLY NORMAL eye**, because a clear matched image never reached the cortex during development *(also in `ast-11`; not in course material)*.\n- **The mechanism in squint:** the deviating eye's image is **SUPPRESSED** to abolish diplopia and confusion; constant one-sided suppression becomes **STRABISMIC AMBLYOPIA**.\n- **⚠️ The window: BEFORE 8–10 YEARS** — the book's own figure, and why a squint in a child is urgent and in an adult is not.\n\n### The four types *(only \"strabismic\" is in the book)*\n- **STRABISMIC:** one eye deviates and is suppressed.\n- **ANISOMETROPIC:** unequal refractive error — **no squint, no white pupil, no complaint**, and so the one that is missed.\n- **AMETROPIC:** high bilateral error, **both eyes** affected.\n- **STIMULUS-DEPRIVATION:** a **congenital cataract, dense ptosis or corneal opacity** blocking the image — **the worst prognosis of the four**.\n\n### Treatment — the order matters\n- **1. REMOVE THE OBSTACLE:** operate the cataract, lift the ptosis.\n- **2. CORRECT THE REFRACTIVE ERROR** with full **CYCLOPLEGIC** correction, and wait — some amblyopia resolves on glasses alone.\n- **3. THEN OCCLUDE: PATCH THE GOOD EYE**, forcing use of the amblyopic one *(the only step the book names, and it marks it Tutorial)*.\n- **The regimen, supplied: 2–6 hours a day**, graded to severity and age, with **review roughly weekly per year of age** *(not in course material)*.\n- **⚠️ The complication of the treatment: OCCLUSION AMBLYOPIA** of the patched good eye — which is why the review interval exists *(not in course material)*.\n- **Alternative: ATROPINE PENALISATION** of the good eye where patching fails or is refused *(not in course material)*.\n\n*Anisometropia and the amblyopia definition: `ast-11`. Pre-verbal acuity and CSM: `va-6`. Paediatric cataract, with surgery within weeks: `cat-11`, `cts-2`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.15 pp.197, 198, 201; the definition, classification, treatment order and occlusion regime are supplied and tagged",
        "qs": []
      },

      {
        "id": "sqt-10",
        "w": "must",
        "h": "Assessing a squint — the history and the inspection",
        "body": "**⚠️ Two authorities disagree here —** read both facts:\n- **The book says skip it:** printed pp.202–203 open *\"The next two pages are from tutorial .. Skip in Final\"*, and the **whole examination sequence** lives inside them.\n- **The question bank says learn it:** almost every question filed under this chapter comes from those two pages.\n- **What is done here:** the block is written **in full and at full weight**, across this section and the two below. The tag is recorded as **data about what the book says** — never permission to omit.\n\n### History\n- **Ask:** **AGE AT ONSET · UNILATERAL or ALTERNATING · DIPLOPIA? · PREVIOUS TREATMENT** (glasses, surgery).\n\n### The rest of the work-up\n- **VISUAL ACUITY — looking for AMBLYOPIA.**\n- **REFRACTION, CYCLOPLEGIC** — the book names no drug, no age and no concentration.\n- **ANTERIOR SEGMENT: corneal opacity, CATARACT.**\n- **FUNDUS: OPTIC ATROPHY, RETINOBLASTOMA.**\n- **⚠️ The fundus line:** it matters most and is easiest to skip — a squint can be the presenting sign of a **sight- and life-threatening tumour**, and it sits inside the pages marked skippable.\n\n### 1. Inspection\n- **One eye straight while the other turns: INWARD** esotropia · **OUTWARD** exotropia · **UPWARD** hypertropia · **DOWNWARD** hypotropia.\n- **HEAD TILTING.**\n- **EPICANTHAL FOLD or WIDE NASAL BRIDGE — pseudostrabismus** *(printed \"pseudostabismus\" [sic])*.\n\n### Pseudostrabismus — the figure panel pairs the causes\n- **As the panel prints it:** a **clinical IMPRESSION of ocular deviation when NO squint is present**.\n- **The pairing:** **EPICANTHUS → PSEUDO-ESOTROPIA · HYPERTELORISM → PSEUDO-EXOTROPIA.**\n- **⚠️ Figure-only:** the p.197 prose lists both causes and **never says which pseudo-deviation each produces**.\n\n*Retinoblastoma: `wht-7`; paediatric cataract: `cat-11`; optic atrophy: `op-neuro-optic`; acuity in a pre-verbal child: `va-6`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.15 p.202 — the whole page is marked Tutorial by the book",
        "qs": []
      },

      {
        "id": "sqt-11",
        "w": "must",
        "h": "2. The corneal light reflex — Hirschberg, and the direction that catches everyone",
        "body": "*⚠️ Still inside the book's Tutorial page range (pp.202–203) — see `sqt-10`. Written at full weight.*\n\n- **Normal:** the light reflects **SYMMETRICALLY on each cornea**, relative to the pupil and visual axis of each eye.\n- **In a deviating eye:** the reflection is **ECCENTRIC**, and **in a direction OPPOSITE TO THE DEVIATION**.\n- **First job: EXCLUDE PSEUDO-STRABISMUS.**\n- **⚠️ Why it comes first in a small child:** it needs **a penlight and nothing else** — no chart, no letters, no cooperation beyond looking at the light.\n\n### ⚠️ Reading the direction — the step the questions are built on\n\n|Reflex sits|The eye is turned|Diagnosis|\n|---|---|---|\n|**TEMPORALLY** (outward)|**INWARD**|**ESOTROPIA**|\n|**NASALLY** (inward)|**OUTWARD**|**EXOTROPIA**|\n|**DOWNWARD**|**upward**|**hypertropia**|\n|**UPWARD**|**downward**|**hypotropia**|\n\n- **⚠️ The reflex moves AGAINST the turn.** Rotate the globe outward and the corneal apex swings out with it, so the reflection lands **relatively nasal**. Read the reflex, then reverse it *(the mechanism is supplied — not in course material)*.\n\n### HIRSCHBERG — the eponym, and the estimate\n- **⚠️ Figure-only:** the name **HIRSCHBERG TEST** appears **only inside the pseudostrabismus figure**. The prose calls it \"corneal light reflex\" and never uses the eponym.\n- **The prose stops at:** *\"The amount of deviation can be estimated.\"*\n- **Figure-only scale —** reflex position on the eye, **0 · 15 · 30 · 45 · 70**: 0 at the pupil centre, 15 and 30 within pupil and iris, 45 at mid-iris, **70 at the LIMBUS**.\n- **Figure-only chart, in DEGREES: 0° · 15° · 30° · 45°**, the reflex displaced progressively further nasally down the rows.\n- *Defect note: the scale runs to **70** and the chart has **no 70° row** — four rows against five scale marks. Both transcribed, neither reconciled.*\n- **⚠️ No prism dioptre:** **NONE APPEARS ANYWHERE IN THE CHAPTER**, and no mm-to-degree conversion. The degree marks above are the only angular measure given.\n- **The conversion, supplied:** the estimate is meaningless without it — **1 mm of displacement ≈ 7° ≈ 15 prism dioptres** *(not in course material)*.\n\n*The reflex as a technique — symmetry, the opposite-direction rule, and that the angle can be estimated from it — is already written in `pup-8` and is not re-derived; this section owns the interpretation. The reflex as the \"C\" of CSM fixation testing: `va-6`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.15 p.202 — Tutorial page; `pup-8` cited only. The prism-dioptre conversion is supplied and tagged",
        "qs": [
          "opqb-t1-43",
          "opqb-t1-44",
          "opqb-t2-94"
        ]
      },

      {
        "id": "sqt-12",
        "w": "must",
        "h": "4 and 5. The cover tests — three manoeuvres, and they watch different eyes",
        "body": "*⚠️ Still inside the book's Tutorial page range — see `sqt-10`. Written at full weight.*\n\n**3. Extra-ocular muscle testing** is **delegated by the book** — *\"Go to Examination chapter (Page 16)\"*. It is written in `pup-7` and `pup-8`: the muscle–nerve–action grid, ductions, versions, the six cardinal positions. **⚠️ That page number is not resolved here** — chapter 1 carries a documented one-page anomaly and has not been read.\n\n### ⚠️ The two tests — and the commonest error is watching the wrong eye\n\n||**COMITANT MANIFEST SQUINT**|**HETEROPHORIA**|\n|---|---|---|\n|**COVER TEST — do**|**COVER THE FIXATING EYE**, observe **THE OTHER**|cover one eye, observe the **UNCOVERED** eye|\n|**COVER TEST — see**|**the UNCOVERED eye MOVES to pick up fixation**|**NO MOVEMENT**|\n|**COVER–UNCOVER — do**|observe the **COVERED** eye **AFTER removing the cover**|the same|\n|**COVER–UNCOVER — see**|**moves to fixate again → UNILATERAL squint** · **remains deviated → ALTERNATING squint**|**moves RAPIDLY to REGAIN fixation → HETEROPHORIA**|\n\n- **⚠️ Which eye:** the **cover test watches the UNCOVERED eye; the cover–uncover watches the COVERED one.** Getting that round the wrong way inverts every answer.\n- **Reading the cover test:** the eye that **MOVES is the deviating one**, and **the direction it moves is the OPPOSITE of where it was** — moving **inward** to fixate means it had been sitting **outward**, i.e. **exotropic**.\n- **⚠️ Unilateral or alternating:** decided by the **COVER–UNCOVER, never by the cover test**.\n- **Heterophoria, in the book's words:** a **latent squint, or tendency of the eye to deviate, corrected by the brain to achieve FUSION**.\n- **Figure-only: red arrows** carry the **direction** of the recovery movement and the fact that **it is the covered eye that moves** — neither is stated in words.\n\n### 5. Alternate cover test\n- **Uses:** reveals the **TOTAL DEVIATION — LATENT + MANIFEST** · **detects heterophoria** · **detects intermittent squint**.\n- **Procedure:** hold the cover over one eye **2–3 SECONDS**, then **shift rapidly** to the other — **breaking the binocular fusion mechanism**.\n- **Interpretation, with NO manifest squint** — watch the **uncovered** eye: **no movement → ORTHOPHORIA** · **moves rapidly to fixate → HETEROPHORIA** · **remains deviated → INTERMITTENT SQUINT**.\n- **⚠️ 2–3 seconds:** the **only timing figure in the chapter**, and the only number in the examination section outside the Hirschberg figure.\n\n*⚠️ Neither the KRIMSKY nor the PRISM COVER test is printed in ch.15 — no deviation is ever measured in prism dioptres, only estimated (`sqt-11`). The four-dioptre base-out test, Worth's four-dot, Bagolini glasses and the stereoacuity tests are absent too.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.15 p.203 — Tutorial page; `pup-7`, `pup-8` cited only",
        "qs": [
          "opqb-t1-45",
          "opqb-t1-54"
        ]
      }

    ]
  }

};
