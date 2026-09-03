// house-ch14-endocrine.draft-B.js — DRAFT explanations for House ch.14 "Diabetes & endocrinology", half B, n = 9,10,11,12,13,14,15,16.
// Drafted by Codex via tools/chapter-loop.js (draft). Validate with val-pd.js; medical read before splice.
var PEDHD_ENDO_DRAFT_B = [
  {
    "id": "pedhd-endo-9",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "endo-dka",
    "stem": "Julie, aged 7 years, has diabetes mellitus. She is admitted to hospital as she has vomited on three occasions. She has a 2-day history of being unwell with a mild fever, sore throat and decreased appetite. Her blood glucose measurement reads ‘high’. Although she was not eating, her parents maintained her usual insulin dose. On examination her temperature is 37.5°C. She is drowsy and confused. Her pulse is 150 beats/min, blood pressure 80/45 mmHg (low for age) and capillary refill time 3 seconds. Examination of her throat shows tonsillitis. Her blood glucose is 22 mmol/L. Which of the following is the best course of action to take immediately for that patient?",
    "options": [
      "Oral glucose drink",
      "Intravenous infusion of normal saline (0.9% sodium chloride)",
      "Subcutaneous insulin",
      "Fluid resuscitation with normal saline (0.9% sodium chloride)",
      "Intravenous infusion of 5% glucose"
    ],
    "answer": 3,
    "explanation": "Fluid resuscitation with normal saline (0.9% sodium chloride) is the immediate action. Julie has hyperglycaemia with vomiting, reduced consciousness, tachycardia, hypotension and prolonged capillary refill: this is circulatory compromise in a child with probable diabetic ketoacidosis precipitated by tonsillitis. Restore circulation before insulin. Course material section endo-15 identifies restoration of circulating volume as the first objective of DKA fluid therapy, and endo-16 starts insulin only after fluid replacement has begun.\n\nThese same five options are offered again in `pedhd-endo-10`, `pedhd-endo-11` and `pedhd-endo-12`, so it is worth setting the whole ladder out once here. Oral glucose drink is for a conscious child with hypoglycaemia who can swallow safely; it is not appropriate for marked hyperglycaemia, vomiting or impaired consciousness. Intravenous infusion of normal saline (0.9% sodium chloride) is appropriate for fluid replacement in a stable dehydrated child, but this child is shocked and needs resuscitation rather than routine infusion. Subcutaneous insulin is not the immediate treatment for an unstable probable DKA presentation; insulin is managed intravenously after initial fluid therapy. Fluid resuscitation with normal saline (0.9% sodium chloride) corrects the immediately life-threatening hypovolaemia. Intravenous infusion of 5% glucose is not an initial treatment for hyperglycaemic shock; glucose is added later if required while insulin must continue.\n\nThe discriminating token here is shock: low blood pressure, poor perfusion and altered consciousness select resuscitation. In `pedhd-endo-10`, the discriminating token is normal pH with no dehydration, selecting subcutaneous insulin. In `pedhd-endo-11`, it is symptomatic hypoglycaemia during exercise, selecting oral glucose. In `pedhd-endo-12`, it is dehydration without circulatory compromise, selecting an intravenous normal-saline infusion.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognize circulatory compromise in probable paediatric DKA and prioritize isotonic fluid resuscitation before insulin.",
    "source": "pediatric .pdf p.115 (Part I, ch.14 Q9)"
  },
  {
    "id": "pedhd-endo-10",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "endocrine",
    "stem": "Jon is 12 years old. His brother has diabetes. He has started to drink a lot of fluids and pass a lot of urine. He checked his blood glucose on his brother’s glucometer. It was 19 mmol/L. When he arrives in the Emergency Department he is well with no signs of dehydration. Diabetes mellitus type 1 is diagnosed as his blood glucose is 21 mmol/L. A venous blood sample shows a normal pH with 2 mmol/L of ketones (within the normal range) and a HbA1c blood test result is awaited. Which of the following is the best course of action to take immediately for that patient?",
    "options": [
      "Oral glucose drink",
      "Intravenous infusion of normal saline (0.9% sodium chloride)",
      "Subcutaneous insulin",
      "Fluid resuscitation with normal saline (0.9% sodium chloride)",
      "Intravenous infusion of 5% glucose"
    ],
    "answer": 2,
    "explanation": "Subcutaneous insulin is the appropriate immediate treatment for newly diagnosed type 1 diabetes without DKA. Jon has classic osmotic symptoms and hyperglycaemia, but he is clinically well, has no dehydration, normal venous pH and ketones stated to be within the normal range. The decisive token is absence of acidosis and dehydration, so there is no indication for the DKA resuscitation pathway. Insulin is mandatory treatment for type 1 diabetes; this is covered in course material section endo-4.\n\nFor the full comparison of this repeated option ladder, see `pedhd-endo-9`. Oral glucose and intravenous 5% glucose treat or prevent hypoglycaemia, not Jon’s hyperglycaemia. Intravenous normal saline is for dehydration, while fluid resuscitation is for circulatory compromise; neither is present. Subcutaneous insulin supplies the deficient hormone in a stable child without ketoacidosis.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Distinguish uncomplicated new-onset type 1 diabetes from DKA and select insulin for the stable child.",
    "source": "pediatric .pdf p.115 (Part I, ch.14 Q10)"
  },
  {
    "id": "pedhd-endo-11",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "endocrine",
    "stem": "Harriet, a 5-year-old girl, is known to have diabetes mellitus type 1. She was only diagnosed 2 months ago and is on a basal bolus regime of insulin. She is running around the garden at home when her mother notices she suddenly becomes aggressive towards her brother and looks pale and not her usual self. Her mother checks her blood glucose, which is 3 mmol/L. Which of the following is the best course of action to take immediately for that patient?",
    "options": [
      "Oral glucose drink",
      "Intravenous infusion of normal saline (0.9% sodium chloride)",
      "Subcutaneous insulin",
      "Fluid resuscitation with normal saline (0.9% sodium chloride)",
      "Intravenous infusion of 5% glucose"
    ],
    "answer": 0,
    "explanation": "Give an oral glucose drink. Harriet is conscious enough to display behavioural change and has symptomatic hypoglycaemia after exercise while receiving insulin. Pallor, sudden aggression and a blood glucose of 3 mmol/L identify the immediate problem as hypoglycaemia, so rapidly absorbed oral carbohydrate is appropriate when the child can safely drink. Exercise increases glucose use and can expose a mismatch between insulin availability and carbohydrate intake. Course material section endo-8 identifies hypoglycaemia as an acute complication of insulin-treated type 1 diabetes.\n\nFor the complete comparison of this shared option ladder, see `pedhd-endo-9`. Normal saline, whether routine infusion or resuscitation, does not correct low glucose. Subcutaneous insulin would worsen hypoglycaemia. Intravenous 5% glucose is not the first choice for a conscious child able to take oral treatment; intravenous glucose becomes relevant when oral treatment is unsafe or ineffective.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognize symptomatic hypoglycaemia in an insulin-treated child and give oral glucose when swallowing is safe.",
    "source": "pediatric .pdf p.115 (Part I, ch.14 Q11; the question straddles the page break from p.115 to p.116)"
  },
  {
    "id": "pedhd-endo-12",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "endo-dka",
    "stem": "Sophie, a 9-year-old girl with type 1 diabetes mellitus, develops a fever along with vomiting and diarrhoea. After 2 days her mother takes her to the local paediatric assessment unit as she continues to vomit. On examination her temperature is 37.5°C. She is able to talk to her mother. She has clinical dehydration. Her pulses, capillary refill time and blood pressure are normal. Her blood glucose is 16 mmol/L. Which of the following is the best course of action to take immediately for that patient?",
    "options": [
      "Oral glucose drink",
      "Intravenous infusion of normal saline (0.9% sodium chloride)",
      "Subcutaneous insulin",
      "Fluid resuscitation with normal saline (0.9% sodium chloride)",
      "Intravenous infusion of 5% glucose"
    ],
    "answer": 1,
    "explanation": "An intravenous infusion of normal saline (0.9% sodium chloride) is the immediate choice. Sophie has clinical dehydration after ongoing vomiting and diarrhoea, but remains able to talk and has normal pulses, capillary refill time and blood pressure. The discriminating token is dehydration without shock: she needs isotonic intravenous fluid replacement, not a resuscitation bolus. DKA fluid therapy aims to restore circulating volume and replace fluid deficit, as outlined in course material section endo-15.\n\nFor the full comparison of this shared option ladder, see `pedhd-endo-9`. Oral glucose is for hypoglycaemia, whereas Sophie is hyperglycaemic. Subcutaneous insulin is not the first step in an ill, dehydrated child before assessment and fluid treatment. Fluid resuscitation is reserved for compromised circulation, which her normal observations argue against. Intravenous 5% glucose does not address dehydration with hyperglycaemia initially.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Select isotonic intravenous fluid replacement for dehydration in an ill child with diabetes who has no circulatory compromise.",
    "source": "pediatric .pdf p.116 (Part I, ch.14 Q12)"
  },
  {
    "id": "pedhd-endo-13",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "endo-thyroid",
    "stem": "A newborn baby is noted to have coarse facies, a large fontanelle and hypotonia on routine examination. He also has jaundice. His blood sugar levels are normal. Which of the following investigations would be most likely to reveal the underlying diagnosis?",
    "options": [
      "Growth hormone",
      "Karyotype",
      "Thyroid function tests",
      "Blood group",
      "CK"
    ],
    "answer": 2,
    "explanation": "Thyroid function tests are most likely to reveal the diagnosis, which is congenital hypothyroidism. Coarse facies, a large fontanelle, hypotonia and jaundice in a newborn are the classic early cluster. Course material section endo-24 lists wide fontanels — a posterior fontanel greater than 0.5 cm — together with hypotonia and prolonged physiological jaundice among the early signs, alongside hypothermia, a sluggish sleepy baby, feeding difficulty, a large tongue and umbilical hernia. Only thyroid function tests measure the abnormality itself: in the common primary form, a low free T4 with a raised TSH.\n\nFinding it matters more than in almost any other newborn investigation. Section endo-26 records congenital hypothyroidism as the commonest cause of preventable mental retardation, notes that affected infants usually appear normal at birth, and warns that delay of diagnosis and treatment beyond the first 1–3 months of life produces irreversible neurological deficit. Only 5–10% of cases can be diagnosed in the first month without screening. That is why the neonatal screen exists, and why a baby who does show signs is tested at once rather than watched.\n\nGrowth hormone is the wrong axis and the wrong age: growth hormone deficiency declares itself through impaired linear growth later in infancy and childhood, not through this newborn constellation. A karyotype detects chromosomal disorders, and several do cause hypotonia with coarse features, but it would not explain the prolonged jaundice, and it would not direct the treatment that has to start now. Blood group — with a direct antiglobulin test — investigates haemolytic jaundice, and jaundice genuinely is one of this baby's features; it cannot, though, account for the coarse facies, the large fontanelle or the hypotonia, and the jaundice of congenital hypothyroidism is a prolonged unconjugated jaundice rather than a haemolytic one. CK is raised in muscle disease and is a fair thought in a hypotonic infant, but it explains neither the facies nor the jaundice. The normal blood sugar in the stem is a deliberate exclusion: it removes hypoglycaemia as the cause of the hypotonia, and with it the panhypopituitarism that would otherwise be worth chasing.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Identify neonatal features of congenital hypothyroidism and choose thyroid function testing.",
    "source": "pediatric .pdf p.116 (Part I, ch.14 Q13)"
  },
  {
    "id": "pedhd-endo-14",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "endo-thyroid",
    "stem": "A 7-day-old male baby is brought into the emergency department with a 1-day history of poor feeding and vomiting. He was born at term by spontaneous vaginal delivery weighing 3200 g and his postnatal period was uneventful. On arrival, he appears lethargic and has moderate dehydration. His weight is 2750 g. His blood glucose is 2.0 and his blood gas reveals a sodium of 124 mmol/L and the potassium is 6.8 mmol/L. Following resuscitation and stabilization, what is most likely to confirm the diagnosis?",
    "options": [
      "Abdominal ultrasound scan",
      "ACTH level",
      "Karyotype",
      "17 Hydroxyprogesterone level",
      "Chloride level"
    ],
    "answer": 3,
    "explanation": "A 17 Hydroxyprogesterone level is the confirming investigation. A previously well 7-day-old boy with vomiting, lethargy, weight loss, dehydration, hyponatraemia and hyperkalaemia has the pattern of a salt-wasting adrenal crisis due to congenital adrenal hyperplasia. Raised 17-hydroxyprogesterone is the characteristic screening biochemical result. The disease mechanism and salt-wasting presentation are not taken from the course material; congenital adrenal hyperplasia is named in section endo-33, but its clinical teaching is supplied there rather than taught by the available lectures.\n\nThe numbers are worth walking through, because together they are the diagnosis. A 3200 g term baby down to 2750 g at seven days has lost about 14% of birth weight — far beyond the physiological 7–10% — which is the salt and water going out. Sodium 124 mmol/L with potassium 6.8 mmol/L is the mineralocorticoid signature: without aldosterone the distal nephron cannot exchange sodium for potassium, so sodium is wasted into the urine and potassium is retained. Glucose 2.0 is hypoglycaemia, which is the cortisol half of the same enzyme block. Section endo-33 gives the salt-losing crisis at 1–3 weeks as vomiting, weight loss, dehydration and shock with hyponatraemia, hyperkalaemia, metabolic acidosis and hypoglycaemia — this baby has all of it.\n\nOne caution about that glucose. The book prints it as \"His blood glucose is 2.0\" with **no unit at all**, where every other glucose in the chapter is written in mmol/L. It is reproduced here exactly as printed and has not been corrected. Read in mmol/L it is unambiguously low, and nothing in the reasoning turns on the missing unit — the electrolytes and the collapse carry the diagnosis on their own.\n\nAn abdominal ultrasound scan may investigate anatomical causes of vomiting, such as pyloric stenosis, and it can map internal structures in a disorder of sex development — but pyloric stenosis classically produces a hypochloraemic, hypokalaemic metabolic **alkalosis**, the opposite potassium direction to this baby's, and ultrasound confirms no biochemical diagnosis. An ACTH level is genuinely raised in primary adrenal failure, and it is the loss of cortisol feedback that drives it, but it is a marker of adrenal insufficiency in general rather than of which enzyme failed; 17-hydroxyprogesterone names the block. Karyotype matters when the genitalia are ambiguous or a chromosomal disorder is suspected — but this infant's genitalia are described as male, which is exactly why nothing was noticed at birth, and a karyotype would not have shortened the week. Chloride belongs in the electrolyte panel and helps characterise an acid-base disturbance, but it cannot establish the underlying endocrine disorder.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognize salt-wasting congenital adrenal hyperplasia and select 17-hydroxyprogesterone testing.",
    "source": "pediatric .pdf p.116 (Part I, ch.14 Q14)"
  },
  {
    "id": "pedhd-endo-15",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "endo-dka",
    "stem": "A 14-year-old boy is admitted with diabetic ketoacidosis. Intravenous insulin has been running at 0.1 units/kg/h for the last 12 hours alongside a 500 mL bag of 0.9% normal saline. His last blood sugar is 22 mmol/L and he has a good urine output. Which of the following are most likely to be decreased?",
    "options": [
      "Serum sodium",
      "Serum potassium",
      "Serum lactate",
      "Serum chloride",
      "Serum calcium"
    ],
    "answer": 1,
    "explanation": "Serum potassium is most likely to be decreased. In DKA, total-body potassium is depleted by osmotic diuresis and vomiting even when the initial serum potassium may be normal or high because insulin deficiency and acidosis shift potassium out of cells. Once insulin is infused, potassium shifts back into cells and the measured serum potassium can fall substantially. Good urine output matters because it supports renal potassium excretion and permits potassium replacement; course material section endo-17 directs that potassium replacement be deferred until the child has voided and continued during intravenous fluid therapy except in renal failure.\n\nSerum sodium may be low at presentation because of hyperglycaemia and water movement, but it is not the best answer to the insulin-associated fall being tested. Serum lactate can rise with hypoperfusion and should improve as circulation is corrected; insulin treatment does not make it the expected falling electrolyte. Serum chloride may rise with prolonged normal-saline administration rather than decrease. Serum calcium is not the characteristic major electrolyte fall during standard DKA treatment. The high blood sugar does not justify stopping insulin; course material section endo-16 states that glucose can be given if needed while insulin continues to correct ketoacidosis.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Explain why insulin treatment during DKA can lower serum potassium and requires monitoring and replacement.",
    "source": "pediatric .pdf p.117 (Part I, ch.14 Q15)"
  },
  {
    "id": "pedhd-endo-16",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "endo-thyroid",
    "stem": "On routine newborn examination a baby is noted to have bilaterally undescended testes. Genitalia appears to be male. Which is the most important initial investigation?",
    "options": [
      "Karyotype with FISH for sex-determining region of the Y chromosome",
      "Abdominal ultrasound scan",
      "Abdominal CT scan",
      "17-Hydroxyprogesterone levels",
      "Urea and electrolytes (U&Es)"
    ],
    "answer": 4,
    "explanation": "Urea and electrolytes (U&Es) are the most important initial investigation. Bilaterally undescended testes can occur in a newborn with an underlying disorder of sex development, including an infant who appears male externally but could be at risk of an adrenal salt-wasting crisis. Electrolytes identify potentially life-threatening hyponatraemia and hyperkalaemia promptly. This emergency-focused priority is not taken from the course material; the available material names congenital adrenal hyperplasia and gives an ACTH-stimulation test in the puberty lecture, but does not teach the initial newborn investigation sequence.\n\nKaryotype with FISH for sex-determining region of the Y chromosome may become important in a full disorders-of-sex-development assessment, but it does not identify the immediate metabolic danger. Abdominal ultrasound scan can help locate internal structures but is not the urgent first test in a clinically well newborn with this finding. Abdominal CT scan adds radiation and is not an initial neonatal investigation. A 17-Hydroxyprogesterone level is relevant if congenital adrenal hyperplasia is suspected, but electrolytes come first because salt wasting can deteriorate rapidly and requires immediate treatment. Course material section endo-33 identifies raised 17-hydroxyprogesterone as the relevant biochemical marker once the emergency assessment is addressed.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Prioritize electrolyte assessment in a newborn with bilateral undescended testes because occult salt-wasting adrenal disease may be life-threatening.",
    "source": "pediatric .pdf p.117 (Part I, ch.14 Q16)"
  }
];
