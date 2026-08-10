/* Grade Gain — ENT QB.pdf, NOSE chapter 1: "Anatomy of the nose".
 * Questions book pp.44–48 (PDF 53–57); answers book pp.48–49 (PDF 57–58).
 * THIS OPENS THE NOSE SECTION.
 *
 * ⚠️⚠️ THE NUMBERING RESTARTED AT 1. Book p.44 heads "CHAPTER 2: NOSE" and the
 *    first question is numbered 1, confirming §14i: the book's chapters are the
 *    three SECTIONS, and what the contents page calls chapters are topics inside
 *    them. The running header on pp.45–49 reads "Chapter 2: Anatomy of the Nose"
 *    — number = section, title = topic.
 * ✅ 46 PRINTED AGAINST 46 PROMISED — the contents page is right for the first
 *    time since Ear ch.2.
 * ⚠️ THE ANSWER BLOCK OVERLAPS AGAIN. Book p.48 carries Q41–Q46 in the left
 *    column and "Anatomy of nose / Answers" beginning in the right. Reading only
 *    up to the TOC's "Page As" would have dropped six questions.
 * ⚠️ Q22 and Q42 print only THREE options.
 * ⚠️ Q45's stem prints its number twice — "45.45.Pus collected…" — and the key
 *    for Q36 does the same, "36.36.Correct answer B."
 * ⚠️ Q25's key is printed as a bare "B." with no text beside it — the only one
 *    in the set with no restatement of the option.
 * ⚠️ Q40 opens "In the previous case" — repaired in questions.ent.js.
 * ⚠️ Q39 prints TWO images: a nasal endoscopy labelled MT / IT / S, and an axial
 *    CT. Both need cutting.
 * ⚠️ TWO KEYS HAVE A SECOND DEFENSIBLE OPTION — Q19 and Q11; see the flags.
 * ⚠️ Q16's option d prints "Supereior ethmoidal cell".
 *
 * Verbatim as printed. Repairs are applied in questions.ent.js, never here.
 */
