/* Grade Gain — neuropsychiatry & neurosurgery qb.pdf
 * SECTION 1 (Neurology), TOPIC 10 "Movement Disorders"
 * Questions book pp.41-44 (PDF 046-049) · Answers book pp.44-45 (PDF 049-050)
 * Offset: PDF page = book page + 5 (held on every supplied sheet: PDF 046=book 41
 * through PDF 051=book 46 — no sheet broke it).
 *
 * Book p.44 (PDF 049) is mixed: its left column closes the question run (Q225-227)
 * and its right column opens the answer run (keys 199-207, with explanations for
 * Q199, Q200, Q202, and Q203). Book p.45 (PDF 050) is answers-only, keys 208-227,
 * with explanations for Q211, Q219, and Q225, followed by a blank "YOUR NOTES" area.
 *
 * BANNER reads "Movement Disorders" on the opening question page and the mixed
 * question/answer page. The running head on all five pages in this range still reads
 * "Coma". PDF 051 (book p.46), supplied one page past the stated range, opens the
 * next banner, "Demyelinating Diseases Questions" (Q228); it contains nothing from
 * this topic and is not staged here.
 *
 * MEASURED: 29 questions printed, Q199-Q227 — not the brief's promised 23. They run
 * in sequence with no duplicate or skipped number. 29 printed answer keys cover the
 * same range: 199-207 on PDF 049 and 208-227 on PDF 050.
 *
 * ANSWER KEYS print as bare letters with no name beside them; `key` stores that
 * printed letter verbatim, matching t08's convention; `keyName` is null throughout.
 *
 * 7 of the 29 carry a printed Explanation box: Q199, Q200, Q202, Q203, Q211, Q219,
 * and Q225. VERBATIM STAGING RECORD: source spelling, capitalization, grammar, and
 * answer keys are retained as printed. Q205 begins lowercase "which"; Q203's stem
 * omits the linking word after "disease"; Q199's explanation says "right side" though
 * its question says "left arm"; these are recorded, not resolved.
 */
