/* peds endpoint part 2, section 15 "Model Final Exam 4", pp.1757-1921, QUARTER C (n41-n60).
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf. Never modified/rendered here --
   page images read from the pre-extracted cache:
   C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\
   0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\native\pNNNN.jpeg (800x450 ceiling).
   OCR index (content\peds\qb-pages\ocr\ep2\) NOT opened -- this is a staging pass, OCR is a
   search index only, never a source.

   Section 15 does NOT obey a page formula; explicit page list from the task prompt used verbatim,
   never computed:
     n41=1842  n42=1844  n43=1846  n44=1848  n45=1850
     n46=1852  n47=1854  n48=1856  n49=1858  n50=1860
     n51=1862  n52=1864  n53=1867  n54=1869  n55=1871
     n56=1873  n57=1875  n58=1877  n59=1879  n60=1881
   n52 overflow box printed alone on p.1865 (n52's own page is p.1864) -- box:1865. Task prompt
   pre-confirmed p.1865 is early-onset neonatal sepsis, prolonged rupture of membranes over 24h,
   GBS commonest cause, bold+underlined on pale yellow strip -- EMPHASIS STYLING, NOT an answer-key
   highlight; no question number, no option list on that page.

   `n` here is QUARTER-C's own local range n41-n60 as assigned by the task prompt (page-map.md
   confirms this range matches; this quarter's explicit ownership).
   key is a 0-based index into opts (A=0, B=1, C=2, D=3, E=4...). p is the ANSWERED page (the one
   staged from).

   Question-number walk (pr vs n), page by page -- pr = n+1 held constant across the whole quarter,
   no divergence anywhere in n41-n60:
     n41 pr=42 p=1842   n42 pr=43 p=1844   n43 pr=44 p=1846   n44 pr=45 p=1848
     n45 pr=46 p=1850   n46 pr=47 p=1852   n47 pr=48 p=1854   n48 pr=49 p=1856
     n49 pr=50 p=1858   n50 pr=51 p=1860   n51 pr=52 p=1862   n52 pr=53 p=1864 (box:1865)
     n53 pr=54 p=1867   n54 pr=55 p=1869   n55 pr=56 p=1871   n56 pr=57 p=1873
     n57 pr=58 p=1875   n58 pr=59 p=1877   n59 pr=60 p=1879   n60 pr=61 p=1881

   n52 is a 4-option question (A-D only, no E) -- confirmed on both native and hires, not a render
   cutoff. All other 19 entries carry 5 options. No figures anywhere in this quarter (every answered
   page was read whole; zero measured, not assumed). Boundary check: p.1883, one page past this
   quarter's last page, prints pr=62 -- clean handoff into quarter D, no gap, no overlap.
*/

{ n:41, pr:42, p:1842, key:4,
  stem:'A baby has bilaterally undescended testes. Genitalia appear to be male. Which is the most important initial investigation?',
  opts:['Karyotype with FISH for sex-determining region of the Y chromosome','Abdominal ultrasound scan','Abdominal CT scan','17-Hydroxyprogesterone levels','Urea and electrolytes (U&Es)'],
  expl:'In a newborn with bilateral undescended testes, the most urgent concern is salt-wasting congenital adrenal hyperplasia (CAH), which can cause life-threatening electrolyte imbalances. Therefore, urea and electrolytes (U&Es) should be checked immediately. Further tests like karyotype, ultrasound, and 17-hydroxyprogesterone are done after stabilization to confirm the diagnosis and assess anatomy.',
  note:'Read directly off p.1842 native JPEG, fully legible, no crop or twin needed. Key E (index 4, "Urea and electrolytes (U&Es)") highlighted yellow, bold+underline. No figure. pr=42 vs n=41 -- one ahead, watching whether this offset holds.' }

{ n:42, pr:43, p:1844, key:2,
  stem:'An 8-year-old boy is referred by the educational psychologist with a suspected diagnosis of ADHD (attention deficit hyperactivity disorder).\nHe has been struggling at school and finds it hard to concentrate on an activity. Teachers have been finding it hard to manage his behavior as he is restless and constantly running around the classroom.\nWhich of the following would suggest a diagnosis other than ADHD?',
  opts:['Easily distracted by other children','Difficulty waiting for his turn','Symptoms only present at school','Constantly talking, often interrupting others','Fidgeting with his hands or objects while sitting still'],
  expl:'ADHD symptoms are usually present in multiple settings. If issues appear only at school, another cause like situational stress is more likely.',
  note:'Read directly off p.1844 native JPEG, fully legible, no crop or twin needed. Key C (index 2, "Symptoms only present at school") highlighted yellow, bold+underline. Box sits beside options D/E but text fully readable, no overlap. No figure. pr=43 vs n=42 -- offset holds.' }

