/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part1.pdf - SECTION 5: "Pediatrics Emergencies"
   Verbatim staging record. PDF pages 563-702; PDF page = printed page, offset zero.
   Merged from endpoint-s05-emergencies.part-A.js + endpoint-s05-emergencies.part-B.js by merge-parts-ep.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP_S05_STAGED = [

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
  note:'No explanation box printed on this page -- just the highlighted stem/options. options-differ flag checked against the image: nothing ambiguous, all five options read cleanly.' },

{ n:2, pr:2, p:580, key:4,
  stem:'You are in the Acute Assessment Unit and assess David, a 15-month-old boy, who has a fever of 38.5°C. He has had a runny nose, cough, and fever for 3 days. Since this morning, he has been sleeping excessively and is difficult to wake. His heart rate is elevated. He has a rash scattered over his legs that does not blanch with pressure. What is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukaemia','Henoch–Schönlein purpura','Immune thrombocytopenia','Non-accidental injury','Septicaemia'],
  expl:'A non-blanching rash, fever, lethargy, and elevated heart rate are signs suggestive of meningococcal septicemia. This is a medical emergency requiring urgent antibiotics and supportive care.',
  fig:'Clinical photograph, close-up, of skin on a leg, positioned to the right of options A-D, above the explanation box.',
  figAlt:'Clinical photograph, close-up view of skin on the leg.',
  note:'Verdict: question figure, decided by the p.238 precedent method. p.579 (unanswered printing) carries the identical clinical photograph of the leg rash, positioned to the right of options A-E, with no explanation box printed on that page and no option highlighted -- the same pattern as p.238, where a figure printed on the unanswered page is one the reader is meant to consult before answering. p.580 (answered printing) shows the same photograph in the same position (right of the options, above the boxed explanation), grouped with the options rather than inside the explanation box; key E (Septicaemia) is highlighted and boxed below. No caption or label appears on or near the photograph on either page. The stem does state the key finding in words (rash that does not blanch with pressure), but since the book prints the photograph before the answer is revealed on p.579, it is following the same question-figure convention as p.238, so it is kept as fig rather than reclassified as an answer-only illustration.' },

{ n:3, pr:3, p:582, key:4,
  stem:'A 3-year-old boy who is unconscious arrives at the Emergency Department. Airway, breathing, and circulation have been managed. Blood glucose is normal. On examination, his pupils are bilaterally pinpoint. Temperature and other vitals are normal. What is the most likely cause?',
  opts:['Third nerve lesion','Severe hypoxia','Hypothermia','Tentorial herniation','Opiate poisoning'],
  expl:'Pinpoint pupils in an unconscious child with stable vital signs and normal glucose strongly suggest opioid ingestion. Opiates cause central nervous system depression with characteristic miosis.',
  note:'' },

{ n:4, pr:4, p:584, key:1,
  stem:'You are called to assess a 3-year-old boy with a high fever. The nurse reports that he is very sleepy. On entering the resuscitation room, the child makes no spontaneous response. When his name is called, there is no response. On stimulation, his eyes open, he cries, raises his hand, and pushes your hand away. What is this child' + String.fromCharCode(39) + 's Glasgow Coma Score (GCS)?',
  opts:['8','9','10','11','12'],
  expl:'•Eyes open to pain = 2' + String.fromCharCode(10) + '•Verbal response = cries = 2' + String.fromCharCode(10) + '•Motor response = (localizes pain)= 5' + String.fromCharCode(10) + 'Total = 9 (moderate coma).',
  note:'PRE-ADJUDICATED per task brief: the automated pass filed this page as unanswered (yellow measure 748 vs a 1,400-3,400 range) but the highlight is real, covering only "B. 9". Confirmed on the image -- key is B (index 1). Page also prints a reference table ("Glasgow Coma Scale (4-15 years)" / "Children' + String.fromCharCode(39) + 's Coma Scale (<4 years)") to the right of the options, NOT staged as fig per brief instruction since it names the three scoring rows and would hand over the answer. Table contents for the drafting pass: two columns of response criteria and scores (Eye opening / Best motor response / Best verbal response), each with a "4-15 years" and a "<4 years" sub-column. Three cells are highlighted in the "<4 years" (Children' + String.fromCharCode(39) + 's Coma Scale) column: "To pain" under Eye opening (score 2), "Localizes pain" under Best motor response (score 5), and "Cries" under Best verbal response (score 2) -- matching the explanation box' + String.fromCharCode(39) + 's three bullet points and total of 9.' },

{ n:5, pr:5, p:586, key:4,
  stem:'Ryan, aged 10 months, is rushed to the children' + String.fromCharCode(39) + 's emergency department after being found submerged in the bath. His mother runs in screaming, “Help my baby, please.” What is the next most appropriate step?',
  opts:['Commence chest compressions in a ratio of 15:2','If the child is not breathing, commence bag and mask ventilation','Place the child on the examination couch and position his head neutrally','Remove wet clothing/towels and dry the baby vigorously','Stimulate the baby and shout for help'],
  expl:'The initial steps include checking responsiveness by stimulating the child and calling for help immediately. Prompt assistance is critical in pediatric resuscitation due to the rapid deterioration children can undergo.',
  note:'The explanation box bolds "calling for help immediately" in print; bolding not representable in this plain string, transcribed as plain text. This page is a known self-reprint pair with n27/p.630 (reworded: "runs in screaming" here vs "runs screaming into the department" there) -- staged in full per brief instruction, folding is a separate pass.' },

{ n:6, pr:6, p:588, key:1,
  stem:'Mohammed, aged 8 months, has been vomiting and refusing feeds for 2 days. Initially, he had episodes of intense crying, drawing his legs up as if in pain, and appeared irritable. Despite oral rehydration, his vomiting continued and he became lethargic. On hospital admission, he is in shock. What is the most likely diagnosis?',
  opts:['Gastroenteritis','Intussusception','Malrotation with volvulus','Meckel' + String.fromCharCode(39) + 's diverticulum','Strangulated hernia'],
  expl:'Classic features include episodic abdominal pain, vomiting, lethargy, and drawing up of legs. Prolonged symptoms and progression to shock suggest intestinal obstruction from intussusception.',
  note:'' },

{ n:7, pr:7, p:590, key:1,
  stem:'Mohammed (8 months old, 8 kg) is in shock and requires a normal saline 0.9% bolus. What is the initial volume you would administer?',
  opts:['40 mL','160 mL','320 mL','680 mL','800 mL'],
  expl:'The initial fluid bolus for a child in shock is 20 mL/kg of 0.9% saline. For an 8 kg infant, this equals 160 mL. This bolus may be repeated depending on the child’s clinical response. In specific conditions like trauma or diabetic ketoacidosis (DKA), smaller or more cautious volumes may be used.',
  note:'DOSE FLAG: explanation box gives 20 mL/kg as the initial shock bolus rate, printed clearly and unambiguous on the image; confirmed 20 mL/kg x 8 kg = 160 mL matches the highlighted option B.' },

