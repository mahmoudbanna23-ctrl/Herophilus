/* ===========================================================================
   ENDPOINT — Pediatrics endpoint part1.pdf — SECTION 5 "Pediatrics Emergencies",
   PART A. Verbatim staging record. Written 2026-09-03. Covers n=1..31
   (pp.577-638, answered pages only).

   p.584 (n=4) is a pre-adjudicated GCS-calculation page: the automated pass
   flagged it as unanswered because its yellow-pixel measure is low, but the
   highlight is real and covers only "B. 9". Staged per the task brief.

   options-differ flags in this half (577, 591/592, 604, 610, 622, 624) were
   checked against the rendered image at each page; per-page notes record the
   outcome.
   =========================================================================== */

{ n:1, pr:1, p:577, key:4,
  stem:'A female infant is born through emergency cesarean section to a 34-year-old mother whose pregnancy was complicated by hypertension and abnormal fetal heart monitoring. At delivery she is covered in thick, green meconium and is limp, apneic, and bradycardic. Which of the following is the best first step in her resuscitation?',
  opts:['Administer IV bicarbonate.','Administer IV naloxone.','Initiate bag-and-mask ventilation.','Initiate chest compressions immediately.','Intubate with an endotracheal tube and suction meconium from the trachea.'],
  expl:'',
  note:'No explanation box printed on this page -- just the highlighted stem/options. options-differ flag checked against the image: nothing ambiguous, all five options read cleanly.' }

{ n:2, pr:2, p:580, key:4,
  stem:'You are in the Acute Assessment Unit and assess David, a 15-month-old boy, who has a fever of 38.5°C. He has had a runny nose, cough, and fever for 3 days. Since this morning, he has been sleeping excessively and is difficult to wake. His heart rate is elevated. He has a rash scattered over his legs that does not blanch with pressure. What is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukaemia','Henoch–Schönlein purpura','Immune thrombocytopenia','Non-accidental injury','Septicaemia'],
  expl:'A non-blanching rash, fever, lethargy, and elevated heart rate are signs suggestive of meningococcal septicemia. This is a medical emergency requiring urgent antibiotics and supportive care.',
  fig:'Clinical photograph, close-up, of skin on a leg, positioned to the right of options A-D, above the explanation box.',
  figAlt:'Clinical photograph, close-up view of skin on the leg.',
  note:'' }

{ n:3, pr:3, p:582, key:4,
  stem:'A 3-year-old boy who is unconscious arrives at the Emergency Department. Airway, breathing, and circulation have been managed. Blood glucose is normal. On examination, his pupils are bilaterally pinpoint. Temperature and other vitals are normal. What is the most likely cause?',
  opts:['Third nerve lesion','Severe hypoxia','Hypothermia','Tentorial herniation','Opiate poisoning'],
  expl:'Pinpoint pupils in an unconscious child with stable vital signs and normal glucose strongly suggest opioid ingestion. Opiates cause central nervous system depression with characteristic miosis.',
  note:'' }

{ n:4, pr:4, p:584, key:1,
  stem:'You are called to assess a 3-year-old boy with a high fever. The nurse reports that he is very sleepy. On entering the resuscitation room, the child makes no spontaneous response. When his name is called, there is no response. On stimulation, his eyes open, he cries, raises his hand, and pushes your hand away. What is this child' + String.fromCharCode(39) + 's Glasgow Coma Score (GCS)?',
  opts:['8','9','10','11','12'],
  expl:'•Eyes open to pain = 2' + String.fromCharCode(10) + '•Verbal response = cries = 2' + String.fromCharCode(10) + '•Motor response = (localizes pain)= 5' + String.fromCharCode(10) + 'Total = 9 (moderate coma).',
  note:'PRE-ADJUDICATED per task brief: the automated pass filed this page as unanswered (yellow measure 748 vs a 1,400-3,400 range) but the highlight is real, covering only "B. 9". Confirmed on the image -- key is B (index 1). Page also prints a reference table ("Glasgow Coma Scale (4-15 years)" / "Children' + String.fromCharCode(39) + 's Coma Scale (<4 years)") to the right of the options, NOT staged as fig per brief instruction since it names the three scoring rows and would hand over the answer. Table contents for the drafting pass: two columns of response criteria and scores (Eye opening / Best motor response / Best verbal response), each with a "4-15 years" and a "<4 years" sub-column. Three cells are highlighted in the "<4 years" (Children' + String.fromCharCode(39) + 's Coma Scale) column: "To pain" under Eye opening (score 2), "Localizes pain" under Best motor response (score 5), and "Cries" under Best verbal response (score 2) -- matching the explanation box' + String.fromCharCode(39) + 's three bullet points and total of 9.' }

