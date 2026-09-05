/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part2.pdf - MODEL FINAL EXAM 2
   Verbatim staging record. PDF pages 1432-1594; PDF page = printed page, offset zero.
   Merged from endpoint-p2-s13-mfe2.part-A.js + endpoint-p2-s13-mfe2.part-B.js + endpoint-p2-s13-mfe2.part-C.js + endpoint-p2-s13-mfe2.part-D.js by merge-parts-ep2.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP2_S13_STAGED = [

/* Peds endpoint PART 2, section 13 "Model Final Exam 2", quarter A.
   n1..n20, answered pages 1434,1436,...,1472 (p = 1432 + 2n), all in the EVEN parity run
   (n1-n49 even per the reprint map; the flip at p.1531 is outside this quarter).
   OCR NOT consulted for transcription (search index only, per brief §4).
   Twin (unanswered) page read wherever the answered page's text was not certain on first read.
   Header extended after every entry; see note fields for per-entry verification method.

   Page-by-page walk (printed number pr vs section-global n) -- pr equals n at every entry, no
   duplicated or skipped printed numbers found in this quarter:
   n1  p1434 pr1   n2  p1436 pr2   n3  p1438 pr3   n4  p1440 pr4   n5  p1442 pr5
   n6  p1444 pr6   n7  p1446 pr7   n8  p1448 pr8   n9  p1450 pr9   n10 p1452 pr10
   n11 p1454 pr11  n12 p1456 pr12  n13 p1458 pr13  n14 p1460 pr14  n15 p1462 pr15
   n16 p1464 pr16  n17 p1466 pr17  n18 p1468 pr18  n19 p1470 pr19  n20 p1472 pr20

   Boundary proof: p.1473 (one past the range) prints Q21 unanswered, opening question of the
   next quarter -- "Jack is a 3-year-old boy whose father has a genetic disorder..." No gap, no
   overlap, no repeated printed number crossing the boundary.

   All 20 answered pages carried a printed explanation box; no boxless pages, no overflow boxes,
   no alternation breaks and no figures in this quarter -- each stated as measured, every page
   opened whole.
*/

{ n:1, pr:1, p:1434, key:4,
  stem:'Developmental milestones vary between children; however, there are normal ranges for each domain. Which of the following denotes developmental delay?',
  opts:['Not following moving objects by turning head at 4 weeks','Not sitting without support at 5 months','Not walking at 12 months','Can’t crawl on hands and knees at 6 months','Poor head control at 6 months'],
  expl:'Red flag age for head control is 4 months.',
  note:'Twin at p.1433 (unanswered) matches verbatim. Highlighted option is E "Poor head control at 6 months" = index 4.' },

{ n:2, pr:2, p:1436, key:2,
  stem:'Which of the following is the most common cause of haematuria in children?',
  opts:['Trauma','IgA nephropathy','Urinary tract infection','Postinfectious glomerulonephritis','Tumours'],
  expl:'UTI is the most common cause of haematuria in children.',
  note:'Twin at p.1435 (unanswered) matches verbatim. Highlighted option is C "Urinary tract infection" = index 2.' },

{ n:3, pr:3, p:1438, key:0,
  stem:'In which neurological disorders does “muscle fasciculation” occur?',
  opts:['Spinal muscle atrophy','Peripheral neuropathies','Myopathies','Neuromuscular junction','Cerebral palsy'],
  expl:'In spinal muscle atrophy (anterior horn cell disease), there are signs of denervation: weakness, loss of reflexes, fasciculation and wasting as the nerve supply to the muscle fails',
  note:'Twin at p.1437 (unanswered) matches verbatim. Highlighted option is A "Spinal muscle atrophy" = index 0. Box wraps across 4 printed lines, joined as one sentence per the line break.' },

{ n:4, pr:4, p:1440, key:0,
  stem:'Which of the following is not true regarding Fallot’s tetralogy?',
  opts:['Cyanosis starts at birth in all cases','X-ray shows boot shaped heart','There is right ventricular hypertrophy','Hematocrit is increased','A very short murmur is heard during hypercyanotic spells'],
  expl:'Fallot’s tetralogy is characterized by the following: Only a few cases present with severe cyanosis in the first few days of life. X-ray shows a boot-shaped heart. There is right ventricular hypertrophy. Hematocrit is increased. A very short murmur is heard during hypercyanotic spells.',
  note:'Twin at p.1439 (unanswered) matches verbatim. Highlighted option is A "Cyanosis starts at birth in all cases" = index 0. Box is a bulleted list, bullets joined into one string in printed order.' },

{ n:5, pr:5, p:1442, key:2,
  stem:'A 5-year-old boy presents with marked eye puffiness and bilateral lower limb pitting edema for a week. Two days before admission, the edema extended to the abdominal wall and scrotum. History and clinical examination were otherwise unremarkable. What is the most important complication of this boy’s disease?',
  opts:['Hypertensive encephalopathy','Heart failure','Spontaneous bacterial peritonitis','Malnutrition'],
  expl:'This boy has manifestations suggestive of nephrotic syndrome. Nephrotic syndrome increases the risk for infection in general, and spontaneous bacterial peritonitis may occur.',
  note:'Twin at p.1441 (unanswered) matches verbatim. Only 4 options printed. Highlighted option is C "Spontaneous bacterial peritonitis" = index 2.' },

{ n:6, pr:6, p:1444, key:2,
  stem:'Where is the site of the brain lesion in dyskinetic-type cerebral palsy?',
  opts:['Pyramidal tract','Cerebellum','Basal ganglia and extrapyramidal tract','Brainstem','Dorsal ganglia'],
  expl:'Dyskinetic-type CP occurs due to damage or dysfunction in the basal ganglia or their associated pathways (extrapyramidal).',
  note:'Twin at p.1443 (unanswered) matches verbatim. Highlighted option is C "Basal ganglia and extrapyramidal tract" = index 2.' },

{ n:7, pr:7, p:1446, key:4,
  stem:'On a routine CBC screening, a 1.5-year-old boy is noted to have microcytic hypochromic anemia. A follow-up hemoglobin electrophoresis demonstrates an increased level of hemoglobin A2. Which of the following is the most likely diagnosis?',
  opts:['Lead poisoning','Iron deficiency','Chronic systemic illness','Sickle cell trait','β-thalassemia minor'],
  expl:'Hb HPLC or hemoglobin electrophoresis shows: In sickle cell disease → HbS and no HbA In β-thalassemia major → only HbF In β-thalassemia trait → increased HbA2 In α-thalassemia trait → normal Hb pattern',
  note:'Twin at p.1445 (unanswered) matches verbatim. Highlighted option is E "β-thalassemia minor" = index 4. Box prints 4 lines each with a printed arrow glyph, joined in printed order.' },

{ n:8, pr:8, p:1448, key:2,
  stem:'A healthy infant can sit without support, roll over, and crawl but cannot stand alone. What is her most likely developmental age?',
  opts:['3 months','6 months','9 months','12 months','15 months'],
  expl:'The median age for crawling is 8–9 months, while that for standing independently is about 10 months.',
  note:'Twin at p.1447 (unanswered) matches verbatim. Highlighted option is C "9 months" = index 2. FLAGGED by the pre-staging reprint map as matching p.1506 within this section (both also matching pedep-mf3-29 in part 1) — recorded here, no fold decided.' },

{ n:9, pr:9, p:1450, key:3,
  stem:'What is the underlying pathophysiologic mechanism of anemia in patients with G6PD enzyme deficiency?',
  opts:['Bone marrow aplasia','Consumption coagulopathy','Food poisoning','Intravascular hemolysis','Extravascular hemolysis'],
  expl:'Hemolysis due to G6PD deficiency is mainly intravascular, associated with fever, malaise, abdominal pain, and dark urine containing hemoglobin and urobilinogen.',
  note:'Twin at p.1449 (unanswered) matches verbatim. Highlighted option is D "Intravascular hemolysis" = index 3.' },

{ n:10, pr:10, p:1452, key:2,
  stem:'Which of the following tests is diagnostic for hereditary spherocytosis?',
  opts:['Hemoglobin electrophoresis','CBC','Osmotic fragility test','Hormonal assay'],
  expl:'The osmotic fragility test measures red blood cell resistance to hemolysis in hypotonic saline solutions. It is diagnostic for hereditary spherocytosis.',
  note:'Twin at p.1451 (unanswered) matches verbatim. Only 4 options printed. Highlighted option is C "Osmotic fragility test" = index 2.' },

{ n:11, pr:11, p:1454, key:2,
  stem:'Which of the following is a feature of pediatric nephrotic syndrome?',
  opts:['Low C3 level','It is usually associated with hematuria','It rarely causes chronic renal failure','It is usually associated with hypertension'],
  expl:'Pediatric nephrotic syndrome (steroid-sensitive) typically presents with normal blood pressure, normal complement levels, and no hematuria. It rarely leads to chronic renal failure.',
  note:'Twin at p.1453 (unanswered) matches verbatim. Only 4 options printed. Highlighted option is C "It rarely causes chronic renal failure" = index 2.' },

{ n:12, pr:12, p:1456, key:2,
  stem:'What is the preferred (most common) method of treatment for hydrocephalus?',
  opts:['Oral diuretics to relieve raised intracranial pressure','Oral carbonic anhydrase inhibitors','Insertion of ventriculoperitoneal shunt','Ventriculo-cardiac (right atrium) shunt'],
  expl:'Ventriculoperitoneal shunt insertion is the mainstay treatment for hydrocephalus. Occasionally, endoscopic third ventriculostomy is performed.',
  note:'Twin at p.1455 (unanswered) matches verbatim. Only 4 options printed. Highlighted option is C "Insertion of ventriculoperitoneal shunt" = index 2.' },

{ n:13, pr:13, p:1458, key:2,
  stem:'Which of the following is the most common causative organism of infective endocarditis?',
  opts:['Streptococcus pyogenes','Streptococcus pneumoniae','Streptococcus viridans','Staphylococcus aureus','Listeria monocytogenes'],
  expl:'The most common cause of infective endocarditis is α-hemolytic Streptococcus (Streptococcus viridans).',
  note:'Twin at p.1457 (unanswered) matches verbatim. Highlighted option is C "Streptococcus viridans" = index 2.' },

{ n:14, pr:14, p:1460, key:2,
  stem:'Which of the following is the most common cause of chronic wet (productive) cough in children?',
  opts:['Bronchial asthma','Habit cough','Persistent bacterial bronchitis','Tracheomalacia'],
  expl:'Persistent bacterial bronchitis (PBB) is the leading cause of chronic wet cough in young children in high-income countries.',
  note:'Twin at p.1459 (unanswered) matches verbatim. Only 4 options printed. Highlighted option is C "Persistent bacterial bronchitis" = index 2.' },

{ n:15, pr:15, p:1462, key:0,
  stem:'Which of the following is the most common malignant tumor in children?',
  opts:['Leukemia','Lymphoma','Kaposi sarcoma','Wilms tumor'],
  expl:'Leukemia is the most common childhood cancer. Acute lymphoblastic leukemia (ALL) accounts for ~80% of cases.',
  note:'Twin at p.1461 (unanswered) matches verbatim. Only 4 options printed. Highlighted option is A "Leukemia" = index 0. FLAGGED by the pre-staging reprint map as matching live pedep2-mal-23 — recorded, no fold decided. Numeral ~80% checked on hires, reads clearly.' },

{ n:16, pr:16, p:1464, key:1,
  stem:'Nazma, aged 4 years, presents with a 1-week history of episodic central abdominal pain. She is of Indian ethnicity, but the family live in Kenya and are visiting relatives in the UK. She is otherwise well. Her relative’s general practitioner thinks she may be slightly pale and that her spleen is enlarged, as it is 3 cm below the costal margin. There are no other abnormalities on examination. Which of the following is the most likely cause for her enlarged spleen?',
  opts:['Acute lymphoblastic leukaemia','Malaria','Hookworm infestation','Wilms tumour','Sickle cell disease'],
  expl:'High prevalence in Kenya and may cause chronic anaemia and splenomegaly.',
  note:'Twin at p.1463 (unanswered) matches verbatim. Highlighted option is B "Malaria" = index 1. Numeral "3 cm" checked on hires, reads clearly.' },

{ n:17, pr:17, p:1466, key:1,
  stem:'George is a 7-year-old boy who presents to his family doctor with cloudy urine. He has no other symptoms and his examination is normal. You obtain the following result from the microscopy and culture: white blood cells 50–100/mm³; red blood cells, many seen; organisms, none seen; red cell casts seen; culture, negative at 48 hours. Which of the following is the most likely diagnosis?',
  opts:['Balanitis','Glomerulonephritis','Nephrotic syndrome','Perineal contamination','Urinary tract infection (UTI)'],
  expl:'The presence of red cell casts in the urine is always pathological. It is strongly indicative of glomerular damage.',
  note:'Twin at p.1465 (unanswered) matches verbatim. Highlighted option is B "Glomerulonephritis" = index 1. "50–100/mm³" checked on hires: genuine typeset superscript 3, transcribed as printed. FLAGGED by the pre-staging reprint map as matching live pedep2-ren-35 (and House pedhd-renal-13, cross-bank, not folded) — recorded, no fold decided.' },

{ n:18, pr:18, p:1468, key:4,
  stem:'Norah, an 18-month-old girl, presents to her family doctor with coryza, cough, and a mild fever for 3 days. She feeds poorly and is unsettled at night. Her respiratory rate is normal, and there is no chest recession. What is the most likely diagnosis?',
  opts:['Bronchiolitis','Frontal sinusitis','Pneumonia (lower respiratory tract infection)','Tonsillitis','Upper respiratory tract infection'],
  expl:'This child has an upper respiratory tract infection, most likely a common cold.',
  note:'Twin at p.1467 (unanswered) matches verbatim. Highlighted option is E "Upper respiratory tract infection" = index 4. FLAGGED by the pre-staging reprint map as matching live pedep2-res-8 (and House pedhd-resp-8, cross-bank, not folded) — recorded, no fold decided.' },

{ n:19, pr:19, p:1470, key:2,
  stem:'Sarah was born at term by spontaneous vaginal delivery and went home at 8 hours of age following a normal neonatal discharge examination. At 48 hours of age, her mother found her looking pale and was unable to wake her. She was rushed to the Emergency Department. Her breathing was noted to be very shallow, her skin was cool and mottled, and she was unresponsive to pain. She is resuscitated and given intravenous fluids and broad-spectrum antibiotics. On examination, the only palpable pulse is the right brachial pulse. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Persistent ductus arteriosus','Aortic stenosis','Coarctation of the aorta','Transposition of the great arteries','Mitral regurgitation'],
  expl:'Collapse of a newborn can be caused by septicaemia/meningitis, congenital heart disease, or an inborn error of metabolism. In this case, the likely diagnosis is outflow obstruction – severe coarctation of the aorta or interrupted aortic arch. When the ductus arteriosus closes, perfusion to the left arm and lower body is compromised.',
  note:'Twin at p.1469 (unanswered) matches verbatim. Highlighted option is C "Coarctation of the aorta" = index 2. FLAGGED by the pre-staging reprint map as matching live pedep2-car-12 (and House pedhd-card-12, cross-bank, not folded) — recorded, no fold decided.' },

