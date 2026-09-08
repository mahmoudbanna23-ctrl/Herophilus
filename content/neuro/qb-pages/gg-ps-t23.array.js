// Grade Gain — neuropsychiatry & neurosurgery qb.pdf
// SECTION 2 (Psychiatry), TOPIC 23 "Emergency, Devices & Psychotherapy"
// Questions: book pp.92–93 (PDF 97–98). Answers: book p.93 (PDF 98), shared with questions.
// Offset: PDF sheet = book page + 5 held on every numbered supplied sheet:
//   PDF 94 = folio 89; PDF 95 = 90; PDF 96 = 91; PDF 97 = 92; PDF 98 = 93.
//   PDF 99 is unnumbered, so the offset cannot be checked on that sheet.
//
// PRINTED: 12 questions, Q154–Q165. The contents claim supplied in the brief is 11;
//   the measured count exceeds that claim by one. The count was not adjusted to the prior.
//   The observed first and last numbers agree with the earlier-read claims Q154 and Q165.
//
// BOUNDARIES AND PAGE ROLES, read from the supplied 200 dpi images:
//   - PDF 97 (book p.92): questions only, left Q154–Q157, right Q158–Q161, under
//     "Emergency, Devices & Psychotherapy / Questions". Running head: "Emergency & Psychotherapy".
//   - PDF 98 (book p.93): BOTH questions and answers. Left column Q162–Q165; right
//     column answer banner "Emergency, Devices & Psychotherapy / Answers", then Q154–Q165.
//   - There is no answers-only sheet for topic 23.
//   - Topic 22 ends at Q153 on book p.90, with its answers ending at Q153 on book p.91.
//     Topic 23 opens at Q154 on book p.92: no gap or overlap at the boundary.
//   - QUESTION SEQUENCE, walked one number at a time:
//     154,155,156,157,158,159,160,161,162,163,164,165.
//   - ANSWER SEQUENCE, independently walked one number at a time:
//     154,155,156,157,158,159,160,161,162,163,164,165.
//   - No number is printed twice within either sequence and none is skipped. Each number
//     occurs once as a question and once as an answer line. Q162–Q165 each appear in both
//     columns of PDF 98 because that sheet carries their questions and their answer lines.
//
// THE ANSWER KEY PRINTS BARE LETTERS, with no option names beside the letters.
//   The letter/name cross-check is UNAVAILABLE and was NOT PERFORMED.
//   Printed letters: 154 C, 155 C, 156 D, 157 B, 158 B, 159 C, 160 B, 161 B,
//   162 A, 163 B, 164 B, 165 D.
//   Letters are transcribed at 200 dpi; the separate 400 dpi re-read remains pending.
//
// OPTION COUNTS, counted separately for every question:
//   154:4, 155:4, 156:4, 157:4, 158:4, 159:4, 160:4, 161:4, 162:4, 163:4,
//   164:4, 165:4. All print a–d.
// COMBINATION KEYS / LETTER-REFERENCING OPTIONS: none printed in Q154–Q165.
//   Q165's stem begins "All of the following"; no option is "All of the above".
// BOXED (printed Explanation): Q155, Q160, Q163 = 3 of 12.
//   Every answer line was read. The other 9 have no Explanation block and use box:null.
//
// UNRESOLVED NUMERALS AT 200 DPI: none.
//   Numeric text read: Q154 "22-year-old", "120 bpm"; Q164 "79-year-old".
//   Q154 mentions an increased risperidone dose but prints no numeric dose.
//   No numeric drug dose, laboratory value, threshold or exponent is printed in this topic.
//
// FIGURES: none attached to questions on PDF 97–98, inspected end to end. The publisher
//   logos, coloured banners, rules and folio decorations are not question figures.
// REPRINTS: no word-for-word repeated question found within the supplied Q137–Q165 range.
//   Q158 and Q164 both mention psychotic depression and refusing food, but their stems
//   and option sets differ. Both are retained separately, with no medical answer judgment.
// ONE-PAST SECTION CHECK: PDF 99 visibly carries an unnumbered "Question Bank Neurosurgery"
//   contents page with a "1st EDITION" badge. It carries no psychiatry question or answer;
//   the check passed on the supplied images. Psychiatry ends at Q165 on book p.93;
//   nothing overruns onto PDF 99. No contents entries from PDF 99 are transcribed.
//
// FIELD SHAPE: follows gg-ps-t21.array.js, entries at column 0, continuations two spaces.
//   key is the printed uppercase LETTER under this brief's explicit format override.
//   p is the book question page; box is verbatim Explanation prose or null. Printed
//   wording, units and punctuation are retained; line wrapping and justification are joined.
//   Output is staging data awaiting a human check. No unresolved reading required a stop.

