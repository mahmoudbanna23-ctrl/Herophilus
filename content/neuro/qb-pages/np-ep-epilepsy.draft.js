/*
 * "Neuro endpoint.pdf" — Chapter 3 "Epilepsy" (npep-epilepsy-1..9, 11..28, 30..40)
 * Schema-ready, splice-ready. Merged from three parallel staging parts (A pp.112-143, B pp.144-173,
 * C pp.174-199), each page checked against its image; 16 entries re-checked by an independent Opus refuter (PASS).
 * Bank 'endpoint' — distinct from the live 'gradegain' house bank already in questions.neuro.js.
 * Count is 38 = 40 printed - 1 skipped number - 1 fold. The source's printed numbering skips "29" (Q28 on
 * pp.176-177 is followed directly by "30." on pp.178-179, no page 29 exists). Q10 (p.140) and Q12 (p.144) are the
 * same question with reordered options and the same key: folded into npep-epilepsy-12 (the fuller printing), Q10's
 * printed box carried in its explanation and its citation in its source. Ids match the printed question numbers, so
 * npep-epilepsy-10 and npep-epilepsy-29 do not exist by design.
 * Within-batch near-duplicates left unfolded (reworded stems, not a fold shape): 1~14, 4~24, 16~25, 27~36, 32~38.
 * Defective keys, printed key kept and noted: Q9 (key "wait for the second attack"), Q23 (complex partial, aura only).
 * Q3 (syncope) and Q8 (ECT seizure confirmation) sit in this book section and are filed to nr-epilepsy.
 * p.112 is the Epilepsy divider; pp.113-119 are theory slides (not staged); p.120 is the "Questions" divider,
 * Q1 starts p.121; the last Epilepsy question is Q40 (p.198, answer p.199); p.200 is the Headache divider.
 * All 38 filed to chapter 'nr-epilepsy' (app/data/modules.js:224).
 */

{ id:'npep-epilepsy-1', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'If you have a patient with 4 generalized tonic-clonic seizures in the last hour, with regaining consciousness in between the attacks, what do you call this?',
  options:['Status epilepticus', 'Serial epileptic fits', 'Symptomatic seizures', 'Febrile convulsions'],
  answer:1,
  explanation:'The patient has repeated generalized tonic-clonic seizures but regains consciousness between the attacks, which is what separates serial epileptic fits (a run of discrete seizures with recovery in between; the term is not defined in the course slides — not taken from the course material) from status epilepticus. The course slide defines status epilepticus as repeated seizures without regaining consciousness for more than 30 minutes, or a single prolonged seizure lasting more than 5 minutes (Neuro endpoint.pdf p.119) — recovery of consciousness between attacks excludes it here. Symptomatic seizures are seizures with an identifiable underlying cause, and the stem gives none (not taken from the course material). Febrile convulsions are a childhood condition, age 6 months to 5 years (Neuro endpoint.pdf p.118); the stem describes no child and no fever. Written for this bank — the endpoint file prints no explanation here.',
  objective:'Distinguish serial epileptic fits (consciousness regained between attacks) from status epilepticus (no recovery for more than 30 minutes, or one seizure lasting more than 5 minutes).',
  source:'Neuro endpoint.pdf, Epilepsy, Q1, p.121 (answer p.122)'
},

{ id:'npep-epilepsy-2', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'Which of the following drugs should be avoided in myoclonic seizure?',
  options:['Carbamazepine', 'Levetiracetam', 'Valproate', 'Brivaracetam'],
  answer:0,
  explanation:'The course slides list valproate and clonazepam as the treatment of myoclonic seizures (Neuro endpoint.pdf p.115). They also state that carbamazepine and phenytoin are mainly used for focal seizures, whereas valproate, lamotrigine and topiramate are broad-spectrum antiepileptic drugs useful for mixed seizure types, including myoclonic seizures (Neuro endpoint.pdf p.116). Carbamazepine is therefore the narrow-spectrum, focal-seizure drug that does not belong in myoclonic seizures; it can also aggravate them (not taken from the course material). Levetiracetam and brivaracetam are not mentioned in the course slides; levetiracetam is an established treatment for myoclonic seizures and brivaracetam, its analogue, is not known to aggravate them (not taken from the course material). Valproate is one of the two drugs the slide prints for myoclonic seizures (p.115). Written for this bank — the endpoint file prints no explanation here.',
  objective:'Recognise carbamazepine (a focal-seizure drug) as the antiepileptic to avoid in myoclonic seizures, where valproate and clonazepam are used.',
  source:'Neuro endpoint.pdf, Epilepsy, Q2, p.123 (answer p.124)'
},