{ n:20, pr:20, p:1472, key:1,
  stem:'Which clinical problem may present with secondary (onset) enuresis?',
  opts:['Acute kidney injury','Emotional upset','Ectopic ureter','Orthostatic proteinuria','Glomerulonephritis'],
  expl:'Emotional upset usually presents with secondary enuresis.',
  note:'Twin at p.1471 (unanswered) matches verbatim. Highlighted option is B "Emotional upset" = index 1. Last entry of quarter A.' },

/* Peds endpoint PART 2, section 13 "Model Final Exam 2", quarter B.
   n21..n40, answered pages 1474,1476,...,1512 (p = 1432 + 2n), all in the EVEN parity run
   (n1-n49 even per the reprint map; the flip at p.1531 is outside this quarter, owned by a later part).
   OCR NOT consulted for transcription (search index only, per brief section 4).
   Cache used: native JPEGs at C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\native\ (the shared cache named in the task prompt, confirmed present for the whole range before starting).
   Twin (unanswered) page read wherever the answered page's text was not certain on first read.
   Header extended after every entry; see note fields for per-entry verification method.

   Page-by-page walk (printed number pr vs section-global n):
   n21 p1474 pr21
   n22 p1476 pr22
   n23 p1478 pr23
   n24 p1480 pr24
   n25 p1482 pr25
   n26 p1484 pr26
   n27 p1486 pr27
   n28 p1488 pr28
   n29 p1490 pr29
   n30 p1492 pr30 (no box on this page -- checked next page p.1493 per section 3 rule)
   n31 p1494 pr31
   n32 p1496 pr32
   n33 p1498 pr33
   n34 p1500 pr34
   n35 p1502 pr35
   n36 p1504 pr36
   n37 p1506 pr37
   n38 p1508 pr38
   n39 p1510 pr39
   n40 p1512 pr40  (last entry of quarter B)
*/

