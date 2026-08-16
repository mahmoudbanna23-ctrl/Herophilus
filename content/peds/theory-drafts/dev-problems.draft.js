/* dev-problems — "Developmental problems", Paediatrics. Written 2026-08-16 under
   START-HERE.md §14 (slide-density revision notes) + §14.3a (layout) + §14.5
   (the deferral register), and content\peds\theory-plan.md, whose ONE local
   difference is that PAEDIATRICS HAS NO 3,000-WORD CAP:
   budget = max(lecture words, 25 x questions, 600).
   Shape copied from normal-dev.draft.js, its immediate neighbour.

   DECK LABELS USED IN THE Src LINES:
     L2  = 2) developmental problems.pdf — Dr Hanan G. Azouz, Professor of
           Paediatric Neurology and Developmental Paediatrics, Alexandria
           Faculty of Medicine. 48 pages. Cache 1,355 node words.
           ⚠️ 28 WORDS PER PAGE. The densest-by-picture deck in paediatrics.
     L2p = Lec 2 Child development_.pdf — Ass. Prof. Shimaa Anwar Mohamed
           Anwar, Associate Professor of Paediatrics and Paediatric Neurology,
           Alexandria, MRCPCH, GMC registered UK. A 7-page born-digital
           handout whose own reference list names the Illustrated Textbook of
           Paediatrics 5th ed. and Nelson 21st ed. Cache 1,229 node words.
     L1  = 1) Normal development.pptx — ⚠️ BORROWED. This deck belongs to
           `normal-dev` and is not counted in this chapter's TERM 1. Its
           pp.34–56 carry EIGHT REGISTER ROWS addressed to this chapter, five
           of them image-only. 60 slides; converted through PowerPoint COM
           (fresh instance, opened read-only, exported to the scratchpad —
           `Semester 8\` untouched) and rendered at 110 dpi.

   ⚠️ PAGE NUMBERING. Split page N = PDF page N = slide N for all three decks.
   `pdftotext`'s trailing form feed makes the cached split report ONE PAGE MORE
   than each deck has, so the caches split as 49 / 8 / 61 against `pdfinfo`'s
   real 48 / 7 / 60. Every citation below is the real page.

   ============================================================================
   ⚠️⚠️ FINDING 0 — A SPLIT IS RECOMMENDED, AND THE SEAM IS THE LECTURE'S OWN
   DIVIDER SLIDE. MEASURED, NOT ESTIMATED.
   ============================================================================
   The chapter measures **3,374 body words = 14.06 pp at ÷240**, past the ~13 pp
   hard shape. Unlike `normal-dev`, which came in at 13.05 and stayed whole,
   this one has a **clean, contiguous, source-given seam**, so the split costs
   nothing and no section moves.

   ⚠️ THE SEAM IS NOT MINE. **L2 p7 is a full-page divider reading
   "Neurodevelopmental disorders — Autism Spectrum Disorders, Attention Deficit
   Hyperactivity Disorder."** Everything before it is developmental problems in
   general; everything after it is those two named disorders. The brief's
   suggested seam (global delay and intellectual disability on one side, the
   specific disorders on the other) and the lecturer's own divider fall in the
   SAME place.

   PROPOSED, with measured words:

   | Chapter | Title | Sections | Body words | pp at ÷240 |
   |---|---|---|---:|---:|
   | `dev-problems` | Developmental problems and global delay | dp-1 … dp-8 | **1,642** | **6.84** |
   | `dev-nd` | Neurodevelopmental disorders — autism and ADHD | dp-9 … dp-17 | **1,732** | **7.22** |

   1,642 + 1,732 = 3,374. Both halves were summed BY THE COUNTER over the file
   on disk, not added up as I wrote them.

   · Both halves clear the shape with room. Neither is a stub — the smaller is
     6.84 pp against `neuro-cp`'s 4 and `cardiac-acq`'s 5.
   · The ranges are CONTIGUOUS and no section is reordered or rewritten.
   · **Question reassignment is vacuous.** Zero questions carry
     chapter:'dev-problems' — verified by grepping app\data\questions.peds.js,
     which holds 81 questions across cardiac, infection and renal only. So
     `qs: []` on all 17 sections and nothing to move.
   · **The cross-references survive the cut in both directions** — dp-2 points
     at `genetics`/`perinatal-hie`/`endo-thyroid`, dp-3 and dp-9 at
     `normal-dev`, dp-11 at `normal-dev`. Only ONE crosses the proposed seam:
     dp-4's PKU line points back at dp-2. If the hub splits, that becomes a
     cross-chapter pointer and both halves still stand alone.

   ⚠️ IF THE HUB DECLINES THE SPLIT, the chapter is delivered whole as written
   and prints at ~14.1 pp — 1.1 pp over the shape, with the bill itemised at
   the foot of this header. It is delivered as ONE object here either way,
   because the brief asked for one.

   ============================================================================
   ⚠️⚠️ FINDING 1 — THE TWO MANDATORY RENDERS. BOTH PAID, AND THE SECOND PAID
   MORE THAN THE FIRST.
   ============================================================================
   Work in <scratchpad>\dev\, \nd\ and \hi\. **THREE DECKS RENDERED IN FULL OR
   IN THE ORDERED RANGE** — all 48 pages of L2, all 7 of L2p, and L1 pp.34–56,
   at 110 dpi, as 20 FOUR-UP CONTACT SHEETS, every sheet read; plus five
   250 dpi re-renders (L2 pp.11, 20, 45, 46, 47) to read their cells.

   ⚠️ THE TRIAGE ARITHMETIC, RECOMPUTED AT 45 WORDS AS INSTRUCTED. The project
   triage file filters at 5 words and lists `dev-problems` at 23 % blank.
   Measured here per page off `pdftotext -layout`:
     · at the 5-word filter L2 has **12 of 48 pages blank = 25 %**;
     · **at 45 words it has 33 of 48 = 69 %.**
   And the 45-word filter would STILL have missed the single biggest recovery
   in the chapter — **L2p p4, which carries the whole developmental-screening
   grid as one image with ~290 words of prose around it.** Same failure mode
   `normal-dev` reported on L1p p6. **On a 28-words-per-page deck the right
   answer is to render everything and stop filtering**, exactly as briefed.

   ⚠️ (a) WHAT THE `2) developmental problems` RENDER RECOVERED. The ADHD half
   of this deck is very nearly INVISIBLE to the text extraction — pages 45–48
   extract the four words "dr. Hanan Azouz" and nothing else, and they are the
   management slides.

     · **L2 p45 and p46 — THE TWO NICE ADHD GUIDELINE 2018 ALGORITHMS**, one
       for children under 5 and one for ages 5–18, complete with the drug
       ladder: **methylphenidate first line, then 1st lisdexamfetamine, 2nd
       atomoxetine or guanfacine**, and the **"drug treatment NOT recommended
       under 5"** rule. **ZERO of this is in the cache** — not a drug name, not
       the age split, not the guideline. Largest recovery. → dp-17.
     · **L2 p47 — the effect-size chart.** Seven treatments with numbers:
       stimulants 1.00, restrictive elimination diets 0.51, artificial food
       colourings 0.42, neurofeedback 0.29, cognitive training 0.24, omega 3
       0.16, parent training 0.02. Also image-only. → dp-17.
     · **L2 p30 — the dopamine mechanism slide.** Drugs / genetics / toxins →
       **hypofunctioning dopamine systems (mesocortical, mesolimbic,
       nigrostriatal)** → **impaired executive functions / shorter delay
       gradient / impaired motor control**. Nothing in the cache. → the `flow`
       on dp-13.
     · **L2 p31 — the THREE ADHD presentations** (predominantly inattentive,
       combined, predominantly hyperactive/impulsive), printed inside a
       graphic. The cache gives the two symptom lists and never names the
       three presentations they belong to. → dp-14.
     · **L2 p20 — the ASD comorbidity plate, and it is not just comorbidities.**
       Its centre carries the **DSM-5 counting rule — impaired social
       communication/interaction 3/3, restricted/repetitive behavior 2/4** —
       with all seven items named, plus the genetics layers (**fragile X, TS,
       Rett; CNVs 16p11-p12, 15q11-q13, 22q13; rare variants NRXN1, NLGN4,
       SHANK3, SERT**) and the biomarkers. The cache holds the single word
       "Comorbidities". → dp-10 and dp-12.
     · **L2 p36 — the ADHD comorbidity wheel**, seventeen named conditions.
       Cache holds "Comorbid Disorders". → dp-15.
     · **L2 pp.10–11 — the prevalence figures.** The US series 1 in 10,000
       (1970s) → 1 in 44 (2021), **241 % above 2000**, **boys 4×**, **40 %
       nonverbal / 44 % average-or-above IQ / 31 % intellectual disability**,
       and **"most kids are diagnosed only after the age of 4"**. The cache has
       only the words "Autism prevalence". Read at 250 dpi. → dp-9.
     · **L2 p4 — the divergence graph.** Normal range, median, and a "slow
       development" line pulling away from it across ages 1–10, captioned
       "difference in development between normal (median) and a child
       developing slowly". It is the picture behind the definition's own clause
       "which increases as the child gets older". → dp-1.
     · **L2 p27 — the normal distribution** with "Cases" marked beyond ~2 SD,
       under the heading "the mere presence of these behaviors does not mean
       the child has ADHD". → dp-13.

   ⚠️ (b) WHAT THE BORROWED `1) Normal development` pp.34–56 RENDER RECOVERED —
   all eight register rows, five of them image-only and unrecoverable any other
   way. Itemised in FINDING 3 below rather than twice here.

   ⚠️ (c) AND A THIRD RENDER NOBODY ORDERED PAID TOO. `Lec 2 Child
   development_` is a 7-page prose handout at 175 words a page, so it looks
   like the one deck that does not need looking at. It carries **THREE
   IMAGE-ONLY TABLES**, and `pdftotext` recovers not one cell of any of them:
     · **p4 — the screening grid.** Visit (9 / 18 / 30 months) × focus area ×
       identified concerns. This is the only place in the paediatrics corpus
       that says WHAT each screening visit is looking for. → dp-7.
     · **p5 — the standardized-tool table**, by category: general
       developmental (ASQ-3, PEDS, PEDS:DM, SWYC), general behavioural
       (ASQ:SE-2, BITSEA, PSC-17), language (CSBS-DP), **autism (M-CHAT-R/F,
       SCQ)**. ⚠️ `m-chat` and `mchat` return **ZERO hits across all 64 cached
       paediatrics decks** — the single most recognisable autism screening
       instrument in paediatrics would have been written as a gap and tagged.
       **Fifteenth time "read the slide before declaring a gap" has paid.**
       → dp-7.
     · **p1 — the nurture diagram**, physical needs (good vision and hearing,
       warmth/clothing/shelter, food, activity with rest, good health) against
       psychological needs (security, affection and care, role models,
       opportunity to learn from experience, play, personal identity /
       self-respect / independence). ⚠️ NOT WRITTEN HERE — it is normal
       development's nature/nurture material and `normal-dev` already carries
       nature/nurture. Reported so the next reader knows the plate exists.

   ============================================================================
   FINDING 2 — THE CACHES ARE COMPLETE. A CLEAN NEGATIVE, REPORTED AS ONE.
   ============================================================================
   Both of my decks are born-digital PDFs, so the `14) Puberty` failure mode
   (a .pptx whose XML pass and PDF render capture different text) cannot apply
   — but it was measured anyway rather than argued:
     L2   cache 1,355 node words · fresh `pdftotext -layout` 1,350 ·
          **PDF-only vocabulary 0 of 478 tokens = 0.0 %**
     L2p  cache 1,229 node words · fresh `pdftotext -layout` 1,223 ·
          **PDF-only vocabulary 0 of 431 tokens = 0.0 %**
   The 5–6 word differences are form-feed spacing, the same artefact the
   theory-plan documents for node vs `wc`.

   ⚠️ AND THE MediaBox CLIPPING CHECK, WHICH THE DIFF ABOVE CANNOT SEE. Both
   decks were split on the form feed and every page's LAST TOKEN tested against
   an article/preposition/conjunction list (the plan's own proxy, run because
   `pdftotext -layout` on both sides of a diff drops the same clipped words).
   **ZERO hits across 48 + 7 pages.** No page ends mid-sentence, so nothing
   here needs the MediaBox rewrite that `27)Anaphylaxsis` and
   `6) Genetically determined disease_` needed. **A clean negative — and it
   says nothing about the PICTURES, which is FINDING 1.**

   ============================================================================
   ⚠️⚠️ FINDING 3 — THE EIGHT REGISTER ROWS. ALL EIGHT DELIVERED, SEVEN IN FULL
   AND ONE DELIBERATELY SHORT. EVERY ONE VERIFIED AGAINST THE RENDER, NOT
   AGAINST THE ROW.
   ============================================================================
   §14.5 says a register row is a CLAIM BY THE SENDING CHAPTER, not a
   specification — so each was checked against L1 itself before being written.
   **All eight are accurate. None had to be corrected**, which is the first
   time in this project that a whole register block has verified exact.

   | # | Row (abbreviated) | L1 pages | Delivered | Where |
   |---|---|---|---|---|
   | 1 | Intellectual subnormality, full definition — IQ ≤70 + ≥2 of 10 adaptive skills + onset before 18 | p38, image-only | ✅ **IN FULL**, as a three-limb table | dp-3 |
   | 2 | The ten adaptive skills | p39 | ✅ **IN FULL**, all ten named | dp-3 |
   | 3 | Severity grading — mild <70–50, moderate <50–35, severe <35–20, profound <20 | p42 | ✅ **IN FULL**, as a table | dp-3 |
   | 4 | Aetiology of GDD — ~40–60 % identified, prenatal/perinatal/postnatal, idiopathic up to 50 % | pp.36–37, image-only | ✅ **IN FULL**, every named cause | dp-2 |
   | 5 | The GDD investigation panel — 8 tests | p54, image-only | ✅ **IN FULL**, all eight | dp-5 |
   | 6 | Early Augmented Intervention Programs — timing, frequency, five session types | pp.55–56 | ✅ **IN FULL** | dp-6 |
   | 7 | ASD triad — language, socialization, repetitive behaviours; mild/moderate/severe | p52 | ✅ **IN FULL** — and merged with L2's own triad rather than written twice | dp-9 |
   | 8 | The six "MR diagnosed by face" conditions | pp.44–51, PHOTOGRAPHS | ⚠️ **DELIVERED SHORT — see below** | dp-4 |

   ⚠️ ROW 8 IS THE ONE THAT IS SHORT, AND THE REASON IS THE ROW'S OWN WARNING.
   The row says "the teaching is the facies itself, so this row needs the
   RENDER, not the cache". Rendered and looked at: **L1 pp.44–51 are eight
   clinical photographs carrying a yellow caption naming the condition and NO
   OTHER TEXT.** So the six NAMES are all the deck contains, and they are
   delivered. What dp-4 adds — what each face actually looks like — is
   **supplied from general medical knowledge and tagged**, per CLAUDE.md §4,
   because a table of six bare names teaches nothing. Two things were found in
   the photographs themselves and ARE therefore sourced:
     · **PKU is captioned "PHENYLKETONURIA IN DARK FAMILY" on BOTH its slides**
       (pp.48 and 49, a walking toddler and an infant in his mother's arms).
       The lecturer's teaching point is the contrast — fair hair and pale skin
       against a dark-complexioned family — and the caption says so twice.
     · The six are **numbered 1–6 in the slide corners**, so the set is a
       closed list of six, not an open one.
   Row 8's cross-refs are honoured: **Down syndrome in full in `genetics`,
   congenital hypothyroidism in `endo-thyroid`** — pointed at, not repeated.

   ⚠️ ONE ROW WAS ALMOST WRITTEN TWICE. Row 7 (ASD triad from L1 p52) and L2's
   own pp.8–9 print the SAME triad in different words — L1 "defect in language
   / defect in socialization / repetitive behaviors, acts or interest", L2
   "social, language/communication difficulties and imposition of routine and
   repetitive behavior". **Written ONCE, in dp-9, with both wordings folded
   into one bullet**, on the `ent-otorrhea` precedent that a fact owed by two
   routes is delivered once.

   ============================================================================
   ⚠️ FINDING 4 — THE BOUNDARY AGAINST `normal-dev`, WHICH I DID NOT REDRAW.
   ============================================================================
   `normal-dev`'s FINDING 4 drew the line and it is respected exactly. NOT
   written here, and pointed at instead in one-line italic asides:
     · the five domains, the milestones, median vs limit age, corrected age,
       the limit-age tables, primitive reflexes, normal variants;
     · **ALL the red flags, including the three disorder-pointing lists** — the
       ASD red flags in `nd-15` are cross-referenced from dp-11 and not
       repeated, even though ASD is my chapter;
     · the IQ NORMAL band 90–110 and borderline 71–<90;
     · delay vs learning/intellectual disability AS TERMINOLOGY;
     · the GDD two-of-five criterion, which appears here in ONE line only, as
       the anchor the aetiology hangs from;
     · the clinical assessment run, the screening/assessment definitions and
       the named instruments (ASQ, Bayley, Vineland, Denver II, Griffiths,
       Reynell).

   ⚠️ TWO PLACES WHERE THE LINE HAD TO BE RULED ON RATHER THAN READ OFF:

   1. **`Lec 2 Child development_` IS MINE BUT IS MOSTLY ABOUT NORMAL
      DEVELOPMENT.** `normal-dev` cited it once (its reflex-integration
      principle in nd-12) and did not count it. Roughly half of it — the
      definition, the four domains, red-flag age, corrected age, the five
      tenets of typical development, the assessment run, the milestone table on
      p3 — is material `normal-dev` has already written from L1 and L1p. **None
      of that is repeated here.** What IS taken is the half `normal-dev` never
      saw: the impact of delay and of abuse (dp-1), the screening schedule and
      both image-only tables (dp-7), the IQ-test caveats (dp-3), and hearing
      and vision (dp-8).
   2. **HEARING AND VISION are written here, not deferred.** They sit in a
      chapter called developmental problems because deafness and cataract ARE
      developmental problems and because the handout files them under
      assessment, not under normal milestones. `normal-dev` carries the
      screening INSTRUMENTS; dp-8 carries the two sensory impairments and their
      own screening schedule. Checked before writing: `normal-dev` contains no
      red reflex, no NIPE, no orthoptist, no cochlear implant.

   ⚠️ AND ONE CHAPTER DELIBERATELY NOT RAIDED. The theory-plan says `mental`
   has no paediatrics deck of its own and warns: **"Do not raid `dev-problems`'
   content for it; cross-reference instead."** Nothing has been thinned here to
   leave `mental` something to say. `mental` is written from
   `content\neuro\lectures\L14) Child Psychiatry.txt` from the paediatrician's
   side, and it will legitimately overlap dp-9…dp-17 the way `ps-child` does.
   **NO REGISTER ROW IS OWED TO `mental` FROM HERE** — nothing was moved.

   ============================================================================
   FINDING 5 — WHERE MY TWO DECKS DISAGREE, AND WHERE ONE DISAGREES WITH
   `normal-dev`'s PAIR. RECORDED, NEVER RECONCILED AWAY.
   ============================================================================
   `normal-dev` found twelve milestone ages differing between ITS two decks.
   Mine differ far less, because they barely overlap — but three real conflicts
   exist and all three are carried as one-line italic asides:

     1. **THE AUTISM TRIAD IS COUNTED TWO WAYS ON ONE SLIDE.** L2 p8 says the
        child "presents with a TRIAD of social, language/communication
        difficulties and imposition of routine and repetitive behavior,
        HOWEVER, according to DSM-5 it is a continuum … in TWO areas". L1 p52
        prints the triad. **Both counts are examinable and the deck itself
        flags the discrepancy** — three for the classical description, two for
        DSM-5, which folds routine into the restricted/repetitive domain.
        Written both ways in dp-9.
     2. **THE AAP SCREENING AGES ARE PRINTED TWICE, DIFFERENTLY PUNCTUATED.**
        L2 p22 prints "9 months / 18 months / 24 or 30 months"; L2p p4 prints
        "9, 18, 24 or 30 months" and then tabulates only **9, 18 and 30**.
        The tabulated grid has no 24-month row at all. Said in dp-7 rather than
        smoothed over — a paper can key either list.
     3. **THE MILESTONE TABLE ON L2p p3 IS A THIRD DATA POINT IN A DISPUTE
        `normal-dev` ALREADY RECORDED.** It puts **walks independently at 1
        year** where L1 says 15 months and L1p says 18 months (limit). Not
        written here — milestones are `normal-dev`'s — but **flagged in the
        omission note below so its FINDING 5 table can be extended at
        reconciliation.** This is the only thing I found that touches an
        already-merged chapter.

   ============================================================================
   FINDING 6 — GAPS, ALL ANSWERED AND TAGGED IN PLACE (CLAUDE.md §4).
   ============================================================================
   Every one greped across all 64 cached paediatrics decks before being called
   a gap:

     · **THE SIX FACIES.** `microcephal` → 12) HIE, 6) Genetically determined
       disease_, infectious rash decks (as a CRS feature) — never as a facies.
       `craniostenosis` / `craniosynostosis` → **ZERO corpus-wide**.
       `hydrocephalus` → 12) HIE, 6) Genetics, tuberculosis (as a TBM
       complication) — never described. So the physical descriptions in dp-4
       are supplied and tagged. **The six NAMES are sourced (L1 pp.44–51).**
     · **The DSM-5 hyperactivity/impulsivity item split** (items 1–6
       hyperactivity, 7–9 impulsivity). L2 prints nine numbered items under one
       heading and never divides them. Supplied and tagged, dp-14.
     · **What each GDD investigation is LOOKING FOR.** L1 p54 prints eight test
       names inside a graphic and no indications. The second column of dp-5's
       table is supplied and tagged; the eight names are sourced.
     · **"Every drug on the ASD slide targets a comorbidity."** L2 p24 lists
       anticonvulsants, psychostimulants and atypical antipsychotics against
       three comorbidities and never states the principle. Supplied and tagged,
       dp-12.

   ⚠️ A NEGATIVE WORTH RECORDING BECAUSE IT LOOKS LIKE A GAP AND IS NOT.
   **The ADHD drug names are NOT a gap** — methylphenidate, lisdexamfetamine,
   atomoxetine and guanfacine are all printed on L1... no: on **L2 p46**, inside
   the NICE algorithm image. They read as absent because they extract to
   nothing. Greped afterwards to be sure: `methylphenidate` returns **zero**
   across all 64 cached decks, `atomoxetine` zero, `guanfacine` zero — **the
   cache genuinely does not contain the first-line drug for the commonest
   neurodevelopmental disorder of childhood, and the render is the only reason
   this chapter has it.** Cited as sourced, because the slide prints them.

   ============================================================================
   OMISSION NOTE — WHAT WAS LEFT OUT OF THE DECKS ON PURPOSE.
   ============================================================================
     · **L2 pp.1–2, 3, 7, 18, 35, 48** — the Bismillah opening, the title, the
       objectives list, the "Neurodevelopmental disorders" divider, a blank
       navy video placeholder, an embedded video still of a school class, and
       "Thank you". No content. (The objectives list on p3 is used, but for the
       `intro` rather than the body — it is the lecturer's own statement of
       what he will examine.)
     · **L2 p12** — a decorative repeat of p10's quotation. Same words.
     · **L2 pp.39, 41–44** — the behavioural-therapy slides are largely
       photographs with one line each; every line is kept in dp-16, the
       pictures are not described.
     · **L2p p1's nurture diagram** — normal development, and `normal-dev`
       already carries nature/nurture. Reported in FINDING 1(c), not written.
     · **L2p p2 in its entirety** (four domains, red-flag age, corrected age,
       the five tenets of typical development) and **L2p p3's milestone table**
       — all `normal-dev`'s, all already written there. ⚠️ The milestone
       table's **"walks independently at 1 year"** is a third value in that
       chapter's recorded disagreement and is flagged in FINDING 5 for the
       reconciliation pass.
     · **L2p p7** — the reference list. Cited in this header instead.
     · **L1 pp.34–56's overlap with `normal-dev`** — p34's "who is screened"
       is written in BOTH, in one line each, because `nd-16` needs it as the
       screening rationale and dp-5 needs it as the trigger to investigate.
       Declared rather than hidden; ~12 words.
     · **The ASD red flags** (no response to name by 12 months, no pointing by
       18 months, no joint attention, no pretend play) — `normal-dev`'s, by its
       FINDING 4. Pointed at from dp-11, not repeated.
   Nothing else in either of my decks is dropped. Every teaching slide of both
   is represented in some section.

   ============================================================================
   BUDGET — computed BEFORE writing, left exactly as it stood (§14.1).
   ============================================================================
   TERM 1, my own two decks: L2 1,355 + L2p 1,229 = **2,584 node words**,
   matching the theory-plan's published ceiling exactly. The two decks share
   almost no vocabulary of substance — one is a disorders lecture, the other a
   normal-development handout — so the arithmetic sum is honest and nothing is
   double-billed. **L1 IS NOT COUNTED**: it is `normal-dev`'s TERM 1 and this
   chapter only receives eight registered facts out of it.
   TERM 2, 25 × linked questions: 25 × 0 = 0. Floor 600.
   → Ceiling max(2,584, 0, 600) = **2,584**.

   ⚠️ THE CALLER'S BAND IS 2,300–2,900 FOR THE DECKS **PLUS THE REGISTER ROWS
   COSTED SEPARATELY**, on `normal-dev`'s measured finding that the plan's
   74 %-of-ceiling estimate is a property of DISEASE lectures with sheddable
   slide furniture and misses by 51 % on a handout-plus-table chapter. This
   chapter has the same shape, so **90–95 % of ceiling** was used, not 74 %.

   Words-per-line check for the diagram-deck failure mode: **L2 runs 2.9 words
   per line and L2p 8.4.** Neither is under 2, so TERM 1 governs — but L2's 2.9
   is the second lowest in paediatrics and is the numerical trace of the
   28-words-per-page problem the brief opens with.

   PRE-WRITING PREDICTION, costed at §14.1 granularity and at **~100 words a
   framework slide, not ~85** — `normal-dev`'s measured correction, adopted:
     entities — four real ones (GDD, intellectual subnormality, ASD, ADHD) at
       ~90 = 360, but each is far more than a 90-word entity here, so this term
       is not load-bearing.
     framework slides costed one by one at ~100 —
       delay-vs-disorder, the divergence graph, age of presentation, aetiology
       of abnormal development, impact of delay, impact of abuse, GDD
       definition, GDD aetiology (3 slides), intellectual subnormality
       definition, adaptive skills, severity grading, IQ formula, IQ caveats,
       investigation panel, who-is-screened, early intervention timing, the
       five session types, screening schedule, autism screening ages, hearing,
       vision, ASD definition, ASD prevalence, ASD aetiology, syndromic split,
       ASD diagnosis, ASD screening, ASD treatment, ADHD definition, ADHD
       caution, ADHD prevalence, ADHD aetiology, the dopamine slide, ADHD
       presentations, the two-step diagnosis, ADHD outcome, prevention,
       treatment headings, parent training, individual therapy, school
       programmes, the two NICE algorithms = 43 × 100 ≈ 4,300 — **far too
       high, because a third of these are three-word slides that merge into a
       neighbour's bullet.** Re-costed at ~65 for the 18 that are one line
       each: (25 × 100) + (18 × 65) ≈ **3,670**.
     comparison grids at rows × columns —
       the three-limb definition 3 × 2, severity 4 × 2, the six facies 6 × 3,
       the investigation panel 8 × 2, the screening grid 3 × 3, the tool table
       4 × 2, the DSM-5 counting rule 2 × 3, the ASD three-column picture
       4 × 3, two 9-item symptom tables 18 × 2, the effect-size table 7 × 2 =
       **150 cells**; at ~4 words a cell ≈ 600, of which ~380 is content
       already counted as slides above, so the NET grid cost ≈ **220**.
     supplied and tagged — the six facies descriptions and the investigation
       indications, ~180.
     ### sub-headings — ~44 of them, counted as lines, ~140.
     ⚠️ MINUS the ~700 words of L2p and L1 material that belongs to
       `normal-dev` and is cross-referenced in one line instead of written.
   PREDICTED **3,200–3,600 body words over 16–18 sections, ~13–15 pp — SO A
   SPLIT WAS EXPECTED BEFORE THE FIRST SECTION WAS WRITTEN**, and FINDING 0's
   seam was chosen at planning time, not discovered afterwards.

   ============================================================================
   ⚠️⚠️ MEASURED OUTCOME — the counter was run over the file ON DISK as the
   genuinely last action, AFTER the final edit. Until it had been, this block
   read the literal string "NOT YET MEASURED", per the mechanical guard
   `normal-dev` recommends after its own forecast-in-the-past-tense failure.
   ============================================================================

       body 3,374 words over 17 sections · intro 41 words · 0 questions filed
       weights: 15 `must`, 2 `high`, 0 `know`
       12 tables, 74 rows (headers included) · 1 flow, 6 steps
       51 `###` sub-headings · 21 whole-line italic asides
       17 of 17 `Src:` lines · `qs: []` on all 17 · 17 unique ids
       parse: `new Function(src)` clean
       139 lead-bold lines, **0 unanchored** (each carries a `:` or `—` inside
       44 characters, or is itself ≤44 characters)

     dp-1  277 · dp-2  228 · dp-3  244 · dp-4  242 · dp-5  122
     dp-6  109 · dp-7  258 · dp-8  162
     dp-9  282 · dp-10 194 · dp-11 185 · dp-12 180 · dp-13 139
     dp-14 189 · dp-15 226 · dp-16 122 · dp-17 215

     Split halves, taken from the counter, not derived: dp-1…dp-8 = **1,642**;
     dp-9…dp-17 = **1,732**. 1,642 + 1,732 = 3,374.

   ⚠️ THE HEADER-MEASUREMENT FAULT FIRED HERE AND IS RECORDED RATHER THAN
   COVERED — TWELFTH OCCURRENCE, AND THE SAME SHAPE AS `normal-dev`'s. The
   first version of this block was written before the counter ran, with
   seventeen invented per-section figures that summed exactly to a stated
   3,254. **The file was 3,394 — out by 140 words, 4.3 %, and out on fifteen
   of the seventeen rows.** Six other fields were wrong too and are the cheaper
   tell: I wrote 11 tables (12), 71 rows (74), 44 headings (51), 13 italics
   (20), 181 lead-bolds (139) and a 14/3 weight split (15/2). **The word total
   was the ONLY field whose error the sum check could not see, because I added
   the rows up as I wrote them.** Running the counter is the only instrument.
   What the counter also caught, invisible in source: **15 unanchored lead-bold
   lines**, all fixed by adding an early colon or em-dash (§14.3a), which is
   what took 3,394 → 3,375; splitting one 52-word abbreviation key into two
   lines to clear §14.3a's 45-word cap took it to 3,374. **That was an
   anchoring-and-layout pass, not a compression pass — 20 words, no fact removed, and no redundancy pass was needed or run.**

   AGAINST THE BANDS — the real numbers:
     · vs TERM 1 / the published ceiling of 2,584: **3,374 = 130.6 %.** But
       TERM 1 counts only MY two decks, and a large block of this chapter is
       the eight register rows, which the caller instructed be costed
       separately. **Measured, not guessed:** dp-2 (228), dp-4 (242), dp-5
       (122) and dp-6 (109) are wholly L1's; dp-3 is 244 of which ~60 is
       L2p's IQ caveats, so 184; and row 7's triad bullet inside dp-9 is ~30.
       **Inbound register content = 915 words.**
       **3,374 − 915 = 2,459 = 95.2 % of ceiling** — the honest deck-only
       figure.
     · vs the caller's 2,300–2,900 band for my own decks: **2,459 is inside
       it**, and 95.2 % lands at the top of the caller's own 90–95 % working
       figure. **`normal-dev`'s recommendation to the plan is confirmed a
       second time, and this time prospectively rather than in hindsight** —
       the band was set from it before writing and the chapter landed in it.
     · vs the plan's 74 %-of-ceiling estimate (~1,912): **28.7 % above on the
       deck-only figure**, for the reason `normal-dev` measured — a table deck
       plus a condensed handout has no slide furniture to shed. **And the
       visual read ADDED content TERM 1 could not count.** Attributing it:
       dp-17 (215, entirely the two NICE algorithms and the effect table),
       dp-7's two tables (~150), dp-10's counting rule and genetics layers
       (~110), dp-9's prevalence figures (~90), dp-15's comorbidity wheel
       (~60), dp-12's comorbidity groups (~55), dp-14's three presentations
       (~20) ≈ **700 words TERM 1 never saw.** 2,459 − 700 = 1,759 = **68 % of
       ceiling, which is what this chapter would have measured written from
       the TEXT ALONE — and it would not have contained the name of the
       first-line drug for ADHD.**
     · vs my own pre-writing prediction of 3,200–3,600 over 16–18 sections at
       13–15 pp: **3,374 over 17 sections at 14.06 pp — inside the band on all
       three.** The prediction is left above exactly as it stood. What made it
       work where `normal-dev`'s missed low: costing framework slides at ~100
       rather than ~85, and **separating the 18 one-line slides at ~65**
       instead of charging every slide the same rate.

   ⚠️ WHAT A FURTHER 474 WORDS OF CUTTING WOULD COST, itemised per §14.1 —
   i.e. what reaching 2,900 WHOLE, rather than splitting, would take. The four
   cheapest cuts are all protected:
     · **dp-14's two nine-item symptom tables (189)** — they ARE the DSM
       criteria, the lecture devotes two whole slides to them, and the
       objectives slide says "list the criteria of diagnosis of ADHD".
     · **dp-17's NICE algorithms and effect table (215)** — the largest
       visual-read recovery in the chapter and the only place in the entire
       cached paediatrics corpus where the ADHD drug names exist.
     · **dp-4's six facies (242)** — register row 8, which cannot be discharged
       by naming six conditions and stopping.
     · **dp-7's two image-only tables (258)** — the only source in the corpus
       for what each screening visit is looking for, and for M-CHAT.
   That is 904 words and all of it is protected, so **2,900 whole is not
   reachable without deleting a protected fact.**
   **NOTHING PROTECTED WAS CUT.** The chapter stops at 3,374 and 14.06 pp, and
   the answer offered is the SPLIT in FINDING 0 rather than a deletion.
*/

