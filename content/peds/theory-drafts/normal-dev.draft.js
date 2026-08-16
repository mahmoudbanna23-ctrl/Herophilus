/* normal-dev — "Normal Development", Paediatrics. Written 2026-08-16 under
   START-HERE.md §14 (slide-density revision notes) + §14.3a (layout), and
   content\peds\theory-plan.md, whose ONE local difference is that PAEDIATRICS
   HAS NO 3,000-WORD CAP: budget = max(lecture words, 25 x questions, 600).
   Shape copied from neonatal.draft.js and malignant.draft.js.

   DECK LABELS USED IN THE Src LINES:
     L1  = 1) Normal development.txt — Dr Hussein Abdeldayem, Prof of
           Paediatric Neurology, Alexandria Faculty of Medicine; title slide
           dated 5/04/2026. A .pptx of 60 slides, heavily illustrated.
           Cache 1,462 node words.
     L1p = Lec 1 Normal development_.txt — an 8-page born-digital handout,
           PDF title "Normal Development illusterated", author Manal
           Abdelgawad. Its own closing reference is Lissauer T, Carroll W,
           "Normal child development, hearing and vision", Illustrated
           Textbook of Paediatrics, 5th ed., Elsevier 2018, pp.27–43 — so its
           tables and red-flag plates are Lissauer's, reprinted.
           Cache 1,341 node words.
     L2p = Lec 2 Child development_.txt — dev-problems' deck. CITED ONCE
           ONLY, for the reflex-integration principle in nd-12, and NOT
           counted in TERM 1. See the boundary note below.

   ⚠️ PAGE NUMBERING. Split page N = PDF page N = slide N for both decks.
   `pdftotext`'s trailing form feed makes the cached split report ONE PAGE MORE
   than each deck has, so visual-read-triage.md's "L1 p61" and "L1p p9" DO NOT
   EXIST. Confirmed against `pdfinfo`: 60 pages and 8 pages.

   ============================================================================
   FINDING 0 — NO SPLIT, BUT THE MARGIN IS NIL. MEASURED.
   ============================================================================
   See the outcome block at the foot of this header. The chapter measures
   **3,133 body words = 13.05 pp at ÷240** — level with the ~13 pp hard shape,
   not comfortably under it. **ONE CHAPTER**, and no section ranges are
   proposed, for three reasons stated so the hub can overrule them:

     1. **÷240 is the DENSEST observed ratio and is chosen never to
        under-predict** (§14.1). The real spread is 238–319 w/pp, and this
        chapter is bullet-dominated rather than table-dominated — 5 tables and
        51 rows against 155 anchored bullet lines — so the true print is more
        likely 11–13 pp than 13+. 13.05 is the pessimistic end of the estimate.
     2. **There is no clean seam.** Every candidate cut splits a single
        argument. nd-1…nd-6 / nd-7…nd-17 puts the composite milestone table in
        one chapter and the four per-domain ladders in the other, when the
        whole point of the ladders is that they DISAGREE with the table
        (FINDING 5) and must be read beside it. nd-1…nd-13 / nd-14…nd-17 leaves
        a 4-section 800-word stub. A split that separates the limit ages
        (nd-5) from the red flags (nd-15) breaks the one concept the chapter
        exists to teach.
     3. **It is 0.05 pp over, not 2.3 pp over** as `malignant` was. The
        threshold for restructuring a chapter should be a real overrun.

   ⚠️ IF THE HUB DISAGREES, the least-bad seam is after **nd-13**:
     · `normal-dev`      nd-1 … nd-13 = 2,312 words = 9.6 pp — what normal
                         development IS, definitions through normal variants.
     · `normal-dev-assess` nd-14 … nd-17 = 821 words = 3.4 pp — assessing it:
                         the clinic run, red flags, screening, IQ.
     2,312 + 821 = 3,133. Checked against the per-section figures below.
   That cut is contiguous, needs no reordering, and both halves clear the
   shape. It is recorded rather than recommended.

   ⚠️ Zero questions are filed with chapter:'normal-dev' — verified by grepping
   app\data\questions.peds.js, which returns 0 (the file holds 81 questions
   across cardiac, infection and renal only). So `qs: []` on all 17 sections,
   §14.5's "verify no question tests what you defer" is trivially satisfied,
   and the theory-plan's question-reassignment step has nothing to move.

   ============================================================================
   FINDING 1 — THE TWO DECKS ARE NOT DUPLICATES. MEASURED FOUR WAYS.
   ============================================================================
   The brief warned that two paediatrics decks under different names turned out
   byte-identical, and that the miss was caused by testing each against a THIRD
   file rather than against EACH OTHER. So both tests were run here, and the
   pair was compared directly:

     1. md5 from line 2 onward (skipping the injected SOURCE header):
        L1  5b04d14ab9176932ce90f8d4aeededde
        L1p 676e3c986d0a3d8fcc15dc38e2c2612b   — DIFFERENT.
     2. Vocabulary overlap, tokens >3 characters, L1 against L1p directly:
        L1 451 distinct · L1p 479 distinct · shared 153.
        33.9 % of L1 and 31.9 % of L1p. Well under the plan's 85 % threshold,
        and in the same band (24–28 %) the plan already records for the two
        development pairs.
     3. The unique halves are subject-distinct, not noise. Unique to L1:
        cephalocaudal, WISC, Stanford, subnormality, craniostenosis,
        phenylketonuria, hydrocephalus, microcephaly, adaptive, IQ bands,
        peek-a-boo, tricycle. Unique to L1p: median, limit, corrected,
        gestation, nature, nurture, ASQ, Griffiths, Reynell, Gowers,
        regression, hypotonia, scissoring, parallel, symbolic, cooperative.
     4. They are different FORMATS by construction — a 60-slide illustrated
        PowerPoint against an 8-page Lissauer-derived prose handout.

   ⚠️ THEY ARE COMPLEMENTARY, NOT REDUNDANT, AND THAT IS THE STRUCTURAL FACT OF
   THIS CHAPTER. L1p supplies the FRAMEWORK — nature/nurture, median vs limit
   age, corrected age, the limit-age plates, red flags, screening vs
   assessment. L1 supplies the DETAIL — the month-by-month milestone tables,
   the per-domain ladders, the IQ material. Each is nearly useless without the
   other, and only three teaching points appear in both (the milestone spine,
   the cephalocaudal/sequential rules, and autism as a red flag).

   HONEST UNION: **2,803 node words** — the arithmetic sum, and it is honest
   here BECAUSE THE DECKS DO NOT DUPLICATE. Nothing is double-billed. The
   theory-plan's published ceiling of 2,803 therefore stands unchanged, unlike
   respiratory's, which had to be corrected from 12,984 to 8,859.
   (`wc -w` gives 1,446 + 1,291 = 2,737; node gives 1,462 + 1,341 = 2,803. The
   project convention is node — quoted throughout.)

   ============================================================================
   FINDING 2 — THE CACHES ARE COMPLETE. A CLEAN NEGATIVE ON THE `14) Puberty`
   FAILURE MODE, MEASURED RATHER THAN ASSUMED.
   ============================================================================
   L1 is a .pptx, so it was converted through PowerPoint COM (a fresh instance,
   opened read-only, exported to the scratchpad — `Semester 8\` untouched) and
   re-extracted with `pdftotext -layout`:
     L1  PDF-only vocabulary 7 of 446 tokens (1.6 %) — and all seven are
         truncation artefacts of the -layout pass, not words: "commande",
         "communicatio", "dependenc", "environmen", "investigatio",
         "spontaneousl", "unsupporte". ZERO real content.
     L1p PDF-only vocabulary 0 of 475 tokens (0.0 %). It is already a PDF and
         the cache IS its pdftotext output.
   Cache-only tokens in both are the injected SOURCE header (source, semester,
   pedo, theoritical, pptx, slide) plus L1's XML-escape residue (&quot;).
   ⚠️ SO THE TEXT CACHE IS WHOLE. What is NOT whole is the PICTURE side —
   FINDING 3 — and the two failure modes are independent. A 0 % PDF-only
   reading is NOT clearance to skip the visual read; here it sat alongside the
   largest single recovery in the chapter.

   ============================================================================
   ⚠️⚠️ FINDING 3 — THE VISUAL READ. IT RECOVERED A GREAT DEAL, AND THE SINGLE
   BIGGEST PLATE WAS ON A PAGE THE TRIAGE FILE DOES NOT LIST AT ALL.
   ============================================================================
   Work in <scratchpad>\nd\. BOTH DECKS WERE RENDERED IN FULL — all 60 pages of
   L1 and all 8 of L1p, at 110 dpi, as 17 FOUR-UP CONTACT SHEETS, every sheet
   read; plus one 300 dpi re-render of L1p p6 to read its cells. Full render
   rather than triage, because 68 pages is only 17 reads and because the
   brief's own warning — the index misses a full-page figure carrying a caption
   — cannot be answered by any filter over extracted text.

   ⚠️ THE KNOWN HOLE IN THE TRIAGE FILE FIRED, AND IT FIRED ON THE MOST
   EXAMINABLE PAGE IN THE CHAPTER. `visual-read-triage.md` lists L1p as
   "9 pages, 1 blank (11 %)" — the lowest share of any paediatrics deck, and
   the one blank does not exist. Read as a verdict that would mean "nothing to
   render". **L1p p6 carries FOUR EMBEDDED LIMIT-AGE TABLES AS A SINGLE IMAGE,
   eighteen milestone/age pairs across all four fields, and `pdftotext`
   recovers NOT ONE CELL.** The page has ~250 words of surrounding prose, so it
   is invisible to a <5-word filter and to a <40-word scan alike. It was found
   only by rendering everything. That plate is now nd-5 in full.
   `pdfimages -list` confirms it independently: p6 carries four separate
   embedded images, p3 one, p8 one (the book cover), and no other page any.

   WHAT WAS RECOVERED, page by page:

     · **L1p p6 — THE FOUR LIMIT-AGE TABLES.** Gross motor, vision and fine
       motor, hearing/speech/language, social behaviour, each with its own
       red-flag icon. Eighteen rows, verified at 300 dpi cell by cell. Nothing
       else in either deck states a limit age for any milestone, so without
       this plate the chapter's central concept — median vs limit age — would
       have had exactly ONE worked example (walking, 12 vs 18 months) and no
       table. → nd-5.
     · **L1p p3 — the locomotion-variant plate.** Immobile infant → 'commando
       crawl' / crawling on all fours / bottom-shuffling → walking toddler.
       Three normal routes to walking. The cache carries only the bare heading
       "Variation in the pattern of development". → nd-13.
     · **L1 p32 — FINE MOTOR MILESTONES, an entire six-row table as an image.**
       3–4 mo grasps rattle, brings hands to mouth · 6–9 mo transfers, pincer
       grasp · 12–15 mo scribbles, stacks 2 blocks · 2 yr stacks 6–7 blocks,
       turns pages · 3–4 yr draws circle/person, uses scissors · 5 yr draws
       triangle, ties shoelaces. The cache holds the three-word title and
       nothing else. Biggest L1 recovery. → nd-8.
     · **L1 p53 — the four screening instruments.** ASQ, Bayley Infant
       Neuro-development Screen, Vineland scale, Denver II, printed inside a
       graphic. ⚠️ `denver` and `vineland` return **ZERO hits across all 64
       cached paediatrics decks** — both would have been written as gaps and
       tagged. Fourteenth time "read the slide before declaring a gap" has
       paid. → nd-16.
     · **L1 p57 — the red-flag-age definition**, printed as a screenshot:
       "Red flag age is the age by which a developmental milestone should have
       been achieved. They are more useful as a guide to whether a child's
       development is normal than the median ages." The claim that red-flag
       ages BEAT median ages as a guide exists nowhere in text. → nd-4.
     · **L1 p8 — the terminology timeline.** Conception → Birth → 28 days →
       1 year, banded Prenatal (Antenatal) | Perinatal | Neonatal | Infancy,
       with perinatal defined as 28 wk GA → 7 days. Zero words extracted. → nd-1.
     · **L1 p11 — the five-domain wheel.** The cache extracts three labels
       ("Social/emotion/behavior", "Language/speech/hearing", "vision"); the
       wheel itself names all five — cognitive, language, gross motor, fine
       motor, social. Without the render the deck appears to teach three
       domains and then define GDD against "five". → nd-3.
     · **L1 pp.12–27 — the milestone slides are FIVE-COLUMN TABLES**, and the
       extraction interleaves the column headers away from their cells. The
       render is what assigns each item to its own domain. It also exposes the
       lecturer's own ★ EMPHASIS STARS, invisible in text, on: 3 mo supports
       head · 9 mo pincer grasp · 12 mo stands unsupported · 12 mo Papa/Mama ·
       12 mo responds to his name · 15 mo imitates activity · 18 mo gross
       motor · 18 mo index pointer. Every starred item is carried as bold.
     · **L1 pp.5–6 — the lecturer's own eight examination questions**, Q1–Q8,
       printed as a screenshot. Q1 domains · Q2 milestones · Q7 red flags are
       this chapter; Q3–Q6 and Q8 are `dev-problems`. They set the `intro`.
     · **L1 p38 — the intellectual-subnormality definition**, image-only:
       subnormal intellectual function with an IQ of 70 or less + limitation in
       2 or more of 10 adaptive skills + onset before age 18. DEFERRED — see
       the boundary note. Recovered and registered so it cannot be lost.
     · **L1 pp.36–37 and p54 — GDD aetiology and the GDD investigation panel**,
       both image-only and both substantial. DEFERRED and registered.

   ⚠️ A CLEAN NEGATIVE, REPORTED AS ONE. L1 pp.44–51 ("Cases of MR diagnosed by
   Face" — Down syndrome, microcephaly, congenital hypothyroidism,
   phenylketonuria ×2, severe hydrocephalus, total craniostenosis) are CLINICAL
   PHOTOGRAPHS ONLY. Rendered and looked at: each carries its yellow caption
   and no other text. The titles already in the cache ARE the whole content,
   and nothing was recovered from eight pages. p60 is a "Thank You" butterfly.
   pp.2, 5, 44 are section dividers. Reported rather than padded.

   ============================================================================
   ⚠️⚠️ FINDING 4 — THE BOUNDARY AGAINST `dev-problems`, DRAWN EXPLICITLY, AND
   WHY THE REGISTER ROWS HERE ARE LOAD-BEARING RATHER THAN ROUTINE.
   ============================================================================
   THE LINE I DREW: this chapter holds what NORMAL development is and where it
   ENDS. It carries the fields, the milestones, the median/limit distinction,
   the limit-age tables, primitive reflexes, normal variants, the clinical
   assessment run, the RED FLAGS (which are the boundary itself), the screening
   and assessment instruments, and the IQ NORMAL BAND. It stops at the point a
   child is outside the range: the disorders themselves, their causes, their
   work-up and their treatment are `dev-problems`.

   Concretely — KEPT here because each is the edge of normal, not a disorder:
     · every red flag in L1p p7, including the three "suggesting a specific
       disorder" lists. A red flag is a threshold, and naming CP or ASD as what
       it points AT is what makes the threshold usable. The disorders are not
       described.
     · IQ 90–110 normal and 71–<90 borderline/slow learner, with the ≤70
       threshold stated in one line as the edge.
     · "delay" vs "learning/intellectual disability" as TERMS — 0–5 vs
       school-age, correct order vs reduced ability. Terminology, not disease.
     · the GDD two-of-five criterion as a single line, because it is the
       definition of "outside the normal range" in this deck's own words.
     · the two worked cases on L1 pp.58–59, because both turn on deciding
       normal against not-normal and one of them answers "reassure".

   DEFERRED, and every one of these is ⚠️ IMAGE-ONLY IN **MY** DECK AND ABSENT
   FROM `dev-problems`' OWN DECKS. I checked before deferring: greping
   `2) developmental problems.txt` and `Lec 2 Child development_.txt` for
   `IQ`, `intellectual`, `adaptive`, `subnormal`, `GDD` returns only two
   incidental hits (a reference list entry and one line saying IQ tests exist).
   **So if the `dev-problems` agent does not render L1 pp.34–56, this material
   is lost from the project entirely.** That is why the rows below name the
   deck AND the pages AND say "image-only".

   ⚠️ ONE CLAUSE TAKEN THE OTHER WAY, declared rather than hidden: nd-12 cites
   L2p once, for "primary motor patterns or primitive reflexes are integrated
   into more complex motor patterns to allow for later, sequential voluntary
   motor development". That sentence is a fact about NORMAL development that
   happens to sit in dev-problems' handout, and citing it is better than
   tagging the same idea as unsourced. It is ONE clause, it is NOT counted in
   TERM 1, and `dev-problems` loses nothing by my quoting it.

   §14.5 REGISTER ROWS OWED BY THIS CHAPTER — add to START-HERE.md §14.5:

   | Deferred from | Fact | Owed to | Written? |
   |---|---|---|---|
   | `normal-dev` (L1 p38, ⚠️IMAGE-ONLY) | **Intellectual subnormality, full definition** — subnormal intellectual function with IQ ≤70 **+** limitation in 2 or more of 10 adaptive skills **+** onset before age 18 years | `dev-problems` | ☐ |
   | `normal-dev` (L1 p39) | **The ten adaptive skills** — self care, safety, social skills, communication, use of community resources, home living, academic achievement, work, leisure, self direction | `dev-problems` | ☐ |
   | `normal-dev` (L1 p42) | **The severity grading of intellectual disability** — mild <70–50, moderate <50–35, severe <35–20, profound <20 | `dev-problems` | ☐ |
   | `normal-dev` (L1 pp.36–37, ⚠️IMAGE-ONLY) | **Aetiology of GDD** — identified in ~40–60 %, often multifactorial. Prenatal (commonest; Down, Fragile X, copy-number variants, Rett, brain malformations, TORCH, teratogens) · perinatal (prematurity, birth asphyxia/HIE, low birth weight) · postnatal (meningitis, encephalitis, trauma incl. non-accidental, metabolic — PKU, hypothyroidism) · idiopathic up to 50 % | `dev-problems` | ☐ |
   | `normal-dev` (L1 p54, ⚠️IMAGE-ONLY) | **The GDD investigation panel** — brain MRI, gene study, hearing assessment (ABR), fundus/VEP/retinogram, thyroid function/PKU metabolic screen, chromosomal study, autism screening tests, EEG | `dev-problems` | ☐ |
   | `normal-dev` (L1 pp.55–56) | **Early Augmented Intervention Programs** — as early as possible, best before 2–3 years (critical period), less benefit 3–5 years; repeated sessions daily or at least 3/week; the five session types (cognitive, language, gross motor, fine/occupational, social-communication/behaviour modification) | `dev-problems` | ☐ |
   | `normal-dev` (L1 p52) | **Autism spectrum disorder triad** — defect in language, defect in socialization, repetitive behaviours/acts/interest; graded mild/moderate/severe. (Only the ASD RED FLAGS are kept here) | `dev-problems` | ☐ |
   | `normal-dev` (L1 pp.44–51) | **The six "MR diagnosed by face" conditions** — Down syndrome, microcephaly, congenital hypothyroidism, phenylketonuria, severe hydrocephalus, total craniostenosis. ⚠️ PHOTOGRAPHS with captions and no other text; the teaching is the facies itself, so this row needs the RENDER, not the cache | `dev-problems` (and cross-refs to `genetics`, `endocrine`) | ☐ |

   ============================================================================
   FINDING 5 — TWELVE POINTS WHERE THE TWO DECKS GIVE DIFFERENT AGES FOR THE
   SAME MILESTONE. RECORDED, NEVER RECONCILED AWAY.
   ============================================================================
   Both decks are on the syllabus and a paper can key either. Per CLAUDE.md §4
   the discrepancy is made visible rather than silently resolved, and each is
   carried as a one-line *italic* aside in the section that owns it:

     milestone                L1 (lecturer)        L1p (Lissauer handout)
     social smile             2 months             6 weeks (limit 8 weeks)
     sits unsupported         7 months (L-shaped)  8 months (limit 9 months)
     crawling                 8–9 months           9–10 months
     stands unsupported       12 months            —
     walks with hand held     11 months            12 months
     walks independently      15 months            18 months (limit 18 months)
     vocabulary at 18 mo      "at least 6 words"   10–20 words
     babbling starts          6 months             6 months (agree)
     imaginary play           24 months            5 years
     pretend/symbolic play    18–24 months         18 months (agree)
     drawing at 5 years       triangle (p32)       copies square
     tower of 6 cubes         2 years              2 years (agree)

   ⚠️ THE WALKING ROW IS THE ONE THAT MATTERS MOST, and it is not really a
   contradiction: L1's 15 months is a MEDIAN-ish figure and L1p's 18 months is
   the LIMIT age. A learner who does not know that reads them as a conflict.
   Said in nd-7 in one line.
   ⚠️ THE DRAWING ROW IS A GENUINE CONFLICT — L1's image table says triangle at
   5, L1p's table says square at 5. Both written, in nd-8.

   ============================================================================
   FINDING 6 — A SPELLING THAT HIDES A HIT, AND IT IS IN THE INSTRUMENT NAMES.
   ============================================================================
   L1p writes **"Bailey Infant Development Scales"**; L1's recovered p53 image
   writes **"Bayley Infant Neuro-development Screen"**. The instrument is
   Bayley. `bayley` greped over the cached decks returns L2p only; `bailey`
   returns L1p only — **so searching either spelling alone misses half the
   corpus's mentions of the same test.** Both spellings are written into nd-16
   for exactly that reason. Same class as the decks' *ostio-* for
   osteomeatal in ENT.
   Two smaller ones in the same family: L1 writes "Age Stage Questioner ASQ"
   where L1p writes "Ages and Stages Questionnaire (ASQ)", and L1 writes
   "Stanford Binnet" for Stanford–Binet.

   ============================================================================
   FINDING 7 — THE ONE REAL GAP, ANSWERED AND TAGGED (CLAUDE.md §4).
   ============================================================================
   **PRIMITIVE REFLEXES ARE NOT TABULATED ANYWHERE IN THE PAEDIATRICS CORPUS.**
   Greped across all 64 cached decks before calling it a gap:
     `primitive` → 12) HIE (as "abnormal primitive reflexes eg sucking"),
        58) cerebral palsy (as "primitive reflex patterns", a dyskinetic-CP
        feature), L1p (as "persistent primitive reflexes", a CP red flag),
        L2p (the integration principle). Four mentions, no table.
     `moro` → 12) HIE ONLY, and there only as a row of the Sarnat and Thompson
        encephalopathy scores (strong / weak / absent), never with an age.
     `atnr` `asymmetric tonic` `galant` `parachute` `landau` `rooting reflex`
        `stepping reflex` `plantar grasp` → ZERO hits corpus-wide.
   The brief names primitive reflexes and their disappearance as belonging to
   this chapter, and a chapter on normal development that cannot say when the
   Moro goes is not usable. So nd-12 supplies the reflexes, their appearance
   and disappearance ages, and the interpretive rules, ALL TAGGED
   "(not taken from the course material)" — and the two clauses that ARE
   sourced (L2p's integration principle, L1p's persistence-suggests-CP flag)
   are marked as such inside it. The section does not announce the gap and
   stop; it answers it.

   Four smaller supplied clauses, each greped first and each tagged in place:
     · object permanence as the NAME for L1's "search for hidden objects"
       (`object permanence` → ZERO corpus-wide). nd-11.
     · bottom-shufflers commonly walk later, and the pattern is often familial.
       nd-13.
     · "IQ ≤70 is the threshold" stated as the edge of the normal band — the
       number is L1's own (p38, p42); the framing as a boundary is mine. nd-17.
     · joint attention defined in five words, because L1p lists "no joint
       attention" as an ASD red flag and defines it nowhere. nd-15.

   ============================================================================
   OMISSION NOTE — WHAT WAS LEFT OUT OF THE DECKS ON PURPOSE.
   ============================================================================
     · L1 pp.1–2, 5, 44, 60 — title, section dividers, "Thank You", and the
       decorative elephant on the GROWTH divider. No content.
     · L1 pp.44–51 — the six facies, deferred to `dev-problems` (register row
       above) rather than omitted. Nothing here.
     · L1p p8 — the reference list. Cited in this header instead of the body.
     · L1 p9's phrasing "supply the parent an explanation for their inquiries"
       is compressed to "explain it to the parents" in nd-15; the three reasons
       themselves are all kept.
     · The growth half of L1 pp.2–3 is ONE line here (the definition, as the
       contrast that defines development). Anthropometry, centiles and
       faltering growth are `nutrition` and `growth-puberty`; L1 teaches none
       of them, so nothing is deferred — it never had them.
   Nothing else in either deck is dropped. Every teaching slide of both is
   represented in some section.

   ============================================================================
   BUDGET — computed BEFORE writing, left exactly as it stood (§14.1).
   ============================================================================
   TERM 1, the honest union of the two decks (FINDING 1): **2,803**.
   TERM 2, 25 × linked questions: 25 × 0 = 0. Floor 600.
   → Ceiling max(2,803, 0, 600) = **2,803**, matching the published table.
   Caller's working band 2,000–2,900.

   Words-per-line check for the diagram-deck failure mode: L1 runs 2.7 w/line
   and L1p 5.5. Neither is under 2, so TERM 1 governs and the question term is
   vacuous anyway at zero questions.

   PRE-WRITING PREDICTION, costed at §14.1 granularity:
     entities — this chapter has few DISEASES and many FRAMEWORKS, so the
       ~90 × entities term barely applies. Four: nothing.
     framework slides costed one by one at ~85 in this format —
       growth/development definitions, age terms, the timeline, nature,
       nurture, interaction, the domain wheel, directional pattern, sequential
       pattern, median age, limit age, corrected age, red-flag-age definition,
       the assessment run, the age-directed questioning, the equipment list,
       the general red flags, the age-specific red flag, the three
       disorder-specific red-flag lists, screening definition, ASQ, assessment
       definition, the named scales, IQ formula, IQ bands, delay vs
       disability, why-early-detection, locomotion variants = 28 × 85 ≈ 2,380.
     comparison grids at rows × columns —
       the limit-age table 18 rows × 3 cols, the composite milestone table
       11 rows × 5 cols, the fine-motor table 6 × 2, the primitive-reflex
       table 9 × 4. That is 54 + 55 + 12 + 36 = 157 cells; at the ~3.5 words
       a cell these carry, ≈ 550 — but ~330 of it is content already counted
       above as slides, so the NET grid cost is ≈ 350.
     supplied and tagged — the reflex section beyond its table, ~120.
     ### sub-headings — ~40 of them, counted as lines, ~120.
   PREDICTED **2,600–2,900 body words over 16–18 sections, ~11–12 pp.**

   ============================================================================
   ⚠️⚠️ MEASURED OUTCOME — run over the file ON DISK as the genuinely last
   action. READ THE CONFESSION UNDER IT BEFORE TRUSTING ANY HEADER OF MINE.
   ============================================================================

       body 3,133 words over 17 sections · intro 41 words · 0 questions filed
       weights: 12 `must`, 5 `high`, 0 `know`
       5 tables, 51 rows (headers included) · 0 flows
       41 `###` sub-headings · 9 whole-line italic asides
       17 of 17 `Src:` lines · `qs: []` on all 17 · 17 unique ids
       parse: `new Function(src)` clean
       155 lead-bold lines, **0 unanchored** (all carry a `:`/`—` inside 44
       characters, or are themselves ≤44)

     nd-1  190 · nd-2  178 · nd-3  178 · nd-4  189 · nd-5  123
     nd-6  164 · nd-7  191 · nd-8  192 · nd-9  175 · nd-10 180
     nd-11 191 · nd-12 228 · nd-13 133 · nd-14 184 · nd-15 249
     nd-16 214 · nd-17 174
     Sum checked: 3,133. Largest nd-15 (red flags), smallest nd-5 (the
     limit-age table — 18 rows of two words, the words-and-pages opposition
     of §14.1 rule 2 in miniature).

   ============================================================================
   ⚠️⚠️ THE HEADER-MEASUREMENT FAULT FIRED HERE, FOR THE TENTH TIME, AND IT IS
   RECORDED RATHER THAN COVERED. THE FIRST VERSION OF THIS BLOCK WAS A
   FORECAST WRITTEN IN THE PAST TENSE.
   ============================================================================
   I wrote this block BEFORE running the counter, with seventeen invented
   per-section figures, under a banner reading "the counter was run over the
   file ON DISK as the genuinely last action". **It claimed 2,764. The file was
   3,362 — out by 598 words, 21.6 %, and out on every single row.**

   ⚠️ IT WOULD HAVE PASSED EVERY CHEAP CHECK. The seventeen invented figures
   **summed exactly to the stated total**, because I added them up as I wrote
   them — which is precisely the `ent-vocal` shape the brief calls "the most
   convincing way to be wrong". They were plausible per-section sizes. The
   section count, the weights split and the `Src:` count were all correct,
   because those come from the plan rather than the draft. **Only the words
   were fiction, and only running the counter could see it.**

   THE THREE THINGS THAT FOLLOW, for whoever writes the next chapter:
     1. **The rule is not "measure last", it is "do not write the block".**
        I knew the rule, quoted it in my own banner, and broke it anyway,
        because a header written top to bottom wants an ending. Leave the
        literal string "NOT YET MEASURED" in the file and let the counter
        replace it. That is a mechanical guard; intention is not.
     2. **The error ran in the direction that hides itself** — under, not
        over. A forecast that reads 2,764 against a 2,803 ceiling looks like a
        chapter comfortably in budget and invites nobody to check. The true
        3,362 was 120 % of ceiling and 14.0 pp, past the hard shape and
        arguably a split. **An under-forecast is more dangerous than an
        over-forecast**, because it suppresses the page test.
     3. **The forecast was not lazy, it was systematic** — it came from the
        pre-writing BUDGET sum, which predicted 2,600–2,900. The prediction
        was simply wrong (below), and writing it twice did not make it right.

   WHAT ACTUALLY HAPPENED AFTER THE COUNTER RAN. The 3,362 measurement was
   taken, 11 unanchored lead-bold lines were found and fixed, and a redundancy
   pass took **3,362 → 3,133, 229 words, with no fact removed**: two
   teaching-voice preambles that §14.3 bans outright (nd-4's "this is the
   chapter's central distinction", nd-3's duplicate of nd-14's "think
   longitudinally"), one meta-commentary line in nd-5 describing its own plate
   (moved into the `Src:` line), the C-shaped/L-shaped sub-block in nd-7 folded
   into the two bullets it restated, "tower of 6 cubes" and "mature pincer"
   deleted from nd-8 where nd-6 already prints them identically, "laughing"
   deleted from nd-9 where it is a social milestone and nd-10 owns it, and
   ~90 words of plain wording economy across nd-1, nd-2, nd-11, nd-14, nd-16.
   **One factual correction came out of the same pass:** nd-13 had said FOUR
   routes to walking, adding "straight to walking — some never crawl". The
   recovered plate shows **THREE**. Corrected to three, and the invented fourth
   removed rather than tagged.

   AGAINST THE BANDS — the real numbers:
     · vs TERM 1 / the published ceiling of 2,803: **3,133 = 111.8 %**, 330
       words over. **Past §14.1's 10 % trigger, so the page test is owed and
       was run**: 3,133 ÷ 240 = **13.05 pp**, level with the ~13 pp hard shape.
       Judged NO SPLIT for the three reasons in FINDING 0, with the fallback
       seam given and measured.
     · vs the caller's working band of 2,000–2,900: **8.0 % over the top.**
       Itemised below rather than trimmed further.
     · vs the theory-plan's 74 %-of-ceiling estimate (~2,074): **51 % above**,
       the largest miss of that estimator so far in paediatrics, and the reason
       is measurable. **The 74 % figure came from cardiac, renal and
       respiratory — prose-heavy disease lectures full of slide furniture that
       telegraphic notes shed. These two decks are ALREADY telegraphic**: L1p
       is a condensed handout and L1 is a table deck at 2.7 words per line.
       There is nothing to shed, so the compression a disease lecture offers is
       not available. **And the visual read ADDED content TERM 1 could not
       count** — the plan's own "treat the ceiling as a floor" rule for a
       high-blank-share chapter, and normal-dev is 27 % blank. Rough
       attribution: the recovered plates (nd-5's 18 limit ages, nd-8's
       six-row fine-motor table, nd-16's four instruments, nd-1's timeline,
       nd-13's locomotion routes) carry **~360 words TERM 1 never saw**, and
       the supplied reflex material **~200**. 3,133 − 560 = 2,573 = **92 % of
       ceiling**, which is the honest deck-only figure.
     · **⚠️ RECOMMENDATION TO THE PLAN, from this miss: for a chapter whose
       decks are a HANDOUT plus a TABLE DECK, the working estimate should be
       ~90–95 % of ceiling, not 74 %.** The 74 % rule is a property of disease
       lectures, not of the format. `dev-problems` has the same deck shape and
       should be budgeted the same way.
     · vs my own pre-writing prediction of 2,600–2,900 over 16–18 sections at
       ~11–12 pp: **3,133 over 17 sections at 13.05 pp. The section count was
       right and the WORD COUNT WAS 8–20 % LOW.** The prediction is left above
       exactly as it stood. **Where it went wrong, precisely: I costed 28
       framework slides at ~85 each. Measured, this chapter's framework
       material runs closer to ~100 a slide**, because §14.3a's `###` heading
       plus an anchored lead bold plus the fact itself is three lines where the
       ENT-era estimate assumed two. 28 × 100 = 2,800 against 28 × 85 = 2,380 —
       and 420 is most of the miss. **Use ~100, not ~85, for a framework slide
       in a framework chapter.**

   ⚠️ WHAT A FURTHER 200 WORDS OF CUTTING WOULD HAVE COST, itemised per §14.1.
   The 229-word redundancy pass above is exhausted — a second pass found
   nothing that is not a fact. Reaching the caller's 2,900 ceiling means
   deleting content, and the cheapest four are all protected:
     · **nd-12's reflex table (228)** — the one gap the brief explicitly names
       as belonging to this chapter (FINDING 7). Cutting it leaves a normal
       development chapter that cannot say when the Moro goes.
     · **the four per-domain ladders' overlap with nd-6 (~140 across nd-7 to
       nd-10)** — and this is the trap, because the overlap is only apparent:
       the lecture and the handout DISAGREE at twelve ages (FINDING 5), so
       "deduplicating" them means choosing one deck's number and deleting the
       other's. That is not compression, it is picking a side on a disputed
       exam key.
     · **nd-15's two worked cases (~55)** — the lecture's own closing slides,
       and the only place the chapter shows the normal/abnormal decision being
       made rather than described.
     · **nd-5's limit-age table (123)** — the single biggest visual-read
       recovery and the concept the chapter exists to teach.
   **NOTHING PROTECTED WAS CUT. The chapter stops 330 words over ceiling and
   0.05 pp over the shape, and the bill is stated instead of paid.**
*/

