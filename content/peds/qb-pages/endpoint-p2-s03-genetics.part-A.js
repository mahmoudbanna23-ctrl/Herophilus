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
  note:'Highlighted option: "a. Echocardiography" (yellow highlight, underlined), first in the list -> key 0. Page fully legible in hires render, no crop needed. Explanation printed in a bordered box below the options, transcribed verbatim.' }

{ n:2, pr:2, p:170, key:0,
  stem:'Which disease can commonly be discovered during follow-up of a child with Down syndrome?',
  opts:['Celiac disease','Hyperthyroidism','Type 1 diabetes mellitus','Asthma'],
  expl:'Children with Down syndrome have a higher risk of autoimmune disorders, especially celiac disease and hypothyroidism. Regular screening is recommended during follow-up.',
  note:'Highlighted option: "a. Celiac disease" (yellow highlight, underlined), first -> key 0. Only 4 options printed (b/c/d), no fifth option on this page. Fully legible, no crop needed. Note the explanation box names "hypothyroidism" while option b prints "Hyperthyroidism" - transcribed each exactly as printed, no correction made.' }

{ n:3, pr:3, p:172, key:1,
  stem:'Regarding modes of inheritance, the condition that occurs in heterozygous state, males and females are equally affected is:',
  opts:['Autosomal recessive','Autosomal dominant','X linked recessive','X linked dominant','Sporadic'],
  expl:'In autosomal dominant conditions, one abnormal allele is enough to cause disease, and both males and females are equally affected.',
  note:'Highlighted option: "b. Autosomal dominant" (yellow, underlined), second -> key 1. Fully legible, no crop needed.' }

{ n:4, pr:4, p:174, key:3,
  stem:'Which of the following is NOT a routine screening test required in children with Down syndrome?',
  opts:['Thyroid function test','Echocardiography','Hearing assessment','Screening for hyperthyroidism'],
  expl:'Hypothyroidism is the common thyroid problem in Down syndrome, not hyperthyroidism. Routine screening includes TSH, hearing assessment, and echo.',
  note:'Highlighted option: "d. Screening for hyperthyroidism" (yellow, underlined), fourth/last of 4 printed options -> key 3. Fully legible, no crop needed.' }

{ n:5, pr:5, p:176, key:0,
  stem:'Mr. and Mrs. are examined as their baby is diagnosed with Down syndrome. Chromosome analysis shows three copies of chromosome 21, with one of them attached to chromosome 14. What is this chromosomal anomaly called?',
  opts:['Translocation','Mosaicism','Nondisjunction','Inversion'],
  expl:'This is a Robertsonian translocation, a common cause of familial Down syndrome, where chromosome 21 attaches to chromosome 14.',
  note:'Highlighted option: "a. Translocation" (yellow, underlined), first of 4 -> key 0. Numerals "21" and "14" fully legible in the hires render, no crop needed.' }

{ n:6, pr:6, p:178, key:3, box:179,
  stem:'You are Year 4 pediatric specialist trainee. You are called to see a baby boy, James, in the postnatal ward. The midwife tells you that James is 6 hours old now and has had 1 episode of bilious vomiting. He has not passed meconium. You notice that he has low set eyes, epicanthic fold, flat nasal bridge, single transverse palmar crease and is hypotonic. His abdomen is distended. Which of the following should be your next step?',
  opts:['Obtain blood samples for G-branded karyotype, blood culture, CRP & full blood count and start on antibiotics','Refer to the surgical team','Request contrast Upper Gastrointestinal Tract series','Request plain abdominal X-ray','NGT is not indicated until a diagnosis is confirmed.'],
  expl:'Bilious vomiting in a neonate suggests intestinal obstruction (e.g., duodenal atresia, common in Down syndrome). First step: plain abdominal X-ray before further imaging or surgical referral.',
  note:'Highlighted option: "d. Request plain abdominal X-ray" (yellow, underlined), fourth of 5 -> key 3. p.178 itself prints no explanation box - checked p.179 (next page, would normally be question 7 unanswered) and it is the explanation box alone, breaking the strict alternation, exactly the overflow case the brief describes. box:179 recorded; expl text taken from p.179. Numerals "6 hours" and "1 episode" fully legible.' }

{ n:7, pr:7, p:181, key:1,
  stem:'You were asked by a mother 38-year-old of a baby with Down syndrome waiting the karyotype result about the WORST recurrence risk in the further pregnancy:',
  opts:['Non-disjunction type','Maternal translocation 21/21','Mosaicism','Maternal Translocation 13/21','Her age is over 35-year-old'],
  expl:'If a mother carries a 21/21 translocation, recurrence risk is essentially 100%. Nondisjunction usually has low recurrence risk.',
  note:'Highlighted option: "b. Maternal translocation 21/21" (yellow, underlined), second of 5 -> key 1. "21/21" vs "13/21" (option d) and "38-year-old"/"35-year-old" numerals all fully legible in hires render, no crop needed. Note printed alternation resumed normally here after the p.178/179 overflow.' }