{ n:8, pr:8, p:592, key:4,
  stem:'. Mohammed, aged 8 months, has presented with the clinical scenario described in the previous two questions. He has received the fluid bolus of normal saline 0.9%, which has improved his condition. From his presentation, you suspect he is 10% dehydrated. You receive his laboratory results, which reveal a plasma sodium of 138 mmol/L (within the normal range). His continuing fluid loss from vomiting is small and can be ignored. What is Mohammed' + String.fromCharCode(39) + 's total fluid requirement for the initial 24 hours?',
  opts:['160 mL','320 mL','800 mL','880 mL','1600 mL'],
  expl:'Mohammed is 10% dehydrated, which equals an 800 mL deficit (10% of 8 kg). His maintenance requirement is 100 mL/kg/day = 800 mL. Therefore, his total fluid need over 24 hours is 800 mL (deficit) + 800 mL (maintenance) = 1600 mL.',
  note:'options-differ flag (591/592) checked against image: A-E all read cleanly, nothing ambiguous. DOSE FLAG: maintenance rate 100 mL/kg/day and deficit calc (10% of 8 kg = 800 mL) both printed clearly; arithmetic 800+800=1600 confirmed and matches highlighted E. Stem transcribed verbatim including a stray leading "." before "Mohammed" -- the printed numeral is "8. . Mohammed" (double period), not repaired per verbatim rule. Page also prints an unrelated stock illustration of a pair of eyes to the right of the stem, unconnected to the fluid-calculation question; not staged as fig since nothing about it must be looked at to answer -- flagging as a page oddity.' },

{ n:9, pr:9, p:594, key:1,
  stem:'A 6-year-old child is brought to the resuscitation room after a 15-minute generalized seizure. Buccal midazolam was given 5 minutes ago. Airway and oxygen are managed; capillary refill is <2 sec and heart rate is 120 bpm. What is the next most appropriate step?',
  opts:['Administer another anticonvulsant','Check blood glucose','Gain IV access','Request senior review','Start bag-valve-mask ventilation'],
  expl:'Hypoglycemia must be ruled out in any child with ongoing seizure or reduced consciousness. It is a rapidly reversible cause of altered mental status.',
  note:'' },

{ n:10, pr:10, p:596, key:3,
  stem:'Seb, a 2-year-old boy, suddenly develops widespread urticaria and facial flushing at a party. Vitals are normal, and there is no respiratory compromise. What is the most appropriate medication?',
  opts:['Intramuscular adrenaline','Intramuscular antihistamine','Intravenous hydrocortisone','Oral antihistamine','Oral corticosteroid'],
  expl:'For urticaria without systemic involvement, oral antihistamines are sufficient. There is no need for adrenaline or steroids if no airway or circulatory compromise is present.',
  note:'' },

{ n:11, pr:11, p:598, key:0,
  stem:'Jenny, a 3-year-old girl, suddenly develops facial swelling, urticaria, and noisy breathing at a village fete. She is distressed and has widespread wheeze. What is the first-line medication?',
  opts:['Intramuscular adrenaline','Oral corticosteroid','Intravenous hydrocortisone','Oral antihistamine','Intramuscular antihistamine'],
  expl:'Facial swelling, urticaria, respiratory compromise (wheeze) suggest anaphylaxis. Adrenaline IM is the first-line treatment.',
  note:'' },

{ n:12, pr:12, p:600, key:4,
  stem:'The incidence of sudden infant death syndrome has decreased dramatically in the UK. What is the single most important factor responsible for this decline?',
  opts:['Feet to foot of cot','Keeping baby in parent' + String.fromCharCode(39) + 's room for 6 months','Keeping room cool','Parents not smoking near the baby','Supine sleeping'],
  expl:'The “Back to Sleep” campaign greatly reduced SIDS by recommending babies be placed on their backs to sleep. Supine sleeping is the most impactful intervention.',
  note:'' },

{ n:13, pr:13, p:602, key:3,
  stem:'Nathaniel, a 4-year-old boy, presents with shortness of breath and oxygen saturation of 90%. He can speak and has a capillary refill time <2 seconds. What is the most appropriate next step?',
  opts:['Check blood glucose','Check pupils','Airway opening manoeuvres','High-flow oxygen therapy','Start chest compressions using hands-encircling method'],
  expl:'In a child with hypoxia and respiratory distress but stable circulation, high-flow oxygen is the next step. It improves oxygenation while the cause is investigated.',
  note:'' },

{ n:14, pr:14, p:604, key:2,
  stem:'Kelsey, a 2-year-old girl, is found unconscious in the garden. In the resuscitation room, she is gasping and moaning. What is the next most appropriate step?',
  opts:['Check blood glucose','Check pupils','Airway opening manoeuvres','High-flow oxygen therapy','Start chest compressions using hands-encircling method'],
  expl:'An unconscious child requires immediate airway management. Gasping suggests inadequate breathing; airway positioning should be done first.',
  note:'Shares the identical 5-option ladder with n13/p.602 (Check blood glucose / Check pupils / Airway opening manoeuvres / High-flow oxygen therapy / Start chest compressions using hands-encircling method) -- discriminating token here is "found unconscious ... gasping and moaning" (airway problem) vs n13' + String.fromCharCode(39) + 's "can speak ... capillary refill <2 seconds" (breathing/oxygenation problem, patent airway). Kept separate per brief instruction; a shared menu pairs, never folds. options-differ flag (604) checked against image: clean, nothing ambiguous.' },

{ n:15, pr:15, p:606, key:4,
  stem:'Ahmed, a 2-month-old baby, is pale and floppy in his cot. Paramedics are providing bag-valve-mask ventilation; chest is moving, but the heart rate is 40 bpm. What is the next step?',
  opts:['Check blood glucose','Check pupils','Airway opening manoeuvres','High-flow oxygen therapy','Start chest compressions using hands-encircling method'],
  expl:'A heart rate below 60 bpm with signs of poor perfusion in an infant indicates the need for chest compressions. The encircling hands technique is preferred in infants.',
  note:'Third entry sharing the identical 5-option ladder with n13/p.602 and n14/p.604. Discriminating token here: heart rate 40 bpm despite effective ventilation (circulation/compressions problem), vs n13' + String.fromCharCode(39) + 's oxygenation problem and n14' + String.fromCharCode(39) + 's airway problem. Kept separate per brief instruction.' },

