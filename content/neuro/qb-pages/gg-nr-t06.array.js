// Grade Gain — `neuropsychiatry & neurosurgery qb.pdf`
// SECTION 1 (Neurology), TOPIC 06 — "Hemiplegia & Paraplegia"
// Book pp.22-26  =  PDF pp.27-31.  PDF page = book page + 5 (re-verified: PDF 27 prints book p.22).
// PDF 32 (book p.27) opens topic 07 "Headache" at Q119 — confirms the topic ends at Q118.
//
// VERBATIM STAGING. Typos, stray characters and mangled words are kept EXACTLY as printed here;
// they are repaired in gg-nr-t06.draft.js and every repair is recorded in the manifest.
//
// PRINTED: 30 questions, Q89-Q118. Contents page promised 30 — exact for the first time in
//          this bank (psychiatry's topics had all run over).
// ANSWERS: right-hand column of book p.25 (PDF 30) for Q89-107, then book p.26 (PDF 31) for
//          Q108-118. The answer block prints the LETTER ONLY — no option name is repeated
//          beside it — so the letter/name mismatch defect of topic 02 (npqb-nr-23) cannot
//          arise anywhere in this topic. Nothing spills onto PDF 32.
// BOXES:   2 of 30 (Q107, Q108). Both sit under their own answer line on the answer pages.
// FIGURES: none printed anywhere in PDF 27-31. No crops taken.
// MULTI-ANSWER ("choose as many as applies"): NONE in this topic. Q95 prints a COMBINED option
//          ("e. [B and D]") which is an ordinary distractor, not a multi-answer instruction —
//          same precedent as Q58 in topic 04. So no free-text cases arise here.
//
// ⚠️ Q113-Q118 are a MATCHING SET under the header "Mcq on Gaits" with ONE shared option list of
//    TEN entries whose printed letters are NON-CONTIGUOUS: A B C D E F J k L M (G, H and I are
//    skipped, and "k" is printed lower-case). The shared list is reproduced once below as
//    GAIT_OPTIONS and each question carries `sharedOpts:'GAIT_OPTIONS'`.

var GG_NR_T06_GAIT_OPTIONS = [
  'A. Alzheimer’s dementia',
  'B. cerebellar ataxia',
  'C. femoral nerve injury',
  'D. Duchenne',
  'E. myopathy gait',
  'F. Parkinson’s disease',
  'J. Hemiplegia',
  'k. sensory ataxia',
  'L. spastic gait',
  'M. Sydenham ’s chorea'
];

