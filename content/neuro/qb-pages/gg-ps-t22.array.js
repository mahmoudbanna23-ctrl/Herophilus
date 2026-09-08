// Grade Gain — neuropsychiatry & neurosurgery qb.pdf
// SECTION 2 (Psychiatry), TOPIC 22 "Substance-related Disorders & Psychopharmacology"
// Questions: book pp.89–90 (PDF 94–95). Answers: book p.91 (PDF 96), answers alone.
// Offset: PDF sheet = book page + 5 held on every numbered supplied sheet:
//   PDF 94 = folio 89; PDF 95 = 90; PDF 96 = 91; PDF 97 = 92; PDF 98 = 93.
//   PDF 99 is unnumbered, so the offset cannot be checked on that sheet.
//
// PRINTED: 17 questions, Q137–Q153. The contents claim supplied in the brief is 16;
//   the measured count exceeds that claim by one. The count was not adjusted to the prior.
//   The p.89 question banner prints "Substance-related Disorders & Psychopharmacology";
//   the contents title supplied in the brief says "Substance-related Disorders & Pharmacology".
//   This title disagreement is recorded without resolution. The p.91 answer banner prints
//   "Substance-Related Disorders & Psychopharmacology".
//
// BOUNDARIES AND PAGE ROLES, read from the supplied 200 dpi images:
//   - PDF 94 (book p.89): questions only, left Q137–Q140, right Q141–Q145.
//   - PDF 95 (book p.90): questions only, left Q146–Q150, right Q151–Q153.
//   - PDF 96 (book p.91): answers only, left Q137–Q150, right Q151–Q153.
//   - No sheet carries both questions and answers for topic 22.
//   - Topic 22 ends at Q153. PDF 97 (book p.92) opens topic 23 at Q154 under
//     "Emergency, Devices & Psychotherapy / Questions": no gap or overlap at the boundary.
//   - QUESTION SEQUENCE, walked one number at a time:
//     137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153.
//   - ANSWER SEQUENCE, independently walked one number at a time:
//     137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153.
//   - No number is printed twice within either sequence and none is skipped. Each number
//     occurs once as a question and once as an answer line.
//
// THE ANSWER KEY PRINTS BARE LETTERS, with no option names beside the letters.
//   The letter/name cross-check is UNAVAILABLE and was NOT PERFORMED.
//   Printed letters: 137 B, 138 D, 139 B, 140 B, 141 B, 142 C, 143 A, 144 B,
//   145 D, 146 B, 147 C, 148 B, 149 B, 150 D, 151 A, 152 C, 153 B.
//   Letters are transcribed at 200 dpi; the separate 400 dpi re-read remains pending.
//
// OPTION COUNTS, counted separately for every question:
//   137:4, 138:4, 139:4, 140:4, 141:4, 142:4, 143:4, 144:4, 145:4,
//   146:4, 147:4, 148:4, 149:4, 150:4, 151:4, 152:4, 153:4. All print a–d.
// COMBINATION KEYS / LETTER-REFERENCING OPTIONS: none printed in Q137–Q153.
// BOXED (printed Explanation): Q140, Q142, Q143, Q147, Q151, Q153 = 6 of 17.
//   Every answer line was read. The other 11 have no Explanation block and use box:null.
//
// UNRESOLVED NUMERALS AT 200 DPI: none.
//   Numeric text read: Q141 "45-year-old", "6–12"; Q146 "30-year-old", "24 hours";
//   Q148 "6 months"; Q149 "0.1–0.5 mEq/L", "0.6–1.2 mEq/L", "1.5–2.5 mEq/L",
//   "3.0–4.0 mEq/L"; Q151 "24-year-old", "39.4 C", "180/100 mmHg", and its
//   Explanation "temperature >38°C"; Q153 option receptor numbers 3,2,3,2 and
//   Explanation "D2" (twice). No numeric drug dose or exponent is printed.
//
// FIGURES: none attached to questions on PDF 94–96, inspected end to end. The publisher
//   logos, coloured banners, rules and folio decorations are not question figures.
// REPRINTS: no word-for-word repeated question found within the supplied Q137–Q165 range.
//   Related stems are retained separately; no medical answer judgment was performed.
// ONE-PAST SECTION CHECK: PDF 99 visibly carries an unnumbered "Question Bank Neurosurgery"
//   contents page with a "1st EDITION" badge. It carries no psychiatry question or answer;
//   the check passed on the supplied images. No contents entries from PDF 99 are transcribed.
//
// FIELD SHAPE: follows gg-ps-t21.array.js, entries at column 0, continuations two spaces.
//   key is the printed uppercase LETTER under this brief's explicit format override.
//   p is the book question page; box is verbatim Explanation prose or null. Printed
//   wording, units and punctuation are retained; line wrapping and justification are joined.
//   Output is staging data awaiting a human check. No unresolved reading required a stop.