{ n:8, pr:8, p:183, key:4,
  stem:'Michael is a 6-year-old boy who is prone to bleeding. He has a problem with one of his clotting factors, and his parents have been told that this is caused by a faulty gene. He is otherwise well and has no other medical problems. His parents have an appointment with a geneticist who takes a family history and draws a family tree, which is shown in the opposite figure. What is the most likely pattern of inheritance of this disorder?',
  opts:['Autosomal dominant','Autosomal recessive','Imprinting from uniparental disomy','Trinucleotide repeat expansion mutation','X-linked recessive'],
  fig:'A pedigree (family tree) to the right of the stem, three generations: top generation one unfilled circle - unfilled square couple; second generation shows an unfilled circle married into a filled (affected) square, an unfilled circle married to a filled square, and an unfilled circle married to an unfilled square, laid out left to right; third generation shows further unfilled/filled squares and circles descending from those couples (filled = affected male squares scattered across generations, no filled circles), consistent with a pedigree used to determine inheritance pattern. Standard pedigree key symbols only, no labels/numbers legible on the figure itself.',
  figAlt:'Three-generation pedigree (family tree) diagram',
  expl:'X-linked recessive conditions like Hemophilia A typically affect males, while females are carriers. Pedigree patterns confirm this mode.',
  note:'This page uses UPPERCASE lettered options (A-E), unlike the lowercase a-e used on other pages in this half - transcribed exactly as printed. Highlighted option: "E. X-linked recessive" (yellow, underlined), fifth/last -> key 4. Options and stem fully legible; the pedigree figure is described structurally without naming the diagnosis (Hemophilia A is only named in the explanation box, not in fig).' }

{ n:9, pr:9, p:185, key:0,
  stem:'Which of the following is an X-linked disease?',
  opts:['Favism','Sickle cell disease','Thalassemia','Phenylketonuria'],
  expl:'G6PD deficiency (favism) is X-linked. Sickle cell disease, thalassemia, and PKU are autosomal recessive.',
  note:'Highlighted option: "a. Favism" (yellow, underlined), first of 4 -> key 0. Fully legible, no crop needed.' }

{ n:10, pr:10, p:187, key:2,
  stem:'You are called to attend the delivery of a term infant in view of abnormalities detected antenatally. US in utero revealed the presence of a raised nuchal translucency measurement & a double bubble sign. Subsequent investigations confirmed the suspected diagnosis. In terms of the chances of the same condition happening again within the family, which test is the most appropriate to arrange for the neonate?',
  opts:['Array CGH (microarray)','FISH','Karyotype','Whole genome analysis'],
  expl:'Karyotyping confirms whether Down syndrome is due to nondisjunction, translocation, or mosaicism, which is essential for recurrence counseling.',
  note:'Highlighted option: "c. Karyotype" (yellow, underlined), third of 4 -> key 2. Fully legible, no crop needed.' }

{ n:11, pr:11, p:189, key:4,
  stem:'You are investigating a child for short stature. Which of the following syndromes is a cause of short stature?',
  opts:['Klinefelter syndrome','Marfan syndrome','Sotos syndrome','Triple X syndrome','Turner syndrome'],
  expl:'Turner syndrome (45,XO) is associated with short stature and gonadal dysgenesis. Marfan and Sotos are tall stature syndromes.',
  note:'Highlighted option: "e. Turner syndrome" (yellow, underlined), fifth/last -> key 4. "45,XO" fully legible, no crop needed.' }

{ n:12, pr:12, p:191, key:2,
  stem:'Periodic checkup and screening for children with Down syndrome may reveal all of the following EXCEPT:',
  opts:['Impairment of vision','Hearing defects','Hyperthyroidism','Celiac disease'],
  expl:'Hypothyroidism is the common endocrine problem. Hyperthyroidism is rare and not a routine screening focus.',
  note:'Highlighted option: "c. Hyperthyroidism" (yellow, underlined), third of 4 -> key 2. Fully legible, no crop needed. OBSERVATION (not folded): thematically close to n4/p.174 (also Down syndrome screening, also flags hyperthyroidism as the odd one out) but stem, option set and framing (EXCEPT-format here vs NOT-format there, and different option lists: this page adds vision/hearing, p.174 adds thyroid function test/echo) are genuinely different questions - recorded, nothing folded.' }

