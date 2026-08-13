/* ent-aom v2 — "Acute otitis media and effusion", ENT.
   Rewritten 2026-08-14 under START-HERE.md §14 (slide-density revision notes).
   v1 was 12,352 body words over 22 sections / 34 printed pages — rejected for length.
   An intermediate pass reached 2,964 words / 14 sections / 14 printed pages / 3
   flowcharts.
   Lectures: L21.1 553 w + L21.2 424 w = 977 w (this chapter's own).
   BUDGET: cap 2,000 body words (§14.1 formula gives 977; the caller relaxed it to
   2,000 because the chapter also leans on L22, L17,18, L13,14, L16, L19.1 and L3
   and carries 106 linked questions).

   ⚠️ MEASURED OUTCOME: 2,259 body words — 2,964 → 2,259 (−705, −24 %), and
   2 flowcharts removed. THE CAP IS MISSED BY 259 WORDS, and that is reported
   rather than hidden. 1,779 of those words are prose and 480 are table cells;
   nothing non-protected is left in either. The next 200 words could only come
   out of the protected list, and would cost, in ascending order of yield lost:
     · aom-3 "Stage 2 pathology"  — 29 w, one whole L21.1 slide (hyperaemia and
       swelling of the mucoperiosteum of the whole cleft, outpouring of serum
       from dilated subepithelial capillaries, exudate under tension)
     · aom-8 histopathology       — 25 w, one whole L21.2 slide (disrupted
       basement membrane, PNL + lymphocytes + macrophages, histamine,
       leukotrienes)
     · aom-13 "all five in order" — 27 w, one whole L21.2 slide, and the section's
       own defect note ("SNHL is complication 5 of 5") is unreadable without it
     · aom-9 the five otoscopic findings — 30 w, one whole L21.2 slide, and it
       carries the keyed "fluid level with bubbles is most diagnostic"
     · aom-6 the necrotic-OM table — 52 w, a discrimination table; its six
       questions are unanswerable from the rest of the chapter
     · aom-5 the myringotomy indication list — the remaining ~40 w, seven
       indications of which four are keys
   That is four complete lecture slides plus a discrimination table, so the cut
   was not made. Scaling the cap is the caller's decision, not this file's.

   FLOOR KEPT BOTH WAYS — every fact, number, stage, organism, sign and treatment
   L21.1 and L21.2 state (except the four items deferred by name below), and every
   linked question's KEY and DISCRIMINATOR as a line or a table cell. All 106
   question ids preserved and redistributed, none dropped.

   FLOWCHARTS — 3 in the intermediate pass, 1 now. A `flow` block costs far more
   vertical space per fact than a table or a list, and two of the three were not
   decisions at all:
     · aom-3 "the four stages" — a SEQUENCE, not a branch, and it restated the
       before/after-perforation table beside it. Now the numbered line that opens
       the section; its two unique facts (the stage-1 picture, and the radial
       incision) folded into aom-3 and aom-5.
     · aom-14 "a perforated drum after trauma" — every node duplicated a sentence
       or a table cell already in that section's body. Deleted, nothing lost.
     · aom-12 "the effusion ladder" — KEPT, trimmed from 7 nodes to 5. It is the
       one genuine branch in the chapter, and what it carries is PRECEDENCE, which
       the situation→answer table above it cannot express: adult-unilateral stops
       everything (9 questions), and language delay overrides the 3-month clock
       (2 questions flip on that clause alone).

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
     6. THIS PASS ONLY, and no fact went with them: clauses that justify a kept
        fact instead of stating it; sentences reduced to fragments; and each
        fact's second and third printing across sections — the colour list
        (aom-4 keeps it, aom-13 dropped it), "child bilateral / adult unilateral"
        (aom-11 keeps it), "opens on yawning and swallowing" (aom-1), the
        water-precaution list (aom-14 states it once), the type-B tympanogram
        (aom-8's table and aom-9's table), the myringotomy site (aom-5).

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
    '**Cleft = 4 parts: Eustachian tube · tympanic cavity · mastoid antrum · mastoid air cells.** Antrum = largest air cell, via the aditus.',
    '**Routes: 1) TUBE, commonest** — rhinitis, sinusitis, adenoiditis, milk, vomitus, nasal packing **· 2) perforated drum · 3) haematogenous**, rare, immunocompromised.',
    '**Tube** = middle ear → nasopharynx; ventilates and drains it. **Upper 1/3 BONY, always PATENT · lower 2/3 CARTILAGINOUS, potentially closed, OPENS ON YAWNING AND SWALLOWING** by **tensor + levator veli palatini**. **Child: SHORTER, WIDER, MORE HORIZONTAL** — infection commoner in infants.',
    '**Closed tube → gas absorbed → NEGATIVE intratympanic pressure → TRANSUDATION.**',
    '',
    '||**PARS TENSA**|**PARS FLACCIDA** (Shrapnell)|',
    '|---|---|---|',
    '|Layers|skin + **FIBROUS** + mucosa|skin + mucosa, **no fibrous layer**|',
    '|Site|below lateral process|attic, above it|',
    '|Pus, positive pressure|**PERFORATES FIRST**|—|',
    '|Negative pressure|late|**RETRACTS FIRST**|',
    '|Ends as|central, safe perforation|**attic pocket → cholesteatoma**|',
    '',
    '- AOM hole: **small · central · pars tensa · antero-inferior**, thinnest and most dependent. **Umbo and handle = attachment points. POSTERO-SUPERIOR = DANGEROUS**: incudostapedial joint, stapes, chorda tympani, facial nerve 2nd genu. *(Quadrants not in course material.)*',
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
    '**Definition:** infection **involving the middle ear**; drum **inflamed and opaque**, vessels **dilate**, fluid accumulates; **inflammation confined to the mucoperiosteal layer of the cleft**. **SUPPURATIVE = bacterial**; disease of the **cleft**. **Acute < 3 weeks · subacute 3 weeks–3 months · chronic > 3 months** *(durations not in course material).*',
    '**BACTERIAL: β-haemolytic streptococcus · *Streptococcus pneumoniae* · *Haemophilus influenzae* · *Moraxella*. VIRAL: influenza · adenovirus · measles. Pneumococcus ≈ 50 %**; rank **pneumoniae > influenzae > Moraxella**; specific **“Pneumococci”** beats generic “Streptococcus”. ***Pseudomonas*, *Staph. aureus* (furuncle), *Aspergillus*/*Candida* = CANAL organisms.**',
    '**Aetiology: 1) pre-existing middle ear effusion** — adenoids · nasopharyngeal carcinoma · post-nasal packing · cleft palate · nasal allergy **· 2) faulty lactation technique · 3) gastro-oesophageal reflux.**',
    '- **First-year recurrent AOM → breast feeding FLAT.** **Recurrent BILATERAL AOM in a child → ADENOID**, midline between both orifices, **2–6 yrs** — AOM, earache, CHL, chronic effusion.',
    '- **HYPOnasal = adenoid · HYPERnasal + nasal regurgitation = CLEFT PALATE. Mastoiditis is a complication, not a cause.**',
    '',
    'Src: L21.1; L21.2; L3'
  ].join('\n'),
  qs: ['entqb-ear3-50','entqb-ear3-51','entqb-ear3-52','entqb-ear3-84','entep-ear-47','entep-ear-147','entep-ear-203','enthd-ear-12','entep-ear-233','entep-case-13']
},

