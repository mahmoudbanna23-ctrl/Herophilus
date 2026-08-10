/* Grade Gain — ENT QB.pdf, Ear chapter 7: "Tinnitus & Hearing loss".
 * Questions book pp.30–31 (PDF 39–40); answers book p.32 (PDF 41), all on one page.
 *
 * ⚠️ 18 PRINTED WHERE THE CONTENTS PAGE PROMISES 17 — Q179 … Q196, and chapter 8
 *    (Audiological Investigations) opens at Q197 on book p.33, verified by rendering.
 *    FIVE chapters running short of the map, every one of them upward.
 * ✔ The answer block does NOT overlap the questions here — book p.32 is answers only.
 * ⚠️ Q180 reprints the glomus photograph of ch.6 Q173, but asks a DIFFERENT question
 *    (earliest manifestation, not the discharge). Cut again as q-gg-30.jpg so the
 *    filename cites its own page.
 *
 * Verbatim as printed. Repairs are applied in questions.ent.js, never here.
 */
var GG7_STAGED = [

{ n:179, page:30, apage:32, stem:'The most common cause of tinnitus is',
  options:['Idiopathic','Tumor','Infection','Vascular'], answer:0, exp:null },

{ n:180, page:30, apage:32, stem:'The earliest manifestation of the following tumor is',
  options:['bloody otorrhea','pain','pulsatile tinnitus','hearing loss'], answer:2, img:true, exp:null,
  flag:'Photograph, no question word beyond "the following tumor". Same picture as ch.6 Q173.' },

{ n:181, page:30, apage:32, stem:'A patient with unilateral tinnitus what is the next step?',
  options:['reassurance it is usually idiopathic','MRI to rule out CPA tumors','CT to rule out CPA tumors'],
  answer:1, exp:null },

{ n:182, page:30, apage:32, stem:'Non vibratory tinnitus is',
  options:['always subjective','always objective','either of the above'], answer:0, exp:null },

{ n:183, page:30, apage:32, stem:'All of the following are causes of CHL except:',
  options:['Middle ear effusion','Impacted wax','Tympanosclerosis','presbycusis'], answer:3, exp:null },

{ n:184, page:30, apage:32, stem:'The most common cause of CHL in adults is',
  options:['AOM','Impacted wax','Foreign body'], answer:1, exp:null },

{ n:185, page:30, apage:32, stem:'Malleoincus dislocation is a cause of',
  options:['CHL','SNHL','Mixed'], answer:0, exp:null },

{ n:186, page:30, apage:32, stem:'The most common cause of SNHL in elderly people is',
  options:['AOM','Impacted wax','Foreign body','Presbycusis'], answer:3, exp:null },

{ n:187, page:30, apage:32, stem:'Which condition should be suspected in a patient presenting with hearing loss and an intact tympanic membrane (TM)?',
  options:['Chronic otitis media','Otosclerosis','Meniere\'s disease','Acoustic neuroma'], answer:1, exp:null },

{ n:188, page:30, apage:32, stem:'The primary type of hearing loss in otosclerosis is:',
  options:['Conductive hearing loss','Sensorineural hearing loss','Central hearing loss'], answer:0,
  exp:'Type of hearing loss: Conductive Hearing Loss "CHL" If new bone reaches the cochlea, it will lead to mixed hearing loss "CHL + SNHL" (RARE)' },

{ n:189, page:30, apage:32, stem:'What is the most common cause of sensorineural hearing loss (SNHL) in children?',
  options:['Congenital infections (e.g., CMV, rubella)','Hereditary factors','Ototoxic medications','Noise exposure'],
  answer:1, exp:null },

{ n:190, page:31, apage:32, stem:'What is the most common cause of conductive hearing loss (CHL) in children?',
  options:['Otosclerosis','Chronic suppurative otitis media (CSOM)','Secretory otitis media due to Eustachian tube dysfunction','Impacted cerumen'],
  answer:2, exp:'Secretory otitis media due to Eustachian tube dysfunction' },

{ n:191, page:31, apage:32, stem:'The most common cause of SNHL in general is',
  options:['AOM','Impacted wax','Foreign body','Presbycusis'], answer:3, exp:null },

{ n:192, page:31, apage:32, stem:'All of the following can cause mixed hearing loss except',
  options:['Complicated CSOM with labyrinthitis','Combined otosclerosis','Trauma','MEE'], answer:3,
  exp:'Mixed hearing loss is caused by:\n1. External ear atresia with inner ear anomaly\n2. Combined Otosclerosis\n3. Cholesteatoma "complicated CSOM with labyrinthitis"\n4. Traumatic\n5. Glomus Tumor' },

{ n:193, page:31, apage:32, stem:'What is the initial treatment for a patient who wakes up with sudden hearing loss?',
  options:['Oral and/or intratympanic corticosteroids','Immediate antibiotic therapy','Surgical intervention','Observation and follow-up after one week'],
  answer:0, exp:null },

{ n:194, page:31, apage:32, stem:'Which of the following drugs is known to be ototoxic?',
  options:['Amikacin','Ibuprofen','Paracetamol','Metformin'], answer:0,
  exp:'Ototoxic drugs: Aminoglycosides. (Obsolete) e.g. Tobramycin, Kanamycin and Amikacin\nLoop diuretics, salicylates, Quinine and cisplatin are **cochleotoxic** → causing SNHL\nStreptomycin and gentamycin are primary **vestibulotoxic** → causing vertigo' },

{ n:195, page:31, apage:32, stem:'Deafness is defined when the hearing threshold exceeds:',
  options:['20 dB','40 dB','70 dB','90 dB'], answer:3,
  exp:'Deafness is profound and total hearing loss' },

{ n:196, page:31, apage:32, stem:'Which of the following is the most appropriate treatment for severe to profound sensorineural hearing loss (SNHL)?',
  options:['Oral antibiotics','Hearing aids','Intratympanic steroid injections','Cochlear implant'],
  answer:3, exp:'Treatment of Hearing Loss\nCHL: Medical or surgical treatment according to the cause.\nSNHL:\nMedical: Intratympanic or general. *Hearing aids*. (mild to moderate hearing loss)\nSurgical: e.g. *Cochlear implant*. (for severe to profound hearing loss)' }

];
