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
  note:'Twin checked (p.476, unanswered, identical stem/options/figure). Option C "Group A Streptococcal tonsillitis" is highlighted yellow and bold -> key=2. Printed box present, transcribed verbatim.' }

{ n:2, pr:2, p:479, key:2,
  stem:'Mohammed, a 5-year-old refugee from Somalia, presents acutely unwell to the Emergency Department. He has a 1-day history of sore throat and a high temperature (40.1°C). Over the last 8 hours, he has been having increasing difficulty breathing with quiet stridor. He has never been immunized. He is noted to be unable to swallow his saliva. The opposite figure was taken when he was intubated. What is the most likely diagnosis?',
  opts:['Bacterial tracheitis','Croup','Epiglottitis','Foreign body','Laryngomalacia'],
  fig:'Clinical/endoscopic photograph on the right, taken during intubation: circular endoscope-style view of the airway showing a markedly swollen, cherry-red/haemorrhagic rounded mass occluding much of the field, endotracheal tube visible at upper left. One panel, no labels.',
  figAlt:'An endoscopic image of the airway taken during intubation.',
  expl:'Epiglottitis presents acutely with high fever, drooling, muffled voice, stridor, and inability to swallow. In an unimmunized child, Haemophilus influenzae type b is a likely cause and requires urgent airway management.',
  note:'Twin checked (p.478, unanswered, identical stem/options/figure). Option C "Epiglottitis" is highlighted yellow and bold -> key=2. Printed box present, transcribed verbatim.' }

{ n:3, pr:3, p:481, key:4,
  stem:'Amber, a 9-month-old girl, presents with a 4-day history of coughing spasms which are followed by vomiting. A whooping cough (Bordetella pertussis infection) is suspected. Which of the following tests would be most useful in confirming the diagnosis?',
  opts:['Blood culture','Chest X-ray','Full blood count and film','Nasopharyngeal aspirate','Pernasal swab'],
  expl:'Whooping cough (pertussis) is best confirmed with a pernasal swab for PCR or culture of Bordetella pertussis. Symptoms include paroxysmal cough followed by vomiting and inspiratory "whoop."',
  note:'Twin checked (p.480, unanswered, identical stem/options). No figure on either page. Option E "Pernasal swab" is highlighted yellow and bold/underlined -> key=4. Printed box present, transcribed verbatim.' }

{ n:4, pr:4, p:483, key:3,
  stem:"Tak, a 3-year-old Asian boy, presents to his family doctor. He has a 'hacking' cough that started several weeks ago and has failed to respond to two courses of antibiotics. He is otherwise well and has had no previous chest problems. On examination, there is decreased air entry in the right lower zone with normal percussion noted. His growth is normal. What is the most appropriate next step?",
  opts:['Admit for intravenous antibiotic therapy','Assess bronchodilator response','Organize ultrasound-guided drainage of his pleural effusion','Request a chest X-ray','Request a sweat test and evaluation of immunoglobulins and functional antibodies'],
  expl:'In a child with chronic cough and localized findings (decreased air entry), a chest X-ray is the first investigation to rule out pneumonia, foreign body, or structural abnormalities.',
  note:'Twin checked (p.482, unanswered, identical stem/options). No figure on either page. Option D "Request a chest X-ray" is highlighted yellow and bold/underlined -> key=3. Printed box present, transcribed verbatim.' }

{ n:5, pr:5, p:485, key:2,
  stem:'Amir, a 4-year-old boy, presents to his family doctor with a history of eczema, rhinitis, chronic nocturnal cough, and intermittent wheeze. Asthma is suspected, and a bronchodilator is prescribed. How should his bronchodilator be delivered?',
  opts:['Dry powder inhaler','Metered-dose inhaler (MDI)','Metered-dose inhaler with large-volume spacer','Nebulizer','Syrup'],
  expl:'In preschool children, bronchodilators should be delivered via an MDI with a spacer for optimal lung deposition. Dry powder inhalers are not suitable for young children due to insufficient inspiratory flow.',
  note:'Twin checked (p.484, unanswered, identical stem/options). No figure on either page. Option C "Metered-dose inhaler with large-volume spacer" is highlighted yellow and bold/underlined -> key=2. Printed box present, transcribed verbatim.' }

