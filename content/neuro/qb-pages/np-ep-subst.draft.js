/*
 * "Neuro endpoint.pdf" - Substance-related disorders: 6 rows built by tools/bank-harness/npep-build.mjs.
 * OmniRoute gateway down for this batch; independent key read done by a Claude subagent against the
 * answer-page images instead of Gemini (2026-09-22) - 6/6 match, 0 mismatch. No fold candidates checked yet.
 */

{ id:'npep-subst-1', bank:'endpoint', module:'neuropsych', chapter:'ps-sud',
  stem:'Which substance withdrawal presents with pain, diarrhea, dilated pupils, and gooseflesh skin?',
  options:['Alcohol', 'Cannabis', 'Heroin', 'Ketamine'],
  answer:2,
  explanation:'Heroin is the keyed option. Heroin is an opioid, and opioid withdrawal classically causes diffuse body pain, diarrhea, dilated pupils, and piloerection, which produces gooseflesh skin (not taken from the course material). Other commonly associated features include lacrimation, rhinorrhea, yawning, sweating, nausea, vomiting, anxiety, and insomnia (not taken from the course material). These manifestations reflect rebound autonomic activity after opioid cessation (not taken from the course material).\n\nAlcohol withdrawal is not the best answer because it more typically causes tremor, anxiety, sweating, nausea, insomnia, tachycardia, hypertension, seizures, hallucinations, or delirium tremens in severe cases (not taken from the course material). Although gastrointestinal symptoms can occur, the combination of mydriasis and gooseflesh is characteristic of opioid withdrawal rather than alcohol withdrawal (not taken from the course material).\n\nCannabis withdrawal can cause irritability, anxiety, sleep difficulty, decreased appetite, restlessness, and dysphoric mood, but the autonomic syndrome described here is not typical (not taken from the course material). Ketamine withdrawal is less classically defined and may involve craving or psychological symptoms; it does not produce the characteristic opioid-withdrawal cluster of diarrhea, mydriasis, pain, and piloerection (not taken from the course material). Written for this bank — the endpoint file prints no explanation here.',
  objective:'Identify heroin withdrawal from its characteristic autonomic and gastrointestinal symptoms.',
  source:'Neuro endpoint.pdf, Substance-related disorders, Q1, p.1333 (answer p.1334)'
},

{ id:'npep-subst-2', bank:'endpoint', module:'neuropsych', chapter:'ps-sud',
  stem:'The use of Disulfiram in treatment of alcohol dependence is based on which mechanism?',
  options:['Substitution therapy', 'Antidepressant therapy', 'Behavioral therapy', 'Detoxification therapy'],
  answer:3,
  explanation:'The printed key is Detoxification therapy. Disulfiram is used after alcohol withdrawal and detoxification as part of relapse prevention. It inhibits aldehyde dehydrogenase, so alcohol intake leads to acetaldehyde accumulation and an unpleasant reaction including flushing, headache, nausea, vomiting, palpitations, and hypotension (not taken from the course material). This aversive consequence is intended to discourage further drinking (not taken from the course material).\n\nSubstitution therapy is wrong because it refers to replacing a substance with a safer pharmacologically related agent, such as opioid substitution with methadone or buprenorphine (not taken from the course material). Disulfiram does not substitute for alcohol or prevent withdrawal through replacement.\n\nAntidepressant therapy is wrong because disulfiram is not prescribed as an antidepressant and its principal role is not treatment of depressive symptoms. Coexisting depression may require separate assessment and treatment (not taken from the course material).\n\nBehavioral therapy is wrong according to the printed key. However, generally, disulfiram’s alcohol-deterrent effect is often described as aversion therapy or as supporting behavioural change, rather than detoxification itself (not taken from the course material). The bank nevertheless prints Detoxification therapy, so that is the staged answer.\n\nDetoxification therapy is the keyed option because the bank places disulfiram within the treatment approach to alcohol dependence following detoxification. Written for this bank — the endpoint file prints no explanation here.',
  objective:'Disulfiram is keyed by this bank as detoxification therapy for alcohol dependence.',
  source:'Neuro endpoint.pdf, Substance-related disorders, Q2, p.1335 (answer p.1336)'
},

