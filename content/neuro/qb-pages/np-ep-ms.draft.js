/*
 * "Neuro endpoint.pdf" - Multiple sclerosis, printed pp.283-353 (Questions Q1 p.305 ... Q24 p.352, answer p.353): 24 entries
 * (`npep-ms-1..24`). 24 printed, none skipped, no fold. Pages 283-304 are the divider and lecture slides (p.304 has no OCR text
 * and is not visually confirmed as a slide); p.335 is a lecture slide (MRI figure) between Q15 and Q16, not a question.
 * OCR could not read the number of Q10, Q13, Q14, Q19 (Codex read them off the image, in sequence); Q10 and Q11 were soft pairs (OCR read no options), confirmed as questions by Codex. Q22 was filed elsewhere by Codex (nr-exam), kept
 * in nr-ms by chapter. Cross-bank matches against the Grade Gain bank (left as two entries, noted in `source`): 24 = npqb-nr-239,
 * 3 = npqb-nr-236. Within-batch near-duplicate left unfolded (reworded stem): 13 ~ 14. Keys, stems, options and boxes agree with
 * an independent gateway read (Gemini) on all 24. Where a box is printed it is carried verbatim; all others end with the marker.
 */

{ id:'npep-ms-1', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'As blurring of vision is a subjective symptom of optic neuritis, which diagnostic tool best helps to prove it in a patient with suspected multiple sclerosis?',
  options:['MRI brain with contrast', 'Fundus examination', 'Visual evoked potential', 'Elevated CSF proteins'],
  answer:2,
  explanation:'Visual evoked potential is the printed correct answer. It provides an objective assessment of conduction along the visual pathway and can demonstrate delayed visual conduction caused by optic nerve demyelination, including when visual blurring is a subjective complaint. In suspected multiple sclerosis, delayed visual evoked responses can support prior or clinically evident optic nerve involvement. (not taken from the course material)\n\nMRI brain with contrast is not the best test for proving the visual-pathway dysfunction described in this question. MRI may demonstrate demyelinating lesions and active contrast-enhancing lesions, helping assess multiple sclerosis, but it does not directly measure visual conduction. (not taken from the course material)\n\nFundus examination is not the best answer because optic neuritis may have a normal-looking optic disc in retrobulbar neuritis. It can identify papillitis when disc swelling is present, but a normal fundus does not exclude optic neuritis. (not taken from the course material)\n\nElevated CSF proteins is not a specific objective test for optic neuritis or multiple sclerosis. CSF examination may show other supportive findings in multiple sclerosis, particularly oligoclonal bands, whereas isolated elevation of protein is nonspecific. (not taken from the course material)\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Visual evoked potential can objectively support optic neuritis in suspected multiple sclerosis.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q1, p.305 (answer p.306)'
},

{ id:'npep-ms-2', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'What is the name of the electric shock-like sensation down the spine on neck flexion, seen in multiple sclerosis?',
  options:['Brudzinski\'s sign', 'Kernig’s sign', 'Lhermitte\'s sign', 'Babinski sign'],
  answer:2,
  explanation:'Lhermitte\'s sign is an electric shock-like sensation down the spine triggered by neck flexion, commonly seen in multiple sclerosis due to cervical spinal cord demyelination.',
  objective:'Identify Lhermitte\'s sign in multiple sclerosis.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q2, p.307 (answer p.308)'
},

{ id:'npep-ms-3', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'What term is given when there is a complaint of electric sensations in the spine that develop upon head flexion ?',
  options:['Kernig\'s sign', 'Gowers\'s sign', 'Brudzinski sign', 'Lhermitte\'s sign'],
  answer:3,
  explanation:'Lhermitte’s sign is an electric shock-like sensation down the spine triggered by neck flexion. It suggests cervical spinal cord demyelination, commonly seen in multiple sclerosis',
  objective:'Identify Lhermitte\'s sign from electric sensations in the spine triggered by head flexion.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q3, p.309 (answer p.310); same question, same options, same key as Grade Gain npqb-nr-236 — left as two entries, cross-bank'
},

