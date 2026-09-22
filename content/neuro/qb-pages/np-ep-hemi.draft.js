/*
 * "Neuro endpoint.pdf" - Hemiplegia and paraplegia, printed pp.354-372 (Questions Q1 p.365 ... Q4 p.371, answer p.372): 4 entries
 * (`npep-hemi-1..4`). 4 printed, none skipped, no fold. Pages 354-364 are the divider and lecture slides. OCR could not read the
 * number of Q3 (p.369); Codex read it off the image, in sequence. Filing: Q1, Q3, Q4 in nr-hemi, Q2 in nr-para; Codex put Q3 in
 * nr-intro, moved to nr-hemi because it tests a cervical hemicord lesion, the same topic as Q4 (Brown-Sequard). Sweep against the
 * shipped bank: zero candidates at dice 0.72 (4 incoming x 598 shipped compared on stem, loose stem, option menu and option order).
 * Keys, stems, options and boxes agree with an independent gateway read (Gemini) on all 4. Where a box is printed it is carried
 * verbatim; all others end with the marker.
 */

{ id:'npep-hemi-1', bank:'endpoint', module:'neuropsych', chapter:'nr-hemi',
  stem:'Which of the following is NOT a cause of reversible hemiplegia?',
  options:['Todd\'s paralysis', 'Familial hemiplegic migraine', 'Recurrent hypoglycemia', 'Left frontal lobe meningioma'],
  answer:3,
  explanation:'Left frontal lobe meningioma is the printed answer because a meningioma is a structural intracranial tumour and may produce a persistent, progressive contralateral motor deficit through compression of the motor cortex or adjacent pathways, rather than a typically reversible hemiplegia (not taken from the course material).\n\nTodd\'s paralysis is incorrect because it is a transient focal weakness occurring after a seizure and usually resolves spontaneously (not taken from the course material). Familial hemiplegic migraine is incorrect because it can cause reversible unilateral weakness as part of a migraine aura (not taken from the course material). Recurrent hypoglycemia is incorrect because low blood glucose can produce transient focal neurological deficits, including hemiplegia-like weakness, which improve after glucose correction (not taken from the course material). Thus, the tumour option is distinguished from the other episodic or metabolic causes by its structural and potentially progressive nature (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Distinguish structural causes of hemiplegia from reversible causes.',
  source:'Neuro endpoint.pdf, Hemiplegia and paraplegia, Q1, p.365 (answer p.366)'
},

{ id:'npep-hemi-2', bank:'endpoint', module:'neuropsych', chapter:'nr-para',
  stem:'Which of the following is NOT a sign of cortical paraplegia?',
  options:['Headache', 'Sensory level', 'Fits', 'Mental manifestations'],
  answer:1,
  explanation:'The keyed option is “Sensory level.” A sensory level, meaning a clear boundary on the trunk below which sensation is impaired, is generally a localizing feature of a spinal cord lesion rather than a cortical lesion (not taken from the course material). Cortical paraplegia results from bilateral involvement of the parasagittal motor cortical regions that represent the lower limbs, often in the anterior cerebral artery territory (not taken from the course material). It produces upper motor neuron weakness predominantly affecting both legs.\n\nHeadache is not excluded because an intracranial cortical process may cause headache through raised intracranial pressure, meningeal irritation, or the underlying cerebral lesion (not taken from the course material). Fits are not excluded because cortical irritation or cortical damage can provoke seizures (not taken from the course material). Mental manifestations are not excluded because bilateral frontal or medial cerebral involvement may affect behaviour, initiative, cognition, or continence-related frontal control (not taken from the course material). These associated features help distinguish a cerebral cortical cause from a purely spinal cause, although their presence depends on the site and cause of the lesion (not taken from the course material).\n\nThus, in the bank’s distinction, a sensory level points away from cortical paraplegia and toward spinal cord pathology, while headache, fits, and mental manifestations may accompany a cortical cerebral lesion. Written for this bank — the endpoint file prints no explanation here.',
  objective:'A sensory level is not a sign of cortical paraplegia.',
  source:'Neuro endpoint.pdf, Hemiplegia and paraplegia, Q2, p.367 (answer p.368)'
},

{ id:'npep-hemi-3', bank:'endpoint', module:'neuropsych', chapter:'nr-hemi',
  stem:'A 35-year-old male patient was exposed to a gunshot injury in the cervical region. On examination, the entry point was left paramedian. He had impaired pain sensation in the right lower limb and weakness of the left lower limb. What is the most probable diagnosis in this patient?',
  options:['Anterior cord syndrome', 'Brown-Séquard syndrome', 'Central cord syndrome', 'Benedikt\'s syndrome'],
  answer:1,
  explanation:'Brown-Séquard syndrome is the bank’s printed answer. A left-sided cervical hemicord injury produces ipsilateral weakness below the lesion because the corticospinal tract has already crossed in the lower medulla. It also produces contralateral loss of pain sensation because spinothalamic fibres cross near their spinal entry level. Thus, left lower-limb weakness with impaired right lower-limb pain sensation fits a left hemicord lesion (not taken from the course material).\n\nAnterior cord syndrome usually causes bilateral motor weakness and bilateral loss of pain and temperature below the lesion, while posterior-column sensations are relatively preserved; it does not classically give this crossed, side-specific pattern (not taken from the course material). Central cord syndrome typically causes motor impairment more marked in the upper limbs than the lower limbs, often after cervical hyperextension injury, rather than ipsilateral weakness with contralateral pain loss (not taken from the course material). Benedikt\'s syndrome is a midbrain syndrome involving the oculomotor nerve and nearby red nucleus/cerebral peduncle, producing ipsilateral third-nerve palsy with contralateral tremor, ataxia, or weakness; it does not describe a cervical spinal cord hemisection pattern (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'A cervical hemicord lesion causes ipsilateral motor weakness and contralateral pain-sensation loss.',
  source:'Neuro endpoint.pdf, Hemiplegia and paraplegia, Q3, p.369 (answer p.370)'
},

{ id:'npep-hemi-4', bank:'endpoint', module:'neuropsych', chapter:'nr-hemi',
  stem:'Which of the following best describes the clinical features of spinal hemiplegia (Brown-Séquard syndrome)?',
  options:['Ipsilateral hemiplegia and ipsilateral loss of pain sensation', 'Contralateral hemiplegia and ipsilateral loss of pain sensation', 'Ipsilateral hemiplegia and contralateral loss of joint position sense', 'Ipsilateral hemiplegia and contralateral loss of pain and temperature sensation'],
  answer:3,
  explanation:'Brown-Séquard syndrome results from hemisection of the spinal cord. It produces ipsilateral motor weakness and proprioceptive loss, with contralateral loss of pain and temperature due to crossed spinothalamic fibers.',
  objective:'Brown-Séquard syndrome causes ipsilateral motor weakness with contralateral loss of pain and temperature sensation.',
  source:'Neuro endpoint.pdf, Hemiplegia and paraplegia, Q4, p.371 (answer p.372)'
}