{ id:'npep-subst-3', bank:'endpoint', module:'neuropsych', chapter:'ps-sud',
  stem:'What is the final stage of change according to the model of behaviour change proposed by Prochaska and DiClemente ?',
  options:['Action', 'Maintenance', 'Pre-contemplation', 'Contemplation'],
  answer:1,
  explanation:'Maintenance is the final stage listed in the Prochaska and DiClemente transtheoretical model of behaviour change. It refers to sustaining the behavioural change over time and working to prevent relapse. (not taken from the course material) The model is commonly described as progressing through pre-contemplation, contemplation, preparation, action, and maintenance. (not taken from the course material)\n\nAction is not the final stage because it is the period in which the person has begun making the intended behavioural change. (not taken from the course material) Although action is an important active phase, it precedes the longer-term task of maintaining that change.\n\nPre-contemplation is incorrect because it is an early stage in which the person does not yet intend to change the behaviour or may not recognise it as a problem. (not taken from the course material) It is therefore at the opposite end of the change process from maintenance.\n\nContemplation is also incorrect because it describes awareness of a problem and consideration of change, often with ambivalence still present. (not taken from the course material) The person is considering change rather than consistently sustaining it.\n\nThus, among the options provided, Maintenance is the final stage of change. Written for this bank — the endpoint file prints no explanation here.',
  objective:'The question tests identification of maintenance as the final stage in the Prochaska and DiClemente model of behaviour change.',
  source:'Neuro endpoint.pdf, Substance-related disorders, Q3, p.1337 (answer p.1338)'
},

{ id:'npep-subst-4', bank:'endpoint', module:'neuropsych', chapter:'ps-sud',
  stem:'A 52-year-old man was complaining about hearing and seeing miniature people who tell him to kill everyone in sight. He stated that these symptoms developed suddenly during the past 48 hours, but that he has had them on and off for years. He states that he has never previously sought treatment for the symptoms, but that this episode is particularly bad. He denies the use of any illicit substances. The patient is alert and oriented to person, place, and time. His mental status examination is normal except for his complaints. His thought process is normal. His drug toxicology screen is positive for marijuana. He is quite insistent that he needs to be "put away" in the hospital for the symptoms he is experiencing. Which of the following is the most likely diagnosis of this man?',
  options:['Malingering', 'Substance-induced psychosis', 'Schizophrenia', 'Schizophreniform disorder.'],
  answer:1,
  explanation:'The patient\'s acute-onset hallucinations (auditory and visual) with no prior psychiatric treatment history, along with a positive drug screen for marijuana, strongly suggest substance-induced psychosis. Cannabis, especially in high doses or in susceptible individuals, can trigger psychotic symptoms (e.g., paranoia, command hallucinations). The sudden worsening and his insistence on hospitalization (possibly due to distress) further support this.',
  objective:'Identify substance-induced psychosis in a patient with hallucinations and a positive marijuana toxicology screen.',
  source:'Neuro endpoint.pdf, Substance-related disorders, Q4, p.1339 (answer p.1340)'
},

{ id:'npep-subst-5', bank:'endpoint', module:'neuropsych', chapter:'ps-sud',
  stem:'A 23-year-old man is referred from an outpatient drug rehabilitation program to a psychiatrist for significant depression. The patient endorses having used “everything I can get my hands on, as often as I can get it.” A drug screen is positive for an illicit substance. The psychiatrist, however, doubts that the drug identified is responsible for the patient’s symptoms of depression. Which of the following drugs is most likely to be present on the drug screen?',
  options:['Cannabis', 'Cocaine', 'Alcohol', 'Methamphetamine'],
  answer:0,
  explanation:'While cannabis may show up on a drug screen, it is less commonly associated with significant depressive symptoms compared to other substances like alcohol or stimulants. The psychiatrist likely believes the cannabis is incidental to the patient’s depression.',
  objective:'To identify cannabis as the positive illicit substance considered less likely to explain significant depressive symptoms.',
  source:'Neuro endpoint.pdf, Substance-related disorders, Q5, p.1341 (answer p.1342)'
},

{ id:'npep-subst-6', bank:'endpoint', module:'neuropsych', chapter:'ps-sud',
  stem:'A 50-year-old homeless man is brought to the emergency department by the police for disruptive behavior. On mental status examination, he has an elevated affect, but he also has psychomotor agitation and paranoia; he says he “feels fantastic” but is wary of answering any questions, quickly becoming irritated. On physical examination, the patient exhibits a moderately elevated blood pressure and pulse rate. He is most likely intoxicated with which of the following substances?',
  options:['Alcohol', 'Barbiturates', 'Benzodiazepines', 'Cocaine'],
  answer:3,
  explanation:'Cocaine intoxication presents with euphoria, agitation, paranoia, increased energy, and physical examination and tachycardia. The patient’s elevated mood and suspiciousness are classic for stimulant use.',
  objective:'Identify cocaine intoxication from euphoria, agitation, paranoia, hypertension, and tachycardia.',
  source:'Neuro endpoint.pdf, Substance-related disorders, Q6, p.1343 (answer p.1344)'
}
