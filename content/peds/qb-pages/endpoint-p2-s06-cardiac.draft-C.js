/* Section 6 "Cardiac disorders", half C, n:29-42 (pp.686-713). bank:'endpoint', module:'pediatrics'. */
{
  id: 'pedep2-car-29',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'Nada, a 5-month-old female infant, has a fever and runny nose for 2 days. On examination, her temperature is 38.3°C, her tongue is pink, and no chest retractions are noted. Her pulse is 160 beats/min, heart sounds are normal, but a soft systolic murmur is heard at the left sternal edge. Pulses are normal. Which of the following is the most likely explanation for the murmur?',
  options: [
    'Normal "innocent murmur"',
    'Ventricular septal defect',
    'Patent ductus arteriosus',
    'Aortic stenosis'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> The baby is otherwise healthy with only a soft systolic murmur during fever, which is typical of an innocent murmur that becomes more audible during illness.\n\n---\n\nEvery feature Nada shows fits the innocent-murmur checklist: she is asymptomatic apart from a self-limited viral illness, the murmur is soft, it is systolic only, and it sits at the left sternal edge. None of the disqualifying findings are present — no added sound, no thrill, no radiation, and the pulses are described as normal. A febrile tachycardia raises stroke volume and turns a normally inaudible flow murmur audible; that is exactly the mechanism the printed box points to, and the correct response to it is reassurance with re-examination once the fever settles, not further imaging.\n\nEach distractor fails a different part of that signature. A ventricular septal defect murmur is pansystolic and harsh at the lower left sternal edge, often with a palpable thrill, and a haemodynamically significant defect declares itself with feeding difficulty, sweating or faltering growth — none of which Nada has, and the murmur described here is soft rather than harsh. A patent ductus arteriosus produces a continuous "machinery" murmur running through the second heart sound, heard loudest below the left clavicle, together with a bounding pulse from the wide pulse pressure; Nada\'s murmur is systolic only and her pulses are normal, so a duct does not fit. Aortic stenosis gives an ejection systolic murmur at the upper right sternal edge that radiates to the neck and carotids, typically with an ejection click and a slow-rising, small-volume pulse; the murmur here is at the left sternal edge with no radiation and normal pulses, which rules it out.\n\nThis is the second of three times this book prints the Nada vignette; here the option ladder is only four items long and is the one printing that renames the correct answer itself to Normal "innocent murmur" rather than plain Normal.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise the "S" features of an innocent murmur (asymptomatic, soft, systolic, left sternal edge) and distinguish it from VSD, PDA and aortic stenosis by site, timing and associated signs.',
  source: 'Pediatrics endpoint part2.pdf p.686'
},
{
  id: 'pedep2-car-30',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'Which of the following statements about ventricular septal defect (VSDs) is most factually correct?',
  options: [
    'VSDs are most commonly located in the muscular part of the ventricular septum',
    'VSDs will cause an audible flow murmur across the defect, usually audible from birth',
    'Infective endocarditis is a complication seen in approx. 10% of all children with VSDs',
    'VSDs are associated with higher oxygen content in the blood of the right ventricle than the right atrium',
    'VSDs are usually associated with right ventricular volume overload'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> The left-to-right shunt increases oxygen saturation in the RV compared to the RA, making this the most accurate statement.\n\n---\n\nThe oximetry run for a large left-to-right VSD is a step-up at the level of the ventricle: right atrial saturation sits around 75%, then jumps to roughly 85% in both the right ventricle and the pulmonary artery, because that is exactly where the shunted, oxygenated blood enters. A higher oxygen content in the right ventricle than the right atrium is therefore the direct fingerprint of a VSD, and it is what makes this option the correct one.\n\nThe others each get one fact wrong. The commonest site for a VSD is the perimembranous septum, at roughly 70-80% of cases, not the muscular septum, which accounts for a smaller share and is notable mainly for the "Swiss cheese" pattern seen when there are multiple muscular defects. A murmur "audible from birth" is not the rule: a small, restrictive VSD is often an incidental finding rather than a birth-day murmur, and a large, unrestrictive defect is often clinically silent in the immediate newborn period, only declaring itself with a murmur and symptoms once pulmonary vascular resistance falls over the first two to eight weeks of life. Infective endocarditis is a genuine long-term risk of an unrepaired VSD, but the endpoint file does not attach a numeric rate to it; a specific figure of "approximately 10%" is not taken from the course material. Finally, the volume overload from a left-to-right VSD shunt falls on the left heart, not the right: blood recirculates from the left ventricle through the defect into the pulmonary circulation and back to the left atrium and left ventricle, so it is the LA and LV that dilate under the extra volume, while the right ventricle instead faces a pressure burden from rising pulmonary vascular resistance as the shunt persists.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify the haemodynamic and anatomical facts that correctly describe a VSD (oximetry step-up, site distribution, timing of the murmur, chamber overload) and reject plausible-sounding but incorrect statements.',
  source: 'Pediatrics endpoint part2.pdf p.688 (the explanation box is printed alone on p.689)'
},
{
  id: 'pedep2-car-31',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'Which of the following statements about patent ductus arteriosus is most factually correct?',
  options: [
    'The incidence of persistent ductus arteriosus is increased in males compared with females',
    'Cardiac catheter color placement is the treatment of choice for symptomatic infants with persistent ductus arteriosus post birth',
    'PDA can be treated with prostaglandins',
    'PDA always closes spontaneously in term infants',
    'The incidence of PDA is increased in preterm infants and those with perinatal hypoxia and/or distress'
  ],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> PDA is especially common in preterm babies and those with perinatal asphyxia. In term infants, it usually closes spontaneously.\n\n---\n\nDuctal patency runs inversely with gestational age: the preterm duct has a less oxygen-responsive muscle layer and is more sensitive to the vasodilating effects of prostaglandin E2 and nitric oxide, which is why prematurity is the single strongest risk factor for a persisting duct, and perinatal hypoxia adds to that risk by keeping the ductal tone relaxed. That is the fact the printed box is pointing at.\n\nEach distractor misstates something specific. PDA is more common in females than males in the general paediatric literature, not the reverse, so "increased in males" reverses the known sex distribution. Transcatheter coil or device closure is used electively in infants and children once a duct has failed to close on its own, not as the treatment of choice for a symptomatic neonate immediately after birth, where a preterm duct is closed pharmacologically first. Prostaglandins do the opposite of treating a PDA — they are what keeps the fetal duct open in utero and are given intravenously to keep a duct open in duct-dependent congenital lesions; the drug used to close a PDA is indomethacin, a prostaglandin-synthesis inhibitor, or ibuprofen. Finally, "always closes spontaneously in term infants" overstates a true tendency into an absolute: about 55% of full-term newborns close their duct spontaneously within the first 60 hours, which leaves a substantial minority that does not.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify the correct epidemiology of PDA (prematurity and perinatal hypoxia as risk factors) and reject statements that invert its sex distribution, confuse prostaglandins with their inhibitors, or overstate spontaneous closure.',
  source: 'Pediatrics endpoint part2.pdf p.691'
},
{
  id: 'pedep2-car-32',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'A 2-month-old infant presents with poor feeding, sweating during feeding, and poor weight gain. Vital signs reveal a respiratory rate of 67/min, pulse of 165/min, and normal values of blood pressure in the upper and lower extremities. The cardiac examination reveals a graded pansystolic murmur heard over left parasternal line. What is the first step investigation you would order?',
  options: [
    'Plain X ray chest and heart',
    'ECG',
    'Blood culture',
    'Cardiac catheterization',
    'Echocardiography'
  ],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> First-line and most definitive investigation for congenital heart disease with murmur is echocardiography, as it directly visualizes cardiac structure and flow.\n\n---\n\nThis infant\'s picture — sweating and poor feeding at two to eight weeks of age, tachypnoea, tachycardia, faltering growth and a pansystolic murmur at the left sternal edge — is the textbook presentation of a moderate-to-large VSD moving into heart failure as pulmonary vascular resistance falls after birth. Any murmur loud or structural enough to sit alongside symptoms like these fails the innocent-murmur checklist outright, and once a murmur is disqualified on clinical grounds the next step is to look at the heart directly: echocardiography is the single test that confirms the anatomical defect, sizes it, and shows the shunt and chamber overload in one non-invasive study, which is why it is the correct first investigation here.\n\nA chest X-ray and an ECG are reasonable supporting tests — cardiomegaly and plethora on the film, or ventricular hypertrophy on the trace — but neither is diagnostic of the lesion itself, so ordering either first would still leave the anatomy unconfirmed. Blood culture has no place here: nothing in the vignette suggests infection, and this presentation is a heart-failure picture, not a septic one. Cardiac catheterisation is invasive and carries its own risks; it is reserved for cases where echocardiography leaves a haemodynamic question unanswered or where an intervention is planned, never as the first test ordered.\n\nThis is the book\'s fuller printing of a question it prints twice; the second copy asks the same vignette with the same five options and the same answer, but describes the murmur as a grade 4 pan-systolic murmur rather than the "graded" murmur worded here.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise a symptomatic left-to-right shunt in infancy and identify echocardiography as the first investigation once a murmur is clinically disqualified from being innocent.',
  source: 'Pediatrics endpoint part2.pdf p.693 (reprinted at p.775)'
},
{
  id: 'pedep2-car-33',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'During regular checkup of an 8y old patient you heard soft ejection systolic murmur of grade 2 with a fixed and widely split second heart sound at upper left sternal border that does not change during respiration, the patient is otherwise active and healthy. The most likely heart lesion is:',
  options: [
    'VSD',
    'pulmonary stenosis',
    'ASD',
    'fallot tetralogy',
    'aortic stenosis'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> A fixed wide split of S2 with a soft ejection systolic murmur is the classic finding for atrial septal defect.\n\n---\n\nThe two clues here point together at one lesion. The murmur in ASD is not generated by flow through the defect itself but by the extra flow crossing the pulmonary valve, so it is ejection systolic and heard at the upper left sternal edge (the pulmonary area) rather than pansystolic — matching this child\'s soft grade 2 murmur exactly. The fixed, wide splitting of S2 that does not vary with respiration is the ASD signature: right ventricular stroke volume stays elevated throughout the respiratory cycle because of the atrial-level shunt, so the usual respiratory variation in splitting is abolished. A well, active, otherwise healthy 8-year-old also fits ASD\'s typical course, which is often silent for years before recurrent chest infections or an incidental murmur bring it to light.\n\nEach distractor breaks on the second sound. A VSD murmur is pansystolic at the lower left sternal edge with a normal, not split, P2. Pulmonary stenosis gives an ejection systolic murmur in a similar location but with an ejection click and a soft, delayed — not fixed and widely split — P2. Aortic stenosis is ejection systolic at the upper right sternal edge, radiating to the carotids, with an ejection click and a soft A2, not a split pulmonary component at all. Tetralogy of Fallot presents with cyanosis and a single loud S2 (the pulmonary component is soft or absent because of pulmonary stenosis), which does not match either the murmur site or the well, acyanotic child described here.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify ASD from the combination of an ejection systolic murmur at the pulmonary area and a fixed, wide splitting of S2, and distinguish it from VSD, pulmonary stenosis, aortic stenosis and tetralogy of Fallot by second-sound behaviour.',
  source: 'Pediatrics endpoint part2.pdf p.695'
},
{
  id: 'pedep2-car-34',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'Which of the following statements about innocent (physiologic) heart murmurs is NOT true?',
  options: [
    'They are harsh murmurs',
    'They are usually soft',
    'They vary with position or respiration',
    'They occur in an otherwise healthy child'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Innocent murmurs are soft, vary with posture/respiration, and occur in healthy children, not harsh in quality.\n\n---\n\nAn innocent murmur is defined by softness, not harshness — that is one of the "S" features the diagnosis rests on, alongside being asymptomatic, systolic and heard at the left sternal edge. A harsh quality instead points towards a structural defect such as a VSD, so calling innocent murmurs "harsh" is the one statement here that contradicts the definition, which is why it is the false statement the question asks for.\n\nThe other three options are all genuinely true of an innocent murmur and are correctly not the answer. They are usually soft, which is the direct opposite of "harsh" and the reason the first option fails. They characteristically vary with position and respiration and get louder with fever, anaemia or exercise, because they are flow murmurs that track cardiac output rather than a fixed anatomical narrowing. And by definition they occur in an otherwise healthy child, with no other disqualifying finding such as a thrill, an added sound, radiation or symptoms.\n\nThe endpoint file prints a second version of this same "which statement is NOT true" question later in this section, `pedep2-car-41`, but it offers a different option set and a different false statement: there the option that breaks the definition is "may be diastolic" rather than "harsh murmurs," because an innocent murmur is systolic only. A student who meets both versions should take away the same short definition — soft, systolic, positional, otherwise well — and recognise that either "harsh" or "diastolic" is enough on its own to disqualify a murmur from being innocent.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'State the defining features of an innocent murmur (soft, systolic, positional, well child) and recognise that a harsh quality is inconsistent with that diagnosis.',
  source: 'Pediatrics endpoint part2.pdf p.697'
},
{
  id: 'pedep2-car-35',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'A 3-year-old boy has had a runny nose and wheeze for 3 days. On examination his pulse is 100 beats/min. There is an ejection systolic murmur heard loudest at the upper left sternal edge, which can also be heard over the carotid arteries but not at the back. Select most findings on echocardiography:',
  options: [
    'Aortic stenosis',
    'Atrial septal defect',
    'Coarctation of the aorta',
    'Pulmonary stenosis',
    'Ventricular septal defect (VSD)'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> The murmur radiating to the carotids is characteristic of aortic stenosis\n\n---\n\nAn ejection systolic murmur at the upper left sternal edge that radiates upward into the neck and over the carotid arteries is the site-and-radiation signature of aortic stenosis: the turbulent jet through a narrowed aortic valve travels along the great vessels arising from the aortic arch, which is exactly where the carotids sit. Nothing else in the vignette works against that reading — the runny nose and wheeze describe a concurrent viral upper respiratory infection rather than a cardiac symptom, and a pulse of 100 beats per minute is unremarkable for a well child with a mild febrile illness. The murmur not extending to the back is the detail that rules the two posteriorly radiating lesions out and points the finding forward, toward the great vessels, instead.\n\nEach distractor fails on site or radiation rather than on the murmur\'s timing, since all five lesions listed can produce a systolic murmur. Atrial septal defect gives an ejection systolic murmur at the upper left sternal edge from increased flow across the pulmonary valve, but its hallmark is a fixed, widely split second heart sound, not radiation to the carotids, and nothing in the stem describes the second sound at all. Coarctation of the aorta classically radiates to the back and between the scapulae, where the narrowed segment and its collateral vessels lie, and typically comes with radiofemoral delay and a blood pressure difference between the arms and legs — none of which this vignette offers, and the murmur here is explicitly not heard at the back. Pulmonary stenosis shares the same upper-left-sternal-edge site as aortic stenosis but radiates toward the lung fields rather than the neck, and is usually accompanied by an ejection click that varies with respiration, not a carotid bruit. Ventricular septal defect produces a pansystolic, not ejection systolic, murmur at the lower left sternal edge, with no radiation to the neck at all, so both the site and the murmur\'s shape argue against it here.\n\nThe endpoint file prints a second question elsewhere in this book that also describes a young child with an ejection systolic murmur keying to aortic stenosis; the two vignettes differ enough in their distractor lists that each stands as its own question rather than one being a reprint of the other.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Localise aortic stenosis by its ejection systolic murmur radiating to the carotids, and distinguish it from ASD, coarctation, pulmonary stenosis and VSD by site and radiation.',
  source: 'Pediatrics endpoint part2.pdf p.699'
},
{
  id: 'pedep2-car-36',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac-acq',
  image: 'q-pd-ep2-701',
  imgAlt: 'a reference chart of the Jones criteria for rheumatic fever diagnosis (major and minor criteria columns, mnemonic JONES CAFE PAL, with a diagnostic-logic box below)',
  stem: 'Which of the following presentation suggest the diagnosis of Rheumatic Fever?',
  options: [
    'Arthralgia with fever',
    'Carditis with arthralgia and fever',
    'Carditis with arthritis and fever',
    'Chronic recurrent tonsillitis with high ESPE',
    'Arthralgia with prolonged PR interval',
    'Recurrent tonsillitis and recurrent joint pains.'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> The combination of carditis and arthritis (both major criteria) with fever (a minor criterion) is strongly suggestive of acute rheumatic fever.\n\n---\n\nThe course\'s own Jones table lists five major manifestations — carditis, polyarthritis, chorea, erythema marginatum and subcutaneous nodules — and five minor ones — clinical findings, arthralgia, fever, elevated acute-phase reactants (ESR or CRP), and a prolonged PR interval. A diagnosis needs either two major manifestations, or one major plus two minor manifestations, together with evidence of a preceding group A streptococcal infection. Carditis with arthritis supplies two major criteria on its own, and the accompanying fever adds a minor criterion on top of that, which is why this option is the strongest fit: it clears the diagnostic threshold twice over rather than by the narrowest possible margin.\n\nEach distractor falls short of that bar or is the weaker of two similar combinations. Arthralgia with fever is two minor criteria and no major manifestation at all, so it cannot meet either counting rule by itself. Carditis with arthralgia and fever pairs one major criterion with two minor ones, which numerically satisfies the "one major plus two minor" rule, but it substitutes the softer symptom of joint pain for the objective joint swelling of arthritis, making it the weaker of the two carditis-plus-joint combinations on offer rather than the presentation the question is looking for. Chronic recurrent tonsillitis with a raised inflammatory marker documents ongoing streptococcal exposure but is not itself a Jones manifestation, major or minor. Arthralgia with a prolonged PR interval is again two minor criteria with no major one. Recurrent tonsillitis with recurrent joint pains describes a history of exposure and a minor symptom, not a diagnostic combination of major and minor criteria.\n\nThe figure printed alongside this question is a third-party mnemonic chart rather than the course\'s own slide, and it lists the same five-and-five split of major and minor criteria under a different memory aid; reading it after answering confirms the same two-major-or-one-major-plus-two-minor counting rule used above.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Apply the Jones criteria counting rule (two major, or one major plus two minor, plus evidence of preceding streptococcal infection) to pick the combination that most strongly supports a diagnosis of rheumatic fever.',
  source: 'Pediatrics endpoint part2.pdf p.701'
},
{
  id: 'pedep2-car-37',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac-acq',
  stem: 'The following condition is not associated with a systolic murmur:',
  options: [
    'Anemia',
    'Hyperthyroidism with hyperdynamic circulation',
    'Mitral stenosis',
    'Aortic stenosis',
    'Fever.'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Mitral stenosis produces a diastolic murmur, not systolic, unlike the other listed conditions.\n\n---\n\nAnaemia, hyperthyroidism with a hyperdynamic circulation, and fever all raise cardiac output and stroke volume, and the resulting increase in flow across a structurally normal aortic or pulmonary valve produces an innocent-type ejection systolic flow murmur — the murmur tracks the high-output state rather than any fixed narrowing. Aortic stenosis is systolic by definition, since the obstruction to left ventricular outflow is crossed during systole, when the ventricle is ejecting. Mitral stenosis is the one lesion on this list that is a purely diastolic event: the narrowed mitral valve only obstructs flow when blood is moving from the left atrium into the left ventricle, which happens during diastolic filling, giving the classic low-pitched, rumbling mid-diastolic murmur heard at the apex rather than a systolic one. That mismatch with the other four conditions, all of which genuinely produce systolic murmurs, is what makes mitral stenosis the correct answer here. Mitral regurgitation, by contrast, is pansystolic, which is the distinction worth keeping straight between the two mitral valve lesions that rheumatic heart disease can leave behind.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise mitral stenosis as the one common cause of a heart murmur that is diastolic rather than systolic.',
  source: 'Pediatrics endpoint part2.pdf p.703'
},
{
  id: 'pedep2-car-38',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac-acq',
  stem: 'A 14-year-old boy with a small ventricular septal defect presents to the emergency department with a 2-week history of lethargy and night sweats. On examination, he is pale, has a temperature of 39°C, and looks unwell. Auscultation reveals a loud systolic murmur audible throughout his precordium. There is a palpable splenic tip, and urinalysis shows microscopic hematuria. What is the next step?',
  options: [
    'Perform at least 3 sets of blood cultures',
    'Immediate surgical repair of VSD',
    'Start empiric antibiotics without cultures',
    'Order an ECG'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> This child has infective endocarditis; blood cultures are essential before starting antibiotics to guide therapy.\n\n---\n\nA known ventricular septal defect is exactly the substrate infective endocarditis needs: turbulent flow across a shunt damages the adjacent endocardium and gives circulating bacteria a surface to colonise, so a VSD, repaired or not, is a recognised predisposing lesion for the disease. This boy\'s two weeks of lethargy and night sweats, his fever, pallor and unwell appearance are the non-specific constitutional picture infective endocarditis produces, and a loud systolic murmur audible throughout the precordium — new or changed in character rather than the small, localised murmur of a simple VSD — is the cardiac clue on top of it. The palpable splenic tip and the microscopic haematuria complete the picture: splenomegaly is a recognised finding in subacute infective endocarditis, and glomerulonephritis from immune-complex deposition is one of the disease\'s immunological manifestations, producing exactly this kind of microscopic haematuria.\n\nOnce infective endocarditis is suspected, both the diagnosis and the choice of antibiotic depend on isolating the organism, so at least three sets of blood cultures, taken before any antibiotic is given, are the correct next step — starting treatment first can sterilise the blood and make the causative organism impossible to identify, which then makes it impossible to target therapy or to apply the culture-based diagnostic criteria used for this disease.\n\nEach distractor skips a step. Immediate surgical repair of the VSD is not indicated here: surgery in infective endocarditis is reserved for specific complications such as heart failure from valve destruction, uncontrolled infection despite antibiotics, or a large, embolising vegetation, none of which this vignette describes, and repairing the underlying defect does not treat the active infection. Starting empiric antibiotics without cultures reverses the correct order: empiric therapy has a place only once cultures have been drawn, and starting it first is the action most likely to prevent the organism ever being identified. An ECG can pick up complications such as a new conduction abnormality from an aortic root abscess, but it plays no part in establishing the diagnosis or in choosing therapy, and it is not the step this vignette is asking for.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise infective endocarditis on a known VSD and identify blood cultures, taken before antibiotics, as the correct next step.',
  source: 'Pediatrics endpoint part2.pdf p.705'
},
{
  id: 'pedep2-car-39',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'Atrial septal defect (ASD) typically causes which of the following?',
  options: [
    'Wide splitting of S2',
    'Fixed S1',
    'Diastolic murmur at apex',
    'Harsh systolic murmur at lower left sternal border'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> ASD typically causes fixed wide splitting of the second heart sound due to delayed RV emptying.\n\n---\n\nAn atrial septal defect creates a left-to-right shunt at the atrial level, which keeps right ventricular stroke volume elevated throughout the respiratory cycle rather than only during inspiration. Because pulmonary valve closure timing depends on right ventricular stroke volume, the normal respiratory variation in the splitting of the second heart sound is abolished, and the split becomes both wide and fixed — present at the same width whether the child is inhaling or exhaling. That fixed, wide splitting is the physical sign most specifically associated with ASD and is why it is the correct answer here.\n\nEach distractor belongs to a different lesion. A fixed first heart sound is not a recognised finding in any of these conditions; S1 reflects mitral and tricuspid valve closure and is not the sound that splits characteristically in ASD. A diastolic murmur at the apex describes mitral stenosis, not ASD, which produces an ejection systolic, not diastolic, murmur, and at the pulmonary area rather than the apex. A harsh systolic murmur at the lower left sternal border describes a ventricular septal defect, whose pansystolic murmur is generated by flow directly across the defect; the ASD murmur, by contrast, is soft and ejection systolic at the upper left sternal edge, generated by increased flow across the pulmonary valve rather than across the defect itself.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify fixed, wide splitting of the second heart sound as the physical sign specific to atrial septal defect.',
  source: 'Pediatrics endpoint part2.pdf p.707'
},
{
  id: 'pedep2-car-40',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac-acq',
  stem: 'What is the most common causative agent of infective endocarditis?',
  options: [
    'Streptococcus viridans',
    'Staphylococcus aureus',
    'Enterococcus',
    'Pseudomonas aeruginosa'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> It is the most common cause of subacute infective endocarditis, especially on abnormal valves.\n\n---\n\nStreptococcus viridans is a group of alpha-haemolytic streptococci that live as normal flora in the mouth and oropharynx, and transient bacteraemia from dental procedures or everyday oral trauma is enough to seed a previously damaged or abnormal heart valve. Because these organisms are of low virulence, the infection they cause typically runs a slow, subacute course over weeks, which is why Streptococcus viridans is classically the organism recovered from subacute infective endocarditis on rheumatic or congenitally abnormal valves, making it the most common causative agent overall.\n\nThe other three organisms cause infective endocarditis less often and in different settings. Staphylococcus aureus is the leading cause of the acute, rapidly destructive form of the disease, particularly on a previously normal valve and in the setting of intravenous drug use or an indwelling line, rather than the subacute picture that dominates the overall statistics. Enterococcus is associated with endocarditis following genitourinary or gastrointestinal procedures and in older patients, and accounts for a smaller share of cases than the viridans streptococci. Pseudomonas aeruginosa is a recognised but uncommon cause, seen mainly in intravenous drug users or after cardiac surgery, and does not approach the frequency of the other three.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify Streptococcus viridans as the most common cause of subacute infective endocarditis.',
  source: 'Pediatrics endpoint part2.pdf p.709'
},
{
  id: 'pedep2-car-41',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'Which of the following is NOT true about innocent (physiologic) heart murmurs?',
  options: [
    'May be diastolic',
    'Usually soft',
    'Occur in an otherwise healthy child',
    'Vary with position or respiration'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Innocent murmurs are always systolic, soft, vary with position, and occur in otherwise healthy children.\n\n---\n\nBeing systolic only is one of the defining "S" features of an innocent murmur, alongside being soft, occurring in an otherwise healthy child, and varying with position or respiration. A true diastolic murmur is never innocent — it always signals a structural lesion such as mitral or pulmonary stenosis, or aortic or pulmonary regurgitation, and finding one is itself an indication for further cardiac work-up. Saying an innocent murmur "may be diastolic" therefore contradicts the definition outright, which is why it is the false statement this question asks for.\n\nThe remaining three options are all genuinely true of an innocent murmur and are correctly not the answer. They are usually soft, which is one of the checklist features that separates them from a harsh, structural murmur. They occur in an otherwise healthy child, with no other disqualifying finding such as a thrill, an added sound, radiation or symptoms. And they vary with position or respiration, and get louder with fever, anaemia or exercise, because they are flow murmurs that track cardiac output rather than a fixed anatomical narrowing.\n\n`pedep2-car-34` prints the same question with a different option set, where the false statement offered is "they are harsh murmurs" rather than "may be diastolic." Between the two printings, a student should take away one short definition of an innocent murmur — soft, systolic only, positional, and heard in a well child — and recognise that either a harsh quality or a diastolic timing is, on its own, enough to disqualify a murmur from being innocent.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise that an innocent murmur is never diastolic, and compare this option set against the differently-worded printing of the same "which is NOT true" question.',
  source: 'Pediatrics endpoint part2.pdf p.711'
},
{
  id: 'pedep2-car-42',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac-acq',
  stem: 'A 17y old youth is brought to the GP by his mother. He was previously seen 2w earlier suffering from acute pharyngitis. His teeth are in generally poor condition, but otherwise, there is no previous medical history. On examination, he is febrile, with a temperature of 38.2°C and has polyarthritis affecting his knees, ankles, wrists and elbows. He also appears to have SC nodules over his elbows and MR on cardiovascular examination. What diagnosis fits best with this clinical picture?',
  options: [
    'Bacterial endocarditis',
    'Juvenile rheumatoid arthritis',
    'Scarlet fever',
    'Rheumatic fever',
    'Congenital valvular heart disease'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Recent pharyngitis, migratory polyarthritis, subcutaneous nodules, and murmur are classic features of rheumatic fever\n\n---\n\nThis presentation maps directly onto the Jones criteria taught for rheumatic fever. The pharyngitis two weeks earlier is the preceding group A streptococcal infection the diagnosis requires, since acute rheumatic fever classically follows pharyngitis by two to three weeks, the latency needed for the immune-mediated cross-reaction to develop. From there the vignette supplies three major manifestations at once: polyarthritis affecting the knees, ankles, wrists and elbows, the large, migratory joint pattern typical of rheumatic fever; subcutaneous nodules over the elbows, firm and painless swellings sited over extensor surfaces; and carditis, here declared by the murmur of mitral regurgitation, the commonest acute valve lesion the disease produces. Three major criteria on their own clear the diagnostic threshold with room to spare, and the fever adds a minor criterion on top. Poor dental hygiene is a plausible portal for the antecedent streptococcal throat infection rather than a separate clue pointing elsewhere.\n\nEach distractor fits part of the picture but not all of it. Bacterial (infective) endocarditis can also follow dental disease and can also produce fever and a new murmur, but it does not explain migratory polyarthritis across four joints or subcutaneous nodules, and it typically shows other stigmata such as splinter haemorrhages, Osler nodes or Janeway lesions rather than this joint-and-nodule combination. Juvenile rheumatoid arthritis produces a more persistent, less migratory arthritis without a preceding pharyngitis trigger, and it does not typically present with an acute new murmur or subcutaneous nodules at this stage of disease. Scarlet fever is caused by the same organism and can precede rheumatic fever, but it presents with its own rash and strawberry tongue at the time of the pharyngitis, not two weeks later as joint pain, nodules and a murmur, and nothing in this vignette describes a scarlet fever rash. Congenital valvular heart disease would not present acutely at 17 years old with fever, migratory joint pain and new nodules following a throat infection; a congenital lesion is present from birth and does not arise as an acute febrile illness.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Apply the Jones criteria to a vignette combining preceding pharyngitis, polyarthritis, subcutaneous nodules and a new murmur to diagnose rheumatic fever.',
  source: 'Pediatrics endpoint part2.pdf p.713'
}
