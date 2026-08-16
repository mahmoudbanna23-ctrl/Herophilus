/* op-cornea + op-cornea-surg — "Cornea", Ophthalmology. Written 2026-08-16
   under START-HERE.md §14 (slide-density revision notes), §14.1 (budget),
   §14.3a (layout) and §14.5 (deferral register), plus
   content\ophtho\theory-plan.md. Shape copied from
   content\ophtho\theory-drafts\op-orbit.draft.js and
   content\peds\theory-drafts\genetics.draft.js.

   ⚠️ THIS FILE HOLDS TWO CHAPTERS. The second key, `op-cornea-surg`, is NEW
   and must be registered in app\data\modules.js by the hub — this file does
   not touch that shared file.

     `op-cornea`       suggested title "Cornea, keratitis and corneal trauma"
     `op-cornea-surg`  suggested title "Corneal ectasia, dystrophies and surgery"

   Naming follows the module's own descriptive style, e.g. `op-orbit` =
   "Orbit, thyroid eye disease and cellulitis" / `op-orbit-mass` = "Orbital
   emergencies, tumours and the socket".

   ============================================================================
   DECK LABELS USED IN THE Src LINES:
     L15,16 = L15,16) Cornea.txt — "THE CORNEA: Diseases & Surgery",
              Prof. Dr. Amr Ahmed Said Radwan. 43 content slides.
              THIS FILE'S ONLY COUNTED DECK, split across the two chapters.
     L7,8   = L7,8) Refractive errors.txt                    — cited only
     L37    = L37) Red Eye.txt (a BOOK CHAPTER, not a lecture) — cited only
     L3,4   = L3,4) Clinical- Ocular examination.txt          — cited only
     L25    = L25) Trauma I.txt                               — cited only
     L18    = L18) Cataract II.txt                            — cited only
     L33,34 = L33,34) The White Eye.txt                       — cited only

   ✅ CACHE INTEGRITY — A CLEAN POSITIVE, CHECKED RATHER THAN ASSUMED.
   `content\ophtho\theory-plan.md` bills this deck at 3,511 words. The cached
   .txt is 3,053 by `wc -w`, so the gap was checked before writing: a fresh
   `pdftotext -layout` of the source PDF returns 3,049 words / 634 lines
   against the cache's 3,053 / 636. The four-word difference is the cache's own
   SOURCE header line. THE CACHE IS THE WHOLE DECK — no render is owed, and
   the plan's 3,511 is a stale figure that should be corrected there. The deck
   is TEXT-SUFFICIENT and was written from the cache alone.

   ============================================================================
   BUDGET — §14.1: budget = max(summed lecture words, 25 x linked questions),
   floor 600, cap 3,000. MEASURED FROM DISK, BY LINE RANGE (§14.1(a)).

   Non-lecture lines, excluded from BOTH chapters:
     lines   1–25  75 w — transcriber's SOURCE line, title slide, outline slide
     lines 623–629 64 w — the bibliography bullets (Kanski, Allen & Rowe, AAO
                          BCSC, NICE, EuroTimes). A reading list, not teaching
     lines 630–637 24 w — "Thank You" and the author's affiliation
                        = 163 w excluded

   TERM 1 — `op-cornea` (part 1):
     lines  26–65   182 w — Section 1 divider, anatomy overview, five layers
     lines  66–237  742 w — Section 2 entire: bacterial, fungal, HSV, HZO,
                            Acanthamoeba, the four-way keratitis differential
     lines 497–528  209 w — Clinical Scenarios 1 (contact-lens ulcer) and 2
                            (dendritic ulcer)
     lines 546–566  138 w — Corneal Trauma: approach & management
     lines 567–580   52 w — "Common Prescribing Errors", the slide's top two
                            boxes (steroids in bacterial keratitis, steroids in
                            epithelial HSV)
     lines 581–586   22 w — the SAME slide's bottom-LEFT box only (topical
                            anaesthetics). The bottom-RIGHT box on those same
                            six lines is "Refractive Surgery with Keratoconus"
                            and belongs to part 2 — a two-column extraction, so
                            the 45 words of that range are split 22 / 23
     lines 587–607  104 w — "Summary: Infectious Keratitis at a Glance"
     lines 608–622   48 w — this chapter's half of the Top 10 take-home
                            messages and Red Flags (5 of 10 messages, 2 of 4
                            red flags)
                   = 1,497 w counted
     TERM 2 = 25 x 2 linked questions = 50.
     max(1,497 · 50) = 1,497. Cap does not bind.

   TERM 1 — `op-cornea-surg` (part 2):
     lines 238–335  359 w — Section 3 divider, ectasia, keratoconus, CXL,
                            dystrophies, Fuchs
     lines 336–387  221 w — degenerations, peripheral ulceration, neurotrophic
                            and exposure keratopathy
     lines 388–496  636 w — Section 4 divider, keratoplasty and its four types,
                            graft rejection, refractive surgery selection, the
                            four laser procedures, ectasia screening
     lines 529–545  106 w — Clinical Scenario 3 (Fuchs, morning blur)
     lines 581–586   23 w — the bottom-RIGHT prescribing-errors box
     lines 608–622   48 w — this chapter's half of the Top 10 and Red Flags
                   = 1,393 w counted
     TERM 2 = 25 x 3 linked questions = 75.
     max(1,393 · 75) = 1,393. Cap does not bind.

   RECONCILIATION: 1,497 + 1,393 + 163 excluded = 3,053 = the file. Exact.
   ⚠️ NO WORD OF THIS DECK IS BILLED TWICE, per §14.1(b).

   DIAGRAM-DECK CHECK (§14.1). 3,053 words over 429 non-blank lines = 7.1
   w/line, far above the ~2 that marks a labelled-diagram deck. This is a
   prose-bullet deck; TERM 1 is trustworthy and the question term is
   irrelevant here (5 questions across 43 slides).

   ============================================================================
   ⚠️⚠️ ENTITY FLOOR, COUNTED BEFORE WRITING — AND IT IS WHY THIS IS TWO
   CHAPTERS. §14.1's `ent-dysph` rule: say the overrun up front.

   The deck is a SURVEY DECK of the most extreme kind measured in this project.
   It teaches roughly SIXTY-FIVE distinct entities in 3,053 words of bullet
   fragments — about 47 words per entity ON THE SLIDE, which is already BELOW
   the ~90-word floor a note needs (what it is, how it presents, what confirms
   it, what treats it). A note cannot compress a source that is already
   telegraphic; it can only expand it.

   PART 1 FLOOR, costed at planning time:
     ~90 w entities: bacterial keratitis (x4 — risk factors, organisms,
     features + investigation protocol, treatment) · fungal · HSV epithelial ·
     HSV disciform · HSV necrotizing stromal · HSV steroid rule · HZO ·
     Acanthamoeba · corneal abrasion · corneal foreign body + rust ring ·
     chemical injury · penetrating injury · prescribing errors (3 boxes)
       = 16 units x ~90 = 1,440
     FRAMEWORK SLIDES, costed ONE BY ONE (§14.1): anatomy overview + Key
     Numbers panel 130 · bacterial risk-factor list 80 · organism list 90 ·
     investigation protocol 80 · Chemical Burn Priority 4-step 60 = 440
     GRIDS, costed at ROWS x COLUMNS (§14.1): five layers 5x3 = 15 cells ~160 ·
     the deck's own four-way keratitis differential 4x6 = 24 cells ~220 ·
     keratitis-vs-other-red-eyes 5x5 = 25 cells ~180 = 560
     Q-DRIVEN, not on this deck: fluorescein technique + the soft-lens rule +
     Seidel ~130
     = ~2,570 realistic floor, tables compressing it toward ~2,150.

   PART 2 FLOOR:
     ~90 w entities: corneal ectasia group · keratoconus (x2, diagnosis and
     management ladder) · CXL · Fuchs (x1.5) · arcus senilis · band keratopathy
     · pterygium · pinguecula · Salzmann · neurotrophic keratopathy · exposure
     keratopathy · marginal keratitis · Mooren ulcer · PUK · keratoplasty
     overview + indications/contraindications (x1.5) · graft rejection ·
     refractive surgery selection · post-LASIK ectasia
       = 20 units x ~90 = 1,800
     GRIDS: must-know dystrophies 5x4 = 20 cells ~210 · keratoplasty PKP/DALK/
     DSAEK/DMEK 4x5 = 20 cells ~220 · LASIK/PRK/FemtoLASIK/SMILE 4x5 = 20
     cells ~220 = 650
     Q-DRIVEN, from L7,8 not this deck: irregular astigmatism, the keratometry-
     vs-topography contrast, the RGP mechanism and the correction ladder ~180
     = ~2,630 realistic floor, tables compressing it toward ~2,400.

   COMBINED FLOOR ~4,100–5,200 words = 17–21 printed pages at §14.1's
   `pages ≈ words ÷ 240`. **THE 13-PAGE HARD SHAPE CANNOT HOLD ONE CHAPTER
   HERE.** `op-orbit` printed 14 pages from a 3,222-word deck and had to be
   split afterwards; this deck is comparable and the entity count is higher.
   SPLIT DECIDED BEFORE THE FIRST SECTION WAS WRITTEN.

   ⚠️ EXPECTED OVERRUN, STATED IN ADVANCE: part 1 ~+44 % on its 1,497 TERM 1,
   part 2 ~+72 % on its 1,393. Both overruns are the entity count, not padding
   — the deck spends 47 words where a note needs 90. Each half is projected
   under 11 printed pages, which is the number that governs (§14.1).

   ============================================================================
   ⚠️ THE SEAM WAS CHOSEN BY THE QUESTIONS, NOT THE WORD COUNT.
   Three seams were considered and the straddlers counted for each:

     SEAM A — after deck Section 2 (anatomy + infectious | non-infectious +
       surgery), with the trauma slide moved forward into part 1.
       STRADDLERS: 0.
         · Q51 fluorescein   -> part 1 only
         · Q62 keratitis     -> part 1 only
         · Q93 pre-LASIK     -> part 2 only
         · Q99 topography    -> part 2 only (topography is taught ONLY under
           keratoconus and refractive screening, both part 2)
         · Q100 RGP          -> part 2 only
       ✅ CHOSEN.

     SEAM B — after deck Section 3 (anatomy + infectious + non-infectious |
       surgery only). STRADDLERS: 3.
         · Q93's answer is in part 2 but its discriminator — that topography
           exists to exclude keratoconus — would sit in part 1.
         · Q99's answer IS topography, taught on both sides of this seam.
         · Q100's entity (irregular astigmatism from a scar or a cone) would
           sit in part 1 while its correction sits in part 2.
       REJECTED. Keratoconus and refractive surgery CANNOT be separated: the
       whole of pre-LASIK screening is a keratoconus hunt, and post-LASIK
       ectasia is iatrogenic keratoconus treated by the keratoconus operation.

     SEAM C — a three-way split (anatomy+infection | non-infectious |
       surgery). REJECTED on §14.1's measured cost: each new chapter prints its
       own full-page cover, so a third chapter buys ~1 more page for nothing —
       and it would recreate seam B's 3 straddlers at its second cut.

   ⚠️ ONE DELIBERATE MOVE ACROSS THE DECK'S OWN STRUCTURE: the "Corneal
   Trauma" slide sits in the deck's Section 4 (Surgery) and is written into
   PART 1. Abrasion, foreign body, rust ring and chemical burn are acute
   surface disease read with fluorescein, next to the infective ulcer — not
   keratoplasty. No question is affected either way. Its 138 words are counted
   to part 1, matching where it is written.

   PROJECTED BALANCE: part 1 ~9 printed pages, part 2 ~10. Both clear of the
   13-page hard shape. Section ids run cor-1 … cor-11 (part 1) and cor-12 …
   cor-24 (part 2) — UNIQUE ACROSS BOTH HALVES.

   ============================================================================
   QUESTIONS — all five linked, each where its ANSWER is taught:
     opqb-t1-51  soft lenses stain with fluorescein   -> cor-2
     opqb-t1-62  pain+photophobia+opacity+low vision  -> cor-3, cor-9
     opqb-t2-93  topography + pachymetry before LASIK -> cor-21, cor-23
     opqb-t2-99  scar -> irregular astigmatism -> topography -> cor-12, cor-24
     opqb-t2-100 RGP lens for irregular astigmatism   -> cor-24

   ============================================================================
   GAPS — ANSWERED AND TAGGED, NOT DECLARED (§4a). ⚠️ EVERY ITEM WAS GREPED
   ACROSS ALL 27 CACHED OPHTHALMOLOGY DECKS BEFORE BEING CALLED A GAP.

   ✅ FOUR I EXPECTED TO TAG AND DID NOT — the "read the slide first" rule
   paying for the sixteenth time:

     1. THE KERATITIS-VS-OTHER-RED-EYES DISCRIMINATION (Q62). Not a gap.
        `L37) Red Eye` prints it in prose: "Pain may indicate keratitis, ulcer,
        iridocyclitis, scleritis, or acute glaucoma. Patients with
        conjunctivitis may complain of a scratchiness or mild irritation but
        not of severe pain"; "Photophobia is an abnormal sensitivity to light
        that accompanies iridocyclitis… Patients with conjunctivitis have
        normal light sensitivity"; and for episcleritis, "no discharge, not
        vision threatening, and often tender over the inflamed area." SOURCED,
        tabulated in cor-9.
     2. THE FLUORESCEIN METHOD (Q51). Not a gap. `L3,4` slide 16 gives it in
        full — the yellow dye, the cobalt blue filter, the moistened
        filter-paper strip touched to the palpebral conjunctiva, the few blinks
        that spread it, and "areas of bright-green staining denote absent or
        diseased epithelium." SOURCED, in cor-2.
     3. THE SEIDEL TEST (cor-2, cor-10). Not a gap. `L25) Trauma I` slide 61
        prints it: apply fluorescein, "dye turns 'clear' when break present as
        aqueous dilutes fluorescein." SOURCED.
     4. THE IRREGULAR-ASTIGMATISM DEFINITION AND ITS TREATMENT LADDER
        (Q99, Q100). Not a gap, and NOT in this deck. `L7,8) Refractive errors`
        prints "Irregular (less common) — Corneal scars and Keratoconus" and
        the ladder "Conservative: Glasses (Mild degrees) / Rigid gas permeable
        (RGP) CLs · Surgical: Intracorneal ring (ICR) segments / Keratoplasty."
        SOURCED to L7,8, cited only, register row filed below.

   THE FOUR REAL GAPS, each settled by proving a negative:

     1. SOFT CONTACT LENSES MUST COME OUT BEFORE FLUORESCEIN, BECAUSE THEY
        STAIN PERMANENTLY (Q51 — the chapter's only pure-recall key). `hydrogel`
        returns ZERO hits across all 27 decks. `discolor`/`discolour` return
        only an orbital skin sign and two lens-opacity lines. Decisively,
        `L3,4`'s own not-covered list states in terms: "Contraindications to
        pupil dilatation… and ANY STATEMENT THAT CONTACT LENSES MUST BE REMOVED
        BEFORE FLUORESCEIN. Slide 16 gives the fluorescein method only."
        SUPPLIED AND TAGGED in cor-2, with the rigid-lens exception.
     2. THE KERATOMETRY-VS-TOPOGRAPHY CONTRAST (Q99). `keratometr` returns ONE
        hit in 27 decks — `L18) Cataract II`, where it is the bare parenthesis
        "Keratometry (corneal curvature)" inside the biometry list for IOL
        power. No deck says what keratometry samples or why it fails on an
        irregular surface. `topograph` returns only this deck. The existence
        and cataract use of keratometry are SOURCED to L18 (cited only); the
        contrast — a few central points in two assumed-perpendicular meridians,
        against a whole-surface map — is SUPPLIED AND TAGGED in cor-24.
     3. THE RGP MECHANISM (Q100). L7,8 prints RGP as the answer and never says
        why it works. The tear-film-neutralisation mechanism, and the refractive
        indices it turns on, are SUPPLIED AND TAGGED in cor-24.
     4. RECURRENT CORNEAL EROSION AFTER A FINGERNAIL INJURY (the Q99/Q100
        vignette). `recurrent erosions` is printed in THIS deck, but only as the
        signature of epithelial basement membrane dystrophy — no deck links it
        to a shearing injury. SUPPLIED AND TAGGED as one clause in cor-16.

   Three smaller supplied items, each tagged in place:
     · The reason corneal disease hurts disproportionately (cor-1) — the deck
       states the dense V1 innervation and never draws the inference.
     · Circumcorneal (ciliary) injection as the sign that separates a corneal
       from a conjunctival red eye (cor-9). The deck prints the phrase
       "circumcorneal injection" as a sign of bacterial keratitis; its
       DISCRIMINATING value against diffuse conjunctival redness is supplied.
     · Why alkali burns penetrate — saponification of membrane lipids (cor-10).
       The deck names saponification without explaining it.

   ============================================================================
   ⚠️ CROSS-CHAPTER DEFERRALS AND CITATIONS (§14.5) — named, so each is a
   promise and not a deletion. EVERY ONE WAS CHECKED AGAINST ALL FIVE OF THIS
   CHAPTER'S QUESTIONS FIRST: none tests a deferred half.

   ROWS TO BE COPIED INTO START-HERE.md §14.5 BY THE HUB:

     | `op-cornea` (L37) | The keratitis-vs-conjunctivitis/episcleritis/dry-eye
       discrimination — WRITTEN HERE in cor-9 because Q62 is filed here; the
       full red-eye classification, the acute/chronic split and the other
       causes remain `op-red`'s | `op-red` | written-here, words charged to
       op-red |
     | `op-cornea` (L3,4 s.16) | The fluorescein staining METHOD — written here
       in cor-2 for Q51; the full examination sequence is `op-va`'s | `op-va` |
       written-here, words charged to op-va |
     | `op-cornea` (L25 s.51, s.61) | The Seidel test — written here in cor-2
       and cor-10 as a corneal-integrity test; the open-globe protocol, hyphaema
       grading and the trauma examination sequence are `op-trauma`'s |
       `op-trauma` | written-here, words charged to op-trauma |
     | `op-cornea` (L15,16 "Corneal Trauma") | Chemical burns, Roper-Hall
       grading and penetrating injury are kept here because they are on THIS
       deck's own slide; `op-trauma` still owes the full irrigation protocol,
       the burn sequelae and intraocular foreign body work-up from L25/L26 |
       `op-trauma` | open |
     | `op-cornea` (L15,16 "Corneal Degenerations") | PTERYGIUM and PINGUECULA
       as CONJUNCTIVAL lesions — histology, recurrence rates, conjunctival
       autograft technique. Kept here as the two lines this deck gives them,
       because the pterygium/pinguecula limbal discrimination is a corneal one |
       `op-conj` | open |
     | `op-cornea-surg` (L7,8) | The irregular-astigmatism definition and the
       glasses/RGP/ICR/keratoplasty ladder — WRITTEN HERE in cor-24 because Q99
       and Q100 are filed here; regular astigmatism, the axes, cylindrical
       correction and the rest of refraction are `op-refract`'s | `op-refract` |
       written-here, words charged to op-refract |
     | `op-cornea-surg` (L18) | Keratometry and biometry as the IOL-power
       work-up — one clause used here in cor-24 for contrast; the cataract
       assessment is `op-cat`'s | `op-cat` | cited only |
     | `op-cornea-surg` (L15,16 "Refractive Surgery", "Laser Refractive
       Procedures") | LASIK, PRK, FemtoLASIK and SMILE as REFRACTIVE
       CORRECTION — where each sits against spectacles, contact lenses, phakic
       IOL and clear lens extraction. Kept here as CORNEAL SURGERY, which is
       what this deck teaches them as and what cor-21 to cor-23 need |
       `op-refract` | open |
     | `op-cornea-surg` (L15,16 "Corneal Degenerations") | EXPOSURE KERATOPATHY
       causes — VII nerve palsy, thyroid eye disease, proptosis. Kept here as
       the corneal consequence only; the lid and orbital causes belong to their
       own chapters | `op-lid` / `op-orbit` | open |

   REGISTER ROWS THIS CHAPTER IS OWED BY OTHERS: none found. `op-orbit` and
   `op-pupil` are the only merged ophthalmology chapters and neither defers
   anything to cornea.

   ⚠️ A NOTE FOR `op-ant` "Anterior Segment", which has NO DECK OF ITS OWN
   (theory-plan.md flags this). Its cornea-side material — the five layers,
   corneal transparency and the endothelial pump — is written here in cor-1.
   Whoever writes `op-ant` should cross-reference rather than duplicate.

   ============================================================================
   DEFECT NOTES (§4b — noted, never disputed): NONE. All five keys are sound
   against the decks and none contradicts another. Q99's key is supported by
   the bank's own printed explanation box.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection (§14.2). It lives in each question's
        own `explanation`, one tap away through the `qs` links. Kept ONLY where
        the teaching point IS the discrimination — cor-8 (the four infectious
        keratitides), cor-9 (keratitis vs the other red eyes), cor-14 (the five
        dystrophies), cor-19 (the four keratoplasties), cor-22 (the four laser
        procedures), cor-24 (keratometry vs topography, and the correction
        ladder). Every one of those is a table.
     2. Question ids in body text, teaching voice, bank meta-commentary,
        per-fact citation clauses (one Src line per section).
     3. "Summary: Infectious Keratitis at a Glance" and "Top 10 Take-Home
        Messages" are NOT written as sections. Measured: they are 100 %
        duplication of slides already written — every clue and every first-line
        drug in them appears in cor-3 to cor-8. Their 152 words ARE counted in
        TERM 1, because they are lecture words and because they set the
        lecturer's own emphasis, which drove the `w` weightings below. The
        deck's Red Flags panel is the one part with independent value and its
        four items are folded into cor-3, cor-7, cor-20 and cor-23.
     4. The bibliography (Kanski 9th ed. ch.7–8, Allen & Rowe, AAO BCSC
        Section 8, NICE topography guideline, EuroTimes) — a reading list, not
        teaching. Excluded from the count as well as from the body.
     5. Drug doses are given ONLY where the deck states them — natamycin 5 %,
        amphotericin B 0.15 %, voriconazole 1–2 %, econazole 1 %, aciclovir 3 %
        ointment 5x/day, oral aciclovir 400 mg BD, prednisolone acetate 1 %
        hourly, cyclopentolate 1 %, hypertonic NaCl 5 %. None is invented, and
        no dose is added for a drug the deck names without one.
     6. The pathogenesis of dystrophy at gene level beyond the deck's own
        TGFB1 (granular) and the deposit chemistry it states.
     7. Figure panels. Several slides carry photographs whose captions are used
        for content; panel letters and figure numbering are discarded.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field.

   ⚠️ FINAL MEASUREMENT — see the block at the very END of this file, below the
   closing brace, so that it is physically the last thing edited. §14.1's rule,
   fourteen times proved: the header is a claim, the file is the fact.
   ============================================================================ */

