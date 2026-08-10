/* Grade Gain — ENT QB.pdf, Ear chapter 9: "Vertigo and vestibular diagnosis".
 * Questions book pp.40–42 (PDF 49–51); answers book p.43 (PDF 52), all on one page.
 * THIS CLOSES THE EAR SECTION.
 *
 * ⚠️ 26 PRINTED WHERE THE CONTENTS PAGE PROMISES 25 — Q236 … Q261.
 * ⚠️⚠️ THE NUMBERING RESTARTS AT THE SECTION BOUNDARY, NOT AT THE CHAPTER.
 *    Book p.44 opens "CHAPTER 2: NOSE — Anatomy of the nose — Questions — 1."
 *    So the continuous run Q1…Q261 covers the EAR section only, and Nose begins
 *    again at 1. Verified by rendering PDF p.53. Ids for Nose must carry the
 *    section, or they will collide with the Ear numbers.
 * ⚠️ Q245 prints TWO questions in one stem — "what is the most probable cause?"
 *    followed by "The pathology of the previous disease is characterized by
 *    which of the following?" — and the options answer only the second.
 * ⚠️ Q256 prints only THREE options.
 *
 * Verbatim as printed. Repairs are applied in questions.ent.js, never here.
 */
var GG9_STAGED = [

{ n:236, page:40, apage:43, stem:'Which of the following is true regarding vertigo?',
  options:['It is a subjective sense of motion, either of the patient or of the surroundings.','It is an objective sense of motion, indicating actual movement.','Its characteristic is true loss of balance.','It only occurs when there is a structural abnormality in the inner ear.'],
  answer:0, exp:null },

{ n:237, page:40, apage:43, stem:'Which of the following is true regarding central nystagmus?',
  options:['It is suppressed by visual fixation','It is always horizontal.','It may be direction-changing.','It typically fatigues with time.'],
  answer:2, exp:null },

{ n:238, page:40, apage:43, stem:'Which of the following is true regarding peripheral nystagmus?',
  options:['It is suppressed by visual fixation','It is always vertical.','It does not fatigue.','It is only spontaneous, not induced.'],
  answer:0, exp:null },

{ n:239, page:40, apage:43, stem:'In vestibular neuritis, which of the following is true regarding nystagmus?',
  options:['The slow phase is toward the healthy ear, and the rapid phase is toward the diseased ear.','The slow phase is toward the diseased ear, and the rapid phase is toward the healthy ear.','Both the slow and rapid phases are towards the diseased ear.','Both the slow and rapid phases are towards the healthy ear.'],
  answer:1, exp:null },

{ n:240, page:40, apage:43, stem:'Which of the following is the most common cause of central vertigo?',
  options:['Benign paroxysmal positional vertigo (BPPV)','Vestibular neuritis','Migraine-associated vertigo','Meniere\'s disease'],
  answer:2, exp:null },

{ n:241, page:40, apage:43, stem:'Which of the following is the most common cause of peripheral vertigo?',
  options:['Vestibular neuritis','Meniere\'s disease','Benign paroxysmal positional vertigo (BPPV)','Migraine-associated vertigo'],
  answer:2, exp:null },

{ n:242, page:40, apage:43, stem:'A patient presents with attacks of vertigo that last for seconds with changing position, with no associated hearing loss. What is the most likely diagnosis?',
  options:['Meniere\'s disease','Vestibular neuritis','Benign paroxysmal positional vertigo (BPPV)','Migraine-associated vertigo'],
  answer:2, exp:null },

{ n:243, page:40, apage:43, stem:'In the previous case diagnosis is done through',
  options:['Audiometry','MRI of the brain','Dix-Hallpike test','Caloric testing'], answer:2, exp:null,
  flag:'Linked to Q242 (BPPV). Repaired.' },

{ n:244, page:40, apage:43, stem:'In the previous case treatment is',
  options:['Antihistamines','Vestibular rehabilitation exercises','Epley maneuver','Surgery'], answer:2, exp:null,
  flag:'Linked to Q242 (BPPV). Repaired.' },

{ n:245, page:41, apage:43, stem:'A patient is having recurrent attacks of vertigo of 1 hour duration, unilateral hearing loss, tinnitus, what is the most probable cause? The pathology of the previous disease is characterized by which of the following?',
  options:['Increased pressure of perilymph','Endolymphatic hydrops','Otosclerosis','Cochlear nerve degeneration'],
  answer:1, exp:'The case is Meniere disease',
  flag:'⚠️ TWO questions printed as one stem; the options answer only the second. Repaired.' },

{ n:246, page:41, apage:43, stem:'A 42-year-old woman presents with intermittent vertigo, fluctuating low-frequency hearing loss, tinnitus, and a sensation of fullness in her right ear. The vertigo episodes last several hours and occur once or twice a month. Audiometry shows progressive low-frequency sensorineural hearing loss in the right ear. What is the most likely diagnosis?',
  options:['Vestibular neuritis','Meniere\'s disease','Acoustic neuroma','Benign paroxysmal positional vertigo (BPPV)'],
  answer:1, exp:null },

{ n:247, page:41, apage:43, stem:'A patient has severe vertigo for 3 days with nausea and vomiting, normal hearing, normal neurological assessment. Nystagmus is induced when examining the vestibular nerve. What is the most likely diagnosis?',
  options:['Meniere\'s disease','Benign paroxysmal positional vertigo (BPPV)','Vestibular neuritis','Acoustic neuroma'],
  answer:2, exp:null },

{ n:248, page:41, apage:43, stem:'A 40Y patient complaining of vertigo and hearing loss lasting for several days ,which of the following can be the diagnosis?',
  options:['BPPV','vestibular neuritis','labyrinthitis','Meniere\'s disease'], answer:2, exp:null },

{ n:249, page:41, apage:43, stem:'In Benign Paroxysmal Positional Vertigo (BPPV), which semicircular canal is most commonly affected?',
  options:['Anterior semicircular canal','Posterior semicircular canal','Horizontal (lateral) semicircular canal','All semicircular canals are equally affected'],
  answer:1, exp:null },

{ n:250, page:41, apage:43, stem:'A patient with unilateral sensorineural hearing loss or unilateral tinnitus next step is',
  options:['Reassurance','MRI to exclude vestibular schwannoma','CT to exclude vestibular schwannoma','tympanometry'],
  answer:1, exp:'Any patient with unilateral otologic symptom → suspect Vestibular schwannoma' },

{ n:251, page:41, apage:43, stem:'In a patient with Vestibular Schwannoma, which of the following is most commonly seen on speech discrimation and ABR?',
  options:['Normal wave V and short interval between wave I and II,poor speech discrimination','Delayed wave V and prolonged interval between wave I and II,poor speech discrimination','Normal speech discrimination and intact auditory brainstem response','Increased speech discrimination score and delayed ABR waveforms'],
  answer:1, exp:null,
  flag:'The stem prints "discrimation" for discrimination.' },

{ n:252, page:42, apage:43, stem:'What is the type of hearing loss commonly associated with Superior Semicircular Canal Dehiscence (SSCD)?',
  options:['Sensorineural hearing loss (SNHL)','Mixed hearing loss','Conductive hearing loss (CHL)','Central hearing loss'],
  answer:2, exp:null },

{ n:253, page:42, apage:43, stem:'Which of the following is a known cause of Tullio phenomenon?',
  options:['Otosclerosis','Superior Semicircular Canal Dehiscence','Acoustic Neuroma','Presbycusis'],
  answer:1, exp:'on exposure to high intensity sounds (Tulio\'s phenomenon):\n• Meniere\'s disease\n• Third window' },

{ n:254, page:42, apage:43, stem:'Which semicircular canal is most commonly affected in cholesteatoma-induced fistula?',
  options:['Anterior semicircular canal','Lateral semicircular canal','Posterior semicircular canal','None of the above'],
  answer:1, exp:null },

{ n:255, page:42, apage:43, stem:'All of the following causes of vertigo are associated with hearing loss except',
  options:['vestibular neuritis','Meniere\'s disease','superior semicircular canal dehiscence','labyrinthitis'],
  answer:0, exp:null },

{ n:256, page:42, apage:43, stem:'All of the following are causes of vertigo and nystagmus without hearing loss except',
  options:['vestibular neuritis','superior semicircular canal dehiscence','BPPV'], answer:1, exp:null,
  flag:'Only three options printed.' },

{ n:257, page:42, apage:43, stem:'Which of the following statements about the caloric test is correct?',
  options:['Cold water causes nystagmus toward the same ear.','Warm water causes nystagmus toward the opposite ear','Cold water causes nystagmus toward the opposite ear.','Warm water causes no nystagmus.'],
  answer:2, exp:null },

{ n:258, page:42, apage:43, stem:'A patient has vertigo lasting for minutes when changing her position to the right-side during sleep, which improves afterward. Vertigo is induced on performing the Hallpike maneuver. What is the next step?',
  options:['Prescribe vestibular sedatives.','Perform Epley maneuver.','Order MRI of the brain.','Start antihistamines.'],
  answer:1, exp:'The case is BPPV' },

{ n:259, page:42, apage:43, stem:'The first step to diagnose vertigo is',
  options:['MRI','EEG','History','PTA'], answer:2, exp:null },

{ n:260, page:42, apage:43, stem:'Which of the following is NOT a treatment option for Meniere\'s disease?',
  options:['Low-salt diet','Betahistine to improve inner ear blood flow','Antiviral therapy as a first-line treatment','Diuretics to reduce fluid pressure'],
  answer:2,
  exp:'Treatment includes :Low salt diet, diuretics\nIn between attacks → give **betahestine**\nIntra Tympanic injection of corticosteroid\nIntra Tympanic of gentamicin (is more vestibulotoxic than ototoxic)\nSurgery:\nNo serviceable hearing → Labyrinthectomy\nServiceable hearing (Good hearing) → Selective vestibular neurectomy',
  flag:'The printed box writes "betahestine" for betahistine.' },

{ n:261, page:42, apage:43, stem:'Which of the following is a treatment option for Meniere\'s disease?',
  options:['High-salt diet','Diuretics and low salt diet','Complete bed rest for weeks','Surgery is the first-line treatment'],
  answer:1, exp:null }

];