{ n:6, pr:6, p:487, key:2,
  stem:'Sarah, a 10-year-old girl, has frequent attacks of asthma. She attends the Emergency Department with increasing difficulty breathing over the last 12 hours. Initial observation shows that she is anxious, sitting upright, has a marked tracheal tug, and is unable to complete a sentence. Which of the following statements is most likely to be correct?',
  opts:['Sarah’s asthma attack is of moderate severity','Sarah’s condition is likely to improve if she is encouraged to lie flat','Sarah’s oxygen saturation should be measured','Sarah should be taken promptly to the X-ray department for a chest X-ray','The lack of wheeze should make you consider a panic attack'],
  expl:'In a child with severe asthma signs, oxygen saturation is essential to assess respiratory compromise. Lying flat would worsen symptoms, and the lack of wheeze does not exclude asthma—it may indicate silent chest.',
  note:'Twin checked (p.486, unanswered, identical stem/options). No figure on either page. Option C "Sarah’s oxygen saturation should be measured" is highlighted yellow and bold/underlined -> key=2. Printed box present, transcribed verbatim. Curly apostrophe in "Sarah’s" reproduced as printed.' }

{ n:7, pr:7, p:489, key:4,
  stem:'Zak, a 3-year-old boy, is seen by his general practitioner because of recurrent wheezing associated with upper respiratory tract infections. Which of the following features most supports the diagnosis of asthma?',
  opts:['Daytime cough','Finger clubbing','Peak-flow variability diary','Persistent moist cough','The presence of symptoms between coughs and colds'],
  expl:'Asthma is more likely if symptoms such as wheeze or cough occur between infections. Persistent moist cough and finger clubbing suggest alternative diagnoses.',
  note:'Twin checked (p.488, unanswered, identical stem/options). No figure on either page. Option E "The presence of symptoms between coughs and colds" is highlighted yellow and bold/underlined -> key=4. Printed box present, transcribed verbatim.' }

{ n:8, pr:8, p:491, key:4,
  stem:'Norah, an 18-month-old girl, presents to her family doctor with coryza, cough, and a mild fever for 3 days. She feeds poorly and is unsettled at night. Her respiratory rate is normal, and there is no chest recession. What is the most likely diagnosis?',
  opts:['Bronchiolitis','Frontal sinusitis','Pneumonia (lower respiratory tract infection)','Tonsillitis','Upper respiratory tract infection'],
  expl:'Coryza, mild fever, and no chest recession or tachypnea suggest a simple URTI, the most common cause of such symptoms in toddlers.',
  note:'Twin checked (p.490, unanswered, identical stem/options). No figure on either page. Option E "Upper respiratory tract infection" is highlighted yellow and bold/underlined -> key=4. Printed box present, transcribed verbatim.' }

{ n:9, pr:9, p:493, key:4,
  stem:'Fiona, a 10-month-old infant, has been unsettled and febrile with a runny nose for 2 days. Her family doctor examines her ear canal, and the tympanic membrane appears as in the opposite figure. What is the most likely diagnosis?',
  opts:['Acute otitis externa','Cholesteatoma','Chronic otitis externa','Foreign body in the external ear canal','Otitis media with effusion'],
  fig:'Otoscopic photograph on the right, circular field: tympanic membrane appears bulging, erythematous/red, with loss of normal landmarks and light reflex. One panel, no labels.',
  figAlt:'An otoscopic photograph of the tympanic membrane.',
  expl:"Otitis media often presents after a viral URTI with fever and bulging, erythematous tympanic membrane. It's common in infants and toddlers.",
  note:'Twin checked (p.492, unanswered, identical stem/options/figure). Option E "Otitis media with effusion" is highlighted yellow and bold/underlined -> key=4. Printed box present, transcribed verbatim.' }

{ n:10, pr:10, p:495, key:3,
  stem:'Jamel 10-month-old boy is brought at 1 am to the emergency because he has woken up with noisy breathing. He had coryzal symptoms for 2 days and now has a barking cough. On examination he has a fever of 37.8. He is alert and watches you but clings to his mother. On crying, he has marked inspiratory stridor. Select the most likely diagnosis.',
  opts:['Bronchiolitis','HF','Inhaled F.B','CROUP','Pneumonia'],
  expl:'',
  note:'Twin checked (p.494, unanswered, identical stem/options; "barking cough" printed in red text on the answered page only, same words, no wording difference). Options printed lowercase a-e on this page (unlike other pages in this range) -- reproduced as printed. Option d "CROUP" is highlighted yellow and bold/underlined -> key=3. Page prints NO explanation box -- box test per brief §3a run: p.496 opened and found to be a NEW unanswered question (q11, chest X-ray figure, no highlight, no box) -- confirms p.495 is an ordinary boxless question, not an overflow-box case. expl:\'\' is correct as printed.' }

