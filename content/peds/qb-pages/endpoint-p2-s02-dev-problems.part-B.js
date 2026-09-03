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
  note:'Native p0127.jpeg read directly, fully legible. Highlighted option is "B. Ataxic" (bold, underlined, yellow highlight) = index 1. Boxed explanation below options, unbordered box with fill, fits on page. No figure.' }

{ n:17, pr:17, p:129, key:2,
  stem:'An 8-year-old boy is referred by the educational psychologist with suspected ADHD. He struggles at school, cannot concentrate, and is restless. Which of the following would suggest a diagnosis other than ADHD?',
  opts:['Easily distracted by other children','Difficulty waiting for his turn','Symptoms only present at school','Constantly talking, often interrupting others','Fidgeting with his hands or objects while sitting still'],
  expl:'ADHD symptoms must be present in multiple settings (e.g., home and school). If limited to school, alternative causes like stress or learning difficulties should be considered.',
  note:'Native p0129.jpeg read directly, fully legible. Highlighted option is "C. Symptoms only present at school" (bold, underlined, yellow highlight) = index 2. Bordered explanation box below options, fits on page. No figure. Index flagged options-differ on this page: read stem and all 5 options carefully against layout, nothing anomalous found — false positive, as in section 1.' }

{ n:18, pr:18, p:131, key:2,
  stem:'A 4-year-old boy is referred by his nursery teacher. He has delayed speech with only a few words, struggles with imaginative play, and prefers to play alone. He becomes upset if routines change and avoids eye contact. No dysmorphic features are noted. What is the most likely diagnosis?',
  opts:['Selective mutism','Normal development','Autism','Speech delay','Fragile X'],
  expl:'Lack of imaginative play, speech delay, insistence on routines, and poor eye contact strongly suggest autism spectrum disorder.',
  note:'Native p0131.jpeg read directly, fully legible. Highlighted option is "C. Autism" (bold, underlined, yellow highlight) = index 2. Bordered explanation box below options, fits on page. No figure.' }

{ n:19, pr:19, p:133, key:3,
  stem:'An 18-month-old baby boy presents with features of spastic diplegia. While counselling the parents about cerebral palsy, which of the following statements is correct?',
  opts:['The insult usually occurs during delivery','Cerebral palsy is a disorder of motor and sensory function due to a static brain injury','Reflexes are reduced or absent','Botulinum toxin may be useful to treat spasticity','MRI scan is diagnostic'],
  expl:'Botulinum toxin is a common treatment to reduce localized muscle spasticity in children with cerebral palsy. CP is a static motor disorder, not involving progressive brain damage.',
  note:'Native p0133.jpeg read directly, fully legible. Highlighted option is "D. Botulinum toxin may be useful to treat spasticity" (bold, underlined, yellow highlight) = index 3. Bordered explanation box below options, fits on page. No figure.' }

{ n:20, pr:20, p:135, key:0,
  stem:'An 11-year-old child was found to be very restless and hyperactive in the classroom, making it difficult for the other students to concentrate. He talks excessively. He ran around the class all day long and could not sit in one place for a long time. He got very agitated when the toy in his hand was taken away. What of the following statements about the child condition is RIGHT?',
  opts:['I.Q is within the average','EEG changes are diagnostic','Is likely to improve with CNS depressant drugs','Affected children have many friends','Good school performance'],
  expl:'Children with ADHD usually have normal intelligence, but they struggle with attention, hyperactivity, and impulsivity. EEG is not diagnostic, and they often have poor peer relationships and school difficulties.',
  note:'Native p0135.jpeg read directly, fully legible. Highlighted option is "a. I.Q is within the average" (bold, underlined, yellow highlight) = index 0. Bordered explanation box is positioned to the right of the options (not below), fits on page. Index flagged options-differ on this page: options here are lettered lowercase a.-e. rather than uppercase A.-E. used in the other pages in this range; content itself checked against layout, nothing else anomalous — printed lettering-case quirk, transcribed silently per brief (typos/formatting not commented on beyond this structural note). No figure.' }

{ n:21, pr:21, p:137, key:3,
  stem:"Fatima is an 8-month-old girl who was born at term. She is seen in the pediatric outpatient department. She can roll over. She does not crawl. She can say 'dada' but says it to everyone not just her father. She reaches out and grasps objects with her left hand but not with her right and puts objects in her mouth. She smiles but is not able to wave bye-bye. Which aspect of her development is of most concern?",
  opts:['Does not wave bye-bye','Inability to crawl','Inability to use sounds discriminately to parents','Left-hand preference'],
  expl:'Hand preference before 18 months is concerning because it may suggest weakness of one side due to cerebral palsy. Crawling and waving bye-bye can be delayed normally at this age.',
  note:'Native p0137.jpeg read directly, fully legible. Only 4 options printed (a-d), no option e. Highlighted option is "d. Left-hand preference" (bold, underlined, yellow highlight) = index 3. Bordered explanation box sits beside option d, to its right, fits on page. No figure.' }

{ n:22, pr:22, p:139, key:1,
  stem:'Which of the following is NOT true about autism spectrum disorder?',
  opts:['The child may have associated comorbidities','It is usually benign with no long-term consequences','It is an impaired social interaction','There is no evidence for a link with MMR vaccine'],
  expl:'Autism is a lifelong condition with significant impact on social interaction and communication. It is not benign, and comorbidities like epilepsy and intellectual disability are common.',
  note:'Native p0139.jpeg read directly, fully legible. Only 4 options printed (a-d), no option e. Highlighted option is "b. It is usually benign with no long-term consequences" (bold, underlined, yellow highlight) = index 1. Bordered explanation box below options, fits on page. No figure.' }

