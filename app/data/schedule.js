/* SCHEDULE — rebuilt 2026-08-13 for the REAL exam dates, which the user supplied
   that day. The previous plan ran 2026-07-25 to 2026-08-31 against an estimate of
   "approximately early September" and is superseded entirely.

   Exams: 14 Sep Pediatrics OSCE · 17 Sep Pediatrics Paper 1+2 · 22 Sep ENT ·
          27 Sep Ophthalmology · 3 Oct Neuropsychiatry ·
          18 Oct Pediatrics Paper 1 · 19 Oct Pediatrics Paper 2

   ⚠️ THE SHAPE IS DICTATED BY THE GAPS BETWEEN EXAMS, NOT BY THE SUBJECTS.
   Five days separate Pediatrics from ENT, five more ENT from Ophthalmology and
   six Ophthalmology from Neuropsychiatry. Nobody learns a subject in five days,
   so EVERYTHING is learned by 13 September and each gap is pure revision for the
   exam that ends it. Neuropsychiatry has the latest exam but 27 chapters, so it
   rides the second track from day one rather than waiting its turn.

   Row: [date, key1, label1, text1, key2, label2, text2]  ·  rest: [date,'rest']
   Keys: ent · ophtho · neuropsych · peds · exam · revision · buffer
   Built from the real chapter lists in modules.js. */