{ n:43, pr:44, p:1846, key:2,
  stem:'A 4-year-old boy is referred to his GP by his teacher at nursery.\nShe has noticed that he has delayed speech and only has a handful of words. He struggles with imaginative play and usually plays alone. He becomes upset if there is a change to the daily routine. During the surgery, he does not make eye contact. There are no dysmorphic features.\nWhat is the most likely diagnosis?',
  opts:['Selective mutism','Normal development','Autism','Speech delay','Fragile X'],
  expl:'Delayed speech, lack of eye contact, repetitive behaviors, and resistance to routine are classic features of autism.',
  note:'Read directly off p.1846 native JPEG, fully legible, no crop or twin needed. Key C (index 2, "Autism") highlighted yellow, bold. Box sits beside options C/D but text fully readable. No figure. pr=44 vs n=43 -- offset holds.' }

{ n:44, pr:45, p:1848, key:4,
  stem:'A 6-year-old boy is brought to the GP with bedwetting.\nHis mother is concerned that he has never been dry at night and wants to know if this is normal.\nWhich of the following statements regarding nocturnal enuresis is correct?',
  opts:['It is commonly due to urinary tract infection','Children are commonly dry at night by age 4','Primary nocturnal enuresis is commonly related to stressful events','Cutting down fluid in the evening is ineffective','Bell-alarms may be helpful in children who sleep very deeply'],
  expl:'Nocturnal enuresis often improves with behavioral interventions; bell alarms can condition children who sleep deeply to wake with a full bladder.',
  note:'Read directly off p.1848 native JPEG, fully legible, no crop or twin needed. Key E (index 4, "Bell-alarms may be helpful in children who sleep very deeply") highlighted yellow, bold+underline. No figure. pr=45 vs n=44 -- offset holds.' }

{ n:45, pr:46, p:1850, key:4,
  stem:'A 9-year-old girl is brought to her GP with a 2-month history of headaches.\nWhich of the following features of her headaches is not a red-flag symptom?',
  opts:['Associated with vomiting','Morning headache','Worse on lying down','Presence of focal neurology','Symmetrical, band-like in nature'],
  expl:'Red-flag headache features include vomiting, morning headaches, worsening when lying down, or focal neuro signs. A band-like headache is typically tension-type and not a red flag.',
  note:'Read directly off p.1850 native JPEG, fully legible, no crop or twin needed. Key E (index 4, "Symmetrical, band-like in nature") highlighted yellow, bold+underline. No figure. pr=46 vs n=45 -- offset holds.' }

{ n:46, pr:47, p:1852, key:0,
  stem:'A 14-month-old is seen in clinic as his mother is concerned that he may be having seizures.The episodes occur when he is angry or upset. He has color change followed by collapse and occasional jerking movements.\nThe most likely diagnosis is:',
  opts:['Breath-holding spells',"Tet' spells",'Myoclonic epilepsy','Non-epileptic seizure','Vasovagal syncope'],
  expl:'Episodes triggered by anger or frustration with color change and brief loss of consciousness are classic breath-holding spells, which are benign and self-limiting.',
  note:'Read directly off p.1852 native JPEG, fully legible, no crop or twin needed. Key A (index 0, "Breath-holding spells") highlighted yellow, bold+underline. No figure. pr=47 vs n=46 -- offset holds. Stem missing space before "The episodes" transcribed verbatim.' }

{ n:47, pr:48, p:1854, key:1,
  stem:'A 6-year-old boy is falling behind at school.His mother is concerned he is inattentive. She describes him daydreaming frequently, during which time it is difficult to attract his attention. Routine blood tests are normal. An EEG demonstrates spikes at 3 Hz.\nThe likely diagnosis is:',
  opts:['ADHD-inattentive form','Absence seizures','Juvenile myoclonic epilepsy','Daydreaming','Non-epileptic seizures'],
  expl:'Frequent daydreaming with 3 Hz spike-and-wave EEG is characteristic of absence seizures, not ADHD.',
  note:'Read directly off p.1854 native JPEG, fully legible, no crop or twin needed. Key B (index 1, "Absence seizures") highlighted yellow, bold+underline. Number "3 Hz" clearly legible in stem and box, no crop needed. No figure. pr=48 vs n=47 -- offset holds. Stem missing space before "His mother" transcribed verbatim.' }

