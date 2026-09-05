/* Peds endpoint part 2, section 8 "Neurological disorders", part D.
   n:46 - n:60 (section-global, continues part C which ends at n:45 per the page map).
   Pages addressed from content\peds\qb-pages\endpoint-p2-s08-page-map.md part D row:
   1049, 1051, 1053, 1055, 1057, 1059, 1061, 1063, 1065, 1067, 1069, 1071, 1073, 1075, 1077
   (all odd, final odd run of the section per the map's parity table). Twin is p-1 for all
   15 per the map (only 971/974 in part A lack a clean twin).
   OCR NOT opened. Source images read from the pre-built extraction cache
   (native JPEG + hires PNG under a sibling session's scratchpad ep2-index\, per brief SS2 --
   "the images are already extracted, do not re-run the extractor") after copying the needed
   pages into this session's own scratchpad.
   Boundary carried by this part: p.1077 is the section's last question (map), p.1078 its last
   page; both p.1078 and p.1079 rendered and read per prompt instruction before staging closed.

   CLOSED 2026-09-05. 15 entries, n:46-n:60, pp.1049-1077, all clean at check-part-ep.js.
   Printed number tracked n exactly at every page (pr==n throughout, 46..60) -- no drift found
   in this part. No figures on any of the 15 pages -- measured by looking at every page whole,
   none carried an image. No overflow box (all 15 answered pages print their own box on the
   same page; none needed a twin lookaround). No alternation break within this part's range
   (every page checked was the answered page, boxed, at p-1 from its twin, per the map).
   Boundary: p.1078 is a full-page Arabic supplication on a mauve background (no stem, no
   options, no box) -- matches the brief's SS3a "duplicate reprint / preceding slide" catalogue
   shape "a duplicate reprint... a full-page Arabic supplication closing the section" (p.244,
   section 3); NOT staged. p.1079 opens section 9 with the red banner "Diabetes & Endocrinology"
   on a cream card -- confirms the section-8/section-9 boundary exactly where the prompt and the
   page map both said it would be. Nothing in the map or the prompt was contradicted by the disk
   in this part. */

{ n:46, pr:46, p:1049, key:0,
  stem:'Brain death occurs after how many minutes of complete cerebral ischemia?',
  opts:['4–8 min','8–10 min','12–15 min','15–20 min'],
  expl:'The brain cannot survive without blood supply beyond 4–8 minutes, leading to irreversible brain death.',
  note:'Twin p.1048 identical plain printing, confirms stem/opts. Highlighted option a (4-8 min), boxed explanation below options. pr==n at this first page of the part.' }

{ n:47, pr:47, p:1051, key:0,
  stem:'Ahmed is a 5-year-old boy who presents to the outpatient clinic with weakness. His parents report that he finds it difficult to climb the stairs at home. This has been becoming progressively worse over the preceding 6–12 months. He is playing on the carpet with his brother when his mother calls him over, he has to roll from his back onto his front in order to stand up. Choose the sign that is being described.',
  opts:["Gowers sign","Kernig's sign","Brudzinski's sign","Babinski's sign","Dyskinesia"],
  expl:'Gowers sign: Characteristic maneuver where a child with proximal muscle weakness (commonly Duchenne muscular dystrophy) uses his hands to “climb up” his own body from the floor in order to stand.',
  note:'Highlighted option a (Gowers sign), boxed explanation beside options (not below). Legible directly on native image, twin not needed.' }

{ n:48, pr:48, p:1053, key:1,
  stem:'Amany is a 6-year-old girl who presents to the outpatient department with a history of recurrent headaches and deteriorating school performance. Her parents are very worried about her as they observed that she has a problem in walking. On further questioning she had been well with no preceding coryzal illness. On examination, she is very unsteady on feet and her power is reduced in her lower limbs. She has no obvious visual problems and seems able to follow objects at the clinic. What is the most likely underlying cause?',
  opts:['cerebral abscess','Brain tumor',"Guillain-Barre syndrome",'Septic meningitis','Viral encephalitis'],
  expl:'Chronic progressive symptoms with raised ICP and motor impairment strongly suggest a brain tumor',
  note:'Highlighted option b (Brain tumor), boxed explanation beside options. Legible directly on native image.' }