var GG_NR_T10_STAGED = [

{ n:199, p:41, key:'C', keyName:null,
  stem:'A 63-year-old man presents with a three-month history of tremor affecting his left arm. He had suffered from a depressive psychosis for 10 years for which he had received intermittent Chlorpromazine and Amitriptyline but had had not taken any therapy for the last 4 months. He describes that his two brothers also had tremors. On examination, he had a resting tremor of his left hand, with cogwheel rigidity of that arm and he had a mild generalized bradykinesia. What is the most likely diagnosis?',
  opts:['Benign essential tremor','Drug-induced Parkinsonism','Idiopathic Parkinson\'s disease','Multiple system atrophy'],
  box:'The most likely diagnosis is idiopathic Parkinson\'s disease due to the fact that the symptoms and signs are present only on the right side. Neuroleptic induced Parkinsonism is usually bilateral and symmetrical.' },

{ n:200, p:41, key:'B', keyName:null,
  stem:'A 55-year-old man presents with a resting tremor of his right arm and a diagnosis of idiopathic Parkinson\'s disease is made. Which one of the following drugs is most likely to help his tremor?',
  opts:['Amantadine','Cogentin','Cabergoline','Co-Carpi-L dopa'],
  box:'Anticholinergic treatment (e.g. Cogentin) is the treatment of choice of tremor predominantly Parkinson\'s disease.' },

{ n:201, p:41, key:'B', keyName:null,
  stem:'Non-rhythmic jerky purposeless movements in the hands of a 55-year-old man is:',
  opts:['Tardive dyskinesia','Chorea','Asterixis','Myoclonus'],
  box:null },

{ n:202, p:41, key:'A', keyName:null,
  stem:'Grimacing and involuntary chewing in a 75-year-old woman on long-term treatment with neuroleptics is:',
  opts:['Tardive dyskinesia','Chorea','Asterixis','Myoclonus'],
  box:'Tardive dyskinesia is a movement disorder that usually appears only after long-term treatment with typical antipsychotic medications and other drugs with dopamine antagonist.' },

{ n:203, p:41, key:'A', keyName:null,
  stem:'Which drug is used in a 65-year-old man with Parkinson\'s disease cannot tolerate levodopa-based therapy despite careful titration?',
  opts:['Bromocriptine','Haloperidol','Carbidopa','Clozapine','Domperidone'],
  box:'Bromocriptine is a dopamine receptor agonist and is indicated if levodopa therapy is felt to be no longer adequate or if the patient cannot tolerate levodopa therapy. especillay in early stages. The use of bromocriptine is limited by its adverse effects.' },

{ n:204, p:41, key:'B', keyName:null,
  stem:'Which of the following site of affection leads to chorea?',
  opts:['Substantia nigra.','Caudate nucleus.','Pyramidal tract.','Cervical cord.','Cauda equine'],
  box:null },

{ n:205, p:41, key:'A', keyName:null,
  stem:'which is an early sign of Parkinsonism:',
  opts:['Tremors.','Micrographia.','Uncontrolled aggression.','Spasticity.','Hypotonia.'],
  box:null },

{ n:206, p:41, key:'B', keyName:null,
  stem:'The site of disorder in Parkinsonism is:',
  opts:['Subthalamic nucleus','Substantia nigra','Corpus callosum','Red nucleus','Facial colliculus'],
  box:null },

{ n:207, p:42, key:'B', keyName:null,
  stem:'Cardinal feature of parkinsonism is:',
  opts:['Generalized clasp-knife spasticity','Rigidity','Bilateral extensor planter response','Dramatic response to corticosteroids','Waddling gait'],
  box:null },

{ n:208, p:42, key:'C', keyName:null,
  stem:'A male patient, aged 40 years, presents with gradual onset and progressive dementia, along with involuntary movements that are irregular in place and time interval. He also has a positive family history of the same disease. What is your diagnosis?',
  opts:['Alzheimer\'s Disease','Parkinson\'s Disease','Huntington\'s Disease','Sydenham chorea'],
  box:null },

{ n:209, p:42, key:'C', keyName:null,
  stem:'All the following conditions can cause hypotonia except:',
  opts:['Cerebral Palsy','Spinal Muscular Atrophy','Parkinsonism','Down Syndrome'],
  box:null },

{ n:210, p:42, key:'C', keyName:null,
  stem:'Which of the following neurotransmitters is involved in Parkinson disease pathology?',
  opts:['Serotonin','Noradrenaline','Dopamine','Histamine'],
  box:null },

{ n:211, p:42, key:'D', keyName:null,
  stem:'Which of the following drugs is curative for Parkinson disease?',
  opts:['Levodopa','Levodopa-carbidopa','Monoamino-oxidase inhibitors','None of the above'],
  box:'Currently, there is no cure for Parkinson\'s disease. The drugs listed help manage the symptoms by increasing dopamine levels or mimicking dopamine\'s effects.' },

{ n:212, p:42, key:'A', keyName:null,
  stem:'The cardinal feature of parkinsonism is:',
  opts:['bradykinesia','micrographia','monotonous speech'],
  box:null },

{ n:213, p:42, key:'C', keyName:null,
  stem:'Which type of involuntary movement will be regular?',
  opts:['Athetosis','Fasciculation','Tremors','Motor tics'],
  box:null },

{ n:214, p:42, key:'D', keyName:null,
  stem:'Female patient aged 27 years with subacute onset of involuntary movements which are jerky and irregular in amplitude, time interval and place. They involve the tongue, head, both upper limbs and lower limbs. This was associated with mild psychotic manifestations increase with stress. She had past history of polyarthralgia and kidney problems that were treated by corticosteroids. What is the most probable diagnosis?',
  opts:['Tremors','Athetosis','Motor tics','Chorea','Dystonia'],
  box:null },

{ n:215, p:42, key:'B', keyName:null,
  stem:'What is the most common involuntary movement between the age 20 and 60 years?',
  opts:['Chorea','Tremors','Athetosis','Dystonia','Tics'],
  box:null },

{ n:216, p:43, key:'A', keyName:null,
  stem:'A male patient presented with irregular involuntary movements affecting the upper and lower limbs for 1 year, along with cognitive impairment and a positive family history of a similar condition. What is the most likely diagnosis?',
  opts:['Huntington\'s disease','Essential tremors','Parkinson\'s disease','Wilson\'s disease'],
  box:null },

{ n:217, p:43, key:'B', keyName:null,
  stem:'Mono-amino oxidase inhibitor such as rasagiline is used in the treatment of:',
  opts:['Migraine','Parkinson disease','Dystonia','Epilepsy'],
  box:null },

{ n:218, p:43, key:'B', keyName:null,
  stem:'All of the following are considered non dopaminergic adverse effects of conventional antipsychotics except:',
  opts:['Dryness of mouth','Dystonia','Postural hypotention','Cardiac conduction block'],
  box:null },

{ n:219, p:43, key:'D', keyName:null,
  stem:'Which is the most characteristic feature of the tremor in Parkinson disease?',
  opts:['It improves with moderate alcohol intake','It is most pronounced when patients are asked to hold their arms in front of them','It worsens with action','It is a unilateral, resting tremor'],
  box:'In Parkinson\'s disease, tremor is a resting tremor that is typically unilateral (appearing more prominently on one side of the body). It usually occurs when the affected limb is at rest and improves with voluntary movement. This tremor is also not action-induced' },

{ n:220, p:43, key:'A', keyName:null,
  stem:'Which is a common non motor symptom in Parkinson disease?',
  opts:['Depression','Migraines','Palpitations and tachycardia','Prosopagnosia'],
  box:null },

{ n:221, p:43, key:'C', keyName:null,
  stem:'What is the typical tone observed in patients with chorea?',
  opts:['Hypertonia','Normal tone','Hypotonia','Spasticity'],
  box:null },

{ n:222, p:43, key:'A', keyName:null,
  stem:'The "boat shape" or "scaphoid shape" hand seen in chorea is characterized by:',
  opts:['Flexion at the wrist and overextension at the metacarpophalangeal and interphalangeal joints with fanning of the fingers','Tight grip with flexion of all fingers','Loss of movement in the wrist and fingers','Hyperextension of the wrist and fingers'],
  box:null },

{ n:223, p:43, key:'C', keyName:null,
  stem:'Which of the following is NOT typically associated with chorea?',
  opts:['Decreased muscle tone','Sudden jerky movements','Smooth, rhythmic tremors','Involvement of facial muscles, tongue, and limbs'],
  box:null },

{ n:224, p:43, key:'B', keyName:null,
  stem:'Which decade is the peak of onset of Parkinson’s disease?',
  opts:['Fifth decade','Sixth decade','Seventh decade','Eighth decade'],
  box:null },

{ n:225, p:44, key:'B', keyName:null,
  stem:'A 12-year-old male presents with slow, twisting movements in his hands and fingers. The movements are more prominent in the distal parts of his limbs, and he appears to have difficulty controlling them. His muscle tone is increased, and he exhibits rigidity. Based on these findings, what is the most likely diagnosis?',
  opts:['Huntington\'s disease','Athetosis','Parkinson\'s disease','Gilles De La Tourette\'s syndrome'],
  box:'Athetosis involves slow, twisting movements (often described as "mobile spasms") in the distal parts of the limbs, along with increased muscle tone and varying degrees of rigidity' },

{ n:226, p:44, key:'C', keyName:null,
  stem:'A 10-year-old boy presents with multiple motor and vocal tics, including eye blinking, throat clearing, and occasional head jerking. His symptoms started at the age of 6 and have persisted for several years. Based on the clinical features, what is the most likely diagnosis?',
  opts:['Athetosis','Parkinson\'s disease','Gilles De La Tourette\'s syndrome','Essential tremor'],
  box:null },

{ n:227, p:44, key:'D', keyName:null,
  stem:'A 22-year-old man presents with a history of repetitive movements involving the face and neck, such as head jerking and eye blinking. These tics are more noticeable under stress and can be momentarily suppressed. What is the most appropriate diagnosis for this patient?',
  opts:['Athetosis','Gilles De La Tourette\'s syndrome','Parkinson\'s disease','Tics disorder'],
  box:null }

];
