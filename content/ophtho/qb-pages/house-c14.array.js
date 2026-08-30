// house-c14.array.js — House bank (ophthalmology MCQ.pdf), Chapter 14 "Neuro-ophthalmology"
// Verbatim staging record. Written before the draft, per the brief.
//
// WHAT THE BANNER LITERALLY PRINTS
//   Book p.91 (sheet 47, RIGHT half) opens with a full-width red band, white bold
//   sans-serif text: "14. Neuro-ophthalmology". Numbering restarts at 1 beneath it.
//   Boundary proof, both ends: book p.90 (sheet 47, LEFT half) is the tail of
//   chapter 13 — its Q24–Q27, consistent with house-c13's printed count of 27.
//   Book p.98 (sheet 51, LEFT half) opens with the next red band: "15. Squint".
//   Chapter 14 ends with Q29 in the upper part of book p.97; the remainder of
//   p.97 is blank. The book's chapter numbering is NOT defective at this seam.
//
// THE PAGE MAP I ACTUALLY USED
//   Pre-rendered sheets in <scratchpad>\h14\ (A4 landscape, TWO book pages per
//   sheet, left = even, right = odd; each half read at full resolution, folio
//   numerals confirmed on every half):
//     p-047.png = book 90 | 91   (91 = banner + Q1–Q4)
//     p-048.png = book 92 | 93   (Q5–Q9 start | Q9 end–Q13 start)
//     p-049.png = book 94 | 95   (Q13 end–Q18 start | Q18 end–Q22)
//     p-050.png = book 96 | 97   (Q23–Q27 | Q28–Q29, then blank)
//     p-051.png = book 98 | 99   (rendered PAST the last question: "15. Squint"
//                                 banner confirmed at p.98 — chapter closed)
//
// PRINTED COUNT
//   29 questions, numbered 1–29 with no gap and no repeated number. Counted
//   forwards from the banner and backwards from Q29; both passes agree.
//   Answers are inline ("Answer: X") after each option list, House style.
//
// PRINTED EXPLANATION BOXES — ZERO. FIGURES — ZERO.
//   Counted page by page on this chapter's pages (91, 92, 93, 94, 95, 96, 97),
//   not carried forward from chapter 13: every band between one question and the
//   next contains only the option list, the "Answer: X" line and the red rule.
//   No shaded box, no photograph, no diagram anywhere in the chapter.
//   Markers required in the draft = 29 entries − 0 boxes = 29.
//
// DEFECTS HIT
//   • Q5 and Q7 print IDENTICAL options A and D ("Left abducent palsy") — the
//     same defective five-option menu both times. Q5 keys A, Q7 keys B.
//     Transcribed verbatim; recorded in the draft explanations.
//   • Q18 keys C ("Stage 3 anaesthesia") as a cause of DILATED fixed pupil.
//     Both sources put stage III under MIOSIS (L22 slide 3 "Anaesthesia: 3rd
//     stage" under miosis, slide 4 gives mydriasis to "2nd, 4th stages";
//     ophthalmology.pdf p.179 table, red note "II and IV dilate, III constricts").
//     C is still the only non-miotic option on the menu, so the key is
//     recoverable by elimination — noted, never disputed; answer stays 2.
//   • Q1 is the only key printed with punctuation: "Answer: B." (trailing period).
//   • Preserved typos: Q15 "trotuosity", Q16 "ouside", Q20 "Cerebra hemorrhage",
//     Q5 "side. which" (lowercase w), Q17 double space "syphilis  with",
//     Q23 "affection of ocular motility" (no "without"/"with" printed).
//
// BACK-REFERENCES (three; each repaired stem was re-read against its own
// options and key by hand after writing — none names its own answer, none
// leaks the antecedent's or the next question's):
//   • Q6  "In the previous case…" → antecedent Q5. Repair restates FINDINGS
//     (esotropia, failed abduction of the left eye, face turn to the left),
//     never "abducent palsy" (Q5's key).
//   • Q8  "In the previous case…" → antecedent Q7. Repair restates FINDINGS
//     (vertical diplopia worse on downgaze, left hypertropia, weak depression
//     of the adducted left eye, chin depression, head tilt right), never
//     "trochlear palsy" (Q7's key).
//   • Q10 "In the previous case…" → antecedent Q9. Repair restates FINDINGS
//     (unilateral miosis, lid drooping, apparent enophthalmos), never
//     "Horner syndrome" (Q9's key).
//   Q24 restates the Q9 vignette in full itself — NOT a back-reference.
//
// CROSS-CHAPTER DUPLICATES SPOTTED (for the hub — ch.15 is NOT yet transcribed):
//   • Ch.15 Q2 (book p.98) is a verbatim reprint of ch.14 Q5 — same defective
//     A=D menu, same key A.
//   • Ch.15 Q3 (book p.98) is a verbatim reprint of ch.14 Q7 — same menu,
//     same key B.
//   These 29 ship now; the fold happens when ch.15 is transcribed.

