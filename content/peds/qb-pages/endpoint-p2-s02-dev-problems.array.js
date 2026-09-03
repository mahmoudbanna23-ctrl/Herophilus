/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part2.pdf - SECTION 2: "Developmental problems"
   Verbatim staging record. PDF pages 76-154; PDF page = printed page, offset zero.
   Merged from endpoint-p2-s02-dev-problems.part-A.js + endpoint-p2-s02-dev-problems.part-B.js by merge-parts-ep2.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP2_S02_STAGED = [

/* Peds ENDPOINT PART 2 — Section 2 "Developmental problems", PART A (n:1-15)
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf, pp.76-154.
   Staged from native slide JPEGs at <SCRATCH>\ep2-index\native\pNNNN.jpeg (800x450,
   this book's resolution ceiling) plus unanswered twins for a second reading.
   OCR at content\peds\qb-pages\ocr\ep2\ was NOT opened during this pass — search index only.
   This is HALF A of section 2 (my range: answered pp.97-125, n:1-15). Half B (pp.127-153,
   n:16-29) is another agent's file. Bare object literals, one blank line between, no commas,
   no array wrapper — merge-parts-ep2.js restores those. node --check on this file WILL fail
   (reads as labelled blocks) — that failure is expected and meaningless; validate with
   tools/bank-harness/check-part-ep.js instead.

   p.87 CHECKED FIRST, per task prompt: it is a NOTES/SUMMARY slide, "Types of CP" (cerebral
   palsy), highlighted yellow only on its title, with lettered sub-bullets B. Dyskinetic CP,
   C. Ataxic CP, D. Mixed CP — clinical bullet points, not question options, no stem, no
   "what is the diagnosis"-type prompt. NOT staged. n:1-15 in this file map to answered pages
   97, 99, 101, 103, 105, 107, 109, 111, 113, 115, 117, 119, 121, 123, 125 as given, unshifted.

   Page-by-page walk (printed number pr / page p), filled in as staged:
   n:1  pr:1  p:97
   n:2  pr:2  p:99
   n:3  pr:3  p:101
   n:4  pr:4  p:103
   n:5  pr:5  p:105
   n:6  pr:6  p:107
   n:7  pr:7  p:109
   n:8  pr:8  p:111
   n:9  pr:9  p:113
   n:10 pr:10 p:115
   n:11 pr:11 p:117
   n:12 pr:12 p:119
   n:13 pr:13 p:121
   n:14 pr:14 p:123
   n:15 pr:15 p:125
   Boundary proof: p.126 rendered one page past range, printed pr:16 "Ronaldo...Ataxic..." on
   the same movement-disorder ladder as n:12-15, unanswered — confirms n:16 belongs to the other
   agent's part-B file with no anomaly at the split.
*/

{ n:1, pr:1, p:97, key:2,
  stem:'Jonathan is 4 years old and lives in a small village in southern England. He attends a paediatric outpatient clinic with his grandmother, who is his legal guardian. She is concerned that he only seems to like playing with his toy train and insists on watching the same DVD every night before bed. He attends nursery where he plays with toys but not with other children. His behaviour can be very difficult to manage at times. He does not say any words, whereas the grandmother’s children were speaking in sentences at his age. On examination, you notice he does not make eye contact and pushes his toy train back and forth on the floor. The rest of his examination is normal. What is the most likely diagnosis?',
  opts:['Asperger syndrome','Attention deficit hyperactivity disorder','Autism spectrum disorder','Developmental coordination disorder (dyspraxia)','Expressive language disorder'],
  expl:'Jonathan shows impaired social interaction, language delay, repetitive play, and restricted interests, which are classic signs of autism. Lack of eye contact and solitary play reinforce the diagnosis.',
  note:'p.97 answered vs p.96 unanswered twin, stem and options identical word-for-word on both. Key = option C "Autism spectrum disorder", highlighted yellow, boxed explanation printed to the right of the options, transcribed verbatim. index.json flagged options-differ on this page — false positive, both printings identical.' },

{ n:2, pr:2, p:99, key:2,
  stem:'At what age does autism spectrum disorder usually become evident?',
  opts:['0–12 months','12–24 months','2–4 years','4–8 years','Above 8 years'],
  expl:'Autism typically becomes noticeable between 2–4 years of age when delays in speech, social interaction, and repetitive behaviors emerge. Subtle signs may be present earlier but often become more apparent in toddlerhood.',
  note:'p.99 answered vs p.98 unanswered twin, identical word-for-word. Key = option C "2–4 years", highlighted yellow, boxed explanation below options, transcribed verbatim. index.json flagged options-differ — false positive. Reprint candidate ≡ House pedhd-devp-2 (recorded only, not folded).' },

{ n:3, pr:3, p:101, key:0,
  stem:'At what age would you expect the clinical features of spastic bilateral cerebral palsy to become evident?',
  opts:['0–12 months','12–24 months','2–4 years','4–8 years','Above 8 years'],
  expl:'Signs of spastic cerebral palsy, such as delayed motor milestones and increased tone, often appear within the first year of life. Parents may notice stiffness and abnormal movement patterns early on.',
  note:'p.101 answered vs p.100 unanswered twin, identical word-for-word. Key = option A "0–12 months", highlighted yellow, boxed explanation below options, transcribed verbatim. Shares the identical five-option age ladder with n:2; discriminating token here is "spastic bilateral cerebral palsy" vs n:2\'s "autism spectrum disorder" — recorded as a shared menu, not folded. Reprint candidate ≡ House pedhd-devp-3 (recorded only, not folded).' },

{ n:4, pr:4, p:103, key:3,
  stem:'Fortuna is an 8-month-old Black African girl born at term. She is seen in the paediatric outpatient department. She can roll over but does not crawl. She says "dada," but says it to everyone, not just her father. She reaches and grasps objects with her left hand only and puts objects in her mouth. She smiles but is not able to wave bye-bye. Which aspect of her development is of most concern?',
  opts:['Does not wave bye-bye','Inability to crawl','Inability to use sounds discriminately to parents','Left-hand preference'],
  expl:'Consistent hand preference before 18 months may suggest early hemiparesis and neurological injury. Most infants use both hands equally at this age.',
  note:'p.103 answered vs p.102 unanswered twin, identical word-for-word, both print only FOUR options (A-D), no E. Key = option D "Left-hand preference", highlighted yellow, boxed explanation below options, transcribed verbatim. index.json flagged options-differ on this page — checked, both printings show the same 4 options; false positive (the flag likely tripped on the non-5 count, not a genuine mismatch).' },

{ n:5, pr:5, p:105, key:0,
  stem:'Gloria is a 19-month-old girl who presents to you in primary care. Her health visitor is concerned because she is still only babbling and says no distinct words. She is able to walk, scribble with crayons, and feed herself with a spoon. What is the most appropriate first action?',
  opts:['Hearing test','Assessment by a team specializing in autism spectrum disorders','Reassure the health visitor','Refer to an ear, nose, and throat surgeon','Refer to a paediatrician for a full developmental assessment'],
  expl:'A child who babbles but has no distinct words should first be evaluated for hearing loss, as it is a common and reversible cause of speech delay.',
  note:'p.105 answered vs p.104 unanswered twin, identical word-for-word. Key = option A "Hearing test", highlighted yellow, boxed explanation below options, transcribed verbatim. Reprint candidate ≡ House pedhd-devp-5 (recorded only, not folded).' },

{ n:6, pr:6, p:107, key:0,
  stem:'Jenny is an 8-week-old girl born preterm at 35 weeks\' gestation. She is seen by her GP for a routine review. Her mother is concerned that she does not smile. Her gross motor development appears normal, and she has started to make loud noises. However, she does not follow a face or colourful ball. The appearance of one of her eyes is shown in the opposite figure (not included). The other eye appears similar. She has no other medical problems. What is the likely underlying diagnosis?',
  opts:['Cataract','Conjunctivitis','Corneal trauma','Retinopathy of prematurity','Vitamin A deficiency'],
  expl:'Failure to visually track and abnormal red reflex suggests congenital cataracts. Early diagnosis is essential to prevent long-term visual impairment.',
  note:'p.107 answered vs p.106 unanswered twin, identical word-for-word. Key = option A "Cataract", highlighted yellow, boxed explanation to the right of options, transcribed verbatim. NO figure is actually printed on either slide — the stem itself says "shown in the opposite figure (not included)", i.e. the source\'s own text states the figure is not included; there is nothing on the page to describe beyond that printed parenthetical. Reprint candidate ≡ House pedhd-devp-7 (recorded only, not folded).' },

{ n:7, pr:7, p:109, key:2,
  stem:'Clarissa, a cheerful 20-month-old white British girl, is referred to the child development clinic by her health visitor because she is not yet walking. She was born at term with no complications. She learned to sit without support at 10 months and can crawl, although she drags her right leg behind her. Her mother says she has always been left-handed. Examination of the right arm and leg reveals reduced power but increased tone and reflexes. Which investigation would you initially undertake to confirm the diagnosis of developmental delay in this scenario?',
  opts:['Cranial ultrasound scan','EEG','CT or MRI scan of the brain','Congenital infection screen'],
  expl:'Dragging one leg and hand preference before 2 years suggest cerebral palsy. Neuroimaging is needed to evaluate for perinatal brain injury.',
  note:'p.109 answered vs p.108 unanswered twin, identical word-for-word, both print only FOUR options (A-D), no E — confirmed on both printings, not a crop cutoff. Key = option C "CT or MRI scan of the brain", highlighted yellow, boxed explanation to the right of options, transcribed verbatim.' },

{ n:8, pr:8, p:111, key:0,
  stem:'Geoffrey is a 10-month-old Black infant referred to the child development clinic. His mother is concerned because he is slower in his development than her four other children. He can sit only if propped with cushions. He is not crawling or pulling to stand. On examination, he is hypotonic with dysmorphic features, including upslanting palpebral fissures, epicanthal folds, and a flat occiput. He also has vitiligo. He was born at term by normal vaginal delivery. He has been slow to feed. Which investigation would you initially undertake to confirm the diagnosis of developmental delay?',
  opts:['Chromosome karyotype','Creatine kinase','CT or MRI scan of the brain','Congenital infection screen'],
  expl:'Developmental delay with dysmorphic features raises suspicion for a chromosomal disorder such as Down syndrome. Karyotyping confirms the diagnosis.',
  note:'p.111 answered vs p.110 unanswered twin, identical word-for-word, both print only FOUR options (A-D), no E. Key = option A "Chromosome karyotype", highlighted yellow, boxed explanation to the right of options, transcribed verbatim. Shares two of four option items ("CT or MRI scan of the brain", "Congenital infection screen") with n:7\'s four-option investigation ladder, in different order and with different first-two items — recorded as a partial shared menu, discriminating token here is the dysmorphic/Down-syndrome presentation vs n:7\'s hemiparetic-CP presentation. Reprint candidate ≡ House pedhd-devp-8 (recorded only, not folded).' },

{ n:9, pr:9, p:113, key:3,
  stem:'Batar is a 1-week-old term baby seen in the ophthalmology clinic for cataracts. He has a head circumference of 32 cm (normal range 32.5–37 cm), a weight of 2.3 kg, mild jaundice, pallor, and moderate hepatosplenomegaly. He failed his newborn hearing test. His mother had a mild flu-like illness during pregnancy. Which investigation would you initially undertake to confirm the diagnosis?',
  opts:['Chromosome karyotype','Creatine kinase','CT or MRI scan of the brain','Congenital infection screen','Thyroid function tests'],
  expl:'Cataracts, hepatosplenomegaly, jaundice, and failed hearing test suggest congenital TORCH infection, especially CMV or rubella. A TORCH screen is essential.',
  note:'p.113 answered vs p.112 unanswered twin, identical word-for-word. Numerals "32 cm (normal range 32.5–37 cm)" and "2.3 kg" read clearly and identically off both native images, no crop needed. Key = option D "Congenital infection screen", highlighted yellow, boxed explanation to the right of options, transcribed verbatim. Shares the same option-item set as n:7/n:8\'s investigation ladders (karyotype/CK/CT-MRI/infection screen, plus thyroid function here) — recorded as a shared-family menu, discriminating token is the microcephaly + TORCH-pattern presentation. index.json flagged options-differ on this page — false positive, both printings identical.' },

{ n:10, pr:10, p:115, key:1,
  stem:'Dorcus, a 9-month-old infant, attends the clinic due to unusual movements. She has developed episodes of suddenly throwing her head and arms forward in repetitive bursts. She was able to sit and babble but has stopped doing so. Which investigation would you initially undertake to confirm the diagnosis?',
  opts:['Cranial ultrasound scan','EEG','CT or MRI scan of the brain','Congenital infection screen','Thyroid function tests'],
  expl:'The description fits infantile spasms (West syndrome), characterized by sudden flexor spasms and developmental regression. EEG is diagnostic, often showing hypsarrhythmia.',
  note:'p.115 answered vs p.114 unanswered twin, identical word-for-word. Key = option B "EEG", highlighted yellow, boxed explanation below options, transcribed verbatim. Shares 4 of 5 option items (CT/MRI, congenital infection screen, thyroid function tests, plus a fifth investigation slot) with n:9\'s ladder — option A differs ("Cranial ultrasound scan" here vs "Chromosome karyotype" in n:9) — recorded as a shared-family menu, discriminating token is the infantile-spasms/regression presentation vs n:9\'s TORCH-pattern presentation.' },

{ n:11, pr:11, p:117, key:1,
  stem:'Darren is a 3-year-old boy who has difficulty climbing stairs. He always needs support. He walked unsupported at 14 months. His development is otherwise normal. On examination, leg power is reduced, he is hypotonic, but reflexes are normal. Which investigation would you initially undertake to confirm the diagnosis?',
  opts:['Chromosome karyotype','Creatine kinase','CT or MRI scan of the brain','Congenital infection screen','Thyroid function tests'],
  expl:'Proximal weakness with hypotonia and delayed gross motor milestones suggest a muscular dystrophy. Raised CK levels support the diagnosis.',
  note:'p.117 answered vs p.116 unanswered twin, identical word-for-word. "14 months" reads clearly on both native images, no crop needed. Key = option B "Creatine kinase", highlighted yellow, boxed explanation to the right of options, transcribed verbatim. Identical five-option ladder and order to n:9 (chromosome karyotype/creatine kinase/CT-MRI/congenital infection screen/thyroid function tests) — recorded as a shared menu, discriminating token is the proximal-weakness/muscular-dystrophy presentation vs n:9\'s TORCH pattern.' },

{ n:12, pr:12, p:119, key:4,
  stem:'Moses is a 5-year-old boy who failed to attain milestones from shortly after birth. He cannot roll or talk, but he can smile. His mother reports difficulty dressing him due to stiffness. Examination shows all limbs are stiff and hyperreflexic with primitive grasp reflexes. What type of movement disorder best fits this scenario?',
  opts:['Dyskinetic','Ataxic','Spastic diplegia','Spastic hemiplegia','Spastic quadriplegia'],
  expl:'Involvement of all four limbs with increased tone and primitive reflexes indicates spastic quadriplegia, the most severe form of cerebral palsy.',
  note:'p.119 answered vs p.118 unanswered twin, identical word-for-word. Key = option E "Spastic quadriplegia", highlighted yellow, boxed explanation to the right of options, transcribed verbatim. index.json flagged options-differ on this page — false positive, both printings identical.' },

{ n:13, pr:13, p:121, key:0,
  stem:'Gerald is a 4-year-old boy born in Tanzania who had severe neonatal jaundice that was untreated. He now shows abnormal movements and postures, with asymmetrical limb responses to startle. He is hypotonic when asleep. What type of movement disorder best fits this scenario?',
  opts:['Dyskinetic','Ataxic','Spastic diplegia','Spastic hemiplegia','Spastic quadriplegia'],
  expl:'Untreated neonatal jaundice can cause kernicterus, leading to dyskinetic cerebral palsy, characterized by involuntary, writhing movements and fluctuating tone.',
  note:'p.121 answered vs p.120 unanswered twin, identical word-for-word. Key = option A "Dyskinetic", highlighted yellow and underlined, boxed explanation to the right of options, transcribed verbatim. Same five-option movement-disorder ladder and order as n:12 — recorded as a shared menu, discriminating token here is the untreated-neonatal-jaundice/kernicterus presentation vs n:12\'s stiff-quadriplegic presentation.' },

{ n:14, pr:14, p:123, key:2,
  stem:'Hassan is 3 years old, born at 26 weeks weighing 700 g. Now 10 months corrected age, he has started to walk. He can scribble and build a tower of three blocks. On examination, he walks on tiptoes and has \'scissoring\' of the legs when lifted. He can feed himself. What type of movement disorder best fits this scenario?',
  opts:['Dyskinetic','Ataxic','Spastic diplegia','Spastic hemiplegia','Spastic quadriplegia'],
  expl:'Prematurity increases risk for spastic diplegia, especially affecting the lower limbs, often presenting with toe-walking and scissoring gait.',
  note:'p.123 answered vs p.122 unanswered twin, identical word-for-word. Numerals "26 weeks", "700 g", "10 months" read clearly and identically off both native images, no crop needed. Key = option C "Spastic diplegia", highlighted yellow and underlined, boxed explanation to the right of options, transcribed verbatim. Same five-option movement-disorder ladder and order as n:12/n:13 — recorded as a shared menu, discriminating token here is the ex-preterm toe-walking/scissoring presentation.' },

{ n:15, pr:15, p:125, key:3,
  stem:'Alan is a 3-year-old boy who developed a preference for his left hand at 7 months. He sat at 9 months and walked at 20 months. When running, he holds his right arm flexed and limps on the right foot. On examination, right limbs are stiff with increased reflexes. What type of movement disorder best fits this scenario?',
  opts:['Dyskinetic','Ataxic','Spastic diplegia','Spastic hemiplegia','Spastic quadriplegia'],
  expl:'Early left-hand preference and increased tone in the right limbs indicate right-sided spastic hemiplegia, likely due to early brain injury.',
  note:'p.125 answered vs p.124 unanswered twin, identical word-for-word. Numerals "7 months", "9 months", "20 months" read clearly and identically off both native images, no crop needed. Key = option D "Spastic hemiplegia", highlighted yellow and underlined, boxed explanation below options, transcribed verbatim. Same five-option movement-disorder ladder and order as n:12/n:13/n:14 — recorded as a shared menu, discriminating token here is the early left-hand-preference/right-hemiparesis presentation. Rendered p.126 one page past range: unanswered pr:16 "Ronaldo... Ataxic..." on the SAME movement-disorder ladder — confirms the section continues into the other agent\'s file (n:16, part-B) with no boundary anomaly.' },

/* Peds ENDPOINT PART 2 — Section 2 "Developmental problems", HALF B (n:16-29)
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf, PDF pp.76-154.
   Answered pages in this half: 127,129,131,133,135,137,139,141,143,145,147,149,151,153 (14 questions).
   Read from <SCRATCH>\ep2-index\native\pNNNN.jpeg (800x450 ceiling); 300dpi crops named in note where used.
   OCR (content\peds\qb-pages\ocr\ep2\) NOT opened during this pass — used only the task prompt's
   measured page structure, per brief §4.
   n = true sequential index (16-29 here, continuing from Half A's 1-15); pr = printed number;
   p = PDF page of the ANSWERED page; key = 0-based index into opts.
   Written page-by-page, one entry appended and check-part-ep.js run after each, per brief §8a.
   Boundary proof, p154/p155 read directly: p154 is an Arabic devotional slide (dua, "Allahumma
   inni a'udhu bika...", green/red/black text on white card) closing the section; p155 is a red
   "Genetics" title banner on cream card — section 3 opens there. Matches section 1's pattern
   (closing devotional slide -> red section banner) exactly. */

{ n:16, pr:16, p:127, key:1,
  stem:'Ronaldo is a 6-year-old boy whose teacher reports concerns. He is unsteady on his feet and walks with legs wide apart. He struggles to grip a pen due to unsteadiness. What type of movement disorder best fits this scenario?',
  opts:['Dyskinetic','Ataxic','Spastic diplegia','Spastic hemiplegia','Spastic quadriplegia'],
  expl:'Wide-based gait and poor fine motor control suggest ataxic cerebral palsy, which is caused by cerebellar dysfunction.',
  note:'Native p0127.jpeg read directly, fully legible. Highlighted option is "B. Ataxic" (bold, underlined, yellow highlight) = index 1. Boxed explanation below options, unbordered box with fill, fits on page. No figure.' },

{ n:17, pr:17, p:129, key:2,
  stem:'An 8-year-old boy is referred by the educational psychologist with suspected ADHD. He struggles at school, cannot concentrate, and is restless. Which of the following would suggest a diagnosis other than ADHD?',
  opts:['Easily distracted by other children','Difficulty waiting for his turn','Symptoms only present at school','Constantly talking, often interrupting others','Fidgeting with his hands or objects while sitting still'],
  expl:'ADHD symptoms must be present in multiple settings (e.g., home and school). If limited to school, alternative causes like stress or learning difficulties should be considered.',
  note:'Native p0129.jpeg read directly, fully legible. Highlighted option is "C. Symptoms only present at school" (bold, underlined, yellow highlight) = index 2. Bordered explanation box below options, fits on page. No figure. Index flagged options-differ on this page: read stem and all 5 options carefully against layout, nothing anomalous found — false positive, as in section 1.' },

{ n:18, pr:18, p:131, key:2,
  stem:'A 4-year-old boy is referred by his nursery teacher. He has delayed speech with only a few words, struggles with imaginative play, and prefers to play alone. He becomes upset if routines change and avoids eye contact. No dysmorphic features are noted. What is the most likely diagnosis?',
  opts:['Selective mutism','Normal development','Autism','Speech delay','Fragile X'],
  expl:'Lack of imaginative play, speech delay, insistence on routines, and poor eye contact strongly suggest autism spectrum disorder.',
  note:'Native p0131.jpeg read directly, fully legible. Highlighted option is "C. Autism" (bold, underlined, yellow highlight) = index 2. Bordered explanation box below options, fits on page. No figure.' },

{ n:19, pr:19, p:133, key:3,
  stem:'An 18-month-old baby boy presents with features of spastic diplegia. While counselling the parents about cerebral palsy, which of the following statements is correct?',
  opts:['The insult usually occurs during delivery','Cerebral palsy is a disorder of motor and sensory function due to a static brain injury','Reflexes are reduced or absent','Botulinum toxin may be useful to treat spasticity','MRI scan is diagnostic'],
  expl:'Botulinum toxin is a common treatment to reduce localized muscle spasticity in children with cerebral palsy. CP is a static motor disorder, not involving progressive brain damage.',
  note:'Native p0133.jpeg read directly, fully legible. Highlighted option is "D. Botulinum toxin may be useful to treat spasticity" (bold, underlined, yellow highlight) = index 3. Bordered explanation box below options, fits on page. No figure.' },

{ n:20, pr:20, p:135, key:0,
  stem:'An 11-year-old child was found to be very restless and hyperactive in the classroom, making it difficult for the other students to concentrate. He talks excessively. He ran around the class all day long and could not sit in one place for a long time. He got very agitated when the toy in his hand was taken away. What of the following statements about the child condition is RIGHT?',
  opts:['I.Q is within the average','EEG changes are diagnostic','Is likely to improve with CNS depressant drugs','Affected children have many friends','Good school performance'],
  expl:'Children with ADHD usually have normal intelligence, but they struggle with attention, hyperactivity, and impulsivity. EEG is not diagnostic, and they often have poor peer relationships and school difficulties.',
  note:'Native p0135.jpeg read directly, fully legible. Highlighted option is "a. I.Q is within the average" (bold, underlined, yellow highlight) = index 0. Bordered explanation box is positioned to the right of the options (not below), fits on page. Index flagged options-differ on this page: options here are lettered lowercase a.-e. rather than uppercase A.-E. used in the other pages in this range; content itself checked against layout, nothing else anomalous — printed lettering-case quirk, transcribed silently per brief (typos/formatting not commented on beyond this structural note). No figure.' },

{ n:21, pr:21, p:137, key:3,
  stem:"Fatima is an 8-month-old girl who was born at term. She is seen in the pediatric outpatient department. She can roll over. She does not crawl. She can say 'dada' but says it to everyone not just her father. She reaches out and grasps objects with her left hand but not with her right and puts objects in her mouth. She smiles but is not able to wave bye-bye. Which aspect of her development is of most concern?",
  opts:['Does not wave bye-bye','Inability to crawl','Inability to use sounds discriminately to parents','Left-hand preference'],
  expl:'Hand preference before 18 months is concerning because it may suggest weakness of one side due to cerebral palsy. Crawling and waving bye-bye can be delayed normally at this age.',
  note:'Native p0137.jpeg read directly, fully legible. Only 4 options printed (a-d), no option e. Highlighted option is "d. Left-hand preference" (bold, underlined, yellow highlight) = index 3. Bordered explanation box sits beside option d, to its right, fits on page. No figure.' },

{ n:22, pr:22, p:139, key:1,
  stem:'Which of the following is NOT true about autism spectrum disorder?',
  opts:['The child may have associated comorbidities','It is usually benign with no long-term consequences','It is an impaired social interaction','There is no evidence for a link with MMR vaccine'],
  expl:'Autism is a lifelong condition with significant impact on social interaction and communication. It is not benign, and comorbidities like epilepsy and intellectual disability are common.',
  note:'Native p0139.jpeg read directly, fully legible. Only 4 options printed (a-d), no option e. Highlighted option is "b. It is usually benign with no long-term consequences" (bold, underlined, yellow highlight) = index 1. Bordered explanation box below options, fits on page. No figure.' },

{ n:23, pr:23, p:141, key:4,
  stem:'The parents of an 18-month-old infant brought him concerned with delayed standing, the child recognizes his parents and can say syllables. On examination: weight 11 kg, length 83 cm, skull circumference: 44 cm. Neurological examination revealed spasticity of both lower limbs with exaggerated reflexes. Your diagnosis is:',
  opts:['Primary microcephaly','Craniosynostosis','Muscular dystrophy','Hydrocephalus','Cerebral palsy'],
  expl:'The child shows delayed motor milestones and spasticity with hyperreflexia, which is typical of cerebral palsy. The small head size supports a central nervous system cause.',
  note:'Native p0141.jpeg read directly; numerals (weight 11 kg, length 83 cm, skull circumference 44 cm) confirmed at 300dpi crop p-0141.jpg (all three values read identically at both resolutions). Highlighted option is "e. Cerebral palsy" (bold, underlined, yellow highlight) = index 4. Bordered explanation box sits beside options c/d, fits on page. No figure.' },

{ n:24, pr:24, p:143, key:1,
  stem:'Which of the following is NOT true about Global developmental delay?',
  opts:['It usually presents in the first 2 years of life.','It is a delay in the acquisition of one or more of the four fields of development.','It is mostly associated with cognitive difficulties.','Clinical picture is clearer when children become older.'],
  expl:'GDD means delay in two or more developmental domains, not just one. If only one area is delayed, it’s a specific developmental delay.',
  note:'Native p0143.jpeg read directly, fully legible. Only 4 options printed (a-d), no option e. Highlighted option is "b. It is a delay in the acquisition of one or more of the four fields of development." (bold, underlined, yellow highlight, wraps two lines) = index 1. Bordered explanation box below options, fits on page. Explanation bolds "two or more developmental domains" in the printed box (reproduced verbatim minus the bold markup, which the schema does not carry). No figure. Index flagged options-differ on this page: read carefully, nothing anomalous beyond the option-B highlight wrapping two lines — false positive.' },

{ n:25, pr:25, p:145, key:0,
  stem:'Which of the following is not true about cerebral palsy?',
  opts:['Meningitis/encephalitis is the most common cause.','Preterm infants are more vulnerable.','Spastic form is the most common.','Clinical manifestations can evolve over time.','Often accompanied by disturbances of cognition.'],
  expl:'The most common cause of CP is prematurity and perinatal injury, not infections like meningitis. Spastic type is indeed the most common.',
  note:'Native p0145.jpeg read directly, fully legible. Highlighted option is "a. Meningitis/encephalitis is the most common cause." (bold, underlined, yellow highlight) = index 0. Bordered explanation box below options, fits on page. Explanation bolds "prematurity and perinatal injury" in print (bold markup not carried by schema, text reproduced verbatim). No figure.' },

{ n:26, pr:26, p:147, key:3,
  stem:'Which of the following is NOT characteristic of autism spectrum disorder?',
  opts:['Repetitive actions','Sensory blocking and echolalia','Language and learning deficiencies','Encopresis and overeating','Highly restricted and fixated interests.'],
  expl:'Autism is characterized by repetitive behaviors, communication problems, sensory issues, and restricted interests. Encopresis and overeating are not typical features.',
  note:'Native p0147.jpeg read directly, fully legible. Highlighted option is "d. Encopresis and overeating" (bold, underlined, yellow highlight) = index 3. Bordered explanation box below options, fits on page. No figure.' },

{ n:27, pr:27, p:149, key:1,
  stem:'Causes of delayed speech include all of the following EXCEPT:',
  opts:['Emotional deprivation','Craniosynostosis','Autism','Hearing loss','Mental handicap'],
  expl:'Craniosynostosis mainly causes abnormal head shape, not speech delay. Common causes of delayed speech include autism, hearing loss, emotional deprivation, and intellectual disability.',
  note:'Native p0149.jpeg read directly, fully legible. Highlighted option is "b. Craniosynostosis" (bold, underlined, yellow highlight) = index 1. Bordered explanation box below options, fits on page. No figure.' },

{ n:28, pr:28, p:151, key:1,
  stem:'Attention deficit hyperactivity disorder EXCEPT:',
  opts:['Has a powerful genetic predisposition.','Affected children usually have good relationships with other children.','Children may drift into anti-social activity.','Boys exceed girls in frequency.'],
  expl:'Children with ADHD often struggle socially because of impulsivity and disruptive behavior. They also have genetic predisposition and are more common in boys.',
  note:'Native p0151.jpeg read directly, fully legible. Only 4 options printed (a-d), no option e. Highlighted option is "b. Affected children usually have good relationships with other children." (bold, underlined, yellow highlight) = index 1. Bordered explanation box below options, fits on page. No figure. Index flagged options-differ on this page: 4-option layout as with pp.137,139,143 — false positive.' },

{ n:29, pr:29, p:153, key:1,
  stem:'What is the most likely cause of faltering growth in a 9-month-old infant?',
  opts:['Small atrial septal defect (ASD)','Persistent diarrhea','Acute otitis media','Minor umbilical hernia'],
  expl:'Chronic diarrhea leads to malabsorption and poor weight gain, making it the most likely cause of faltering growth. Minor ASD, otitis media, or umbilical hernia are less likely to cause significant growth failure.',
  note:'Native p0153.jpeg read directly, fully legible. Only 4 options printed (a-d), no option e. Highlighted option is "b. Persistent diarrhea" (bold, underlined, yellow highlight) = index 1. Bordered explanation box below options, fits on page. No figure. REPRINT: this question and its printed box match endpoint PART 1 id `pedep-gp-40` verbatim in content (per task-prompt reprint sweep) — recorded here only, not folded; part 1 is another live chat file, untouched.' }

];
