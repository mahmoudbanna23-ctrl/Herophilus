/* Peds endpoint PART 2, section 13 "Model Final Exam 2", quarter C.
   n41..n60, answered pages:
     n41-n49 EVEN 1514,1516,...,1530 (p = 1432 + 2n) -- tail of the even parity run
     PARITY FLIP across p.1531
     n50-n60 ODD  1533,1535,...,1553 (p = 1433 + 2n) -- start of the odd parity run
   OCR NOT consulted for transcription (search index only, per brief S4).
   Twin (unanswered) page read wherever the answered page's text was not certain on first read.
   p.1531 opened and adjudicated below before n49/n50 were staged.
   Header extended after every entry; see note fields for per-entry verification method.

   Page-by-page walk (printed number pr vs section-global n):
   n41 p1514 pr41
   n42 p1516 pr42
   n43 p1518 pr43
   n44 p1520 pr44
   n45 p1522 pr45
   n46 p1524 pr46
   n47 p1526 pr47
   n48 p1528 pr48
   n49 p1530 pr49 (box overflow at p.1531)
   n50 p1533 pr50 -- PARITY FLIP: first odd-page answered page after the flip
   n51 p1535 pr51
   n52 p1537 pr52
   n53 p1539 pr53
   n54 p1541 pr55 -- DISAGREEMENT: answered page prints "55", its own twin (p.1540) prints "54"
   n55 p1543 pr55 -- printed number "55" reused for a second, unrelated question (both twin and answer agree here)
   n56 p1545 pr56 -- back in sync with n
   n57 p1547 pr57
   n58 p1549 pr58
   n59 p1551 pr59
   n60 p1553 pr60 (last entry of this quarter)
   -- boundary check: p.1554 (one past range) is n61 pr61, an unanswered twin ("A baby is born with a
      disorder of sexual differentiation. Congenital adrenal hyperplasia is suspected...") -- the
      section continues normally past n60, no section break here.
*/

{ n:41, pr:41, p:1514, key:3,
  stem:'If the age of 18 months is the "red-flag age" of walking unsupported, what is the percentage of normal children who achieve that skill by age of 18 months?',
  opts:['27%','57%','77%','97.5%'],
  expl:'About 97.5% of normal children can walk unsupported by 18 months; delayed walking beyond this is a red flag.',
  note:'Twin at p.1513 (unanswered) matches verbatim. Highlighted option is D "97.5%" = index 3.' }

{ n:42, pr:42, p:1516, key:2,
  stem:'A 3-month-old baby is admitted with a diagnosis of bronchiolitis. Her condition has further worsened, and she developed audible grunting sounds. What is the best pathophysiologic explanation for grunting in this baby?',
  opts:['Oxygen consumption is decreased with grunting which helps resolve hypoxemia','During grunting lung volume increases as more air moves through the conducting airways','Grunting increases end expiratory pressure and promotes gas exchange','During grunting the diameter of the bronchi and bronchioles is increased'],
  expl:'Grunting increases end-expiratory pressure, helping keep alveoli open and improving gas exchange.',
  note:'Twin at p.1515 (unanswered) matches verbatim. Highlighted option is C "Grunting increases end expiratory pressure..." = index 2. Reprint map flags this page as matching pedep-mf3-37 in part 1 -- recorded, not folded.' }

{ n:43, pr:43, p:1518, key:2,
  stem:'A 4-year-old boy has delayed speech, prefers playing alone, gets upset with changes, and avoids eye contact.\nWhat is the most likely diagnosis?',
  opts:['Deaf mutism','Normal development','Autism','Speech delay'],
  expl:'The child shows delayed speech, social avoidance, repetitive behaviors, and distress with changes, which are classic features of autism. Deafness or simple speech delay would not explain all social and behavioral signs.',
  note:'Twin at p.1517 (unanswered) matches verbatim. Highlighted option is C "Autism" = index 2.' }