{
  id: 'aom-3', w: 'must',
  h: 'The four stages, and before versus after perforation',
  body: [
    '**1) Acute catarrhal — E.T. occlusion** (blocked feeling, dull or retracted drum, no pus) **· 2) A.S.O.M before perforation · 3) A.S.O.M after perforation · 4) resolution or complications.** **“Stage of salpingitis” is not one.**',
    '**Stage 2 pathology:** hyperaemia and swelling of the mucoperiosteum lining **the whole cleft**, signs confined to the tympanic cavity; **outpouring of serum from dilated subepithelial capillaries**; **exudate under tension**.',
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
    '- **Perforation is RELIEF. Earache FOLLOWING a URTI** — cold, forceful nose-blowing, tonsillitis.',
    '- **“If myringotomy is not done, spontaneous perforation will occur”** — a ragged tear. **Pulsating (light-house) discharge** = active suppuration *(not in course material)*. **Pain returning, or never settling, = a complication.**',
    '',
    'Src: L21.1'
  ].join('\n'),
  qs: ['entep-ear-235','entqb-ear3-53','entep-ear-183','entep-ear-104','entep-ear-110','entep-case-36','entep-case-8','entep-case-10']
},

{
  id: 'aom-4', w: 'must',
  h: 'Reading the drum and the discharge',
  body: [
    '*(AOM drum → the stage table above · effusion drum → the AOM-vs-OME table below. The rest:)*',
    '',
    '|Drum|Means|Pain|',
    '|---|---|---|',
    '|Attic/marginal hole, scanty **fetid** discharge|unsafe CSOM → `ent-csom`|no|',
    '|**Chalky white plaques**|tympanosclerosis|no|',
    '|**Blue-black**|haemotympanum, high jugular bulb|no|',
    '',
    '- **Severe pain + retracted is self-contradictory:** retraction = negative pressure = effusion = painless.',
    '- AOM discharge **mucopurulent AND odourless**; **odourless excludes cholesteatoma** (fetor = osteitis). **Mucoid proves the source — no mucous glands in the EAC. Pure purulent = mucosa destroyed. Profuse, re-accumulating after cleaning = reservoir sign → mastoiditis.**',
    '- **AOM hearing loss is CONDUCTIVE. SNHL or vertigo during AOM = labyrinthitis.**',
    '',
    'Src: L21.1; L17,18'
  ].join('\n'),
  qs: ['entqb-ear3-85','entqb-ear3-55','entqb-ear3-54']
},

