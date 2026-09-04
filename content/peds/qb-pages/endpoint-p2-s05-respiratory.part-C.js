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
  note:'p.543 answered, twin p.542 unanswered checked, identical stem/options. Highlighted option is "c. Leukotriene receptor antagonist (Montelukast)" -> key 2. Box present, small bordered box bottom-right.' }

{ n:35, pr:35, p:545, key:3,
  stem:'A 3-year-old boy is brought to the emergency department with a history of sudden-onset noisy breathing. Auscultation reveals significant wheeze. He is initially managed with nebulized bronchodilators, but there is no improvement. What is the most likely diagnosis?',
  opts:['Acute severe asthma','Anaphylaxis','C1 esterase deficiency','Inhaled foreign body','Viral-induced wheeze'],
  expl:'A sudden onset of wheezing and lack of response to bronchodilators suggest a foreign body aspiration, often causing localized wheeze.',
  note:'p.545 answered, twin p.544 unanswered checked, identical stem/options (5 options). Highlighted option is "d. Inhaled foreign body" -> key 3. Box present, bordered box bottom-centre.' }

{ n:36, pr:36, p:547, key:3,
  stem:'A 5-year-old child admitted with an acute exacerbation of asthma is ready for discharge from the pediatric ward. He has never required admission to HDU. He has been using his salbutamol inhaler on most days over the past 3 months and frequently wakes with nocturnal cough. His current regular medication consists of beclometasone 100 micrograms twice daily and salbutamol as required. His inhaler technique is good, and there are no concerns about compliance. What, if any, changes would you make to his current medication?',
  opts:['Continue current treatment','Add long-acting beta-2 agonist (e.g., salmeterol)','Add leukotriene receptor antagonist (Montelukast)','Increase steroid inhaler to 400 micrograms per day','Increase steroid inhaler to 200 micrograms per day'],
  expl:'Step-up therapy with a moderate increase in inhaled steroids is appropriate before considering additional agents.',
  note:'p.547 answered, twin p.546 unanswered checked, identical stem/options (5 options). Highlighted option is "d. Increase steroid inhaler to 400 micrograms per day" -> key 3. Box present, mid-page bordered box overlapping option a line on this printing.' }

{ n:37, pr:36, p:549, key:2,
  stem:'In a child whose asthma is not controlled on regular inhaled steroids and occasional beta-2 agonist, the single next best action would be to:',
  opts:['Add long-acting beta-2 agonist','Increase the dose of inhaled steroid','Check the inhaler technique','Add a leukotriene inhibitor','Add a short course of oral steroids'],
  expl:'Before stepping up asthma treatment, it\'s essential to ensure that the child is using their inhaler correctly and consistently. Poor technique or poor adherence is a common cause of poor asthma control and must be addressed before making medication changes.',
  note:'p.549 answered, twin p.548 unanswered checked, identical stem/options (5 options). Printed number repeats "36" from p.547 -- pr is not an identifier per brief, distinct question, n advances to 37 regardless. Highlighted option is "c. Check the inhaler technique" -> key 2. Box present, bordered box centred below options.' }

{ n:38, pr:37, p:551, key:0,
  stem:'A 10-year-old boy presents with a 1-year history of persistent cough that is worse at night and after physical activity. There is no fever, and his chest is clear on auscultation. His symptoms improve temporarily with salbutamol inhaler use. Which of the following tests is most likely to assist in making the diagnosis?',
  opts:['Spirometry','Chest X-ray','Sputum culture','Sweat chloride test'],
  expl:'Spirometry assesses reversible airway obstruction and is the best test for confirming asthma in a child with typical symptoms.',
  note:'p.551 answered, twin p.550 unanswered checked, identical stem/options (4 options). Highlighted option is "a. Spirometry" -> key 0. Box present, bordered box lower-centre overlapping option d line.' }

