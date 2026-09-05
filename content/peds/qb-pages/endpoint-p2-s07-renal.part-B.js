/* endpoint-p2-s07-renal.part-B.js
   Peds ENDPOINT PART 2, section 7 "Kidney & Urinary Tract Disorders", part B.
   Staged from Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (READ-ONLY, never modified).
   Range owned by this part: answered pages 848, 850, 852 ... 874 (14 pages), n:15 through n:28.
   n is SECTION-GLOBAL and continues from part A (which was not yet on disk when this part
   started -- see header note below). Images read from a parallel chat's already-extracted
   scratch cache (native JPEG 800x450, one per PDF page) rather than a fresh render, since that
   cache already exists on disk and is the ceiling resolution per the brief (Section 2).
   OCR (content\peds\qb-pages\ocr\ep2\) was NOT opened during this pass -- search index only.

   HEADER NOTE -- disk vs prompt: at the start of this pass, neither
   endpoint-p2-s07-renal.part-A.js nor .part-B.js existed on disk yet (checked by directory
   listing). The task prompt explicitly assigns this part n:15-28, so that numbering is used
   as given rather than derived from a preceding part's last entry (brief Sec.5 fallback did
   not apply because there was nothing to read). p.848 prints "15." as its question number,
   which matches n:15 -- consistent with the prompt's assignment. Flagged for the merge step:
   confirm part A actually ends at n:14 before merging.

   Question-number walk (printed number "pr", page by page):
     n:15 pr:15 p:848
   (extended entry by entry below)
*/

{ n:15, pr:15, p:848, key:3,
  stem:'Max, a 12-year-old boy with cerebral palsy and epilepsy, presents to the Emergency Department with severe right-sided colicky abdominal pain. He has had one similar episode previously that resolved spontaneously. Today, the pain is so severe that he requires morphine. On examination, his abdomen is generally tender. Temperature is 37°C, heart rate is 160 beats/min, and blood pressure is 120/80 mmHg. A urine dipstick reveals haematuria. Which of the following investigations would you perform next?',
  opts:['DMSA scan','Urinary electrolytes','Urine microscopy and culture','Ultrasound of the kidneys and urinary tract'],
  expl:'Severe colicky pain and hematuria point towards a renal stone or obstruction. Ultrasound is the initial investigation of choice to assess for structural or obstructive causes.',
  note:'p.848 answered, highlighted key D boxed. Twin p.847 checked, stem/opts byte-identical. No figure. Printed number "15." matches n:15.' }

{ n:16, pr:16, p:850, key:2,
  stem:'Rosa, a 2-year-old girl, presents to her general practitioner with a 24-hour history of vomiting and fever. Her temperature is 38°C, and she has generalized abdominal tenderness. A dipstick reveals leucocytes and nitrites. Blood pressure is 90/50 mmHg.\nWhich of the following investigations would you perform next?',
  opts:['DMSA scan','Urinary electrolytes','Urine microscopy and culture','Ultrasound of the kidneys and urinary tract','Plasma creatinine and electrolytes'],
  expl:'A child with fever, vomiting, and positive dipstick for nitrites and leukocytes needs confirmation of UTI with microscopy and culture to guide appropriate antibiotic therapy.',
  note:'p.850 answered, highlighted key C boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "16." matches n:16.' }

{ n:17, pr:17, p:852, key:3,
  stem:'Usmaan is an 18-hour-old newborn baby boy undergoing a routine discharge baby check. His notes mention bilateral hydronephrosis and a distended bladder on antenatal ultrasound. His mother is breastfeeding but reports he has not yet passed urine. Blood pressure is normal for a neonate.\nWhich of the following investigations would you perform next?',
  opts:['DMSA scan','Urinary electrolytes','Urine microscopy and culture','Ultrasound of the kidneys and urinary tract','Plasma creatinine and electrolytes'],
  expl:'In a newborn with antenatal hydronephrosis and urinary retention, urgent postnatal renal ultrasound is needed to assess for posterior urethral valves or other obstructive uropathies.',
  note:'p.852 answered, highlighted key D boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "17." matches n:17.' }

{ n:18, pr:18, p:854, key:4,
  stem:'John is a 9-year-old boy with a history of multiple urinary tract infections. An ultrasound shows dysplastic kidneys. At a routine paediatric follow-up, his mother reports he is not growing as well as his siblings. His blood pressure is 130/90 mmHg.\nWhich of the following investigations would you perform next?',
  opts:['DMSA scan','Urinary electrolytes','Urine microscopy and culture','Ultrasound of the kidneys and urinary tract','Plasma creatinine and electrolytes'],
  expl:'Hypertension, poor growth, and dysplastic kidneys suggest chronic kidney disease. Measuring creatinine and electrolytes is crucial to assess renal function and guide further management.',
  note:'p.854 answered, highlighted key E boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "18." matches n:18. SHARED MENU: n:15-18 all reuse the same 4-5 option ladder (DMSA scan / urinary electrolytes / urine microscopy+culture / USS KUB / plasma creatinine+electrolytes) with different discriminating clinical token each time -- n15 renal colic/haematuria->USS, n16 UTI symptoms->microscopy+culture, n17 antenatal hydronephrosis+neonatal retention->USS, n18 dysplastic kidneys+HTN+poor growth (CKD picture)->creatinine+electrolytes. Recorded as a pairing per brief Sec.7, not folded.' }

