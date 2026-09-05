/* Peds ENDPOINT PART 2 -- section 8 "Neurological disorders" -- STAGING part B, n:16-30.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (READ-ONLY, never modified).
   Pages staged (answered only), per task prompt / page-map.md run 4 (974-1036, even parity):
   988, 990, 992, 994, 996, 998, 1000, 1002, 1004, 1006, 1008, 1010, 1012, 1014, 1016.
   Rendered locally with pdftoppm -jpeg -r 150 to session scratchpad ep2-s08-B\ (the shared
   <SCRATCH>\ep2-index cache named in the brief did not exist in this session -- rendered fresh).
   OCR NOT opened for this pass (per brief section 4) -- page structure taken from task prompt
   and endpoint-p2-s08-page-map.md only.
   This is a STAGING HALF: bare {...} object literals separated by one blank line, NO commas,
   NO array wrapper -- merge-parts-ep2.js restores both. node --check on this file will fail
   meaninglessly; validate with node tools/bank-harness/check-part-ep.js <this file>.

   Header extended as entries are appended. Question-number walk (pr) recorded per entry below.

   FINAL, 15/15 staged, n:16-30, all validated clean with check-part-ep.js.
   Question-number walk: pr 16,17,18,19,20,21,22,23,24,25,26,27,28,29,30 -- pr === n throughout,
   NO drift anywhere in this run (every printed number equals its n).
   Options a/A style: pages 988-1006 print options as A/B/C/D(/E) uppercase; pages 1008-1016
   print them lowercase a/b/c/d(/e) -- transcribed exactly as printed on each page, not normalised.
   Option counts: 12 entries with 5 options, 3 entries with only 4 (n19, n20's twin has 5 but n19
   itself has 4; n28 has 4). No entry had fewer than 4 or more than 5.
   No figures anywhere in this run -- every one of the 15 answered pages was read whole and none
   printed an image; this is a measured zero, not an assumed one.
   No overflow explanation box on its own page in this run -- every answered page's box (or absence
   of one) sits on the same page as its question; all 15 pages DID print a box (none blank).
   No alternation break in this run -- strict answered/unanswered/answered/unanswered pairing held
   for all 15 pages, twin always at p-1, matching the page-map's "run 4, even parity, twin at p-1"
   prediction exactly.
   Shared option menu observed: n17 (p.990), n18 (p.992) and n20 (p.996) all print the same
   5-option ladder (Babinski's/Romberg's/Gower's/Kernig's sign, Chorea) -- recorded as a pairing
   in each entry's note, NOT folded. n19 (p.994) prints only 4 of those 5 (no Chorea).
   Numbers/units checked: "3 Hz" (n22, p.1000), "1+" (n26, p.1008), "24 hours"/"15 minutes" (n27,
   p.1010) -- all read plainly off the 150 dpi render, no superscript/exponent ambiguity anywhere
   in this run; none needed a 300 dpi crop.
   No page in this run disagreed with the page-map's prediction (run 4, pp.974-1036, even-page
   answered parity, clean twin at p-1) -- the two flagged uncertain twins (971/974) are outside
   this part's range (they belong to part A).
   Boundary proof: p.1017 rendered and read -- prints pr:31 ("A child presents with headache,
   decreased school performance, unsteady gait, and weakness in the upper limb...", plain/
   unanswered, options a-d only) -- confirms the part B/C boundary falls cleanly after p.1016,
   matching the page map's part C start at p.1018.
*/

{ n:16, pr:16, p:988, key:3,
  stem:'Andrew is a 5-year-old boy with severe learning difficulties who attends a special school. He is seen in his review clinic. His epilepsy is difficult to control and he is on two different antiepileptic medications. He has several different types of seizures: sudden stiffening of his limbs causing him to fall, episodes of staring blankly ahead for up to 30 seconds before resuming previous activities, and episodes of his head dropping with a brief loss of consciousness. He is fed via gastrostomy and has chronic drooling. What is the most likely diagnosis?',
  opts:['Childhood Rolandic epilepsy (benign epilepsy with centrotemporal spikes)','Childhood absence epilepsy','Juvenile myoclonic epilepsy','Lennox-Gastaut syndrome'],
  expl:'Multiple seizure types, developmental delay, and drug resistance suggest Lennox-Gastaut syndrome. It typically begins in early childhood and includes atonic, tonic, and absence seizures.',
  note:'p.988 answered (D highlighted yellow, underlined, bold). Twin at p.987 confirmed identical stem and options plain, no highlight, no box -- consistent with the answered/unanswered pair. Key seen highlighted: option D, "Lennox-Gastaut syndrome".' }

