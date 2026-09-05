/* Section 6 "Cardiac disorders" — half E.
   Entries: pedep2-car-56, pedep2-car-58 .. pedep2-car-68 (n:56, n:58-68).
   n:57 (p.743) is deliberately DROPPED from this half: the book prints its viral-myocarditis
   question twice, and the fuller printing at n:26 (p.680) is the one kept, by the half that
   holds that range. This file writes no entry for n:57.
   Staged from content/peds/qb-pages/endpoint-p2-s06-cardiac.array.js (PEDEP2_S06_STAGED). */
{
  id: 'pedep2-car-56',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'The following statement is WRONG regarding VSD:',
  options: [
    'The commonest cause of systolic murmur on left parasternal',
    'The most common congenital heart disease',
    'The shunt is left to right but it is potentially cyanotic',
    'The commonest site of shunt is the membranous part of the septum',
    'Not all cases need surgical closure'
  ],
  answer: 0,
  explanation: 'VSD is the single most common congenital heart lesion, and it produces a harsh pansystolic murmur with a palpable thrill at the lower left sternal edge — but that is a pathological murmur, not the commonest cause of a systolic sound heard in that general area. Innocent (functional) murmurs are asymptomatic, soft and blowing, systolic only, heard at the left sternal edge, with otherwise normal heart sounds, no thrill and no radiation — and across the general paediatric population they are encountered far more often than a VSD murmur is *(not taken from the course material: the specific ranking of murmur causes by prevalence)*. So the statement that VSD is \'the commonest cause of a systolic murmur on left parasternal\' is the false one. The other four statements hold up: VSD is indeed the most common congenital heart lesion; a large left-to-right shunt can reverse under sustained pulmonary hypertension (Eisenmenger physiology), so a left-to-right shunt is correctly described as \'potentially cyanotic\'; the perimembranous part of the septum is the commonest site of the defect; and small VSDs frequently close spontaneously or need no intervention at all, so \'not all cases need surgical closure\' is correct.\n\nWritten for this bank — Pediatrics endpoint part2.pdf prints no explanation here.',
  objective: 'Distinguish VSD\'s pathological murmur from an innocent murmur, and recall VSD\'s epidemiology, shunt physiology and closure course.',
  source: 'Pediatrics endpoint part2.pdf p.741'
},
{
  id: 'pedep2-car-58',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac-cyan',
  stem: 'A 2-day-old baby presents with breathlessness and poor feeding. On examination, she has a soft murmur, a single second heart sound, a 4-cm hepatomegaly, and oxygen saturation of 65%. What is the most likely diagnosis?',
  options: [
    'Transposition of the great arteries (TGA)',
    'Tetralogy of Fallot',
    'Ventricular septal defect (VSD)',
    'Patent ductus arteriosus (PDA)'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Severe cyanosis, single S2, and hepatomegaly in a neonate is typical of TGA.\n\n---\n\nA single, unsplit S2 in this setting reflects the aortic and pulmonary components merging because one great vessel sits directly in front of the other, and it is taught as the discriminator for transposition of the great arteries, tetralogy of Fallot physiology and the \'most-admixture\' mixing lesions, as against a fixed or normally split S2. In a 2-day-old with severe cyanosis (saturation 65%), an inconspicuous murmur and an early right-heart-failure sign such as hepatomegaly, TGA fits precisely: the aorta arises from the right ventricle and the pulmonary artery from the left, so the systemic and pulmonary circulations run in parallel rather than in series, and the baby survives only for as long as blood can mix across the atrial septum, a VSD or the duct — there is usually no obstructive lesion to generate a loud murmur, which is why the murmur here is soft. Tetralogy of Fallot is against this picture: its murmur is a loud, harsh ejection systolic murmur from right ventricular outflow obstruction, and its cyanosis does not classically present with day-2 hepatomegaly. An isolated VSD does not cause neonatal cyanosis at all — its murmur, when the defect is large, is pansystolic, and cyanosis only appears years later if the shunt reverses (Eisenmenger physiology). An isolated PDA likewise does not cause cyanosis; its murmur is classically continuous, and cyanosis alongside a PDA points to a separate duct-dependent lesion, not the duct itself.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Use the S2-split pattern together with cyanosis and heart-failure signs to identify TGA in a neonate, and exclude TOF, VSD and PDA on their own murmur signatures.',
  source: 'Pediatrics endpoint part2.pdf p.745'
},
{
  id: 'pedep2-car-59',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'Nada, a 5-month-old female infant has a fever and runny nose for 2 days. On examination, her temperature is 38.3°C and she has a runny nose. Her tongue is pink. Her breathing is normal. Pulse is 130 beats/min. Her heart sounds are normal, but she has a soft systolic murmur at the left sternal edge. Pulses are normal. Select the most likely findings on echocardiography',
  options: [
    'Atrial septal defect',
    'Coarctation of the aorta',
    'Mitral regurgitation',
    'Normal',
    'Ventricular septal defect'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> The murmur is an innocent murmur associated with fever; echo would be normal.\n\n---\n\nThis vignette reproduces the standard criteria for an innocent (functional) murmur: the child is otherwise well apart from a viral illness, the murmur is soft and purely systolic, it is heard at the left sternal edge, heart sounds are otherwise normal with no thrill mentioned, and peripheral pulses are normal. Fever and tachycardia increase flow across a structurally normal heart and can make a physiological murmur more audible, which is exactly what is happening here — echocardiography in this scenario shows a structurally normal heart, so \'Normal\' is the answer. ASD would instead show a widely and fixedly split second heart sound with a pulmonary flow murmur, not a left-sternal-edge systolic murmur that appears with a febrile illness. Coarctation of the aorta would be expected to show reduced or absent femoral pulses and a gradient between the upper and lower limbs, neither of which is present here — the vignette specifically states pulses are normal. Mitral regurgitation would produce a pansystolic murmur radiating toward the axilla, often with a palpable thrill in more than mild cases, not a soft murmur in an otherwise well infant. VSD produces a harsh pansystolic murmur with a thrill at the lower left sternal edge, again not matched by the soft, non-thrilling murmur described.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise the clinical criteria for an innocent murmur in a febrile infant and exclude structural lesions that would each print a different physical sign.',
  source: 'Pediatrics endpoint part2.pdf p.747'
},
{
  id: 'pedep2-car-60',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'Which of the following conditions is most commonly associated with a continuous machinery murmur?',
  options: [
    'Moderate to large patent ductus arteriosus (PDA)',
    'Small PDA',
    'Ventricular septal defect (VSD)',
    'Atrial septal defect (ASD)'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> PDA causes the classic continuous "machinery" murmur.\n\n---\n\nA continuous \'machinery\' murmur — audible through both systole and diastole because a pressure gradient between the aorta and pulmonary artery persists throughout the cardiac cycle — is the classic bedside description of a PDA, and a moderate-to-large duct is specifically the size that stays wide enough to sustain this continuous flow while remaining large enough to be reliably heard, which is what the option is picking out. A small PDA can still produce a soft continuous murmur, but with a smaller shunt the murmur is often faint or intermittent, so the full \'machinery\' quality is less consistently present, which is why the moderate-to-large PDA is the better answer to \'most commonly associated with\'. VSD produces a harsh pansystolic (not continuous) murmur at the lower left sternal edge, from the pressure gradient between the left and right ventricles that exists only during systole. ASD produces a systolic ejection flow murmur at the upper left sternal edge from increased flow across the pulmonary valve, plus a fixed, widely split second heart sound — again a systolic, not continuous, murmur.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify PDA from the continuous \'machinery\' murmur and distinguish its timing from VSD\'s and ASD\'s systolic-only murmurs.',
  source: 'Pediatrics endpoint part2.pdf p.749'
},
{
  id: 'pedep2-car-61',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'A 1-year-old infant presents with recurrent respiratory infections and a harsh pansystolic murmur. Which of the following is the most likely diagnosis?',
  options: [
    'Atrial septal defect (ASD)',
    'Ventricular septal defect (VSD)',
    'Coarctation of the aorta',
    'Patent ductus arteriosus (PDA)'
  ],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Recurrent respiratory infections with a harsh pansystolic murmur are classic for VSD.\n\n---\n\nThese four lesions form a recurring differential in this section, and they are best told apart by the character and timing of the murmur plus one extra clue:\n\n| Lesion | Murmur | Timing | Location | Extra clue |\n|---|---|---|---|---|\n| VSD | Harsh, often with a thrill | Pansystolic | Lower left sternal edge | Recurrent chest infections / failure to thrive with larger defects |\n| PDA | \'Machinery\' quality | Continuous (systole and diastole) | Upper left sternal edge / infraclavicular | Bounding, collapsing pulses with a large duct |\n| ASD | Ejection flow murmur | Systolic only | Upper left sternal edge (pulmonary area) | Fixed, widely split second heart sound |\n| Coarctation of the aorta | Ejection murmur, often heard over the back | Systolic | Upper sternal edge, radiating to the back | Radio-femoral delay, reduced or absent femoral pulses |\n\nApplying that here: a harsh, pansystolic murmur together with recurrent chest infections — from pulmonary over-circulation and a degree of cardiac strain — is the textbook VSD presentation, so VSD is the answer. ASD is excluded because its murmur is a softer systolic ejection (flow) murmur from increased flow across the pulmonary valve, not a pansystolic murmur, and its leading clue is a fixed, widely split S2 rather than recurrent infections. Coarctation of the aorta is excluded because its murmur is an ejection systolic murmur best heard over the upper sternal edge and back, and its diagnostic clue is a radio-femoral pulse delay, not a pansystolic murmur at the lower sternal edge. PDA is excluded because its murmur is continuous rather than confined to systole.\n\n`pedep2-car-66` prints this same four-option menu for a different infant, and the discriminating feature there is a continuous murmur with normal, easily palpable pulses in a thriving infant — pointing to PDA rather than VSD.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Use murmur timing and quality plus one extra clue (thrill, fixed split S2, radio-femoral delay or pulse character) to separate VSD, ASD, coarctation and PDA sharing one option menu.',
  source: 'Pediatrics endpoint part2.pdf p.751'
},
{
  id: 'pedep2-car-62',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'One week old present with shock. What is most congenital heart disease that can cause?',
  options: [
    'Coarctation of aorta',
    'VSD',
    'Fallot',
    'ASD'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Coarctation often presents when the ductus arteriosus closes, leading to shock and poor perfusion. VSD, ASD, and Fallot usually don\'t present this early with shock.\n\n---\n\nWhen the arterial duct closes in a baby with critical coarctation, the lower body — including the kidneys and gut — loses the collateral flow it depended on before birth, and the child decompensates within days into shock with poor perfusion and metabolic acidosis, usually with absent or grossly reduced femoral pulses: this is the classic first-week presentation of coarctation, which is why it is the answer here. VSD does not typically cause shock in the first week: even a large defect needs pulmonary vascular resistance to fall over the first weeks of life before a large left-to-right shunt and heart failure develop, so VSD-related failure is a picture of the first weeks to months, not the first days. Tetralogy of Fallot presents with cyanosis and, later, hypercyanotic spells rather than with circulatory shock — pulmonary blood flow may be duct-dependent in severe forms, but the clinical picture is hypoxaemia, not shock from systemic hypoperfusion. ASD is the least likely of the four to cause any symptoms in early infancy: the shunt across the atrial septum stays small in the neonatal period because right and left ventricular compliance are still similar, and ASDs are typically silent for years.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise critical neonatal coarctation as the classic cause of first-week circulatory collapse when the duct closes, and exclude VSD, TOF and ASD by their different early time-courses.',
  source: 'Pediatrics endpoint part2.pdf p.753'
},
{
  id: 'pedep2-car-63',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac-cyan',
  stem: 'A 2-year-old girl is brought from home with progressive cyanosis. On examination, she is deeply cyanosed (oxygen saturation 78% in room air) and has mild subcostal retractions. She is alert and not in acute distress. What is the most likely diagnosis?',
  options: [
    'Diaphragmatic hernia',
    'Large ventricular septal defect (VSD)',
    'Persistent fetal circulation',
    'Transposition of the great arteries (TGA)',
    'Tricuspid atresia'
  ],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> Progressive cyanosis in a stable, alert 2-year-old without respiratory distress suggests a cyanotic congenital heart disease with decreased pulmonary blood flow. This presentation is characteristic of tricuspid atresia, where poor mixing of blood causes gradual worsening of cyanosis. Other options like diaphragmatic hernia or TGA cause severe neonatal distress, not stable late cyanosis.\n\n---\n\nTricuspid atresia leaves no direct connection between the right atrium and right ventricle, so all systemic venous return must cross the atrial septum to the left heart and reach the lungs only through an associated VSD, a hypoplastic right ventricle, or a duct — because some of this flow persists, the child is not acutely obstructed and can survive years with chronic cyanosis that gradually worsens as growth outpaces the fixed communications, exactly as described here; it also carries a characteristic ECG signature of left axis deviation with right atrial enlargement and left ventricular hypertrophy, reflecting the underdeveloped right ventricle. A large VSD does not cause cyanosis at this age in isolation: an uncomplicated left-to-right shunt through a large VSD causes breathlessness, poor growth and recurrent chest infections from pulmonary over-circulation, and only produces cyanosis years later if the shunt reverses under sustained pulmonary hypertension (Eisenmenger physiology) — a slower and different course from this vignette. Persistent fetal circulation (persistent pulmonary hypertension of the newborn) is a disease of the first days of life, driven by failure of pulmonary vascular resistance to fall after birth, and it resolves or is fatal in the neonatal period — it does not present as new progressive cyanosis at two years old. Diaphragmatic hernia and TGA are both addressed in the box: both are severe, early neonatal presentations, not a stable, alert two-year-old.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise tricuspid atresia\'s chronic, slowly progressive cyanosis and its ECG signature, and exclude lesions whose natural history does not fit a stable two-year-old.',
  source: 'Pediatrics endpoint part2.pdf p.755'
},
{
  id: 'pedep2-car-64',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'A 3-month-old girl presents with breathlessness and excessive sweating during feeding. She weighs 4.3 kg. On examination, her oxygen saturation is 96% in room air, and she has a precordial thrill with a loud pansystolic murmur at the lower left sternal border. Chest X-ray shows cardiomegaly and plethoric lung fields. What is the most likely diagnosis?',
  options: [
    'Ostium secundum atrial septal defect (ASD)',
    'Coarctation of the aorta',
    'Patent ductus arteriosus (PDA)',
    'Ventricular septal defect (VSD)',
    'Tetralogy of Fallot'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Large VSDs cause left-to-right shunting → heart failure signs (sweating, breathlessness, FTT) and pansystolic murmur with cardiomegaly on X-ray.\n\n---\n\nASD does not fit this picture at three months: the shunt across the atrial septum stays small in early infancy because right and left ventricular compliance are still similar at this age, so ASDs are usually asymptomatic in infancy and turn up later as an incidental fixed, widely split S2 — not with heart failure and a precordial thrill this early. Coarctation of the aorta would be expected to show reduced or absent femoral pulses and a discrepancy between upper- and lower-limb blood pressure, neither of which is described here, and its murmur is an ejection systolic murmur over the back, not a pansystolic murmur at the lower left sternal border. PDA produces a continuous \'machinery\' murmur, not the pansystolic murmur with thrill described in this vignette, and it presents with bounding pulses rather than a thrill at the lower sternal edge. Tetralogy of Fallot would show cyanosis rather than a pink, breathless infant in failure, and its murmur is a harsh ejection systolic murmur from right ventricular outflow obstruction, not pansystolic — the plethoric (not oligaemic) lung fields on this chest X-ray also argue against TOF, whose lung fields are typically reduced from decreased pulmonary blood flow.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Use murmur quality, pulse findings and chest X-ray lung fields to confirm large VSD as the cause of infantile heart failure, and exclude ASD, coarctation, PDA and TOF.',
  source: 'Pediatrics endpoint part2.pdf p.757'
},
{
  id: 'pedep2-car-65',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac-acq',
  stem: 'A 10-year-old girl is noted to have a rumbling diastolic murmur at the apex, which becomes more pronounced during exercise. What is the most likely diagnosis?',
  options: [
    'Mitral stenosis',
    'Aortic stenosis',
    'Ventricular septal defect (VSD)',
    'Tricuspid regurgitation'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> A diastolic rumbling murmur at the apex is classic for mitral stenosis. It becomes more pronounced with exercise due to increased flow across the narrowed valve.\n\n---\n\nA rumbling, low-pitched diastolic murmur at the apex is the classic bedside description of mitral stenosis, and it becomes louder with exercise because a faster heart rate shortens diastole and forces more blood across the narrowed valve orifice per unit time, increasing turbulence. In a child this age, mitral stenosis is almost always acquired rather than congenital — it is the valve lesion left behind by rheumatic heart disease — which is why this question, though printed alongside the congenital lesions in this section, is filed with the acquired cardiac conditions rather than with VSD, ASD or PDA. Aortic stenosis is excluded because its murmur is a systolic ejection murmur, harsh and crescendo-decrescendo, heard at the right upper sternal border and radiating to the carotids — the opposite timing and the opposite location. VSD is excluded on timing alone: its murmur is pansystolic, not diastolic, and it is heard at the lower left sternal edge rather than the apex. Tricuspid regurgitation produces a pansystolic murmur at the lower left sternal edge that increases on inspiration (Carvallo\'s sign), not a diastolic murmur at the apex — location, timing and the respiratory manoeuvre all point away from it here.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Localise a diastolic apical murmur to mitral stenosis, recognise its usual rheumatic aetiology in childhood, and exclude lesions distinguished by timing or location.',
  source: 'Pediatrics endpoint part2.pdf p.759'
},
{
  id: 'pedep2-car-66',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'A 3-month-old female infant is seen during a routine check-up. She is well and thriving, and her peripheral pulses are easily palpable. On examination, a continuous murmur is heard throughout the precordium. What is the most likely diagnosis?',
  options: [
    'Patent ductus arteriosus (PDA)',
    'Ventricular septal defect (VSD)',
    'Atrial septal defect (ASD)',
    'Coarctation of the aorta'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> PDA produces a continuous “machinery” murmur best heard in infancy. Good pulses and thriving suggest a moderate, not severe lesion.\n\n---\n\nThis shares its option menu with `pedep2-car-61`, which sets out how VSD, PDA, ASD and coarctation are told apart on murmur timing and one extra clue. Here the discriminating feature is a continuous murmur heard throughout the precordium in an infant who is well, thriving and has easily palpable peripheral pulses: a continuous murmur is PDA\'s signature, present through both systole and diastole because the aorta-to-pulmonary-artery pressure gradient persists across the whole cardiac cycle, and normal growth with strong pulses argues for a small-to-moderate duct rather than a large one that would already be causing heart failure or bounding, collapsing pulses. VSD, ASD and coarctation are excluded on timing and clue exactly as set out at `pedep2-car-61` — none of the three produces a murmur that is continuous through diastole as well as systole.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise the continuous PDA murmur and use good growth plus strong pulses to judge duct size, cross-referencing the shared four-lesion menu.',
  source: 'Pediatrics endpoint part2.pdf p.761'
},
{
  id: 'pedep2-car-67',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'A 3-year-old child presents with fever and runny nose. On examination, a left parasternal harsh pansystolic murmur is heard. What is the next step?',
  options: [
    'Reassurance and dental hygiene',
    'Surgical correction',
    'Immediate echocardiography',
    'Start antibiotics'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> A new pansystolic murmur after infection could mean endocarditis or congenital lesion. Echo is needed to confirm the diagnosis before treatment.\n\n---\n\nA pansystolic murmur newly heard at the left parasternal border, in a child with fever and a viral-sounding prodrome, needs its cause established before anything is done about it — it could be an innocent murmur made more audible by fever, an undiagnosed VSD, or, less commonly, an acquired valve lesion from endocarditis — and echocardiography is the investigation that distinguishes these, which is why \'immediate echocardiography\' is the answer to a \'what next\' question. This entry is filed with murmur workup rather than with infective endocarditis specifically, because what it tests is the general principle of investigating before treating a new murmur, not endocarditis\'s own diagnostic criteria or management. Reassurance and dental hygiene assumes the murmur is innocent and pre-empts endocarditis-prevention advice without a diagnosis having been made at all — appropriate only once a structural lesion has actually been confirmed and found to carry endocarditis risk. Surgical correction is premature without even an imaging diagnosis, let alone a decision that surgery is indicated. Starting antibiotics assumes an infective process (such as endocarditis) that has not been demonstrated — blind antibiotic treatment ahead of diagnostic workup, including blood cultures and echocardiography, risks masking a true infection without curing it.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Apply \'investigate before treating\' to a newly noticed pansystolic murmur, choosing echocardiography over premature reassurance, surgery or antibiotics.',
  source: 'Pediatrics endpoint part2.pdf p.763'
},
{
  id: 'pedep2-car-68',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'A 7-week-old infant presents with breathlessness on feeding and failure to thrive. On examination, his femoral pulses are difficult to feel but present. Chest X-ray shows cardiomegaly and increased pulmonary vascular markings. What is the most likely diagnosis?',
  options: [
    'Coarctation of the aorta',
    'Patent ductus arteriosus (PDA)',
    'Ventricular septal defect (VSD)',
    'Tetralogy of Fallot'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Weak femoral pulses and heart failure signs point to coarctation. Increased pulmonary markings reflect left heart failure due to obstruction.\n\n---\n\nFemoral pulses that are difficult to feel but still present, rather than fully absent, fit a coarctation that is not quite critical — the duct has not fully closed, so some flow still reaches the lower body across the narrowing, but by seven weeks left ventricular afterload has already risen enough to produce breathlessness on feeding, failure to thrive and cardiomegaly with increased pulmonary vascular markings on chest X-ray, all signs of left heart failure from sustained obstruction. PDA is excluded because it does not weaken the femoral pulses — if anything, a large PDA produces bounding, collapsing pulses from diastolic runoff into the pulmonary circulation, the opposite finding. VSD is excluded on the same pulse finding: an isolated VSD does not affect femoral pulse volume at all, and while a large VSD can also cause failure to thrive, breathlessness and cardiomegaly, it would not explain difficult-to-feel femoral pulses. Tetralogy of Fallot is excluded because it presents with cyanosis, or a well pink child with a loud outflow murmur, not with heart failure and weak lower-limb pulses, and its chest X-ray classically shows reduced, not increased, pulmonary vascular markings.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Use reduced (not absent) femoral pulses plus left-heart-failure signs to diagnose subacute infantile coarctation, and exclude PDA, VSD and TOF on pulse character and CXR lung fields.',
  source: 'Pediatrics endpoint part2.pdf p.765'
},