{
  id: 'aom-5', w: 'must',
  h: 'Treatment of AOM, and myringotomy',
  body: [
    '**Medical: 1) antibiotics UNTIL RESOLUTION · 2) antihistaminics · 3) decongestant · 4) analgesic and antipyretics. Surgical: myringotomy ± grommet or T-tube.**',
    '- **48-h rule:** healthy child, **first uncomplicated** attack, **congested not bulging** drum → analgesia + antipyresis, **review at 48 h**; antibiotics if no improvement by **48–72 h**. **Excluded: < 6 months**, toxic, bilateral in the very young, perforated, recurrent, immunocompromised *(not in course material).*',
    '- **Non-resolution = inadequate antibiotic therapy**; **recurrence** = URTIs, nasal obstruction, low immunity. **AOM is CLINICAL** — image only a suspected complication.',
    '- Defect: GG keys **immediate antibiotics** while its own box describes **observe, treat if no improvement in 48–72 h** — keyed as printed.',
    '**Myringotomy = deliberate incision; RADIAL, ANTERO-INFERIOR, never postero-superior. Indications:** impending perforation (**bulging, nippling**) · **thick drum in a child** · **complication — facial palsy or labyrinthitis, myringotomy FIRST** · unresponsive AOM · **secretory OM after failed medical treatment** (operation of choice) · **atelectasis** · small inadequately draining or high attic perforation.',
    '- **Not indications:** a **CONGESTED drum** (no fluid under tension) · **OTOSCLEROSIS** (dry ear, normal drum).',
    '- **MYRINGOtomy makes a hole · MYRINGOplasty closes one · TYMPANOplasty = myringoplasty + ossiculoplasty · STAPEDECTOMY replaces a fixed stapes.** Tube complications: **residual perforation · tympanosclerosis · otorrhoea through the tube · early extrusion or blockage.**',
    '',
    'Src: L21.1; L21.2; L15'
  ].join('\n'),
  qs: ['entep-ear-2','entqb-ear3-79','entqb-ear3-56','entep-ear-230','entep-ear-142','entep-ear-70','entep-ear-87','entep-ear-166','entqb-ear3-86','entep-ear-237']
},

