/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part2.pdf - SECTION 10: "Liver disorders"
   Verbatim staging record. PDF pages 1146-1210; PDF page = printed page, offset zero.
   Merged from endpoint-p2-s10-liver.part-A.js + endpoint-p2-s10-liver.part-B.js by merge-parts-ep2.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP2_S10_STAGED = [

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
  note:'Native p1168.jpeg fully legible, no crop needed. Highlighted option is bold+yellow "D. Blood glucose" = index 3 (0-based: A=0 Ammonia, B=1 Blood culture, C=2 Blood gas, D=3 Blood glucose, E=4 Coagulation studies). Explanation box printed on the same page, verbatim above. 5 options.' },

{ n:2, pr:2, p:1170, key:1,
  stem:'Reece, a 4-week-old male infant living in the UK, is taken to his family doctor because he is jaundiced. He was born at term and is breastfed. His mother reports that he has always looked yellow and has started to develop bruises. His stools are now pale in color. On examination, he has hepatomegaly. Which of the following investigations would you undertake first?',
  opts:['Faecal elastase','Serum conjugated and unconjugated bilirubin','Sweat test','Ultrasound scan of the liver','Urinalysis'],
  expl:'Differentiating between conjugated and unconjugated bilirubin helps to determine if the jaundice is due to cholestasis, as seen in conditions like biliary atresia, which requires urgent intervention.',
  note:'Twin checked at p1169 (unanswered, identical stem/options, no highlight, no box) -- readings agree. Highlighted option "B. Serum conjugated and unconjugated bilirubin" = index 1 (0-based: A=0 Faecal elastase, B=1 Serum conjugated and unconjugated bilirubin, C=2 Sweat test, D=3 Ultrasound scan of the liver, E=4 Urinalysis). Box printed on the answered page. 5 options.' },

{ n:3, pr:3, p:1172, key:4,
  stem:"Javid is a 5-month-old Asian baby born at term in rural Pakistan. He presents with jaundice. His mother's blood group is AB and rhesus positive. His stool and urine are a normal color. He is breastfed, although he has not been feeding well. His mother is concerned that this could be due to his constipation. When you examine the infant (in the opposite figure), you note that he has dry skin and an umbilical hernia. Which of the following is the most likely diagnosis?",
  opts:['Biliary atresia','Congenital infection','Galactosaemia','Rhesus hemolytic disease of the newborn','Hypothyroidism'],
  fig:'Colour photograph, single infant, close-up of face, inset to the right of the option list. Infant shows a puffy/coarse facial appearance with macroglossia (large protruding tongue), consistent with the printed diagnosis of congenital hypothyroidism. No labels or panels; one image only.',
  figAlt:'Close-up colour photograph of an infant’s face.',
  expl:'Congenital hypothyroidism commonly presents with prolonged jaundice, constipation, umbilical hernia, and hypotonia. Early detection is critical to prevent developmental delay.',
  note:'Native p1172.jpeg legible. Highlighted option is bold+yellow "E. Hypothyroidism" = index 4 (0-based: A=0 Biliary atresia, B=1 Congenital infection, C=2 Galactosaemia, D=3 Rhesus hemolytic disease of the newborn, E=4 Hypothyroidism). Box printed on same page, expl text itself contains a red-highlighted lead-in word ("Congenital hypothyroidism") in the printed box -- transcribed as plain text, no styling markup kept. Per s10-chapter-rulings ruling 1, this vignette has normal stool/urine colour (neonatal fork), stated here for drafting reference only, not decided by this staging pass. 5 options.' },

