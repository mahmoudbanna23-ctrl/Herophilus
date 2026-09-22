/*
 * "Neuro endpoint.pdf" - Cranial nerve disorders: 14 rows built by tools/bank-harness/npep-build.mjs.
 * OmniRoute gateway down for this batch; independent key read done by a Claude subagent against the
 * answer-page images instead of Gemini (2026-09-22) - 14/14 match, 0 mismatch.
 * Fold pass (2026-09-22): 6 of 14 were duplicates and dropped from this file -
 *   npep-cranial-1  -> already live as npep-loc-1 (same book, Localization Q1) - source note added there.
 *   npep-cranial-5  -> folded into npqb-nr-274 (gradegain, fuller GBS explanation) via alsoIn.
 *   npep-cranial-8  -> folded into npqb-nr-64 (gradegain, fuller UMN/LMN table) via alsoIn.
 *   npep-cranial-9  -> folded into npqb-nr-62 (gradegain, fuller anatomy) via alsoIn.
 *   npep-cranial-10 -> folded into npqb-nr-63 (gradegain, fuller TN treatment) via alsoIn.
 *   npep-cranial-11 -> folded into npqb-nr-68 (gradegain, fuller LMN-site table) via alsoIn.
 * The 8 rows below are the novel remainder, renumbered to keep original printed order.
 */

{ id:'npep-cranial-2', bank:'endpoint', module:'neuropsych', chapter:'nr-cranial',
  stem:'What are the results of examination of the right corneal reflex in a patient with left upper motor facial palsy ?',
  options:['No blink in either eye', 'Blink in both eyes', 'Blink on the right side only', 'Blink on the left side only'],
  answer:1,
  explanation:'The keyed option is Blink in both eyes. The corneal reflex has an afferent limb through the ophthalmic division of the trigeminal nerve and an efferent limb through the facial nerve to orbicularis oculi (not taken from the course material). Stimulation of one cornea normally produces both a direct blink in the stimulated eye and a consensual blink in the opposite eye (not taken from the course material).\n\nA left upper motor facial palsy affects voluntary facial movements predominantly in the lower face, while the upper facial muscles receive bilateral cortical input and are relatively spared (not taken from the course material). Therefore, it does not abolish the facial motor output required for blinking. With the right cornea examined, the afferent pathway is intact and the brainstem reflex connections activate both facial nuclei sufficiently for bilateral blinking (not taken from the course material).\n\nOption A, No blink in either eye, would suggest failure of the afferent corneal pathway or a major brainstem reflex disturbance rather than an isolated left upper motor facial palsy (not taken from the course material). Option C, Blink on the right side only, would be expected with a left lower motor facial palsy affecting the left facial efferent limb, not an upper motor lesion (not taken from the course material). Option D, Blink on the left side only, would be incompatible with intact right facial motor function during right corneal stimulation (not taken from the course material). Written for this bank — the endpoint file prints no explanation here.',
  objective:'Tests the effect of left upper motor facial palsy on the right corneal reflex.',
  source:'Neuro endpoint.pdf, Cranial nerve disorders, Q2, p.652 (answer p.653)'
},

{ id:'npep-cranial-3', bank:'endpoint', module:'neuropsych', chapter:'nr-cranial',
  stem:'A 64-year-old female patient was presenting with acute attacks of electric like pain in the left side of her face which lasted for a few seconds. The attacks were 10-30 attacks/day. What is the possible diagnosis ?',
  options:['Trigeminal neuralgia', 'Atypical migraine', 'Temporal arteritis', 'Glossopharyngeal neuralgia'],
  answer:0,
  explanation:'Trigeminal neuralgia presents with sudden, brief, electric shock-like facial pain, often triggered by touch or movement. It is typically unilateral and can occur many times a day.',
  objective:'Identify trigeminal neuralgia from recurrent brief unilateral electric-like facial pain.',
  source:'Neuro endpoint.pdf, Cranial nerve disorders, Q3, p.654 (answer p.655)'
},

