/* Dr. HOUSE in ENT — End-of-round MCQs 2025
 * Verbatim staging: Ear MCQs Q22–Q44, book pp.28–32  (PDF pp.15–17)
 *
 * STRUCTURE ESTABLISHED THIS PASS (see manifest):
 *  - PDF is a 2-up scan of a book spread, A4 landscape 841.86 x 595.26 pt.
 *    Left half = book page 2P-2, right half = book page 2P-1.  Book B -> PDF floor(B/2)+1.
 *    CONFIRMED: contents page is book p.2 = PDF p.2 left; book p.28 = PDF p.15 left.
 *  - The ANSWER IS PRINTED INLINE immediately under each question ("Answer: X").
 *  - NO EXPLANATION BOX ANYWHERE. Zero boxes in Q22-Q44, and none in Q1-Q21 either.
 *  - ~5-6 questions per book page. An answer can spill to the top of the NEXT page
 *    (Q35's key is at the top of p.31; Q40's is at the top of p.32).
 *  - NUMBERING IS CONTINUOUS ACROSS THE WHOLE EAR SECTION, not per chapter.
 *    Chapter 1 ends at Q28 and chapter 2 opens at Q29 ON THE SAME PAGE (book p.29).
 *
 * This batch therefore spans TWO printed chapters:
 *    Q22-Q28  = tail of "1. Surgical anatomy of the ear"  (book pp.28-29)
 *    Q29-Q44  = all of "2. External ear diseases"         (book pp.29-32)
 *  Chapter 3 "Otitis media & middle ear effusion" opens at Q45, book p.33 — verified,
 *  which is exactly where the contents page says it does.
 *
 * PRINTED: 23.  key = 0-based index into opts.
 */

