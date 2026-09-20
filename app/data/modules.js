/* MODULES - syllabus taxonomy.
   Topics the syllabus splits across two lectures are held here as ONE chapter
   (2026-07-26, user's instruction). Merged: ent-audio1+2, ent-rhin1+2,
   op-glauc1+2, op-cornea1+2, op-cat1+2, op-ret1+2, op-neuro1+2, op-trauma1+2,
   op-squint1+2, nr-lmn1+2. 114 chapters -> 104.
   ⚠️ nr-lmn1+2 was REVERSED on 2026-08-22: the merged chapter printed 17 pp,
   four past the 13-page hard shape, and its two decks are two TOPICS rather than
   one topic taught over two lectures. See the note at nr-lmn/nr-nerve below.
   SCHEDULE is deliberately untouched: it carries no chapter ids. */

/* Subjects whose banks are not finished yet. Their cards still appear on the
   home page and in the nav, marked as coming soon and not clickable, but their
   questions and their notes are held out of QUESTIONS and THEORY entirely — so
   search, the review deck, the flagged list, the mock pool and every derived
   count stay correct without any of them knowing a lock exists.

   Launching a subject is removing its id from this list. Nothing else. A
   student's local progress on a locked subject is hidden, never deleted, and
   comes back untouched when the id goes. */
const LOCKED_MODULES = ['ophtho', 'neuropsych'];

/* The Theory section as a whole, not one subject's share of it. The summaries
   in T_ENT/T_PEDS/T_OPHTHO/T_NEURO were written to be read alongside the
   questions; the real book chapters replace them, and shipping a summary a
   student would learn from and then have to unlearn is worse than shipping
   nothing. So the notes are held back until the chapters exist.

   Unlocking is setting this to false. Nothing else — every entry point reads
   it: the rail item, the "Read the notes on this" link under an explanation,
   the search results, and go() itself as the backstop for a stale bookmark.
   THEORY itself stays populated so that qTheory(), theoryCount() and the
   search index keep working the day the flag flips. */
const THEORY_LOCKED = true;

/* Terms exist even before their content does, so an empty semester remains a
   real choice rather than borrowing another semester's subjects.
   Every module must name one of these ids. Module, chapter and question ids
   must stay unique across terms because saved progress is keyed by those ids. */
const TERMS = [
  {id:'y1s1',year:1,semester:1,name:'1st year · 1st semester'},
  {id:'y1s2',year:1,semester:2,name:'1st year · 2nd semester'},
  {id:'y2s1',year:2,semester:1,name:'2nd year · 1st semester'},
  {id:'y2s2',year:2,semester:2,name:'2nd year · 2nd semester'},
  {id:'y3s1',year:3,semester:1,name:'3rd year · 1st semester'},
  {id:'y3s2',year:3,semester:2,name:'3rd year · 2nd semester'},
  {id:'y4s1',year:4,semester:1,name:'4th year · 1st semester'},
  {id:'y4s2',year:4,semester:2,name:'4th year · 2nd semester'},
  {id:'y5s1',year:5,semester:1,name:'5th year · 1st semester'},
  {id:'y5s2',year:5,semester:2,name:'5th year · 2nd semester'}
];
let activeTerm=null;
function activeModules(){return MODULES.filter(m=>m.term===activeTerm)}
function termChoice(p){
  return p&&TERMS.some(t=>t.id===p.id)&&Number.isFinite(p.at)&&p.at>=0
    ?{id:p.id,at:p.at}:null;
}