{ id:'npep-epilepsy-3', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'A 57-year-old female with history of hyperthyroidism had an attack of brief loss of consciousness preceded by blurring of vision and dizziness. This lasted for a few seconds. What is the most probable diagnosis?',
  options:['Seizure', 'Epilepsy', 'Syncope', 'Psychogenic pseudoseizure'],
  answer:2,
  explanation:'Printed comparison table (p.126), Syncope | Seizure (Epilepsy) | Psychogenic Pseudoseizure. Cause: Transient cerebral hypoperfusion (e.g., arrhythmia, vasovagal) | Abnormal cortical electrical activity | Psychological/psychiatric origin. Onset: Often with prodrome: dizziness, blurring of vision, sweating, nausea | Sudden, often without prodrome (may have aura) | Often in presence of audience; emotional trigger. Duration of LOC: Seconds (<1 min) | 1–2 min (generalized tonic-clonic) | Usually prolonged (>2–3 min). Movements: Brief myoclonic jerks possible | Tonic–clonic, automatisms | Asynchronous, bizarre, side-to-side. Recovery: Rapid, complete, no confusion | Postictal confusion, drowsiness, headache | Rapid or dramatic recovery, no postictal state. Tongue biting/incontinence: Rare | Common (especially lateral tongue biting) | Usually absent. Precipitating factors: Standing, arrhythmia, dehydration, vasovagal | Sleep deprivation, flashing lights, stress | Psychological stress, emotional situations. Associated conditions: Cardiac disease, orthostatic hypotension, thyroid disease (arrhythmia in hyperthyroidism) | Epilepsy, CNS lesions | Conversion disorder, psychiatric illness.',
  objective:'Diagnose syncope from a seconds-long loss of consciousness with a dizziness/blurred-vision prodrome and a thyroid (arrhythmia) background, using the syncope/seizure/pseudoseizure comparison table.',
  source:'Neuro endpoint.pdf, Epilepsy, Q3, p.125 (answer p.127; printed comparison table p.126)'
},

{ id:'npep-epilepsy-4', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'A 10-year-old male with repeated attacks of clonic movement in right upper limb and face lasting 1–2 min. He remains fully conscious and responsive. Most probable diagnosis?',
  options:['Focal aware motor seizures', 'Focal motor seizure with secondary generalization', 'Generalized tonic-clonic seizures', 'Atonic seizure'],
  answer:0,
  explanation:'Clonic movement confined to the right upper limb and face is a focal motor seizure, and the boy stays fully conscious and responsive, so awareness is preserved. The course slides describe simple focal seizures as those in which consciousness remains clear, in contrast to complex focal seizures with impaired (clouded) consciousness (Neuro endpoint.pdf p.113); "focal aware" is the current name for the older "simple focal" (not taken from the course material). Focal motor seizure with secondary generalization is excluded because the stem describes no spread to both sides and no loss of consciousness (the slides do not cover secondary generalization — not taken from the course material). Generalized tonic-clonic seizures are excluded even though their duration is given as 1–2 minutes (Neuro endpoint.pdf p.114): they are bilateral seizures with loss of consciousness (not taken from the course material). Atonic seizure is a sudden loss of postural tone ("drop attacks", Neuro endpoint.pdf p.115), not a clonic movement. Written for this bank — the endpoint file prints no explanation here.',
  objective:'Identify a focal aware (simple focal) motor seizure: unilateral clonic movement with fully preserved consciousness.',
  source:'Neuro endpoint.pdf, Epilepsy, Q4, p.128 (answer p.129)'
},

{ id:'npep-epilepsy-5', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'What level of consciousness associates myoclonic seizure ?',
  options:['No affection', 'Cloudy', 'Impaired', 'Complete loss'],
  answer:0,
  explanation:'Myoclonic seizures are characterized by brief, sudden, involuntary muscle jerks, often affecting the arms or upper body. These jerks are rapid and typically occur without loss of consciousness.',
  objective:'State that myoclonic seizures (brief shock-like jerks) typically occur without any affection of consciousness.',
  source:'Neuro endpoint.pdf, Epilepsy, Q5, p.130 (answer p.131)'
},