{ n:13, pr:13, p:193, key:4,
  stem:'Which of the following is NOT a commonly associated problem of Down syndrome?',
  opts:['Congenital heart disease','Leukemia','Hypothyroidism','Short stature','Gastro-esophageal reflux disease'],
  expl:'Common associations include congenital heart disease, hypothyroidism, leukemia, and short stature. GERD is not a classic feature.',
  note:'Highlighted option: "e. Gastro-esophageal reflux disease" (yellow, underlined), fifth/last -> key 4. Fully legible, no crop needed.' }

{ n:14, pr:14, p:195, key:1,
  stem:'A Pakistani couple are referred for genetic counselling. They have lost two children who both died in the first 2 years of life. They have one healthy daughter who is 3 years old. The faulty gene has been identified, and other members of their family have been tested (see opposite figure). What is the most likely pattern of inheritance?',
  opts:['Autosomal dominant','Autosomal recessive','Imprinting from uniparental disomy','Trinucleotide repeat expansion mutation','X-linked recessive'],
  fig:'A pedigree (family tree) to the right of the stem, three generations, wider than the one on p.183/n8: top generation shows two separate unfilled circle-square couples side by side; second generation under each couple includes a mix of unfilled and filled (affected, shaded) squares and circles, with one union in the middle drawn between two second-generation individuals from the two different top-generation couples (consistent with a consanguineous/cousin marriage); third generation shows further offspring including at least one more filled/affected square, descending from that middle union. Filled symbols appear among both sexes here (unlike the p.183 pedigree, which showed only filled squares), and the layout groups two extended-family branches converging on one couple in the middle.',
  figAlt:'Three-generation pedigree (family tree) diagram, two family branches converging',
  expl:'When both parents are carriers and multiple children are affected, an autosomal recessive pattern is likely.',
  note:'Highlighted option: "B. Autosomal recessive" (yellow, underlined), second of 5 -> key 1. UPPERCASE lettered options again, as on p.183. SHARED OPTION MENU (per brief 7): this page prints the identical 5-option ladder as n8/p.183 (Autosomal dominant / Autosomal recessive / Imprinting from uniparental disomy / Trinucleotide repeat expansion mutation / X-linked recessive), in the same order - recorded as a pairing, not folded. Discriminating token: n8 is a boy with an isolated clotting-factor deficiency and a pedigree with only affected males -> key X-linked recessive; n14 is a Pakistani couple (consanguinity implied) who lost two children in infancy, pedigree shows a cousin-marriage-style convergence with affected individuals of both sexes -> key Autosomal recessive. Numerals "2 years" and "3 years old" fully legible, no crop needed.' }

{ n:15, pr:15, p:197, key:2,
  stem:'The same couple (as in the previous question) would like more children. What is the risk of them having another affected baby?',
  opts:['Around 1 in 200','1 in 2','1 in 4','2 in 3','3 in 4'],
  expl:'Each child has a 25% chance of inheriting both faulty alleles from carrier parents.',
  note:'Explicitly a follow-on to n14/p.195 ("the same couple as in the previous question") - stem itself makes the link, not an inference; kept as its own entry since it is a separate printed question with its own number and highlight. Highlighted option: "C. 1 in 4" (yellow, underlined), third of 5 -> key 2. UPPERCASE lettered options again. All numerals (1 in 200, 1 in 2, 1 in 4, 2 in 3, 3 in 4, 25%) fully legible, no crop needed.' }

{ n:16, pr:16, p:199, key:4,
  stem:'Mr. and Mrs. David are seen by the geneticist as their baby, Sarah, has Down syndrome. Her chromosomes are examined, and three copies of chromosome 21 are seen, one of which is attached to chromosome 14. How would you describe this abnormality?',
  opts:['Balanced Robertsonian translocation','Mosaicism','Nondisjunction','Triplet repeat expansion','Unbalanced Robertsonian translocation'],
  expl:'This chromosomal rearrangement causes an extra copy of chromosome 21 material, leading to Down syndrome.',
  note:'Highlighted option: "E. Unbalanced Robertsonian translocation" (yellow, underlined), fifth/last -> key 4. UPPERCASE lettered options. OBSERVATION (not folded): stem is near-identical in setup to n5/p.176 (also "three copies of chromosome 21, one attached to chromosome 14"), but the two are genuinely different questions - different named parents/baby, different option sets (n5: Translocation/Mosaicism/Nondisjunction/Inversion, plain "Translocation" as the answer; n16: distinguishes Balanced vs Unbalanced Robertsonian translocation and keys the Unbalanced form) - recorded, nothing folded. Numerals "21" and "14" fully legible, no crop needed.' }
