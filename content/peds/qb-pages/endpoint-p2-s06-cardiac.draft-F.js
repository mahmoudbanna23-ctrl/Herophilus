/* endpoint-p2-s06-cardiac.draft-F.js -- half F (last half) of section 6 "Cardiac disorders",
   peds ENDPOINT part 2. Covers pedep2-car-69 .. pedep2-car-81 (n:69-81, pp.767-791).

   pedep2-car-73 (n:73, p.775) is DELIBERATELY ABSENT. The book prints this "which investigation
   first" question twice; the fuller-box printing on p.693 (n:32) is the one kept, and it is
   written by the half that holds that page, which also records the numeric disagreement between
   the two printings (a grade 4 pan-systolic murmur on p.775 versus a graded pansystolic murmur on
   p.693). No entry for n:73 is a deliberate gap, not a lost one.

   No figures fall in this range -- all twelve entries below are text-only.
*/
{
  id: 'pedep2-car-69',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'infection-rash',
  stem: 'A 3-year-old girl has a high fever for three days and developed a red, maculopapular, slightly rough rash spreading from her neck to trunk. She has confluent petechiae in skin folds, a red tongue, and cervical lymphadenopathy. She refuses tonsil examination. What is the most appropriate treatment?',
  options: [
    'Discharge home with oral phenoxymethylpenicillin',
    'Admit for IV antibiotics',
    'Supportive care only',
    'Start antiviral therapy'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> This is scarlet fever (Group A strep with toxin). Outpatient oral penicillin is the correct treatment unless complications are present.\n\n---\n\nThis entry is filed under `infection-rash`, not a cardiac chapter, because the disease being tested is scarlet fever -- the theory content teaches it there in a dedicated section, while the infectious-disease chapter that discusses the toxin covers the toxin, not the disease as a whole.\n\nThe vignette is the textbook presentation: high fever, a fine "sandpaper" maculopapular rash spreading from the neck onto the trunk, confluent petechiae concentrated in the skin folds (Pastia lines), a red tongue evolving through the classic strawberry stages, and cervical lymphadenopathy -- all driven by a group A streptococcal pharyngitis whose strain carries an erythrogenic (pyrogenic) exotoxin. A child refusing throat examination is simply describing a painful pharyngitis and does not weigh against the diagnosis.\n\nUncomplicated scarlet fever is treated exactly like any other streptococcal pharyngitis: a course of oral penicillin (or amoxicillin, more palatable in children) as an outpatient. This is why *discharge home with oral phenoxymethylpenicillin* is correct, and it is not merely symptomatic treatment -- clearing the organism is what prevents the two important non-suppurative sequelae, acute rheumatic fever and post-streptococcal glomerulonephritis.\n\n*Admit for IV antibiotics* would only be justified by a suppurative complication (peritonsillar abscess, mastoiditis, toxic shock) or an inability to tolerate oral therapy, neither of which the vignette describes. *Supportive care only* is wrong for the same reason treatment is needed at all -- withholding antibiotics removes the protection against rheumatic fever and glomerulonephritis, which is the whole point of treating the illness. *Start antiviral therapy* misclassifies the organism: scarlet fever is bacterial, caused by *Streptococcus pyogenes*, and antivirals have no role.\n\nThe child remains infectious until 24 hours of antibiotics have been completed, at which point exclusion from school can end.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Outpatient oral penicillin treats scarlet fever and prevents rheumatic fever and post-streptococcal glomerulonephritis.',
  source: 'Pediatrics endpoint part2.pdf p.767'
},
{
  id: 'pedep2-car-70',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'emergencies',
  stem: 'Which of the following is known to be a "pre-arrest" condition?',
  options: [
    'Heart failure',
    'Neurologic failure',
    'Hepatic failure',
    'Shock',
    'Renal failure'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Shock is considered a pre-arrest state because it rapidly progresses to cardiac arrest if untreated.\n\n---\n\nThis entry is filed under `emergencies`, not a cardiac chapter, because the question tests recognising a global pre-arrest state rather than a specific cardiac lesion -- that is where the theory content teaches shock, its types and its trajectory toward arrest.\n\nShock is present when the circulation fails to meet the metabolic demands of the tissues. Left untreated it moves from a compensated phase -- tachycardia, tachypnoea, delayed capillary refill, decreased urine output -- into a decompensated phase marked by bradycardia, acidotic breathing, confusion and hypotension, and from there directly into cardiorespiratory arrest. That trajectory is exactly what "pre-arrest" describes: compensated shock is reversible, but once the child decompensates the process may no longer be.\n\n*Heart failure*, *hepatic failure* and *renal failure* are each single-organ failures that can accompany or complicate shock, but none of them is, on its own, the state immediately upstream of arrest -- a child can have any of them without being in extremis. *Neurologic failure* likewise names one system rather than the global haemodynamic collapse that precedes arrest.\n\nThe clinical trap behind the question is that blood pressure is preserved until late, by a rising heart rate and peripheral vasoconstriction, so a normal blood pressure does not exclude shock. By the time hypotension appears, decompensation has already happened, which is precisely why shock, and not any single organ\'s failure, is labelled the pre-arrest condition.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Shock is the pre-arrest state because compensated shock is reversible but decompensated shock may not be.',
  source: 'Pediatrics endpoint part2.pdf p.769'
},
{
  id: 'pedep2-car-71',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac-acq',
  stem: 'A ten-year-old boy presented in your office with a history of sore throat for 8 days. Physical examination revealed red throat with minimal exudates, cervical lymphadenopathy and fever. A throat culture was positive for group A beta-hemolytic streptococcus. You immediately began treatment with penicillin. A few weeks later, he again presented to your office, complaining of fatigue and loss of appetite. He also complained of some joint pain. Which of the following will establish a diagnosis of rheumatic fever?',
  options: [
    'Presence of carditis',
    'Presence of carditis and arthralgia',
    'Presence of polyarthritis, fever and evidence of recent streptococcus infection',
    'Presence of carditis, polyarthritis and evidence of recent streptococcus infection',
    'Prolongation of P-R interval, fever and arthralgia'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Diagnosis of rheumatic fever is based on Jones criteria. Carditis + polyarthritis + strep evidence fulfill the major and minor requirements.\n\n---\n\nThis entry is filed under acquired heart disease, not a congenital chapter, because rheumatic fever and the cardiac damage it causes are acquired, not structural, in origin.\n\nDiagnosis of acute rheumatic fever rests on the Jones criteria: **two major manifestations**, or **one major plus two minor**, together with **evidence of a preceding group A streptococcal infection** (here, the positive throat culture already given). The five major manifestations are carditis, polyarthritis, chorea, erythema marginatum and subcutaneous nodules; the five minor are clinical arthralgia, fever, raised acute-phase reactants (ESR/CRP), a prolonged P-R interval, and a history of prior rheumatic fever.\n\nTesting each option against that rule: *presence of carditis* alone is a single major manifestation and, without a second major or two minor findings, does not meet the criteria on its own. *Presence of carditis and arthralgia* is one major plus one minor -- still short of the "one major plus two minor" bar. *Presence of polyarthritis, fever and evidence of recent streptococcus infection* is one major (polyarthritis) plus one minor (fever) plus the streptococcal evidence -- again one minor short. *Presence of carditis, polyarthritis and evidence of recent streptococcus infection* supplies **two major manifestations** (carditis and polyarthritis) plus the required evidence of antecedent streptococcal infection -- this satisfies the criteria outright and is the key. *Prolongation of the P-R interval, fever and arthralgia* offers three minor manifestations and no major one at all, which never meets the rule regardless of how much streptococcal evidence accompanies it.\n\nThe vignette itself follows the classic sequence: a proven group A streptococcal pharyngitis, treated, followed weeks later by fatigue, anorexia and joint pain -- the latent interval and constitutional prodrome that precede the major manifestations of rheumatic fever.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Rheumatic fever needs two major Jones criteria, or one major plus two minor, plus evidence of streptococcal infection.',
  source: 'Pediatrics endpoint part2.pdf p.771'
},
{
  id: 'pedep2-car-72',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac-acq',
  stem: 'A 7-year-old girl presents with chorea and is found to have mitral valve regurgitation. Of the following interventions, chronic disability is MOST likely to be prevented by:',
  options: [
    'Oral prednisone for 4 weeks',
    'Intramuscular penicillin daily for 10 day',
    'Oral haloperidol for 6 weeks',
    'Intramuscular long acting penicillin / 2 weeks',
    'Oral salicylates for 6 weeks'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Secondary prophylaxis with penicillin prevents further streptococcal infections and recurrent rheumatic fever, reducing long-term disability.\n\n---\n\nThis child already has two major Jones manifestations -- chorea and carditis (the mitral regurgitation) -- so the diagnosis of acute rheumatic fever is not in question; what is being tested is which intervention protects her from the long-term consequence, progressive rheumatic heart disease from repeated attacks.\n\nThe mechanism that produces chronic valve damage is recurrence, and recurrence is driven by a new group A streptococcal throat infection. Secondary prophylaxis -- regular penicillin to keep the throat sterile -- is therefore what actually prevents chronic disability, which is why *intramuscular long-acting penicillin* is the key. *Oral prednisone for 4 weeks* and *oral salicylates for 6 weeks* are both anti-inflammatory measures used to treat the acute attack (steroids for severe carditis, salicylates for arthritis); neither of them stops a future streptococcal infection or a future attack. *Oral haloperidol for 6 weeks* treats the chorea itself, which is usually self-limiting and does not drive valve damage -- controlling the movement disorder does nothing to protect the mitral valve. *Intramuscular penicillin daily for 10 days* describes treatment of the acute streptococcal infection, not the prophylactic regimen -- a 10-day course clears one infection, whereas it is the long-acting, repeated injection that prevents the next one.\n\nOne number is worth flagging: this option\'s 2-weekly interval is shorter than the 3-4-weekly benzathine penicillin schedule usually quoted for secondary prophylaxis in wider paediatric practice *(not taken from the course material)* -- the key is taken exactly as the bank prints it regardless.\n\nFiled under acquired heart disease rather than a congenital chapter, because rheumatic carditis and the valve damage it leaves behind are acquired, not structural, lesions.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Secondary penicillin prophylaxis prevents the recurrent streptococcal infections that drive chronic rheumatic valve damage.',
  source: 'Pediatrics endpoint part2.pdf p.773'
},
{
  id: 'pedep2-car-74',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac-cyan',
  stem: 'Recognized complications of tetralogy of Fallot EXCEPT',
  options: [
    'Cerebral thrombosis',
    'Heart failure',
    'Cerebral abscess',
    'Hypoglycemia'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> TOF is associated with cerebral abscess, thrombosis, and heart failure, but hypoglycemia is unrelated.\n\n---\n\nTetralogy of Fallot predisposes to a specific cluster of complications, all traceable to its two defining features -- a large right-to-left shunt through the VSD and chronic hypoxaemia. *Cerebral thrombosis* follows from the compensatory polycythaemia (haematocrit can exceed 65%) that chronic cyanosis produces: the resulting hyperviscosity predisposes to venous and arterial thrombosis, including in cerebral vessels, and the risk rises further if relative iron-deficiency anaemia coexists *(the anaemia-cerebrovascular link is in the course material; the thrombosis mechanism itself is general medical knowledge, not taken from the course material)*. *Cerebral abscess* arises because the right-to-left shunt lets venous blood, and any organisms or septic emboli it carries, bypass the lung\'s filtering capillary bed and reach the systemic and cerebral circulation directly *(not taken from the course material)*. *Heart failure* can occur in tetralogy of Fallot, particularly if the pulmonary stenosis is mild enough to leave a large residual left-to-right component, or after palliative shunt surgery increases pulmonary blood flow.\n\n*Hypoglycaemia* has no such mechanism in tetralogy of Fallot -- the lesion is a structural and haemodynamic problem, not a metabolic one, and nothing about right-to-left shunting, polycythaemia or chronic hypoxaemia predisposes to low blood glucose. That absence of a mechanism is why it is the one option that is not a recognised complication, and the key to this "EXCEPT" question.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Tetralogy of Fallot\'s complications follow from chronic hypoxaemia and polycythaemia; hypoglycaemia is not one of them.',
  source: 'Pediatrics endpoint part2.pdf p.777'
},
{
  id: 'pedep2-car-75',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'A 1-day-old term infant is seen postnatally. She is pink in room air, HR 140 bpm, RR 60 bpm. Examination reveals absent femoral pulses and a palpable liver edge 4 cm below the costal margin. Chest X-ray shows a normal cardiac silhouette with clear lung fields. Initial blood tests reveal pH 6.9, pCO₂ 16 mmHg, and elevated lactate. What is the next most appropriate management?',
  options: [
    'Diuretics',
    'High flow oxygen via a non- rebreathable mask',
    'Intubation and ventilation',
    'Prostaglandin infusion',
    'Transfer to a cardiac center'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Prostaglandin keeps the ductus arteriosus open in duct-dependent lesions like coarctation or critical aortic stenosis, stabilizing circulation.\n\n---\n\nThis infant is presenting with the classic collapse of critical neonatal coarctation of the aorta: well in the first day while the ductus arteriosus is still open and feeding the descending aorta, then decompensating as the duct closes -- a sick, shocked baby with absent femoral pulses, hepatomegaly from heart failure, and severe metabolic acidosis (pH 6.9, with the low pCO₂ of 16 mmHg reflecting compensatory hyperventilation, and a raised lactate confirming poor tissue perfusion). Staying pink with a structurally normal-looking heart on chest X-ray fits a duct-dependent systemic lesion rather than a cyanotic one -- the descending aorta is being perfused right-to-left across the duct, so oxygen saturation itself is not the problem.\n\nThe pulses point to exactly which lesion this is: **absent femoral pulses alone**, with normal upper-limb and brachial pulses, indicates coarctation itself, as opposed to interruption of the aortic arch (which also loses the left brachial pulse) or hypoplastic left heart syndrome (which loses every peripheral pulse). All three, however, share one management principle, which is what this question is actually testing.\n\n**Prostaglandin infusion** (alprostadil) reopens and holds open the ductus arteriosus, restoring the right-to-left flow keeping the lower body perfused -- it treats the physiology directly and is the single most time-critical intervention. *Diuretics* would reduce circulating volume in a baby who is already under-perfused, and does nothing for the underlying obstruction. *High-flow oxygen* is actively counter-productive in a duct-dependent lesion: oxygen is one of the strongest stimuli for ductal closure, so it risks worsening the very problem driving the collapse. *Intubation and ventilation* may become necessary to support a deteriorating infant, but treats the consequence of poor perfusion rather than its cause, and is not the first step. *Transfer to a cardiac centre* is certainly needed, but the duct will not wait for transport -- prostaglandin must be started immediately, before or during transfer, since a duct closing en route is what actually kills these infants.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Absent femoral pulses and shock in a neonate signal duct-dependent coarctation; prostaglandin keeps the duct open.',
  source: 'Pediatrics endpoint part2.pdf p.779'
},
{
  id: 'pedep2-car-76',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'The following can increase the risk congenital heart disease in children EXCEPT:',
  options: [
    'Down syndrome',
    'Maternal diabetes',
    'Hypothyroidism',
    'Congenital rubella',
    'Turner’s syndrome'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> CHD is linked with Down syndrome, Turner’s, maternal diabetes, and rubella. Hypothyroidism does not increase CHD risk.\n\n---\n\nCongenital heart disease has recognised genetic and maternal risk factors. Among chromosomal causes, Down syndrome (classically an atrioventricular septal defect) and Turner syndrome (classically coarctation of the aorta) both carry a substantially increased risk. Among maternal exposures, maternal diabetes and congenital rubella infection are both established risks -- rubella in particular causes a recognisable syndrome that includes a patent ductus arteriosus, with peripheral pulmonary stenosis as a second lesion. All four of these are named risk factors, which makes them individually correct as inclusions and therefore wrong as the answer to an "EXCEPT" question.\n\n*Hypothyroidism* is not among the recognised aetiological categories for congenital heart disease -- the aetiology divides into genetic, polygenic, chromosomal and maternal-exposure causes, and maternal hypothyroidism does not appear on any of those lists in the material covering this topic. Congenital hypothyroidism in the newborn can itself cause a pericardial effusion or bradycardia, but that is a separate association from the structural malformation risk this question asks about *(not taken from the course material)*, which is why hypothyroidism does not belong on this list and is the key to the "EXCEPT" question.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Down syndrome, Turner syndrome, maternal diabetes and rubella raise CHD risk; hypothyroidism does not.',
  source: 'Pediatrics endpoint part2.pdf p.781'
},
{
  id: 'pedep2-car-77',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'A 13-year-old girl is referred for evaluation of short stature. She is pre-pubertal. On auscultation, she has an ejection systolic murmur heard at the second and third left intercostal spaces, radiating to the back, but she is asymptomatic. What is the most likely diagnosis?',
  options: [
    'Atrioventricular septal defect (AVSD)',
    'Pulmonary valve stenosis',
    'Mitral valve stenosis',
    'Aortic valve stenosis'
  ],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Pulmonary stenosis causes an ejection systolic murmur at the upper left sternal border radiating to the back.\n\n---\n\nThe vignette describes a short, pre-pubertal girl with an asymptomatic ejection systolic murmur at the second and third left intercostal spaces radiating to the back -- the classic location and radiation of a pulmonary stenosis murmur (upper left sternal edge, radiating posteriorly), distinct from aortic stenosis, which is loudest at the upper *right* sternal edge and radiates to the carotids and neck.\n\nShort stature with a cardiac murmur naturally raises the question of an associated syndrome, and here the pairing points toward Noonan syndrome rather than Turner syndrome: Noonan syndrome presents with short stature in either sex and a normal karyotype, and its characteristic cardiac lesion is pulmonary stenosis, whereas Turner syndrome\'s classic lesion is coarctation of the aorta *(the specific Noonan-versus-Turner cardiac contrast is not taken from the course material, though Noonan syndrome itself, and Turner syndrome\'s association with coarctation, both are)*. The vignette gives too little detail to name the syndrome outright, but the murmur alone is sufficient to answer the question asked.\n\n*Atrioventricular septal defect* produces a pansystolic or mid-diastolic murmur from the shared atrioventricular valve, not an ejection murmur at the left sternal edge, and is more typically associated with Down syndrome. *Mitral valve stenosis* is an acquired lesion, almost always a late sequel of rheumatic fever, and would not present as an isolated asymptomatic murmur discovered incidentally in a short child with no rheumatic history. *Aortic valve stenosis* is excluded by the murmur\'s location: it is loudest at the upper right sternal edge with radiation to the carotids, not at the second and third left intercostal spaces radiating to the back.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'An ejection systolic murmur at the upper left sternal edge radiating to the back is pulmonary stenosis.',
  source: 'Pediatrics endpoint part2.pdf p.783'
},
{
  id: 'pedep2-car-78',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'An 8y old boy is referred with pain in his legs when walking. MSK & neuro exam is unremarkable. BP in his RT arm is 160/90mmHg. His femoral pulses are present but slightly difficult to feel. On auscultation, you find an ejection click at the base, accompanied by an ejection systolic murmur heard loudest at the right upper sternal edge, but audible also at the mid-left sternal edge and back. His ECG shows left ventricular hypertrophy, but his chest X-ray is normal. What is the most likely diagnosis?',
  options: [
    'Coarctation of the aorta',
    'Patent ductus arteriosus (PDA)',
    'Aortic stenosis',
    'Cardiomyopathy associated with Duchenne’s muscular dystrophy (DMD)',
    'Pulmonary stenosis'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> This child has upper limb hypertension, weak femoral pulses, leg claudication, and an ejection systolic murmur radiating to the back, all of which are classic for coarctation of the aorta. The ECG shows LVH from pressure overload, and the chest X-ray may still appear normal in early disease.\n\n---\n\nThis is the adult (postductal) form of coarctation of the aorta, presenting exactly as described: an otherwise well child found to have systemic hypertension confined to the arm proximal to the narrowing (right arm, 160/90mmHg), diminished femoral pulses because the obstruction sits between the upper- and lower-body circulations, and leg claudication from the chronically reduced lower-limb blood flow. The ejection click and ejection systolic murmur, loudest at the right upper sternal edge but also heard at the mid-left sternal edge and the back, come from the bicuspid aortic valve that commonly accompanies coarctation, and the left ventricular hypertrophy on ECG reflects the chronic pressure overload the narrowing imposes on the left ventricle. A normal chest X-ray does not argue against the diagnosis -- rib notching and the "3 sign" are late, adult findings and are typically absent in a child.\n\n*Patent ductus arteriosus* produces a continuous, machinery-type murmur rather than an ejection systolic one, and does not cause hypertension confined to one arm or leg claudication. *Aortic stenosis* alone would not explain the arm-specific hypertension or the diminished femoral pulses -- its murmur radiates to the neck and carotids rather than to the back, and it produces no blood-pressure gradient between the arms and legs. *Cardiomyopathy associated with Duchenne\'s muscular dystrophy* affects boys of a similar age, but it produces a dilated, poorly contractile heart with signs of heart failure rather than an ejection click and a localised systolic murmur, and it has no mechanism for leg claudication or asymmetric hypertension. *Pulmonary stenosis* is loudest at the upper *left* sternal edge, not the right, and does not raise systemic blood pressure or reduce femoral pulses.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Arm hypertension, weak femoral pulses and leg claudication in a well child point to coarctation of the aorta.',
  source: 'Pediatrics endpoint part2.pdf p.785'
},
{
  id: 'pedep2-car-79',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'A 4-year-old girl is referred after her GP detects a heart murmur. On examination, she has webbed neck, low posterior hairline, a shield-shaped chest, and cubitus valgus. What is the most likely cause of the murmur?',
  options: [
    'Coarctation of the aorta',
    'Mitral regurgitation',
    'Patent ductus arteriosus',
    'Pulmonary stenosis'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> The girl shows classic features of Turner syndrome (webbed neck, low hairline, shield chest, cubitus valgus). The most common congenital heart defect in Turner syndrome is coarctation of the aorta, which explains the murmur.\n\n---\n\nThe examination findings -- webbed neck, low posterior hairline, a shield-shaped chest, and cubitus valgus -- are the classic stigmata of Turner syndrome (45,X0), and coarctation of the aorta is the cardiac lesion most strongly associated with it, which is why it is the murmur\'s most likely cause here. This contrasts with Noonan syndrome, a phenotypically similar short-stature syndrome that occurs in either sex with a normal karyotype and whose characteristic cardiac lesion is pulmonary stenosis rather than coarctation *(the specific Noonan-versus-Turner cardiac contrast is not taken from the course material, though each syndrome-lesion pairing individually is)* -- but this vignette\'s stigmata, in a girl, are Turner\'s rather than Noonan\'s. Turner syndrome also carries an increased incidence of bicuspid aortic valve, which often coexists with coarctation and can itself produce a systolic murmur, but coarctation remains the single lesion the syndrome is most classically taught with, and the one this question is built around.\n\n*Mitral regurgitation* is not a lesion associated with Turner syndrome; it is far more typically an acquired lesion from rheumatic heart disease or a feature of an atrioventricular septal defect. *Patent ductus arteriosus* is the cardiac lesion linked to congenital rubella syndrome, not Turner syndrome. *Pulmonary stenosis*, as above, is Noonan syndrome\'s lesion, and the phenotype described here is Turner\'s rather than Noonan\'s.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Turner syndrome\'s stigmata pair with coarctation of the aorta as its classic cardiac lesion.',
  source: 'Pediatrics endpoint part2.pdf p.787'
},
{
  id: 'pedep2-car-80',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'A 4-year-old boy is referred after a murmur was detected during a routine check for a respiratory infection. He is asymptomatic and thriving. On examination, he is pink with normal pulses, normal S1, normally split S2, and an ejection click at the left upper sternal edge. There is a grade 2/6 ejection systolic murmur loudest at the left upper sternal edge, radiating to the back. Diagnosis?',
  options: [
    'Pulmonary stenosis',
    'Aortic stenosis',
    'Ventricular septal defect',
    'Coarctation of the aorta'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Pulmonary stenosis produces a systolic murmur with ejection click at the upper left sternal edge radiating to the back.\n\n---\n\nThis is an uncomplicated presentation of pulmonary stenosis: an asymptomatic, thriving child with an incidentally detected murmur, normal pulses, a normal S1, and -- the key auscultatory signature -- an ejection click at the left upper sternal edge followed by a grade 2/6 ejection systolic murmur at the same location, radiating to the back. The ejection click is produced by the abrupt opening of a stiffened pulmonary valve and, characteristically, softens or disappears with inspiration as right ventricular filling increases. A normally split second sound is consistent with mild pulmonary stenosis; more severe stenosis widens and softens the pulmonary component of S2 rather than abolishing the split outright.\n\n*Aortic stenosis* is excluded by location and radiation: its murmur is loudest at the upper *right* sternal edge and radiates to the neck and carotids, not to the back. *Ventricular septal defect* produces a pansystolic, not ejection, murmur, typically loudest at the lower left sternal edge, without the click this vignette describes. *Coarctation of the aorta* would be expected to show diminished or absent femoral pulses and, often, a blood-pressure gradient between the arms and legs -- this child\'s pulses are explicitly normal throughout, which argues against it.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'An ejection click and murmur at the upper left sternal edge with normal pulses is pulmonary stenosis.',
  source: 'Pediatrics endpoint part2.pdf p.789'
},
{
  id: 'pedep2-car-81',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'cardiac',
  stem: 'An asymptomatic 3-year-old boy presents with a thrill above the sternal notch. He has a harsh ejection systolic murmur, grade 3/6, loudest at the right upper sternal edge, radiating to the carotids. Chest X-ray and ECG are normal. Diagnosis?',
  options: [
    'Aortic stenosis',
    'Pulmonary stenosis',
    'Coarctation of the aorta',
    'Mitral regurgitation'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Aortic stenosis causes a systolic murmur at the upper sternal edge with radiation to the carotids and a palpable thrill.\n\n---\n\nThis vignette is a clean presentation of aortic stenosis: an asymptomatic child with a harsh ejection systolic murmur at the right upper sternal edge radiating to the carotids, a palpable thrill above the sternal notch from transmission of the murmur along the great vessels into the neck, and a normal chest X-ray and ECG, consistent with mild-to-moderate, uncomplicated stenosis -- more severe disease would be expected to show left ventricular hypertrophy on ECG, with a downgoing T wave signalling left ventricular strain.\n\n*Pulmonary stenosis* is loudest at the upper *left* sternal edge and radiates little, rather than to the carotids, so the location and radiation both argue against it. *Coarctation of the aorta* typically produces a murmur heard between the shoulder blades rather than at the right upper sternal edge, along with reduced or delayed femoral pulses and an arm-to-leg blood-pressure gradient, none of which is described here. *Mitral regurgitation* gives a pansystolic, not ejection, murmur at the apex radiating to the axilla, an entirely different location and timing from the murmur described.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'A thrill at the sternal notch with a carotid-radiating murmur at the upper right sternal edge is aortic stenosis.',
  source: 'Pediatrics endpoint part2.pdf p.791'
}
