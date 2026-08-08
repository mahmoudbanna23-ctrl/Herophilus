/* ENT QB.pdf (Grade Gain) — Chapter 1: Surgical Anatomy of the Ear.
   Book pp.1–5 = PDF pp.10–14. 29 questions, matching the contents page exactly.
   Staged verbatim 2026-08-08. NOT yet written into the app — the five-stage sweep
   runs against all 717 existing entries first, because a match here is a CROSS-BANK
   match and the rule is ADD THE BANK, never add an entry.

   `exp` holds the bank's own printed explanation, or null where it prints none.
   13 of 29 carry one (45%). `key` is the printed letter, 0-based in `answer`. */

var GG_STAGED = [
{ n:1, page:1, apage:4, stem:'Which of the following is NOT a component of the external ear?',
  options:['Auricle (Pinna)','External auditory canal','Tympanic membrane','Ossicles'], answer:3,
  exp:'Ossicles are a content of middle ear. External ear consists of: Auricle, External auditory canal, tympanic membrane' },

{ n:2, page:1, apage:4, stem:'Which of the following structures is NOT composed of cartilage?',
  options:['Concha','Tragus','Helix','Trago-helicine incisura'], answer:3,
  exp:'Auricle (pinna): divided into 2 parts according to cartilaginous content: **Cartilage containing areas (minimal subcutaneous tissue)** — Concha; Tragus (tenderness if inflammation in external auditory meatus); Helix. **Cartilage Absent in 2 areas:** — Lobule (site of piercing, if we do it in another area that will leads to perichondritis); Trago-helix Incisura (site for incision)' },

{ n:3, page:1, apage:4, stem:'Which of the following is NOT a characteristic of the external auditory canal?',
  options:['Outer one-third is cartilaginous','Inner two-third is cartilaginous','Its length is 24 mm','It is lined by keratinized stratified squamous epithelium'], answer:1,
  exp:null },

{ n:4, page:1, apage:4, stem:'Furunculosis typically occurs in which part of the external auditory canal?',
  options:['Outer cartilaginous part','Inner bony part','Both'], answer:0,
  exp:'Outer cartilaginous part contains hair follicles while inner bony part is devoid of follicles' },

{ n:5, page:1, apage:4, stem:'To examine the ear, the external auditory canal is straightened by drawing the ear in which direction?',
  options:['Upwards, outwards, and forward','Downwards, outwards, and backwards','Upwards, outwards, and backwards'], answer:2,
  exp:null },

{ n:6, page:1, apage:4, stem:'In children, the ear is examined by drawing the ear in which direction?',
  options:['Downwards only','Upwards only','Upwards, outwards, backwards'], answer:0,
  exp:'In infants we need only to draw the ear **downward** to straighten the canal not completely developed.' },

{ n:7, page:1, apage:4, stem:'Which of the following correctly lists the ossicles of the middle ear from lateral to medial?',
  options:['Malleus, Stapes, Incus','Malleus, Incus, Stapes','Incus, Malleus, Stapes','Stapes, Malleus, Incus'], answer:1,
  exp:null },

{ n:8, page:1, apage:4, stem:'The chorda tympani nerve carries ______ from the ______ part of the tongue.',
  options:['Taste sensation, anterior two-thirds','General sensation, anterior two-thirds','Taste sensation, posterior one-third','General sensation, posterior one-third'], answer:0,
  exp:null },

{ n:9, page:1, apage:4, stem:'All of the following are components of the medial wall of the middle ear except:',
  options:['Promontory','Horizontal part of the facial nerve','Vertical part of the facial nerve','Oval window','Round window'], answer:2,
  exp:'The tympanic or horizontal part of facial passes in the medial wall of middle ear while the vertical or mastoid part passes in the posterior wall of middle ear' },

{ n:10, page:1, apage:4, stem:'All of the following are components of the anterior wall of the middle ear except:',
  options:['Tensor tympani muscle','Eustachian tube','Bony plate separating it from Internal carotid artery (ICA)','Bony plate separating it from Internal jugular vein (IJV)'], answer:3,
  exp:'IJV lies inferior to middle ear' },

{ n:11, page:2, apage:5, stem:'The cone of light is typically seen in which part of the tympanic membrane?',
  options:['Anterosuperior quadrant','Anteroinferior quadrant','Posterosuperior quadrant','Posteroinferior quadrant'], answer:1,
  exp:null },

{ n:12, page:2, apage:5, stem:'Which of following is NOT true about pars tensa of tympanic membrane?',
  options:['Responsible for hearing','Lacks fibrous tissue','First part to perforate in acute otitis media (AOM)'], answer:1,
  exp:'Middle Fibrous layer is incomplete, surrounded by annulus with handle of malleus embedded into it (lacking in pars flaccida)' },

{ n:13, page:2, apage:5, stem:'All of the following statements about the Eustachian tube are true except:',
  options:['The upper one-third is bony','The lower two-thirds are cartilaginous','It measures 36 mm in length','The bony opening is closed'], answer:3,
  exp:'It is always patent' },

{ n:14, page:2, apage:5, stem:'Which of following correctly matches nerve supply of the middle ear muscles?',
  options:['Tensor tympani is innervated by the facial nerve; stapedius is innervated by the trigeminal nerve.','Both tensor tympani and stapedius are innervated by the facial nerve.','Tensor tympani is innervated by the trigeminal nerve; stapedius is innervated by the facial nerve.','Both tensor tympani and stapedius are innervated by the trigeminal nerve.'], answer:2,
  exp:null },

{ n:15, page:2, apage:5, stem:'Which serious complication can result from the superior spread of a middle ear infection?',
  options:['Cerebellar abscess','Temporal lobe abscess','Brainstem infarction','Occipital lobe abscess'], answer:1,
  exp:'Tegmen tympani: thin plates of bone separates ME from Middle cranial fossa and temporal lobe of the brain as a result infection in the middle ear can spread superiorly causing temporal lobe abscess' },

{ n:16, page:2, apage:5, stem:'Why are middle ear infections more common in children compared to adults?',
  options:['The Eustachian tube in children is longer, narrower, and more vertical.','The Eustachian tube in children is shorter, wider, and more horizontal.','The Eustachian tube in children is longer, wider, and more vertical.','The Eustachian tube in children is shorter, narrower, and more vertical'], answer:1,
  exp:null },

{ n:17, page:2, apage:5, stem:'Why is secretory otitis media more common in individuals with a cleft palate?',
  options:['The Eustachian tube is abnormally wide due to muscle overactivity.','The absence of palatal muscles prevents the opening of the Eustachian tube.','The Eustachian tube remains constantly open due to muscle weakness.','Excessive mucus production in the nasopharynx directly infects the middle ear.'], answer:1,
  exp:'Bony end is opened by palatal muscles (Levator palati / Tensor palati). So, in cleft palate where these muscles are absent, ET is always closed leading to **secretory otitis media**' },

{ n:18, page:2, apage:5, stem:'Which structure serves as the sensory organ of the semicircular canals (SCC)?',
  options:['Organ of Corti','Macula','Crista ampullaris'], answer:2,
  exp:null },

{ n:19, page:2, apage:5, stem:'Which structure is responsible for detecting up-and-down linear acceleration?',
  options:['Cochlea','Saccule','Utricle','Semicircular canals (SCC)'], answer:1,
  exp:null },

{ n:20, page:3, apage:5, stem:'Which structure is responsible for detecting back-and-forth linear acceleration?',
  options:['Cochlea','Saccule','Utricle','Semicircular canals (SCC)'], answer:2,
  exp:'TABLE — Cochlea | Vestibule | SCC. Sensory organ: Organ of Corti | Macula | Crista ampullaris. Function: Hearing | Balance; Linear acceleration: Saccule for up-down, Utricle for back-forth | Balance; Angular acceleration' },

{ n:21, page:3, apage:5, stem:'Dental caries cause otalgia through which cranial nerve?',
  options:['5th (Trigeminal)','7th (Facial)','9th (Glossopharyngeal)','10th (Vagus)'], answer:0,
  exp:null },

{ n:22, page:3, apage:5, stem:'Cervical spine issues cause referred otalgia through which cranial nerves?',
  options:['C1, C2','C2, C3','C3, C4'], answer:1,
  exp:null },

{ n:23, page:3, apage:5, stem:'Tonsillitis causes referred otalgia through which cranial nerve?',
  options:['Trigeminal','Facial','Glossopharyngeal','Vagus'], answer:2,
  exp:null },

{ n:24, page:3, apage:5, stem:'A patient complaining of ear pain, with a pyriform fossa tumor. What nerve is responsible for referred otalgia?',
  options:['Vagus nerve','Facial nerve','Trigeminal nerve','Glossopharyngeal nerve'], answer:0,
  exp:'Referred otalgia — **V**: Trigeminal (Supplies nasopharynx and oral cavity e.g. Dental caries and sinusitis). **IX**: Glossopharyngeal (Oropharyngeal lesions e.g. Tonsilitis / Peritonsillar abscess). **X**: Vagus (laryngeal tumor). **C2 & C3**: e.g. Cervical spine injury' },

{ n:25, page:3, apage:5, stem:"Which of the following doesn't belong to middle ear cleft?",
  options:['hypotympanum','Mastoid air cells','Scala tympani','bony Eustachian tube'], answer:2,
  exp:null },

{ n:26, page:3, apage:5, img:true, stem:'Regarding pars flaccida which of the following is true?',
  options:['It has a fibrous layer','Lateral to scutum','It has a role in hearing','1st part to be retracted in negative pressure','Mobile part'], answer:0,
  exp:'1st part to be perforated is pars tensa, 1st part to be retracted is pars flaccida',
  flag:'⚠️ MIS-KEY — printed key A contradicts the bank\'s OWN printed explanation, which states the pars flaccida is the first part to be RETRACTED (option d), and contradicts its own Q12 explanation, which says the fibrous layer is "lacking in pars flaccida".' },

{ n:27, page:3, apage:5, stem:'What is the most common cause of temporal lobe abscess?',
  options:['Direct spread from a middle ear infection (otitis media)','Hematogenous spread from a distant infection','Trauma to the temporal bone','Spread from a frontal sinus infection'], answer:0,
  exp:null },

{ n:28, page:4, apage:4, img:true, stem:'Which of the following is NOT typically seen in a normal tympanic membrane?',
  options:['Concave shape','Light reflex (cone of light)','Handle of the malleus','Footplate of the stapes'], answer:3,
  exp:null },

{ n:29, page:4, apage:5, stem:'What is the most common site of foreign body impaction in the external auditory canal (EAC)?',
  options:['Osseocartilaginous junction between outer 1/3 and inner 2/3','Middle third of the canal','Inner third of the canal','At the junction of the tympanic membrane'], answer:0,
  exp:null }
];
