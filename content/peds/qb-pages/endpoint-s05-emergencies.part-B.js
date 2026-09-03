/* Pediatrics ENDPOINT part 1, section 5 "Pediatrics Emergencies" -- staging half B.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part1.pdf, PDF page = printed page.
   Range: n=32..61, pp.640-701. Fragments only -- no array wrapper, no var, no commas between
   entries; merge-parts-ep.js builds the header and the array. See s04 part-A for entry shape. */

{ n:32, pr:33, p:640, key:0,
  stem:'Which of the following is true regarding capillary refill time (CRT)?',
  opts:['It is affected by cold environment','It is assessed by pressing on the forehead','It is not prolonged in compensated (early) shock','It is considered prolonged if > 4 seconds'],
  expl:'CRT is influenced by temperature and perfusion status. It is normally assessed on the sternum or fingertip and considered prolonged if >2–3 seconds, not only >4 seconds.',
  note:'Four options printed (a-d), confirmed uncropped on the image.' }

{ n:33, pr:34, p:642, key:0,
  stem:'Roberto is a 2.5-year-old boy. He pulled a chip pan off the cooker and has been extensively burnt. He is rushed to the nearest Children’s Emergency Department. His airway, breathing and circulation are satisfactory. His burns are distributed on his body as shown. Most of the burnt area is now blistering and mottled in colour, with a few white areas. Intravenous analgesia is given. Roberto is much more settled following intravenous analgesia. From the list of possible management options below, which should be undertaken first?',
  opts:['Commence intravenous 0.9% saline','Cover the burns with sterile dressings','Intravenous antibiotics','Intubation and artificial ventilation','Place affected areas in cold water'],
  expl:'With extensive burns, the most urgent step is fluid resuscitation to prevent shock. Covering the burns is important, but fluids must be started first to maintain perfusion.',
  note:'⚠️ ESCALATE: stem says "His burns are distributed on his body as shown" but no figure/diagram is printed on this page image -- only the two text boxes (stem/options and explanation). Confirmed no image present. Also: this stem is a longer variant of the same "Roberto" extensive-burn vignette as n3 in endpoint-s04-accidents.part-A.js (p.561), which asks the identical final question with the same five options and the same key (0.9% saline first). Recorded as a possible self-reprint/expansion across sections -- not folded here per instructions.' }

{ n:34, pr:35, p:644, key:4,
  stem:'Which of following is most common cause of pediatric cardiopulmonary arrest?',
  opts:['cardiac arrhythmias','metabolic anomalies','overwhelming infections','trauma','respiratory problem'],
  expl:'In children, cardiac arrest usually follows prolonged hypoxia and respiratory failure, not primary cardiac disease. This makes early recognition and correction of respiratory issues critical.',
  note:'This is the "thin" flag page (unanswered twin p.643 flagged thin by the index). Read hard: five options (a-e) are printed in full, none dropped.' }

{ n:35, pr:36, p:646, key:4,
  stem:'A 1-year-old girl is brought to the emergency room with a history of persistent vomiting and loose, watery stools. Which of the following would be a sign of uncompensated shock?',
  opts:['Capillary refilling time greater than 3 sec.','Heart rate greater than 120 beats/min','Cold extremities','Respiratory rate greater than 40 breaths/min.','Low blood pressure.'],
  expl:'Children compensate with tachycardia and cool extremities; hypotension appears late and signals uncompensated (decompensated) shock. It is therefore the most ominous sign.',
  note:'' }

{ n:36, pr:37, p:648, key:1,
  stem:'Regarding resuscitative effort, the most important goal is:',
  opts:['restoration of age-appropriate heart rate','appropriate movement of the chest wall','auscultation of equal breath sounds on both lungs','adequate oxygen delivery to the tissues'],
  expl:'',
  note:'⚠️ ESCALATE: no boxed text explanation is printed. Instead the lower half of the page prints an illustration (cartoon figures labelled "Cardiac arrest" and "Asphyxial arrest", a photo of a crying newborn, and a caption banner reading "Good Chest Wall Movement Is The Key Of Neonatal Resuscitation") -- functioning as the explanation but not in the verbatim boxed-text format seen elsewhere. Left expl empty per "no printed box" rule; not set as fig since it sits after the options and is not needed to answer the question, but flagging for the drafting pass / parent to decide whether the caption text should be captured. Four options printed (a-d), confirmed uncropped.' }