{ id:'npep-epilepsy-6', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'49-year-old male patient presented to ER with a history of a single focal motor fit with retained awareness. Examination revealed that he had right extensor planter response. Which investigation should be the first to request for his condition ?',
  options:['Nerve conduction study', 'CSF examination', 'MRI brain', 'EEG'],
  answer:2,
  explanation:'Focal motor seizures with neurological signs like Babinski’s indicate a possible structural brain lesion. MRI is the best first investigation to evaluate for such lesions.',
  objective:'Choose MRI brain as the first investigation for a focal motor seizure accompanied by a neurological sign (extensor plantar response).',
  source:'Neuro endpoint.pdf, Epilepsy, Q6, p.132 (answer p.133) — the source prints "planter" (verbatim, for "plantar")'
},

{ id:'npep-epilepsy-7', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'What instruction should be given to the public about care of the patient during an attack of generalized tonic clonic seizure ?',
  options:['Protect the body by mechanical restraint to avoid self-injury', 'Give him a sip of water to get him alert', 'Let the patient in the standing position', 'Do not put anything in his mouth'],
  answer:3,
  explanation:'During a seizure, inserting objects into the mouth can cause choking or injury. The correct approach is to protect the patient from injury and ensure a safe environment until the seizure ends.',
  objective:'Give the correct first-aid instruction for a generalized tonic-clonic seizure: protect from injury, put nothing in the mouth.',
  source:'Neuro endpoint.pdf, Epilepsy, Q7, p.134 (answer p.135); same question, same options, same key as house-bank npqb-nr-176 — left as two entries, cross-bank'
},

{ id:'npep-epilepsy-8', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'What is the gold standard for confirmation of seizure in ECT?',
  options:['Electromyogram (EMG)', 'Cuff method', 'Electroencephalography (EEG).', 'Galvanic skin response (GSR)'],
  answer:2,
  explanation:'EEG is the gold standard for confirming that a therapeutic seizure has occurred during electroconvulsive therapy (ECT), by recording brain electrical activity.',
  objective:'Name EEG as the gold-standard confirmation that a therapeutic seizure occurred during ECT.',
  source:'Neuro endpoint.pdf, Epilepsy, Q8, p.136 (answer p.137)'
},

{ id:'npep-epilepsy-9', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'A 13-year-old female patient presented with a complaint of a single generalized tonic clonic seizure during sleep last night. Examination revealed that she had normal physical and Mental developing and she was free neurologically. What is the most appropriate Management plan ?',
  options:['MRI brain', 'Wait for the second attack.', 'EEG then MRI brain', 'EEG then start a single antiepileptic drug'],
  answer:1,
  explanation:'The bank prints b, wait for the second attack, as the key. The stem describes one isolated generalized tonic-clonic seizure in a girl with normal physical and mental development and a normal neurological examination, i.e. nothing yet establishing epilepsy, which requires recurrent unprovoked seizures; antiepileptic drug treatment is generally deferred after a first unprovoked seizure until a second occurs (not taken from the course material). The course slides list EEG and CT/MRI brain among the investigations of epilepsy (Neuro endpoint.pdf p.117) and do not address management after a single first seizure; the bank key is recorded as printed and is not disputed here. Written for this bank — the endpoint file prints no explanation here.',
  objective:'Recall the bank key for a single first generalized tonic-clonic seizure in a neurologically and developmentally normal adolescent: wait for a second attack before treating.',
  source:'Neuro endpoint.pdf, Epilepsy, Q9, p.138 (answer p.139) — the answer page prints "Managment" (verbatim; the question page prints "Management")'
},

{ id:'npep-epilepsy-11', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'What is the significance of interictal EEG recording in the diagnosis of epilepsy?',
  options:['Diagnostic for a single unprovoked generalized tonic clonic seizures', 'Non helpful as epilepsy is only a clinical diagnosis', 'Helpful when the clinical history of epilepsy is missing', 'Helpful in the light of the clinical setting'],
  answer:3,
  explanation:'Interictal EEG can detect epileptiform discharges that support a diagnosis of epilepsy but is not definitive on its own. It should be interpreted in the context of a compatible clinical history and neurological examination.',
  objective:'State that interictal EEG supports but does not by itself establish epilepsy and must be read in the clinical setting.',
  source:'Neuro endpoint.pdf, Epilepsy, Q11, p.142 (answer p.143)'
},