{ n:4, pr:4, p:1174, key:1, box:1175,
  stem:'Luna, a 32-year-old Cantonese woman, has just given birth to her third child. She arrived in the UK 3 months ago to live with her extended family following the death of her husband. Antenatal screening shows that she is hepatitis B surface antigen (HBsAg) positive and hepatitis B e antigen (HBeAg) negative. The newborn infant looks well and has fed. The postnatal team is keen to send the mother and baby home. Which of the following is the best advice to give concerning immunization of the family?',
  opts:['Hepatitis B vaccination for the baby','Hepatitis B vaccination for the baby and all other children','Hepatitis B vaccination for the baby and mother','Hepatitis B vaccination for the baby with hepatitis B immunoglobulin','No treatment required'],
  expl:'Prevention of hepatitis B virus infection is important. All pregnant women should undergo antenatal screening for hepatitis B surface antigen (HBsAg). Babies born to HBsAg-positive mothers should receive a full course of hepatitis B vaccination, which is given routinely in many countries.',
  note:'Twin checked at p1173 (unanswered, identical stem/options, no highlight, no box) -- readings agree; no straddle observed (chapter-rulings md cited "pp.1173-1175" as the vignette+box span, but the question box itself is whole on p1173/1174, no straddle:true needed). Highlighted option on p1174 is bold+yellow "B. Hepatitis B vaccination for the baby and all other children" = index 1 (0-based: A=0 baby only, B=1 baby+other children, C=2 baby+mother, D=3 baby+HBIG, E=4 no treatment). p1174 prints NO box -- per brief SS3/3a, opened next page: p1175 is a bordered box alone on its own page (small side-box format, reduced font, matches genuine-overflow shape, not a teaching slide) -- box:1175, text captured above verbatim. 5 options.' },

{ n:5, pr:5, p:1177, key:4,
  stem:'Summer, a 12-year-old girl, is seen in the Emergency Department. Her parents report that her school performance has been deteriorating and recently she has become confused and unsteady on her feet. Examination findings of her eyes are shown in the opposite figure. Select the most likely diagnosis:',
  opts:['Glaucoma','Hyperthyroidism','Illicit drug use','Intracranial tumor',"Wilson's disease"],
  fig:'Colour close-up photograph, single eye (iris and pupil filling the frame), inset to the right of the option list. A pale/greyish ring is visible around the periphery of the iris, consistent with the printed diagnosis of Kayser-Fleischer ring in Wilson\'s disease. One image only, no panels or labels.',
  figAlt:'Close-up colour photograph of an eye.',
  expl:"Wilson's disease can present with neuropsychiatric symptoms and Kayser-Fleischer rings in the cornea. It involves copper accumulation and needs early treatment to prevent irreversible damage.",
  note:"Native p1177.jpeg legible. Highlighted option is bold+yellow \"E. Wilson's disease\" = index 4 (0-based: A=0 Glaucoma, B=1 Hyperthyroidism, C=2 Illicit drug use, D=3 Intracranial tumor, E=4 Wilson's disease). Box printed on same page. Per s10-chapter-rulings ruling 7: Wilson's disease is not taught as a liver topic anywhere in the corpus (only appears in the neuro deck's chorea table) -- flagged here as context, drafting pass's problem, not corrected or interpreted by this staging pass. This is the parity-flip page (section runs 1168/1170/1172/1174 even, then flips to 1177 odd). 5 options." },

{ n:6, pr:6, p:1179, key:2,
  stem:"Jason, a 3-week-old boy, is still jaundiced. His mother is reassured that this is likely to be 'breast milk' jaundice as she is fully breastfeeding him. He presents 3 weeks later with poor feeding, vomiting, and bruising on his forehead and limbs. He has pale stools. On examination, the liver is palpable 4 cm below the costal margin. Which of the following is the most likely diagnosis of that patient?",
  opts:['Hepatitis A','Hepatitis B','Biliary atresia','Galactosaemia','Primary sclerosing cholangitis'],
  expl:'Pale stools and hepatomegaly are classic for biliary atresia. Early surgical intervention (Kasai procedure) improves outcomes and should be done ideally before 6 weeks of age.',
  note:'Native p1179.jpeg fully legible, no crop needed. Highlighted option is bold+yellow "C. Biliary atresia" = index 2 (0-based: A=0 Hepatitis A, B=1 Hepatitis B, C=2 Biliary atresia, D=3 Galactosaemia, E=4 Primary sclerosing cholangitis). Box printed on same page. 5 options. SHARED OPTION MENU with n:7 (p.1181): identical 5-option ladder in identical order. Discriminating token here: "breast milk jaundice" reassurance, poor feeding/vomiting/bruising, pale stools, liver 4cm below costal margin -> Biliary atresia. Recorded as a pairing per brief SS7, not folded.' },