const MODULES = [
  {id:'ent', term:'y4s2', name:'ENT', icon:'ear', color:'var(--ent)', hex:'#b4472f', groups:[
    /* Reordered 2026-09-20 to the ENT book's TOC order (content\ent\book-map.md).
       The ENT book is THREE volumes (Ear, Nose, Throat) = the book's own top
       level, so the three groups stay as the volumes and chapters are ordered
       within each to that volume's TOC. Ids and titles UNCHANGED. A few app
       chapters have no 1:1 book chapter and are placed by title-sense, affecting
       order only, never grouping: ent-osa (no book OSA chapter -> with tonsils),
       ent-swallow vs ent-dysph (book ch4 Dysphagia), ent-vertigo (book ch9;
       book ch10 Vestibular diagnosis has no separate app chapter). App coverage
       gaps vs book: Ear ch2 External ear diseases, Nose ch6 Minor nasal
       procedures, Throat ch5 Trauma of the neck have no app chapter. */
    {name:'Ear', chapters:[
      ['ent-earanat','Anatomy and function of the ear'],['ent-aom','Acute otitis media and effusion'],
      ['ent-csom','CSOM and complications'],['ent-facial','Facial nerve paralysis'],
      ['ent-hearing','Hearing loss, tinnitus'],['ent-otalgia','Otalgia'],
      ['ent-otorrhea','Otorrhea'],['ent-audio','Audiovestibular evaluation'],
      ['ent-vertigo','Vertigo, dizziness']]},
    {name:'Nose', chapters:[
      ['ent-noseanat','Anatomy of the nose'],['ent-septum','Septum diseases and nasal trauma'],
      ['ent-rhin','Rhinitis'],['ent-epistaxis','Epistaxis and smell disorders'],
      ['ent-nasalobs','Nasal obstruction, discharge'],['ent-facialpain','Facial pain, rhinogenic headache'],
      ['ent-sinusitis','Sinusitis'],['ent-sinuscomp','Complications of sinusitis'],
      ['ent-nasalmass','Approach to nasal masses']]},
    {name:'Throat', chapters:[
      ['ent-pharanat','Anatomy of pharynx and larynx'],['ent-pharsupp','Pharyngeal suppurations'],
      ['ent-paedlar','Paediatric laryngeal lesions'],['ent-dysph','Dysphagia — ENT perspective'],
      ['ent-swallow','Swallowing disorders'],['ent-neck','Neck masses'],
      ['ent-hoarse','Hoarseness of voice'],['ent-vocal','Vocal cord paralysis'],
      ['ent-tonsils','Tonsils and adenoids'],['ent-osa','Snoring and OSA'],
      ['ent-stridor','Stridor and tracheostomy'],['ent-phon','Introduction to phoniatrics']]}
  ]},
  {id:'ophtho', term:'y4s2', name:'Ophthalmology', icon:'eye', color:'var(--ophtho)', hex:'#5c7a52', groups:[
    /* Regrouped 2026-09-19 on the ophthalmology endpoint book's own Contents
       page (owner ruling), not on the lecture decks: the book's sections are the
       groups, the lecture-sized chapters stay inside them so every chapter id,
       question and theory entry is untouched. Order is the book's. Sections 16
       (Pediatric Ophthalmology) and 20 (Drugs and the Eye) have no chapter yet
       and are left out rather than shown as bare headers; each gets its group
       when its endpoint section is filed. Placement of op-va, op-pupil in group 1
       and of the symptom-led chapters in group 21 is from chapter titles, not
       from reading the book's sections 1 and 21. Plan:
       progress/PLAN-ophtho-book-groups-2026-09-19.md */
    {name:'Examination of the Eye', chapters:[
      /* Split 2026-08-18, AFTER printing 14 pp — past the 13-page hard shape,
         so the split is a measurement, not a forecast. Book ch.1 is 20,920
         words, the largest chapter by a factor of two, and op-intro rests on
         ~8,780 of them across four unrelated subjects.
         The seam is CONTIGUOUS at int-7/int-8 and almost exactly even:
         2,436 words of why-examine + history + anatomy + ageing, against
         2,498 of the book's own ten-step examination sequence, what it adds
         over op-va/op-pupil, and the referral thresholds. No question
         straddles it — 11 of the 13 sit in int-1..int-4, two in int-11.
         The writer proposed an anatomy-vs-clinical seam instead; it was
         rejected because it was non-contiguous (int-1, int-2 + int-8..int-13)
         and would have reordered the chapter to achieve it. */
      ['op-intro','Introduction, history and the anatomy the module assumes'],
      ['op-intro-exam','The book’s examination sequence, and what it adds'],
      ['op-va','VA, Field, Lid, Lac, Orbit'],['op-ant','Anterior Segment'],
      ['op-pupil','Pupil, EOM, Fundus']]},
    {name:'Optics and Errors of Refraction', chapters:[
      /* Split 2026-08-17, forecast BEFORE writing. The deck is 88 pages and
         was read visually the same day; its cache holds 4,439 words against
         the 1,540 pdftotext ever saw, which is ~18 printed pages as one
         chapter. The seam is p61, where astigmatism begins: it is the ENTITY
         boundary, because myopia and hyperopia share the deck's own
         Causes -> Presentation -> Treatment scaffold. The more even p53 seam
         (2,245/2,194) was rejected for cutting that pair in half.
         This chapter carries 38 questions, 28 % of the module. */
      ['op-refract','Errors of refraction — the optics, myopia and hyperopia'],
      ['op-refract-astig','Astigmatism, presbyopia and prescribing']]},
    {name:'Orbit', chapters:[
      /* Split 2026-08-16: the single Orbit chapter PRINTED at 14 pages, one past
         the project's 13-page shape. The seam was chosen by the questions —
         cutting after the carotid-cavernous fistula section leaves exactly one
         question straddling, against three and two at the other candidates. */
      ['op-orbit','Orbit, thyroid eye disease and cellulitis'],
      ['op-orbit-mass','Orbital emergencies, tumours and the socket']]},
    {name:'Lacrimal System', chapters:[['op-lac','Lacrimal System']]},
    {name:'Eyelids', chapters:[['op-lid','Lid']]},
    {name:'Conjunctiva', chapters:[['op-conj','Conjunctiva']]},
    {name:'Sclera', chapters:[['op-sclera','Sclera']]},
    {name:'Cornea', chapters:[
      /* Split 2026-08-17, planned BEFORE writing rather than discovered after:
         the cornea deck is larger than the orbit deck that printed 14 pages,
         so the seam was chosen up front. Medical cornea / surgical cornea. */
      ['op-cornea','Cornea — infection, trauma and the red eye'],
      ['op-cornea-surg','Cornea — ectasia, grafts and refractive surgery']]},
    {name:'Lens', chapters:[
      /* Split 2026-08-17, forecast BEFORE writing like the cornea pair: one
         chapter costed out at ~4,370 words / ~18 printed pages. The seam is
         medical vs surgical, because both lecturers already draw it and ZERO
         questions straddle it — the chapter's single question sits in cat-4.
         Split by deck was rejected (both decks teach both halves) and split by
         aetiology was rejected (PSC is one slide cut in two). */
      ['op-cat','Cataract — types, maturity and clinical picture'],
      ['op-cat-surg','Cataract surgery, IOLs and the aphakic eye']]},
    {name:'Uveal Tract', chapters:[['op-uvea','Uvea']]},
    {name:'Glaucoma', chapters:[['op-glauc','Glaucoma']]},
    {name:'Vitreous', chapters:[
      /* Added 2026-09-19 (owner's choice): the ophtho endpoint book teaches
         the vitreous as its own section (pdf 850-879) and no lecture chapter
         covers it, so endpoint section 12 files here. */
      ['op-vitreous','Vitreous']]},
    {name:'Retina', chapters:[
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
      ['op-ret','Retinal detachment']]},
    {name:'Neuro-ophthalmology', chapters:[
      /* Split 2026-08-18, forecast BEFORE writing, on the BOOK's own four
         Roman-numbered parts (ch.14, printed 178-195). Written as one chapter
         it measured 28.5 estimated pages - the module's largest by far - and
         it is the highest-weighted topic in the book at 10 % of the paper,
         against 264 cached words in the two lectures that were meant to teach
         it. Parts I and IV are joined because they are one axis, the afferent
         pathway and what a lesion on it does to the field; L22's own title is
         "Pupil and Visual pathway". */
      ['op-neuro','Pupil, the visual pathway and field defects'],
      ['op-neuro-motil','Ocular motility disorders'],
      ['op-neuro-optic','The optic nerve']]},
    {name:'Squint', chapters:[['op-squint','Squint'],['op-appear','Problems of Appearance']]},
    {name:'Pediatric Ophthalmology', chapters:[['op-peds','Pediatric Ophthalmology']]},
    {name:'Malignancies of the Eye and its Adnexa', chapters:[['op-onc','Oncology']]},
    {name:'Ocular Trauma', chapters:[['op-trauma','Trauma']]},
    {name:'Ocular Manifestations of Systemic Conditions and Diseases', chapters:[
      ['op-systemic','Systemic Diseases']]},
    {name:'Drugs and the Eye', chapters:[['op-drugs','Drugs and the Eye']]},
    {name:'Keys for Diagnosis', chapters:[
      ['op-acute','Acute Visual Loss'],['op-white','The White Eye'],
      ['op-insid','Insidious Visual Loss'],['op-vissym','Visual Symptoms'],
      /* Split 2026-08-17. L37 is a BOOK CHAPTER, not a deck — 5,104 words, the
         densest source in the module — and forecast at ~21 pages as one
         chapter. The seam is the book's OWN first-order heading, "Further
         Interpretation of the Findings", which balances the halves within 8 %
         where no other candidate came within 30 %. A seam at "Management or
         Referral" would have left part 1 at ~16 pp needing a second split, and
         an acute-vs-chronic seam would have written the 1,001-word danger-signal
         block twice and cut three entities in half. */
      ['op-red','Red eye — the approach and the causes'],
      ['op-red-mgmt','Red eye — danger signals, referral and treatment']]}
  ]},
  {id:'neuropsych', term:'y4s2', name:'Neuropsychiatry', icon:'brain', color:'var(--neuro)', hex:'#6d4c7d', groups:[
    /* Reordered 2026-09-20 to the neuropsychiatry book's TOC order
       (content\neuro\book-map.md). The book is two halves - NEUROLOGY (printed
       1-176) then PSYCHIATRY (177-277) - which are the book's own top level, so
       the two groups stay and are ordered Neurology-first to match the book;
       chapters are ordered within each to that half's TOC. Ids and titles
       UNCHANGED. Several chapters are Book-project chapter splits; the split
       rationale lives in the Book project's theory-plan.md section 4 and in this
       file's git history (before 2026-09-20), not inline here any more.
       Placements by title-sense, order only: nr-exam (book ch2 examination),
       nr-delirium (book Coma ch11 / Psych Dementia ch8), the ps-interview /
       ps-symptom / ps-osce trio (all book Psych ch1). Coverage gaps: ps-osce has
       no dedicated book chapter; ps-geri only via Psych ch8 Dementia and delirium. */
    {name:'Neurology', chapters:[
      ['nr-intro','Introduction to neurology and localization'],
      ['nr-exam','The neurological examination'],
      ['nr-stroke','Cerebrovascular stroke'],
      ['nr-epilepsy','Seizures and epilepsy'],
      ['nr-hemi','Hemiplegia and hemiparesis'],
      ['nr-para','Paraparesis and ataxia'],
      ['nr-headache','Headache'],
      ['nr-ms','MS and demyelinating disorders'],
      ['nr-coma','Coma'],
      ['nr-comapproach','Approach to the comatose patient'],
      ['nr-delirium','Delirium'],
      ['nr-movement','Movement disorders'],
      ['nr-cns','CNS infections'],
      ['nr-lmn','Muscle disease and the neuromuscular junction'],
      ['nr-nerve','Peripheral neuropathy and Guillain-Barré'],
      ['nr-cranial','Cranial nerves disorders'],
      ['nr-backpain','Low back pain and sciatica'],
      ['nr-neckpain','Neck pain and brachialgia']]},
    {name:'Psychiatry', chapters:[
      ['ps-interview','Interview Assessment'],
      ['ps-symptom','Symptomatology'],
      ['ps-osce','OSCE demonstration'],
      ['ps-psychoed','Psychoeducation and Myths'],
      ['ps-anxiety','Anxiety Disorders'],
      ['ps-ocd','Obsessive-compulsive disorder'],
      ['ps-ptsd','PTSD and acute stress disorder'],
      ['ps-mood','Mood Disorders'],
      ['ps-somato','Somatoform disorders'],
      ['ps-child','Child Psychiatry'],
      ['ps-psychosis','Psychosis and schizophrenia: cause and presentation'],
      ['ps-schizmgmt','Schizophrenia: course, differential and management'],
      ['ps-geri','Geriatric Psychiatry'],
      ['ps-sud','Substance use disorder'],
      ['ps-emerg','Emergency Psychiatry'],
      ['ps-pharm','Psychopharmacology'],
      ['ps-devices','Devices in Psychiatry'],
      ['ps-therapy','Psychotherapy']]}
  ]},
  {id:'pediatrics', term:'y4s2', name:'Pediatrics', icon:'teddy', color:'var(--peds)', hex:'#2e5f8a', groups:[
    /* Remapped 2026-09-20 to the paediatrics book's chapter order (Part 1 then
       Part 2), one group per book chapter. Chapter ids and titles are UNCHANGED;
       only grouping and order changed. Progress/schedule is keyed by date and
       title, never chapter id or group name, so reordering does not affect it.
       The old groups were study-status (Non-systems / Completed earlier /
       Systems) and are replaced. The book chapter "Perinatal medicine" (p.106 —
       antenatal/fetal medicine, resuscitation, NIPE) has no app chapter, so it
       has no group here: a coverage gap, recorded in the remap note. All six
       app "perinatal-" and "neonatal-" chapters fall under the book's Neonatal
       medicine chapter (p.140) per content\peds\perinatal-neonatal-boundary.md.
       Source: content\peds book map + that boundary file. */
    {name:'Growth and puberty', chapters:[
      ['growth-puberty','Growth and short stature'],['puberty','Puberty']]},
    {name:'Nutrition', chapters:[
      ['nutrition','Faltering growth and obesity'],['nutrition-feed','Infant feeding'],
      ['nutrition-pem','Protein energy malnutrition'],
      ['nutrition-vit','Rickets and vitamin deficiencies']]},
    {name:'Gastroenterology', chapters:[
      ['gastroenterology','Vomiting and reflux'],['gi-diarrhoea','Diarrhoea and constipation'],
      ['gi-abdopain','Abdominal pain']]},
    {name:'Accidents and poisoning', chapters:[
      ['accidents','Accidents and poisoning']]},
    {name:'Pediatric emergencies', chapters:[
      ['emergencies','Pediatric emergencies']]},
    {name:'Neonatal medicine', chapters:[
      ['perinatal','The newborn and prematurity'],
      ['perinatal-rd','Neonatal respiratory distress'],
      ['perinatal-hie','Birth asphyxia and HIE'],
      ['neonatal','Neonatal jaundice'],
      ['neonatal-seiz','Neonatal seizures and birth injury'],
      ['neonatal-sepsis','Neonatal sepsis']]},
    {name:'Allergy', chapters:[
      ['allergy','Allergy']]},
    {name:'Infection and immunity', chapters:[
      ['infection','The febrile child and meningitis'],
      ['infection-bact','Bacterial infections and Kawasaki'],
      ['infection-rash','Maculopapular exanthems'],
      ['infection-vesic','Vesicular exanthems'],
      ['infection-immunity','Immunity and immunodeficiency'],
      ['infection-vaccine','Vaccination and stewardship']]},
    {name:'Normal Development', chapters:[
      ['normal-dev','Normal Development']]},
    {name:'Developmental problems', chapters:[
      ['dev-problems','Developmental delay and disability'],
      ['dev-nd','Autism and ADHD']]},
    {name:'Genetics', chapters:[
      ['genetics','Genetics']]},
    {name:'Hematological Disorders', chapters:[
      ['haematology','Anaemia and marrow failure'],
      ['haem-bleeding','Bleeding and clotting disorders']]},
    {name:'Respiratory Disorders', chapters:[
      ['resp-pneumonia','Pneumonia'],['respiratory','Asthma'],['resp-bronch','Bronchiolitis']]},
    {name:'Cardiac Disorders', chapters:[
      ['cardiac','Congenital heart disease'],['cardiac-cyan','Cyanotic heart disease'],
      ['cardiac-acq','Acquired heart disease']]},
    {name:'Kidney & Urinary tract', chapters:[
      ['renal-uti','Urinary tract infection'],['renal','Glomerular disease'],
      ['renal-cakut','CAKUT, stones and enuresis']]},
    {name:'Neurological Disorders', chapters:[
      ['neuro-stroke','Stroke and intracranial haemorrhage'],['neurological','Seizures and epilepsy'],
      ['neuro-nm','Motor and neuromuscular disorders'],['neuro-cp','Cerebral palsy']]},
    {name:'Mental Health', chapters:[
      ['mental','Mental Health']]},
    {name:'Diabetes & Endocrine', chapters:[
      ['endocrine','Diabetes mellitus'],['endo-dka','Diabetic ketoacidosis'],
      ['endo-thyroid','Thyroid and adrenal disorders']]},
    {name:'Liver Disorders', chapters:[
      ['liver','Infantile cholestasis'],['liver-hep','Viral hepatitis and chronic liver disease']]},
    {name:'Malignant Disease', chapters:[
      ['malignant','Leukaemia'],['malignant-solid','Brain and solid tumours']]}
  ]}
];