{ n:5, pr:5, p:586, key:4,
  stem:'Ryan, aged 10 months, is rushed to the children' + String.fromCharCode(39) + 's emergency department after being found submerged in the bath. His mother runs in screaming, “Help my baby, please.” What is the next most appropriate step?',
  opts:['Commence chest compressions in a ratio of 15:2','If the child is not breathing, commence bag and mask ventilation','Place the child on the examination couch and position his head neutrally','Remove wet clothing/towels and dry the baby vigorously','Stimulate the baby and shout for help'],
  expl:'The initial steps include checking responsiveness by stimulating the child and calling for help immediately. Prompt assistance is critical in pediatric resuscitation due to the rapid deterioration children can undergo.',
  note:'The explanation box bolds "calling for help immediately" in print; bolding not representable in this plain string, transcribed as plain text. This page is a known self-reprint pair with n27/p.630 (reworded: "runs in screaming" here vs "runs screaming into the department" there) -- staged in full per brief instruction, folding is a separate pass.' }

{ n:6, pr:6, p:588, key:1,
  stem:'Mohammed, aged 8 months, has been vomiting and refusing feeds for 2 days. Initially, he had episodes of intense crying, drawing his legs up as if in pain, and appeared irritable. Despite oral rehydration, his vomiting continued and he became lethargic. On hospital admission, he is in shock. What is the most likely diagnosis?',
  opts:['Gastroenteritis','Intussusception','Malrotation with volvulus','Meckel' + String.fromCharCode(39) + 's diverticulum','Strangulated hernia'],
  expl:'Classic features include episodic abdominal pain, vomiting, lethargy, and drawing up of legs. Prolonged symptoms and progression to shock suggest intestinal obstruction from intussusception.',
  note:'' }

{ n:7, pr:7, p:590, key:1,
  stem:'Mohammed (8 months old, 8 kg) is in shock and requires a normal saline 0.9% bolus. What is the initial volume you would administer?',
  opts:['40 mL','160 mL','320 mL','680 mL','800 mL'],
  expl:'The initial fluid bolus for a child in shock is 20 mL/kg of 0.9% saline. For an 8 kg infant, this equals 160 mL. This bolus may be repeated depending on the child’s clinical response. In specific conditions like trauma or diabetic ketoacidosis (DKA), smaller or more cautious volumes may be used.',
  note:'DOSE FLAG: explanation box gives 20 mL/kg as the initial shock bolus rate, printed clearly and unambiguous on the image; confirmed 20 mL/kg x 8 kg = 160 mL matches the highlighted option B.' }

{ n:8, pr:8, p:592, key:4,
  stem:'. Mohammed, aged 8 months, has presented with the clinical scenario described in the previous two questions. He has received the fluid bolus of normal saline 0.9%, which has improved his condition. From his presentation, you suspect he is 10% dehydrated. You receive his laboratory results, which reveal a plasma sodium of 138 mmol/L (within the normal range). His continuing fluid loss from vomiting is small and can be ignored. What is Mohammed' + String.fromCharCode(39) + 's total fluid requirement for the initial 24 hours?',
  opts:['160 mL','320 mL','800 mL','880 mL','1600 mL'],
  expl:'Mohammed is 10% dehydrated, which equals an 800 mL deficit (10% of 8 kg). His maintenance requirement is 100 mL/kg/day = 800 mL. Therefore, his total fluid need over 24 hours is 800 mL (deficit) + 800 mL (maintenance) = 1600 mL.',
  note:'options-differ flag (591/592) checked against image: A-E all read cleanly, nothing ambiguous. DOSE FLAG: maintenance rate 100 mL/kg/day and deficit calc (10% of 8 kg = 800 mL) both printed clearly; arithmetic 800+800=1600 confirmed and matches highlighted E. Stem transcribed verbatim including a stray leading "." before "Mohammed" -- the printed numeral is "8. . Mohammed" (double period), not repaired per verbatim rule. Page also prints an unrelated stock illustration of a pair of eyes to the right of the stem, unconnected to the fluid-calculation question; not staged as fig since nothing about it must be looked at to answer -- flagging as a page oddity.' }

