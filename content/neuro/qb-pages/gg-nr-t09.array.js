/* Grade Gain — neuropsychiatry & neurosurgery qb.pdf
 * SECTION 1 (Neurology), TOPIC 09 "Coma"
 * Questions book pp.37-39 (PDF 042-044) · Answers book pp.39-40 (PDF 044-045)
 * Offset: PDF page = book page + 5 (held on every sheet checked: PDF 042=book 37 ...
 * PDF 046=book 41 — no sheet broke it; each sheet's own printed footer folio was read,
 * not assumed from the offset)
 *
 * Book p.39 (PDF 044) is MIXED, same shape as topic 08's book p.35: its left column
 * closes the question run (Q196-198) AND its right column opens the answer run (keys
 * 177-194, with explanations for 178, 187, 189). Book p.40 (PDF 045) is answers-only,
 * keys 195-198 plus the Q197 flowchart explanation, followed by a blank "YOUR NOTES"
 * section. Two readers had reported this page's contents from two different angles —
 * one placed keys 177-194 on PDF 044, the other placed Q196-198 there — and both are
 * correct at once because the sheet carries both.
 *
 * Topic 10 "Movement Disorders" opens at Q199 on book p.41 (PDF 046), confirmed by its
 * own section-header box; nothing from it is staged in this file. ⚠️ The running head at
 * the top-right of that sheet (PDF 046) still prints "Coma" even though the section-title
 * box says "Movement Disorders" — a printing inconsistency in the source, recorded here,
 * never resolved. The section-title box, not the running head, is what actually changes
 * at the topic boundary.
 *
 * BANNER reads "Coma" on every question and answer page in range (PDF 042-045). The
 * contents page itself was NOT among the transcripts supplied for this stage, so its own
 * phrasing of the topic name — and any claimed question count — could not be checked
 * here; this header states plainly that the comparison is UNPERFORMED, not that it passed.
 *
 * MEASURED: 22 questions printed, Q177-Q198 — walked in sequence across PDF 042 (177-186),
 * 043 (187-195), 044 (196-198): none doubled, none skipped. 22 answer keys, same range,
 * same check — 177-194 on PDF 044's answer column, 195-198 on PDF 045; every question has
 * a key, every key has a question. This matches the brief's stated range and count exactly.
 *
 * ⚠️ ANSWER KEYS ARE BARE LETTERS. No name prints beside any key anywhere in this topic,
 * so the letter-vs-name cross-check is UNAVAILABLE here — stated rather than implied to
 * have passed.
 *
 * 3 of the 22 carry a printed prose Explanation box: Q178, Q187, Q189. A fourth, Q197,
 * carries an "explanation" that is a FLOWCHART IMAGE, not prose — its box field below
 * transcribes the chart's boxes and arrows in reading order, flagged as non-prose; no
 * caption or explanatory prose text accompanies it in the source.
 *
 * Two three-option questions (a/b/c only, no d.) confirmed as SOURCE DEFECTS by a
 * dedicated pixel-level check (verdict-186-197-198.md: uniform 1654x2339 renders, clean
 * white margin below the last option on both sheets, a 400 dpi re-render of PDF 044 showed
 * no clipped word) — held as printed, nothing invented:
 *  - Q186 (book p.37, PDF 042): options end at c. "Brainstem stroke"; key A is within range.
 *  - Q198 (book p.39, PDF 044): options end at c. "...structural lesions."; key A is within
 *    range. PDF 045's answer entry for 198 prints the key only, no restated option list —
 *    checked, nothing recoverable.
 * Both keys were checked against their own topic-09 option count specifically per this
 * stage's instruction — neither exceeds its 3-option range; no finding to report there.
 *
 * VERBATIM STAGING RECORD. The source's own defects are PRESERVED here on purpose and are
 * corrected only in the draft:
 *  - Q182 option a: `Homer's Syndrome` (for "Horner's")
 *  - Q186 stem: run-on `except for his eyes His breathing is normal.` — no punctuation
 *    between "eyes" and "His" (additional defect, not in the brief's original list)
 *  - Q187: stem opens lowercase, `patient in ICU...` (additional defect, not in the
 *    brief's original list); `occulocephic` (for "oculocephalic"); option b `presistent`
 *    (for "persistent")
 *  - Q189: stem is garbled/self-duplicating, staged exactly as transcribed — see the
 *    entry below, not resolved; `spontanously` (for "spontaneously"); option b
 *    `Persistant` (for "Persistent")
 *  - Q190: `followings` (for "following")
 *  - Q195: `simulations` (for "stimulation"); odd stem punctuation `...painful simulations
 *    localization, and verbalization?` preserved as printed
 *  - Q196: stem is internally contradictory — opens "left-sided weakness" then states
 *    "right-sided hemiparesis" two sentences later — transcribed exactly as printed, not
 *    resolved
 *  - Q197 option b: truncated mid-phrase, `Obtain a repeat brain MRI with` — staged
 *    truncated exactly as printed; the Q197 answer flowchart separately contains a box
 *    reading "Brain MRI ± Contrast", which hints at the missing word, but that box is the
 *    explanation diagram, not option b's printed text, and is NOT used to complete it
 *  - Q197 flowchart (explanation): `Toximetabolic` printed as one word (for "Toxi-metabolic"
 *    or "Toxic-metabolic")
 *  - Q189 explanation (Q189's own answer box): ends with no final period as printed —
 *    `...purposeful responses`
 *
 * Q194 carries a waveform figure between stem and options, described (never interpreted)
 * on its entry via a `note` field, its position marked, no diagnostic content read into it.
 */