{ n:17, pr:17, p:990, key:2,
  stem:'Ahmed is a 5-year-old boy who presents to the outpatient clinic with weakness. His parents report that he finds it difficult to climb the stairs at home. This has been becoming progressively worse over the preceding 6–12 months. He is playing on the carpet with his brother when his mother calls him over. He has to roll from his back onto his front in order to stand up. What is the sign being described in this clinical scenario?',
  opts:["Babinski's sign","Romberg's sign","Gower's sign","Kernig's sign",'Chorea'],
  expl:'Gower’s sign indicates proximal muscle weakness, as seen when a child must use their hands to push off from the floor. It’s characteristic of muscular dystrophies such as Duchenne’s.',
  note:'p.990 answered (C highlighted yellow, underlined, bold). Twin at p.989 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option C, "Gower\'s sign".' }

{ n:18, pr:18, p:992, key:0,
  stem:'Christopher attends an outpatient clinic for his routine follow-up. He is a 3-year-old boy who did not breathe at birth. Following resuscitation, he required intensive care for the first 5 days of life. He now has increased tone and reflexes in his right upper and lower limbs. On rubbing a blunt instrument up the lateral side of his right foot, there is extension of the great toe and fanning of the other toes. Which of the following is the sign being described in this clinical scenario?',
  opts:["Babinski's sign","Romberg's sign","Gower's sign","Kernig's sign",'Chorea'],
  expl:'Extension of the great toe and fanning of the other toes on plantar stimulation is a positive Babinski sign, indicating an upper motor neuron lesion. It’s abnormal beyond infancy.',
  note:'p.992 answered (A highlighted yellow, underlined, bold). Twin at p.991 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option A, "Babinski\'s sign". Same 5-option menu as pr17/n17 (p.990) -- SHARED MENU, recorded per brief section 7, not folded; discriminating token here is the plantar/Babinski-response stem vs the Gower/proximal-weakness stem at n17.' }

{ n:19, pr:19, p:994, key:1,
  stem:'Sayeed is an 8-year-old Pakistani boy who has developed muscle weakness. His mother reports that he has poor coordination at home and school. His speech has also recently become slurred. His symptoms have gradually progressed over the last 12–18 months. He has no other medical history and is not on any medications. On examination, you notice wasting of his calves. When standing upright with his legs together and closing his eyes, he becomes unsteady and starts to sway. Which of the following is the sign being described in this clinical scenario?',
  opts:["Babinski's sign","Romberg's sign","Gower's sign","Kernig's sign"],
  expl:'Romberg’s sign is positive when a patient becomes unsteady with eyes closed, indicating a proprioceptive or sensory ataxia. This can occur in conditions affecting the dorsal columns or peripheral nerves.',
  note:'p.994 answered (B highlighted yellow, underlined, bold). Twin at p.993 confirmed identical stem and options plain, no highlight, no box. Only 4 options printed here (A-D), no E -- differs from the 5-option menu at n17/n18. Key seen highlighted: option B, "Romberg\'s sign".' }

{ n:20, pr:20, p:996, key:3,
  stem:'Paolo is a 7-year-old boy who presents to the Accident and Emergency Department with fever. His mother reports that he has had fever for the last 8 hours and that he is sleepy and prefers to stay in a dark room. He has no prior medical history. On examination, you note that he is photophobic. While lying on the couch, you flex his right knee and hip to 90°. Upon fully extending the knee, he complains of pain and arches his back. Which of the following is the sign being described in this clinical scenario?',
  opts:["Babinski's sign","Romberg's sign","Gower's sign","Kernig's sign",'Chorea'],
  expl:'Pain and resistance when extending the knee from a flexed hip position suggests meningeal irritation. This is a classic sign of meningitis.',
  note:'p.996 answered (D highlighted yellow, underlined, bold). Twin at p.995 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option D, "Kernig\'s sign". Same 5-option sign-menu family as n17/n18 (Babinski/Romberg/Gower/Kernig/Chorea) -- SHARED MENU across n17,18,20 (n19 prints only 4 of the 5); discriminating token here is the Kernig manoeuvre / meningismus stem.' }