{ n:37, pr:38, p:650, key:1,
  stem:'A child weight 8kg presents has had vomiting and been off his feeds for 2 days, he presented with shock and needs a bolus of normal saline to treat his shock. Calculate volume of fluid you would give him',
  opts:['40 ml','80 ml','320 ml','800 ml'],
  expl:'This question actually came once before in the old exam format and caused some confusion. You multiply the weight by 10 or 20. So, if you find 80, it’s correct ✅, or if you find 160, that’s also correct ✅',
  note:'⚠️ NUMBER FLAG: explanation states 160 ml is also an acceptable answer (8kg x 20 ml/kg), but 160 ml is not printed among the four options (40/80/320/800). Highlighted key is b (80 ml), matching 8kg x 10 ml/kg. options-differ flag on this page checked against the image and is spurious -- all four options read clearly, no OCR mismatch found. Four options printed (a-d), confirmed uncropped.' }

{ n:38, pr:39, p:652, key:0,
  stem:'A 6-year-old girl presents with vomiting and abdominal pain. She is dehydrated, her blood glucose is 13 mmol/L, and her blood pH is 7.2. What is the most appropriate initial management?',
  opts:['IV bolus of normal saline','IV infusion of normal saline','IV insulin infusion','Sodium bicarbonate administration'],
  expl:'In a child with DKA (vomiting, abdominal pain, hyperglycemia, acidosis), the first priority is fluid resuscitation.',
  note:'Four options printed (a-d), confirmed uncropped on the image.' }

{ n:39, pr:40, p:654, key:4,
  stem:'A child with obstructive shock may suffer the following:',
  opts:['Sepsis','Anaphylaxis','Gastroenteritis with severe dehydration','Diabetic ketoacidosis','Tension pneumothorax'],
  expl:'Obstructive shock occurs when mechanical obstruction prevents venous return or cardiac output, as in tension pneumothorax or cardiac tamponade. Sepsis and dehydration cause distributive or hypovolemic shock, not obstructive.',
  note:'This is the second "thin" flag page (unanswered twin p.653 flagged thin by the index). Read hard: five options (a-e) are printed in full, none dropped.' }

{ n:40, pr:41, p:656, key:4,
  stem:'A term male infant is delivered vaginally to a 22-year-old mother. Immediately after birth he is noted to have a scaphoid abdomen, cyanosis, and respiratory distress. Heart sounds are heard on the right side of the chest, and the breath sounds seem to be diminished on the left side. Which of the following is the most appropriate next step in his resuscitation?',
  opts:['Administer IV bicarbonate.','Administer IV naloxone.','Initiate bag-and-mask intubation.','Initiate chest compressions immediately.','Intubate with an endotracheal tube.'],
  expl:'This is congenital diaphragmatic hernia, where bag-mask ventilation can worsen gas insufflation of the stomach. Immediate intubation with ET tube is the safest airway management.',
  note:'options-differ flag on this page checked against the image and is spurious -- all five options read clearly, no OCR mismatch found.' }

{ n:41, pr:42, p:658, key:4,
  stem:'A 37-week gestation boy is born after an uncomplicated pregnancy to a 33-year-old mother. At birth he was lethargic and had an HR of 40. Oxygen was administered via bag and mask, and he was intubated; his HR remained at 40 beats/min. Which of the following is the most appropriate next step?',
  opts:['Administer IV bicarbonate.','Administer IV atropine.','Administer IV epinephrine.','Administer IV calcium chloride.','Begin chest compressions.'],
  expl:'If the HR remains <60/min after effective ventilation and oxygen, chest compressions are the next step. Epinephrine is given if HR does not improve after compressions.',
  note:'' }

{ n:42, pr:43, p:660, key:0,
  stem:'A term female infant is born vaginally after an uncomplicated pregnancy. She appears normal but has respiratory distress when she stops crying. When crying she is pink; when not she makes vigorous respiratory efforts but becomes dusky. Which of the following is the likely explanation for her symptoms?',
  opts:['Choanal atresia','Diaphragmatic hernia','Meconium aspiration','Neonatal narcosis'],
  expl:'Newborns are obligate nasal breathers. In bilateral choanal atresia, they turn pink while crying (mouth breathing) but become cyanotic and distressed when quiet (trying to breathe through blocked nares).',
  note:'Four options printed (A-D), confirmed uncropped on the image.' }

