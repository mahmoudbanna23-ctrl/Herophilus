/* Section 5 "Respiratory disorders", PDF pp.451-605. Part B: answered pages 511-541, every ODD
   page. n is SECTION-GLOBAL, continuing from part A. Part A was NOT on disk when this file was
   started, so n:18 was taken on the parent's explicit assignment; part A appeared on disk before
   this file finished and was read -- its last entry is n:17, p:509, confirming n:18 here is
   correct.
   OCR was NOT opened during this pass. Unanswered twin (the even page immediately before each
   answered page) read for every entry as a second reading of stem/options.
   Page-by-page walk (pr = printed number, p = PDF page of the ANSWERED page):
   pr:18 p:511
   pr:19 p:513
   pr:20 p:515
   pr:21 p:517
   pr:22 p:519
   pr:23 p:521
   pr:24 p:523
   pr:25 p:525
   pr:26 p:527
   pr:27 p:529
   pr:28 p:531
   pr:29 p:533
   pr:30 p:535
   pr:31 p:537
   pr:32 p:539
   pr:33 p:541
*/

{ n:18, pr:18, p:511, key:1,
  stem:'Chardonnay is a 6-year-old Caucasian girl who has asthma. Her mother smokes cigarettes, and there is poor compliance with her preventative steroid therapy. She presents with a 2-day history of cough, runny nose, mild fever, and breathlessness. Her mother cannot recall her previous peak-flow result. On examination, she has a respiratory rate of 30 breaths/min, mild intercostal recession, and oxygen saturation of 96% in room air.\nWhich of the following is the most appropriate next step in the management of this patient?',
  opts:['Oral corticosteroid','Inhaled salbutamol via metered-dose inhaler and spacer','Oral antipyretic/analgesic','Continuous positive airway pressure (CPAP)'],
  expl:'Inhaled salbutamol via spacer is the first-line treatment for mild asthma exacerbation. The child is stable with good oxygenation, so oral steroids or intensive measures are not immediately needed.',
  note:'p.511 answered, option B (index 1) highlighted yellow, boxed explanation present. Twin p.510 unanswered, identical stem/options, confirms transcription. CROSS-BANK MATCH recorded, not folded: house-ch13-respiratory.array.js n:19 (p.107) is the same scenario ("Chardonnay", 6-year-old, asthma, mother smokes) with paraphrased wording and the same key (B); House prints a 5th option "Endotracheal intubation and ventilation" this page does not show a 5th option for on p.511/510 -- only 4 options seen here.' }

{ n:19, pr:19, p:513, key:0,
  stem:'Jake, a 7-month-old infant, presents with a 2-day history of fever and runny nose. During the night, he developed a harsh cough and noisy breathing on inspiration. On examination, he has moderate inspiratory stridor and mild intercostal and subcostal recession. His respiratory rate is 30 breaths/min, temperature is 37.8°C, capillary refill time is normal, and oxygen saturation is 96% in air. Which of the following is the most appropriate next step in the management of this patient?',
  opts:['Oral corticosteroid','Inhaled salbutamol via metered-dose inhaler and spacer','Oral antipyretic/analgesic','Continuous positive airway pressure (CPAP)','Endotracheal intubation and ventilation'],
  expl:'This is moderate croup, indicated by stridor at rest with mild recession. Oral corticosteroids (e.g., dexamethasone) are the treatment of choice to reduce airway inflammation.',
  note:'p.513 answered, option A (index 0) highlighted yellow, boxed explanation present. Twin p.512 unanswered, identical stem/options, confirms transcription. Shares an option ladder with n:18 (p.511) plus an added 5th option E -- pairing recorded, discriminating token: n:18 is asthma/mild recession/no stridor, n:19 is croup/inspiratory stridor at rest. Not folded. CROSS-BANK MATCH recorded, not folded: house-ch13-respiratory.array.js n:20 (p.107-108, straddles) is the same scenario ("Jake", 7-month-old, croup) with paraphrased wording and the same key (A/index 0).' }