{ n:21, pr:21, p:998, key:0,
  stem:'A 14-month-old boy is seen in the clinic because his mother is concerned that he may be having seizures. The episodes occur when he is angry or upset. They are characterized by a color change, followed by collapse and occasional jerking movements. The most likely diagnosis is?',
  opts:['Breath-holding spells','Tet spells','Myoclonic epilepsy','Non-epileptic seizure','Vasovagal syncope'],
  expl:'Triggered by anger or frustration, these episodes involve breath-holding, color change, and brief loss of consciousness. They are benign and self-limiting.',
  note:'p.998 answered (A highlighted yellow, underlined, bold). Twin at p.997 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option A, "Breath-holding spells".' }

{ n:22, pr:22, p:1000, key:1,
  stem:'A 6-year-old boy is falling behind at school. His mother is concerned that he is inattentive. She describes him as frequently daydreaming, during which it is difficult to attract his attention. Routine blood tests are normal. An EEG demonstrates 3 Hz spike-and-wave discharges. The most likely diagnosis is which of the following?',
  opts:['ADHD, inattentive type','Absence seizures','Juvenile myoclonic epilepsy','Daydreaming','Non-epileptic seizures'],
  expl:'Brief, frequent staring spells and EEG showing 3 Hz spike-and-wave discharges confirm absence seizures. These are often misinterpreted as inattention or daydreaming.',
  note:'p.1000 answered (B highlighted yellow, underlined, bold). Twin at p.999 confirmed identical stem and options plain, no highlight, no box. "3 Hz" read plainly on the image, no exponent/superscript involved. Key seen highlighted: option B, "Absence seizures".' }

{ n:23, pr:23, p:1002, key:3,
  stem:'A 5-month-old boy is brought in by his mother due to frequent irritability. She is concerned that he may be in pain, as he frequently tenses and bends his head upward while flailing his arms for a few seconds at a time. An EEG shows large-amplitude slow waves with spikes and sharp waves. The most likely diagnosis is which of the following?',
  opts:['Absence seizures','Benign rolandic epilepsy','Gastro-oesophageal reflux','West syndrome (infantile spasms)','Breath-holding attacks'],
  expl:'Sudden flexor spasms with developmental regression in infancy and a characteristic EEG (hypsarrhythmia) indicate West syndrome. It requires urgent treatment to prevent long-term neurological damage.',
  note:'p.1002 answered (D highlighted yellow, underlined, bold). Twin at p.1001 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option D, "West syndrome (infantile spasms)".' }

{ n:24, pr:24, p:1004, key:1,
  stem:'An 8-year-old girl presents with a second generalized tonic-clonic seizure. It required lorazepam to terminate, and a decision was made to start anti-epileptic treatment. Which of the following is first-line therapy?',
  opts:['Phenobarbital','Sodium valproate','Vigabatrin','Ethosuximide','Phenytoin'],
  expl:'Sodium valproate is first-line for generalized tonic-clonic seizures in children. It’s effective for multiple seizure types but may have teratogenic risks in females of childbearing age.',
  note:'p.1004 answered (B highlighted yellow, underlined, bold). Twin at p.1003 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option B, "Sodium valproate".' }

{ n:25, pr:25, p:1006, key:4,
  stem:'A 9-year-old girl is brought to her GP with a 2-month history of headaches. Which of the following features of her headaches is not a red-flag symptom?',
  opts:['Associated with vomiting','Morning headache','Worse on lying down','Presence of focal neurology','Symmetrical, band-like in nature'],
  expl:'Symmetrical, tension-type headaches are not a red-flag symptom. Red flags include vomiting, early morning headaches, postural worsening, and focal neurological signs, which may suggest raised intracranial pressure.',
  note:'p.1006 answered (E highlighted yellow, underlined, bold). Twin at p.1005 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option E, "Symmetrical, band-like in nature".' }