{ n:21, pr:21, p:1474, key:0,
  stem:'Jack is a 3-year-old boy whose father has a genetic disorder associated with short stature. Jack is also very short, has bowed legs and a very prominent forehead. His head is disproportionately large compared with his body size. Which of the following is the most likely mode of genetic inheritance of this disorder?',
  opts:['Autosomal dominant disorder','Autosomal recessive disorder','X-linked dominant','X-linked recessive','Microdeletion'],
  expl:'Jack and his father have the same condition. Jack has achondroplasia.',
  note:'Highlighted option is A "Autosomal dominant disorder" = index 0. Both text and highlight fully legible on native p.1474; twin not needed.' },

{ n:22, pr:22, p:1476, key:3,
  stem:'Mohammed, a 12-year-old boy with type 1 diabetes mellitus, is reviewed in the outpatient clinic. In spite of maintaining good control of his diabetes, his height has remained static for 9 months. He says his appetite is alright, but he has lost interest in football, which is his passion, as he says he can’t keep up with the other boys anymore. He just stays at home and watches TV, but wants to be out playing football and getting back his energy. A full blood count and C-reactive protein are normal and his HbA1C is satisfactory. What is the most likely diagnosis?',
  opts:['Anorexia nervosa','Depression','Growth hormone deficiency','Hypothyroidism','Inflammatory bowel disease'],
  expl:'Children with type 1 diabetes are at increased risk of thyroid disease and should be screened annually. Static height and lethargy support this diagnosis.',
  note:'Highlighted option is D "Hypothyroidism" = index 3. This is one of the reprint-map fold candidates (pedep2-end-4 / House pedhd-endo-4) -- recorded here, not adjudicated.' },

{ n:23, pr:23, p:1478, key:2,
  stem:'A newborn baby girl is born following a pregnancy complicated by oligohydramnios with bilateral talipes and requires ventilation for pulmonary hypoplasia. She fails to pass urine in the first 24 hours of life. Which of the following is likely to be the cause?',
  opts:['Nephrotic syndrome','Posterior urethral valves','Bilateral renal agenesis','Autosomal dominant polycystic kidney disease','Duplex kidney'],
  expl:'Bilateral renal agenesis causes Potter syndrome, which is incompatible with life. Oligohydramnios results from lack of fetal urine and leads to pulmonary hypoplasia.',
  note:'Highlighted option is C "Bilateral renal agenesis" = index 2. Reprint-map candidate against House pedhd-renal-26 -- recorded, not adjudicated.' },

{ n:24, pr:24, p:1480, key:0,
  stem:'Raj, a previously well 14-year-old Asian boy, is noted to be jaundiced. He has recently returned to the UK from India where he was visiting relatives in a rural village. He had a 10-day diarrhoea and vomiting illness whilst in India. Which of the following is the most likely diagnosis?',
  opts:['Hepatitis A','Hepatitis B','Biliary atresia','Galactosemia','Primary sclerosing cholangitis'],
  expl:'Vaccination is recommended for travel to endemic areas. Hepatitis A is common in rural India and spreads via the fecal-oral route.',
  note:'Highlighted option is A "Hepatitis A" = index 0. Reprint-map candidate against House pedhd-liv-7 -- recorded, not adjudicated.' },

{ n:25, pr:25, p:1482, key:0,
  stem:'A 14-month-old is seen in clinic as his mother is concerned that he may be having seizures. The episodes occur when he is angry or upset. He has colour change followed by collapse and occasional jerking movements. The most likely diagnosis is?',
  opts:['Breath-holding spells','‘Tet’ spells','Myoclonic epilepsy','Non-epileptic seizure','Vasovagal syncope'],
  expl:'Breath-holding spells typically occur between 6 months and 2 years and are triggered by strong emotions. There may be transient loss of consciousness and tonic-clonic movements.',
  note:'Highlighted option is A "Breath-holding spells" = index 0. Reprint-map candidate against House pedhd-neuro-21 -- recorded, not adjudicated.' },

{ n:26, pr:26, p:1484, key:1,
  stem:'Sophie, a 9-year-old girl with type 1 diabetes mellitus, develops a fever along with vomiting and diarrhoea. After 2 days, her mother takes her to the local paediatric assessment unit as she continues to vomit. On examination, her temperature is 37.5°C. She is able to talk to her mother. She has clinical dehydration. Her pulses, capillary refill time, and blood pressure are normal. Her blood glucose is 16 mmol/L. Which of the following is the best course of action to take immediately for this patient?',
  opts:['Oral glucose drink','Intravenous infusion of normal saline (0.9% sodium chloride)','Subcutaneous insulin','Fluid resuscitation with normal saline (0.9% sodium chloride)','Intravenous infusion of 5% glucose'],
  expl:'She is clinically dehydrated and vomiting, so she needs IV fluid. She is not shocked, so fluid resuscitation is not indicated.',
  note:'Highlighted option is B "Intravenous infusion of normal saline (0.9% sodium chloride)" = index 1. Numbers checked on native: temp 37.5C, glucose 16 mmol/L -- both legible, no exponent/superscript on this page. Reprint-map candidate against House pedhd-endo-12 -- recorded, not adjudicated.' },

{ n:27, pr:27, p:1486, key:1,
  stem:'Finlay, a 5-year-old boy, recently had a birthday party at his local farm. Since then, he has had 3 days of diarrhoea. The loose stool had some blood in it. His mother is concerned as he is still not himself. He appears to be very pale and has not passed urine for 12 hours. He has no other medical problems and is not normally on any medication. On examination, you note that he has pale conjunctivae. His blood pressure is 120/70 mmHg. You decide to take some blood tests and get the following results: Haemoglobin: 76 g/L White blood cells: 14.2 × 10^9/L Platelet count: 50 × 10^9/L Creatinine: 200 µmol/L (normal: 20–80 µmol/L) Prothrombin time: 13 seconds (control: 12–15 s) Activated partial thromboplastin time: 34 seconds (control: 25–35 s) What is the most likely diagnosis?',
  opts:['Acute lymphatic leukaemia','Haemolytic-uraemic syndrome','Henoch–Schönlein purpura','Immune thrombocytopenic purpura','Post-streptococcal glomerulonephritis'],
  expl:'Classic triad: acute renal failure, microangiopathic hemolytic anaemia, and thrombocytopenia. Typically follows GI infection with E. coli O157:H7.',
  note:'Highlighted option is B "Haemolytic-uraemic syndrome" = index 1. Exponent checked at 300dpi-equivalent hires render: both WBC and platelet counts print a genuine raised superscript "9" (10^9/L), consistent with the clinical values (elevated WBC, low platelets); transcribed 10^9 per brief section 4a convention. All other lab values (Hb 76 g/L, creatinine 200 umol/L range 20-80, PT 13s range 12-15, APTT 34s range 25-35, BP 120/70) legible and consistent.' },

{ n:28, pr:28, p:1488, key:1,
  stem:'Luna, a 32-year-old Cantonese woman, has just given birth to her third child. She arrived in the UK 3 months ago to live with her extended family following the death of her husband. Antenatal screening shows that she is hepatitis B surface antigen (HBsAg) positive and hepatitis B e antigen (HBeAg) negative. The newborn infant looks well and has fed. The postnatal team are keen to send the mother and baby home. Which of the following is the best advice to give concerning immunization of the family?',
  opts:['Hepatitis B vaccination for the baby','Hepatitis B vaccination for the baby and all other children','Hepatitis B vaccination for the baby and mother','Hepatitis B vaccination for the baby with hepatitis B immunoglobulin','No treatment required'],
  expl:'Babies of HBsAg-positive mothers should receive hepatitis B vaccination. Household contacts (including other children) should also be vaccinated.',
  note:'Highlighted option is B "Hepatitis B vaccination for the baby and all other children" = index 1. This is the last of a run of seven consecutive flagged pages (1476-1488) per the reprint map; reprint-map candidate against pedep2-liv-4 / House pedhd-liv-4 -- recorded, not adjudicated.' },

