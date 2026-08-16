/* op-orbit — "Orbit", Ophthalmology. Written 2026-08-16 under
   START-HERE.md §14 (slide-density revision notes) + §14.3a (layout), and
   content\ophtho\theory-plan.md. Shape copied from
   content\ent\theory-drafts\ent-nasalobs.draft.js and
   content\peds\theory-drafts\genetics.draft.js.

   ⚠️ THIS IS THE FIRST OPHTHALMOLOGY CHAPTER IN THE PROJECT.

   DECK LABELS USED IN THE Src LINES:
     L10  = L10) orbit.txt — "The Orbit", Ihab M. Osman. 48 slides.
            THIS CHAPTER'S ONLY COUNTED DECK.
     L23  = L23) Ocular manifestations of systemic diseases.txt  — cited only
     L25  = L25) Trauma I.txt                                    — cited only
     L22  = L22) Pupil and Visual pathway.txt                    — cited only
     L18  = L18) Cataract II.txt                                 — cited only

   ⚠️ L10 IS A BANKED VISUAL READ, NOT A TEXT EXTRACTION. `pdftotext` returns
   48 words from its 48 pages (CamScanner watermark only); an earlier chat
   rendered it at 110 dpi as 12 four-up contact sheets and transcribed it. The
   cache IS the deck. Nothing was re-rendered for this chapter, per the brief.

   ⚠️ SLIDE NUMBERS IN THE Src LINES ARE THE CACHE'S OWN SLIDE HEADINGS, which
   are the deck's real slides 1–48. Several slides OVERFLOW their text box in
   the original PowerPoint and the cache marks those "[text cut off in the
   original]". Where a cut-off line is completed below, it is TAGGED — the
   words genuinely are not on the slide.

   ============================================================================
   BUDGET — §14.1, budget = max(summed lecture words, 25 x linked questions),
   floor 600, cap 3,000. BOTH TERMS MEASURED FROM DISK:

     TERM 1 — L10, BY LINE RANGE (§14.1(a)). This chapter rests on the WHOLE
       deck, so the claim is the whole deck MINUS the two non-lecture blocks
       the transcriber added:
         lines   1–18   132 w  — the transcriber's provenance header. NOT the
                                 lecture. NOT counted.
         lines  19–650 3,222 w — slides 1–48, the lecture itself. COUNTED.
         lines 651–685  317 w  — the "NOT COVERED ANYWHERE IN THIS DECK"
                                 block, also the transcriber's. NOT counted,
                                 but it is the instrument three gaps below
                                 were settled with.
       = 3,222 words claimed of the file's 3,671.

     TERM 2 — 25 x 24 linked questions = 600 words.

     max(3,222 · 600) = 3,222 → CAP 3,000 BINDS. TERM 1 governs by 2,622.
     Operative ceiling per §14.1 is ~2,400 body words / ~10 printed pages.

   ⚠️ NO OTHER DECK IS COUNTED. Four are CITED and not counted (§14.1's
     "do not count a lecture you cite once"):
       · L23 — one sentence, the commonest-cause-of-exophthalmos line, plus
         the TED complications trio. L23 is `op-systemic`'s whole deck.
       · L25 — slides 18–24, the orbital floor fracture run. L25 is
         `op-trauma`'s deck and `op-trauma` must count it, not this chapter.
         Two questions filed here (Q130, Q133) test it, so §14.5 requires it
         be WRITTEN here; its WORDS stay charged to `op-trauma`. This is
         §14.1's declared "a fact arrives while its words stay charged
         elsewhere" case, stated rather than double-billed.
       · L22 — the miosis cause list and the Horner sign list, six lines.
       · L18 — the endophthalmitis column of orb-12, five lines.

   DIAGRAM-DECK CHECK (§14.1). L10 lines 19–650: 3,222 words over 455
   non-blank lines = 7.08 w/line. That is far above the ~2 that marks a
   labelled-diagram deck, so no diagram-deck correction applies and TERM 1 is
   trustworthy on its own terms. ⚠️ BUT NOTE WHY: the 7.08 is a property of
   the TRANSCRIPTION, not of the slides — the deck itself extracts at 1.0
   words per page. A words-per-line test run on a banked visual read measures
   the transcriber, and that is worth knowing before the test is reused on
   `op-va`, `op-pupil` or `op-trauma`, whose caches are the same kind of file.

   ⚠️ ENTITY FLOOR, COUNTED BEFORE WRITING (§14.1's `ent-dysph` rule — say the
   overrun up front rather than discovering it in compression). TWENTY-ONE
   distinct entities at ~90 w each: 1 orbital bones/openings · 2 the orbital
   syndrome · 3 proptosis · 4 enophthalmos + the pseudos · 5 ophthalmoplegia ·
   6 dynamic signs · 7 investigations · 8 THYROID EYE DISEASE · 9 TED
   treatment · 10 preseptal cellulitis · 11 BACTERIAL ORBITAL CELLULITIS ·
   12 mucormycosis · 13 dacryoadenitis · 14 cavernous sinus thrombosis ·
   15 CAROTID–CAVERNOUS FISTULA · 16 idiopathic orbital inflammatory disease ·
   17 dermoid + varices + the two haemangiomas · 18 lacrimal gland tumours ·
   19 optic nerve glioma + meningioma · 20 rhabdomyosarcoma · 21 the
   anophthalmic socket. Plus three gap-filled entities the deck does not carry
   (panophthalmitis, retrobulbar haemorrhage, blow-out fracture) and one
   framework grid (Table 4.1). 21 x 90 = 1,890 w of floor before a single
   table, and four of the twenty-one (TED, orbital cellulitis, CCF, the
   tumours) need roughly double the 90-word unit. Realistic floor
   ~2,300–2,600. SAID HERE, IN ADVANCE.

   ⚠️ MEASURED OUTCOME — see the FINAL MEASUREMENT block at the foot of this
   header. It was written last, after the final edit, by re-running the
   counter over this file on disk. Nothing has been edited since, and the
   header above contains no outcome number for it to contradict.

   ============================================================================
   GAPS — ANSWERED AND TAGGED, NOT DECLARED (§4a). ⚠️ EVERY ONE WAS GREPED
   ACROSS ALL 27 CACHED OPHTHALMOLOGY DECKS BEFORE BEING CALLED A GAP.
   TWO THINGS I EXPECTED TO BE GAPS TURNED OUT PRINTED, AND BOTH CHANGED WHAT
   IS WRITTEN BELOW:

     ✅ NOT A GAP — "commonest cause of unilateral exophthalmos" (Q113, Q117).
        I was ready to tag this. `L23` prints it verbatim: thyroid eye disease
        "is also the most common cause of unilateral or bilateral protrusion
        of the globes, or exophthalmos". SOURCED, cited in orb-3 and orb-6.
     ✅ NOT A GAP — Horner's syndrome does not proptose (Q118). `L22` lists
        the Horner signs as "Miosis · Dilation Lag · Ptosis · APPARENT
        ENOPHTHALMOS · Anhydrosis · Heterochromia". SOURCED, in orb-4.
     ✅ NOT A GAP — the whole blow-out fracture (Q130, Q133). `L25` slides
        18–24 carry it in detail, including the tennis-ball history, both
        entrapped muscles, the tear drop sign and the never-blow-the-nose
        rule. SOURCED, in orb-14. `L10`'s own not-covered list calls orbital
        fracture absent, which is true OF L10 and would have been the wrong
        conclusion for the module.

   THE THREE REAL GAPS, each settled by proving a negative:

     1. PANOPHTHALMITIS AS AN ENTITY — three questions (Q116, Q119, Q128) turn
        on it and it is the chapter's single most-tested discrimination.
        `panophthalm` returns exactly ONE hit in 27 decks: `L37) Red Eye`
        line 504, naming it in a list of Stevens–Johnson complications with no
        definition. No deck defines it, contrasts it with endophthalmitis, or
        states the motility rule. SUPPLIED AND TAGGED in orb-12 — the
        endophthalmitis column there is sourced to `L18`, only the
        panophthalmitis column and the septum-and-sclera map are supplied.
     2. RETROBULBAR HAEMORRHAGE / ORBITAL COMPARTMENT SYNDROME — two questions
        (Q121, Q132). `retrobulbar` hits only `L10` slide 6, where it is three
        letters in a list of causes of proptosis ("retrobulbar hge"), and
        `L25`'s own not-covered list, which states in terms: "RETROBULBAR
        HAEMORRHAGE / ORBITAL COMPARTMENT SYNDROME as a named entity — its
        signs, its IOP rise, and lateral canthotomy/cantholysis … NEITHER DECK
        DESCRIBES IT." `compartment` and `canthotomy` return that same block
        and nothing else. SUPPLIED AND TAGGED in orb-13.
     3. THE TED MUSCLE ORDER — one question (Q137) keys the inferior rectus.
        `L10` slides 11/19/21 establish that TED is a restrictive myopathy
        with enlarged muscle bellies, and `L23` calls it "autoantibody-
        mediated enlargement of the extraocular muscles"; NEITHER RANKS THE
        MUSCLES. The ranking and the I'M SLO mnemonic are SUPPLIED AND TAGGED
        in orb-6. The mechanism around them is the lecturer's.

   Four smaller supplied items, each tagged in place:
     · The DEFINITIONS of enucleation / evisceration / exenteration (orb-17).
       `L10` slide 47 prints the three NAMES and nothing else — it is a
       three-line slide — yet Q114 and Q127 are definition questions. The
       names are sourced, the definitions are supplied.
     · The FORCED DUCTION TEST by name (orb-5). `L10` slide 10 announces
       "Tests used to differentiate a restrictive from a neurological motility
       defect:" and THE LIST IS CUT OFF BY THE SLIDE EDGE. Both L10's and
       L25's not-covered lists confirm the name appears nowhere. The question
       being answered is the deck's own; only the answer is supplied.
     · "Orbital cellulitis is the commonest cause of proptosis in CHILDREN"
       (orb-3, Q135). `L10` slide 26 says orbital cellulitis is "more common
       in children" — which is not the same claim. Tagged as supplied.
     · Lateral canthotomy and cantholysis as the treatment of an orbital
       compartment syndrome (orb-13), inside gap 2 above.

   ============================================================================
   ⚠️ CROSS-CHAPTER DEFERRALS (§14.5) — named, so each is a promise and not a
   deletion. EVERY ONE WAS CHECKED AGAINST ALL 24 OF THIS CHAPTER'S QUESTIONS
   FIRST: none tests the deferred half.

     · L10 slides 15 (systemic Graves) — the THYROTOXIC SYSTEMIC PICTURE in
       full: weight loss with good appetite, increased bowel frequency,
       sweating, heat intolerance, nervousness, irritability, palpitations,
       weakness, fatigue, goitre, tremor, palmar erythema, warm sweaty skin,
       sinus tachycardia and other arrhythmias, and the IgG/TSH-receptor
       mechanism.                                          -> `op-systemic`
       ⚠️ PARTIALLY KEPT HERE AND DELIBERATELY SO: Q138's vignette is "loss of
       weight in spite of good appetite" + unilateral proptosis, so the
       systemic clue IS the discriminator of a question filed here. orb-6
       keeps the mechanism in one clause and the systemic features as one
       line; the full endocrine account is `op-systemic`'s.
     · L10 slides 42–43, LACRIMAL GLAND TUMOURS, and slides 44–46, the NEURAL
       TUMOURS and RHABDOMYOSARCOMA, as ONCOLOGY — histological subtyping,
       staging, chemotherapy and radiotherapy protocols.        -> `op-onc`
       Kept here as ORBITAL MASSES, which is what L10 teaches them as and
       what orb-16 needs. ⚠️ `op-onc`'s deck (`L24) Ocular tumors.`) is one of
       the fourteen owed a visual read — 78 pages, 100 % blank text layer —
       so this row cannot be ticked until that read happens.
     · L10 slide 31, ACUTE DACRYOADENITIS, and the lacrimal gland as a
       structure — the gland's anatomy, the tear film, Jones I and II.
                                                               -> `op-lac`
       Kept here only as the S-SHAPED PTOSIS sign and its one-line causes,
       because dacryoadenitis is one of the four orbital infections L10
       teaches as a set and orb-15 would be incomplete without it.
       ⚠️ `L9) lacrimal system.` is also owed a visual read.
     · L25 slides 25–61 — hyphaema grading, open-globe injury, chemical
       burns, the trauma examination sequence.                -> `op-trauma`
       Only slides 18–24 (the blow-out run) are used here, and cited not
       counted.
     · L10 slide 5's PSEUDOENOPHTHALMOS list and slide 9's PSEUDOPROPTOSIS
       list mention high myopia and buphthalmos, which are `op-refract`'s and
       `op-glauc`'s entities. Kept here as bare names in a discrimination
       list — that is all L10 gives them and all a proptosis question needs.

   REGISTER ROWS THIS CHAPTER IS OWED: none. It is the module's first
   chapter, so nothing has been deferred TO it yet.

   ⚠️ ROWS THIS CHAPTER ADDS TO THE REGISTER, to be copied into
   START-HERE.md §14.5 by the hub:
     | `op-orbit` (L10 s.15) | The systemic thyrotoxic picture in full + the
       IgG/TSH-receptor mechanism | `op-systemic` | open |
     | `op-orbit` (L10 s.42–46) | Lacrimal gland tumours, optic nerve glioma
       and sheath meningioma, rhabdomyosarcoma AS ONCOLOGY | `op-onc` | open |
     | `op-orbit` (L10 s.31) | Acute dacryoadenitis in full + the lacrimal
       gland as a structure | `op-lac` | open |
     | `op-orbit` (L25 s.18–24) | Blow-out fracture — WRITTEN HERE in orb-14
       because two questions filed here test it; `op-trauma` still owes the
       white-eyed blow-out, the repair window and the medial wall fracture,
       none of which L25 prints | `op-trauma` | written-here, words charged
       to op-trauma |

   ============================================================================
   DEFECT NOTE (§4b — noted, never disputed), one line in the body:
     · Q132 asks which sign is EXPECTED in a retrobulbar haemorrhage and keys
       ophthalmoplegia, while offering CHEMOSIS as a distractor — and the same
       bank's Q121 lists chemosis among the signs of retrobulbar haemorrhage
       and keys miosis as its exception. Two options are correct on the bank's
       own evidence. Keyed as printed; recorded in orb-13.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection (§14.2). It lives in each
        question's own `explanation`, one tap away through the `qs` links.
        Kept ONLY where the teaching point IS the discrimination — orb-4
        (the pseudos), orb-8 (preseptal vs orbital), orb-12 (the four-way
        septum-and-sclera map), orb-16 (the five "commonest" facts). Each of
        those is a table.
     2. Question ids in body text, teaching voice, bank meta-commentary
        beyond the one defect note, per-fact citation clauses (one Src line
        per section), and a closing summary section.
     3. Slide 13's fundus figure is carried as its four findings; the figure
        panel letters (A/B/C/D) are dropped. Same for slides 4, 11, 16, 17,
        18, 21, 25, 27, 28, 36 — the figure captions are used for their
        content and their numbering discarded.
     4. Slide 7 ("Direction of proptosis") carries NO PROSE AT ALL — two
        images. Its teaching (axial vs eccentric) is written in orb-3 from
        the figure description, and said to be from the figure.
     5. Drug doses. The deck states none anywhere and none is invented.
        Propranolol, triamcinolone, methylprednisolone and acetazolamide are
        named as the deck names them, without doses.
     6. TED activity/severity scoring (CAS, EUGOGO, NOSPECS) and the TED lid
        signs beyond the deck's three (Stellwag, Mobius, Joffroy, Griffith).
        The deck's not-covered list confirms all are absent, and no question
        touches them. NOT supplied — unlike the three gaps above, nothing
        filed here turns on them, so supplying them would be padding.
     7. Chandler's classification of the orbital complications of sinusitis.
        Absent from L10 by its own list; greped and absent module-wide except
        in that not-covered block. No question tests it. Recorded, not
        supplied.
     8. Orbital lymphoma, metastatic orbital disease and neuroblastoma beyond
        their one line in Table 4.1 (orb-18). The deck gives them one line;
        they get one line.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field.

   ============================================================================
   ⚠️ FINAL MEASUREMENT — see the separate block at the very END of this file,
   below the closing brace. It is written there so that it is physically the
   last thing edited, and it was produced by running the counter over this
   file after the final content edit. §14.1's rule, thirteen times proved: the
   header is a claim, the file is the fact.
   ============================================================================ */

