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
      ['op-refract','Errors of Refraction'],['op-lac','Lacrimal System'],['op-orbit','Orbit'],
      ['op-glauc','Glaucoma'],['op-sclera','Sclera'],['op-uvea','Uvea'],
      ['op-cornea','Cornea'],['op-red','Red Eye'],['op-cat','Cataract'],
      ['op-ret','Retina'],['op-neuro','Neuro-ophthalmology'],
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
