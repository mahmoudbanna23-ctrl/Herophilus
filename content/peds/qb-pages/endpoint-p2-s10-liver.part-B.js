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
  note:'Native p1191.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "e. The incubation period is 14-28 days" = index 4 (0-based: a=0 1-7d, b=1 7-14d, c=2 7-21d, d=3 14-21d, e=4 14-28d). No explanation box printed on this page. Per brief 3a, checked next page p1192: it is the plain unanswered twin of Q13 (no yellow, no box) -- confirms p1191 simply prints no box, not an overflow case. expl left empty per schema.' }

{ n:13, pr:13, p:1193, key:0,
  stem:'Angi is a 6-week-old infant who was noted to be jaundiced at 24 hours of age. At that time, her hemoglobin (Hb) was 15 g/dL. At 2 months of age, she presents with an upper respiratory tract infection, and a repeat full blood count shows Hb of 10.2 g/dL. She is otherwise well, feeding normally, and growing appropriately. What is the next step in management?',
  opts:['No action required','Refer for hemolysis workup','Start iron supplementation','Perform G6PD screening'],
  expl:'',
  note:'Native p1193.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "a. No action required" = index 0 (0-based: a=0 No action required, b=1 Refer for hemolysis workup, c=2 Start iron supplementation, d=3 Perform G6PD screening). No explanation box printed. Per brief 3a, checked next page p1194: it is the plain unanswered twin of Q14 (no yellow, no box) -- confirms p1193 simply prints no box. expl left empty per schema. Per chapter-rulings ruling 2 this pairs with Q14 (n:14) on the jaundice-vs-anaemia distinction -- both concern the same clinical scenario shape but this one is haematology (falling Hb, no bilirubin mentioned) while Q14 stays neonatal jaundice (bilirubin rising on phototherapy); recorded per brief 7, not folded.' }

{ n:14, pr:14, p:1195, key:0,
  stem:"Kamal is a full-term baby boy, born 16 hours ago. His mother is blood group O Rhesus positive. The baby is breastfeeding well, but the grandmother has noticed he looks jaundiced. On examination, the baby is clinically well. His bilirubin was 9 mg/dL at 10 hours of age, and he was started on intensive phototherapy. Six hours later, his bilirubin is 14.5 mg/dL. Kamal's blood group is identified as group A Rhesus positive. What is the most likely cause of the baby's jaundice?",
  opts:['ABO incompatibility','Biliary atresia','Congenital hypothyroidism','Rhesus hemolytic disease'],
  expl:'ABO incompatibility commonly occurs when the mother is blood group O and the infant is A or B. It can cause early-onset hemolytic jaundice requiring phototherapy. The rapid rise in bilirubin and early onset support this diagnosis.',
  note:'Native p1195.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "a. ABO incompatibility" = index 0 (0-based: a=0 ABO incompatibility, b=1 Biliary atresia, c=2 Congenital hypothyroidism, d=3 Rhesus hemolytic disease). Explanation box printed to the right of the options, verbatim above. Per chapter-rulings ruling 2, pairs with Q13 (n:13) -- both jaundice/haemolysis scenarios, discriminating token here is bilirubin rising on phototherapy with cause asked ("neonatal"), vs Q13\'s falling Hb weeks later with no bilirubin figure at all ("haematology"); recorded, not folded.' }

{ n:15, pr:15, p:1197, key:1,
  stem:'Which one of the following is the most important cause of jaundice presenting in the first 24 hours of life?',
  opts:['Prematurity','Hemolysis','Breastfeeding','Physiological jaundice'],
  expl:'Jaundice within the first 24 hours of life is always pathological. Hemolysis due to blood group incompatibility (e.g., ABO or Rh) is the most common serious cause. Physiological jaundice typically appears after 24 hours.',
  note:'Native p1197.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "b. Hemolysis" = index 1 (0-based: a=0 Prematurity, b=1 Hemolysis, c=2 Breastfeeding, d=3 Physiological jaundice). Explanation box printed below the options, verbatim above. Per chapter-rulings, same shape as Q14 -- stays neonatal.' }

