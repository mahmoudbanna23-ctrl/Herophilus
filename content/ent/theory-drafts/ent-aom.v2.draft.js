/* ent-aom v2 — "Acute otitis media and effusion", ENT.
   Rewritten 2026-08-14 under START-HERE.md §14 (slide-density revision notes).
   v1 was 12,352 body words over 22 sections / 34 printed pages — rejected for length.
   Lectures: L21.1 553 w + L21.2 424 w = 977 w (this chapter's own).
   BUDGET COMPUTED BEFORE WRITING: cap 2,000 body words (§14.1 formula gives 977;
   the caller relaxed it to 2,000 because the chapter also leans on L22, L17,18,
   L13,14, L16, L19.1 and L3 and carries 106 linked questions).

   FLOOR KEPT BOTH WAYS — every fact, number, stage, organism, sign and treatment
   L21.1 and L21.2 state (except the four items deferred by name below), and every
   linked question's KEY and DISCRIMINATOR as a line or a table cell. All 106
   question ids preserved and redistributed, none dropped.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection (~4,000 words of v1). It lives in every
        question's own `explanation`, one tap away through the qs links (§14.2).
        Kept only where the teaching point IS the discrimination (AOM vs OME,
        before vs after perforation, necrotic vs ordinary, tear vs melt, B vs As,
        grommet vs T-tube) — as tables. Elsewhere reduced to a named list.
     2. Question ids in body text, teaching voice, bank meta-commentary, star
        headers, long verbatim block quotes, per-fact citation clauses.
     3. v1 aom-21, the closing one-page "sieve" — 100 % duplication of the tables
        above it. Its 14 question ids are redistributed.
     4. v1 aom-22, the omission register — it is this header now.
     5. Mechanism-of-why passages that are not themselves tested discriminators:
        the phonological account of language delay, the watershed blood supply of
        the pars tensa, the round-window route to the cochlea, steroid-harm
        reasoning, aminoglycoside ototoxicity, why the mastoid sulcus reads both
        ways, the areal-ratio arithmetic behind myringoplasty, the antero-superior
        and postero-inferior quadrant contents.

   CROSS-CHAPTER DEFERRALS (§14.5) — named, so each is a promise not a deletion.
   Each was checked against all 106 of this chapter's questions: none tests it.
     A. FROM THIS CHAPTER'S OWN LECTURES — the four L21.1 slides that are generic
        audiology, printed there only because the deck carries them:
          · Pure tone audiometry — method (variable frequencies and intensities via
            earphones and a bone vibrator, charted), and threshold = the minimum
            intensity audible in at least 50 % of presentations   ->  `ent-audio`
          · The PTA dB grades — normal < 20 · mild 20–40 · moderate 40–60 ·
            severe 60–90 · profound 90–110 dB                     ->  `ent-audio`
          · Speech audiometry — SDS and SRS; scores excellent in cochlear and poor
            in retrocochlear lesions                              ->  `ent-audio`
          · The three specimen tympanograms pictured (normal / SOM / ET
            dysfunction) as a picture exercise                    ->  `ent-audio`
            (the A/As/Ad/B/C table itself is KEPT here — it is keyed.)
     B. FROM THE BORROWED LECTURES:
          · Full conductive-vs-sensorineural cause lists (L19.1)   ->  `ent-hearing`
          · The otorrhoea type lists (L17,18)                      ->  `ent-otorrhea`
          · Otitis externa, otomycosis, malignant otitis externa, furunculosis,
            wax, bullous myringitis  ->  `ent-otorrhea` / `ent-otalgia`; kept here
            only as the one-line contrasts the bank prints against AOM.
          · The intracranial and extracranial complication lists, acute mastoiditis
            in full, cholesteatoma, safe/unsafe CSOM (L16)         ->  `ent-csom`.
            The commonest-complication fact and the post-auricular sign stay here.
          · The adenoid symptom picture (L3)                       ->  `ent-tonsils`;
            the hypo- vs hypernasal discriminator stays here, it is keyed.
          · Eustachian tube and drum anatomy in full (L22)         ->  `ent-earanat`;
            what this chapter's questions key is kept.
     C. NOT OWNED BY ANY CHAPTER: nasopharyngeal carcinoma epidemiology, staging
        and treatment — the top book-read target (ledger §11 item 3). The ear-facing
        rule stays here in full because nine of these questions test it.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field. */

