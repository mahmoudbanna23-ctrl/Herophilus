/*
 * "Neuro endpoint.pdf" - Headache, printed pp.200-282 (Questions Q1 p.224 ... Q28 p.281, answer p.282): 27 entries
 * (`npep-headache-1..4,6..28`). 28 printed, none skipped, 1 fold: Q5 (p.232) is Q3 (p.228) again, same stem, options
 * reordered, same key -> folded into npep-headache-3, Q5's printed box carried in its explanation and its citation in
 * `source`. Pages 200-223 are the divider and theory slides; pp.220-221 are a lecture slide pair, not a question.
 * Cross-bank matches against the house bank (left as two entries, noted in `source`): 2 = npqb-nr-132, 27 ~ npqb-nr-129,
 * 23 ~ npqb-nr-123, 11 ~ npqb-nr-130. Within-batch near-duplicates left unfolded (reworded stems / other distractors):
 * 1~9, 2~28. Hand fixes after the refuter: Q12 two outside-fact tags added, Q9 footer removed. Keys agree with an
 * independent gateway read on all 28. Where a box is printed it is carried verbatim; all others end with the marker.
 */

{ id:'npep-headache-1', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'Which one of the following headaches is commonly associated with ipsilateral lacrimation?',
  options:['Migraine with aura', 'Migraine without aura', 'Cluster headache', 'Tension type headache'],
  answer:2,
  explanation:'Cluster headache is the keyed answer because it is a trigeminal autonomic cephalalgia, characterised by severe unilateral orbital, supraorbital, or temporal pain with ipsilateral autonomic features such as lacrimation, conjunctival injection, nasal congestion, rhinorrhoea, eyelid oedema, facial sweating, miosis, or ptosis (not taken from the course material). The autonomic symptoms occur on the same side as the headache, making ipsilateral lacrimation a classic associated feature (not taken from the course material).\n\nMigraine with aura is not the keyed option because its defining additional feature is a reversible aura, often visual, sensory, or language-related, occurring before or during the headache (not taken from the course material). Although migraine can occasionally include cranial autonomic symptoms, ipsilateral lacrimation is not its usual defining association (not taken from the course material).\n\nMigraine without aura is also not the keyed option. It commonly causes recurrent unilateral, pulsating headache with nausea and sensitivity to light or sound, but it lacks the characteristic preceding aura and does not classically present with prominent ipsilateral lacrimation (not taken from the course material).\n\nTension type headache is not the keyed option because it is typically bilateral, pressing or tightening in quality, and is not usually accompanied by prominent cranial autonomic symptoms such as lacrimation (not taken from the course material). Written for this bank — the endpoint file prints no explanation here.',
  objective:'Identify cluster headache as the headache classically associated with ipsilateral lacrimation.',
  source:'Neuro endpoint.pdf, Headache, Q1, p.224 (answer p.225)'
},

{ id:'npep-headache-2', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'What is the most common type of migraine aura ?',
  options:['Olfactory', 'Auditory', 'Gustatory', 'Visual'],
  answer:3,
  explanation:'The most common type of aura associated with migraine is visual aura.',
  objective:'The most common type of aura associated with migraine is visual aura.',
  source:'Neuro endpoint.pdf, Headache, Q2, p.226 (answer p.227); same question, same options, same key as house-bank npqb-nr-132 — left as two entries, cross-bank'
},

{ id:'npep-headache-3', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'A 55-year-old male patient presented with new onset frequent attacks of headache in the last month. Each attack lasted for around an hour. It was bilateral more to the left and associated with vomiting. What is the most appropriate clinical management ?',
  options:['Ask for CSF analysis', 'Ask for MRI brain', 'Start anti- hypertensive drug', 'Start anti-migraine treatment'],
  answer:1,
  explanation:'The bank prints this question twice (Q3 and Q5, same stem, options reordered, same key); the two printings are kept as one entry. Q3\'s printed box (p.229), verbatim: "New-onset headache in an older adult, especially with associated vomiting, raises concern for a secondary cause such as a brain tumor or intracranial pathology. An MRI is the most appropriate initial investigation to rule out serious structural abnormalities."\n\nQ5\'s printed box (p.233), verbatim: "Red flag >> Do MRI"',
  objective:'New-onset headache in an older adult with vomiting requires brain MRI to assess for a secondary structural cause.',
  source:'Neuro endpoint.pdf, Headache, Q3, p.228 (answer p.229); printed again as Q5, p.232 (answer p.233)'
},

{ id:'npep-headache-4', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'Male patient presented with frequent migraine attacks more than 10 attack per month, what is the best management plan ?',
  options:['Start topiramate', 'give triptans', 'Start steroid therapy', 'Ask for MRI brain'],
  answer:0,
  explanation:'Frequent migraine attacks require prophylactic therapy. Topiramate is an effective first-line preventive medication for chronic migraine.',
  objective:'Identify prophylactic treatment for frequent migraine attacks.',
  source:'Neuro endpoint.pdf, Headache, Q4, p.230 (answer p.231)'
},

{ id:'npep-headache-6', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'A 32-year-old man presented to the emergency department with a throbbing headache on the right side of his head. He had vomited several times and retreated to a dark corner of the department. He had a normal neurological examination and was otherwise well.\nWhich drug should be excluded from prophylactic therapy for this type of headache?',
  options:['Valproic acid', 'Topiramate', 'Lithium', 'Amitriptyline'],
  answer:2,
  explanation:'B- Preventive Migraine Treatments\nThese are groups of drugs that can be given to a patient to decrease the frequency of migraine\'s attacks.\nTypes of preventive therapy:\n• Medical treatment\n  o Antihypertensives: Beta blockers "propranolol" - Calcium channel blocker "verapamil"\n  o Antidepressants: tricyclics "Amitriptyline"\n  o Anti-epileptics: sodium valproate and Topiramate (drug of choice)\n\n117 | Page\n\n• Cyproheptadine: This drug may be used in children.\n• Monoclonal antibodies.',
  objective:'Identify the drug excluded from migraine prophylactic therapy.',
  source:'Neuro endpoint.pdf, Headache, Q6, p.235 (answer p.236)'
},

{ id:'npep-headache-7', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'A 33-year-old woman is noted to have severe alternating headaches. Her physician prescribed various medication which showed partial relief finally she was prescribed monoclonal antibodies, which have been highly effective . Which of the following types of headaches is most likely to be present?',
  options:['Migraine headache.', 'cluster headache', 'Cervical muscle spasm', 'Tension headache'],
  answer:0,
  explanation:'Monoclonal antibodies targeting CGRP (calcitonin gene-related peptide) or its receptor are specifically approved for migraine prophylaxis in patients with frequent or severe migraines. These drugs are not used for tension headaches, cluster headaches, or cervical muscle spasm.',
  objective:'CGRP-targeting monoclonal antibodies are used for migraine prophylaxis.',
  source:'Neuro endpoint.pdf, Headache, Q7, p.237 (answer p.238)'
},

{ id:'npep-headache-8', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'A 33-years-old female patient presented with persistent bilateral frontal headache and sense of tightening of her scalp. The pain triggered with stress and fatigue and lack of sleep. The headache sometimes was referred to the neck with sense of fullness or band like and continued throughout the day for several days per months What is the probable diagnosis of this patient?',
  options:['Cluster headache', 'Headache due to sinusitis', 'Migraine', 'tension headache'],
  answer:3,
  explanation:'The printed key selects tension headache. The stem describes a persistent bilateral frontal headache with a tightening sensation over the scalp, a band-like or fullness sensation, neck referral, and association with stress, fatigue, and lack of sleep. These are characteristic features of tension-type headache (not taken from the course material). Tension-type headache is commonly bilateral and pressing or tightening rather than pulsating, and it may last for hours to days (not taken from the course material).\n\nCluster headache is not supported because it is usually severe, strictly unilateral orbital, supraorbital, or temporal pain occurring in short recurrent attacks, often with ipsilateral autonomic features such as lacrimation or nasal congestion (not taken from the course material). None of these features is described.\n\nHeadache due to sinusitis is less likely because the question gives no nasal discharge, fever, facial tenderness, or positional facial pain suggesting acute rhinosinusitis (not taken from the course material). The stress-related and band-like description instead supports the printed key.\n\nMigraine is less likely because migraine is commonly unilateral and pulsating, often with nausea, vomiting, photophobia, phonophobia, or worsening with routine activity (not taken from the course material). Those associated features are not stated here. The bilateral tightening quality and trigger pattern fit tension headache better. Written for this bank — the endpoint file prints no explanation here.',
  objective:'Identify tension headache from a bilateral band-like stress-associated headache pattern.',
  source:'Neuro endpoint.pdf, Headache, Q8, p.239 (answer p.240)'
},

{ id:'npep-headache-9', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'Which headache is commonly associated with ipsilateral lacrimation?',
  options:['Migraine with aura', 'Cluster headache.', 'Tension type headache', 'Migraine without aura'],
  answer:1,
  explanation:'CLUSTER HEADACHE\n\nEpidemiology\n○ The least common of the 3 types of primary headache.\n○ CH usually begins in middle adult life (30s – 40s).\n○ CH is more common in males than in females; M:F=4:1.\n\nClinical picture\n♦ Attacks of cluster headache (CH) are typically short and occur with a clear periodicity. Typically, a patient experiences 1-2 cluster periods per year, each lasting 2 weeks to 3 months.\n♦ The pain of CH is manifested as follows:\n- Character: Excruciating, stabbing, sharp, and lancinating (as if the eye is being pushed out), rather than throbbing\n- Location: Unilateral, in the periorbital, retro-orbital. The pain tends to remain on the same side during the cluster period.\n- Onset: Sudden, peaking in 10-15 minutes\n- Pain is accompanied by various cranial parasympathetic symptoms, including the following\n\n✓ Ipsilateral lacrimation or conjunctival injection\n✓ Nasal stuffiness or rhinorrhea\n✓ Ipsilateral eyelid edema\n✓ Ipsilateral miosis or ptosis\n✓ Ipsilateral forehead and facial perspiration',
  objective:'Cluster headache is associated with ipsilateral cranial parasympathetic symptoms including lacrimation.',
  source:'Neuro endpoint.pdf, Headache, Q9, p.242 (answer p.243)'
},

{ id:'npep-headache-10', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'Which type of pain needs urgent imaging?',
  options:['Chronic mechanical low back pain', 'Neck pain with muscle exertion', 'Back pain associated with progressive neurological deficit.', 'Recurrent attacks of neck pain radiating to the shoulders'],
  answer:2,
  explanation:'Progressive neurological symptoms suggest spinal cord or nerve root compression. Urgent imaging (MRI) is needed to diagnose and treat potentially reversible conditions.',
  objective:'Progressive neurological deficit with back pain requires urgent imaging.',
  source:'Neuro endpoint.pdf, Headache, Q10, p.244 (answer p.245)'
},

{ id:'npep-headache-11', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'What is the mechanism of action of triptans for aborting migraine attacks?',
  options:['Serotoninergic agonist.', 'Cholinergic antagonist', 'Dopaminergic antagonist', 'Glutamate antagonist'],
  answer:0,
  explanation:'Triptans are selective 5-HT₁B/₁D serotonin receptor agonists. They cause cranial vasoconstriction and inhibit pro-inflammatory neuropeptide release, aborting migraine attacks.',
  objective:'Triptans act as serotonin receptor agonists to abort migraine attacks.',
  source:'Neuro endpoint.pdf, Headache, Q11, p.246 (answer p.247); reworded stem and options, same fact and key as house-bank npqb-nr-130 — left as two entries, cross-bank'
},