{ id:'npep-ms-4', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'What is the most important modality of investigation in the management of patients with multiple sclerosis ?',
  options:['CT brain', 'Visual evoked potential', 'MRI brain', 'CSF examination'],
  answer:2,
  explanation:'MRI is the most sensitive imaging technique for detecting demyelinating lesions in multiple sclerosis. It helps visualize plaques in the brain and spinal cord, which are diagnostic hallmarks of the disease.',
  objective:'Identify MRI brain as the most important investigation modality in the management of multiple sclerosis.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q4, p.311 (answer p.312)'
},

{ id:'npep-ms-5', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'What is the best imaging modality to diagnose multiple sclerosis?',
  options:['MRI', 'CT', 'CSF analysis', 'PET scan'],
  answer:0,
  explanation:'MRI is the most sensitive imaging technique for detecting demyelinating lesions in multiple sclerosis. It helps visualize plaques in the brain and spinal cord, which are diagnostic hallmarks of the disease.',
  objective:'MRI is the most sensitive imaging modality for detecting demyelinating lesions in multiple sclerosis.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q5, p.313 (answer p.314)'
},

{ id:'npep-ms-6', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'Which of the following is a remitting and relapsing disease?',
  options:['Myasthenia gravis', 'Multiple sclerosis', 'Parkinson’s disease', 'Duchenne muscular dystrophy'],
  answer:1,
  explanation:'Multiple sclerosis commonly follows a relapsing-remitting course, with periods of neurologic symptoms followed by partial or complete recovery. This pattern distinguishes it from progressive disorders like Parkinson’s or DMD.',
  objective:'Identify multiple sclerosis as a relapsing-remitting disease.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q6, p.315 (answer p.316)'
},

{ id:'npep-ms-7', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'What drug is used to prevent recurrences in multiple sclerosis?',
  options:['Beta interferon', 'Cortisol', 'Azathioprine', 'Cyclophosphamide'],
  answer:0,
  explanation:'Beta interferons are disease-modifying therapies that reduce relapse frequency and slow progression in multiple sclerosis. They are first-line agents in relapsing-remitting MS.',
  objective:'Beta interferon is used to reduce relapse frequency in multiple sclerosis.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q7, p.317 (answer p.318)'
},

{ id:'npep-ms-8', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'What is the best treatment for an acute attack of multiple sclerosis?',
  options:['Cyclophosphamide', 'Methylprednisolone', 'Azathioprine', 'IV heparin'],
  answer:1,
  explanation:'High-dose intravenous methylprednisolone is the first-line treatment for acute MS relapses. It helps reduce inflammation, hastens recovery, and shortens the duration of the attack.',
  objective:'Identify methylprednisolone as the treatment for an acute multiple sclerosis attack.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q8, p.319 (answer p.320)'
},

{ id:'npep-ms-9', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'What is finding in the CSF examination in multiple sclerosis?',
  options:['Glucose content of less than 20% of the serum content', 'Persistently elevated total protein content', 'Persistently elevated immunoglobulin G (IgG) content.', 'Mononuclear cell counts of greater than 100 cells per Ul'],
  answer:2,
  explanation:'CSF analysis in MS often shows elevated IgG levels and the presence of oligoclonal bands,\nindicating intrathecal IgG synthesis, a hallmark of the disease.',
  objective:'CSF examination in multiple sclerosis may show persistently elevated IgG content.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q9, p.321 (answer p.322)'
},