{ n:16, pr:16, p:608, key:0,
  stem:'Daniel, aged 10 years, has diabetes and collapsed after playing football. What is the most appropriate next step?',
  opts:['Check blood glucose','Check pupils','Airway opening manoeuvres','High-flow oxygen therapy','Start chest compressions using hands-encircling method'],
  expl:'A diabetic child who collapses may be hypoglycemic. Blood glucose must be checked immediately as hypoglycemia is rapidly correctable.',
  note:'Fourth entry sharing the identical 5-option ladder with n13/p.602, n14/p.604, n15/p.606. Discriminating token here: known diabetic, collapse after exertion (hypoglycemia). Kept separate per brief instruction.' },

{ n:17, pr:17, p:610, key:1,
  stem:'Aisha, a 3-year-old girl, had a seizure. She is on high-flow oxygen and unresponsive to pain. Blood glucose is being checked. What is the next most appropriate step?',
  opts:['Check blood glucose','Check pupils','Airway opening manoeuvres','High-flow oxygen therapy','Start chest compressions using hands-encircling method'],
  expl:'After ABC and glucose check, assessing pupils helps identify potential neurological causes or drug toxicity following a seizure.',
  note:'Fifth entry sharing the identical 5-option ladder with n13/602, n14/604, n15/606, n16/608. Discriminating token here: glucose check already underway, unresponsive to pain -- next step is pupils (disability/neuro assessment). Kept separate per brief instruction. options-differ flag (610) checked against image: clean, nothing ambiguous.' },

{ n:18, pr:18, p:612, key:3,
  stem:'A 9-year-old boy presents with reduced consciousness, fever, and petechiae. He is cardiovascularly stable, with GCS 14/15. What is the most appropriate immediate management?',
  opts:['Arrange urgent CT brain','Give 20 mL/kg normal saline bolus','Give 3 mL/kg 10% dextrose','IV access, blood cultures, and broad-spectrum antibiotics','Administer vitamin K'],
  expl:'Fever with petechiae and reduced consciousness suggests meningococcemia. Early antibiotics are critical; blood cultures must be taken before administration.',
  note:'DOSE FLAG: distractor options B and C carry printed doses (20 mL/kg normal saline; 3 mL/kg 10% dextrose), transcribed exactly as printed on the image.' },

{ n:19, pr:19, p:614, key:3,
  stem:'A 3-year-old girl presents with 8 days of vomiting and diarrhea, now with reduced consciousness. Vitals: HR 170, RR 20, SBP 75 mmHg, CRT 5 sec. pH 6.9, base excess -18, glucose 2.2 mmol/L. What is the most likely clinical syndrome?',
  opts:['Anaphylactic shock','Septicaemic shock','Cardiogenic shock','Hypovolaemic shock','Neurogenic shock'],
  expl:'The history of diarrhea and vomiting, hypotension, tachycardia, prolonged capillary refill, and acidosis indicate severe hypovolemic shock due to fluid loss.',
  note:'NUMBER FLAG: stem vitals/labs transcribed exactly as printed -- HR 170, RR 20, SBP 75 mmHg, CRT 5 sec, pH 6.9, base excess -18, glucose 2.2 mmol/L. All read clearly on the image.' },

{ n:20, pr:20, p:616, key:0,
  stem:'A known epileptic patient in status epilepticus received rectal diazepam 10 minutes ago but continues to seize. IV access is now available and blood sugar is 5.5 mmol/L. What is the next most appropriate treatment?',
  opts:['Intravenous lorazepam','Intravenous phenytoin','Intravenous thiopental','Rectal paraldehyde','Buccal midazolam'],
  expl:'Lorazepam is the next line of treatment in status epilepticus if benzodiazepines (like rectal diazepam) have failed and IV access is available. It is effective and has a longer duration of action than diazepam.',
  note:'NUMBER FLAG: stem gives rectal diazepam 10 minutes ago and blood sugar 5.5 mmol/L, both transcribed as printed.' },

{ n:21, pr:21, p:618, key:4,
  stem:'A previously well 5-year-old boy is brought in by ambulance to the emergency department with an acute onset of breathing difficulty. On arrival, he appears unwell, pale with audible stridor, and is sitting upright unable to speak. His temperature is 40°C. What is the first priority in this child' + String.fromCharCode(39) + 's management?',
  opts:['Lie the child down','Take a throat swab','Obtain intravenous access','Give oral dexamethasone','Summon immediate anesthetic help'],
  expl:'This presentation suggests epiglottitis, a life-threatening airway emergency. The first priority is to call for senior anesthetic help urgently to secure the airway in a controlled environment.',
  note:'NUMBER FLAG: stem gives temperature 40°C, transcribed as printed.' },

{ n:22, pr:22, p:620, key:0,
  stem:'A 9-year-old boy in asystole is brought in by ambulance to the emergency department. The various members of the cardiac arrest team arrive and resuscitation begins. Which is the most important drug of choice?',
  opts:['Adrenaline (epinephrine)','Sodium bicarbonate','Atropine','Amiodarone','Lidocaine'],
  expl:'In pediatric cardiac arrest with asystole, the most important and first-line drug is adrenaline. It is administered every 3–5 minutes during CPR to improve chances of return of spontaneous circulation.',
  note:'NUMBER FLAG: explanation box gives dosing interval "every 3–5 minutes", transcribed as printed (en dash).' },

{ n:23, pr:23, p:622, key:2,
  stem:'A 3-year-old girl is brought into the emergency department by ambulance with a 4-hour history of listlessness, high fever, and reduced responsiveness. Her temperature is 40.0°C, she has a heart rate of 170 beats per minute, a respiratory rate of 35 per minute, and saturations of 100% on 15 liters of high-flow oxygen. On examination, she is responsive to voice and maintaining her airway. Systemic examination is unremarkable; her capillary refill time is 4 seconds. What is the first priority in the management of this child?',
  opts:['Intubation and ventilation','10 mL/kg bolus of normal saline','20 mL/kg bolus of normal saline','15 mL/kg packed red cells'],
  expl:'This child shows signs of shock. The first priority is fluid resuscitation with a 20 mL/kg bolus of isotonic saline to restore perfusion and improve circulation.',
  note:'Only 4 options printed on this page (A-D), no E -- confirmed on the image, page is not cropped (page number 622 visible, explanation box fully printed). options-differ flag (622) checked against image: clean, nothing ambiguous. NUMBER FLAG: stem/options carry multiple values, all transcribed as printed -- 4-hour history, 40.0°C, HR 170, RR 35, sats 100% on 15 L, CRT 4 sec, and the three dosed options (10/20/15 mL/kg).' },