{ n:43, pr:44, p:662, key:3,
  stem:'A 25-day-old female infant is brought to the emergency department for fever of 101°F (38.3°C) at home. The baby was born vaginally at full term and was appropriate for gestational age. Maternal GBS was negative. Apgar scores were 8 and 9. The mother noticed the baby has had decreased feeding over the previous few days and has been sleeping more. Which of the following is the most appropriate initial choice of antibiotics for this infant?',
  opts:['Oral amoxicillin','Vancomycin','Ampicillin','Ampicillin and cefotaxime','Ampicillin and gentamicin'],
  expl:'This patient may have late-onset bacterial infection, likely GBS; she should be admitted for sepsis evaluation and IV antibiotics. The best initial treatment in this age group is broad-spectrum antibiotics such as ampicillin and cefotaxime. If cultures are positive for GBS, antibiotic therapy can be narrowed to penicillin G.',
  note:'Five options printed (A-E), confirmed uncropped on the image.' }

{ n:44, pr:45, p:664, key:2,
  stem:'A 12-hour-old infant who has been feeding poorly becomes tachypneic with grunting. Which of the following initial tests has the lowest diagnostic yield?',
  opts:['Chest radiograph','Complete blood count','Urine culture','Blood culture','Glucose level'],
  expl:'In the first 24 hours, sepsis workup includes blood culture, CBC, glucose, and CXR, but urine culture is not useful since UTIs rarely present this early. It has the lowest diagnostic yield.',
  note:'' }

{ n:45, pr:46, p:666, key:3,
  stem:'A term male is born via repeat cesarean section to a 30-year-old woman. Immediately after birth he has mild respiratory distress. Chest auscultation in the delivery room reveals clear breath sounds. Which of the following is the most appropriate next step?',
  opts:['Endotracheal intubation with direct suction.','Begin intravenous antibiotic therapy.','Deliver surfactant therapy.','Observe and administer supplemental oxygen as needed.','Bag-mask ventilation.'],
  expl:'This is likely transient tachypnea of the newborn (TTN), common after C-section due to delayed lung fluid clearance. Management is supportive with oxygen and observation.',
  note:'' }

{ n:46, pr:48, p:668, key:2,
  stem:'A term male is born vaginally to a 22-year-old primigravida woman; the pregnancy was uncomplicated. Just prior to delivery, fetal bradycardia was noted, and at delivery thick meconium is found. The infant has hypotonia and bradycardia. Which of the following is the first step in resuscitation?',
  opts:['Administration of epinephrine through endotracheal tube','Bag-mask ventilation','Endotracheal intubation with direct suction','Oxygen delivered by cannula in close proximity to the nares','Tracheostomy'],
  expl:'In a depressed neonate with meconium, the airway should be suctioned immediately before providing ventilation. Bag-mask ventilation would push meconium deeper into the lungs.',
  note:'⚠️ pr/n divergence begins here: page prints 48, not 47 -- confirmed on the image, the printed number 47 is skipped by the book entirely (the unanswered twin p.667 also prints 48, per brief).' }

{ n:47, pr:49, p:670, key:2,
  stem:'A newborn female is delivered by C-section to a 23-year-old mother after 29 weeks of gestation. She has poor respiratory effort at time of delivery with cyanosis, requiring resuscitation and eventually intubated. On examination in the delivery room, the infant continues to have subcostal retractions and is difficult to ventilate. What is the next BEST step in management?',
  opts:['Obtain a chest x-ray.','Administer albuterol.','Administer surfactant.','Closely monitor clinically.','Obtain an echocardiogram (ECHO)'],
  expl:'Preterm infants often lack surfactant, leading to respiratory distress syndrome. Intubated infants with persistent distress benefit most from surfactant replacement.',
  note:'' }

