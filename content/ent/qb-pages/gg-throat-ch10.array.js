/* Grade Gain — ENT QB.pdf, CHAPTER 3: THROAT, topic 10: "Hoarseness Of Voice"
   Verbatim staging, read 2026-08-12.

   Questions  book pp.161–169  (PDF 170–178)
   Answers    book pp.170–171  (PDF 179–180)

   ⚠️ PDF page = book page + 9, as for every Grade Gain topic.

   66 printed, Q501 … Q566, against 66 promised — EXACT. Only the sixth exact count in
   twenty-three topics; the run of upward errors did not continue here.

   NO QUESTION TAIL ON THE FIRST ANSWER PAGE: p.169 ends with Q566 and p.170 opens with the
   "Hoarseness Of Voice / Answers" banner. NO OVERRUN PAST THE ANSWER RUN EITHER: the keys occupy
   p.170 (Q501–Q535) and p.171 (Q536–Q566), and p.172 (PDF 181) opens the NEXT topic's banner,
   "Clinical Assessment of Voice", at Q567. PDF 181 and 182 were rendered anyway and confirm it.

   PRINTED EXPLANATION BOXES: 10 of 66 (~15 %) — Q527, Q529, Q532 on p.170 and Q536, Q542, Q543,
   Q547, Q549, Q550, Q554 on p.171. Box presence is a property of the PAGE as always: all ten sit
   on the two answer pages, none in the question run.

   FIGURES PRINTED WITH A QUESTION: ten — Q527 (p.163), Q529 and Q532 (p.164), Q536 and Q539
   (p.165), Q543 and Q547 (p.166), Q562 and Q563 (p.168), Q566 (p.169). All ten cropped to
   app\assets\q\q-gg-<book page>[a|b].jpg and looked at on a contact sheet; one (Q563) caught its
   own caption on the first pass and was re-cut. NO figure is printed on an answer page.

   BACK-REFERENCE CHAINS (the deck is shuffled — every one must be repaired at drafting):
     Q528 → Q527   Q530 → Q529   Q533 → Q532   Q537 → Q536   Q538 → Q536
     Q540 → Q539   Q544 → Q543   Q545 → Q543   Q546 → Q543   Q548 → Q547
   Ten of sixty-six = 15 %. Two of them (Q537, Q538) point at the SAME antecedent and ask two
   different things about it; three (Q544, Q545, Q546) point at Q543.

   `key` is the 0-based index of the printed key. `box` is the source's own explanation, verbatim.
   `note` records a defect or a transcription repair. `ref` is a back-reference antecedent.        */