{ n:44, pr:44, p:1520, key:1,
  stem:'A term infant delivered at home is brought on day 4 with oozing from the umbilical stump. The mother is unsure if the newborn received vitamin K.\nWhich of the following blood results is most likely to be abnormal?',
  opts:['Platelets','Prothrombin time','APTT','Hemoglobin','Antiplatelet antibodies'],
  expl:'Vitamin K is needed for clotting factors II, VII, IX, and X. Deficiency prolongs prothrombin time (PT) while platelets and APTT may remain normal.',
  note:'Twin at p.1519 (unanswered) matches verbatim. Highlighted option is B "Prothrombin time" = index 1.' }

{ n:45, pr:45, p:1522, key:1,
  stem:'A 6-year-old boy presents with periorbital oedema and frothy urine. Urinalysis shows 4+ protein and no blood. What is the most likely diagnosis?',
  opts:['Glomerulonephritis','Minimal change disease','IgA nephropathy','Post-streptococcal nephritis','Alport syndrome'],
  expl:'Minimal change disease is the most common cause of nephrotic syndrome in children and typically presents with heavy proteinuria and oedema.',
  note:'Twin at p.1521 (unanswered) matches verbatim. Highlighted option is B "Minimal change disease" = index 1.' }

{ n:46, pr:46, p:1524, key:2,
  stem:'A 4-year-old boy is referred to his GP by his teacher at nursery. She has noticed that he has delayed speech and has only a handful of words. He struggles with imaginative play and usually plays alone. He becomes upset if there is a change to the daily routine. In the surgery, he does not make eye contact. There are no dysmorphic features. What is the most likely diagnosis?',
  opts:['Selective mutism','Normal development','Autism','Speech delay','Fragile X'],
  expl:'Autism is a pervasive developmental disorder characterized by speech delay and poor social communication skills. It is part of a spectrum of disorders including Asperger’s syndrome. Autistic children struggle to interpret non-verbal communications and to form relationships with peers. Autistic behaviours are associated with a number of syndromes including fragile X, untreated phenylketonuria, and Williams syndrome.',
  note:'Twin at p.1523 (unanswered) matches verbatim. Highlighted option is C "Autism" = index 2. Reprint map flags this page as matching House pedhd-devp-18 -- recorded, not folded.' }

{ n:47, pr:47, p:1526, key:2,
  stem:'Which of the following is the most common solid tumor in children?',
  opts:['Wilm’s tumor','Retinoblastoma','Brain tumors','Kaposi sarcoma','Lymphomas'],
  expl:'Brain tumors are the most common solid tumour in children and are the leading cause of childhood cancer deaths in the UK. In contrast to adults, brain tumours in children are almost always primary rather than metastatic, and 60% are infratentorial (located below the tentorium cerebelli).',
  note:'Twin at p.1525 (unanswered) matches verbatim. Highlighted option is C "Brain tumors" = index 2.' }

{ n:48, pr:48, p:1528, key:3,
  stem:'All of the following are among the major manifestations of Jones criteria for diagnosis of rheumatic fever except?',
  opts:['Chorea','Migratory arthritis','Carditis','Maculopapular rash','Subcutaneous nodules'],
  expl:'Jones criteria for diagnosis of rheumatic fever include:\n• Major manifestations: Carditis, migratory arthritis, Sydenham chorea, erythema marginatum, and subcutaneous nodules.\n• Minor manifestations: Fever, polyarthralgia, raised acute-phase reactants (e.g., ESR).',
  note:'Twin at p.1527 (unanswered) matches verbatim. Highlighted option is D "Maculopapular rash" = index 3. Box prints two coloured round bullets, transcribed as plain bullets.' }

{ n:49, pr:49, p:1530, key:2, box:1531,
  stem:'A 10-year-old boy presents to the emergency department with bluish discoloration of the skin and manifestations of heart failure. History reveals that he had a congenital cardiac defect after birth (large VSD), but his father refused to do the corrective surgery. Which of the following is the most likely underlying cause for the current findings of this child?',
  opts:['Rheumatic fever','PDA','Shunt reversal (Eisenmenger syndrome)','Transient (reversible) episode due to the pre-existing anomaly'],
  expl:'If high pulmonary blood flow due to a large left-to-right shunt or common mixing is not treated at an early stage, the pulmonary arteries become thick-walled and the resistance to flow increases. Eventually, the shunt reverses (right-to-left), causing cyanosis known as Eisenmenger syndrome.',
  note:'Twin at p.1529 (unanswered) matches verbatim; p.1530 itself prints no box. Highlighted option is C "Shunt reversal (Eisenmenger syndrome)" = index 2. p.1531 opened per SS3a/reprint-map: it is a bordered box, pale-green fill, same visual format as every other expl box in this section, and its text directly extends n49s answer (Eisenmenger mechanism) -- not a full-page teaching slide (contrast the section-4 p.309 counter-example, which is body-text size and off-topic). Adjudicated as n49s overflowed explanation box, staged as box:1531. p.1532 (n50s unanswered twin) confirms the run resumes normally after the flip.' }

