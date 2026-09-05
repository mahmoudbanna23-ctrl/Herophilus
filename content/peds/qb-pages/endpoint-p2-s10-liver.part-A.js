/* Peds endpoint PART 2, section 10, "Liver disorders", HALF A.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (NEVER modified/moved).
   Section pp.1146-1210, 20 questions total, section-global n:1-20. This half stages n:1-11
   (answered pages 1168,1170,1172,1174,1177,1179,1181,1183,1185,1187,1189). Half B takes
   n:12-20 (pp.1191,1193,1195,1197,1199,1201,1203,1206,1209) -- not touched here.
   pp.1146-1167 = 22 pages of opening teaching notes, no question printed -- not read (per brief).
   Images read from native JPEG cache (800x450 ceiling); hires PNG used only where the native
   was not legible enough. OCR index NOT opened during staging -- search index only, per brief.
   Renders were already present; nothing re-rendered by this half except any 300dpi crops noted
   individually below.

   Page-structure walk (answered pages, printed number pr vs section-global n):
     n:1  p.1168  pr:1
     n:2  p.1170  pr:2
     n:3  p.1172  pr:3
     n:4  p.1174  pr:4 (no box on p1174 itself -- overflow box printed alone on p1175, box:1175)
     n:5  p.1177  pr:5
     n:6  p.1179  pr:6
     n:7  p.1181  pr:7
     n:8  p.1183  pr:8
     n:9  p.1185  pr:9
     n:10 p.1187  pr:10
     n:11 p.1189  pr:11

   Every entry checked with tools/bank-harness/check-part-ep.js after append.

   FINAL, 11/11 entries staged (n:1-11, pp.1168-1189), check-part-ep.js OK throughout.
   Overflow box: n:4 (p.1174 prints no box; overflow box:1175, small bordered side-box format,
   read per brief SS3a and confirmed a genuine overflow, not a teaching slide).
   Boxless (expl:''): n:10 (p.1187) -- next page p1188 checked and is Q11's own unanswered
   twin, not an overflow box, so the boxlessness is genuine.
   Figures: n:3 (p.1172, infant face photo) and n:5 (p.1177, eye close-up) -- the only two
   pages in this half printing an image; every other of the 11 answered pages read whole and
   carries no image (zero measured, not assumed).
   Shared option menu: n:6/n:7/n:8/n:9 (pp.1179/1181/1183/1185) all print the identical
   5-item ladder Hepatitis A / Hepatitis B / Biliary atresia / Galactosaemia / Primary
   sclerosing cholangitis, in that order -- recorded as a 4-way pairing, never folded; each
   entry's note names its own discriminating clinical token.
   pr==n for every one of the 11 entries -- no disagreement found in this half.
   Boundary proof: p.1190 rendered and read -- it is Q12's unanswered twin ("12. You see
   parents in clinic... incubation period of hepatitis A?"), confirming half A ends cleanly
   at n:11/p.1189 with no gap or overlap into half B's n:12/p.1191.
   Numbers/units read off the image directly for every entry that carried one (n:10's
   bilirubin values 12 mg/dL / 9 mg/dL); no exponent or unit in this half needed OCR or a
   300dpi crop -- all native JPEGs were legible at 800x450, none escalated.
*/

{ n:1, pr:1, p:1168, key:3,
  stem:'Manuel, a 3-day-old infant, is born to healthy parents. He presents with oozing from the umbilical stump and sleepiness. On examination, he is pale and grunting. He responds only to painful stimuli. He has marked hepatomegaly. Oxygen is delivered and senior help is summoned as he is very unwell. The nurse practitioner inserts an intravenous line and asks what blood tests you would like first. From the following list of blood tests, choose the one you would undertake first :',
  opts:['Ammonia','Blood culture','Blood gas','Blood glucose','Coagulation studies'],
  expl:'Hypoglycemia is a life-threatening but reversible cause of lethargy and encephalopathy in neonates. It should be checked immediately to guide urgent treatment while other investigations follow.',
  note:'Native p1168.jpeg fully legible, no crop needed. Highlighted option is bold+yellow "D. Blood glucose" = index 3 (0-based: A=0 Ammonia, B=1 Blood culture, C=2 Blood gas, D=3 Blood glucose, E=4 Coagulation studies). Explanation box printed on the same page, verbatim above. 5 options.' }

