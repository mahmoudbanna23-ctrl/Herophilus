// house-ch19-liver.draft-A.js — DRAFT explanations for House ch.19 "Liver disorders", half A, n = 1..9.
// Drafted by Codex via tools/chapter-loop.js (draft), then rewritten by hand against the cached theory.
// The machine draft's citations all checked out — a first for this stream — but it ran at 1977 words
// for nine vignettes, and three explanations reasoned past what the stem gives (liv-5 asserted hepatic
// signs the vignette does not describe; liv-3 fudged the rhesus row instead of naming the printed
// discriminator). Validate with val-pd.js; medical read before splice.
//
// Q6–Q9 share one identical option menu. The comparative table lives ONCE, at pedhd-liv-6, the
// lowest-numbered member; liv-7, liv-8 and liv-9 name that anchor and give only their own
// discriminating token. They are exempt from the 200-word floor for that reason.
var PEDHD_LIV_DRAFT_A = [
  {
    "id": "pedhd-liv-1",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "liver",
    "stem": "Manuel, a 3-day-old infant is born to healthy parents. He presents with oozing from the umbilical stump and sleepiness. On examination he is pale and grunting. He responds only to painful stimuli. He has marked hepatomegaly. Oxygen is delivered and senior help summoned as he is very unwell. The nurse practitioner inserts an intravenous line and asks what blood tests you would like first. From the following list of blood tests pick the one you would undertake first.",
    "options": [
      "Ammonia",
      "Blood culture",
      "Blood gas",
      "Blood glucose",
      "Coagulation studies"
    ],
    "answer": 3,
    "explanation": "**Blood glucose — because it is the only one of the five whose result changes what you do in the next sixty seconds, and because a failing liver is exactly the organ that stops maintaining it.**\n\nThe neonatal algorithm the course teaches puts this first by name. Step 1 is stabilise: airway, breathing, circulation, temperature, **bedside glucose**, and treat hypoglycaemia immediately (`neonatal-seiz` §`nns-7`, L10 pp.28–32). Step 2 is the reversible cause — hypoglycaemia, hypocalcaemia, hyponatraemia, hypomagnesaemia, infection, toxin — **before any anticonvulsant** (§`nns-8`). The order is not a matter of taste; it is the printed sequence.\n\nThe threshold at Manuel's age is worth having. The deck gives no consensus figure but sets the working values by age: below 30 mg/dL in the first 24 hours, below **40 mg/dL at 1–3 days**, and below 45 mg/dL after 3 days (§`nns-9`). He is 3 days old, so 40 mg/dL is the number the bedside strip is being read against.\n\nThe reason a glucose is taken at step 1 of *every* neonatal algorithm is stated outright: the symptoms of neonatal hypoglycaemia are **non-specific and mimic many illnesses** — not looking well, lethargic, weak cry, poor feeding, temperature instability, shallow breathing or apnoea, hypotonia (§`nns-9`). That list is Manuel's presentation almost item for item.\n\nAnd this is not generic advice applied to a liver case; the liver findings *predict* the hypoglycaemia. The liver stores excess glucose as glycogen and releases it when the blood sugar falls (`liver` §`liv-2`), and it synthesises prothrombin and the other clotting factors. Umbilical stump oozing in a 3-day-old with marked hepatomegaly says the synthetic function has already failed. An organ that cannot make a clotting factor cannot mobilise glucose either — one of the printed mechanisms of neonatal hypoglycaemia is reduced glycogenolysis and gluconeogenesis in inborn errors of metabolism (§`nns-9`), which is precisely the differential a 3-day-old with liver failure sits in.\n\n**Why the other four are not first**\n\n| Option | Why it does not come first |\n|---|---|\n| Ammonia | Hyperammonaemia is real and important here — a urea-cycle defect or acute liver failure will raise it, and it explains depressed consciousness. But it is a laboratory send-away, not a bedside strip, and correcting it is not a thing you do in the next minute. |\n| Blood culture | Sepsis is a genuine competing diagnosis in a pale, grunting neonate and the culture should be drawn on the same line. It simply cannot answer anything today: the result is 24–48 hours away, and empirical antibiotics are started without waiting for it. |\n| Blood gas | Gives acidosis, ventilation and perfusion, and belongs in the same draw. It grades how sick he is; it does not name a treatable cause you can reverse at the cot side. |\n| Coagulation studies | Highly relevant — they will quantify the coagulopathy and guide vitamin K and fresh frozen plasma. But the oozing stump has already told you there is one. The test confirms what you can see; the glucose tells you something you cannot. |\n\nIn practice all five are sent off the same cannula. The question asks which you would undertake **first**, and the discriminator is which result you can act on immediately.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Prioritise immediate blood glucose measurement in a critically unwell neonate with impaired consciousness.",
    "source": "pediatric .pdf p.137 (Part I, ch.19 Q1)"
  },
  {
    "id": "pedhd-liv-2",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "liver",
    "stem": "Reece, a 4-week-old male infant living in the UK, is taken to his family doctor because he is jaundiced. He was born at term and is breastfed. His mother reports that he has always looked yellow and has started to develop bruises. His stools are now pale in colour. On examination he has hepatomegaly. Which of the following investigations would you undertake first?",
    "options": [
      "Faecal elastase",
      "Serum conjugated and unconjugated bilirubin",
      "Sweat test",
      "Ultrasound scan of the liver",
      "Urinalysis"
    ],
    "answer": 1,
    "explanation": "**Fractionate the bilirubin. Every branch of the pathway below this point forks on whether the jaundice is conjugated or unconjugated, and nothing else in the list settles that.**\n\nThe rule is printed without qualification: **any infant jaundiced after 2 weeks of age must be evaluated for cholestasis with total and direct bilirubin**, and **cholestatic jaundice is always pathologic** (`liver` §`liv-1`, L43 pp.31–33, 37, 62–63). Reece is 4 weeks. He is already two weeks past the trigger. The numerical definition of cholestasis follows the same section: with a total bilirubin of 5 mg/dL or less, a direct fraction above 1 mg/dL; with a total above 5 mg/dL, a direct fraction above 20 % of the total.\n\nEvery positive finding in the stem is a cholestasis finding. **Pale stools are acholic stools — pathognomonic, and a critical marker of severe bile-flow obstruction** (§`liv-6`, L43 pp.33–34, 45–47). The bruising is fat-soluble vitamin deficiency: bile is needed to absorb A, D, E and K, and **vitamin K deficiency produces easy bruising or bleeding**, which is the same section's own listed consequence. Hepatomegaly is common in cholestasis. That the mother reports he has *always* looked yellow does not soften the picture — persistence is what makes it pathological rather than the physiological jaundice of the first fortnight.\n\nWhat the answer buys is the fork. An unconjugated result sends him down the neonatal jaundice pathway (`neonatal`); a conjugated result starts the biliary atresia clock, where **Kasai portoenterostomy before 6 weeks of age is critical for survival** (§`liv-5`). He is 4 weeks old. There are two weeks left, and the test that decides whether that clock is running takes a day.\n\n**Why the other four are not first**\n\n| Option | Why it does not come first |\n|---|---|\n| Faecal elastase | Measures pancreatic exocrine function. It is a test for pancreatic insufficiency, not for bile-flow obstruction — the wrong organ for pale stools in a jaundiced infant with a big liver. |\n| Sweat test | Cystic fibrosis does sit on the neonatal cholestasis differential, and pale stools with failure to thrive can raise it. But it is a branch you take *after* the jaundice has been shown to be conjugated, not before. |\n| Ultrasound scan of the liver | The right *second* test, and the one that looks for a small or absent gall bladder and the triangular cord sign of biliary atresia. It still does not establish that the jaundice is conjugated, and — importantly — a normal ultrasound never excludes biliary atresia, so it cannot be the study the pathway hinges on. |\n| Urinalysis | Dark urine is one of the cardinal signs of cholestasis (§`liv-6`), and it is dark because conjugated bilirubin is water-soluble and spills into urine. That makes urinalysis a useful bedside pointer in the same direction as the answer — but it is a qualitative hint, not the measurement the definition is written in. |\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise prolonged jaundice with pale stools as an indication for urgent bilirubin fractionation.",
    "source": "pediatric .pdf p.137 (Part I, ch.19 Q2)"
  },
  {
    "id": "pedhd-liv-3",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "liver",
    "image": "q-pd-hd-137",
    "imgAlt": "Clinical photograph of an infant's face, taken from the front.",
    "stem": "Javid is a 5-month-old Asian baby born at term in rural Pakistan. He presents with jaundice. His mother’s blood group is AB rhesus positive. His stool and urine are a normal colour. He is breastfed, although he has not been feeding well. His mother is concerned that this could be due to his constipation. When you examine the infant (in the opposite figure) you note that he has dry skin and an umbilical hernia. Which of the following is the most likely diagnosis?",
    "options": [
      "Biliary atresia",
      "Congenital infection",
      "Galactosaemia",
      "Rhesus haemolytic disease of the newborn",
      "Hypothyroidism"
    ],
    "answer": 4,
    "explanation": "**The stool and urine are a normal colour, and that single clause takes the entire liver chapter off the table before any positive feature is weighed.**\n\nCholestasis announces itself two ways and the course names both: **acholic — pale, clay or white — stools, pathognomonic and a critical marker of severe bile-flow obstruction, and dark urine** (`liver` §`liv-6`, L43 pp.33–34, 45–47). Javid has neither. A jaundiced infant whose stool and urine are normal in colour has unconjugated hyperbilirubinaemia, and the differential moves out of the biliary tree.\n\nWhat remains fits congenital hypothyroidism closely. The early clinical picture printed in the endocrine chapter is feeding difficulty, constipation, hypotonia, **prolonged physiologic jaundice**, umbilical hernia, large tongue, and a sluggish, sleepy infant (`endo-thyroid` §`endo-24`, L52 pp.17, 20, 25–26). Javid has four of those in the stem alone: poor feeding, constipation, jaundice that has outlasted the physiological window by months, and an umbilical hernia. The deck's own worked plate is a six-month-old with an umbilical hernia, a TSH of 74 mU/mL and a T4 of 1.6 µg/dL — an infant of almost exactly Javid's age.\n\nThe geography is doing real work too, not colour. The same section's stated point is that **affected newborns often appear normal at birth**, which is why neonatal screening exists and why the diagnosis is otherwise made late and clinically. Javid was born in a rural setting where that screen is not routine, so a five-month presentation is what an unscreened case looks like. Iodine deficiency is also a printed cause of endemic goitrous hypothyroidism (§`endo-23`, L52 pp.13–14, 21–24, 31–33).\n\nOne stem finding is not the deck's. It prints **dry and brittle hair**, and mottling of the skin with cold extremities — dry skin as such is not printed *(not taken from the course material: coarse, dry skin is a classic feature of untreated congenital hypothyroidism)*.\n\n**Why the other four fail**\n\n| Option | Why it is excluded |\n|---|---|\n| Biliary atresia | Requires acholic stools and dark urine; both are explicitly normal here. It is also a disease of the first weeks with a **6-week surgical window** (§`liv-5`) — at 5 months, an untreated biliary atresia would not present as a well-coloured stool and a feeding problem. |\n| Congenital infection | Produces jaundice with hepatomegaly, and splenomegaly is the sign that flags sepsis or congenital infection in a cholestatic infant (§`liv-6`). Nothing hepatic or splenic is described, and constipation with an umbilical hernia is not its pattern. |\n| Galactosaemia | The token is **cataracts**, alongside jaundice, an enlarged liver, kidney and brain damage (§`liv-8`, L43 pp.36, 56, 61, 67–68). No eye sign is described. It is also milk-triggered, so a breastfed infant would have collapsed in the first days of life, not drifted to five months. |\n| Rhesus haemolytic disease of the newborn | ⚠️ The discriminator is printed in the stem: the mother is **rhesus positive**. RhD disease requires a rhesus-negative mother sensitised against a D-positive fetus, so a rhesus-positive mother cannot make anti-D at all *(the rhesus mechanism itself belongs to the neonatal jaundice material, not this chapter)*. Independently, haemolytic disease of the newborn is a disease of the first days of life, not of month five. |\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Identify the clinical pattern of congenital hypothyroidism presenting with prolonged jaundice.",
    "source": "pediatric .pdf p.137 (Part I, ch.19 Q3; the question straddles the page break from p.137 to p.138)"
  },
  {
    "id": "pedhd-liv-4",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "liver-hep",
    "stem": "Luna, a 32-year-old Cantonese woman has just given birth to her third child. She arrived in the UK 3 months ago to live with her extended family following the death of her husband. Antenatal screening shows that she is hepatitis B surface antigen (HBsAg) positive and hepatitis B e antigen (HBeAg) negative. The newborn infant looks well and has fed. The postnatal team are keen to send the mother and baby home. Which of the following is the best advice to give concerning immunization of the family?",
    "options": [
      "Hepatitis B vaccination for the baby",
      "Hepatitis B vaccination for the baby and all other children",
      "Hepatitis B vaccination for the baby and mother",
      "Hepatitis B vaccination for the baby with hepatitis B immunoglobulin",
      "No treatment required"
    ],
    "answer": 1,
    "explanation": "**The printed key is B — vaccinate the newborn and the other children — and the reasoning is that the exposure in this household is not confined to the delivery.**\n\nHBsAg positive means current infection: on the serology grid, HBsAg positive with anti-HBs negative is an infected mother, not an immune one (`liver-hep` §`liv-12`, L42 pp.14–18, 22). She is a carrier living with her extended family, and the course lists **child-to-child (household) transmission** among hepatitis B's routes alongside perinatal, sexual and blood-borne spread. The siblings arrived in the UK three months ago; they have been exposed for as long as they have lived with her and have not been through the UK schedule.\n\nWhy the newborn is the urgent one is a matter of age, and the numbers are stark: roughly **90 % of infants infected perinatally become chronic carriers**, against about 30 % of children infected between 1 and 5 years and under 5 % of infected adults *(supplied and tagged in §`liv-12`)*. Perinatal transmission is the main paediatric route, which is why universal newborn immunisation is the deck's stated principal control measure.\n\n**⚠️ A divergence, recorded and not corrected.** The course's own exposed-newborn protocol prints **HBIG *and* HBV vaccine — both, at birth**, then completion of the vaccine series, post-vaccination testing at 9–15 months, and no boosters unless anti-HBs falls below 10 mIU/mL (§`liv-13`, L42 pp.19–23). By that table the newborn here should receive immunoglobulin as well as vaccine, which is option D. **The bank keys B, and the key stands as printed.** The likely reason for the difference is the HBeAg status: HBeAg positivity marks high viral replication and high infectivity (§`liv-12`), and some national policies reserve immunoglobulin for infants of e-antigen-positive or high-viral-load mothers, giving vaccine alone when the mother is e-antigen negative. The course draws no such distinction — it gives both to the baby of any HBsAg-positive mother. Learn the divergence; do not learn one at the expense of the other.\n\n**Why the other options fail**\n\n| Option | Why it is not the best advice |\n|---|---|\n| Hepatitis B vaccination for the baby | Protects the index infant and misses the household. The siblings share a home with a carrier and the course lists household child-to-child spread as a route; the key names them for that reason. |\n| Hepatitis B vaccination for the baby and mother | Vaccination prevents infection; it cannot treat an established one. Luna is HBsAg positive *now* — she already has the infection the vaccine exists to prevent, and immunising her adds nothing. |\n| Hepatitis B vaccination for the baby with hepatitis B immunoglobulin | This is what the course's own exposed-newborn table teaches, and it is recorded above as a divergence from the printed key rather than as an error to be argued. It is not, however, the answer this bank marks correct, and it still leaves the siblings unvaccinated. |\n| No treatment required | Unsafe. A well-looking, well-fed newborn tells you nothing: perinatal hepatitis B is silent at birth and declares itself as chronic carriage years later. Doing nothing is how the 90 % figure happens. |\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise that an infant born to an HBsAg-positive mother requires hepatitis B prophylaxis.",
    "source": "pediatric .pdf p.138 (Part I, ch.19 Q4)"
  },
  {
    "id": "pedhd-liv-5",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "liver",
    "image": "q-pd-hd-138",
    "imgAlt": "Clinical close-up photograph of an eye.",
    "stem": "Summer, a 12-year-old girl, is seen in the Emergency Department. Her parents report that her school performance has been deteriorating and recently she has become confused and unsteady on her feet. Examination findings of her eyes are shown in the opposite figure. Select the most likely diagnosis.",
    "options": [
      "Glaucoma",
      "Hyperthyroidism",
      "Illicit drug use",
      "Intracranial tumour",
      "Wilson disease"
    ],
    "answer": 4,
    "explanation": "**A school-age child with falling academic performance, confusion and ataxia, plus a photographed corneal sign — that combination is Wilson disease and effectively nothing else.**\n\nNote what the vignette does *not* say: there are no hepatic signs at all. No jaundice, no hepatomegaly, no bruising. The diagnosis here is made entirely on the neuropsychiatric triad plus the eye, and the liver involvement is inferred from what the disease is rather than from anything described. That is a real presentation — Wilson disease presenting neurologically in the second decade, with the hepatic disease subclinical or yet to declare.\n\nThe course places the disease by name: **Wilson disease** appears in the list of basal ganglia causes of movement disorder, alongside severe hypoxia-ischaemia, carbon monoxide poisoning, post-bypass chorea, rheumatic fever (post-streptococcal chorea), mitochondrial disease and Huntington disease (`neuro-nm` §`neuro-16`). The link back to this chapter is metabolic: the liver **stores copper** and synthesises **ceruloplasmin**, the protein that governs copper bioavailability (§`liv-2`). Wilson disease is the failure of that handling — copper accumulates in liver, brain and cornea.\n\n**⚠️ The eye sign itself is not printed anywhere in the course material.** A sweep of the whole theory corpus for *Kayser* or *Fleischer* returns nothing. *(Not taken from the course material: the Kayser–Fleischer ring is a brown-green band of copper deposited in Descemet's membrane at the corneal limbus, best seen on slit-lamp examination, and is present in almost every patient whose Wilson disease presents neurologically. Also not in the course material: the confirmatory tests — a low serum caeruloplasmin, a raised 24-hour urinary copper — and the treatment with a chelator such as penicillamine, or with zinc.)*\n\n**Why the other four fail**\n\n| Option | Why it is excluded |\n|---|---|\n| Glaucoma | A disease of raised intraocular pressure. What the photograph shows is a pigmented ring at the limbus of an otherwise clear eye, not the hazy, oedematous cornea of acute glaucoma — and glaucoma does not cause deteriorating school performance, confusion or ataxia. |\n| Hyperthyroidism | Genuinely does cause poor concentration, declining schoolwork, restlessness and tremor, so the cognitive half is not absurd. But its eye signs are exophthalmos and lid retraction — a different picture entirely — and it does not produce ataxia or a corneal ring. |\n| Illicit drug use | The differential a 12-year-old with behavioural change and unsteadiness is meant to raise and then be excluded from. It is episodic rather than progressive, and no drug leaves a fixed pigmented ring at the limbus. Attributing this picture to drug use is how a treatable inherited disease gets missed for years. |\n| Intracranial tumour | A posterior fossa tumour gives ataxia and can give personality change, so it is the strongest competitor. What is missing is its own syndrome — early morning headache, vomiting, papilloedema, a head tilt or cranial nerve palsy — and, decisively, no intracranial tumour produces the eye finding in the figure. |\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise Wilson disease as a cause of progressive neurological and hepatic disease in an older child.",
    "source": "pediatric .pdf p.138 (Part I, ch.19 Q5)"
  },
  {
    "id": "pedhd-liv-6",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "liver",
    "stem": "Jason, a 3-week-old boy, is still jaundiced. His mother is reassured that this is likely to be 'breast milk' jaundice as she is fully breastfeeding him. He presents 3 weeks later with poor feeding, vomiting and bruising on his forehead and limbs. He has pale stools. On examination the liver is palpable 4 cm below the costal margin. Which of the following is the most likely diagnosis of that patient?",
    "options": [
      "Hepatitis A",
      "Hepatitis B",
      "Biliary atresia",
      "Galactosemia",
      "Primary sclerosing cholangitis"
    ],
    "answer": 2,
    "explanation": "**The words 'breast milk jaundice' are the trap, and the pale stools are what springs it.**\n\nJason was three weeks old when he was reassured — already **past the 2-week rule**, which states that any infant still jaundiced after 2 weeks of age must be evaluated for cholestasis with total and direct bilirubin, because **cholestatic jaundice is always pathologic** (`liver` §`liv-1`, L43 pp.31–33, 37, 62–63). Breast-milk jaundice is an **unconjugated** hyperbilirubinaemia and it never produces a pale stool. Its printed diagnostic picture is a moderate unconjugated hyperbilirubinaemia lasting 6–12 weeks **in a thriving breastfed infant, with no haemolysis, hypothyroidism or other disease** (`neonatal` §`nnj-8`) — and Jason is not thriving. He is vomiting, feeding poorly and bruising. The label was wrong the day it was applied. Stool colour is precisely the discriminator, which is why a stool colour card exists at all: nine printed panels, of which 1–6 are abnormal and 7–9 normal (§`liv-6`).\n\nEverything else lines up with obstructed bile flow. **Acholic stools are pathognomonic — a critical marker of severe bile flow obstruction**; hepatomegaly is common, and here the liver is 4 cm below the costal margin; the fat-soluble vitamins A, D, E and K are malabsorbed, and **vitamin K deficiency causes easy bruising or bleeding** — the forehead and limb bruising in a six-week-old who is not yet mobile; poor feeding and vomiting go with the failure to thrive the section lists (§`liv-6`, L43 pp.33–34, 45–47).\n\n**⚠️ The clock has run out.** **Kasai portoenterostomy performed before 6 weeks of age is critical for survival** (§`liv-5`, L43 pp.36–38, 40, 55, 57, 63). Jason is exactly 6 weeks old at this presentation. The three weeks of reassurance are not incidental detail — they are the point of the question.\n\n**The shared option menu — Q6 to Q9**\n\nQuestions 6, 7, 8 and 9 are offered the same five diagnoses. Rather than repeat the comparison four times, here is the discriminating token for each; the sibling questions name this entry and give only their own.\n\n| Option | The token that identifies it |\n|---|---|\n| Hepatitis A | Faeco-oral spread through contaminated food and water; incubation 15–45 days, average 30; and it **never becomes chronic** (`liver-hep` §`liv-11`, L42 pp.7–12). Look for a travel or exposure history in an older child and an illness that resolves. |\n| Hepatitis B | Perinatal transmission is the main paediatric route, and about 90 % of infants infected that way become chronic carriers (§`liv-12`). Its late picture is chronic liver disease — portal hypertension, oesophageal varices, ascites (§`liv-15`, L42 pp.41–43). Look for a chronic, portal-hypertensive picture in an older child from a high-prevalence country. |\n| Biliary atresia | **Acholic stools plus hepatomegaly in the first weeks of life**, with a surgical window that closes at 6 weeks (§`liv-5`, §`liv-6`). Stool colour is the single most useful sign. |\n| Galactosemia | Milk exposure, then jaundice, an enlarged liver, **cataracts**, kidney and brain damage; screened by reducing substances in the urine (§`liv-8`, L43 pp.36, 56, 61, 67–68). **The cataracts are the token** — nothing else on this menu causes them. |\n| Primary sclerosing cholangitis | *(Not taken from the course material — a sweep of the whole theory corpus returns no mention of it.)* A chronic fibrosing, stricturing disease of the bile ducts, seen in older children and adults and strongly associated with inflammatory bowel disease. It is this menu's filler option and fits none of the four vignettes. |\n\nApplying that to Jason: acholic stools, hepatomegaly and vitamin K bleeding at six weeks is biliary atresia. Hepatitis A and B belong to older children and neither presents this way in the neonatal period; galactosemia would show cataracts and would have made him ill from his first milk feeds, not at three weeks; primary sclerosing cholangitis is not a neonatal disease.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Distinguish biliary atresia from breast-milk jaundice in an infant with persistent jaundice and pale stools.",
    "source": "pediatric .pdf p.139 (Part I, ch.19 Q6)"
  },
  {
    "id": "pedhd-liv-7",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "liver-hep",
    "stem": "Raj, a previously well 14-year-old Asian boy, is noted to be jaundiced. He has recently returned to the UK from India where he was visiting relatives in a rural village. He had a 10-day diarrhoea and vomiting illness whilst in India. Which of the following is the most likely diagnosis of that patient?",
    "options": [
      "Hepatitis A",
      "Hepatitis B",
      "Biliary atresia",
      "Galactosemia",
      "Primary sclerosing cholangitis"
    ],
    "answer": 0,
    "explanation": "**The token is faeco-oral exposure with the right incubation interval.** Hepatitis A is transmitted by **contaminated food and water**, with an incubation of **15–45 days, average 30** (`liver-hep` §`liv-11`, L42 pp.7–12). A rural village stay, a ten-day diarrhoeal and vomiting illness there, and jaundice appearing after the return home fit that window exactly — the gastrointestinal illness marks the contaminated-water exposure, and the jaundice arrives weeks later when the hepatitis declares. Anicteric and mild illness is in fact commoner in children, so a frank jaundice in a 14-year-old is the visible tail of a much larger local outbreak. Crucially, **hepatitis A never becomes chronic**, which is what makes it the acute answer here in a previously well boy.\n\nHepatitis B is the only real competitor and it fails on route: perinatal transmission is its main paediatric route, and a newly acquired infection would be clinically silent rather than announcing itself as a ten-day gastroenteritis. Raj's age excludes both infantile diagnoses outright — biliary atresia presents in the first weeks with acholic stools, and galactosemia is milk-triggered in early infancy with cataracts. Primary sclerosing cholangitis is not taught in the course material at all.\n\nThe full comparison of this shared five-option menu is at `pedhd-liv-6`.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise acute hepatitis A from its faeco-oral travel-associated presentation.",
    "source": "pediatric .pdf p.139 (Part I, ch.19 Q7)"
  },
  {
    "id": "pedhd-liv-8",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "liver",
    "stem": "A 5-week-old southern Asian male infant born in the UK presents to the Paediatric Assessment Unit with vomiting. He has not gained weight since birth. On examination you find an infant who is jaundiced, lethargic and hypotonic. Cataracts are present. Which of the following is the most likely diagnosis of that patient?",
    "options": [
      "Hepatitis A",
      "Hepatitis B",
      "Biliary atresia",
      "Galactosemia",
      "Primary sclerosing cholangitis"
    ],
    "answer": 3,
    "explanation": "**The cataracts are the token, and only one option on this menu causes them.** The course's galactosemia section labels four organs by name: **brain damage, eye cataracts, liver — jaundice and an enlarged liver — and kidney damage**, produced because unmetabolised milk sugars build up in the tissues (`liver` §`liv-8`, L43 pp.36, 56, 61, 67–68). The screening test is **reducing substances in the urine**, and breastfeeding is an absolute contraindication once the diagnosis is made — the disease is driven by the galactose in milk, so removing milk sugar is the treatment.\n\nEvery other element of the vignette is the same section's list: vomiting, no weight gain since birth, jaundice, lethargy and hypotonia in a five-week-old who has been milk-fed since day one. The timing is characteristic — the infant is well until milk feeding starts, then deteriorates over the following weeks. *(Supplied and tagged in §`liv-8`: the classic examination vignette pairs neonatal jaundice and cataracts with **E. coli sepsis**, to which these infants are unusually prone.)*\n\nBiliary atresia is the nearest rival on age and jaundice, but its signature is acholic stools with hepatomegaly, and it does not cause cataracts, hypotonia or vomiting. Neither hepatitis A nor hepatitis B produces a cataract or a metabolic collapse at five weeks. Primary sclerosing cholangitis is not taught in the course material.\n\nThe full comparison of this shared five-option menu is at `pedhd-liv-6`.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise galactosemia from neonatal jaundice, failure to thrive and cataracts.",
    "source": "pediatric .pdf p.139 (Part I, ch.19 Q8)"
  },
  {
    "id": "pedhd-liv-9",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "liver-hep",
    "stem": "Lee is a 12-year-old Chinese boy who moved with his parents from China 2 years ago. He presents with episodes of vomiting which is blood-stained. On examination he is jaundiced, malnourished and has splenomegaly. Which of the following is the most likely diagnosis of that patient?",
    "options": [
      "Hepatitis A",
      "Hepatitis B",
      "Biliary atresia",
      "Galactosemia",
      "Primary sclerosing cholangitis"
    ],
    "answer": 1,
    "explanation": "**Haematemesis plus splenomegaly plus malnutrition in a jaundiced child is portal hypertension, and portal hypertension means the liver disease is long-standing.** The course's chronic liver disease section lists exactly this progression: portal hypertension producing **oesophageal varices**, ascites and spontaneous bacterial peritonitis, with hepatic encephalopathy precipitated by constipation, gastrointestinal bleeding, infection or renal failure (`liver-hep` §`liv-15`, L42 pp.41–43). Blood-stained vomiting in a child with a big spleen is variceal bleeding until proved otherwise.\n\nOf the five options, only hepatitis B reaches that state in a child. **Perinatal transmission is hepatitis B's main paediatric route**, and it is the route the deck opens on — an infant infected at birth carries the virus through childhood, and the deck's own cascade runs asymptomatic carrier → chronic hepatitis B in 30–50 % → cirrhosis in about 10 % → hepatocellular carcinoma (§`liv-13`, L42 pp.19–23). Twelve years of chronic infection acquired at birth is enough to reach cirrhosis and varices. The epidemiology in the stem is doing the same work the deck's world map does, which marks prevalence bands of over 8 %, 5–7 %, 2–4 % and under 2 % against a global total of some 240 million chronic carriers.\n\nHepatitis A is excluded by biology rather than by probability: it **never becomes chronic** (§`liv-11`), so it cannot produce varices. Biliary atresia and galactosemia are diseases of the first weeks of life. Primary sclerosing cholangitis is not taught in the course material.\n\nThe full comparison of this shared five-option menu is at `pedhd-liv-6`.\n\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise chronic hepatitis B as a cause of portal-hypertensive upper gastrointestinal bleeding in a child.",
    "source": "pediatric .pdf p.139 (Part I, ch.19 Q9; the question straddles the page break from p.139 to p.140)"
  }
];