{ id:'npep-headache-12', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'female patient is at ways complaining of frequent attacks of an eye pain that is stabbing in nature, peaks after 10 minutes, and is associated with lacrimation, What could be prescribed for prophylaxis of such headache?',
  options:['Oral Amitriptyline', 'Oral aspirin', 'Intramuscular diclofenac', 'Verapamil.'],
  answer:3,
  explanation:'The printed key is Verapamil. The pattern described is consistent with cluster headache: recurrent severe unilateral orbital or periorbital pain with an autonomic feature, lacrimation. (not taken from the course material) Cluster attacks typically build rapidly and may occur frequently in bouts (not taken from the course material). Verapamil is generally taught as a first-line preventive treatment for cluster headache, reducing attack frequency during a cluster period (not taken from the course material). ECG monitoring is commonly required when it is prescribed because conduction abnormalities can occur (not taken from the course material).\n\nOral Amitriptyline is not the usual preventive drug for cluster headache. It is more often used as preventive treatment for migraine, tension-type headache, or some chronic pain syndromes (not taken from the course material). Oral aspirin is not appropriate prophylaxis for this syndrome; it is an analgesic and anti-inflammatory drug, but does not provide standard cluster-headache prevention (not taken from the course material). Intramuscular diclofenac is also an analgesic used for acute pain management rather than prevention. (not taken from the course material) Additionally, cluster pain escalates quickly, so acute treatment is generally directed toward rapidly acting options such as high-flow oxygen or a triptan, rather than delayed intramuscular analgesia (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Tests recognition of verapamil as prophylaxis for cluster headache.',
  source:'Neuro endpoint.pdf, Headache, Q12, p.248 (answer p.249)'
},

{ id:'npep-headache-13', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'What is the pain character in tension headache?',
  options:['Lancinating.', 'Stabbing.', 'Pulsatile.', 'Pressing.'],
  answer:3,
  explanation:'Tension headaches typically present as a bilateral, pressing or tightening sensation, often described as a "band-like" pressure.',
  objective:'Tension headache characteristically causes pressing pain.',
  source:'Neuro endpoint.pdf, Headache, Q13, p.251 (answer p.252)'
},

{ id:'npep-headache-14', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'What is the type of cluster headache?',
  options:['Primary headache.', 'Cryptogenic headache.', 'Secondary extracranial headache.', 'Secondary intracranial headache.'],
  answer:0,
  explanation:'Cluster headache is classified as a primary headache disorder because it is not secondary to another underlying pathology. It features recurrent, severe, unilateral pain typically around the eye.',
  objective:'Cluster headache is classified as a primary headache disorder.',
  source:'Neuro endpoint.pdf, Headache, Q14, p.253 (answer p.254)'
},

{ id:'npep-headache-15', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'A 41-year-old man complains of a terrible headache. It started an hour ago, without warning, while stressed at work. It affects the right side of his head. He scores it ‘11/10’ in severity. When asked, he agrees that light bothers him a little. He had a similar episode six months ago, experiencing very similar headaches over 2 weeks, which resolved spontaneously. On observation, he looks quite distressed and prefers to pace up and down, unable to sit still. What is the diagnosis?',
  options:['Subarachnoid haemorrhage', 'Tension headache', 'Intracerebral haemorrhage', 'Migraine', 'Cluster headache'],
  answer:4,
  explanation:'The sudden, severe unilateral headache with restlessness and photophobia is classic for cluster headache. The episodic pattern and pacing behavior help distinguish it from migraines and other types.',
  objective:'Recognise cluster headache from severe unilateral episodic headache with restlessness and pacing.',
  source:'Neuro endpoint.pdf, Headache, Q15, p.255 (answer p.256)'
},