var GG_NR_T09_STAGED = [

{ n:177, p:37, key:'D', keyName:null,
  stem:'The most common cause of coma with fluctuating level of consciousness is:',
  opts:['Supratentorial lesions','Infratentorial lesions','Thalamic lesions','Metabolic causes'],
  box:null },

{ n:178, p:37, key:'B', keyName:null,
  stem:'Regarding the prognosis of coma patient. Which of the following nontraumatic causes had the best prognosis?',
  opts:['Brain stem infarction','Metabolic encephalopathy','Subarachnoid hemorrhage','Hypoxic ischemic encephalopathy'],
  box:'Metabolic encephalopathy typically has a better prognosis because it often results from reversible conditions that when corrected, can lead to significant recovery in the patient.' },

{ n:179, p:37, key:'A', keyName:null,
  stem:'Brainstem death is found in:',
  opts:['Brain death','Pontine hemorrhage','Hypoxic-ischemic encephalopathy','Subarachnoid haemorrhage'],
  box:null },

{ n:180, p:37, key:'A', keyName:null,
  stem:'Brain death can be confirmed by:',
  opts:['Flat EEG','MRI of the brain','CT scan of the brain','Flat ECG'],
  box:null },

{ n:181, p:37, key:'B', keyName:null,
  stem:'Moderate brain lesion in GCS (Glasgow Coma Scale) is indicated by a score of:',
  opts:['5','10','13','3'],
  box:null },

{ n:182, p:37, key:'C', keyName:null,
  stem:'Ptosis with dilated pupils is observed in:',
  opts:['Homer\'s Syndrome.','Myasthenia Gravis.','Oculomotor Palsy.','Botulism.'],
  note:'⚠️ Option a prints "Homer\'s Syndrome" (not "Horner\'s") — preserved verbatim, source typo.',
  box:null },

{ n:183, p:37, key:'A', keyName:null,
  stem:'Comatose patient with small pupils reactive to light is most likely due to:',
  opts:['Metabolic cause','Structural brain lesion','Atropine toxicity','Brain aneurysm'],
  box:null },

{ n:184, p:37, key:'A', keyName:null,
  stem:'Glasgow coma scale:',
  opts:['is the sum of best eye movement, motor & verbal responses','A score of 8 indicates mild coma','The highest scores are 17','The lowest score is 5'],
  box:null },

{ n:185, p:37, key:'C', keyName:null,
  stem:'Pin point pupil may occur in:',
  opts:['Atropine toxicity','Surgical third cranial nerve lesion','Pontine hemorrhage','Trochlear nerve lesion'],
  box:null },

{ n:186, p:37, key:'A', keyName:null,
  stem:'42-year-old male presents to ER after an abrupt onset of severe weakness. He reports that he suddenly became unable to move his arms and legs while at work, although he remained fully aware and able to blink and move his eyes vertically. On examination, he is fully conscious but unable to speak or move except for his eyes His breathing is normal. Which of the following is the most likely diagnosis for this patient?',
  opts:['Locked-in syndrome','Persistent vegetative state','Brainstem stroke'],
  note:'⚠️ SOURCE DEFECT, confirmed by pixel-level check (verdict-186-197-198.md): prints only three options a-c, ending at "Brainstem stroke"; clean white margin below, next page opens cleanly at Q187, nothing lost at the page edge. Key A is within this 3-option range. Stem also run-on as printed: "except for his eyes His breathing is normal." (no punctuation between "eyes" and "His") — preserved verbatim.',
  box:null },

{ n:187, p:38, key:'D', keyName:null,
  stem:'patient in ICU with loss of consciousness and absent corneal, gag, occulocephic reflexes but biceps and brachioradialis reflexes are present, what is the diagnosis?',
  note:'⚠️ Stem opens lowercase "patient" — preserved verbatim, source style. "occulocephic" printed as such (likely intended "oculocephalic") — preserved verbatim. Option b prints "presistent" (for "persistent") — preserved verbatim.',
  opts:['deep coma','presistent vegetative state','locked in syndrome','brain stem death'],
  box:'Brain stem death refers to the irreversible loss of all functions of the brainstem, which controls essential functions like breathing, heart rate, and reflexes such as the corneal reflex.' },

{ n:188, p:38, key:'A', keyName:null,
  stem:'What is the characteristics of mild traumatic brain injury?',
  opts:['Glasgow Coma Score 13','Uncal herniation','Manifestations of brain compression','Lucid interval'],
  box:null },

{ n:189, p:38, key:'B', keyName:null,
  stem:'A patient was in coma for 6 weeks after a road traffic accident. Currently he has spontaneous eye opening and can breathe spontanously. He does not respond to any verbal stimulus to following best describes the current state any verbal is. Which of the following best describes the current state?',
  note:'⚠️ Stem is garbled/self-duplicating as printed — contains a jumbled fragment ("He does not respond to any verbal stimulus to following best describes the current state any verbal is. Which of the following best describes the current state?") — staged exactly as transcribed, not resolved. "spontanously" printed as such (for "spontaneously") — preserved verbatim. Option b prints "Persistant" (for "Persistent") — preserved verbatim.',
  opts:['Brain stem death','Persistant vegetative state','Locked-in syndrome','Coma'],
  box:'PVS is characterized by spontaneous eye opening and breathing but the absence of awareness or purposeful responses' },

{ n:190, p:38, key:'C', keyName:null,
  stem:'Which of the followings describe a state of unresponsiveness?',
  note:'⚠️ "followings" printed as such (for "following") — preserved verbatim, source grammar.',
  opts:['Delirium','Confused','Stupor','Lethargy'],
  box:null },

{ n:191, p:38, key:'C', keyName:null,
  stem:'Coma implies dysfunction of which of the following structures?',
  opts:['Unilateral cerebral hemispheres','Only the ARAS','ARAS or both hemispheres','The basal ganglia and thalamus'],
  box:null },

{ n:192, p:38, key:'A', keyName:null,
  stem:'Sustained hyperventilation is commonly associated with:',
  opts:['Metabolic acidosis','Pontine infarct','Medullary damage','Airway obstruction'],
  box:null },

{ n:193, p:38, key:'C', keyName:null,
  stem:'Apneustic breathing, characterized by inspiratory pauses, is most commonly seen in which of the following?',
  opts:['Metabolic coma','Transtentorial herniation','Pontine lesions (especially infarct)','Upper brainstem lesions'],
  box:null },

{ n:194, p:38, key:'D', keyName:null,
  stem:'A comatosed patient presents with following type of respiration breathing, which of the following would you most likely suspect as the cause?',
  note:'[FIGURE — between stem and options] A small teal/blue-green hand-drawn line-art waveform: a horizontal trace made of roughly four clustered groups of jagged up-down oscillations, each cluster separated by a short flatter connecting segment; the clusters grow somewhat in amplitude/density left to right before the trace ends. No axis labels, no scale, no caption printed on the figure. Described only, not interpreted into an answer.',
  opts:['Pontine infarction','Medullary damage','Cerebellar hemorrhage','Metabolic encephalopathy'],
  box:null },

{ n:195, p:38, key:'D', keyName:null,
  stem:'What is the Glasgow Coma Score of a patient with eye opening to painful simulations localization, and verbalization?',
  note:'⚠️ "simulations" printed as such (likely intended "stimulation") — preserved verbatim. Stem punctuation as printed, including the comma placement, preserved verbatim.',
  opts:['7','6','10','11'],
  box:null },

{ n:196, p:39, key:'B', keyName:null,
  stem:'A 60-year-old female presents with acute onset of coma and left-sided weakness following a sudden headache. Her examination shows right-sided hemiparesis and dysphasia. Her brain CT is normal. What is the next step?',
  note:'⚠️ Stem is internally inconsistent as printed — "left-sided weakness" then "right-sided hemiparesis" — transcribed exactly as printed, not resolved/corrected.',
  opts:['Order a brain MRI to assess for ischemic stroke or other lesions.','Start the stroke management protocol.','Order a brain MRI with contrast.','Obtain an EEG to exclude nonconvulsive status epilepticus.'],
  box:null },

{ n:197, p:39, key:'A', keyName:null,
  stem:'A 55-year-old patient is found comatose with no focal neurological findings after being brought to the ER. The patient has no history of trauma, and initial lab tests, including electrolytes, and liver function tests, are normal. The brain CT and MRI scans are also normal. What is the next step in managing this patient?',
  opts:['Order an EEG to rule out nonconvulsive status epilepticus.','Obtain a repeat brain MRI with','Start ischemic stroke management.','Perform a psychiatric evaluation.'],
  note:'⚠️ SOURCE DEFECT, confirmed by pixel-level check at both 200 and 400 dpi (verdict-186-197-198.md): option b is truncated mid-phrase at "...MRI with" — not at a page edge, fully bracketed by Q196 above and Q198 below on the same page, no continuation elsewhere. Staged truncated exactly as printed. The Q197 answer flowchart (see box) contains a box reading "Brain MRI ± Contrast", hinting at the missing word, but that is the explanation diagram, not option b\'s printed text — NOT used to complete it. ⚠️ The "explanation" for this key is itself a FLOWCHART IMAGE, not prose; box below transcribes its boxes/arrows in reading order, not verbatim prose.',
  box:'[Explanation printed as a flowchart image, not prose — transcribed structure, reading order:] "No Focal Findings" -> "Toximetabolic causes" -> branch "Yes" -> "IV naloxone or flumazenil (possible narcotic or benzodiazepine overdose)"; branch "No" -> "Brain MRI ± Contrast" -> branch "Normal" -> "ECG"; branch "Abnormal" -> [box present, no further branch/box printed beneath it — chart ends here]. "Toximetabolic" printed as one word (for "Toxi-metabolic" or "Toxic-metabolic") — preserved verbatim. No caption or prose accompanies the chart.' },

{ n:198, p:39, key:'A', keyName:null,
  stem:'A 62-year-old male is brought to the ER in a coma following several days of fever and septic symptoms. On examination, he is unresponsive with fever, and no focal neurological deficits. What should be your initial approach?',
  opts:['Obtain an urgent (LP) to exclude CNS infection (if no contraindications).','Start empiric antibiotics immediately without performing an LP.','Obtain a brain CT scan to rule out structural lesions.'],
  note:'⚠️ SOURCE DEFECT, confirmed by pixel-level check (verdict-186-197-198.md): prints only three options a-c; clean white margin below option c, footer intact. The next page\'s answer entry for 198 prints the key only (A), no restated option list — checked, nothing recoverable. Key A is within this 3-option range.',
  box:null }

];