{ id:'npep-epilepsy-12', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'Which drug should be avoided in focal seizures ?',
  options:['Carbamazepine', 'Topiramate', 'Phenytoin', 'Ethosuximide.'],
  answer:3,
  explanation:'The bank prints this question twice (Q10 and Q12, same stem, options reordered, same key); the two printings are kept as one entry. Q10\'s printed box (p.141), verbatim: "Ethosuximide is specifically effective for absence seizures and has no role in treating focal seizures. Using it in focal epilepsy would be ineffective and could delay proper treatment. Drugs like phenytoin, carbamazepine, and topiramate are appropriate for focal seizures."\n\nQ12\'s printed slide on the answer page (p.145), verbatim: "Choice of Antiepileptic drugs according to seizure type: Generalized tonic-clonic seizures→ phenytoin, valproate or levetiracetam. Focal seizures→ carbamazepine, phenytoin, lamotrigine, topiramate, lacosamide. Absence seizures→ Ethosuximide or valproate. Myoclonic seizures→ Valproate, clonazepam." Ethosuximide appears on this slide only under absence seizures, not under focal seizures; carbamazepine, phenytoin and topiramate are all listed for focal seizures. (The top edge of the printed slide carries a partly hidden, unreadable text fragment.)',
  objective:'Match antiepileptic drugs to seizure type: ethosuximide is an absence-seizure drug, not a focal-seizure drug.',
  source:'Neuro endpoint.pdf, Epilepsy, Q12, p.144 (answer p.145); printed again as Q10, p.140 (answer p.141)'
},

{ id:'npep-epilepsy-13', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'What is the tool that more preferred in diagnosis of epileptic seizures?',
  options:['Interictal EEG', 'ictal video EEG recording.', 'MRI brain', 'CT brain'],
  answer:1,
  explanation:'Video EEG during an actual seizure provides the most definitive diagnosis by correlating electrical activity with clinical symptoms. It is superior to interictal EEG.',
  objective:'Identify ictal video EEG recording as the preferred tool for diagnosing epileptic seizures, superior to interictal EEG.',
  source:'Neuro endpoint.pdf, Epilepsy, Q13, p.146 (answer p.147)'
},

{ id:'npep-epilepsy-14', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'A 30 years old patient experienced four attacks of generalized tonic clonic seizures in the last hour; with regaining of consciousness in between the attacks. What could be this patient suffering from?',
  options:['Febrile convulsions', 'Status epilepticus', 'Symptomatic seizures', 'Serial epileptic fits.'],
  answer:3,
  explanation:'Serial epileptic fits involve repeated seizures with complete or partial recovery in between, distinguishing them from status epilepticus, where recovery is incomplete.',
  objective:'Distinguish serial epileptic fits (recovery between attacks) from status epilepticus (incomplete recovery).',
  source:'Neuro endpoint.pdf, Epilepsy, Q14, p.148 (answer p.149)'
},

{ id:'npep-epilepsy-15', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'What is the EEG finding in psychogenic pseudo seizures?',
  options:['Always positive', 'Usually negative but can be positive', 'Always negative', 'Usually positive but can be positive in few cases'],
  answer:1,
  explanation:'In psychogenic non-epileptic seizures (PNES, or pseudo-seizures), the EEG is typically normal (negative) because there is no abnormal electrical brain activity. However, movement artifacts (e.g., muscle twitching, patient motion) can sometimes create false-positive EEG changes, though these are not true epileptiform discharges. This distinguishes PNES from epileptic seizures, which show clear ictal EEG abnormalities.',
  objective:'Recall that the EEG in psychogenic non-epileptic seizures is typically normal, with movement artifact the only source of false-positive changes.',
  source:'Neuro endpoint.pdf, Epilepsy, Q15, p.150 (answer p.151)'
},