var GG_PS_T22_STAGED = [

{ n:137, p:89, key:'B', box:null,
  stem:'Which neurotransmitter is primarily involved in the brain reward system?',
  opts:['Serotonin','Dopamine','GABA','Norepinephrine'],
  note:'FOUR options. First question of topic 22.' },

{ n:138, p:89, key:'D', box:null,
  stem:'Which substance causes synthetic hallucinations?',
  opts:['Cocaine','Cannabis','Heroine','LSD'],
  note:'FOUR options.' },

{ n:139, p:89, key:'B', box:null,
  stem:'Korsakoff syndrome is characterized by:',
  opts:['Ataxia and ophthalmoplegia','Anterograde amnesia and confabulation','Seizures and coma','Respiratory depression'],
  note:'FOUR options.' },

{ n:140, p:89, key:'B',
  stem:'Which mood stabilizer requires monitoring for Stevens-Johnson syndrome?',
  opts:['Lithium','Lamotrigine','Valproate','Carbamazepine'],
  box:'Lamotrigine carries a risk of severe skin reactions',
  note:'FOUR options.' },

{ n:141, p:89, key:'B', box:null,
  stem:'A 45-year-old man reports daily consumption of 6–12 beers and hard liquor. He has blackouts, tolerance, withdrawal symptoms, and failed attempts to quit. His wife threatens to leave him due to his drinking. What is the most likely diagnosis?',
  opts:['Generalized anxiety disorder','Alcohol use disorder','Bipolar disorder','Major depressive disorder'],
  note:'FOUR options.' },

{ n:142, p:89, key:'C',
  stem:'Which medical complication is most associated with this disorder?',
  opts:['Hypothyroidism','Rheumatoid arthritis','Wernicke-Korsakoff syndrome','Psoriasis'],
  box:'Chronic alcohol use leads to thiamine deficiency, causing Wernicke (ataxia, ophthalmoplegia) and Korsakoff (amnesia, confabulation) syndromes',
  note:'FOUR options. The stem refers to the preceding Q141 disorder.' },

{ n:143, p:89, key:'A',
  stem:'The prefrontal cortex is critical for:',
  opts:['Executive functions','Dopamine release','Respiratory control','Motor coordination'],
  box:'PFC governs decision-making and impulse control',
  note:'FOUR options.' },

{ n:144, p:89, key:'B', box:null,
  stem:'Which substance causes constricted pupils during intoxication?',
  opts:['Cocaine','Heroine','Alcohol','Cannabis'],
  note:'FOUR options.' },

{ n:145, p:89, key:'D', box:null,
  stem:'MAOIs are rarely used due to:',
  opts:['Weight gain','Dry mouth','Sedation','Tyramine-cheese reaction'],
  note:'FOUR options.' },

{ n:146, p:90, key:'B', box:null,
  stem:'A 30-year-old heroin user complains of lacrimation, rhinorrhea, and diarrhea 24 hours after last use. What is the diagnosis?',
  opts:['Opioid intoxication','Opioid withdrawal','Serotonin syndrome','Alcohol withdrawal'],
  note:'FOUR options.' },

{ n:147, p:90, key:'C',
  stem:'Which medication is first-line for managing this condition?',
  opts:['Naltrexone','Acamprosate','Methadone','Bupropion'],
  box:'Methadone, a long-acting opioid agonist, prevents withdrawal and cravings',
  note:'FOUR options. The stem refers to the preceding Q146 condition.' },

{ n:148, p:90, key:'B', box:null,
  stem:'A patient stops sertraline abruptly after 6 months and reports electric-shock sensations and dizziness. What is the diagnosis?',
  opts:['Serotonin syndrome','Antidepressant discontinuation syndrome','Bipolar disorder','Opioid withdrawal'],
  note:'FOUR options.' },

{ n:149, p:90, key:'B', box:null,
  stem:'The therapeutic lithium serum range is:',
  opts:['0.1–0.5 mEq/L','0.6–1.2 mEq/L','1.5–2.5 mEq/L','3.0–4.0 mEq/L'],
  note:'FOUR options.' },

{ n:150, p:90, key:'D', box:null,
  stem:'Which of the following medications is a nicotine receptor partial agonist?',
  opts:['Bupropion','Naltrexone','Nicotine patch','Varenicline'],
  note:'FOUR options.' },

{ n:151, p:90, key:'A',
  stem:'A 24-year-old man with chronic schizophrenia that is maintained on antipsychotic treatment was brought to the emergency room after being found lying fixed in bed and is unable to communicate. Examination revealed that the patient was confused and disoriented. He has severe muscle rigidity and a temperature of 39.4 C. His blood pressure was 180/100 mmHg. His CBC showed leukocytosis. What is the most appropriate first line drug for treatment of this patient?',
  opts:['Bromocriptine','Lithium','Haloperidol','Lamotrigine'],
  box:'This patient is presenting with neuroleptic malignant syndrome (NMS), a rare but life-threatening condition associated with the use of antipsychotics. Key features include: Severe muscle rigidity Hyperthermia (temperature >38°C) Autonomic dysregulation (e.g., hypertension). Altered mental status (e.g., confusion, disorientation). Leukocytosis and elevated creatine kinase (CK) levels. Bromocriptine, a dopamine agonist, is commonly used to counteract dopamine receptor blockade caused by antipsychotics.',
  note:'FOUR options. The stem prints 39.4 C without a degree symbol; the Explanation separately prints >38°C.' },

{ n:152, p:90, key:'C', box:null,
  stem:'In managing a recurrent major depression, which of the following needs to be added to antidepressants?',
  opts:['Antipsychotics','ECT','Mood stabilized','Anti-convulsant'],
  note:'FOUR options.' },

{ n:153, p:90, key:'B',
  stem:'Conventional antipsychotics carry the risk of having extra-pyramidal side effects as they work in?',
  opts:['Striatal dopaminergic 3 receptors','Striatal dopaminergic 2 receptors','Prefrontal dopaminergic 3 receptors','Mesolimbic dopaminergic 2 receptors'],
  box:'Conventional (typical) antipsychotics, such as haloperidol and chlorpromazine, block dopamine D2 receptors in various dopaminergic pathways in the brain. The extrapyramidal side effects (EPS) arise primarily due to dopamine D2 receptor blockade in the striatal (nigrostriatal) pathway, which plays a critical role in motor control.',
  note:'FOUR options. Last question of topic 22; topic 23 opens at Q154 on book p.92.' },

];
