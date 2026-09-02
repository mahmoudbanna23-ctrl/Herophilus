// Grade Gain — neuropsychiatry & neurosurgery qb.pdf
// SECTION 2 (Psychiatry), TOPIC 18 "Somatic Symptoms & Related Disorders"
// Questions: book pp.76–77 (PDF 81–82). Answers: book p.78 (PDF 83), all on one page.
// Offset: PDF page = book page + 5. Confirmed again here (PDF 81 = book 76, PDF 84 = book 79).
// Printed: 12 questions, Q64–Q75. Contents page promised 11 (errs DOWNWARD by 1 — the same
//   direction and the same magnitude as topics 16 and 17).
//
// Boundary MEASURED, not assumed:
//   - PDF 81 (book p.76) carries the banner "Somatic symptoms and related disorders / Questions"
//     and opens at Q64 — exactly where topic 17's Q63 left off. Continuity across the topic
//     boundary is therefore VERIFIED, and topic 17's count of 23 stands.
//   - Questions run Q64–Q69 on book p.76 and Q70–Q75 on book p.77. Book p.77's right column
//     ends at Q75 with the lower third of the page blank — the topic stops there.
//   - Answer block "Somatic symptoms and related disorders / Answers" opens PDF 83 (book p.78)
//     at Q64 and closes on that same page at Q75. The answer page carries NO questions;
//     questions and answers do not share a page here (same as topic 17).
//   - PDF 84 (book p.79) carries the banner "Child Psychiatry / Questions" opening at Q76 —
//     that is topic 19. This is the one-past overrun check and it passed.
//   - SEQUENCE WALKED ONE BY ONE on both the question pages and the answer page:
//     64,65,66,67,68,69,70,71,72,73,74,75. Twelve numbers, no number printed twice, none
//     skipped, and every one of the twelve carries both a printed question and a printed
//     answer line.
//
// ⚠️ THE ANSWER KEY PRINTS BARE LETTERS WITH NO NAMES BESIDE THEM — every line is exactly
//    "<n>. Correct Answer: (X)". The letter/name cross-check that caught npqb-nr-23 is
//    therefore UNAVAILABLE for this entire topic. It was NOT performed and must not be
//    reported as having passed.
//    What WAS done instead: all 12 letters were re-read from 400 dpi crops of PDF 83 (both
//    columns) to rule out B/D and C/G glyph confusion — they match the 200 dpi read exactly.
//    And for the 5 questions that print an Explanation block, the prose names the intended
//    option in words; all 5 agree with the printed letter (Q66 D = "Requesting for TSH level"
//    vs "requesting a TSH level"; Q68 C = "Proper neurological assessment…" vs "A thorough
//    neurological evaluation… suggestion therapy"; Q69 D = "Verification of the nature of his
//    headache and asking for a psychiatric consultation" vs "The headache must be thoroughly
//    evaluated… psychiatric consultation"; Q74 B = "Somatic symptom disorder"; Q75 B =
//    "Conversion disorder"). That is an indirect check covering 5 of 12 — it is NOT the
//    printed-name cross-check, and 7 of 12 keys have no corroboration of any kind.
//
// ⚠️ NUMBERS: this topic prints NO exponents, NO lab values and NO drug doses. The only
//    numerals of consequence are the ages, durations and the saline volumes. ALL of them were
//    re-rendered at 400 dpi and read off the image, never from OCR:
//      Q66 "35-year-old", "2 months", "4 months"  ·  Q68 "22-year-old", "3-cc saline"
//      Q69 "3rd decade", "3.00A.M.", "3 cc saline" ·  Q71 "20-year-old", "2 years"
//      Q74 "35-year-old", "6-month"                ·  Q75 "22-year-old"
//    Note the bank itself is inconsistent: Q68 prints "3-cc saline" (hyphen), Q69 prints
//    "3 cc saline" (no hyphen). Both preserved as printed.
//
// ⚠️ SHOW-THROUGH CHECKED, NOT RECORDED: PDF 83 (book p.78) shows faint mirrored text behind
//    the orange "Answers" banner. It reads in reverse as "…ADHD recently. His mom wants to
//    know the…", which is Q80 on book p.79 — the reverse of the same leaf. It is show-through,
//    not content, and nothing was transcribed from it.
//
// ⚠️ VERBATIM RECORD — the source's own typos are PRESERVED here on purpose:
//    Q68 "her fiancé, The most immediate appropriate management is:" (comma splice, capital T)
//    Q69 lowercase sentence starts ("this denotes…", "please help me", "go home") and a
//        curly opening quote closed by a straight one in option a
//    Q74 "All here investigations were normal" (for "her")
//    Q75 answer explanation ends with no full stop
//
// No multi-answer ("two of the following", "A + B") stems in this topic — all 12 keys are a
//   single letter, read line by line off the answer page at 400 dpi.
// Every one of the 12 questions prints EXACTLY four options, a–d. Counted per question on the
//   page images; there is no six/ten/three-option question here, unlike topic 16.
// No figures in this topic — book pp.76, 77 and 78 carry no image of any kind.
//
// Boxed (printed Explanation): Q66, Q68, Q69, Q74, Q75 = 5 of 12, counted by reading EVERY one
//   of the twelve answer lines on PDF 83, not by sampling. The other seven (Q64, Q65, Q67,
//   Q70, Q71, Q72, Q73) print the letter alone with nothing after it.
//
// ⚠️ FIELD SHAPE: this file matches gg-ps-t17.array.js, where `box` is NOT a boolean — it is
//    `null` when the answer prints the letter alone, and carries the verbatim Explanation
//    prose when one is printed. The staging brief's example showed `box:false`; t17 is the
//    precedent that was followed. `note` is present only on entries that have a defect.