{ n:29, pr:29, p:1490, key:1,
  stem:'Which of the following is among the red flag features of headache?',
  opts:['Bilateral headache','Headache that gets worse on lying down','Headache following head trauma','Headache associated with vision impairment'],
  expl:'Headache worse when lying down or with coughing/straining suggests raised intracranial pressure and is a red flag.',
  note:'Highlighted option is B "Headache that gets worse on lying down" = index 1. This page prints only FOUR options (A-D), not the usual five -- recorded as printed, not an error. No reprint-map flag on this page.' },

{ n:30, pr:30, p:1492, key:1,
  stem:'Which of the following antibiotics is used for treating atypical pneumonia?',
  opts:['Amoxicillin','Azithromycin','Cephalexin','Gentamicin'],
  expl:'',
  note:'Highlighted option is B "Azithromycin" = index 1. Page prints no explanation box (four options, A-D). Per brief section 3, checked the next page (p.1493) since this page has no box: p.1493 is the unanswered twin of the NEXT question (q31), not an overflow box for this one -- confirmed there is no overflow here.' },

{ n:31, pr:31, p:1494, key:2,
  stem:'Which of the following statements best describes the findings in a 2-week-old infant with pyloric stenosis?',
  opts:['Severe bilious vomiting','Dehydration with a metabolic acidosis','Hypokalaemic hypochloraemic alkalosis','Massive abdominal distension','Bowel sounds are absent'],
  expl:'Pyloric stenosis leads to projectile non-bilious vomiting, dehydration, and hypokalaemic hypochloraemic metabolic alkalosis due to loss of gastric acid.',
  note:'Highlighted option is C "Hypokalaemic hypochloraemic alkalosis" = index 2. No reprint-map flag on this page.' },

{ n:32, pr:32, p:1496, key:3,
  stem:'A child is brought to the Emergency Department with stridor, drooling of saliva, and respiratory distress. What is the most appropriate next step in management?',
  opts:['Intravenous steroids','Oxygen and nebulized adrenaline','Intravenous antibiotics','Immediate intubation','Nebulized salbutamol'],
  expl:'This child likely has epiglottitis. Airway protection is the immediate priority before any other interventions.',
  note:'Highlighted option is D "Immediate intubation" = index 3. No reprint-map flag on this page.' },

{ n:33, pr:33, p:1498, key:1,
  stem:'Which of the following is the most common cause of febrile convulsions in children?',
  opts:['Bacterial meningitis','Human herpesvirus 6 (HHV-6)','Influenza','Pneumococcal sepsis','Otitis media'],
  expl:'HHV-6 is the most common cause of febrile convulsions, especially in children aged 6 months to 5 years.',
  note:'Highlighted option is B "Human herpesvirus 6 (HHV-6)" = index 1. No reprint-map flag on this page.' },

{ n:34, pr:34, p:1500, key:3,
  stem:'A 2-week-old baby is brought with vomiting and poor feeding. Examination shows hypotonia and ambiguous genitalia. Blood tests reveal hyponatraemia, hyperkalaemia, and hypoglycaemia. What is the most likely diagnosis?',
  opts:['Congenital hypothyroidism','Inborn error of metabolism','Galactosaemia','Congenital adrenal hyperplasia','Neonatal sepsis'],
  expl:'The classic presentation of congenital adrenal hyperplasia (CAH) includes salt-wasting, ambiguous genitalia in females, and electrolyte abnormalities.',
  note:'Highlighted option is D "Congenital adrenal hyperplasia" = index 3. No reprint-map flag on this page.' },

{ n:35, pr:35, p:1502, key:1,
  stem:'Which of the following is the most likely cause of cyanosis in a newborn that improves with crying?',
  opts:['Tricuspid atresia','Choanal atresia','Tetralogy of Fallot','Transposition of the great arteries','Pulmonary atresia'],
  expl:'In choanal atresia, the nasal airway is blocked. Crying opens the mouth and improves oxygenation.',
  note:'Highlighted option is B "Choanal atresia" = index 1. No reprint-map flag on this page.' },

{ n:36, pr:36, p:1504, key:2,
  stem:'A 4-year-old boy presents with abdominal pain, joint swelling, and a purpuric rash over the lower limbs. What is the most likely diagnosis?',
  opts:['Idiopathic thrombocytopenic purpura','Meningococcaemia','Henoch–Schönlein purpura','Acute leukaemia','Systemic lupus erythematosus'],
  expl:'Henoch–Schönlein purpura is a vasculitis that typically presents with palpable purpura, abdominal pain, and joint involvement.',
  note:'Highlighted option is C "Henoch-Schonlein purpura" = index 2. No reprint-map flag on this page.' },

{ n:37, pr:37, p:1506, key:2,
  stem:'A healthy infant can sit without support, roll over and crawl but cannot stand alone. What is her most likely developmental age?',
  opts:['4 months','6 months','9 months','13 months','16 months'],
  expl:'Sitting, rolling, and crawling without standing corresponds to around 9 months of age.',
  note:'Highlighted option is C "9 months" = index 2. This page is the reprint map WITHIN-SECTION candidate (≈p.1448) and also a candidate against endpoint part 1 pedep-mf3-29 -- recorded, not adjudicated; not compared against p.1448 or the part-1 entry directly since those are outside this quarter/file scope.' },

{ n:38, pr:38, p:1508, key:3,
  stem:'What is the optimal emergency management of a child presenting to the ER with severe croup?',
  opts:['Suction of the pharynx','IV epinephrine','Oral ampicillin','Nebulized Epinephrine','Immediate intubation'],
  expl:'Nebulized epinephrine reduces airway swelling rapidly and is first-line emergency treatment for severe croup.',
  note:'Highlighted option is D "Nebulized Epinephrine" = index 3. Reprint-map candidate against endpoint part 1 pedep-mf3-31 -- recorded, not adjudicated.' },

{ n:39, pr:39, p:1510, key:3,
  stem:'Which of the following is the most common cause of heart failure in the first week of life?',
  opts:['Coarctation of the aorta','Large ventricular septal defect','Tetralogy of Fallot','Hypoplastic left heart syndrome','Patent ductus arteriosus'],
  expl:'Hypoplastic left heart syndrome often presents with shock and heart failure in the first few days as the ductus arteriosus closes.',
  note:'Highlighted option is D "Hypoplastic left heart syndrome" = index 3. No reprint-map flag on this page.' },

{ n:40, pr:40, p:1512, key:3,
  stem:'A 3-year-old child presents with a barking cough and inspiratory stridor. What is the most likely diagnosis?',
  opts:['Bronchiolitis','Epiglottitis','Foreign body aspiration','Laryngotracheobronchitis (croup)','Asthma'],
  expl:'Croup is a common cause of barking cough and stridor in children aged 6 months to 6 years.',
  note:'Highlighted option is D "Laryngotracheobronchitis (croup)" = index 3. No reprint-map flag on this page. Last entry of quarter B (n21..n40).' },

/* Peds endpoint PART 2, section 13 "Model Final Exam 2", quarter C.
   n41..n60, answered pages:
     n41-n49 EVEN 1514,1516,...,1530 (p = 1432 + 2n) -- tail of the even parity run
     PARITY FLIP across p.1531
     n50-n60 ODD  1533,1535,...,1553 (p = 1433 + 2n) -- start of the odd parity run
   OCR NOT consulted for transcription (search index only, per brief S4).
   Twin (unanswered) page read wherever the answered page's text was not certain on first read.
   p.1531 opened and adjudicated below before n49/n50 were staged.
   Header extended after every entry; see note fields for per-entry verification method.

   Page-by-page walk (printed number pr vs section-global n):
   n41 p1514 pr41
   n42 p1516 pr42
   n43 p1518 pr43
   n44 p1520 pr44
   n45 p1522 pr45
   n46 p1524 pr46
   n47 p1526 pr47
   n48 p1528 pr48
   n49 p1530 pr49 (box overflow at p.1531)
   n50 p1533 pr50 -- PARITY FLIP: first odd-page answered page after the flip
   n51 p1535 pr51
   n52 p1537 pr52
   n53 p1539 pr53
   n54 p1541 pr55 -- DISAGREEMENT: answered page prints "55", its own twin (p.1540) prints "54"
   n55 p1543 pr55 -- printed number "55" reused for a second, unrelated question (both twin and answer agree here)
   n56 p1545 pr56 -- back in sync with n
   n57 p1547 pr57
   n58 p1549 pr58
   n59 p1551 pr59
   n60 p1553 pr60 (last entry of this quarter)
   -- boundary check: p.1554 (one past range) is n61 pr61, an unanswered twin ("A baby is born with a
      disorder of sexual differentiation. Congenital adrenal hyperplasia is suspected...") -- the
      section continues normally past n60, no section break here.
*/