{ n:9, pr:9, p:594, key:1,
  stem:'A 6-year-old child is brought to the resuscitation room after a 15-minute generalized seizure. Buccal midazolam was given 5 minutes ago. Airway and oxygen are managed; capillary refill is <2 sec and heart rate is 120 bpm. What is the next most appropriate step?',
  opts:['Administer another anticonvulsant','Check blood glucose','Gain IV access','Request senior review','Start bag-valve-mask ventilation'],
  expl:'Hypoglycemia must be ruled out in any child with ongoing seizure or reduced consciousness. It is a rapidly reversible cause of altered mental status.',
  note:'' }

{ n:10, pr:10, p:596, key:3,
  stem:'Seb, a 2-year-old boy, suddenly develops widespread urticaria and facial flushing at a party. Vitals are normal, and there is no respiratory compromise. What is the most appropriate medication?',
  opts:['Intramuscular adrenaline','Intramuscular antihistamine','Intravenous hydrocortisone','Oral antihistamine','Oral corticosteroid'],
  expl:'For urticaria without systemic involvement, oral antihistamines are sufficient. There is no need for adrenaline or steroids if no airway or circulatory compromise is present.',
  note:'' }

{ n:11, pr:11, p:598, key:0,
  stem:'Jenny, a 3-year-old girl, suddenly develops facial swelling, urticaria, and noisy breathing at a village fete. She is distressed and has widespread wheeze. What is the first-line medication?',
  opts:['Intramuscular adrenaline','Oral corticosteroid','Intravenous hydrocortisone','Oral antihistamine','Intramuscular antihistamine'],
  expl:'Facial swelling, urticaria, respiratory compromise (wheeze) suggest anaphylaxis. Adrenaline IM is the first-line treatment.',
  note:'' }

{ n:12, pr:12, p:600, key:4,
  stem:'The incidence of sudden infant death syndrome has decreased dramatically in the UK. What is the single most important factor responsible for this decline?',
  opts:['Feet to foot of cot','Keeping baby in parent' + String.fromCharCode(39) + 's room for 6 months','Keeping room cool','Parents not smoking near the baby','Supine sleeping'],
  expl:'The “Back to Sleep” campaign greatly reduced SIDS by recommending babies be placed on their backs to sleep. Supine sleeping is the most impactful intervention.',
  note:'' }

{ n:13, pr:13, p:602, key:3,
  stem:'Nathaniel, a 4-year-old boy, presents with shortness of breath and oxygen saturation of 90%. He can speak and has a capillary refill time <2 seconds. What is the most appropriate next step?',
  opts:['Check blood glucose','Check pupils','Airway opening manoeuvres','High-flow oxygen therapy','Start chest compressions using hands-encircling method'],
  expl:'In a child with hypoxia and respiratory distress but stable circulation, high-flow oxygen is the next step. It improves oxygenation while the cause is investigated.',
  note:'' }

{ n:14, pr:14, p:604, key:2,
  stem:'Kelsey, a 2-year-old girl, is found unconscious in the garden. In the resuscitation room, she is gasping and moaning. What is the next most appropriate step?',
  opts:['Check blood glucose','Check pupils','Airway opening manoeuvres','High-flow oxygen therapy','Start chest compressions using hands-encircling method'],
  expl:'An unconscious child requires immediate airway management. Gasping suggests inadequate breathing; airway positioning should be done first.',
  note:'Shares the identical 5-option ladder with n13/p.602 (Check blood glucose / Check pupils / Airway opening manoeuvres / High-flow oxygen therapy / Start chest compressions using hands-encircling method) -- discriminating token here is "found unconscious ... gasping and moaning" (airway problem) vs n13' + String.fromCharCode(39) + 's "can speak ... capillary refill <2 seconds" (breathing/oxygenation problem, patent airway). Kept separate per brief instruction; a shared menu pairs, never folds. options-differ flag (604) checked against image: clean, nothing ambiguous.' }