{ id:'npep-headache-16', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'A cardiac patient with a history of migraines needs acute treatment. What is the best option?',
  options:['Ergotamine', 'Intramuscular ketorolac', 'Subcutaneous sumatriptan', 'Propranolol'],
  answer:1,
  explanation:'Triptans and ergotamine are contraindicated in cardiac patients due to vasoconstrictive effects. Ketorolac, a nonsteroidal anti-inflammatory drug, is a safer option for acute migraine relief in these patients.',
  objective:'Acute migraine treatment in a cardiac patient should avoid vasoconstrictive agents.',
  source:'Neuro endpoint.pdf, Headache, Q16, p.257 (answer p.258)'
},

{ id:'npep-headache-17', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'A patient presents with unilateral headache, lacrimation, and nasal congestion.\nWhat is the most likely diagnosis?',
  options:['Tension headache', 'Migraine', 'Cluster headache', 'Temporal arteritis'],
  answer:2,
  explanation:'Cluster headaches are characterized by unilateral pain, often with autonomic symptoms like lacrimation and nasal congestion. The attacks are typically short but severe and may occur in cyclical patterns.',
  objective:'Identify cluster headache from unilateral headache with lacrimation and nasal congestion.',
  source:'Neuro endpoint.pdf, Headache, Q17, p.259 (answer p.260)'
},

{ id:'npep-headache-18', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'Which of the following is the drug of choice for prophylaxis of cluster headaches?',
  options:['Verapamil', 'Sumatriptan', 'Ergotamine', 'Topiramate'],
  answer:0,
  explanation:'Verapamil is the first-line prophylactic agent for cluster headaches. It is effective in reducing the frequency and severity of attacks.',
  objective:'Verapamil is the first-line prophylactic drug for cluster headaches.',
  source:'Neuro endpoint.pdf, Headache, Q18, p.261 (answer p.262)'
},

{ id:'npep-headache-19', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'Which of the following is used as a preventive treatment for migraine?',
  options:['Triptans', 'Ergotamine', 'Topiramate', 'Paracetamol'],
  answer:2,
  explanation:'Topiramate is used for migraine prevention and helps decrease the frequency of attacks.\nAcute treatments like triptans and ergotamine are not suitable for prophylaxis.',
  objective:'Topiramate is used for migraine prevention.',
  source:'Neuro endpoint.pdf, Headache, Q19, p.263 (answer p.264)'
},

{ id:'npep-headache-20', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'Headache due to brain tumors is typically worse at what time of day?',
  options:['Evening', 'During exertion', 'Morning', 'After meals'],
  answer:2,
  explanation:'Headaches from brain tumors are often worse in the morning due to increased intracranial pressure after lying down overnight. This "morning headache" is a red flag symptom.',
  objective:'Brain-tumor headaches are typically worse in the morning.',
  source:'Neuro endpoint.pdf, Headache, Q20, p.265 (answer p.266)'
},

{ id:'npep-headache-21', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'Which of the following is a first-line drug for migraine prophylaxis?',
  options:['Lithium', 'Propranolol', 'Ergotamine', 'Triptans'],
  answer:1,
  explanation:'Propranolol is a first-line agent for migraine prophylaxis. It is especially useful in patients who also have hypertension or anxiety.',
  objective:'Identify a first-line drug for migraine prophylaxis.',
  source:'Neuro endpoint.pdf, Headache, Q21, p.267 (answer p.268)'
},

{ id:'npep-headache-22', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'A patient reports experiencing about 10 migraine attacks per month. What is the best management option?',
  options:['Continue using triptans', 'Start topiramate', 'Request MRI brain', 'Avoid caffeine'],
  answer:1,
  explanation:'Frequent migraines (>4 per month) require preventive therapy. Topiramate is a well-established prophylactic option.',
  objective:'Frequent migraine attacks warrant preventive therapy, for which topiramate is an option.',
  source:'Neuro endpoint.pdf, Headache, Q22, p.269 (answer p.270)'
},

