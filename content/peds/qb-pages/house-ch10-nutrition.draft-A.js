/* House — "Dr. HOUSE in pediatric medicine & surgery MCQs" (Semester 8\Pedo\Questions\pediatric .pdf)
 * Part I, chapter 10: NUTRITION — printed questions Q1 to Q10.
 *
 * DRAFT A. n:11 to n:15 are drafted separately in house-ch10-nutrition.draft-B.js — not touched here.
 *
 * Stems, options and keys are taken verbatim from the validated staging record
 * content\peds\qb-pages\house-ch10-nutrition.array.js. `stem` and `options` are byte-identical to
 * the staged entry. The book's own wording is preserved exactly and never commented on (curly
 * quotes, apostrophes, the real 1/2 glyph, en dashes) — per the 2026-09-02 ruling. The one
 * exception is numbers, units, doses and exponents, which are always reproduced exactly.
 *
 * BOILER: printed on Q1-Q6 ("Select one answer only.") and absent from Q7 onward, all within this
 *   half — it is stripped from every staged `stem` already and is never added back or mentioned in
 *   an explanation. `boiler` and `fig` are staging-only fields and do not appear below.
 *
 * KEYS IN THIS RANGE: C C D D B E A B C E -> answer 2 2 3 3 1 4 0 1 2 4 respectively.
 *   Every key in ch.10 prints as a BARE LETTER ("Answer: C.") with no option name — the
 *   letter-versus-name cross-check is UNAVAILABLE for all ten and was NOT performed.
 *
 * ONE figure in this chapter, and it is entirely in this half, on Q1 (p.75) — TWO images behind ONE
 *   basename, side by side inside the question box: (a) a colour clinical photograph of a child's
 *   forearm and wrist, (b) a plain radiograph (AP view) of the same region. `image` carries the
 *   single basename `q-pd-hd-75`; `imgAlt` states modality and view only. The crop has NOT been cut
 *   — it needs ONE combined crop of both panels, not two separate crops.
 *
 * TWO PAGE-BREAK STRADDLES IN THIS HALF: Q2 (p.75 -> p.76) and Q5 (p.76 -> p.77). Both file on the
 *   page the question NUMBER is printed on; each `source` carries the straddle inside the
 *   parentheses, semicolon-joined.
 *
 * SHARED OPTION MENU, Q7/Q8/Q9/Q10 — same five options (Vitamin D deficiency / Vitamin K deficiency
 *   / Kwashiorkor / Marasmus / Cow's milk protein allergy) in the same order, four different keys
 *   (A, B, C, E). The comparative table is written ONCE, in `pedhd-nutr-7`; Q8, Q9 and Q10 each
 *   point at that id by name and add only their own discriminating clinical token. This is a
 *   pairing, not a fold — all four are spliced as four distinct entries.
 *
 * The bank prints ZERO explanation boxes in this chapter — every answer below is authored and
 *   carries the closing marker.
 *
 * Chapter assignment was made one question at a time, on what the stem is about (candidate ids per
 *   the brief, all verified to resolve in MODULES under `pediatrics`):
 *   Q1  -> nutrition-vit   wrist changes + exclusively breastfed infant = vitamin D deficiency/rickets
 *   Q2  -> nutrition       childhood obesity, comorbidity risk
 *   Q3  -> nutrition       birthweight and later-life cardiovascular risk (closest nutrition bucket;
 *                          secondary growth-puberty for the birthweight/centile framing)
 *   Q4  -> nutrition-feed  disadvantages of breastfeeding
 *   Q5  -> nutrition-pem   marasmus
 *   Q6  -> nutrition       obesity comorbidities, negative stem
 *   Q7  -> nutrition-vit   vitamin D deficiency/rickets, wrists wider than normal
 *   Q8  -> nutrition-vit   vitamin K deficiency / haemorrhagic disease of the newborn (secondary
 *                          haem-bleeding, which carries the coagulation-profile detail)
 *   Q9  -> nutrition-pem   kwashiorkor
 *   Q10 -> nutrition-feed  reaction to a breast-to-formula switch (secondary allergy, which carries
 *                          the IgE/non-IgE mechanism)
 *
 * Grounding is T_PEDS['nutrition'] (5 sections, nut-1..nut-5), T_PEDS['nutrition-feed'] (10,
 *   nut-6..nut-15), T_PEDS['nutrition-pem'] (5, nut-16..nut-20), T_PEDS['nutrition-vit'] (11,
 *   nut-21..nut-31) — section ids run continuously across all four nutrition chapters, measured off
 *   disk, not assumed — plus T_PEDS['growth-puberty'] (gp-1..gp-11), T_PEDS['allergy'] (alg-5,
 *   alg-6), T_PEDS['haem-bleeding'] (haem-44), T_PEDS['endocrine'] (endo-1, endo-5) and
 *   T_PEDS['respiratory'] (resp-14). Sections are cited by their own printed Src line.
 *
 * OUTSIDE-KNOWLEDGE TAGS in this range, each grepped against T_PEDS before being called a gap:
 *   Q1  none — fully grounded in nutrition-vit.
 *   Q2  none new — endo-5 prints "hypertension, dyslipidemia, obesity" as T2DM comorbidities and
 *       states T2DM is commoner in obese adolescents, which is the course's own bridge to the exact
 *       pair of adult risks the key names.
 *   Q3  the Barker/fetal-origins link between birthweight and adult cardiovascular risk returned
 *       zero on "Barker", "fetal origin", "birthweight", "birth weight", "low birth" and
 *       "cardiovascular disease" across the whole of T_PEDS (the only hits are unrelated — MAS risk
 *       factors, cyanotic heart disease, CP risk factors). Tagged as outside knowledge in full.
 *   Q4  the specific claim that breast milk's lower vitamin K concentration can itself cause
 *       life-threatening bleeding is not printed; haem-bleeding haem-44 prints late haemorrhagic
 *       disease of the newborn (2-12 weeks, exclusively breastfed or malabsorbing) as its own
 *       "(not in course material)" tag already — confirming the gap rather than creating a new one.
 *   Q6  low self-esteem and slipped upper femoral epiphysis, AS OBESITY ASSOCIATIONS, returned no
 *       direct hit — self-esteem is only printed as an untreated-ADHD consequence (dev-nd dp-15) and
 *       SUFE only as a growth-hormone side effect (growth-puberty gp-11); both tagged. Asthma-with-
 *       obesity and the T2DM comorbidity link, by contrast, ARE printed (resp-14, endo-1, endo-5).
 *   Q7-Q10 none new — grounded in nutrition-vit / nutrition-pem / nutrition-feed / allergy / haem-
 *       bleeding respectively.
 *
 * DIVERGENCE RECORDED, KEY NOT MOVED: Q5 (Anil) prints a weight z-score of -2 to -3, which the
 *   deck's own WHO classification table (nutrition-pem nut-16) bands as MODERATE malnutrition, not
 *   severe; marasmus is defined in the same section by the older Wellcome %-of-median system rather
 *   than by WHO z-score, and the two are not printed as directly interchangeable. Recorded in that
 *   entry's explanation; the printed key (marasmus) is not disputed, because every other criterion
 *   in the vignette (no oedema, normal hair/skin, age, wasting pattern) converges on it regardless.
 *
 * Every key prints as a bare letter; the letter-vs-name cross-check was NOT performed anywhere in
 *   this file, and that unavailability is stated in each entry rather than left silent.
 */