{ n:15, pr:15, p:606, key:4,
  stem:'Ahmed, a 2-month-old baby, is pale and floppy in his cot. Paramedics are providing bag-valve-mask ventilation; chest is moving, but the heart rate is 40 bpm. What is the next step?',
  opts:['Check blood glucose','Check pupils','Airway opening manoeuvres','High-flow oxygen therapy','Start chest compressions using hands-encircling method'],
  expl:'A heart rate below 60 bpm with signs of poor perfusion in an infant indicates the need for chest compressions. The encircling hands technique is preferred in infants.',
  note:'Third entry sharing the identical 5-option ladder with n13/p.602 and n14/p.604. Discriminating token here: heart rate 40 bpm despite effective ventilation (circulation/compressions problem), vs n13' + String.fromCharCode(39) + 's oxygenation problem and n14' + String.fromCharCode(39) + 's airway problem. Kept separate per brief instruction.' }

{ n:16, pr:16, p:608, key:0,
  stem:'Daniel, aged 10 years, has diabetes and collapsed after playing football. What is the most appropriate next step?',
  opts:['Check blood glucose','Check pupils','Airway opening manoeuvres','High-flow oxygen therapy','Start chest compressions using hands-encircling method'],
  expl:'A diabetic child who collapses may be hypoglycemic. Blood glucose must be checked immediately as hypoglycemia is rapidly correctable.',
  note:'Fourth entry sharing the identical 5-option ladder with n13/p.602, n14/p.604, n15/p.606. Discriminating token here: known diabetic, collapse after exertion (hypoglycemia). Kept separate per brief instruction.' }

{ n:17, pr:17, p:610, key:1,
  stem:'Aisha, a 3-year-old girl, had a seizure. She is on high-flow oxygen and unresponsive to pain. Blood glucose is being checked. What is the next most appropriate step?',
  opts:['Check blood glucose','Check pupils','Airway opening manoeuvres','High-flow oxygen therapy','Start chest compressions using hands-encircling method'],
  expl:'After ABC and glucose check, assessing pupils helps identify potential neurological causes or drug toxicity following a seizure.',
  note:'Fifth entry sharing the identical 5-option ladder with n13/602, n14/604, n15/606, n16/608. Discriminating token here: glucose check already underway, unresponsive to pain -- next step is pupils (disability/neuro assessment). Kept separate per brief instruction. options-differ flag (610) checked against image: clean, nothing ambiguous.' }

{ n:18, pr:18, p:612, key:3,
  stem:'A 9-year-old boy presents with reduced consciousness, fever, and petechiae. He is cardiovascularly stable, with GCS 14/15. What is the most appropriate immediate management?',
  opts:['Arrange urgent CT brain','Give 20 mL/kg normal saline bolus','Give 3 mL/kg 10% dextrose','IV access, blood cultures, and broad-spectrum antibiotics','Administer vitamin K'],
  expl:'Fever with petechiae and reduced consciousness suggests meningococcemia. Early antibiotics are critical; blood cultures must be taken before administration.',
  note:'DOSE FLAG: distractor options B and C carry printed doses (20 mL/kg normal saline; 3 mL/kg 10% dextrose), transcribed exactly as printed on the image.' }

{ n:19, pr:19, p:614, key:3,
  stem:'A 3-year-old girl presents with 8 days of vomiting and diarrhea, now with reduced consciousness. Vitals: HR 170, RR 20, SBP 75 mmHg, CRT 5 sec. pH 6.9, base excess -18, glucose 2.2 mmol/L. What is the most likely clinical syndrome?',
  opts:['Anaphylactic shock','Septicaemic shock','Cardiogenic shock','Hypovolaemic shock','Neurogenic shock'],
  expl:'The history of diarrhea and vomiting, hypotension, tachycardia, prolonged capillary refill, and acidosis indicate severe hypovolemic shock due to fluid loss.',
  note:'NUMBER FLAG: stem vitals/labs transcribed exactly as printed -- HR 170, RR 20, SBP 75 mmHg, CRT 5 sec, pH 6.9, base excess -18, glucose 2.2 mmol/L. All read clearly on the image.' }