{ n:48, pr:50, p:672, key:3,
  stem:'Which of the following features makes sudden infant death syndrome (SIDS) likely as the cause of a sudden death?',
  opts:['An infant found with a bulging fontanelle and facial bruise.','An 18-month-old girl who had a prior sibling that at 1 year of age also died suddenly and unexpectedly.','A 5-month-old infant with dysmorphic features and an enlarged heart found on postmortem examination.','A 3-month-old boy whose parents smoke in the home but were using a high-efficiency particulate arrestance (HEPA) air purifier in his room, a baby monitor, placing him on his side to sleep so he wouldn’t aspirate any refluxed formula, and using a special foam wedge pillow to keep him in that position.','All the above features make SIDS likely as the cause of a sudden death.'],
  expl:'',
  note:'No explanation box printed on this page. options-differ flag checked against the image and is spurious -- all five options read clearly, no OCR mismatch found; option D is simply the longest, wrapping to four lines.' }

{ n:49, pr:51, p:675, key:0,
  stem:'A mother presents to the emergency room with her 6-month-old daughter late at night after she noticed her to be breathing fast for 1 minute, then seemed to stop breathing for 1 minute, and became limp, pale, and unresponsive. The mother attempted to give mouth-to-mouth breaths for a few seconds and her daughter then began to cry and her breathing and appearance normalized. Your next best step is to:',
  opts:['Perform a thorough history and physical examination, obtain basic laboratory tests, and admit to the hospital for workup of an ALTE.','Reassure the mother that her infant looks healthy and because the symptoms have resolved, discharge home.','Perform a complete blood count (CBC), chest x-ray (CXR), and discharge home if all are normal.','Instruct the mother to follow-up with the pediatrician to get an apnea monitor and pulse oximeter so that she will know if similar symptoms occur again and if they are actually life threatening.','Tell the mother this was a near SIDS event and instruct her on measures to prevent SIDS..'],
  expl:'',
  note:'No explanation box printed on this page. Page parity flips here (odd-numbered PDF page after the 673 notes page), as expected per brief -- not a missing page.' }

{ n:50, pr:52, p:678, key:1,
  stem:'You are going to counsel parents of a newborn about prevention of SIDS. Which of the following statements about ways to reduce SIDS is accurate?',
  opts:['Infants should sleep in the same bed as the parent or on their chest so they can be closely monitored for apnea.','Infants should sleep on their back on a firm mattress with no accompanying soft bedding or objects, including no devices advertised to maintain the sleep position.','Pacifiers should be avoided because they can obstruct the baby’s airflow during respiration.','Keep the infant dressed in several layers and covered with a heavy blanket.','Infants should be given acetaminophen before their scheduled vaccines in order to prevent an undetected febrile seizure and resulting SIDS.'],
  expl:'',
  note:'No explanation box printed on this page.' }

{ n:51, pr:53, p:681, key:3,
  stem:'The investigation of an unexpected infant death includes a history, a postmortem examination, and which of the following?',
  opts:['DNA studies','Maternal drug screen','Analysis of parental electrocardiograms','A death scene investigation','Stool studies'],
  expl:'Standard SIDS investigation includes history, autopsy, and examination of the death scene. This helps rule out neglect, trauma, or environmental hazards.',
  note:'Page parity flips back here (odd-numbered PDF page after the 679 notes page), as expected per brief -- not a missing page.' }

{ n:52, pr:54, p:683, key:2,
  stem:'A 36-week gestation infant is delivered via cesarean section because of macrosomia and fetal distress. The mother has class D pregestational diabetes (insulin dependent, with vascular disease); her hemoglobin A1C is 15% (normal 7%). This infant is at risk for hypocalcemia, cardiomyopathy, polycythemia, and which of the following?',
  opts:['Congenital hip dislocation','Dacryostenosis','Respiratory distress syndrome','Hyperglycemia','Pneumothorax'],
  expl:'Hyperinsulinemia in the fetus delays surfactant production, predisposing IDM infants to RDS, despite being often macrosomic.',
  note:'⚠️ NUMBER FLAG: stem gives maternal hemoglobin A1C as 15% against a stated normal of 7% -- both figures read clearly on the image, no ambiguity, recorded verbatim.' }

