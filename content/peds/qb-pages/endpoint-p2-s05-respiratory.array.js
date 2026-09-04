/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part2.pdf - SECTION 5: "Respiratory disorders"
   Verbatim staging record. PDF pages 452-606; PDF page = printed page, offset zero.
   Merged from endpoint-p2-s05-respiratory.part-A.js + endpoint-p2-s05-respiratory.part-B.js + endpoint-p2-s05-respiratory.part-C.js + endpoint-p2-s05-respiratory.part-D.js by merge-parts-ep2.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP2_S05_STAGED = [

/* endpoint PART 2, section 5 "Respiratory disorders" (banner p.452), PART A.
   Range assigned: PDF pp.477-509, ANSWERED pages only, strict odd/even alternation
   (even unanswered / odd answered). n:1-17 (section-global, section opens at n:1 -- this
   is the first part file for this section). Staged per
   tools/bank-harness/pd-ep2-staging-brief.md. OCR NOT opened during this pass.

   BOUNDARY CHECK, start of range: p.451 is the Arabic closing supplication for section 4
   (confirms section 4 ends before here, matching memory). p.452 is the "Respiratory
   disorders" banner. p.475 is a "Questions" divider slide. p.476 is the first unanswered
   question page (q1, throat photo). p.477 is its answered twin -- matches task prompt shape
   exactly; pp.453-474 (teaching-notes slides) NOT read, out of range and not staged.

   Question-number walk (pr = printed number, page by page), filled in as staged:
     n1 pr1 p477 ...

   Alternation and box findings recorded per entry as staged; running note continued below. */

{ n:1, pr:1, p:477, key:2,
  stem:'Liam, a 7-year-old boy, complains to his family doctor of a sore throat and has a mild fever. The appearance of his throat is as shown in the opposite figure. What is the most likely diagnosis?',
  opts:['Diphtheria','Glandular fever (Epstein–Barr virus)','Group A Streptococcal tonsillitis','Measles','Herpes simplex stomatitis'],
  fig:'Clinical photograph on the right side of the slide showing the oropharynx: erythematous, enlarged tonsils with white/yellowish exudate/spots on the tonsillar surface; tongue depressed below, uvula visible between the tonsils. One panel, no labels.',
  figAlt:'A clinical photograph of the oropharynx.',
  expl:'Streptococcal tonsillitis presents with sore throat, fever, and tonsillar exudates, especially in school-aged children. The absence of systemic features like rash or gray pseudomembrane helps exclude other options like measles or diphtheria.',
  note:'Twin checked (p.476, unanswered, identical stem/options/figure). Option C "Group A Streptococcal tonsillitis" is highlighted yellow and bold -> key=2. Printed box present, transcribed verbatim.' },

{ n:2, pr:2, p:479, key:2,
  stem:'Mohammed, a 5-year-old refugee from Somalia, presents acutely unwell to the Emergency Department. He has a 1-day history of sore throat and a high temperature (40.1°C). Over the last 8 hours, he has been having increasing difficulty breathing with quiet stridor. He has never been immunized. He is noted to be unable to swallow his saliva. The opposite figure was taken when he was intubated. What is the most likely diagnosis?',
  opts:['Bacterial tracheitis','Croup','Epiglottitis','Foreign body','Laryngomalacia'],
  fig:'Clinical/endoscopic photograph on the right, taken during intubation: circular endoscope-style view of the airway showing a markedly swollen, cherry-red/haemorrhagic rounded mass occluding much of the field, endotracheal tube visible at upper left. One panel, no labels.',
  figAlt:'An endoscopic image of the airway taken during intubation.',
  expl:'Epiglottitis presents acutely with high fever, drooling, muffled voice, stridor, and inability to swallow. In an unimmunized child, Haemophilus influenzae type b is a likely cause and requires urgent airway management.',
  note:'Twin checked (p.478, unanswered, identical stem/options/figure). Option C "Epiglottitis" is highlighted yellow and bold -> key=2. Printed box present, transcribed verbatim.' },

{ n:3, pr:3, p:481, key:4,
  stem:'Amber, a 9-month-old girl, presents with a 4-day history of coughing spasms which are followed by vomiting. A whooping cough (Bordetella pertussis infection) is suspected. Which of the following tests would be most useful in confirming the diagnosis?',
  opts:['Blood culture','Chest X-ray','Full blood count and film','Nasopharyngeal aspirate','Pernasal swab'],
  expl:'Whooping cough (pertussis) is best confirmed with a pernasal swab for PCR or culture of Bordetella pertussis. Symptoms include paroxysmal cough followed by vomiting and inspiratory "whoop."',
  note:'Twin checked (p.480, unanswered, identical stem/options). No figure on either page. Option E "Pernasal swab" is highlighted yellow and bold/underlined -> key=4. Printed box present, transcribed verbatim.' },

{ n:4, pr:4, p:483, key:3,
  stem:"Tak, a 3-year-old Asian boy, presents to his family doctor. He has a 'hacking' cough that started several weeks ago and has failed to respond to two courses of antibiotics. He is otherwise well and has had no previous chest problems. On examination, there is decreased air entry in the right lower zone with normal percussion noted. His growth is normal. What is the most appropriate next step?",
  opts:['Admit for intravenous antibiotic therapy','Assess bronchodilator response','Organize ultrasound-guided drainage of his pleural effusion','Request a chest X-ray','Request a sweat test and evaluation of immunoglobulins and functional antibodies'],
  expl:'In a child with chronic cough and localized findings (decreased air entry), a chest X-ray is the first investigation to rule out pneumonia, foreign body, or structural abnormalities.',
  note:'Twin checked (p.482, unanswered, identical stem/options). No figure on either page. Option D "Request a chest X-ray" is highlighted yellow and bold/underlined -> key=3. Printed box present, transcribed verbatim.' },

{ n:5, pr:5, p:485, key:2,
  stem:'Amir, a 4-year-old boy, presents to his family doctor with a history of eczema, rhinitis, chronic nocturnal cough, and intermittent wheeze. Asthma is suspected, and a bronchodilator is prescribed. How should his bronchodilator be delivered?',
  opts:['Dry powder inhaler','Metered-dose inhaler (MDI)','Metered-dose inhaler with large-volume spacer','Nebulizer','Syrup'],
  expl:'In preschool children, bronchodilators should be delivered via an MDI with a spacer for optimal lung deposition. Dry powder inhalers are not suitable for young children due to insufficient inspiratory flow.',
  note:'Twin checked (p.484, unanswered, identical stem/options). No figure on either page. Option C "Metered-dose inhaler with large-volume spacer" is highlighted yellow and bold/underlined -> key=2. Printed box present, transcribed verbatim.' },

{ n:6, pr:6, p:487, key:2,
  stem:'Sarah, a 10-year-old girl, has frequent attacks of asthma. She attends the Emergency Department with increasing difficulty breathing over the last 12 hours. Initial observation shows that she is anxious, sitting upright, has a marked tracheal tug, and is unable to complete a sentence. Which of the following statements is most likely to be correct?',
  opts:['Sarah’s asthma attack is of moderate severity','Sarah’s condition is likely to improve if she is encouraged to lie flat','Sarah’s oxygen saturation should be measured','Sarah should be taken promptly to the X-ray department for a chest X-ray','The lack of wheeze should make you consider a panic attack'],
  expl:'In a child with severe asthma signs, oxygen saturation is essential to assess respiratory compromise. Lying flat would worsen symptoms, and the lack of wheeze does not exclude asthma—it may indicate silent chest.',
  note:'Twin checked (p.486, unanswered, identical stem/options). No figure on either page. Option C "Sarah’s oxygen saturation should be measured" is highlighted yellow and bold/underlined -> key=2. Printed box present, transcribed verbatim. Curly apostrophe in "Sarah’s" reproduced as printed.' },

{ n:7, pr:7, p:489, key:4,
  stem:'Zak, a 3-year-old boy, is seen by his general practitioner because of recurrent wheezing associated with upper respiratory tract infections. Which of the following features most supports the diagnosis of asthma?',
  opts:['Daytime cough','Finger clubbing','Peak-flow variability diary','Persistent moist cough','The presence of symptoms between coughs and colds'],
  expl:'Asthma is more likely if symptoms such as wheeze or cough occur between infections. Persistent moist cough and finger clubbing suggest alternative diagnoses.',
  note:'Twin checked (p.488, unanswered, identical stem/options). No figure on either page. Option E "The presence of symptoms between coughs and colds" is highlighted yellow and bold/underlined -> key=4. Printed box present, transcribed verbatim.' },

{ n:8, pr:8, p:491, key:4,
  stem:'Norah, an 18-month-old girl, presents to her family doctor with coryza, cough, and a mild fever for 3 days. She feeds poorly and is unsettled at night. Her respiratory rate is normal, and there is no chest recession. What is the most likely diagnosis?',
  opts:['Bronchiolitis','Frontal sinusitis','Pneumonia (lower respiratory tract infection)','Tonsillitis','Upper respiratory tract infection'],
  expl:'Coryza, mild fever, and no chest recession or tachypnea suggest a simple URTI, the most common cause of such symptoms in toddlers.',
  note:'Twin checked (p.490, unanswered, identical stem/options). No figure on either page. Option E "Upper respiratory tract infection" is highlighted yellow and bold/underlined -> key=4. Printed box present, transcribed verbatim.' },

{ n:9, pr:9, p:493, key:4,
  stem:'Fiona, a 10-month-old infant, has been unsettled and febrile with a runny nose for 2 days. Her family doctor examines her ear canal, and the tympanic membrane appears as in the opposite figure. What is the most likely diagnosis?',
  opts:['Acute otitis externa','Cholesteatoma','Chronic otitis externa','Foreign body in the external ear canal','Otitis media with effusion'],
  fig:'Otoscopic photograph on the right, circular field: tympanic membrane appears bulging, erythematous/red, with loss of normal landmarks and light reflex. One panel, no labels.',
  figAlt:'An otoscopic photograph of the tympanic membrane.',
  expl:"Otitis media often presents after a viral URTI with fever and bulging, erythematous tympanic membrane. It's common in infants and toddlers.",
  note:'Twin checked (p.492, unanswered, identical stem/options/figure). Option E "Otitis media with effusion" is highlighted yellow and bold/underlined -> key=4. Printed box present, transcribed verbatim.' },

{ n:10, pr:10, p:495, key:3,
  stem:'Jamel 10-month-old boy is brought at 1 am to the emergency because he has woken up with noisy breathing. He had coryzal symptoms for 2 days and now has a barking cough. On examination he has a fever of 37.8. He is alert and watches you but clings to his mother. On crying, he has marked inspiratory stridor. Select the most likely diagnosis.',
  opts:['Bronchiolitis','HF','Inhaled F.B','CROUP','Pneumonia'],
  expl:'',
  note:'Twin checked (p.494, unanswered, identical stem/options; "barking cough" printed in red text on the answered page only, same words, no wording difference). Options printed lowercase a-e on this page (unlike other pages in this range) -- reproduced as printed. Option d "CROUP" is highlighted yellow and bold/underlined -> key=3. Page prints NO explanation box -- box test per brief §3a run: p.496 opened and found to be a NEW unanswered question (q11, chest X-ray figure, no highlight, no box) -- confirms p.495 is an ordinary boxless question, not an overflow-box case. expl:\'\' is correct as printed.' },

{ n:11, pr:11, p:497, key:1,
  stem:'A 10-year-old African boy woke up four nights ago with a sudden onset of coughing and choking. Since then, he has been noted to be intermittently wheezy. He has wheeze on auscultation of his right chest only. His chest X-ray is shown in the opposite figure. What is the most likely diagnosis?',
  opts:['Pneumonia','Inhaled foreign body','Laryngotracheobronchitis (croup)','Bronchopulmonary dysplasia (BPD)','Chronic asthma'],
  fig:'Frontal chest X-ray on the right side of the slide, single panel, greyscale, patient markers (e.g. "L" laterality marker) visible at the edges; shows lung fields, both hemithoraces visible, no annotation/arrows drawn on it.',
  figAlt:'A frontal chest X-ray.',
  expl:'Unilateral wheeze and sudden onset of symptoms during sleep suggest an inhaled foreign body. X-ray may show air trapping or hyperinflation on the affected side.',
  note:'Twin checked (p.496, unanswered, identical stem/options/figure). Option B "Inhaled foreign body" is highlighted yellow and bold/underlined -> key=1. Printed box present, transcribed verbatim.' },

{ n:12, pr:12, p:499, key:0,
  stem:'A 3-year-old Asian girl has been coughing for 10 days, with fever and lethargy for 2 days. On examination, she has a respiratory rate of 45 breaths/min and crepitations with decreased air entry at her left lung base. Her chest X-ray is shown in the opposite figure. What is the most likely diagnosis?',
  opts:['Pneumonia','Inhaled foreign body','Laryngotracheobronchitis (croup)','Bronchopulmonary dysplasia (BPD)','Chronic asthma'],
  fig:'Frontal chest X-ray on the right side of the slide, single panel, greyscale, showing lung fields with an area of increased opacity/consolidation at the left lung base; no annotation/arrows drawn on it.',
  figAlt:'A frontal chest X-ray.',
  expl:'Fever, tachypnea, localized crepitations, and focal decreased air entry are classic signs of pneumonia. X-ray typically shows consolidation or infiltrates in the affected area.',
  note:'Twin checked (p.498, unanswered, identical stem/options/figure). Option A "Pneumonia" is highlighted yellow and bold/underlined -> key=0. Printed box present, transcribed verbatim.' },

{ n:13, pr:13, p:501, key:4,
  stem:'Jamal, a 10-month-old Asian boy, is brought at 1 a.m. to the Emergency Department because he has woken up with noisy breathing. He has had coryzal symptoms for 2 days and now has a barking cough. On examination, he has a fever of 37.8°C. He is alert and watches you but clings to his mother. On crying, he is noted to have inspiratory stridor. What is the most likely diagnosis?',
  opts:['Bronchiolitis','Pneumonia','Pertussis (whooping cough)','Bronchiolitis','Laryngotracheobronchitis (croup)'],
  expl:'Croup typically follows a viral prodrome and presents with barking cough and inspiratory stridor, especially in the evening or at night. The child appears alert and interactive, which supports a mild-to-moderate croup diagnosis.',
  note:'Twin checked (p.500, unanswered, identical stem/options, including option D duplicating option A as "Bronchiolitis" -- reproduced exactly as printed on both pages, not a transcription error). "barking cough" printed in red text on the answered page only, same words. Option E "Laryngotracheobronchitis (croup)" is highlighted yellow and bold/underlined -> key=4. Printed box present, transcribed verbatim. OBSERVATION for the drafting pass: this vignette is near-identical to n:10 (p.495, "Jamel" 10-month-old boy, same age/timing/symptoms/stridor) but with a different, non-overlapping option set (n:10 used lowercase a-e: Bronchiolitis/HF/Inhaled F.B/CROUP/Pneumonia) and n:10 prints no box while n:13 does -- recorded here, NOT folded; this is a within-file observation, not a cross-file match, decision left to a later pass with the whole section in view.' },

{ n:14, pr:14, p:503, key:0,
  stem:"Jack, a 4-month-old infant, has rapid, labored breathing that has been getting worse over the last 2 days. His mother is concerned as she is struggling to get him to feed. He was born at 27 weeks' gestation, birth weight 979 g, and was discharged home at 3 months of age. On examination, he has a temperature of 37.4°C and a respiratory rate of 60 breaths/min. He is coughing. His chest is hyperinflated with marked intercostal recession. On auscultation, there are generalized fine crackles and wheezes. What is the most likely diagnosis?",
  opts:['Bronchiolitis','Pneumonia','Pertussis (whooping cough)','Bronchiolitis','Laryngotracheobronchitis (croup)'],
  expl:'Bronchiolitis presents in infants with cough, tachypnea, wheeze, and crackles, often caused by RSV. Preterm infants are at higher risk for severe disease, and hyperinflated lungs with respiratory distress are characteristic.',
  note:'Twin checked (p.502, unanswered, identical stem/options, including option D duplicating option A as "Bronchiolitis" -- reproduced exactly as printed on both pages, confirmed on twin, not a transcription error). Numbers confirmed on both pages: 27 weeks\' gestation, birth weight 979 g, temperature 37.4°C, respiratory rate 60 breaths/min. Option A "Bronchiolitis" is highlighted yellow and bold/underlined -> key=0. Printed box present, transcribed verbatim. Same shared-menu shape as n:13 (options B/C/E identical wording, A and D both "Bronchiolitis") -- recorded, not folded.' },

{ n:15, pr:15, p:505, key:1,
  stem:'Fred is a normally well 4-year-old boy. He has had a runny nose and fever for 3 days. He has now developed a cough and difficulty breathing. On examination, his temperature is 39°C. He watches you but sits quietly on his mother’s lap. He has a respiratory rate of 55 breaths/min. His breaths are rapid but shallow with some mild substernal recession. There is no wheeze on auscultation but some coarse crackles at the right base. His oxygen saturation is 91% in air. What is the most likely diagnosis?',
  opts:['Bronchiolitis','Pneumonia','Pertussis (whooping cough)','Bronchiolitis','Laryngotracheobronchitis (croup)'],
  expl:'Fever, localized crackles, tachypnea, and oxygen desaturation point toward pneumonia. The lack of wheeze and presence of coarse crackles at the base further support bacterial pneumonia.',
  note:'Twin checked (p.504, unanswered, identical stem/options, including option D duplicating option A as "Bronchiolitis" -- confirmed on twin, not a transcription error). Numbers confirmed on both pages: temperature 39°C, respiratory rate 55 breaths/min, oxygen saturation 91%. Option B "Pneumonia" is highlighted yellow and bold/underlined -> key=1. Printed box present, transcribed verbatim. Third entry in this range sharing the n:13/n:14 option menu (B/C/E identical wording, A and D both "Bronchiolitis") -- recorded, not folded.' },

{ n:16, pr:16, p:507, key:2,
  stem:'Hannah is a 3-month-old infant who has had a cough for over 2 weeks. She has now developed prolonged bouts of coughing. She has started to vomit at the end of the bout of coughing. Her temperature is 38°C. Her respiratory rate is 25 breaths/min. On auscultation of her chest, there are some scattered crackles. What is the most likely diagnosis?',
  opts:['Bronchiolitis','Pneumonia','Pertussis (whooping cough)','Bronchiolitis'],
  expl:'Pertussis typically presents with paroxysms of coughing followed by post-tussive vomiting, especially in young infants. The prolonged cough history and classic vomiting pattern are key diagnostic clues.',
  note:'Twin checked (p.506, unanswered, identical stem/options). ⚠ Only FOUR options printed here (A-D), unlike n:13/14/15\'s five (A-E) -- confirmed on both this page and its twin, not a transcription omission; option D again duplicates option A as "Bronchiolitis", option E ("Laryngotracheobronchitis (croup)") is simply absent from this printing. Numbers confirmed on both pages: temperature 38°C, respiratory rate 25 breaths/min. Option C "Pertussis (whooping cough)" is highlighted yellow and bold/underlined -> key=2. Printed box present, transcribed verbatim.' },

{ n:17, pr:17, p:509, key:2,
  stem:'Sara, an 8-month-old Asian girl, presents with a 3-day history of being unsettled. She has had coryzal symptoms and a mild fever. On examination of the right ear canal, you note a bulging red tympanic membrane. Her respiratory rate is 25 breaths/min, and there is no chest recession.\n\nWhich of the following is the most appropriate next step in the management of this patient?',
  opts:['Oral corticosteroid','Inhaled salbutamol via metered-dose inhaler and spacer','Oral antipyretic/analgesic','Continuous positive airway pressure (CPAP)','Endotracheal intubation and ventilation'],
  expl:'The presentation suggests acute otitis media. Initial management in mild cases includes oral antipyretics and analgesics for symptom relief, especially if the child is otherwise stable.',
  note:'Twin checked (p.508, unanswered, identical stem/options; stem prints as two paragraphs on both pages, reproduced with a blank line between them). No figure on either page. Numbers confirmed: respiratory rate 25 breaths/min. Option C "Oral antipyretic/analgesic" is highlighted yellow and bold/underlined -> key=2. Printed box present, transcribed verbatim. THIS IS THE LAST ENTRY OF PART A (n:1-17, pp.477-509).' },

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
  note:'p.511 answered, option B (index 1) highlighted yellow, boxed explanation present. Twin p.510 unanswered, identical stem/options, confirms transcription. CROSS-BANK MATCH recorded, not folded: house-ch13-respiratory.array.js n:19 (p.107) is the same scenario ("Chardonnay", 6-year-old, asthma, mother smokes) with paraphrased wording and the same key (B); House prints a 5th option "Endotracheal intubation and ventilation" this page does not show a 5th option for on p.511/510 -- only 4 options seen here.' },