{ n:7, pr:7, p:1181, key:0,
  stem:'Raj, a previously well-to-do 14-year-old Asian boy, is noted to be jaundiced. He has recently returned to the UK from India, where he was visiting relatives in a rural village. He had a 10-day diarrhea and vomiting illness while in India. Which of the following is the most likely diagnosis of that patient?',
  opts:['Hepatitis A','Hepatitis B','Biliary atresia','Galactosaemia','Primary sclerosing cholangitis'],
  expl:'Hepatitis A is transmitted via the fecal-oral route and is common in areas with poor sanitation. The acute hepatitis symptoms following a GI illness support this diagnosis.',
  note:'Native p1181.jpeg fully legible, no crop needed. Highlighted option is bold+yellow "A. Hepatitis A" = index 0 (0-based: A=0 Hepatitis A, B=1 Hepatitis B, C=2 Biliary atresia, D=3 Galactosaemia, E=4 Primary sclerosing cholangitis). Box printed on same page. 5 options. SHARED OPTION MENU with n:6 (p.1179): identical 5-option ladder in identical order. Discriminating token here: recent travel to rural India, preceding 10-day diarrhoea/vomiting illness (faecal-oral exposure), jaundice -> Hepatitis A. Recorded as a pairing per brief SS7, not folded. Also shares the identical 5-option ladder with n:8 (p.1183); see that entry.' },

{ n:8, pr:8, p:1183, key:3,
  stem:'A 5-week-old southern Asian male infant born in the UK presents to the Paediatric Assessment Unit with vomiting. He has not gained weight since birth. On examination, you find an infant who is jaundiced, lethargic, and hypotonic. Cataracts are present. Which of the following is the most likely diagnosis of that patient?',
  opts:['Hepatitis A','Hepatitis B','Biliary atresia','Galactosaemia','Primary sclerosing cholangitis'],
  expl:'Galactosaemia presents with jaundice, vomiting, failure to thrive, and cataracts. It is due to galactose metabolism disorder and requires immediate dietary management.',
  note:'Native p1183.jpeg fully legible, no crop needed. Highlighted option is bold+yellow "D. Galactosaemia" = index 3 (0-based: A=0 Hepatitis A, B=1 Hepatitis B, C=2 Biliary atresia, D=3 Galactosaemia, E=4 Primary sclerosing cholangitis). Box printed on same page. 5 options. THIRD use of the same 5-option ladder in this section (also n:6 p.1179, n:7 p.1181) -- all three are a shared option menu, recorded as a pairing/grouping per brief SS7, not folded. Discriminating token here: failure to gain weight since birth, jaundice, lethargy, hypotonia, cataracts -> Galactosaemia.' },

{ n:9, pr:9, p:1185, key:1,
  stem:'Lee is a 12-year-old Chinese boy who moved with his parents from China 2 years ago. He presents with episodes of vomiting which is blood-stained. On examination, he is jaundiced, malnourished, and has splenomegaly. Which of the following is the most likely diagnosis of that patient?',
  opts:['Hepatitis A','Hepatitis B','Biliary atresia','Galactosaemia','Primary sclerosing cholangitis'],
  expl:'Chronic hepatitis B can lead to portal hypertension, causing esophageal varices (source of bleeding) and splenomegaly. His origin and presentation suggest chronic infection with complications.',
  note:'Native p1185.jpeg fully legible, no crop needed. Highlighted option is bold+yellow "B. Hepatitis B" = index 1 (0-based: A=0 Hepatitis A, B=1 Hepatitis B, C=2 Biliary atresia, D=3 Galactosaemia, E=4 Primary sclerosing cholangitis). Box printed on same page. 5 options. FOURTH use of the same 5-option ladder in this section (also n:6 p.1179, n:7 p.1181, n:8 p.1183) -- recorded as a pairing/grouping per brief SS7, not folded. Discriminating token here: Chinese origin, blood-stained vomiting, jaundice, malnourished, splenomegaly (variceal bleed on chronic HBV) -> Hepatitis B. Matches s10-chapter-rulings ruling 4 (chronic liver disease complications stay liver-hep, not haem-bleeding) -- context only, not decided here.' },