var GG_NR_T06_STAGED = [

{ n:89, p:22, key:'B',
  stem:'Male patient presented with dense left hemiplegia, hemihypoasthesia and left upper motor neuron facial palsy. The most likely location of the lesion is:',
  opts:['Premotor cortex','Internal capsule','Pons','Upper cervical segments of the cord'] },

{ n:90, p:22, key:'D',
  stem:'Spinal hemiplegia is characterized by of the following:',
  opts:['Ipsilateral hemiplegia and ipsilateral loss of pain sensation',
        'Contra-lateral hemiplegia and ipsilateral loss of pain sensation',
        'Ipsilateral hemiplegia and contralateral loss of joint sense',
        'Ipsilateral hemiplegia and ipsilateral loss of joint sense'] },

{ n:91, p:22, key:'D',
  stem:'A 25 yrs. old female presenting with acute onset of left hemiplegia. Past history of transient loss of vision in the Rt eye. examination: vision in right eye is counting fingers at 50 cm, left sided weakness and hypothesia. Rt extensor planter. What is the most diagnostic investigation?',
  opts:['Computed tomography brain','Electroencephalography','Evoked potentials','Magnetic resonance imaging of the brain','Cerbrospinal fluid analysis'],
  note:'⚠️ The stem gives LEFT-sided weakness but a RIGHT extensor plantar. One of the two sides is a misprint; the extensor plantar should be on the paralysed (left) side. Recorded, not corrected in the key — the key does not turn on it.' },

{ n:92, p:22, key:'D',
  stem:'When examining a patient, you find of Left sided hemiplegia and loss of superficial sensation in the right side of body. What is the most likely site of the lesion?',
  opts:['Cerebral cortex','Internal capsule','Brain stem','Cervical cord'] },

{ n:93, p:22, key:'B',
  stem:'A patient presents with hemiplegia following a stroke. During the initial phase (shock stage), the affected side shows:',
  opts:['Increased muscle tone and hyperreflexia','Loss of muscle tone and power','Spasticity and clonus','Muscle rigidity with normal reflexes'] },

{ n:94, p:22, key:'B',
  stem:'A patient presents with right-sided hemiplegia and weakness of the left upper and lower face. The most likely site of the lesion is:',
  opts:['Right cerebral cortex','Left pontine lesion','Right pontine lesion','Left internal capsule'] },

{ n:95, p:22, key:'D',
  stem:'Hemiplegia due to cortical lesion is NOT associated with:',
  opts:['Aphasia','Seizures','Cortical sensory loss','Visual field defect','[B and D]'],
  note:'Option e is printed in square brackets exactly as shown. It is a COMBINED option, not a multi-answer instruction.' },

{ n:96, p:23, key:'A',
  stem:'A patient presents with right-sided tongue deviation and left hemiplegia. The most likely site of the lesion is:',
  opts:['Right medullary lesion','Left medullary lesion','Left internal capsule lesion','Right cerebral cortex lesion'] },

{ n:97, p:23, key:'C',
  stem:'50y Female diabetic and hypertensive presenting with hemiplegia, heartrate was sinus rythm. The type of stroke is:',
  opts:['Embolic.','hemorrhagic.','C)thrombotic.'],
  note:'THREE options only — verified at 220 dpi, it is not a rendering cut. Option c prints a stray "C)" before the word.' },

{ n:98, p:23, key:'C',
  stem:'Female patient with acute onset of paraplegia with sensory level at T6. Which of the following statements will be not true for her?',
  opts:['Abdominals lost bilaterally','Double sphincteric affection','Glove and stocking hypoesthesia','Extensor planter bilaterally.'] },

{ n:99, p:23, key:'B',
  stem:'A 60-year-old female patient presents with recurrent headaches for the past year and paraplegia in both lower limbs for the last 6 months. The headaches are increasing in frequency, occurring daily. Examination reveals bilateral pyramidal signs and loss of cortical sensation in both lower limbs. What is the most likely lesion?',
  opts:['Brown squared syndrome','Central paraplegia','Brainstem lesion','GBS'],
  note:'Option a is printed "Brown squared syndrome" — a mangling of Brown-Séquard.' },

{ n:100, p:23, key:'C', ref:99,
  stem:'In previous case, where is the lesion most likely located in this case?',
  opts:['Peripheral nerve','Basal ganglia','Parasagittal region of Brian','Spinal cord'],
  note:'Back-reference to Q99. Option c prints "Brian" for "brain".' },

{ n:101, p:23, key:'B', ref:99,
  stem:'In previous case, what is the best investigation to confirm the diagnosis?',
  opts:['Electromyography (EMG)','Brain imaging (CT/MRI)','Spinal cord MRI','Lumbar puncture'],
  note:'Back-reference to Q99 (the antecedent is the 60-year-old woman, not Q100).' },

{ n:102, p:23, key:'A',
  stem:'A 30-year-old female, who delivered a healthy baby 5 days ago, presents with a history of coagulation disorder and DVT. She now complains of headache, confusion, and after a few hours, develops lower limb paraplegia. First investigation to be done:',
  opts:['CT brain','MRI of the spine','Doppler ultrasound of the lower limbs','Lumbar puncture'] },

{ n:103, p:23, key:'B', ref:102,
  stem:'In previous case, where is the lesion most likely located based on the patient’s symptoms?',
  opts:['Brainstem','Cortical','Spinal cord','Peripheral nerves'] },

{ n:104, p:23, key:'C', ref:102,
  stem:'In previous case, what type of sensation is expected to be affected in this patient?',
  opts:['Loss of proprioception','Loss of pain and temperature sensation','Loss of cortical sensation','Loss of light touch sensation'] },

{ n:105, p:24, key:'D',
  stem:'Which is not a feature of ‘stage of neural shock’ in hemiplegia:',
  opts:['Retention of urine','Coma','Absent deep jerks','Hypertonia'] },

{ n:106, p:24, key:'D',
  stem:'Crossed hemiplegia indicates the site of lesion in:',
  opts:['Internal capsule','Cortex','Cervical spine','Brainstem','Basal ganglia'] },

{ n:107, p:24, key:'D',
  stem:'A 25 year-old male presents with an eight-week history of difficulty walking. On examination he had increased tone and pyramidal weakness of the right leg. There was, impairment of pinprick sensation in the left leg up to the groin. Which one of the following is the cause of these signs?',
  opts:['A central cauda equina lesion','A cervical spinal cord lesion','A lesion at the foramen magnum','A right sided thoracic spinal cord lesion','Bilateral cerebral hemisphere lesions'],
  box:'The clinical features suggests Brown Sequard syndrome. A hemi-cord lesion causes it. Ipsilateral signs include pyramidal weakness and dorsal column dysfunction (joint position and light touch) and contralateral signs include spinothalamic dysfunction (pinprick and temperature). Causes include trauma, tumors, and multiple sclerosis).' },

{ n:108, p:24, key:'D',
  stem:'A 19-year-old female presents with a 3 days’ history of progressive weakness and numbness of her legs, urinary retention and back pain 2 weeks following an upper respiratory infection. On examination there is spastic Para paresis, sensory level up to T5, extensor planters. Examination of cranial nerves and upper limbs is normal. MRI of the spine is normal. What is the most likely diagnosis?',
  opts:['Anterior spinal artery occlusion','Guillain Barre syndrome','Multiple sclerosis','Post-infectious transverse myelitis','Thoracic disc prolapse'],
  box:'Transverse myelitis usually follows an upper respiratory tract infection. It causes a complete spinal cord syndrome. MRI spine may show an intrinsic inflammatory lesion or be normal. Multiple sclerosis usually causes a partial spinal cord syndrome (asymmetrical paraparesis). Anterior spinal artery occlusion causes an acute onset of spinal cord syndrome with spinal shock (flaccid paraplegia). GBS causes lower motor neuron signs.' },

{ n:109, p:24, key:'A',
  stem:'Spastic paraplegia is not produced by:',
  opts:['Guillain-Barre syndrome','Cord compression','Ant. spinal artery occlusion','Transverse myelitis'] },

{ n:110, p:24, key:'D',
  stem:'Capsular hemiplegia is characterized by:',
  opts:['Coma','Convulsions','Aphasia','Complete hemiplegia','Cortical blindness'] },

{ n:111, p:24, key:'C',
  stem:'Which of the following site of affection leads to segmental sensory loss?',
  opts:['Cerebral hemisphere','Brain stem','Spinal root','Multiple nerves','Dorsal 5 segment'] },

{ n:112, p:25, key:'C',
  stem:'Which of the following historical findings would argue against a spinal cause for Para paresis?',
  opts:['Urinary incontinence','Sudden onset','Absence of back pain','Fecal incontinence'] },

// ---- "Mcq on Gaits" — matching set, shared 10-item option list (GG_NR_T06_GAIT_OPTIONS) ----
// The header prints only the two words "Mcq on Gaits" above the list. No instruction sentence is
// printed; the stems are bare descriptions ending in a colon.

{ n:113, p:25, key:'F', sharedOpts:'GAIT_OPTIONS',
  stem:'A 65-year-old man with a festinant, shuffling gait:' },

{ n:114, p:25, key:'L', sharedOpts:'GAIT_OPTIONS',
  stem:'A 65-year-old man presents after a stroke with a stiff right leg that drags forward in an arc:' },

{ n:115, p:25, key:'K', sharedOpts:'GAIT_OPTIONS',
  stem:'A broad-based high-stepping gait in a known alcoholic:',
  note:'The key prints upper-case "K"; the option list prints lower-case "k. sensory ataxia".' },

{ n:116, p:25, key:'B', sharedOpts:'GAIT_OPTIONS',
  stem:'A broad-based unstable gait with veering to the right side:' },

{ n:117, p:25, key:'J', sharedOpts:'GAIT_OPTIONS',
  stem:'A 65-year-old man with a festinant, Circumduction gait:',
  note:'⚠️ "festinant" and "Circumduction" belong to two different gaits. See the manifest — this is a defect.' },

{ n:118, p:25, key:'D', sharedOpts:'GAIT_OPTIONS',
  stem:'A 12-year-old child complain of Waddling gait:' }

];
