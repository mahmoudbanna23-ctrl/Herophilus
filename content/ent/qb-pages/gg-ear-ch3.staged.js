/* Grade Gain — ENT QB.pdf, Ear chapter 3: "Acute Otitis Media".
 * Questions book pp.9–12 (PDF 18–21); answers book pp.13–14 (PDF 22–23).
 *
 * ⚠️ THE CONTENTS PAGE PROMISED 40 — THE BANK PRINTS 41. Q50 … Q90, no number
 *    skipped, and chapter 4 opens at Q91 (book p.15, verified). §14's TOC map is a
 *    plan, not a count. Chapters 1 and 2 matched it exactly; this one does not.
 * ⚠️ The running header again says "Chapter 1" on every page — the title beside it
 *    ("Acute Otitis Media") is right, the number is furniture.
 *
 * Verbatim as printed. Repairs (linked stems, the mis-key) are applied in
 * questions.ent.js, never here — this file is the record of what the page said.
 */
var GG3_STAGED = [

{ n:50, page:9, apage:13, stem:'Acute suppurative otitis media is defined as:',
  options:['Acute bacterial inflammation of the middle ear cleft during the first 3 months.',
           'Acute bacterial inflammation of the middle ear cleft during the first 3 weeks.',
           'Acute bacterial or viral inflammation of the middle ear cleft during the first month.',
           'Acute bacterial or viral inflammation of the middle ear cleft during the first 3 weeks.'],
  answer:1, exp:null },

{ n:51, page:9, apage:13, stem:'The most common source of acute otitis media (AOM) is:',
  options:['Eustachian tube','Blood','Rupture of the tympanic membrane'],
  answer:0, exp:'Transmission of infection **Eustachian tube** (Most common) Extension **of infection** through ET (Rhinitis, sinusitis, adenoiditis). **Passage of infected materials** (milk, vomitus, nasal packing). **External auditory canal** if there is drum perforation (rare)' },

{ n:52, page:9, apage:13, stem:'The most common organism responsible for middle ear infection is:',
  options:['Streptococcus','Staphylococcus aureus','Pneumococci'],
  answer:2, exp:'Causative organisms are **Pneumococci** (Gram-positive diplococci) are responsible for 50% of episodes of AOM. **Hemophilus influenzae** (Gram-negative rod). **Moraxella catarrhalis** (Gram-negative cocci), **Streptococci**' },

{ n:53, page:9, apage:13, stem:'All of the following occur in acute otitis media before perforation, except:',
  options:['Severe pain','Ear fullness','Fever','Discharge'], answer:3, exp:null },

{ n:54, page:9, apage:13, stem:'The type of hearing loss typically seen in acute otitis media is:',
  options:['Conductive hearing loss (CHL)','Sensorineural hearing loss (SNHL)','Mixed hearing loss'],
  answer:0, exp:'Lesions in external or middle ear cause CHL, while inner ear causes SNHL' },

{ n:55, page:9, apage:13, stem:'The type of discharge in AOM is',
  options:['Odorless','Mucopurulent','Pure purulent','A &B'], answer:3,
  exp:'At first the discharge is hemorrhagic or serosanguineous but shortly it becomes mucopurulent. Discharge is always odorless.' },

{ n:56, page:9, apage:13, stem:'Which of the following is NOT a treatment for acute otitis media (AOM)?',
  options:['Antibiotics','Antihistamines if the patient has allergies','Myringotomy in all cases'],
  answer:2, exp:'We proceed to myringotomy in case of Pending perforation, Thick TM in child, Complication occurs e.g. facial palsy or labyrinthitis' },

{ n:57, page:9, apage:13, stem:'The perforation in AOM is not',
  options:['Small','Central','In pars tensa','Mostly anteroinferior','In pars flaccida'],
  answer:4, exp:null },

{ n:58, page:9, apage:13, stem:'Acute necrotic otitis media is caused by:',
  options:['Pseudomonas','Beta-hemolytic streptococci','Staphylococcus aureus'], answer:1, exp:null },

{ n:59, page:9, apage:13, stem:'The treatment for acute necrotic otitis media is:',
  options:['Antibiotics','Myringotomy','Myringoplasty'], answer:2, exp:null,
  flag:'⚠️ Key C. The acute phase is treated with antibiotics; myringoplasty repairs the residual perforation later. See the entry — both are addressed rather than one being called wrong.' },

{ n:60, page:9, apage:13, stem:'The lateral spread of acute mastoiditis can result in all of the following, except:',
  options:['Postauricular abscess','Zygomatic abscess','Bezold abscess','citelli abscess','c &d'],
  answer:4, exp:'C&D are inferior spread **Inferior spread:** Through the tip of the mastoid, giving Bezold’s abscess i.e., tracking of pus along the sternomastoid muscle. Through the medial wall of the tip giving, Citelli’s abscess i.e. tracking of pus along the posterior belly of the digastric muscle. While A&B are lateral spread. **Lateral spread:** Postauricular Abscess (spread upward) ear elevated, Zygomatic Abscess forward spread.' },

{ n:61, page:10, apage:13, stem:'The following otoscopy is characteristic of:',
  options:['Acute otitis media','Acute mastoiditis','Acute necrotic otitis media'], answer:2, img:true,
  exp:'1st tissue to die is the central kidney-shaped area of the pars tensa as it has poor blood supply. Portions with good blood supply along the manubrium, near the annulus tympanicus & the pars flaccida resist longer & may escape necrosis. In severe cases most of the tympanic membrane including its annulus sloughs [printed with a diagram of the drum’s blood supply: manubrial, circumferential and radial branches from the maxillary artery]' },

{ n:62, page:10, apage:13, stem:'Gradenigo syndrome is caused by:',
  options:['Mastoiditis','Petrositis','Sinus thrombophlebitis'], answer:1,
  exp:'Medial spread of acute mastoiditis causes Petrositis and Gradenigo syndrome' },

{ n:63, page:10, apage:13, stem:'The posterior superior bony external auditory canal (EAC) is affected due to the ______ spread of mastoiditis.',
  options:['Anterior','Posterior','Medial','Lateral'], answer:0,
  exp:'**Anterior spread** To the **posterosuperior** bony EAC causing **sagging** (swelling), To **fallopian canal** causing facial paralysis' },

{ n:64, page:10, apage:13, stem:'Sinus thrombophlebitis is caused by the ______ spread of mastoiditis.',
  options:['Anterior','Posterior','Medial','Lateral'], answer:1,
  exp:'Through the sinus plate leading to sinus thrombophlebitis' },

{ n:65, page:10, apage:14, stem:'All of the following are intracranial complications of AOM except:',
  options:['brain abscess','lateral thrombophlebitis','labyrinthitis'], answer:2,
  exp:'Cranial complications such as Petrositis, facial palsy, labyrinthitis and mastoiditis. Intracranial complications such as brain abscess, lateral sinus thrombosis, meningitis' },

{ n:66, page:10, apage:14, stem:'Discharge of acute mastoiditis is characterized by:',
  options:['Pulsatile','Mucopurulent','positive reservoir sign','all of the above'], answer:3, exp:null },

{ n:67, page:10, apage:14, stem:'all are true about treatment of acute mastoiditis except:',
  options:['The majority resolves by antibiotics','If tympanic membrane is intact myringotomy is required','the majority require surgery'],
  answer:2, exp:'Treatment of acute mastoiditis is **MEDICAL** (The majority will **resolve completely** by **antibiotics** or if the tympanic membrane is still **intact**, a **myringotomy** is needed) **SURGICAL**: needed in the following conditions (**Persistence** of pain, temperature, or otorrhea after **2-4 weeks** of adequate medical management. **Presence of a mastoid or neck abscess**, or presence of any cranial or intracranial complication, Drainage of the mastoid air cells is done by a **complete simple mastoidectomy**)' },

{ n:68, page:10, apage:14, stem:'Middle ear (ME) effusion typically presents with:',
  options:['Ear pain','Fever','Conductive hearing loss (CHL)'], answer:2,
  exp:'MEE is an accumulation of a fluid behind an intact tympanic membrane which may be asymptomatic except for fluid causing hearing deficit' },

{ n:69, page:10, apage:14, stem:'A patient undergoing otoscopy presents with these findings. The patient’s primary complaint is:',
  options:['Ear pain','Hearing loss','Fever','Ear discharge'], answer:1, img:true,
  exp:'The otoscopy shows air bubbles which occur in MEE that causes CHL' },

{ n:70, page:10, apage:14, stem:'What is the treatment for middle ear effusion (MEE) with congenital cleft palate with ET dysfunction?',
  options:['Antibiotic therapy','Myringotomy with grommet (ventilation tube) insertion','Hearing aids','Myringotomy with permanent t tube insertion'],
  answer:3, exp:null },

{ n:71, page:11, apage:14, stem:'What is the appropriate treatment for middle ear effusion in a patient with adenoid hypertrophy?',
  options:['Adenoidectomy with ventilation tube','Oral antibiotics','Nasal decongestants','Hearing aids'],
  answer:0, exp:null },

{ n:72, page:11, apage:14, stem:'What is the next step in managing middle ear effusion that persists for more than 90 days despite adequate medical treatment?',
  options:['Continuing medical therapy','Myringotomy with or without grommet (ventilation tube) insertion','Prescribe long-term antibiotics','Perform tympanoplasty'],
  answer:1, exp:null },

{ n:73, page:11, apage:14, stem:'A child presents with bilateral middle ear effusion for the past one week. What is the most appropriate management?',
  options:['Conservative management','Myringotomy with grommet (ventilation tube) insertion','T-tube insertion'],
  answer:0, exp:'An attempt at conservative therapy should be made. Surgery is done if 3 months pass without improvement despite adequate medical treatment' },

{ n:74, page:11, apage:14, stem:'The treatment for a 4-year-old with middle ear effusion for 1 month and delayed language development is:',
  options:['Myringotomy and ventilation tubes','Medical treatment'], answer:0,
  exp:'For a child with **middle ear effusion** that has lasted for a month and is associated with **delayed language development**, the recommended treatment is typically **myringotomy** with the insertion of **ventilation tubes**.' },

{ n:75, page:11, apage:14, stem:'What is the typical treatment for middle ear effusion caused by a common cold?',
  options:['Conservative management with decongestants and nasal steroids (watchful waiting)','Antibiotics for bacterial infection','Myringotomy and ventilation tubes','Surgical drainage and antibiotics'],
  answer:0, exp:'An attempt at conservative therapy should be made which includes: antibiotics, antihistamines, decongestants, mucolytics, and corticosteroids. the most IMPORTANT drugs are Allergic hypo sensitization, Valsalva maneuver).' },

{ n:76, page:11, apage:14, stem:'What is the best step for a patient with hearing loss and tympanic membrane perforation following a slap to the ear?',
  options:['Immediate surgical repair (myringoplasty)','Conservative treatment and water restriction from the ear.','Myringotomy with ventilation tube insertion','No treatment is necessary; allow the ear to heal naturally'],
  answer:1, exp:'Management of traumatic perforation: Most perforations heal spontaneously within a few weeks. Water precautions (keeping the ear dry) are essential to prevent infection. Topical or systemic antibiotics may be prescribed if there are signs of infection or to prevent secondary infection. Surgical repair (myringoplasty) is only considered if the perforation does not heal after 2–3 months.' },

{ n:77, page:11, apage:14, stem:'What is the best treatment for a patient with a tympanic membrane perforation persisting for 6 months after trauma?',
  options:['Observation and water precautions','Prescribe antibiotics and decongestants','Myringoplasty (surgical repair of the tympanic membrane)','Myringotomy with ventilation tube insertion'],
  answer:2, exp:null },

{ n:78, page:11, apage:14, stem:'What is the next step in managing unilateral middle ear effusion in an adult?',
  options:['Start antibiotics and decongestants','Perform myringotomy with ventilation tube insertion','Order a nasopharyngeal endoscopy to rule out nasopharyngeal carcinoma','Observe and reassess in 3 months'],
  answer:2, exp:null },

{ n:79, page:11, apage:14, stem:'What is the treatment for a first-time acute otitis media without tympanic membrane perforation?',
  options:['Immediate antibiotics and analgesics','Observation with symptomatic treatment (analgesics and antipyretics)','Myringotomy with ventilation tube insertion','Surgical drainage of the middle ear'],
  answer:0,
  exp:'In a patient experiencing their first episode of AOM without perforation, the approach is symptomatic management with analgesics and close observation. Antibiotics are only necessary if symptoms worsen or do not improve within 48–72 hours.',
  flag:'⚠️ SELF-CONTRADICTION. Printed key A (immediate antibiotics); the printed explanation on the same line describes option B, and Q80 keys the same policy to observation. Corrected to B in the entry, with what was printed recorded.' },

{ n:80, page:12, apage:14, stem:'What is first-line management for a 4-year-old child with unilateral otalgia after a common cold and a congested tympanic membrane on otoscopy?',
  options:['Analgesics and antipyretics with observation for 48 hours without antibiotics','Analgesics, antipyretics, local ear drops, and antibiotics','Analgesics, antipyretics, and parenteral antibiotics'],
  answer:0, exp:null },

{ n:81, page:12, apage:14, stem:'Acute necrotic otitis media causes all of the following except:',
  options:['Pure purulent discharge','Mucopurulent discharge','Bare promontory','Large kidney shaped necrosis'],
  answer:1, exp:null },

{ n:82, page:12, apage:14, stem:'50-year-old patient with left cervical lymphadenopathy, left ear fullness, what is the next step?',
  options:['Nasopharyngoscopy','MRI','CT'], answer:0, exp:null },

{ n:83, page:12, apage:14, stem:'All of the following are complications of MEE except:',
  options:['blue ear','tympanosclerosis','CHL','SNHL'], answer:3, exp:null },

{ n:84, page:12, apage:14, stem:'All of the following are causes of AOM except',
  options:['Pneumococci','Streptococcus','Hemophilus influenza','Pseudomonas'], answer:3, exp:null },

{ n:85, page:12, apage:14, stem:'Which of following occurs with AOM?',
  options:['severe pain, bulging TM','mild pain, bulging TM','severe pain, retracted TM'], answer:0, exp:null },

{ n:86, page:12, apage:14, stem:'All of the following cases require myringotomy except:',
  options:['AOM pending perforation','AOM causing facial palsy','Atelectasis','Otosclerosis'], answer:3, exp:null },

{ n:87, page:12, apage:14, stem:'A 7-year-old child develops acute otitis media. He was treated with antibiotics for 10 days. His pain & fever subsided completely but still had conductive hearing loss. what is your next line of treatment?',
  options:['Wait and watch for 3 months for fluid to drain spontaneously','Do a myringotomy and insert a grommet','Give another course of a different antibiotic','Do a myringotomy and culture the middle ear fluid'],
  answer:0, exp:null },

{ n:88, page:12, apage:14, stem:'The following plaques on ear drum is called ………',
  options:['Tympanosclerosis','Otosclerosis','glue ear','hemotympanum'], answer:0, exp:null,
  flag:'⚠️ "The following plaques" refers to a picture the page DOES NOT PRINT. Answerable from the words; stem repaired in the entry and the missing figure recorded.' },

{ n:89, page:12, apage:14, stem:'If these plaques reach annulus which type of hearing loss can occur?',
  options:['CHL','SNHL','Mixed'], answer:0, exp:null,
  flag:'Linked to Q88 — "these plaques" names nothing on its own. Repaired.' },

{ n:90, page:12, apage:14, stem:'In the previous case which curve appears in tympanometry',
  options:['Type A','Type B','Type As'], answer:2, exp:null,
  flag:'Linked to Q88/Q89 — "the previous case" cannot survive the shuffle. Repaired.' }

];