{ n:39, pr:38, p:553, key:3,
  stem:'Which of the following statements is true in acute bronchiolitis?',
  opts:['Wheezing is due to spasm of smooth muscles of bronchioles','Inhaled salbutamol is the treatment of choice','Chest X-ray is diagnostic','Feeding difficulties are common','Antibiotics are indicated in severe cases'],
  expl:'Feeding problems are frequent due to nasal congestion and increased work of breathing. Salbutamol and antibiotics are generally not effective.',
  note:'p.553 answered, twin p.552 unanswered checked, identical stem/options (5 options). Highlighted option is "d. Feeding difficulties are common" -> key 3. Box present, bordered box below options.' }

{ n:40, pr:39, p:555, key:3,
  stem:'Which of the following is NOT a complication of whooping cough?',
  opts:['Pneumonia','Intracranial hemorrhage','Convulsions','Hemolytic anemia','Subconjunctival hemorrhage'],
  expl:'While pertussis can cause pneumonia, convulsions, and hemorrhages, hemolytic anemia is not a recognized complication.',
  note:'p.555 answered, twin p.554 unanswered checked, identical stem/options (5 options). Highlighted option is "d. Hemolytic anemia" -> key 3. Box present, bordered box below options.' }

{ n:41, pr:40, p:557, key:2,
  stem:'In neonatal sepsis, which of the following statements is TRUE?',
  opts:['A heart murmur is usually present','Early-onset sepsis is usually acquired via the placenta following maternal infection','Pneumonia is the most common presentation in early-onset sepsis','High fever is commonly present','A CBC is done to detect neutrophilia'],
  expl:'Early-onset neonatal sepsis, often acquired during delivery, commonly presents with pneumonia.',
  note:'p.557 answered, twin p.556 unanswered checked, identical stem/options (5 options). Highlighted option is "c. Pneumonia is the most common presentation in early-onset sepsis" -> key 2. Box present, bordered box below options. Content is neonatal sepsis, off-topic for a section titled "Respiratory disorders" -- printed here regardless, staged as-is.' }

{ n:42, pr:41, p:559, key:0,
  stem:'Which of the following is considered an asthma preventer?',
  opts:['Inhaled corticosteroids','Short-acting beta agonists (SABA)','Oral antihistamines','Intravenous magnesium sulfate'],
  expl:'Inhaled corticosteroids reduce airway inflammation and are the mainstay of long-term asthma prevention. They help decrease the frequency and severity of symptoms when used regularly.',
  note:'p.559 answered, twin p.558 unanswered checked, identical stem/options (4 options). Highlighted option is "a. Inhaled corticosteroids" -> key 0. Box present, bordered box below options.' }

{ n:43, pr:42, p:561, key:0,
  stem:'Newborns and young infants are NOT protected through maternal antibodies against which of the following diseases?',
  opts:['Tuberculosis','Poliomyelitis','Measles','Mumps','Tetanus'],
  expl:'Maternal antibodies (IgG) cross the placenta and provide passive immunity to the newborn against viral diseases (e.g., measles, mumps, polio) and bacterial toxoid-induced immunity (e.g., tetanus). However, tuberculosis (TB) is mediated by cell-mediated immunity, which is not transferred via maternal antibodies, leaving newborns unprotected.',
  note:'p.561 answered, twin p.560 unanswered checked, identical stem/options (5 options). Highlighted option is "a. Tuberculosis" -> key 0. Box present, bordered box right side overlapping options c/d/e lines. Content is immunology/maternal antibodies, off-topic for "Respiratory disorders" -- staged as printed.' }

{ n:44, pr:43, p:563, key:3,
  stem:'Sign of impending respiratory failure:',
  opts:['Increased respiratory effort','Increased respiratory rate','Chest retractions','Confusion and exhaustion'],
  expl:'Altered mental status and fatigue indicate that the child is tiring and unable to sustain respiratory effort, signaling imminent respiratory failure.',
  note:'p.563 answered, twin p.562 unanswered checked, identical stem/options (4 options). Highlighted option is "d. Confusion and exhaustion" -> key 3. Box present, bordered box below options.' }