{ n:24, pr:24, p:624, key:0,
  stem:'An 8-year-old girl is brought to the hospital following ingestion of a cereal bar containing peanuts. She is noted to have a widespread urticarial rash and swelling of the face and lips. She is finding it difficult to speak and there is widespread wheeze on auscultation. The single most important step in her management is which of the following?',
  opts:['Intramuscular 1 microgram/kg adrenaline (epinephrine) (1:1000)','Intravenous adrenaline (epinephrine), 1 microgram/kg (1:10,000)','Intravenous hydrocortisone','Oxygen','Chlorphenamine'],
  expl:'This is an acute anaphylactic reaction. Intramuscular adrenaline is the first and most important step to counteract life-threatening airway swelling and bronchospasm.',
  note:'DOSE FLAG, escalating: option A prints "1 microgram/kg" for IM adrenaline 1:1000. This reads low against the more usual IM anaphylaxis dosing of 10 micrograms/kg (or age/weight-banded fixed doses) -- possibly a printed error for "10 microgram/kg", but transcribed exactly as printed since the digit is unambiguous on the image (a single "1", not "10"). Not corrected. Option B carries a second dose figure, "1 microgram/kg (1:10,000)" for IV adrenaline, also transcribed as printed. options-differ flag (624) checked against image: clean, both options read as above, nothing ambiguous about the wording -- only the dose value itself is the open question, flagged separately.' },

{ n:25, pr:25, p:626, key:0,
  stem:'A 12-year-old girl with known epilepsy is brought in by ambulance. She has been intubated for 15 minutes. Her parents administered buccal midazolam after 5 minutes as part of her rescue regimen. On arrival, tonic-clonic movements are ongoing. The ambulance crew has inserted a cannula and is giving high-flow oxygen via facemask. What is the next step in management?',
  opts:['Intravenous lorazepam','Rectal diazepam','Rapid sequence induction','Loading dose of phenytoin','Intravenous phenobarbital'],
  expl:'In ongoing status epilepticus, a second dose of benzodiazepine is indicated 10 minutes after the first. Since IV access is available, intravenous lorazepam is preferred over rectal diazepam due to faster and more reliable effect.',
  note:'Stem reads "She has been intubated for 15 minutes" -- confirmed on the image and against both OCR reads (identical wording both times). Clinically an odd combination with ongoing tonic-clonic movements and buccal midazolam rescue therapy, but transcribed verbatim per the no-repair rule; not flagged as an escalation since it is wording, not a number/unit/dose.' },

{ n:26, pr:26, p:628, key:0,
  stem:'A 3-month-old baby is found dead in a Moses basket sleeping on her back. She was born in July at 41 weeks to a mother who smoked during the pregnancy and afterward. Which of the following factors is the most likely to have influenced her sudden infant death?',
  opts:['Maternal smoking','Sleeping in a ' + String.fromCharCode(39) + 'Moses basket' + String.fromCharCode(39), 'Supine sleeping position','Born in summer months','Post-term delivery'],
  expl:'Maternal smoking during and after pregnancy is the strongest modifiable risk factor associated with sudden infant death syndrome (SIDS). It significantly increases the risk due to its effect on infant arousal and respiratory control.',
  note:'NUMBER FLAG: stem gives gestational age "41 weeks", transcribed as printed. Option B carries printed single quotes around "Moses basket", preserved verbatim.' },

{ n:27, pr:28, p:630, key:4,
  stem:'Ryan, aged 10 months, is rushed to the children’s emergency department after being found submerged in the bath. His mother runs screaming into the department saying ' + String.fromCharCode(39) + 'Help my baby, please' + String.fromCharCode(39) + '. Which is the next most appropriate step?',
  opts:['Commence chest compressions in a ratio of 15 : 2','If the child is not breathing, commence bag and mask ventilation','Place the child onto the examination couch and put his head into the neutral position','Remove wet clothing/towels and dry the baby vigorously','Stimulate the baby and shout for help'],
  expl:'The initial action is stimulating and calling for help before progressing to airway and breathing assessment.',
  note:'pr!=n starts here: page prints 28, not 27 -- the book skips printed number 27 entirely (confirmed, matches brief prediction). Self-reprint pair with n5/p.586: same Ryan/10-month/bath-submersion scenario, reworded (mother runs screaming into the department saying Help my baby, please here vs runs in screaming, Help my baby, please there; curly apostrophe here vs straight there; lower-case a-e options here vs upper-case A-E there; ratio printed 15 : 2 here vs 15:2 there; option c reworded, put his head into the neutral position here vs position his head neutrally there). Staged in full per brief instruction; folding is a separate pass. Explanation box bolds stimulating and calling for help in print; not representable in plain text, transcribed plain.' },

{ n:28, pr:29, p:632, key:2,
  stem:'A 3-year-old boy comes to the ER with dehydration and rapid breathing, following a short history of abdominal pain and vomiting. Blood glucose is 850 mg/dl and ketones ++ in urine. What is the most appropriate initial management?',
  opts:['Start IV insulin infusion','SC rapid-acting insulin','IV bolus of normal saline','NaHCO3','Oxygen therapy'],
  expl:'The first step in diabetic ketoacidosis is fluid resuscitation with 0.9% normal saline to restore circulation, before starting insulin.',
  note:'pr continues one ahead of n from here (pr29 for n28), per the printed-number skip established at n27. NUMBER FLAG: stem gives blood glucose 850 mg/dl and ketones ++ in urine, transcribed as printed. Option d prints "NaHCO3" (subscript 3 flattened to plain text on the printed page itself, not an OCR artifact -- confirmed on the image).' },

{ n:29, pr:30, p:634, key:3,
  stem:'When you are called for a child CPR, how do you open an unresponsive victim' + String.fromCharCode(39) + 's airway?',
  opts:['Use a one-way mouth guard','Tilt their head back.','Turn the victim on their side','Tilt their head back and lift the chin.'],
  expl:'The correct method is the head tilt-chin lift (unless cervical spine injury suspected), to open the airway during resuscitation.',
  note:'Only 4 options printed on this page (a-d), no e -- confirmed on the image, page is not cropped (page number 634 and full explanation box visible).' },

