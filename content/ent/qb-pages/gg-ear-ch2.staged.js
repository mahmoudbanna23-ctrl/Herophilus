/* Grade Gain — Ear chapter 2, "Diseases of External Ear".
   `ENT QB.pdf` book pp.6-8 (PDF pp.15-17). Questions Q30-Q49, answers all on book p.8.

   VERBATIM STAGING. Nothing here is edited for sense; corrections and authored
   explanations happen when the entries are written, not here.

   ⚠️ THE NUMBERING IS CONTINUOUS ACROSS CHAPTERS, NOT PER-TOPIC. Ear ch.1 ended at
   Q29 and this chapter opens at Q30. `ledger.md` §14 said it restarts at 1 each
   topic; that was written from ch.1 alone, where 1 and "first question of the
   chapter" happen to coincide. Corrected in §14b.

   ⚠️ THE RUNNING HEADER SAYS "Chapter 1" ON EVERY CHAPTER. Book p.6-8 read
   "Chapter 1: Diseases of External Ear" and p.9 reads "Chapter 1: Acute Otitis
   Media". The template's chapter number was never incremented. The TOC is the
   authority on chapter numbers; the running header is not.

   exp:null  = the bank prints no explanation for that answer (11 of 20).
   flag      = a defect in the printed page, to be resolved when written.
*/
var GG2_STAGED = [

/* ---- book p.6 (PDF 15) : Q30-Q39 ---------------------------------------- */

{ n:30, page:6, apage:8,
  stem:'A patient reports painful, cystic swelling of the outer ear. What is the most probable diagnosis?',
  options:['Hematoma of the auricle','Perichondritis of the auricle','Furunculosis','AOM'],
  answer:0,
  exp:'Auricle hematoma causes painful, non-tender Cystic swelling.' },

{ n:31, page:6, apage:8,
  stem:'What is the appropriate treatment for auricular perichondritis?',
  options:['Antibiotics alone','Antibiotics with surgical incision'],
  answer:1,
  exp:'hematoma treatment includes Antibiotics, Incision and evacuation with application of tight bandage (to prevent blood re-collection).',
  flag:'⚠️ THE PRINTED EXPLANATION ANSWERS A DIFFERENT QUESTION. The stem asks about '+
       'PERICHONDRITIS; the explanation describes HAEMATOMA management. The key (B) is '+
       'still defensible for perichondritis — see the written entry.' },

{ n:32, page:6, apage:8,
  stem:'A patient presents with a painful, swollen, red, warm, and tender ear. What is the most likely diagnosis?',
  options:['Hematoma of the auricle','Perichondritis of the auricle','Furunculosis','AOM'],
  answer:1,
  exp:'In perichondritis the auricle is swollen, red, hot, painful and tender' },

{ n:33, page:6, apage:8,
  stem:'Which of following is inflamed in Ear pain with a positive tragus sign?',
  options:['External ear','Middle ear','Inner ear'],
  answer:0,
  exp:null },

{ n:34, page:6, apage:8, img:true,
  stem:'Which symptom is most commonly associated with this image?',
  options:['Pain','Fever','Itching'],
  answer:2,
  exp:'The picture shows fungal infection with Symptoms (Itching in EAC, Deafness (if EAC is obstructed) and Signs (Fungal mass like a wet newspaper)' },

{ n:35, page:6, apage:8, img:true,
  stem:'The treatment includes',
  options:['Regular cleaning with topical antifungal medication','Topical antibiotics','Systemic antibiotics'],
  answer:0,
  exp:'Treatment of otomycosis is Local cleaning of EAC (suction or ear wash) and Antifungal ear drops (Nystatin ear drops or Salicylic acid (Keratolytic) + Alcohol ear drops) or Packing of EAC with antifungal cream (if resistant).',
  flag:'LINKED — the stem names no condition at all. It depends entirely on Q34\'s image. '+
       'Needs a bracketed context clause to stand alone once shuffled.' },

{ n:36, page:6, apage:8, img:true,
  stem:'The organism causing the previous image is',
  options:['Candida albicans','Aspergillus niger','Staph aureus','A and B'],
  answer:3,
  exp:null,
  flag:'LINKED — "the previous image" is Q34\'s. Also: option d is the short code "A and B", '+
       'which is stage F\'s known blind spot (tokens <=3 chars are dropped) — check by hand.' },

{ n:37, page:6, apage:8,
  stem:'Bullous myringitis, a type of otitis externa, is caused by which kind of organism?',
  options:['Bacteria','Virus','Fungus','Parasite'],
  answer:1,
  exp:null },

{ n:38, page:6, apage:8,
  stem:'All of following statements about furunculosis are correct except:',
  options:['It is caused by a Staphylococcal infection.','It affects the outer one-third of the ear canal.','It can involve any part of the external auditory canal.'],
  answer:2,
  exp:'Only outer cartilaginous part contains hair follicles' },

{ n:39, page:6, apage:8,
  stem:'Which of the following is most commonly responsible for malignant otitis externa?',
  options:['Beta-hemolytic streptococcus','Staphylococcus aureus','Pseudomonas aeruginosa','Neoplastic tumor'],
  answer:2,
  exp:null },

/* ---- book p.7 (PDF 16) : Q40-Q49 ---------------------------------------- */

{ n:40, page:7, apage:8,
  stem:'Infection spreading to which structure results in facial paralysis?',
  options:['Stylomastoid foramen','Jugular foramen','Petrous apex'],
  answer:0,
  exp:'due to osteomyelitis facial palsy (compressed at stylomastoid foramen), Parotid swelling. Lower 4 cranial nerves palsy (compressed at jugular foramen). Trigeminal facial pain if it extends to petrous apex.' },

{ n:41, page:7, apage:8,
  stem:'Infection spreading to which area can lead to facial pain?',
  options:['Stylomastoid foramen','Jugular foramen','Petrous apex'],
  answer:2,
  exp:'Facial pain is due to trigeminal affection' },

{ n:42, page:7, apage:8, img:true,
  stem:'The patient is complaining of ear pain on pressing on tragus or pulling the ear, what is the cause?',
  options:['acute otitis media','Furunculosis of EAC','fungal infection of ear'],
  answer:1,
  exp:null },

{ n:43, page:7, apage:8,
  stem:'ear wash is used in which of following?',
  options:['Vegetable Foreign body','otitis externa (viral or bacterial)','non vegetable foreign body'],
  answer:2,
  exp:'Indications include Wax (if excessive or impacted): It is softened by glycerin bicarbonate if it is hard. FB (not impacted and not vegetable). Otomycosis (Fungal mass): suction is preferred. Caloric test: to test the vestibular function. Contraindications: Perforation (traumatic or pathological i.e. CSOM). FB (impacted or vegetable). Otitis externa.' },

{ n:44, page:7, apage:8,
  stem:'A patient complains of ear itching with wet patches on otoscopy, what is the treatment?',
  options:['Antibiotics','Ear wash and antifungal drops','Analgesics'],
  answer:1,
  exp:null },

{ n:45, page:7, apage:8,
  stem:'Which nerve causes cough and vasovagal attack in ear wash?',
  options:['Trigeminal','Glossopharyngeal','Vagus','Facial'],
  answer:2,
  exp:null },

{ n:46, page:7, apage:8,
  stem:'A patient develops tenderness and hotness in the auricle after an ear piercing. What is the diagnosis?',
  options:['diffuse otitis externa','Perichondritis','Acute otitis media','Mastoiditis'],
  answer:1,
  exp:null },

{ n:47, page:7, apage:8, img:true,
  stem:'All the following are true regarding exostosis except:',
  options:['usually symptomatic','maybe single or multiple','may be unilateral or bilateral','Cold water is a risk factor'],
  answer:0,
  exp:null },

{ n:48, page:7, apage:8, img:true,
  stem:'If patient in this case suffers from hearing loss what may be the type?',
  options:['CHL','SNHL','Mixed'],
  answer:0,
  exp:null,
  flag:'LINKED — "this case" is Q47\'s exostosis. Needs a bracketed context clause. '+
       'Also: every option is a short code (CHL/SNHL/Mixed) — stage F blind spot, check by hand.' },

{ n:49, page:7, apage:8,
  stem:'Which of the following is true about malignant otitis externa?',
  options:['It affects young, healthy individual with no medical condition.','Viral infections are common cause.','It occurs in elderly patients with uncontrolled diabetes mellitus.','It typically resolves spontaneously without treatment.'],
  answer:2,
  exp:null }

];

/* THREE IMAGES on two pages, so the q-gg-<page> convention needs a suffix:
     book p.6 - otomycosis otoscopy, serving Q34, Q35 and Q36   -> q-gg-6
     book p.7 - tragus-press photograph, Q42 (NOT essential)    -> q-gg-7a
     book p.7 - exostosis otoscopy, serving Q47 and Q48         -> q-gg-7b
   Letters run in printed order down the page. */
