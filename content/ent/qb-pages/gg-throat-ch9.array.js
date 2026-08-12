/* Grade Gain — ENT QB.pdf, CHAPTER 3: THROAT, topic 9: "Simplified Phoniatrics Principles"
   Verbatim staging, read 2026-08-12.

   Questions  book pp.153–158  (PDF 162–167)
   Answers    book pp.159–160  (PDF 168–169)

   ⚠️ THE BOUNDARY DEFECT FIRED FOR THE SECOND TOPIC RUNNING, AND HARDER. The contents map gives
   the answer page as 159. The keys for Q477–Q500 — TWENTY-FOUR OF FIFTY-SEVEN — are on p.160.
   Rendering one page past the last answer page is what caught them.

   57 printed, Q444 … Q500, against 56 promised — over by one. Nineteenth time the count has run
   high; the page RANGE was right again.

   ⚠️ NO QUESTION TAIL ON THE ANSWER PAGE this time: p.158 ends with Q500 and p.159 opens with the
   "Answers" banner. The other half of the ch.5 double defect did not fire.

   PRINTED EXPLANATION BOXES: 4 of 57 (~7 %) — Q459, Q493, Q495, Q499. Box presence is a property
   of the PAGE as always: all four sit on the two answer pages, none in the question run.

   `key` is the 0-based index of the printed key. `box` is the source's own explanation, verbatim.
   `note` records a defect or a transcription repair. `ref` is a back-reference antecedent.        */