var GGT10_STAGED = [

{ n:501, p:161, key:3,
  stem:'Lesions below vocal cord can produce which of the following?',
  opts:['Hoarseness of voice','Hot potato voice','Muffled voice','Weak voice'] },

{ n:502, p:161, key:2,
  stem:'Which of the following is NOT a layer of the vocal cord?',
  opts:['Epithelium','Reinke’s space','Cricothyroid ligament','Thyroarytenoid muscle'] },

{ n:503, p:161, key:1,
  stem:'Which of the following is not present in functional HOV?',
  opts:['History of psychic trauma','Inability to scream','Very bad quality of voice',
        'No organic lesion'] },

{ n:504, p:161, key:0,
  stem:'Which of the following is NOT a cause of MAP lesions?',
  opts:['Chronic cough','Voice trauma','GERD','Smoking'] },

{ n:505, p:161, key:1,
  stem:'All of the following are true about MAP lesions except:',
  opts:['Acute screaming usually causes polyps','Voice abuse usually causes contact granuloma',
        'Vocal cord web presents with abnormal cry','Congenital cysts may be asymptomatic'] },

{ n:506, p:161, key:2,
  stem:'What is the usual location of vocal nodules?',
  opts:['the junction between anterior 2/3 and the posterior 1/3 of the VCs',
        'in the middle of vocal cord',
        'the junction between anterior 1/3 and the posterior 2/3 of the VCs',
        'in the posterior half of vocal cord'],
  note:'⚠️ THE KEY AND THE LECTURE USE THE SAME LANDMARK UNDER TWO DIFFERENT NAMES. L2 places the nodule "at the junction of the anterior and middle thirds"; the bank offers only halves of the cord split 1/3 : 2/3 and keys the anterior-1/3 / posterior-2/3 boundary — which IS the anterior-third / middle-third junction. Option a (anterior 2/3 : posterior 1/3) is the same point measured from the other end and is wrong.' },

{ n:507, p:161, key:3,
  stem:'What is the most common cause of HOV in children?',
  opts:['Vocal polyp','Reinke’s Edema','Vocal cyst','Vocal nodule'] },

{ n:508, p:161, key:2,
  stem:'All of the following are true about vocal nodules except:',
  opts:['they occur due to voice abuse','They are usually bilateral',
        'They lead to hemorrhage in epithelium','It is treated by voice therapy'] },

{ n:509, p:161, key:1,
  stem:'Which of the following is NOT true about vocal polyps?',
  opts:['It’s usually a single unilateral lesson.','It causes high pitched HOV',
        'Large ones are treated by surgery','Acute onset of voice trauma causes it'],
  note:'Source prints "lesson" for "lesion" in option a. Left as printed here; corrected silently in the drafted stem.' },

{ n:510, p:161, key:2,
  stem:'Which of the following is located posteriorly at the origin of vocal cord?',
  opts:['Vocal polyp','Vocal nodule','Contact granuloma','Laryngocele'] },

{ n:511, p:162, key:1,
  stem:'Which of the following is a characteristic feature of Reinke’s edema?',
  opts:['High-pitched voice','Bilateral boggy swelling of the vocal cords',
        'Unilateral vocal cord paralysis','Associated with GERD only'] },

{ n:512, p:162, key:3,
  stem:'Which of the following is NOT a cause of primary adult laryngocele?',
  opts:['Congenital weakness','Persistent large saccule','Occupational','Granuloma'] },

{ n:513, p:162, key:1,
  stem:'What is the best description of Bryce’s sign?',
  opts:['Crackling sensation on palpation','Gurgling or hissing sound on compression',
        'Painful muscle spasms','Loss of sensation in the affected area'],
  note:'⚠️ "Bryce’s sign" appears in NONE of the 34 cached ENT lecture files (grep: 0 hits). L5) NECK MASS gives the laryngocele as a "Lateral compressible neck mass at level of hyoid" but never names the sign. Answered from general knowledge, tagged.' },

{ n:514, p:162, key:2,
  stem:'Which of the following is NOT true about leukoplakia?',
  opts:['It occurs due to smoking','It is treated by MLS with safety margins',
        'It is more dangerous than erythroplakia','It is precancerous'],
  note:'⚠️ Neither "leukoplakia" nor "erythroplakia" appears in ANY cached ENT lecture (grep: 0 hits across all 34 files). The whole premalignant-larynx group — Q514, Q518, Q534, Q550 — rests on outside knowledge, tagged.' },

{ n:515, p:162, key:1,
  stem:'Which of the following is NOT true about chronic specific laryngitis?',
  opts:['Mycosis is common during covid','Syphilis is in the posterior part of the vocal cord',
        'Laryngoscleroma is below the cords','Laryngoscleroma forms granuloma first then stenosis'],
  note:'L2 lists chronic specific laryngitis as "scleroma, TB, fungal" and places TB in the POSTERIOR larynx; syphilis it describes only by stage. The key turns on syphilis being ANTERIOR, which no slide states — TB is the posterior one. Tagged in the draft.' },

{ n:516, p:162, key:1,
  stem:'Which of the following is the most common cause of unilateral vocal cord paralysis?',
  opts:['Laryngoscleroma','Thyroidectomy','GERD','Smoking'],
  note:'⚠️ L2 lists bronchogenic carcinoma FIRST among malignant causes of unilateral VFP and thyroidectomy first among surgical ones; L11 gives no single commonest. Of what this menu offers, thyroidectomy is the only real cause, so the key stands on the option list rather than on a ranking.' },

{ n:517, p:162, key:2,
  stem:'Which of the following is a feature of laryngoscleroma?',
  opts:['Supraglottic granuloma formation','Unilateral vocal cord paralysis','Subglottic stenosis',
        'High-pitched voice'] },

{ n:518, p:162, key:3,
  stem:'Which of the following is NOT a premalignant lesion in larynx?',
  opts:['Leukoplakia','Erythroplakia','Adult papilloma','Laryngoscleroma','TB of larynx'],
  note:'⚠️ FIVE OPTIONS (a–e) — one of the small number of 5-option entries in the corpus. And ⚠️ THE BANK CONTRADICTS ITSELF ACROSS THIS GROUP: here TB of larynx is left standing as premalignant while laryngoscleroma is excluded; Q550 confirms it by keying Plummer-Vinson as the odd one out over TB of larynx.' },

{ n:519, p:162, key:2,
  stem:'All of the following are true about recurrent respiratory papillomatosis except:',
  opts:['It is caused by HPV type 6 and 11','It is a cauliflower in appearance',
        'Juvenile type is more liable for malignant transformation','Tracheotomy should be avoided'] },

{ n:520, p:162, key:3,
  stem:'All of the following are true about subglottic hemangioma except:',
  opts:['It is presented by biphasic stridor','It can be treated by Interferon',
        'It is most commonly at left posterior lateral quadrant of sub glottis',
        'It is diagnosed by biopsy'] },

{ n:521, p:163, key:0,
  stem:'What is the most common primary malignant tumor in the larynx?',
  opts:['Squamous cell carcinoma','Adenocarcinoma','Fibrosarcoma','Verrucous carcinoma'] },

{ n:522, p:163, key:1,
  stem:'Which of the following is the primary diagnostic tool for evaluating vocal cord vibrations?',
  opts:['Indirect laryngoscopy','Videostroboscopy','CT scan','MRI'] },

{ n:523, p:163, key:2,
  stem:'Which of the following is a feature of recurrent respiratory papillomatosis?',
  opts:['Caused by HPV types 16 and 18','Commonly malignant in children',
        'Presents as cauliflower-like lesions','Treated with antibiotics'] },

{ n:524, p:163, key:2,
  stem:'Recurrent respiratory papillomatosis in adults is characterized by which of the following?',
  opts:['Frequently recurrent','Affecting multiple sites',
        'More potentially malignant than that occurring in children',
        'Best treated by repeated laser excision'],
  note:'⚠️ THREE OF THE FOUR OPTIONS ARE TRUE OF RRP IN GENERAL — recurrence, multi-site disease and repeated laser excision all apply to the juvenile form too. Only option c is true OF ADULTS SPECIFICALLY, which is what makes the key defensible; the stem\'s "in adults" is doing all the work.' },

{ n:525, p:163, key:1,
  stem:'Which of the following tools is used to analyze more than 20 voice quality parameters?',
  opts:['Videostroboscopy','Multi-Dimensional Voice Program (MDVP)','Indirect laryngoscopy',
        'CT scan'],
  note:'⚠️ "MDVP" and the figure "more than 20 parameters" appear in NO cached ENT lecture. L8 covers acoustic analysis and lists pitch parameters but never names the MDVP software. Answered from general knowledge, tagged.' },

{ n:526, p:163, key:0,
  stem:'What is the main presentation of bilateral recurrent laryngeal nerve (RLN) injury?',
  opts:['Severe stridor','Hoarseness of voice','Dysphagia','Hypernasality'] },

{ n:527, p:163, key:0, img:'q-gg-163',
  stem:'A 40-year-old lawyer presents with HOV that improves during weekends and vacations. He reports prolonged periods of speaking in court and frequent voice strain. On examination, the attached photo is seen. What is the most likely diagnosis?',
  opts:['Vocal cord nodule','Vocal cord polyp','Contact granuloma','Reinke’s Edema'],
  box:'Explanation: the patient’s history of prolonged voice abuse and the presence of bilateral swellings at the junction of the anterior and posterior thirds of the vocal cords: vocal cord nodules' },

{ n:528, p:163, key:1, ref:527,
  stem:'What is the treatment of choice in the previous case?',
  opts:['Speech therapy','Voice therapy','Microlaryngealsurgery (MLS)','Antibiotics'],
  note:'⚠️ OPTIONS a AND b ARE A REAL DISCRIMINATION, NOT A DUPLICATE PAIR — L8 separates SPEECH disorders (dyslalia, stuttering, dysarthria, nasality) from VOICE disorders, and a nodule is a voice disorder. Speech therapy is the wrong discipline, not merely the second-best answer.' },

{ n:529, p:164, key:1, img:'q-gg-164a',
  stem:'A 25-year-old patient presents an acute onset of HOV following a loud scream at a concert. The voice is described as low-pitched and breathy. On laryngoscopic examination, the attached photo is seen. What is the most likely diagnosis?',
  opts:['Vocal cord nodule','Vocal cord polyp','Contact granuloma','Reinke’s Edema'],
  box:'Explanation: The acute onset of voice trauma (screaming) and the presence of a unilateral, edematous lesion on the vocal cord: vocal cord polyp' },

{ n:530, p:164, key:2, ref:529,
  stem:'What is the treatment of the previous case?',
  opts:['Voice therapy','Speech therapy','MLS','antibiotics'] },

{ n:531, p:164, key:3,
  stem:'A 25-year-old male presented to the ENT clinic with compressible mass in neck. What is the most likely diagnosis?',
  opts:['Enlarged LNs','Goiter','Branchial cyst','Laryngocele'],
  note:'Answer line prints "531. Correct answer: D." in lower case where every other line prints "Correct Answer" — typography only, no ambiguity.' },

{ n:532, p:164, key:2, img:'q-gg-164b',
  stem:'A 50-year-old patient with a long history of GERD) presents with HOV and a sensation of a lump in the throat. On laryngoscopic examination, the following view is seen. What is the most likely diagnosis?',
  opts:['Vocal cord polyp','Vocal cord nodule','Contact granuloma','Reinke’s Edema'],
  box:'Explanation: The patient’s history of GERD and the presence of a lobulated swelling on the vocal process of the arytenoid cartilage: contact granuloma',
  note:'Stem prints a stray closing bracket — "a long history of GERD) presents". Repaired in the draft.' },

{ n:533, p:164, key:3, ref:532,
  stem:'What is the first-line treatment for the previous case?',
  opts:['Microlaryngosurgery (MLS)','Voice therapy','Corticosteroid injection',
        'Antireflux measures'] },

{ n:534, p:164, key:2,
  stem:'Potentially malignant laryngeal lesions are all of the following except:',
  opts:['Leucoplakia','Adult papilloma','Reineke’s edema','Plummer-Vinson’s syndrome'],
  note:'⚠️ TWO OF THE FOUR OPTIONS ARE NOT PREMALIGNANT LARYNGEAL LESIONS. Reinke’s edema (keyed) is benign, but Plummer-Vinson is premalignant for POST-CRICOID (hypopharyngeal) carcinoma, not laryngeal — L10 puts it under hypopharyngeal tumours. The bank resolves the same clash the other way at Q550, where Plummer-Vinson IS the keyed exception. Held as printed at both, note in both.' },

{ n:535, p:164, key:0,
  stem:'What is the most common iatrogenic RLN injury in thyroidectomy?',
  opts:['Rt RLN','Lt RLN','Both of the above','None of the above'],
  note:'⚠️ SITS BESIDE THE BANK\'S OWN Q555, WHICH KEYS THE LEFT SIDE. Q555 asks why LEFT vocal fold paralysis is commoner overall (longer left RLN course — L11 states exactly that); this asks which nerve is injured at THYROIDECTOMY specifically, and keys the right. Not a self-contradiction — two different questions — but no cached lecture states the thyroidectomy-side figure either way. Tagged in the draft.' },

{ n:536, p:165, key:1, img:'q-gg-165a',
  stem:'A 60-year-old presents with stridor to the ER. He has a history of low-pitched HOV that has progressively worsened over the past year. The patient has a 30-pack-year smoking history and denies any recent infections or trauma. On physical examination, there is no evidence of neck masses or lymphadenopathy. Laryngoscopic examination view is attached below. What is the most likely diagnosis?',
  opts:['Vocal cord polyp','Reinke’s Edema','Vocal cord nodule','Contact granuloma'],
  box:'Explanation: the patient is a heavy smoker and had low-pitched HOV and his larynx examination showed bilateral boggy swelling of vocal cord: Reinke’s Edema' },

{ n:537, p:165, key:2, ref:536,
  stem:'In the previous case, what is the first-line treatment for his stridor?',
  opts:['Smoking cessation','Voice therapy','Tracheostomy','Antireflux measures'],
  note:'⚠️ THIS AND Q538 ARE A DELIBERATE PAIR AND MUST NOT BE MERGED — Q537 asks for the first-line treatment of the STRIDOR (the airway emergency; key tracheostomy) and Q538 for the treatment of the CONDITION (key smoking cessation). L2 records that at least one Reinke’s patient needed a tracheotomy.' },

{ n:538, p:165, key:0, ref:536,
  stem:'In the previous case, what is the primary treatment for his condition?',
  opts:['Smoking cessation','Microlaryngosurgery (MLS)','Corticosteroid injection','Voice therapy'] },

{ n:539, p:165, key:0, img:'q-gg-165b',
  stem:'An infant presents with HOV since birth. Upon laryngoscopic examination the following view is seen. What is the most likely diagnosis?',
  opts:['Vocal fold cyst','Laryngeal papilloma','Laryngeal web','Vocal cord paralysis'],
  note:'⚠️ THE PICTURE IS LOAD-BEARING — the stem alone ("HOV since birth") fits laryngeal web and congenital vocal cord paralysis at least as well, and those are the two congenital causes L2 actually lists. Only the photograph, showing a discrete pale submucosal mass on one membranous fold, selects the cyst. imgEssential.' },

{ n:540, p:165, key:2, ref:539,
  stem:'In the previous case, what is the recommended management?',
  opts:['Observation','Speech therapy','Microlaryngealsurgery (MLS)','Corticosteroid therapy'] },

{ n:541, p:165, key:1,
  stem:'Biphasic stridor may be due to which of the following?',
  opts:['Bronchial asthma','Subglottic tumor','Vocal cord paralysis','Glottic carcinoma'] },

{ n:542, p:165, key:1,
  stem:'A patient with laryngeal cancer develops progressive hoarseness, dyspnea, stridor, cough and dysphagia. On examination, there is hyperresonance over the larynx. What is the most likely diagnosis?',
  opts:['Laryngeal abscess','Internal laryngocele','Vocal cord paralysis',
        'Laryngeal carcinoma with metastasis'],
  box:'Explanation: the patient presented with progressive hoarseness, dyspnea, stridor, cough, neck swelling, dysphagia, and hyperresonance over the larynx: Internal laryngocele.',
  note:'⚠️ THE PRINTED BOX QUOTES A FINDING THE STEM NEVER GIVES — it lists "neck swelling" among the features, and the stem has none (an INTERNAL laryngocele by definition does not present as a neck mass). Recorded, not corrected.' },

{ n:543, p:166, key:2, img:'q-gg-166a',
  stem:'A 35-year-old adult presents with a history of hoarseness, a chronic cough, and intermittent difficulty breathing. The patient reports that these symptoms have progressively worsened over the past six months. Upon examination, the physician observes laryngeal lesions. A flexible laryngoscopy is performed and showed the following view. What is the most appropriate diagnosis for this patient?',
  opts:['Laryngeal carcinoma','Laryngitis','Recurrent respiratory papillomatosis',
        'Vocal cord nodules'],
  box:'Explanation: the Laryngeal lesions on flexible laryngoscopy: Typically appear as multiple, irregular, exophytic, wart-like growths: Recurrent Respiratory Papillomatosis.' },

{ n:544, p:166, key:3, ref:543,
  stem:'Which of the following is NOT a typical site for lesions in the previous case?',
  opts:['mid zone epiglottis','ventricle margin','undersurface of true vocal fold',
        'Posterior pharyngeal wall'],
  note:'⚠️ THE THREE WRONG OPTIONS ARE THE CLASSIC SQUAMOCILIARY JUNCTIONS AND NO CACHED LECTURE LISTS THEM. L2 and L6 both cover RRP but neither names a site. Answered from general knowledge, tagged.' },

{ n:545, p:166, key:1, ref:543,
  stem:'In the previous case, what is the first-line treatment?',
  opts:['Antiviral therapy','Surgical Excision','Chemotherapy','Radiation therapy'] },

{ n:546, p:166, key:3, ref:543,
  stem:'In the previous case, all of the following may be complications of the condition except:',
  opts:['Tracheal involvement leading to airway compromise',
        'Pulmonary involvement with abscess formation',
        'Malignant transformation to squamous cell carcinoma',
        'bone involvement with osteosclerosis'] },

{ n:547, p:166, key:2, img:'q-gg-166b',
  stem:'A 3-month-old infant presents with progressive stridor, which is worse when crying or feeding. The parents report that the baby was born healthy, but noisy breathing has gradually worsened over the past few weeks. Examination reveals biphasic stridor with no significant respiratory distress at rest. Flexible laryngoscopy shows the following view. What is the most likely diagnosis?',
  opts:['Laryngomalacia','Vocal cord paralysis','Congenital subglottic hemangioma',
        'Tracheomalacia'],
  box:'Explanation: the child presents with Progressive biphasic stridor, worse with crying and the larynx shows bluish, compressible in the subglottic region: subglottic hemangioma' },

{ n:548, p:166, key:3, ref:547,
  stem:'All of the following used in management of previous case except:',
  opts:['Propranolol','Interferon','Corticosteroids','Mitomycin'],
  note:'⚠️ PROPRANOLOL IS THE MODERN FIRST-LINE AGENT AND APPEARS IN NEITHER L6 NOR L12 — L6 lists tracheotomy, corticosteroid, laser, interferon, cryosurgery, irradiation and excision. The option is correct and is not the key; tagged where it is used in the draft.' },

{ n:549, p:167, key:3,
  stem:'A 28-year-old woman presented with a sudden loss of voice after a stressful family argument. She reports no throat pain, cough, or difficulty swallowing. On examination, her larynx appears structurally normal, and she is able to cough, but cannot produce a normal voice. What is the most likely cause for this voice change?',
  opts:['Vocal cord polyp','Vocal cord nodule','Contact granuloma','Hysterical'],
  box:'Explanation: sudden voice change after emotional stress with a normal cough sound: hysterical' },

{ n:550, p:167, key:0,
  stem:'Potentially malignant laryngeal lesions are all of the following except:',
  opts:['Plummer-Vinson’s syndrome','Leucoplakia','Adult papilloma','TB of larynx'],
  box:'Explanation: Plummer Vinson’s syndrome causes cancer esophagus not larynx one',
  note:'⚠️ SAME STEM AS Q534, DIFFERENT OPTION LIST, DIFFERENT KEY — NOT A SELF-CONTRADICTION AND NOT A FOLD. Q534 offers Reinke’s edema and keys it; this offers TB of larynx instead and keys Plummer-Vinson. Both keys are the best answer on their own menu. Cross-referenced in both drafts.' },

{ n:551, p:167, key:1,
  stem:'A 25-year-old male with dysphonia, stridor and lateral neck swelling. The doctor found compressible mass in neck. What is the best management?',
  opts:['MLS','External approach surgery','Wait and see','Medical treatment'],
  note:'⚠️ Q551 AND Q552 SHARE AN IDENTICAL OPTION LIST AND KEY DIFFERENT ANSWERS — deliberately, and reading only one of them teaches the wrong rule. Q551 is an EXTERNAL/mixed laryngocele (neck swelling) → external approach; Q552 is a post-intubation intralaryngeal lesion → MLS.' },

{ n:552, p:167, key:0,
  stem:'A 25-year-old male admitted in the ICU for 3 months after then he complains of dysphonia (HOV). What is the best management?',
  opts:['MLS','External approach surgery','Wait and see','Medical treatment'],
  note:'Stem is ungrammatical as printed ("for 3 months after then he complains"); the sense is three months of intubation followed by hoarseness. Repaired in the draft. Paired with Q551 — see the note there.' },

{ n:553, p:167, key:1,
  stem:'A 50-year-old male who is chronic smoker developed hoarseness of voice which was progressive for month. Indirect laryngoscope showed SCC, but with mobile cords. What is the best management?',
  opts:['Total lumpectomy + Chemotherapy','LASER + Radiotherapy','Lumpectomy alone',
        'Radiotherapy alone'],
  note:'⚠️ "Lumpectomy" is a breast term and is not laryngeal vocabulary; the bank uses it for cordectomy/partial excision. L2 gives the management of glottic tumours only as "radiotherapy, surgical excision according to the stage", so the choice between b and d is not decidable from the slides. Tagged in the draft.' },

{ n:554, p:167, key:1,
  stem:'Oral sexual practices cause repeated recurrent respiratory papillomatosis in which area of the following?',
  opts:['Glottic','Subglottic','Supraglottic','None of the above'],
  box:'Explanation: the subglottic is site of transition between 2 epithelium types: Subglottic region: Respiratory epithelium (pseudostratified columnar epithelium with cilia). Glottic region (vocal cords): Stratified squamous epithelium.' },

{ n:555, p:167, key:0,
  stem:'Left vocal fold paralysis is more common because of which of the following?',
  opts:['The left recurrent laryngeal nerve has a longer course','Predominant left vocal fold function',
        'Stronger right vocal fold musculature','The aortic arch is on the left side'],
  note:'⚠️ OPTIONS a AND d ARE THE SAME FACT SPLIT IN TWO — the left RLN is long BECAUSE it loops under the aortic arch. The key is a, the proximate reason; d states the anatomical cause of a and is not wrong in itself. See Q535, which keys the right nerve for thyroidectomy specifically.' },

{ n:556, p:167, key:0,
  stem:'Which part of the vocal cord is responsible for phonation?',
  opts:['Anterior part','Posterior part','Middle part','All of the above'] },

{ n:557, p:167, key:3,
  stem:'Smoking is associated with which of the following?',
  opts:['Vocal nodule','Vocal polyp','Contact granuloma','Reinke’s edema'],
  note:'⚠️ THE STEM IS UNQUALIFIED AND AT LEAST TWO OPTIONS ARE TRUE — L2 says of POLYPS that "most patients are smokers" and of Reinke’s that its common causes "include smoking". The key is Reinke’s, the lesion smoking is most characteristically bound to. Recorded, not corrected.' },

{ n:558, p:168, key:1,
  stem:'What is the most common cause of vocal cord nodules?',
  opts:['Viral infection','Long duration of voice abuse','Smoking','Laryngeal tumor'] },

{ n:559, p:168, key:2,
  stem:'A 37-year-old female teacher complains of hoarseness of voice for 4 months. Examination revealed inflamed edematous vocal cords but there were no MAP lesions. What’s the best management of such a patient?',
  opts:['Voice therapy','Voice therapy and medical treatment','Medical treatment and follow up',
        'Surgery'],
  note:'⚠️ THE KEY IS ARGUABLE AGAINST THE BANK\'S OWN LECTURE. L2 gives three non-surgical lines together — voice hygiene advice, treat laryngopharyngeal reflux, voice therapy — which is option b; the bank keys c, medical treatment and follow up. Keyed as printed with the discrepancy noted, per the 2026-08-11 ruling.' },

{ n:560, p:168, key:2,
  stem:'A 45-year-old patient present with HOV persisting for 2 months without any signs of infection. There is no history of recent illness, smoking, or trauma. What is the best next step in management?',
  opts:['Empirical PPI therapy','Voice rest and follow-up in 1 month','Office laryngoscopy',
        'CT scan of the neck'] },

{ n:561, p:168, key:3,
  stem:'The following are minor associated pathological lesions of the larynx except:',
  opts:['Laryngeal polyp','Vocal nodule','Reineck’s edema','Laryngocele'],
  note:'Source spells it "Reineck’s edema"; Q534 spells the same word "Reineke’s" and Q511/Q536 spell it "Reinke’s". Three spellings of one eponym inside one topic.' },

{ n:562, p:168, key:0, img:'q-gg-168a',
  stem:'A 65-year-old patient complaining of HOV. He has history of heavy smoking for 15 year. He did CT and endoscopy showed the following. What is the next step?',
  opts:['Biopsy','Total laryngectomy','Partial laryngectomy','radiotherapy'] },

{ n:563, p:168, key:2, img:'q-gg-168b',
  stem:'A teacher presents with hoarseness of voice. Laryngoscopic examination is attached below. What is the next best step in management?',
  opts:['Voice rest','Empirical PPIs','Microlaryngoscopicsurgery (MLS)','Corticosteroid therapy'],
  note:'⚠️ THE PICTURE IS THE WHOLE QUESTION AND IT CUTS AGAINST THE HABIT. "A teacher with hoarseness" is the classic voice-abuse vignette, and voice therapy — which is not even offered — would be first line for nodules; the bank keys MLS, which is only right if the pictured lesion is a discrete mass. imgEssential.' },

{ n:564, p:169, key:2,
  stem:'A 40-year-old female patient was informed by her physician that she had a vocal cord polyp. What would be her main symptom?',
  opts:['Dyspnea','Aspiration','Hoarse voice','All of the above'] },

{ n:565, p:169, key:3,
  stem:'A 48-year-old male patient complains of low-pitched hoarse voice. He reports being a heavy smoker for the past 20 years. Laryngoscopy revealed edema along the whole length of vocal cords. All of the following are among lines of management of this patient except:',
  opts:['Smoking cessation','Voice rest','MLS','Bilateral cordectomy'] },

{ n:566, p:169, key:1, img:'q-gg-169',
  stem:'The lesion shown in the following picture will cause which of the following complaints mostly?',
  opts:['Stridor','Muffled voice','Hoarse voice','Chocking'],
  note:'⚠️⚠️ THE KEY AND THE PICTURE DISAGREE, AND THE BANK\'S OWN Q501 SETTLES THE RULE AGAINST THE KEY. The photograph shows a small rounded swelling on the free edge of one membranous vocal fold — a GLOTTIC lesion, which Q501 and L2 both make a cause of HOARSENESS; "muffled"/hot-potato voice is the supraglottic sign. Keyed B as printed, discrepancy recorded per the 2026-08-11 ruling. Source also prints "Chocking" for "Choking". imgEssential.' }

];