{ n:2, pr:2, p:1170, key:1,
  stem:'Reece, a 4-week-old male infant living in the UK, is taken to his family doctor because he is jaundiced. He was born at term and is breastfed. His mother reports that he has always looked yellow and has started to develop bruises. His stools are now pale in color. On examination, he has hepatomegaly. Which of the following investigations would you undertake first?',
  opts:['Faecal elastase','Serum conjugated and unconjugated bilirubin','Sweat test','Ultrasound scan of the liver','Urinalysis'],
  expl:'Differentiating between conjugated and unconjugated bilirubin helps to determine if the jaundice is due to cholestasis, as seen in conditions like biliary atresia, which requires urgent intervention.',
  note:'Twin checked at p1169 (unanswered, identical stem/options, no highlight, no box) -- readings agree. Highlighted option "B. Serum conjugated and unconjugated bilirubin" = index 1 (0-based: A=0 Faecal elastase, B=1 Serum conjugated and unconjugated bilirubin, C=2 Sweat test, D=3 Ultrasound scan of the liver, E=4 Urinalysis). Box printed on the answered page. 5 options.' }

{ n:3, pr:3, p:1172, key:4,
  stem:"Javid is a 5-month-old Asian baby born at term in rural Pakistan. He presents with jaundice. His mother's blood group is AB and rhesus positive. His stool and urine are a normal color. He is breastfed, although he has not been feeding well. His mother is concerned that this could be due to his constipation. When you examine the infant (in the opposite figure), you note that he has dry skin and an umbilical hernia. Which of the following is the most likely diagnosis?",
  opts:['Biliary atresia','Congenital infection','Galactosaemia','Rhesus hemolytic disease of the newborn','Hypothyroidism'],
  fig:'Colour photograph, single infant, close-up of face, inset to the right of the option list. Infant shows a puffy/coarse facial appearance with macroglossia (large protruding tongue), consistent with the printed diagnosis of congenital hypothyroidism. No labels or panels; one image only.',
  figAlt:'Close-up colour photograph of an infant’s face.',
  expl:'Congenital hypothyroidism commonly presents with prolonged jaundice, constipation, umbilical hernia, and hypotonia. Early detection is critical to prevent developmental delay.',
  note:'Native p1172.jpeg legible. Highlighted option is bold+yellow "E. Hypothyroidism" = index 4 (0-based: A=0 Biliary atresia, B=1 Congenital infection, C=2 Galactosaemia, D=3 Rhesus hemolytic disease of the newborn, E=4 Hypothyroidism). Box printed on same page, expl text itself contains a red-highlighted lead-in word ("Congenital hypothyroidism") in the printed box -- transcribed as plain text, no styling markup kept. Per s10-chapter-rulings ruling 1, this vignette has normal stool/urine colour (neonatal fork), stated here for drafting reference only, not decided by this staging pass. 5 options.' }

{ n:4, pr:4, p:1174, key:1, box:1175,
  stem:'Luna, a 32-year-old Cantonese woman, has just given birth to her third child. She arrived in the UK 3 months ago to live with her extended family following the death of her husband. Antenatal screening shows that she is hepatitis B surface antigen (HBsAg) positive and hepatitis B e antigen (HBeAg) negative. The newborn infant looks well and has fed. The postnatal team is keen to send the mother and baby home. Which of the following is the best advice to give concerning immunization of the family?',
  opts:['Hepatitis B vaccination for the baby','Hepatitis B vaccination for the baby and all other children','Hepatitis B vaccination for the baby and mother','Hepatitis B vaccination for the baby with hepatitis B immunoglobulin','No treatment required'],
  expl:'Prevention of hepatitis B virus infection is important. All pregnant women should undergo antenatal screening for hepatitis B surface antigen (HBsAg). Babies born to HBsAg-positive mothers should receive a full course of hepatitis B vaccination, which is given routinely in many countries.',
  note:'Twin checked at p1173 (unanswered, identical stem/options, no highlight, no box) -- readings agree; no straddle observed (chapter-rulings md cited "pp.1173-1175" as the vignette+box span, but the question box itself is whole on p1173/1174, no straddle:true needed). Highlighted option on p1174 is bold+yellow "B. Hepatitis B vaccination for the baby and all other children" = index 1 (0-based: A=0 baby only, B=1 baby+other children, C=2 baby+mother, D=3 baby+HBIG, E=4 no treatment). p1174 prints NO box -- per brief SS3/3a, opened next page: p1175 is a bordered box alone on its own page (small side-box format, reduced font, matches genuine-overflow shape, not a teaching slide) -- box:1175, text captured above verbatim. 5 options.' }