{ n:26, pr:26, p:1008, key:0,
  stem:'A girl experienced diarrhea 3 days before manifestation "progressive weakness and inability to walk. Examination reveals marked peripheral symmetrical muscles weakness without atrophy. Deep tendon reflexes were absent in the ankles and 1+ in the knees. The MOST likely diagnosis is:',
  opts:['Guillain-Barré syndrome','Transverse myelitis','Myasthenia gravis','Muscular dystrophy','Poliomyelitis'],
  expl:'Guillain-Barré often follows an infection like diarrhea. It causes symmetrical ascending weakness with reduced or absent reflexes, but no muscle atrophy.',
  note:'p.1008 answered (a highlighted yellow, underlined, bold). Twin at p.1007 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option a, "Guillain-Barré syndrome". Options are printed lowercase a-e on this page (unlike A-E on preceding pages) -- transcribed as printed, not normalised. Stem carries an unbalanced opening double-quote before "progressive -- reproduced verbatim as printed.' }

{ n:27, pr:27, p:1010, key:0,
  stem:'The following is NOT characteristic of typical (simple) febrile convulsion:',
  opts:['May recur in 24 hours','Last less than 15 minutes','Always generalized','No post-ictal manifestations','Not preceded by previous non-febrile seizures'],
  expl:'Simple febrile seizures are generalized, last <15 minutes, and occur once per febrile illness. Recurrence within 24 hours or being focal suggests a complex febrile seizure, not simple.',
  note:'p.1010 answered (a highlighted yellow, underlined, bold). Twin at p.1009 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option a, "May recur in 24 hours". Lowercase a-e options, same as n26. Explanation box bolds "complex febrile seizure" -- bold not reproducible in this plain-text field, noted here.' }

{ n:28, pr:28, p:1012, key:0,
  stem:'Which of the following is true about antiepileptic drugs (AEDs)?',
  opts:['All AEDs have side effects','Using multiple drugs is the preferred first-line approach','All cases of epilepsy should automatically receive AEDs','AEDs have no long-term adverse effects'],
  expl:'All antiepileptic drugs carry potential side effects. Not every seizure needs lifelong AEDs, and monotherapy is usually preferred over multiple drugs initially.',
  note:'p.1012 answered (a highlighted yellow, underlined, bold). Twin at p.1011 confirmed identical stem and options plain, no highlight, no box. Only 4 options printed (a-d), no e. Key seen highlighted: option a, "All AEDs have side effects".' }

{ n:29, pr:29, p:1014, key:0,
  stem:'In a 3-year-old boy with delay in gross motor development (still unable to walk), the most important initial investigation is:',
  opts:['Creatine kinase','MRI brain','Blood for chromosomes','Urine for amino and organic acids','Assessment by an educational speech and language therapist'],
  expl:'High CK indicates muscular dystrophy like Duchenne’s, which is a key cause of delayed walking. This is the first test before moving to imaging or genetics.',
  note:'p.1014 answered (a highlighted yellow, underlined, bold). Twin at p.1013 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option a, "Creatine kinase".' }

{ n:30, pr:30, p:1016, key:1,
  stem:'A 13-year-old boy presents to A&E one morning after an episode of unconsciousness, a convincing history of which was obtained from his mother. She had witnessed his eyes rolling upwards, a fall to the floor, jerking of all four limbs and his lips going blue. He had been incontinent. He had been assessed in a general medical clinic 3 years earlier complaining of sudden brief bilateral \'jerks\' occurring largely in the morning after waking. Neurological examination is normal. What is the most likely diagnosis?',
  opts:['Complex partial epilepsy','Juvenile myoclonic epilepsy','Hypoxic myoclonus',"Wilson's disease",'Pseudo-seizures'],
  expl:'Juvenile myoclonic epilepsy typically presents with morning myoclonic jerks and generalized seizures in adolescence. It often needs lifelong AED treatment.',
  note:'p.1016 answered (b highlighted yellow, underlined, bold). Twin at p.1015 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option b, "Juvenile myoclonic epilepsy". BOUNDARY CHECK: rendered one page past range, p.1017, which prints pr:31 ("A child presents with headache, decreased school performance, unsteady gait, and weakness in the upper limb...") plain/unanswered with only 4 options (a-d) -- this is the first page of part C\'s range per the page map (part C starts p.1018), confirming the part B/C boundary sits cleanly after p.1016.' }