const SCHEDULE = [
  ['2026-08-13','peds','Pediatrics','Pediatric emergencies; Allergy','neuropsych','Psychiatry','Interview Assessment; OSCE demonstration'],
  ['2026-08-14','rest'],
  ['2026-08-15','peds','Pediatrics','Infection and immunity; Normal Development; Developmental problems','neuropsych','Psychiatry','Somatoform disorders; Symptomatology'],
  ['2026-08-16','peds','Pediatrics','Genetics; Malignant Disease','neuropsych','Psychiatry','Psychoeducation and Myths'],
  ['2026-08-17','peds','Pediatrics','Growth and puberty; Nutrition','neuropsych','Psychiatry','Anxiety Disorders; OCD and PTSD'],
  ['2026-08-18','peds','Pediatrics','Accidents and poisoning; Gastroenterology; Perinatal medicine','neuropsych','Psychiatry','Mood Disorders; Approach to Psychosis'],
  ['2026-08-19','peds','Pediatrics','Neonatal medicine; Hematological Disorders','neuropsych','Psychiatry','Geriatric Psychiatry; Child Psychiatry'],
  ['2026-08-20','peds','Pediatrics','Respiratory Disorders; Cardiac Disorders','neuropsych','Psychiatry','Substance use disorder'],
  ['2026-08-21','rest'],
  ['2026-08-22','peds','Pediatrics','Kidney and Urinary tract; Neurological Disorders; Mental Health','neuropsych','Psychiatry','Emergency Psychiatry; Psychopharmacology'],
  ['2026-08-23','peds','Pediatrics','Diabetes and Endocrine; Liver Disorders','neuropsych','Psychiatry','Devices in Psychiatry; Psychotherapy'],
  ['2026-08-24','ent','ENT','Audiovestibular evaluation; Facial nerve paralysis; CSOM and complications','neuropsych','Neurology','Introduction to neurology and localization'],
  ['2026-08-25','ent','ENT','Otalgia; Otorrhea; Hearing loss, tinnitus; Vertigo, dizziness','neuropsych','Neurology','MS and demyelinating disorders'],
  ['2026-08-26','ent','ENT','Anatomy and function of the ear; Acute otitis media and effusion; Anatomy of pharynx and larynx','neuropsych','Neurology','Movement disorders / Epilepsy; LMN: peripheral nerve, muscle and neuromuscular disorders'],
  ['2026-08-27','ent','ENT','Hoarseness of voice; Tonsils and adenoids; Pharyngeal suppurations','neuropsych','Neurology','CNS infections'],
  ['2026-08-28','rest'],
  ['2026-08-29','ent','ENT','Neck masses; Stridor and tracheostomy; Swallowing disorders; Introduction to phoniatrics','neuropsych','Neurology','Cranial nerves disorders'],
  ['2026-08-30','ent','ENT','Snoring and OSA; Dysphagia — ENT perspective; Vocal cord paralysis','neuropsych','Neurology','Delirium and Coma'],
  ['2026-08-31','ent','ENT','Paediatric laryngeal lesions; Anatomy of the nose; Septum diseases and nasal trauma','neuropsych','Neurology','Headache; Cerebrovascular stroke'],
  ['2026-09-01','ent','ENT','Epistaxis and smell disorders; Approach to nasal masses; Sinusitis; Complications of sinusitis','neuropsych','Neurology','Cervical and low back pain'],
  ['2026-09-02','ent','ENT','Rhinitis; Nasal obstruction, discharge; Facial pain, rhinogenic headache','neuropsych','Neurology','Hemiparesis, paraparesis, ataxia'],
  ['2026-09-03','ophtho','Ophthalmology','Introduction, History; VA, Field, Lid, Lac, Orbit; Anterior Segment; Pupil, EOM, Fundus','peds','Pediatrics — recall','Re-read flagged chapters; work the question bank'],
  ['2026-09-04','rest'],
  ['2026-09-05','ophtho','Ophthalmology','Lid; Conjunctiva; Errors of Refraction','peds','Pediatrics — recall','Re-read flagged chapters; work the question bank'],
  ['2026-09-06','ophtho','Ophthalmology','Lacrimal System; Orbit; Glaucoma; Sclera','peds','Pediatrics — recall','Re-read flagged chapters; work the question bank'],
  ['2026-09-07','ophtho','Ophthalmology','Uvea; Cornea; Red Eye; Cataract','peds','Pediatrics — recall','Re-read flagged chapters; work the question bank'],
  ['2026-09-08','ophtho','Ophthalmology','Retina; Neuro-ophthalmology; Systemic Diseases; Oncology','peds','Pediatrics — recall','Re-read flagged chapters; work the question bank'],
  ['2026-09-09','ophtho','Ophthalmology','Trauma; Problems of Appearance; Squint','peds','Pediatrics — recall','Re-read flagged chapters; work the question bank'],
  ['2026-09-10','ophtho','Ophthalmology','Acute Visual Loss; The White Eye; Insidious Visual Loss; Visual Symptoms','peds','Pediatrics — recall','Re-read flagged chapters; work the question bank'],
  ['2026-09-11','rest'],
  ['2026-09-12','peds','Pediatrics — final','Full pass over all 21 chapters; every flagged question','peds','OSCE drill','Examination routines, growth charts, developmental milestones, emergency algorithms'],
  ['2026-09-13','peds','Pediatrics — final','Full pass over all 21 chapters; every flagged question','peds','OSCE drill','Examination routines, growth charts, developmental milestones, emergency algorithms'],
  ['2026-09-14','peds','EXAM','Pediatrics OSCE'],
  ['2026-09-15','peds','Pediatrics — papers','Past papers; the 21 chapters at speed; flagged questions only','ent','ENT — keep warm','One chapter a day so nothing is cold on the 22nd'],
  ['2026-09-16','peds','Pediatrics — papers','Past papers; the 21 chapters at speed; flagged questions only','ent','ENT — keep warm','One chapter a day so nothing is cold on the 22nd'],
  ['2026-09-17','peds','EXAM','Pediatrics — Paper 1 + Paper 2'],
  ['2026-09-18','ent','ENT — final revision','All 30 chapters; every flagged question; the discrimination tables','ophtho','Ophthalmology — keep warm','One chapter a day ahead of the 27th'],
  ['2026-09-19','ent','ENT — final revision','All 30 chapters; every flagged question; the discrimination tables','ophtho','Ophthalmology — keep warm','One chapter a day ahead of the 27th'],
  ['2026-09-20','ent','ENT — final revision','All 30 chapters; every flagged question; the discrimination tables','ophtho','Ophthalmology — keep warm','One chapter a day ahead of the 27th'],
  ['2026-09-21','ent','ENT — final revision','All 30 chapters; every flagged question; the discrimination tables','ophtho','Ophthalmology — keep warm','One chapter a day ahead of the 27th'],
  ['2026-09-22','ent','EXAM','ENT'],
  ['2026-09-23','ophtho','Ophthalmology — final revision','All 26 chapters; every flagged question','neuropsych','Neuro/Psych — keep warm','One chapter a day ahead of the 3rd'],
  ['2026-09-24','ophtho','Ophthalmology — final revision','All 26 chapters; every flagged question','neuropsych','Neuro/Psych — keep warm','One chapter a day ahead of the 3rd'],
  ['2026-09-25','ophtho','Ophthalmology — final revision','All 26 chapters; every flagged question','neuropsych','Neuro/Psych — keep warm','One chapter a day ahead of the 3rd'],
  ['2026-09-26','ophtho','Ophthalmology — final revision','All 26 chapters; every flagged question','neuropsych','Neuro/Psych — keep warm','One chapter a day ahead of the 3rd'],
  ['2026-09-27','ophtho','EXAM','Ophthalmology'],
  ['2026-09-28','neuropsych','Neuropsychiatry — final revision','All 27 chapters, psychiatry then neurology; every flagged question','peds','Pediatrics — restart','Begin the second pass for the October papers'],
  ['2026-09-29','neuropsych','Neuropsychiatry — final revision','All 27 chapters, psychiatry then neurology; every flagged question','peds','Pediatrics — restart','Begin the second pass for the October papers'],
  ['2026-09-30','neuropsych','Neuropsychiatry — final revision','All 27 chapters, psychiatry then neurology; every flagged question','peds','Pediatrics — restart','Begin the second pass for the October papers'],
  ['2026-10-01','neuropsych','Neuropsychiatry — final revision','All 27 chapters, psychiatry then neurology; every flagged question','peds','Pediatrics — restart','Begin the second pass for the October papers'],
  ['2026-10-02','neuropsych','Neuropsychiatry — final revision','All 27 chapters, psychiatry then neurology; every flagged question','peds','Pediatrics — restart','Begin the second pass for the October papers'],
  ['2026-10-03','neuropsych','EXAM','Neuropsychiatry'],
  ['2026-10-04','peds','Pediatrics — second pass','Full re-read for Paper 1 and Paper 2; the whole question bank','peds','Weak areas','Whatever the September papers exposed'],
  ['2026-10-05','peds','Pediatrics — second pass','Full re-read for Paper 1 and Paper 2; the whole question bank','peds','Weak areas','Whatever the September papers exposed'],
  ['2026-10-06','peds','Pediatrics — second pass','Full re-read for Paper 1 and Paper 2; the whole question bank','peds','Weak areas','Whatever the September papers exposed'],
  ['2026-10-07','peds','Pediatrics — second pass','Full re-read for Paper 1 and Paper 2; the whole question bank','peds','Weak areas','Whatever the September papers exposed'],
  ['2026-10-08','peds','Pediatrics — second pass','Full re-read for Paper 1 and Paper 2; the whole question bank','peds','Weak areas','Whatever the September papers exposed'],
  ['2026-10-09','peds','Pediatrics — second pass','Full re-read for Paper 1 and Paper 2; the whole question bank','peds','Weak areas','Whatever the September papers exposed'],
  ['2026-10-10','peds','Pediatrics — second pass','Full re-read for Paper 1 and Paper 2; the whole question bank','peds','Weak areas','Whatever the September papers exposed'],
  ['2026-10-11','peds','Pediatrics — second pass','Full re-read for Paper 1 and Paper 2; the whole question bank','peds','Weak areas','Whatever the September papers exposed'],
  ['2026-10-12','peds','Pediatrics — second pass','Full re-read for Paper 1 and Paper 2; the whole question bank','peds','Weak areas','Whatever the September papers exposed'],
  ['2026-10-13','peds','Pediatrics — second pass','Full re-read for Paper 1 and Paper 2; the whole question bank','peds','Weak areas','Whatever the September papers exposed'],
  ['2026-10-14','peds','Pediatrics — second pass','Full re-read for Paper 1 and Paper 2; the whole question bank','peds','Weak areas','Whatever the September papers exposed'],
  ['2026-10-15','peds','Pediatrics — second pass','Full re-read for Paper 1 and Paper 2; the whole question bank','peds','Weak areas','Whatever the September papers exposed'],
  ['2026-10-16','peds','Pediatrics — second pass','Full re-read for Paper 1 and Paper 2; the whole question bank','peds','Weak areas','Whatever the September papers exposed'],
  ['2026-10-17','peds','Pediatrics — second pass','Full re-read for Paper 1 and Paper 2; the whole question bank','peds','Weak areas','Whatever the September papers exposed'],
  ['2026-10-18','peds','EXAM','Pediatrics — Paper 1'],
  ['2026-10-19','peds','EXAM','Pediatrics — Paper 2'],
];
