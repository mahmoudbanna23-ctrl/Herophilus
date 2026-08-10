/* Grade Gain — ENT QB.pdf, Ear chapter 8: "Audiological Investigations".
 * Questions book pp.33–37 (PDF 42–46); answers book pp.38–39 (PDF 47–48).
 *
 * ⚠️ 39 PRINTED WHERE THE CONTENTS PAGE PROMISES 38 — Q197 … Q235, and chapter 9
 *    (Vertigo and vestibular diagnosis) opens at Q236 on book p.40, verified by rendering.
 *    SIX chapters running over the map, every one upward.
 * ✔ The answer block does not overlap the questions: book p.37 is questions only,
 *    p.38 opens the key.
 * ⚠️ SEVEN FIGURES PRINTED — Q205, 206, 207, 209 (audiograms), Q210, 212, 218
 *    (tympanograms). All seven are load-bearing: the stem is "the following …".
 * ⚠️ Q235 SAYS "The following PTA" AND NO FIGURE IS PRINTED. Verified by rendering
 *    the foot of book p.37 at 200 dpi — the page simply ends after option c.
 *    Second dangling figure in this bank after ch.3 Q88. The answer box names the
 *    disease (otosclerosis), so the stem is repaired from the box.
 *
 * Verbatim as printed. Repairs are applied in questions.ent.js, never here.
 */