{
  id: 'aom-6', w: 'must',
  h: 'Acute NECROTIC otitis media',
  body: [
    '*(Absent from all 34 cached ENT files — **not in course material**.)*',
    '',
    '||**Ordinary suppurative OM**|**ACUTE NECROTIC OM**|',
    '|---|---|---|',
    '|Organism|pneumococcus, H. influenzae|**GROUP A β-HAEMOLYTIC STREP**|',
    '|Setting|after a cold|**debilitated child during/after an exanthem — MEASLES, scarlet fever, influenza**|',
    '|Mechanism|mucosal inflammation|**exotoxins thrombose the drum’s vessels**|',
    '|Discharge|**mucopurulent, odourless, profuse**|**PURE PURULENT, scanty**|',
    '|Perforation|small, central|**LARGE, KIDNEY-SHAPED**, may take the annulus|',
    '|Middle ear|congested mucosa|**BARE PROMONTORY**|',
    '|Healing|spontaneous|**never — needs MYRINGOPLASTY**|',
    '',
    '- **First to die: the central kidney-shaped pars tensa; manubrium, annulus and pars flaccida resist longer.**',
    '- **Immediate step = antibiotics; treatment of the entity = MYRINGOPLASTY** — myringotomy is pointless.',
    '- **Name trap: otitis MEDIA** = group A strep, child, post-measles. **Malignant otitis EXTERNA** = ***Pseudomonas***, elderly uncontrolled diabetic, skull-base osteomyelitis, cranial nerve palsies, 3–6 months IV cover.',
    '',
    'Src: L17,18 (externa only)'
  ].join('\n'),
  qs: ['entep-ear-86','entep-ear-158','entqb-ear3-58','entqb-ear3-59','entqb-ear3-61','entqb-ear3-81']
},

{
  id: 'aom-7', w: 'must',
  h: 'Complications of AOM — the boundary',
  body: [
    '**Complication = extension beyond the confines of the middle ear cleft. Cranial: acute mastoiditis and mastoid abscess — MOST COMMON**, by **continuity** through the aditus · petrositis · labyrinthitis · facial paralysis. **Intracranial and extracranial groups: `ent-csom`.**',
    '- **AOM + post-auricular redness and tenderness = ACUTE MASTOIDITIS**, pinna out and down; sulcus **preserved**, then **obliterated** with a subperiosteal abscess. **Mastoiditis → antibiotics; mastoid abscess → cortical mastoidectomy.**',
    '- Petrositis = **Gradenigo** (otorrhoea + retrobulbar V pain + VI palsy) · labyrinthitis = vertigo + SNHL · extradural abscess = no local sign.',
    '- Look-alike: **furunculosis with post-auricular lymphadenitis** — **tragal tenderness**, discrete mobile node, normal middle ear.',
    '',
    'Src: L16'
  ].join('\n'),
  qs: ['entep-ear-50','entep-enr-9']
},