{ n:20, pr:20, p:616, key:0,
  stem:'A known epileptic patient in status epilepticus received rectal diazepam 10 minutes ago but continues to seize. IV access is now available and blood sugar is 5.5 mmol/L. What is the next most appropriate treatment?',
  opts:['Intravenous lorazepam','Intravenous phenytoin','Intravenous thiopental','Rectal paraldehyde','Buccal midazolam'],
  expl:'Lorazepam is the next line of treatment in status epilepticus if benzodiazepines (like rectal diazepam) have failed and IV access is available. It is effective and has a longer duration of action than diazepam.',
  note:'NUMBER FLAG: stem gives rectal diazepam 10 minutes ago and blood sugar 5.5 mmol/L, both transcribed as printed.' }

{ n:21, pr:21, p:618, key:4,
  stem:'A previously well 5-year-old boy is brought in by ambulance to the emergency department with an acute onset of breathing difficulty. On arrival, he appears unwell, pale with audible stridor, and is sitting upright unable to speak. His temperature is 40°C. What is the first priority in this child' + String.fromCharCode(39) + 's management?',
  opts:['Lie the child down','Take a throat swab','Obtain intravenous access','Give oral dexamethasone','Summon immediate anesthetic help'],
  expl:'This presentation suggests epiglottitis, a life-threatening airway emergency. The first priority is to call for senior anesthetic help urgently to secure the airway in a controlled environment.',
  note:'NUMBER FLAG: stem gives temperature 40°C, transcribed as printed.' }

{ n:22, pr:22, p:620, key:0,
  stem:'A 9-year-old boy in asystole is brought in by ambulance to the emergency department. The various members of the cardiac arrest team arrive and resuscitation begins. Which is the most important drug of choice?',
  opts:['Adrenaline (epinephrine)','Sodium bicarbonate','Atropine','Amiodarone','Lidocaine'],
  expl:'In pediatric cardiac arrest with asystole, the most important and first-line drug is adrenaline. It is administered every 3–5 minutes during CPR to improve chances of return of spontaneous circulation.',
  note:'NUMBER FLAG: explanation box gives dosing interval "every 3–5 minutes", transcribed as printed (en dash).' }

{ n:23, pr:23, p:622, key:2,
  stem:'A 3-year-old girl is brought into the emergency department by ambulance with a 4-hour history of listlessness, high fever, and reduced responsiveness. Her temperature is 40.0°C, she has a heart rate of 170 beats per minute, a respiratory rate of 35 per minute, and saturations of 100% on 15 liters of high-flow oxygen. On examination, she is responsive to voice and maintaining her airway. Systemic examination is unremarkable; her capillary refill time is 4 seconds. What is the first priority in the management of this child?',
  opts:['Intubation and ventilation','10 mL/kg bolus of normal saline','20 mL/kg bolus of normal saline','15 mL/kg packed red cells'],
  expl:'This child shows signs of shock. The first priority is fluid resuscitation with a 20 mL/kg bolus of isotonic saline to restore perfusion and improve circulation.',
  note:'Only 4 options printed on this page (A-D), no E -- confirmed on the image, page is not cropped (page number 622 visible, explanation box fully printed). options-differ flag (622) checked against image: clean, nothing ambiguous. NUMBER FLAG: stem/options carry multiple values, all transcribed as printed -- 4-hour history, 40.0°C, HR 170, RR 35, sats 100% on 15 L, CRT 4 sec, and the three dosed options (10/20/15 mL/kg).' }