{ n:23, pr:23, p:141, key:4,
  stem:'The parents of an 18-month-old infant brought him concerned with delayed standing, the child recognizes his parents and can say syllables. On examination: weight 11 kg, length 83 cm, skull circumference: 44 cm. Neurological examination revealed spasticity of both lower limbs with exaggerated reflexes. Your diagnosis is:',
  opts:['Primary microcephaly','Craniosynostosis','Muscular dystrophy','Hydrocephalus','Cerebral palsy'],
  expl:'The child shows delayed motor milestones and spasticity with hyperreflexia, which is typical of cerebral palsy. The small head size supports a central nervous system cause.',
  note:'Native p0141.jpeg read directly; numerals (weight 11 kg, length 83 cm, skull circumference 44 cm) confirmed at 300dpi crop p-0141.jpg (all three values read identically at both resolutions). Highlighted option is "e. Cerebral palsy" (bold, underlined, yellow highlight) = index 4. Bordered explanation box sits beside options c/d, fits on page. No figure.' }

{ n:24, pr:24, p:143, key:1,
  stem:'Which of the following is NOT true about Global developmental delay?',
  opts:['It usually presents in the first 2 years of life.','It is a delay in the acquisition of one or more of the four fields of development.','It is mostly associated with cognitive difficulties.','Clinical picture is clearer when children become older.'],
  expl:'GDD means delay in two or more developmental domains, not just one. If only one area is delayed, it’s a specific developmental delay.',
  note:'Native p0143.jpeg read directly, fully legible. Only 4 options printed (a-d), no option e. Highlighted option is "b. It is a delay in the acquisition of one or more of the four fields of development." (bold, underlined, yellow highlight, wraps two lines) = index 1. Bordered explanation box below options, fits on page. Explanation bolds "two or more developmental domains" in the printed box (reproduced verbatim minus the bold markup, which the schema does not carry). No figure. Index flagged options-differ on this page: read carefully, nothing anomalous beyond the option-B highlight wrapping two lines — false positive.' }

{ n:25, pr:25, p:145, key:0,
  stem:'Which of the following is not true about cerebral palsy?',
  opts:['Meningitis/encephalitis is the most common cause.','Preterm infants are more vulnerable.','Spastic form is the most common.','Clinical manifestations can evolve over time.','Often accompanied by disturbances of cognition.'],
  expl:'The most common cause of CP is prematurity and perinatal injury, not infections like meningitis. Spastic type is indeed the most common.',
  note:'Native p0145.jpeg read directly, fully legible. Highlighted option is "a. Meningitis/encephalitis is the most common cause." (bold, underlined, yellow highlight) = index 0. Bordered explanation box below options, fits on page. Explanation bolds "prematurity and perinatal injury" in print (bold markup not carried by schema, text reproduced verbatim). No figure.' }

{ n:26, pr:26, p:147, key:3,
  stem:'Which of the following is NOT characteristic of autism spectrum disorder?',
  opts:['Repetitive actions','Sensory blocking and echolalia','Language and learning deficiencies','Encopresis and overeating','Highly restricted and fixated interests.'],
  expl:'Autism is characterized by repetitive behaviors, communication problems, sensory issues, and restricted interests. Encopresis and overeating are not typical features.',
  note:'Native p0147.jpeg read directly, fully legible. Highlighted option is "d. Encopresis and overeating" (bold, underlined, yellow highlight) = index 3. Bordered explanation box below options, fits on page. No figure.' }

{ n:27, pr:27, p:149, key:1,
  stem:'Causes of delayed speech include all of the following EXCEPT:',
  opts:['Emotional deprivation','Craniosynostosis','Autism','Hearing loss','Mental handicap'],
  expl:'Craniosynostosis mainly causes abnormal head shape, not speech delay. Common causes of delayed speech include autism, hearing loss, emotional deprivation, and intellectual disability.',
  note:'Native p0149.jpeg read directly, fully legible. Highlighted option is "b. Craniosynostosis" (bold, underlined, yellow highlight) = index 1. Bordered explanation box below options, fits on page. No figure.' }

{ n:28, pr:28, p:151, key:1,
  stem:'Attention deficit hyperactivity disorder EXCEPT:',
  opts:['Has a powerful genetic predisposition.','Affected children usually have good relationships with other children.','Children may drift into anti-social activity.','Boys exceed girls in frequency.'],
  expl:'Children with ADHD often struggle socially because of impulsivity and disruptive behavior. They also have genetic predisposition and are more common in boys.',
  note:'Native p0151.jpeg read directly, fully legible. Only 4 options printed (a-d), no option e. Highlighted option is "b. Affected children usually have good relationships with other children." (bold, underlined, yellow highlight) = index 1. Bordered explanation box below options, fits on page. No figure. Index flagged options-differ on this page: 4-option layout as with pp.137,139,143 — false positive.' }

{ n:29, pr:29, p:153, key:1,
  stem:'What is the most likely cause of faltering growth in a 9-month-old infant?',
  opts:['Small atrial septal defect (ASD)','Persistent diarrhea','Acute otitis media','Minor umbilical hernia'],
  expl:'Chronic diarrhea leads to malabsorption and poor weight gain, making it the most likely cause of faltering growth. Minor ASD, otitis media, or umbilical hernia are less likely to cause significant growth failure.',
  note:'Native p0153.jpeg read directly, fully legible. Only 4 options printed (a-d), no option e. Highlighted option is "b. Persistent diarrhea" (bold, underlined, yellow highlight) = index 1. Bordered explanation box below options, fits on page. No figure. REPRINT: this question and its printed box match endpoint PART 1 id `pedep-gp-40` verbatim in content (per task-prompt reprint sweep) — recorded here only, not folded; part 1 is another live chat file, untouched.' }