{ n:48, pr:49, p:1856, key:3,
  stem:'A 5-month-old boy is brought in by his mother. She is concerned that he is frequently irritable. She is worried he may be in pain as he tenses and bends his head up, flailing his arms for a few seconds at a time. An EEG is performed, which shows large-amplitude slow waves with spikes and sharp waves. The most likely diagnosis is which of the following?',
  opts:['Absence seizures','Benign rolandic epilepsy','Gastro-oesophageal reflux','West syndrome (infantile spasms)','Breath-holding attacks'],
  expl:'Infantile spasms show sudden flexion/extension of limbs, irritability, and EEG with hypsarrhythmia (high-amplitude slow waves with spikes).',
  note:'Read directly off p.1856 native JPEG, fully legible, no crop or twin needed. Key D (index 3, "West syndrome (infantile spasms)") highlighted yellow, bold+underline. No figure. pr=49 vs n=48 -- offset holds.' }

{ n:49, pr:50, p:1858, key:0,
  stem:'A 12-year-old girl with known epilepsy is brought in by ambulance. She has been intubated for 15 minutes. Her parents administered buccal midazolam 5 minutes later as part of her rescue regimen. On arrival, tonic-clonic movements are ongoing. The ambulance crew has inserted a cannula and is giving high-flow oxygen via facemask. What is the next step in management?',
  opts:['Intravenous lorazepam','Rectal diazepam','Rapid sequence induction','Loading dose of phenytoin','Intravenous phenobarbital'],
  expl:'Ongoing status epilepticus after rescue midazolam requires IV benzodiazepines as the next step; rectal diazepam is for prehospital use.',
  note:'Read directly off p.1858 native JPEG, fully legible, no crop or twin needed. Key A (index 0, "Intravenous lorazepam") highlighted yellow, bold+underline. Stem prints "intubated for 15 minutes" (likely meant seizing/fitting, not intubated) -- transcribed verbatim, not corrected. Numbers "15 minutes"/"5 minutes" clearly legible. No figure. pr=50 vs n=49 -- offset holds.' }

{ n:50, pr:51, p:1860, key:1,
  stem:'An 8-year-old girl presents with a second generalized tonic-clonic seizure. It required lorazepam to terminate the seizure, and a decision is made to start anti-epileptic treatment. Which of the following is first-line therapy?',
  opts:['Phenobarbital','Sodium valproate','Vigabatrin','Ethosuximide','Phenytoin'],
  expl:'For generalized tonic-clonic seizures in children, sodium valproate is considered first-line therapy.',
  note:'Read directly off p.1860 native JPEG, fully legible, no crop or twin needed. Key B (index 1, "Sodium valproate") highlighted yellow, bold+underline. No figure. pr=51 vs n=50 -- offset holds.' }

{ n:51, pr:52, p:1862, key:1,
  stem:'At a routine health visitor consultation, a 12-month-old boy is noticed to be cruising around the furniture, responding to his mama, and says "mama" and "papa." He is holding something in his left hand, and his father informs the health visitor that he only uses his left hand.\nWhat is the most likely finding here?',
  opts:['Normal developmental milestones','Fine motor delay','Speech and language delay','Play and social delay','Global delay'],
  expl:'This 12-month-old boy shows normal gross motor, speech, and social development but displays consistent left-hand preference, which is atypical for his age and may suggest subtle right-hand weakness or fine motor delay. While no other delays are evident, early hand dominance warrants monitoring to rule out underlying issues like hemiparesis.',
  note:'Read directly off p.1862 native JPEG, fully legible, no crop or twin needed. Key B (index 1, "Fine motor delay") highlighted yellow, bold+underline. No figure. pr=52 vs n=51 -- offset holds.' }

{ n:52, pr:53, p:1864, box:1865, key:1,
  stem:'A full-term girl was born weighing 4 kg by normal vaginal delivery, and the membranes had ruptured 24 hours previously. At 6 hours of age, she was noted to be breathing fast and have a low temperature. She has not breastfed since birth and has had one vomit. On examination, she is lethargic and her core temperature is 35.5°C. She has a respiratory rate of 90 breaths/min, a central capillary refill time of 4 seconds, pulse 180/min, and oxygen saturation 89% in air. Her chest X-ray shows consolidation at the right base.\nWhat is the most likely causative organism for her infection?',
  opts:['Escherichia coli (E. coli)','Group B streptococcus','Staphylococcus aureus','Streptococcus pneumoniae'],
  expl:'This full-term baby shows signs of early-onset neonatal sepsis: respiratory distress, lethargy, hypothermia, poor feeding, and chest X-ray consolidation. The major risk factor here is prolonged rupture of membranes (>24 hours). Group B streptococcus is the most common cause of early-onset neonatal sepsis and pneumonia, transmitted from the mother during birth.',
  note:'Answered page p.1864 read on native JPEG and confirmed on hires -- only FOUR options (A-D) are printed, no E; confirmed by full-page hires render, not a rendering cutoff. Key B (index 1, "Group B streptococcus") highlighted yellow, bold+underline. Box overflowed onto its own page p.1865 (task prompt pre-confirmed content); expl transcribed verbatim from p.1865 native JPEG, which sets "early-onset neonatal sepsis" and "prolonged rupture of membranes (>24 hours)" in bold red italic and "Group B streptococcus" in red italic -- reproduced as plain text, styling not encoded. p.1865 carries no question number and no option list -- emphasis styling inside prose, not an answer-key highlight, per task prompt warning. Numbers 4 kg / 24 hours / 6 hours / 35.5°C / 90 breaths/min / 4 seconds / 180/min / 89% all read directly off p.1864 native JPEG, clearly legible, no crop needed. No figure. pr=53 vs n=52 -- offset holds.' }

{ n:53, pr:54, p:1867, key:3,
  stem:'A 10-month-old boy presented to the emergency room with convulsions. He had a history of mild diarrhea for 3 days and was afebrile. He had no past history of convulsions. Examination revealed a large head with a wide anterior fontanelle, prominent costochondral junctions, and broad wrists. His eyes and skin pinch were normal, and rectal temperature was 37.8°C.\nWhat investigation is most likely to reveal the cause of his convulsions?',
  opts:['CT brain','EEG','Coagulation profile','Serum calcium','Skull X-ray'],
  expl:'Clinical signs of rickets (wide wrists, costochondral junction prominence) suggest hypocalcemia; serum calcium is the key investigation.',
  note:'Read directly off p.1867 native JPEG, fully legible, no crop or twin needed. Key D (index 3, "Serum calcium") highlighted yellow, bold+underline. Numbers "3 days" / "37.8°C" clearly legible. No figure. pr=54 vs n=53 -- offset holds (step 1864->1867 through box page 1865 as expected).' }

{ n:54, pr:55, p:1869, key:2,
  stem:'A 5-week-old baby boy is brought into the emergency department with a 48-hour history of projectile vomiting. The infant is hungry after vomiting and has not opened his bowels in 3 days. Clinical examination reveals a mass in the right upper quadrant region. A blood gas is performed.\nWhat finding in this blood gas is expected to be present?',
  opts:['Normal findings','Metabolic acidosis','Metabolic alkalosis','Respiratory acidosis','Respiratory alkalosis'],
  expl:'Projectile, non-bilious vomiting in pyloric stenosis leads to loss of gastric acid, causing hypochloremic metabolic alkalosis.',
  note:'Read directly off p.1869 native JPEG, fully legible, no crop or twin needed. Key C (index 2, "Metabolic alkalosis") highlighted yellow, bold+underline. Numbers "48-hour" / "3 days" clearly legible. No figure. pr=55 vs n=54 -- offset holds.' }

{ n:55, pr:56, p:1871, key:3,
  stem:"A 3-year-old girl is 'blue-lighted' into the local emergency department with reduced consciousness. Her mother informs the paramedic that her daughter has been unwell for the last 8 days with vomiting and profuse diarrhea. On arrival, she is apyrexial, has a heart rate of 170 beats per minute and respiratory rate of 20 per minute. Her systolic blood pressure is 75 mm Hg and she has a capillary refill time of 5 seconds. She is barely responsive to pain. Resuscitation begins and a blood gas reveals a metabolic acidosis.What is the most likely clinical syndrome?",
  opts:['Anaphylactic shock','Septicemic shock','Cardiogenic shock','Hypovolemic shock','Neurogenic shock'],
  expl:'Severe dehydration from prolonged vomiting and diarrhea leads to hypovolemic shock, evidenced by hypotension, poor perfusion, and metabolic acidosis.',
  note:'Read directly off p.1871 native JPEG, fully legible, no crop or twin needed. Key D (index 3, "Hypovolemic shock") highlighted yellow, bold+underline. Numbers "8 days" / "170 beats per minute" / "20 per minute" / "75 mm Hg" / "5 seconds" all clearly legible. No figure. pr=56 vs n=55 -- offset holds.' }

