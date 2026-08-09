/* Grade Gain — ENT QB.pdf, Ear chapter 6: "Otalgia and Otorrhea".
 * Questions book pp.26–28 (PDF 35–37); answers book pp.28–29 (PDF 37–38).
 *
 * ⚠️ 22 PRINTED WHERE THE CONTENTS PAGE PROMISES 21 — Q157 … Q178, and chapter 7
 *    (Tinnitus & Hearing loss) opens at Q179 on book p.30, verified by rendering.
 *    FOUR chapters running short of the map.
 * ⚠️ THE ANSWER BLOCK AGAIN OPENS IN THE RIGHT COLUMN of a page (book p.28) whose
 *    LEFT column still carries Q175–Q178.
 * ⚠️ SIX STEMS NEED REPAIR — three "In the previous case" and three "The
 *    following picture/perforation". More than any chapter so far.
 *
 * Verbatim as printed. Repairs are applied in questions.ent.js, never here.
 */
var GG6_STAGED = [

{ n:157, page:26, apage:28, stem:'All of the following are causes of local otalgia except:',
  options:['TMJ dislocation','AOM before perforation','Perichondritis','Labyrinthitis'],
  answer:3, exp:'Diseases of inner ear don’t cause pain' },

{ n:158, page:26, apage:28, stem:'Which of the following causes referred otalgia through the trigeminal nerve?',
  options:['Acoustic neuroma','Tonsillitis','TMJ','Cervical arthritis'], answer:2,
  exp:'TMJ causes both localized otalgia (near to the ear) and referred otalgia through trigeminal.' },

{ n:159, page:26, apage:28, stem:'Dental caries cause otalgia through which cranial nerve?',
  options:['5th (Trigeminal nerve)','7th (Facial nerve)','9th (Glossopharyngeal nerve)','10th (Vagus nerve)'],
  answer:0, exp:'Trigeminal nerve (5th CN): Supplies nose, nasopharynx and oral cavity' },

{ n:160, page:26, apage:28, stem:'Disc prolapse causes referred otalgia through:',
  options:['C1, C2','C2, C3','C3, C4'], answer:1, exp:null },

{ n:161, page:26, apage:28, stem:'A patient experiences ear pain after tonsillectomy. What is the most likely cause?',
  options:['Glossopharyngeal nerve irritation','Otitis media','Eustachian tube dysfunction','Surgical site infection'],
  answer:0, exp:'After a tonsillectomy, **referred ear pain** is common due to irritation of the **glossopharyngeal nerve (cranial nerve IX)**, which shares sensory pathways with the middle ear. This type of pain is not due to an ear problem but is referred from the throat.' },

{ n:162, page:26, apage:28, stem:'A patient with a pyriform fossa tumor experiences ear pain. What is the most likely cause?',
  options:['Direct invasion of the middle ear','Referred pain through the glossopharyngeal nerve (cranial nerve IX)','Referred pain through the vagus nerve (cranial nerve X)','Eustachian tube obstruction'],
  answer:2, exp:'Vagus nerve supplies larynx, hypopharynx' },

{ n:163, page:26, apage:28, stem:'Which of the following is true about acoustic neuroma and its association with ear pain?',
  options:['Acoustic neuroma causes referred pain through the facial nerve (Hitzelberger\'s sign).','Acoustic neuroma causes referred pain through the trigeminal nerve (Trigeminal neuralgia).','Acoustic neuroma causes pain only through the vestibulocochlear nerve.','Acoustic neuroma does not cause pain'],
  answer:0, exp:'Acoustic neuroma causes referred pain through the facial nerve (Hitzelberger\'s sign). Hitzelberger\'s sign refers to pain or discomfort that occurs along the facial nerve distribution (in external ear and behind the ear) specifically when there is pressure on the facial nerve (cranial nerve VII) due to an acoustic neuroma. This sign is typically associated with facial nerve involvement in acoustic neuromas.' },

{ n:164, page:26, apage:28, stem:'Which of the following is painful condition?',
  options:['allergic rhinitis','chronic rhinosinusitis','CSOM','furunculosis of EAC'],
  answer:3, exp:'CSOM isn’t painful unless acute on top of chronic, complicated CSOM, malignant transformation' },

{ n:165, page:26, apage:29, stem:'A patient presents with unilateral clear ear discharge. What should you suspect?',
  options:['Middle ear infection','Cerebrospinal fluid (CSF) leakage','Tympanic membrane perforation','Chronic otitis media'],
  answer:1, exp:null },

{ n:166, page:27, apage:29, stem:'In the previous case, what is the next step?',
  options:['Perform a tympanometry','Measure beta-transferrin levels','Perform an audiogram'],
  answer:1, exp:'Beta-2 transferrin and Beta trace protein are important constituent of CSF and help in diagnosis of CSF leakage',
  flag:'Linked to Q165 (unilateral clear ear discharge). Repaired.' },

{ n:167, page:27, apage:29, stem:'In the previous case, which of the following is the most feared complication?',
  options:['Facial nerve paralysis','Hearing loss','Meningitis','Tinnitus'], answer:2, exp:null,
  flag:'Linked to Q165. Repaired.' },

{ n:168, page:27, apage:29, stem:'The following perforation is associated with ……. discharge',
  options:['Clear, watery discharge','purulent, scanty discharge','Mucopurulent, odorless, intermittent discharge','Bloody discharge'],
  answer:2, img:true, exp:'The otoscopy shows tubotympanic CSOM' },

{ n:169, page:27, apage:29, stem:'The following perforation is associated with ……. Discharge',
  options:['Clear, watery discharge','purulent, scanty discharge','Mucopurulent, odorless, intermittent discharge','Bloody discharge'],
  answer:1, img:true, exp:'The otoscopy shows attic0-antral CSOM',
  flag:'⚠️ The printed explanation reads "attic0-antral" — a typo for attico-antral.' },

{ n:170, page:27, apage:29, stem:'In the previous case x ray will show',
  options:['cellular mastoid','acellular mastoid','filling defect','b & c'], answer:3, exp:null,
  flag:'Linked to Q169 (attico-antral CSOM). Repaired.' },

{ n:171, page:27, apage:29, stem:'Absence of mucus in purulent otorrhea occur in all of following except:',
  options:['external ear disorder','acute necrotic OM','safe type CSOM','unsafe type CSOM'],
  answer:2, exp:'It causes mucopurulent discharge' },

{ n:172, page:27, apage:29, stem:'The most common cause of fetid discharge in children is:',
  options:['Acute otitis media','Chronic otitis media','Neglected foreign body','Meningitis'],
  answer:2, exp:null },

{ n:173, page:27, apage:29, stem:'The following patient will have ……. discharge',
  options:['Serous','Mucopurulent','Purulent','Bloody'], answer:3, img:true,
  exp:'The patient has glomus tumor' },

{ n:174, page:27, apage:29, stem:'The most common malignant tumor in the head and neck region (involving the ear) is:',
  options:['Adenoid cystic carcinoma','Basal cell carcinoma','Squamous cell carcinoma (SCC)','Melanoma'],
  answer:2, exp:null },

{ n:175, page:28, apage:29, stem:'A patient in severe road traffic accident presents with unilateral clear watery otorrhea. What is management?',
  options:['CSF otorrhea is emergency and needs immediate repair','CSF otorrhea is managed with conservative treatment and follow up'],
  answer:1, exp:'In trauma usually skull base fractures close spontaneously but imaging must be done and if CSF leakage remain continuous perform repair of the defect' },

{ n:176, page:28, apage:29, stem:'Otalgia from mouth ulcers is referred through',
  options:['trigeminal nerve','facial nerve','glossopharyngeal nerve','vagus nerve'], answer:0, exp:null },

{ n:177, page:28, apage:29, stem:'All of the following are causes of referred otalgia except',
  options:['dental pain','supraglottic tumor','quinsy','acute SOM'], answer:3, exp:null },

{ n:178, page:28, apage:29, stem:'TMJ diseases cause otalgia through',
  options:['referred through trigeminal nerve','referred through glossopharyngeal nerve','Local Otalgia','A&C'],
  answer:3, exp:null }

];
