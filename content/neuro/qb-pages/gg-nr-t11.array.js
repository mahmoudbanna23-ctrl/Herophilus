/*
 * Grade Gain "neuropsychiatry & neurosurgery qb.pdf"
 * Topic 11 "Demyelinating Diseases"
 * Questions: book pp.46-48 (PDF 051-053)
 * Answers: book p.49 (PDF 054)
 * Offset: PDF page = book page + 5
 * Banner: confirmed "Demyelinating Diseases Questions" on pg-051 (Q 228).
 * Next Topic: confirmed "Neuromuscular Disorders Questions" on pg-055 (Q 251).
 * Flags:
 *   - Q 248 has only 3 options (a, b, c)
 *   - Q 249 options are lettered a, b, e
 *   - Q 250 printed explanation has typo "Explantion" and grammar error "eye. of the brain"
 *
 * NOTE: the staging worker (agy/Gemini, following AGENTS.md rule 3) returned `key` as a
 * 0-based index into `opts`. Converted here to a bare letter (A=0, B=1, ...) to match the
 * t08/t09/t10 staged-file convention; each conversion checked against `opts.length`, no
 * out-of-range index found. Independently re-verified against pg-054 (book p.49): the
 * printed letter for every one of the 23 questions pairs with the same option text as
 * `opts[key-as-index]` here — 23/23 confirmed, 0 mismatches.
 */

