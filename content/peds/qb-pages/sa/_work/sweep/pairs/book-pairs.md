# Book duplicate pairs - SAME and UNSURE

Classification only. Nothing folded. Stems cut at 220 chars.

## Book chapter 2 History and examination

### SAME `pedsa-b2-1` vs `pedep2-ra-1` (peds.ep2)
- book: Ritha, aged 2 months, is admitted to hospital with a 2-day history of mild coryza and tachypnoea without significant intercostal recession. She has been feeding poorly for the last 3 weeks. Which clinical feature most su | key D: Hepatomegaly | 5 opts
- other: Ritha, aged 2 months, is admitted to hospital with a 2-day history of mild coryza and tachypnoea without significant intercostal recession. She has been feeding poorly for the last 3 weeks. Which clinical feature most su | key D: Hepatomegaly | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b2-2` vs `pedep2-mf2-16` (peds.ep2)
- book: Nazma, aged 4 years, presents with a 1-week history of episodic central abdominal pain. She is of Indian ethnicity, but the family live in Kenya and are visiting relatives in the UK. She is otherwise well. Her relative’s | key B: Malaria | 5 opts
- other: Nazma, aged 4 years, presents with a 1-week history of episodic central abdominal pain. She is of Indian ethnicity, but the family live in Kenya and are visiting relatives in the UK. She is otherwise well. Her relative’s | key B: Malaria | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b2-3` vs `pedep2-neu-33` (peds.ep2)
- book: Katie, an 18-month-old girl, is reviewed in the paediatric clinic. She is unsteady on her feet but has normal vision and gaze. She walks with a limp and tends to fall to her left side. Her limb tone and reflexes are as s | key A: Upper motor neurone lesion | 5 opts
- other: Dalia, an 18-month-old girl, is reviewed in the pediatric clinic. She is unsteady on her feet but has normal vision and gaze. She walks with a limp and tends to fall to her left side. Her limb tone and reflexes show the  | key A: Upper motor neuron lesion | 5 opts
- dice 0.67, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b2-7` vs `pedep2-mf2-52` (peds.ep2)
- book: Ishmael, a 15-year-old boy from Pakistan, is seen in the outpatient department. He has a long history of chest infections needing recurrent courses of antibiotics. He has a productive cough. He opens his bowels once a da | key C: Primary ciliary dyskinesia | 5 opts
- other: Ishmael, a 15-year-old boy from Pakistan, is seen in the outpatient department. He presents with otitis media and a history of recurrent chest infections needing antibiotics. He has a productive cough. Bowel movements ar | key C: Primary ciliary dyskinesia | 5 opts
- dice 0.58, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b2-8-1` vs `pedep2-ra-5` (peds.ep2)
- book: The following list (A–M) are causes of difficulty breathing in children. For each of the following clinical scenarios select the most likely diagnosis. Each answer may be used once, more than once or not at all. Rob, a 9 | key B: Bronchiolitis | 13 opts
- other: Rob, a 9-month-old boy, presents with fever and difficulty breathing for the last 3 days. His breathing is now interfering with his feeding. He has not had any previous illnesses and his growth is normal. Examination fin | key B: Bronchiolitis | 4 opts
- dice 0.81, key text same true, key letter moved false, fuller book, other lacks: Heart failure; Inhaled foreign body (left side); Inhaled foreign body (right side); Pleural effusion (left sided); Pleural effusion (right sided); Pneumonia (left sided); Pneumonia (right sided); Pneumothorax (left sided); Pneumothorax (right sided) (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### UNSURE `pedsa-b2-8-1` vs `pedep2-res-28` (peds.ep2)
- book: The following list (A–M) are causes of difficulty breathing in children. For each of the following clinical scenarios select the most likely diagnosis. Each answer may be used once, more than once or not at all. Rob, a 9 | key B: Bronchiolitis | 13 opts
- other: Reda, a 19-month-old boy, presents with shortness of breath and difficulty breathing for the last 3 days. His breathing is now interfering with feeding. He has no history of previous illnesses, and his growth is normal.  | key E: Pneumonia | 5 opts
- dice 0.56, key text same false, key letter moved true, fuller book, other lacks: Chronic asthma; Cystic fibrosis; Heart failure; Inhaled foreign body (left side); Inhaled foreign body (right side); Pleural effusion (left sided); Pleural effusion (right sided); Pneumonia (left sided); Pneumonia (right sided); Pneumothorax (left sided); Pneumothorax (right sided) (keyed option kept: true)
- why: two book items, one live twin

### SAME `pedsa-b2-8-2` vs `pedep2-mf1-4` (peds.ep2)
- book: The following list (A–M) are causes of difficulty breathing in children. For each of the following clinical scenarios select the most likely diagnosis. Each answer may be used once, more than once or not at all. Hatem, a | key undefined: Pneumonia (right sided) | 13 opts
- other: A 3-year-old boy presents with fever and difficulty breathing, getting worse for the last 3 days. Examination shows the following clinical signs: respiratory rate 40 breaths/min, heart rate 120 beats/min, heart sounds no | key D: Pneumonia (right-sided) | 5 opts
- dice 0.72, key text same true, key letter moved true, fuller book, other lacks: Bronchiolitis; Chronic asthma; Cystic fibrosis; Heart failure; Pleural effusion (left sided); Pneumonia (left sided); Pneumothorax (left sided) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### UNSURE `pedsa-b2-8-2` vs `pedep2-res-28` (peds.ep2)
- book: The following list (A–M) are causes of difficulty breathing in children. For each of the following clinical scenarios select the most likely diagnosis. Each answer may be used once, more than once or not at all. Hatem, a | key undefined: Pneumonia (right sided) | 13 opts
- other: Reda, a 19-month-old boy, presents with shortness of breath and difficulty breathing for the last 3 days. His breathing is now interfering with feeding. He has no history of previous illnesses, and his growth is normal.  | key E: Pneumonia | 5 opts
- dice 0.53, key text same false, key letter moved true, fuller book, other lacks: Chronic asthma; Cystic fibrosis; Heart failure; Inhaled foreign body (left side); Inhaled foreign body (right side); Pleural effusion (left sided); Pleural effusion (right sided); Pneumonia (left sided); Pneumonia (right sided); Pneumothorax (left sided); Pneumothorax (right sided) (keyed option kept: false)
- why: two book items, one live twin

### SAME `pedsa-b2-8-4` vs `pedep2-ra-8` (peds.ep2)
- book: The following list (A–M) are causes of difficulty breathing in children. For each of the following clinical scenarios select the most likely diagnosis. Each answer may be used once, more than once or not at all. Tony, a  | key I: Pleural effusion (right sided) | 13 opts
- other: Tony, a 4-year-old boy, is admitted with pneumonia. His chest X-ray shows consolidation at the right base. Despite antibiotic therapy, he remains febrile and unwell.
Examination findings:
•Respiratory rate: 50 breaths/mi | key B: Pleural effusion (right sided) | 4 opts
- dice 0.53, key text same true, key letter moved true, fuller book, other lacks: Acute exacerbation of asthma; Bronchiolitis; Chronic asthma; Cystic fibrosis; Heart failure; Inhaled foreign body (left side); Inhaled foreign body (right side); Pneumothorax (left sided); Pneumothorax (right sided) (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

## Book chapter 3 Normal child development hearing and vision

### SAME `pedsa-b3-1` vs `pedep2-nd-1` (peds.ep2)
- book: Steven has just had his first birthday party. During his party he commando crawled with great speed, although he cannot walk. He managed to pick off all the Smarties (round chocolate sweets) from his birthday cake. He ca | key E: None – his development is within normal limits | 5 opts
- other: Steven has just had his first birthday party. During his party, he commando crawled with great speed, although he cannot walk. He managed to pick off all the Smarties (round chocolate sweets) from his birthday cake. He c | key E: None – his development is within normal limits | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b3-1` vs `pedhd-dev-1` (peds)
- book: Steven has just had his first birthday party. During his party he commando crawled with great speed, although he cannot walk. He managed to pick off all the Smarties (round chocolate sweets) from his birthday cake. He ca | key E: None – his development is within normal limits | 5 opts
- other: Steven has just had his first birthday party. During his party he commando crawled with great speed, although he cannot walk. He managed to pick off all the Smarties (round chocolate sweets) from his birthday cake. He ca | key E: None – his development is within normal limits | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b3-4` vs `pedep2-nd-2` (peds.ep2)
- book: Sophie is a well 8-week-old baby who was born at term. She has come for a routine developmental check. Which of the following would you NOT expect her to be able to do? Select one answer only. | key E: Reach out and grasp an object | 5 opts
- other: Sophie is a well-born 8-week-old baby who was born at term. She has come for a routine developmental check. Which of the following would you NOT expect her to be able to do? | key E: Reach out and grasp an object | 5 opts
- dice 0.98, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b3-4` vs `pedhd-dev-2` (peds)
- book: Sophie is a well 8-week-old baby who was born at term. She has come for a routine developmental check. Which of the following would you NOT expect her to be able to do? Select one answer only. | key E: Reach out and grasp an object | 5 opts
- other: Sophie is a well 8-week-old baby who was born at term. She has come for a routine developmental check. Which of the following would you NOT expect her to be able to do? | key E: Reach out and grasp an object | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b3-5` vs `pedep2-nd-3` (peds.ep2)
- book: Joanna is an active toddler. She is just being potty trained and has had several days where she has remained dry. She enjoys pulling her clothes off to use the potty but cannot dress herself again. She enjoys playing by  | key C: 24 months | 5 opts
- other: Joanna is an active toddler. She is just being potty trained and has had several days where she has remained dry. She enjoys pulling her clothes off to use the potty but cannot dress herself again. She enjoys playing by  | key C: 24 months | 5 opts
- dice 0.99, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b3-5` vs `pedhd-dev-3` (peds)
- book: Joanna is an active toddler. She is just being potty trained and has had several days where she has remained dry. She enjoys pulling her clothes off to use the potty but cannot dress herself again. She enjoys playing by  | key C: 24 months | 5 opts
- other: Joanna is an active toddler. She is just being potty trained and has had several days where she has remained dry. She enjoys pulling her clothes off to use the potty but cannot dress herself again. She enjoys playing by  | key C: 24 months | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b3-7-1` vs `pedep2-nd-4` (peds.ep2)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Rosette can build a three-cube tower and  | key F: 18 months | 10 opts
- other: Rosette can build a three-cube tower and can point to her nose. At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key D: 18 months | 5 opts
- dice 0.69, key text same true, key letter moved true, fuller book, other lacks: 2 years; 3 years; 4 years; 5 years (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-1` vs `pedhd-dev-4` (peds)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Rosette can build a three-cube tower and  | key F: 18 months | 10 opts
- other: Rosette can build a three-cube tower and can point to her nose. At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key D: 18 months | 5 opts
- dice 0.69, key text same true, key letter moved true, fuller book, other lacks: 2 years; 3 years; 4 years; 5 years (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-10` vs `pedep2-nd-13` (peds.ep2)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Lizzie has just started crawling. | key C: 8 months | 10 opts
- other: Lizzie has just started crawling. At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key B: 8 months | 5 opts
- dice 0.62, key text same true, key letter moved true, fuller book, other lacks: 6 weeks; 2 years; 3 years; 4 years; 5 years (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-10` vs `pedhd-dev-13` (peds)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Lizzie has just started crawling. | key C: 8 months | 10 opts
- other: Lizzie has just started crawling. At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key B: 8 months | 5 opts
- dice 0.62, key text same true, key letter moved true, fuller book, other lacks: 6 weeks; 2 years; 3 years; 4 years; 5 years (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-2` vs `pedep2-nd-5` (peds.ep2)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Peace has just taken her first steps! | key E: 12 months | 10 opts
- other: Peace has just taken her first steps! At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key E: 12 months | 5 opts
- dice 0.65, key text same true, key letter moved false, fuller book, other lacks: 2 years; 3 years; 4 years; 5 years (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-2` vs `pedhd-dev-5` (peds)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Peace has just taken her first steps! | key E: 12 months | 10 opts
- other: Peace has just taken her first steps! At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key E: 12 months | 5 opts
- dice 0.65, key text same true, key letter moved false, fuller book, other lacks: 2 years; 3 years; 4 years; 5 years (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-3` vs `pedep2-nd-6` (peds.ep2)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Anthony has a friend at nursery, and they | key H: 3 years | 10 opts
- other: Anthony has a friend at nursery, and they enjoy playing with toy cars together. At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key E: 36 months | 5 opts
- dice 0.69, key text same false, key letter moved true, fuller book, other lacks: 6 weeks; 2 years; 3 years; 4 years; 5 years (keyed option kept: false)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b3-7-3` vs `pedhd-dev-6` (peds)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Anthony has a friend at nursery, and they | key H: 3 years | 10 opts
- other: Anthony has a friend at nursery, and they enjoy playing with toy cars together. At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key E: 36 months | 5 opts
- dice 0.69, key text same false, key letter moved true, fuller book, other lacks: 6 weeks; 2 years; 3 years; 4 years; 5 years (keyed option kept: false)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b3-7-4` vs `pedep2-nd-7` (peds.ep2)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Herbert can transfer objects from one han | key C: 8 months | 10 opts
- other: Herbert can transfer objects from one hand to the other while sitting without support and with a straight back. At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key B: 8 months | 5 opts
- dice 0.69, key text same true, key letter moved true, fuller book, other lacks: 6 weeks; 2 years; 3 years; 4 years; 5 years (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-4` vs `pedhd-dev-7` (peds)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Herbert can transfer objects from one han | key C: 8 months | 10 opts
- other: Herbert can transfer objects from one hand to the other whilst sitting without support and with a straight back. At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key B: 8 months | 5 opts
- dice 0.72, key text same true, key letter moved true, fuller book, other lacks: 6 weeks; 2 years; 3 years; 4 years; 5 years (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-5` vs `pedep2-nd-8` (peds.ep2)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Grace enjoys drawing. She has just learnt | key I: 4 years | 10 opts
- other: Grace enjoys drawing. She has just learned to copy drawing a square and can build steps using blocks after being shown. At what age would one expect that child to achieve the milestones described in this scenario (median | key D: 4 years | 5 opts
- dice 0.74, key text same true, key letter moved true, fuller book, other lacks: 6 weeks; 6 months; 8 months; 10 months; 12 months; 18 months (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-5` vs `pedhd-dev-8` (peds)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Grace enjoys drawing. She has just learnt | key I: 4 years | 10 opts
- other: Grace enjoys drawing. She has just learnt to copy drawing a square, and can build steps using blocks after being shown. At what age would one expect that child to achieve the milestones described in this scenario (median | key D: 4 years | 5 opts
- dice 0.76, key text same true, key letter moved true, fuller book, other lacks: 6 weeks; 6 months; 8 months; 10 months; 12 months; 18 months (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-6` vs `pedep2-nd-9` (peds.ep2)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Rita’s father is thrilled that she has ju | key D: 10 months | 10 opts
- other: Rita’s father is thrilled that she has just said her first word—says "dada" to her father only. At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key C: 10 months | 5 opts
- dice 0.74, key text same true, key letter moved true, fuller book, other lacks: 6 weeks; 2 years; 3 years; 4 years; 5 years (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-6` vs `pedhd-dev-9` (peds)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Rita’s father is thrilled that she has ju | key D: 10 months | 10 opts
- other: Rita's father is thrilled that she has just said her first word – says ‘dada’ to her father only. At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key C: 10 months | 5 opts
- dice 0.74, key text same true, key letter moved true, fuller book, other lacks: 6 weeks; 2 years; 3 years; 4 years; 5 years (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-7` vs `pedep2-nd-10` (peds.ep2)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Rinah can follow her mother’s two-step co | key H: 3 years | 10 opts
- other: Rinah can follow her mother's two-step commands, such as "Go to the cupboard and fetch your red shoes". At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key D: 3 years | 5 opts
- dice 0.75, key text same true, key letter moved true, fuller book, other lacks: 6 weeks; 5 years (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-7` vs `pedhd-dev-10` (peds)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Rinah can follow her mother’s two-step co | key H: 3 years | 10 opts
- other: Rinah can follow her mother's two-step commands, such as ‘Go to the cupboard and fetch your red shoes’. At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key D: 3 years | 5 opts
- dice 0.75, key text same true, key letter moved true, fuller book, other lacks: 6 weeks; 5 years (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-8` vs `pedep2-nd-11` (peds.ep2)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Blessing’s mother is so pleased; her baby | key A: 6 weeks | 10 opts
- other: Blessing's mother is so pleased; her baby has just learned to smile when she smiles at her! At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key A: 6 weeks | 5 opts
- dice 0.71, key text same true, key letter moved false, fuller book, other lacks: 2 years; 3 years; 4 years; 5 years (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-8` vs `pedhd-dev-11` (peds)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Blessing’s mother is so pleased; her baby | key A: 6 weeks | 10 opts
- other: Blessing's mother is so pleased; her baby has just learnt to smile when she smiles at her! At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key A: 6 weeks | 5 opts
- dice 0.74, key text same true, key letter moved false, fuller book, other lacks: 2 years; 3 years; 4 years; 5 years (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-9` vs `pedep2-nd-12` (peds.ep2)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Ivan can tie his shoe laces all by himsel | key J: 5 years | 10 opts
- other: Ivan can tie his shoelaces all by himself. At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key E: 5 years | 5 opts
- dice 0.6, key text same true, key letter moved true, fuller book, other lacks: 6 weeks; 6 months; 8 months; 10 months; 12 months; 18 months (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-7-9` vs `pedhd-dev-12` (peds)
- book: At what age would one expect children to achieve the milestones described in the scenarios (median age) described below? Each age can be used once, more than once, or not at all. Ivan can tie his shoe laces all by himsel | key J: 5 years | 10 opts
- other: Ivan can tie his shoe laces all by himself. At what age would one expect that child to achieve the milestones described in this scenario (median age)? | key E: 5 years | 5 opts
- dice 0.67, key text same true, key letter moved true, fuller book, other lacks: 6 weeks; 6 months; 8 months; 10 months; 12 months; 18 months (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-8-1` vs `pedep2-nd-14` (peds.ep2)
- book: At which of these ages is the following action (screening, examination, health promotion activity) usually first taken in the child health surveillance and promotion programme in the United Kingdom? Each answer can be us | key H: 12 months | 11 opts
- other: At which of these ages is the following action (first measles/mumps/rubella (MMR) immunization) usually first taken in the child health surveillance and promotion program in the United Kingdom? | key D: 12 months | 5 opts
- dice 0.69, key text same true, key letter moved true, fuller book, other lacks: Newborn; 5–6 days; 12 days; 8 weeks; 2–3 years; 4–5 years (preschool); 5 years (school entry) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-8-1` vs `pedhd-dev-14` (peds)
- book: At which of these ages is the following action (screening, examination, health promotion activity) usually first taken in the child health surveillance and promotion programme in the United Kingdom? Each answer can be us | key H: 12 months | 11 opts
- other: At which of these ages is the following action (First measles/mumps/rubella (MMR) immunization) usually first taken in the child health surveillance and promotion programme in the United Kingdom? | key D: 12 months | 5 opts
- dice 0.73, key text same true, key letter moved true, fuller book, other lacks: Newborn; 5–6 days; 12 days; 8 weeks; 2–3 years; 4–5 years (preschool); 5 years (school entry) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-8-2` vs `pedep2-nd-15` (peds.ep2)
- book: At which of these ages is the following action (screening, examination, health promotion activity) usually first taken in the child health surveillance and promotion programme in the United Kingdom? Each answer can be us | key B: 5–6 days | 11 opts
- other: At which of these ages is the following action (biochemical screening test [Guthrie test]) usually first taken in the child health surveillance and promotion program in the United Kingdom? | key B: 5–6 days | 5 opts
- dice 0.68, key text same true, key letter moved false, fuller book, other lacks: 12 months; 2–3 years; 4–5 years (preschool); 5 years (school entry) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-8-2` vs `pedhd-dev-15` (peds)
- book: At which of these ages is the following action (screening, examination, health promotion activity) usually first taken in the child health surveillance and promotion programme in the United Kingdom? Each answer can be us | key B: 5–6 days | 11 opts
- other: At which of these ages is the following action (Biochemical screening test (Guthrie test)) usually first taken in the child health surveillance and promotion programme in the United Kingdom? | key B: 5-6 days | 5 opts
- dice 0.72, key text same true, key letter moved false, fuller book, other lacks: 12 months; 2–3 years; 4–5 years (preschool); 5 years (school entry) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-8-3` vs `pedep2-nd-16` (peds.ep2)
- book: At which of these ages is the following action (screening, examination, health promotion activity) usually first taken in the child health surveillance and promotion programme in the United Kingdom? Each answer can be us | key A: Newborn | 11 opts
- other: At which of these ages is the following action (advice on reducing the risk of sudden infant death syndrome by "back to sleep", avoiding overheating, and avoiding parental smoking) usually first taken in the child health | key A: Newborn | 5 opts
- dice 0.76, key text same true, key letter moved false, fuller book, other lacks: 12 months; 2–3 years; 4–5 years (preschool); 5 years (school entry) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-8-3` vs `pedhd-dev-16` (peds)
- book: At which of these ages is the following action (screening, examination, health promotion activity) usually first taken in the child health surveillance and promotion programme in the United Kingdom? Each answer can be us | key A: Newborn | 11 opts
- other: At which of these ages is the following action (Advice on reducing the risk of sudden infant death syndrome by ‘back to sleep’, avoiding overheating and avoiding parental smoking) usually first taken in the child health  | key A: Newborn | 5 opts
- dice 0.79, key text same true, key letter moved false, fuller book, other lacks: 12 months; 2–3 years; 4–5 years (preschool); 5 years (school entry) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-8-4` vs `pedep2-nd-17` (peds.ep2)
- book: At which of these ages is the following action (screening, examination, health promotion activity) usually first taken in the child health surveillance and promotion programme in the United Kingdom? Each answer can be us | key A: Newborn | 11 opts
- other: At which of these ages is the following action (hearing test using otoacoustic emission or auditory brainstem response audiometry) usually first taken in the child health surveillance and promotion program in the United  | key A: Newborn | 5 opts
- dice 0.72, key text same true, key letter moved false, fuller book, other lacks: 12 months; 2–3 years; 4–5 years (preschool); 5 years (school entry) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b3-8-4` vs `pedhd-dev-17` (peds)
- book: At which of these ages is the following action (screening, examination, health promotion activity) usually first taken in the child health surveillance and promotion programme in the United Kingdom? Each answer can be us | key A: Newborn | 11 opts
- other: At which of these ages is the following action (Hearing test using otoacoustic emission or auditory brainstem response audiometry) usually first taken in the child health surveillance and promotion programme in the Unite | key A: Newborn | 5 opts
- dice 0.76, key text same true, key letter moved false, fuller book, other lacks: 12 months; 2–3 years; 4–5 years (preschool); 5 years (school entry) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

## Book chapter 4 Developmental problems and the child with special needs

### SAME `pedsa-b4-1` vs `pedep2-dp-1` (peds.ep2)
- book: Jonathan is 4 years old and lives in a small village in southern England. He attends a paediatric outpatient clinic with his grandmother who is his legal guardian. She is concerned that he only seems to like to play with | key C: Autism spectrum disorder | 5 opts
- other: Jonathan is 4 years old and lives in a small village in southern England. He attends a paediatric outpatient clinic with his grandmother, who is his legal guardian. She is concerned that he only seems to like playing wit | key C: Autism spectrum disorder | 5 opts
- dice 0.97, key text same true, key letter moved false, fuller other, other lacks: Developmental coordination disorder (also known as dyspraxia) (keyed option kept: true)
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical; other lacks 1 option(s)

### SAME `pedsa-b4-1` vs `pedhd-devp-1` (peds)
- book: Jonathan is 4 years old and lives in a small village in southern England. He attends a paediatric outpatient clinic with his grandmother who is his legal guardian. She is concerned that he only seems to like to play with | key C: Autism spectrum disorder | 5 opts
- other: Jonathan is 4 years old and lives in a small village in southern England. He attends a paediatric outpatient clinic with his grandmother who is his legal guardian. She is concerned that he only seems to like to play with | key C: Autism spectrum disorder | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b4-10-1` vs `pedep2-dp-12` (peds.ep2)
- book: Considering these types of cerebral palsy, choose the type of movement disorder to fit the following scenarios. Each type of cerebral palsy [A–E] can be used once, more than once, or not at all. Moses is a 5-year-old boy | key E: Spastic quadriplegia | 5 opts
- other: Moses is a 5-year-old boy who failed to attain milestones from shortly after birth. He cannot roll or talk, but he can smile. His mother reports difficulty dressing him due to stiffness. Examination shows all limbs are s | key E: Spastic quadriplegia | 5 opts
- dice 0.57, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b4-10-1` vs `pedhd-devp-12` (peds)
- book: Considering these types of cerebral palsy, choose the type of movement disorder to fit the following scenarios. Each type of cerebral palsy [A–E] can be used once, more than once, or not at all. Moses is a 5-year-old boy | key E: Spastic quadriplegia | 5 opts
- other: Moses is a 5-year-old boy who failed to attain his developmental milestones from shortly after birth. Currently, he cannot roll or talk, but he can smile. His mother complains it is difficult to dress him as both his arm | key E: Spastic quadriplegia | 5 opts
- dice 0.82, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b4-10-2` vs `pedep2-dp-13` (peds.ep2)
- book: Considering these types of cerebral palsy, choose the type of movement disorder to fit the following scenarios. Each type of cerebral palsy [A–E] can be used once, more than once, or not at all. Gerald is a 4-year-old bo | key A: Dyskinetic | 5 opts
- other: Gerald is a 4-year-old boy born in Tanzania who had severe neonatal jaundice that was untreated. He now shows abnormal movements and postures, with asymmetrical limb responses to startle. He is hypotonic when asleep. Wha | key A: Dyskinetic | 5 opts
- dice 0.44, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b4-10-2` vs `pedhd-devp-13` (peds)
- book: Considering these types of cerebral palsy, choose the type of movement disorder to fit the following scenarios. Each type of cerebral palsy [A–E] can be used once, more than once, or not at all. Gerald is a 4-year-old bo | key A: Dyskinetic | 5 opts
- other: Gerald is a 4-year-old boy who was born in Tanzania, and had severe jaundice as a neonate that could not be treated because of lack of medical services. He now has abnormal movements of all his limbs where he adopts and  | key A: Dyskinetic | 5 opts
- dice 0.82, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b4-10-3` vs `pedep2-dp-14` (peds.ep2)
- book: Considering these types of cerebral palsy, choose the type of movement disorder to fit the following scenarios. Each type of cerebral palsy [A–E] can be used once, more than once, or not at all. Hassan is 3 years old and | key C: Spastic diplegia | 5 opts
- other: Hassan is 3 years old, born at 26 weeks weighing 700 g. Now 10 months corrected age, he has started to walk. He can scribble and build a tower of three blocks. On examination, he walks on tiptoes and has 'scissoring' of  | key C: Spastic diplegia | 5 opts
- dice 0.59, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b4-10-3` vs `pedep2-mf1-80` (peds.ep2)
- book: Considering these types of cerebral palsy, choose the type of movement disorder to fit the following scenarios. Each type of cerebral palsy [A–E] can be used once, more than once, or not at all. Hassan is 3 years old and | key C: Spastic diplegia | 5 opts
- other: A 3-year-old boy was born at 26 weeks' gestation weighing 700 g. He is 10 months old and has just started to walk. He can build a tower of three blocks and is able to feed himself. On examination, he walks on tiptoes, an | key C: Spastic diplegia | 4 opts
- dice 0.63, key text same true, key letter moved false, fuller book, other lacks: Spastic quadriplegia (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b4-10-3` vs `pedhd-devp-14` (peds)
- book: Considering these types of cerebral palsy, choose the type of movement disorder to fit the following scenarios. Each type of cerebral palsy [A–E] can be used once, more than once, or not at all. Hassan is 3 years old and | key C: Spastic diplegia | 5 opts
- other: Hassan is 3 years old and was born at 26 weeks' gestation weighing 700 g. He sat at 10 months, and has just started to walk. He can scribble and build a tower of three blocks. When you examine him, he is walking on tipto | key C: Spastic diplegia | 5 opts
- dice 0.8, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b4-10-4` vs `pedep2-dp-15` (peds.ep2)
- book: Considering these types of cerebral palsy, choose the type of movement disorder to fit the following scenarios. Each type of cerebral palsy [A–E] can be used once, more than once, or not at all. Alan is a 3-year-old boy  | key D: Spastic hemiplegia | 5 opts
- other: Alan is a 3-year-old boy who developed a preference for his left hand at 7 months. He sat at 9 months and walked at 20 months. When running, he holds his right arm flexed and limps on the right foot. On examination, righ | key D: Spastic hemiplegia | 5 opts
- dice 0.68, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b4-10-4` vs `pedep2-mf1-64` (peds.ep2)
- book: Considering these types of cerebral palsy, choose the type of movement disorder to fit the following scenarios. Each type of cerebral palsy [A–E] can be used once, more than once, or not at all. Alan is a 3-year-old boy  | key D: Spastic hemiplegia | 5 opts
- other: A 3-year-old boy developed a preference for using his left hand at 7 months of age. His upper limbs are stiff, with increased reflexes. What is the type of movement disorder that fits with this type of cerebral palsy? | key D: Spastic hemiplegia | 5 opts
- dice 0.53, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b4-10-4` vs `pedhd-devp-15` (peds)
- book: Considering these types of cerebral palsy, choose the type of movement disorder to fit the following scenarios. Each type of cerebral palsy [A–E] can be used once, more than once, or not at all. Alan is a 3-year-old boy  | key D: Spastic hemiplegia | 5 opts
- other: Alan is a 3-year-old boy who developed a preference for using his left hand at 7 months of age. He learnt to sit at 9 months and walked at 20 months. When he runs, he holds his right arm flexed and limps with his right f | key D: Spastic hemiplegia | 5 opts
- dice 0.8, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b4-10-5` vs `pedep2-dp-16` (peds.ep2)
- book: Considering these types of cerebral palsy, choose the type of movement disorder to fit the following scenarios. Each type of cerebral palsy [A–E] can be used once, more than once, or not at all. Ronaldo is a 6-year-old b | key B: Ataxic | 5 opts
- other: Ronaldo is a 6-year-old boy whose teacher reports concerns. He is unsteady on his feet and walks with legs wide apart. He struggles to grip a pen due to unsteadiness. What type of movement disorder best fits this scenari | key B: Ataxic | 5 opts
- dice 0.42, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b4-10-5` vs `pedhd-devp-16` (peds)
- book: Considering these types of cerebral palsy, choose the type of movement disorder to fit the following scenarios. Each type of cerebral palsy [A–E] can be used once, more than once, or not at all. Ronaldo is a 6-year-old b | key B: Ataxic | 5 opts
- other: Ronaldo is a 6-year-old boy. He attends the outpatient department as his teacher has had some concerns. He has recently started school and has been noted to be unsteady on his feet. He has to walk and run with his legs q | key B: Ataxic | 5 opts
- dice 0.82, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b4-2` vs `pedep2-dp-2` (peds.ep2)
- book: At what age does autism spectrum disorder usually become evident? Select one answer only. | key C: 2–4 years | 5 opts
- other: At what age does autism spectrum disorder usually become evident? | key C: 2–4 years | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b4-2` vs `pedhd-devp-2` (peds)
- book: At what age does autism spectrum disorder usually become evident? Select one answer only. | key C: 2–4 years | 5 opts
- other: At what age does autism spectrum disorder usually become evident? | key C: 2–4 years | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b4-3` vs `pedep2-dp-3` (peds.ep2)
- book: At what age would you expect the clinical features of spastic bilateral cerebral palsy to become evident? Select one answer only. | key A: 0–12 months | 5 opts
- other: At what age would you expect the clinical features of spastic bilateral cerebral palsy to become evident? | key A: 0–12 months | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b4-3` vs `pedhd-devp-3` (peds)
- book: At what age would you expect the clinical features of spastic bilateral cerebral palsy to become evident? Select one answer only. | key A: 0–12 months | 5 opts
- other: At what age would you expect the clinical features of spastic bilateral cerebral palsy to become evident? | key A: 0–12 months | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b4-4` vs `pedep2-dp-4` (peds.ep2)
- book: Fortuna is an 8-month-old black African girl who was born at term. She is seen in the paediatric outpatient department. She can roll over. She does not crawl. She can say ‘dada’, but says it to everyone not just her fath | key D: Left-hand preference | 5 opts
- other: Fortuna is an 8-month-old Black African girl born at term. She is seen in the paediatric outpatient department. She can roll over but does not crawl. She says "dada," but says it to everyone, not just her father. She rea | key D: Left-hand preference | 4 opts
- dice 0.92, key text same true, key letter moved false, fuller book, other lacks: None of the above (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b4-4` vs `pedhd-devp-4` (peds)
- book: Fortuna is an 8-month-old black African girl who was born at term. She is seen in the paediatric outpatient department. She can roll over. She does not crawl. She can say ‘dada’, but says it to everyone not just her fath | key D: Left-hand preference | 5 opts
- other: Fortuna is an 8-month-old black African girl who was born at term. She is seen in the paediatric outpatient department. She can roll over. She does not crawl. She can say ‘dada’, but says it to everyone not just her fath | key D: Left-hand preference | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b4-5` vs `pedep2-dp-5` (peds.ep2)
- book: Gloria is a 19-month-old girl who presents to you in primary care. Her health visitor is concerned because she is still only babbling and says no distinct words. She is able to walk, scribbles with crayons and feeds hers | key A: Hearing test | 5 opts
- other: Gloria is a 19-month-old girl who presents to you in primary care. Her health visitor is concerned because she is still only babbling and says no distinct words. She is able to walk, scribble with crayons, and feed herse | key A: Hearing test | 5 opts
- dice 0.94, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b4-5` vs `pedhd-devp-5` (peds)
- book: Gloria is a 19-month-old girl who presents to you in primary care. Her health visitor is concerned because she is still only babbling and says no distinct words. She is able to walk, scribbles with crayons and feeds hers | key A: Hearing test | 5 opts
- other: Gloria is a 19-month-old girl who presents to you in primary care. Her health visitor is concerned because she is still only babbling and says no distinct words. She is able to walk, scribbles with crayons and feeds hers | key A: Hearing test | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b4-8` vs `pedep2-dp-6` (peds.ep2)
- book: Jenny is an 8-week-old girl who was born preterm at 35 weeks’ gestation. She is seen by her general practitioner for her surveillance review. Her mother is concerned that she does not smile. Her gross motor development a | key A: Cataract | 5 opts
- other: Jenny is an 8-week-old girl born preterm at 35 weeks' gestation. She is seen by her GP for a routine review. Her mother is concerned that she does not smile. Her gross motor development appears normal, and she has starte | key A: Cataract | 5 opts
- dice 0.83, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b4-8` vs `pedhd-devp-6` (peds)
- book: Jenny is an 8-week-old girl who was born preterm at 35 weeks’ gestation. She is seen by her general practitioner for her surveillance review. Her mother is concerned that she does not smile. Her gross motor development a | key A: Cataract | 5 opts
- other: Jenny is an 8-week-old girl who was born preterm at 35 weeks' gestation. She is seen by her general practitioner for her surveillance review. Her mother is concerned that she does not smile. Her gross motor development a | key A: Cataract | 5 opts
- dice 0.96, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b4-9-1` vs `pedep2-dp-7` (peds.ep2)
- book: Which of these investigations [A–J] would you choose to initially undertake to confirm the diagnosis of developmental delay in the children described in the following scenarios? Each investigation can be used once, more  | key F: CT or MRI scan of the brain | 10 opts
- other: Clarissa, a cheerful 20-month-old white British girl, is referred to the child development clinic by her health visitor because she is not yet walking. She was born at term with no complications. She learned to sit witho | key C: CT or MRI scan of the brain | 4 opts
- dice 0.88, key text same true, key letter moved true, fuller book, other lacks: Blood lactate; Chromosome karyotype; Creatine kinase; DNA fluorescent in situ hybridization (FISH) analysis; Maternal amino acids for raised phenylalanine; Thyroid function tests (keyed option kept: true)
- why: Read: same CT/MRI developmental-delay case; live twin has 4 options, keyed option CT or MRI scan of the brain survives

### SAME `pedsa-b4-9-1` vs `pedep2-neu-40` (peds.ep2)
- book: Which of these investigations [A–J] would you choose to initially undertake to confirm the diagnosis of developmental delay in the children described in the following scenarios? Each investigation can be used once, more  | key F: CT or MRI scan of the brain | 10 opts
- other: Clara, a cheerful 20-month-old girl, is referred to the child development clinic by her health visitor because she is not yet walking. She was born at term with no complications. She learnt to sit without support at 10 m | key D: CT or MRI scan of the brain | 5 opts
- dice 0.87, key text same true, key letter moved true, fuller book, other lacks: Blood lactate; Cranial ultrasound scan; DNA fluorescent in situ hybridization (FISH) analysis; EEG; Maternal amino acids for raised phenylalanine (keyed option kept: true)
- why: Read: same CT/MRI developmental-delay case; live twin has 5 options, keyed option survives

### SAME `pedsa-b4-9-1` vs `pedhd-devp-7` (peds)
- book: Which of these investigations [A–J] would you choose to initially undertake to confirm the diagnosis of developmental delay in the children described in the following scenarios? Each investigation can be used once, more  | key F: CT or MRI scan of the brain | 10 opts
- other: Clarissa, a cheerful 20-month-old white British girl, is referred to the child development clinic by her health visitor because she is not yet walking. She was born at term with no complications. She learnt to sit withou | key C: CT or MRI scan of the brain | 5 opts
- dice 0.9, key text same true, key letter moved true, fuller book, other lacks: Blood lactate; Chromosome karyotype; Creatine kinase; DNA fluorescent in situ hybridization (FISH) analysis; Maternal amino acids for raised phenylalanine (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b4-9-2` vs `pedep2-dp-8` (peds.ep2)
- book: Which of these investigations [A–J] would you choose to initially undertake to confirm the diagnosis of developmental delay in the children described in the following scenarios? Each investigation can be used once, more  | key B: Chromosome karyotype | 10 opts
- other: Geoffrey is a 10-month-old Black infant referred to the child development clinic. His mother is concerned because he is slower in his development than her four other children. He can sit only if propped with cushions. He | key A: Chromosome karyotype | 4 opts
- dice 0.77, key text same true, key letter moved true, fuller book, other lacks: Blood lactate; Cranial ultrasound scan; DNA fluorescent in situ hybridization (FISH) analysis; EEG; Maternal amino acids for raised phenylalanine; Thyroid function tests (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b4-9-2` vs `pedhd-devp-8` (peds)
- book: Which of these investigations [A–J] would you choose to initially undertake to confirm the diagnosis of developmental delay in the children described in the following scenarios? Each investigation can be used once, more  | key B: Chromosome karyotype | 10 opts
- other: Geoffrey is a 10-month-old black infant referred to the child development clinic. His mother raised concerns because he is slower in his development than her four other children. He can sit but only if he is propped up w | key A: Chromosome karyotype | 5 opts
- dice 0.92, key text same true, key letter moved true, fuller book, other lacks: Blood lactate; Cranial ultrasound scan; DNA fluorescent in situ hybridization (FISH) analysis; EEG; Maternal amino acids for raised phenylalanine (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b4-9-3` vs `pedep2-dp-9` (peds.ep2)
- book: Which of these investigations [A–J] would you choose to initially undertake to confirm the diagnosis of developmental delay in the children described in the following scenarios? Each investigation can be used once, more  | key C: Congenital infection screen | 10 opts
- other: Batar is a 1-week-old term baby seen in the ophthalmology clinic for cataracts. He has a head circumference of 32 cm (normal range 32.5–37 cm), a weight of 2.3 kg, mild jaundice, pallor, and moderate hepatosplenomegaly.  | key D: Congenital infection screen | 5 opts
- dice 0.79, key text same true, key letter moved true, fuller book, other lacks: Blood lactate; Cranial ultrasound scan; DNA fluorescent in situ hybridization (FISH) analysis; EEG; Maternal amino acids for raised phenylalanine (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b4-9-3` vs `pedhd-devp-9` (peds)
- book: Which of these investigations [A–J] would you choose to initially undertake to confirm the diagnosis of developmental delay in the children described in the following scenarios? Each investigation can be used once, more  | key C: Congenital infection screen | 10 opts
- other: Batar is a 1-week-old baby born at term who is seen in the ophthalmology clinic because of cataracts. He has a head circumference of 32 cm (normal range 32.5–37 cm) and weight of 2.3 kg, mild jaundice, pallor and moderat | key D: Congenital infection screen | 5 opts
- dice 0.89, key text same true, key letter moved true, fuller book, other lacks: Blood lactate; Cranial ultrasound scan; DNA fluorescent in situ hybridization (FISH) analysis; EEG; Maternal amino acids for raised phenylalanine (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b4-9-4` vs `pedep2-dp-10` (peds.ep2)
- book: Which of these investigations [A–J] would you choose to initially undertake to confirm the diagnosis of developmental delay in the children described in the following scenarios? Each investigation can be used once, more  | key H: EEG | 10 opts
- other: Dorcus, a 9-month-old infant, attends the clinic due to unusual movements. She has developed episodes of suddenly throwing her head and arms forward in repetitive bursts. She was able to sit and babble but has stopped do | key B: EEG | 5 opts
- dice 0.78, key text same true, key letter moved true, fuller book, other lacks: Blood lactate; Chromosome karyotype; Creatine kinase; DNA fluorescent in situ hybridization (FISH) analysis; Maternal amino acids for raised phenylalanine (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b4-9-4` vs `pedhd-devp-10` (peds)
- book: Which of these investigations [A–J] would you choose to initially undertake to confirm the diagnosis of developmental delay in the children described in the following scenarios? Each investigation can be used once, more  | key H: EEG | 10 opts
- other: Dorcus, a 9-month-old infant, attends the clinic because of unusual movements. She has developed episodes of suddenly throwing her head and arms forward. These occur in repetitive bursts. She was able to sit and babble b | key B: EEG | 5 opts
- dice 0.85, key text same true, key letter moved true, fuller book, other lacks: Blood lactate; Chromosome karyotype; Creatine kinase; DNA fluorescent in situ hybridization (FISH) analysis; Maternal amino acids for raised phenylalanine (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b4-9-5` vs `pedep2-dp-11` (peds.ep2)
- book: Which of these investigations [A–J] would you choose to initially undertake to confirm the diagnosis of developmental delay in the children described in the following scenarios? Each investigation can be used once, more  | key E: Creatine kinase | 10 opts
- other: Darren is a 3-year-old boy who has difficulty climbing stairs. He always needs support. He walked unsupported at 14 months. His development is otherwise normal. On examination, leg power is reduced, he is hypotonic, but  | key B: Creatine kinase | 5 opts
- dice 0.72, key text same true, key letter moved true, fuller book, other lacks: Blood lactate; Cranial ultrasound scan; DNA fluorescent in situ hybridization (FISH) analysis; EEG; Maternal amino acids for raised phenylalanine (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b4-9-5` vs `pedhd-devp-11` (peds)
- book: Which of these investigations [A–J] would you choose to initially undertake to confirm the diagnosis of developmental delay in the children described in the following scenarios? Each investigation can be used once, more  | key E: Creatine kinase | 10 opts
- other: Darren is a 3-year-old boy who has difficulty climbing stairs. He always needs to hold on to the railings or to have a supporting hand. He walked unsupported at 14 months. His development is otherwise normal. On examinat | key B: Creatine kinase | 5 opts
- dice 0.86, key text same true, key letter moved true, fuller book, other lacks: Blood lactate; Cranial ultrasound scan; DNA fluorescent in situ hybridization (FISH) analysis; EEG; Maternal amino acids for raised phenylalanine (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

## Book chapter 6 Paediatric emergencies

### SAME `pedsa-b6-1` vs `pedhd-emg-1` (peds)
- book: The paediatric team is resuscitating a 3-month-old boy who is in pulseless electrical activity. He was discovered to be blue and lifeless when his parents went to wake him in the morning. The airway has been secured and  | key B: B | 5 opts
- other: The paediatric team is resuscitating a 3-monthold boy who is in pulseless electrical activity. He was discovered to be blue and lifeless when his parents went to wake him in the morning. The airway has been secured and d | key B: B | 5 opts
- dice 0.91, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b6-10` vs `pedep2-res-65` (peds.ep2)
- book: Seb, a 2-year-old boy, was at his cousin’s birthday party. His mother noticed that he has suddenly developed a widespread urticarial rash and has also become flushed in the face. His vital signs are normal and he has no  | key D: Oral antihistamine | 5 opts
- other: Seb, a 2-year-old boy, was at his cousin's birthday party. His mother noticed that he has suddenly developed a widespread urticarial rash and has also become flushed in the face. His vital signs are normal, and he has no | key D: Oral antihistamine | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b6-10` vs `pedep-emg-10` (peds.ep)
- book: Seb, a 2-year-old boy, was at his cousin’s birthday party. His mother noticed that he has suddenly developed a widespread urticarial rash and has also become flushed in the face. His vital signs are normal and he has no  | key D: Oral antihistamine | 5 opts
- other: Seb, a 2-year-old boy, suddenly develops widespread urticaria and facial flushing at a party. Vitals are normal, and there is no respiratory compromise. What is the most appropriate medication? | key D: Oral antihistamine | 5 opts
- dice 0.44, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b6-10` vs `pedhd-emg-10` (peds)
- book: Seb, a 2-year-old boy, was at his cousin’s birthday party. His mother noticed that he has suddenly developed a widespread urticarial rash and has also become flushed in the face. His vital signs are normal and he has no  | key D: Oral antihistamine | 5 opts
- other: Seb, a 2-year-old boy, was at his cousin's birthday party. His mother noticed that he has suddenly developed a widespread urticarial rash and has also become flushed in the face. His vital signs are normal and he has no  | key D: Oral antihistamine | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b6-11` vs `pedep-emg-11` (peds.ep)
- book: Jenny, a 3-year-old girl, was at a village fete. She suddenly developed swollen cheeks and lips and a widespread urticarial rash. She is rushed to the nearby general practice surgery, where it is noted that her breathing | key A: Intramuscular adrenaline | 5 opts
- other: Jenny, a 3-year-old girl, suddenly develops facial swelling, urticaria, and noisy breathing at a village fete. She is distressed and has widespread wheeze. What is the first-line medication? | key A: Intramuscular adrenaline | 5 opts
- dice 0.52, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b6-11` vs `pedep-emg-58` (peds.ep)
- book: Jenny, a 3-year-old girl, was at a village fete. She suddenly developed swollen cheeks and lips and a widespread urticarial rash. She is rushed to the nearby general practice surgery, where it is noted that her breathing | key A: Intramuscular adrenaline | 5 opts
- other: A 3-year-old girl was at a birthday party. She suddenly developed swollen cheeks and lips and a widespread urticarial rash. She is rushed to the nearby general practice surgery, where it is noted that her breathing is ve | key E: Intramuscular adrenaline | 5 opts
- dice 0.94, key text same true, key letter moved true, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b6-11` vs `pedhd-emg-11` (peds)
- book: Jenny, a 3-year-old girl, was at a village fete. She suddenly developed swollen cheeks and lips and a widespread urticarial rash. She is rushed to the nearby general practice surgery, where it is noted that her breathing | key A: Intramuscular adrenaline | 5 opts
- other: Jenny, a 3-year-old girl, was at a village fete. She suddenly developed swollen cheeks and lips and a widespread urticarial rash. She is rushed to the nearby general practice surgery, where it is noted that her breathing | key A: Intramuscular adrenaline | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b6-12` vs `pedep-emg-12` (peds.ep)
- book: There has been a dramatic decline in the incidence of sudden infant death syndrome in the UK. Which of the following is the single most important factor responsible for this decline? | key E: Supine sleeping | 5 opts
- other: The incidence of sudden infant death syndrome has decreased dramatically in the UK. What is the single most important factor responsible for this decline? | key E: Supine sleeping | 5 opts
- dice 0.8, key text same true, key letter moved false, fuller other, other lacks: Keeping baby in parent’s room until 6 months of age; Keeping room cool to prevent overheating; Parents not smoking in the same room as infant (keyed option kept: true)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### UNSURE `pedsa-b6-12` vs `pedep-emg-56` (peds.ep)
- book: There has been a dramatic decline in the incidence of sudden infant death syndrome in the UK. Which of the following is the single most important factor responsible for this decline? | key E: Supine sleeping | 5 opts
- other: Which of the following is the best intervention that effectively prevents the occurrence of sudden infant death syndrome (SIDS)? | key E: Supine sleeping | 5 opts
- dice 0.31, key text same true, key letter moved false, fuller other
- why: asked differently: prevents vs decline

### SAME `pedsa-b6-12` vs `pedep-mf2-2` (peds.ep)
- book: There has been a dramatic decline in the incidence of sudden infant death syndrome in the UK. Which of the following is the single most important factor responsible for this decline? | key E: Supine sleeping | 5 opts
- other: Which of the following would be the single most important factor responsible for a possible decline in the incidence of sudden infant death syndrome (SIDS)? | key E: Supine sleeping | 5 opts
- dice 0.69, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b6-12` vs `pedep-mf3-20` (peds.ep)
- book: There has been a dramatic decline in the incidence of sudden infant death syndrome in the UK. Which of the following is the single most important factor responsible for this decline? | key E: Supine sleeping | 5 opts
- other: Which procedure is considered the single most important factor responsible for a dramatic decline in the incidence of sudden infant death syndrome? | key E: Supine sleeping | 5 opts
- dice 0.76, key text same true, key letter moved false, fuller other, other lacks: Feet to foot of cot; Keeping room cool to prevent overheating (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b6-12` vs `pedhd-emg-12` (peds)
- book: There has been a dramatic decline in the incidence of sudden infant death syndrome in the UK. Which of the following is the single most important factor responsible for this decline? | key E: Supine sleeping | 5 opts
- other: There has been a dramatic decline in the incidence of sudden infant death syndrome in the UK. Which of the following is the single most important factor responsible for this decline? | key E: Supine sleeping | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b6-13-1` vs `pedep-emg-13` (peds.ep)
- book: For each of the following patients seen in the emergency department select the most appropriate next step in the management plan from the following list (A–L). Each option may be used once, more than once, or not at all. | key I: High-flow oxygen therapy | 12 opts
- other: Nathaniel, a 4-year-old boy, presents with shortness of breath and oxygen saturation of 90%. He can speak and has a capillary refill time <2 seconds. What is the most appropriate next step? | key D: High-flow oxygen therapy | 5 opts
- dice 0.56, key text same true, key letter moved true, fuller book, other lacks: Bag and mask ventilation; Check conscious level [alert, voice, pain, unresponsive (AVPU)]; Commence cardiac compressions using both hands, one hand on top of the other; Commence cardiac compressions using the encircling method; Commence cardiac compressions using one hand on the sternum; Intravenous access; Intravenous fluid; Secondary survey (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b6-13-1` vs `pedhd-emg-13` (peds)
- book: For each of the following patients seen in the emergency department select the most appropriate next step in the management plan from the following list (A–L). Each option may be used once, more than once, or not at all. | key I: High-flow oxygen therapy | 12 opts
- other: Nathaniel, a 4-year-old boy, is brought to hospital with shortness of breath. He is able to talk but has oxygen saturation of 90%. His capillary refill time is less than 2 seconds. Which of the following is the most appr | key D: High-flow oxygen therapy | 5 opts
- dice 0.74, key text same true, key letter moved true, fuller book, other lacks: Bag and mask ventilation; Check conscious level [alert, voice, pain, unresponsive (AVPU)]; Commence cardiac compressions using both hands, one hand on top of the other; Commence cardiac compressions using one hand on the sternum; Intravenous access; Intravenous fluid; Secondary survey (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b6-13-2` vs `pedep-emg-14` (peds.ep)
- book: For each of the following patients seen in the emergency department select the most appropriate next step in the management plan from the following list (A–L). Each option may be used once, more than once, or not at all. | key A: Airway opening manoeuvres | 12 opts
- other: Kelsey, a 2-year-old girl, is found unconscious in the garden. In the resuscitation room, she is gasping and moaning. What is the next most appropriate step? | key C: Airway opening manoeuvres | 5 opts
- dice 0.57, key text same true, key letter moved true, fuller book, other lacks: Bag and mask ventilation; Check conscious level [alert, voice, pain, unresponsive (AVPU)]; Commence cardiac compressions using both hands, one hand on top of the other; Commence cardiac compressions using the encircling method; Commence cardiac compressions using one hand on the sternum; Intravenous access; Intravenous fluid; Secondary survey (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b6-13-2` vs `pedhd-emg-14` (peds)
- book: For each of the following patients seen in the emergency department select the most appropriate next step in the management plan from the following list (A–L). Each option may be used once, more than once, or not at all. | key A: Airway opening manoeuvres | 12 opts
- other: Kelsey, a 2-year-old girl, is found unconscious in the garden. When she is bought into the resuscitation room she is gasping and moaning. Which of the following is the most appropriate next step in the management of that | key C: Airway opening manoeuvres | 5 opts
- dice 0.68, key text same true, key letter moved true, fuller book, other lacks: Bag and mask ventilation; Check conscious level [alert, voice, pain, unresponsive (AVPU)]; Commence cardiac compressions using both hands, one hand on top of the other; Commence cardiac compressions using one hand on the sternum; Intravenous access; Intravenous fluid; Secondary survey (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b6-13-3` vs `pedhd-emg-15` (peds)
- book: For each of the following patients seen in the emergency department select the most appropriate next step in the management plan from the following list (A–L). Each option may be used once, more than once, or not at all. | key G: Commence cardiac compressions using the encircling method | 12 opts
- other: Ahmed, aged 2 months, is found by his mother to be pale and floppy in his cot. The paramedics are giving bag and valve mask ventilation when he arrives in the resuscitation room and his chest is moving well. His heart ra | key E: Commence cardiac compressions using the hands encircling method | 5 opts
- dice 0.78, key text same true, key letter moved true, fuller book, other lacks: Bag and mask ventilation; Check conscious level [alert, voice, pain, unresponsive (AVPU)]; Commence cardiac compressions using both hands, one hand on top of the other; Commence cardiac compressions using one hand on the sternum; Intravenous access; Intravenous fluid; Secondary survey (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b6-13-4` vs `pedhd-emg-16` (peds)
- book: For each of the following patients seen in the emergency department select the most appropriate next step in the management plan from the following list (A–L). Each option may be used once, more than once, or not at all. | key C: Check blood glucose | 12 opts
- other: Daniel, age 10 years, has diabetes mellitus and has been playing football at his friend's house. He has been brought to the emergency department as he has become. Which of the following is the most appropriate next step  | key A: Check blood glucose | 5 opts
- dice 0.68, key text same true, key letter moved true, fuller book, other lacks: Bag and mask ventilation; Check conscious level [alert, voice, pain, unresponsive (AVPU)]; Commence cardiac compressions using both hands, one hand on top of the other; Commence cardiac compressions using one hand on the sternum; Intravenous access; Intravenous fluid; Secondary survey (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b6-13-5` vs `pedep-emg-17` (peds.ep)
- book: For each of the following patients seen in the emergency department select the most appropriate next step in the management plan from the following list (A–L). Each option may be used once, more than once, or not at all. | key E: Check pupils | 12 opts
- other: Aisha, a 3-year-old girl, had a seizure. She is on high-flow oxygen and unresponsive to pain. Blood glucose is being checked. What is the next most appropriate step? | key B: Check pupils | 5 opts
- dice 0.43, key text same true, key letter moved true, fuller book, other lacks: Bag and mask ventilation; Check conscious level [alert, voice, pain, unresponsive (AVPU)]; Commence cardiac compressions using both hands, one hand on top of the other; Commence cardiac compressions using the encircling method; Commence cardiac compressions using one hand on the sternum; Intravenous access; Intravenous fluid; Secondary survey (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b6-13-5` vs `pedhd-emg-17` (peds)
- book: For each of the following patients seen in the emergency department select the most appropriate next step in the management plan from the following list (A–L). Each option may be used once, more than once, or not at all. | key E: Check pupils | 12 opts
- other: Aisha, a 3-year-old girl, is bought to hospital by the paramedics as she has had a seizure. She is receiving high-flow oxygen, her breathing is regular, and the cardiac monitor shows a heart rate of 100 beats/min. She is | key B: Check pupils | 5 opts
- dice 0.82, key text same true, key letter moved true, fuller book, other lacks: Bag and mask ventilation; Check conscious level [alert, voice, pain, unresponsive (AVPU)]; Commence cardiac compressions using both hands, one hand on top of the other; Commence cardiac compressions using one hand on the sternum; Intravenous access; Intravenous fluid; Secondary survey (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b6-2` vs `pedep-emg-2` (peds.ep)
- book: You are in the Acute Assessment Unit and see David, a 15-month-old boy, who has a fever of 38.5° C. He has had a runny nose, cough and a fever for 3 days. Since this morning he has slept and has been difficult to wake. H | key E: Septicaemia | 5 opts
- other: You are in the Acute Assessment Unit and assess David, a 15-month-old boy, who has a fever of 38.5°C. He has had a runny nose, cough, and fever for 3 days. Since this morning, he has been sleeping excessively and is diff | key E: Septicaemia | 5 opts
- dice 0.87, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b6-2` vs `pedhd-emg-2` (peds)
- book: You are in the Acute Assessment Unit and see David, a 15-month-old boy, who has a fever of 38.5° C. He has had a runny nose, cough and a fever for 3 days. Since this morning he has slept and has been difficult to wake. H | key E: Septicaemia | 5 opts
- other: You are in the Acute Assessment Unit and see David, a 15-month-old boy, who has a fever of 38.5°C. He has had a runny nose, cough and a fever for 3 days. Since this morning he has slept and has been difficult to wake. Hi | key E: Septicaemia | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b6-3` vs `pedep-emg-3` (peds.ep)
- book: A 3-year-old boy who is unconscious arrives in the Emergency Department. You manage his airway, breathing and circulation. His blood glucose is normal. On examination you note his pupils are as in Fig. 6.3. His temperatu | key E: Opiate poisoning | 5 opts
- other: A 3-year-old boy who is unconscious arrives at the Emergency Department. Airway, breathing, and circulation have been managed. Blood glucose is normal. On examination, his pupils are bilaterally pinpoint. Temperature and | key E: Opiate poisoning | 5 opts
- dice 0.7, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b6-3` vs `pedhd-emg-3` (peds)
- book: A 3-year-old boy who is unconscious arrives in the Emergency Department. You manage his airway, breathing and circulation. His blood glucose is normal. On examination you note his pupils are as in Fig. 6.3. His temperatu | key E: Opiate poisoning | 5 opts
- other: A 3-year-old boy who is unconscious arrives in the Emergency Department. You manage his airway, breathing and circulation. His blood glucose is normal. On examination you note his pupils are as in the opposite figure (bi | key E: Opiate poisoning | 5 opts
- dice 0.89, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b6-4` vs `pedep-emg-4` (peds.ep)
- book: You are called to see a 3-year-old boy with a high fever. The nurse is worried that he is very sleepy. As you walk into the resuscitation room he makes no spontaneous response. You try calling his name but he makes no re | key B: 9 | 5 opts
- other: You are called to assess a 3-year-old boy with a high fever. The nurse reports that he is very sleepy. On entering the resuscitation room, the child makes no spontaneous response. When his name is called, there is no res | key B: 9 | 5 opts
- dice 0.8, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b6-4` vs `pedhd-emg-4` (peds)
- book: You are called to see a 3-year-old boy with a high fever. The nurse is worried that he is very sleepy. As you walk into the resuscitation room he makes no spontaneous response. You try calling his name but he makes no re | key B: 9 | 5 opts
- other: You are called to see a 3-year-old boy with a high fever. The nurse is worried that he is very sleepy. As you walk into the resuscitation room he makes no spontaneous response. You try calling his name but he makes no re | key B: 9 | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b6-5` vs `pedep-emg-5` (peds.ep)
- book: Ryan, aged 10 months, is rushed to the children’s emergency department after being found submerged in the bath. His mother runs screaming into the department saying ‘Help my baby, please’. Which is the next most appropri | key E: Stimulate the baby and shout for help | 5 opts
- other: Ryan, aged 10 months, is rushed to the children's emergency department after being found submerged in the bath. His mother runs in screaming, “Help my baby, please.” What is the next most appropriate step? | key E: Stimulate the baby and shout for help | 5 opts
- dice 0.94, key text same true, key letter moved false, fuller other, other lacks: Place the child onto the examination couch and put his head into the neutral position (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b6-5` vs `pedhd-emg-5` (peds)
- book: Ryan, aged 10 months, is rushed to the children’s emergency department after being found submerged in the bath. His mother runs screaming into the department saying ‘Help my baby, please’. Which is the next most appropri | key E: Stimulate the baby and shout for help | 5 opts
- other: Ryan, aged 10 months, is rushed to the children's emergency department after being found submerged in the bath. His mother runs screaming into the department saying 'Help my baby, please'. Which is the next most appropri | key E: Stimulate the baby and shout for help | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b6-6` vs `pedep-emg-6` (peds.ep)
- book: Mohammed, aged 8 months, has been vomiting and off his feeds for 2 days. Initially, he had episodes of crying uncontrollably, drawing his legs up into his abdomen as if in pain, and appeared fractious. His mother gave hi | key B: Intussusception | 5 opts
- other: Mohammed, aged 8 months, has been vomiting and refusing feeds for 2 days. Initially, he had episodes of intense crying, drawing his legs up as if in pain, and appeared irritable. Despite oral rehydration, his vomiting co | key B: Intussusception | 5 opts
- dice 0.76, key text same true, key letter moved false, fuller other, other lacks: Malrotation and volvulus (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b6-6` vs `pedhd-emg-6` (peds)
- book: Mohammed, aged 8 months, has been vomiting and off his feeds for 2 days. Initially, he had episodes of crying uncontrollably, drawing his legs up into his abdomen as if in pain, and appeared fractious. His mother gave hi | key B: Intussusception | 5 opts
- other: Mohammed, aged 8 months, has been vomiting and off his feeds for 2 days. Initially, he had episodes of crying uncontrollably, drawing his legs up into his abdomen as if in pain, and appeared fractious. His mother gave hi | key B: Intussusception | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b6-7` vs `pedep-emg-7` (peds.ep)
- book: Mohammed, aged 8 months, presented with the clinical scenario described in question 6.7. He weighs 8 kg. He needs a bolus of normal saline 0.9% to treat his shock. What volume of fluid would you give initially? Select on | key B: 160 ml | 5 opts
- other: Mohammed (8 months old, 8 kg) is in shock and requires a normal saline 0.9% bolus. What is the initial volume you would administer? | key B: 160 mL | 5 opts
- dice 0.57, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b6-7` vs `pedhd-emg-7` (peds)
- book: Mohammed, aged 8 months, presented with the clinical scenario described in question 6.7. He weighs 8 kg. He needs a bolus of normal saline 0.9% to treat his shock. What volume of fluid would you give initially? Select on | key B: 160 ml | 5 opts
- other: Mohammed, aged 8 months, presented with the clinical scenario described above. He weighs 8 kg. He needs a bolus of normal saline 0.9% to treat his shock. What volume of fluid would you give initially? | key B: 160 ml | 5 opts
- dice 0.93, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b6-8` vs `pedep-emg-8` (peds.ep)
- book: Mohammed, aged 8 months, has presented with the clinical scenario described in Questions 6.6 and 6.7. He has received the fluid bolus of normal saline 0.9%, which has improved his condition. From his presentation you sus | key E: 1600 ml | 5 opts
- other: . Mohammed, aged 8 months, has presented with the clinical scenario described in the previous two questions. He has received the fluid bolus of normal saline 0.9%, which has improved his condition. From his presentation, | key E: 1600 mL | 5 opts
- dice 0.93, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b6-8` vs `pedhd-emg-8` (peds)
- book: Mohammed, aged 8 months, has presented with the clinical scenario described in Questions 6.6 and 6.7. He has received the fluid bolus of normal saline 0.9%, which has improved his condition. From his presentation you sus | key E: 1600 ml | 5 opts
- other: Mohammed, aged 8 months, has presented with the clinical scenario described in the previous 2 questions. He has received the fluid bolus of normal saline 0.9%, which has improved his condition. From his presentation you  | key E: 1600 ml | 5 opts
- dice 0.96, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### UNSURE `pedsa-b6-9` vs `pedep-emg-9` (peds.ep)
- book: You are called to the resuscitation room where there is a 6-year-old child who has arrived by ambulance. The child has been having a generalized seizure for 15 minutes. The ambulance crew gave a dose of buccal midazolam  | key B: Check blood glucose level | 5 opts
- other: A 6-year-old child is brought to the resuscitation room after a 15-minute generalized seizure. Buccal midazolam was given 5 minutes ago. Airway and oxygen are managed; capillary refill is <2 sec and heart rate is 120 bpm | key B: Check blood glucose | 5 opts
- dice 0.56, key text same false, key letter moved false, fuller other, other lacks: Check blood glucose level; Gain intravenous access (keyed option kept: false)
- why: live key differs, stems alike

### SAME `pedsa-b6-9` vs `pedhd-emg-9` (peds)
- book: You are called to the resuscitation room where there is a 6-year-old child who has arrived by ambulance. The child has been having a generalized seizure for 15 minutes. The ambulance crew gave a dose of buccal midazolam  | key B: Check blood glucose level | 5 opts
- other: You are called to the resuscitation room where there is a 6-year-old child who has arrived by ambulance. The child has been having a generalized seizure for 15 minutes. The ambulance crew gave a dose of buccal midazolam  | key B: Check blood glucose level | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

## Book chapter 7 Accidents and poisoning

### SAME `pedsa-b7-1` vs `pedhd-acc-1` (peds)
- book: What is the most common cause of death in children aged 1 year to 14 years in the UK? Select one answer only. | key D: Malignant disease | 5 opts
- other: What is the most common cause of death in children aged 1 year to 14 years in the UK? | key D: Malignant disease | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b7-5` vs `pedep-acc-2` (peds.ep)
- book: Louise, aged 4 years, was hit by a car in the local supermarket car park. She is brought to the Emergency Department by ambulance. An initial assessment shows • Airway — talking to mother • Breathing — receiving oxygen v | key D: Intravenous access | 5 opts
- other: Louise, aged 4 years, was hit by a car in the local supermarket car park. She is brought to the Emergency Department by ambulance. An initial assessment shows:
Airway: Talking to mother
Breathing: Receiving oxygen via a  | key D: Intravenous access | 5 opts
- dice 0.99, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b7-5` vs `pedhd-acc-2` (peds)
- book: Louise, aged 4 years, was hit by a car in the local supermarket car park. She is brought to the Emergency Department by ambulance. An initial assessment shows • Airway — talking to mother • Breathing — receiving oxygen v | key D: Intravenous access | 5 opts
- other: Louise, aged 4 years, was hit by a car in the local supermarket car park. She is brought to the Emergency Department by ambulance.
An initial assessment shows:
• Airway — talking to mother
• Breathing — receiving oxygen  | key D: Intravenous access | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b7-8` vs `pedep-emg-33` (peds.ep)
- book: Roberto (as outlined in Question 7.7) is much more settled following intravenous analgesia. From the list of possible management options below, which should be undertaken first? Select one answer only. | key A: Commence intravenous 0.9% saline | 5 opts
- other: Roberto is a 2.5-year-old boy. He pulled a chip pan off the cooker and has been extensively burnt. He is rushed to the nearest Children’s Emergency Department. His airway, breathing and circulation are satisfactory. His  | key A: Commence intravenous 0.9% saline | 5 opts
- dice 0.38, key text same true, key letter moved false, fuller other
- why: Read: book stem is a back-reference to Q7.7 (Roberto, burn); live prints the whole burn scenario plus the same follow-up question; keyed Commence intravenous 0.9% saline in both; live is self-contained (fuller)

### SAME `pedsa-b7-8` vs `pedhd-acc-3` (peds)
- book: Roberto (as outlined in Question 7.7) is much more settled following intravenous analgesia. From the list of possible management options below, which should be undertaken first? Select one answer only. | key A: Commence intravenous 0.9% saline | 5 opts
- other: Roberto (a boy who suffered an extensive burn) is much more settled following intravenous analgesia. From the list of possible management options below, which should be undertaken first? | key A: Commence intravenous 0.9% saline | 5 opts
- dice 0.77, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

## Book chapter 9 Genetics

### SAME `pedsa-b9-1` vs `pedep2-gen-8` (peds.ep2)
- book: Michael is a 6-year-old boy who is prone to bleeding. He has a problem with one of his clotting factors and his parents have been told that this is caused by a faulty gene. He is otherwise well and has no other medical p | key E: X-linked recessive | 5 opts
- other: Michael is a 6-year-old boy who is prone to bleeding. He has a problem with one of his clotting factors, and his parents have been told that this is caused by a faulty gene. He is otherwise well and has no other medical  | key E: X-linked recessive | 5 opts
- dice 0.91, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b9-1` vs `pedhd-gen-1` (peds)
- book: Michael is a 6-year-old boy who is prone to bleeding. He has a problem with one of his clotting factors and his parents have been told that this is caused by a faulty gene. He is otherwise well and has no other medical p | key E: X-linked recessive | 5 opts
- other: Michael is a 6-year-old boy who is prone to bleeding. He has a problem with one of his clotting factors and his parents have been told that this is caused by a faulty gene. He is otherwise well and has no other medical p | key E: X-linked recessive | 5 opts
- dice 0.91, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b9-10` vs `pedep2-gen-21` (peds.ep2)
- book: A Bangladeshi couple are referred for genetic counselling. Both parents are carriers of a faulty gene PEX1; possession of two abnormal copies of this gene leads to death in infancy. They have lost two children who both d | key D: 2 in 3 | 5 opts
- other: A Bangladeshi couple are referred for genetic counselling. Both parents are carriers of a faulty PEX1 gene; possession of two abnormal copies leads to death in infancy. They have lost two children who both died in the fi | key D: 2 in 3 | 5 opts
- dice 0.94, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b9-10` vs `pedhd-gen-10` (peds)
- book: A Bangladeshi couple are referred for genetic counselling. Both parents are carriers of a faulty gene PEX1; possession of two abnormal copies of this gene leads to death in infancy. They have lost two children who both d | key D: 2 in 3 | 5 opts
- other: A Bangladeshi couple are referred for genetic counselling. Both parents are carriers of a faulty gene PEX1; possession of two abnormal copies of this gene leads to death in infancy. They have lost two children who both d | key D: 2 in 3 | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b9-11` vs `pedep2-gen-37` (peds.ep2)
- book: Gemma and Mark, who are both well, are planning to start a family. Gemma’s older brother has cystic fibrosis. There is no history of cystic fibrosis in Mark’s family. The family tree is shown in Fig. 9.4. What is the cha | key D: 1 in 150 | 5 opts
- other: Gemma and Mark, who are both well, are planning to start a family. Gemma's older brother has cystic fibrosis. There is no history of cystic fibrosis in Mark's family. The family tree is shown in the opposite figure. What | key D: 1 in 150 | 5 opts
- dice 0.94, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b9-11` vs `pedhd-gen-11` (peds)
- book: Gemma and Mark, who are both well, are planning to start a family. Gemma’s older brother has cystic fibrosis. There is no history of cystic fibrosis in Mark’s family. The family tree is shown in Fig. 9.4. What is the cha | key D: 1 in 150 | 5 opts
- other: Gemma and Mark, who are both well, are planning to start a family. Gemma’s older brother has cystic fibrosis. There is no history of cystic fibrosis in Mark’s family. The family tree is shown in the opposite figure. What | key D: 1 in 150 | 5 opts
- dice 0.94, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b9-12` vs `pedep2-gen-38` (peds.ep2)
- book: A mother comes to see the geneticist. She has two children, Robert and Elizabeth. They both suffer from a genetic disorder. The geneticist takes a history and draws the family tree (Fig. 9.5). What is the likely pattern  | key A: Autosomal dominant | 5 opts
- other: A mother comes to see the geneticist. She has two children, Robert and Elizabeth, both of whom suffer from a genetic disorder. The geneticist takes a history and draws a family tree (see opposite figure). What is the lik | key A: Autosomal dominant | 5 opts
- dice 0.86, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b9-12` vs `pedhd-gen-12` (peds)
- book: A mother comes to see the geneticist. She has two children, Robert and Elizabeth. They both suffer from a genetic disorder. The geneticist takes a history and draws the family tree (Fig. 9.5). What is the likely pattern  | key A: Autosomal dominant | 5 opts
- other: A mother comes to see the geneticist. She has two children, Robert and Elizabeth. They both suffer from a genetic disorder. The geneticist takes a history and draws the family tree (shown in the opposite figure). What is | key A: Autosomal dominant | 5 opts
- dice 0.89, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b9-13` vs `pedep2-gen-22` (peds.ep2)
- book: George has Klinefelter syndrome. What is his karyotype? Select one answer only. | key E: 47, XXY | 5 opts
- other: George has Klinefelter syndrome. What is his karyotype? | key E: 47, XXY | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b9-13` vs `pedhd-gen-13` (peds)
- book: George has Klinefelter syndrome. What is his karyotype? Select one answer only. | key E: 47, XXY | 5 opts
- other: George has Klinefelter syndrome. What is his karyotype? | key E: 47, XXY | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b9-15-1` vs `pedep2-gen-23` (peds.ep2)
- book: The following (A–N) is a list of genetic disorders. For each child described select the most likely genetic diagnosis from the list. Each answer may be used, more than once, or not at all. Rachael is a 3-month-old girl w | key D: Down syndrome | 14 opts
- other: Rachael is a 3-month-old girl who attends the Emergency Department because of rapid breathing. She is the seventh infant born to a 39-year-old mother. On developmental history, she smiled at 7 weeks but cannot yet hold h | key B: Down syndrome | 5 opts
- dice 0.68, key text same true, key letter moved true, fuller book, other lacks: Angelman syndrome; Cystic fibrosis; Duchenne muscular dystrophy; Edward syndrome; Fragile X syndrome; Neurofibromatosis; Noonan syndrome; Patau syndrome; Williams syndrome (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b9-15-1` vs `pedhd-gen-14` (peds)
- book: The following (A–N) is a list of genetic disorders. For each child described select the most likely genetic diagnosis from the list. Each answer may be used, more than once, or not at all. Rachael is a 3-month-old girl w | key D: Down syndrome | 14 opts
- other: Rachael is a 3-month-old girl who attends the Emergency Department because of rapid breathing. She is the 5th infant born to a 39-year-old mother. When you take her developmental history, you find she smiled at 7 weeks b | key B: Down syndrome | 5 opts
- dice 0.83, key text same true, key letter moved true, fuller book, other lacks: Angelman syndrome; Cystic fibrosis; Duchenne muscular dystrophy; Edward syndrome; Fragile X syndrome; Neurofibromatosis; Noonan syndrome; Patau syndrome; Williams syndrome (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b9-16-1` vs `pedep2-mf2-21` (peds.ep2)
- book: For each of the case summaries below, select the most likely mode of genetic inheritance from the list (A–G) below. Each answer can be used once, more than once, or not at all. Jack is a 3-year-old boy whose father has a | key A: Autosomal dominant disorder | 7 opts
- other: Jack is a 3-year-old boy whose father has a genetic disorder associated with short stature. Jack is also very short, has bowed legs and a very prominent forehead. His head is disproportionately large compared with his bo | key A: Autosomal dominant disorder | 5 opts
- dice 0.79, key text same true, key letter moved false, fuller book, other lacks: Imprinting from uniparental disomy; Polygenic (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b9-2` vs `pedep2-gen-36` (peds.ep2)
- book: The female marked with an arrow in Fig. 9.2 is planning on starting a family. If she were to give birth to a son, what would be the risk of him being affected by the disorder? Select one answer only. | key D: 1 in 4 | 5 opts
- other: The female marked with an arrow in the opposite figure is planning to start a family. If she were to give birth to a son, what would be the risk of him being affected by the disorder? | key D: 1 in 4 | 5 opts
- dice 0.83, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b9-2` vs `pedhd-gen-2` (peds)
- book: The female marked with an arrow in Fig. 9.2 is planning on starting a family. If she were to give birth to a son, what would be the risk of him being affected by the disorder? Select one answer only. | key D: 1 in 4 | 5 opts
- other: The female marked with an arrow in the opposite figure is planning on starting a family. If she were to give birth to a son, what would be the risk of him being affected by the disorder? | key D: 1 in 4 | 5 opts
- dice 0.88, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b9-3` vs `pedep2-gen-20` (peds.ep2)
- book: Mr and Mrs Walsh attend the clinic with their new baby, Ophelia, who has Down syndrome. They are keen to have further children and want to know more about their future risk of having children with Down syndrome. What chr | key B: Nondisjunction | 5 opts
- other: Mr. and Mrs. Walsh attend the clinic with their new baby, Ophelia, who has Down syndrome. They are keen to have further children and want to know more about their future risk of having children with Down syndrome. What c | key B: Nondisjunction | 5 opts
- dice 0.93, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b9-3` vs `pedhd-gen-3` (peds)
- book: Mr and Mrs Walsh attend the clinic with their new baby, Ophelia, who has Down syndrome. They are keen to have further children and want to know more about their future risk of having children with Down syndrome. What chr | key B: Nondisjunction | 5 opts
- other: Mr and Mrs Walsh attend the clinic with their new baby, Ophelia, who has Down syndrome. They are keen to have further children and want to know more about their future risk of having children with Down syndrome. What chr | key B: Nondisjunction | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b9-4` vs `pedep2-gen-16` (peds.ep2)
- book: Mr and Mrs David are seen by the geneticists as their baby, Sarah, has Down syndrome. Her chromosomes are examined. Three copies of chromosome 21 are seen, one of which is attached to chromosome 14. How would you describ | key E: Unbalanced Robertsonian translocation | 5 opts
- other: Mr. and Mrs. David are seen by the geneticist as their baby, Sarah, has Down syndrome. Her chromosomes are examined, and three copies of chromosome 21 are seen, one of which is attached to chromosome 14. How would you de | key E: Unbalanced Robertsonian translocation | 5 opts
- dice 0.96, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b9-4` vs `pedep2-mf1-24` (peds.ep2)
- book: Mr and Mrs David are seen by the geneticists as their baby, Sarah, has Down syndrome. Her chromosomes are examined. Three copies of chromosome 21 are seen, one of which is attached to chromosome 14. How would you describ | key E: Unbalanced Robertsonian translocation | 5 opts
- other: When a girl with Down syndrome was investigated, three copies of chromosome 21 were seen in karyotyping, one of which is attached to chromosome 14. How would you describe this abnormality? | key E: Unbalanced Robertsonian translocation | 5 opts
- dice 0.63, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b9-4` vs `pedhd-gen-4` (peds)
- book: Mr and Mrs David are seen by the geneticists as their baby, Sarah, has Down syndrome. Her chromosomes are examined. Three copies of chromosome 21 are seen, one of which is attached to chromosome 14. How would you describ | key E: Unbalanced Robertsonian translocation | 5 opts
- other: Mr and Mrs David are seen by the geneticists as their baby, Sarah, has Down syndrome. Her chromosomes are examined. Three copies of chromosome 21 are seen, one of which is attached to chromosome 14. How would you describ | key E: Unbalanced Robertsonian translocation | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b9-5` vs `pedep2-gen-17` (peds.ep2)
- book: Olive is a 10-day-old baby with Down syndrome. On examination, you hear a loud heart murmur. What is the most likely cause? Select one answer only. | key B: Atrioventricular septal defect | 5 opts
- other: Olive is a 10-day-old baby with Down syndrome. On examination, you hear a loud heart murmur. What is the most likely cause? | key B: Atrioventricular septal defect | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b9-5` vs `pedhd-gen-5` (peds)
- book: Olive is a 10-day-old baby with Down syndrome. On examination, you hear a loud heart murmur. What is the most likely cause? Select one answer only. | key B: Atrioventricular septal defect | 5 opts
- other: Olive is a 10-day-old baby with Down syndrome. On examination, you hear a loud heart murmur. What is the most likely cause? | key B: Atrioventricular septal defect | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b9-6` vs `pedep2-gen-18` (peds.ep2)
- book: Fiona is a well 4-year-old girl with Down syndrome. She attends her yearly follow-up appointment with her mother. There are no real problems other than constipation, for which her general practitioner has started treatme | key D: Thyroid function tests | 5 opts
- other: Fiona is a well 4-year-old girl with Down syndrome. She attends her yearly follow-up appointment with her mother. There are no real problems other than constipation, for which her general practitioner has started treatme | key D: Thyroid function tests | 4 opts
- dice 0.96, key text same true, key letter moved false, fuller book, other lacks: Vitamin D levels (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b9-6` vs `pedep-gp-2` (peds.ep)
- book: Fiona is a well 4-year-old girl with Down syndrome. She attends her yearly follow-up appointment with her mother. There are no real problems other than constipation, for which her general practitioner has started treatme | key D: Thyroid function tests | 5 opts
- other: A 4-year-old girl with Down syndrome, Saima, attends her routine annual follow-up with her mother. She is generally well, except for a history of constipation. On plotting her growth on a Down syndrome-specific chart, he | key D: Thyroid function tests | 5 opts
- dice 0.65, key text same true, key letter moved false, fuller other, other lacks: Coeliac screen (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b9-6` vs `pedhd-gen-6` (peds)
- book: Fiona is a well 4-year-old girl with Down syndrome. She attends her yearly follow-up appointment with her mother. There are no real problems other than constipation, for which her general practitioner has started treatme | key D: Thyroid function tests | 5 opts
- other: Fiona is a well 4-year-old girl with Down syndrome. She attends her yearly follow-up appointment with her mother. There are no real problems other than constipation, for which her general practitioner has started treatme | key D: Thyroid function tests | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b9-7` vs `pedep2-gen-19` (peds.ep2)
- book: Mary is an infant with Down syndrome. Her antenatal scans had all been normal and an echocardiogram on the neonatal unit shortly after birth was normal. She attends the community clinic for the first time at 4 weeks of a | key D: Leukaemia | 5 opts
- other: Mary is an infant with Down syndrome. Her antenatal scans were normal, and an echocardiogram in the neonatal unit shortly after birth was also normal. She attends the community clinic at 4 weeks of age, thriving and feed | key D: Leukaemia | 5 opts
- dice 0.74, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b9-7` vs `pedhd-gen-7` (peds)
- book: Mary is an infant with Down syndrome. Her antenatal scans had all been normal and an echocardiogram on the neonatal unit shortly after birth was normal. She attends the community clinic for the first time at 4 weeks of a | key D: Leukaemia | 5 opts
- other: Mary is an infant with Down syndrome. Her antenatal scans had all been normal and an echocardiogram on the neonatal unit shortly after birth was normal. She attends the community clinic for the first time at 4 weeks of a | key D: Leukaemia | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b9-8` vs `pedep2-gen-14` (peds.ep2)
- book: A Pakistani couple are referred for genetic counselling. They have lost two children who both died in the first 2 years of life. They have one healthy girl, who is 3 years of age. The faulty gene has been identified and  | key B: Autosomal recessive | 5 opts
- other: A Pakistani couple are referred for genetic counselling. They have lost two children who both died in the first 2 years of life. They have one healthy daughter who is 3 years old. The faulty gene has been identified, and | key B: Autosomal recessive | 5 opts
- dice 0.87, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b9-8` vs `pedhd-gen-8` (peds)
- book: A Pakistani couple are referred for genetic counselling. They have lost two children who both died in the first 2 years of life. They have one healthy girl, who is 3 years of age. The faulty gene has been identified and  | key B: Autosomal recessive | 5 opts
- other: A Pakistani couple are referred for genetic counselling. They have lost two children who both died in the first 2 years of life. They have one healthy girl, who is 3 years of age. The faulty gene has been identified and  | key B: Autosomal recessive | 5 opts
- dice 0.94, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b9-9` vs `pedep2-gen-15` (peds.ep2)
- book: The same couple (Fig. 9.3) tell you that they would like more children. What is the risk of them having another affected baby? Select one answer only. | key C: 1 in 4 | 5 opts
- other: The same couple (as in the previous question) would like more children. What is the risk of them having another affected baby? | key C: 1 in 4 | 5 opts
- dice 0.75, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b9-9` vs `pedhd-gen-9` (peds)
- book: The same couple (Fig. 9.3) tell you that they would like more children. What is the risk of them having another affected baby? Select one answer only. | key C: 1 in 4 | 5 opts
- other: A Pakistani couple were referred for genetic counselling. They have lost two children who both died in the first 2 years of life, and they have one healthy girl, who is 3 years of age. The faulty gene has been identified | key C: 1 in 4 | 5 opts
- dice 0.42, key text same true, key letter moved false, fuller other
- why: Read: book stem is a back-reference to the Fig 9 case; live prints the full case; keyed 1 in 4 in both

## Book chapter 10 Perinatal medicine

### SAME `pedsa-b10-1` vs `pedep-per-1` (peds.ep)
- book: A mother has just found out she is pregnant and asks for advice about how to look after her health and nutrition during pregnancy. She smokes 15 cigarettes a day. You recommend she gives up smoking. If she continues to s | key A: Growth restriction | 5 opts
- other: A mother has just found out she is pregnant and asks for advice about how to look after her health and nutrition during pregnancy. She smokes 15 cigarettes a day. You recommend she gives up smoking. If she continues to s | key A: Growth restriction | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b10-1` vs `pedhd-peri-1` (peds)
- book: A mother has just found out she is pregnant and asks for advice about how to look after her health and nutrition during pregnancy. She smokes 15 cigarettes a day. You recommend she gives up smoking. If she continues to s | key A: Growth restriction | 5 opts
- other: A mother has just found out she is pregnant and asks for advice about how to look after her health and nutrition during pregnancy. She smokes 15 cigarettes a day. You recommend she gives up smoking. If she continues to s | key A: Growth restriction | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### UNSURE `pedsa-b10-12` vs `pedep-mf1-32` (peds.ep)
- book: Mohammed is 24 hours old. His mother develops chicken pox (varicella) 1 day after his delivery. From the following list of options what is the best advice you could give? Select one answer only. | key E: There is a significant risk of serious neonatal infection | 5 opts
- other: Parents of a 24-hour-old newborn are concerned because his mother developed chickenpox one day after his delivery. From the following list of options, what is the best advice you could give? | key E: The infant should receive varicella zoster immunoglobulin | 5 opts
- dice 0.7, key text same false, key letter moved false, fuller other, other lacks: The infant’s varicella antibody status should be checked; There is a significant risk of serious neonatal infection (keyed option kept: false)
- why: same topic, keyed text differs

### SAME `pedsa-b10-12` vs `pedep-mf4-24` (peds.ep)
- book: Mohammed is 24 hours old. His mother develops chicken pox (varicella) 1 day after his delivery. From the following list of options what is the best advice you could give? Select one answer only. | key E: There is a significant risk of serious neonatal infection | 5 opts
- other: Mohammed is born 24 hours ago. His mother developed chickenpox (varicella) 1 day after his delivery. what is the best advice you could give? | key E: There is a significant risk of serious neonatal infection | 5 opts
- dice 0.74, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b10-13-1` vs `pedhd-peri-10` (peds)
- book: From the following list (A–K) pick the diagnosis that fits best with the attached clinical description and picture. Each option may be used once, more than once, or not at all. George, a 2-day-old baby boy, is reviewed b | key C: Erythema toxicum (neonatal urticarial) | 11 opts
- other: George, a 2-day-old baby boy, is reviewed by the paediatric doctor at the request of the midwife. He was born by forceps delivery and has been feeding well. There were no risk factors for sepsis and mother was well durin | key C: Erythema toxicum | 5 opts
- dice 0.83, key text same false, key letter moved false, fuller book, other lacks: Capillary haemangioma (stork bites); Erythema toxicum (neonatal urticarial); Group B streptococcal infection; Peripheral cyanosis; Port wine stain (naevus flammeus); Strawberry naevus (cavernous haemangioma); Traumatic cyanosis (keyed option kept: false)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b10-13-2` vs `pedhd-peri-11` (peds)
- book: From the following list (A–K) pick the diagnosis that fits best with the attached clinical description and picture. Each option may be used once, more than once, or not at all. Anna, a month-old infant, is reviewed by th | key I: Port wine stain (naevus flammeus) | 11 opts
- other: Anna, a month-old infant, is reviewed by the general practitioner. She was born by normal vaginal delivery, and was well during and after delivery. Her mother is worried about the mark on her face (shown in the opposite  | key D: Port wine stain (naevus flammeus) | 5 opts
- dice 0.8, key text same true, key letter moved true, fuller book, other lacks: Capillary haemangioma (stork bites); Erythema toxicum (neonatal urticarial); Group B streptococcal infection; Mongolian blue spots; Neonatal varicella zoster; Peripheral cyanosis; Traumatic cyanosis (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b10-13-3` vs `pedep-per-12` (peds.ep)
- book: From the following list (A–K) pick the diagnosis that fits best with the attached clinical description and picture. Each option may be used once, more than once, or not at all. Oliver, a 4-day-old infant, is having a rou | key E: Milia | 11 opts
- other: A 4-day-old infant has small white spots on the nose and cheeks. Feeding well. Most likely diagnosis? | key B: Milia | 5 opts
- dice 0.35, key text same true, key letter moved true, fuller book, other lacks: Bruising; Capillary haemangioma (stork bites); Erythema toxicum (neonatal urticarial); Peripheral cyanosis; Port wine stain (naevus flammeus); Strawberry naevus (cavernous haemangioma); Traumatic cyanosis (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b10-13-3` vs `pedhd-peri-12` (peds)
- book: From the following list (A–K) pick the diagnosis that fits best with the attached clinical description and picture. Each option may be used once, more than once, or not at all. Oliver, a 4-day-old infant, is having a rou | key E: Milia | 11 opts
- other: Oliver, a 4-day-old infant, is having a routine newborn check by the junior paediatric doctor. The doctor notices some small white spots on Oliver’s nose and cheeks (shown in the opposite figure). Oliver was born by norm | key B: Milia | 5 opts
- dice 0.79, key text same true, key letter moved true, fuller book, other lacks: Bruising; Capillary haemangioma (stork bites); Erythema toxicum (neonatal urticarial); Peripheral cyanosis; Port wine stain (naevus flammeus); Strawberry naevus (cavernous haemangioma); Traumatic cyanosis (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b10-13-4` vs `pedhd-peri-13` (peds)
- book: From the following list (A–K) pick the diagnosis that fits best with the attached clinical description and picture. Each option may be used once, more than once, or not at all. Jessica, a 2-month-old infant, presents to  | key J: Strawberry naevus (cavernous haemangioma) | 11 opts
- other: Jessica, a 2-month-old infant, presents to her family doctor with a mass on her forehead as shown in the opposite figure. It was not present at birth, and has been gradually increasing in size since it was first noticed  | key E: Strawberry naevus (cavernous haemangioma) | 5 opts
- dice 0.74, key text same true, key letter moved true, fuller book, other lacks: Capillary haemangioma (stork bites); Erythema toxicum (neonatal urticarial); Group B streptococcal infection; Mongolian blue spots; Neonatal varicella zoster; Peripheral cyanosis; Traumatic cyanosis (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b10-13-5` vs `pedep-per-14` (peds.ep)
- book: From the following list (A–K) pick the diagnosis that fits best with the attached clinical description and picture. Each option may be used once, more than once, or not at all. Adam, a 3-day-old black infant, has his rou | key F: Mongolian blue spots | 11 opts
- other: A 3-day-old Black infant has blue/black macules on the back and buttocks. What is the diagnosis? | key D: Mongolian blue spots | 5 opts
- dice 0.35, key text same true, key letter moved true, fuller book, other lacks: Capillary haemangioma (stork bites); Erythema toxicum (neonatal urticarial); Group B streptococcal infection; Peripheral cyanosis; Port wine stain (naevus flammeus); Strawberry naevus (cavernous haemangioma); Traumatic cyanosis (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b10-13-5` vs `pedhd-peri-14` (peds)
- book: From the following list (A–K) pick the diagnosis that fits best with the attached clinical description and picture. Each option may be used once, more than once, or not at all. Adam, a 3-day-old black infant, has his rou | key F: Mongolian blue spots | 11 opts
- other: Adam, a 3-day-old black infant, has his routine newborn check. The paediatric doctor notices blue and black macules on his back and buttocks (shown in the opposite figure). Adam was born by normal vaginal delivery and ha | key D: Mongolian blue spots | 5 opts
- dice 0.8, key text same true, key letter moved true, fuller book, other lacks: Capillary haemangioma (stork bites); Erythema toxicum (neonatal urticarial); Group B streptococcal infection; Peripheral cyanosis; Port wine stain (naevus flammeus); Strawberry naevus (cavernous haemangioma); Traumatic cyanosis (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b10-2` vs `pedep-per-2` (peds.ep)
- book: A mother has her routine 20-week antenatal scan. The sonographer finds the fetal abdominal and head circumference measurements are normal, but is concerned that there is an abnormally small amount of amniotic fluid (olig | key D: Poorly functioning fetal kidneys | 5 opts
- other: At the 20-week routine antenatal scan, the sonographer notes normal abdominal and head circumferences but an abnormally small amount of amniotic fluid (oligohydramnios). What is the most likely cause? | key D: Poorly functioning fetal kidneys | 5 opts
- dice 0.76, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b10-2` vs `pedhd-peri-2` (peds)
- book: A mother has her routine 20-week antenatal scan. The sonographer finds the fetal abdominal and head circumference measurements are normal, but is concerned that there is an abnormally small amount of amniotic fluid (olig | key D: Poorly functioning fetal kidneys | 5 opts
- other: A mother has her routine 20-week antenatal scan. The sonographer finds the fetal abdominal and head circumference measurements are normal, but is concerned that there is an abnormally small amount of amniotic fluid (olig | key D: Poorly functioning fetal kidneys | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b10-3` vs `pedep-per-3` (peds.ep)
- book: A midwife is concerned that a mother who is at 32 weeks’ gestation has a symphysis–fundal height smaller than expected. An ultrasound confirms intrauterine growth restriction. Which feature would be of most concern to th | key E: Reverse end-diastolic flow in the umbilical artery | 5 opts
- other: At 32 weeks' gestation, a mother's symphysis–fundal height is smaller than expected. Ultrasound confirms intrauterine growth restriction. Which ultrasound feature is of most concern? | key E: Reverse end-diastolic flow in the umbilical artery | 5 opts
- dice 0.81, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b10-3` vs `pedhd-peri-3` (peds)
- book: A midwife is concerned that a mother who is at 32 weeks’ gestation has a symphysis–fundal height smaller than expected. An ultrasound confirms intrauterine growth restriction. Which feature would be of most concern to th | key E: Reverse end-diastolic flow in the umbilical artery | 5 opts
- other: A midwife is concerned that a mother who is at 32 weeks’ gestation has a symphysis–fundal height smaller than expected. An ultrasound confirms intrauterine growth restriction. Which feature would be of most concern to th | key E: Reverse end-diastolic flow in the umbilical artery | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b10-4` vs `pedep-per-4` (peds.ep)
- book: A mother has just found out she is pregnant with twins. Her antenatal scan reveals dichorionic, diamniotic twins. Which condition carries the biggest increased risk in her twin pregnancy? Select one answer only. | key A: Congenital abnormalities | 5 opts
- other: A mother is pregnant with dichorionic, diamniotic twins. Which condition carries the greatest increased risk in this pregnancy? | key A: Congenital abnormalities | 5 opts
- dice 0.59, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b10-4` vs `pedhd-peri-4` (peds)
- book: A mother has just found out she is pregnant with twins. Her antenatal scan reveals dichorionic, diamniotic twins. Which condition carries the biggest increased risk in her twin pregnancy? Select one answer only. | key A: Congenital abnormalities | 5 opts
- other: A mother has just found out she is pregnant with twins. Her antenatal scan reveals dichorionic, diamniotic twins. Which condition carries the biggest increased risk in her twin pregnancy? | key A: Congenital abnormalities | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b10-5` vs `pedep-neo-35` (peds.ep)
- book: You perform a routine newborn examination on a baby who is 20 hours old. Which one of the following features requires further immediate assessment? Select one answer only. | key B: A heart murmur | 5 opts
- other: You perform a routine newborn examination on a baby who is 72 hours old. Which one of the following features requires further immediate assessment? | key B: A heart murmur | 5 opts
- dice 0.93, key text same true, key letter moved false, fuller other, other lacks: An undescended testis (keyed option kept: true)
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical; other lacks 1 option(s)

### SAME `pedsa-b10-5` vs `pedep-per-5` (peds.ep)
- book: You perform a routine newborn examination on a baby who is 20 hours old. Which one of the following features requires further immediate assessment? Select one answer only. | key B: A heart murmur | 5 opts
- other: During a routine newborn examination at 20 hours old, which of the following findings requires further immediate assessment? | key B: A heart murmur | 5 opts
- dice 0.74, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b10-5` vs `pedhd-peri-5` (peds)
- book: You perform a routine newborn examination on a baby who is 20 hours old. Which one of the following features requires further immediate assessment? Select one answer only. | key B: A heart murmur | 5 opts
- other: You perform a routine newborn examination on a baby who is 20 hours old. Which one of the following features requires further immediate assessment? | key B: A heart murmur | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b10-6` vs `pedep-neo-40` (peds.ep)
- book: A black mother is found to have glycosuria at her midwife appointment at 32 weeks’ gestation. Her glucose tolerance test and fasting glucose is abnormal. She is given dietary advice to control her blood glucose. What pro | key C: Respiratory distress syndrome | 5 opts
- other: A black mother is found to have glycosuria at her midwife appointment at 32 weeks' gestation. Her glucose tolerance test and fasting glucose are abnormal. She is given dietary advice to control her blood glucose. What pr | key C: Respiratory distress syndrome | 4 opts
- dice 1, key text same true, key letter moved false, fuller book, other lacks: Neonatal bacterial infection; Neonatal type 1 diabetes mellitus (keyed option kept: true)
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical; other lacks 2 option(s)

### SAME `pedsa-b10-6` vs `pedep-per-6` (peds.ep)
- book: A black mother is found to have glycosuria at her midwife appointment at 32 weeks’ gestation. Her glucose tolerance test and fasting glucose is abnormal. She is given dietary advice to control her blood glucose. What pro | key C: Respiratory distress syndrome | 5 opts
- other: A black mother at 32 weeks is found to have glycosuria and is diagnosed with gestational diabetes. What is her newborn baby most at risk of? | key C: Respiratory distress syndrome | 5 opts
- dice 0.48, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b10-6` vs `pedhd-peri-6` (peds)
- book: A black mother is found to have glycosuria at her midwife appointment at 32 weeks’ gestation. Her glucose tolerance test and fasting glucose is abnormal. She is given dietary advice to control her blood glucose. What pro | key C: Respiratory distress syndrome | 5 opts
- other: A black mother is found to have glycosuria at her midwife appointment at 32 weeks’ gestation. Her glucose tolerance test and fasting glucose is abnormal. She is given dietary advice to control her blood glucose. What pro | key C: Respiratory distress syndrome | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### UNSURE `pedsa-b10-7` vs `pedep-inf-43` (peds.ep)
- book: Jonathan, a newborn baby, is noted to have hepatosplenomegaly and a petechial rash. His red eye reflex is normal and there is no heart murmur. He fails his newborn screening hearing test. His mother is from the UK and he | key A: Cytomegalovirus | 5 opts
- other: Naser, a newborn baby, is noted to have hepatosplenomegaly and a petechial rash. His red reflex is abnormal, and he fails his newborn hearing screen. There is no heart murmur. His mother's antenatal screening bloods were | key B: Congenital infection | 5 opts
- dice 0.72, key text same false, key letter moved true, fuller other, other lacks: Cytomegalovirus; Rubella; Syphilis; Toxoplasmosis; Varicella zoster (keyed option kept: false)
- why: key CMV vs Congenital infection

### UNSURE `pedsa-b10-7` vs `pedep-mf3-48` (peds.ep)
- book: Jonathan, a newborn baby, is noted to have hepatosplenomegaly and a petechial rash. His red eye reflex is normal and there is no heart murmur. He fails his newborn screening hearing test. His mother is from the UK and he | key A: Cytomegalovirus | 5 opts
- other: A newborn baby is noted to have hepatosplenomegaly and a petechial rash. His red eye reflex is abnormal and there is no heart murmur. He fails his newborn screening hearing test. His mother's antenatal screening bloods w | key B: Congenital infection | 5 opts
- dice 0.87, key text same false, key letter moved true, fuller other, other lacks: Cytomegalovirus; Rubella; Syphilis; Toxoplasmosis; Varicella zoster (keyed option kept: false)
- why: key CMV vs Congenital infection

### UNSURE `pedsa-b10-7` vs `pedep-neo-30` (peds.ep)
- book: Jonathan, a newborn baby, is noted to have hepatosplenomegaly and a petechial rash. His red eye reflex is normal and there is no heart murmur. He fails his newborn screening hearing test. His mother is from the UK and he | key A: Cytomegalovirus | 5 opts
- other: Naser, a newborn baby, is noted to have hepatosplenomegaly and a petechial rash. His red eye reflex is abnormal and there is no heart murmur. He fails his newborn screening hearing test. His mother's antenatal screening  | key B: Congenital infection | 5 opts
- dice 0.86, key text same false, key letter moved true, fuller other, other lacks: Cytomegalovirus; Rubella; Syphilis; Toxoplasmosis; Varicella zoster (keyed option kept: false)
- why: key CMV vs Congenital infection

### SAME `pedsa-b10-7` vs `pedep-per-7` (peds.ep)
- book: Jonathan, a newborn baby, is noted to have hepatosplenomegaly and a petechial rash. His red eye reflex is normal and there is no heart murmur. He fails his newborn screening hearing test. His mother is from the UK and he | key A: Cytomegalovirus | 5 opts
- other: A newborn has hepatosplenomegaly, petechial rash, and fails the hearing screen. Red reflex and cardiac exam are normal. The mother's antenatal bloods were normal. What is the most likely congenital infection? | key A: Cytomegalovirus (CMV) | 5 opts
- dice 0.55, key text same false, key letter moved false, fuller other, other lacks: Cytomegalovirus (keyed option kept: false)
- why: Read: same newborn hepatosplenomegaly/petechiae case, keyed Cytomegalovirus (live adds (CMV)); live stem shortened

### SAME `pedsa-b10-7` vs `pedhd-peri-7` (peds)
- book: Jonathan, a newborn baby, is noted to have hepatosplenomegaly and a petechial rash. His red eye reflex is normal and there is no heart murmur. He fails his newborn screening hearing test. His mother is from the UK and he | key A: Cytomegalovirus | 5 opts
- other: Jonathan, a newborn baby, is noted to have hepatosplenomegaly and a petechial rash. His red eye reflex is normal and there is no heart murmur. He fails his newborn screening hearing test. His mother is from the UK and he | key A: Cytomegalovirus | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b10-8` vs `pedep-per-8` (peds.ep)
- book: A male infant is born at term. At 1 minute of age he is breathing regularly and has a heart rate of 140 beats/min. He is grimacing but has not yet cried. He is pink centrally but still blue around his extremities and his | key D: 7 | 5 opts
- other: A male infant is born at term. At 1 minute of age he is breathing regularly and has a heart rate of 140 beats/min. He is grimacing but has not yet cried. He is pink centrally but still blue around his extremities and his | key D: 7 | 5 opts
- dice 0.89, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b10-8` vs `pedhd-peri-8` (peds)
- book: A male infant is born at term. At 1 minute of age he is breathing regularly and has a heart rate of 140 beats/min. He is grimacing but has not yet cried. He is pink centrally but still blue around his extremities and his | key D: 7 | 5 opts
- other: A male infant is born at term. At 1 minute of age he is breathing regularly and has a heart rate of 140 beats/min. He is grimacing but has not yet cried. He is pink centrally but still blue around his extremities and his | key D: 7 | 5 opts
- dice 0.89, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b10-9` vs `pedep-mf3-16` (peds.ep)
- book: A mother is known to have pre-eclampsia and her fetus has shown signs of intrauterine growth restriction on antenatal scans. He is delivered at 37 weeks and weighs 2.2 kg. He is admitted to the Special Care Baby Unit bec | key D: Hypoglycaemia | 5 opts
- other: A mother is known to have preeclampsia and had her delivery at 37 weeks of gestation for a boy weighing 2.2 kg. The newborn is admitted to the Special Care Baby Unit because of his size. He appears well. What is he most  | key D: Hypoglycemia | 5 opts
- dice 0.66, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b10-9` vs `pedep-neo-37` (peds.ep)
- book: A mother is known to have pre-eclampsia and her fetus has shown signs of intrauterine growth restriction on antenatal scans. He is delivered at 37 weeks and weighs 2.2 kg. He is admitted to the Special Care Baby Unit bec | key D: Hypoglycaemia | 5 opts
- other: A mother is known to have pre-eclampsia and her fetus has shown signs of intrauterine growth restriction on antenatal scans. He is delivered at 37 weeks and weighs 2.2 kg. He is admitted to the Special Care Baby Unit bec | key D: Hypoglycemia | 5 opts
- dice 1, key text same true, key letter moved false, fuller other, other lacks: Hypercalcaemia (keyed option kept: true)
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical; other lacks 1 option(s)

### SAME `pedsa-b10-9` vs `pedep-per-9` (peds.ep)
- book: A mother is known to have pre-eclampsia and her fetus has shown signs of intrauterine growth restriction on antenatal scans. He is delivered at 37 weeks and weighs 2.2 kg. He is admitted to the Special Care Baby Unit bec | key D: Hypoglycaemia | 5 opts
- other: A 37-week infant born to a pre-eclamptic mother with IUGR weighs 2.2 kg. What is he most at risk of? | key D: Hypoglycaemia | 5 opts
- dice 0.33, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b10-9` vs `pedhd-peri-9` (peds)
- book: A mother is known to have pre-eclampsia and her fetus has shown signs of intrauterine growth restriction on antenatal scans. He is delivered at 37 weeks and weighs 2.2 kg. He is admitted to the Special Care Baby Unit bec | key D: Hypoglycaemia | 5 opts
- other: A mother is known to have pre-eclampsia and her fetus has shown signs of intrauterine growth restriction on antenatal scans. He is delivered at 37 weeks and weighs 2.2 kg. He is admitted to the Special Care Baby Unit bec | key D: Hypoglycaemia | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

## Book chapter 11 Neonatal medicine

### UNSURE `pedsa-b11-1` vs `pedep-mf2-78` (peds.ep)
- book: Natasha, a female infant, is delivered by caesarean section at 32 weeks’ gestation because of maternal pre-eclampsia. Her birth weight is 1.9 kg. No resuscitation is required. At 2 hours of age she develops respiratory d | key E: There is ventilation-perfusion mismatch from surfactant deficiency | 5 opts
- other: A female infant is delivered by cesarean section at 32 weeks' gestation. Her birth weight is 1.9 kg. No resuscitation is required. At 2 hours of age, she develops respiratory distress, with a respiratory rate of 70 breat | key C: Surfactant deficiency | 5 opts
- dice 0.85, key text same false, key letter moved true, fuller other, other lacks: Aspiration of meconium has resulted in lung collapse; Blood is still flowing from the pulmonary artery to the aorta as in the fetal circulation; The alveoli still contain fluid; The chest wall and ribs are too compliant; There is ventilation-perfusion mismatch from surfactant deficiency (keyed option kept: false)
- why: same stem, keyed answers differ

### SAME `pedsa-b11-1` vs `pedep-neo-1` (peds.ep)
- book: Natasha, a female infant, is delivered by caesarean section at 32 weeks’ gestation because of maternal pre-eclampsia. Her birth weight is 1.9 kg. No resuscitation is required. At 2 hours of age she develops respiratory d | key E: There is ventilation-perfusion mismatch from surfactant deficiency | 5 opts
- other: Natasha, a female infant, is delivered by caesarean section at 32 weeks' gestation because of maternal pre-eclampsia. Her birth weight is 1.9 kg. No resuscitation is required. At 2 hours of age, she develops respiratory  | key C: There is ventilation-perfusion mismatch from surfactant deficiency | 4 opts
- dice 0.96, key text same true, key letter moved true, fuller book, other lacks: The alveoli still contain fluid (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b11-1` vs `pedhd-neo-1` (peds)
- book: Natasha, a female infant, is delivered by caesarean section at 32 weeks’ gestation because of maternal pre-eclampsia. Her birth weight is 1.9 kg. No resuscitation is required. At 2 hours of age she develops respiratory d | key E: There is ventilation-perfusion mismatch from surfactant deficiency | 5 opts
- other: Natasha, a female infant, is delivered by caesarean section at 32 weeks’ gestation because of maternal pre-eclampsia. Her birth weight is 1.9 kg. No resuscitation is required. At 2 hours of age she develops respiratory d | key E: There is ventilation-perfusion mismatch from surfactant deficiency | 5 opts
- dice 0.96, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b11-2` vs `pedep-neo-2` (peds.ep)
- book: Robert is a full term male infant, born 10 hours ago. His mother is blood group O rhesus positive and her membranes ruptured 2 days before delivery. He is breastfeeding well but the midwife noticed he looks jaundiced. On | key A: Bilirubin level | 5 opts
- other: Robert is a full-term male infant, born 10 hours ago. His mother is blood group O Rhesus positive, and her membranes ruptured 2 days before delivery. He is breastfeeding well, but the midwife noticed he looks jaundiced.  | key A: Bilirubin level | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b11-2` vs `pedhd-neo-2` (peds)
- book: Robert is a full term male infant, born 10 hours ago. His mother is blood group O rhesus positive and her membranes ruptured 2 days before delivery. He is breastfeeding well but the midwife noticed he looks jaundiced. On | key A: Bilirubin level | 5 opts
- other: Robert is a full term male infant, born 10 hours ago. His mother is blood group O rhesus positive and her membranes ruptured 2 days before delivery. He is breastfeeding well but the midwife noticed he looks jaundiced. On | key A: Bilirubin level | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b11-4` vs `pedep-mf3-41` (peds.ep)
- book: Isabelle was born at term weighing 4 kg. At 6 hours of age she was noted to be breathing fast and have a low temperature. She was born by normal vaginal delivery and the membranes had ruptured 24 hours previously. Isabel | key B: Group B streptococcus | 5 opts
- other: A girl was born at term weighing 4 kg. At 6 hours of age, she was noted to be breathing fast and have a low temperature. She was born by normal vaginal delivery and the membranes had ruptured 24 hours previously. She has | key B: Group B streptococcus | 5 opts
- dice 0.98, key text same true, key letter moved false, fuller other, other lacks: Herpes simplex virus (HSV) infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b11-4` vs `pedep-mf3-6` (peds.ep)
- book: Isabelle was born at term weighing 4 kg. At 6 hours of age she was noted to be breathing fast and have a low temperature. She was born by normal vaginal delivery and the membranes had ruptured 24 hours previously. Isabel | key B: Group B streptococcus | 5 opts
- other: A full-term girl was born weighing 4 kg by normal vaginal delivery and the membranes had ruptured 24 hours previously. At 6 hours of age she was noted to be breathing fast and have a low temperature. She has not breastfe | key B: Group B streptococcus | 4 opts
- dice 0.96, key text same true, key letter moved false, fuller book, other lacks: Herpes simplex virus (HSV) infection; Listeria monocytogenes (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b11-4` vs `pedep-neo-3` (peds.ep)
- book: Isabelle was born at term weighing 4 kg. At 6 hours of age she was noted to be breathing fast and have a low temperature. She was born by normal vaginal delivery and the membranes had ruptured 24 hours previously. Isabel | key B: Group B streptococcus | 5 opts
- other: Isabelle was born at term weighing 4 kg. At 6 hours of age, she was noted to be breathing fast and have a low temperature. She was born by normal vaginal delivery and the membranes had ruptured 24 hours previously. Isabe | key B: Group B streptococcus | 4 opts
- dice 0.94, key text same true, key letter moved false, fuller book, other lacks: Herpes simplex virus (HSV) infection; Staphylococcus aureus (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b11-4` vs `pedhd-neo-3` (peds)
- book: Isabelle was born at term weighing 4 kg. At 6 hours of age she was noted to be breathing fast and have a low temperature. She was born by normal vaginal delivery and the membranes had ruptured 24 hours previously. Isabel | key B: Group B streptococcus | 5 opts
- other: Isabelle was born at term weighing 4 kg. At 6 hours of age she was noted to be breathing fast and have a low temperature. She was born by normal vaginal delivery and the membranes had ruptured 24 hours previously. Isabel | key B: Group B streptococcus | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b11-5` vs `pedep-neo-4` (peds.ep)
- book: James was born at 39 weeks’ gestation by elective caesarean section because of pre-eclampsia. His birth weight was 3.7 kg. His mother breastfed him as soon as she had recovered from the general anaesthetic. He fed well b | key A: Duodenal atresia | 5 opts
- other: James was born at 39 weeks' gestation by elective caesarean section because of pre-eclampsia. His birth weight was 3.7 kg. He fed well initially but is now vomiting after every feed. He is now 18 hours old, and after the | key A: Duodenal atresia | 5 opts
- dice 0.88, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b11-5` vs `pedhd-neo-4` (peds)
- book: James was born at 39 weeks’ gestation by elective caesarean section because of pre-eclampsia. His birth weight was 3.7 kg. His mother breastfed him as soon as she had recovered from the general anaesthetic. He fed well b | key A: Duodenal atresia | 5 opts
- other: James was born at 39 weeks’ gestation by elective caesarean section because of pre-eclampsia. His birth weight was 3.7 kg. His mother breastfed him as soon as she had recovered from the general anaesthetic. He fed well b | key A: Duodenal atresia | 5 opts
- dice 0.99, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b11-7-1` vs `pedep-neo-5` (peds.ep)
- book: The following is a list of possible diagnoses(A–L). For each clinical case described below select the most likely diagnosis. Each answer may be used once, more than once, or not at all. C K. Tracheo-oesphageal fistula L. | key I: Pneumothorax | 10 opts
- other: Mohammed was born at term, weighing 3 kg. He is 6 hours old and on the postnatal ward with his mother, who asked the midwife to review him because he is breathing very quickly. He required mask ventilation at birth to es | key B: Pneumothorax | 4 opts
- dice 0.68, key text same true, key letter moved true, fuller book, other lacks: Anaemia; Bronchopulmonary dysplasia (BPD); Coarctation of the aorta; Diaphragmatic hernia; Heart failure; Meconium aspiration (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b11-7-1` vs `pedhd-neo-5` (peds)
- book: The following is a list of possible diagnoses(A–L). For each clinical case described below select the most likely diagnosis. Each answer may be used once, more than once, or not at all. C K. Tracheo-oesphageal fistula L. | key I: Pneumothorax | 10 opts
- other: Mohammed was born at term, weighing 3 kg. He is 6 hours old and on the postnatal ward with his mother, who has asked the midwife to review him as he is breathing very quickly. Mohammed did not breathe well immediately af | key B: Pneumothorax | 5 opts
- dice 0.82, key text same true, key letter moved true, fuller book, other lacks: Anaemia; Coarctation of the aorta; Diaphragmatic hernia; Heart failure; Meconium aspiration (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b11-7-2` vs `pedep-neo-6` (peds.ep)
- book: The following is a list of possible diagnoses(A–L). For each clinical case described below select the most likely diagnosis. Each answer may be used once, more than once, or not at all. C K. Tracheo-oesphageal fistula L. | key D: Diaphragmatic hernia | 10 opts
- other: Sabrina was born at 37 weeks' gestation, birth weight 2.8 kg. At 2 hours of age, she was noted to be breathing very fast. On examination, respiratory rate is 72 breaths/min with moderate chest recession. Heart sounds are | key D: Diaphragmatic hernia | 5 opts
- dice 0.64, key text same true, key letter moved false, fuller book, other lacks: Anaemia; Coarctation of the aorta; Heart failure; Meconium aspiration; Persistent pulmonary hypertension of the newborn (PPHN) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b11-7-2` vs `pedhd-neo-6` (peds)
- book: The following is a list of possible diagnoses(A–L). For each clinical case described below select the most likely diagnosis. Each answer may be used once, more than once, or not at all. C K. Tracheo-oesphageal fistula L. | key D: Diaphragmatic hernia | 10 opts
- other: Sabrina was born at 37 weeks’ gestation, birth weight 2.8 kg. She was noted by the midwife to be breathing very fast at 2 hours of age. On examination she is breathing at 72 breaths/min and has moderate chest recession.  | key D: Diaphragmatic hernia | 5 opts
- dice 0.74, key text same true, key letter moved false, fuller book, other lacks: Anaemia; Coarctation of the aorta; Heart failure; Meconium aspiration; Persistent pulmonary hypertension of the newborn (PPHN) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b11-7-3` vs `pedep-neo-7` (peds.ep)
- book: The following is a list of possible diagnoses(A–L). For each clinical case described below select the most likely diagnosis. Each answer may be used once, more than once, or not at all. C K. Tracheo-oesphageal fistula L. | key B: Bronchopulmonary dysplasia (BPD) | 10 opts
- other: Thomas, a baby boy with a birth weight of 875 g at 28 weeks' gestation, required artificial ventilation for 2 weeks. At 10 weeks of age, he still needs additional oxygen via nasal cannulae. What is the most likely diagno | key E: Bronchopulmonary dysplasia | 5 opts
- dice 0.61, key text same true, key letter moved true, fuller book, other lacks: Anaemia; Coarctation of the aorta; Heart failure; Meconium aspiration; Persistent pulmonary hypertension of the newborn (PPHN) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b11-7-3` vs `pedhd-neo-7` (peds)
- book: The following is a list of possible diagnoses(A–L). For each clinical case described below select the most likely diagnosis. Each answer may be used once, more than once, or not at all. C K. Tracheo-oesphageal fistula L. | key B: Bronchopulmonary dysplasia (BPD) | 10 opts
- other: Thomas, a baby boy with a birth weight of 875 g at 28 weeks’ gestation required artificial ventilation for 2 weeks. At 10 weeks of age he still needs additional oxygen via nasal cannulae. This is his chest X-ray (shown i | key E: Bronchopulmonary dysplasia | 5 opts
- dice 0.65, key text same true, key letter moved true, fuller book, other lacks: Anaemia; Coarctation of the aorta; Heart failure; Meconium aspiration; Persistent pulmonary hypertension of the newborn (PPHN) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b11-8-1` vs `pedep-neo-8` (peds.ep)
- book: The following is a list of diagnoses that are associated with jaundice in the newborn period. For each of the following scenarios pick the most likely cause of the jaundice. Each answer may be used once, more than once,  | key A: ABO incompatibility | 11 opts
- other: Stewart is a full-term baby boy, born 16 hours ago. His mother is blood group O Rhesus positive. The baby is breastfeeding well, but the midwife noted he looks jaundiced. His bilirubin was 150 μmol/L at 10 hours and inte | key A: ABO incompatibility | 5 opts
- dice 0.76, key text same true, key letter moved false, fuller book, other lacks: Congenital hypothyroidism; Congenital infection with cytomegalovirus; Crigler–Najjar syndrome; G6PD deficiency; Sepsis; Urinary tract infection (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b11-8-1` vs `pedhd-neo-8` (peds)
- book: The following is a list of diagnoses that are associated with jaundice in the newborn period. For each of the following scenarios pick the most likely cause of the jaundice. Each answer may be used once, more than once,  | key A: ABO incompatibility | 11 opts
- other: Stewart is a full-term baby boy, born 16 hours ago. His mother is blood group O rhesus positive. The baby is breastfeeding well but the midwife has noticed he looks jaundiced. On examination the baby is clinically well.  | key A: ABO incompatibility | 5 opts
- dice 0.87, key text same true, key letter moved false, fuller book, other lacks: Congenital hypothyroidism; Congenital infection with cytomegalovirus; Crigler–Najjar syndrome; G6PD deficiency; Sepsis; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b11-8-2` vs `pedep-neo-9` (peds.ep)
- book: The following is a list of diagnoses that are associated with jaundice in the newborn period. For each of the following scenarios pick the most likely cause of the jaundice. Each answer may be used once, more than once,  | key B: Biliary atresia | 11 opts
- other: Alfie is a 3-week-old male infant whose mother is concerned about pale stools. He is breastfed. On examination, he is jaundiced, has mild hepatomegaly, and has only just regained his birth weight. What is the most likely | key B: Biliary atresia | 5 opts
- dice 0.64, key text same true, key letter moved false, fuller book, other lacks: Congenital hypothyroidism; Congenital infection with cytomegalovirus; Crigler–Najjar syndrome; G6PD deficiency; Sepsis; Urinary tract infection (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b11-8-2` vs `pedhd-neo-9` (peds)
- book: The following is a list of diagnoses that are associated with jaundice in the newborn period. For each of the following scenarios pick the most likely cause of the jaundice. Each answer may be used once, more than once,  | key B: Biliary atresia | 11 opts
- other: Alfie is a 3-week-old male infant whose mother is concerned that his stools are pale. He is breastfed. On examination he is jaundiced, has mild hepatomegaly and has only just regained his birthweight. Which of the follow | key B: Biliary atresia | 5 opts
- dice 0.74, key text same true, key letter moved false, fuller book, other lacks: Congenital hypothyroidism; Congenital infection with cytomegalovirus; Crigler–Najjar syndrome; G6PD deficiency; Sepsis; Urinary tract infection (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b11-8-3` vs `pedep-neo-10` (peds.ep)
- book: The following is a list of diagnoses that are associated with jaundice in the newborn period. For each of the following scenarios pick the most likely cause of the jaundice. Each answer may be used once, more than once,  | key C: Breast milk jaundice | 11 opts
- other: Poppy is a 2-week-old breastfed baby who is thriving but jaundiced. Her bilirubin level is 170 μmol/L and nearly all unconjugated. Urine dipstick is negative. What is the most likely cause? | key C: Breastmilk jaundice | 5 opts
- dice 0.55, key text same true, key letter moved false, fuller book, other lacks: Congenital hypothyroidism; Congenital infection with cytomegalovirus; Crigler–Najjar syndrome; G6PD deficiency; Sepsis; Urinary tract infection (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b11-8-3` vs `pedep-neo-23` (peds.ep)
- book: The following is a list of diagnoses that are associated with jaundice in the newborn period. For each of the following scenarios pick the most likely cause of the jaundice. Each answer may be used once, more than once,  | key C: Breast milk jaundice | 11 opts
- other: Talia is 2 weeks old and is breastfed. She is active and thriving but is jaundiced. Her bilirubin level is moderately raised at 10 mg/dl and is nearly all unconjugated. A urine dipstick is -VE. The following is a list of | key C: Breast milk jaundice | 5 opts
- dice 0.65, key text same true, key letter moved false, fuller book, other lacks: Congenital infection with cytomegalovirus; Crigler–Najjar syndrome; G6PD deficiency; Physiological jaundice; Rhesus haemolytic disease; Sepsis; Urinary tract infection (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b11-8-3` vs `pedhd-neo-10` (peds)
- book: The following is a list of diagnoses that are associated with jaundice in the newborn period. For each of the following scenarios pick the most likely cause of the jaundice. Each answer may be used once, more than once,  | key C: Breast milk jaundice | 11 opts
- other: Poppy is 2 weeks old and is breastfed. She is thriving but is jaundiced. The midwife does a bilirubin which is moderately raised at 170 µmol/L, and is nearly all unconjugated. A urine dipstick is negative. Which of the f | key C: Breastmilk jaundice | 5 opts
- dice 0.72, key text same true, key letter moved false, fuller book, other lacks: Congenital hypothyroidism; Congenital infection with cytomegalovirus; Crigler–Najjar syndrome; G6PD deficiency; Sepsis; Urinary tract infection (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b11-8-4` vs `pedep-neo-11` (peds.ep)
- book: The following is a list of diagnoses that are associated with jaundice in the newborn period. For each of the following scenarios pick the most likely cause of the jaundice. Each answer may be used once, more than once,  | key G: G6PD deficiency | 11 opts
- other: Dimitri is 20 hours old and markedly jaundiced, requiring intensive phototherapy. Both mother and baby are group A Rhesus positive. He is feeding well and is alert. What is the most likely cause? | key D: G6PD deficiency | 5 opts
- dice 0.41, key text same true, key letter moved true, fuller book, other lacks: Congenital hypothyroidism; Congenital infection with cytomegalovirus; Crigler–Najjar syndrome; Physiological jaundice; Sepsis; Urinary tract infection (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b11-8-4` vs `pedhd-neo-11` (peds)
- book: The following is a list of diagnoses that are associated with jaundice in the newborn period. For each of the following scenarios pick the most likely cause of the jaundice. Each answer may be used once, more than once,  | key G: G6PD deficiency | 11 opts
- other: Dimitri is 20 hours old and is noted to be markedly jaundiced, needing intensive phototherapy. Maternal blood is group A rhesus positive. His blood group is group A rhesus positive. He has been breastfeeding well. On exa | key D: G6PD deficiency | 5 opts
- dice 0.79, key text same true, key letter moved true, fuller book, other lacks: Congenital hypothyroidism; Congenital infection with cytomegalovirus; Crigler–Najjar syndrome; Physiological jaundice; Sepsis; Urinary tract infection (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b11-9-1` vs `pedep2-mf1-73` (peds.ep2)
- book: The following is a list (A–L) of diagnoses that are associated with respiratory distress in the newborn period. For each of the following scenarios pick the most likely cause of the jaundice. Each answer may be used once | key C: Coarctation of the aorta | 12 opts
- other: A girl was born 48 hours ago at term. She weighed 3.2 kg. You are asked to review her on the postnatal ward as she is breathing very quickly. She is not feeding. On examination, she is breathing at 68 breaths/min and has | key D: Coarctation of the aorta | 5 opts
- dice 0.78, key text same true, key letter moved true, fuller book, other lacks: Anaemia; Bronchopulmonary dysplasia (BPD); Diaphragmatic hernia; Meconium aspiration; Persistent pulmonary hypertension of the newborn; Pneumothorax; Respiratory distress syndrome; Tracheo-oesphageal fistula; Transient tachypnoea of the newborn (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b11-9-1` vs `pedep-neo-12` (peds.ep)
- book: The following is a list (A–L) of diagnoses that are associated with respiratory distress in the newborn period. For each of the following scenarios pick the most likely cause of the jaundice. Each answer may be used once | key C: Coarctation of the aorta | 12 opts
- other: Rebecca was born 48 hours ago at term weighing 3.2 kg. She is breathing very quickly and not feeding. On examination, respiratory rate is 68 breaths/min, with mild chest recession. She appears unwell. Femoral pulses are  | key C: Coarctation of the aorta | 5 opts
- dice 0.57, key text same true, key letter moved false, fuller book, other lacks: Bronchopulmonary dysplasia (BPD); Diaphragmatic hernia; Heart failure; Meconium aspiration; Persistent pulmonary hypertension of the newborn; Pneumothorax; Tracheo-oesphageal fistula (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b11-9-1` vs `pedhd-neo-12` (peds)
- book: The following is a list (A–L) of diagnoses that are associated with respiratory distress in the newborn period. For each of the following scenarios pick the most likely cause of the jaundice. Each answer may be used once | key C: Coarctation of the aorta | 12 opts
- other: Rebecca was born 48 hours ago at term. She weighed 3.2 kg. You are asked to review her on the postnatal ward as she is breathing very quickly. She is not feeding. On examination she is breathing at 68 breaths/min and has | key C: Coarctation of the aorta | 5 opts
- dice 0.78, key text same true, key letter moved false, fuller book, other lacks: Bronchopulmonary dysplasia (BPD); Diaphragmatic hernia; Heart failure; Meconium aspiration; Persistent pulmonary hypertension of the newborn; Pneumothorax; Tracheo-oesphageal fistula (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b11-9-2` vs `pedep-neo-13` (peds.ep)
- book: The following is a list (A–L) of diagnoses that are associated with respiratory distress in the newborn period. For each of the following scenarios pick the most likely cause of the jaundice. Each answer may be used once | key undefined: Transient tachypnoea of the newborn | 12 opts
- other: Zak, a full-term male infant, weighing 3.7 kg, is born by elective caesarean section. He becomes tachypnoeic with indrawing at 2 hours of age. Examination and chest X-ray are otherwise normal. What is the most likely dia | key B: Transient tachypnoea of the newborn | 5 opts
- dice 0.51, key text same true, key letter moved true, fuller book, other lacks: Bronchopulmonary dysplasia (BPD); Diaphragmatic hernia; Heart failure; Meconium aspiration; Persistent pulmonary hypertension of the newborn; Pneumothorax; Tracheo-oesphageal fistula (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b11-9-2` vs `pedep-neo-43` (peds.ep)
- book: The following is a list (A–L) of diagnoses that are associated with respiratory distress in the newborn period. For each of the following scenarios pick the most likely cause of the jaundice. Each answer may be used once | key undefined: Transient tachypnoea of the newborn | 12 opts
- other: A full-term male infant, with a birth weight of 3.7 kg, is born by elective caesarean section. His mother was well during pregnancy and had a normal blood glucose screen. Zak becomes tachypnoeic with indrawing between hi | key A: transient tachypnea of new born | 5 opts
- dice 0.75, key text same true, key letter moved true, fuller book, other lacks: Anaemia; Coarctation of the aorta; Diaphragmatic hernia; Heart failure; Meconium aspiration; Persistent pulmonary hypertension of the newborn; Pneumothorax; Tracheo-oesphageal fistula (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b11-9-2` vs `pedhd-neo-13` (peds)
- book: The following is a list (A–L) of diagnoses that are associated with respiratory distress in the newborn period. For each of the following scenarios pick the most likely cause of the jaundice. Each answer may be used once | key undefined: Transient tachypnoea of the newborn | 12 opts
- other: Zak, a full-term male infant, with a birth weight of 3.7 kg, is born by elective caesarean section. His mother was well during pregnancy and had a normal blood glucose screen. Zak becomes tachypnoeic with indrawing betwe | key B: Transient tachypnoea of the newborn | 5 opts
- dice 0.76, key text same true, key letter moved true, fuller book, other lacks: Bronchopulmonary dysplasia (BPD); Diaphragmatic hernia; Heart failure; Meconium aspiration; Persistent pulmonary hypertension of the newborn; Pneumothorax; Tracheo-oesphageal fistula (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

## Book chapter 12 Growth and puberty

### SAME `pedsa-b12-1` vs `pedep-gp-21` (peds.ep)
- book: Janine, a 9-month-old female infant, is seen by her family doctor because of concern that she is not growing fast enough. She is only on the 5th centile for height and 2nd centile for weight. What is the greatest influen | key C: Nutrition | 5 opts
- other: Janine, a 9-month-old female infant, is seen by her family doctor because of concern that she is not growing fast enough. She is on the 5th centile for height and 2nd centile for weight. What is the greatest influence on | key C: Nutrition | 5 opts
- dice 0.98, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b12-1` vs `pedhd-gp-1` (peds)
- book: Janine, a 9-month-old female infant, is seen by her family doctor because of concern that she is not growing fast enough. She is only on the 5th centile for height and 2nd centile for weight. What is the greatest influen | key C: Nutrition | 5 opts
- other: Janine, a 9-month-old female infant, is seen by her family doctor because of concern that she is not growing fast enough. She is only on the 5th centile for height and 2nd centile for weight. What is the greatest influen | key C: Nutrition | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b12-2` vs `pedep-gp-22` (peds.ep)
- book: John, a 3-year-old boy, is referred to paediatric outpatients because of concern about the development of pubic and axillary hair. His testes are 1.5 ml in size (prepubertal). His blood pressure is 100/75 mmHg. Gonadotro | key A: Adrenal tumour | 5 opts
- other: John, a 3-year-old boy, is referred to paediatric outpatients because of concern about the development of pubic and axillary hair. His testes are 1.5 mL in size (prepubertal). His blood pressure is 100/75 mmHg. Gonadotro | key A: Adrenal tumor | 5 opts
- dice 0.98, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b12-2` vs `pedhd-gp-2` (peds)
- book: John, a 3-year-old boy, is referred to paediatric outpatients because of concern about the development of pubic and axillary hair. His testes are 1.5 ml in size (prepubertal). His blood pressure is 100/75 mmHg. Gonadotro | key A: Adrenal tumour | 5 opts
- other: John, a 3-year-old boy, is referred to paediatric outpatients because of concern about the development of pubic and axillary hair. His testes are 1.5 ml in size (prepubertal). His blood pressure is 100/75 mmHg. Gonadotro | key A: Adrenal tumour | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b12-3` vs `pedep-gp-23` (peds.ep)
- book: Chelsea, a 7-year-old girl, is brought by her mother to the paediatric clinic. Her mother is concerned about Chelsea’s early development of puberty. Chelsea has started to develop breasts and, more recently, some pubic h | key C: Idiopathic precocious puberty | 5 opts
- other: Chelsea, a 7-year-old girl, is brought by her mother to the paediatric clinic. Her mother is concerned about early puberty. Chelsea has developed breasts and recently some pubic hair. On examination, she has breast devel | key C: Idiopathic precocious puberty | 5 opts
- dice 0.85, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b12-3` vs `pedhd-gp-3` (peds)
- book: Chelsea, a 7-year-old girl, is brought by her mother to the paediatric clinic. Her mother is concerned about Chelsea’s early development of puberty. Chelsea has started to develop breasts and, more recently, some pubic h | key C: Idiopathic precocious puberty | 5 opts
- other: Chelsea, a 7-year-old girl, is brought by her mother to the paediatric clinic. Her mother is concerned about Chelsea’s early development of puberty. Chelsea has started to develop breasts and, more recently, some pubic h | key C: Idiopathic precocious puberty | 5 opts
- dice 0.95, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b12-4` vs `pedep-gp-24` (peds.ep)
- book: Sophia, an 18-month-old girl, is brought to outpatients by her mother, who is very worried as she has developed breasts. She is otherwise well and has been growing normally. On examination she has breast development stag | key D: Premature thelarche | 5 opts
- other: Sophia, an 18-month-old girl, is brought to outpatients by her mother, who is concerned as Sophia has developed breasts. She is otherwise well and growing normally. On examination, she has breast development stage 3 (BII | key D: Premature thelarche | 5 opts
- dice 0.92, key text same true, key letter moved false, fuller other, other lacks: Premature pubarche (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b12-4` vs `pedhd-gp-4` (peds)
- book: Sophia, an 18-month-old girl, is brought to outpatients by her mother, who is very worried as she has developed breasts. She is otherwise well and has been growing normally. On examination she has breast development stag | key D: Premature thelarche | 5 opts
- other: Sophia, an 18-month-old girl, is brought to outpatients by her mother, who is very worried as she has developed breasts. She is otherwise well and has been growing normally. On examination she has breast development stag | key D: Premature thelarche | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b12-5` vs `pedep-gp-25` (peds.ep)
- book: Tom, a 7-year-old boy, is referred by his general practitioner with concerns about his growth. He is an adopted child and no details are available about his biological father although his biological mother was ‘of averag | key C: Familial short stature | 5 opts
- other: Tom, a 7-year-old boy, is referred by his GP due to concerns about his growth. He is adopted, with no details available about his biological father; his biological mother was of average height. He is a happy, playful boy | key C: Familial short stature | 5 opts
- dice 0.91, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b12-5` vs `pedhd-gp-5` (peds)
- book: Tom, a 7-year-old boy, is referred by his general practitioner with concerns about his growth. He is an adopted child and no details are available about his biological father although his biological mother was ‘of averag | key C: Familial short stature | 5 opts
- other: Tom, a 7-year-old boy, is referred by his general practitioner with concerns about his growth. He is an adopted child and no details are available about his biological father although his biological mother was ‘of averag | key C: Familial short stature | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b12-6-1` vs `pedep-gp-26` (peds.ep)
- book: The following (A–M) is a list of investigations for children referred with short stature. From the following clinical scenarios pick the investigation which is most likely lead to a correct diagnosis. Each answer may be  | key H: Karyotype | 13 opts
- other: May, a 14-year-old girl, is referred by her school nurse because she is below the 0.4th centile for height. Her mother is 167 cm tall, and her father is 175 cm tall. She was born at term, birth weight 3.2 kg. She has alw | key E: Karyotype | 5 opts
- dice 0.77, key text same true, key letter moved true, fuller book, other lacks: Bone age (wrist X-ray); C-reactive protein (CRP) and erythrocyte sedimentation rate (ESR); Creatinine and electrolytes; Growth hormone provocation tests; Insulin-like growth factor-1 (IGF-1); Skeletal survey; Ultrasound scan of the uterus; Vitamin D levels (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b12-6-1` vs `pedhd-gp-6` (peds)
- book: The following (A–M) is a list of investigations for children referred with short stature. From the following clinical scenarios pick the investigation which is most likely lead to a correct diagnosis. Each answer may be  | key H: Karyotype | 13 opts
- other: May, a 14-year-old girl, is referred by her school nurse because she is found to be below the 0.4th centile for height. He mother is 167 cm tall and father is 175 cm tall. She was born at term, birth weight 3.2 kg. She s | key E: Karyotype | 5 opts
- dice 0.86, key text same true, key letter moved true, fuller book, other lacks: Bone age (wrist X-ray); C-reactive protein (CRP) and erythrocyte sedimentation rate (ESR); Creatinine and electrolytes; Growth hormone provocation tests; Insulin-like growth factor-1 (IGF-1); Skeletal survey; Ultrasound scan of the uterus; Vitamin D levels (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b12-6-2` vs `pedep-gp-27` (peds.ep)
- book: The following (A–M) is a list of investigations for children referred with short stature. From the following clinical scenarios pick the investigation which is most likely lead to a correct diagnosis. Each answer may be  | key undefined: Thyroid stimulating hormone (TSH) | 13 opts
- other: Eleanor, a 7-year-old girl, is referred for short stature. She is on the 5th centile for height and 25th centile for weight. Nine months ago, her height and weight were on the 15th centile. Her mother notes that she has  | key B: Thyroid stimulating hormone (TSH) | 5 opts
- dice 0.65, key text same true, key letter moved true, fuller book, other lacks: Bone age (wrist X-ray); C-reactive protein (CRP) and erythrocyte sedimentation rate (ESR); Creatinine and electrolytes; Growth hormone provocation tests; Insulin-like growth factor-1 (IGF-1); Skeletal survey; Ultrasound scan of the uterus; Vitamin D levels (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b12-6-2` vs `pedhd-gp-7` (peds)
- book: The following (A–M) is a list of investigations for children referred with short stature. From the following clinical scenarios pick the investigation which is most likely lead to a correct diagnosis. Each answer may be  | key undefined: Thyroid stimulating hormone (TSH) | 13 opts
- other: Eleanor, a 7-year-old girl, is referred because of short stature. She is on the 5th centile for height and 25th centile for weight. Her growth chart shows that 9 months previously her height and weight were on the 15th c | key B: Thyroid stimulating hormone (TSH) | 5 opts
- dice 0.83, key text same true, key letter moved true, fuller book, other lacks: Bone age (wrist X-ray); C-reactive protein (CRP) and erythrocyte sedimentation rate (ESR); Creatinine and electrolytes; Growth hormone provocation tests; Insulin-like growth factor-1 (IGF-1); Skeletal survey; Ultrasound scan of the uterus; Vitamin D levels (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b12-6-3` vs `pedep-gp-28` (peds.ep)
- book: The following (A–M) is a list of investigations for children referred with short stature. From the following clinical scenarios pick the investigation which is most likely lead to a correct diagnosis. Each answer may be  | key B: Coeliac screen | 13 opts
- other: Jake, a 5-year-old boy with Down syndrome, presents for a routine check-up. He has dropped one centile in height and two centile lines in weight over the past 6 months. His mother reports increased irritability and poor  | key A: Coeliac screen | 5 opts
- dice 0.48, key text same true, key letter moved true, fuller book, other lacks: Bone age (wrist X-ray); C-reactive protein (CRP) and erythrocyte sedimentation rate (ESR); Creatinine and electrolytes; Growth hormone provocation tests; Insulin-like growth factor-1 (IGF-1); Skeletal survey; Ultrasound scan of the uterus; Vitamin D levels (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b12-6-3` vs `pedhd-gp-8` (peds)
- book: The following (A–M) is a list of investigations for children referred with short stature. From the following clinical scenarios pick the investigation which is most likely lead to a correct diagnosis. Each answer may be  | key B: Coeliac screen | 13 opts
- other: Jake, a 5-year-old boy with Down syndrome has a check-up with his general practitioner. He is short but until 6 months ago was following his growth centiles. You note that his height has dropped one centile line and his  | key A: Coeliac screen | 5 opts
- dice 0.85, key text same true, key letter moved true, fuller book, other lacks: Bone age (wrist X-ray); C-reactive protein (CRP) and erythrocyte sedimentation rate (ESR); Creatinine and electrolytes; Growth hormone provocation tests; Insulin-like growth factor-1 (IGF-1); Skeletal survey; Ultrasound scan of the uterus; Vitamin D levels (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

## Book chapter 13 Nutrition

### SAME `pedsa-b13-1` vs `pedep-nut-1` (peds.ep)
- book: Sunit, a 13-month-old boy, presents with faltering growth. He is still entirely breastfed. On examination, he is miserable and his wrist is shown in Fig. 13.1a. An X-ray is taken of his wrist is shown in Fig. 13.1b. (a)  | key C: Vitamin D deficiency | 5 opts
- other: Sunit, a 13-month-old boy, presents with faltering growth. He is still entirely breastfed. On examination, he is miserable and his wrist appears abnormal, as shown in the figure. An X-ray of his wrist is also provided. W | key C: Vitamin D deficiency | 5 opts
- dice 0.77, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b13-1` vs `pedhd-nutr-1` (peds)
- book: Sunit, a 13-month-old boy, presents with faltering growth. He is still entirely breastfed. On examination, he is miserable and his wrist is shown in Fig. 13.1a. An X-ray is taken of his wrist is shown in Fig. 13.1b. (a)  | key C: Vitamin D deficiency | 5 opts
- other: Sunit, a 13-month-old boy, presents with faltering growth. He is still entirely breastfed. On examination, he is miserable and his wrist is shown in the figure below on the left. An X-ray is taken of his wrist is shown i | key C: Vitamin D deficiency | 5 opts
- dice 0.79, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b13-2` vs `pedep-nut-2` (peds.ep)
- book: Sarah, a 9-year-old girl, is referred by the school nurse to the paediatric clinic because of her weight. She weighs 43 kg (98th centile) and is 141 cm tall (91st centile). She has followed her height centiles for the la | key C: Sarah has a higher risk of an abnormal lipid profile and raised blood pressure in adult life | 5 opts
- other: Sarah, a 9-year-old girl, is referred by the school nurse to the paediatric clinic because of her weight. She weighs 43 kg (98th centile) and is 141 cm tall (91st centile). She has followed her height centiles over the l | key C: Sarah has a higher risk of an abnormal lipid profile and raised blood pressure in adult life | 4 opts
- dice 0.98, key text same true, key letter moved false, fuller book, other lacks: Sarah’s main problem is that she has a low metabolic rate (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b13-2` vs `pedhd-nutr-2` (peds)
- book: Sarah, a 9-year-old girl, is referred by the school nurse to the paediatric clinic because of her weight. She weighs 43 kg (98th centile) and is 141 cm tall (91st centile). She has followed her height centiles for the la | key C: Sarah has a higher risk of an abnormal lipid profile and raised blood pressure in adult life | 5 opts
- other: Sarah, a 9-year-old girl, is referred by the school nurse to the paediatric clinic because of her weight. She weighs 43 kg (98th centile) and is 141 cm tall (91st centile). She has followed her height centiles for the la | key C: Sarah has a higher risk of an abnormal lipid profile and raised blood pressure in adult life | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b13-3` vs `pedep-nut-3` (peds.ep)
- book: Which of the following term newborns has the lowest risk of cardiovascular disease in later life? Select one answer only. | key D: 3.9 kg | 5 opts
- other: Which of the following term newborns has the lowest risk of cardiovascular disease in later life? | key D: 3.9 kg | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b13-3` vs `pedhd-nutr-3` (peds)
- book: Which of the following term newborns has the lowest risk of cardiovascular disease in later life? Select one answer only. | key D: 3.9 kg | 5 opts
- other: Which of the following term newborns has the lowest risk of cardiovascular disease in later life? | key D: 3.9 kg | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b13-4` vs `pedep-nut-4` (peds.ep)
- book: A mother asks you whether there are any disadvantages to breastfeeding. Although you would prefer to inform her about the many advantages of breastfeeding, you wish to answer her question honestly. Which of the following | key D: The lower vitamin K concentration in breast milk can result in life-threatening bleeding | 5 opts
- other: A mother asks you whether there are any disadvantages to breastfeeding. Although you would prefer to inform her about the many advantages of breastfeeding, you wish to answer her question honestly. Which of the following | key D: The lower vitamin K concentration in breast milk can result in life-threatening bleeding | 4 opts
- dice 1, key text same true, key letter moved false, fuller book, other lacks: The strong bond developed during breastfeeding will prevent paternal bonding (keyed option kept: true)
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical; other lacks 1 option(s)

### SAME `pedsa-b13-4` vs `pedhd-nutr-4` (peds)
- book: A mother asks you whether there are any disadvantages to breastfeeding. Although you would prefer to inform her about the many advantages of breastfeeding, you wish to answer her question honestly. Which of the following | key D: The lower vitamin K concentration in breast milk can result in life-threatening bleeding | 5 opts
- other: A mother asks you whether there are any disadvantages to breastfeeding. Although you would prefer to inform her about the many advantages of breastfeeding, you wish to answer her question honestly. Which of the following | key D: The lower vitamin K concentration in breast milk can result in life-threatening bleeding | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b13-5` vs `pedep-nut-23` (peds.ep)
- book: Anil is a 2½-year-old boy who lives in India and attends the local health clinic near their village for a routine check. Both his parents are subsistence farmers. He is asymptomatic. On examination, he is very thin but h | key B: Marasmus | 5 opts
- other: A 2-year-old boy lives in a village and attends the local health clinic near their village for a routine check. Both his parents are farmers. He is asymptomatic. On examination, he is very thin, but his hair and skin app | key B: Marasmus | 5 opts
- dice 0.93, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b13-5` vs `pedep-nut-5` (peds.ep)
- book: Anil is a 2½-year-old boy who lives in India and attends the local health clinic near their village for a routine check. Both his parents are subsistence farmers. He is asymptomatic. On examination, he is very thin but h | key B: Marasmus | 5 opts
- other: Anil is a 2.5-year-old boy who lives in India and attends the local health clinic near their village for a routine check-up. Both his parents are subsistence farmers. He is asymptomatic. On examination, he is very thin,  | key B: Marasmus | 5 opts
- dice 0.98, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b13-5` vs `pedhd-nutr-5` (peds)
- book: Anil is a 2½-year-old boy who lives in India and attends the local health clinic near their village for a routine check. Both his parents are subsistence farmers. He is asymptomatic. On examination, he is very thin but h | key B: Marasmus | 5 opts
- other: Anil is a 2½-year-old boy who lives in India and attends the local health clinic near their village for a routine check. Both his parents are subsistence farmers. He is asymptomatic. On examination, he is very thin but h | key B: Marasmus | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b13-6` vs `pedep-nut-6` (peds.ep)
- book: Harry is a 13-year-old boy who attends the paediatric clinic because of obesity. His height is on the 98th centile and his weight is above the 99.6th centile. Which of the following is least likely to be associated with  | key E: Type 1 diabetes | 5 opts
- other: Harry is a 13-year-old boy who attends the paediatric clinic because of obesity. His height is on the 98th centile and his weight is above the 99.6th centile. Which of the following is least likely to be associated with  | key E: Type 1 diabetes | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b13-6` vs `pedhd-nutr-6` (peds)
- book: Harry is a 13-year-old boy who attends the paediatric clinic because of obesity. His height is on the 98th centile and his weight is above the 99.6th centile. Which of the following is least likely to be associated with  | key E: Type 1 diabetes | 5 opts
- other: Harry is a 13-year-old boy who attends the paediatric clinic because of obesity. His height is on the 98th centile and his weight is above the 99.6th centile. Which of the following is least likely to be associated with  | key E: Type 1 diabetes | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b13-7-1` vs `pedep-nut-7` (peds.ep)
- book: For each of the following patients with nutritional problems select the most likely diagnosis from the list (A–J) below. Each option may be used once, more than once, or not at all. Ahmed is an 18-month-old Pakistani boy | key I: Vitamin D deficiency | 10 opts
- other: Ahmed is an 18-month-old Pakistani boy who was born in the UK with a weight of 3.2 kg. He is on a mixed diet. His height is on the 10th centile and his weight is on the 0.4th centile. He is noted to be miserable. On exam | key A: Vitamin D deficiency | 5 opts
- dice 0.8, key text same true, key letter moved true, fuller book, other lacks: Cystic fibrosis; Normal; Obesity (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b13-7-1` vs `pedhd-nutr-7` (peds)
- book: For each of the following patients with nutritional problems select the most likely diagnosis from the list (A–J) below. Each option may be used once, more than once, or not at all. Ahmed is an 18-month-old Pakistani boy | key I: Vitamin D deficiency | 10 opts
- other: Ahmed is an 18-month-old Pakistani boy who was born in the UK with a weight of 3.2 kg. He is on a mixed diet. His height is on the 10th centile and his weight is on the 0.4th centile. He is noted to be miserable. On exam | key A: Vitamin D deficiency | 5 opts
- dice 0.8, key text same true, key letter moved true, fuller book, other lacks: Cystic fibrosis; Normal; Obesity (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b13-7-2` vs `pedep-nut-8` (peds.ep)
- book: For each of the following patients with nutritional problems select the most likely diagnosis from the list (A–J) below. Each option may be used once, more than once, or not at all. Harry is a 3-week-old infant who has b | key J: Vitamin K deficiency | 10 opts
- other: Harry is a 3-week-old infant who has been exclusively breastfed by his mother. He was born at home as his mother wanted “everything to be natural” and declined all interventions. His birthweight was 3.4 kg. He presents t | key B: Vitamin K deficiency | 5 opts
- dice 0.81, key text same true, key letter moved true, fuller book, other lacks: Cystic fibrosis; Normal; Obesity (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b13-7-2` vs `pedhd-nutr-8` (peds)
- book: For each of the following patients with nutritional problems select the most likely diagnosis from the list (A–J) below. Each option may be used once, more than once, or not at all. Harry is a 3-week-old infant who has b | key J: Vitamin K deficiency | 10 opts
- other: Harry is a 3-week-old infant who has been exclusively breastfed by his mother. He was born at home as his mother wanted ‘everything to be natural’ and declined all interventions. His birthweight was 3.4 kg. He presents t | key B: Vitamin K deficiency | 5 opts
- dice 0.8, key text same true, key letter moved true, fuller book, other lacks: Cystic fibrosis; Normal; Obesity (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b13-7-3` vs `pedep-mf3-15` (peds.ep)
- book: For each of the following patients with nutritional problems select the most likely diagnosis from the list (A–J) below. Each option may be used once, more than once, or not at all. Jonas is an 18-month-old black African | key C: Kwashiorkor | 10 opts
- other: An 18-month-old boy is brought to the pediatrician for a routine checkup. His birth weight was 3.2 kg and he was breastfed until 10 months of age when his mother gave birth to another baby. He now mainly eats a maize-bas | key B: Kwashiorkor | 5 opts
- dice 0.51, key text same true, key letter moved true, fuller book, other lacks: Cow’s milk protein allergy; Cystic fibrosis; Obesity (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b13-7-3` vs `pedep-nut-9` (peds.ep)
- book: For each of the following patients with nutritional problems select the most likely diagnosis from the list (A–J) below. Each option may be used once, more than once, or not at all. Jonas is an 18-month-old black African | key C: Kwashiorkor | 10 opts
- other: Jonas is an 18-month-old Black African boy in KwaZulu-Natal, South Africa. He was born weighing 3.2 kg. He was breastfed until 9 months of age when his sibling was born. He now mainly eats traditional maize-based porridg | key C: Kwashiorkor | 5 opts
- dice 0.87, key text same true, key letter moved false, fuller book, other lacks: Cystic fibrosis; Normal; Obesity (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b13-7-3` vs `pedhd-nutr-9` (peds)
- book: For each of the following patients with nutritional problems select the most likely diagnosis from the list (A–J) below. Each option may be used once, more than once, or not at all. Jonas is an 18-month-old black African | key C: Kwashiorkor | 10 opts
- other: Jonas is an 18-month-old black African boy in KwaZulu Natal, South Africa. He was born weighing 3.2 kg. He was breastfed until 9 months of age when his sibling was born. He now mainly eats the traditional maize-based por | key C: Kwashiorkor | 5 opts
- dice 0.88, key text same true, key letter moved false, fuller book, other lacks: Cystic fibrosis; Normal; Obesity (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b13-7-4` vs `pedep-nut-10` (peds.ep)
- book: For each of the following patients with nutritional problems select the most likely diagnosis from the list (A–J) below. Each option may be used once, more than once, or not at all. Jamie is a 5-month-old male infant who | key A: Cow’s milk protein allergy | 10 opts
- other: Jamie is a 5-month-old male infant who was born with a weight of 3.5 kg (25th centile). He was initially breastfed and was growing well. His mother developed mastitis, so he was changed to formula milk. He now weighs 5.0 | key E: Cow's milk protein allergy | 5 opts
- dice 0.83, key text same true, key letter moved true, fuller book, other lacks: Cystic fibrosis; Normal; Obesity (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b13-7-4` vs `pedhd-nutr-10` (peds)
- book: For each of the following patients with nutritional problems select the most likely diagnosis from the list (A–J) below. Each option may be used once, more than once, or not at all. Jamie is a 5-month-old male infant who | key A: Cow’s milk protein allergy | 10 opts
- other: Jamie is a 5-month-old male infant who was born with a weight of 3.5 kg (25th centile). He was initially breastfed and was growing well. His mother developed mastitis and so he was changed to formula milk feeds. He now w | key E: Cow's milk protein allergy | 5 opts
- dice 0.84, key text same true, key letter moved true, fuller book, other lacks: Cystic fibrosis; Normal; Obesity (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b13-7-5` vs `pedep-gp-37` (peds.ep)
- book: For each of the following patients with nutritional problems select the most likely diagnosis from the list (A–J) below. Each option may be used once, more than once, or not at all. Tanya, an 11-month-old Caucasian girl, | key E: Normal | 10 opts
- other: Laila, an 11-month-old girl, is being monitored by her health provider. Her birthweight was 2.4 kg (2nd centile) and she has remained on the 2nd centile, now weighing 7.0 kg. Her mother is on the 5th centile and her fath | key D: Normal | 5 opts
- dice 0.81, key text same true, key letter moved true, fuller book, other lacks: Cystic fibrosis; Kwashiorkor; Obesity (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b13-7-5` vs `pedep-nut-11` (peds.ep)
- book: For each of the following patients with nutritional problems select the most likely diagnosis from the list (A–J) below. Each option may be used once, more than once, or not at all. Tanya, an 11-month-old Caucasian girl, | key E: Normal | 10 opts
- other: Tanya, an 11-month-old Caucasian girl, is being monitored by her health visitor. Her birthweight was 2.4 kg (0.4th centile), and she has remained on the 2nd centile, now weighing 7.0 kg. Her mother is on the 5th centile  | key E: Normal | 5 opts
- dice 0.87, key text same true, key letter moved false, fuller book, other lacks: Cow’s milk protein allergy; Kwashiorkor (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b13-7-5` vs `pedhd-nutr-11` (peds)
- book: For each of the following patients with nutritional problems select the most likely diagnosis from the list (A–J) below. Each option may be used once, more than once, or not at all. Tanya, an 11-month-old Caucasian girl, | key E: Normal | 10 opts
- other: Tanya, an 11-month-old Caucasian girl, is being monitored by her health visitor. Her birthweight was 2.4 kg (0.4th centile) and she has remained on the 2nd centile, now weighing 7.0 kg. Her mother is on the 5th centile a | key E: Normal | 5 opts
- dice 0.86, key text same true, key letter moved false, fuller book, other lacks: Cow’s milk protein allergy; Kwashiorkor (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

## Book chapter 14 Gastroenterology

### SAME `pedsa-b14-1` vs `pedep-gi-1` (peds.ep)
- book: Benjamin is a 6-year-old boy who is seen in the paediatric emergency department. He has been vomiting and has had diarrhoea for 3 days. His stool is watery and foul smelling but has no blood in it. He has not been out of | key D: Rotavirus | 5 opts
- other: Benjamin is a 6-year-old boy who is seen in the Paediatric Emergency Department. He has been vomiting and has had diarrhea for 3 days. His stool is watery and foul-smelling but contains no blood. He has never left the UK | key D: Rotavirus | 5 opts
- dice 0.88, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-1` vs `pedhd-gastro-1` (peds)
- book: Benjamin is a 6-year-old boy who is seen in the paediatric emergency department. He has been vomiting and has had diarrhoea for 3 days. His stool is watery and foul smelling but has no blood in it. He has not been out of | key D: Rotavirus | 5 opts
- other: Benjamin is a 6-year-old boy who is seen in the paediatric emergency department. He has been vomiting and has had diarrhoea for 3 days. His stool is watery and foul smelling but has no blood in it. He has not been out of | key D: Rotavirus | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b14-10-1` vs `pedep-gi-13` (peds.ep)
- book: The following (A–M) is a list of diagnoses associated with abdominal pain in children. For each of the following scenarios select the most likely diagnosis from the list. Each answer may be used once, more than once, or  | key undefined: Mesenteric adenitis | 13 opts
- other: Max, aged 9 years, has been brought to the Emergency Department because he is crying and saying his tummy hurts. He has had a 2-day history of fever and coryza. He has been drinking orange juice but has only eaten some j | key D: Mesenteric adenitis | 5 opts
- dice 0.86, key text same true, key letter moved true, fuller book, other lacks: Coeliac disease; Diabetic ketoacidosis; Gastroenteritis; Hepatitis; Inflammatory bowel disease; Inguinal hernia; Intussusception; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-10-1` vs `pedhd-gastro-13` (peds)
- book: The following (A–M) is a list of diagnoses associated with abdominal pain in children. For each of the following scenarios select the most likely diagnosis from the list. Each answer may be used once, more than once, or  | key undefined: Mesenteric adenitis | 13 opts
- other: Max, aged 9 years, has been brought to the Emergency Department as he is crying and saying his tummy hurts. He has had a 2-day history of fever and coryza. He has been drinking orange juice but has only eaten some jelly  | key D: Mesenteric adenitis | 5 opts
- dice 0.86, key text same true, key letter moved true, fuller book, other lacks: Coeliac disease; Diabetic ketoacidosis; Gastroenteritis; Hepatitis; Inflammatory bowel disease; Inguinal hernia; Intussusception; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-10-2` vs `pedep-gi-14` (peds.ep)
- book: The following (A–M) is a list of diagnoses associated with abdominal pain in children. For each of the following scenarios select the most likely diagnosis from the list. Each answer may be used once, more than once, or  | key undefined: Pneumonia | 13 opts
- other: Pete, aged 4 years, is brought by his mother to the Emergency Department because he is crying and saying his tummy hurts. He has had a 2-day history of fever, coryza, and cough. He is sitting quietly on his mother's lap  | key B: Pneumonia | 5 opts
- dice 0.84, key text same true, key letter moved true, fuller book, other lacks: Coeliac disease; Diabetic ketoacidosis; Gastroenteritis; Hepatitis; Inflammatory bowel disease; Inguinal hernia; Intussusception; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-10-2` vs `pedep-mf2-56` (peds.ep)
- book: The following (A–M) is a list of diagnoses associated with abdominal pain in children. For each of the following scenarios select the most likely diagnosis from the list. Each answer may be used once, more than once, or  | key undefined: Pneumonia | 13 opts
- other: A 4-year-old boy is brought by his mother to the Emergency Department as he is crying and saying his tummy hurts. He has had a 2-day history of fever, coryza, and cough. He is sitting quietly on his mother's lap and is r | key E: Pneumonia | 5 opts
- dice 0.72, key text same true, key letter moved true, fuller book, other lacks: Coeliac disease; Constipation; Diabetic ketoacidosis; Gastroenteritis; Inflammatory bowel disease; Inguinal hernia; Intussusception; Urinary tract infection (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b14-10-2` vs `pedhd-gastro-14` (peds)
- book: The following (A–M) is a list of diagnoses associated with abdominal pain in children. For each of the following scenarios select the most likely diagnosis from the list. Each answer may be used once, more than once, or  | key undefined: Pneumonia | 13 opts
- other: Pete, aged 4 years, is brought by his mother to the Emergency Department as he is crying and saying his tummy hurts. He has had a 2-day history of fever, coryza and cough. He is sitting quietly on his mother's lap, and i | key B: Pneumonia | 5 opts
- dice 0.86, key text same true, key letter moved true, fuller book, other lacks: Coeliac disease; Diabetic ketoacidosis; Gastroenteritis; Hepatitis; Inflammatory bowel disease; Inguinal hernia; Intussusception; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-10-3` vs `pedep-gi-15` (peds.ep)
- book: The following (A–M) is a list of diagnoses associated with abdominal pain in children. For each of the following scenarios select the most likely diagnosis from the list. Each answer may be used once, more than once, or  | key A: Appendicitis | 13 opts
- other: Molly, aged 10 years, is brought to the Paediatric Assessment Unit as she has been vomiting and had central abdominal pain for 2 days. She has also had some diarrhoea. She has only had apple juice and no food for the las | key C: Appendicitis | 5 opts
- dice 0.87, key text same true, key letter moved true, fuller book, other lacks: Coeliac disease; Diabetic ketoacidosis; Gastroenteritis; Hepatitis; Inflammatory bowel disease; Inguinal hernia; Intussusception; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-10-3` vs `pedhd-gastro-15` (peds)
- book: The following (A–M) is a list of diagnoses associated with abdominal pain in children. For each of the following scenarios select the most likely diagnosis from the list. Each answer may be used once, more than once, or  | key A: Appendicitis | 13 opts
- other: Molly, aged 10 years, is brought to the Paediatric Assessment Unit as she has been vomiting and had central abdominal pain for 2 days. She has also had some diarrhoea. She has only had apple juice and no food for the las | key C: Appendicitis | 5 opts
- dice 0.87, key text same true, key letter moved true, fuller book, other lacks: Coeliac disease; Diabetic ketoacidosis; Gastroenteritis; Hepatitis; Inflammatory bowel disease; Inguinal hernia; Intussusception; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-10-5` vs `pedep-gi-16` (peds.ep)
- book: The following (A–M) is a list of diagnoses associated with abdominal pain in children. For each of the following scenarios select the most likely diagnosis from the list. Each answer may be used once, more than once, or  | key C: Constipation | 13 opts
- other: Ted, aged 2 years, has had a 2-day history of low-grade fever and coryza. His mother has brought him to the Emergency Department because he is crying inconsolably. She thinks his tummy is hurting him. He has not opened h | key A: Constipation | 5 opts
- dice 0.83, key text same true, key letter moved true, fuller book, other lacks: Coeliac disease; Diabetic ketoacidosis; Gastroenteritis; Hepatitis; Inflammatory bowel disease; Inguinal hernia; Intussusception; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-10-5` vs `pedhd-gastro-16` (peds)
- book: The following (A–M) is a list of diagnoses associated with abdominal pain in children. For each of the following scenarios select the most likely diagnosis from the list. Each answer may be used once, more than once, or  | key C: Constipation | 13 opts
- other: Ted, aged 2 years, has had a 2-day history of low-grade fever and coryza. His mother has brought him to the Emergency Department as he is crying inconsolably. She thinks his tummy is hurting him. He has not opened his bo | key A: Constipation | 5 opts
- dice 0.83, key text same true, key letter moved true, fuller book, other lacks: Coeliac disease; Diabetic ketoacidosis; Gastroenteritis; Hepatitis; Inflammatory bowel disease; Inguinal hernia; Intussusception; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-2` vs `pedep-gi-61` (peds.ep)
- book: Emma is an 18-month-old girl who is seen in the outpatient department. She presents with loose stools two to three times each day, with no blood in them. She is generally difficult and it has become a battle to get her t | key B: Coeliac disease | 5 opts
- other: An 18-month-old girl is seen in the outpatient department. She presents with loose stools two to three times each day, with no blood in them. She is generally difficult, and it has become a battle to get her to feed. Exa | key B: Celiac disease | 5 opts
- dice 0.98, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b14-3` vs `pedep-gi-2` (peds.ep)
- book: Rodney, a boisterous 2-year-old, has had diarrhoea for the last 3 months. He produces up to four stools a day, which are loose, brown in colour and usually contain undigested food. The rest of the family are well. He has | key A: Chronic non-specific diarrhoea | 5 opts
- other: Rodney, a boisterous 2-year-old, has had diarrhea for the last 3 months. He produces up to four stools a day, which are loose, brown in color, and usually contain undigested food. The rest of the family is well. He has n | key A: Chronic non-specific diarrhea | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b14-3` vs `pedep-gi-63` (peds.ep)
- book: Rodney, a boisterous 2-year-old, has had diarrhoea for the last 3 months. He produces up to four stools a day, which are loose, brown in colour and usually contain undigested food. The rest of the family are well. He has | key A: Chronic non-specific diarrhoea | 5 opts
- other: A 2-year-old boy has had diarrhea for the last 3 months. He produces up to four stools a day, which are loose, brown in color, and usually contain undigested food. The rest of the family is well. Examination is normal, a | key A: Chronic non-specific diarrhea | 5 opts
- dice 0.91, key text same true, key letter moved false, fuller other, other lacks: Coeliac disease (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-3` vs `pedhd-gastro-2` (peds)
- book: Rodney, a boisterous 2-year-old, has had diarrhoea for the last 3 months. He produces up to four stools a day, which are loose, brown in colour and usually contain undigested food. The rest of the family are well. He has | key A: Chronic non-specific diarrhoea | 5 opts
- other: Rodney, a boisterous 2-year-old, has had diarrhoea for the last 3 months. He produces up to four stools a day, which are loose, brown in colour and usually contain undigested food. The rest of the family are well. He has | key A: Chronic non-specific diarrhoea | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b14-4` vs `pedep-gi-3` (peds.ep)
- book: Ellie is a 4-year-old girl who has been complaining of pain in her tummy for a month. It is worse when she goes to the toilet; her stools are firm and she opens her bowels only every 2–3 days. She has not had any vomitin | key B: Constipation | 5 opts
- other: Ellie is a 4-year-old girl who has been complaining of tummy pain for a month. It is worse when she goes to the toilet; her stools are firm, and she opens her bowels only every 2-3 days. She has not had any vomiting. For | key B: Constipation | 5 opts
- dice 0.99, key text same true, key letter moved false, fuller other, other lacks: Inguinal hernia; Wilms tumour (keyed option kept: true)
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical; other lacks 2 option(s)

### SAME `pedsa-b14-4` vs `pedep-mf1-49` (peds.ep)
- book: Ellie is a 4-year-old girl who has been complaining of pain in her tummy for a month. It is worse when she goes to the toilet; her stools are firm and she opens her bowels only every 2–3 days. She has not had any vomitin | key B: Constipation | 5 opts
- other: A 4-year-old girl has been complaining of pain in her tummy for a month. It is worse when she goes to the toilet; her stools are firm, and she passes stools only once every 2–3 days. She has not had any vomiting. For the | key B: Constipation | 5 opts
- dice 0.9, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-4` vs `pedhd-gastro-3` (peds)
- book: Ellie is a 4-year-old girl who has been complaining of pain in her tummy for a month. It is worse when she goes to the toilet; her stools are firm and she opens her bowels only every 2–3 days. She has not had any vomitin | key B: Constipation | 5 opts
- other: Ellie is a 4-year-old girl who has been complaining of pain in her tummy for a month. It is worse when she goes to the toilet; her stools are firm and she opens her bowels only every 2–3 days. She has not had any vomitin | key B: Constipation | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b14-5` vs `pedep-gi-4` (peds.ep)
- book: Aiysha is a 2-month-old baby who is seen in the paediatric outpatient department. She was born at term, weighing 3.5 kg and is breastfed. Her mother is concerned as she has vomited some of the milk after most feeds since | key A: Gastro-oesophageal reflux | 5 opts
- other: Alysha is a 2-month-old baby who is seen in the paediatric outpatient department. She was born at term, weighing 3.5 kg, and is breastfed. Her mother is concerned as she has vomited some of the milk after most feeds sinc | key A: Gastro-oesophageal reflux | 5 opts
- dice 0.98, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b14-5` vs `pedep-gi-59` (peds.ep)
- book: Aiysha is a 2-month-old baby who is seen in the paediatric outpatient department. She was born at term, weighing 3.5 kg and is breastfed. Her mother is concerned as she has vomited some of the milk after most feeds since | key A: Gastro-oesophageal reflux | 5 opts
- other: A 2-month-old baby is seen in the pediatric outpatient department. She was born at term, weighing 3.5 kg, and is breastfed. Her mother is concerned as she has vomited some of the milk after most feeds since birth. She cr | key A: Gastroesophageal reflux | 5 opts
- dice 0.98, key text same true, key letter moved false, fuller other, other lacks: Helicobacter pylori infection (keyed option kept: true)
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical; other lacks 1 option(s)

### SAME `pedsa-b14-5` vs `pedhd-gastro-4` (peds)
- book: Aiysha is a 2-month-old baby who is seen in the paediatric outpatient department. She was born at term, weighing 3.5 kg and is breastfed. Her mother is concerned as she has vomited some of the milk after most feeds since | key A: Gastro-oesophageal reflux | 5 opts
- other: Aiysha is a 2-month-old baby who is seen in the paediatric outpatient department. She was born at term, weighing 3.5 kg and is breastfed. Her mother is concerned as she has vomited some of the milk after most feeds since | key A: Gastro-oesophageal reflux | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b14-6` vs `pedep-gi-5` (peds.ep)
- book: Claire, a 7-year-old girl, has had abdominal pain for the last 6 months. On several occasions it has been sufficiently severe for her to be sent home early from school. The pain happens once or twice a week in the aftern | key A: Functional abdominal pain | 5 opts
- other: Claire, a 7-year-old girl, has had abdominal pain for the last 6 months. On several occasions, it has been sufficiently severe for her to be sent home early from school. The pain happens once or twice a week in the after | key A: Functional abdominal pain | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b14-6` vs `pedhd-gastro-5` (peds)
- book: Claire, a 7-year-old girl, has had abdominal pain for the last 6 months. On several occasions it has been sufficiently severe for her to be sent home early from school. The pain happens once or twice a week in the aftern | key A: Functional abdominal pain | 5 opts
- other: Claire, a 7-year-old girl, has had abdominal pain for the last 6 months. On several occasions it has been sufficiently severe for her to be sent home early from school. The pain happens once or twice a week in the aftern | key A: Functional abdominal pain | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b14-7` vs `pedep-gi-6` (peds.ep)
- book: Ben, aged 9 months, has had a 3 day history of diarrhoea and vomiting. On examination he is found to be quiet but alert, is tachypnoeic, has a tachycardia but normal pulses, dry mouth, no mottling of the skin but reduced | key E: Rehydration over 48 hours with 0.9% or 0.45% saline | 5 opts
- other: Ben, aged 9 months, has had a 3-day history of diarrhoea and vomiting. On examination, he is found to be quiet but alert, is tachypnoeic, has a tachycardia but normal pulses, a dry mouth, no mottling of the skin but redu | key E: Rehydration over 48 hours with 0.9% or 0.45% saline | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b14-7` vs `pedhd-gastro-6` (peds)
- book: Ben, aged 9 months, has had a 3 day history of diarrhoea and vomiting. On examination he is found to be quiet but alert, is tachypnoeic, has a tachycardia but normal pulses, dry mouth, no mottling of the skin but reduced | key E: Rehydration over 48 hours with 0.9% or 0.45% saline | 5 opts
- other: Ben, aged 9 months, has had a 3 day history of diarrhoea and vomiting. On examination he is found to be quiet but alert, is tachypnoeic, has a tachycardia but normal pulses, dry mouth, no mottling of the skin but reduced | key E: Rehydration over 48 hours with 0.9% or 0.45% saline | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b14-8` vs `pedep-gi-46` (peds.ep)
- book: Matthew is a 3-day-old term infant who has not passed meconium since birth. On examination his abdomen is distended but the remainder of the examination is normal. An x-ray of the abdomen shows distended loops throughout | key D: Hirschsprung disease | 5 opts
- other: You are counselling a 3-day-old term infant who has not passed meconium since birth. On examination his abdomen is distended but the remainder of the examination is normal. An x-ray of the abdomen shows distended loops t | key D: Hirschsprung disease | 5 opts
- dice 0.95, key text same true, key letter moved false, fuller other, other lacks: Rectal atresia (keyed option kept: true)
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical; other lacks 1 option(s)

### SAME `pedsa-b14-8` vs `pedep-gi-7` (peds.ep)
- book: Matthew is a 3-day-old term infant who has not passed meconium since birth. On examination his abdomen is distended but the remainder of the examination is normal. An x-ray of the abdomen shows distended loops throughout | key D: Hirschsprung disease | 5 opts
- other: Matthew is a 3-day-old term infant who has not passed meconium since birth. On examination, his abdomen is distended, but the remainder of the examination is normal. An x-ray of the abdomen shows distended loops througho | key D: Hirschsprung's disease | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b14-8` vs `pedhd-gastro-7` (peds)
- book: Matthew is a 3-day-old term infant who has not passed meconium since birth. On examination his abdomen is distended but the remainder of the examination is normal. An x-ray of the abdomen shows distended loops throughout | key D: Hirschsprung disease | 5 opts
- other: Matthew is a 3-day-old term infant who has not passed meconium since birth. On examination his abdomen is distended but the remainder of the examination is normal. An x-ray of the abdomen shows distended loops throughout | key D: Hirschsprung disease | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b14-9-1` vs `pedep-gi-8` (peds.ep)
- book: The following (A–O) is a list of possible diagnoses which result in vomiting. For each of the following scenarios pick the most likely cause for the vomiting. Each answer may be used once, more than once, or not at all.  | key G: Intussusception | 15 opts
- other: James, an 8-month-old infant, is brought to the Emergency Department by his parents. He is having episodes of abdominal pain and is just recovering from an upper respiratory tract infection. He seems well in between, but | key A: Intussusception | 5 opts
- dice 0.84, key text same true, key letter moved true, fuller book, other lacks: Cyclical vomiting syndrome; Gastroenteritis; Gastro-oesophageal reflux; Malrotation; Meningitis; Migraine; Raised intracranial pressure; Sepsis; Strangulated inguinal hernia; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-9-1` vs `pedhd-gastro-8` (peds)
- book: The following (A–O) is a list of possible diagnoses which result in vomiting. For each of the following scenarios pick the most likely cause for the vomiting. Each answer may be used once, more than once, or not at all.  | key G: Intussusception | 15 opts
- other: James, an 8-month-old infant, is bought to the Emergency Department by his parents. He is having episodes of abdominal pain and is just recovering from an upper respiratory tract infection. He seems well in-between, but  | key A: Intussusception | 5 opts
- dice 0.85, key text same true, key letter moved true, fuller book, other lacks: Cyclical vomiting syndrome; Gastroenteritis; Gastro-oesophageal reflux; Malrotation; Meningitis; Migraine; Raised intracranial pressure; Sepsis; Strangulated inguinal hernia; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-9-2` vs `pedep-gi-9` (peds.ep)
- book: The following (A–O) is a list of possible diagnoses which result in vomiting. For each of the following scenarios pick the most likely cause for the vomiting. Each answer may be used once, more than once, or not at all.  | key D: Diabetic ketoacidosis | 15 opts
- other: Bridgitta, an 8-year-old girl, presents to her family doctor with vomiting and abdominal pain. Her vomiting only started today and she has no diarrhoea or fever. She looks unwell and has clinical dehydration on examinati | key B: Diabetic ketoacidosis | 5 opts
- dice 0.83, key text same true, key letter moved true, fuller book, other lacks: Cyclical vomiting syndrome; Gastroenteritis; Gastro-oesophageal reflux; Malrotation; Meningitis; Migraine; Raised intracranial pressure; Sepsis; Strangulated inguinal hernia; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-9-2` vs `pedhd-gastro-9` (peds)
- book: The following (A–O) is a list of possible diagnoses which result in vomiting. For each of the following scenarios pick the most likely cause for the vomiting. Each answer may be used once, more than once, or not at all.  | key D: Diabetic ketoacidosis | 15 opts
- other: Bridgitta, an 8-year-old girl, presents to her family doctor with vomiting and abdominal pain. Her vomiting only started today and she has no diarrhoea or fever. She looks unwell and has clinical dehydration on examinati | key B: Diabetic ketoacidosis | 5 opts
- dice 0.83, key text same true, key letter moved true, fuller book, other lacks: Cyclical vomiting syndrome; Gastroenteritis; Gastro-oesophageal reflux; Malrotation; Meningitis; Migraine; Raised intracranial pressure; Sepsis; Strangulated inguinal hernia; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-9-3` vs `pedep-gi-10` (peds.ep)
- book: The following (A–O) is a list of possible diagnoses which result in vomiting. For each of the following scenarios pick the most likely cause for the vomiting. Each answer may be used once, more than once, or not at all.  | key undefined: Pyloric stenosis | 15 opts
- other: Noah is 5 weeks old and has been breastfeeding well and putting on weight. However, over the last 36 hours, he has been vomiting after almost every feed. The vomit goes everywhere, and he then wants to feed again. All th | key E: Pyloric stenosis | 5 opts
- dice 0.83, key text same true, key letter moved true, fuller book, other lacks: Cyclical vomiting syndrome; Gastroenteritis; Gastro-oesophageal reflux; Malrotation; Meningitis; Migraine; Raised intracranial pressure; Sepsis; Strangulated inguinal hernia; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-9-3` vs `pedhd-gastro-10` (peds)
- book: The following (A–O) is a list of possible diagnoses which result in vomiting. For each of the following scenarios pick the most likely cause for the vomiting. Each answer may be used once, more than once, or not at all.  | key undefined: Pyloric stenosis | 15 opts
- other: Noah is 5 weeks old and has been breastfeeding well and putting on weight. However, over the last 36 hours he has been vomiting after almost every feed. The vomit goes everywhere and he then wants to feed again. All the  | key E: Pyloric stenosis | 5 opts
- dice 0.83, key text same true, key letter moved true, fuller book, other lacks: Cyclical vomiting syndrome; Gastroenteritis; Gastro-oesophageal reflux; Malrotation; Meningitis; Migraine; Raised intracranial pressure; Sepsis; Strangulated inguinal hernia; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-9-4` vs `pedep-gi-11` (peds.ep)
- book: The following (A–O) is a list of possible diagnoses which result in vomiting. For each of the following scenarios pick the most likely cause for the vomiting. Each answer may be used once, more than once, or not at all.  | key H: Malrotation | 15 opts
- other: Amir was born by elective caesarean section for maternal pre-eclampsia. His birthweight was 3.3 kg. He is 36 hours old. He has started to establish breastfeeding but has been vomiting after every feed. The vomit is noted | key B: Malrotation | 5 opts
- dice 0.84, key text same true, key letter moved true, fuller book, other lacks: Appendicitis; Coeliac disease; Cyclical vomiting syndrome; Diabetic ketoacidosis; Gastroenteritis; Gastro-oesophageal reflux; Pyloric stenosis; Raised intracranial pressure; Sepsis; Strangulated inguinal hernia; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-9-4` vs `pedhd-gastro-11` (peds)
- book: The following (A–O) is a list of possible diagnoses which result in vomiting. For each of the following scenarios pick the most likely cause for the vomiting. Each answer may be used once, more than once, or not at all.  | key H: Malrotation | 15 opts
- other: Amir was born by elective caesarean section for maternal pre-eclampsia. His birthweight was 3.3 kg. He is 36 hours old. He has started to establish breastfeeding but has been vomiting after every feed. The vomit is noted | key B: Malrotation | 5 opts
- dice 0.84, key text same true, key letter moved true, fuller book, other lacks: Appendicitis; Coeliac disease; Cyclical vomiting syndrome; Diabetic ketoacidosis; Gastroenteritis; Gastro-oesophageal reflux; Pyloric stenosis; Raised intracranial pressure; Sepsis; Strangulated inguinal hernia; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-9-5` vs `pedep-gi-12` (peds.ep)
- book: The following (A–O) is a list of possible diagnoses which result in vomiting. For each of the following scenarios pick the most likely cause for the vomiting. Each answer may be used once, more than once, or not at all.  | key J: Migraine | 15 opts
- other: Jennifer, a 14-year-old girl, presents to the Emergency Department with a severe headache for the last 6 hours, mainly affecting the left side of her head. She just wants to lie still in the dark and dislikes being distu | key E: Migraine | 5 opts
- dice 0.91, key text same true, key letter moved true, fuller book, other lacks: Appendicitis; Coeliac disease; Cyclical vomiting syndrome; Diabetic ketoacidosis; Gastroenteritis; Gastro-oesophageal reflux; Pyloric stenosis; Raised intracranial pressure; Sepsis; Strangulated inguinal hernia; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b14-9-5` vs `pedhd-gastro-12` (peds)
- book: The following (A–O) is a list of possible diagnoses which result in vomiting. For each of the following scenarios pick the most likely cause for the vomiting. Each answer may be used once, more than once, or not at all.  | key J: Migraine | 15 opts
- other: Jennifer, a 14-year-old girl, presents to the emergency department with a severe headache for the last 6 hours, mainly affecting the left side of her head. She just wants to lie still in the dark and dislikes being distu | key E: Migraine | 5 opts
- dice 0.91, key text same true, key letter moved true, fuller book, other lacks: Appendicitis; Coeliac disease; Cyclical vomiting syndrome; Diabetic ketoacidosis; Gastroenteritis; Gastro-oesophageal reflux; Pyloric stenosis; Raised intracranial pressure; Sepsis; Strangulated inguinal hernia; Urinary tract infection (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

## Book chapter 15 Infection and immunity

### SAME `pedsa-b15-1` vs `pedep-inf-21` (peds.ep)
- book: Joseph, aged 3 years, has been unwell for 24 hours with irritability, vomiting and fever. He was seen by his general practitioner earlier in the day and started on amoxicillin. On examination his temperature is 38.5° C,  | key D: Meningococcal sepsis | 5 opts
- other: A 3-year-old boy presents with 24 hours of irritability, vomiting, and fever. He has a purpuric rash on his upper limbs and abdomen. Vitals: Temp 38.5°C, HR 140/min, BP 90/60 mmHg. What is the most likely diagnosis? | key D: Meningococcal sepsis | 5 opts
- dice 0.55, key text same true, key letter moved false, fuller other, other lacks: Pertussis (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b15-1` vs `pedep-inf-53` (peds.ep)
- book: Joseph, aged 3 years, has been unwell for 24 hours with irritability, vomiting and fever. He was seen by his general practitioner earlier in the day and started on amoxicillin. On examination his temperature is 38.5° C,  | key D: Meningococcal sepsis | 5 opts
- other: Joseph, aged 3 years, has been unwell for 24 hours with irritability, vomiting, and fever. He was seen by his general practitioner earlier in the day and started on amoxicillin. On examination, his temperature is 38.5°C, | key D: Meningococcal sepsis | 5 opts
- dice 0.96, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b15-1` vs `pedhd-inf-1` (peds)
- book: Joseph, aged 3 years, has been unwell for 24 hours with irritability, vomiting and fever. He was seen by his general practitioner earlier in the day and started on amoxicillin. On examination his temperature is 38.5° C,  | key D: Meningococcal sepsis | 5 opts
- other: Joseph, aged 3 years, has been unwell for 24 hours with irritability, vomiting and fever. He was seen by his general practitioner earlier in the day and started on amoxicillin. On examination his temperature is 38.5°C, p | key D: Meningococcal sepsis | 5 opts
- dice 0.97, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b15-10-1` vs `pedep-inf-59` (peds.ep)
- book: The following (A–T) is a list of infectious agents seen in children. Select the organism that is most likely to be the causative agent in the clinical scenarios outlined below. Each option may be used once, more than onc | key J: Measles virus | 20 opts
- other: Harry, 21 months old, has a 3-day history of cough, fever, conjunctivitis, and a widespread rash. What is the most likely causative organism? | key C: Measles virus | 5 opts
- dice 0.42, key text same true, key letter moved true, fuller book, other lacks: Aspergillus fumigatus; Chickenpox virus (varicella zoster virus); Cytomegalovirus infection; Epstein–Barr virus; Herpes simplex virus; Human immunodeficiency virus infection; Lyme disease (Borrelia burgdorferi); Malaria parasites (Plasmodium sp.); Mumps virus; Parvovirus infection (fifth disease); Pseudomonas aeruginosa; Respiratory syncytial virus; Roseola infantum (sixth disease); Rubella virus; Staphylococcus aureus; Streptococcus pneumoniae; Tuberculosis (Mycobacterium tuberculosis) (keyed option kept: true)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b15-10-1` vs `pedhd-inf-8` (peds)
- book: The following (A–T) is a list of infectious agents seen in children. Select the organism that is most likely to be the causative agent in the clinical scenarios outlined below. Each option may be used once, more than onc | key J: Measles virus | 20 opts
- other: Harry, aged 21 months, presents with a 3 day history of cough and fever and is very miserable and feeding poorly. Examination reveals conjunctivitis and the widespread rash shown. Which of the following is the organism t | key C: Measles virus | 5 opts
- dice 0.67, key text same true, key letter moved true, fuller book, other lacks: Aspergillus fumigatus; Chickenpox virus (varicella zoster virus); Epstein–Barr virus; Herpes simplex virus; Human immunodeficiency virus infection; Lyme disease (Borrelia burgdorferi); Malaria parasites (Plasmodium sp.); Mumps virus; Parvovirus infection (fifth disease); Pseudomonas aeruginosa; Respiratory syncytial virus; Rubella virus; Staphylococcus aureus; Streptococcus pneumoniae; Tuberculosis (Mycobacterium tuberculosis) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### UNSURE `pedsa-b15-10-2` vs `pedep-inf-50` (peds.ep)
- book: The following (A–T) is a list of infectious agents seen in children. Select the organism that is most likely to be the causative agent in the clinical scenarios outlined below. Each option may be used once, more than onc | key undefined: Rhinovirus | 20 opts
- other: A 50-month-old child presents with a 1-day history of intermittent fever and runny nose. She is eating less but continues to drink fluids. On examination, her temperature is 37.9°C and she has a fine macular rash mainly  | key D: Rhinovirus | 4 opts
- dice 0.47, key text same true, key letter moved true, fuller book, other lacks: Aspergillus fumigatus; Chickenpox virus (varicella zoster virus); Cytomegalovirus infection; Epstein–Barr virus; Herpes simplex virus; Human immunodeficiency virus infection; Influenza virus; Lyme disease (Borrelia burgdorferi); Malaria parasites (Plasmodium sp.); Measles virus; Mumps virus; Parvovirus infection (fifth disease); Pseudomonas aeruginosa; Respiratory syncytial virus; Roseola infantum (sixth disease); Rubella virus; Staphylococcus aureus; Streptococcus pneumoniae; Tuberculosis (Mycobacterium tuberculosis) (keyed option kept: true)
- why: live scenario differs, key unverified

### SAME `pedsa-b15-10-2` vs `pedep-inf-60` (peds.ep)
- book: The following (A–T) is a list of infectious agents seen in children. Select the organism that is most likely to be the causative agent in the clinical scenarios outlined below. Each option may be used once, more than onc | key undefined: Rhinovirus | 20 opts
- other: Maryam, 10 months old, has an intermittent fever for one day, a runny nose, and a fine macular rash on her trunk. What is the most likely causative organism? | key A: Rhinovirus | 5 opts
- dice 0.36, key text same true, key letter moved true, fuller book, other lacks: Aspergillus fumigatus; Chickenpox virus (varicella zoster virus); Cytomegalovirus infection; Epstein–Barr virus; Herpes simplex virus; Human immunodeficiency virus infection; Influenza virus; Lyme disease (Borrelia burgdorferi); Malaria parasites (Plasmodium sp.); Measles virus; Mumps virus; Parvovirus infection (fifth disease); Pseudomonas aeruginosa; Respiratory syncytial virus; Roseola infantum (sixth disease); Rubella virus; Staphylococcus aureus; Streptococcus pneumoniae; Tuberculosis (Mycobacterium tuberculosis) (keyed option kept: true)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b15-10-2` vs `pedhd-inf-9` (peds)
- book: The following (A–T) is a list of infectious agents seen in children. Select the organism that is most likely to be the causative agent in the clinical scenarios outlined below. Each option may be used once, more than onc | key undefined: Rhinovirus | 20 opts
- other: Maryam, a 10-month-old infant, is brought to her general practitioner. She has had an intermittent fever for 1 day and has a runny nose. Her mother is concerned as her appetite is reduced, but she is still drinking. She  | key A: Rhinovirus | 5 opts
- dice 0.84, key text same true, key letter moved true, fuller book, other lacks: Aspergillus fumigatus; Chickenpox virus (varicella zoster virus); Cytomegalovirus infection; Epstein–Barr virus; Herpes simplex virus; Human immunodeficiency virus infection; Influenza virus; Lyme disease (Borrelia burgdorferi); Malaria parasites (Plasmodium sp.); Measles virus; Mumps virus; Parvovirus infection (fifth disease); Pseudomonas aeruginosa; Respiratory syncytial virus; Roseola infantum (sixth disease); Rubella virus; Staphylococcus aureus; Streptococcus pneumoniae; Tuberculosis (Mycobacterium tuberculosis) (keyed option kept: true)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b15-10-3` vs `pedep-inf-42` (peds.ep)
- book: The following (A–T) is a list of infectious agents seen in children. Select the organism that is most likely to be the causative agent in the clinical scenarios outlined below. Each option may be used once, more than onc | key D: Epstein–Barr virus | 20 opts
- other: A 12-year-old girl developed a severe sore throat and lethargy. Amoxicillin was prescribed. The next day, she developed a florid maculopapular rash. Which organism is most likely the causative agent? | key B: Epstein-Barr virus | 5 opts
- dice 0.56, key text same true, key letter moved true, fuller book, other lacks: Aspergillus fumigatus; Chickenpox virus (varicella zoster virus); Cytomegalovirus infection; Herpes simplex virus; Human immunodeficiency virus infection; Influenza virus; Lyme disease (Borrelia burgdorferi); Malaria parasites (Plasmodium sp.); Measles virus; Mumps virus; Parvovirus infection (fifth disease); Pseudomonas aeruginosa; Respiratory syncytial virus; Rhinovirus; Roseola infantum (sixth disease); Rubella virus; Staphylococcus aureus; Streptococcus pneumoniae; Tuberculosis (Mycobacterium tuberculosis) (keyed option kept: true)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b15-10-3` vs `pedep-inf-61` (peds.ep)
- book: The following (A–T) is a list of infectious agents seen in children. Select the organism that is most likely to be the causative agent in the clinical scenarios outlined below. Each option may be used once, more than onc | key D: Epstein–Barr virus | 20 opts
- other: Jennifer, 12 years old, developed a severe sore throat and lethargy. She was prescribed amoxicillin and developed a florid maculopapular rash the next day. What is the most likely causative organism? | key D: Epstein-Barr virus (EBV) | 5 opts
- dice 0.6, key text same false, key letter moved false, fuller book, other lacks: Aspergillus fumigatus; Chickenpox virus (varicella zoster virus); Cytomegalovirus infection; Epstein–Barr virus; Herpes simplex virus; Human immunodeficiency virus infection; Influenza virus; Lyme disease (Borrelia burgdorferi); Malaria parasites (Plasmodium sp.); Parvovirus infection (fifth disease); Pseudomonas aeruginosa; Respiratory syncytial virus; Roseola infantum (sixth disease); Rubella virus; Staphylococcus aureus; Streptococcus pneumoniae; Tuberculosis (Mycobacterium tuberculosis) (keyed option kept: false)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b15-10-3` vs `pedhd-inf-10` (peds)
- book: The following (A–T) is a list of infectious agents seen in children. Select the organism that is most likely to be the causative agent in the clinical scenarios outlined below. Each option may be used once, more than onc | key D: Epstein–Barr virus | 20 opts
- other: Jennifer, aged 12 years, developed a severe sore throat and lethargy. Amoxicillin was prescribed. The next day she developed the florid maculopapular rash shown. Which of the following is the organism that is most likely | key D: Epstein-Barr virus (EBV) | 5 opts
- dice 0.68, key text same false, key letter moved false, fuller book, other lacks: Aspergillus fumigatus; Chickenpox virus (varicella zoster virus); Cytomegalovirus infection; Epstein–Barr virus; Herpes simplex virus; Human immunodeficiency virus infection; Influenza virus; Lyme disease (Borrelia burgdorferi); Malaria parasites (Plasmodium sp.); Parvovirus infection (fifth disease); Pseudomonas aeruginosa; Respiratory syncytial virus; Roseola infantum (sixth disease); Rubella virus; Staphylococcus aureus; Streptococcus pneumoniae; Tuberculosis (Mycobacterium tuberculosis) (keyed option kept: false)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b15-10-5` vs `pedep-inf-62` (peds.ep)
- book: The following (A–T) is a list of infectious agents seen in children. Select the organism that is most likely to be the causative agent in the clinical scenarios outlined below. Each option may be used once, more than onc | key B: Chickenpox virus (varicella zoster virus) | 20 opts
- other: Philip is 4 years old and presents with a widespread, intensely itchy vesicular rash after starting school. What is the most likely causative organism? | key A: Chickenpox (varicella zoster virus) | 5 opts
- dice 0.44, key text same true, key letter moved true, fuller book, other lacks: Aspergillus fumigatus; Cytomegalovirus infection; Epstein–Barr virus; Herpes simplex virus; Human immunodeficiency virus infection; Influenza virus; Malaria parasites (Plasmodium sp.); Parvovirus infection (fifth disease); Pseudomonas aeruginosa; Respiratory syncytial virus; Rhinovirus; Roseola infantum (sixth disease); Rubella virus; Staphylococcus aureus; Streptococcus pneumoniae; Tuberculosis (Mycobacterium tuberculosis) (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b15-10-5` vs `pedhd-inf-11` (peds)
- book: The following (A–T) is a list of infectious agents seen in children. Select the organism that is most likely to be the causative agent in the clinical scenarios outlined below. Each option may be used once, more than onc | key B: Chickenpox virus (varicella zoster virus) | 20 opts
- other: Philip is 4 years old and has recently started school. He presents with a widespread rash, shown, that is intensely itchy. Which of the following is the organism that is most likely to be the causative agent in this clin | key A: Chickenpox (varicella zoster virus) | 5 opts
- dice 0.6, key text same true, key letter moved true, fuller book, other lacks: Aspergillus fumigatus; Cytomegalovirus infection; Epstein–Barr virus; Herpes simplex virus; Human immunodeficiency virus infection; Influenza virus; Malaria parasites (Plasmodium sp.); Parvovirus infection (fifth disease); Pseudomonas aeruginosa; Respiratory syncytial virus; Rhinovirus; Roseola infantum (sixth disease); Rubella virus; Staphylococcus aureus; Streptococcus pneumoniae; Tuberculosis (Mycobacterium tuberculosis) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b15-10-7` vs `pedep-mf3-40` (peds.ep)
- book: The following (A–T) is a list of infectious agents seen in children. Select the organism that is most likely to be the causative agent in the clinical scenarios outlined below. Each option may be used once, more than onc | key undefined: Parvovirus infection (fifth disease) | 20 opts
- other: A 6-year-old girl missed a few days of school as she had a fever and was generally lethargic. Now she has a temperature of 38.3°C and has a marked erythematous rash on her cheeks. Which organism is most likely to be the  | key D: Parvovirus infection (fifth disease) | 5 opts
- dice 0.65, key text same true, key letter moved true, fuller book, other lacks: Aspergillus fumigatus; Cytomegalovirus infection; Epstein–Barr virus; Human immunodeficiency virus infection; Influenza virus; Lyme disease (Borrelia burgdorferi); Malaria parasites (Plasmodium sp.); Mumps virus; Pseudomonas aeruginosa; Respiratory syncytial virus; Rhinovirus; Rubella virus; Staphylococcus aureus; Streptococcus pneumoniae; Tuberculosis (Mycobacterium tuberculosis) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b15-10-7` vs `pedep-mf4-58` (peds.ep)
- book: The following (A–T) is a list of infectious agents seen in children. Select the organism that is most likely to be the causative agent in the clinical scenarios outlined below. Each option may be used once, more than onc | key undefined: Parvovirus infection (fifth disease) | 20 opts
- other: Katie is 6 years old. She missed a few days of school as she had a fever and was generally lethargic. Now she has a temperature of 38.3°C and has a marked erythematous rash on her cheeks. Which of the following is the or | key A: Parvovirus infection (fifth disease) | 5 opts
- dice 0.72, key text same true, key letter moved true, fuller book, other lacks: Aspergillus fumigatus; Chickenpox virus (varicella zoster virus); Epstein–Barr virus; Herpes simplex virus; Human immunodeficiency virus infection; Influenza virus; Lyme disease (Borrelia burgdorferi); Malaria parasites (Plasmodium sp.); Pseudomonas aeruginosa; Respiratory syncytial virus; Rhinovirus; Rubella virus; Staphylococcus aureus; Streptococcus pneumoniae; Tuberculosis (Mycobacterium tuberculosis) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b15-10-7` vs `pedhd-inf-12` (peds)
- book: The following (A–T) is a list of infectious agents seen in children. Select the organism that is most likely to be the causative agent in the clinical scenarios outlined below. Each option may be used once, more than onc | key undefined: Parvovirus infection (fifth disease) | 20 opts
- other: Katie is 6 years old. She missed a few days of school as she had a fever and was generally lethargic. Now she has a temperature of 38.3°C and has a marked erythematous rash on her cheeks. Which of the following is the or | key A: Parvovirus infection (fifth disease) | 5 opts
- dice 0.72, key text same true, key letter moved true, fuller book, other lacks: Aspergillus fumigatus; Chickenpox virus (varicella zoster virus); Epstein–Barr virus; Herpes simplex virus; Human immunodeficiency virus infection; Influenza virus; Lyme disease (Borrelia burgdorferi); Malaria parasites (Plasmodium sp.); Pseudomonas aeruginosa; Respiratory syncytial virus; Rhinovirus; Rubella virus; Staphylococcus aureus; Streptococcus pneumoniae; Tuberculosis (Mycobacterium tuberculosis) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b15-11-1` vs `pedhd-inf-13` (peds)
- book: For each of the following patients with an infectious disease, select the NEXT step in management from the list (A–O) below. Each option may be used once, more than once, or not at all. Mohammed is 2 years old and presen | key J: Oral antibiotic | 15 opts
- other: Mohammed is 2 years old and presents with a fever and cough for 2 days. He is drinking sips of water but is off his food. He has a temperature of 39.5°C, a respiratory rate of 40 breaths/min and his oxygen saturation is  | key B: Oral antibiotic | 5 opts
- dice 0.85, key text same true, key letter moved true, fuller book, other lacks: Highly active antiretroviral therapy; Intravenous aciclovir; Intravenous antibiotics; Intravenous bolus of 20 ml/kg of normal saline; Intravenous quinine; Nasogastric rehydration therapy; Oral ACT (artemisinin-based combination therapy); Oxygen; Topical antibiotic; Topical emollient (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b15-11-2` vs `pedep2-res-64` (peds.ep2)
- book: For each of the following patients with an infectious disease, select the NEXT step in management from the list (A–O) below. Each option may be used once, more than once, or not at all. Imran is 2 years old and presents  | key A: Antipyretic/analgesia | 15 opts
- other: A 2-year-old presents with fever and a cough for 2 days. She has a fever of 38°C, a respiratory rate of 25 breaths/min, and oxygen saturation of 98%. She is having coryzal symptoms and an inflamed pharynx. Select the nex | key A: Antipyretic/analgesia | 5 opts
- dice 0.69, key text same true, key letter moved false, fuller book, other lacks: Combined anti-tuberculosis medication; Highly active antiretroviral therapy; Intravenous bolus of 20 ml/kg of normal saline; Intravenous immunoglobulin; Intravenous quinine; Nasogastric rehydration therapy; Oral rehydration solution; Oral ACT (artemisinin-based combination therapy); Topical antibiotic; Topical emollient (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b15-11-2` vs `pedhd-inf-14` (peds)
- book: For each of the following patients with an infectious disease, select the NEXT step in management from the list (A–O) below. Each option may be used once, more than once, or not at all. Imran is 2 years old and presents  | key A: Antipyretic/analgesia | 15 opts
- other: Imran is 2 years old and presents with fever and a cough for 2 days. He has a fever of 38°C, a respiratory rate of 25 breaths/min and oxygen saturation of 98%. He is coryzal and has an inflamed pharynx. Which of the foll | key C: Antipyretic/analgesia | 5 opts
- dice 0.75, key text same true, key letter moved true, fuller book, other lacks: Combined anti-tuberculosis medication; Highly active antiretroviral therapy; Intravenous aciclovir; Intravenous bolus of 20 ml/kg of normal saline; Intravenous immunoglobulin; Intravenous quinine; Oral rehydration solution; Oral ACT (artemisinin-based combination therapy); Topical antibiotic; Topical emollient (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b15-11-3` vs `pedep-emg-59` (peds.ep)
- book: For each of the following patients with an infectious disease, select the NEXT step in management from the list (A–O) below. Each option may be used once, more than once, or not at all. Mustafa, an 18-month-old boy, pres | key undefined: Oral rehydration solution | 15 opts
- other: An 18-month-old boy presents with 3 days of vomiting and diarrhea. The vomiting has now settled, but he continues to have loose stools (he had about eight loose stools in the last 24 hours). His mucous membranes are dry, | key E: Oral rehydration solution | 5 opts
- dice 0.85, key text same true, key letter moved true, fuller book, other lacks: Combined anti-tuberculosis medication; Highly active antiretroviral therapy; Intravenous aciclovir; Intravenous antibiotics; Intravenous immunoglobulin; Intravenous quinine; Oral ACT (artemisinin-based combination therapy); Oxygen; Topical antibiotic; Topical emollient (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b15-11-3` vs `pedhd-inf-15` (peds)
- book: For each of the following patients with an infectious disease, select the NEXT step in management from the list (A–O) below. Each option may be used once, more than once, or not at all. Mustafa, an 18-month-old boy, pres | key undefined: Oral rehydration solution | 15 opts
- other: Mustafa, an 18-month-old boy, presents with 3 days of vomiting and diarrhoea. The vomiting has now settled but he continues to have loose stools — he had about eight loose stools in the last 24 hours. His mucous membrane | key A: Oral rehydration solution | 5 opts
- dice 0.84, key text same true, key letter moved true, fuller book, other lacks: Antipyretic/analgesia; Combined anti-tuberculosis medication; Highly active antiretroviral therapy; Intravenous aciclovir; Intravenous immunoglobulin; Intravenous quinine; Oral ACT (artemisinin-based combination therapy); Oxygen; Topical antibiotic; Topical emollient (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b15-11-4` vs `pedhd-inf-16` (peds)
- book: For each of the following patients with an infectious disease, select the NEXT step in management from the list (A–O) below. Each option may be used once, more than once, or not at all. Josie is 3 years old. She has had  | key E: Intravenous antibiotics | 15 opts
- other: Josie is 3 years old. She has had a cough and fever for 6 days. On examination her oxygen saturation is 92% in air. Her temperature is 39°C and she has a respiratory rate of 50 breaths/minute. She has marked indrawing be | key A: Intravenous antibiotics | 5 opts
- dice 0.85, key text same true, key letter moved true, fuller book, other lacks: Combined anti-tuberculosis medication; Intravenous aciclovir; Intravenous bolus of 20 ml/kg of normal saline; Intravenous quinine; Nasogastric rehydration therapy; Oral rehydration solution; Oral ACT (artemisinin-based combination therapy); Oxygen; Topical antibiotic; Topical emollient (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b15-11-5` vs `pedep-mf1-25` (peds.ep)
- book: For each of the following patients with an infectious disease, select the NEXT step in management from the list (A–O) below. Each option may be used once, more than once, or not at all. Michael is a 2-year-old boy whose  | key G: Intravenous immunoglobulin | 15 opts
- other: A 2-year-old boy has been unwell for 6 days with a fever, sore eyes, and throat. He is noted to have red eyes, an injected throat, and cervical lymphadenopathy. He also has a generalized maculopapular rash, and the skin  | key D: Intravenous immunoglobulin | 5 opts
- dice 0.73, key text same true, key letter moved true, fuller book, other lacks: Combined anti-tuberculosis medication; Intravenous aciclovir; Intravenous bolus of 20 ml/kg of normal saline; Intravenous quinine; Nasogastric rehydration therapy; Oral rehydration solution; Oral ACT (artemisinin-based combination therapy); Oxygen; Topical antibiotic; Topical emollient (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b15-2` vs `pedep-inf-54` (peds.ep)
- book: What investigation is most likely to give a definitive diagnosis in Joseph’s case? Select one answer only. | key C: Polymerase chain reaction (PCR) | 5 opts
- other: What investigation is most likely to give a definitive diagnosis in Joseph's case? Select one answer only. | key C: Polymerase chain reaction (PCR) | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b15-2` vs `pedhd-inf-2` (peds)
- book: What investigation is most likely to give a definitive diagnosis in Joseph’s case? Select one answer only. | key C: Polymerase chain reaction (PCR) | 5 opts
- other: Joseph is 3 years old and was admitted 24 hours after becoming irritable, vomiting and febrile, with a purpuric rash over his upper limbs and abdomen. He had been started on oral amoxicillin by his general practitioner e | key C: Polymerase chain reaction (PCR) | 5 opts
- dice 0.24, key text same true, key letter moved false, fuller other
- why: Read: book stem is a back-reference; live prints the full case; keyed PCR in both

### SAME `pedsa-b15-3` vs `pedep-inf-55` (peds.ep)
- book: Henry is 4 years old and has a 3 day history of fever. He presents to the Accident and Emergency department with a headache. A lumbar puncture is performed. You receive the following result from the laboratory: • Cerebro | key A: Bacterial meningitis | 5 opts
- other: Henry is 4 years old and has a 3-day history of fever. He presents to the Emergency Department with a headache. A lumbar puncture is performed with the following CSF result: 250 RBCs/mm³, 1200 neutrophils/mm³, 250 lympho | key A: Bacterial meningitis | 5 opts
- dice 0.87, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b15-3` vs `pedhd-inf-3` (peds)
- book: Henry is 4 years old and has a 3 day history of fever. He presents to the Accident and Emergency department with a headache. A lumbar puncture is performed. You receive the following result from the laboratory: • Cerebro | key A: Bacterial meningitis | 5 opts
- other: Henry is 4 years old and has a 3 day history of fever. He presents to the Accident and Emergency department with a headache. A lumbar puncture is performed. You receive the following result from the laboratory:

| | |
|- | key A: Bacterial meningitis | 5 opts
- dice 0.96, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b15-4` vs `pedep-inf-56` (peds.ep)
- book: Graham is 5 years old and has had an intermittent fever for 4 weeks. He presents to the Emergency Department with a headache and neck stiffness. A CT scan is performed, which is normal. A lumbar puncture is performed. Yo | key D: Tuberculosis meningitis | 5 opts
- other: Graham, 5 years old, presents with a 4-week history of intermittent fever, headache, and neck stiffness. CT scan is normal. CSF results: 95 lymphocytes/mm³, 10 neutrophils/mm³, 0 RBCs/mm³, Protein: 2.2 g/L, CSF glucose:  | key D: Tuberculosis meningitis | 5 opts
- dice 0.74, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b15-4` vs `pedep-mf1-36` (peds.ep)
- book: Graham is 5 years old and has had an intermittent fever for 4 weeks. He presents to the Emergency Department with a headache and neck stiffness. A CT scan is performed, which is normal. A lumbar puncture is performed. Yo | key D: Tuberculosis meningitis | 5 opts
- other: A 5-year-old boy has had an intermittent fever for 4 weeks. He presents to the Emergency Department with a headache and neck stiffness. A CT scan is performed, which is normal. A lumbar puncture is performed, and you rec | key D: Tuberculosis meningitis | 5 opts
- dice 0.74, key text same true, key letter moved false, fuller other, other lacks: Ascending polyneuritis (Guillain–Barré syndrome) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b15-4` vs `pedhd-inf-4` (peds)
- book: Graham is 5 years old and has had an intermittent fever for 4 weeks. He presents to the Emergency Department with a headache and neck stiffness. A CT scan is performed, which is normal. A lumbar puncture is performed. Yo | key D: Tuberculosis meningitis | 5 opts
- other: Graham is 5 years old and has had an intermittent fever for 4 weeks. He presents to the Emergency Department with a headache and neck stiffness. A CT scan is performed, which is normal. A lumbar puncture is performed. Yo | key D: Tuberculosis meningitis | 5 opts
- dice 0.95, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b15-5` vs `pedep-inf-57` (peds.ep)
- book: John, a 2-year-old boy, is brought to the general practitioner by his mother. He has the skin rash shown in Fig. 15.2 on both his feet. He also has a few lesions on both hands. They are tender to touch. He is well in him | key A: Coxsackie A | 5 opts
- other: John, a 2-year-old boy, has a rash on both feet and tender lesions on his hands. He is otherwise well. What is the most likely cause? | key A: Coxsackie A | 5 opts
- dice 0.58, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b15-5` vs `pedhd-inf-5` (peds)
- book: John, a 2-year-old boy, is brought to the general practitioner by his mother. He has the skin rash shown in Fig. 15.2 on both his feet. He also has a few lesions on both hands. They are tender to touch. He is well in him | key A: Coxsackie A | 5 opts
- other: John, a 2-year-old boy, is brought to the general practitioner by his mother. He has the skin rash shown on both his feet. He also has a few lesions on both hands. They are tender to touch. He is well in himself. What is | key A: Coxsackie A | 5 opts
- dice 0.96, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b15-7` vs `pedep-mf1-37` (peds.ep)
- book: Prince, a 4-month-old black African infant, who has recently moved to the UK from Swaziland with his mother is seen in the Paediatric Assessment Unit. He is feeding poorly and is breathless. He has had loose stools for t | key B: Pneumocystis jiroveci (carinii) pneumonia | 5 opts
- other: A 4-month-old infant is seen in the Pediatric Assessment Unit. He is feeding poorly and is breathless. He has had loose stools for the last 4 weeks and has not put on any weight since then. On examination, he appears pal | key B: Severe combined immunodeficiency (SCID) | 4 opts
- dice 0.77, key text same false, key letter moved false, fuller book, other lacks: Influenza virus; Pneumocystis jiroveci (carinii) pneumonia; Respiratory syncytial virus; Rhinovirus (keyed option kept: false)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b15-8` vs `pedep-inf-58` (peds.ep)
- book: Imran is a 3-year-old boy who moved to the UK from Bangladesh 4 months ago. He has not gained any weight for the last couple of months. He has a cough. The general practitioner has requested a chest X-ray (Fig. 15.4). Wh | key E: Tuberculosis | 5 opts
- other: Imran, a 3-year-old boy who recently moved from Bangladesh, has not gained weight and presents with a cough. A chest X-ray is requested. What is the most likely diagnosis? | key E: Tuberculosis | 5 opts
- dice 0.67, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b15-8` vs `pedhd-inf-6` (peds)
- book: Imran is a 3-year-old boy who moved to the UK from Bangladesh 4 months ago. He has not gained any weight for the last couple of months. He has a cough. The general practitioner has requested a chest X-ray (Fig. 15.4). Wh | key E: Tuberculosis | 5 opts
- other: Imran is a 3-year-old boy who moved to the UK from Bangladesh 4 months ago. He has not gained any weight for the last couple of months. He has a cough. The general practitioner has requested a chest X-ray, shown. What is | key E: Tuberculosis | 5 opts
- dice 0.94, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b15-9` vs `pedhd-inf-7` (peds)
- book: You are in the baby clinic at a local general practice. One of the mothers is questioning whether or not she should get her baby immunized as she wonders if it is really necessary. He does not go to nursery and has no si | key C: Immunization is important to provide immunity for her child from serious infections and to remove some of these infections from the community | 5 opts
- other: You are in the baby clinic at a local general practice. One of the mothers is questioning whether or not she should get her baby immunized as she wonders if it is really necessary. He does not go to nursery and has no si | key C: Immunization is important to provide immunity for her child from serious infections and to remove some of these infections from the community | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

## Book chapter 16 Allergy

### SAME `pedsa-b16-1` vs `pedep-alg-1` (peds.ep)
- book: Jonathan, aged 6 years, is brought to the Emergency Department after becoming unwell at a family party. He is unable to say more than a single word and he indicates that he is finding it hard to breathe. He is very anxio | key C: Anaphylaxis | 5 opts
- other: Jonathan, aged 6 years, is brought to the Emergency Department after becoming unwell at a family party. He is only able to say one word at a time and indicates that he is struggling to breathe. He appears very anxious an | key C: Anaphylaxis | 5 opts
- dice 0.77, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b16-1` vs `pedhd-alg-1` (peds)
- book: Jonathan, aged 6 years, is brought to the Emergency Department after becoming unwell at a family party. He is unable to say more than a single word and he indicates that he is finding it hard to breathe. He is very anxio | key C: Anaphylaxis | 5 opts
- other: Jonathan, aged 6 years, is brought to the Emergency Department after becoming unwell at a family party. He is unable to say more than a single word and he indicates that he is finding it hard to breathe. He is very anxio | key C: Anaphylaxis | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b16-2` vs `pedep-alg-2` (peds.ep)
- book: What will be your first step in Johnathan’s management? Select one answer only. | key B: Assess his airway and give him high-flow oxygen | 5 opts
- other: What is the first step in Jonathan's management? | key B: Assess his airway and give high-flow oxygen | 5 opts
- dice 0.67, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b16-2` vs `pedhd-alg-2` (peds)
- book: What will be your first step in Johnathan’s management? Select one answer only. | key B: Assess his airway and give him high-flow oxygen | 5 opts
- other: What will be your first step in Johnathan’s management? | key B: Assess his airway and give him high-flow oxygen | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b16-3` vs `pedep-alg-3` (peds.ep)
- book: Cordelia, a 5-month-old infant, was exclusively breastfed up until yesterday when her mother started her on formula as she is planning to go back to work. She noticed that she developed a rash very soon after the formula | key D: Urticarial | 5 opts
- other: Cordelia, a 5-month-old infant, was exclusively breastfed until yesterday when her mother introduced formula feeding. Soon after the feed, the baby developed a rash covering her body. She has no past medical history and  | key D: Urticarial | 5 opts
- dice 0.63, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b16-3` vs `pedhd-alg-3` (peds)
- book: Cordelia, a 5-month-old infant, was exclusively breastfed up until yesterday when her mother started her on formula as she is planning to go back to work. She noticed that she developed a rash very soon after the formula | key D: Urticarial | 5 opts
- other: Cordelia, a 5-month-old infant, was exclusively breastfed up until yesterday when her mother started her on formula as she is planning to go back to work. She noticed that she developed a rash very soon after the formula | key D: Urticarial | 5 opts
- dice 0.96, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b16-4` vs `pedep-alg-4` (peds.ep)
- book: Eddy is an 8-month-old infant who presents to his general practitioner following a bout of diarrhoea and vomiting, associated with fever for 3 days. This was managed at home with oral rehydration solution. The vomiting h | key D: Non-allergic food hypersensitivity | 5 opts
- other: Eddy, an 8-month-old infant, had diarrhea and vomiting with fever for three days, managed at home with oral rehydration. Vomiting resolved, but diarrhea has persisted for three weeks. Stool microscopy and culture are neg | key D: Non-allergic food hypersensitivity | 5 opts
- dice 0.67, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b16-4` vs `pedhd-alg-4` (peds)
- book: Eddy is an 8-month-old infant who presents to his general practitioner following a bout of diarrhoea and vomiting, associated with fever for 3 days. This was managed at home with oral rehydration solution. The vomiting h | key D: Non-allergic food hypersensitivity | 5 opts
- other: Eddy is an 8-month-old infant who presents to his general practitioner following a bout of diarrhoea and vomiting, associated with fever for 3 days. This was managed at home with oral rehydration solution. The vomiting h | key D: Non-allergic food hypersensitivity | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

## Book chapter 17 Respiratory disorders

### SAME `pedsa-b17-1` vs `pedep2-res-1` (peds.ep2)
- book: Liam, a 7-year-old boy, complains to his family doctor of a sore throat and has a mild fever. The appearance of his throat is as shown in Fig. 17.1. What is the most likely diagnosis? Select one answer only. | key C: Group A Streptococcal tonsillitis | 5 opts
- other: Liam, a 7-year-old boy, complains to his family doctor of a sore throat and has a mild fever. The appearance of his throat is as shown in the opposite figure. What is the most likely diagnosis? | key C: Group A Streptococcal tonsillitis | 5 opts
- dice 0.88, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b17-1` vs `pedhd-resp-1` (peds)
- book: Liam, a 7-year-old boy, complains to his family doctor of a sore throat and has a mild fever. The appearance of his throat is as shown in Fig. 17.1. What is the most likely diagnosis? Select one answer only. | key C: Group A Streptococcal tonsillitis | 5 opts
- other: Liam, a 7-year-old boy, complains to his family doctor of a sore throat and has a mild fever. The appearance of his throat is as shown in the opposite figure. What is the most likely diagnosis? | key C: Group A Streptococcal tonsillitis | 5 opts
- dice 0.88, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b17-10` vs `pedep2-res-9` (peds.ep2)
- book: Fiona, a 10-month-old infant, has been unsettled and febrile with a runny nose for 2 days. Her family doctor examines her ear canal and the tympanic membrane appears as in Fig. 17.3 below. What is the most likely diagnos | key E: Otitis media with effusion | 5 opts
- other: Fiona, a 10-month-old infant, has been unsettled and febrile with a runny nose for 2 days. Her family doctor examines her ear canal, and the tympanic membrane appears as in the opposite figure. What is the most likely di | key E: Otitis media with effusion | 5 opts
- dice 0.89, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b17-10` vs `pedhd-resp-9` (peds)
- book: Fiona, a 10-month-old infant, has been unsettled and febrile with a runny nose for 2 days. Her family doctor examines her ear canal and the tympanic membrane appears as in Fig. 17.3 below. What is the most likely diagnos | key E: Otitis media with effusion | 5 opts
- other: Fiona, a 10-month-old infant, has been unsettled and febrile with a runny nose for 2 days. Her family doctor examines her ear canal and the tympanic membrane appears as in the opposite figure. What is the most likely dia | key E: Otitis media with effusion | 5 opts
- dice 0.89, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b17-11` vs `pedhd-resp-10` (peds)
- book: Jake is a 10-month-old boy from the UK who presents to the Emergency Department with a 2-day history of fever and runny nose. He has been otherwise well. During the night he gradually developed a barking cough in associa | key E: Laryngotracheobronchitis (croup) | 5 opts
- other: Jake is a 10-month-old boy from the UK who presents to the Emergency Department with a 2-day history of fever and runny nose. He has been otherwise well. During the night he gradually developed a barking cough in associa | key E: Laryngotracheobronchitis (croup) | 5 opts
- dice 0.95, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b17-12-2` vs `pedep2-res-11` (peds.ep2)
- book: Below is a list of conditions affecting the respiratory tract (A–O). For each of the clinical scenarios described pick the most likely diagnosis from the list. Each answer may be used once, more than once, or not at all. | key G: Inhaled foreign body | 15 opts
- other: A 10-year-old African boy woke up four nights ago with a sudden onset of coughing and choking. Since then, he has been noted to be intermittently wheezy. He has wheeze on auscultation of his right chest only. His chest X | key B: Inhaled foreign body | 5 opts
- dice 0.71, key text same true, key letter moved true, fuller book, other lacks: Acute exacerbation of asthma; Bronchiolitis obliterans; Bronchiolitis; Cystic fibrosis; Obstructive sleep apnoea; Pertussis; Pneumothorax; Retropharyngeal abscess; Tracheitis; Tuberculosis (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b17-12-2` vs `pedhd-resp-12` (peds)
- book: Below is a list of conditions affecting the respiratory tract (A–O). For each of the clinical scenarios described pick the most likely diagnosis from the list. Each answer may be used once, more than once, or not at all. | key G: Inhaled foreign body | 15 opts
- other: A 10-year-old African boy woke up four nights ago with a sudden onset of coughing and choking. Since then he has been noted to be intermittently wheezy. He has wheeze on auscultation of his right chest only. His chest X- | key B: Inhaled foreign body | 5 opts
- dice 0.7, key text same true, key letter moved true, fuller book, other lacks: Acute exacerbation of asthma; Bronchiolitis obliterans; Bronchiolitis; Cystic fibrosis; Obstructive sleep apnoea; Pertussis; Pneumothorax; Retropharyngeal abscess; Tracheitis; Tuberculosis (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b17-12-3` vs `pedep2-res-12` (peds.ep2)
- book: Below is a list of conditions affecting the respiratory tract (A–O). For each of the clinical scenarios described pick the most likely diagnosis from the list. Each answer may be used once, more than once, or not at all. | key undefined: Pneumonia | 15 opts
- other: A 3-year-old Asian girl has been coughing for 10 days, with fever and lethargy for 2 days. On examination, she has a respiratory rate of 45 breaths/min and crepitations with decreased air entry at her left lung base. Her | key A: Pneumonia | 5 opts
- dice 0.72, key text same true, key letter moved true, fuller book, other lacks: Acute exacerbation of asthma; Bronchiolitis obliterans; Bronchiolitis; Cystic fibrosis; Obstructive sleep apnoea; Pertussis; Pneumothorax; Retropharyngeal abscess; Tracheitis; Tuberculosis (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b17-12-3` vs `pedhd-resp-13` (peds)
- book: Below is a list of conditions affecting the respiratory tract (A–O). For each of the clinical scenarios described pick the most likely diagnosis from the list. Each answer may be used once, more than once, or not at all. | key undefined: Pneumonia | 15 opts
- other: A 3-year-old Asian girl has been coughing for 10 days, with fever and lethargy for 2 days. On examination, she has a respiratory rate of 45 breaths/min and crepitations with decreased air entry on her left lung base. Her | key A: Pneumonia | 5 opts
- dice 0.71, key text same true, key letter moved true, fuller book, other lacks: Acute exacerbation of asthma; Bronchiolitis obliterans; Bronchiolitis; Cystic fibrosis; Obstructive sleep apnoea; Pertussis; Pneumothorax; Retropharyngeal abscess; Tracheitis; Tuberculosis (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b17-13-1` vs `pedep2-res-10` (peds.ep2)
- book: Below is a list of diagnoses (A–N) that result in tachypnoea in children. For each of the following patients with respiratory symptoms, select the most likely diagnosis. Each option may be used once, more than once, or n | key I: Laryngotracheobronchitis (croup) | 14 opts
- other: Jamel 10-month-old boy is brought at 1 am to the emergency because he has woken up with noisy breathing. He had coryzal symptoms for 2 days and now has a barking cough. On examination he has a fever of 37.8. He is alert  | key D: CROUP | 5 opts
- dice 0.77, key text same false, key letter moved true, fuller book, other lacks: Acute asthma; Bronchitis; Bronchopulmonary dysplasia (BPD); Chronic asthma; Cystic fibrosis; Heart failure; Inhaled foreign body; Laryngotracheobronchitis (croup); Obstructive sleep apnoea; Pertussis (whooping cough); Retropharyngeal abscess; Tuberculosis (keyed option kept: false)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b17-13-1` vs `pedep2-res-13` (peds.ep2)
- book: Below is a list of diagnoses (A–N) that result in tachypnoea in children. For each of the following patients with respiratory symptoms, select the most likely diagnosis. Each option may be used once, more than once, or n | key I: Laryngotracheobronchitis (croup) | 14 opts
- other: Jamal, a 10-month-old Asian boy, is brought at 1 a.m. to the Emergency Department because he has woken up with noisy breathing. He has had coryzal symptoms for 2 days and now has a barking cough. On examination, he has a | key E: Laryngotracheobronchitis (croup) | 5 opts
- dice 0.78, key text same true, key letter moved true, fuller book, other lacks: Acute asthma; Bronchitis; Bronchopulmonary dysplasia (BPD); Chronic asthma; Cystic fibrosis; Heart failure; Inhaled foreign body; Obstructive sleep apnoea; Retropharyngeal abscess; Tuberculosis (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b17-13-1` vs `pedhd-resp-14` (peds)
- book: Below is a list of diagnoses (A–N) that result in tachypnoea in children. For each of the following patients with respiratory symptoms, select the most likely diagnosis. Each option may be used once, more than once, or n | key I: Laryngotracheobronchitis (croup) | 14 opts
- other: Jamal, a 10-month-old Asian boy, is brought at 1 am to the Emergency Department because he has woken up with noisy breathing. He has had coryzal symptoms for 2 days and now has a barking cough. On examination he has a fe | key E: Laryngotracheobronchitis (croup) | 5 opts
- dice 0.82, key text same true, key letter moved true, fuller book, other lacks: Acute asthma; Bronchitis; Bronchopulmonary dysplasia (BPD); Chronic asthma; Cystic fibrosis; Heart failure; Inhaled foreign body; Obstructive sleep apnoea; Retropharyngeal abscess; Tuberculosis (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b17-13-2` vs `pedep2-res-14` (peds.ep2)
- book: Below is a list of diagnoses (A–N) that result in tachypnoea in children. For each of the following patients with respiratory symptoms, select the most likely diagnosis. Each option may be used once, more than once, or n | key C: Bronchiolitis | 14 opts
- other: Jack, a 4-month-old infant, has rapid, labored breathing that has been getting worse over the last 2 days. His mother is concerned as she is struggling to get him to feed. He was born at 27 weeks' gestation, birth weight | key A: Bronchiolitis | 5 opts
- dice 0.85, key text same true, key letter moved true, fuller book, other lacks: Acute asthma; Bronchitis; Bronchopulmonary dysplasia (BPD); Chronic asthma; Cystic fibrosis; Heart failure; Inhaled foreign body; Obstructive sleep apnoea; Retropharyngeal abscess; Tuberculosis (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b17-13-2` vs `pedep2-res-56` (peds.ep2)
- book: Below is a list of diagnoses (A–N) that result in tachypnoea in children. For each of the following patients with respiratory symptoms, select the most likely diagnosis. Each option may be used once, more than once, or n | key C: Bronchiolitis | 14 opts
- other: A 4-month-old infant has rapid, labored breathing that has been getting worse over the last 2 days. His mother is concerned as she is struggling to get him to feed. He was born at 27 weeks' gestation, weighing 979 g, and | key B: Bronchiolitis | 5 opts
- dice 0.83, key text same true, key letter moved true, fuller book, other lacks: Bronchitis; Bronchopulmonary dysplasia (BPD); Chronic asthma; Cystic fibrosis; Inhaled foreign body; Obstructive sleep apnoea; Pertussis (whooping cough); Retropharyngeal abscess; Tuberculosis (keyed option kept: true)
- why: Read: same bronchiolitis case (RR 60, T 37.4); res-56 and res-14 are both live twins of this one book item, key Bronchiolitis in each

### SAME `pedsa-b17-13-2` vs `pedhd-resp-15` (peds)
- book: Below is a list of diagnoses (A–N) that result in tachypnoea in children. For each of the following patients with respiratory symptoms, select the most likely diagnosis. Each option may be used once, more than once, or n | key C: Bronchiolitis | 14 opts
- other: Jack, a 4-month-old infant, has rapid, laboured breathing that has been getting worse over the last 2 days. His mother is concerned as she is struggling to get him to feed. He was born at 27 weeks' gestation, birth weigh | key A: Bronchiolitis | 5 opts
- dice 0.86, key text same true, key letter moved true, fuller book, other lacks: Acute asthma; Bronchitis; Bronchopulmonary dysplasia (BPD); Chronic asthma; Cystic fibrosis; Heart failure; Inhaled foreign body; Obstructive sleep apnoea; Retropharyngeal abscess; Tuberculosis (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b17-13-4` vs `pedep2-res-15` (peds.ep2)
- book: Below is a list of diagnoses (A–N) that result in tachypnoea in children. For each of the following patients with respiratory symptoms, select the most likely diagnosis. Each option may be used once, more than once, or n | key undefined: Pneumonia | 14 opts
- other: Fred is a normally well 4-year-old boy. He has had a runny nose and fever for 3 days. He has now developed a cough and difficulty breathing. On examination, his temperature is 39°C. He watches you but sits quietly on his | key B: Pneumonia | 5 opts
- dice 0.87, key text same true, key letter moved true, fuller book, other lacks: Acute asthma; Bronchitis; Bronchopulmonary dysplasia (BPD); Chronic asthma; Cystic fibrosis; Heart failure; Inhaled foreign body; Obstructive sleep apnoea; Retropharyngeal abscess; Tuberculosis (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b17-13-4` vs `pedep2-res-63` (peds.ep2)
- book: Below is a list of diagnoses (A–N) that result in tachypnoea in children. For each of the following patients with respiratory symptoms, select the most likely diagnosis. Each option may be used once, more than once, or n | key undefined: Pneumonia | 14 opts
- other: Aly is a previously healthy person who has now developed a cough and difficulty breathing. On examination, his temperature is 39°C. He has a respiratory rate of 55 breaths/min. His breaths are rapid but shallow with mild | key E: Pneumonia | 5 opts
- dice 0.64, key text same true, key letter moved true, fuller book, other lacks: Bronchitis; Bronchopulmonary dysplasia (BPD); Cystic fibrosis; Heart failure; Inhaled foreign body; Obstructive sleep apnoea; Pertussis (whooping cough); Retropharyngeal abscess; Tuberculosis (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b17-13-4` vs `pedhd-resp-16` (peds)
- book: Below is a list of diagnoses (A–N) that result in tachypnoea in children. For each of the following patients with respiratory symptoms, select the most likely diagnosis. Each option may be used once, more than once, or n | key undefined: Pneumonia | 14 opts
- other: Fred is a normally well 4-year-old boy. He has had a runny nose and fever for 3 days. He has now developed a cough and difficulty breathing. On examination his temperature is 39°C. He watches you but sits quietly on his  | key B: Pneumonia | 5 opts
- dice 0.86, key text same true, key letter moved true, fuller book, other lacks: Acute asthma; Bronchitis; Bronchopulmonary dysplasia (BPD); Chronic asthma; Cystic fibrosis; Heart failure; Inhaled foreign body; Obstructive sleep apnoea; Retropharyngeal abscess; Tuberculosis (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b17-13-5` vs `pedep2-res-16` (peds.ep2)
- book: Below is a list of diagnoses (A–N) that result in tachypnoea in children. For each of the following patients with respiratory symptoms, select the most likely diagnosis. Each option may be used once, more than once, or n | key undefined: Pertussis (whooping cough) | 14 opts
- other: Hannah is a 3-month-old infant who has had a cough for over 2 weeks. She has now developed prolonged bouts of coughing. She has started to vomit at the end of the bout of coughing. Her temperature is 38°C. Her respirator | key C: Pertussis (whooping cough) | 4 opts
- dice 0.81, key text same true, key letter moved true, fuller book, other lacks: Acute asthma; Bronchitis; Bronchopulmonary dysplasia (BPD); Chronic asthma; Cystic fibrosis; Heart failure; Inhaled foreign body; Laryngotracheobronchitis (croup); Obstructive sleep apnoea; Retropharyngeal abscess; Tuberculosis (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b17-13-5` vs `pedhd-resp-17` (peds)
- book: Below is a list of diagnoses (A–N) that result in tachypnoea in children. For each of the following patients with respiratory symptoms, select the most likely diagnosis. Each option may be used once, more than once, or n | key undefined: Pertussis (whooping cough) | 14 opts
- other: Hannah is a 3-month-old infant who has had a cough for over 2 weeks. She has now developed prolonged bouts of coughing. She has started to vomit at the end of the bout of coughing. Her temperature is 38°C. Her respirator | key C: Pertussis (whooping cough) | 5 opts
- dice 0.8, key text same true, key letter moved true, fuller book, other lacks: Acute asthma; Bronchitis; Bronchopulmonary dysplasia (BPD); Chronic asthma; Cystic fibrosis; Heart failure; Inhaled foreign body; Obstructive sleep apnoea; Retropharyngeal abscess; Tuberculosis (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b17-14-1` vs `pedep2-res-17` (peds.ep2)
- book: Below is a list of management options (A–N). For each of the following patients with respiratory disease, select the next step in management. Each option may be used once, more than once, or not at all. Sara, an 8-month- | key undefined: Oral antipyretic/analgesic | 14 opts
- other: Sara, an 8-month-old Asian girl, presents with a 3-day history of being unsettled. She has had coryzal symptoms and a mild fever. On examination of the right ear canal, you note a bulging red tympanic membrane. Her respi | key C: Oral antipyretic/analgesic | 5 opts
- dice 0.7, key text same true, key letter moved true, fuller book, other lacks: Inhaled salbutamol via metered dose inhaler (MDI); Inhaled salbutamol via MDI and spacer; Inhaled steroid via MDI; Inhaled steroid via MDI and spacer; Intravenous antibiotics; Nebulized adrenaline; Nebulized salbutamol; Nebulized steroid (budesonide); Oxygen therapy; Oral antibiotics (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b17-14-1` vs `pedhd-resp-18` (peds)
- book: Below is a list of management options (A–N). For each of the following patients with respiratory disease, select the next step in management. Each option may be used once, more than once, or not at all. Sara, an 8-month- | key undefined: Oral antipyretic/analgesic | 14 opts
- other: Sara, an 8-month-old Asian girl, presents with a 3-day history of being unsettled. She has been coryzal and has had a mild fever. On examining the right ear canal you note a bulging red tympanic membrane. Her respiratory | key C: Oral antipyretic/analgesic | 5 opts
- dice 0.81, key text same true, key letter moved true, fuller book, other lacks: Inhaled salbutamol via metered dose inhaler (MDI); Inhaled salbutamol via MDI and spacer; Inhaled steroid via MDI; Inhaled steroid via MDI and spacer; Intravenous antibiotics; Nebulized adrenaline; Nebulized salbutamol; Nebulized steroid (budesonide); Oxygen therapy; Oral antibiotics (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b17-14-2` vs `pedep2-res-18` (peds.ep2)
- book: Below is a list of management options (A–N). For each of the following patients with respiratory disease, select the next step in management. Each option may be used once, more than once, or not at all. Chardonnay is a 6 | key D: Inhaled salbutamol via MDI and spacer | 14 opts
- other: Chardonnay is a 6-year-old Caucasian girl who has asthma. Her mother smokes cigarettes, and there is poor compliance with her preventative steroid therapy. She presents with a 2-day history of cough, runny nose, mild fev | key B: Inhaled salbutamol via metered-dose inhaler and spacer | 4 opts
- dice 0.83, key text same false, key letter moved true, fuller book, other lacks: Endotracheal intubation and ventilation; Inhaled salbutamol via metered dose inhaler (MDI); Inhaled salbutamol via MDI and spacer; Inhaled steroid via MDI; Inhaled steroid via MDI and spacer; Intravenous antibiotics; Nebulized adrenaline; Nebulized salbutamol; Nebulized steroid (budesonide); Oxygen therapy; Oral antibiotics (keyed option kept: false)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b17-14-2` vs `pedhd-resp-19` (peds)
- book: Below is a list of management options (A–N). For each of the following patients with respiratory disease, select the next step in management. Each option may be used once, more than once, or not at all. Chardonnay is a 6 | key D: Inhaled salbutamol via MDI and spacer | 14 opts
- other: Chardonnay is a 6-year-old Caucasian girl who has asthma. Her mother smokes cigarettes and there is poor compliance with her preventative steroid therapy. She presents with a 2-day history of cough, runny nose, mild feve | key B: Inhaled salbutamol via metered dose inhaler and spacer | 5 opts
- dice 0.85, key text same false, key letter moved true, fuller book, other lacks: Inhaled salbutamol via metered dose inhaler (MDI); Inhaled salbutamol via MDI and spacer; Inhaled steroid via MDI; Inhaled steroid via MDI and spacer; Intravenous antibiotics; Nebulized adrenaline; Nebulized salbutamol; Nebulized steroid (budesonide); Oxygen therapy; Oral antibiotics (keyed option kept: false)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b17-14-3` vs `pedep2-res-19` (peds.ep2)
- book: Below is a list of management options (A–N). For each of the following patients with respiratory disease, select the next step in management. Each option may be used once, more than once, or not at all. Jake, a 7-month-o | key undefined: Oral corticosteroids | 14 opts
- other: Jake, a 7-month-old infant, presents with a 2-day history of fever and runny nose. During the night, he developed a harsh cough and noisy breathing on inspiration. On examination, he has moderate inspiratory stridor and  | key A: Oral corticosteroid | 5 opts
- dice 0.75, key text same true, key letter moved true, fuller book, other lacks: Inhaled salbutamol via metered dose inhaler (MDI); Inhaled salbutamol via MDI and spacer; Inhaled steroid via MDI; Inhaled steroid via MDI and spacer; Intravenous antibiotics; Nebulized adrenaline; Nebulized salbutamol; Nebulized steroid (budesonide); Oxygen therapy; Oral antibiotics (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b17-14-3` vs `pedhd-resp-20` (peds)
- book: Below is a list of management options (A–N). For each of the following patients with respiratory disease, select the next step in management. Each option may be used once, more than once, or not at all. Jake, a 7-month-o | key undefined: Oral corticosteroids | 14 opts
- other: Jake, a 7-month-old infant, presents with a 2-day history of fever and runny nose. During the night he has developed a harsh cough in association with noisy inspiration. On examination, you note he has moderate stridor m | key A: Oral corticosteroid | 5 opts
- dice 0.85, key text same true, key letter moved true, fuller book, other lacks: Inhaled salbutamol via metered dose inhaler (MDI); Inhaled salbutamol via MDI and spacer; Inhaled steroid via MDI; Inhaled steroid via MDI and spacer; Intravenous antibiotics; Nebulized adrenaline; Nebulized salbutamol; Nebulized steroid (budesonide); Oxygen therapy; Oral antibiotics (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b17-2` vs `pedep2-res-2` (peds.ep2)
- book: Mohammed, a 5-year-old refugee from Somalia, presents acutely unwell to the Emergency Department. He has a 1-day history of sore throat and a high temperature (40.1° C). Over the last 8 hours he has been having increasin | key C: Epiglottitis | 5 opts
- other: Mohammed, a 5-year-old refugee from Somalia, presents acutely unwell to the Emergency Department. He has a 1-day history of sore throat and a high temperature (40.1°C). Over the last 8 hours, he has been having increasin | key C: Epiglottitis | 5 opts
- dice 0.84, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b17-2` vs `pedhd-resp-2` (peds)
- book: Mohammed, a 5-year-old refugee from Somalia, presents acutely unwell to the Emergency Department. He has a 1-day history of sore throat and a high temperature (40.1° C). Over the last 8 hours he has been having increasin | key C: Epiglottitis | 5 opts
- other: Mohammed, a 5-year-old refugee from Somalia, presents acutely unwell to the Emergency Department. He has a 1-day history of sore throat and a high temperature (40.1°C). Over the last 8 hours he has been having increasing | key C: Epiglottitis | 5 opts
- dice 0.84, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b17-3` vs `pedep2-res-3` (peds.ep2)
- book: Amber, a 9-month-old girl, presents with a 4-day history of coughing spasms which are followed by vomiting. Whooping cough (Bordetella pertussis infection) is suspected. Which of the following tests would be most useful  | key E: Pernasal swab | 5 opts
- other: Amber, a 9-month-old girl, presents with a 4-day history of coughing spasms which are followed by vomiting. A whooping cough (Bordetella pertussis infection) is suspected. Which of the following tests would be most usefu | key E: Pernasal swab | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b17-3` vs `pedhd-resp-3` (peds)
- book: Amber, a 9-month-old girl, presents with a 4-day history of coughing spasms which are followed by vomiting. Whooping cough (Bordetella pertussis infection) is suspected. Which of the following tests would be most useful  | key E: Pernasal swab | 5 opts
- other: Amber, a 9-month-old girl, presents with a 4-day history of coughing spasms which are followed by vomiting. Whooping cough (Bordetella pertussis infection) is suspected. Which of the following tests would be most useful  | key E: Pernasal swab | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b17-4` vs `pedep2-res-4` (peds.ep2)
- book: Tak, a 3-year-old Asian boy, presents to his family doctor. He has a ‘hacking’ cough that started several weeks ago and has failed to respond to two courses of antibiotics. He is otherwise well and has had no previous ch | key D: Request a chest X-ray | 5 opts
- other: Tak, a 3-year-old Asian boy, presents to his family doctor. He has a 'hacking' cough that started several weeks ago and has failed to respond to two courses of antibiotics. He is otherwise well and has had no previous ch | key D: Request a chest X-ray | 5 opts
- dice 0.98, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b17-4` vs `pedhd-resp-4` (peds)
- book: Tak, a 3-year-old Asian boy, presents to his family doctor. He has a ‘hacking’ cough that started several weeks ago and has failed to respond to two courses of antibiotics. He is otherwise well and has had no previous ch | key D: Request a chest X-ray | 5 opts
- other: Tak, a 3-year-old Asian boy, presents to his family doctor. He has a ‘hacking’ cough that started several weeks ago and has failed to respond to two courses of antibiotics. He is otherwise well and has had no previous ch | key D: Request a chest X-ray | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b17-5` vs `pedep2-res-5` (peds.ep2)
- book: Amir, a 4-year-old boy, presents to his family doctor with a history of eczema, rhinitis, chronic nocturnal cough and intermittent wheeze. Asthma is suspected and a bronchodilator is prescribed. How should his bronchodil | key C: Metered dose inhaler with large-volume spacer | 5 opts
- other: Amir, a 4-year-old boy, presents to his family doctor with a history of eczema, rhinitis, chronic nocturnal cough, and intermittent wheeze. Asthma is suspected, and a bronchodilator is prescribed. How should his bronchod | key C: Metered-dose inhaler with large-volume spacer | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b17-5` vs `pedhd-resp-5` (peds)
- book: Amir, a 4-year-old boy, presents to his family doctor with a history of eczema, rhinitis, chronic nocturnal cough and intermittent wheeze. Asthma is suspected and a bronchodilator is prescribed. How should his bronchodil | key C: Metered dose inhaler with large-volume spacer | 5 opts
- other: Amir, a 4-year-old boy, presents to his family doctor with a history of eczema, rhinitis, chronic nocturnal cough and intermittent wheeze. Asthma is suspected and a bronchodilator is prescribed. How should his bronchodil | key C: Metered dose inhaler with large-volumespacer | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b17-6` vs `pedep2-res-6` (peds.ep2)
- book: Sarah, a 10-year-old girl, has frequent attacks of asthma. She attends the Emergency Department with increasing difficulty in breathing over the last 12 hours. Initial observation shows that she is anxious, sitting uprig | key C: Sarah’s oxygen saturation should be measured | 5 opts
- other: Sarah, a 10-year-old girl, has frequent attacks of asthma. She attends the Emergency Department with increasing difficulty breathing over the last 12 hours. Initial observation shows that she is anxious, sitting upright, | key C: Sarah’s oxygen saturation should be measured | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b17-6` vs `pedhd-resp-6` (peds)
- book: Sarah, a 10-year-old girl, has frequent attacks of asthma. She attends the Emergency Department with increasing difficulty in breathing over the last 12 hours. Initial observation shows that she is anxious, sitting uprig | key C: Sarah’s oxygen saturation should be measured | 5 opts
- other: Sarah, a 10-year-old girl, has frequent attacks of asthma. She attends the Emergency Department with increasing difficulty in breathing over the last 12 hours. Initial observation shows that she is anxious, sitting uprig | key C: Sarah's oxygen saturation should be measured | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b17-7` vs `pedep2-mf2-67` (peds.ep2)
- book: Zak, a 3-year-old boy, is seen by his general practitioner because of recurrent wheezing associated with upper respiratory tract infections. Which of the following features most supports the diagnosis of asthma? Select o | key E: The presence of symptoms between coughs and colds | 5 opts
- other: Which clinical feature strongly supports the diagnosis of asthma? | key E: The presence of symptoms between coughs and colds | 5 opts
- dice 0.22, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b17-7` vs `pedep2-res-54` (peds.ep2)
- book: Zak, a 3-year-old boy, is seen by his general practitioner because of recurrent wheezing associated with upper respiratory tract infections. Which of the following features most supports the diagnosis of asthma? Select o | key E: The presence of symptoms between coughs and colds | 5 opts
- other: A 3-year-old boy is seen by his GP due to recurrent wheezing associated with upper respiratory tract infections. Which of the following features most supports a diagnosis of asthma? | key E: The presence of symptoms between colds | 5 opts
- dice 0.85, key text same false, key letter moved false, fuller other, other lacks: Peak-flow variability diary; The presence of symptoms between coughs and colds (keyed option kept: false)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b17-7` vs `pedep2-res-7` (peds.ep2)
- book: Zak, a 3-year-old boy, is seen by his general practitioner because of recurrent wheezing associated with upper respiratory tract infections. Which of the following features most supports the diagnosis of asthma? Select o | key E: The presence of symptoms between coughs and colds | 5 opts
- other: Zak, a 3-year-old boy, is seen by his general practitioner because of recurrent wheezing associated with upper respiratory tract infections. Which of the following features most supports the diagnosis of asthma? | key E: The presence of symptoms between coughs and colds | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b17-7` vs `pedhd-resp-7` (peds)
- book: Zak, a 3-year-old boy, is seen by his general practitioner because of recurrent wheezing associated with upper respiratory tract infections. Which of the following features most supports the diagnosis of asthma? Select o | key E: The presence of symptoms between coughs and colds | 5 opts
- other: Zak, a 3-year-old boy, is seen by his general practitioner because of recurrent wheezing associated with upper respiratory tract infections. Which of the following features most supports the diagnosis of asthma? | key E: The presence of symptoms between coughs and colds | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b17-9` vs `pedep2-res-8` (peds.ep2)
- book: Norah, an 18-month-old girl, presents to her family doctor with coryza, cough and a mild fever for 3 days. She feeds poorly and is unsettled at night. Her respiratory rate is normal and there is no chest recession. What  | key E: Upper respiratory tract infection | 5 opts
- other: Norah, an 18-month-old girl, presents to her family doctor with coryza, cough, and a mild fever for 3 days. She feeds poorly and is unsettled at night. Her respiratory rate is normal, and there is no chest recession. Wha | key E: Upper respiratory tract infection | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b17-9` vs `pedhd-resp-8` (peds)
- book: Norah, an 18-month-old girl, presents to her family doctor with coryza, cough and a mild fever for 3 days. She feeds poorly and is unsettled at night. Her respiratory rate is normal and there is no chest recession. What  | key E: Upper respiratory tract infection | 5 opts
- other: Norah, an 18-month-old girl, presents to her family doctor with coryza, cough and a mild fever for 3 days. She feeds poorly and is unsettled at night. Her respiratory rate is normal and there is no chest recession.
What  | key E: Upper respiratory tract infection | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

## Book chapter 18 Cardiac disorders

### SAME `pedsa-b18-1` vs `pedep2-car-1` (peds.ep2)
- book: Alan, a 4-month-old boy, sees his general practitioner for an ear infection. On listening to his chest a heart murmur is heard. Which one of the following features most suggests that it requires further investigation? Se | key A: A thrill | 5 opts
- other: Alan, a 4-month-old boy, sees his general practitioner for an ear infection. On listening to his chest, a heart murmur is heard. Which one of the following features most suggests that it requires further investigation? | key A: A thrill | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b18-1` vs `pedhd-card-1` (peds)
- book: Alan, a 4-month-old boy, sees his general practitioner for an ear infection. On listening to his chest a heart murmur is heard. Which one of the following features most suggests that it requires further investigation? Se | key A: A thrill | 5 opts
- other: Alan, a 4-month-old boy, sees his general practitioner for an ear infection. On listening to his chest a heart murmur is heard. Which one of the following features most suggests that it requires further investigation? | key A: A thrill | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b18-2` vs `pedep2-car-2` (peds.ep2)
- book: Which of the following is the most common type of congenital heart disease in the UK? Select one answer only. | key E: Ventricular septal defect | 5 opts
- other: Which of the following is the most common congenital heart disease? | key A: Ventricular septal defect (VSD) | 4 opts
- dice 0.8, key text same true, key letter moved true, fuller book, other lacks: Persistent arterial duct; Pulmonary stenosis (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b18-2` vs `pedhd-card-2` (peds)
- book: Which of the following is the most common type of congenital heart disease in the UK? Select one answer only. | key E: Ventricular septal defect | 5 opts
- other: Which of the following is the most common type of congenital heart disease in the UK? | key E: Ventricular septal defect | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b18-3` vs `pedep2-car-3` (peds.ep2)
- book: Sunil, a 3-month-old infant, presents with breathlessness and sweating on feeding. He has had several chest infections. You suspect heart failure. Which of the following is most likely to be correct regarding his heart f | key D: It is due to a left-to-right shunt | 5 opts
- other: Sunil, a 3-month-old infant, presents with breathlessness and sweating while feeding. He has had several chest infections. You suspect heart failure. Which of the following is most likely to be correct regarding his hear | key D: It is due to a left-to-right shunt | 5 opts
- dice 0.98, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b18-3` vs `pedhd-card-3` (peds)
- book: Sunil, a 3-month-old infant, presents with breathlessness and sweating on feeding. He has had several chest infections. You suspect heart failure. Which of the following is most likely to be correct regarding his heart f | key D: It is due to a left-to-right shunt | 5 opts
- other: Sunil, a 3-month-old infant, presents with breathlessness and sweating on feeding. He has had several chest infections. You suspect heart failure. Which of the following is most likely to be correct regarding his heart f | key D: It is due to a left-to-right shunt | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b18-4` vs `pedep2-car-4` (peds.ep2)
- book: Tariq, who is 6 weeks old, is admitted directly from the cardiology clinic with heart failure. He has a large ventricular septal defect. The cardiologist has recommended treatment with furosemide and spironolactone. His  | key D: The pulmonary vascular resistance falls after birth and now flow from left to right across the septal defect is much greater | 5 opts
- other: Tariq, who is 6 weeks old, is admitted directly from the cardiology clinic with heart failure. He has a large ventricular septal defect. The cardiologist has recommended treatment with furosemide and spironolactone. His  | key D: The pulmonary vascular resistance falls after birth, and now flow from left to right across the septal defect is much greater. | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b18-4` vs `pedhd-card-4` (peds)
- book: Tariq, who is 6 weeks old, is admitted directly from the cardiology clinic with heart failure. He has a large ventricular septal defect. The cardiologist has recommended treatment with furosemide and spironolactone. His  | key D: The pulmonary vascular resistance falls after birth and now flow from left to right across the septal defect is much greater | 5 opts
- other: Tariq, who is 6 weeks old, is admitted directly from the cardiology clinic with heart failure. He has a large ventricular septal defect. The cardiologist has recommended treatment with furosemide and spironolactone. His  | key D: The pulmonary vascular resistance falls after birth and now flow from left to right across the septal defect is much greater | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b18-5` vs `pedep2-car-5` (peds.ep2)
- book: John, who is 6 years old, presents to the Emergency Department feeling sick and dizzy. He was brought to hospital by a paramedic crew who were called after he became unwell at school. His heart rate was noted to be very  | key E: Vagal stimulation manoeuvre | 5 opts
- other: John, who is 6 years old, presents to the Emergency Department feeling sick and dizzy. He was brought to the hospital by a paramedic crew who were called after he became unwell at school. His heart rate was noted to be v | key E: Vagal stimulation manoeuvre | 5 opts
- dice 0.98, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b18-5` vs `pedhd-card-5` (peds)
- book: John, who is 6 years old, presents to the Emergency Department feeling sick and dizzy. He was brought to hospital by a paramedic crew who were called after he became unwell at school. His heart rate was noted to be very  | key E: Vagal stimulation manoeuvre | 5 opts
- other: John, who is 6 years old, presents to the Emergency Department feeling sick and dizzy. He was brought to hospital by a paramedic crew who were called after he became unwell at school. His heart rate was noted to be very  | key E: Vagal stimulation manoeuvre | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b18-7-1` vs `pedep2-car-11` (peds.ep2)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following clinical scenarios described select the most likely findings on echocardiography. Each option may be used once, more than once, or | key undefined: Transposition of the great arteries | 13 opts
- other: Jack is 24 hours old, and his mother notices when he is about to breastfeed that he is blue around the mouth. On examination, his tongue looks blue, and there is peripheral cyanosis. His respiratory rate is 65 breaths/mi | key D: Transposition of the great arteries | 5 opts
- dice 0.6, key text same true, key letter moved true, fuller book, other lacks: Atrial septal defect; Dextrocardia with situs inversus; Dextrocardia with situs solitus; Mitral stenosis; Normal; Pulmonary stenosis; Tetralogy of Fallot; Ventricular septal defect (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b18-7-1` vs `pedhd-card-11` (peds)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following clinical scenarios described select the most likely findings on echocardiography. Each option may be used once, more than once, or | key undefined: Transposition of the great arteries | 13 opts
- other: Jack is 24 hours old and his mother notices when he is about to breastfeed that he is blue around the mouth. On examination, his tongue looks blue and there is peripheral cyanosis. His respiratory rate is 65 breaths/min. | key D: Transposition of the great arteries | 5 opts
- dice 0.61, key text same true, key letter moved true, fuller book, other lacks: Atrial septal defect; Dextrocardia with situs inversus; Dextrocardia with situs solitus; Mitral stenosis; Normal; Pulmonary stenosis; Tetralogy of Fallot; Ventricular septal defect (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b18-7-2` vs `pedep2-car-12` (peds.ep2)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following clinical scenarios described select the most likely findings on echocardiography. Each option may be used once, more than once, or | key C: Coarctation of the aorta | 13 opts
- other: Sarah was born at term by spontaneous vaginal delivery and went home at 8 hours of age following a normal neonatal discharge examination. At 48 hours of age, her mother found her looking pale and was unable to wake her.  | key C: Coarctation of the aorta | 4 opts
- dice 0.62, key text same true, key letter moved false, fuller book, other lacks: Atrial septal defect; Dextrocardia with situs inversus; Dextrocardia with situs solitus; Mitral regurgitation; Mitral stenosis; Normal; Pulmonary stenosis; Tetralogy of Fallot; Ventricular septal defect (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b18-7-2` vs `pedhd-card-12` (peds)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following clinical scenarios described select the most likely findings on echocardiography. Each option may be used once, more than once, or | key C: Coarctation of the aorta | 13 opts
- other: Sarah was born at term by spontaneous vaginal delivery and went home at 8 hours of age following a normal neonatal discharge examination. At 48 hours of age her mother found her looking pale and was unable to wake her. S | key C: Coarctation of the aorta | 5 opts
- dice 0.63, key text same true, key letter moved false, fuller book, other lacks: Atrial septal defect; Dextrocardia with situs inversus; Dextrocardia with situs solitus; Mitral stenosis; Normal; Pulmonary stenosis; Tetralogy of Fallot; Ventricular septal defect (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b18-7-4` vs `pedep2-car-13` (peds.ep2)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following clinical scenarios described select the most likely findings on echocardiography. Each option may be used once, more than once, or | key B: Atrial septal defect | 13 opts
- other: Jane, a previously fit and well 18-month-old girl, presents with frequent respiratory tract infections and wheeze. On examination, there is a fixed and widely split second heart sound, and an ejection systolic murmur bes | key C: Atrial septal defect | 5 opts
- dice 0.48, key text same true, key letter moved true, fuller book, other lacks: Dextrocardia with situs inversus; Dextrocardia with situs solitus; Mitral stenosis; Normal; Pulmonary stenosis; Tetralogy of Fallot; Transposition of the great arteries; Ventricular septal defect (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b18-7-4` vs `pedhd-card-13` (peds)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following clinical scenarios described select the most likely findings on echocardiography. Each option may be used once, more than once, or | key B: Atrial septal defect | 13 opts
- other: Jane, a previously fit and well 18-month-old girl, presents with frequent respiratory tract infections and wheeze. On examination there is a fixed and widely split second heart sound, an ejection systolic murmur best hea | key C: Atrial septal defect | 5 opts
- dice 0.48, key text same true, key letter moved true, fuller book, other lacks: Dextrocardia with situs inversus; Dextrocardia with situs solitus; Mitral stenosis; Normal; Pulmonary stenosis; Tetralogy of Fallot; Transposition of the great arteries; Ventricular septal defect (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b18-8-1` vs `pedep2-car-14` (peds.ep2)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following children who present with a heart murmur select the most likely findings on echocardiography. Each option may be used once, more t | key undefined: Ventricular septal defect (VSD) | 13 opts
- other: Anoushka, a 1-year-old girl, presents to the Emergency Department with a respiratory tract infection. She is pink and well-perfused. There is a thrill and a pansystolic murmur at the lower left sternal edge. In this case | key B: Ventricular septal defect | 5 opts
- dice 0.68, key text same true, key letter moved true, fuller book, other lacks: Aortic stenosis; Dextrocardia with situs inversus; Dextrocardia with situs solitus; Normal; Persistent ductus arteriosus; Pulmonary stenosis; Tetralogy of Fallot; Transposition of the great arteries (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b18-8-1` vs `pedhd-card-14` (peds)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following children who present with a heart murmur select the most likely findings on echocardiography. Each option may be used once, more t | key undefined: Ventricular septal defect (VSD) | 13 opts
- other: Anoushka, a 1-year-old girl, presents to the Emergency Department with a respiratory tract infection. She is pink and well-perfused. There is a thrill and pansystolic murmur at the lower left sternal edge. In this case,  | key B: Ventricular septal defect | 5 opts
- dice 0.68, key text same true, key letter moved true, fuller book, other lacks: Aortic stenosis; Dextrocardia with situs inversus; Dextrocardia with situs solitus; Normal; Persistent ductus arteriosus; Pulmonary stenosis; Tetralogy of Fallot; Transposition of the great arteries (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b18-8-2` vs `pedep2-car-15` (peds.ep2)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following children who present with a heart murmur select the most likely findings on echocardiography. Each option may be used once, more t | key I: Persistent ductus arteriosus | 13 opts
- other: Debbie, a 3-month-old female infant, is being reviewed in the paediatric outpatient clinic. She was referred by a general practitioner for her 6-week check-up. A continuous murmur was heard throughout the praecordium. Sh | key C: Persistent ductus arteriosus | 5 opts
- dice 0.76, key text same true, key letter moved true, fuller book, other lacks: Aortic stenosis; Coarctation of the aorta; Dextrocardia with situs inversus; Dextrocardia with situs solitus; Normal; Pulmonary stenosis; Tetralogy of Fallot; Transposition of the great arteries (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b18-8-2` vs `pedhd-card-15` (peds)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following children who present with a heart murmur select the most likely findings on echocardiography. Each option may be used once, more t | key I: Persistent ductus arteriosus | 13 opts
- other: Debbie, a 3-month-old female infant is being reviewed in the paediatric outpatient clinic. She was referred as on her 6-week check the general practitioner heard a continuous murmur throughout the praecordium. She is wel | key C: Persistent ductus arteriosus | 5 opts
- dice 0.77, key text same true, key letter moved true, fuller book, other lacks: Aortic stenosis; Coarctation of the aorta; Dextrocardia with situs inversus; Dextrocardia with situs solitus; Normal; Pulmonary stenosis; Tetralogy of Fallot; Transposition of the great arteries (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b18-8-3` vs `pedep2-car-16` (peds.ep2)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following children who present with a heart murmur select the most likely findings on echocardiography. Each option may be used once, more t | key H: Normal | 13 opts
- other: Nada, a 5-month-old female infant, has had a fever and runny nose for 2 days. On examination, she has a temperature of 38.3°C and a runny nose. Her tongue is pink. Her breathing is normal. Pulse is 160 beats/min. Her hea | key E: Normal | 5 opts
- dice 0.78, key text same true, key letter moved true, fuller book, other lacks: Aortic stenosis; Dextrocardia with situs inversus; Dextrocardia with situs solitus; Mitral regurgitation; Mitral stenosis; Pulmonary stenosis; Tetralogy of Fallot; Transposition of the great arteries (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### UNSURE `pedsa-b18-8-3` vs `pedep2-car-29` (peds.ep2)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following children who present with a heart murmur select the most likely findings on echocardiography. Each option may be used once, more t | key H: Normal | 13 opts
- other: Nada, a 5-month-old female infant, has a fever and runny nose for 2 days. On examination, her temperature is 38.3°C, her tongue is pink, and no chest retractions are noted. Her pulse is 160 beats/min, heart sounds are no | key A: Normal "innocent murmur" | 4 opts
- dice 0.66, key text same false, key letter moved true, fuller book, other lacks: Atrial septal defect; Coarctation of the aorta; Dextrocardia with situs inversus; Dextrocardia with situs solitus; Mitral regurgitation; Mitral stenosis; Normal; Persistent ductus arteriosus; Pulmonary stenosis; Tetralogy of Fallot; Transposition of the great arteries (keyed option kept: false)
- why: keyed text differs, stems alike

### SAME `pedsa-b18-8-3` vs `pedep2-car-59` (peds.ep2)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following children who present with a heart murmur select the most likely findings on echocardiography. Each option may be used once, more t | key H: Normal | 13 opts
- other: Nada, a 5-month-old female infant has a fever and runny nose for 2 days. On examination, her temperature is 38.3°C and she has a runny nose. Her tongue is pink. Her breathing is normal. Pulse is 130 beats/min. Her heart  | key D: Normal | 5 opts
- dice 0.77, key text same true, key letter moved true, fuller book, other lacks: Aortic stenosis; Dextrocardia with situs inversus; Dextrocardia with situs solitus; Mitral stenosis; Persistent ductus arteriosus; Pulmonary stenosis; Tetralogy of Fallot; Transposition of the great arteries (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b18-8-3` vs `pedhd-card-16` (peds)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following children who present with a heart murmur select the most likely findings on echocardiography. Each option may be used once, more t | key H: Normal | 13 opts
- other: Nada, a 5-month-old female infant has a fever and runny nose for 2 days. On examination she has a fever of 38.3°C and a runny nose. Her tongue is pink. Her breathing is normal. Pulse is 160 beats/min. Her heart sounds ar | key E: Normal | 5 opts
- dice 0.8, key text same true, key letter moved true, fuller book, other lacks: Aortic stenosis; Dextrocardia with situs inversus; Dextrocardia with situs solitus; Mitral regurgitation; Mitral stenosis; Pulmonary stenosis; Tetralogy of Fallot; Transposition of the great arteries (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b18-8-4` vs `pedep2-car-17` (peds.ep2)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following children who present with a heart murmur select the most likely findings on echocardiography. Each option may be used once, more t | key A: Aortic stenosis | 13 opts
- other: Robert, a 3-year-old boy, has had a runny nose and wheeze for 3 days. On examination, his pulse is 100 beats/min. Pulses are normal. There is an ejection systolic murmur heard loudest at the upper right sternal edge, whi | key B: Aortic stenosis | 5 opts
- dice 0.77, key text same true, key letter moved true, fuller book, other lacks: Atrial septal defect; Dextrocardia with situs inversus; Dextrocardia with situs solitus; Mitral stenosis; Normal; Pulmonary stenosis; Tetralogy of Fallot; Ventricular septal defect (VSD) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b18-8-4` vs `pedep2-car-35` (peds.ep2)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following children who present with a heart murmur select the most likely findings on echocardiography. Each option may be used once, more t | key A: Aortic stenosis | 13 opts
- other: A 3-year-old boy has had a runny nose and wheeze for 3 days. On examination his pulse is 100 beats/min. There is an ejection systolic murmur heard loudest at the upper left sternal edge, which can also be heard over the  | key A: Aortic stenosis | 5 opts
- dice 0.73, key text same true, key letter moved false, fuller book, other lacks: Dextrocardia with situs inversus; Dextrocardia with situs solitus; Mitral regurgitation; Mitral stenosis; Normal; Persistent ductus arteriosus; Tetralogy of Fallot; Transposition of the great arteries (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b18-8-4` vs `pedhd-card-17` (peds)
- book: Below is a list (A–M) of possible findings on echocardiography. For each of the following children who present with a heart murmur select the most likely findings on echocardiography. Each option may be used once, more t | key A: Aortic stenosis | 13 opts
- other: Robert, a 3-year-old boy, has had a runny nose and wheeze for 3 days. On examination his pulse is 100 beats/min. Pulses are normal. There is an ejection systolic murmur heard loudest at the upper right sternal edge, whic | key B: Aortic stenosis | 5 opts
- dice 0.77, key text same true, key letter moved true, fuller book, other lacks: Atrial septal defect; Dextrocardia with situs inversus; Dextrocardia with situs solitus; Mitral stenosis; Normal; Pulmonary stenosis; Tetralogy of Fallot; Ventricular septal defect (VSD) (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

## Book chapter 19 Kidney and urinary tract disorders

### SAME `pedsa-b19-1` vs `pedep2-ren-1` (peds.ep2)
- book: Emily is a 2-year-old girl. She presents to the Emergency Department with a 2-day history of fever, vomiting and ‘smelly’ urine. She has no significant medical history and is not on any medication. On examination she has | key C: Clean catch | 5 opts
- other: Emily is a 2-year-old girl who presents to the Emergency Department with a 2-day history of fever, vomiting, and foul-smelling urine. She has no significant past medical history and is not on any medication. On examinati | key C: Clean catch | 5 opts
- dice 0.85, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b19-1` vs `pedhd-renal-1` (peds)
- book: Emily is a 2-year-old girl. She presents to the Emergency Department with a 2-day history of fever, vomiting and ‘smelly’ urine. She has no significant medical history and is not on any medication. On examination she has | key C: Clean catch | 5 opts
- other: Emily is a 2-year-old girl. She presents to the Emergency Department with a 2-day history of fever, vomiting and ‘smelly’ urine. She has no significant medical history and is not on any medication. On examination she has | key C: Clean catch | 5 opts
- dice 0.99, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b19-11-1` vs `pedep2-ren-10` (peds.ep2)
- book: Below is a list of possible diagnoses (A–H) for which urinalysis may be undertaken. For each of the following patients who have urine microscopy and culture sent from the Emergency Department, select the most likely diag | key E: Perineal contamination | 8 opts
- other: Ji, a 12-month-old Japanese girl, presents with a 2-day history of fever and vomiting. She is well-hydrated and has signs of coryza and pharyngitis. A bag urine sample was sent. Results: WBCs 100/mm^3, RBCs negative, org | key D: Perineal contamination | 5 opts
- dice 0.5, key text same true, key letter moved true, fuller book, other lacks: Nephrotic syndrome; Renal stone (calculi); Vulvovaginitis (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b19-11-1` vs `pedhd-renal-10` (peds)
- book: Below is a list of possible diagnoses (A–H) for which urinalysis may be undertaken. For each of the following patients who have urine microscopy and culture sent from the Emergency Department, select the most likely diag | key E: Perineal contamination | 8 opts
- other: Ji is a 12-month-old Japanese girl who presents to the Emergency Department. She has a 2-day history of fever and vomiting. Her mother is concerned that she is dehydrated. On examination she is well hydrated and has mark | key D: Perineal contamination | 5 opts
- dice 0.82, key text same true, key letter moved true, fuller book, other lacks: Nephrotic syndrome; Renal stone (calculi); Vulvovaginitis (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b19-11-2` vs `pedep2-ren-11` (peds.ep2)
- book: Below is a list of possible diagnoses (A–H) for which urinalysis may be undertaken. For each of the following patients who have urine microscopy and culture sent from the Emergency Department, select the most likely diag | key G: Urinary tract infection | 8 opts
- other: Harriet, a 12-year-old girl, presents to the Emergency Department with abdominal pain and pain on micturition. A midstream urine sample is obtained and is positive for leucocytes but negative for nitrites. She is started | key E: Urinary tract infection (UTI) | 5 opts
- dice 0.71, key text same true, key letter moved true, fuller book, other lacks: Nephrotic syndrome; Normal result; Renal stone (calculi); Vulvovaginitis (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b19-11-2` vs `pedep2-ren-43` (peds.ep2)
- book: Below is a list of possible diagnoses (A–H) for which urinalysis may be undertaken. For each of the following patients who have urine microscopy and culture sent from the Emergency Department, select the most likely diag | key G: Urinary tract infection | 8 opts
- other: Harriet, a 12-year-old girl, presents to the Emergency Department. She has abdominal pain and pain on micturition. A mid-stream urine sample is obtained and is positive for leucocytes but negative for nitrites. She was s | key D: Urinary tract infection | 4 opts
- dice 0.78, key text same true, key letter moved true, fuller book, other lacks: Balanitis; Glomerulonephritis; Nephrotic syndrome; Vulvovaginitis (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b19-11-2` vs `pedhd-renal-11` (peds)
- book: Below is a list of possible diagnoses (A–H) for which urinalysis may be undertaken. For each of the following patients who have urine microscopy and culture sent from the Emergency Department, select the most likely diag | key G: Urinary tract infection | 8 opts
- other: Harriet, a 12-year-old girl, presents to the Emergency Department. She has abdominal pain and pain on micturition. A mid-stream urine sample is obtained and is positive for leucocytes but negative for nitrites. She was s | key E: Urinary tract infection (UTI) | 5 opts
- dice 0.81, key text same true, key letter moved true, fuller book, other lacks: Nephrotic syndrome; Normal result; Renal stone (calculi); Vulvovaginitis (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b19-11-3` vs `pedep2-ren-12` (peds.ep2)
- book: Below is a list of possible diagnoses (A–H) for which urinalysis may be undertaken. For each of the following patients who have urine microscopy and culture sent from the Emergency Department, select the most likely diag | key E: Perineal contamination | 8 opts
- other: Gary is a 6-month-old boy who has been febrile for 1 day, is feeding poorly, and has difficulty breathing. On examination, he has a respiratory rate of 60 breaths/min, marked chest recession, and widespread wheeze and fi | key D: Perineal contamination | 4 opts
- dice 0.78, key text same true, key letter moved true, fuller book, other lacks: Normal result; Renal stone (calculi); Urinary tract infection; Vulvovaginitis (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b19-11-3` vs `pedhd-renal-12` (peds)
- book: Below is a list of possible diagnoses (A–H) for which urinalysis may be undertaken. For each of the following patients who have urine microscopy and culture sent from the Emergency Department, select the most likely diag | key E: Perineal contamination | 8 opts
- other: Gary is a 6-month-old boy. He has been febrile for 1 day, is feeding poorly and has difficulty breathing. On examination he has a respiratory rate of 60 breaths/min, marked chest recession and on auscultation has widespr | key D: Perineal contamination | 5 opts
- dice 0.83, key text same true, key letter moved true, fuller book, other lacks: Normal result; Renal stone (calculi); Vulvovaginitis (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b19-11-4` vs `pedep2-ren-13` (peds.ep2)
- book: Below is a list of possible diagnoses (A–H) for which urinalysis may be undertaken. For each of the following patients who have urine microscopy and culture sent from the Emergency Department, select the most likely diag | key B: Glomerulonephritis | 8 opts
- other: George, a 7-year-old boy, presents to his family doctor with cloudy urine. He has no other symptoms, and his examination is normal. Urine microscopy and culture reveal: white blood cells 50–100/mm^2; red blood cells, man | key B: Glomerulonephritis | 5 opts
- dice 0.72, key text same true, key letter moved false, fuller book, other lacks: Normal result; Renal stone (calculi); Vulvovaginitis (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b19-11-4` vs `pedep2-ren-35` (peds.ep2)
- book: Below is a list of possible diagnoses (A–H) for which urinalysis may be undertaken. For each of the following patients who have urine microscopy and culture sent from the Emergency Department, select the most likely diag | key B: Glomerulonephritis | 8 opts
- other: George is a 7-year-old boy who presents to his family doctor with cloudy urine. He has no other symptoms, and his examination is normal. You obtain the following result from the microscopy and culture: white blood cells  | key A: Glomerulonephritis | 4 opts
- dice 0.76, key text same true, key letter moved true, fuller book, other lacks: Balanitis; Normal result; Perineal contamination; Renal stone (calculi); Vulvovaginitis (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b19-11-4` vs `pedhd-renal-13` (peds)
- book: Below is a list of possible diagnoses (A–H) for which urinalysis may be undertaken. For each of the following patients who have urine microscopy and culture sent from the Emergency Department, select the most likely diag | key B: Glomerulonephritis | 8 opts
- other: George is a 7-year-old boy who presents to his family doctor with cloudy urine. He has no other symptoms and his examination is normal. You obtain the following result from the microscopy and culture: white blood cells 5 | key B: Glomerulonephritis | 5 opts
- dice 0.77, key text same true, key letter moved false, fuller book, other lacks: Normal result; Renal stone (calculi); Vulvovaginitis (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b19-11-5` vs `pedep2-ren-14` (peds.ep2)
- book: Below is a list of possible diagnoses (A–H) for which urinalysis may be undertaken. For each of the following patients who have urine microscopy and culture sent from the Emergency Department, select the most likely diag | key G: Urinary tract infection | 8 opts
- other: Gregor is a 6-week-old baby who has recently moved to the UK from Estonia. He presents with fever and irritability. On examination, he is clinically shocked. A catheterized urine sample is taken urgently, and intravenous | key E: Urinary tract infection (UTI) | 5 opts
- dice 0.67, key text same true, key letter moved true, fuller book, other lacks: Normal result; Renal stone (calculi); Vulvovaginitis (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b19-11-5` vs `pedhd-renal-14` (peds)
- book: Below is a list of possible diagnoses (A–H) for which urinalysis may be undertaken. For each of the following patients who have urine microscopy and culture sent from the Emergency Department, select the most likely diag | key G: Urinary tract infection | 8 opts
- other: Gregor is a 6-week-old baby who has recently moved to the UK from Estonia. He presents with fever and irritability. On examination he is clinically shocked. Because of the urgency to obtain a sample you take a catheter u | key E: Urinary tract infection (UTI) | 5 opts
- dice 0.82, key text same true, key letter moved true, fuller book, other lacks: Normal result; Renal stone (calculi); Vulvovaginitis (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b19-12-1` vs `pedep2-ren-15` (peds.ep2)
- book: Below is a list (A–J) of renal investigations. For each of the following cases which investigation would you perform next? Each option may be used once, more than once, or not at all. Max is a 12-year-old boy with cerebr | key H: Ultrasound of the kidneys and urinary tract | 10 opts
- other: Max, a 12-year-old boy with cerebral palsy and epilepsy, presents to the Emergency Department with severe right-sided colicky abdominal pain. He has had one similar episode previously that resolved spontaneously. Today,  | key D: Ultrasound of the kidneys and urinary tract | 4 opts
- dice 0.75, key text same true, key letter moved true, fuller book, other lacks: Antistreptolysin O titre; CT scan of the abdomen; MAG3 renogram; Micturating cystourethrogram (MCUG); Plain abdominal X-ray; Plasma creatinine and electrolytes (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b19-12-1` vs `pedhd-renal-15` (peds)
- book: Below is a list (A–J) of renal investigations. For each of the following cases which investigation would you perform next? Each option may be used once, more than once, or not at all. Max is a 12-year-old boy with cerebr | key H: Ultrasound of the kidneys and urinary tract | 10 opts
- other: Max is a 12-year-old boy with cerebral palsy and epilepsy. He presents to the Emergency Department with severe right-sided colicky abdominal pain. He has had one episode of this previously, which ended as quickly as it s | key D: Ultrasound of the kidneys and urinary tract | 5 opts
- dice 0.88, key text same true, key letter moved true, fuller book, other lacks: Antistreptolysin O titre; CT scan of the abdomen; MAG3 renogram; Micturating cystourethrogram (MCUG); Plain abdominal X-ray (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b19-12-2` vs `pedep2-ren-16` (peds.ep2)
- book: Below is a list (A–J) of renal investigations. For each of the following cases which investigation would you perform next? Each option may be used once, more than once, or not at all. Rosa, a 2-year-old girl, presents to | key J: Urine microscopy and culture | 10 opts
- other: Rosa, a 2-year-old girl, presents to her general practitioner with a 24-hour history of vomiting and fever. Her temperature is 38°C, and she has generalized abdominal tenderness. A dipstick reveals leucocytes and nitrite | key C: Urine microscopy and culture | 5 opts
- dice 0.76, key text same true, key letter moved true, fuller book, other lacks: Antistreptolysin O titre; CT scan of the abdomen; MAG3 renogram; Micturating cystourethrogram (MCUG); Plain abdominal X-ray (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b19-12-2` vs `pedhd-renal-16` (peds)
- book: Below is a list (A–J) of renal investigations. For each of the following cases which investigation would you perform next? Each option may be used once, more than once, or not at all. Rosa, a 2-year-old girl, presents to | key J: Urine microscopy and culture | 10 opts
- other: Rosa, a 2-year-old girl, presents to her general practitioner. She has a 24-hour history of vomiting and fever. She has a temperature of 38°C. She has generalized tenderness of the abdomen. A dipstick reveals leucocytes  | key C: Urine microscopy and culture | 5 opts
- dice 0.8, key text same true, key letter moved true, fuller book, other lacks: Antistreptolysin O titre; CT scan of the abdomen; MAG3 renogram; Micturating cystourethrogram (MCUG); Plain abdominal X-ray (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b19-12-3` vs `pedep2-ren-17` (peds.ep2)
- book: Below is a list (A–J) of renal investigations. For each of the following cases which investigation would you perform next? Each option may be used once, more than once, or not at all. Usmaan is an 18-hour-old newborn bab | key H: Ultrasound of the kidneys and urinary tract | 10 opts
- other: Usmaan is an 18-hour-old newborn baby boy undergoing a routine discharge baby check. His notes mention bilateral hydronephrosis and a distended bladder on antenatal ultrasound. His mother is breastfeeding but reports he  | key D: Ultrasound of the kidneys and urinary tract | 5 opts
- dice 0.63, key text same true, key letter moved true, fuller book, other lacks: Antistreptolysin O titre; CT scan of the abdomen; MAG3 renogram; Micturating cystourethrogram (MCUG); Plain abdominal X-ray (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b19-12-3` vs `pedhd-renal-17` (peds)
- book: Below is a list (A–J) of renal investigations. For each of the following cases which investigation would you perform next? Each option may be used once, more than once, or not at all. Usmaan is an 18-hour-old newborn bab | key H: Ultrasound of the kidneys and urinary tract | 10 opts
- other: Usmaan is an 18-hour-old newborn baby boy who you are seeing for his routine discharge baby check. You read in his notes that he was found to have bilateral hydronephrosis and a distended bladder on his antenatal ultraso | key D: Ultrasound of the kidneys and urinary tract | 5 opts
- dice 0.84, key text same true, key letter moved true, fuller book, other lacks: Antistreptolysin O titre; CT scan of the abdomen; MAG3 renogram; Micturating cystourethrogram (MCUG); Plain abdominal X-ray (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b19-12-4` vs `pedep2-ren-18` (peds.ep2)
- book: Below is a list (A–J) of renal investigations. For each of the following cases which investigation would you perform next? Each option may be used once, more than once, or not at all. John is a 9-year-old boy. He has a h | key G: Plasma creatinine and electrolytes | 10 opts
- other: John is a 9-year-old boy with a history of multiple urinary tract infections. An ultrasound shows dysplastic kidneys. At a routine paediatric follow-up, his mother reports he is not growing as well as his siblings. His b | key E: Plasma creatinine and electrolytes | 5 opts
- dice 0.67, key text same true, key letter moved true, fuller book, other lacks: Antistreptolysin O titre; CT scan of the abdomen; MAG3 renogram; Micturating cystourethrogram (MCUG); Plain abdominal X-ray (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b19-12-4` vs `pedhd-renal-18` (peds)
- book: Below is a list (A–J) of renal investigations. For each of the following cases which investigation would you perform next? Each option may be used once, more than once, or not at all. John is a 9-year-old boy. He has a h | key G: Plasma creatinine and electrolytes | 10 opts
- other: John is a 9-year-old boy. He has a history of numerous urinary tract infections. He has had an ultrasound scan, which reveals that his kidneys are dysplastic. You are seeing him in the routine paediatric follow-up clinic | key E: Plasma creatinine and electrolytes | 5 opts
- dice 0.83, key text same true, key letter moved true, fuller book, other lacks: Antistreptolysin O titre; CT scan of the abdomen; MAG3 renogram; Micturating cystourethrogram (MCUG); Plain abdominal X-ray (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b19-2` vs `pedep2-ren-2` (peds.ep2)
- book: Becky is a 7-year-old girl. She is seen by her general practitioner with a 2-day history of fever and abdominal pain. Her mother has noted that she is going to the toilet to pass urine more often than usual. On examinati | key B: Cystitis | 5 opts
- other: Becky is a 7-year-old girl seen by her general practitioner with a 2-day history of fever and abdominal pain. Her mother has noticed increased urinary frequency. On examination, she is now afebrile with no abdominal tend | key B: Cystitis | 5 opts
- dice 0.76, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b19-2` vs `pedep2-ren-28` (peds.ep2)
- book: Becky is a 7-year-old girl. She is seen by her general practitioner with a 2-day history of fever and abdominal pain. Her mother has noted that she is going to the toilet to pass urine more often than usual. On examinati | key B: Cystitis | 5 opts
- other: A 7-year-old girl is seen with a 2-day history of Lever and abdominal pain. Her mother has noted that she is going to the toilet to pass urine more often than usual. On examination she is now afebrile, has normal heart r | key B: Cystitis | 5 opts
- dice 0.83, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b19-2` vs `pedhd-renal-2` (peds)
- book: Becky is a 7-year-old girl. She is seen by her general practitioner with a 2-day history of fever and abdominal pain. Her mother has noted that she is going to the toilet to pass urine more often than usual. On examinati | key B: Cystitis | 5 opts
- other: Becky is a 7-year-old girl. She is seen by her general practitioner with a 2-day history of fever and abdominal pain. Her mother has noted that she is going to the toilet to pass urine more often than usual. On examinati | key B: Cystitis | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b19-3` vs `pedep2-ren-3` (peds.ep2)
- book: Jonathan is an 8-year-old boy. He has a medical history of urinary tract infections. On this occasion he presents to hospital with acute spasmodic pain on the left side of his abdomen. He says it is the worst pain he has | key C: Renal stone | 5 opts
- other: Jonathan is an 8-year-old boy with a history of urinary tract infections. He now presents with acute spasmodic pain in the left side of his abdomen, describing it as the worst pain he has ever felt. He played football ye | key C: Renal stone | 5 opts
- dice 0.76, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b19-3` vs `pedhd-renal-3` (peds)
- book: Jonathan is an 8-year-old boy. He has a medical history of urinary tract infections. On this occasion he presents to hospital with acute spasmodic pain on the left side of his abdomen. He says it is the worst pain he has | key C: Renal stone | 5 opts
- other: Jonathan is an 8-year-old boy. He has a medical history of urinary tract infections. On this occasion he presents to hospital with acute spasmodic pain on the left side of his abdomen. He says it is the worst pain he has | key C: Renal stone | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b19-4` vs `pedep2-ren-4` (peds.ep2)
- book: In Johnathan’s particular case (Question 19.3), what is the most likely organism to have been the cause of his previous urinary tract infections? Select one answer only. | key C: Proteus sp. | 5 opts
- other: In Jonathan’s case (see previous question), what is the most likely organism responsible for his previous urinary tract infections?. | key C: Proteus species | 5 opts
- dice 0.62, key text same false, key letter moved false, fuller other, other lacks: Klebsiella sp.; Proteus sp. (keyed option kept: false)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b19-4` vs `pedhd-renal-4` (peds)
- book: In Johnathan’s particular case (Question 19.3), what is the most likely organism to have been the cause of his previous urinary tract infections? Select one answer only. | key C: Proteus sp. | 5 opts
- other: Johnathan is an 8-year-old boy with a history of recurrent urinary tract infections, who has now presented with severe left-sided colicky loin pain and 2+ haematuria, and has been found to have a renal stone. What is the | key C: Proteus sp. | 5 opts
- dice 0.38, key text same true, key letter moved false, fuller other
- why: Read: book stem is only a back-reference to Q19.3; live prints the full recurrent-UTI case; keyed Proteus sp. in both

### SAME `pedsa-b19-5` vs `pedep2-ren-5` (peds.ep2)
- book: Eesa, a 1-month-old Pakistani infant, is taken to his general practitioner by his mother. He is vomiting and not taking his feeds as well as normal. He is irritable and has a temperature of 39° C. His heart rate is 170 b | key A: Intravenous antibiotics | 5 opts
- other: Eesa is a 1-month-old Pakistani infant brought to the GP by his mother due to vomiting and reduced feeding. He is irritable and has a temperature of 39°C. His heart rate is 170 beats/min and respiratory rate is 45 breath | key A: Intravenous antibiotics | 5 opts
- dice 0.8, key text same true, key letter moved false, fuller book
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b19-5` vs `pedhd-renal-5` (peds)
- book: Eesa, a 1-month-old Pakistani infant, is taken to his general practitioner by his mother. He is vomiting and not taking his feeds as well as normal. He is irritable and has a temperature of 39° C. His heart rate is 170 b | key A: Intravenous antibiotics | 5 opts
- other: Eesa, a 1-month-old Pakistani infant, is taken to his general practitioner by his mother. He is vomiting and not taking his feeds as well as normal. He is irritable and has a temperature of 39°C. His heart rate is 170 be | key A: Intravenous antibiotics | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b19-6` vs `pedep2-ren-6` (peds.ep2)
- book: Freddie is a 3-year-old boy. He is referred to the hospital as his mother has noticed that his face is swollen (Fig. 19.1). His mother was concerned that he had an allergic reaction to some peanuts he ate at a party. Exa | key D: Nephrotic syndrome | 5 opts
- other: Freddie is a 3-year-old boy referred due to facial swelling. His mother suspects a peanut allergy. On examination, he has abdominal distension, bilateral scrotal swelling, and pitting edema of the lower limbs. Urine dips | key D: Nephrotic syndrome | 5 opts
- dice 0.57, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b19-6` vs `pedhd-renal-6` (peds)
- book: Freddie is a 3-year-old boy. He is referred to the hospital as his mother has noticed that his face is swollen (Fig. 19.1). His mother was concerned that he had an allergic reaction to some peanuts he ate at a party. Exa | key D: Nephrotic syndrome | 5 opts
- other: Freddie is a 3-year-old boy. He is referred to the hospital as his mother has noticed that his face is swollen, as shown. His mother was concerned that he had an allergic reaction to some peanuts he ate at a party. Exami | key D: Nephrotic syndrome | 5 opts
- dice 0.93, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b19-7` vs `pedep2-ren-7` (peds.ep2)
- book: What is the initial treatment of Freddie’s condition? Select one answer only. | key E: Oral prednisolone | 5 opts
- other: What is the initial treatment of Freddie’s condition? | key E: Oral prednisolone | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b19-7` vs `pedhd-renal-7` (peds)
- book: What is the initial treatment of Freddie’s condition? Select one answer only. | key E: Oral prednisolone | 5 opts
- other: Freddie is a 3-year-old boy who has presented with facial swelling, ascites, scrotal oedema and pitting oedema of the lower limbs. His urine dipstick shows 4+ protein, his blood pressure, renal function and complement le | key E: Oral prednisolone | 5 opts
- dice 0.17, key text same true, key letter moved false, fuller other
- why: Read: book stem is a back-reference plus hint; live prints the full nephrotic case; keyed Oral prednisolone in both

### SAME `pedsa-b19-8` vs `pedep2-ren-42` (peds.ep2)
- book: Finlay, a 5-year-old boy, recently had a birthday party at his local farm. Since then he has had 3 days of diarrhoea. The loose stool had some blood in it. His mother is concerned as he is still not himself. He appears t | key B: Haemolytic-uraemic syndrome | 5 opts
- other: Fady, a 5-year-old boy. He has had 3 days of diarrhea. The loose stool had some blood in it. He appears to be very pale and has not passed urine for 12 hours. He has no other medical problems and is not normally on any m | key B: Hemolytic-uremic syndrome | 5 opts
- dice 0.67, key text same true, key letter moved false, fuller other, other lacks: Acute lymphatic leukaemia (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b19-8` vs `pedep2-ren-8` (peds.ep2)
- book: Finlay, a 5-year-old boy, recently had a birthday party at his local farm. Since then he has had 3 days of diarrhoea. The loose stool had some blood in it. His mother is concerned as he is still not himself. He appears t | key B: Haemolytic-uraemic syndrome | 5 opts
- other: Finlay, a 5-year-old boy, had a birthday party at a local farm. He now has had 3 days of bloody diarrhea and appears pale. He has not passed urine for 12 hours. On examination, he is pale but normotensive. Lab tests show | key B: Hemolytic-uraemic syndrome | 5 opts
- dice 0.52, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b19-8` vs `pedhd-renal-8` (peds)
- book: Finlay, a 5-year-old boy, recently had a birthday party at his local farm. Since then he has had 3 days of diarrhoea. The loose stool had some blood in it. His mother is concerned as he is still not himself. He appears t | key B: Haemolytic-uraemic syndrome | 5 opts
- other: Finlay, a 5-year-old boy, recently had a birthday party at his local farm. Since then he has had 3 days of diarrhoea, and the loose stool had some blood in it. His mother is concerned as he is still not himself. He appea | key B: Haemolytic-uraemic syndrome | 5 opts
- dice 0.97, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b19-9` vs `pedep2-ren-9` (peds.ep2)
- book: Jane is a 5-year-old girl who presents to her general practice with bed-wetting. She has been wetting for 4 months and wets on average three nights per week. Her mother is upset as she had been dry during the day and nig | key C: Urinary dipstick | 5 opts
- other: Jane, a 5-year-old girl, presents with 4 months of bedwetting, occurring about three times a week. She had previously been dry for almost a year. She also recently started school and had two episodes of wetting during th | key C: Urine dipstick | 5 opts
- dice 0.56, key text same false, key letter moved false, fuller other, other lacks: Urinary dipstick (keyed option kept: false)
- why: Read: same Jane 5-year-old bed-wetting case, keyed Urinary dipstick vs Urine dipstick (wording only)

### SAME `pedsa-b19-9` vs `pedhd-renal-9` (peds)
- book: Jane is a 5-year-old girl who presents to her general practice with bed-wetting. She has been wetting for 4 months and wets on average three nights per week. Her mother is upset as she had been dry during the day and nig | key C: Urinary dipstick | 5 opts
- other: Jane is a 5-year-old girl who presents to her general practice with bed-wetting. She has been wetting for 4 months and wets on average three nights per week. Her mother is upset as she had been dry during the day and nig | key C: Urinary dipstick | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

## Book chapter 21 Liver disorders

### SAME `pedsa-b21-1` vs `pedep2-liv-1` (peds.ep2)
- book: Manuel, a 3-day-old infant is born to healthy parents. He presents with oozing from the umbilical stump and sleepiness. On examination he is pale and grunting. He responds only to painful stimuli. He has marked hepatomeg | key D: Blood glucose | 5 opts
- other: Manuel, a 3-day-old infant, is born to healthy parents. He presents with oozing from the umbilical stump and sleepiness. On examination, he is pale and grunting. He responds only to painful stimuli. He has marked hepatom | key D: Blood glucose | 5 opts
- dice 0.98, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b21-1` vs `pedhd-liv-1` (peds)
- book: Manuel, a 3-day-old infant is born to healthy parents. He presents with oozing from the umbilical stump and sleepiness. On examination he is pale and grunting. He responds only to painful stimuli. He has marked hepatomeg | key D: Blood glucose | 5 opts
- other: Manuel, a 3-day-old infant is born to healthy parents. He presents with oozing from the umbilical stump and sleepiness. On examination he is pale and grunting. He responds only to painful stimuli. He has marked hepatomeg | key D: Blood glucose | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b21-2` vs `pedep2-liv-2` (peds.ep2)
- book: Reece, a 4-week-old male infant living in the UK, is taken to his family doctor because he is jaundiced. He was born at term and is breastfed. His mother reports that he has always looked yellow and has started to develo | key B: Serum conjugated and unconjugated bilirubin | 5 opts
- other: Reece, a 4-week-old male infant living in the UK, is taken to his family doctor because he is jaundiced. He was born at term and is breastfed. His mother reports that he has always looked yellow and has started to develo | key B: Serum conjugated and unconjugated bilirubin | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b21-2` vs `pedhd-liv-2` (peds)
- book: Reece, a 4-week-old male infant living in the UK, is taken to his family doctor because he is jaundiced. He was born at term and is breastfed. His mother reports that he has always looked yellow and has started to develo | key B: Serum conjugated and unconjugated bilirubin | 5 opts
- other: Reece, a 4-week-old male infant living in the UK, is taken to his family doctor because he is jaundiced. He was born at term and is breastfed. His mother reports that he has always looked yellow and has started to develo | key B: Serum conjugated and unconjugated bilirubin | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b21-3` vs `pedep2-end-26` (peds.ep2)
- book: Javid is a 5-month-old Asian baby born at term in rural Pakistan. He presents with jaundice. His mother’s blood group is AB rhesus positive. His stool and urine are a normal colour. He is breastfed, although he has not b | key E: Hypothyroidism | 5 opts
- other: Jawad is a 5-month-old term baby who presents with jaundice. His mother is blood group AB and rhesus positive. His stool and urine are normal in color. He is breastfed but not feeding well. Examination reveals dry skin a | key E: Hypothyroidism | 5 opts
- dice 0.63, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b21-3` vs `pedep2-liv-3` (peds.ep2)
- book: Javid is a 5-month-old Asian baby born at term in rural Pakistan. He presents with jaundice. His mother’s blood group is AB rhesus positive. His stool and urine are a normal colour. He is breastfed, although he has not b | key E: Hypothyroidism | 5 opts
- other: Javid is a 5-month-old Asian baby born at term in rural Pakistan. He presents with jaundice. His mother's blood group is AB and rhesus positive. His stool and urine are a normal color. He is breastfed, although he has no | key E: Hypothyroidism | 5 opts
- dice 0.96, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b21-3` vs `pedhd-liv-3` (peds)
- book: Javid is a 5-month-old Asian baby born at term in rural Pakistan. He presents with jaundice. His mother’s blood group is AB rhesus positive. His stool and urine are a normal colour. He is breastfed, although he has not b | key E: Hypothyroidism | 5 opts
- other: Javid is a 5-month-old Asian baby born at term in rural Pakistan. He presents with jaundice. His mother’s blood group is AB rhesus positive. His stool and urine are a normal colour. He is breastfed, although he has not b | key E: Hypothyroidism | 5 opts
- dice 0.96, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b21-4` vs `pedep2-liv-4` (peds.ep2)
- book: Luna, a 32-year-old Cantonese woman has just given birth to her third child. She arrived in the UK 3 months ago to live with her extended family following the death of her husband. Antenatal screening shows that she is h | key B: Hepatitis B vaccination for the baby and all other children | 5 opts
- other: Luna, a 32-year-old Cantonese woman, has just given birth to her third child. She arrived in the UK 3 months ago to live with her extended family following the death of her husband. Antenatal screening shows that she is  | key B: Hepatitis B vaccination for the baby and all other children | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b21-4` vs `pedhd-liv-4` (peds)
- book: Luna, a 32-year-old Cantonese woman has just given birth to her third child. She arrived in the UK 3 months ago to live with her extended family following the death of her husband. Antenatal screening shows that she is h | key B: Hepatitis B vaccination for the baby and all other children | 5 opts
- other: Luna, a 32-year-old Cantonese woman has just given birth to her third child. She arrived in the UK 3 months ago to live with her extended family following the death of her husband. Antenatal screening shows that she is h | key B: Hepatitis B vaccination for the baby and all other children | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b21-5` vs `pedep2-liv-5` (peds.ep2)
- book: Summer, a 12-year-old girl, is seen in the Emergency Department. Her parents report that her school performance has been deteriorating and recently she has become confused and unsteady on her feet. Examination findings o | key E: Wilson disease | 5 opts
- other: Summer, a 12-year-old girl, is seen in the Emergency Department. Her parents report that her school performance has been deteriorating and recently she has become confused and unsteady on her feet. Examination findings o | key E: Wilson's disease | 5 opts
- dice 0.93, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b21-5` vs `pedhd-liv-5` (peds)
- book: Summer, a 12-year-old girl, is seen in the Emergency Department. Her parents report that her school performance has been deteriorating and recently she has become confused and unsteady on her feet. Examination findings o | key E: Wilson disease | 5 opts
- other: Summer, a 12-year-old girl, is seen in the Emergency Department. Her parents report that her school performance has been deteriorating and recently she has become confused and unsteady on her feet. Examination findings o | key E: Wilson disease | 5 opts
- dice 0.93, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b21-6-1` vs `pedep2-liv-6` (peds.ep2)
- book: The following is a list of diagnoses (A–L). For each of the following patients with liver disease, select the most likely diagnosis from the list. Each option may be used once, more than once, or not at all. Jason, a 3-w | key D: Biliary atresia | 12 opts
- other: Jason, a 3-week-old boy, is still jaundiced. His mother is reassured that this is likely to be 'breast milk' jaundice as she is fully breastfeeding him. He presents 3 weeks later with poor feeding, vomiting, and bruising | key C: Biliary atresia | 5 opts
- dice 0.81, key text same true, key letter moved true, fuller book, other lacks: α₁-antitrypsin deficiency; Autoimmune hepatitis; Bacterial infection; Cystic fibrosis; Inflammatory bowel disease; Wilson disease (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b21-6-1` vs `pedhd-liv-6` (peds)
- book: The following is a list of diagnoses (A–L). For each of the following patients with liver disease, select the most likely diagnosis from the list. Each option may be used once, more than once, or not at all. Jason, a 3-w | key D: Biliary atresia | 12 opts
- other: Jason, a 3-week-old boy, is still jaundiced. His mother is reassured that this is likely to be 'breast milk' jaundice as she is fully breastfeeding him. He presents 3 weeks later with poor feeding, vomiting and bruising  | key C: Biliary atresia | 5 opts
- dice 0.81, key text same true, key letter moved true, fuller book, other lacks: α₁-antitrypsin deficiency; Autoimmune hepatitis; Bacterial infection; Cystic fibrosis; Inflammatory bowel disease; Wilson disease (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b21-6-2` vs `pedep2-liv-7` (peds.ep2)
- book: The following is a list of diagnoses (A–L). For each of the following patients with liver disease, select the most likely diagnosis from the list. Each option may be used once, more than once, or not at all. Raj, a previ | key F: Hepatitis A | 12 opts
- other: Raj, a previously well-to-do 14-year-old Asian boy, is noted to be jaundiced. He has recently returned to the UK from India, where he was visiting relatives in a rural village. He had a 10-day diarrhea and vomiting illne | key A: Hepatitis A | 5 opts
- dice 0.74, key text same true, key letter moved true, fuller book, other lacks: α₁-antitrypsin deficiency; Autoimmune hepatitis; Bacterial infection; Cystic fibrosis; Inflammatory bowel disease; Wilson disease (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b21-6-2` vs `pedhd-liv-7` (peds)
- book: The following is a list of diagnoses (A–L). For each of the following patients with liver disease, select the most likely diagnosis from the list. Each option may be used once, more than once, or not at all. Raj, a previ | key F: Hepatitis A | 12 opts
- other: Raj, a previously well 14-year-old Asian boy, is noted to be jaundiced. He has recently returned to the UK from India where he was visiting relatives in a rural village. He had a 10-day diarrhoea and vomiting illness whi | key A: Hepatitis A | 5 opts
- dice 0.77, key text same true, key letter moved true, fuller book, other lacks: α₁-antitrypsin deficiency; Autoimmune hepatitis; Bacterial infection; Cystic fibrosis; Inflammatory bowel disease; Wilson disease (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b21-6-3` vs `pedep2-liv-8` (peds.ep2)
- book: The following is a list of diagnoses (A–L). For each of the following patients with liver disease, select the most likely diagnosis from the list. Each option may be used once, more than once, or not at all. A 5-week-old | key J: Galactosaemia | 12 opts
- other: A 5-week-old southern Asian male infant born in the UK presents to the Paediatric Assessment Unit with vomiting. He has not gained weight since birth. On examination, you find an infant who is jaundiced, lethargic, and h | key D: Galactosaemia | 5 opts
- dice 0.76, key text same true, key letter moved true, fuller book, other lacks: α₁-antitrypsin deficiency; Autoimmune hepatitis; Bacterial infection; Cystic fibrosis; Inflammatory bowel disease; Wilson disease (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b21-6-3` vs `pedhd-liv-8` (peds)
- book: The following is a list of diagnoses (A–L). For each of the following patients with liver disease, select the most likely diagnosis from the list. Each option may be used once, more than once, or not at all. A 5-week-old | key J: Galactosaemia | 12 opts
- other: A 5-week-old southern Asian male infant born in the UK presents to the Paediatric Assessment Unit with vomiting. He has not gained weight since birth. On examination you find an infant who is jaundiced, lethargic and hyp | key D: Galactosemia | 5 opts
- dice 0.76, key text same true, key letter moved true, fuller book, other lacks: α₁-antitrypsin deficiency; Autoimmune hepatitis; Bacterial infection; Cystic fibrosis; Inflammatory bowel disease; Wilson disease (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b21-6-4` vs `pedep2-liv-9` (peds.ep2)
- book: The following is a list of diagnoses (A–L). For each of the following patients with liver disease, select the most likely diagnosis from the list. Each option may be used once, more than once, or not at all. Lee is a 12- | key G: Hepatitis B | 12 opts
- other: Lee is a 12-year-old Chinese boy who moved with his parents from China 2 years ago. He presents with episodes of vomiting which is blood-stained. On examination, he is jaundiced, malnourished, and has splenomegaly. Which | key B: Hepatitis B | 5 opts
- dice 0.74, key text same true, key letter moved true, fuller book, other lacks: α₁-antitrypsin deficiency; Autoimmune hepatitis; Bacterial infection; Cystic fibrosis; Inflammatory bowel disease; Wilson disease (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b21-6-4` vs `pedhd-liv-9` (peds)
- book: The following is a list of diagnoses (A–L). For each of the following patients with liver disease, select the most likely diagnosis from the list. Each option may be used once, more than once, or not at all. Lee is a 12- | key G: Hepatitis B | 12 opts
- other: Lee is a 12-year-old Chinese boy who moved with his parents from China 2 years ago. He presents with episodes of vomiting which is blood-stained. On examination he is jaundiced, malnourished and has splenomegaly. Which o | key B: Hepatitis B | 5 opts
- dice 0.74, key text same true, key letter moved true, fuller book, other lacks: α₁-antitrypsin deficiency; Autoimmune hepatitis; Bacterial infection; Cystic fibrosis; Inflammatory bowel disease; Wilson disease (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

## Book chapter 22 Malignant disease

### SAME `pedsa-b22-1` vs `pedep2-mal-1` (peds.ep2)
- book: Concerning the epidemiology of childhood cancer, which of the following types is most common in the UK? Select one answer only. | key C: Leukaemia | 5 opts
- other: Concerning the epidemiology of childhood cancer, which of the following types is most common in the UK? | key C: Leukaemia | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### UNSURE `pedsa-b22-1` vs `pedep2-mf1-59` (peds.ep2)
- book: Concerning the epidemiology of childhood cancer, which of the following types is most common in the UK? Select one answer only. | key C: Leukaemia | 5 opts
- other: What is the most common solid childhood cancer? | key B: Brain tumors | 5 opts
- dice 0.55, key text same false, key letter moved true, fuller other, other lacks: Bone tumour; Leukaemia; Wilms tumour (nephroblastoma) (keyed option kept: false)
- why: commonest cancer vs commonest solid

### SAME `pedsa-b22-1` vs `pedhd-mal-1` (peds)
- book: Concerning the epidemiology of childhood cancer, which of the following types is most common in the UK? Select one answer only. | key C: Leukaemia | 5 opts
- other: Concerning the epidemiology of childhood cancer, which of the following types is most common in the UK? | key C: Leukaemia | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b22-10-1` vs `pedhd-mal-13` (peds)
- book: Below is a list (A–K) of investigations. For each of the following patients with malignant disease select the investigation most likely to confirm the diagnosis. Each option may be used once, more than once, or not at al | key A: Bone marrow aspirate | 11 opts
- other: Connor, a 4-year-old boy, presents to the Paediatric Assessment Unit with his parents. They are worried as he seems to be very tired and complains of his legs hurting. He also seems to have a fine rash that has developed | key A: Bone marrow aspirate | 5 opts
- dice 0.85, key text same true, key letter moved false, fuller book, other lacks: Excision biopsy; Full blood count; Magnetic resonance imaging (MRI) scan; Positron emission tomography (PET) scan; Ultrasound of abdomen; Urine catecholamines (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b22-10-2` vs `pedhd-mal-14` (peds)
- book: Below is a list (A–K) of investigations. For each of the following patients with malignant disease select the investigation most likely to confirm the diagnosis. Each option may be used once, more than once, or not at al | key J: Ultrasound of abdomen | 11 opts
- other: Niamh, a 4-year-old girl, is taken to her general practitioner as her mother has noticed she has red urine. On further questioning she has been more tired than normal and has been complaining of abdominal pain. On examin | key D: Ultrasound of abdomen | 5 opts
- dice 0.83, key text same true, key letter moved true, fuller book, other lacks: Bone marrow aspirate; Blood film; Chest X-ray; Clotting screen; CT scan; Excision biopsy (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### UNSURE `pedsa-b22-10-3` vs `pedep2-mal-15` (peds.ep2)
- book: Below is a list (A–K) of investigations. For each of the following patients with malignant disease select the investigation most likely to confirm the diagnosis. Each option may be used once, more than once, or not at al | key undefined: Urine catecholamines | 11 opts
- other: Oscar, a 3-year-old boy, has a large irregular abdominal mass and hypertension. What investigation is most likely to confirm the diagnosis? | key E: Urine catecholamines | 5 opts
- dice 0.36, key text same true, key letter moved true, fuller book, other lacks: Bone marrow aspirate; Blood film; Chest X-ray; Clotting screen; CT scan; Excision biopsy; Magnetic resonance imaging (MRI) scan; Positron emission tomography (PET) scan; Ultrasound of abdomen (keyed option kept: true)
- why: live stem too short

### SAME `pedsa-b22-10-3` vs `pedhd-mal-15` (peds)
- book: Below is a list (A–K) of investigations. For each of the following patients with malignant disease select the investigation most likely to confirm the diagnosis. Each option may be used once, more than once, or not at al | key undefined: Urine catecholamines | 11 opts
- other: Oscar, a 3-year-old boy, attends the Emergency Department as his mother is worried he has lost weight and looks pale. On examination he has a large irregular mass extending across his abdomen. His blood pressure is high. | key E: Urine catecholamines | 5 opts
- dice 0.78, key text same true, key letter moved true, fuller book, other lacks: Bone marrow aspirate; Blood film; Chest X-ray; Clotting screen; CT scan; Excision biopsy (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b22-10-4` vs `pedhd-mal-16` (peds)
- book: Below is a list (A–K) of investigations. For each of the following patients with malignant disease select the investigation most likely to confirm the diagnosis. Each option may be used once, more than once, or not at al | key H: Magnetic resonance imaging (MRI) scan | 11 opts
- other: Francis, a 2-year-old boy, is taken to his general practitioner by his father who is worried as he has become ‘cross-eyed’. Otherwise he is very well in himself and has no history of vomiting. On examination he appears t | key B: Magnetic resonance imaging (MRI) scan | 5 opts
- dice 0.82, key text same true, key letter moved true, fuller book, other lacks: Bone marrow aspirate; Blood film; Chest X-ray; Clotting screen; CT scan; Excision biopsy (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b22-10-5` vs `pedhd-mal-17` (peds)
- book: Below is a list (A–K) of investigations. For each of the following patients with malignant disease select the investigation most likely to confirm the diagnosis. Each option may be used once, more than once, or not at al | key H: Magnetic resonance imaging (MRI) scan | 11 opts
- other: Carla is a 4-year-old girl who is seen in the Paediatric Assessment Unit complaining of headaches. Her mother has noticed that her eye movements are not normal. The whole family has recently had a sickness bug but Carla  | key B: Magnetic resonance imaging (MRI) scan | 5 opts
- dice 0.8, key text same true, key letter moved true, fuller book, other lacks: Bone marrow aspirate; Blood film; Chest X-ray; Clotting screen; CT scan; Excision biopsy (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b22-10-6` vs `pedhd-mal-18` (peds)
- book: Below is a list (A–K) of investigations. For each of the following patients with malignant disease select the investigation most likely to confirm the diagnosis. Each option may be used once, more than once, or not at al | key F: Excision biopsy | 11 opts
- other: Solomon is a 12-year-old boy. He has recently lost weight and his ‘glands are up’. His mother reports that the ‘glands’ in his neck have been enlarged for several months now. He has no other medical problems. He has not  | key E: Excision biopsy | 5 opts
- dice 0.88, key text same true, key letter moved true, fuller book, other lacks: Bone marrow aspirate; Full blood count; Magnetic resonance imaging (MRI) scan; Positron emission tomography (PET) scan; Ultrasound of abdomen; Urine catecholamines (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b22-2` vs `pedep2-mal-2` (peds.ep2)
- book: Polly is a 2-year-old girl who is receiving chemotherapy for her acute lymphoblastic leukaemia. She is known to be neutropenic and has developed a fever of over 38.5° C. What is the most appropriate course of action? Sel | key D: Have blood cultures taken and be started on intravenous antibiotics | 5 opts
- other: Polly is a 2-year-old girl receiving chemotherapy for acute lymphoblastic leukaemia. She is known to be neutropenic and has developed a fever over 38.5°C. What is the most appropriate course of action? | key D: Have blood cultures taken and be started on intravenous antibiotics | 5 opts
- dice 0.96, key text same true, key letter moved false, fuller other, other lacks: Have her blood count and inflammatory markers (e.g. C-reactive protein) measured; See her general practitioner for further assessment and decision regarding antibiotics (keyed option kept: true)
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical; other lacks 2 option(s)

### SAME `pedsa-b22-2` vs `pedhd-mal-2` (peds)
- book: Polly is a 2-year-old girl who is receiving chemotherapy for her acute lymphoblastic leukaemia. She is known to be neutropenic and has developed a fever of over 38.5° C. What is the most appropriate course of action? Sel | key D: Have blood cultures taken and be started on intravenous antibiotics | 5 opts
- other: Polly is a 2-year-old girl who is receiving chemotherapy for her acute lymphoblastic leukaemia. She is known to be neutropenic and has developed a fever of over 38.5°C. What is the most appropriate course of action? | key D: Have blood cultures taken and be started on intravenous antibiotics | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b22-3` vs `pedep2-mal-3` (peds.ep2)
- book: Mohammed is a 3-year-old boy who is reviewed in the Paediatric Assessment Unit. He has a history of weight loss and lethargy. His mother is also concerned as he keeps crying and complains of pain in his tummy. On examina | key E: Urinary catecholamines | 5 opts
- other: Mohammed is a 3-year-old boy with weight loss, lethargy, and abdominal pain. On examination, he has an extensive abdominal mass. Which of the following investigations would be most useful in making the diagnosis? | key E: Urinary catecholamines | 5 opts
- dice 0.57, key text same true, key letter moved false, fuller other, other lacks: Serum beta-HCG (human chorionic gonadotrophin) (keyed option kept: true)
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b22-3` vs `pedhd-mal-3` (peds)
- book: Mohammed is a 3-year-old boy who is reviewed in the Paediatric Assessment Unit. He has a history of weight loss and lethargy. His mother is also concerned as he keeps crying and complains of pain in his tummy. On examina | key E: Urinary catecholamines | 5 opts
- other: Mohammed is a 3-year-old boy who is reviewed in the Paediatric Assessment Unit. He has a history of weight loss and lethargy. His mother is also concerned as he keeps crying and complains of pain in his tummy. On examina | key E: Urinary catecholamines | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b22-4` vs `pedep2-mal-4` (peds.ep2)
- book: Josh is a 2-year-old boy who presents to the Emergency Department with weight loss and lethargy. On examination he has splenomegaly. You are worried that he has leukaemia. You perform an urgent full blood count. What are | key A: Low haemoglobin and low platelets | 5 opts
- other: Josh is a 2-year-old boy with weight loss, lethargy, and splenomegaly. You suspect leukaemia and perform a full blood count. What are the most likely haematological findings? | key A: Low haemoglobin and low platelets | 5 opts
- dice 0.59, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b22-4` vs `pedhd-mal-4` (peds)
- book: Josh is a 2-year-old boy who presents to the Emergency Department with weight loss and lethargy. On examination he has splenomegaly. You are worried that he has leukaemia. You perform an urgent full blood count. What are | key A: Low haemoglobin and low platelets | 5 opts
- other: Josh is a 2-year-old boy who presents to the Emergency Department with weight loss and lethargy. On examination he has splenomegaly. You are worried that he has leukaemia. You perform an urgent full blood count. What are | key A: Low haemoglobin and low platelets | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b22-5` vs `pedep2-mal-5` (peds.ep2)
- book: Amy is a 2-year-old girl who presents to the outpatient department with a history of developmental regression. She was able to walk but has ‘gone off her legs’ in the last few weeks. Her parents are very worried about he | key D: Medulloblastoma | 5 opts
- other: Amy, a 2-year-old girl, has developmental regression and unsteadiness on her feet. CT imaging reveals a posterior fossa mass. What is the most likely underlying cause? | key D: Medulloblastoma | 5 opts
- dice 0.27, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b22-5` vs `pedhd-mal-5` (peds)
- book: Amy is a 2-year-old girl who presents to the outpatient department with a history of developmental regression. She was able to walk but has ‘gone off her legs’ in the last few weeks. Her parents are very worried about he | key D: Medulloblastoma | 5 opts
- other: Amy is a 2-year-old girl who presents to the outpatient department with a history of developmental regression. She was able to walk but has ‘gone off her legs’ in the last few weeks. Her parents are very worried about he | key D: Medulloblastoma | 5 opts
- dice 0.96, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### UNSURE `pedsa-b22-6` vs `pedep2-mal-6` (peds.ep2)
- book: Mark, a 3-year-old boy, is currently receiving chemotherapy. His sister has developed the rash shown in Fig. 22.3 below. Mark is well and does not have a fever. Mark’s parents are worried and phone the oncology ward for  | key B: Mark needs urgent treatment to prevent him from becoming unwell | 5 opts
- other: Mark, a 3-year-old boy on chemotherapy, is well but has been exposed to a sibling with a rash. What advice should be given to his parents? | key B: He needs urgent treatment to prevent becoming unwell | 5 opts
- dice 0.52, key text same false, key letter moved false, fuller other, other lacks: Advise them to see their general practitioner to check that he is all right; Mark needs urgent treatment to prevent him from becoming unwell; Monitor Mark and if he becomes unwell with a fever, bring him to the ward; Monitor Mark and if he has any signs of the rash, bring him to the ward; Reassurance – this is a common illness that most children get (keyed option kept: false)
- why: live key worded differently

### SAME `pedsa-b22-6` vs `pedhd-mal-6` (peds)
- book: Mark, a 3-year-old boy, is currently receiving chemotherapy. His sister has developed the rash shown in Fig. 22.3 below. Mark is well and does not have a fever. Mark’s parents are worried and phone the oncology ward for  | key B: Mark needs urgent treatment to prevent him from becoming unwell | 5 opts
- other: Mark, a 3-year-old boy, is currently receiving chemotherapy. His sister has developed the rash shown in the opposite figure. Mark is well and does not have a fever. Mark’s parents are worried and phone the oncology ward  | key B: Mark needs urgent treatment to prevent him from becoming unwell | 5 opts
- dice 0.91, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b22-7` vs `pedep2-mal-7` (peds.ep2)
- book: Essa is a 2-year-old boy whose parents have noticed his two eyes look different. He has no other medical history and is not currently on any medication. On examination, the movement of the eyes is normal and the pupils a | key C: Retinoblastoma | 5 opts
- other: Essa, a 2-year-old boy, presents with a white reflex in one eye (leukocoria). What is the likely cause? | key C: Retinoblastoma | 5 opts
- dice 0.25, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b22-7` vs `pedhd-mal-7` (peds)
- book: Essa is a 2-year-old boy whose parents have noticed his two eyes look different. He has no other medical history and is not currently on any medication. On examination, the movement of the eyes is normal and the pupils a | key C: Retinoblastoma | 5 opts
- other: Essa is a 2-year-old boy whose parents have noticed his two eyes look different. He has no other medical history and is not currently on any medication. On examination, the movement of the eyes is normal and the pupils a | key C: Retinoblastoma | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b22-8` vs `pedep2-mal-8` (peds.ep2)
- book: Brittney, aged 5 years, goes to her optician. She has needed glasses for 4 months but her mother thinks her prescription needs changing as she has been getting progressively worsening headaches. When the optician examine | key D: Posterior fossa tumour | 5 opts
- other: Britney, aged 5 years, presents with progressive headaches and a normal red reflex. What is the most likely diagnosis? | key D: Posterior fossa tumour | 5 opts
- dice 0.24, key text same true, key letter moved false, fuller other
- why: Read (keyed text identical): live twin is a shortened or self-contained reprint of the book item - live content words contained in the book stem (>=75%) or book stem is only a back-reference (Q n.n / Fig) to a case the live item prints in full; specific pairs also read in full [confirmed-3.txt]

### SAME `pedsa-b22-8` vs `pedhd-mal-8` (peds)
- book: Brittney, aged 5 years, goes to her optician. She has needed glasses for 4 months but her mother thinks her prescription needs changing as she has been getting progressively worsening headaches. When the optician examine | key D: Posterior fossa tumour | 5 opts
- other: Brittney, aged 5 years, goes to her optician. She has needed glasses for 4 months but her mother thinks her prescription needs changing as she has been getting progressively worsening headaches. When the optician examine | key D: Posterior fossa tumour | 5 opts
- dice 0.93, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b22-9-1` vs `pedhd-mal-9` (peds)
- book: Below is a list (A–K) of possible diagnoses. For each of the clinical scenarios, select the most likely diagnosis. Each option may be used once, more than once, or not at all. Natalia, a 4-year-old girl, presents to her  | key A: Acute lymphoblastic leukaemia | 11 opts
- other: Natalia, a 4-year-old girl, presents to her general practitioner. This is her second bad episode of tonsillitis in the same month. She is tired and looks pale and has a number of bruises on her lower legs. On examination | key D: Acute lymphoblastic leukaemia | 5 opts
- dice 0.79, key text same true, key letter moved true, fuller book, other lacks: Bone tumour; Burkitt lymphoma; Henoch–Schönlein purpura; Immune thrombocytopenia purpura; Langerhans cell histiocytosis; Retinoblastoma (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b22-9-2` vs `pedhd-mal-10` (peds)
- book: Below is a list (A–K) of possible diagnoses. For each of the clinical scenarios, select the most likely diagnosis. Each option may be used once, more than once, or not at all. Angel, a 2-year-old boy, presents to his gen | key undefined: Wilms tumour (nephroblastoma) | 11 opts
- other: Angel, a 2-year-old boy, presents to his general practitioner with an abdominal mass noticed by his mother on dressing him. He has no other medical problems and is not on any medication. His stool pattern is regular. He  | key C: Wilms tumour (nephroblastoma) | 5 opts
- dice 0.84, key text same true, key letter moved true, fuller book, other lacks: Bone tumour; Burkitt lymphoma; Henoch–Schönlein purpura; Immune thrombocytopenia purpura; Langerhans cell histiocytosis; Retinoblastoma (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b22-9-3` vs `pedhd-mal-11` (peds)
- book: Below is a list (A–K) of possible diagnoses. For each of the clinical scenarios, select the most likely diagnosis. Each option may be used once, more than once, or not at all. Kay, a 3-year-old girl, presents to the Paed | key I: Neuroblastoma | 11 opts
- other: Kay, a 3-year-old girl, presents to the Paediatric Assessment Unit as her mother is worried she is pale, tired and ‘not quite right’. She has also lost 2 kg of weight in the last month. On examination the child looks unw | key A: Neuroblastoma | 5 opts
- dice 0.82, key text same true, key letter moved true, fuller book, other lacks: Bone tumour; Burkitt lymphoma; Henoch–Schönlein purpura; Immune thrombocytopenia purpura; Langerhans cell histiocytosis; Retinoblastoma (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b22-9-4` vs `pedhd-mal-12` (peds)
- book: Below is a list (A–K) of possible diagnoses. For each of the clinical scenarios, select the most likely diagnosis. Each option may be used once, more than once, or not at all. Douglas, a 7-year-old boy, visits his genera | key C: Brain tumour | 11 opts
- other: Douglas, a 7-year-old boy, visits his general practitioner with his mother. He has been getting headaches over the last 3–5 weeks which have increased in intensity. These have woken him from sleep. His mother reports tha | key B: Brain tumour | 5 opts
- dice 0.87, key text same true, key letter moved true, fuller book, other lacks: Bone tumour; Burkitt lymphoma; Henoch–Schönlein purpura; Immune thrombocytopenia purpura; Langerhans cell histiocytosis; Retinoblastoma (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

## Book chapter 23 Haematological disorders

### SAME `pedsa-b23-1` vs `pedep2-hem-22` (peds.ep2)
- book: Tia is a 4-year-old Caucasian girl. She is referred to the paediatric ward by her general practitioner as her mother noted that she had a yellow tinge to her eyes since developing an upper respiratory tract infection. Sh | key C: Hereditary spherocytosis | 5 opts
- other: Tia is a 4-year-old Caucasian girl referred to the paediatric ward by her general practitioner because her mother noticed a yellow tinge to her eyes after an upper respiratory tract infection. She is otherwise well and h | key C: Hereditary spherocytosis | 5 opts
- dice 0.88, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b23-1` vs `pedep2-hem-61` (peds.ep2)
- book: Tia is a 4-year-old Caucasian girl. She is referred to the paediatric ward by her general practitioner as her mother noted that she had a yellow tinge to her eyes since developing an upper respiratory tract infection. Sh | key C: Hereditary spherocytosis | 5 opts
- other: Tia is a 4-year-old girl. She is referred to the pediatric ward by her general practitioner as her mother noted that she had a yellow tinge to her eyes since developing an upper respiratory tract infection. She is well i | key C: Hereditary spherocytosis | 5 opts
- dice 0.91, key text same true, key letter moved false, fuller other, other lacks: Sickle cell disease (keyed option kept: true)
- why: Read: same blood-count case, keyed Hereditary spherocytosis; live printing shows Hb 6mg/dl and counts as 8000/ml, 255,000/ml where book has Hb 60 g/L, 8 x10^9/L (units differ, live printing looks faulty)

### SAME `pedsa-b23-1` vs `pedhd-haem-1` (peds)
- book: Tia is a 4-year-old Caucasian girl. She is referred to the paediatric ward by her general practitioner as her mother noted that she had a yellow tinge to her eyes since developing an upper respiratory tract infection. Sh | key C: Hereditary spherocytosis | 5 opts
- other: Tia is a 4-year-old Caucasian girl. She is referred to the paediatric ward by her general practitioner as her mother noted that she had a yellow tinge to her eyes since developing an upper respiratory tract infection. Sh | key C: Hereditary spherocytosis | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b23-2` vs `pedep2-hem-23` (peds.ep2)
- book: Ahmed, whose parents come from Egypt, is a 10-year-old boy who presents to his general practitioner. This evening he is more lethargic than usual and his urine has become dark in colour. There is no history of excessive  | key C: G6PD (Glucose-6-phosphate dehydrogenase) deficiency | 5 opts
- other: Ahmed, a 10-year-old boy of Egyptian descent, presents to his general practitioner. This evening, he is more lethargic than usual, and his urine has turned dark. There is no history of excessive exercise or beetroot cons | key C: G6PD (Glucose-6-phosphate dehydrogenase) deficiency | 5 opts
- dice 0.76, key text same true, key letter moved false, fuller other, other lacks: Acute lymphatic leukaemia (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b23-2` vs `pedhd-haem-2` (peds)
- book: Ahmed, whose parents come from Egypt, is a 10-year-old boy who presents to his general practitioner. This evening he is more lethargic than usual and his urine has become dark in colour. There is no history of excessive  | key C: G6PD (Glucose-6-phosphate dehydrogenase) deficiency | 5 opts
- other: Ahmed, whose parents come from Egypt, is a 10-year-old boy who presents to his general practitioner. This evening he is more lethargic than usual and his urine has become dark in colour. There is no history of excessive  | key C: G6PD (Glucose-6-phosphate dehydrogenase) deficiency | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b23-3` vs `pedep2-hem-24` (peds.ep2)
- book: Tom is a 5-year-old boy who presents to hospital with a recent history of bruising easily. Two weeks ago he had an upper respiratory tract infection which resolved spontaneously. On examination today he is afebrile but h | key C: Immune thrombocytopenic purpura | 5 opts
- other: Tom is a 5-year-old boy presenting with a recent history of easy bruising. Two weeks ago, he had an upper respiratory tract infection that resolved spontaneously. Today, he is afebrile but has many widespread bruises and | key C: Immune thrombocytopenic purpura | 5 opts
- dice 0.91, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b23-3` vs `pedhd-haem-3` (peds)
- book: Tom is a 5-year-old boy who presents to hospital with a recent history of bruising easily. Two weeks ago he had an upper respiratory tract infection which resolved spontaneously. On examination today he is afebrile but h | key C: Immune thrombocytopenic purpura | 5 opts
- other: Tom is a 5-year-old boy who presents to hospital with a recent history of bruising easily. Two weeks ago he had an upper respiratory tract infection which resolved spontaneously. On examination today he is afebrile but h | key C: Immune thrombocytopenic purpura | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b23-4` vs `pedep2-hem-25` (peds.ep2)
- book: Amir is a 2-year-old Bangladeshi boy who has eczema. His general practitioner is undertaking a routine review of his care and notices that Amir is pale. The remainder of his examination is normal. His mother reports that | key C: Iron supplements | 5 opts
- other: Amir is a 2-year-old Bangladeshi boy with eczema. During a routine review, his general practitioner notices he is pale. The rest of the examination is normal. His mother reports that he has been eating bits of carpet rec | key C: Iron supplements | 5 opts
- dice 0.87, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b23-4` vs `pedhd-haem-4` (peds)
- book: Amir is a 2-year-old Bangladeshi boy who has eczema. His general practitioner is undertaking a routine review of his care and notices that Amir is pale. The remainder of his examination is normal. His mother reports that | key C: Iron supplements | 5 opts
- other: Amir is a 2-year-old Bangladeshi boy who has eczema. His general practitioner is undertaking a routine review of his care and notices that Amir is pale. The remainder of his examination is normal. His mother reports that | key C: Iron supplements | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b23-5` vs `pedep2-hem-26` (peds.ep2)
- book: Joseph, a 2-year-old black Caribbean boy from London, is admitted to hospital for an elective repair of an inguinal hernia. He has no other medical problems. His pre-operative assessment reveals the following results and | key C: Iron-deficiency anaemia | 5 opts
- other: Joseph, a 2-year-old Black Caribbean boy from London, is admitted to the hospital for elective inguinal hernia repair. He has no other medical problems. His pre-operative assessment reveals the following results: Hb (hem | key C: Iron-deficiency anemia | 4 opts
- dice 0.88, key text same true, key letter moved false, fuller book, other lacks: Sickle cell trait (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b23-5` vs `pedep2-hem-87` (peds.ep2)
- book: Joseph, a 2-year-old black Caribbean boy from London, is admitted to hospital for an elective repair of an inguinal hernia. He has no other medical problems. His pre-operative assessment reveals the following results and | key C: Iron-deficiency anaemia | 5 opts
- other: A 2y old boy is admitted to hospital for an elective repair of an inguinal hernia. he has no other medical problems. His preoperative assessment reveals the following results: Hb: 8.6 g/dl, MCV: 58 fl (normal: 75-87 fl), | key C: Iron-deficiency anemia | 5 opts
- dice 0.65, key text same true, key letter moved false, fuller other, other lacks: Normal variation for age and ethnicity (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b23-5` vs `pedhd-haem-5` (peds)
- book: Joseph, a 2-year-old black Caribbean boy from London, is admitted to hospital for an elective repair of an inguinal hernia. He has no other medical problems. His pre-operative assessment reveals the following results and | key C: Iron-deficiency anaemia | 5 opts
- other: Joseph, a 2-year-old black Caribbean boy from London, is admitted to hospital for an elective repair of an inguinal hernia. He has no other medical problems. His pre-operative assessment reveals the following results and | key C: Iron-deficiency anaemia | 5 opts
- dice 0.93, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b23-6` vs `pedep2-hem-27` (peds.ep2)
- book: Peter, aged 9 months, presents to the Emergency Department. His family moved to the UK when Peter was 6 weeks old. He has a 6 hour history of pain in his fingers. He has had an upper respiratory tract infection for the p | key E: Sickle cell disease | 5 opts
- other: Peter, aged 9 months, presents to the Emergency Department. His family moved to the UK when he was 6 weeks old. He has had pain in his fingers for the past 6 hours and an upper respiratory tract infection for the last 24 | key E: Sickle cell disease | 5 opts
- dice 0.87, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b23-6` vs `pedhd-haem-6` (peds)
- book: Peter, aged 9 months, presents to the Emergency Department. His family moved to the UK when Peter was 6 weeks old. He has a 6 hour history of pain in his fingers. He has had an upper respiratory tract infection for the p | key E: Sickle cell disease | 5 opts
- other: Peter, aged 9 months, presents to the Emergency Department. His family moved to the UK when Peter was 6 weeks old. He has a 6 hour history of pain in his fingers. He has had an upper respiratory tract infection for the p | key E: Sickle cell disease | 5 opts
- dice 0.95, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b23-7-1` vs `pedep2-hem-28` (peds.ep2)
- book: Below is a list of possible diagnoses (A–R). For each of the following patients with haematological problems select the most likely diagnosis. Each option may be used once, more than once, or not at all. Shlomo is a 9-da | key H: Haemophilia A | 18 opts
- other: Shlomo is a 9-day-old Jewish boy born in the UK. He underwent religious circumcision yesterday, but the wound has not stopped bleeding. On examination, he is pale and tachycardic. There is oozing of blood from the circum | key C: Hemophilia A | 4 opts
- dice 0.68, key text same true, key letter moved true, fuller book, other lacks: Acute lymphoblastic leukaemia; Acute myeloid leukaemia; α-Thalassaemia trait; β-Thalassaemia trait; Glucose-6-phosphate dehydrogenase deficiency; Immune thrombocytopenic purpura; Infectious mononucleosis; Iron deficiency anaemia; Meningococcal disease; Normal variant; Sickle cell disease; Vitamin D deficiency; Vitamin K deficiency (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b23-7-1` vs `pedhd-haem-7` (peds)
- book: Below is a list of possible diagnoses (A–R). For each of the following patients with haematological problems select the most likely diagnosis. Each option may be used once, more than once, or not at all. Shlomo is a 9-da | key H: Haemophilia A | 18 opts
- other: Shlomo is a 9-day-old Jewish boy who was born in the UK. He had a religious circumcision yesterday, but the wound will not stop bleeding. On examination he is pale and has tachycardia. There is oozing of blood around the | key C: Haemophilia A | 5 opts
- dice 0.9, key text same true, key letter moved true, fuller book, other lacks: Acute lymphoblastic leukaemia; Acute myeloid leukaemia; α-Thalassaemia trait; β-Thalassaemia trait; Glucose-6-phosphate dehydrogenase deficiency; Infectious mononucleosis; Iron deficiency anaemia; Meningococcal disease; Normal variant; Sickle cell disease; Vitamin D deficiency; Vitamin K deficiency (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b23-7-2` vs `pedep2-hem-29` (peds.ep2)
- book: Below is a list of possible diagnoses (A–R). For each of the following patients with haematological problems select the most likely diagnosis. Each option may be used once, more than once, or not at all. Charlie, aged 5  | key undefined: von Willebrand disease | 18 opts
- other: Charlie, aged 5 years, has recurrent nosebleeds, the most recent of which lasted 1.5 hours. He has no other medical problems. On examination, he is pale, with normal findings otherwise. Investigations reveal: Hb (hemoglo | key D: von Willebrand disease | 4 opts
- dice 0.73, key text same true, key letter moved true, fuller book, other lacks: Acute lymphoblastic leukaemia; Acute myeloid leukaemia; α-Thalassaemia major; α-Thalassaemia trait; β-Thalassaemia major; β-Thalassaemia trait; Glucose-6-phosphate dehydrogenase deficiency; Haemophilia A; Infectious mononucleosis; Iron deficiency anaemia; Meningococcal disease; Normal variant; Sickle cell disease (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b23-7-2` vs `pedhd-haem-8` (peds)
- book: Below is a list of possible diagnoses (A–R). For each of the following patients with haematological problems select the most likely diagnosis. Each option may be used once, more than once, or not at all. Charlie, aged 5  | key undefined: von Willebrand disease | 18 opts
- other: Charlie, aged 5 years, is troubled by recurrent nose bleeds, the last of which took 1.5 hours to stop. He has no other medical problems. His examination is normal except for pale conjunctivae. Investigation reveals:
• Hb | key D: von Willebrand disease | 5 opts
- dice 0.9, key text same true, key letter moved true, fuller book, other lacks: Acute lymphoblastic leukaemia; Acute myeloid leukaemia; α-Thalassaemia major; α-Thalassaemia trait; β-Thalassaemia major; β-Thalassaemia trait; Glucose-6-phosphate dehydrogenase deficiency; Infectious mononucleosis; Iron deficiency anaemia; Meningococcal disease; Normal variant; Sickle cell disease (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b23-7-3` vs `pedep2-hem-30` (peds.ep2)
- book: Below is a list of possible diagnoses (A–R). For each of the following patients with haematological problems select the most likely diagnosis. Each option may be used once, more than once, or not at all. Melissa is a 3-y | key A: Acute lymphoblastic leukaemia | 18 opts
- other: Melissa is a 3-year-old girl. She presents to her general practitioner with a 3–4-week history of lethargy and weight loss. On examination, she is pale and has widespread bruising. She has no other medical history and is | key A: Acute lymphoblastic leukaemia | 5 opts
- dice 0.8, key text same true, key letter moved false, fuller book, other lacks: α-Thalassaemia major; α-Thalassaemia trait; β-Thalassaemia major; β-Thalassaemia trait; Glucose-6-phosphate dehydrogenase deficiency; Haemophilia A; Immune thrombocytopenic purpura; Infectious mononucleosis; Liver disease; Meningococcal disease; Normal variant; Sickle cell disease; Vitamin D deficiency; Vitamin K deficiency; von Willebrand disease (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b23-7-3` vs `pedhd-haem-9` (peds)
- book: Below is a list of possible diagnoses (A–R). For each of the following patients with haematological problems select the most likely diagnosis. Each option may be used once, more than once, or not at all. Melissa is a 3-y | key A: Acute lymphoblastic leukaemia | 18 opts
- other: Melissa is a 3-year-old girl. She presents to her general practitioner with a 3–4 week history of lethargy and weight loss. On examination she is pale and has widespread bruising. She has no other medical history and is  | key A: Acute lymphoblastic leukaemia | 5 opts
- dice 0.86, key text same true, key letter moved false, fuller book, other lacks: α-Thalassaemia trait; β-Thalassaemia trait; Glucose-6-phosphate dehydrogenase deficiency; Haemophilia A; Immune thrombocytopenic purpura; Infectious mononucleosis; Liver disease; Meningococcal disease; Normal variant; Sickle cell disease; Vitamin D deficiency; Vitamin K deficiency; von Willebrand disease (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b23-7-4` vs `pedep2-hem-31` (peds.ep2)
- book: Below is a list of possible diagnoses (A–R). For each of the following patients with haematological problems select the most likely diagnosis. Each option may be used once, more than once, or not at all. Xevera is a 7-ye | key F: β-Thalassaemia trait | 18 opts
- other: Xevera is a 7-year-old Greek boy who is seen by a paediatrician for constipation and is noted to look pale. Hematological testing reveals that he is anaemic with an Hb of 100 g/L (both MCV and MCHC are low). He is given  | key B: Beta-thalassaemia trait | 5 opts
- dice 0.8, key text same false, key letter moved true, fuller book, other lacks: Acute lymphoblastic leukaemia; Acute myeloid leukaemia; α-Thalassaemia trait; β-Thalassaemia trait; Glucose-6-phosphate dehydrogenase deficiency; Haemophilia A; Immune thrombocytopenic purpura; Infectious mononucleosis; Liver disease; Meningococcal disease; Normal variant; Sickle cell disease; Vitamin D deficiency; Vitamin K deficiency; von Willebrand disease (keyed option kept: false)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b23-7-4` vs `pedhd-haem-10` (peds)
- book: Below is a list of possible diagnoses (A–R). For each of the following patients with haematological problems select the most likely diagnosis. Each option may be used once, more than once, or not at all. Xevera is a 7-ye | key F: β-Thalassaemia trait | 18 opts
- other: Xevera is a 7-year-old Greek boy who is seen by a paediatrician for constipation and was noted to look pale. Haematological testing reveals that he is anaemic with Hb of 100 g/L (both MCV and MCHC are low). He is given a | key B: β-Thalassaemia trait | 5 opts
- dice 0.81, key text same true, key letter moved true, fuller book, other lacks: Acute lymphoblastic leukaemia; Acute myeloid leukaemia; Glucose-6-phosphate dehydrogenase deficiency; Haemophilia A; Immune thrombocytopenic purpura; Infectious mononucleosis; Liver disease; Meningococcal disease; Normal variant; Sickle cell disease; Vitamin D deficiency; Vitamin K deficiency; von Willebrand disease (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b23-8-1` vs `pedep2-hem-32` (peds.ep2)
- book: Below is a list (A–K) of treatment options. For each of the following patients with haematological problems select the appropriate treatment. Each option may be used once, more than once, or not at all. Ahmed is a 4-week | key undefined: Vitamin K | 11 opts
- other: Ahmed is a 4-week-old infant of Somali refugees who have just fled to the UK. He was circumcised yesterday, but the wound will not stop bleeding. On examination, there is oozing of blood around the circumcision wound. In | key A: Vitamin K | 4 opts
- dice 0.7, key text same true, key letter moved true, fuller book, other lacks: Chemotherapy; Desmopressin; Folic acid supplementation; Intravenous antibiotics; No action required at present; Oral antibiotics; Recombinant factor VIII (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b23-8-1` vs `pedhd-haem-11` (peds)
- book: Below is a list (A–K) of treatment options. For each of the following patients with haematological problems select the appropriate treatment. Each option may be used once, more than once, or not at all. Ahmed is a 4-week | key undefined: Vitamin K | 11 opts
- other: Ahmed is a 4-week-old infant of Somali refugees who have just fled to the UK. He was circumcised yesterday, but the wound will not stop bleeding. On examination there is oozing of blood around the circumcision wound. Inv | key A: Vitamin K | 5 opts
- dice 0.87, key text same true, key letter moved true, fuller book, other lacks: Desmopressin; Folic acid supplementation; Intravenous antibiotics; No action required at present; Oral antibiotics; Recombinant factor VIII (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b23-8-2` vs `pedep2-hem-33` (peds.ep2)
- book: Below is a list (A–K) of treatment options. For each of the following patients with haematological problems select the appropriate treatment. Each option may be used once, more than once, or not at all. Lola is an 8-mont | key A: Blood transfusion | 11 opts
- other: Lola is an 8-month-old girl from Cyprus. She is referred to the paediatric department because she is clinically anaemic and has faltering growth. Upon examination, you find that she has a large liver and spleen. Electrop | key C: Blood transfusion | 5 opts
- dice 0.75, key text same true, key letter moved true, fuller book, other lacks: Desmopressin; Folic acid supplementation; Intravenous antibiotics; No action required at present; Oral antibiotics; Recombinant factor VIII (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b23-8-2` vs `pedhd-haem-12` (peds)
- book: Below is a list (A–K) of treatment options. For each of the following patients with haematological problems select the appropriate treatment. Each option may be used once, more than once, or not at all. Lola is an 8-mont | key A: Blood transfusion | 11 opts
- other: Lola is an 8-month-old girl from Cyprus. She is referred to the paediatric department because she is clinically anaemic and has faltering growth. On examination you find that she has a large liver and spleen. Electrophor | key C: Blood transfusion | 5 opts
- dice 0.76, key text same true, key letter moved true, fuller book, other lacks: Desmopressin; Folic acid supplementation; Intravenous antibiotics; No action required at present; Oral antibiotics; Recombinant factor VIII (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b23-8-3` vs `pedep2-hem-34` (peds.ep2)
- book: Below is a list (A–K) of treatment options. For each of the following patients with haematological problems select the appropriate treatment. Each option may be used once, more than once, or not at all. George is a 3-mon | key I: Recombinant factor VIII | 11 opts
- other: George is a 3-month-old boy. He presents to the paediatric ward with a swollen leg. He had an immunization yesterday and there is now a large swelling at the injection site. Hematological investigation reveals: Hb: 102 g | key D: Recombinant factor VIII | 4 opts
- dice 0.8, key text same true, key letter moved true, fuller book, other lacks: Chemotherapy; Desmopressin; Intravenous antibiotics; Iron supplementation; No action required at present; Oral antibiotics (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b23-8-3` vs `pedhd-haem-13` (peds)
- book: Below is a list (A–K) of treatment options. For each of the following patients with haematological problems select the appropriate treatment. Each option may be used once, more than once, or not at all. George is a 3-mon | key I: Recombinant factor VIII | 11 opts
- other: George is a 3-month-old boy. He presents to the paediatric ward with a swollen leg. He had an immunization yesterday and there is now a large swelling at the injection site. Haematological investigation reveals:
• Hb (ha | key D: Recombinant factor IIIV | 5 opts
- dice 0.89, key text same true, key letter moved true, fuller book, other lacks: Chemotherapy; Desmopressin; Intravenous antibiotics; Iron supplementation; Oral antibiotics (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b23-8-4` vs `pedep2-hem-35` (peds.ep2)
- book: Below is a list (A–K) of treatment options. For each of the following patients with haematological problems select the appropriate treatment. Each option may be used once, more than once, or not at all. Lizzie is a 9-yea | key G: No action required at present | 11 opts
- other: Lizzie is a 9-year-old girl who presents to the paediatric clinic. She is known to have hereditary spherocytosis. Her mother is concerned that she is very pale. Three weeks ago, Lizzie had an upper respiratory tract infe | key E: No action required at present | 5 opts
- dice 0.88, key text same true, key letter moved true, fuller book, other lacks: Chemotherapy; Desmopressin; Intravenous antibiotics; Iron supplementation; Oral antibiotics (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b23-8-4` vs `pedhd-haem-14` (peds)
- book: Below is a list (A–K) of treatment options. For each of the following patients with haematological problems select the appropriate treatment. Each option may be used once, more than once, or not at all. Lizzie is a 9-yea | key G: No action required at present | 11 opts
- other: Lizzie is a 9-year-old girl who presents to the paediatric clinic. She is known to have hereditary spherocytosis. Her mother is concerned that she is very pale. Three weeks ago Lizzie had an upper respiratory tract infec | key E: No action required at present | 5 opts
- dice 0.88, key text same true, key letter moved true, fuller book, other lacks: Chemotherapy; Desmopressin; Intravenous antibiotics; Iron supplementation; Oral antibiotics (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b23-8-5` vs `pedep2-hem-36` (peds.ep2)
- book: Below is a list (A–K) of treatment options. For each of the following patients with haematological problems select the appropriate treatment. Each option may be used once, more than once, or not at all. Angie is 6 weeks  | key G: No action required at present | 11 opts
- other: Angie is 6 weeks old. She was jaundiced at 24 hours of age when her hemoglobin (Hb) was checked and found to be 150 g/L. At 2 months of age, she presents with an upper respiratory tract infection. The full blood count is | key E: No action required at present | 5 opts
- dice 0.78, key text same true, key letter moved true, fuller book, other lacks: Chemotherapy; Desmopressin; Intravenous antibiotics; Iron supplementation; Oral antibiotics (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b23-8-5` vs `pedhd-haem-15` (peds)
- book: Below is a list (A–K) of treatment options. For each of the following patients with haematological problems select the appropriate treatment. Each option may be used once, more than once, or not at all. Angie is 6 weeks  | key G: No action required at present | 11 opts
- other: Angie is 6 weeks old. She was jaundiced at 24 hours of age, when her haemoglobin (Hb) was checked and was 150 g/L. At 2 months of age she presents with an upper respiratory tract infection. The full blood count is repeat | key E: No action required at present | 5 opts
- dice 0.8, key text same true, key letter moved true, fuller book, other lacks: Chemotherapy; Desmopressin; Intravenous antibiotics; Iron supplementation; Oral antibiotics (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

## Book chapter 26 Diabetes and endocrinology

### SAME `pedsa-b26-1` vs `pedep2-end-1` (peds.ep2)
- book: Ellie, a 7-year-old girl, is newly diagnosed with diabetes mellitus. She has been drinking lots of fluid and has had to pass urine frequently. She has a markedly raised blood glucose (20 mmol/L) and heavy glycosuria. Whi | key E: There is autoimmune pancreatic β-cell damage | 5 opts
- other: Ellie, a 7-year-old girl, is newly diagnosed with diabetes mellitus. She has been drinking lots of fluids and has had to pass urine frequently. She has a markedly raised blood glucose (20 mmol/L) and heavy glycosuria. Wh | key E: There is autoimmune pancreatic β-cell damage | 5 opts
- dice 0.97, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b26-1` vs `pedhd-endo-1` (peds)
- book: Ellie, a 7-year-old girl, is newly diagnosed with diabetes mellitus. She has been drinking lots of fluid and has had to pass urine frequently. She has a markedly raised blood glucose (20 mmol/L) and heavy glycosuria. Whi | key E: There is autoimmune pancreatic β-cell damage | 5 opts
- other: Ellie, a 7-year-old girl, is newly diagnosed with diabetes mellitus. She has been drinking lots of fluid and has had to pass urine frequently. She has a markedly raised blood glucose (20 mmol/L) and heavy glycosuria. Whi | key E: There is autoimmune pancreatic β-cell damage | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b26-10` vs `pedep2-end-7` (peds.ep2)
- book: A newborn baby has recently been delivered. The midwife requests an urgent paediatric review of the baby because she cannot tell if the baby is male or female (Fig. 26.3). The parents are asking what sex their baby is. W | key B: You are unable to tell right now and a detailed assessment of the baby including scans and blood tests will be needed before a specialist can tell them | 5 opts
- other: A newborn baby has recently been delivered. The midwife requests an urgent paediatric review because she cannot determine if the baby is male or female. The parents are asking what sex their baby is. What should you tell | key B: You are unable to tell right now, and a detailed assessment, including scans and blood tests, will be needed before a specialist can tell them. | 5 opts
- dice 0.9, key text same true, key letter moved false, fuller other, other lacks: You are unable to tell right now but will be able to assign a sex as soon as you get the baby’s chromosomes back; You think it is likely to be a boy so tell them the child should be named as a male on the birth certificate pending the results (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b26-10` vs `pedhd-endo-7` (peds)
- book: A newborn baby has recently been delivered. The midwife requests an urgent paediatric review of the baby because she cannot tell if the baby is male or female (Fig. 26.3). The parents are asking what sex their baby is. W | key B: You are unable to tell right now and a detailed assessment of the baby including scans and blood tests will be needed before a specialist can tell them | 5 opts
- other: A newborn baby has recently been delivered. The midwife requests an urgent paediatric review of the baby because she cannot tell if the baby is male or female (as shown in the opposite figure). The parents are asking wha | key B: You are unable to tell right now and a detailed assessment of the baby including scans and blood tests will be needed before a specialist can tell them | 5 opts
- dice 0.91, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b26-11` vs `pedep2-end-8` (peds.ep2)
- book: A baby is born with a disorder of sexual differentiation. Congenital adrenal hyperplasia is suspected. What blood result would confirm the diagnosis? Select one answer only. | key D: A markedly raised plasma 17α-hydroxyprogesterone | 5 opts
- other: A baby is born with a disorder of sexual differentiation. Congenital adrenal hyperplasia is suspected. What blood result would confirm the diagnosis? | key D: Markedly raised plasma 17α-hydroxyprogesterone | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b26-11` vs `pedhd-endo-8` (peds)
- book: A baby is born with a disorder of sexual differentiation. Congenital adrenal hyperplasia is suspected. What blood result would confirm the diagnosis? Select one answer only. | key D: A markedly raised plasma 17α-hydroxyprogesterone | 5 opts
- other: A baby is born with a disorder of sexual differentiation. Congenital adrenal hyperplasia is suspected. What blood result would confirm the diagnosis? | key D: A markedly raised plasma 17α-hydroxyprogesterone | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b26-12-1` vs `pedep2-end-9` (peds.ep2)
- book: For each of the following scenarios chose the best course of action (A–K) to take immediately. Julie, aged 7 years, has diabetes mellitus. She is admitted to hospital as she has vomited on three occasions. She has a 2-da | key C: Fluid resuscitation with normal saline (0.9% sodium chloride) | 11 opts
- other: Julie, aged 7 years, has diabetes mellitus. She is admitted to the hospital after vomiting three times. She has a 2-day history of being unwell with mild fever, sore throat, and decreased appetite. Her blood glucose read | key D: Fluid resuscitation with normal saline (0.9%) | 5 opts
- dice 0.83, key text same false, key letter moved true, fuller book, other lacks: Buccal glucose gel; Diet therapy alone; Fluid resuscitation with normal saline (0.9% sodium chloride); Insulin infusion intravenously; Intramuscular (IM) glucagon; Intravenous antibiotics; Intravenous infusion of normal saline (0.9% sodium chloride); Intravenous sodium bicarbonate (keyed option kept: false)
- why: Read (keyed text paraphrased or identical): live twin is same case with same answer in other words, e.g. 3 years = 36 months, croup = laryngotracheobronchitis, EBV spelt out; live content contained in the book stem [confirmed-5.txt]

### SAME `pedsa-b26-12-1` vs `pedhd-endo-9` (peds)
- book: For each of the following scenarios chose the best course of action (A–K) to take immediately. Julie, aged 7 years, has diabetes mellitus. She is admitted to hospital as she has vomited on three occasions. She has a 2-da | key C: Fluid resuscitation with normal saline (0.9% sodium chloride) | 11 opts
- other: Julie, aged 7 years, has diabetes mellitus. She is admitted to hospital as she has vomited on three occasions. She has a 2-day history of being unwell with a mild fever, sore throat and decreased appetite. Her blood gluc | key D: Fluid resuscitation with normal saline (0.9% sodium chloride) | 5 opts
- dice 0.97, key text same true, key letter moved true, fuller book, other lacks: Buccal glucose gel; Diet therapy alone; Insulin infusion intravenously; Intramuscular (IM) glucagon; Intravenous antibiotics; Intravenous sodium bicarbonate (keyed option kept: true)
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical; key letter moves; other lacks 6 option(s)

### SAME `pedsa-b26-12-2` vs `pedep2-end-10` (peds.ep2)
- book: For each of the following scenarios chose the best course of action (A–K) to take immediately. Jon is 12 years old. His brother has diabetes. He has started to drink a lot of fluids and pass a lot of urine. He checked hi | key undefined: Subcutaneous insulin | 11 opts
- other: Jon is 12 years old. His brother has diabetes. He has started drinking a lot of fluids and passing a lot of urine. He checked his blood glucose on his brother’s glucometer, and it was 19 mmol/L. In the Emergency Departme | key C: Subcutaneous insulin | 5 opts
- dice 0.77, key text same true, key letter moved true, fuller book, other lacks: Buccal glucose gel; Diet therapy alone; Fluid resuscitation with normal saline (0.9% sodium chloride); Insulin infusion intravenously; Intramuscular (IM) glucagon; Intravenous antibiotics; Intravenous infusion of normal saline (0.9% sodium chloride); Intravenous sodium bicarbonate (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b26-12-2` vs `pedhd-endo-10` (peds)
- book: For each of the following scenarios chose the best course of action (A–K) to take immediately. Jon is 12 years old. His brother has diabetes. He has started to drink a lot of fluids and pass a lot of urine. He checked hi | key undefined: Subcutaneous insulin | 11 opts
- other: Jon is 12 years old. His brother has diabetes. He has started to drink a lot of fluids and pass a lot of urine. He checked his blood glucose on his brother’s glucometer. It was 19 mmol/L. When he arrives in the Emergency | key C: Subcutaneous insulin | 5 opts
- dice 0.97, key text same true, key letter moved true, fuller book, other lacks: Buccal glucose gel; Diet therapy alone; Insulin infusion intravenously; Intramuscular (IM) glucagon; Intravenous antibiotics; Intravenous sodium bicarbonate (keyed option kept: true)
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical; key letter moves; other lacks 6 option(s)

### SAME `pedsa-b26-12-3` vs `pedep2-end-11` (peds.ep2)
- book: For each of the following scenarios chose the best course of action (A–K) to take immediately. Harriet, a 5-year-old girl, is known to have diabetes mellitus type 1. She was only diagnosed 2 months ago and is on a basal  | key J: Oral glucose drink | 11 opts
- other: Harriet, a 5-year-old girl with type 1 diabetes mellitus (diagnosed 2 months ago), is on a basal-bolus insulin regimen. While playing in the garden, she suddenly becomes aggressive and pale. Her blood glucose is 3 mmol/L | key A: Oral glucose drink | 5 opts
- dice 0.61, key text same true, key letter moved true, fuller book, other lacks: Buccal glucose gel; Diet therapy alone; Fluid resuscitation with normal saline (0.9% sodium chloride); Insulin infusion intravenously; Intramuscular (IM) glucagon; Intravenous antibiotics; Intravenous infusion of normal saline (0.9% sodium chloride); Intravenous sodium bicarbonate (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b26-12-3` vs `pedep2-mf3-34` (peds.ep2)
- book: For each of the following scenarios chose the best course of action (A–K) to take immediately. Harriet, a 5-year-old girl, is known to have diabetes mellitus type 1. She was only diagnosed 2 months ago and is on a basal  | key J: Oral glucose drink | 11 opts
- other: A 5-year-old girl with type 1 diabetes mellitus diagnosed two months ago is running around the garden when her mother notices she suddenly becomes aggressive toward her brother and appears pale. Her blood glucose is 50 m | key D: Oral glucose drink | 5 opts
- dice 0.65, key text same true, key letter moved true, fuller book, other lacks: Buccal glucose gel; Diet therapy alone; Fluid resuscitation with normal saline (0.9% sodium chloride); Insulin infusion intravenously; Intravenous antibiotics; Intravenous sodium bicarbonate (keyed option kept: true)
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b26-12-3` vs `pedhd-endo-11` (peds)
- book: For each of the following scenarios chose the best course of action (A–K) to take immediately. Harriet, a 5-year-old girl, is known to have diabetes mellitus type 1. She was only diagnosed 2 months ago and is on a basal  | key J: Oral glucose drink | 11 opts
- other: Harriet, a 5-year-old girl, is known to have diabetes mellitus type 1. She was only diagnosed 2 months ago and is on a basal bolus regime of insulin. She is running around the garden at home when her mother notices she s | key A: Oral glucose drink | 5 opts
- dice 0.96, key text same true, key letter moved true, fuller book, other lacks: Buccal glucose gel; Diet therapy alone; Insulin infusion intravenously; Intramuscular (IM) glucagon; Intravenous antibiotics; Intravenous sodium bicarbonate (keyed option kept: true)
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical; key letter moves; other lacks 6 option(s)

### UNSURE `pedsa-b26-12-4` vs `pedep2-end-12` (peds.ep2)
- book: For each of the following scenarios chose the best course of action (A–K) to take immediately. Sophie, a 9-year-old girl with type 1 diabetes mellitus, develops a fever along with vomiting and diarrhoea. After 2 days her | key H: Intravenous infusion of normal saline (0.9% sodium chloride) | 11 opts
- other: Sophie, a 9-year-old girl with type 1 diabetes mellitus, develops fever with vomiting and diarrhea. After 2 days, her mother brings her to the pediatric unit. She is talking but clinically dehydrated. Vitals are stable.  | key B: Intravenous infusion of normal saline (0.9%) | 5 opts
- dice 0.54, key text same false, key letter moved true, fuller book, other lacks: Buccal glucose gel; Diet therapy alone; Fluid resuscitation with normal saline (0.9% sodium chloride); Insulin infusion intravenously; Intramuscular (IM) glucagon; Intravenous antibiotics; Intravenous infusion of normal saline (0.9% sodium chloride); Intravenous sodium bicarbonate (keyed option kept: false)
- why: keyed text differs, scenario alike

### SAME `pedsa-b26-12-4` vs `pedep2-mf2-26` (peds.ep2)
- book: For each of the following scenarios chose the best course of action (A–K) to take immediately. Sophie, a 9-year-old girl with type 1 diabetes mellitus, develops a fever along with vomiting and diarrhoea. After 2 days her | key H: Intravenous infusion of normal saline (0.9% sodium chloride) | 11 opts
- other: Sophie, a 9-year-old girl with type 1 diabetes mellitus, develops a fever along with vomiting and diarrhoea. After 2 days, her mother takes her to the local paediatric assessment unit as she continues to vomit. On examin | key B: Intravenous infusion of normal saline (0.9% sodium chloride) | 5 opts
- dice 0.96, key text same true, key letter moved true, fuller book, other lacks: Buccal glucose gel; Diet therapy alone; Insulin infusion intravenously; Intramuscular (IM) glucagon; Intravenous antibiotics; Intravenous sodium bicarbonate (keyed option kept: true)
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical; key letter moves; other lacks 6 option(s)

### SAME `pedsa-b26-12-4` vs `pedhd-endo-12` (peds)
- book: For each of the following scenarios chose the best course of action (A–K) to take immediately. Sophie, a 9-year-old girl with type 1 diabetes mellitus, develops a fever along with vomiting and diarrhoea. After 2 days her | key H: Intravenous infusion of normal saline (0.9% sodium chloride) | 11 opts
- other: Sophie, a 9-year-old girl with type 1 diabetes mellitus, develops a fever along with vomiting and diarrhoea. After 2 days her mother takes her to the local paediatric assessment unit as she continues to vomit. On examina | key B: Intravenous infusion of normal saline (0.9% sodium chloride) | 5 opts
- dice 0.96, key text same true, key letter moved true, fuller book, other lacks: Buccal glucose gel; Diet therapy alone; Insulin infusion intravenously; Intramuscular (IM) glucagon; Intravenous antibiotics; Intravenous sodium bicarbonate (keyed option kept: true)
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical; key letter moves; other lacks 6 option(s)

### SAME `pedsa-b26-2` vs `pedep2-end-2` (peds.ep2)
- book: James, aged 11 years, has type 1 diabetes mellitus. While playing football during the mid-morning break at a holiday camp, he suddenly feels faint. His classmates call the supervisor who finds him lying unresponsive in t | key D: Give buccal glucose gel | 5 opts
- other: James, aged 11 years, has type 1 diabetes mellitus. While playing football during the mid-morning break at a holiday camp, he suddenly feels faint. His classmates call the supervisor who finds him lying unresponsive in t | key D: Give buccal glucose gel | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b26-2` vs `pedhd-endo-2` (peds)
- book: James, aged 11 years, has type 1 diabetes mellitus. While playing football during the mid-morning break at a holiday camp, he suddenly feels faint. His classmates call the supervisor who finds him lying unresponsive in t | key D: Give buccal glucose gel | 5 opts
- other: James, aged 11 years, has type 1 diabetes mellitus. While playing football during the mid-morning break at a holiday camp, he suddenly feels faint. His classmates call the supervisor who finds him lying unresponsive in t | key D: Give buccal glucose gel | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b26-3` vs `pedep2-end-3` (peds.ep2)
- book: Catherine, aged 15 years, has had type 1 diabetes mellitus for 7 years. Her insulin regimen has remained unchanged for the last 7 months. Her HbA1C has increased from 58 mmol/mol (7.5%) to 90 mmol/mol (10.3%) (desired le | key E: Some of the blood glucose measurements are fictitious | 5 opts
- other: Catherine, aged 15 years, has had type 1 diabetes mellitus for 7 years. Her insulin regimen has remained unchanged for the last 7 months. Her HbA1c has increased from 58 mmol/mol (7.5%) to 90 mmol/mol (10.3%) (desired le | key E: Some of the blood glucose measurements are fictitious | 5 opts
- dice 0.96, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b26-3` vs `pedhd-endo-3` (peds)
- book: Catherine, aged 15 years, has had type 1 diabetes mellitus for 7 years. Her insulin regimen has remained unchanged for the last 7 months. Her HbA1C has increased from 58 mmol/mol (7.5%) to 90 mmol/mol (10.3%) (desired le | key E: Some of the blood glucose measurements are fictitious | 5 opts
- other: Catherine, aged 15 years, has had type 1 diabetes mellitus for 7 years. Her insulin regimen has remained unchanged for the last 7 months. Her HbA1C has increased from 58 mmol/mol (7.5%) to 90 mmol/mol (10.3%) (desired le | key E: Some of the blood glucose measurements are fictitious | 5 opts
- dice 0.92, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b26-4` vs `pedep2-end-4` (peds.ep2)
- book: Mohammed, a 12-year-old boy with type 1 diabetes mellitus, is reviewed in the outpatient clinic. In spite of maintaining good control of his diabetes, his height has remained static for 9 months. He says his appetite is  | key D: Hypothyroidism | 5 opts
- other: Mohammed, a 12-year-old boy with type 1 diabetes mellitus, is reviewed in the outpatient clinic. Despite maintaining good control of his diabetes, his height has remained static for 9 months. He says his appetite is norm | key D: Hypothyroidism | 4 opts
- dice 0.93, key text same true, key letter moved false, fuller book, other lacks: Inflammatory bowel disease (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b26-4` vs `pedhd-endo-4` (peds)
- book: Mohammed, a 12-year-old boy with type 1 diabetes mellitus, is reviewed in the outpatient clinic. In spite of maintaining good control of his diabetes, his height has remained static for 9 months. He says his appetite is  | key D: Hypothyroidism | 5 opts
- other: Mohammed, a 12-year-old boy with type 1 diabetes mellitus, is reviewed in the outpatient clinic. In spite of maintaining good control of his diabetes, his height has remained static for 9 months. He says his appetite is  | key D: Hypothyroidism | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b26-5` vs `pedep2-end-5` (peds.ep2)
- book: Zeinab, aged 15 years, has had 3 months of diarrhoea, weight loss and palpitations. You suspect hyperthyroidism. Which combination of thyroid function test results would confirm the diagnosis? Select one answer only. | key C: Low TSH and high T₄ levels | 5 opts
- other: Zeinab, aged 15 years, has had 3 months of diarrhea, weight loss, and palpitations. You suspect hyperthyroidism. Which combination of thyroid function test results would confirm the diagnosis? | key C: Low TSH and high T4 levels | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b26-5` vs `pedhd-endo-5` (peds)
- book: Zeinab, aged 15 years, has had 3 months of diarrhoea, weight loss and palpitations. You suspect hyperthyroidism. Which combination of thyroid function test results would confirm the diagnosis? Select one answer only. | key C: Low TSH and high T₄ levels | 5 opts
- other: Zeinab, aged 15 years, has had 3 months of diarrhoea, weight loss and palpitations. You suspect hyperthyroidism. Which combination of thyroid function test results would confirm the diagnosis? | key C: Low TSH and high T4 levels | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b26-9` vs `pedep2-end-6` (peds.ep2)
- book: George, a 2-week-old male infant, presents to the Emergency Department with vomiting, diarrhoea and poor feeding. Investigations show: • sodium 112 mmol/L (normal range 133–145 mmol/L) • potassium 6.8 mmol/L (normal rang | key B: Congenital adrenal hyperplasia | 5 opts
- other: George, a 2-week-old male infant, presents to the Emergency Department with vomiting, diarrhea, and poor feeding. Investigations show: Sodium: 112 mmol/L Potassium: 6.8 mmol/L Urea: 7.8 mmol/L Creatinine: 30 mmol/L Blood | key B: Congenital adrenal hyperplasia | 5 opts
- dice 0.72, key text same true, key letter moved false, fuller other
- why: Read: scenario and keyed answer text identical; stems differ by reword/preamble/shortening (contain-check on content words plus diff tokens read; doubtful ones read in full) [confirmed-2.txt]

### SAME `pedsa-b26-9` vs `pedhd-endo-6` (peds)
- book: George, a 2-week-old male infant, presents to the Emergency Department with vomiting, diarrhoea and poor feeding. Investigations show: • sodium 112 mmol/L (normal range 133–145 mmol/L) • potassium 6.8 mmol/L (normal rang | key B: Congenital adrenal hyperplasia | 5 opts
- other: George, a 2-week-old male infant, presents to the Emergency Department with vomiting, diarrhoea and poor feeding. Investigations show:
• sodium 112 mmol/L (normal range 133–145 mmol/L)
• potassium 6.8 mmol/L (normal rang | key B: Congenital adrenal hyperplasia | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

## Book chapter 29 Neurological disorders

### SAME `pedsa-b29-1` vs `pedhd-neuro-1` (peds)
- book: Annette is a 15-year-old girl who complains of worsening daily occipital headaches. They occur mainly in the mornings and sometimes wake her from sleep. Her mother says she is doing less well at school than previously an | key E: Raised intracranial pressure due to a space-occupying lesion | 5 opts
- other: Annette is a 15-year-old girl who complains of worsening daily occipital headaches. They occur mainly in the mornings and sometimes wake her from sleep. Her mother says she is doing less well at school than previously an | key E: Raised intracranial pressure due to a space-occupying lesion | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b29-10` vs `pedep2-neu-7` (peds.ep2)
- book: Gregor is born at term. It was a normal pregnancy though the mother did not have any antenatal ultrasound examinations as she was against medical procedures. He was born by vaginal delivery. Immediately, the midwife noti | key A: Folic acid | 5 opts
- other: Gregor was born at term. It was a normal pregnancy, though the mother did not have any antenatal ultrasound examinations as she was against medical procedures. He was born by vaginal delivery. Immediately, the midwife no | key A: Folic acid | 5 opts
- dice 0.93, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b29-10` vs `pedhd-neuro-7` (peds)
- book: Gregor is born at term. It was a normal pregnancy though the mother did not have any antenatal ultrasound examinations as she was against medical procedures. He was born by vaginal delivery. Immediately, the midwife noti | key A: Folic acid | 5 opts
- other: Gregor is born at term. It was a normal pregnancy though the mother did not have any antenatal ultrasound examinations as she was against medical procedures. He was born by vaginal delivery. Immediately, the midwife noti | key A: Folic acid | 5 opts
- dice 0.94, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b29-11` vs `pedep2-neu-8` (peds.ep2)
- book: Antonia, a 5-year-old girl, is seen by her general practitioner. Her mother and school teacher have noticed she has episodes where she stops her activity for a few seconds, stares blankly ahead and then resumes the activ | key B: Childhood absence epilepsy | 5 opts
- other: Antonia, a 5-year-old girl, is seen by her general practitioner. Her mother and school teacher have noticed she has episodes where she stops her activity for a few seconds, stares blankly ahead, and then resumes the acti | key B: Childhood absence epilepsy | 5 opts
- dice 0.94, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b29-11` vs `pedhd-neuro-8` (peds)
- book: Antonia, a 5-year-old girl, is seen by her general practitioner. Her mother and school teacher have noticed she has episodes where she stops her activity for a few seconds, stares blankly ahead and then resumes the activ | key B: Childhood absence epilepsy | 5 opts
- other: Antonia, a 5-year-old girl, is seen by her general practitioner. Her mother and school teacher have noticed she has episodes where she stops her activity for a few seconds, stares blankly ahead and then resumes the activ | key B: Childhood absence epilepsy | 5 opts
- dice 0.96, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b29-12` vs `pedep2-neu-9` (peds.ep2)
- book: Vijay is a 5-month-old infant who has been seen repeatedly by his general practitioner because of colic. His mother brings him to the Accident and Emergency department as he is having episodes of suddenly throwing his he | key E: Infantile spasms (West syndrome) | 5 opts
- other: Vijay is a 5-month-old infant who has been seen repeatedly by his general practitioner because of colic. His mother brings him to the Accident and Emergency Department as he is having episodes of suddenly throwing his he | key E: Infantile spasms (West syndrome) | 5 opts
- dice 0.97, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b29-12` vs `pedhd-neuro-9` (peds)
- book: Vijay is a 5-month-old infant who has been seen repeatedly by his general practitioner because of colic. His mother brings him to the Accident and Emergency department as he is having episodes of suddenly throwing his he | key E: Infantile spasms (West syndrome) | 5 opts
- other: Vijay is a 5-month-old infant who has been seen repeatedly by his general practitioner because of colic. His mother brings him to the Accident and Emergency department as he is having episodes of suddenly throwing his he | key E: Infantile spasms (West syndrome) | 5 opts
- dice 0.97, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b29-13-1` vs `pedep2-neu-10` (peds.ep2)
- book: For each of the scenarios (A–N) of children who have had a funny turn, pick the most likely diagnosis from the list. Each answer can be used once, more than once, or not at all. Emily, a normally fit and healthy 3-year-o | key undefined: Reflex asystolic syncope (reflex anoxic seizure) | 14 opts
- other: Emily, a normally fit and healthy 3-year-old girl, is rushed to the Emergency Department. She had been playing at the nursery and had banged her head against a door. Almost immediately, she went very pale and stiff and h | key D: Reflex asystolic syncope (reflex anoxic seizure) | 4 opts
- dice 0.87, key text same true, key letter moved true, fuller book, other lacks: Benign paroxysmal vertigo; Blue breath-holding spells (expiratory apnoea syncope); Cardiac arrhythmia; Hypoglycaemia; Intracranial haemorrhage; Narcolepsy; Night terrors; Non-epileptic attack disorder (pseudoseizure); Tic disorder; Tonic–clonic seizure (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-13-1` vs `pedhd-neuro-10` (peds)
- book: For each of the scenarios (A–N) of children who have had a funny turn, pick the most likely diagnosis from the list. Each answer can be used once, more than once, or not at all. Emily, a normally fit and healthy 3-year-o | key undefined: Reflex asystolic syncope (reflex anoxic seizure) | 14 opts
- other: Emily, a normally fit and healthy 3-year-old girl, is rushed to the Emergency Department. She had been playing at nursery and had banged her head against a door. Almost immediately she went very pale and stiff and had je | key D: Reflex asystolic syncope (reflex anoxic seizure) | 5 opts
- dice 0.88, key text same true, key letter moved true, fuller book, other lacks: Benign paroxysmal vertigo; Blue breath-holding spells (expiratory apnoea syncope); Hypoglycaemia; Intracranial haemorrhage; Narcolepsy; Night terrors; Non-epileptic attack disorder (pseudoseizure); Tic disorder; Tonic–clonic seizure (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-13-2` vs `pedep2-neu-11` (peds.ep2)
- book: For each of the scenarios (A–N) of children who have had a funny turn, pick the most likely diagnosis from the list. Each answer can be used once, more than once, or not at all. Jennifer, an 11-year-old girl, is brought  | key undefined: Syncope | 14 opts
- other: Jennifer, an 11-year-old girl, is brought to the Emergency Department after collapsing at school. Her teacher described her standing in assembly, becoming pale, and collapsing to the floor. She had a couple of jerking mo | key C: Syncope | 4 opts
- dice 0.89, key text same true, key letter moved true, fuller book, other lacks: Benign paroxysmal vertigo; Blue breath-holding spells (expiratory apnoea syncope); Cardiac arrhythmia; Hypoglycaemia; Intracranial haemorrhage; Narcolepsy; Night terrors; Non-epileptic attack disorder (pseudoseizure); Tic disorder; Tonic–clonic seizure (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-13-2` vs `pedhd-neuro-11` (peds)
- book: For each of the scenarios (A–N) of children who have had a funny turn, pick the most likely diagnosis from the list. Each answer can be used once, more than once, or not at all. Jennifer, an 11-year-old girl, is brought  | key undefined: Syncope | 14 opts
- other: Jennifer, an 11-year-old girl, is brought to the Emergency Department after collapsing at school. Her teacher described her standing in assembly, becoming pale and collapsing to the floor. She had a couple of jerking mov | key C: Syncope | 5 opts
- dice 0.89, key text same true, key letter moved true, fuller book, other lacks: Benign paroxysmal vertigo; Blue breath-holding spells (expiratory apnoea syncope); Hypoglycaemia; Intracranial haemorrhage; Narcolepsy; Night terrors; Non-epileptic attack disorder (pseudoseizure); Tic disorder; Tonic–clonic seizure (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-13-4` vs `pedep2-neu-12` (peds.ep2)
- book: For each of the scenarios (A–N) of children who have had a funny turn, pick the most likely diagnosis from the list. Each answer can be used once, more than once, or not at all. Rene is a lively 2-year-old boy who is see | key B: Blue breath-holding spells (expiratory apnoea syncope) | 14 opts
- other: Rene is a lively 2-year-old boy who is seen in the acute paediatric assessment unit, having had an episode of turning blue and collapsing. This is not the first time this has happened. He recovers quickly after these eve | key D: Blue breath-holding spells (expiratory apnoea syncope) | 4 opts
- dice 0.87, key text same true, key letter moved true, fuller book, other lacks: Benign paroxysmal vertigo; Cardiac arrhythmia; Hypoglycaemia; Intracranial haemorrhage; Night terrors; Non-epileptic attack disorder (pseudoseizure); Reflex asystolic syncope (reflex anoxic seizure); Syncope; Tic disorder; Tonic–clonic seizure (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-13-4` vs `pedhd-neuro-12` (peds)
- book: For each of the scenarios (A–N) of children who have had a funny turn, pick the most likely diagnosis from the list. Each answer can be used once, more than once, or not at all. Rene is a lively 2-year-old boy who is see | key B: Blue breath-holding spells (expiratory apnoea syncope) | 14 opts
- other: Rene is a lively 2-year-old boy who is seen in the acute paediatric assessment unit, having had an episode of turning blue and collapsing. This is not the first time that this has happened. He recovers quickly after thes | key D: Blue breath-holding spells (expiratory apnoea syncope) | 5 opts
- dice 0.87, key text same true, key letter moved true, fuller book, other lacks: Benign paroxysmal vertigo; Cardiac arrhythmia; Hypoglycaemia; Intracranial haemorrhage; Night terrors; Reflex asystolic syncope (reflex anoxic seizure); Syncope; Tic disorder; Tonic–clonic seizure (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-13-5` vs `pedep2-neu-13` (peds.ep2)
- book: For each of the scenarios (A–N) of children who have had a funny turn, pick the most likely diagnosis from the list. Each answer can be used once, more than once, or not at all. Dora is an 8-year-old girl who attends the | key D: Childhood absence epilepsy | 14 opts
- other: Dora is an 8-year-old girl who attends the outpatient department. Her mother is worried because she used to be top of the class, but is not doing well at school this year. Whilst in the clinic, you notice that Dora has a | key A: Childhood absence epilepsy | 5 opts
- dice 0.86, key text same true, key letter moved true, fuller book, other lacks: Benign paroxysmal vertigo; Blue breath-holding spells (expiratory apnoea syncope); Hypoglycaemia; Intracranial haemorrhage; Narcolepsy; Night terrors; Non-epileptic attack disorder (pseudoseizure); Tic disorder; Tonic–clonic seizure (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-13-5` vs `pedhd-neuro-13` (peds)
- book: For each of the scenarios (A–N) of children who have had a funny turn, pick the most likely diagnosis from the list. Each answer can be used once, more than once, or not at all. Dora is an 8-year-old girl who attends the | key D: Childhood absence epilepsy | 14 opts
- other: Dora is an 8-year-old girl who attends the outpatient department. Her mother is worried because she used to be top of the class, but is not doing as well at school this year. Whilst in clinic, you notice that Dora has an | key A: Childhood absence epilepsy | 5 opts
- dice 0.87, key text same true, key letter moved true, fuller book, other lacks: Benign paroxysmal vertigo; Blue breath-holding spells (expiratory apnoea syncope); Hypoglycaemia; Intracranial haemorrhage; Narcolepsy; Night terrors; Non-epileptic attack disorder (pseudoseizure); Tic disorder; Tonic–clonic seizure (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-14-1` vs `pedep2-neu-14` (peds.ep2)
- book: For each scenario below (A–H), choose the most likely diagnosis. Each diagnosis can be used once, more than once, or not at all. Damasco is a 6-year-old black boy who presents in the paediatric clinic. He has been referr | key A: Childhood Rolandic epilepsy (benign epilepsy with centro-temporal spikes) | 5 opts
- other: Damasco is a 6-year-old Black boy who presents in the paediatric clinic. He has been referred because his brother, with whom he shares a room, has woken his parents early in the morning on several occasions complaining t | key A: Childhood Rolandic epilepsy (benign epilepsy with centrotemporal spikes) | 4 opts
- dice 0.92, key text same true, key letter moved false, fuller book, other lacks: Infantile spasms (West syndrome) (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-14-1` vs `pedhd-neuro-14` (peds)
- book: For each scenario below (A–H), choose the most likely diagnosis. Each diagnosis can be used once, more than once, or not at all. Damasco is a 6-year-old black boy who presents in the paediatric clinic. He has been referr | key A: Childhood Rolandic epilepsy (benign epilepsy with centro-temporal spikes) | 5 opts
- other: Damasco is a 6-year-old black boy who presents in the paediatric clinic. He has been referred because his brother, with whom he shares a room, has woken his parents early in the morning on several occasions complaining t | key A: Childhood Rolandic epilepsy (benign epilepsy with centro-temporal spikes) | 5 opts
- dice 0.91, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-14-2` vs `pedep2-neu-15` (peds.ep2)
- book: For each scenario below (A–H), choose the most likely diagnosis. Each diagnosis can be used once, more than once, or not at all. Jude is a 14-year-old boy who is on treatment for generalised tonic–clonic and absence seiz | key C: Juvenile myoclonic epilepsy | 5 opts
- other: Jude is a 14-year-old boy who is on treatment for generalized tonic-clonic and absence seizures. He attends a routine clinic appointment complaining of regularly spilling his tea in the morning because his arm jerks invo | key C: Juvenile myoclonic epilepsy | 5 opts
- dice 0.84, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-14-2` vs `pedhd-neuro-15` (peds)
- book: For each scenario below (A–H), choose the most likely diagnosis. Each diagnosis can be used once, more than once, or not at all. Jude is a 14-year-old boy who is on treatment for generalised tonic–clonic and absence seiz | key C: Juvenile myoclonic epilepsy | 5 opts
- other: Jude is a 14-year-old boy who is on treatment for generalised tonic–clonic and absence seizures. He attends a routine clinic appointment complaining of regularly spilling his tea in the morning because his arm jerks invo | key C: Juvenile myoclonic epilepsy | 5 opts
- dice 0.85, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-14-3` vs `pedep2-neu-16` (peds.ep2)
- book: For each scenario below (A–H), choose the most likely diagnosis. Each diagnosis can be used once, more than once, or not at all. Andrew is a 5-year-old boy with severe learning difficulties who attends a special school.  | key D: Lennox–Gastaut syndrome | 5 opts
- other: Andrew is a 5-year-old boy with severe learning difficulties who attends a special school. He is seen in his review clinic. His epilepsy is difficult to control and he is on two different antiepileptic medications. He ha | key D: Lennox-Gastaut syndrome | 4 opts
- dice 0.88, key text same true, key letter moved false, fuller book, other lacks: Infantile spasms (West syndrome) (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-14-3` vs `pedhd-neuro-16` (peds)
- book: For each scenario below (A–H), choose the most likely diagnosis. Each diagnosis can be used once, more than once, or not at all. Andrew is a 5-year-old boy with severe learning difficulties who attends a special school.  | key D: Lennox–Gastaut syndrome | 5 opts
- other: Andrew is a 5-year-old boy with severe learning difficulties who attends a special school. He is seen in his review clinic. His epilepsy is difficult to control and he is on two different antiepileptic drugs. He has seve | key D: Lennox–Gastaut syndrome | 5 opts
- dice 0.89, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-15-1` vs `pedep2-neu-17` (peds.ep2)
- book: In the following clinical histories (A–I) choose the sign that is being described. Each finding can be used once, more than once, or not at all. Ahmed is a 5-year-old boy who presents to the outpatient clinic with weakne | key G: Gower’s sign | 9 opts
- other: Ahmed is a 5-year-old boy who presents to the outpatient clinic with weakness. His parents report that he finds it difficult to climb the stairs at home. This has been becoming progressively worse over the preceding 6–12 | key C: Gower's sign | 5 opts
- dice 0.89, key text same true, key letter moved true, fuller book, other lacks: Brudzinski’s sign; Clonus; Dyskinesia; Fogs’ sign (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-15-1` vs `pedhd-neuro-17` (peds)
- book: In the following clinical histories (A–I) choose the sign that is being described. Each finding can be used once, more than once, or not at all. Ahmed is a 5-year-old boy who presents to the outpatient clinic with weakne | key G: Gower’s sign | 9 opts
- other: Ahmed is a 5-year-old boy who presents to the outpatient clinic with weakness. His parents report that he finds it difficult to climb the stairs at home. This has been becoming progressively worse over the preceding 6–12 | key C: Gower’s sign | 5 opts
- dice 0.89, key text same true, key letter moved true, fuller book, other lacks: Brudzinski’s sign; Clonus; Dyskinesia; Fogs’ sign (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-15-2` vs `pedep2-neu-18` (peds.ep2)
- book: In the following clinical histories (A–I) choose the sign that is being described. Each finding can be used once, more than once, or not at all. Christopher attends outpatient clinic for his routine follow-up. He is a 3- | key A: Babinski’s sign | 9 opts
- other: Christopher attends an outpatient clinic for his routine follow-up. He is a 3-year-old boy who did not breathe at birth. Following resuscitation, he required intensive care for the first 5 days of life. He now has increa | key A: Babinski's sign | 5 opts
- dice 0.86, key text same true, key letter moved false, fuller book, other lacks: Brudzinski’s sign; Clonus; Dyskinesia; Fogs’ sign (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-15-2` vs `pedhd-neuro-18` (peds)
- book: In the following clinical histories (A–I) choose the sign that is being described. Each finding can be used once, more than once, or not at all. Christopher attends outpatient clinic for his routine follow-up. He is a 3- | key A: Babinski’s sign | 9 opts
- other: Christopher attends outpatient clinic for his routine follow-up. He is a 3-year-old boy who did not breathe at birth. Following resuscitation, he required intensive care for the first 5 days of life. He now has increased | key A: Babinski’s sign | 5 opts
- dice 0.89, key text same true, key letter moved false, fuller book, other lacks: Brudzinski’s sign; Clonus; Dyskinesia; Fogs’ sign (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-15-3` vs `pedep2-neu-19` (peds.ep2)
- book: In the following clinical histories (A–I) choose the sign that is being described. Each finding can be used once, more than once, or not at all. Sayeed is an 8-year-old Pakistani boy who has developed muscle weakness. Hi | key I: Romberg’s sign | 9 opts
- other: Sayeed is an 8-year-old Pakistani boy who has developed muscle weakness. His mother reports that he has poor coordination at home and school. His speech has also recently become slurred. His symptoms have gradually progr | key B: Romberg's sign | 4 opts
- dice 0.85, key text same true, key letter moved true, fuller book, other lacks: Brudzinski’s sign; Chorea; Clonus; Dyskinesia; Fogs’ sign (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-15-3` vs `pedhd-neuro-19` (peds)
- book: In the following clinical histories (A–I) choose the sign that is being described. Each finding can be used once, more than once, or not at all. Sayeed is an 8-year-old Pakistani boy who has developed muscle weakness. Hi | key I: Romberg’s sign | 9 opts
- other: Sayeed is an 8-year-old Pakistani boy who has developed muscle weakness. His mother reports that he has poor coordination at home and at school. His speech has also recently become slurred. His problems have come on slow | key B: Romberg’s sign | 5 opts
- dice 0.91, key text same true, key letter moved true, fuller book, other lacks: Brudzinski’s sign; Clonus; Dyskinesia; Fogs’ sign (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-15-5` vs `pedep2-neu-20` (peds.ep2)
- book: In the following clinical histories (A–I) choose the sign that is being described. Each finding can be used once, more than once, or not at all. Paolo is a 7-year-old boy who presents to the Accident and Emergency depart | key H: Kernig’s sign | 9 opts
- other: Paolo is a 7-year-old boy who presents to the Accident and Emergency Department with fever. His mother reports that he has had fever for the last 8 hours and that he is sleepy and prefers to stay in a dark room. He has n | key D: Kernig's sign | 5 opts
- dice 0.8, key text same true, key letter moved true, fuller book, other lacks: Brudzinski’s sign; Clonus; Dyskinesia; Fogs’ sign (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-15-5` vs `pedhd-neuro-20` (peds)
- book: In the following clinical histories (A–I) choose the sign that is being described. Each finding can be used once, more than once, or not at all. Paolo is a 7-year-old boy who presents to the Accident and Emergency depart | key H: Kernig’s sign | 9 opts
- other: Paolo is a 7-year-old boy who presents to the Accident and Emergency department with fever. His mother reports that this has been present for the last 8 hours and that he is sleepy and wants to sleep in a dark room. He h | key D: Kernig’s sign | 5 opts
- dice 0.9, key text same true, key letter moved true, fuller book, other lacks: Brudzinski’s sign; Clonus; Dyskinesia; Fogs’ sign (keyed option kept: true)
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-4` vs `pedep2-neu-2` (peds.ep2)
- book: Angelo, a 15-month-old boy, had been unwell with a runny nose and cough for a day when his father brings him to the Emergency Department. At lunch he suddenly became stiff, his eyes rolled upwards and both his arms and l | key D: No investigation required | 5 opts
- other: Angelo, a 15-month-old boy, had been unwell with a runny nose and cough for a day when his father brought him to the Emergency Department. At lunch, he suddenly became stiff, his eyes rolled upwards, and both his arms an | key D: No investigation required | 5 opts
- dice 0.98, key text same true, key letter moved false, fuller other
- why: Read: diff tokens are preamble or filler only (figure refs, shared-list wording, names); scenario and keyed answer text identical [confirmed-1.txt]

### SAME `pedsa-b29-4` vs `pedhd-neuro-2` (peds)
- book: Angelo, a 15-month-old boy, had been unwell with a runny nose and cough for a day when his father brings him to the Emergency Department. At lunch he suddenly became stiff, his eyes rolled upwards and both his arms and l | key D: No investigation required | 5 opts
- other: Angelo, a 15-month-old boy, had been unwell with a runny nose and cough for a day when his father brings him to the Emergency Department. At lunch he suddenly became stiff, his eyes rolled upwards and both his arms and l | key D: No investigation required | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b29-5` vs `pedep2-neu-3` (peds.ep2)
- book: Pamela is an 8-year-old girl with recurrent seizures. She has three or four seizures a month, where she lets out a cry, her arms and legs become stiff, her eyes roll upwards and then she jerks her arms and legs. This las | key A: Anti-epileptic drug therapy | 5 opts
- other: Pamela is an 8-year-old girl with recurrent seizures. She has three or four seizures a month, where she lets out a cry, her arms and legs become stiff, her eyes roll upwards, and then she jerks her arms and legs. This la | key A: Anti-epileptic drug therapy | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b29-5` vs `pedhd-neuro-3` (peds)
- book: Pamela is an 8-year-old girl with recurrent seizures. She has three or four seizures a month, where she lets out a cry, her arms and legs become stiff, her eyes roll upwards and then she jerks her arms and legs. This las | key A: Anti-epileptic drug therapy | 5 opts
- other: Pamela is an 8-year-old girl with recurrent seizures. She has three or four seizures a month, where she lets out a cry, her arms and legs become stiff, her eyes roll upwards and then she jerks her arms and legs. This las | key A: Anti-epileptic drug therapy | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b29-6` vs `pedep2-neu-4` (peds.ep2)
- book: Alan is a 7-month-old male infant who was preterm, born at 28 weeks’ gestation, birthweight 970 g, and whose family recently arrived in this country. He is seen in a paediatric clinic because of vomiting. He had been see | key B: Intraventricular haemorrhage | 5 opts
- other: Alan is a 7-month-old male infant who was preterm, born at 28 weeks' gestation, birthweight 970 g, and whose family recently arrived in this country. He is seen in a paediatric clinic because of vomiting. He had been see | key B: Intraventricular haemorrhage | 5 opts
- dice 0.96, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b29-6` vs `pedhd-neuro-4` (peds)
- book: Alan is a 7-month-old male infant who was preterm, born at 28 weeks’ gestation, birthweight 970 g, and whose family recently arrived in this country. He is seen in a paediatric clinic because of vomiting. He had been see | key B: Intraventricular haemorrhage | 5 opts
- other: Alan is a 7-month-old male infant who was preterm, born at 28 weeks’ gestation, birthweight 970 g, and whose family recently arrived in this country. He is seen in a paediatric clinic because of vomiting. He had been see | key B: Intraventricular haemorrhage | 5 opts
- dice 0.96, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b29-7` vs `pedep2-neu-5` (peds.ep2)
- book: Sharon is an 11-year-old girl who has had occasional headaches for the last 3 months. Today was her first day at secondary school. During maths class she developed her usual throbbing left-sided headache, associated with | key B: Migraine | 5 opts
- other: Sharon is an 11-year-old girl who has had occasional headaches for the last 3 months. Today was her first day at secondary school. During math class, she developed her usual throbbing left-sided headache, associated with | key B: Migraine | 4 opts
- dice 0.99, key text same true, key letter moved false, fuller book, other lacks: Tension headache (keyed option kept: true)
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical; other lacks 1 option(s)

### SAME `pedsa-b29-7` vs `pedhd-neuro-5` (peds)
- book: Sharon is an 11-year-old girl who has had occasional headaches for the last 3 months. Today was her first day at secondary school. During maths class she developed her usual throbbing left-sided headache, associated with | key B: Migraine | 5 opts
- other: Sharon is an 11-year-old girl who has had occasional headaches for the last 3 months. Today was her first day at secondary school. During maths class she developed her usual throbbing left-sided headache, associated with | key B: Migraine | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b29-8` vs `pedep2-neu-6` (peds.ep2)
- book: Aparna is a 2-year-old girl of Indian ethnicity who lives in the UK. She presents to her general practitioner as she has been unsteady on her feet for a day, having had diarrhoea during the previous week. On examination  | key A: Guillain–Barré syndrome | 5 opts
- other: Aparna is a 2-year-old girl of Indian ethnicity who lives in the UK. She presents to her general practitioner as she has been unsteady on her feet for a day, having had diarrhoea during the previous week. On examination, | key A: Guillain-Barré syndrome | 5 opts
- dice 0.99, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical

### SAME `pedsa-b29-8` vs `pedhd-neuro-6` (peds)
- book: Aparna is a 2-year-old girl of Indian ethnicity who lives in the UK. She presents to her general practitioner as she has been unsteady on her feet for a day, having had diarrhoea during the previous week. On examination  | key A: Guillain–Barré syndrome | 5 opts
- other: Aparna is a 2-year-old girl of Indian ethnicity who lives in the UK. She presents to her general practitioner as she has been unsteady on her feet for a day, having had diarrhoea during the previous week. On examination  | key A: Guillain–Barré syndrome | 5 opts
- dice 1, key text same true, key letter moved false, fuller other
- why: stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical
