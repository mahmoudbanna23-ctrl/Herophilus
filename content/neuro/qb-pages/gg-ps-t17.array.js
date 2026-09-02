// Grade Gain — neuropsychiatry & neurosurgery qb.pdf
// SECTION 2 (Psychiatry), TOPIC 17 "Mood Disorders"
// Questions: book pp.72–74 (PDF 77–79). Answers: book p.75 (PDF 80), all on one page.
// Offset: PDF page = book page + 5.
// Printed: 23 questions, Q41–Q63. Contents page promised 22 (errs DOWNWARD again, by 1,
//   exactly as topic 16 did).
// Boundary MEASURED, not assumed: the "Mood Disorders / Questions" banner opens PDF 77
//   (book p.72) at Q41; the answer block "Mood Disorders / Answers" opens PDF 80 (book p.75)
//   at Q41 and closes on that same page at Q63; PDF 81 (book p.76) carries the banner
//   "Somatic symptoms and related disorders / Questions" opening at Q64 — that is topic 18.
//   The answer page carries NO questions; questions and answers do not share a page here.
//
// ⚠️ THE ANSWER KEY PRINTS BARE LETTERS WITH NO NAMES BESIDE THEM — every line is exactly
//    "<n>. Correct Answer: (X)". The letter/name cross-check that caught npqb-nr-23 is
//    therefore UNAVAILABLE for this entire topic. It was not performed and must not be
//    reported as having passed.
//    All 23 letters were instead re-read from 400 dpi crops of PDF 80 (both columns) to rule
//    out B/D and C/G glyph confusion. They match the 200 dpi read exactly.
//
// ⚠️ NUMBERS: this topic prints NO drug doses, NO serum lithium levels and NO exponents —
//    contrary to the brief's expectation. The only numerals of consequence are the two
//    gender ratios (Q42, Q58) and the vignette figures in Q50; all three were re-rendered at
//    400 dpi and confirmed. Nothing was taken from OCR.
//
// ⚠️ VERBATIM RECORD — the source's own typos are PRESERVED here on purpose
//    ("is brought the emergency department" [missing "to"], "Brief psychic reaction"
//     [for "psychotic"], "What is the female: male ratio" [space before the colon],
//     "Pressure of talks").
//
// No multi-answer ("two of the following") stems in this topic — every one of the 23 keys is
//   a single letter, checked line by line on the answer page.
// No figures in this topic — no question carries an image.
//
// Boxed (printed explanation): Q43, Q44, Q50, Q54, Q63 = 5 of 23, counted by reading every
//   answer line on PDF 80.

