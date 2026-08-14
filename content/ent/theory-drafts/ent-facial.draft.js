/* ent-facial — "Facial nerve paralysis", ENT. Written from scratch 2026-08-14
   under START-HERE.md §14 (slide-density revision notes). No v1 existed.

   BUDGET, computed before writing by `wc -w` on the lecture files actually used
   (§14.1 formula, and its note to sum the chapter's REAL lecture set):
       L15) Facial nerve disorders          1,557 w   (this chapter's backbone;
         the whole deck is this chapter, minus its final myringotomy slide)
     + L22) Anatomy of  Ear Undergraduate     538 w   (the nerve's course through
         the temporal bone — the vertical/mastoid part in the posterior wall and
         its exit at the stylomastoid foramen, the chorda tympani as the middle
         ear's one nerve, stapedius supplied by VII against tensor tympani by V,
         and the IAC carrying VII with VIII, which is the key of four questions)
     = 2,095 body words, cap 3,000, floor 600.
   L16) Chronic otitis media (884 w), L21.1) acute otitis media (1,001 w) and
   L17,18) Otorrhea and otalgia (684 w) are each cited for ONE line — canal
   erosion by cholesteatoma, myringotomy in AOM, malignant otitis externa — and
   are NOT counted; their content is `ent-csom`, `ent-aom` and `ent-otalgia`,
   all three already written.

   MEASURED OUTCOME: 2,227 body words over 12 sections — 132 words / 6.3 % OVER
   budget, inside §14.1's 10 % merge tolerance (2,304) but not under the number,
   and that is reported rather than hidden. Measured by the merge validator's own
   count (whitespace tokens over every `body`, table rows included; `intro` is a
   separate field and is not counted). The first pass came in at 2,507 (19.7 %
   over) and TWO compression rounds took out 280 words with NO protected fact
   dropped: connective phrasing, one banned meta clause ("that is the standing
   except"), four prose restatements of an adjacent table, three extratemporal
   branch rows merged into one, the nuclear-lesion bullet folded into the locator
   table it duplicated, and the long form of two defect notes.

   WHY IT STOPS THERE, itemised as §14.1 requires. What remains is protected fact
   at a density this chapter's own lecture sets: L15 is an enumerating deck almost
   end to end — 3 nuclei, 5 segments, 6 branches, 5 Sunderland degrees, 3 electrical
   tests carrying 6 timing figures, 9 infra-nuclear cause groups, 8 complications,
   2 dosed drug regimens and 2 decompression windows — and 66 questions sit on a
   two-lecture allowance. The next 132 words could only come out of: the Seddon
   III/IV rows (Sunderland grade IV is the direct key of one question), the EMG
   timing cell (10 days / 10–14 days / 10 weeks, three separate keys), the
   longitudinal-vs-transverse table (four questions and three cases), or the
   Bell's-vs-Ramsay-Hunt table (eight questions). Each is a key or a
   discriminator, so each is a coverage-floor breach, not a compression.

   FLOOR KEPT BOTH WAYS — every component, nucleus, segment, branch, grade,
   test, timing figure, cause, complication, percentage and treatment step L15
   states, plus what L22 adds here; and every one of the 66 linked questions'
   KEY and DISCRIMINATOR as a line or a table cell. All 66 ids linked, none
   dropped.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection. It lives in every question's own
        `explanation`, one tap away through the qs links (§14.2). Kept only
        where the teaching point IS the discrimination — UMN vs nuclear vs LMN,
        the level ladder, Bell's vs Ramsay Hunt, longitudinal vs transverse
        fracture, dehiscence vs erosion vs oedema — all as tables.
     2. Question ids in body text, teaching voice, bank meta-commentary,
        per-fact citation clauses (one Src line per section), closing summary.
     3. L15's ILO list (a teaching-objectives slide, not content) and its
        repeated Sunderland slide, which restates the Seddon table already
        printed two slides earlier.
     4. Mechanism deeper than the material goes: the embryology of the second
        arch, the immunology of zoster reactivation, the physiology of the
        stapedial reflex arc beyond "loud sound damping" (the arc itself is
        `ent-audio`, and no question here tests it).
     5. Epidemiology and drug doses the material does not state. L15 gives
        aciclovir and the steroid regimen by dose and both are printed; no
        antibiotic, analgesic or eye-drop dose is invented.

   CROSS-CHAPTER DEFERRALS (§14.5) — named, so each is a promise not a deletion.
   Each was checked against all 66 of this chapter's questions: NONE tests it.
     A. FROM L22) Anatomy of  Ear Undergraduate — everything except the facial
        nerve's own course and relations: the auricle and EAC, the tympanic
        membrane's layers and landmarks, the annulus, the middle-ear walls,
        parts (attic / meso- / hypotympanum), the three ossicles, the mastoid
        air-cell types, the Eustachian tube and the inner ear    ->  `ent-earanat`
     B. FROM L15 — the deck's final slide, the definition of MYRINGOTOMY as a
        procedure with its indications. Only the one keyed line (myringotomy is
        the FIRST measure in facial palsy complicating AOM) is kept here
                                              ->  `ent-aom` (already written)
     C. RECEIVED HERE, as promised by the registers of `ent-otalgia` and
        `ent-csom`: RAMSAY HUNT in full — the 30 % full-recovery figure, the
        aciclovir dose, the 1 mg/kg/day two-week steroid regimen, the 2-week
        decompression window and the whole contrast against Bell's palsy
        (section fac-8); and FACIAL NERVE DISORDERS generally, which is this
        entire chapter. Both delivered.

   DEFECT NOTES carried in the body, one line each, keys always as printed:
   the Grade Gain p.25 key naming the lemon test for the greater superficial
   petrosal nerve; and one printed stem that carries no question at all.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field. */

