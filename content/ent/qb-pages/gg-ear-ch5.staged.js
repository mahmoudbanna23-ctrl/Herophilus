/* Grade Gain — ENT QB.pdf, Ear chapter 5: "Facial Nerve".
 * Questions book pp.20–23 (PDF 29–32); answers book pp.24–25 (PDF 33–34).
 *
 * ⚠️ 35 PRINTED WHERE THE CONTENTS PAGE PROMISES 24 — Q122 … Q156, no number
 *    skipped, and chapter 6 opens at Q157 on book p.26, verified by rendering it.
 *    THREE chapters running short now, and this one by ELEVEN.
 *    The TOC's PAGE RANGES have been right every time; only its counts drift.
 * ⚠️ Running header says "Chapter 1: Facial Nerve." — number wrong as always.
 *
 * ⚠️ ONE MIS-KEY ON THE BANK'S OWN EVIDENCE: Q141. See the flag.
 *
 * Verbatim as printed. Repairs are applied in questions.ent.js, never here.
 */
var GG5_STAGED = [

{ n:122, page:20, apage:24, stem:'All are intra-temporal branches of the facial nerve except:',
  options:['Greater superficial petrosal','Chorda tympani','Nerve to stapedius','Postauricular nerve'],
  answer:3, exp:'Branches of facial nerve **Intra-temporal branches**: 1. **Greater superficial petrosal** (parasympathetic secretory): from geniculate ganglion its secretomotor to lacrimal gland and nasal mucosal glands. 2. **Nerve to stapedius muscle**: from mastoid segment. 3. **Chorda tympani**: supply anterior 2/3 of tongue (taste) and secretomotor to submandibular and sub mental salivary glands. **Extratemporal branches**: 1. Post auricular nerve "supply occipital belly of occipitofrontalis muscle". 2. Nerve to stylohyoid & posterior belly of digastric: at stylohyoid foramen. 3. Cranio-temporal division. 4. Cranio-cervical division' },

{ n:123, page:20, apage:24, stem:'Which nerve injury has the worst prognosis?',
  options:['Neuropraxia','Axonotmesis','Neurotmesis'], answer:2,
  exp:'Neurotmesis. Regeneration is the worst and traumatic neuroma may develop.' },

{ n:124, page:20, apage:24, stem:'Grade 4 nerve injury includes damage to all except:',
  options:['Endoneurium','Perineurium','Epineurium','Axon'], answer:2,
  exp:'**Second degree/ Axonotmesis.** The axons continuity are disrupted. **Third degree.** The endoneurium is disrupted. **Forth degree.** The perineum surrounding the nerve fascicles are disrupted. **Fifth degree** Epineurium is disrupted' },

{ n:125, page:20, apage:24, stem:'Incomplete occlusion of the right eye with the mouth turned to the left suggests:',
  options:['Right LMNL','Left LMNL','Right UMNL','Left UMNL'], answer:0,
  exp:'Affection of whole face suggests LMNL. Incomplete occlusion of right eye and mouth deviation to left side suggest right side lesion (Mouth deviation to opposite side)' },

{ n:126, page:20, apage:24, stem:'Normal eye occlusion but mouth turned to the right suggests',
  options:['Right LMNL','Left LMNL','Right UMNL','Left UMNL'], answer:3,
  exp:'Normal eye occlusion suggests UMNL. Mouth deviated to right side suggests left sided lesion' },

{ n:127, page:20, apage:24, stem:'What is the site of a lesion in patient with motor facial weakness, but normal lacrimation, salivation, and sensation, along with ipsilateral hemiplegia?',
  options:['Infra-nuclear (Peripheral) facial nerve lesion','Cerebellopontine angle lesion','Supranuclear (UMNL)/above pons','Internal auditory canal lesion'],
  answer:2, exp:null },

{ n:128, page:20, apage:24, stem:'What is the most likely site of the lesion in a patient with motor facial weakness only, contralateral hemiplegia, and squint?',
  options:['Cortical lesion in the motor cortex','Cerebellopontine angle lesion','Pons (Facial nerve fibers near abducens nerve) nuclear','Internal auditory canal lesion'],
  answer:2, exp:null },

{ n:129, page:20, apage:24, stem:'What is the most likely site of the lesion in a patient with facial motor weakness, loss of salivation, lacrimation, taste sensation, and 8th cranial nerve (vestibulocochlear nerve) palsy?',
  options:['Stylomastoid foramen','Internal auditory canal and CPA','Geniculate ganglion','Parotid gland'],
  answer:1, exp:null },

{ n:130, page:20, apage:24, stem:'What is the most likely site of the lesion in a patient with facial motor weakness, loss of salivation, lacrimation, and taste sensation?',
  options:['Stylomastoid foramen','Internal auditory canal','Geniculate ganglion','Parotid gland'],
  answer:2, exp:null },

{ n:131, page:21, apage:24, stem:'What is the most likely site of the lesion in a patient with facial motor weakness and loss of salivation and taste, but normal lacrimation?',
  options:['Stylomastoid foramen','Below geniculate','Greater superficial petrosal nerve','Internal auditory canal'],
  answer:1, exp:null },

{ n:132, page:21, apage:24, stem:'What is the most likely site of the lesion in a patient with isolated facial motor weakness and a normal stapedial reflex?',
  options:['Stylomastoid foramen','Internal auditory canal','Geniculate ganglion','Near the nerve to stapedius'],
  answer:0, exp:null },

{ n:133, page:21, apage:24, stem:'A patient suffering from bell’s palsy of right facial nerve will complain of:',
  options:['Inability to close her right eye, with mouth deviation towards the left.','Inability to close the right eye, with mouth deviated to the right.','Intact eye closure with mouth deviated to the right.','Intact eye closure with mouth deviated to the left'],
  answer:0, exp:'Inability to close her right eye, with mouth deviation towards the left. Bell’s palsy is LMNL which means that the whole face is affected. Right lesion means that the right eye is affected and the mouth is deviated to opposite side (left)' },

{ n:134, page:21, apage:24, stem:'A patient suffering from UMNL of the right facial nerve will complain of:',
  options:['Inability to close her right eye, with mouth deviation towards the left.','Inability to close the right eye, with mouth deviated to the right.','Intact eye closure with mouth deviated to the right.','Intact eye closure with mouth deviated to the left.'],
  answer:3, exp:'Intact eye closure with mouth deviated to the left. UMNL means that the eye is intact. Right lesion means that mouth is deviated to left (opposite side)' },

{ n:135, page:21, apage:24, stem:'Otalgia with Vesicles behind the Lt ear. Lt eye not closed, mouth deviation to the right side, what is the most likely diagnosis is:',
  options:['right herpes zoster','left Herpes zoster','left Herpes simplex','Trauma'], answer:1,
  exp:'Ramsay Hunt Syndrome consists of: Facial paralysis. Auditory and vestibular dysfunction. Painful herpetic vesicles of the auricle and the EAC' },

{ n:136, page:21, apage:25, stem:'The most common cause of facial palsy is:',
  options:['Ramsay Hunt syndrome','Bell’s palsy','Trauma'], answer:1, exp:null },

{ n:137, page:21, apage:25, stem:'Hilger test is ideally done at:',
  options:['3rd day','4th day','After 2 weeks'], answer:0, exp:null },

{ n:138, page:21, apage:25, stem:'Electromyography (EMG) is prognostic after:',
  options:['2 weeks','4 weeks','5 weeks','10 weeks'], answer:3, exp:null },

{ n:139, page:21, apage:25, stem:'Which of the following tests is quantitative?',
  options:['Electromyography','Evoked electromyography','Hilger test'], answer:1, exp:null },

{ n:140, page:21, apage:25, stem:'Which test is used to measure the amount of lacrimation (tear production)?',
  options:['Hilger test','Schirmer’s test','Rinne test','House-Brackmann grading'], answer:1, exp:null },

{ n:141, page:22, apage:25, stem:'How do you test greater superficial petrosal nerve?',
  options:['Hilger test','shirmer ‘s test','lemon test','electromyography'], answer:2,
  exp:'We should test submandibular flow by lemon test',
  flag:'⚠️ SELF-CONTRADICTION. Key C (lemon test) with a printed explanation describing SUBMANDIBULAR flow — which is the CHORDA TYMPANI. The bank’s own Q122 explanation states the greater superficial petrosal is secretomotor to the LACRIMAL gland, and its own Q140 keys Schirmer’s as the lacrimation test. Corrected to B in the entry, printed key recorded.' },

{ n:142, page:22, apage:25, stem:'In Electroneuronography (ENoG), degeneration of more than 90% of the facial nerve fibers indicates:',
  options:['Good prognosis with full recovery','Moderate prognosis with partial recovery','Poor prognosis with minimal or no recovery','No clinical significance'],
  answer:2, exp:'Poor prognosis with minimal or no recovery. Electroneuronography is prognostic and quantitative test' },

{ n:143, page:22, apage:25, stem:'Which of the following is NOT a possible cause of Bell’s palsy?',
  options:['Viral infection','Idiopathic reasons','Bacterial infection','Autoimmune conditions'],
  answer:2, exp:'Bell’s palsy is due to VIRAL causes (Activation of Herpes Simplex). (it is still idiopathic dx of exclusion)' },

{ n:144, page:22, apage:25, stem:'In the management of Bell’s palsy, the most important step is to:',
  options:['Administer antiviral medication','Protect the eye','Perform facial exercises','Start corticosteroids'],
  answer:1, exp:null },

{ n:145, page:22, apage:25, stem:'A patient with facial palsy who cannot bear loud noise most likely has a lost:',
  options:['Cochlear reflex','Oculomotor reflex','Stapedius reflex','Blink reflex'], answer:2, exp:null },

{ n:146, page:22, apage:25, stem:'Compare the prognosis of Bell’s palsy with that of herpes zoster oticus.',
  options:['In Bell’s palsy, 71% show complete recovery within a few days without treatment, and 25% recover with slight sequelae; in herpes zoster oticus, 30% recover normal function, and 70% experience sequelae.','In Bell’s palsy, 50% show complete recovery without treatment, with the remainder showing no recovery; in herpes zoster oticus, 80% recover completely with minimal sequelae.','In Bell’s palsy, 100% of patients recover completely with treatment; in herpes zoster oticus, 30% recover with some sequelae.','In Bell’s palsy, 80% show no recovery; in herpes zoster oticus, 90% recover completely with minimal sequelae.'],
  answer:0, exp:'71% show complete recovery within a few days without treatment, 25% recover with slight sequelae, and 4% with severe sequelae.' },

{ n:147, page:22, apage:25, stem:'When is surgical treatment for Bell’s palsy typically considered?',
  options:['For partial facial paralysis after 12 weeks of symptoms','For complete facial paralysis with more than 90% degeneration by ENOG within the first 6 days','For mild facial asymmetry without loss of function','For patients who fail to respond to corticosteroid therapy'],
  answer:1, exp:'For complete facial paralysis with more than 90% degeneration by ENOG within the first 6 days' },

{ n:148, page:22, apage:25, stem:'In Ramsay Hunt syndrome, surgical intervention is typically considered for facial paralysis when:',
  options:['The degeneration is more than 90% on ENOG after 6 weeks.','The degeneration is more than 90% on ENOG after 2 weeks.','The facial nerve is not involved.','Paralysis persists for less than 7 days.'],
  answer:1, exp:'The degeneration is more than 90% on ENOG after 2 weeks.' },

{ n:149, page:23, apage:25, stem:'When performing an incision for a postauricular abscess in an infant, why must the incision be placed high?',
  options:['To prevent injury to the external auditory canal','To avoid damage to the facial nerve and prevent facial palsy','To ensure proper drainage of the abscess','To reduce the risk of infection and scarring'],
  answer:1, exp:'To avoid damage to the facial nerve and prevent facial palsy' },

{ n:150, page:23, apage:25, stem:'Facial palsy in acute otitis media (AOM) typically requires which of the following treatments?',
  options:['Antibiotics alone','Myringotomy with drainage','Corticosteroids and antiviral therapy','Facial nerve decompression surgery'],
  answer:1, exp:'In AOM we can also proceed to myringotomy in case of 1. Pending perforation 2. Thick TM in child 3. Complications occur e.g. facial palsy, labyrinthitis' },

{ n:151, page:23, apage:25, stem:'All of the following can occur in lower motor neuron facial palsy except:',
  options:['Inability to close the eye on the affected side','Loss of nasolabial fold on the affected side','Ipsilateral hemiplegia','Drooping of the corner of the mouth on the affected side'],
  answer:2, exp:'It occurs with UMNL. While in nuclear LMNL facial palsy crossed hemiplegia occurs' },

{ n:152, page:23, apage:25, stem:'Which of the following correctly describes the pattern of facial weakness in lower motor neuron and upper motor neuron facial palsy?',
  options:['**LMN lesion** causes **contralateral** facial palsy; **UMN lesion** causes **ipsilateral** facial palsy.','**LMN lesion** causes **ipsilateral** complete facial palsy; **UMN lesion** causes **contralateral** weakness of the lower face only.','**LMN lesion** affects only the **lower half** of the ipsilateral face; **UMN lesion** causes complete contralateral facial paralysis.','Both **LMN** and **UMN** lesions cause **bilateral** facial weakness.'],
  answer:1, exp:'LMN lesion causes ipsilateral complete facial palsy; UMN lesion causes contralateral weakness of the lower face only.' },

{ n:153, page:23, apage:25, stem:'In the following picture',
  options:['Right UMNL of facial nerve','Left UMNL of facial nerve','Right LMNL of facial nerve','Left LMNL of facial nerve'],
  answer:3, img:true, exp:'Inability to close eye means LMNL. Mouth deviated to right side (opposite side) + inability to close left eye means left sided lesion',
  flag:'⚠️ The stem is "In the following picture" and nothing else — no question at all. Repaired in the entry.' },

{ n:154, page:23, apage:25, stem:'Which of the following conditions does NOT cause facial nerve paralysis?',
  options:['Cholesteatoma','Acute otitis media','Otomycosis','Malignant otitis externa'], answer:2, exp:null },

{ n:155, page:23, apage:25, stem:'Ramsy hunt syndrome includes all of the following except:',
  options:['Facial paralysis','Vesicles in the external ear canal and concha','SNHL and vertigo','Pharyngeal paralysis'],
  answer:3, exp:null },

{ n:156, page:23, apage:25, stem:'Fracture of which bone can cause facial nerve palsy?',
  options:['Temporal bone','Frontal bone','Occipital bone','Parietal bone'], answer:0,
  exp:'Fracture of the petrous temporal bone: 10% of cases of longitudinal fractures; 40% of cases of transverse fractures. The site of the lesion is commonly at the geniculate ganglion.' }

];
