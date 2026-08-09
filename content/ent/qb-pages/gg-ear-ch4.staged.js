/* Grade Gain — ENT QB.pdf, Ear chapter 4: "Chronic Otitis Media".
 * Questions book pp.15–18 (PDF 24–27); answers book pp.18–19 (PDF 27–28).
 *
 * ⚠️ 31 PRINTED WHERE THE CONTENTS PAGE PROMISES 30 — Q91 … Q121, no number
 *    skipped, and chapter 5 (Facial Nerve) opens at Q122 on book p.20, verified
 *    by rendering it. **That is TWO chapters running where the map was one short.**
 * ⚠️ The answer block begins in the RIGHT-HAND COLUMN of book p.18, whose left
 *    column still carries Q118–Q121. Reading only to "Page As" would have dropped
 *    four questions — the trap §14 recorded, and the largest bite it has taken.
 * ⚠️ Running header still says "Chapter 1", title correct.
 *
 * Verbatim as printed. Repairs are applied in questions.ent.js, never here.
 */
var GG4_STAGED = [

{ n:91, page:15, apage:18, stem:'A patient complains of chronic otorrhea that is odorless, mucopurulent, and intermittent. On otoscopy, what would be observed?',
  options:['Attic perforation','Pars tensa perforation','Pars flaccida perforation','Marginal perforation'],
  answer:1, exp:'These criteria are safe type CSOM whose perforation is central and in pars tensa' },

{ n:92, page:15, apage:18, stem:'A patient complains of chronic scanty purulent discharge with odor. What is the appropriate treatment?',
  options:['Antibiotics','Myringoplasty','Tympanoplasty','Surgical mastoidectomy'],
  answer:3, exp:'These criteria are unsafe CSOM whose treatment must include surgical mastoidectomy' },

{ n:93, page:15, apage:18, stem:'A patient with acute otitis media who develops pain and tenderness behind the ear. What is the most likely diagnosis?',
  options:['Mastoiditis','Postauricular lymphadenopathy','Petrositis'], answer:0, exp:null },

{ n:94, page:15, apage:18, stem:'All of the following are intracranial complications of OM except:',
  options:['Meningitis','Brain','Lateral sinus thrombophlebitis','Labyrinthitis'],
  answer:3, exp:'Labyrinthitis is cranial complication',
  flag:'⚠️ Option b is printed as the bare word "Brain" — a truncated option. Read as "brain abscess"; recorded in the entry.' },

{ n:95, page:15, apage:18, stem:'The most common complication of OM is',
  options:['Acute mastoiditis','Acute Petrositis','Labyrinthitis','Meningitis'], answer:0, exp:null },

{ n:96, page:15, apage:18, stem:'All true regarding furunculosis with post auricular lymph node except:',
  options:['Pain during mastication','Swelling in EAC','Tragus sign','Ear is pushed forward'],
  answer:3, exp:'ear is pushed forward. This occurs with mastoid abscess. Ear is pushed forwards and downwards' },

{ n:97, page:15, apage:18, stem:'Gradenigo ‘s triad is caused by',
  options:['Mastoiditis','Petrositis'], answer:1, exp:null },

{ n:98, page:15, apage:18, stem:'What is the most common cause of mucopurulent, profuse, intermittent otorrhea?',
  options:['AOM','CSOM safe type(tubo-tympanic)','CSOM unsafe type (attico-antral)'], answer:1, exp:null },

{ n:99, page:15, apage:18, stem:'In a patient with chronic suppurative otitis media (CSOM) presenting with retro-ocular pain and diplopia, which anatomical area is most likely involved in the spread of the complication?',
  options:['Mastoid air cell','Petrous apex','Sigmoid sinus','Temporal lobe'],
  answer:1, exp:'This is the triad of Gradenigo syndrome' },

{ n:100, page:15, apage:18, stem:'What is the characteristic shape of the tympanic membrane (TM) perforation in a typical case of safe type Chronic Suppurative Otitis Media (CSOM)?',
  options:['Central perforation','Marginal perforation','Attic perforation','Total perforation'],
  answer:0, exp:null },

{ n:101, page:16, apage:18, stem:'What is the cause of facial pain in Gradenigo syndrome?',
  options:['Compression of the facial nerve (CN VII)','Inflammation of the trigeminal nerve (CN V)','Infection of the mastoid air cells','Increased intracranial pressure'],
  answer:1, exp:'Gradenigo syndrome/triad: "1 ear + 2 nose" — Otorrhea; Retrobulbar pain (i.e. pain behind the eye due to irritation of the trigeminal ganglion); Diplopia due to ipsilateral VI nerve (abducent) palsy.',
  flag:'⚠️ The printed mnemonic reads "1 ear + 2 nose"; the three elements it then lists are one EAR symptom and two ORBITAL ones. Transcribed as printed and flagged.' },

{ n:102, page:16, apage:19, stem:'What is the primary cause of diplopia in Gradenigo syndrome?',
  options:['Involvement of the trochlear nerve (CN IV)','Involvement of the oculomotor nerve (CN III)','Involvement of the abducens nerve (CN VI)','Increased intracranial pressure'],
  answer:2, exp:null },

{ n:103, page:16, apage:19, stem:'Which muscle is primarily affected in Gradenigo syndrome?',
  options:['Medial rectus muscle','Superior oblique muscle','Lateral rectus muscle','Inferior rectus muscle'],
  answer:2, exp:null },

{ n:104, page:16, apage:19, stem:'What is the primary cause of ear discharge in Gradenigo syndrome?',
  options:['otitis media','labyrinthitis','Otitis externa'], answer:0, exp:null },

{ n:105, page:16, apage:19, stem:'What is the classic triad of Gradenigo syndrome?',
  options:['Ear discharge, facial paralysis, hearing loss','Retro-orbital pain, diplopia, ear discharge','Headache, fever, neck stiffness','Vertigo, tinnitus, hearing loss'],
  answer:1, exp:null },

{ n:106, page:16, apage:19, stem:'Which of the following can cause pain in Chronic Suppurative Otitis Media?',
  options:['Presence of cholesteatoma','Acute otitis media superimposed on chronic otitis media','Presence of an earwax buildup','Sinus infection'],
  answer:1, exp:'Causes of pain in CSOM: Acute otitis media on top of chronic. Presence of complications e.g. Mastoiditis' },

{ n:107, page:16, apage:19, stem:'Which of the following conditions can cause pure purulent otorrhea?',
  options:['Acute otitis media','Necrotizing otitis media','Eustachian tube dysfunction'],
  answer:1, exp:'Causes of **pure purulent otorrhea**: Necrotizing otitis media, Cholesteatoma = Unsafe CSOM = Attico-antral otitis media. **Causes of mucopurulent otorrhea**: Acute otitis media after perforation, Safe CSOM = Tubo-tympanic CSOM' },

{ n:108, page:16, apage:19, stem:'Which of the following is a potential cause of hearing loss in cholesteatoma?',
  options:['Erosion of the ossicles leading to conductive hearing loss (CHL)','Perforation of the tympanic membrane leading to sensorineural hearing loss','Restricted movement of the tympanic membrane leading to sensorineural hearing loss (SNHL)','Erosion of the lateral semicircular canal (SCC) leading to conductive hearing loss (CHL)'],
  answer:0, exp:'Cholesteatoma causes: 1. Erosion of the ossicles "CHL" 2. TM Perforation "CHL" 3. Restrict movement of TM "CHL" 4. Erosion of lateral SCC "SNHL"' },

{ n:109, page:16, apage:19, stem:'Which of the following conditions can cause mucopurulent otorrhea?',
  options:['Acute otitis media after perforation','Cholesteatoma','Necrotizing otitis media','Otitis externa'],
  answer:0, exp:null },

{ n:110, page:16, apage:19, stem:'All the following are associated with this photo except:',
  options:['fetid discharge','mucopurulent discharge','odorless discharge','CHL'],
  answer:0, img:true, exp:'The photo shows central perforation (tubotympanic CSOM)' },

{ n:111, page:17, apage:19, stem:'All of the following are associated with tubotympanic CSOM except:',
  options:['it is caused by gram –ve bacteria','x-ray shows cellular mastoid','its discharge is mucopurulent','it is safer than attico-antral CSOM'],
  answer:0, exp:null },

{ n:112, page:17, apage:19, stem:'The following image shows otoscopy of CSOM, this type is associated with',
  options:['Acellular mastoid','Cholesteatoma','gram –ve organisms','all of the above'],
  answer:3, img:true, exp:null },

{ n:113, page:17, apage:19, stem:'Where is the most common site of perforation in AOM?',
  options:['Posterior-inferior quadrant of the tympanic membrane','Anterior-superior quadrant of the tympanic membrane','Posterior-superior quadrant of the tympanic membrane','Anterior-inferior quadrant of the tympanic membrane'],
  answer:3, exp:null },

{ n:114, page:17, apage:19, stem:'What is the definition of primary cholesteatoma?',
  options:['A type of cholesteatoma that develops due to retraction of pars flaccida into attic (attic retraction theory)','A congenital form of cholesteatoma that is present at birth.','Epithelium of EAC migrates through a perforation in tympanic membrane to the middle ear forming cholesteatoma','Middle ear mucosa undergoes metaplasia to resist the chronic inflammation caused by chronic suppurative otitis media'],
  answer:0, exp:'A type of cholesteatoma that develops due to retraction of pars flaccida into attic (attic retraction theory)' },

{ n:115, page:17, apage:19, stem:'A patient with an otogenic infection develops intermittent fever attacks with rigors. What type of complication occurs?',
  options:['Mastoiditis','Lateral sinus thrombosis','Labyrinthitis','Cholesteatoma'], answer:1, exp:null },

{ n:116, page:17, apage:19, stem:'A patient with an otogenic infection develops weakness on the left side of the body and hemianopia. What is the most likely complication?',
  options:['Intracranial abscess','Meningitis','Lateral sinus thrombosis','Cerebral venous sinus thrombosis'],
  answer:0, exp:null },

{ n:117, page:17, apage:19, stem:'Which of the following is NOT true about acute mastoiditis?',
  options:['It is more common in adults than children.','It can cause ear pain, fever, and swelling behind the ear.','It typically results from an untreated or inadequately treated middle ear infection.','It may require surgical intervention such as mastoidectomy in severe cases.'],
  answer:0, exp:null },

{ n:118, page:18, apage:18, stem:'Which of the following can cause Pure purulent otorrhea?',
  options:['Acute suppurative otitis media','Tubo-tympanic type of chronic otitis media.','Primary acquired cholesteatoma.','Otitis media with effusion'],
  answer:2, exp:null },

{ n:119, page:18, apage:18, stem:'Which of the following statements is true regarding cholesteatoma?',
  options:['May be complicated by extradural abscess','Congenital cholesteatoma is an autosomal inherited trait.','It is a benign tumor of the middle ear','Primary acquired cholesteatoma is usually located in the hypotympanum'],
  answer:0, exp:null },

{ n:120, page:18, apage:18, stem:'To differentiate mastoid abscess from furunculosis with postauricular lymph node',
  options:['Mastoid abscess push ear forwards and downwards','In Mastoiditis mucopurulent discharge occurs','in mastoiditis tragus is free','all of the above'],
  answer:3, img:true, exp:null },

{ n:121, page:18, apage:18, stem:'positive reservoir sign occurs in',
  options:['otitis externa','labyrinthitis','acute mastoiditis','acute Petrositis'], answer:2, exp:null }

];