{ n:11, pr:11, p:497, key:1,
  stem:'A 10-year-old African boy woke up four nights ago with a sudden onset of coughing and choking. Since then, he has been noted to be intermittently wheezy. He has wheeze on auscultation of his right chest only. His chest X-ray is shown in the opposite figure. What is the most likely diagnosis?',
  opts:['Pneumonia','Inhaled foreign body','Laryngotracheobronchitis (croup)','Bronchopulmonary dysplasia (BPD)','Chronic asthma'],
  fig:'Frontal chest X-ray on the right side of the slide, single panel, greyscale, patient markers (e.g. "L" laterality marker) visible at the edges; shows lung fields, both hemithoraces visible, no annotation/arrows drawn on it.',
  figAlt:'A frontal chest X-ray.',
  expl:'Unilateral wheeze and sudden onset of symptoms during sleep suggest an inhaled foreign body. X-ray may show air trapping or hyperinflation on the affected side.',
  note:'Twin checked (p.496, unanswered, identical stem/options/figure). Option B "Inhaled foreign body" is highlighted yellow and bold/underlined -> key=1. Printed box present, transcribed verbatim.' }

{ n:12, pr:12, p:499, key:0,
  stem:'A 3-year-old Asian girl has been coughing for 10 days, with fever and lethargy for 2 days. On examination, she has a respiratory rate of 45 breaths/min and crepitations with decreased air entry at her left lung base. Her chest X-ray is shown in the opposite figure. What is the most likely diagnosis?',
  opts:['Pneumonia','Inhaled foreign body','Laryngotracheobronchitis (croup)','Bronchopulmonary dysplasia (BPD)','Chronic asthma'],
  fig:'Frontal chest X-ray on the right side of the slide, single panel, greyscale, showing lung fields with an area of increased opacity/consolidation at the left lung base; no annotation/arrows drawn on it.',
  figAlt:'A frontal chest X-ray.',
  expl:'Fever, tachypnea, localized crepitations, and focal decreased air entry are classic signs of pneumonia. X-ray typically shows consolidation or infiltrates in the affected area.',
  note:'Twin checked (p.498, unanswered, identical stem/options/figure). Option A "Pneumonia" is highlighted yellow and bold/underlined -> key=0. Printed box present, transcribed verbatim.' }

{ n:13, pr:13, p:501, key:4,
  stem:'Jamal, a 10-month-old Asian boy, is brought at 1 a.m. to the Emergency Department because he has woken up with noisy breathing. He has had coryzal symptoms for 2 days and now has a barking cough. On examination, he has a fever of 37.8°C. He is alert and watches you but clings to his mother. On crying, he is noted to have inspiratory stridor. What is the most likely diagnosis?',
  opts:['Bronchiolitis','Pneumonia','Pertussis (whooping cough)','Bronchiolitis','Laryngotracheobronchitis (croup)'],
  expl:'Croup typically follows a viral prodrome and presents with barking cough and inspiratory stridor, especially in the evening or at night. The child appears alert and interactive, which supports a mild-to-moderate croup diagnosis.',
  note:'Twin checked (p.500, unanswered, identical stem/options, including option D duplicating option A as "Bronchiolitis" -- reproduced exactly as printed on both pages, not a transcription error). "barking cough" printed in red text on the answered page only, same words. Option E "Laryngotracheobronchitis (croup)" is highlighted yellow and bold/underlined -> key=4. Printed box present, transcribed verbatim. OBSERVATION for the drafting pass: this vignette is near-identical to n:10 (p.495, "Jamel" 10-month-old boy, same age/timing/symptoms/stridor) but with a different, non-overlapping option set (n:10 used lowercase a-e: Bronchiolitis/HF/Inhaled F.B/CROUP/Pneumonia) and n:10 prints no box while n:13 does -- recorded here, NOT folded; this is a within-file observation, not a cross-file match, decision left to a later pass with the whole section in view.' }

{ n:14, pr:14, p:503, key:0,
  stem:"Jack, a 4-month-old infant, has rapid, labored breathing that has been getting worse over the last 2 days. His mother is concerned as she is struggling to get him to feed. He was born at 27 weeks' gestation, birth weight 979 g, and was discharged home at 3 months of age. On examination, he has a temperature of 37.4°C and a respiratory rate of 60 breaths/min. He is coughing. His chest is hyperinflated with marked intercostal recession. On auscultation, there are generalized fine crackles and wheezes. What is the most likely diagnosis?",
  opts:['Bronchiolitis','Pneumonia','Pertussis (whooping cough)','Bronchiolitis','Laryngotracheobronchitis (croup)'],
  expl:'Bronchiolitis presents in infants with cough, tachypnea, wheeze, and crackles, often caused by RSV. Preterm infants are at higher risk for severe disease, and hyperinflated lungs with respiratory distress are characteristic.',
  note:'Twin checked (p.502, unanswered, identical stem/options, including option D duplicating option A as "Bronchiolitis" -- reproduced exactly as printed on both pages, confirmed on twin, not a transcription error). Numbers confirmed on both pages: 27 weeks\' gestation, birth weight 979 g, temperature 37.4°C, respiratory rate 60 breaths/min. Option A "Bronchiolitis" is highlighted yellow and bold/underlined -> key=0. Printed box present, transcribed verbatim. Same shared-menu shape as n:13 (options B/C/E identical wording, A and D both "Bronchiolitis") -- recorded, not folded.' }