{ n:10, pr:10, p:1187, key:4,
  stem:'A 4-week-old, full-term, breast-fed girl presents with worsening yellowish discoloration of the skin, first noticed by her parents 15 days ago. On examination, she appears well, with good suckling and normal reflex activity. Her total bilirubin is 12 mg/dL, and direct (conjugated) bilirubin is 9 mg/dL. What is the most likely diagnosis?',
  opts:['Breastfeeding jaundice','Sepsis','Breast milk jaundice','Hepatitis B','Biliary atresia'],
  expl:'',
  note:"Native p1187.jpeg fully legible, numbers read directly off image (total bilirubin 12 mg/dL, direct/conjugated 9 mg/dL -- ~75% conjugated, both figures confirmed on image, no OCR used). Highlighted option is bold+yellow \"e. Biliary atresia\" = index 4 (0-based: a=0 Breastfeeding jaundice, b=1 Sepsis, c=2 Breast milk jaundice, d=3 Hepatitis B, e=4 Biliary atresia). This entry's options are printed lower-case (a./b./c./d./e.), unlike n:1-9's upper-case A./B./etc -- reproduced as printed. No box on p1187 -- per brief SS3/3a, opened next page p1188: it is Q11's UNANSWERED twin (4 options only, no highlight, no box) -- confirms p1187 is a genuine boxless question, not an overflow (expl:''). Q11/p1188 belongs to half B's range (n:12+), not staged here." },

{ n:11, pr:11, p:1189, key:2,
  stem:'Which of the following is true regarding hepatitis A?',
  opts:['It is a DNA virus which is spread by faecal–oral transmission.','It requires urgent treatment','Cure is usually achieved after 4 weeks of infection','Chronic liver disease usually occurs'],
  expl:'Hepatitis A Virus Infection: Hepatitis A virus (HAV) is an RNA virus transmitted via the faecal–oral route. There is no specific treatment, and there is no evidence that bed rest or dietary modifications improve outcomes. Most children experience a mild illness and recover clinically and biochemically within 2 to 4 weeks. Chronic liver disease does not occur following hepatitis A infection.',
  note:'Twin checked at p1188 (unanswered, identical stem/options, no highlight, no box) -- readings agree. Only 4 options printed on this page (A-D), unlike the 5-option questions elsewhere in this half. Highlighted option is bold+yellow "C. Cure is usually achieved after 4 weeks of infection" = index 2 (0-based: A=0 DNA virus/faecal-oral, B=1 requires urgent treatment, C=2 cure after 4 weeks, D=3 chronic liver disease usually occurs). Box printed on same page: red bold header line + four bulleted facts, some words/phrases bold or yellow-highlighted within the box itself (RNA virus, no specific treatment, mild illness, clinically and biochemically, 2 to 4 weeks, chronic liver disease does not occur) -- transcribed as plain running text, no internal styling markup kept, consistent with how earlier boxes in this half were handled. This is the last entry of half A (n:1-11); half B continues from n:12.' },

/* Peds endpoint PART 2, section 10, "Liver disorders", HALF B.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (NEVER modified/moved).
   Section pp.1146-1210, 20 questions total, section-global n:1-20. Half A staged n:1-11
   (pp.1168,1170,1172,1174,1177,1179,1181,1183,1185,1187,1189) -- not touched here. This half
   stages n:12-20 (answered pages 1191,1193,1195,1197,1199,1201,1203,1206,1209), continuing
   directly from part-A's last entry (n:11, p:1189) read off disk.
   Images read from native JPEG cache (800x450 ceiling); hires PNG used only where the native
   was not legible enough. OCR index NOT opened during staging -- search index only, per brief.
   Renders were already present; nothing re-rendered by this half except any 300dpi crops noted
   individually below.

   Page-structure walk (answered pages, printed number pr vs section-global n):
     n:12 p.1191  pr:12  (no box printed; next page 1192 checked, confirmed unanswered twin of
                          Q13, not an overflow box -- per brief 3a test)
     n:13 p.1193  pr:13  (no box printed; next page 1194 checked, confirmed unanswered twin of
                          Q14, not an overflow box)
     n:14 p.1195  pr:14  (box printed inline)
     n:15 p.1197  pr:15  (box printed inline)
     n:16 p.1199  pr:16  (no box printed; next page 1200 checked, confirmed unanswered twin of
                          Q17, not an overflow box)
     n:17 p.1201  pr:17  (box printed inline) -- CONFIRMS the mis-shelving flagged in
                          endpoint-p2-s10-chapter-rulings.md ruling 6: this page is nephrotic
                          syndrome, not liver disease. pr matches n, no numbering disagreement.
     n:18 p.1203  pr:18  (no box printed on p.1203 itself; next page 1204 IS an overflow box --
                          bordered, no stem/options/key, itemised facts rebutting every option --
                          recorded box:1204)
     n:19 p.1206  pr:19  (PARITY FLIP: even page, per brief -- confirmed via twin p.1205. No box
                          on p.1206 itself; p.1207 IS an overflow box, same shape -- box:1207)
     n:20 p.1209  pr:20  (PARITY FLIP back to odd, per brief -- confirmed via twin p.1208. Box
                          printed inline, no overflow. This is the section's LAST question --
                          p.1210 rendered as the one-past boundary check and is a full-page
                          Arabic closing supplication, not a question or a new section banner,
                          matching section 3's own closing-slide shape.)

   Measured zero: no page in n:12-20 (answered or twin) prints any figure/image -- every one of
   the 18 pages read (9 answered + 9 twins) plus the two overflow-box pages and the boundary page
   is a plain text slide. fig/figAlt omitted from every entry accordingly.

   Every entry checked with tools/bank-harness/check-part-ep.js after append.
*/