{ n:30, pr:31, p:636, key:3,
  stem:'Louise, aged 4 years, was hit by a car in the local supermarket car park. She is brought to the Emergency Department by ambulance. An initial assessment show:\nAirway → talking to mother\nBreathing → receiving oxygen via a rebreathing circuit, oxygen saturation 99%.\nBreathing →air entry satisfactory and equal bilaterally, respiratory rate 30/min.\nCirculation → pulse 160/min, blood pressure 90/50 mmHg, capillary refill time 3 seconds\nDisability → alert, but frightened and agitated, moving all four limbs. She has abrasions to her left flank and pain in her left shoulder. What is the next intervention needed?',
  opts:['Analgesia','Blood glucose measurement','Chest X-ray','Intravenous access','Intubation and ventilation'],
  expl:'Although her airway and breathing are stable, she has tachycardia and prolonged capillary refill, suggesting circulatory compromise. The priority is IV access to allow fluid resuscitation and stabilization.',
  note:'Reprint of a question already live in the bank as pedep-acc-2 (p.559, staged in endpoint-s04-accidents.part-A.js n2): identical scenario (Louise, 4yo, hit by car in supermarket car park), identical five options and same key (Intravenous access), identical vitals (sat 99%, RR 30/min, pulse 160/min, BP 90/50, CRT 3 sec). Reformatted here as an arrow-separated ABCD list ("Airway →", "Breathing →" x2, "Circulation →", "Disability →") vs continuous prose in the p.559 printing; explanation text also reworded. Staged in full per brief instruction; folding is a separate pass. Stem transcribed verbatim including "assessment show:" (grammatically "shows"), the doubled "Breathing →" line, and the space-less "→air entry" -- not repaired.' },

{ n:31, pr:32, p:638, key:0,
  stem:'According to shock, which of the following is correct?',
  opts:['Anaphylaxis is due to maldistribution of fluids','Hypovolemic shock is due to increased cardiac output','Cardiogenic shock results from peripheral vasodilation','Septic shock is always caused by external blood loss'],
  expl:'Anaphylactic shock is a distributive shock where massive vasodilation causes fluid maldistribution. Hypovolemic shock is due to volume loss, cardiogenic is pump failure, and septic is not always external blood loss.',
  note:'Only 4 options printed on this page (a-d), no e -- confirmed on the image, page not cropped (page number 638 and full explanation box visible). Last page of my half (n=1..31, pp.577-638).' },

/* Pediatrics ENDPOINT part 1, section 5 "Pediatrics Emergencies" -- staging half B.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part1.pdf, PDF page = printed page.
   Range: n=32..61, pp.640-701. Fragments only -- no array wrapper, no var, no commas between
   entries; merge-parts-ep.js builds the header and the array. See s04 part-A for entry shape. */

{ n:32, pr:33, p:640, key:0,
  stem:'Which of the following is true regarding capillary refill time (CRT)?',
  opts:['It is affected by cold environment','It is assessed by pressing on the forehead','It is not prolonged in compensated (early) shock','It is considered prolonged if > 4 seconds'],
  expl:'CRT is influenced by temperature and perfusion status. It is normally assessed on the sternum or fingertip and considered prolonged if >2–3 seconds, not only >4 seconds.',
  note:'Four options printed (a-d), confirmed uncropped on the image.' },

{ n:33, pr:34, p:642, key:0,
  stem:'Roberto is a 2.5-year-old boy. He pulled a chip pan off the cooker and has been extensively burnt. He is rushed to the nearest Children’s Emergency Department. His airway, breathing and circulation are satisfactory. His burns are distributed on his body as shown. Most of the burnt area is now blistering and mottled in colour, with a few white areas. Intravenous analgesia is given. Roberto is much more settled following intravenous analgesia. From the list of possible management options below, which should be undertaken first?',
  opts:['Commence intravenous 0.9% saline','Cover the burns with sterile dressings','Intravenous antibiotics','Intubation and artificial ventilation','Place affected areas in cold water'],
  expl:'With extensive burns, the most urgent step is fluid resuscitation to prevent shock. Covering the burns is important, but fluids must be started first to maintain perfusion.',
  note:'⚠️ ESCALATE: stem says "His burns are distributed on his body as shown" but no figure/diagram is printed on this page image -- only the two text boxes (stem/options and explanation). Confirmed no image present. Also: this stem is a longer variant of the same "Roberto" extensive-burn vignette as n3 in endpoint-s04-accidents.part-A.js (p.561), which asks the identical final question with the same five options and the same key (0.9% saline first). Recorded as a possible self-reprint/expansion across sections -- not folded here per instructions.' },

{ n:34, pr:35, p:644, key:4,
  stem:'Which of following is most common cause of pediatric cardiopulmonary arrest?',
  opts:['cardiac arrhythmias','metabolic anomalies','overwhelming infections','trauma','respiratory problem'],
  expl:'In children, cardiac arrest usually follows prolonged hypoxia and respiratory failure, not primary cardiac disease. This makes early recognition and correction of respiratory issues critical.',
  note:'This is the "thin" flag page (unanswered twin p.643 flagged thin by the index). Read hard: five options (a-e) are printed in full, none dropped.' },

{ n:35, pr:36, p:646, key:4,
  stem:'A 1-year-old girl is brought to the emergency room with a history of persistent vomiting and loose, watery stools. Which of the following would be a sign of uncompensated shock?',
  opts:['Capillary refilling time greater than 3 sec.','Heart rate greater than 120 beats/min','Cold extremities','Respiratory rate greater than 40 breaths/min.','Low blood pressure.'],
  expl:'Children compensate with tachycardia and cool extremities; hypotension appears late and signals uncompensated (decompensated) shock. It is therefore the most ominous sign.',
  note:'' },

{ n:36, pr:37, p:648, key:1,
  stem:'Regarding resuscitative effort, the most important goal is:',
  opts:['restoration of age-appropriate heart rate','appropriate movement of the chest wall','auscultation of equal breath sounds on both lungs','adequate oxygen delivery to the tissues'],
  expl:'',
  note:'⚠️ ESCALATE: no boxed text explanation is printed. Instead the lower half of the page prints an illustration (cartoon figures labelled "Cardiac arrest" and "Asphyxial arrest", a photo of a crying newborn, and a caption banner reading "Good Chest Wall Movement Is The Key Of Neonatal Resuscitation") -- functioning as the explanation but not in the verbatim boxed-text format seen elsewhere. Left expl empty per "no printed box" rule; not set as fig since it sits after the options and is not needed to answer the question, but flagging for the drafting pass / parent to decide whether the caption text should be captured. Four options printed (a-d), confirmed uncropped.' },

{ n:37, pr:38, p:650, key:1,
  stem:'A child weight 8kg presents has had vomiting and been off his feeds for 2 days, he presented with shock and needs a bolus of normal saline to treat his shock. Calculate volume of fluid you would give him',
  opts:['40 ml','80 ml','320 ml','800 ml'],
  expl:'This question actually came once before in the old exam format and caused some confusion. You multiply the weight by 10 or 20. So, if you find 80, it’s correct ✅, or if you find 160, that’s also correct ✅',
  note:'⚠️ NUMBER FLAG: explanation states 160 ml is also an acceptable answer (8kg x 20 ml/kg), but 160 ml is not printed among the four options (40/80/320/800). Highlighted key is b (80 ml), matching 8kg x 10 ml/kg. options-differ flag on this page checked against the image and is spurious -- all four options read clearly, no OCR mismatch found. Four options printed (a-d), confirmed uncropped.' },

