// house-ch18-accidents.draft-A.js — DRAFT explanations for House ch.18 "Accidents & poisoning", half A, n = 1,2,3,4.
// Drafted by Codex via tools/chapter-loop.js (draft), then rewritten by hand against the cached
// theory: the machine draft declared four facts absent that L5 and B1 print, and ran under budget.
var PEDHD_ACC_DRAFT_A = [
  {
    "id": "pedhd-acc-1",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "accidents",
    "stem": "What is the most common cause of death in children aged 1 year to 14 years in the UK?",
    "options": [
      "Accidents",
      "Congenital heart disease",
      "Infectious disease",
      "Malignant disease",
      "Respiratory disease"
    ],
    "answer": 3,
    "explanation": "Malignant disease. The book answers this question with a pie chart rather than a sentence, and the chart's numbers settle every option at once. Figure 7.1 — deaths aged 1 to 15, England and Wales, 2018, total 973 deaths — divides as malignant disease 25 %, external causes (injuries and poisoning) 15 %, congenital anomalies 10 %, neurological 10 %, respiratory 10 %, cardiac 7 %, infectious 6 %, other 17 % (B1 p.84, Fig 7.1; L5 p.2).\n\nAccidents are the attractive wrong answer because they are genuinely second, and by a clear margin over everything below them. Childhood accidental deaths in the UK have declined enough that malignant disease has overtaken them, but injury remains the commonest reason a child attends an emergency department at all — which is why the option feels right and is not.\n\nThe other three are each smaller than the 15 % that accidents already lose with. Congenital heart disease is a subset of two slices, not a whole one: congenital anomalies take 10 % and cardiac causes 7 %, and heart disease accounts for only part of either. Respiratory disease is 10 %. Infectious disease is 6 %, the smallest named category on the chart.\n\nThe trap in this stem is that two true statements about accidents apply to other populations. Worldwide, external causes are the leading cause of death in 1- to 15-year-olds. And in 15- to 19-year-olds — including in the UK — external factors remain the most common cause of death. The stem pins both the country and the age band, and inside those limits neither statement applies. The chart's band is 1 to 15 rather than the stem's 1 to 14, which does not disturb the ranking.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Rank the causes of childhood death in the UK, and separate that ranking from the worldwide and adolescent patterns.",
    "source": "pediatric .pdf p.135 (Part I, ch.18 Q1)"
  },
  {
    "id": "pedhd-acc-2",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "accidents",
    "stem": "Louise, aged 4 years, was hit by a car in the local supermarket car park. She is brought to the Emergency Department by ambulance.\nAn initial assessment shows:\n• Airway — talking to mother\n• Breathing — receiving oxygen via a rebreathing circuit, oxygen saturation 99%\n• Breathing — air entry satisfactory and equal bilaterally, respiratory rate 30/min\n• Circulation — pulse 160/min, blood pressure 90/50 mmHg, capillary refill time 3 seconds\n• Disability — alert, but frightened and agitated, moving all four limbs\nShe has abrasions to her left flank and pain in her left shoulder. What is the next intervention needed?",
    "options": [
      "Analgesia",
      "Blood glucose measurement",
      "Chest X-ray",
      "Intravenous access",
      "Intubation and ventilation"
    ],
    "answer": 3,
    "explanation": "Intravenous access. The stem is laid out as ABCDE deliberately, and the intervention it wants is whichever letter is failing. A and B are not: she is talking, which proves a patent airway, and she has equal air entry with a saturation of 99 %.\n\nC is failing, and the four things the trauma assessment measures under C are heart rate, pulse volume, capillary refill time and blood pressure (L5 pp.20–22; B1 p.84). Two of hers are abnormal. Her capillary refill of 3 seconds is past the taught threshold — delayed capillary refill means longer than 2 seconds (L4 pp.6–8, 23). Her pulse of 160 is above the expected range for a 4-year-old; the emergencies chapter's age bands are supplied rather than printed by either deck, and give 95–140/min at 2–5 years. Her blood pressure of 90/50 sits inside the same supplied band of 80–100 mmHg systolic, and her respiratory rate of 30 at the top of a 25–30 band.\n\nThat combination is the picture the deck insists on: tachycardia is the early sign of shock and hypotension the late one — printed twice, the second time captioned \"Don't forget\" — and a normal blood pressure does not exclude shock, because a child maintains pressure by raising heart rate and clamping peripheral vessels until compensation fails. Compensated shock is reversible; decompensated shock may be irreversible. She is in the reversible column, and access is what allows her to be kept there: fluid resuscitation, blood sampling and drugs all depend on it.\n\nAnalgesia is a real need — she has shoulder pain and flank abrasions — but it is delivered through the access, not instead of it. Blood glucose belongs to D, and D is intact: she is alert and moving all four limbs. A chest X-ray may follow if examination or mechanism suggests thoracic injury, but imaging is not a resuscitation step and her chest findings are reassuring. Intubation and ventilation answer a failing A or B, and she has neither.\n\nThe flank abrasion is the reason not to be reassured by the blood pressure. Blunt abdominal trauma can conceal substantial haemorrhage with very little to see externally.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Work the primary survey in order and recognise compensated shock in an injured child with a normal blood pressure.",
    "source": "pediatric .pdf p.135 (Part I, ch.18 Q2)"
  },
  {
    "id": "pedhd-acc-3",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "accidents",
    "stem": "Roberto (a boy who suffered an extensive burn) is much more settled following intravenous analgesia. From the list of possible management options below, which should be undertaken first?",
    "options": [
      "Commence intravenous 0.9% saline",
      "Cover the burns with sterile dressings",
      "Intravenous antibiotics",
      "Intubation and artificial ventilation",
      "Place affected areas in cold water"
    ],
    "answer": 0,
    "explanation": "Commence intravenous 0.9% saline. The reason is one the course material states plainly, even though it never devotes a section to burns: burns are listed as a cause of hypovolaemic shock, and the mechanism named against them is volume (L4 pp.3–5). They appear again among the seven causes of dehydration, alongside gastroenteritis, sepsis, diabetic ketoacidosis, diabetes insipidus, nephrotic syndrome and poor fluid intake (L4 pp.9–11). Shock from fluid loss is defined as a deficit of 10 % or more of body weight, and the whole point of the dehydration teaching is that shock is prevented by early recognition and treatment rather than treated once established. An extensive burn loses plasma continuously through the injured surface, so circulation is the letter under threat and the child needs volume before anything else on this list.\n\nHe is settled after analgesia and no airway or breathing problem is described, which is what makes C rather than A or B the priority here.\n\nSterile dressings are wound care. They protect the surface and reduce contamination, but they replace nothing, and a child can lose enough circulating volume to arrest under a perfectly clean dressing. Intravenous antibiotics are not routine initial treatment for an acute burn — burn infection is a later complication and prophylaxis is not standard practice *(not taken from the course material)*. Intubation and artificial ventilation would come first, ahead of fluids, if there were inhalational injury — hoarseness, stridor, soot in the mouth or nose, facial and perioral burns *(not taken from the course material)*; the stem describes none of these, and a child settled enough to be described as settled is protecting his own airway. Cold water is immediate first aid at the scene, and its window has closed long before a child with an extensive burn is receiving intravenous analgesia in hospital; prolonged cooling of a large surface in a small child also causes hypothermia, because the burned area cannot regulate temperature *(not taken from the course material)*.\n\nThe ranking is therefore the same one the emergencies teaching applies to every cause of hypovolaemia: restore the circulation, then attend to the wound.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Treat an extensive burn as a cause of hypovolaemic shock and rank fluid resuscitation ahead of wound care.",
    "source": "pediatric .pdf p.135 (Part I, ch.18 Q3; the question straddles the page break from p.135 to p.136)"
  },
  {
    "id": "pedhd-acc-4",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "accidents",
    "stem": "A 14-year-old girl self-presents to her local emergency department with a history of deliberate self-poisoning following an argument with her boyfriend. She agrees to blood tests which reveal high paracetamol blood levels necessitating treatment. Which is the appropriate treatment for this teenager?",
    "options": [
      "Intravenous desferrioxamine",
      "Intravenous N-acetylcysteine",
      "Active cooling",
      "Alkalinization of urine with bicarbonate",
      "Activated charcoal"
    ],
    "answer": 1,
    "explanation": "Intravenous N-acetylcysteine. The management of paracetamol poisoning is two lines long in the lecture: risk is assessed by measuring the plasma paracetamol concentration, and intravenous acetylcysteine is given if that concentration is high or liver function is abnormal (L5 p.10). The stem has already done the risk assessment for you — the level necessitates treatment — so the only remaining question is which antidote matches which poison.\n\nThe presentation fits the age group. Adolescents most often ingest paracetamol and ibuprofen, and in much larger quantities than younger children, whose ingestions are accidental (L5 pp.4–6). The timing matters too: paracetamol is biphasic, with abdominal pain and vomiting early and liver failure only at 12 to 24 hours, so a girl who looks well is not reassuring. The nomogram's treatment line starts at 100 mg/L at 4 hours and falls away to roughly 5 mg/L at 24 hours, and a level drawn before 4 hours cannot be plotted at all, because absorption is incomplete and the reading is falsely low.\n\nEach distractor is the correct answer to a different poison. Intravenous desferrioxamine (the deck spells it deferoxamine) chelates iron and is given for moderate-to-severe iron toxicity, judged on an ingestion above 75 mg/kg of elemental iron and a serum iron level at 4 hours (L5 pp.15–16). Alkalinization of the urine with bicarbonate increases salicylate excretion, guided by a plasma salicylate 2 to 4 hours after ingestion, with haemodialysis as the further step (L5 pp.12–14, 19). Activated charcoal reduces absorption only when given within 1 hour of ingestion, and is useless against iron, hydrocarbons and pesticides; a documented high blood level proves the drug has already been absorbed, which is exactly when charcoal has nothing left to bind (L5 p.8 = B1 p.86). Active cooling treats dangerous hyperthermia and has no place in paracetamol toxicity; the poisoning material prints no cooling for any agent *(not taken from the course material)*.\n\nOne more reason the blood test in the stem is worth taking: specific blood concentrations are helpful for only four agents — paracetamol, iron, salicylates and alcohol (L5 p.8). Finally, this was deliberate self-harm, and step 5 of the five-step approach requires assessment of the circumstances of the ingestion and assessment by a child and adolescent psychiatrist or mental health services. That is not optional, but it follows the antidote rather than replacing it.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Match antidote to poison, and read the paracetamol nomogram's 4-hour origin.",
    "source": "pediatric .pdf p.136 (Part I, ch.18 Q4)"
  }
];
