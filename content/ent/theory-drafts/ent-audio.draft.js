/* ent-audio — "Audiovestibular evaluation", ENT. Written from scratch
   2026-08-14 under START-HERE.md §14 (slide-density revision notes). No v1
   existed.

   BUDGET — §14.1 REVISED rule, budget = max(summed lecture words,
   25 x linked question count), floor 600, cap 3,000. BOTH TERMS STATED:

     TERM 1 — summed words of the lectures this chapter RESTS ON, measured by
     LINE RANGE, not by claiming a whole file:
       L13,14) AudioVestibulae Evaluation      1,009 w of the file’s 1,671
         · lines 113–421 = 884 w — the audiological core: what normal hearing
           needs, the frequency and amplitude ranges, the dB and octave
           scales, behavioural vs electrophysiological audiometry, the basic
           audiological evaluation list, the three tuning-fork tests, PTA,
           the four audiogram types, speech audiometry, tympanometry, ABR, OAE.
         · lines 557–571 = 30 w — the step-by-step vestibular workup:
           provocative testing (RCT, Dix-Hallpike, bedside tilt,
           hyperventilation) and the investigation list (vHIT, VEMP, VNG,
           posturography).
         · lines 572–599 = 95 w — the two take-home slides: PTA is the gold
           standard, tympanometry is important, office tests matter,
           vestibular tests confirm rather than diagnose.
         NOT claimed: lines 1–112 (309 w — agenda, importance of hearing and
           balance, Helen Keller, the brain/CPU analogy: no examinable fact)
           and lines 422–556 (353 w — the whole dizziness half, deferred
           below to `ent-vertigo`).
       + L19.1) hearing loss                     305 w of the file’s 661
         · lines 10–21 = 45 w — the severity ladder in dB.
         · lines 95–155 = 260 w — the three questions a hearing test answers,
           the five-test list, the PTA threshold definition, SDS/SRS, the
           tympanometry mobility statements, absent vs impaired acoustic
           reflex, and the auditory-evoked-potential levels.
         NOT claimed: the CHL and SNHL cause lists, the classification of
           hearing-loss types, treatment (all -> `ent-hearing`) and the
           pressure-transformer block, 145 w (deferred below).
       = 1,314 words

     TERM 2 — 25 x 58 linked questions = 1,450 words

     max(1,314 · 1,450) = 1,450. TERM 2 GOVERNS, by 136 words.
     Floor 600 and cap 3,000 neither bind.

   DIAGRAM-DECK CHECK, as §14.1 requires it be stated. The counted range of
   L13,14 measures 1,009 w over 258 non-blank lines = 3.9 words per line —
   well above the ~2 that marks a labelled-diagram deck, so this is a prose
   file and TERM 1 is an honest number rather than an artefact of extraction.
   (For contrast, `ent-earanat`’s L22 measured 1.2.) The two terms landing
   136 words apart is what should happen when neither is distorted.

   NOT COUNTED, CITED ONLY: L20) vertigo (the fistula test — Siegle’s
   speculum or tragal compression — and the investigation categories; its
   723 w belong to `ent-vertigo`) · L22) Anatomy of Ear Undergraduate
   (stapedius/VII and tensor tympani/V for the reflex arc; its 538 w are
   already counted in full by `ent-earanat`) · L19.2) Tinnitus
   (paragangliomas as pulsatile tinnitus, one line, for the red-mass
   question) · L17,18) Otorrhea and otalgia (glomus as bloody otorrhoea) ·
   L21.2) Otitis media with effusion and L16) Chronic otitis media (type B
   behind an intact drum). Claiming any of these would make the budget
   meaningless.

   ⚠️ MEASURED OUTCOME: 1,701 body words over 10 sections — 251 OVER the
   1,450 budget (+17.3 %), and 106 over §14.1’s 10 % tolerance of 1,595.
   REPORTED, NOT HIDDEN, per §14.1’s rule that a chapter which cannot reach
   its number without cutting a protected fact stops and itemises the bill.

   TWO COMPRESSION PASSES WERE RUN AND BOTH LANDED. The first draft measured
   2,303 (+59 %); pass one took out 580 words and pass two a further 22 —
   602 words, −26 %, WITHOUT losing a fact. What went: connective and framing
   sentences, distractor-rejection tails, four bullets that only restated
   their own table, the phrase "the standing exception/error" in five places,
   a duplicated "How" row in the OAE/ABR table, and long table cells rewritten
   as fragments. The second pass yielding only 22 words is the signal that the
   fat is gone — what remains is facts.

   WHAT REACHING THE NUMBER WOULD ACTUALLY COST, itemised.
     To 1,595 (−106 w), the least damaging set, which costs no question but
     deletes four lecture slides outright — a breach of the coverage floor’s
     FIRST side ("everything important the lecture states"), all of it
     importance tests 2 and 4 (a whole slide; named entities and numbers):
       aud-3  the dB SEVERITY LADDER, a whole L19.1 slide     35 w — 0 qs
       aud-1  amplitude range, 10 µsec, the dB-scale row      40 w — 0 qs
       aud-10 the vHIT and posturography rows, workup bullet  35 w — 0 qs
                                                             ---
                                                             110 w
     To the strict 1,450 (−251 w), add the smallest whole section:
       aud-9  Otoscopy — colour behind an intact drum        130 w — 2 qs
     which leaves 2 of the 58 questions unanswerable from the notes and
     breaks the floor’s SECOND side as well. I did not do either. If the hub
     wants the strict number honoured, that is the bill.

   WHY THIS CHAPTER RUNS OVER, specifically and not as a general excuse: it is
   TEN DISTINCT TEST MODALITIES (four fork tests, PTA, audiogram reading,
   speech audiometry, tympanometry, the acoustic reflex, OAE, ABR, otoscopy,
   and the vestibular battery), each with its own irreducible grid of
   parameters, and 58 questions spread almost evenly across them — no single
   modality carries the chapter, so no table can be shared away under §12.2.
   The three grids the brief itself names as load-bearing (tuning fork,
   tympanogram, audiogram) alone account for ~330 words of pure cells.

   FLOOR KEPT BOTH WAYS — every fact, number, list, scale and classification
   the two counted ranges state, plus every one of the 58 linked questions’
   KEY and DISCRIMINATOR as a line or a table cell. All 58 ids linked, none
   dropped.

   ⚠️ WHAT NO SLIDE COVERS AND IS SUPPLIED HERE, each tagged in the body:
   the 512 Hz fork and the FALSE-NEGATIVE RINNE · ABSOLUTE BONE CONDUCTION as
   a fourth fork test (endpoint tests it and no cached deck names it) ·
   masking · the 500–4,000 Hz speech band · the audiogram CONFIGURATIONS as
   named shapes — the 4 kHz V-notch, the rising and sloping curves and
   CARHART’S NOTCH (the notch appears on no cached ENT slide, checked across
   all 34) · the canal-volume rule separating a type B effusion from a type B
   perforation · type Ad’s causes · the ABR waves and interwave latencies in
   acoustic neuroma · auditory neuropathy · the caloric temperatures and COWS ·
   Dix-Hallpike, Epley, VEMP and vHIT as named procedures · the colour table
   for a mass behind an intact drum, with Brown’s and Schwartze’s signs.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection. It lives in every question’s own
        `explanation`, one tap away through the qs links (§14.2). Kept only
        where the teaching point IS the discrimination — the tuning-fork grid
        (aud-2), the audiogram type and configuration tables (aud-4), the
        tympanogram table (aud-6), OAE vs ABR (aud-8), the drum-colour table
        (aud-9), receptor-vs-test (aud-10).
     2. Question ids in body text, teaching voice, bank meta-commentary,
        per-fact citation clauses (one Src line per section), closing summary.
     3. L13,14’s opening 112 lines — the Helen Keller quotation, the
        hearing-versus-vision and hearing-versus-balance slides, the
        brain/nerve/ear = CPU/cable/scanner analogy, the "6th sense" slides.
        Rhetoric, no extractable fact, no question.
     4. Mechanism deeper than the material goes: cochlear micromechanics and
        the travelling wave, the physics of impedance matching, the neural
        generator of each ABR wave beyond wave I.
     5. Drug doses, equipment calibration standards, and normative latency
        values in milliseconds — the material states none.

   CROSS-CHAPTER DEFERRALS (§14.5) — named, so each is a promise not a
   deletion. Each was checked against all 58 of this chapter’s questions:
   NONE tests it.
     · L13,14 lines 422–556, THE ENTIRE DIZZINESS HALF — the definition of
       dizziness, the epidemiology (2nd commonest complaint in medical
       practice, ~30 % overall incidence, mean age ~45, +10 % per 5 years of
       age, 90 % by age 75, 36 % of women vs 22 % of men), the diagnostic
       challenges, ">90 % benign / <5 % serious", "the commonest cause of
       dizziness is LACK OF SLEEP", "history gives a provisional diagnosis in
       80 % of cases", the TYPE I–IV DIZZINESS classification (vertigo /
       syncope-presyncope / disequilibrium / non-specific) and the descriptor
       list (motion intolerance, drop attack, oscillopsia, unsteadiness…)
                                                        ->  `ent-vertigo`
     · L13,14 lines 63–83 — STATIC vs DYNAMIC BALANCE, defined  -> `ent-vertigo`
     · L20) vertigo, everything except the fistula test and the investigation
       categories — central vs peripheral causes, central vs peripheral
       nystagmus, BPPV, Ménière’s, vestibular neuritis, viral labyrinthitis,
       ototoxicity, third-window lesions, treatment      ->  `ent-vertigo`
       (⚠️ `ent-earanat` already registered this same deferral; this is the
       2nd chapter to owe it, and it is still unwritten.)
     · L19.1 lines 10–21 (the SEVEN TYPES of hearing loss), lines 22–94 (the
       full CHL and SNHL cause lists) and lines 156–163 (treatment: medical,
       hearing aids, cochlear implant)                    ->  `ent-hearing`
     · L19.1 lines 53–75, THE PRESSURE TRANSFORMER SYSTEM — 99.9 % of sound
       energy lost air-to-fluid, areal ratio 55/3 = 17, ossicular lever
       action 1.3, product 22, a 26 dB gain               ->  `ent-hearing`
     · L19.2) Tinnitus in full — subjective vs objective, 17 % of the general
       population and 34 % of the elderly, the five types, pitch and loudness
       match, effect of masking, treatment. Only the paraganglioma line is
       kept here                                          ->  `ent-hearing`

   VERIFIED, NOT DEFERRED — `ent-earanat.draft.js` was read before relying on
   it, as the brief requires: its earan-8 already carries stapedius/VII on
   the stapes and tensor tympani/V on the malleus, and its earan-11 already
   carries SCC/crista = angular vs utricle-saccule/maculae = linear. Both are
   restated here only as the one line each reflex-arc and caloric question
   turns on, not re-taught.

   DEFECT NOTES carried in the body, keyed as printed per §4(b): the
   Schwabach cross-bank divergence (aud-2), and the SDS wording difference
   between L13,14 and L19.1 (aud-5).

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field. */