{ n:38, pr:39, p:652, key:0,
  stem:'A 6-year-old girl presents with vomiting and abdominal pain. She is dehydrated, her blood glucose is 13 mmol/L, and her blood pH is 7.2. What is the most appropriate initial management?',
  opts:['IV bolus of normal saline','IV infusion of normal saline','IV insulin infusion','Sodium bicarbonate administration'],
  expl:'In a child with DKA (vomiting, abdominal pain, hyperglycemia, acidosis), the first priority is fluid resuscitation.',
  note:'Four options printed (a-d), confirmed uncropped on the image.' },

{ n:39, pr:40, p:654, key:4,
  stem:'A child with obstructive shock may suffer the following:',
  opts:['Sepsis','Anaphylaxis','Gastroenteritis with severe dehydration','Diabetic ketoacidosis','Tension pneumothorax'],
  expl:'Obstructive shock occurs when mechanical obstruction prevents venous return or cardiac output, as in tension pneumothorax or cardiac tamponade. Sepsis and dehydration cause distributive or hypovolemic shock, not obstructive.',
  note:'This is the second "thin" flag page (unanswered twin p.653 flagged thin by the index). Read hard: five options (a-e) are printed in full, none dropped.' },

{ n:40, pr:41, p:656, key:4,
  stem:'A term male infant is delivered vaginally to a 22-year-old mother. Immediately after birth he is noted to have a scaphoid abdomen, cyanosis, and respiratory distress. Heart sounds are heard on the right side of the chest, and the breath sounds seem to be diminished on the left side. Which of the following is the most appropriate next step in his resuscitation?',
  opts:['Administer IV bicarbonate.','Administer IV naloxone.','Initiate bag-and-mask intubation.','Initiate chest compressions immediately.','Intubate with an endotracheal tube.'],
  expl:'This is congenital diaphragmatic hernia, where bag-mask ventilation can worsen gas insufflation of the stomach. Immediate intubation with ET tube is the safest airway management.',
  note:'options-differ flag on this page checked against the image and is spurious -- all five options read clearly, no OCR mismatch found.' },

{ n:41, pr:42, p:658, key:4,
  stem:'A 37-week gestation boy is born after an uncomplicated pregnancy to a 33-year-old mother. At birth he was lethargic and had an HR of 40. Oxygen was administered via bag and mask, and he was intubated; his HR remained at 40 beats/min. Which of the following is the most appropriate next step?',
  opts:['Administer IV bicarbonate.','Administer IV atropine.','Administer IV epinephrine.','Administer IV calcium chloride.','Begin chest compressions.'],
  expl:'If the HR remains <60/min after effective ventilation and oxygen, chest compressions are the next step. Epinephrine is given if HR does not improve after compressions.',
  note:'' },

{ n:42, pr:43, p:660, key:0,
  stem:'A term female infant is born vaginally after an uncomplicated pregnancy. She appears normal but has respiratory distress when she stops crying. When crying she is pink; when not she makes vigorous respiratory efforts but becomes dusky. Which of the following is the likely explanation for her symptoms?',
  opts:['Choanal atresia','Diaphragmatic hernia','Meconium aspiration','Neonatal narcosis'],
  expl:'Newborns are obligate nasal breathers. In bilateral choanal atresia, they turn pink while crying (mouth breathing) but become cyanotic and distressed when quiet (trying to breathe through blocked nares).',
  note:'Four options printed (A-D), confirmed uncropped on the image.' },

{ n:43, pr:44, p:662, key:3,
  stem:'A 25-day-old female infant is brought to the emergency department for fever of 101°F (38.3°C) at home. The baby was born vaginally at full term and was appropriate for gestational age. Maternal GBS was negative. Apgar scores were 8 and 9. The mother noticed the baby has had decreased feeding over the previous few days and has been sleeping more. Which of the following is the most appropriate initial choice of antibiotics for this infant?',
  opts:['Oral amoxicillin','Vancomycin','Ampicillin','Ampicillin and cefotaxime','Ampicillin and gentamicin'],
  expl:'This patient may have late-onset bacterial infection, likely GBS; she should be admitted for sepsis evaluation and IV antibiotics. The best initial treatment in this age group is broad-spectrum antibiotics such as ampicillin and cefotaxime. If cultures are positive for GBS, antibiotic therapy can be narrowed to penicillin G.',
  note:'Five options printed (A-E), confirmed uncropped on the image.' },

{ n:44, pr:45, p:664, key:2,
  stem:'A 12-hour-old infant who has been feeding poorly becomes tachypneic with grunting. Which of the following initial tests has the lowest diagnostic yield?',
  opts:['Chest radiograph','Complete blood count','Urine culture','Blood culture','Glucose level'],
  expl:'In the first 24 hours, sepsis workup includes blood culture, CBC, glucose, and CXR, but urine culture is not useful since UTIs rarely present this early. It has the lowest diagnostic yield.',
  note:'' },

{ n:45, pr:46, p:666, key:3,
  stem:'A term male is born via repeat cesarean section to a 30-year-old woman. Immediately after birth he has mild respiratory distress. Chest auscultation in the delivery room reveals clear breath sounds. Which of the following is the most appropriate next step?',
  opts:['Endotracheal intubation with direct suction.','Begin intravenous antibiotic therapy.','Deliver surfactant therapy.','Observe and administer supplemental oxygen as needed.','Bag-mask ventilation.'],
  expl:'This is likely transient tachypnea of the newborn (TTN), common after C-section due to delayed lung fluid clearance. Management is supportive with oxygen and observation.',
  note:'' },

{ n:46, pr:48, p:668, key:2,
  stem:'A term male is born vaginally to a 22-year-old primigravida woman; the pregnancy was uncomplicated. Just prior to delivery, fetal bradycardia was noted, and at delivery thick meconium is found. The infant has hypotonia and bradycardia. Which of the following is the first step in resuscitation?',
  opts:['Administration of epinephrine through endotracheal tube','Bag-mask ventilation','Endotracheal intubation with direct suction','Oxygen delivered by cannula in close proximity to the nares','Tracheostomy'],
  expl:'In a depressed neonate with meconium, the airway should be suctioned immediately before providing ventilation. Bag-mask ventilation would push meconium deeper into the lungs.',
  note:'⚠️ pr/n divergence begins here: page prints 48, not 47 -- confirmed on the image, the printed number 47 is skipped by the book entirely (the unanswered twin p.667 also prints 48, per brief).' },