var GG_NR_T11_STAGED = [
  { n:228, p:46, key:'A', keyName:null,
    stem:'A 30-year-old secretary presents with bilateral leg weakness and D blurred vision. Fundoscopy reveals pale optic discs bilaterally. Most probable diagnosis is:',
    opts:['multiple sclerosis', 'Syringomyelia', 'Motor neuron disease', 'bilateral stroke'],
    box:null },

  { n:229, p:46, key:'A', keyName:null,
    stem:'A 28- year- old man presents with sudden blurring of the left eye. Aweek earlier he had noted progressive clumsiness of the right hand. Few months\' earlier he had had an episode of left leg stiffness that resolved spontaneously. Most probable diagnosis is:',
    opts:['Multiple sclerosis', 'Motor neurone disease', 'Meningitis', 'Guillain-Barre syndrome'],
    box:'Explanation: In MS. Between attacks, symptoms may fully resolve.' },

  { n:230, p:46, key:'A', keyName:null,
    stem:'Which of the following findings can be found in the CSF of a MS patient?',
    opts:['Increased IgG index', 'Decreased white blood cell count', 'Oligoclonal bands absent', 'Normal protein concentration'],
    box:null },

  { n:231, p:46, key:'B', keyName:null,
    stem:'Which of the following is commonly used as a prophylactic treatment for multiple sclerosis (MS)?',
    opts:['Alpha interferon', 'Beta interferon', 'Steroids', 'Methotrexate'],
    box:null },

  { n:232, p:46, key:'B', keyName:null,
    stem:'What is the most common age range for the onset of (MS)?',
    opts:['20 years', '20-40 years', '40 years', '40-60 years'],
    box:null },

  { n:233, p:46, key:'B', keyName:null,
    stem:'What is the most common form of multiple sclerosis (MS)?',
    opts:['Primary progressive', 'Relapsing-remitting', 'Secondary progressive', 'Regressive'],
    box:null },

  { n:234, p:46, key:'A', keyName:null,
    stem:'What is the investigation of choice for diagnosing multiple sclerosis?',
    opts:['MRI', 'VEP (Visual Evoked Potential)', 'CSF (Cerebrospinal Fluid) analysis', 'CT (Computed Tomography)'],
    box:null },

  { n:235, p:46, key:'A', keyName:null,
    stem:'Which of the following neurological diseases are characterized by a pattern of relapse and remission?',
    opts:['Multiple sclerosis (MS) and vasculitis', 'Parkinson\'s disease and Alzheimer\'s disease', 'Epilepsy and Huntington\'s disease', 'Amyotrophic lateral sclerosis (ALS) and Guillain-Barré syndrome', 'Meningitis and encephalitis'],
    box:null },

  { n:236, p:46, key:'D', keyName:null,
    stem:'what term is given when there\'s a complain of electrical sensation in spine that develop upon head flexion?',
    opts:['Kering sign', 'Gower sign', 'Brudzinski sign', 'Lhermitte\'s sign.'],
    box:null },

  { n:237, p:47, key:'A', keyName:null,
    stem:'A 32-year-old female patient presents with paresthesia of the left upper and lower limbs that started yesterday. She has a past history of diplopia lasting 6 days one year ago and optic neuritis 4 years ago. What is the most important investigation to perform?',
    opts:['MRI of the brain and spinal cord', 'Nerve conduction velocity study', 'Lumbar puncture for CSF analysis', 'Visual evoked potentials (VEP)'],
    box:null },

  { n:238, p:47, key:'D', keyName:null,
    stem:'All the following could be clinical presentation of multiple sclerosis EXCEPT:',
    opts:['Hemiplegia', 'Ataxia', 'Hemihypothesia', 'Aphasia'],
    box:null },

  { n:239, p:47, key:'A', keyName:null,
    stem:'Which of the following is the best treatment for acute exacerbations of MS?',
    opts:['IV methylprednisolone', 'IV thrombolytic drug', 'Oral Mestinon', 'SC interferon'],
    box:null },

  { n:240, p:47, key:'A', keyName:null,
    stem:'Which of the following is required for the diagnosis of relapsing-remitting multiple sclerosis according to the McDonald criteria?',
    opts:['At least two attacks, separated by one month, with evidence of dissemination in space (DIS) and time (DIT)', 'One attack with dissemination in space', 'Evidence of two separate CNS lesions on MRI alone', 'One attack with a positive CSF and VEP findings'],
    box:null },

  { n:241, p:47, key:'B', keyName:null,
    stem:'Which of the following findings on MRI is indicative of active disease in multiple sclerosis?',
    opts:['Hypointense lesions on T2-weighted images', 'Gadolinium-enhanced lesions on T1-weighted images', 'Enlarged ventricles without lesions', 'Lesions in the gray matter'],
    box:null },

  { n:242, p:47, key:'B', keyName:null,
    stem:'Which of the following is the most common location for MS plaques to be found on MRI?',
    opts:['Gray matter of the brain', 'Periventricular white matter', 'Brainstem and cerebellum', 'Temporal lobes', 'Subcortical regions of the brain'],
    box:null },

  { n:243, p:47, key:'B', keyName:null,
    stem:'What is the role of cerebrospinal fluid (CSF) analysis in the diagnosis of MS?',
    opts:['It is the primary diagnostic tool for MS', 'It is used to detect the presence of oligoclonal bands', 'It is used to rule out infectious causes of symptoms', 'It helps differentiate MS from neurodegenerative diseases', 'It provides definitive evidence of the type of MS (relapsing vs. progressive)'],
    box:null },

  { n:244, p:47, key:'A', keyName:null,
    stem:'Which form of multiple sclerosis typically follows the initial relapsing-remitting course and eventually leads to a steady progression without relapses?',
    opts:['Secondary Progressive MS', 'Relapsing-Remitting Multiple Sclerosis', 'Progressive-Relapsing MS', 'Primary Progressive Multiple Sclerosis'],
    box:null },

  { n:245, p:48, key:'D', keyName:null,
    stem:'Which of the following is a distinguishing feature of Progressive-Relapsing MS compared to Relapsing-Remitting MS?',
    opts:['Steady worsening of symptoms from the onset', 'periods of complete remission', 'Absence of relapses', 'Progressive disease with incomplete remissions and occasional relapses'],
    box:null },

  { n:246, p:48, key:'C', keyName:null,
    stem:'What is the most common presenting manifestation in MS?',
    opts:['Motor manifestations', 'Optic neuritis', 'Sensory symptoms', 'Brainstem manifestations'],
    box:null },

  { n:247, p:48, key:'C', keyName:null,
    stem:'Which of the following symptoms can temporarily worsen with increased body temperature in multiple sclerosis patients?',
    opts:['Optic neuritis', 'Fatigue', 'Sensory symptoms', 'Cognitive symptoms'],
    box:'Explanation: This is Uhthoff phenomenon' },

  { n:248, p:48, key:'C', keyName:null,
    stem:'Which of the following is the most common cause of diplopia in (MS)?',
    opts:['Optic neuritis', 'Nystagmus', 'Internuclear ophthalmoplegia'],
    box:null },

  { n:249, p:48, key:'B', keyName:null,
    stem:'Which of the following paroxysmal symptoms is characterized by an electrical or tingling sensation triggered by neck flexion?',
    opts:['Trigeminal neuralgia', 'Lhermitte\'s sign', 'Painful tonic spasms'],
    box:null },

  { n:250, p:48, key:'C', keyName:null,
    stem:'A 36-year-old male patient with a long history of relapsing-remitting multiple sclerosis, develops double vision. On examination of his eye movements abduction of either eye elicits nystagmus in that eye. Adduction is impaired in both eyes. On MRI scanning. Where will a new white matter lesion probably evident?',
    opts:['Cerebellum', 'Cingulate gyrus', 'Medial longitudinal bundle', 'Optic chiasma', 'Parietal lobes'],
    box:'Explantion: Impairment of adduction in both eyes signifies an internuclear ophthalmoplegia. This is often accompanied by nystagmus of the abducting eye. of the brain affected is the medial longitudinal bundle in the brain stem which connects the 3rd and 6th nerve nuclei.' }
];
