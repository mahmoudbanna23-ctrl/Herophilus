const THEORY = {

/* ================= PEDIATRIC EMERGENCIES ================= */
'emergencies': {
  intro: 'Examiners test this chapter as **algorithms and thresholds**, not prose. Almost every question is one of three shapes: *what is the next step*, *what number triggers action*, or *which sign tells you the child is compensating versus failing*. Learn the ladders and the numbers cold.',
  sections: [

  { id:'em-shock', h:'Compensated vs decompensated shock', w:'must',
    body:`This is the single most examined idea in the chapter, and it hinges on one counter-intuitive fact.

**Blood pressure is normal in a shocked child until very late.** A normal BP does not exclude shock. **Tachycardia is the earlier indicator; hypotension signifies that compensation is already failing.**

In **compensated** shock the body maintains BP by raising heart and respiratory rate, pulling blood from the venous reserve, and diverting flow away from skin and peripheries toward brain and heart — which is why the child is **cold, mottled and pale at the extremities while still normotensive**.

Why it matters: **compensated shock is reversible; decompensated shock may not be.**

**Capillary refill** is measured by pressing the sternum for 5 seconds — **prolonged if >2 seconds**. It is affected by a cold environment, so interpret in context.`,
    table:{ head:['Early — compensated','Late — decompensated'], rows:[
      ['Tachypnoea','Acidotic (Kussmaul) breathing'],
      ['Tachycardia','**Bradycardia**'],
      ['Decreased skin turgor','Confusion, depressed cerebral state'],
      ['Sunken eyes and fontanelle','Blue peripheries'],
      ['Capillary refill >2 s','Absent urine output'],
      ['Mottled, pale, cold skin','**Hypotension**'],
      ['Core–peripheral temperature gap >4°C',''],
      ['Decreased urine output','']]},
    qs:['p1-32'] },

  { id:'em-fluids', h:'Fluid resuscitation and the maintenance formula', w:'must',
    body:`Two separate calculations that examiners like to combine into one question.

**Resuscitation.** Boluses of **10 mL/kg** balanced isotonic crystalloid (Plasmalyte, Hartmann's) or 0.9% NaCl, **reassessing circulation after every bolus** to avoid overload. In **trauma**, replace with **blood and blood products at 5–10 mL/kg** instead.

**The 40 mL/kg rule.** A child needing **more than 40 mL/kg** of resuscitation fluid is likely to need **mechanical ventilation** — call someone with advanced airway skills early.

**A febrile child should not receive fluid boluses unless there are clinical signs of shock.**

**Maintenance — the 100/50/20 rule**, per 24 hours:
- **100 mL/kg** for the first 10 kg
- **50 mL/kg** for the second 10 kg
- **20 mL/kg** for every kg thereafter

Fluid of choice is **0.9% NaCl with 5% dextrose**, considering 20 mmol KCl per 500 mL bag.

**Total = deficit + maintenance − boluses already given.** Deficit is % dehydration × weight.

**Adjustments** — reduce to **two-thirds** where SIADH is a risk (e.g. pneumonia); increase for ongoing losses; reduce for oral intake; **extend replacement to 48 hours** in hypernatraemic dehydration or DKA to avoid rapid osmolar shifts.`,
    table:{ head:['Assessment','Body weight lost'], rows:[
      ['No clinically detectable dehydration','usually <5%'],
      ['Clinical dehydration','5–9%'],
      ['**Shock**','**>10%**']]},
    qs:['p1-24','p1-33','p1-23'] },

  { id:'em-bls', h:'Paediatric basic life support', w:'must',
    body:`The whole algorithm follows from one fact: **in adults arrest is usually cardiac (ischaemic heart disease); in children it is usually secondary to hypoxia** from respiratory or neurological failure or shock.

That is why children get **5 rescue breaths first**, and why the compression:ventilation ratio differs from adults.

**Do not shake infants**, or any child with suspected cervical spine injury.`,
    flow:{ title:'Paediatric BLS — trained rescuer, no equipment', steps:[
      {k:'step', t:'Approach with care', n:'Ensure the area is free from danger'},
      {k:'step', t:'Stimulate — "Are you all right?"', n:'Do NOT shake infants or suspected C-spine injury'},
      {k:'step', t:'Open the airway', n:'Head tilt + chin lift · jaw thrust if unsuccessful'},
      {k:'step', t:'Check breathing — max 10 seconds', n:'Look for chest movement · listen for breath sounds · feel for air'},
      {k:'alert', t:'Give 5 rescue breaths', n:'Remove any obvious obstruction first. This step is what differs from adult BLS.'},
      {k:'step', t:'Check for signs of life + pulse — max 10 seconds', n:'>1 year: carotid or femoral · <1 year: brachial or femoral'},
      {k:'alert', t:'Chest compressions 15 : 2', n:'Rate 100–120/min. Push hard and fast. Start unless there is a definite pulse >60/min.'},
      {k:'step', t:'If alone, give 1 minute of CPR before seeking help', n:'Use a mobile phone on speaker if possible'}]},
    qs:['p1-39'] },

  { id:'em-choking', h:'Choking', w:'high',
    body:`Branches first on **severity**, then on **conscious level**. The examinable detail is the age split.

**Abdominal thrusts are never used in infants** — the liver and spleen are relatively large and poorly protected by the rib cage.

**Blind finger sweep is not advised.** Remove foreign matter only under direct vision.

Food is the commonest cause of non-fatal choking, followed by toys.`,
    flow:{ title:'Choking algorithm', steps:[
      {k:'decision', t:'Is the cough effective?',
       yes:'MILD obstruction → encourage coughing, keep watching for deterioration',
       no:'SEVERE obstruction → go to next step'},
      {k:'decision', t:'Is the child conscious?',
       yes:'Conscious → age-specific thrusts below',
       no:'Unconscious → START CPR'},
      {k:'alert', t:'Infant under 1 year', n:'5 back blows, then 5 CHEST thrusts. Never abdominal thrusts — risk of liver and spleen injury.'},
      {k:'alert', t:'Child over 1 year', n:'5 abdominal thrusts (Heimlich) — fist in the upper abdomen, pull backwards and upwards.'}]},
    qs:['p1-38'] },

  { id:'em-status', h:'Status epilepticus', w:'must',
    body:`**Definition:** a continuous seizure lasting **more than 30 minutes**, or intermittent seizures over 30 minutes without full recovery of consciousness between them.

The aim of treatment is to stop a **"prolonged" seizure (≥5 minutes)** from becoming status. Longer seizures carry a **poorer outcome and become more resistant to treatment**.

**"Don't ever forget glucose."** Check it, and treat reversible causes — hypoglycaemia, electrolyte disturbance.

The single most examined branch is **step 1**: which benzodiazepine depends on whether you have access.`,
    flow:{ title:'Status epilepticus — escalation by the clock', steps:[
      {k:'step', t:'ABCDE · high-flow oxygen · check glucose', n:'Confirm the seizure is ongoing'},
      {k:'decision', t:'5 min — Step 1. Is IV/IO access available?',
       yes:'YES → Lorazepam IV/IO',
       no:'NO → Midazolam (buccal) OR Diazepam (rectal)'},
      {k:'step', t:'Step 2 — second dose of benzodiazepine', n:'Call for senior help · prepare phenytoin · reconfirm this is an epileptic seizure'},
      {k:'step', t:'Step 3 — Phenytoin IV/IO over 20 min', n:'If already on phenytoin, give phenobarbitone instead. Consider paraldehyde PR while preparing or infusing.'},
      {k:'alert', t:'45 min — Step 4. Rapid sequence induction with thiopental', n:'An anaesthetist MUST be present'}]},
    qs:['p1-34'] },

  { id:'em-anaph', h:'Anaphylaxis', w:'must',
    body:`**Nothing substitutes for adrenaline, and delay is what kills.**

Diagnosis needs **acute onset** plus a **life-threatening problem** in at least one system:
- **Airway** — swelling, hoarseness, stridor
- **Breathing** — tachypnoea, wheeze, fatigue, cyanosis, SpO₂ <92%
- **Circulation** — pale, cold extremities, weak pulses, low BP
- **Disability** — feeling faint, drowsy, coma

Skin changes (urticaria, swollen lips, tongue, uvula) are **usually but not always** present — their absence does not exclude it.

**Epidemiology worth memorising:** about **two-thirds of paediatric anaphylaxis is food-related**; most episodes occur **under 5 years**, but **most fatalities occur in adolescents**, classically with **milk**, then peanut and tree nuts. **Asthma is an additional risk factor.** No trigger found in ~20%. About **1 in 1000 episodes is fatal**.

**Mast cell tryptase** may support the diagnosis; **a negative test does not exclude it**.`,
    flow:{ title:'Acute anaphylaxis', steps:[
      {k:'alert', t:'Intramuscular adrenaline — immediately', n:'Repeat every 5 minutes until clinical improvement. This is the only thing that changes outcome.'},
      {k:'step', t:'Call for help · lie the patient flat · raise the legs'},
      {k:'step', t:'Once specialist equipment is available', n:'Establish airway · high-flow oxygen · IV fluid challenge · chlorphenamine · hydrocortisone'},
      {k:'step', t:'Monitor', n:'Pulse oximetry · ECG · blood pressure'},
      {k:'alert', t:'IV adrenaline infusion only if 3 cycles of IM adrenaline fail', n:'Under anaesthetic supervision'}]},
    qs:['p1-35'] },

  { id:'em-brue', h:'Brief resolved unexplained event (BRUE)', w:'high',
    body:`A sudden transient episode lasting **less than one minute** of one or more of: **cyanosis or pallor; absent, decreased or irregular breathing; change in tone; altered responsiveness**.

The terminology replaced **ALTE** deliberately — the label now rests on **the clinician's assessment** of the event, not the caregiver's perception that it was life-threatening.

**Low-risk BRUEs need only observation and monitoring of vital signs**, a detailed explanation to caregivers, and an offer of basic life support training. An ECG, pernasal swab for pertussis and continuous pulse oximetry *may* be considered — **other laboratory and imaging studies are unlikely to help and should not be performed.**

**Failing any one criterion** means the infant needs fuller observation and investigation.`,
    table:{ head:['Criteria for a LOW-RISK BRUE — all six must be met'], rows:[
      ['Age **>60 days**'],
      ['Born at **≥32 weeks** gestation'],
      ['**First** BRUE'],
      ['Event lasted **<1 minute**'],
      ['**No CPR** given by a trained medical provider'],
      ['**No concerning features** in history or examination']]},
    qs:['p1-36'] },

  { id:'em-sids', h:'Sudden unexpected death in infancy', w:'high',
    body:`**SIDS is the most common cause of death between 1 month and 1 year.**

**Peak age 2–4 months**, occurring throughout the first year; **55% are boys**. Risk is increased **fivefold** by **low birthweight** and **fivefold** by **maternal age under 20**.

In most cases no cause is found even after detailed autopsy. Occasionally an undiagnosed congenital abnormality or inborn error of metabolism is identified.

**The "Back to Sleep" campaign is the single most effective intervention** — UK incidence fell from **1.9 per 1000 live births in 1989 to 0.3 per 1000 in 2018**.

**Safe sleep advice:** back to sleep, not front or side · feet at the foot of the cot, head uncovered, blanket tucked under the arms or a baby sleeping bag · **firm flat mattress, clear sleep space — no pillows or duvets** · separate cot in the parents' room for the first 6 months · avoid overheating, room at **18°C** · no smoking in pregnancy or after · **avoid co-sleeping**, especially after alcohol or sedatives or if a smoker · breastfeed · seek advice promptly if unwell.`,
    qs:['p1-37'] },

  { id:'em-sepsis', h:'Sepsis', w:'high',
    body:`Bacteria proliferate in the bloodstream; the host response releases inflammatory cytokines and activates endothelium. **Dysregulation of that host response is what produces the clinical syndrome.**

**Severe hypovolaemia in sepsis comes from "capillary leak"** — maldistribution of intravascular protein and fluid caused by endothelial dysfunction. Two consequences follow directly:
- **Capillary leak into the lungs → pulmonary oedema → respiratory failure**
- **Cytokines and toxins depress myocardial contractility → inotropes often required**

**Antibiotics must be started without delay** — beyond the neonatal period usually broad-spectrum, e.g. **ceftriaxone**. Neutropenia or cystic fibrosis need extended-spectrum cover.

**Neonatal sepsis** splits by timing: **early-onset — group B streptococcus and E. coli**; **late-onset — coagulase-negative staphylococcus**. Note that **CoNS on a blood culture is usually a skin contaminant** rather than true infection.

**DIC** — widespread inflammation causes microvascular thrombosis, consuming platelets and clotting factors, producing subcutaneous bleeding and a **non-blanching rash**. Correct with fresh frozen plasma, cryoprecipitate and platelets.

Immunisation has reduced sepsis from **Hib, meningococcus and pneumococcus**.`,
    qs:[] },

  { id:'em-abcde', h:'The ABCDE primary assessment and AVPU', w:'know',
    body:`**Airway · Breathing · Circulation · Disability · Exposure.** The primary survey exists to identify respiratory, circulatory or neurological failure. Resuscitate as you go, then perform the secondary assessment.

**Do not omit neurological status** — reduced consciousness itself threatens the airway, and some causes of coma are reversible (hypoglycaemia, opiate toxicity).

**AVPU:** **A**lert · responds to **V**oice · responds to **P**ain · **U**nresponsive. **A score of P means the airway is at risk** and needs a manoeuvre or adjunct. Equivalently, **GCS <8 means the airway is at risk.**

**Pupils in coma:** pinpoint and fixed → opiates/barbiturates, pontine lesion · fixed and dilated → severe hypoxia, during/post seizure, anticholinergics, hypothermia · **unilateral dilated pupil → expanding ipsilateral lesion, tentorial herniation, third nerve lesion**.

**Respiratory distress in infants** — moderate: tachycardia, RR >50, nasal flaring, grunting, accessory muscles, recession, head retraction, unable to feed. **Severe: cyanosis, exhaustion, reduced conscious level, saturation <92% despite oxygen, rising pCO₂.** Give supplementary oxygen when **SpO₂ <92%**.`,
    table:{ head:['Age','Heart rate','Respiratory rate','Systolic BP'], rows:[
      ['Newborn (0–1 mo)','100–160','35–60','50–70'],
      ['Infant (1–12 mo)','80–140','30–40','70–100'],
      ['Toddler (1–3 y)','80–130','20–30','70–110'],
      ['Preschool (3–6 y)','80–110','20–30','80–110'],
      ['School age (6–12 y)','70–100','20–25','80–120'],
      ['Adolescent (12+ y)','60–90','15–20','100–120']]},
    qs:[] }
  ]
},

/* ================= GROWTH AND PUBERTY ================= */
'growth-puberty': {
  intro: 'Questions here are almost always **pattern recognition between look-alike causes**, or **a calculation**. The examiner gives you a bone age, a parental history and a weight-versus-height relationship, and expects you to name the diagnosis. Learn the discriminating features in the table below and the formulas exactly.',
  sections: [

  { id:'gp-short', h:'Short stature — telling the causes apart', w:'must',
    body:`Every short-stature question is answered by the same three discriminators: **bone age**, **the weight-to-height relationship**, and **the family history**.

Two normal variants account for most cases:

**Constitutional delay of growth and puberty** — a normal variant, far commoner in boys. Slow *tempo* of maturation: delayed bone age, delayed puberty, **a family history of late maturation**, and — crucially — **a normal final adult height**, because the epiphyses stay open longer. Where self-esteem is significantly affected, a short course of low-dose testosterone accelerates growth and puberty.

**Familial short stature** — the child is short because the parents are short. **Bone age equals chronological age**, growth velocity is normal, puberty is normally timed, and **final height is short** but appropriate to the mid-parental centile.

Then the pathological causes, each with a give-away:
- **Hypothyroidism** — the **commonest endocrine cause**. Short *and relatively overweight*, markedly delayed bone age.
- **GH deficiency** — also short and overweight-for-height, **falling across centiles**. Screen with **IGF-1**; provocation testing only if growth is slow *and* IGF-1 is low.
- **Coeliac disease** — may present with slow growth alone; **weight centile falls below the height centile**.
- **Emotional deprivation** — short *and underweight* with delayed puberty; improves in a nurturing environment.
- **Cushing / steroid excess** — short with relative overweight; uncommon.
- **Skeletal dysplasia or storage disorder** — the only group with **disproportion**.

**Check a karyotype in every girl with significant short stature** to exclude **Turner syndrome (45,XO)** — dysmorphic features are often subtle, and **recurrent otitis media** is a supportive clue. Short stature in Turner is attributed to loss of one **SHOX** copy.

**MRI brain** only if there is headache or neurological signs (craniopharyngioma).`,
    table:{ head:['Cause','Bone age','Weight vs height','Final height'], rows:[
      ['**Constitutional delay**','**Delayed**','Proportionate','**Normal**'],
      ['**Familial short stature**','**Normal**','Proportionate','Short'],
      ['Hypothyroidism','Markedly delayed','**Overweight** for height','Reduced if untreated'],
      ['GH deficiency','Markedly delayed','**Overweight** for height','Reduced if untreated'],
      ['Coeliac disease','Delayed','**Underweight** for height','Normal if treated'],
      ['Emotional deprivation','Delayed','Underweight','Improves in better environment'],
      ['Skeletal dysplasia','Variable','**Disproportionate**','Short']]},
    qs:['p1-1','p1-6','p1-9'] },

  { id:'gp-measure', h:'Measuring, plotting and the mid-parental height', w:'must',
    body:`**Mid-parental height** — the calculation examiners set most often:

> Mean of the two parents' heights, **+7 cm for a boy**, **−7 cm for a girl**.

The commonest error is omitting the ±7. Most children reach a height within **two centile spaces** of the resulting mid-parental centile; the further a child sits from it, the more likely a pathological cause.

**Correct preterm infants for gestational age before interpreting anything.** Plot at actual age, then shift **back by the number of weeks born early**. Continue for the **first year**, or to **2 years** if extremely preterm. An infant born at 30 weeks plots 10 weeks to the left — a plot that looks like faltering growth often becomes entirely normal after correction.

**Centiles.** Height is normally distributed. Below the mean: **25th, 9th, 2nd, 0.4th**. Above: **75th, 91st, 98th, 99.6th**. Values **below the 0.4th or above the 99.6th** occur by chance in only **4 per 1000 children**.

**Disproportion** is assessed by measuring **sitting height** and subtracting it from total height to get leg length:
- **Skeletal dysplasia → legs short relative to the back**
- **Storage disorder → back short relative to the legs**`,
    qs:['p1-2','p1-3'] },

  { id:'gp-rules', h:'Growth rules of thumb', w:'high',
    body:`Pure recall, and easy marks if you have memorised them.

**Weight.** Gain decelerates through infancy in three 4-month blocks: **¾ kg/month**, then **½ kg/month**, then **¼ kg/month** — about **6 kg over the first year**.
- **Birth weight doubles by 4–5 months**
- **Birth weight triples by 12 months**
- An initial loss of **5–10% of birthweight** in the first days is physiological, **regained by 2 weeks**. Loss **>10%**, or failure to regain by **14 days**, needs assessment.
- Rough estimate: **weight (kg) = (age in years × 2) + 8**

**Height.**
- **Doubles at 4 years**, **triples at 12 years**
- Rough estimate: **height (cm) = (age in years × 5) + 80**

**The four phases of growth** and what drives each — this explains *why* a given deficiency produces a given pattern.`,
    table:{ head:['Phase','Share of adult height','Main determinant'], rows:[
      ['**Fetal** (8–40 weeks)','**30%**','Uterine size, placental nutrition, maternal factors'],
      ['**Infantile**','**15%**','**Nutrition**, good health, thyroid hormone'],
      ['**Childhood**','**40%**','**Growth hormone** and thyroid'],
      ['**Pubertal**','**15%**','**Sex steroids** plus GH']]},
    qs:['p1-4'] },

  { id:'gp-puberty', h:'Puberty — sequence, timing and the growth spurt', w:'must',
    body:`Know the **first sign** in each sex and the **position of menarche** in the sequence — those two facts answer most puberty questions.

**Girls.** First sign is the **breast bud (thelarche)**. Pubic hair (adrenarche) and the height spurt follow. **Menarche comes late — about 2.5 years after pubertal onset — and only about 5 cm of growth remains after it.** That figure is the one examiners want when counselling about final height.

**Boys.** First sign is **testicular enlargement above 4 mL**. The height spurt begins much later, at a testicular volume of **12–15 mL**, roughly **18 months after** pubertal onset.

**Why men end up taller:** boys have a **longer pre-pubertal childhood growth phase** and a **higher peak pubertal height velocity**. This is also the reasoning behind the ±7 cm in the mid-parental calculation.`,
    qs:['p1-7'] },

  { id:'gp-precocious', h:'Precocious puberty and the benign normal variants', w:'high',
    body:`**Precocious puberty** is pubertal development before **8 years in girls** or **9 years in boys**. The discriminator from the benign variants is simple: **is there growth acceleration, and is more than one pubertal feature present?**

**Premature thelarche** — isolated breast development, typically **6 months to 2 years**, from transient activation of the hypothalamic–pituitary axis. It is **often asymmetrical and fluctuates in size**, rarely progresses beyond stage 3, has **no other pubertal features and no growth acceleration**, and is **self-limiting**. **Investigations are not usually required** — reassurance and observation only.

**Premature adrenarche** — isolated pubic hair with no other features. Measure **DHEA and 17-hydroxyprogesterone** only if there is **rapid growth or significant virilisation**, to exclude excess adrenal androgen. Associated with later **PCOS** risk.

**Central (gonadotrophin-dependent) precocious puberty** activates the full sequence with growth acceleration; treated with **GnRH analogues**. **Cranial imaging is more important in boys**, where an intracranial lesion is more likely to be responsible.`,
    qs:['p1-8'] },

  { id:'gp-head', h:'Head circumference and skull shape', w:'high',
    body:`**Microcephaly** is below the 2nd centile; **macrocephaly** above the 98th. The **posterior fontanelle** closes by about **8 weeks**, the **anterior fontanelle** by **12–18 months**. A **tense fontanelle when the infant is not crying** suggests raised intracranial pressure — arrange cranial ultrasound.

The examinable discrimination is **positional plagiocephaly versus lambdoid craniosynostosis**, and it turns on **which way the ear is displaced**.

**Occipital plagiocephaly** — a **parallelogram-shaped head** with occipital flattening and the **ipsilateral ear displaced ANTERIORLY**. All sutures open, head circumference normal, resolves spontaneously with mobility. Became commoner after supine sleeping advice, and is also seen in **hypotonic infants** who move their heads less. Positional management and reassurance.

**Lambdoid craniosynostosis** — the mimic. The ear on the affected side is displaced **POSTERIORLY**, and a **fused, palpable ridge** is present over the suture.

**Sagittal synostosis** is the commonest localised craniosynostosis — a **long narrow skull (scaphocephaly)**. **Crouzon syndrome** is syndromic, with shallow orbits and **exophthalmos** threatening vision.`,
    qs:['p1-5'] }
  ]
}

};