/* ent-earanat — "Anatomy and function of the ear", ENT. Written from scratch
   2026-08-14 under START-HERE.md §14 (slide-density revision notes). No v1
   existed.

   BUDGET, computed before writing by `wc -w` on the lecture files actually used
   (§14.1 formula, and its note to sum the chapter's REAL lecture set):
       L22) Anatomy of  Ear Undergraduate   538 w  (this chapter's backbone; the
         whole deck is this chapter and almost nothing else)
     + L20) vertigo                         723 w  (its opening block reprints
         the vestibular apparatus — vestibule/utricle/saccule/maculae = linear,
         SCC/ampulla/crista/cupula = angular — and is the second source for the
         six inner-ear questions filed here)
     = 1,261 body words, cap 3,000, floor 600.
   NOT counted, each cited for one line only, their content belonging to another
   chapter's budget: L21.2) Otitis media with effusion (424 w — "cone of light &
   umbo"), L16) Chronic otitis media (884 w — attic retraction, central pars-tensa
   perforation, jugular bulb), L15) Facial nerve disorders (1,557 w — "chorda
   tympani (taste)"), L17,18) Otorrhea and otalgia (684 w — hard impacted wax,
   parotid as a neighbouring structure), L19.1) hearing loss (661 w — impacted
   wax).

   ⚠️⚠️ MEASURED OUTCOME: 1,843 body words over 12 sections — 582 OVER the 1,261
   strict formula figure (+46 %), REPORTED AND NOT HIDDEN, per §14.1's rule that
   a chapter which cannot reach its number without cutting a protected fact stops
   and itemises what the next words would cost. This one runs the other way — it
   cannot get DOWN to its number without cutting protected facts — and the
   itemisation below is the same thing in the same spirit.

   A compression pass was run and did land: the first draft measured 2,128 and
   came down 285 words (−13.4 %) WITHOUT dropping a fact. What went was
   connective phrasing, four banned bank-meta clauses ("the standard except",
   "the exam's favourite error", "the false statement in every wax question",
   "the classic false statement"), three distractor-rejection tails, one bullet
   in earan-11 that only restated its own table, and six over-long Src lines.
   Every L22 fact and every question key survived that pass.

   WHY THE FORMULA AND THE FLOOR GENUINELY DISAGREE HERE — two reasons specific
   to this chapter, not an excuse that would generalise:
     · L22 IS AN ALMOST WORDLESS SLIDE DECK — labelled diagrams with two or three
       words beneath each. "Middle Ear Cavity / Walls (6)" is four words on the
       slide and is six walls, their contents, their relations and two
       facial-nerve segments in any notes a learner can answer from. The file's
       word count is not the size of what it teaches. Compare the chapters
       already written, whose decks are prose: L4 1,476 w for pharyngeal
       suppurations, L6 ~2,300 for stridor.
     · 66 QUESTIONS — the largest question set relative to its lecture of any ENT
       chapter written so far (2.9 q per 100 lecture words, against ~0.8 for
       pharsupp) — and THREE other chapters deferred their ear-anatomy slides
       here, so this chapter also carries their share of L22.

   WHAT REACHING 1,261 WOULD ACTUALLY COST, itemised, since nothing is left to
   trim but whole facts. The smallest set of sections summing to 582 words is:
       earan-5  Nerve supply of the ear          188 w   —  7 questions
       earan-12 Ear wash and foreign bodies      169 w   —  4 questions
       earan-11 The vestibular apparatus          91 w   —  6 questions
       earan-4  Cerumen                           92 w   —  1 question
       earan-3  Otoscopy — which way to pull      45 w   —  4 questions
                                                 ---        --
                                                 585 w      22 questions
   Deleting them would leave 22 of the 66 questions unanswerable from the notes,
   break the §14.2 floor outright, and drop three items this chapter was
   explicitly OWED by other chapters' deferral registers ("up and back", the
   Eustachian tube's neighbours in earan-5's nerve table, the inner ear). I did
   not do it. If the hub wants the strict number honoured, that is the bill.

   THE PERMISSIVE READING, offered so the hub can choose rather than guess: read
   "the chapter's cached lecture files" as every file the chapter cites, and the
   sum is L22 538 + L20 723 + L21.2 424 + L16 884 + L15 1,557 + L17,18 684 +
   L19.1 661 = 5,471 w, capped by §14.1 at 3,000. Under that reading 1,843 is
   61 % of the cap and comfortably inside budget. I have written the strict
   figure as THE budget above because counting a 1,557-word facial-nerve deck for
   one clause about chorda tympani is the kind of arithmetic that makes a budget
   meaningless. Both numbers are here; the decision is the hub's.

   FLOOR KEPT BOTH WAYS — every division, part, layer, wall, content, fluid,
   receptor, measurement and named structure L22 states, plus L20's vestibular
   table; and every one of the 66 linked questions' KEY and DISCRIMINATOR as a
   line or a table cell. All 66 ids linked, none dropped.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection. It lives in every question's own
        `explanation`, one tap away through the qs links (§14.2). Kept only where
        the teaching point IS the discrimination — pars tensa vs flaccida, outer
        vs inner canal, oval vs round window, tensor tympani vs stapedius,
        saccule vs utricle vs crista, bony vs cartilaginous ET opening, adult vs
        infant otoscopy — all as tables.
     2. Question ids in body text, teaching voice, bank meta-commentary, per-fact
        citation clauses (one Src line per section), closing summary section.
     3. Mechanism deeper than the material goes: the branchial-arch derivation of
        each auricular nerve, cochlear micromechanics and the travelling wave,
        the endocochlear potential in millivolts, hair-cell transduction, the
        physics of impedance matching beyond "oval window in, round window out".
     4. L22's REFERRED OTALGIA slide (V · IX · X · C2–C3 with their causes) is
        summarised to one line here — the nerve list, which four questions need —
        and its cause lists stay in `ent-otalgia`, which is already merged.
     5. Epidemiology, and every measurement the material does not state.

   CROSS-CHAPTER DEFERRALS (§14.5) — named, so each is a promise not a deletion.
   Each was checked against all 66 of this chapter's questions: NONE tests it.
     A. FROM L20) vertigo — everything except the vestibular apparatus block:
        the physiology of balance, the causes and clinical assessment of vertigo,
        BPPV, Ménière's, vestibular neuritis, the positional tests
                                                              ->  `ent-vertigo`
     B. FROM L16) Chronic otitis media — attic retraction cholesteatoma, safe vs
        unsafe CSOM, the perforation types, mastoid disease
                                                                 ->  `ent-csom`
     C. FROM L22 itself — the causes of referred otalgia by territory (see
        omission 4)                                  ->  `ent-otalgia` (merged)
     D. Tegmen erosion and its intracranial sequelae are named here in one clause
        only; the complication lists belong to      ->  `ent-csom`

   RECEIVED HERE, as promised by three earlier chapters' registers — all written
   in full below, so those rows can be ticked:
     · from `ent-otalgia` (L22): the two cartilage-deficient areas and the
       END-AURAL INCISION (earan-1) · the FISSURES OF SANTORINI (earan-2) · "up
       and back" for otoscopy (earan-3) · the EUSTACHIAN TUBE (earan-9) · the
       middle-ear walls and contents (earan-7, earan-8) · the inner ear
       (earan-10, earan-11).
     · from `ent-csom` (L22): ear-anatomy detail generally — the pars
       tensa/flaccida LAYERS (earan-6), the middle-ear relations (earan-7), and
       the VERTICAL FACIAL NERVE IN THE POSTERIOR WALL (earan-7, earan-8).

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field. */

