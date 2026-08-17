/* MODULES - syllabus taxonomy.
   Topics the syllabus splits across two lectures are held here as ONE chapter
   (2026-07-26, user's instruction). Merged: ent-audio1+2, ent-rhin1+2,
   op-glauc1+2, op-cornea1+2, op-cat1+2, op-ret1+2, op-neuro1+2, op-trauma1+2,
   op-squint1+2, nr-lmn1+2. 114 chapters -> 104.
   SCHEDULE is deliberately untouched: it carries no chapter ids. */

const MODULES = [
  {id:'ent', name:'ENT', icon:'ear', color:'var(--ent)', hex:'#b4472f', groups:[
    {name:'Ear', chapters:[
      ['ent-audio','Audiovestibular evaluation'],['ent-facial','Facial nerve paralysis'],
      ['ent-csom','CSOM and complications'],
      ['ent-otalgia','Otalgia'],['ent-otorrhea','Otorrhea'],
      ['ent-hearing','Hearing loss, tinnitus'],['ent-vertigo','Vertigo, dizziness'],
      ['ent-earanat','Anatomy and function of the ear'],['ent-aom','Acute otitis media and effusion']]},
    {name:'Throat', chapters:[
      ['ent-pharanat','Anatomy of pharynx and larynx'],['ent-hoarse','Hoarseness of voice'],
      ['ent-tonsils','Tonsils and adenoids'],['ent-pharsupp','Pharyngeal suppurations'],
      ['ent-neck','Neck masses'],['ent-stridor','Stridor and tracheostomy'],
      ['ent-swallow','Swallowing disorders'],['ent-phon','Introduction to phoniatrics'],
      ['ent-osa','Snoring and OSA'],['ent-dysph','Dysphagia — ENT perspective'],
      ['ent-vocal','Vocal cord paralysis'],['ent-paedlar','Paediatric laryngeal lesions']]},
    {name:'Nose', chapters:[
      ['ent-noseanat','Anatomy of the nose'],['ent-septum','Septum diseases and nasal trauma'],
      ['ent-epistaxis','Epistaxis and smell disorders'],['ent-nasalmass','Approach to nasal masses'],
      ['ent-sinusitis','Sinusitis'],['ent-sinuscomp','Complications of sinusitis'],
      ['ent-rhin','Rhinitis'],['ent-nasalobs','Nasal obstruction, discharge'],
      ['ent-facialpain','Facial pain, rhinogenic headache']]}
  ]},
  {id:'ophtho', name:'Ophthalmology', icon:'eye', color:'var(--ophtho)', hex:'#5c7a52', groups:[
    {name:'All lectures', chapters:[
      ['op-intro','Introduction, History'],['op-va','VA, Field, Lid, Lac, Orbit'],['op-ant','Anterior Segment'],
      ['op-pupil','Pupil, EOM, Fundus'],['op-lid','Lid'],['op-conj','Conjunctiva'],
      /* Split 2026-08-17, forecast BEFORE writing. The deck is 88 pages and
         was read visually the same day; its cache holds 4,439 words against
         the 1,540 pdftotext ever saw, which is ~18 printed pages as one
         chapter. The seam is p61, where astigmatism begins: it is the ENTITY
         boundary, because myopia and hyperopia share the deck's own
         Causes -> Presentation -> Treatment scaffold. The more even p53 seam
         (2,245/2,194) was rejected for cutting that pair in half.
         This chapter carries 38 questions, 28 % of the module. */
      ['op-refract','Errors of refraction — the optics, myopia and hyperopia'],
      ['op-refract-astig','Astigmatism, presbyopia and prescribing'],
      ['op-lac','Lacrimal System'],
      /* Split 2026-08-16: the single Orbit chapter PRINTED at 14 pages, one past
         the project's 13-page shape. The seam was chosen by the questions —
         cutting after the carotid-cavernous fistula section leaves exactly one
         question straddling, against three and two at the other candidates. */
      ['op-orbit','Orbit, thyroid eye disease and cellulitis'],
      ['op-orbit-mass','Orbital emergencies, tumours and the socket'],
      ['op-glauc','Glaucoma'],['op-sclera','Sclera'],['op-uvea','Uvea'],
      /* Split 2026-08-17, planned BEFORE writing rather than discovered after:
         the cornea deck is larger than the orbit deck that printed 14 pages,
         so the seam was chosen up front. Medical cornea / surgical cornea. */
      ['op-cornea','Cornea — infection, trauma and the red eye'],
      ['op-cornea-surg','Cornea — ectasia, grafts and refractive surgery'],
      /* Split 2026-08-17. L37 is a BOOK CHAPTER, not a deck — 5,104 words, the
         densest source in the module — and forecast at ~21 pages as one
         chapter. The seam is the book's OWN first-order heading, "Further
         Interpretation of the Findings", which balances the halves within 8 %
         where no other candidate came within 30 %. A seam at "Management or
         Referral" would have left part 1 at ~16 pp needing a second split, and
         an acute-vs-chronic seam would have written the 1,001-word danger-signal
         block twice and cut three entities in half. */
      ['op-red','Red eye — the approach and the causes'],
      ['op-red-mgmt','Red eye — danger signals, referral and treatment'],
      /* Split 2026-08-17, forecast BEFORE writing like the cornea pair: one
         chapter costed out at ~4,370 words / ~18 printed pages. The seam is
         medical vs surgical, because both lecturers already draw it and ZERO
         questions straddle it — the chapter's single question sits in cat-4.
         Split by deck was rejected (both decks teach both halves) and split by
         aetiology was rejected (PSC is one slide cut in two). */
      ['op-cat','Cataract — types, maturity and clinical picture'],
      ['op-cat-surg','Cataract surgery, IOLs and the aphakic eye'],
      /* Split 2026-08-17 — three ways, along the SOURCE FILES' own seams, and
         forecast at ~29 printed pages as one chapter (the module's largest).
         Three drivers added up: three decks, TWELVE register rows from six
         donors, and L20 never delivering the "degenerations" half of its own
         title. The base key stays on DETACHMENT deliberately — four of the
         five questions are detachment questions, so only one refiles.
         ⚠️ A FOURTH chapter was proposed and DROPPED: printed, the detachment
         half comes to 10 pages, not the 15.2 the estimator forecast. */
      ['op-ret-dr','Diabetic retinopathy and the macula'],
      ['op-ret-vasc','Retinal vascular disorders'],
      ['op-ret','Retinal detachment'],
      ['op-neuro','Neuro-ophthalmology'],
      ['op-systemic','Systemic Diseases'],['op-onc','Oncology'],['op-trauma','Trauma'],
      ['op-appear','Problems of Appearance'],['op-squint','Squint'],
      ['op-acute','Acute Visual Loss'],['op-white','The White Eye'],
      ['op-insid','Insidious Visual Loss'],['op-vissym','Visual Symptoms']]}
  ]},
  {id:'neuropsych', name:'Neuropsychiatry', icon:'brain', color:'var(--neuro)', hex:'#6d4c7d', groups:[
    {name:'Psychiatry', chapters:[
      ['ps-interview','Interview Assessment'],['ps-osce','OSCE demonstration'],
      ['ps-somato','Somatoform disorders'],['ps-symptom','Symptomatology'],
      ['ps-psychoed','Psychoeducation and Myths'],['ps-anxiety','Anxiety Disorders'],
      ['ps-ocd','OCD and PTSD'],['ps-mood','Mood Disorders'],['ps-psychosis','Approach to Psychosis'],
      ['ps-geri','Geriatric Psychiatry'],['ps-child','Child Psychiatry'],['ps-sud','Substance use disorder'],
      ['ps-emerg','Emergency Psychiatry'],['ps-pharm','Psychopharmacology'],
      ['ps-devices','Devices in Psychiatry'],['ps-therapy','Psychotherapy']]},
    {name:'Neurology', chapters:[
      ['nr-intro','Introduction to neurology and localization'],['nr-ms','MS and demyelinating disorders'],
      ['nr-movement','Movement disorders / Epilepsy'],
      ['nr-lmn','LMN: peripheral nerve, muscle and neuromuscular disorders'],['nr-cns','CNS infections'],
      ['nr-cranial','Cranial nerves disorders'],['nr-delirium','Delirium and Coma'],
      ['nr-headache','Headache'],['nr-stroke','Cerebrovascular stroke'],
      ['nr-backpain','Cervical and low back pain'],['nr-hemi','Hemiparesis, paraparesis, ataxia']]}
  ]},
  {id:'pediatrics', name:'Pediatrics', icon:'teddy', color:'var(--peds)', hex:'#2e5f8a', groups:[
    {name:'Non-systems', chapters:[
      ['emergencies','Pediatric emergencies'],['allergy','Allergy'],
      ['infection','The febrile child and meningitis'],
      ['infection-bact','Bacterial infections and Kawasaki'],
      ['infection-rash','Maculopapular exanthems'],
      ['infection-vesic','Vesicular exanthems'],
      ['infection-immunity','Immunity and immunodeficiency'],
      ['infection-vaccine','Vaccination and stewardship'],
      ['normal-dev','Normal Development'],
      ['dev-problems','Developmental delay and disability'],
      ['dev-nd','Autism and ADHD'],['genetics','Genetics'],
      ['malignant','Leukaemia'],['malignant-solid','Brain and solid tumours']]},
    {name:'Completed earlier', chapters:[
      ['growth-puberty','Growth and short stature'],['puberty','Puberty'],
      ['nutrition','Faltering growth and obesity'],
      ['nutrition-feed','Infant feeding'],
      ['nutrition-pem','Protein energy malnutrition'],
      ['nutrition-vit','Rickets and vitamin deficiencies'],['accidents','Accidents and poisoning']]},
    /* Split 2026-08-15 at the user's instruction. Paediatrics carries ~4x ENT's
       lecture load per chapter, so writing to lecture length gave 21-32 page
       chapters — the size the user rejected for ENT. Splitting keeps every fact
       and returns 3-13 page units. Boundaries follow each written chapter's own
       contiguous sections, so nothing was reordered or rewritten. SCHEDULE is
       keyed by date and title, never chapter id, so it is unaffected. */
    {name:'Systems', chapters:[
      ['gastroenterology','Vomiting and reflux'],['gi-diarrhoea','Diarrhoea and constipation'],
      ['gi-abdopain','Abdominal pain'],
      ['perinatal','The newborn and prematurity'],
      ['perinatal-rd','Neonatal respiratory distress'],
      ['perinatal-hie','Birth asphyxia and HIE'],
      ['neonatal','Neonatal jaundice'],
      ['neonatal-seiz','Neonatal seizures and birth injury'],
      ['neonatal-sepsis','Neonatal sepsis'],
      ['haematology','Anaemia and marrow failure'],
      ['haem-bleeding','Bleeding and clotting disorders'],
      ['resp-pneumonia','Pneumonia'],['respiratory','Asthma'],['resp-bronch','Bronchiolitis'],
      ['cardiac','Congenital heart disease'],['cardiac-cyan','Cyanotic heart disease'],
      ['cardiac-acq','Acquired heart disease'],
      ['renal-uti','Urinary tract infection'],['renal','Glomerular disease'],
      ['renal-cakut','CAKUT, stones and enuresis'],
      ['neuro-stroke','Stroke and intracranial haemorrhage'],['neurological','Seizures and epilepsy'],
      ['neuro-nm','Motor and neuromuscular disorders'],['neuro-cp','Cerebral palsy'],
      ['mental','Mental Health'],
      ['endocrine','Diabetes mellitus'],['endo-dka','Diabetic ketoacidosis'],
      ['endo-thyroid','Thyroid and adrenal disorders'],
      ['liver','Infantile cholestasis'],
      ['liver-hep','Viral hepatitis and chronic liver disease']]}
  ]}
];