{ id:'npep-cranial-4', bank:'endpoint', module:'neuropsych', chapter:'nr-cranial',
  stem:'A 58-year-old patient presented with the left unilateral facial paralysis, which it was not present the prior night. She also reported hyperacusis in the left ear and unusual taste of the food. Examination revealed left facial droop and close inability to close her left eye. What is the most likely diagnosis ?',
  options:['Acute pontine stroke', 'Cholesteatoma', 'Lyme disease', 'Bell\'s palsy.'],
  answer:3,
  explanation:'Upper and lower face are affected, so it\'s lower motor neuron lesion (bell\'s palsy)',
  objective:'Identify Bell\'s palsy from acute unilateral lower motor neuron facial paralysis with hyperacusis and altered taste.',
  source:'Neuro endpoint.pdf, Cranial nerve disorders, Q4, p.656 (answer p.657)'
},

{ id:'npep-cranial-6', bank:'endpoint', module:'neuropsych', chapter:'nr-cranial',
  stem:'For 6 months, a lancinating pain that lasted for seconds in her right face and responded well to medical treatment. Currently, she had similar attacks that did not respond well to maximum doses of the previously given medication. MRI was ordered. Once the data was interpreted, the patient was referred to neurosurgeon for surgery. What did that patient likely suffer from?',
  options:['Stroke', 'Trigeminal neuralgia.', 'Migraine', 'Myositis'],
  answer:1,
  explanation:'Trigeminal neuralgia presents as brief, stabbing facial pain. Refractory cases unresponsive to medication may require surgical decompression or ablative procedures.',
  objective:'Recognize trigeminal neuralgia from brief lancinating facial pain and refractory attacks.',
  source:'Neuro endpoint.pdf, Cranial nerve disorders, Q6, p.660 (answer p.661)'
},

{ id:'npep-cranial-7', bank:'endpoint', module:'neuropsych', chapter:'nr-cranial',
  stem:'What best distinguishes the upper motor lesion of the facial nerve pathway from that of a lower motor lesion of facial nerve?',
  options:['rarely involves taste sensation', 'It affects only the lower part of the face', 'it affects both sides of face', 'it is common to be accompanied by hearing'],
  answer:1,
  explanation:'Upper motor neuron lesions spare the upper facial muscles due to bilateral cortical representation. Lower face weakness with preserved forehead movement is typical.',
  objective:'Upper motor neuron facial lesions cause lower facial weakness with forehead sparing.',
  source:'Neuro endpoint.pdf, Cranial nerve disorders, Q7, p.662 (answer p.663)'
},

{ id:'npep-cranial-12', bank:'endpoint', module:'neuropsych', chapter:'nr-cranial',
  stem:'What nerve supplies the majority of facial sensory innervation?',
  options:['Facial nerve', 'Glossopharyngeal nerve', 'Trigeminal nerve', 'Vagus nerve'],
  answer:2,
  explanation:'The trigeminal nerve provides the main sensory innervation to the face, including light touch, pain, and temperature. It has three branches: ophthalmic (V1), maxillary (V2), and mandibular (V3).',
  objective:'Identify the cranial nerve supplying most facial sensation.',
  source:'Neuro endpoint.pdf, Cranial nerve disorders, Q12, p.672 (answer p.673)'
},

{ id:'npep-cranial-13', bank:'endpoint', module:'neuropsych', chapter:'nr-cranial',
  stem:'What is the most dangerous complication of facial nerve palsy?',
  options:['Speech difficulty', 'Exposure keratitis', 'Loss of taste', 'Drooling'],
  answer:1,
  explanation:'In facial nerve palsy, the inability to close the eye can lead to corneal drying and damage (exposure keratitis), which may result in vision loss if not managed promptly with eye protection and lubrication.',
  objective:'Identify exposure keratitis as the most dangerous complication of facial nerve palsy.',
  source:'Neuro endpoint.pdf, Cranial nerve disorders, Q13, p.674 (answer p.675)'
},

{ id:'npep-cranial-14', bank:'endpoint', module:'neuropsych', chapter:'nr-cranial',
  stem:'Trigeminal neuralgia most commonly affects which age group?',
  options:['Elderly', 'Adults', 'Adolescents', 'Children'],
  answer:0,
  explanation:'Trigeminal neuralgia predominantly affects elderly individuals, with peak incidence between the ages of 50 and 70. It is often idiopathic or related to vascular compression.',
  objective:'Identify the age group most commonly affected by trigeminal neuralgia.',
  source:'Neuro endpoint.pdf, Cranial nerve disorders, Q14, p.676 (answer p.677)'
}
