/* op-systemic — "Systemic Diseases", Ophthalmology. Written 2026-08-17 under
   START-HERE.md §14 (§14.1 budget, §14.2 coverage floor, §14.3 style,
   §14.3a layout, §14.5 the deferral register) and
   content\ophtho\theory-plan.md. Shape copied from
   content\ophtho\theory-drafts\op-trauma.draft.js.

   DECK LABELS USED IN THE Src LINES:
     L23   = L23) Ocular manifestations of systemic diseases.txt
             — "Ocular manifestations of systemic diseases", Faten Hussein.
             THIS CHAPTER'S ONLY COUNTED DECK.
     L10   = L10) orbit.txt                        — cited only
     L12   = L12) Glaucoma 2 Cong, PACG, 2ry.txt   — cited only
     L15,16 = L15,16) Cornea.txt                   — cited only
     L19.2 = L19.2) Retinal Vascular Disorders.txt — cited only
     L37   = L37) Red Eye.txt                      — cited only

   ✅ NO RENDER WAS DONE AND NONE WAS AUTHORISED. L23's text layer is
   sufficient — 1,834 words over 43 pages (45 w/pp), the fourth-densest deck
   in the module by the theory-plan's own table. The cache was used directly.

   ⚠️ OBSERVATION FOR THE HUB, NOT A CLAIM ABOUT PROVENANCE. L23 prints
   "(Fig 9-8)" on line 163 and "(Fig 9-14)" on line 368 — sequential FIGURE
   9-n references, in continuous book prose, with an OBJECTIVES block opening
   the file. `theory-plan.md` establishes that `L37) Red Eye` is CHAPTER 4 of
   an unnamed AAO-family primer with twenty FIGURE 4-n plates. The numbering
   pattern says L23 is very probably CHAPTER 9 of the SAME book. THE BOOK IS
   STILL NOT NAMED ANYWHERE IN EITHER FILE, so nothing here is cited as a book
   chapter — every Src line says L23, which is what can be verified. Flagged
   because `op-red` faces the identical question and the two should be settled
   together, by asking rather than guessing.

   ============================================================================
   BUDGET — §14.1, budget = max(summed lecture words, 25 x linked questions),
   floor 600, cap 3,000. BOTH TERMS MEASURED FROM DISK BY LINE RANGE.

     TERM 1 — L23, BY LINE RANGE (§14.1(a)). File total 1,834 w.
       lines   1–  2     8 w  — the transcriber's SOURCE path. NOT the
                                lecture. NOT counted.
       lines   3–  6     8 w  — title slide and author. NOT counted.
       lines   7– 20    84 w  — the two OBJECTIVES slides. ⚠️ NOT COUNTED.
                                Lines 8–13 are a contents list of the very
                                diseases the body already claims, and 15–20
                                are three generic learner objectives. §14.1's
                                ILO-index precedent from `ent-swallow`:
                                counting a contents list bills the same
                                content twice inside one file.
       lines  21–106   312 w  — DIABETES MELLITUS: the five systemic
                                determinants, the DR stages, NPDR and severe
                                NPDR signs, PDR, treatment indications,
                                diffuse maculopathy. COUNTED.
       lines 107–210   448 w  — HYPERTENSION: arteriolar sclerosis, the A/V
                                crossing, elevated BP, malignant
                                hypertension, the Scheie grading, ocular
                                associations, management. COUNTED.
       lines 211–225    84 w  — PREGNANCY. COUNTED.
       lines 226–246   133 w  — THYROID DISEASE and TED complications.
                                COUNTED.
       lines 247–267    74 w  — SICKLE CELL ANAEMIA. COUNTED.
       lines 268–300   215 w  — SARCOIDOSIS, the autoimmune conditions, JIA
                                and DRY EYE SYNDROME. COUNTED.
       lines 301–322   147 w  — MALIGNANCY, radiation and chemotherapy.
                                COUNTED.
       lines 323–335    76 w  — AIDS. COUNTED.
       lines 336–355   115 w  — OCULAR SYPHILIS. COUNTED.
       lines 356–366    41 w  — CANDIDA. COUNTED.
       lines 367–379    89 w  — OCULAR HERPES ZOSTER. COUNTED.
       = 1,734 words claimed of the file's 1,834. Reconciles exactly:
         1,834 − 8 − 8 − 84 = 1,734.

     TERM 2 — 25 x 0 linked questions = 0. ⚠️ VERIFIED FROM DISK, NOT ASSUMED:
       `grep -c "op-systemic" app\data\questions.ophtho.js` returns 0. NO
       QUESTION IN THE MODULE CARRIES chapter:'op-systemic'. So the LECTURE
       side of the §14.2 floor does all the work and TERM 1 governs alone,
       and every section's `qs` is legitimately empty — the same audited case
       as `op-trauma`. Nothing must be "fixed" by linking another chapter's
       questions here.

     max(1,734 · 0) = 1,734 → floor 600 clears, cap 3,000 does not bind.
     BUDGET = 1,734. Operative ceiling per §14.1 is ~2,400 body words /
     ~10 printed pages.

   ⚠️ WORDS DELIVERED BY A REGISTER ROW BUT CHARGED TO ANOTHER CHAPTER —
   EXCLUDED FROM TERM 1, per §14.1(b) and `op-trauma`'s precedent:

     L10 lines 191–210 (SLIDE 15, the Graves mechanism and the systemic
     thyrotoxic picture) are NOT counted here. `op-orbit`'s own budget block
     claims "lines 19–650, 3,222 w — slides 1–48, the lecture itself.
     COUNTED", which includes 191–210. Those words are ALREADY BILLED TO
     `op-orbit`. Deferring and counting are opposites; a chapter cannot bill
     what another chapter already billed. The budget may understate a
     chapter, never overstate it.

   DIAGRAM-DECK CHECK (§14.1). L23 lines 21–379: 1,734 words over 306
   non-blank lines = 5.67 w/line, far above the ~2 that marks a
   labelled-diagram deck. NO diagram-deck correction applies, and unlike
   `op-orbit`/`op-trauma` this number is trustworthy on its own terms — L23 is
   a genuine TEXT EXTRACTION, not a transcriber's prose, so 5.67 measures the
   deck rather than the person who read it.

   ⚠️ ENTITY FLOOR, COUNTED BEFORE WRITING (§14.1's `ent-dysph` rule — say the
   overrun up front rather than discovering it in compression). ⚠️ AND THIS IS
   THE TEXTBOOK SURVEY CHAPTER §14.1 WARNS ABOUT: fourteen systemic diseases,
   each asked once, so TERM 1 and TERM 2 are BOTH low and they agree only
   because both are low. TERM 2 is not merely low here, it is ZERO.

     DIABETES: the five systemic determinants costed as ONE framework slide
       ~190 · the stage/sign grid (4 stages x sign lists) ~180 · PDR numbers,
       NVD/NVE and the three treatment indications ~120 = ~490
     HYPERTENSION, framework slides costed ONE BY ONE (§14.1's `ent-neck`
       rule — a list of names has no fat in it): arteriolar sclerosis + the
       three wall signs ~200 · the A/V crossing slide ~120 · elevated BP and
       malignant hypertension ~200 · the Scheie 5-row grid ~110 · the four
       ocular associations ~60 · the three management rules ~90 = ~780
     PREGNANCY: one slide, three physiological + four pathological ~130
     THYROID: mechanism + the systemic picture + TED targets +
       complications ~190
     SICKLE CELL: genotypes + cascade + the two retinopathy halves ~180
     SARCOIDOSIS / AUTOIMMUNE / DRY EYE: sarcoid ~110 · the connective-tissue
       list and JIA ~110 · keratoconjunctivitis sicca ~80 = ~300
     MALIGNANCY: metastasis/lymphoma/leukaemia ~110 · remote and treatment
       effects ~100 = ~210
     AIDS AND SYPHILIS: ~120 + ~140 = ~260
     CANDIDA AND HERPES ZOSTER: ~110, HZO held down by the `cor-6`
       cross-reference
     ANIRIDIA / STURGE–WEBER (the undeliverable register row, supplied and
       tagged): ~90

     REALISTIC FLOOR ≈ 2,480 words — **~43 % OVER TERM 1's 1,734**, and this
     is SAID HERE, IN ADVANCE. At the ÷240 estimator that is 2,480 ÷ 240 ≈
     **10.3 printed pages** — a shade over the ~10-page operative ceiling and
     WELL INSIDE the ~12-page split trigger the brief set. **NO SPLIT
     PROPOSED — the shape holds.**

     ⚠️ THE SEAM, IF THE HUB DISAGREES AND WANTS ONE ANYWAY, is chosen from
     the content and not from the word count: L23 spends its first 190 lines
     on the TWO VASCULAR DISEASES (diabetes, hypertension) plus pregnancy,
     and its last 170 on EVERYTHING ELSE. Split at line 226 —
     `op-systemic-vasc` (sys-1 to sys-6, ~1,370 w / ~5.7 pp) and
     `op-systemic-other` (sys-7 to sys-13, ~1,110 w / ~4.6 pp). Recorded so
     the decision is available; not taken, because 10.3 pp does not need it.

   ============================================================================
   ⚠️⚠️ THE TWO REGISTER ROWS THIS CHAPTER WAS OWED — ONE MIS-STATED, ONE
   UNDELIVERABLE. NEITHER IS TICKED AS A CLEAN DELIVERY, AND THE EVIDENCE FOR
   EACH IS BELOW. §14.5: a row is a claim by the deferring chapter, not a
   fact.

   ROW 1 — `op-orbit` (L10 sl.15) → "the systemic thyrotoxic picture in full,
   plus the IgG / TSH-receptor mechanism behind thyroid eye disease.
   `op-orbit` carries only the ORBITAL components and the three lid signs."

     ⚠️ VERDICT: MIS-STATED IN ITS SECOND CLAUSE. The content is real and the
     row names the RIGHT DECK AND THE RIGHT SLIDE — L10 lines 191–210 are
     SLIDE 15 and they carry both halves exactly as promised. **But
     `op-orbit` did not defer it. `op-orbit` WROTE it.**

     EVIDENCE, read from the merged `app\data\theory.ophtho.js`, not from the
     row. `orb-6` opens:
       "**Graves disease:** the commonest form of hyperthyroidism;
        autoimmune, IgG antibodies bind the TSH receptor and stimulate
        hormone secretion. More common in females."
     and its next bullet carries the systemic thyrotoxic list IN FULL —
     weight loss despite a good appetite, increased bowel frequency,
     sweating, heat intolerance, nervousness, irritability, palpitations,
     weakness, fatigue, goitre, tremor, palmar erythema, warm sweaty skin,
     sinus tachycardia and arrhythmias. That IS L10 slide 15, entire.
     Nothing on that slide is missing from `orb-6`.

     ⚠️ AND `orb-6` STILL POINTS HERE: its aside reads "*Full endocrine
     account in `op-systemic`.*" So the two chapters point at each other —
     §14.5's CIRCULAR DEFERRAL. Left alone, a reader following `orb-6`'s
     pointer arrives at nothing.

     HOW IT IS RESOLVED, and it is a DECLARED OVERLAP, neither side
     removable. sys-7 writes the mechanism and the systemic picture as a
     compact grid, because this is the chapter a reader opens for the
     SYSTEMIC disease and `orb-6`'s pointer must land somewhere; `orb-6`
     keeps them because a TED vignette is decided by "weight loss despite a
     good appetite" and 24 questions are filed there. The WORDS stay charged
     to `op-orbit` (excluded from TERM 1 above), so nothing is double-billed.
     Said, rather than silently duplicated — the same handling `op-trauma`
     gave the Seidel test against `cor-2`.

   ROW 2 — `op-glauc` (L12) → "Aniridia and Sturge–Weber as SYNDROMES — named
   in `op-glauc` only as causes of developmental glaucoma; the systemic
   picture is not written there."

     ⚠️ VERDICT: THE ROW'S DIAGNOSIS IS CORRECT AND THE ROW IS UNDELIVERABLE
     FROM THE COURSE MATERIAL. Reported with evidence rather than quietly
     filled and ticked, exactly as §14.5 requires.

     EVIDENCE. `aniridi` returns **ONE hit in all 27 cached ophthalmology
     decks**: `L12) Glaucoma 2 Cong, PACG, 2ry.txt` line 325, which reads in
     its entirety —
        "                                  Aniridia         Sturge Weber Syndrome"
     Two photograph captions under the developmental-glaucoma slide, and
     nothing else. `sturge`, `weber`, `naevus flammeus`, `nevus flammeus`,
     `port wine` and `port-wine` return the SAME single line and no other.
     `phakomat` and `phacomat` return **zero**; `neurofibromat` returns only
     `L10`'s optic-nerve-glioma and meningioma slides, a different subject.
     **No deck in this module defines either syndrome, systemically or
     ocularly.** The second half of the row — "the systemic picture is not
     written there" — is true of `op-glauc` AND of the whole module.
     `glc-16` already carries both names as the two syndromic associations,
     which is all L12 gives it.

     WHAT IS DONE. Per `CLAUDE.md` §4 a gap is ANSWERED AND TAGGED, never
     declared, so sys-13 supplies both systemic pictures compactly and tags
     them `not taken from the course material`. **The register row is NOT
     ticked**: the material could not deliver it, and a tagged supply is not
     a delivery. The hub should mark it `⚠️ undeliverable — no deck defines
     either syndrome; supplied and tagged in sys-13`.

   ============================================================================
   GAPS — ANSWERED AND TAGGED, NOT DECLARED (§4). ⚠️ EVERY ONE WAS GREPED AS A
   STEM ACROSS ALL 27 CACHED OPHTHALMOLOGY DECKS BEFORE BEING CALLED A GAP,
   AND THE OBVIOUS MISSPELLING TRIED, per the brief's `Vossious` rule. FOUR
   THINGS I EXPECTED TO BE GAPS TURNED OUT PRINTED, AND ALL FOUR CHANGED WHAT
   IS WRITTEN BELOW:

     ✅ NOT A GAP — THE FIVE STAGES OF SICKLE-CELL PROLIFERATIVE
        RETINOPATHY. L23 prints only a cascade sentence and two photograph
        plates. `L19.2) Retinal Vascular Disorders` lines 343–347 print the
        numbered sequence: peripheral arteriolar occlusion → peripheral
        arteriovenous anastomoses → neovascularization ("sea-fan") →
        vitreous haemorrhage → fibrovascular proliferation and traction.
        SOURCED, cited in sys-8. §4's "prefer the other deck to outside
        knowledge", applied.
     ✅ NOT A GAP — HUTCHINSON'S SIGN, the nose-tip vesicle rule L23 states
        without naming. `L15,16) Cornea` line 185 prints it by name with its
        mechanism (nasociliary branch involvement → HIGH risk of ocular
        complications). SOURCED, cited in sys-12.
     ✅ NOT A GAP — KERATOCONJUNCTIVITIS SICCA AS A DEFINITION. L23 uses the
        term without defining it. `L37) Red Eye` lines 260–264 define it —
        "a disorder resulting from tear deficiency or dysfunction", causing
        pain, blurred vision, photophobia and redness. SOURCED, cited in
        sys-9.
     ✅ NOT A GAP — CANDIDA'S FIRST-LINE TOPICAL AGENT AND ITS RISK GROUP.
        `L15,16) Cornea` lines 126–128 print amphotericin B 0.15 % as
        first-line for Candida and name the risk group (immunocompromised,
        contact lens wearers, topical steroids). SOURCED, cited in sys-12
        beside L23's own systemic regimen.

   THE TWO REAL GAPS, each settled by proving a negative across 27 decks:

     1. CMV RETINITIS BY NAME. ⚠️ L23's AIDS slide PRESCRIBES INTRAVENOUS
        GANCICLOVIR AND FOSCARNET AND NEVER SAYS WHAT FOR — the sentence
        opens "Both intravenous ganciclovir and foscarnet are effective
        treatments" with no antecedent, because the deck names "infectious
        retinitis" generically and never CMV. Greped: `CMV` and
        `cytomegalo` return `L10` (cytomegalovirus as one cause of acute
        DACRYOADENITIS — a different disease) and `L35,36` line 171
        ("Rubella,toxo,cmv" among intrauterine CATARACT causes). `retinitis`
        returns only `L1,2`, `L23` and `L35,36`. **No deck anywhere defines
        CMV retinitis.** SUPPLIED AND TAGGED in sys-11, in two lines — the
        minimum that makes the deck's own drug sentence mean anything.
     2. ANIRIDIA AND STURGE–WEBER AS SYNDROMES — register row 2 above.
        SUPPLIED AND TAGGED in sys-13, evidence in the row block.

   One smaller supplied item, tagged in place:
     · The Scheie classification's ORIGIN. L23 writes "Modified Scheie
       Classification of Hypertensive Retinopathy" and prints grades 0–4
       verbatim; the grades are sourced, and only the note that "modified"
       distinguishes it from the original two-scale Scheie system is
       supplied. One clause, in sys-5.

   ============================================================================
   ⚠️ CROSS-CHAPTER DEFERRALS (§14.5) — named, so each is a promise and not a
   deletion. ⚠️ NO QUESTION FILED IN THIS CHAPTER CAN BE HARMED BY ANY OF
   THEM, because this chapter has NO questions at all; each was instead
   checked against the chapter it is owed TO, and each receiver's merge state
   is stated because a merged receiver cannot be ticked without a
   reconciliation pass.

     · L23 lines 48–106 — DIABETIC RETINOPATHY AS RETINAL DISEASE: the
       pathogenesis of the microvascular lesion, fluorescein angiography and
       OCT as a work-up, panretinal and focal/grid photocoagulation as
       procedures, anti-VEGF, vitrectomy, and the full maculopathy account.
                                                                  -> `op-ret`
       Kept here as the stage/sign grid and the three treatment INDICATIONS,
       which is the systemic-physician's half. ✅ `op-ret` is NOT merged and
       `L19.1) Diabetic Retinopathy` is its OWN deck, so this row costs L23
       nothing and can be delivered from a source this chapter never spent.
     · L23 lines 181–191 — RETINAL VEIN OCCLUSION and RETINAL ARTERY
       MACROANEURYSM as retinal vascular disease.               -> `op-ret`
       Kept here as two names in the hypertension association list, which is
       all L23 gives them. ✅ not merged; `L19.2` is `op-ret`'s own deck.
     · L23 line 191 — ANTERIOR ISCHAEMIC OPTIC NEUROPATHY and the OCULAR
       MOTOR NERVE PALSIES as neuro-ophthalmology.
                                              -> `op-neuro` / `op-acute`
       Kept here as two names. ✅ neither is merged. ⚠️ BOTH draw on decks
       owed a visual read (`L21`, `L22`, `L31,32`), so this row cannot be
       ticked until those are done.
     · L23 lines 247–267 — SICKLE-CELL RETINOPATHY'S FIVE STAGES, its
       management and the proliferative/non-proliferative plates in full.
                                                                  -> `op-ret`
       Kept here as the systemic cascade and a two-column lesion grid.
       ✅ not merged; `L19.2` prints the stages and is `op-ret`'s deck.
     · L23 lines 276–290 — UVEITIS AS A DISEASE: the anterior / intermediate
       / posterior / pan- classification, the granulomatous-versus-
       non-granulomatous split, JIA screening intervals, and toxoplasma
       chorioretinitis.                                          -> `op-uvea`
       Kept here as the sarcoid and JIA ASSOCIATIONS only. ✅ not merged.
       ⚠️ `L13,14) Uvea & Sclera` extracts ZERO characters and has NO CACHE
       AT ALL, so `op-uvea` cannot be written — let alone ticked — before its
       41-page visual read.
     · L23 lines 301–316 — OCULAR AND ORBITAL METASTASES, INTRAOCULAR
       LYMPHOMA and LEUKAEMIC INFILTRATION as TUMOURS, with their
       presentation and management.                               -> `op-onc`
       Kept here as the two incidence figures and the masquerade line.
       ✅ not merged. ⚠️ `L24) Ocular tumors.` is 78 rasterised pages owed a
       visual read.
     · L23 lines 291–300 — KERATOCONJUNCTIVITIS SICCA as a dry-eye entity:
       the tests, the severity ladder and the treatment.          -> `op-red`
       Kept here as the rheumatological ASSOCIATIONS and the corneal-melt
       risk. ✅ not merged; `L37` defines it and is `op-red`'s own deck.
     · L23 lines 212–215 — CENTRAL SEROUS CHORIORETINOPATHY as a macular
       disease.                                                   -> `op-ret`
       Kept here as one word of the pregnancy list. ✅ not merged. ⚠️ Greped:
       `central serous` and `chorioretinopathy` return L23 ALONE in 27
       decks, so `op-ret` will have to supply and tag it — flagged now so the
       row is not read as a promise the material can keep.

   ⚠️ RECEIVERS THAT ARE ALREADY MERGED — SO NO ROW WAS OPENED, AND EACH IS
   HANDLED BY AN ITALIC CROSS-REFERENCE IN THE BODY INSTEAD:
     · HERPES ZOSTER OPHTHALMICUS in full is `cor-6` (MERGED) — the nose
       sign, the pseudodendrite, the 72-hour valaciclovir window. sys-12
       carries only what L23 adds and points at it.
     · CANDIDA KERATITIS is `cor-4` (MERGED). L23's Candida is a
       CHORIORETINITIS, a different entity in a different layer; both are
       written, and sys-12 says so.
     · INTERSTITIAL KERATITIS. ⚠️ Greped: `interstitial keratitis` returns
       **L23 ALONE** in all 27 decks — `cor-1` to `cor-24` do not carry it.
       So it is NOT deferred to the merged cornea chapters; it is WRITTEN
       HERE, in sys-11, where it is congenital-versus-acquired syphilis.
     · THE THYROID overlap with `orb-6` (MERGED) — declared in ROW 1 above.

   ⚠️ ROWS THIS CHAPTER ADDS TO THE REGISTER, to be copied into
   START-HERE.md §14.5 by the hub:
     | `op-systemic` (L23 ll.48–106) | Diabetic retinopathy as RETINAL
       disease — pathogenesis, FA/OCT, PRP and focal/grid laser, anti-VEGF,
       vitrectomy, the full maculopathy account | `op-ret` | open |
     | `op-systemic` (L23 ll.181–191) | Retinal vein occlusion and retinal
       artery macroaneurysm as retinal vascular disease | `op-ret` | open |
     | `op-systemic` (L23 l.191) | AION and ocular motor nerve palsies as
       neuro-ophthalmology | `op-neuro` / `op-acute` | open |
     | `op-systemic` (L23 ll.247–267) | Sickle-cell retinopathy's five
       stages and management in full | `op-ret` | open |
     | `op-systemic` (L23 ll.276–290) | Uveitis as a disease — the
       four-way classification, JIA screening, toxoplasma | `op-uvea` |
       open ⚠️ receiver has no cache |
     | `op-systemic` (L23 ll.301–316) | Ocular/orbital metastases,
       intraocular lymphoma and leukaemic infiltration as TUMOURS |
       `op-onc` | open |
     | `op-systemic` (L23 ll.291–300) | Keratoconjunctivitis sicca as a
       dry-eye entity — tests, severity, treatment | `op-red` | open |
     | `op-systemic` (L23 ll.212–215) | Central serous chorioretinopathy as
       a macular disease ⚠️ absent from all 27 decks — receiver must supply
       and tag | `op-ret` | open |

   ============================================================================
   DEFECT NOTES (§4b — noted, never disputed), each one line in the body:
     · L23 line 25–28 PRINTS THE SAME SENTENCE TWICE inside one bullet —
       "The longer a person suffers from diabetes, the greater the
       likelihood of developing diabetic retinopathy" — with the second copy
       running into the IDDM/NIDDM list. Written once, in sys-1.
     · L23's AIDS slide gives the LESS COMMON complications FIRST and the
       MOST COMMON second. Written in the sensible order in sys-11, with the
       deck's own labels kept.
     · L23 line 290 ENDS MID-SENTENCE — "Patients who have JIA, especially
       the pauciarticular form," and the slide stops. The clause is not
       completed anywhere in the deck. Recorded in sys-9; the missing
       screening instruction is NOT invented, it is deferred to `op-uvea`.
     · The A/V-crossing slide (lines 129–142) is a three-heading template —
       Definition / Implications / Monitoring — carrying one real definition
       and two content-free paragraphs. Only the definition is written.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection (§14.2) — moot, the chapter links
        no questions.
     2. The two OBJECTIVES slides as body text. They are a contents list of
        the chapter itself plus three generic learner objectives; the
        arithmetic is in the budget block.
     3. The repeated photograph-plate captions. Lines 65–77, 87–98, 100–106,
        167–191, 254–267 are figure plates; their CONTENT is used and their
        panel lettering and repeated headings discarded.
     4. Question ids in body text, teaching voice, per-fact citation clauses
        (one Src line per section), and a closing summary section.
     5. Drug doses. L23 prints NONE anywhere — not for ganciclovir,
        foscarnet, penicillin, amphotericin or voriconazole. The one
        concentration written (amphotericin B 0.15 %) is `L15,16`'s and is
        cited as such.
     6. The AIDS antiretroviral story and CD4 thresholds. Absent from L23
        and from all 27 decks; no question tests it. Recorded, NOT supplied —
        supplying it would pad a chapter already 43 % over TERM 1.
     7. Sarcoidosis systemic staging, ACE and the chest film. L23 gives only
        the 80 % hilar-lymphadenopathy figure and the histology.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field.

   ============================================================================
   ⚠️ FINAL MEASUREMENT — DELIBERATELY ABSENT FROM THIS HEADER.

   §14.1's rule has been broken ELEVEN times in this project, most recently by
   a real measurement invalidated by the one section written after it.
   `op-trauma` solved it by stating NO numbers in the file and reporting them
   to the hub instead. THAT IS COPIED HERE. The counter was run over this file
   ON DISK after the final content edit and after the §14.3a layout pass; the
   figures are in the completion report, not in this file, because a number
   written into the file must be re-verified after every subsequent edit — and
   this file WILL be edited again when it is spliced into
   `app\data\theory.ophtho.js`.

   TO RE-MEASURE (body words = the joined `body` strings only, excluding
   `intro`, `h`, `Src:` lines and `qs`):

     node -e "const vm=require('vm'),fs=require('fs');
       const c={};vm.createContext(c);
       vm.runInContext(fs.readFileSync('content/ophtho/theory-drafts/op-systemic.draft.js','utf8'),c);
       const ch=c.THEORY_DRAFT['op-systemic'];
       let t=0;for(const s of ch.sections){
         const w=s.body.split('\n').filter(l=>!/^Src:/.test(l))
                  .join(' ').split(/\s+/).filter(Boolean).length;
         console.log(s.id,w);t+=w}
       console.log('sections',ch.sections.length,'body',t,
                   'intro',ch.intro.split(/\s+/).length,
                   'pages~',(t/240).toFixed(1));"

   ============================================================================ */