{ n:49, pr:49, p:1055, key:0,
  stem:'Dora is an 8-year-old girl who used to excel at school but is now underperforming. In clinic, she has brief episodes where she suddenly stops, stares ahead, flickers her eyelids for a few seconds, and then resumes her activity. Asking her to perform an action like blowing out an imaginary candle triggers the same episode. She is otherwise healthy. What is the most likely diagnosis?',
  opts:['Absence seizures','Focal seizures','Myoclonic seizures','Tonic-clonic seizures'],
  expl:'Absence seizures are brief staring episodes, sometimes with eyelid flutter, often provoked by hyperventilation',
  note:'Highlighted option a (Absence seizures), boxed explanation below options. Legible directly on native image.' }

{ n:50, pr:50, p:1057, key:0,
  stem:'Which of the following is a treatment modality in cerebral palsy?',
  opts:['Botulinum toxin','Resection of the affected brain area','Anticonvulsants only','Chemotherapy'],
  expl:'Botulinum toxin is used to reduce spasticity in CP. Other treatments include physiotherapy and supportive care, not brain resection or chemotherapy.',
  note:'Highlighted option a (Botulinum toxin), boxed explanation below options. Legible directly on native image.' }

{ n:51, pr:51, p:1059, key:3,
  stem:'A 3-year-old boy presents to his pediatrician because he is not able to stand steadily on his feet for one day. He had had diarrhea during the previous week. On examination she is afebrile, has reduced muscle power and tone and no tendon reflexes can be elicited in her lower limbs. He is referred urgently to the pediatric hospital and 6 hours later he is unable to stand and the tendon reflexes in his upper limbs are now absent. He has no other medical problems and has been fully immunized. What is the most likely diagnosis?',
  opts:['Disorder of neuromuscular transmission','Muscle disorder','Poliomyelitis','Guillain-Barre syndrome','Disorder of anterior horn cell'],
  expl:'GBS often follows infection, causing ascending symmetrical weakness with loss of reflexes.',
  note:'Highlighted option d (Guillain-Barre syndrome), boxed explanation beside options (between c and d). Legible directly on native image. Stem verbatim retains the printed he/she pronoun mix.' }

{ n:52, pr:52, p:1061, key:0,
  stem:'Douglas, a 7-year-old boy, presents with headaches over the last 3–5 weeks that have increased in intensity and wake him from sleep. He also has morning vomiting, double vision, and declining school performance. What is the most likely diagnosis?',
  opts:['Brain tumor','Migraine','Tension headache','Sinusitis'],
  expl:'Progressive headaches with vomiting and cranial nerve involvement suggest raised ICP from a brain tumor.',
  note:'Highlighted option a (Brain tumor), boxed explanation below options. Legible directly on native image.' }

{ n:53, pr:53, p:1063, key:2,
  stem:'Which of the following statements about headache is true?',
  opts:['Migraine is most commonly unilateral','Migraine is most commonly with aura','Tension headache is symmetrical and gradual','Cluster headache is most common in children'],
  expl:'Tension headaches are usually bilateral, pressure-like, and gradual, unlike migraine which is unilateral and throbbing.',
  note:'Highlighted option c (Tension headache is symmetrical and gradual), boxed explanation below options. Legible directly on native image. Primary-headache question -- section rulings note this topic is not taught in this module.' }

{ n:54, pr:54, p:1065, key:0,
  stem:"A 5-year-old boy presents to the out-patient's clinic with a progressive muscle weakness over 3 years, and his calf muscles feel firm. His calf circumference is unusually large given his age and history of weakness. A biopsy of his gastrocnemius would most likely show which of the following?",
  opts:['Fibrofatty replacement of muscle fibers','Hypertrophy of fast-twitch white muscle fibers','Increased proportion of slow-twitch red muscle fibres','Perivascular and interstitial inflammation of muscle fibers with groups of muscle fibre degeneration and regeneration','Preferential atrophy of type II fibers, particularly the fast-twitch glycolytic fibres (type 1B)'],
  expl:'This is Duchenne muscular dystrophy, where muscle fibers are replaced by fat and connective tissue, causing calf enlargement.',
  note:'Highlighted option a (Fibrofatty replacement of muscle fibers), boxed explanation below options. Legible directly on native image. Options keep the printed fibers/fibre/fibres spelling variation verbatim.' }