var THEORY_ENT_AOM = {
  'ent-aom': {

    intro: 'Two diseases separated by one clause: **pain = acute otitis media, painless hearing loss = effusion.** Then three rules the bank never tires of — the four stages, the three-month clock, and **unilateral effusion in an adult = nasopharyngeal carcinoma.** Ear trauma is filed here.',

    sections: [

{
  id: 'aom-1', w: 'must',
  h: 'The cleft, the tube, and the two halves of the drum',
  body: [
    '**Cleft = 4 parts: Eustachian tube · tympanic cavity · mastoid antrum · mastoid air cells.** Antrum = largest air cell, reached by the aditus.',
    '**Routes: 1) tube, COMMONEST** — rhinitis, sinusitis, adenoiditis, milk, vomitus, nasal packing **· 2) perforated drum · 3) haematogenous, rare, immunocompromised.**',
    '**Tube:** middle ear → nasopharynx, **ventilates it and clears fluid to the nasopharynx. Upper 1/3 BONY, always PATENT · lower 2/3 CARTILAGINOUS, potentially closed, OPENS ON YAWNING AND SWALLOWING**, by **tensor + levator veli palatini**. **Child: SHORTER, WIDER, MORE HORIZONTAL** — “infection is commoner in infants”.',
    '**Closed tube → gas absorbed → NEGATIVE intratympanic pressure → TRANSUDATION** = every effusion here.',
    '',
    '||**PARS TENSA**|**PARS FLACCIDA** (Shrapnell)|',
    '|---|---|---|',
    '|Layers|skin + **FIBROUS** + mucosa|skin + mucosa, **no fibrous layer**|',
    '|Site|below lateral process|attic, above it|',
    '|Pus, positive pressure|**PERFORATES FIRST**|—|',
    '|Negative pressure|late|**RETRACTS FIRST**|',
    '|Ends as|central, safe perforation|**attic pocket → cholesteatoma**|',
    '',
    '- **Umbo and handle = attachment points**, never first to rupture or retract. AOM hole: **small · central · pars tensa · antero-inferior** — thinnest, most dependent, and the **myringotomy site**. **POSTERO-SUPERIOR = DANGEROUS**: incudostapedial joint, stapes, chorda tympani, facial nerve at the 2nd genu. *(Quadrants not in course material.)*',
    '- Defect: a box calls the **bony** end the muscle-opened end; it is the **cartilaginous** end.',
    '',
    'Src: L21.1; L21.2; L22'
  ].join('\n'),
  qs: ['entqb-ear1-16','entqb-ear1-17','entqb-ear3-51','entqb-ear3-50','enthd-ear-4','enthd-ear-24','entqb-ear3-57','entqb-ear4-113','entep-ear-237']
},

{
  id: 'aom-2', w: 'must',
  h: 'Acute otitis media — definition, organisms, aetiology',
  body: [
    '**Definition:** infection **involving the middle ear**; drum **inflamed and opaque**, vessels **dilate**, fluid accumulates, inflammation **does not extend beyond the mucoperiosteal layer of the cleft** — the line against mastoiditis. **SUPPURATIVE = bacterial** · **cleft**, not middle ear · **acute < 3 weeks, subacute 3 weeks–3 months, chronic > 3 months** *(durations not in course material).*',
    '**BACTERIAL: β-haemolytic streptococcus · *Streptococcus pneumoniae* · *Haemophilus influenzae*. VIRAL: influenza · adenovirus · measles.** Plus ***Moraxella***; **pneumococcus ≈ 50 %**; rank **pneumoniae > influenzae > Moraxella**; on a list the specific **“Pneumococci”** beats generic “Streptococcus”. ***Pseudomonas* is nowhere on the AOM list** — it is a canal organism, with *Staph. aureus* (furuncle) and *Aspergillus* / *Candida*. Middle ear organisms come **through the nose**, canal organisms from **skin and water**.',
    '**Aetiology, complete: 1) pre-existing middle ear effusion with its predisposing factors — adenoids · nasopharyngeal carcinoma · post-nasal packing · cleft palate · nasal allergy · 2) faulty technique during lactation · 3) gastro-oesophageal reflux.**',
    '- **First-year recurrent AOM → breast feeding FLAT** (faulty lactation technique): milk tracks up the short horizontal tube.',
    '- **Recurrent BILATERAL AOM in a child → ADENOID**, midline between both orifices; **2–6 yrs**, giving **AOM, earache, CHL, chronic effusion**.',
    '- **HYPOnasal = adenoid; HYPERnasal + nasal regurgitation = CLEFT PALATE. Mastoiditis is a complication, not a cause.**',
    '',
    'Src: L21.1; L21.2; L3'
  ].join('\n'),
  qs: ['entqb-ear3-50','entqb-ear3-51','entqb-ear3-52','entqb-ear3-84','entep-ear-47','entep-ear-147','entep-ear-203','enthd-ear-12','entep-ear-233','entep-case-13']
},

{
  id: 'aom-3', w: 'must',
  h: 'The four stages, and before versus after perforation',
  body: [
    '**1) Acute catarrhal — E.T. occlusion · 2) A.S.O.M before perforation · 3) A.S.O.M after perforation · 4) resolution or complications.** **“Stage of salpingitis” is not one.**',
    '**Pathology, stage 2:** hyperaemia and swelling of the mucoperiosteum lining **the whole cleft**; signs confined to the tympanic cavity; **outpouring of serum from dilated subepithelial capillaries**; **exudate under tension**.',
    '',
    '||**BEFORE perforation**|**AFTER perforation**|',
    '|---|---|---|',
    '|Pain|**SEVERE, throbbing**|**“should disappear”**|',
    '|Fever|present, constitutional upset|**lessened**|',
    '|Hearing|**very slightly affected**|**loss INCREASES**|',
    '|Discharge|**none**|haemorrhagic → **serosanguineous** → mucopurulent|',
    '|Drum|injected → **BULGING, nippling**|small central pars tensa hole|',
    '|Infant|**pulling at the ear, irritability**|—|',
    '',
    '- **Perforation is RELIEF** — pain stops abruptly as the ear runs.',
    '- **Earache FOLLOWING an upper respiratory tract infection** — cold, forceful nose-blowing, tonsillitis.',
    '- **“If myringotomy is not done, spontaneous perforation will occur.”** **Pulsating (light-house) discharge** = active suppuration *(not in course material)*. **Pain returning, or never settling, = a complication.**',
    '',
    'Src: L21.1'
  ].join('\n'),
  flow: {
    title: 'The four stages of acute otitis media',
    steps: [
      { k:'step', t:'1. ACUTE CATARRHAL — Eustachian tube occlusion', n:'Blocked feeling, mild discomfort, dull or retracted drum. No pus yet' },
      { k:'step', t:'2. A.S.O.M BEFORE PERFORATION', n:'Exudate under tension. Severe throbbing pain + fever. Drum injected, then BULGING with nippling. Hearing only slightly affected' },
      { k:'decision', t:'Is myringotomy done?', yes:'Radial incision, antero-inferior quadrant — drains and heals cleanly', no:'Spontaneous perforation will occur — a ragged tear' },
      { k:'step', t:'3. A.S.O.M AFTER PERFORATION', n:'Pain disappears, fever lessens, hearing loss increases. Discharge haemorrhagic, then serosanguineous, then mucopurulent and odourless' },
      { k:'decision', t:'4. Does it resolve?', yes:'Drum heals, hearing returns', no:'Fluid persists as otitis media with effusion, or complications' },
      { k:'alert', t:'Pain that returns, or never settles, is a complication', n:'Post-auricular redness = acute mastoiditis. Facial weakness, vertigo, rigors — see ent-csom' }
    ]
  },
  qs: ['entep-ear-235','entqb-ear3-53','entep-ear-183','entep-ear-104','entep-ear-110','entep-case-36','entep-case-8','entep-case-10']
},

{
  id: 'aom-4', w: 'must',
  h: 'Reading the drum and the discharge',
  body: [
    '|Drum|Means|Pain|',
    '|---|---|---|',
    '|Injected, dilated vessels|early AOM|yes|',
    '|**BULGING, nippling**|**AOM before perforation**|**SEVERE**|',
    '|Perforated, mucopurulent odourless discharge|AOM after perforation|relieved|',
    '|**RETRACTED, dull, landmarks lost**|**EFFUSION**|**NONE**|',
    '|Attic/marginal hole, scanty **fetid** discharge|unsafe CSOM → `ent-csom`|no|',
    '|Chalky white plaques · blue-black|tympanosclerosis · haemotympanum|no|',
    '',
    '- **Severe pain + retracted is self-contradictory:** retraction = negative pressure = effusion = painless.',
    '- AOM discharge is **mucopurulent AND odourless**. **Odourless excludes cholesteatoma** (fetor = osteitis). **Mucoid proves the source** — *“no mucous glands in the EAC; mucus always comes from the ME.”* **Pure purulent = mucosa destroyed. Profuse, re-accumulating after cleaning = reservoir sign → mastoiditis.**',
    '- **AOM hearing loss is CONDUCTIVE** — the lesion is mechanical and in the middle ear. **SNHL or vertigo during AOM = labyrinthitis**, no longer simple AOM.',
    '',
    'Src: L21.1; L17,18'
  ].join('\n'),
  qs: ['entqb-ear3-85','entqb-ear3-55','entqb-ear3-54']
},

{
  id: 'aom-5', w: 'must',
  h: 'Treatment of AOM, and myringotomy',
  body: [
    '**Medical: 1) antibiotics UNTIL RESOLUTION · 2) antihistaminics · 3) decongestant · 4) analgesic and antipyretics** — treat the nose to treat the ear. **Surgical: myringotomy ± grommet or T-tube.**',
    '- **48-hour rule:** healthy child, **first uncomplicated** attack, **congested not bulging** drum → analgesia and antipyresis, **review at 48 h**; antibiotics if not improving by **48–72 h**. **Excluded: < 6 months**, toxic, bilateral in the very young, already perforated, recurrent, immunocompromised *(not in course material).*',
    '- **Non-resolution = inadequate antibiotic therapy**; URTIs, nasal obstruction and low immunity cause **recurrence** instead. **AOM is CLINICAL** — CT/MRI petrous bones is the odd one out; image only a suspected complication.',
    '- Defect: GG keys **A, immediate antibiotics**, while its own box describes **B, observe and treat if no improvement in 48–72 h** — keyed B, printed key recorded.',
    '**Myringotomy = deliberate incision of the drum. Indications:** impending perforation (**bulging, nippling**) · **thick drum in a child** · **a complication — facial palsy or labyrinthitis, myringotomy FIRST** · unresponsive AOM · **secretory OM after failed medical treatment**, the operation of choice · **atelectasis** · a small inadequately draining or high attic perforation.',
    '',
    '|“All except”|Exception|',
    '|---|---|',
    '|All drum appearances except|**a CONGESTED drum** — no fluid under tension yet|',
    '|Not a treatment of AOM|**“myringotomy in ALL cases”**|',
    '|All require myringotomy except|**OTOSCLEROSIS** — dry ear, normal drum; needs stapedectomy|',
    '',
    '- **Never incise postero-superiorly; antero-inferior is safe and dependent.**',
    '- **MYRINGOtomy makes a hole · MYRINGOplasty closes one · TYMPANOplasty = myringoplasty + ossiculoplasty · STAPEDECTOMY replaces a fixed stapes.**',
    '- Tube complications: **residual perforation · tympanosclerosis · otorrhoea through the tube · early extrusion or blockage.**',
    '',
    'Src: L21.1; L21.2; L15'
  ].join('\n'),
  qs: ['entep-ear-2','entqb-ear3-79','entqb-ear3-56','entep-ear-230','entep-ear-142','entep-ear-70','entep-ear-87','entep-ear-166','entqb-ear3-86','entep-ear-237']
},

{
  id: 'aom-6', w: 'must',
  h: 'Acute NECROTIC otitis media',
  body: [
    '*(Absent from all 34 cached ENT files — **not in course material**. Six questions.)*',
    '',
    '||**Ordinary suppurative OM**|**ACUTE NECROTIC OM**|',
    '|---|---|---|',
    '|Organism|pneumococcus, H. influenzae|**GROUP A β-HAEMOLYTIC STREP**|',
    '|Setting|after a cold|**debilitated child during or after an exanthem — MEASLES, scarlet fever, influenza**|',
    '|Mechanism|mucosal inflammation|**exotoxins thrombose the drum’s vessels**|',
    '|Discharge|**mucopurulent, odourless, profuse**|**PURE PURULENT, scanty**|',
    '|Perforation|small, central|**LARGE, KIDNEY-SHAPED**, may take the annulus|',
    '|Middle ear|congested mucosa|**BARE PROMONTORY**|',
    '|Healing|spontaneous|**never — needs MYRINGOPLASTY**|',
    '',
    '- **First to die: the central kidney-shaped pars tensa. Manubrium, annulus and pars flaccida resist longer**; severe cases slough most of the drum with its annulus.',
    '- Antibiotics urgently, but true of every AOM; **myringotomy is pointless, the drum has gone.** *Immediate* step = antibiotics; **the treatment of the entity = myringoplasty.**',
    '- **Name trap: otitis MEDIA** = group A strep, child, post-measles. **Malignant otitis EXTERNA** = ***Pseudomonas***, elderly uncontrolled diabetic, skull-base osteomyelitis, cranial nerve palsies, 3–6 months of IV cover.',
    '',
    'Src: L17,18 (externa only)'
  ].join('\n'),
  qs: ['entep-ear-86','entep-ear-158','entqb-ear3-58','entqb-ear3-59','entqb-ear3-61','entqb-ear3-81']
},

{
  id: 'aom-7', w: 'must',
  h: 'Complications of AOM — the boundary',
  body: [
    '**Extension beyond the confines of the middle ear cleft. Cranial: acute mastoiditis and mastoid abscess — MOST COMMON** · petrositis · labyrinthitis · facial paralysis. **Intracranial and extracranial groups: `ent-csom`.**',
    '- Mastoiditis is commonest **by CONTINUITY** — the antrum is part of the cleft, through the aditus. Everything else must **break out**.',
    '- **AOM + post-auricular redness and tenderness = ACUTE MASTOIDITIS**, pinna out and down; sulcus **preserved**, then **obliterated** once a subperiosteal abscess forms. Petrositis = **Gradenigo** (otorrhoea + retrobulbar V pain + VI palsy); labyrinthitis = vertigo + SNHL; extradural abscess = no local sign.',
    '- Look-alike: **furunculosis with post-auricular lymphadenitis** — **tragal tenderness**, a discrete mobile node, no mucoid discharge, normal middle ear.',
    '- **Mastoiditis → antibiotics; mastoid abscess → cortical mastoidectomy.**',
    '',
    'Src: L16'
  ].join('\n'),
  qs: ['entep-ear-50','entep-enr-9']
},

{
  id: 'aom-8', w: 'must',
  h: 'Otitis media with effusion — definition, AOM vs OME, causes',
  body: [
    '**“A NON-SUPPURATIVE middle ear fluid”** — no active infection, so **no pain, no fever**. **Disease of infants and young age, peak 6–24 MONTHS, rises in WINTER and SPRING.**',
    '',
    '||**ACUTE OTITIS MEDIA**|**EFFUSION** (glue ear, SOM, MEE)|',
    '|---|---|---|',
    '|Nature|**suppurative**|**NON-SUPPURATIVE**|',
    '|Onset|**rapid**, with a cold|**insidious**|',
    '|Pain / fever|**severe throbbing / present**|**NONE / absent**|',
    '|Drum|red → **BULGING** → perforates|**intact, DULL, umber-yellow, RETRACTED, landmarks lost**|',
    '|Complaint|pain; infant ear-pulling|**HEARING LOSS ONLY**|',
    '|Hearing|slight, then increases|**mild-to-moderate CONDUCTIVE, bilateral**|',
    '|Tympanogram|—|**FLAT, TYPE B**|',
    '',
    '**Three routes: 1) persistence of fluid after an AOM resolves** (commonest) **· 2) Eustachian tube malfunction · 3) air-pressure trauma, after an air flight or a scuba dive.** **Organisms: group A β-haemolytic streptococci, H. influenzae.** **Pathology:** dilated intercellular spaces with **disrupted basement membrane** · **PNL + lymphocytes + macrophages** · **histamine, leukotrienes.** **Fluid: SEROUS** (sterile, pale yellow, watery, translucent — the one that bubbles) · **MUCOID** (cloudy, cell secretion, glue, in SOM) · **PURULENT** (in ASOM).',
    '',
    '|Cause|Mechanism|',
    '|---|---|',
    '|**Adenoids, adenoiditis**|**mechanical obstruction of the tubal orifice** + reservoir|',
    '|**Cleft palate**|**tensor and levator dysfunction · tube stenosis** → **T-tube**|',
    '|Allergic oedema|with adenoiditis, sinusitis, rhinitis|',
    '|Viral · immune deficiency · radiotherapy|tubal oedema · recurrent infection · fibrosis|',
    '|**Iatrogenic, post-adenoidectomy**|the slide lists the operation as cause **and** cure|',
    '|**Nasopharyngeal carcinoma**|adult, unilateral|',
    '|**Barotrauma**|**flight or scuba dive**; fullness **ON DESCENT**, retracted drum with bubbles|',
    '',
    '- **Barotrauma prevention = REGULAR SWALLOWING** (sweets, gum, drinking induce swallows) — the cartilaginous tube opens on **yawning and swallowing**, not on mouth-opening, head-tossing or hands over the ears. Do not fly with a URTI. **Autoinflation: Valsalva, gum chewing.**',
    '- **Child bilateral = adenoid · adult unilateral = carcinoma.**',
    '',
    'Src: L21.2; L21.1'
  ].join('\n'),
  qs: ['entqb-ear3-68','entep-ear-234','entep-ear-141','entep-case-11','entep-case-24','entep-throat-case-2','entqb-ear3-75','entep-ear-189','entep-case-13','entep-ear-233']
},

{
  id: 'aom-9', w: 'must',
  h: 'Otoscopy and investigation of an effusion',
  body: [
    '**Five drum findings: opaque UMBER-YELLOW · ABSENT LANDMARKS (cone of light, umbo) · RETRACTED · FLUID LEVEL, BUBBLING WITH VALSALVA · LIMITED MOBILITY.** Nose and nasopharynx **may reveal adenoid enlargement**.',
    '**History: decreased hearing · earaches · recurrent ASOM · manifestations of adenoids or cleft palate.** Earache is on the slide yet every key calls effusion painless — **new pain = superimposed AOM**.',
    '- **Most diagnostic: a hair-line FLUID LEVEL with BUBBLES** — air **and** fluid, so a thin serous effusion. Distorted cone of light, foreshortened handle and prominent short process are signs of **retraction only**, which occurs with no fluid (type C).',
    '**PTA → CONDUCTIVE loss, MILD TO MODERATE. Tympanometry → FLAT, TYPE B. Plain X-ray for adenoids · CT nasopharynx.**',
    '',
    '|Curve|Pressure|Compliance|Cause|',
    '|---|---|---|---|',
    '|**A**|normal|normal|normal ear|',
    '|**As**|**normal**|**REDUCED**|**stiffness — tympanosclerosis, otosclerosis**|',
    '|**Ad**|normal|increased|ossicular discontinuity, lax drum|',
    '|**B**|—|**FLAT, no peak**|**FLUID**; also perforation or patent grommet (**high canal volume**)|',
    '|**C**|**NEGATIVE**|good|**tube dysfunction**, retraction without fluid|',
    '',
    '- **Tympanometry tests compliance** — **reduced** in tympano-ossicular fixation, **absent** in middle ear effusion — **and the acoustic (stapedial) reflex: ABSENT in CHL, IMPAIRED in SNHL.**',
    '- **In a toddler the tympanogram beats PTA:** PTA is **subjective** and needs cooperation, tympanometry is **objective** and takes seconds. Gold standard for a child’s hearing = **ABR**.',
    '- **Bilateral symmetrical effusion:** BC normal and symmetrical, AC reduced both sides, **Weber does NOT lateralise**. **Unilateral CHL → Weber to the AFFECTED ear, Rinne negative; SNHL → Weber to the better ear.**',
    '',
    'Src: L21.2; L21.1; L13,14'
  ].join('\n'),
  qs: ['entep-ear-177','entqb-ear3-69','entep-enr-29','entep-case-9','entep-ear-234','entep-ear-4','entep-ear-114','entep-ear-101','entqb-ear3-90','entqb-ear3-89','entep-ear-24']
},

{
  id: 'aom-10', w: 'must',
  h: 'Glue ear — commonest childhood deafness, presenting as behaviour',
  body: [
    '**OME is the commonest cause of conductive, and of bilateral conductive, hearing loss in a child** — four option lists, one answer.',
    '- Not: **otosclerosis** (adult, type As, normal drum) · **congenital cholesteatoma** (rare, unilateral) · **CSOM** (discharge + perforation) · **adhesive OM** (glue ear’s own end stage) · **wax, congenital atresia** (visible) · **congenital deaf mutism** (from birth) · **noise** (SNHL) · **traumatic rupture** (single event) · **acute OM** (painful, febrile, brief).',
    '- **Painless, so missed.** The slide lists **developmental and behavioural changes FIRST** among its complications. The child is brought **inattentive or thought naughty**, turning the **TV up**, **missing consonants**, with **delayed speech**, **falling behind at school**, or **tugging the ears with recurrent colds, no fever and no pain**.',
    '- **Autism trap:** recurrent URTIs, ear tugging and a **fluctuating** measurable loss point to the ear; congenital loss would date from birth.',
    '- **Poor listening, inattention or delayed speech → tympanogram. Adenoids → test the hearing.**',
    '',
    'Src: L21.2'
  ].join('\n'),
  qs: ['entep-ear-122','entep-ear-148','entep-ear-245','entep-ear-250','entep-ear-213','entep-case-14','entep-ear-101']
},

{
  id: 'aom-11', w: 'must',
  h: 'Adult + unilateral effusion = nasopharyngeal carcinoma',
  body: [
    '**A unilateral middle ear effusion in an adult is nasopharyngeal carcinoma until the nasopharynx has been looked at.** Nine questions, no qualification.',
    '- The tube opens at the **fossa of Rosenmüller**, also the **commonest site of origin of NPC**: tumour blocks that one tube → gas absorbed → negative pressure → transudate. `L21.1` names it beside adenoids as a cause of effusion.',
    '- **Age and laterality together are the alarm.** A child’s effusion is bilateral and explained; an adult’s one-sided effusion has no benign explanation and may be the **only** sign.',
    '- **The answer is always to LOOK — nasopharyngeal or nasal endoscopy, and biopsy** — keyed over a bare principle, 50- to 71-year-olds, a diabetic, a normal otoscopy, a neck node, and a case wanting both halves, **“SOM caused by NPC”**. Every wrong option is a way of missing it: **grommet or medical treatment abolish the sign, not the cause**; audiogram and tympanometry confirm what is not in doubt; **CT and MRI stage but yield no tissue**; CT temporal bone is the **wrong end of the tube**; observing 3 months is right **in a child**.',
    '- One printing keys **watchful waiting 3 months** — it gives **no age** and **does not offer nasopharyngoscopy. The key is the best option on the list.**',
    '- Corroborating: **ipsilateral upper deep cervical node**, **epistaxis or blood-stained postnasal discharge**.',
    '',
    'Src: L21.1; L21.2 *(NPC beyond that one line is not in course material)*'
  ].join('\n'),
  qs: ['entqb-ear3-78','entep-ear-49','entep-ear-95','entep-ear-159','entep-ear-24','entep-ear-66','entep-mfe5-1','entep-enr-5','entep-throat-case-15','entep-case-9','entep-mfe5-23']
},

{
  id: 'aom-12', w: 'must',
  h: 'Management of an effusion — the three-month ladder, grommet or T-tube',
  body: [
    '**MEDICAL I: antibiotics · antihistaminics · corticosteroids. MEDICAL II: Eustachian tube ventilation — Valsalva, gum chewing. SURGICAL I: myringotomy with ventilatory tubes. SURGICAL II: surgical treatment of related conditions, as adenoidectomy.** Add decongestants and treatment of allergy or sinusitis.',
    '',
    '|Situation|Answer|',
    '|---|---|',
    '|**1 week** bilateral · **after a cold**|**conservative** — decongestants, nasal steroids, watch|',
    '|**1 month**, development **normal**|**wait and see 2 more months**|',
    '|**1 month + LANGUAGE DELAY**|**IMMEDIATE myringotomy + ventilation tubes**|',
    '|After treated AOM, **CHL persists**|**wait and watch 3 months**|',
    '|**> 3 months / 90 days** despite adequate medical treatment|**MYRINGOTOMY + GROMMET**|',
    '|**3 months + language delay**, or **6 months** bilateral|**bilateral myringotomy + grommets**|',
    '|**Recurrent, type B**|myringotomy + ventilation tubes|',
    '|**With adenoid hypertrophy**|**ADENOIDECTOMY *AND* VENTILATION TUBE, one sitting**|',
    '|**With cleft palate**|**T-TUBE**|',
    '|**Adult, unilateral**|**NASOPHARYNGOSCOPY FIRST**|',
    '',
    '- **Language delay overrides the clock:** two questions print the same child, the same month and the same options, and the answer flips from *wait* to *tubes* on that clause alone.',
    '- **Myringotomy alone fails — the incision heals in 48–72 h.** **Adenoidectomy alone** does not evacuate the fluid. **Tympanoplasty** repairs a perforation; this drum is **intact**. **Long-term antibiotics** treat a **non-suppurative** condition; **penicillin to age 15** is rheumatic-fever prophylaxis.',
    '',
    '||**GROMMET**|**T-TUBE**|',
    '|---|---|---|',
    '|Stays|**~6–12 months, extrudes itself**|**years**, removed deliberately|',
    '|For|a **TEMPORARY** cause — adenoids, cold, allergy|a **PERSISTENT** one: **cleft palate**, craniofacial anomaly, post-irradiation, chronic tubal failure, recurrent extrusion|',
    '|Risk|extrusion, blockage|**persistent perforation**|',
    '',
    '*(Dwell times not in course material.)* **Cleft palate takes a T-tube from the outset** — a malinserted tensor is a **structural, lifelong** failure.',
    '- Defects, keyed as printed: one keys **systemic steroids for 48 hours** as initial treatment (the slide gives corticosteroids with **no duration**, and watchful waiting is not offered); a box calls **hyposensitisation and Valsalva “the most important drugs”** — neither is a drug.',
    '',
    'Src: L21.2'
  ].join('\n'),
  flow: {
    title: 'The effusion ladder — does this ear need an operation?',
    steps: [
      { k:'decision', t:'ADULT with a UNILATERAL effusion?', yes:'STOP — nasopharyngeal endoscopy and biopsy first. Do not treat the ear', no:'Continue' },
      { k:'decision', t:'Delayed language development, or a measurable developmental cost?', yes:'Myringotomy + ventilation tubes NOW — the clock is overridden', no:'Continue' },
      { k:'step', t:'MEDICAL TREATMENT — the slide’s two arms', n:'I) antibiotics, antihistaminics, corticosteroids (± decongestants, treat allergy and sinusitis). II) tubal ventilation: Valsalva, gum chewing' },
      { k:'decision', t:'Persisted 3 MONTHS (90 days) despite adequate medical treatment?', yes:'MYRINGOTOMY + GROMMET', no:'Keep watching — most effusions after a cold clear within weeks' },
      { k:'decision', t:'Obstructing ADENOID?', yes:'Adenoidectomy in the same sitting — remove the cause, ventilate the ear', no:'Continue' },
      { k:'decision', t:'Is the tubal failure PERMANENT — cleft palate, craniofacial anomaly, post-irradiation?', yes:'Long-stay T-TUBE, not a grommet that will extrude', no:'Short-stay grommet' },
      { k:'alert', t:'Do not repeat a failed medical course', n:'Three more months of impaired hearing, and language development does not wait' }
    ]
  },
  qs: ['entqb-ear3-73','entqb-ear3-75','entqb-ear3-74','entqb-ear3-72','entqb-ear3-71','entep-mfe5-26','entep-mfe5-27','entep-mfe5-24','entep-mfe5-23','entep-nose-36','entep-ear-8','entep-ear-41','entep-ear-153','entep-ear-197','entep-ear-212','entep-ear-249','entqb-ear3-70','entep-mfe5-25']
},

{
  id: 'aom-13', w: 'must',
  h: 'Sequelae of a neglected effusion',
  body: [
    '**Complications, all five in order: 1) developmental and behavioural changes · 2) atrophic tympanic membrane · 3) ossicular chain erosion · 4) chronic O.M. · 5) SNHL.**',
    '',
    '|Entity|What it is|Loss|',
    '|---|---|---|',
    '|**ADHESIVE OM**|**the sequel of long-standing OME** — drum thins, loses its fibrous layer, is drawn in and **adheres to promontory and ossicles**|**permanent CONDUCTIVE**|',
    '|**ATELECTASIS**|before adhesion — collapsed, not yet stuck; **an indication for myringotomy + tube**|conductive|',
    '|**TYMPANOSCLEROSIS**|**chalky white plaques**, hyalinised often calcified collagen, sparing the handle|**none** until it reaches annulus or ossicles → **conductive**|',
    '|**BLUE EAR**|old effusion, dark cholesterol-laden fluid|conductive|',
    '',
    '- **The sequel of OME is ADHESIVE OM.** CSOM, mastoiditis and labyrinthitis are **suppurative**; **OME is non-suppurative**.',
    '- **Tympanosclerosis follows** repeated AOM, long-standing OME and **previous ventilation tube sites**. At the annulus → **conductive** loss, **Rinne negative**, **Weber to the worse ear**, **tympanogram TYPE As** — not B (fluid), not A (mobile drum). It **never crosses the oval or round window**: never SNHL, never mixed. **Otosclerosis leaves the drum NORMAL.**',
    '- **Colour:** chalky white = tympanosclerosis · dull amber = effusion · blue-black = haemotympanum or high jugular bulb · red and bulging = AOM.',
    '- Defect: one entry keys **SNHL** as the non-complication of effusion, while **`L21.2` lists SNHL as complication 5 of 5** (and lists neither blue ear, tympanosclerosis nor CHL). Keyed as printed — **from the lecture, SNHL is not a safe “except”. Know both lists.**',
    '',
    'Src: L21.2; L19.1'
  ].join('\n'),
  qs: ['entep-ear-141','entqb-ear3-83','entqb-ear3-88','entqb-ear3-89','entqb-ear3-90','entqb-ear3-86','entep-ear-245']
},

{
  id: 'aom-14', w: 'must',
  h: 'Traumatic perforation of the drum',
  body: [
    '*(The slides cover ear trauma only as a cause of CSF otorrhoea — halo sign, β2-transferrin, β2-trace protein, head elevation, water precautions — and of bloody otorrhoea. The rest is **not in course material**. Ten questions; `MODULES` has no trauma chapter.)*',
    '',
    '||**TRAUMATIC — a TEAR**|**INFECTIVE — a MELT**|',
    '|---|---|---|',
    '|Mechanism|splits along the **radial fibres**|pus **necroses the drum from within**|',
    '|**Shape — the only reliable discriminator**|**irregular, SLIT-LIKE or triangular**|**round, oval, kidney-shaped**|',
    '|Edges|**RAGGED, EVERTED**, blood clot|smooth, **rolled in**|',
    '|Discharge|**dry, or blood only**|**purulent**|',
    '|Middle ear|**normal**|**congested mucosa**|',
    '',
    '**Size, number and site do NOT separate them.**',
    '**Management is one number: THREE MONTHS.** Fresh, dry, uninfected — slap, blast, cotton bud, blow → **nothing in the ear + STRICT WATER PRECAUTIONS**; most close spontaneously. **Still open at ~3 months, or 6 → MYRINGOPLASTY** (graft, usually **temporalis fascia**; with ossicular damage, a **tympanoplasty**). Operate only on a **dry** ear, hearing measured.',
    '- **Water precautions ARE the treatment** — which is why *“no treatment, let it heal naturally”* is the best distractor here, and how a self-limiting tear becomes CSOM. Cotton wool with petroleum jelly for washing; no swimming, no diving, **no drops, never syringe**; review at 3 months.',
    '- Harmful, not merely unnecessary: **drops and packs** put fluid through an open drum into a sterile middle ear; **syringing out the clots** floods it, and **clots separate on their own**; **immediate myringoplasty** repairs a drum that would heal; **myringotomy** drains an ear already open.',
    '- **TEST THE HEARING.** Mild conductive loss is expected and recovers. **Vertigo, or a sensorineural or severe loss → EXPLORATION** for ossicular disruption or a **perilymph fistula**.',
    '- **Iatrogenic:** **bleeding during syringing** = the jet tore the drum; **discharge on day 2 is secondary infection**, i.e. AOM. Trauma first, infection after.',
    '',
    'Src: L17,18'
  ].join('\n'),
  flow: {
    title: 'A perforated drum after trauma',
    steps: [
      { k:'step', t:'CONFIRM IT IS TRAUMATIC', n:'Irregular slit-like defect, ragged everted edges, blood clot at the margin, dry, middle ear mucosa normal' },
      { k:'decision', t:'Vertigo, or a sensorineural / severe hearing loss?', yes:'EXPLORATION under GA — suspect ossicular disruption or perilymph fistula', no:'Continue' },
      { k:'decision', t:'Is the ear dry and uninfected?', yes:'Continue', no:'Treat the infection first — a discharging ear will not heal and will not be grafted' },
      { k:'step', t:'NOTHING PER EAR + STRICT WATER PRECAUTIONS', n:'Cotton wool with petroleum jelly for washing. No swimming, no diving, no drops, never syringe. Test the hearing' },
      { k:'decision', t:'Still open at ~3 MONTHS?', yes:'MYRINGOPLASTY — temporalis fascia or tragal perichondrium graft', no:'Healed — discharge from follow-up' },
      { k:'alert', t:'Irrigating or instilling drops through an open drum is the harm', n:'It converts a sterile self-healing tear into a discharging ear' }
    ]
  },
  qs: ['entep-ear-127','entep-ear-129','entep-ear-196','entep-ear-221','entep-ear-242','entep-ear-244','entep-enr-18','entqb-ear3-76','entqb-ear3-77','entep-case-2']
}

    ]
  }
};
