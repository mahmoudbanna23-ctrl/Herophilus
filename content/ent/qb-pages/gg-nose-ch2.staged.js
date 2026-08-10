/* Grade Gain — ENT QB.pdf, NOSE chapter 2: "Epistaxis and smell disorders".
 * Questions book pp.50–53 (PDF 59–62); answers book pp.53–54 (PDF 62–63).
 *
 * ✅⚠️ IT OPENS AT Q47, NOT Q1 — **THE NOSE SECTION IS ONE CONTINUOUS RUN**, exactly
 *    like the Ear section (Q1–Q261 over nine topics). Nose ch.1 ran Q1–Q46, so ch.2
 *    resumes at 47. Numbering restarts only at a SECTION boundary. Ids keep the topic
 *    token for readability; they cannot collide.
 * ⚠️ 38 PRINTED WHERE THE CONTENTS PAGE PROMISES 37 — Q47 … Q84.
 * ⚠️ THE ANSWER BLOCK OVERLAPS AGAIN. Book p.53 carries Q81–Q84 in the left column
 *    and "Epistaxis and smell disorders / Answers" beginning in the right.
 * ⚠️ Q64 opens "Recurrence of this bleeding in the previous case" — linked to Q63.
 * ⚠️ Q80 prints only THREE options.
 * ⚠️ Q55's option b prints "Ehmoidal artery"; Q66's option b prints "shenopalatine".
 * ⚠️ Q58 and Q65 BOTH ask the commonest cause of epistaxis in children and key
 *    DIFFERENTLY — nose picking vs idiopathic. Neither option list contains the
 *    other's key, so each keys the best it offers; recorded, not a contradiction.
 * ⚠️ Q56 has the SAME four options and key as Nose ch.1 Q23, whose stem says
 *    "anterior epistaxis" where this one says only "epistaxis".
 * ⚠️ Q72's box answers with SCHIZOPHRENIA while the keyed option reads
 *    "Personality disorders" — the box and the option are not the same entity.
 * ⚠️ Several look like verbatim endpoint reprints (Q63, Q64, Q65, Q66) — for the sweep.
 *
 * Verbatim as printed. Repairs are applied in questions.ent.js, never here.
 */