{ n:47, pr:49, p:670, key:2,
  stem:'A newborn female is delivered by C-section to a 23-year-old mother after 29 weeks of gestation. She has poor respiratory effort at time of delivery with cyanosis, requiring resuscitation and eventually intubated. On examination in the delivery room, the infant continues to have subcostal retractions and is difficult to ventilate. What is the next BEST step in management?',
  opts:['Obtain a chest x-ray.','Administer albuterol.','Administer surfactant.','Closely monitor clinically.','Obtain an echocardiogram (ECHO)'],
  expl:'Preterm infants often lack surfactant, leading to respiratory distress syndrome. Intubated infants with persistent distress benefit most from surfactant replacement.',
  note:'' },

{ n:48, pr:50, p:672, key:3,
  stem:'Which of the following features makes sudden infant death syndrome (SIDS) likely as the cause of a sudden death?',
  opts:['An infant found with a bulging fontanelle and facial bruise.','An 18-month-old girl who had a prior sibling that at 1 year of age also died suddenly and unexpectedly.','A 5-month-old infant with dysmorphic features and an enlarged heart found on postmortem examination.','A 3-month-old boy whose parents smoke in the home but were using a high-efficiency particulate arrestance (HEPA) air purifier in his room, a baby monitor, placing him on his side to sleep so he wouldn’t aspirate any refluxed formula, and using a special foam wedge pillow to keep him in that position.','All the above features make SIDS likely as the cause of a sudden death.'],
  expl:'',
  note:'No explanation box printed on this page. options-differ flag checked against the image and is spurious -- all five options read clearly, no OCR mismatch found; option D is simply the longest, wrapping to four lines.' },

{ n:49, pr:51, p:675, key:0,
  stem:'A mother presents to the emergency room with her 6-month-old daughter late at night after she noticed her to be breathing fast for 1 minute, then seemed to stop breathing for 1 minute, and became limp, pale, and unresponsive. The mother attempted to give mouth-to-mouth breaths for a few seconds and her daughter then began to cry and her breathing and appearance normalized. Your next best step is to:',
  opts:['Perform a thorough history and physical examination, obtain basic laboratory tests, and admit to the hospital for workup of an ALTE.','Reassure the mother that her infant looks healthy and because the symptoms have resolved, discharge home.','Perform a complete blood count (CBC), chest x-ray (CXR), and discharge home if all are normal.','Instruct the mother to follow-up with the pediatrician to get an apnea monitor and pulse oximeter so that she will know if similar symptoms occur again and if they are actually life threatening.','Tell the mother this was a near SIDS event and instruct her on measures to prevent SIDS..'],
  expl:'',
  note:'No explanation box printed on this page. Page parity flips here (odd-numbered PDF page after the 673 notes page), as expected per brief -- not a missing page.' },

{ n:50, pr:52, p:678, key:1,
  stem:'You are going to counsel parents of a newborn about prevention of SIDS. Which of the following statements about ways to reduce SIDS is accurate?',
  opts:['Infants should sleep in the same bed as the parent or on their chest so they can be closely monitored for apnea.','Infants should sleep on their back on a firm mattress with no accompanying soft bedding or objects, including no devices advertised to maintain the sleep position.','Pacifiers should be avoided because they can obstruct the baby’s airflow during respiration.','Keep the infant dressed in several layers and covered with a heavy blanket.','Infants should be given acetaminophen before their scheduled vaccines in order to prevent an undetected febrile seizure and resulting SIDS.'],
  expl:'',
  note:'No explanation box printed on this page.' },

{ n:51, pr:53, p:681, key:3,
  stem:'The investigation of an unexpected infant death includes a history, a postmortem examination, and which of the following?',
  opts:['DNA studies','Maternal drug screen','Analysis of parental electrocardiograms','A death scene investigation','Stool studies'],
  expl:'Standard SIDS investigation includes history, autopsy, and examination of the death scene. This helps rule out neglect, trauma, or environmental hazards.',
  note:'Page parity flips back here (odd-numbered PDF page after the 679 notes page), as expected per brief -- not a missing page.' },

{ n:52, pr:54, p:683, key:2,
  stem:'A 36-week gestation infant is delivered via cesarean section because of macrosomia and fetal distress. The mother has class D pregestational diabetes (insulin dependent, with vascular disease); her hemoglobin A1C is 15% (normal 7%). This infant is at risk for hypocalcemia, cardiomyopathy, polycythemia, and which of the following?',
  opts:['Congenital hip dislocation','Dacryostenosis','Respiratory distress syndrome','Hyperglycemia','Pneumothorax'],
  expl:'Hyperinsulinemia in the fetus delays surfactant production, predisposing IDM infants to RDS, despite being often macrosomic.',
  note:'⚠️ NUMBER FLAG: stem gives maternal hemoglobin A1C as 15% against a stated normal of 7% -- both figures read clearly on the image, no ambiguity, recorded verbatim.' },

{ n:53, pr:55, p:685, key:0,
  stem:'A 1-month-old boy has a fever of 102.7 °F (39.3 °C), is irritable, has diarrhea, and has not been eating well. On examination, he has an immobile, dull, and red TM that has pus behind it. Which of the following is the most appropriate course of action?',
  opts:['Admission to the hospital with complete sepsis evaluation','Intramuscular ceftriaxone and close outpatient follow-up','Oral amoxicillin-clavulanate','Oral cefuroxime','High-dose oral amoxicillin'],
  expl:'Infants <2 months with fever and systemic illness require full sepsis workup and admission. Outpatient antibiotics are not safe in this age group.',
  note:'⚠️ pr collision: this page prints 55, and so does n54 (p.687) -- two genuinely different questions sharing one printed number, as flagged by the brief. This question (n53) is about a 1-month-old boy with fever, diarrhea, and acute otitis media (immobile, dull, red TM with pus behind it) requiring sepsis workup and admission -- distinct stem, options, and key from n54. Confirmed as two separate questions, not a duplicate.' },

{ n:54, pr:55, p:687, key:2,
  stem:'An 11-month-old infant appears unwell with sunken eyes and reduced skin turgor. Capillary refill time (CRT) was found to be 5 seconds and extremities were cold. Which of the following would be the first step in the proper management of this infant?',
  opts:['Breastfeeding','Oral rehydration solution','IV normal saline','Oral antibiotic'],
  expl:'Any child presenting with manifestations of shock resuscitation with IV normal saline 20 ml/kg. Begin treatment by resuscitation with IV normal saline 20 ml/kg.',
  note:'⚠️ pr collision (second of the pair): this page also prints 55, matching n53 (p.685). Confirmed genuinely distinct question -- an 11-month-old with signs of hypovolemic shock (sunken eyes, poor skin turgor, prolonged CRT, cold extremities) requiring IV fluid resuscitation, with different stem, options, and key from n53. Four options printed (A-D), confirmed uncropped.' },

