/* MODULES - syllabus taxonomy.
   Topics the syllabus splits across two lectures are held here as ONE chapter
   (2026-07-26, user's instruction). Merged: ent-audio1+2, ent-rhin1+2,
   op-glauc1+2, op-cornea1+2, op-cat1+2, op-ret1+2, op-neuro1+2, op-trauma1+2,
   op-squint1+2, nr-lmn1+2. 114 chapters -> 104.
   ⚠️ nr-lmn1+2 was REVERSED on 2026-08-22: the merged chapter printed 17 pp,
   four past the 13-page hard shape, and its two decks are two TOPICS rather than
   one topic taught over two lectures. See the note at nr-lmn/nr-nerve below.
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
      ['op-neuro-optic','The optic nerve'],
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
      /* Split 2026-08-22, AFTER printing 14 pp — one past the 13-page hard
         shape, with 132 words stranded on page 14. Two genuine second copies
         were trimmed FIRST and recovered only 82 words of paper; 50 words still
         sat on page 14 and nothing left was duplication, so the chapter split.
         The seam is the DECK'S OWN `PART ONE` / `PART TWO` boundary: 3,139 words
         of OCD against 1,850 of PTSD, at the chapter's measured 306 w/pp.
         ⚠ Unlike nr-lmn/nr-nerve this splits a SINGLE deck. §4's merge rule
         joins one TOPIC taught over two lectures and says nothing about two
         disorders taught in one; ≤13 pp measured by printing is a user ruling.
         ps-ocd keeps its id, so npqb-ps-7 does not move. SCHEDULE untouched. */
      ['ps-ocd','Obsessive-compulsive disorder'],
      ['ps-ptsd','PTSD and acute stress disorder'],
      ['ps-mood','Mood Disorders'],
      /* Split 2026-08-23, FORECAST BEFORE WRITING — the second such split in the
         module, after nr-movement/nr-epilepsy. The evidence was in hand first:
         book Psychiatry ch.7 runs to 4,075 body words over eleven printed pages
         (228-238), which is more source than any single chapter in this module
         has ever been written from. At the module's measured 281-343 w/pp and
         its measured 150-200 % inflation, one chapter forecasts at 20-30 pp —
         two to three times the ≤13 hard shape. No trim reaches that.
         ⚠ The deck does NOT rescue it: L11,12 is 2,251 words of which 1,933 —
         86 % — are FIVE case vignettes. Its teaching content is ~320 words.
         The seam is `Course & Prognosis` on printed 233, contiguous in the book
         and needing no reordering, and it splits the sources almost evenly:
           ps-psychosis  book 228 - 233 upper (2,131 w) + the deck's symptom
                         teaching — what schizophrenia is and how it presents
           ps-schizmgmt  book 233 lower - 238 (1,944 w) + the deck's management
                         slides and all five cases — how it runs and what to do
         ⚠ ps-schizmgmt also inherits the ANTIPSYCHOTIC block on printed 236-238,
         which is the content book ch.11 defers to with "(See 'schizophrenia'
         lecture)". ps-pharm points at it rather than repeating it — declared in
         both registers. ps-psychosis keeps its id; neither half has a question,
         so nothing moves. SCHEDULE untouched. */
      ['ps-psychosis','Psychosis and schizophrenia: cause and presentation'],
      ['ps-schizmgmt','Schizophrenia: course, differential and management'],
      ['ps-geri','Geriatric Psychiatry'],['ps-child','Child Psychiatry'],['ps-sud','Substance use disorder'],
      ['ps-emerg','Emergency Psychiatry'],['ps-pharm','Psychopharmacology'],
      ['ps-devices','Devices in Psychiatry'],['ps-therapy','Psychotherapy']]},
    {name:'Neurology', chapters:[
      ['nr-intro','Introduction to neurology and localization'],
      ['nr-exam','The neurological examination'],
      ['nr-ms','MS and demyelinating disorders'],
      /* Split 2026-08-22, FORECAST rather than found: theory-plan.md §4 called it
         the module's only forecast split, and the old title admitted it —
         "Movement disorders / Epilepsy" are TWO TOPICS, not one topic taught
         over two lectures, so §4's merge rule never applied. The seam is the
         deck boundary: L3) MOVEMENT DISORDERS 2,699 w against L4)
         Seizures_Epilepsy 2,321 w, forecast 15.0 pp together at ÷335 and past
         the 13-page hard shape on every divisor tried. Split BEFORE writing,
         which is what §4 asks for where the evidence is already in hand.
         nr-movement keeps its id, so npqb-nr-113 (festinant gait) does not
         move. SCHEDULE untouched — it carries no chapter ids. */
      ['nr-movement','Movement disorders'],
      ['nr-epilepsy','Seizures and epilepsy'],
      /* Split 2026-08-22, AFTER printing 17 pp — four past the 13-page hard
         shape. The seam is the DECK BOUNDARY and it is contiguous: L5) Muscle
         Disease against L6) Peripheral neuropathy, 3,481 words against 2,134 at
         the chapter's own measured rate of 296 w/pp. This REVERSES the original
         nr-lmn1+2 merge noted at the head of this file: the merge rule joins one
         topic taught over two lectures, and these are two topics. nr-lmn keeps
         its id, so the module's only LMN question, npqb-nr-118 (waddling gait),
         does not move. SCHEDULE is untouched — it carries no chapter ids, and the
         nr-hemi/nr-para split of 2026-08-18 left its wording alone too. */
      ['nr-lmn','Muscle disease and the neuromuscular junction'],
      ['nr-nerve','Peripheral neuropathy and Guillain-Barré'],
      ['nr-cns','CNS infections'],
      ['nr-cranial','Cranial nerves disorders'],['nr-delirium','Delirium and Coma'],
      ['nr-headache','Headache'],['nr-stroke','Cerebrovascular stroke'],
      /* Split 2026-08-23, FORECAST BEFORE WRITING — the third in the module.
         Book Neurology ch.16 is 6,322 body words over SIXTEEN printed pages
         (157-172), the longest book chapter this module has drawn on, and the
         deck adds 1,742. 8,064 source words forecast well past 20 pp against a
         <=13 hard shape; no trim reaches that.
         The seam is REGIONAL and it is the book's own: printed 157-165 is low
         back and sciatica, printed 166-172 is neck and brachialgia — and the
         cervical end-matter (specific tests, `Investigations for neck pain`,
         `Treatment of Neck Pain`) is cervical throughout, so nothing general
         has to be divided.
           nr-backpain  book 157-165 (3,489 w) + the deck's back-pain blocks
           nr-neckpain  book 166-172 (2,833 w) + the deck's neck block
         ⚠ THE DECK INTERLEAVES AND THE BOOK DOES NOT: L11 runs back pain ->
         neck -> low back, so each new chapter draws two non-contiguous deck
         blocks. That is allowed here because nothing is REORDERED WITHIN a
         chapter — the ophthalmology rule rejects a seam that would reorder an
         already-written chapter, and these are written fresh. Recorded so the
         choice is visible rather than silent.
         ⚠ The app's title was right and the book's contents page is wrong: the
         ch.16 opener and all 15 interior running heads print `cervical and low
         back pain`, and the contents page's `Cranial and Low Back pain` is a
         typo. Neither is corrected; the titles below follow the chapter.
         Neither half has a question, so nothing moves. SCHEDULE untouched. */
      ['nr-backpain','Low back pain and sciatica'],
      ['nr-neckpain','Neck pain and brachialgia'],
      /* Split 2026-08-18, AFTER printing 14 pp — past the 13-page hard shape.
         The chapter's own title named three topics, and the seam falls exactly
         between the first and the other two, at hem-6/hem-7: 1,635 words of
         hemiplegia against 3,052 of paraplegia and ataxia. At the measured
         rate (4,687 w printed 14 pp = 335 w/pp) that is ~4.9 and ~9.1 pages.
         Only ONE question sat on both sides — npqb-nr-107, Brown-Sequard —
         and it stays with nr-hemi, where hem-6 teaches it directly; hem-11's
         link to it is replaced by a prose cross-reference so the module-wide
         wrong-chapter check stays clean.
         ⚠️ The writer proposed this seam and a second at hem-13/hem-14. The
         second was rejected: it leaves 589 words, below the §14 floor of 600.
         It also warned half B would still be over, on a ÷240 forecast of 12.6
         — the estimator over-predicted this chapter by 5.5 pages, its worst
         miss in the project, so the forecast was not allowed to decide. */
      ['nr-hemi','Hemiplegia and hemiparesis'],
      ['nr-para','Paraparesis and ataxia']]}
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