{ id:'npep-epilepsy-16', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'Which drug is ruled out from the list recommended for treatment of status epilepticus?',
  options:['Propofol.', 'Phenytoin.', 'Diazepam.', 'Carbamazepine'],
  answer:3,
  explanation:'Carbamazepine is not recommended for acute management of status epilepticus due to its slow onset of action and potential to worsen some seizure types.',
  objective:'Recognise carbamazepine as not recommended in the acute management of status epilepticus.',
  source:'Neuro endpoint.pdf, Epilepsy, Q16, p.152 (answer p.153)'
},

{ id:'npep-epilepsy-17', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'What could be the diagnosis of a 4-year-old child who suffers from repeated febrile convulsions?',
  options:['Febrile syncope.', 'Epilepsy.', 'Recurrent provoked seizures.', 'Recurrent unprovoked seizures'],
  answer:2,
  explanation:'Febrile convulsions are considered provoked seizures triggered by fever; repeated episodes fall under recurrent provoked seizures, not epilepsy.',
  objective:'Classify repeated febrile convulsions as recurrent provoked seizures, not epilepsy.',
  source:'Neuro endpoint.pdf, Epilepsy, Q17, p.154 (answer p.155)'
},

{ id:'npep-epilepsy-18', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'A 17-year-old girl is brought to the emergency department with a generalized tonic–clonic seizure. Her mother found her fitting in her bedroom about 20 minutes ago. The ambulance crew report her oxygen saturation is 96% on 15 L of oxygen, and she has received two doses of rectal diazepam without response. What is the most appropriate management?',
  options:['Lorazepam', 'Phenobarbital', 'Intubation', 'Call ITU', 'Phenytoin loading'],
  answer:4,
  explanation:'Status epilepticus not responding to benzodiazepines (like diazepam) requires escalation with a second-line agent such as phenytoin. Lorazepam has already failed, so loading with phenytoin is appropriate. Note: the stem names rectal diazepam, not lorazepam, as the benzodiazepine already given; the box is transcribed exactly as printed.',
  objective:'Escalate benzodiazepine-refractory status epilepticus to a second-line agent (phenytoin loading).',
  source:'Neuro endpoint.pdf, Epilepsy, Q18, p.156 (answer p.157)'
},

{ id:'npep-epilepsy-19', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'A 23-year-old woman is evaluated for recurrent "funny turns." She is unaware of them, but witnesses describe blank staring, picking at her clothes, yawning, and recovery after a minute, often followed by drowsiness. What seizure type does this patient have?',
  options:['Absence', 'Tonic-clonic', 'Simple partial', 'Complex partial', 'Generalized'],
  answer:3,
  explanation:'The description of impaired awareness, automatisms (e.g., picking at clothes), and post-ictal drowsiness is typical of complex partial seizures. Absence seizures are shorter and lack post-ictal confusion.',
  objective:'Recognise a complex partial seizure from impaired awareness, automatisms and post-ictal drowsiness.',
  source:'Neuro endpoint.pdf, Epilepsy, Q19, p.158 (answer p.159)'
},

{ id:'npep-epilepsy-20', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'A 28-year-old man presents to A&E after a witnessed episode described as whole-body jerking. The episode was brief. Afterwards, he was drowsy and had a sore tongue. What is the most likely diagnosis?',
  options:['Tonic-clonic seizure', 'Absence seizure', 'Simple partial seizure', 'Complex partial seizure', 'Myoclonic seizure'],
  answer:0,
  explanation:'Tonic-clonic seizures involve a loss of consciousness followed by stiffening (tonic phase) and rhythmic jerking (clonic phase). Postictal drowsiness and tongue biting are typical features.',
  objective:'Recognise a generalized tonic-clonic seizure from whole-body jerking followed by postictal drowsiness and tongue biting.',
  source:'Neuro endpoint.pdf, Epilepsy, Q20, p.160 (answer p.161)'
},

{ id:'npep-epilepsy-21', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'A 7-year-old girl is observed by her father to have episodes of suddenly stopping activity, staring, and then quickly resuming. What is the most likely diagnosis?',
  options:['Tonic-clonic seizure', 'Absence seizure', 'Simple partial seizure', 'Complex partial seizure', 'Myoclonic seizure'],
  answer:1,
  explanation:'Absence seizures are brief episodes of impaired consciousness, often seen in children. The child may appear to "zone out" or stare blankly and quickly return to normal activity.',
  objective:'Recognise an absence seizure from brief childhood staring spells with immediate return to normal activity.',
  source:'Neuro endpoint.pdf, Epilepsy, Q21, p.162 (answer p.163)'
},