var PEDHD_NUTR_DRAFT_A = [

{
  id:'pedhd-nutr-1', bank:'house', module:'pediatrics', chapter:'nutrition-vit',
  image:'q-pd-hd-75',
  imgAlt:'Two images side by side inside the question box: (a) a colour clinical photograph of a child\'s forearm and wrist; (b) a plain radiograph (antero-posterior view) of a wrist and hand.',
  stem:'Sunit, a 13-month-old boy, presents with faltering growth. He is still entirely breastfed. On examination, he is miserable and his wrist is shown in the figure below on the left. An X-ray is taken of his wrist is shown in the figure below on the right. What is the most likely diagnosis?',
  options:['Vitamin A deficiency','Vitamin B1 deficiency','Vitamin D deficiency','Vitamin E deficiency','Vitamin K deficiency'],
  answer:2,
  explanation:'**Sunit is 13 months old, exclusively breastfed, faltering, miserable, with a wrist deformity — every element points to vitamin D deficiency (rickets), and the two images are read together, not separately.**\n\nBreast milk alone: `nutrition-vit` prints breast milk as LOW in vitamin D — only about 30 IU per litre — well short of the infant\'s daily requirement of **400 IU (10 µg)**; adequacy depends on the mother AND the infant getting enough sunlight (nut-21). A 13-month-old who is still exclusively breastfed with no supplement and no weaning foods is exactly the exposed infant the deck describes.\n\nTiming and mood fit the deck\'s own window: bony changes usually appear in the **second half of the 1st year and during the 2nd year**, and the earliest symptoms include **irritability** — Sunit is described as miserable (nut-24).\n\n**Reading the two images, now that the diagnosis is settled.** Panel (a), the colour photograph, shows the characteristic **epiphyseal enlargement at the wrist — the Marfan sign** — the widened, knobby appearance of the distal radius and ulna under the skin (nut-25). Panel (b), the radiograph, shows the changes the deck lists for active rickets on a wrist film: **broadening, cupping (concavity) and fraying (irregularity)** of the metaphyses of the radius and ulna, an **increased gap** between the calcified bone ends and the carpal bones because the unmineralised epiphyseal cartilage does not show on X-ray, an **indistinct epiphyseal line**, and reduced bone density with prominent trabeculae in the shafts (nut-26).\n\n**Why the other four vitamins do not fit.**\n\n| Option | Why it is wrong here |\n|---|---|\n| Vitamin A deficiency | The deck\'s manifestations are ocular (night blindness, xerophthalmia, keratomalacia, Bitot spots) and dermatological (xerosis, follicular hyperkeratosis) — nothing about a wrist (nut-30) |\n| Vitamin B1 deficiency | Beri-beri: polyneuropathy, tender calves, areflexia, ophthalmoplegia and heart failure — a different system entirely, with no bony change printed (nut-31) |\n| Vitamin E deficiency | Haemolysis in preterm infants, ataxia and areflexia — Sunit is term-aged and the stem gives no haemolytic or cerebellar sign (nut-31) |\n| Vitamin K deficiency | Presents as bleeding — haemorrhagic disease of the newborn, prolonged prothrombin time — not a wrist deformity (nut-31, haem-44) |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Recognise vitamin D deficiency (rickets) in an exclusively breastfed 13-month-old with faltering growth and wrist deformity, and read a paired colour photograph and radiograph as a single figure — epiphyseal (Marfan sign) widening on the photograph, metaphyseal broadening, cupping and fraying on the film — against the other four vitamin deficiencies.',
  source:'pediatric .pdf p.75 (Part I, ch.10 Q1)'
},

{
  id:'pedhd-nutr-2', bank:'house', module:'pediatrics', chapter:'nutrition',
  stem:'Sarah, a 9-year-old girl, is referred by the school nurse to the paediatric clinic because of her weight. She weighs 43 kg (98th centile) and is 141 cm tall (91st centile). She has followed her height centiles for the last 9 months but her weight centile has increased. Her body mass index is on the 97th centile. Her mother reports that she hardly eats at all and when she does she has a very healthy diet. Which of the following statements is most likely to be correct?',
  options:['A calorie-restricted diet is the treatment of choice','Sarah\'s adrenocortical axis should be checked to exclude Cushing syndrome','Sarah has a higher risk of an abnormal lipid profile and raised blood pressure in adult life','Sarah is obese','Sarah\'s main problem is that she has a low metabolic rate'],
  answer:2,
  explanation:'**Every option here reads as a possible next step, and the discrimination between them is the whole point of the question — Sarah\'s numbers make three of the five wrong for a specific, sourced reason, and leave the choice between the most clinically important statement (C) and a merely descriptive one (D).**\n\n**The picture:** weight on the 98th centile with a static height centile (91st, followed for the last 9 months) and BMI on the 97th centile. By the deck\'s own obesity band — **BMI >95th centile = OBESE** — Sarah\'s BMI clears that threshold (`nutrition` nut-3), so option D is a true statement, and it is not disputed as one here. It is not the printed key, though: the vignette is not testing whether a reader can read a BMI centile off the stem, it is testing what that finding MEANS, and the deck answers that question directly in `endocrine`: **type 2 diabetes is commoner in obese adolescents**, and its comorbidities are named as **hypertension, dyslipidaemia and obesity** together (endo-5). That endo-5 line is the course\'s own bridge from a paediatric obesity finding to exactly the pair of adult risks option C names — an abnormal lipid profile and raised blood pressure — so C is graded as fully grounded rather than tagged as outside knowledge.\n\n**Why A is wrong:** the deck\'s own obesity management is **sustained lifestyle change** — healthier eating, more activity, less sedentary time — not a calorie-restricted diet in isolation (`nutrition` nut-4). Sarah\'s mother also reports she \"hardly eats at all\", which argues against restriction being either safe or the right first move.\n\n**Why B is wrong:** hypercortisolism is a real endogenous cause of obesity (nut-3), but the deck\'s own rule for when to suspect an endocrine cause is **obesity WITH short stature or poor height velocity** (`growth-puberty` gp-4). Sarah is tall for her age (91st centile) and has tracked that centile for nine months — the pattern the deck calls **nutritional obesity: obese + TALL** — so a Cushing work-up is not indicated by the deck\'s own logic.\n\n**Why E is wrong:** a low metabolic rate as the \"main problem\" in childhood obesity is not stated anywhere in the deck; the material\'s own explanation for idiopathic obesity is behavioural and environmental (diet, activity, screen time, family environment), not a metabolic defect.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Interpret a paediatric obesity vignette using the deck\'s own BMI centile cut-off, the obese-plus-tall vs obese-plus-short rule for when to suspect an endocrine cause, and the course\'s own comorbidity list (hypertension, dyslipidaemia) linking childhood obesity to adult cardiovascular and metabolic risk.',
  source:'pediatric .pdf p.75 (Part I, ch.10 Q2; the question straddles the page break, with its answer line printed alone at the top of p.76)'
},

{
  id:'pedhd-nutr-3', bank:'house', module:'pediatrics', chapter:'nutrition',
  stem:'Which of the following term newborns has the lowest risk of cardiovascular disease in later life?',
  options:['1.8 kg','2.1 kg','2.4 kg','3.9 kg','4.6 kg'],
  answer:3,
  explanation:'**The relationship between birthweight and adult cardiovascular disease is U-shaped, not linear** — *not taken from the course material; none of ch.10\'s four theory chapters teaches a birthweight-cardiovascular-risk relationship at all.* *(The terms \"Barker\", \"fetal origin\", \"birthweight\", \"birth weight\", \"low birth\" and \"cardiovascular disease\" were grepped across every section of `T_PEDS`; the handful of hits that exist are unrelated — meconium aspiration risk factors, cyanotic heart disease, cerebral palsy risk factors, allergy risk — and none of them describes birthweight programming future cardiovascular risk.)*\n\nAt the low end, the \"fetal origins\" (Barker) hypothesis holds that intrauterine undernutrition programmes a **\"thrifty phenotype\"** — metabolic adaptations that predispose to insulin resistance, hypertension and cardiovascular disease once postnatal nutrition is adequate — so the three lowest options here (1.8, 2.1 and 2.4 kg, all low birthweight for a term infant) carry an **increased** risk, not a reduced one. At the high end, **macrosomia** (birthweight over roughly 4-4.5 kg) is itself associated with childhood and later obesity and metabolic syndrome, so 4.6 kg is also on the raised-risk side of the curve. That leaves **3.9 kg — close to the normal mean birthweight for a term infant and clear of both the low-birthweight and the macrosomic bands — as the option with the lowest cardiovascular risk**, which is the printed key.\n\n**Why this is filed under `nutrition` rather than a birthweight-specific chapter:** ch.10 groups faltering growth and obesity together as the whole-course, lifelong view of a child\'s growth trajectory (`nutrition` nut-1 to nut-5), and this question extends that same lifelong framing back to birth; `growth-puberty`, which does carry birthweight in its short-stature material (gp-10), is named as the secondary chapter for the same reason.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Recognise the U-shaped relationship between birthweight and adult cardiovascular risk (Barker/fetal-origins hypothesis at the low end, macrosomia-associated metabolic risk at the high end) as a gap in the course material, filled and tagged rather than left unanswered.',
  source:'pediatric .pdf p.76 (Part I, ch.10 Q3)'
},

{
  id:'pedhd-nutr-4', bank:'house', module:'pediatrics', chapter:'nutrition-feed',
  stem:'A mother asks you whether there are any disadvantages to breastfeeding. Although you would prefer to inform her about the many advantages of breastfeeding, you wish to answer her question honestly. Which of the following is most likely to be a true potential disadvantage?',
  options:['Breastfeeding will reduce her chance of having more children','The absence of cow\'s milk protein in breast milk increases the risk that the child will develop milk allergy at weaning','The higher interferon level in breast milk increases the risk of severe bronchiolitis in children who develop respiratory syncytial virus infection','The lower vitamin K concentration in breast milk can result in life-threatening bleeding','The strong bond developed during breastfeeding will prevent paternal bonding'],
  answer:3,
  explanation:'**Four of the five options invert something the deck states as a benefit; the fifth is the one true disadvantage, and it is a genuine gap the deck leaves for outside knowledge to fill.**\n\n**Why D is correct.** Breast milk really is low in vitamin K, and an exclusively breastfed infant who has not received vitamin K prophylaxis is at higher risk of bleeding. `haem-bleeding` prints this precise scenario as a distinct, named entity — **late haemorrhagic disease of the newborn, onset 2-12 weeks, in infants who are exclusively breastfed or malabsorbing** — and flags in its own text that this specific link is **\"not in course material\"** (haem-44). That flag is not contradicted here, it is confirmed: the deck names vitamin K deficiency and haemorrhagic disease of the newborn as a general entity (`nutrition-vit` nut-31, prothrombin-time prolongation, treated with 1 mg IM), but the breastfeeding-specific mechanism behind option D is genuinely outside what is taught, and is tagged as such. *(Not taken from the course material: breast milk vitamin K content is markedly lower than formula, and exclusive breastfeeding without prophylaxis is a recognised risk factor for late vitamin K deficiency bleeding, which can be intracranial and life-threatening.)*\n\n**Why the other four are each a reversal of a stated benefit, not a genuine risk:**\n\n| Option | What the deck actually says |\n|---|---|\n| A - reduced chance of more children | `nutrition-feed` lists this the other way round, as a benefit TO THE MOTHER: breastfeeding \"increases the interval between children\", useful for birth spacing (nut-9). A longer interval is not framed as a disadvantage anywhere in the material |\n| B - absent cow\'s milk protein raises allergy risk | The deck\'s advantages list credits breastfeeding with **reducing** infection and does not print any claim that its protein content raises the risk of milk allergy at weaning; nothing in `nutrition-feed` or `allergy` supports this direction |\n| C - higher interferon raises bronchiolitis risk | The opposite of what is printed: breastfeeding **reduces gastrointestinal and respiratory infection**, named alongside otitis media and necrotising enterocolitis (nut-9) |\n| E - prevents paternal bonding | Not printed anywhere; the deck states breastfeeding **enhances the mother-child relationship** (nut-9) and says nothing about the father |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Separate the one genuine disadvantage of breastfeeding (low breast-milk vitamin K, a course-flagged gap around late haemorrhagic disease of the newborn) from four options that each reverse a benefit the deck states directly — birth spacing, mother-infant bonding, and reduced infection risk.',
  source:'pediatric .pdf p.76 (Part I, ch.10 Q4)'
},

{
  id:'pedhd-nutr-5', bank:'house', module:'pediatrics', chapter:'nutrition-pem',
  stem:'Anil is a 2½-year-old boy who lives in India and attends the local health clinic near their village for a routine check. Both his parents are subsistence farmers. He is asymptomatic. On examination, he is very thin but his hair and skin appear normal and there is no oedema or other clinical abnormalities. His height is on the 5th centile but his weight is well below the 0.4th centile (z-score between –2 and –3 below the median). What is the most likely diagnosis?',
  options:['Kwashiorkor','Marasmus','Normal child','Rickets','Severe gastro-oesophageal reflux'],
  answer:1,
  explanation:'**Anil converges on marasmus by elimination as much as by a single number, and the numbers themselves are worth reading with the WHO table open.**\n\n**Against kwashiorkor and marasmic-kwashiorkor immediately:** the deck\'s own \"always present\" list for kwashiorkor requires **oedema with no ascites**, plus usually **hair changes (dry, uncurled, discoloured) and hepatomegaly** (`nutrition-pem` nut-18) — the stem states explicitly that Anil\'s hair and skin appear normal and there is no oedema, ruling both severe-with-oedema forms out directly.\n\n**Against \"normal child\":** his weight is **well below the 0.4th centile**, with a height on only the 5th centile — this is not a normal growth pattern by any reading of the material\'s own definitions of short stature or faltering growth (`growth-puberty` gp-4, `nutrition` nut-1).\n\n**Against rickets and reflux:** rickets needs a bony sign — wrist widening, craniotabes, bowing, a rachitic rosary — and reflux needs a feeding/vomiting history; the stem gives neither.\n\n**What is left is marasmus**, and Anil fits its printed picture well: **age 2½ years, inside the deck\'s \"first 3 years, usually the 1st year\" window**; thin with **loss of subcutaneous fat**; and **no oedema, no dermatosis, no hair change, or only mild ones** — exactly the negative findings the stem gives (`nutrition-pem` nut-17). His background — a subsistence-farming family in rural India — is the classic epidemiological setting the deck\'s marasmus/kwashiorkor material assumes throughout.\n\n**The number worth reading carefully:** the stem gives a weight z-score **between –2 and –3**. On the deck\'s own **WHO classification** table, that band is printed as **moderate malnutrition**, with **severe wasting** reserved for **< –3** (`nutrition-pem` nut-16). Marasmus, however, is defined in the same section by the older **Wellcome classification** (weight **< 60 %** of the 50th centile for age) rather than by a WHO z-score, and the two systems are not printed as directly interchangeable; this is recorded rather than smoothed over, and the key is not disputed on the strength of it — the clinical picture (no oedema, normal hair and skin, age, wasting) still converges on marasmus by every other criterion the deck gives.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose marasmus in a rural Indian toddler by excluding kwashiorkor (no oedema, normal hair/skin), rickets and reflux (no bony or feeding history) and a normal growth pattern (severe underweight), while reading the printed z-score against the deck\'s WHO moderate/severe cut-off rather than assuming it matches the Wellcome-based marasmus definition.',
  source:'pediatric .pdf p.76 (Part I, ch.10 Q5; the question straddles the page break, with its answer line printed alone at the top of p.77)'
},

{
  id:'pedhd-nutr-6', bank:'house', module:'pediatrics', chapter:'nutrition',
  stem:'Harry is a 13-year-old boy who attends the paediatric clinic because of obesity. His height is on the 98th centile and his weight is above the 99.6th centile. Which of the following is least likely to be associated with obesity?',
  options:['Asthma','Hypertension','Low self-esteem','Slipped upper femoral epiphysis','Type 1 diabetes'],
  answer:4,
  explanation:'**\"Least likely\" is a negative stem, preserved as printed and answered as one: four options are obesity associations the deck itself makes, and the fifth — type 1 diabetes — is the one the deck\'s own diabetes classification puts somewhere else entirely.**\n\n**Why E is the answer.** `endocrine` classifies diabetes by mechanism: **type 1 is beta-cell destruction, an autoimmune (most common) or idiopathic process causing absolute insulin deficiency**, while **type 2 is insulin resistance with relative insulin deficiency, and its own worked example is \"obesity-related diabetes\"** (endo-1). The deck also states plainly that **type 2 diabetes is commoner in obese adolescents** (endo-5). Nowhere does the material link type 1 diabetes to obesity — the two conditions sit in different rows of the same table, so it is the least likely of the five to be associated with Harry\'s obesity.\n\n**Why the other four ARE printed associations.**\n\n| Option | Where the deck grounds it |\n|---|---|\n| Asthma | `respiratory` lists asthma \"with obesity\" as its own named phenotype, with **a different pattern of airway inflammation** from the other phenotypes (resp-14) |\n| Hypertension | Listed with dyslipidaemia and obesity itself as comorbidities to manage alongside type 2 diabetes, and obesity is named as a driver of all three together (`endocrine` endo-5) |\n| Low self-esteem | *(Not taken from the course material as an obesity association specifically — the deck\'s only printed \"low self-esteem\" is among the untreated-ADHD consequences in `dev-nd`, dp-15 — but it is a well-recognised psychosocial consequence of childhood obesity.)* |\n| Slipped upper femoral epiphysis | *(Not taken from the course material as an obesity association — the deck\'s only printed SUFE is as a side effect of recombinant growth hormone treatment, `growth-puberty` gp-11 — but obesity is a well-recognised independent risk factor for SUFE in adolescents, through mechanical loading on the proximal femoral growth plate.)* |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Answer a negative-stem obesity vignette by separating four printed obesity associations (asthma-with-obesity phenotype, hypertension/dyslipidaemia via the T2DM link) from type 1 diabetes, which the deck\'s own classification places under autoimmune beta-cell destruction rather than obesity-related insulin resistance.',
  source:'pediatric .pdf p.77 (Part I, ch.10 Q6)'
},

{
  id:'pedhd-nutr-7', bank:'house', module:'pediatrics', chapter:'nutrition-vit',
  stem:'Ahmed is an 18-month-old Pakistani boy who was born in the UK with a weight of 3.2 kg. He is on a mixed diet. His height is on the 10th centile and his weight is on the 0.4th centile. He is noted to be miserable. On examination, his wrists also feel wider than normal. Which of the following is the most likely diagnosis of that patient?',
  options:['Vitamin D deficiency','Vitamin K deficiency','Kwashiorkor','Marasmus','Cow\'s milk protein allergy'],
  answer:0,
  explanation:'**Q7, Q8, Q9 and Q10 print the identical five-option menu — Vitamin D deficiency / Vitamin K deficiency / Kwashiorkor / Marasmus / Cow\'s milk protein allergy — in the same order, with four different keys (A, B, C, E). This is a shared menu, not a fold: four different patients, four different diagnoses. The comparative table below is written once, here, and Q8/Q9/Q10 each point back to it and add only their own discriminating clinical token.**\n\n### The five-condition menu, read against all four vignettes\n\n| Condition | The vignette that keys it | Discriminating clinical token |\n|---|---|---|\n| Vitamin D deficiency | Q7 - Ahmed | 18 months old, mixed diet, Pakistani ethnicity born and raised in the UK (dark skin cuts UV synthesis, `nutrition-vit` nut-22), miserable, and **wrists feel wider than normal — the Marfan sign** of epiphyseal enlargement (nut-25) |\n| Vitamin K deficiency | Q8 - Harry | 3 weeks old, exclusively breastfed, **born at home with all interventions declined** (no vitamin K prophylaxis given), presenting with **severe rectal bleeding and shock** — classic haemorrhagic disease of the newborn (`haem-bleeding` haem-44) |\n| Kwashiorkor | Q9 - Jonas | 18 months old, South African, weaned onto **maize-based porridge** at 9 months (protein-poor staple), **distended abdomen, periorbital and pedal oedema, hair with a red tinge** — the deck\'s own \"always present\" oedema-without-ascites plus \"usually present\" hair change (`nutrition-pem` nut-18) |\n| Marasmus | *(not keyed in this block — see Q5, Anil)* | weight **< 60 %**, no oedema, normal or mildly changed hair and skin (nut-17) |\n| Cow\'s milk protein allergy | Q10 - Jamie | 5 months old, **switched from breast to formula after maternal mastitis**, weight crossing down from the 25th to **below the 0.4th centile**, with **loose stools and eczema** — non-IgE-mediated food allergy, gut symptoms over hours rather than minutes (`allergy` alg-6) |\n\n**Why Ahmed is Vitamin D deficiency, option by option.** The wrist finding is the deciding sign: `nutrition-vit` names **epiphyseal enlargement, best felt at the wrists and ankles**, as the **Marfan sign** of rickets (nut-25), and the deck\'s own risk list for vitamin D deficiency names **dark skin** (interferes with UV synthesis) and a **temperate, smoky, indoor-kept environment** among the commonest causes (nut-22) — both of which fit an 18-month-old of Pakistani ethnicity living in the UK on a mixed (not vitamin-D-fortified) diet.\n\n- **Vitamin K deficiency (B)** presents with **bleeding**, not a wrist deformity — no bleeding is mentioned for Ahmed.\n- **Kwashiorkor (C)** requires **oedema**, which is not present.\n- **Marasmus (D)** requires severe wasting with **no oedema and no bony sign at all**; Ahmed\'s centiles (10th height, 0.4th weight) are low but the stem\'s positive finding — wider wrists — is a rachitic sign the deck does not attach to marasmus.\n- **Cow\'s milk protein allergy (E)** presents with **cutaneous or gastrointestinal** features (urticaria, vomiting, diarrhoea, or delayed gut symptoms) — nothing in Ahmed\'s stem describes any of these, and no feed change is mentioned.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Build and read the ch.10 shared five-condition menu (Vitamin D deficiency / Vitamin K deficiency / Kwashiorkor / Marasmus / Cow\'s milk protein allergy) against all four vignettes that share it, and pick Vitamin D deficiency for Ahmed on the Marfan wrist sign and the dark-skin/UK-climate risk factors the deck names.',
  source:'pediatric .pdf p.77 (Part I, ch.10 Q7)'
},

{
  id:'pedhd-nutr-8', bank:'house', module:'pediatrics', chapter:'nutrition-vit',
  stem:'Harry is a 3-week-old infant who has been exclusively breastfed by his mother. He was born at home as his mother wanted ‘everything to be natural’ and declined all interventions. His birthweight was 3.4 kg. He presents to the hospital with severe rectal bleeding and shock. Which of the following is the most likely diagnosis of that patient?',
  options:['Vitamin D deficiency','Vitamin K deficiency','Kwashiorkor','Marasmus','Cow\'s milk protein allergy'],
  answer:1,
  explanation:'**Same five-option menu as `pedhd-nutr-7` — see that entry for the full comparative table. Harry\'s discriminating token: born at home with all interventions declined, so no vitamin K prophylaxis was given, and he presents at 3 weeks with severe rectal bleeding and shock.**\n\nThis is the textbook picture of **haemorrhagic disease of the newborn from vitamin K deficiency**: vitamin K is required for **carboxylation of the clotting factors**, and its deficiency causes **haemorrhagic disease of the newborn with a prolonged prothrombin time** (`nutrition-vit` nut-31). `haem-bleeding` separates this from DIC on the same coagulation profile — in vitamin K deficiency the **bleeding time, thrombin time, platelet count and fibrinogen all stay normal**, and there are **no fragmented red cells**; only the PT/PTT factor limbs are prolonged (haem-44). Harry\'s declined-intervention home birth is exactly the missed-prophylaxis scenario the deck\'s \"late\" onset form describes — **2 to 12 weeks, in an exclusively breastfed infant** — and his age (3 weeks) sits inside that window.\n\nThe other four options fail on the same grounds given at `pedhd-nutr-7`: no wrist sign for vitamin D deficiency, no oedema for kwashiorkor, no wasting pattern for marasmus, and rectal bleeding with shock is not a feeding-reaction or growth-faltering presentation for cow\'s milk protein allergy.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Identify vitamin K deficiency (haemorrhagic disease of the newborn) in a 3-week-old exclusively breastfed infant born at home with declined vitamin K prophylaxis, using the shared menu built at pedhd-nutr-7.',
  source:'pediatric .pdf p.77 (Part I, ch.10 Q8)'
},

{
  id:'pedhd-nutr-9', bank:'house', module:'pediatrics', chapter:'nutrition-pem',
  stem:'Jonas is an 18-month-old black African boy in KwaZulu Natal, South Africa. He was born weighing 3.2 kg. He was breastfed until 9 months of age when his sibling was born. He now mainly eats the traditional maize-based porridge, which is grown on the family farm. His weight is just below the 0.4th centile. He looks thin but has a distended abdomen. There is oedema around his eyes and the top of his feet. His hair has a red tinge. Which of the following is the most likely diagnosis of that patient?',
  options:['Vitamin D deficiency','Vitamin K deficiency','Kwashiorkor','Marasmus','Cow\'s milk protein allergy'],
  answer:2,
  explanation:'**Same five-option menu as `pedhd-nutr-7` — see that entry for the full comparative table. Jonas\'s discriminating token: weaning onto a maize-based staple at 9 months, a distended abdomen, periorbital and pedal oedema, and hair with a red tinge.**\n\nEvery one of those is a printed kwashiorkor feature. `nutrition-pem` lists kwashiorkor as a disease of the **weaning and post-weaning periods**, when the diet becomes **persistently deficient in essential protein** — Jonas\'s maize-based porridge (protein-poor, though the deck does not name maize specifically) fits that timing exactly, weaned at 9 months onto a family-farmed staple. The **oedema with no ascites** and the **disturbed muscle/fat ratio** are listed as **always present**, and **hair changes — dry, uncurled, loss of lustre, pickable, discoloured** — as **usually present** (nut-18); Jonas\'s red tinge is a form of that discolouration. The distended abdomen is consistent with the **hepatomegaly** the same list names as usually present.\n\nThe other four options fail on the same grounds given at `pedhd-nutr-7`: no wrist sign for vitamin D deficiency, no bleeding for vitamin K deficiency, marasmus is defined by the ABSENCE of oedema and hair change rather than their presence, and nothing in Jonas\'s stem describes a feed switch or the acute allergic/gut pattern of cow\'s milk protein allergy.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Identify kwashiorkor in an 18-month-old South African boy weaned onto a maize-based staple, using the deck\'s always-present oedema-without-ascites and usually-present hair-change criteria, against the shared menu built at pedhd-nutr-7.',
  source:'pediatric .pdf p.78 (Part I, ch.10 Q9)'
},

{
  id:'pedhd-nutr-10', bank:'house', module:'pediatrics', chapter:'nutrition-feed',
  stem:'Jamie is a 5-month-old male infant who was born with a weight of 3.5 kg (25th centile). He was initially breastfed and was growing well. His mother developed mastitis and so he was changed to formula milk feeds. He now weighs 5.0 kg (<0.4th centile). He has frequent loose stools and eczema. Which of the following is the most likely diagnosis of that patient?',
  options:['Vitamin D deficiency','Vitamin K deficiency','Kwashiorkor','Marasmus','Cow\'s milk protein allergy'],
  answer:4,
  explanation:'**Same five-option menu as `pedhd-nutr-7` — see that entry for the full comparative table. Jamie\'s discriminating token: a switch from breast to formula after his mother\'s mastitis, followed by weight crossing down from the 25th centile to below the 0.4th, with loose stools and eczema.**\n\nThis is the deck\'s own **non-IgE-mediated food allergy** picture. `allergy` splits food allergy by timing: **IgE-mediated reactions appear within minutes to two hours**, while **non-IgE-mediated reactions appear over hours and are mostly gastrointestinal — diarrhoea, vomiting, abdominal pain, and sometimes faltering growth** (alg-6). Jamie\'s presentation is exactly that pattern, introduced at the point the formula (containing cow\'s milk protein) replaced breast milk, with **eczema** as the accompanying atopic feature and **loose stools with falling weight** as the gut-and-growth component. This is filed under `nutrition-feed`, the infant-feeding chapter, because the trigger IS the feed switch itself; `allergy`, which carries the IgE/non-IgE mechanism in full, is named as the secondary chapter.\n\nThe other four options fail on the same grounds given at `pedhd-nutr-7`: no wrist sign for vitamin D deficiency, no bleeding for vitamin K deficiency, no oedema or hair change for kwashiorkor, and marasmus does not explain eczema or a clean temporal link to a feed change.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Identify non-IgE-mediated cow\'s milk protein allergy in a 5-month-old whose diarrhoea, eczema and falling weight began after a breast-to-formula switch, using the deck\'s IgE-versus-non-IgE timing rule and the shared menu built at pedhd-nutr-7.',
  source:'pediatric .pdf p.78 (Part I, ch.10 Q10)'
},

];
