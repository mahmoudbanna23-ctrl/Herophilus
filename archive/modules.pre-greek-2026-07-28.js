/* MODULES - syllabus taxonomy.
   Topics the syllabus splits across two lectures are held here as ONE chapter
   (2026-07-26, user's instruction). Merged: ent-audio1+2, ent-rhin1+2,
   op-glauc1+2, op-cornea1+2, op-cat1+2, op-ret1+2, op-neuro1+2, op-trauma1+2,
   op-squint1+2, nr-lmn1+2. 114 chapters -> 104.
   SCHEDULE is deliberately untouched: it carries no chapter ids. */

const MODULES = [
  {id:'ent', name:'ENT', icon:'👂', color:'var(--ent)', hex:'#ff5a5f', groups:[
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
  {id:'ophtho', name:'Ophthalmology', icon:'👁️', color:'var(--ophtho)', hex:'#00b37e', groups:[
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
  {id:'neuropsych', name:'Neuropsychiatry', icon:'🧠', color:'var(--neuro)', hex:'#8b5cf6', groups:[
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
  {id:'pediatrics', name:'Pediatrics', icon:'🧒', color:'var(--peds)', hex:'#3b82f6', groups:[
    {name:'Non-systems', chapters:[
      ['emergencies','Pediatric emergencies'],['allergy','Allergy'],
      ['infection','Infection and immunity'],['normal-dev','Normal Development'],
      ['dev-problems','Developmental problems'],['genetics','Genetics'],
      ['malignant','Malignant Disease']]},
    {name:'Completed earlier', chapters:[
      ['growth-puberty','Growth and puberty'],['nutrition','Nutrition'],['accidents','Accidents and poisoning']]},
    {name:'Systems', chapters:[
      ['gastroenterology','Gastroenterology'],['perinatal','Perinatal medicine'],
      ['neonatal','Neonatal medicine'],['haematology','Hematological Disorders'],
      ['respiratory','Respiratory Disorders'],['cardiac','Cardiac Disorders'],
      ['renal','Kidney and Urinary tract'],['neurological','Neurological Disorders'],
      ['mental','Mental Health'],['endocrine','Diabetes and Endocrine'],['liver','Liver Disorders']]}
  ]}
];