{ n:12, pr:12, p:1191, key:4,
  stem:'You see parents in clinic who express concern about their daughter whom they believe may have been exposed to the Hepatitis A virus, having recently spent time with a grandparent who has subsequently been diagnosed with the infection. What is the typical incubation period of hepatitis A?',
  opts:['The incubation period is 1–7 days','The incubation period is 7–14 days','The incubation period is 7–21 days','The incubation period is 14–21 days','The incubation period is 14–28 days'],
  expl:'',
  note:'Native p1191.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "e. The incubation period is 14-28 days" = index 4 (0-based: a=0 1-7d, b=1 7-14d, c=2 7-21d, d=3 14-21d, e=4 14-28d). No explanation box printed on this page. Per brief 3a, checked next page p1192: it is the plain unanswered twin of Q13 (no yellow, no box) -- confirms p1191 simply prints no box, not an overflow case. expl left empty per schema.' },

{ n:13, pr:13, p:1193, key:0,
  stem:'Angi is a 6-week-old infant who was noted to be jaundiced at 24 hours of age. At that time, her hemoglobin (Hb) was 15 g/dL. At 2 months of age, she presents with an upper respiratory tract infection, and a repeat full blood count shows Hb of 10.2 g/dL. She is otherwise well, feeding normally, and growing appropriately. What is the next step in management?',
  opts:['No action required','Refer for hemolysis workup','Start iron supplementation','Perform G6PD screening'],
  expl:'',
  note:'Native p1193.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "a. No action required" = index 0 (0-based: a=0 No action required, b=1 Refer for hemolysis workup, c=2 Start iron supplementation, d=3 Perform G6PD screening). No explanation box printed. Per brief 3a, checked next page p1194: it is the plain unanswered twin of Q14 (no yellow, no box) -- confirms p1193 simply prints no box. expl left empty per schema. Per chapter-rulings ruling 2 this pairs with Q14 (n:14) on the jaundice-vs-anaemia distinction -- both concern the same clinical scenario shape but this one is haematology (falling Hb, no bilirubin mentioned) while Q14 stays neonatal jaundice (bilirubin rising on phototherapy); recorded per brief 7, not folded.' },

{ n:14, pr:14, p:1195, key:0,
  stem:"Kamal is a full-term baby boy, born 16 hours ago. His mother is blood group O Rhesus positive. The baby is breastfeeding well, but the grandmother has noticed he looks jaundiced. On examination, the baby is clinically well. His bilirubin was 9 mg/dL at 10 hours of age, and he was started on intensive phototherapy. Six hours later, his bilirubin is 14.5 mg/dL. Kamal's blood group is identified as group A Rhesus positive. What is the most likely cause of the baby's jaundice?",
  opts:['ABO incompatibility','Biliary atresia','Congenital hypothyroidism','Rhesus hemolytic disease'],
  expl:'ABO incompatibility commonly occurs when the mother is blood group O and the infant is A or B. It can cause early-onset hemolytic jaundice requiring phototherapy. The rapid rise in bilirubin and early onset support this diagnosis.',
  note:'Native p1195.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "a. ABO incompatibility" = index 0 (0-based: a=0 ABO incompatibility, b=1 Biliary atresia, c=2 Congenital hypothyroidism, d=3 Rhesus hemolytic disease). Explanation box printed to the right of the options, verbatim above. Per chapter-rulings ruling 2, pairs with Q13 (n:13) -- both jaundice/haemolysis scenarios, discriminating token here is bilirubin rising on phototherapy with cause asked ("neonatal"), vs Q13\'s falling Hb weeks later with no bilirubin figure at all ("haematology"); recorded, not folded.' },