{ n:50, pr:50, p:1533, key:0,
  stem:'Which of the following organisms is likely to cause pneumonia in a newborn?',
  opts:['Group B streptococcus','Escherichia coli','Listeria monocytogenes','Streptococcus pneumoniae'],
  expl:'In newborns, causative organisms of pneumonia are typically acquired from the maternal genital tract. Group B streptococcus is the most common, along with Gram-negative organisms such as E. coli.',
  note:'First answered page after the parity flip. Twin at p.1532 (unanswered) matches verbatim. Highlighted option is A "Group B streptococcus" = index 0.' }

{ n:51, pr:51, p:1535, key:1,
  stem:'Which of the following is of evidence-based benefit in the treatment of acute bronchiolitis?',
  opts:['Nebulized hypertonic saline','Continuous positive airway pressure (CPAP)','Corticosteroids','Antibiotics'],
  expl:'',
  note:'Twin at p.1534 (unanswered) matches verbatim. Highlighted option is B "Continuous positive airway pressure (CPAP)" = index 1. Page prints no box; per brief SS3a the next page (p.1536) was opened and is n52s unanswered twin (pr52), not an overflow box -- alternation resumes normally.' }

{ n:52, pr:52, p:1537, key:2,
  stem:'Ishmael, a 15-year-old boy from Pakistan, is seen in the outpatient department. He presents with otitis media and a history of recurrent chest infections needing antibiotics. He has a productive cough. Bowel movements are normal. On examination, he is afebrile, pink, with normal heart sounds. Clubbing is noted. Auscultation reveals scattered crepitations. Sweat test is negative. What is the most likely diagnosis?',
  opts:['Cystic fibrosis','Infective endocarditis','Primary ciliary dyskinesia','Crohn’s disease','Tetralogy of Fallot'],
  expl:'Clubbing and recurrent infections suggest bronchiectasis. A negative sweat test rules out cystic fibrosis, suggesting primary ciliary dyskinesia as the likely cause.',
  note:'Twin at p.1536 (unanswered) matches verbatim. Highlighted option is C "Primary ciliary dyskinesia" = index 2.' }

{ n:53, pr:53, p:1539, key:1,
  stem:'Which of the following is true regarding Guillain-Barré syndrome?',
  opts:['It typically presents immediately after an upper respiratory tract infection','Sensory symptoms are less striking than the weakness','CT of the spinal cord (or brain and spinal cord) is the most useful acute investigation','CSF protein is markedly reduced'],
  expl:'Guillain-Barré syndrome typically follows a URTI or gastroenteritis by 1–3 weeks. Weakness is more prominent than sensory symptoms. MRI is preferred for ruling out cord pathology. CSF shows raised protein with normal WBC (albuminocytologic dissociation).',
  note:'Twin at p.1538 (unanswered) matches verbatim. Highlighted option is B "Sensory symptoms are less striking than the weakness" = index 1.' }

{ n:54, pr:55, p:1541, key:2,
  stem:'Ahmed, a 10-year-old boy of Egyptian descent, becomes lethargic with dark urine after taking medication. Examination is normal. What is the likely offending drug?',
  opts:['Rifampicin','Iron sulphate','Sulfa drug (Sulphonamide)','Penicillin'],
  expl:'G6PD deficiency can cause hemolysis after exposure to oxidant drugs such as sulphonamides.',
  note:'⚠️ pr/n disagreement: the answered page (p.1541) prints "55." as its question number, but its own twin at p.1540 (identical stem and options) prints "54." -- the book itself is inconsistent between the two printings of this one question. Staged n:54 per this quarters section-global sequence (p=1433+2n), pr:55 as printed on the answered page actually staged from. Stem and options verbatim-identical on both pages. Highlighted option is C "Sulfa drug (Sulphonamide)" = index 2.' }