var THEORY_ENT_EARANAT = {
  'ent-earanat': {

    intro: 'Pure recall, asked as lists: which wall, which window, which third, which nerve, which pull. Almost every question is an “except” over a boundary — cartilage against bone, tensa against flaccida, medial wall against anterior, saccule against utricle.',

    sections: [

{
  id: 'earan-1', w: 'must',
  h: 'The three divisions, and the auricle',
  body: [
    '**EAR = EXTERNAL EAR · MIDDLE EAR CLEFT · INNER EAR.**',
    '**External ear = AURICLE (pinna) + EXTERNAL AUDITORY CANAL + TYMPANIC MEMBRANE.** The **ossicles are middle ear** — the standing wrong option.',
    '**Auricle = elastic CARTILAGE covered by skin, EXCEPT IN TWO AREAS WHERE CARTILAGE IS ABSENT: the LOBULE and the TRAGO-HELICINE INCISURA.** Concha, tragus and helix are all cartilage.',
    '- **The END-AURAL INCISION goes through the trago-helicine incisura, because it is cartilage-deficient** — no cartilage divided, so no perichondritis and no cauliflower deformity.',
    '- **Lobule** — the other cartilage-free area: safe to pierce, spared in perichondritis.',
    '- The auricle develops from the **branchial system**, which is why four different nerves supply it.',
    '',
    'Src: L22'
  ].join('\n'),
  qs: ['entqb-ear1-1','entqb-ear1-2','enthd-ear-17','enthd-ear-20']
},

{
  id: 'earan-2', w: 'must',
  h: 'The external auditory canal',
  body: [
    '**Runs from the CONCHA to the TYMPANIC MEMBRANE.** **~24 mm**, **S-shaped**, lined throughout by **KERATINIZED STRATIFIED SQUAMOUS EPITHELIUM** continuous with the drum’s outer layer *(length and epithelium not in course material)*.',
    '',
    '||**OUTER ONE THIRD**|**INNER TWO THIRDS**|',
    '|---|---|---|',
    '|Skeleton|**CARTILAGE**|**BONE**|',
    '|Hair follicles|**PRESENT → FURUNCULOSIS arises here and only here**|**ABSENT — a furuncle is impossible**|',
    '|Glands|ceruminous + sebaceous → **wax**|none|',
    '|Special feature|**FISSURES OF SANTORINI**|—|',
    '',
    '- **TWO CONSTRICTIONS.** The important one is the **ISTHMUS — the osseocartilaginous junction, outer third against inner two-thirds. Narrowest point of the canal = the site of FOREIGN-BODY and wax IMPACTION.**',
    '- **FISSURES OF SANTORINI** — vertical clefts in the **antero-inferior CARTILAGINOUS wall**, filled by fibrous tissue, **only in the outer third and never in the middle ear**. **A two-way road between EAC and PAROTID**: parotitis felt in the canal, canal infection (malignant otitis externa) escaping into the parotid space.',
    '- **Anterior relation of the BONY canal = the TEMPOROMANDIBULAR JOINT** — pain on chewing in canal disease, and TMJ disease as otalgia with a normal ear. Posteriorly the mastoid air cells, above the middle cranial fossa.',
    '',
    'Src: L22'
  ].join('\n'),
  qs: ['entqb-ear1-3','entqb-ear1-4','entep-ear-119','entep-ear-145','entep-ear-181','entep-mfe5-35','entep-mfe5-36','enthd-ear-9','enthd-ear-19','enthd-ear-23','enthd-ear-26']
},

{
  id: 'earan-3', w: 'must',
  h: 'Otoscopy — which way the pinna is pulled',
  body: [
    '|Age|Pull the pinna|',
    '|---|---|',
    '|**ADULT**|**UP · OUT (laterally) · BACK**|',
    '|**INFANT / CHILD**|**DOWNWARDS**|',
    '',
    '- The pull **straightens the S-shaped canal**. **In the infant the bony canal has not yet developed and the curve runs the other way**, so the pull is straight down.',
    '',
    'Src: L22'
  ].join('\n'),
  qs: ['entqb-ear1-5','entqb-ear1-6','enthd-ear-10','enthd-ear-11']
},

{
  id: 'earan-4', w: 'know',
  h: 'Cerumen',
  body: [
    '- **Secreted by the SEBACEOUS and modified apocrine (ceruminous) glands of the OUTER CARTILAGINOUS THIRD only.**',
    '- **pH is ACIDIC** in a normal canal and it contains a **BACTERICIDAL ENZYME (lysozyme)** — wax is protective, not dirt.',
    '- **It clears itself by epithelial migration outwards, so it does NOT need periodic removal.** Remove it only when symptomatic: occlusion, hearing loss, or to see the drum.',
    '- **HARD IMPACTED wax is painful; soft wax is painless.**',
    '',
    'Src: hard impacted wax L17,18 / L19.1; **gland types, acidity, lysozyme and self-clearance not in course material**'
  ].join('\n'),
  qs: ['entep-ear-126']
},

{
  id: 'earan-5', w: 'must',
  h: 'Nerve supply of the ear',
  body: [
    '|Part|Sensory supply|',
    '|---|---|',
    '|**Auricle**|**GREATER AURICULAR + LESSER OCCIPITAL (C2–C3)** — most of it, posteriorly · **AURICULOTEMPORAL (V3)** — anterior upper auricle, tragus, anterior canal wall · **AURICULAR BRANCH OF VAGUS (X)**|',
    '|**External canal**|**V (5th)** and **X (10th)**|',
    '|**Tympanic membrane**|**V · IX · X** — outer surface V and X, inner surface IX|',
    '|**Middle ear**|**IX (9th)** — tympanic branch, Jacobson’s nerve|',
    '',
    '- **ARNOLD’S NERVE = the AURICULAR BRANCH OF THE VAGUS (X)** — why **cleaning, examining or syringing the ear provokes COUGH and a VASOVAGAL attack** *(eponym not in course material)*.',
    '- **Pain over the anterior upper auricle, tragus and anterior canal wall runs in the AURICULOTEMPORAL branch of V3.** In Ramsay Hunt the facial nerve carries the disease; **the sensory nerve of whichever skin is blistered carries the pain.**',
    '- **CHORDA TYMPANI (from VII, crossing the middle ear) = TASTE, ANTERIOR TWO-THIRDS of the tongue.** General sensation there is **lingual (V3)**; the **posterior third is IX for both**.',
    '- **Four nerves reach the ear, so four territories refer pain to it: V · IX · X · C2–C3.** Cause lists in `ent-otalgia`.',
    '',
    'Src: L22; chorda tympani taste L15'
  ].join('\n'),
  qs: ['entqb-ear1-8','entqb-ear2-45','entep-ear-135','entep-mfe5-43','enthd-ear-13','enthd-ear-22','enthd-ear-25']
},

{
  id: 'earan-6', w: 'must',
  h: 'The tympanic membrane',
  body: [
    '**SEMI-TRANSPARENT, pearly grey, CONCAVE, set obliquely. It is the LATERAL WALL of the middle ear; its middle layer is FIBROUS.**',
    '',
    '||**PARS TENSA**|**PARS FLACCIDA** (Shrapnell’s membrane)|',
    '|---|---|---|',
    '|Where|**the LOWER, larger part**, opposite the mesotympanum|**the UPPER small part**, above the lateral process of the malleus — the **attic**|',
    '|Layers|**THREE — SKIN · FIBROUS · MUCOUS MEMBRANE**|**TWO — SKIN · MUCOUS MEMBRANE. NO FIBROUS LAYER**|',
    '|Character|**tense and elastic** — the vibrating part|**flaccid, limp, the weakest part of the drum**|',
    '|Hearing|**responsible for sound transmission**|**no role in hearing**|',
    '|Scutum|—|lies **MEDIAL** to the scutum, the bony spur of the lateral attic wall|',
    '|Fails first by|**PERFORATION — first part to perforate in acute otitis media** (central perforation)|**RETRACTION — first part to retract under negative pressure** → attic retraction pocket → **cholesteatoma**|',
    '',
    '**LANDMARKS OF A NORMAL DRUM: the ANNULUS · the HANDLE OF THE MALLEUS ending at the UMBO · the lateral (short) process above it · the CONE OF LIGHT radiating ANTERO-INFERIORLY from the umbo.**',
    '- **The handle of the malleus is the only ossicle visible through an intact drum**, because it is embedded in the pars tensa.',
    '- **The cone of light is a REFLECTION, not a structure. It is disturbed or absent whenever the drum retracts, bulges or holds effusion**, together with the umbo.',
    '- **The STAPES FOOTPLATE is medial-wall anatomy and is never a drum landmark.**',
    '- **BLUE DRUM = a HIGH (dehiscent) JUGULAR BULB** bulging into the hypotympanum — a variant, but it **bleeds severely if the drum is incised over it**. Glue ear gives an amber drum *(both not in course material)*.',
    '- Defect: GG keys *“pars flaccida has a fibrous layer”* true; its own box says the fibrous layer is lacking there — noted, key read as **first part to be retracted**.',
    '',
    'Src: L22; L21.2; L16'
  ].join('\n'),
  qs: ['entqb-ear1-12','entqb-ear1-26','entqb-ear1-28','entep-ear-21','entep-ear-113','entep-ear-211','entep-enr-28','entep-enr-31','enthd-ear-5','enthd-ear-27']
},

{
  id: 'earan-7', w: 'must',
  h: 'The middle ear cleft and its six walls',
  body: [
    '**MIDDLE EAR CLEFT = EUSTACHIAN TUBE + TYMPANIC CAVITY + ADITUS AD ANTRUM + MASTOID ANTRUM + MASTOID AIR CELLS** — one continuous space lined by **CILIATED COLUMNAR (respiratory) epithelium**. **The SCALA TYMPANI is cochlear and belongs to the inner ear**, not the cleft. **Keratinizing squamous epithelium inside the middle ear = cholesteatoma**, never normal.',
    '',
    '|Wall|Carries|Beyond it|',
    '|---|---|---|',
    '|**ROOF (superior)**|**TEGMEN TYMPANI** — a thin bony plate|**MIDDLE CRANIAL FOSSA — the TEMPORAL LOBE**|',
    '|**FLOOR (inferior)**|thin bony plate|**INTERNAL JUGULAR VEIN — the jugular bulb**|',
    '|**LATERAL**|**TYMPANIC MEMBRANE** + the bony attic wall|external auditory canal|',
    '|**MEDIAL**|**PROMONTORY · OVAL WINDOW · ROUND WINDOW · HORIZONTAL (tympanic) FACIAL NERVE · prominence of the lateral SCC**|inner ear|',
    '|**ANTERIOR**|**EUSTACHIAN TUBE opening · canal for TENSOR TYMPANI · bony plate over the INTERNAL CAROTID ARTERY**|carotid|',
    '|**POSTERIOR**|**ADITUS AD ANTRUM · VERTICAL (mastoid, third) PART OF THE FACIAL NERVE in its bony canal**|mastoid antrum and air cells|',
    '',
    '- **FACIAL NERVE, two segments and two walls: HORIZONTAL = MEDIAL wall · VERTICAL (mastoid) = POSTERIOR wall**, leaving at the **STYLOMASTOID FORAMEN**.',
    '- **The IJV is on the FLOOR and the ICA on the ANTERIOR wall.**',
    '- **ADITUS AD ANTRUM = the narrow passage from the ATTIC to the MASTOID ANTRUM**, the **largest air cell** — the corridor along which infection and cholesteatoma travel. **Mastoid air cells: CELLULAR or SCLEROTIC.**',
    '- **Tegmen tympani erosion opens the middle cranial fossa** — extradural abscess, meningitis, temporal-lobe abscess; lists in `ent-csom`.',
    '',
    'Src: L22; L16'
  ].join('\n'),
  qs: ['entqb-ear1-9','entqb-ear1-10','entqb-ear1-25','entep-ear-226','enthd-ear-1','enthd-ear-6','enthd-ear-7','enthd-ear-16']
},

{
  id: 'earan-8', w: 'must',
  h: 'Parts and contents of the tympanic cavity',
  body: [
    '|Part|Level|Note|',
    '|---|---|---|',
    '|**EPITYMPANUM (ATTIC)**|**ABOVE the drum**|pars flaccida, head of malleus + body of incus, the aditus|',
    '|**MESOTYMPANUM**|**OPPOSITE the drum**|**the EUSTACHIAN TUBE OPENS HERE**|',
    '|**HYPOTYMPANUM**|**BELOW the drum**|over the jugular bulb|',
    '',
    '**CONTENTS: 3 OSSICLES · 2 MUSCLES · 1 NERVE crossing it (chorda tympani)** — with the **facial nerve running in its walls**.',
    '- **OSSICLES, lateral → medial, which is also the order sound travels: MALLEUS → INCUS → STAPES.** The **STAPES FOOTPLATE occupies the OVAL WINDOW** — the only ossicle touching inner-ear fluid.',
    '- **OVAL WINDOW = where sound ENTERS the inner ear. ROUND WINDOW = the pressure-relief exit** below it; the two must move in opposite phase.',
    '- **Disruption of the INCUDOMALLEOLAR JOINT interrupts CONDUCTION** — a conductive loss, not transduction or neural transmission.',
    '',
    '|Muscle|Attached to|Nerve|',
    '|---|---|---|',
    '|**STAPEDIUS**|**STAPES** — pyramidal eminence, **posterior** wall|**FACIAL (VII)**|',
    '|**TENSOR TYMPANI**|**MALLEUS** — its canal lies on the **ANTERIOR** wall beside the Eustachian tube|**TRIGEMINAL (V)**|',
    '',
    '- **Both protect the cochlea against high-intensity sound. Tensor tympani = V on the malleus; stapedius = VII on the stapes** — the pair is asked cross-matched.',
    '- **CHORDA TYMPANI may be injured during middle-ear surgery; the FACIAL NERVE during bone drilling.**',
    '',
    'Src: L22'
  ].join('\n'),
  qs: ['entqb-ear1-14','entep-ear-22','entep-ear-137','entep-ear-173','entep-ear-179','entep-ear-180','entep-ear-182','entep-mfe3-1']
},

{
  id: 'earan-9', w: 'must',
  h: 'The Eustachian tube',
  body: [
    '**Runs from the MIDDLE EAR (opening into the mesotympanum) to the NASOPHARYNX. ~36 mm** in the adult *(length is the bank’s figure, not the slide’s)*.',
    '',
    '|Part|Which end|Skeleton|At rest|',
    '|---|---|---|---|',
    '|**UPPER ONE THIRD**|near the **middle ear**|**BONY**|**PATENT — always open**; closed only if there is pathology|',
    '|**LOWER TWO THIRDS**|near the **nasopharynx**|**CARTILAGINOUS**|**potentially CLOSED** — opens on **YAWNING and SWALLOWING**|',
    '',
    '- **So the adult tube as a whole is CLOSED at rest** — the cartilaginous end is the valve; the bony end never closes.',
    '- The cartilaginous end is pulled open by the palatal muscles, which is why it fails in **cleft palate**.',
    '- **THE CHILD’S TUBE IS SHORTER, WIDER AND MORE HORIZONTAL → middle-ear infection is commoner in infants.**',
    '',
    'Src: L22'
  ].join('\n'),
  qs: ['entqb-ear1-13','enthd-ear-8']
},

{
  id: 'earan-10', w: 'must',
  h: 'Inner ear — labyrinth, cochlea and the two fluids',
  body: [
    '**LABYRINTH = an OUTER BONY labyrinth containing PERILYMPH, and an INNER MEMBRANOUS labyrinth containing ENDOLYMPH.** Two functions: **HEARING = COCHLEA · EQUILIBRIUM = VESTIBULAR APPARATUS.**',
    '',
    '|Fluid|Potassium|Formed by|Absorbed by|',
    '|---|---|---|---|',
    '|**ENDOLYMPH**|**RICH in K⁺**|**STRIA VASCULARIS** of the cochlea|**ENDOLYMPHATIC SAC**|',
    '|**PERILYMPH**|**POOR in K⁺**|**CSF**|**venules**|',
    '',
    '- **COCHLEA — TWO AND A HALF TURNS.** Its duct is the **SCALA MEDIA**; the **STRIA VASCULARIS** on its lateral wall is **the only structure that secretes endolymph**. **Reissner’s and basilar membranes bound the scala media; the ORGAN OF CORTI is the hearing receptor** — none of the three secretes.',
    '- **The INTERNAL AUDITORY CANAL carries the FACIAL (VII) and VESTIBULOCOCHLEAR (VIII) nerves.**',
    '- **The inner ear carries no pain fibres** — labyrinthine disease is painless.',
    '',
    'Src: L22'
  ].join('\n'),
  qs: ['enthd-ear-2']
},

{
  id: 'earan-11', w: 'must',
  h: 'The vestibular apparatus',
  body: [
    '|Organ|Receptor|Detects|',
    '|---|---|---|',
    '|**THREE SEMICIRCULAR CANALS**, each dilated into an **AMPULLA**|**CRISTA AMPULLARIS**, capped by the **CUPULA**|**ANGULAR (rotational) ACCELERATION**|',
    '|**VESTIBULE — the UTRICLE and SACCULE**|**MACULAE**|**LINEAR ACCELERATION**|',
    '|Cochlea|organ of Corti|hearing|',
    '',
    '- **The semicircular canals OPEN INTO THE VESTIBULE** — not the cochlea, not the endolymphatic sac, not the internal auditory canal.',
    '- **A macula answers to acceleration in the PLANE IT LIES IN: SACCULE = VERTICAL, up-and-down and gravity · UTRICLE = HORIZONTAL, back-and-forth.** Learn the plane and the pair cannot be swapped *(the vertical/horizontal split is not in course material)*.',
    '',
    'Src: L22; L20'
  ].join('\n'),
  qs: ['entqb-ear1-18','entqb-ear1-19','entqb-ear1-20','entep-ear-172','entep-enr-32','enthd-ear-14']
},

{
  id: 'earan-12', w: 'high',
  h: 'Ear wash and foreign bodies — applied canal anatomy',
  body: [
    '**INDICATED FOR: WAX · a NON-VEGETABLE, NON-IMPACTED foreign body · FUNGAL debris (aural toilette).** Body-temperature water, directed along the **postero-superior canal wall**.',
    '',
    '|**CONTRAINDICATED**|Why|',
    '|---|---|',
    '|**VEGETABLE foreign body**|**absorbs water, SWELLS and impacts**|',
    '|**Impacted foreign body**|irrigation drives it deeper|',
    '|**Perforated drum or a grommet**|water enters the middle ear|',
    '|**Acute otitis externa, viral or bacterial**|inflamed, exquisitely tender canal|',
    '',
    '- **Rupture of the drum during syringing gives all three together: SUDDEN EAR PAIN · SUDDEN HEARING IMPAIRMENT · the used FLUID TRICKLING INTO THE THROAT** through the Eustachian tube. **Cough and a vasovagal attack** are Arnold’s nerve, not a complication.',
    '- **A smooth, IMPACTED foreign body in the BONY canal against the drum → a RETRO-AURICULAR (post-aural) approach.** Syringing drives it deeper; a **hook** needs space behind the object; **forceps** cannot grip a sphere. **A young child, or any deeply impacted object → removal under GENERAL ANAESTHESIA.**',
    '',
    'Src: hard impacted wax L17,18 / L19.1. **Ear-wash indications, contraindications, complications and FB removal routes are in no cached ENT slide — not in course material**'
  ].join('\n'),
  qs: ['entqb-ear2-43','entep-ear-169','entep-ear-218','enthd-ear-43']
}

    ]
  }
};
