/* ===========================================================================
   ENDPOINT part1 -- Model Final Exam 4 -- draft half C (n41..n60 minus reprints)
   Drafted rows: n41, n42, n43, n45, n47, n48, n49, n50, n51, n53, n56, n58.
   Reprints excluded (staged elsewhere, not drafted): n44, n46, n52, n54, n55, n57, n59, n60.
   Source: "Pediatrics endpoint part1.pdf" (Semester 8/Pedo/Questions/), staging record
   content/peds/qb-pages/endpoint-s13-mfe4.array.js.
   =========================================================================== */

{
  id: 'pedep-mf4-41',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'nutrition-pem',
  stem: 'Which of the following is a feature of protien energy malnutrition (Kwashiorkor)?',
  options: ['Edema', 'Hyperactivity', 'High plasma albumin', 'All of the above'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Note: Edema occurs in Kwashiorkor due to protein deficiency.\n\n---\n\nKwashiorkor is the oedematous form of protein-energy malnutrition, developing when a diet persistently deficient in protein continues through the weaning and post-weaning period. Growth failure, oedema without ascites, muscle wasting with a disturbed muscle-to-fat ratio, and psychic changes such as apathy are the features always present in this form, and serum albumin is specifically checked here because the low protein intake drops plasma oncotic pressure, letting fluid leak out of the vascular space and produce the oedema.\n\nAgainst the ladder: **hyperactivity** is the reverse of the real picture — the apathy and diminished activity that mark kwashiorkor’s psychic changes, not overactivity. **High plasma albumin** inverts the mechanism outright: the oedema exists precisely because albumin is *low*, and a high level would argue against this diagnosis rather than for it. **All of the above** cannot stand once one of its members, hyperactivity, is false.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify oedema, driven by hypoalbuminaemia from protein deficiency, as the defining feature of kwashiorkor, against an inverted psychic sign and an inverted albumin direction.',
  source: 'Pediatrics endpoint part1.pdf p.1726'
},

{
  id: 'pedep-mf4-42',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'nutrition-feed',
  stem: 'The parents of a 10 month-old child are stressed due to small size of the baby as compared to babies who are his age. The mother reports that she gives him little food. Which of the following is the cause for her small size?',
  options: ['Inadequate caloric intake', 'Genetic Disorder', 'Celiac disease', "Hirschsprung's disease"],
  answer: 0,
  explanation: 'A history of reduced feeding is the diagnosis here, not a prompt to search for organic disease behind it. Faltering growth is a description, not a diagnosis, and the red flags that should raise concern for an organic cause are dysmorphic features, failure to gain weight **despite adequate caloric intake**, recurrent vomiting, diarrhoea or dehydration, organomegaly or lymphadenopathy, signs of chronic respiratory disease, and developmental delay. None of these is present in this vignette — the mother reports the opposite of "adequate intake despite failure to thrive": she openly gives him little food. That is exactly the pattern the red-flag list exists to separate out, and it makes inadequate caloric intake the answer the history itself supplies before any investigation is opened. Management for this pattern is behavioural and dietary — advice to increase the quantity and quality of intake, with continued growth monitoring — rather than a work-up for organic disease.\n\nAgainst the ladder, each option is what the red flags exist to catch, and none of its own features is offered here *(the specific presenting pictures of each condition below are not taken from the course material)*: **Genetic disorder** would be expected to announce itself with dysmorphic features or other syndromic signs, absent in this baby. **Celiac disease** classically follows the introduction of gluten with diarrhoea, abdominal distension and failure to thrive despite feeding, not a history of reduced intake by report. **Hirschsprung’s disease** presents from early infancy with delayed passage of meconium and chronic constipation with abdominal distension, a different picture from an otherwise well infant who is simply underfed.\n\nWritten for this bank — Pediatrics endpoint part1.pdf prints no explanation here.',
  objective: 'Attribute small size in a 10-month-old to inadequate caloric intake from an openly reported reduced feeding history, using the absence of faltering-growth red flags to exclude genetic disease, coeliac disease and Hirschsprung’s disease.',
  source: 'Pediatrics endpoint part1.pdf p.1728'
},

{
  id: 'pedep-mf4-43',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'growth-puberty',
  stem: 'A 13 year-old girl complaining of delayed puberty. Her height is at the 5th centile and the weight is at the 25th centile, with mild delayed bone age. Her mother also had a history of delayed puberty but is now normal. What is the diagnosis?',
  options: ['Turner syndrome', 'Constitutional growth delay', 'Familial growth delay', 'Endocrinal short stature'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Note: Delayed puberty + short stature + history of delayed puberty and short stature of a parent who is currently normal → Constitutional delay in growth and puberty.\n\n---\n\n`13) Short stature.txt` teaches exactly this pattern through its worked case of a 13-year-old boy: delayed puberty (Tanner stage 1), a bone age delayed roughly two years, and a father who was himself a "late bloomer" — the deck’s label for constitutional delay of growth and puberty (CDGP). This girl reproduces the same triad with the sexes reversed: delayed puberty, a bone age only *mildly* delayed rather than markedly so, and a parent — here the mother — who followed the identical pattern and is now normal. A family history of self-resolving delayed puberty is the single strongest pointer to CDGP, because it identifies the trait as a variant of normal timing that runs in families rather than a disease.\n\nAgainst the other three, the same deck supplies the discriminator each time. **Turner syndrome** also causes short stature and delayed puberty, but the deck’s own mosaic-Turner case carries a bone age delayed by five years against this patient’s "mild" delay, and Turner is a chromosomal abnormality that a parent does not grow out of — the maternal history here argues against a karyotypic cause. **Familial short stature** is the deck’s case of an 11-year-old boy whose bone age *equals* his chronological age, with short parents setting a low mid-parental height; this patient’s bone age is delayed, not age-matched, which is the feature that rules familial short stature out. **Endocrinal short stature** (growth hormone deficiency) is illustrated by the deck’s case of growth deceleration with height below −3 SD and a low IGF-1 — a far more severe height deficit than the 5th centile this girl sits at, with no expected link to a parent’s own delayed-puberty history.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise constitutional delay of growth and puberty from a family history of self-limited delayed puberty and a mildly delayed bone age, against Turner syndrome, familial short stature and growth hormone deficiency.',
  source: 'Pediatrics endpoint part1.pdf p.1730'
},

{
  id: 'pedep-mf4-45',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'gi-diarrhoea',
  stem: "An infant presented with profuse watery diarrhea that has offensive odor and contains no blood. Which of the following organisms might be the cause for that infan'ts condition?",
  options: ['Campylobacter jejuni', 'Shigella', 'E-Coli', 'Salmonella'],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Note: Campylobacter jejuni infection, Shigella and some salmonellae species produce a dysenteric type of infection, with blood and pus in the stool, abdominal pain and tenesmus. Cholera and enterotoxigenic Escherichia coli infection are associated with profuse, rapidly dehydrating diarrhoea.\n\n---\n\nThe vignette sets up exactly the split the box draws: **no blood**, **profuse** and **watery**. `23).1) Acute diarrhea.txt` describes stool examination for **bloody** diarrhoea as looking for faecal leukocytes indicating bacterial invasion of the colonic mucosa — the dysenteric, invasive pattern the box assigns to Campylobacter jejuni, Shigella and some Salmonella species. Enterotoxigenic E. coli works by a different mechanism, a secretory toxin rather than mucosal invasion, so it produces large-volume watery stool without blood — the picture in front of this infant. The same deck lists enterotoxigenic E. coli, alongside rotavirus, Shigella, Campylobacter jejuni and Cryptosporidium, among "the most important causes of acute infective diarrhoea in developing countries," so it is a common, not an exotic, answer.\n\nAgainst the ladder: **Campylobacter jejuni** and **Shigella** are both named directly in the box as dysenteric organisms — blood, pus, abdominal pain and tenesmus — which this infant’s stool does not show. **Salmonella** sits on the invasive side of the box’s own split ("some salmonellae species" cause the dysenteric pattern), not with the profuse watery picture this vignette describes, making it the weaker of the two non-bloody-sounding options.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Assign profuse, non-bloody watery diarrhoea to a secretory organism such as enterotoxigenic E. coli, against the dysenteric, invasive pattern of Campylobacter, Shigella and Salmonella.',
  source: 'Pediatrics endpoint part1.pdf p.1734'
},

{
  id: 'pedep-mf4-47',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neurological',
  stem: 'For a child with an inserted ventriculoperitoneal shunt, which of the following would be the most accurate measure to be done before lumbar puncture (to exclue shunt occlusion)?',
  options: ['Signs of increased intracranial pressure', 'CT scan', 'Ultrasound', 'X-ray'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Note: CT is the most accurate method of detecting shunt occlusion\n\n---\n\n`18) febrile child and life threatening infections.txt` lists **signs of raised intracranial pressure** — coma, high blood pressure, low heart rate or papilloedema — among the direct contraindications to lumbar puncture, which is the deck’s own basis for checking the option offered here as a distractor. But a clinical sign check is not the same instrument as imaging: a shunt can be malfunctioning with rising ventricular pressure well before those signs become obvious on examination, especially once the cranial sutures have fused and the skull can no longer expand to buffer a pressure rise. **A CT scan images the ventricles directly**, so it can show the enlargement shunt occlusion produces even while bedside signs are still equivocal, which is why it is the *most accurate* measure — rather than a means of screening for concern — before an LP is attempted in a shunted child *(the direct comparison between imaging and clinical signs of raised ICP in this specific context is not taken from the course material; grepping `content\\peds\\lectures\\` for "ventriculoperitoneal" and "shunt" returns only a single unrelated mention of a VP shunt as a treatment for hydrocephalus in the tuberculosis deck, and nothing on assessing shunt function before a lumbar puncture)*.\n\nAgainst the ladder: **signs of increased intracranial pressure** is a genuine LP contraindication in general, but relying on clinical signs alone is exactly what the box’s wording — "most accurate" — argues against, since a shunt can fail silently before those signs appear. **Ultrasound** is limited by a closed fontanelle and cannot reliably assess ventricular size once the cranial sutures have fused, which most shunted children needing this check will already have done. **X-ray** ("shunt series") can show a break or disconnection in the shunt tubing itself, but it does not show ventricular size and so cannot confirm or exclude occlusion the way direct cross-sectional imaging can.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Prefer CT imaging of the ventricles over clinical signs, ultrasound or plain X-ray as the most accurate way to exclude shunt occlusion before a lumbar puncture in a child with a ventriculoperitoneal shunt.',
  source: 'Pediatrics endpoint part1.pdf p.1738'
},

{
  id: 'pedep-mf4-48',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'normal-dev',
  stem: 'During the evaluation of the growth (or development) of an infant who was born prematurely, which of the following ages has to be considered?',
  options: ['Chronological age', 'Gestational age', 'Corrected age', 'Parental age'],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> If a child has been born prematurely, this should be allowed for by calculating the corrected age from the expected date of delivery.\n\n---\n\nBoth cached development lectures give the same worked example: the anticipated developmental skills of a 9-month-old baby by chronological age, born three months early at 28 weeks’ gestation, "are more like those of a 6-month-old baby (corrected age)" — the three months of prematurity are subtracted from the chronological age to give the age the infant should actually be judged against. Both decks also give the endpoint of the correction: it is "not required after about 2 years," once the head start a term infant has had stops making a meaningful difference to the milestones being assessed.\n\nAgainst the ladder: **chronological age** is precisely what correction exists to override — judging a premature infant’s milestones against time-since-birth alone would flag a baby developing entirely normally for their true maturity as delayed. **Gestational age** is the age at birth, a fixed number that does not advance as the child grows, so it cannot be used to judge development at each later visit. **Parental age** plays no role in interpreting a child’s own developmental milestones at all.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Apply corrected, rather than chronological, gestational or parental age when assessing the development of a child born prematurely, until about 2 years of age.',
  source: 'Pediatrics endpoint part1.pdf p.1740'
},

{
  id: 'pedep-mf4-49',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'gi-diarrhoea',
  stem: 'Which of the following categories of children is considered at an increased risk of dehydration?',
  options: ['Infants who have bloody diarrhea', 'Infants who vomited twice in the previous 24 hours', 'Infants under the age of 6 months', 'Infants who passed three or more diarrhoeal stools in the previous 24 hours'],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> The following children are at increased risk of dehydration: • infants, particularly those under 6 months of age or those born with low birthweight • if they have passed five or more diarrhoeal stools in the previous 24hours • if they have vomited more than twice in the previous 24hours • if unable to tolerate supplementary fluids • if they have malnutrition or immune deficiency\n\n---\n\n`23).1) Acute diarrhea.txt` teaches the same "No / Some / Severe" framework for grading dehydration by history and examination that this stem sits inside, and singles out the two youngest and smallest patients for closer attention: **low birthweight** appears on the same deck’s own list of risk factors for *persistent* diarrhoea, alongside malnutrition, absence of breastfeeding and recent introduction of animal milk — the same vulnerable infants the box is naming here for acute dehydration risk. Age under 6 months compounds this because these infants have the smallest fluid reserve relative to their turnover and the least ability to compensate for ongoing losses.\n\nAgainst the ladder, each distractor sets its own threshold just under the one the box actually gives, which is why the box was checked at 600 dpi: **"vomited twice in the previous 24 hours"** undershoots the box’s own cut-off of *more than* twice. **"Three or more diarrhoeal stools"** undershoots the box’s cut-off of *five* or more. **"Infants who have bloody diarrhea"** is not on the box’s list at all — bloody stool signals an invasive organism, a different clinical problem from the volume-driven dehydration risk this question is testing *(the exact numeric thresholds printed in the box — under 6 months, five or more stools, more than twice vomiting — are standard paediatric dehydration-risk criteria; the cached diarrhoea deck does not itself print this specific numbered list, so the correspondence with the deck’s persistent-diarrhoea risk factors is offered as support and the precise cut-offs are not taken from the course material)*.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify infants under 6 months or of low birthweight as an increased-dehydration-risk category, against distractor thresholds that undershoot the box’s own stool and vomiting cut-offs.',
  source: 'Pediatrics endpoint part1.pdf p.1742'
},

{
  id: 'pedep-mf4-50',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Which of the following is true regarding breast milk jaundice?',
  options: ['Conjugated', 'May be prolonged >2 months', 'Managed by advice to switch to formula feeding', 'It causes pale gray stool'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Note: Breast milk jaundice is benign and the jaundice may last up to 12 weeks.\n\n---\n\n`8) COMMON PROBLEMS IN THE TERM NEWBORN.txt` separates two named entities under "Breastfeeding and jaundice," and this stem asks about the second: **breast-milk jaundice**, where "unconjugated hyperbilirubinemia lasting until 2–3 months of age is common in breastfed infants," and "moderate unconjugated hyperbilirubinemia for 6–12 weeks in a thriving breastfed infant without evidence of hemolysis, hypothyroidism, or other disease strongly suggests this diagnosis." The deck’s own duration — 6 to 12 weeks, or "2–3 months" — is the same figure the box gives as "up to 12 weeks," and both comfortably exceed the ">2 months" the option prints; the two numerals in this entry carry different units for that reason, and both were checked at 600 dpi against the printed page.\n\nAgainst the ladder: **conjugated** is wrong twice over — the deck states this is an *unconjugated* hyperbilirubinaemia, and a conjugated pattern would instead point toward a hepatobiliary cause such as biliary atresia. **Managed by advice to switch to formula feeding** describes the deck’s separate, earlier-onset entity, "breast-feeding–associated" (lack-of-breastmilk) jaundice, whose fix is to nurse *more* frequently and pump to build supply — not to abandon breastfeeding; breast-milk jaundice itself is benign and self-limited, and the deck’s message throughout is to keep the infant breastfeeding while monitoring. **It causes pale grey stool** describes cholestatic, conjugated jaundice — the biliary-obstruction picture the deck contrasts with this benign unconjugated one, not a feature of breast-milk jaundice.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Distinguish benign, unconjugated breast-milk jaundice — which can last 6–12 weeks and is managed by continued breastfeeding — from breast-feeding-associated jaundice and from the conjugated, pale-stool pattern of biliary obstruction.',
  source: 'Pediatrics endpoint part1.pdf p.1744'
},

{
  id: 'pedep-mf4-51',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'An infant was born to a diabetic mother. Which of the following is a potnetial complication that might occur in this infant?',
  options: ['Anemia', 'Polycythemia', 'Hyperglycemia', 'Low birth weight'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Neonatal problems for infant of diabetic mother: Polycythemia, hypoglycemia, RDS, hypertrophic cardiomyopathy.\n\n---\n\n`7) Intro to neonatology.txt` prints an eleven-item list of IDM complications that includes **polycythaemia** directly, alongside macrosomia, congenital malformation, RDS, hyperbilirubinaemia, hypoglycaemia, hypocalcaemia, renal vein thrombosis and cardiomyopathy — and separately illustrates hypertrophic cardiomyopathy as an IDM-specific finding, matching the box’s own four-item summary. The mechanism is chronic fetal hyperinsulinaemia from maternal hyperglycaemia crossing the placenta: it drives fetal overgrowth and a relatively hypoxic intrauterine state that stimulates excess erythropoiesis, producing the polycythaemia.\n\nAgainst the ladder: **anaemia** is the opposite direction from what the deck lists — these infants trend toward *excess* red cell mass, not deficiency. **Hyperglycaemia** inverts the deck’s own item: the same fetal hyperinsulinaemia that drove macrosomia in utero causes rebound *hypo*glycaemia once the maternal glucose supply is cut off at delivery, which is why hypoglycaemia, not hyperglycaemia, is on the list. **Low birth weight** is the wrong direction too — the deck’s list opens with macrosomia (large for gestational age) as the classic IDM body-size finding, from the same fetal hyperinsulinaemia acting as a growth stimulus; growth restriction and low birth weight belong to a different, insulin-deficient in-utero picture.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Attribute polycythaemia in the infant of a diabetic mother to fetal hyperinsulinaemia-driven overgrowth and relative hypoxia, against an anaemia, hyperglycaemia or low-birth-weight distractor that each inverts a real IDM finding.',
  source: 'Pediatrics endpoint part1.pdf p.1746'
},

{
  id: 'pedep-mf4-53',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-rd',
  stem: 'A term infant born by elective C-section had developed acute respiratory distress few hours later. What is the most likely diagnosis?',
  options: ['Pneumonia', 'Transient tachypnea of the newborn', 'Coarctation of the aorta', 'Respiratory distress syndrome', 'Anaemia'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> TTN is the most common cause of respiratory distress in a term infant. It is due to a delay in the resorption of lung liquid – an increased risk following caesarean section.\n\n---\n\n`9) Respiratory distress in newborn.txt` names transient tachypnoea of the newborn (TTN) as "the most common cause of neonatal RD," occurring "in term and late preterm neonates," with elective caesarean section heading its printed list of risk factors ahead of male sex and maternal diabetes. The mechanism is the one the box gives: during labour, a surge in adrenaline switches fetal lung fluid secretion off and resorption on, and an elective section performed before labour begins misses that surge, so the fluid clears more slowly and the baby is tachypnoeic within hours of birth.\n\nAgainst the ladder: **pneumonia** and **respiratory distress syndrome** both cause diffuse lung disease rather than the mild, self-limited picture described here, and RDS is a disease whose incidence rises as gestational age falls — the wrong direction for a term infant. **Coarctation of the aorta** presents with signs of circulatory compromise — weak or absent femoral pulses, a differential blood pressure between arms and legs, or collapse once the duct closes — not isolated respiratory distress. **Anaemia** does not present as acute respiratory distress in an otherwise well term infant.\n\n**This exact stem, with this exact ordering of Pneumonia / TTN / Coarctation / RDS, is printed a fourth time in the book.** `pedep-mf3-28` carries the fuller working of the same vignette, against a four-option menu (Respiratory distress syndrome / TTN / Pneumothorax / Meconium aspiration syndrome) that puts TTN second. `pedep-neo-32` and `pedep-neo-47` ask the general "which of the following is TRUE about TTN" question rather than this vignette, each against its own five-option menu built around a different single true statement — association with caesarean section in one, TTN’s rank as the leading cause of respiratory distress in the other. Each is answered correctly inside its own menu, and that is exactly why a shared stem pairs questions rather than folding them: transient tachypnoea of the newborn is genuinely associated with **both** term birth and caesarean delivery, so whichever fact a given menu offers as the true option is the one that stem is really testing, and this fifth printing, with its own five-option ladder, is simply a fifth way of asking the same underlying association.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Diagnose TTN in a term infant with early, mild respiratory distress after elective caesarean section, and recognise that the same TTN stem recurs across the book with different option menus, each correct on its own terms.',
  source: 'Pediatrics endpoint part1.pdf p.1750'
},

{
  id: 'pedep-mf4-56',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'infection',
  stem: 'What is the treatment of choice for a child presenting with white plaques on oral mucous membranes (oral thrush)?',
  options: ['Antifungal', 'Antiviral', 'Antibacterial', 'Steroids'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Thrush is treated with topical nystatin or an azole antifungal agent such as fluconazole.\n\n---\n\nOral thrush is candidiasis of the oral mucosa, and the box’s own choice of drugs identifies the organism: nystatin and the azole class, of which fluconazole is a member, are antifungal agents active against *Candida*, applied to clear the white plaques on the buccal mucosa and tongue that give the condition its name *(oral thrush itself is not covered in any cached paediatric deck — grepping `content\\peds\\lectures\\` for "thrush", "oral candidiasis" and "white plaque" returns no match for this condition, so the treatment given here is not taken from the course material)*.\n\nAgainst the ladder: **antiviral** treats a viral cause such as herpes simplex, which produces vesicles and ulcers rather than the confluent white plaques described here. **antibacterial** treats bacterial infection and has no activity against a fungal organism — using one would leave the candida untouched. **steroids** are immunosuppressive and would be expected to worsen a candidal infection rather than treat it, since they weaken the local defences that normally keep *Candida* in check.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Treat oral thrush (candidiasis) with a topical antifungal such as nystatin or fluconazole, against antiviral, antibacterial and steroid options that either target the wrong organism or would worsen the infection.',
  source: 'Pediatrics endpoint part1.pdf p.1756'
},

{
  id: 'pedep-mf4-58',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'infection-rash',
  stem: 'Katie is 6 years old. She missed a few days of school as she had a fever and was generally lethargic. Now she has a temperature of 38.3°C and has a marked erythematous rash on her cheeks. Which of the following is the organism that is most likely to be the causative agent in this clinical scenario?',
  options: ['Parvovirus infection (fifth disease)', 'Roseola infantum (sixth disease)', 'Measles virus', 'Mumps virus', 'Cytomegalovirus infection'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Parvovirus B19 causes erythema infectiosum or fifth disease, which is also known as \'slapped cheek syndrome\' because of its characteristic facial rash. This infection will temporarily reduce red cell production, which can result in serious anaemia in children with more rapid red cell turnover (hereditary spherocytosis or sickle cell disease) or the fetus.\n\n---\n\nThis is the same vignette `pedep-mf3-40` carries — Katie’s presentation matches it symptom for symptom, prodrome and rash alike — but here the option menu is different in two ways: the five options are **reordered**, and **two of the five are substituted**. `pedep-mf3-40`’s ladder reads Chickenpox virus (varicella-zoster) / Herpes simplex virus / Measles virus / Parvovirus infection (fifth disease) / Roseola infantum (sixth disease); this page keeps Measles, Parvovirus and Roseola but replaces chickenpox and herpes simplex with **Mumps virus** and **Cytomegalovirus infection**. A reordered menu pairs questions rather than folding them, and swapping out two of the distractors for genuinely different organisms goes further still — these are two separate questions built around the same clinical vignette, not one question printed twice.\n\n`infectious diseases causing maculopapular rash.txt` gives the mechanism the box states: erythema infectiosum runs a prodrome of "low-grade fever, headache, malaise, and mild upper respiratory symptoms," then a rash phase opening with the "Slapped-Cheek" stage of "bright red, erythematous flushing on the cheeks with circumoral pallor" — exactly Katie’s fever-and-lethargy history followed by facial erythema. Parvovirus B19 replicates in red-cell precursors, which is why the same deck ties it to aplastic crisis in children with high red-cell turnover and to fetal hydrops in an infected pregnancy.\n\n**Why the two new distractors fail.** **Mumps virus** causes painful parotid swelling, not a facial rash — the diagnosis rests on swollen glands at the jaw angle, not erythema of the cheeks themselves. **Cytomegalovirus** is overwhelmingly a congenital and immunocompromised-host pathogen; in an immunocompetent six-year-old it typically causes a mononucleosis-like illness or no illness at all, not an acute slapped-cheek exanthem.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Diagnose erythema infectiosum from prodrome plus slapped-cheek erythema against a five-option menu that reorders and partly re-substitutes the distractors of `pedep-mf3-40`, and exclude mumps and CMV on their own characteristic presentations.',
  source: 'Pediatrics endpoint part1.pdf p.1760'
},