{ n:5, pr:5, p:1177, key:4,
  stem:'Summer, a 12-year-old girl, is seen in the Emergency Department. Her parents report that her school performance has been deteriorating and recently she has become confused and unsteady on her feet. Examination findings of her eyes are shown in the opposite figure. Select the most likely diagnosis:',
  opts:['Glaucoma','Hyperthyroidism','Illicit drug use','Intracranial tumor',"Wilson's disease"],
  fig:'Colour close-up photograph, single eye (iris and pupil filling the frame), inset to the right of the option list. A pale/greyish ring is visible around the periphery of the iris, consistent with the printed diagnosis of Kayser-Fleischer ring in Wilson\'s disease. One image only, no panels or labels.',
  figAlt:'Close-up colour photograph of an eye.',
  expl:"Wilson's disease can present with neuropsychiatric symptoms and Kayser-Fleischer rings in the cornea. It involves copper accumulation and needs early treatment to prevent irreversible damage.",
  note:"Native p1177.jpeg legible. Highlighted option is bold+yellow \"E. Wilson's disease\" = index 4 (0-based: A=0 Glaucoma, B=1 Hyperthyroidism, C=2 Illicit drug use, D=3 Intracranial tumor, E=4 Wilson's disease). Box printed on same page. Per s10-chapter-rulings ruling 7: Wilson's disease is not taught as a liver topic anywhere in the corpus (only appears in the neuro deck's chorea table) -- flagged here as context, drafting pass's problem, not corrected or interpreted by this staging pass. This is the parity-flip page (section runs 1168/1170/1172/1174 even, then flips to 1177 odd). 5 options." }

{ n:6, pr:6, p:1179, key:2,
  stem:"Jason, a 3-week-old boy, is still jaundiced. His mother is reassured that this is likely to be 'breast milk' jaundice as she is fully breastfeeding him. He presents 3 weeks later with poor feeding, vomiting, and bruising on his forehead and limbs. He has pale stools. On examination, the liver is palpable 4 cm below the costal margin. Which of the following is the most likely diagnosis of that patient?",
  opts:['Hepatitis A','Hepatitis B','Biliary atresia','Galactosaemia','Primary sclerosing cholangitis'],
  expl:'Pale stools and hepatomegaly are classic for biliary atresia. Early surgical intervention (Kasai procedure) improves outcomes and should be done ideally before 6 weeks of age.',
  note:'Native p1179.jpeg fully legible, no crop needed. Highlighted option is bold+yellow "C. Biliary atresia" = index 2 (0-based: A=0 Hepatitis A, B=1 Hepatitis B, C=2 Biliary atresia, D=3 Galactosaemia, E=4 Primary sclerosing cholangitis). Box printed on same page. 5 options. SHARED OPTION MENU with n:7 (p.1181): identical 5-option ladder in identical order. Discriminating token here: "breast milk jaundice" reassurance, poor feeding/vomiting/bruising, pale stools, liver 4cm below costal margin -> Biliary atresia. Recorded as a pairing per brief SS7, not folded.' }

{ n:7, pr:7, p:1181, key:0,
  stem:'Raj, a previously well-to-do 14-year-old Asian boy, is noted to be jaundiced. He has recently returned to the UK from India, where he was visiting relatives in a rural village. He had a 10-day diarrhea and vomiting illness while in India. Which of the following is the most likely diagnosis of that patient?',
  opts:['Hepatitis A','Hepatitis B','Biliary atresia','Galactosaemia','Primary sclerosing cholangitis'],
  expl:'Hepatitis A is transmitted via the fecal-oral route and is common in areas with poor sanitation. The acute hepatitis symptoms following a GI illness support this diagnosis.',
  note:'Native p1181.jpeg fully legible, no crop needed. Highlighted option is bold+yellow "A. Hepatitis A" = index 0 (0-based: A=0 Hepatitis A, B=1 Hepatitis B, C=2 Biliary atresia, D=3 Galactosaemia, E=4 Primary sclerosing cholangitis). Box printed on same page. 5 options. SHARED OPTION MENU with n:6 (p.1179): identical 5-option ladder in identical order. Discriminating token here: recent travel to rural India, preceding 10-day diarrhoea/vomiting illness (faecal-oral exposure), jaundice -> Hepatitis A. Recorded as a pairing per brief SS7, not folded. Also shares the identical 5-option ladder with n:8 (p.1183); see that entry.' }

{ n:8, pr:8, p:1183, key:3,
  stem:'A 5-week-old southern Asian male infant born in the UK presents to the Paediatric Assessment Unit with vomiting. He has not gained weight since birth. On examination, you find an infant who is jaundiced, lethargic, and hypotonic. Cataracts are present. Which of the following is the most likely diagnosis of that patient?',
  opts:['Hepatitis A','Hepatitis B','Biliary atresia','Galactosaemia','Primary sclerosing cholangitis'],
  expl:'Galactosaemia presents with jaundice, vomiting, failure to thrive, and cataracts. It is due to galactose metabolism disorder and requires immediate dietary management.',
  note:'Native p1183.jpeg fully legible, no crop needed. Highlighted option is bold+yellow "D. Galactosaemia" = index 3 (0-based: A=0 Hepatitis A, B=1 Hepatitis B, C=2 Biliary atresia, D=3 Galactosaemia, E=4 Primary sclerosing cholangitis). Box printed on same page. 5 options. THIRD use of the same 5-option ladder in this section (also n:6 p.1179, n:7 p.1181) -- all three are a shared option menu, recorded as a pairing/grouping per brief SS7, not folded. Discriminating token here: failure to gain weight since birth, jaundice, lethargy, hypotonia, cataracts -> Galactosaemia.' }