var GG8_STAGED = [

{ n:197, page:33, apage:38, stem:'A positive Rinne test means:',
  options:['Bone conduction is better than air conduction','Air conduction is better than bone conduction','No sound is heard in either condition','Both bone conduction and air conduction are equally effective'],
  answer:1, exp:null },

{ n:198, page:33, apage:38, stem:'A positive Rinne test occurs in:',
  options:['Normal hearing and sensorineural hearing loss','Conductive hearing loss','Mixed hearing loss','Only in normal hearing'],
  answer:0, exp:null },

{ n:199, page:33, apage:38, stem:'In Weber test:',
  options:['Sound lateralizes to better ear in conductive hearing loss','Sound lateralizes to worse ear in conductive hearing loss','Sound lateralizes to worse ear in sensorineural hearing loss','Sound is heard equally in both ears'],
  answer:1, exp:null },

{ n:200, page:33, apage:38, stem:'A patient shows bilateral negative Rinne tests and lateralization to the right ear in the Weber test. The patient complains of:',
  options:['Sensorineural hearing loss','Conductive hearing loss in both ears, worse on right side','Conductive hearing loss in both ears ,worse on left','Normal hearing'],
  answer:1, exp:null },

{ n:201, page:33, apage:38, stem:'Which of the following causes excellent speech discrimination?',
  options:['Middle ear effusion','Presbycusis','Trauma','Labyrinthitis'], answer:0,
  exp:'**Speech discrimination scores** Helps to identify type of hearing loss:\n**Conductive HL:** patient has as excellent SDS. So, if the conduction problem is fixed, the patient will be normal again.\n**Sensory HL:** Good SDS\n**Neural HL:** Poor SDS. So, even if the neural HL problem is fixed, there will be still a problem in speech comprehension.' },

{ n:202, page:33, apage:38, stem:'A patient complaining of hearing loss, with tympanometry revealing type B. The likely cause is:',
  options:['Wax impaction','Presbycusis','Middle ear effusion','Labyrinthitis'], answer:2, exp:null },

{ n:203, page:33, apage:38, stem:'A patient complains of hearing loss in the right ear. The Rinne test is positive. Where will the Weber test lateralize?',
  options:['Right ear','Left ear','No lateralization','Both ears equally'], answer:1,
  exp:'Positive Rinne with hearing loss = snhl in right ear ,so hearing lateralizes to healthy ear (left)' },

{ n:204, page:33, apage:38, stem:'Which of the following frequency ranges is typically measured in Pure Tone Audiometry to assess hearing thresholds?',
  options:['20 Hz to 500 Hz','250 Hz to 8000 Hz','500 Hz to 4000 Hz','1000 Hz to 12000 Hz'], answer:1, exp:null },

{ n:205, page:33, apage:38, stem:'The following PTA can occur with',
  options:['MEE','Presbycusis','Labyrinthitis','acoustic trauma'], answer:0, img:true,
  exp:'Air bone gap with normal bone threshold occurs in CHL such as MEE' },

{ n:206, page:34, apage:38, stem:'The following audiometry can occur with',
  options:['MEE','Presbycusis','Meniere disease','acoustic trauma'], answer:2, img:true,
  exp:'Low frequency SNHL' },

{ n:207, page:34, apage:38, stem:'The following audiometry can occur with',
  options:['MEE','Presbycusis','Meniere disease','impacted wax'], answer:1, img:true,
  exp:'High frequency SNHL' },

{ n:208, page:34, apage:38, stem:'Which of the following configurations of hearing loss is characteristic of acoustic trauma due to exposure to high-intensity sounds?',
  options:['U-shaped curve','V-shaped curve (dipping at 4000 Hz)','Flat curve','Rising curve'], answer:1, exp:null },

{ n:209, page:34, apage:38, stem:'which of the following can occur with',
  options:['MEE','Presbycusis','Meniere disease','acoustic trauma'], answer:3, img:true,
  exp:'V-shaped curve dipping at 4k HZ' },

{ n:210, page:34, apage:38, stem:'The following tympanometry of right ear will have',
  options:['positive Rinne','negative Rinne and lateralize to right ear','negative Rinne and lateralize to left ear','positive Rinne and normal weber'],
  answer:1, img:true, exp:'Type b tympanometry suggests MEE which causes CHL (Lateralizes to poorer ear)' },

{ n:211, page:35, apage:38, stem:'The following audiometry can occur with all of the following except',
  options:['Trauma','glomus tumor','MEE','complicated CSOM'], answer:2, img:true,
  exp:'The audiometry shows mixed hearing loss (decrease air and bone conduction with air bone gap) which occurs in all except MEE' },

{ n:212, page:35, apage:38, stem:'The treatment for this type of tympanometry is',
  options:['Observation and follow-up','Medical management (e.g., nasal decongestants or antihistamines)','Surgical intervention (e.g., stapedectomy or tympanoplasty)','Hearing aids'],
  answer:2, img:true, exp:'Type As tympanometry suggests otosclerosis or tympanosclerosis which is treated surgical' },

{ n:213, page:35, apage:38, stem:'Which of the following is true about the acoustic reflex measurement?',
  options:['Absent reflex occurs in Sensorineural Hearing Loss (SNHL)','Impaired reflex occurs in Conductive Hearing Loss (CHL)','Absent reflex occurs in Conductive Hearing Loss (CHL)','Both types of reflexes are normal in all hearing loss cases'],
  answer:2, exp:'Absent reflex e.g. Conductive Hearing Loss [CHL]\nImpaired reflex e.g. Sensorineural Hearing',
  flag:'⚠️ The printed box stops mid-phrase: "Impaired reflex e.g. Sensorineural Hearing" with no closing word.' },

{ n:214, page:35, apage:38, stem:'Which of the following findings in an auditory brainstem response test is indicative of an Acoustic Neuroma (Vestibular Schwannoma)?',
  options:['Delay in V wave timing and prolonged interval between wave I and wave II','Normal V wave timing and shortened interval between wave I and wave II','Early peak of wave III & absent wave I','Absent V wave timing with no prolonged interval between waves'],
  answer:0, exp:null },

{ n:215, page:35, apage:38, stem:'In malingerers, neonates, mentally retarded patients hearing is tested by',
  options:['ABR','otoacoustic emission','PTA','a &b'], answer:3, exp:null },

{ n:216, page:35, apage:38, stem:'Which of the following nerves are involved in the stapedius reflex?',
  options:['Afferent: Vestibulocochlear nerve; Efferent: Facial nerve','Afferent: Vagus nerve; Efferent: Trigeminal nerve','Afferent: Facial nerve; Efferent: Vestibulocochlear nerve','Afferent: Trigeminal nerve; Efferent: Vagus nerve'],
  answer:0, exp:null },

{ n:217, page:36, apage:38, stem:'Which of the following correctly lists the components of the acoustic reflex?',
  options:['Stimulus: Loud sound; Receptor: Cochlear hair cells; Afferent: Auditory nerve; Center: Cochlear nucleus; Efferent: Trigeminal nerve; Effector: Tensor tympani muscle','Stimulus: Loud sound; Receptor: Cochlear hair cells; Afferent: Auditory nerve (Cochlear division of vestibulocochlear nerve); Center: Facial nucleus; Efferent: Motor part of facial nerve; Effector: Stapedius muscle','Stimulus: Soft sound; Receptor: Cochlear hair cells; Afferent: Auditory nerve; Center: Cochlear nucleus; Efferent: Vestibulocochlear nerve; Effector: Tensor tympani muscle','Stimulus: Loud sound; Receptor: Vestibular hair cells; Afferent: Vestibulocochlear nerve; Center: Vestibular nucleus; Efferent: Trigeminal nerve; Effector: Tensor tympani muscle'],
  answer:1, exp:'Stimulus: Loud sound; Receptor: Cochlear hair cells; Afferent: Auditory nerve (Cochlear division of vestibulocochlear nerve); Center: Facial nucleus; Efferent: Motor part of facial nerve; Effector: Stapedius muscle' },

{ n:218, page:36, apage:38, stem:'The following tympanometry occur with ….',
  options:['Otosclerosis','chronic ET dysfunction','MEE','ossicular discontinuity'], answer:1, img:true, exp:null },

{ n:219, page:36, apage:38, stem:'Tympanometry is used for',
  options:['ET dysfunction','MEE','otosclerosis','all of the above'], answer:3, exp:null },

{ n:220, page:36, apage:38, stem:'Which of the following is the correct frequency range for human hearing and speech perception?',
  options:['Human ear: 10 – 1000 Hz; Speech: 100 – 5000 Hz','Human ear: 20 – 20,000 Hz; Speech: 500 – 4000 Hz','Human ear: 50 – 15000 Hz; Speech: 200 – 3000 Hz','Human ear: 0 – 50,000 Hz; Speech: 200 – 1000 Hz'],
  answer:1, exp:null },

{ n:221, page:36, apage:38, stem:'Red mass behind intact tympanic membrane is suggestive of',
  options:['glomus tumor','cholesteatoma','tympanosclerosis','otosclerosis'], answer:0, exp:null },

{ n:222, page:36, apage:38, stem:'White mass behind intact tympanic membrane is suggestive of …..',
  options:['glomus tumor','congenital cholesteatoma','tympanosclerosis','otosclerosis'], answer:1, exp:null },

{ n:223, page:36, apage:38, stem:'A patient with right conductive hearing loss would show which of the following results in the Rinne, Weber and Schwabach tests?',
  options:['Rinne negative, lateralizes to left ear, prolonged Schwabach test','Rinne positive, lateralizes to right ear, normal Schwabach test','Rinne positive, lateralizes to left ear, prolonged Schwabach test','Rinne negative, lateralizes to right ear, prolonged Schwabach test'],
  answer:3, exp:null },

{ n:224, page:37, apage:38, stem:'A 60-year-old man with bilateral high frequency SNHL is likely',
  options:['Meniere','Presbycusis','acoustic schwannoma','impacted wax'], answer:1, exp:null },

{ n:225, page:37, apage:39, stem:'A 3 year old child presented with severe SNHL, he was prescribed hearing aid with no improvement next step is',
  options:['Conservative','fenestration surgery','stapes mobilization','cochlear implant'], answer:3,
  exp:'If an infant is born with deafness, you should interfere early to avoid becoming deaf-mute. First, try hearing aids. If failed, do cochlea implants preferably before the age of 5 years (before maturation of the auditory cortex).' },

{ n:226, page:37, apage:39, stem:'A patient presents with conductive hearing loss (CHL) after a motorcycle accident and a normal otoscopic examination. What is the most likely cause?',
  options:['ossicular discontinuity','Tympanic membrane perforation','Cholesteatoma','Inner ear trauma'], answer:0,
  exp:'1. **Ossicular chain disruption**: Trauma from the motorcycle accident may cause dislocation or fracture of the ossicular chain (e.g., at the incudostapedial joint), leading to CHL with a normal otoscopy.\n2. **Tympanic membrane perforation** (Incorrect): This would typically be visible on otoscopy.\n3. **Cholesteatoma** (Incorrect): This is a chronic condition and not trauma-related, often associated with a history of recurrent ear infections.\n4. **Inner ear trauma** (Incorrect): This would cause sensorineural hearing loss (SNHL), not CHL.' },

{ n:227, page:37, apage:39, stem:'Cochlear implant is indicated in',
  options:['mixed deafness','bilateral CHL','total deafness','unilateral SNHL deafness'], answer:2, exp:null },

{ n:228, page:37, apage:39, stem:'newborn admitted for acoustic emission screening it was bilateral negative repeated after 3m and was negative otoscopy was normal and tympanic membrane normal next step',
  options:['Tympanometry and ABR','Tympanometry and EEG','Tympanometry and APT','wait till 3y and do audiometer'], answer:0,
  exp:'In neonates tests should be objective as optoacoustic emissions and ABR. Screening is done by otoacoustic emission if abnormal repeat is still abnormal more tests should be done as in this case',
  flag:'⚠️ The printed box writes "optoacoustic" for otoacoustic.' },

{ n:229, page:37, apage:39, stem:'Malleoincus dislocation typically results in which type of hearing loss?',
  options:['Sensorineural hearing loss (SNHL)','Conductive hearing loss (CHL)','Mixed hearing loss','No significant hearing loss'],
  answer:1, exp:'Lesions in middle ear cause CHL' },

{ n:230, page:37, apage:39, stem:'Why is speech audiometry considered a decision-making test?',
  options:['It determines the type of hearing loss','It measures the patient\'s ability to comprehend speech and assess hearing aid benefit.','It evaluates the structural integrity of the middle ear.','It identifies the frequency range of hearing loss.'],
  answer:1, exp:null },

{ n:231, page:37, apage:39, stem:'What tympanometry finding shows a perforated tympanic membrane?',
  options:['Type A curve with normal volume','Type B curve with high volume','Type C curve with normal volume','Type As curve with low compliance'],
  answer:1, exp:null },

{ n:232, page:37, apage:39, stem:'What tympanometry finding occurs with an atrophic tympanic membrane?',
  options:['Type A curve','Type As curve','Type B curve','Type Ad curve'], answer:3, exp:null },

{ n:233, page:37, apage:39, stem:'ABR records all of following except:',
  options:['Auditory nerve','Pons','Midbrain','Cortex'], answer:3,
  exp:'**ABR (Auditory Brainstem Response)** records the electrical activity generated by the auditory pathway from the **cochlea** through the **brainstem**. Specifically, ABR measures the responses of the following:\n1. **Auditory nerve (Cochlear division of the vestibulocochlear nerve, CN VIII**.\n2. **Pons**\n3. **Midbrain**.\n4. The **entire auditory brainstem pathway**, up to the level of the midbrain, is involved in generating these waves.\nABR does **not** measure cortical activity, which is higher in the auditory processing pathway (beyond the brainstem).' },

{ n:234, page:37, apage:39, stem:'A 40-year-old patient presents with bilateral negative Rinne tests and Weber test lateralizing to the right ear. What is the likely diagnosis?',
  options:['Bilateral presbycusis, worse on the right side','Bilateral otosclerosis, worse on the right side','Conductive hearing loss in the left ear','SNHL in the right ear'],
  answer:1, exp:null },

{ n:235, page:37, apage:39, stem:'The following PTA shows a specific disease what would be the main type of hearing loss?',
  options:['CHL','SNHL','Mixed'], answer:0,
  exp:'The pattern of PTA is suggestive of otosclerosis which causes mainly CHL and rarely mixed hearing loss',
  flag:'⚠️ NO FIGURE IS PRINTED. Book p.37 ends after option c — verified at 200 dpi. Repaired from the answer box, which names otosclerosis.' }

];