{ n:19, pr:19, p:856, key:4,
  stem:'A 4-year-old boy presents with a 24-hour history of abdominal and joint pain. He is afebrile. Examination reveals diffuse abdominal tenderness without masses, lymphadenopathy, or hepatosplenomegaly. A widespread purpuric rash is noted over the legs and buttocks. Urine dipstick shows 2+ blood. Routine blood tests are normal.What is the most likely diagnosis?',
  opts:['Idiopathic thrombocytopenic purpura','Meningococcal sepsis','Acute lymphoblastic leukaemia (ALL)','Vitamin C deficiency (scurvy)','Henoch–Schönlein purpura'],
  expl:'This child presents with the classic triad of HSP: palpable purpura, abdominal pain, and joint involvement. The hematuria on dipstick is due to renal involvement common in HSP.',
  note:'p.856 answered, highlighted key E boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "19." matches n:19. "normal.What" printed with no space, transcribed verbatim.' }

{ n:20, pr:20, p:858, key:0,
  stem:'A 9-year-old girl presents with hematuria. She is usually fit and well but was treated for tonsillitis last week. On examination, she has peripheral edema and hypertension. No abdominal mass is found. Urine dipstick is positive for blood and protein.\nWhat is the likely diagnosis?',
  opts:['Post-streptococcal glomerulonephritis','Hemolytic uraemic syndrome','Systemic lupus erythematosus (SLE)','Henoch–Schönlein purpura','Minimal change nephropathy'],
  expl:'Recent streptococcal infection, hematuria, hypertension, and edema point to post-streptococcal glomerulonephritis, a common cause of nephritic syndrome in school-aged children.',
  note:'p.858 answered, highlighted key A boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "20." matches n:20.' }

{ n:21, pr:21, p:860, key:3,
  stem:'A 7-year-old girl presents with edema of the face and legs and abdominal pain. Urine dipstick shows 4+ protein. A diagnosis of nephrotic syndrome is made, and she is started on prednisolone.\nWhat would be the likely finding on biopsy and light microscopy?',
  opts:['Focal-segmental glomerulosclerosis','Mesangiocapillary glomerulonephritis','Crescentic glomerulonephritis','Minimal change disease','Membranous glomerulonephritis'],
  expl:'In children with nephrotic syndrome, the most common histological finding is minimal change disease, which appears normal under light microscopy and responds well to steroids.',
  note:'p.860 answered, highlighted key D boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "21." matches n:21.' }

{ n:22, pr:22, p:862, key:2,
  stem:'An 11-year-old girl presents with 6 days of fever, abdominal pain, and bloody diarrhea. She becomes increasingly irritable and lethargic. Blood tests show: Hb 7.5 g/dL, WCC 15 × 10^9/L, platelets 40 × 10^9/L, urea 9.0 mmol/L, creatinine 200 µmol/L, and red blood cell fragments on blood film.\nWhat is the most likely diagnosis?',
  opts:['Ulcerative colitis','Glucose-6-phosphate dehydrogenase deficiency','Hemolytic uraemic syndrome','Dehydration','Viral gastroenteritis'],
  expl:'This child has the classic triad of HUS: anemia, thrombocytopenia, and renal impairment following bloody diarrhea. The presence of RBC fragments on blood film supports microangiopathic hemolytic anemia.',
  note:'p.862 answered, highlighted key C boxed, 5 options. Escalated to 300dpi crop (p-0862.jpg) to check the exponent glyphs on both WCC and platelet counts -- confirmed genuine typeset superscript "10⁹" both times (not a caret, not flat), transcribed per convention as "10^9". No figure.' }

{ n:23, pr:23, p:864, key:3,
  stem:'A 3-month-old baby girl presents with a fever of 38.6°C, crying, and vomiting. A urine dipstick shows white cells and protein.\nWhich organism is most likely responsible for her urinary tract infection?',
  opts:['Enterococcus spp.','Pseudomonas','Proteus','Escherichia coli','Klebsiella'],
  expl:'E. coli is the most common cause of urinary tract infections (UTIs) in infants and children due to its ability to adhere to the uroepithelium. The presence of fever, vomiting, and white cells in the urine strongly supports a diagnosis of UTI in this 3-month-old.',
  note:'p.864 answered, highlighted key D boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "23." matches n:23.' }

