/* nr-stroke + nr-hemi — "Cerebrovascular stroke" and "Hemiparesis,
   paraparesis, ataxia", Neuropsychiatry. THE MODULE'S FIRST THEORY PAIR.
   Written 2026-08-18 under START-HERE.md §14 (slide-density revision notes),
   §14.1 (budget and page prediction), §14.2 (the two-sided coverage floor),
   §14.3 (telegraphic style), §14.3a (layout and the mdLead() anchor rule) and
   §14.5 (the deferral register), plus content\neuro\theory-plan.md and
   content\neuro\book-map.md. Shape copied from
   content\ophtho\theory-drafts\op-lid.draft.js.

   ⚠️ THIS FILE HOLDS TWO CHAPTERS, BOTH WITH EXISTING KEYS in modules.js under
   module id `neuropsych`, group "Neurology": `nr-stroke` "Cerebrovascular
   stroke" and `nr-hemi` "Hemiparesis, paraparesis, ataxia". Neither is new; no
   modules.js registration is needed. This file touches no app\data\* file, no
   MEMORY.md, no resume file and no git.

     `nr-stroke`  24 linked questions
     `nr-hemi`    29 linked questions
     53 of the module's 151. ALL 53 ARE LINKED — see the coverage block below.

   ⚠️ NO NUMBER IN THIS HEADER IS A MEASUREMENT OF THE FINISHED FILE. Per the
   header faults recorded in §14.1 (eleven of them) and theory-plan.md §6, this
   header states reasoning, sources and deferrals and states NO totals. Every
   figure below derives from a SOURCE, never from the draft. The hub measures
   body words from disk and prints the chapters.

   ===========================================================================
   SOURCES — cached deck text only. NO PDF WAS OPENED AND NO RENDER WAS
   COMMISSIONED OR AUTHORISED.

     content\neuro\lectures\L10) Stroke.txt              53 slides
     content\neuro\lectures\L12) hemi,parap&ataxia.txt   86 slides

   ⚠️ THE BOOK WAS NOT USED. `Semester 8\Neuro\Theoritical\Book\
   neuropsychiatry.pdf` is untouched by this file; not one claim here is
   sourced to it, and no book page number appears in any Src: line. The
   book-map offset rule (NEUROLOGY = printed + 11, PSYCHIATRY = printed + 12,
   the break at PDF p.188) was read so that it could not be mis-cited, and then
   not needed.

   ⚠️ CITATION FORM: the caches carry NO SLIDE NUMBERS — the extraction
   preserves slide TITLES and body text but not slide indices. Src: lines
   therefore cite `L10 sl. <title>` / `L12 sl. <title>`, which is the finest
   grain the cache supports. Inventing slide numbers would have been the only
   alternative and is not acceptable.

   ===========================================================================
   BUDGET (§14.1). Both terms computed. Unlike the ophthalmology chapters,
   TERM 1 governs in both — these are dense prose decks, not picture decks.

     ⚠️ THE BRIEF'S SOURCE-WORD FIGURES DO NOT MATCH THE FILES ON DISK.
     Measured today, whitespace split, whole file including the SOURCE: header
     line:
       L10) Stroke.txt              2,090 w / 562 lines   (brief and
                                    theory-plan.md say 2,051 — out by 39)
       L12) hemi,parap&ataxia.txt   2,983 w / 803 lines   (brief and
                                    theory-plan.md say 2,792 — out by 191,
                                    6.8 %)
     The plan's numbers are almost certainly a `wc -w` run over a slightly
     different file state or with the header stripped. Neither discrepancy
     changes a budget decision — both raise TERM 1, and the OPERATIVE CEILING
     governs both chapters anyway — but the plan's table should be re-measured
     before it is used to forecast a split.

     TERM 1, source words actually rested on:
       `nr-stroke`  L10 2,090 w MINUS ~140 w of history-of-the-specialty slides
                    (Weshptah, Erasistratus/Herophilus, Ibn Sina) and the World
                    Cup match-list legend, both dropped under §14.2
                    ≈ 1,900 w
                    PLUS L12's "Vascular syndrome distribution" slide, ~55 w,
                    written ONCE here in `str-3` and expressly NOT counted to
                    `nr-hemi` (§14.1(b): deferring and counting are opposites)
                    ≈ 1,955 w
       `nr-hemi`    L12 2,983 w MINUS the ~55 w given to `nr-stroke`
                    ≈ 2,928 w
     TERM 2, 25 × linked questions:
       `nr-stroke`  25 × 24 = 600   — the floor exactly; does not bind
       `nr-hemi`    25 × 29 = 725   — does not bind

     budget = max(TERM 1, TERM 2), floor 600, cap 3,000:
       `nr-stroke`  ~1,955
       `nr-hemi`    ~2,928 → the ~2,400 OPERATIVE CEILING governs

   ⚠️ THE OPERATIVE CEILING IS THE REAL CONSTRAINT — ~2,400 body words /
   ~10 printed pages, hard shape 13 pp measured by printing. `nr-stroke` was
   written to ~2,100 and `nr-hemi` to ~2,400, as the brief set them.

   ⚠️ THE ÷240 FORECAST, AND WHY IT IS NOT TRUSTED HERE. theory-plan.md §4
   forecasts `nr-hemi` at 11.6 pp and flags it as a split candidate. That
   forecast was computed from the plan's 2,792 and at 1:1; this chapter is
   written at ~2,400, which forecasts at 10.0 pp. The estimator over-predicted
   by 5.1, 2.3 and 2.1 pages in ophthalmology and by up to 2 in ENT, and it has
   NEVER over-shot downward. NOTHING WAS CUT TO REACH A FORECAST.

   ⚠️ THE SEAM, IF THE HUB DECIDES `nr-hemi` PRINTS LONG — named, not taken.
   The clean seam is BETWEEN `hem-6` AND `hem-7`, i.e. hemiplegia | paraplegia
   + ataxia. It requires no reordering: sections run hemiplegia (`hem-1`…
   `hem-6`), paraplegia (`hem-7`…`hem-13`), ataxia (`hem-14`, `hem-15`),
   register (`hem-16`), in exactly that order already.
     · Half A, `hem-1`…`hem-6` — hemiplegia. Questions: npqb-nr-89, 92, 94, 95,
       96, 106, 107, 110, 114, 117 (10, plus 90 which is Brown-Séquard).
     · Half B, `hem-7`…`hem-15` — paraplegia and ataxia. Questions: npqb-nr-1,
       2, 3, 4, 93, 98, 99, 100, 101, 102, 103, 104, 105, 108, 109, 112, 115,
       116 (18).
     ⚠️ ONE COST, STATED: `npqb-nr-90`, `npqb-nr-92` and `npqb-nr-107` are
     Brown-Séquard questions. Brown-Séquard is written in `hem-6` (as SPINAL
     HEMIPLEGIA, which is what the deck calls it) and again as a row of
     `hem-11`'s incomplete-cord table. A split would put the account in half A
     and the table row in half B; the three questions file to half A. The
     register section `hem-16` would have to be duplicated or split too.
     A SECOND, WORSE SEAM EXISTS AND IS NOT RECOMMENDED: ataxia alone
     (`hem-14`, `hem-15`) is only ~330 words — below the 600 floor.

   ===========================================================================
   ⚠️⚠️ COVERAGE — ALL 53 QUESTIONS READ IN FULL AND ALL 53 LINKED.
   Read from app\data\questions.neuro.js, filtered on `chapter`, stems, every
   option, the keyed index and the objective. Option counts encountered: 3, 4,
   5, 8, 9 and 10 — nothing in either chapter assumes four.

   `nr-stroke` 24 → str-1 npqb-nr-35 · str-2 36, 37, 97 · str-3 38, 40, 47, 51
     · str-4 39, 53 · str-5 54 · str-6 41, 42, 50, 55 · str-7 44, 45, 48
     · str-9 43, 44 · str-10 57, 58, 59, 60 · str-11 56, 57
   `nr-hemi` 29 → hem-1 114, 117 · hem-3 89, 95, 110 · hem-5 94, 96, 106
     · hem-6 90, 92, 107 · hem-7 109 · hem-8 98 · hem-9 93, 105
     · hem-10 108, 112 · hem-11 107, 109 · hem-12 99, 100, 101, 102, 103, 104
     · hem-13 101, 102 · hem-14 1, 4 · hem-15 2, 3, 115, 116

   ⚠️ NOTE ON THE BANK'S OWN NUMBERING: `npqb-nr-46`, `-49`, `-52`, `-91`,
   `-111` and `-113` do not exist in the file. They are not missing from these
   chapters — they belong to other chapters or were folded during
   transcription. Nothing was assumed from the gaps.

   ===========================================================================
   ⚠️⚠️ WHICH QUESTIONS ARE NOT ANSWERABLE FROM THE ASSIGNED DECK.
   This is the check the brief asked for, and it found real mismatches — but
   NOT of the `op-va` shape. Both decks are broadly on-topic; the failures are
   specific missing FACTS, not a wrong deck. Every one is filled and tagged in
   place per CLAUDE.md §4, never declared.

   `nr-stroke` — L10 does NOT print, and six questions turn on it:
     1. `npqb-nr-37` LACUNAR = LENTICULOSTRIATE. L10 prints the TOAST row
        ("CT/MRI shows a small lacunar infarction") and NO vessel name
        anywhere. Its "Anatomy" slide, which would have carried the circle of
        Willis and the perforators, is a PICTURE WITH NO TEXT. Filled in
        `str-2`, tagged.
     2. `npqb-nr-39` UMN FACIAL PALSY SPARES THE FOREHEAD. L10 lists "UMN
        facial palsy" in both circulation tables and never says what it looks
        like. L12 lists "Upper motor neuron cranial nerve palsies" and does the
        same. Filled as a table in `str-4`, tagged.
     3. `npqb-nr-53` THE CROSSED BRAINSTEM PATTERN. Neither deck prints it —
        see the L12 deck-quality finding below. Filled in `str-4`, tabulated in
        `hem-5`, tagged in both.
     4. `npqb-nr-54` ABC / INTUBATION FIRST. L10's treatment slide begins at
        reperfusion. Filled in `str-5`, tagged.
     5. `npqb-nr-56` EXTRADURAL HAEMORRHAGE. ⚠️ THE LARGEST HOLE: L10 covers
        INTRACEREBRAL and SUBARACHNOID haemorrhage and NOTHING ELSE. Extradural
        and subdural haemorrhage appear on no slide of it — no vessel, no CT
        shape, no lucid interval. Filled as a four-column table in `str-11`,
        with the two supplied columns tagged.
     6. `npqb-nr-59` LUMBAR PUNCTURE AFTER A NEGATIVE CT. L10's SAH
        investigation slide names CT, MRI, CTA/MRA and DSA and no LP, and
        `xanthochromia` appears nowhere. Filled in `str-10`, tagged.
     Also filled, less load-bearing: early DWI positivity (`npqb-nr-50`,
     `str-6`), meningeal irritation as SAH's alone (`npqb-nr-57`, `str-10`),
     ipsilaterality of cerebellar signs (`npqb-nr-43`, `str-9`), the
     dominant/non-dominant hemisphere rule (`npqb-nr-47`, `str-3`), and the
     patent foramen ovale behind the deck's bubble test (`npqb-nr-35`,
     `str-2`).

   `nr-hemi` — L12 does NOT print, and five questions turn on it:
     1. `npqb-nr-94` PONTINE CROSSED SYNDROME and 2. `npqb-nr-96` MEDIAL
        MEDULLARY SYNDROME. ⚠️ THIS IS THE MODULE'S FIRST REAL DECK HOLE: L12
        carries TWO CONSECUTIVE SLIDES TITLED "Brainstem lesion" AND "Brainstem
        lesions" WITH NO TEXT WHATSOEVER — pictures only. The deck plainly
        taught crossed syndromes from those pictures. Three questions
        (`npqb-nr-94`, `-96`, and `npqb-nr-53` in `nr-stroke`) depend on them.
        Filled in `hem-5` and `str-4`, every claim tagged. `npqb-nr-106`
        (crossed hemiplegia → brainstem) IS answerable, but only via the
        separate "Hemiplegia cruciata" slide, which is about the decussation
        and not about cranial-nerve crossing.
     3. `npqb-nr-104` CORTICAL SENSATION. L12 writes "loss of cortical
        sensation in both lower limbs" and never defines the modality. Filled
        in `hem-12`, tagged.
     4. `npqb-nr-98` ABDOMINAL REFLEXES AT T6. L12's cord-compression slide
        gives the sensory level, the plantar and the sphincters, not the
        abdominal reflexes. Filled in `hem-8`, tagged.
     5. `npqb-nr-112` BACK PAIN AS A DISCRIMINATOR. L12 names back pain only
        inside cauda equina syndrome. Filled in `hem-10`, tagged.
     ⚠️ ONE KEYED ANSWER RUNS AGAINST ITS OWN DECK: `npqb-nr-102` keys "CT
     brain" as the first investigation, while L12's investigation slide says
     "MRI: Investigation of choice". Both are right in their own frame — MRI
     for the chronic paraplegia work-up, CT for the acute emergency. Written
     out in `hem-12` with the reconciliation tagged. Per the 2026-08-11 ruling
     the key is not disputed, only noted.

   ===========================================================================
   ⚠️⚠️ DECK QUALITY — the brief asked directly, and the two decks differ.

   `L10) Stroke` — SOUND. 53 slides, 2,090 cached words, 39 w/slide. It is a
   prose deck by a lecturer who writes in full sentences, and every teaching
   slide extracted cleanly. NO reconstruction was needed anywhere and no slide
   reads as though its content is missing. FOUR slides are image-only and only
   one costs anything: "Anatomy" (the arterial anatomy — recorded as a deferral
   to `nr-intro`), "FAST", "Pronator drift", and the thrombectomy/stenting
   angiogram panels. The remaining picture slides are case imaging with their
   teaching point written in the adjacent text slide. ⚠️ THIS DECK DOES NOT
   NEED A VISUAL READ.

   `L12) hemi,parap&ataxia` — ⚠️ NOT TEXT-COMPLETE, AND A RENDER IS WORTH
   COMMISSIONING. 86 slides, 2,983 cached words, 35 w/slide. Three separate
   findings, each verified against the cache on disk today:
     (a) ⚠️⚠️ NINE SLIDES ARE BARE TITLES WITH NO BODY TEXT: "The pyramidal
         system" · "Localisation of the pyramidal tract lesions" · "Cerebral
         lesion" · "Brainstem lesion" · "Brainstem lesions" · "A spinal
         section" · "What impact has the lecvel of the lesion?" · "What is the
         lesion?" (×2) · "Ataxia symptoms:". THE BRAINSTEM PAIR IS THE
         EXPENSIVE ONE — three questions turn on material that is nowhere in
         the cache. "Ataxia symptoms:" is the second: a slide that exists to
         list the symptoms of ataxia and lists none.
     (b) ⚠️ ONE SLIDE HAS BROKEN GRAPHICS IN THE SOURCE PDF ITSELF. "The causes
         of paraplegia may be:" prints the string "Failed to load the image."
         FOUR TIMES. The four axis names (acute/chronic, local+remote,
         focal/diffuse, complete/incomplete) survive as text; the four graphics
         are gone from the PDF, so a render will NOT recover them. This is a
         fourth kind of blank page for the project's list — not a text slide,
         not byte-identical filler, not a vector-outline failure, but a
         PowerPoint export whose linked images failed at export time.
     (c) ⚠️⚠️ THE LECTURER'S OWN SKIP MARKER IS UNRECOVERABLE FROM TEXT. Slide
         2 reads: "All slides in italic are not for undergraduates, or just
         read it for extra infromations." [sic]. A text cache carries no
         italics. This is the ophthalmology "(Tutorial) / (T)" problem in a
         form that CANNOT be read from the cache at all — there is no marker to
         grep. EVERYTHING IN `nr-hemi` IS THEREFORE WRITTEN AT FULL WEIGHT,
         which is the safe direction, and a render would be needed to find out
         which slides the lecturer meant to exclude. ⚠️ Candidates on internal
         evidence alone (the four white-matter syndromes in `hem-4` read like
         postgraduate detail) but NOTHING WAS DOWN-WEIGHTED ON A GUESS.
   ⚠️ IS IT A PASTED-SCREENSHOT DECK LIKE `L17`? NO — on the cache's own
   evidence. `L17`'s signature was 7 words/slide across the whole deck; L12
   runs 35 w/slide and its text slides carry full tables, numbered lists and
   prose. The failure here is LOCAL — nine slides out of 86 — not systemic. The
   ratio check that caught `L17` correctly passes L12, which is the point: it
   is a whole-deck instrument and it does not see a nine-slide hole. ⚠️ A
   PER-SLIDE ratio would have. Recommend running the ratio per slide, not per
   deck, on every remaining module deck.

   ===========================================================================
   ⚠️⚠️ WHAT CONTRADICTS THE BRIEF — reported, not quietly worked around.

   (1) THE TWO SOURCE WORD COUNTS ARE BOTH WRONG. 2,051 vs 2,090 measured
       (L10); 2,792 vs 2,983 measured (L12), out by 6.8 %. See the BUDGET
       block. theory-plan.md §2's whole table should be re-measured before it
       is used to forecast another split.
   (2) "BOTH FULLY DECK-SOURCED, NO BOOK, NO RENDERING" IS TRUE OF `nr-stroke`
       AND ONLY MOSTLY TRUE OF `nr-hemi`. L12's nine text-free slides mean the
       brainstem teaching is not in the cache and had to be supplied and
       tagged. The chapter is complete and every question is answerable — but
       the completeness is partly bought with tagged general knowledge, not
       with deck text. A render of L12 is recommended.
   (3) "THIS MODULE'S CACHES WERE VERIFIED SOUND" — true as theory-plan.md
       means it (the extraction matches `pdftotext -layout`), and NOT the same
       thing as the deck being complete. L12 extracts perfectly and still
       carries nine empty slides. ⚠️ EXTRACTION-SOUND IS NOT CONTENT-COMPLETE;
       the two checks are independent and only one of them has been run on this
       module's 25 decks.
   (4) "L12 IS 86 SLIDES FOR 2,792 WORDS (32 w/slide) AND L10 IS 53 FOR 2,051"
       — the ratios are 35 and 39 on the measured counts. Neither is anywhere
       near `L17`'s 7. The brief's worry was the right worry aimed at the wrong
       instrument: the deck-level ratio cannot see L12's hole.
   (5) "nr-hemi FORECASTS AT 11.6 pp" — true of the plan's 2,792 words at 1:1,
       not of what was written. At ~2,400 the same estimator gives 10.0 pp, and
       the estimator has over-predicted every time it has been measured here.
   (6) THE BRIEF'S IMPLIED CHAPTER SPLIT ("infarct vs haemorrhage, the arterial
       territories, UMN vs LMN, the ataxia types" as this pair's comparisons)
       IS ACCURATE, WITH ONE ADDITION: the four-way INTRACRANIAL HAEMORRHAGE
       comparison (extradural/subdural/SAH/intracerebral) is the single most
       expensive table in `nr-stroke` and half of it is not in the deck at all.
   (7) THE ARTERIAL-TERRITORY TABLE IS NOT L10's ALONE. L10 gives anterior vs
       posterior CIRCULATION; the MCA/ACA/PCA syndrome table is on L12, in
       `nr-hemi`'s deck. It is written ONCE, in `str-3`, cited to both decks,
       and its words are counted to `nr-stroke` only. `hem-3` and `hem-4` point
       at it rather than repeating it.

   ===========================================================================
   ⚠️ CROSS-REFERENCE CONVENTION — the brief's first extra deliverable.

   `app\data\theory.neuro.js` DOES NOT EXIST, so no section id outside this
   file can be pointed at. The convention adopted, and used consistently in
   both chapters and both register sections:
     · A cross-reference INSIDE this file names the SECTION id in backticks —
       `str-4`, `hem-11`. Those are live today.
     · A cross-reference OUTSIDE this file names the CHAPTER id in backticks
       and says what is owed — "the UMN/LMN framework is `nr-lmn`'s". NO
       section id is invented for a chapter that does not exist.
     · Every outward reference also appears as a row in the chapter's register
       section (`str-12`, `hem-16`), so the hub has one list to convert rather
       than a grep across two chapter bodies.
   ⚠️ Chapter ids used outward, all verified present in modules.js today:
   `nr-intro` · `nr-ms` · `nr-movement` · `nr-lmn` · `nr-cns` · `nr-cranial` ·
   `nr-delirium` · `nr-headache` · `nr-backpain`. No id was written from
   memory; the list was read out of app\data\modules.js.

   ===========================================================================
   ⚠️ REGISTER (§14.5) — THIS IS THE MODULE'S FIRST PAIR, SO NO ROW WAS
   INHERITED. There was nothing to verify against and nothing to correct. Every
   row filed by these two chapters is NEW, and each one is written into the
   chapter's own register SECTION — `str-12` and `hem-16` — not merely into
   this header. THE SECTIONS EXIST; the rows were written into them before this
   paragraph was. Fourteen rows in total: six from `nr-stroke`, eight from
   `nr-hemi`. Full text in those two sections.

   Each was checked against the questions filed here before being deferred.
   ⚠️ ONE EXCEPTION IS DECLARED RATHER THAN HIDDEN: the `nr-stroke` → `nr-lmn`
   row defers the UMN/LMN framework, and two questions filed here
   (`npqb-nr-39`, `npqb-nr-53`) turn on the FACIAL half of it. That half is
   therefore WRITTEN HERE, in `str-4`, and only the framework is deferred. The
   §14.1 precedent is `ent-hearing`/`ent-audio`: a fact can arrive by deferral
   while its words stay charged elsewhere, and the honest move is to say so.

   ===========================================================================
   GAPS FILLED AND TAGGED (CLAUDE.md §4 — a gap is ANSWERED, NOT DECLARED; the
   tag is a short clause on the claim, never a dead-end sentence). House style
   copied from `lid-11` and `lac-10`. Thirteen fills, every one listed:

   `nr-stroke`: lenticulostriate origin of lacunes (`str-2`) · patent foramen
     ovale behind the bubble test (`str-2`) · dominant/non-dominant hemisphere
     (`str-3`) · the whole UMN-vs-LMN facial table and the crossed rule
     (`str-4`) · FAST expanded, pronator drift, ABC-before-imaging (`str-5`) ·
     why non-contrast, and early DWI positivity (`str-6`) · why BP is not
     lowered in ischaemic stroke (`str-7`) · ipsilaterality of cerebellar signs
     (`str-9`) · meningeal irritation signs, and LP for xanthochromia
     (`str-10`) · EXTRADURAL AND SUBDURAL HAEMORRHAGE IN FULL (`str-11`).
   `nr-hemi`: the crossed brainstem rule with its pontine and medullary
     instances (`hem-5`) · thoracic level from normal arms (`hem-6`) ·
     abdominal reflexes and glove-and-stocking at T6 (`hem-8`) · back pain as a
     weak discriminator (`hem-10`) · cortical sensation defined, the
     paracentral-lobule reason, and CT-before-LP (`hem-12`) · ipsilaterality of
     cerebellar signs and of rebound (`hem-14`).

   ===========================================================================
   THE SOURCES' OWN DEFECTS — RECORDED IN PLACE, NEVER SILENTLY CORRECTED.

   L10: "Stroke ot TIA?" · "hemigeclect" · "neuroimmaging" · "Inracerebral" ·
     "developped" · "Nimodipin" · "protamin" · "hedache" · "cerebrak" ·
     "demo" (truncated mid-word on the CT line). The World Cup citation is
     printed "Wilpert-Lampen"; the paper is Wilbert-Lampen, NEJM 2008 — the
     deck's spelling is kept in `str-2` and the correction is not asserted.
   L12: the Causes list runs 1–9 then 11–12 with NO ITEM 10 (renumbered 1–11 in
     `hem-2`; nothing is missing) · the clinical-picture table heads BOTH
     columns "(MORE THAN BASELINE)" when negative signs are by definition less
     (`hem-1`) · "chin of tibia" for SHIN (`hem-14`) · "Ataxic Hemipresis" ·
     "aquired" · "Menegitis" · "volantary" · "retension" · "defication" ·
     "Incidous" · "demylination" · "Fredreich's" · "stacatto" · "Rhomberg's" ·
     "oculomotoor" · "lecvel" · "thepyramidal" · "tarct" · "papid" · "weaknes".
   ⚠️ TWO BANK DEFECTS, KEYED AS PRINTED PER THE 2026-08-11 RULING:
     · `npqb-nr-3` keys "ipsilateral limb ataxia & HYPERTONIA" for a cerebellar
       hemisphere lesion; L12's own table says HYPOTONIA. Noted in `hem-15`.
     · `npqb-nr-114` and `npqb-nr-117` describe the SAME gait (circumduction)
       and key two different options from one list — "spastic gait" and
       "hemiplegia". Noted in `hem-15`.
     Neither is disputed; both are recorded.

   ⚠️⚠️ MEASURED FROM DISK AFTER THE FINAL EDIT (§14.1) — AND BOTH CHAPTERS
   ARE OVER. This paragraph was written LAST, from the validator output, never
   from a plan. Re-run the command below and it will agree.

     nr-stroke   12 sections   3,365 body words   (budget ~1,955, +72 %)
     nr-hemi     16 sections   4,687 body words   (ceiling ~2,400, +95 %)

   ÷240 gives 14.0 pp and 19.5 pp; at the table-dense 250 w/pp this module is
   likely to print at, 13.5 and 18.7. BOTH EXCEED THE ~10 pp OPERATIVE CEILING,
   and `nr-hemi` EXCEEDS THE 13 pp HARD SHAPE ON EVERY DIVISOR. Reported, not
   worked around; NOTHING WAS DELETED TO IMPROVE THE NUMBER.

   WHAT DRIVES IT, honestly: both decks are dense prose-and-table lectures
   whose content is nearly all protected under §14.2. `L12` in particular is a
   localisation course in which almost every slide is a classification or a
   comparison, and a comparison costs rows x columns (§14.1). The two register
   sections were already cut once — 590 and 795 words down to 364 and 489 — by
   deleting what this header already says. That was the only pure duplication
   in the file.

   THE HUB'S MENU, so there is a choice rather than an argument:
     · SPLIT `nr-hemi` at the `hem-6` / `hem-7` seam (the SEAM block above).
       Half A ~1,660 w, half B ~3,030 w. ⚠️ HALF B IS STILL OVER. A second cut
       between `hem-13` and `hem-14` (paraplegia | ataxia) gives ~2,460 + ~570,
       and 570 is BELOW THE 600 FLOOR. So the honest three-way is hemiplegia
       ~1,660 / paraplegia ~2,460 / ataxia + register ~570, and the third would
       need the book (Neuro ch.17 Ataxia, printed 173–176) to reach the floor.
     · SPLIT `nr-stroke` at the `str-8` / `str-9` seam — ISCHAEMIC (`str-1`…
       `str-8`, ~2,125 w, 18 questions) | HAEMORRHAGIC (`str-9`…`str-12`,
       ~1,240 w, 8 questions). ⚠️ `npqb-nr-44` and `npqb-nr-57` are linked in
       both halves and would each need one home. THE BOOK SPLITS EXACTLY HERE
       — Neuro ch.4 "Cerebrovascular Diseases (Ischemic)", ch.5 "(Hemorrhagic)".
       No reordering is required by either seam.
     · OR PRINT FIRST. The ÷240 estimator has over-predicted by 5.1, 2.3, 2.1,
       2.0 and 1.5 pages in the last two modules and has NEVER over-shot
       downward. At 300 w/pp `nr-stroke` is 11.2 pp — inside the hard shape.

   WHAT COMPRESSION WOULD COST, if the hub orders that instead. Only two blocks
   can go without losing a fact the bank tests: `hem-4` (the four white-matter
   syndromes, 304 w, ZERO linked questions, and the likeliest italic-marked
   postgraduate material in the deck) and `hem-13`'s CSF table (135 w, which is
   `nr-lmn`'s and `nr-ms`'s more than it is this chapter's). Together ~440 w.
   ⚠️ NOT `str-11` and NOT `hem-5` — those are the two supplied blocks five
   questions depend on, and cutting either leaves questions unanswerable.

   ===========================================================================
   RE-MEASURE COMMAND FOR THE HUB (this header states no totals; run this):
     node -e "global.window={};var fs=require('fs');
       eval(fs.readFileSync('content/neuro/theory-drafts/nr-stroke.draft.js','utf8'));
       Object.keys(THEORY_DRAFT).forEach(function(k){var t=0;
         THEORY_DRAFT[k].sections.forEach(function(s){t+=s.body.trim().split(/\s+/).length;});
         console.log(k, THEORY_DRAFT[k].sections.length+' sections', t+' body words');});"
   =========================================================================== */