{ n:41, pr:41, p:1514, key:3,
  stem:'If the age of 18 months is the "red-flag age" of walking unsupported, what is the percentage of normal children who achieve that skill by age of 18 months?',
  opts:['27%','57%','77%','97.5%'],
  expl:'About 97.5% of normal children can walk unsupported by 18 months; delayed walking beyond this is a red flag.',
  note:'Twin at p.1513 (unanswered) matches verbatim. Highlighted option is D "97.5%" = index 3.' },

{ n:42, pr:42, p:1516, key:2,
  stem:'A 3-month-old baby is admitted with a diagnosis of bronchiolitis. Her condition has further worsened, and she developed audible grunting sounds. What is the best pathophysiologic explanation for grunting in this baby?',
  opts:['Oxygen consumption is decreased with grunting which helps resolve hypoxemia','During grunting lung volume increases as more air moves through the conducting airways','Grunting increases end expiratory pressure and promotes gas exchange','During grunting the diameter of the bronchi and bronchioles is increased'],
  expl:'Grunting increases end-expiratory pressure, helping keep alveoli open and improving gas exchange.',
  note:'Twin at p.1515 (unanswered) matches verbatim. Highlighted option is C "Grunting increases end expiratory pressure..." = index 2. Reprint map flags this page as matching pedep-mf3-37 in part 1 -- recorded, not folded.' },

{ n:43, pr:43, p:1518, key:2,
  stem:'A 4-year-old boy has delayed speech, prefers playing alone, gets upset with changes, and avoids eye contact.\nWhat is the most likely diagnosis?',
  opts:['Deaf mutism','Normal development','Autism','Speech delay'],
  expl:'The child shows delayed speech, social avoidance, repetitive behaviors, and distress with changes, which are classic features of autism. Deafness or simple speech delay would not explain all social and behavioral signs.',
  note:'Twin at p.1517 (unanswered) matches verbatim. Highlighted option is C "Autism" = index 2.' },

{ n:44, pr:44, p:1520, key:1,
  stem:'A term infant delivered at home is brought on day 4 with oozing from the umbilical stump. The mother is unsure if the newborn received vitamin K.\nWhich of the following blood results is most likely to be abnormal?',
  opts:['Platelets','Prothrombin time','APTT','Hemoglobin','Antiplatelet antibodies'],
  expl:'Vitamin K is needed for clotting factors II, VII, IX, and X. Deficiency prolongs prothrombin time (PT) while platelets and APTT may remain normal.',
  note:'Twin at p.1519 (unanswered) matches verbatim. Highlighted option is B "Prothrombin time" = index 1.' },

{ n:45, pr:45, p:1522, key:1,
  stem:'A 6-year-old boy presents with periorbital oedema and frothy urine. Urinalysis shows 4+ protein and no blood. What is the most likely diagnosis?',
  opts:['Glomerulonephritis','Minimal change disease','IgA nephropathy','Post-streptococcal nephritis','Alport syndrome'],
  expl:'Minimal change disease is the most common cause of nephrotic syndrome in children and typically presents with heavy proteinuria and oedema.',
  note:'Twin at p.1521 (unanswered) matches verbatim. Highlighted option is B "Minimal change disease" = index 1.' },

{ n:46, pr:46, p:1524, key:2,
  stem:'A 4-year-old boy is referred to his GP by his teacher at nursery. She has noticed that he has delayed speech and has only a handful of words. He struggles with imaginative play and usually plays alone. He becomes upset if there is a change to the daily routine. In the surgery, he does not make eye contact. There are no dysmorphic features. What is the most likely diagnosis?',
  opts:['Selective mutism','Normal development','Autism','Speech delay','Fragile X'],
  expl:'Autism is a pervasive developmental disorder characterized by speech delay and poor social communication skills. It is part of a spectrum of disorders including Asperger’s syndrome. Autistic children struggle to interpret non-verbal communications and to form relationships with peers. Autistic behaviours are associated with a number of syndromes including fragile X, untreated phenylketonuria, and Williams syndrome.',
  note:'Twin at p.1523 (unanswered) matches verbatim. Highlighted option is C "Autism" = index 2. Reprint map flags this page as matching House pedhd-devp-18 -- recorded, not folded.' },

{ n:47, pr:47, p:1526, key:2,
  stem:'Which of the following is the most common solid tumor in children?',
  opts:['Wilm’s tumor','Retinoblastoma','Brain tumors','Kaposi sarcoma','Lymphomas'],
  expl:'Brain tumors are the most common solid tumour in children and are the leading cause of childhood cancer deaths in the UK. In contrast to adults, brain tumours in children are almost always primary rather than metastatic, and 60% are infratentorial (located below the tentorium cerebelli).',
  note:'Twin at p.1525 (unanswered) matches verbatim. Highlighted option is C "Brain tumors" = index 2.' },

{ n:48, pr:48, p:1528, key:3,
  stem:'All of the following are among the major manifestations of Jones criteria for diagnosis of rheumatic fever except?',
  opts:['Chorea','Migratory arthritis','Carditis','Maculopapular rash','Subcutaneous nodules'],
  expl:'Jones criteria for diagnosis of rheumatic fever include:\n• Major manifestations: Carditis, migratory arthritis, Sydenham chorea, erythema marginatum, and subcutaneous nodules.\n• Minor manifestations: Fever, polyarthralgia, raised acute-phase reactants (e.g., ESR).',
  note:'Twin at p.1527 (unanswered) matches verbatim. Highlighted option is D "Maculopapular rash" = index 3. Box prints two coloured round bullets, transcribed as plain bullets.' },

{ n:49, pr:49, p:1530, key:2, box:1531,
  stem:'A 10-year-old boy presents to the emergency department with bluish discoloration of the skin and manifestations of heart failure. History reveals that he had a congenital cardiac defect after birth (large VSD), but his father refused to do the corrective surgery. Which of the following is the most likely underlying cause for the current findings of this child?',
  opts:['Rheumatic fever','PDA','Shunt reversal (Eisenmenger syndrome)','Transient (reversible) episode due to the pre-existing anomaly'],
  expl:'If high pulmonary blood flow due to a large left-to-right shunt or common mixing is not treated at an early stage, the pulmonary arteries become thick-walled and the resistance to flow increases. Eventually, the shunt reverses (right-to-left), causing cyanosis known as Eisenmenger syndrome.',
  note:'Twin at p.1529 (unanswered) matches verbatim; p.1530 itself prints no box. Highlighted option is C "Shunt reversal (Eisenmenger syndrome)" = index 2. p.1531 opened per SS3a/reprint-map: it is a bordered box, pale-green fill, same visual format as every other expl box in this section, and its text directly extends n49s answer (Eisenmenger mechanism) -- not a full-page teaching slide (contrast the section-4 p.309 counter-example, which is body-text size and off-topic). Adjudicated as n49s overflowed explanation box, staged as box:1531. p.1532 (n50s unanswered twin) confirms the run resumes normally after the flip.' },

{ n:50, pr:50, p:1533, key:0,
  stem:'Which of the following organisms is likely to cause pneumonia in a newborn?',
  opts:['Group B streptococcus','Escherichia coli','Listeria monocytogenes','Streptococcus pneumoniae'],
  expl:'In newborns, causative organisms of pneumonia are typically acquired from the maternal genital tract. Group B streptococcus is the most common, along with Gram-negative organisms such as E. coli.',
  note:'First answered page after the parity flip. Twin at p.1532 (unanswered) matches verbatim. Highlighted option is A "Group B streptococcus" = index 0.' },