{
  id: 'aom-8', w: 'must',
  h: 'Otitis media with effusion — definition, AOM vs OME, causes',
  body: [
    '**“A NON-SUPPURATIVE middle ear fluid”** — no active infection: **no pain, no fever. Infants and young age, peak 6–24 MONTHS, rises in WINTER and SPRING.**',
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
    '**Three routes: 1) persistence of fluid after an AOM resolves** (commonest) **· 2) Eustachian tube malfunction · 3) air-pressure trauma — flight or scuba dive. Organisms: group A β-haemolytic streptococci, H. influenzae. Pathology:** dilated intercellular spaces, **disrupted basement membrane · PNL + lymphocytes + macrophages · histamine, leukotrienes. Fluid: SEROUS** (sterile, pale yellow, watery, translucent — the one that bubbles) **· MUCOID** (cloudy, cell secretion, glue, in SOM) **· PURULENT** (in ASOM).',
    '',
    '|Cause|Mechanism|',
    '|---|---|',
    '|**Adenoids, adenoiditis**|**obstruct the tubal orifice** + reservoir|',
    '|**Cleft palate**|**tensor and levator dysfunction · tube stenosis** → **T-tube**|',
    '|Allergic oedema|with adenoiditis, sinusitis, rhinitis|',
    '|Viral · immune deficiency · radiotherapy|tubal oedema · recurrent infection · fibrosis|',
    '|**Iatrogenic, post-adenoidectomy**|listed as cause **and** cure|',
    '|**Nasopharyngeal carcinoma**|adult, unilateral|',
    '|**Barotrauma**|**flight or scuba dive**; fullness **ON DESCENT**, retracted drum with bubbles|',
    '',
    '- **Barotrauma prevention = REGULAR SWALLOWING** (sweets, gum, drinking). Do not fly with a URTI. **Autoinflation: Valsalva, gum chewing.**',
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
    '**History: decreased hearing · earaches · recurrent ASOM · adenoid or cleft-palate features** — though every key calls effusion painless: **new pain = superimposed AOM**.',
    '- **Most diagnostic: a hair-line FLUID LEVEL with BUBBLES.** Distorted cone of light, foreshortened handle, prominent short process = **retraction only**, no fluid (type C).',
    '**Investigations: PTA · tympanometry · plain X-ray for adenoids · CT nasopharynx.**',
    '',
    '|Curve|Pressure|Compliance|Cause|',
    '|---|---|---|---|',
    '|**A**|normal|normal|normal ear|',
    '|**As**|**normal**|**REDUCED**|**stiffness — tympanosclerosis, otosclerosis**|',
    '|**Ad**|normal|increased|ossicular discontinuity, lax drum|',
    '|**B**|—|**FLAT, no peak**|**FLUID**; also perforation or patent grommet (**high canal volume**)|',
    '|**C**|**NEGATIVE**|good|**tube dysfunction**, retraction without fluid|',
    '',
    '- **Tympanometry measures compliance and the acoustic (stapedial) reflex: ABSENT in CHL, IMPAIRED in SNHL.**',
    '- **Toddler: tympanogram beats PTA** — PTA **subjective**, tympanometry **objective**. Gold standard for a child’s hearing = **ABR**.',
    '- **Bilateral symmetrical effusion: Weber does NOT lateralise. Unilateral CHL → Weber to the AFFECTED ear, Rinne negative; SNHL → Weber to the better ear.**',
    '',
    'Src: L21.2; L21.1; L13,14'
  ].join('\n'),
  qs: ['entep-ear-177','entqb-ear3-69','entep-enr-29','entep-case-9','entep-ear-234','entep-ear-4','entep-ear-114','entep-ear-101','entqb-ear3-90','entqb-ear3-89','entep-ear-24']
},