var THEORY_ENT_FACIAL = {
  'ent-facial': {

    intro: 'Three questions in every stem: upper or lower motor neurone, at what level, and how badly. The eye that will not close, the branch that has been lost, and Bell’s palsy against Ramsay Hunt carry almost the whole chapter.',

    sections: [

{
  id: 'fac-1', w: 'must',
  h: 'Components, the three nuclei, and why the forehead is spared',
  body: [
    '**7,000 MOTOR axons + 3,000 SECRETOMOTOR axons**, plus taste fibres.',
    '',
    '|Component|Nucleus|Carries|',
    '|---|---|---|',
    '|**Facial nerve proper (motor)**|**motor nucleus — in the PONS**|muscles of facial expression|',
    '|**Parasympathetic (secretomotor)**|**SUPERIOR SALIVATORY nucleus**|**LACRIMAL** and nasal glands, **SUBMANDIBULAR, SUBLINGUAL** and palatal salivary glands|',
    '|**Special sensory (taste)**|**nucleus of the TRACTUS SOLITARIUS**|taste, anterior two thirds of the tongue|',
    '',
    '- **THE MOTOR NUCLEUS IS SPLIT: SUPERIOR part — BILATERAL innervation from the motor cortex; INFERIOR part — UNILATERAL CROSSED.** The upper face keeps a second cortical supply, the lower face does not: that is the whole UMN/LMN distinction.',
    '',
    'Src: L15'
  ].join('\n'),
  qs: ['entqb-ear5-126','entqb-ear5-152','entep-ear-215','entqb-ear5-130']
},

{
  id: 'fac-2', w: 'must',
  h: 'Course — five segments and the branch ladder',
  body: [
    'Arises from the **inferior border of the pons (pontomedullary sulcus)** → crosses the **CPA** → enters the **IAC**. Three parts: **intracranial · intratemporal · extratemporal**.',
    '**Five anatomical segments: 1) intracranial · 2) IAC · 3) LABYRINTHINE, ending at the GENICULATE GANGLION · 4) TYMPANIC (horizontal) · 5) MASTOID (vertical), 15–20 mm, ending at the STYLOMASTOID FORAMEN.**',
    '',
    '|Branch|Group|Function|',
    '|---|---|---|',
    '|**Greater superficial petrosal**|**intra**temporal — leaves at the geniculate ganglion|**parasympathetic secretory to the LACRIMAL gland**|',
    '|**Nerve to stapedius**|**intra**temporal|damps loud sound — **stapedius is supplied by VII, tensor tympani by V**|',
    '|**Chorda tympani**|**intra**temporal|**TASTE**, anterior two thirds, **+ submandibular and sublingual secretion**|',
    '|**Posterior auricular · nerve to stylohyoid and posterior belly of digastric · CRANIO-TEMPORAL and CRANIO-CERVICAL divisions**|**extra**temporal|muscles of facial expression, via the two divisions|',
    '',
    '- **The STYLOMASTOID FORAMEN is the dividing line — above it intratemporal, below it extratemporal.** So the **posterior auricular nerve is extratemporal**, not one of the three intratemporal branches.',
    '- **The LESSER superficial petrosal is not a facial branch — it is glossopharyngeal (IX)** *(the IX origin not in course material)*.',
    '- **The middle ear contains ONE nerve, the chorda tympani**, injured in middle-ear surgery. **The facial nerve runs in the WALLS of the middle ear** — its vertical (mastoid) part in the **posterior wall**, at risk during **bone drilling**. **The IAC carries VII with VIII.**',
    '',
    'Src: L15; L22'
  ].join('\n'),
  qs: ['entep-ear-174','entqb-ear5-122']
},

{
  id: 'fac-3', w: 'must',
  h: 'WHERE is the lesion — the topodiagnostic ladder',
  body: [
    '**Four topognostic tests: 1) SCHIRMER’S tear test · 2) STAPEDIUS REFLEX · 3) evaluation of TASTE · 4) SUBMANDIBULAR SALIVARY FLOW.** They locate the lesion; they do not grade it.',
    '',
    '|Test|Branch tested|Level it marks|',
    '|---|---|---|',
    '|**Schirmer’s**|**greater superficial petrosal**|**at or above the GENICULATE GANGLION**|',
    '|**Stapedial reflex**|**nerve to stapedius**|**mastoid segment**|',
    '|**Taste (gustatory testing)**|**chorda tympani**|above the chorda|',
    '|**Submandibular salivary flow — the LEMON TEST**|**chorda tympani**|above the chorda|',
    '',
    '|Findings|Level|',
    '|---|---|',
    '|Motor + **lacrimation, salivation, taste ALL lost** + **VIII palsy** (deafness, vertigo)|**IAC and CPA** — suspect vestibular schwannoma|',
    '|Motor + **lacrimation, salivation, taste all lost**, **hearing NORMAL**|**GENICULATE GANGLION**|',
    '|Motor + **salivation and taste lost**, **LACRIMATION NORMAL**|**BELOW the geniculate**|',
    '|Motor + taste lost, **stapedial reflex NORMAL**|below the nerve to stapedius|',
    '|**Isolated motor palsy** — lacrimation, stapedial reflex and **TASTE ALL INTACT**|**STYLOMASTOID FORAMEN** or beyond (parotid)|',
    '',
    '- **Read it as a ladder: the highest branch still working lies ABOVE the lesion; the highest branch lost lies BELOW it.**',
    '- **Absent lacrimation = above the geniculate** — IAC, CPA or labyrinthine segment. The tympanic, mastoid and stylomastoid levels lie below the greater petrosal and cannot abolish tears.',
    '- **Hyperacusis — cannot bear loud noise — means the STAPEDIUS reflex is lost**, not a cochlear, oculomotor or blink reflex.',
    '- Defect: the bank keys the **lemon test** for the greater superficial petrosal; **Schirmer’s** is correct and its own neighbouring items say so — corrected, printed key recorded.',
    '',
    'Src: L15'
  ].join('\n'),
  qs: ['entep-ear-74','entep-ear-140','entep-ear-188','entqb-ear5-129','entqb-ear5-130','entqb-ear5-131','entqb-ear5-132','entqb-ear5-140','entqb-ear5-141','entqb-ear5-145']
},

{
  id: 'fac-4', w: 'must',
  h: 'Supra-nuclear, nuclear, infra-nuclear',
  body: [
    '**Lesions are one of three: 1) SUPRA-NUCLEAR (UMNL) · 2) NUCLEAR · 3) INFRA-NUCLEAR (LMNL).**',
    '',
    '|Difference|**Supra-nuclear — UMNL**|**Infra-nuclear — LMNL**|',
    '|---|---|---|',
    '|Type of paralysis|**SPASTIC**|**FLACCID**|',
    '|Distribution|**LOWER FACE only** — forehead and eye closure spared|**THE WHOLE HALF of the face**|',
    '|Side|**CONTRALATERAL** to the brain lesion|**IPSILATERAL** to the nerve lesion|',
    '|Other signs|**CROSSED HEMIPLEGIA**|none — **no limb weakness**|',
    '|Lacrimation, salivation, taste|**normal**|lost according to the level|',
    '|Emotional movement|**often spared** — emotional–voluntary dissociation|lost with everything else|',
    '',
    '',
    '|Findings|Site|',
    '|---|---|',
    '|Motor weakness, **normal tears, saliva and taste**, hemiplegia on the **SAME side as the weak face**|**SUPRA-NUCLEAR, above the pons**|',
    '|Motor weakness, **CROSSED hemiplegia**, crossed hemianaesthesia, **OTHER CRANIAL NERVES ESPECIALLY VI** (squint); **tears, saliva and taste NORMAL**|**NUCLEAR — the pons**, where the facial fibres loop round the abducent nucleus|',
    '|Whole-face weakness ± lost tears / reflex / taste, **no limb weakness**|**INFRA-NUCLEAR (LMNL)**|',
    '',
    '- **THE TWO-STEP RULE for every eye-and-mouth stem. 1) Eye WILL NOT CLOSE → LOWER motor neurone; eye closes → UPPER. 2) The side is named for the FACE — the failing eye names it — and the MOUTH DEVIATES AWAY from the paralysed side.**',
    '- **Ipsilateral hemiplegia can never belong to an ordinary LMN palsy** — a peripheral nerve cannot weaken a limb. **Loss of the nasolabial fold and a drooping mouth corner can.**',
    '- Bedside: **inspect the face, then test voluntary AND emotional movement — laughing, blinking, wrinkling, closing the eyes, whistling, grinning, blowing out the cheeks.**',
    '- Defect: one printed item shows a photograph under “In the following picture” and asks nothing; the interrogative was supplied.',
    '',
    'Src: L15'
  ].join('\n'),
  qs: ['entep-ear-63','entep-ear-68','entep-ear-186','entep-ear-215','entep-ear-216','entep-enr-21','entqb-ear5-125','entqb-ear5-126','entqb-ear5-127','entqb-ear5-128','entqb-ear5-133','entqb-ear5-134','entqb-ear5-151','entqb-ear5-152','entqb-ear5-153']
},

{
  id: 'fac-5', w: 'high',
  h: 'DEGREE — Seddon, Sunderland, and the electrical tests',
  body: [
    '|Seddon|Sunderland|Lesion|Prognosis|',
    '|---|---|---|---|',
    '|**Neuropraxia**|**I**|**physiologic block, NO anatomical disruption**; axoplasm still crosses, so the fibre distal to the block **keeps a normal electrical response**|**temporary, a few days, FULL return expected**|',
    '|**Axonotmesis**|**II**|**AXON divided, sheath INTACT**; distal **WALLERIAN degeneration**; epineurium intact|good|',
    '||III|axons **+ ENDONEURIUM** disrupted|—|',
    '||**IV**|axons + endoneurium **+ PERINEURIUM** disrupted — **EPINEURIUM STILL INTACT**|—|',
    '|**Neurotmesis**|**V**|**COMPLETE TRANSECTION — the epineurium enclosing all fascicles is torn**|**WORST; a traumatic neuroma may develop**|',
    '',
    '|Test|What it does|Numbers that matter|',
    '|---|---|---|',
    '|**Hilger’s = maximum nerve excitability test**|faradic stimulation, involved side against the normal side|**started on the 3rd day** — a cut nerve still conducts **distal to the cut for 24–72 hours**, until Wallerian degeneration abolishes it|',
    '|**ENoG = evoked electromyography**|evoked compound action potential height as a **percentage of the good side** — **THE QUANTITATIVE TEST**|**degeneration >90 % = poor recovery**|',
    '|**EMG**|needle in the paralysed side while the patient tries to move|**voluntary potentials in the first 10 days = less than total transection**; **fibrillation after 10–14 days = denervation**; **PROGNOSTIC after 10 weeks**, potentials appearing 1–2 weeks before clinical recovery|',
    '',
    '- **Topognostic tests LOCATE; Hilger, ENoG and EMG GRADE. ENoG is NOT a topognostic test.**',
    '- **House–Brackmann grades I–VI**: I normal · II mild · III moderate · IV moderately severe · V severe · VI total. Grades severity, does not localise *(not in course material)*.',
    '',
    'Src: L15'
  ].join('\n'),
  qs: ['entqb-ear5-123','entqb-ear5-124','entqb-ear5-137','entqb-ear5-138','entqb-ear5-139','entqb-ear5-142','entep-ear-140']
},

{
  id: 'fac-6', w: 'must',
  h: 'Causes',
  body: [
    '**Supra-nuclear or nuclear: HAEMORRHAGE · VASCULAR · ENCEPHALITIS · TUMOURS · CEREBRAL PALSY.**',
    '',
    '|Infra-nuclear group|Causes|',
    '|---|---|',
    '|**Congenital**|**poor facial muscular development**|',
    '|**Inflammatory**|**MALIGNANT EXTERNAL OTITIS · AOM · chronic OM · CHOLESTEATOMA · HERPES ZOSTER OTICUS (Ramsay Hunt) · spirochaetes (LYME disease)**|',
    '|**Traumatic**|**fracture of the base of the skull · FORCEPS DELIVERY**|',
    '|**Toxic**|**DIPHTHERIA · TETANUS**|',
    '|**Metabolic**|**DIABETES**|',
    '|**Neoplastic**|primary — **facial nerve NEUROMA**; secondary — tumours of the **middle ear, PAROTID and CPA**|',
    '|**Iatrogenic**|**mastoid, parotid and CPA surgery**|',
    '|**Idiopathic**|**BELL’S PALSY — the commonest cause of facial paralysis of all**|',
    '',
    '- **Does NOT cause facial palsy: OTOMYCOSIS** — superficial canal skin only, it never reaches the nerve · **OTITIS MEDIA WITH EFFUSION** — non-suppurative · **ACOUSTIC TRAUMA** — cochlear damage, not neural.',
    '- **A parotid mass with facial weakness is malignant until proved otherwise** — adenoid cystic carcinoma is the named example. Blunt **trauma to the parotid region** reaches the extratemporal divisions.',
    '',
    'Src: L15'
  ].join('\n'),
  qs: ['entep-ear-78','entep-ear-146','entep-ear-161','entep-ear-229','entqb-ear5-136','entqb-ear5-154']
},

{
  id: 'fac-7', w: 'must',
  h: 'Bell’s palsy',
  body: [
    '**Definition: SUDDEN FLACCID facial paralysis (LMNL) in an apparently healthy individual.** **Commonest form of facial nerve paralysis, and commonest of the INTRATEMPORAL causes. Incidence 1/5,000 per year.** Attributed to **sudden exposure to cold**.',
    '**Aetiology: VIRAL — activation of HERPES SIMPLEX. Pathogenesis: SEGMENTAL DEMYELINATION → secondary OEDEMA → COMPRESSION** in the bony canal. **A DIAGNOSIS OF EXCLUSION** — a bacterial cause makes it otitis media, cholesteatoma or malignant otitis externa; **bilateral, multi-nerve or post-surgical palsy is something else by definition.**',
    '**Clinical: sudden LMN palsy · EAR PAIN in over half · recovery begins even WITHOUT treatment in most cases within a few days up to 3 weeks.** Hyperacusis and altered taste appear when the lesion is high enough to take the nerve to stapedius and the chorda tympani.',
    '**Prognosis: 71 % COMPLETE recovery · 25 % recover with SLIGHT sequelae · 4 % with SEVERE sequelae. NOT A SINGLE PATIENT FAILS TO SHOW SOME RECOVERY.**',
    '',
    '|Treatment|Detail|',
    '|---|---|',
    '|**CONSERVATIVE — helpful in 96 % of cases**|**1) Zovirax (aciclovir) 800 mg FIVE times daily for ONE WEEK + cortisone therapy · 2) physiotherapy — MASSAGE, HEAT, FACIAL EXERCISES · 3) DARK GLASSES and ARTIFICIAL TEARS, protection of the eye**|',
    '|**SURGICAL**|**complete paralysis with MORE THAN 90 % DEGENERATION ON ENoG WITHIN 6 DAYS → DECOMPRESSION** of the nerve, especially at its **entry into the FALLOPIAN CANAL**, through the **MIDDLE CRANIAL FOSSA**|',
    '',
    '- **NOT part of the treatment: vasodilators · antibiotics · salicylates · cytotoxics · topical steroid ear drops.** The steroid is **systemic**.',
    '- **The single most important step is PROTECTING THE EYE** — the nerve recovers in 96 %, the cornea does not.',
    '- **Decompression is never the immediate answer** — steroids and antiviral first, surgery only on the ENoG number inside its six-day window. Waiting to see whether steroids work spends that window.',
    '',
    'Src: L15'
  ].join('\n'),
  qs: ['entep-ear-75','entep-ear-89','entep-ear-150','entep-ear-162','entep-ear-229','entep-ear-251','entqb-ear5-136','entqb-ear5-143','entqb-ear5-144','entqb-ear5-147','entep-case-28']
},

{
  id: 'fac-8', w: 'must',
  h: 'Ramsay Hunt syndrome (herpes zoster oticus) — and the contrast with Bell’s',
  body: [
    '**THE TRIAD: 1) FACIAL PARALYSIS · 2) AUDITORY AND VESTIBULAR DYSFUNCTION — SNHL, tinnitus, vertigo · 3) PAINFUL HERPETIC VESICLES OF THE AURICLE AND THE EAC.** **Vesicles may also affect the PALATE and the ANTERIOR TWO THIRDS OF THE TONGUE.** **PHARYNGEAL PARALYSIS IS NOT PART OF IT.**',
    '**5–15 % of all acute facial palsy · the palsy appears 2–7 DAYS after the eruption · 30–50 % show incomplete recovery · diffuse lymphocytic infiltration.**',
    '',
    '||**BELL’S PALSY**|**RAMSAY HUNT / herpes zoster oticus**|',
    '|---|---|---|',
    '|Cause|**herpes SIMPLEX** reactivation; idiopathic|**herpes ZOSTER** *(varicella-zoster is not named on the slide)*|',
    '|Rash|**NONE**|**PAINFUL VESICLES, auricle and EAC**, ± palate and tongue|',
    '|Pain|ear pain in over half|**SEVERE otalgia**|',
    '|VIII nerve|not involved|**SNHL, TINNITUS, VERTIGO**|',
    '|Nerve damage|less severe|**THE NERVE IS MORE SEVERELY DAMAGED**|',
    '|**Full recovery**|**71 %** (25 % slight, 4 % severe sequelae)|**ONLY 30 % — 70 % keep some sequelae**|',
    '|Antiviral|**aciclovir 800 mg × 5 daily, one week**|**the same, STARTED AS EARLY AS POSSIBLE**|',
    '|Steroid|cortisone with the antiviral|**ORAL STEROIDS 1 mg/kg/day for 2 WEEKS**|',
    '|Decompression|**>90 % degeneration WITHIN 6 DAYS**|**>90 % degeneration AFTER 2 WEEKS**|',
    '',
    '- **The vesicles are the one finding that separates them**, and they move full recovery from 71 % to 30 %. **A palsy with vesicles is never Bell’s** — Bell’s has no rash.',
    '- **The drum is normal and intact** — the disease is in the ganglion and the nerve, not the middle ear.',
    '',
    'Src: L15; L17,18'
  ].join('\n'),
  qs: ['entep-ear-55','entep-ear-207','entep-mfe5-30','entep-enr-19','entqb-ear5-135','entqb-ear5-146','entqb-ear5-148','entep-case-7']
},

{
  id: 'fac-9', w: 'high',
  h: 'Traumatic facial paralysis',
  body: [
    '**Three kinds: ACCIDENTAL · IATROGENIC · SURGICAL.**',
    '**ACCIDENTAL — FRACTURE OF THE PETROUS TEMPORAL BONE**, the only skull bone the nerve traverses. **Lesion site commonly the GENICULATE GANGLION.** Extratemporal trauma is uncommon; occasionally direct trauma damages the nerve.',
    '',
    '||**LONGITUDINAL fracture**|**TRANSVERSE fracture**|',
    '|---|---|---|',
    '|**Facial palsy in**|**10 % of cases**|**40 % of cases**|',
    '|Ear|**bleeding from the ear, TORN drum**|**drum INTACT**|',
    '|Palsy|usually **DELAYED and PARTIAL** — oedema, good prognosis, treat medically|usually **IMMEDIATE and COMPLETE** — transection, explore|',
    '',
    '*(the delayed/partial against immediate/complete split is not stated on the slide)*',
    '- **IATROGENIC — unintentional surgical injury: 1) incision of a POST-AURICULAR ABSCESS IN AN INFANT — THE INCISION MUST BE PLACED HIGH · 2) classical CORTICAL and RADICAL MASTOIDECTOMY · 3) congenital ear surgery · 4) CPA surgery.** An infant **has no mastoid process**, so the nerve emerges superficially behind the ear *(reason not on the slide)*. **INTRAOPERATIVE FACIAL NERVE MONITORING** prevents surgical trauma in difficult otological work.',
    '- **SURGICAL, unavoidable: malignancy, CPA tumours, extensive cholesteatoma** — the nerve cannot be preserved.',
    '- **A palsy present on waking from ear surgery is iatrogenic**; in a vignette the discharging ear is not always the operated one — read the side.',
    '- **Management of a traumatic palsy: ELECTRIC TESTING · MEDICAL — STEROIDS · SURGICAL EXPLORATION.**',
    '',
    'Src: L15'
  ].join('\n'),
  qs: ['entep-ear-63','entep-ear-146','entqb-ear5-149','entqb-ear5-156','entep-case-26','entep-case-27','entep-case-30','entep-case-31']
},

{
  id: 'fac-10', w: 'high',
  h: 'Facial palsy complicating ear disease',
  body: [
    '|Disease|Mechanism at the bony canal|First move|',
    '|---|---|---|',
    '|**ACUTE OTITIS MEDIA**|**DEHISCENCE of the facial bony canal** — a congenital gap lets pus under pressure reach the nerve|**MYRINGOTOMY FIRST**, antibiotics alongside|',
    '|**CHOLESTEATOMA / chronic OM**|**EROSION of the bony canal**|mastoid surgery|',
    '|**MALIGNANT OTITIS EXTERNA**|**skull-base osteomyelitis** reaching the stylomastoid foramen|long systemic anti-pseudomonal treatment|',
    '|**BELL’S PALSY**|**OEDEMA inside an INTACT canal**|systemic steroid + antiviral|',
    '',
    '- **In AOM the answer is DEHISCENCE — not erosion, not oedema.**',
    '- **Myringotomy = deliberate surgical incision of the tympanic membrane**, and in facial palsy complicating AOM it is the **FIRST measure** — not antibiotics alone, steroids, lumbar puncture or decompression, which belongs to chronic disease failing to recover.',
    '- **Otitis media with EFFUSION never causes facial palsy.**',
    '',
    'Src: L15; L16; L21.1; L17,18'
  ].join('\n'),
  qs: ['entep-ear-78','entep-ear-149','entep-ear-161','entep-ear-191','entep-ear-236','entqb-ear5-150','entqb-ear5-154','entep-case-30','entep-case-31']
},

{
  id: 'fac-11', w: 'high',
  h: 'Complications',
  body: [
    '**A) DUE TO THE PARALYSIS ITSELF: 1) DROOLING · 2) EYE COMPLICATIONS — EXPOSURE KERATITIS, CORNEAL ULCER, PANOPHTHALMITIS · 3) FACIAL CONTRACTURES (fixed shortening of the muscles) · 4) PSYCHOLOGICAL DISTURBANCE, DEPRESSION AND SUICIDAL TENDENCIES.**',
    '',
    '|**B) Due to ABNORMAL REGENERATION**|Mechanism|',
    '|---|---|',
    '|**Facial TICS and SPASMS**|**short-circuiting between nerve fibres**|',
    '|**SYNKINESIS**|**abnormal MASS MOVEMENT** of the face|',
    '|**CROCODILE TEARS**|**misdirected SALIVARY fibres to the LACRIMAL gland** — the eye waters on eating|',
    '|**FREY’S SYNDROME**|**misdirected salivary fibres to the SWEAT glands — facial FLUSHING and SWEATING over the parotid during MASTICATION**|',
    '',
    '- **The eye is the emergency** — the cornea is lost long before the face recovers.',
    '',
    'Src: L15'
  ].join('\n'),
  qs: ['entqb-ear5-144']
},

{
  id: 'fac-12', w: 'high',
  h: 'Treatment — the general scheme',
  body: [
    '**1) TREATMENT OF THE CAUSE. 2) TREATMENT OF THE COMPLICATION — a GOLD WEIGHT to protect the cornea; facial plastic surgery for contractures. 3) FACIAL RE-ANIMATION SURGERY. 4) FACIAL REHABILITATION — massage, heat and facial exercises.**',
    '',
    '|Re-animation aim|Procedures|Indicated in|',
    '|---|---|---|',
    '|**a) Restore the ANATOMICAL integrity of the nerve**|**DECOMPRESSION · ANASTOMOSIS · GRAFTING**|**Bell’s palsy, herpes zoster oticus, acute or chronic otitis media, trauma, tumours**|',
    '|**b) Restore the FUNCTIONAL integrity of the neuromuscular system**|**i. nerve substitution — FACIAL–HYPOGLOSSAL ANASTOMOSIS · ii. muscle substitution — MASSETER or TEMPORALIS transfer**|when the nerve itself cannot be restored|',
    '',
    '',
    'Src: L15'
  ].join('\n'),
  qs: ['entep-ear-150','entqb-ear5-147','entqb-ear5-148']
}

    ]
  }
};
