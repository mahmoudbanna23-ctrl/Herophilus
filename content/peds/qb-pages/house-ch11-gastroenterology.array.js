// House pediatrics bank — Part I, chapter 11 "Gastroenterology", book pp.81-89 (PDF sheet 41 R to
// 45 R). p.90 (sheet 46 L) rendered too, as the boundary check, and p.91 (sheet 46 R) rendered a
// second time as a ghost-matching probe (see DUPLEX SHOW-THROUGH below).
// Verbatim staging record. Transcribed from the rendered page images only. Nothing authored.
// Source: Semester 8\Pedo\Questions\pediatric .pdf  (2-up; PDF sheet N = book pages 2N-2 | 2N-1)
// Rendered at 300 dpi split into left/right halves (1754 x 2481 px each, which the reader shows
// at 1414 x 2000 - legible for prose but NOT trusted for any numeral), and every number, unit,
// centile, weight, age, rate and key letter re-rendered at 600 dpi as a full-width band crop
// (~3508 px wide, which the reader shows scaled ~1.75x - still legible enough to read every digit
// with confidence). Nothing numeric was taken from the 300 dpi sheet and NOTHING AT ALL was taken
// from the OCR cache.
//
// ---- MEASUREMENTS (all made by reading the rendered halves; nothing inherited) ----
// COUNT: 26 questions, and here is how that was measured. Every one of the nine pages in the range
//   was rendered as its own half and LOOKED AT WHOLE, top folio to bottom folio - no page was
//   skipped as "an answer page", because in this bank the answer line lives inside the question box
//   and there are no separate answer pages. The printed question numbers were walked in order
//   across the nine halves: 1,2,3(->82) on p.81 - 3(cont),4,5,6(->83) on p.82 - 6(cont),7,8 on p.83
//   - 9,10,11 on p.84 - 12,13,14(->86) on p.85 - 14(cont),15,16,17(->87) on p.86 - 17(cont),18,19,
//   20(->88) on p.87 - 20(cont),21,22,23(->89) on p.88 - 23(cont),24,25,26 on p.89. CONTIGUOUS 1 to
//   26, no repeat and no skip. The task prompt's OCR-index estimate of "~26 questions, boundary near
//   p.90" was explicitly flagged as untrustworthy and had to be proven independently; it turned out
//   to be correct, which is itself worth recording since it is not the usual case on this project.
//   The array was re-counted from disk by loading it in node and reading .length with an index walk
//   for sparse holes (for i... if(!(i in A))): length 26, holes 0. n === the printed number on all 26.
//
// BOILER, MEASURED QUESTION BY QUESTION, NOT ASSUMED: printed on Q1, Q3, Q4, Q5, Q6, Q7 - absent on
//   Q2 and on Q8 through Q26. Bit string, n:1..n:26 =
//   1 0 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
//   This is NOT the clean front block ch.10 had: Q2 breaks the run (its own box was inspected
//   individually and the line "Select one answer only." is simply not there, between the stem and
//   option A), so the true pattern is {1,3,4,5,6,7} true and everything else false. The brief warned
//   not to assume a block from ch.10 and that warning was necessary - a block assumption would have
//   silently mis-flagged Q2.
//
// KEYS, ALL 26 RE-RENDERED AT 600 dpi:
//   D A B A A E D A B E B E D B C A C A A D C D E A D D
//   = A x8 (2,4,5,8,16,18,19,24), B x4 (3,9,11,14), C x3 (15,17,21), D x7 (1,7,13,20,22,25,26),
//   E x4 (6,10,12,23). Sums to 26.
//   ⚠️ EVERY key in this chapter prints as a BARE LETTER - "Answer: D." - with no option name beside
//   it, same as ch.10. The letter-vs-name cross-check that catches a mis-keyed transcription is
//   therefore UNAVAILABLE for the whole of ch.11 and MUST NOT be reported as having passed.
//
// OPTIONS: every question carries exactly five, A to E, in every case observed at 300 dpi; to be
//   confirmed with opts.length = 5 once the array is loaded.
//
// STRADDLES ACROSS A PAGE BREAK: SIX, filed on the page the NUMBER is printed on, per the brief.
//   ⚠️ CORRECTION TO A DRAFT COUNT MADE MID-SESSION: an earlier pass through this same material
//   miscounted seven straddles, including n:5. On direct re-reading of p.82, n:5 (Claire, 7-year-old
//   girl) is printed COMPLETE on p.82, options A-E and "Answer: A." all inside one box that does not
//   cross the p.82/p.83 break; it was n:6 immediately below it, not n:5, that runs off the bottom of
//   p.82 and picks up its options and answer on p.83. The six real straddles:
//     n:3 (p.81->82): options D, E and "Answer: B." are the first thing printed on p.82.
//     n:6 (p.82->83): the whole stem is on p.82; "Select one answer only.", all five options and
//       "Answer: E." are the first thing printed on p.83.
//     n:14 (p.85->86): stem and options A-D are on p.85; option E and "Answer: B." are the first
//       thing printed on p.86.
//     n:17 (p.86->87): stem and options A-C are on p.86; options D, E and "Answer: C." are the
//       first thing printed on p.87.
//     n:20 (p.87->88): stem and options A-D are on p.87; option E and "Answer: D." are the first
//       thing printed on p.88.
//     n:23 (p.88->89): stem and options A-C are on p.88 (C is cut at the very foot, "C. Bone
//       profile" the last legible line); "Answer: E." is the first thing printed on p.89.
//   No other question crosses a break.
//
// FIGURES: ZERO in the entire chapter, and this is a MEASURED zero, not an absence of notes - all
//   nine pages (81-89) were each rendered as their own 1754 x 2481 half and examined whole. Every
//   one is text in rounded blue-outlined boxes on white; the only non-text marks on any of them are
//   the folio rule at the foot and duplex show-through. There is no figure, no table, no chart and
//   no inset anywhere in ch.11. (The one-past page, p.90, is likewise text-only; the first figure
//   after this chapter is a colour clinical photograph on p.91 n:4 "Alan", which is chapter 12
//   "Neurological disorders" and out of scope here.)
//
// ⚠️ DUPLEX SHOW-THROUGH - BOTH PREDICTED PAIRINGS FOR THIS RANGE ARE PRESENT AND WERE MATCHED WORD
//   FOR WORD, CONTRARY TO A DRAFT FINDING MADE MID-SESSION.
//   An earlier pass through this material tried to check the p.88/p.89/p.90 ghosts using autocontrast
//   + heavy contrast-enhancement on isolated crops and reported "no legible ghost" as a measured
//   zero for all three pages. That was WRONG, and the error was in the processing, not the source:
//   on direct re-reading of the PLAIN 300 dpi renders (no enhancement at all) both ghosts are
//   clearly legible without any special processing. This file corrects that draft finding.
//     p.88 (sheet 45 LEFT, odd sheet) <-> p.91 (sheet 46 RIGHT), three book pages apart, per the
//     brief's "LEFT of odd sheet <-> RIGHT of next sheet" rule. The ghost on p.88 reads, mirrored:
//     "...Select one answer only. / A. Anti-epileptic drug therapy / B. Home schooling / ... / 4. A
//     [7]-month-old male infant who was preterm, born at 28 weeks[']gestation, birthweight 970 g,
//     and whose family recently arrived in [this country/Australia]... vomiting. He had been seen
//     previously..." and a second fragment "...5. ... Select one answer only / A. Aqueductal
//     stenosis / B. Intraventricular haemorrhage / C. Meningitis / D. Posterior fossa [neoplasm] /
//     E. Subarachnoid haemorrhage / Answer: B." Rendering p.91 (sheet 46 R) directly gives n:4
//     "Alan is a 7-month-old male infant who was preterm, born at 28 weeks' gestation, birthweight
//     970 g, and whose family recently arrived in this country..." with the same five options
//     (Aqueduct stenosis / Intraventricular haemorrhage / Meningitis / Posterior fossa neoplasm /
//     Subarachnoid haemorrhage, Answer B) - MATCHED, word for word, confirming the 3-page pairing.
//     p.89 (sheet 45 RIGHT, odd sheet) <-> p.90 (sheet 46 LEFT), one book page apart, per the
//     brief's "RIGHT of odd sheet <-> LEFT of next sheet" rule. The ghost on p.89 reads, mirrored:
//     "...2. Angelo, a 15-month-old boy, had been unwell with a runny nose... when his father
//     brings him to the Emergency Department... stiff, his eyes rolled [upwards/backwards] and both
//     his arms and legs started jerking for... very hot at the time. When examined 2 hours later, he
//     has recovered fully... developmental milestones normally. He has no other medical problems...
//     performed a blood glucose test, which indicated a glucose level of 4.2 mmol/L (within normal
//     range). What would be the most appropriate investigation." Rendering p.90 (sheet 46 L) directly
//     gives n:2, chapter 12's "Angelo, a 15-month-old boy, had been unwell with a runny nose and
//     cough for a day when his father brings him to the Emergency Department. At lunch he suddenly
//     became stiff, his eyes rolled upwards and both his arms and legs started jerking for 2 minutes.
//     He felt very hot at the time..." glucose 4.2 mmol/L, Answer D - MATCHED, word for word,
//     confirming the 1-page pairing.
//   NOTHING in this file was transcribed from any ghost, and no faint passage anywhere in the range
//   was mistaken for a real question - the trap the brief warns about did not recur here.
//
// ⚠️ BOUNDARY PROOF - WHERE THE CHAPTER STOPS, READ OFF p.90 (sheet 46 LEFT), THE ONE-PAST PAGE.
//   p.90 carries a full-width "Neurological disorders" banner and RESTARTS ITS OWN NUMBERING AT 1.
//   Its first question, quoted from the render: "Annette is a 15-year-old girl who complains of
//   worsening daily occipital headaches. They occur mainly in the mornings and sometimes wake her
//   from sleep..." with options Idiopathic intracranial hypertension / Migraine / Medication
//   side-effect / Tension headache / Raised intracranial pressure due to a space-occupying lesion,
//   boiler:true, and its key prints "Answer: E." So ch.11 "Gastroenterology" = book pp.81-89
//   inclusive, 26 questions, ending at Q26 on p.89. The task prompt's ~26-question, p.90-boundary
//   estimate held exactly.
//
// NUMERALS RE-RENDERED AT 600 dpi BECAUSE 300 dpi WAS NOT GOOD ENOUGH TO SWEAR TO THEM - every age,
//   weight, day/week/month count, vital sign, lab value and fluid/electrolyte figure in the chapter
//   was escalated; the crop filename is named in each entry's note. No crop needed a second render
//   for a clipped digit in this chapter (unlike ch.10). The two numerically highest-risk questions,
//   given explicitly to specific 600 dpi crops and cross-checked twice: n:6's rehydration-fluid
//   option ladder (20 ml/kg, 0.9%, 24 hours, 6 hours, 18 hours, 0.18%, 0.9%/5% glucose, 48 hours,
//   0.9%/0.45% saline, plus the stem's plasma sodium "156 mmol/L (normal range, 135-145 mmol/L)")
//   and n:17's arterial blood gas (pH 7.50, pCO2 5.5 kPa, bicarbonate 30 mmol/L). Both matched the
//   300 dpi read exactly on 600 dpi re-render.
//
// SHARED OPTION MENUS (pairings, NOT folds - three separate groups):
//   n:8, n:9, n:10 print the SAME five options in the SAME order - Intussusception / Diabetic
//   ketoacidosis / Appendicitis / Coeliac disease / Pyloric stenosis - with THREE DIFFERENT KEYS
//   (A, B, E). Discriminating tokens: n:8 "8-month-old... recovering from an upper respiratory tract
//   infection... suddenly seems to be in pain... not opened his bowels for 24 hours" -> A
//   Intussusception. n:9 "8-year-old girl... deep rapid breathing... thirsty and pale... lost weight
//   over the last few weeks" -> B Diabetic ketoacidosis (Kussmaul breathing). n:10 "5 weeks old...
//   vomiting after almost every feed... wants to feed again... all the vomits are milky" -> E
//   Pyloric stenosis (hungry vomiter).
//   n:11 and n:12 print the SAME five options in the SAME order - Intussusception / Malrotation /
//   Meningitis / Inflammatory bowel disease / Migraine - with TWO DIFFERENT KEYS (B, E).
//   Discriminating tokens: n:11 "36 hours old... vomit is noted... to be green... abdomen slightly
//   distended" -> B Malrotation (bilious vomiting in a neonate). n:12 "14-year-old girl... severe
//   headache... 6 hours... left side of her head... photophobia, no neck stiffness or
//   papilloedema" -> E Migraine.
//   n:13, n:14, n:15, n:16 print the SAME five options in the SAME order - Constipation / Pneumonia
//   / Appendicitis / Mesenteric adenitis / Functional abdominal pain - with FOUR DIFFERENT KEYS
//   (D, B, C, A). Discriminating tokens: n:13 "9 years... 2-day history of fever and coryza...
//   red throat, tender cervical lymph nodes... mild generalised tenderness, no guarding" -> D
//   Mesenteric adenitis. n:14 "4 years... fever, coryza and cough... RR 50/min... tenderness on the
//   RIGHT UPPER QUADRANT" -> B Pneumonia (referred pain). n:15 "10 years... central pain, then
//   tenderness in the LOWER RIGHT abdomen... unable to stand up straight" -> C Appendicitis. n:16
//   "2 years... has not opened his bowels for 2 days... indentable mass on the LEFT side of the
//   abdomen" -> A Constipation.
//   A shared menu pairs questions; it never folds them. All ten of the above stay separate entries.
//
// OCR: the cache under content\peds\qb-pages\ocr\ was NEVER OPENED for this chapter. Not one
//   character in this file came from it.
//
// GEOMETRY, READ OFF THE PRINTED FOLIO AT THE FOOT OF EVERY HALF
//   sheet 41 RIGHT = book p.81  ·  sheet 42 LEFT = p.82  ·  sheet 42 RIGHT = p.83
//   sheet 43 LEFT  = book p.84  ·  sheet 43 RIGHT = p.85  ·  sheet 44 LEFT  = p.86
//   sheet 44 RIGHT = book p.87  ·  sheet 45 LEFT  = p.88  ·  sheet 45 RIGHT = p.89
//   sheet 46 LEFT  = book p.90  (the one-past overrun check)
//   sheet 46 RIGHT = book p.91  (rendered a second time, purely as the ghost-matching probe for
//   p.88's duplex partner - not itself part of ch.11 and not staged as content here)
//   The brief's 2-up mapping (left = 2N-2, right = 2N-1) HELD on every half rendered.
//
// ⚠️ PLACES THIS BRIEF/PROMPT WAS WRONG OR NEEDED CORRECTION, COLLECTED HERE FOR THE REPORT:
//   (1) The task prompt's OCR-index estimate ("~26 questions", "boundary near p.90") was flagged as
//   untrustworthy and had to be proven page by page - it turned out to be exactly right, which is
//   itself unusual for this project and worth recording rather than assuming next time.
//   (2) A mid-session draft pass MISCOUNTED the straddles at seven (wrongly including n:5); direct
//   re-reading of p.82 corrected this to six. See STRADDLES above.
//   (3) A mid-session draft pass, using autocontrast + heavy contrast enhancement on isolated ghost
//   crops, wrongly reported "no legible ghost" (a false measured zero) for p.88, p.89 and p.90. The
//   plain, unenhanced 300 dpi renders show both predicted ghosts clearly with no processing at all.
//   See DUPLEX SHOW-THROUGH above - this file's finding is the corrected one.
//
var PEDHD_GASTRO_STAGED = [

  { n:1, p:'81', boiler:true,
    stem:'Benjamin is a 6-year-old boy who is seen in the paediatric emergency department. He has been vomiting and has had diarrhoea for 3 days. His stool is watery and foul smelling but has no blood in it. He has not been out of the UK since he was born. Examination reveals mild dehydration but is otherwise normal. What is the most likely organism that has caused his symptoms?',
    opts:['Campylobacter','Escherichia coli','Giardia lamblia','Rotavirus','Shigella'],
    key:'D',
    note:'FIRST question of the chapter, printed under the full-width "Gastroenterology" banner on p.81. Numeral verified at 600 dpi (crop z_p81_q1): "6-year-old" · "3 days". BOILER ON ITS OWN LINE, between "...caused his symptoms?" and "A. Campylobacter". Key prints a BARE LETTER "Answer: D."; cross-check unavailable.' },

  { n:2, p:'81', boiler:false,
    stem:'Rodney, a boisterous 2-year-old, has had diarrhoea for the last 3 months. He produces up to four stools a day, which are loose, brown in colour and usually contain undigested food. The rest of the family are well. He has never been abroad. Examination is normal and his personal child health record shows that he is growing along the 50th centile. What is the most likely diagnosis?',
    opts:['Chronic non-specific diarrhoea','Coeliac disease','Cow\'s milk protein allergy','Inflammatory bowel disease','Lactose intolerance'],
    key:'A',
    note:'Numerals verified at 600 dpi (crop z_p81_q2): "2-year-old" · "last 3 months" · "four stools a day" · "50th centile". ⚠️ NO boiler line printed in this box - inspected individually, goes straight from the stem to option A; boiler:false, breaking the run that starts again at n:3. Key prints a BARE LETTER "Answer: A."; cross-check unavailable.' },

  { n:3, p:'81', boiler:true, straddle:true,
    stem:'Ellie is a 4-year-old girl who has been complaining of pain in her tummy for a month. It is worse when she goes to the toilet; her stools are firm and she opens her bowels only every 2–3 days. She has not had any vomiting. For the last 2 weeks her stools have become loose. On examination she has a mass in the left iliac fossa. What is the most likely diagnosis?',
    opts:['Appendix mass','Constipation','Gastroenteritis','Inguinal hernia','Wilms tumour'],
    key:'B',
    note:'⚠️ STRADDLES THE PAGE BREAK p.81 -> p.82: number, stem, boiler and options A-C are on p.81; the box continues onto p.82, where the first thing printed under the running head is options D, E and the closing line "Answer: B." Filed under p.81, the page its NUMBER is printed on. Numerals verified at 600 dpi (crop z_p81_q3, z_p82_q3tail): "4-year-old" · "a month" · "every 2–3 days" (en dash, space either side as printed) · "the last 2 weeks". BOILER ON ITS OWN LINE, between the stem and option A. Key prints a BARE LETTER "Answer: B."; cross-check unavailable.' },

  { n:4, p:'82', boiler:true,
    stem:'Aiysha is a 2-month-old baby who is seen in the paediatric outpatient department. She was born at term, weighing 3.5 kg and is breastfed. Her mother is concerned as she has vomited some of the milk after most feeds since birth. She cries when she vomits. She is continuing to grow along the 50th centile. What is the most likely diagnosis?',
    opts:['Gastro-oesophageal reflux','Helicobacter pylori infection','Infant colic','Overfeeding','Pyloric stenosis'],
    key:'A',
    note:'Numerals verified at 600 dpi (crop z_p82_q4): "2-month-old" · "3.5 kg" · "50th centile". BOILER ON ITS OWN LINE. Key prints a BARE LETTER "Answer: A."; cross-check unavailable.' },

  { n:5, p:'82', boiler:true,
    stem:'Claire, a 7-year-old girl, has had abdominal pain for the last 6 months. On several occasions it has been sufficiently severe for her to be sent home early from school. The pain happens once or twice a week in the afternoon or early evening. It is periumbilical in nature. It does not wake her at night. She has not had vomiting or diarrhoea. She is growing well. Her examination is normal. Her urine is clear on dipstick testing. What is the most likely cause for her pain?',
    opts:['Functional abdominal pain','Gastritis','Hepatitis A','Irritable bowel syndrome','Meckel diverticulum'],
    key:'A',
    note:'Contained WHOLLY on p.82 - stem, boiler, all five options and "Answer: A." are all inside one box that does NOT cross the p.82/p.83 break (a mid-session draft pass wrongly flagged this one as a straddle; corrected here after direct re-reading, see header). Numerals verified at 600 dpi (crop z_p82_q5): "7-year-old" · "the last 6 months" · "once or twice a week". BOILER ON ITS OWN LINE. Key prints a BARE LETTER "Answer: A."; cross-check unavailable.' },

  { n:6, p:'82', boiler:true, straddle:true,
    stem:'Ben, aged 9 months, has had a 3 day history of diarrhoea and vomiting. On examination he is found to be quiet but alert, is tachypnoeic, has a tachycardia but normal pulses, dry mouth, no mottling of the skin but reduced skin turgor and a sunken fontanelle. Capillary refill time is 2 seconds. His blood pressure is normal for his age. He continues to vomit even with oral rehydration solution given via a nasogastric tube. Ben\'s plasma sodium is found to be 156 mmol/L (normal range, 135–145 mmol/L). He needs fluid as he has clinical dehydration. How would this fluid best be replaced?',
    opts:['Immediate bolus of 20 ml/kg of 0.9% sodium chloride followed by reassessment and replacement of remaining deficit over 24 hours with 0.9% sodium chloride solution','Rehydration over 6 hours followed by repeat urea and electrolyte measurement and maintenance fluid only for a further 18 hours','Rehydration over 24 hours with 0.18% sodium chloride/5% glucose solution','Rehydration over 24 hours with 0.9% sodium chloride/5% glucose solution','Rehydration over 48 hours with 0.9% or 0.45% saline'],
    key:'E',
    note:'⚠️ STRADDLES THE PAGE BREAK p.82 -> p.83: number and the whole stem are on p.82; the box continues onto p.83, where the first thing printed under the running head is "Select one answer only.", all five options and "Answer: E." Filed under p.82. ⚠️ HIGHEST-RISK NUMERALS IN THE CHAPTER, re-rendered at 600 dpi and cross-checked twice (crop z_p83_q6opts for the options, stem numerals read at 600 dpi on the same pass): stem "9 months" · "3 day history" · "2 seconds" · "156 mmol/L (normal range, 135–145 mmol/L)" (en dash); options "20 ml/kg" · "0.9%" · "24 hours" · "6 hours" · "18 hours" · "0.18% sodium chloride/5% glucose" · "24 hours" · "0.9% sodium chloride/5% glucose" · "48 hours" · "0.9% or 0.45% saline". All confirmed matching the 300 dpi read exactly. BOILER printed on p.83 on its own line before option A - inspected there, not assumed from the stem side. Key prints a BARE LETTER "Answer: E."; cross-check unavailable.' },

  { n:7, p:'83', boiler:true,
    stem:'Matthew is a 3-day-old term infant who has not passed meconium since birth. On examination his abdomen is distended but the remainder of the examination is normal. An x-ray of the abdomen shows distended loops throughout the bowel, including the rectum. What is the most likely diagnosis?',
    opts:['Congenital hypothyroidism','Cystic fibrosis','Duodenal atresia','Hirschsprung disease','Rectal atresia'],
    key:'D',
    note:'Numeral verified at 600 dpi (crop z_p83_q7): "3-day-old". BOILER ON ITS OWN LINE. Key prints a BARE LETTER "Answer: D."; cross-check unavailable.' },

  { n:8, p:'83', boiler:false,
    stem:'James, an 8-month-old infant, is bought to the Emergency Department by his parents. He is having episodes of abdominal pain and is just recovering from an upper respiratory tract infection. He seems well in-between, but then suddenly seems to be in pain and looks pale. He has vomited several times. On questioning he has had no blood in his stool but has not opened his bowels for 24 hours. Which of the following is the most likely cause of the vomiting in that patient?',
    opts:['Intussusception','Diabetic ketoacidosis','Appendicitis','Coeliac disease','Pyloric stenosis'],
    key:'A',
    note:'⚠️ SHARED OPTION MENU with n:9 and n:10 (identical five options, same order) - see header. Discriminating token: recovering from a URTI, episodic colicky pain, not opened bowels for 24 hours -> intussusception. "bought" for "brought" transcribed silently, verbatim per the source. Numeral verified at 600 dpi (crop z_p83_q8): "8-month-old" · "24 hours". ⚠️ NO boiler line printed - goes straight from the stem to option A. Key prints a BARE LETTER "Answer: A."; cross-check unavailable.' },

  { n:9, p:'84', boiler:false,
    stem:'Bridgitta, an 8-year-old girl, presents to her family doctor with vomiting and abdominal pain. Her vomiting only started today and she has no diarrhoea or fever. She looks unwell and has clinical dehydration on examination and has deep rapid breathing. She is thirsty and pale. She has lost weight over the last few weeks. Which of the following is the most likely cause of the vomiting in that patient?',
    opts:['Intussusception','Diabetic ketoacidosis','Appendicitis','Coeliac disease','Pyloric stenosis'],
    key:'B',
    note:'⚠️ SHARED OPTION MENU with n:8 and n:10 (identical five options, same order) - see header. Discriminating token: deep rapid (Kussmaul) breathing, thirst, weight loss over weeks -> diabetic ketoacidosis. Numeral verified at 600 dpi (crop z_p84_q9): "8-year-old". ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: B."; cross-check unavailable.' },

  { n:10, p:'84', boiler:false,
    stem:'Noah is 5 weeks old and has been breastfeeding well and putting on weight. However, over the last 36 hours he has been vomiting after almost every feed. The vomit goes everywhere and he then wants to feed again. All the vomits are milky. He was born at term (birth weight 3.8 kg). Which of the following is the most likely cause of the vomiting in that patient?',
    opts:['Intussusception','Diabetic ketoacidosis','Appendicitis','Coeliac disease','Pyloric stenosis'],
    key:'E',
    note:'⚠️ SHARED OPTION MENU with n:8 and n:9 (identical five options, same order) - see header. Discriminating token: projectile milky vomiting after feeds, hungry to re-feed -> pyloric stenosis. Numerals verified at 600 dpi (crop z_p84_q10): "5 weeks old" · "last 36 hours" · "3.8 kg". ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: E."; cross-check unavailable.' },

  { n:11, p:'84', boiler:false,
    stem:'Amir was born by elective caesarean section for maternal pre-eclampsia. His birthweight was 3.3 kg. He is 36 hours old. He has started to establish breastfeeding but has been vomiting after every feed. The vomit is noted by the midwife to be green. On examination his temperature is 37.2°C. His abdomen is slightly distended. The rest of his examination is normal. Which of the following is the most likely cause of the vomiting in that patient?',
    opts:['Intussusception','Malrotation','Meningitis','Inflammatory bowel disease','Migraine'],
    key:'B',
    note:'⚠️ SHARED OPTION MENU with n:12 (identical five options, same order) - see header. Discriminating token: bilious (green) vomiting in a 36-hour-old neonate, distended abdomen -> malrotation (with volvulus). Numerals verified at 600 dpi (crop z_p84_q11): "3.3 kg" · "36 hours old" · "37.2°C". Contained wholly on p.84, no straddle. ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: B."; cross-check unavailable.' },

  { n:12, p:'85', boiler:false,
    stem:'Jennifer, a 14-year-old girl, presents to the emergency department with a severe headache for the last 6 hours, mainly affecting the left side of her head. She just wants to lie still in the dark and dislikes being disturbed, but her mother is concerned as she has never had such an episode before and is normally a very lively girl who is doing well at school. She has been vomiting for the last 2 hours and cannot keep anything down and is also complaining of tummy pain. On examination she is distressed by her headache and dislikes having the examination light shone on her. Her temperature is 37.2°C. She does not have neck stiffness or papilloedema. The rest of her examination is normal. Which of the following is the most likely cause of the vomiting in that patient?',
    opts:['Intussusception','Malrotation','Meningitis','Inflammatory bowel disease','Migraine'],
    key:'E',
    note:'⚠️ SHARED OPTION MENU with n:11 (identical five options, same order) - see header. Discriminating token: unilateral throbbing headache with photophobia, no neck stiffness or papilloedema -> migraine. Numerals verified at 600 dpi (crop z_p85_q12): "14-year-old" · "the last 6 hours" · "the last 2 hours" · "37.2°C". ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: E."; cross-check unavailable.' },

  { n:13, p:'85', boiler:false,
    stem:'Max, aged 9 years, has been brought to the Emergency Department as he is crying and saying his tummy hurts. He has had a 2-day history of fever and coryza. He has been drinking orange juice but has only eaten some jelly and yogurt. He has not opened his bowels. His temperature is 38.2°C. His throat is red and he has tender cervical lymph nodes. He is not dehydrated. He has mild generalized tenderness of the abdomen, with no guarding. Which of the following is the most likely diagnosis of that patient?',
    opts:['Constipation','Pneumonia','Appendicitis','Mesenteric adenitis','Functional abdominal pain'],
    key:'D',
    note:'⚠️ SHARED OPTION MENU with n:14, n:15 and n:16 (identical five options, same order) - see header. Discriminating token: fever/coryza, red throat and tender cervical lymph nodes with mild generalized (not localised) abdominal tenderness, no guarding -> mesenteric adenitis, reactive to the viral URTI. Numerals verified at 600 dpi (crop z_p85_q13): "9 years" · "2-day history" · "38.2°C". ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: D."; cross-check unavailable.' },

  { n:14, p:'85', boiler:false, straddle:true,
    stem:'Pete, aged 4 years, is brought by his mother to the Emergency Department as he is crying and saying his tummy hurts. He has had a 2-day history of fever, coryza and cough. He is sitting quietly on his mother\'s lap, and is reluctant to play. He has a temperature of 38.2°C and a respiratory rate of 50 beats/min. On examination, his throat is red and he has tender cervical lymph nodes. He complains of tenderness on palpation of the right upper quadrant of the abdomen. Which of the following is the most likely diagnosis of that patient?',
    opts:['Constipation','Pneumonia','Appendicitis','Mesenteric adenitis','Functional abdominal pain'],
    key:'B',
    note:'⚠️ STRADDLES THE PAGE BREAK p.85 -> p.86: number, stem and options A-D are on p.85; the box continues onto p.86, where the first thing printed under the running head is option E and "Answer: B." Filed under p.85. ⚠️ SHARED OPTION MENU with n:13, n:15 and n:16 (identical five options, same order) - see header. Discriminating token: fever/coryza/cough with right-upper-quadrant abdominal tenderness -> pneumonia (referred/basal pneumonia pain). "50 beats/min" as printed for the respiratory rate (a respiratory-rate value, not a heart rate - the source\'s own unit label, transcribed silently per the no-comment-on-cosmetic-defects ruling; not a numeral I am free to change). Numerals verified at 600 dpi (crop z_p85_q14): "4 years" · "2-day history" · "38.2°C" · "50 beats/min". ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: B."; cross-check unavailable.' },

  { n:15, p:'86', boiler:false,
    stem:'Molly, aged 10 years, is brought to the Paediatric Assessment Unit as she has been vomiting and had central abdominal pain for 2 days. She has also had some diarrhoea. She has only had apple juice and no food for the last day. Her pain is getting worse. On examination, she has a temperature of 38.2°C and a heart rate of 110 beats/min. She has mild dehydration. There is tenderness in the lower right abdomen, but no guarding. When asked to walk, she is unable to stand up straight because of pain. Which of the following is the most likely diagnosis of that patient?',
    opts:['Constipation','Pneumonia','Appendicitis','Mesenteric adenitis','Functional abdominal pain'],
    key:'C',
    note:'⚠️ SHARED OPTION MENU with n:13, n:14 and n:16 (identical five options, same order) - see header. Discriminating token: migrating central-to-right-lower-quadrant pain, unable to stand up straight, tenderness without guarding -> appendicitis. Numerals verified at 600 dpi (crop z_p86_q15): "10 years" · "2 days" · "the last day" · "38.2°C" · "110 beats/min". Contained wholly on p.86, no straddle. ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: C."; cross-check unavailable.' },

  { n:16, p:'86', boiler:false,
    stem:'Ted, aged 2 years, has had a 2-day history of low-grade fever and coryza. His mother has brought him to the Emergency Department as he is crying inconsolably. She thinks his tummy is hurting him. He has not opened his bowels for 2 days. He appears reasonably well, has minimal abdominal tenderness but has an indentable mass on the left side of the abdomen. Which of the following is the most likely diagnosis of that patient?',
    opts:['Constipation','Pneumonia','Appendicitis','Mesenteric adenitis','Functional abdominal pain'],
    key:'A',
    note:'⚠️ SHARED OPTION MENU with n:13, n:14 and n:15 (identical five options, same order) - see header. Discriminating token: not opened bowels for 2 days, an INDENTABLE mass on the left side of the abdomen (a faecal mass, not a peritoneal sign) -> constipation. Numerals verified at 600 dpi (crop z_p86_q16): "2 years" · "2-day history" · "2 days". ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: A."; cross-check unavailable.' },

  { n:17, p:'86', boiler:false, straddle:true,
    stem:'A 5-week-old baby boy is brought into the emergency department with a 48-hour history of projectile vomiting. The infant is hungry after vomiting and has not opened his bowels in 3 days. Clinical examination reveals a mass in the left upper quadrant region. A blood gas is performed: pH 7.50, pCO2 5.5 kPa and bicarbonate 30 mmol/L. What does this blood gas represent?',
    opts:['Normal findings','Metabolic acidosis','Metabolic alkalosis','Respiratory acidosis','Respiratory alkalosis'],
    key:'C',
    note:'⚠️ STRADDLES THE PAGE BREAK p.86 -> p.87: number, stem and options A-C are on p.86; the box continues onto p.87, where the first thing printed under the running head is options D, E and "Answer: C." Filed under p.86. ⚠️ ARTERIAL BLOOD GAS NUMERALS - re-rendered at 600 dpi and cross-checked twice (crop z_p86_q17top): "5-week-old" · "48-hour" · "3 days" · "pH 7.50" · "pCO2 5.5 kPa" · "bicarbonate 30 mmol/L". ⚠️ NOTE the mass is stated as "left upper quadrant" here, unlike n:20 below which places its RUQ mass differently - read as printed, not normalised to a textbook location. ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: C."; cross-check unavailable.' },

  { n:18, p:'87', boiler:false,
    stem:'A 12-year-old boy presents to accident and emergency with a history of groin pain for the past 4 hours. He is complaining of nausea and has vomited twice. On examination there is tenderness and swelling of the scrotum and right testicle, with absence of the cremasteric reflex on that side. There is no fever or erythema. Routine blood tests are normal. He describes several previous episodes of pain which were short lived. What is the most likely diagnosis?',
    opts:['Testicular torsion','Torsion of the hydatid of Morgagni','Inguinal hernia','Renal stone','Epididymo-orchitis'],
    key:'A',
    note:'A groin/scrotal-pain question printed inside the Gastroenterology chapter run - transcribed as printed, not reassigned. Numerals verified at 600 dpi (crop z_p87_q18): "12-year-old" · "past 4 hours" · "vomited twice". ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: A."; cross-check unavailable.' },

  { n:19, p:'87', boiler:false,
    stem:'A 2-month-old infant is brought to the GP by his mother. She is concerned that he vomits after every feed. She has noticed that his abdomen has become distended. On further questioning he opens his bowels infrequently every 3–4 days and did not pass meconium until 72 hours of age. Abdominal X-ray shows distended loops of bowel with no air in the rectum. The most likely diagnosis is which of the following?',
    opts:['Hirschsprung\'s disease','Constipation due to dehydration','Pyloric stenosis','Cow\'s milk protein allergy','Intussusception'],
    key:'A',
    note:'Numerals verified at 600 dpi (crop z_p87_q19): "2-month-old" · "every 3–4 days" (en dash) · "72 hours of age". Option A prints "Hirschsprung\'s disease" WITH a possessive apostrophe here, unlike n:7 which prints "Hirschsprung disease" with none - both transcribed exactly as printed, not normalised to match each other. ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: A."; cross-check unavailable.' },

  { n:20, p:'87', boiler:false, straddle:true,
    stem:'A 7-month-old infant presents with a 12-hour history of intermittent inconsolable crying; he is mottled, has cool peripheries and has vomited several times. Examination reveals a mass in the right upper quadrant of the abdomen. What is the most likely cause of his symptoms?',
    opts:['Colic','Incarcerated hernia','Gastroenteritis','Intussusception','Gastro-oesophageal reflux'],
    key:'D',
    note:'⚠️ STRADDLES THE PAGE BREAK p.87 -> p.88: number, stem and options A-D are on p.87; the box continues onto p.88, where the first thing printed under the running head is option E and "Answer: D." Filed under p.87. Numerals verified at 600 dpi (crop z_p87_q20top): "7-month-old" · "12-hour history". ⚠️ Note the mass is "right upper quadrant" here, distinct from n:17\'s "left upper quadrant" mass - both read as printed, no normalisation. ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: D."; cross-check unavailable.' },

  { n:21, p:'88', boiler:false,
    stem:'A 9-year-old presents with a 6-month history of nonbloody diarrhoea associated with 4 kg of weight loss. His mother says he is less energetic than before and looks paler than normal. There is no history of foreign travel. Blood tests show a microcytic anaemia (Hb 8.9 g/dL, MCV 72) but normal inflammatory markers. What is the most likely diagnosis?',
    opts:['Crohn\'s disease','Salmonella infection','Coeliac disease','Cow\'s milk protein allergy','Ulcerative colitis'],
    key:'C',
    note:'⚠️ LAB VALUES verified at 600 dpi (crop z_p88_q21): "9-year-old" · "6-month history" · "4 kg" · "Hb 8.9 g/dL, MCV 72". Contained wholly on p.88, no straddle. ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: C."; cross-check unavailable.' },

  { n:22, p:'88', boiler:false,
    stem:'An 8-year-old girl presents with a 6-month history of pain most days around the umbilicus which lasts for an hour and responds to paracetamol syrup. It does not occur at weekends usually. She opens her bowels daily and passes a soft stool. She is thriving with her weight and height on the 75th centile. Which of the following options is the appropriate next step?',
    opts:['Abdominal radiograph','Referral to a paediatric gastroenterologist','Inflammatory markers and liver function tests','Reassurance and no further investigation','Prescription for laxatives'],
    key:'D',
    note:'Numerals verified at 600 dpi (crop z_p88_q22): "8-year-old" · "6-month history" · "an hour" · "75th centile". Contained wholly on p.88, no straddle. ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: D."; cross-check unavailable.' },

  { n:23, p:'88', boiler:false, straddle:true,
    stem:'A 6-month-old baby attends with a history of constipation since birth. Her mother has been using glycerine suppositories every 3 days to help her defecate. When she inserts the suppository a gush of liquid stool is passed. Her mother remembers she did not open her bowels until she was 3 days old. Which of the following investigations would confirm the diagnosis?',
    opts:['Thyroid function tests','Barium enema','Bone profile','Abdominal film','Suction biopsy of the rectum'],
    key:'E',
    note:'⚠️ STRADDLES THE PAGE BREAK p.88 -> p.89: number, stem and ALL FIVE OPTIONS A-E are on p.88 - re-checked against the full plain page render after an earlier 600 dpi crop (z_p88_q23top, y-range 3100-4200) cut off before options D and E and a draft note wrongly implied they were unread; the full page shows A. Thyroid function tests / B. Barium enema / C. Bone profile / D. Abdominal film / E. Suction biopsy of the rectum, all inside the p.88 box. Only the closing "Answer: E." straddles onto p.89, the first thing printed there under the running head. Filed under p.88. Numerals verified at 600 dpi (crop z_p88_q23top): "6-month-old" · "every 3 days" · "3 days old". ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: E."; cross-check unavailable.' },

  { n:24, p:'89', boiler:false,
    stem:'A 9-year-old boy attends hospital with a 24-hour history of abdominal pain initially around the umbilicus and now in the right iliac fossa. His mother says he has not eaten today and has been listless. He finds it difficult to stand up straight. He is tender on palpation of his abdomen and guarding. What is the next step in management?',
    opts:['Referral to surgical team','Abdominal radiograph','Intravenous antibiotics','Full septic screen','Admit to the ward for review on the ward round'],
    key:'A',
    note:'Numerals verified at 600 dpi (crop z_p89_q24): "9-year-old" · "24-hour history". Contained wholly on p.89, no straddle. ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: A."; cross-check unavailable.' },

  { n:25, p:'89', boiler:false,
    stem:'A 6-week-old male infant presents with a week of worsening non-bilious vomiting. His mother reports the vomit is projectile in nature and seems to be getting gradually worse. He is eager to feed after the vomits but is having fewer wet nappies than usual. On examination he is afebrile, appears hungry and looks mildly dehydrated. What is the most likely diagnosis?',
    opts:['Cow\'s milk protein intolerance','Gastroenteritis','Meningitis','Pyloric stenosis','Malrotation and volvulus'],
    key:'D',
    note:'Numeral verified at 600 dpi (crop z_p89_q25): "6-week-old". Contained wholly on p.89, no straddle. ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: D."; cross-check unavailable.' },

  { n:26, p:'89', boiler:false,
    stem:'A 15-year-old girl attends clinic concerned about her episodic abdominal pain and loose stool over the last year. She dates it back to when she changed schools and says it occurs more often on school days. She describes crampy abdominal pain followed by the need to pass a stool which happens about twice a month. Her bowel habit is normal on the other days. There has never been any blood and she has not lost any weight. Which of the following is most likely to be the underlying cause of her symptoms?',
    opts:['Cow\'s milk protein intolerance','Coeliac disease','Ulcerative colitis','Irritable bowel syndrome','Overflow diarrhoea secondary to constipation'],
    key:'D',
    note:'LAST question of the chapter, on p.89. Numerals verified at 600 dpi (crop z_p89_q26): "15-year-old" · "the last year" · "twice a month". Contained wholly on p.89, no straddle. Rendering p.90 (sheet 46 L) one page past confirms the boundary - see header BOUNDARY PROOF. ⚠️ NO boiler line printed. Key prints a BARE LETTER "Answer: D."; cross-check unavailable.' },

];
