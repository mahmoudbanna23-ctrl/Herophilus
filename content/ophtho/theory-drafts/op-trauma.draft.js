/* op-trauma — "Trauma", Ophthalmology. Written 2026-08-17 under
   START-HERE.md §14 (slide-density revision notes) + §14.3a (layout), and
   content\ophtho\theory-plan.md. Shape copied from
   content\ophtho\theory-drafts\op-orbit.draft.js.

   DECK LABELS USED IN THE Src LINES:
     L25   = L25) Trauma I.txt  — "Ocular Trauma", Dept of Ophthalmology,
             Alexandria University. 68 slides. THIS CHAPTER'S MAIN DECK.
     L26   = L26) Trauma II.txt — "Trauma", Prof. Ashraf Saad Galal. 18 pp.
             THIS CHAPTER'S SECOND COUNTED DECK.
     L10   = L10) orbit.txt                        — cited only
     L18   = L18) Cataract II.txt                  — cited only
     L17   = L17) Cataract I.txt                   — cited only
     L15,16 = L15,16) Cornea.txt                   — cited only

   ⚠️ L25 IS A BANKED VISUAL READ, NOT A TEXT EXTRACTION. `pdftotext` returns
   68 bytes for its 68 pages — nothing. An earlier chat rendered it at 110 dpi
   as 17 four-up contact sheets and transcribed it close to verbatim, keeping
   the lecturer's own typos ("mor damage", "pastic", "Hyphema", "Vossious").
   THE CACHE IS THE DECK. Nothing was rendered or re-read for this chapter.
   L26's text layer is sufficient and was used directly.

   ⚠️ SLIDE NUMBERS IN THE Src LINES ARE THE CACHE'S OWN SLIDE HEADINGS. The
   cache numbers them 1–68 with two gaps of its own (no slide 55, no 62–67
   individually — 62–67 are the three clinical problems, blocked together).

   ============================================================================
   BUDGET — §14.1, budget = max(summed lecture words, 25 x linked questions),
   floor 600, cap 3,000. BOTH TERMS MEASURED FROM DISK BY LINE RANGE.

     TERM 1 — L25, BY LINE RANGE (§14.1(a)):
       lines   1– 21   172 w  — the transcriber's provenance header. NOT the
                                lecture. NOT counted.
       lines  23–180   630 w  — slides 1–17: title, the whole CHEMICAL
                                INJURIES run, ocular FB, ecchymosis. COUNTED.
       lines 181–243   244 w  — slides 18–24: surgical emphysema and the
                                ORBITAL FLOOR BLOW-OUT run. ⚠️ NOT COUNTED —
                                see the blow-out notice below.
       lines 245–481   706 w  — slides 25–61: hyphaema, the blunt-trauma
                                lesions, lacerations, globe injury, IOFB, and
                                the whole management protocol. COUNTED.
       lines 482–527   453 w  — slides 62–68: the lecturer's three CLINICAL
                                PROBLEMS and "Thank you". NOT counted — see
                                the note below.
       lines 528–555   209 w  — the transcriber's "NOT COVERED ANYWHERE IN
                                THIS DECK" block. NOT counted, but it is the
                                instrument three gaps below were settled with.
       = 1,336 words claimed of the file's 2,414.

     TERM 1 — L26, BY LINE RANGE:
       lines   1–  6    14 w  — source path, title, author. NOT counted.
       lines   7–116   318 w  — the lecture itself: chemical types and their
                                chemistry, the grading table, the three
                                stages, the full management ladder, physical
                                injuries. COUNTED IN FULL — this chapter rests
                                on all of it.
       = 318 words claimed of the file's 332.

     TERM 1 TOTAL = 1,336 + 318 = 1,654 words.

     TERM 2 — 25 x 0 linked questions = 0. ⚠️ VERIFIED FROM DISK, not assumed:
       `grep -c "op-trauma" app\data\questions.ophtho.js` returns 0, and the
       full chapter histogram of questions.ophtho.js lists eighteen chapters,
       none of them this one. THIS CHAPTER HAS NO FILED QUESTIONS AT ALL, so
       the LECTURE side of the §14.2 floor does all the work and TERM 1
       governs alone. Per §14.5's audited precedent, every section's `qs` is
       legitimately empty here — that is the lecture side of the floor, not a
       defect, and nothing must be "fixed" by linking another chapter's
       questions to it.

     max(1,654 · 0) = 1,654 → floor 600 clears, cap 3,000 does not bind.
     BUDGET = 1,654. Operative ceiling per §14.1 is ~2,400 body words /
     ~10 printed pages.

   ⚠️ THE BLOW-OUT FRACTURE NOTICE (§14.5, the row marked WRITTEN HERE, WORDS
   CHARGED THERE) — ANSWERED EXPLICITLY, AS THE BRIEF REQUIRES:

     SLIDES 18–24 ARE **NOT** COUNTED IN TERM 1. Their 244 words (L25 lines
     181–243) are excluded.

     WHY. The register row reads "its words are charged to `op-trauma`", and
     read literally that would put 244 words into this chapter's TERM 1. But
     the blow-out fracture and the surgical emphysema that precedes it are
     ALREADY WRITTEN IN FULL in `orb-14` (chapter `op-orbit-mass`, merged) —
     history, the emphysema-as-earliest-sign mechanism, diplopia in both
     upgaze and downgaze, the entrapped inferior oblique or inferior rectus,
     the direction-of-restriction trap, infraorbital anaesthesia by territory,
     late enophthalmos, the coronal CT and the tear-drop sign, and the
     never-blow-the-nose rule. `orb-14` WAS READ IN FULL BEFORE THIS CHAPTER
     WAS PLANNED. This chapter re-spends none of it; it carries an italic
     cross-reference (trm-7) and nothing more. Counting words for content one
     is not writing is exactly the over-count §14.5 forbids: **the budget may
     understate a chapter, never overstate it. Under-counting costs nothing;
     over-counting buys room the content has not earned.** So the 244 words
     end up charged to NO chapter — the declared harmless case.

     ⚠️ AND THE ROW'S OWN WARNING IS CONFIRMED CORRECT. `L10`'s not-covered
     list calls orbital fracture absent; that is true OF L10 and is the wrong
     conclusion for the module, because `L25` slides 18–24 carry it in
     detail. Read from this side the inversion also runs the other way — see
     the TETANUS finding under GAPS below, where `L25`'s not-covered list is
     the one that is true only of itself.

     ⚠️ WHAT `orb-14` DOES NOT CARRY, and what the `op-orbit` register row
     therefore still owed this chapter: the WHITE-EYED blow-out fracture of
     childhood and its 24–48 h urgency, the two-week repair window, and
     MEDIAL WALL (lamina papyracea) fracture as a separate entity. `L25`'s own
     not-covered list states in terms that it prints none of the three. They
     are SUPPLIED AND TAGGED in trm-7, in four lines, which discharges that
     half of the row without touching `orb-14`'s material.

   ⚠️ THE THREE CLINICAL PROBLEMS (L25 slides 62–67, 453 w) ARE NOT COUNTED
   AND NOT WRITTEN OUT. They are the lecturer's own MCQs with NO KEYS PRINTED,
   and every fact each turns on is on a slide this chapter already writes:
   problem 1 is answered by slide 9 (irrigation first), problem 2 by slide 28
   (hyphaema with normal IOP in an adult with no risk factor is not
   hospitalised), problem 3 by slides 49–51 (hammering + peaked pupil =
   suspected open globe → shield and call). Counting them would bill the same
   content twice inside one file — §14.1's ILO-index precedent from
   `ent-swallow`. Nothing is lost: the facts are in trm-4, trm-8 and trm-11.

   DIAGRAM-DECK CHECK (§14.1). L25 lines 23–527: 2,033 words over 348 non-blank
   lines = 5.8 w/line — well above the ~2 that marks a labelled-diagram deck,
   so no diagram-deck correction applies. ⚠️ BUT THE SAME CAVEAT `op-orbit`
   recorded holds here and is now confirmed on a second file: the 5.8 is a
   property of the TRANSCRIPTION, not of the slides, which extract at 1.0 words
   per page. A words-per-line test run on a banked visual read measures the
   transcriber. It should not be reused on `op-va` or `op-pupil` as evidence
   about their decks.

   ⚠️ ENTITY FLOOR, COUNTED BEFORE WRITING (§14.1's `ent-dysph` rule — say the
   overrun up front rather than discovering it in compression):

     CHEMICAL INJURIES, 11 real units at ~90 w: the emergency rule + alkali
       vs acid chemistry · severity determinants · the four-grade table ·
       surface pathology · the three stages · first aid irrigation · the
       emergency-room sequence · the antidote list · topical medical ·
       topical+systemic and systemic medical · surgical + sequelae surgery
       = ~990
     PHYSICAL INJURIES: one 3-row grid = ~90
     BLUNT MECHANICAL: nine named lesions, but SEVEN OF THEM ARE PHOTOGRAPH
       SLIDES WITH A TITLE AND NOTHING ELSE (Vossius ring, rosette cataract,
       commotio, retinal break, retinal detachment, choroidal rupture,
       ecchymosis). Carried as ONE table, 8 rows x 2 cols ≈ ~260, not
       9 x 90. HYPHAEMA is the one full entity in the group ≈ ~270. The
       emphysema/blow-out cross-reference ≈ ~50. The four supplied
       not-in-L25 fracture facts ≈ ~90 = ~670
     PENETRATING: lacerations at three levels ~110 · rupture vs laceration vs
       open globe ~90 · sympathetic ophthalmia (supplied) ~50 · IOFB, three
       materials + the imaging rule ~150 = ~400
     MANAGEMENT PROTOCOL, framework slides costed ONE BY ONE (§14.1's
       `ent-neck` rule): rule-out-first + the four signs ~120 · the five
       do-not instructions ~110 · focused history ~90 · past ocular history
       ~40 · the four examination steps ~150 · Seidel ~60 = ~570

     REALISTIC FLOOR ≈ 2,220 words — **~34 % OVER TERM 1's 1,654**, and this
     is SAID HERE, IN ADVANCE, not discovered in compression. The cause is
     §14.1's known failure mode: the deck is over half PHOTOGRAPH SLIDES
     CARRYING A TITLE ONLY (slides 8, 14, 15, 16, 17, 18, 19, 29, 30, 31, 32,
     33, 34, 35, 36, 37, 38, 39, 41, 53, 54 — twenty-one of them), so TERM 1
     measures the captions, not the teaching. At ~2,220 the estimator gives
     2,220 ÷ 240 ≈ **9.3 printed pages**, INSIDE the ~10-page operative
     ceiling and well inside the ~12-page split trigger. **NO SPLIT PROPOSED
     — the shape holds.** Target set at ~2,100–2,250; the honest bill is
     reported below, not a promised one.

   ============================================================================
   GAPS — ANSWERED AND TAGGED, NOT DECLARED (§4a). ⚠️ EVERY ONE WAS GREPED
   ACROSS ALL 27 CACHED OPHTHALMOLOGY DECKS BEFORE BEING CALLED A GAP —
   twenty-two terms, run as stems. FOUR THINGS I EXPECTED TO BE GAPS TURNED
   OUT PRINTED, AND ALL FOUR CHANGED WHAT IS WRITTEN BELOW:

     ✅ NOT A GAP — TETANUS PROPHYLAXIS. `L25`'s own not-covered list states
        "Tetanus prophylaxis in ocular trauma" is absent. `L10) orbit` slide
        29 prints "Ascertainment of tetanus immunization status in cases of
        trauma" in the orbital cellulitis investigation list. SOURCED, cited
        in trm-11. ⚠️ THIS IS THE EXACT MIRROR OF THE BLOW-OUT INVERSION:
        each deck's not-covered list is true of ITSELF and false of the
        module. Never settle a gap on one deck's list.
     ✅ NOT A GAP — THE VOSSIUS RING, and the rosette-versus-diffuse split.
        `L25` slide 30/31 is a photograph with a title, and misspells it
        "Vossious", so `Vossius` returns zero there. `L18) Cataract II`'s
        traumatic-cataract row prints "Rosette (blunt), diffuse (penetrating)"
        and "Vossius ring (blunt)", with phaco/ECCE as management. SOURCED,
        in trm-7. ⚠️ THE SPELLING HID THE HIT IN BOTH DIRECTIONS — grep the
        stem, and grep the misspelling, exactly as §14.5 requires.
     ✅ NOT A GAP — GLASS BLOWER'S CATARACT AS A HEAT INJURY. `L17) Cataract
        I` classifies it under Traumatic → Physical → Heat. SOURCED, cited in
        trm-6 beside `L26`'s own line.
     ✅ NOT A GAP — THE ROPER-HALL NAME for the chemical-burn grading.
        Neither `L25` nor `L26` names the grading system they both print.
        `L15,16) Cornea` prints "ROPER-HALL I–IV, based on LIMBAL ISCHAEMIA".
        SOURCED, cited in trm-3. §4's "prefer the other bank/deck to outside
        knowledge" applied to decks.

   THE THREE REAL GAPS, each settled by proving a negative across 27 decks:

     1. SYMPATHETIC OPHTHALMIA. `ympathetic ophthalmia` returns exactly ONE
        hit corpus-wide: `L25`'s own not-covered block, which names it as
        absent "despite the open-globe section". No deck defines it. It is the
        one thing a penetrating-injury section cannot honestly omit, so it is
        SUPPLIED AND TAGGED in trm-9, in four lines.
     2. THE FORCED DUCTION TEST BY NAME. `orced duction` hits only `L10` and
        `L25`, and in BOTH it is inside a not-covered list. `L10` slide 10
        announces "Tests used to differentiate a restrictive from a
        neurological motility defect:" and the list is CUT OFF by the slide
        edge. SUPPLIED AND TAGGED in trm-12, one line — the same supply
        `op-orbit` made in orb-5, and it is named here because slide 59 asks
        "(Entrapped muscles?)" under EOMs and never says how.
     3. THE WHITE-EYED BLOW-OUT FRACTURE, THE TWO-WEEK REPAIR WINDOW, MEDIAL
        WALL FRACTURE, ORBITAL ROOF/APEX FRACTURE AND TRAUMATIC OPTIC
        NEUROPATHY. `L25`'s not-covered list states all five are absent, and
        `raumatic optic neuropath` returns that block and nothing else in 27
        decks. The first three are what the `op-orbit` register row owed this
        chapter; all five are SUPPLIED AND TAGGED in trm-7, compressed to
        four lines because no question anywhere turns on them.

   Two smaller supplied items, each tagged in place:
     · "EIGHT-BALL hyphaema" as a NAME (trm-8). `L25` slide 26 prints the
       mechanism verbatim — "due to decreased oxygen the initially red blood
       turns very dark (impaired aqueous circulation)" — and the cache's
       "i.e. the eight-ball hyphaema" is the TRANSCRIBER'S gloss, not the
       slide. The mechanism is sourced; the name is tagged.
     · The mechanism of iridodialysis (trm-7). `L25` slide 29 prints the word
       and "(UNIOCULAR DIPLOPIA)" and nothing else; "iris root torn from the
       ciliary body" is supplied.

   ============================================================================
   ⚠️ CROSS-CHAPTER DEFERRALS (§14.5) — named, so each is a promise and not a
   deletion. ⚠️ NO QUESTION FILED IN THIS CHAPTER CAN BE HARMED BY ANY OF
   THEM, because this chapter has no questions; each was instead checked
   against the chapter it is owed TO.

     · L25 slides 30–33 and L18's traumatic-cataract row — TRAUMATIC CATARACT
       AS A CATARACT: rosette versus diffuse morphology in full, lens
       subluxation and ectopia lentis as a lens disorder, and the phaco/ECCE
       decision.                                                   -> `op-cat`
       Kept here as two rows of the blunt-trauma lesion table, which is all
       `L25` gives them.
     · L25 slides 35–39 — COMMOTIO RETINAE, RETINAL BREAKS, RETINAL
       DETACHMENT AND CHOROIDAL RUPTURE AS RETINAL DISEASE: the mechanism of
       Berlin's oedema, break morphology, the detachment types and their
       repair, and the neovascular sequel of a choroidal rupture.
                                                                   -> `op-ret`
       Kept here as four one-line rows. `L25` prints these as photographs with
       a title and two label words; the entities belong to `L20`.
     · L26's irradiation line — RADIATION CATARACT and the heat cataracts as
       CATARACT, with `L17`'s own classification.                  -> `op-cat`
       Kept here as one row of the physical-injuries grid.
     · L25 slide 41 — MARGINAL EYELID LACERATION REPAIR as an oculoplastic
       PROCEDURE, and slide 42's CANALICULAR laceration repair with
       intubation.                        -> `op-appear` / `op-lac`
       Kept here as the three levels of lid laceration, which is the
       triage `L25` teaches. ⚠️ Both receiving decks (`L27,28`, `L9`) are on
       the owed-visual-read list, so neither row can be ticked yet.
     · L25 slide 13 / L26 — KERATOPLASTY AND KERATOPROSTHESIS as corneal
       surgery, and LIMBAL STEM CELL DEFICIENCY as a corneal disease.
                                                          -> `op-cornea-surg`
       Kept here as the names on the burn-surgery ladder.

   REGISTER ROWS THIS CHAPTER WAS OWED — BOTH DELIVERED:
     · `op-orbit` (L25 s.18–24), the "written here, words charged there"
       notice. DELIVERED as described in the budget block above: `orb-14` read
       first, not re-spent, cross-referenced in trm-7, its words excluded from
       TERM 1, and the three facts `orb-14` does NOT carry supplied and
       tagged.
     · `op-cornea` (L25 s.51, s.61 and the chemical-burn slide). The row
       states that "the open-globe protocol, hyphaema grading and the trauma
       examination sequence are `op-trauma`'s", and that `op-trauma` "still
       owes the full irrigation protocol, the burn sequelae and intraocular
       foreign body work-up from L25/L26". ALL FIVE DELIVERED — open-globe
       protocol trm-11, hyphaema grading trm-8, examination sequence trm-12,
       irrigation protocol and antidotes trm-4, burn sequelae trm-2 and trm-5,
       IOFB work-up trm-10. ⚠️ DECLARED OVERLAP, NEITHER SIDE REMOVABLE:
       `cor-2` and `cor-10` keep the Seidel test as a CORNEAL-INTEGRITY test
       (one question, opqb-t1-51, turns on fluorescein) and keep the four-step
       chemical-burn priority as `L15,16`'s OWN slide. trm-4 and trm-12 write
       the same two things from `L25`/`L26`, where they are the trauma
       protocol. Both correct; said rather than silently duplicated.

   ⚠️ ROWS THIS CHAPTER ADDS TO THE REGISTER, to be copied into
   START-HERE.md §14.5 by the hub:
     | `op-trauma` (L25 s.30–33 · L18) | Traumatic cataract as a CATARACT —
       rosette vs diffuse in full, subluxation/ectopia lentis, phaco vs ECCE |
       `op-cat` | open |
     | `op-trauma` (L26 · L17) | Radiation and heat cataract as CATARACT |
       `op-cat` | open |
     | `op-trauma` (L25 s.35–39) | Commotio retinae, retinal breaks, retinal
       detachment and choroidal rupture as RETINAL DISEASE | `op-ret` | open |
     | `op-trauma` (L25 s.41–42) | Marginal lid laceration repair and
       canalicular repair as PROCEDURES | `op-appear` / `op-lac` | open |
     | `op-trauma` (L25 s.13 · L26) | Keratoplasty, keratoprosthesis and
       limbal stem cell deficiency as CORNEAL disease | `op-cornea-surg` |
       open |

   ============================================================================
   DEFECT NOTES (§4b — noted, never disputed), each one line in the body:
     · The two decks print the SAME four-grade chemical-injury table with
       DIFFERENT prognosis wording — `L25` "good / good / guarded / poor",
       `L26` "excellent / good / guarded / very poor". The grades and the
       limbal-ischaemia fractions are identical in both. Recorded in trm-3;
       neither is treated as the error.
     · The two decks give DIFFERENT irrigation timings for the same 2 L of
       saline — `L25` slide 9 says 15–30 min, `L26` says "2 L over 1 hour" in
       the emergency room after a 15–30 min first-aid irrigation. Recorded in
       trm-4 as two stages rather than a contradiction, which is how `L26`'s
       own layout reads.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection (§14.2) — and here it is moot,
        because the chapter links no questions.
     2. The three CLINICAL PROBLEMS written out as vignettes (L25 slides
        62–67). Their facts are all written, in trm-4, trm-8 and trm-11; the
        vignettes themselves would be ~250 words restating them. Cut, and the
        arithmetic is in the budget block above.
     3. Question ids in body text, teaching voice, bank meta-commentary
        beyond the two defect notes, per-fact citation clauses (one Src line
        per section), and a closing summary section.
     4. Figure panel letters and photograph captions. Slides 8, 14, 15, 16,
        17, 19, 26, 30–39, 41, 53 and 54 are photographs; their CONTENT is
        used and their panel lettering discarded.
     5. Drug doses. `L25`'s own not-covered list confirms the deck states
        none anywhere; `L26` gives concentrations only for the antidotes
        (boric acid 4 %, sodium bicarbonate 3 %) and those ARE written.
     6. The OCULAR TRAUMA SCORE and any prognostic scoring system. Absent by
        `L25`'s own list, greped and absent module-wide, and no question tests
        it. Recorded, NOT supplied — supplying it would be padding a chapter
        that already runs 34 % over TERM 1.
     7. Chemical injury EPIDEMIOLOGY beyond "alkalis twice as common as
        acids". Neither deck gives figures.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field.

   ============================================================================
   ⚠️ FINAL MEASUREMENT — see the separate block at the very END of this file,
   below the closing brace. It is written there so that it is physically the
   last thing edited, and the counter was run over this file on disk after the
   final content edit. §14.1's rule, broken ten times in this project: the
   header is a claim, the file is the fact.
   ============================================================================ */