{ n:19, pr:19, p:513, key:0,
  stem:'Jake, a 7-month-old infant, presents with a 2-day history of fever and runny nose. During the night, he developed a harsh cough and noisy breathing on inspiration. On examination, he has moderate inspiratory stridor and mild intercostal and subcostal recession. His respiratory rate is 30 breaths/min, temperature is 37.8°C, capillary refill time is normal, and oxygen saturation is 96% in air. Which of the following is the most appropriate next step in the management of this patient?',
  opts:['Oral corticosteroid','Inhaled salbutamol via metered-dose inhaler and spacer','Oral antipyretic/analgesic','Continuous positive airway pressure (CPAP)','Endotracheal intubation and ventilation'],
  expl:'This is moderate croup, indicated by stridor at rest with mild recession. Oral corticosteroids (e.g., dexamethasone) are the treatment of choice to reduce airway inflammation.',
  note:'p.513 answered, option A (index 0) highlighted yellow, boxed explanation present. Twin p.512 unanswered, identical stem/options, confirms transcription. Shares an option ladder with n:18 (p.511) plus an added 5th option E -- pairing recorded, discriminating token: n:18 is asthma/mild recession/no stridor, n:19 is croup/inspiratory stridor at rest. Not folded. CROSS-BANK MATCH recorded, not folded: house-ch13-respiratory.array.js n:20 (p.107-108, straddles) is the same scenario ("Jake", 7-month-old, croup) with paraphrased wording and the same key (A/index 0).' },