{ n:55, pr:55, p:1543, key:4,
  stem:'Which of the following can cause hematuria in children?',
  opts:['Urinary tract infection','Favism','Acute post-streptococcal glomerulonephritis','ITP','A & C together'],
  expl:'Both UTIs and post-streptococcal glomerulonephritis are recognized causes of hematuria.',
  note:'Twin at p.1542 (unanswered) matches verbatim; both agree "55." here. Highlighted option is E "A & C together" = index 4. ⚠️ The printed number "55" is now used for TWO different questions in this run (this one and n54s Ahmed/G6PD question at p.1541) -- a duplicate-numbering defect like the one documented in part 1 section 1 (69/81 printed twice). Recorded, not corrected; n stays the section-global sequential index.' }

{ n:56, pr:56, p:1545, key:2,
  stem:'Hemoglobin electrophoresis is the diagnostic tool of choice in which of the following haematological disorders?',
  opts:['Hereditary spherocytosis','Iron deficiency anemia','Sickle cell anemia','G6PD deficiency'],
  expl:'Hemoglobin electrophoresis is essential in diagnosing hemoglobinopathies like sickle cell disease and thalassemia.',
  note:'Twin at p.1544 (unanswered) matches verbatim; pr and n back in sync at 56. Highlighted option is C "Sickle cell anemia" = index 2.' }

{ n:57, pr:57, p:1547, key:2,
  stem:'Shlomo, a 9-day-old Jewish boy, presents with persistent bleeding after circumcision. PT is mildly prolonged, APTT is >120s. What is the likely diagnosis?',
  opts:['β-Thalassaemia major','Liver disease','Haemophilia A','von Willebrand disease','Immune thrombocytopenic purpura'],
  expl:'Severe prolonged APTT with normal platelets and mild PT prolongation suggests haemophilia A. vWD typically has mild APTT prolongation.',
  note:'Twin at p.1546 (unanswered) matches verbatim. Highlighted option is C "Haemophilia A" = index 2. Numeral ">120s" legible clearly on native image, no crop needed.' }

{ n:58, pr:58, p:1549, key:3,
  stem:'What is the underlying pathophysiology in HSP?',
  opts:['Autoreactive T lymphocytes','Anti-basement membrane antibodies','IgM-mediated nephropathy','Vasculitis','Complement abnormality'],
  expl:'HSP is an IgA-mediated small vessel vasculitis.',
  note:'Twin at p.1548 (unanswered) matches verbatim. Highlighted option is D "Vasculitis" = index 3.' }

{ n:59, pr:59, p:1551, key:1,
  stem:'Which laboratory finding supports the diagnosis of disseminated intravascular coagulation (DIC)?',
  opts:['Thrombocytosis','Elevated D-dimer','Elevated antithrombin, protein C and protein S','Normal PT','Normal APTT'],
  expl:'DIC causes widespread clot formation and breakdown, which raises D-dimer levels. Thrombocytopenia, prolonged PT/APTT, and low clotting factors are also typical, unlike thrombocytosis or normal coagulation tests.',
  note:'Twin at p.1550 (unanswered) matches verbatim. Highlighted option is B "Elevated D-dimer" = index 1.' }

{ n:60, pr:60, p:1553, key:0,
  stem:'Which of the following laboratory findings is not consistent with disseminated intravascular coagulation (DIC)?',
  opts:['Thrombocytosis','Elevated D-dimer','Prolonged PT','Reduced fibrinogen'],
  expl:'DIC usually causes low platelets due to consumption, not high platelets. Elevated D-dimer, prolonged PT, and low fibrinogen are characteristic, whereas raised fibrinogen may occur early but is generally consumed in ongoing DIC.',
  note:'Last entry of this quarter (n60, my range ends here). Twin at p.1552 (unanswered) matches verbatim. Highlighted option is A "Thrombocytosis" = index 0. Boundary check: p.1554 (one page past my range) is n61 pr61, an unanswered twin opening "A baby is born with a disorder of sexual differentiation. Congenital adrenal hyperplasia is suspected..." -- confirms the section continues normally past n60 with no break.' }