{ n:53, pr:55, p:685, key:0,
  stem:'A 1-month-old boy has a fever of 102.7 °F (39.3 °C), is irritable, has diarrhea, and has not been eating well. On examination, he has an immobile, dull, and red TM that has pus behind it. Which of the following is the most appropriate course of action?',
  opts:['Admission to the hospital with complete sepsis evaluation','Intramuscular ceftriaxone and close outpatient follow-up','Oral amoxicillin-clavulanate','Oral cefuroxime','High-dose oral amoxicillin'],
  expl:'Infants <2 months with fever and systemic illness require full sepsis workup and admission. Outpatient antibiotics are not safe in this age group.',
  note:'⚠️ pr collision: this page prints 55, and so does n54 (p.687) -- two genuinely different questions sharing one printed number, as flagged by the brief. This question (n53) is about a 1-month-old boy with fever, diarrhea, and acute otitis media (immobile, dull, red TM with pus behind it) requiring sepsis workup and admission -- distinct stem, options, and key from n54. Confirmed as two separate questions, not a duplicate.' }

{ n:54, pr:55, p:687, key:2,
  stem:'An 11-month-old infant appears unwell with sunken eyes and reduced skin turgor. Capillary refill time (CRT) was found to be 5 seconds and extremities were cold. Which of the following would be the first step in the proper management of this infant?',
  opts:['Breastfeeding','Oral rehydration solution','IV normal saline','Oral antibiotic'],
  expl:'Any child presenting with manifestations of shock resuscitation with IV normal saline 20 ml/kg. Begin treatment by resuscitation with IV normal saline 20 ml/kg.',
  note:'⚠️ pr collision (second of the pair): this page also prints 55, matching n53 (p.685). Confirmed genuinely distinct question -- an 11-month-old with signs of hypovolemic shock (sunken eyes, poor skin turgor, prolonged CRT, cold extremities) requiring IV fluid resuscitation, with different stem, options, and key from n53. Four options printed (A-D), confirmed uncropped.' }

{ n:55, pr:56, p:689, key:1,
  stem:'An 18-month-old boy presents with 3 days of vomiting and diarrhea. The vomiting has now settled but he continues to have loose stools (he had about eight loose stools in the last 24 hours). His mucous membranes are dry, he has sunken eyes and appears lethargic. His skin turgor is reduced. His extremities are warm and capillary refill time is normal. What is the next step in management?',
  opts:['Analgesic / antipyretic','Oral rehydration solution','IV normal saline','Oral antibiotic'],
  expl:'Any child presenting with manifestations of dehydration: Oral rehydration solution.',
  note:'This is the known self-reprint pair with n59 (p.697), per brief. Staged in full here regardless -- folding is a separate pass.' }

{ n:56, pr:57, p:691, key:4,
  stem:'Which of the following is the best intervention that effectively prevents the occurrence of sudden infant death syndrome (SIDS)?',
  opts:['Feet to foot of cot','Keeping baby in parent’s room until 6 months of age','Keeping room cool to prevent overheating','Parents not smoking in the same room as infant','Supine sleeping'],
  expl:'The best intervention that effectively prevents SIDS: Supine sleeping.',
  note:'' }

{ n:57, pr:58, p:693, key:3,
  stem:'A 3-year-old girl is \'blue-lighted\' into the local emergency department with reduced consciousness. Her mother informs the paramedic that her daughter has been unwell for the last 8 days with vomiting and profuse diarrhea. On arrival, she is apyrexial, has a heart rate of 170 beats per minute and a respiratory rate of 20 per minute. Her systolic blood pressure is 75 mmHg and she has a capillary refill time of 5 seconds. She is barely responsive to pain. Resuscitation begins and a blood gas reveals a metabolic acidosis.What is the most likely clinical syndrome?',
  opts:['Anaphylactic shock','Septicemic shock','Cardiogenic shock','Hypovolemic shock'],
  expl:'The child has a history of prolonged diarrhea and vomiting with signs of poor perfusion (tachycardia, delayed capillary refill, hypotension). These findings are most consistent with hypovolemic shock from dehydration.',
  note:'Four options printed (A-D), confirmed uncropped on the image.' }