var THEORY_DRAFT = {
  'op-orbit': {

    intro: 'Almost every question is one of three shapes: which "commonest" is being asked (adult vs child, cause vs tumour), which side of a boundary the infection sits (septum, sclera), or which single sign separates two look-alikes — proptosis, vision, motility, pulsation.',

    sections: [

{
  id: 'orb-1', w: 'know',
  h: 'The bony orbit — the three openings and what goes through each',
  body: [
    '- **Bones on the deck figure:** frontal · ethmoid · lacrimal · palatine · **lesser and greater wings of sphenoid** · zygomatic · maxillary.',
    '- **Landmarks:** optic foramen · supraorbital and trochlear notches · anterior lacrimal crest · infraorbital groove and foramen · zygomatic–maxillary suture.',
    '',
    '### The three openings',
    '',
    '|Opening|Between|Transmits|',
    '|---|---|---|',
    '|**Superior orbital fissure**|**greater and lesser wings of sphenoid**|**III** (superior and inferior branches) · **IV** trochlear · **V** (lacrimal, frontal, nasociliary) · **VI** abducent · **superior ophthalmic vein**|',
    '|**Inferior orbital fissure**|**greater wing of sphenoid and maxilla**|**maxillary nerve** · **zygomatic nerve** · **inferior ophthalmic vein**|',
    '|**Optic canal**|within the lesser wing|**optic nerve** · **ophthalmic artery**|',
    '',
    '- **Common tendinous ring — INSIDE:** both branches of **III**, **nasociliary**, **VI**.',
    '- **Common tendinous ring — OUTSIDE:** **lacrimal**, **frontal**, **trochlear (IV)**.',
    '',
    '*The deck labels a "common tendinous ring" on the figure; the eponym annulus of Zinn is not printed, nor are the four walls named as walls.*',
    '',
    'Src: L10 slides 2–3'
  ].join('\n'),
  qs: []
},

{
  id: 'orb-2', w: 'know',
  h: 'The orbital syndrome — what any orbital disease looks like, and how it is imaged',
  body: [
    '### Symptoms',
    '- **Eyelid and conjunctival swelling:** redness, watering.',
    '- **Pain:** sometimes on, or exacerbated by, **eye movement**.',
    '- **Double vision and blurring.**',
    '- **Pulsing sensation or audible bruit.**',
    '',
    '### Signs',
    '- **Soft tissue involvement:** eyelid and periocular oedema, **skin discoloration**, ptosis, **chemosis and injection**.',
    '- **Fundus, four findings:** **disc swelling** · **optic atrophy with choroidal folds** · **opticociliary (shunt) vessels with optic atrophy** · **choroidal folds** alone.',
    '',
    '### Investigations',
    '',
    '|Test|What it is for|',
    '|---|---|',
    '|**CT**|**bony structures**, and the **location and size** of space-occupying lesions|',
    '|**MRI**|**orbital APEX lesions**, orbital tumours, **inflammatory disease**|',
    '|**Plain X-ray**|**little used** — only initial diagnosis of traumatic bony injury|',
    '|**Ultrasonography**|—|',
    '|**Fine needle biopsy**|**suspected neoplastic disease**|',
    '',
    'Src: L10 slides 4, 13, 14'
  ].join('\n'),
  qs: []
},

{
  id: 'orb-3', w: 'must',
  h: 'Proptosis — the two mechanisms, the commonest causes, the direction, the number',
  body: [
    '**Proptosis:** forward protrusion of the globe. **Only two mechanisms.**',
    '',
    '- **The globe is PUSHED forward** — retrobulbar haemorrhage, tumour, and every other space-occupying orbital lesion.',
    '- **The bony orbit is SHALLOW** — **premature closure of the sutures**, e.g. **Crouzon syndrome**.',
    '',
    '### ⚠️ Five different "commonest" facts, and swapping two words changes the answer',
    '',
    '|Question|Answer|',
    '|---|---|',
    '|Commonest cause of proptosis **in ADULTS**, unilateral **or** bilateral|**THYROID EYE DISEASE**|',
    '|Commonest cause of proptosis **in CHILDREN**|**ORBITAL CELLULITIS** *(as a "commonest" claim, not in course material — L10 says only that orbital cellulitis is "more common in children")*|',
    '|Commonest **orbital tumour in ADULTS**|**CAVERNOUS haemangioma**|',
    '|Commonest tumour of the orbit and periorbital area **in CHILDHOOD**|**CAPILLARY haemangioma**|',
    '|Commonest **primary orbital MALIGNANCY in children**|**RHABDOMYOSARCOMA**|',
    '',
    '- **⚠️ Unilateral does NOT argue against thyroid.** L23 gives it as commonest cause of **unilateral or bilateral** exophthalmos, and L10 illustrates **asymmetrical** lid retraction.',
    '',
    '### Direction and measurement',
    '- **AXIAL (straight forward):** an intraconal lesion, or thyroid eye disease.',
    '- **ECCENTRIC / dystopic:** an extraconal mass — **the globe moves AWAY from it**, so direction names the quadrant.',
    '- **Measured by:** **visualization from above** · **Hertel exophthalmometer**.',
    '- **⚠️ THE NUMBERS: over 20 mm is proptosis; a difference of 2–3 mm or more between the eyes is suspicious regardless of the absolute value** *(the slide is cut off after "regardless of the")*.',
    '',
    'Src: L10 slides 6, 7 (figure only), 8, 26, 40, 41, 46; L23 (thyroid exophthalmos), cited only'
  ].join('\n'),
  qs: ['opqb-t3-113','opqb-t3-117','opqb-t3-135']
},

{
  id: 'orb-4', w: 'know',
  h: 'Enophthalmos, and the two things that only look like a change in prominence',
  body: [
    '**Enophthalmos:** the globe is **retracted backwards**.',
    '',
    '- **Commonest cause — FRACTURE OF THE ORBITAL FLOOR with orbital fat prolapse.** Also **radiotherapy** and **sclerosing lesions**.',
    '',
    '### The two pseudos — a normal globe in an abnormal setting',
    '',
    '|  |**PSEUDOenophthalmos**|**PSEUDOproptosis**|',
    '|---|---|---|',
    '|Causes|**ptosis** · **phthisis bulbi** (a small globe) · **contralateral proptosis or pseudoproptosis**|**lid retraction** · **high myopia** (a long globe) · **buphthalmos** · **facial asymmetry** · **contralateral enophthalmos**|',
    '|Rule|the eye is normal; **its neighbour or its lid is not**|same — **measure both eyes before believing either**|',
    '',
    '- **⚠️ HORNER SYNDROME PRODUCES APPARENT ENOPHTHALMOS, NEVER PROPTOSIS.** L22 lists its signs: **miosis · dilation lag · ptosis · apparent enophthalmos · anhydrosis · heterochromia** (congenital). The narrowed palpebral aperture is what does it.',
    '- **Lid retraction is the sign no orbital MASS produces** — a mass pushes, it does not retract. Proptosis **with** lid retraction is thyroid until proved otherwise.',
    '',
    'Src: L10 slides 5, 9; L22 (Horner signs), cited only'
  ].join('\n'),
  qs: ['opqb-t3-118']
},

{
  id: 'orb-5', w: 'high',
  h: 'Ophthalmoplegia and the dynamic signs — pulsation, bruit, and what a Valsalva proves',
  body: [
    '**Ophthalmoplegia:** defective ocular motility. **Five causes, and the first is mechanical.**',
    '',
    '- **An orbital MASS** — mechanical effect. *(A haematoma behaves as a mass — see orb-13.)*',
    '- **RESTRICTIVE MYOPATHY** — e.g. thyroid eye disease.',
    '- **Orbital MYOSITIS.**',
    '- **TETHERING** of muscle or tissue after an **orbital wall fracture**.',
    '- **OCULAR MOTOR NERVE involvement** — at the **cavernous sinus**, the **orbital fissures**, or the **posterior orbit**: carotid–cavernous fistula, **Tolosa–Hunt syndrome**, malignant lacrimal gland tumours.',
    '',
    '**Restrictive vs neurological:** the deck announces "Tests used to differentiate a restrictive from a neurological motility defect:" and **the list is cut off by the slide edge**. It is the **FORCED DUCTION TEST** — grasp the anaesthetised globe and rotate it: **it will not move if restrictive, moves freely if neurological** *(the test name and its interpretation are not in the course material; the question is the deck’s own)*.',
    '',
    '### The three dynamic signs',
    '',
    '|Sign|How elicited|What it means|',
    '|---|---|---|',
    '|**Induced/worsened proptosis**|**dependent head position · Valsalva · jugular compression** — all raise venous pressure|**orbital VENOUS anomalies (varices)**, or an infant with **capillary haemangioma**|',
    '|**PULSATION**|inspection|**an ARTERIOVENOUS communication**, or a **DEFECT IN THE ORBITAL ROOF** — those two only|',
    '|**BRUIT**|**bell of the stethoscope**|a **larger carotid–cavernous fistula**; **abolished by gently compressing the ipsilateral carotid in the neck**|',
    '',
    '- **⚠️ Pulsating exophthalmos is a two-item differential.** Graves disease, cavernous sinus thrombosis and orbital cellulitis all proptose and **none pulsates** — no arterial connection, intact roof.',
    '',
    'Src: L10 slides 10, 11, 12, 19'
  ].join('\n'),
  qs: ['opqb-t3-122']
},

{
  id: 'orb-6', w: 'must',
  h: 'Thyroid eye disease — the five ocular components and the three lid signs',
  body: [
    '**Graves disease:** the **commonest form of hyperthyroidism**; **autoimmune**, **IgG antibodies bind the TSH receptor** and stimulate hormone secretion. **More common in females.**',
    '',
    '- **Systemic clue that decides a vignette:** **weight loss DESPITE a good appetite**, increased bowel frequency, sweating, heat intolerance, nervousness, irritability, palpitations, weakness, fatigue; goitre, tremor, palmar erythema, warm sweaty skin; sinus tachycardia and arrhythmias. *Full endocrine account in `op-systemic`.*',
    '',
    '### a) Soft tissue involvement',
    '- **Symptoms:** **grittiness, red eyes, lacrimation, photophobia, puffy lids, retrobulbar discomfort.**',
    '- **Signs:** epibulbar hyperaemia **over a horizontal rectus**, periorbital oedema, chemosis, **fat prolapse into the lids**, **superior limbic keratoconjunctivitis**.',
    '',
    '### b) Lid retraction — the three named signs',
    '',
    '|Sign|What it is|',
    '|---|---|',
    '|**DALRYMPLE**|**moderate bilateral asymmetrical lid retraction**|',
    '|**KOCHER**|**severe bilateral lid retraction** — the staring look|',
    '|**VON GRAEFE**|**lid LAG ON DOWNGAZE**|',
    '',
    '### c) Proptosis',
    '- **Bilateral, with lid retraction**; severe proptosis causes **exposure keratopathy and corneal ulceration**.',
    '',
    '### d) Restrictive myopathy',
    '- **Double vision** and discomfort in some positions of gaze; **enlarged extraocular muscle BELLIES** on axial MRI.',
    '- **⚠️ The INFERIOR RECTUS is affected most often**, order **inferior → medial → superior → lateral rectus, obliques last** — mnemonic **I’M SLO** *(the ranking and mnemonic are not taken from the course material; the restrictive mechanism is the lecturer’s)*.',
    '- **⚠️ A TIGHT MUSCLE RESTRICTS THE OPPOSITE MOVEMENT.** A fibrosed **inferior** rectus is short, not weak, so the eye will not **ELEVATE** — mimicking a superior rectus **palsy**. Same trap as orb-14.',
    '',
    '### e) Optic neuropathy',
    '- **Impairment of central vision.** **Monitor regularly: visual acuity · colour desaturation · RAPD · visual fields.**',
    '',
    'Src: L10 slides 15–21; L23 (commonest cause of exophthalmos; autoantibody-mediated muscle enlargement), cited only'
  ].join('\n'),
  qs: ['opqb-t3-113','opqb-t3-117','opqb-t3-137','opqb-t3-138']
},

{
  id: 'orb-7', w: 'high',
  h: 'Treatment of thyroid eye disease — split by activity, and one instruction comes first',
  body: [
    '### Mild disease',
    '- **STOP SMOKING** — printed first and larger than everything else on the slide.',
    '- **Lubricants**; topical anti-inflammatories (**steroids, NSAIDs**).',
    '- **Head elevation on three pillows during sleep**, to reduce periorbital oedema.',
    '- **Eyelid taping during sleep**, for mild exposure keratopathy.',
    '',
    '### Moderate–severe ACTIVE disease',
    '- **Systemic steroids** — oral, or **intravenous methylprednisolone for acute compressive optic neuropathy**.',
    '- **Orbital steroid injections**, occasionally.',
    '- **Low-dose fractionated radiotherapy.**',
    '- **ORBITAL WALL DECOMPRESSION** — for **compressive optic neuropathy** or residual proptosis.',
    '- **Strabismus and lid surgery** for squint and lid retraction, **later**.',
    '',
    '*Squint and lid surgery come last because the disease must burn out first. The deck splits treatment by activity without ever saying how activity is scored — no CAS, EUGOGO or NOSPECS anywhere in it.*',
    '',
    'Src: L10 slides 22–23'
  ].join('\n'),
  qs: []
},

{
  id: 'orb-8', w: 'must',
  h: 'Preseptal vs orbital cellulitis — one septum, four questions',
  body: [
    '**PRESEPTAL CELLULITIS:** infection of the subcutaneous tissues **ANTERIOR to the orbital septum**.',
    '',
    '- **Organisms:** **Staphylococcus aureus** and **Streptococcus pyogenes**.',
    '- **Causes:** **local skin trauma** (laceration, insect bite) · **spread from periocular infection** — acute hordeolum, dacryocystitis, conjunctivitis, sinusitis · **haematogenous spread** from the upper respiratory tract or middle ear.',
    '- **Presents as:** a **swollen, often firm, tender red eyelid**, which may be **very severe** — severity of the lid is not the discriminator.',
    '',
    '### ⚠️ The four findings that decide it — the deck states them as a contrast',
    '',
    '|  |**PRESEPTAL**|**ORBITAL**|',
    '|---|---|---|',
    '|**Proptosis**|**ABSENT**|**PRESENT**|',
    '|**Chemosis**|**ABSENT**|**PRESENT**|',
    '|**Visual acuity**|**UNIMPAIRED**|may be **reduced**, colour vision impaired|',
    '|**Pupillary reactions**|**UNIMPAIRED**|**RAPD** may appear|',
    '|**Ocular motility**|**UNIMPAIRED**|**PAINFUL OPHTHALMOPLEGIA**|',
    '|CT|opacification **anterior** to the septum|opacification **behind** it, ± both|',
    '',
    '- **⚠️ Fever, lid oedema and leucocytosis occur in BOTH** and separate nothing. **Open the swollen lid and test those five things** before calling anything preseptal.',
    '',
    'Src: L10 slides 24, 25, 26'
  ].join('\n'),
  qs: ['opqb-t3-134','opqb-t3-124']
},

{
  id: 'orb-9', w: 'must',
  h: 'Bacterial orbital cellulitis — the child, the ethmoid, and the treatment order',
  body: [
    '**A serious infection of the soft tissues BEHIND the orbital septum. MORE COMMON IN CHILDREN.**',
    '',
    '- **Organisms:** **Streptococcus pneumoniae · Staphylococcus aureus · Streptococcus pyogenes · Haemophilus influenzae**.',
    '- **⚠️ SOURCE: THE PARANASAL SINUSES, ESPECIALLY THE ETHMOID** — not metastatic infection, malignancy or lid cellulitis.',
    '',
    '### Clinical picture',
    '- **Systemic:** **malaise and pyrexia, often marked.**',
    '- **Lids and conjunctiva:** tender, firm, erythematous, warm lids; **chemosis**, injection, sometimes subconjunctival haemorrhage.',
    '- **Orbit:** **proptosis** · **painful ophthalmoplegia** · **diplopia**.',
    '- **Nerve:** **reduced VA and impaired colour vision**, raising **optic nerve compression** · **RAPD**.',
    '- **Fundus:** **choroidal folds and optic disc swelling.**',
    '- *Proptosis directed **down and out** localises a subperiosteal abscess on the **medial (ethmoid)** wall — the globe moves away from the mass.*',
    '',
    '### Complications',
    '- **Ocular:** **optic neuropathy** · exposure keratopathy · **raised IOP** · endophthalmitis · **OCCLUSION OF THE CENTRAL RETINAL ARTERY OR VEIN** — this is how it blinds.',
    '- **Subperiosteal abscess — most frequently along the MEDIAL orbital wall.**',
    '- **Intracranial, uncommon but extremely serious:** **meningitis · brain abscess · CAVERNOUS SINUS THROMBOSIS**.',
    '',
    '### Investigations',
    '- **Tetanus status** if trauma · **white cell count** · **blood cultures** · **culture of nasal discharge** · **high-resolution CT of orbit, sinuses and brain** · **MRI** · **lumbar puncture if meningeal or cerebral signs develop**.',
    '',
    '### Treatment — the order is the question',
    '',
    '|Step|Detail|',
    '|---|---|',
    '|**1 Admit**|**hospital admission is MANDATORY**|',
    '|**2 IV ANTIBIOTICS — first line**|**aerobe and anaerobe cover** until culture and sensitivity return|',
    '|**3 Duration**|IV **until apyrexial 4 DAYS**, then **1–3 WEEKS oral**|',
    '|**4 Monitor**|**optic nerve function**|',
    '|**5 Surgery**|**abscess drainage considered EARLY**; **orbital decompression** for severe nerve compression|',
    '',
    '- **⚠️ DRAINAGE IS CONSIDERED EARLY — NOT after a 10–15 day trial of antibiotics.** It is driven by CT and optic nerve function, and it is *considered*, never automatic.',
    '- **⚠️ Steroids are not first line here** — this is bacterial. Steroids belong to non-infective orbital inflammation (orb-15).',
    '',
    'Src: L10 slides 26, 27, 28, 29'
  ].join('\n'),
  qs: ['opqb-t3-124','opqb-t3-125','opqb-t3-126','opqb-t3-129','opqb-t3-135','opqb-t3-136']
},

{
  id: 'orb-10', w: 'must',
  h: 'Cavernous sinus thrombosis — the intracranial complication that kills',
  body: [
    '**Clotting within the cavernous sinus**, usually from **infection: sinusitis, orbital or preseptal cellulitis, or otitis.**',
    '',
    '- **⚠️ MORTALITY: 20 % TREATED, UP TO 100 % UNTREATED.**',
    '- **Onset:** **rapid** — severe headache, malaise, nausea and vomiting.',
    '- **⚠️ Unilateral or OFTEN BILATERAL proptosis** — the two sinuses communicate, so crossing to the other eye is the signature.',
    '- **Chemosis**, and **congestion of the facial, conjunctival and retinal veins**.',
    '- **Reduced vision**, and **ocular motility signs from cranial nerves III to VI** — every motor nerve to the eye runs in or beside the sinus.',
    '- **Diagnosis:** **MRI and MR VENOGRAPHY.**',
    '- **Treatment:** **intravenous antibiotics**, sometimes **surgical drainage**.',
    '',
    '*A febrile child with orbital cellulitis who develops painful movements, marked chemosis and falling vision is at risk of this — it is the feared complication, not retinal detachment or conjunctivitis.*',
    '',
    'Src: L10 slides 27, 32'
  ].join('\n'),
  qs: ['opqb-t3-131']
},

{
  id: 'orb-11', w: 'must',
  h: 'Carotid–cavernous fistula — direct and indirect, and the classic triad',
  body: [
    '**An arteriovenous fistula between the carotid artery and the cavernous sinus**, raising venous pressure in the sinus **and in everything draining into it**.',
    '',
    '|  |**DIRECT**|**INDIRECT (‘dural shunt’)**|',
    '|---|---|---|',
    '|Flow|**HIGH-FLOW SHUNT**|low flow|',
    '|Anatomy|**directly** through a **defect in the intracavernous internal carotid wall**|the intracavernous ICA **stays INTACT**; blood arrives via **meningeal branches of the external or internal carotid**|',
    '|Cause|**TRAUMA — 75 %**|—|',
    '|Onset|**days to weeks after head injury**|**gradual onset of redness**|',
    '|Features|florid|**SUBTLER — may be overlooked**|',
    '',
    '### Direct CCF — the classic triad',
    '- **PULSATILE PROPTOSIS · CONJUNCTIVAL CHEMOSIS · A WHOOSHING NOISE IN THE HEAD.**',
    '- **Marked epibulbar vascular dilatation**; visual affection.',
    '- **⚠️ Bruit AND thrill, both ABOLISHED BY IPSILATERAL CAROTID COMPRESSION** — the bedside manoeuvre that proves it.',
    '- **Increased IOP**, from **raised episcleral venous pressure**.',
    '- **Anterior segment ischaemia:** corneal epithelial oedema, aqueous cells and flare; severe cases **iris atrophy, cataract, rubeosis iridis**.',
    '- **Ptosis** from **third nerve involvement**; **optic disc swelling**.',
    '',
    '### Indirect CCF',
    '- **Exaggerated ocular pulsation**, detected on **slit lamp applanation tonometry**.',
    '- **‘CORKSCREW’ epibulbar vessels.**',
    '- **Raised IOP, often bilateral but higher on the fistula side.**',
    '',
    '### Investigations',
    '- **CT/MRI: prominence of the SUPERIOR OPHTHALMIC VEIN**, diffuse extraocular muscle enlargement.',
    '- **Orbital Doppler** — abnormal flow patterns.',
    '- **Definitive: selective catheter DIGITAL SUBTRACTION ANGIOGRAPHY.**',
    '',
    '- **⚠️ CREPITUS ON LID PALPATION IS NOT A CCF SIGN** — crackling under the skin is **surgical emphysema from a fractured orbital wall** (orb-14), a different injury from the same blow.',
    '',
    'Src: L10 slides 33, 34, 35, 36'
  ].join('\n'),
  qs: ['opqb-t3-122','opqb-t3-123']
},

{
  id: 'orb-12', w: 'must',
  h: 'Endophthalmitis vs panophthalmitis vs cellulitis — two membranes decide everything',
  body: [
    '**⚠️ THE WHOLE GROUP IS ONE QUESTION: WHICH BOUNDARY HAS THE INFECTION CROSSED — the orbital SEPTUM, or the SCLERA?**',
    '',
    '|Where it sits|Condition|**Proptosis**|**Motility**|**Vision**|',
    '|---|---|---|---|---|',
    '|Anterior to the **orbital septum**|**Preseptal cellulitis**|**No**|Normal|**Normal**|',
    '|**Behind the septum**, outside the globe|**Orbital cellulitis**|**Yes**|**Painful ophthalmoplegia**|usually preserved; reduced only if the nerve is compressed|',
    '|**Inside the sclera** only|**Endophthalmitis**|**No**|**Normal**|**Markedly reduced**|',
    '|Inside the sclera **and through it**|**Panophthalmitis**|**Yes**|**LIMITED**|**Markedly reduced, often to no light perception**|',
    '',
    '- **⚠️ THE EQUATION: PANOPHTHALMITIS = ENDOPHTHALMITIS + MOTILITY LIMITATION.** Nothing inside the globe can restrict an extraocular muscle, so restricted movement means the infection has left the eye *(the panophthalmitis entity and this map are not in the course material — no cached deck defines it; `L37) Red Eye` names the word once, among Stevens–Johnson complications)*.',
    '- **⚠️ VISION — not pain, redness or swelling — separates ORBITAL CELLULITIS from PANOPHTHALMITIS**, because all three occur in both. Cellulitis inflames tissue *around* the globe; panophthalmitis destroys the retina.',
    '',
    '### Endophthalmitis, for the contrast',
    '- **Most serious vision-threatening complication of cataract surgery**; **24–72 h acute**, or weeks (delayed).',
    '- **Organisms:** **CoNS (Staphylococcus epidermidis commonest)**, S. aureus, streptococci.',
    '- **Signs:** **pain, redness, reduced VA, HYPOPYON, yellowish vitreous haze** — an absent red reflex is that haze seen from the front. **No proptosis, no lid swelling, no restricted movement.**',
    '- **Treatment:** urgent **vitreous tap + intravitreal vancomycin and ceftazidime**.',
    '- **⚠️ Pain and falling vision after day one of cataract surgery are never “usual” inflammation** — expected inflammation is mild and improving by day three.',
    '',
    'Src: L10 slides 24, 26; L18 (endophthalmitis after cataract surgery), cited only; panophthalmitis supplied and tagged above'
  ].join('\n'),
  qs: ['opqb-t3-116','opqb-t3-119','opqb-t3-128']
},

{
  id: 'orb-13', w: 'must',
  h: 'Retrobulbar haemorrhage — an orbital compartment syndrome, and the pupil goes big',
  body: [
    '*Supplied entity: `L10` slide 6 names “retrobulbar hge” once, among causes of proptosis, and no cached deck describes it — all below but the orbital mechanics is not taken from the course material.*',
    '',
    '**Orbital compartment syndrome:** the orbit is a bony cone sealed in front by septum and globe, so blood behind the eye cannot escape and pressure rises.',
    '',
    '- **Causes:** blunt or penetrating trauma · **retrobulbar anaesthetic injection** · orbital or lid surgery.',
    '',
    '|Sign|Why|',
    '|---|---|',
    '|**Proptosis**|the globe is the only mobile wall — **L10 slide 6’s mechanism**|',
    '|**Chemosis**|conjunctival venous and lymphatic drainage obstructed|',
    '|**TIGHT, tense lids**|septum under tension; lids will not evert, globe will not retropulse — **the most specific sign**|',
    '|**Raised IOP**|orbital pressure transmitted to the globe|',
    '|**Ophthalmoplegia**|a haematoma **behaves as an orbital mass** — **L10 slide 10 lists that cause first**|',
    '|**Falling vision**|**optic nerve and central retinal artery perfusion failing — THE EMERGENCY**|',
    '|**Mid-dilated pupil + RAPD**|optic nerve ischaemia|',
    '',
    '- **⚠️ MIOSIS NEVER OCCURS — the pupil goes LARGE.** L22’s causes of miosis are parasympathomimetics, **Horner’s**, pontine haemorrhage, acute iridocyclitis and trauma; orbital pressure is not among them. A small pupil in an injured eye means **traumatic iritis** or a ruptured globe.',
    '- **⚠️ Treatment is IMMEDIATE LATERAL CANTHOTOMY AND CANTHOLYSIS**, at the bedside before imaging — **vision is lost permanently within 60–90 minutes**.',
    '',
    '*Defect note: one question keys ophthalmoplegia as expected while offering chemosis as a distractor, and the same bank elsewhere lists chemosis among this condition’s signs. Both correct; keyed as printed.*',
    '',
    'Src: L10 slides 4, 6, 10 (orbital mechanics only); L22 (miosis causes), cited only; the entity, its signs and its management are supplied and tagged'
  ].join('\n'),
  qs: ['opqb-t3-121','opqb-t3-132']
},

{
  id: 'orb-14', w: 'must',
  h: 'Blow-out fracture of the orbital floor — earliest sign, entrapped muscle, late sign',
  body: [
    '*`L25) Trauma I`’s material, written here because two questions filed in this chapter test it; the full trauma account is `op-trauma`’s.*',
    '',
    '- **History:** blunt trauma — **FIST, TENNIS BALL**.',
    '- **Presentation:** **ecchymosis, oedema, ± SUBCUTANEOUS EMPHYSEMA**, subconjunctival haemorrhage.',
    '',
    '### ⚠️ Periorbital (surgical) emphysema — the EARLIEST sign',
    '- **Why immediate:** the floor is the **maxillary sinus roof**, the medial wall the **lamina papyracea** over the ethmoid — the moment bone breaks, orbit and sinus are one cavity.',
    '- **Felt as crepitus**, worst on **blowing the nose**. The deck gives it **its own slide, immediately BEFORE the blow-out slides**.',
    '',
    '### Diplopia',
    '- **In BOTH UPGAZE AND DOWNGAZE.**',
    '- **RESTRICTIVE motility from MECHANICAL ENTRAPMENT of the INFERIOR OBLIQUE or INFERIOR RECTUS**, or adjacent connective tissue and fat.',
    '- **⚠️ An entrapped INFERIOR rectus limits ELEVATION**, so diplopia is worst looking **up** — a tethered muscle is not weak, and the eye cannot be pulled **away** from it. *Same trap as the fibrosed inferior rectus in orb-6.*',
    '',
    '### Other signs',
    '- **INFRAORBITAL NERVE ANAESTHESIA:** **lower lid, cheek, side of nose, upper lip, upper teeth and gums** — if the fracture involves the infraorbital canal.',
    '- **ENOPHTHALMOS — SEVERE CASES, AND LATE:** early oedema and haematoma push the eye forward and mask the volume lost into the sinus.',
    '- **± ocular damage.**',
    '',
    '### CT — CORONAL section',
    '- **Fracture of the floor ± another wall** · **tissue entrapment — the TEAR DROP SIGN** · **± surgical emphysema**.',
    '',
    '### Management',
    '- **REFRAIN FROM BLOWING THE NOSE**, preferably from coughing or sneezing — **the channel that admits air admits sinus organisms**.',
    '- **Systemic antibiotics** · **surgical intervention when required**.',
    '',
    'Src: L25 slides 18–24, cited only (this deck’s words are counted by `op-trauma`); L10 slide 5 (enophthalmos from floor fracture with fat prolapse)'
  ].join('\n'),
  qs: ['opqb-t3-130','opqb-t3-133']
},

{
  id: 'orb-15', w: 'high',
  h: 'The other three orbital inflammations — mucormycosis, dacryoadenitis, pseudotumour',
  body: [
    '### Rhino-orbital MUCORMYCOSIS',
    '- **Rare, aggressive, often FATAL**; fungi of the family **Mucoraceae**.',
    '- **⚠️ THE HOST IS THE DIAGNOSIS: DIABETIC KETOACIDOSIS or immunosuppression.**',
    '- **Mechanism:** **hyphae invade blood vessels → occlusive vasculitis → infarction of orbital tissues**.',
    '- **⚠️ Infarction on septic necrosis gives the classic BLACK ESCHAR**, and eyelid necrosis.',
    '- **Treatment:** **correct the immune status** · **IV antifungal** · **daily packing and irrigation with antifungal** · **wide excision of necrotic tissue** · **exenteration may be required** · **hyperbaric oxygen**.',
    '',
    '### Acute DACRYOADENITIS',
    '- **Idiopathic**, or **viral — mumps, Epstein–Barr, cytomegalovirus**.',
    '- **Rapid onset of discomfort over the gland.**',
    '- **⚠️ Swelling of the LATERAL lid over the palpebral lobe gives the characteristic S-SHAPED PTOSIS.**',
    '- Orbital lobe enlargement gives slight **downward and inward dystopia**.',
    '',
    '### Idiopathic orbital inflammatory disease (orbital PSEUDOTUMOUR)',
    '- **Non-neoplastic, non-infective, SPACE-OCCUPYING orbital infiltration with inflammatory features** — it mimics both a tumour and an infection.',
    '- **Pathology:** **pleomorphic inflammatory cellular infiltration, then reactive fibrosis**.',
    '- **BIOPSY IS USUALLY NEEDED** — that is what separates it from both look-alikes.',
    '- **Treatment ladder:** **observation → NSAIDs → ORAL STEROIDS → radiotherapy → surgical debulking.**',
    '',
    '*This is the entity steroids are for. An infected orbit gets antibiotics.*',
    '',
    'Src: L10 slides 30, 31, 37'
  ].join('\n'),
  qs: []
},

{
  id: 'orb-16', w: 'high',
  h: 'Orbital tumours — sorted by age, by speed, and by what the CT does to bone',
  body: [
    '|Tumour|Who|Signature|CT / management|',
    '|---|---|---|---|',
    '|**DERMOID cyst**|—|**a CHORISTOMA** — normal tissue in an abnormal location. **Painless nodule, SUPEROTEMPORAL** (occasionally superonasal)|**CT to exclude bony involvement**; **excision**|',
    '|**Primary orbital VARICES**|—|**venous–lymphatic malformation**; **thin-walled distensible LOW-FLOW** plexus; **hamartomatous**|**REVERSIBLE PROPTOSIS** on dependent position, Valsalva, jugular compression (orb-5)|',
    '|**CAPILLARY haemangioma**|**CHILDHOOD**|**COMMONEST ORBITAL AND PERIORBITAL TUMOUR IN CHILDHOOD.** Rapid growth then resolution — **30 % by age 3, ~75 % by age 7**|**Treat principally for AMBLYOPIA**: oral **PROPRANOLOL**, intralesional **triamcinolone**|',
    '|**CAVERNOUS haemangioma**|**ADULTS**|**COMMONEST ORBITAL TUMOUR IN ADULTS.** **Slowly progressive UNILATERAL proptosis**; **well encapsulated**|**surgical excision**|',
    '|**PLEOMORPHIC lacrimal gland ADENOMA**|—|**commonest EPITHELIAL lacrimal gland tumour**; benign mixed-cell, from ducts and secretory elements incl. myoepithelial cells. **PAINLESS, SLOW, OVER A YEAR**; superolateral swelling, **S-shaped ptosis**, dystopia|**CT: smooth round/oval, INDENTATION but NO bony destruction**|',
    '|**Lacrimal gland CARCINOMA**|—|rare, **high morbidity and mortality**. **ADENOID CYSTIC 50 %**, then pleomorphic adenocarcinoma, mucoepidermoid, squamous. **Proptosis of RAPID ONSET**|**CT: BONY EROSION**|',
    '|**Optic nerve GLIOMA**|**CHILDREN, median 6.5 y**|**~30 % have NEUROFIBROMATOSIS TYPE I**|**CT: FUSIFORM ENLARGEMENT of the optic nerve**|',
    '|**Optic nerve sheath MENINGIOMA**|adults|from **arachnoid villi meningothelial cells**; commoner in **NF2**. **⚠️ VISUAL LOSS BEFORE PROPTOSIS**|**TRIAD: progressive visual loss + optic atrophy + OPTICOCILIARY SHUNT VESSELS.** Prognosis for life good|',
    '|**RHABDOMYOSARCOMA**|**CHILDREN**|**commonest soft tissue sarcoma of childhood** and **commonest PRIMARY ORBITAL MALIGNANCY in children**, still rare. From **undifferentiated mesenchymal cells**. **⚠️ RAPID UNILATERAL PROPTOSIS MIMICKING ORBITAL CELLULITIS**|**CT: poorly defined homogeneous mass, adjacent BONY DESTRUCTION**; **incisional biopsy**|',
    '',
    '- **⚠️ Speed:** slow and painless = benign (adenoma, cavernous haemangioma); **rapid = carcinoma or rhabdomyosarcoma**. **Bone: indentation = benign, EROSION or DESTRUCTION = malignant.**',
    '- **⚠️ A child’s proptosis that does not settle on antibiotics is a rhabdomyosarcoma until imaged and biopsied.**',
    '',
    'Src: L10 slides 38, 39, 40, 41, 42, 43, 44, 45, 46'
  ].join('\n'),
  qs: ['opqb-t3-135']
},

{
  id: 'orb-17', w: 'must',
  h: 'The anophthalmic socket — three operations, three different amounts removed',
  body: [
    '**The deck names all three and defines none** — slide 47 is the three words. **The definitions below are not taken from the course material.**',
    '',
    '|Operation|What is removed|What is left|',
    '|---|---|---|',
    '|**EVISCERATION**|**all the INNER CONTENTS of the eyeball, including the UVEAL tissue**|**the scleral shell** (and usually the muscles attached to it)|',
    '|**ENUCLEATION**|**the ENTIRE EYEBALL** — **the optic nerve is cut and the whole globe removed as a whole**|extraocular muscles, orbital fat, periorbita|',
    '|**EXENTERATION**|**ALL THE ORBITAL CONTENTS** — globe, muscles, fat, and often the lids|bare bony orbit|',
    '',
    '- **⚠️ Read the option list for the boundary word:** *inner contents* = evisceration · *entire eyeball* = enucleation · *orbital contents* = exenteration. Both evisceration questions are answered by which of those three phrases appears.',
    '- **Enucleation is the operation for intraocular malignancy** — the globe must leave intact, because eviscerating a tumour spreads it.',
    '- **Exenteration** appears in this deck as the last resort in **rhino-orbital mucormycosis** (orb-15).',
    '',
    'Src: L10 slide 47 (the three names); the definitions are supplied and tagged'
  ].join('\n'),
  qs: ['opqb-t3-114','opqb-t3-127']
},

{
  id: 'orb-18', w: 'know',
  h: 'The acutely inflamed orbit — the deck’s own differential, in five groups',
  body: [
    '|Group|Causes|',
    '|---|---|',
    '|**Infection**|**bacterial orbital cellulitis** · **fungal orbital infection** · **dacryocystitis** · **infective dacryoadenitis**|',
    '|**Vascular**|**acute orbital haemorrhage** · **cavernous sinus thrombosis** · **carotid–cavernous fistula**|',
    '|**Neoplasia**|**rapidly progressive retinoblastoma** · **lacrimal gland tumour** · metastatic lesion with inflammation, **lymphoma**, Waldenström macroglobulinaemia · in children **rhabdomyosarcoma, leukaemia, lymphangioma, neuroblastoma**|',
    '|**Endocrine**|**thyroid eye disease of RAPID ONSET**|',
    '|**Non-neoplastic inflammation**|**idiopathic orbital inflammatory disease** · **Tolosa–Hunt syndrome** · **orbital myositis** · acute allergic conjunctivitis with lid swelling · **herpes zoster ophthalmicus** · herpes simplex skin rash · **sarcoidosis** · vasculitides (**granulomatosis with polyangiitis**, polyarteritis nodosa) · **scleritis, including posterior scleritis** · **ruptured dermoid cyst**|',
    '',
    '- **⚠️ A hot orbit is not automatically an infected orbit.** Four of the five groups are not infections, and two of them — **a rapid thyroid eye disease** and **a rhabdomyosarcoma** — are the ones actually mistaken for cellulitis in practice.',
    '',
    'Src: L10 slide 48 (Table 4.1)'
  ].join('\n'),
  qs: []
}

    ]
  }
};