var THEORY_DRAFT = {

  /* ==========================================================================
     PART 1 — `op-cornea`
     Suggested title: "Cornea, keratitis and corneal trauma"
     ====================================================================== */

  'op-cornea': {

    intro: 'Two shapes dominate. First: which organism, from one clue in the history — a lens, a plant, tap water, a dermatome. Second: which sign proves the cornea is the site — reduced vision and a corneal opacity, never the redness.',

    sections: [

{
  id: 'cor-1', w: 'know',
  h: 'The cornea in numbers, and its five layers',
  body: [
    '- **Largest refractive surface of the eye:** supplies **~75 % of total ocular power**.',
    '- **Completely avascular:** fed by **aqueous humour behind** and **tears in front**.',
    '- **Most densely innervated tissue in the body** — **trigeminal nerve, ophthalmic division (V1)**.',
    '- **Transparency is ACTIVE:** the endothelium pumps fluid out continuously.',
    '',
    '*Dense V1 innervation is why any epithelial breach hurts out of all proportion to its size (the inference is not drawn on the slide).*',
    '',
    '### Key numbers',
    '',
    '|Quantity|Value|',
    '|---|---|',
    '|**Refractive power**|**~43 D**|',
    '|**Diameter**|**11.5 mm vertical × 12 mm horizontal**|',
    '|**Central thickness**|**540 µm** (periphery ~700 µm)|',
    '|**Endothelial density**|**2,500–3,000 cells/mm²**|',
    '|**Critical density**|**<700 cells/mm² → oedema risk**|',
    '|**Innervation**|**CN V1**|',
    '',
    '### The five layers',
    '',
    '|Layer|Size|What matters|',
    '|---|---|---|',
    '|**① Epithelium**|**50 µm**, 5–6 cell layers|**regenerates completely in 5–7 days** · tight junctions give barrier function · **stains with fluorescein when disrupted**|',
    '|**② Bowman layer**|**12 µm**|acellular condensed collagen · **does NOT regenerate**|',
    '|**③ Stroma**|**90 % of thickness**|orthogonally arranged collagen lamellae · keratocytes maintain the matrix · **damage → scarring and opacity**|',
    '|**④ Descemet membrane**|—|**basement membrane of the endothelium**|',
    '|**⑤ Endothelium**|**single cell layer**|**Na/K ATPase pump** · **cannot regenerate** · cell density critical|',
    '',
    '- **⚠️ Two layers never come back: Bowman and endothelium.** An epithelial abrasion heals scarless in days; anything deeper scars, and a failed endothelium needs a graft.',
    '',
    'Src: L15,16 "Corneal Anatomy: Overview", "The Five Layers of the Cornea" (lines 32–65)'
  ].join('\n'),
  qs: []
},

{
  id: 'cor-2', w: 'high',
  h: 'Fluorescein — how it is used, what it shows, and the lens that must come out first',
  body: [
    '**Fluorescein:** a **yellow dye that fluoresces GREEN under the cobalt blue filter** of the slit lamp or ophthalmoscope.',
    '',
    '- **It does NOT stain intact epithelium.** It pools where epithelium is **absent or diseased** — so **bright green = an epithelial defect**.',
    '- **Method:** a **sterile filter-paper strip**, moistened with topical anaesthetic, touched to the **palpebral conjunctiva**; a few blinks spread it.',
    '',
    '### ⚠️ Remove SOFT contact lenses first',
    '- **Why:** a soft lens is a **water-swollen hydrogel**. The dye enters the matrix and **stains it permanently**.',
    '- **RIGID lenses are exempt:** non-hydrated, they do not absorb the dye.',
    '- Fluorescein is used **with** a rigid lens deliberately, to read the tear film beneath it.',
    '- *The instruction and its reason are not taken from the course material — no cached deck states either.*',
    '- Not a legal matter and not a source of false corneal staining — the lens is simply ruined.',
    '',
    '### What fluorescein finds',
    '- **Corneal abrasion** — a discrete, sharply bordered green area.',
    '- **Corneal ulcer** — green staining over an infiltrate.',
    '- **Herpetic dendrite** — the branching pattern with terminal buds; essentially diagnostic.',
    '- **SEIDEL TEST:** over a suspected break, concentrated dye is **diluted to CLEAR by leaking aqueous**. A positive Seidel means an **open globe**.',
    '',
    'Src: L3,4 slide 16 (the staining method), L25 slide 61 (Seidel), both cited only; L15,16 "The Five Layers" (epithelium stains when disrupted); the soft-lens rule is supplied and tagged'
  ].join('\n'),
  qs: ['opqb-t1-51']
},

{
  id: 'cor-3', w: 'must',
  h: 'Bacterial keratitis — the risk, the organism, and the one instruction that comes first',
  body: [
    '### Risk factors',
    '- **CONTACT LENS WEAR — commonest in the developed world.**',
    '- **Ocular trauma** — agricultural injury, the developing world.',
    '- **Ocular surface disease** — dry eye, blepharitis, trichiasis.',
    '- **Previous corneal surgery** — **LASIK → atypical mycobacteria**.',
    '- **Systemic immunosuppression, diabetes, vitamin A deficiency.**',
    '- **Neurotrophic or exposure keratopathy.**',
    '',
    '### Organisms',
    '',
    '|Group|Organisms|The clue|',
    '|---|---|---|',
    '|**Gram-positive**|**Staphylococcus aureus · S. pneumoniae · Streptococcus pyogenes**|the default|',
    '|**Gram-negative**|**PSEUDOMONAS AERUGINOSA**|**contact lens — rapid, aggressive**|',
    '|**Neisseria gonorrhoeae**|—|**can penetrate INTACT epithelium**|',
    '|**Moraxella**|—|**elderly, debilitated**|',
    '|**Atypical mycobacteria**|—|**post-refractive surgery**|',
    '|**In the tropics**|—|**fungal must be excluded**|',
    '',
    '### Clinical picture',
    '- **Symptoms — ACUTE onset:** **pain, photophobia, blurred vision, mucopurulent discharge.**',
    '- **Signs:** **epithelial defect with a stromal infiltrate**, plus **circumcorneal injection**.',
    '- **Moderate–severe:** **stromal oedema, HYPOPYON, posterior synechiae, chemosis.**',
    '- **⚠️ Severe: Pseudomonas can produce a DESCEMETOCELE AND PERFORATE WITHIN 24–48 HOURS.**',
    '',
    '### Investigation protocol',
    '- **Corneal scraping** — scalpel no.11 or 21 G needle.',
    '- **Gram stain** — Gram-positive take crystal violet.',
    '- **Culture:** **blood agar, chocolate agar, Sabouraud** (fungal).',
    '- **Confocal microscopy** in vivo for difficult cases.',
    '- **⚠️ ALWAYS SCRAPE BEFORE STARTING ANTIBIOTICS** — printed as the deck’s clinical pearl and repeated as take-home message 1. Once treated, the culture is lost.',
    '',
    '### Treatment',
    '- **First line: intensive topical FLUOROQUINOLONE** — ciprofloxacin or ofloxacin, **hourly on day 1**, then taper.',
    '- **New-generation fluoroquinolones** (moxifloxacin, gatifloxacin) for resistant or Gram-positive organisms.',
    '- **Cycloplegic drops** (cyclopentolate 1 %): reduce **ciliary spasm pain**, prevent synechiae.',
    '- **⚠️ AVOID topical steroids until infection is excluded or controlled.**',
    '- **Admit if:** **central ulcer >2 mm** · threat of perforation · poor compliance · **no improvement in 48 h**.',
    '- **⚠️ Red flag: a central ulcer with hypopyon is URGENT.**',
    '',
    'Src: L15,16 "Bacterial Keratitis" (risk/organisms, features/investigations, treatment), "Clinical Scenario 1", "Red Flags" (lines 72–120, 497–512, 621–624)'
  ].join('\n'),
  qs: ['opqb-t1-62']
},

{
  id: 'cor-4', w: 'high',
  h: 'Fungal keratitis — plant matter, feathery edges, and a culture that takes weeks',
  body: [
    '- **Commoner in tropical and subtropical climates.**',
    '',
    '|Fungus|Who|First-line drug|',
    '|---|---|---|',
    '|**FILAMENTOUS — Aspergillus, Fusarium**|**trauma with PLANT MATTER**|**NATAMYCIN 5 %**|',
    '|**CANDIDA**|**immunocompromised**, contact lens wearers, **topical steroid use**|**AMPHOTERICIN B 0.15 %**|',
    '',
    '- **Alternatives:** **voriconazole 1–2 %**, econazole 1 %.',
    '- **Signs:** **FEATHERY margins and SATELLITE lesions**, a **dry rough surface**, hypopyon.',
    '- **⚠️ Delayed diagnosis:** it **mimics bacterial keratitis**, and the delay is what loses the eye.',
    '- **Culture: SABOURAUD agar, and it may take WEEKS.** Treat on suspicion, do not wait.',
    '- **Onset is SLOWER than bacterial** — that, plus the history, is the discriminator.',
    '',
    'Src: L15,16 "Fungal Keratitis", "Red Eye with Corneal Involvement" (lines 121–134, 219–237)'
  ].join('\n'),
  qs: []
},

{
  id: 'cor-5', w: 'must',
  h: 'Herpes simplex keratitis — three forms, and one absolute steroid rule',
  body: [
    '**The commonest infectious cause of corneal blindness in developed countries.**',
    '',
    '### Epithelial — dendritic / geographic',
    '- **Active virus replication in the epithelium.**',
    '- **Classic DENDRITIC ulcer with TERMINAL BUDS** — the branching pattern is pathognomonic.',
    '- **Fluorescein stains the ULCER BED · Rose Bengal stains the VIRUS-LADEN MARGINS.**',
    '- **Geographic** = a large irregular lesion, the same disease spread out.',
    '- **Treatment: topical antiviral** — **aciclovir 3 % ointment 5×/day** or ganciclovir gel. **Debridement** of infected epithelium is adjunctive.',
    '',
    '### Disciform — stromal immune',
    '- **Immune-mediated ENDOTHELIITIS**, not active replication.',
    '- **Central disc-like corneal OEDEMA**, with **keratic precipitates under the area of oedema**.',
    '- **Treatment: TOPICAL STEROIDS + antiviral cover.** This is the form steroids are for.',
    '',
    '### Necrotizing stromal',
    '- **Active virus AND immune response together.**',
    '- **Progressive stromal necrosis and thinning; may perforate. Very difficult to treat.**',
    '- Combined antiviral + steroid, a careful balance.',
    '',
    '### ⚠️ The rule',
    '- **NEVER use topical steroids in EPITHELIAL herpes keratitis.** They **promote viral replication**, convert a dendrite into a **geographic ulcer**, and can end in **perforation**.',
    '- **Recurrence:** **prophylactic oral aciclovir 400 mg twice daily reduces recurrence by ~50 %.**',
    '',
    'Src: L15,16 "Herpes Simplex Keratitis: Types & Features", "Critical Point", "Clinical Scenario 2" (lines 135–178, 513–528)'
  ].join('\n'),
  qs: []
},

{
  id: 'cor-6', w: 'high',
  h: 'Herpes zoster ophthalmicus — the nose sign, and the 72-hour window',
  body: [
    '**Varicella-zoster reactivation in the CN V1 (ophthalmic) dermatome. 1 in 3 people develop herpes zoster in their lifetime.**',
    '',
    '- **⚠️ HUTCHINSON SIGN:** vesicles on the **TIP or SIDE OF THE NOSE**.',
    '- **Why it matters:** the **nasociliary branch** is involved, and it also supplies the globe — **HIGH risk of ocular complications**.',
    '- **Treatment: oral valaciclovir or famciclovir WITHIN 72 HOURS of rash onset.**',
    '',
    '### Corneal manifestations',
    '- **Punctate epithelial keratitis · PSEUDODENDRITIC ulcer · mucous plaques · disciform keratitis · neurotrophic keratopathy.**',
    '',
    '### Complications',
    '- Epithelial keratitis · stromal/disciform keratitis · **neurotrophic keratopathy** · **scleritis / episcleritis** · **post-herpetic neuralgia**.',
    '- **Long term:** post-herpetic neuralgia and **corneal anaesthesia**, which is how it becomes neurotrophic.',
    '',
    '### ⚠️ HZO pseudodendrite vs HSV dendrite',
    '',
    '|  |**HSV dendrite**|**HZO pseudodendrite**|',
    '|---|---|---|',
    '|Size|larger|**SMALLER**|',
    '|Shape|**branching with TERMINAL BUDS**|**STELLATE, LACKS terminal buds**|',
    '|Nature|true ulcer, stains in the bed|a raised mucous plaque|',
    '',
    'Src: L15,16 "Herpes Zoster Ophthalmicus (HZO)" (lines 179–198)'
  ].join('\n'),
  qs: []
},

{
  id: 'cor-7', w: 'must',
  h: 'Acanthamoeba keratitis — a lens, water, and pain out of all proportion',
  body: [
    '**A PROTOZOAL infection, strongly associated with contact lens wear plus tap water or swimming.**',
    '',
    '### The classic triad',
    '- **A contact lens wearer.**',
    '- **Exposure to water.**',
    '- **SEVERE PAIN OUT OF PROPORTION to the clinical signs.**',
    '',
    '### Signs',
    '- **PERINEURAL infiltrate — EARLY.**',
    '- **RING INFILTRATE — LATE, and PATHOGNOMONIC.**',
    '- **⚠️ Red flag: a ring infiltrate is Acanthamoeba until proven otherwise.**',
    '- **⚠️ Misdiagnosis:** taken initially for **HSV or bacterial keratitis** — the commonest reason it is caught late.',
    '',
    '### Diagnosis and treatment',
    '- **Confocal microscopy** demonstrates the **cysts in vivo**.',
    '- **Culture:** **NON-NUTRIENT AGAR WITH AN E. COLI OVERLAY** — a special medium that must be asked for by name.',
    '- **Treatment: PHMB (polyhexamethylene biguanide) + propamidine isethionate, HOURLY, FOR WEEKS.** Treatment is prolonged.',
    '- **Prevention: never use tap water with contact lenses; always use lens solution.**',
    '',
    'Src: L15,16 "Acanthamoeba Keratitis", "Red Flags" (lines 199–218, 621–624)'
  ].join('\n'),
  qs: []
},

{
  id: 'cor-8', w: 'must',
  h: 'Telling the four infectious keratitides apart',
  body: [
    '|  |**Bacterial**|**Fungal**|**Herpes simplex**|**Acanthamoeba**|',
    '|---|---|---|---|---|',
    '|**History**|**contact lens** / trauma|**trauma with PLANT MATTER**; topical steroids|**RECURRENT episodes**|**contact lens + WATER**|',
    '|**Onset**|**RAPID**|**SLOW**|days|insidious|',
    '|**Pain**|severe|moderate|mild–moderate|**SEVERE, OUT OF PROPORTION**|',
    '|**Ulcer**|**large central/paracentral**|**FEATHERY, SATELLITE lesions**, dry rough surface|**DENDRITIC with terminal buds**, or geographic|**PERINEURAL early, RING late**|',
    '|**Discharge**|**MUCOPURULENT**|—|watery|—|',
    '|**Hypopyon**|**common**|present|no|—|',
    '|**Confirm with**|**Gram + blood/chocolate agar**|**SABOURAUD** (weeks)|clinical; fluorescein pattern|**confocal**; **non-nutrient agar + E. coli**|',
    '|**First line**|**topical fluoroquinolone hourly**|**natamycin 5 %** (filamentous) · **amphotericin B 0.15 %** (Candida)|**aciclovir 3 %**; disciform = **steroid + antiviral**|**PHMB + propamidine**|',
    '',
    '- **⚠️ One clue in the history usually decides it:** a lens alone → bacterial (Pseudomonas); a lens **plus water** → Acanthamoeba; **vegetable matter** → fungal; **recurrence** → herpes.',
    '- **⚠️ Steroids are wrong in three of the four** and right only in **disciform** HSV, with antiviral cover.',
    '',
    'Src: L15,16 "Red Eye with Corneal Involvement: Differential Diagnosis", "Summary: Infectious Keratitis at a Glance" (lines 219–237, 587–607)'
  ].join('\n'),
  qs: []
},

{
  id: 'cor-9', w: 'must',
  h: 'Keratitis against the other red eyes — vision and the cornea decide',
  body: [
    '**Severe pain + photophobia + a corneal opacity + reduced vision = KERATITIS**, and it is sight-threatening.',
    '',
    '|  |**Keratitis**|**Conjunctivitis**|**Episcleritis**|**Dry eye**|',
    '|---|---|---|---|---|',
    '|**Pain**|**SEVERE**|scratchiness, mild irritation, **NOT severe pain**|**mild ache, tender over the area**|gritty, burning|',
    '|**Photophobia**|**MARKED**|**normal light sensitivity**|minimal|mild|',
    '|**Vision**|**REDUCED**|**normal**|**not vision threatening**|fluctuates, clears on blinking|',
    '|**Cornea**|**OPACITY or ULCER**|clear|clear|punctate staining only|',
    '|**Redness**|**circumcorneal (ciliary)**|diffuse, worst in the fornices|**sectoral**|mild, interpalpebral|',
    '|**Discharge**|watery or mucopurulent|**prominent**|**none**|none|',
    '',
    '- **⚠️ The two decisive findings:** **REDUCED VISION** and a **CORNEAL OPACITY**. Neither is produced by conjunctival or episcleral disease.',
    '- **Redness alone decides nothing** — all four eyes are red.',
    '- **Circumcorneal (ciliary) injection:** points to the **cornea or the anterior chamber**; diffuse fornix-based redness points to the conjunctiva.',
    '- *The discriminating use of circumcorneal injection is supplied; the sign itself is on the deck.*',
    '- **Photophobia:** accompanies **iridocyclitis**, alone or **secondary to corneal inflammation** — corneal disease drives ciliary spasm.',
    '- **⚠️ Referral rule:** any red eye with **reduced vision** is referred, never treated blind.',
    '- **⚠️ The lens wearer:** a painful red eye in one is **microbial keratitis until proved otherwise**.',
    '',
    'Src: L37 "Severe pain", "Photophobia", "Corneal opacities", episcleritis features (lines 343–353, 178–182, 412–414), cited only; L15,16 "Bacterial Keratitis" (circumcorneal injection)'
  ].join('\n'),
  qs: ['opqb-t1-62']
},

{
  id: 'cor-10', w: 'must',
  h: 'Corneal trauma — abrasion, foreign body, and the burn that is irrigated before it is examined',
  body: [
    '### Corneal abrasion',
    '- **Fluorescein delineates the defect.** Treat with **topical antibiotic ± cycloplegic**; **usually heals in 24–48 h**.',
    '',
    '### Corneal foreign body',
    '- **Remove under the slit lamp with a 25 G needle or a burr.**',
    '- **Check for a retained INTRAOCULAR foreign body — CT scan.**',
    '- **RUST RING** after an iron FB: **remove at 24 h with a burr**, once it has softened overnight.',
    '',
    '### ⚠️ Chemical injury — irrigate before anything else',
    '',
    '|Step|Action|',
    '|---|---|',
    '|**1**|**IMMEDIATE copious irrigation — 1–2 L saline or water**|',
    '|**2**|**Check pH; target 7.0–7.4**|',
    '|**3**|**Sweep the fornices for retained particles**|',
    '|**4**|**THEN examine and refer**|',
    '',
    '- **⚠️ DO NOT DELAY FOR EXAMINATION.** Irrigation comes before history, acuity and referral.',
    '- **⚠️ ALKALI vs acid:** alkali burns are **MORE severe** — **saponification** lets them **penetrate deeper**.',
    '- *Alkali hydrolyses membrane lipids to soap, so the barrier dissolves ahead of the burn front — the mechanism behind the word is supplied.*',
    '- **Grading:** **ROPER-HALL I–IV, based on LIMBAL ISCHAEMIA.**',
    '',
    '### Penetrating injury',
    '- **SHIELD the eye · NIL BY MOUTH · urgent surgical repair · explore for an intraocular foreign body.**',
    '- **A positive Seidel test confirms a leaking break** (cor-2).',
    '',
    'Src: L15,16 "Corneal Trauma: Approach & Management" (lines 546–566); L25 slide 61 (Seidel), cited only'
  ].join('\n'),
  qs: []
},

{
  id: 'cor-11', w: 'must',
  h: 'Three prescribing errors that blind',
  body: [
    '### Topical steroids in BACTERIAL keratitis',
    '- **Potentiate the infection · delay healing.**',
    '- **Wait until the infection is controlled**, then use judiciously under ophthalmic supervision.',
    '',
    '### Topical steroids in EPITHELIAL HSV',
    '- **Promote viral replication · cause a geographic ulcer · risk perforation.**',
    '- **Only in the STROMAL / disciform stage, with antiviral cover.**',
    '',
    '### Topical anaesthetics for analgesia',
    '- **INHIBIT epithelial healing · cause STROMAL MELTING · anaesthetic keratopathy → PERFORATION.**',
    '- **⚠️ Never for outpatient use:** they abolish the pain that would have brought the patient back.',
    '',
    '*The fourth error on this slide — LASIK in keratoconus — is in `op-cornea-surg`.*',
    '',
    'Src: L15,16 "Common Prescribing Errors in Corneal Disease", top two boxes and bottom-left box (lines 567–582)'
  ].join('\n'),
  qs: []
}

    ]
  },

  /* ==========================================================================
     PART 2 — `op-cornea-surg`  ⚠️ NEW CHAPTER ID, register it in modules.js
     Suggested title: "Corneal ectasia, dystrophies and surgery"
     ====================================================================== */

  'op-cornea-surg': {

    intro: 'Almost everything here is one question in two directions: is this cornea the wrong SHAPE or the wrong CLARITY? Shape means topography, cross-linking and a rigid lens; clarity means a graft. Refractive surgery questions are keratoconus questions.',

    sections: [

{
  id: 'cor-12', w: 'must',
  h: 'Corneal ectasia and keratoconus — the signs, the topography, the ladder',
  body: [
    '**Corneal ectasia:** a group of conditions with **progressive corneal THINNING and PROTRUSION**.',
    '',
    '- **Types:** **KERATOCONUS (commonest)** · **pellucid marginal degeneration** · **keratoglobus**.',
    '- **Iatrogenic ectasia: post-LASIK**, from an insufficient **residual stromal bed**.',
    '- **⚠️ All of them:** cause **IRREGULAR ASTIGMATISM → reduced BEST SPECTACLE-CORRECTED acuity**. Glasses stop working — that is the problem.',
    '- **⚠️ SCREENING FOR ECTASIA IS MANDATORY BEFORE REFRACTIVE SURGERY — by corneal TOPOGRAPHY.**',
    '',
    '### Keratoconus — diagnosis',
    '- **Progressive BILATERAL (often asymmetric) thinning and protrusion.**',
    '- **Onset at PUBERTY; progression until the 3rd–4th decade.**',
    '- **Risk factors: EYE RUBBING · ATOPY · DOWN SYNDROME · connective tissue disorders.**',
    '- **VOGT STRIAE:** **vertical stromal stress lines** — stretch marks in the deep stroma.',
    '- **MUNSON SIGN:** a **V-shaped deformity of the LOWER LID ON DOWNGAZE**.',
    '- **ACUTE HYDROPS:** **sudden stromal oedema from a rupture of Descemet membrane**.',
    '- **TOPOGRAPHY: INFERIOR STEEPENING, ASYMMETRIC BOWTIE pattern.** This is the diagnostic instrument.',
    '',
    '### Management — an ordered ladder',
    '',
    '|Step|Option|When|',
    '|---|---|---|',
    '|**1**|**Spectacles**|early, mild|',
    '|**2**|**Soft / rigid contact lenses**|—|',
    '|**3**|**Scleral lenses**|advanced astigmatism|',
    '|**4**|**Corneal collagen CROSS-LINKING (CXL)**|to **stabilise progression**|',
    '|**5**|**Intracorneal ring segments (ICRS / Intacs)**|—|',
    '|**6**|**Keratoplasty — DALK preferred, or PKP**|end stage|',
    '',
    '- **⚠️ AVOID EYE RUBBING** — printed as its own instruction, and the one modifiable driver.',
    '',
    'Src: L15,16 "Corneal Ectasia", "Keratoconus: Diagnosis & Management" (lines 244–286)'
  ].join('\n'),
  qs: ['opqb-t2-99']
},

{
  id: 'cor-13', w: 'high',
  h: 'Collagen cross-linking — it stops the disease, it does not fix the vision',
  body: [
    '**CXL:** **riboflavin (vitamin B2) drops photosensitize the cornea, then UV-A irradiation strengthens the collagen crosslinks.**',
    '',
    '- **Effect:** it can **halt or even partially reverse** ectasia progression.',
    '- **Indication: DOCUMENTED PROGRESSIVE keratoconus in a YOUNG patient.** Documented progression, not merely a diagnosis.',
    '- **⚠️ CXL DOES NOT IMPROVE VISION — it stabilises progression.** A patient expecting better sight has been mis-consented.',
    '- **Combined CXL + ICRS**, or CXL + topography-guided ablation, in selected patients.',
    '- **It is also the treatment for post-LASIK ectasia** (cor-23).',
    '',
    'Src: L15,16 "Corneal Collagen Cross-Linking (CXL): A Modern Tool" (lines 287–300)'
  ].join('\n'),
  qs: []
},

{
  id: 'cor-14', w: 'must',
  h: 'Corneal dystrophies — bilateral, heritable, and sorted by layer',
  body: [
    '**Definition: BILATERAL, primarily NON-INFLAMMATORY, HERITABLE, PROGRESSIVE opacifying disorders.**',
    '',
    '- **Classified by the affected layer:** epithelial · Bowman · stromal · Descemet/endothelial.',
    '- **Most are AUTOSOMAL DOMINANT; some recessive.**',
    '',
    '### The five must-know dystrophies',
    '',
    '|Dystrophy|Layer|Deposit / lesion|Inheritance|',
    '|---|---|---|---|',
    '|**Epithelial basement membrane (MAP-DOT-FINGERPRINT)**|epithelial|— · presents with **RECURRENT EROSIONS**|—|',
    '|**GRANULAR** (**TGFB1** gene)|stromal|**BREADCRUMB opacities, CLEAR stroma BETWEEN lesions**|**AD**|',
    '|**LATTICE**|stromal|**AMYLOID — CONGO RED positive**, lattice lines|**AD**|',
    '|**MACULAR**|stromal|**GLYCOSAMINOGLYCANS**; **EARLIEST onset, WORST vision**|**AR**|',
    '|**FUCHS endothelial**|endothelial|**GUTTATA**, oedema, **worse in the MORNING**|—|',
    '',
    '- **⚠️ Macular:** the odd one out in three ways at once — **recessive, earliest, worst**. Its stroma between lesions is **cloudy**, unlike granular.',
    '- **Surgical answer depends on the layer:** stromal dystrophies → **DALK**; **Fuchs → DSAEK / DMEK**.',
    '',
    'Src: L15,16 "Corneal Dystrophies: Classification & Key Features" (lines 301–318)'
  ].join('\n'),
  qs: []
},

{
  id: 'cor-15', w: 'must',
  h: 'Fuchs endothelial dystrophy — the morning blur',
  body: [
    '**Abnormal endothelial cell function → loss of the dehydrating pump.**',
    '',
    '### The sequence',
    '- **Collagen is deposited on Descemet membrane → GUTTATA (excrescences).**',
    '- **Early: guttata on SPECULAR reflection** — dark spots disrupting the endothelial mosaic.',
    '- **Progressive → ‘BEATEN METAL’ endothelium.**',
    '- **Corneal oedema, central stromal then epithelial → BULLOUS KERATOPATHY.**',
    '',
    '### ⚠️ The characteristic symptom',
    '- **Vision WORSE IN THE MORNING and improving through the day.**',
    '- **Why:** overnight the lids are closed, **evaporation stops, oedema is maximal on waking**; through the day evaporation draws the water back out.',
    '- **Risk factors: FEMALE sex, older age (5th–6th decade).**',
    '',
    '### Management',
    '- **Conservative: hypertonic NaCl 5 %**, and a **hair dryer held 10 cm from the face**.',
    '- **Surgical: DMEK (preferred) or DSAEK** when vision is significantly affected.',
    '- **Monitor endothelial cell density with SPECULAR MICROSCOPY.**',
    '',
    'Src: L15,16 "Fuchs’ Endothelial Dystrophy", "Clinical Scenario 3" (lines 319–335, 529–545)'
  ].join('\n'),
  qs: []
},

{
  id: 'cor-16', w: 'high',
  h: 'Corneal degenerations — arcus, band keratopathy, pterygium and the rest',
  body: [
    '*Degenerations are acquired, often age-related and frequently unilateral — the opposite of a dystrophy on every axis.*',
    '',
    '### Arcus senilis',
    '- **A lipid arc at the limbus.** **Physiological in the elderly.**',
    '- **⚠️ CHECK THE LIPIDS IF THE PATIENT IS UNDER 45.**',
    '',
    '### Band keratopathy',
    '- **Deposit:** **CALCIUM in BOWMAN LAYER**, in the **INTERPALPEBRAL zone** — the strip the lids leave exposed.',
    '- **Causes:** **chronic anterior uveitis** · **HYPERCALCAEMIA** · **silicone oil in the anterior chamber**.',
    '- **Also:** end-stage ocular disease · **gout (hyperuricaemia)** · familial/hereditary · idiopathic age-related.',
    '- **Treatment: EDTA CHELATION (effective), or excimer laser PTK.**',
    '',
    '### Pterygium and pinguecula',
    '',
    '|  |**PTERYGIUM**|**PINGUECULA**|',
    '|---|---|---|',
    '|What|**fibrovascular growth from conjunctiva ENCROACHING ONTO THE CORNEA**|**yellowish nasal or temporal conjunctival lesion**|',
    '|Limbus|**CROSSES it**|**does NOT cross it**|',
    '|Associated with|**UV exposure**|—|',
    '|Treatment|**surgical excision if it affects vision or induces astigmatism**|—|',
    '',
    '### Salzmann nodular degeneration',
    '- **SUBEPITHELIAL FIBROUS NODULES**; can cause **irregular astigmatism**.',
    '',
    '*A shearing injury such as a fingernail damages the epithelial basement membrane, so recurrent erosion may follow for months or years — the same syndrome map-dot-fingerprint dystrophy produces (the traumatic cause is not taken from the course material).*',
    '',
    'Src: L15,16 "Corneal Degenerations" (lines 336–359)'
  ].join('\n'),
  qs: []
},

{
  id: 'cor-17', w: 'high',
  h: 'Neurotrophic and exposure keratopathy — an anaesthetic cornea and an uncovered one',
  body: [
    '### Neurotrophic keratopathy',
    '- **Sequence: TRIGEMINAL ANAESTHESIA → epithelial breakdown → PERSISTENT EPITHELIAL DEFECT → MELTING.**',
    '- **Causes: HSV · HZV · ACOUSTIC NEUROMA SURGERY · diabetes mellitus · TOPICAL ANAESTHETIC ABUSE.**',
    '- **Treatment: PRESERVATIVE-FREE lubrication · bandage lens · TARSORRHAPHY · CENEGERMIN (nerve growth factor) drops.**',
    '- **⚠️ The trap:** the cornea does not hurt, so the patient does not complain — and it is found late.',
    '',
    '### Exposure keratopathy',
    '- **Mechanism:** **incomplete lid closure → INFERIOR epithelial breakdown**. The exposed strip is the lower third.',
    '- **Causes: VII NERVE PALSY (Bell) · THYROID EYE DISEASE · PROPTOSIS.**',
    '- **Treatment: lubricants · taping the eyelid · moisture chamber · TARSORRHAPHY.**',
    '',
    'Src: L15,16 "Corneal Degenerations" (neurotrophic), "Exposure Keratopathy" (lines 360–367, 378–387)'
  ].join('\n'),
  qs: []
},

{
  id: 'cor-18', w: 'high',
  h: 'Peripheral corneal ulceration — three entities, and one needs a systemic work-up',
  body: [
    '|  |**Marginal keratitis**|**Mooren ulcer**|**Peripheral ulcerative keratitis (PUK)**|',
    '|---|---|---|---|',
    '|Mechanism|**IMMUNE reaction to STAPHYLOCOCCAL antigens**|**idiopathic, immune-mediated**|**systemic VASCULITIS**|',
    '|Appearance|**peripheral SUBEPITHELIAL INFILTRATES with a CLEAR LIMBAL ZONE**|**painful, progressive peripheral ulceration with an OVERHANGING CENTRAL EDGE**|peripheral ulceration|',
    '|Association|**BLEPHARITIS**|none|**RA · GPA · SLE**|',
    '|Management|**treat the blepharitis + topical steroids**|**difficult to treat**|**⚠️ URGENT SYSTEMIC WORK-UP**|',
    '',
    '- **⚠️ The clear limbal zone:** the marginal-keratitis giveaway. The immune infiltrate sits away from the vessels that fed it.',
    '- **⚠️ PUK:** not primarily an eye disease. It marks **active systemic vasculitis**, with the eye presenting first.',
    '',
    'Src: L15,16 "Peripheral Corneal Ulceration & Neurotrophic Keratopathy" (lines 368–377)'
  ].join('\n'),
  qs: []
},

{
  id: 'cor-19', w: 'must',
  h: 'Keratoplasty — the indications, the contraindications, and the four operations',
  body: [
    '**Corneal transplantation: replacement of diseased host tissue with a healthy donor cornea. It is the MOST COMMONLY PERFORMED AND MOST SUCCESSFUL SOLID ORGAN TRANSPLANT.**',
    '',
    '### The three indication groups',
    '- **OPTICAL:** keratoconus, scarring, dystrophies, **pseudophakic bullous keratopathy**.',
    '- **TECTONIC:** **restore integrity** — descemetocele, perforation.',
    '- **THERAPEUTIC:** **remove infected tissue** — active keratitis failing medical therapy.',
    '',
    '### Contraindications',
    '- **Ocular:** **active uncontrolled infection** · **dry eye / ocular surface failure** · **uncontrolled glaucoma**.',
    '- **Prognostic:** **poor visual potential** (retinal or optic nerve disease) · severe systemic illness · **non-compliance risk**.',
    '',
    '### The four operations',
    '',
    '|  |**PKP**|**DALK**|**DSAEK**|**DMEK**|',
    '|---|---|---|---|---|',
    '|**What is replaced**|**FULL THICKNESS, all layers**|**epithelium + stroma down to Descemet; HOST ENDOTHELIUM PRESERVED**|**Descemet stripped, POSTERIOR STROMA transplanted**|**ONLY Descemet + endothelium, 5–10 µm**|',
    '|**Technique**|—|**BIG BUBBLE**|small incision **~5 mm**|technically most demanding, **graft handling**|',
    '|**Best for**|scarring, perforations, **failed DALK**|**KERATOCONUS**, stromal dystrophies|**FUCHS**, bullous keratopathy|**FUCHS — preferred**|',
    '|**Rejection**|**HIGHEST rate**|**NO endothelial rejection risk; lowest overall**|lower than PKP|**LOWEST of the endothelial grafts**|',
    '|**Recovery / catch**|**SLOWEST**; **sutures in situ 12–18 months**|—|faster than PKP; **slight HYPEROPIC shift, interface haze**|**FASTEST · BEST VISUAL OUTCOMES OF ALL**|',
    '',
    '- **⚠️ The pattern:** the less you transplant, the less there is to reject. **DMEK moves 5–10 µm and has the best outcomes of any keratoplasty.**',
    '',
    'Src: L15,16 "Keratoplasty: Overview & Indications", "Types of Keratoplasty: Comparison" (lines 394–430)'
  ].join('\n'),
  qs: []
},

{
  id: 'cor-20', w: 'must',
  h: 'Corneal graft rejection — an emergency, and it is treated on suspicion',
  body: [
    '**⚠️ NEW BLURRED VISION IN A KERATOPLASTY PATIENT IS REJECTION UNTIL PROVED OTHERWISE — printed as a red flag.**',
    '',
    '- **Symptoms: SUDDEN blurred vision, pain, redness, photophobia. This is an EMERGENCY.**',
    '',
    '### Signs — **KSS**: **K**rachmer rejection line, **S**ubepithelial infiltrates, **S**tromal oedema',
    '- **EPITHELIAL rejection:** an **elevated rejection line of abnormal epithelium**, around **3 months post-op**.',
    '- **STROMAL / ENDOTHELIAL rejection:** **keratic precipitates on the donor endothelium (KRACHMER spots)**, **corneal oedema**, and the **KHODADOUST line**.',
    '',
    '### Treatment',
    '- **INTENSIVE topical steroids — prednisolone acetate 1 % HOURLY.**',
    '- **Systemic steroids** for severe cases.',
    '- **⚠️ Treat EARLY:** intensive early treatment **greatly improves the chance of reversing the episode and saving the graft**. Delay costs it.',
    '',
    'Src: L15,16 "Corneal Graft Rejection: Recognition & Emergency Treatment", "Red Flags" (lines 431–447, 621–629)'
  ].join('\n'),
  qs: []
},

{
  id: 'cor-21', w: 'must',
  h: 'Refractive surgery — selection, and the two investigations that are mandatory',
  body: [
    '**Goal: permanently alter corneal curvature to reduce or eliminate refractive error.**',
    '',
    '### ⚠️ The two most important pre-operative investigations',
    '',
    '|Test|Measures|The question it answers|',
    '|---|---|---|',
    '|**CORNEAL TOPOGRAPHY**|**curvature across the WHOLE surface**|**Is the shape normal, or is there an early ectasia?** — **RULE OUT keratoconus**|',
    '|**PACHYMETRY**|**corneal THICKNESS**|**Is there enough tissue to cut safely?**|',
    '',
    '- **⚠️ LASIK is corneal surgery, so the cornea is what is measured: its SHAPE and its THICKNESS.** Biometry (axial length) and keratometry belong to **cataract surgery and IOL power** (L18) — neither is a pre-LASIK test.',
    '',
    '### The rest of the mandatory work-up',
    '- **Refraction STABLE for ≥1 year** · **adequate tear film — Schirmer, TBUT** · **PUPIL SIZE IN DIM LIGHT** · **discontinue contact lenses before mapping**.',
    '- **Age: typically ≥18–21 years** with a stable refraction.',
    '',
    '### Contraindications',
    '- **FORME FRUSTE KERATOCONUS** · **thin cornea <500 µm** · **unstable refraction** · **dry eye** · **active inflammation**.',
    '- **⚠️ LASIK IS CONTRAINDICATED IN KERATOCONUS** — it causes severe post-operative ectasia. **CXL + ICRS may be appropriate instead.**',
    '',
    '- **Main procedures: LASIK · PRK (surface ablation) · SMILE · phakic IOL.**',
    '',
    'Src: L15,16 "Refractive Surgery: Principles & Patient Selection", "Common Prescribing Errors" bottom-right box (lines 448–461, 581–586); L18 (keratometry and axial length for IOL power), cited only'
  ].join('\n'),
  qs: ['opqb-t2-93']
},

{
  id: 'cor-22', w: 'high',
  h: 'The four laser procedures compared',
  body: [
    '|  |**LASIK**|**PRK (surface ablation)**|**FemtoLASIK**|**SMILE**|',
    '|---|---|---|---|---|',
    '|**Access**|**FLAP** cut by microkeratome or femtosecond laser|**epithelium REMOVED; ablation directly on BOWMAN**|**femtosecond flap — more precise, THINNER, no blade**|**femtosecond cuts a LENTICULE inside an INTACT cornea, removed through a 4 mm incision — NO FLAP**|',
    '|**Recovery**|**FAST, 1–2 days**|**SLOW — 3–5 days of pain, weeks for clarity**|as LASIK|fast|',
    '|**Risks**|**flap dislocation · ECTASIA · DLK (‘sands of Sahara’)**|**subepithelial HAZE — MMC applied to prevent it**|**still carries all LASIK risks**|**lower infection and ectasia risk; minimal flap issues**|',
    '|**Advantage**|**wide range — myopia up to −10 D**|**no flap → safer for CONTACT SPORTS and thin corneas**|**better predictability; allows mildly thin corneas**|**less corneal nerve damage → LESS DRY EYE**|',
    '|**Limit**|—|**used when LASIK is contraindicated**|—|**myopia + astigmatism; hyperopia limited**|',
    '',
    '- **⚠️ The flap is the whole trade-off.** A flap buys fast comfortable recovery and costs flap complications and biomechanical strength; no flap costs pain or precision and buys safety.',
    '',
    'Src: L15,16 "Laser Refractive Procedures: Comparison" (lines 462–480)'
  ].join('\n'),
  qs: []
},

{
  id: 'cor-23', w: 'must',
  h: 'Post-LASIK ectasia — the numbers that decide, and what to do if it happens',
  body: [
    '**⚠️ ECTASIA IS THE MOST FEARED LONG-TERM COMPLICATION OF LASIK.**',
    '',
    '### Risk factors',
    '- **FORME FRUSTE KERATOCONUS** · **thin cornea** · **young age** · **high myopia** · **LOW RESIDUAL STROMAL BED (RSB <300 µm)**.',
    '',
    '### The numbers',
    '',
    '|Measurement|Threshold|Status|',
    '|---|---|---|',
    '|**Central corneal thickness**|**<500 µm**|**RELATIVE contraindication** (checklist target **≥500 µm**)|',
    '|**Residual stromal bed**|**<300 µm**|**⚠️ ABSOLUTE CONTRAINDICATION** (target **≥300 µm** post-op)|',
    '|**Topography**|**asymmetric bowtie · inferior steepening**|**CONTRAINDICATION** — must be a regular pattern|',
    '|**Refraction**|unstable|must be **stable ≥1 year**|',
    '|**Age**|—|**≥21 years**|',
    '',
    '- Plus **no forme fruste keratoconus** and **informed consent** — the deck’s full safe-surgery checklist.',
    '- **⚠️ Red flag: keratoconus-like topography → DO NOT OPERATE.**',
    '',
    '### If ectasia develops',
    '- **CXL to halt progression** (cor-13). **⚠️ DO NOT OFFER MORE LASER** — more ablation removes more of the stroma that is already failing.',
    '',
    'Src: L15,16 "Screening for Refractive Surgery: Avoiding Ectasia", "Top 10 Take-Home Messages", "Red Flags" (lines 481–496, 608–629)'
  ].join('\n'),
  qs: ['opqb-t2-93']
},

{
  id: 'cor-24', w: 'must',
  h: 'Irregular astigmatism — why keratometry fails, and why a rigid lens works',
  body: [
    '**IRREGULAR ASTIGMATISM (the less common type):** the **meridia of minimum and maximum power are NOT PERPENDICULAR**, with **irregular change in power between them**.',
    '',
    '- **Cause: an irregular, distorted cornea — CORNEAL SCARS and KERATOCONUS.**',
    '- **⚠️ The clinical signature is that vision does NOT improve with a spherical lens** — and a cylinder does no better, because a cylinder can only correct one pair of perpendicular meridians.',
    '',
    '### ⚠️ Keratometry vs topography — the reason topography exists',
    '',
    '|  |**Keratometry**|**Corneal TOPOGRAPHY**|',
    '|---|---|---|',
    '|Samples|**a few central points, in TWO meridians**|**the WHOLE corneal surface**|',
    '|Assumes|**that the two principal meridia are PERPENDICULAR**|**nothing — it maps what is there**|',
    '|On an irregular cornea|**its own premise is violated, so the reading is misleading**|**shows the actual distorted contour**|',
    '|Where it is used|**cataract surgery — corneal curvature for IOL power**|**cornea: keratoconus and pre-LASIK screening**|',
    '',
    '*The sampling contrast is supplied and tagged; keratometry appears in the course material only as "Keratometry (corneal curvature)" in the cataract biometry list.*',
    '',
    '### The correction ladder',
    '',
    '|Step|Option|',
    '|---|---|',
    '|**1**|**Glasses — MILD DEGREES ONLY**|',
    '|**2**|**RIGID GAS-PERMEABLE (RGP) contact lenses**|',
    '|**3**|**Intracorneal ring (ICR) segments**|',
    '|**4**|**Keratoplasty**|',
    '',
    '- **⚠️ Why RGP and not a soft toric:** a **soft lens DRAPES onto the cornea** and reproduces the irregularity on its own front surface. A **rigid lens VAULTS over it**, and the **tear film fills the gap** — tears and cornea have almost the same refractive index, so the distorted surface is **optically neutralised** and the lens’s own regular front surface refracts the eye. *(The mechanism is supplied; the deck gives only the answer.)*',
    '- **⚠️ LASIK is contraindicated here** — it is for **regular** astigmatism, and ablating an already-compromised cornea risks ectasia (cor-23).',
    '',
    'Src: L7,8 "Astigmatism — Irregular", "Treatment" (lines 402–442), cited only; L18 (keratometry), cited only; L15,16 "Corneal Ectasia" (irregular astigmatism reduces best-corrected acuity); the keratometry contrast and the RGP mechanism are supplied and tagged'
  ].join('\n'),
  qs: ['opqb-t2-99','opqb-t2-100']
}

    ]
  }
};