var GGT9_STAGED = [

{ n:444, p:153, key:0,
  stem:'All of the following are true about communication disorders except:',
  opts:['Phonation is vibration of the abducted tense vocal cords by the expired air',
        'Speech is the articulation of voice into words',
        'Language is the method of human communication',
        'Phonation is produced by the larynx'] },

{ n:445, p:153, key:2,
  stem:'All of the following are true about Vocal fold structure except:',
  opts:['Epithelium is nonkeratinized stratified squamous epithelium',
        'Middle and deep layers of lamina propria are dense CT',
        'vocalis muscle is thyrocricoid',
        'Reinke’s space is formed of loose areolar connective tissue'] },

{ n:446, p:153, key:3,
  stem:'Which of the following is NOT a prerequisite for normal voice production?',
  opts:['Optimal pulmonary support','Optimal coaptation of vocal cords',
        'Normal mucosal movement','High-frequency vibration of vocal cords'] },

{ n:447, p:153, key:1,
  stem:'What is the primary mechanism of phonation?',
  opts:['Vibration of the epiglottis','Adduction and vibration of the vocal cords by expired air',
        'Movement of the ventricular bands','Contraction of the cricothyroid muscle'] },

{ n:448, p:153, key:0,
  stem:'Which of the following is a feature of sulcus vocalis?',
  opts:['High-pitched, breathy voice','Low-pitched, resonant voice',
        'Complete glottic closure','Normal mucosal wave'] },

{ n:449, p:153, key:1,
  stem:'Which of the following is NOT true about Sulcus glottidaus?',
  opts:['Dysphonia starts at adulthood','It is more common in females',
        'It causes diplophonia','Surgery is the best choice'],
  note:'Source spells it "Sulcus glottidaus"; the entity is the sulcus glottidis / sulcus vocalis. Key (b) implies it is more common in MALES — consistent with the bank’s own Q463, which keys hyperfunctional dysphonia as the male exception.' },

{ n:450, p:153, key:3,
  stem:'Which of the following is NOT a type of laryngocele?',
  opts:['Internal laryngocele','External laryngocele','Combined laryngocele','Subglottic laryngocele'] },

{ n:451, p:153, key:2,
  stem:'Which of the following is NOT typical for Congenital laryngeal stenosis on examination?',
  opts:['Omega shaped epiglottic','Approximated aryepiglottic folds',
        'A web that partially occludes the glottis','Redundant mucosa over aryepiglottic ligament'],
  note:'⚠️ DEFECT: options a, b and d are the endoscopic findings of LARYNGOMALACIA, and a glottic web IS itself a form of congenital laryngeal stenosis. The key only works if the stem means "congenital laryngeal STRIDOR" — the older name for laryngomalacia. Record; do not dispute.' },

{ n:452, p:153, key:1,
  stem:'Which of the following causes biphasic stridor?',
  opts:['Cri du chat syndrome','Congenital subglottic stenosis','Chronic laryngitis','Sulcus glottidaus'] },

{ n:453, p:154, key:1,
  stem:'Which of the following is a feature of Cri du chat syndrome?',
  opts:['Low-pitched voice','Microcephaly and mental retardation',
        'Normal laryngeal structure','Hypernasality'] },

{ n:454, p:154, key:2,
  stem:'Which of the following organisms is the causative agent of laryngoscleroma?',
  opts:['Streptococcus pyogenes','Mycobacterium tuberculosis',
        'Klebsiella rhinoscleromatis','Haemophiles influenzae'],
  note:'Source prints "Haemophiles influenzae"; read as Haemophilus influenzae.' },

{ n:455, p:154, key:3,
  stem:'Which of the following causes bambo nodules?',
  opts:['Rheumatoid arthritis','Systemic lupus erythematosus','Systemic sclerosis','Tuberculosis'],
  note:'⚠️⚠️ DEFECT, AND THE MOST SERIOUS IN THIS TOPIC. Source prints "bambo"; the entity is BAMBOO NODES/NODULES, whose defining association is AUTOIMMUNE disease — classically SLE, then rheumatoid arthritis and Sjögren’s. Tuberculosis is not the standard association, and options (a) and (b) both are. Key held as printed per the standing ruling; discrepancy recorded in the explanation.' },

{ n:456, p:154, key:2,
  stem:'During voice production, which phase follows the "opening phase" of the phonatory cycle?',
  opts:['Closed phase','Closing phase','Open phase','Initiation phase'] },

{ n:457, p:154, key:0,
  stem:'The laryngoscope visualization of vocal fold vibrations is best achieved using which of the following?',
  opts:['Stroboscopic light','Rigid laryngoscope','Flexible nasopharyngoscopy','Direct laryngoscopy'] },

{ n:458, p:154, key:3,
  stem:'Which type of congenital anomaly is associated with failure of complete recanalization of the laryngotracheal tube?',
  opts:['laryngomalacia','Congenital laryngeal cyst','laryngocele','congenital subglottic stenosis'] },

{ n:459, p:154, key:2,
  stem:'A 65-year-old patient presents with a longstanding history of laryngeal dysphonia characterized by a weak and breathy voice. There is no evidence of structural lesions or neurological deficits on examination. What is the most likely diagnosis?',
  opts:['Spasmodic dysphonia','Hyper-functional dysphonia','Hypofunctional dysphonia','Vocal Fold Paralysis'],
  box:'the patient presents with a longstanding history of laryngeal dysphonia characterized by a weak and breathy voice: hypofunctional dysphonia.' },

{ n:460, p:154, key:1, ref:459,
  stem:'In the previous case, what is the primary physiological cause of the weak and breathy voice?',
  opts:['Excessive tension in the vocal folds','Incomplete glottal closure',
        'Vocal fold nodules','Laryngeal inflammation'] },

{ n:461, p:154, key:3,
  stem:'What is the first-line treatment for a patient diagnosed with hypofunctional dysphonia?',
  opts:['Surgical intervention','Antibiotics','Corticosteroids','Voice therapy'] },

{ n:462, p:155, key:1,
  stem:'Which of the following is NOT true about mutational voice disorder?',
  opts:['It occurs during puberty','It is characterized by depressed larynx',
        'Failure of change of high pitched to low pitched voice','It is treated by voice therapy'] },

{ n:463, p:155, key:3,
  stem:'All of the following are more common in males except:',
  opts:['Contact granuloma','Sulcus glottidaus','Mutational voice disorder','Hyper functional dysphonia'] },

{ n:464, p:155, key:2,
  stem:'Which of the following is characterized by normal voice?',
  opts:['Hyperfunctional dysphonia','Hypofunctional dysphonia','Phonasthenia','Ventricular dysphonia'] },

{ n:465, p:155, key:2,
  stem:'All of the following are common features between MAP lesions except:',
  opts:['They are predisposed by GERD','They present with change of voice',
        'They are more common in males','They have favorable prognosis'] },

{ n:466, p:155, key:3,
  stem:'Which of the following is true about vocal fold cyst?',
  opts:['It is an inter-folder cyst','It occurs only in puberty',
        'Treated by voice therapy only','Covering mucosa is normal'] },

{ n:467, p:155, key:0,
  stem:'Which of the following is commonly associated with chronic cough?',
  opts:['Contact granuloma','Mutational dysphonia','Cri du chat syndrome','Vocal fold nodules'] },

{ n:468, p:155, key:3,
  stem:'Which cranial nerve is NOT directly involved in articulation?',
  opts:['V (Trigeminal)','VII (Facial)','X (Vagus)','XI (Accessory)'] },

{ n:469, p:155, key:2,
  stem:'All of the following are true about dysarthria except:',
  opts:['Hyperkinetic type occurs in dystonia','Flaccid type occurs in LMNL',
        'Hypokinetic types occur in athetosis','Ataxic type occurs in cerebellar lesion'] },

{ n:470, p:155, key:3,
  stem:'Which of the following occurs due to extra-pyramidal lesion and causes expressionless speech?',
  opts:['Mixed dysarthria','Slurred speech','Staccato speech','Monotonous speech'] },

{ n:471, p:155, key:1,
  stem:'Lack of distinction between the letters K, T, G, D is known as which of the following?',
  opts:['Dysarthria','Dyslalia','Stuttering','Echolalia'] },

{ n:472, p:155, key:0,
  stem:'What is the most common cause of Dyslalia?',
  opts:['Residual','Down syndrome','missed teeth','Enlarged tongue'] },

{ n:473, p:156, key:3,
  stem:'What is the most accepted theory of Stuttering?',
  opts:['Psychological theory','Organic theory','Hormonal theory','Genetic theory'] },

{ n:474, p:156, key:3,
  stem:'All of the following are true about stuttering except:',
  opts:['It is disrupted fluency of verbal expression','Covert type is associated with sweating',
        'No exact cause, only theories','80% need psychological therapy'] },

{ n:475, p:156, key:0,
  stem:'What is the most common cause of hyponasality?',
  opts:['Adenoid','Common cold','Sinusitis','Pneumonia'] },

{ n:476, p:156, key:1,
  stem:'All of the following are true about nasality except:',
  opts:['Hyponasality is caused by bilateral nasal obstruction','Cleft palate causes hyponasality',
        'Hypernasality characterized by inability to produce K, P and D letters',
        'Supraglottic mass causes a hot potato voice'] },

{ n:477, p:156, key:1,
  stem:'Which of the following is a feature of hypernasality?',
  opts:['Decreased nasal tone','Nasal emission during speech',
        'Inability to produce nasal letters (M, N)','Hot potato voice'] },

{ n:478, p:156, key:3,
  stem:'What is the most common cause of dyslexia?',
  opts:['Brain damage','Hearing impairment','Visual impairment','Genetic factors'] },

{ n:479, p:156, key:0,
  stem:'Which of the following is a feature of receptive aphasia?',
  opts:['Difficulty in understanding language','Difficulty in producing language',
        'Mixed language impairment','Normal comprehension with impaired expression'] },

{ n:480, p:156, key:1,
  stem:'What is the primary cause of aphasia?',
  opts:['Vocal cord paralysis','Cerebrovascular stroke','Laryngeal trauma','Hearing loss'] },

{ n:481, p:156, key:0,
  stem:'Which of the following is a feature of echolalia?',
  opts:['Repetition of the last syllables heard','Difficulty in articulation',
        'Nasal emission','Voice fatigue'] },

{ n:482, p:156, key:2,
  stem:'Which of the following is a feature of vocal fold bowing?',
  opts:['Complete glottic closure','High-pitched voice','Gap between the vocal folds','Nasal emission'] },

{ n:483, p:157, key:1,
  stem:'What is the most common cause of delayed language development?',
  opts:['Autism','Sensory neural hearing loss','Minimal brain damage','Environmental deprivation'] },

{ n:484, p:157, key:0,
  stem:'Which type of aphasia is associated with a lesion in Broca’s area?',
  opts:['Expressive aphasia','Receptive aphasia','Global aphasia','Mixed aphasia'] },

{ n:485, p:157, key:3,
  stem:'What is the typical site of laryngoscleroma?',
  opts:['Epiglottis','False cords','True cords','Subglottic region'] },

{ n:486, p:157, key:2,
  stem:'A 14-year-old male has recently entered puberty. His parents notice that his voice frequently shifts between high and low pitches, especially when he speaks for extended periods. He feels self-conscious about his voice and avoids speaking in public. What is the most likely diagnosis?',
  opts:['Vocal fold nodules','Spasmodic dysphonia','Mutational voice disorder','Acute laryngitis'] },

{ n:487, p:157, key:2,
  stem:'Parkinsonism is usually associated with which of the following speech disorders?',
  opts:['Dyslalia','Stuttering','Dysarthria','Hypernasality'] },

{ n:488, p:157, key:3,
  stem:'Psychogenic aphonia / dysphonia is characterized by which of the following?',
  opts:['Poor voice quality','History of psychological trauma','Capability of coughing','All of the above'] },

{ n:489, p:157, key:1,
  stem:'A 10-year-old child presents with enlarged adenoids obstructing the nasopharynx. What is the most likely effect of adenoid on voice?',
  opts:['Rhinolalia Aperta','Rhinolalia clausa','Stuttering','Dysarthria'] },

{ n:490, p:157, key:0,
  stem:'Environmental cultural deprivation due to chronic illness leading to prolonged isolation of a child causes which of the following?',
  opts:['Delayed language development','Stuttering','Dysphonia','Dyslalia'] },

{ n:491, p:157, key:1,
  stem:'The following are minor associated pathological lesions of the larynx except:',
  opts:['Laryngeal polyp','Cancer larynx','Vocal nodule','Reineck’s Edema'],
  note:'Source prints "Reineck’s Edema"; read as Reinke’s oedema.' },

{ n:492, p:157, key:1,
  stem:'Why is the commonest site for the formation of vocal nodules between the anterior 1/3 & posterior 2/3?',
  opts:['Redundant mucosa','Maximum site of friction between the vocal folds',
        'High vascularity','Elasticity of the vocal folds'] },

{ n:493, p:158, key:1,
  stem:'A 35-year-old teacher presents with a strained, leaky voice and complains of vocal fatigue after prolonged speaking. On examination, the vocal folds are hyperemic and swollen, with phonatory waste and ventricular hypertrophy. What is the most likely diagnosis?',
  opts:['Hypofunctional dysphonia','Hyperfunctional dysphonia','Vocal fold nodules','Reinke’s edema'],
  box:'strained, leaky voice with hyperemic and swollen vocal folds, phonatory waste, and ventricular hypertrophy: Hyperfunctional dysphonia' },

{ n:494, p:158, key:3, ref:493,
  stem:'In the previous case, what is the primary treatment for this condition?',
  opts:['Surgical Excision','Vocal Fold Injection','Tracheotomy','Voice therapy'] },

{ n:495, p:158, key:1,
  stem:'A 45-year-old singer presents with an irregular, strained, and leaky low-pitched voice. On laryngoscope examination, hypertrophic, hyperactive ventricular folds are observed, and secondary compensatory hypertrophy and red, injected hypertrophic ventricular bands. What is the most likely diagnosis?',
  opts:['Vocal fold nodules','Ventricular dysphonia','Reinke’s edema','Spasmodic dysphonia'],
  box:'the patient presented with an irregular, strained, and leaky low-pitched voice, hypertrophic and hyperactive ventricular folds and secondary compensatory hypertrophy: ventricular dysphonia' },

{ n:496, p:158, key:2, ref:495,
  stem:'What is the primary treatment for the previous condition?',
  opts:['speech therapy','Vocal Fold Injection','Surgical trimming of ventricular folds','Tracheotomy'],
  note:'⚠️ Keys SURGICAL trimming for ventricular dysphonia while Q494 keys VOICE THERAPY for hyperfunctional dysphonia — two hyperfunctional conditions, opposite first treatments. Check against `L8` before writing.' },

{ n:497, p:158, key:1,
  stem:'What is the speech disorder present in a 3-year-old child with cleft palate?',
  opts:['Rhinolalia clausa','Rhinolalia Aperta','Hot potato voice','Stuttering'],
  note:'⚠️ Pairs with Q476, whose option (b) "Cleft palate causes hyponasality" is keyed FALSE. Consistent: cleft palate gives hyperNasality = rhinolalia aperta.' },

{ n:498, p:158, key:1,
  stem:'What is the characteristic of overt stuttering?',
  opts:['word substitution','repetition','speech filler','starting tricks'] },

{ n:499, p:158, key:3,
  stem:'What is the core symptom of aphasia?',
  opts:['Agnosia','Apraxia','Aphonia','Anomia'],
  box:'Anomia: difficulty in finding the right words when speaking, common characteristic of aphasia' },

{ n:500, p:158, key:1,
  stem:'A 50-year-old patient presents with slurred speech, particularly with difficulty pronouncing labial (B, P) and dental (F, V) letters. Neurological examination reveals no other significant abnormalities. What is the most likely cause of this patient’s speech defect?',
  opts:['Lesion in the cerebellum','Lesion in the pyramidal tract',
        'Lesion in the extra-pyramidal tract','Velopharyngeal insufficiency'] }

];
