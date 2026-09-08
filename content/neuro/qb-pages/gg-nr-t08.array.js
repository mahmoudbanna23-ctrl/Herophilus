/* Grade Gain — neuropsychiatry & neurosurgery qb.pdf
 * SECTION 1 (Neurology), TOPIC 08 "Epilepsy"
 * Questions book pp.31-35 (PDF 36-40) · Answers book pp.35-36 (PDF 40-41)
 * Offset: PDF page = book page + 5 (held on every sheet checked: PDF 035=book 30 ...
 * PDF 043=book 38 — no sheet broke it)
 *
 * Book p.35 (PDF 040) is mixed: it closes the question run (Q175-176) AND opens the
 * answer run (keys 141-146, with explanations for 141, 142, 143). Book p.36 (PDF 041)
 * is answers only, keys 147-176, with explanations for 157, 158, 160, 162, 169, 170.
 *
 * Topic 07 "Headache" closed at Q140 on book p.29; its own answer page (book p.30,
 * PDF 035) prints no questions (COUNT=0) — verified, not assumed. Topic 09 "Coma" opens
 * at Q177 on book p.37 (PDF 042); its own transcript was read alongside this topic's
 * (see the two flags below) but nothing from it is staged in this file.
 *
 * BANNER reads "Epilepsy" on every question and answer page in range (PDF 036-041).
 * The contents page itself is NOT among the nine transcripts supplied for this stage,
 * so its own phrasing of the topic name — and whether it agrees with the banner — could
 * not be checked here. Its claimed count of 36 (per a prior note handed down with this
 * brief, not independently seen by this pass) MATCHES the count measured below.
 *
 * MEASURED: 36 questions printed, Q141-Q176 — walked in sequence, none doubled, none
 * skipped. 36 answer keys, same range (141-146 then 147-176), same check: every question
 * has a key, every key has a question.
 *
 * ⚠️ ANSWER KEYS ARE BARE LETTERS. No name prints beside any key anywhere in this topic,
 * so the letter-vs-name cross-check is UNAVAILABLE here — stated rather than implied to
 * have passed.
 *
 * 9 of the 36 carry a printed Explanation box: Q141, Q142, Q143, Q157, Q158, Q160, Q162,
 * Q169, Q170.
 *
 * Three-option questions (Q144, Q145, Q148, Q165, Q168) print only a/b/c. Held as printed
 * with no defect note — nothing in the transcripts marks any of these five as a page-edge
 * cut, unlike topic 07's Q125 (which carried an explicit "confirmed at 200 dpi" note).
 *
 * VERBATIM STAGING RECORD. The source's own defects are PRESERVED here on purpose and are
 * corrected only in the draft:
 *  - Q141: `3 5-year-old`, `pulse is 1 10/min`
 *  - Q143: `1 0-20 seconds`
 *  - Q146: odd capitalisation — "...carbamazepine. yesterday The patient visited..."
 *  - Q147 option a: printed with an en dash, `IV diazepam 10-20 mg` (source: 10–20 mg)
 *  - Q155: `cyanosed What` (run-on, missing punctuation)
 *  - Q158 option d: `tonic colonic seizures` (for "tonic-clonic")
 *  - Q163: `exarcerbate` (for "exacerbate")
 *  - Q166 options b-d: each prints a duplicated letter baked into the option text itself
 *    — "b.CT brain", "c.EEG", "d.Nerve conduction study" — flagged on the entry too
 *  - Q171: `IN previous case` (for "In")
 *  - Q173: stem opens without its leading article — "patient has had 4 recurrent seizures"
 *  - Explanation-142: `ate features` (for "are features")
 *  - Explanation-143: `syn1ptoms` (garbled in the transcript, most likely "symptoms")
 *
 * ⚠️ Two defects belong to topic 09 "Coma", NOT this file — noted here only so topic 09
 * inherits them, nothing about them is staged below:
 *  - Q186 (book p.37, PDF 042) prints only three options (a-c, ending "Brainstem stroke")
 *    and appears to run past the page edge.
 *  - Q194 (book p.38, PDF 043) carries a waveform figure, transcribed as [figure].
 */