{ n:51, pr:51, p:1535, key:1,
  stem:'Which of the following is of evidence-based benefit in the treatment of acute bronchiolitis?',
  opts:['Nebulized hypertonic saline','Continuous positive airway pressure (CPAP)','Corticosteroids','Antibiotics'],
  expl:'',
  note:'Twin at p.1534 (unanswered) matches verbatim. Highlighted option is B "Continuous positive airway pressure (CPAP)" = index 1. Page prints no box; per brief SS3a the next page (p.1536) was opened and is n52s unanswered twin (pr52), not an overflow box -- alternation resumes normally.' },

{ n:52, pr:52, p:1537, key:2,
  stem:'Ishmael, a 15-year-old boy from Pakistan, is seen in the outpatient department. He presents with otitis media and a history of recurrent chest infections needing antibiotics. He has a productive cough. Bowel movements are normal. On examination, he is afebrile, pink, with normal heart sounds. Clubbing is noted. Auscultation reveals scattered crepitations. Sweat test is negative. What is the most likely diagnosis?',
  opts:['Cystic fibrosis','Infective endocarditis','Primary ciliary dyskinesia','Crohn’s disease','Tetralogy of Fallot'],
  expl:'Clubbing and recurrent infections suggest bronchiectasis. A negative sweat test rules out cystic fibrosis, suggesting primary ciliary dyskinesia as the likely cause.',
  note:'Twin at p.1536 (unanswered) matches verbatim. Highlighted option is C "Primary ciliary dyskinesia" = index 2.' },

{ n:53, pr:53, p:1539, key:1,
  stem:'Which of the following is true regarding Guillain-Barré syndrome?',
  opts:['It typically presents immediately after an upper respiratory tract infection','Sensory symptoms are less striking than the weakness','CT of the spinal cord (or brain and spinal cord) is the most useful acute investigation','CSF protein is markedly reduced'],
  expl:'Guillain-Barré syndrome typically follows a URTI or gastroenteritis by 1–3 weeks. Weakness is more prominent than sensory symptoms. MRI is preferred for ruling out cord pathology. CSF shows raised protein with normal WBC (albuminocytologic dissociation).',
  note:'Twin at p.1538 (unanswered) matches verbatim. Highlighted option is B "Sensory symptoms are less striking than the weakness" = index 1.' },

{ n:54, pr:55, p:1541, key:2,
  stem:'Ahmed, a 10-year-old boy of Egyptian descent, becomes lethargic with dark urine after taking medication. Examination is normal. What is the likely offending drug?',
  opts:['Rifampicin','Iron sulphate','Sulfa drug (Sulphonamide)','Penicillin'],
  expl:'G6PD deficiency can cause hemolysis after exposure to oxidant drugs such as sulphonamides.',
  note:'⚠️ pr/n disagreement: the answered page (p.1541) prints "55." as its question number, but its own twin at p.1540 (identical stem and options) prints "54." -- the book itself is inconsistent between the two printings of this one question. Staged n:54 per this quarters section-global sequence (p=1433+2n), pr:55 as printed on the answered page actually staged from. Stem and options verbatim-identical on both pages. Highlighted option is C "Sulfa drug (Sulphonamide)" = index 2.' },

{ n:55, pr:55, p:1543, key:4,
  stem:'Which of the following can cause hematuria in children?',
  opts:['Urinary tract infection','Favism','Acute post-streptococcal glomerulonephritis','ITP','A & C together'],
  expl:'Both UTIs and post-streptococcal glomerulonephritis are recognized causes of hematuria.',
  note:'Twin at p.1542 (unanswered) matches verbatim; both agree "55." here. Highlighted option is E "A & C together" = index 4. ⚠️ The printed number "55" is now used for TWO different questions in this run (this one and n54s Ahmed/G6PD question at p.1541) -- a duplicate-numbering defect like the one documented in part 1 section 1 (69/81 printed twice). Recorded, not corrected; n stays the section-global sequential index.' },

{ n:56, pr:56, p:1545, key:2,
  stem:'Hemoglobin electrophoresis is the diagnostic tool of choice in which of the following haematological disorders?',
  opts:['Hereditary spherocytosis','Iron deficiency anemia','Sickle cell anemia','G6PD deficiency'],
  expl:'Hemoglobin electrophoresis is essential in diagnosing hemoglobinopathies like sickle cell disease and thalassemia.',
  note:'Twin at p.1544 (unanswered) matches verbatim; pr and n back in sync at 56. Highlighted option is C "Sickle cell anemia" = index 2.' },

{ n:57, pr:57, p:1547, key:2,
  stem:'Shlomo, a 9-day-old Jewish boy, presents with persistent bleeding after circumcision. PT is mildly prolonged, APTT is >120s. What is the likely diagnosis?',
  opts:['β-Thalassaemia major','Liver disease','Haemophilia A','von Willebrand disease','Immune thrombocytopenic purpura'],
  expl:'Severe prolonged APTT with normal platelets and mild PT prolongation suggests haemophilia A. vWD typically has mild APTT prolongation.',
  note:'Twin at p.1546 (unanswered) matches verbatim. Highlighted option is C "Haemophilia A" = index 2. Numeral ">120s" legible clearly on native image, no crop needed.' },

{ n:58, pr:58, p:1549, key:3,
  stem:'What is the underlying pathophysiology in HSP?',
  opts:['Autoreactive T lymphocytes','Anti-basement membrane antibodies','IgM-mediated nephropathy','Vasculitis','Complement abnormality'],
  expl:'HSP is an IgA-mediated small vessel vasculitis.',
  note:'Twin at p.1548 (unanswered) matches verbatim. Highlighted option is D "Vasculitis" = index 3.' },

{ n:59, pr:59, p:1551, key:1,
  stem:'Which laboratory finding supports the diagnosis of disseminated intravascular coagulation (DIC)?',
  opts:['Thrombocytosis','Elevated D-dimer','Elevated antithrombin, protein C and protein S','Normal PT','Normal APTT'],
  expl:'DIC causes widespread clot formation and breakdown, which raises D-dimer levels. Thrombocytopenia, prolonged PT/APTT, and low clotting factors are also typical, unlike thrombocytosis or normal coagulation tests.',
  note:'Twin at p.1550 (unanswered) matches verbatim. Highlighted option is B "Elevated D-dimer" = index 1.' },

{ n:60, pr:60, p:1553, key:0,
  stem:'Which of the following laboratory findings is not consistent with disseminated intravascular coagulation (DIC)?',
  opts:['Thrombocytosis','Elevated D-dimer','Prolonged PT','Reduced fibrinogen'],
  expl:'DIC usually causes low platelets due to consumption, not high platelets. Elevated D-dimer, prolonged PT, and low fibrinogen are characteristic, whereas raised fibrinogen may occur early but is generally consumed in ongoing DIC.',
  note:'Last entry of this quarter (n60, my range ends here). Twin at p.1552 (unanswered) matches verbatim. Highlighted option is A "Thrombocytosis" = index 0. Boundary check: p.1554 (one page past my range) is n61 pr61, an unanswered twin opening "A baby is born with a disorder of sexual differentiation. Congenital adrenal hyperplasia is suspected..." -- confirms the section continues normally past n60 with no break.' },

/* Peds endpoint PART 2, section 13 "Model Final Exam 2", quarter D.
   n61..n80, answered pages 1555,1557,...,1593 (p = 1433 + 2n), the ODD parity run
   (n50-n80 odd per the reprint map and task prompt; the flip at p.1531 is owned by an earlier
   part and not opened here).
   OCR NOT consulted for transcription (search index only, per brief section 4).
   Cache used: native JPEGs and hires PNGs at
   C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\
   (the shared cache named in the task prompt, confirmed present for the whole range plus p.1594
   before starting). No source PDF opened, nothing rendered.
   Twin (unanswered) page is the EVEN page immediately BEFORE each answered page in this quarter
   (reverse of a body section) -- read wherever the answered page's text was not certain on first read.
   Header extended after every entry; see note fields for per-entry verification method.

   Page-by-page walk (printed number pr vs section-global n):
   n61 p1555 pr61
   n62 p1557 pr62
   n63 p1559 pr63
   n64 p1561 pr64
   n65 p1563 pr65
   n66 p1565 pr66
   n67 p1567 pr67
   n68 p1569 pr68
   n69 p1571 pr69
   n70 p1573 pr70
   n71 p1575 pr71
   n72 p1577 pr72
   n73 p1579 pr73
   n74 p1581 pr74
   n75 p1583 pr75
   n76 p1585 pr76
   n77 p1587 pr77
   n78 p1589 pr78
   n79 p1591 pr79
   n80 p1593 pr80

   Boundary proof: p.1594 opened and is an Arabic poem/supplication (five couplets,
   right-to-left script, no stem, no options, no highlight) -- not a question, same shape as
   section 12's own closing page. p.1595 opened and reads "Model Final Exam 3" in large red
   text on its own slide -- the section-14 banner. No 81st question hides between p.1593 and
   the next section; 20/20 answered pages in this quarter carried a real question with a
   highlighted key.

   Final tally: 20 entries staged (n61-80), 20 answered pages read, 20 twins read, gate PASS.
*/

