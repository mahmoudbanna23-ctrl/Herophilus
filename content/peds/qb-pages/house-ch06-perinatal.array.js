// House pediatrics bank — Part I, chapter 6 "Perinatal medicine", book pp.49-53.
// Verbatim staging record. Transcribed from the rendered page images only.
// Source: Semester 8\Pedo\Questions\pediatric .pdf  (2-up; PDF sheet N = book pages 2N-2 | 2N-1)
// Rendered at 200 dpi, split into left/right halves; every clinical numeral re-rendered at 400 dpi.
//
// ---- MEASUREMENTS (all made by reading the rendered halves; nothing inherited) ----
//
// BOUNDARIES
//   ch.6 opens on PDF sheet 25, RIGHT half = book p.49, under a full-width "Perinatal medicine"
//     banner. Its first question is numbered 1. Numbering DOES restart at 1 (as ch.3-ch.5 did).
//   ch.5 "Genetics" ends on PDF sheet 25, LEFT half = book p.48, at its Q20. Not transcribed here.
//   ch.7 "Neonatal medicine" banner appears on PDF sheet 28, LEFT half = book p.54, and opens on
//     its own question 1 (Natasha, caesarean at 32 weeks' gestation). Measured, not assumed.
//   One-past overrun check: PDF sheet 28 RIGHT half = book p.55 is ch.7 body (its Q3 tail, Q4, Q5),
//     numbering continuous within ch.7. ch.6 does not resume anywhere. Clean.
//   So ch.6 = book pp.49-53 inclusive = PDF 25 right half through PDF 27 right half. The brief's
//     page range and its 2-up mapping both held exactly.
//
// COUNT AND NUMBERING WALK
//   First printed number: 1 (p.49). Last printed number: 15 (p.53). TRUE COUNT = 15.
//   The sequence was walked question by question across all five book pages:
//     p.49: 1, 2, 3   |   p.50: 4, 5, 6, 7(starts)   |   p.51: 7(ends), 8, 9, 10(starts)
//     p.52: 10(ends), 11, 12, 13(starts)   |   p.53: 13(ends), 14, 15
//   1..15 each printed EXACTLY ONCE. NO number is printed twice and NO number is skipped.
//   (ch.9's duplicated "18." on book p.74 has no counterpart here.)
//
// ANSWERS
//   Answers sit WITH the question, in the same rounded box, as a final line "Answer: X." - the
//   ch.1-ch.5 pattern is CONFIRMED for ch.6. There are no separate answer pages.
//   ⚠️ EVERY key prints a BARE LETTER WITH NO OPTION NAME BESIDE IT (all 15 checked individually).
//   The letter-vs-name cross-check is therefore UNAVAILABLE for this entire chapter. It was NOT
//   performed and MUST NOT be reported as having passed. Keys are transcribed as the bare letters
//   printed: 1A 2D 3E 4A 5B 6C 7A 8D 9D 10C 11D 12B 13E 14D 15D.
//
// EXPLANATION BOXES
//   ZERO. Counted by looking at all 15 answer lines, not sampled: every box ends at "Answer: X."
//   with nothing after it. No explanation, rationale or reference is printed anywhere in ch.6.
//
// MULTI-ANSWER QUESTIONS
//   NONE. Every stem asks for a single answer and every key prints one letter. Checked all 15.
//
// FIGURES (noted, NOT cropped - cropping is a separate job)
//   Q10 p.51 · Q11 p.52 · Q12 p.52 · Q13 p.52 · Q14 p.53. Five in total, all colour clinical
//   photographs, each in a panel to the RIGHT of its stem on the SAME page, while every stem
//   calls it "the opposite figure" (two-column wording, same as ch.5). Book pp.49, 50 carry no
//   figures. No radiographs in this chapter (the chest X-rays begin in ch.7 on p.54).
//
// NUMBERS ESCALATED TO 400 dpi (all clinical numerals in the chapter; all confirmed unchanged)
//   Q1 "15 cigarettes" · Q2 "20-week" · Q3 "32 weeks'" · Q5 "20 hours old" · Q6 "32 weeks'"
//   Q8 "1 minute", "140 beats/min" and the full numeric option list 10/9/8/7/6
//   Q9 "37 weeks", "2.2 kg" · Q10 "2-day-old" · Q11 "a month-old" (no digit present)
//   Q12 "4-day-old" · Q13 "2-month-old", "about 3 weeks old", "33 weeks gestation"
//   Q14 "3-day-old". Q15 carries no numeral. No superscript or exponent occurs in this chapter.
//
// "Select one answer only." IS INCONSISTENT, as the brief warned. Printed on Q1-Q9 (nine);
//   ABSENT on Q10-Q15 (six) - the absence is continuous from Q10 to the end of the chapter.
//   Recorded per question: boiler:true where printed, field omitted where not.
//
// PAIRED, NOT FOLDED: Q11 and Q13 share an identical five-option menu (Bruising / Milia /
//   Erythema toxicum / Port wine stain / Strawberry naevus) with different keys (D vs E), and
//   Q10 and Q14 share a second identical menu (Bruising / Milia / Erythema toxicum / Mongolian
//   blue spots / Neonatal varicella zoster) with keys C and D. A shared option menu PAIRS
//   questions; it does not fold them. All five stems and all five figures are distinct.
//   ⚠️ CORRECTED 2026-09-02: this block first said Q10, Q12 and Q14 all shared that menu. They do
//   not. Q12's option A is "Group B streptococcal infection", not "Bruising"; its other four match.
//   The `opts` DATA was right all along - only this prose claim was wrong. Verified by comparing
//   the three option arrays byte for byte. Q12's key still lands on Milia (B) either way, so
//   nothing downstream moved; but a later duplicate sweep must not trust the word "identical" here.
//
// SHOW-THROUGH: the reverse of each leaf prints through faintly. On p.53 the mirrored
//   "Neonatal medicine" banner of p.54 is visible. It is show-through, not content, and is not
//   recorded as such anywhere in this file.
// -----------------------------------------------------------------------------------
var PEDHD_PERI_STAGED = [
  { n:1, p:'49', boiler:true,
    stem:'A mother has just found out she is pregnant and asks for advice about how to look after her health and nutrition during pregnancy. She smokes 15 cigarettes a day. You recommend she gives up smoking. If she continues to smoke despite your advice the baby is at increased risk of which of the following health problems?',
    opts:['Growth restriction','Dysmorphic syndromes','Neural tube defects','Shoulder dystocia','Vitamin D deficiency'],
    key:'A' },

  { n:2, p:'49', boiler:true,
    stem:'A mother has her routine 20-week antenatal scan. The sonographer finds the fetal abdominal and head circumference measurements are normal, but is concerned that there is an abnormally small amount of amniotic fluid (oligohydramnios). What is the most likely cause for this.',
    opts:['Duodenal atresia','Gastroschisis','Maternal diabetes','Poorly functioning fetal kidneys','Severe intrauterine growth restriction'],
    key:'D',
    note:'Preserved typo: the lead-in sentence ends with a full stop, not a question mark - "What is the most likely cause for this." exactly as printed.' },

  { n:3, p:'49', boiler:true,
    stem:'A midwife is concerned that a mother who is at 32 weeks’ gestation has a symphysis–fundal height smaller than expected. An ultrasound confirms intrauterine growth restriction. Which feature would be of most concern to the sonographer?',
    opts:['Accelerations of fetal heart rate','Active fetal movements','Breech presentation','Fetal breathing movements seen','Reverse end-diastolic flow in the umbilical artery'],
    key:'E',
    note:'"32 weeks" verified at 400 dpi. "symphysis-fundal" is printed with an en dash and broken across the line; preserved as an en dash.' },

  { n:4, p:'50', boiler:true,
    stem:'A mother has just found out she is pregnant with twins. Her antenatal scan reveals dichorionic, diamniotic twins. Which condition carries the biggest increased risk in her twin pregnancy?',
    opts:['Congenital abnormalities','Gestational diabetes','Macrosomia','Post-term gestation','Twin-to-twin transfusion'],
    key:'A' },

  { n:5, p:'50', boiler:true,
    stem:'You perform a routine newborn examination on a baby who is 20 hours old. Which one of the following features requires further immediate assessment?',
    opts:['Acrocyanosis (cyanosis of the hands and feet)','A heart murmur','An undescended testis','Breast enlargement','Subconjunctival haemorrhages'],
    key:'B',
    note:'"20 hours old" verified at 400 dpi. Option list is not strictly alphabetised on the leading word ("Acrocyanosis / A heart murmur / An undescended testis / Breast / Subconjunctival"); printed in this order.' },

  { n:6, p:'50', boiler:true,
    stem:'A black mother is found to have glycosuria at her midwife appointment at 32 weeks’ gestation. Her glucose tolerance test and fasting glucose is abnormal. She is given dietary advice to control her blood glucose. What problem is her newborn baby at most increased risk of?',
    opts:['Anaemia','Hyperglycaemia','Respiratory distress syndrome','Neonatal bacterial infection','Neonatal type 1 diabetes mellitus'],
    key:'C',
    note:'"32 weeks" verified at 400 dpi. Preserved grammar: "Her glucose tolerance test and fasting glucose is abnormal" (singular verb with a compound subject), as printed.' },

  { n:7, p:'50', boiler:true,
    stem:'Jonathan, a newborn baby, is noted to have hepatosplenomegaly and a petechial rash. His red eye reflex is normal and there is no heart murmur. He fails his newborn screening hearing test. His mother is from the UK and her antenatal screening bloods were all normal. What is the most likely congenital infection that has caused these symptoms?',
    opts:['Cytomegalovirus','Rubella','Syphilis','Toxoplasmosis','Varicella zoster'],
    key:'A',
    note:'Straddles the page break: number, stem, boiler and options A-C are on book p.50; options D-E and the answer line continue in the box at the top of book p.51. The question number "7." is printed only on p.50.' },

  { n:8, p:'51', boiler:true,
    stem:'A male infant is born at term. At 1 minute of age he is breathing regularly and has a heart rate of 140 beats/min. He is grimacing but has not yet cried. He is pink centrally but still blue around his extremities and his tone is reduced although he has good limb flexion but is not actively moving his limbs. What is his Apgar score at one minute?',
    opts:['10','9','8','7','6'],
    key:'D',
    note:'Apgar question. "1 minute", "140 beats/min" and the whole numeric option list (10, 9, 8, 7, 6 - descending) all verified at 400 dpi.' },

  { n:9, p:'51', boiler:true,
    stem:'A mother is known to have pre-eclampsia and her fetus has shown signs of intrauterine growth restriction on antenatal scans. He is delivered at 37 weeks and weighs 2.2 kg. He is admitted to the Special Care Baby Unit because of his size. He appears well and has had a breast feed. What is he most at risk of?',
    opts:['Anaemia','Congenital cardiac abnormality','Group B streptococcus infection','Hypoglycaemia','Hypercalcaemia'],
    key:'D',
    note:'"37 weeks" and the birth weight "2.2 kg" verified at 400 dpi.' },

  { n:10, p:'51', fig:true, figp:'51',
    stem:'George, a 2-day-old baby boy, is reviewed by the paediatric doctor at the request of the midwife. He was born by forceps delivery and has been feeding well. There were no risk factors for sepsis and mother was well during her pregnancy. When examined, he appears very well but has the rash shown in the opposite figure. His mother reports the rash keeps moving around his body. What is the diagnosis that fits best with the attached clinical description and picture?',
    opts:['Bruising','Milia','Erythema toxicum','Mongolian blue spots','Neonatal varicella zoster'],
    key:'C',
    note:'NO "Select one answer only." line is printed under this question. Figure: colour clinical photograph of a newborn lying on a white sheet, trunk and limbs in view, printed in a panel to the RIGHT of the stem on the SAME page (p.51) - the stem says "opposite figure", wording inherited from a two-column original, as in ch.5. Straddles the page break: number, stem, figure and all five options are on p.51; the answer line "Answer: C." is alone in the continuing box at the top of p.52. "2-day-old" verified at 400 dpi.' },

  { n:11, p:'52', fig:true, figp:'52',
    stem:'Anna, a month-old infant, is reviewed by the general practitioner. She was born by normal vaginal delivery, and was well during and after delivery. Her mother is worried about the mark on her face (shown in the opposite figure). It has not changed in appearance since birth. What is the diagnosis that fits best with the attached clinical description and picture?',
    opts:['Bruising','Milia','Erythema toxicum','Port wine stain (naevus flammeus)','Strawberry naevus (cavernous haemangioma)'],
    key:'D',
    note:'NO "Select one answer only." line. PRESERVED ODDITY: the age reads "a month-old infant" with no numeral - verified at 400 dpi, the digit is genuinely absent from the page, not lost in rendering. Figure: colour photograph of an infant’s face, head-on, with a flat pink-red mark over one side; printed in a panel to the RIGHT of the stem on the SAME page (p.52) while the stem says "opposite figure".' },

  { n:12, p:'52', fig:true, figp:'52',
    stem:'Oliver, a 4-day-old infant, is having a routine newborn check by the junior paediatric doctor. The doctor notices some small white spots on Oliver’s nose and cheeks (shown in the opposite figure). Oliver was born by normal vaginal delivery and is currently feeding well. What is the diagnosis that fits best with the attached clinical description and picture?',
    opts:['Group B streptococcal infection','Milia','Erythema toxicum','Mongolian blue spots','Neonatal varicella zoster'],
    key:'B',
    note:'NO "Select one answer only." line. "4-day-old" verified at 400 dpi. Figure: close-up colour photograph of a neonate’s nose, cheek and mouth showing scattered pinpoint white papules; printed in a panel to the RIGHT of the stem on the SAME page (p.52) while the stem says "opposite figure".' },

  { n:13, p:'52', fig:true, figp:'52',
    stem:'Jessica, a 2-month-old infant, presents to her family doctor with a mass on her forehead as shown in the opposite figure. It was not present at birth, and has been gradually increasing in size since it was first noticed when Jessica was about 3 weeks old. Jessica is well. The only past medical history of note is an uncomplicated premature delivery at 33 weeks gestation. What is the diagnosis that fits best with the attached clinical description and picture?',
    opts:['Bruising','Milia','Erythema toxicum','Port wine stain (naevus flammeus)','Strawberry naevus (cavernous haemangioma)'],
    key:'E',
    note:'NO "Select one answer only." line. Straddles the page break: number, stem and figure are on book p.52; the five options and "Answer: E." are in the continuing box at the top of the facing book p.53. The question number "13." is printed only on p.52. "2-month-old", "about 3 weeks old" and "33 weeks gestation" all verified at 400 dpi - "33 weeks gestation" is printed WITHOUT an apostrophe, unlike "32 weeks’ gestation" in Q3 and Q6; preserved as printed. Figure: colour photograph of an infant lying on her side wrapped in a blanket, a raised dark-red lesion above the eyebrow on the forehead; printed in a panel to the RIGHT of the stem on p.52.' },

  { n:14, p:'53', fig:true, figp:'53',
    stem:'Adam, a 3-day-old black infant, has his routine newborn check. The paediatric doctor notices blue and black macules on his back and buttocks (shown in the opposite figure). Adam was born by normal vaginal delivery and has been feeding well since birth. What is the diagnosis that fits best with the attached clinical description and picture?',
    opts:['Bruising','Milia','Erythema toxicum','Mongolian blue spots','Neonatal varicella zoster'],
    key:'D',
    note:'NO "Select one answer only." line. "3-day-old" verified at 400 dpi. Figure: colour photograph of a naked infant held prone, back and buttocks toward the camera, showing slate-blue macular patches over the lower back; printed in a panel to the RIGHT of the stem on the SAME page (p.53) while the stem says "opposite figure".' },

  { n:15, p:'53',
    stem:'A pregnant mother is being consented for an amniocentesis and wants to know which conditions it can diagnose. Which of the following can not be accurately diagnosed by amniocentesis?',
    opts:['Sickle cell disease','Down syndrome','Fragile X syndrome','Spina bifida','Cystic fibrosis'],
    key:'D',
    note:'NO "Select one answer only." line - verified at 400 dpi, the options follow the stem directly. Preserved spelling: "can not" is printed as two words. Last question of the chapter; the rest of p.53 below this box is blank.' },

];
