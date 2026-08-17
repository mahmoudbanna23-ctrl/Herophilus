/* op-red + op-red-mgmt — "Red Eye", Ophthalmology. Written 2026-08-17 under
   START-HERE.md §14 (slide-density revision notes), §14.1 (budget), §14.2
   (coverage floor), §14.3 (telegraphic style), §14.3a (layout) and §14.5
   (deferral register), plus content\ophtho\theory-plan.md. Shape copied from
   content\ophtho\theory-drafts\op-cat.draft.js, the module's split precedent.

   ⚠️⚠️ THIS FILE HOLDS TWO CHAPTERS. The second key, `op-red-mgmt`, is NEW
   and must be registered in app\data\modules.js by the hub — this file does
   not touch that shared file.

     `op-red`       suggested title "Red eye — the approach and the causes"
     `op-red-mgmt`  suggested title "Red eye — danger signals, referral and
                    treatment"

   Naming follows the module's own descriptive style, e.g. `op-cornea` /
   `op-cornea-surg`, `op-cat` / `op-cat-surg`.

   ============================================================================
   ⚠️⚠️ THE SOURCE IS A BOOK CHAPTER, NOT A LECTURE, AND THE BOOK IS NOT
   IDENTIFIED ANYWHERE IN THE FILE.

   `L37) Red Eye.txt` is "CHAPTER 4 — The Red Eye": an OBJECTIVES box, a
   *Relevance* section, continuous prose, and twenty sequential `FIGURE 4-n`
   plates. It is the only one of the 27 cached ophthalmology files with that
   numbering. Per the hub's instruction the `Src:` lines say `L37` and nothing
   more — NO BOOK NAME IS INVENTED. A separate finding suggests `L23` is
   Chapter 9 of the same primer; the hub is asking the user rather than
   guessing, and this file is written so that a later, precise citation can be
   substituted into the `Src:` lines mechanically.

   ⚠️ NO RENDER WAS DONE AND NONE WAS AUTHORISED. The text layer is complete
   and `theory-plan.md` records the MediaBox clipping sweep as a clean negative
   for this very file (p.10 ends mid-sentence on the RENDERED page too, because
   it is a book page). Cache integrity checked rather than assumed: the cache
   is 5,104 words over 706 lines against `theory-plan.md`'s own figure of 5,104
   for this deck — an exact match, and the only exact match in the module so
   far (the plan's cataract and cornea figures were both stale).

   ============================================================================
   THE SPLIT DECISION, AND IT WAS MADE BEFORE A WORD OF BODY TEXT WAS WRITTEN.

   FORECAST FOR ONE CHAPTER: ~4,600–4,700 body words, ~19–20 printed pages at
   the ÷240 estimator. That is DOUBLE the ~10-page operative ceiling and well
   past the ~12-page split trigger. Itemised entity by entity below, framework
   sections one by one, grids at rows x columns, per §14.1.

   THE PRECEDENTS AGREE AND THIS SOURCE IS LARGER THAN BOTH. The cataract pair
   is 3,577 cached words, forecast at ~4,370 body words / ~18 pp as one chapter
   and printed at 9 + 8 as two. `op-orbit` is 3,222 and printed at 14 pp, and
   had to be split AFTER writing — the expensive way. `L37` is 5,104, the
   largest single source in Ophthalmology and the densest at 154 w/pp.

   ⚠️ BUT A BOOK COMPRESSES DIFFERENTLY FROM A DECK, AND THIS CUTS THE OTHER
   WAY FROM EVERY EARLIER OPHTHALMOLOGY CHAPTER. Slide bullets go into notes at
   roughly 1:1 — `op-cat` ran +41 % over TERM 1 because two decks had to be
   reconciled into one account. Continuous prose goes in at roughly 2:1,
   because articles, connectives and topic sentences are not facts. So here
   TERM 1 is a CEILING THE CHAPTERS SHOULD COME IN UNDER, not a target they
   overrun. Both halves are budgeted that way and the forecast below reflects
   it: 4,918 counted source words are expected to yield ~4,650 body words
   only because the CONVERSION TO TABLES AND BULLETS ADDS BACK what the prose
   stripping removes (§14.1's words-and-pages opposition).

   THE SEAM: THE BOOK'S OWN MAJOR SEAM, AT LINE 312 —
   "Further Interpretation of the Findings".
     `op-red`       lines 22–311. What a red eye is, the history, the nine-step
                    examination, the plate findings, and then the causes
                    themselves organised as the book organises them: acute
                    painful (cornea, sclera, anterior chamber) · acute
                    non-painful · chronic irritated · chronic without
                    irritation · adnexal.
     `op-red-mgmt`  lines 312–694. The six symptoms and eleven signs with their
                    danger flags, the master discrimination grid, the systemic
                    associations, the laboratory, what primary care may treat
                    (blepharitis, stye and chalazion, subconjunctival
                    haemorrhage, conjunctivitis), and the therapeutic warnings.

   WHY THIS SEAM AND NOT THE TWO NEAREST ALTERNATIVES:

     1. IT IS THE SEAM THE BOOK ITSELF DREW, AND IT BALANCES. "Further
        Interpretation of the Findings" is a first-order heading, the same rank
        as "Disorders Associated With a Red Eye" above it. Measured, the two
        halves are 2,363 and 2,555 counted words — within 8 % of each other.
        No other seam in the file balances within 30 %.
     2. IT SPLITS *WHAT THE DISEASES ARE* FROM *HOW THE FINDINGS ARE READ*,
        which is the real division of labour in the chapter. Chapter 1 answers
        "what causes a red eye"; chapter 2 answers "which red eye do I refer
        tonight". The book's own OBJECTIVES box lists those as separate
        objectives.
     3. ZERO QUESTIONS STRADDLE IT. The chapter has exactly ONE linked
        question, `opqb-t1-65` (photophobia least likely in conjunctivitis),
        and it sits wholly inside `op-red-mgmt` — section rdm-1, whose source
        lines 349–353 print the answer verbatim ("Photophobia … accompanies
        iridocyclitis … Patients with conjunctivitis have normal light
        sensitivity"), with the discriminating grid alongside it in rdm-4.

     REJECTED — SPLIT AT "Management or Referral" (line 531). It puts
     everything diagnostic in chapter 1 (lines 22–530 = 3,806 counted words,
     forecast ~16 pp) and only the treatment in chapter 2 (1,112 words,
     ~4.5 pp). Chapter 1 would immediately need splitting again, which is the
     `op-orbit` failure repeated deliberately. It is also the seam that
     separates a sign from its own management — "shallow anterior chamber"
     would be four sections away from what to do about it.

     REJECTED — SPLIT AT ACUTE vs CHRONIC (line 245, "Chronic, Irritated Red
     Eye"). Superficially attractive, because it is the book's own primary
     classification. It fails on three counts. (a) The danger-signal analysis
     of lines 331–479 — 1,001 words, the largest block in the file and its
     examinable core — applies to BOTH halves and would have to be written
     twice or assigned arbitrarily. (b) CONJUNCTIVITIS IS PRINTED IN BOTH
     HALVES, as an acute non-painful cause (lines 222–244) and again under
     management (lines 642–659); so are subconjunctival haemorrhage and
     blepharitis. This seam splits three entities. (c) The one linked question
     tests photophobia ACROSS the acute/chronic divide, so it would straddle —
     and §14.1's split rule prefers the seam no question straddles.

   ============================================================================
   DECK LABELS USED IN THE Src LINES:
     L37    = L37) Red Eye.txt — ⚠️ A BOOK CHAPTER ("CHAPTER 4 — The Red Eye"),
              book unidentified. 706 lines, 5,104 words. COUNTED.
     L1,2   = L1,2) Ocular Anatomy, Symptomatology & Basic Eye Examination.txt
              — cited only, NOT counted (see the budget notice below)
     L3,4   = L3,4) Clinical- Ocular examination.txt      — cited only
     L15,16 = L15,16) Cornea.txt                          — cited only
     L12    = L12) Glaucoma 2 Cong, PACG, 2ry.txt         — cited only
     L23    = L23) Ocular manifestations of systemic diseases.txt — cited only
     L5     = L5) Eyelid disease.txt                      — cited only
     L6     = L6) Conjunctiva.txt                         — cited only

   ============================================================================
   BUDGET — §14.1: budget = max(summed lecture words, 25 x linked questions),
   floor 600, cap 3,000 PER CHAPTER. MEASURED FROM DISK BY LINE RANGE
   (§14.1(a)). Ranges and counts reproduce with:

     node -e "const fs=require('fs');
       const L=fs.readFileSync('content/ophtho/lectures/L37) Red Eye.txt','utf8').split(/\r?\n/);
       const W=(a,b)=>L.slice(a-1,b).join(' ').split(/\s+/).filter(Boolean).length;
       console.log(W(1,L.length))"

   TERM 1 — L37, 5,104 w in the cache:
     lines   1–  5    10 w — the cache's SOURCE header and the chapter title.
                             NOT counted.
     lines   6– 21   103 w — the OBJECTIVES box. NOT counted — it is an ILO
                             index (§14.1's `ent-swallow` precedent). Every
                             clause of it is a heading of a section below.
     lines  22– 32   101 w — *Relevance*. COUNTED. ⚠️ Judgement call, stated:
                             this is NOT an index. It names the actual simple
                             disorders (subconjunctival haemorrhage, infectious
                             conjunctivitis) against the actual serious ones
                             (intraocular inflammation, corneal inflammation,
                             acute glaucoma) and states the referral principle.
                             That is content, and it is written in red-1.
     lines  33– 38    57 w — Basic Information: the DEFINITION of red eye.
                             COUNTED.
     lines  39– 66   190 w — History, thirteen questions. COUNTED.
     lines  67– 99   289 w — How to Examine, the nine diagnostic steps.
                             COUNTED.
     lines 100–116   224 w — FIGURE 4-1 to 4-7 captions. COUNTED — in a book
                             these are not photograph labels, they are the
                             DEFINITIONS: keratic precipitates, corneal
                             leukoma, hypopyon and chemosis are defined here
                             and nowhere else in the file.
     lines 117–133   119 w — acute vs chronic definition; the acute painful
                             red eye and its anatomical order. COUNTED.
     lines 134–163   240 w — corneal disorders + FIGURE 4-8. COUNTED.
     lines 164–182   159 w — scleral inflammations + FIGURE 4-9. COUNTED.
     lines 183–202   178 w — anterior chamber disorders + FIGURES 4-10, 4-11.
                             COUNTED.
     lines 203–244   288 w — the acute non-painful red eye: subconjunctival
                             haemorrhage, conjunctivitis + FIGURE 4-12.
                             COUNTED.
     lines 245–275   242 w — the chronic irritated red eye: the tear-film
                             approach, keratoconjunctivitis sicca, pterygium +
                             FIGURE 4-13. COUNTED.
     lines 276–311   276 w — the chronic red eye without irritation; adnexal
                             disease + FIGURE 4-14. COUNTED.
     lines 312–330    64 w — "Further Interpretation of the Findings" and the
                             Table 4-1 / 4-2 headings. COUNTED (the prose;
                             the tables themselves are empty — defect note).
     lines 331–373   223 w — Symptoms of a Red Eye, six named. COUNTED.
     lines 374–479   778 w — Signs of a Red Eye, eleven named. COUNTED. The
                             largest block in the file.
     lines 480–507   199 w — Associated Systemic Problems. COUNTED.
     lines 508–530   179 w — Laboratory Diagnosis. COUNTED.
     lines 531–545    84 w — Management or Referral + the Table 4-3 heading.
                             COUNTED.
     lines 546–598   335 w — Blepharitis and its four treatment
                             considerations. COUNTED.
     lines 599–628   266 w — Stye and chalazion. COUNTED.
     lines 629–641   103 w — Subconjunctival haemorrhage, management. COUNTED.
     lines 642–659   103 w — Conjunctivitis, management. COUNTED.
     lines 660–694   221 w — Therapeutic warnings. COUNTED.
     lines 695–706    73 w — POINTS TO REMEMBER. NOT counted, and ⚠️ IT IS
                             TRUNCATED — the file ends mid-sentence at
                             "differentiation between mild and severe". §14.3
                             bans a closing summary section at 100 %
                             duplication; all four of its complete points are
                             written where they belong (VA in rdm-2,
                             fluorescein in rdm-3, pupillary inequality in
                             rdm-3, contact lenses in red-6).

     COUNTED TOTAL = 5,104 − 10 − 103 − 73 = 4,918 words.
     SPLIT BY THE SEAM: `op-red` lines 22–311 = 2,363 w ·
                        `op-red-mgmt` lines 312–694 = 2,555 w.
     (2,363 + 2,555 = 4,918 — the split reconciles to the total.)

   TERM 2 — 25 x 1 linked question = 25. ⚠️ VERIFIED FROM DISK:
     `grep -n "op-red" app\data\questions.ophtho.js` returns exactly ONE line,
     `opqb-t1-65` at line 654. It is filed to `op-red` today and lands in
     `op-red-mgmt` after the split — THE HUB MUST REFILE IT, per
     `theory-plan.md`'s split rule ("a split is not finished when the chapter
     is split — refile the questions in the same pass"; both earlier
     ophthalmology splits left theirs behind). TERM 2 does not approach the
     floor in either chapter.

   BUDGETS: `op-red` = max(2,363 · 25) = 2,363, under the 3,000 cap.
            `op-red-mgmt` = max(2,555 · 25) = 2,555, under the cap.
   ⚠️ `op-red-mgmt`'s TERM 1 of 2,555 sits ABOVE the ~2,400-word operative
   ceiling before a word is written, so the ~10-page shape and the budget
   cannot both be met there. TERM 1 is treated as the ceiling and the coverage
   floor is treated as inviolable; the outcome is reported to the hub, which
   prints the chapter and rules on pages (§14.1: over 10 %, render and count
   the pages before ordering compression — this is under 10 %).

   DIAGRAM-DECK CHECK (§14.1). 5,104 words over 539 non-blank lines =
   9.47 words per line, against the ~2 that marks a labelled-diagram deck and
   against `L4) PHARYNGEAL SUPPURATIONS`'s 5.4, the ENT prose benchmark. This
   is the highest words-per-line of any source in the project, and it is what
   "book chapter" means numerically. No diagram-deck correction applies; if
   anything TERM 1 OVERSTATES the teaching here, which is the opposite of every
   other ophthalmology chapter written so far.

   ⚠️ ENTITY / FRAMEWORK FLOOR, COUNTED BEFORE WRITING (§14.1's `ent-dysph`
   and `ent-neck` rules — say the overrun up front, cost framework sections one
   by one, cost a grid at rows x columns):

     `op-red` — THE APPROACH AND THE CAUSES
       Definition + the sight-threatening/simple division + the module's own
         cause grid (4 x 2 = 8 cells): framework, ~180
       History — 13 questions, grouped: framework, ~200
       The nine diagnostic steps — a numbered framework, each step naming
         its own findings: framework costed step by step, ~300
       The seven plate findings (purulent exudate, KPs, corneal oedema,
         leukoma, irregular reflex, hypopyon, proptosis/chemosis), each a
         definition: 7 x ~28 = ~200
       The four-box classification, acute/chronic x painful/irritated, plus
         the fifth-nerve exception: framework + 2 x 2 grid, ~190
       Corneal causes — abrasion, foreign body, infectious keratitis, the
         contact-lens red eye, corneal ulcer, HSV keratitis: 6 entities, but
         ALL SIX ARE OWNED BY `op-cornea`, so written as discrimination +
         cross-reference at ~45 rather than ~90 each = ~270
       Sclera and episclera — 2 entities + a 5-row comparison: ~200
       Anterior chamber — acute angle closure (owned by `op-glauc`, written
         as discrimination) + iritis/iridocyclitis + ciliary flush: ~230
       Acute non-painful — subconjunctival haemorrhage + conjunctivitis with
         its four aetiologies and the two urgent variants: ~330
       Chronic irritated — the tear-film approach + KCS + pterygium: ~250
       Chronic without irritation + adnexal disease (lid inflammation, lid
         lesions, lid malfunction, lacrimal, orbital): ~310
       = ~2,660
     `op-red-mgmt` — DANGER SIGNALS, REFERRAL AND TREATMENT
       Six symptoms, four of them flagged: 6 x ~35 = ~210
       Eleven signs. ⚠️ Costed as TWO sections, not one — 778 source words is
         a section by itself and would print as a slab: ~600
       The master discrimination grid, 6 conditions x 9 axes = 54 cells.
         ⚠️ COSTED AT ROWS x COLUMNS per `ent-phon`, not as one table: ~300
       Systemic associations — URTI/adenovirus/hay fever + erythema
         multiforme/SJS/TEN: ~230
       Laboratory diagnosis — when, what, and the three cytologies: ~180
       Blepharitis — 4 treatment considerations + contact dermatitis as the
         mimic: ~290
       Stye and chalazion — 3 entities + the biopsy rule + 4 treatments: ~210
       Subconjunctival haemorrhage and conjunctivitis, treated: ~230
       Therapeutic warnings — 3 anaesthetic reasons + 3 steroid effects: ~220
       = ~2,470

     COMBINED FORECAST ≈ 5,130 body words. As ONE chapter that is
     5,130 ÷ 240 ≈ 21.4 printed pages — more than DOUBLE the operative ceiling
     and the largest single-chapter forecast in the module. SPLIT.
     As two: ~2,660 (≈11.1 pp) and ~2,470 (≈10.3 pp). ⚠️ Both are still
     marginally over the ~10-page shape, so both are written against the
     TERM 1 ceilings above (2,363 / 2,555) rather than against the entity
     forecast, and the compression comes from exactly one place, stated in
     advance: THE SIX ENTITIES `op-cornea` OWNS, THE ONE `op-glauc` OWNS AND
     THE ONE `op-trauma` OWNS ARE WRITTEN AS DISCRIMINATION AND
     CROSS-REFERENCE, NOT AS ACCOUNTS. No fact is dropped to reach a number;
     the itemised list of what was cross-referenced is in the manifest.

   ============================================================================
   ⚠️ MODULE CHECK — THE SOURCE'S OWN COVERAGE IS NOT THE MODULE'S. Every term
   below was greped across ALL 27 cached ophthalmology decks before anything
   was called a gap, misspellings included (the `Vossious`/`Amsilar` rule).

     ⚠️⚠️ THE LARGEST FINDING: `L1,2` LINES 629–659 CARRY THE MODULE'S OWN RED
     EYE GRID AND ITS OCULAR-EMERGENCIES GRID, AND NO MERGED CHAPTER HAS
     WRITTEN THEM. Verified: `Acute NAG`, `Most Important` and
     `Vision-threatening` all return ZERO in `app\data\theory.ophtho.js`.
       · line 629 "2. Red Eye:" — MOST IMPORTANT: conjunctivitis, keratitis,
         acute iritis, acute NAG. OTHER CAUSES: subconjunctival haemorrhage,
         episcleritis, scleritis, corneal FB, corneal abrasion.
       · line 642 "3. Ocular Emergencies:" — VISION-THREATENING: chemical
         burns, CRAO, acute angle closure glaucoma, acute iritis,
         endophthalmitis, gonococcal conjunctivitis, lid or globe lacerations,
         corneal ulcer, retinal detachment, IOFB, orbital haemorrhage, giant
         cell arteritis. LIFE-THREATENING: acute proptosis, III palsy with
         internal ophthalmoplegia, papilloedema, orbital cellulitis,
         leukocoria.
     USED, and CITED ONLY, NOT COUNTED. `theory-plan.md`'s `op-va` correction
     reserves `L1,2` lines 614–659 for `op-intro`/`op-vissym`, which are not
     yet written; §14.1(b) says deferring and counting are opposites, so those
     chapters keep every word. A budget notice is filed in the register block.
     ⚠️ Only the RED EYE half of the emergencies grid is written here; the
     life-threatening column and the non-red entries (CRAO, retinal
     detachment, IOFB, GCA) are named in one line and left whole.

     ✅ NOT A GAP — CELLS AND FLARE. `L37` never uses the phrase; it gives
        iritis only ciliary flush, a small pupil, synechiae and a low IOP.
        `L3,4` sl.24–27 prints "Blood (Hyphema) | Pus (Hypopyon) | Cells &
        Flare (Uveitis)" as the anterior-chamber contents, and it is already
        written in the merged `va-14`. Cross-referenced in red-8, not
        supplied. THE OTHER DECK BEAT OUTSIDE KNOWLEDGE, per §4a.
     ✅ NOT A GAP — CHEMOSIS. Expected to be absent, since `L37` never defines
        it in prose; FIGURE 4-7 (line 115) reads "Marked edema (chemosis) with
        hyperemia of the conjunctiva". Printed all along, in a caption.
        red-4 and red-11.
     ✅ NOT A GAP — COLLARETTE, GLANDS OF ZEIS AND MOLL, MEIBOMIAN GLAND
        DYSFUNCTION. All three return `L37` (and `L5` for meibomian), printed
        in the blepharitis and hordeolum passages. rdm-7, rdm-8.
     ✅ NOT A GAP — PARINAUD OCULOGLANDULAR SYNDROME AND CAT-SCRATCH FEVER.
        `Parinaud` returns `L37` alone across 27 decks (line 478). It reads
        as an outside-knowledge candidate and is not one. rdm-3.
     ✅ NOT A GAP — PHARYNGOCONJUNCTIVAL FEVER, ADENOVIRUS TYPES 3 AND 7.
        `denovir` returns `L37` alone (line 490). rdm-5.
     ✅ NOT A GAP — BRIMONIDINE CONTACT DERMATITIS. `brimonidine` returns
        `L37` alone (line 592) — a named drug producing a named lookalike.
        rdm-7.
     ✅ NOT A GAP — SYMBLEPHARON. `L37` line 506 (Stevens–Johnson sequelae);
        also `L25`, `L26` and `L6`. rdm-5.

   THE REAL GAPS — each settled by proving a negative across all 27 decks,
   each ANSWERED AND TAGGED IN PLACE, never declared (`CLAUDE.md` §4a):
     1. WHY CILIARY FLUSH MEANS DEEP DISEASE. `L37` describes the sign in full
        (lines 385–392) and never gives its anatomy; `anterior ciliary` returns
        ZERO across 27 decks. One tagged clause in red-8.
     2. WHAT "PTCs" STANDS FOR. `L6) Conjunctiva` slide 15 prints the
        abbreviation as a slide title with nothing under it, `L3,4` sl.11–13
        repeats the label, and `L37` never uses it at all. The expansion is
        NOT supplied here — it is left to `op-conj`, which owns the deck, and
        a register row records it. Reported rather than guessed.
     3. THE MECHANISM OF ALLERGIC ITCHING. `L37` says only that itching
        "usually indicates an allergic conjunctivitis"; `histamine` returns
        ZERO across 27 decks. One tagged clause in rdm-1.
     4. GONOCOCCAL CONJUNCTIVITIS AS AN EMERGENCY. Checked and NOT supplied —
        `L37` lines 520–524 print it ("serious, potentially blinding disease",
        cultures and consultation) and `L1,2` line 651 puts it on the
        vision-threatening list. Recorded here because it was checked and did
        not need supplying.

   ============================================================================
   ⚠️ REGISTER ROWS THIS CHAPTER WAS OWED — VERIFIED ONE BY ONE AGAINST THE
   NAMED SOURCE'S OWN LINES *AND* AGAINST THE MERGED CHAPTER, INCLUDING EACH
   ROW'S SECOND CLAUSE (`theory-plan.md`: "verify a row's SECOND clause too").

     1. START-HERE.md §14.5 line 1046 — `op-va` (L3,4 sl.11–13) → `op-conj`,
        `op-red`: "Papillae vs follicles vs giant papillae, trachomatous
        scarring T4, PTCs, pterygium, and the conjunctival vs ciliary injection
        discrimination — labels only here; `L6) Conjunctiva` and `L37) Red Eye`
        carry the discrimination. No `op-va` question tests it."
        ⚠️ **VERDICT: THE ROW IS HALF DELIVERABLE HERE AND HALF UNDELIVERABLE
        BY THIS CHAPTER — a sixth shape, "correct row, wrong receiver for part
        of its payload".** Evidence, item by item:
          · CONJUNCTIVAL vs CILIARY INJECTION — ✅ DELIVERABLE AND DELIVERED.
            `L37` lines 385–398 give both signs in full (ciliary flush = deep
            conjunctival and episcleral vessels, faint violaceous ring, best in
            daylight, individual vessels indiscernible, a DANGER sign of
            corneal inflammation / iridocyclitis / acute glaucoma, usually
            absent in conjunctivitis; conjunctival hyperaemia = the larger,
            more superficial bulbar vessels, a NONSPECIFIC sign), and FIGURE
            4-12 (lines 233–235) prints the discriminator itself — conjunctival
            dilation is LESS intense perilimbally, the inverse of ciliary
            flush. Written in rdm-2, with subconjunctival haemorrhage as the
            third pattern from lines 74–75. THE ROW'S NAMING OF `L37` IS
            EXACT.
          · PTERYGIUM — ✅ DELIVERABLE AND DELIVERED. `L37` lines 266–275 give
            it as a full entity (triangular fold, advances over the cornea,
            usually from the NASAL side, ultraviolet exposure, tropical
            climates, localised conjunctival inflammation, excision when it
            encroaches on the visual axis). Written in red-10. Note the merged
            `va-10` lists pterygium only as a label.
          · PAPILLAE vs FOLLICLES vs GIANT PAPILLAE, TRACHOMATOUS SCARRING T4,
            PTCs — ❌ **UNDELIVERABLE BY `op-red`, AND REPORTED AS SUCH RATHER
            THAN QUIETLY FILLED.** `papilla`, `follicle` (as a conjunctival
            sign), `trachoma` and `PTC` ALL RETURN ZERO IN `L37`. The only
            `follicle` hits in the file are "hair follicles in the eyelid"
            under hordeolum, which is a different structure. `L37` simply does
            not teach conjunctival surface reactions — it is a primary-care
            chapter that stops at "conjunctivitis".
            ⚠️ AND THE ROW'S SECOND CLAUSE IS ALSO IN TROUBLE: it names
            `L6) Conjunctiva` as the other carrier, and `L6`'s cache is a
            66-slide PHOTO ATLAS — slides 13, 14, 15, 16 are the bare titles
            "Follicles", "Papillae", "PTCs", "Scarring" with no body text at
            all. So this half of the row is not merely deferred to `op-conj`,
            it is **BLOCKED ON `L6`'s OWED VISUAL READ** and cannot be written
            by anyone until that render happens. Re-filed to `op-conj` alone,
            flagged blocked, in the register block below.
     2. START-HERE.md §14.5 line 1041 — `op-systemic` (L23 ll.268–300) →
        `op-red`: "Keratoconjunctivitis sicca as a dry-eye entity — ⚠️ its
        definition is printed on `L37` lines 260–264, another near-miss tag."
        ⚠️ **VERDICT: THE SOURCE CLAIM IS EXACT; THE ROW IS ALREADY
        SELF-DELIVERED AND IS THEREFORE A NOTICE, NOT A DEBT.** Both clauses
        checked:
          · `L37` lines 262–264 read "Keratoconjunctivitis sicca, commonly
            called dry eye, is a disorder resulting from tear deficiency or
            dysfunction. It causes pain, blurred vision, light sensitivity
            (photophobia), and ocular redness." Exact, to the line number.
          · `L23` lines 285–296 print KCS only as a NAME attached to the
            rheumatological causes ("referred to as keratoconjunctivitis
            sicca. The most common causes are Sjögren syndrome, SLE, and
            rheumatoid arthritis") — no definition, so the row's premise is
            sound.
          · ⚠️ BUT the merged `op-systemic` sys-9 ALREADY CARRIES THE FULL
            DEFINITION — "keratoconjunctivitis sicca — a disorder from TEAR
            DEFICIENCY OR DYSFUNCTION, causing pain, blurred vision,
            photophobia and redness" — i.e. the deferring chapter wrote the
            thing it deferred. The row is not wrong and nothing is missing; it
            is the `op-orbit`/`op-systemic` CIRCULAR shape in a milder form.
            `op-red` therefore writes KCS ONLY IN ITS RED-EYE ROLE (a cause of
            the chronic irritated red eye, reached through the tear-film
            examination of lines 249–258) and cross-references sys-9 for the
            autoimmune causes rather than repeating them. red-10.

     NO ROW WAS TICKED THAT COULD NOT BE VERIFIED. One row is half
     undeliverable by this chapter (row 1) and one is self-delivered (row 2);
     both are reported with evidence rather than filled.

   ⚠️ ROWS THIS FILE ADDS TO THE REGISTER, to be copied into START-HERE.md
   §14.5 by the hub. ⚠️ = the receiving chapter is BLOCKED on an owed visual
   read and cannot deliver until it happens:
     | `op-va` → re-filed | **Papillae vs follicles vs giant papillae,
       trachomatous scarring T4, PTCs** — REMOVED from `op-red`'s half of
       §14.5 line 1046: `L37` prints none of the four. `op-conj` is now the
       sole receiver | `op-conj` | ☐ ⚠️ BLOCKED — `L6` slides 13–16 are bare
       titles; needs the visual read |
     | `op-red` (L37 lines 222–244, 508–530, 642–659) | **CONJUNCTIVITIS IN
       FULL** — bacterial/viral/allergic/chlamydial/gonococcal as entities,
       membranes and pseudomembranes, the neonatal forms, trachoma. `op-red`
       carries only the differential *within a red eye*, the four aetiologies
       with their discriminators, the cytology and the four treatment
       instructions | `op-conj` | ☐ ⚠️ BLOCKED — `L6` visual read |
     | `op-red` (L37 lines 265–275) | **PTERYGIUM IN FULL** — pathology,
       pinguecula, grading, recurrence and the conjunctival autograft.
       `op-red` carries the definition, the nasal/UV/tropical triad and the
       visual-axis excision rule | `op-conj` | ☐ ⚠️ BLOCKED — `L6` visual read |
     | `op-red` (L37 lines 197–202, 429–435, 447–448) | **IRITIS /
       IRIDOCYCLITIS IN FULL** — the anatomical classification of uveitis,
       cells and flare grading, keratic precipitate morphology, hypopyon in
       uveitis, the cycloplegic + steroid regimen, and the JIA screening
       instruction `op-systemic` sys-9 explicitly left open. `op-red` carries
       only ciliary flush, the small irregular pupil, posterior synechiae and
       the low IOP | `op-uvea` | ☐ ⚠️ BLOCKED — `L13,14` extracts ZERO
       characters over 41 pages |
     | `op-red` (L37 lines 166–182) | **SCLERITIS AND EPISCLERITIS IN FULL** —
       the anterior/posterior and diffuse/nodular/necrotising classification,
       the phenylephrine blanching test, scleromalacia perforans, and the
       systemic work-up. `op-red` carries the pain/tenderness/violaceous-hue
       discrimination and the rheumatoid and granulomatosis-with-polyangiitis
       associations | `op-sclera` | ☐ ⚠️ BLOCKED — `L13,14` visual read |
     | `op-red` (L37 lines 286–300, 546–628) | **LID DISEASE IN FULL** —
       blepharitis classification, hordeolum vs chalazion pathology,
       entropion/ectropion and their surgery, lagophthalmos, and the lid
       tumours (BCC, SCC, sebaceous gland carcinoma, molluscum contagiosum).
       `op-red` carries them only as causes of a red eye, plus the four
       blepharitis treatment considerations and the chalazion biopsy rule,
       because they are what primary care treats | `op-lid` | ☐ ⚠️ BLOCKED —
       `L5` is 47 slides carrying 127 media files for 365 words |
     | `op-red` (L37 lines 301–311) | **DACRYOCYSTITIS AND CANALICULITIS IN
       FULL**, and the tear film itself — `L9`'s three layers with their
       thicknesses, the accessory glands by eponym, and the Jones I/II result
       tables. `op-red` carries only "any lacrimal disease causing a red eye
       is referred urgently" and the sac-massage regurgitation sign |
       `op-lac` | ☐ ⚠️ BLOCKED — `L9` is a labelled-diagram deck, 38
       extractable words for 33 pages |
     | `op-red` (L1,2 lines 629–659) | ⚠️ **BUDGET NOTICE, NOT A DEBT** — the
       module's own RED EYE cause grid and OCULAR EMERGENCIES grid are USED in
       red-1 and rdm-4 but CITED ONLY, NOT COUNTED. `theory-plan.md` reserves
       `L1,2` lines 614–659 for `op-intro`/`op-vissym`, which keep all of it
       and may write both grids as their own. Only the red-eye entries are
       used; the life-threatening column is named and left whole |
       `op-intro`, `op-vissym` | ☐ budget notice |
     | `op-red-mgmt` (L37 lines 452–461) | **PROPTOSIS AS AN ORBITAL SIGN** —
       already written in full in the merged `op-orbit` (mechanisms, causes by
       age, direction, the >20 mm and 2–3 mm figures). `op-red-mgmt` adds only
       what `L37` prints and `op-orbit` does not: the CHIN-UP/over-the-maxilla
       inspection manoeuvre, and "sudden proptosis suggests cavernous sinus
       disease" | `op-orbit` | ☐ notice ⚠️ already merged; reconciliation work |
     | `op-red-mgmt` (L37 lines 660–694) | **THE STEROID-RESPONDER FIGURE** —
       topical steroids raise IOP in ~ONE THIRD of the population after 2–6
       weeks, and prolonged use causes cataract. `op-glauc` has no
       steroid-responder figure and `op-cat` has no steroid-cataract latency;
       both are printed here. Written in rdm-10 with cross-references |
       `op-glauc`, `op-cat` | ☐ notice ⚠️ both already merged |

   DECLARED OVERLAP WITH AN ALREADY-MERGED CHAPTER, NEITHER SIDE REMOVABLE —
   these are the entities this chapter CROSS-REFERENCES instead of writing:
     · KERATITIS, CORNEAL ULCER, HSV DENDRITIC ULCER, THE CONTACT-LENS RED EYE,
       CORNEAL ABRASION AND FOREIGN BODY — all owned by `op-cornea`
       (cor-3 to cor-11). red-6 writes only what `L37` adds: the primary-care
       triage rule, the three mechanisms of epithelial disruption, and the
       instruction to refer every soft-lens wearer.
     · ⚠️ `op-cornea` cor-9 ALREADY CARRIES A RED-EYE DISCRIMINATION TABLE —
       "Keratitis against the other red eyes", four columns (keratitis /
       conjunctivitis / episcleritis / dry eye) over six rows, and its own
       `Src` line already reads "L37 … lines 343–353, 178–182, 412–414, cited
       only". THE OVERLAP IS REAL AND IS DECLARED RATHER THAN SILENTLY
       DUPLICATED. rdm-4 writes the SIX-column grid `L37` actually supports —
       cor-9's four PLUS **iritis** and **acute angle closure**, the two
       columns that decide the chapter's one linked question — over nine rows
       including pupil, IOP, coloured haloes and preauricular node, none of
       which cor-9 has. cor-9 remains correct and is pointed at.
     · ACUTE ANGLE-CLOSURE GLAUCOMA — owned by `op-glauc` (glc-11 to glc-14,
       with a flow diagram). glc-13 already cites `L37` lines 355–360 for
       coloured haloes. red-8 writes only the red-eye discriminators
       (mid-dilated fixed irregular pupil, hazy cornea, shallow chamber, high
       IOP) and points at `op-glauc`.
     · CHEMICAL BURNS — owned by `op-trauma` (trm-1 to trm-5, five sections
       including Roper-Hall). `L37` mentions chemical irritants ONCE, as a
       cause of conjunctivitis (line 227). One cross-reference line in red-9;
       nothing is rewritten.
     · ENDOPHTHALMITIS AND PANOPHTHALMITIS — owned by `op-orbit-mass`
       (orb-12). `L37` names panophthalmitis once, among Stevens–Johnson
       complications, which orb-12 already records. rdm-5 keeps the mention
       and points there.
     · PRESEPTAL AND ORBITAL CELLULITIS — owned by `op-orbit`. `L37` reaches
       them only through "any orbital disease causing a red eye is referred
       urgently". red-11.
     · THE SHALLOW ANTERIOR CHAMBER — the penlight (eclipse) test and the
       shallow/deep cause table are written twice already, in `va-14` and
       `glc-12`. rdm-3 gives the sign and the rule and repeats neither.
     · FLUORESCEIN STAINING, THE METHOD — written in full in `va-11` (filter
       paper, topical anaesthetic, cobalt blue, bright-green staining).
       `L37` gives the same technique twice; rdm-3 states the RULE ("always
       instil fluorescein in a red eye") and points at `va-11`.
     · DRY EYE'S AUTOIMMUNE CAUSES — `op-systemic` sys-9 carries Sjögren, SLE,
       rheumatoid arthritis, the sarcoid lacrimal infiltration and the
       rheumatoid corneal-melt risk. red-10 writes KCS in its red-eye role
       only.
     · THYROID EYE DISEASE AND BELL PALSY as causes of exposure — `op-orbit`
       (Graves, in full) and the merged corneal chapters (exposure
       keratopathy). red-11 names the exposure mechanism and points there.

   ============================================================================
   DEFECT NOTES (§4b — noted, never disputed), each one line in the body:
     · ⚠️ TABLES 4-1, 4-2 AND 4-3 ARE EMPTY IN THE TEXT LAYER. Lines 322–331
       and 541–545 print the headings "Table 4-1", "Table 4-2", "Table 4-3"
       with nothing beneath them — they are images. The prose names what 4-1
       and 4-2 hold ("summarize significant symptoms and signs in the
       differential diagnosis of a red eye"), and those symptoms and signs ARE
       the two sections that follow, so 4-1 and 4-2 are recoverable and rdm-4
       is written as their reconstruction. **TABLE 4-3 IS NOT RECOVERABLE** —
       it is described only as "a summary of instructions for patients to
       follow", and no instruction list appears anywhere in the file. Recorded
       in rdm-9 as a genuine loss. NO RENDER WAS AUTHORISED, so it is reported
       rather than chased.
     · `L37` CONTRADICTS ITSELF ON WHETHER SUBCONJUNCTIVAL HAEMORRHAGE HURTS.
       Line 220 allows "some ocular irritation but … not significant pain";
       line 638 allows "mild tenderness … resolves in 1 or 2 days". Both are
       printed and neither is treated as the error. Recorded in red-9.
     · THE CHAPTER'S OWN FIGURE REFERENCES POINT OUTSIDE ITSELF. Subconjunctival
       haemorrhage is illustrated by "Fig 5-9" and hyphaema by "Fig 5-3" —
       both in Chapter 5, which is not in the cache; fluorescein technique
       points to "Figs 1-14 and 1-15" and "Video 1-10" in Chapter 1. Named
       where they occur; nothing is invented to fill them.
     · `L37` AND `L12` DIVERGE ON THE ACUTE-GLAUCOMA PUPIL SIZE. `L37`
       line 434 gives "fixed, mid-dilated (5–6 mm), and slightly irregular";
       `L12`, as written in the merged `glc-14`, gives "mid-dilated,
       vertically oval, non-reactive" with no measurement. Both printed; the
       millimetre figure is `L37`'s alone. Recorded in rdm-3.
     · THE FIRST WORD OF THE *Relevance* SECTION IS TYPOGRAPHICALLY BROKEN —
       line 24 begins "primary care provider frequently encounters" and the
       dropped capital "A" sits alone on line 25. A drop-cap that extracted
       out of order, not a content defect; read as "A primary care provider".

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection (§14.2). The chapter's one question
        already carries it in its own `explanation`.
     2. The OBJECTIVES box as a section (lines 6–21, 103 w) — an ILO index.
        Every one of its five clauses is a section heading below.
     3. POINTS TO REMEMBER as a section (lines 695–706, 73 w) — §14.3 bans a
        closing summary at 100 % duplication, and it is truncated mid-sentence
        in the cache. All four complete points are written where they belong.
     4. The twenty FIGURE captions AS captions. The seven that carry
        definitions are written as findings (red-4); the rest are descriptions
        of photographs the app does not hold, and a description of an unseen
        photograph teaches nothing.
     5. Question ids in body text, teaching voice, bank meta-commentary,
        per-fact citation clauses (one `Src:` line per section), and any
        closing summary section.
     6. Drug doses beyond what `L37` prints. It prints exactly three —
        doxycycline 100 mg bd tapered to od for 2 months, 2 drops of baby
        shampoo in 2 oz of water, antibiotic drops 4–6 times a day — and all
        three are written.
     7. The life-threatening column of `L1,2`'s emergencies grid, and its
        non-red-eye vision-threatening entries (CRAO, retinal detachment,
        IOFB, orbital haemorrhage, giant cell arteritis). Named in one line;
        they are `op-acute`'s and `op-intro`'s, and `op-acute` is unwritten.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field.
   No nested bullets anywhere — the renderer has never been given one.

   ============================================================================
   ⚠️ NO MEASURED WORD COUNT IS WRITTEN INTO THIS HEADER, DELIBERATELY — the
   choice `op-trauma`, `op-systemic`, `op-insid` and `op-cat` all made. Eleven
   headers in this project have carried a number the file did not support,
   including one whose per-section breakdown summed exactly and was still
   stale. THE COUNTS ARE REPORTED IN THE COMPLETION MANIFEST; the hub measures
   from disk.

   TO RE-MEASURE, canonical definition — `W(s.body)` over every section, which
   INCLUDES the `Src:` lines, and is what `vth.js` and every ENT/peds count
   use:

     node -e "const vm=require('vm'),fs=require('fs');
       const c={};vm.createContext(c);
       vm.runInContext(fs.readFileSync('content/ophtho/theory-drafts/op-red.draft.js','utf8'),c);
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
  'op-red': {

    intro: 'Redness is hyperaemia of the conjunctival, episcleral or scleral vessels. Two questions sort the differential before any instrument is picked up: acute or chronic, and painful or not. The dangerous causes are few, and one nine-step examination finds all of them.',

    sections: [

{
  id: 'red-1', w: 'must',
  h: 'What a red eye is, and which ones threaten sight',
  body: [
    '- **Definition:** **hyperaemia — injection of the SUPERFICIALLY VISIBLE VESSELS** of the **conjunctiva, episclera or sclera**.',
    '- **Where the cause may sit:** those outer coats, **or the cornea, iris, ciliary body and ocular adnexa** — so the sign is superficial and the disease may not be.',
    '',
    '### The division the whole chapter rests on',
    '- **Often simple:** **subconjunctival haemorrhage · infectious conjunctivitis**. Resolve alone, or treated in primary care.',
    '- **Occasionally serious:** **intraocular inflammation · corneal inflammation · acute glaucoma**.',
    '- **What the serious three need:** the **URGENT attention of an ophthalmologist** — the decision needs instruments and skills primary care does not have.',
    '',
    '### The module’s own list of causes',
    '',
    '|Most important|Other causes|',
    '|---|---|',
    '|**Conjunctivitis**|**Subconjunctival haemorrhage**|',
    '|**Keratitis**|**Episcleritis**|',
    '|**Acute iritis**|**Scleritis**|',
    '|**Acute NAG** — narrow-angle glaucoma|**Corneal foreign body · corneal abrasion**|',
    '',
    '- **⚠️ Emergencies —** three of the four “most important” are: **acute iritis · acute angle-closure glaucoma · corneal ulcer**. **Conjunctivitis is the one that is not.**',
    '- **Also vision-threatening and red:** **gonococcal conjunctivitis · endophthalmitis · chemical burns · lid or globe lacerations**.',
    '- *The rest of that emergency list — CRAO, retinal detachment, intraocular foreign body, giant cell arteritis — is `op-acute`’s and `op-intro`’s.*',
    '',
    'Src: L37 lines 22–38; L1,2 lines 629–659 (`op-intro`/`op-vissym`’s reserve — cited only, not counted)'
  ].join('\n'),
  qs: []
},

{
  id: 'red-2', w: 'must',
  h: 'History — the questions that narrow it before you look',
  body: [
    '**Why the history is long:** a **complete medical history and review of systems is required** — a red eye occasionally signals systemic disease.',
    '',
    '### Tempo',
    '- **Onset — sudden or progressive?**',
    '- **Timeline — hours, days, or intermittent?**',
    '',
    '### Exposure and contacts',
    '- **Family members with a red eye recently** — same-symptom exposure points to **viral**.',
    '- **Recent cold —** or upper respiratory tract infection.',
    '- **Do the symptoms change with environment?** — seasonal or place-linked suggests **allergy**.',
    '',
    '### Things done to the eye',
    '- **Eye medications —** any over-the-counter or prescription drops?',
    '- **Trauma —** or any out-of-the-ordinary recent activity?',
    '- **⚠️ Recent eye surgery —** if so, **refer immediately to the surgeon who performed the procedure**.',
    '',
    '### Contact lenses — three questions, not one',
    '- **Does the patient wear them at all?**',
    '- **Does the patient SLEEP in them?**',
    '- **Lens care —** when were they last changed, and has anything changed?',
    '',
    '### The four symptom questions',
    '- **Has the vision decreased?**',
    '- **Is there pain — and can the patient describe it?**',
    '- **Is there discharge?** **Is the eye itching?**',
    '- **Is there light sensitivity?**',
    '',
    'Src: L37 lines 39–66'
  ].join('\n'),
  qs: []
},

{
  id: 'red-3', w: 'must',
  h: 'How to examine — the nine diagnostic steps, in order',
  body: [
    '**Nine steps:** they run from the safest to the most invasive.',
    '',
    '|#|Step|What it settles|',
    '|---|---|---|',
    '|**1**|**Visual acuity** — Snellen chart or near card|**normal or decreased**, the single most decisive finding|',
    '|**2**|**Inspect the PATTERN of redness**|**subconjunctival haemorrhage · conjunctival hyperaemia · ciliary flush**, or a combination|',
    '|**3**|**Detect and categorise DISCHARGE**|**amount** — profuse or scant; **character** — purulent, mucopurulent or serous|',
    '|**4**|**Detect corneal OPACITIES** — penlight, transilluminator or slit lamp|large keratic precipitates · corneal oedema · leukoma · irregular corneal reflection|',
    '|**5**|**Stain with FLUORESCEIN**|**disruption of the corneal EPITHELIUM**|',
    '|**6**|**Estimate ANTERIOR CHAMBER depth**|normal or shallow; and **layered blood (hyphaema) or pus (hypopyon)**|',
    '|**7**|**Examine the PUPILS**|irregularity · **inequality** · a sluggish or non-reactive pupil|',
    '|**8**|**Measure IOP** if angle closure is suspected and reliable tonometry is available|confirms **acute angle-closure glaucoma**|',
    '|**9**|**Look for PROPTOSIS, eyelid malfunction, limited eye movement**|orbital and adnexal disease|',
    '',
    '- **⚠️ The one contraindication printed:** **tonometry is OMITTED when there is an obvious EXTERNAL INFECTION** — the tonometer would carry it.',
    '- **⚠️ Step 6, both eyes:** compare the chamber depth of the red eye **with the unaffected eye**.',
    '',
    '*The fluorescein technique itself — filter paper, topical anaesthetic, cobalt blue, bright-green staining — is written in `op-va` (`va-11`).*',
    '',
    'Src: L37 lines 67–99, 416–427'
  ].join('\n'),
  qs: []
},

{
  id: 'red-4', w: 'high',
  h: 'What the examination actually finds — seven named appearances',
  body: [
    '**The plate definitions:** several of these appear nowhere else in the chapter.',
    '',
    '- **Purulent exudate:** a **creamy-white** exudate, seen with the **lower lid everted**, against conjunctival hyperaemia.',
    '- **Keratic precipitates:** **inflammatory deposits on the corneal ENDOTHELIUM** — multiple **grey-white** opacities on the **back surface** of the cornea, seen against the red reflex. **From chronic iridocyclitis.**',
    '- **Corneal oedema:** the normally **sharp corneal reflex becomes DIFFUSE and HAZY**, and **iris details blur**.',
    '- **Corneal leukoma:** a **dense WHITE corneal SCAR** — fibrosis after trauma or infection. **The cornea outside the scar is clear**, and acuity falls only if the scar **encroaches on the visual axis**.',
    '- **Irregular corneal reflection:** a **localised irregularity** of the normally sharp light reflex — it means **local disruption of the corneal EPITHELIUM**.',
    '- **Hypopyon:** **layering of PURULENT material in the INFERIOR anterior chamber**. Illustrated with a corneal ulcer and an irregular corneal reflex.',
    '- **Chemosis:** **marked conjunctival OEDEMA with hyperaemia**, which may **prolapse over the lower lid margin**.',
    '',
    '- **⚠️ Proptosis, illustrated:** the globe **anteriorly displaced**, with chemosis and tissue prolapse — the plate’s patient has an **orbital tumour**.',
    '',
    '*Blood in the chamber is hyphaema; the anterior-chamber contents grid — blood, pus, cells and flare — is `op-va`’s (`va-14`).*',
    '',
    'Src: L37 lines 100–116'
  ].join('\n'),
  qs: []
},

{
  id: 'red-5', w: 'must',
  h: 'The classification — tempo first, then pain',
  body: [
    '- **⚠️ The primary axis:** classification depends **PRIMARILY on acute vs chronic**, and only then on pain.',
    '- **Acute:** symptoms starting **within DAYS**.',
    '- **Chronic:** symptoms present for **longer than a WEEK**.',
    '',
    '### The four boxes',
    '',
    '|  |**What it means**|**Urgency**|',
    '|---|---|---|',
    '|**Acute + PAINFUL**|inflammation of a **deep, innervated structure** — cornea, sclera, anterior chamber|**URGENT — discuss with an ophthalmologist**|',
    '|**Acute + non-painful**|disease **limited to the CONJUNCTIVA**, with **no inflammation of the globe**|**non-urgent**|',
    '|**Chronic + irritated**|anything **disrupting a smooth TEAR FILM** across the cornea|non-urgent|',
    '|**Chronic + no irritation**|a **CONGESTIVE process** — decreased venous drainage of the orbit|depends on the orbital cause|',
    '',
    '### ⚠️ The exception that breaks the rule',
    '- **The patient who cannot FEEL the eye:** a **fifth cranial nerve palsy**, or any **poor corneal sensitivity**.',
    '- **Why it matters:** the pain that would have made it urgent never arrives, so a dangerous eye presents as a quiet one.',
    '- **The instruction:** **poor corneal sensitivity plus a red eye is referred URGENTLY.**',
    '',
    '### The anatomical order for an acute painful eye',
    '**The order:** **cornea → sclera → anterior chamber → posterior segment** — outward-in, in that sequence.',
    '',
    'Src: L37 lines 117–133, 203–213, 245–253, 276–283'
  ].join('\n'),
  qs: []
},

{
  id: 'red-6', w: 'must',
  h: 'Acute and painful — the cornea',
  body: [
    '**The pain:** disruption of the corneal **epithelium causes SIGNIFICANT pain**. Three routes do it.',
    '',
    '- **Trauma:** **corneal abrasion** or **foreign body injury**. The history gives it away — trauma, then pain.',
    '- **Infection:** **bacterial or viral keratitis**, and it **usually occurs in a cornea already compromised** by contact lens use or a previous ocular disorder.',
    '- **Inflammation:** with loss of epithelial integrity — an **ULCER**, with hyperaemia.',
    '',
    '### The corneal ulcer, as it looks in primary care',
    '- **The cornea —** appears **HAZY or WHITE in the area of the ulcer**, where it is normally clear.',
    '- **Symptoms:** **pain · photophobia · MATTERING** — the book’s word for mucus secretions in the eye.',
    '',
    '### ⚠️ The contact-lens red eye',
    '- **Causes:** **poor fit** or **inadequate lens hygiene**.',
    '- **The range:** from **mild conjunctival or superficial corneal irritation** to a **vision-threatening infection of the cornea**.',
    '- **⚠️ The instruction:** **refer every soft-lens wearer with a red eye** — the slit-lamp findings that separate mild from severe are **subtle**, and primary care cannot interpret them.',
    '',
    '### Herpes simplex keratitis',
    '- **What it is:** corneal infection by herpes simplex virus — **common, potentially serious**.',
    '- **What it becomes:** **corneal ULCERATION or SCARRING**.',
    '- **The sign:** **characteristic DENDRITES — an irregular, branchlike lesion of the corneal EPITHELIUM.**',
    '',
    '*The four infectious keratitides, their organisms, cultures and drugs, the HSV/HZO forms and the corneal trauma protocol are all written in `op-cornea` (`cor-3` to `cor-11`).*',
    '',
    'Src: L37 lines 134–163'
  ].join('\n'),
  qs: []
},

{
  id: 'red-7', w: 'must',
  h: 'Acute and painful — the sclera and episclera',
  body: [
    '- **The sclera:** the **“white of the eye”**. It can inflame **with or without** associated autoimmune disease.',
    '- **Named associations:** **rheumatoid arthritis · granulomatosis with polyangiitis.**',
    '',
    '### Scleritis',
    '- **What it is:** inflammation of the sclera, **localised or diffuse**.',
    '- **Frequency and course:** **UNCOMMON, often PROTRACTED**.',
    '- **Pain:** **usually present, and MAY BE SEVERE.**',
    '- **Appearance:** a **localised, RAISED hyperaemic lesion**.',
    '- **⚠️ The colour that changes the work-up:** a **VIOLACEOUS HUE of the sclera** may indicate **serious systemic disease such as a collagen vascular disorder**.',
    '',
    '### Episcleritis',
    '- **What it is:** inflammation, **often SECTORAL**, of the **episclera — the vascular layer BETWEEN the conjunctiva and the sclera**.',
    '- **Frequency:** **uncommon.**',
    '- **The three printed features:** **NO discharge · NOT vision threatening · often TENDER over the inflamed area.**',
    '- **When it recurs:** it **may be associated with an underlying systemic inflammatory disease**.',
    '',
    '### ⚠️ Telling them apart',
    '',
    '|  |**Episcleritis**|**Scleritis**|',
    '|---|---|---|',
    '|**Depth**|**superficial tissue**|**deep**|',
    '|**Profile**|**FLAT**|**RAISED**|',
    '|**Extent**|**sectoral**|localised **or diffuse**|',
    '|**Pain**|tender over the area|**may be SEVERE**|',
    '|**Colour**|hyperaemic|**VIOLACEOUS hue**|',
    '|**Vision**|**not threatened**|**sight-threatening**|',
    '|**Systemic disease**|**usually NOT** — unless recurrent|**collagen vascular, rheumatoid**|',
    '',
    '*The uveal and scleral classifications in full are `op-sclera`’s and `op-uvea`’s (`L13,14`), which is owed a visual read; `op-va` (`va-12`) carries the two labels.*',
    '',
    'Src: L37 lines 164–182'
  ].join('\n'),
  qs: []
},

{
  id: 'red-8', w: 'must',
  h: 'Acute and painful — the anterior chamber',
  body: [
    '**Two conditions only:** they split by mechanism — pressure, or inflammation.',
    '',
    '### Acute angle-closure glaucoma',
    '- **Mechanism:** **SUDDEN and COMPLETE occlusion of the anterior chamber ANGLE by IRIS tissue**.',
    '- **Frequency:** an **UNCOMMON** form of glaucoma. **The condition is SERIOUS.**',
    '- **⚠️ The contrast that is always tested:** the **more common CHRONIC OPEN-ANGLE glaucoma causes NO REDNESS of the eye.**',
    '- **The four findings together:** **irregular corneal reflection and a HAZY cornea** (oedema) · **MID-DILATED pupil** · **iris displaced anteriorly with a SHALLOW chamber** · **elevated IOP**. Those four are **diagnostic**.',
    '',
    '### Iritis — more strictly iridocyclitis',
    '- **What it is:** inflammation of the **iris alone**, or of the **iris and CILIARY BODY**.',
    '- **The sign:** **CILIARY FLUSH**, often.',
    '- **⚠️ Its status:** *“a serious condition that requires attention”* — the book’s own words.',
    '',
    '### Ciliary flush, defined',
    '- **What it is:** **DILATED DEEP conjunctival and EPISCLERAL vessels**, **adjacent and CIRCUMFERENTIAL to the corneal LIMBUS**, casting a **VIOLET hue**.',
    '- **Why deep vessels mean deep disease:** the anterior ciliary vessels pierce the sclera near the limbus to supply iris and ciliary body, so inflammation there congests them *(not in course material)*.',
    '',
    '*How it is read at the bedside, and against what, is in the signs chapter. The full angle-closure account is `op-glauc` (`glc-11` to `glc-14`); cells and flare are in `op-va` (`va-14`); uveitis in full is `op-uvea`’s.*',
    '',
    'Src: L37 lines 183–202'
  ].join('\n'),
  qs: []
},

{
  id: 'red-9', w: 'must',
  h: 'Acute and NOT painful — the conjunctiva alone',
  body: [
    '**The rule:** a non-painful red eye developing within days should have **NO inflammation of the globe** and should be **limited to the conjunctiva**. **It is non-urgent** — unless the patient cannot feel the eye.',
    '',
    '### Subconjunctival haemorrhage',
    '- **What it is:** **blood in the POTENTIAL SPACE between the conjunctiva and the sclera**.',
    '- **⚠️ Looks alarming, is not:** **rarely vision threatening — UNLESS associated with significant ocular trauma.**',
    '- **Symptoms:** some **ocular irritation**, but **no significant pain**. **Vision should be UNAFFECTED.**',
    '- *Defect note: line 220 allows irritation without significant pain, line 638 allows “mild tenderness … resolves in 1 or 2 days”. Both printed; neither is treated as the error.*',
    '',
    '### Conjunctivitis',
    '- **What it is:** **hyperaemia of the CONJUNCTIVAL blood vessels** — **diffuse dilation**, and **LESS intense in the PERILIMBAL region**.',
    '- **Frequency:** **common, and often not serious.**',
    '',
    '### The causes, in five groups',
    '- **Bacterial · viral · allergic.**',
    '- **Chemical irritants** — **including eyedrops**.',
    '- **Mechanical irritation** — eyelashes, foreign bodies.',
    '',
    '### ⚠️ History decides the type',
    '',
    '|Clue|Points to|',
    '|---|---|',
    '|**A cold, or contact with others with the same symptoms**|**VIRAL** — and the **eyelids are often stuck together in the morning**|',
    '|**ITCHING**|**ALLERGIC** — to topical remedies or environmental exposure|',
    '|**CHRONIC and UNILATERAL**|**evaluate for CHLAMYDIA**|',
    '|**HYPERPURULENT**|**GONORRHOEA — and it is an URGENT condition**|',
    '',
    '- **⚠️ The surprise:** **bacterial conjunctivitis is RELATIVELY UNCOMMON** — the opposite of how it is usually treated.',
    '',
    '*Conjunctivitis as a disease — the types in full, membranes, the neonatal forms, trachoma — is `op-conj`’s (`L6`), which is owed a visual read. Chemical BURNS are `op-trauma`’s (`trm-1` to `trm-5`); the irritant here is a cause of conjunctivitis, not a burn.*',
    '',
    'Src: L37 lines 203–244'
  ].join('\n'),
  qs: []
},

{
  id: 'red-10', w: 'must',
  h: 'Chronic and irritated — the tear film, and what breaks it',
  body: [
    '- **The principle:** ocular irritation with a red eye can be due to **ANY process that disrupts a SMOOTH TEAR FILM across the surface of the cornea**.',
    '- **Urgency —** the chronic red eye is, in general, **NON-URGENT**.',
    '',
    '### The systematic examination — three surfaces, in order',
    '- **The conjunctival surface:** examine for **any source of irritation, including foreign bodies**.',
    '- **The meibomian glands:** assess **function** — is an **adequate LIPID LAYER** being produced for the tear film?',
    '- **The corneal surface:** examine for **evidence of KERATOPATHY, using fluorescein**.',
    '',
    '### Keratoconjunctivitis sicca',
    '- **Also called:** **dry eye**.',
    '- **Definition:** a disorder resulting from **TEAR DEFICIENCY or DYSFUNCTION**.',
    '- **What it causes:** **pain · blurred vision · light sensitivity (photophobia) · ocular redness.**',
    '- **Its discharge, when there is one:** **scant, white and STRINGY** — shared with allergic conjunctivitis.',
    '',
    '*The autoimmune causes of dry eye — Sjögren, SLE and rheumatoid arthritis, the sarcoid lacrimal infiltration and the rheumatoid corneal-melt risk — are written in `op-systemic` (`sys-9`). The tear film’s own three layers are `op-lac`’s (`L9`).*',
    '',
    '### Pterygium',
    '- **What it is:** an abnormal growth — a **TRIANGULAR FOLD of tissue** that **advances progressively OVER THE CORNEA**, **usually from the NASAL side**.',
    '- **Appearance:** a **wedge-shaped growth of VASCULARISED conjunctiva** extending onto the cornea.',
    '- **Seriousness:** **usually not serious**; **localised conjunctival inflammation may be associated**.',
    '- **⚠️ The first sign:** may be a localised **CHRONIC CONJUNCTIVITIS**, not a visible wedge.',
    '- **Risk:** **ULTRAVIOLET exposure**, and it is **more frequent in TROPICAL climates**.',
    '- **⚠️ Surgery:** **excision is indicated if it starts to ENCROACH ON THE VISUAL AXIS** — not before.',
    '',
    'Src: L37 lines 245–275, 463–470'
  ].join('\n'),
  qs: []
},

{
  id: 'red-11', w: 'must',
  h: 'Chronic WITHOUT irritation, and the adnexa',
  body: [
    '- **The mechanism:** a **CONGESTIVE process** that has **decreased flow of blood in the veins that DRAIN THE ORBIT** — the eye is red because it cannot empty, not because it is inflamed.',
    '',
    '### Adnexal disease — three territories',
    '**The adnexa:** the **EYELIDS**, the **LACRIMAL apparatus** and the **ORBIT**.',
    '',
    '### Eyelid — inflammation and lesions',
    '- **Inflammations:** **stye (hordeolum)** and **blepharitis**.',
    '- **Lesions:** **basal cell carcinoma · squamous cell carcinoma · molluscum contagiosum**.',
    '- **⚠️ Referral:** eyelid inflammations and lesions are referred **NON-urgently**.',
    '',
    '### Eyelid — abnormal FUNCTION, which is the urgent group',
    '- **The mechanism:** **ocular EXPOSURE and CORNEAL BREAKDOWN.**',
    '- **Causes:** **Bell palsy · thyroid eye disease.**',
    '- **Lagophthalmos:** **poor eyelid CLOSURE**, also **common in COMATOSE patients**.',
    '- **⚠️ What lagophthalmos ends in:** **exposure keratitis → corneal ULCERATION → BLINDNESS.**',
    '- **Entropion:** the lid **turns IN**, the **lashes contact the globe** — **pain, photophobia, tearing, redness**.',
    '- **⚠️ Referral:** a red eye from an **eyelid MALPOSITION** is discussed with the ophthalmologist **URGENTLY** — the opposite of the lesion group.',
    '',
    '### Lacrimal and orbit',
    '- **Lacrimal causes:** **dacryocystitis** and **canaliculitis**.',
    '- **Dacryocystitis:** an **obvious, RAISED, ERYTHEMATOUS MASS** — acute inflammation of the **lacrimal SAC**, usually secondary to **nasolacrimal duct obstruction**. **Purulent discharge may be extruded from the puncta by MASSAGE over the sac.**',
    '- **Orbital causes:** **orbital inflammations such as thyroid eye disease**, and **vascular lesions in the orbit**.',
    '- **⚠️ Referral:** **any lacrimal or orbital disease causing a red eye is referred URGENTLY.**',
    '',
    '*Lid disease in full is `op-lid`’s (`L5`), the lacrimal system `op-lac`’s (`L9`) — both owed visual reads. Thyroid eye disease and proptosis in full are in `op-orbit`; preseptal and orbital cellulitis are there too.*',
    '',
    'Src: L37 lines 276–311'
  ].join('\n'),
  qs: []
}

    ]
  },

  /* ══════════════════════════ CHAPTER 2 of 2 ══════════════════════════ */
  'op-red-mgmt': {

    intro: 'The findings, not the redness, separate a benign red eye from a blinding one. Six symptoms and eleven signs, nine of them flagged as danger signals. What is left may be treated in primary care — with two classes of drop that must never be handed out.',

    sections: [

{
  id: 'rdm-1', w: 'must',
  h: 'Symptoms of a red eye — six, and four are danger signals',
  body: [
    '**⚠️ marks a DANGER SIGNAL — the book flags these four with a red symbol.**',
    '',
    '### ⚠️ Blurred vision',
    '- **Meaning:** it **often indicates SERIOUS ocular disease**.',
    '- **The one benign version:** **blurring that IMPROVES WITH BLINKING** suggests **discharge or mucus on the ocular surface**.',
    '',
    '### ⚠️ Severe pain',
    '- **Points to:** **keratitis · ulcer · iridocyclitis · scleritis · acute glaucoma.**',
    '- **⚠️ The contrast:** conjunctivitis gives **scratchiness or MILD IRRITATION — never severe pain**.',
    '',
    '### ⚠️ Photophobia',
    '- **Definition:** **abnormal sensitivity to light**.',
    '- **What it accompanies:** **IRIDOCYCLITIS** — either **alone**, or **secondary to CORNEAL inflammation**.',
    '- **⚠️ The discriminator:** patients with **conjunctivitis have NORMAL light sensitivity**.',
    '',
    '### ⚠️ Coloured halos',
    '- **What they are:** **rainbow-like fringes around a point of light**.',
    '- **Cause:** **CORNEAL OEDEMA**, usually from an **abrupt rise in IOP**.',
    '- **⚠️ So:** a **danger signal suggesting ACUTE GLAUCOMA** as the cause of the red eye.',
    '',
    '### Exudation — also called mattering',
    '- **Where it comes from —** **CONJUNCTIVAL or EYELID inflammation**, typically.',
    '- **⚠️ Its value:** it does **NOT occur in iridocyclitis or glaucoma**.',
    '- **The patient’s words:** eyelids **“stuck together” on awakening**.',
    '- **⚠️ The trap:** **corneal ULCER is serious and may or may not have exudate.** Its absence excludes nothing.',
    '',
    '### Itching',
    '- **Nonspecific**, but it **usually indicates ALLERGIC conjunctivitis**.',
    '- *Itch is a histamine-mediated sensation carried on the same afferents as pain, which is why allergy itches and infection burns (not in course material — `histamine` returns zero across all 27 cached decks).*',
    '',
    'Src: L37 lines 331–373'
  ].join('\n'),
  qs: ['opqb-t1-65']
},

{
  id: 'rdm-2', w: 'must',
  h: 'Signs — vision, and the three patterns of redness',
  body: [
    '### ⚠️ Reduced visual acuity',
    '- **Suggests:** **an inflamed or infected CORNEA · IRIDOCYCLITIS · GLAUCOMA.**',
    '- **⚠️ The rule, stated absolutely:** it **NEVER occurs in simple conjunctivitis** unless the **cornea is also involved**.',
    '- **⚠️ Restated as a point to remember:** if acuity is **acutely and significantly reduced, conjunctivitis is EXTREMELY UNLIKELY.**',
    '',
    '### ⚠️ Ciliary flush',
    '- **What it is:** **injection of the DEEP conjunctival and EPISCLERAL vessels SURROUNDING the cornea**.',
    '- **How it looks:** a **faint VIOLACEOUS RING** in which **individual vessels are INDISCERNIBLE to the unaided eye**.',
    '- **When to look:** **most easily seen in DAYLIGHT** — artificial light hides it.',
    '- **⚠️ A danger sign, seen in:** **corneal inflammation · iridocyclitis · acute glaucoma.**',
    '- **⚠️ Usually ABSENT in conjunctivitis.**',
    '',
    '### Conjunctival hyperaemia',
    '- **What it is:** **engorgement of the LARGER, more SUPERFICIAL BULBAR conjunctival vessels**.',
    '- **⚠️ A NONSPECIFIC sign** — it **may be seen in almost ANY of the conditions causing a red eye**.',
    '',
    '### ⚠️ Telling the three patterns apart — the discriminator',
    '',
    '|  |**Conjunctival hyperaemia**|**Ciliary flush**|**Subconjunctival haemorrhage**|',
    '|---|---|---|---|',
    '|**Vessels**|**large, SUPERFICIAL, bulbar**|**deep conjunctival + episcleral**|**none visible — a flat sheet of blood**|',
    '|**Distribution**|**diffuse**|**circumferential at the LIMBUS**|**patchy, sharply bounded**|',
    '|**Perilimbal zone**|**LESS intense there**|**MOST intense there**|—|',
    '|**Individual vessels**|**discernible**|**INDISCERNIBLE**|—|',
    '|**Colour**|red|**VIOLET / violaceous**|bright red|',
    '|**Means**|**nonspecific**|**⚠️ DEEP disease — danger**|benign, unless traumatic|',
    '',
    '*`op-va` (`va-10`) prints the three labels and states that the discrimination belongs here.*',
    '',
    'Src: L37 lines 374–398, 74–75, 233–235, 699–700'
  ].join('\n'),
  qs: []
},

{
  id: 'rdm-3', w: 'must',
  h: 'Signs — the cornea and the pupil',
  body: [
    '### ⚠️ Corneal opacification',
    '- **⚠️ In a red eye:** corneal opacities **ALWAYS denote disease**.',
    '- **How to see them:** **direct illumination with a penlight**, or with a **direct ophthalmoscope (plus lens in the viewing aperture)** outlined **against the RED FUNDUS REFLEX**.',
    '- **Keratic precipitates:** **usually too SMALL to be visible**, occasionally forming **large clumps**. From **iritis or chronic iridocyclitis**.',
    '- **Diffuse haze:** obscuring the pupil and iris markings — **corneal OEDEMA**, and **frequently seen in ACUTE GLAUCOMA**.',
    '- **Localised opacities:** **keratitis or ulcer**.',
    '',
    '### ⚠️ Corneal epithelial disruption — two ways to detect it',
    '- **Occurs in:** corneal **inflammations and trauma**.',
    '- **1 — the moving reflection:** watch the corneal reflection of a **single light source** as the eye moves; **disruptions DISTORT and make it IRREGULAR**.',
    '- **2 — fluorescein:** **diseased or denuded epithelium stains BRIGHT GREEN**.',
    '- **⚠️ The rule:** **fluorescein should ALWAYS be instilled in a red eye** to test the integrity of the epithelium.',
    '',
    '### ⚠️ Pupillary abnormalities',
    '- **Iridocyclitis:** the pupil is **SMALLER than the other eye**, from **reflex SPASM of the iris sphincter**.',
    '- **Also distorted by POSTERIOR SYNECHIAE** — **inflammatory adhesions between the LENS and the IRIS**.',
    '- **Acute glaucoma:** **FIXED, MID-DILATED (5–6 mm) and slightly IRREGULAR**.',
    '- **⚠️ Conjunctivitis does NOT affect the pupil.**',
    '- **⚠️ As a point to remember:** **pupillary inequality or irregularity in a red eye is a danger signal for serious ocular disease.**',
    '- *`L12`, as written in `op-glauc` (`glc-14`), gives the same pupil as “mid-dilated, vertically oval, non-reactive” with no measurement — the 5–6 mm figure is `L37`’s alone.*',
    '',
    '*The fluorescein technique in full is in `op-va` (`va-11`).*',
    '',
    'Src: L37 lines 400–435, 701–704'
  ].join('\n'),
  qs: []
},

{
  id: 'rdm-4', w: 'must',
  h: 'Signs — chamber, pressure, orbit, discharge and node',
  body: [
    '### ⚠️ Shallow anterior chamber',
    '- **⚠️ In a red eye:** it should **ALWAYS suggest ACUTE ANGLE-CLOSURE GLAUCOMA**.',
    '- **How it is estimated —** **SIDE ILLUMINATION with a penlight**, **compared with the unaffected eye**.',
    '',
    '### ⚠️ Elevated intraocular pressure',
    '- **⚠️ IOP —** **UNAFFECTED by the common causes of red eye**, with two exceptions.',
    '- **Iridocyclitis:** IOP **often LOW**. **Glaucoma:** IOP **often ELEVATED**.',
    '- **Measure it when angle closure is suspected.**',
    '',
    '### ⚠️ Proptosis',
    '- **Definition:** **forward displacement of the globe**.',
    '- **SUDDEN proptosis:** **serious ORBITAL or CAVERNOUS SINUS disease**.',
    '- **In CHILDREN:** suspect **orbital INFECTION or TUMOUR**.',
    '- **Commonest cause of CHRONIC proptosis: THYROID disease** — but **orbital mass lesions must be ruled out EARLY**.',
    '- **May be accompanied by:** conjunctival hyperaemia, or **limitation of eye movement**.',
    '- **⚠️ How to detect small amounts:** **tilt the chin UP and look from the chin over the MAXILLA** at the relative corneal position.',
    '',
    '### Discharge — the type is the clue',
    '',
    '|Discharge|Suggests|',
    '|---|---|',
    '|**PURULENT — creamy-white** · **MUCOPURULENT — yellowish**|**BACTERIAL**|',
    '|**SEROUS — watery, clear or yellow-tinged**|**VIRAL**|',
    '|**Scant, WHITE, STRINGY**|**ALLERGIC**, and **keratoconjunctivitis sicca**|',
    '',
    '### Preauricular lymph-node enlargement',
    '- **The node:** **just in front of the auricle**.',
    '- **A frequent sign of VIRAL conjunctivitis**; **usually ABSENT in acute BACTERIAL conjunctivitis**.',
    '- **⚠️ Prominent in:** the **chronic granulomatous conjunctivitides** known collectively as **PARINAUD OCULOGLANDULAR SYNDROME**.',
    '- **CAT-SCRATCH FEVER —** can present with these findings.',
    '',
    '*The penlight eclipse test and the shallow/deep cause table are in `op-va` (`va-14`) and `op-glauc` (`glc-12`); proptosis in full is in `op-orbit`.*',
    '',
    'Src: L37 lines 437–479'
  ].join('\n'),
  qs: []
},

{
  id: 'rdm-5', w: 'must',
  h: 'The master grid — telling the red eyes apart',
  body: [
    '*⚠️ Tables 4-1 and 4-2 are IMAGES and extracted EMPTY. The prose names their content — “significant symptoms and signs in the differential diagnosis of a red eye” — and that is the three sections above, so the rows below are the tables’ own material, read out of the text.*',
    '',
    '|  |**Conjunctivitis**|**Keratitis / ulcer**|**Iridocyclitis**|**Acute angle closure**|**Episcleritis**|**Subconj. haemorrhage**|',
    '|---|---|---|---|---|---|---|',
    '|**Pain**|**scratchiness, mild**|**SEVERE**|**SEVERE**|**SEVERE**|**tender over the area**|**none / mild tenderness**|',
    '|**Photophobia**|**NORMAL light sensitivity**|**marked** (secondary)|**MARKED**|marked|minimal|none|',
    '|**Vision**|**NORMAL**|**REDUCED**|**REDUCED**|**REDUCED**|**not threatened**|**NORMAL**|',
    '|**Coloured halos**|no|no|no|**YES**|no|no|',
    '|**Redness**|**diffuse, less at the limbus**|**CILIARY FLUSH**|**CILIARY FLUSH**|**CILIARY FLUSH**|**SECTORAL, flat**|**flat sheet of blood**|',
    '|**Discharge**|**PROMINENT** — type gives the organism|watery or mucopurulent|watery|watery|**NONE**|none|',
    '|**Cornea**|**clear**|**OPACITY or ULCER**|**keratic precipitates**|**hazy — OEDEMA**|clear|clear|',
    '|**Pupil**|**UNAFFECTED**|normal|**SMALL, irregular** (synechiae)|**FIXED, MID-DILATED 5–6 mm**|normal|normal|',
    '|**IOP**|**normal**|normal|**often LOW**|**ELEVATED**|normal|normal|',
    '',
    '### ⚠️ The two findings that decide everything',
    '- **REDUCED VISION and a CORNEAL OPACITY.** Neither is produced by conjunctival or episcleral disease.',
    '- **Redness alone decides nothing** — every eye in the table is red.',
    '',
    '### The referral rule',
    '- **⚠️ One or more danger signals:** the patient has a disorder **requiring an ophthalmologist’s attention**.',
    '- **⚠️ Reduced vision:** any red eye with it **is referred, never treated blind**.',
    '- **⚠️ Soft contact lenses:** any red eye in a wearer **is referred**.',
    '',
    '*`op-cornea` (`cor-9`) carries a four-column version of this grid — keratitis, conjunctivitis, episcleritis, dry eye — from the same source lines. The columns added here are **iridocyclitis** and **acute angle closure**.*',
    '',
    'Src: L37 lines 312–330, 331–479, 705–706; L1,2 lines 629–641 (cited only, not counted)'
  ].join('\n'),
  qs: ['opqb-t1-65']
},

{
  id: 'rdm-6', w: 'high',
  h: 'Systemic conditions with a red eye',
  body: [
    '**The principle:** systemic conditions **may include ocular involvement**, and primary care should expect it.',
    '',
    '### Upper respiratory tract infection and fever',
    '- **URTI with fever —** may be associated with **CONJUNCTIVITIS**.',
    '- **⚠️ Particularly ADENOVIRUS TYPE 3 and TYPE 7** — **both cause PHARYNGOCONJUNCTIVAL FEVER**.',
    '- **Allergic conjunctivitis** may be associated with the **SEASONAL RHINITIS of HAY FEVER**.',
    '',
    '### Erythema multiforme',
    '- **What it is:** an **ACUTE, IMMUNE-MEDIATED** condition with **distinctive TARGET-LIKE LESIONS on the skin**.',
    '- **The mucosae:** lesions often accompanied by **EROSIONS or BULLAE** involving **oral, genital and/or OCULAR mucosae**.',
    '- **⚠️ What it can do to the eye:** **SEVERE CONJUNCTIVITIS · IRREVERSIBLE CONJUNCTIVAL SCARRING · BLINDNESS.**',
    '',
    '### Stevens–Johnson syndrome and toxic epidermal necrolysis',
    '- **What they are:** **SEVERE MUCOCUTANEOUS REACTIONS**, triggered by **MEDICATIONS or INFECTIONS**.',
    '- **The skin:** **extensive NECROSIS and DETACHMENT of the EPIDERMIS**.',
    '- **The eye:** **severe conjunctivitis with PURULENT discharge** · **corneal ULCERATION is FREQUENT** · **anterior UVEITIS or PANOPHTHALMITIS may occur**.',
    '- **Presenting symptoms:** **pain and photophobia** are common.',
    '- **⚠️ The late sequela: SYMBLEPHARON** — scarring with **adhesions between the EYELIDS and the CONJUNCTIVA**.',
    '- **⚠️ Referral:** these conditions are **attended to by an ophthalmologist**.',
    '',
    '*Panophthalmitis, and the endophthalmitis / panophthalmitis / cellulitis map, are written in `op-orbit-mass` (`orb-12`). Symblepharon after chemical injury is in `op-trauma`.*',
    '',
    'Src: L37 lines 480–507'
  ].join('\n'),
  qs: []
},

{
  id: 'rdm-7', w: 'know',
  h: 'Laboratory diagnosis — when it is skipped, and when it is not',
  body: [
    '### Why most cases are managed without it',
    '- **Most mild conjunctivitis —** managed **WITHOUT laboratory assistance**.',
    '- **The book’s own framing:** this is **“a compromise with ideal management”**, justified by the **economic waste** of routine smears and cultures in **so common and benign a disease**.',
    '- **What is done instead:** a **presumptive clinical diagnosis** of bacterial conjunctivitis, then **broad-spectrum topical ophthalmic antibiotic** treatment.',
    '',
    '### ⚠️ The three situations that DO need the laboratory',
    '- **⚠️ No improvement after 2 DAYS of antibiotic** — refer for **confirmation of the diagnosis and laboratory studies**.',
    '- **⚠️ HYPERPURULENT conjunctivitis —** with **COPIOUS purulent discharge**: **conjunctival CULTURES and ophthalmologic consultation**, for a possible **GONOCOCCAL** cause. **Gonococcal hyperpurulent conjunctivitis is a serious, potentially BLINDING disease.**',
    '- **Doubtful cases** — smears of exudate or **conjunctival SCRAPINGS** confirm the clinical impression.',
    '',
    '### ⚠️ The cytology — three cells, three causes',
    '',
    '|Finding|Type|',
    '|---|---|',
    '|**POLYMORPHONUCLEAR cells and BACTERIA**|**BACTERIAL**|',
    '|**LYMPHOCYTES**|**VIRAL**|',
    '|**EOSINOPHILS**|**ALLERGIC**|',
    '',
    '- **Cultures and antibiotic sensitivity:** useful in **cases RESISTANT to therapy**.',
    '',
    'Src: L37 lines 508–530'
  ].join('\n'),
  qs: []
},

{
  id: 'rdm-8', w: 'must',
  h: 'Blepharitis — slow to treat, and easy to mistake',
  body: [
    '- **What it is:** **inflammation of the EYELID**.',
    '- **⚠️ The expectation to set:** response to treatment is **“frustratingly slow”, and RELAPSES ARE COMMON**.',
    '',
    '### Where the inflammation sits',
    '- **ANTERIOR lid:** **STAPHYLOCOCCAL** blepharitis.',
    '- **POSTERIOR lid:** blepharitis **secondary to ACNE ROSACEA**.',
    '',
    '### Treatment — four considerations',
    '',
    '|Consideration|What to do|',
    '|---|---|',
    '|**Eyelid hygiene**|**WARM COMPRESSES** — tap water on a clean washcloth, **3–5 minutes**, **each morning and before bedtime**|',
    '|**Oily eyelids**|follow with **eyelid SCRUBS — dilute baby shampoo, 2 DROPS in 2 OZ of water**|',
    '|**Staphylococcal infection**|**BACITRACIN or ERYTHROMYCIN ointment** to the **lid MARGIN at NIGHT for 1 WEEK**|',
    '|**Acne rosacea / meibomian gland dysfunction**|**DOXYCYCLINE 100 mg TWICE daily**, tapered to **once daily for 2 MONTHS or longer**; **artificial tears 4–8 times a day**|',
    '',
    '- **Scalp seborrhoea:** **ANTIDANDRUFF SHAMPOOS** improve **seborrhoeic blepharitis** — dry flaky lashes and red lid margins.',
    '- **Staphylococcal appearance:** inflamed, swollen lids that **may ULCERATE**; the **oily discharge BINDS the lashes** and may condense into a **COLLARETTE around a lash**.',
    '',
    '### ⚠️ Contact dermatitis — the masquerader',
    '- **It can masquerade as blepharitis.** The diagnosis is made by a **careful history of lid redness associated with APPLICATION OF MEDICATION**.',
    '- **⚠️ The named example: BRIMONIDINE**, a glaucoma drop, produces a red eye with **erythematous, swollen lids of a dry “LEATHERY” texture**.',
    '- **Any ocular medication or COSMETIC** can do the same.',
    '- **⚠️ The test:** stopping the product improves symptoms **within 48 HOURS**, though **healing may take up to 2 WEEKS**.',
    '',
    '### ⚠️ The referral that is not about treatment',
    '- **CHRONIC, UNILATERAL blepharitis is referred** to rule out a **malignant process — SEBACEOUS CELL or SQUAMOUS CELL CARCINOMA**.',
    '- **Also referred:** cases needing **prolonged treatment**, and those where the **expected response does not occur promptly**.',
    '',
    '*Blepharitis as lid disease, and the lid tumours, belong to `op-lid` (`L5`), which is owed a visual read.*',
    '',
    'Src: L37 lines 531–598'
  ].join('\n'),
  qs: []
},

{
  id: 'rdm-9', w: 'high',
  h: 'Stye and chalazion',
  body: [
    '### Stye — hordeolum',
    '- **What it is:** an **ACUTE, usually STERILE inflammation of the GLANDS or HAIR FOLLICLES** in the eyelid.',
    '- **⚠️ “Usually sterile” is the surprise** — the word is the book’s own.',
    '',
    '### External vs internal — categorised by WHERE the inflammation sits',
    '',
    '|  |**External hordeolum**|**Internal hordeolum**|',
    '|---|---|---|',
    '|**Structure**|**hair follicles, or the glands of ZEIS or MOLL**|**a MEIBOMIAN gland**|',
    '|**Points toward**|**the SKIN**|**internally, toward the CONJUNCTIVA**|',
    '|**Appearance**|large acute swelling, **red and PAINFUL**|discrete circumscribed inflammation, **hyperaemic conjunctiva**|',
    '',
    '### Chalazion',
    '- **What it is:** a **CHRONIC inflammation of a MEIBOMIAN gland** — a **chronic GRANULOMATOUS** lesion.',
    '- **How it arises:** **spontaneously**, or **FOLLOWING a hordeolum**.',
    '- **The mass:** **large and NON-TENDER** — tenderness is what separates it from a stye.',
    '',
    '### ⚠️ The biopsy rule',
    '- **A persistent or recurring lid mass:** undergoes **BIOPSY**.',
    '- **Why:** it may be a rare **SEBACEOUS GLAND CARCINOMA, SQUAMOUS CELL CARCINOMA or BASAL CELL CARCINOMA** rather than a benign chalazion.',
    '',
    '### Treatment — the four mainstays',
    '- **Warm compresses to the eyelid — 4 TIMES A DAY for 3–5 MINUTES.**',
    '- **Massage the eyelid and lash line** to encourage the glands to open and drain.',
    '- **Topical ocular ANTIBIOTIC OINTMENT** to the lash line and over the area **if there is tenderness and infection is suspected**. **Oral antibiotics RARELY**, for secondary bacterial infection.',
    '- **⚠️ Incision and curettage:** refer if there is **NO RESOLUTION IN 3–4 WEEKS**.',
    '',
    'Src: L37 lines 599–628'
  ].join('\n'),
  qs: []
},

{
  id: 'rdm-10', w: 'must',
  h: 'What primary care actually treats',
  body: [
    '### Subconjunctival haemorrhage',
    '- **⚠️ In the ABSENCE of blunt trauma:** it **requires NO TREATMENT and, unless RECURRENT, NO EVALUATION**.',
    '- **Causes:** a **sudden increase in ocular VENOUS PRESSURE** — **coughing · sneezing · vomiting · vigorous rubbing of the eye**.',
    '- **⚠️ Many occur DURING SLEEP**, which is why the patient so often cannot say how it happened.',
    '- **Course:** some **mild tenderness at onset**, resolving **in 1 or 2 days**.',
    '',
    '### ⚠️ The two things that must still be done',
    '- **⚠️ If RECURRENT — consider an underlying BLEEDING DISORDER.**',
    '- **⚠️ MEASURE THE BLOOD PRESSURE** — **marked elevation can cause subconjunctival haemorrhage**.',
    '',
    '### Conjunctivitis — treatment',
    '- **⚠️ Viral conjunctivitis:** there is **NO specific medicinal treatment**. Patients are instructed in **precautions to prevent contagion**.',
    '- **Cool compresses** periodically through the day.',
    '- **Artificial tears** if irritation occurs.',
    '- **Antibiotic eyedrops — TRIMETHOPRIM/SULFACETAMIDE or FLUOROQUINOLONES, 4–6 TIMES A DAY — IF bacterial infection is suspected.**',
    '- **Minimise spread:** **wash hands after touching eye secretions · do not share towels.**',
    '',
    '### ⚠️ Corticosteroids in conjunctivitis',
    '- **Corticosteroids —** **LIMITED USE** in the treatment of **INFECTIOUS conjunctivitis**.',
    '- **⚠️ Combination drops:** antibiotic + corticosteroid, used **ONLY under the close observation of an ophthalmologist**.',
    '',
    '*Defect note: Table 4-3, described as “a summary of instructions for patients to follow”, is an image and extracted EMPTY. Unlike Tables 4-1 and 4-2 its content is not restated anywhere in the prose, so it is a genuine loss and is recorded rather than invented.*',
    '',
    'Src: L37 lines 531–545, 629–659'
  ].join('\n'),
  qs: []
},

{
  id: 'rdm-11', w: 'must',
  h: 'Therapeutic warnings — the two drops that blind',
  body: [
    '**Two classes:** both carry serious health risks, and both are named in the chapter’s own objectives.',
    '',
    '### ⚠️ Topical anaesthetics — never for prolonged analgesia',
    '**The ban:** they must **NEVER be prescribed for prolonged analgesia** in ocular inflammations and injuries. Three reasons.',
    '- **Healing —** they **INHIBIT GROWTH AND HEALING of the corneal epithelium**.',
    '- **Allergy —** **SEVERE ALLERGIC REACTIONS may result from instillation**, although rare.',
    '- **The blink reflex:** corneal **ANAESTHESIA eliminates** it, exposing the cornea to **dehydration, injury and infection**.',
    '',
    '### ⚠️ Topical corticosteroids — three serious ocular side effects',
    '- **1 — Infection potentiated:** **both HERPES SIMPLEX keratitis and FUNGAL keratitis are MARKEDLY POTENTIATED** by corticosteroids. **They MASK the symptoms of inflammation**, so the patient **“feels” better while the cornea may be MELTING or PERFORATING**.',
    '- **2 — Cataract:** **PROLONGED use, locally OR systemically, often leads to CATARACT FORMATION.**',
    '- **3 — Raised IOP:** **local application for 2–6 WEEKS may elevate IOP in approximately ONE THIRD of the population.** The **rise may be SEVERE in a small percentage**, and **OPTIC NERVE DAMAGE and PERMANENT LOSS OF VISION can occur**.',
    '',
    '### ⚠️ The rule that follows',
    '- **The combination:** a corticosteroid plus an antibiotic carries **THE SAME RISK**.',
    '- **⚠️ The rule:** topical corticosteroids, alone or combined, should **NOT be administered to the eye BY A PRIMARY CARE PROVIDER**.',
    '- **When they are right —** under the **CLOSE SUPERVISION of an ophthalmologist**.',
    '',
    '*The steroid-responder figure is printed only here — `op-glauc` carries no proportion and `op-cat` no latency for steroid cataract. The absolute ban on steroids in epithelial HSV, and topical anaesthetics as a prescribing error, are also in `op-cornea` (`cor-11`).*',
    '',
    'Src: L37 lines 660–694'
  ].join('\n'),
  qs: []
}

    ]
  }

};