{ n:15, pr:15, p:1197, key:1,
  stem:'Which one of the following is the most important cause of jaundice presenting in the first 24 hours of life?',
  opts:['Prematurity','Hemolysis','Breastfeeding','Physiological jaundice'],
  expl:'Jaundice within the first 24 hours of life is always pathological. Hemolysis due to blood group incompatibility (e.g., ABO or Rh) is the most common serious cause. Physiological jaundice typically appears after 24 hours.',
  note:'Native p1197.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "b. Hemolysis" = index 1 (0-based: a=0 Prematurity, b=1 Hemolysis, c=2 Breastfeeding, d=3 Physiological jaundice). Explanation box printed below the options, verbatim above. Per chapter-rulings, same shape as Q14 -- stays neonatal.' },

{ n:16, pr:16, p:1199, key:1,
  stem:'Which one of the following symptoms of liver disease is not present in all cases of acute hepatitis?',
  opts:['Jaundice','Splenomegaly','Anorexia','Fatigue'],
  expl:'',
  note:'Native p1199.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "b. Splenomegaly" = index 1 (0-based: a=0 Jaundice, b=1 Splenomegaly, c=2 Anorexia, d=3 Fatigue). No explanation box printed. Per brief 3a, checked next page p1200: it is the unanswered printing of Q17 (nephrotic-syndrome vignette, no yellow, no box) -- confirms p1199 simply prints no box, not an overflow case.' },

{ n:17, pr:17, p:1201, key:2,
  stem:'A 5-year-old child presents with marked periorbital puffiness and pitting edema of the lower limbs for a week. Two days prior to admission, the edema spread to the abdominal wall and scrotum. History and clinical examination are otherwise unremarkable. What is the most important complication of this child’s condition?',
  opts:['Hypertensive encephalopathy','Heart failure','Spontaneous bacterial peritonitis','Malnutrition'],
  expl:'This child likely has nephrotic syndrome, as suggested by generalized edema. A serious and common complication of nephrotic syndrome is spontaneous bacterial peritonitis (SBP), due to loss of immunoglobulins and complement in the urine.',
  note:'CONFIRMS the chapter-rulings agent\'s finding exactly: this page is NOT a liver question -- it is nephrotic syndrome (periorbital puffiness, pitting oedema spreading to abdominal wall/scrotum, SBP as "most important complication"), matching the course material\'s nephrotic-syndrome content almost verbatim per endpoint-p2-s10-chapter-rulings.md ruling 6 (ren-13). Printed number pr:17 matches section-global n:17, no numbering disagreement. Native p1201.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "c. Spontaneous bacterial peritonitis" = index 2 (0-based: a=0 Hypertensive encephalopathy, b=1 Heart failure, c=2 Spontaneous bacterial peritonitis, d=3 Malnutrition). Explanation box printed to the right of/below option d, verbatim above; box text itself names "nephrotic syndrome" explicitly. Twin at p.1200 checked (identical stem/options, unanswered) -- confirms stem reading. This is a book mis-shelving (a renal question placed inside the liver section), not a transcription error -- staged verbatim as printed, per brief instruction to transcribe exactly regardless of chapter mismatch.' },

{ n:18, pr:18, p:1203, key:1, box:1204,
  stem:'Which of the following statements about hepatitis B is the most factually correct?',
  opts:['Anti-HBs antibodies suggest that a chronic carrier state has developed after acute infection','Hepatitis B is a DNA virus','Interferon-γ is a recognized treatment for the chronic carrier state','Transmission of hepatitis B is faeco-oral','Treatment of acute hepatitis B infection is by passive immunization'],
  expl:'Hepatitis B virus (HBV) is a DNA virus of the Hepadnaviridae family.\n•Anti-HBs indicates immunity, not chronic carriage.\n•Interferon-α, not γ, is used in chronic hepatitis B.\n•Transmission is via blood and body fluids, not faeco-oral.\n•Passive immunization (HBIG) is used for post-exposure prophylaxis, not treatment.',
  note:'Native p1203.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "b. Hepatitis B is a DNA virus" = index 1 (0-based: a=0 Anti-HBs..., b=1 Hepatitis B is a DNA virus, c=2 Interferon-y..., d=3 Transmission is faeco-oral, e=4 Treatment...passive immunization). p1203 itself printed NO box -- per brief 3a, checked next page p1204: it is a bordered box, no stem, no options, no highlighted key, itemised bullet-point facts matching every option in this question point-for-point (DNA virus, anti-HBs=immunity, interferon-alpha not gamma, blood/body-fluid transmission, HBIG=post-exposure not treatment). This is an OVERFLOW explanation box, not a teaching slide (format: small bordered box with itemised facts directly rebutting each distractor, not a full-page body-text slide) -- recorded as box:1204, text captured verbatim above (bullet symbol "•" and en-dash reproduced as printed; line breaks reproduced with \\n). Greek letters α/γ in the box read directly off the image, not OCR.' },

