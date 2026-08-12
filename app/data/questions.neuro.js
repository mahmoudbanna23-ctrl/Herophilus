/* Neuropsychiatry questions.
   Appended in Phase 2 batches, transcribed from the scanned question banks.
   Schema per question: id, module, chapter, stem, options, answer, explanation, objective, source.
   `var`, not `const`: the aggregator reads these off `window`, so a missing
   file degrades to an empty list instead of throwing a ReferenceError.

   String fields are DOUBLE-quoted in this file. The source prints straight
   apostrophes (Broca's, Romberg's, Parkinson's) and a double-quoted field holds
   them verbatim with no escaping, which is what the apostrophe trap in
   START-HERE.md 3.2 keeps catching. Quoted lecture phrases inside use curly
   quotation marks, so no double quote ever appears inside a double-quoted field. */
var Q_NEURO = [

/* ---------------------------------------------------------------------------
   GRADE GAIN - Neurology section, topic 01 "Neurological Sheet"
   Book pp.1-3 = PDF pp.6-8 (offset +5). 22 questions printed, Q1-Q22.
   Answers print as bare keys on book p.3; ONLY Q7 carries a printed
   explanation, and that one stops mid-sentence.
   --------------------------------------------------------------------------- */

{
  id: "npqb-nr-1",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-hemi",
  stem: "The Rebound Phenomenon is typically seen in patients with which of the following conditions?",
  options: [
    "Parkinson's Disease",
    "Cerebellar Ataxia",
    "Multiple Sclerosis",
    "Hemiplegia"
  ],
  answer: 1,
  explanation: "**The rebound phenomenon is a cerebellar sign. It is one of the upper-limb coordination tests, and it is positive when the cerebellum fails to *check* a movement it has already started.**\n\n`L12) hemi,parap&ataxia` lists it among the upper-limb coordination tests: “Rebound phenomena: the patient should stretch his arms, an try to swing them - Or by trying to extend a firmly flexed forearm (while protecting the patient's face)”.\n\n**How it is elicited, and why the lecture warns you to guard the face.** The patient flexes the elbow hard against your resistance and you release suddenly. Normally the antagonist (triceps) fires almost immediately and arrests the limb — the *check reflex*. With a cerebellar hemisphere lesion that braking is delayed, so the forearm flies up and can strike the patient's own face or shoulder. Eliciting it with the arms outstretched works the same way: you press the arms down, let go, and the limb overshoots upward before settling. The eponym is the **Stewart-Holmes sign** (*not taken from the course material*).\n\n**Where it sits among the cerebellar signs.** Rebound belongs to the same family as dysmetria (past-pointing on finger-to-nose), dysdiadochokinesia (clumsy rapid alternating movement), intention tremor and the heel-knee-shin abnormality — all of which `L12` groups under *Testing Coordination*. All of them are **ipsilateral** to the lesion: cerebellar signs do not cross.\n\n**Why the other options are wrong**\n\n| Option | Why it fails |\n|---|---|\n| Parkinson's disease | An extrapyramidal disorder — rest tremor, cog-wheel rigidity, bradykinesia, postural instability. Tone is *increased*, so the limb is if anything over-braked. There is no incoordination out of proportion to the slowness. |\n| Multiple sclerosis | *Can* produce rebound, but only when a plaque happens to sit in the cerebellum or its connections. MS is a disease; the question asks which condition the sign typifies, and the sign defines a **cerebellar syndrome**, whatever causes it. |\n| Hemiplegia | A pyramidal problem — clasp-knife spasticity, exaggerated deep tendon reflexes, absent superficial reflexes and an extensor plantar, all listed in `L12`. Weakness, not incoordination. |\n\n**Bottom line:** a positive rebound at the bedside localises to the cerebellar hemisphere on the *same* side. Combine it with the other coordination tests before calling it, since a very weak limb can overshoot for reasons that have nothing to do with the cerebellum.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "The rebound phenomenon (loss of the check reflex) is a cerebellar hemisphere sign, ipsilateral to the lesion.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.1"
},

{
  id: "npqb-nr-2",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-hemi",
  stem: "Muscle tone in vestibular ataxia?",
  options: [
    "within average",
    "Hypotonia",
    "Clasp knife spasticity"
  ],
  answer: 0,
  explanation: "**Muscle tone is normal in vestibular ataxia — this is one of the few features that separates it cleanly from the other two types.**\n\n`L12) hemi,parap&ataxia` tabulates the three ataxias side by side, and the tone row reads **hypotonia** for cerebellar, **hypotonia** for sensory and **normal** for vestibular. That single table answers a large share of the ataxia questions in this bank, so it is worth holding whole:\n\n| | Cerebellar | Sensory | Vestibular |\n|---|---|---|---|\n| **Speech** | staccato | normal | normal |\n| **Nystagmus** | present | absent | present |\n| **Muscle tone** | hypotonia | hypotonia | **normal** |\n| **Weakness** | absent | present | absent |\n| **Ataxia** | present with eyes open **and** closed | present with eyes **closed only** | absent |\n| **Gait** | ataxic, wide based | stamping / high steppage | normal / vertigo |\n| **Reflexes** | average | diminished | normal |\n| **Romberg's test** | negative | **positive** | negative |\n| **Auditory symptoms** | absent | present | absent |\n\n**Why vestibular ataxia spares tone.** The lesion is in the labyrinth, the vestibular nerve or the vestibular nuclei. What is disturbed is the sense of where the head is in space, so the patient has vertigo, nystagmus and often deafness or tinnitus, and veers to one side when walking. Nothing in that pathway sets the gain of the stretch reflex, so tone and the deep tendon reflexes are untouched. Note the row above it: in vestibular disease there is strictly no *limb* ataxia at all — finger-to-nose and heel-knee-shin are performed normally. The imbalance is of the whole body.\n\n**Why the other options are wrong**\n\n- **Hypotonia** is the answer for the other two types. In cerebellar disease the cerebellum's facilitation of the anterior horn cell is lost, giving a floppy, pendular limb. In sensory ataxia the afferent limb of the stretch reflex arc is interrupted, so tone and reflexes are both *diminished*.\n- **Clasp-knife spasticity** is a **pyramidal** sign — `L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY` lists it under *Upper Motor Neuron Manifestations*, alongside hyperreflexia and an extensor plantar. It has no place in any ataxia; if you find it, you are looking at a corticospinal lesion, not a coordination disorder.\n\n**Bottom line:** normal tone, normal reflexes, negative Romberg, but vertigo, nystagmus and auditory symptoms — that combination is vestibular. Hypotonia with a *negative* Romberg is cerebellar; hypotonia with a *positive* Romberg and diminished reflexes is sensory.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "Vestibular ataxia leaves muscle tone and reflexes normal; cerebellar and sensory ataxia both cause hypotonia.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.1"
},

{
  id: "npqb-nr-3",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-hemi",
  stem: "What is/are the feature(s) of a lesion of the cerebellar hemisphere?",
  options: [
    "Ipsilateral limb ataxia & hypertonia",
    "Rest tremor",
    "Dysphasia",
    "Spasticity",
    "Cog wheel rigidity"
  ],
  answer: 0,
  explanation: "**A cerebellar hemisphere lesion produces incoordination of the limbs on the SAME side. That is what makes the keyed option the only possible one — it is the only option that mentions ipsilateral limb ataxia at all.**\n\n**⚠️ A defect in the option, recorded rather than corrected.** The keyed option pairs the ipsilateral limb ataxia (right) with **hypertonia** (wrong). `L12) hemi,parap&ataxia` tabulates cerebellar muscle tone as **hypotonia**, not hypertonia, and that is standard teaching everywhere: the cerebellum facilitates the anterior horn cell, so losing it leaves the limb floppy and the reflexes pendular. The bank's key is kept as printed because the option is still the only one describing a cerebellar hemisphere syndrome, but **the second half of that option contradicts the lecture.** Answer it as printed and remember the tone is *reduced*.\n\n**What a cerebellar hemisphere lesion actually gives you**, all ipsilateral:\n\n- **Limb ataxia** — dysmetria on finger-to-nose and heel-knee-shin, past-pointing.\n- **Dysdiadochokinesia** — clumsy rapid alternating movement.\n- **Intention tremor** — absent at rest, worsening as the target is approached.\n- **Rebound** — the failed check reflex tested in question 1 of this topic.\n- **Hypotonia** and pendular reflexes.\n- **Nystagmus**, fast phase towards the side of the lesion.\n- **Staccato (scanning) speech**, which `L12` puts in its comparison table.\n\nCompare that with a **vermis / midline** lesion, which spares the limbs and produces truncal ataxia and a wide-based, staggering gait — a patient who cannot sit or stand steadily but whose finger-to-nose is clean.\n\n**Why the other options are wrong**\n\n| Option | Where it really localises |\n|---|---|\n| Rest tremor | **Extrapyramidal** — the pill-rolling tremor of Parkinson's disease, present at rest and damped by movement. Cerebellar tremor is the opposite: absent at rest, worst on approaching a target. |\n| Dysphasia | **Cortical**, and in almost everyone the *left* hemisphere. `L1` and `L12` both list aphasia among the signs of a cortical lesion causing hemiplegia. The cerebellum contributes to language but does not produce a true dysphasia. |\n| Spasticity | **Pyramidal**. `L1` lists clasp-knife spasticity under *Upper Motor Neuron Manifestations*. |\n| Cog wheel rigidity | **Extrapyramidal**, and the classic finding in Parkinson's disease — a ratchety resistance present throughout the range, unlike the velocity-dependent catch-and-give of spasticity. |\n\nNotice that three of the four wrong options are *increased-tone* answers. That is the trap the question is built on, and it is the same trap the keyed option itself falls into.\n\n**Bottom line:** cerebellar hemisphere equals ipsilateral limb incoordination with **low** tone. If tone is up, look at the pyramidal or extrapyramidal system instead.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "A cerebellar hemisphere lesion causes ipsilateral limb ataxia with hypotonia — the bank's keyed option wrongly says hypertonia.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.1"
},

{
  id: "npqb-nr-4",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-hemi",
  stem: "Which of the following conditions is characterized by dysmetria and dysdiadochokinesia along with a positive Romberg's test?",
  options: [
    "Mixed Ataxia",
    "Friedreich's Ataxia",
    "sensory ataxia",
    "Cerebellar Stroke"
  ],
  answer: 0,
  explanation: "**The stem deliberately combines signs from two different ataxias, so the answer has to be the category that contains both — mixed ataxia.**\n\nSplit the findings:\n\n- **Dysmetria and dysdiadochokinesia** are **cerebellar**. `L12) hemi,parap&ataxia` lists both under *Testing Coordination* — “Dysdiadokokinesia = having difficulty in papid alternating movement. Ask the patient to rapidly open & close his fist”.\n- **A positive Romberg** is **sensory**. `L12` is explicit about what the test measures: “If okay with eyes open, but sways or falls with his eyes closed = + Romberg. **Mainly tests deep sensation**”. The comparison table then records Romberg as **negative** in cerebellar disease and **positive** in sensory ataxia.\n\nSo a patient with both has lost cerebellar coordination *and* dorsal column proprioception at once. `L12` names the six types of ataxia — cerebellar, sensory (proprioceptive), vestibular, **mixed**, psychogenic and false — and mixed is the one that covers this combination.\n\n**Why Romberg is negative in pure cerebellar disease**, which is the point the question is really testing: a cerebellar patient is unsteady with the eyes **open** and closing them adds little, because vision was never the crutch holding them up. A sensory-ataxic patient is compensating entirely by watching their feet, so removing vision collapses them. Romberg is therefore not a test of ataxia in general — it is a test of **deep sensation**, exactly as the slide says.\n\n**Why the other options are wrong**\n\n| Option | Why it fails |\n|---|---|\n| **Friedreich's ataxia** | ⚠️ Not truly wrong, and worth knowing why. Friedreich's is a spinocerebellar degeneration that damages the dorsal columns *and* the cerebellar pathways, so it produces exactly this mixed picture — `L12` lists it both under *diffuse* causes and among the causes of a **posterior cord syndrome**, where “Proprioception affected, sensory ataxia”. The distinction the key draws is that Friedreich's is a **specific disease**, while the stem describes a **pattern**; several diseases produce it. If a stem gives you scoliosis, pes cavus, cardiomyopathy or a teenage onset, choose Friedreich's. *(This ambiguity is the question's, not the lecture's.)* |\n| **Sensory ataxia** | Accounts for the positive Romberg but not for the dysmetria and dysdiadochokinesia. Its own signature is a stamping, high-steppage gait, diminished reflexes and ataxia **only** with the eyes closed. |\n| **Cerebellar stroke** | Accounts for the cerebellar signs but should leave Romberg **negative**. It would also normally be abrupt, with vertigo, vomiting and headache. |\n\n**Bottom line:** cerebellar signs *plus* a positive Romberg means two systems are down. Name the pattern mixed ataxia, then hunt the cause — B12 deficiency, alcohol, Friedreich's and other spinocerebellar degenerations are the usual ones.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "Cerebellar signs plus a positive Romberg means both the cerebellum and deep sensation are affected — mixed ataxia.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.1"
},

{
  id: "npqb-nr-5",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "The tracts that carry deep sensation are called:",
  options: [
    "Ventral spinothalamic tracts",
    "Lateral spinothalamic tracts",
    "Gracile and Cuneate tracts",
    "Pyramidal tracts"
  ],
  answer: 2,
  explanation: "**Deep sensation — proprioception, vibration, deep pressure and discriminative touch — travels in the dorsal columns, which are made of exactly two tracts: the fasciculus gracilis and the fasciculus cuneatus.**\n\n`L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY` splits the sensory tracts in two:\n\n> “**Dorsal Columns**: the tracts that carry touch and proprioceptive information. Therefore, light touch, deep pressure, and proprioceptive senses (carried out by muscle spindles and other sensory receptors) are carried through these pathways. **(uncrossed)**”\n>\n> “**Spinothalamic tracts**: carry Pain and temperature (the free nerve endings in skin) sensory information is carried by these tracts, lateral spinothalamic tract anterior spinothalamic tract **(crossed tract)**”\n\n**Which is which, and why it matters for localisation**\n\n| | Dorsal columns (gracile + cuneate) | Spinothalamic |\n|---|---|---|\n| **Carries** | proprioception, vibration, deep pressure, fine touch | pain, temperature, crude touch |\n| **Where it crosses** | **in the medulla**, at the sensory decussation | **in the spinal cord**, within 1–2 segments of entry |\n| **Position in the cord** | posterior (dorsal) columns | lateral and anterior columns |\n| **Body part** | **gracilis** medial, lower limb; **cuneatus** lateral, upper limb | laminated, sacral fibres outermost |\n\nThe two different crossing points are the whole basis of **Brown-Séquard syndrome**, which `L1` and `L12` both set out: hemisection of the cord gives loss of proprioception and spastic weakness on the **same** side (those tracts have not crossed yet) but loss of pain and temperature on the **opposite** side (that tract crossed on entry). If you remember only one thing about the dorsal columns, make it *uncrossed in the cord*.\n\n**Why the other options are wrong**\n\n- **Ventral (anterior) spinothalamic** — crude touch and pressure, and crossed. Not deep sensation.\n- **Lateral spinothalamic** — pain and temperature. This is the commonest distractor because students remember that it is a *sensory* tract and stop there.\n- **Pyramidal tracts** — motor, not sensory at all. `L1` describes them as “descending motor pathways originating from the upper motor neurons in the cerebral cortex”, responsible for voluntary movement, with about 80 % crossing at the pyramidal decussation in the medulla.\n\n**Bottom line:** the two-neuron mnemonic is *dorsal = deep, crosses high; spinothalamic = pain, crosses low*. Dissociated sensory loss — one modality gone and the other preserved — is the clue that points you to a cord lesion in the first place.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "Deep sensation runs in the dorsal columns — fasciculus gracilis (lower limb) and cuneatus (upper limb) — which cross in the medulla, not the cord.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.1"
},

{
  id: "npqb-nr-6",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-cranial",
  stem: "The efferent component of corneal reflex is through?",
  options: [
    "Trigeminal nerve",
    "Abducent nerve",
    "Facial nerve",
    "Vestibulo-cochlear nerve"
  ],
  answer: 2,
  explanation: "**The corneal reflex is a two-nerve arc: trigeminal in, facial out. The efferent limb — the blink itself — is the facial nerve.**\n\n`L8) Cranial nerves` says it twice, once in the trigeminal section and once in the facial:\n\n> “Corneal reflex: patient looks up and away. • Touch cotton wool to other side. • Look for blink in both eyes, ask if can sense it. • Repeat other side **[tests V sensory, VII motor]**.”\n>\n> “Corneal reflex as **facial is the efferent**.”\n\n**The arc in full.** A wisp of cotton touches the cornea. Sensation travels in the **nasociliary branch of V1**, the ophthalmic division of the trigeminal nerve, to the spinal trigeminal nucleus in the pons and medulla. Interneurons then project to the facial motor nuclei **on both sides**, and the **facial nerve (VII)** contracts orbicularis oculi. Because the projection is bilateral, touching one cornea normally blinks **both** eyes — the *direct* response on the side touched and the *consensual* response on the other.\n\n**That bilaterality is what makes the reflex useful**, and it is exactly what `L8` tests in its own worked example at the end of the deck (a patient with a left upper motor neuron facial weakness, corneal touched on the right). Reading the pattern:\n\n| Finding | Where the lesion is |\n|---|---|\n| Touch either cornea, **neither** eye blinks | the **afferent** limb on the side touched — V1 |\n| Touch either cornea, only **one** eye blinks, and it is always the same eye | the **efferent** limb — VII on the non-blinking side |\n| Corneal sensation preserved, blink absent on one side only | VII, and a lower motor neuron pattern is likely |\n\nAn absent corneal reflex is also an early sign of a **cerebellopontine angle** lesion, where V, VII and VIII run together — `L8` notes that a lesion there gives a lower motor neuron facial palsy plus perceptive deafness.\n\n**Why the other options are wrong**\n\n- **Trigeminal** — the **afferent** half, and the single commonest wrong answer here. Read whether the stem asks for afferent or efferent before choosing.\n- **Abducent (VI)** — supplies one muscle only, the lateral rectus. `L8` notes it is often the first nerve compressed when intracranial pressure rises, which makes it a false-localising sign, but it has no role in blinking.\n- **Vestibulocochlear (VIII)** — hearing and balance. Purely sensory.\n\n**Bottom line:** V in, VII out, and the response is bilateral. Losing the corneal reflex is also the reason a Bell's palsy patient needs eye care — `L8` calls exposure keratitis and corneal ulcer the most dangerous complication.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "Corneal reflex: afferent V1 (trigeminal), efferent VII (facial), with a bilateral blink response.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.1"
},

{
  id: "npqb-nr-7",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "Tumor compresses C4, triceps reflex:",
  options: [
    "Exaggerated",
    "Absent even with reinforcement",
    "Hyperactive but normal",
    "Diminished"
  ],
  answer: 0,
  explanation: "**Explanation** (printed by the bank, verbatim — it stops mid-sentence exactly as shown):\n\n> Compression of the C4 spinal cord segment can lead to upper motor neuron lesions (UMNL),\n\n*Completed here, since the printed box breaks off:*\n\n**The reasoning turns on one question — is the lesion AT the reflex arc, or ABOVE it?** The triceps jerk is mediated by **C7 and C8**. `L12) hemi,parap&ataxia` gives the myotomes: “C 7 - Elbow extensors”. A tumour compressing the cord at **C4** sits well **above** that segment, so the reflex arc itself is untouched — the sensory root, the anterior horn cell and the motor root at C7/C8 all still work. What is lost is the descending corticospinal inhibition coming down from the cortex through the level of compression. Released from that control, the arc becomes overactive: the reflex is **exaggerated**.\n\nThis is the general rule for localising a cord lesion by reflexes, and it is worth holding as a pair:\n\n| Where the lesion sits | Effect on the reflex |\n|---|---|\n| **At** the segment of the arc (root, anterior horn cell) | **lower motor neuron** — reflex diminished or absent, with wasting and fasciculation at that level |\n| **Above** the segment of the arc | **upper motor neuron** — reflex exaggerated, with spasticity and an extensor plantar below the lesion |\n\n`L12` uses exactly this logic to read a cord level: “CERVICAL, ABOVE C5 — UMN signs and sensory loss in all 4 limbs”, versus “CERVICAL, C5 TO T1 — LMN signs and segmental sensory loss in arms, and UMN signs in legs”. A C4 lesion falls in the first band, so **every** limb reflex below it, triceps included, is brisk. `L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY` lists the accompanying signs under *Upper Motor Neuron Manifestations*: hyperreflexia, extensor plantar, weakness, clasp-knife spasticity.\n\n**Why the other options are wrong**\n\n- **Absent even with reinforcement** — that is the lower motor neuron answer, and it would require the lesion to be at C7/C8, not C4. Reinforcement (Jendrassik's manoeuvre) is what you do before calling a reflex truly absent.\n- **Hyperactive but normal** — self-contradictory as written, and it invites you to dismiss a genuinely pathological finding. With a compressive cervical myelopathy the brisk reflex is a sign, not a normal variant.\n- **Diminished** — again lower motor neuron, and wrong for a lesion above the arc. Note that in the **acute** phase of a severe cord injury, spinal shock does produce flaccidity and lost reflexes — `L12` describes it: “Reflexes are lost in shock stage, plantar is lost. Muscle tone: flaccid”. A tumour compresses slowly, so spinal shock does not apply here.\n\n**Bottom line:** find the segment of the reflex, then ask whether the lesion is at it or above it. A C4 tumour is above every limb reflex, so all four limbs go brisk — and a brisk reflex *above* a suspected level is what tells you the lesion is higher than you thought.",
  objective: "A cord lesion above a reflex's segment releases it and makes it brisk; only a lesion at the segment abolishes it.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.1 (the only printed explanation in this topic, and it is truncated)"
},

{
  id: "npqb-nr-8",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "Causes of hyperreflexia:",
  options: [
    "UMNL",
    "Anxiety",
    "Thyrotoxicosis",
    "All"
  ],
  answer: 3,
  explanation: "**All three cause brisk reflexes, but not by the same mechanism — and telling a pathological brisk reflex from a physiological one is the actual clinical skill being tested.**\n\n**1. Upper motor neuron lesion — the structural cause.** `L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY` lists *Hyper reflexia* first among the spinal upper motor neuron manifestations, beside extensor plantar, weakness and clasp-knife spasticity. `L12) hemi,parap&ataxia` repeats it among the positive signs of hemiplegia: “Exaggerated deep tendon reflexes… Absent superficial reflexes… Extensor plantar”. The corticospinal tract normally damps the monosynaptic stretch reflex; interrupt it anywhere from cortex to cord and the arc runs unopposed.\n\n**2. Anxiety and 3. thyrotoxicosis — the physiological causes.** Both raise the gain of the muscle spindle through increased gamma motor neuron drive, so the reflexes are brisk **everywhere, symmetrically, and in isolation**. Thyroid hormone excess also speeds the contraction–relaxation cycle, which is why the classic finding in thyrotoxicosis is a reflex with a **quick relaxation phase** — the mirror image of the famously *slow-relaxing* ankle jerk of hypothyroidism. *(Neither cause is listed in the cached neurology decks; both are taken from general medical knowledge, not from the course material.)*\n\n**How to tell them apart at the bedside** — the discrimination the exam is really after:\n\n| | Upper motor neuron lesion | Anxiety / thyrotoxicosis |\n|---|---|---|\n| **Distribution** | often asymmetrical, or with a clear spinal level | generalised and symmetrical |\n| **Plantar response** | **extensor** (Babinski) | **flexor** — normal |\n| **Tone** | clasp-knife spasticity | normal |\n| **Power** | weak in a pyramidal distribution | normal |\n| **Superficial reflexes** | abdominal reflexes **absent** | present |\n| **Clonus** | may be sustained | absent, or a few unsustained beats |\n| **Other clues** | spinal level, cranial nerve signs | tremor, tachycardia, weight loss, goitre, sweating |\n\n**The single most useful discriminator is the plantar response.** Brisk reflexes with flexor plantars and normal power in an anxious young person are almost always physiological. Brisk reflexes with an extensor plantar are structural until proven otherwise.\n\n**Other causes worth recognising** (*general medical knowledge, not from the course material*): hypocalcaemia, hypomagnesaemia, serotonin syndrome — where hyperreflexia and clonus are diagnostic criteria and are typically worse in the legs — tetanus, and alcohol or benzodiazepine withdrawal.\n\n**Bottom line:** hyperreflexia alone is a weak sign. It becomes a strong one the moment it is asymmetrical, has a level, or is accompanied by an extensor plantar.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "Brisk reflexes come from UMN lesions and from physiological states like anxiety and thyrotoxicosis — the plantar response separates them.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.1"
},

{
  id: "npqb-nr-9",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "Absent abdominal reflex:",
  options: [
    "LMNL",
    "UMNL",
    "Peripheral neuropathy",
    "None of the above"
  ],
  answer: 1,
  explanation: "**Superficial reflexes behave in exactly the opposite way to deep tendon reflexes: an upper motor neuron lesion makes the deep reflexes brisk and makes the superficial reflexes disappear.**\n\nBoth cached decks state it plainly. `L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY`, in the clinical picture of hemiplegia, lists “Exaggerated deep tendon reflexes / **Absent superficial reflexes** / Extensor plantar”. `L12) hemi,parap&ataxia` prints the same triad among the positive signs.\n\n**Why the two kinds of reflex diverge.** A deep tendon reflex is a **monosynaptic** spinal arc that the corticospinal tract *inhibits*; remove the inhibition and it runs hot. The abdominal reflex is a **polysynaptic superficial (cutaneous)** reflex whose arc depends on an intact corticospinal pathway to be completed at all; interrupt the pathway and the response is simply lost. The plantar response is the special case that does both at once — the normal flexor response is lost and replaced by the extensor Babinski.\n\n**How the abdominal reflex is elicited and what it maps.** Stroke each quadrant of the abdominal wall lightly towards the umbilicus; the umbilicus should twitch towards the stimulus. The segments are:\n\n| Quadrant | Segments |\n|---|---|\n| Upper abdominal | T7 – T9 |\n| Lower abdominal | T10 – T12 |\n\nBecause of that segmental map the reflex has real localising value: in a **thoracic cord lesion** the abdominal reflexes are lost *below* the level and preserved above it, which helps place a compressive myelopathy. Loss of the abdominal reflexes is also a classical early sign in **multiple sclerosis**.\n\n**Why the other options are wrong**\n\n- **LMNL** — a lower motor neuron lesion abolishes the reflex only if it destroys that particular segmental arc, T7–T12. A lower motor neuron lesion anywhere else leaves the abdominal reflexes intact. It is not the general answer.\n- **Peripheral neuropathy** — the same objection, and more so. A length-dependent neuropathy attacks the longest fibres first, so it takes the **ankle jerks** away long before it touches the trunk. Abdominal reflexes are typically preserved.\n- **None of the above** — false, since the upper motor neuron answer is correct.\n\n**⚠️ One caveat worth carrying to the ward**, since it causes more false positives than any neurological disease (*general medical knowledge, not from the course material*): the abdominal reflexes are **normally absent** in the obese, in the elderly, in multiparous women with lax abdominal walls, and over abdominal surgical scars. An absent abdominal reflex is only meaningful in the company of other upper motor neuron signs.\n\n**Bottom line:** deep reflexes up, superficial reflexes down, plantar extensor — read the three together, never one alone.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "An upper motor neuron lesion exaggerates deep tendon reflexes and abolishes superficial ones, including the abdominal reflex.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.1"
},

{
  id: "npqb-nr-10",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "Which of the following is characteristic of Broca's aphasia?",
  options: [
    "Difficulty in understanding speech, but the ability to speak fluently",
    "Difficulty in speaking and forming words, but comprehension is relatively intact",
    "Inability to understand or speak any words",
    "Inability to read or write"
  ],
  answer: 1,
  explanation: "**Broca's aphasia is the NON-FLUENT (expressive) aphasia: output is effortful and sparse, while understanding is relatively preserved — and the patient knows it, which is why they are typically frustrated.**\n\n`L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY` and `L12) hemi,parap&ataxia` both list aphasia as a sign of a **cortical** lesion — “Weakness associated with signs of cortical dysfunction (aphasia, seizures)” — but neither cached deck subdivides the aphasias, so the classification below is *general medical knowledge, not taken from the course material*.\n\n**Where it is.** The left inferior frontal gyrus, pars opercularis and triangularis (Brodmann 44/45), supplied by the superior division of the **left middle cerebral artery**. That is immediately in front of the motor strip, which is why Broca's aphasia so often arrives with a **right hemiparesis worst in the face and arm** — the MCA territory `L12` describes: “MCA — contralateral hemiparesis, predominate arm hand and face, with signs of cortical dysfunction (Rt. Neglect, Lt. aphasia)”.\n\n**The classification, which is what MCQs are built from**\n\n| Type | Fluency | Comprehension | Repetition | Where |\n|---|---|---|---|---|\n| **Broca's** (expressive) | **non-fluent**, effortful, agrammatic, telegraphic | **relatively intact** | impaired | left inferior frontal gyrus |\n| **Wernicke's** (receptive) | fluent but empty, paraphasias, neologisms | **impaired** | impaired | left superior temporal gyrus |\n| **Global** | non-fluent | impaired | impaired | large left MCA territory |\n| **Conduction** | fluent | intact | **impaired out of proportion** | arcuate fasciculus |\n| **Transcortical motor** | non-fluent | intact | **spared** | anterior/superior to Broca's |\n| **Transcortical sensory** | fluent | impaired | **spared** | posterior to Wernicke's |\n\n**The two questions that sort any aphasia at the bedside:** is the speech fluent, and is repetition preserved? Fluency splits Broca's from Wernicke's; repetition picks out the transcortical aphasias, which spare it because the perisylvian language loop itself is intact and only its connections to the rest of the cortex are cut.\n\n**Why the other options are wrong**\n\n- **Option a** — “difficulty understanding, but speaks fluently” is the textbook description of **Wernicke's** aphasia. The patient talks readily and at length, but the content is empty and they are typically unaware of the deficit.\n- **Option c** — “inability to understand or speak any words” is **global** aphasia, from a large lesion taking out both areas, usually with a dense hemiplegia.\n- **Option d** — inability to read or write is **alexia with agraphia**, a separate deficit localising to the left angular gyrus. Reading and writing are in fact disturbed in most aphasias, so this is not what *characterises* Broca's.\n\n**Bottom line:** non-fluent plus preserved comprehension equals Broca's, and expect a right face-and-arm weakness with it. A patient who is fluent but incomprehensible and unbothered has the other one.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "Broca's aphasia: non-fluent effortful speech with relatively preserved comprehension, from a left inferior frontal lesion.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.1"
},

{
  id: "npqb-nr-11",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-cranial",
  stem: "During an examination of the olfactory nerve, a patient is asked to sniff a non-irritating odor with each nostril separately. Which of the following conditions is the most common cause of anosmia?",
  options: [
    "Head trauma",
    "Smoking",
    "COVID-19",
    "Meningeal neoplasm"
  ],
  answer: 2,
  explanation: "**The bank keys COVID-19, and it is keyed that way here.**\n\n**⚠️ A discrepancy worth knowing about, recorded rather than argued with.** `L8) Cranial nerves` lists the causes of anosmia but **does not rank them**:\n\n> “There are many potential causes of anosmia including: Mucous blockage of the nose: preventing oduors from reaching the olfactory nerve receptors. **Head trauma**: can result in shearing of the olfactory nerve fibers leading to anosmia. Genetics: some individuals have congenital anosmia. Parkinson's disease: anosmia is an early feature of Parkinson's disease. **COVID-19**: transient anosmia is a common feature of COVID-19.”\n\nSo the lecture puts head trauma and COVID-19 in the same undifferentiated list, and traditional teaching has long given **nasal and sinus disease (mucous blockage) followed by head trauma** as the commonest causes overall. The bank's key reflects the post-2020 position, in which SARS-CoV-2 became by a wide margin the commonest single cause of new-onset smell loss in the general population. **Both readings are defensible; answer as the bank prints it, and do not be surprised if a lecturer says head trauma.**\n\n**Why the two candidate answers behave so differently**\n\n| | COVID-19 | Head trauma |\n|---|---|---|\n| **Mechanism** | infection of the sustentacular support cells of the olfactory epithelium, with inflammation — the neurons themselves are largely spared | **shearing** of the olfactory filaments as they pass through the cribriform plate, when the brain moves against the skull |\n| **Onset** | abrupt, often with little nasal blockage | immediate, after an occipital or frontal blow |\n| **Recovery** | usually within weeks; `L8` calls it **transient** | frequently permanent — the axons are torn |\n| **Company kept** | ageusia, systemic viral illness | possible CSF rhinorrhoea, other cranial nerve injury |\n\n**How the nerve is tested**, which the stem is describing: `L8` says to “block one of the patient's nostrils and place a pungent **non-irritant** odor (such as damp coffee essence or orange seeds) under the open nostril. The test is then repeated on the other nostril.” The reason a non-irritant is required is given on the same slide — “Intensely smelling substances, for example ammonia, may lead to the activation of pain receptors (nociceptors) of the **trigeminal** nerve that are located in the nasal cavity and this can confound olfactory testing.” In other words, ammonia tests V, not I, and a patient with complete anosmia will still react to it. Testing each nostril separately matters because unilateral loss is easily missed.\n\n**Why the other options are wrong**\n\n- **Smoking** — impairs and dulls smell over years, but rarely causes true anosmia, and it is usually reversible on stopping.\n- **Meningeal neoplasm** — an **olfactory groove meningioma** is a classic *examination* answer, and is worth recognising because it can produce the **Foster Kennedy syndrome**: ipsilateral anosmia and optic atrophy with contralateral papilloedema (*not taken from the course material*). But it is rare, so it cannot be the commonest cause.\n\n**Bottom line:** always test with a non-irritant odour, one nostril at a time. Unilateral anosmia, especially with visual failure, should make you think of a subfrontal mass rather than a virus.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "The bank keys COVID-19 as the commonest cause of anosmia; the lecture lists it alongside head trauma and nasal blockage without ranking them.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.2"
},

{
  id: "npqb-nr-12",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-cranial",
  stem: "During an optic nerve examination, the patient is asked to perform a visual fields confrontation test. How should this test be performed?",
  options: [
    "With the patient focusing on a target while the doctor moves their fingers",
    "With the patient covering one eye and checking the fields in all directions",
    "By using a Snellen chart only",
    "By checking the retinal vessels using a fundoscopic exam"
  ],
  answer: 1,
  explanation: "**Confrontation testing compares the patient's field with your own, ONE EYE AT A TIME, quadrant by quadrant.**\n\n`L8) Cranial nerves` sets out the whole optic nerve examination and gives the two rules that matter: “Examine visual fields by **confrontation method**. **Keep examiner's head level with patient's head**.” Your head must be level with theirs because the test works by using your own field as the reference standard — if you are not at the same height and distance, you are comparing against the wrong yardstick.\n\n**The technique in full**\n\n1. Sit facing the patient about an arm's length away, eyes at the same level.\n2. **The patient covers one eye; you close your opposite eye** — patient's right covered, your left closed — so the two of you are testing mirror-image fields.\n3. The patient fixes on your open eye and must keep fixing there.\n4. Bring a moving finger or a small red target in from the periphery **in each of the four quadrants**, midway between the two of you, and ask them to say when it appears.\n5. Repeat for the other eye.\n\n**Why each eye separately, and why quadrants.** Testing both eyes together hides a monocular defect completely, because the good eye covers for the bad one — and a monocular field loss is precisely what localises a lesion **anterior to the chiasm**. Testing by quadrant rather than by half is what lets you pick up a quadrantanopia, which localises far more precisely than a hemianopia does.\n\n**What the pattern tells you**\n\n| Field defect | Where the lesion is |\n|---|---|\n| Monocular loss | optic nerve, **in front of** the chiasm |\n| Bitemporal hemianopia | the **chiasm** — classically a pituitary adenoma |\n| Homonymous hemianopia | **behind** the chiasm, on the side opposite the field loss |\n| Homonymous quadrantanopia | the optic radiation — temporal lobe or parietal lobe |\n\n**Why the other options are wrong**\n\n- **Option a** — describes fixing on a target while fingers move, but omits the two things that make the test work: covering one eye, and sampling all four quadrants. It is the closest distractor and is deliberately incomplete.\n- **Option c** — a **Snellen chart** measures **visual acuity**, not fields. `L8` lists it as a separate step: “Examine Visual acuity: with patient wearing glasses, test each eye separately on eye chart/card using an eye cover.” Note the same principle of covering one eye applies there too.\n- **Option d** — **fundoscopy** examines the optic disc and retina. `L8` gives its purpose: “Offer to examine the back of the eye with an ophthalmoscope to check for swelling of the optic disc (papilledema), which can indicate increased intracranial pressure.” Valuable, but it shows you the structure, not the function.\n\n**Bottom line:** the full cranial nerve II examination is four separate things — acuity, fields, pupillary reflexes and fundoscopy. Confrontation is the fields step, and it is worthless unless each eye is tested alone.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "Confrontation field testing compares each eye separately against the examiner's own field, in all four quadrants.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.2"
},

{
  id: "npqb-nr-13",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "A patient is found to have homonymous hemianopia after a neurological exam, where there is a loss of vision in the left field of both eyes. What is the most likely location of the lesion?",
  options: [
    "Right optic tract",
    "Left optic tract",
    "Right occipital lobe",
    "Left occipital lobe"
  ],
  answer: 0,
  explanation: "**Loss of the LEFT half-field of BOTH eyes is a left homonymous hemianopia, and it always means a lesion on the RIGHT, behind the chiasm.**\n\n**Get the side first, then the site.** After the chiasm, every fibre travelling on the right carries the **left** half of the visual world: the nasal retina of the right eye (which sees the left field and has crossed at the chiasm) and the temporal retina of the left eye (which also sees the left field and has not crossed). Any interruption of the right retrochiasmal pathway therefore blinds the left field of both eyes. Options b and d are eliminated outright — a **left**-sided lesion would give a **right** homonymous hemianopia.\n\n**⚠️ Two of the four options are on the correct side, and both can produce this defect.** The bank keys the right optic tract; a **right occipital lobe** lesion produces a left homonymous hemianopia too, and in practice does so far more often, since occipital infarction in the posterior cerebral artery territory is common while isolated optic tract lesions are rare. The stem gives no feature that separates them, so **this question has two defensible answers.** Keyed as the bank prints it, per the rule that a defective question is noted rather than disputed.\n\n**What would have separated them**, and this is the discrimination examiners actually want:\n\n| | Optic tract | Occipital lobe |\n|---|---|---|\n| **Congruity** | **incongruous** — the two eyes' defects are not identical in shape | **highly congruous** — the defects superimpose exactly |\n| **Macular sparing** | absent | **present** — the occipital pole has a dual blood supply |\n| **Pupillary reflex** | may show a **relative afferent pupillary defect** on the contralateral side | normal — the pupillary fibres left the pathway before this point |\n| **Optic atrophy** | may develop, since the fibres are still retinal ganglion cell axons | none |\n| **Company kept** | nearby structures: hemiparesis, endocrine signs if the lesion is parasellar | often isolated; may have alexia or visual hallucinations |\n\n**The rule of congruity is worth memorising as it stands:** *the further back in the pathway, the more congruous the defect.* Optic tract lesions are the most incongruous; occipital lesions the most congruous.\n\n**Why the remaining two options are wrong**\n\n- **Left optic tract** — would give a **right** homonymous hemianopia. Wrong side.\n- **Left occipital lobe** — same error. Wrong side.\n\n**A note on the whole pathway**, since this bank returns to it repeatedly (*the visual pathway is not set out in any cached neurology deck; this is general medical knowledge, not taken from the course material*): a lesion **in front of** the chiasm gives a **monocular** defect; **at** the chiasm, a **bitemporal** hemianopia; **behind** it, a **homonymous** defect contralateral to the lesion.\n\n**Bottom line:** homonymous means retrochiasmal, and the lesion is on the side opposite the field loss. To go further back than that you need congruity, macular sparing and the pupils.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "A left homonymous hemianopia localises to the right retrochiasmal pathway; congruity and macular sparing then separate tract from occipital lobe.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.2"
},

{
  id: "npqb-nr-14",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "A patient presents with homonymous inferior quadrantanopia, where they lose vision in the lower left quadrant of both eyes. What is the most likely location of the lesion?",
  options: [
    "Right lower optic radiation",
    "Left lower optic radiation",
    "Right occipital lobe",
    "Left temporal lobe"
  ],
  answer: 0,
  explanation: "**Loss of the LOWER LEFT quadrant in both eyes puts the lesion on the RIGHT, in the optic radiation — and the bank keys the right-sided radiation option.**\n\nThe side is settled the same way as for a hemianopia: a left-sided field defect in both eyes means a **right** retrochiasmal lesion. That removes options b and d immediately, since a left-sided lesion would take the right field.\n\n**⚠️ The keyed option names the wrong half of the radiation, and this is recorded rather than corrected.** The optic radiation splits into two bundles, and the rule is **counter-intuitive because the pathway inverts the image**:\n\n| Bundle | Route | Field it carries | Defect when cut |\n|---|---|---|---|\n| **Inferior** fibres (**Meyer's loop**) | sweep forward into the **temporal** lobe | the **SUPERIOR** field | superior quadrantanopia — “pie in the sky” |\n| **Superior** fibres | run back through the **parietal** lobe | the **INFERIOR** field | inferior quadrantanopia — “pie on the floor” |\n\nThe mnemonic is **PITS — Parietal Inferior, Temporal Superior.** So an *inferior* quadrantanopia comes from the **superior (parietal)** radiation, and the bank's phrase “right **lower** optic radiation” describes the wrong bundle. The laterality is right and the structure — the optic radiation — is right; only the half is wrong.\n\n**In fairness to the option, there is a second reading.** If “lower optic radiation” is taken to mean *the fibres serving the lower field* rather than *the anatomically lower bundle*, the option becomes correct. The phrase is genuinely ambiguous. **Answer as printed, and when a lecturer asks, say superior/parietal radiation.** *(No cached neurology deck sets out the optic radiation at all — this comes from general medical knowledge, not from the course material.)*\n\n**Why the other options are wrong**\n\n- **Left lower optic radiation** — wrong side. It would take the **right** lower quadrant.\n- **Right occipital lobe** — correct side, and a restricted lesion of the **cuneus**, above the calcarine sulcus, genuinely can produce an inferior quadrantanopia. But an occipital lesion large enough to be called simply *the occipital lobe* produces a **complete homonymous hemianopia with macular sparing**, not an isolated quadrant. Quadrantanopias are classically localised to the radiations, which is why this is the weaker answer.\n- **Left temporal lobe** — wrong on both counts. It is the wrong side, **and** a temporal lesion cuts Meyer's loop, giving a **superior** quadrantanopia. This option is the deliberate double trap.\n\n**Why it matters clinically.** A quadrantanopia localises far more tightly than a hemianopia and often carries its lobe's other signs with it: a parietal lesion may add contralateral sensory inattention, apraxia or, on the non-dominant side, neglect; a temporal lesion may add memory disturbance or complex partial seizures. Meyer's loop is also the structure at risk in **anterior temporal lobectomy** for epilepsy, which is why the resulting superior quadrantanopia is a recognised consequence of that operation.\n\n**Bottom line:** remember PITS. Temporal lesions take the top of the field, parietal lesions the bottom, and the defect is always on the side opposite the lesion.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "PITS — parietal radiation lesions cause inferior quadrantanopia, temporal (Meyer's loop) lesions cause superior; the defect is contralateral.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.2"
},

{
  id: "npqb-nr-15",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-cranial",
  stem: "The jaw jerk reflex is tested by tapping the chin while the patient's mouth is slightly open. What is the normal response and what does an exaggerated response indicate?",
  options: [
    "Normal response: slight closure of the mouth; exaggerated response: bradykinesia",
    "Normal response: no movement; exaggerated response: pyramidal tract lesion",
    "Normal response: no movement; exaggerated response: pseudobulbar palsy",
    "Normal response: complete closure of the mouth; exaggerated response: Bell's palsy"
  ],
  answer: 2,
  explanation: "**`L8) Cranial nerves` answers this one almost word for word:**\n\n> “Test jaw jerk: – Dr's finger on tip of jaw. – Grip patellar hammer halfway up shaft and tap Dr's finger lightly. – **Usually nothing happens, or just a slight closure.** – **If increased closure, think UMNL, esp pseudobulbar palsy.**”\n\n**The arc is unusual — trigeminal in and trigeminal out.** Tapping the chin stretches the muscles of mastication. The afferent runs in the **mandibular division of V** to the mesencephalic nucleus; the efferent returns in the motor root of **V** to masseter, temporalis and the pterygoids, which `L8` lists as the muscles of mastication. It is the only stretch reflex whose afferent and efferent limbs are the same cranial nerve.\n\n**Why exaggeration means a BILATERAL lesion — the point of the question.** The trigeminal motor nucleus receives corticobulbar input from **both** hemispheres. A lesion on one side is therefore compensated by the other, and the jaw jerk stays normal. Only when the corticobulbar tracts are damaged on **both** sides, above the pons, does the reflex become brisk. Bilateral upper motor neuron damage to the lower cranial nerve nuclei **is** pseudobulbar palsy — so an exaggerated jaw jerk is not merely a sign of it, it is close to being definitive.\n\n`L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY` lists the rest of that syndrome under *Upper Motor Neuron Manifestations — Bulbar symptoms*: “Emotional instability / spastic dysarthria / **Brisky Jaw** / Chocking attacks on fluid intake / Spastic tongue.”\n\n**Pseudobulbar versus bulbar palsy** — the discrimination this sign exists to make:\n\n| | **Pseudobulbar** (bilateral UMN) | **Bulbar** (LMN) |\n|---|---|---|\n| **Jaw jerk** | **exaggerated** | absent or normal |\n| **Tongue** | small, stiff, **spastic**, moves poorly | **wasted**, with fasciculation |\n| **Speech** | spastic, strangled, “hot potato” | nasal, flaccid |\n| **Gag reflex** | present or brisk | absent |\n| **Emotional lability** | present — inappropriate laughing or crying | absent |\n| **Typical causes** | bilateral strokes, MS, motor neuron disease | bulbar motor neuron disease, myasthenia, Guillain-Barré |\n\n**Why the other options are wrong**\n\n- **Option b** — “exaggerated response: pyramidal tract lesion” is the near-miss, and it is worth being precise about. A brisk jaw jerk *is* caused by an upper motor neuron lesion, but a **unilateral** pyramidal lesion will not produce it, for the bilateral-innervation reason above. Option c names the actual clinical entity and matches the lecture's own wording.\n- **Option a** — bradykinesia is an **extrapyramidal** sign of Parkinson's disease and has no relationship to the jaw jerk. It also gets the normal response wrong by implying closure is the expected finding.\n- **Option d** — **Bell's palsy** is a **lower motor neuron facial (VII)** palsy, which `L8` covers at length. It involves neither limb of this reflex, and “complete closure of the mouth” is not the normal response.\n\n**Bottom line:** the jaw jerk is normally absent or barely present. A brisk one is one of the most useful signs in neurology, because it says the damage is bilateral and above the pons.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "The jaw jerk is normally absent or a slight closure; an exaggerated one means bilateral corticobulbar damage — pseudobulbar palsy.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.2"
},

{
  id: "npqb-nr-16",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-cranial",
  stem: "A 60-year-old patient presents with slurred speech, difficulty articulating certain sounds, and atrophy of the tongue. Upon examining, you find that the patient's tongue deviates to the right side upon protrusion. What is the most likely cause?",
  options: [
    "Right hypoglossal nerve lesion",
    "Left hypoglossal nerve lesion",
    "Stroke affecting the ability to articulate"
  ],
  answer: 0,
  explanation: "**The tongue deviates TOWARDS the side of a hypoglossal lesion, so a tongue pointing right means a RIGHT twelfth nerve lesion. The atrophy tells you it is a lower motor neuron lesion.**\n\n`L8) Cranial nerves` states the rule twice:\n\n> “If there is a loss of function on one side (unilateral paralysis) the tongue will **deviate towards the affected side**.”\n>\n> “Paralysis/paresis of one side of the tongue results in ipsilateral curvature of the tongue (apex toward the impaired side of the mouth) i.e., the tongue will move towards the affected side.”\n\n**Why it deviates that way.** Genioglossus is the muscle that protrudes the tongue, and each one pushes the tongue **towards the opposite side**. With both working the forces cancel and the tongue comes straight out. Paralyse the right genioglossus and the intact left one pushes unopposed — driving the tip to the **right**, the weak side. The image to hold is a boat with one oar.\n\n**Atrophy is the second half of the answer.** `L8` says the tongue should be inspected “for signs of lower motor neuron disease, such as **fasciculation and wasting**”, and `L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY` lists “Fasciculations of the tongue / Wasting of the tongue / Weakness of deglutition, chewing and articulation muscles” under *Lower Motor Neuron Manifestations — Bulbar*. Wasting only happens when the **lower** motor neuron is denervated, so this patient's lesion is at or distal to the hypoglossal nucleus in the medulla.\n\n**Upper versus lower motor neuron twelfth nerve lesions** — the trap in the question:\n\n| | **Lower motor neuron** (nucleus or nerve) | **Upper motor neuron** (corticobulbar) |\n|---|---|---|\n| **Tongue deviates** | **towards** the lesion | **away** from the lesion (towards the weak side, which is contralateral) |\n| **Wasting** | present | absent |\n| **Fasciculation** | present | absent |\n| **Associated** | may be bulbar palsy, or a medullary syndrome with crossed hemiparesis | usually with a hemiparesis on the same side as the tongue deviation |\n\nBoth kinds of lesion push the tongue towards the *weak* half. What differs is where the weak half is relative to the lesion — and only wasting and fasciculation tell you which you are looking at. This stem supplies the atrophy, so the lesion is on the same side as the deviation.\n\n**Why the other options are wrong**\n\n- **Left hypoglossal nerve lesion** — would leave the **left** genioglossus weak and drive the tongue to the **left**. This is the reflex answer for anyone who half-remembers that neurological signs are usually contralateral; here they are not.\n- **Stroke affecting the ability to articulate** — a cortical stroke can certainly cause dysarthria, and a unilateral corticobulbar stroke can deviate the tongue, but it would **not** cause tongue atrophy. Wasting takes weeks of denervation and cannot follow an upper motor neuron lesion at all. The atrophy in the stem is what rules this option out.\n\n**A note on this question's shape:** it prints **three options only** — verified against the page at high magnification, not a rendering artefact.\n\n**Bottom line:** tongue points to the lesion when the lesion is lower motor neuron; look for wasting and fasciculation before deciding. In an older patient, wasting with fasciculation of the tongue should raise motor neuron disease.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "The tongue deviates towards a lower motor neuron hypoglossal lesion; wasting and fasciculation confirm the lesion is LMN.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.2"
},

{
  id: "npqb-nr-17",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "According to the muscle strength grading system, which of the following describes Grade 2 muscle strength?",
  options: [
    "No movement at all",
    "Movement with elimination of gravity (parallel to the floor)",
    "Can move against gravity, but not against resistance",
    "Can overcome mild resistance"
  ],
  answer: 1,
  explanation: "**Grade 2 is movement that is only possible once gravity has been taken out of the way — the limb slides along the bed but cannot be lifted off it.**\n\nThe scale is the **MRC (Medical Research Council) grading of muscle power**, and it is built around one pivot: **grade 3 is the point at which the limb can be lifted against gravity.** Everything below 3 is defined by needing gravity removed; everything above 3 is defined by how much extra resistance can be overcome. *(No cached neurology deck prints the MRC scale — this is general medical knowledge, not taken from the course material. `L12) hemi,parap&ataxia` does give the myotomes to test, which is the companion piece of information.)*\n\n| Grade | Meaning | At the bedside |\n|---|---|---|\n| **0** | no contraction at all | nothing visible or palpable |\n| **1** | a flicker or trace of contraction | you can see or feel the muscle twitch, but no joint moves |\n| **2** | **movement with gravity eliminated** | the limb slides sideways across the bed but cannot be raised |\n| **3** | movement **against gravity**, but not against resistance | the limb lifts off the bed and holds, then collapses to any push |\n| **4** | movement against gravity **and** some resistance | often subdivided 4−, 4, 4+ by how much resistance |\n| **5** | normal power | full resistance for that person's build and age |\n\n**How to position the patient for grade 2**, which is what the option's phrase *parallel to the floor* means: gravity is eliminated by testing the movement in a horizontal plane. For hip abduction, that means the patient lying supine sliding the leg sideways across the bed, rather than lying on their side and lifting it.\n\n**Why the other options are wrong**\n\n- **No movement at all** — that is **grade 0**. Note the separate existence of grade 1: a flicker of contraction with no joint movement is *not* grade 0, and missing that distinction under-reports a recovering muscle.\n- **Can move against gravity, but not against resistance** — that is **grade 3**, and it is the answer to question 18 of this same topic. The two questions are deliberately paired, and the pair is the commonest way this scale is examined.\n- **Can overcome mild resistance** — that is **grade 4**, the broadest and most subjective band on the scale, which is exactly why it is often subdivided.\n\n**Why the scale is worth getting exactly right.** Grading power is how weakness is followed over time — a Guillain-Barré patient descending from 4 to 3 to 2 is deteriorating and may need ventilation; a stroke patient climbing back from 2 to 3 has regained the ability to lift the limb, which changes what rehabilitation can attempt. The scale is also non-linear: the step from 4 to 5 covers a far larger range of true strength than the step from 1 to 2.\n\n**Bottom line:** anchor on grade 3. If the limb can be lifted against gravity it is 3 or more; if it can only move with gravity removed it is 2.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "MRC grade 2 is movement only with gravity eliminated; grade 3 is the threshold of moving against gravity.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.3"
},

{
  id: "npqb-nr-18",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "A patient can move their leg against gravity but cannot overcome any additional resistance. What is the most likely muscle strength grade?",
  options: [
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5"
  ],
  answer: 1,
  explanation: "**Movement against gravity but not against resistance is exactly the definition of MRC grade 3.**\n\nThis is the applied half of the pair — question 17 of this topic asks for the definition of grade 2, and this one asks you to recognise grade 3 in a patient. **Grade 3 is the hinge of the whole scale**: below it, gravity has to be removed before anything moves; at and above it, the limb can be lifted and the question becomes how much resistance it can take.\n\n| Grade | Definition |\n|---|---|\n| 0 | no contraction |\n| 1 | flicker or trace of contraction, no joint movement |\n| 2 | movement only with **gravity eliminated** |\n| **3** | **movement against gravity, none against resistance** |\n| 4 | movement against gravity **and** some resistance (often 4−, 4, 4+) |\n| 5 | normal power |\n\n*(The MRC scale is not printed in any cached neurology deck — general medical knowledge, not taken from the course material.)*\n\n**What it looks like in this patient.** Ask them, lying supine, to lift the straight leg off the bed. They can do it and hold it there — that is against gravity, so at least grade 3. Now press down on the shin: the leg gives way immediately to even light pressure. No resistance can be overcome, so it stops at 3.\n\n**Which muscles to test, and at which root**, from the myotome list in `L12) hemi,parap&ataxia`:\n\n| Lower limb movement | Root |\n|---|---|\n| Hip flexion | **L2** |\n| Knee extension | **L3, L4** |\n| Knee flexion | **L4, L5 – S1** |\n| Ankle dorsiflexion | **L5** |\n| Ankle plantar flexion | **S1** |\n\nThe same slide gives the upper limb: C5 deltoid, C6 wrist extensors, C7 elbow extensors, C8 long finger flexors, T1 small hand muscles. `L12` explains why these matter: myotomes are “important in determining level of injury”, in the same way dermatomes are — so grading power muscle by muscle is not bookkeeping, it is how a spinal level is found.\n\n**Why the other options are wrong**\n\n- **Grade 2** — would mean the leg could **not** be lifted off the bed at all, only slid sideways. The stem explicitly says it moves against gravity.\n- **Grade 4** — would require some resistance to be overcome. The stem says none is.\n- **Grade 5** — normal power, which this clearly is not.\n\n**Why it matters.** Grade 3 is the functional watershed. A patient with grade 3 hip flexion can just about advance the leg to walk with support; at grade 2 they cannot lift the foot clear of the floor at all. Documenting the exact grade is also what makes deterioration visible — in a compressive myelopathy or in Guillain-Barré, a fall from 4 to 3 in the legs is the change that prompts urgent imaging or transfer.\n\n**Bottom line:** can it be lifted against gravity? Yes but nothing more — grade 3.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "Power that overcomes gravity but not added resistance is MRC grade 3, the functional watershed of the scale.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.3"
},

{
  id: "npqb-nr-19",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "The biceps reflex is mediated by which of the following nerve roots?",
  options: [
    "C4, C5",
    "C5, C6",
    "C6, C7",
    "C7, C8"
  ],
  answer: 1,
  explanation: "**The biceps jerk is C5 and C6, carried by the musculocutaneous nerve.**\n\nDeep tendon reflexes are the most reliable way of assigning a spinal level at the bedside, because each one tests a fixed pair of segments. The set worth knowing cold:\n\n| Reflex | Roots | Nerve |\n|---|---|---|\n| **Biceps** | **C5, C6** | musculocutaneous |\n| **Brachioradialis (supinator)** | **C5, C6** | radial |\n| **Triceps** | **C7, C8** | radial |\n| **Knee (patellar)** | **L3, L4** | femoral |\n| **Ankle** | **S1, S2** | tibial |\n\nThe counting mnemonic runs **1–2 ankle (S1,2), 3–4 knee (L3,4), 5–6 biceps (C5,6), 7–8 triceps (C7,8)**. *(The reflex root levels are not printed in any cached neurology deck — general medical knowledge, not taken from the course material. `L12) hemi,parap&ataxia` gives the corresponding myotomes, which pair with them: C5 deltoid, C6 wrist extensors, C7 elbow extensors.)*\n\n**How to elicit it.** The arm is semi-flexed and relaxed, your thumb over the biceps tendon in the antecubital fossa; strike your own thumb, not the tendon. Watch and feel for elbow flexion.\n\n**Why the level matters.** A reflex is abolished when the lesion sits **at** its own segment and exaggerated when the lesion sits **above** it — the principle used in question 7 of this topic. That gives a cervical lesion a characteristic signature. `L12` sets it out for the cord: “CERVICAL, ABOVE C5 — UMN signs and sensory loss in all 4 limbs”; “CERVICAL, C5 TO T1 — LMN signs and segmental sensory loss in arms, and UMN signs in legs”.\n\nSo in a C5–C6 radiculopathy or a cord lesion at that level you would expect an **absent biceps jerk** with a **brisk triceps** below it. That mismatch — one reflex lost, the next one down exaggerated — is called an **inverted supinator jerk** when it happens at C5/C6, and it is one of the more useful localising signs in cervical spondylotic myelopathy.\n\n**Why the other options are wrong**\n\n- **C4, C5** — no standard limb reflex is tested at C4. C5 alone supplies deltoid; the biceps reflex needs C6 as well.\n- **C6, C7** — a plausible-looking neighbour that belongs to neither the biceps nor the triceps cleanly. C7 is the elbow **extensor** segment, so this drifts towards the triceps.\n- **C7, C8** — the **triceps** jerk. Testing this pair against the biceps is exactly how a C6/C7 lesion is localised, and confusing the two loses the level.\n\n**Bottom line:** biceps and brachioradialis are both C5–C6; triceps is C7–C8. An absent reflex at one level with a brisk one at the next tells you where the cord or root is damaged.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "The biceps reflex tests C5 and C6; triceps tests C7 and C8, knee L3-L4, ankle S1-S2.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.3"
},

{
  id: "npqb-nr-20",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "A patient has an absent brachioradialis reflex. Which nerve roots should be investigated for potential pathology?",
  options: [
    "C4, C5",
    "C5, C6",
    "C6, C7",
    "L3, L4"
  ],
  answer: 1,
  explanation: "**The brachioradialis reflex — the supinator jerk — is mediated by C5 and C6, through the radial nerve.**\n\nIt shares its segments with the biceps jerk, which is asked separately as question 19 of this topic. That overlap is not redundancy: **the two reflexes test the same roots through different peripheral nerves**, biceps via the musculocutaneous and brachioradialis via the radial. If both are lost, the lesion is at the **root or cord** level. If only one is lost, suspect a **peripheral nerve** problem instead.\n\n| Reflex | Roots | Peripheral nerve |\n|---|---|---|\n| Biceps | C5, C6 | musculocutaneous |\n| **Brachioradialis (supinator)** | **C5, C6** | **radial** |\n| Triceps | C7, C8 | radial |\n| Knee | L3, L4 | femoral |\n| Ankle | S1, S2 | tibial |\n\n*(Reflex root levels are not printed in any cached neurology deck — general medical knowledge, not taken from the course material.)*\n\n**How to elicit it.** With the forearm resting semi-pronated across the abdomen, strike the distal radius about 3–5 cm above the wrist. The normal response is flexion at the elbow and slight supination. Note the name is a historical misnomer — the visible movement is elbow flexion by brachioradialis, not supination.\n\n**What an absent brachioradialis reflex means.** Loss at C5–C6 points to a **cervical radiculopathy** — most often from spondylosis or a lateral disc — or to a cord lesion at that segment. `L12) hemi,parap&ataxia` gives the pattern for the cord: a lesion in the C5-to-T1 band produces “LMN signs and segmental sensory loss in arms, and UMN signs in legs”. So the picture to look for alongside it is an absent reflex in the arm at that level, sensory loss over the lateral forearm and thumb, weakness of shoulder abduction and elbow flexion, and **brisk** reflexes in the legs.\n\n**The inverted supinator jerk**, worth knowing because it is nearly pathognomonic of a C5/C6 cord lesion: tapping the radius produces no elbow flexion but instead makes the **fingers flex**. The reflex at the tapped level is abolished, while the level below it (C8, long finger flexors) is released and over-responds. *(Not taken from the course material.)*\n\n**Why the other options are wrong**\n\n- **C4, C5** — C4 has no standard limb reflex. C5 alone is insufficient.\n- **C6, C7** — drifts towards the triceps territory; C7 is the elbow extensor segment.\n- **L3, L4** — the **knee jerk**, in the lower limb entirely. It is included here as an obvious distractor, but it is a useful reminder that reflex loss must be interpreted against the segment it maps to, not against the limb it happens to be in.\n\n**Bottom line:** brachioradialis is C5–C6, the same as biceps but through a different nerve. Lose both and think root or cord; lose one and think peripheral nerve.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "An absent brachioradialis (supinator) reflex points to C5-C6; it shares its roots with the biceps jerk but travels in the radial nerve.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.3"
},

{
  id: "npqb-nr-21",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "What does a Grade 3 reflex indicate?",
  options: [
    "Absent reflex",
    "Brisk, but not exaggerated",
    "Exaggerated reflex without clonus",
    "Exaggerated reflex with clonus"
  ],
  answer: 2,
  explanation: "**On the reflex grading scale, 3 means the reflex is exaggerated but clonus cannot be elicited. Clonus is what takes it to 4.**\n\n**⚠️ Do not confuse this scale with the power scale.** The bank asks about both in the same topic — questions 17 and 18 grade **muscle power** 0–5, this one grades **reflexes** 0–4. They share numbers and mean entirely different things.\n\n| Grade | Reflex response |\n|---|---|\n| **0** | absent, even with reinforcement |\n| **1+** | hypoactive — present but diminished, or only elicited with reinforcement |\n| **2+** | **normal** |\n| **3+** | **exaggerated / brisker than normal, WITHOUT clonus** |\n| **4+** | exaggerated **WITH clonus** |\n\n*(The reflex grading scale is not printed in any cached neurology deck — general medical knowledge, not taken from the course material. What the decks do give is the clinical meaning: `L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY` lists hyperreflexia among the *Upper Motor Neuron Manifestations*, and `L12) hemi,parap&ataxia` lists “Exaggerated deep tendon reflexes” among the positive signs of hemiplegia.)*\n\n**Note that the normal value is 2+, not 0.** A reflex graded 0 is abnormal, and a reflex graded 2+ is healthy. This trips people who expect zero to mean normal.\n\n**Reinforcement, and why it must be done before calling a reflex absent.** If a reflex appears missing, ask the patient to clench their teeth, or to hook their flexed fingers together and pull apart — the **Jendrassik manoeuvre** — at the instant you strike. This raises the excitability of the anterior horn cell and often brings out a reflex that seemed absent. Only a reflex that stays absent **despite reinforcement** counts as grade 0, which is exactly the wording used in one of the distractors in question 7 of this topic.\n\n**Clonus, and what makes it pathological.** Sustained rhythmic contractions after a sudden stretch — most often tested by briskly dorsiflexing the ankle and holding it. A few unsustained beats can occur in anxious or healthy people; **sustained** clonus is always an upper motor neuron sign.\n\n**Why the other options are wrong**\n\n- **Absent reflex** — that is grade 0.\n- **Brisk, but not exaggerated** — that describes a normal 2+, or the upper end of normal. Grade 3 is a step beyond it.\n- **Exaggerated reflex with clonus** — that is grade **4+**. Clonus is the single feature separating 3 from 4, so this is the distractor the question is built around.\n\n**Reading the result.** A generalised 3+ with flexor plantars and normal power may simply be a physiological state — anxiety or thyrotoxicosis, as question 8 of this topic covers. A 3+ that is **asymmetrical**, or has a **level**, or comes with an **extensor plantar**, is a structural upper motor neuron lesion until proven otherwise.\n\n**Bottom line:** 2+ is normal, 3+ is brisk without clonus, 4+ has clonus. Always reinforce before recording a reflex as absent.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "Reflexes grade 0-4+ with 2+ normal; grade 3+ is exaggerated without clonus, and clonus makes it 4+.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.3"
},

{
  id: "npqb-nr-22",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "A plantar reflex is elicited by striking the outer side of the foot. Which of the following responses is considered normal in adults?",
  options: [
    "Dorsiflexion of the big toe with fanning of other toes",
    "Flexion of the big toe",
    "Extension of the big toe without fanning",
    "Involuntary movement of the toes"
  ],
  answer: 1,
  explanation: "**In an adult the normal plantar response is FLEXION of the big toe. Extension — the Babinski sign — is abnormal and means an upper motor neuron lesion.**\n\nBoth cached decks make the abnormal half explicit. `L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY` lists “**Extensor planter**” among the spinal *Upper Motor Neuron Manifestations*, beside hyperreflexia, weakness and clasp-knife spasticity. `L12) hemi,parap&ataxia` repeats it in the clinical picture of hemiplegia — “Absent superficial reflexes / **Extensor plantar**” — and again when describing the recovery stage after spinal shock: “Reflexes are exaggerated, **plantar extensor**”.\n\n**How to elicit it properly.** Run a blunt point — an orange stick or a key, never anything sharp enough to break skin — firmly along the **lateral** border of the sole from heel towards the little toe, then curving medially across the ball of the foot. The stem's phrase *striking the outer side of the foot* describes that lateral starting line. The response to read is the **first movement of the big toe**.\n\n| Response | Name | Meaning |\n|---|---|---|\n| **Flexion** of the hallux | flexor / **normal** plantar | intact corticospinal tract |\n| **Dorsiflexion** of the hallux, often with **fanning** of the other toes | **Babinski sign**, extensor plantar | **upper motor neuron lesion** |\n| No response | mute plantar | may be normal, or a severe sensory or lower motor neuron lesion |\n\n**Two important exceptions** (*general medical knowledge, not taken from the course material*): an extensor plantar is **normal in infants** up to roughly one year, until the corticospinal tract myelinates — the stem says *in adults* precisely to exclude that. And it can appear **transiently** after a seizure, in deep coma, or during the postictal period without a structural lesion.\n\n**Why the other options are wrong**\n\n- **Dorsiflexion of the big toe with fanning of other toes** — the full **Babinski sign**. This is the response the question is testing you to recognise as *abnormal*, and it is the commonest wrong choice because it is the more famous of the two.\n- **Extension of the big toe without fanning** — still an extensor response, still abnormal. Fanning of the other toes is a supporting feature, not a requirement; the diagnostic movement is the hallux going up.\n- **Involuntary movement of the toes** — a non-specific withdrawal. A **withdrawal response**, where the whole leg pulls away from a ticklish or painful stimulus, is the commonest cause of a falsely equivocal plantar. If it happens, use a blunter stimulus, or elicit the same reflex by an alternative route such as Chaddock's (stroking below the lateral malleolus).\n\n**Why it carries so much weight.** The plantar response is one of the few genuinely objective signs in neurology — the patient cannot fake it or suppress it. It is what separates a physiologically brisk reflex from a pathological one, as question 8 of this topic sets out: brisk reflexes with flexor plantars in an anxious patient are usually benign; brisk reflexes with an extensor plantar are structural.\n\n**Bottom line:** the big toe should go **down**. If it goes up in an adult, there is a corticospinal lesion somewhere between the motor cortex and that segment of the cord.\n\nWritten for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.",
  objective: "The normal adult plantar response is flexion of the big toe; an extensor (Babinski) response signals a corticospinal lesion.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.3"
},

/* ---------------------------------------------------------------------------
   GRADE GAIN - Neurology section, topic 02 "Localization"
   Book pp.4-6 = PDF pp.9-11. 12 questions printed, Q23-Q34.
   EVERY one carries a printed explanation box, so no entry in this batch
   carries the authored marker. Q24, Q27 and Q28 are multi-answer and live in
   cases.neuro.js instead - nine MCQs remain here.
   --------------------------------------------------------------------------- */

{
  id: "npqb-nr-23",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "A lesion in which of the following brain structures would lead to limb paralysis?",
  options: [
    "Prefrontal Cortex",
    "Motor Cortex",
    "Somatosensory Cortex",
    "Visual Cortex"
  ],
  answer: 1,
  explanation: "**The motor cortex is the origin of the corticospinal tract, so a lesion there is what paralyses a limb.**\n\n**⚠️ The bank's key contradicts itself, and this is recorded rather than corrected.** The answer is printed as **“C. Motor Cortex”** — but *Motor Cortex* is option **b**; option **c** is *Somatosensory Cortex*. Checked at 200 dpi on both the question page and the answer page, so neither is a scanning artefact. **The NAME is taken as authoritative here**, for two independent reasons: motor cortex is the only structure listed that can cause paralysis, and the bank's own explanation says the *other* cortices handle “cognitive, sensory, and visual processing”, which is only true if motor is the key. Written as option b.\n\n**The bank's printed explanation, verbatim:**\n\n> The rest of the cortices are responsible for cognitive, sensory, and visual processing.\n\n*Expanded here, since the printed box does not say why:*\n\n`L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY` describes the pathway: “The pyramidal tracts are descending motor pathways originating from the upper motor neurons in the cerebral cortex. They are primarily responsible for voluntary control of skeletal muscles… **Corticospinal tract**: Controls voluntary movements of the **trunk and limbs**.” The same slide adds that it is “a two neuron system consisting of upper motor neurons in the **Primary Motor Cortex** and lower motor neurons in the anterior horn of the spinal cord.”\n\nThe primary motor cortex is the **precentral gyrus** of the frontal lobe, immediately in front of the central sulcus. It is somatotopically mapped — the **motor homunculus** — with the leg over the midline in the interhemispheric fissure, then trunk, arm, hand and face running down the lateral surface. That map is why the *pattern* of weakness localises the lesion: an anterior cerebral artery stroke takes the medial surface and weakens the **leg**, while a middle cerebral artery stroke takes the lateral surface and weakens the **face and arm**. `L12) hemi,parap&ataxia` states exactly that: “MCA — contralateral hemiparesis, predominate arm hand and face”; “ACA — contralateral hemiparesis predominate leg, bowel bladder involvement.”\n\n**Why the other options are wrong**\n\n| Option | What it actually does | What a lesion causes |\n|---|---|---|\n| **Prefrontal cortex** | executive function, planning, judgement, social behaviour | personality change, disinhibition, apathy, poor planning — **no paralysis** |\n| **Somatosensory cortex** | postcentral gyrus, parietal lobe; receives the dorsal column | contralateral loss of fine touch, proprioception, two-point discrimination |\n| **Visual cortex** | occipital lobe, around the calcarine sulcus | contralateral homonymous hemianopia with macular sparing |\n\n**Bottom line:** paralysis means the corticospinal tract, and its cortical origin is the precentral gyrus. Read the *distribution* of the weakness to work out which part of that gyrus, or which artery, is involved.",
  objective: "Limb paralysis localises to the primary motor cortex (precentral gyrus), the origin of the corticospinal tract.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.4 (answer p.5 — the printed key letter C contradicts its own printed name, Motor Cortex, which is option b)"
},

{
  id: "npqb-nr-25",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "Which of the following cortices receive input from the dorsal column of the spinal cord?",
  options: [
    "Prefrontal Cortex",
    "Motor Cortex",
    "Somatosensory Cortex",
    "Visual Cortex"
  ],
  answer: 2,
  explanation: "**The dorsal column carries sensation, so it must end in the sensory cortex — the postcentral gyrus of the parietal lobe.**\n\n**The bank's printed explanation, verbatim:**\n\n> Input from the dorsal column is sensory and is thus processed by the somatosensory cortex.\n\n*Expanded here, since the route matters as much as the destination:*\n\n`L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY` establishes what the column carries: “**Dorsal Columns**: the tracts that carry touch and proprioceptive information. Therefore, light touch, deep pressure, and proprioceptive senses (carried out by muscle spindles and other sensory receptors) are carried through these pathways. **(uncrossed)**”\n\n**The three-neuron pathway**, which is worth holding whole because every dorsal column question in this bank turns on some part of it:\n\n| Neuron | From → to | Where it crosses |\n|---|---|---|\n| **1st order** | receptor → **gracile / cuneate nucleus** in the **medulla**, travelling up the dorsal column on the **same side** | — |\n| **2nd order** | gracile/cuneate nucleus → **VPL nucleus of the thalamus**, as the **medial lemniscus** | **crosses in the medulla** (the sensory decussation) |\n| **3rd order** | thalamus → **postcentral gyrus** (primary somatosensory cortex, parietal lobe) | — |\n\nThe crossing point is the whole reason the dorsal column behaves differently from the spinothalamic tract in a cord lesion. Because it does **not** cross in the cord, a hemisection takes deep sensation on the **same** side — the finding `L1` and `L12) hemi,parap&ataxia` both list under Brown-Séquard: “Loss of proprioception (on the same side) due to interruption of ascending fibers of posterior column.”\n\nThe somatosensory cortex is itself somatotopically mapped — the **sensory homunculus** — lying immediately *behind* the central sulcus, mirroring the motor strip in front of it. That adjacency is why a single middle cerebral artery stroke so often produces weakness and sensory loss in the same limb.\n\n**Why the other options are wrong**\n\n- **Prefrontal cortex** — executive function and behaviour. It receives no direct ascending sensory pathway.\n- **Motor cortex** — the *origin* of the descending corticospinal tract, not a destination for ascending fibres. Choosing this reverses the direction of traffic, which is the trap.\n- **Visual cortex** — occipital lobe, and it receives from the **lateral geniculate nucleus** of the thalamus, not from the spinal cord at all.\n\n**Bottom line:** dorsal column → gracile/cuneate nucleus → cross in the medulla → VPL thalamus → postcentral gyrus. Sensory in, sensory cortex out.",
  objective: "The dorsal column relays through the medulla and VPL thalamus to the somatosensory cortex in the postcentral gyrus.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.4 (answer p.5)"
},

{
  id: "npqb-nr-26",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "All sensory input is relayed in the thalamus except:",
  options: [
    "Olfactory",
    "Visual",
    "Auditory",
    "Touch"
  ],
  answer: 0,
  explanation: "**Smell is the one sense that reaches the cortex without passing through the thalamus first.**\n\n**The bank's printed explanation, verbatim** (its own spelling kept):\n\n> Visual input is relayed in the lateral geniculate nucleus of the the thalamus. Aduitory one is relayed in the medial geniculate nucleus of the thalamus. Touch sensation is relayed in the ventrolateral nucleus of the thalamus, before going to the somatosensory cortex. Hence, a lesion in the thalamus would lead to loss of all sensations except the olfactory.\n\n**⚠️ One error in that box, noted rather than corrected.** It names the **ventrolateral (VL)** nucleus as the relay for touch. VL is a **motor** relay — it receives from the cerebellum and basal ganglia and projects to the motor cortex. Touch and the other body sensations relay in the **ventral posterolateral (VPL)** nucleus, and the face relays in the **ventral posteromedial (VPM)**. The box's conclusion is unaffected; only the nucleus is misnamed. *(The thalamic nuclei are not set out in any cached neurology deck — general medical knowledge, not taken from the course material.)*\n\n**The relays, corrected and complete**\n\n| Sense | Thalamic relay | Cortical destination |\n|---|---|---|\n| **Smell** | **NONE — bypasses the thalamus** | piriform cortex, amygdala, entorhinal cortex, directly |\n| Vision | **lateral** geniculate nucleus (LGN) | occipital, calcarine cortex |\n| Hearing | **medial** geniculate nucleus (MGN) | superior temporal gyrus |\n| Touch, proprioception, pain, temperature (body) | **VPL** | postcentral gyrus |\n| Face sensation | **VPM** | postcentral gyrus |\n| Taste | VPM | insula, frontal operculum |\n\n**Why smell is the exception.** The olfactory receptor neurons sit in the olfactory mucosa — `L8) Cranial nerves` places them “in the olfactory mucosa of the upper parts of the nasal cavity” — and project through the cribriform plate to the olfactory bulb. From the bulb the olfactory tract runs **straight to the primary olfactory (piriform) cortex, the amygdala and the entorhinal cortex**, all of them limbic structures. Only *afterwards* does a branch reach the thalamus (the dorsomedial nucleus) on the way to the orbitofrontal cortex for conscious discrimination of odours.\n\nThat direct limbic connection is the anatomical reason a smell can trigger an intense memory or emotion before it is even identified, and why olfactory hallucinations occur in temporal lobe epilepsy. It is also why anosmia is an early feature of Parkinson's disease and of other neurodegenerative disease — `L8` lists Parkinson's among the causes of anosmia for exactly this reason.\n\n**Bottom line:** the thalamus is the gateway to the cortex for every sense but one. Remember the two geniculates — **L**ateral for **L**ight, **M**edial for **M**usic — and remember that smell has no gate.",
  objective: "Olfaction is the only sensory modality that reaches the cortex without a thalamic relay, projecting directly to limbic structures.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.4 (answer p.5)"
},

{
  id: "npqb-nr-29",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "There are two types of hypertonia. The first is caused by a lesion in .. and is called “spasticity” and the second is caused by a lesion in .. and is termed “rigidity”.",
  options: [
    "Basal ganglia; motor cortex",
    "Motor cortex; basal ganglia",
    "Basal ganglia; cerebellum",
    "Cerebellum; basal ganglia"
  ],
  answer: 1,
  explanation: "**Spasticity is pyramidal and comes from the motor cortex and its tract; rigidity is extrapyramidal and comes from the basal ganglia.**\n\n**The bank's printed explanation, verbatim:**\n\n> Hypertonia refers to increased resistance to passive movement.\n\n**⚠️ That box defines the term but never answers the question** — it does not say why the order is motor cortex then basal ganglia. Noted, and supplied below.\n\n**Both halves are grounded in the cached decks.** `L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY` lists “**Clasp knife spasticity**” among the spinal *Upper Motor Neuron Manifestations*, beside hyperreflexia, extensor plantar and weakness — so spasticity belongs to the pyramidal system. `L3) MOVEMENT DISORDERS` puts **rigidity** among the hypokinetic disorders and names it one of the core clinical criteria of Parkinson's disease — “3-musle stiffness (rigidity)” — and Parkinson's is a basal ganglia disease.\n\n**The discrimination in full — this is what the question is really testing**\n\n| | **Spasticity** | **Rigidity** |\n|---|---|---|\n| **System** | pyramidal (corticospinal) | extrapyramidal (basal ganglia) |\n| **Quality** | **velocity-dependent** — worse the faster you move the limb | **constant throughout the range**, and independent of speed |\n| **Pattern** | **clasp-knife**: strong resistance then sudden give | **lead-pipe**, or **cog-wheel** when a tremor is superimposed |\n| **Distribution** | selective — arm flexors, leg extensors (the antigravity muscles) | uniform — flexors and extensors equally, often axial |\n| **Reflexes** | **exaggerated**, with clonus and an extensor plantar | **normal**, plantar flexor |\n| **Power** | weak, in a pyramidal distribution | **preserved** — slow, not weak |\n| **Company** | hemiplegia, spinal cord lesion | bradykinesia, rest tremor, masked face, micrographia |\n\nThe two most useful bedside separators are **speed dependence** and **the reflexes**. Move the limb slowly and then fast: spasticity changes, rigidity does not. Then check the plantar response — extensor points to the pyramidal system, flexor to the basal ganglia.\n\n**Cog-wheeling** deserves a note: it is rigidity with the patient's own tremor superimposed, felt as a ratchet. `L3` lists rest tremor and rigidity together as core Parkinsonian features, which is why the two so often appear in the same limb.\n\n**Why the other options are wrong**\n\n- **Basal ganglia; motor cortex** — the correct pair in the wrong order. Read which term the stem asks for first.\n- **Basal ganglia; cerebellum** and **Cerebellum; basal ganglia** — both put the **cerebellum** in a hypertonia answer, and the cerebellum causes the opposite. `L12) hemi,parap&ataxia` tabulates cerebellar muscle tone as **hypotonia**.\n\n**Bottom line:** spasticity is fast-dependent, clasp-knife, with brisk reflexes and weakness — pyramidal. Rigidity is uniform, lead-pipe or cog-wheel, with normal reflexes and normal power — extrapyramidal.",
  objective: "Spasticity is pyramidal (velocity-dependent, clasp-knife, brisk reflexes); rigidity is basal ganglia (constant, lead-pipe or cog-wheel, normal reflexes).",
  source: "neuropsychiatry & neurosurgery qb.pdf p.4 (answer p.6)"
},

{
  id: "npqb-nr-30",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-cranial",
  stem: "An oculomotor nerve palsy is likely due to a lesion in the .. and may be associated with .. nerve palsy.",
  options: [
    "Midbrain; trochlear",
    "Pons; facial",
    "Midbrain; facial",
    "Pons; trochlear"
  ],
  answer: 0,
  explanation: "**The oculomotor and trochlear nuclei are the only two cranial nerve nuclei in the midbrain, and they sit close enough that one lesion can take both.**\n\n**The bank's printed explanation, verbatim:**\n\n> The midbrain has two cranial nerves only: the oculomotor and the trochlear, so a lesion in one may also affect the other.\n\n*Expanded here:*\n\n**Where every cranial nerve nucleus lives** — the map that makes all brainstem localisation questions answerable. `L8) Cranial nerves` gives the top of it: “Only the first and the second pair emerge from the cerebrum; the remaining **10 pairs emerge from the brainstem**.”\n\n| Level | Cranial nerves |\n|---|---|\n| Cerebrum | I olfactory, II optic |\n| **Midbrain** | **III oculomotor, IV trochlear** |\n| **Pons** | **V trigeminal, VI abducent, VII facial, VIII vestibulocochlear** |\n| **Medulla** | **IX glossopharyngeal, X vagus, XI accessory, XII hypoglossal** |\n\nWithin the midbrain, the **oculomotor** nucleus is at the level of the **superior** colliculus and the **trochlear** nucleus at the **inferior** colliculus. The trochlear is doubly unusual: it is the **only cranial nerve to exit from the dorsal surface** of the brainstem, and the **only one that is entirely crossed**, so the left nucleus supplies the right superior oblique.\n\n**What a third nerve palsy looks like.** `L8` says the oculomotor nerve “controls most of the eye's movement, constriction of the pupil, and maintains an open eyelid” — so the full palsy is **ptosis**, a **fixed dilated pupil**, and an eye resting **down and out**, unopposed by the intact lateral rectus (VI) and superior oblique (IV). A fourth nerve palsy adds vertical diplopia worst on looking down and in, with a compensatory head tilt away from the affected side.\n\n**The named midbrain syndromes**, which the bank returns to later (*not taken from the course material*):\n\n| Syndrome | Lesion | Findings |\n|---|---|---|\n| **Weber's** | ventral midbrain, cerebral peduncle | ipsilateral III palsy + **contralateral hemiplegia** |\n| **Benedikt's** | tegmentum, red nucleus | ipsilateral III palsy + contralateral tremor/ataxia |\n| **Parinaud's** | dorsal midbrain, pretectum | upgaze palsy, light-near dissociation — classically a pineal tumour |\n\n**Why the other options are wrong**\n\n- **Pons; facial** and **Pons; trochlear** — put the third nerve in the pons. The pons houses V, VI, VII and VIII, not III.\n- **Midbrain; facial** — right level, wrong companion. The facial nucleus is **pontine**, so it cannot be knocked out by a midbrain lesion. This pairing is exactly what question 31 of this topic asks about from the other direction.\n\n**Bottom line:** III and IV are midbrain; V, VI, VII, VIII are pons; IX–XII are medulla. A cranial nerve palsy plus a **crossed** long-tract sign localises to the brainstem at that nerve's level.",
  objective: "III and IV are the only cranial nerve nuclei in the midbrain, so an oculomotor palsy may be accompanied by a trochlear palsy.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.4 (answer p.6)"
},

{
  id: "npqb-nr-31",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-cranial",
  stem: "An abducent nerve palsy is likely due to a lesion in the .. and may be associated with ..",
  options: [
    "Pons; UMNL facial weakness",
    "Pons; LMNL facial weakness",
    "Medulla; UMNL tongue paralysis",
    "Medulla; LMNL tongue paralysis"
  ],
  answer: 1,
  explanation: "**The abducent nucleus is in the pons, and the facial nerve fibres loop directly around it — so a lesion there gives a lateral rectus palsy with a LOWER motor neuron facial weakness.**\n\n**The bank's printed explanation, verbatim:**\n\n> The abducent nerve is located in the pons. Adjacent to the abducent nucleus is the facial nucleus, so a lesion in the abducent is likely to affect the facial nucleus as well. Since the nucleus itself is affected, a LMNL facial weakness will occur. An UMNL facial weakness would only occur if the lesion were in the cortex.\n\n*Expanded here, because the anatomy is more specific than “adjacent”:*\n\nThe motor fibres of the facial nerve leave their nucleus, travel **backwards and loop over the abducent nucleus**, then turn forward again to exit the brainstem. That loop raises a bump in the floor of the fourth ventricle called the **facial colliculus**. The two nerves are therefore not merely neighbours — the seventh is physically wrapped around the sixth, which is why a single small pontine lesion takes both. *(The facial colliculus is not named in the cached decks — general medical knowledge, not taken from the course material.)*\n\n**Why it must be a LOWER motor neuron facial palsy, and why that matters.** `L8) Cranial nerves` draws the distinction sharply:\n\n| | **UMN facial (corticobulbar)** | **LMN facial (nucleus or nerve)** |\n|---|---|---|\n| **Forehead** | **spared** — “Spared upper face, only lower face affected”, because of bilateral innervation | **involved** — “Upper and lower face are affected” |\n| **Emotional movement** | improves the deviation | increases the deviation |\n| **Accompanying hemiparesis** | **same side** as the facial weakness | **opposite** side — “crossed hemiplegia” |\n| **Lesion site** | corticobulbar pathway, above the pons | pons to the facial muscles |\n\nSo the ability to wrinkle the forehead is the single test that separates a stroke above the pons from a lesion in the pons itself, and `L8` explains why: the upper face receives corticobulbar input from **both** hemispheres.\n\n**The named syndrome.** A pontine lesion producing ipsilateral VI and VII palsies with a **contralateral hemiplegia** is **Millard-Gubler syndrome**; adding a conjugate gaze palsy makes it **Foville's**. `L8` describes the same crossed pattern under LMN facial causes: “Pontine lesion (e.g. vascular) — Hemiplegia (UMN) on the contralateral side of facial = crossed hemiplegia. Other cranial nerve may be involved as 6th nerve.”\n\n**Why the other options are wrong**\n\n- **Pons; UMNL facial weakness** — correct level, wrong kind of weakness. A lesion at the **nucleus** is by definition lower motor neuron. This is the closest distractor and the one the printed box addresses directly.\n- **Medulla; UMNL tongue paralysis** and **Medulla; LMNL tongue paralysis** — both put the abducent nerve in the medulla. The medulla carries IX–XII, so a medullary lesion is where you would expect **hypoglossal** involvement, not abducent.\n\n**⚠️ One caution worth carrying.** `L8` notes the abducent nerve “is often the first nerve compressed when there is any rise in intracranial pressure”, which makes an isolated sixth nerve palsy a classic **false localising sign** — it may mean raised pressure anywhere, not a pontine lesion. The pairing with a facial palsy is what makes this one genuinely localising.\n\n**Bottom line:** VI and VII together means pons, and the facial weakness will take the forehead too.",
  objective: "The facial nerve loops around the abducent nucleus in the pons, so a pontine lesion gives a VI palsy with an LMN (forehead-involving) facial weakness.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.4 (answer p.6)"
},

{
  id: "npqb-nr-32",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "A lesion in the dorsal column of the spinal cord is likely to cause:",
  options: [
    "Pure motor deficits",
    "A mixture of major motor and minor sensory deficits",
    "Pure sensory deficits",
    "A mixture of minor motor and major sensory deficits"
  ],
  answer: 2,
  explanation: "**The dorsal column contains no motor fibres at all, so a lesion confined to it produces a purely sensory deficit.**\n\n**The bank's printed explanation, verbatim:**\n\n> The dorsal column constitutes of only two tracts: the gracilis and cuneatus, which carry sensory information from the lower and upper limbs respectively. This column has no motor tracts at all.\n\n*Expanded here:*\n\n`L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY` confirms the content: “**Dorsal Columns**: the tracts that carry touch and proprioceptive information. Therefore, light touch, deep pressure, and proprioceptive senses… are carried through these pathways. **(uncrossed)**”\n\n**The two tracts and their territory**\n\n| Tract | Position | Carries from |\n|---|---|---|\n| **Fasciculus gracilis** | **medial** | **lower** limb and trunk, below T6 |\n| **Fasciculus cuneatus** | **lateral** | **upper** limb, above T6 |\n\nThe mnemonic is that *gracilis* is graceful and slim and sits in the middle; the cuneate wedge is added on outside it as fibres join from higher segments.\n\n**What the deficit actually looks like** — and it is far more disabling than “sensory” suggests:\n\n- **Loss of proprioception and vibration**, tested with a tuning fork and joint position sense.\n- **Sensory ataxia** — a clumsy, unsteady limb that is *not* weak. `L12) hemi,parap&ataxia` describes the gait as “**stamping / high steppage**”, because the patient cannot feel where the foot is and slams it down to generate sensation.\n- **A positive Romberg's test.** `L12`: “If okay with eyes open, but sways or falls with his eyes closed = + Romberg. **Mainly tests deep sensation**.” Vision compensates completely for the lost proprioception, so removing it collapses the patient.\n- **Diminished reflexes**, since the afferent limb of the stretch reflex is interrupted — the `L12` table records reflexes as *diminished* in sensory ataxia.\n- **Pseudoathetosis** — slow writhing of the outstretched fingers when the eyes are closed (*not taken from the course material*).\n\n**Where it happens.** `L12` gives the **posterior cord syndrome**: “Post. Column is first be affected… Proprioception affected, sensory ataxia. Usually good power and sup. sensation”, with causes listed as “Hyperextension injuries with fractures of the vertebrae, Vit B12 deficiency, Fredreich's ataxia”. The same deck lists **B12 deficiency** and syphilis among the diffuse causes of paraparesis — subacute combined degeneration and tabes dorsalis respectively.\n\n**Why the other options are wrong**\n\n- **Pure motor deficits** — that describes the corticospinal tract, which lies in the **lateral** column.\n- **A mixture of major motor and minor sensory** and **a mixture of minor motor and major sensory** — both smuggle in a motor component. There is none. If motor signs are present the lesion has spread outside the dorsal column, and you are looking at something like subacute combined degeneration, which takes the **corticospinal tracts as well** and gives brisk knee jerks with absent ankle jerks and an extensor plantar.\n\n**Bottom line:** dorsal column equals deep sensation only. Weakness with it means the lesion is bigger than the column.",
  objective: "A lesion confined to the dorsal column causes pure sensory loss — proprioception and vibration — with sensory ataxia and a positive Romberg.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.4 (answer p.6)"
},

{
  id: "npqb-nr-33",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "A lesion in the lateral column of the spinal cord is likely to cause:",
  options: [
    "Pure motor deficits",
    "A mixture of motor and deep sensory deficits",
    "Pure sensory deficits",
    "A mixture of motor and superficial sensory deficits"
  ],
  answer: 3,
  explanation: "**The lateral column carries two tracts of different kinds — the lateral corticospinal tract (motor) and the lateral spinothalamic tract (pain and temperature) — so a lesion there gives motor loss plus SUPERFICIAL sensory loss.**\n\n**The bank's printed explanation, verbatim:**\n\n> The lateral column consists of the corticospinal tract and the spinothalamic tract. The corticospinal tract carries motor information from the motor cortex, while the spinothalamic tract carries pain and temperature (superficial sensory information) from the skin to the somatosensory cortex. So a lesion in the lateral column will lead to both motor and superficial sensory deficits.\n\n*Expanded here, because the word “superficial” is doing all the work in this question:*\n\nThe bank divides sensation into **deep** and **superficial**, and the whole of this topic's spinal cord questions turn on that split:\n\n| | **Deep sensation** | **Superficial sensation** |\n|---|---|---|\n| **Modalities** | proprioception, vibration, deep pressure, fine touch | **pain, temperature**, crude touch |\n| **Tract** | dorsal columns — gracilis, cuneatus | **spinothalamic** |\n| **Column** | **dorsal (posterior)** | **lateral** and anterior |\n| **Crosses** | in the **medulla** | **in the cord**, within 1–2 segments of entry |\n\n`L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY` gives both halves: the dorsal columns carry “light touch, deep pressure, and proprioceptive senses… **(uncrossed)**”, while the “**Spinothalamic tracts**: carry Pain and temperature (the free nerve endings in skin) sensory information… **(crossed tract)**”.\n\n**The clinical consequence of the two occupying one column.** Because the corticospinal and spinothalamic tracts run side by side in the lateral column, and because the spinothalamic has **already crossed** while the corticospinal has **not yet**, a one-sided lateral column lesion produces a split picture: weakness on the **same** side, pain and temperature loss on the **opposite** side. That is half of Brown-Séquard syndrome, which question 34 of this topic asks about directly.\n\n**Lamination matters too** (*not taken from the course material*): within the spinothalamic tract the **sacral fibres lie most laterally** and the cervical most medially. So an **extramedullary** compression pressing from outside takes the sacral segments first and produces a sensory level that ascends as it grows, while an **intramedullary** lesion expanding from the centre spares the sacral fibres — **sacral sparing**, the classic sign of a cord tumour or syringomyelia.\n\n**Why the other options are wrong**\n\n- **Pure motor deficits** — would require the column to hold only the corticospinal tract. It holds the spinothalamic too.\n- **A mixture of motor and deep sensory deficits** — the deliberate trap. Deep sensation is in the **dorsal** column, not the lateral. This option would describe a lesion taking both the posterior and lateral columns.\n- **Pure sensory deficits** — that is the **dorsal** column answer, asked as question 32 of this topic.\n\n**Bottom line:** lateral column equals motor plus pain and temperature. If the sensory loss is proprioceptive rather than painful, the lesion is posterior, not lateral.",
  objective: "The lateral column carries the corticospinal and lateral spinothalamic tracts, so a lesion gives motor loss plus pain and temperature loss.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.5 (answer p.6)"
},

{
  id: "npqb-nr-34",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  stem: "A lesion on one side of the spinal cord will cause ipsilateral .. deficits and contralateral .. deficits:",
  options: [
    "Deep sensory + motor; superficial sensory",
    "Superficial sensory + motor; deep",
    "Deep and superficial sensory; motor"
  ],
  answer: 0,
  explanation: "**This is Brown-Séquard syndrome, and the answer follows entirely from WHERE each tract crosses.**\n\n**The bank's printed explanation, verbatim** (it ends without a full stop, as printed):\n\n> The corticospinal tract moves from the motor cortex, crosses in the medulla, then reaches the spinal cord. The fasciculus gracilis and cuneatus travel from the spinal cord, crosses in the medulla, then reaches the somatosensory cortex. Since both these tracts cross at the level of the medulla, rather than the spinal cord, a lesion on one side of the spinal cord will cause motor and deep sensory deficits on the same side of the lesion. Conversely, the spinothalamic tract crosses in the spinal cord (two levels above the level of its entry), so a lesion on one side of the spinal cord will affect the spinothalamic tract (which have crossed), so there will be superficial sensory deficits opposite to the side of spinal cord lesion\n\n*Expanded here:*\n\n**The single rule that generates the whole syndrome:** a tract that has **already crossed** below the lesion carries the *opposite* side's information, so cutting it produces a **contralateral** deficit. A tract that has **not yet crossed** carries its own side's information, so cutting it produces an **ipsilateral** deficit.\n\n| Tract | Crosses at | Deficit side |\n|---|---|---|\n| **Corticospinal** (motor) | the **medulla** — `L1` puts 80 % at the pyramidal decussation | **ipsilateral** |\n| **Dorsal column** (deep sensation) | the **medulla** — sensory decussation | **ipsilateral** |\n| **Spinothalamic** (pain, temperature) | **in the cord**, 1–2 segments above entry | **contralateral** |\n\n`L12) hemi,parap&ataxia` and `L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY` both print the syndrome in the same four parts:\n\n> 1-Segmental LMN signs and sensory changes **at the level of lesion** due to damage of the roots and anterior horn cells at the level of lesion.\n> 2-Loss of pain, temp on the **contralateral** side due to interruption of crossed spino-thalamic tract.\n> 3-Loss of proprioception (on the **same** side) due to interruption of ascending fibers of posterior column.\n> 4-Spastic weakness (on the **same** side) due to interruption of descending cortico spinal tract\n\nNote part 1, which the bank's own box omits: **at the level of the lesion itself** there is a band of lower motor neuron signs and complete sensory loss, because the roots and anterior horn cells at that segment are destroyed. Below the level the picture becomes the dissociated one above. `L12` adds that light touch is often **preserved** on both sides, “due to redundant ipsilateral and contralateral paths.”\n\n**⚠️ The one- to two-segment offset is a real clinical trap.** Because spinothalamic fibres ascend a segment or two before crossing, the contralateral pain and temperature level starts **below** the true level of the lesion. Localising from that level alone under-estimates where the cord is damaged.\n\n**Causes.** `L12` lists penetrating injury — “stab wound, gunshot wounds” — fractures of the lateral mass of a vertebra, metastases and lumbar disc prolapse. It also notes that Brown-Séquard is **not** a cause of paraplegia, since only one side is involved.\n\n**Why the other options are wrong**\n\n- **Superficial sensory + motor; deep** — swaps the two sensory modalities. It would require the spinothalamic tract to be uncrossed and the dorsal column crossed, which is the reverse of the anatomy.\n- **Deep and superficial sensory; motor** — puts the **motor** deficit on the opposite side. The corticospinal tract crossed back in the medulla, well above any cord lesion, so weakness is always ipsilateral in a cord hemisection.\n\n**Bottom line:** weakness and proprioception go with the lesion; pain and temperature go to the other side, starting a segment or two lower. Dissociated sensory loss like this is nearly always spinal.",
  objective: "Brown-Séquard: ipsilateral weakness and deep sensory loss (tracts cross in the medulla), contralateral pain and temperature loss (crosses in the cord).",
  source: "neuropsychiatry & neurosurgery qb.pdf p.5 (answer p.6)"
}

];