{
  id: 'aom-10', w: 'must',
  h: 'Glue ear — commonest childhood deafness, presenting as behaviour',
  body: [
    '**OME = commonest cause of conductive, and of bilateral conductive, hearing loss in a child.**',
    '- **Painless, so missed** — presents as behaviour: **inattentive or thought naughty**, **TV up**, **missing consonants**, **delayed speech**, **falling behind at school**, **tugging the ears with recurrent colds, no fever, no pain**.',
    '- Look-alikes: **otosclerosis** (adult, As) · **congenital cholesteatoma** · **CSOM** · **adhesive OM** · **congenital deaf mutism** (from birth) · **noise** (SNHL) · **traumatic rupture** · **acute OM** · **wax, atresia** (visible).',
    '- **Autism trap:** recurrent URTIs, ear tugging and a **fluctuating** measurable loss point to the ear.',
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
    '**A unilateral middle ear effusion in an adult is nasopharyngeal carcinoma until the nasopharynx has been looked at** — and may be the **only** sign.',
    '- The tube opens at the **fossa of Rosenmüller**, also the **commonest site of origin of NPC**.',
    '- **Answer = LOOK: nasopharyngeal or nasal endoscopy, and BIOPSY** — CT and MRI stage, they give no tissue.',
    '- Defect: one printing keys **watchful waiting 3 months** — no age given, nasopharyngoscopy not offered; **the key is the best option on the list.**',
    '- Corroborating: **ipsilateral upper deep cervical node · epistaxis or blood-stained postnasal discharge.**',
    '',
    'Src: L21.1; L21.2 *(NPC beyond that one line is not in course material)*'
  ].join('\n'),
  qs: ['entqb-ear3-78','entep-ear-49','entep-ear-95','entep-ear-159','entep-ear-24','entep-ear-66','entep-mfe5-1','entep-enr-5','entep-throat-case-15','entep-case-9','entep-mfe5-23']
},