{ n:20, pr:20, p:515, key:1,
  stem:'A 5-year-old boy is under outpatient review for asthma. His chest X-ray shows hyperinflation, but his symptoms remain unresponsive despite a stepwise increase in asthma therapy. Further questioning reveals delayed passage of meconium at birth, and finger clubbing is noted on examination.\nWhat is the most appropriate next step in the management of this child?',
  opts:['Arrange a CT chest scan','Organize a sweat test','Test lung function using spirometry','Take a per-nasal swab','Send sputum cultures'],
  expl:'Atypical asthma symptoms, clubbing, and delayed meconium suggest cystic fibrosis. A sweat test is the diagnostic gold standard to confirm CF.',
  note:'p.515 answered, option B (index 1) highlighted yellow, boxed explanation present. Twin p.514 unanswered, identical stem/options, confirms transcription. CROSS-BANK MATCH recorded, not folded: house-ch13-respiratory.array.js n:21 (p.108) is the same scenario (5-year-old boy, asthma unresponsive, delayed meconium, clubbing -> CF) with paraphrased wording and the same key (B/index 1).' },

{ n:21, pr:21, p:517, key:4,
  stem:'A 4-year-old girl is under outpatient review for asthma. Her regular treatment includes a preventative steroid inhaler at 200 micrograms twice daily and a reliever inhaler used approximately once every two weeks. However, over the last 3 months, she has used her reliever every other day, and her nocturnal coughing has increased, disturbing her sleep.\nWhat is the appropriate next step in care for this child?',
  opts:['Continue on the same dose of steroid inhaler','Increase the steroid inhaler dose to 400 micrograms BD','Start a course of oral steroids','Start oral theophylline','Add a long-acting beta agonist'],
  expl:'Step-up therapy in asthma with poorly controlled symptoms despite low-dose ICS includes adding a long-acting beta agonist (LABA). Increased reliever use and night-time symptoms indicate poor control.',
  note:'p.517 answered, option E (index 4) highlighted yellow, boxed explanation present. Twin p.516 unanswered, identical stem/options, confirms transcription. CROSS-BANK MATCH recorded, not folded: house-ch13-respiratory.array.js n:22 (p.108) is the same scenario (4-year-old girl, asthma, 200mcg BD steroid inhaler, reliever every other day) with paraphrased wording and the same key (E/index 4).' },

