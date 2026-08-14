/* ent-pharsupp — "Pharyngeal suppurations", ENT. Written from scratch 2026-08-14
   under START-HERE.md §14 (slide-density revision notes). No v1 existed.

   BUDGET, computed before writing by `wc -w` on the lecture files actually used
   (§14.1 formula, and its note to sum the chapter's REAL lecture set):
       L4) PHARYNGEAL SUPPURATIONS      1,476 w   (this chapter's backbone; the
         whole deck is this chapter and nothing else)
     + L1.2) Anatomy of the pharynx     1,132 w   (contributes the tonsillar BED
         — superior constrictor, glossopharyngeal nerve, facial artery,
         buccopharyngeal fascia — and the CRYPTA MAGNA, which are the keys of
         three questions filed here; the rest of the deck is deferred below)
     = 2,608 body words, cap 3,000, floor 600.
   L3) DISEASES OF THE TONSILS & ADENOIDS (1,791 w) and L5) NECK MASS (883 w) are
   cited for single lines only and are NOT counted — their content is `ent-tonsils`
   (already written) and `ent-neck` respectively.

   MEASURED OUTCOME: 2,606 body words over 11 sections — 2 UNDER budget, measured
   by the merge validator's own count (whitespace tokens over every `body`, table
   rows included; `flow` and `intro` are separate fields and are not counted).
   The first draft came in at 2,872 — 10.1 % over — and was compressed by 265
   words WITHOUT dropping a protected fact: what went was connective phrasing,
   two banned framing clauses ("the most reprinted discrimination in the
   chapter", "the most-asked table in the chapter"), and the long form of six
   defect notes. Every L4 fact and every question key survived the pass; nothing
   was cut from the tables except duplicated wording.

   FLOOR KEPT BOTH WAYS — every definition, incidence, cause, symptom, sign,
   organism, investigation, complication and treatment step L4 states, plus what
   L1.2 adds here; and every one of the 82 linked questions' KEY and
   DISCRIMINATOR as a line or a table cell. All 82 ids linked, none dropped.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection. It lives in every question's own
        `explanation`, one tap away through the qs links (§14.2). Kept only where
        the teaching point IS the discrimination — the five-abscess master table,
        the torticollis directions, the drainage/anaesthesia table, acute vs
        chronic retropharyngeal, cellulitis vs abscess.
     2. Question ids in body text, teaching voice, bank meta-commentary, per-fact
        citation clauses (one Src line per section), closing summary section.
     3. Mechanism deeper than the material goes: the fascial-plane embryology,
        the microbiology of odontogenic flora beyond the one tagged line, the
        pathophysiology of septic embolism in Lemierre's beyond its definition.
     4. Epidemiology and drug doses the material does not state. L4 gives no
        antibiotic by name and none is invented; the anti-TB regimen is tagged.
     5. L4's three quinsy incision-point coordinates are compressed to the rule
        they share (the pointing point / the palatal landmark) rather than
        printed as three separate constructions — the bank tests that a landmark
        exists and that maturation decides the moment, never the geometry.

   CROSS-CHAPTER DEFERRALS (§14.5) — named, so each is a promise not a deletion.
   Each was checked against all 82 of this chapter's questions: NONE tests it.
     A. FROM L1.2) Anatomy of the pharynx — everything except the tonsillar bed
        and the crypta magna: the pharyngeal divisions and their boundaries,
        Waldeyer's ring, the constrictor muscles and the inferior-constrictor
        dehiscence, the pharyngeal blood supply, the nerve-supply diagrams and
        the swallowing phases                              ->  `ent-pharanat`
     B. FROM L3) DISEASES OF THE TONSILS & ADENOIDS — acute follicular
        tonsillitis and its membrane differentials, adenoid disease,
        tonsillectomy indications and its bleeding complications. Quinsy's own
        management was already deferred TO this chapter by `ent-tonsils` v3 and
        is written in full below                            ->  `ent-tonsils`
        (already written; received here as promised)
     C. FROM L5) NECK MASS — branchial cyst, thyroglossal cyst and the
        lateral/midline neck-mass differential, which appear here only as
        distractors                                              ->  `ent-neck`
     D. Bezold's abscess in full — mastoiditis, the mastoid tip, the compass of
        spread and cortical mastoidectomy. Only the one keyed line (mastoid-tip
        destruction drains into the parapharyngeal space) is kept here
                                                                  ->  `ent-csom`
     E. The four-nerve referred-otalgia table. Only the keyed line (quinsy refers
        on IX) is kept here                     ->  `ent-otalgia` (already written)

   DEFECT NOTES carried in the body, one line each, keys always as printed:
   the endpoint p.1499 box reversing both retropharyngeal drainage routes; the
   p.1444 box denying surgery in Ludwig's angina; "accumulation of pus" and
   "fluctuant" applied to a cellulitis; "LN of Renvier" for Henle; a non-keyed
   transoral option for the chronic abscess; a 65-year-old Ludwig's vignette
   against the lecture's young patient.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field. */