{ id:'npep-ms-10', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'A 27-year -old -female patient, in the neurology clinic, was complaining of unsteadiness of her gait and tremor in her hands with with movement. She had a history of paraplegia which resolved completely on corticosteroids therapy. Cerebrospinal fluid examination showed positive oligoclonal bands .what is the most cranial nerve affected in her condition?',
  options:['The facial nerve', 'The optic nerve', 'The olfactory nerve', 'The vagus'],
  answer:1,
  explanation:'The printed key is The optic nerve. The presentation is consistent with multiple sclerosis: a young woman has neurologic deficits affecting different CNS sites at different times, including a prior episode of paraplegia that resolved with corticosteroids, current gait unsteadiness and intention tremor, and positive cerebrospinal-fluid oligoclonal bands. Optic neuritis is a common cranial-nerve-related manifestation of multiple sclerosis because the optic nerve is a CNS white-matter tract and can be affected by demyelination (not taken from the course material). It may produce painful monocular visual loss, reduced colour vision, and a relative afferent pupillary defect (not taken from the course material).\n\nThe facial nerve is wrong because facial weakness can occur with a brainstem demyelinating lesion, but it is not the characteristic cranial nerve involvement being tested here (not taken from the course material). The olfactory nerve is wrong because impaired smell is not a typical defining cranial neuropathy of multiple sclerosis (not taken from the course material). The vagus is wrong because vagal lesions more typically cause palatal, pharyngeal, laryngeal, swallowing, or voice abnormalities; none are described in this case (not taken from the course material). The unsteady gait and tremor with movement support cerebellar pathway involvement, while the past paraplegia supports spinal-cord involvement, fitting dissemination in space (not taken from the course material). Written for this bank — the endpoint file prints no explanation here.',
  objective:'Identify the optic nerve as the cranial nerve most characteristically affected in multiple sclerosis.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q10, p.323 (answer p.324)'
},

{ id:'npep-ms-11', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'Which vitamin\'s deficiency has been linked to an increase developing multiple sclerosis ?',
  options:['C', 'B12', 'D', 'A'],
  answer:2,
  explanation:'The pathogenesis and pathophysiology:\nThe pathogenesis and pathophysiology of MS remains incompletely understood.\nThis disorder is a heterogeneous, multifactorial, immune-mediated disease that is influenced by both genetic such as the human leukocyte antigen (HLA) genes on chromosome 6, including (HLA) DRB1*15:01 polymorphisms and environmental factors such as smoking, low vitamin D level, Epstein-Barr virus (EBV) infection and obesity.\nThe pathological hallmark of MS plaques is the accumulation of demyelinating lesions that occur in the white matter and the grey matter of the brain and spinal cord.\nThey are typically located around post- capillary venules and are characterized by breakdown of the blood-brain barrier (BBB). The dysregulation of the BBB increases the trans-endothelial migration of activated leukocytes, including macrophages, T cells and B cells, into the CNS, which leads to further',
  objective:'Identify low vitamin D level as an environmental factor linked to multiple sclerosis.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q11, p.325 (answer p.326)'
},

{ id:'npep-ms-12', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'Which factor might be expected to worsen multiple sclerosis symptoms?',
  options:['Bright lights', 'Amantadine', 'Tyramine-containing compounds', 'Hot weather.'],
  answer:3,
  explanation:'Heat sensitivity is common in multiple sclerosis (MS), and hot weather can worsen neurological symptoms by impairing nerve conduction in demyelinated neurons. This is known as Uhthoff\'s phenomenon.',
  objective:'Heat can transiently worsen neurological symptoms in multiple sclerosis.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q12, p.327 (answer p.328)'
},

{ id:'npep-ms-13', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'A 20-year-old female patient presented with sudden onset of blurred vision in one eye that is painless.\nShe had no family history of a similar condition and her past medical history was free. What is the most common neurological cause of her condition?',
  options:['Cortical infarction', 'Wilson disease', 'Diabetic retinopathy', 'Multiple sclerosis.'],
  answer:3,
  explanation:'Optic neuritis, often associated with MS, typically causes sudden, painless, monocular visual loss in young adults. It\'s one of the most frequent initial presentations of MS.',
  objective:'Optic neuritis causing painless monocular visual loss in a young adult is commonly associated with multiple sclerosis.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q13, p.329 (answer p.330); reworded stem, same options in another order and same answer as npep-ms-14 (Q14, p.331) — left as two entries'
},

