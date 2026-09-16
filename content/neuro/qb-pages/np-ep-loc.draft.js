/*
 * "Neuro endpoint.pdf" — Chapter 1 "Localization" (npep-loc-1..17)
 * Schema-ready, splice-ready. Source: content/neuro/qb-pages/np-ep-loc.array.js (raw pass).
 * Bank 'endpoint' — distinct from the live 'gradegain' house bank already in questions.neuro.js.
 * Count is 17, not the provisionally-expected 18 — see np-ep-loc.array.js header for why.
 * p.52 confirmed as the "Stroke" chapter title slide — Q17 (p.50-51) is the last Localization item.
 */

var NP_EP_LOC_DRAFT = [

{ id:'npep-loc-1', bank:'endpoint', module:'neuropsych', chapter:'nr-cranial',
  stem:'Diplopia with inward deviation of the left eye indicates a lesion of:',
  options:['Left abducent palsy', 'Left oculomotor palsy', 'Right abducent palsy', 'Right facial palsy'],
  answer:0,
  explanation:'Left abducent palsy is correct. The abducent nerve (CN VI) supplies the lateral rectus, the only muscle that abducts (turns outward) the eye. When it is paralysed, the unopposed medial rectus (CN III) pulls the eye inward at rest, producing an inward-deviated (esotropic) eye and diplopia that worsens on attempted gaze toward the affected side. Because the inward deviation is in the LEFT eye, the lesion is on the left — a right abducent palsy would deviate the right eye, not the left, and an oculomotor or facial palsy does not produce this pattern of an intact medial rectus overpowering a weak lateral rectus. Written for this bank — the endpoint file prints no explanation here.',
  objective:'Localize inward eye deviation (esotropia) with diplopia to an ipsilateral abducent (CN VI) nerve palsy.',
  source:'Neuro endpoint.pdf, Localization, Q1, p.16 (answer p.17)'
},

{ id:'npep-loc-2', bank:'endpoint', module:'neuropsych', chapter:'nr-hemi',
  stem:'A patient presents with left hemiplegia and right lower motor facial palsy. What is the most likely site of lesion?',
  options:['Cerebral cortex', 'Internal capsule', 'Brain stem', 'Cervical cord'],
  answer:2,
  explanation:'Brain stem is correct. The facial nucleus lies in the pons; a pontine lesion destroys the facial nucleus on its own side, giving a lower motor neuron facial palsy on that same side, while also damaging the corticospinal tract before it decussates lower in the medulla, giving hemiplegia on the opposite side. Face and limb signs therefore fall on opposite sides of the body — a crossed brainstem syndrome — which is why a right-sided LMN facial palsy paired with a left hemiplegia localises to the brain stem rather than the cortex, internal capsule or cord, none of which can put a cranial-nerve sign on one side and a limb sign on the other. This book applies the same crossed-pattern reasoning in Q4, Q9 and Q10 of this chapter. Written for this bank — the endpoint file prints no explanation here.',
  objective:'Recognize a crossed (contralateral) LMN facial palsy + hemiplegia pattern as localizing to the brainstem.',
  source:'Neuro endpoint.pdf, Localization, Q2, p.18 (answer p.19)'
},

{ id:'npep-loc-3', bank:'endpoint', module:'neuropsych', chapter:'nr-cranial',
  stem:'Nasal tone of voice is commonly found in patients with affection of the:',
  options:['Trigeminal nerve', 'Facial nerve', 'Vagus nerve', 'Hypoglossal nerve'],
  answer:2,
  explanation:'Vagus nerve is correct. The vagus nerve (CN X) supplies the muscles of the soft palate and pharynx. A vagal or palatal lesion weakens palatal closure, so air escapes through the nose during speech instead of being directed through the mouth, producing a nasal (rhinolalia) quality of voice — typically with palatal droop and a reduced gag reflex on the affected side. The trigeminal, facial and hypoglossal nerves govern jaw/facial sensation-motor function, facial expression, and tongue movement respectively, none of which produce nasal speech. Written for this bank — the endpoint file prints no explanation here.',
  objective:'Attribute nasal-toned (rhinolalic) speech to vagus nerve/palatal dysfunction.',
  source:'Neuro endpoint.pdf, Localization, Q3, p.20 (answer p.21)'
},

{ id:'npep-loc-4', bank:'endpoint', module:'neuropsych', chapter:'nr-hemi',
  stem:'What is the most common site of lesion in patient presenting with right LMN lesion facial palsy and left sided hemiplegia?',
  options:['cortex', 'internal capsule', 'midbrain', 'Pons'],
  answer:3,
  explanation:'Pons is correct. This is the same crossed brainstem pattern the book uses in Q2, Q9 and Q10: the facial nucleus in the pons is destroyed on the same side as the facial palsy (right, LMN pattern), while the still-uncrossed corticospinal tract passing through the pons is damaged as well, producing hemiplegia on the opposite (left) side once those fibres would have crossed lower down. The side of the facial palsy therefore names the side of the pontine lesion. Written for this bank — the endpoint file prints no explanation here.',
  objective:'Localize a right LMN facial palsy + left hemiplegia crossed syndrome to the pons.',
  source:'Neuro endpoint.pdf, Localization, Q4, p.22 (answer p.23)'
},

{ id:'npep-loc-5', bank:'endpoint', module:'neuropsych', chapter:'nr-intro',
  stem:'Which brain lesion can cause speech disturbance?',
  options:['bilateral upper motor neuron lesions above the Pons', 'unilateral cortical lesion on the dominant hemisphere', 'bilateral subcortical lesion', 'unilateral upper motor neuron lesions above the Pons'],
  answer:1,
  explanation:'Speech is primarily controlled by Broca’s and Wernicke’s areas, located in the dominant (usually left) cerebral hemisphere. A lesion here can lead to aphasia and speech disturbances.',
  objective:'Localize aphasia (language/speech disturbance) to a unilateral dominant-hemisphere cortical lesion.',
  source:'Neuro endpoint.pdf, Localization, Q5, p.24 (answer p.27; pp.25-26 print two supplementary reference tables — Aphasia/Dysarthria/Dysphonia, and Bulbar vs Pseudobulbar palsy — not separate questions)'
},

{ id:'npep-loc-6', bank:'endpoint', module:'neuropsych', chapter:'nr-hemi',
  stem:'A pure motor stroke is most likely in:',
  options:['Internal capsule', 'Cerebellum', 'Caudate', 'Putamen'],
  answer:0,
  explanation:'The internal capsule is a key pathway for motor fibers, including the corticospinal tract. Damage to the internal capsule can result in pure motor strokes, characterized by weakness or paralysis of specific muscles or muscle groups on the opposite side of the body.',
  objective:'Localize a pure motor lacunar stroke to the internal capsule.',
  source:'Neuro endpoint.pdf, Localization, Q6, p.28 (answer p.29)'
},

{ id:'npep-loc-7', bank:'endpoint', module:'neuropsych', chapter:'nr-cranial',
  stem:'Which cranial nerve disturbance is responsible for vertigo?',
  options:['facial', 'optic', 'Vestibulocochlear', 'trigeminal'],
  answer:2,
  explanation:'The vestibulocochlear nerve (cranial nerve VIII) controls balance and hearing. Damage or dysfunction in its vestibular component can cause vertigo, characterized by dizziness and a spinning sensation.',
  objective:'Attribute vertigo to vestibulocochlear (CN VIII) nerve dysfunction.',
  source:'Neuro endpoint.pdf, Localization, Q7, p.30 (answer p.31)'
},

{ id:'npep-loc-8', bank:'endpoint', module:'neuropsych', chapter:'nr-hemi',
  stem:'A 65-year-old female patient presents with acute onset of paraparesis and bilateral facial weakness. Deep abdominal reflexes were all diminished, while other reflexes were preserved, and plantar reflexes were flexor. No sensory level was detected on the trunk. Where is the probable location of the inducing lesion?',
  options:['Brainstem', 'Spinal cord', 'Peripheral nerves', 'Cerebral cortex'],
  answer:2,
  explanation:'NB: Planter reflexes were flexors = ( Planter reflexes are negative) , so we exclude any upper motor neuron lesions, so the correct answer is peripheral nerves ( lower motor neuron)',
  objective:'Exclude an upper motor neuron lesion by a flexor plantar and localize acute paraparesis + bilateral facial weakness to peripheral nerves (a Guillain-Barre-type pattern).',
  source:'Neuro endpoint.pdf, Localization, Q8, p.32 (answer p.33)'
},

{ id:'npep-loc-9', bank:'endpoint', module:'neuropsych', chapter:'nr-hemi',
  stem:'A 49-year-old patient presents with acute onset of left hemiplegia and right-side facial weakness, involving the upper and lower facial movements. What is the most likely site of brain infarction in this patient?',
  options:['Right pontine', 'Right midbrain', 'Left midbrain', 'Left pontine'],
  answer:0,
  explanation:'Right pontine is correct. Weakness of the facial movements affecting BOTH the upper and lower face marks a lower motor neuron (LMN) facial palsy — an upper motor neuron lesion would spare the forehead. An LMN facial palsy opposite to a hemiplegia is the crossed pontine pattern this book also uses in Q2, Q4 and Q10: the facial nucleus is destroyed on the same side as the facial weakness (here, right), while the corticospinal tract is damaged before it decussates lower down, producing the contralateral (left) hemiplegia. The side of the facial weakness therefore names the side of the lesion — right pontine. Written for this bank — the endpoint file prints no explanation here.',
  objective:'Use an LMN (upper+lower face) facial palsy contralateral to a hemiplegia to name the side of a pontine lesion.',
  source:'Neuro endpoint.pdf, Localization, Q9, p.34 (answer p.35)'
},

{ id:'npep-loc-10', bank:'endpoint', module:'neuropsych', chapter:'nr-hemi',
  stem:'Crossed hemiplegia with abducent nerve palsy suggests a lesion in which area?',
  options:['Brainstem tumor', 'Cerebral cortex', 'Internal capsule', 'Basal ganglia'],
  answer:0,
  explanation:'Crossed hemiplegia with cranial nerve palsy (e.g., abducent nerve) suggests a lesion in the brainstem, where cranial nerve nuclei and motor tracts are close together.',
  objective:'Localize crossed hemiplegia with an abducent nerve palsy to the brainstem.',
  source:'Neuro endpoint.pdf, Localization, Q10, p.36 (answer p.37)'
},

{ id:'npep-loc-11', bank:'endpoint', module:'neuropsych', chapter:'nr-hemi',
  stem:'A patient has weakness in the right upper and lower limbs and a cerebellar tumor. Where is the lesion most likely located?',
  options:['Left cerebellar hemisphere', 'Right cerebellar hemisphere', 'Left motor cortex', 'Right basal ganglia'],
  answer:2,
  explanation:'Left motor cortex is printed as the key. A cerebellar lesion on its own produces ipsilateral ataxia/incoordination, not contralateral limb weakness — so the cerebellar tumor named in the stem cannot itself be the source of the right-sided upper and lower limb weakness described. Read this way, the stem describes two separate findings in the same patient (a cerebellar tumor, plus a new right-sided weakness), and the question asks where the WEAKNESS comes from, not where the tumor is: a corticospinal (motor cortex) lesion on the left produces contralateral (right-sided) upper and lower limb weakness, which fits. Per the standing rule the printed key is transcribed and kept as-is; the wording is unusual enough to flag here rather than silently pass over. Written for this bank — the endpoint file prints no explanation here.',
  objective:'Distinguish that a cerebellar lesion causes ipsilateral, not contralateral, limb signs — contralateral limb weakness in this vignette must come from a separate corticospinal (motor cortex) lesion.',
  source:'Neuro endpoint.pdf, Localization, Q11, p.38 (answer p.39)'
},

{ id:'npep-loc-12', bank:'endpoint', module:'neuropsych', chapter:'nr-hemi',
  stem:'A patient presents with hemiplegia, hemisensory loss, and upper motor neuron-type facial weakness. What is the most likely site of the lesion?',
  options:['Midbrain', 'Brainstem', 'Internal capsule', 'Cerebral cortex'],
  answer:2,
  explanation:'The internal capsule is a common site for lacunar strokes causing contralateral hemiplegia, hemisensory loss, and UMN facial weakness. It carries tightly packed motor and sensory fibers.',
  objective:'Localize hemiplegia + hemisensory loss + UMN facial weakness (a dense capsular pattern) to the internal capsule.',
  source:'Neuro endpoint.pdf, Localization, Q12, p.40 (answer p.41)'
},

{ id:'npep-loc-13', bank:'endpoint', module:'neuropsych', chapter:'nr-hemi',
  stem:'A patient has left-sided hemiplegia and loss of superficial sensation on the right side of the body. What is the most likely location of the lesion?',
  options:['Cerebral cortex', 'Internal capsule', 'Brainstem', 'Cervical spinal cord'],
  answer:2,
  explanation:'Brainstem is printed as the key. A single lateral brainstem lesion can produce a crossed motor/sensory picture because the corticospinal tract (which has not yet decussated at pontine/medullary level, and will serve the contralateral limbs once it does) and the spinothalamic tract (which has already crossed within a couple of segments of entering the cord) can be damaged together on one side while carrying signals for opposite sides of the body — motor loss on one side, pain/temperature loss on the other.\n\n⚠️ Cross-bank contradiction, recorded rather than corrected: the live house-bank question npqb-nr-92 (chapter nr-hemi, questions.neuro.js) prints this same clinical stem near-verbatim — left-sided hemiplegia with loss of superficial sensation on the right side, same four options (Cerebral cortex / Internal capsule / Brainstem / Cervical cord) — and keys Cervical cord instead, on the reasoning that full-limb (arm and leg) motor loss on one side with sensory loss on the other requires a spinal cord hemisection (Brown-Séquard pattern), since crossed brainstem sensorimotor lesions of this kind more typically also carry a cranial-nerve sign that this vignette lacks. Both keys are transcribed and kept exactly as each source prints them; this is a defective/contradictory key pair across banks, not a fold candidate. Written for this bank — the endpoint file prints no explanation here.',
  objective:'Localize a crossed hemiplegia + contralateral superficial sensory loss pattern to the brainstem, per this book’s printed key (flag: the house bank keys the same vignette to the cervical cord instead).',
  source:'Neuro endpoint.pdf, Localization, Q13, p.42 (answer p.43)'
},

{ id:'npep-loc-14', bank:'endpoint', module:'neuropsych', chapter:'nr-cranial',
  stem:'A patient presents with lower motor neuron facial palsy and ipsilateral cerebellar signs. Where is the lesion most likely located?',
  options:['Pons', 'Medulla', 'Midbrain', 'Cortex'],
  answer:0,
  explanation:'The pons houses the facial nerve nucleus and is adjacent to cerebellar pathways. A lesion here can cause LMN facial palsy and ipsilateral cerebellar signs like ataxia.',
  objective:'Localize an LMN facial palsy with ipsilateral cerebellar signs to the pons (cerebellopontine/pontine region).',
  source:'Neuro endpoint.pdf, Localization, Q14, p.44 (answer p.45)'
},

{ id:'npep-loc-15', bank:'endpoint', module:'neuropsych', chapter:'nr-hemi',
  stem:'Bilateral facial weakness with paraplegia, decreased deep tendon reflexes, but normal abdominal and plantar reflexes suggests a lesion in the:',
  options:['Cerebral cortex', 'Spinal cord', 'Peripheral nerves', 'Neuromuscular junction'],
  answer:2,
  explanation:'This pattern suggests a peripheral neuropathy such as Guillain-Barré syndrome. The preservation of abdominal and plantar reflexes rules out central causes.',
  objective:'Recognize bilateral facial weakness + paraplegia + hyporeflexia with preserved abdominal/plantar reflexes as peripheral nerve disease (Guillain-Barre pattern).',
  source:'Neuro endpoint.pdf, Localization, Q15, p.46 (answer p.47)'
},

{ id:'npep-loc-16', bank:'endpoint', module:'neuropsych', chapter:'nr-intro',
  stem:'Aphasia is most likely to occur when the lesion affects which of the following areas?',
  options:['Internal capsule', 'Right cortical hemisphere', 'Left cortical hemisphere', 'Brainstem'],
  answer:2,
  explanation:'Language centers, including Broca’s and Wernicke’s areas, are located in the dominant (usually left) hemisphere; damage here leads to aphasia.',
  objective:'Localize aphasia to the (dominant) left cortical hemisphere.',
  source:'Neuro endpoint.pdf, Localization, Q16, p.48 (answer p.49)'
},

{ id:'npep-loc-17', bank:'endpoint', module:'neuropsych', chapter:'nr-intro',
  stem:'A right occipital cortex lesion typically causes which of the following?',
  options:['Right visual field loss', 'Left visual field loss', 'Total blindness', 'Diplopia'],
  answer:1,
  explanation:'A right occipital cortex lesion results in a contralateral (left) homonymous hemianopia due to disruption of the visual processing pathways.',
  objective:'Localize a contralateral homonymous visual field defect to the occipital cortex.',
  source:'Neuro endpoint.pdf, Localization, Q17, p.50 (answer p.51)'
}

];
