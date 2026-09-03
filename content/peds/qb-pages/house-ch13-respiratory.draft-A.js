/* House — "Dr. HOUSE in pediatric medicine & surgery MCQs" (Semester 8\Pedo\Questions\pediatric .pdf)
 * Part I, chapter 13: RESPIRATORY DISORDERS — printed questions Q1 to Q13.
 *
 * DRAFT A. n:14 to n:28 are drafted separately in house-ch13-respiratory.draft-B.js — not touched
 * here, not opened, not read.
 *
 * Stems, options and keys are taken verbatim from the validated staging record
 * content\peds\qb-pages\house-ch13-respiratory.array.js, variable PEDHD_RESP_STAGED. `stem` and
 * `options` are byte-identical to the staged entry. The book's own wording is preserved exactly and
 * never commented on (curly quotes, apostrophes, en dashes, double spaces, the run-on "large-
 * volumespacer" typo) — per the 2026-09-02 ruling. The one exception is numbers, units, doses and
 * exponents, which are reproduced exactly as the staging record's 600 dpi re-render confirmed them.
 *
 * ⚠️ n:11 DOES NOT EXIST — a confirmed publisher skip in the printed book, measured directly off the
 *   staging array (length 27, no entry with n:11 anywhere in the file). This half runs n:1 through
 *   n:10, then n:12, n:13 — TWELVE entries, not thirteen. No placeholder is written for n:11 and
 *   nothing is renumbered around it.
 *
 * BOILER, PER QUESTION (staging's own field, staging-only): printed on n:1–7 — absent on n:8 through
 *   the end of this half (n:9 and n:10 are also boiler:false in the staging record; n:10 prints its
 *   own non-standard line, "Select the ONE most likely diagnosis from the list below.", instead,
 *   which is why the staging record flags it boiler:false rather than boiler:true — that sentence is
 *   part of the book's own stem and is kept verbatim in `stem` below). `boiler`, `p`, `note` and `fig`
 *   are staging-only fields; none of them appears below and the standard boiler line ("Select one
 *   answer only.") is never added to a stem or mentioned in an explanation.
 *
 * KEYS IN THIS HALF (n:1-10,12,13): C C E D C C E E E E B A -> answer 2 2 4 3 2 2 4 4 4 4 1 0
 *   respectively. This matches the task prompt's cross-check exactly, letter for letter and index for
 *   index. Every key in ch.13 prints as a BARE LETTER ("Answer: E.") with no option name — the
 *   letter-versus-name cross-check is UNAVAILABLE for the whole chapter and was NOT performed
 *   anywhere in this file; this unavailability is stated in every entry rather than left silent.
 *
 * SIX FIGURES, ALL IN THIS HALF: n:1 (p.101, `q-pd-hd-101a`, colour close-up photograph of the
 *   oropharynx/tonsils), n:2 (p.101, `q-pd-hd-101b`, colour laryngoscopic photograph taken during
 *   intubation), n:9 (p.104, `q-pd-hd-104a`, colour otoscopic photograph of the tympanic membrane),
 *   n:10 (p.104, `q-pd-hd-104b`, colour clinical photograph of an infant's bare chest and neck), n:12
 *   (p.105, `q-pd-hd-105a`, black-and-white chest X-ray, frontal view), n:13 (p.105, `q-pd-hd-105b`,
 *   black-and-white chest X-ray, frontal view). None of the six basenames collides with an existing
 *   `image` value anywhere in `app\data\questions.peds.js` (grepped directly: zero hits for
 *   `pedhd-resp-` as an id prefix and zero hits for `q-pd-hd-10` as an image basename prefix before
 *   writing; the highest page number already in use there is 94). Entries are written as if the crop
 *   already exists; no image was rendered, cropped or opened for this pass, and no source PDF was
 *   opened. `imgAlt` states modality and view only, never laterality, and never the finding — the
 *   detailed read is in `explanation`, after the answer.
 *
 * NO STRADDLES IN THIS HALF: every staging note for n:1-10,12,13 reads "no straddle" — each question,
 *   its figure where present, and its answer line are complete on the single page the staging record
 *   names. (n:11's absence means there is no straddle question to carry a note either.)
 *
 * ⚠️ A SHARED OPTION MENU WAS FOUND INSIDE THIS HALF, CONTRARY TO THE TASK PROMPT'S "no shared option
 *   menu falls in half A" — reported as the finding it is. n:12 and n:13 print the IDENTICAL five-
 *   option list in the IDENTICAL order: Pneumonia / Inhaled foreign body / Laryngotracheobronchitis
 *   (croup) / Bronchopulmonary dysplasia (BPD) / Chronic asthma. Per the shared-menu rule, this is a
 *   PAIRING, not a fold — both stay separate entries. The comparative table is written once, in the
 *   lower-numbered `pedhd-resp-12`; `pedhd-resp-13` points at it and names only its own discriminating
 *   clinical token (a 10-day cough with a 2-day fever, tachypnoea and unilateral basal crepitations,
 *   against n:12's sudden-onset choking with a persistent unilateral wheeze and no fever).
 *
 * The bank prints ZERO explanation boxes in this chapter — every answer below is authored and carries
 *   the closing marker.
 *
 * Chapter assignment was made one question at a time, on what the stem is about (per `modules.js`,
 *   confirmed off disk before writing: the pediatrics module carries exactly three chapters with
 *   "resp" in scope — `resp-pneumonia` Pneumonia, `respiratory` Asthma, `resp-bronch` Bronchiolinces —
 *   plus, elsewhere in the module, `infection` The febrile child and meningitis, and `infection-bact`
 *   Bacterial infections and Kawasaki, both used below where they are the closer fit). There is no
 *   peds chapter for croup, cystic fibrosis, pertussis, otitis media or tonsils as diseases in their
 *   own right, so every one of those questions is a straddle by the project's own definition; the
 *   nearest primary is assigned and the secondary is named inside the entry, per rule.
 *   n:1  -> infection-bact  acute sore throat + mild fever + tonsillar photograph — GAS pharyngitis is
 *                           taught by name in this chapter (inf-18); secondary infection (inf-2's
 *                           fever-focus map also names tonsillitis).
 *   n:2  -> infection       unimmunized, rapid-onset high fever, drooling, stridor, intubated —
 *                           epiglottitis is taught IN FULL here (inf-15), which itself states croup
 *                           "belongs to resp-bronch"; secondary respiratory (resp-14's noisy-child
 *                           table) and resp-bronch (the croup comparison the vignette is built to
 *                           exclude).
 *   n:3  -> resp-pneumonia  whooping cough diagnostic test — B. pertussis is named as a pathogen only
 *                           in this chapter's age-pathogen table (resp-3); the test itself is a gap,
 *                           tagged in the entry.
 *   n:4  -> resp-pneumonia  weeks of unresolving cough, failed antibiotics, focal decreased air entry
 *                           — this chapter's own eight causes of recurrent/persistent pneumonia
 *                           (resp-8) name both cystic fibrosis and foreign body, the two live
 *                           possibilities the next step is chosen to distinguish between.
 *   n:5  -> respiratory     asthma, device choice by age — this chapter's own device table (resp-17).
 *   n:6  -> respiratory     asthma, grading a failing attack — this chapter's own severity table and
 *                           silent-chest warning (resp-13, resp-19).
 *   n:7  -> respiratory     asthma diagnosis, interval symptoms as the discriminator — this chapter's
 *                           own wheeze-pattern table and under-6 diagnostic criteria (resp-12, resp-15).
 *   n:8  -> resp-bronch     infant with coryza/cough/fever but a NORMAL respiratory rate and NO
 *                           recession — the direct negative case against this chapter's own
 *                           bronchiolitis definition (resp-20, resp-21); secondary infection (inf-2
 *                           lists URTI in the fever-focus map).
 *   n:9  -> infection       bulging tympanic membrane in a febrile infant — this chapter's own fever-
 *                           focus map instructs examining the tympanic membrane for exactly this
 *                           (inf-2), and Strep. pneumoniae's own disease list includes otitis media
 *                           (inf-14).
 *   n:10 -> resp-bronch     barking cough, stridor, sternal recession, gradual viral-prodrome onset —
 *                           croup as a disease is explicitly assigned to this chapter by the theory
 *                           material's own cross-reference note in `infection` inf-15 ("No cached deck
 *                           teaches croup as a disease — it belongs to resp-bronch"); secondary
 *                           infection (inf-15's epiglottitis-versus-croup table, the direct
 *                           differential this vignette is built against).
 *   n:12 -> respiratory     sudden choking then persistent focal wheeze — this chapter's own formal
 *                           wheeze differential (resp-14) names foreign body aspiration by exactly
 *                           this pattern: abrupt severe cough/stridor during play, focal lung signs.
 *   n:13 -> resp-pneumonia  classic fever/cough/tachypnoea/crepitations pneumonia vignette — this
 *                           chapter's own general and local signs (resp-4, resp-5) directly.
 *
 * Grounding is T_PEDS['resp-pneumonia'] (8 sections, resp-1..resp-8), T_PEDS['respiratory'] (11,
 *   resp-9..resp-19), T_PEDS['resp-bronch'] (3, resp-20..resp-22), T_PEDS['infection'] (15,
 *   inf-1..inf-15, inf-2/inf-14/inf-15 used here) and T_PEDS['infection-bact'] (7, inf-16..inf-22,
 *   inf-18 used here) — all measured off disk before writing, not assumed; section ids run
 *   continuously across sibling chapters. Sections are cited by their own printed Src line. Lecture
 *   caches were not opened directly for this pass — every citation above traces to a theory section
 *   already carrying its own Src line, and no additional lecture file was needed beyond what T_PEDS
 *   already grounds.
 *
 * OUTSIDE-KNOWLEDGE TAGS in this half, each grepped against T_PEDS before being called a gap:
 *   n:1  Diphtheria and herpes simplex stomatitis as DISTRACTORS: "diphtheria" returns one hit,
 *        `cardiac-acq` card-16, which lists it only as a cause of infective myocarditis, not its own
 *        throat picture (grey pseudomembrane, systemic toxicity) — that clinical picture is tagged
 *        outside knowledge in the entry. Herpes simplex stomatitis's own picture (anterior mouth and
 *        gum ulceration, fiery friable gingivitis) IS grounded, in `infection-vesic` inf-38.
 *   n:2  none new — the epiglottitis-versus-croup table (`infection` inf-15) grounds the diagnosis and
 *        every non-foreign-body distractor directly; "laryngomalacia" returns zero hits across
 *        T_PEDS and its typical presentation (chronic stridor from birth, not an acute febrile
 *        illness) is tagged outside knowledge in that entry.
 *   n:3  the diagnostic test itself: "pernasal swab", "nasopharyngeal aspirate" and "pertussis
 *        culture" all return zero hits across T_PEDS in a testing context — `resp-pneumonia` resp-3
 *        names B. pertussis only as a pathogen in an age table, never how it is confirmed. Tagged
 *        outside knowledge in the entry.
 *   n:4  the specific interpretation of decreased air entry with normal percussion as a partial
 *        bronchial obstruction from an occult foreign body: `resp-pneumonia` resp-8 names both foreign
 *        body and cystic fibrosis as causes of recurrent/persistent pneumonia, grounding the
 *        differential itself; the physical-sign reasoning that links one-sided decreased air entry to
 *        a foreign body is common paediatric semiology not spelled out by that name in resp-8 and is
 *        tagged in that entry alone.
 *   n:5, n:6, n:7 none new — grounded directly in `respiratory` resp-17, resp-13/resp-19, resp-12/
 *        resp-15 respectively.
 *   n:8  none new — grounded directly in `resp-bronch` resp-20/resp-21 and `infection` inf-2.
 *   n:9  the specific otoscopic appearance (bulging, injected drum) as acute otitis media, and the
 *        distractor conditions (otitis externa, cholesteatoma, ear canal foreign body): "otitis
 *        externa", "cholesteatoma" and "ear canal" all return zero hits across T_PEDS. Otitis media
 *        itself IS named, in `infection` inf-2 and inf-14; the otoscopic sign and the three distractor
 *        conditions are tagged outside knowledge in that entry.
 *   n:10 none new — grounded directly in `resp-bronch` resp-20/resp-21 (bronchiolitis definition) and
 *        `infection` inf-15 (the epiglottitis-versus-croup table, which the vignette is built to
 *        exclude point by point).
 *   n:12, n:13 none new — grounded directly in `respiratory` resp-14 (the formal wheeze differential,
 *        which names foreign body aspiration by this exact pattern) and `resp-pneumonia` resp-4/resp-5
 *        (pneumonia's general and local signs); bronchopulmonary dysplasia as a distractor is grounded
 *        in `perinatal-rd` prd-3/prd-4 (a neonatal chronic lung disease of prematurity, not an
 *        acute-onset illness in a previously well older child).
 *
 * DIVERGENCES RECORDED, KEYS NOT MOVED: none identified in this half between the printed key and the
 *   course material; every key checked converges with the grounding theory on independent clinical
 *   reasoning.
 *
 * Every key prints as a bare letter; the letter-vs-name cross-check was NOT performed anywhere in
 *   this file, and that unavailability is stated in each entry rather than left silent.
 */