{ n:55, pr:55, p:1067, key:2,
  stem:"A 9-year-old boy has a one-year history of progressive weakness, finding it more difficult to stand from a sitting position at home, and climb stairs at school. He had chickenpox when he was four years of age, and received all his childhood vaccinations as normal. Apparently, his maternal grandfather suffered from a similar condition, but died in a narrowboat accident at the age of 32. On examination, he is of normal height. Cranial nerves and higher mental function are normal. He has normal tone and reflexes in his limbs with weakness predominant in his arms and legs. There is no evident muscle wasting, and in fact the calf muscles seem particularly well formed. Cranial nerve and sensory examinations are entirely normal. Which one of these is the most likely diagnosis?",
  opts:['Limb-girdle muscular dystrophy',"Duchenne's muscular dystrophy","Becker's muscular dystrophy",'Facioscapulohumeral dystrophy','Myasthenia gravis'],
  expl:"Becker's is a milder, later-onset form of dystrophinopathy, with slower progression compared to Duchenne.",
  note:'Highlighted option c (Becker\'s muscular dystrophy), boxed explanation beside options. Legible directly on native image.' }

{ n:56, pr:56, p:1069, key:1,
  stem:'The following is RIGHT regarding Guillain-Barre Syndrome:',
  opts:['CSF is diagnostic in early cases','Dysphagia, aspiration, and respiratory failure may occur','Mild cases at presentation could be home treated','Residual neurologic damage commonly occurs in children','Bilateral asymmetrical ascending paralysis is characteristic'],
  expl:'Severe GBS can cause bulbar weakness and respiratory muscle involvement, requiring ICU support.',
  note:'Highlighted option b (Dysphagia, aspiration, and respiratory failure may occur), boxed explanation below options. Legible directly on native image.' }

{ n:57, pr:57, p:1071, key:2,
  stem:'A 4-year-old boy is brought to you in the clinic for an abnormality in walking. You formulate a list of differentials, but would like to run some further tests to aid diagnosis. Which of the following options correctly matches the disease listed to its most accurate diagnostic finding?',
  opts:['Becker muscular dystrophy: absent dystrophin protein in muscle biopsy','Dermatomyositis: polyphasic short motor potentials with spontaneous fibrillations in EMG','Duchenne muscular dystrophy: high CK levels','Guillain-Barre syndrome: decrease in propagation of electrical impulses in nerve conduction studies','Septic arthritis effusion detected in joint ultrasound'],
  expl:'DMD shows very high serum creatine kinase due to ongoing muscle breakdown.',
  note:'Highlighted option c (Duchenne muscular dystrophy: high CK levels), boxed explanation below options. Legible directly on native image.' }

{ n:58, pr:58, p:1073, key:1,
  stem:'A 6-year-old boy is admitted with first episode of seizures. He had sore throat 2 weeks ago. Mother noticed altered color of his urine since 2 days. On examination, he is afebrile and has puffiness around the eyes. His ASO titer is raised. What is the MOST likely cause of seizures in this child?',
  opts:['Hypovolemia','Hypertension','Low serum calcium','Thrombosis','Low serum albumin'],
  expl:'Acute post-streptococcal glomerulonephritis causes hypertension, which can lead to hypertensive encephalopathy and seizures.',
  note:'Highlighted option b (Hypertension), boxed explanation below options. Legible directly on native image. Nephrology-driven seizure question, not primary neurology.' }

{ n:59, pr:59, p:1075, key:0,
  stem:'A girl experienced diarrhea 3 days before, manifestation "progressive weakness and inability to walk. Examination reveals marked peripheral symmetrical muscles weakness without atrophy. Deep tendon reflexes were absent in the ankles and 1+ in the knees. The MOST likely diagnosis is:',
  opts:['Guillain-Barré syndrome','Transverse myelitis','Myasthenia gravis','Muscular dystrophy','Poliomyelitis'],
  expl:'Symmetrical weakness after infection with absent reflexes is classic for GBS.',
  note:'Highlighted option a (Guillain-Barré syndrome), boxed explanation below options. Legible directly on native image. Stem verbatim keeps the printed unmatched opening quote before "progressive" and this page\'s accented "Barré" spelling (unlike pp.1059/1069/1071 which print "Barre").' }

{ n:60, pr:60, p:1077, key:0,
  stem:'A baby presents with convulsions. On examination, he has a large head and a wide anterior fontanelle. What is the most appropriate initial management?',
  opts:['IV calcium gluconate','Oral acetazolamide','Observation only','Immediate lumbar puncture'],
  expl:'A seizing infant should first be managed for reversible metabolic causes. Hypocalcemia is a common and treatable cause of neonatal convulsions. Giving IV calcium gluconate is the safest initial step. Lumbar puncture is contraindicated because signs (large head, wide fontanelle) suggest raised intracranial pressure.',
  note:'Highlighted option a (IV calcium gluconate), boxed explanation below options; the phrase "Giving IV calcium gluconate" is printed bold/red inside the box, transcribed as plain text here (formatting not carried). Legible directly on native image. Last question of the section per the page map -- section-8 closing entry.' }