{ n:20, pr:20, p:515, key:1,
  stem:'A 5-year-old boy is under outpatient review for asthma. His chest X-ray shows hyperinflation, but his symptoms remain unresponsive despite a stepwise increase in asthma therapy. Further questioning reveals delayed passage of meconium at birth, and finger clubbing is noted on examination.\nWhat is the most appropriate next step in the management of this child?',
  opts:['Arrange a CT chest scan','Organize a sweat test','Test lung function using spirometry','Take a per-nasal swab','Send sputum cultures'],
  expl:'Atypical asthma symptoms, clubbing, and delayed meconium suggest cystic fibrosis. A sweat test is the diagnostic gold standard to confirm CF.',
  note:'p.515 answered, option B (index 1) highlighted yellow, boxed explanation present. Twin p.514 unanswered, identical stem/options, confirms transcription. CROSS-BANK MATCH recorded, not folded: house-ch13-respiratory.array.js n:21 (p.108) is the same scenario (5-year-old boy, asthma unresponsive, delayed meconium, clubbing -> CF) with paraphrased wording and the same key (B/index 1).' }

{ n:21, pr:21, p:517, key:4,
  stem:'A 4-year-old girl is under outpatient review for asthma. Her regular treatment includes a preventative steroid inhaler at 200 micrograms twice daily and a reliever inhaler used approximately once every two weeks. However, over the last 3 months, she has used her reliever every other day, and her nocturnal coughing has increased, disturbing her sleep.\nWhat is the appropriate next step in care for this child?',
  opts:['Continue on the same dose of steroid inhaler','Increase the steroid inhaler dose to 400 micrograms BD','Start a course of oral steroids','Start oral theophylline','Add a long-acting beta agonist'],
  expl:'Step-up therapy in asthma with poorly controlled symptoms despite low-dose ICS includes adding a long-acting beta agonist (LABA). Increased reliever use and night-time symptoms indicate poor control.',
  note:'p.517 answered, option E (index 4) highlighted yellow, boxed explanation present. Twin p.516 unanswered, identical stem/options, confirms transcription. CROSS-BANK MATCH recorded, not folded: house-ch13-respiratory.array.js n:22 (p.108) is the same scenario (4-year-old girl, asthma, 200mcg BD steroid inhaler, reliever every other day) with paraphrased wording and the same key (E/index 4).' }

{ n:22, pr:22, p:519, key:0,
  stem:'A 3-year-old girl is admitted with a 3-day history of coryzal symptoms followed by acute onset of breathing difficulty. She is otherwise fit and well, apart from mild eczema, and her parents are non-smokers. She is thriving. On examination, she has widespread wheeze without crepitations.\nWhat is the most likely diagnosis?',
  opts:['Viral wheeze','Asthma','Heart failure','Bronchiolitis','Recurrent aspiration'],
  expl:'In children under 5, wheeze triggered by viral infections without interval symptoms is termed viral wheeze. It is common and self-limited in otherwise healthy children.',
  note:'p.519 answered, option A (index 0) highlighted yellow, boxed explanation present. Twin p.518 unanswered, identical stem/options, confirms transcription. CROSS-BANK MATCH recorded, not folded: house-ch13-respiratory.array.js n:23 (p.108-109, straddles) is the same scenario (3-year-old girl, coryzal then acute breathing difficulty, eczema, non-smoking parents, widespread wheeze no crepitations) with paraphrased wording and the same key (A/index 0).' }

{ n:23, pr:23, p:521, key:0,
  stem:'A 4-year-old girl is admitted with fever, difficulty breathing, and cough. A diagnosis of left lower lobe pneumonia is made and intravenous antibiotics are commenced. What is the most likely pathogen?',
  opts:['Streptococcus pneumoniae','Haemophilus influenzae','Mycoplasma pneumoniae','Chlamydia trachomatis','E. coli'],
  expl:'Strep pneumoniae is the most common cause of community-acquired pneumonia in this age group. Fever, cough, and lobar consolidation are typical features.',
  note:'p.521 answered, option A (index 0) highlighted yellow, boxed explanation present. Twin p.520 unanswered, identical stem/options, confirms transcription. Validator flags opt index 4 ("E. coli") as carrying "a printed letter prefix" -- false positive, the page genuinely prints "E. coli" (the bacterium abbreviation) as the sole content of option E, coinciding visually with the option letter; verified against the twin p.520, same text. Kept verbatim, not stripped to "coli". CROSS-BANK MATCH recorded, not folded: house-ch13-respiratory.array.js n:24 (p.109) is the same scenario (4-year-old girl, fever/cough, left lower lobe pneumonia, IV antibiotics) with paraphrased wording, the identical five-option list including "E. coli", and the same key (A/index 0).' }

