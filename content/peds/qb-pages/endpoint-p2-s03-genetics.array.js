/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part2.pdf - SECTION 3: "Genetics"
   Verbatim staging record. PDF pages 155-244; PDF page = printed page, offset zero.
   Merged from endpoint-p2-s03-genetics.part-A.js + endpoint-p2-s03-genetics.part-B.js by merge-parts-ep2.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP2_S03_STAGED = [

/* Peds endpoint part 2, section 3 "Genetics" (PDF pp.155-244), HALF A.
   Range assigned: first 21 answered pages of the section, stopping at p.199
   (p.201 belongs to half B). Pages actually in range:
   157 159 161 162 168 170 172 174 176 178 181 183 185 187 189 191 193 195 197 199

   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (never opened directly;
   read via pre-rendered images in <SCRATCH>\ep2-index\hires\pNNNN.png, 1241x1754 upscale of
   an 800x450 native slide JPEG). Native JPEGs not needed for this half - hires was clear
   throughout, no crops required, no numeral/unit/dose was in doubt on any staged page.
   OCR at content\peds\qb-pages\ocr\ep2\ was NOT opened during this pass - used only as the
   page-list the task prompt already supplied.

   ============================================================
   IRREGULAR HEAD OF SECTION - pp.157, 159, 161, 162
   ============================================================
   All four are NOTES/SUMMARY slides, not questions - none is staged, matching the brief's
   warning (section 2 p.87 precedent). Measured by viewing each image directly:

   - p.157: "2. Chromosomal Disorders" - General bullet points (prevalence, numerical vs
     structural), then "A. Down Syndrome (Trisomy 21)" - incidence, cytogenetics
     (nondisjunction 94% / translocation 5% / mosaicism 1%), key features. No question stem,
     no options, no highlighted answer. Pure lecture-summary slide.
   - p.159: "B. Turner Syndrome (45,X)" - incidence, cytogenetics, features, diagnosis,
     treatment, all as plain declarative bullets. No question, no options. This is the page
     the task prompt flagged as returning zero OCR characters - visually it is a completely
     ordinary text slide (mixed black/red bullet text on cream background), nothing about
     the image itself explains a zero-character OCR result; noting the discrepancy per the
     brief's "say where it was wrong" instruction.
   - p.161: "1. Mendelian Inheritance" definition + pedigree-analysis note, then
     "A. Autosomal Dominant (AD)" - gene location, inheritance, recurrence risk,
     complicating factors (homozygosity, variable expression, non-penetrance, de novo,
     Knudson two-hit), examples. No question, no options. (Also flagged zero-OCR-chars by
     the task prompt; same note as p.159 - nothing visually explains it.)
   - p.162: "B. Autosomal Recessive (AR)" - gene location, inheritance, recurrence-risk
     bullets, consanguinity, examples (CF, sickle cell, thalassemia, Tay-Sachs). No question,
     no options.

   None of these four carries a lettered-option list or a yellow-highlighted answer; they are
   the section's lecture-notes preamble before the numbered question set starts at p.168
   (printed number "1."). Per brief: recorded, not staged.

   ============================================================
   QUESTION-NUMBER WALK (answered pages only, this half) - FINAL, confirmed on disk
   ============================================================
   p.168 pr.1 | p.170 pr.2 | p.172 pr.3 | p.174 pr.4 | p.176 pr.5 | p.178 pr.6 (box overflow on p.179) |
   p.181 pr.7 | p.183 pr.8 (figure: pedigree) | p.185 pr.9 | p.187 pr.10 | p.189 pr.11 | p.191 pr.12 |
   p.193 pr.13 | p.195 pr.14 (figure: pedigree, shares n8's option ladder) | p.197 pr.15 (same couple as pr.14) |
   p.199 pr.16.
   16 entries staged, pr==n throughout, no repeats, no skips. Walk matches printed numbers exactly -
   no double-printed or reused numbers found in this half (contrast the brief's part-1 example of a
   book that printed "69" and "81" twice - did not happen here).

   BOUNDARY PROOF: rendered p.200, one page past this half's last staged page (p.199/pr.16). It is
   the UNANSWERED twin of question 17 ("Olive is a 10-day-old baby with Down syndrome... loud heart
   murmur", options A-E Aortic stenosis / Atrioventricular septal defect / Coarctation of the aorta /
   Innocent murmur / Patent ductus arteriosus, no highlight, no explanation box printed) - confirming
   this half correctly stops before question 17, whose answered printing (p.201) is half B's first
   page per the task assignment.

   Final disk re-count (node, this half only): array length 16, index walk 0..15 all present (no
   sparse holes), pages 168,170,172,174,176,178,181,183,185,187,189,191,193,195,197,199 (exact match
   to the 16 answered-question pages in the assigned range), pr sequence 1..16 with no gaps.

   Tool-call tally kept live by the agent as work progressed (not estimated after the fact):
   brief read (1); failed ls attempt (1); page-existence loop check (1); reads of pp.157/159/161/162
   (4); read p.168 (1); Write of file+entry1 (1); validate (1); then per remaining entry a
   read+Edit+validate triple for pp.170/172/174/176/178+179/181/183(+figAlt fix, 2 validates)/185/
   187/189/191/193/195/197/199 (16 pages read across those steps, 15 Edit appends, 16 validate runs);
   final disk re-count script (1); boundary read of p.200 (1); a header re-read + this header edit
   (2). Running total at handoff: 62 tool calls, kept as a running count while working, not
   estimated afterward.
*/

{ n:1, pr:1, p:168, key:0,
  stem:'In a newborn suspected of having Down syndrome, which of the following investigations are routinely indicated in all patients with Down syndrome regardless of the symptoms?',
  opts:['Echocardiography','Renal ultrasound','Upper gastrointestinal (GI) series','Head ultrasound','Chest X ray'],
  expl:'Nearly 50% of infants with Down syndrome have congenital heart disease, so echocardiography is always required. Other tests (renal US, head US, etc.) are not routinely indicated unless symptoms suggest them.',
  note:'Highlighted option: "a. Echocardiography" (yellow highlight, underlined), first in the list -> key 0. Page fully legible in hires render, no crop needed. Explanation printed in a bordered box below the options, transcribed verbatim.' },

{ n:2, pr:2, p:170, key:0,
  stem:'Which disease can commonly be discovered during follow-up of a child with Down syndrome?',
  opts:['Celiac disease','Hyperthyroidism','Type 1 diabetes mellitus','Asthma'],
  expl:'Children with Down syndrome have a higher risk of autoimmune disorders, especially celiac disease and hypothyroidism. Regular screening is recommended during follow-up.',
  note:'Highlighted option: "a. Celiac disease" (yellow highlight, underlined), first -> key 0. Only 4 options printed (b/c/d), no fifth option on this page. Fully legible, no crop needed. Note the explanation box names "hypothyroidism" while option b prints "Hyperthyroidism" - transcribed each exactly as printed, no correction made.' },

{ n:3, pr:3, p:172, key:1,
  stem:'Regarding modes of inheritance, the condition that occurs in heterozygous state, males and females are equally affected is:',
  opts:['Autosomal recessive','Autosomal dominant','X linked recessive','X linked dominant','Sporadic'],
  expl:'In autosomal dominant conditions, one abnormal allele is enough to cause disease, and both males and females are equally affected.',
  note:'Highlighted option: "b. Autosomal dominant" (yellow, underlined), second -> key 1. Fully legible, no crop needed.' },

{ n:4, pr:4, p:174, key:3,
  stem:'Which of the following is NOT a routine screening test required in children with Down syndrome?',
  opts:['Thyroid function test','Echocardiography','Hearing assessment','Screening for hyperthyroidism'],
  expl:'Hypothyroidism is the common thyroid problem in Down syndrome, not hyperthyroidism. Routine screening includes TSH, hearing assessment, and echo.',
  note:'Highlighted option: "d. Screening for hyperthyroidism" (yellow, underlined), fourth/last of 4 printed options -> key 3. Fully legible, no crop needed.' },

{ n:5, pr:5, p:176, key:0,
  stem:'Mr. and Mrs. are examined as their baby is diagnosed with Down syndrome. Chromosome analysis shows three copies of chromosome 21, with one of them attached to chromosome 14. What is this chromosomal anomaly called?',
  opts:['Translocation','Mosaicism','Nondisjunction','Inversion'],
  expl:'This is a Robertsonian translocation, a common cause of familial Down syndrome, where chromosome 21 attaches to chromosome 14.',
  note:'Highlighted option: "a. Translocation" (yellow, underlined), first of 4 -> key 0. Numerals "21" and "14" fully legible in the hires render, no crop needed.' },

{ n:6, pr:6, p:178, key:3, box:179,
  stem:'You are Year 4 pediatric specialist trainee. You are called to see a baby boy, James, in the postnatal ward. The midwife tells you that James is 6 hours old now and has had 1 episode of bilious vomiting. He has not passed meconium. You notice that he has low set eyes, epicanthic fold, flat nasal bridge, single transverse palmar crease and is hypotonic. His abdomen is distended. Which of the following should be your next step?',
  opts:['Obtain blood samples for G-branded karyotype, blood culture, CRP & full blood count and start on antibiotics','Refer to the surgical team','Request contrast Upper Gastrointestinal Tract series','Request plain abdominal X-ray','NGT is not indicated until a diagnosis is confirmed.'],
  expl:'Bilious vomiting in a neonate suggests intestinal obstruction (e.g., duodenal atresia, common in Down syndrome). First step: plain abdominal X-ray before further imaging or surgical referral.',
  note:'Highlighted option: "d. Request plain abdominal X-ray" (yellow, underlined), fourth of 5 -> key 3. p.178 itself prints no explanation box - checked p.179 (next page, would normally be question 7 unanswered) and it is the explanation box alone, breaking the strict alternation, exactly the overflow case the brief describes. box:179 recorded; expl text taken from p.179. Numerals "6 hours" and "1 episode" fully legible.' },

{ n:7, pr:7, p:181, key:1,
  stem:'You were asked by a mother 38-year-old of a baby with Down syndrome waiting the karyotype result about the WORST recurrence risk in the further pregnancy:',
  opts:['Non-disjunction type','Maternal translocation 21/21','Mosaicism','Maternal Translocation 13/21','Her age is over 35-year-old'],
  expl:'If a mother carries a 21/21 translocation, recurrence risk is essentially 100%. Nondisjunction usually has low recurrence risk.',
  note:'Highlighted option: "b. Maternal translocation 21/21" (yellow, underlined), second of 5 -> key 1. "21/21" vs "13/21" (option d) and "38-year-old"/"35-year-old" numerals all fully legible in hires render, no crop needed. Note printed alternation resumed normally here after the p.178/179 overflow.' },

{ n:8, pr:8, p:183, key:4,
  stem:'Michael is a 6-year-old boy who is prone to bleeding. He has a problem with one of his clotting factors, and his parents have been told that this is caused by a faulty gene. He is otherwise well and has no other medical problems. His parents have an appointment with a geneticist who takes a family history and draws a family tree, which is shown in the opposite figure. What is the most likely pattern of inheritance of this disorder?',
  opts:['Autosomal dominant','Autosomal recessive','Imprinting from uniparental disomy','Trinucleotide repeat expansion mutation','X-linked recessive'],
  fig:'A pedigree (family tree) to the right of the stem, three generations: top generation one unfilled circle - unfilled square couple; second generation shows an unfilled circle married into a filled (affected) square, an unfilled circle married to a filled square, and an unfilled circle married to an unfilled square, laid out left to right; third generation shows further unfilled/filled squares and circles descending from those couples (filled = affected male squares scattered across generations, no filled circles), consistent with a pedigree used to determine inheritance pattern. Standard pedigree key symbols only, no labels/numbers legible on the figure itself.',
  figAlt:'Three-generation pedigree (family tree) diagram',
  expl:'X-linked recessive conditions like Hemophilia A typically affect males, while females are carriers. Pedigree patterns confirm this mode.',
  note:'This page uses UPPERCASE lettered options (A-E), unlike the lowercase a-e used on other pages in this half - transcribed exactly as printed. Highlighted option: "E. X-linked recessive" (yellow, underlined), fifth/last -> key 4. Options and stem fully legible; the pedigree figure is described structurally without naming the diagnosis (Hemophilia A is only named in the explanation box, not in fig).' },

{ n:9, pr:9, p:185, key:0,
  stem:'Which of the following is an X-linked disease?',
  opts:['Favism','Sickle cell disease','Thalassemia','Phenylketonuria'],
  expl:'G6PD deficiency (favism) is X-linked. Sickle cell disease, thalassemia, and PKU are autosomal recessive.',
  note:'Highlighted option: "a. Favism" (yellow, underlined), first of 4 -> key 0. Fully legible, no crop needed.' },

{ n:10, pr:10, p:187, key:2,
  stem:'You are called to attend the delivery of a term infant in view of abnormalities detected antenatally. US in utero revealed the presence of a raised nuchal translucency measurement & a double bubble sign. Subsequent investigations confirmed the suspected diagnosis. In terms of the chances of the same condition happening again within the family, which test is the most appropriate to arrange for the neonate?',
  opts:['Array CGH (microarray)','FISH','Karyotype','Whole genome analysis'],
  expl:'Karyotyping confirms whether Down syndrome is due to nondisjunction, translocation, or mosaicism, which is essential for recurrence counseling.',
  note:'Highlighted option: "c. Karyotype" (yellow, underlined), third of 4 -> key 2. Fully legible, no crop needed.' },

{ n:11, pr:11, p:189, key:4,
  stem:'You are investigating a child for short stature. Which of the following syndromes is a cause of short stature?',
  opts:['Klinefelter syndrome','Marfan syndrome','Sotos syndrome','Triple X syndrome','Turner syndrome'],
  expl:'Turner syndrome (45,XO) is associated with short stature and gonadal dysgenesis. Marfan and Sotos are tall stature syndromes.',
  note:'Highlighted option: "e. Turner syndrome" (yellow, underlined), fifth/last -> key 4. "45,XO" fully legible, no crop needed.' },

{ n:12, pr:12, p:191, key:2,
  stem:'Periodic checkup and screening for children with Down syndrome may reveal all of the following EXCEPT:',
  opts:['Impairment of vision','Hearing defects','Hyperthyroidism','Celiac disease'],
  expl:'Hypothyroidism is the common endocrine problem. Hyperthyroidism is rare and not a routine screening focus.',
  note:'Highlighted option: "c. Hyperthyroidism" (yellow, underlined), third of 4 -> key 2. Fully legible, no crop needed. OBSERVATION (not folded): thematically close to n4/p.174 (also Down syndrome screening, also flags hyperthyroidism as the odd one out) but stem, option set and framing (EXCEPT-format here vs NOT-format there, and different option lists: this page adds vision/hearing, p.174 adds thyroid function test/echo) are genuinely different questions - recorded, nothing folded.' },

{ n:13, pr:13, p:193, key:4,
  stem:'Which of the following is NOT a commonly associated problem of Down syndrome?',
  opts:['Congenital heart disease','Leukemia','Hypothyroidism','Short stature','Gastro-esophageal reflux disease'],
  expl:'Common associations include congenital heart disease, hypothyroidism, leukemia, and short stature. GERD is not a classic feature.',
  note:'Highlighted option: "e. Gastro-esophageal reflux disease" (yellow, underlined), fifth/last -> key 4. Fully legible, no crop needed.' },

{ n:14, pr:14, p:195, key:1,
  stem:'A Pakistani couple are referred for genetic counselling. They have lost two children who both died in the first 2 years of life. They have one healthy daughter who is 3 years old. The faulty gene has been identified, and other members of their family have been tested (see opposite figure). What is the most likely pattern of inheritance?',
  opts:['Autosomal dominant','Autosomal recessive','Imprinting from uniparental disomy','Trinucleotide repeat expansion mutation','X-linked recessive'],
  fig:'A pedigree (family tree) to the right of the stem, three generations, wider than the one on p.183/n8: top generation shows two separate unfilled circle-square couples side by side; second generation under each couple includes a mix of unfilled and filled (affected, shaded) squares and circles, with one union in the middle drawn between two second-generation individuals from the two different top-generation couples (consistent with a consanguineous/cousin marriage); third generation shows further offspring including at least one more filled/affected square, descending from that middle union. Filled symbols appear among both sexes here (unlike the p.183 pedigree, which showed only filled squares), and the layout groups two extended-family branches converging on one couple in the middle.',
  figAlt:'Three-generation pedigree (family tree) diagram, two family branches converging',
  expl:'When both parents are carriers and multiple children are affected, an autosomal recessive pattern is likely.',
  note:'Highlighted option: "B. Autosomal recessive" (yellow, underlined), second of 5 -> key 1. UPPERCASE lettered options again, as on p.183. SHARED OPTION MENU (per brief 7): this page prints the identical 5-option ladder as n8/p.183 (Autosomal dominant / Autosomal recessive / Imprinting from uniparental disomy / Trinucleotide repeat expansion mutation / X-linked recessive), in the same order - recorded as a pairing, not folded. Discriminating token: n8 is a boy with an isolated clotting-factor deficiency and a pedigree with only affected males -> key X-linked recessive; n14 is a Pakistani couple (consanguinity implied) who lost two children in infancy, pedigree shows a cousin-marriage-style convergence with affected individuals of both sexes -> key Autosomal recessive. Numerals "2 years" and "3 years old" fully legible, no crop needed.' },

{ n:15, pr:15, p:197, key:2,
  stem:'The same couple (as in the previous question) would like more children. What is the risk of them having another affected baby?',
  opts:['Around 1 in 200','1 in 2','1 in 4','2 in 3','3 in 4'],
  expl:'Each child has a 25% chance of inheriting both faulty alleles from carrier parents.',
  note:'Explicitly a follow-on to n14/p.195 ("the same couple as in the previous question") - stem itself makes the link, not an inference; kept as its own entry since it is a separate printed question with its own number and highlight. Highlighted option: "C. 1 in 4" (yellow, underlined), third of 5 -> key 2. UPPERCASE lettered options again. All numerals (1 in 200, 1 in 2, 1 in 4, 2 in 3, 3 in 4, 25%) fully legible, no crop needed.' },

{ n:16, pr:16, p:199, key:4,
  stem:'Mr. and Mrs. David are seen by the geneticist as their baby, Sarah, has Down syndrome. Her chromosomes are examined, and three copies of chromosome 21 are seen, one of which is attached to chromosome 14. How would you describe this abnormality?',
  opts:['Balanced Robertsonian translocation','Mosaicism','Nondisjunction','Triplet repeat expansion','Unbalanced Robertsonian translocation'],
  expl:'This chromosomal rearrangement causes an extra copy of chromosome 21 material, leading to Down syndrome.',
  note:'Highlighted option: "E. Unbalanced Robertsonian translocation" (yellow, underlined), fifth/last -> key 4. UPPERCASE lettered options. OBSERVATION (not folded): stem is near-identical in setup to n5/p.176 (also "three copies of chromosome 21, one attached to chromosome 14"), but the two are genuinely different questions - different named parents/baby, different option sets (n5: Translocation/Mosaicism/Nondisjunction/Inversion, plain "Translocation" as the answer; n16: distinguishes Balanced vs Unbalanced Robertsonian translocation and keys the Unbalanced form) - recorded, nothing folded. Numerals "21" and "14" fully legible, no crop needed.' },

/* endpoint part 2, section 3 "Genetics", HALF B (pp.201-243, answered pages only)
   Staged from Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf via
   <SCRATCH>\ep2-index\hires\pNNNN.png (native JPEG not opened where hires was clear).
   OCR (content\peds\qb-pages\ocr\ep2\) NOT opened during this pass -- used only as the
   page list given in the task prompt.
   n starts at 100 (non-overlapping base while Half A's true count is still unknown).
   pr = printed question number on the page. p = PDF page of the ANSWERED page staged.
   Range: answered pages 201,203,205,...,243 (22 pages, each preceded by its unanswered
   twin on the page before). Header extended as pages are read.

   Walk of printed numbers (pr), page by page: 17,18,19,20,21,22,23,24,24,25,25,26,27,
   28,29,30,31,32,33,34,35,36 -- pr repeats twice (24 at p.215+p.217, 25 at p.219+p.221),
   n stays strictly sequential 100-121 regardless (22 entries, no gaps, no folds).
   Boundary proof: p.245 rendered and read -- red banner slide "Hematological Disorders",
   the opening divider of section 4. Section 3 (Genetics) closes cleanly at p.243. */

{ n:17, pr:17, p:201, key:1,
  stem:'Olive is a 10-day-old baby with Down syndrome. On examination, you hear a loud heart murmur. What is the most likely cause?',
  opts:['Aortic stenosis','Atrioventricular septal defect','Coarctation of the aorta','Innocent murmur','Patent ductus arteriosus'],
  expl:'This is the most common cardiac defect in Down syndrome, resulting from endocardial cushion defects.',
  note:'p.201 clear on hires, no crop needed. Highlighted option seen: "B. Atrioventricular septal defect" (bold, underlined, yellow) = index 1. No figure. No twin at p.200 checked yet (not needed, page fully legible).' },

{ n:18, pr:18, p:203, key:3,
  stem:'Fiona is a well 4-year-old girl with Down syndrome. She attends her yearly follow-up appointment with her mother. There are no real problems other than constipation, for which her general practitioner has started treatment. When you plot Fiona on the Down syndrome growth chart, you notice that her height has dropped from the 75th centile to the 25th centile. Her weight, however, has increased from the 50th to the 75th centile. Which of the following investigations would you perform?',
  opts:['Coeliac screen','Abdominal ultrasound','Full blood count','Thyroid function tests'],
  expl:'Children with Down syndrome are at increased risk for hypothyroidism, which can cause growth deceleration and weight gain.',
  note:'Only 4 options printed (A-D), no E. Highlighted: "D. Thyroid function tests" (bold, underlined, yellow) = index 3. No figure. Clear on hires.' },

{ n:19, pr:19, p:205, key:3,
  stem:'Mary is an infant with Down syndrome. Her antenatal scans were normal, and an echocardiogram in the neonatal unit shortly after birth was also normal. She attends the community clinic at 4 weeks of age, thriving and feeding well. Her parents have many questions about future risks. Which condition is Mary at increased risk of developing compared to the general population?',
  opts:['Congenital heart disease','Duodenal atresia','Ischaemic heart disease','Leukaemia','Pyloric stenosis'],
  expl:'Children with Down syndrome have a significantly increased risk of developing acute lymphoblastic and myeloid leukemia.',
  note:'Highlighted: "D. Leukaemia" (bold, underlined, yellow) = index 3. No figure. Clear on hires.' },

{ n:20, pr:20, p:207, key:1,
  stem:"Mr. and Mrs. Walsh attend the clinic with their new baby, Ophelia, who has Down syndrome. They are keen to have further children and want to know more about their future risk of having children with Down syndrome. What chromosomal abnormality is most likely to have caused Ophelia's condition?",
  opts:['Mosaicism','Nondisjunction','Point mutation','Translocation','Triplet repeat expansion'],
  expl:'Most cases of Down syndrome are due to nondisjunction, a random error during meiosis. Risk increases with maternal age.',
  note:'Highlighted: "B. Nondisjunction" (bold, underlined, yellow) = index 1. No figure. Clear on hires.' },

{ n:21, pr:21, p:209, key:3,
  stem:'A Bangladeshi couple are referred for genetic counselling. Both parents are carriers of a faulty PEX1 gene; possession of two abnormal copies leads to death in infancy. They have lost two children who both died in the first 2 years of life and have one healthy daughter aged 3 years. What is the risk that their daughter is a carrier?',
  opts:['None','1 in 4','1 in 2','2 in 3','100%'],
  expl:'Unaffected siblings of affected children have a 2/3 chance of being carriers in autosomal recessive inheritance.',
  note:'Highlighted: "D. 2 in 3" (bold, underlined, yellow) = index 3. No figure. Clear on hires.' },

{ n:22, pr:22, p:211, key:4,
  stem:'George has Klinefelter syndrome. What is his karyotype?',
  opts:['46, XO','46, XY','45, XO','45, XY','47, XXY'],
  expl:'Unaffected siblings of affected children have a 2/3 chance of being carriers in autosomal recessive inheritance.',
  note:'Highlighted: "E. 47, XXY" (bold, underlined, yellow) = index 4. FINDING: the printed box text is IDENTICAL, word for word, to the box printed on p.209 (previous question, PEX1 carrier risk) and has nothing to do with Klinefelter/karyotype -- staged verbatim as printed, per the rule that a printed box is captured unmarked; escalating this mismatch rather than deciding it. No figure.' },

{ n:23, pr:23, p:213, key:1,
  stem:'Rachael is a 3-month-old girl who attends the Emergency Department because of rapid breathing. She is the seventh infant born to a 39-year-old mother. On developmental history, she smiled at 7 weeks but cannot yet hold her head unsupported. On examination, she is tachypnoeic, sweaty, and hypotonic. Her weight is below the 0.4th centile. What is the most likely diagnosis?',
  opts:['Achondroplasia','Down syndrome','Turner syndrome','Klinefelter syndrome','Prader-Willi syndrome'],
  expl:'Features including hypotonia, feeding issues, and developmental delay in a baby of advanced maternal age suggest Down syndrome.',
  note:'Highlighted: "B. Down syndrome" (bold, underlined, yellow) = index 1. No figure. Clear on hires.' },

{ n:24, pr:24, p:215, key:0,
  stem:'A paediatrician is asked to review a heart murmur in a 2-day-old baby born by vaginal delivery following an uneventful pregnancy to a 38-year-old primiparous mother. The baby has been feeding well. On examination, he is hypotonic and has single palmar creases and epicanthic folds. What is the most likely heart lesion?',
  opts:['Atrioventricular septal defect','Atrial septal defect','Aortic stenosis','Coarctation of the aorta','Patent ductus arteriosus'],
  expl:'This is the hallmark cardiac anomaly in infants with Down syndrome and presents early with a murmur.',
  note:'Highlighted: "A. Atrioventricular septal defect" (bold, underlined, yellow) = index 0. No figure. Clear on hires.' },

{ n:25, pr:24, p:217, key:0,
  stem:'Common forms of inheritance include autosomal dominant and autosomal recessive patterns. Which of the following conditions is autosomal dominant?',
  opts:['Neurofibromatosis type 1','Cystic fibrosis','Sickle cell disease','Haemophilia A','Duchenne muscular dystrophy'],
  expl:'Neurofibromatosis type 1 is inherited in an autosomal dominant pattern, meaning only one copy of the defective gene is sufficient to cause the condition. In contrast, cystic fibrosis and sickle cell disease are autosomal recessive, and hemophilia A and Duchenne muscular dystrophy are X-linked.',
  note:'FINDING: printed number is "24" again, a repeat of the previous page (p.215 also prints 24) -- staged as printed, n kept strictly sequential per the true walk. Highlighted: "A. Neurofibromatosis type 1" (bold, underlined, yellow) = index 0. No figure. Clear on hires.' },

{ n:26, pr:25, p:219, key:3,
  stem:'A 6-year-old boy attends the outpatient clinic with a diagnosis of Down syndrome. He has been pale and lethargic for the last 4 weeks and has some bruises on his shins. Which of the following conditions is important to rule out given his underlying diagnosis?',
  opts:['Parvovirus infection','ITP','Haemophilia A','Acute leukaemia','Henoch-Schönlein purpura'],
  expl:'Children with Down syndrome are at increased risk of developing acute leukemia, especially acute lymphoblastic or myeloid leukemia. Unexplained pallor, lethargy, and bruising warrant prompt evaluation.',
  note:'Highlighted: "D. Acute leukaemia" (bold, underlined, yellow) = index 3. No figure. Clear on hires.' },

{ n:27, pr:25, p:221, key:1,
  stem:'Down syndrome is the most common form of trisomy encountered in children and occurs on chromosome 21. Which of the following statements is true?',
  opts:['Most babies with Down syndrome are born to older mothers','Males are frequently infertile','The incidence is 1 in 1,400','Epicanthic folds are pathognomonic','The majority have severe intellectual impairment'],
  expl:'Most males with Down syndrome are infertile due to abnormal spermatogenesis. While incidence increases with maternal age, most cases still occur in younger mothers due to higher birth rates in that group.',
  note:'FINDING: printed number is "25" again, repeating the previous page (p.219 also prints 25). Highlighted: "B. Males are frequently infertile" (bold, underlined, yellow) = index 1. No figure. Clear on hires.' },

{ n:28, pr:26, p:223, key:2,
  stem:'A 14-year-old girl attends a clinic due to concerns about her height. She is on the 9th centile. On examination, she has not developed secondary sexual characteristics, has a square-shaped chest, webbed neck, and short 4th metacarpals. What is the most likely cause of her short stature?',
  opts:['Hypothyroidism','Constitutional short stature','Turner syndrome','Growth hormone deficiency','Russell-Silver syndrome'],
  expl:'The constellation of features—including short stature, delayed puberty, webbed neck, and short 4th metacarpals is characteristic of Turner syndrome (45,X).',
  note:'Highlighted: "C. Turner syndrome" (bold, underlined, yellow) = index 2. No figure. Clear on hires.' },

{ n:29, pr:27, p:225, key:0,
  stem:'A newborn infant with features of Down syndrome develops vomiting on day 1 of life. The pregnancy was complicated by polyhydramnios. On examination, he is well-perfused, his abdomen is soft, and his anus is patent. He has not opened his bowels yet. Which of the following is the most useful initial investigation to make a diagnosis?',
  opts:['Plain abdominal radiograph','Abdominal ultrasound scan','CT abdomen','MRI abdomen','Barium follow-through'],
  expl:'A plain abdominal X-ray is the first-line investigation to assess for duodenal atresia, which commonly presents in infants with Down syndrome and causes the “double bubble” sign.',
  note:'Highlighted: "A. Plain abdominal radiograph" (bold, underlined, yellow) = index 0. No figure. Clear on hires. Curly quotes around double bubble reproduced verbatim as printed.' },

{ n:30, pr:28, p:227, key:2,
  stem:'Which type of inheritance is expected if a woman with a genetic disorder can have affected offspring of either sex, but an affected father cannot pass on the disease to his offspring?',
  opts:['Pseudogenetic Inheritance','Digenic inheritance','Mitochondrial inheritance','Autosomal recessive inheritance','Autosomal dominant inheritance'],
  expl:'Mitochondrial DNA is inherited only from the mother. Affected mothers can transmit the condition to all children, but affected fathers do not pass it on.',
  note:'Highlighted: "C. Mitochondrial inheritance" (bold, underlined, yellow) = index 2. No figure. Clear on hires. Option A capitalised mid-phrase ("Pseudogenetic Inheritance") as printed, reproduced verbatim.' },

{ n:31, pr:29, p:229, key:2,
  stem:'A couple of 38-year-old husband and a 23-year-old wife with Down syndrome consult you because the husband is planning to have a baby, he asks you about the chance of having a baby with Down syndrome, if his wife becomes pregnant. Your proper answer, the chance of having Down syndrome is:',
  opts:['5%','25%','50%','75%','100%'],
  expl:"Women with Down syndrome can occasionally conceive, and because they have trisomy 21, there's a 50% chance they will pass on the extra chromosome.",
  note:'Highlighted: "C. 50%" (bold, underlined, yellow) = index 2. No figure. Clear on hires.' },

{ n:32, pr:30, p:231, key:0,
  stem:"Which of the following is a Hall's criterion to aid in diagnosis of Down syndrome?",
  opts:['Upward slanted palpebral fissures','Epicanthal folds','Speckled irises (Brushfield spots)','Three fontanels','Mild microcephaly'],
  expl:'Hall’s criteria are used clinically to help identify Down syndrome, and upward slanted palpebral fissures are one of the classic facial features included.',
  note:'Highlighted: "A. Upward slanted palpebral fissures" (bold, underlined, yellow) = index 0. No figure. Clear on hires. Stem uses straight apostrophe in "Hall\'s", box uses curly apostrophe in "Hall’s criteria" -- both reproduced verbatim as printed.' },

{ n:33, pr:31, p:233, key:1,
  stem:'Which of the following tests is diagnostic and considered as an important advance in prenatal diagnosis of Down syndrome?',
  opts:['Free β-human chorionic gonadotropin {β-hCG}','Detection of cell-free fetal DNA in maternal plasma','Unconjugated estriol','α-fetoprotein','Fetal nuchal translucency (NT) thickness'],
  expl:'This non-invasive prenatal testing (NIPT) method detects fetal chromosomal abnormalities like trisomy 21 with high sensitivity and specificity using maternal blood.',
  note:'Highlighted: "B. Detection of cell-free fetal DNA in maternal plasma" (bold, underlined, yellow) = index 1. No figure. Clear on hires. Option A prints curly braces {β-hCG} instead of parentheses -- reproduced verbatim as printed.' },

{ n:34, pr:32, p:235, key:2,
  stem:'A 3-week-old small for gestational age newborn presents with webbing of the neck, protruding ears, and non-pitting swellings of the hands and feet. Echo shows bicuspid aortic valve with coarctation of the aorta.\nWhich of the following is the MOST likely diagnosis ?',
  opts:['Noonan syndrome','Trisomy X syndrome','Turner syndrome','Jacobsen syndrome','Kallmann syndrome'],
  expl:'Non-pitting edema, webbed neck, and congenital heart defects like coarctation of the aorta are hallmark features of Turner syndrome (45,X).',
  note:'Highlighted: "C. Turner syndrome" (bold, underlined, yellow) = index 2. No figure. Clear on hires. Stem prints as two sentences/lines on the slide (case then question); space before the question mark ("diagnosis ?") reproduced verbatim.' },

{ n:35, pr:33, p:237, key:4,
  stem:'Jane, a 40-year-old pregnant woman at 14w gestation underwent routine screening maternal serum screening (triple screen examination). She has been taking folic acid 1m before conception till now. Results show elevated alpha-fetoprotein (AFP). These are the likely causes of increased alpha-fetoprotein in Jane EXCEPT:',
  opts:['Anencephaly','Liver necrosis','Sacrococcygeal teratoma','Spina bifida','Trisomy 21'],
  expl:'',
  note:'Highlighted: "e. Trisomy 21" (bold, underlined, yellow) = index 4. No explanation box printed on this page (expl left empty). No figure. Clear on hires. This page prints options as lowercase a-e rather than the A-E used elsewhere in the section, reproduced as-is (letter prefixes stripped from opts per schema either way).' },

{ n:36, pr:34, p:239, key:3,
  stem:'The female marked with an arrow in the opposite figure is planning to start a family. If she were to give birth to a son, what would be the risk of him being affected by the disorder?',
  opts:['1 in 1','1 in 2','1 in 3','1 in 4','1 in 5'],
  fig:'A three-generation family pedigree diagram (schematic, circles = females, squares = males, shaded symbols = affected individuals, unshaded = unaffected). Generation I: one unaffected couple. Generation II: their children, including two shaded (affected) individuals among unaffected siblings, one of whom married in and has further children with an unaffected spouse. Generation III: several children shown, including one shaded male; an arrow points to one unaffected female in generation III, marking her as the individual in the question.',
  figAlt:'Three-generation pedigree chart with an arrow marking one individual.',
  expl:'',
  note:'No explanation box printed on this page. Highlighted: "D. 1 in 4" (bold, underlined, yellow) = index 3. Figure described by layout only (symbol shapes/shading and generation structure), no inheritance pattern or diagnosis stated in fig/figAlt per instructions.' },

{ n:37, pr:35, p:241, key:3,
  stem:"Gemma and Mark, who are both well, are planning to start a family. Gemma's older brother has cystic fibrosis. There is no history of cystic fibrosis in Mark's family. The family tree is shown in the opposite figure. What is the chance that they will have a child with cystic fibrosis? The carrier rate in their population is 1 in 25.\nSelect one answer only.",
  opts:['1 in 6','1 in 37.5','1 in 100','1 in 150','1 in 2,500'],
  fig:'A two-family pedigree diagram (circles = females, squares = males). Left family: a half-shaded circle paired with a half-shaded square, with three children below -- two unshaded circles and one fully shaded square, plus a fourth unshaded circle labelled "Gemma". Right family: an unshaded circle paired with an unshaded square, with one child, an unshaded square labelled "Mark", shown paired with Gemma.',
  figAlt:'Two-family pedigree chart labelled Gemma and Mark.',
  expl:'',
  note:'No explanation box printed on this page. Highlighted: "D. 1 in 150" (bold, underlined, yellow) = index 3. "Select one answer only." kept in stem as printed (part of the slide text, not an instruction to omit). Figure described by symbol shading/layout only, no allele or risk conclusion stated in fig/figAlt.' },

{ n:38, pr:36, p:243, key:0,
  stem:'A mother comes to see the geneticist. She has two children, Robert and Elizabeth, both of whom suffer from a genetic disorder. The geneticist takes a history and draws a family tree (see opposite figure). What is the likely pattern of inheritance of this disorder?',
  opts:['Autosomal dominant','Autosomal recessive','Imprinting from uniparental disomy','X-linked dominant','X-linked recessive'],
  fig:'A three-generation pedigree diagram (circles = females, squares = males, shaded symbols = affected). Generation I: one unaffected couple. Generation II: four of their children -- a shaded circle, an unshaded circle married to an unshaded square, an unshaded square, and a shaded circle -- with shaded and unshaded individuals of both sexes present. Generation III: further children below each generation-II individual/couple, again a mix of shaded and unshaded circles and squares.',
  figAlt:'Three-generation pedigree chart.',
  expl:'',
  note:'No explanation box printed on this page. Highlighted: "A. Autosomal dominant" (bold, underlined, yellow) = index 0. Faint background text is visible behind/above the pedigree image but is illegible at 150dpi hires and not a printed answer element -- not transcribed; if it matters, escalate for a 300dpi crop. Figure described by symbol shape/shading and generation layout only, no inheritance-pattern conclusion stated in fig/figAlt.' }

];