{ id:'npep-epilepsy-22', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'A 45-year-old man presents after a jerking episode that began in his right hand and spread to the left side of his body. Afterwards, he reported upper limb weakness. What is the most likely diagnosis?',
  options:['Tonic-clonic seizure', 'Absence seizure', 'Focal motor seizure', 'Complex partial seizure', 'Myoclonic seizure'],
  answer:2,
  explanation:'This seizure begins in one part of the brain and causes jerking movements on the contralateral side, often starting in one limb and spreading (Jacksonian march). Post-ictal weakness (Todd’s paresis) supports a focal onset. Note: the stem is transcribed as printed, with the jerking beginning in the right hand and spreading to the left side of the body.',
  objective:'Recognise a focal motor seizure with Jacksonian march and post-ictal Todd’s paresis.',
  source:'Neuro endpoint.pdf, Epilepsy, Q22, p.164 (answer p.165)'
},

{ id:'npep-epilepsy-23', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'A 39-year-old woman presents after a seizure. She recalls smelling burning rubber during the episode. What is the most likely diagnosis?',
  options:['Tonic-clonic seizure', 'Absence seizure', 'Simple partial seizure', 'Complex partial seizure', 'Myoclonic seizure'],
  answer:3,
  explanation:'The hallmark of a focal (partial) seizure with impaired awareness (complex partial seizure) is: A prodromal aura (e.g., unusual smell like burning rubber ,visual distortions). Impaired consciousness during the seizure (staring, unresponsiveness, automatisms like lip smacking). (Bank note: the stem describes only an olfactory aura the patient recalls and states no impairment of awareness, yet the printed key is complex partial seizure and the box above asserts impaired consciousness as a hallmark; the printed key is kept.)',
  objective:'Link an olfactory aura followed by impaired consciousness to a focal seizure with impaired awareness (complex partial seizure).',
  source:'Neuro endpoint.pdf, Epilepsy, Q23, p.166 (answer p.167)'
},

{ id:'npep-epilepsy-24', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'A 10-year-old boy presents with repeated episodes of clonic movements in the right upper limb and face lasting 1–2 minutes. He remains fully conscious and follows commands during the attacks. What is the most likely diagnosis?',
  options:['Simple partial (focal aware motor) seizures', 'Complex partial seizures', 'Secondary generalized seizures', 'Generalized tonic-clonic seizures'],
  answer:0,
  explanation:'These seizures involve focal motor activity without loss of consciousness. The patient remains alert and responsive throughout the episode.',
  objective:'Recognise a simple partial (focal aware motor) seizure from focal clonic movements with preserved consciousness.',
  source:'Neuro endpoint.pdf, Epilepsy, Q24, p.168 (answer p.169)'
},

{ id:'npep-epilepsy-25', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'Which of the following drugs is not used in the treatment of status epilepticus?',
  options:['Carbamazepine', 'Phenytoin', 'Phenobarbital', 'Lorazepam'],
  answer:0,
  explanation:'Carbamazepine is not effective in treating status epilepticus. First-line treatments include benzodiazepines, phenytoin, and phenobarbital.',
  objective:'Recognise carbamazepine as not effective in status epilepticus, whose first-line treatments are benzodiazepines, phenytoin and phenobarbital.',
  source:'Neuro endpoint.pdf, Epilepsy, Q25, p.170 (answer p.171)'
},

{ id:'npep-epilepsy-26', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'A 43-year-old man presents with new-onset complex partial seizures. What is the first investigation to order?',
  options:['MRI brain', 'Functional brain imaging', 'CSF analysis', 'EEG'],
  answer:0,
  explanation:'MRI is the most appropriate initial test in new-onset complex partial seizures to identify structural brain abnormalities like tumors or cortical dysplasia.',
  objective:'Choose MRI brain as the first investigation in new-onset complex partial seizures.',
  source:'Neuro endpoint.pdf, Epilepsy, Q26, p.172 (answer p.173)'
},

