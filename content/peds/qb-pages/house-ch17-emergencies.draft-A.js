// house-ch17-emergencies.draft-A.js — DRAFT explanations for House ch.17 "Paediatric emergencies", part A, n = 1..9.
// Drafted by Codex via tools/chapter-loop.js (draft), then rewritten by hand against the emergencies theory
// sections (L3 resuscitation, L4 shock). Validate with val-pd.js; medical read before splice.
var PEDHD_EMG_DRAFT_A = [
  {
    "id": "pedhd-emg-1",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "image": "q-pd-hd-126a",
    "imgAlt": "Line illustration in three side-by-side panels, each an infant lying supine with a gloved hand on the chest, labelled A, B and C.",
    "stem": "The paediatric team is resuscitating a 3-monthold boy who is in pulseless electrical activity. He was discovered to be blue and lifeless when his parents went to wake him in the morning. The airway has been secured and despite bag valve mask ventilation the child remains blue. Cardiac compressions are given. Where is the most appropriate position on the chest (in the figure below) to do cardiac compressions?",
    "options": [
      "A",
      "B",
      "C",
      "None of the above",
      "All of the above"
    ],
    "answer": 1,
    "explanation": "**B marks the lower half of the sternum, and that is where every paediatric compression technique in the lecture is applied.** The deck gives the hand position by age and body size, and the anatomical target does not change between them: infant with two rescuers, two **thumbs** on the lower half of the sternum with the hands encircling the thorax; infant with a single rescuer, the **tips of two fingers** on the sternum; small child, the **heel of one hand** over the lower half of the sternum; large child, **both hands** over the lower half of the sternum. What changes with size is the instrument, never the site.\n\nThis infant is the paediatric arrest the deck describes. The commonest cause of cardiopulmonary arrest in children is hypoxia from respiratory failure or airway obstruction *(not taken from the course material)*, the child arrests at the end of a slow respiratory decline, and the rhythm found is bradycardia progressing to asystole or PEA rather than VF. Pulseless electrical activity is on the **non-shockable** arm of the algorithm, so compressions and adrenaline are the treatment and there is nothing to defibrillate. That he stays blue despite a secured airway and bag-mask ventilation is why compressions are already running.\n\nThe deck's four keys to effective cardiac output are push hard, push fast, release completely, and do not interrupt compressions unnecessarily. Depth is at least one-third of the depth of the chest — 4 cm in an infant, 5 cm in a child — at 100–120 compressions per minute.\n\n**Why the others are wrong**\n\n| Option | Why it fails |\n|---|---|\n| A | Too high on the chest, over the upper sternum or the manubrium. Compression there does not sit over the ventricles and generates poor forward flow. |\n| C | Too low, at the xiphisternum or upper abdomen. The lecture's site is the *lower half of the sternum*, not the tip below it; pressure here risks liver and gastric injury. |\n| None of the above | B is a correct, labelled lower-sternal position, so a negative answer cannot stand. |\n| All of the above | The three markers are competing alternatives on one diagram, not three sites used together or in sequence. |\n\nThe depth, rate and hand-position figures are L3 pp.24, 26–32; the algorithm arms are L3 pp.33, 36–37.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Identify the lower half of the sternum as the infant chest-compression site, and place PEA on the non-shockable arm.",
    "source": "pediatric .pdf p.126 (Part I, ch.17 Q1)"
  },
  {
    "id": "pedhd-emg-2",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "image": "q-pd-hd-126b",
    "imgAlt": "Clinical close-up photograph of a young child's legs.",
    "stem": "You are in the Acute Assessment Unit and see David, a 15-month-old boy, who has a fever of 38.5°C. He has had a runny nose, cough and a fever for 3 days. Since this morning he has slept and has been difficult to wake. His heart rate is raised. He has a rash (Fig. 6.2) scattered over his legs which does not disappear with pressure. Which of the following is the most likely diagnosis?",
    "options": [
      "Acute lymphoblastic leukaemia",
      "Henoch–Schönlein purpura",
      "Immune thrombocytopenia",
      "Non-accidental injury",
      "Septicaemia"
    ],
    "answer": 4,
    "explanation": "**A febrile child with a rash that does not blanch and a depressed conscious level is septicaemia until proved otherwise.** Three of this child's four findings are on the deck's own shock lists. Sepsis is named as a cause of **distributive** shock, the mechanism being loss of vascular tone. **Tachycardia is the early sign** of shock, printed twice and captioned \"Don't forget\". **A depressed cerebral state sits in the late, decompensated column** alongside bradycardia, acidotic breathing, blue peripheries, absent urine output and hypotension. David is tachycardic *and* difficult to wake, so he already spans both columns.\n\nThe rash is the fourth finding and the discriminating one. Failure to blanch under pressure means blood has left the vessels into the skin rather than filling them, which separates this instantly from the blanching erythema of an ordinary viral illness in a toddler with three days of coryza and cough.\n\nThe timing matters more than the label. The deck's reason for teaching the early column at all is that **compensated shock is reversible and decompensated shock may be irreversible**, and a child maintains blood pressure until late by raising the heart rate and clamping the peripheral vessels — so **a normal blood pressure does not exclude shock**. A blood pressure has not been given here, and would not be reassuring if it had.\n\n**Why the others are wrong**\n\n| Option | The discriminating point |\n|---|---|\n| Acute lymphoblastic leukaemia | Marrow failure does produce petechiae and bruising, but over weeks with pallor, hepatosplenomegaly or lymphadenopathy — not a three-day coryzal illness that tips into drowsiness in one morning. |\n| Henoch–Schönlein purpura | Palpable purpura, but characteristically over the buttocks and extensor surfaces of a child who is systemically **well**, with abdominal pain, arthralgia or renal signs. Fever with reduced consciousness is not its picture *(not taken from the course material)*. |\n| Immune thrombocytopenia | Petechiae and purpura, often days to weeks after a viral illness, in a child who is otherwise **well**. It explains the rash and nothing else in the stem *(not taken from the course material)*. |\n| Non-accidental injury | Bruising, not a rash scattered over both legs, and it does not produce fever, tachycardia and a falling conscious level. |\n\nThe shock definitions and the early/late columns are L4 pp.3–8 and p.23. Septic shock recognition in full is in the infection chapter.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise fever, tachycardia, a non-blanching rash and altered consciousness as septicaemia with decompensating shock.",
    "source": "pediatric .pdf p.126 (Part I, ch.17 Q2; the question straddles the page break p.126 -> p.127)"
  },
  {
    "id": "pedhd-emg-3",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "image": "q-pd-hd-127",
    "imgAlt": "Illustration of a pair of eyes, frontal view.",
    "stem": "A 3-year-old boy who is unconscious arrives in the Emergency Department. You manage his airway, breathing and circulation. His blood glucose is normal. On examination you note his pupils are as in the opposite figure (bilateral pinpoint pupils). His temperature and other vital signs are otherwise normal. What is the most likely cause?",
    "options": [
      "Third nerve lesion",
      "Severe hypoxia",
      "Hypothermia",
      "Tentorial herniation",
      "Opiate poisoning"
    ],
    "answer": 4,
    "explanation": "**Symmetrical pinpoint pupils in an unconscious child with otherwise normal observations point to opioid toxicity.** The stem has been built to strip out the alternatives one at a time: airway, breathing and circulation are managed, the blood glucose is normal, the temperature is normal, and the other vital signs are normal. What is left is a pupillary sign, and the pupils are exactly what the deck tells you to examine — **D for disability** covers level of consciousness by AVPU, posture, and **pupil size and reactivity**.\n\nOpioids constrict the pupil by acting on the Edinger-Westphal nucleus, so the miosis is bilateral and symmetrical, and it persists while the child is unconscious *(not taken from the course material)*. In a 3-year-old the exposure is usually a household member's medication. The lecture's reversible-cause list reaches the same place from the other direction: the last of the four Ts is **toxic or therapeutic disturbances**.\n\n**Why the others are wrong**\n\n| Option | What its pupils actually do |\n|---|---|\n| Third nerve lesion | The **opposite** sign. Parasympathetic constrictor fibres are lost, so the pupil **dilates** and is unreactive, usually on one side, with ptosis and a down-and-out eye *(not taken from the course material)*. |\n| Severe hypoxia | Hypoxia is the commonest route to paediatric arrest and the first of the four Hs, but it depresses consciousness through respiratory failure — and the stem states breathing is managed and the other vital signs are normal. Late hypoxic pupils dilate rather than constrict *(not taken from the course material)*. |\n| Hypothermia | The fourth H, and it does depress consciousness. The temperature is explicitly normal, which excludes it on the stem's own terms. |\n| Tentorial herniation | Uncal herniation compresses the third nerve against the tentorial edge, giving a **fixed dilated** pupil, characteristically unilateral first — again the opposite of bilateral miosis, and it would come with hypertension, bradycardia and abnormal posturing rather than normal vital signs *(not taken from the course material)*. |\n\nThe ABCDE assessment and the pupil examination are L3 pp.6–9; the four Hs and four Ts are L3 pp.38–39. The pupillary signs themselves are supplied — neither deck prints a pupil-size differential.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Use symmetrical pinpoint pupils in an unconscious child to identify opiate poisoning, against the dilating causes.",
    "source": "pediatric .pdf p.127 (Part I, ch.17 Q3)"
  },
  {
    "id": "pedhd-emg-4",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "You are called to see a 3-year-old boy with a high fever. The nurse is worried that he is very sleepy. As you walk into the resuscitation room he makes no spontaneous response. You try calling his name but he makes no response. On stimulation, his eyes open, he cries and he raises his hand and pushes your hand away. What is this child's Glasgow Coma Score (GCS)?",
    "options": [
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    "answer": 1,
    "explanation": "**9, scored E2 + V2 + M5.** Take the three components in the order the stem gives them.\n\n| Component | What the child does | Score |\n|---|---|---|\n| **Eye opening** | Not spontaneous, and not to his name being called; the eyes open only on stimulation | **E2** — to pain |\n| **Verbal** | He cries. A cry carries no words and no recognisable content | **V2** — incomprehensible sounds |\n| **Motor** | He raises his hand and **pushes your hand away** — he finds the stimulus and moves towards it | **M5** — localises to pain |\n| | **Total** | **9** |\n\nThe motor component is the one the question turns on. Pushing the examiner's hand away is purposeful and directed at the source of the stimulus, which is localisation and scores 5. Simple withdrawal, scoring 4, is a reflex pull of the limb away from the stimulus with no attempt to reach it — that single distinction is the difference between the keyed 9 and the distractor 8.\n\nThe deck assesses consciousness by **AVPU** under D for disability, not by GCS, and prints no component scoring at all; the whole scale used above is supplied *(not taken from the course material)*. On AVPU this boy is **P** — he responds to painful stimulation and not to voice. The lecture's other disability items belong in the same examination: posture, checking for hypotonia and for decorticate rigid flexion of the arms or decerebrate rigid extension and pronation, and pupil size and reactivity.\n\nOne divergence worth carrying, since it changes the arithmetic rather than the reasoning: the **paediatric** verbal scale scores \"cries to pain\" as 3 rather than 2, which would give this boy 10 *(not taken from the course material)*. The bank keys 9 on the adult scale, and 9 is what stands here.\n\n**Why the others are wrong**\n\n| Option | Where it comes from |\n|---|---|\n| 8 | Reading the motor response as withdrawal (M4) instead of localisation. It also happens to be the classic airway threshold, which makes it a tempting figure. |\n| 10 | Requires one more point than the stem supports on the adult scale — eye opening to voice, or comprehensible words. He has neither: he does not respond to his name. |\n| 11 | Would need eye opening to voice **and** better verbal output. |\n| 12 | Describes a considerably more responsive child than one who makes no spontaneous response at all. |\n\nA GCS records the neurological response at one moment; it names no diagnosis. In a febrile 3-year-old scoring 9 the score's real use is serial — a falling number is the finding.\n\nThe AVPU and posture material is L3 pp.6–9.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Score a paediatric GCS from described eye, verbal and motor responses, separating localisation from withdrawal.",
    "source": "pediatric .pdf p.127 (Part I, ch.17 Q4)"
  },
  {
    "id": "pedhd-emg-5",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "Ryan, aged 10 months, is rushed to the children's emergency department after being found submerged in the bath. His mother runs screaming into the department saying 'Help my baby, please'. Which is the next most appropriate step?",
    "options": [
      "Commence chest compressions in a ratio of 15:2",
      "If the child is not breathing, commence bag and mask ventilation",
      "Place the child onto the examination couch and put his head into the neutral position",
      "Remove wet clothing/towels and dry the baby vigorously",
      "Stimulate the baby and shout for help"
    ],
    "answer": 4,
    "explanation": "**Stimulate the baby and shout for help — this is the opening move of the sequence, and nothing in the stem has been assessed yet.** The lecture's opening moves run in a fixed order: the SAFE approach, then **check responsiveness** by asking \"Are you all right?\" and stimulating gently, then **shout for help**, then open the airway, then check breathing for a maximum of 10 seconds, then give 5 rescue breaths. Every other option here is a step from further down that list, chosen before the child has been shown to need it.\n\nNote the deck's own caution attached to the stimulation step: **do not shake infants**, or anyone with a suspected cervical spine injury. Stimulating gently is not shaking.\n\nGetting help early is not a formality either. The deck singles out two situations for it — more than one rescuer available, or a **witnessed sudden collapse**, where defibrillation may be needed. Against that, if you are genuinely alone you give **one minute of resuscitation before leaving to seek help**, and CPR can be continued while carrying an infant or small child. Ryan has arrived in a department, so shouting brings a team within seconds.\n\n**Why the others are wrong**\n\n| Option | Why it is premature |\n|---|---|\n| Chest compressions at 15:2 | 15:2 is the correct **two-rescuer** ratio, but compressions follow the diagnosis of arrest, which rests on three findings: unconsciousness, apnoea, and no palpable pulse in a major artery. None has been established. |\n| Bag and mask ventilation if not breathing | The conditional gives it away — it presumes the breathing assessment that has not been done, and it skips calling for help. Ventilation is correct **after** 5 rescue breaths and assessment, and the deck rates bag-mask as effective as an endotracheal tube. |\n| Head into the neutral position on the couch | The right position for an infant airway, and worth knowing that it is **neutral** for an infant against the **sniffing** position for a child. But it is step four, not step one, and it summons nobody. |\n| Remove wet clothing and dry vigorously | Hypothermia is the fourth H and matters after a submersion, but drying a possibly apnoeic infant before assessing him inverts the priorities. Vigorous drying is also the newborn-at-delivery manoeuvre, not this one. |\n\nThe sequence and the age-specific airway positions are L3 pp.21–24; the arrest diagnosis is L3 pp.20–21; the ratios are L3 pp.30, 36.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Place stimulation and calling for help at the head of the paediatric BLS sequence, before airway, breathing or compressions.",
    "source": "pediatric .pdf p.127 (Part I, ch.17 Q5; the question straddles the page break p.127 -> p.128)"
  },
  {
    "id": "pedhd-emg-6",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "Mohammed, aged 8 months, has been vomiting and off his feeds for 2 days. Initially, he had episodes of crying uncontrollably, drawing his legs up into his abdomen as if in pain, and appeared fractious. His mother gave him some oral rehydration solution, but his vomiting continued and he has become lethargic. On admission to hospital he is in shock. What is the most likely diagnosis?",
    "options": [
      "Gastroenteritis",
      "Intussusception",
      "Malrotation and volvulus",
      "Meckel diverticulum",
      "Strangulated hernia"
    ],
    "answer": 1,
    "explanation": "**Intussusception. The diagnosis is in the pattern of the pain, not in the shock.** An infant of 8 months with paroxysms of inconsolable screaming, drawing the legs up to the abdomen, settling between attacks and appearing fractious in the intervals, then vomiting and becoming lethargic, is describing bowel telescoping into itself: colic while the peristaltic wave drives the intussusceptum onward, quiet in between, then obstruction, venous congestion and progressive fluid loss into the gut *(not taken from the course material)*. Lethargy in this illness is an ominous sign, not merely tiredness.\n\nThe shock is the consequence and is where the deck's material applies. **Shock is the circulation being inadequate to meet the metabolic demands of the tissues**, and this is **hypovolaemic** shock — the failing mechanism is volume. On the three-degree scale, shock corresponds to a loss of **10% or more** of body weight, against 5–9% for clinical dehydration and under 5% for no clinically detectable dehydration. Vomiting and poor fluid intake are both on the seven-cause list.\n\nThat his mother gave oral rehydration solution and the vomiting continued is a clinical detail with weight: ORS is the treatment for the option that is *not* the answer here.\n\n**Why the others are wrong**\n\n| Option | The discriminating token |\n|---|---|\n| Gastroenteritis | The obvious trap, and it does cause exactly this dehydration — but it gives diffuse cramping with **diarrhoea**, which is conspicuously absent, and it does not produce discrete recurrent attacks of leg-drawing pain. |\n| Malrotation and volvulus | The dangerous alternative, and it also presents with vomiting and shock in infancy. Its signature is **bilious** vomiting, which the stem never states; the episodic colic points elsewhere *(not taken from the course material)*. |\n| Meckel diverticulum | Classically **painless** rectal bleeding, or an appendicitis-like inflammation. Neither is described *(not taken from the course material)*. |\n| Strangulated hernia | Would obstruct and shock an infant, but expects an irreducible, tender groin or scrotal lump. No local finding is offered anywhere in the stem. |\n\nWhatever the cause, the immediate management is the same and is the subject of the next two questions: resuscitate the circulation first, then work out the deficit.\n\nThe shock definition and types are L4 pp.3–5; the degrees of dehydration and their causes are L4 pp.9–11, 13, 17.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Separate intussusception from gastroenteritis by the pattern of colic, and classify the resulting shock as hypovolaemic.",
    "source": "pediatric .pdf p.128 (Part I, ch.17 Q6)"
  },
  {
    "id": "pedhd-emg-7",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "Mohammed, aged 8 months, presented with the clinical scenario described above. He weighs 8 kg. He needs a bolus of normal saline 0.9% to treat his shock. What volume of fluid would you give initially?",
    "options": [
      "40 ml",
      "160 ml",
      "320 ml",
      "680 ml",
      "800 ml"
    ],
    "answer": 1,
    "explanation": "**160 ml — the bank is working at 20 mL/kg, and 20 × 8 = 160.**\n\n**⚠️ This diverges from the lecture, and the divergence is recorded rather than corrected.** L4 teaches a resuscitation bolus of **10 mL/kg** of balanced crystalloid or blood, repeated up to four times if necessary, so up to 40 mL/kg in total, and then intensive care. On the deck's figure an 8-kg infant would receive **80 ml**, which is not among the five options — the question has been written from the 20 mL/kg convention throughout *(the 20 mL/kg bolus is not taken from the course material; L4 records 10 mL/kg from the 6th edition of its source textbook)*. The bank's printed key stands.\n\nWhat both figures agree on is the ceiling and what it signals. A child who needs **more than 40 mL/kg** of resuscitation fluid is **likely to require mechanical ventilation**, and the deck's instruction is to call for advanced airway skills once multiple boluses are being given. For Mohammed that ceiling is 320 ml.\n\nA bolus is also only the first of the deck's **four phases of fluid management**: fluid resuscitation, then deficit replacement, then maintenance, then ongoing losses — and **only the first is an emergency**. Reassess after it: heart rate, pulse volume, capillary refill, conscious level and urine output, remembering that tachycardia is the early sign and hypotension the late one.\n\n**Why the others are wrong**\n\n| Option | What it actually is |\n|---|---|\n| 40 ml | 5 mL/kg. Below even the lecture's 10 mL/kg, and too small to restore circulating volume in a shocked infant. |\n| 320 ml | 40 mL/kg — the **cumulative maximum** after repeated boluses, not a first dose. Giving it as one bolus skips the reassessment between each. |\n| 680 ml | 85 mL/kg. Corresponds to no bolus rule; it is close to the deficit figure and is there to catch a confusion between the two phases. |\n| 800 ml | 100 mL/kg, which is the **10% deficit** for this child and also his 24-hour maintenance. It is a whole phase of the plan, not a bolus, and infusing it rapidly would be dangerous. |\n\nThe bolus and the four phases are L4 pp.14–16; the shock signs are L4 pp.6–8.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Calculate the initial resuscitation bolus, and hold the bank's 20 mL/kg against the lecture's 10 mL/kg.",
    "source": "pediatric .pdf p.128 (Part I, ch.17 Q7)"
  },
  {
    "id": "pedhd-emg-8",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "Mohammed, aged 8 months, has presented with the clinical scenario described in the previous 2 questions. He has received the fluid bolus of normal saline 0.9%, which has improved his condition. From his presentation you suspect he is 10% dehydrated. You receive his laboratory results, which reveal a plasma sodium of 138 mmol/L (within the normal range). His continuing fluid loss from vomiting is small and can be ignored. What is Mohammed’s total fluid requirement for the initial 24 hours? He weighs 8 kg.",
    "options": [
      "160 ml",
      "320 ml",
      "800 ml",
      "880 ml",
      "1600 ml"
    ],
    "answer": 4,
    "explanation": "**1600 ml — deficit plus maintenance, 800 + 800.**\n\n| Phase | Working | Volume |\n|---|---|---|\
\n| **Deficit** | 10% of 8 kg = 0.8 kg lost, and **1 kg of body weight lost = 1 litre of fluid** | **800 ml** |\n| **Maintenance, 24 h** | First 10 kg at **100 mL/kg**; he is 8 kg, so 8 × 100 | **800 ml** |\n| **Ongoing losses** | The stem permits the small vomiting losses to be ignored | 0 |\n| | **Total** | **1600 ml** |\n\nThe maintenance formula in full is 100 mL/kg for the first 10 kg, 50 mL/kg for the second 10 kg, and 20 mL/kg for every kilogram after that, summed over 24 hours. The fluid itself is **0.9% NaCl with 5% dextrose**, with 20 mmol KCl per 500-mL bag considered according to serum potassium.\n\nThe plasma sodium is in the stem to settle the **timescale**, not the volume. The deck lengthens replacement to **48 hours** in hypernatraemic dehydration and in diabetic ketoacidosis, to avoid rapid changes in osmolarity. At 138 mmol/L Mohammed is normonatraemic, so the standard initial 24 hours applies and the question can be answered as a single day's total.\n\n**⚠️ One divergence, recorded with the key left as printed.** L4 states that fluid given during resuscitation is **deducted from the deficit**. Applied strictly, Mohammed's 160-ml bolus would leave a deficit of 640 ml and a 24-hour total of **1440 ml**, which is not offered. The bank keys the undeducted 1600 ml, and that is the answer here.\n\n**Why the others are wrong**\n\n| Option | What it actually is |\n|---|---|\n| 160 ml | The resuscitation bolus already given — one phase, and the one that is finished. |\n| 320 ml | Two boluses, or 40 mL/kg. Still resuscitation volume, not a 24-hour plan. |\n| 800 ml | The deficit **or** the maintenance, but not both; whichever way it is read, one phase has been dropped. |\n| 880 ml | 800 + 80, pairing the correct deficit with a tenth of the maintenance — the arithmetic slip of using 10 mL/kg instead of 100 mL/kg for the first 10 kg. |\n\nA further adjustment worth carrying: where there is a **risk of SIADH**, pneumonia being the deck's example, give **two thirds** of standard maintenance.\n\nThe deficit assessment, the maintenance table and both adjustments are L4 pp.17–22.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Sum a 10% deficit and 24-hour maintenance for an 8-kg infant, and use the sodium to fix the replacement period.",
    "source": "pediatric .pdf p.128 (Part I, ch.17 Q8; the question straddles the page break p.128 -> p.129)"
  },
  {
    "id": "pedhd-emg-9",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "You are called to the resuscitation room where there is a 6-year-old child who has arrived by ambulance. The child has been having a generalized seizure for 15 minutes. The ambulance crew gave a dose of buccal midazolam 5 minutes ago. The emergency doctor has maintained the airway and has applied oxygen. His capillary refill time is less than 2 seconds and his heart rate 120 beats/min. What is the next most appropriate management step?",
    "options": [
      "Administer further anticonvulsant",
      "Check blood glucose level",
      "Gain intravenous access",
      "Request senior review",
      "Start bag and valve mask ventilation"
    ],
    "answer": 1,
    "explanation": "**Check the blood glucose level. Hypoglycaemia is a reversible cause that is found at the bedside in seconds, and it must be excluded before the next anticonvulsant.** The stem has already closed off the other branches of the assessment: the airway is maintained and oxygen applied, so A and B are addressed; the capillary refill is **under 2 seconds**, which is normal on the deck's own threshold of greater than 2 seconds for delay. That leaves D — and under disability the lecture asks for conscious level, posture and pupils in a child whose consciousness is being consumed by a seizure.\n\nThe heart rate of 120/min is the figure most likely to pull a reader off course. For a 6-year-old the expected range is roughly **80–120/min** *(not taken from the course material)*, so this is the top of normal rather than a tachycardia, and it comes with a normal capillary refill. Even had it been raised, a convulsing child is generating a catecholamine response; taken together these observations do not describe shock, and no fluid-first answer is offered.\n\nA seizure that has run for **15 minutes** despite buccal midazolam **5 minutes** ago is heading for status epilepticus, so this is not a leisurely assessment. Glucose is checked precisely because it is quicker than anything else on the list and because treating it changes everything that follows.\n\n**Why the others are wrong**\n\n| Option | Why not yet |\n|---|---|\n| Administer further anticonvulsant | It is very likely the step after this one, but escalating drug treatment over an unchecked glucose risks sedating a hypoglycaemic child instead of feeding him. The order is the point of the question. |\n| Gain intravenous access | Necessary, and it will be needed for the next drug and for glucose if it is low — but a capillary glucose does not wait for a cannula in a moving, fitting child. |\n| Request senior review | Appropriate in prolonged status, and it costs nothing to call — but it is not a management step that changes this minute, and it does not substitute for the test. |\n| Start bag and valve mask ventilation | Indicated for absent or inadequate breathing. The airway is maintained and oxygen is applied, with no stated ventilatory failure; the deck's own instruction is to use only the volume needed to make the chest rise. |\n\nThe ABCDE assessment is L3 pp.6–9, bag-mask technique L3 pp.12–18, and the capillary refill threshold and shock signs L4 pp.6–8.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Order the immediate steps in a prolonged paediatric seizure, putting bedside glucose ahead of a second anticonvulsant.",
    "source": "pediatric .pdf p.129 (Part I, ch.17 Q9)"
  }
];