{ n:24, pr:24, p:523, key:1,
  stem:'A 24-month-old girl with trisomy 21 attends for her developmental review. Her mother is concerned about her hearing and explains that she has had two recent right ear infections within the last 5 months. An audiogram is carried out, which confirms a conductive hearing loss of the right ear. What is the most likely explanation for this finding?',
  opts:['Congenital infection','Otitis media with effusion','Acquired meningitis','Antibiotic toxicity','Foreign body'],
  expl:'Children with Down syndrome are prone to OME due to eustachian tube dysfunction. This leads to conductive hearing loss, especially following recurrent ear infections.',
  note:'p.523 answered, option B (index 1) highlighted yellow, boxed explanation present. Twin p.522 unanswered, identical stem/options, confirms transcription.' }

{ n:25, pr:25, p:525, key:3,
  stem:"A 6-year-old boy with known asthma has been brought in by ambulance to the local emergency department with an acute severe exacerbation. He has already received salbutamol and ipratropium nebulizers together with an intravenous steroid. Upon reassessment, he appears exhausted with varying responsiveness. Fifteen liters of oxygen are needed to maintain his saturations, and auscultation of his chest reveals minimal breath sounds. What is the next most important step in this child's care?",
  opts:['Reassess 30 minutes later','Give intravenous antibiotics','Request a chest X-ray','Give intravenous salbutamol','Admit to ward'],
  expl:'This is a life-threatening asthma exacerbation with poor air entry and fatigue. IV salbutamol is the next escalation step after nebulizers and steroids.',
  note:'p.525 answered, option D (index 3) highlighted yellow, boxed explanation present. Twin p.524 unanswered, identical stem/options, confirms transcription. "Fifteen liters" transcribed exactly as spelled out on the page (not "15 L").' }

{ n:26, pr:26, p:527, key:4,
  stem:'Bronchiolitis is one of the most common respiratory conditions affecting infants. Which of the following is not a clinical feature of bronchiolitis?',
  opts:['Tachypnoea','Apnoea','Wheeze','Fine crackles','Paroxysmal cough'],
  expl:'Bronchiolitis causes tachypnea, wheeze, and fine crackles but does not present with paroxysmal cough, which is more characteristic of pertussis.',
  note:'p.527 answered, option E (index 4) highlighted yellow, boxed explanation present. Twin p.526 unanswered, identical stem/options, confirms transcription. Note: stem spells "Tachypnoea/Apnoea" but expl box spells "tachypnea" -- both transcribed exactly as printed on their respective source, not normalised to match.' }

{ n:27, pr:27, p:529, key:0,
  stem:'A 3-year-old girl of Irish parents presents with a history of diarrhea since birth. The stool is pale and offensively smelling. She was born on the 25th centile but is now on the 0.4th centile for weight and height. She has been admitted on four occasions with pneumonia and has a chronic cough. Which investigation is most likely to yield her diagnosis?',
  opts:['Sweat test','Coeliac antibodies','Stool reducing substances','Stool for microscopy and culture','Endoscopy and colonoscopy'],
  expl:'Chronic diarrhea, recurrent pneumonia, and failure to thrive in a Caucasian child raise strong suspicion for cystic fibrosis. The sweat test is diagnostic.',
  note:'p.529 answered, option A (index 0) highlighted yellow, boxed explanation present. Twin p.528 unanswered, identical stem/options, confirms transcription. Note this page is genuinely tagged/printed answered -- explicitly checked per brief 3a defect #4 (a page tagged answered with no highlight/box); this page DOES show both, so it is a real answered page, not that defect.' }

{ n:28, pr:28, p:531, key:4,
  stem:'Reda, a 19-month-old boy, presents with shortness of breath and difficulty breathing for the last 3 days. His breathing is now interfering with feeding. He has no history of previous illnesses, and his growth is normal. On chest examination:\nHeart rate: 120 beats/min\nHeart sounds: Normal, no murmurs\nRespiratory rate: 40 breaths/min\nDullness to percussion\nBronchial breathing and inspiratory crepitations over the front lower right hemithorax\nWhat is the most likely diagnosis?',
  opts:['Acute exacerbation of asthma','Bronchiolitis','Inhaled foreign body','Right pneumothorax','Pneumonia'],
  expl:"Signs like dullness to percussion, bronchial breath sounds, and inspiratory crackles are typical of lobar pneumonia. The child's history and examination support this.",
  note:'p.531 answered, option e (index 4) highlighted yellow, boxed explanation present. Twin p.530 unanswered, identical stem/options, confirms transcription. This page uses lowercase option letters (a-e) unlike surrounding pages (A-E) -- not encoded (schema stores index only), flagged here as an oddity. The five exam findings print as a bulleted list with round red bullet icons, two per line for the first two lines, one per line for the third -- transcribed as a plain newline-separated list; no image/figure, purely bulleted text formatting.' }

