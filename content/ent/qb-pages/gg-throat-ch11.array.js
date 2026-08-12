/* Grade Gain — ENT QB.pdf — THROAT topic 11 "Clinical Assessment of Voice"
   Verbatim staging. Book pp.172–174 (PDF 181–183). Read 2026-08-12.

   READ:      21 printed, Q567 … Q587. Contents page promised 20 — OVER BY ONE (21st time
              the map's count has run short; its page range was right again, 22nd time).
   PAGES:     questions book pp.172–173 (PDF 181–182); p.174 (PDF 183) carries BOTH the last
              four questions (Q584–Q587) in its left column AND all 21 answers in its right.
   BOXES:     ZERO of 21. The whole topic is authored.

   ⚠️ THE OTHER HALF OF THE ch.5 DOUBLE DEFECT FIRED, AND IT IS THE FIRST TIME IN FOUR TOPICS.
   A question tail SHARES the answer page: Q584, Q585, Q586 and Q587 are printed on p.174,
   beside the Answers banner. Reading only "the question pages" pp.172–173 would have lost four
   questions. At t8 and t9 the defect ran the other way (answers spilling PAST the stated page);
   here it runs backwards. Both halves remain unpredictable in both directions.

   ✅ AND THE FAR END IS CLEAN: all 21 keys (567–587) fit on p.174, PDF 184 is blank, and the
   topic ends the Throat section. Rendered one page past anyway, per the standing rule.

   ⚠️ TOPIC BOUNDARY CONFIRMED: topic 10 runs Q501–Q566 = exactly 66 as promised, its last
   answers are on book p.171, and topic 11 opens at Q567 on book p.172. Nothing overlaps.

   Fields: n = printed number, p = BOOK page, key = 0-based index into opts.
*/
var GGT11_STAGED = [

{ n:567, p:172, key:3,
  stem:'Which of the following is NOT true about Auditory perceptual analysis?',
  opts:['Roughness of voice indicates lesion over the vocal cord','Stained voice is associated with spasmodic dysphonia',
        'Breathing voice indicates mobility problem.','It is assisted by Voice Handicap Index'],
  note:'Source prints "Stained" for STRAINED and "Breathing" for BREATHY throughout this topic. `L8` lists the Voice Handicap Index under item 2 "Patient rating scales" and auditory perceptual analysis under item 3 — separate elementary procedures, which is what makes (d) the exception.' },

{ n:568, p:172, key:2,
  stem:'All of the following are true about laryngeal assessment except:',
  opts:['Direct laryngoscopy is done under general anesthesia','Indirect Mirror Laryngoscopy is fast and straightforward',
        'Swallowing function be assessed by rigid laryngoscopy','Flexible nasopharyngoscopy is used for children < 6 years.'] },

{ n:569, p:172, key:0,
  stem:'Which of the following used to distinguish between RLN or SLN affection?',
  opts:['Electromyography','Inverse filtering','Acoustic analysis','Computerized tomography'] },

{ n:570, p:172, key:1,
  stem:'Which of the following is NOT an elementary diagnostic procedure in voice evaluation?',
  opts:['Patient interview','Laryngeal electromyography','ENT examination','Auditory perceptual analysis'] },

{ n:571, p:172, key:0,
  stem:'A stained voice is most commonly associated with which condition?',
  opts:['Spasmodic dysphonia','Vocal cord nodules','Laryngeal paralysis','Vocal cord hemorrhage'],
  note:'"Stained" = STRAINED. Consistent with Q567 option (b), which the bank keys as TRUE.' },

{ n:572, p:172, key:3,
  stem:'Which technique is performed under general anesthesia for patients with a severe gag reflex?',
  opts:['Mirror laryngoscopy','Flexible nasolaryngoscopy','Rigid laryngoscopy','Direct laryngoscopy'] },

{ n:573, p:172, key:2,
  stem:'Which of the following is a disadvantage of flexible nasopharyngoscopy?',
  opts:['Gag reflex','Limited dynamic evaluation','Epistaxis and mild discomfort','Requires general anesthesia'],
  note:'⚠️ (a) and (b) are RIGID laryngoscopy\'s disadvantages on `L8`\'s own slide, and (d) is direct laryngoscopy — the distractors are the neighbouring techniques.' },

{ n:574, p:172, key:3,
  stem:'Which structure is NOT examined during direct laryngoscopy?',
  opts:['Vallecula','Epiglottis','Pyriform fossae','Uvula'] },

{ n:575, p:173, key:2,
  stem:'Which of the following is a pass/fail screening procedure for dysphagia?',
  opts:['FEES','VFSS','Swallow screening','High-resolution manometry'] },

{ n:576, p:173, key:1,
  stem:'Which is the limitation of high-resolution manometry?',
  opts:['Uses radiation','Cannot detect aspiration','Causes gag reflex','Requires general anesthesia'] },

{ n:577, p:173, key:3,
  stem:'Which instrumental swallowing assessment allows for real-time recording?',
  opts:['FEES','MRI','CT scan','VFSS'],
  note:'⚠️ FLAG: FEES is also a real-time recorded study. Check `L7) Assessment And Management Of Swallowing Disorders` before writing — if the deck attributes real-time recording specifically to VFSS the key stands; if both qualify, record the defect per the standing ruling.' },

{ n:578, p:173, key:0,
  stem:'What is the recommended first-line investigation before moving to CT or MRI for voice disorders?',
  opts:['Laryngeal endoscopy','MRI','CT scan','EMG'],
  note:'`L8` lists plain X-ray, CT and MRI under item 7 "Radiological studies" of the ADDITIONAL instrumental measures, after laryngeal examination in the elementary procedures.' },

{ n:579, p:173, key:2,
  stem:'Which of the following techniques most accurately assesses symmetry of vocal cord vibration?',
  opts:['Videofluroscopy','EMG','Videostroboscopy','Laryngoscopy'] },

{ n:580, p:173, key:2,
  stem:'Which of the following is the statement accurately describing "Talbot-plateau law"?',
  opts:['Retina can only perceive 2 images each 0.5 seconds','Retina can only perceive 2 images each 0.4 seconds',
        'Retina can only perceive 5 images / second','Retina can only perceive 8 images / second'],
  note:'✅ GROUNDED VERBATIM. `L8`: "Talbot\'s law states that the retina can only register 1 image per 0.2 seconds or 5 images per second." Option (c) is the slide\'s second clause word for word.' },

{ n:581, p:173, key:3,
  stem:'All of the following are among the drawbacks of rigid laryngoscopy except:',
  opts:['Not suitable for children < 6 years old','Doesn\'t assess swallowing','Gag reflex','Poor image quality'],
  note:'✅ `L8` lists exactly (a), (b) and (c) as rigid laryngoscopy\'s disadvantages and "Excellent image quality" as its first ADVANTAGE — the key is the slide inverted.' },

{ n:582, p:173, key:3,
  stem:'Which of the following is a benefit of EMG?',
  opts:['It differentiates between neuromuscular and mechanical lesions','It shows extent of laryngeal paralysis',
        'It differentiates between neurogenic and myogenic lesions','All of the above'],
  note:'✅ All three are on `L8`\'s EMG slide verbatim, which is what makes "All of the above" correct rather than a lazy key.' },

{ n:583, p:173, key:1,
  stem:'Which of the following studies the electrical potentials generated in a skeletal muscle?',
  opts:['Electroneurography','Electromyography','Electroglottography','None of the above'],
  note:'✅ `L8`, EMG slide, first line: "Study electrical potentials generated in a skeletal muscle."' },

{ n:584, p:174, key:2,
  stem:'All of the following are among the non-instrumental swallowing assessment techniques except:',
  opts:['Case history','CN assessment','Functional endoscopic evaluation of swallowing',
        'Functional assessment of muscles and structures used in swallowing'] },

{ n:585, p:174, key:2,
  stem:'Deep neck space mass, how to investigate in kids?',
  opts:['Lateral view X-Ray','US','CT with contrast','Laryngoscope'],
  note:'⚠️ Sits in `ent-neck` / `ent-pharsupp`, not in voice assessment — an outlier in this topic. Check against `L4) PHARYNGEAL SUPPURATIONS` and `L5) NECK MASS`, and note the radiation argument for US in children if the decks make it.' },

{ n:586, p:174, key:0,
  stem:'Which of the following uses a flash of light to test the function of the vocal cords?',
  opts:['Stroboscopy','Electroglottography','Videofluoroscopy','Electromyography'],
  note:'✅ `L8`: "pulsating flashes of light at multiple points of several successive vibratory cycles."' },

{ n:587, p:174, key:2,
  stem:'A stroke patient in the ICU is experiencing difficulty swallowing, and an evaluation of both the oral and pharyngeal phases of swallowing is required. Which of the following is the most appropriate diagnostic test?',
  opts:['Fiberoptic Endoscopic Evaluation of Swallowing (FEES)','High-Resolution Impedance Manometry',
        'Videofluoroscopic Swallowing Study (VFSS)','Electroglottography'],
  note:'⚠️ Pairs with Q577. The discriminator here is "BOTH the ORAL and pharyngeal phases" — FEES cannot see the oral phase because the scope views from above and whites out at the moment of the swallow. Confirm against `L7` before writing.' }

];