{ id:'npep-epilepsy-27', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'A 30-year-old man presents to the ER with repeated generalized tonic-clonic seizures over 1 hour without regaining consciousness. What is the most appropriate immediate treatment?',
  options:['IV thiopental sodium', 'IM diazepam', 'IV lorazepam', 'IM midazolam'],
  answer:2,
  explanation:'Lorazepam is the first-line treatment for status epilepticus due to its rapid onset and longer duration of action compared to other benzodiazepines. IV administration ensures immediate effect to stop ongoing seizures.',
  objective:'Identify IV lorazepam as the first-line drug for status epilepticus.',
  source:'Neuro endpoint.pdf, Epilepsy, Q27, p.174 (answer p.175)'
},

{ id:'npep-epilepsy-28', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'What best defines epilepsy?',
  options:['Recurrent unprovoked convulsions', 'Recurrent unprovoked seizures', 'Single seizure with EEG abnormalities', 'Seizures due to fever or head trauma'],
  answer:1,
  explanation:'Epilepsy is defined as two or more unprovoked seizures occurring more than 24 hours apart. The term "unprovoked" differentiates it from seizures caused by acute triggers like trauma or fever.',
  objective:'Define epilepsy as recurrent unprovoked seizures, distinct from provoked (febrile or traumatic) seizures.',
  source:'Neuro endpoint.pdf, Epilepsy, Q28, p.176 (answer p.177)'
},

{ id:'npep-epilepsy-30', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'A patient with both absence seizures and monthly generalized seizures needs which of the following treatments?',
  options:['Sodium valproate', 'Ethosuximide', 'Phenytoin', 'Carbamazepine'],
  answer:0,
  explanation:'Sodium valproate is effective against both absence seizures and generalized tonic-clonic seizures. It is considered the drug of choice in patients with mixed seizure types.',
  objective:'Choose sodium valproate when absence and generalized tonic-clonic seizures coexist.',
  source:'Neuro endpoint.pdf, Epilepsy, Q30, p.178 (answer p.179)'
},

{ id:'npep-epilepsy-31', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'A 6-year-old child has frequent episodes of staring, blinking, and brief lapses in consciousness occurring every 10 minutes, with no awareness. What is the treatment of choice?',
  options:['Ethosuximide', 'Phenytoin', 'Topiramate', 'Clonazepam'],
  answer:0,
  explanation:'Ethosuximide is the first-line treatment for childhood absence epilepsy. It specifically targets T-type calcium channels in thalamic neurons, which are implicated in absence seizures.',
  objective:'Identify ethosuximide as first-line therapy for childhood absence epilepsy and its T-type calcium channel mechanism.',
  source:'Neuro endpoint.pdf, Epilepsy, Q31, p.180 (answer p.181)'
},

{ id:'npep-epilepsy-32', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'What is the most appropriate investigation for a child with frequent absence seizures?',
  options:['EEG', 'MRI brain', 'CT scan', 'CSF analysis'],
  answer:0,
  explanation:'EEG is the most sensitive and specific investigation for diagnosing absence seizures, showing characteristic 3 Hz spike-and-wave discharges. Imaging studies are not typically required initially.',
  objective:'Identify EEG (3 Hz spike-and-wave) as the diagnostic investigation for absence seizures.',
  source:'Neuro endpoint.pdf, Epilepsy, Q32, p.182 (answer p.183)'
},

{ id:'npep-epilepsy-33', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'What is the most likely diagnosis for an 18-year-old female who had a convulsion episode without tongue biting or falling, lasting for a few minutes, as reported by her father?',
  options:['Generalized tonic-clonic seizure', 'Absence seizure', 'Syncope', 'Pseudoseizures'],
  answer:3,
  explanation:'The absence of typical features like tongue biting, falling, and postictal confusion suggests a non-epileptic event. Pseudoseizures, or PNES, are common in young females and are often triggered by psychological stress.',
  objective:'Recognise pseudoseizures (PNES) in a young female with a convulsive episode lacking tongue biting, falling and postictal confusion.',
  source:'Neuro endpoint.pdf, Epilepsy, Q33, p.184 (answer p.185)'
},

{ id:'npep-epilepsy-34', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'What is the most useful tool to confirm the diagnosis during a seizure-like episode?',
  options:['CT brain', 'MRI brain', 'Video EEG monitoring', 'Routine EEG'],
  answer:2,
  explanation:'Video EEG monitoring is the gold standard for differentiating epileptic seizures from pseudoseizures. It allows for simultaneous recording of clinical behavior and EEG activity during an event.',
  objective:'Identify video EEG monitoring as the gold-standard test to separate epileptic seizures from pseudoseizures.',
  source:'Neuro endpoint.pdf, Epilepsy, Q34, p.186 (answer p.187)'
},