var THEORY_DRAFT = {
  'op-systemic': {

    intro: 'Fourteen systemic diseases, each asked the same two questions: what does it do to the fundus, and what does the ophthalmologist do about it. Diabetes and hypertension carry most of the deck; the rest are single slides worth one fact each.',

    sections: [

{
  id: 'sys-1', w: 'must',
  h: 'Diabetes — the five systemic determinants of retinopathy',
  body: [
    '- **The ocular complications:** **refractive changes** · **cataract** · **RETINOPATHY**.',
    '- **⚠️ Which matters:** retinopathy is **the most important** of the three.',
    '',
    '### 1. Duration and type',
    '- **The rule:** the **LONGER** a person has diabetes, the **greater the likelihood** of retinopathy.',
    '- **Both types:** **IDDM (type 1)** and **NIDDM (type 2)**.',
    '',
    '### 2. Glycaemic control',
    '- **In IDDM:** **intensive** control reduces **newly diagnosed** retinopathy and slows **progression** of existing disease.',
    '- **In NIDDM:** intensive versus conventional treatment reduced progression to **severe NPDR and PDR**.',
    '- **Also in NIDDM:** decreased **macular oedema**, and less need for **panretinal and focal macular laser**.',
    '',
    '### 3. Blood pressure',
    '- **Tight BP control:** important in preventing **both development and progression** of diabetic retinopathy.',
    '',
    '### 4 and 5 — the rest of the microvasculature',
    '- **Neuropathy and nephropathy:** lowered by the same **tight glycaemic control**.',
    '- **Cardiovascular disease:** related to **ADVANCED** diabetic retinopathy.',
    '',
    '*The deck prints determinant 1 twice inside one bullet; written once.*',
    '',
    'Src: L23 (Diabetes Mellitus, three slides)'
  ].join('\n'),
  qs: []
},

{
  id: 'sys-2', w: 'must',
  h: 'Diabetic retinopathy — the stages, their signs, and when it is treated',
  body: [
    '### The stages',
    '',
    '|Stage|Signs|',
    '|---|---|',
    '|**NPDR** — mild, moderate, severe|**MICROANEURYSMS · BLOT-AND-DOT haemorrhage · HARD EXUDATES · retinal OEDEMA**|',
    '|**SEVERE NPDR**|**SOFT (COTTON-WOOL) exudates · VENOUS changes · areas of CAPILLARY CLOSURE · LARGE haemorrhages · IRMA**|',
    '|**PDR**|**NEOVASCULARIZATION**, flat or elevated|',
    '',
    '### Where each NPDR sign is looked for',
    '- **Microaneurysms:** usually **TEMPORAL TO THE FOVEA**.',
    '- **Haemorrhages:** **intraretinal dot and blot**.',
    '- **Hard exudates:** frequently arranged in **CLUMPS OR RINGS**.',
    '- **Retinal oedema:** seen as **THICKENING on biomicroscopy**, not as a colour.',
    '',
    '### Proliferative disease — the numbers and the two sites',
    '- **Frequency:** affects **5–10 % of diabetics**.',
    '- **⚠️ IDDM risk:** **60 % after 30 years.**',
    '- **NVD:** neovascularization **of the DISC**.',
    '- **NVE:** neovascularization **ELSEWHERE**.',
    '- **⚠️ How severity is judged:** by **comparing the new vessels with the AREA OF THE DISC**.',
    '',
    '### The three indications for treating PDR',
    '- **NVD:** greater than **1/3 disc area**.',
    '- **NVD, less extensive:** **PLUS haemorrhage**.',
    '- **NVE:** greater than **1/2 disc area**, **PLUS haemorrhage**.',
    '',
    '### Diffuse diabetic maculopathy',
    '- **Findings:** **diffuse retinal thickening** · frequent **CYSTOID macular oedema** · variable acuity loss.',
    '- **On fluorescein angiography:** **GENERALIZED leakage**.',
    '- **Treatment:** **GRID photocoagulation.** **Prognosis: guarded.**',
    '',
    '*The full retinal account — pathogenesis, FA and OCT work-up, panretinal laser, anti-VEGF — is `op-ret`’s, from its own deck `L19.1`.*',
    '',
    'Src: L23 (Stages of DR, NPDR, Severe NPDR, PDR, treatment indications, diffuse maculopathy)'
  ].join('\n'),
  qs: []
},

{
  id: 'sys-3', w: 'must',
  h: 'Hypertension I — arteriolar sclerosis and the A/V crossing',
  body: [
    '- **The classification splits in two:** changes due to **ARTERIOLAR SCLEROSIS**, and changes due to **ELEVATED BLOOD PRESSURE**.',
    '',
    '### Arteriolar sclerosis — what it is',
    '- **Ageing:** causes **thickening and sclerosis of the arterioles** on its own.',
    '- **⚠️ Hypertension accelerates it:** prolonged systemic hypertension, **usually diastolic above 100 mm Hg**.',
    '- **How much:** depends on the **DURATION and SEVERITY** of the hypertension.',
    '- **Why it matters systemically:** it **may reflect the state of the arterioles elsewhere in the body**.',
    '',
    '### The normal arteriole, so the abnormal one is readable',
    '- **Normally:** a **TRANSPARENT TUBE** with the **blood column** visible on ophthalmoscopy.',
    '- **The light streak:** reflected from the **CONVEX WALL** of the arteriole.',
    '',
    '### The three wall signs, in worsening order',
    '- **Increased light reflex:** the earliest change.',
    '- **COPPER WIRE.**',
    '- **SILVER WIRE.**',
    '',
    '### The A/V crossing',
    '- **Definition:** alterations at the point where **arteries and veins cross**, which can **affect blood circulation**.',
    '- **⚠️ The anatomical reason:** arteriole and vein **SHARE A COMMON SHEATH** within the retinal tissue at crossing sites.',
    '- **What the vein does:** it may be **ELEVATED**, or **DEPRESSED / COMPRESSED** by the arteriole.',
    '- **In severe cases:** an **ABRUPT RIGHT-ANGLE CHANGE IN COURSE** just as the vein reaches the arteriole.',
    '',
    'Src: L23 (Hypertensive retinopathy, Arteriolar sclerosis, A/V crossing changes, A/V crossings)'
  ].join('\n'),
  qs: []
},

{
  id: 'sys-4', w: 'must',
  h: 'Hypertension II — a rising blood pressure, and malignant hypertension',
  body: [
    '### A moderate acute rise',
    '- **The response:** **CONSTRICTION of the arterioles** — focal or generalized.',
    '',
    '### A severe acute rise — the numbers, then the lesion',
    '- **⚠️ The thresholds:** usually **diastolic above 120 mm Hg** and **systolic above 200 mm Hg**.',
    '- **The lesion:** **FIBRINOID NECROSIS of the vessel wall**.',
    '- **The consequences:** **exudates · cotton-wool spots · FLAME-SHAPED haemorrhages · subretinal fluid**.',
    '',
    '### Malignant hypertension — the most severe form',
    '- **Disc swelling:** resembles the swelling of **PAPILLOEDEMA**.',
    '- **⚠️ MACULAR STAR:** exudates in a **STELLATE configuration** in the **OUTER PLEXIFORM LAYER OF HENLE**.',
    '',
    '### The deck’s own sign plate, in two groups',
    '',
    '|Group|Signs|',
    '|---|---|',
    '|**Arteriolar constriction**|**FOCAL · GENERALIZED · ARTERIOLOSCLEROSIS (A-V changes)**|',
    '|**Extravascular signs**|**FLAME-SHAPED haemorrhages · COTTON-WOOL SPOTS and MACULAR STAR · DISC OEDEMA**|',
    '',
    '- **⚠️ The division to hold:** constriction and sclerosis are **INSIDE the vessel wall**.',
    '- **The extravascular group** is what has **LEAKED OUT OF IT**.',
    '',
    'Src: L23 (Elevated BP, Hypertensive retinopathy sign plate)'
  ].join('\n'),
  qs: []
},

{
  id: 'sys-5', w: 'must',
  h: 'Grading hypertensive retinopathy, its ocular associations, and management',
  body: [
    '### Modified Scheie classification',
    '',
    '|Grade|What is seen|',
    '|---|---|',
    '|**0**|**no changes**|',
    '|**1**|**barely detectable arterial narrowing**|',
    '|**2**|**OBVIOUS arterial narrowing with FOCAL IRREGULARITIES**|',
    '|**3**|**grade 2 PLUS retinal haemorrhages and/or exudates**|',
    '|**4**|**grade 3 PLUS DISC SWELLING**|',
    '',
    '- **⚠️ The structure:** each grade **contains the one below it**.',
    '- **So grade 4** is the whole ladder **plus a swollen disc**.',
    '',
    '*"Modified" distinguishes it from the original two-scale Scheie system — not taken from the course material. The grades themselves are the deck’s.*',
    '',
    '### Four ocular associations of hypertension',
    '- **RETINAL VEIN OCCLUSION.**',
    '- **Retinal artery MACROANEURYSM.**',
    '- **ANTERIOR ISCHAEMIC OPTIC NEUROPATHY.**',
    '- **Ocular motor nerve palsies.**',
    '',
    '*Vein occlusion and macroaneurysm belong to `op-ret`; AION and the motor palsies to `op-neuro`. Named here as associations only.*',
    '',
    '### Management — three rules, and two of them are about HOW',
    '- **Adequate BP control:** to preserve the **CEREBRAL, CARDIAC and RENAL** circulations.',
    '- **⚠️ Lower it in a CONTROLLED fashion:** a **sudden drop in tissue perfusion** can cause **OPTIC NERVE INFARCTION and permanent visual loss**.',
    '- **⚠️ In chronic hypertension:** **avoid giving the antihypertensive at night before sleep** — the same reasoning, applied to the nocturnal pressure dip.',
    '',
    'Src: L23 (Grading of hypertensive retinopathy, Ocular associations, Management of hypertension)'
  ].join('\n'),
  qs: []
},

{
  id: 'sys-6', w: 'know',
  h: 'Pregnancy — three normal changes, and four that are not',
  body: [
    '### Physiological — NOT considered pathologic',
    '- **Lowering of the intraocular pressure.**',
    '- **Decrease in corneal sensitivity.**',
    '- **Transient loss of accommodation.**',
    '',
    '### Pathological',
    '- **Increased incidence:** **CENTRAL SEROUS CHORIORETINOPATHY** and **UVEAL EFFUSIONS**, versus non-pregnant women.',
    '- **Pregnancy-induced hypertension:** causes **SCOTOMA, DIPLOPIA and DIMNESS OF VISION**.',
    '- **⚠️ The warning sign:** visual changes may signal an **IMPENDING SEIZURE** in a **pre-eclamptic** patient.',
    '- **Toxaemia:** **FOCAL and GENERALIZED ARTERIOLAR NARROWING** — the hypertensive retina of sys-3, in a pregnancy.',
    '',
    '*Central serous chorioretinopathy as a macular disease is `op-ret`’s; no cached deck defines it, so it will have to be supplied there.*',
    '',
    'Src: L23 (Pregnancy)'
  ].join('\n'),
  qs: []
},

{
  id: 'sys-7', w: 'must',
  h: 'Thyroid disease — the endocrine half of thyroid eye disease',
  body: [
    '- **Graves disease:** the **commonest form of hyperthyroidism**; **AUTOIMMUNE**.',
    '- **⚠️ The mechanism:** **IgG antibodies bind the TSH RECEPTOR** in the thyroid gland and **stimulate hormone secretion**.',
    '- **Who:** more common in **FEMALES**.',
    '',
    '### The systemic thyrotoxic picture',
    '',
    '|System|Features|',
    '|---|---|',
    '|**Metabolic**|**WEIGHT LOSS DESPITE A GOOD APPETITE** · increased **bowel frequency** · sweating · **heat intolerance**|',
    '|**Neuro-behavioural**|**nervousness · irritability · weakness · fatigue**|',
    '|**On examination**|**enlarged thyroid gland · TREMOR · PALMAR ERYTHEMA · warm sweaty skin**|',
    '|**Cardiac**|**PALPITATIONS · SINUS TACHYCARDIA and other arrhythmias**|',
    '',
    '- **⚠️ The vignette line:** **weight loss with a good appetite** is what separates thyrotoxicosis from every other cause of weight loss.',
    '',
    '### What the antibody does to the ORBIT',
    '- **⚠️ Three target tissues:** **autoantibody-mediated ENLARGEMENT of the EXTRAOCULAR MUSCLES, the ORBITAL FAT and the LACRIMAL GLAND**.',
    '- **The clinical feature:** **retraction of the upper AND lower lid**, with **upper-lid LAG ON DOWNGAZE**.',
    '- **⚠️ The epidemiological fact:** TED is the **commonest cause of unilateral OR bilateral proptosis**.',
    '',
    '### The two complications needing an ophthalmologist',
    '- **DIPLOPIA:** from extraocular muscle involvement; common, and may need **STRABISMUS SURGERY**.',
    '- **⚠️ OPTIC NERVE COMPRESSION** within the orbit **→ loss of vision**; treated by **ORBITAL DECOMPRESSION** or **IRRADIATION** to reduce inflammatory muscle swelling.',
    '',
    '*Declared overlap: the ocular components, the three lid-sign eponyms and the full treatment ladder are `orb-6` and `orb-7`, which also carry this systemic list because a TED vignette turns on it. Both correct, and said rather than silently duplicated.*',
    '',
    'Src: L23 (Thyroid Disease, Thyroid exophthalmos, Complications); L10 sl.15 (the Graves mechanism and the thyrotoxic picture), cited only — its words are charged to `op-orbit`'
  ].join('\n'),
  qs: []
},

{
  id: 'sys-8', w: 'know',
  h: 'Sickle cell disease — the paradoxical genotypes, and two retinopathies',
  body: [
    '- **⚠️ THE PARADOX:** complications are **MORE common with SC and S-Thal than with SS**.',
    '- **Read it as:** the **milder haematological genotypes give the worse eye**.',
    '',
    '### The cascade',
    '- **The chain:** intravascular sickling → haemolysis → haemostasis → **THROMBOSIS**.',
    '- **Then:** **arteriolar occlusion → CAPILLARY NON-PERFUSION**.',
    '- **Then:** **NEOVASCULARIZATION → RETINAL DETACHMENT**.',
    '',
    '### The lesions, split by whether new vessels have grown',
    '',
    '|Type|Lesions|',
    '|---|---|',
    '|**PROLIFERATIVE**|**"SEA-FAN" neovascularization · FIBROVASCULAR PROLIFERATION · fibrovascular proliferation WITH BLEEDING**|',
    '|**NON-PROLIFERATIVE**|**SALMON PATCHES** (equatorial haemorrhages) · **BLACK SUNBURSTS** (RPE hyperplasia) · **RETINAL HOLES**|',
    '',
    '### The five stages, named on the retina deck',
    '- **1 —** peripheral **arteriolar occlusion**. **2 —** peripheral **arteriovenous anastomoses**.',
    '- **3 —** **neovascularization** ("sea-fan"). **4 —** **VITREOUS HAEMORRHAGE**.',
    '- **5 —** **fibrovascular proliferation and TRACTION**.',
    '',
    '*The staging, its management and the plates in full are `op-ret`’s, from its own deck `L19.2`.*',
    '',
    'Src: L23 (Sickle Cell Anemia, proliferative and non-proliferative plates); L19.2 (the five stages), cited only'
  ].join('\n'),
  qs: []
},

{
  id: 'sys-9', w: 'must',
  h: 'Sarcoidosis, the autoimmune diseases, and the dry eye they share',
  body: [
    '### Sarcoidosis',
    '- **⚠️ The histology:** **focal NON-CASEATING GRANULOMAS**, with **HILAR LYMPHADENOPATHY in 80 % of patients**.',
    '- **⚠️ Why everyone is examined:** ocular involvement **may be ASYMPTOMATIC**, so a suspected patient gets a **complete ophthalmic evaluation**.',
    '- **The uveitis:** **ANTERIOR or POSTERIOR**, with **retinal involvement**.',
    '- **Neurosarcoidosis:** **OPTIC NEUROPATHY** · oculomotor abnormalities including **SIXTH NERVE PALSY** · rarely **chiasmal and retrochiasmal field loss**.',
    '',
    '### The connective-tissue diseases',
    '- **Which ones:** **SLE · RHEUMATOID ARTHRITIS · granulomatosis with polyangiitis · microscopic polyangiitis**.',
    '- **What they cause:** **SCLEROKERATITIS · UVEITIS · OPTIC NEUROPATHY · RETINAL VASCULITIS**.',
    '',
    '### Juvenile idiopathic arthritis — the numbers are the exam',
    '- **Overall:** about **10 % of all JIA patients have IRITIS**.',
    '- **⚠️ PAUCIARTICULAR form:** **20–30 %** — much the highest risk.',
    '- **Polyarticular form:** **much less common**.',
    '',
    '*Defect note: the deck’s sentence stops mid-clause at "Patients who have JIA, especially the pauciarticular form," and is never completed. The screening instruction is not invented here — it is `op-uvea`’s.*',
    '',
    '### Dry eye — the shared endpoint',
    '- **Definition:** **keratoconjunctivitis sicca** — a disorder from **TEAR DEFICIENCY OR DYSFUNCTION**, causing pain, blurred vision, photophobia and redness.',
    '- **In sarcoidosis:** by **LACRIMAL GLAND INFILTRATION**.',
    '- **Commonest causes:** **SJÖGREN SYNDROME · SLE · RHEUMATOID ARTHRITIS**.',
    '- **⚠️ Advanced rheumatoid arthritis:** severe drying, with a greater risk of **CORNEAL MELTING and PERFORATION**, and of **corneal INFECTION**.',
    '',
    'Src: L23 (Inflammatory and Autoimmune Conditions ×2, Dry Eye Syndrome); L37 (the sicca definition), cited only'
  ].join('\n'),
  qs: []
},

{
  id: 'sys-10', w: 'know',
  h: 'Malignancy — the eye as a target, and as a casualty of treatment',
  body: [
    '### Direct involvement — three numbers and one trap',
    '- **Ocular and orbital METASTASES:** found in up to **5 % of cancer patients**.',
    '- **Systemic LYMPHOMA:** affects the eye in about **3 %**.',
    '- **⚠️ THE MASQUERADE:** **large-cell lymphoma** in the **ELDERLY** presents as a **chronic, steroid-dependent or steroid-RESISTANT uveitis** — or, more specifically, a **VITRITIS**.',
    '- **In children:** **LEUKAEMIC INFILTRATION** of ocular tissues.',
    '- **In leukaemia generally:** **intraretinal, preretinal or subconjunctival haemorrhages**, from **THROMBOCYTOPENIA or ANAEMIA**.',
    '',
    '### Remote effects — cancer without a tumour in the eye',
    '- **Autonomic dysfunction of the pupils.**',
    '- **⚠️ PARANEOPLASTIC RETINAL DEGENERATION:** rare but devastating — **cancer-associated retinopathy (CAR)** and **melanoma-associated retinopathy (MAR)**.',
    '',
    '### What the treatment does',
    '',
    '|Modality|Ocular effect|',
    '|---|---|',
    '|**RADIATION** of tumours near the eye|**CATARACT · delayed RETINAL VASCULOPATHY · OPTIC NEUROPATHY**|',
    '|**CHEMOTHERAPY**|**superficial KERATITIS · optic neuropathy · RETINAL ARTERY OCCLUSION · dryness · CORNEAL DECOMPENSATION**|',
    '',
    '*Metastases, intraocular lymphoma and leukaemic infiltration as tumours are `op-onc`’s.*',
    '',
    'Src: L23 (Malignancy ×2)'
  ].join('\n'),
  qs: []
},

{
  id: 'sys-11', w: 'must',
  h: 'AIDS and ocular syphilis — the two infections with a systemic regimen',
  body: [
    '### HIV — the commonest problems first',
    '- **Most common:** **HIV RETINOPATHY · optic neuropathy · CATARACTS · DRY EYES · INFECTIOUS RETINITIS · UVEITIS**.',
    '- **Less common:** **herpes zoster (shingles)** · **herpes simplex keratitis** · **conjunctival microangiopathy**.',
    '- **Also less common:** **TOXOPLASMIC uveitis and retinitis**, and **field defects or oculomotor dysfunction** from **CNS involvement**.',
    '',
    '### The two drugs, and their two toxicities',
    '',
    '|Drug|Toxicity|',
    '|---|---|',
    '|**Intravenous GANCICLOVIR**|**BONE MARROW SUPPRESSION**|',
    '|**Intravenous FOSCARNET**|**RENAL INSUFFICIENCY**|',
    '',
    '- **⚠️ What they are for:** **CMV RETINITIS**, the opportunistic retinitis of advanced HIV.',
    '',
    '*The deck prescribes both drugs without ever naming the disease, and no cached deck defines CMV retinitis — the name is not taken from the course material.*',
    '',
    '### Ocular syphilis — the one line that decides management',
    '- **⚠️ It is CURABLE:** intraocular inflammation due to syphilis **can be cured**; delay in diagnosing **syphilitic chorioretinitis** causes **permanent, avoidable visual loss**.',
    '- **⚠️ THE REGIMEN:** **systemic penicillin is curative**, and ocular disease receives the **NEUROSYPHILIS INTRAVENOUS regimen — EVEN IF THE CSF IS NORMAL**.',
    '',
    '### The signs, and the laterality rule',
    '',
    '|Presentation|Which syphilis|',
    '|---|---|',
    '|**ACUTE BILATERAL interstitial keratitis** with keratouveitis, **ages 5–25**|**CONGENITAL**|',
    '|**ACUTE UNILATERAL interstitial keratitis** with keratouveitis|**ACQUIRED**|',
    '|**Iritis, retinitis, choroiditis or papillitis**|**SECONDARY**|',
    '|**Diffuse NEURORETINITIS** with papillitis and **PERIARTERIAL SHEATHING**|**NEUROSYPHILIS**|',
    '',
    '- **⚠️ The discriminator:** **BILATERAL and young = congenital; UNILATERAL = acquired.**',
    '',
    'Src: L23 (AIDS, Ocular Syphilis, Signs of ocular syphilis)'
  ].join('\n'),
  qs: []
},

{
  id: 'sys-12', w: 'know',
  h: 'Candida and herpes zoster — the two remaining infections',
  body: [
    '### Candida chorioretinitis',
    '- **The typical lesion:** a **FLUFFY, WHITE-YELLOW, SUPERFICIAL RETINAL INFILTRATE**.',
    '- **⚠️ What it becomes:** rapid **overlying VITREOUS HAZE**, and eventual **VITRITIS**.',
    '- **Treatment:** **systemic AMPHOTERICIN B**; **intravitreal amphotericin or VORICONAZOLE** may also be necessary.',
    '- **Risk groups:** **immunocompromised · contact lens wearers · topical steroids**.',
    '- **On the cornea:** **amphotericin B 0.15 %** is first-line for Candida.',
    '',
    '*This is a retinal infiltrate, not a corneal ulcer. Candida KERATITIS is a different entity in a different layer and is written in `cor-4`.*',
    '',
    '### Herpes zoster ophthalmicus',
    '- **The nerve:** **varicella zoster** in the **OPHTHALMIC DIVISION of the FIFTH cranial nerve**.',
    '- **⚠️ The nose sign:** vesicles on the **TIP OF THE NOSE**, from **NASOCILIARY** extension.',
    '- **Its name — HUTCHINSON’S SIGN:** a **HIGH RISK of ocular complications**.',
    '- **Corneal:** viral **infiltration of the cornea** may lead to a **corneal ULCER**.',
    '- **⚠️ The dangerous pair:** **ANTERIOR UVEITIS PLUS KERATITIS, especially with LOSS OF CORNEAL SENSATION.**',
    '- **Rare:** **DIPLOPIA** from oculomotor involvement, and **OPTIC NEURITIS**.',
    '',
    '*The full HZO account — the pseudodendrite, post-herpetic neuralgia and the 72-hour valaciclovir window — is `cor-6`.*',
    '',
    'Src: L23 (Other systemic infections, Ocular Herpes Zoster); L15,16 (Hutchinson’s sign by name, Candida risk group and dose), cited only'
  ].join('\n'),
  qs: []
},

{
  id: 'sys-13', w: 'know',
  h: 'Aniridia and Sturge–Weber — the two syndromes behind developmental glaucoma',
  body: [
    '*Not taken from the course material. `glc-16` names both as the syndromic causes of developmental glaucoma, and `L12` prints nothing but the two names under two photographs; no deck in the module defines either syndrome. Supplied here because a "systemic diseases" chapter is where they would be looked for.*',
    '',
    '### Aniridia',
    '- **What it is:** near-total **absence of the IRIS**, bilateral, from a **PAX6** mutation.',
    '- **The eye:** **glaucoma in up to half**, plus **foveal hypoplasia, nystagmus and cataract**.',
    '- **⚠️ The systemic association:** **sporadic aniridia → WAGR** — **W**ilms tumour, **A**niridia, **G**enitourinary anomalies, **R**etardation — so a sporadic case needs **renal surveillance**.',
    '',
    '### Sturge–Weber syndrome',
    '- **What it is:** an **encephalotrigeminal ANGIOMATOSIS**, sporadic, from a somatic **GNAQ** mutation.',
    '- **The skin:** a **PORT-WINE STAIN (naevus flammeus)** in the **trigeminal territory**.',
    '- **⚠️ The eye risk:** glaucoma follows when the stain involves the **UPPER LID / ophthalmic division**; also **diffuse choroidal haemangioma**.',
    '- **The brain:** **leptomeningeal angioma** with **SEIZURES**, hemiparesis and developmental delay.',
    '',
    '*The glaucoma itself — goniodysgenesis, buphthalmos, goniotomy versus trabeculotomy — is `glc-16` and `glc-17`.*',
    '',
    'Src: L12 (both names only, as developmental-glaucoma associations), cited only; the syndromes are supplied and tagged'
  ].join('\n'),
  qs: []
}

    ]
  }
};
