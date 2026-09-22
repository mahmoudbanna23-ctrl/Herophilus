/*
 * "Neuro endpoint.pdf" - Ataxia and low back pain: 5 rows (printed Q1-Q3,Q5,Q7, pp.411-425).
 * Built by tools/bank-harness/npep-build.mjs, then hand-verified against page images:
 * the pipeline's pairs n2 (p.411) and n3 (p.413) are the SAME question (Q1) - p.411 is
 * its question page, p.412 is an unrelated ataxia-types reference table, p.413 is Q1's
 * answer reprint with the key highlighted - not two separate questions. Merged to one
 * npep-ataxia-1 entry. All 7 keys (pre-merge) independently verified against answer-page
 * images. Q4 (p.418/419) and Q6 (p.422/423) are the same fact - vestibular ataxia, normal
 * muscle tone - already printed in app/data/questions.neuro.js as npqb-nr-2 (gradegain,
 * fuller lecture-grounded explanation); both folded there via alsoIn:['endpoint'] and an
 * extended source citation, deleted from this draft, ids 4 and 6 left as a gap, never
 * renumbered.
 */

{ id:'npep-ataxia-1', bank:'endpoint', module:'neuropsych', chapter:'nr-nerve',
  stem:'A 62-year-old male presented with gait difficulty and sense of falling upon closing his eyes. He has a long history of diabetes mellitus and hypertension. Neurological examination revealed weak distal muscles, lost distal reflexes, long glove and stalking hypesthesia and high steppage gait.\n\nWhat is the most probable diagnosis of this patient ?',
  options:['Mixed ataxia', 'Vestibular ataxia', 'Cerebellar ataxia', 'Sensory ataxia'],
  answer:3,
  explanation:'The printed key is D, Sensory ataxia (highlighted on the reprinted answer page, p.413, which also marks in red the clinical clues: sense of falling on eye closure, long history of diabetes mellitus, and glove-and-stocking hypesthesia with high steppage gait). The worsening of imbalance on eye closure indicates dependence on visual input because proprioceptive sensory input is impaired; the distal weakness, absent distal reflexes, glove-and-stocking hypesthesia, and high-steppage gait support a length-dependent peripheral neuropathy, consistent with diabetic neuropathy (not taken from the course material). The chapter’s own ataxia-types table (p.412) lists a positive Romberg / worsening with eye closure and weakness as sensory-ataxia features, matching this case.\n\nMixed ataxia is wrong because the stem gives findings of peripheral sensory loss without accompanying cerebellar or vestibular features. Vestibular ataxia is wrong because vestibular disease commonly causes vertigo, nausea, and nystagmus (not taken from the course material), none of which are described; it also does not explain the distal weakness, lost reflexes, and glove-and-stocking sensory loss. Cerebellar ataxia is wrong because cerebellar gait disturbance generally remains present with the eyes open and closed and may be associated with dysmetria, intention tremor, dysdiadochokinesia, or nystagmus (not taken from the course material), none of which are stated.\n\nWritten for this bank — the endpoint file prints no dedicated explanation paragraph here, only the highlighted stem clues and marked key.',
  objective:'Identify sensory ataxia caused by peripheral sensory neuropathy (e.g. diabetic), worsened by eye closure.',
  source:'Neuro endpoint.pdf, Ataxia and low back pain, Q1, p.411 (answer p.413)'
},

{ id:'npep-ataxia-2', bank:'endpoint', module:'neuropsych', chapter:'nr-para',
  stem:'Where is the site of the lesion if a patient develops ataxia that markedly worsens following eye closure ?',
  options:['basal ganglia', 'posterior column', 'cerebral cortex', 'cerebellum'],
  answer:1,
  explanation:'Worsening ataxia with eye closure suggests sensory ataxia, which is commonly due to lesions in the posterior (dorsal) columns that impair proprioception.',
  objective:'Identify posterior column lesions as a cause of sensory ataxia that worsens with eye closure.',
  source:'Neuro endpoint.pdf, Ataxia and low back pain, Q2, p.414 (answer p.415)'
},

{ id:'npep-ataxia-3', bank:'endpoint', module:'neuropsych', chapter:'nr-para',
  stem:'A 23-year-old female presented with right sided postural instability and dysdiadokokinesia . She started to notice a speech problem and her friend noted nystagmus in one eye . What is the most probable location of the lesion responsible for the patient presentation?',
  options:['right cerebellum.', 'left cerebellum', 'left cerebral hemisphere', 'right cerebral hemisphere'],
  answer:0,
  explanation:'Printed on the answer page (p.417), in a purple caption below the marked key: "Cerebellum >> lesion on the same side." The patient’s right-sided postural instability, dysdiadokokinesia, speech problem, and nystagmus are cerebellar signs, and cerebellar lesions produce ipsilateral (same-side) limb and gait incoordination, so right-sided signs localize to the right cerebellum (option A).\n\nLeft cerebellum is wrong because it would produce left-sided, not right-sided, incoordination. Left and right cerebral hemisphere are wrong because a cerebral hemispheric lesion more typically causes contralateral upper motor neuron weakness, sensory deficits, or language disturbance if dominant, rather than this cerebellar-sign cluster (not taken from the course material).',
  objective:'Cerebellar lesions cause ipsilateral cerebellar signs and localize to the same side.',
  source:'Neuro endpoint.pdf, Ataxia and low back pain, Q3, p.416 (answer p.417)'
},

{ id:'npep-ataxia-5', bank:'endpoint', module:'neuropsych', chapter:'nr-para',
  stem:'In which type of ataxia is nystagmus usually absent?',
  options:['Cerebellar ataxia', 'Vestibular ataxia', 'Mixed ataxia', 'Sensory ataxia'],
  answer:3,
  explanation:'In sensory ataxia, nystagmus is usually absent because the vestibular system is not involved. Patients often compensate with visual input and worsen when eyes are closed (positive Romberg).',
  objective:'Identify sensory ataxia as the type in which nystagmus is usually absent.',
  source:'Neuro endpoint.pdf, Ataxia and low back pain, Q5, p.420 (answer p.421)'
},

{ id:'npep-ataxia-7', bank:'endpoint', module:'neuropsych', chapter:'nr-backpain',
  stem:'Saddle anesthesia (sensory loss in the perianal region) is characteristic of which condition?',
  options:['Cauda equina syndrome', 'Conus medullaris syndrome', 'Lumbosacral radiculopathy', 'Cervical spondylosis'],
  answer:0,
  explanation:'Saddle anesthesia ➡ loss of sensation in the perianal and inner thigh region , is a hallmark of cauda equina syndrome. It results from compression of the lower spinal nerve roots.',
  objective:'Saddle anesthesia is a hallmark of cauda equina syndrome.',
  source:'Neuro endpoint.pdf, Ataxia and low back pain, Q7, p.424 (answer p.425)'
}