{ n:56, pr:57, p:1873, key:4,
  stem:'A 2-year-old previously healthy boy is found to be cyanosed while playing with his toys. When brought to the emergency department, his HR was 164/min, RR was 70/min, SaO2 was 80% on room air, and he was gasping for air.\nWhat is the most likely diagnosis?',
  opts:['Acute bronchiolitis','Congenital heart disease','Viral croup','Bronchopneumonia','Foreign body aspiration'],
  expl:'Acute cyanosis, gasping, and localized airway obstruction in a previously healthy child strongly suggest foreign body aspiration.',
  note:'Read directly off p.1873 native JPEG, fully legible, no crop or twin needed. Key E (index 4, "Foreign body aspiration") highlighted yellow, bold+underline. "SaO2" printed with the 2 as a plain (non-subscript) digit -- transcribed as printed, ASCII "SaO2". Numbers "164/min" / "70/min" / "80%" clearly legible. No figure. pr=57 vs n=56 -- offset holds.' }

{ n:57, pr:58, p:1875, key:2,
  stem:'A 2-year-old boy is brought into the emergency department by ambulance at night with an acute history of cough and stridor following a 2-day history of coryzal symptoms. On examination, he is afebrile but has marked intercostal recession with stridor and a barking cough is heard.\nWhat is the most likely common causative organism?',
  opts:['Adenovirus','Respiratory syncytial virus','Parainfluenza virus','Rhinovirus','Influenza virus'],
  expl:'Barking cough, stridor, and coryza in a young child are classic for croup, most commonly caused by parainfluenza virus.',
  note:'Read directly off p.1875 native JPEG, fully legible, no crop or twin needed. Key C (index 2, "Parainfluenza virus") highlighted yellow, bold+underline. No figure. pr=58 vs n=57 -- offset holds.' }

{ n:58, pr:59, p:1877, key:4,
  stem:'A 15-year-old boy presents to hospital with malaise, fever, and mild jaundice over the last week. On examination, there is intense inflammation of the tonsils with discharge, splenomegaly, and cervical lymphadenopathy.\nWhat is the most likely cause of his illness?',
  opts:['Acute lymphoblastic leukemia','Beta hemolytic Streptococcus','Hepatitis A infection','Non-Hodgkin lymphoma','Epstein-Barr infection (EBV)'],
  expl:'Sore throat, fever, splenomegaly, and lymphadenopathy in a teenager suggest infectious mononucleosis due to EBV.',
  note:'Read directly off p.1877 native JPEG, fully legible, no crop or twin needed. Key E (index 4, "Epstein-Barr infection (EBV)") highlighted yellow, bold+underline. No figure. pr=59 vs n=58 -- offset holds.' }

{ n:59, pr:60, p:1879, key:3,
  stem:"A 6-year-old boy with known asthma has been brought in by ambulance to the local emergency department with an acute severe exacerbation. He has already received salbutamol and ipratropium nebulizers together with intravenous steroids. Upon reassessment, he appears exhausted with varying responsiveness. High-flow oxygen is needed to maintain his saturations, and auscultation of his chest reveals minimal breath sounds.\nWhat is the next most important step in this child's care?",
  opts:['Reassess 30 minutes later','Give intravenous antibiotics','Give high dose inhaled steroids','Give intravenous salbutamol','Give inhaled long-acting beta agonist'],
  expl:'A child with severe asthma, exhaustion, minimal breath sounds, and high oxygen requirement needs IV salbutamol as the next life-saving step.',
  note:'Read directly off p.1879 native JPEG, fully legible, no crop or twin needed. Key D (index 3, "Give intravenous salbutamol") highlighted yellow, bold+underline. No figure. pr=60 vs n=59 -- offset holds.' }

{ n:60, pr:61, p:1881, key:0,
  stem:'A 2-year-old girl is admitted with a 3-day history of coryzal symptoms followed by an acute history of breathing difficulty. She was previously well and is otherwise fit. The parents are non-smokers and have no history of atopic disorders. She is thriving, and on examination, she has widespread wheeze with no crepitations.\nWhat is the most likely diagnosis?',
  opts:['Viral episodic wheeze','Asthma','Heart failure','Bronchiolitis','Recurrent aspiration'],
  expl:'A young child with wheezing following viral infection and no chronic atopy is most likely experiencing viral-induced episodic wheeze.',
  note:'Read directly off p.1881 native JPEG, fully legible, no crop or twin needed. Key A (index 0, "Viral episodic wheeze") highlighted yellow, bold+underline. No figure. pr=61 vs n=60 -- offset holds. LAST ENTRY OF QUARTER C. Boundary proof: p.1883 (one page past this quarter, outside my range) prints pr=62, "An 18-month-old girl presents to her family doctor with coryza..." with key E (Common cold) highlighted -- confirms clean continuation into quarter D territory, no gap or overlap.' }