{ id:'npep-headache-23', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'A man is awakened daily at 2 AM by boring periorbital pain, accompanied by ptosis and lacrimation. What is the most likely diagnosis?',
  options:['Migraine', 'Tension-type headache', 'Cluster headache', 'Trigeminal neuralgia'],
  answer:2,
  explanation:'Cluster headaches cause severe periorbital pain, often at the same time each night, and may be associated with ptosis and autonomic symptoms like lacrimation.',
  objective:'To identify cluster headache from recurrent nocturnal periorbital pain with ipsilateral autonomic features.',
  source:'Neuro endpoint.pdf, Headache, Q23, p.271 (answer p.272); reworded stem and options, same fact and key as house-bank npqb-nr-123 — left as two entries, cross-bank'
},

{ id:'npep-headache-24', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'Which of the following is a red flag symptom requiring urgent investigation in a headache patient?',
  options:['Severe pain', 'Headache with vomiting', 'Seizure', 'Photophobia'],
  answer:2,
  explanation:'A new-onset seizure in the context of headache is a red flag indicating possible serious intracranial pathology and necessitates urgent imaging.',
  objective:'Recognize seizure with headache as a red flag requiring urgent investigation.',
  source:'Neuro endpoint.pdf, Headache, Q24, p.273 (answer p.274)'
},

{ id:'npep-headache-25', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'A 55-year-old man with coronary stent placement presents with severe migraine. Which drug is safest to use?',
  options:['Subcutaneous sumatriptan', 'Rectal ergotamine', 'IM dihydroergotamine', 'IM ketorolac'],
  answer:3,
  explanation:'Triptans and ergot derivatives are contraindicated in patients with cardiovascular disease. NSAIDs like ketorolac are safer alternatives for acute migraine in such cases.',
  objective:'The question tests selection of a safer acute migraine treatment in a patient with cardiovascular disease.',
  source:'Neuro endpoint.pdf, Headache, Q25, p.275 (answer p.276)'
},

{ id:'npep-headache-26', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'A child presents with recurrent abdominal pain and is later diagnosed with migraine. What is a common symptom of pediatric migraine?',
  options:['Chest pain', 'Dystonia', 'Abdominal pain', 'Fever'],
  answer:2,
  explanation:'Abdominal migraine is a common presentation in children, with episodes of midline abdominal pain associated with migraine features. It is often a precursor to classic migraine later in life.',
  objective:'Pediatric migraine may present with recurrent abdominal pain as abdominal migraine.',
  source:'Neuro endpoint.pdf, Headache, Q26, p.277 (answer p.278)'
},

{ id:'npep-headache-27', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'A patient has recurrent unilateral headaches lasting around one hour, occurring daily at midnight with agitation. What is the most likely diagnosis?',
  options:['Migraine', 'Cluster headache', 'Tension-type headache', 'Brain tumor'],
  answer:1,
  explanation:'Cluster headaches typically occur at the same time daily, often at night, and involve unilateral pain with restlessness or agitation. The duration is usually less than 3 hours.',
  objective:'Identify cluster headache from recurrent unilateral attacks with nocturnal timing and agitation.',
  source:'Neuro endpoint.pdf, Headache, Q27, p.279 (answer p.280); reworded stem, same options and key as house-bank npqb-nr-129 — left as two entries, cross-bank'
},

{ id:'npep-headache-28', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'What is the most common type of aura seen in migraine?',
  options:['Motor', 'Visual', 'Auditory', 'Somatosensory'],
  answer:1,
  explanation:'Visual aura is the most common type seen in migraines, often described as flashing lights, zigzag lines, or scotomas preceding the headache phase.',
  objective:'The most common type of migraine aura is visual.',
  source:'Neuro endpoint.pdf, Headache, Q28, p.281 (answer p.282)'
}