{ n:29, pr:29, p:533, key:2,
  stem:'Ali, aged 6, is brought to the Emergency Department after becoming unwell at a family party. He is unable to say more than a single word and indicates that he is finding it hard to breathe. He appears very anxious. He has a raised, itchy rash that is spreading from his face to his chest. He has never had an episode like this before. His mother reports that he has asthma and uses a salbutamol inhaler for wheezy episodes.What is the most likely diagnosis?',
  opts:['Acute asthma','Allergic reaction','Anaphylaxis','Idiopathic urticaria','Inhaled foreign body'],
  expl:'Sudden breathing difficulty with rash and swelling after exposure to allergens strongly suggests anaphylaxis. Asthma is a risk factor for severe reactions.',
  note:'p.533 answered, option c (index 2) highlighted yellow, boxed explanation present. Twin p.532 unanswered, identical stem/options, confirms transcription, including the missing space "wheezy episodes.What" -- reproduced verbatim. Lowercase option letters (a-e) again, as on p.530-531.' }

{ n:30, pr:30, p:535, key:3,
  stem:'A boy, while attending a birthday party, develops sudden onset edema that started on his lips and eyelids, and then spread to the dorsum of the hands, eyes, and genitalia.\nWhat is the most likely diagnosis?',
  opts:['Nutritional anemia','Nephrotic syndrome','Hepatic insufficiency','Angioedema','Heart failure'],
  expl:'Angioedema presents with rapid, non-pitting edema of soft tissues, often triggered by allergens or idiopathically. It may accompany or precede anaphylaxis.',
  note:'p.535 answered, option d (index 3) highlighted yellow, boxed explanation present. Twin p.534 unanswered, identical stem/options, confirms transcription. Lowercase option letters (a-e), consistent with pp.530-533.' }

{ n:31, pr:31, p:537, key:2,
  stem:'Which of the following is the most common cause of pneumonia in infants and young children?',
  opts:['Streptococcus pneumoniae','Mycoplasma','Viruses','Chlamydia','Haemophilus influenzae'],
  expl:'Viral infections, particularly RSV and parainfluenza, are the leading cause of pneumonia in this age group. Bacterial causes like Streptococcus pneumoniae are more common in older children.',
  note:'p.537 answered, option c (index 2) highlighted yellow, boxed explanation present. Twin p.536 unanswered, identical stem/options, confirms transcription. Lowercase option letters (a-e), consistent with pp.530-535.' }

{ n:32, pr:32, p:539, key:0,
  stem:'A 5-month-old baby presents with tachypnea, fever, mild intercostal and subcostal retractions, dry cough, and wheezing. A chest radiograph shows hyperinflation and increased interstitial markings.\nHow would you manage this patient?',
  opts:['Oxygen supplementation and fluid support','Glucocorticoids','Epinephrine','Theophylline','Penicillin'],
  expl:'This is likely bronchiolitis, for which supportive care with oxygen and hydration is the primary treatment. Bronchodilators and steroids have limited benefit.',
  note:'p.539 answered, option a (index 0) highlighted yellow, boxed explanation present. Twin p.538 unanswered, identical stem/options, confirms transcription. Lowercase option letters (a-e), consistent with pp.530-537.' }

{ n:33, pr:33, p:541, key:2,
  stem:'Aya, a 3-year-old girl, presents with a history of eczema, rhinitis, chronic nocturnal cough, and intermittent wheezing. Asthma is suspected, and a bronchodilator is prescribed.\nWhat is the most appropriate method to deliver the bronchodilator?',
  opts:['Dry powder inhaler','Metered dose inhaler (MDI)','Metered dose inhaler with spacer','Nebulizer','Inhaler with face mask'],
  expl:'An MDI with spacer is the preferred method in young children as it ensures better delivery of medication to the lungs and is easy to use.',
  note:'p.541 answered, option c (index 2) highlighted yellow, boxed explanation present. Twin p.540 unanswered, identical stem/options, confirms transcription. Lowercase option letters (a-e), consistent with pp.530-539. This is my LAST assigned entry (n:33, range ends at p.541).' }