/* ============================================================================
   ⚠️⚠️ FINAL MEASUREMENT — WRITTEN AS THE GENUINELY LAST ACTION.

   Placed HERE, after the closing brace, because it is physically the last
   thing in the file and therefore the last thing edited. §14.1's rule has
   been broken thirteen times in this project by a header written before the
   final edit, twice by a breakdown that summed exactly to a stated total and
   was still stale, and once by a forecast written in the past tense under a
   "TRUE MEASUREMENT" banner.

   ⚠️ THIS BLOCK IS DELIBERATELY EMPTY OF NUMBERS.

   The counter was run over this file on disk after the last content edit and
   the figures were reported to the hub in the completion report, not written
   here — because a number written into the file is a number that must be
   re-verified after every subsequent edit, and this file will be edited again
   when it is spliced into `app\data\theory.ophtho.js`.

   TO RE-MEASURE (body words = the joined `body` strings only, excluding
   `intro`, `h`, `Src:` lines and `qs`):

     node -e "const vm=require('vm'),fs=require('fs');
       const c={};vm.createContext(c);
       vm.runInContext(fs.readFileSync('content/ophtho/theory-drafts/op-orbit.draft.js','utf8'),c);
       const ch=c.THEORY_DRAFT['op-orbit'];
       let t=0;for(const s of ch.sections){
         const w=s.body.split('\n').filter(l=>!/^Src:/.test(l))
                  .join(' ').split(/\s+/).filter(Boolean).length;
         console.log(s.id,w);t+=w}
       console.log('sections',ch.sections.length,'body',t,
                   'intro',ch.intro.split(/\s+/).length,
                   'pages~',(t/240).toFixed(1));"

   ============================================================================ */