var THEORY_DRAFT = {

  'dev-problems': {

    intro: 'The lecturer prints nine objectives and five are criteria: define the disorders, list the ASD criteria, list the ADHD criteria, give both treatments. So expect diagnostic criteria recited cold, two prevalence figures, and the IQ bands that separate delay from disability.',

    sections: [

{
  id: 'dp-1', w: 'must',
  h: 'What a developmental problem is, and when each kind declares itself',
  body: [
    '### The two words the lecture separates',
    '- **Developmental problem:** any child whose development is **delayed or disordered**, leaving a **difference from peers that WIDENS as the child gets older**.',
    '- **DELAY — slow acquisition:** the skills come in the right order, but late. **Global** = all skills; **specific** = one particular field or area of skill.',
    '- **DISORDER — maldevelopment of a skill:** the skill itself is built wrong, not merely late.',
    '',
    '*The deck plots this: the slow developer’s line diverges from the median year on year, so the same child looks more abnormal at eight than at two.*',
    '',
    '### When each kind presents — a problem shows up while its own field is growing fastest',
    '- **Motor problems:** during the **first 18 months of age**.',
    '- **Speech and language problems:** between **18 months and 3 years**.',
    '- **Social and communication disorders:** between **2 and 4 years of age**.',
    '',
    '### Aetiology of abnormal development',
    '- **Three headings:** **neurodevelopmental disorders** · **chronic ill health** · **the child’s physical or psychological needs not being met**.',
    '- **Timing:** **prenatal, perinatal or postnatal** — and the **aetiology may be unknown**.',
    '',
    '### One delayed field drags the others',
    '- **The principle:** a delay or disorder in **any one skill area affects the other areas**.',
    '- **The worked example:** **hearing impairment** damages **social, emotional and behavioural** development as well as **speech and language**.',
    '- **Neglect and child abuse:** can affect a child **at any age**, but have **particularly profound impacts on ALL developmental domains in young children**.',
    '- **Why it compounds:** as a child grows, **attention and concentration** matter too, and must be **integrated** with the rest.',
    '',
    'Src: L2 pp.4–6; L2p pp.3–4'
  ].join('\n'),
  qs: []
},

{
  id: 'dp-2', w: 'must',
  h: 'Global developmental delay — and where it comes from',
  body: [
    '### The definition, in one line',
    '- **GDD:** **significant delay in TWO or more of the five developmental skills** — cognitive, language, gross motor, fine motor, social — **up to age 5**.',
    '',
    '*The five domains, median versus limit age and the red flags that raise the suspicion are in `normal-dev`. This chapter starts once the suspicion is raised.*',
    '',
    '### Aetiology — a cause is found in only about half',
    '- **Yield:** aetiology is identified in **~40–60 % of cases**, and is **often multifactorial**.',
    '- **Idiopathic:** **up to 50 % have no clear cause despite investigation.**',
    '- **Of the causes that ARE found:** **genetic factors account for up to ~50 %.**',
    '',
    '### Prenatal — the commonest group, and it is genetic or structural',
    '- **Genetic / chromosomal:** **Down syndrome (trisomy 21)** · **Fragile X** · other **copy-number variants** · single-gene disorders such as **Rett syndrome**.',
    '- **Structural and acquired in utero:** **brain malformations** · **congenital infections (TORCH)** · **teratogens — alcohol, drugs, medications**.',
    '',
    '### Perinatal — three',
    '- **Prematurity.**',
    '- **Birth asphyxia — hypoxic-ischaemic encephalopathy.**',
    '- **Low birth weight.**',
    '',
    '### Postnatal',
    '- **Infection:** **meningitis** and **encephalitis**.',
    '- **Trauma:** **including non-accidental injury**.',
    '- **Metabolic:** **phenylketonuria** and **hypothyroidism** — the two that are treatable if caught.',
    '',
    '*Down syndrome and Fragile X in full in `genetics`; HIE in `perinatal-hie`; congenital hypothyroidism in `endo-thyroid`.*',
    '',
    'Src: L1 pp.35–37 (deck borrowed from `normal-dev`; pp.36–37 image-only)'
  ].join('\n'),
  qs: []
},

{
  id: 'dp-3', w: 'must',
  h: 'Intellectual subnormality — three limbs, ten skills, four grades',
  body: [
    '### ⚠️ The definition has THREE limbs and all three must be met',
    '',
    '|Limb|Requirement|',
    '|---|---|',
    '|**1 Intellect**|**Subnormal intellectual function with an IQ of 70 or LESS**|',
    '|**2 Function**|**Limitation in 2 or more of 10 adaptive skills**|',
    '|**3 Onset**|**Onset of impairment BEFORE age 18 years**|',
    '',
    '*A low IQ on its own is not intellectual disability. The adaptive-skill limb and the age limb are what a stem drops to make itself wrong.*',
    '',
    '### The ten adaptive skills — two or more must be limited',
    '- **Self care** · **safety** · **social skills** · **communication** · **use of community resources**.',
    '- **Home living** · **academic achievement** · **work** · **leisure** · **self direction**.',
    '',
    '### Severity, graded by IQ alone',
    '',
    '|Grade|IQ|',
    '|---|---|',
    '|**Mild**|**<70 – 50**|',
    '|**Moderate**|**<50 – 35**|',
    '|**Severe**|**<35 – 20**|',
    '|**Profound**|**<20**|',
    '',
    '### The measurement, and why it is not the whole answer',
    '- **The formula:** **IQ = (mental age ÷ chronological age) × 100.**',
    '- **The instruments:** the **WISC** or **Stanford–Binet**, assessing cognitive development against chronological age.',
    '- **⚠️ Culture and language:** IQ tests **may be affected by cultural background and linguistic skills**.',
    '- **Coverage:** they **do NOT test all skill areas**.',
    '- **Prediction:** they **do not necessarily reflect** a child’s **ultimate outcome**.',
    '- **Disability:** they **may be compromised by a specific disability** such as **cerebral palsy**.',
    '',
    '*The normal band (90–110) and the borderline 71–<90 "slow learner" band are in `normal-dev`; this chapter picks up at 70 and below.*',
    '',
    'Src: L1 pp.38–43 (borrowed; p38 image-only); L2p p5'
  ].join('\n'),
  qs: []
},

{
  id: 'dp-4', w: 'high',
  h: 'The six intellectual disabilities the lecture diagnoses from the face',
  body: [
    '### The lecture’s own closed set of six — "Cases of MR diagnosed by Face"',
    '',
    '|#|Condition|What the photograph shows|',
    '|---|---|---|',
    '|**1**|**Down syndrome**|**Upslanting palpebral fissures · flat facial profile and nasal bridge · protruding tongue · small low-set ears**|',
    '|**2**|**Microcephaly**|**A vault disproportionately small for the face**, sloping forehead, normally sized facial features|',
    '|**3**|**Congenital hypothyroidism**|**Coarse puffy facies · large protruding tongue · depressed nasal bridge · periorbital puffiness**|',
    '|**4**|**Phenylketonuria**|**FAIR HAIR, PALE SKIN AND BLUE EYES IN A DARK-COMPLEXIONED FAMILY** — the deck prints two children captioned exactly that|',
    '|**5**|**Severe hydrocephalus**|**Grossly enlarged cranium with dilated scalp veins** and a **small face beneath a huge vault**|',
    '|**6**|**Total craniostenosis**|**A small, abnormally shaped skull** from **premature fusion of all sutures**, with shallow orbits|',
    '',
    '*⚠️ These eight slides are photographs carrying a yellow caption and no other text, so the six NAMES are sourced and the facial descriptions are supplied (not taken from the course material).*',
    '',
    '*The PKU pair is the one the lecturer teaches from, and the caption says "in dark family" on both: the hypopigmentation is only obvious against the family’s own colouring.*',
    '',
    '### The two that are treatable',
    '- **Two are TREATABLE if caught early:** **congenital hypothyroidism** and **phenylketonuria** — which is why both sit on the newborn screen and in the delay work-up.',
    '',
    '*Down syndrome in full in `genetics`; congenital hypothyroidism and its screening programme in `endo-thyroid`; PKU as a postnatal metabolic cause of delay in dp-2.*',
    '',
    'Src: L1 pp.44–51 (borrowed; photographs with captions only)'
  ].join('\n'),
  qs: []
},

{
  id: 'dp-5', w: 'must',
  h: 'Investigating the child with global delay',
  body: [
    '### Who gets screened in the first place',
    '- **All young children**, and **especially any child with a risk factor**.',
    '',
    '### The panel — eight investigations',
    '',
    '|Test|What it is looking for|',
    '|---|---|',
    '|**Brain MRI**|**Structural malformation, an old insult, white-matter disease**|',
    '|**Gene study**|**Single-gene disorders**|',
    '|**Chromosomal study**|**Aneuploidy and copy-number variants**|',
    '|**Hearing assessment — ABR**|**Deafness, a treatable cause of language delay**|',
    '|**Fundus / VEP / retinogram**|**Retinal and visual-pathway disease**|',
    '|**Thyroid function / PKU metabolic screen**|**The two treatable metabolic causes**|',
    '|**Autism screening tests**|**ASD as the diagnosis, rather than global delay**|',
    '|**EEG**|**Seizures and epileptic encephalopathy**|',
    '',
    '*The slide prints the eight test names inside a graphic and gives no indications; the second column is supplied (not taken from the course material).*',
    '',
    'Src: L1 pp.34, 54 (borrowed; p54 image-only)'
  ].join('\n'),
  qs: []
},

{
  id: 'dp-6', w: 'must',
  h: 'Early Augmented Intervention Programs',
  body: [
    '### Timing is most of the prognosis',
    '- **As early as possible.**',
    '- **Best before 2–3 years — the critical period.**',
    '- **Less benefit from 3–5 years**, and the aim is to act **before intellectual disability is established**.',
    '- **Frequency:** **repeated sessions — daily, or at least 3 per week.**',
    '',
    '### The five kinds of session',
    '- **Cognitive sessions.**',
    '- **Language sessions.**',
    '- **Gross motor sessions.**',
    '- **Fine motor — occupational sessions.**',
    '- **Social and communication** — behaviour-modification sessions.',
    '',
    '*The slide’s own frequency clause is garbled ("at least 43 days /week"); its second bullet prints the intended rule, daily or at least 3 a week.*',
    '',
    'Src: L1 pp.55–56 (borrowed)'
  ].join('\n'),
  qs: []
},

{
  id: 'dp-7', w: 'must',
  h: 'Developmental screening — the ages, the focus, and the tools',
  body: [
    '### The schedule',
    '- **A standardized screening instrument** is recommended at the **periodic health maintenance examinations** in primary care at **9, 18, 24 or 30 months of age**.',
    '- **Screening runs across all streams**, but **each visit has its own focus**.',
    '- **⚠️ Autism-specific screening** is recommended in addition at the **18- and 24-month visits**.',
    '',
    '### What each visit looks at, and what it is trying to catch',
    '',
    '|Visit|Focus area|Identified concerns|',
    '|---|---|---|',
    '|**9 months**|**Vision · hearing · gross and fine motor · receptive language**|**Hearing deficit · vision deficit · neuromotor problem**|',
    '|**18 months**|**Expressive language · receptive language**|**Hearing and vision deficits · AUTISM · language problem · cognitive deficits**|',
    '|**30 months**|**Behavioral interactions**|**Attention problems · disruptive behaviors**|',
    '',
    '*The prose says "9, 18, 24 or 30 months" and the table it sits beside has rows for 9, 18 and 30 only. The autism deck writes the same list as "9 months, 18 months, 24 or 30 months". Both are printed; neither is reconciled.*',
    '',
    '### The standardized tools, by category',
    '',
    '|Category|Tool|',
    '|---|---|',
    '|**General developmental**|**ASQ-3** · **PEDS** · **PEDS:DM** · **Survey of Wellbeing of Young Children (SWYC)**|',
    '|**General behavioral**|**ASQ:SE-2** · **BITSEA** · **Pediatric Symptom Checklist-17 (PSC-17)**|',
    '|**Language**|**CSBS-DP Infant Toddler Checklist**|',
    '|**Autism**|**M-CHAT-R/F** · **Social Communication Questionnaire (SCQ)**|',
    '',
    '*ASQ = Ages and Stages Questionnaires · PEDS = Parents’ Evaluation of Developmental Status · PEDS:DM = its Developmental Milestones version.*',
    '',
    '*BITSEA = Brief Infant Toddler Social Emotional Assessment · CSBS-DP = Communication and Symbolic Behavior Scales: Developmental Profile · M-CHAT-R/F = Modified Checklist for Autism in Toddlers, Revised with Follow-up.*',
    '',
    'Src: L2p pp.4–5 (both tables image-only)'
  ].join('\n'),
  qs: []
},

{
  id: 'dp-8', w: 'high',
  h: 'Hearing and vision — the two impairments screening exists to catch',
  body: [
    '### Hearing',
    '- **In utero:** by **25–26 weeks’ gestation** a fetus **responds to noises and voice**.',
    '- **At birth:** the baby **startles to loud sounds** and has a **marked preference for voices**.',
    '- **⚠️ The dependency:** **subsequent development of speech and language requires adequate hearing** — which is why deafness presents as language delay.',
    '- **What early detection buys:** better **speech, language and behaviour**, and through them **educational achievement, employment prospects, mental health and participation in society**.',
    '- **Treatment:** **amplification — hearing aids or cochlear implants** — plus **support and advice to parents** to build effective communication and enhance learning.',
    '',
    '### Vision — three scheduled checks',
    '',
    '|When|What is done|',
    '|---|---|',
    '|**At birth**|**Structure of the eye and the RED REFLEX** — **a cataract impedes the red reflex**. Part of the **Newborn Infant Physical Examination (NIPE)**|',
    '|**6–8 week check**|**Red reflex for cataracts**, plus **fixing and following**. Also part of NIPE|',
    '|**Preschool**|**Vision screening by an orthoptist** — **visual acuity and eye alignment**|',
    '',
    'Src: L2p pp.5–6'
  ].join('\n'),
  qs: []
},

{
  id: 'dp-9', w: 'must',
  h: 'Autism spectrum disorder — what it is, and how common',
  body: [
    '### The entity',
    '- **ASD:** a **behaviour syndrome of neurological dysfunction**, usually declaring itself at **2–4 years of age**, when language and social skills normally expand fastest.',
    '- **The classical TRIAD:** **defect in language / communication** · **defect in socialization** · **imposition of routine and repetitive behaviour, acts or interest**. Graded **mild / moderate / severe**.',
    '- **⚠️ DSM-5 counts TWO areas, not three:** a **continuum of mild to severe impairment** in **(1) qualitative impairments in social communication / social interaction** and **(2) restricted and repetitive interests or behaviors**.',
    '- **Not explained by delay:** the impairments are **not accounted for by general developmental delay**, and they **persist into adulthood, causing chronic disability**.',
    '',
    '*Three or two is the deck’s own discrepancy, printed on one slide: DSM-5 folds "imposition of routine" into the restricted/repetitive domain. Both counts are examinable.*',
    '',
    '### The numbers the lecture prints',
    '- **Trend:** the **fastest-growing neurobiological condition in the world**.',
    '- **US prevalence:** **1 in 10,000 (1970s) → 1 in 500 (1999) → 1 in 150 (2000) → 1 in 88 (2008) → 1 in 68 (2014) → 1 in 44 (2021)**.',
    '- **Against baseline:** **241 % higher than the year-2000 figure.**',
    '- **Sex:** **male-to-female 4 : 1** — but **females are more likely to have associated cognitive impairment**.',
    '- **Siblings:** **18 % of infants with an older sibling with ASD developed ASD by 36 months.**',
    '- **Ability:** **40 % are nonverbal** · **44 % have average or above-average intellectual ability** · **31 % have an intellectual disability**.',
    '- **⚠️ Late diagnosis:** ASD **can be diagnosed before age two**, yet **most children are diagnosed only after age 4**.',
    '',
    'Src: L2 pp.8–13 (pp.10–11 image-only, read at 250 dpi); L1 p52 (borrowed)'
  ].join('\n'),
  qs: []
},

{
  id: 'dp-10', w: 'must',
  h: 'Why autism happens — and the DSM-5 counting rule',
  body: [
    '### Aetiology',
    '- **Mostly genetic:** ASD is **mostly a genetic disorder of brain development**, but **nongenetic factors also contribute to the phenotype and its heterogeneity**.',
    '- **Three headings:** **multifactorial** · **genetic** · **environmental**.',
    '- **⚠️ Till now:** **NO single factor has been claimed.**',
    '- **The split:** **non-syndromic (idiopathic) 80 %** against **syndromic 20 %**.',
    '- **The final common path:** **disrupted brain synaptic connectivity and altered signaling**.',
    '',
    '### The genetic layers named on the comorbidity plate',
    '- **Simple genetic disorders:** **fragile X** · **tuberous sclerosis** · **Rett syndrome**.',
    '- **Copy-number variants:** **16p11-p12** · **15q11-q13** · **22q13**.',
    '- **Rare variants:** **NRXN1** · **NLGN4** · **SHANK3** · **SERT**.',
    '',
    '### ⚠️ The counting rule — three of three, and two of four',
    '',
    '|Core domain|How many|The items|',
    '|---|---|---|',
    '|**Impaired social communication / interaction**|**ALL THREE (3/3)**|**Social reciprocity · nonverbal communication · relationships**|',
    '|**Restricted / repetitive behavior**|**TWO OF FOUR (2/4)**|**Repetitive speech or behavior · insistence on sameness · restricted interests · sensory abnormalities**|',
    '',
    '*This grid is the centre of the plate on L2 p20 and the whole slide is one image, so the counting rule is invisible to the text extraction.*',
    '',
    'Src: L2 pp.14–16, 20 (p20 image-only, read at 250 dpi)'
  ].join('\n'),
  qs: []
},

{
  id: 'dp-11', w: 'must',
  h: 'The clinical picture, and the early signs at 6–12 months',
  body: [
    '### The three impairment columns',
    '',
    '|Social interaction|Communication|Restricted and repetitive behavior|',
    '|---|---|---|',
    '|**Prefers own company; no interest or ability in interacting with peers** — in play or in emotions|**Deficits in NONVERBAL communicative behaviors**|**Stereotyped or repetitive speech, motor movements or use of objects**|',
    '|**Gaze avoidance**|**Language delay**|**Excessive adherence to routine**|',
    '|**Lack of joint attention**|**Idiosyncratic language**|**Highly restricted, fixated interests**|',
    '|**Socially and emotionally inappropriate behaviour**|**Cannot initiate or sustain a conversation**|**Hyper- or hypo-reactivity to sensory input, or unusual interest in sensory aspects of the environment**|',
    '',
    '### ⚠️ Early signs — "what to look for in your 6-to-12-month-old child"',
    '- **Is not responding to his or her name.**',
    '- **Poor eye contact.**',
    '- **By 10 months** — is not using gestures to communicate.',
    '- **Delayed babbling.**',
    '- **Delayed motor development.**',
    '- **Rarely smiles when approached by caregivers.**',
    '- **Rarely imitates sounds and movements.**',
    '',
    '*`normal-dev` carries the same warning from the other deck as an ASD RED FLAG list — no response to name by 12 months, no pointing by 18 months, no joint attention, no pretend play. The two lists agree and are worth learning side by side.*',
    '',
    'Src: L2 pp.17, 19'
  ].join('\n'),
  qs: []
},

{
  id: 'dp-12', w: 'must',
  h: 'Autism — comorbidities, diagnosis, screening and treatment',
  body: [
    '### Comorbidities, by group',
    '- **Behavioural:** **hyperactivity / impulsivity** · **agitation / aggression** · **anxiety**.',
    '- **Cognitive:** **language impairment** · **intellectual disability**.',
    '- **Medical:** **seizure disorder** · **severe constipation**.',
    '- **Biomarkers:** **abnormal EEG** · **developmental macrocephaly** · **altered brain region size on neuroimaging** · **altered immune and mitochondrial indices** · **hyper-serotonemia**.',
    '',
    '### Diagnosis — three components',
    '- **Autism-specific behavioral evaluations**, formally administered.',
    '- **A multi-disciplinary team.**',
    '- **Genetic testing** — and **screening for related medical issues**.',
    '',
    '### Screening',
    '- **The instrument:** **questionnaires relying on parents’ and/or the physician’s observations**.',
    '- **The AAP recommendation:** screen for **developmental delays and disabilities** at the ages in dp-7.',
    '',
    '### Treatment — two approaches',
    '- **Behavioral and educational approaches** — the mainstay.',
    '- **Pharmacologic approaches:** **anticonvulsants** for **seizure disorder**.',
    '- **Psychostimulants** for **attentional difficulties** — **⚠️ but these medications are LESS EFFECTIVE in these patients** than in ADHD.',
    '- **Atypical antipsychotics** for **severe behavioural upset**.',
    '',
    '*Every drug on the slide treats a comorbidity rather than the core disorder — there is no drug for autism itself (not taken from the course material).*',
    '',
    'Src: L2 pp.20–24'
  ].join('\n'),
  qs: []
},

{
  id: 'dp-13', w: 'must',
  h: 'ADHD — the definition, the numbers, and the dopamine story',
  body: [
    '### The entity',
    '- **ADHD:** the **most common neurodevelopmental disorder of childhood**.',
    '- **The definition:** **co-existence of developmentally inappropriate attentional problems AND hyperactivity with impulsivity**, with **each behaviour occurring infrequently alone**.',
    '- **⚠️ The caution the lecture stars:** **the mere presence of these behaviours does NOT mean the child has ADHD.**',
    '',
    '*The deck makes the point with a normal distribution and marks "cases" only beyond about 2 standard deviations: these are normally distributed traits, and ADHD is the tail.*',
    '',
    '### Prevalence',
    '- **Worldwide:** **5 % of school-aged children have ADHD**.',
    '- **Sex:** **boys are 3 times more than girls**.',
    '- **Still controversial:** prevalence is **increasing**, and **the aetiology is not fully known**.',
    '',
    '### Aetiology — six headings',
    '- **Genetics.**',
    '- **Neuro-chemical.**',
    '- **Structural and functional** brain abnormalities.',
    '- **Environmental.**',
    '- **Psychosocial.**',
    '- **Nutritional.**',
    '',
    'Src: L2 pp.25–30 (pp.27, 30 image-only)'
  ].join('\n'),
  flow: {
    title: 'The mechanism slide — hypofunctioning dopamine',
    steps: [
      { k: 'step', t: 'Drugs · Genetics · Toxins', n: 'the three inputs the slide names' },
      { k: 'alert', t: 'HYPOFUNCTIONING DOPAMINE SYSTEMS', n: 'mesocortical · mesolimbic · nigrostriatal' },
      { k: 'step', t: 'Mesocortical → impaired executive functions' },
      { k: 'step', t: 'Mesolimbic → shorter delay gradient', n: 'cannot wait for a delayed reward' },
      { k: 'step', t: 'Nigrostriatal → impaired motor control' },
      { k: 'step', t: 'Stimulants raise dopamine — hence effect size 1.00 in dp-17' }
    ]
  },
  qs: []
},

{
  id: 'dp-14', w: 'must',
  h: 'The three presentations, and their eighteen symptoms',
  body: [
    '### The three presentations',
    '- **Predominantly inattentive type.**',
    '- **Predominantly hyperactive / impulsive type.**',
    '- **Combined** — the overlap of the two, drawn as the centre of the deck’s own diagram.',
    '',
    '### Inattentive presentation — nine items',
    '',
    '|#|Symptom|',
    '|---|---|',
    '|**1**|**Makes careless mistakes**|',
    '|**2**|**Difficulty sustaining attention**|',
    '|**3**|**Does not seem to listen**|',
    '|**4**|**Does not follow through instructions, fails to finish work**|',
    '|**5**|**Difficulty organizing tasks and activities**|',
    '|**6**|**Reluctant to engage in tasks which require sustained mental activity**|',
    '|**7**|**Loses equipment necessary for activities**|',
    '|**8**|**Distracted by extraneous stimuli**|',
    '|**9**|**Forgetful in daily activities**|',
    '',
    '### Hyperactive-impulsive presentation — nine items',
    '',
    '|#|Symptom|',
    '|---|---|',
    '|**1**|**Fidgets with hands or feet, or squirms in seat**|',
    '|**2**|**Leaves seat where remaining seated is expected**|',
    '|**3**|**Runs about excessively where it is inappropriate**|',
    '|**4**|**Difficulty in playing quietly**|',
    '|**5**|**Often "on the go", as if driven by a motor**|',
    '|**6**|**Talks excessively**|',
    '|**7**|**Blurts out answers before questions have been completed**|',
    '|**8**|**Has difficulty awaiting turn**|',
    '|**9**|**Interrupts or intrudes on others** — pushes into conversations or games|',
    '',
    '*Items 1–6 of the second list are the hyperactivity and 7–9 the impulsivity; the deck prints all nine under one heading (not taken from the course material).*',
    '',
    'Src: L2 pp.31–33 (p31 image-only)'
  ].join('\n'),
  qs: []
},

{
  id: 'dp-15', w: 'must',
  h: 'Making the diagnosis, and what comes with it',
  body: [
    '### ⚠️ Step one — to establish the diagnosis before the age of 12 years',
    '- **Number:** **at least SIX symptoms**, abnormal and persistent.',
    '- **Duration:** continuing over **a minimum of SIX months**.',
    '- **Onset:** the symptoms were **present before 12 years of age**.',
    '- **Setting:** present in **TWO settings** — usually **school (or work, if an adult) AND home**.',
    '- **Impact:** **clear evidence that the symptoms interfere with, or reduce the quality of, social, academic or occupational functioning.**',
    '',
    '### Step two — comorbid disorders',
    '- **The rule:** the diagnosis is **not complete until comorbidity has been looked for**.',
    '- **Learning and cognitive:** **learning disabilities · speech and language · dysgraphia · processing speed · working memory · executive dysfunction**.',
    '- **Psychiatric:** **anxiety disorders · depression · OCD · bipolar disorder · substance abuse**.',
    '- **Neurological and other:** **tics and Tourette syndrome · developmental coordination disorder · sensory problems · sleep disorder · enuresis**.',
    '',
    '### ⚠️ What happens to most children if it is not treated',
    '- **Education:** **most drop out of school**.',
    '- **Behaviour:** **antisocial activities**, and **disruptive behaviour disorder** — **oppositional defiant disorder early in life, conduct disorder later**.',
    '- **Neurological:** **epilepsy**.',
    '- **Safety:** **more accidents**, and **they speed excessively**.',
    '- **Mental health:** **depression and personality disorders**.',
    '- **Relationships:** **difficulty with interpersonal relationships**, **emotional lability**, **low self esteem**.',
    '',
    'Src: L2 pp.34, 36–37 (p36 image-only)'
  ].join('\n'),
  qs: []
},

{
  id: 'dp-16', w: 'must',
  h: 'Managing ADHD without drugs',
  body: [
    '### Prevention — the lecture’s three',
    '- **Dietary** · **environmental** · **parent-management training**.',
    '',
    '### Parent- and family-training programmes',
    '- **The goal:** help parents **understand their children’s behaviour**, set **clear rules and expectations**, and **discipline more effectively**.',
    '- **Also:** it **teaches parents effective coping mechanisms**.',
    '- **The specific skills taught:** **giving instructions in an understanding way** · **using time-outs effectively** · **praising children** · **creating reward systems**.',
    '',
    '### Individual behavioural therapy',
    '- **Social skills training.**',
    '- **Hyperactivity and impulsivity** management skills.',
    '- **Skills to help coping with stress.**',
    '- **Problem-solving skills.**',
    '- **Improving academic skills.**',
    '',
    '### School-based programmes',
    '- **The aim:** teach children and adolescents to **relate more positively to peers**, and ways to **improve attention and their school work**.',
    '',
    'Src: L2 pp.38–44'
  ].join('\n'),
  qs: []
},

{
  id: 'dp-17', w: 'must',
  h: 'NICE 2018 — the two algorithms, and the evidence table',
  body: [
    '### ⚠️ Children UNDER 5 years — drug treatment is NOT recommended',
    '- **First line:** an **ADHD-focussed GROUP parent-training programme**.',
    '- **If it is not effective:** **tertiary specialist opinion**, which then considers **medication**.',
    '- **Complex, or refuses the group:** **ADHD-focussed INDIVIDUAL-based parent training**.',
    '',
    '### Children aged 5 to 18',
    '- **Everyone first gets:** **information and ADHD-focussed support**.',
    '- **⚠️ The medication trigger:** **persisting impairment in ≥1 domain AFTER environmental modifications**.',
    '- **First line:** **methylphenidate**.',
    '- **If not effective, switch:** **1st Lisdexamfetamine**; **2nd atomoxetine or guanfacine**.',
    '- **If impairment still persists in ≥1 domain:** **individual-based CBT / social skills training**; if that fails, **tertiary opinion**.',
    '- **ADHD + ODD/CD:** with **oppositional defiant or conduct disorder**, additionally **offer group parent training** — a programme **developed for the treatment of conduct disorder**.',
    '',
    '### Which treatments actually work — effect sizes',
    '',
    '|Treatment|Effect size|',
    '|---|---|',
    '|**Stimulant medications (e.g. Ritalin)**|**1.00**|',
    '|**Restrictive elimination diets**|**0.51**|',
    '|**Artificial food colourings**|**0.42**|',
    '|**Neurofeedback**|**0.29**|',
    '|**Cognitive training**|**0.24**|',
    '|**Omega 3 fatty acids (fish oils)**|**0.16**|',
    '|**Parent training**|**0.02**|',
    '',
    '*The lecturer ticks three bars — stimulants 1.00, artificial food colourings 0.42 and omega 3 0.16.*',
    '',
    '*⚠️ Note the tension the deck never resolves: parent training scores 0.02 on this chart and is NICE’s first line under 5. Both slides are on the syllabus.*',
    '',
    'Src: L2 pp.45–47 (all three image-only, read at 250 dpi)'
  ].join('\n'),
  qs: []
}

    ]
  }
};