{ n:15, pr:15, p:505, key:1,
  stem:'Fred is a normally well 4-year-old boy. He has had a runny nose and fever for 3 days. He has now developed a cough and difficulty breathing. On examination, his temperature is 39°C. He watches you but sits quietly on his mother’s lap. He has a respiratory rate of 55 breaths/min. His breaths are rapid but shallow with some mild substernal recession. There is no wheeze on auscultation but some coarse crackles at the right base. His oxygen saturation is 91% in air. What is the most likely diagnosis?',
  opts:['Bronchiolitis','Pneumonia','Pertussis (whooping cough)','Bronchiolitis','Laryngotracheobronchitis (croup)'],
  expl:'Fever, localized crackles, tachypnea, and oxygen desaturation point toward pneumonia. The lack of wheeze and presence of coarse crackles at the base further support bacterial pneumonia.',
  note:'Twin checked (p.504, unanswered, identical stem/options, including option D duplicating option A as "Bronchiolitis" -- confirmed on twin, not a transcription error). Numbers confirmed on both pages: temperature 39°C, respiratory rate 55 breaths/min, oxygen saturation 91%. Option B "Pneumonia" is highlighted yellow and bold/underlined -> key=1. Printed box present, transcribed verbatim. Third entry in this range sharing the n:13/n:14 option menu (B/C/E identical wording, A and D both "Bronchiolitis") -- recorded, not folded.' }

{ n:16, pr:16, p:507, key:2,
  stem:'Hannah is a 3-month-old infant who has had a cough for over 2 weeks. She has now developed prolonged bouts of coughing. She has started to vomit at the end of the bout of coughing. Her temperature is 38°C. Her respiratory rate is 25 breaths/min. On auscultation of her chest, there are some scattered crackles. What is the most likely diagnosis?',
  opts:['Bronchiolitis','Pneumonia','Pertussis (whooping cough)','Bronchiolitis'],
  expl:'Pertussis typically presents with paroxysms of coughing followed by post-tussive vomiting, especially in young infants. The prolonged cough history and classic vomiting pattern are key diagnostic clues.',
  note:'Twin checked (p.506, unanswered, identical stem/options). ⚠ Only FOUR options printed here (A-D), unlike n:13/14/15\'s five (A-E) -- confirmed on both this page and its twin, not a transcription omission; option D again duplicates option A as "Bronchiolitis", option E ("Laryngotracheobronchitis (croup)") is simply absent from this printing. Numbers confirmed on both pages: temperature 38°C, respiratory rate 25 breaths/min. Option C "Pertussis (whooping cough)" is highlighted yellow and bold/underlined -> key=2. Printed box present, transcribed verbatim.' }

{ n:17, pr:17, p:509, key:2,
  stem:'Sara, an 8-month-old Asian girl, presents with a 3-day history of being unsettled. She has had coryzal symptoms and a mild fever. On examination of the right ear canal, you note a bulging red tympanic membrane. Her respiratory rate is 25 breaths/min, and there is no chest recession.\n\nWhich of the following is the most appropriate next step in the management of this patient?',
  opts:['Oral corticosteroid','Inhaled salbutamol via metered-dose inhaler and spacer','Oral antipyretic/analgesic','Continuous positive airway pressure (CPAP)','Endotracheal intubation and ventilation'],
  expl:'The presentation suggests acute otitis media. Initial management in mild cases includes oral antipyretics and analgesics for symptom relief, especially if the child is otherwise stable.',
  note:'Twin checked (p.508, unanswered, identical stem/options; stem prints as two paragraphs on both pages, reproduced with a blank line between them). No figure on either page. Numbers confirmed: respiratory rate 25 breaths/min. Option C "Oral antipyretic/analgesic" is highlighted yellow and bold/underlined -> key=2. Printed box present, transcribed verbatim. THIS IS THE LAST ENTRY OF PART A (n:1-17, pp.477-509).' }