/* ============================================================================
   ⚠️⚠️ FINAL MEASUREMENT — WRITTEN AS THE GENUINELY LAST ACTION.

   Placed HERE, after the closing brace, because it is physically the last
   thing in the file and therefore the last thing edited. §14.1's rule has been
   broken fourteen times in this project by a header written before the final
   edit — twice by a breakdown that summed exactly to a stated total and was
   still stale, and once by a forecast written in the past tense under a
   "TRUE MEASUREMENT" banner whose rows failed their own arithmetic.

   ⚠️ THIS BLOCK IS DELIBERATELY EMPTY OF NUMBERS.

   The counter below was run over this file on disk after the last content edit
   and the figures were reported to the hub in the completion report, not
   written here — because a number written into the file is a number that must
   be re-verified after every subsequent edit, and this file will be edited
   again when it is spliced into `app\data\theory.ophtho.js`.

   TO RE-MEASURE (body words = the joined `body` strings only, excluding
   `intro`, `h`, `Src:` lines and `qs`):

     node -e "const vm=require('vm'),fs=require('fs');
       const c={};vm.createContext(c);
       vm.runInContext(fs.readFileSync('content/ophtho/theory-drafts/op-cornea.draft.js','utf8'),c);
       for(const k of Object.keys(c.THEORY_DRAFT)){
         const ch=c.THEORY_DRAFT[k]; let t=0;
         for(const s of ch.sections){
           const w=s.body.split('\n').filter(l=>!/^Src:/.test(l))
                    .join(' ').split(/\s+/).filter(Boolean).length;
           console.log(k,s.id,w); t+=w }
         console.log(k,'sections',ch.sections.length,'body',t,
                     'intro',ch.intro.split(/\s+/).length,
                     'pages~',(t/240).toFixed(1)); }"

   ============================================================================ */