{ id:'npep-ms-14', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'A 20-year-old female patient presented with sudden onset of painless blurred vision in one eye. She had no family history of a similar condition, and her past medical history was unremarkable.\nWhat is the most common neurological cause of her condition?',
  options:['Multiple sclerosis', 'Cortical infarction', 'Diabetic retinopathy', 'Wilson disease'],
  answer:0,
  explanation:'Optic neuritis, often the first presentation of multiple sclerosis, typically causes painless monocular visual loss in young women. It may resolve spontaneously but requires evaluation for MS.',
  objective:'Recognize multiple sclerosis as the common neurological cause of optic neuritis in a young woman.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q14, p.331 (answer p.332); reworded stem, same options in another order and same answer as npep-ms-13 (Q13, p.329) — left as two entries'
},

{ id:'npep-ms-15', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'What character is absent in MRI during recent activity of multiple sclerosis?',
  options:['Non contrast enhancing lesion', 'Ovoid plaques arranged perpendicular to ventricles', 'Periventricular patches.', 'Spinal cord patches'],
  answer:0,
  explanation:'The keyed option is “Non contrast enhancing lesion.” During recent inflammatory activity in multiple sclerosis, an active plaque commonly shows contrast enhancement after gadolinium administration because inflammation disrupts the blood–brain barrier (not taken from the course material). Therefore, a lesion that does not enhance with contrast is absent as a characteristic finding of recent activity; it is more consistent with an older, inactive lesion (not taken from the course material).\n\nOvoid plaques arranged perpendicular to the ventricles are not absent in multiple sclerosis. This pattern corresponds to perivenular lesions often described as Dawson’s fingers, and it is a characteristic MRI distribution in MS (not taken from the course material). Periventricular patches are also not absent: periventricular white-matter lesions are a typical site of MS plaques and may be present whether lesions are active or inactive (not taken from the course material). Spinal cord patches are likewise not excluded. MS may produce focal spinal-cord lesions, which can enhance when active, although their visibility depends on the region scanned and the imaging sequence used (not taken from the course material).\n\nThe wording of option a is retained exactly as printed. It is interpreted here as a non-contrast-enhancing lesion, in contrast to the expected contrast enhancement of a recently active plaque (not taken from the course material). Written for this bank — the endpoint file prints no explanation here.',
  objective:'Recent active multiple-sclerosis lesions characteristically enhance with contrast on MRI.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q15, p.333 (answer p.334)'
},

{ id:'npep-ms-16', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'What is the recommended prophylactic treatment for multiple sclerosis (MS)?',
  options:['Alpha interferon', 'Beta interferon', 'Methylprednisolone', 'Glatiramer acetate'],
  answer:1,
  explanation:'Beta interferon is commonly used as a disease-modifying therapy in MS to reduce relapse rates and delay progression. It modulates the immune response to decrease demyelination.',
  objective:'Beta interferon is the printed recommended prophylactic treatment for multiple sclerosis.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q16, p.336 (answer p.337)'
},

{ id:'npep-ms-17', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'What is the most common age range for the incidence of multiple sclerosis?',
  options:['Under 20 years', '20–40 years', '40–60 years', 'Over 60 years'],
  answer:1,
  explanation:'MS most frequently affects young adults between 20 and 40 years of age, with a higher prevalence in females. This age group often presents with optic neuritis, sensory symptoms, or motor weakness.',
  objective:'Identify the most common age range for the incidence of multiple sclerosis.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q17, p.338 (answer p.339)'
},

{ id:'npep-ms-18', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'What is the characteristic feature of CSF in a patient with multiple sclerosis?',
  options:['Increased IgM index', 'Decreased IgG index', 'Decreased IgM index', 'Increased IgG index.'],
  answer:3,
  explanation:'2. CSF analysis:\n• Oligoclonal bands [OCB]: A subtype of globulin can be detected in the CSF of MS patient. It is helpful in confirming the diagnosis.\nFigure 4: Oligoclonal bands [OCB] in CSF\n• Increased IgG index, due to increased intrathecal production of IgG.\n• A lymphocytic pleocytosis occurs during acute exacerbations in about one third of patients.',
  objective:'The CSF finding tested is an increased IgG index in multiple sclerosis.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q18, p.340 (answer p.341)'
},