{ n:45, pr:44, p:565, key:0,
  stem:'A 5-year-old boy presents with a 1-day history of sore throat and a high fever of 41°C. Over the past 8 hours, he has developed progressive difficulty breathing and now has quiet stridor. He is drooling and unable to swallow his saliva. He has never received any vaccinations. Which of the following is the most likely diagnosis?',
  opts:['Epiglottitis','Croup','Tonsillitis','Retropharyngeal abscess'],
  expl:'Unvaccinated children are at risk of Haemophilus influenzae type b epiglottitis, which presents with high fever, drooling, quiet stridor, and difficulty swallowing. This is a medical emergency.',
  note:'p.565 answered, twin p.564 unanswered checked, identical stem/options (4 options). Highlighted option is "a. Epiglottitis" -> key 0. Box present, bordered box to the right of options a/b/c.' }

{ n:46, pr:45, p:567, key:1,
  stem:'A 5-year-old boy had several previous admissions for virally induced wheeze. He has been using a beta-agonist inhaler at home as needed. He presents to the GP, and his mother reports that he becomes wheezy with changes in temperature, laughter, exercise, and viral illnesses. He uses his inhaler three times per week and coughs on most nights. What is the next best step in his management?',
  opts:['Increase the number of puffs of his beta-agonist','Add a low-dose steroid inhaler','Add a high-dose steroid inhaler','Add a long-acting beta-agonist','Add ipratropium inhaler'],
  expl:'Frequent symptoms and night-time cough suggest persistent asthma, requiring a preventer. Starting a low-dose inhaled corticosteroid is the next appropriate step.',
  note:'p.567 answered, twin p.566 unanswered checked, identical stem/options (5 options). Highlighted option is "b. Add a low-dose steroid inhaler" -> key 1. Box present, bordered box to the right of options b/c.' }

{ n:47, pr:46, p:569, key:0,
  stem:'What is the most common cause of chronic wet cough in children?',
  opts:['Persistent bacterial bronchitis','Bacterial bronchitis','Viral bronchitis','Asthma'],
  expl:'A chronic, wet-sounding cough in children is often due to persistent bacterial bronchitis, especially in the absence of other red flags. It typically responds well to appropriate antibiotics.',
  note:'p.569 answered, twin p.568 unanswered checked, identical stem/options (4 options). Highlighted option is "a. Persistent bacterial bronchitis" -> key 0. Box present, bordered box below options.' }

{ n:48, pr:47, p:571, key:3,
  stem:'A 2-year-old patient presents with fever, cough, and breathlessness for 2 days. The condition was preceded by a runny nose and mild cough one week ago. On examination, the patient appears ill: rectal temperature 39.6°C, HR 145/min, RR 75/min. Nasal flaring is observed. Chest auscultation reveals bilateral crackles. What is the first investigation to be done?',
  opts:['Echocardiography','Sputum culture','C-reactive protein','Plain chest X-ray','Chest CT'],
  expl:'A chest X-ray is the initial imaging tool to evaluate for pneumonia or other lower respiratory pathology in a sick child with fever and bilateral crackles.',
  note:'p.571 answered, twin p.570 unanswered checked, identical stem/options (5 options). Vital signs 39.6°C / HR 145/min / RR 75/min read identically on both pages. Highlighted option is "d. Plain chest X-ray" -> key 3. Box present, bordered box right of options b/c.' }

{ n:49, pr:48, p:573, key:4,
  stem:'A 3-year-old child presents with a sudden, dry, loud, repetitive cough. Chest examination reveals poor air entry and localized wheezing over the right side. What is the most likely diagnosis?',
  opts:['Tension pneumothorax','Acute asthma exacerbation','Severe complicated pneumonia','Pulmonary TB','Inhaled bronchial foreign body'],
  expl:'A sudden onset of cough and localized wheeze suggests an aspirated foreign body, especially if air entry is reduced on one side. This is common in toddlers.',
  note:'p.573 answered, twin p.572 unanswered checked, identical stem/options (5 options). Highlighted option is "e. Inhaled bronchial foreign body" -> key 4. Box present, bordered box below options. This is the last entry of my range; p.574 rendered as boundary proof (see header) and confirms clean handoff to part D at p.575.' }