var GG_NR_T08_STAGED = [

{ n:141, p:31, key:'B', keyName:null,
  stem:'An unconscious 3 5-year-old man is brought to the ER by his wife. She explains that the patient takes Phenytoin for chronic epilepsy. An hour ago, the patient had a seizure but did not regain consciousness. Physical examination reveals that his T is 38.5°C, blood pressure is 95/40 mm Hg, pulse is 1 10/min, and RR is 20/min. During the examination, the physician observes the sudden onset of tonic-clonic convulsions. Which of the following is the most common precipitating cause of this emergency?',
  opts:['Alcohol withdrawal','Drug noncompliance','Head trauma','Hypoxia','Intracranial infection'],
  box:'The most frequent precipitating factor in adults with a diagnosis of epilepsy is drug noncompliance. Alcohol withdrawal (choice A), head trauma (choice C), hypoxia (choice D), intracranial infection (choice E), intracranial tumor, and metabolic alterations are other precipitating factors for status epilepticus.' },

{ n:142, p:31, key:'D', keyName:null,
  stem:'A 16 year-old male presents with a five-year history of absence seizures with three recent generalized convulsions. Which one of the following drugs, given as monotherapy, is most likely to control his fits?',
  opts:['Clonazepam','Ethosuximide','Gabapentin','Sodium Valproate','Topiramate'],
  box:'Absences, generalized tonic clonic seizures and myoclonus ate features of primary &generalized epilepsy. The treatment of choice includes Na valproate, lamotrigine. Clonazepam is useful in myoclonus,.Ethosuximide in isolated absences' },

{ n:143, p:31, key:'D', keyName:null,
  stem:'A 27-year-old man presents with a two years\' history of intermittent tingling sensation involving his left side. It starts in his fingers and spreads in 1 0-20 seconds to affect the whole arm and leg on the same side. The attacks only last for one minute. What is the most likely diagnosis?',
  opts:['Hyperventilation','Migraine with aura','Multiple sclerosis','Somatosensory seizures','Transient ischemic attacks'],
  box:'Positive syn1ptoms (jerking, tingling) usually signify epilepsy. Negative symptoms (weakness, numbness) are usually caused by transient focal ischemia. Spread of symptoms (\'marching\') indicates migraine (in 5-20 minutes) or seizures (in seconds). The usual source of somatosensory seizures is the parietal lobe' },

{ n:144, p:31, key:'B', keyName:null,
  stem:'Best treatment for absence epilepsy:',
  opts:['Carbamazepine','Ethosuximide','Phenobarbital'],
  box:null },

{ n:145, p:31, key:'B', keyName:null,
  stem:'Which is diagnostic of epilepsy?',
  opts:['EEG','History taking','MRI brain'],
  box:null },

{ n:146, p:31, key:'A', keyName:null,
  stem:'A 20-year-old male with a long history of epilepsy presents with 3 generalized seizures in the past 90 minutes, during which he does not regain consciousness between seizures. His epilepsy was poorly controlled on phenytoin and carbamazepine. yesterday The patient visited a friend who advised him to stop all anti-epileptic medications and start herbal treatment. What is the most likely diagnosis?',
  opts:['Status epilepticus','Generalized tonic-clonic seizure','Epileptic encephalopathy','Convulsive syncope'],
  box:null },

{ n:147, p:32, key:'A', keyName:null,
  stem:'In previous case, what is the first-line pharmacological treatment you should administer to this patient?',
  opts:['IV diazepam 10–20 mg','IV lorazepam 10 mg','IV diazepam 0.3 mg/kg','IV phenytoin 0.1 mg/kg'],
  box:null },

{ n:148, p:32, key:'B', keyName:null,
  stem:'Which of the following is true regarding febrile convulsions?',
  opts:['Epilepsy, not seizures','Seizures, not epilepsy','Always a sign of underlying brain pathology'],
  box:null },

{ n:149, p:32, key:'A', keyName:null,
  stem:'A 5-year-old child presents with complaints of recurrent episodes of lapse of consciousness. During these episodes, the child freezes, has periods of staring, and blinks repeatedly. The episodes last for a few seconds and occur every 10 minutes, with the child being unaware of the event. The mother has noticed that the child does not respond during these episodes but quickly returns to baseline afterwards, with no confusion. What is the most likely diagnosis?',
  opts:['Absence epilepsy','Temporal lobe epilepsy','Tonic-clonic seizures','Hypoglycemic episode'],
  box:null },

{ n:150, p:32, key:'A', keyName:null,
  stem:'In previous case, what investigation would you order to confirm the diagnosis?',
  opts:['EEG','Brain MRI','Blood glucose','Head CT scan'],
  box:null },

{ n:151, p:32, key:'B', keyName:null,
  stem:'What is the first-line treatment in this patient?',
  opts:['Valproate','Ethosuximide','Carbamazepine','Lamotrigine'],
  box:null },

{ n:152, p:32, key:'A', keyName:null,
  stem:'A patient has received trauma to the head and immediately develops a seizure after the injury. What type of seizure is this?',
  opts:['Provoked seizure','Unprovoked seizure','Secondary epilepsy','Status epilepticus'],
  box:null },

{ n:153, p:32, key:'B', keyName:null,
  stem:'A patient present with status epilepticus. What is the most appropriate drug to treat this condition initially?',
  opts:['IM diazepam','IV diazepam','Thiopental','Oral phenytoin'],
  box:null },

{ n:154, p:32, key:'A', keyName:null,
  stem:'Treatment of status epilepticus includes intravenous injection of all of the following EXCEPT:',
  opts:['Carbamazepine','Phenytoin','Phenobarbitone','Diazepam','Lorazepam'],
  box:null },

{ n:155, p:33, key:'A', keyName:null,
  stem:'A father presents to the ER with his son, who has been experiencing generalized tonic-clonic seizures for the past 40 minutes. The child has a history of epilepsy and has missed the past 3 doses of his antiepileptic drug. The boy is cyanosed What is the most important complication to check for now?',
  opts:['Hypoxia','Hyperglycemia','Brain edema','Hypotension'],
  box:null },

{ n:156, p:33, key:'A', keyName:null,
  stem:'In previous case, which of the following will be given via IV route?',
  opts:['Diazepam','Phenytoin','Phenobarbital','The missed dose of the antiepileptic drug'],
  box:null },

{ n:157, p:33, key:'A', keyName:null,
  stem:'In previous case, what is the first lab investigation to perform?',
  opts:['Random blood sugar','Na-K levels','Drug blood concentration','Urea and creatinine'],
  box:'Random blood sugar is the first lab test to perform in a patient with status epilepticus to rule out hypoglycemia (a common cause of seizures) and metabolic disturbances that may precipitate or worsen seizure activity' },

{ n:158, p:33, key:'B', keyName:null,
  stem:'Pallor is commonly found in:',
  opts:['Focal motor seizures with retained consciousness','Syncope','Absence seizures','Generalized tonic colonic seizures'],
  box:'Pallor is commonly seen in syncope because it is often related to a sudden drop in blood pressure' },

{ n:159, p:33, key:'C', keyName:null,
  stem:'Complete loss of consciousness occurs in all of the following EXCEPT:',
  opts:['Atonic seizures','Tonic seizures','Myoclonic seizures','Generalized tonic-clonic seizures'],
  box:null },

{ n:160, p:33, key:'C', keyName:null,
  stem:'Intractable seizures:',
  opts:['Can be treated by wide-spectrum antiepileptics','Incurable','Treated surgically','None of the above'],
  box:'Surgical treatment is an option for patients with intractable seizures who have failed multiple medication trials. Surgical options might include resecting the focus of seizures in the brain or implanting devices like a vagus nerve stimulator' },

{ n:161, p:33, key:'B', keyName:null,
  stem:'Epilepsy is:',
  opts:['Recurrent unprovoked convulsions','Recurrent unprovoked seizures','Recurrent provoked seizures','A single seizure episode'],
  box:null },

{ n:162, p:33, key:'A', keyName:null,
  stem:'A 10 yrs. old male presenting with repeated attacks of clonic movement in the right upper limb and face. Each attack last for 1-2min. During the attack patient is fully conscious and responding to verbal orders. What is the most probable diagnosis?',
  opts:['Partial motor seizures','Complex partial seizures','Partial motor seizure secondary generalization','Generalized tonic-clonic seizures','Chorea'],
  box:'The patient\'s presentation is consistent with focal (partial) seizures affecting the right upper limb and face with clonic movements. During these attacks, the patient remains fully conscious and responsive, which is typical of simple partial seizures (now called focal seizures without impaired awareness).' },

{ n:163, p:33, key:'A', keyName:null,
  stem:'Which of the following drugs can exarcerbate absence seizures?',
  opts:['Carbamazepine','Valproate','Ethosuximide','Clonazepam'],
  box:null },

{ n:164, p:33, key:'B', keyName:null,
  stem:'Febrile convulsions + 3 afebrile seizures, what is the best management?',
  opts:['Sodium valproate','Antiepileptic for seizures and antipyretic for febrile convulsions','Two antiepileptics','Follow up'],
  box:null },

{ n:165, p:34, key:'A', keyName:null,
  stem:'A patient is admitted to the ICU with recurrent seizures and hyponatremia. What is the most likely diagnosis?',
  opts:['Symptomatic seizures','Symptomatic epilepsy','Idiopathic epilepsy'],
  box:null },

{ n:166, p:34, key:'C', keyName:null,
  stem:'Male child aged 6 years with recent scholastic achievement came to your clinic. His mother told you that he sometimes experiences attacks of lapse of consciousness that last for few seconds with eye blinking. During the attack he would not respond to her but after it, he could. What is the most appropriate investigation to ask for?',
  opts:['MRI brain','b.CT brain','c.EEG','d.Nerve conduction study'],
  note:'⚠️ Options b-d print a duplicated letter baked into the option text itself ("b.CT brain", "c.EEG", "d.Nerve conduction study") — held verbatim as printed, not repaired at this stage.',
  box:null },

{ n:167, p:34, key:'B', keyName:null,
  stem:'In previous case, what is the drug of choice for him?',
  opts:['Carbamazepine','Valproate','Phenytoin','Low dose Aspirin'],
  box:null },

{ n:168, p:34, key:'C', keyName:null,
  stem:'In previous case, what is the most probable cause of illness for this child?',
  opts:['Symptomatic to brain tumor','Symptomatic to encephalitis','Idiopathic'],
  box:null },

{ n:169, p:34, key:'B', keyName:null,
  stem:'Male patient with partial complex seizures that started at the age of 43 years, what is the first investigation to ask for?',
  opts:['Functional brain imaging','MRI Brain','EEG','CSF examination'],
  box:'partial complex seizures that begin in mid-life (e at age 43 in this case) are typically considered new-onset seizures and warrant a thorough investigation to determine the underlying cause.' },

{ n:170, p:34, key:'B', keyName:null,
  stem:'12-year-old female admitted to ER. Her father reports that she had convulsions for 40 minutes, but there was no tongue biting and no falling. What is the most likely diagnosis?',
  opts:['Epilepsy','Pseudoseizures','Focal seizures','Generalized tonic-clonic seizures'],
  box:'The description of no tongue biting and no falling during the 40-minute convulsion is atypical for generalized tonic-clonic seizures.' },

{ n:171, p:34, key:'C', keyName:null,
  stem:'IN previous case, what is the most useful diagnostic tool during the episode?',
  opts:['MRI Brain','Blood work','Video EEG','CT Scan'],
  box:null },

{ n:172, p:34, key:'B', keyName:null,
  stem:'In previous case, what is the appropriate treatment for this condition?',
  opts:['Antiepileptic drugs','Psychotherapy','Surgery','Hospitalization for observation'],
  box:null },

{ n:173, p:34, key:'A', keyName:null,
  stem:'patient has had 4 recurrent seizures in the last hour, with the patient regaining consciousness between each seizure. What is the most likely diagnosis?',
  opts:['Serial epileptic fits','Symptomatic seizure','Status epilepticus','Psychogenic non-epileptic seizures'],
  box:null },

{ n:174, p:34, key:'B', keyName:null,
  stem:'What is the EEG finding in the case of psychogenic pseudoseizures?',
  opts:['Always negative','Negative but can be positive','Positive with epileptiform activity','Abnormal with generalized slowing'],
  box:null },

{ n:175, p:35, key:'E', keyName:null,
  stem:'Which of the following anti-seizures drugs works best for a patient with juvenile Myoclonic epilepsy?',
  opts:['Ethosuximide','Phenytoin','Carbamazepine','Phenobarbitone','Sodium valproate'],
  box:null },

{ n:176, p:35, key:'D', keyName:null,
  stem:'What instruction should be given to the public about care of the patient during an attack of generalized tonic clonic seizure?',
  opts:['Protect the body by mechanical restraint to avoid self-injury','Give him a sip of water to get him alert','Let the patient in the standing position','Do not put anything in his mouth'],
  box:null }

];