var HOUSE_C14_PAGES = [

{ n:1, p:91, key:'B',
  stem:'A 30-year-old woman notices that her left pupil is smaller than the right and her left eyelid droops intermittently. A lesion might be located in which of the following areas?',
  opts:['Left orbit','Left neck','Left third cranial nerve','Left mediastinum'],
  note:'Only key in the chapter printed with a trailing period: "Answer: B."' },

{ n:2, p:91, key:'B',
  stem:'A 58-year-old chronic smoker presents with drooping of the right eyelid and a smaller right pupil, along with right arm pain and tingling. Examination shows mild ptosis, miosis and anhidrosis on the right side of the face. Chest X-ray reveals a right apical lung mass. What is the most likely diagnosis?',
  opts:['Third nerve palsy','Horner syndrome due to Pancoast tumor','Myasthenia gravis','Cluster headache'],
  note:'' },

{ n:3, p:91, key:'B',
  stem:'A 67-year-old female presented with acute unilateral diminished vision, jaw claudication and severe temporal headache, which of the following is the most likely cause of her condition?',
  opts:['Non-arteritic optic neuropathy','Anterior ischemic optic neuropathy','Optic neuritis','None of the above'],
  note:'' },

{ n:4, p:91, key:'C',
  stem:'A 58-year-old hypertensive man presents with sudden diplopia and complete ptosis of the right eye. The eye is positioned "down and out," and the pupil is of normal size and reactive. Which of the following is the most appropriate next step?',
  opts:['Observation only','Start oral steroids','Cerebrovascular assessment (urgent neuroimaging)','Tensilon test'],
  note:'' },

{ n:5, p:92, key:'A',
  stem:'A 22-year-old male presented with double vision, on examination there was esotropia, inability to abduct the left eye and face turn to the left side. which of the following is the most likely diagnosis?',
  opts:['Left abducent palsy','Left trochlear palsy','Right abducent palsy','Left abducent palsy','None of the above'],
  note:'DEFECT: options A and D identical as printed. Lowercase "which" after "side." as printed. Reprinted verbatim as ch.15 Q2 (p.98), same key.' },

{ n:6, p:92, key:'B',
  stem:'In the previous case, which of the following is the most probable cause of the patient’s condition?',
  opts:['Microvascular infarction','Compressive lesion','Congenital','All of the above','None of the above'],
  note:'Back-reference → Q5. Repaired stem restates the findings only; re-read against its own key by hand.' },

{ n:7, p:92, key:'B',
  stem:'A 34-year-old male presented with dual vision especially when looking downwards, on examination there was hypertropia, weak depression of the left eye when adducted, chin depression and head tilt to the right side. Which of the following is the most likely diagnosis?',
  opts:['Left abducent palsy','Left trochlear palsy','Right abducent palsy','Left abducent palsy','None of the above'],
  note:'DEFECT: same A=D menu as Q5. Reprinted verbatim as ch.15 Q3 (p.98), same key.' },

{ n:8, p:92, key:'E',
  stem:'In the previous case, which of the following might be the cause of the patient’s condition?',
  opts:['Diabetes','Trauma','Congenital','A & B','All of the above'],
  note:'Back-reference → Q7. Repaired stem restates the findings only; re-read against its own key by hand.' },

{ n:9, p:92, key:'C',
  stem:'A 39-year-old male presented with unilateral miosis, lid drooping and apparent enophthalmos, which of the following might be the cause for that presentation?',
  opts:['Dorsal midbrain syndrome','Argyll-Robertson syndrome','Horner syndrome','Oculomotor nerve palsy','None of the above'],
  note:'Stem starts at the bottom of p.92, options and answer on p.93.' },

{ n:10, p:93, key:'D',
  stem:'In the previous case, which of the following might be the cause of the patient’s condition?',
  opts:['Pancoast tumor','Thoracic aortic aneurysm','Cervical rib','All of the above','None of the above'],
  note:'Back-reference → Q9. Repaired stem restates the findings only, never "Horner syndrome" (Q9’s key); re-read against its own key by hand.' },

{ n:11, p:93, key:'A',
  stem:'A 32-year-old woman presented with eyelid drooping and deviation of the eye outwards and downwards, on examination there was unilateral mydriasis. Paralysis of which of the following nerves is responsible for her condition?',
  opts:['Oculomotor nerve','Trochlear nerve','Abducent nerve','Facial nerve'],
  note:'' },

{ n:12, p:93, key:'C',
  stem:'All of the following can cause chronic retrobulbar neuritis except?',
  opts:['Chloramphenicol','Vitamin B12 deficiency','Giant cell arteritis','Tobacco-alcohol amblyopia','None of the above'],
  note:'' },

{ n:13, p:93, key:'B',
  stem:'All of the following are benign forms of nystagmus except?',
  opts:['End-gaze nystagmus','Nystagmus in primary position of gaze','Drug-induced nystagmus','Congenital nystagmus','None of the above'],
  note:'Options D and E printed on p.94.' },

{ n:14, p:94, key:'C',
  stem:'Which of the following is best described as (loss of either superior or inferior half of the visual field in both eyes)?',
  opts:['Scotoma','Hemianopia','Altitudinal hemianopia','Homonymous hemianopia','Bitemporal hemianopia'],
  note:'' },

{ n:15, p:94, key:'C',
  stem:'All of the following are characteristic of optic disc swelling except?',
  opts:['Indistinct disc margins','Vascular trotuosity','Central cup','Capillary hyperemia and hemorrhages','None of the above'],
  note:'"trotuosity" [sic] as printed.' },

{ n:16, p:94, key:'B',
  stem:'Which of the following is meant by (secondary optic atrophy)?',
  opts:['Damage to optic nerve secondary to retinal diseases','Damage to optic nerve due to long-standing papilledema','Damage to optic nerve ouside of the eyeball','Damage to optic nerve by an end-stage chronic glaucoma','None of the above'],
  note:'"ouside" [sic] as printed.' },

{ n:17, p:94, key:'B',
  stem:'Which of the following conditions is characterized by tertiary syphilis  with midbrain affection?',
  opts:['Horner syndrome','Argyll-Robertson syndrome','Oculomotor palsy','Dorsal midbrain syndrome'],
  note:'Double space "syphilis  with" as printed.' },

{ n:18, p:94, key:'C',
  stem:'Which of the following is a cause of dilated fixed pupil?',
  opts:['Morphine','Horner syndrome','Stage 3 anaesthesia','Pontine hemorrhage'],
  note:'DEFECTIVE KEY vs both sources (L22 sl.3–4; ophthalmology.pdf p.179 puts stage III under miosis, stages II and IV under mydriasis). Key recoverable by elimination — the other three are all miosis causes. Recorded in the draft, answer stays as printed. Stem on p.94, options and answer on p.95.' },

{ n:19, p:95, key:'B',
  stem:'What is the most common cause of bilateral abducent nerve palsy?',
  opts:['Intracranial tumor','Elevated intracranial pressure','Myasthenia gravis','Multiple sclerosis'],
  note:'' },

{ n:20, p:95, key:'E',
  stem:'Which of the following can contribute to papilledema?',
  opts:['Space occupying lesion','Cerebra hemorrhage','Dural sinus thrombosis','Idiopathic','All of the above'],
  note:'"Cerebra" [sic] as printed.' },

{ n:21, p:95, key:'D',
  stem:'Which of the following can differentiate papillitis from papilledema?',
  opts:['Papillitis is usually unilateral','Papillitis is usually associated with decreased vision','Papillitis is usually associated with RAPD','All of the above','None of the above'],
  note:'' },

{ n:22, p:95, key:'D',
  stem:'Which of the following is best described as (loss of either right or left half of the visual field in both eyes)?',
  opts:['Scotoma','Hemianopia','Altitudinal hemianopia','Homonymous hemianopia','Bitemporal hemianopia'],
  note:'Same five-option menu as Q14, different key — paired questions, not a duplicate; the discriminating tokens are "superior or inferior" (Q14) vs "right or left" (Q22).' },

{ n:23, p:96, key:'C',
  stem:'A 27-year-old female presented with lid drooping and double vision, she reports generalized weakness and easy fatigue, on examination there was intact pupils with marked bilateral ptosis affection of ocular motility. Which of the following is the most probable diagnosis?',
  opts:['Oculomotor nerve palsy','Trochlear nerve palsy','Myasthenia gravis','Dorsal midbrain syndrome'],
  note:'"ptosis affection of ocular motility" as printed — no conjunction between "ptosis" and "affection".' },

{ n:24, p:96, key:'B',
  stem:'A 39-year-old male presented with unilateral miosis, lid drooping and apparent enophthalmos, which of the following is the most appropriate investigation to confirm the diagnosis?',
  opts:['MRI abdomen','MRI thorax','Echocardiography','CT brain'],
  note:'NOT a back-reference — restates the Q9 vignette in full itself. Pairs with Q9/Q10.' },

{ n:25, p:96, key:'B',
  stem:'Marcus gunn pupil is seen in which of the following conditions?',
  opts:['Cataract','Compressive optic neuropathy','Scleritis','AMD'],
  note:'Lowercase "gunn" as printed.' },

{ n:26, p:96, key:'C',
  stem:'Which of the following is a cause of pinpoint pupil?',
  opts:['Optic neuritis','Third nerve palsy','Organophosphorus poisoning','Acute angle-closure glaucoma'],
  note:'' },

{ n:27, p:96, key:'C',
  stem:'What is the most common cause of homonymous hemianopia?',
  opts:['Trauma','Mass lesions','Stroke','Glaucoma'],
  note:'' },

{ n:28, p:97, key:'B',
  stem:'A 45-year-old man is found to have small irregular pupils that do not constrict to light but constrict normally during accommodation. Extraocular movements and visual acuity are normal. He has a history of untreated syphilis. What is the most likely diagnosis?',
  opts:['Adie’s tonic pupil','Argyll Robertson pupil','Horner syndrome','Pharmacologic miosis'],
  note:'' },

{ n:29, p:97, key:'B',
  stem:'A 28-year-old woman presents with difficulty looking up. Examination shows impaired upward gaze, light-near dissociation of the pupils, and convergence-retraction nystagmus on attempted upgaze. She also has lid retraction (Collier sign). What is the most likely diagnosis?',
  opts:['Internuclear ophthalmoplegia','Dorsal midbrain syndrome','Myasthenia gravis','Third nerve palsy'],
  note:'Last question of the chapter; remainder of p.97 blank, "15. Squint" banner at p.98.' }

];