var HD_EAR_CH2_STAGED = [

/* ---- book p.28 — chapter 1 "Surgical anatomy of the ear", continued ---- */

{ n:22, p:28, key:3,
  stem:'Which of the following nerves is responsible for cough reflex during ear wash?',
  opts:['Auriclotemporal branch of mandibular','Lesser occipital','Greater auriclar','Auricular branch of vagus'],
  note:'Source spells options A and C "Auriclotemporal" and "Greater auriclar" — print typos, not terminology. Corrected in the draft entry.' },

{ n:23, p:28, key:0,
  stem:'Patients with parotitis usually complain of ear problems that are especially in which of the following areas?',
  opts:['EAC through fissure of santorini','Middle ear through fissure of santorini','Referred pain through glossopharyngeal','A and C'],
  note:'Source lower-cases "santorini".' },

{ n:24, p:28, key:0,
  stem:'Which of the following is the first part in the ear drum to be perforated in the stage of perforation during AOM?',
  opts:['Pars tensa','Pars flaccida','Umbo','Handle of malleus'] },

{ n:25, p:28, key:0,
  stem:'During an attack of Ramasy hunt syndrome, a patient complains of painful vesicles on the anterior upper part of auricle. Which of the following nerves is responsible for pain sensation?',
  opts:['Auriclotemporal branch of mandibular nerve','Lesser occipital','Greater auriclar','Auricular branch of vagus'],
  note:'Source prints "Ramasy hunt" for Ramsay Hunt.' },

{ n:26, p:28, key:1,
  stem:'Which of the following is the type of epithelium lining external auditory canal?',
  opts:['Ciliated pseudostratified columnar epithelium with goblet cells','Keratinized stratified squamous epithelium','Non keratinized stratified squamous epithelium','Stratified columnar epithelium'] },

/* ---- book p.29 — chapter 1 ends, chapter 2 begins on the same page ---- */

{ n:27, p:29, key:2,
  stem:'Which of the following is true regarding the tympanic membrane?',
  opts:['The middle layer is composed of stratified squamous epithelium','It constitutes the medial wall of the middle ear','It shows cone of light on its antero-inferior aspect','All of the above','None of the above'],
  note:'FIVE options.' },

{ n:28, p:29, key:0,
  stem:'In the attached photo, which of the following is a characteristic of the structure labelled "X"?',
  opts:['It has no fibrous layer','It’s the most durable part of ear drum','Eustachian tube opens in it','All of the above'],
  fig:'Coloured diagram of the right tympanic membrane printed to the right of the stem, a leader line labelled X running to the upper (flaccid) part of the drum. Printed WITH the question. UNANSWERABLE WITHOUT IT — the stem names no structure.' },

/* --- chapter 2. External ear diseases --- */

{ n:29, p:29, key:1,
  stem:'A patient comes to the ENT clinic with severe itchy painless left ear together with ear discharge. Otoscopic examination revealed the attached photo. What’s the best treatment for this patient?',
  opts:['Systemic anti-fungal therapy','Ear wash, suction and anti-fungal drops','Systemic antibiotics','Local antibiotic drops'],
  fig:'Otoscopic photograph of the ear canal and drum printed beside the stem. Printed WITH the question. The stem also gives "itchy painless … with discharge", so the picture confirms rather than carries the diagnosis.' },

{ n:30, p:29, key:1,
  stem:'A patient presents to the ENT clinic with pain in left ear, marked tenderness on tragus that increases on touching or moving. What’s the most probable diagnosis?',
  opts:['Aspergillosis','Furunculosis','Acute suppurative otitis media','Chronic suppurative otitis media'],
  fig:'Clinical photograph of the auricle and canal entrance, an arrow marking the lesion. Printed WITH the question. Not load-bearing — the stem is diagnostic on its own.' },

/* ---- book p.30 ---- */

{ n:31, p:30, key:3,
  stem:'A 30-year-old female patient had itching for 2 weeks. 2 days ago, she scratched her right ear vigorously. Now she has a tender right tragus upon mastication. What’s the most likely diagnosis?',
  opts:['Otomycosis','Otitis externa','Otitis media','Both A and B'] },

{ n:32, p:30, key:2,
  stem:'A 48-year-old diabetic patient complains of ear pain increased upon auricle movement. The doctor prescribed him topical antibiotic drops for 10 days but he didn’t notice any improvement. What’s the most probable diagnosis for his condition?',
  opts:['Acute suppurative otitis media','Chronic suppurative otitis media','Malignant otitis externa','Glue ear'] },

{ n:33, p:30, key:1,
  stem:'In the previous case, what is the most feared complication that might occur if the condition is not promptly managed?',
  opts:['Chronicity of the condition','Intracranial spread','Ear discharges not responding to medical therapy','Permanent hearing loss'],
  ref:'BACK-REFERENCE -> Q32 (the 48-year-old diabetic with malignant otitis externa). MUST be restated — the deck is shuffled.' },

{ n:34, p:30, key:1,
  stem:'In the previous case, what is the most suitable line of treatment?',
  opts:['Oral antibiotics for 10 days','Oral antibiotics for 3-6 months','Myringotomy','Watchful waiting'],
  ref:'BACK-REFERENCE -> Q32, a two-deep chain (Q32 -> Q33 -> Q34). MUST be restated.',
  note:'DEFECT: the key’s DURATION matches L17,18 ("may take 3-6 months") but its ROUTE does not — the slide says "a combination of IV antibiotics is usually needed". Keyed as printed, noted in the explanation.' },

{ n:35, p:30, key:0,
  stem:'A patient who develops deafness after bathing or swimming without earache most probably suffers from which of the following conditions?',
  opts:['Impacted wax','Otitis externa','Otitis interna','Malignant otitis externa'],
  note:'Key printed at the TOP of book p.31, not on p.30.' },

/* ---- book p.31 ---- */

{ n:36, p:31, key:0,
  stem:'T / F: Otomycosis is a painless condition unless secondarily infected',
  opts:['True','False'],
  note:'TRUE/FALSE — TWO options. Verbatim from L17,18: "Otomycosis is painless. Associated pain = associated bacterial infection".' },

{ n:37, p:31, key:2,
  stem:'Which of the following are the affected nerves in case of malignant otitis externa?',
  opts:['1st, 2nd and 3rd CNs','4th, 5th and 6th CNs','5th, 6th and 7th CNs','7th, 8th and 9th CNs'],
  note:'DEFECT: no cached ENT deck lists WHICH cranial nerves. L17,18 says only "Symptoms related to cranial nerve palsies" and "Cranial nerves" among the signs. The printed key is also at odds with the classical teaching (VII first and commonest, then IX/X/XI at the jugular foramen, VI via Dorello’s canal). Keyed as printed, noted.' },

{ n:38, p:31, key:0,
  stem:'A 30-year-old patient with earache for 3 days. It was tender with increased tenderness on mastication. The tragus sign was positive and there was a swelling in the ear canal. What’s the most likely diagnosis?',
  opts:['Furuncle','Acute otitis media','Chronic otitis media','Both A and B'] },

{ n:39, p:31, key:1,
  stem:'A 55-year-old diabetic patient with pain and tender tragus on touch. By examination, the doctor found facial palsy and trigeminal facial pain. What’s your diagnosis?',
  opts:['Diffuse otitis externa','Malignant otitis externa','Localized otitis externa','Osteoma'] },

{ n:40, p:31, key:1,
  stem:'A 20-year-old boxer had a lateral blow in his auricle and he ignored it for 10 days with red hot tender auricle. What’s your diagnosis?',
  opts:['Otitis externa','Perichondritis','Otomycosis','Otitis interna'],
  note:'Key printed at the TOP of book p.32, not on p.31.' },

/* ---- book p.32 ---- */

{ n:41, p:32, key:2,
  stem:'Which of the following is among the predisposing factors to diffuse otitis externa?',
  opts:['Hyperhidrosis','Diabetes Mellitus','Both of the above','None of the above'] },

{ n:42, p:32, key:1,
  stem:'All of the following are true regarding malignant otitis externa except?',
  opts:['It usually occurs in immunocompromised individuals','Hospitalization is not required in most of the cases','It is caused by Pseudomonas aeruginosa','It causes otalgia that is much more severe than that of diffuse otitis media'],
  note:'DEFECT (option, not key): option D reads "diffuse otitis MEDIA". There is no such entity as "diffuse otitis media" — the intended comparator is plainly diffuse otitis EXTERNA, which is the entity L17,18 classifies. Transcribed verbatim; flagged in the explanation. The key (B) is unaffected and is correct.' },

{ n:43, p:32, key:3,
  stem:'Which of the following is among the manifestations of tympanic membrane rupture during ear wash?',
  opts:['Trickling of the used fluid into the patient’s throat','Sudden ear pain','Sudden hearing impairment','All of the above'] },

{ n:44, p:32, key:3,
  stem:'Furunculosis of the external auditory canal is characterized by all of the following except?',
  opts:['It is caused by Staphylococcus Aureus','It causes otalgia and tragal tenderness','It occurs in diabetic patients with a higher incidence of recurrence','It is a self-limiting condition'],
  note:'DEFECT (soft): a furuncle genuinely can discharge and resolve spontaneously, so "self-limiting" is defensible in principle. The bank keys D as the FALSE statement, consistent with L17,18, which prescribes "Systemic antibiotics" and "Analgesia" for localized external otitis rather than observation. Keyed as printed, reconciled in the explanation.' }

];