{ n:19, pr:19, p:1206, key:2, box:1207,
  stem:'Which of the following statements concerning hepatitis A is the most factually correct?',
  opts:['Chronic liver disease commonly follows acute infection','Diagnosis of acute infection is by stool culture','Hepatitis A is an RNA virus','Passive immunization produces lifelong immunity to infection','Transmission is most commonly by exposure to contaminated blood at delivery'],
  expl:'•Hepatitis A virus (HAV) is a non-enveloped RNA virus transmitted by the faeco-oral route, especially via contaminated food and water.\n•Diagnosis is by serology (anti-HAV IgM), not stool culture.\n•Chronic liver disease does not occur with HAV.\n•Passive immunization offers temporary protection, not lifelong immunity.\n•Bloodborne transmission is not typical for HAV.',
  note:'PARITY FLIP confirmed on the image per brief: n:19 answered page is p.1206, an EVEN page (previous answered pages in this half were all odd). Unanswered twin at p.1205 checked first (identical stem/options, no highlight), confirming p.1206 is the answered printing. Native p1206.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "c. Hepatitis A is an RNA virus" = index 2 (0-based: a=0 Chronic liver disease..., b=1 Diagnosis...stool culture, c=2 Hepatitis A is an RNA virus, d=3 Passive immunization...lifelong immunity, e=4 Transmission...contaminated blood at delivery). p1206 itself printed NO box -- per brief 3a, checked next page p1207: bordered box, no stem, no options, no highlighted key, itemised bullet facts rebutting every option point-for-point (RNA virus, faeco-oral not blood, serology not stool culture, no chronic disease, temporary not lifelong immunity) -- an OVERFLOW box, not a teaching slide. Recorded as box:1207, text captured verbatim above (bullet symbol reproduced, line breaks as \\n).' },

{ n:20, pr:20, p:1209, key:1,
  stem:'Which of the following is true about acute viral hepatitis?',
  opts:["Abdominal pain, nausea, and vomiting aren't common signs",'Jaundice is not evident in all cases','All cases present with dark urine and clay-colored stools','All patients become icteric and febrile'],
  expl:'•Jaundice may not be seen in all patients with acute viral hepatitis, particularly in children, who may have anicteric hepatitis.\n•Gastrointestinal symptoms like nausea and vomiting are common.\n•Dark urine and pale stools may occur but are not universal.\n•Some cases are mild or even subclinical, especially in younger children.',
  note:'PARITY FLIP confirmed on the image per brief: n:20 answered page is p.1209, back to ODD (after n:19\'s even p.1206). Unanswered twin at p.1208 checked first (identical stem/options, no highlight), confirming p.1209 is the answered printing. Native p1209.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "b. Jaundice is not evident in all cases" = index 1 (0-based: a=0 Abdominal pain/nausea/vomiting aren\'t common, b=1 Jaundice not evident in all cases, c=2 dark urine/clay stools in all cases, d=3 all patients icteric and febrile). Explanation box printed inline below the options on the same page, verbatim above (bullet symbol reproduced, line breaks as \\n) -- no overflow, this is the final question of the section. BOUNDARY PROOF: rendered one page past the range, p.1210 -- it is a full-page Arabic closing supplication (dua), coloured text, no stem/options/question content, matching the same closing-slide shape section 3 used at its own end (per brief 3a). This confirms p.1209/n:20 is genuinely the section\'s last question and section 10 ends here at 20, matching the brief\'s stated total.' }

];