{ n:24, pr:24, p:624, key:0,
  stem:'An 8-year-old girl is brought to the hospital following ingestion of a cereal bar containing peanuts. She is noted to have a widespread urticarial rash and swelling of the face and lips. She is finding it difficult to speak and there is widespread wheeze on auscultation. The single most important step in her management is which of the following?',
  opts:['Intramuscular 1 microgram/kg adrenaline (epinephrine) (1:1000)','Intravenous adrenaline (epinephrine), 1 microgram/kg (1:10,000)','Intravenous hydrocortisone','Oxygen','Chlorphenamine'],
  expl:'This is an acute anaphylactic reaction. Intramuscular adrenaline is the first and most important step to counteract life-threatening airway swelling and bronchospasm.',
  note:'DOSE FLAG, escalating: option A prints "1 microgram/kg" for IM adrenaline 1:1000. This reads low against the more usual IM anaphylaxis dosing of 10 micrograms/kg (or age/weight-banded fixed doses) -- possibly a printed error for "10 microgram/kg", but transcribed exactly as printed since the digit is unambiguous on the image (a single "1", not "10"). Not corrected. Option B carries a second dose figure, "1 microgram/kg (1:10,000)" for IV adrenaline, also transcribed as printed. options-differ flag (624) checked against image: clean, both options read as above, nothing ambiguous about the wording -- only the dose value itself is the open question, flagged separately.' }

{ n:25, pr:25, p:626, key:0,
  stem:'A 12-year-old girl with known epilepsy is brought in by ambulance. She has been intubated for 15 minutes. Her parents administered buccal midazolam after 5 minutes as part of her rescue regimen. On arrival, tonic-clonic movements are ongoing. The ambulance crew has inserted a cannula and is giving high-flow oxygen via facemask. What is the next step in management?',
  opts:['Intravenous lorazepam','Rectal diazepam','Rapid sequence induction','Loading dose of phenytoin','Intravenous phenobarbital'],
  expl:'In ongoing status epilepticus, a second dose of benzodiazepine is indicated 10 minutes after the first. Since IV access is available, intravenous lorazepam is preferred over rectal diazepam due to faster and more reliable effect.',
  note:'Stem reads "She has been intubated for 15 minutes" -- confirmed on the image and against both OCR reads (identical wording both times). Clinically an odd combination with ongoing tonic-clonic movements and buccal midazolam rescue therapy, but transcribed verbatim per the no-repair rule; not flagged as an escalation since it is wording, not a number/unit/dose.' }

{ n:26, pr:26, p:628, key:0,
  stem:'A 3-month-old baby is found dead in a Moses basket sleeping on her back. She was born in July at 41 weeks to a mother who smoked during the pregnancy and afterward. Which of the following factors is the most likely to have influenced her sudden infant death?',
  opts:['Maternal smoking','Sleeping in a ' + String.fromCharCode(39) + 'Moses basket' + String.fromCharCode(39), 'Supine sleeping position','Born in summer months','Post-term delivery'],
  expl:'Maternal smoking during and after pregnancy is the strongest modifiable risk factor associated with sudden infant death syndrome (SIDS). It significantly increases the risk due to its effect on infant arousal and respiratory control.',
  note:'NUMBER FLAG: stem gives gestational age "41 weeks", transcribed as printed. Option B carries printed single quotes around "Moses basket", preserved verbatim.' }

{ n:27, pr:28, p:630, key:4,
  stem:'Ryan, aged 10 months, is rushed to the children’s emergency department after being found submerged in the bath. His mother runs screaming into the department saying ' + String.fromCharCode(39) + 'Help my baby, please' + String.fromCharCode(39) + '. Which is the next most appropriate step?',
  opts:['Commence chest compressions in a ratio of 15 : 2','If the child is not breathing, commence bag and mask ventilation','Place the child onto the examination couch and put his head into the neutral position','Remove wet clothing/towels and dry the baby vigorously','Stimulate the baby and shout for help'],
  expl:'The initial action is stimulating and calling for help before progressing to airway and breathing assessment.',
  note:'pr!=n starts here: page prints 28, not 27 -- the book skips printed number 27 entirely (confirmed, matches brief prediction). Self-reprint pair with n5/p.586: same Ryan/10-month/bath-submersion scenario, reworded (mother runs screaming into the department saying Help my baby, please here vs runs in screaming, Help my baby, please there; curly apostrophe here vs straight there; lower-case a-e options here vs upper-case A-E there; ratio printed 15 : 2 here vs 15:2 there; option c reworded, put his head into the neutral position here vs position his head neutrally there). Staged in full per brief instruction; folding is a separate pass. Explanation box bolds stimulating and calling for help in print; not representable in plain text, transcribed plain.' }

