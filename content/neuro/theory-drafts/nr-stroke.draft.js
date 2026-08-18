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
  "nr-stroke": {
    "intro": "Two lectures in one file: 85 % ischaemic, 15 % haemorrhagic, and the deck insists they cannot be told apart clinically — which is the whole reason the first CT exists. The spine is TOAST, the territory table, and three clocks: 4.5 hours, 8 hours, 24 hours.",
    "sections": [
      {
        "id": "str-1",
        "w": "must",
        "h": "Stroke and TIA — two definitions, and why the clock one broke",
        "body": "**Stroke:** an **ACUTE ONSET FOCAL neurological deficit**. Both definitions start there and differ only on what settles the argument.\n\n|**Decides by**|**WHO (1970) — the CLOCK**|**AHA/ASA (2009) — NEUROIMAGING**|\n|---|---|---|\n|**Stroke**|deficit lasting **>24 h**|**EVIDENCE OF BRAIN INFARCTION** on imaging, whatever the duration|\n|**TIA**|deficit clearing **<24 h**|**NO evidence of brain infarction** on imaging|\n\n- **Why the clock failed:** **30–50 %** of patients meeting the old TIA definition show **infarction on MRI** (Easton et al., Stroke 2009).\n- **The deck's own case:** 82-year-old woman, **transient aphasia with right sensorimotor hand weakness lasting ~75 min**, normal examination, **40 % left internal carotid stenosis** — and **MRI showed infarction**. By AHA/ASA it is a **STROKE**, not a TIA.\n- **⚠️ A clearing deficit is not a bleed:** haemorrhage does not resolve in minutes, so a deficit that fully clears is **ischaemic in mechanism** — thrombotic or embolic *(the inference is the deck's case, stated explicitly here; not taken from the course material)*.\n\n### Background — the numbers the deck prints\n- **The split:** **ischaemic 85 %**, **haemorrhagic 15 %** of all strokes.\n- **Burden:** **commonest cause of adult disability** — the deck says stroke is *sometimes worse than death* — and the **fourth commonest cause of death** worldwide.\n- **Sex:** **incidence higher in MEN**; **PREVALENCE higher in WOMEN**, because women survive longer.\n- **⚠️ It is preventable:** the deck's claim — **8 of every 9 strokes**.\n\nSrc: L10 sl. Background · Definition of ischemic stroke and TIA · the 82-year-old case · Stroke is a preventable disease",
        "qs": [
          "npqb-nr-35"
        ]
      },
      {
        "id": "str-2",
        "w": "must",
        "h": "Risk factors, and TOAST — the five aetiological subtypes",
        "body": "### Risk factors\n- **Non-modifiable:** **old age** · **male sex** · **genetics** · **race — commoner among blacks**.\n- **Modifiable:** **hypertension** · **diabetes mellitus** · **dyslipidaemia** · **smoking** · sedentary life · bad dietary habits with **high salt intake** · **obesity** · **stress**.\n- **Stress counts:** cardiovascular events rose during the **2006 FIFA World Cup** matches with German participation (*Wilpert-Lampen* [sic], NEJM 2008) — the deck's evidence that the last item on the list is real.\n\n### TOAST\n\n|**Subtype**|**Share**|**What defines it**|\n|---|---|---|\n|**CARDIOEMBOLIC**|**~30 %**|a major cardiac source must be **DETECTED** — **atrial fibrillation**, mechanical prosthetic valve, rheumatic valvular vegetations, **left atrial thrombus**, **left ventricular thrombus**|\n|**LARGE VESSEL (macroangiopathy)**|~10 %|**≥50 % stenosis or occlusion** of an extra- or intracranial major vessel supplying the infarcted territory, on **duplex, CTA or MRA**|\n|**SMALL VESSEL (microangiopathy) / LACUNAR**|~25 %|**CT/MRI shows a small lacunar infarction**|\n|**OTHER DETERMINED**|2–3 %|**vasculitis · dissection · hypercoagulable state · haematological disorder**|\n|**UNDETERMINED**|25 %|**two or more causes**, no cause identified, or **incomplete evaluation**|\n\n- **⚠️ Cardioembolic is the largest slice** and **atrial fibrillation heads its list** — the commonest single embolic source, and finding it turns treatment from antiplatelet to **anticoagulant**.\n- **⚠️ Sinus rhythm argues against embolism:** TOAST requires the source to be **found**. A diabetic hypertensive in **sinus rhythm** with no demonstrated cardiac source is **atherothrombotic** — large or small vessel.\n- **⚠️ Where a lacune actually is:** the deck gives the size and not the vessel. Lacunes arise in the **deep PERFORATORS** — the **LENTICULOSTRIATE branches of the MCA**, the thalamoperforators and the pontine perforators *(not taken from the course material; L10's own “Anatomy” slide is a picture carrying no text)*.\n- **Paradoxical embolism:** a **venous clot crossing a PATENT FORAMEN OVALE** — this is what the deck's **BUBBLE TEST** in stroke-in-the-young looks for *(the shunt is not named on any slide)*.\n\nSrc: L10 sl. Risk factors of ischemic stroke · Cardiovascular Events during World Cup Soccer · Anatomy (image-only) · Etiology of ischemic stroke (TOAST classification) · Investigatons (stroke in young)",
        "qs": [
          "npqb-nr-36",
          "npqb-nr-37",
          "npqb-nr-97"
        ]
      },
      {
        "id": "str-3",
        "w": "must",
        "h": "The territories — cortical signs, and the two circulations",
        "body": "- **The governing rule:** the picture follows the **affected TERRITORY** and the **EXTENT** of the lesion.\n- **Cortical signs = LVO:** cortical signs usually indicate **LARGE VESSEL OCCLUSION**, and LVO means the patient needs **MECHANICAL THROMBECTOMY**.\n- **The three cortical signs:** **APHASIA** · **head and eye deviation IPSILATERAL to the stroke side** · **HEMINEGLECT to the hemiplegic side**.\n- **⚠️ Why they matter:** without CT angiography, the cortical signs are how LVO is recognised at the bedside — the deck says so in terms.\n\n### Anterior against posterior circulation\n\n|**ANTERIOR — CCA, ICA, MCA, ACA**|**POSTERIOR — vertebral, basilar, PCA**|\n|---|---|\n|**cortical signs** (aphasia, hemineglect, head-and-eye deviation)|**aphasia** · **dysarthria** · **dysphagia**|\n|**UMN facial palsy** · dysarthria · dysphagia|**DISTURBED CONSCIOUSNESS up to COMA**|\n|weakness — hemiparesis, **BRACHIOFACIAL**, hand, lower limb|**UMN facial palsy** · weakness — hemiparesis, upper or lower limb|\n|hyposthesia — hemisensory **including** or **excluding the face**, or one limb|hyposthesia, the same three patterns|\n|**AMAUROSIS FUGAX** — transient **monocular** visual loss, **ophthalmic artery**|**HEMIANOPIA or QUADRANTANOPIA** · **ATAXIA** · **DIPLOPIA**|\n|—|**VERTIGO**, with or without focal signs|\n\n### The three named arteries\n\n|**Artery**|**Picture**|\n|---|---|\n|**MCA**|contralateral hemiparesis **predominantly ARM, HAND and FACE**, with **cortical dysfunction** — right neglect, left aphasia|\n|**ACA**|contralateral hemiparesis **predominantly LEG**, with **bowel and bladder involvement**|\n|**PCA**|**contralateral HEMIANOPIA with MEMORY DEFICIT**|\n\n- **Side and dominance:** right face-and-arm weakness is a **LEFT MCA** infarct. **Aphasia is the DOMINANT hemisphere (usually left); NEGLECT the NON-DOMINANT (usually right)** *(the dominance rule is supplied — the decks give the signs, not which hemisphere owns them)*.\n- **⚠️ Ataxia with contralateral hemiplegia:** the cerebellum and its peduncles are **vertebrobasilar** territory, so that pair localises to a **brainstem or cerebellar branch** and never to the MCA or ACA.\n- **⚠️ Vertigo alone can be a stroke:** the deck's own warning — acute isolated vertigo is a **neurological emergency**. Give betahistine and send the patient home and *“on the next day the patient will die with basilar artery occlusion”*.\n- **⚠️ Coma is basilar until excluded:** any acute coma or disturbed consciousness — **do CT ANGIOGRAPHY without any delay**.\n\nSrc: L10 sl. Clinical Picture (×2) and the anterior/posterior circulation table; L12 sl. Vascular syndrome distribution — written once here, not repeated in `nr-hemi`",
        "qs": [
          "npqb-nr-38",
          "npqb-nr-40",
          "npqb-nr-47",
          "npqb-nr-51"
        ]
      },
      {
        "id": "str-4",
        "w": "must",
        "h": "The face — UMN against LMN, and the crossed brainstem stroke",
        "body": "**The gap:** the deck names **“UMN facial palsy”** in both circulation tables and never says what it looks like. *(The whole table below is supplied and tagged; the UMN/LMN framework itself is `nr-lmn`'s — see `str-12`.)*\n\n|**Feature**|**UMN (supranuclear) facial palsy**|**LMN (nuclear or infranuclear) palsy**|\n|---|---|---|\n|**Forehead**|**SPARED** — the patient **CAN raise the eyebrows**|**PARALYSED** — cannot raise the brow or close the eye|\n|**Why**|the upper face has **BILATERAL** cortical supply|one nucleus or nerve serves the **whole half-face**|\n|**Mouth**|angle **deviates TOWARD the HEALTHY side**|angle deviates toward the healthy side|\n|**Lesion side**|**OPPOSITE** the weak face — with the hemiplegia|**SAME** side as the weak face|\n|**Where**|cortex, internal capsule, upper brainstem|**FACIAL NUCLEUS in the PONS**, or the nerve itself|\n\n*(Not taken from the course material, except the term “UMN facial palsy”, which is L10's and L12's.)*\n\n- **Read on a left MCA infarct:** right face and arm weak, **eyebrows still rise**, mouth pulled to the **LEFT** — toward the healthy side.\n- **⚠️ The crossed pattern:** an **LMN** facial palsy taking the **WHOLE half-face** on the side **OPPOSITE** the hemiplegia is a **BRAINSTEM** stroke — the **pons, on the side of the face**.\n- **Why it crosses:** the facial nucleus is at pontine level and the corticospinal tract has **not yet decussated**, so the **cranial nerve is ipsilateral** and the **limbs contralateral** *(supplied)*.\n- **⚠️ L12's brainstem slides carry no text** — two consecutive slides titled *Brainstem lesion* and *Brainstem lesions* are pictures only, so the crossed-syndrome teaching is absent from **both** caches. Full localisation, with the medullary instance, is in `hem-5`.\n\nSrc: L10 sl. the anterior/posterior circulation table (the term only); L12 sl. Clinical picture · Brainstem lesion / Brainstem lesions — image-only. The UMN/LMN discrimination is supplied and tagged",
        "qs": [
          "npqb-nr-39",
          "npqb-nr-53"
        ]
      },
      {
        "id": "str-5",
        "w": "must",
        "h": "Recognising it, and the first move",
        "body": "- **FAST:** the deck's screening mnemonic — **Face · Arm · Speech · Time** *(printed as a picture with no text; the expansion is supplied)*.\n- **PRONATOR DRIFT:** arms held out, **palms up, eyes closed**; a pyramidal arm **pronates and drifts down** *(also a picture slide)*.\n- **NIHSS:** the deck scores its own cases with it — **NIHSS 3** in the right brachiofacial case. Named on the slides, explained on none.\n- **⚠️ First move is ABC, not the scanner:** in acute stroke the **airway comes first — assess the need for INTUBATION** before imaging, before vitals and before admission *(supplied; the deck's treatment slide begins at reperfusion)*.\n- **Then, in order:** vital signs → **NON-CONTRAST CT** → the thrombolysis / thrombectomy decision → **monitoring in the STROKE UNIT**.\n- **⚠️ Never aspirin before the CT:** the deck calls it a **fatal mistake** — if the stroke were haemorrhagic, **fatal intracerebral haemorrhage might occur**. *“Never do harm!”*\n\nSrc: L10 sl. FAST · Pronator drift (both image-only) · Clinical case (NIHSS 3) · Acute ischemic Stroke Treatment",
        "qs": [
          "npqb-nr-54"
        ]
      },
      {
        "id": "str-6",
        "w": "must",
        "h": "Investigations — four blocks, plus the young-stroke panels",
        "body": "### A. Immediate neuroimaging\n- **CT brain:** to **EXCLUDE HAEMORRHAGE**, and *“sometimes”* to demonstrate the infarct.\n- **⚠️ Why non-contrast:** acute blood is **HYPERDENSE on plain CT** and needs no contrast; contrast adds nothing and costs time *(supplied — the deck writes “CT brain” and specifies contrast only for angiography)*.\n- **CT angiography:** if the patient presents **within the first 8 hours**.\n- **MRI brain:** for **doubtful cases**, **difficult cases**, and **stroke in the young**.\n- **⚠️ What each can SEE:** early ischaemia is **invisible on CT** in the first hours but **visible on MRI** — **diffusion-weighted imaging** turns positive within minutes *(the DWI mechanism is supplied; the deck states only that CT “sometimes” demonstrates and that MRI is for doubtful cases)*.\n\n### B. Vascular imaging\n- **Extra- and transcranial DUPLEX:** **essential to assess plaque risk**, but **needs experience**.\n- **CTA and/or MRA:** to look for **large vessel occlusion or stenosis**. **Presenting within 8 h → do CTA.**\n- **The deck's own sign:** the **SEAGULL PHENOMENON** in the **right V4** denotes **severe stenosis**.\n\n### C. Laboratory\n- **The panel:** **CBC · urea · creatinine · SGOT · SGPT · FBS · HbA1c · lipid profile** — cholesterol, triglyceride, **LDL**, **HDL**.\n\n### D. Cardiac\n- **The panel:** **ECG · echocardiography** · **24-hour monitoring with an atrial-detection alarm**, or **24-h Holter ECG**, to look for **ATRIAL FIBRILLATION**.\n\n### Stroke in the young (<50 years) — three extra panels\n- **Hypercoagulable profile:** **antiphospholipid antibodies** — lupus anticoagulant, **anticardiolipin IgG/IgM**, **anti-β2 glycoprotein** · **protein C** activity · **protein S** activity · **antithrombin III** · **FACTOR V LEIDEN** mutation · **PROTHROMBIN GENE** mutation.\n- **Vasculitic profile:** **ANA · ANCA · anti-dsDNA · rheumatoid factor**.\n- **BUBBLE TEST:** in **selected cases** — it demonstrates a **right-to-left shunt**, and so **paradoxical embolism** through a patent foramen ovale (`str-2`).\n\nSrc: L10 sl. Investigations A–D · Seagull phenomenon in the right V4 · Investigatons (stroke in young) · Bubble test",
        "qs": [
          "npqb-nr-41",
          "npqb-nr-42",
          "npqb-nr-50",
          "npqb-nr-55"
        ]
      },
      {
        "id": "str-7",
        "w": "must",
        "h": "Acute ischaemic treatment — three clocks",
        "body": "- **The aim:** **REPERFUSION as soon as possible** — *“Time is brain!”*\n- **⚠️ Before anything else:** **never prescribe aspirin before the CT brain** (`str-5`).\n\n|**Treatment**|**Window**|**Condition**|\n|---|---|---|\n|**IV r-tPA** (recombinant tissue plasminogen activator)|**within 4.5 h of onset**|after **exclusion of contraindications**|\n|**MECHANICAL THROMBECTOMY**|**within 8 h of onset**|**LARGE VESSEL OCCLUSION** shown on **CTA or MRA**|\n|**Thrombectomy, extended**|**8–24 h**|only with a **LARGE PENUMBRA** demonstrated on **CT PERFUSION**|\n|**BRIDGING thrombolysis**|**within 4.5 h, with LVO**|**tPA, then STRAIGHT to the angiography room** — do **NOT** await the tPA result|\n|**Unwitnessed onset**|—|**advanced neuroimaging**; if **salvageable tissue**, tPA and/or thrombectomy may be considered|\n\n- **Both are time-dependent:** tPA and thrombectomy are done **as soon as possible**, not sequenced at leisure.\n- **⚠️ When tPA is contraindicated:** **thrombectomy is still available** for LVO inside its own window. **Recent surgery** and a **recent stroke** are the classic bars *(the contraindication list itself is printed on no slide)*.\n- **⚠️ Do NOT lower the blood pressure first:** in acute **ISCHAEMIC** stroke a high pressure maintains **penumbral perfusion**. The **<140 mmHg systolic target belongs to HAEMORRHAGE** (`str-9`) *(the contrast is supplied)*.\n- **Afterwards:** **monitoring in the STROKE UNIT**.\n\nSrc: L10 sl. Acute ischemic Stroke Treatment · Mechanical thrombectomy for MCA occlusion · the basilar occlusion case",
        "qs": [
          "npqb-nr-44",
          "npqb-nr-45",
          "npqb-nr-48"
        ]
      },
      {
        "id": "str-8",
        "w": "must",
        "h": "Secondary prevention — and the deck's one flat prohibition",
        "body": "- **What it rests on:** the deck's claim that **8 of every 9 strokes are preventable**.\n- **Lifestyle, and it is not optional:** tight control of **blood pressure**, **diabetes** and **dyslipidaemia** · **smoking cessation** · **active life** · **MEDITERRANEAN diet with reduced salt** · **weight loss** · **stress reduction**. *“Do not underestimate life style modification.”*\n- **Standard drug pair:** **single antiplatelet — ASPIRIN or CLOPIDOGREL** — plus **ATORVASTATIN**.\n- **⚠️ The LDL targets:** **LDL-cholesterol <70 mg/dl**, and **<55 mg/dl** where there is **ischaemic heart disease**.\n\n### Double antiplatelet — two indications, and two durations\n\n|**Indication**|**Duration**|\n|---|---|\n|**High-risk TIA or MINOR STROKE**|**21 days** — day 0 is the day of stroke onset|\n|**SYMPTOMATIC INTRACRANIAL STENOSIS**|**3 months**|\n\n- **Anticoagulation:** for **high-risk CARDIOEMBOLIC stroke** — **atrial fibrillation**.\n- **Carotid intervention:** for **SYMPTOMATIC common or internal carotid stenosis**, i.e. stenosis **IPSILATERAL to the stroke** — **carotid stenting** or **carotid ENDARTERECTOMY**.\n- **⚠️ The prohibition:** there is **NO role for neurotonics** — cerebrolysin, somazina, oxybral — **in any neurological disease**. The deck states it without qualification.\n\nSrc: L10 sl. Stroke is a preventable disease · Secondary Prevention · Clinical case (carotid stenting)",
        "qs": []
      },
      {
        "id": "str-9",
        "w": "must",
        "h": "Intracerebral haemorrhage — age decides the cause",
        "body": "### Aetiology\n- **Under 40:** usually an **ARTERIOVENOUS MALFORMATION**.\n- **Over 40:** **HYPERTENSION** — the commonest cause.\n- **⚠️ The four hypertensive sites:** **THALAMUS · BASAL GANGLIA · PONS · CEREBELLUM**.\n- **Other causes:** **anticoagulant therapy** · **brain tumour** · **venous sinus thrombosis** · **dural arteriovenous fistula** · **coagulopathy** · **trauma** · **CEREBRAL AMYLOID ANGIOPATHY**.\n\n### Clinical picture\n- **The same deficits as ischaemia:** acute onset focal signs — **aphasia, dysarthria, hemiparesis**.\n- **Plus raised intracranial pressure:** with **VOMITING**.\n- **⚠️ The line that justifies the CT:** it is **NOT possible to differentiate ischaemic from haemorrhagic stroke on the clinical picture**. That is the deck's own sentence and it is why imaging precedes every drug.\n- **⚠️ The cerebellar bleed:** sudden **OCCIPITAL headache with nausea and vomiting** in an untreated hypertensive, plus **IPSILATERAL limb ataxia**. Cerebellar signs are **ipsilateral** because its pathways cross twice *(the ipsilaterality is supplied; the deck gives the site and the sign separately)*.\n\n### Investigations\n- **First:** **CT and/or MRI brain**.\n- **CTA/MRA, or diagnostic cerebral angiography:** where the location is **ATYPICAL for hypertensive haemorrhage**, or the patient is **under 40**.\n\n### Treatment\n- **⚠️ Lower the pressure immediately:** aim **SYSTOLIC <140 mmHg** — it **significantly reduces further bleeding**. **Not** to normal, and **not** below 120/80.\n- **Supportive measures.**\n- **Reverse anticoagulation:** **warfarin → PROTHROMBIN COMPLEX (PPSB) + intravenous VITAMIN K**; **heparin → PROTAMINE SULPHATE**.\n- **Selected cases:** **surgical evacuation** or **craniectomy**.\n- **⚠️ tPA is absolutely contraindicated:** thrombolysing a bleed makes it worse, at any time from onset.\n\nSrc: L10 sl. Inracerebral Hemorrhage [sic] — Etiology · Clinical Picture · Investigations · Treatment",
        "qs": [
          "npqb-nr-43",
          "npqb-nr-44"
        ]
      },
      {
        "id": "str-10",
        "w": "must",
        "h": "Subarachnoid haemorrhage — the thunderclap, and three complications with clocks",
        "body": "### Aetiology\n- **85 %:** **RUPTURED ANEURYSM**.\n- **A few cases:** **traumatic** · **arteriovenous malformation** · **dural arteriovenous fistula**.\n\n### Clinical picture\n- **⚠️ Many die before hospital:** a **significant proportion** die immediately, before reaching care.\n- **THUNDERCLAP HEADACHE, two criteria:** **very severe** — *“the worst headache of my life”* — and **THUNDERCLAP, meaning SUDDEN in onset**.\n- **⚠️ The contrast with migraine:** migraine **begins mild** and climbs to moderate or severe **over 30–60 minutes**. A thunderclap is **maximal at once**.\n- **Then, by site and severity:** acute focal deficits — **aphasia, dysarthria, hemiparesis** — or **COMA**.\n- **⚠️ Meningeal irritation is SAH's alone:** blood mixes with **CSF**, giving **neck stiffness, photophobia and a positive Kernig sign**. No other intracranial bleed does this *(the signs are supplied; the deck states only the headache)*.\n\n### Investigations\n- **First:** **CT and/or MRI brain**.\n- **CTA/MRA and DSA:** vascular imaging including **digital subtraction angiography**, **to demonstrate the ANEURYSM**.\n- **⚠️ CT positive → CTA at once:** the aneurysm must be found, because **rebleeding can be fatal**.\n- **⚠️ CT negative but suspicion high:** do a **LUMBAR PUNCTURE**, looking for **XANTHOCHROMIA**. **A normal CT does not exclude SAH** *(supplied — the deck prints no LP anywhere)*.\n- **After ANY intracranial haemorrhage:** **MRI** for an underlying **tumour or malformation**, and **CT ANGIOGRAPHY** for an **aneurysm**. **Carotid doppler belongs to ISCHAEMIC stroke** and adds nothing here.\n\n### Complications — three, and their timing\n\n|**Complication**|**Timing**|**Recognition and action**|\n|---|---|---|\n|**REBLEEDING**|any time|**can be FATAL** — so **urgent treatment of the aneurysm** is recommended|\n|**VASOSPASM**|**peak days 4–14**|new **focal deficits**; detected on **TRANSCRANIAL DUPLEX**; prevented by **NIMODIPINE 60 mg every 4 h for up to 21–28 days**|\n|**HYDROCEPHALUS**|—|**falling level of consciousness** → **urgent EXTERNAL VENTRICULAR DRAINAGE**|\n\n### Treatment\n- **Supportive:** analgesics — the deck's example is **paracetamol 1000 mg i.v.** — and **good hydration**.\n- **NIMODIPINE 60 mg every 4 h:** started **immediately** as prophylaxis against vasoconstriction; **monitor the blood pressure**.\n- **⚠️ COILING as soon as possible:** and the deck states flatly that **surgical CLIPPING is OBSOLETE**.\n\nSrc: L10 sl. Subarachnoid Hemorrhage — Etiology · Clinical Picture · Investigations · Complications · Treatment · TCD showing vasospasm of the MCA",
        "qs": [
          "npqb-nr-57",
          "npqb-nr-58",
          "npqb-nr-59",
          "npqb-nr-60"
        ]
      },
      {
        "id": "str-11",
        "w": "must",
        "h": "The four intracranial haemorrhages — and the two the deck never mentions",
        "body": "**⚠️ The hole:** L10 teaches **INTRACEREBRAL** and **SUBARACHNOID** haemorrhage and nothing else. **Extradural and subdural haemorrhage appear on no slide** — no vessel, no CT shape, no lucid interval — and the bank asks about both.\n\n|**Type**|**EXTRADURAL**|**SUBDURAL**|**SUBARACHNOID**|**INTRACEREBRAL**|\n|---|---|---|---|---|\n|**Vessel**|**MIDDLE MENINGEAL ARTERY**|**BRIDGING VEINS**|**berry ANEURYSM**|deep **perforators**|\n|**Cause**|**ALMOST EXCLUSIVELY TRAUMA**, usually with a skull fracture|trauma, often **trivial** — elderly, alcoholic, anticoagulated|**85 % ruptured aneurysm**|**hypertension >40 y**, **AVM <40 y**|\n|**CT shape**|**BICONVEX LENS**, does **not cross sutures**|**CRESCENT**, **crosses sutures**|blood in the **sulci and cisterns**|blood **within the brain**|\n|**Tempo**|**LUCID INTERVAL**, then rapid deterioration|**acute, subacute or CHRONIC** — over weeks|**INSTANTANEOUS** thunderclap|**minutes to hours**, with vomiting|\n|**Meningeal irritation**|**no**|**no**|**YES**|**no**|\n\n*(The extradural and subdural columns, the CT shapes, the lucid interval and the meningeal-irritation row are not taken from the course material. The SAH and intracerebral columns are L10's — `str-9`, `str-10`.)*\n\n- **⚠️ Trauma is one discriminator:** **EXTRADURAL** is the haemorrhage that is **almost exclusively traumatic**. SAH is usually **spontaneous** (aneurysm); intracerebral is usually **hypertensive**.\n- **⚠️ Meningeal irritation is the other:** only **SAH** puts blood into the **CSF**, so only SAH gives **neck stiffness and photophobia**.\n- **First study for all four:** **NON-CONTRAST CT** — acute blood is hyperdense, and contrast is neither needed nor waited for.\n\n*Head injury as a subject, the Glasgow Coma Scale and the surgical management of extradural and subdural collections belong to `nr-delirium` (“Delirium and Coma”) — filed in `str-12`.*\n\nSrc: L10 sl. Inracerebral Hemorrhage and Subarachnoid Hemorrhage (two columns only). The extradural and subdural columns are supplied and tagged",
        "qs": [
          "npqb-nr-56",
          "npqb-nr-57"
        ]
      },
      {
        "id": "str-12",
        "w": "should",
        "h": "What this chapter owes elsewhere, what the deck does not carry, and what was dropped",
        "body": "**⚠️ Cross-reference convention:** `app\\data\\theory.neuro.js` does not exist yet, so no section id outside this file can be pointed at. Every outward reference names the **CHAPTER** id, for conversion as the module fills.\n\n### Deferrals opened by this chapter — owed, not yet written\n\n|**Fact**|**Owed to**|\n|---|---|\n|**The UMN/LMN FRAMEWORK**, and LMN disease as a subject (`str-4`). ⚠️ The **facial** half is written here anyway — `npqb-nr-39` and `npqb-nr-53` turn on it|`nr-lmn` ☐|\n|**HEAD INJURY, the GLASGOW COMA SCALE, and the surgery of extradural and subdural collections** (`str-11`). ⚠️ `Glasgow` and `GCS` return **ZERO across all 25 neuro decks**, so the receiving chapter has no lecture source|`nr-delirium` ☐|\n|**CEREBRAL ARTERIAL ANATOMY** — circle of Willis, the perforator groups, the watershed zones. ⚠️ L10's *Anatomy* slide is a **picture with no text**; `str-2` supplies only the lenticulostriate line|`nr-intro` ☐|\n|**APHASIA as a subject** — the types, their localisation, how to test it. Kept here only as the cortical sign that marks large vessel occlusion|`nr-intro` ☐|\n|**ISOLATED VERTIGO as a presentation** — the vestibular differential and the central-vs-peripheral bedside separation. `str-3` keeps only the deck's warning|`nr-cranial` ☐|\n|**VASCULITIS, DISSECTION and the HYPERCOAGULABLE STATES as diseases** — `str-2` keeps the TOAST row and `str-6` the panels. ⚠️ No deck in the module covers them|`nr-intro` ☐|\n\n### ⚠️ Six things the bank asks that L10 does not print — filled and tagged in place\n- **Lenticulostriate origin of lacunes** — `str-2`. **UMN vs LMN facial palsy** — `str-4`. **ABC before imaging** — `str-5`.\n- **Early DWI positivity** — `str-6`. **LP and xanthochromia** — `str-10`. **Extradural and subdural haemorrhage entirely** — `str-11`.\n\n### Dropped, and recorded\n- **History of the specialty:** Weshptah's tomb, Erasistratus and Herophilus, Ibn Sina's *Canon* — §14.2's first droppable class, **~140 words**.\n- **The World Cup match list:** the eight-match legend. **The finding itself is kept**, in `str-2`.\n- **Case narratives as narratives:** used for their teaching points, never retold. **The 82-year-old TIA case is kept whole** in `str-1`.\n- **L10's deck quality:** its four image-only slides and its typo list are recorded in this file's header, not repeated here.\n\nSrc: L10 in full; content\\neuro\\theory-plan.md §3 (the Glasgow/GCS grep, 2026-08-18); app\\data\\modules.js for every chapter id above",
        "qs": []
      }
    ]
  }
};