var GG_PS_T23_STAGED = [

{ n:154, p:92, key:'C', box:null,
  stem:'A 22-year-old male presents with excessive sweating, agitation, disorientation, fever, and cogwheel rigidity. His heart rate is 120 bpm, and he recently had his risperidone dose increased. What is the most likely diagnosis?',
  opts:['Serotonin Syndrome','Anticholinergic Toxicity','Neuroleptic Malignant Syndrome (NMS)','Malignant Hyperthermia'],
  note:'FOUR options. First question of topic 23, following topic 22 Q153. No numeric risperidone dose is printed.' },

{ n:155, p:92, key:'C',
  stem:'What is the next step in managing a patient diagnosed with NMS?',
  opts:['Administer dantrolene immediately','Start IV benzodiazepines','Discontinue the antipsychotic and admit to ICU','Give bromocriptine'],
  box:'First step is discontinuing the offending drug. Supportive care in the ICU, including hydration and temperature management, is crucial',
  note:'FOUR options.' },

{ n:156, p:92, key:'D', box:null,
  stem:'Which of the following is NOT a risk factor for suicide?',
  opts:['Male gender','Previous suicidal attempts','Sense of worthlessness','Well-controlled chronic illness'],
  note:'FOUR options. NOT is underlined in print; plain text retains the word without the emphasis.' },

{ n:157, p:92, key:'B', box:null,
  stem:'Which condition is vagus nerve stimulation (VNS) approved to treat?',
  opts:['Anxiety disorders','Epilepsy and treatment-resistant depression','Schizophrenia','Bipolar disorder'],
  note:'FOUR options.' },

{ n:158, p:92, key:'B', box:null,
  stem:'In a patient with psychotic depression and suicidal ideation who refuses food, what is the most urgent intervention?',
  opts:['Start antidepressants','Begin electroconvulsive therapy','Offer psychodynamic therapy','Monitor and reassess in a few days'],
  note:'FOUR options. Related to Q164, but not a word-for-word reprint; retained separately.' },

{ n:159, p:92, key:'C', box:null,
  stem:'What is the primary mechanism of action of transcranial magnetic stimulation (TMS)?',
  opts:['Inducing seizures to reset brain chemistry','Delivering electrical impulses through implanted electrodes','Using magnetic fields to stimulate nerve cells','Increasing cerebral blood flow'],
  note:'FOUR options.' },

{ n:160, p:92, key:'B',
  stem:'Which condition is deep brain stimulation (DBS) most commonly used for?',
  opts:['Generalized anxiety disorder','Parkinson’s disease','Schizophrenia','Major depressive disorder'],
  box:'DBS is primarily used for movement disorders like Parkinson’s disease and essential tremors.',
  note:'FOUR options.' },

{ n:161, p:92, key:'B', box:null,
  stem:'What is the primary focus of CBT?',
  opts:['Exploring unconscious thoughts','Identifying and changing harmful thought patterns','Developing insight into past trauma','Strengthening coping mechanisms'],
  note:'FOUR options.' },

{ n:162, p:93, key:'A', box:null,
  stem:'What is the characteristic tetrad of symptoms in NMS?',
  opts:['Mental status change, rigidity, fever, and dysautonomia','Fever, rigidity, tremors, and hallucinations','Agitation, tachycardia, seizures, and mydriasis','Hypotension, confusion, hyperreflexia, and tremors'],
  note:'FOUR options.' },

{ n:163, p:93, key:'B',
  stem:'Which psychotherapy is best suited for individuals with borderline personality disorder?',
  opts:['Cognitive Behavioral Therapy','Dialectical Behavioral Therapy','Interpersonal Therapy','Psychoanalysis'],
  box:'DBT is a specific type of CBT designed to help regulate emotions and manage behaviors, particularly for borderline personality disorder.',
  note:'FOUR options.' },

{ n:164, p:93, key:'B', box:null,
  stem:'A 79-year-old male with psychotic depression is mute and refuses food. What is the best treatment plan?',
  opts:['Antidepressants and anxiolytics','Hospitalization and ECT','Outpatient counseling','Psychodynamic therapy'],
  note:'FOUR options. Related to Q158, but not a word-for-word reprint; retained separately.' },

{ n:165, p:93, key:'D', box:null,
  stem:'All of the following are true regarding catatonia, EXCEPT:',
  opts:['The diagnosis is not made if the catatonia is better explained by a primary mental disorder','There are no pathognomonic laboratory findings in catatonia','ECT is appropriate for catatonia','Benzodiazepines have no rule in treatment'],
  note:'FOUR options. EXCEPT is underlined in print; plain text retains the word without the emphasis. Last question and last answer line of topic 23 and the supplied psychiatry section.' },

];