{ n:22, pr:22, p:519, key:0,
  stem:'A 3-year-old girl is admitted with a 3-day history of coryzal symptoms followed by acute onset of breathing difficulty. She is otherwise fit and well, apart from mild eczema, and her parents are non-smokers. She is thriving. On examination, she has widespread wheeze without crepitations.\nWhat is the most likely diagnosis?',
  opts:['Viral wheeze','Asthma','Heart failure','Bronchiolitis','Recurrent aspiration'],
  expl:'In children under 5, wheeze triggered by viral infections without interval symptoms is termed viral wheeze. It is common and self-limited in otherwise healthy children.',
  note:'p.519 answered, option A (index 0) highlighted yellow, boxed explanation present. Twin p.518 unanswered, identical stem/options, confirms transcription. CROSS-BANK MATCH recorded, not folded: house-ch13-respiratory.array.js n:23 (p.108-109, straddles) is the same scenario (3-year-old girl, coryzal then acute breathing difficulty, eczema, non-smoking parents, widespread wheeze no crepitations) with paraphrased wording and the same key (A/index 0).' },

{ n:23, pr:23, p:521, key:0,
  stem:'A 4-year-old girl is admitted with fever, difficulty breathing, and cough. A diagnosis of left lower lobe pneumonia is made and intravenous antibiotics are commenced. What is the most likely pathogen?',
  opts:['Streptococcus pneumoniae','Haemophilus influenzae','Mycoplasma pneumoniae','Chlamydia trachomatis','E. coli'],
  expl:'Strep pneumoniae is the most common cause of community-acquired pneumonia in this age group. Fever, cough, and lobar consolidation are typical features.',
  note:'p.521 answered, option A (index 0) highlighted yellow, boxed explanation present. Twin p.520 unanswered, identical stem/options, confirms transcription. Validator flags opt index 4 ("E. coli") as carrying "a printed letter prefix" -- false positive, the page genuinely prints "E. coli" (the bacterium abbreviation) as the sole content of option E, coinciding visually with the option letter; verified against the twin p.520, same text. Kept verbatim, not stripped to "coli". CROSS-BANK MATCH recorded, not folded: house-ch13-respiratory.array.js n:24 (p.109) is the same scenario (4-year-old girl, fever/cough, left lower lobe pneumonia, IV antibiotics) with paraphrased wording, the identical five-option list including "E. coli", and the same key (A/index 0).' },

{ n:24, pr:24, p:523, key:1,
  stem:'A 24-month-old girl with trisomy 21 attends for her developmental review. Her mother is concerned about her hearing and explains that she has had two recent right ear infections within the last 5 months. An audiogram is carried out, which confirms a conductive hearing loss of the right ear. What is the most likely explanation for this finding?',
  opts:['Congenital infection','Otitis media with effusion','Acquired meningitis','Antibiotic toxicity','Foreign body'],
  expl:'Children with Down syndrome are prone to OME due to eustachian tube dysfunction. This leads to conductive hearing loss, especially following recurrent ear infections.',
  note:'p.523 answered, option B (index 1) highlighted yellow, boxed explanation present. Twin p.522 unanswered, identical stem/options, confirms transcription.' },

{ n:25, pr:25, p:525, key:3,
  stem:"A 6-year-old boy with known asthma has been brought in by ambulance to the local emergency department with an acute severe exacerbation. He has already received salbutamol and ipratropium nebulizers together with an intravenous steroid. Upon reassessment, he appears exhausted with varying responsiveness. Fifteen liters of oxygen are needed to maintain his saturations, and auscultation of his chest reveals minimal breath sounds. What is the next most important step in this child's care?",
  opts:['Reassess 30 minutes later','Give intravenous antibiotics','Request a chest X-ray','Give intravenous salbutamol','Admit to ward'],
  expl:'This is a life-threatening asthma exacerbation with poor air entry and fatigue. IV salbutamol is the next escalation step after nebulizers and steroids.',
  note:'p.525 answered, option D (index 3) highlighted yellow, boxed explanation present. Twin p.524 unanswered, identical stem/options, confirms transcription. "Fifteen liters" transcribed exactly as spelled out on the page (not "15 L").' },

{ n:26, pr:26, p:527, key:4,
  stem:'Bronchiolitis is one of the most common respiratory conditions affecting infants. Which of the following is not a clinical feature of bronchiolitis?',
  opts:['Tachypnoea','Apnoea','Wheeze','Fine crackles','Paroxysmal cough'],
  expl:'Bronchiolitis causes tachypnea, wheeze, and fine crackles but does not present with paroxysmal cough, which is more characteristic of pertussis.',
  note:'p.527 answered, option E (index 4) highlighted yellow, boxed explanation present. Twin p.526 unanswered, identical stem/options, confirms transcription. Note: stem spells "Tachypnoea/Apnoea" but expl box spells "tachypnea" -- both transcribed exactly as printed on their respective source, not normalised to match.' },

{ n:27, pr:27, p:529, key:0,
  stem:'A 3-year-old girl of Irish parents presents with a history of diarrhea since birth. The stool is pale and offensively smelling. She was born on the 25th centile but is now on the 0.4th centile for weight and height. She has been admitted on four occasions with pneumonia and has a chronic cough. Which investigation is most likely to yield her diagnosis?',
  opts:['Sweat test','Coeliac antibodies','Stool reducing substances','Stool for microscopy and culture','Endoscopy and colonoscopy'],
  expl:'Chronic diarrhea, recurrent pneumonia, and failure to thrive in a Caucasian child raise strong suspicion for cystic fibrosis. The sweat test is diagnostic.',
  note:'p.529 answered, option A (index 0) highlighted yellow, boxed explanation present. Twin p.528 unanswered, identical stem/options, confirms transcription. Note this page is genuinely tagged/printed answered -- explicitly checked per brief 3a defect #4 (a page tagged answered with no highlight/box); this page DOES show both, so it is a real answered page, not that defect.' },

{ n:28, pr:28, p:531, key:4,
  stem:'Reda, a 19-month-old boy, presents with shortness of breath and difficulty breathing for the last 3 days. His breathing is now interfering with feeding. He has no history of previous illnesses, and his growth is normal. On chest examination:\nHeart rate: 120 beats/min\nHeart sounds: Normal, no murmurs\nRespiratory rate: 40 breaths/min\nDullness to percussion\nBronchial breathing and inspiratory crepitations over the front lower right hemithorax\nWhat is the most likely diagnosis?',
  opts:['Acute exacerbation of asthma','Bronchiolitis','Inhaled foreign body','Right pneumothorax','Pneumonia'],
  expl:"Signs like dullness to percussion, bronchial breath sounds, and inspiratory crackles are typical of lobar pneumonia. The child's history and examination support this.",
  note:'p.531 answered, option e (index 4) highlighted yellow, boxed explanation present. Twin p.530 unanswered, identical stem/options, confirms transcription. This page uses lowercase option letters (a-e) unlike surrounding pages (A-E) -- not encoded (schema stores index only), flagged here as an oddity. The five exam findings print as a bulleted list with round red bullet icons, two per line for the first two lines, one per line for the third -- transcribed as a plain newline-separated list; no image/figure, purely bulleted text formatting.' },

{ n:29, pr:29, p:533, key:2,
  stem:'Ali, aged 6, is brought to the Emergency Department after becoming unwell at a family party. He is unable to say more than a single word and indicates that he is finding it hard to breathe. He appears very anxious. He has a raised, itchy rash that is spreading from his face to his chest. He has never had an episode like this before. His mother reports that he has asthma and uses a salbutamol inhaler for wheezy episodes.What is the most likely diagnosis?',
  opts:['Acute asthma','Allergic reaction','Anaphylaxis','Idiopathic urticaria','Inhaled foreign body'],
  expl:'Sudden breathing difficulty with rash and swelling after exposure to allergens strongly suggests anaphylaxis. Asthma is a risk factor for severe reactions.',
  note:'p.533 answered, option c (index 2) highlighted yellow, boxed explanation present. Twin p.532 unanswered, identical stem/options, confirms transcription, including the missing space "wheezy episodes.What" -- reproduced verbatim. Lowercase option letters (a-e) again, as on p.530-531.' },