{ n:24, pr:24, p:866, key:4,
  stem:'A 2-month-old girl is brought to the clinic after an admission for a urinary tract infection. When discussing the case with her mother, which of the following statements regarding UTI is true?',
  opts:['It is more common in girls under the age of 3 months','Can be diagnosed with >10^5 white blood cells/mL urine','Presents with specific urinary features in young children','Is most commonly due to enterococci','The risk is increased by constipation'],
  expl:'Constipation can contribute to UTIs in young children by causing bladder outlet obstruction or incomplete voiding, leading to urinary stasis. Although UTIs are more common in boys under 3 months, in general, constipation is a well-established modifiable risk factor.',
  note:'p.866 answered, highlighted key E boxed, 5 options. Escalated to 300dpi crop (p-0866.jpg) to check the option B exponent -- confirmed genuine typeset superscript "10⁵", transcribed as "10^5" per convention. No figure.' }

{ n:25, pr:25, p:868, key:2,
  stem:'A 6-year-old boy is diagnosed with nephrotic syndrome and admitted to start steroid therapy and be monitored for complications.\nWhich of the following complications is he unlikely to be at risk of?',
  opts:['Bacterial infection','Hypovolaemia','Reduced glucose tolerance','Pleural effusion','Pulmonary embolus'],
  expl:'Nephrotic syndrome is associated with complications such as hypovolemia, infections, thromboembolism, and effusions due to massive protein loss. Reduced glucose tolerance is not typically a complication unless high-dose corticosteroids are used for prolonged periods.',
  note:'p.868 answered, highlighted key C boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "25." matches n:25.' }

{ n:26, pr:26, p:870, key:2,
  stem:'A newborn baby girl is born after a pregnancy complicated by oligohydramnios and bilateral talipes. She requires ventilation for pulmonary hypoplasia and fails to pass urine in the first 24 hours of life.\nWhich of the following is the likely cause?',
  opts:['Nephrotic syndrome','Posterior urethral valves','Bilateral renal agenesis','Autosomal dominant polycystic kidney disease','Duplex kidney'],
  expl:'Bilateral renal agenesis leads to severe oligohydramnios in utero, resulting in Potter sequence features like pulmonary hypoplasia and limb deformities (e.g., talipes). The absence of kidneys also explains the failure to pass urine postnatally.',
  note:'p.870 answered, highlighted key C boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "26." matches n:26. Baby is female with posterior urethral valves listed as a distractor (PUV is a male-only condition) -- printed as-is, not remarked on further.' }

{ n:27, pr:27, p:872, key:1,
  stem:'A 4-years old male child developed an upper respiratory tract infection that was followed in a 2-weeks by generalized edema. His blood pressure is normal, urinalysis reveal 2 to 5 RBC/HPF and 4+ protein. His serum urea is 9 mg/dl (normal), creatinine 0.6 mg/dl (normal), ASOT 200 (normal) and C3 is normal.\nThe most likely diagnosis would be:',
  opts:['Post streptococcal glomerulonephritis','Nephrotic syndrome','Membranoproliferative glomerulonephritis','Pyelonephritis','Hemolytic uremic syndrome'],
  expl:'The child has generalized edema, heavy proteinuria (4+), and normal renal function with normal complement, which is typical of nephrotic syndrome. Post-streptococcal GN usually shows low C3 and hypertension, which are absent here.',
  note:'p.872 answered, highlighted key b boxed (this page prints options lowercase a-e, unlike the A-E style of the rest of this range). Twin p.871 checked, stem/opts byte-identical including all numeric values (urea 9 mg/dl, creatinine 0.6 mg/dl, ASOT 200) -- no exponents on this page. No figure. Printed "27." matches n:27.' }

{ n:28, pr:28, p:874, key:1,
  stem:'A 7-year-old girl is seen with a 2-day history of Lever and abdominal pain. Her mother has noted that she is going to the toilet to pass urine more often than usual. On examination she is now afebrile, has normal heart rate and respiratory rate and has no abdominal tenderness. What is the most likely diagnosis?',
  opts:['Appendicitis','Cystitis','Diabetic ketoacidosis','Glomerulonephritis','Pyelonephritis'],
  expl:'The child has urinary frequency and abdominal pain with no fever or systemic signs, suggesting a lower urinary tract infection (cystitis). Pyelonephritis would present with fever and systemic illness.',
  note:'p.874 answered, highlighted key b boxed (lowercase a-e style again, like p.872). Legible clearly at native res, twin not opened. No figure. Printed "28." matches n:28. "Lever" printed for "Fever", transcribed verbatim. This is the last entry of my assigned range (n:15-28, pages 848-874).' }