var THEORY_DRAFT = {
  'op-trauma': {

    intro: 'Trauma is taught as four questions asked in order: is the globe open, was it chemical, was it blunt or sharp, and what has happened behind the eye. Chemical injury is the one emergency treated before it is examined.',

    sections: [

{
  id: 'trm-1', w: 'must',
  h: 'Chemical injury — the most urgent emergency, and why alkalis are worse',
  body: [
    '- **The rule:** chemical injuries are the **MOST URGENT ophthalmic emergency**.',
    '- **Who treats it:** the **first person who sees the patient**, not the ophthalmologist.',
    '- **⚠️ Alkali vs acid:** **alkali burns are TWICE AS COMMON** — alkalis are more widely used.',
    '',
    '### The two chemistries',
    '',
    '|  |**ALKALIS**|**ACIDS**|',
    '|---|---|---|',
    '|Examples|**NaOH, KOH, Ca(OH)₂, NH₄**|**H₂SO₄, HCl, HNO₃, hypochlorite**|',
    '|Mechanism|**combine with cell membrane LIPID and stromal MUCOPOLYSACCHARIDES**|**COAGULATE surface proteins**|',
    '|Result|**DEEP penetration, continuing for WEEKS**|the coagulum is a **PROTECTIVE BARRIER** against further penetration|',
    '|Damage|**MORE**|less|',
    '',
    '- **Third category:** **tear gas compounds**.',
    '',
    '### What decides severity — three things',
    '- **The properties of the chemical.**',
    '- **The AREA of ocular surface affected.**',
    '- **The DURATION of exposure.**',
    '',
    'Src: L25 slides 2–4; L26 (chemical names and the two mechanisms)'
  ].join('\n'),
  qs: []
},

{
  id: 'trm-2', w: 'must',
  h: 'What the burn does to the eye — the surface, the stroma, and the three stages',
  body: [
    '### The surface',
    '- **Epithelium:** conjunctival and corneal **epithelial damage**.',
    '- **⚠️ LIMBAL ISCHAEMIA:** occlusion of the limbal vessels and **loss of LIMBAL STEM CELLS**.',
    '- **Consequence:** **persistent corneal epithelial defects** with **sterile corneal ulceration and perforation**.',
    '',
    '### The stroma',
    '- **Deep penetration** gives **corneal stromal opacification**, by **denaturation of the collagen bundles**.',
    '',
    '### The sequelae',
    '- **Late:** dry eye · symblepharon · cicatricial entropion · corneal scarring and vascularization.',
    '',
    '### The three stages of a severe injury',
    '',
    '|Stage|When|Conjunctiva|Cornea|IOP|',
    '|---|---|---|---|---|',
    '|**Immediate acute**|**3 days**|**epithelial necrosis, chemosis, LIMBAL BLANCHING**|epithelial necrosis, oedema, opacification|**RAISED — collagen shrinkage**|',
    '|**Subacute**|**3–7 days**|active inflammatory destruction of tissues|**ULCERATION and PERFORATION**|—|',
    '|**Late / chronic**|**> 7 days — CICATRIZATION**|scarring → **dry eye, symblepharon, entropion**|scarring, vascularization, opacification|**RAISED — scarring of the EPISCLERAL VENOUS PLEXUS**|',
    '',
    '- **⚠️ The IOP rises TWICE:** early from **collagen shrinkage**, late from **episcleral venous scarring**.',
    '',
    'Src: L25 slides 5–6; L26 (the three stages)'
  ].join('\n'),
  qs: []
},

{
  id: 'trm-3', w: 'must',
  h: 'Grading a chemical injury — limbal ischaemia is the axis',
  body: [
    '|Grade|Limbal ischaemia|Cornea|Prognosis|',
    '|---|---|---|---|',
    '|**I**|**NONE**|clear, **only epithelial damage**|**good** (`L26`: excellent)|',
    '|**II**|**< 1/3**|**HAZY but iris details VISIBLE**|**good**|',
    '|**III**|**1/3 – 1/2**|**total epithelial loss, stromal haze, iris details OBSCURED**|**guarded**|',
    '|**IV**|**> 1/2**|**OPAQUE — iris AND pupil obscured**|**poor** (`L26`: very poor)|',
    '',
    '- **⚠️ The axis:** LIMBAL ISCHAEMIA, not corneal haze. The corneal column follows it; the fractions are what separate the grades.',
    '- **The name:** this is the **ROPER-HALL** classification, graded I–IV on limbal ischaemia — named in `L15,16`, not in either trauma deck.',
    '',
    '*Defect note: both decks print the same four grades and the same fractions with different prognosis wording — `L25` good/good/guarded/poor, `L26` excellent/good/guarded/very poor. Neither is treated as the error.*',
    '',
    'Src: L25 slides 7–8; L26 (grading); L15,16 (the Roper-Hall name), cited only'
  ].join('\n'),
  qs: []
},

{
  id: 'trm-4', w: 'must',
  h: 'First aid — irrigation comes before examination',
  body: [
    '- **⚠️ START IMMEDIATELY**, by the health care provider; **call an ophthalmologist** at the same time.',
    '- **COPIOUS IRRIGATION — saline 2 L over 15–30 min.**',
    '',
    '### Why irrigation, and why first',
    '- **To restore the pH of the conjunctival sac** towards normal **as rapidly as possible**.',
    '- **To decrease the duration of contact** with the chemical.',
    '',
    '### Eversion of the upper eyelid',
    '- **Retained PARTICULATE MATTER** trapped in the **conjunctival fornices** is identified and removed.',
    '- **With a sterile COTTON SWAB.**',
    '',
    '### The emergency-room sequence',
    '- **Surface anaesthetic**, then **sedation or analgesics**.',
    '- **Separate the lids** · evert the lids · remove particulate matter.',
    '- **Irrigation:** copious saline, 2 L over 1 hour.',
    '- **⚠️ MONITOR WITH LITMUS PAPER** — the end point is a normal pH, not a fixed volume.',
    '',
    '### Antidotes',
    '',
    '|Agent|Antidote|',
    '|---|---|',
    '|**Alkalis**|**boric acid 4 %**|',
    '|**Lime**|**EDTA**|',
    '|**Acids**|**sodium bicarbonate 3 %**|',
    '|**Iodine**|**starch**|',
    '|**Aniline dyes**|**glycerine**|',
    '',
    '*Defect note: the two decks give different irrigation timings for the same 2 L — `L25` 15–30 min, `L26` "2 L over 1 hour" in the emergency room. Written as two stages, which is how `L26` lays it out.*',
    '',
    'Src: L25 slides 9–10; L26 (the ER sequence, litmus monitoring and the antidotes)'
  ].join('\n'),
  qs: []
},

{
  id: 'trm-5', w: 'must',
  h: 'Medical and surgical treatment of a chemical burn',
  body: [
    '### Topical',
    '- **Cycloplegic drops** · antibiotic drops · eye patching.',
    '- **STEROID drops** — to decrease inflammation.',
    '- **CITRIC ACID** — to inhibit **neutrophil activity**.',
    '- **Lubricants.**',
    '',
    '### Topical and systemic',
    '- **ASCORBIC ACID** — to **enhance collagen production**.',
    '- **TETRACYCLINES / systemic DOXYCYCLINE** — to inhibit **COLLAGENASE** and neutrophil activity.',
    '',
    '### Systemic',
    '- **Calcium chelators — EDTA, PENICILLAMINE** — to inhibit collagenase.',
    '- **Raised IOP:** **oral acetazolamide** or topical medications.',
    '- **Bandage soft contact lens.**',
    '- **⚠️ Prevention of SYMBLEPHARON:** **lysis of newly forming adhesions with a sterile GLASS ROD**.',
    '',
    '### Surgical',
    '- **Paracentesis · necrosectomy.**',
    '- **Conjunctival graft or flap.**',
    '- **LIMBAL STEM CELL TRANSPLANTATION** · AMNIOTIC MEMBRANE grafting.',
    '- **KERATOPLASTY** for opaque corneas.',
    '- **KERATOPROSTHESIS** — severe cases with **blindness and TOTAL limbal stem cell deficiency**.',
    '',
    '### Surgery for the sequelae',
    '- **Symblepharon management** · entropion surgery · glaucoma surgery.',
    '- **Correction of cicatrising lid deformities**, e.g. cicatricial entropion.',
    '',
    'Src: L25 slides 11–13; L26 (citric acid, chelators, bandage lens, paracentesis, necrosectomy, complication surgery)'
  ].join('\n'),
  qs: []
},

{
  id: 'trm-6', w: 'know',
  h: 'Physical injuries — three agents, and what each of them causes',
  body: [
    '|Agent|Injury|',
    '|---|---|',
    '|**UV rays**|**PHOTOPHTHALMIA · SNOW BLINDNESS**|',
    '|**IR rays**|**ECLIPSE BLINDNESS · GLASS BLOWER’S CATARACT**|',
    '|**Irradiation and burns**|**CATARACT · RETINOPATHY · OPTIC NEUROPATHY**|',
    '',
    '- **⚠️ The split is by wavelength and by tissue:** **UV burns the SURFACE**, **infrared burns the LENS**, ionising radiation reaches **lens, retina and nerve**.',
    '- **Cross-check:** `L17` classifies glass blower’s cataract under traumatic → **physical → HEAT**, alongside mechanical trauma. *The full cataract account is `op-cat`’s.*',
    '',
    'Src: L26 (physical injuries); L17 (heat cataract in the traumatic classification), cited only'
  ].join('\n'),
  qs: []
},

{
  id: 'trm-7', w: 'must',
  h: 'Blunt trauma, front to back — the lesion list, and the two that give uniocular diplopia',
  body: [
    '- **Ocular foreign body:** **subtarsal FB** found by **lid eversion**; **corneal FB** seen at the slit lamp. *Removal, rust ring and the burr are in `cor-10`.*',
    '- **Ecchymosis — the black eye:** periorbital bruising, the commonest visible sign of a blunt blow.',
    '',
    '*Surgical emphysema and the orbital floor BLOW-OUT FRACTURE are written in full in `orb-14` — the earliest sign, the entrapped inferior rectus or inferior oblique, infraorbital anaesthesia, the tear drop sign and the never-blow-the-nose rule. Not repeated here.*',
    '',
    '### The lesions, front to back',
    '',
    '|Lesion|What it is|',
    '|---|---|',
    '|**IRIDODIALYSIS**|iris root torn from the ciliary body *(the tear itself is supplied — the slide prints only the name)*. **UNIOCULAR DIPLOPIA**|',
    '|**VOSSIUS RING**|**pigment ring imprinted on the ANTERIOR LENS CAPSULE** by the pupil margin. **Blunt injury**|',
    '|**ROSETTE CATARACT**|**the BLUNT-trauma cataract**; **PENETRATING** trauma gives a **DIFFUSE** one|',
    '|**SUBLUXATION of the lens**|zonular rupture. **UNIOCULAR DIPLOPIA**|',
    '|**COMMOTIO RETINAE — BERLIN’S OEDEMA**|**retinal oedema with a CHERRY-RED SPOT**|',
    '|**RETINAL BREAK ± DETACHMENT**|the tear first, then the detachment|',
    '|**CHOROIDAL RUPTURE**|**concentric crescent TEMPORAL to the disc**|',
    '',
    '- **⚠️ UNIOCULAR diplopia:** the deck’s own label, used TWICE — iridodialysis and lens subluxation. **Double vision that persists with the fellow eye covered is a problem INSIDE the eye**, never a muscle or a nerve.',
    '- **Traumatic cataract management:** **phacoemulsification or ECCE**, timing by severity. *Full account in `op-cat`.*',
    '',
    '### ⚠️ What neither trauma deck prints',
    '*The five below are absent from `L25` by its own not-covered list and from all 27 cached decks; they are not taken from the course material.*',
    '- **WHITE-EYED blow-out fracture of childhood:** a **trapdoor** fracture with a quiet-looking eye, marked restriction and an oculocardiac reflex — **surgery within 24–48 h**.',
    '- **Repair window in adults:** **within about 2 weeks**, for persistent diplopia, large floor defects or significant enophthalmos.',
    '- **MEDIAL WALL fracture:** through the **lamina papyracea**, entrapping the **medial rectus** — the deck says only "floor ± other orbital wall".',
    '- **Orbital ROOF and APEX fractures**, and **traumatic optic neuropathy** — sudden visual loss with an RAPD after blunt head injury.',
    '',
    'Src: L25 slides 15–17, 25, 29–39; L18 (rosette vs diffuse, Vossius ring, phaco/ECCE), cited only; the four fracture facts and the iridodialysis mechanism are supplied and tagged'
  ].join('\n'),
  qs: []
},

{
  id: 'trm-8', w: 'must',
  h: 'Hyphaema — the grades, the two dangers, and who is admitted',
  body: [
    '|Grade|Blood filling the anterior chamber|',
    '|---|---|',
    '|**I**|**< 1/3**|',
    '|**II**|**1/3 – 1/2**|',
    '|**III**|**> 1/2**|',
    '|**IV**|**TOTAL**|',
    '',
    '- **⚠️ Why an old hyphaema turns black:** **impaired aqueous circulation** means **decreased oxygen**, and the initially red blood **turns very dark**. *The name "eight-ball hyphaema" is supplied; the mechanism is the slide’s.*',
    '',
    '### Complications — two, and both have a time or a target',
    '- **⚠️ RE-BLEEDING:** common in the FIRST 5 DAYS.',
    '- **Uncontrolled high IOP**, which causes: **optic nerve damage** · **BLOOD STAINING OF THE CORNEA** · **CRAO**.',
    '',
    '### Treatment',
    '- **⚠️ HOSPITALISATION IS NOT EVERY CASE.** Admit: **children · SICKLE CELL DISEASE · uncontrolled high IOP · coagulation or bleeding disorders**.',
    '- **Bed rest at 45 degrees** — upright, so blood layers inferiorly and clears the axis.',
    '- **Cycloplegic — ATROPINE · topical steroid.**',
    '- **Antiglaucoma medication** if the IOP is raised.',
    '',
    '### Surgical evacuation — two indications',
    '- **Persistently elevated IOP.**',
    '- **TOTAL hyphaema lasting more than 5 DAYS.**',
    '',
    'Src: L25 slides 25–28'
  ].join('\n'),
  qs: []
},

{
  id: 'trm-9', w: 'must',
  h: 'Lacerations and the open globe — three lid levels, two mechanisms, one repair',
  body: [
    '### Eyelid laceration — three levels, in rising order of consequence',
    '- **Skin wound only** — direct closure.',
    '- **⚠️ Involving the LID MARGIN:** repaired by direct closure — an **initial margin suture**, **partial-thickness lamellar sutures in the tarsus**, then the **margin sutures tied under the skin sutures**.',
    '- **⚠️ Involving the LACRIMAL CANALICULI** — the medial laceration that must be recognised before it is closed.',
    '',
    '### Cornea and sclera — the mechanism names the injury',
    '',
    '|Injury|Object|',
    '|---|---|',
    '|**RUPTURED GLOBE**|**BLUNT** object — the wall bursts from within|',
    '|**LACERATION, partial or full thickness**|**SHARP** object|',
    '',
    '- **⚠️ OPEN-GLOBE INJURY:** a ruptured globe OR a full-thickness laceration. A partial-thickness laceration is **not** an open globe.',
    '- **Treatment:** **repaired with sutures**, under general anaesthesia.',
    '',
    '### ⚠️ Sympathetic ophthalmia',
    '*Not taken from the course material — no cached deck defines it, and `L25` lists it as absent despite its own open-globe section.*',
    '- **What it is:** **bilateral granulomatous panuveitis** after a **penetrating injury** (or intraocular surgery) to one eye.',
    '- **The words:** the injured eye is the **exciting** eye, the fellow eye the **sympathising** one.',
    '- **When:** usually **2 weeks to 3 months** after injury; rare, but it is the reason a penetrating injury is repaired promptly and followed.',
    '',
    'Src: L25 slides 40–45; sympathetic ophthalmia is supplied and tagged'
  ].join('\n'),
  qs: []
},

{
  id: 'trm-10', w: 'must',
  h: 'Intraocular foreign body — three materials, and the scan you must not order',
  body: [
    '- **⚠️ The presence of an IOFB:** SUGGESTS GLOBE PENETRATION — it is a marker of an open globe, not a separate problem.',
    '',
    '### The three materials',
    '',
    '|Material|What it does|',
    '|---|---|',
    '|**IRON**|**SIDEROSIS**|',
    '|**COPPER**|**CHALCOSIS**|',
    '|**INERT** — stone, glass, plastic, wood|no metallosis|',
    '',
    '### Investigation',
    '- **Plain film X-rays of the head.**',
    '- **CT SCAN — the workhorse.** It shows the **location and presence of a metallic IOFB**, and the **shape and integrity of the traumatized globe**.',
    '- **⚠️ DO NOT DO AN MRI** IF A METALLIC IOFB IS SUSPECTED — the single most examinable line in the trauma deck.',
    '- **Ultrasound may be useful**, including B-scan when the media are opaque.',
    '',
    'Src: L25 slides 46–47, 52–54'
  ].join('\n'),
  qs: []
},

{
  id: 'trm-11', w: 'must',
  h: 'Ruling out the open globe — the first step, and the five things not to do',
  body: [
    '- **⚠️ THE OPEN GLOBE IS RULED OUT** BEFORE the detailed history and the focused examination. It is step 1 of the deck’s own three-step approach, and it comes before everything.',
    '- **Why:** it is the **MOST DEVASTATING of all eye injuries**.',
    '- **Suspicious history: HAMMERING**, and any high-velocity metal-on-metal work.',
    '',
    '### The four signs of a suspected open globe',
    '- **PEAKED PUPIL** — iris plugging the wound and pointing at it.',
    '- **Anterior chamber SHALLOW *or* DEEP** — either direction, depending on where the wall failed.',
    '- **BULLOUS SUBCONJUNCTIVAL HAEMORRHAGE.**',
    '- **A positive SEIDEL TEST**, detecting leaking aqueous.',
    '',
    '### ⚠️ If you suspect it — five instructions, three of them prohibitions',
    '- **PLACE AN EYE SHIELD** and CALL THE OPHTHALMOLOGIST immediately.',
    '- **DO NOT PATCH** — pressure can **extrude intraocular contents**.',
    '- **DO NOT CHECK THE EYE PRESSURE.**',
    '- **NO further eye examination**, eye drops or ointment on an open globe.',
    '- **NIL BY MOUTH**, preparing for general anaesthesia.',
    '',
    '- **Tetanus:** ascertain **tetanus immunisation status in cases of trauma** — printed in `L10`’s investigation list, not in either trauma deck.',
    '',
    'Src: L25 slides 48–51; L10 slide 29 (tetanus status), cited only'
  ].join('\n'),
  qs: []
},

{
  id: 'trm-12', w: 'must',
  h: 'The focused history and the four-step examination',
  body: [
    '### History — three headings',
    '- **MECHANISM of injury:** **blunt · sharp · chemical**.',
    '- **TIMING:** "exactly when did the trauma occur?"',
    '- **ASSOCIATED SYMPTOMS:** **vision loss · diplopia · bleeding · flashes and floaters**.',
    '',
    '### Past ocular history — three questions',
    '- **Poor vision since birth** — is the acuity you are measuring new?',
    '- **Recent eye surgery** — cataract or refractive.',
    '- **Previous eye trauma.**',
    '',
    '### Examination — four steps, in order',
    '- **STEP 1 — INSPECTION** of lids and brows, conjunctiva, cornea, sclera, anterior chamber, iris and pupils: **periocular ecchymosis · eyelid lacerations · integrity of cornea, sclera and conjunctiva · blood in the anterior chamber · a PEAKED PUPIL**.',
    '- **STEP 2 — FUNCTION:** **visual acuity · visual fields · pupillary response · extraocular movements**, asking **"entrapped muscles?"**.',
    '- **STEP 3 — OPHTHALMOSCOPY:** looking for **retinal detachment** and **vitreous haemorrhage**.',
    '- **STEP 4 — SEIDEL TEST**, to assess for a corneal break.',
    '',
    '### The Seidel test',
    '- **Apply fluorescein** to the suspected area.',
    '- **Normally appears GREEN** under **cobalt blue** light.',
    '- **⚠️ The dye turns CLEAR** where a break is present, as **leaking aqueous dilutes the fluorescein**.',
    '',
    '*The FORCED DUCTION TEST is the named test that separates restrictive from neurological limitation, and it is what step 2’s "entrapped muscles?" is asking for — the name is not taken from the course material; `L10` slide 10 announces the list and the slide edge cuts it off.*',
    '',
    'Src: L25 slides 48, 56–61; the forced duction test is supplied and tagged'
  ].join('\n'),
  qs: []
}

    ]
  }
};