{ n:30, pr:30, p:535, key:3,
  stem:'A boy, while attending a birthday party, develops sudden onset edema that started on his lips and eyelids, and then spread to the dorsum of the hands, eyes, and genitalia.\nWhat is the most likely diagnosis?',
  opts:['Nutritional anemia','Nephrotic syndrome','Hepatic insufficiency','Angioedema','Heart failure'],
  expl:'Angioedema presents with rapid, non-pitting edema of soft tissues, often triggered by allergens or idiopathically. It may accompany or precede anaphylaxis.',
  note:'p.535 answered, option d (index 3) highlighted yellow, boxed explanation present. Twin p.534 unanswered, identical stem/options, confirms transcription. Lowercase option letters (a-e), consistent with pp.530-533.' },

{ n:31, pr:31, p:537, key:2,
  stem:'Which of the following is the most common cause of pneumonia in infants and young children?',
  opts:['Streptococcus pneumoniae','Mycoplasma','Viruses','Chlamydia','Haemophilus influenzae'],
  expl:'Viral infections, particularly RSV and parainfluenza, are the leading cause of pneumonia in this age group. Bacterial causes like Streptococcus pneumoniae are more common in older children.',
  note:'p.537 answered, option c (index 2) highlighted yellow, boxed explanation present. Twin p.536 unanswered, identical stem/options, confirms transcription. Lowercase option letters (a-e), consistent with pp.530-535.' },

{ n:32, pr:32, p:539, key:0,
  stem:'A 5-month-old baby presents with tachypnea, fever, mild intercostal and subcostal retractions, dry cough, and wheezing. A chest radiograph shows hyperinflation and increased interstitial markings.\nHow would you manage this patient?',
  opts:['Oxygen supplementation and fluid support','Glucocorticoids','Epinephrine','Theophylline','Penicillin'],
  expl:'This is likely bronchiolitis, for which supportive care with oxygen and hydration is the primary treatment. Bronchodilators and steroids have limited benefit.',
  note:'p.539 answered, option a (index 0) highlighted yellow, boxed explanation present. Twin p.538 unanswered, identical stem/options, confirms transcription. Lowercase option letters (a-e), consistent with pp.530-537.' },

{ n:33, pr:33, p:541, key:2,
  stem:'Aya, a 3-year-old girl, presents with a history of eczema, rhinitis, chronic nocturnal cough, and intermittent wheezing. Asthma is suspected, and a bronchodilator is prescribed.\nWhat is the most appropriate method to deliver the bronchodilator?',
  opts:['Dry powder inhaler','Metered dose inhaler (MDI)','Metered dose inhaler with spacer','Nebulizer','Inhaler with face mask'],
  expl:'An MDI with spacer is the preferred method in young children as it ensures better delivery of medication to the lungs and is easy to use.',
  note:'p.541 answered, option c (index 2) highlighted yellow, boxed explanation present. Twin p.540 unanswered, identical stem/options, confirms transcription. Lowercase option letters (a-e), consistent with pp.530-539. This is my LAST assigned entry (n:33, range ends at p.541).' },

/* Peds ENDPOINT part 2 — section 5 "Respiratory disorders", PART C.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf, pp.451-605 is the section;
   this part stages the answered pages pp.543-573 (every ODD page), n:34..49 (section-global).
   Bare sequence of object literals, blank line separated, no commas, no wrapper — per brief §8.
   OCR NOT opened during this pass (brief §4).
   n is section-global; per task prompt this part starts at n:34 (part A = n:1-17, part B = n:18-33,
   part D = n:50-65). Preceding part files not present on disk at start of this pass (parallel launch).

   Page-by-page walk (answered pages only, pr = printed number on page):
   p.543 pr.34 key=2 (c, Leukotriene receptor antagonist (Montelukast)) box present
   p.545 pr.35 key=3 (d, Inhaled foreign body) box present
   p.547 pr.36 key=3 (d, Increase steroid inhaler to 400 micrograms per day) box present
   p.549 pr.36 key=2 (c, Check the inhaler technique) box present -- pr repeats 36, DIFFERENT question (per brief, pr is not an identifier)
   p.551 pr.37 key=0 (a, Spirometry) box present
   p.553 pr.38 key=3 (d, Feeding difficulties are common) box present
   p.555 pr.39 key=3 (d, Hemolytic anemia) box present
   p.557 pr.40 key=2 (c, Pneumonia is the most common presentation in early-onset sepsis) box present -- NOTE: content is neonatal sepsis, not respiratory, but printed inside this page range
   p.559 pr.41 key=0 (a, Inhaled corticosteroids) box present
   p.561 pr.42 key=0 (a, Tuberculosis) box present -- NOTE: content is immunology/maternal antibodies, not respiratory
   p.563 pr.43 key=3 (d, Confusion and exhaustion) box present
   p.565 pr.44 key=0 (a, Epiglottitis) box present
   p.567 pr.45 key=1 (b, Add a low-dose steroid inhaler) box present
   p.569 pr.46 key=0 (a, Persistent bacterial bronchitis) box present
   p.571 pr.47 key=3 (d, Plain chest X-ray) box present
   p.573 pr.48 key=4 (e, Inhaled bronchial foreign body) box present
   BOUNDARY PROOF: p.574 rendered and read -- unanswered printing of Q49 ("A 4-month-old infant presents with
   fever, cough, and reduced feeding...") plain, no highlight, no box -- confirms alternation continues past
   my range exactly as predicted (even/unanswered, odd/answered); p.575 is part D's first answered page, not staged here.
*/

{ n:34, pr:34, p:543, key:2,
  stem:'A 4-year-old child is brought for review following a recent admission to hospital with wheeze. He has a history of atopy, including eczema in infancy and allergic rhinitis in the summer months. He is currently on inhaled salbutamol PRN. His mother reports she usually gives him his inhaler on four or five days per week. You discuss possible management options. His mother is strongly opposed to using steroids. What is the next best step in management?',
  opts:['Refer to Respiratory Pediatrician','Long-acting beta-2 agonist (e.g. salmeterol)','Leukotriene receptor antagonist (Montelukast)','Oral theophylline'],
  expl:'Montelukast is an effective non-steroidal controller option, especially in children with atopic features when steroids are not preferred.',
  note:'p.543 answered, twin p.542 unanswered checked, identical stem/options. Highlighted option is "c. Leukotriene receptor antagonist (Montelukast)" -> key 2. Box present, small bordered box bottom-right.' },

{ n:35, pr:35, p:545, key:3,
  stem:'A 3-year-old boy is brought to the emergency department with a history of sudden-onset noisy breathing. Auscultation reveals significant wheeze. He is initially managed with nebulized bronchodilators, but there is no improvement. What is the most likely diagnosis?',
  opts:['Acute severe asthma','Anaphylaxis','C1 esterase deficiency','Inhaled foreign body','Viral-induced wheeze'],
  expl:'A sudden onset of wheezing and lack of response to bronchodilators suggest a foreign body aspiration, often causing localized wheeze.',
  note:'p.545 answered, twin p.544 unanswered checked, identical stem/options (5 options). Highlighted option is "d. Inhaled foreign body" -> key 3. Box present, bordered box bottom-centre.' },

{ n:36, pr:36, p:547, key:3,
  stem:'A 5-year-old child admitted with an acute exacerbation of asthma is ready for discharge from the pediatric ward. He has never required admission to HDU. He has been using his salbutamol inhaler on most days over the past 3 months and frequently wakes with nocturnal cough. His current regular medication consists of beclometasone 100 micrograms twice daily and salbutamol as required. His inhaler technique is good, and there are no concerns about compliance. What, if any, changes would you make to his current medication?',
  opts:['Continue current treatment','Add long-acting beta-2 agonist (e.g., salmeterol)','Add leukotriene receptor antagonist (Montelukast)','Increase steroid inhaler to 400 micrograms per day','Increase steroid inhaler to 200 micrograms per day'],
  expl:'Step-up therapy with a moderate increase in inhaled steroids is appropriate before considering additional agents.',
  note:'p.547 answered, twin p.546 unanswered checked, identical stem/options (5 options). Highlighted option is "d. Increase steroid inhaler to 400 micrograms per day" -> key 3. Box present, mid-page bordered box overlapping option a line on this printing.' },