{
  id: 'aom-12', w: 'must',
  h: 'Management of an effusion — the three-month ladder, grommet or T-tube',
  body: [
    '**MEDICAL I: antibiotics · antihistaminics · corticosteroids. MEDICAL II: tubal ventilation — Valsalva, gum chewing. SURGICAL I: myringotomy + ventilatory tubes. SURGICAL II: related conditions, as adenoidectomy.** Plus decongestants, treat allergy and sinusitis.',
    '',
    '|Situation|Answer|',
    '|---|---|',
    '|**1 week**, after a cold|**conservative** — decongestants, nasal steroids|',
    '|**1 month**, development **normal**|**wait and see 2 more months**|',
    '|**1 month + LANGUAGE DELAY**|**IMMEDIATE myringotomy + ventilation tubes**|',
    '|After treated AOM, **CHL persists**|**wait and watch 3 months**|',
    '|**> 3 months / 90 days** despite medical treatment|**MYRINGOTOMY + GROMMET**|',
    '|**3 months + language delay**, or **6 months** bilateral|**bilateral myringotomy + grommets**|',
    '|**Recurrent, type B**|myringotomy + ventilation tubes|',
    '|**With adenoid hypertrophy**|**ADENOIDECTOMY *AND* VENTILATION TUBE, one sitting**|',
    '|**With cleft palate**|**T-TUBE**|',
    '|**Adult, unilateral**|**NASOPHARYNGOSCOPY FIRST**|',
    '',
    '- **Language delay overrides the clock. Myringotomy alone fails — the incision heals in 48–72 h.**',
    '',
    '||**GROMMET**|**T-TUBE**|',
    '|---|---|---|',
    '|Stays|**~6–12 months, extrudes itself**|**years**, removed deliberately|',
    '|For|**TEMPORARY** — adenoids, cold, allergy|**PERSISTENT** — **cleft palate**, craniofacial anomaly, post-irradiation, chronic tubal failure, recurrent extrusion|',
    '|Risk|extrusion, blockage|**persistent perforation**|',
    '',
    '*(Dwell times not in course material.)*',
    '- Defects, keyed as printed: **systemic steroids for 48 h** as initial treatment (slide gives corticosteroids, **no duration**); a box calls **hyposensitisation and Valsalva “the most important drugs”** — neither is a drug.',
    '',
    'Src: L21.2'
  ].join('\n'),
  flow: {
    title: 'The effusion ladder — precedence, not a list',
    steps: [
      { k:'decision', t:'ADULT with a UNILATERAL effusion?', yes:'STOP — nasopharyngeal endoscopy and biopsy first. Do not treat the ear', no:'Continue' },
      { k:'decision', t:'Delayed language development, or a measurable developmental cost?', yes:'Myringotomy + ventilation tubes NOW — the clock is overridden', no:'Continue' },
      { k:'step', t:'MEDICAL — I) antibiotics, antihistaminics, corticosteroids · II) tubal ventilation: Valsalva, gum chewing', n:'± decongestants; treat allergy and sinusitis' },
      { k:'decision', t:'Persisted 3 MONTHS (90 days) despite adequate medical treatment?', yes:'MYRINGOTOMY + GROMMET — plus adenoidectomy in the same sitting if an adenoid obstructs', no:'Keep watching, and do not repeat a failed medical course' },
      { k:'alert', t:'Permanent tubal failure — cleft palate, craniofacial anomaly, post-irradiation', n:'Long-stay T-TUBE, not a grommet that will extrude' }
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
    '|**ADHESIVE OM**|**THE sequel of long-standing OME**, not CSOM; drum thins, loses its fibrous layer, **adheres to promontory and ossicles**|**permanent CONDUCTIVE**|',
    '|**ATELECTASIS**|before adhesion — collapsed, not yet stuck; **an indication for myringotomy + tube**|conductive|',
    '|**TYMPANOSCLEROSIS**|**chalky white plaques**, hyalinised often calcified collagen, sparing the handle|**none** until annulus or ossicles → **conductive**|',
    '|**BLUE EAR**|old effusion, dark cholesterol-laden fluid|conductive|',
    '',
    '- **Tympanosclerosis follows** repeated AOM, long-standing OME and **previous ventilation tube sites**. At the annulus → **conductive** loss, **Rinne negative, Weber to the worse ear, tympanogram TYPE As**. It **never crosses the oval or round window**: never SNHL, never mixed. **Otosclerosis leaves the drum NORMAL.**',
    '- Defect: one entry keys **SNHL** as the non-complication of effusion, while **`L21.2` lists SNHL as complication 5 of 5** — keyed as printed; know both lists.',
    '',
    'Src: L21.2; L19.1'
  ].join('\n'),
  qs: ['entep-ear-141','entqb-ear3-83','entqb-ear3-88','entqb-ear3-89','entqb-ear3-90','entqb-ear3-86','entep-ear-245']
},

{
  id: 'aom-14', w: 'must',
  h: 'Traumatic perforation of the drum',
  body: [
    '*(Slides carry ear trauma only as CSF otorrhoea — halo sign, β2-transferrin, β2-trace protein, head elevation — and bloody otorrhoea. The rest **not in course material**; `MODULES` has no trauma chapter.)*',
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
    '**Management is one number: THREE MONTHS.** Fresh, dry, uninfected — slap, blast, cotton bud, blow → **nothing in the ear + STRICT WATER PRECAUTIONS** (cotton wool with petroleum jelly for washing; no swimming, diving, **drops or syringing**). Most close spontaneously. **Still open at ~3 months, or 6 → MYRINGOPLASTY** — graft usually **temporalis fascia** or tragal perichondrium; with ossicular damage a **tympanoplasty**, on a **dry** ear, hearing measured.',
    '- **Drops, packs and syringing are harmful** — fluid through an open drum turns a self-limiting tear into CSOM; **clots separate on their own.**',
    '- **TEST THE HEARING.** Mild conductive loss expected, recovers. **Vertigo, or a sensorineural or severe loss → EXPLORATION** for ossicular disruption or a **perilymph fistula**.',
    '- **Iatrogenic: bleeding during syringing** = the jet tore the drum; **discharge on day 2 = secondary infection** (AOM).',
    '',
    'Src: L17,18'
  ].join('\n'),
  qs: ['entep-ear-127','entep-ear-129','entep-ear-196','entep-ear-221','entep-ear-242','entep-ear-244','entep-enr-18','entqb-ear3-76','entqb-ear3-77','entep-case-2']
}

    ]
  }
};