{ id:'npep-epilepsy-35', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'What is the most appropriate treatment for pseudoseizures?',
  options:['Carbamazepine', 'Psychotherapy', 'Valproate', 'Clonazepam'],
  answer:1,
  explanation:'Pseudoseizures are psychological in origin and require psychiatric intervention. Antiepileptics are not effective in these cases and should be avoided.',
  objective:'Treat pseudoseizures with psychotherapy / psychiatric intervention, not antiepileptic drugs.',
  source:'Neuro endpoint.pdf, Epilepsy, Q35, p.188 (answer p.189)'
},

{ id:'npep-epilepsy-36', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'What is the first drug to administer in a patient with ongoing seizures for one hour (status epilepticus)?',
  options:['IV Thiopental sodium', 'IM Midazolam', 'IV Diazepam', 'IV Phenytoin'],
  answer:2,
  explanation:'IV diazepam is often used in emergencies to quickly abort seizures. Although lorazepam is preferred, diazepam is widely available and effective due to its fast onset. (Bank note: this option set contains no lorazepam, so the printed key is IV Diazepam; see npep-epilepsy-27 where IV lorazepam is offered and keyed.)',
  objective:'Choose IV diazepam as the first benzodiazepine when lorazepam is not among the options in status epilepticus.',
  source:'Neuro endpoint.pdf, Epilepsy, Q36, p.190 (answer p.191)'
},

{ id:'npep-epilepsy-37', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'What is the first lab investigation to perform in a patient with seizures?',
  options:['Random blood glucose', 'Serum sodium and potassium', 'Serum AED level', 'Blood urea and creatinine'],
  answer:0,
  explanation:'Hypoglycemia is a common reversible cause of seizures and should be ruled out first. Rapid bedside glucose testing can guide immediate management.',
  objective:'Check blood glucose first in a patient with seizures, since hypoglycaemia is a common reversible cause.',
  source:'Neuro endpoint.pdf, Epilepsy, Q37, p.192 (answer p.193); same fact as house-bank npqb-nr-157, reworded — left as two entries, cross-bank'
},

{ id:'npep-epilepsy-38', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'What is the most appropriate investigation for a child with brief staring spells and eye blinking?',
  options:['MRI brain', 'CT scan', 'EEG', 'Nerve conduction study'],
  answer:2,
  explanation:'EEG is essential for diagnosing absence seizures, which often present as brief staring spells with automatisms like eye blinking. It reveals classic spike-and-wave patterns.',
  objective:'Identify EEG as the investigation for a child with brief staring spells and eye blinking (absence seizures).',
  source:'Neuro endpoint.pdf, Epilepsy, Q38, p.194 (answer p.195)'
},

{ id:'npep-epilepsy-39', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'What is the most likely diagnosis in a 16-year-old male with 3 tonic-clonic seizures in 20 minutes without regaining consciousness, and a history of poor AED compliance?',
  options:['Status epilepticus', 'Cluster seizures', 'Febrile seizures', 'Psychogenic seizures'],
  answer:0,
  explanation:'Multiple seizures without regaining consciousness in a short time frame meet the definition of status epilepticus. Poor compliance with antiepileptic drugs is a common cause in adolescents.',
  objective:'Recognise repeated seizures without recovery of consciousness (with poor AED compliance) as status epilepticus.',
  source:'Neuro endpoint.pdf, Epilepsy, Q39, p.196 (answer p.197)'
},

{ id:'npep-epilepsy-40', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'Febrile seizures most commonly occur in which age group?',
  options:['Birth to 6 months', '6 months to 5 years', '5–10 years', '10–15 years'],
  answer:1,
  explanation:'Febrile seizures are most common in children between 6 months and 5 years of age, typically triggered by rapid fever rise. They are usually benign and do not indicate underlying epilepsy.',
  objective:'State the typical age range of febrile seizures (6 months to 5 years).',
  source:'Neuro endpoint.pdf, Epilepsy, Q40, p.198 (answer p.199)'
}