{ n:37, pr:36, p:549, key:2,
  stem:'In a child whose asthma is not controlled on regular inhaled steroids and occasional beta-2 agonist, the single next best action would be to:',
  opts:['Add long-acting beta-2 agonist','Increase the dose of inhaled steroid','Check the inhaler technique','Add a leukotriene inhibitor','Add a short course of oral steroids'],
  expl:'Before stepping up asthma treatment, it\'s essential to ensure that the child is using their inhaler correctly and consistently. Poor technique or poor adherence is a common cause of poor asthma control and must be addressed before making medication changes.',
  note:'p.549 answered, twin p.548 unanswered checked, identical stem/options (5 options). Printed number repeats "36" from p.547 -- pr is not an identifier per brief, distinct question, n advances to 37 regardless. Highlighted option is "c. Check the inhaler technique" -> key 2. Box present, bordered box centred below options.' },

{ n:38, pr:37, p:551, key:0,
  stem:'A 10-year-old boy presents with a 1-year history of persistent cough that is worse at night and after physical activity. There is no fever, and his chest is clear on auscultation. His symptoms improve temporarily with salbutamol inhaler use. Which of the following tests is most likely to assist in making the diagnosis?',
  opts:['Spirometry','Chest X-ray','Sputum culture','Sweat chloride test'],
  expl:'Spirometry assesses reversible airway obstruction and is the best test for confirming asthma in a child with typical symptoms.',
  note:'p.551 answered, twin p.550 unanswered checked, identical stem/options (4 options). Highlighted option is "a. Spirometry" -> key 0. Box present, bordered box lower-centre overlapping option d line.' },

{ n:39, pr:38, p:553, key:3,
  stem:'Which of the following statements is true in acute bronchiolitis?',
  opts:['Wheezing is due to spasm of smooth muscles of bronchioles','Inhaled salbutamol is the treatment of choice','Chest X-ray is diagnostic','Feeding difficulties are common','Antibiotics are indicated in severe cases'],
  expl:'Feeding problems are frequent due to nasal congestion and increased work of breathing. Salbutamol and antibiotics are generally not effective.',
  note:'p.553 answered, twin p.552 unanswered checked, identical stem/options (5 options). Highlighted option is "d. Feeding difficulties are common" -> key 3. Box present, bordered box below options.' },

{ n:40, pr:39, p:555, key:3,
  stem:'Which of the following is NOT a complication of whooping cough?',
  opts:['Pneumonia','Intracranial hemorrhage','Convulsions','Hemolytic anemia','Subconjunctival hemorrhage'],
  expl:'While pertussis can cause pneumonia, convulsions, and hemorrhages, hemolytic anemia is not a recognized complication.',
  note:'p.555 answered, twin p.554 unanswered checked, identical stem/options (5 options). Highlighted option is "d. Hemolytic anemia" -> key 3. Box present, bordered box below options.' },

{ n:41, pr:40, p:557, key:2,
  stem:'In neonatal sepsis, which of the following statements is TRUE?',
  opts:['A heart murmur is usually present','Early-onset sepsis is usually acquired via the placenta following maternal infection','Pneumonia is the most common presentation in early-onset sepsis','High fever is commonly present','A CBC is done to detect neutrophilia'],
  expl:'Early-onset neonatal sepsis, often acquired during delivery, commonly presents with pneumonia.',
  note:'p.557 answered, twin p.556 unanswered checked, identical stem/options (5 options). Highlighted option is "c. Pneumonia is the most common presentation in early-onset sepsis" -> key 2. Box present, bordered box below options. Content is neonatal sepsis, off-topic for a section titled "Respiratory disorders" -- printed here regardless, staged as-is.' },

{ n:42, pr:41, p:559, key:0,
  stem:'Which of the following is considered an asthma preventer?',
  opts:['Inhaled corticosteroids','Short-acting beta agonists (SABA)','Oral antihistamines','Intravenous magnesium sulfate'],
  expl:'Inhaled corticosteroids reduce airway inflammation and are the mainstay of long-term asthma prevention. They help decrease the frequency and severity of symptoms when used regularly.',
  note:'p.559 answered, twin p.558 unanswered checked, identical stem/options (4 options). Highlighted option is "a. Inhaled corticosteroids" -> key 0. Box present, bordered box below options.' },

{ n:43, pr:42, p:561, key:0,
  stem:'Newborns and young infants are NOT protected through maternal antibodies against which of the following diseases?',
  opts:['Tuberculosis','Poliomyelitis','Measles','Mumps','Tetanus'],
  expl:'Maternal antibodies (IgG) cross the placenta and provide passive immunity to the newborn against viral diseases (e.g., measles, mumps, polio) and bacterial toxoid-induced immunity (e.g., tetanus). However, tuberculosis (TB) is mediated by cell-mediated immunity, which is not transferred via maternal antibodies, leaving newborns unprotected.',
  note:'p.561 answered, twin p.560 unanswered checked, identical stem/options (5 options). Highlighted option is "a. Tuberculosis" -> key 0. Box present, bordered box right side overlapping options c/d/e lines. Content is immunology/maternal antibodies, off-topic for "Respiratory disorders" -- staged as printed.' },

{ n:44, pr:43, p:563, key:3,
  stem:'Sign of impending respiratory failure:',
  opts:['Increased respiratory effort','Increased respiratory rate','Chest retractions','Confusion and exhaustion'],
  expl:'Altered mental status and fatigue indicate that the child is tiring and unable to sustain respiratory effort, signaling imminent respiratory failure.',
  note:'p.563 answered, twin p.562 unanswered checked, identical stem/options (4 options). Highlighted option is "d. Confusion and exhaustion" -> key 3. Box present, bordered box below options.' },

{ n:45, pr:44, p:565, key:0,
  stem:'A 5-year-old boy presents with a 1-day history of sore throat and a high fever of 41°C. Over the past 8 hours, he has developed progressive difficulty breathing and now has quiet stridor. He is drooling and unable to swallow his saliva. He has never received any vaccinations. Which of the following is the most likely diagnosis?',
  opts:['Epiglottitis','Croup','Tonsillitis','Retropharyngeal abscess'],
  expl:'Unvaccinated children are at risk of Haemophilus influenzae type b epiglottitis, which presents with high fever, drooling, quiet stridor, and difficulty swallowing. This is a medical emergency.',
  note:'p.565 answered, twin p.564 unanswered checked, identical stem/options (4 options). Highlighted option is "a. Epiglottitis" -> key 0. Box present, bordered box to the right of options a/b/c.' },

{ n:46, pr:45, p:567, key:1,
  stem:'A 5-year-old boy had several previous admissions for virally induced wheeze. He has been using a beta-agonist inhaler at home as needed. He presents to the GP, and his mother reports that he becomes wheezy with changes in temperature, laughter, exercise, and viral illnesses. He uses his inhaler three times per week and coughs on most nights. What is the next best step in his management?',
  opts:['Increase the number of puffs of his beta-agonist','Add a low-dose steroid inhaler','Add a high-dose steroid inhaler','Add a long-acting beta-agonist','Add ipratropium inhaler'],
  expl:'Frequent symptoms and night-time cough suggest persistent asthma, requiring a preventer. Starting a low-dose inhaled corticosteroid is the next appropriate step.',
  note:'p.567 answered, twin p.566 unanswered checked, identical stem/options (5 options). Highlighted option is "b. Add a low-dose steroid inhaler" -> key 1. Box present, bordered box to the right of options b/c.' },

{ n:47, pr:46, p:569, key:0,
  stem:'What is the most common cause of chronic wet cough in children?',
  opts:['Persistent bacterial bronchitis','Bacterial bronchitis','Viral bronchitis','Asthma'],
  expl:'A chronic, wet-sounding cough in children is often due to persistent bacterial bronchitis, especially in the absence of other red flags. It typically responds well to appropriate antibiotics.',
  note:'p.569 answered, twin p.568 unanswered checked, identical stem/options (4 options). Highlighted option is "a. Persistent bacterial bronchitis" -> key 0. Box present, bordered box below options.' },