var PEDHD_RESP_DRAFT_A = [

{
  id:'pedhd-resp-1', bank:'house', module:'pediatrics', chapter:'infection-bact',
  image:'q-pd-hd-101a',
  imgAlt:'Colour close-up photograph of the oropharynx and tonsils, taken from the front with the mouth held open.',
  stem:'Liam, a 7-year-old boy, complains to his family doctor of a sore throat and has a mild fever. The appearance of his throat is as shown in the opposite figure. What is the most likely diagnosis?',
  options:['Diphtheria','Glandular fever (Ebstein Barr virus)','Group A Streptococcal tonsillitis','Measles','Herpes simplex stomatitis'],
  answer:2,
  explanation:'**Liam\'s history and the photograph converge on the same organism, and the deck\'s own discriminator against a viral sore throat is exactly what his vignette leaves out.**\n\nHe presents with an acute sore throat and only a mild fever — the deck\'s own fever-focus map lists this by name: **"Tonsillitis — Erythema or exudate on the tonsils"** (`infection` inf-2). The organism taught for that picture is *Streptococcus pyogenes* (Group A beta-haemolytic streptococcus): **"Pharyngitis: sudden sore throat, fever, beefy red tonsils with exudate"** — and the deck names its own discriminator against a viral cause directly: GAS pharyngitis **"usually LACKS cough and coryza — that absence is the clinical discriminator against a viral sore throat"** (`infection-bact` inf-18). Liam\'s stem gives no cough and no runny nose at all, only the sore throat and mild fever, which is exactly the pattern the deck flags as bacterial rather than viral. **Reading the figure, now that the diagnosis is settled:** the close-up shows erythema and an exudate over the tonsils, consistent with the beefy-red, exudative tonsillitis the deck describes.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Diphtheria | Causes a grey, adherent pseudomembrane over the tonsils and pharynx with marked systemic toxicity and, in severe cases, cervical swelling ("bull neck") — a different, more toxic picture than Liam\'s mild fever *(not taken from the course material; T_PEDS names diphtheria only once, `cardiac-acq` card-16, as a cause of infective myocarditis, never its own throat picture)*. Diphtheria is also now rare where routine DPT immunisation is given (`infection-vaccine` inf-51) |\n| Glandular fever (Ebstein Barr virus) | The deck\'s own infectious mononucleosis picture adds **posterior cervical lymphadenopathy, hepatosplenomegaly and atypical lymphocytes** with a longer, 3–5 day malaise prodrome (`infection-rash` inf-24) — none of which is in Liam\'s brief, acute presentation |\n| Measles | The deck\'s measles picture opens with a **2–4 day prodrome of the "three Cs" — cough, coryza, conjunctivitis** — before **Koplik spots** and a rash beginning at the hairline (inf-24); Liam has neither a prodrome nor a rash |\n| Herpes simplex stomatitis | The deck\'s picture is **anterior mouth and gum ulceration with fiery, friable gingivitis, halitosis and drooling** (`infection-vesic` inf-38) — an oral, gingival process, not a tonsillar exudate |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose Group A streptococcal tonsillitis from an acute sore throat with only a mild fever and a tonsillar exudate on inspection, using the absence of cough and coryza as the discriminator against a viral cause.',
  source:'pediatric .pdf p.101 (Part I, ch.13 Q1)'
},

{
  id:'pedhd-resp-2', bank:'house', module:'pediatrics', chapter:'infection',
  image:'q-pd-hd-101b',
  imgAlt:'Colour laryngoscopic photograph of the airway, taken during intubation.',
  stem:'Mohammed, a 5-year-old refugee from Somalia, presents acutely unwell to the Emergency Department. He has a 1-day history of sore throat and a high temperature (40.1°C). Over the last 8 hours he has been having increasing difficulty breathing with quiet stridor. He has never been immunized. He is noted to be unable to swallow his saliva. The opposite figure was taken when he was intubated. What is the most likely diagnosis?',
  options:['Bacterial tracheitis','Croup','Epiglottitis','Foreign body','Laryngomalacia'],
  answer:2,
  explanation:'**Mohammed\'s vignette prints the deck\'s own epiglottitis picture point for point, and his one missing fact — no immunisation — is the single detail that makes it possible.**\n\nThe deck teaches Hib epiglottitis with a rapid, dramatic onset: **"Onset: rapid — high fever, severe sore throat, a muffled \'hot potato\' voice,"** with **"drooling"** and **"stridor"** as the classic signs, and airway security taking priority over every other step (`infection` inf-15). Mohammed\'s 1-day history exploding into stridor and difficulty breathing over 8 hours, his 40.1°C fever, and his inability to swallow his own saliva (drooling) match that picture directly. The deck\'s own comparison table against croup names the discriminators one by one: epiglottitis is **Hib, onset in HOURS with no prodrome, high fever, drooling, tripod posture, do not examine the throat** — against croup\'s **parainfluenza virus, onset over 1–2 days after coryza, absent or low-grade fever, barking cough, no drooling** (inf-15). Mohammed has the epiglottitis column across the board: no preceding coryza, hours not days, high fever, drooling. The deck\'s own reason this can still happen is printed directly: the **Hib conjugate vaccine is 95–100 % effective**, and it is Mohammed\'s status as **"never immunized"** that removes the protection that vaccine would otherwise have given him (inf-15) — refugee children commonly missing routine schedules is the epidemiological setting behind that detail.\n\n**Reading the figure, now that the diagnosis is settled:** the laryngoscopic view during intubation shows the airway at the point the deck\'s own rule was followed — **"secure it, usually by intubation, before any other procedure"** (inf-15).\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Bacterial tracheitis | The deck lists this only as one of several causes to consider for a stridulous child (`infection` inf-2) but does not teach its distinguishing features; its typical course is a biphasic illness starting as viral croup that then worsens with high fever and a toxic appearance, without the drooling and hot-potato voice that specifically mark epiglottitis *(not taken from the course material)* |\n| Croup | The comparison table\'s own discriminators go the other way at every row for Mohammed — no coryza before onset, hours not days, high not low-grade fever, and drooling present, not absent (inf-15) |\n| Foreign body | Typically causes sudden, abrupt choking during eating or play with focal signs, not a 1-day febrile illness with progressive systemic toxicity |\n| Laryngomalacia | A congenital cause of chronic stridor present from early infancy, not an acute febrile illness in a previously well 5-year-old *(not taken from the course material; "laryngomalacia" returns zero hits across T_PEDS)* |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose Hib epiglottitis from a rapid-onset high fever, drooling and stridor in an unimmunized child, using the deck\'s own epiglottitis-versus-croup comparison table to exclude the closest mimic.',
  source:'pediatric .pdf p.101 (Part I, ch.13 Q2)'
},

{
  id:'pedhd-resp-3', bank:'house', module:'pediatrics', chapter:'resp-pneumonia',
  stem:'Amber, a 9-month-old girl, presents with a 4-day history of coughing spasms which are followed by vomiting. Whooping cough (Bordetella pertussis infection) is suspected. Which of the following tests would be most useful in confirming the diagnosis?',
  options:['Blood culture','Chest X-ray','Full blood count and film','Nasopharyngeal aspirate','Pernasal swab'],
  answer:4,
  explanation:'**Amber\'s history is textbook pertussis by name, but confirming it is a testing question the course material does not cover — this answer is supplied from general medical knowledge and tagged as such.**\n\nThe deck names *Bordetella pertussis* as a recognised pathogen in the **2 weeks – 3 months** age band of its own age-pathogen table for pneumonia (`resp-pneumonia` resp-3), and paroxysmal coughing spasms followed by vomiting in an infant is the classic clinical description of whooping cough, exactly as the stem states. *(Not taken from the course material: neither "pernasal swab" nor "nasopharyngeal aspirate" appears anywhere in T_PEDS in a testing context, and resp-3 names the organism only as an entry in an age table, never how it is confirmed.)* A **pernasal (per-nasal) swab** — passed along the floor of the nose to reach the posterior nasopharynx — is the sample of choice for *B. pertussis* culture and PCR because the organism colonises specifically that posterior nasopharyngeal mucosa; an ordinary throat swab or a standard nasopharyngeal aspirate samples a different region and yields the organism far less reliably, which is why the pernasal route is specified rather than a routine aspirate.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Blood culture | *B. pertussis* causes a mucosal respiratory infection, not a bacteraemic illness — it is not expected to grow from blood |\n| Chest X-ray | May show non-specific changes or a "shaggy" right heart border in severe disease, but it does not confirm the organism and is not the test that establishes the diagnosis |\n| Full blood count and film | A marked lymphocytosis is a recognised supportive feature of pertussis, but it is non-specific — many other infections raise the lymphocyte count — so it supports rather than confirms the diagnosis |\n| Nasopharyngeal aspirate | Useful for many respiratory viruses (the deck names antigen detection in nasopharyngeal aspirate for viral pneumonia, `resp-pneumonia` resp-6) but it samples a less favourable site for *B. pertussis* than the pernasal route specifically targets |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Identify the pernasal swab as the sample of choice for confirming Bordetella pertussis, sited on the posterior nasopharyngeal mucosa the organism specifically colonises, against blood culture, chest X-ray, FBC and a standard nasopharyngeal aspirate.',
  source:'pediatric .pdf p.102 (Part I, ch.13 Q3)'
},

{
  id:'pedhd-resp-4', bank:'house', module:'pediatrics', chapter:'resp-pneumonia',
  stem:'Tak, a 3-year-old Asian boy, presents to his family doctor. He has a ‘hacking’ cough that started several weeks ago and has failed to respond to two courses of antibiotics. He is otherwise well and has had no previous chest problems. On examination there is decreased air entry in the right lower zone with normal percussion note. His growth is normal. Which is the most appropriate next step?',
  options:['Admit for intravenous antibiotic therapy','Assess bronchodilator response','Organize for ultrasound-guided drainage of his pleural effusion','Request a chest X-ray','Request a sweat test and evaluation of immunoglobulins and functional antibodies'],
  answer:3,
  explanation:'**Tak\'s cough sits exactly inside the deck\'s own definition of a recurrent or persistent pneumonia, and the appropriate next step is to look, not to guess which of that list applies.**\n\nA cough of several weeks\' duration, unresponsive to two courses of antibiotics, with a focal examination finding (decreased air entry, right lower zone) in an otherwise well, normally growing child is exactly the presentation the deck groups under **"recurrent or persistent pneumonia"** and names **eight causes: gastro-oesophageal reflux disease, pulmonary congestion, cleft palate, tracheo-oesophageal fistula, immotile cilia, cystic fibrosis, sequestrated lobe, foreign body"** — adding that **"recurrence is an anatomical, aspiration or clearance problem until proved otherwise — the organism is rarely the answer"** (`resp-pneumonia` resp-8). With a differential this wide and a normal percussion note arguing against a large effusion, the correct next step is imaging to see what is actually present in that right lower zone before committing to any one branch of the list. *(Not taken from the course material: the specific reasoning that one-sided decreased air entry with normal percussion in a child this age raises an occult foreign body as well as the listed causes is common paediatric semiology, not spelled out by that name in resp-8, though foreign body is itself named in the same list.)*\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Admit for intravenous antibiotic therapy | Two courses of oral antibiotics have already failed and the child is well and growing normally — nothing supports escalating to IV antibiotics before the cause is even identified |\n| Assess bronchodilator response | Jumps straight to an asthma work-up, but the focal, one-sided finding (decreased air entry in one zone rather than the widespread wheeze the deck\'s own asthma chapter describes, `respiratory` resp-13) points away from a diffuse airway process and toward a localised or structural cause |\n| Organize for ultrasound-guided drainage of his pleural effusion | A **normal** percussion note is inconsistent with the stony dullness the deck attributes to pleural fluid rather than consolidation (`infection` inf-2) — there is no established effusion here to drain |\n| Request a sweat test and evaluation of immunoglobulins and functional antibodies | Cystic fibrosis and immunodeficiency are two of the deck\'s eight recurrent-pneumonia causes and remain reasonable considerations, but ordering these specific tests skips the basic step of first seeing the chest, which a normal-growth, single-focus presentation does not yet justify committing to over the other seven causes on the same list |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Recognise a several-week cough with a focal chest sign, unresponsive to antibiotics, as recurrent/persistent pneumonia by the deck\'s own eight-cause list, and choose imaging as the appropriate next step before committing to any single cause on that list.',
  source:'pediatric .pdf p.102 (Part I, ch.13 Q4)'
},

{
  id:'pedhd-resp-5', bank:'house', module:'pediatrics', chapter:'respiratory',
  stem:'Amir, a 4-year-old boy, presents to his family doctor with a history of eczema, rhinitis, chronic nocturnal cough and intermittent wheeze. Asthma is suspected and a bronchodilator is prescribed. How should his bronchodilator be delivered?',
  options:['Dry powder inhaler','Metered dose inhaler (MDI)','Metered dose inhaler with large-volumespacer','Nebulizer','Syrup'],
  answer:2,
  explanation:'**Amir\'s age alone decides this question — the deck\'s own device table maps age directly onto device, and 4 sits inside the specific band a spacer is built for.**\n\nThe deck\'s device-by-age table gives **"< 4 years: MDI + spacer with FACE MASK (preferred), Nebulizer with face mask (alternate)"** and **"4–6 years: MDI + spacer with MOUTHPIECE (preferred), Nebulizer (alternate)"** (`respiratory` resp-17) — Amir is exactly 4, so he falls at the boundary the deck itself flags as inconsistently drawn between two of its own sources (**"the spacer thresholds as face mask <3 y and mouthpiece ≥3 y, against <4 y and 4–6 y. Both printed, neither corrected"**), but in every version of that table a spacer, not a bare MDI or a nebulizer, is the preferred device at his age. The deck\'s own reasoning for why: **"MDI + spacer: ALL ages — no cooperation or effort needed; needs only tidal breathing"** (resp-17) — a young child cannot reliably coordinate the deep, held breath a bare MDI needs, and a spacer removes that requirement entirely.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Dry powder inhaler | The deck\'s own table restricts this to **"≥ 6 years — needs effort"** and states it **"needs high flow"** (resp-17) — Amir is too young to generate the inspiratory flow a DPI requires |\n| Metered dose inhaler (MDI) | The deck names a bare MDI as suiting **"Adolescents — needs cooperation"** and requiring **"deep slow inspiration then breath hold"** (resp-17) — a coordination step a 4-year-old cannot be relied on to perform |\n| Nebulizer | Listed only as the **alternate**, not the preferred, device at Amir\'s age (resp-17); the deck also notes it is **"least efficient"** with the **"largest oropharyngeal deposition"** of all the listed devices |\n| Syrup | The deck\'s own case for the inhaled route over any oral route is explicit: **"site specific — high concentration delivered directly to the airway,"** **"permits a very small dose,"** and **"systemic side effects reduced to a minimum"** (resp-17) — an oral bronchodilator syrup loses every one of those advantages |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Select MDI with a large-volume spacer as the age-appropriate bronchodilator device for a 4-year-old, using the deck\'s own device-by-age table and its stated reasons why the inhaled, spacer-assisted route wins over an oral syrup, a bare MDI, a DPI or a nebulizer at this age.',
  source:'pediatric .pdf p.102 (Part I, ch.13 Q5)'
},

{
  id:'pedhd-resp-6', bank:'house', module:'pediatrics', chapter:'respiratory',
  stem:'Sarah, a 10-year-old girl, has frequent attacks of asthma. She attends the Emergency Department with increasing difficulty in breathing over the last 12 hours. Initial observation shows that she is anxious, sitting upright, has a marked tracheal tug and is unable to complete a sentence. Which of the following statements is most likely to be correct?',
  options:['Sarah\'s asthma attack is of moderate severity','Sarah\'s condition is likely to improve if she is encouraged to lie flat','Sarah\'s oxygen saturation should be measured','Sarah should be taken promptly to the X-ray department for a chest X-ray','The lack of wheeze should make you consider a panic attack'],
  answer:2,
  explanation:'**Sarah\'s two signs — tracheal tug and being unable to complete a sentence — already place her in the deck\'s own SEVERE column, and every subsequent step follows from grading her correctly first.**\n\nThe deck\'s moderate-versus-severe table turns on speech and accessory muscle use: **moderate is "able to talk"** with **"some intercostal recession,"** against severe, **"too breathless to talk"** with **"use of accessory neck muscles"** (`respiratory` resp-19) — Sarah is unable to complete a sentence (too breathless to talk) and has a marked tracheal tug (accessory neck muscle use), both severe-column signs. Having graded her as severe, the deck\'s own management for that grade requires objective monitoring: **"Oxygen if SpO₂ < 92 %, targeting 94–98 %"** and admission is indicated where **"SpO₂ < 92 % in air"** (resp-19) — none of which can be acted on without measuring it first, which is exactly what the correct option states.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Sarah\'s asthma attack is of moderate severity | Contradicted directly by the deck\'s own table — being unable to talk and using accessory neck muscles are the SEVERE row, not the moderate one (resp-19) |\n| Sarah\'s condition is likely to improve if she is encouraged to lie flat | Sarah is already **sitting upright**, which is the position a child in respiratory distress adopts to maximise accessory muscle use and diaphragmatic excursion; lying her flat would remove that mechanical advantage and is not a step the deck\'s management list contains anywhere |\n| Sarah should be taken promptly to the X-ray department for a chest X-ray | The deck reserves chest X-ray in an acute attack for a child **not responding**, specifically **"to exclude pneumothorax or infection"** (resp-19) — not as the initial step in a severe attack still being assessed and treated at the bedside |\n| The lack of wheeze should make you consider a panic attack | Nothing in the stem states wheeze is absent; more importantly, the deck\'s own warning is that a **silent chest — "marked decrease of breath sounds with absent wheezes"** — is a sign the attack is **failing**, not a cue to suspect panic: **"A silent chest is not improvement. Wheeze needs airflow to exist"** (`respiratory` resp-13) |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Grade an asthma attack as severe from an inability to complete a sentence and accessory neck muscle use, using the deck\'s own moderate-versus-severe table, and identify pulse oximetry as the immediate next step that grade requires.',
  source:'pediatric .pdf p.103 (Part I, ch.13 Q6)'
},

{
  id:'pedhd-resp-7', bank:'house', module:'pediatrics', chapter:'respiratory',
  stem:'Zak, a 3-year-old boy, is seen by his general practitioner because of recurrent wheezing associated with upper respiratory tract infections. Which of the following features most supports the diagnosis of asthma?',
  options:['Daytime cough','Finger clubbing','Peak-flow variability diary','Persistent moist cough','The presence of symptoms between coughs and colds'],
  answer:4,
  explanation:'**Zak\'s question turns on one line the deck draws twice, in two different sections, using the same idea both times: whether symptoms exist BETWEEN the triggering colds.**\n\nThe deck\'s own three-pattern table for wheezing under 3 years separates viral episodic wheeze, which has **"NONE"** for interval symptoms, from multiple trigger wheeze, which has interval symptoms **"Present"** and **"May continue to asthma"** — and states directly that **"the whole table turns on one question — are there symptoms BETWEEN the colds? No interval symptoms means no preventer"** (`respiratory` resp-12). The deck\'s own formal under-6 diagnostic criteria say the same thing from the diagnosis side: one of the three required elements is **"at least TWO reported acute wheezing episodes... OR one episode PLUS asthma-like symptoms between episodes (dry cough, cough in sleep, after laughing, crying or activity)"** (resp-15). Zak has recurrent wheeze specifically tied to colds; the single feature that would tip him from ordinary viral episodic wheeze toward asthma is exactly the presence of symptoms in the gaps between those infections.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Daytime cough | Asthma cough is more classically described as worse at night or on waking (resp-13) rather than specifically daytime, and daytime cough alone is too non-specific to point toward asthma over a simple recurrent viral illness |\n| Finger clubbing | The deck states plainly this is a RED FLAG **against** asthma, pointing instead toward a chronic infective process such as cystic fibrosis, immunodeficiency or PCD (resp-14) |\n| Peak-flow variability diary | A genuinely useful confirmatory tool, but the deck restricts it to **"Over 6 years"** because reliable technique is not achievable below that age (resp-15) — Zak is 3 |\n| Persistent moist cough | The deck lists this among the features that make asthma **LESS** likely, alongside finger clubbing and poor growth (resp-14) — a wet, productive cough points toward an infective or suppurative process, not asthma |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Identify interval symptoms between viral colds — rather than daytime cough, clubbing, a moist cough or a peak-flow diary not usable under 6 — as the feature that most supports asthma over simple viral episodic wheeze in a young child, using the deck\'s own wheeze-pattern table and diagnostic criteria.',
  source:'pediatric .pdf p.103 (Part I, ch.13 Q7)'
},

{
  id:'pedhd-resp-8', bank:'house', module:'pediatrics', chapter:'resp-bronch',
  stem:'Norah, an 18-month-old girl, presents to her family doctor with coryza, cough and a mild fever for 3 days. She feeds poorly and is unsettled at night. Her respiratory rate is normal and there is no chest recession.\nWhat is the most likely diagnosis?',
  options:['Bronchiolitis','Frontal sinusitis','Pneumonia (lower respiratory tract infection)','Tonsillitis','Upper respiratory tract infection'],
  answer:4,
  explanation:'**Norah is the negative case against the deck\'s own bronchiolitis definition — she has the trigger illness of the season but none of the lower-airway signs that definition insists on.**\n\nThe deck defines bronchiolitis, on either printed version, by lower respiratory tract findings: **"a seasonal viral illness in infants under 12 MONTHS, with nasal discharge, cough, tachypnoea, retractions and BILATERAL CRACKLES"** (European) or a disorder **"characterised by WHEEZING"** (American Academy of Pediatrics) (`resp-bronch` resp-20), and the expected course is **"coryza, then signs of lower respiratory infection — respiratory distress, low SpO₂, rales"** (resp-21). Norah has the coryza, cough and mild fever, but her respiratory rate is explicitly **normal** and there is explicitly **no chest recession** — she never develops the tachypnoea, retractions or lower-airway signs either definition requires, so bronchiolitis is excluded by the deck\'s own criteria rather than confirmed by them. What she does have — fever, cough and coryza for a few days, with poor feeding and night-time unsettling but no lower-respiratory findings — is a straightforward upper respiratory tract infection, which the deck\'s own fever-focus map lists first among causes of fever in a child and specifically flags as **"very common — may be coincidental with another, more serious illness"** (`infection` inf-2), reinforcing that URTI symptoms alone, without a lower-tract sign, do not by themselves suggest anything more.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Bronchiolitis | Excluded directly by the absent tachypnoea and absent recession that both printed definitions require (resp-20, resp-21) |\n| Frontal sinusitis | The frontal sinuses are not yet pneumatised at 18 months and this diagnosis is not applicable at Norah\'s age |\n| Pneumonia (lower respiratory tract infection) | The deck\'s own strongest predictors are **"tachypnoea and chest indrawing... the two most important signs for diagnosis"** (`resp-pneumonia` resp-4) — both explicitly absent in Norah |\n| Tonsillitis | Would need examination findings of tonsillar erythema or exudate (`infection` inf-2); none are described, and the presentation here is a coryzal illness, not a sore-throat-predominant one |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Exclude bronchiolitis in a coryzal infant using the deck\'s own definitional requirement for lower-airway signs (tachypnoea, recession, crackles or wheeze), and diagnose upper respiratory tract infection where a normal respiratory rate and no recession are explicitly stated.',
  source:'pediatric .pdf p.103 (Part I, ch.13 Q8)'
},

{
  id:'pedhd-resp-9', bank:'house', module:'pediatrics', chapter:'infection',
  image:'q-pd-hd-104a',
  imgAlt:'Colour otoscopic photograph of the tympanic membrane, viewed through an otoscope.',
  stem:'Fiona, a 10-month-old infant, has been unsettled and febrile with a runny nose for 2 days. Her family doctor examines her ear canal and the tympanic membrane appears as in the opposite figure. What is the most likely diagnosis?',
  options:['Acute otitis externa','Cholesteatoma','Chronic otitis externa','Foreign body in the external ear canal','Otitis media with effusion'],
  answer:4,
  explanation:'**Fiona\'s history is exactly the one the deck tells the examiner to go looking for a middle-ear cause in, and the otoscope is where that instruction sends the exam.**\n\nThe deck\'s own fever-focus map, worked through in a febrile child with no obvious source, states plainly: **"Otitis media — Always examine the tympanic membranes in a febrile child"** (`infection` inf-2). Fiona is unsettled and febrile with a coryzal illness — precisely the setting in which the deck instructs looking at the drum specifically because otitis media is common in this age group and may otherwise be missed. The organism most often responsible, *Streptococcus pneumoniae*, is named in the deck as causing otitis media alongside pneumonia, meningitis and bacteraemia (inf-14). *(Not taken from the course material: the specific otoscopic appearance of acute otitis media — a bulging, erythematous, injected drum with loss of the normal light reflex — is common paediatric semiology, not spelled out visually in T_PEDS, and is supplied here for reading the figure.)*\n\n**Reading the figure, now that the diagnosis is settled:** the tympanic membrane is red, injected and bulging outward, with the normal cone-shaped light reflex lost — the appearance of acute middle-ear inflammation with fluid under pressure behind the drum, consistent with acute otitis media in a febrile, coryzal infant.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit | \n|---|---|\n| Acute otitis externa | An infection of the ear canal itself rather than the middle ear, typically associated with a discharging, painful canal on manipulation of the pinna or tragus rather than a febrile coryzal illness *(not taken from the course material)* |\n| Cholesteatoma | A chronic, slowly progressive accumulation of squamous debris behind the drum, usually presenting with a persistent, often foul-smelling discharge over weeks to months, not an acute 2-day febrile coryzal illness *(not taken from the course material)* |\n| Chronic otitis externa | A long-standing canal problem, not an acute presentation, and mismatched to Fiona\'s brief 2-day history *(not taken from the course material)* |\n| Foreign body in the external ear canal | Would be an incidental finding in the canal itself, unrelated to a fever and coryza, and would not be expected to alter the appearance of the drum this way *(not taken from the course material)* |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose acute otitis media from a febrile, coryzal infant\'s otoscopic examination, using the deck\'s own instruction to always examine the tympanic membranes in a febrile child, against ear-canal and chronic middle-ear conditions that do not fit the acute timeline.',
  source:'pediatric .pdf p.104 (Part I, ch.13 Q9)'
},

{
  id:'pedhd-resp-10', bank:'house', module:'pediatrics', chapter:'resp-bronch',
  image:'q-pd-hd-104b',
  imgAlt:'Colour clinical photograph of an infant\'s bare chest and neck, taken from the front.',
  stem:'Jake is a 10-month-old boy from the UK who presents to the Emergency Department with a 2-day history of fever and runny nose. He has been otherwise well. During the night he gradually developed a barking cough in association with a loud noise on inspiration. On examination he has a temperature of 38°C and noisy inspiration accompanied by marked sternal recession (as shown in the opposite figure). His capillary refill time is normal.\nSelect the ONE most likely diagnosis from the list below.',
  options:['Acute epiglottitis','Anaphylaxis','Bronchiolitis','Laryngeal foreign body','Laryngotracheobronchitis (croup)'],
  answer:4,
  explanation:'**Jake\'s timeline and his sounds both point the same way, and the theory material itself files croup, as a disease, under this exact chapter rather than under infection — which is why the primary assignment below follows that instruction directly.**\n\nThe deck\'s own note on where croup belongs is explicit: **"No cached deck teaches croup as a disease — it belongs to `resp-bronch`"** (`infection` inf-15). Working through the deck\'s epiglottitis-versus-croup table with Jake\'s features: onset **"over 1–2 days after coryza"** (Jake had 2 days of fever and runny nose before the barking cough began overnight, gradually) — croup\'s column; fever **"absent or low grade"** (Jake\'s 38°C is low-grade, not the high fever of epiglottitis) — croup\'s column; cough **"barking"** (Jake\'s is described exactly that way) — croup\'s column; **"drooling: No"** and no mention of it in Jake\'s stem — croup\'s column (inf-15). The loud inspiratory noise is inspiratory stridor, and the marked sternal recession reflects upper-airway obstruction from laryngeal and subglottic inflammation, both classic for laryngotracheobronchitis. Jake\'s normal capillary refill time argues against the systemic toxicity of a more serious bacterial airway process.\n\n**Reading the figure, now that the diagnosis is settled:** the bare chest and neck show the chest wall drawn inward at the lower sternum during inspiration, consistent with the marked work of breathing the deck\'s recession sign describes.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Acute epiglottitis | The deck\'s own table runs the opposite way on every row for Jake: onset in **hours** with **no** coryza prodrome, **high** fever, **drooling** present, muffled voice (inf-15) — none of which Jake shows |\n| Anaphylaxis | Would be expected to follow an identifiable trigger (food, drug, sting) with urticaria, angioedema or cardiovascular compromise, none of which is described; Jake\'s presentation is a gradual, febrile, coryza-preceded illness, not a sudden allergic reaction |\n| Bronchiolitis | The deck\'s bronchiolitis definitions centre on the **lower** airway — tachypnoea, retractions and crackles or wheeze from small-airway obstruction (`resp-bronch` resp-20) — not the barking cough and inspiratory stridor of upper-airway obstruction Jake has |\n| Laryngeal foreign body | Typically presents with a sudden, abrupt onset during eating or play, not a gradual overnight development after two days of a preceding coryzal illness |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose croup (laryngotracheobronchitis) from a barking cough and inspiratory stridor developing gradually after a coryzal prodrome with low-grade fever, using the deck\'s own epiglottitis-versus-croup table row by row to exclude the closest mimic.',
  source:'pediatric .pdf p.104 (Part I, ch.13 Q10)'
},

{
  id:'pedhd-resp-12', bank:'house', module:'pediatrics', chapter:'respiratory',
  image:'q-pd-hd-105a',
  imgAlt:'Black-and-white chest X-ray, frontal (PA/AP) view.',
  stem:'A 10-year-old African boy woke up four nights ago with a sudden onset of coughing and choking. Since then he has been noted to be intermittently wheezy. He has wheeze on auscultation of his right chest only. His chest X-ray is shown in the opposite figure. Which of the following is the most likely diagnosis of that patient?',
  options:['Pneumonia','Inhaled foreign body','Laryngotracheobronchitis (croup)','Bronchopulmonary dysplasia (BPD)','Chronic asthma'],
  answer:1,
  explanation:'**This entry sets out the comparative table `pedhd-resp-13` points back to — the two questions print the identical five-option list in the identical order, so the reasoning against all four distractors is written once here.**\n\nThe deck\'s own formal differential of the wheezy child names foreign body aspiration with a description that matches this vignette almost word for word: **"Abrupt, severe cough and/or stridor during eating or play; recurrent chest infection and cough; focal lung signs"** (`respiratory` resp-14). The boy\'s history is a sudden onset of coughing and choking — the abrupt aspiration event itself — followed by wheeze confined to one side only (**focal lung signs**), persisting over four nights. A radio-opaque object would show directly on X-ray, but many inhaled foreign bodies (food, plastic) are radiolucent and instead produce an indirect sign: air trapping distal to a partial bronchial obstruction, seen as hyperinflation or asymmetry between the two lung fields, which is what the chest X-ray is being used to demonstrate here.\n\n**Reading the figure, now that the diagnosis is settled:** the film shows the two lung fields, one relatively over-inflated and hyperlucent compared with the other, consistent with air trapping distal to a partially obstructing foreign body acting as a one-way (ball) valve.\n\n**Why the other four are each wrong for a stated reason, and how each shared-menu sibling is told apart:**\n\n| Option | Why it does not fit |\n|---|---|\n| Pneumonia | The deck\'s strongest predictors are fever plus more than one sign of respiratory distress (`resp-pneumonia` resp-4); this boy is afebrile in the stem and the finding is a persistent focal WHEEZE, not the crackles/dullness of consolidation — this is the exact feature `pedhd-resp-13` uses instead, where fever, a 10-day cough and basal crepitations point the other way |\n| Laryngotracheobronchitis (croup) | Causes a barking cough with inspiratory stridor from a gradual, coryza-preceded viral illness (grounded in `pedhd-resp-10`), not a sudden choking event with a persistent unilateral wheeze |\n| Bronchopulmonary dysplasia (BPD) | A chronic lung disease of premature infants (`perinatal-rd` prd-3/prd-4) — this is a previously well 10-year-old with no history of prematurity or neonatal lung disease |\n| Chronic asthma | Causes bilateral, widespread wheeze that varies with triggers over months to years (`respiratory` resp-13), not a wheeze confined to one side that began abruptly four nights ago |\n\n**The shared menu:** `pedhd-resp-12` and `pedhd-resp-13` print this identical five-option list in this identical order — a pairing, not a fold. `pedhd-resp-13` names only its own discriminating token against this table.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose an inhaled foreign body from a sudden choking event followed by a persistent unilateral wheeze and focal lung signs, reading a chest X-ray for asymmetric air trapping, and set out the shared five-option table `pedhd-resp-13` points back to.',
  source:'pediatric .pdf p.105 (Part I, ch.13 Q12)'
},

{
  id:'pedhd-resp-13', bank:'house', module:'pediatrics', chapter:'resp-pneumonia',
  image:'q-pd-hd-105b',
  imgAlt:'Black-and-white chest X-ray, frontal (PA/AP) view.',
  stem:'A 3-year-old Asian girl has been coughing for 10 days, with fever and lethargy for 2 days. On examination, she has a respiratory rate of 45 breaths/min and crepitations with decreased air entry on her left lung base. Her chest X-ray is shown in the opposite figure. Which of the following is the most likely diagnosis of that patient?',
  options:['Pneumonia','Inhaled foreign body','Laryngotracheobronchitis (croup)','Bronchopulmonary dysplasia (BPD)','Chronic asthma'],
  answer:0,
  explanation:'**This is the same five-option menu as `pedhd-resp-12`, printed in the same order — the comparative reasoning against the other four options is set out there; the discriminating token that picks this girl\'s key out of the shared list is her fever, her tachypnoea and her basal crepitations.**\n\nThe deck\'s own strongest predictors of pneumonia are **"fever and cyanosis — PLUS more than one sign of respiratory distress"**, with **tachypnoea and chest indrawing named as "the two most important signs for diagnosis"** (`resp-pneumonia` resp-4). This girl has a 10-day cough with a 2-day history of fever and lethargy, a respiratory rate of 45 breaths/min — above the WHO threshold of **"12 months – 5 years: > 40/min"** the deck prints for tachypnoea (resp-4) — and crepitations with decreased air entry localised to her left base, matching the deck\'s congestion-stage local sign of **"decreased air entry... fine crackling rales"** (resp-5). Unlike `pedhd-resp-12`\'s abrupt, choking-triggered, afebrile presentation with an isolated wheeze, this is a gradually evolving, febrile illness with the crackles and reduced air entry of consolidation rather than the wheeze of a partial airway obstruction.\n\n**Reading the figure, now that the diagnosis is settled:** the film shows an area of increased density (consolidation) in the left lower zone, consistent with the localised crepitations and decreased air entry found on examination at that base.\n\n**Why the other four are each wrong, using the reasoning set out in `pedhd-resp-12`:** inhaled foreign body classically begins with an abrupt choking event and produces air trapping rather than consolidation, not a gradually worsening 10-day febrile cough; croup causes a barking cough with stridor from upper-airway obstruction, not basal crepitations; bronchopulmonary dysplasia is a chronic disease of premature infants, not an acute illness in a previously well 3-year-old; chronic asthma causes bilateral wheeze that varies with triggers, not a fixed, unilateral, febrile consolidation.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose pneumonia from a febrile, tachypnoeic child with basal crepitations and decreased air entry, reading a chest X-ray for a consolidated zone, using fever and tachypnoea as the discriminating features against the inhaled-foreign-body key on the same shared menu as `pedhd-resp-12`.',
  source:'pediatric .pdf p.105 (Part I, ch.13 Q13)'
}

];