{ id:'npep-ms-19', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'A 23-year-old woman reports progressive stiffness and clumsiness in her right leg over the past two weeks, impairing her ability to work. Examination shows spasticity, six beats of clonus, upgoing plantar response, and weakness (3-4/5) in right leg flexors. There’s no sensory deficit, but fundoscopy reveals a pale optic disc. She reports two past episodes of blurred right eye vision, each resolving in weeks. What is the most appropriate initial treatment?',
  options:['Interferon-beta', 'NSAID', 'Bed rest', 'Methotrexate', 'A course of oral steroids'],
  answer:4,
  explanation:'This is a relapse of multiple sclerosis, and corticosteroids are the first-line treatment for acute exacerbations. They reduce inflammation and speed up recovery.',
  objective:'Initial treatment of an acute multiple sclerosis relapse.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q19, p.342 (answer p.343)'
},

{ id:'npep-ms-20', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'Which of the following cerebrospinal fluid findings is associated with multiple sclerosis?',
  options:['Increased IgG index', 'Decreased protein level', 'Neutrophilic pleocytosis', 'Low glucose'],
  answer:0,
  explanation:'An increased IgG index or presence of oligoclonal bands in CSF indicates intrathecal IgG production, which is characteristic of MS.',
  objective:'Identify the cerebrospinal fluid finding associated with multiple sclerosis.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q20, p.344 (answer p.345)'
},

{ id:'npep-ms-21', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'A woman presents with diplopia. On looking to the right, her left eye remains midline, while the right eye moves and jerks. What is the diagnosis?',
  options:['Myasthenia gravis (MG)', 'Vertigo', 'Cerebellar syndrome', 'Multiple sclerosis (MS)', 'Peripheral neuropathy'],
  answer:3,
  explanation:'This is internuclear ophthalmoplegia (INO), where one eye fails to adduct and the other shows nystagmus on lateral gaze, commonly due to MS affecting the medial longitudinal fasciculus.',
  objective:'Recognize internuclear ophthalmoplegia as a manifestation commonly due to multiple sclerosis.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q21, p.346 (answer p.347)'
},

{ id:'npep-ms-22', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'A neurologist flicks a patient’s middle finger and the thumb contracts in response. What sign has been elicited?',
  options:['Chvostek’s', 'Glabellar', 'Hoffman’s', 'Tinel’s', 'Babinski’s'],
  answer:2,
  explanation:'Hoffman’s sign is a reflex triggered by flicking the distal phalanx of the middle finger, causing thumb flexion, and indicates a corticospinal tract lesion or cervical myelopathy.',
  objective:'Identify Hoffman’s sign from thumb contraction after flicking the middle finger.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q22, p.348 (answer p.349)'
},

{ id:'npep-ms-23', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'A 31-year-old woman is diagnosed with multiple sclerosis following a lumbar puncture. What is the most likely finding on CSF analysis?',
  options:['Decreased polymorphs', 'Monoclonal bands', 'Increased glucose', 'Decreased protein', 'Oligoclonal bands'],
  answer:4,
  explanation:'Oligoclonal bands in the CSF, not in serum, are indicative of intrathecal IgG synthesis and are commonly found in multiple sclerosis. They support the diagnosis when clinical and imaging features are present.',
  objective:'Identify oligoclonal bands in CSF as a finding associated with multiple sclerosis.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q23, p.350 (answer p.351)'
},

{ id:'npep-ms-24', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'Which of the following is the best Treatment of Acute Exacerbations of MS ?',
  options:['IV methylprednisolone', 'IV thrombolytic drug', 'Oral Mestinon', 'SC interferon'],
  answer:0,
  explanation:'Acute exacerbations of multiple sclerosis are treated with high-dose intravenous corticosteroids to reduce inflammation and hasten recovery. Methylprednisolone is the standard first-line therapy.',
  objective:'Identify the best treatment for an acute exacerbation of multiple sclerosis.',
  source:'Neuro endpoint.pdf, Multiple sclerosis, Q24, p.352 (answer p.353); same question, same options, same key as Grade Gain npqb-nr-239 — left as two entries, cross-bank'
}