{ n:61, pr:61, p:1555, key:3,
  stem:'A baby is born with a disorder of sexual differentiation. Congenital adrenal hyperplasia is suspected. What blood result would confirm the diagnosis?',
  opts:['A low testosterone','A markedly lowered plasma 17 α–hydroxyprogesterone','A markedly raised cortisol level','A markedly raised plasma 17α-hydroxyprogesterone','A raised blood glucose'],
  expl:'17α-hydroxyprogesterone accumulates in CAH due to 21-hydroxylase deficiency, confirming the diagnosis. Testosterone and cortisol levels are variable and not diagnostic.',
  note:'Twin at p.1554 (unanswered) matches verbatim. Highlighted option is D "A markedly raised plasma 17α-hydroxyprogesterone" = index 3. Reprint-map fold candidate: p.1555 ~ pedep2-end-8 (also House pedhd-endo-8) -- recorded here, not adjudicated.' },

{ n:62, pr:62, p:1557, key:3,
  stem:'What is the best therapeutic strategy for a 4-year-old girl diagnosed with ITP, platelet count 30,000/μL, no active bleeding?',
  opts:['Oral steroids','IVIG','Anti-D','Observation and follow-up','Splenectomy'],
  expl:'Children with ITP who are not bleeding usually do not require treatment, as spontaneous recovery is common. Medications like steroids or IVIG are reserved for active bleeding or very low platelet counts.',
  note:'Twin at p.1556 (unanswered) matches verbatim. Highlighted option is D "Observation and follow-up" = index 3. Platelet count "30,000/μL" read plainly on native, no superscript/exponent involved, no ambiguity.' },

{ n:63, pr:63, p:1559, key:3,
  stem:'A patient with which of the following conditions would benefit most from splenectomy?',
  opts:['Sickle cell anemia','Leukemia','Thalassemia','Hereditary spherocytosis'],
  expl:'Splenectomy reduces hemolysis in hereditary spherocytosis, improving anemia and jaundice. Other conditions like sickle cell or thalassemia may benefit only in specific cases.',
  note:'Only 4 options printed (A-D), no E -- confirmed on both twin (p.1558, unanswered, also 4 options) and answered page. Highlighted option is D "Hereditary spherocytosis" = index 3.' },

{ n:64, pr:64, p:1561, key:3,
  stem:'A 3-year-old child with iron deficiency anemia shows which hematologic findings?',
  opts:['Hemoglobin (10), MCV (70), reticulocyte (10%)','Hemoglobin (15), MCV (78), reticulocyte (2%)','Hemoglobin (8), MCV (45), reticulocyte (9%)','Hemoglobin (7.5), MCV (65), reticulocyte (1.0%)','Hemoglobin (7), MCV (80), reticulocyte (16%)'],
  expl:'Iron deficiency causes microcytic, hypochromic anemia with low reticulocyte count because bone marrow cannot produce enough red cells without iron.',
  note:'Twin at p.1560 (unanswered) matches verbatim. Highlighted option is D "Hemoglobin (7.5), MCV (65), reticulocyte (1.0%)" = index 3. Re-checked all five option numerals on the 300dpi hires render, values confirmed exact: 10/70/10, 15/78/2, 8/45/9, 7.5/65/1.0, 7/80/16. FLAG: the book prints NO units for Hemoglobin or MCV anywhere in this question (no g/dL, no fL) -- transcribed exactly as printed.' },

{ n:65, pr:65, p:1563, key:2,
  stem:'Hemolytic uremic syndrome is characterized by all of the following except?',
  opts:['Thrombocytopenia','Good prognosis in most cases','Thrombocytosis','Acute renal failure'],
  expl:'HUS is characterized by thrombocytopenia, microangiopathic hemolytic anemia, and acute renal failure, not elevated platelets.',
  note:'Only 4 options printed (A-D), no E -- confirmed on both twin (p.1562, unanswered, also 4 options) and answered page. Highlighted option is C "Thrombocytosis" = index 2. "thrombocytopenia" is bolded in the printed explanation box; bold formatting not represented in this schema, wording captured verbatim.' },

{ n:66, pr:66, p:1565, key:2,
  stem:'The classical clinical presentation of minimal change nephrotic syndrome does not include which of the following?',
  opts:['A child aged between 2–6 years','Normal blood pressure','Abnormal kidney function tests','High serum cholesterol and triglycerides','Response to corticosteroid therapy'],
  expl:'Minimal change nephrotic syndrome usually preserves kidney function, with proteinuria, edema, hyperlipidemia, and steroid responsiveness.',
  note:'Twin at p.1564 (unanswered) matches verbatim. Highlighted option is C "Abnormal kidney function tests" = index 2. Reprint-map fold candidate: p.1565 ~ pedep2-ren-38 -- recorded here, not adjudicated (no House correspondence listed for this page).' },

{ n:67, pr:67, p:1567, key:4,
  stem:'Which clinical feature strongly supports the diagnosis of asthma?',
  opts:['Daytime cough','Finger clubbing','Peak-flow variability diary','Persistent moist cough','The presence of symptoms between coughs and colds'],
  expl:'Persistent symptoms, including between episodes of cough, strongly support asthma rather than transient coughs from viral infections.',
  note:'Twin at p.1566 (unanswered) matches verbatim. Highlighted option is E "The presence of symptoms between coughs and colds" = index 4.' },

{ n:68, pr:68, p:1569, key:2,
  stem:'A 10-year-old boy complains of nocturnal and exertional cough for one year. What is the best diagnostic test?',
  opts:['Chest X-ray','Chest CT','Spirometry','ABG','Bronchoscopy'],
  expl:'Spirometry assesses lung function and airflow obstruction, which is crucial for diagnosing asthma in school-age children. Imaging or bronchoscopy is only needed if alternative diagnoses are suspected.',
  note:'Twin at p.1568 (unanswered) matches verbatim. Highlighted option is C "Spirometry" = index 2.' },

{ n:69, pr:69, p:1571, key:3,
  stem:'Which is an essential aspect in the management of acute lymphoblastic leukemia (ALL) in children?',
  opts:['Iron therapy','Folic acid supplementation','Anticoagulants','Intrathecal chemotherapy','Bone marrow radiation'],
  expl:'ALL can infiltrate the CNS, so intrathecal chemotherapy is essential to prevent or treat CNS leukemia. Supportive therapies like iron or folic acid are not primary treatments, and bone marrow radiation is rarely first-line.',
  note:'Twin at p.1570 (unanswered) matches verbatim. Highlighted option is D "Intrathecal chemotherapy" = index 3.' },

{ n:70, pr:70, p:1573, key:2,
  stem:'A 14-year-old girl attends clinic as she is concerned about her height. She is on the 9th centile for height. On examination, she has not yet developed secondary sexual characteristics, she has a square-shaped chest, webbing of the neck, and short 4th metacarpals. What is the likely cause for her short stature?',
  opts:['Hypothyroidism','Constitutional short stature','Turner syndrome','Growth hormone deficiency','Russell–Silver syndrome'],
  expl:'All of the above are causes of short stature; however, failure to develop secondary sexual characteristics in combination with the dysmorphic features mentioned suggests Turner syndrome.',
  note:'Twin at p.1572 (unanswered) matches verbatim. Highlighted option is C "Turner syndrome" = index 2. "9th centile" and "4th metacarpals" confirmed on native. Reprint-map overlap to RECORD only: p.1573 ~ House pedhd-gen-19 -- not an ep2-internal fold candidate, no pedep2 id listed for this page.' },