{ n:48, pr:47, p:571, key:3,
  stem:'A 2-year-old patient presents with fever, cough, and breathlessness for 2 days. The condition was preceded by a runny nose and mild cough one week ago. On examination, the patient appears ill: rectal temperature 39.6°C, HR 145/min, RR 75/min. Nasal flaring is observed. Chest auscultation reveals bilateral crackles. What is the first investigation to be done?',
  opts:['Echocardiography','Sputum culture','C-reactive protein','Plain chest X-ray','Chest CT'],
  expl:'A chest X-ray is the initial imaging tool to evaluate for pneumonia or other lower respiratory pathology in a sick child with fever and bilateral crackles.',
  note:'p.571 answered, twin p.570 unanswered checked, identical stem/options (5 options). Vital signs 39.6°C / HR 145/min / RR 75/min read identically on both pages. Highlighted option is "d. Plain chest X-ray" -> key 3. Box present, bordered box right of options b/c.' },

{ n:49, pr:48, p:573, key:4,
  stem:'A 3-year-old child presents with a sudden, dry, loud, repetitive cough. Chest examination reveals poor air entry and localized wheezing over the right side. What is the most likely diagnosis?',
  opts:['Tension pneumothorax','Acute asthma exacerbation','Severe complicated pneumonia','Pulmonary TB','Inhaled bronchial foreign body'],
  expl:'A sudden onset of cough and localized wheeze suggests an aspirated foreign body, especially if air entry is reduced on one side. This is common in toddlers.',
  note:'p.573 answered, twin p.572 unanswered checked, identical stem/options (5 options). Highlighted option is "e. Inhaled bronchial foreign body" -> key 4. Box present, bordered box below options. This is the last entry of my range; p.574 rendered as boundary proof (see header) and confirms clean handoff to part D at p.575.' },

/* endpoint PART 2, section 5 "Respiratory disorders" (banner p.452), PART D.
   Range assigned: PDF pp.575-605, ANSWERED pages only, strict odd/even alternation
   (even unanswered / odd answered). n:50-65 (section-global; part A = n:1-17, part B =
   n:18-33, part C = n:34-49, per task prompt -- preceding parts were not finished on disk
   at launch time, so this numbering is taken from the task prompt's explicit assignment,
   not re-derived from a completed part-C file). Staged per
   tools/bank-harness/pd-ep2-staging-brief.md. OCR NOT opened during this pass.

   Question-number walk (pr = printed number, page by page), filled in as staged:
     n50 pr49 p575 ...

   Alternation and box findings recorded per entry as staged; running note continued below. */

{ n:50, pr:49, p:575, key:4,
  stem:'A 4-month-old infant presents with fever, cough, and reduced feeding. Respiratory rate is 60/min, with mild recession, wheeze, and crackles throughout. What is the most likely diagnosis?',
  opts:['Croup','Virally induced atopic wheeze','Cystic fibrosis','Bacterial chest infection','Bronchiolitis'],
  expl:'Bronchiolitis is common in infants under 1 year and presents with cough, wheezing, and respiratory distress. It is usually caused by RSV and is managed supportively.',
  note:'Twin checked (p.574, unanswered, identical stem/options). Option e "Bronchiolitis" highlighted yellow/bold/underlined -> key=4. Printed box present, transcribed verbatim.' },

{ n:51, pr:50, p:577, key:0,
  stem:'Most cases of community-acquired pneumonia in children under 5 years are caused by:',
  opts:['Viral pneumonia','Streptococcus pneumoniae','Mycoplasma pneumoniae','Staphylococcus aureus','Haemophilus influenzae'],
  expl:'Viral infections, especially RSV and parainfluenza, are the most frequent cause of pneumonia in young children. Bacterial causes become more prominent with age.',
  note:'Twin checked (p.576, unanswered, identical stem/options). Option a "Viral pneumonia" highlighted yellow/bold/underlined -> key=0. Printed box present, transcribed verbatim.' },

{ n:52, pr:51, p:579, key:1,
  stem:'A 16-year-old girl presents to the emergency department with a severe asthma attack. What is the most important treatment to relieve her bronchoconstriction?',
  opts:['Propranolol','Salbutamol','Oxygen','Glucocorticosteroids'],
  expl:'Salbutamol, a short-acting beta-2 agonist, is the first-line bronchodilator for immediate relief in asthma exacerbations. It provides rapid airway relaxation.',
  note:'Twin checked (p.578, unanswered, identical stem/options). Only 4 options printed. Option b "Salbutamol" highlighted yellow/bold/underlined -> key=1. Printed box present, transcribed verbatim.' },

{ n:53, pr:52, p:581, key:3,
  stem:'Regarding acute laryngotracheobronchitis (viral croup), which of the following is WRONG?',
  opts:['It is usually caused by a parainfluenza virus','Dexamethasone speeds resolution','Endotracheal intubation is rarely indicated','Nebulized adrenaline produces a sustained decrease in airway obstruction','Antibiotics provide no benefit'],
  expl:'Nebulized adrenaline offers rapid but temporary relief in croup. It’s not sustained, which is why steroids like dexamethasone are also used for longer-term effect.',
  note:'Twin checked (p.580, unanswered, identical stem/options). Option d "Nebulized adrenaline produces a sustained decrease in airway obstruction" highlighted yellow/bold/underlined -> key=3 (this is an EXCEPT/WRONG-type question, so the highlighted false statement is the printed key). Printed box present, transcribed verbatim; italic "temporary" in source rendered plain.' },

{ n:54, pr:53, p:583, key:4,
  stem:'A 3-year-old boy is seen by his GP due to recurrent wheezing associated with upper respiratory tract infections. Which of the following features most supports a diagnosis of asthma?',
  opts:['Daytime cough','Finger clubbing','Spasmodic cough','Persistent moist cough','The presence of symptoms between colds'],
  expl:'Asthma is more likely when symptoms like wheeze or cough persist outside of viral illnesses. Isolated symptoms only during colds may reflect viral-induced wheeze rather than true asthma.',
  note:'Twin checked (p.582, unanswered, identical stem/options). Option e "The presence of symptoms between colds" highlighted yellow/bold/underlined -> key=4. Printed box present, transcribed verbatim.' },

{ n:55, pr:54, p:585, key:0,
  stem:'What is the best method to reduce the risk of developing food allergies in children?',
  opts:['Early exposure to common food allergens','Adding prebiotics and probiotics to the infant’s diet','Adding omega-3 fatty acids to the diet','Delaying introduction of allergenic foods until after 1 year of age'],
  expl:'Research supports early introduction of allergenic foods (like peanuts and eggs) around 4–6 months of age as a strategy to reduce the risk of developing food allergies. Delaying introduction may increase the risk, especially in high-risk infants.',
  note:'Twin checked (p.584, unanswered, identical stem/options). Only 4 options printed. Option a "Early exposure to common food allergens" highlighted yellow/bold/underlined -> key=0. Printed box present, transcribed verbatim. Content is food-allergy topic though printed within this section\'s answered-page range as encountered.' },

{ n:56, pr:55, p:587, key:1,
  stem:'A 4-month-old infant has rapid, labored breathing that has been getting worse over the last 2 days. His mother is concerned as she is struggling to get him to feed. He was born at 27 weeks\' gestation, weighing 979 g, and was discharged home at 3 months of age. On examination, he has a temperature of 37.4°C and a respiratory rate of 60 breaths/min. He is coughing. His chest is hyperinflated with marked intercostal recession. On auscultation, there are generalized fine crackles and wheezes. Select the most likely diagnosis:',
  opts:['Acute asthma','Bronchiolitis','Laryngotracheobronchitis (Croup)','Pneumonia','Heart failure'],
  expl:'Bronchiolitis typically affects infants under 1 year, especially preterm babies, and presents with wheeze, crackles, and respiratory distress. The hyperinflated chest and feeding difficulty support this diagnosis.',
  note:'Twin checked (p.586, unanswered, identical stem/options). Numerals confirmed on native image at 800x450: "27 weeks", "979 g", "37.4°C", "60 breaths/min" -- all legible, no crop needed. Option b "Bronchiolitis" highlighted yellow/bold/underlined -> key=1. Printed box present, transcribed verbatim.' },