var GG_PS_T18_STAGED = [

{ n:64, p:76, key:'A', box:null,
  stem:'Which of the following is the most accurate about conversion disorder?',
  opts:['It presents with a neurological deficit','It cannot be associated with sensory function deficit','Symptoms do not cause occupational dysfunction','Symptoms can be explained by another mental disorder'] },

{ n:65, p:76, key:'D', box:null,
  stem:'Types of somatoform disorders include:',
  opts:['Somatization pain disorders','Somatization disorders','Conversion disorders','All of the above'] },

{ n:66, p:76, key:'D',
  stem:'A 35-year-old female presented with hypoactivity, diminished appetite, and depressed mood for 2 months for the first time in her life. She has a previous history of thyroidectomy for 4 months without replacement. The most important management to start with is:',
  opts:['Prompt prescription of SSRIs','Advising the patient to do ECT','Advising the patient to start psychotherapy','Requesting for TSH level'],
  box:'The most important initial step in management is to evaluate the patient\'s thyroid function by requesting a TSH level. If hypothyroidism is confirmed, thyroid hormone replacement (e.g., levothyroxine) should be initiated, which may resolve the depressive symptoms.' },

{ n:67, p:76, key:'A', box:null,
  stem:'Which is TRUE regarding somatic symptom disorder?',
  opts:['More common in females','It is a disease of the wealthy','Typically found in married people','It is not stress related'],
  note:'"TRUE" is printed bold and underlined in the stem; the emphasis is not carried into this transcription.' },

{ n:68, p:76, key:'C',
  stem:'A 22-year-old female patient came to the E.R with her family as she developed acute muteness following a quarrel with her fiancé, The most immediate appropriate management is:',
  opts:['Telling her family "She is faking this muteness to make her fiancé apologize for her"','Giving her a 3-cc saline intravenously and saying to them "she will be fine, go home"','Proper neurological assessment, if free, suggestion can be done','Immediate heparin intravenous infusion for fear of ischemic stroke'],
  box:'A thorough neurological evaluation is necessary to rule out organic causes, and if none are found, suggestion therapy or reassurance can be used.',
  note:'Source typo PRESERVED: the stem runs "…a quarrel with her fiancé, The most immediate appropriate management is:" — a comma splice with a capital T. "3-cc" is hyphenated here and read off a 400 dpi crop.' },

{ n:69, p:76, key:'D',
  stem:'A disheveled male, seems to be in the 3rd decade of his life, came to you in E.R on 3.00A.M. He was screaming frightenedly "please help me; I have a very severe headache as if a thunderclap is striking my head. this denotes that my enemies are going to kill me as soon as possible. please help me". The best management to be done for him is:',
  opts:['Giving him 3 cc saline intravenously and then telling him “You will be fine. go home"','Advising him to leave the E.R and go to a psychiatrist','Prescribing antipsychotic drug for him and tell him to follow up with a psychiatrist','Verification of the nature of his headache and asking for a psychiatric consultation'],
  box:'The headache must be thoroughly evaluated to rule out medical emergencies, and a psychiatric consultation should be sought for the delusions.',
  note:'Source typography PRESERVED: lowercase sentence starts inside the quoted speech ("this denotes…", "please help me"); option a opens with a CURLY double quote and closes with a STRAIGHT one, and reads "You will be fine. go home" with a lowercase "go" after the full stop. "3 cc" here is UNhyphenated, unlike Q68\'s "3-cc"; both read off 400 dpi crops.' },

{ n:70, p:77, key:'A', box:null,
  stem:'Somatoform disorders include all of the following, EXCEPT:',
  opts:['Acute stress disorder','Somatization disorder','Conversion disorder','Somatoform pain disorder'],
  note:'"EXCEPT" is printed bold and underlined in the stem; the emphasis is not carried into this transcription.' },

{ n:71, p:77, key:'A', box:null,
  stem:'A 20-year-old female patient presented with unchanged complaints of nausea, vomiting, diarrhea, headache, fatigue and joint pain for 2 years. All her laboratory results are normal. What is the most probable diagnosis of this patient?',
  opts:['Somatization disorder','Generalized anxiety disorder','Dissociative disorder','Conversion disorder'] },

{ n:72, p:77, key:'C', box:null,
  stem:'Somatic complaints are done consciously but for intentional and obvious goals. This is known as:',
  opts:['Factitious disorder','Conversion disorder','Malingering','Illness anxiety disorder'] },

{ n:73, p:77, key:'B', box:null,
  stem:'All of the following are true regarding conversion disorder, EXCEPT:',
  opts:['Symptoms affect motor functions','Compatibility between symptoms and neurological findings','Symptoms can\'t be explained by another mental disorder','Symptoms cause significant distress'],
  note:'"EXCEPT" is printed bold and underlined in the stem; the emphasis is not carried into this transcription. Option c prints a curly apostrophe in "can\'t"; a straight one is used here.' },

{ n:74, p:77, key:'B',
  stem:'A 35-year-old woman presents to her primary care physician with a 6-month history of persistent fatigue, recurrent headaches, and intermittent abdominal pain. All here investigations were normal. She expresses significant distress about her symptoms and is convinced that she has a serious undiagnosed illness, despite reassurance from her doctors. Her preoccupation with her health has led to frequent absences from work and strained relationships with her family. Which of the following is the most likely diagnosis?',
  opts:['Generalized anxiety disorder','Somatic symptom disorder','Conversion disorder','Major depressive disorder'],
  box:'Somatic symptom disorder is characterized by one or more somatic symptoms (e.g., fatigue, pain) that are distressing or disruptive to daily life, along with excessive thoughts, feelings, or behaviors related to the symptoms. The patient\'s persistent distress and preoccupation with her symptoms, despite normal test results, align with this diagnosis.',
  note:'Source typo PRESERVED: "All here investigations were normal" — the bank prints "here" where it means "her".' },

{ n:75, p:77, key:'B',
  stem:'A 22-year-old college student is brought to the emergency department after suddenly losing the ability to move her right arm. She reports no history of trauma or injury. On examination, there are no neurological abnormalities, and imaging studies are normal. Despite the paralysis, she appears unconcerned and even jokes about her condition. Her friends report that she has been under significant stress due to upcoming exams and a recent breakup. Which of the following is the most likely diagnosis?',
  opts:['Somatic symptom disorder','Conversion disorder','Illness anxiety disorder','Generalized anxiety disorder'],
  box:'Conversion disorder is characterized by neurological symptoms (e.g., paralysis, blindness, or seizures) that cannot be explained by a medical condition. A key feature often associated with conversion disorder is la belle indifference, where the patient shows a lack of concern about the symptoms despite their severity. In this case, the sudden onset of paralysis, absence of neurological findings, and the patient\'s indifferent attitude, along with recent stress, strongly suggest conversion disorder',
  note:'The printed Explanation ends with no full stop, on the word "disorder". Preserved as printed — nothing was added.' }

];
