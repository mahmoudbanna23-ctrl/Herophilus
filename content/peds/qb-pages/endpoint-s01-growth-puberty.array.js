/* ===========================================================================
   ENDPOINT — Pediatrics endpoint part1.pdf — SECTION 1: "Growth & Puberty"
   Verbatim staging record. Written 2026-08-12.

   PDF pages 5-210 (contents page gives 5-210; confirmed by reading).
   ⚠️ PDF page = printed page. OFFSET IS ZERO. Verified on pp.2,3,4,5,20,30,210.

   STRUCTURE (all verified by reading every page 5-215):
     pp.5-27    section summary / study-notes slides (NOT questions)
     p.28       "Questions" divider slide
     pp.29-209  the questions
     p.210      closing Arabic prayer slide (not a question)
     p.211      section 2 "Nutrition" begins  -> confirms contents-page ranges

   ⚠️ EVERY QUESTION IS PRINTED TWICE: an UNANSWERED page, then an ANSWERED
   page carrying the same stem+options with the key HIGHLIGHTED IN YELLOW and
   (usually) a bordered explanation box. Only the ANSWERED page is staged here.

   ⚠️ AND THREE QUESTIONS TAKE A THIRD PAGE: when the explanation box does not
   fit, it is printed ALONE on the page after the answered page.
       q39 -> box on p.107 | q59 -> box on p.148 | q60 -> box on p.151
   Those three overflow pages are why the odd/even parity of "answered" pages
   flips twice through the section. Reading only alternate pages LOSES those
   three boxes entirely.

   COUNT: 89 questions. Established twice, independently:
     (a) 89 pages carry a yellow answer highlight;
     (b) printed numbers run 1..87 but TWO numbers are printed twice
         (69 on pp.169 AND 171; 81 on pp.195 AND 197)  ->  87 + 2 = 89.

   ⚠️ THE PRINTED NUMBER IS THEREFORE NOT AN IDENTIFIER. `n` below is the
   TRUE SEQUENTIAL index 1..89; `pr` is what the page actually prints.

   BOXES: 85 of 89 carry a printed explanation box. The four that do NOT are
   n=45 (p.119), n=55 (p.139), n=83 (p.197), n=87 (p.205).
   [2026-09-02: this line said 86 with n=55 "treated as boxed-consistent". p.139 was
   re-rendered and read by the watch: key d highlighted, NO box. Moved to the unboxed list,
   as the n=55 note itself asked. The draft file had it right all along.]

   FIGURES: none. Not one question in this section prints an image. (The file's
   own p.4 says picture questions are "self-assessment ... the exam does not
   contain pictures".) So no crops were cut for this section.

   FIELD KEY
     n    true sequential number (1..89)
     pr   the number actually PRINTED on the page
     p    PDF page of the ANSWERED printing
     box  PDF page of the explanation box when it overflowed to its own page
     key  0-based index into opts
     stem/opts  verbatim, including the source's own typos (flagged in `note`)
     expl verbatim transcription of the printed explanation box ('' = none printed)
     note transcription-time observation: typo, defect, reprint, filing
   =========================================================================== */