{ n:16, pr:16, p:1199, key:1,
  stem:'Which one of the following symptoms of liver disease is not present in all cases of acute hepatitis?',
  opts:['Jaundice','Splenomegaly','Anorexia','Fatigue'],
  expl:'',
  note:'Native p1199.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "b. Splenomegaly" = index 1 (0-based: a=0 Jaundice, b=1 Splenomegaly, c=2 Anorexia, d=3 Fatigue). No explanation box printed. Per brief 3a, checked next page p1200: it is the unanswered printing of Q17 (nephrotic-syndrome vignette, no yellow, no box) -- confirms p1199 simply prints no box, not an overflow case.' }

{ n:17, pr:17, p:1201, key:2,
  stem:'A 5-year-old child presents with marked periorbital puffiness and pitting edema of the lower limbs for a week. Two days prior to admission, the edema spread to the abdominal wall and scrotum. History and clinical examination are otherwise unremarkable. What is the most important complication of this child’s condition?',
  opts:['Hypertensive encephalopathy','Heart failure','Spontaneous bacterial peritonitis','Malnutrition'],
  expl:'This child likely has nephrotic syndrome, as suggested by generalized edema. A serious and common complication of nephrotic syndrome is spontaneous bacterial peritonitis (SBP), due to loss of immunoglobulins and complement in the urine.',
  note:'CONFIRMS the chapter-rulings agent\'s finding exactly: this page is NOT a liver question -- it is nephrotic syndrome (periorbital puffiness, pitting oedema spreading to abdominal wall/scrotum, SBP as "most important complication"), matching the course material\'s nephrotic-syndrome content almost verbatim per endpoint-p2-s10-chapter-rulings.md ruling 6 (ren-13). Printed number pr:17 matches section-global n:17, no numbering disagreement. Native p1201.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "c. Spontaneous bacterial peritonitis" = index 2 (0-based: a=0 Hypertensive encephalopathy, b=1 Heart failure, c=2 Spontaneous bacterial peritonitis, d=3 Malnutrition). Explanation box printed to the right of/below option d, verbatim above; box text itself names "nephrotic syndrome" explicitly. Twin at p.1200 checked (identical stem/options, unanswered) -- confirms stem reading. This is a book mis-shelving (a renal question placed inside the liver section), not a transcription error -- staged verbatim as printed, per brief instruction to transcribe exactly regardless of chapter mismatch.' }

{ n:18, pr:18, p:1203, key:1, box:1204,
  stem:'Which of the following statements about hepatitis B is the most factually correct?',
  opts:['Anti-HBs antibodies suggest that a chronic carrier state has developed after acute infection','Hepatitis B is a DNA virus','Interferon-γ is a recognized treatment for the chronic carrier state','Transmission of hepatitis B is faeco-oral','Treatment of acute hepatitis B infection is by passive immunization'],
  expl:'Hepatitis B virus (HBV) is a DNA virus of the Hepadnaviridae family.\n•Anti-HBs indicates immunity, not chronic carriage.\n•Interferon-α, not γ, is used in chronic hepatitis B.\n•Transmission is via blood and body fluids, not faeco-oral.\n•Passive immunization (HBIG) is used for post-exposure prophylaxis, not treatment.',
  note:'Native p1203.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "b. Hepatitis B is a DNA virus" = index 1 (0-based: a=0 Anti-HBs..., b=1 Hepatitis B is a DNA virus, c=2 Interferon-y..., d=3 Transmission is faeco-oral, e=4 Treatment...passive immunization). p1203 itself printed NO box -- per brief 3a, checked next page p1204: it is a bordered box, no stem, no options, no highlighted key, itemised bullet-point facts matching every option in this question point-for-point (DNA virus, anti-HBs=immunity, interferon-alpha not gamma, blood/body-fluid transmission, HBIG=post-exposure not treatment). This is an OVERFLOW explanation box, not a teaching slide (format: small bordered box with itemised facts directly rebutting each distractor, not a full-page body-text slide) -- recorded as box:1204, text captured verbatim above (bullet symbol "•" and en-dash reproduced as printed; line breaks reproduced with \\n). Greek letters α/γ in the box read directly off the image, not OCR.' }