var THEORY_DRAFT = {
  "nr-hemi": {
    "intro": "Three approaches to weakness in one deck: hemiplegia by level, paraplegia by level and onset, ataxia by a three-column table. Localisation is the entire exam here — cortex, capsule, brainstem, cord — and the deck's own brainstem slides are pictures carrying no text.",
    "sections": [
      {
        "id": "hem-1",
        "w": "must",
        "h": "What hemiplegia is, and the two columns of signs",
        "body": "- **Hemiplegia (hemiparesis):** paralysis of the **LONGITUDINAL HALF of the body**, from disease or injury of the **PYRAMIDAL TRACT**. *Hemi* is Greek for half.\n- **⚠️ It is a SYMPTOM, not a disease** — the deck's own closing line. **Management is always directed at the cause.**\n- **Three origins:** **CONGENITAL** — brain damage before, during or **<28 days after birth** · **HEREDITARY** · **ACQUIRED** — stroke, accident, brain infection or tumour, at any age.\n\n### The clinical picture — two columns\n\n|**NEGATIVE signs — loss**|**POSITIVE signs — release**|\n|---|---|\n|**APHASIA**|**CLASP-KNIFE SPASTICITY**|\n|**UMN CRANIAL NERVE PALSIES**|**HEMIPLEGIC POSTURE**|\n|weakness of **PYRAMIDAL DISTRIBUTION** in upper and lower limb|**EXAGGERATED deep tendon reflexes**|\n|**CIRCUMDUCTION GAIT**|**ABSENT superficial reflexes**|\n|—|**EXTENSOR PLANTAR**|\n|—|**HEMIANAESTHESIA**|\n\n*Defect: the deck heads BOTH columns “(MORE THAN BASELINE)”. Negative signs are by definition LESS than baseline. Recorded as printed, not corrected.*\n\n- **⚠️ The circumduction gait:** the **stiff, extended leg is swung forward in an ARC** because it cannot flex — the **SPASTIC (hemiplegic) gait** of an established upper motor neuron lesion, and the classic post-stroke gait.\n- **Assessment covers more than power:** **cognitive ability** · **gross motor skills** · **fine motor skills** · **speech and language, both expression AND comprehension** · **personal and social skills** · **ataxia**.\n\nSrc: L12 sl. What is hemiplegia? · Types of paralysis · Clinical picture · Assessment also should include · Hemiplegia is a symptom not a disease",
        "qs": [
          "npqb-nr-114",
          "npqb-nr-117"
        ]
      },
      {
        "id": "hem-2",
        "w": "must",
        "h": "Causes, tempo, and the functional mimic",
        "body": "### Causes — the deck's own list\n**1–6:** **cerebrovascular accident** (thrombosis, embolism or haemorrhage) · **transient ischaemic attack** · **head trauma** (brain contusion) · **MIGRAINE** · **TODD PARALYSIS** (post-ictal) · **brain tumour**, primary or metastatic.\n\n**7–11:** **infection** — brain abscess, encephalitis, meningitis · **VASCULITIS** · **multiple sclerosis** · **LEUKODYSTROPHIES** · **perinatal injury or congenital disease**.\n\n*Defect: the slide numbers this list 1–9 then 11–12, with no item 10. Renumbered 1–11 here; nothing is missing.*\n\n### Onset is the diagnostic instrument\n\n|**Tempo**|**Cause**|\n|---|---|\n|**ABRUPT**|**VASCULAR**|\n|**seconds to minutes**|**EPILEPSY** · **MIGRAINE**|\n|**over DAYS**|**DEMYELINATING DISEASE**|\n|**over WEEKS**|**MASS — tumour or abscess**|\n\n- **Progressive hemiplegia:** **AV malformations** · **brain abscess** · **tumours** · **demyelinating disease** · **STURGE–WEBER syndrome**.\n- **Transient hemiplegia:** **TIA** · **migraine** · **post-ictal (Todd paralysis)** · **multiple sclerosis**.\n- **Alternating hemiplegia:** **Alternating Hemiplegia of Childhood** — **ATP1A3** mutations disturbing **sodium and potassium transport** across the nerve-cell membrane · also **TIA** and **migraine**.\n\n### Functional (psychogenic) hemiplegia\n- **What it covers:** **CONVERSION REACTION** — the patient is **NOT conscious** of the non-organic nature of the deficit — and **MALINGERING**, a **conscious** effort to fool the examiner.\n- **Clue 1:** **improvement in strength with COACHING**.\n- **Clue 2:** **GIVE-WAY weakness**.\n- **Clue 3:** **inconsistency** — cannot extend the foot, but **can walk on the toes**.\n- **Clue 4:** paralysis with **NO other motor sign** — tone and reflexes unchanged.\n- **⚠️ Clue 5 — HOOVER SIGN:** supine, the patient lifts one leg at a time. A **truly paralysed** leg still presses the **OPPOSITE HEEL DOWN**. **Failure to press = POSITIVE Hoover = functional.**\n\n### Management\n- **Treat the primary disease:** stroke, CNS infection, and so on.\n- **Then three things:** **skin care** · **physiotherapy** · **chest care**.\n\nSrc: L12 sl. Causes · Onset of hemiplegia · What causes progressive/transient/alternating hemiplegias? · Functional Hemiplegia · Clues to functional weakness · Management",
        "qs": []
      },
      {
        "id": "hem-3",
        "w": "must",
        "h": "Cortical against subcortical — and what makes a hemiplegia capsular",
        "body": "- **The four levels:** **1. CORTICAL** · **2. SUBCORTICAL** · **3. BRAINSTEM** · **4. SPINAL CORD**.\n- **⚠️ Cerebral lesions are commonest**, whether cortical or subcortical.\n\n|**Feature**|**CORTICAL**|**SUBCORTICAL (capsular)**|\n|---|---|---|\n|**Weakness**|**FOCAL** — *“usually MONOPLEGIA more than hemiplegia”*|**EQUAL** in **face, arm and leg**, contralateral|\n|**Why**|the motor strip is spread over a wide cortical surface|the descending axons **CONVERGE INTO A SMALL VOLUME in the INTERNAL CAPSULE** to form the corticospinal tract|\n|**Company it keeps**|**APHASIA · SEIZURES** — signs of cortical dysfunction|**none** — no aphasia, no seizures, no cortical sensory loss|\n|**Sensation**|**CORTICAL sensory loss** (defined in `hem-12`)|**HEMIANAESTHESIA**, all modalities|\n\n- **⚠️ Capsular hemiplegia is COMPLETE:** dense, **equal face–arm–leg** weakness with **hemihypoaesthesia** and a **UMN facial palsy**, and **no cortical sign at all**.\n- **⚠️ Not cortical:** a **VISUAL FIELD DEFECT**. The optic radiation and occipital cortex are **PCA** territory, not the motor cortex's — see the artery table in `str-3`.\n- **Coma and cortical blindness** likewise argue away from the capsule *(supplied)*.\n\nSrc: L12 sl. Localisation of Hemiplegia · 1-Cerebral Lesions · A-Cortical Lesions · B-Subcortical Lesions",
        "qs": [
          "npqb-nr-89",
          "npqb-nr-95",
          "npqb-nr-110"
        ]
      },
      {
        "id": "hem-4",
        "w": "should",
        "h": "The four white-matter syndromes — all but one in the basis pontis",
        "body": "**Four subtypes:** of subcortical or white-matter lesion, **mostly LACUNAR**, and mostly in the **BASIS PONTIS**.\n\n### 1. Ataxic hemiparesis\n- **Site:** **basis pontis**, at the junction of the **upper third and lower two thirds**; **mostly lacunar**.\n- **Picture:** **HOMOLATERAL ATAXIA and CRURAL PARESIS** — **more severe in the LOWER limb**.\n- **Occasionally:** **dysarthria** · **nystagmus** · **paraesthesia**.\n- **Same findings from:** **thalamocapsular lesions** · **contralateral posterior limb of the internal capsule** · **contralateral RED NUCLEUS** · superficial infarcts in the **anterior cerebral artery paracentral area**.\n\n### 2. Locked-in syndrome\n- **Site:** **BILATERAL VENTRAL PONTINE** lesion — **infarction · tumour · trauma · haemorrhage · CENTRAL PONTINE MYELINOLYSIS**.\n- **Component 1:** **QUADRIPLEGIA**, from bilateral corticospinal tract lesions.\n- **Component 2:** **APHASIA**, from corticobulbar fibres and the lower cranial nerves.\n- **Component 3:** occasional involvement of the **VII nerve FASCICLES**.\n- **⚠️ The patient is FULLY AWAKE:** the **RETICULAR FORMATION** and the **supranuclear oculomotor pathway** are undamaged, so consciousness and vertical eye movement survive.\n\n### 3. Pure motor hemiparesis\n- **Site:** **lacunar infarct in the basis pontis**, involving the **CORTICOSPINAL TRACT**.\n- **Picture:** motor hemiparesis **WITHOUT facial involvement**.\n- **Same findings from:** **posterior limb of the internal capsule** · **cerebral peduncle** · **medullary pyramid**.\n- **⚠️ What favours the pons:** **VERTIGO, DYSARTHRIA and GAIT ABNORMALITY**.\n\n### 4. Dysarthria–clumsy hand syndrome\n- **Site:** vascular, **usually lacunar**, **basis pontis** at the **upper-third / lower-two-thirds junction**.\n- **Picture:** **facial weakness** · **SEVERE DYSARTHRIA** · **dysphagia** · **clumsiness and paresis of the HAND**.\n- **Same findings from:** the **GENU of the internal capsule** · **deep cerebellar haemorrhage**.\n\n*The MCA / ACA / PCA syndrome table that closes this run of slides is written once, in `str-3`, and is not repeated here.*\n\nSrc: L12 sl. B-Subcortical Lesions and its four-subtype panel · Vascular syndrome distribution (cited only — written in `str-3`)",
        "qs": []
      },
      {
        "id": "hem-5",
        "w": "must",
        "h": "Brainstem — hemiplegia cruciata, and the crossed rule the decks never print",
        "body": "**⚠️ The deck's hole:** two consecutive slides titled *Brainstem lesion* and *Brainstem lesions* carry **NO TEXT AT ALL** — pictures only. Everything below the cruciata block is supplied and tagged.\n\n### Hemiplegia cruciata — the one brainstem entity the deck does write\n- **The lesion:** a **PARTIAL lesion at the PYRAMIDAL DECUSSATION**, in the **CAUDAL MEDULLA**.\n- **The anatomy:** about **90 % of corticospinal fibres cross** at the decussation to form the **LATERAL CORTICOSPINAL TRACT**, which mainly innervates **limb muscles**.\n- **Half one:** **IPSILATERAL** — the **already-crossed** fibres for the **LOWER limb**.\n- **Half two:** **CONTRALATERAL** — paralysis of the **UPPER limb**.\n\n### The crossed rule *(supplied — neither deck states it)*\n- **Crossed hemiplegia:** a **cranial nerve palsy on ONE side** with **limb weakness on the OTHER** localises to the **BRAINSTEM**, at the level of that cranial nerve's nucleus.\n- **Why:** the nerve leaves at its own level and stays **IPSILATERAL**; the corticospinal tract crosses **lower down**, so the limbs are **CONTRALATERAL**.\n- **⚠️ The pons — VII:** an **LMN facial palsy** taking **UPPER AND LOWER face**, with hemiplegia on the **opposite** side, puts the lesion in the **PONS, on the side of the facial palsy**.\n- **⚠️ The medulla — XII:** the **tongue deviates TOWARD** a lower motor neuron hypoglossal lesion. **Tongue deviation to one side with hemiplegia on the other** = a **MEDIAL MEDULLARY** lesion, **on the side of the tongue**.\n- **The hook:** **cranial nerve IPSILATERAL, limbs CONTRALATERAL** — so the lesion sits on the side of the **cranial nerve** sign.\n\n*Every claim in the second block is not taken from the course material. UMN against LMN facial palsy is tabulated in `str-4`; the cranial nerves as a subject are `nr-cranial`'s.*\n\nSrc: L12 sl. Hemiplegia cruciata · Brainstem lesion / Brainstem lesions — image-only, no text in the cache. The crossed rule and its two instances are supplied and tagged",
        "qs": [
          "npqb-nr-94",
          "npqb-nr-96",
          "npqb-nr-106"
        ]
      },
      {
        "id": "hem-6",
        "w": "must",
        "h": "Spinal hemiplegia — Brown-Séquard, and why the face is spared",
        "body": "- **⚠️ The level rule:** a spinal lesion causes hemiplegia **only if it is CERVICAL**, and it **SPARES THE FACE**. Most spinal lesions cause **bilateral** weakness instead.\n\n### 1. Hemisection of the cord — Brown-Séquard syndrome\n\n|**Finding**|**Side**|**Tract**|\n|---|---|---|\n|**Segmental LMN signs and sensory change AT the level**|**IPSILATERAL**|**roots and ANTERIOR HORN CELLS** at the level|\n|**Loss of PAIN and TEMPERATURE**|**CONTRALATERAL**|the **crossed SPINOTHALAMIC** tract|\n|**Loss of PROPRIOCEPTION / joint sense**|**IPSILATERAL**|**POSTERIOR COLUMN**|\n|**SPASTIC WEAKNESS**|**IPSILATERAL**|descending **CORTICOSPINAL** tract|\n\n- **⚠️ The one-line answer:** **ipsilateral hemiplegia + ipsilateral JOINT-SENSE loss**, with **contralateral pain and temperature loss**.\n- **The gap and the sparing:** contralateral pain and temperature loss **begins 1–2 SEGMENTS BELOW** the lesion; **LIGHT TOUCH is PRESERVED**, having redundant ipsilateral and contralateral paths.\n- **⚠️ Dissociation is the giveaway:** weakness on one side with **superficial sensory loss on the OTHER** cannot be cortex, capsule or brainstem — it is a **CERVICAL CORD hemisection**.\n- **⚠️ Reading the level off the arms:** **normal arms**, an ipsilateral spastic leg and contralateral pinprick loss put the hemisection in the **THORACIC** cord, **on the side of the weakness** *(the level inference is supplied)*.\n- **Causes:** **PENETRATING INJURY** — stab and gunshot wounds · **fracture of the LATERAL MASS** of a vertebra · **METASTASES** · **lumbar disc prolapse**.\n- **⚠️ The lecturer's own caveat:** Brown-Séquard is printed **“NOT A CAUSE OF PARAPLEGIA”** — it is a **hemi-cord** lesion, so it paralyses one side. It is also a row of the incomplete-cord table in `hem-11`.\n\n### 2. Spinal cord infarction\n- **Anterior spinal artery:** usually **PARAPARESIS with SPINOTHALAMIC sensory loss** below the level.\n- **⚠️ Rarely:** one **segmental branch** is involved, giving **unilateral** cord damage — **monoparesis or hemiparesis**.\n\nSrc: L12 sl. 2. Spinal cord lesion · Hemisection of the spinal cord (Brown sequard syndrome) · 2- Spinal Cord Infarction · Brown – Sequard Syndrome (NOT A CAUSE OF PARAPLEGIA)",
        "qs": [
          "npqb-nr-90",
          "npqb-nr-92",
          "npqb-nr-107"
        ]
      },
      {
        "id": "hem-7",
        "w": "must",
        "h": "Paraplegia — the two postures, and the UMN/LMN split",
        "body": "- **Paraplegia:** paralysis of the **LOWER PART OF THE BODY**, affecting **both lower limbs** and **sometimes the sphincters**.\n\n|**Feature**|**Paraplegia in EXTENSION**|**Paraplegia in FLEXION**|\n|---|---|---|\n|**Lesion**|**MILD / PARTIAL** — damaging the **pyramidal tract only**|**SEVERE / COMPLETE** — damaging **pyramidal AND extrapyramidal**|\n|**Mechanism**|pyramidal function is lost, so **the EXTRAPYRAMIDAL takes the upper hand**|both are lost, so **the SPINAL ARC becomes dominant**|\n|**Tone**|tone of the **ANTIGRAVITY muscles**, e.g. **QUADRICEPS**|**relatively increased tone of the FLEXORS over the extensors**|\n|**When**|the **INITIAL stages of compressive myelopathy**; common with **T1–T9** vertebral involvement|later, with complete lesions|\n\n### Classification\n- **UMN lesion — SPASTIC:** **CEREBRAL** or **SPINAL**.\n- **LMN lesion — FLACCID:** **anterior horn cell** · **peripheral nerve** · **neuromuscular junction** · **muscle**.\n- **UMN sites in full:** **cerebral cortex** · **white matter** · **INTERNAL CAPSULE** · **brainstem** · **spinal cord**.\n- **LMN sites, with the deck's diseases:** **AHC — motor neuron disease, POLIOMYELITIS** · **roots — CAUDA EQUINA** · **plexus — lumbosacral plexus** · **peripheral nerve — peripheral neuropathy** · **NMJ — MYASTHENIA GRAVIS** · **muscle — muscular dystrophies**.\n- **⚠️ Spastic paraplegia is UMN:** by definition, so **GUILLAIN–BARRÉ cannot produce it** — a peripheral nerve disease stays **FLACCID and AREFLEXIC**. **Cord compression, anterior spinal artery occlusion and transverse myelitis all become spastic** once shock has passed (`hem-9`).\n\nSrc: L12 sl. WHAT IS PARAPLEGIA? · Paraplegia in extension · Paraplegia in flexion · Classification · Localisation · 1.UMN LESIONS · 2.LMN LESIONS",
        "qs": [
          "npqb-nr-109"
        ]
      },
      {
        "id": "hem-8",
        "w": "must",
        "h": "The level of the lesion — compression signs, dermatomes, myotomes",
        "body": "### Signs of spinal cord compression, by level\n\n|**Level**|**What you find**|\n|---|---|\n|**CERVICAL, above C5**|**UMN signs and sensory loss in ALL FOUR LIMBS**|\n|**CERVICAL, C5 to T1**|**LMN signs and SEGMENTAL sensory loss in the ARMS**, with **UMN signs in the LEGS**|\n|**THORACIC cord**|**SPASTIC PARAPLEGIA with a SENSORY LEVEL on the trunk**|\n|**CONUS MEDULLARIS**|**sensory loss in the SACRAL area**, **extensor plantar response**|\n|**CAUDA EQUINA**|**LMN signs in the lower limbs**|\n\n- **Dermatome:** the **area of skin innervated by sensory axons within one segmental nerve root**. Essential for determining the level, and for assessing improvement or deterioration.\n- **Myotome:** the **segmental nerve root innervating a muscle** — again, level-finding.\n\n|**Upper limb**|**Lower limb**|\n|---|---|\n|**C5 — deltoid**|**L2 — hip flexors**|\n|**C6 — wrist extensors**|**L3,4 — knee extensors**|\n|**C7 — elbow extensors**|**L4,5–S1 — knee flexors**|\n|**C8 — long finger flexors**|**L5 — ankle DORSIflexors**|\n|**T1 — small hand muscles**|**S1 — ankle PLANTAR flexors**|\n\n- **⚠️ What a T6 lesion looks like:** a **SENSORY LEVEL at T6** · **abdominal reflexes lost bilaterally** *(the abdominal reflexes are supplied — the deck lists superficial reflex loss only under hemiplegia)* · **bilateral EXTENSOR PLANTARS** · **DOUBLE SPHINCTERIC affection**.\n- **⚠️ What excludes a cord level:** **GLOVE-AND-STOCKING** hypoaesthesia. That distribution is **PERIPHERAL NEUROPATHY** and has no level at all *(supplied; the deck names peripheral neuropathy only as an LMN site)*.\n- **⚠️ Two slides here are pictures:** *A spinal section* and *What impact has the lecvel of the lesion?* [sic] carry **no text**; the compression table above is what the cache preserves of that run.\n\nSrc: L12 sl. SIGNS OF SPINAL CORD COMPRESSION · Dermatomes · Myotomes · A spinal section / What impact has the lecvel of the lesion? — image-only",
        "qs": [
          "npqb-nr-98"
        ]
      },
      {
        "id": "hem-9",
        "w": "must",
        "h": "Onset — spinal shock, recovery, and the insidious picture",
        "body": "### A. Acute — the two stages\n\n|**Feature**|**1. SPINAL (NEURAL) SHOCK**|**2. RECOVERY of reflex function**|\n|---|---|---|\n|**Voluntary movement**|**LOST**|**still lost**|\n|**Sensation**|**ALL sensation lost**|**all lost below the lesion**|\n|**Reflexes**|**LOST**, and **the plantar is LOST**|**EXAGGERATED**, **plantar EXTENSOR**|\n|**Muscle tone**|**FLACCID**|**SPASTIC**|\n|**Sphincters**|**urinary RETENTION**, **PRIAPISM**|**REFLEX micturition, defaecation and erection**|\n|**Autonomic**|**LOSS of sweating below the lesion**, **oedema**|**EXCESSIVE sweating**|\n\n- **⚠️ The single most tested line:** the shock stage is **FLACCID and AREFLEXIC**, with **lost tone, lost deep jerks, lost plantar and urinary retention**. **Hypertonia, hyperreflexia and clonus belong to the RECOVERY stage** — never to the first hours.\n- **⚠️ Coma is offered as a shock feature** in the bank's own option set. The deck lists retention, lost jerks and flaccidity and **says nothing about consciousness**. Recorded as printed, not disputed.\n\n### What happens at the level of the lesion\n- **Above the lesion:** **NOTHING**.\n- **At the lesion:** **LOWER motor neuron signs** — the **LOCAL** effect, at the reflex arc: **motor, sensory and trophic changes**, plus **inflammatory signs**.\n- **Below the lesion:** **FLACCID in shock**, **UMN signs in recovery** — the **REMOTE** effect, on the long tracts: **pyramidal · extrapyramidal · spinothalamic · dorsal column**.\n\n### B. Insidious onset\n- **Presentation:** gradual paraplegia **in extension or in flexion**.\n- **Tone and power:** **SPASTIC**; **FLEXORS weaker than EXTENSORS**; **muscle spasms**.\n- **Reflexes:** **exaggerated**, **plantar extensor**.\n- **Sensory:** **spinothalamic tract AND posterior column** both affected.\n- **Sphincters, in order:** first **URGENCY**, then **AUTOMATIC BLADDER**, then **reflex sexual response**.\n- **Autonomic:** reflex stimulation leads to **excessive sweating**.\n\nSrc: L12 sl. What happens at the level of the lesion? · Onset A.Acute — 1.Spinal shock, 2. Recovery of the reflex function · Local & remote effects · B.Incidous [sic]",
        "qs": [
          "npqb-nr-93",
          "npqb-nr-105"
        ]
      },
      {
        "id": "hem-10",
        "w": "must",
        "h": "Focal against diffuse — and the two named infections",
        "body": "- **Four axes the deck sets out:** onset **ACUTE / CHRONIC** · effect **LOCAL + REMOTE** · lesion **FOCAL / DIFFUSE** · **COMPLETE / INCOMPLETE**.\n- *Defect: the slide carrying those four axes prints “Failed to load the image.” four times — the four graphics are broken in the source PDF itself. The axis names survive as text; nothing else of that slide does, and a render will not recover them.*\n\n|**A. FOCAL**|**B. DIFFUSE**|\n|---|---|\n|**TRAUMA** — fracture, road traffic accident|**MOTOR NEURON DISEASE**|\n|**TRANSVERSE MYELITIS** — infectious (viral, bacterial, **POTT DISEASE**, abscess), **demyelination**, **vasculitis**|**HEREDITARY ATAXIAS**|\n|**DEGENERATIVE SPINE — SPONDYLOSIS**|**chronic myelopathy**|\n|**NEOPLASMS**, primary or metastatic|**atherosclerosis of the spinal cord**|\n|**SYRINGOMYELIA**|**NUTRITIONAL — B12 deficiency, PELLAGRA**|\n|**VASCULAR — anterior spinal artery occlusion**|—|\n\n- **The third column, MULTIFOCAL:** **demyelination — MS, NMO** · **vasculitis** · **nutritional (alcoholic)**. The deck's *Where is the lesion?* slide also adds **kyphoscoliosis** and **superior sagittal sinus thrombosis** to focal, and **Friedreich ataxia**, **B12 deficiency**, **syphilis** and **hereditary paraparesis** to diffuse.\n\n### Transverse myelitis\n- **What it is:** **ACUTE or SUBACUTE** inflammation of the cord, from **DEMYELINATION**, or **inflammation after infection or RECENT VACCINATION**.\n- **Agents implicated:** **INFLUENZA · MEASLES · CMV · EBV · MYCOPLASMA**.\n- **Investigations:** **CSF** · **MRI** · **investigation of the cause**.\n- **⚠️ A normal spine MRI does not exclude it:** a complete spastic cord syndrome with a **sensory level**, developing over **days**, **two weeks after a respiratory infection**, is **post-infectious transverse myelitis** whatever the MRI shows *(the normal-MRI point is supplied)*.\n\n### Pott disease\n- **What it is:** **TB OF THE SPINE**, involving **two or more ADJACENT vertebral bodies**, commonly **lower thoracic and upper lumbar**; **the intervertebral disc is also destroyed**.\n- **In advanced disease:** **paravertebral COLD ABSCESS** and **PARAPLEGIA**.\n- **Investigations:** **CSF** · **MRI** · **PCR, ZIEHL–NEELSEN film**.\n\n### One history point\n- **⚠️ Back pain is a weak discriminator:** **urinary incontinence, faecal incontinence and a sudden onset are ALL compatible** with a spinal cause. Only the **ABSENCE of back pain** argues against one, and it argues weakly *(supplied — the deck names back pain only inside cauda equina syndrome)*.\n\nSrc: L12 sl. The causes of paraplegia may be [broken graphics] · Focal vs Diffuse (etiology) · TRANSVERSE MYELITIS · POTT'S DISEASE · B- Diffuse · Where is the lesion?",
        "qs": [
          "npqb-nr-108",
          "npqb-nr-112"
        ]
      },
      {
        "id": "hem-11",
        "w": "must",
        "h": "Complete against incomplete — and the five recognisable patterns",
        "body": "- **Complete lesion:** **loss of voluntary movement** in the parts innervated by the segment, and it is **IRREVERSIBLE** · **loss of sensation** · **sphincteric affection**.\n- **Incomplete lesion:** **some function survives below the injury**; **prognosis more favourable overall**; the patterns below are **recognisable but RARELY PURE**, and variations occur.\n\n|**Syndrome**|**Causes**|**Picture**|\n|---|---|---|\n|**CENTRAL CORD** — *typically OLDER patients*|**HYPEREXTENSION injury** · **SYRINGOMYELIA** · **intramedullary tumour**|**UPPER limbs weaker than lower** · **JACKET sensory loss**, varying below the level · sphincter dysfunction, usually **URINARY RETENTION**|\n|**ANTERIOR CORD**|**flexion / rotation trauma** · **ischaemia of the ANTERIOR SPINAL ARTERY**, aneurysm|**FLACCID paraplegia** · **DISSOCIATED loss** — **pain and temperature GONE**, **proprioception, position sense and deep pressure PRESERVED**|\n|**POSTERIOR CORD**|**hyperextension with vertebral fracture** · **B12 DEFICIENCY** · **FRIEDREICH ATAXIA**|**pain and burning paraesthesiae** in neck, upper arms and back · **posterior column affected FIRST** · **proprioception lost → SENSORY ATAXIA** · **power and superficial sensation usually GOOD**, pyramidal findings **minimal**|\n|**BROWN-SÉQUARD**|written in full in `hem-6`|⚠️ printed **“NOT A CAUSE OF PARAPLEGIA”** — a hemi-cord lesion paralyses one side|\n|**CAUDA EQUINA**|**bony compression** or **disc protrusion** in the **lumbar or sacral** region|**LOW BACK PAIN** · **SADDLE-shaped hypoaesthesia** · **bowel and bladder dysfunction** · lower limb **numbness and weakness**|\n\n- **⚠️ Anterior against posterior:** in one line — anterior cord loses **pain and temperature** and keeps **proprioception**; posterior cord does the exact reverse, and its ataxia is **SENSORY** (`hem-15`).\n\nSrc: L12 sl. Complete vs incomplete lesions · (A)Complete · (B) INCOMPLETE · Types of incomplete injuries · Central cord syndrome · Posterior cord syndrome · Anterior cord Syndrome · Cauda Equina Syndrome",
        "qs": [
          "npqb-nr-107",
          "npqb-nr-109"
        ]
      },
      {
        "id": "hem-12",
        "w": "must",
        "h": "Cerebral paraplegia — paraplegia from above the cord",
        "body": "- **⚠️ Why the brain can do it:** both leg areas lie in the **PARACENTRAL LOBULES**, one either side of the midline, so a **PARASAGITTAL** lesion takes **both legs at once** *(the anatomical reason is supplied; the deck gives the causes only)*.\n\n|**Group**|**What the deck prints**|\n|---|---|\n|**TRAUMATIC**|**depressed fracture of the vault of the skull** · **subdural haematoma**|\n|**VASCULAR**|**SUPERIOR SAGITTAL SINUS THROMBOSIS**|\n|**INFLAMMATORY**|**encephalitis · meningo-encephalitis**|\n|**NEOPLASTIC**|**PARASAGITTAL MENINGIOMA**|\n|**DEGENERATIVE**|**cerebral palsy · hydrocephalus**|\n\n- **⚠️ How to recognise it:** **bilateral pyramidal signs in the legs** with **loss of CORTICAL SENSATION** and **NO SENSORY LEVEL** — plus a **cerebral** symptom such as **headache** or **confusion**.\n- **Cortical sensation, defined:** **two-point discrimination · STEREOGNOSIS · tactile localisation · graphaesthesia**. The **primary** modalities — pain, temperature, light touch, proprioception — are **SPARED** *(the definition is supplied; the deck uses the term without ever defining it)*.\n- **The slow presentation:** a **year of worsening, now daily, headache** with **six months of paraplegia**, bilateral pyramidal signs and bilateral cortical sensory loss — a **PARASAGITTAL MENINGIOMA** until imaged.\n- **The fast presentation:** **five days postpartum**, a **coagulation disorder** and **DVT**, then **headache and confusion**, then paraplegia within hours — **SUPERIOR SAGITTAL SINUS THROMBOSIS** with **bilateral parasagittal venous infarction**.\n- **⚠️ Localise before investigating:** a cerebral cause is confirmed by **BRAIN imaging (CT/MRI)** — not by spinal MRI, not by EMG, not by lumbar puncture.\n- **⚠️ Why CT comes first in the acute case:** it is **fast** and it **excludes haemorrhage**, and **lumbar puncture is hazardous** where a mass with raised intracranial pressure is possible. *(Supplied — and note that `hem-13`'s slide names MRI as the investigation of choice, which is a chronic work-up statement, not an emergency one. The bank keys CT here; keyed as printed, the tension recorded.)*\n\n### How to diagnose — the deck's own flowchart\n- **Paraplegia splits first:** **PSYCHOGENIC** or **ORGANIC**.\n- **Organic splits:** **FOCAL** or **DIFFUSE**, and **each of those into ACUTE or CHRONIC**.\n- **Beside them:** **DUAL PATHOLOGY**.\n\nSrc: L12 sl. Cerebral paraplegia · How to diagnose? · INVESTIGATIONS (cited). The paracentral-lobule reason, the definition of cortical sensation and the CT-before-LP rule are supplied and tagged",
        "qs": [
          "npqb-nr-99",
          "npqb-nr-100",
          "npqb-nr-101",
          "npqb-nr-102",
          "npqb-nr-103",
          "npqb-nr-104"
        ]
      },
      {
        "id": "hem-13",
        "w": "must",
        "h": "Investigations, complications, treatment",
        "body": "### Imaging\n- **MRI:** the **INVESTIGATION OF CHOICE**.\n- **CT spine:** for **BONY lesions**.\n- **X-ray spine:** may show **collapse or erosion of vertebrae**, **herniated intervertebral disc**, **metastases**, or **dislocation of a vertebra**.\n\n### CSF analysis — for infection and demyelination\n\n|**CSF pattern**|**Points to**|\n|---|---|\n|**BOTH cells AND protein raised**|**INFLAMMATORY lesions**|\n|**MALIGNANT CELLS present**|**MALIGNANCY**|\n|**protein raised, up to 50 lymphocytes/cmm**|**MYELITIS**|\n|**MONOCLONAL IgG raised**|**MULTIPLE SCLEROSIS**|\n|**PROTEIN–CELL DISSOCIATION**|**GUILLAIN–BARRÉ**|\n\n### Investigation of the cause\n- **Blood picture:** **MEGALOBLASTIC ANAEMIA** in **subacute combined degeneration of the cord**.\n- **ESR and CRP:** **raised in inflammatory cases**.\n- **LMN work-up:** **NERVE CONDUCTION STUDY** for suspected **neuropathy or motor neuron disease**; **EMG** for suspected **myopathy or NMJ disease**.\n\n### Complications\n- **The deck's six:** **BEDSORES** · **bowel and bladder incontinence** · **DVT** · **PULMONARY EMBOLISM** · **psychiatric complications** · **PNEUMONIA**. Plus disease-related complications.\n\n### Treatment — four headings\n- **1. Prevent and treat complications:** **skin care** · **chest physiotherapy** · **anticoagulants if needed**.\n- **2. Treat the cause** or the primary disease.\n- **3. Symptomatic:** **analgesics and sedatives** for pain · **muscle relaxants** for spasticity · **vitamin and mineral supplementation**.\n- **4. Rehabilitation:** management of complications · **occupational therapy** · **gait retraining** · **community re-integration**.\n\nSrc: L12 sl. INVESTIGATIONS · Investigations (LMN) · COMPLICATIONS · Treatment",
        "qs": [
          "npqb-nr-101",
          "npqb-nr-102"
        ]
      },
      {
        "id": "hem-14",
        "w": "must",
        "h": "Ataxia — the six types, and how coordination is tested",
        "body": "- **The six types:** **1. CEREBELLAR** · **2. SENSORY (proprioceptive)** · **3. VESTIBULAR** · **4. MIXED** · **5. PSYCHOGENIC** · **6. FALSE**.\n- **⚠️ The symptom slide is empty:** a slide headed *Ataxia symptoms:* carries **no text at all** in the cache. What ataxia's symptoms are is therefore read off the comparison table in `hem-15`.\n\n### Coordination testing — upper limb\n- **Finger to finger:** touch the tips of **both index fingers**, **eyes open, then closed**.\n- **Finger to nose:** touch the **tip of the nose** with the index finger, **eyes open, then closed**.\n- **Finger to examiner's finger:** touch the doctor's fingertip — **NOT done with the eyes closed**.\n- **DYSDIADOCHOKINESIA:** difficulty with **RAPID ALTERNATING MOVEMENT** — ask the patient to **open and close the fist rapidly**.\n- **REBOUND phenomenon:** the patient **stretches the arms and tries to swing them**; or the examiner **extends a firmly flexed forearm** and releases it, **while protecting the patient's face**.\n- **⚠️ Rebound is a CEREBELLAR sign:** the **check reflex fails**, so the limb **overshoots**. It is **IPSILATERAL** to the lesion *(the ipsilaterality is supplied)*.\n\n### Coordination testing — lower limb\n- **Heel–knee–shin:** flex one limb, touch the **PATELLA** with the heel, then run it down the **SHIN of the tibia** of the other limb. *(The slide prints “chin of tibia” [sic].)*\n\n### Romberg test\n- **Method:** stand **BAREFOOT with the feet close together**; **eyes open first, then closed**.\n- **Positive:** **steady with the eyes OPEN**, but **sways or falls with the eyes CLOSED**.\n- **What it tests:** **DEEP SENSATION** — so it is **positive in SENSORY ataxia** and **negative in CEREBELLAR ataxia**.\n- **⚠️ MIXED ataxia:** **dysmetria and dysdiadochokinesia** (cerebellar) **together with a POSITIVE Romberg** (sensory). Both the cerebellum **and** deep sensation are involved.\n\nSrc: L12 sl. Types of ataxia · Testing Coordination · Romberg Test · Ataxia symptoms: — image-only, empty",
        "qs": [
          "npqb-nr-1",
          "npqb-nr-4"
        ]
      },
      {
        "id": "hem-15",
        "w": "must",
        "h": "The three-column ataxia table, and the gaits read off it",
        "body": "|**Feature**|**CEREBELLAR**|**SENSORY**|**VESTIBULAR**|\n|---|---|---|---|\n|**Speech**|**STACCATO**|**normal**|**normal**|\n|**Nystagmus**|**PRESENT**|**absent**|**PRESENT**|\n|**Muscle tone**|**HYPOTONIA**|**HYPOTONIA**|**NORMAL / average**|\n|**Weakness**|**absent**|**PRESENT**|**absent**|\n|**Ataxia**|present with eyes **OPEN AND CLOSED**|present with eyes **CLOSED ONLY**|**absent**|\n|**Gait**|**ATAXIC, WIDE-BASED**|**STAMPING / HIGH-STEPPAGE**|**normal, or vertigo**|\n|**Reflexes**|**average**|**DIMINISHED**|**normal**|\n|**Romberg**|**NEGATIVE**|**POSITIVE**|**NEGATIVE**|\n|**Auditory symptoms**|**absent**|**PRESENT**|**absent**|\n\n- **⚠️ Vestibular — the “all normal” column:** **tone normal, reflexes normal, no weakness, Romberg negative**. It is the only ataxia that changes none of them, which is exactly how the bank asks it.\n- **⚠️ Two rows worth pausing on:** **hypotonia is shared** by cerebellar and sensory ataxia — it does not discriminate. And **auditory symptoms are printed in the SENSORY column**, where vestibular disease would be the expected home. Recorded as printed.\n- **⚠️ A keyed answer runs against this table:** the bank keys **“ipsilateral limb ataxia and HYPERTONIA”** as the cerebellar hemisphere lesion; **the deck's own table says HYPOTONIA**. Keyed as printed; the discrepancy is recorded, never disputed.\n\n### The gaits\n\n|**Gait**|**Cause**|\n|---|---|\n|**Stiff extended leg swung forward in an ARC — CIRCUMDUCTION**|**HEMIPLEGIA — the SPASTIC gait**, after a stroke (`hem-1`)|\n|**Broad-based, HIGH-STEPPING, STAMPING**|**SENSORY ataxia** — in an alcoholic, from large-fibre peripheral neuropathy|\n|**Broad-based, unstable, VEERING to one side**|**CEREBELLAR ataxia** — unchanged by closing the eyes, and **IPSILATERAL** to the lesion|\n\n- **⚠️ The bank splits one gait in two:** its matching set offers **both “spastic gait” and “hemiplegia”** in the same option list and keys them for two different stems describing the same circumduction. Recorded, not corrected — the deck lists **circumduction gait** among the negative signs of hemiplegia.\n\nSrc: L12 sl. the cerebellar / sensory / vestibular comparison table · Clinical picture (circumduction gait)",
        "qs": [
          "npqb-nr-2",
          "npqb-nr-3",
          "npqb-nr-115",
          "npqb-nr-116"
        ]
      },
      {
        "id": "hem-16",
        "w": "should",
        "h": "What this chapter owes elsewhere, and what the deck does not carry",
        "body": "**⚠️ Cross-reference convention:** as in `str-12` — every outward reference names the **CHAPTER** id, never an invented section id.\n\n### Deferrals opened by this chapter — owed, not yet written\n\n|**Fact**|**Owed to**|\n|---|---|\n|**STROKE as a disease** — TOAST, the territories, thrombolysis, thrombectomy, prevention. `hem-2` keeps only *cerebrovascular accident* as cause 1|`nr-stroke` ✅ **written in this file**|\n|**MULTIPLE SCLEROSIS and NMO as diseases** — kept here as a cause of hemiplegia, as a cause of transient hemiplegia, as a multifocal cause of paraplegia, and as the monoclonal-IgG CSF row|`nr-ms` ☐|\n|**MIGRAINE, TODD PARALYSIS and EPILEPSY** — named in `hem-2` as tempo causes and taught nowhere here|`nr-headache` ☐ ⚠️ **no deck at all, 22 questions** · `nr-movement` ☐|\n|**BRAIN ABSCESS, ENCEPHALITIS, MENINGITIS**, and **POLIOMYELITIS** as an anterior-horn-cell disease|`nr-cns` ☐|\n|**PERIPHERAL NEUROPATHY, MYASTHENIA GRAVIS, MUSCULAR DYSTROPHY, MOTOR NEURON DISEASE and GUILLAIN–BARRÉ as diseases**, plus **nerve conduction studies and EMG** as techniques. Kept here only as LMN sites, as the spastic-paraplegia exclusion, and as CSF patterns|`nr-lmn` ☐|\n|**The UMN/LMN discrimination as a framework**, and **cranial nerve examination**. The facial half is written in `str-4`|`nr-lmn` ☐ · `nr-cranial` ☐|\n|**LOW BACK PAIN, DISC PROLAPSE and SPONDYLOSIS as clinical problems.** `hem-8` and `hem-11` keep only the neurological level and the cauda equina syndrome|`nr-backpain` ☐|\n|**LOCALISATION AS A METHOD** — the deck's *The pyramidal system*, *Localisation of the pyramidal tract lesions* and *Cerebral lesion* slides. ⚠️ **All three are image-only**, so nothing was received to defer|`nr-intro` ☐ ⚠️ **render needed**|\n\n### ⚠️ What the bank asks that L12 does not print — filled and tagged in place\n- **The crossed brainstem rule** — `hem-5`. **Thoracic level from normal arms** — `hem-6`. **Abdominal reflexes and glove-and-stocking at T6** — `hem-8`.\n- **Back pain as a weak discriminator** — `hem-10`. **Cortical sensation defined, the paracentral lobule, CT before LP** — `hem-12`. **Ipsilaterality of cerebellar signs** — `hem-14`.\n\n### ⚠️ Deck quality — L12 is NOT text-complete\n- **Nine slides are bare titles**, including **both *Brainstem lesion* slides** and ***Ataxia symptoms:***. **Three questions turn on the brainstem pair.**\n- **⚠️ The italic marker is unrecoverable:** slide 2 states that slides *in italic* are not for undergraduates. **A text cache carries no italics**, so everything here is written at **FULL WEIGHT**. Only a render can say what was meant to be skipped.\n- **One slide has broken graphics** in the source PDF (`hem-10`). The full write-up — including why the deck-level ratio check that caught `L17` cannot see a nine-slide hole — is in this file's header.\n\n### Dropped, and recorded\n- **Nothing of substance:** every slide carrying text is written up.\n- **Not repeated:** the **MCA / ACA / PCA table** is written once, in `str-3`, and its ~55 words are **counted to `nr-stroke`, not here**.\n- **Not repeated:** stroke as a disease — `hem-2` names it as cause 1 and points at `nr-stroke`.\n\nSrc: L12 in full, verified on disk 2026-08-18; app\\data\\modules.js for every chapter id above",
        "qs": []
      }
    ]
  }
};
