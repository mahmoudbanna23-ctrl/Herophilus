// house-ch17-emergencies.draft-C.js — DRAFT explanations for House ch.17 "Paediatric emergencies", part C, n = 18..26.
// Drafted by Codex via tools/chapter-loop.js (draft), then rewritten by hand. The Codex pass declared four
// facts absent from the material that the infection and allergy chapters print verbatim (the antibiotics-on-
// suspicion rule, the epiglottitis airway rule, the anaphylaxis dose, the resuscitation bolus); those are
// sourced here instead. Validate with val-pd.js; medical read before splice.
var PEDHD_EMG_DRAFT_C = [
  {
    "id": "pedhd-emg-18",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "A 9-year-old boy is 'blue-lighted' into the emergency department by ambulance with an acute history of reduced consciousness. His mother described him complaining of headache and fever earlier in the day. On examination, he is pyrexial with a GCS of 14/15 and is cardiovascularly stable. A few petechiae are noted on his legs. What is the single most effective immediate management for this child?",
    "options": [
      "Arrange an urgent CT brain scan",
      "Give a 20 mL/kg normal saline fluid bolus",
      "Give a 3 mL/kg 10% dextrose fluid bolus",
      "Gain intravenous access, take blood cultures and administer broad-spectrum antibiotics",
      "Administer vitamin K"
    ],
    "answer": 3,
    "explanation": "**Access, cultures, antibiotics — and the deck states the governing rule outright: in septicaemia, start antibiotics on clinical suspicion, not on cultures.** Fever, headache, a falling conscious level and petechiae in a 9-year-old is meningococcal disease until proved otherwise, and the material says so in as many words: **petechiae or purpura in a febrile child is meningococcal disease until proved otherwise**, listed among the red flags that change the disposition.\n\nThe reassuring parts of the stem are the dangerous parts. He is **cardiovascularly stable with a GCS of 14/15**, and the deck's warning is that septicaemia is **hard to recognise before the rash**, its early signs being only tachycardia, tachypnoea and poor perfusion. Meningococcaemia is described as the more lethal of the organism's two faces, with **very rapid progression**: a macular rash turns maculopapular, then **petechial and purpuric within a few hours**. \"A few petechiae\" is where that curve begins, not where it ends.\n\nThe treatment instruction is equally explicit — **never delay treatment for investigations**: oxygen, IV fluids, vasopressors, and **ceftriaxone or cefotaxime immediately**, with penicillin G reserved until sensitivity is proven. Cultures are drawn in the same movement because blood culture is positive in **50–75%** of meningococcal cases and **the yield falls once antibiotics are given** — but they are taken alongside treatment, never ahead of it.\n\n**Why the others are wrong**\n\n| Option | Why it fails |\n|---|---|\n| Urgent CT brain scan | Imaging delays antibiotics, which is exactly what the material forbids. The same logic governs lumbar puncture: **if the LP would delay antibiotics, skip it** — and PCR remains definitive after treatment has started. |\n| 20 mL/kg saline bolus | The right move in shock, and it will very likely be needed soon. He is stated to be cardiovascularly stable, so it is not yet the single most effective step. |\n| 3 mL/kg 10% dextrose | For documented hypoglycaemia. No glucose value is given, and nothing here suggests it. |\n| Vitamin K | Treats vitamin-K-dependent coagulopathy. The petechiae here come from endotoxin-driven inflammation causing shock and DIC, not from a deficiency state. |\n\nThe septicaemia and red-flag rows are L18 pp.14–15; the meningococcal organism, rash, red flags and treatment are L18 and SBI as set out in the infection chapter.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Treat fever with petechiae as meningococcal disease and give antibiotics on suspicion, ahead of imaging or cultures.",
    "source": "pediatric .pdf p.132 (Part I, ch.17 Q18)"
  },
  {
    "id": "pedhd-emg-19",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "A 3-year-old girl is 'blue-lighted' into the local emergency department with reduced consciousness. Her mother informs the paramedic that her daughter has been unwell for the last 8 days with vomiting and profuse diarrhoea. On arrival, she is apyrexial, has a heart rate of 170 beats per minute and respiratory rate of 20 per minute. Her systolic blood pressure is 75 mmHg and she has a capillary refill time of 5 seconds. She is barely responsive to pain. Resuscitation begins and a blood gas reveals a pH 6.9, base excess 18 mmol/L and blood sugar of 2.2 mmol/L. What is the most likely clinical syndrome?",
    "options": [
      "Anaphylactic shock",
      "Septicaemic shock",
      "Cardiogenic shock",
      "Hypovolaemic shock",
      "Neurogenic shock"
    ],
    "answer": 3,
    "explanation": "**Decompensated hypovolaemic shock. Eight days of vomiting and profuse diarrhoea is the cause, and the deck names hypovolaemic shock as the commonest type in children.**\n\nEvery item in this stem sits on the lecture's late, **decompensated** column rather than its early one:\n\n| Finding | Where the deck places it |\n|---|---|\n| Heart rate 170/min | Tachycardia — the **early** sign, still present |\n| Capillary refill 5 seconds | Delayed, against a threshold of greater than 2 seconds |\n| Systolic BP 75 mmHg | **Hypotension — late.** A child holds blood pressure until last |\n| Barely responsive to pain | **Depressed cerebral state — late** |\n| pH 6.9 | Acidosis, from tissue hypoperfusion and anaerobic metabolism |\n\nShock is defined as a circulation inadequate to meet the metabolic demands of the tissues, and it corresponds to a fluid loss of **10% or more** of body weight. The reason the early column is taught at all is the reason it matters here: **compensated shock is reversible; decompensated shock may be irreversible.** This child has crossed that line, which is why resuscitation is already running.\n\n**⚠️ A printed number is internally inconsistent, and is recorded rather than corrected.** The gas reads **\"base excess 18 mmol/L\"** as a positive value. A base excess of +18 is a severe metabolic **alkalosis**, which cannot coexist with a pH of 6.9; the value consistent with the rest of the gas is **−18 mmol/L**, a profound base deficit. The transcription reproduces what the book prints. Note also the **blood sugar of 2.2 mmol/L** — hypoglycaemia, expected in a small child after eight days of poor intake, and treatable at once; it does not change the syndrome named.\n\n**Why the others are wrong**\n\n| Option | The discriminating point |\n|---|---|\n| Anaphylactic shock | Distributive, and on the deck's list — but it needs an allergen exposure, and urticaria, facial swelling or wheeze. None is present, and the illness has run eight days. |\n| Septicaemic shock | The serious alternative, also distributive. She is **apyrexial** with no focus, and the history supplies a complete mechanical explanation for the volume loss. |\n| Cardiogenic shock | Pump failure — myocarditis, arrhythmia, congenital disease. Nothing suggests it, and the tachycardia here is a compensatory response to lost volume. |\n| Neurogenic shock | Loss of sympathetic vascular tone after spinal cord injury. It classically gives hypotension **without** tachycardia; she is at 170/min. |\n\nThe shock definition, types and the early-versus-late columns are L4 pp.3–8, 23; the degrees of dehydration are L4 pp.9–13.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Identify decompensated hypovolaemic shock from prolonged gastrointestinal losses, and read a gas whose printed sign is wrong.",
    "source": "pediatric .pdf p.132 (Part I, ch.17 Q19)"
  },
  {
    "id": "pedhd-emg-20",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "A known epileptic is brought into the local emergency department in status epilepticus. The paramedic crew have given rectal diazepam 10 minutes ago but the patient continues to have generalized tonic-clonic seizures. He now has intravenous access and his blood sugar is 5.5 mmol/L. What is the most appropriate next drug treatment to be given?",
    "options": [
      "Intravenous lorazepam",
      "Intravenous phenytoin",
      "Intravenous thiopental",
      "Rectal paraldehyde",
      "Buccal midazolam"
    ],
    "answer": 0,
    "explanation": "**Intravenous lorazepam — the second benzodiazepine dose, now by the route that has just become available.** *(The status epilepticus drug ladder is answered from general medical knowledge and is not taken from the course material: sweeping the pediatrics theory returns no mention of lorazepam, diazepam, midazolam, phenytoin or status epilepticus. The resuscitation deck supplies the ABCDE framework around it and nothing more.)*\n\nThe conventional ladder gives **two** doses of benzodiazepine before moving to a second-line agent, at roughly ten-minute intervals. The crew gave one, rectally, ten minutes ago. So this child is due his second dose, and the stem has just told you a cannula is in — which changes the route, not the rung. Lorazepam is preferred intravenously over diazepam because its anticonvulsant effect lasts substantially longer, and its cerebral redistribution is slower.\n\nTwo details in the stem exist to be cleared before drug treatment: the **blood sugar of 5.5 mmol/L** is normal, so hypoglycaemia is excluded as a cause, and intravenous access is established, so no route is barred. Throughout, resuscitation runs in parallel — airway, high-flow oxygen, and monitoring, since every drug on this list depresses respiration.\n\n**Why the others are wrong**\n\n| Option | Where it actually sits |\n|---|---|\n| Intravenous phenytoin | The **second-line** agent, given as a loading dose over about 20 minutes once **two** benzodiazepine doses have failed. Only one has been given. |\n| Intravenous thiopental | Refractory status — a general anaesthetic requiring rapid sequence induction, intubation and intensive care. Several rungs too high. |\n| Rectal paraldehyde | A historical alternative rescue route, and pointless now that a cannula is in place. |\n| Buccal midazolam | A perfectly good **pre-hospital** rescue route, and it would count as the second dose — but with intravenous access secured there is no reason to prefer mucosal absorption over a titratable intravenous dose. |\n\nNote the pairing with `pedhd-emg-25`, which asks the same question from the opposite direction: there the first dose was buccal midazolam and the answer is again intravenous lorazepam. The rule being tested both times is *second benzodiazepine, best available route*.\n\nThe ABCDE framework around the seizing child is L3 pp.6–9.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Give the second benzodiazepine dose intravenously in ongoing status, before escalating to phenytoin.",
    "source": "pediatric .pdf p.132 (Part I, ch.17 Q20)"
  },
  {
    "id": "pedhd-emg-21",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "A previously well 5-year-old boy is brought in by ambulance to the emergency department with an acute onset of breathing difficulty. On arrival, he appears unwell, pale with audible stridor and is sitting upright unable to speak. His temperature is 40C. What is the first priority in this child's management?",
    "options": [
      "Lie the child down",
      "Take a throat swab",
      "Obtain intravenous access",
      "Give oral dexamethasone",
      "Summon immediate anaesthetic help"
    ],
    "answer": 4,
    "explanation": "**Summon immediate anaesthetic help. This is acute epiglottitis, and the deck's instruction is explicit: airway first — secure it, usually by intubation, before any other procedure.**\n\nEvery feature the book gives is on the epiglottitis side of the material's own discrimination table:\n\n|  | This child | Acute epiglottitis | Viral croup |\n|---|---|---|---|\n| **Onset** | Acute | **Hours**, no prodrome | Over 1–2 days after coryza |\n| **Fever** | **40°C** | **High** | Absent or low grade |\n| **Voice** | **Unable to speak** | **Muffled, \"hot potato\"** | Hoarse |\n| **Posture** | **Sitting upright** | **Tripod, sitting forward** | Any |\n| **Cough** | Not described | Absent or slight | **Barking** |\n| **Handling** | — | **Do not examine the throat** | Steroids, usually safe to examine |\n\nThe organism is **Haemophilus influenzae type b**, and the deck lists **sudden airway obstruction and death** among its complications. The airway here is partly obstructed already — stridor with an inability to speak — and it is being held open only by the child's own posture and effort. Anything that disturbs him can convert partial obstruction into complete obstruction, which is why the answer is to bring the person who can secure the airway rather than to do anything to the child.\n\n**Why the others are wrong**\n\n| Option | Why it is dangerous or premature |\n|---|---|\n| Lie the child down | He is sitting upright because that position holds his airway open. Forcing him supine can obstruct it completely. |\n| Take a throat swab | The material forbids it in as many words: **do not examine the throat**. Instrumenting the pharynx risks laryngospasm and total obstruction. |\n| Obtain intravenous access | Needed later, but cannulation distresses a child whose airway depends on staying calm — and distress increases obstruction. |\n| Give oral dexamethasone | This treats **croup**, which the table above excludes, and the deck's own epiglottitis line puts dexamethasone **after** the airway is secured. An oral drug also cannot be swallowed by a drooling child who cannot speak. |\n\nStridor is on the airway and breathing assessment in both emergency decks, and the febrile-child plate lists stridor as pointing to epiglottitis, viral croup or bacterial tracheitis.\n\nThe epiglottitis hallmark, the airway-first rule and the croup discrimination are L18 as set out in the infection chapter; the ABCDE assessment is L3 pp.6–9.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise epiglottitis and secure expert airway help without examining the throat or laying the child down.",
    "source": "pediatric .pdf p.133 (Part I, ch.17 Q21)"
  },
  {
    "id": "pedhd-emg-22",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "A 9-year-old boy in asystole is brought in by ambulance to the emergency department. The various members of the cardiac arrest team arrive and resuscitation begins. Which is the most important drug of choice?",
    "options": [
      "Adrenaline (epinephrine)",
      "Sodium bicarbonate",
      "Atropine",
      "Amiodarone",
      "Lidocaine"
    ],
    "answer": 0,
    "explanation": "**Adrenaline. Asystole is a non-shockable rhythm, and adrenaline is the only drug on the non-shockable arm.**\n\nThe rhythm classification is the part of this the material teaches directly. Both arms are printed:\n\n| Arm | Rhythms | What is done |\n|---|---|---|\n| **Non-shockable** | **Pulseless electrical activity · asystole** | CPR, **adrenaline immediately**, then every 3–5 minutes |\n| **Shockable** | **Ventricular fibrillation · pulseless VT** | Shock first, then CPR; adrenaline after the third shock |\n\nAsystole is also the rhythm the deck expects in children, because paediatric arrest follows respiratory failure rather than a primary cardiac event, so the heart arrives hypoxic and slows through bradycardia into asystole. The shockable arm is described as the uncommon one, and defibrillating asystole or PEA does nothing.\n\n**⚠️ The doses are supplied, not printed.** The pediatrics theory records that sweeping both emergency decks returns **zero hits** for adrenaline, epinephrine, atropine, amiodarone, joule, J/kg and microgram — L3 p.33 is a screenshot of a scrolled page and everything below the shockable row was cut off. The conventional arrest dose is **10 micrograms/kg, or 0.1 mL/kg of 1:10,000, IV or IO, every 3 to 5 minutes** *(not taken from the course material)*. Note the contrast the theory chapter draws: **the same 10 micrograms/kg treats anaphylaxis, but IM as 1:1,000** — same dose, different route and different dilution.\n\nAdrenaline works in arrest chiefly through **alpha-mediated vasoconstriction**, which raises aortic diastolic pressure and so coronary perfusion during compressions. It supports the compressions rather than replacing them, and the deck is emphatic that nothing displaces effective CPR: push hard, push fast, release completely, do not interrupt.\n\n**Why the others are wrong**\n\n| Option | Where it belongs |\n|---|---|\n| Sodium bicarbonate | Not routine in arrest. The material uses it for **tricyclic antidepressant** arrhythmias, and the DKA chapter states it is generally **contraindicated** — over-correction carries its own harms. |\n| Atropine | An anticholinergic for **vagally mediated** bradycardia; the material's use for it is organophosphate poisoning, in large doses. It does nothing for asystole. |\n| Amiodarone | **5 mg/kg IV or IO after the third and fifth shocks** — by definition the **shockable** arm, and there is nothing to shock here. |\n| Lidocaine | An alternative antiarrhythmic for refractory ventricular rhythms; same objection *(not taken from the course material)*. |\n\nThe two algorithm arms are L3 pp.33, 36–37, and the compression quality rules L3 pp.26–32.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Place asystole on the non-shockable arm and choose adrenaline over the antiarrhythmics reserved for shockable rhythms.",
    "source": "pediatric .pdf p.133 (Part I, ch.17 Q22)"
  },
  {
    "id": "pedhd-emg-23",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "A 3-year-old girl is brought into the emergency department by ambulance with a 4-hour history of listlessness, high fever and reduced responsiveness. Her temperature is 40.0C, she has a heart rate of 170 beats per minute, a respiratory rate of 35 per minute and saturations of 100% in 15 litres of high-flow oxygen. On examination, she is responsive to voice and maintaining her airway. Systemic examination is unremarkable; her capillary refill time is 4 seconds. What is the first priority in the management of this child?",
    "options": [
      "Intubation and ventilation",
      "10 mL/kg bolus of normal saline",
      "20 mL/kg bolus of normal saline",
      "15 mL/kg packed red cells",
      "3 mL/kg bolus of dextrose"
    ],
    "answer": 2,
    "explanation": "**A 20 mL/kg saline bolus. She is in shock — tachycardic at 170/min with a capillary refill of 4 seconds — and fluid resuscitation is the first of the deck's four phases of fluid management.**\n\nWork the letters. **A** is stated to be maintained. **B** is satisfied: saturations are 100%, albeit on 15 litres of oxygen. **C** is not: capillary refill of 4 seconds is delayed against the threshold of greater than 2 seconds, and tachycardia is the **early** sign of shock, printed twice in the deck and captioned \"Don't forget\". That she is only **responsive to voice** with a 4-hour history of fever puts a distributive, septic cause at the head of the list, but the treatment for the circulation is the same whatever fills it.\n\nThe four phases run **fluid resuscitation → deficit replacement → maintenance → ongoing losses**, and only the first is an emergency. Reassess immediately after the bolus: heart rate, pulse volume, capillary refill, conscious level and urine output.\n\n**⚠️ This question diverges from the lecture, and the divergence is unusually sharp because the lecture's own figure is printed here as a wrong answer.** L4 teaches a resuscitation bolus of **10 mL/kg**, repeated up to four times to a maximum of 40 mL/kg — and **10 mL/kg is option B**, keyed wrong. The bank works at 20 mL/kg throughout the chapter, as it does at `pedhd-emg-7` *(the 20 mL/kg figure is not taken from the course material; L4 records 10 mL/kg, from the 6th edition of its source textbook)*. **The printed key stands**; the deck's figure is recorded beside it. Both agree on the ceiling: past **40 mL/kg** the child is likely to need mechanical ventilation, and advanced airway skills should be summoned.\n\n**Why the others are wrong**\n\n| Option | Why not first |\n|---|---|\n| Intubation and ventilation | She is responsive to voice, maintaining her own airway, and fully saturated. It may follow if she needs repeated boluses, but it is not the first priority. |\n| 10 mL/kg saline | See above — the lecture's figure, but not this book's key. |\n| 15 mL/kg packed red cells | For haemorrhage or severe anaemia. No bleeding and no haemoglobin are described. |\n| 3 mL/kg dextrose | For hypoglycaemia. No glucose value is given; it would not correct the perfusion failure that is stated. |\n\nOne caution worth carrying: saturations of 100% on high-flow oxygen say nothing reassuring about the circulation — a pulse oximeter reports haemoglobin saturation, not delivery, and the shocked periphery is exactly where its reading is least trustworthy.\n\nThe shock signs are L4 pp.6–8, the bolus and four phases L4 pp.14–16.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Resuscitate the circulation first in a febrile shocked child, and hold the bank's 20 mL/kg against the deck's 10 mL/kg.",
    "source": "pediatric .pdf p.133 (Part I, ch.17 Q23)"
  },
  {
    "id": "pedhd-emg-24",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "An 8-year-old girl is brought to hospital following ingestion of a cereal bar containing peanuts. She is noted to have a widespread urticarial rash and swelling of the face and lips. She is finding it difficult to speak and there is widespread wheeze on auscultation. The single most important step in her management is which of the following?",
    "options": [
      "Intramuscular 1 microgram/kg adrenaline (epinephrine) (1:1000)",
      "Intravenous adrenaline (epinephrine), 1 microgram/kg (1:10 000)",
      "Intravenous hydrocortisone",
      "Oxygen",
      "Chlorphenamine"
    ],
    "answer": 0,
    "explanation": "**Intramuscular adrenaline of 1:1,000 — the route and dilution are what this question turns on, and they are what the deck prints.** Peanut ingestion with widespread urticaria, facial and lip swelling, difficulty speaking and wheeze is anaphylaxis on the material's own card, which triggers four severe rows at once: significant swelling of the tongue or lips, wheezing and shortness of breath, a tight throat with trouble speaking, and many hives. **Any one** severe finding means epinephrine immediately.\n\nThe deck's dose is **0.01 mg/kg of a 1:1,000 (1 mg/mL) solution, intramuscularly, into the mid-anterolateral thigh**, to a maximum of **0.3 mg in a child**, with the time recorded and the dose repeated **every 5 to 15 minutes** if needed. It also states plainly that **antihistamines and steroids are additional only — never instead of adrenaline**.\n\n**⚠️ The printed dose diverges from the deck, and is recorded exactly as printed.** Option A reads **1 microgram/kg**, which is **a tenth** of the 0.01 mg/kg — that is, 10 micrograms/kg — taught in the allergy lecture and used universally. For this 8-year-old the printed figure would give roughly 25 micrograms instead of about 250. **The key is not moved and the option is not edited**: what the question is testing is the choice of the **intramuscular** route with the **1:1,000** dilution against an intravenous 1:10,000 alternative, and on that the printed key is right. The dose defect is noted here and the correct figure recorded beside it.\n\n**Why the others are wrong**\n\n| Option | Why it fails |\n|---|---|\n| IV adrenaline 1:10,000 | The **arrest** preparation and route. The theory chapter draws the contrast directly: the same 10 micrograms/kg is IV or IO as **1:10,000** in cardiac arrest, but IM as **1:1,000** in anaphylaxis. Intravenous adrenaline in a perfusing child risks hypertensive crisis and arrhythmia and belongs to specialists. |\n| IV hydrocortisone | A steroid — hours to act, listed as an adjunct after adrenaline, with no dose printed in the protocol. |\n| Oxygen | Genuinely important, and the deck gives it as **high-flow, 6–8 L/min** by face mask. But oxygen does not reverse laryngeal oedema or bronchospasm, and it is supportive, not the single most important step. |\n| Chlorphenamine | An antihistamine, adjunct only. The card's headline instruction is to **not depend on antihistamines or inhalers to treat a severe reaction: use epinephrine.** |\n\nEvery dose above is L27 pp.20–24; the severe-symptom card is L27 pp.17–19, 27. The full anaphylaxis protocol is set out in the allergy chapter.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Choose intramuscular 1:1,000 adrenaline over the intravenous 1:10,000 arrest preparation, and record the printed dose defect.",
    "source": "pediatric .pdf p.134 (Part I, ch.17 Q24)"
  },
  {
    "id": "pedhd-emg-25",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "A 12-year-old girl with known epilepsy is brought in by ambulance. She has been fitting for 15 minutes. Her parents administered buccal midazolam after 5 minutes as part of her rescue regimen. On arrival, tonic-clonic movements are ongoing. The ambulance crew have inserted a cannula and are giving high flow oxygen via facemask. What is the next step in management?",
    "options": [
      "Intravenous lorazepam",
      "Rectal diazepam",
      "Rapid sequence induction",
      "Loading dose of phenytoin",
      "Intravenous phenobarbital"
    ],
    "answer": 0,
    "explanation": "**Intravenous lorazepam — the second benzodiazepine dose, exactly as at `pedhd-emg-20`, arrived at from the opposite starting point.** *(As there, the status epilepticus drug ladder is answered from general medical knowledge and is not taken from the course material; no pediatrics deck names any of these drugs.)*\n\nThe parents gave one dose of buccal midazolam at 5 minutes, correctly and as prescribed. She has now been fitting for **15 minutes**, so she meets the definition of status epilepticus, and the ladder allows a **second** benzodiazepine before second-line treatment. Intravenous access is in and oxygen is running, so the second dose goes intravenously, where it can be titrated and acts fastest.\n\nWhat matters as much as the drug is what runs alongside it. Every agent on this list depresses respiration, and cumulative benzodiazepine doses are the commonest reason a child in status stops breathing — which is why high-flow oxygen, continuous monitoring and airway readiness precede the injection, and why a glucose should already have been checked *(not taken from the course material)*.\n\n**Why the others are wrong**\n\n| Option | Where it sits |\n|---|---|\n| Rectal diazepam | Would count as the second dose, but the rectal route is for when no cannula exists. One is in place, so there is no reason to accept slower, less predictable absorption. |\n| Rapid sequence induction | For **refractory** status, or airway failure. Her airway is being supported and only one rescue dose has been given; anaesthetising her now skips two rungs. |\n| Loading dose of phenytoin | Correct as the **second-line** agent — but after **two** benzodiazepine doses have failed. She has had one. It is very likely the step after this one. |\n| Intravenous phenobarbital | A later escalation, historically used where phenytoin is unavailable or contraindicated, and a marked respiratory depressant. Not the next step. |\n\nThe pairing with `pedhd-emg-20` is deliberate on the book's part: one question starts from a rectal dose, the other from a buccal dose, and both answer **the second benzodiazepine, by the best available route**. Recognising that the two stems are the same question saves working the ladder twice.\n\nThe ABCDE priorities that frame this are L3 pp.6–9.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Escalate from a buccal rescue dose to intravenous lorazepam once access exists, before second-line phenytoin.",
    "source": "pediatric .pdf p.134 (Part I, ch.17 Q25)"
  },
  {
    "id": "pedhd-emg-26",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "A 3-month-old baby is found dead in a Moses basket sleeping on her back. She was born in July at 41 weeks to a mother who smoked during the pregnancy and afterwards. Which of the following factors is the most likely to have influenced her sudden infant death?",
    "options": [
      "Maternal smoking",
      "Sleeping in a ‘Moses basket’",
      "Supine sleeping position",
      "Born in summer months",
      "Post-term delivery"
    ],
    "answer": 0,
    "explanation": "**Maternal smoking — the only genuine risk factor in the list, and the stem has been built so that every other option is either protective or neutral.** *(As at `pedhd-emg-12`, this is answered from general medical knowledge and is not taken from the course material: sudden infant death syndrome appears nowhere in the pediatrics theory.)*\n\nSmoking is the strongest modifiable risk factor after sleep position, and this baby was exposed both **during the pregnancy and afterwards** — the stem specifies both, because antenatal and postnatal exposure carry independent risk and combine. Antenatal exposure impairs fetal growth and lung development and is thought to blunt the arousal responses that let an infant recover from a hypoxic or rebreathing episode; postnatal exposure adds to it. The risk is dose-related.\n\nThe age fits the epidemiology: incidence peaks between **2 and 4 months**, which is why a 3-month-old is the age chosen.\n\n**Why the others are wrong**\n\n| Option | What it actually is |\n|---|---|\n| Sleeping in a Moses basket | A safe, firm, flat sleep surface of the infant's own — this is exactly what safer-sleep advice recommends, against bed-sharing or sleeping on a sofa. |\n| Supine sleeping position | **Protective, and the strongest protection there is.** It is the answer to `pedhd-emg-12`, where it is keyed as the single factor behind the dramatic fall in incidence — and here the same fact is printed as a distractor. Seeing it offered as a *risk* is the trap. |\n| Born in summer months | The seasonal association runs the other way: incidence is higher in **winter**, and has weakened as sleep position changed. July is the wrong end of it. |\n| Post-term delivery | **Prematurity** and low birth weight raise the risk. 41 weeks is term-plus, not preterm, and carries no comparable association. |\n\nThe two SIDS questions in this chapter are worth reading together: `pedhd-emg-12` asks which measure caused the decline, and this one asks which exposure caused a death. Supine sleeping is the correct answer to the first and a deliberate false lead in the second.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Identify maternal smoking as the risk factor in a stem where the other options are protective or neutral.",
    "source": "pediatric .pdf p.134 (Part I, ch.17 Q26)"
  }
];