{ n:57, pr:56, p:589, key:0,
  stem:'From the following medications, pick the drug that is not used as a "preventer" in asthma therapy:',
  opts:['Antihistamines','Inhaled corticosteroids','Leukotriene receptor antagonists','Slow-release oral theophylline','Long-acting beta agonists (LABA)'],
  expl:'Antihistamines are not part of standard asthma preventer therapy. Preventers like inhaled corticosteroids and leukotriene antagonists reduce inflammation and prevent attacks, whereas antihistamines are used in allergic rhinitis.',
  note:'Twin checked (p.588, unanswered, identical stem/options). Option a "Antihistamines" highlighted yellow/bold/underlined -> key=0 (EXCEPT-type stem, printed key is the non-preventer). Printed box present, transcribed verbatim.' },

{ n:58, pr:57, p:591, key:4,
  stem:'A 4-month-old infant is admitted via the emergency department with a history of \'turning blue\' following coughing fits. The child has been coryzal for a few days, but today has had protracted episodes of coughing. Clinical examination was unremarkable, and he is observed on the pediatric ward. You are called by the nursing staff to review the infant urgently after they witnessed him become \'cyanosed\' briefly after a coughing fit. The examination is once again unremarkable. Which of the following investigations is most likely to help confirm the underlying diagnosis?',
  opts:['Blood culture','Chest X-ray','Echocardiography','FBC and blood film','Nasopharyngeal swab'],
  expl:'In an infant with coughing fits and cyanosis, pertussis (whooping cough) should be suspected. A nasopharyngeal swab for PCR or culture confirms the diagnosis.',
  note:'Twin checked (p.590, unanswered, identical stem/options). Option e "Nasopharyngeal swab" highlighted yellow/bold/underlined -> key=4. Printed box present, transcribed verbatim.' },

{ n:59, pr:58, p:593, key:0,
  stem:'Which of the following statements about bronchiolitis is true?',
  opts:['It is caused by viruses only','Antibiotics are recommended in severe cases','Chest X-ray is diagnostic','It is most commonly caused by a bacterial infection'],
  expl:'Bronchiolitis is almost always viral in origin, most commonly due to RSV. Antibiotics and chest X-rays are not routinely indicated unless there\'s a suspicion of bacterial superinfection or complications.',
  note:'Twin checked (p.592, unanswered, identical stem/options). Only 4 options printed. Option a "It is caused by viruses only" highlighted yellow/bold/underlined -> key=0. Printed box present, transcribed verbatim.' },

{ n:60, pr:59, p:595, key:2,
  stem:'A 3-year-old child presents with coryzal symptoms, a congested pharynx, and fever. His respiratory rate is within normal limits, and there are no signs of respiratory distress. What is the most likely causative organism?',
  opts:['Respiratory syncytial virus (RSV)','Epstein-Barr virus (EBV)','Rhinovirus','Streptococcus pyogenes'],
  expl:'Rhinovirus is a common cause of upper respiratory tract infections in young children and usually presents with mild symptoms like coryza and sore throat, without respiratory distress.',
  note:'Twin checked (p.594, unanswered, identical stem/options). Only 4 options printed. Option c "Rhinovirus" highlighted yellow/bold/underlined -> key=2. Printed box present, transcribed verbatim.' },

{ n:61, pr:60, p:597, key:0,
  stem:'You are called to review a 6-year-old child known to have asthma. He has presented with a short history of worsening dyspnea and cough. His regular medication consists of beclometasone 100 micrograms twice daily and salbutamol when required. He last took his salbutamol inhaler one hour ago. His observations are as follows: heart rate 110, respiratory rate 26, oxygen saturations 96%. On examination, he is able to speak in full sentences. Respiratory examination demonstrates good air entry bilaterally with polyphonic wheeze and a prolonged expiratory phase. What is the next best step in management?',
  opts:['10 puffs of Salbutamol via spacer','5 mg of nebulized Salbutamol','2.5 mg of nebulized Salbutamol','Inhaled Ipratropium','Oral Prednisolone'],
  expl:'In a child with mild asthma symptoms and stable vital signs, increasing the dose of salbutamol via a spacer is effective and preferred before considering systemic steroids or nebulizers.',
  note:'Twin checked (p.596, unanswered, identical stem/options). Numerals confirmed on native image: "100 micrograms twice daily", "heart rate 110", "respiratory rate 26", "oxygen saturations 96%", "10 puffs", "5 mg", "2.5 mg" -- all legible, no crop needed. Option a "10 puffs of Salbutamol via spacer" highlighted yellow/bold/underlined -> key=0. Printed box present, transcribed verbatim.' },

{ n:62, pr:61, p:599, key:3,
  stem:'You diagnose a 12-year-old girl as having a generalized chest infection. Her respiratory rate is 22/min, SaO₂ 98% in air; there is no recession. Your differential includes Mycoplasma as a causative organism. What would be the most appropriate course of action?',
  opts:['Admit for intravenous antibiotics','Allow home care but arrange for intravenous antibiotics to be given by the home care nurses','A 7-day course of oral amoxicillin','A 7-day course of oral erythromycin','Admit for oral antibiotics'],
  expl:'Mycoplasma pneumonia responds to macrolides like erythromycin. Since the child is stable with normal oxygen saturation, oral therapy at home is sufficient.',
  note:'Twin checked (p.598, unanswered, identical stem/options). Numerals confirmed: "22/min", "SaO2 98%", "7-day course" -- legible, no crop needed. Option d "A 7-day course of oral erythromycin" highlighted yellow/bold/underlined -> key=3. Printed box present, transcribed verbatim.' },

{ n:63, pr:62, p:601, key:4,
  stem:'Aly is a previously healthy person who has now developed a cough and difficulty breathing. On examination, his temperature is 39°C. He has a respiratory rate of 55 breaths/min. His breaths are rapid but shallow with mild substernal recession. There is no wheeze on auscultation but some coarse crackles at the right base. His oxygen saturation is 91% in air. Select the most probable diagnosis for his respiratory symptoms:',
  opts:['Acute asthma','Bronchiolitis','Chronic asthma','Laryngotracheobronchitis (Croup)','Pneumonia'],
  expl:'Acutely ill presentation with fever, localized crackles, and desaturation suggests pneumonia. Rapid shallow breathing and raised respiratory rate further support a lower respiratory tract infection.',
  note:'Twin checked (p.600, unanswered, identical stem/options). Numerals confirmed: "39°C", "55 breaths/min", "91%" -- legible, no crop needed. Option e "Pneumonia" highlighted yellow/bold/underlined -> key=4. Printed box present, transcribed verbatim.' },

{ n:64, pr:63, p:603, key:0,
  stem:'A 2-year-old presents with fever and a cough for 2 days. She has a fever of 38°C, a respiratory rate of 25 breaths/min, and oxygen saturation of 98%. She is having coryzal symptoms and an inflamed pharynx. Select the next step in management from the list below:',
  opts:['Antipyretic/analgesia','Intravenous aciclovir','Intravenous antibiotics','Oral antibiotic','Oxygen'],
  expl:'This child has no respiratory distress or hypoxia and likely has a viral upper respiratory infection. Supportive care with antipyretics is appropriate.',
  note:'Twin checked (p.602, unanswered, identical stem/options). Numerals confirmed: "38°C", "25 breaths/min", "98%" -- legible, no crop needed. Option a "Antipyretic/analgesia" highlighted yellow/bold/underlined -> key=0. Printed box present, transcribed verbatim.' },

{ n:65, pr:64, p:605, key:3,
  stem:'Seb, a 2-year-old boy, was at his cousin\'s birthday party. His mother noticed that he has suddenly developed a widespread urticarial rash and has also become flushed in the face. His vital signs are normal, and he has no respiratory compromise. Which medication would you give?',
  opts:['Intramuscular adrenaline','Intramuscular antihistamine','Intravenous hydrocortisone','Oral antihistamine','Oral corticosteroid'],
  expl:'In a child with isolated urticaria and stable vital signs, oral antihistamines are first-line treatment. IM adrenaline is reserved for anaphylaxis with airway or cardiovascular involvement.',
  note:'Twin checked (p.604, unanswered, identical stem/options). Option d "Oral antihistamine" highlighted yellow/bold/underlined -> key=3. Printed box present, transcribed verbatim. This is the LAST question of section 5 per task prompt; p.605 is the last page staged in this part.' }

];