var PEDEP_S01_STAGED = [

{ n:1, pr:1, p:30, key:0,
  stem:'When evaluating a child for stunting, which growth chart you will use?',
  opts:['height for age charts','weight for age charts','weight for length charts','body mass index charts','mid arm circumference measurements'],
  expl:'Stunting reflects chronic malnutrition, which primarily impairs linear growth. Therefore, height-for-age is the correct indicator, not weight-based charts.',
  note:'REPRINTED as n=7 (p.42) with Title-Case options and the stem reworded to "which growth chart will you use". Same key.' },

{ n:2, pr:2, p:32, key:3,
  stem:'A 4-year-old girl with Down syndrome, Saima, attends her routine annual follow-up with her mother. She is generally well, except for a history of constipation. On plotting her growth on a Down syndrome-specific chart, her height has dropped from the 75th to the 25th centile, while her weight has increased from the 50th to the 75th centile. Which of the following investigations is the most appropriate to perform?',
  opts:['Lipid profile','Abdominal ultrasound','Full blood count','Thyroid function tests','Vitamin D levels'],
  expl:'Children with Down syndrome are at high risk for hypothyroidism. The combination of growth faltering, weight gain, and constipation is classic for thyroid dysfunction.',
  note:'Height falling while weight rises is the lecture’s own endocrine pattern (13) Short stature.txt: "Height affected, Weight normal/increased -> Endocrine").' },

{ n:3, pr:3, p:34, key:3,
  stem:'Which is a characteristic of constitutional growth delay?',
  opts:['Adequate bone age','More common in girls','Anal height is affected','A delayed onset of puberty','Presentation is in infancy'],
  expl:'Constitutional growth delay presents with normal health, slowed growth, delayed bone age, and late puberty. It is more common in boys and improves with age.',
  note:'DEFECT (typo): option C prints "Anal height is affected" — plainly "Final height is affected". Printed IDENTICALLY again at n=65 (p.161), so it is the source’s own error, not a scan artefact. REPRINTED as n=65.' },

{ n:4, pr:4, p:36, key:3,
  stem:'What would be the shape of the head if craniosynostosis affects the lambdoid suture?',
  opts:['Wide and broad','Long and narrow','Prominent forehead','Flattening of the skull'],
  expl:'Localized Craniosynostosis: Sagittal suture fusion -> Long, narrow skull (scaphocephaly). Coronal suture fusion -> Asymmetrical skull (anterior plagiocephaly). Lambdoid suture fusion -> Posterior flattening of the skull (posterior plagiocephaly).',
  note:'REPRINTED as n=68 (p.167) identically, and again as n=83 (p.197) with a FIFTH option "Plagiocephalic" added — see the defect note on n=83.' },

{ n:5, pr:5, p:38, key:1,
  stem:'How is a very low birth weight infant defined?',
  opts:['Birth weight less than 2500 g','Birth weight less than 1500 g','Birth weight less than 1750 g','Birth weight less than 1000 g','Birth weight less than 500'],
  expl:'Classification: Low Birth Weight (LBW): < 2500 g. Very Low Birth Weight (VLBW): < 1500 g. Extremely Low Birth Weight (ELBW): < 1000 g.',
  note:'Option E prints "less than 500" with no unit; the reprint at n=69 (p.169) prints "less than 500 g". REPRINTED as n=69.' },

{ n:6, pr:6, p:40, key:3,
  stem:'A 2-year-old girl is brought to the clinic for a routine check-up. Her mother states that she does not like to eat but prefers eating only a few spoons of pasta each day. What is the best method to check her nutritional status?',
  opts:['Head circumference','Height','Weight','Weight-for-height','Skinfold thickness'],
  expl:'Weight-for-height reflects acute malnutrition (wasting), unlike height-for-age (chronic). It is the best tool to assess current nutritional status in toddlers.',
  note:'⚠️ TRUNCATED OPTION REPAIRED FROM THE BANK’S OWN REPRINT. This page prints option E as "Skinfold thicknes" because the explanation box is laid OVER the end of the line; the reprint at n=71 (p.173) prints "Skinfold thickness" clear of the box. REPRINTED as n=71.' },

{ n:7, pr:7, p:42, key:0,
  stem:'When evaluating a child for stunting, which growth chart will you use?',
  opts:['Height-for-age charts','Weight-for-age charts','Weight-for-length charts','Body mass index charts','Mid-arm circumference measurements'],
  expl:'Stunting reflects chronic undernutrition, which primarily affects linear growth (height) rather than just weight.',
  note:'WITHIN-BANK REPRINT of n=1 (p.30). Same key, same five options, stem differs only by word order. Different box wording. HOLD ONCE.' },

{ n:8, pr:8, p:44, key:2,
  stem:'A 7-year-old boy is brought by his grandmother to the pediatrician due to concerns about his growth. According to her, the boy’s mother is of average height, while the father is slightly shorter than the mother. On examination, the boy is happy, playful, and shows no dysmorphic features. His height is 110 cm, just below the 3rd centile, and his weight is on the 3rd centile. Physical examination is otherwise normal. What is the most likely cause of his short stature?',
  opts:['Achondroplasia','Constitutional delay of growth and puberty','Familial short stature','Growth hormone deficiency','Vitamin D deficiency'],
  expl:'He has proportionate height and weight both at low centiles, no dysmorphism, and a short parent -> consistent with familial short stature.',
  note:'REPRINTED as n=72 (p.175). Matches "Case 1" in 13) Short stature.txt (3rd centile, normal velocity, short parents, bone age = chronological age -> familial). Compare n=25 (Tom): SAME options and key, DIFFERENT vignette — not a fold.' },

{ n:9, pr:9, p:46, key:1,
  stem:'What is the most important factor affecting growth during the "infantile phase" in humans?',
  opts:['Maternal nutrition','Infant nutrition','Size at birth','Vitamins','Parental size'],
  expl:'During infancy, nutrition is the main driver of growth, unlike later childhood (GH-driven) or fetal life (placental/maternal factors).',
  note:'REPRINTED as n=73 (p.177). Compare n=36 and n=54, which ask the same fact over DIFFERENT option sets — those are held separately.' },

{ n:10, pr:10, p:48, key:1,
  stem:'What is the main drive for growth in the childhood phase?',
  opts:['Nutrition','Growth hormone','Testosterone','Thyroid hormones','Testosterone and estrogen'],
  expl:'From 2 years to puberty, growth depends mostly on GH. Pubertal hormones dominate later.',
  note:'PRINTED THREE TIMES: here, n=74 (p.179) and n=82 (p.195). Same five options and same key on all three.' },

{ n:11, pr:11, p:50, key:3,
  stem:'Which of the following statements regarding measuring and plotting children’s growth is true?',
  opts:['Correction for prematurity should be made up to the age of 6 months','Final height usually approximates the father’s height','Once a child is 5 years old, height does not usually deviate from the centile line','It is normal for an infant’s weight to cross centiles in the first months of life'],
  expl:'Early infant growth is variable, so centile crossing is common. By age 5, growth usually stabilizes along a centile.',
  note:'REPRINTED as n=76 (p.183) with a fuller box.' },

{ n:12, pr:12, p:52, key:0,
  stem:'Which of the following is a character of familial short stature?',
  opts:['Height falls within 2 centile spaces of mid-parental height','More common in girls','Delayed onset of puberty','Presentation is in adolescence'],
  expl:'Children with familial short stature track a low centile consistent with genetic potential. Puberty is normal and not delayed.',
  note:'FOUR options only. REPRINTED as n=77 (p.185).' },

{ n:13, pr:13, p:54, key:1,
  stem:'A 13-year-old girl is brought to the clinic for concerns about delayed puberty. She is in the 10th percentile for height and 25th percentile for weight. Physical examination reveals no signs of puberty, and her bone age is mildly delayed. Her mother also had a past history of delayed puberty. What is the most likely diagnosis?',
  opts:['Turner syndrome','Constitutional growth delay','Growth hormone deficiency','Hypothyroidism','Familial short stature'],
  expl:'Delayed puberty + mildly delayed bone age + family history = constitutional growth delay, a benign variant.',
  note:'REPRINTED as n=78 (p.187). Matches "Case 2" in 13) Short stature.txt.' },

{ n:14, pr:14, p:56, key:0,
  stem:'A 4-month-old infant is brought in for concerns about small size. The infant was born at 32 weeks gestation and has been primarily formula-fed. Which of the following is the first most important factor to consider in managing this infant’s growth?',
  opts:['Adjusting for corrected gestational age','Introducing solid foods early','Switching to a higher-calorie formula','Recommending breastfeeding'],
  expl:'For preterm babies, growth assessment must use corrected age (chronological age – weeks of prematurity) until about 2 years.',
  note:'REPRINTED as n=80 (p.191). ⚠️ The box says "until about 2 years"; 13) Short stature.txt says correction is "continued for the first year of life", and "in extremely preterm infants, until 2 years of age". The bank states the wider rule without the qualifier — note in the explanation.' },

{ n:15, pr:15, p:58, key:0,
  stem:'What is the fastest period of growth in a normal human?',
  opts:['Fetal','Infantile','Childhood','Prepubertal','Pubertal'],
  expl:'The fetal period has the highest growth velocity, with rapid cell division and tissue growth. Postnatal phases are slower.',
  note:'⚠️ THE BANK CONTRADICTS ITSELF HERE — see n=42 (p.113), which keys "Infancy" as the fastest period and whose box claims infancy surpasses fetal. This printing (FETAL) is corroborated by the reprint at n=81 (p.193) AND by the file’s own summary slide p.7 ("Fetal phase (30% of final height, Fastest period of Growth)"). Fetal wins 3-1.' },

{ n:16, pr:16, p:60, key:2,
  stem:'A 3-year-old boy’s height has fallen from the 50th percentile to below the 3rd percentile over the past year. What is the most likely cause?',
  opts:['Familial short stature','Constitutional growth delay','Growth hormone deficiency','Turner syndrome'],
  expl:'Crossing down centiles is always abnormal. A significant drop in height (not weight) is most suggestive of GH deficiency.',
  note:'REPRINTED as n=84 (p.199).' },

{ n:17, pr:17, p:62, key:3,
  stem:'Which of the following statements is FALSE as regards growth in males?',
  opts:['Adult males are taller than adult females','Males have a longer childhood growth phase than females','The peak height at puberty is higher in males than in females','Growth stops earlier in males'],
  expl:'Growth stops later in males because puberty occurs later and lasts longer.',
  note:'REPRINTED as n=86 (p.203). 14) Puberty.txt: "Girls have peak height velocity average 2 years before boys".' },

{ n:18, pr:18, p:64, key:1,
  stem:'You are giving a lecture to medical students about the treatment of precocious puberty and its importance in preserving height. You discuss certain population segments where treatment would be most indicated and beneficial. Which of the following patient populations would benefit most from GnRH agonist therapy?',
  opts:['Younger children with rapidly progressing noncentral precocious puberty','Younger children with rapidly progressing central precocious puberty','Older children with rapidly progressing noncentral precocious puberty','Older children with rapidly progressing central precocious puberty','Younger boys with slowly progressing central precocious puberty'],
  expl:'GnRH agonists are most effective in young children with fast-progressing central precocious puberty, as treatment delays bone maturation and helps preserve adult height.',
  note:'GnRH agonists act on the HPG axis, so they only work in CENTRAL disease — that is the discriminator being tested.' },

{ n:19, pr:19, p:66, key:4,
  stem:'Which of the following is NOT associated with short stature?',
  opts:['Chronic renal failure','Hypothyroidism','PEM','Thalassemia major','G6PD deficiency'],
  expl:'Conditions like chronic renal failure, hypothyroidism, PEM, and thalassemia major impair growth. G6PD deficiency only causes hemolysis during oxidative stress but does not affect linear growth.',
  note:'' },

{ n:20, pr:20, p:68, key:0,
  stem:'A 6-month-old infant has an upper-to-lower segment ratio of 1.7:1. What does this indicate?',
  opts:['Normal','Long trunk','Short trunk','Disproportionate limbs'],
  expl:'At birth, the ratio is 1.7:1, gradually decreasing with age as limbs grow faster than the trunk. Thus, 1.7:1 at 6 months is expected and normal.',
  note:'13) Short stature.txt lists "Proportions (upper/lower segment, arm span)" under Examination but prints no numeric table — the ratio itself is filled from general knowledge and must be tagged.' },

{ n:21, pr:21, p:70, key:2,
  stem:'Janine, a 9-month-old female infant, is seen by her family doctor because of concern that she is not growing fast enough. She is on the 5th centile for height and 2nd centile for weight. What is the greatest influence on her growth rate at this age?',
  opts:['Genes','Growth hormone','Nutrition','Oestrogen','Testosterone'],
  expl:'At 9 months of age, nutrition is the most important factor influencing growth. Poor intake or malabsorption can lead to weight and height centile drop despite normal hormones and genes.',
  note:'Same underlying fact as n=9/36/54 but a different vignette and a different option set — held separately.' },

{ n:22, pr:22, p:72, key:0,
  stem:'John, a 3-year-old boy, is referred to paediatric outpatients because of concern about the development of pubic and axillary hair. His testes are 1.5 mL in size (prepubertal). His blood pressure is 100/75 mmHg. Gonadotrophin levels are undetectable (prepubertal), but his bone age is 5 years. What is the most likely cause of his early pubertal development?',
  opts:['Adrenal tumor','Brain tumor','Idiopathic precocious puberty','Prader-Willi syndrome','Testicular tumor'],
  expl:'Early pubic hair, advanced bone age, and undetectable gonadotropins suggest peripheral (gonadotropin-independent) precocious puberty. An adrenal tumor can produce androgens causing early virilization without testicular enlargement.',
  note:'The prepubertal testes with virilization is the discriminator: androgen from outside the gonad. Contrast n=39, same physiology from an exogenous gel.' },

{ n:23, pr:23, p:74, key:2,
  stem:'Chelsea, a 7-year-old girl, is brought by her mother to the paediatric clinic. Her mother is concerned about early puberty. Chelsea has developed breasts and recently some pubic hair. On examination, she has breast development stage 3 and pubic hair stage 2. She has not started her periods but has had a growth spurt. A pelvic ultrasound shows multicystic ovaries and an enlarging uterus. What is the most likely cause of her early pubertal development?',
  opts:['Brain tumor','Congenital adrenal hyperplasia','Idiopathic precocious puberty','Ovarian tumor','Turner syndrome'],
  expl:'True central precocious puberty is suggested by breast development, growth spurt, and estrogen-sensitive organ changes like multicystic ovaries and enlarged uterus. In girls, this is most commonly idiopathic.',
  note:'' },

{ n:24, pr:24, p:76, key:3,
  stem:'Sophia, an 18-month-old girl, is brought to outpatients by her mother, who is concerned as Sophia has developed breasts. She is otherwise well and growing normally. On examination, she has breast development stage 3 (BIII), but no pubic or axillary hair. Her bone age is 20 months. What is the most likely cause of her early pubertal development?',
  opts:['Brain tumor','Congenital adrenal hyperplasia','Idiopathic precocious puberty','Premature thelarche','Premature puberty'],
  expl:'Sophia has isolated breast development without pubic or axillary hair and with normal growth and bone age. This is characteristic of premature thelarche, a benign and self-limiting condition in infants and toddlers. There are no signs to suggest true precocious puberty or hormonal pathology.',
  note:'Compare n=64 (p.159), also premature thelarche but a different vignette and a different option set — both held.' },

{ n:25, pr:25, p:78, key:2,
  stem:'Tom, a 7-year-old boy, is referred by his GP due to concerns about his growth. He is adopted, with no details available about his biological father; his biological mother was of average height. He is a happy, playful boy with no dysmorphic features. His height is 110 cm (just below the 0.4th centile), and his weight is also on the 0.4th centile. Physical examination is normal. What is the most likely cause of his short stature?',
  opts:['Achondroplasia','Constitutional delay of growth and puberty','Familial short stature','Growth hormone deficiency','Vitamin D deficiency'],
  expl:'Proportionate short stature with normal development and growth tracking suggests a familial pattern, especially in the absence of concerning features. Adopted children without parental data make this harder to confirm but still likely.',
  note:'⚠️ SAME OPTIONS + SAME KEY + DIFFERENT STEM as n=8. Per the folding test this is NOT a fold — both held.' },

{ n:26, pr:26, p:80, key:4,
  stem:'May, a 14-year-old girl, is referred by her school nurse because she is below the 0.4th centile for height. Her mother is 167 cm tall, and her father is 175 cm tall. She was born at term, birth weight 3.2 kg. She has always been the shortest in her class. On examination, she appears in early puberty. Her blood pressure is 135/65 mmHg. Which investigation is most likely to lead to a correct diagnosis?',
  opts:['Coeliac screen','Thyroid stimulating hormone (TSH)','Full blood count','MRI scan of the brain','Karyotype'],
  expl:'Turner syndrome needs to be excluded as she has always been short. The elevated blood pressure may be because of an undetected coarctation of the aorta which is associated with the syndrome',
  note:'Shares one option menu with n=27 and n=28, keyed differently in each. 13) Short stature.txt lists "Karyotyping (All girls)" in its investigation stepladder.' },

{ n:27, pr:27, p:82, key:1,
  stem:'Eleanor, a 7-year-old girl, is referred for short stature. She is on the 5th centile for height and 25th centile for weight. Nine months ago, her height and weight were on the 15th centile. Her mother notes that she has become lethargic, her school performance has worsened, and she refuses to participate in sports. Which investigation is most likely to lead to a correct diagnosis?',
  opts:['Coeliac screen','Thyroid stimulating hormone (TSH)','Full blood count','MRI scan of the brain','Karyotype'],
  expl:'Falling height with preserved or increased weight, lethargy, and cognitive decline are classic for hypothyroidism. TSH testing will help confirm the diagnosis.',
  note:'Same menu as n=26/28. Grounded by 13) Short stature.txt: "Height affected, Weight normal/increased -> Endocrine".' },

{ n:28, pr:28, p:84, key:0,
  stem:'Jake, a 5-year-old boy with Down syndrome, presents for a routine check-up. He has dropped one centile in height and two centile lines in weight over the past 6 months. His mother reports increased irritability and poor appetite. Which investigation is most likely to lead to a correct diagnosis?',
  opts:['Coeliac screen','Thyroid stimulating hormone (TSH)','Full blood count','MRI scan of the brain','Karyotype'],
  expl:'Children with Down syndrome are at increased risk for coeliac disease, which can present with growth faltering, irritability, and poor appetite. A coeliac screen is warranted.',
  note:'Same menu as n=26/27. WEIGHT falling faster than height is the discriminator against n=2 (Down syndrome, height falling, weight rising -> thyroid). The two Down-syndrome questions key differently and the weight direction is the whole reason.' },

{ n:29, pr:29, p:86, key:3,
  stem:'A 12-year-old girl is referred to the paediatric endocrinology clinic for evaluation of delayed puberty. She is diagnosed with constitutional delay of growth. What investigation is most likely to confirm this diagnosis?',
  opts:['MRI brain','Thyroid function tests','Growth hormone level','Bone age','Karyotype'],
  expl:'Constitutional delay is confirmed by a bone age that is delayed relative to chronological age. It helps differentiate from pathological causes of delayed puberty.',
  note:'13) Short stature.txt: "Bone age ... A. Delayed -> Constitutional delay of growth and puberty/Endocrine. B. Normal -> Familial".' },

{ n:30, pr:30, p:88, key:0,
  stem:'A 15-year-old girl is referred to the paediatric endocrinology clinic for delayed puberty. Her height is on the 0.4th centile. She has an ejection systolic murmur and widely spaced nipples. Gonadotrophin levels are raised. What is the most likely diagnosis?',
  opts:['Turner syndrome','Klinefelter syndrome','McCune-Albright syndrome','Hypothyroidism','Silver-Russell syndrome'],
  expl:'Short stature, delayed puberty, heart murmur, and raised gonadotropins point to Turner syndrome. It is caused by gonadal dysgenesis and confirmed with karyotyping.',
  note:'Raised gonadotrophins = hypergonadotropic hypogonadism = primary gonadal failure. Klinefelter is male, so it cannot be offered seriously here.' },

{ n:31, pr:31, p:90, key:0,
  stem:'A 5-year-old boy is referred to a paediatric specialist for tall stature and headaches. On examination, he has testicular enlargement and bilateral papilloedema. What investigation is most likely to confirm the diagnosis?',
  opts:['CT or MRI brain scan','Karyotype','ACTH level','17-Hydroxyprogesterone','Bone age'],
  expl:'Precocious puberty and neurological symptoms like headache and papilledema suggest a central brain lesion (e.g., hypothalamic hamartoma). Brain imaging is the key investigation.',
  note:'Testicular ENLARGEMENT (unlike n=22) means the gonad is being driven — central disease.' },

{ n:32, pr:32, p:92, key:3,
  stem:'There are many causes of short stature in children. Which of the following does not cause short stature?',
  opts:['Turner syndrome','Constitutional delay of growth','Rickets','Thyrotoxicosis','Cystic fibrosis'],
  expl:'Thyrotoxicosis typically causes growth acceleration, not short stature. The others are recognized causes of growth failure.',
  note:'' },

{ n:33, pr:33, p:94, key:2,
  stem:'A 5-year-old boy is referred by the school nurse because his height and weight are both on the 99th centile at school entry. He appears healthy, with tall parents, no birthmarks, and normal blood pressure. What is the most appropriate next step?',
  opts:['Thyroid function tests','9 a.m. cortisol level','Calculate mid-parental height','Dietary assessment','Genetic studies for Prader-Willi syndrome'],
  expl:'A child growing along the 99th centile with tall parents and no red flags likely has familial tall stature. Calculating mid-parental height is appropriate to assess genetic potential.',
  note:'"no birthmarks" is quietly excluding McCune-Albright / neurofibromatosis.' },

{ n:34, pr:34, p:96, key:0,
  stem:'A 14-month-old baby girl is brought to the clinic due to concerns about her size. She is on the 2nd centile for weight, height, and head circumference. She was born on the 2nd centile. She is taking cow’s milk, fully weaned, with normal stools and unremarkable examination. Her parents are short and are concerned she may also be small as she grows. What is the most likely cause of her size?',
  opts:['Constitutionally small','Cow’s milk protein enteropathy','Hypothyroidism','Growth hormone deficiency','Skeletal dysplasia'],
  expl:'Consistent growth along low centiles since birth in a healthy child with short parents suggests constitutional smallness rather than pathological causes.',
  note:'' },

{ n:35, pr:35, p:98, key:2,
  stem:'Which of the following is the most important cause of failure to establish breathing and the requirement of resuscitation at birth?',
  opts:['Congenital lung anomalies','Birth trauma','Birth asphyxia','Retained lung fluid'],
  expl:'Birth asphyxia is the leading cause of neonatal respiratory failure and need for resuscitation. Congenital anomalies or retained fluid are less common causes.',
  note:'⚠️ FILING: this is a PERINATAL question printed inside the Growth & Puberty section. The endpoint file has its own Perinatal section (pp.703-773), so this is a stray. Recommend chapter `perinatal`, secondary noted.' },

{ n:36, pr:36, p:100, key:0,
  stem:'What is the most important determinant of growth in the infant phase?',
  opts:['Nutrition','Genetic factors','Hormonal influence','Physical activity'],
  expl:'Infant growth relies primarily on adequate nutrient intake. Even with normal genes and hormones, poor nutrition can slow growth significantly.',
  note:'Same fact as n=9, but the option set is REPLACED (4 generic options vs 5 specific ones). Per the folding test that is a NEW QUESTION — hold both.' },

{ n:37, pr:37, p:102, key:3,
  stem:'Laila, an 11-month-old girl, is being monitored by her health provider. Her birthweight was 2.4 kg (2nd centile) and she has remained on the 2nd centile, now weighing 7.0 kg. Her mother is on the 5th centile and her father is on the 40th centile for height. She is well, has a good appetite and has never needed to visit her doctor. She has no abnormal signs on examination and her development is normal. What is the most likely diagnosis?',
  opts:['Cow milk protein allergy','Stunting','Marasmus','Normal','Vitamin D deficiency'],
  expl:'Laila’s growth follows her familial pattern (parents’ heights), and she is healthy and developing normally, indicating constitutional smallness rather than pathology.',
  note:'Stem prints "What is  the most likely diagnosis ?" with a double space and a space before the question mark — tidied.' },

{ n:38, pr:38, p:104, key:3,
  stem:'You are examining the growth chart of an individual who presented as a teenager complaining of short stature and delayed puberty. He has had X-rays for bone age assessment done twice at the age of 5 and at the age of 11 years and both were somewhat delayed. Finally, he ended with a height that is compatible with his mid-parental height. Which type of short stature did he suffer from?',
  opts:['Genetic short stature','Growth hormone deficiency','Chromosomal disorder','Constitutional short stature','Nutritional short stature'],
  expl:'Delayed bone age and puberty with eventual normal adult height is characteristic of constitutional growth delay.',
  note:'' },

{ n:39, pr:39, p:106, box:107, key:1,
  stem:'A 2-year-old boy presents to the office with his father due to concerns over the appearance of his son’s genitals. He reports that over the last 2 months he has noticed his penis has gotten longer, frequent erections, and what appears to be a few dark strands of hair. On examination, you confirm that the phallus is long for stated age, pubic hair that is curly, and testicles that are less than 2.5 cm. His father denies any past medical history for his son and even states that he had imaging of his head during an ER visit for a fall 2 weeks prior which was normal. When you question the father about his onset of puberty, he claims to have noticed changes at 14 years old. He denies any other family history of illness. The child lives with his mother and father. Medications in the home include maternal intake of daily multivitamins and paternal gel for decreased libido. Which of the following statements is likely an explanation for this child’s presentation?',
  opts:['Noncentral precocious puberty hypothalamic-pituitary-gonadal axis early activation','Noncentral precocious puberty from exogenous source of sex hormone','Central precocious puberty hypothalamic-pituitary-gonadal axis early activation','Central precocious puberty from exogenous source of sex hormone','Incomplete precocious puberty based on history and early thelarche'],
  expl:'This 2-year-old boy shows signs of virilization (penile growth, pubic hair) but prepubertal testicular size (<2.5 cm), which suggests peripheral (gonadotropin-independent) precocious puberty, rather than central (which would have testicular enlargement). The history of paternal testosterone gel at home raises concern for exogenous androgen exposure, which is a common cause of noncentral precocious puberty in young children. Central activation of the HPG axis is unlikely given the very young age and small testes.',
  note:'⚠️ FIRST OVERFLOW: the explanation box is printed ALONE on p.107, the page AFTER the answered page. Reading only the highlighted pages would have lost it. Options A and C are internally contradictory ("noncentral ... HPG axis early activation") — noncentral disease is by definition NOT HPG-driven; they are deliberate nonsense distractors.' },

{ n:40, pr:40, p:109, key:1,
  stem:'What is the most likely cause of faltering growth in a 9-month-old infant?',
  opts:['Small atrial septal defect (ASD)','Persistent diarrhea','Physiological gastroesophageal reflux','Frequent minor upper respiratory infections'],
  expl:'Chronic or frequent diarrhea leads to poor nutrient absorption and weight/height faltering; minor infections or reflux are less impactful.',
  note:'' },

{ n:41, pr:41, p:111, key:0,
  stem:'During which phase of growth is faltering most commonly seen?',
  opts:['Infantile','Childhood','Pubertal','Fetal'],
  expl:'Infancy is a high-risk period for growth faltering due to dependence on nutrition and vulnerability to illness.',
  note:'Compare n=67 (p.165), same fact over a DIFFERENT five-option set — both held.' },

{ n:42, pr:42, p:113, key:0,
  stem:'Which is the fastest period of growth throughout life?',
  opts:['Infancy','Childhood','Puberty','Adolescence'],
  expl:'Growth velocity is highest during infancy, surpassing fetal, childhood, and pubertal phases.',
  note:'⚠️⚠️ DEFECT — THE BOX CONTRADICTS THE BANK’S OWN ANSWER ELSEWHERE. n=15 (p.58) and n=81 (p.193) both key FETAL for "the fastest period of growth", and the file’s own summary slide p.7 states "Fetal phase (30% of final height, Fastest period of Growth)". Here FETAL IS NOT OFFERED, so "Infancy" is the best available option and the key is defensible; but the BOX’s claim that infancy surpasses fetal is wrong on the file’s own evidence. Key as printed, note the contradiction.' },

{ n:43, pr:43, p:115, key:0,
  stem:'Which factor mainly determines the size of a newborn at birth?',
  opts:['Maternal size','Paternal size','Growth hormone','Nutrition after birth'],
  expl:'Maternal genetics and uterine environment primarily influence birth size, more than paternal genetics or postnatal nutrition.',
  note:'' },

{ n:44, pr:44, p:117, key:0,
  stem:'Which hormone is least related to growth in early life?',
  opts:['Growth hormone','Insulin','Thyroid hormone','IGF-1'],
  expl:'Early infancy growth is largely driven by nutrition, insulin, and thyroid hormones, while GH plays a minor role initially.',
  note:'Counter-intuitive but correct: GH-driven growth begins around 6-12 months. Consistent with the bank’s own n=9/10 pairing (nutrition in infancy, GH in childhood).' },

{ n:45, pr:45, p:119, key:3,
  stem:'Low birth weight in infants may predispose to which later condition?',
  opts:['Childhood obesity','Tall stature','Early puberty','Reduced IQ'],
  expl:'',
  note:'⚠️ NO EXPLANATION BOX PRINTED — one of only three in the section (with n=83, n=87). ⚠️ DEFECT: arguably TWO correct options. Option A "Childhood obesity" is a well-recognised consequence of low birth weight through metabolic programming (the Barker hypothesis), and LBW is also associated with early puberty. The key (reduced IQ) is defensible but not uniquely so. Key as printed, note the alternative.' },

{ n:46, pr:46, p:121, key:0,
  stem:'Which type of scale provides the most accurate measurement of infant weight?',
  opts:['Electronic scale','Spring balance','Bathroom scale','Manual balance'],
  expl:'Electronic scales are precise for small weight changes, unlike spring, bathroom, or manual balances.',
  note:'' },

{ n:47, pr:47, p:123, key:0,
  stem:'How should height be measured in children below 3 years of age?',
  opts:['Recumbent length (lying down)','Standing height','Sitting height','Arm span'],
  expl:'Children under 3 cannot reliably stand straight; recumbent measurement is standard.',
  note:'' },

{ n:48, pr:48, p:125, key:0,
  stem:'What does head circumference mainly reflect?',
  opts:['Brain growth','Skull bone growth','Body weight','Muscle mass'],
  expl:'Brain growth drives skull expansion in infancy; weight or muscle mass has minimal impact.',
  note:'Matches the summary slide p.8: "Head circumference (OFC) ... Reflects brain growth."' },

{ n:49, pr:49, p:127, key:0,
  stem:'Which index is used to assess underweight and obesity?',
  opts:['Body Mass Index (BMI)','Mid-arm circumference','Waist/hip ratio','Growth velocity'],
  expl:'BMI accounts for height and weight and is widely used to classify underweight, overweight, and obesity.',
  note:'' },

{ n:50, pr:50, p:129, key:0,
  stem:'What is constitutional growth delay considered as?',
  opts:['A variation of normal growth','Growth hormone deficiency','Malnutrition','Endocrine disorder'],
  expl:'It is a benign pattern with delayed growth and puberty but normal adult height.',
  note:'' },

{ n:51, pr:51, p:131, key:0,
  stem:'Which condition presents with delayed puberty and short stature in teenage years?',
  opts:['Constitutional growth delay','Familial short stature','Turner syndrome','Hypothyroidism'],
  expl:'Teens with delayed puberty and proportionate short stature usually have constitutional delay, often with family history.',
  note:'' },

{ n:52, pr:52, p:133, key:0,
  stem:'Growth during childhood is usually:',
  opts:['Slower than in infancy','Faster than infancy','Equal to puberty','Independent of nutrition'],
  expl:'Childhood growth is steadier and slower compared to rapid infant growth.',
  note:'' },

{ n:53, pr:53, p:135, key:0,
  stem:'In constitutional growth delay, the final adult height is usually:',
  opts:['Normal','Less than expected','Below 150 cm','Above average'],
  expl:'Although delayed during adolescence, final adult height is typically within the normal range.',
  note:'' },

{ n:54, pr:54, p:137, key:0,
  stem:'The infantile growth phase is largely dependent on:',
  opts:['Nutrition','Genetics','Hormones','Puberty'],
  expl:'Early postnatal growth is primarily nutrition-dependent.',
  note:'Third option-set variant of the n=9 / n=36 fact. Held separately.' },

{ n:55, pr:55, p:139, key:3,
  stem:'The infantile growth phase accounts for approximately how much of eventual height?',
  opts:['40%','30%','20%','15%'],
  expl:'',
  note:'NO BOX on p.139 — re-rendered and read 2026-09-02: key d highlighted, nothing printed below the options. Unboxed, like n=45/83/87. The summary slide p.7 states "Infantile phase (15% of final height)", which corroborates the key.' },

{ n:56, pr:56, p:141, key:0,
  stem:'What is the most common cause of faltering growth in infants?',
  opts:['Inadequate weight gain','Genetic short stature','Growth hormone deficiency','Endocrine disorder'],
  expl:'Insufficient nutrition is the leading cause, rather than endocrine or genetic disorders.',
  note:'Summary slide p.27: "Most common cause of faltering growth: Inadequate calorie intake."' },

{ n:57, pr:57, p:143, key:2,
  stem:'A 7-year-old girl presents to your office with her mother noting pubic hair growth over the last month. The girl also has started to develop breast buds. Growth and development are normal. Maternal history is remarkable for pubarche at age 11 years. Past medical history and family history are otherwise unremarkable. Your physical examination reveals genitalia and breast Tanner stage 3. Which of the following laboratory findings is most likely to be found?',
  opts:['Decreased estradiol, luteinizing hormone (LH) detectable, normal bone age for age','Decreased estradiol, LH undetectable, normal bone age for age','Elevated estradiol, LH detectable, advanced bone age for age','Elevated estradiol, LH detectable, normal bone age for age','Elevated estradiol, LH undetectable, advanced bone age for age'],
  expl:'Central precocious puberty shows activation of the HPG axis with elevated LH and estradiol, and bone age is typically advanced relative to chronological age.',
  note:'' },

{ n:58, pr:58, p:145, key:2,
  stem:'Parents bring their 6-month-old son to see you. He is symmetrically less than the fifth percentile for height, weight, and head circumference on routine growth curves. He was born at 30 weeks of gestation and weighed 1000 g. He was a planned pregnancy, and his mother’s prenatal course was uneventful until an automobile accident initiated the labor. He was ventilated for 3 days in the intensive care unit (ICU), but otherwise did well without ongoing problems. He was discharged at 8 weeks of life. Which of the following is the mostly likely explanation for his small size?',
  opts:['Chromosomal abnormality','Protein-calorie malnutrition','Normal ex-premie infant growth','Intestinal malabsorption','Congenital hypothyroidism'],
  expl:'Preterm infants often track below standard growth curves but follow their own percentile pattern; this symmetric low growth is typical for a healthy ex-premature infant without additional pathology.',
  note:'Stem prints "the mostly likely explanation" — the source’s own slip, tidied to "most likely".' },

{ n:59, pr:59, p:147, box:148, key:2,
  stem:'A 2-year-old boy had been slightly less than the 50th percentile for weight, height, and head circumference, but in the last 6 months he has fallen to slightly less than the 25th percentile for weight. The pregnancy was normal, his development is as expected, and the family reports no psychosocial problems. The mother says that he is now a finicky eater (wants only macaroni and cheese at all meals), but she insists that he eat a variety of foods. The meals are marked by much frustration for everyone. His examination is normal. Which of the following is the best next step in his care?',
  opts:['Sweat chloride testing','Ophthalmologic examination for retinal hemorrhages','Reassurance and counseling for family about normal childhood development','Testing of stool for parasites','Magnetic resonance imaging (MRI) of the brain'],
  expl:'Mild faltering due to picky eating in an otherwise healthy child is common; supportive counseling and monitoring are preferred over unnecessary tests.',
  note:'⚠️ SECOND OVERFLOW: explanation box printed alone on p.148.' },

{ n:60, pr:60, p:150, box:151, key:0,
  stem:'An 8-year-old boy has short stature. He has no significant past medical history and his physical examination is normal. The growth curve shows growth parallel to a growth line at the fifth percentile. His father is 5 ft 4 in (163 cm), and his mother is 5 ft 1 in (155 cm). Radiograph of the left wrist shows a bone age equal to the chronological age. Which of the following is the most appropriate next step?',
  opts:['Reassure the parents that the child has normal prepubertal development.','Order thyroid function tests.','Order chromosomal analysis.','Refer to pediatric endocrinology for evaluation.','Obtain further radiographic imaging.'],
  expl:'Proportionate short stature with growth tracking along a percentile line and normal bone age usually indicates familial short stature. No further testing is required unless growth pattern changes.',
  note:'⚠️ THIRD OVERFLOW: explanation box printed alone on p.151. Bone age EQUAL to chronological age is the discriminator — 13) Short stature.txt: "Normal -> Familial".' },

{ n:61, pr:61, p:153, key:2,
  stem:'A 16-year-old boy complains that he is the shortest boy in his class. He has a normal past medical history, and although always a bit small for age, he has really noticed that he has fallen behind his peers in the last 2 years. He is Tanner stage 3 and is at the 5th percentile for height. His father began puberty at the age of 16 and completed his growth at the age of 19; he is now 6 ft 2 in (188 cm) tall. His mother began her pubertal development at the age of 10 and had her first menstrual period at the age of 13; her height is 5 ft 4 in (163 cm). Which of the following is the single most appropriate first intervention?',
  opts:['Chromosomal analysis','Liver function studies','Measurement of bone age','Measurement of somatomedin C','Pediatric endocrinology referral'],
  expl:'Bone age assessment helps differentiate constitutional delay of growth and puberty from pathological causes and is the first step in evaluating delayed puberty.',
  note:'"Somatomedin C" is IGF-1 under its old name — worth spelling out for the learner.' },

{ n:62, pr:62, p:155, key:4,
  stem:'You are seeing 10-year-old girl for evaluation of short stature. Which of the following are important to the workup?',
  opts:['History and physical including examination of growth chart','Parental height, growth pattern, and timing of puberty','Birth weight and length','Assessment for underlying systemic disease','All of the above'],
  expl:'A complete evaluation includes history, growth chart review, parental heights, birth history, and assessment for systemic disease to identify potential causes.',
  note:'' },

{ n:63, pr:63, p:157, key:2,
  stem:'A 10-year-old girl is 4 ft 10 in (147 cm) tall. Her father is 5 ft 10 in (178 cm) tall, and her mother is 5 ft 5 in (165 cm) tall. Over the past 3 years she has dropped from the 25th percentile for height to the 5th percentile. Her weight has remained stable. Radiographs show bone age is delayed. Which of the following is the most appropriate next step in her management?',
  opts:['Send patient to the emergency department for CT evaluation of the brain.','Obtain growth hormone level.','Obtain IGF-1 level.','Start growth hormone injections.','Provide reassurance to parents'],
  expl:'This child has evidence of possible growth hormone deficiency. Obtaining an IGF-1 level would be the most appropriate initial choice. Growth hormone deficiency is not an emergent condition but the earlier the diagnosis is made the sooner appropriate treatment can be initiated. Obtaining a growth hormone level would not be diagnostically helpful because its secretion is pulsatile. Referral to a pediatric endocrinologist would be warranted if initial screening tests confirm the suspected growth hormone deficiency.',
  note:'Directly grounded by 13) Short stature.txt: "GH testing: No use of basal GH level! GH secreted in pulses" and "Do not jump to GH tests early!!". The investigation ladder there puts IGF-1/IGFBP-3 at step one and GH provocation at step three.' },

{ n:64, pr:64, p:159, key:4,
  stem:'A 5-year-old girl has bilateral breast development that was first noticed 6 months ago. She takes no medications, and no source of exogenous estrogen is present in the home. Family history is unremarkable. Physical examination reveals a girl who is at the 50th percentile for height and weight, with normal blood pressure, normal skin without oiliness, Tanner stage II breasts, soft abdomen without palpable masses, no body odor, no pubic/axillary hair, and mild estrogenization of the vagina. Which of the following is the most likely explanation for the child’s breast development?',
  opts:['Adrenal tumor','Central precocious puberty','Congenital adrenal hyperplasia','Premature adrenarche','Premature thelarche'],
  expl:'Isolated, mild breast development in young girls without pubic/axillary hair or accelerated growth is benign premature thelarche.',
  note:'Same diagnosis as n=24 but a different vignette and a different option set — both held.' },

{ n:65, pr:65, p:161, key:3,
  stem:'Which is a characteristic of constitutional growth delay?',
  opts:['Adequate bone age','More common in girls','Anal height is affected','A delayed onset of puberty','Presentation is in infancy'],
  expl:'Children with constitutional growth delay have delayed bone age and puberty, but eventually reach normal adult height. It is more common in boys.',
  note:'WITHIN-BANK REPRINT of n=3 (p.34), identical down to the "Anal height" typo. HOLD ONCE.' },

{ n:66, pr:66, p:163, key:3,
  stem:'What is the first sign of normal puberty in girls?',
  opts:['Height acceleration','Pubic hair changes','Menarche','Palpable breast bud','Clitoris growth'],
  expl:'Thelarche is the first sign of puberty in girls, typically around age 9–11. Menarche and pubic hair changes occur later.',
  note:'Pairs with n=85 (p.201), which asks for the LAST sign (menarche).' },

{ n:67, pr:67, p:165, key:1,
  stem:'During which period of human growth does faltering growth typically occur?',
  opts:['Fetal phase','Infant phase','Childhood phase','Prepubertal phase','Pubertal phase'],
  expl:'Faltering growth is most commonly seen in infancy when nutrition and feeding problems are most likely.',
  note:'Same fact as n=41 over a DIFFERENT option set (5 vs 4, "Fetal" added) — both held.' },

{ n:68, pr:68, p:167, key:3,
  stem:'What would be the shape of the head if craniosynostosis affects the lambdoid suture?',
  opts:['Wide and broad','Long and narrow','Prominent forehead','Flattening of the skull'],
  expl:'Fusion of the lambdoid suture causes a flat occiput and asymmetric skull shape (posterior plagiocephaly).',
  note:'WITHIN-BANK REPRINT of n=4 (p.36). HOLD ONCE.' },

{ n:69, pr:69, p:169, key:1,
  stem:'How is a very low birth weight infant defined?',
  opts:['Birth weight less than 2500 g','Birth weight less than 1500 g','Birth weight less than 1750 g','Birth weight less than 1000 g','Birth weight less than 500 g'],
  expl:'VLBW is defined as a birth weight less than 1500 g. ELBW (extremely low birth weight) is <1000 g.',
  note:'WITHIN-BANK REPRINT of n=5 (p.38). HOLD ONCE.' },

{ n:70, pr:69, p:171, key:3,
  stem:'Which problem is commonly associated with large for gestational age infants?',
  opts:['Hyperglycemia','Hypercalcemia','Anemia','Birth asphyxia','Heart failure'],
  expl:'LGA infants, often of diabetic mothers, are prone to shoulder dystocia, birth trauma, and birth asphyxia.',
  note:'⚠️⚠️ NUMBERING DEFECT: this page prints "69", the SAME number as p.169. Two different questions carry the number 69. This is why the printed maximum (87) understates the true count (89). ⚠️ Also a clinical trap: LGA infants of diabetic mothers are HYPOglycaemic, not hyperglycaemic — option A is the classic distractor. FILING: perinatal/neonatal content inside the Growth section.' },

{ n:71, pr:70, p:173, key:3,
  stem:'A 2-year-old girl is brought to the clinic for a routine check-up. Her mother states that she does not like to eat but prefers eating only a few spoons of pasta each day. What is the best method to check her nutritional status?',
  opts:['Head circumference','Height','Weight','Weight-for-height','Skinfold thickness'],
  expl:'Weight-for-height assesses acute malnutrition and is the best parameter for nutritional status in toddlers.',
  note:'WITHIN-BANK REPRINT of n=6 (p.40). This printing is the one that shows option E complete ("Skinfold thickness") — the earlier printing truncates it under the box. HOLD ONCE, and take the option text from HERE.' },

{ n:72, pr:71, p:175, key:2,
  stem:'A 7-year-old boy is brought by his grandmother to the pediatrician with concerns about his growth. According to his grandmother’s words, his mother is ‘of average height’ and his father is ‘slightly shorter than his mother’. Physical examination reveals a happy and playful boy with no dysmorphic features. His height is 110 cm which is just below the 3rd centile. His weight is on the 3rd centile. He has a normal physical examination. What is the most likely cause for his short stature?',
  opts:['Achondroplasia','Constitutional delay of growth and puberty','Familial short stature','Growth hormone deficiency','Vitamin D deficiency'],
  expl:'The child’s growth follows the 3rd centile, both height and weight proportionate, and parents are short consistent with familial short stature. Constitutional delay would show delayed puberty signs.',
  note:'WITHIN-BANK REPRINT of n=8 (p.44). HOLD ONCE. Its box is fuller than n=8’s — fold the extra discrimination sentence into the held entry.' },

{ n:73, pr:72, p:177, key:1,
  stem:'What is the most important factor affecting growth during the "infantile phase" in humans?',
  opts:['Maternal nutrition','Infant nutrition','Size at birth','Vitamins','Parental size'],
  expl:'Growth in the infantile phase (first 2 years) is primarily dependent on nutrition. Later phases are influenced by hormones and genetics.',
  note:'WITHIN-BANK REPRINT of n=9 (p.46). HOLD ONCE. Box adds the "first 2 years" definition — worth folding in.' },

{ n:74, pr:73, p:179, key:1,
  stem:'What is the main drive for growth in the childhood phase?',
  opts:['Nutrition','Growth hormone','Testosterone','Thyroid hormones','Testosterone and estrogen'],
  expl:'During the childhood phase, GH is the major driver of growth. In puberty, sex steroids add a growth spurt.',
  note:'WITHIN-BANK REPRINT of n=10 (p.48). Second of three printings.' },

{ n:75, pr:74, p:181, key:3,
  stem:'Which is a character of "constitutional growth delay"?',
  opts:['It is a pathological condition.','It occurs only in girls.','There is a lower final height.','There is a delayed onset of puberty.','It presents early in infancy.'],
  expl:'Constitutional delay is benign, with normal final height but delayed puberty.',
  note:'⚠️ NOT a reprint of n=3/n=65 despite the near-identical stem: the option set is REPLACED (only the key text survives). Per the folding test that is a NEW QUESTION — hold both.' },

{ n:76, pr:75, p:183, key:3,
  stem:'Which of the following statements regarding measuring and plotting children’s growth is true?',
  opts:['Correction for prematurity should be made up to the age of 6 months','Final height usually approximates the father’s height','Once a child is 5 years old, height does not usually deviate from the centile line','It is normal for an infant’s weight to cross centiles in the first months of life'],
  expl:'Infants often show catch-up or catch-down growth in the first months, crossing centiles before stabilizing. Final height relates to mid-parental height, not just the father’s, and deviations after age 5 usually suggest pathology.',
  note:'WITHIN-BANK REPRINT of n=11 (p.50). HOLD ONCE — and keep THIS box, which explains all four options rather than one.' },

{ n:77, pr:76, p:185, key:0,
  stem:'Which of the following is a character of familial short stature?',
  opts:['Height falls within 2 centile spaces of mid-parental height','More common in girls','Delayed onset of puberty','Presentation is in adolescence'],
  expl:'Familial short stature is characterized by normal growth velocity and bone age, with height consistent with genetic potential. Unlike constitutional delay, puberty occurs at a normal age.',
  note:'WITHIN-BANK REPRINT of n=12 (p.52). HOLD ONCE; keep this fuller box.' },

{ n:78, pr:77, p:187, key:1,
  stem:'A 13-year-old girl is brought to the clinic for concerns about delayed puberty. She is in the 10th percentile for height and 25th percentile for weight. Physical examination reveals no signs of puberty, and her bone age is mildly delayed. Her mother also had a past history of delayed puberty. What is the most likely diagnosis?',
  opts:['Turner syndrome','Constitutional growth delay','Growth hormone deficiency','Hypothyroidism','Familial short stature'],
  expl:'This condition presents with delayed puberty, mildly delayed bone age, and family history of delayed puberty. The child usually catches up later.',
  note:'WITHIN-BANK REPRINT of n=13 (p.54). HOLD ONCE.' },

{ n:79, pr:78, p:189, key:3,
  stem:'An 8-year-old girl presents with a 6-month history of pain most days around the umbilicus which lasts for an hour and responds to paracetamol syrup. It does not occur at weekends usually. She opens her bowels daily and passes a soft stool. She is thriving with her weight and height on the 75th centile. Which of the following options is the appropriate next step?',
  opts:['Abdominal radiograph','Referral to a pediatric gastroenterologist','Liver function tests','Reassurance and no further investigation','Prescription for laxatives'],
  expl:'The girl’s pain is functional abdominal pain since growth and examination are normal, and symptoms stop on weekends. No further tests are needed.',
  note:'⚠️ FILING: this is a GASTROENTEROLOGY question (functional abdominal pain) printed inside Growth & Puberty. Recommend chapter `gastroenterology`, secondary noted. Periumbilical pain sparing weekends + normal growth = the classic functional pattern.' },

{ n:80, pr:79, p:191, key:0,
  stem:'A 4-month-old infant is brought in for concerns about small size. The infant was born at 32 weeks gestation and has been primarily formula-fed. Which of the following is the first most important factor to consider in managing this infant’s growth?',
  opts:['Adjusting for corrected gestational age','Introducing solid foods early','Switching to a higher-calorie formula','Recommending breastfeeding'],
  expl:'Premature infants’ growth should be assessed using corrected age, not chronological age, to avoid mislabeling them as small.',
  note:'WITHIN-BANK REPRINT of n=14 (p.56). HOLD ONCE.' },

{ n:81, pr:80, p:193, key:0,
  stem:'What is the fastest period of growth in a normal human?',
  opts:['Fetal','Infantile','Childhood','Prepubertal','Pubertal'],
  expl:'Growth is most rapid in utero, particularly during the second trimester. Postnatal growth rates are slower compared to fetal growth.',
  note:'WITHIN-BANK REPRINT of n=15 (p.58). HOLD ONCE. ⚠️ This second printing is what SETTLES the contradiction with n=42: the bank keys FETAL twice and adds the second-trimester detail. The later printing resolves the earlier ambiguity.' },

{ n:82, pr:81, p:195, key:1,
  stem:'What is the main driver for growth in the childhood phase?',
  opts:['Nutrition','Growth hormone','Testosterone','Thyroid hormones','Testosterone and estrogen'],
  expl:'During childhood (after infancy, before puberty), growth is largely regulated by growth hormone rather than nutrition or sex hormones.',
  note:'WITHIN-BANK REPRINT of n=10 (p.48) / n=74 (p.179) — the THIRD printing of this question. HOLD ONCE.' },

{ n:83, pr:81, p:197, key:4,
  stem:'What would be the shape of the head if craniosynostosis affects the lambdoid suture?',
  opts:['Wide and broad','Long and narrow','Plagiocephalic','Prominent forehead','Flattening of the skull'],
  expl:'',
  note:'⚠️⚠️ THREE THINGS WRONG WITH THIS PAGE. (1) NUMBERING: it prints "81", the same number as p.195. (2) NO EXPLANATION BOX — one of only three in the section. (3) DEFECT — TWO CORRECT ANSWERS: the added option C "Plagiocephalic" and the keyed option E "Flattening of the skull" are THE SAME ANSWER under two names, and the bank’s own box at n=4 (p.36) says so outright: "Lambdoid suture fusion -> Posterior flattening of the skull (posterior plagiocephaly)". Key E as printed, note that C is equally correct. Relative to n=4/n=68 this is a reprint with an ADDED distractor, so it folds by the standard test — but the added distractor is what creates the defect, so the hub should decide whether to hold it separately to preserve the record.' },

{ n:84, pr:82, p:199, key:2,
  stem:'A 3-year-old boy’s height has fallen from the 50th percentile to below the 3rd percentile over the past year. What is the most likely cause?',
  opts:['Familial short stature','Constitutional growth delay','Growth hormone deficiency','Turner syndrome'],
  expl:'A child with progressive drop in growth centiles suggests pathological short stature such as growth hormone deficiency, not familial or constitutional.',
  note:'WITHIN-BANK REPRINT of n=16 (p.60). HOLD ONCE.' },

{ n:85, pr:83, p:201, key:2,
  stem:'Which of the following is the last sign of puberty in girls?',
  opts:['Breast development','Pubic hair growth','Menarche','Axillary hair growth'],
  expl:'Menarche is typically the last major event of puberty after breast and pubic hair development.',
  note:'Pairs with n=66 (first sign = breast bud).' },

{ n:86, pr:84, p:203, key:3,
  stem:'Which of the following statements is FALSE as regards growth in males?',
  opts:['Adult males are taller than adult females','Males have a longer childhood growth phase than females','The peak height at puberty is higher in males than in females','Growth stops earlier in males'],
  expl:'Growth actually stops later in males because puberty begins later and lasts longer.',
  note:'WITHIN-BANK REPRINT of n=17 (p.62). HOLD ONCE.' },

{ n:87, pr:85, p:205, key:0,
  stem:'Which of the following conditions may cause macrocephaly?',
  opts:['Chronic subdural hematoma','Cerebral palsy','Congenital infection','Hypoglycemia','Perinatal asphyxia'],
  expl:'',
  note:'⚠️ NO EXPLANATION BOX — the third and last of the section. The summary slide p.20 grounds the key: "Macrocephaly ... Causes: ... Raised ICP (hydrocephalus, subdural hematoma, brain tumor)". The distractors (cerebral palsy, congenital infection, perinatal asphyxia) all tend to cause MICROcephaly, which is the discrimination being tested.' },

{ n:88, pr:86, p:207, key:2,
  stem:'A 5-year-old girl is brought to the clinic because her parents are concerned about her short stature. Her height is below the 3rd percentile, and her weight is in the 25th percentile. Her growth velocity is normal. A bone age assessment reveals that her bone age is consistent with her chronological age. What is the most appropriate next step in management?',
  opts:['Initiate growth hormone therapy','Order a karyotype analysis','Monitor growth every 6 months','Refer to a pediatric endocrinologist','Test for celiac disease'],
  expl:'The child has proportionate short stature with normal bone age and velocity, suggesting a benign variant. Close monitoring is appropriate.',
  note:'⚠️ Tension with 13) Short stature.txt, which lists "Karyotyping (All girls)" in its investigation ladder — by the lecture, a short girl warrants a karyotype. The bank keys monitoring because velocity AND bone age are both normal. Key as printed, note the lecture’s stricter line.' },

{ n:89, pr:87, p:209, key:1,
  stem:'Which of the following should be avoided in an infant’s diet during the first year of life?',
  opts:['Pureed vegetables','Honey','Mashed fruits','Iron-fortified cereals'],
  expl:'Honey can cause infant botulism and must be avoided before 12 months.',
  note:'⚠️ FILING: a NUTRITION question closing the Growth & Puberty section. Recommend chapter `nutrition`, secondary noted. Last question of section 1; p.210 is a closing prayer slide and p.211 opens section 2.' }

];