{ n:9, pr:9, p:1185, key:1,
  stem:'Lee is a 12-year-old Chinese boy who moved with his parents from China 2 years ago. He presents with episodes of vomiting which is blood-stained. On examination, he is jaundiced, malnourished, and has splenomegaly. Which of the following is the most likely diagnosis of that patient?',
  opts:['Hepatitis A','Hepatitis B','Biliary atresia','Galactosaemia','Primary sclerosing cholangitis'],
  expl:'Chronic hepatitis B can lead to portal hypertension, causing esophageal varices (source of bleeding) and splenomegaly. His origin and presentation suggest chronic infection with complications.',
  note:'Native p1185.jpeg fully legible, no crop needed. Highlighted option is bold+yellow "B. Hepatitis B" = index 1 (0-based: A=0 Hepatitis A, B=1 Hepatitis B, C=2 Biliary atresia, D=3 Galactosaemia, E=4 Primary sclerosing cholangitis). Box printed on same page. 5 options. FOURTH use of the same 5-option ladder in this section (also n:6 p.1179, n:7 p.1181, n:8 p.1183) -- recorded as a pairing/grouping per brief SS7, not folded. Discriminating token here: Chinese origin, blood-stained vomiting, jaundice, malnourished, splenomegaly (variceal bleed on chronic HBV) -> Hepatitis B. Matches s10-chapter-rulings ruling 4 (chronic liver disease complications stay liver-hep, not haem-bleeding) -- context only, not decided here.' }

{ n:10, pr:10, p:1187, key:4,
  stem:'A 4-week-old, full-term, breast-fed girl presents with worsening yellowish discoloration of the skin, first noticed by her parents 15 days ago. On examination, she appears well, with good suckling and normal reflex activity. Her total bilirubin is 12 mg/dL, and direct (conjugated) bilirubin is 9 mg/dL. What is the most likely diagnosis?',
  opts:['Breastfeeding jaundice','Sepsis','Breast milk jaundice','Hepatitis B','Biliary atresia'],
  expl:'',
  note:"Native p1187.jpeg fully legible, numbers read directly off image (total bilirubin 12 mg/dL, direct/conjugated 9 mg/dL -- ~75% conjugated, both figures confirmed on image, no OCR used). Highlighted option is bold+yellow \"e. Biliary atresia\" = index 4 (0-based: a=0 Breastfeeding jaundice, b=1 Sepsis, c=2 Breast milk jaundice, d=3 Hepatitis B, e=4 Biliary atresia). This entry's options are printed lower-case (a./b./c./d./e.), unlike n:1-9's upper-case A./B./etc -- reproduced as printed. No box on p1187 -- per brief SS3/3a, opened next page p1188: it is Q11's UNANSWERED twin (4 options only, no highlight, no box) -- confirms p1187 is a genuine boxless question, not an overflow (expl:''). Q11/p1188 belongs to half B's range (n:12+), not staged here." }

{ n:11, pr:11, p:1189, key:2,
  stem:'Which of the following is true regarding hepatitis A?',
  opts:['It is a DNA virus which is spread by faecal–oral transmission.','It requires urgent treatment','Cure is usually achieved after 4 weeks of infection','Chronic liver disease usually occurs'],
  expl:'Hepatitis A Virus Infection: Hepatitis A virus (HAV) is an RNA virus transmitted via the faecal–oral route. There is no specific treatment, and there is no evidence that bed rest or dietary modifications improve outcomes. Most children experience a mild illness and recover clinically and biochemically within 2 to 4 weeks. Chronic liver disease does not occur following hepatitis A infection.',
  note:'Twin checked at p1188 (unanswered, identical stem/options, no highlight, no box) -- readings agree. Only 4 options printed on this page (A-D), unlike the 5-option questions elsewhere in this half. Highlighted option is bold+yellow "C. Cure is usually achieved after 4 weeks of infection" = index 2 (0-based: A=0 DNA virus/faecal-oral, B=1 requires urgent treatment, C=2 cure after 4 weeks, D=3 chronic liver disease usually occurs). Box printed on same page: red bold header line + four bulleted facts, some words/phrases bold or yellow-highlighted within the box itself (RNA virus, no specific treatment, mild illness, clinically and biochemically, 2 to 4 weeks, chronic liver disease does not occur) -- transcribed as plain running text, no internal styling markup kept, consistent with how earlier boxes in this half were handled. This is the last entry of half A (n:1-11); half B continues from n:12.' }