{ n:28, pr:29, p:632, key:2,
  stem:'A 3-year-old boy comes to the ER with dehydration and rapid breathing, following a short history of abdominal pain and vomiting. Blood glucose is 850 mg/dl and ketones ++ in urine. What is the most appropriate initial management?',
  opts:['Start IV insulin infusion','SC rapid-acting insulin','IV bolus of normal saline','NaHCO3','Oxygen therapy'],
  expl:'The first step in diabetic ketoacidosis is fluid resuscitation with 0.9% normal saline to restore circulation, before starting insulin.',
  note:'pr continues one ahead of n from here (pr29 for n28), per the printed-number skip established at n27. NUMBER FLAG: stem gives blood glucose 850 mg/dl and ketones ++ in urine, transcribed as printed. Option d prints "NaHCO3" (subscript 3 flattened to plain text on the printed page itself, not an OCR artifact -- confirmed on the image).' }

{ n:29, pr:30, p:634, key:3,
  stem:'When you are called for a child CPR, how do you open an unresponsive victim' + String.fromCharCode(39) + 's airway?',
  opts:['Use a one-way mouth guard','Tilt their head back.','Turn the victim on their side','Tilt their head back and lift the chin.'],
  expl:'The correct method is the head tilt-chin lift (unless cervical spine injury suspected), to open the airway during resuscitation.',
  note:'Only 4 options printed on this page (a-d), no e -- confirmed on the image, page is not cropped (page number 634 and full explanation box visible).' }

{ n:30, pr:31, p:636, key:3,
  stem:'Louise, aged 4 years, was hit by a car in the local supermarket car park. She is brought to the Emergency Department by ambulance. An initial assessment show:\nAirway → talking to mother\nBreathing → receiving oxygen via a rebreathing circuit, oxygen saturation 99%.\nBreathing →air entry satisfactory and equal bilaterally, respiratory rate 30/min.\nCirculation → pulse 160/min, blood pressure 90/50 mmHg, capillary refill time 3 seconds\nDisability → alert, but frightened and agitated, moving all four limbs. She has abrasions to her left flank and pain in her left shoulder. What is the next intervention needed?',
  opts:['Analgesia','Blood glucose measurement','Chest X-ray','Intravenous access','Intubation and ventilation'],
  expl:'Although her airway and breathing are stable, she has tachycardia and prolonged capillary refill, suggesting circulatory compromise. The priority is IV access to allow fluid resuscitation and stabilization.',
  note:'Reprint of a question already live in the bank as pedep-acc-2 (p.559, staged in endpoint-s04-accidents.part-A.js n2): identical scenario (Louise, 4yo, hit by car in supermarket car park), identical five options and same key (Intravenous access), identical vitals (sat 99%, RR 30/min, pulse 160/min, BP 90/50, CRT 3 sec). Reformatted here as an arrow-separated ABCD list ("Airway →", "Breathing →" x2, "Circulation →", "Disability →") vs continuous prose in the p.559 printing; explanation text also reworded. Staged in full per brief instruction; folding is a separate pass. Stem transcribed verbatim including "assessment show:" (grammatically "shows"), the doubled "Breathing →" line, and the space-less "→air entry" -- not repaired.' }

{ n:31, pr:32, p:638, key:0,
  stem:'According to shock, which of the following is correct?',
  opts:['Anaphylaxis is due to maldistribution of fluids','Hypovolemic shock is due to increased cardiac output','Cardiogenic shock results from peripheral vasodilation','Septic shock is always caused by external blood loss'],
  expl:'Anaphylactic shock is a distributive shock where massive vasodilation causes fluid maldistribution. Hypovolemic shock is due to volume loss, cardiogenic is pump failure, and septic is not always external blood loss.',
  note:'Only 4 options printed on this page (a-d), no e -- confirmed on the image, page not cropped (page number 638 and full explanation box visible). Last page of my half (n=1..31, pp.577-638).' }

