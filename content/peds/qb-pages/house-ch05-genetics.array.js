// House pediatrics bank — Part I, chapter 5 "Genetics", book pp.42-48.
// Verbatim staging record. Transcribed from the rendered page images only.
// Source: Semester 8\Pedo\Questions\pediatric .pdf
// No explanation boxes are printed anywhere in this chapter (count: 0).
var PEDHD_GEN_STAGED = [
  { n:1, p:'42', boiler:true, fig:true, figp:'42',
    stem:'Michael is a 6-year-old boy who is prone to bleeding. He has a problem with one of his clotting factors and his parents have been told that this is caused by a faulty gene. He is otherwise well and has no other medical problems. His parents have an appointment with the geneticist who takes a family history and draws a family tree, which is shown in the opposite figure. What is the most likely pattern of inheritance in this disorder?',
    opts:['Autosomal dominant','Autosomal recessive','Imprinting from uniparental disomy','Trinucleotide repeat expansion mutation','X-linked recessive'],
    key:'E',
    note:'Stem says "shown in the opposite figure" but the pedigree is printed on the SAME page (p.42), in a yellow panel to the right of the stem column. Wording inherited from a two-column original. Pedigree: four generations, squares/circles, affected males solid-shaded, no arrow.' },

  { n:2, p:'42', boiler:true, fig:true, figp:'42',
    stem:'The female marked with an arrow in the opposite figure is planning on starting a family. If she were to give birth to a son, what would be the risk of him being affected by the disorder?',
    opts:['1 in 1','1 in 2','1 in 3','1 in 4','1 in 5'],
    key:'D',
    note:'Second, SEPARATE printing of the Q1 pedigree, redrawn on p.42 below Q1 with a black arrow added pointing at an unshaded female in the third generation. Two distinct figure panels on p.42 - Q1 and Q2 do not share one crop. Again says "opposite figure" while the figure is on the same page.' },

  { n:3, p:'43', boiler:true,
    stem:'Mr and Mrs Walsh attend the clinic with their new baby, Ophelia, who has Down syndrome. They are keen to have further children and want to know more about their future risk of having children with Down syndrome. What chromosomal abnormality is likely to have caused Ophelia to have Down syndrome?',
    opts:['Mosaicism','Nondisjunction','Point mutation','Translocation','Triplet repeat expansion'],
    key:'B' },

  { n:4, p:'43', boiler:true,
    stem:'Mr and Mrs David are seen by the geneticists as their baby, Sarah, has Down syndrome. Her chromosomes are examined. Three copies of chromosome 21 are seen, one of which is attached to chromosome 14. How would you describe this abnormality?',
    opts:['Balanced Robertsonian translocation','Mosaicism','Nondisjunction','Triplet repeat expansion','Unbalanced Robertsonian translocation'],
    key:'E' },

  { n:5, p:'43', boiler:true,
    stem:'Olive is a 10-day-old baby with Down syndrome. On examination, you hear a loud heart murmur. What is the most likely cause?',
    opts:['Aortic stenosis','Atrioventricular septal defect','Coarctation of the aorta','Innocent murmur','Patent ductus arteriosus'],
    key:'B' },

  { n:6, p:'43', boiler:true,
    stem:'Fiona is a well 4-year-old girl with Down syndrome. She attends her yearly follow-up appointment with her mother. There are no real problems other than constipation, for which her general practitioner has started treatment. When you plot Fiona on the Down syndrome growth chart, you notice that her height has gone from the 75th centile to the 25th centile. Her weight, however, has gone from the 50th centile to the 75th centile. Which of the following investigations would you perform?',
    opts:['Coeliac screen','Abdominal ultrasound','Full blood count','Thyroid function tests','Vitamin D levels'],
    key:'D',
    note:'The question straddles a page break: the vignette occupies the last box on p.43 and the final sentence ("Which of the following investigations would you perform?"), the boiler line, the options and the answer are all in the continuing box at the top of p.44. The question number "6." is printed only on p.43. Note also this is the ONE question whose option list is not alphabetised (Coeliac / Abdominal / Full blood count / Thyroid / Vitamin D).' },

  { n:7, p:'44', boiler:true,
    stem:'Mary is an infant with Down syndrome. Her antenatal scans had all been normal and an echocardiogram on the neonatal unit shortly after birth was normal. She attends the community clinic for the first time at 4 weeks of age. She is now thriving and feeding well. Her parents have many questions about what is going to happen in the future. In particular, they have been reading that she is still at an increased risk of certain diseases because she has Down syndrome. Out of the following, which condition is Mary at increased risk of developing compared with the general population?',
    opts:['Congenital heart disease','Duodenal atresia','Ischaemic heart disease','Leukaemia','Pyloric stenosis'],
    key:'D' },

  { n:8, p:'44', fig:true, figp:'44',
    stem:'A Pakistani couple are referred for genetic counselling. They have lost two children who both died in the first 2 years of life. They have one healthy girl, who is 3 years of age. The faulty gene has been identified and other members of their family have been tested (in the opposite figure). What is the pattern of inheritance in this disorder?',
    opts:['Autosomal dominant','Autosomal recessive','Imprinting from uniparental disomy','Trinucleotide repeat expansion mutation','X-linked recessive'],
    key:'B',
    note:'NO "Select one answer only." line is printed under this question. Figure is on the same page (p.44), yellow panel right of the stem: a four-generation pedigree with two founding couples, consanguineous-style joined branches, and a mixture of solid-shaded (affected/tested) and open symbols; bottom row of three symbols hangs below the main sibship.' },

  { n:9, p:'45', boiler:true,
    stem:'The same couple (in the previous question) tell you that they would like more children. What is the risk of them having another affected baby?',
    opts:['Around 1 in 200','1 in 2','1 in 4','2 in 3','3 in 4'],
    key:'C',
    note:'Back-reference: "the same couple (in the previous question)" points to Q8, which is on the facing page p.44. The reference resolves correctly.' },

  { n:10, p:'45',
    stem:'A Bangladeshi couple are referred for genetic counselling. Both parents are carriers of a faulty gene PEX1; possession of two abnormal copies of this gene leads to death in infancy. They have lost two children who both died in the first 2 years of life. They have one healthy daughter, who is 3 years of age. What is the risk that their daughter is a carrier?',
    opts:['None','1 in 4','1 in 2','2 in 3','100%'],
    key:'D',
    note:'NO "Select one answer only." line. Options are NOT in ascending order (None / 1 in 4 / 1 in 2 / 2 in 3 / 100%) - B and C are inverted relative to magnitude. This is a near-twin of Q8/Q9 (same "two children died in the first 2 years of life, one healthy 3-year-old" scaffold) but asks a different quantity (carrier risk of the unaffected sib, not recurrence risk), so it is a paired question, not a fold.' },

  { n:11, p:'45', boiler:true, fig:true, figp:'45',
    stem:'Gemma and Mark, who are both well, are planning to start a family. Gemma’s older brother has cystic fibrosis. There is no history of cystic fibrosis in Mark’s family. The family tree is shown in the opposite figure. What is the chance that they will have a child with cystic fibrosis? The carrier rate is 1 in 25 in their population.',
    opts:['1 in 6','1 in 37.5','1 in 100','1 in 150','1 in 2500'],
    key:'D',
    note:'Apostrophes in "Gemma’s" and "Mark’s" are TYPOGRAPHIC right single quotes (U+2019), verified on a 6x upscale of the printed line - not straight apostrophes. Note also the boiler line "Select one answer only." is printed AFTER the carrier-rate sentence, i.e. the stem ends with a data sentence rather than the question. Figure on the same page (p.45): a small two-generation pedigree, two founding couples, half-shaded (carrier) symbols in generation I, one solid-shaded affected male in generation II, with the two right-hand generation-II symbols text-labelled "Gemma" and "Mark".' },

  { n:12, p:'46', boiler:true, fig:true, figp:'46',
    stem:'A mother comes to see the geneticist. She has two children, Robert and Elizabeth. They both suffer from a genetic disorder. The geneticist takes a history and draws the family tree (shown in the opposite figure). What is the likely pattern of inheritance in this disorder?',
    opts:['Autosomal dominant','Autosomal recessive','Imprinting from uniparental disomy','X-linked dominant','X-linked recessive'],
    key:'A',
    note:'Option menu differs from Q1/Q8: option D here is "X-linked dominant" where Q1 and Q8 print "Trinucleotide repeat expansion mutation". Shared four-of-five menu PAIRS this with Q1/Q8; the discriminating option is D. Figure on the same page (p.46): a three-generation pedigree, one founding couple (both symbols shaded), affected offspring in every generation, vertical transmission. The named children Robert and Elizabeth are NOT labelled on the pedigree - the figure reference does not fully resolve to the names in the stem.' },

  { n:13, p:'46', boiler:true,
    stem:'George has Klinefelter syndrome. What is his karyotype?',
    opts:['46, XO','46, XY','45, XO','45, XY','47, XXY'],
    key:'E',
    note:'Options are printed with a space after the comma ("46, XO"), verified on a 6x upscale. SOURCE DEFECT: options A ("46, XO") and D ("45, XY") are chromosomally impossible counts - a single X with no Y is 45 chromosomes, and XY with 44 autosomes is 46. Options are also unordered (46, 46, 45, 45, 47). Key E is correct and is not disputed.' },

  { n:14, p:'46', fig:true, figp:'46',
    stem:'Rachael is a 3-month-old girl who attends the Emergency Department because of rapid breathing. She is the 5th infant born to a 39-year-old mother. When you take her developmental history, you find she smiled at 7 weeks but is unable to hold her head unsupported. On examination, she is tachypnoeic, sweaty and hypotonic. Her clinical appearance can be seen in the opposite figure. You plot her weight and she is below the 0.4th centile. Which of the following is the most likely diagnosis?',
    opts:['Achondroplasia','Down syndrome','Turner syndrome','Klinefelter syndrome','Prader–Willi syndrome'],
    key:'B',
    note:'NO "Select one answer only." line. Option E uses an EN DASH in "Prader–Willi" (verified at 6x). Figure on the same page (p.46): a colour clinical photograph, portrait format, of a supine bare-chested infant with eyes closed, head turned slightly, one hand raised near the ear - facial features (flat nasal bridge, upslanting palpebral fissures) are the diagnostic content. ⚠️ The photograph shows the answer; any imgAlt written for it must state modality and view only.' },

  { n:15, p:'47',
    stem:'A paediatrician is asked to review a heart murmur of a 2-day-old baby born by vaginal delivery following an uneventful period to a primiparous mother, aged 38. The perinatal period was normal and baby has been feeding well. On examination, he is hypotonic, has single palmar creases and epicanthic folds. What is the most likely heart lesion?',
    opts:['Atrioventricular septal defect','Atrial septal defect','Aortic stenosis','Coarctation of the aorta','Patent ductus arteriosus'],
    key:'A',
    note:'NO "Select one answer only." line. Printed as "following an uneventful period" - the qualifying word (antenatal / pregnancy) is missing, and the next sentence then separately says "The perinatal period was normal", so the stem states the period was uneventful twice with one of them incomplete. Transcribed as printed. Option menu is the same five lesions as Q5 but REORDERED and with "Innocent murmur" replaced by "Atrial septal defect"; the key letter therefore differs (Q5 key B, Q15 key A) - a shared menu pairs these, it does not fold them.' },

  { n:16, p:'47',
    stem:'Common forms of inheritance include autosomal dominant and autosomal recessive patterns. Which of the following conditions is autosomal dominant?',
    opts:['Neurofibromatosis type 1','Cystic fibrosis','Sickle cell disease','Haemophilia A','Duchenne muscular dystrophy'],
    key:'A',
    note:'NO "Select one answer only." line.' },

  { n:17, p:'47',
    stem:'A 6-year-old boy attends the out-patient clinic with a diagnosis of Down syndrome. He has been pale and lethargic for the last 4 weeks and has some bruises on his shins. Which of the following conditions is it important to rule out in view of his underlying diagnosis?',
    opts:['Parvovirus infection','ITP','Haemophilia A','Acute leukaemia','Henoch–Schonlein purpura'],
    key:'D',
    note:'NO "Select one answer only." line. SOURCE DEFECT in option E: printed "Henoch–Schonlein" with an EN DASH and with NO umlaut on the o (correct spelling is Schönlein). Verified at 6x upscale - there is no diaeresis over the o. Option B is printed as the bare abbreviation "ITP", unexpanded, while every other option is spelled out.' },

  { n:18, p:'47',
    stem:'Down syndrome is the most common form of trisomy encountered in children and occurs on chromosome 21. Which of the following statements is true?',
    opts:['Most babies with Down syndrome are born to older mothers','Males are frequently infertile','The incidence is 1 in 1400','Epicanthic folds are pathognomonic','The majority have severe intellectual impairment'],
    key:'B',
    note:'NO "Select one answer only." line. The OCR index renders option A as "bon to older mothers"; the printed page reads "born to older mothers" - OCR artefact, not a source defect.' },

  { n:19, p:'48',
    stem:'A 14-year-old girl attends clinic as she is concerned about her height. She is on the 9th centile for height. On examination she has not yet developed secondary sexual characteristics, she has a square-shaped chest, webbing of the neck and short 4th metacarpals. What is the likely cause for her short stature?',
    opts:['Hypothyroidism','Constitutional short stature','Turner syndrome','Growth hormone deficiency','Russell–Silver syndrome'],
    key:'C',
    note:'NO "Select one answer only." line. Option E uses an EN DASH in "Russell–Silver" (verified at 6x).' },

  { n:20, p:'48',
    stem:'A newborn infant with features of Down syndrome develops vomiting on day 1 of life. The pregnancy was complicated by polyhydramnios. On examination he is well perfused and his abdomen is soft with no masses palpable. His anus is patent but he has not opened his bowels yet. Which of the following is the most useful initial investigation to make a diagnosis?',
    opts:['Plain abdominal radiograph','Abdominal ultrasound scan','CT abdomen','MRI abdomen','Barium follow through'],
    key:'A',
    note:'NO "Select one answer only." line. Last question of the chapter; the lower two-thirds of p.48 is blank and p.49 opens the next chapter banner, "Perinatal medicine", with its numbering restarted at Q1.' },
];