var GG_PS_T17_STAGED = [

{ n:41, p:72, key:'B', box:null,
  stem:'In classical manic episode, the patient is:',
  opts:['Depressed','Elated','Apathetic','Anxious'] },

{ n:42, p:72, key:'A', box:null,
  stem:'What is the gender ratio of males to females in bipolar disorders?',
  opts:['1:1','2:1','1:2','3:2'] },

{ n:43, p:72, key:'B',
  stem:'A 32-year-old female is brought the emergency department by the police after she was found standing in the middle of a busy highway, naked, commanding the traffic to stop. In the emergency room she is agitated and restless, with pressured speech and an affect that alternates between euphoric and irritable. Her father is contacted and states that this kind of behavior runs in the family. Which of the following is the most likely diagnosis?',
  opts:['Bipolar disorder, depression','Bipolar disorder, mixed state','Delirium','Cyclothymia'],
  box:'A mixed state in bipolar disorder involves symptoms of both mania and depression occurring simultaneously or in rapid succession. The patient\'s euphoria, irritability, agitation, and risky behavior are consistent with this presentation.' },

{ n:44, p:72, key:'D',
  stem:'What is the most effective treatment for major depression?',
  opts:['SSRIs','TCAs','MAOIs','ECT'],
  box:'ECT is the most effective treatment for severe, treatment-resistant major depression, particularly in cases with psychotic features, catatonia, or high suicide risk. It has a rapid onset of action and is highly effective when other treatments have failed.' },

{ n:45, p:72, key:'C', box:null,
  stem:'Depressive episode occurs in all of the following, EXCEPT:',
  opts:['Bipolar disorder','Major depression','Panic disorder','Hypothyroidism'] },

{ n:46, p:72, key:'B', box:null,
  stem:'Suicide out of disinhibition occurs mostly in:',
  opts:['Panic patients','Bipolar patients','Schizophrenic patients','Obsessive patients'] },

{ n:47, p:72, key:'C', box:null,
  stem:'Which of the following mood stabilizers is most probable to induce polydipsia and polyuria?',
  opts:['Valproic acid','Topiramate','Lithium','Carbamazepine'] },

{ n:48, p:72, key:'A', box:null,
  stem:'Which phrase is most correct for major depression with psychotic features?',
  opts:['Antipsychotic medication should be added to antidepressant','Psychotherapy is more effective than medication as therapeutic modality','High dose of antidepressant without antipsychotic is a must','Mood stabilizers should be added to antidepressant'] },

{ n:49, p:72, key:'D', box:null,
  stem:'All of the following are criteria of hypomania, EXCEPT:',
  opts:['Decreased need for sleep','Distractibility','Grandiosity','Occupational dysfunction'] },

{ n:50, p:73, key:'C',
  stem:'A 45-year-old man presents to his primary care physician with a 3-month history of persistent low mood, loss of interest in activities he once enjoyed, and difficulty concentrating at work. He reports feeling fatigued most of the day, sleeping excessively, and gaining 10 pounds due to overeating. He also mentions feelings of worthlessness and recurrent thoughts of death, though he denies any specific suicidal plans. What is the most likely diagnosis?',
  opts:['Generalized Anxiety Disorder','Bipolar Disorder','Major Depressive Disorder','Adjustment disorder'],
  box:'Symptoms have been present for 3 months, which meets the diagnostic criteria for MDD. The patient does not report manic or hypomanic episodes, ruling out bipolar disorder. While Generalized Anxiety Disorder can co-occur with depression, the primary symptoms here are more consistent with MDD.' },

{ n:51, p:73, key:'D', box:null,
  stem:'A person initially presenting with an episode of mania is classified as:',
  opts:['Personality disorder','Unipolar affective disorder','Unipolar mood disorder','Bipolar mood disorder'] },

{ n:52, p:73, key:'B', box:null,
  stem:'Major depression is most commonly associated with:',
  opts:['Neologism','Low self esteem','Flight of ideas','Decreased need for sleep'] },

{ n:53, p:73, key:'B', box:null,
  stem:'Which of the following is NOT seen in mania?',
  opts:['Pressure of talks','Disorientation','Elation of mood','Delusion of grandeur'] },

{ n:54, p:73, key:'D',
  stem:'A 36-year-old female presents with no interest in anything, a nihilistic attitude, and a sad appearance with suicidal ideas and plans. The most appropriate management is:',
  opts:['Mood stabilizer','Antidepressant','Antipsychotic','ECT'],
  box:'Symptoms suggest severe major depressive disorder with suicidal ideation and plans, which is a psychiatric emergency. In such cases, Electroconvulsive Therapy (ECT) is often the most appropriate and effective treatment, especially when there is an imminent risk of suicide.' },

{ n:55, p:73, key:'C', box:null,
  stem:'A 20-year-old man has presented with increased alcohol consumption and sexual indulgence, irritability, lack of sleep and not feeling fatigued even in prolonged periods of activity. All these changes are present for the past 3 weeks. What is the most likely diagnosis?',
  opts:['Schizophrenia','Alcohol dependence','Bipolar disorder','Impulse control disorder'] },

{ n:56, p:73, key:'A', box:null,
  stem:'A 55-year-old lady presented with decreased sleep and appetite and thoughts of spiritualism. She donates money and property and talks about God. Her husband died few days back and she has increased psychomotor activity. She is most likely suffering from:',
  opts:['Manic episode','Dysthymic state','Brief psychic reaction','Depressive episode'] },

{ n:57, p:74, key:'D', box:null,
  stem:'Which of the following drugs can cause manic episode?',
  opts:['Amphetamines','Cocaine','Steroids','All of the above'] },

{ n:58, p:74, key:'C', box:null,
  stem:'What is the female: male ratio in depressive disorder?',
  opts:['1:1','1:2','2:1','3:2'] },

{ n:59, p:74, key:'D', box:null,
  stem:'All of the following are TRUE about melancholic specifier, EXCEPT:',
  opts:['Diurnal mood variation','Guilt','Early morning awakening','Delusions'] },

{ n:60, p:74, key:'B', box:null,
  stem:'Which of the following is characteristic of bipolar II disorder?',
  opts:['Manic episode','Hypomanic episode','It is stress related','Mild depressive symptoms'] },

{ n:61, p:74, key:'C', box:null,
  stem:'Which of the following is NOT an indication for hospitalization in bipolar disorder?',
  opts:['Manic episode','Homicidal thoughts','Presence of social support','Non-compliance'] },

{ n:62, p:74, key:'C', box:null,
  stem:'What type of psychotherapy is used in treatment of bipolar disorder?',
  opts:['Supportive psychotherapy','Cognitive behavioral therapy','Compliance enhancement therapy','Interpersonal psychotherapy'] },

{ n:63, p:74, key:'C',
  stem:'Sarah, a 28-year-old woman, has been experiencing extreme mood swings over the past few months. For weeks, she feels overly energetic, sleeps very little, and engages in impulsive behaviors like excessive shopping and risky decision-making. However, these periods are followed by weeks of intense sadness, fatigue, and loss of interest in activities she once enjoyed. Her family has noticed that these mood changes are affecting her work and relationships. Sarah has no history of substance abuse or medical conditions that could explain these symptoms. Based on Sarah\'s symptoms, which of the following is the most likely diagnosis?',
  opts:['Major Depressive Disorder','Generalized Anxiety Disorder','Bipolar Disorder','Borderline Personality Disorder'],
  box:'Sarah experiences periods of elevated energy, reduced need for sleep, and impulsive behaviors (e.g., excessive shopping). These are hallmark symptoms of a manic or hypomanic episode. She also has periods of intense sadness, fatigue, and loss of interest, which are consistent with depressive episodes.' }

];