var GGN1_STAGED = [

{ n:1, page:44, apage:48, stem:'All of the following form the roof of the nose except:',
  options:['Nasal bone','Frontal bone','Cribriform plate of ethmoid bone','Sphenoid bone','Perpendicular plate of ethmoid bone'],
  answer:4, exp:'It is a part of septum' },

{ n:2, page:44, apage:48, stem:'In damage to which bone does CSF rhinorrhea occur?',
  options:['Ethmoid bone','Frontal bone','Sphenoid bone','Temporal bone'], answer:0,
  exp:'Cribriform plate of ethmoid bone separates the nose from brain. So, in operations of the nose or sinus we can damage the brain and cause CSF rhinorrhea.' },

{ n:3, page:44, apage:48, stem:'The roof of the nose separates the nose from which cranial fossa?',
  options:['Anterior cranial fossa','Middle cranial fossa','Posterior cranial fossa','Infratemporal fossa'],
  answer:0, exp:null },

{ n:4, page:44, apage:48, stem:'All of the following open into the middle meatus except:',
  options:['Frontal sinus','Maxillary sinus','Posterior ethmoidal sinus','Anterior ethmoidal sinus'],
  answer:2, exp:null,
  flag:'Near-twin of Q8 on the same page — the third option differs (posterior ethmoidal vs sphenoid). A REPLACED distractor, so both are held.' },

{ n:5, page:44, apage:48, stem:'All of the following belong to the osteomeatal complex except:',
  options:['Middle meatus','Infundibulum','Uncinate process','Posterior ethmoidal sinus'],
  answer:3, exp:null },

{ n:6, page:44, apage:48, stem:'The largest meatus in the lateral wall of the nasal cavity is:',
  options:['Superior meatus','Middle meatus','Inferior meatus','Common meatus'], answer:2, exp:null },

{ n:7, page:44, apage:48, stem:'Maxillary sinus opens in',
  options:['Superior meatus','Middle meatus','Inferior meatus','Spheno-ethmoidal recess'], answer:1, exp:null },

{ n:8, page:44, apage:48, stem:'All of the following open into the middle meatus except:',
  options:['Frontal sinus','Maxillary sinus','Sphenoid sinus','Anterior ethmoidal sinus'],
  answer:2, exp:null,
  flag:'Near-twin of Q4 on the same page; see that flag.' },

{ n:9, page:44, apage:48, stem:'Anterior ethmoidal air cells open in',
  options:['Superior meatus','Middle meatus','Inferior meatus','Sphenoethmoidal recess'], answer:1, exp:null },

{ n:10, page:44, apage:48, stem:'The nasion refers to:',
  options:['The tip of the nose','The junction of the frontal and nasal bones','The root of the nasal septum','The lateral wall of the nasal cavity'],
  answer:1, exp:'The nose is pyramidal in shape. Its upper part at the junction between the nasal and frontal bones is called the root or nasion' },

{ n:11, page:44, apage:48, stem:'All of the following form the bony septum except:',
  options:['Vomer','Perpendicular plate of the ethmoid','Nasal bone','cribriform plate of ethmoid'],
  answer:3, exp:null,
  flag:'⚠️ TWO DEFENSIBLE EXCEPTIONS — the nasal bone (option c) is not part of the bony septum either. Key printed as D.' },

{ n:12, page:44, apage:48, stem:'Which part of the nose can have furunculosis?',
  options:['Septal cartilage','Nasal floor','Nasal vestibule','Middle meatus'], answer:2,
  exp:'The vestibule: The most anterior part of the nose. It contains hair follicles = skin' },

{ n:13, page:44, apage:48, stem:'All of the following form cartilaginous external skeleton of the nose except:',
  options:['Lateral nasal cartilage','Septal cartilage','Alar cartilage','Vomer'], answer:3, exp:null },

{ n:14, page:45, apage:48, stem:'The choana is bounded by the following structures:',
  options:['Vomer medially and medial pterygoid plate laterally','Vomer medially and maxillary bone laterally','Nasal septum medially and lateral nasal wall laterally','Inferior turbinate medially and lateral nasal wall laterally'],
  answer:0, exp:null },

{ n:15, page:45, apage:48, stem:'Nasolacrimal duct opens in',
  options:['Superior meatus','Middle meatus','Inferior meatus','Sphenoethmoidal recess'], answer:2, exp:null },

{ n:16, page:45, apage:48, stem:'The largest anterior ethmoidal cell is the:',
  options:['Agger nasi','Bulla ethmoidalis','Middle ethmoidal cell','Supereior ethmoidal cell'],
  answer:1, exp:null, flag:'Option d prints "Supereior".' },

{ n:17, page:45, apage:48, stem:'Which of the following are not considered anterior sinuses?',
  options:['Maxillary sinus','Frontal sinus','Ethmoid sinus','Sphenoid sinus'], answer:3, exp:null },

{ n:18, page:45, apage:48, stem:'________ is the lateral boundary of the osteomeatal complex.',
  options:['Middle turbinate','Lamina papyracea','Nasal septum','Cribriform plate'], answer:1,
  exp:'Boundaries:\n• Laterally by Lamina papyracea "medial orbital wall"\n• Medially by Middle turbinate' },

{ n:19, page:45, apage:48, stem:'----------are the posterior group of sinuses.',
  options:['Maxillary sinuses','Posterior ethmoid sinuses','Sphenoid sinuses','Frontal sinuses'],
  answer:2, exp:null,
  flag:'⚠️ TWO DEFENSIBLE ANSWERS — the posterior group is the posterior ethmoid AND the sphenoid, so option b is correct too. Key printed as C.' },

{ n:20, page:45, apage:48, stem:'The lining of the respiratory area is ________ while the vestibule is ________.',
  options:['Ciliated pseudostratified columnar epithelium; Stratified squamous epithelium','Stratified squamous epithelium; Ciliated pseudostratified columnar epithelium','Transitional epithelium; Simple cuboidal epithelium','Simple columnar epithelium; Stratified squamous epithelium'],
  answer:0, exp:null },

{ n:21, page:45, apage:48, stem:"All of these arteries are involved in Little's area except:",
  options:['Sphenopalatine','Posterior ethmoidal','Greater palatine','Superior labial'], answer:1, exp:null },

{ n:22, page:45, apage:48, stem:'The arterial blood supply of the nose is through:',
  options:['External carotid artery (ECA)','Internal carotid artery (ICA)','Both'], answer:2,
  exp:'Nose is the ONLY organ taking blood supply from internal and external carotid arteries',
  flag:'Only three options printed.' },

{ n:23, page:45, apage:48, stem:'The most common cause of anterior epistaxis is:',
  options:['Idiopathic','Hypertension','Sinus infection','Allergies'], answer:0, exp:null },

{ n:24, page:45, apage:48, stem:'The most common cause of severe posterior epistaxis in old age is:',
  options:['Hypertension','Trauma','Vascular abnormalities (e.g., aneurysms)','Coagulopathy'],
  answer:0, exp:null },

{ n:25, page:46, apage:49, stem:'The lymphatic drainage of the nasal cavity is as follows:',
  options:['Vestibule (anterior part) drains to the submental LNs, and the rest of the cavity drains to the deep cervical nodes','Vestibule (anterior part) drains to the submandibular lymph nodes, and the rest of the cavity drains to the retropharyngeal lymph nodes, then to the upper deep cervical lymph nodes','Vestibule (anterior part) drains to the upper deep cervical lymph nodes, and the rest of the cavity drains to the submandibular lymph nodes','The entire nasal cavity drains to the submandibular lymph nodes'],
  answer:1, exp:null, flag:'⚠️ Key printed as a bare "B." with no option text beside it.' },

{ n:26, page:46, apage:49, stem:'The nerve supply to the nose includes:',
  options:['Olfactory nerve and trigeminal nerve (ophthalmic "V1" and maxillary "V2")','Olfactory nerve and facial nerve','Trigeminal nerve (mandibular "V3" and maxillary "V2")','Vagus nerve and olfactory nerve'],
  answer:0, exp:null },

{ n:27, page:46, apage:49, stem:'The venous communication between the nasal cavity and the cranial cavity is primarily facilitated by the following veins:',
  options:['Pterygoid plexus, facial vein, ophthalmic vein','Jugular vein, external carotid vein, subclavian vein','Sphenopalatine vein, internal jugular vein, maxillary vein','Temporal vein, deep facial vein, anterior jugular vein'],
  answer:0, exp:null },

{ n:28, page:46, apage:49, stem:'The main function of the nose is:',
  options:['Air warming','Mucociliary clearance','Olfactory sensation','Voice resonance'], answer:1, exp:null },

{ n:29, page:46, apage:49, stem:'The reflex arc for sneezing involves the following afferent and efferent pathways:',
  options:['Afferent: Trigeminal nerve (V1), Efferent: Vagus nerve','Afferent: Olfactory nerve, Efferent: Facial nerve','Afferent: Trigeminal nerve (V1), Efferent: Trigeminal nerve (V3)','Afferent: Trigeminal nerve (V2), Efferent: Vagus nerve'],
  answer:0, exp:null,
  flag:'Key printed as "A. Afferent: Trigeminal, Efferent: Vagus nerve" — the answer block drops the V1 qualifier that distinguishes a from d.' },

{ n:30, page:46, apage:49, stem:'The general sensation of the anterior 2/3 of the tongue is ________ while the posterior 1/3 is ________.',
  options:['Trigeminal nerve (CN V); Glossopharyngeal nerve (CN IX)','Glossopharyngeal nerve (CN IX); Vagus nerve (CN X)','Trigeminal nerve (CN V); Facial nerve (CN VII)','Vagus nerve (CN X); Trigeminal nerve (CN V)'],
  answer:0, exp:null },

{ n:31, page:46, apage:49, stem:'The taste sensation of the anterior 2/3 of the tongue is ________ while the posterior 1/3 is ________.',
  options:['Trigeminal nerve (CN V); Glossopharyngeal nerve (CN IX)','Facial nerve (CN VII)(chorda tympani); Glossopharyngeal nerve (CN IX)','Glossopharyngeal nerve (CN IX); Vagus nerve (CN X)','Trigeminal nerve (CN V); Facial nerve (CN VII)'],
  answer:1, exp:null },

{ n:32, page:46, apage:49, stem:'The bones forming the external nose are:',
  options:['Nasal bone, maxilla, frontal bone, and ethmoid bone','Nasal bone, maxilla, lacrimal bone, and zygomatic bone','Nasal bone, maxilla, frontal bone, and palatine bone','Nasal bone, maxilla, and frontal bone'],
  answer:3, exp:null },

{ n:33, page:47, apage:49, stem:'The groove that lies between the bulla ethmoidalis and the infundibulum is:',
  options:['Uncinate process','Hiatus semilunaris','Middle turbinate','Nasal septum'], answer:1, exp:null },

{ n:34, page:47, apage:49, stem:'The most common nasal congenital anomaly is:',
  options:['Nasal dermoid cyst','Septal deviation','Choanal atresia','Nasal polyps'], answer:2, exp:null },

{ n:35, page:47, apage:49, stem:'In choanal atresia, the ratio of unilateral to bilateral cases is ________ and the condition is more common in ________.',
  options:['1:1; Males','2:1; Females','3:1; Males','2:1; Males'], answer:1, exp:null },

{ n:36, page:47, apage:49, stem:'Why is bilateral choanal atresia considered an emergency in neonates?',
  options:['Neonates are obligate mouth breathers','Neonates are obligate nasal breathers','It causes a severe fever','It leads to severe vomiting'],
  answer:1, exp:null, flag:'The key prints its number twice — "36.36.Correct answer B."' },

{ n:37, page:47, apage:49, stem:'Choanal atresia is associated with all of the following except:',
  options:['Retarded growth','Congenital heart defects','Coloboma','Marfan syndrome'], answer:3, exp:null },

{ n:38, page:47, apage:49, stem:'The best diagnostic modality for choanal atresia is:',
  options:['CT coronal','CT axial','MRI','Nasopharyngoscopy'], answer:1, exp:null },

{ n:39, page:47, apage:49, stem:'A 3-hour-old neonate presents with severe respiratory distress, cyanosis that worsens when not crying, and difficulty feeding. Physical examination reveals no obvious facial deformities. The neonate is struggling to breathe through the nose. What is the most likely diagnosis and the next step in management?',
  options:['Bilateral choanal atresia; Immediate CT scan of the head and neck','Bilateral choanal atresia; Immediate nasopharyngoscopy','Neonatal respiratory distress syndrome; Chest X-ray','Pierre Robin sequence; MRI of the head and neck'],
  answer:0, exp:null,
  flag:'⚠️ TWO images printed: a nasal endoscopy labelled MT / IT / S, and an axial CT.' },

{ n:40, page:47, apage:49, stem:'In the previous case, what is the immediate management to stabilize the neonate before surgical intervention?',
  options:['Intubation and orogastric tube feeding','Nasal cannula oxygen therapy','Immediate surgery within the first few hours of birth','Antibiotic therapy and observation'],
  answer:0, exp:null, flag:'Linked to Q39 (bilateral choanal atresia). Repaired.' },

{ n:41, page:48, apage:49, stem:'What is the definitive treatment for choanal atresia?',
  options:['Endoscopic debridement','Choanoplasty','Balloon dilation','Nasal steroid therapy'], answer:1, exp:null },

{ n:42, page:48, apage:49, stem:'Most common presentation of bilateral choanal atresia is:',
  options:['Respiratory distress','Stridor','nasal discharge'], answer:0, exp:null,
  flag:'Only three options printed.' },

{ n:43, page:48, apage:49, stem:'Cyanosis in bilateral choanal atresia is relieved by:',
  options:['Oxygen supplementation','Crying','Lying back','Placement of a nasogastric tube'],
  answer:1, exp:null },

{ n:44, page:48, apage:49, stem:'The terminal branches of the external carotid artery are:',
  options:['Superficial temporal & maxillary arteries','Ophthalmic and facial arteries','Lingual and occipital arteries','Internal carotid and external jugular veins'],
  answer:0, exp:null },

{ n:45, page:48, apage:49, stem:'Pus collected between the superior turbinate and lateral septal wall is most commonly associated with:',
  options:['Maxillary sinusitis','Sphenoid sinusitis','Posterior ethmoid sinusitis','Frontal sinusitis'],
  answer:2, exp:null, flag:'The stem prints its number twice — "45.45.Pus collected…".' },

{ n:46, page:48, apage:49, stem:'Orbit complications can occur through which of the following sinuses?',
  options:['Maxillary sinus','Sphenoid sinus','Ethmoid sinus','Frontal sinus'], answer:2, exp:null }

];