{ n:55, pr:56, p:689, key:1,
  stem:'An 18-month-old boy presents with 3 days of vomiting and diarrhea. The vomiting has now settled but he continues to have loose stools (he had about eight loose stools in the last 24 hours). His mucous membranes are dry, he has sunken eyes and appears lethargic. His skin turgor is reduced. His extremities are warm and capillary refill time is normal. What is the next step in management?',
  opts:['Analgesic / antipyretic','Oral rehydration solution','IV normal saline','Oral antibiotic'],
  expl:'Any child presenting with manifestations of dehydration: Oral rehydration solution.',
  note:'This is the known self-reprint pair with n59 (p.697), per brief. Staged in full here regardless -- folding is a separate pass.' },

{ n:56, pr:57, p:691, key:4,
  stem:'Which of the following is the best intervention that effectively prevents the occurrence of sudden infant death syndrome (SIDS)?',
  opts:['Feet to foot of cot','Keeping baby in parent’s room until 6 months of age','Keeping room cool to prevent overheating','Parents not smoking in the same room as infant','Supine sleeping'],
  expl:'The best intervention that effectively prevents SIDS: Supine sleeping.',
  note:'' },

{ n:57, pr:58, p:693, key:3,
  stem:'A 3-year-old girl is \'blue-lighted\' into the local emergency department with reduced consciousness. Her mother informs the paramedic that her daughter has been unwell for the last 8 days with vomiting and profuse diarrhea. On arrival, she is apyrexial, has a heart rate of 170 beats per minute and a respiratory rate of 20 per minute. Her systolic blood pressure is 75 mmHg and she has a capillary refill time of 5 seconds. She is barely responsive to pain. Resuscitation begins and a blood gas reveals a metabolic acidosis.What is the most likely clinical syndrome?',
  opts:['Anaphylactic shock','Septicemic shock','Cardiogenic shock','Hypovolemic shock'],
  expl:'The child has a history of prolonged diarrhea and vomiting with signs of poor perfusion (tachycardia, delayed capillary refill, hypotension). These findings are most consistent with hypovolemic shock from dehydration.',
  note:'Four options printed (A-D), confirmed uncropped on the image.' },

{ n:58, pr:59, p:695, key:4,
  stem:'A 3-year-old girl was at a birthday party. She suddenly developed swollen cheeks and lips and a widespread urticarial rash. She is rushed to the nearby general practice surgery, where it is noted that her breathing is very noisy. She is distressed and frightened. On auscultation, she has widespread wheeze. Which medication would you give first?',
  opts:['Intramuscular antihistamine','Intravenous hydrocortisone','Oral antihistamine','Oral corticosteroid','Intramuscular adrenaline'],
  expl:'First-line treatment for anaphylaxis is IM adrenaline. Antihistamines and steroids are supportive but not lifesaving.',
  note:'options-differ flag on this page checked against the image and is spurious -- all five options read clearly, no OCR mismatch found.' },

{ n:59, pr:60, p:697, key:4,
  stem:'An 18-month-old boy presents with 3 days of vomiting and diarrhea. The vomiting has now settled, but he continues to have loose stools (he had about eight loose stools in the last 24 hours). His mucous membranes are dry, he has sunken eyes, and appears lethargic. His skin turgor is reduced. His extremities are warm and capillary refill time is normal. What is the NEXT step in management?',
  opts:['Antipyretic/analgesia','Intravenous bolus of 20 mL/kg of normal saline','Nasogastric rehydration therapy','Oral antibiotic','Oral rehydration solution'],
  expl:'Children with diarrhea and moderate dehydration but no shock should be rehydrated with ORS. IV fluids are reserved for cases with shock (cold extremities, prolonged CRT, weak pulses).',
  note:'This is the known self-reprint pair with n55 (p.689), per brief -- near-identical vignette (same 18-month-old boy, punctuation and phrasing differ slightly: "What is the next step" vs "What is the NEXT step"). The option ladder differs from n55: this page prints 5 options (A-E) vs n55\'s 4 (A-D), with more granular distractors; both keys land on oral rehydration. Staged in full -- folding is a separate pass.' },

{ n:60, pr:61, p:699, key:2,
  stem:'A 1-year-old infant arrives to the emergency department with history of diarrhea and poor fluid intake since one day. Your quick examination reveals a lethargic child; his heart rate is 180 beats per minute, his respiratory rate is 30 breaths per minute, and his blood pressure is low for age. He has poor skin turgor, 5-second capillary refill, and cool extremities. Which of the following fluids is most appropriate management for his condition?',
  opts:['IV Dextrose 5%','Oral rehydration solution','0.9% sodium chloride','Whole blood','IV sodium bicarbonate'],
  expl:'The child has hypovolemic shock due to dehydration, best treated with IV isotonic saline bolus. Oral rehydration is insufficient in this emergency',
  note:'' },

{ n:61, pr:62, p:701, key:2,
  stem:'Which of the following statements concerning shock is TRUE?',
  opts:['Dehydration due to gastroenteritis can cause shock due to maldistribution of fluid','Bradycardia occurs in compensated shock','Mottled, pale and cold skin is a sign of compensated shock','Anaphylaxis can cause shock due to hypovolemia','Decreased urine output is a sign of decompensated shock'],
  expl:'',
  note:'⚠️ ESCALATE: no boxed text explanation is printed. Instead a two-column reference table is printed below the options, titled "Early (Compensated)" and "Late (Decompensated)", listing: Early column -- Tachypnea, Tachycardia, Decreased skin turgor, Sunken eyes and fontanelle, Delayed capillary refill (>2 sec), Mottled/pale/cold skin, Core-peripheral temperature gap (>4°C), Decreased urinary output (this last row highlighted yellow); Late column -- Acidotic (Kussmaul) breathing, Bradycardia, Confusion/depressed cerebral state, Blue peripheries, Absent urine output (highlighted yellow), Hypotension. This table functions as the explanation but is not verbatim prose; flagging for the drafting pass on whether/how to capture it. Note the table places "Mottled, pale, cold skin" under Early/Compensated, consistent with the highlighted key C, and places "Decreased urinary output" under Early and "Absent urine output" under Late -- i.e. the table appears to contradict distractor E ("Decreased urine output is a sign of decompensated shock"), supporting C as correct. options-differ flag on this page checked against the image and is spurious -- all five options read clearly, no OCR mismatch found. Last page in this half; page prints 62, consistent with 61 questions total as expected per brief.' }

];