var THEORY_ENT_PHARSUPP = {
  'ent-pharsupp': {

    intro: 'Five collections and one cellulitis, examined almost entirely by discrimination: which space, which age, midline or not, which way the head tilts, and by which route it is drained. Ludwig’s angina is the airway question.',

    sections: [

{
  id: 'phsup-1', w: 'must',
  h: 'The two lists, and where deep neck infection comes from',
  body: [
    '**PHARYNGEAL SUPPURATIONS — five: 1) intratonsillar abscess · 2) peritonsillar abscess (QUINSY) · 3) parapharyngeal abscess · 4) ACUTE retropharyngeal abscess · 5) CHRONIC retropharyngeal abscess.**',
    '**DEEP NECK INFECTIONS — the same five, with the intratonsillar abscess replaced by LUDWIG’S ANGINA.**',
    '- **Intratonsillar abscess = a suppuration but NOT a deep neck infection; Ludwig’s angina = a deep neck infection but not a pharyngeal one.**',
    '- **Abscess-forming spaces: peritonsillar · parapharyngeal · retropharyngeal · submandibular.** The **paraglottic space is INSIDE the larynx** — tumour spread and laryngeal staging, **never a site of neck infection** *(named in no cached slide — not in course material)*.',
    '',
    '|Source of deep neck space infection|Commonest in|',
    '|---|---|',
    '|**Tonsillitis / quinsy**|**CHILDREN**|',
    '|**Odontogenic** — caries, extraction of the lower 2nd or 3rd molar|**ADULTS**|',
    '',
    'Src: L4'
  ].join('\n'),
  qs: ['entep-throat-131','entep-mfe4-9']
},

{
  id: 'phsup-2', w: 'must',
  h: 'The spaces — boundaries and contents',
  body: [
    '|Space|Lies between|Contents / note|',
    '|---|---|---|',
    '|**Peritonsillar**|**tonsillar CAPSULE** and the **lateral pharyngeal wall (superior constrictor)**|**NO vessels and no nerves**|',
    '|**Parapharyngeal**|see the cone below|**prestyloid: nothing vital · poststyloid: carotid sheath, IX–XII, sympathetic chain**|',
    '|**Retropharyngeal — ACUTE**|**posterior pharyngeal wall** and the **prevertebral fascia**, i.e. **IN FRONT OF** the fascia|**retropharyngeal lymph glands of HENLE**, paired, one either side of the midline|',
    '|**Retropharyngeal — CHRONIC**|**BEHIND the prevertebral fascia** — between fascia and **vertebral column**|tuberculous pus off the cervical spine|',
    '|**Submandibular**|**submaxillary + sublingual compartments**, split by **mylohyoid**|Ludwig’s angina crosses both, usually bilaterally|',
    '',
    '**The PARAPHARYNGEAL SPACE is an INVERTED CONE in the lateral neck.** **Superiorly SKULL BASE · inferiorly HYOID BONE · medially SUPERIOR CONSTRICTOR · laterally the superficial layer of deep cervical fascia overlying the MANDIBLE, the DEEP LOBE OF PAROTID and the PTERYGOID MUSCLES.** **The STYLOID PROCESS divides it:**',
    '- **PRESTYLOID = anterior = MUSCULAR compartment. NO vital structures.** Related to the **tonsillar fossa medially** and the **pterygoid muscles laterally** — which is how a quinsy reaches it and why it gives trismus.',
    '- **POSTSTYLOID = posterior = NEUROVASCULAR compartment.** Traversed by the **carotid sheath (carotid artery + internal jugular vein)**, **cranial nerves IX–XII** and the **cervical sympathetic chain** — every vascular and neural complication here.',
    '- **The FACIAL NERVE is NOT in it** — it lies lateral, within the parotid.',
    '',
    '**TONSILLAR BED, four layers deep to the capsule: SUPERIOR CONSTRICTOR · GLOSSOPHARYNGEAL NERVE · FACIAL ARTERY · BUCCOPHARYNGEAL FASCIA.** The **middle constrictor is not part of it**. **8–30 crypts on the medial surface; the largest, the CRYPTA MAGNA, separates upper pole from body** — quinsy’s route out.',
    '',
    'Src: L4; L1.2'
  ].join('\n'),
  qs: ['entqb-thr2-41','entqb-thr2-44','entqb-thr2-49','entqb-thr2-50','entep-throat-78','entep-throat-129','entep-throat-74','entep-throat-85']
},

{
  id: 'phsup-3', w: 'know',
  h: 'Intratonsillar abscess',
  body: [
    '**Pus INSIDE the tonsil. RARE, and in the ADULT.**',
    '**Cause: OBSTRUCTION OF ONE OF THE TONSILLAR CRYPTS** by recurrent infection, a foreign body, or food accumulating in the tonsil. **A rare complication of acute tonsillitis.**',
    '**Symptoms MILD throughout: mild fever · mild pain · dysphagia.** **Sign: a YELLOWISH, WELL-LOCALIZED, SOFT CYSTIC SWELLING ON THE SURFACE OF THE TONSIL.**',
    '**Complications: as acute tonsillitis. Treatment: INCISION UNDER LOCAL ANAESTHESIA · general antibiotics + antiseptic gargles · TONSILLECTOMY AFTER CURE.**',
    '- **Severe dysphagia, trismus, drooling and a bounding pulse = QUINSY, not this.** Mildness is the discriminator; the swelling sits **on** the tonsil rather than displacing it.',
    '',
    'Src: L4'
  ].join('\n'),
  qs: ['entqb-thr2-42','entqb-thr2-43']
},

{
  id: 'phsup-4', w: 'must',
  h: 'Quinsy — peritonsillar abscess: definition and clinical picture',
  body: [
    '**A SUPPURATIVE PROCESS IN THE PERITONSILLAR SPACE, between the tonsillar capsule and the adjacent lateral pharyngeal wall.** **Most frequently ADULT MALES. USUALLY UNILATERAL.**',
    '**Aetiology: follows an attack of ACUTE TONSILLITIS, infection travelling to the peritonsillar space VIA THE CRYPTA MAGNA → cellulitis → pus.** **Organism: STREPTOCOCCUS HAEMOLYTICUS.**',
    '**Clinical picture = acute tonsillitis in a VERY SEVERE FORM.**',
    '',
    '|Symptoms|Signs|',
    '|---|---|',
    '|**High fever**, malaise, headache|**Temperature 39–40 °C** with a **RAPID STRONG BOUNDING PULSE**|',
    '|**Marked sore throat with REFERRED OTALGIA**|**Examination difficult from TRISMUS** — spasm of **masseter and pterygoid** muscles|',
    '|**Marked dysphagia — unable to swallow even his own saliva** (drooling)|**Coated tongue, accumulated saliva**|',
    '|**Trismus** — difficulty opening the mouth|**SWELLING OF THE SOFT PALATE ABOVE AND LATERAL to the inflamed tonsil; the tonsil pushed DOWNWARDS AND MEDIALLY; the uvula oedematous and pushed TO THE OTHER SIDE**|',
    '|**Painful swelling under the jaw**|**A PALE YELLOWISH AREA over the swelling = ABSCESS MATURATION** — the point at which it may rupture spontaneously, and the point to incise|',
    '|**Halitosis** — bad-odoured breath|**TORTICOLLIS TOWARDS THE AFFECTED SIDE** — spasm of sternocleidomastoid|',
    '||**Enlarged tender JUGULO-DIGASTRIC lymph nodes**|',
    '',
    '- **Uvula deviates AWAY from the abscess — a RIGHT quinsy points the uvula LEFT — while the head tilts TOWARDS it.** The two signs lateralise in opposite directions.',
    '- **Referred otalgia travels on the GLOSSOPHARYNGEAL nerve** (its tympanic branch) — IX supplies both the tonsillar fossa and the middle ear.',
    '- **Trismus is PTERYGOID (and masseter) SPASM**, irritated across the superior constrictor — not carotid compression, not parotid spread.',
    '- **A negative rapid streptococcal swab does not exclude quinsy** *(not in course material)* — the unilateral bulge, trismus and pooled saliva decide it.',
    '- Defect: one stem writes the tonsil pushed *"medially and forward"*; L4 writes **"downwards and medially"** — key as printed.',
    '',
    'Src: L4; L1.2'
  ].join('\n'),
  qs: ['entep-nose-1','entep-throat-37','entep-throat-64','entep-throat-78','entep-throat-125','entep-throat-129','entqb-thr2-46','entqb-thr2-47','entqb-thr2-48','entqb-thr2-55','entqb-thr2-68','entqb-thr2-77','entqb-thr2-87','entqb-thr3-95','entep-throat-case-7']
},

{
  id: 'phsup-5', w: 'must',
  h: 'Quinsy — treatment',
  body: [
    '**PRESUPPURATIVE STAGE (no pus yet): BED REST · ANTIBIOTICS AND ANALGESICS · SOFT NUTRITIOUS DIET.**',
    '**SUPPURATIVE STAGE (pus pointing): INCISION AND DRAINAGE, INTRAORAL, UNDER LOCAL ANAESTHESIA** — plus general antibiotics.',
    '- **Instruments: a QUINSY KNIFE** (or a scalpel shouldered with adhesive plaster, so it cannot plunge) **and BAYONET-SHAPED QUINSY FORCEPS, introduced CLOSED and OPENED ON WITHDRAWAL to enlarge the opening safely — HILTON’S MANOEUVRE.**',
    '- **Incise at the MOST POINTING POINT**, or at either landmark: **0.5 cm lateral to where a vertical from the anterior pillar to the tongue base crosses a horizontal along the base of the uvula**, or **midway between the base of the uvula and the last upper molar**.',
    '- **INTERVAL TONSILLECTOMY ONE MONTH LATER**, after all acute manifestations subside — the tonsil is the source.',
    '- **Antibiotics do not penetrate pus**: a quinsy failing several days of them has suppurated. **Local, not general, anaesthesia** — an awake, sitting patient protects his own airway *(rationale not in course material)*.',
    '',
    'Src: L4'
  ].join('\n'),
  flow: {
    title: 'Quinsy — deciding the moment',
    steps: [
      { k:'step', t:'Acute tonsillitis, now unilateral: severe pain, trismus, drooling, uvula across', n:'Presuppurative — cellulitis' },
      { k:'step', t:'Bed rest, antibiotics, analgesics, soft diet', n:'Reassess daily' },
      { k:'decision', t:'Pale yellowish point over the swelling, or fluctuance, or no response to antibiotics?', yes:'Suppurative — drain', no:'Continue medical treatment' },
      { k:'step', t:'Intraoral incision under LOCAL anaesthesia; quinsy knife; Hilton’s manoeuvre with bayonet forceps', n:'Plus general antibiotics' },
      { k:'alert', t:'Sudden spontaneous rupture → inhalation of pus → chest complications', n:'Why the mature abscess is drained, not watched' },
      { k:'step', t:'Interval tonsillectomy one month later', n:'After all acute manifestations subside' }
    ]
  },
  qs: ['entep-throat-123','entep-throat-130','entqb-thr2-48','entqb-thr2-73','entqb-thr2-78','entqb-thr2-79','entqb-thr2-86']
},

{
  id: 'phsup-6', w: 'must',
  h: 'Parapharyngeal abscess',
  body: [
    '**Suppuration in the parapharyngeal space.** **Three causes: 1) SPREAD FROM THE TONSILS OR A QUINSY · 2) ODONTOGENIC INFECTION, e.g. extraction of the 3rd molar tooth · 3) MIDDLE-EAR INFECTION WITH BONY DESTRUCTION OF THE MASTOID TIP = BEZOLD’S ABSCESS.** **Pott’s disease is not one of them** — that causes the chronic retropharyngeal abscess.',
    '**Clinical picture: HIGH FEVER, SORE THROAT and ODYNOPHAGIA** — L4 names odynophagia here and nowhere else — **· a TENDER LATERAL NECK SWELLING extending DOWN TO THE HYOID BONE · the LATERAL PHARYNGEAL WALL AND TONSIL DISPLACED MEDIALLY · TRISMUS.**',
    '- **"BECK’S TRIAD": a NORMAL tonsil pushed medially from outside · a tender firm swelling on the LATERAL side of the neck · trismus.** *(The eponym is in no cached slide and elsewhere names the triad of cardiac tamponade — not in course material; the three signs are L4’s own.)*',
    '- **The tonsil is DISPLACED, not diseased** — white spots on it are follicular tonsillitis.',
    '- **The only collection BOTH visible in the pharynx AND palpable externally in the neck** — quinsy is intraoral only.',
    '**Treatment: general treatment as for peritonsillar abscess · SYSTEMIC ANTIBIOTICS · INCISION AND DRAINAGE, EXTERNALLY, ALONG THE ANTERIOR BORDER OF STERNOCLEIDOMASTOID, UNDER GENERAL ANAESTHESIA.**',
    '',
    'Src: L4'
  ].join('\n'),
  qs: ['entep-throat-63','entep-throat-116','entqb-thr2-52','entqb-thr2-53','entqb-thr2-66','entqb-thr2-81','entep-throat-case-6']
},

{
  id: 'phsup-7', w: 'must',
  h: 'Acute retropharyngeal abscess',
  body: [
    '**An abscess between the POSTERIOR PHARYNGEAL WALL and the PREVERTEBRAL FASCIA.**',
    '**Cause: SUPPURATION OF THE RETROPHARYNGEAL LYMPH GLANDS OF HENLE, present on EACH SIDE OF THE MIDLINE.** **These glands ATROPHY AT ABOUT THE FIFTH YEAR of age**, so the disease is one of **INFANTS AND YOUNG CHILDREN (0–4 years)**, infection transmitted from nearby structures. **In adults — especially the IMMUNOCOMPROMISED — it follows a FOREIGN BODY in the posterior pharyngeal wall or TRAUMA FROM AN ENDOSCOPIC PROCEDURE** (including oral endotracheal intubation).',
    '',
    '|Symptoms|Signs|',
    '|---|---|',
    '|**Fever, malaise, PALLOR**|**High temperature, rapid pulse, pallor, TOXAEMIA**|',
    '|**Dysphagia** — difficulty suckling and swallowing|**NUCHAL RIGIDITY with the head TILTED TOWARDS THE UNINVOLVED (healthy) SIDE**|',
    '|**STRIDOR** — difficult noisy breathing|**Pharyngeal congestion with a swelling of the posterior pharyngeal wall LIMITED TO ONE SIDE OF THE MIDLINE**|',
    '||**Enlarged tender cervical lymph nodes**|',
    '',
    '- **WHY IT CANNOT CROSS THE MIDLINE: the buccopharyngeal fascia covering the posterior pharyngeal wall and the prevertebral fascia are ATTACHED TO EACH OTHER IN THE MIDLINE.** A midline swelling therefore means the **chronic** form.',
    '**INVESTIGATION — LATERAL SOFT-TISSUE NECK RADIOGRAPH (plain X-ray) CONFIRMS THE DIAGNOSIS**, and is the **initial** imaging; CT is for extent and planning. Three findings:',
    '- **Abnormal THICKENING OF PREVERTEBRAL SOFT TISSUE — more than 50 % of the vertebral body.**',
    '- **STRAIGHTENING OR REVERSAL of the normal cervical curvature** — a *forward convexity* is the normal lordosis, not a finding.',
    '- **AIR IN THE PREVERTEBRAL SOFT TISSUE.**',
    '**COMPLICATIONS: 1) SPONTANEOUS RUPTURE → SUDDEN DEATH FROM ASPIRATION · 2) LARYNGEAL OEDEMA AND STRIDOR · 3) MEDIASTINITIS.**',
    '**TREATMENT: systemic antibiotics, analgesics, soft diet · INCISION AND DRAINAGE — VERTICAL incision, PERORALLY, WITHOUT ANAESTHESIA (especially in infants), in a HEAD-LOW POSITION WITH SUCTION, to avoid aspiration · TRACHEOTOMY if the airway is compromised.**',
    '- **No anaesthetic: a GA abolishes the reflexes that stop pus being inhaled** — as for the head-down tilt and the sucker.',
    '- Defect: one printing calls the nodes **"LN of Renvier"**, another **"LNs of Henle"**; L4 uses **Henle** (Renvier corrupts Rouvière). The **"80 %"** figure is the bank’s own. Keys as printed.',
    '',
    'Src: L4'
  ].join('\n'),
  qs: ['entep-throat-17','entep-throat-85','entep-mfe4-5','entqb-thr2-54','entqb-thr2-58','entqb-thr2-65','entqb-thr2-69','entqb-thr2-70','entqb-thr2-71','entqb-thr2-72','entqb-thr2-82','entqb-thr2-84','entqb-thr3-99','entep-throat-case-9']
},

{
  id: 'phsup-8', w: 'must',
  h: 'Chronic retropharyngeal abscess',
  body: [
    '**A COLD ABSCESS BEHIND THE PREVERTEBRAL FASCIA, due to TUBERCULOSIS OF THE CERVICAL VERTEBRAE (POTT’S DISEASE).** **It forms a MIDLINE swelling of the posterior pharyngeal wall.** **Occurs later in life — MIDDLE-AGED ADULTS.**',
    '',
    '|Symptoms|Signs|',
    '|---|---|',
    '|**Generalized tuberculous toxaemia — LOSS OF WEIGHT**|**NORMAL temperature and pulse**|',
    '|**MILD FEVER, USUALLY AT NIGHT, with excessive sweating**|**TENDERNESS ALONG THE VERTEBRAE**|',
    '|**Dysphagia**|**Enlarged PAINLESS cervical lymph nodes**|',
    '|**PAINFUL NECK MOVEMENTS**|**MIDLINE CYSTIC FLUCTUANT SWELLING on the posterior pharyngeal wall**|',
    '',
    '**INVESTIGATIONS: neck radiographs show the manifestations of a retropharyngeal abscess and may show CARIES OF THE CERVICAL VERTEBRAE or CALCIFIED TUBERCULOUS LYMPH NODES.** The full workup adds **CHEST X-RAY + SPUTUM ANALYSIS** to find the primary focus, and **CT of neck and chest BEFORE any drainage**, since the cervical spine may need stabilising *(chest film, sputum and CT not stated on the slide)*.',
    '**TREATMENT — GENERAL: FULL ANTI-TUBERCULOUS DRUG THERAPY · REST and a nutritious diet RICH IN PROTEINS AND CALCIUM.** *(The four-drug regimen — isoniazid, rifampicin, pyrazinamide, ethambutol — and the exclusion of corticosteroids are not in course material.)*',
    '**LOCAL: INCISION AND DRAINAGE EXTERNALLY — THROUGH THE NECK AND NEVER THROUGH THE MOUTH — ALONG THE POSTERIOR BORDER OF STERNOCLEIDOMASTOID, UNDER GENERAL ANAESTHESIA · STABILIZATION OF THE CERVICAL VERTEBRAE in spinal caries.**',
    '- **Dysphagia in known cervical spinal tuberculosis IS this abscess** bulging into the pharynx — not anorexia.',
    '- Defect: a non-keyed option offers drainage *"via transoral or external approach"*; L4 forbids the transoral route outright — recorded, options untouched.',
    '',
    'Src: L4'
  ].join('\n'),
  qs: ['entep-throat-74','entep-throat-92','entep-throat-93','entqb-thr2-56','entqb-thr2-61','entqb-thr2-62','entqb-thr2-63','entqb-thr2-64','entqb-thr2-80','entqb-thr2-83']
},

{
  id: 'phsup-9', w: 'must',
  h: 'Telling them apart — the master table, the head tilt, and the drainage routes',
  body: [
    '||**Intratonsillar**|**Quinsy**|**Parapharyngeal**|**Acute retropharyngeal**|**Chronic retropharyngeal**|',
    '|---|---|---|---|---|---|',
    '|Age|**adult, rare**|**adult male**|any|**infant / child under 5**|**middle-aged adult**|',
    '|Course|**mild**|acute, severe|acute, severe|acute, toxic|**chronic — weeks, night fever, weight loss**|',
    '|Swelling|**on the tonsil surface**, yellowish cystic|**soft palate ABOVE AND LATERAL to the tonsil**; tonsil pushed **down and medially**|**LATERAL neck, down to the hyoid**; normal tonsil pushed **medially**|**posterior pharyngeal wall, ONE SIDE OF THE MIDLINE**|**posterior pharyngeal wall, MIDLINE**, cystic fluctuant|',
    '|Uvula|central|**pushed to the OPPOSITE side**|central|central|central|',
    '|Trismus|**no**|**yes**|**yes**|no|no|',
    '|Torticollis|no|**TOWARDS the affected side** (SCM spasm)|no|**TOWARDS the HEALTHY side** (unilateral pressure)|**painful neck movements**, no tilt|',
    '|Temp / pulse|mild fever|**39–40 °C, rapid bounding pulse**|high fever|high, toxic, pallor|**NORMAL temperature and pulse**|',
    '|Nodes|—|**tender jugulo-digastric**|tender|**tender cervical**|**PAINLESS cervical**|',
    '|Externally palpable|no|no|**YES**|no|no|',
    '',
    '**DRAINAGE:**',
    '',
    '|Collection|Route|Anaesthesia|',
    '|---|---|---|',
    '|**Intratonsillar abscess**|**intraoral incision**|**LOCAL**|',
    '|**Quinsy**|**intraoral (internal) incision**, Hilton’s manoeuvre|**LOCAL**|',
    '|**Parapharyngeal abscess**|**EXTERNAL — ANTERIOR border of sternocleidomastoid**|**GENERAL**|',
    '|**Acute retropharyngeal abscess**|**PERORAL vertical incision, HEAD-LOW with suction**|**NONE**|',
    '|**Chronic retropharyngeal abscess**|**EXTERNAL — POSTERIOR border of sternocleidomastoid; never through the mouth**|**GENERAL**|',
    '|**Ludwig’s angina**|**horizontal SUBMENTAL incision, mylohyoid divided**|**GENERAL**|',
    '',
    '- **Anterior border = parapharyngeal; POSTERIOR border = chronic retropharyngeal.** Both external.',
    '- **The ACUTE retropharyngeal abscess is the only one drained through the mouth without anaesthesia; the CHRONIC one is the only one where the mouth is forbidden** — same region, opposite in every management line.',
    '- **TORTICOLLIS occurs in quinsy (towards the affected side, SCM spasm), in acute retropharyngeal abscess (away from it, unilateral pressure) and in GRISEL’S SYNDROME** — atlanto-axial subluxation after a head-and-neck infection or adenotonsillectomy *(in no cached slide — not in course material)*.',
    '- Defect: one endpoint box asserts **external** drainage for the acute abscess and denies it for the chronic — the reverse of L4 and of its own key; the bank’s other printing is correct. Keys as printed.',
    '',
    'Src: L4'
  ].join('\n'),
  qs: ['entep-throat-32','entep-throat-64','entqb-thr2-45','entqb-thr2-57','entqb-thr2-59','entqb-thr2-60','entqb-thr2-71','entqb-thr2-75','entqb-thr2-61']
},

{
  id: 'phsup-10', w: 'must',
  h: 'Ludwig’s angina',
  body: [
    '**A RAPIDLY SPREADING, POTENTIALLY FATAL INFECTION OF THE SUBMANDIBULAR SPACE.** **Rapidly spreading CELLULITIS, WITH NO TENDENCY FOR ABSCESS FORMATION**, involving **BOTH the SUBMAXILLARY and SUBLINGUAL compartments, USUALLY BILATERALLY.** **Spread is BY DIRECT EXTENSION ALONG FASCIAL PLANES, NOT BY LYMPHATICS.**',
    '**Aetiology: 1) DENTAL OR PERIODONTAL INFECTION — 70 %, especially the 2ND AND 3RD LOWER MOLAR TEETH · 2) PENETRATING INJURY OF THE FLOOR OF THE MOUTH — stab, gunshot, horse kick · 3) MANDIBULAR FRACTURE.**',
    '**Clinical features: a YOUNG PATIENT WITH POOR DENTITION · UNILATERAL neck pain and swelling that SOON BECOMES BILATERAL · increasing OEDEMA and BRAWNY INDURATION of the suprahyoid soft tissues and floor of mouth, THRUSTING THE TONGUE AGAINST THE PALATE → RESPIRATORY EMBARRASSMENT · increasing fever, NECK RIGIDITY, TRISMUS and ODYNOPHAGIA.** **MANY PATIENTS PROGRESS FROM ONSET TO RESPIRATORY OBSTRUCTION IN 12–24 HOURS.**',
    '**TREATMENT, in this order: 1) EARLY AIRWAY MAINTENANCE — NASAL ENDOTRACHEAL INTUBATION or TRACHEOTOMY · 2) INTENSIVE IV ANTIBIOTIC THERAPY · 3) RAPID SURGICAL INTERVENTION — a HORIZONTAL SUBMENTAL INCISION JUST ABOVE THE HYOID under general anaesthesia, the MYLOHYOID DIVIDED VERTICALLY to open BOTH the submaxillary and sublingual compartments, releasing a STRAW-COLOURED EXUDATE rather than true abscess fluid.**',
    '- **AIRWAY FIRST — the highest risk, above haemorrhage and sepsis.** Antibiotics and surgery follow it.',
    '- **THE TONGUE IS PUSHED UP; THE TONSIL IS NOT PUSHED AT ALL.** *"The tonsil is pushed medially"* is the standing **except** answer — a displaced tonsil means a peritonsillar or parapharyngeal collection.',
    '- **The causative tooth is extracted LATER, not in the initial emergency management.**',
    '',
    '||**LUDWIG’S ANGINA**|**A true deep neck ABSCESS**|',
    '|---|---|---|',
    '|Pathology|**CELLULITIS, no abscess tendency**|localised pus collection|',
    '|Feel|**BRAWNY INDURATION, tender, firm, erythematous — NO FLUCTUANCE**|**fluctuant**, may point|',
    '|Spread|**along fascial planes, crosses the midline, bilateral**|confined to one space|',
    '|Surgery|**DECOMPRESSION** — straw-coloured exudate|**drainage of pus**|',
    '',
    '- Defect: one endpoint box and one Grade Gain key say Ludwig’s is *"not treated by incision and drainage"* — L4 mandates rapid submental decompression, and the same bank elsewhere keys surgery as initial management. Keys as printed.',
    '- Defect: two stems write *"accumulation of pus"* and a *"fluctuant"* swelling, which L4 twice denies; one vignette makes the patient **65 and immunocompromised** against L4’s *"young patient with poor dentition"*. Keys as printed.',
    '',
    'Src: L4'
  ].join('\n'),
  qs: ['entep-throat-1','entep-throat-40','entep-throat-48','entep-throat-79','entep-throat-106','entep-throat-115','entep-mfe5-18','entqb-thr3-93','entqb-thr3-94','entqb-thr3-101','entqb-thr6-322','entqb-thr6-323','entep-throat-case-10']
},

{
  id: 'phsup-11', w: 'must',
  h: 'Complications — which collection gives which',
  body: [
    '|Collection|Complications|',
    '|---|---|',
    '|**Quinsy**|**SUDDEN RUPTURE AND INHALATION OF PUS → chest complications** · **extension LATERALLY → PARAPHARYNGEAL ABSCESS**, or **DOWNWARDS → LARYNGEAL OEDEMA AND STRIDOR** · **INTERNAL JUGULAR VEIN THROMBOPHLEBITIS** · pyaemia and septicaemia (very rare)|',
    '|**Parapharyngeal**|rare but serious: **IJV THROMBOSIS = LEMIERRE’S SYNDROME** · **RUPTURE OF THE CAROTID ARTERY** · **INVOLVEMENT OF CN IX–XII OR THE SYMPATHETIC CHAIN** · **MEDIASTINITIS**|',
    '|**Acute retropharyngeal**|**SPONTANEOUS RUPTURE → SUDDEN DEATH FROM ASPIRATION** · **LARYNGEAL OEDEMA AND STRIDOR** · **MEDIASTINITIS**|',
    '|**Intratonsillar**|as acute tonsillitis|',
    '|**Ludwig’s angina**|**AIRWAY OBSTRUCTION within 12–24 hours**|',
    '',
    '- **LARYNGEAL OEDEMA is a complication of QUINSY and of the ACUTE RETROPHARYNGEAL abscess — NOT of the parapharyngeal one**, whose complications are all vascular, neural or mediastinal.',
    '- **HORNER’S SYNDROME belongs to the PARAPHARYNGEAL abscess alone** — the cervical sympathetic chain runs in its poststyloid compartment. No other pharyngeal collection reaches that plane.',
    '- **LEMIERRE’S SYNDROME = SEPTIC THROMBOPHLEBITIS OF THE INTERNAL JUGULAR VEIN** complicating an oropharyngeal infection *(organism Fusobacterium necrophorum, with septic pulmonary emboli — not in course material)*.',
    '- **BEZOLD’S ABSCESS = middle-ear infection destroying the MASTOID TIP**, pus escaping deep to sternocleidomastoid **into the parapharyngeal space** — the ear route into this chapter.',
    '- **MEDIASTINITIS: shared by the parapharyngeal and acute retropharyngeal abscesses** — fascial planes run neck to chest.',
    '',
    'Src: L4'
  ].join('\n'),
  qs: ['entqb-thr2-51','entqb-thr2-67','entqb-thr2-74','entqb-thr2-52','entep-throat-63']
}

    ]
  }
};