{ n:71, pr:71, p:1575, key:3,
  stem:'Sunil, a 3-month-old infant, presents with breathlessness and sweating on feeding. He has had several chest infections. You suspect heart failure. Which of the following is most likely to be correct regarding his heart failure?',
  opts:['Hepatomegaly is not a common feature at this age','It is caused by Eisenmenger syndrome','It is due to left heart obstruction','It is due to a left-to-right shunt','It is due to an increase in right-to-left shunt'],
  expl:'After the first week of life, progressive heart failure is most likely due to a left-to-right shunt, most often from a ventricular septal defect.',
  note:'Twin at p.1574 (unanswered) matches verbatim. Highlighted option is D "It is due to a left-to-right shunt" = index 3. Reprint-map overlap to RECORD only: p.1575 ~ House pedhd-card-3 -- no pedep2 id listed for this page, not an ep2-internal fold candidate.' },

{ n:72, pr:72, p:1577, key:1,
  stem:'Which of the following is a potential complication of Fallot’s tetralogy?',
  opts:['Pulmonary hypertension','Cerebrovascular accidents','Recurrent pneumonia','Eisenmenger syndrome'],
  expl:'It is important to recognize hypercyanotic spells, as they may lead to myocardial infarction, cerebrovascular accidents, and even death if left untreated. They are characterized by a rapid increase in cyanosis, usually associated with irritability or inconsolable crying because of severe hypoxia and breathlessness, followed by pallor due to tissue acidosis. On auscultation, there is a very short murmur or no murmur during a spell.',
  note:'Only 4 options printed (A-D), no E -- confirmed on both twin (p.1576, unanswered, also 4 options) and answered page. Highlighted option is B "Cerebrovascular accidents" = index 1.' },

{ n:73, pr:73, p:1579, key:0,
  stem:'Which of the following is considered a positive Kernig’s sign?',
  opts:['With the child lying supine and with the hips and knees flexed, there is back pain on extension of the knee','Flexion of the neck with the child supine causes flexion of the knees and hips','With the child lying supine and with the hips and knees extended, there is back pain on flexion of the knee','Extension of the neck with the child supine causes flexion of the knees and hips'],
  expl:'Meningeal irritation signs: Brudzinski sign: Flexion of the neck with the child supine causes flexion of the knees and hips. Kernig sign: With the child lying supine and with the hips and knees flexed, there is back pain on extension of the knee.',
  note:'Only 4 options printed (A-D), no E -- confirmed on both twin (p.1578, unanswered, also 4 options) and answered page. Highlighted option is A = index 0. Printed box lists the two signs as two bulleted lines (pink circle markers); rendered here as sentences separated by a period, wording verbatim.' },

{ n:74, pr:74, p:1581, key:1,
  stem:'A 20-month-old infant presents with inability to walk unsupported. He can use both his hands well. Physical examination was otherwise normal. Which of the following is the likely disorder?',
  opts:['Hemiplegia','Diplegia','Quadriplegia','Dyskinesia'],
  expl:'Hemiplegia: Paralysis of one side of the body (right or left limbs). Diplegia: Paralysis of the lower part of the body (lower limbs). Quadriplegia: Paralysis of all four limbs (upper and lower). Dyskinesia: Involuntary, uncontrolled movements, often more evident with active movement or stress.',
  note:'Only 4 options printed (A-D), no E -- confirmed on both twin (p.1580, unanswered, also 4 options) and answered page. Highlighted option is B "Diplegia" = index 1. Printed box is four bulleted lines (pink circle markers); rendered here as sentences, wording verbatim.' },

{ n:75, pr:75, p:1583, key:2,
  stem:'Which of the following is an example of a disorder that is inherited as an X-linked recessive disorder?',
  opts:['Galactosaemia','Thalassaemia','Glucose-6-phosphate dehydrogenase deficiency','Otosclerosis','Achondroplasia'],
  expl:'Examples of X-linked recessive disorders include: Colour blindness (red–green). Duchenne and Becker muscular dystrophies. Fragile X syndrome. Glucose-6-phosphate dehydrogenase deficiency. Haemophilia A and B. Hunter syndrome (mucopolysaccharidosis II).',
  note:'Twin at p.1582 (unanswered) matches verbatim. Highlighted option is C "Glucose-6-phosphate dehydrogenase deficiency" = index 2. Printed box has a red title line "Examples of X-linked recessive disorders include:" followed by six bulleted items (pink circle markers); rendered here as sentences, wording verbatim, roman numeral "II" in "mucopolysaccharidosis II" confirmed on native.' },

{ n:76, pr:76, p:1585, key:0,
  stem:'Which of the following is the most common cause of anaemia in school-age children?',
  opts:['Iron deficiency anaemia','Hereditary spherocytosis','Glucose-6-phosphate dehydrogenase deficiency','Sickle cell disease','β-Thalassaemia'],
  expl:'Iron deficiency anaemia is the most common cause of anaemia in school-age children.',
  note:'Twin at p.1584 (unanswered) matches verbatim. Highlighted option is A "Iron deficiency anaemia" = index 0. Greek letter β in option E confirmed on native.' },

{ n:77, pr:77, p:1587, key:2,
  stem:'Which of the following is the most ideal insulin regimen for an 8-year-old child recently diagnosed with type 1 diabetes mellitus, who has regular meals a day?',
  opts:['Once daily long-acting insulin','Short-acting insulin 3 times daily','Basal bolus','Intermittent-acting insulin every 12 hours','Premixed insulin every 12 hours'],
  expl:'The most ideal insulin regimen for children with type 1 diabetes mellitus is the basal bolus insulin regimen.',
  note:'Twin at p.1586 (unanswered) matches verbatim. Highlighted option is C "Basal bolus" = index 2. "3 times daily" and "every 12 hours" confirmed on native.' },

{ n:78, pr:78, p:1589, key:3,
  stem:'Rosette can build a three-cube tower and can point to her nose. At what age would one expect that child to achieve the milestones described in this scenario (median age)?',
  opts:['6 weeks','6 months','8 months','18 months','12 months'],
  expl:'By 18 months, a child can usually build a small tower of bricks and can point to several parts of the body.',
  note:'Twin at p.1588 (unanswered) matches verbatim. Highlighted option is D "18 months" = index 3. Reprint-map fold candidate: p.1589 ~ pedep2-nd-4 (also House pedhd-dev-4) -- recorded here, not adjudicated. This is the first of three consecutive pages (1589, 1591, 1593) the reprint map flags as landing on pedep2-nd-4/-5/-6 in page order, the signature of a block reprinted from a body section.' },

{ n:79, pr:79, p:1591, key:4,
  stem:'Peace has just taken her first steps! At what age would one expect that child to achieve the milestones described in this scenario (median age)?',
  opts:['6 weeks','6 months','8 months','18 months','12 months'],
  expl:'One year is the median age for children to walk (a few steps) and say two to three words. These are very important milestones.',
  note:'Twin at p.1590 (unanswered) matches verbatim. Highlighted option is E "12 months" = index 4. Reprint-map fold candidate: p.1591 ~ pedep2-nd-5 (also House pedhd-dev-5) -- recorded here, not adjudicated. Second of the three-consecutive-page block (1589, 1591, 1593).' },

{ n:80, pr:80, p:1593, key:4,
  stem:'Anthony has a friend at nursery, and they enjoy playing with toy cars together. At what age would one expect that child to achieve the milestones described in this scenario (median age)?',
  opts:['6 months','12 months','18 months','24 months','36 months'],
  expl:'At 3 years, children develop interactive play and turn-taking. This may emerge slightly sooner in those who attend nursery or have siblings.',
  note:'Twin at p.1592 (unanswered) matches verbatim. Highlighted option is E "36 months" = index 4. This question is the section\'s last and my range\'s last. Reprint-map fold candidate: p.1593 ~ pedep2-nd-6 (also House pedhd-dev-6) -- recorded here, not adjudicated. Third of the three-consecutive-page block; unlike n78/n79 this question\'s option ladder is a different set of ages (6/12/18/24/36 months, not 6wk/6/8/18/12mo), so it is not the same shared-menu family as n78/n79 despite the thematic run of developmental-milestone vignettes.' }

];