var THEORY_ENT_AUDIO = {
  'ent-audio': {

    intro: 'Almost every question is one of two shapes: read this result, or pick the test for this patient. Three grids carry the marks — the tuning-fork grid, the five tympanogram curves and the four audiogram shapes. Learn them as grids, not as prose.',

    sections: [

{
  id: 'aud-1', w: 'know',
  h: 'The numbers, and the two families of hearing test',
  body: [
    '**Normal hearing needs five links: STIMULUS (sound) · CONDUCTION (external + middle ear) · TRANSDUCTION (COCHLEA) · NEURAL transmission · CENTRAL processing (subcortical, then cortical).**',
    '',
    '|Quantity|Figure|',
    '|---|---|',
    '|**Frequency range**|**20 – 20,000 Hz**|',
    '|**Amplitude range**|**0.0002 – 200 dyne/cm²**|',
    '|**Speech band**|**500 – 4,000 Hz** *(not in course material)*|',
    '|**Temporal resolution**|**10 µsec**|',
    '|**Decibel scale**|**0 dB = 0.0002 · 120 dB = 200 dyne/cm²**; logarithmic — 10⁶ units collapse to 120|',
    '|**Octave scale**|**each frequency DOUBLE the last: 250, 500, 1000, 2000, 4000 Hz**|',
    '',
    '- **The ear is NOT equally sensitive across frequencies.**',
    '- **BEHAVIOURAL audiometry needs a response** (cooperative children, adults); **ELECTROPHYSIOLOGICAL measures an involuntary reflex or potential** (infants, toddlers, uncooperative adults).',
    '- **Basic audiological evaluation: history → examination incl. OTOSCOPY → TUNING FORKS → PTA → TYMPANOMETRY → SPEECH AUDIOMETRY.**',
    '- **Five symptoms of ear disease: hearing loss · tinnitus · dizziness/vertigo · otalgia · otorrhoea.**',
    '',
    'Src: L13,14'
  ].join('\n'),
  qs: ['entqb-ear8-220']
},

{
  id: 'aud-2', w: 'must',
  h: 'Tuning fork tests — the grid',
  body: [
    '**512 Hz fork** *(not in course material)*. **RINNE = TYPE, WEBER = SIDE; read Rinne first.**',
    '',
    '|Test|Compares|**NORMAL**|**CONDUCTIVE**|**SENSORINEURAL**|',
    '|---|---|---|---|---|',
    '|**RINNE**|**AC vs BC, same ear**|**AC > BC = POSITIVE**|**BC > AC = NEGATIVE**|**AC > BC = POSITIVE**|',
    '|**WEBER**|midline BC, **both ears**|**midline, not lateralized**|**to the POORER (worse) ear**|**to the BETTER ear**|',
    '|**SCHWABACH**|**patient’s BC vs examiner’s**|equal|**Pt > Ex = PROLONGED**|**Ex > Pt = SHORTENED**|',
    '|**ABSOLUTE BONE CONDUCTION**|patient’s BC, canal occluded, vs examiner’s|equal|**NORMAL**|**REDUCED** *(ABC is on no cached slide)*|',
    '',
    '- **Rinne detects a conductive loss only. POSITIVE = normal OR sensorineural** — both routes fall together, so the comparison is unchanged.',
    '- **Schwabach and ABC separate CONDUCTIVE from MIXED**: both **normal** in pure conductive loss; shortened Schwabach or reduced ABC = the cochlea is involved.',
    '- **FALSE-NEGATIVE RINNE — a dead ear.** In severe unilateral SNHL the tone crosses the skull to the **opposite** cochlea, so BC seems to beat AC with no conductive lesion. **Weber unmasks it — it goes to the GOOD ear.** **MASKING** (noise to the non-test ear) removes the crossover *(both not in course material)*.',
    '- **Bilateral negative Rinne at about 40 with normal drums = OTOSCLEROSIS**; Weber names the worse side.',
    '- **Defect note:** for right conductive loss Grade Gain keys Schwabach **prolonged**, endpoint **normal**; the slide says prolonged. Both keyed as printed.',
    '',
    'Src: L13,14'
  ].join('\n'),
  qs: ['entep-ear-67','entep-ear-132','entep-ear-185','entep-ear-190','entep-ear-225','entep-mfe5-31','entqb-ear8-197','entqb-ear8-198','entqb-ear8-199','entqb-ear8-200','entqb-ear8-203','entqb-ear8-223','entqb-ear8-234']
},

{
  id: 'aud-3', w: 'must',
  h: 'Pure tone audiometry — the test itself',
  body: [
    '**Measures HEARING THRESHOLDS for pure tones, 250 – 8,000 Hz in OCTAVE intervals**, in a **sound-treated room**. **AC by EARPHONES · BC by BONE VIBRATOR. AUDIOGRAM: Y = INTENSITY (dB) · X = FREQUENCY (Hz).**',
    '',
    '- **THRESHOLD = the minimum intensity audible in at least 50 % of presentations.**',
    '- **PTA is SUBJECTIVE and BEHAVIOURAL — it needs a response, so NOT objective.** Still **the GOLD STANDARD of hearing evaluation**; **qualitative and quantitative**.',
    '- **The AC–BC relationship gives: PRESENCE · TYPE · DEGREE · CONFIGURATION** — and the **side**.',
    '- **BC BYPASSES THE CONDUCTING APPARATUS, so a raised BC threshold = COCHLEAR DAMAGE.** Glue ear, perforation, ossicular dislocation and fixation leave BC normal.',
    '- **MASKING** — noise to the non-test ear when the tone could cross the skull *(not in course material)*.',
    '',
    '|Degree|Threshold|',
    '|---|---|',
    '|**Normal**|**< 20 dB**|',
    '|**Mild**|**20 – 40 dB**|',
    '|**Moderate**|**40 – 60 dB**|',
    '|**Severe**|**60 – 90 dB**|',
    '|**Profound**|**90 – 110 dB**|',
    '|**Total**|**> 110 dB**|',
    '',
    'Src: L13,14; L19.1'
  ].join('\n'),
  qs: ['entep-ear-118','entep-ear-130','entqb-ear8-204']
},

{
  id: 'aud-4', w: 'must',
  h: 'Reading an audiogram — type first, then shape',
  body: [
    '**Read the BONE line first: it decides whether the cochlea is involved.**',
    '',
    '|Type|AC|BC|Air-bone gap|',
    '|---|---|---|---|',
    '|**NORMAL**|normal|normal|none|',
    '|**CONDUCTIVE**|**ABNORMAL**|**NORMAL**|**YES**|',
    '|**SENSORINEURAL**|abnormal|abnormal|**NONE — abnormal EQUAL AC and BC, the lines together**|',
    '|**MIXED**|abnormal|abnormal|**YES — abnormal UNEQUAL: both lines depressed AND separated**|',
    '',
    '**CONFIGURATION** *(named shapes and notches not in course material; the slide names only low- and high-frequency SNHL)*:',
    '',
    '|Shape|Reads as|Cause|',
    '|---|---|---|',
    '|**Flat, wide air-bone gap, BC normal**|conductive|**middle-ear effusion**|',
    '|**RISING — worst at the LOW frequencies, lines together**|**low-frequency SNHL**|**MÉNIÈRE’S DISEASE** (endolymphatic hydrops)|',
    '|**SLOPING DOWN above 1 kHz, lines together**|**high-frequency SNHL**|**PRESBYCUSIS** — bilateral, elderly; costs consonants, so speech is heard but not understood|',
    '|**V-NOTCH DIPPING AT 4,000 Hz, recovering by 8,000**|noise damage|**ACOUSTIC TRAUMA.** Against presbycusis the discriminator is the RIGHT-HAND END — presbycusis keeps sloping|',
    '',
    '- **A MIXED trace needs a route into the cochlea** — trauma, glomus tumour, complicated CSOM. **Middle-ear effusion has none and stays purely conductive.**',
    '- **OTOSCLEROSIS is MAINLY CONDUCTIVE** — stapes fixed at the oval window, with **CARHART’S NOTCH, a BC dip at 2,000 Hz** *(not in course material)*. Mixed only if the otic capsule is involved.',
    '',
    'Src: L13,14; L20 for low-frequency SNHL = Ménière’s'
  ].join('\n'),
  qs: ['entqb-ear8-205','entqb-ear8-206','entqb-ear8-207','entqb-ear8-208','entqb-ear8-209','entqb-ear8-211','entqb-ear8-224','entqb-ear8-235']
},

{
  id: 'aud-5', w: 'high',
  h: 'Speech audiometry',
  body: [
    '**Hearing measured with SPEECH — WORDS and SENTENCES.** **SRT (speech reception threshold)** = detect speech at threshold; **SDS (speech discrimination score)** = discriminate above threshold.',
    '',
    '|Lesion|SDS|',
    '|---|---|',
    '|**CONDUCTIVE**|**EXCELLENT** — attenuated, not distorted|',
    '|**SENSORY (cochlear)**|**GOOD**|',
    '|**NEURAL (retrocochlear)**|**POOR**|',
    '',
    '- **A DECISION-MAKING test: it measures COMPREHENSION, so it predicts HEARING-AID BENEFIT.** Amplification restores a conductive loss; it cannot restore a neural one.',
    '- **A score POOR OUT OF PROPORTION to the pure-tone audiogram is a RETROCOCHLEAR flag.**',
    '- It does not give the type of loss alone, test middle-ear integrity, or give a frequency range.',
    '- **Wording note:** L19.1 states the same grading as *“excellent in cochlear lesions and poor in retrocochlear lesions.”*',
    '',
    'Src: L13,14; L19.1'
  ].join('\n'),
  qs: ['entqb-ear8-201','entqb-ear8-230']
},

{
  id: 'aud-6', w: 'must',
  h: 'Tympanometry (impedance audiometry) — the five curves',
  body: [
    '**Measures TWO middle-ear features: the PRESSURE of the cavity, and the DEGREE OF ELASTICITY (compliance) or resistance of the system.** Probe, headphone, manometer.',
    '',
    '|Curve|Pressure|Compliance|Means|',
    '|---|---|---|---|',
    '|**A**|**normal**|**normal**|normal middle ear|',
    '|**As**|**normal**|**REDUCED**, shallow peak|**TYMPANO-OSSICULAR FIXATION — OTOSCLEROSIS, TYMPANOSCLEROSIS. SURGICAL**: stapedectomy or tympanoplasty|',
    '|**Ad**|**normal**|**INCREASED**, tall peak|**OSSICULAR DISCONTINUITY**, or an **ATROPHIC drum**|',
    '|**B**|—|**NON-COMPLIANT, FLAT curve**|**ABSENT mobility = MIDDLE-EAR EFFUSION** (secretory otitis media)|',
    '|**C**|**NEGATIVE**|**good**|**EUSTACHIAN TUBE DYSFUNCTION** — retracted but still mobile; the reversible stage before B|',
    '',
    '- **⚠️ A FLAT TYPE B IS TWO DIAGNOSES AND THE CANAL VOLUME DECIDES** *(not in course material)*: **LOW or normal = FLUID behind an intact drum** (bubbles, hairline); **HIGH = PERFORATION or patent grommet**, the probe reading the middle ear too.',
    '- **Detects ossicular discontinuity, Eustachian tube obstruction, effusion and otosclerosis alike** — hence *“all of the above”*.',
    '- **No hearing threshold, and it cannot see past wax.** A purely cochlear loss gives a normal trace.',
    '- **Chain it out: flat B → effusion → conductive → NEGATIVE Rinne, Weber to THAT SAME ear.**',
    '- **Conductive loss with a NORMAL otoscopy after head trauma = OSSICULAR DISCONTINUITY**, usually incudostapedial: wide flat gap, type Ad, absent reflex.',
    '',
    'Src: L13,14; L19.1'
  ].join('\n'),
  qs: ['entep-ear-82','entep-ear-125','entep-ear-165','entep-ear-204','entep-mfe5-4','entep-mfe5-5','entep-mfe5-6','entqb-ear8-202','entqb-ear8-210','entqb-ear8-212','entqb-ear8-218','entqb-ear8-219','entqb-ear8-226','entqb-ear8-231','entqb-ear8-232']
},

{
  id: 'aud-7', w: 'must',
  h: 'The acoustic (stapedial) reflex',
  body: [
    '**Contraction of STAPEDIUS to a loud sound, measured on the tympanometer.** Objective, and **bilateral** — one loud sound contracts both stapedii *(bilaterality not in course material)*.',
    '',
    '|Link|Structure|',
    '|---|---|',
    '|**Stimulus**|**LOUD sound**|',
    '|**Receptor**|**cochlear HAIR CELLS**|',
    '|**Afferent**|**AUDITORY NERVE — cochlear division of VIII**|',
    '|**Centre**|**FACIAL NUCLEUS**|',
    '|**Efferent**|**MOTOR part of the FACIAL nerve (VII)**|',
    '|**Effector**|**STAPEDIUS muscle**|',
    '',
    '- **Every wrong chain substitutes TENSOR TYMPANI and the TRIGEMINAL.** Tensor tympani: **malleus, V**. Stapedius: **stapes, VII**. Both protect the cochlea against loud sound; only stapedius makes the reflex.',
    '- **ABSENT reflex = CONDUCTIVE hearing loss. IMPAIRED reflex = SENSORINEURAL loss**, its threshold merely raised.',
    '- **Lost in: conductive loss · SEVERE and PROFOUND SNHL · FACIAL NERVE PARALYSIS. MILD SNHL leaves it intact.**',
    '- **A paralysed stapedius is why Bell’s palsy causes HYPERACUSIS.**',
    '',
    'Src: L19.1; L13,14; stapedius/VII and tensor tympani/V from L22'
  ].join('\n'),
  qs: ['entep-ear-117','entqb-ear8-213','entqb-ear8-216','entqb-ear8-217']
},

{
  id: 'aud-8', w: 'must',
  h: 'Objective tests — OAE, ABR and the infant pathway',
  body: [
    '**AUDITORY EVOKED POTENTIALS, one per level: cochlea = ELECTROCOCHLEOGRAPHY · nerve and brainstem = ABR · subcortical centres = MIDDLE LATENCY RESPONSE · auditory cortex = CORTICAL AUDITORY POTENTIALS.**',
    '',
    '||**OAE**|**ABR (BERA)**|',
    '|---|---|---|',
    '|What|**low-level sounds from COCHLEAR HAIR CELL movement**, spontaneous or **evoked**; a **MICROPHONE in the external canal**|**electrical voltages from the BRAINSTEM AUDITORY PATHWAY**; **electrodes on the skull**|',
    '|Reaches|**the COCHLEA only** — not nerve, brainstem or cortex|**auditory nerve → PONS → MIDBRAIN (inferior colliculus)** via the lateral lemniscus — **NOT the AUDITORY CORTEX**|',
    '|Use|**IDEAL FOR NEONATAL SCREENING** — easy and fast|**thresholds in NEWBORNS, INFANTS, MENTAL RETARDATION, MALINGERERS**; **neural conduction in space-occupying lesions and MS**|',
    '',
    '- **Both are OBJECTIVE, needing no cooperation** — so *“ABR or OAE?”* is usually **both**.',
    '- **INFANT PATHWAY: OAE screen → fail → repeat → still fail → TYMPANOMETRY + ABR.** Tympanometry because **effusion abolishes OAEs behind a normal drum**; ABR gives the threshold. **Never wait for play audiometry at three; never reassure.**',
    '- **Tympanometry is objective but reads the MIDDLE EAR, not hearing** — never the answer to *“assess hearing in a neonate”*. **PTA, speech and behavioural/free-field audiometry need cooperation.**',
    '- **ACOUSTIC NEUROMA on ABR: WAVE I PRESERVED, WAVE V DELAYED, INTERWAVE LATENCIES PROLONGED** — the lesion is distal to the brainstem. **MRI is the gold standard** *(not in course material)*.',
    '- **Normal OAE with an absent ABR = AUDITORY NEUROPATHY** *(not in course material)*.',
    '',
    'Src: L13,14; L19.1'
  ].join('\n'),
  qs: ['entep-ear-12','entep-ear-23','entep-ear-33','entep-ear-64','entep-ear-134','entep-enr-4','entqb-ear8-214','entqb-ear8-215','entqb-ear8-233']
},

{
  id: 'aud-9', w: 'high',
  h: 'Otoscopy — the colour behind an intact drum',
  body: [
    '**Otoscopy precedes every instrument.** Behind an INTACT drum the colour is the diagnosis *(table not in course material beyond the two lines cited)*.',
    '',
    '|Colour|Lesion|Decider|',
    '|---|---|---|',
    '|**RED, pulsatile**|**GLOMUS TUMOUR (paraganglioma)**|**PULSATILE TINNITUS**; **BROWN’S SIGN** — blanches on pneumatic pressure. **Image it, NEVER biopsy**|',
    '|**WHITE pearl**|**CONGENITAL CHOLESTEATOMA**|a child, **NO perforation, NO discharge**, still erosive|',
    '|**AMBER or straw, bubbles, hairline**|**middle-ear effusion**|type B, low canal volume|',
    '|**BLUE**|**haemotympanum**, or a **high (dehiscent) jugular bulb**|trauma; or a variant that bleeds if incised|',
    '',
    '- **Tympanosclerosis is white but lies WITHIN the drum**, as chalky plaques.',
    '- **Otosclerosis leaves the drum NORMAL** — diagnosed by the audiogram and a type As trace. Schwartze’s sign, a flamingo-pink promontory flush, is the rare exception.',
    '',
    'Src: paragangliomas as pulsatile tinnitus L19.2; glomus as bloody otorrhoea L17,18; the remainder not in course material'
  ].join('\n'),
  qs: ['entqb-ear8-221','entqb-ear8-222']
},

{
  id: 'aud-10', w: 'high',
  h: 'Vestibular evaluation — office tests and laboratory tests',
  body: [
    '**HISTORY → PROVOCATIVE TESTING → EXAMINATION → INVESTIGATIONS → specialty consultation. Examination rarely diagnoses but confirms; vestibular tests CONFIRM, they do not diagnose.**',
    '',
    '|Provocative test|Provokes|',
    '|---|---|',
    '|**Rotation-induced (RCT)**|rotational stimulus to the canals|',
    '|**POSITIONING — DIX-HALLPIKE**|**BPPV, posterior semicircular canal**; treated by the **EPLEY manoeuvre** *(both names not in course material)*|',
    '|**Orthostatic — bedside tilt**|presyncope, postural hypotension|',
    '|**Hyperventilation**|non-vestibular and psychogenic dizziness|',
    '|**FISTULA TEST**|**Siegle’s speculum or TRAGAL COMPRESSION.** Vertigo and nystagmus on pressure = **third-window / labyrinthine fistula** (CSOM with fistula)|',
    '',
    '|Laboratory test|Tests|',
    '|---|---|',
    '|**CALORIC TEST**|**the LATERAL (horizontal) SEMICIRCULAR CANAL, ONE LABYRINTH AT A TIME** — the only test examining each ear separately. **Cold 30 °C, warm 44 °C; COWS — Cold Opposite, Warm Same**, the FAST phase *(not in course material)*|',
    '|**ENG / VNG**|records **eye movements and nystagmus**; the caloric runs inside it|',
    '|**vHIT**|video head impulse test — high-frequency canal function|',
    '|**VEMP**|**the OTOLITH organs, UTRICLE and SACCULE** — LINEAR acceleration, which no caloric reaches|',
    '|**Posturography**|whole-body balance|',
    '',
    '- **Match receptor to test: SEMICIRCULAR CANALS (crista, ANGULAR) → caloric, vHIT · UTRICLE and SACCULE (maculae, LINEAR) → VEMP.**',
    '- Workup also carries **audiological, radiological and laboratory** investigations and **eye examination for nystagmus**.',
    '',
    'Src: L13,14; fistula test and investigation categories L20; receptor pairing L22'
  ].join('\n'),
  qs: ['entep-ear-128']
}

    ]
  }
};