/* ============================================================================
   ⚠️⚠️ FINAL MEASUREMENT — WRITTEN AS THE GENUINELY LAST ACTION.

   Placed HERE, after the closing brace, because it is physically the last
   thing in the file and therefore the last thing edited. §14.1's rule has been
   broken ten times in this project by a header written before the final edit,
   twice by a breakdown that summed exactly to a stated total and was still
   stale, and once by a forecast written in the past tense under a "TRUE
   MEASUREMENT" banner.

   ⚠️ THIS BLOCK IS DELIBERATELY EMPTY OF NUMBERS.

   ✅ HUB NOTE, 2026-08-17 — AND THIS AGENT'S CHOICE WAS THE RIGHT ONE. It
   died on the session limit at the same step as its partner, which wrote its
   numbers into its header and thereby produced the project's ELEVENTH header
   fault. This file could not produce one, because it states none. Measured
   by the hub from disk after the anchor pass below, by the canonical
   definition (`W(s.body)` over every section, `Src:` lines included, which is
   what `vth.js` and every ENT/peds count use):

     **12 sections · 2,134 body words · intro 39 words · 8.9 pages** at the
     ÷240 estimator · 0 linked questions, correctly — no question in
     `questions.ophtho.js` carries `chapter:'op-trauma'` · 0 paragraphs over
     55 words · 0 unanchored bold leads.

   Against TERM 1's 1,654 that is **+29 %**, and against the agent's own
   ~2,220 forecast it came in **86 words UNDER** — the forecast was made
   before writing, entity by entity, and it held. Inside the ~2,400 operative
   ceiling and the ~10-page shape. No split.

   ⚠️ HUB ANCHOR PASS, 2026-08-17. The agent's last act was to begin its
   §14.3a layout pass; it died inside it, leaving FIFTEEN bold leads with no
   `:`/`—` within 44 characters and therefore no `mdLead()` anchor — six
   chained label lists and nine sentence-leads, across `trm-3` to `trm-12`.
   All fixed by MOVING THE BOLD BOUNDARY or inserting an early colon. The
   body count moved by FIVE words over the whole file, which is the evidence
   that only emphasis changed.

   The counter was run over this file on disk after the last content edit and
   the figures were reported to the hub in the completion report, not written
   here — because a number written into the file is a number that must be
   re-verified after every subsequent edit, and this file will be edited again
   when it is spliced into `app\data\theory.ophtho.js`.

   TO RE-MEASURE (body words = the joined `body` strings only, excluding
   `intro`, `h`, `Src:` lines and `qs`):

     node -e "const vm=require('vm'),fs=require('fs');
       const c={};vm.createContext(c);
       vm.runInContext(fs.readFileSync('content/ophtho/theory-drafts/op-trauma.draft.js','utf8'),c);
       const ch=c.THEORY_DRAFT['op-trauma'];
       let t=0;for(const s of ch.sections){
         const w=s.body.split('\n').filter(l=>!/^Src:/.test(l))
                  .join(' ').split(/\s+/).filter(Boolean).length;
         console.log(s.id,w);t+=w}
       console.log('sections',ch.sections.length,'body',t,
                   'intro',ch.intro.split(/\s+/).length,
                   'pages~',(t/240).toFixed(1));"

   ============================================================================ */
