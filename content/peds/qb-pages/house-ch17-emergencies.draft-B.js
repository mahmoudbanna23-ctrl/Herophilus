// house-ch17-emergencies.draft-B.js — DRAFT explanations for House ch.17 "Paediatric emergencies", part B, n = 10..17.
// Drafted by Codex via tools/chapter-loop.js (draft), then rewritten by hand. Two shared option menus live
// here: n10+n11 anchored at pedhd-emg-10, and n13..n17 anchored at pedhd-emg-13. The anaphylaxis material is
// the allergy deck (L27), not the emergencies decks. Validate with val-pd.js; medical read before splice.
var PEDHD_EMG_DRAFT_B = [
  {
    "id": "pedhd-emg-10",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "Seb, a 2-year-old boy, was at his cousin's birthday party. His mother noticed that he has suddenly developed a widespread urticarial rash and has also become flushed in the face. His vital signs are normal and he has no respiratory compromise. Which medication would you give?",
    "options": [
      "Intramuscular adrenaline",
      "Intramuscular antihistamine",
      "Intravenous hydrocortisone",
      "Oral antihistamine",
      "Oral corticosteroid"
    ],
    "answer": 3,
    "explanation": "**Oral antihistamine is the printed key: this is an allergic reaction confined to the skin, with no airway, breathing or circulatory involvement.** Seb has a rash and facial flushing; his vital signs are normal and there is no respiratory compromise. Nothing here meets the definition of anaphylaxis, which needs a systemic reaction threatening airway, breathing or circulation, so the treatment ladder starts at its bottom rung rather than its top.\n\nThis is the anchor for the shared menu it forms with `pedhd-emg-11`. Both questions print the same five options; what separates them is the presence or absence of respiratory involvement.\n\n| Option | Where it sits on the ladder |\n|---|---|\n| Intramuscular adrenaline | The treatment for **anaphylaxis** — a life-saving drug that is disproportionate for isolated hives, and is the key for `pedhd-emg-11`. |\n| Intramuscular antihistamine | The parenteral route buys no advantage in a stable child who can swallow; the deck classes antihistamines as adjuncts, whichever route they take. |\n| Intravenous hydrocortisone | A steroid, so its onset is delayed by hours. It cannot be an immediate treatment, and it needs a cannula in a well toddler. |\n| **Oral antihistamine** | Relieves itch and urticaria in a child who is otherwise stable — the printed key. |\n| Oral corticosteroid | Same delayed onset as hydrocortisone, and no faster relief of the symptom actually present. |\n\n**⚠️ This diverges from the allergy lecture, and the divergence is recorded rather than corrected.** L27's emergency action-plan card sorts symptoms into mild and severe and hangs the decision on that sorting. Its **mild** skin row reads \"a few hives, mild itch\" — for a single body area, the card advises **antihistamine if ordered by a healthcare provider**, staying with the person, watching closely, and giving epinephrine if symptoms worsen. Its **severe** skin row, however, reads **\"many hives, widespread redness\"**, and the card's rule is that **any one severe finding means epinephrine immediately**. Seb's rash is described as *widespread*, and his face is flushed, which reads onto the severe row and not the mild one — so the deck's card, applied literally, would select intramuscular adrenaline. Printed across the head of that card is the instruction **do not depend on antihistamines or inhalers to treat a severe reaction: use epinephrine.** The bank keys oral antihistamine on the absence of respiratory compromise and normal vital signs; **the key stands as printed**, and the card's stricter reading is recorded here beside it.\n\nOne further rule from the same card is worth carrying, because it catches the case this question is one half of: **mild symptoms in more than one body area also mean epinephrine.** A single system, mild, is the only combination the card treats with an antihistamine alone.\n\nThe mild and severe tables and the action-plan card are L27 pp.17–19, 27; the full anaphylaxis protocol and every dose are L27 pp.20–24, and are set out in the allergy chapter rather than repeated here.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Separate a skin-limited allergic reaction from anaphylaxis, and hold the bank's antihistamine key against the deck's severe-symptom card.",
    "source": "pediatric .pdf p.129 (Part I, ch.17 Q10)"
  },
  {
    "id": "pedhd-emg-11",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "Jenny, a 3-year-old girl, was at a village fete. She suddenly developed swollen cheeks and lips and a widespread urticarial rash. She is rushed to the nearby general practice surgery, where it is noted that her breathing is very noisy. She is distressed and frightened. On auscultation she has widespread wheeze. Which medication would you give first?",
    "options": [
      "Intramuscular adrenaline",
      "Intramuscular antihistamine",
      "Intravenous hydrocortisone",
      "Oral antihistamine",
      "Oral corticosteroid"
    ],
    "answer": 0,
    "explanation": "**Intramuscular adrenaline. This is anaphylaxis, and the discriminating token against `pedhd-emg-10` is the airway and breathing involvement — noisy breathing with widespread wheeze.** The comparative ladder for these five shared options is written once at `pedhd-emg-10`; only what selects adrenaline here is given.\n\nJenny triggers four separate rows of the deck's **severe** symptom table at once: **significant swelling of the tongue or lips** (swollen cheeks and lips), **wheezing and shortness of breath** (widespread wheeze), **a tight or hoarse throat with trouble breathing** (very noisy breathing), and **many hives or widespread redness**. The card's rule is that **any one** severe finding means epinephrine immediately, and it separately makes **a combination of symptoms from different body areas** its own indication. Her distress and fright are not incidental either — the card lists **a feeling that something bad is about to happen** among the severe findings.\n\nThe deck's dose is **0.01 mg/kg of 1:1,000 adrenaline given intramuscularly into the mid-anterolateral thigh**, to a maximum of **0.3 mg in a child**, with the time recorded and the dose **repeated every 5 to 15 minutes** if needed; most patients respond to one or two doses. Noisy breathing is stridor from laryngeal oedema, which is why nothing slower will do.\n\nWhy no other option can come **first**: the deck states plainly that **antihistamines and steroids are additional only — never instead of adrenaline**, and prints no dose for either in the initial protocol. Hydrocortisone and oral corticosteroid act over hours; an antihistamine by either route treats itch, not airway oedema or bronchospasm. Salbutamol is likewise listed as an addition **after** adrenaline, and the card warns against depending on inhalers in a severe reaction.\n\n**⚠️ A printed anomaly in this question, recorded and not corrected.** The five options run down the page in the order shown above, but the letters printed beside them read **A, E, C, D, B** across the page break rather than A to E. The printed answer is **A**, which is the first option down the page, **Intramuscular adrenaline** — so the key is unaffected by the lettering. In this app the letters are positional, and the option order above is the printed order down the page.\n\nThe severe and mild tables are L27 pp.17–19, 27; the protocol and doses are L27 pp.20–24. Anaphylaxis is named as a cause of distributive shock in the shock deck, L4 pp.3–5.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Identify anaphylaxis from airway and breathing involvement and give intramuscular adrenaline before any adjunct.",
    "source": "pediatric .pdf p.129 (Part I, ch.17 Q11; the question straddles the page break p.129 -> p.130)"
  },
  {
    "id": "pedhd-emg-12",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "There has been a dramatic decline in the incidence of sudden infant death syndrome in the UK. Which of the following is the single most important factor responsible for this decline?",
    "options": [
      "Feet to foot of cot",
      "Keeping baby in parent's room until 6 months of age",
      "Keeping room cool to prevent overheating",
      "Parents not smoking in the same room as infant",
      "Supine sleeping"
    ],
    "answer": 4,
    "explanation": "**Supine sleeping.** *(This question is answered from general medical knowledge and is not taken from the course material — sudden infant death syndrome appears nowhere in the pediatrics theory, and neither emergencies lecture addresses it.)*\n\nEvery option listed is genuine safer-sleep advice, so the question is not asking which measures help; it is asking which single change accounts for the **dramatic** fall. The answer is historical as much as clinical. Through the 1970s and 1980s prone sleeping was actively recommended, and campaigns from around 1991 reversed that advice; incidence fell by roughly three quarters within a few years, faster and further than any other single intervention has produced. Nothing else on this list was introduced as a population-wide reversal of standing advice.\n\nThe mechanism ties the risk factors together. Prone sleeping is thought to promote rebreathing of exhaled carbon dioxide into soft bedding, impair arousal from sleep, and reduce the infant's ability to lose heat — which is also why overheating is a separate risk factor rather than a competing explanation. Side sleeping was permitted early in the campaigns and later dropped, because an infant placed on the side can roll prone.\n\n| Option | Real, but not the answer |\n|---|---|\n| Feet to foot of cot | Placing the feet at the cot's end stops an infant wriggling under the bedding. Advised alongside supine sleeping, but a refinement of it, not the change itself. |\n| Baby in the parent's room to 6 months | Room-sharing without bed-sharing is associated with reduced risk and is standard advice, but it was never the step change. |\n| Keeping the room cool | Overheating is an independent risk factor, and this addresses it. Note that it and supine sleeping act partly through the same thermoregulatory route. |\n| Parents not smoking near the infant | Both antenatal and postnatal smoke exposure are strong, well-established risk factors — arguably the strongest **modifiable** one after sleep position. Smoking rates fell gradually over decades, which does not fit a dramatic decline. |\n\nAll of these belong to the same safer-sleep package, and the wording \"single most important factor\" is what forces a choice between them.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Identify supine sleeping as the single change behind the fall in sudden infant death syndrome, against the other safer-sleep measures.",
    "source": "pediatric .pdf p.130 (Part I, ch.17 Q12)"
  },
  {
    "id": "pedhd-emg-13",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "Nathaniel, a 4-year-old boy, is brought to hospital with shortness of breath. He is able to talk but has oxygen saturation of 90%. His capillary refill time is less than 2 seconds. Which of the following is the most appropriate next step in the management of that patient?",
    "options": [
      "Check blood glucose",
      "Check pupils",
      "Airway opening manoeuvres",
      "High-flow oxygen therapy",
      "Commence cardiac compressions using the hands encircling method"
    ],
    "answer": 3,
    "explanation": "**High-flow oxygen therapy — and this is the anchor for the five questions n13 to n17, which all print the same option menu.** Every one of them is answered the same way: walk ABCDE in order and act on the **first** abnormality you meet. The options are not a list of treatments to rank by severity; they are the assessment sequence itself, one option per letter.\n\n| Option | Which letter it belongs to | It is the answer when |\n|---|---|---|\n| Airway opening manoeuvres | **A** | The airway is not patent — an unconscious child, gasping, snoring or silent. |\n| High-flow oxygen therapy | **B** | Breathing is inadequate or oxygenation is poor, with a patent airway. |\n| Commence cardiac compressions, hands encircling | **C** | Circulation has failed — arrest, or profound bradycardia despite effective ventilation. |\n| Check blood glucose | **D** | A, B and C are addressed and hypoglycaemia is plausible. |\n| Check pupils | **D** | A, B, C and glucose are addressed and consciousness is still impaired. |\n\nApplied to Nathaniel: he is **able to talk**, which is itself the airway assessment — speech requires a patent airway and moving air, so **A is clear**. **B is not**: he is short of breath with an oxygen saturation of 90%. His **capillary refill is under 2 seconds**, normal against the deck's threshold of greater than 2 seconds, so **C is clear**. The first abnormality met is breathing, and the treatment for it on this menu is oxygen.\n\nThe deck's oxygen and ventilation ladder runs from face mask and nasal cannula, through **high-flow nasal cannula therapy**, to bag-mask ventilation and then intubation, and it names failure to oxygenate or ventilate despite adequate bag-mask support as the trigger for escalating. Nathaniel is at the second rung, not the fourth. Oxygen saturation and cyanosis sit in the breathing assessment, which is where his abnormality was found.\n\nOne caution the menu invites: a saturation of 90% is low but he is talking, so this is not an emergency requiring the airway or the circulation to be touched. Doing something more aggressive than the abnormality warrants is as much an error here as doing nothing.\n\nThe ABCDE assessment is L3 pp.6–9, the oxygen ladder L3 pp.10–18, and the capillary refill threshold L4 pp.6–8.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Anchor the ABCDE menu: act on the first abnormality found, here inadequate oxygenation with a patent airway.",
    "source": "pediatric .pdf p.130 (Part I, ch.17 Q13)"
  },
  {
    "id": "pedhd-emg-14",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "Kelsey, a 2-year-old girl, is found unconscious in the garden. When she is bought into the resuscitation room she is gasping and moaning. Which of the following is the most appropriate next step in the management of that patient?",
    "options": [
      "Check blood glucose",
      "Check pupils",
      "Airway opening manoeuvres",
      "High-flow oxygen therapy",
      "Commence cardiac compressions using the hands encircling method"
    ],
    "answer": 2,
    "explanation": "**Airway opening manoeuvres. The discriminating token against the menu anchored at `pedhd-emg-13` is that Kelsey is unconscious and gasping — the failure is at A, the first letter.**\n\nGasping is the sign that decides this. **Agonal gasping is not breathing**; the deck's own instruction during the breathing check is to look, listen and feel for **no more than 10 seconds**, and to treat gasps as absent respiration. An unconscious 2-year-old loses the muscle tone that holds the tongue and soft tissues clear of the pharynx, so the airway obstructs passively.\n\nThe manoeuvre is age-specific and the deck prints both positions: **neutral for an infant, the sniffing position for a child**, with a chin lift, or a jaw thrust where the cervical spine may be injured. Kelsey was found collapsed outdoors with no witnessed history, so an unwitnessed fall cannot be excluded and a jaw thrust is the safer opening.\n\nWhy nothing else can come first: **high-flow oxygen delivered into an obstructed airway does not reach the lungs**, which is the whole reason A precedes B. Glucose and pupils are D, and D is not assessed before A is secure. Compressions need the arrest triad — unconsciousness, apnoea, and no palpable major pulse; she is unconscious and barely breathing, but no pulse has been reported, and opening the airway may be all she needs.\n\nThe airway positions and the breathing check are L3 pp.6–9, 21–24; the arrest diagnosis is L3 pp.20–21.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise gasping in an unconscious child as an airway failure and open the airway before anything else.",
    "source": "pediatric .pdf p.130 (Part I, ch.17 Q14)"
  },
  {
    "id": "pedhd-emg-15",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "Ahmed, aged 2 months, is found by his mother to be pale and floppy in his cot. The paramedics are giving bag and valve mask ventilation when he arrives in the resuscitation room and his chest is moving well. His heart rate is 40 beats/min. Which of the following is the most appropriate next step in the management of that patient?",
    "options": [
      "Check blood glucose",
      "Check pupils",
      "Airway opening manoeuvres",
      "High-flow oxygen therapy",
      "Commence cardiac compressions using the hands encircling method"
    ],
    "answer": 4,
    "explanation": "**Commence cardiac compressions. The discriminating token against the menu anchored at `pedhd-emg-13` is a heart rate of 40 beats/min that persists despite ventilation that is already working.**\n\nRead the stem in the order of the letters. **A and B are both being managed and are effective** — the paramedics are bag-mask ventilating and **the chest is moving well**, which is the deck's own test of adequate ventilation. That leaves **C**, and 40 beats/min in a 2-month-old is profound bradycardia. In children bradycardia is a **pre-arrest** rhythm rather than a rhythm disturbance in its own right: it is the hypoxic myocardium failing, and the deck places bradycardia progressing to asystole on the non-shockable arm of the algorithm. A rate this low generates no useful cardiac output, so it is treated as arrest *(the specific rate threshold for compressing an infant, conventionally under 60 beats/min with poor perfusion, is not taken from the course material)*.\n\nThe option's wording is also age-checked. **Hands encircling is the two-rescuer infant technique** — two thumbs on the lower half of the sternum with the hands encircling the thorax — and Ahmed at 2 months is an infant with a full resuscitation team present, so it is the correct technique as well as the correct action. Compress to at least a third of the chest depth, about 4 cm in an infant, at 100 to 120 per minute, with a two-rescuer ratio of 15:2.\n\nWhy not the others: oxygen and airway manoeuvres cannot improve on ventilation that is already moving the chest, and glucose and pupils are D — assessed after circulation is supported, not instead of supporting it.\n\nThe compression technique, depth, rate and ratio are L3 pp.24, 26–32, 36; the algorithm arms are L3 pp.33, 36–37.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Treat profound bradycardia despite effective ventilation as arrest, and match the encircling technique to an infant.",
    "source": "pediatric .pdf p.131 (Part I, ch.17 Q15)"
  },
  {
    "id": "pedhd-emg-16",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "Daniel, age 10 years, has diabetes mellitus and has been playing football at his friend's house. He has been brought to the emergency department as he has become. Which of the following is the most appropriate next step in the management of that patient?",
    "options": [
      "Check blood glucose",
      "Check pupils",
      "Airway opening manoeuvres",
      "High-flow oxygen therapy",
      "Commence cardiac compressions using the hands encircling method"
    ],
    "answer": 0,
    "explanation": "**Check blood glucose. The discriminating token against the menu anchored at `pedhd-emg-13` is diabetes mellitus plus prolonged exercise — the one combination on this menu that points straight to D.**\n\n**⚠️ The stem is printed incomplete and is reproduced as printed.** It ends \"as he has become.\" with the symptom itself missing; the book prints no more. Nothing has been trimmed in transcription, and the key is unaffected — the diagnosis is carried by the two facts that survive.\n\nThose two facts are enough. Exercise increases glucose uptake into muscle and increases insulin sensitivity for many hours afterwards, so a child on insulin who plays football without extra carbohydrate or a reduced dose is at real risk of hypoglycaemia *(this relationship is not taken from the course material)*. Whatever word is missing — drowsy, confused, unwell, unconscious — a capillary glucose is the test that would explain it, and it takes seconds at the bedside.\n\nThe general principle from `pedhd-emg-13` also happens to select this answer without needing the missing word: no airway, breathing or circulatory abnormality is stated anywhere in the stem, so A, B and C are unopposed and the assessment falls through to D. Between the two D options, glucose is chosen over pupils because the history names a specific, treatable and rapidly reversible cause.\n\nHypoglycaemia earns its place on this menu because it is on the deck's reversible-cause list — the four Hs and four Ts — where it sits under **metabolic and electrolyte disturbance**, and because untreated it causes seizures and permanent neurological injury. Treatment follows the test immediately: oral glucose if the child can swallow safely, intravenous dextrose or intramuscular glucagon if not.\n\nThe disability assessment is L3 pp.6–9; the reversible causes are L3 pp.38–39.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Check glucose first in a child with diabetes after exercise, and read a stem the book prints incomplete.",
    "source": "pediatric .pdf p.131 (Part I, ch.17 Q16)"
  },
  {
    "id": "pedhd-emg-17",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "emergencies",
    "stem": "Aisha, a 3-year-old girl, is bought to hospital by the paramedics as she has had a seizure. She is receiving high-flow oxygen, her breathing is regular, and the cardiac monitor shows a heart rate of 100 beats/min. She is unresponsive to painful stimuli, as she does not flinch when her blood glucose is checked. Which of the following is the most appropriate next step in the management of that patient?",
    "options": [
      "Check blood glucose",
      "Check pupils",
      "Airway opening manoeuvres",
      "High-flow oxygen therapy",
      "Commence cardiac compressions using the hands encircling method"
    ],
    "answer": 1,
    "explanation": "**Check pupils. The discriminating token against the menu anchored at `pedhd-emg-13` is that this stem has already closed off every other option, including the other D option.**\n\nThe stem is written as a process of elimination, and reading it that way is the skill being tested:\n\n| Letter | What the stem states | Status |\n|---|---|---|\n| A | Breathing regularly, so air is moving | Clear |\n| B | Already receiving high-flow oxygen, breathing regular | Managed |\n| C | Heart rate 100/min, appropriate for a 3-year-old | Clear |\n| D — glucose | **Checked** — the detail is hidden inside the clause about not flinching | Done |\n| D — pupils | Unresponsive to painful stimuli, post-seizure | **The abnormality** |\n\nThe sentence \"she does not flinch when her blood glucose is checked\" does two jobs at once, and the second is easy to miss: it reports the conscious level **and** tells you the glucose has been done, which removes the option most readers reach for. On AVPU she is **U**, unresponsive — the lowest grade, and a level that would ordinarily raise the question of whether she can protect her airway.\n\nPupils are the remaining unexamined item in the deck's disability assessment, which comprises level of consciousness by AVPU, **posture** — checking for decorticate flexion or decerebrate extension — and **pupil size and reactivity**. After a seizure they carry real information: unequal or fixed dilated pupils suggest raised intracranial pressure or a structural lesion, pinpoint pupils suggest opioid or other toxic causes, and normal reactive pupils in a child who is slow to recover support a post-ictal state.\n\nWhy not the rest: repeating a glucose that has just been done delays the assessment; oxygen is already running; the airway is not stated to be obstructed and breathing is regular; and compressions are for arrest, which a regular pulse of 100/min excludes.\n\nThe AVPU grading, posture and pupil assessment are L3 pp.6–9.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Complete the disability assessment with pupils once airway, breathing, circulation and glucose are all addressed.",
    "source": "pediatric .pdf p.131 (Part I, ch.17 Q17)"
  }
];