{ n:58, pr:59, p:695, key:4,
  stem:'A 3-year-old girl was at a birthday party. She suddenly developed swollen cheeks and lips and a widespread urticarial rash. She is rushed to the nearby general practice surgery, where it is noted that her breathing is very noisy. She is distressed and frightened. On auscultation, she has widespread wheeze. Which medication would you give first?',
  opts:['Intramuscular antihistamine','Intravenous hydrocortisone','Oral antihistamine','Oral corticosteroid','Intramuscular adrenaline'],
  expl:'First-line treatment for anaphylaxis is IM adrenaline. Antihistamines and steroids are supportive but not lifesaving.',
  note:'options-differ flag on this page checked against the image and is spurious -- all five options read clearly, no OCR mismatch found.' }

{ n:59, pr:60, p:697, key:4,
  stem:'An 18-month-old boy presents with 3 days of vomiting and diarrhea. The vomiting has now settled, but he continues to have loose stools (he had about eight loose stools in the last 24 hours). His mucous membranes are dry, he has sunken eyes, and appears lethargic. His skin turgor is reduced. His extremities are warm and capillary refill time is normal. What is the NEXT step in management?',
  opts:['Antipyretic/analgesia','Intravenous bolus of 20 mL/kg of normal saline','Nasogastric rehydration therapy','Oral antibiotic','Oral rehydration solution'],
  expl:'Children with diarrhea and moderate dehydration but no shock should be rehydrated with ORS. IV fluids are reserved for cases with shock (cold extremities, prolonged CRT, weak pulses).',
  note:'This is the known self-reprint pair with n55 (p.689), per brief -- near-identical vignette (same 18-month-old boy, punctuation and phrasing differ slightly: "What is the next step" vs "What is the NEXT step"). The option ladder differs from n55: this page prints 5 options (A-E) vs n55\'s 4 (A-D), with more granular distractors; both keys land on oral rehydration. Staged in full -- folding is a separate pass.' }

{ n:60, pr:61, p:699, key:2,
  stem:'A 1-year-old infant arrives to the emergency department with history of diarrhea and poor fluid intake since one day. Your quick examination reveals a lethargic child; his heart rate is 180 beats per minute, his respiratory rate is 30 breaths per minute, and his blood pressure is low for age. He has poor skin turgor, 5-second capillary refill, and cool extremities. Which of the following fluids is most appropriate management for his condition?',
  opts:['IV Dextrose 5%','Oral rehydration solution','0.9% sodium chloride','Whole blood','IV sodium bicarbonate'],
  expl:'The child has hypovolemic shock due to dehydration, best treated with IV isotonic saline bolus. Oral rehydration is insufficient in this emergency',
  note:'' }

{ n:61, pr:62, p:701, key:2,
  stem:'Which of the following statements concerning shock is TRUE?',
  opts:['Dehydration due to gastroenteritis can cause shock due to maldistribution of fluid','Bradycardia occurs in compensated shock','Mottled, pale and cold skin is a sign of compensated shock','Anaphylaxis can cause shock due to hypovolemia','Decreased urine output is a sign of decompensated shock'],
  expl:'',
  note:'⚠️ ESCALATE: no boxed text explanation is printed. Instead a two-column reference table is printed below the options, titled "Early (Compensated)" and "Late (Decompensated)", listing: Early column -- Tachypnea, Tachycardia, Decreased skin turgor, Sunken eyes and fontanelle, Delayed capillary refill (>2 sec), Mottled/pale/cold skin, Core-peripheral temperature gap (>4°C), Decreased urinary output (this last row highlighted yellow); Late column -- Acidotic (Kussmaul) breathing, Bradycardia, Confusion/depressed cerebral state, Blue peripheries, Absent urine output (highlighted yellow), Hypotension. This table functions as the explanation but is not verbatim prose; flagging for the drafting pass on whether/how to capture it. Note the table places "Mottled, pale, cold skin" under Early/Compensated, consistent with the highlighted key C, and places "Decreased urinary output" under Early and "Absent urine output" under Late -- i.e. the table appears to contradict distractor E ("Decreased urine output is a sign of decompensated shock"), supporting C as correct. options-differ flag on this page checked against the image and is spurious -- all five options read clearly, no OCR mismatch found. Last page in this half; page prints 62, consistent with 61 questions total as expected per brief.' }