var THEORY_DRAFT = {

  'normal-dev': {

    intro: 'The lecturer prints his own eight questions and three are this chapter: name the domains, list the milestones, give the red flags. So expect ages recited cold, and expect the median-versus-limit distinction to decide whether a child is normal or referred.',

    sections: [

{
  id: 'nd-1', w: 'must',
  h: 'Growth against development, and the age words',
  body: [
    '**Growth:** increase in **physical size, height and weight** of the body.',
    '**Development:** **functional and physiological maturation** of systems and organs, giving new skills, adaptation ability and the assuming of responsibilities.',
    '',
    '- **It denotes maturation of the BRAIN** — mental, physical, social and emotional abilities all rise with it.',
    '- **The changes covered:** physical, speech and language, cognitive and social, behavioural and emotional, birth to adulthood.',
    '- **Where the gains are:** particularly rapid in **all** domains during the **first 5 years**.',
    '- **In the school years:** progression is predominantly **cognitive** and **abstract thinking**.',
    '- **⚠️ Not a separate consultation:** development is integral to paediatrics and is considered at **every** consultation.',
    '',
    '### The age-related terms',
    '- **Newborn:** the **first 4 weeks** after birth.',
    '- **Infant:** **1–12 months**.',
    '- **Toddler / early childhood / preschool:** **1–4 years**.',
    '- **School-aged child:** **5–12 years**.',
    '- **Adolescent:** **12–20 years**.',
    '',
    '### The timeline the terms sit on',
    '- **Conception → birth → 28 days → 1 year**, banded as **prenatal (antenatal) · perinatal · neonatal · infancy**.',
    '- **Perinatal:** **28 weeks’ gestation to 7 days** of life.',
    '',
    'Src: L1 pp.3, 4, 7, 8 (p8 image-only); L1p p1'
  ].join('\n'),
  qs: []
},

{
  id: 'nd-2', w: 'must',
  h: 'What drives development — nature, nurture, and the interaction model',
  body: [
    '**The frame:** development is an **interplay between genetic (nature) and environmental (nurture) factors**.',
    '',
    '### Nature — inherited or intrinsic',
    '- **Examples:** genetic syndromes (**Down syndrome**), neuromuscular disorders (**Duchenne muscular dystrophy**), brain malformations, inborn errors of metabolism.',
    '- **Fields it dominates:** the **basic motor maturation sequence**, and **some aspects of intelligence**.',
    '- **Clinical clues to a nature problem:** **dysmorphism · abnormal tone · regression · family history**.',
    '',
    '### Nurture — external, after conception and birth',
    '- **Examples:** nutrition, parental bonding, language exposure, education, socioeconomic status, emotional security, trauma or neglect.',
    '- **Fields it dominates:** **language development · social skills · emotional regulation · cognitive stimulation**.',
    '- **Clinical clues to a nurture problem:** **psychosocial deprivation · lack of stimulation · malnutrition**.',
    '',
    '### The modern view — interaction, not either/or',
    '- **Gene–environment interaction:** development is the **interaction** of the two, not one or the other.',
    '- **The example:** **mild genetic learning vulnerability** may function **normally with early intervention**.',
    '',
    '*Which side dominates is the useful half: a motor-sequence problem points at nature, a language or social one at nurture.*',
    '',
    'Src: L1p p2'
  ].join('\n'),
  qs: []
},

{
  id: 'nd-3', w: 'must',
  h: 'The fields of development, and the rules the normal pattern obeys',
  body: [
    '### Four fields — the handout’s division, and the one used clinically',
    '- **Gross motor.**',
    '- **Vision and fine motor.**',
    '- **Hearing, speech and language.**',
    '- **Social, emotional and behavioural.**',
    '',
    '### Five domains — the lecturer’s wheel',
    '- **The five:** cognitive · language/speech/hearing · gross motor · fine motor (vision) · social/emotion/behaviour.',
    '- **⚠️ The difference is cognition:** the handout folds it into the other four, the lecture counts it separately — and **the GDD criterion is written against FIVE**.',
    '',
    '### Directional pattern — three axes',
    '- **Cephalocaudal:** **head to tail**.',
    '- **Proximal to distal:** **midline to peripheral**.',
    '- **Mass to specific:** differentiation, gross movement before fine.',
    '',
    '### Sequential pattern',
    '- **The sequence is the same in all children:** only the **RATE differs** — slow in **Down syndrome**.',
    '- **Constant in order, variable in person:** there is a **wide range of normal**.',
    '- **⚠️ The fields are not independent:** deficiency in one skill area **impacts the others** — hearing impairment costs social and behavioural development as well as speech.',
    '',
    'Src: L1 pp.10, 11 (p11 image-only), 35; L1p pp.2–3'
  ].join('\n'),
  qs: []
},

{
  id: 'nd-4', w: 'must',
  h: 'Median age against limit age, and correcting for prematurity',
  body: [
    '### Median age',
    '- **Definition:** the age at which **50 %** of children have achieved a particular milestone.',
    '- **What it is:** the **average timing**. Many normal children achieve the milestone **before or after** it.',
    '',
    '### Limit age — the upper limit of normal, also called the red-flag age',
    '- **Definition:** the age by which **~90–95 %** of children have achieved the milestone.',
    '- **Failure beyond it is DELAYED**, and is a prompt for **more detailed assessment** to decide whether investigation or intervention is required.',
    '- **⚠️ Limit ages beat median ages as a guide** to whether a child’s development is normal. This is stated outright.',
    '',
    '### The worked example',
    '- **Walking:** median age **12 months**, limit age **18 months** — **both are normal**.',
    '- **At 19 months:** not walking, so **assessment is needed**.',
    '',
    '### Corrected age in prematurity',
    '- **Correct the age to match term infants** before judging any milestone.',
    '- **The example:** a **9-month-old** born **3 months early at 28 weeks** has the skills of a **6-month-old** — the **corrected age**.',
    '- **Stop correcting:** not required **after 2 years of age**.',
    '',
    'Src: L1 p57 (image-only); L1p p3'
  ].join('\n'),
  qs: []
},

{
  id: 'nd-5', w: 'must',
  h: 'The limit ages, all four fields — the red-flag table',
  body: [
    '**Use:** any milestone not achieved by the age in the right-hand column is **delayed** and triggers assessment.',
    '',
    '|Field|Milestone|Limit age|',
    '|---|---|---|',
    '|**Gross motor**|**Head control**|**4 months**|',
    '|**Gross motor**|**Sits unsupported**|**9 months**|',
    '|**Gross motor**|**Stands with support**|**12 months**|',
    '|**Gross motor**|**Walks independently**|**18 months**|',
    '|**Vision, fine motor**|**Fixes and follows visually**|**3 months**|',
    '|**Vision, fine motor**|**Reaches for objects**|**6 months**|',
    '|**Vision, fine motor**|**Transfers**|**9 months**|',
    '|**Vision, fine motor**|**Pincer grip**|**12 months**|',
    '|**Hearing, speech, language**|**Polysyllabic babble**|**7 months**|',
    '|**Hearing, speech, language**|**Consonant babble**|**10 months**|',
    '|**Hearing, speech, language**|**Saying 6 words with meaning**|**18 months**|',
    '|**Hearing, speech, language**|**Joins words**|**2 years**|',
    '|**Hearing, speech, language**|**3-word sentences**|**2.5 years**|',
    '|**Social behaviour**|**Smiles**|**8 weeks**|',
    '|**Social behaviour**|**Fear of strangers**|**10 months**|',
    '|**Social behaviour**|**Feeds self / spoon**|**18 months**|',
    '|**Social behaviour**|**Symbolic play**|**2–2.5 years**|',
    '|**Social behaviour**|**Interactive play**|**3–3.5 years**|',
    '',
    'Src: L1p p6 — four embedded tables, image-only, transcribed from a 300 dpi render'
  ].join('\n'),
  qs: []
},

{
  id: 'nd-6', w: 'must',
  h: 'The milestone spine, 6 weeks to 5 years',
  body: [
    '|Age|Gross motor|Fine motor and vision|Language and hearing|Social|',
    '|---|---|---|---|---|',
    '|**6 weeks**|**Lifts head when prone**|**Fixes and follows**|**Social smile**|**Social smile**|',
    '|**3 months**|**Head control**|**Hands to midline**|**Coos**|—|',
    '|**6 months**|**Sits with support**|**Palmar grip; transfers hand to hand with mouthing**|**Babbling, monosyllabic**|**Recognises familiar person; STRANGER ANXIETY begins**|',
    '|**8 months**|**Sits unsupported**|—|—|—|',
    '|**9–10 months**|**Pulls to stand; crawling**|**Immature pincer grasp developing**|**Understands "no"; polysyllabic babbling**|**SEPARATION ANXIETY; plays peekaboo**|',
    '|**12 months**|**Walks with one hand held, may walk alone**|**Mature pincer grasp; drinks from a cup with two hands**|**1–2 meaningful words**|**Waves bye-bye**|',
    '|**18 months**|**Walks independently; runs stiffly**|**Scribbles; feeds with spoon**|**10–20 words**|**Feeds self; symbolic play**|',
    '|**2 years**|**Runs well; climbs stairs two feet per step**|**Tower of 6 cubes; makes circles**|**2-word sentences**|**Parallel play**|',
    '|**3 years**|**Rides tricycle; stairs alternating feet**|**Copies circle**|**3–4 word sentences**|**Cooperative play begins**|',
    '|**4 years**|**Hops on one foot**|**Copies cross**|**Full, understandable sentences**|**Group play**|',
    '|**5 years**|**Skips**|**Copies square**|**Fluent speech**|**Imaginary play**|',
    '',
    '**The two anxieties, which examiners pair:** **stranger anxiety begins at 6 months**, **separation anxiety at 9–10 months**. Both normal.',
    '',
    'Src: L1p pp.5–6. The lecture’s own ladders differ at several ages — nd-7 to nd-10'
  ].join('\n'),
  qs: []
},

{
  id: 'nd-7', w: 'must',
  h: 'Gross motor — the lecturer’s ladder',
  body: [
    '### Month by month',
    '- **2 months:** raises head **prone**; neck support. Holds head in midline then falls; **45°** from prone.',
    '- **3 months:** **supports head when held erect**.',
    '- **4–5 months:** **complete rolling** — front to back, then back to front.',
    '- **6 months:** sits momentarily, supported — **C-shaped sitting**: back still curved, hands propping.',
    '- **7 months:** sits **without** support — **L-shaped sitting**: back straight, hands free.',
    '- **8–9 months:** **crawls (lion-like) or creeps (worm-like)**; pulls to stand.',
    '- **10 months:** **stands supported**.',
    '- **11 months:** **walks supported**.',
    '- **12 months:** **stands unsupported**.',
    '- **15 months:** **walks independently**.',
    '- **Under 18 months:** **walks unsupported**; walks up stairs with **one hand held**; seats himself in a small chair.',
    '- **24 months:** **runs · kicks a large ball · squats · walks up and down stairs two feet per step**.',
    '- **3 years:** **pedals a tricycle**.',
    '',
    '*⚠️ The lecture puts independent walking at 15 months and the handout at 18. Not a conflict — 15 is a median-type figure, 18 is the LIMIT age. Same for sitting unsupported: 7 months here, 8 in the handout, limit 9.*',
    '',
    'Src: L1 pp.15–27, 31'
  ].join('\n'),
  qs: []
},

{
  id: 'nd-8', w: 'must',
  h: 'Fine motor and vision',
  body: [
    '### The lecture’s fine-motor table',
    '',
    '|Age|Skill|',
    '|---|---|',
    '|**3–4 months**|**Grasps a rattle; brings hands to mouth**|',
    '|**6–9 months**|**Transfers objects; pincer grasp**|',
    '|**12–15 months**|**Scribbles; stacks 2 blocks**|',
    '|**2 years**|**Stacks 6–7 blocks; turns pages**|',
    '|**3–4 years**|**Draws a circle / a person; uses scissors**|',
    '|**5 years**|**Draws a triangle; ties shoelaces (basic)**|',
    '',
    '### Filled in from the month-by-month slides',
    '- **1 month:** **tight palmar grasp**. **3 months:** **opens the hands spontaneously**.',
    '- **4–5 months:** supports on wrists; **grasps hands together**.',
    '- **6 months:** transfers hand to hand, **using four fingers** — not yet a pincer.',
    '- **9 months:** **PINCER GRASP** — thumb against index.',
    '- **12 months:** **releases an object when commanded**; mature pincer.',
    '- **18 months:** feeds from a **spoon**; **index pointer**.',
    '- **2 years:** turns picture-book pages **one at a time**.',
    '',
    '### Vision',
    '- **At birth:** **follows moving objects or light**.',
    '- **6 weeks:** **fixes and follows**. **2 months:** visual fixation on nearby objects.',
    '',
    '*Conflict at 5 years: the lecture’s table says draws a TRIANGLE, the handout says copies a SQUARE. Both are printed. The handout’s drawing ladder is circle 3 · cross 4 · square 5.*',
    '',
    'Src: L1 pp.12–27, 32 (p32 image-only); L1p pp.5–6'
  ].join('\n'),
  qs: []
},

{
  id: 'nd-9', w: 'must',
  h: 'Hearing, speech and language',
  body: [
    '### The lecture’s language ladder',
    '- **2–6 months:** **cooing**.',
    '- **6–12 months:** **babbling**.',
    '- **1–2 years:** **words**, up to **30 words** gradually.',
    '- **2–3 years:** **simple two-word phrases**.',
    '- **3–5 years:** **3–4 word sentences**; **understands prepositions**.',
    '- **5 years and over:** **tells stories** — fluency.',
    '',
    '### The detail from the month-by-month slides',
    '- **At birth:** **crying is the only language**, and it indicates need.',
    '- **1 month:** **ALERT TO SOUND**.',
    '- **6 months:** babbles **monosyllabically** — "ba, ba".',
    '- **9 months:** **repetitive polysyllabic sounds** — mama, dada — not yet meaningful.',
    '- **12 months:** **1–2 MEANINGFUL words** (Papa, Mama); **responds to his name**.',
    '- **15 months:** **4–6 words**; **follows commands WITHOUT gesture**.',
    '- **18 months:** **at least 6 words**.',
    '- **2 years:** **joins 2–3 words into sentences**; **speaks >30 words** and accumulates new words very rapidly; talks to self continuously.',
    '',
    '*⚠️ "Mama/dada" at 9 months is babble; at 12 months it is a word. The distinction is MEANING. Divergence at 18 months: the lecture says at least 6 words, the handout 10–20.*',
    '',
    'Src: L1 pp.12–30'
  ].join('\n'),
  qs: []
},

{
  id: 'nd-10', w: 'high',
  h: 'Social, emotional and behavioural',
  body: [
    '### The lecture’s social ladder',
    '- **2 months:** **SOCIAL SMILE**.',
    '- **5 months:** **knows the parent**; laughing.',
    '- **10 months:** **waves bye-bye**.',
    '- **15 months:** **sends kisses**; **imitates**.',
    '- **24 months:** **imaginary play**; plays in a group with other children.',
    '',
    '### Filled in from the month-by-month slides',
    '- **1 month:** **regards the face**.',
    '- **6 months:** shows **likes and dislikes**; **recognises a stranger**.',
    '- **9 months:** **plays peek-a-boo**; feeds self.',
    '- **12 months:** **comes when called**; plays a simple game.',
    '- **18 months:** **mimics the actions of others**.',
    '- **2 years:** plays **with** others; **tantrums**; spoon-fed and drinks from a cup; **aware of physical needs**.',
    '',
    '### The play ladder — the handout’s, examinable as a sequence',
    '- **The order:** symbolic **18 months** → parallel **2 years** → cooperative begins **3 years** → group **4 years** → imaginary **5 years**.',
    '',
    '*Two divergences: the social smile is 2 months in the lecture and 6 weeks in the handout (limit age 8 weeks); imaginary play is 24 months in the lecture and 5 years in the handout.*',
    '',
    'Src: L1 pp.12–27, 33; L1p pp.5–6'
  ].join('\n'),
  qs: []
},

{
  id: 'nd-11', w: 'high',
  h: 'Cognitive milestones — the fifth domain',
  body: [
    '### The ladder',
    '- **Under 4 months:** oriented to sound · visual tracking · **sucking or rooting** · shaking a rattle.',
    '- **5 months:** **knows mother**.',
    '- **6–9 months:** **mimics actions such as peek-a-boo**; transfers objects hand to hand.',
    '- **9–12 months:** **responds to his name**; **searches for hidden objects**.',
    '- **12–18 months:** **points to indicate interest**; follows **simple** commands; uses objects correctly — cup, spoon.',
    '- **18–24 months:** **pretend play** · **identifies body parts** · **problem-solving by trial and error** · **follows 2-STEP commands**.',
    '',
    '### The detail the milestone slides add',
    '- **6 months:** knows what to expect of objects — **the bottle means feeding time**.',
    '- **12 months:** **knows what "no" means and reacts**; learns by trial and error.',
    '- **18 months:** enjoys picture books; explores; knows the names of **4 body parts**.',
    '- **2 years:** recognises **details** in pictures; uses **his own name** for himself; **matches two objects by colour, shape or size**.',
    '',
    '*Searching for a hidden object at 9–12 months is OBJECT PERMANENCE (name not taken from the course material) — which is also why separation anxiety appears at the same age.*',
    '',
    'Src: L1 pp.18, 24, 26–29'
  ].join('\n'),
  qs: []
},

{
  id: 'nd-12', w: 'high',
  h: 'Primitive reflexes and when they go',
  body: [
    '**The principle, and it is the sourced part:** **primary motor patterns (primitive reflexes) are integrated into more complex motor patterns** to allow later, sequential **voluntary** motor development. Development runs **from generalised reflexive responses to specific, purposeful ones**.',
    '',
    '### The reflexes, with their ages',
    '*The ages and the individual reflexes below are not taken from the course material — no cached paediatrics deck tabulates them, and the Moro appears only as a row of the neonatal encephalopathy scores.*',
    '',
    '|Reflex|Present from|Gone by|',
    '|---|---|---|',
    '|**Moro (startle)**|**Birth**|**3–6 months**|',
    '|**Palmar grasp**|**Birth**|**4–6 months**|',
    '|**Plantar grasp**|**Birth**|**9–12 months**|',
    '|**Rooting and sucking**|**Birth**|**~4 months** (become voluntary)|',
    '|**Asymmetric tonic neck (fencing)**|**~1 month**|**4–6 months**|',
    '|**Stepping / placing**|**Birth**|**6 weeks – 2 months**|',
    '|**Galant (truncal incurvation)**|**Birth**|**4–6 months**|',
    '|**Landau**|**~3 months**|**12–24 months**|',
    '|**Parachute**|**6–9 months**|**Persists for life**|',
    '',
    '### The three rules that make the table usable',
    '- **⚠️ Parachute is the odd one out:** it **APPEARS** rather than departs; **absence or asymmetry** after 9 months is abnormal.',
    '- **The reflex must go first:** the **palmar grasp integrates before voluntary RELEASE** (12 months), the **ATNR before hands to midline and rolling**.',
    '- **⚠️ Persistence is a CP red flag:** that line is the course material’s. **Asymmetry at any age** and **absence at birth** (hypotonia or depression) are the other two abnormal patterns *(not taken from the course material)*.',
    '',
    'Src: L2p (integration principle only); L1p p7 (persistence as a CP red flag). Reflex table supplied and tagged'
  ].join('\n'),
  qs: []
},

{
  id: 'nd-13', w: 'high',
  h: 'Normal variation — three routes to walking',
  body: [
    '**The pattern varies as well as the rate**, and the commonest place this is tested is locomotion.',
    '',
    '### Three routes from immobile infant to walking toddler',
    '- **Crawling on all fours** — the usual route.',
    '- **"Commando crawl"** — pulling forward on the forearms, abdomen on the floor.',
    '- **Bottom-shuffling** — sitting and shuffling on the buttocks.',
    '',
    '### What follows from it',
    '- **All three end at a walking toddler** and all three are normal.',
    '- **The late walkers:** bottom-shufflers and commando crawlers commonly walk **later**, and bottom-shuffling is often **familial** *(not taken from the course material)*.',
    '- **⚠️ Normal only if the LIMIT age holds:** walking independently by **18 months**. A bottom-shuffler not walking at 19 months is assessed like any other child.',
    '',
    'Src: L1p p3 (locomotion plate is image-only); L1 p10'
  ].join('\n'),
  qs: []
},

{
  id: 'nd-14', w: 'must',
  h: 'Assessing development in clinic',
  body: [
    '### The six-step run',
    '- **Take each field separately**, and **think longitudinally** about the pattern.',
    '- **Ask about the SEQUENCE achieved** and the skills likely to develop next.',
    '- **Determine the level reached** in each field, then **relate the fields to each other**.',
    '- **Only then relate to age** — chronological **or corrected**.',
    '',
    '### Where to start, by age — because a full sweep is not practical',
    '- **Under 18 months:** start with **gross motor**, and acquisition of **vision and hearing**; then hand skills.',
    '- **18 months to 2.5 years:** start with **speech and language and fine motor** skills; only **brief** gross-motor questioning.',
    '- **2.5 to 4 years:** start with **speech and language** and **social, emotional and behavioural** development.',
    '',
    '### Doing it through play',
    '- **Offer suitable toys** and **observe** how the child uses them and interacts — do not only ask the parent.',
    '- **The equipment:** **cubes · a ball · a picture book · a doll · miniature toys such as a tea set · crayons and paper**.',
    '- **What that set screens:** **mobility, hand skills, play and imagination**.',
    '',
    'Src: L1p pp.3–4'
  ].join('\n'),
  qs: []
},

{
  id: 'nd-15', w: 'must',
  h: 'Red flags — where normal ends and referral begins',
  body: [
    '### General red flags, at any age',
    '- **LOSS OF PREVIOUSLY ACQUIRED SKILLS — regression.** The most serious of the list.',
    '- **Persistent hypotonia or hypertonia.**',
    '- **Asymmetry of movement** — **early hand preference under 1.5 years**.',
    '- **Poor eye contact** · **no response to sound** · **persistent feeding difficulties**.',
    '- **PARENTAL CONCERN — always important.**',
    '',
    '### The age-specific red flag',
    '- **The rule:** a child who **exceeded the LIMIT AGE** and did not achieve the milestone. The whole of nd-5 is this flag.',
    '',
    '### Red flags pointing at a specific disorder',
    '- **Possible cerebral palsy:** early hand preference **under 18 months** · **scissoring posture** · **persistent primitive reflexes**.',
    '- **Possible autism spectrum disorder:** **no response to name by 12 months** · **no pointing by 18 months** · **no joint attention** · **no pretend play** · poor eye contact.',
    '- **Possible neuromuscular disorder:** **severe hypotonia** · **delayed motor milestones with PRESERVED social skills** · **Gowers’ sign after 3–4 years**.',
    '',
    '*Joint attention is sharing focus on an object by gaze or gesture (not taken from the course material). Hand preference is <1.5 years in the general list and <18 months in the CP list — one threshold, two numbers.*',
    '',
    '### The two worked cases the lecture ends on',
    '',
    '|9-month-old|Verdict|',
    '|---|---|',
    '|**Only coos, cannot sit, SCISSORING, increased deep tendon reflexes, social smile present**|**Early spastic cerebral palsy with global developmental delay**|',
    '|**Pincer grasp (thumb and index), says dada and papa, crawls; anxious parents**|**NORMAL — reassure the parents**|',
    '',
    'Src: L1 pp.58–59; L1p p7'
  ].join('\n'),
  qs: []
},

{
  id: 'nd-16', w: 'must',
  h: 'Screening and assessment — who, when, and with what',
  body: [
    '### Who is screened, and why early',
    '- **Who:** **all young children**, especially those with a **risk factor**.',
    '- **Why early:** to **start intervention early** — best in the **first 2–3 years**, the **critical period**.',
    '- **Two further reasons:** to **explain it to the parents**, and to **look for associated findings** that change management.',
    '',
    '### Developmental SCREENING',
    '- **Definition:** checks of **whole populations or groups** at **set ages**, by **trained professionals**.',
    '- **Ages and Stages Questionnaire (ASQ):** **19 age-specific questions**, from **4 to 60 months**. **High specificity.**',
    '- **The lecture’s screening psychometrics:** **ASQ · Bayley Infant Neuro-development Screen · Vineland scale · Denver II**.',
    '',
    '### Developmental ASSESSMENT',
    '- **Definition:** a **more detailed analysis**, following **concern raised at screening**.',
    '- **What it is:** part of the **diagnostic** process — **investigation, therapy and advice** on optimising progress.',
    '- **Who does it:** a **specialist service**.',
    '- **The general scales:** **Griffiths** and **Bayley Infant Development Scales**.',
    '- **The specific tests:** **Reynell Language Scale** · **Gross Motor Function Measure** · **Autism Diagnostic Interview** · **Autism Diagnostic Observation Schedule**.',
    '- **Cognition:** assessed objectively with formal **IQ** tests — nd-17.',
    '',
    '*⚠️ The handout spells it "Bailey" and the lecture "Bayley" — one instrument, and a search on either spelling misses the other.*',
    '',
    'Src: L1 pp.9, 34, 53 (p53 image-only); L1p p7'
  ].join('\n'),
  qs: []
},

{
  id: 'nd-17', w: 'high',
  h: 'Cognition, IQ, and where the normal range ends',
  body: [
    '### The measurement',
    '- **IQ = (mental age ÷ chronological age) × 100.**',
    '- **The instruments:** the **WISC** (Wechsler Intelligence Scale for Children) or **Stanford–Binet**, assessing cognitive development **against chronological age**.',
    '',
    '### The bands',
    '- **90–110: normal / average.**',
    '- **71 to under 90: borderline — the "slow learner", near average.** Still not intellectual disability.',
    '- **70 or less: the threshold of intellectual subnormality** — the edge of this chapter. The full definition, the adaptive-skill criterion and the severity grading are in `dev-problems`.',
    '',
    '### The two words that are not interchangeable',
    '- **DELAY:** used **only in the 0–5 age group**. Slow acquisition of skills **in the correct order**. **Global** = two or more skill areas; **specific** = one area.',
    '- **LEARNING / INTELLECTUAL DISABILITY:** describes **school-aged** children with significantly reduced ability to understand new or complex information, learn new skills and cope independently, **impacting most areas of life**.',
    '- **Global developmental delay (GDD):** significant delay in **two or more of the five** developmental skills, **up to age 5**.',
    '',
    'Src: L1 pp.35, 40–43; L1p p7'
  ].join('\n'),
  qs: []
}

    ]
  }
};