{ n:19, pr:19, p:1206, key:2, box:1207,
  stem:'Which of the following statements concerning hepatitis A is the most factually correct?',
  opts:['Chronic liver disease commonly follows acute infection','Diagnosis of acute infection is by stool culture','Hepatitis A is an RNA virus','Passive immunization produces lifelong immunity to infection','Transmission is most commonly by exposure to contaminated blood at delivery'],
  expl:'•Hepatitis A virus (HAV) is a non-enveloped RNA virus transmitted by the faeco-oral route, especially via contaminated food and water.\n•Diagnosis is by serology (anti-HAV IgM), not stool culture.\n•Chronic liver disease does not occur with HAV.\n•Passive immunization offers temporary protection, not lifelong immunity.\n•Bloodborne transmission is not typical for HAV.',
  note:'PARITY FLIP confirmed on the image per brief: n:19 answered page is p.1206, an EVEN page (previous answered pages in this half were all odd). Unanswered twin at p.1205 checked first (identical stem/options, no highlight), confirming p.1206 is the answered printing. Native p1206.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "c. Hepatitis A is an RNA virus" = index 2 (0-based: a=0 Chronic liver disease..., b=1 Diagnosis...stool culture, c=2 Hepatitis A is an RNA virus, d=3 Passive immunization...lifelong immunity, e=4 Transmission...contaminated blood at delivery). p1206 itself printed NO box -- per brief 3a, checked next page p1207: bordered box, no stem, no options, no highlighted key, itemised bullet facts rebutting every option point-for-point (RNA virus, faeco-oral not blood, serology not stool culture, no chronic disease, temporary not lifelong immunity) -- an OVERFLOW box, not a teaching slide. Recorded as box:1207, text captured verbatim above (bullet symbol reproduced, line breaks as \\n).' }

{ n:20, pr:20, p:1209, key:1,
  stem:'Which of the following is true about acute viral hepatitis?',
  opts:["Abdominal pain, nausea, and vomiting aren't common signs",'Jaundice is not evident in all cases','All cases present with dark urine and clay-colored stools','All patients become icteric and febrile'],
  expl:'•Jaundice may not be seen in all patients with acute viral hepatitis, particularly in children, who may have anicteric hepatitis.\n•Gastrointestinal symptoms like nausea and vomiting are common.\n•Dark urine and pale stools may occur but are not universal.\n•Some cases are mild or even subclinical, especially in younger children.',
  note:'PARITY FLIP confirmed on the image per brief: n:20 answered page is p.1209, back to ODD (after n:19\'s even p.1206). Unanswered twin at p.1208 checked first (identical stem/options, no highlight), confirming p.1209 is the answered printing. Native p1209.jpeg fully legible, no crop needed. Highlighted option is bold+underlined+yellow "b. Jaundice is not evident in all cases" = index 1 (0-based: a=0 Abdominal pain/nausea/vomiting aren\'t common, b=1 Jaundice not evident in all cases, c=2 dark urine/clay stools in all cases, d=3 all patients icteric and febrile). Explanation box printed inline below the options on the same page, verbatim above (bullet symbol reproduced, line breaks as \\n) -- no overflow, this is the final question of the section. BOUNDARY PROOF: rendered one page past the range, p.1210 -- it is a full-page Arabic closing supplication (dua), coloured text, no stem/options/question content, matching the same closing-slide shape section 3 used at its own end (per brief 3a). This confirms p.1209/n:20 is genuinely the section\'s last question and section 10 ends here at 20, matching the brief\'s stated total.' }
