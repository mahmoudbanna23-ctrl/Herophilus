/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part1.pdf - MODEL TRAINING EXAM 2, half B
   Rows n9, n10, n11, n13, n14, n15, n16, n17 (8 entries).
   n12 is NOT drafted here: p.1898 reprints live pedep-mf2-41 word for word, and
   reprint-s15-pd-ep.js has already extended that live entry's source with this
   exam's page. Drafting it here would create a duplicate.
   The splicer strips this header.
   =========================================================================== */

{ id: 'pedep-tr2-9',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'A 25-day-old healthy full-term, developed jaundice on the 5th day of life, with a total serum bilirubin (TSB) level of 6 mg/dL increasing to 13 mg/dL; by the 10th day, TSB is now 13 mg/dL, with a direct bilirubin of 0.2 mg/dL. All other investigations are normal.\nWhat is the most likely diagnosis?',
  options: [
    'Physiological jaundice',
    'Biliary atresia',
    'Breast milk jaundice',
    'TORCH infection',
    'Neonatal hemolytic disease due to Rh incompatibility'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Jaundice appears after the 5th day, persists but baby is otherwise well, indirect bilirubin predominates.\n\n---\n\n`8) COMMON PROBLEMS IN THE TERM NEWBORN.txt` describes "moderate unconjugated hyperbilirubinemia for 6-12 weeks in a thriving breastfed infant without evidence of hemolysis, hypothyroidism, or other disease" as strongly suggestive of breast-milk jaundice, with unconjugated hyperbilirubinemia in breastfed infants persisting "until 2-3 months of age." This baby is 25 days old, still visibly jaundiced, otherwise entirely healthy, and the direct bilirubin is only 0.2 mg/dL out of a total of 13 -- essentially all of it is unconjugated -- which is exactly the picture the lecture describes.\n\n**Why the other four fail.** *Physiological jaundice* (A) is defined by the same lecture as jaundice that "resolves by 1 week in the fullterm infant" -- this baby is still jaundiced well past that window, at 25 days, which is too prolonged for the physiological pattern even though the onset after 24 hours and the biochemical trend both look otherwise unremarkable. *Biliary atresia* (B) is a *conjugated* hyperbilirubinemia -- the lecture notes conjugated jaundice appears "in some congenital infections, intrahepatic cholestasis, or extrahepatic obstruction of the biliary tract" -- and a direct bilirubin of only 0.2 mg/dL rules that pattern out here. *TORCH infection* (D) also produces a conjugated picture in a baby who is usually otherwise unwell (hepatosplenomegaly, growth restriction), not an isolated unconjugated hyperbilirubinemia in a baby with every other investigation normal. *Rh incompatibility* (E) is a haemolytic, antibody-mediated process that the same lecture places among the causes of pathological jaundice presenting early, "before 24 hours of age," with evidence of haemolysis on work-up -- neither the timing nor "all other investigations are normal" fits that mechanism here.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Isolated unconjugated hyperbilirubinemia persisting past two to three weeks in an otherwise well, thriving breastfed infant with every other investigation normal is breast milk jaundice -- distinct from physiological jaundice (resolves by one week), biliary atresia and TORCH infection (both conjugated), and Rh incompatibility (early-onset, haemolytic).',
  source: 'Pediatrics endpoint part1.pdf p.1892'
},

{ id: 'pedep-tr2-10',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'infection-rash',
  stem: 'A 15-year-old boy develops repetitive attacks of myoclonic jerks not associated with loss of consciousness. He has been experienced poor academic experience, irritability, reduced attention span. He has a history of measles infection at the age of 5 years.\nWhat is the MOST likely diagnosis?',
  options: [
    'Brain tumor',
    'Encephalitis',
    'Myoclonic seizure',
    'Progressive rubella panencephalitis',
    'Sub-acute sclerosing panencephalitis (SSPE)'
  ],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> Progressive myoclonic jerks, cognitive decline years after measles → subacute sclerosing panencephalitis.\n\n---\n\n`infectious diseases causing maculopapular rash.txt` names this exact long-term complication of measles directly: "Subacute Sclerosing Panencephalitis (SSPE) is a rare (1 in 10,000-100,000), fatal, progressive brain degeneration occurring years after infection." This boy had measles at age 5 and now, ten years later at 15, presents with the SSPE picture -- repetitive myoclonic jerks without loss of consciousness, together with declining academic performance, irritability and reduced attention span, the behavioural and cognitive deterioration that precedes or accompanies the myoclonus in this progressive, delayed measles complication.\n\n**Why the other four fail.** *Brain tumor* (A) can cause focal neurological decline, but nothing here (a remote measles history, symmetric myoclonic jerks, global cognitive and behavioural decline rather than a focal deficit) points specifically to a mass lesion. *Encephalitis* (B) is the same lecture\'s **acute** measles complication ("1 in 1,000 cases," occurring during or shortly after the acute illness) -- it does not fit a presentation appearing a full decade after the original infection. *Myoclonic seizure* (C) names only the movement itself, not the underlying disease process driving it, and does not account for the progressive cognitive decline or the specific link to remote measles. *Progressive rubella panencephalitis* (D) is the analogous late, progressive neurological deterioration described in the same lecture, but as a complication of **congenital rubella syndrome**, not of measles infection acquired at age 5 -- this option is the "wrong virus" distractor, testing whether the two delayed panencephalitides get confused with one another.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Myoclonic jerks with progressive cognitive and behavioural decline appearing years after a childhood measles infection is subacute sclerosing panencephalitis (SSPE) -- distinct from acute measles encephalitis, a generic myoclonic seizure label, a brain tumour, and progressive rubella panencephalitis, which is the same late picture but follows congenital rubella, not measles.',
  source: 'Pediatrics endpoint part1.pdf p.1894'
},

{ id: 'pedep-tr2-11',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'A 21-day-old breastfed boy (3.8 kg) presented with jaundice since day seven of life. Mother\'s blood is O–ve, father\'s blood is A+ve, total serum bilirubin (TSB) 13 mg/dL (indirect 12 mg/dL, direct 1 mg/dL), vital signs and primitive reflexes are normal.\nWhat is your best action in regard to the following options?',
  options: [
    'Serial TSB monitoring',
    'Start phototherapy immediately',
    'Double-volume exchange transfusion',
    'Administration of intravenous immunoglobulin',
    'Cessation of breast feeding and start bottle feeding'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Stable breastfed infant with indirect hyperbilirubinemia and normal reflexes → physiological/breast milk jaundice, just monitor.\n\n---\n\n`8) COMMON PROBLEMS IN THE TERM NEWBORN.txt` places this baby squarely in the reassuring category: vital signs and primitive reflexes are normal (no sign of acute bilirubin encephalopathy, which the lecture describes as beginning with "lethargy, poor feeding" and "irritability, high-pitched cry"), the bilirubin is overwhelmingly indirect (12 of 13 mg/dL), and onset at day seven is well past the pathological "before 24 hours" window the lecture flags for haemolytic disease. A TSB of 13 mg/dL in a thriving, neurologically normal 21-day-old breastfed infant is exactly the picture the lecture describes as "moderate unconjugated hyperbilirubinemia... in a thriving breastfed infant without evidence of hemolysis" -- serial monitoring, not active intervention, is the safe course while the trend is watched.\n\n**Why the other four fail.** *Immediate phototherapy* (B) is reserved for a TSB that is close to the age- and risk-adjusted treatment threshold; the lecture\'s own criterion is that "phototherapy is started electively when the TSB is approximately 6 mg/dL lower than the predicted exchange level" -- nothing in this stable, well infant\'s picture places 13 mg/dL near that threshold. *Double-volume exchange transfusion* (C) is reserved, per the same lecture, for "TSB above 30 mg/dL," signs of encephalopathy, or failure of intensive phototherapy to lower the level -- none of which applies to a well infant at 13 mg/dL. *Intravenous immunoglobulin* (D) is specifically indicated in isoimmune haemolytic disease (the lecture gives Rh-isoimmunisation as the example) to reduce the need for exchange transfusion -- there is no haemolysis here, and the blood-group mismatch alone, without a positive Coombs test or evidence of ongoing haemolysis, does not establish that mechanism. *Cessation of breastfeeding* (E) is not the first move in a stable, thriving infant -- the lecture\'s own advice for inadequate intake is to increase feeding frequency and add lactation support, reserving formula supplementation for infants who are not thriving, which this baby, with normal vitals and reflexes, is not.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'A stable, neurologically normal breastfed infant with a predominantly indirect TSB of 13 mg/dL beginning after the first week of life is managed with serial monitoring, not phototherapy, exchange transfusion, IVIG, or cessation of breastfeeding -- each of those is reserved for a more severe or haemolytic picture this vignette does not show.',
  source: 'Pediatrics endpoint part1.pdf p.1896'
},

{ id: 'pedep-tr2-13',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'nutrition-vit',
  stem: 'When examining an infant, you note bilateral genu varum, widening of her wrists, and frontal bossing. The mother states she noticed her child\'s bow legs when the child started walking and it has been getting worse with time.\nWhat additional possible clinical features would you expect in this patient?',
  options: [
    'Clinodactyly',
    'Delayed posterior fontanelle closure',
    'Harrison sulcus',
    'Microcephaly'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Bow legs, wrist widening, frontal bossing = rickets. Harrison sulcus (rib cage deformity) is another expected feature.\n\n---\n\n`17) Vitamin D Defficiency Rickets(1).txt` lists genu varum ("bowlegs... due to deformed tibia and fibula"), epiphyseal widening at the wrists ("best felt at the wrists and ankles") and frontal/parietal bossing together as classic rachitic bony changes, and lists "Harrison\'s sulcus" among the same set of thoracic findings -- "a horizontal groove corresponding to the line of attachment of the diaphragm with flaring of the costal margins below," caused by "inward pull by the diaphragm on the soft rib cage." Since this infant already shows three of the lecture\'s rachitic signs, Harrison\'s sulcus is the next feature the same underlying vitamin D deficiency and bone softening would be expected to produce.\n\n**Why the other three fail.** *Clinodactyly* (A) is a dysmorphic finger curvature unrelated to rickets, seen instead in various chromosomal and syndromic conditions -- it is not on this lecture\'s rachitic feature list. *Delayed posterior fontanelle closure* (B) reverses the lecture\'s own finding -- rickets delays the **anterior** fontanelle\'s closure ("anterior fontanel is wider and its closure is delayed than normal"), not the posterior, which closes early in infancy regardless. *Microcephaly* (D) is the opposite of what rickets produces -- the lecture states plainly that "the head is larger than normal and may remain so throughout life" in rickets, driven by the same osteoid overgrowth that causes the bossing already seen here.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Genu varum, wrist widening and frontal bossing are rachitic signs that predict Harrison\'s sulcus (diaphragmatic pull on the soft rib cage) as a further feature -- not clinodactyly, delayed posterior fontanelle closure, or microcephaly, since rickets in fact widens the anterior fontanelle and enlarges, not shrinks, the head.',
  source: 'Pediatrics endpoint part1.pdf p.1900'
},

{ id: 'pedep-tr2-14',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'nutrition-vit',
  stem: 'In 18-month-old boy presenting with delayed walking is exclusively breast-fed with no history of intake of any vitamins or minerals. Examination revealed a distended abdomen and wrist thickening. Which of the following investigations would be correct in this case?',
  options: [
    'Low serum calcium, phosphorus, and alkaline phosphatase',
    'Normal serum calcium, phosphorus, and alkaline phosphatase',
    'Normal phosphorus, low serum calcium, and high alkaline phosphatase',
    'Normal calcium, low serum phosphorus, and high alkaline phosphatase'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Classic lab finding in nutritional rickets (vitamin D deficiency).\n\n---\n\n`17) Vitamin D Defficiency Rickets(1).txt` gives this exact biochemical triad for rickets: "Serum calcium: normal due to compensatory hyperparathyroidism," "Serum phosphate: Low... due to compensatory hyperparathyroidism," and "Serum alkaline phosphatase activity is high." This exclusively breastfed 18-month-old with no vitamin or mineral intake, delayed walking (rachitic hypotonia), a distended abdomen (the hypotonic "rachitic potbelly") and wrist thickening (epiphyseal widening, the lecture\'s "Marfan sign") is textbook nutritional rickets from prolonged vitamin D deficiency. Low vitamin D reduces intestinal calcium absorption, which triggers secondary hyperparathyroidism; PTH mobilises bone calcium and wastes phosphate renally, keeping serum calcium normal at the cost of low phosphate, while the accompanying rise in osteoblastic activity raises alkaline phosphatase.\n\n**Why the other three fail.** *Low calcium, phosphorus and alkaline phosphatase* (A) describes a hypoparathyroid pattern, the opposite of rickets\' compensated picture -- the lecture is explicit that calcium stays normal and alkaline phosphatase rises, not falls, with active rachitic bone turnover. *Normal calcium, phosphorus and alkaline phosphatase* (B) would mean no biochemical derangement at all, inconsistent with a child already showing deforming, symptomatic rickets. *Normal phosphorus, low calcium, high alkaline phosphatase* (C) swaps which electrolyte is deranged -- it is phosphate, not calcium, that the lecture identifies as low in rickets, precisely because secondary hyperparathyroidism\'s job is to defend the calcium level at phosphate\'s expense.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Nutritional rickets from prolonged, unsupplemented exclusive breastfeeding produces normal serum calcium (defended by secondary hyperparathyroidism), low serum phosphate, and high alkaline phosphatase -- not a low-calcium, low-phosphate, or biochemically normal pattern.',
  source: 'Pediatrics endpoint part1.pdf p.1902'
},

{ id: 'pedep-tr2-15',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'nutrition-feed',
  stem: 'A 3-week-old baby girl is brought to her pediatrician for a checkup. She was born at term with a birth weight of 3400 g. The infant is exclusively breast-fed, nurses every 2 to 3 hours, and has 6 to 8 wet diapers and 2 to 4 seedy stools daily. At the time of her examination, she weighs 3450 g. Results of the physical examination are normal.\nThe most appropriate next step is:',
  options: [
    'Continue breast feeding only',
    'Continue breast feeding with supplemental cow\'s milk formula between feeds',
    'Continue breast feeding with supplemental soy formula between feeds',
    'Continue breast feeding and add rice cereal to her diet'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Baby is thriving, normal growth, so no supplementation needed.\n\n---\n\n`15.2) Infant Feeding.txt` lists the "criteria of adequate breast-feeding" this baby meets point for point: nursing frequently (every 2-3 hours fits "sleeps well 2-4 hours after nursing"), "good amount of urine (6 or more full diapers per day)" -- this infant has 6 to 8 -- and "good motions," acidic, seedy stools whose frequency the lecture says "varies with age," matching the 2 to 4 stools described here, together with a normal physical examination. Every marker of adequate intake is present, so the appropriate next step is simply to continue exclusive breastfeeding.\n\n**Why the other three fail.** *Supplemental cow\'s milk formula* (B) and *supplemental soy formula* (C) are both unnecessary interventions for an infant who already meets every one of the lecture\'s criteria for adequate breastfeeding -- the lecture reserves supplementation for infants meeting its "criteria of insufficient breast feeding" (inadequate weight gain, inadequate urine and stools, fretfulness), none of which this baby shows. *Adding rice cereal* (D) is premature regardless of feeding adequacy -- the same lecture places the start of complementary feeding "after 6 months" of age (180 days), not at three weeks, so solids have no place in this baby\'s diet yet.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'An exclusively breastfed 3-week-old meeting every criterion for adequate intake (frequent feeds, 6 or more wet diapers daily, normal stooling, normal exam) needs no formula supplementation and, separately, no complementary solids -- those begin only after 6 months regardless of feeding adequacy.',
  source: 'Pediatrics endpoint part1.pdf p.1904'
},

{ id: 'pedep-tr2-16',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'puberty',
  stem: 'The parents of a 14-year-old boy are concerned about his short stature and lack of sexual development. He had a normal growth pattern, although he was always shorter than children of his age. Examination revealed height at the 5th percentile, upper segment to lower segment ratio is 0.98. A small number of fine axillary and pubic hairs are present.\nWhich of the following is the most appropriate action?',
  options: [
    'Measure pituitary gonadotropin',
    'Measure serum testosterone',
    'Obtain a CT scan of the pituitary gland',
    'Reassure the parents'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> This is constitutional delay of growth and puberty; reassurance is appropriate.\n\n---\n\n`14) Puberty.txt` names constitutional delay as "the most common cause" of delayed puberty (defined in the same lecture as failure of any pubertal feature "by 14 yrs of age in males") and describes it as a "normal variant" whose features include a "height at or below the third centile," a "normal growth pattern," "delayed bone age," and, critically, "normal final adult height" that "need[s] no treatment." This boy fits that picture closely: lifelong short stature with an otherwise normal growth trajectory, a proportionate build (an upper-to-lower segment ratio of 0.98 is essentially the normal prepubertal ratio, arguing against a disproportionate skeletal dysplasia), and fine pubic and axillary hair already emerging -- evidence that his hypothalamic-pituitary-gonadal axis is beginning to activate on its own, spontaneous timeline rather than being arrested altogether.\n\n**Why the other three fail.** *Measuring pituitary gonadotropin* (A) and *measuring serum testosterone* (B) are the appropriate next steps for suspected hypogonadotropic or hypergonadotropic hypogonadism -- pathological causes the same lecture separates from constitutional delay -- but the early, spontaneous appearance of pubic and axillary hair here argues against an arrested axis needing that work-up. *A CT scan of the pituitary gland* (C) is reserved for suspected hypothalamic-pituitary structural pathology, a considerable overinvestigation for a boy whose picture -- lifelong proportionate short stature and puberty already beginning on its own -- fits the lecture\'s most common and benign cause.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Lifelong, proportionate short stature (normal upper-to-lower segment ratio) with early, spontaneously emerging pubic and axillary hair in a 14-year-old boy is constitutional delay of growth and puberty, the commonest cause of delayed puberty, needing reassurance rather than gonadotropin or testosterone measurement or pituitary imaging.',
  source: 'Pediatrics endpoint part1.pdf p.1906'
},

{ id: 'pedep-tr2-17',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'allergy',
  stem: 'You have just given a 10-year-old boy an injection of pollen extract as prescribed by his allergist. The boy starts to complain about nausea and chest tightness. You note that his face is flushed and his voice sounds muffled and strained.\nWhich of the following is the first priority in managing this episode of anaphylaxis?',
  options: [
    'Administration of corticosteroids',
    'Administration of oxygen',
    'Endotracheal intubation',
    'IM injection of 1:1000 epinephrine'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> First-line in anaphylaxis is intramuscular epinephrine.\n\n---\n\n`27)Anaphylaxsis.txt` sets out hospital management in a clear order: after rapid airway/breathing/circulation assessment and positioning, "the main therapy is: inject epinephrine (adrenaline) intramuscularly in the mid-outer thigh," with oxygen, inhaled salbutamol, IV fluids, antihistamines and steroids all listed afterward as "additional treatments." This boy\'s picture after his allergen injection -- nausea, chest tightness, facial flushing, and a muffled, strained voice pointing to laryngeal swelling -- is a systemic anaphylactic reaction, and IM epinephrine is the immediate, first-priority step that reverses the underlying vasodilation, bronchospasm and airway oedema directly, ahead of any supportive measure. The specific 1:1000 (1 mg/mL) IM concentration named in the option is standard resuscitation practice for this route -- *not spelled out in the cached lecture, which names the drug, route and injection site but not the dilution; not taken from the course material.*\n\n**Why the other three fail.** *Corticosteroids* (A) appear only among the lecture\'s "additional treatments" -- useful for limiting a delayed, biphasic reaction, but too slow in onset to be the first priority in an evolving airway emergency. *Oxygen* (B) is likewise an additional treatment in the same list; it supports oxygenation but does not reverse the anaphylactic process the way epinephrine does, so it follows rather than precedes it. *Endotracheal intubation* (C) is reserved for actual or imminent complete airway obstruction -- this boy is still speaking, if strained and muffled, and reaching for intubation before the first-line drug that may itself resolve the airway swelling skips the step the lecture places first.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'In anaphylaxis with early airway compromise (muffled voice, flushing, chest tightness), intramuscular epinephrine in the mid-outer thigh is the first-priority treatment, given before oxygen, corticosteroids, or intubation, all of which are secondary or reserved for more advanced compromise.',
  source: 'Pediatrics endpoint part1.pdf p.1908'
},