var GGN2_STAGED = [

{ n:47, page:50, apage:53, stem:'The Internal Maxillary Artery (IMA) is divided into three parts by which of the following structures?',
  options:['Nasal septum','Lateral pterygoid muscle','Zygomatic arch','Inferior alveolar nerve'],
  answer:1, exp:null },

{ n:48, page:50, apage:53, stem:'The Internal Maxillary Artery (IMAX) enters the pterygopalatine fossa after passing through the pterygomaxillary fissure. Which of the following is one of the branches it gives in this region?',
  options:['Anterior superior alveolar artery','Posterior superior alveolar artery','Facial artery','Lingual artery'],
  answer:1, exp:null },

{ n:49, page:50, apage:53, stem:'Which of the following arteries is most commonly associated with epistaxis?',
  options:['Posterior superior alveolar artery','Sphenopalatine artery','Infraorbital artery','Buccal artery'],
  answer:1, exp:null },

{ n:50, page:50, apage:53, stem:'All of the following are branches of the third part (post-pterygoid part) of the Internal Maxillary Artery, except:',
  options:['Posterior superior alveolar artery','Sphenopalatine artery','Infraorbital artery','Deep temporal artery'],
  answer:3, exp:null },

{ n:51, page:50, apage:53, stem:'little\'s area is located in which part of the nasal cavity?',
  options:['Anterior inferior part of the nasal septum','Posterior part of the nasal septum','Lateral wall of the nasal cavity','Nasopharynx'],
  answer:0, exp:null },

{ n:52, page:50, apage:53, stem:'The most common type of epistaxis is:',
  options:['Posterior epistaxis','Anterior epistaxis','Spontaneous epistaxis','Recurrent epistaxis'],
  answer:1, exp:null },

{ n:53, page:50, apage:53, stem:'Woodruff\'s plexus is located at which part of the nasal cavity?',
  options:['Anterior part of the nasal septum','Lateral wall of the nasal cavity posterior to the inferior turbinate','Roof of the nasal cavity near the olfactory region','Posterior part of the nasal septum'],
  answer:1, exp:null },

{ n:54, page:50, apage:53, stem:'The superior epistaxis is bleeding from which vessels?',
  options:['Sphenopalatine artery','ethmoidal vessels','ECA','Facial artery'], answer:1, exp:null },

{ n:55, page:50, apage:53, stem:'……….is branch of ICA supplying nose',
  options:['Sphenopalatine artery','Ehmoidal artery','Internal maxillary artery','Posterior superior alveolar artery'],
  answer:1, exp:null, flag:'Option b prints "Ehmoidal artery".' },

{ n:56, page:50, apage:53, stem:'The most common cause of epistaxis is:',
  options:['Idiopathic','Hypertension','Sinus infection','Allergies'], answer:0, exp:null,
  flag:'⚠️ SAME four options and key as Nose ch.1 Q23, whose stem specifies "anterior epistaxis".' },

{ n:57, page:50, apage:53, stem:'The most common cause of epistaxis in the elderly is:',
  options:['Trauma','Hypertension','Bleeding disorders','Nasal tumors'], answer:1, exp:null },

{ n:58, page:50, apage:53, stem:'Common cause of epistaxis in children is:',
  options:['Nose picking','Hypertension','Bleeding disorders','Allergic rhinitis'], answer:0, exp:null,
  flag:'⚠️ Q65 asks the same question and keys "Idiopathic"; neither option list holds the other\'s key.' },

{ n:59, page:51, apage:53, stem:'In cases of severe, uncontrolled epistaxis in an adolescent male, which condition should be suspected?',
  options:['Allergic rhinitis','Juvenile nasopharyngeal angiofibroma','Hypertension','Bleeding disorders'],
  answer:1,
  exp:'Adolescent Male patient presented by profuse epistaxis coming to the emergency department. Epistaxis couldn\'t be controlled by routine measures as IV fluids, IV coagulant measures or anterior epistaxis. It may be juvenile nasopharyngeal angiofibroma.' },

{ n:60, page:51, apage:53, stem:'The most common site of squamous cell carcinoma (SCC) causing epistaxis is:',
  options:['Nasopharynx','Maxillary sinus','Nasal septum','Ethmoid sinus'], answer:1, exp:null },

{ n:61, page:51, apage:54, stem:'The best position for a patient experiencing epistaxis is:',
  options:['Supine position with head tilted back','Sitting position with the head tilted forward','Lying flat with legs elevated','Standing upright with the head straight'],
  answer:1,
  exp:'Positioning the head backward is a mistake because blood can reach nasopharynx and be aspirated. It is also irritant to the stomach causing vomiting of blood and hematemesis.' },

{ n:62, page:51, apage:54, stem:'Cotton soaked with a decongestant (e.g., adrenaline) is contraindicated in elderly patients with hypertension because:',
  options:['It may lead to severe nasal dryness.','Systemic absorption can cause a hypertensive crisis.','It is ineffective in stopping nasal bleeding in elderly patients.','It can induce excessive nasal congestion after use.'],
  answer:1,
  exp:'Cotton soaked with decongestant (as adrenaline) can be absorbed systemically so it is contraindicated in an old patient with history of hypertension. It can cause tachycardia, arrythmia, sudden rise of blood pressure even if he had no history of HTN but he is a very old patient. "try to avoid local decongestant"' },

{ n:63, page:51, apage:54, stem:'diabetic 60 years old male patient presented with recurrent left-sided epistaxis that could not be stopped with first aid measures. Examination of the nasal cavity and the Nasopharynx was unremarkable except for the active bleeding. All of the following may be used to stop the bleeding EXCEPT:',
  options:['Merocel packs.','Nasal balloons.','Cotton soaked with adrenaline.','Vaselinized gauze.'],
  answer:2, exp:null,
  flag:'⚠️ Endpoint prints this question with a CARDIAC 50-year-old (`entep-nose-14`) and this vignette with a different question (`entep-nose-68`). For the sweep.' },

{ n:64, page:51, apage:54, stem:'Recurrence of this bleeding in the previous case may need:',
  options:['Coagulation of the superior labial artery.','Coagulation of the greater palatine artery.','Coagulation of the sphenopalatine artery.','Coagulation of the lesser palatine artery.'],
  answer:2, exp:null,
  flag:'Linked to Q63. ⚠️ Looks verbatim against `entep-nose-68`. For the sweep.' },

{ n:65, page:51, apage:54, stem:'The most common cause of epistaxis in children is :',
  options:['Atrophic rhinitis','Idiopathic','Bleeding tendency','Vascular tumours'], answer:1, exp:null,
  flag:'⚠️ Looks verbatim against `entep-nose-61`. Also contradicts this bank\'s own Q58. For the sweep.' },

{ n:66, page:51, apage:54, stem:'The kiesselbach\'s plexus in the little area is formed by the following except:',
  options:['Labial branch of the facial artery','Septal branch of shenopalatine artery','Posterior ethmoidal artery','Anterior ethmoidal artery'],
  answer:2, exp:null,
  flag:'⚠️ Looks verbatim against `entep-nose-65`, typo "shenopalatine" included. For the sweep.' },

{ n:67, page:51, apage:54, stem:'Old patient with recurrent posterior epistaxis, ligation of __________ artery should be done.',
  options:['Sphenopalatine artery','Anterior ethmoidal artery','Inferior alveolar artery','Facial artery'],
  answer:0, exp:null },

{ n:68, page:51, apage:54, stem:'What is the most common site of anterior epistaxis?',
  options:['Anterior end of inferior turbinate','Sphenopalatine foramen','Little\'s area','Retrocollumellar vein'],
  answer:2, exp:null },

{ n:69, page:51, apage:54, stem:'Primary epistaxis in children may be treated by all of the following except:',
  options:['Compression of Little\'s area','Decongestant nasal drops','Chemical cautery','Posterior nasal packing'],
  answer:3, exp:null },

{ n:70, page:52, apage:54, stem:'When performing cauterization of ethmoidal artery in the nasal cavity, which of the following distances should be carefully considered to avoid damage to nearby structures?',
  options:['24 mm to locate anterior ethmoidal foramen and the anterior ethmoidal artery','12 mm between the anterior and posterior ethmoidal arteries','6 mm distance to the optic canal behind the posterior ethmoidal artery','All of the above'],
  answer:3, exp:null },

{ n:71, page:52, apage:54, stem:'The origin of posterior epistaxis is:',
  options:['Kesselbach\'s Plexus / Little\'s Area','Woodruff\'s Plexus','Anterior ethmoid area','Vestibule of the nose'],
  answer:1, exp:null },

{ n:72, page:52, apage:54, stem:'25-year-old male complains of increased sensitivity to smells. He also reports that certain ordinary sounds seem excessively loud and bothersome. Which of the following could be a potential cause of his symptoms?',
  options:['Hypothyroidism','Personality disorders','Chronic sinusitis','Olfactory nerve damage'],
  answer:1, exp:'Hyperosmia can be the 1st sign of schizophrenia',
  flag:'⚠️ The box names SCHIZOPHRENIA; the keyed option reads "Personality disorders". Not the same entity.' },

{ n:73, page:52, apage:54, stem:'The term for the perversion of odor is:',
  options:['Anosmia','Parosmia','Hyposmia','Phantosmia'], answer:1, exp:null },

{ n:74, page:52, apage:54, stem:'Which of the following best describes phantosmia?',
  options:['Reduced ability to detect odors','Complete loss of smell','Perception of nonexistent odors','Distorted perception of real odors'],
  answer:2, exp:null },

{ n:75, page:52, apage:54, stem:'Which of the following best describes cacosmia?',
  options:['Complete loss of smell','Perception of foul or unpleasant odors by the patient','Reduced ability to detect odors','Perception of nonexistent odors'],
  answer:1, exp:null },

{ n:76, page:52, apage:54, stem:'The common type of smell disorder is:',
  options:['Anosmia','Hyposmia','Parosmia','Phantosmia'], answer:1, exp:null },

{ n:77, page:52, apage:54, stem:'What is the most common cause of conductive anosmia?',
  options:['allergic rhinitis','Chronic sinusitis','Head trauma','Olfactory nerve damage'], answer:0, exp:null },

{ n:78, page:52, apage:54, stem:'What is the most common cause of perceptive anosmia?',
  options:['Allergic rhinitis','Postviral infection','Chronic sinusitis','Nasal polyps'], answer:1, exp:null },

{ n:79, page:52, apage:54, stem:'Which type of anosmia is most commonly associated with good recovery?',
  options:['Postviral anosmia','Head trauma','Chronic sinusitis','Nasal polyps'], answer:0, exp:null },

{ n:80, page:52, apage:54, stem:'A patient with anosmia cannot smell odors, but he/she could perceive:',
  options:['Coffee','Ammonia','Strong perfume'], answer:1,
  exp:'Ammonia has a **pungent, sharp odor** that is irritating to the nasal passages, and it can trigger a reflex to **avoid** or **expel** the irritant. This is why inhaling ammonia can result in **painful sensations** such as a sore throat, cough, or even difficulty breathing in some cases.\nSo, while **anosmia** (complete loss of smell) may prevent a person from detecting the **odor** of ammonia, the **painful sensations** caused by its irritation might still be perceived through other sensory pathways (like **pain** or **irritation** receptors) if the individual can still sense pain',
  flag:'Only three options printed.' },

{ n:81, page:53, apage:54, stem:'A patient smells an odor that doesn\'t persist, and no external source of the odor is present. This is called:',
  options:['Hyposmia','Phantosmia','Anosmia','Dysosmia'], answer:1, exp:null },

{ n:82, page:53, apage:54, stem:'In a patient with Deviated Nasal Septum and septal spur, the cause of epistaxis is due to:',
  options:['Stretching of the mucosa over the septal spur','Infection of the nasal cavity','Obstruction of the nasal airway','Trauma from external injury'],
  answer:0, exp:null },

{ n:83, page:53, apage:54, stem:'In a case of Deviated Nasal Septum (DNS) with a septal spur, causing epistaxis, the definitive treatment is:',
  options:['Septoplasty','Nasal packing','Cauterization of the septum','Steroid nasal spray'],
  answer:0, exp:null },

{ n:84, page:53, apage:54, stem:'In the case of unilateral epistaxis in a child, which of the following should be suspected?',
  options:['Nose picking','Foreign body','Allergic rhinitis','Sinus infection'], answer:1, exp:null }

];
