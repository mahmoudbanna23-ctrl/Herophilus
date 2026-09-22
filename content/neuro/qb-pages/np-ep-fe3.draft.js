/*
 * "Neuro endpoint.pdf" - Model Final Exam 3: 64 rows staged by tools/bank-harness/npep-build.mjs.
 * Fold to 32 net-new rows after hand review against page images and tools/qb-pipeline/sweep.js:
 *   - Q61 (p.1843) folded into Q1 (p.1722): same vignette, reordered options; cited on Q1.
 *   - Q13 (p.1745, seizure management) and a second, unrelated question also printed as "13."
 *     at p.1747 (proximal weakness) are a genuine book numbering defect (verified on the page
 *     images). Both already exist in the corpus (npep-epilepsy-9, npep-nm-8) and are dropped
 *     here as duplicate printings, cited on their survivors.
 *   - 29 further rows are duplicate printings of questions already in the corpus (this exam
 *     recaps earlier chapters) — dropped and cited on their survivors. Full fold list, rejected
 *     false-positive candidates, and page-offset confirmation: session report to the orchestrator.
 */

{ id:'npep-fe3-1', bank:'endpoint', module:'neuropsych', chapter:'nr-cranial',
  stem:'A 29-year-old woman with a history of hypertension presents with complaints of right eye pain on eye movement, impaired and blurry vision, and some color perception "do not look right examination revealed that her visual acuity is impaired in the right eye ,as is red color perception. Swinging light test revealed that her vision in his right eye as is impaired in a way different from the normally responding left eye. What is the likely underlying cause behind such findings?',
  options:['Right lateral geniculate body lesion', 'Severe bilateral macular disease', 'Bilateral optic nerve disease', 'Right optic nerve disease'],
  answer:3,
  explanation:'The printed key is Right optic nerve disease. The combination of painful eye movements, reduced visual acuity, impaired red colour perception, and an abnormal swinging-light response affecting the right eye localizes to a unilateral right optic nerve lesion. A relative afferent pupillary defect occurs when the afferent visual input from one eye is reduced compared with the other eye (not taken from the course material). Pain on eye movement and dyschromatopsia are also typical features of optic neuritis (not taken from the course material), although the question asks for the anatomical cause rather than a specific diagnosis.\n\nRight lateral geniculate body lesion is wrong because it is a post-chiasmal visual-pathway lesion; it would not produce the characteristic unilateral afferent pupillary abnormality described here (not taken from the course material). Severe bilateral macular disease is wrong because it would involve both maculae and would not fit the unilateral right-eye afferent findings. Bilateral optic nerve disease is wrong because the stem contrasts an impaired right eye with a normally responding left eye, indicating asymmetrical unilateral disease rather than bilateral optic nerve involvement. Written for this bank — the endpoint file prints no explanation here.',
  objective:'A unilateral relative afferent visual deficit with painful eye movement and reduced red perception localizes to the ipsilateral optic nerve.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q1, p.1722 (answer p.1723). This question is printed twice in the book: also at Q61, p.1843 (answer p.1844), reworded and with options reordered (key there: Right optic nerve disease). Folded here as the earlier, fuller printing.'
},

{ id:'npep-fe3-5', bank:'endpoint', module:'neuropsych', chapter:'ps-devices',
  stem:'A 53 -year old man is admitted to psychiatry hospital after a serious suicide attempt. He remains nearly one and refuses to either eat or drink. He also se main quite suicidal and always requires one to one observation. How can he be managed ?',
  options:['Antidepressant and SSRI in combination', 'electrocompulsive therapy', 'SSRI and antipsychotic', 'SSRI at higher -than -normal dose'],
  answer:1,
  explanation:'a- Electroconvulsive Therapy (ECT)\n\nIndications:\n\n• Suicide-Violence\n• PM retardation-agitation\n• Psychotic-depression features\n• Multiple drugs-Pregnancies (first trimester)\n• Resistant depression',
  objective:'Identify electroconvulsive therapy as the printed management option for severe suicidal depression with refusal of food and drink.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q5, p.1730 (answer p.1731)'
},

{ id:'npep-fe3-9', bank:'endpoint', module:'neuropsych', chapter:'ps-sud',
  stem:'A 29-year-old woman was brought to emergency unit with mydriasis, diaphoresis . The patient was arrested because of stealing from her employer to support her habit . The patient has needed increased amounts of her drug of choice to get high and she suffered from cravings, hypersomnia, depression and hyperphagia when she is unable to obtain it. When intoxicated , the patient notes a feeling of euphoria and heightened energy. What is the most likely drug used by this patient?',
  options:['phencyclidine', 'Alcohol', 'Cocaine.', 'Opioid'],
  answer:2,
  explanation:'The keyed option is Cocaine. The presentation describes a stimulant intoxication and withdrawal pattern: mydriasis, diaphoresis, euphoria, heightened energy, tolerance, craving, and withdrawal with hypersomnia, depression, and hyperphagia. Cocaine increases synaptic catecholamine activity, especially dopamine, producing the desired “high” and reinforcing repeated use. (not taken from the course material) Withdrawal commonly produces a “crash” with fatigue or hypersomnia, low mood, increased appetite, and craving. (not taken from the course material)\n\nPhencyclidine is wrong because PCP intoxication more characteristically causes dissociation, agitation, analgesia, hypertension, and nystagmus, particularly vertical nystagmus. (not taken from the course material) Its typical clinical picture is not the classic stimulant withdrawal syndrome of hypersomnia, depression, and hyperphagia described here.\n\nAlcohol is wrong because alcohol intoxication is usually associated with central nervous system depression, impaired coordination, slurred speech, and disinhibition rather than heightened energy with mydriasis and diaphoresis. (not taken from the course material) Alcohol withdrawal more typically causes tremor, autonomic hyperactivity, insomnia, anxiety, and possibly seizures or delirium tremens. (not taken from the course material)\n\nOpioid is wrong because opioid intoxication classically causes miosis, sedation, respiratory depression, and constipation, which contrast with this patient’s mydriasis and stimulant effects. (not taken from the course material) Opioid withdrawal can cause diaphoresis and craving, but usually includes rhinorrhea, lacrimation, diarrhea, pain, and piloerection rather than hypersomnia and hyperphagia. (not taken from the course material) Written for this bank — the endpoint file prints no explanation here.',
  objective:'Identify cocaine use from stimulant intoxication, tolerance, and withdrawal features.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q9, p.1738 (answer p.1739)'
},

{ id:'npep-fe3-15', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'What is the gold standard investigation for intracranial aneurysm?',
  options:['CT angiography.', 'MR angiography', 'Conventional angiography', 'CT brain with contrast'],
  answer:2,
  explanation:'8. Conventional angiography or digital subtraction angiography (gold standard).\n\nNowadays digital subtraction angiography is being computerized angiography is very helpful.\n\nIt can be done through the radial or femoral artery; we introduce a catheter.\n\nIt is considered as an invasive technique, but its hazards are less and give more details.',
  objective:'Identify conventional angiography as the gold standard investigation for intracranial aneurysm.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q15, p.1751 (answer p.1752)'
},

{ id:'npep-fe3-17', bank:'endpoint', module:'neuropsych', chapter:'ps-devices',
  stem:'What is the commonest side of ECT?',
  options:['Amnesia.', 'Fractures', 'Dehydration', 'Dementia'],
  answer:0,
  explanation:'Risks and Side Effects\n\n• Confusion: Immediately after treatment, patients may experience confusion and disorientation, which can last from a few minutes to several hours. Rarely, confusion may last several days or longer. Confusion is generally more noticeable in older adults.\n\n• Memory loss: Patients may have trouble remembering events that occurred right before treatment or in the weeks or months before treatment or, rarely, from previous years. This condition is called retrograde amnesia. They may also have trouble recalling events that occurred during the weeks of treatment. For most people, these memory problems usually improve within a couple of months after treatment ends.',
  objective:'Identify amnesia as the commonest side effect of ECT.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q17, p.1755 (answer p.1756)'
},

{ id:'npep-fe3-19', bank:'endpoint', module:'neuropsych', chapter:'nr-coma',
  stem:'What is cause of Foramen Magnum herniation?',
  options:['pituitary microadenoma', 'Olfactory groove meningioma', 'Cervical intramedullary tumor', 'posterior fossa tumors.'],
  answer:3,
  explanation:'Posterior fossa tumors are the printed answer because a mass in the posterior cranial fossa can increase pressure within the confined infratentorial compartment and force the cerebellar tonsils downward through the foramen magnum. This is tonsillar herniation and may compress the medulla, causing severe respiratory and cardiovascular compromise (not taken from the course material).\n\nPituitary microadenoma is wrong because it is a small sellar lesion and does not usually produce the posterior fossa mass effect required to displace the cerebellar tonsils through the foramen magnum (not taken from the course material). Olfactory groove meningioma is wrong because it arises in the anterior cranial fossa; although a large lesion can cause raised intracranial pressure, it is not the typical direct cause of foramen magnum herniation (not taken from the course material). Cervical intramedullary tumor is wrong because it is located within the cervical spinal cord rather than occupying the posterior cranial fossa; it may cause cord symptoms but is not the usual cause of downward cerebellar tonsillar displacement at the foramen magnum (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Posterior fossa tumors can cause tonsillar herniation through the foramen magnum.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q19, p.1759 (answer p.1760)'
},

{ id:'npep-fe3-20', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'42-year-old right-handed patient with diabetes and dilated cardiomyopathy developed acute confusion. On examination, he did not follow commands and was speaking fluently but no one can understand him . He also right hemifield defect. Where is the most likely vascular occlusion on CT angiography?',
  options:['Right vertebral artery', 'Right middle cerebral artery', 'Left middle cerebral artery.', 'Left vertebral artery'],
  answer:2,
  explanation:'The printed key is Left middle cerebral artery. The patient is right-handed, which makes left-hemisphere language dominance most likely (not taken from the course material). Fluent speech that cannot be understood, together with failure to follow commands, describes a fluent receptive aphasia, classically due to dysfunction of Wernicke’s area in the dominant posterior temporal region (not taken from the course material). A right homonymous hemifield defect also localizes to the left retrochiasmal visual pathway, which may be affected in a left middle cerebral artery territory infarction (not taken from the course material). Dilated cardiomyopathy provides a potential cardioembolic source for an acute arterial occlusion (not taken from the course material).\n\nRight vertebral artery occlusion would usually affect posterior-circulation structures such as the brainstem or cerebellum and would not typically produce dominant-hemisphere receptive aphasia with a contralateral homonymous field defect (not taken from the course material). Right middle cerebral artery occlusion can cause left-sided motor, sensory, visual, or neglect findings, but in a typical right-handed person it would not explain the language syndrome because language is usually left-sided (not taken from the course material). Left vertebral artery occlusion is likewise a posterior-circulation lesion and is less consistent with this cortical language and visual-field presentation (not taken from the course material). Written for this bank — the endpoint file prints no explanation here.',
  objective:'Identify a dominant left middle cerebral artery occlusion from receptive aphasia and a right homonymous hemifield defect.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q20, p.1761 (answer p.1762)'
},

{ id:'npep-fe3-22', bank:'endpoint', module:'neuropsych', chapter:'nr-nerve',
  stem:'On asking a patient with a nerve injury to grasp a piece of paper between the thumb and index finger goes into the hyperflexion. What is the nerve affected ?',
  options:['Ulnar.', 'Posterior interosseous', 'Median', 'Radial'],
  answer:0,
  explanation:'The bank prints Ulnar. This describes a positive Froment sign: when a patient grips paper between the thumb and index finger, weakness of adductor pollicis causes compensatory flexion of the thumb interphalangeal joint. Adductor pollicis is supplied by the deep branch of the ulnar nerve (not taken from the course material), so ulnar nerve injury produces the described hyperflexion.\n\nPosterior interosseous nerve injury primarily impairs finger and thumb extension because it is a motor branch of the radial nerve in the forearm (not taken from the course material); it does not denervate adductor pollicis and therefore does not cause Froment sign. Median nerve injury affects muscles including opponens pollicis and the lateral lumbricals (not taken from the course material), producing deficits such as impaired thumb opposition rather than this compensatory thumb flexion during paper pinch. Radial nerve injury causes weakness of wrist and finger extension, often with wrist drop (not taken from the course material), but does not account for the specific pinch-grip finding. Written for this bank — the endpoint file prints no explanation here.',
  objective:'Froment sign indicates ulnar nerve palsy affecting adductor pollicis.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q22, p.1764 (answer p.1765)'
},

{ id:'npep-fe3-23', bank:'endpoint', module:'neuropsych', chapter:'nr-nerve',
  stem:'What is the tone presenting in peripheral neuropathy?',
  options:['Clasp knife', 'Hypotonia.', 'Lead pipe', 'Cogwheel'],
  answer:1,
  explanation:'Hypotonia is the expected change in muscle tone in peripheral neuropathy. Peripheral nerves form part of the lower motor neuron pathway, carrying motor signals from anterior horn cells to muscle and sensory input back from muscle spindles. Damage to these nerves disrupts the reflex arc and reduces resting resistance to passive movement, producing reduced tone; weakness, reduced or absent reflexes, and muscle wasting may also occur (not taken from the course material).\n\nClasp knife tone is wrong because it is a form of spasticity associated with an upper motor neuron lesion. Resistance is initially increased during passive movement and then suddenly gives way, rather like closing a clasp knife (not taken from the course material).\n\nLead pipe rigidity is wrong because it is classically associated with extrapyramidal disease, particularly Parkinsonism. It gives a uniform, sustained resistance throughout passive movement and is not the typical tone abnormality of a peripheral neuropathy (not taken from the course material).\n\nCogwheel rigidity is also wrong because it is a Parkinsonian type of rigidity, in which a ratchety interruption is felt during passive movement, often due to superimposed tremor (not taken from the course material). Written for this bank — the endpoint file prints no explanation here.',
  objective:'Peripheral neuropathy produces hypotonia.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q23, p.1766 (answer p.1767)'
},

{ id:'npep-fe3-27', bank:'endpoint', module:'neuropsych', chapter:'nr-epilepsy',
  stem:'A female patient had attacks paroxysmal complex motor involuntary movements associated with numbness at her left upper limb . During the attack, she calls for help and memorize its full details after it subsides. What is the likely diagnosis of this patient?',
  options:['Focal sensory motor seizure with impaired awareness', 'Focal to bilateral seizures', 'Focal sensory motor seizure with retained awareness', 'Generalized clonic seizures'],
  answer:2,
  explanation:'The printed key is option c, Focal sensory motor seizure with retained awareness. The episode includes focal sensory symptoms, namely numbness of the left upper limb, together with focal motor involuntary movements. Most importantly, she can call for help during the attack and remembers its full details after it subsides. These features indicate that awareness is retained throughout the seizure. Focal seizures can produce sensory and motor manifestations when the involved cortical areas correspond to sensation and movement in the affected limb (not taken from the course material).\n\nOption a is wrong because impaired awareness would imply reduced responsiveness, inability to interact appropriately during the event, or incomplete recollection afterward. Here, the patient calls for help and recalls the attack fully. Option b is wrong because focal to bilateral seizures spread from a focal onset to involve both cerebral hemispheres, usually producing bilateral convulsive activity and loss of awareness (not taken from the course material); no such progression is described. Option d is wrong because generalized clonic seizures are generalized from onset and would not be expected to present as localized left upper-limb numbness with preserved detailed recall (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'A focal sensory-motor seizure may occur with retained awareness.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q27, p.1775 (answer p.1776)'
},

{ id:'npep-fe3-30', bank:'endpoint', module:'neuropsych', chapter:'ps-geri',
  stem:'What is the most accurate investigation to diagnose Alzheimer disease?',
  options:['Brain biopsy', 'Mental-status tests.', 'Neurological tests', 'Blood tests'],
  answer:0,
  explanation:'The answer is according to the department. We know brain biopsy is done postmartum . The question means most accurate investigation in general ,so Brian biopsy is correct.',
  objective:'The question tests the investigation identified by the bank as most accurate for diagnosing Alzheimer disease.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q30, p.1781 (answer p.1782)'
},

{ id:'npep-fe3-32', bank:'endpoint', module:'neuropsych', chapter:'nr-nerve',
  stem:'What is the most common nerve affected by entrapment neuropathy?',
  options:['Sciatic', 'Ulnar', 'Radial', 'Median.'],
  answer:3,
  explanation:'The keyed answer is Median. Entrapment neuropathy occurs when a peripheral nerve is compressed at an anatomical narrowing or fibro-osseous tunnel. The median nerve is the nerve most commonly affected by entrapment neuropathy because carpal tunnel syndrome, caused by compression of the median nerve at the wrist, is the most frequent entrapment neuropathy. This produces sensory symptoms in the thumb, index, middle, and radial half of the ring finger, and may cause weakness or wasting of thenar muscles in more advanced cases (not taken from the course material).\n\nSciatic is incorrect because sciatic nerve entrapment is comparatively uncommon. Sciatic symptoms are more often related to lumbosacral radiculopathy, trauma, or deep gluteal/piriformis-region causes rather than a typical common entrapment syndrome (not taken from the course material).\n\nUlnar is incorrect because the ulnar nerve can certainly be entrapped, especially at the elbow in cubital tunnel syndrome or at the wrist in Guyon canal syndrome. However, these are less common overall than median nerve compression at the carpal tunnel (not taken from the course material).\n\nRadial is incorrect because radial nerve compression can occur, for example at the spiral groove or posterior interosseous nerve, but it is not the most common entrapment neuropathy (not taken from the course material). Written for this bank — the endpoint file prints no explanation here.',
  objective:'Tests recognition that the median nerve is the most commonly affected nerve in entrapment neuropathy.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q32, p.1785 (answer p.1786)'
},

{ id:'npep-fe3-33', bank:'endpoint', module:'neuropsych', chapter:'nr-nerve',
  stem:'A male patient presented with severe neuropathic pain in both lower and upper limbs. What is the approved drug for his pain ?',
  options:['Prednisone', 'Sertraline', 'Duloxetine.', 'Ibuprofen'],
  answer:2,
  explanation:'The printed key selects Duloxetine. Duloxetine is a serotonin-norepinephrine reuptake inhibitor that is used for neuropathic pain, including painful diabetic peripheral neuropathy. (not taken from the course material) It can reduce pain through modulation of descending inhibitory pain pathways in the central nervous system. (not taken from the course material)\n\nPrednisone is a corticosteroid and is not a standard approved treatment for nonspecific severe neuropathic pain. (not taken from the course material) It may be used when neuropathic symptoms arise from an inflammatory disorder, but the stem does not describe such a cause. (not taken from the course material)\n\nSertraline is a selective serotonin reuptake inhibitor used mainly for depressive and anxiety disorders. (not taken from the course material) It is not a usual approved first-line analgesic for neuropathic pain. (not taken from the course material)\n\nIbuprofen is a nonsteroidal anti-inflammatory drug that is useful for inflammatory nociceptive pain. (not taken from the course material) Neuropathic pain generally responds poorly to simple NSAID therapy because its mechanism is nerve injury or abnormal neural signalling rather than peripheral inflammation alone. (not taken from the course material)\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Duloxetine is the keyed approved drug for neuropathic pain.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q33, p.1787 (answer p.1788)'
},

{ id:'npep-fe3-35', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'Sixty-five-year-old patient presented to the ER with left-sided hemiplegia with unknown time of onset. The CT scan showed cerebral infarction of the right middle cerebral artery with subfalcine herniation. The patient had a Glasgow Coma Score of 10 and was agitated. What is the intentional recommended treatment?',
  options:['Decompressive craniotomy', 'Intravenous alteplase', 'Mechanical thrombectomy', 'Intravenous propofol'],
  answer:0,
  explanation:'Surgical treatment:\n\n1. Carotid endarterectomy for carotid atherosclerosis or stenosis in surgically fit patients\n\n2. Extracranial-intracranial arterial bypass\n\n3. Decompressive craniotomy/craniectomy for malignant infarctions i.e. middle cerebral artery infarction with brain herniation',
  objective:'Decompressive craniotomy/craniectomy is the surgical treatment printed for malignant middle cerebral artery infarction with brain herniation.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q35, p.1791 (answer p.1792)'
},

{ id:'npep-fe3-36', bank:'endpoint', module:'neuropsych', chapter:'nr-backpain',
  stem:'50-years-old patient had L4 root compression by disc prolapse. what is the most common site of lower limb pain ?',
  options:['Lateral aspect of knee and leg', 'medial aspect of the knee and leg.', 'Lateral aspect of foot', 'Posterior aspect of knee and leg'],
  answer:1,
  explanation:'Level of disc prolapse	L3-L4	L4-L5	L5-S1\nCompressed root	L4 root	L5 root	S1 root\nMotor weakness	Quadriceps	Dorsi-flexors & evertors of the foot	Plantar flexors & invertors of the foot\nSensory impairment	Medial side of the leg, medial malleolus and medial foot	Lateral side of the leg and dorsum of the foot and big toe	Posterior part of calf, lateral malleolus, lateral foot and sole\nReflexes	Impaired knee jerk		Impaired ankle jerk',
  objective:'L4 root compression causes sensory impairment over the medial side of the leg, medial malleolus and medial foot.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q36, p.1793 (answer p.1794)'
},

{ id:'npep-fe3-37', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'A 49-year-old patient presents with acute onset quadriplegia . On examination, she seems awake, but unable to verbalize . She moves her eyes vertically and blinks. What is the likely occluded artery in such case?',
  options:['Anterior cerebral artery', 'Middle cerebral artery', 'Carotid artery', 'Top of basilar artery.'],
  answer:3,
  explanation:'The printed answer is top of basilar artery. The presentation describes locked-in syndrome: abrupt quadriplegia and inability to speak despite preserved consciousness, with retained vertical eye movements and blinking. This pattern results from damage to the ventral pons, where corticospinal and corticobulbar pathways are affected while the reticular activating system and vertical gaze pathways are relatively spared (not taken from the course material). Occlusion in the distal basilar circulation can produce this devastating brainstem syndrome (not taken from the course material).\n\nAnterior cerebral artery occlusion more typically causes contralateral leg-predominant weakness and frontal lobe features, rather than awake quadriplegia with preserved vertical eye movement (not taken from the course material). Middle cerebral artery occlusion usually produces contralateral face and arm-predominant weakness, sensory loss, and cortical deficits such as aphasia or neglect; it does not characteristically cause locked-in syndrome (not taken from the course material). Carotid artery occlusion may cause large anterior-circulation hemispheric ischemia with focal cortical deficits, but it does not selectively injure the ventral pons to preserve consciousness and vertical eye movements in this way (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Identify basilar artery occlusion as the vascular cause of locked-in syndrome.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q37, p.1795 (answer p.1796)'
},

{ id:'npep-fe3-38', bank:'endpoint', module:'neuropsych', chapter:'nr-cranial',
  stem:'Which muscle is affected by abducent nerve injury?',
  options:['Superior rectus', 'Inferior oblique', 'Lateral rectus.', 'Inferior rectus'],
  answer:2,
  explanation:'The lateral rectus is affected in abducent nerve injury because the abducent nerve, cranial nerve VI, supplies the lateral rectus muscle. The lateral rectus abducts the eye, moving it laterally away from the nose (not taken from the course material). Injury to this nerve causes weakness of eye abduction on the affected side and may produce horizontal diplopia, particularly when looking toward the affected side (not taken from the course material).\n\nSuperior rectus is incorrect because it is supplied by the oculomotor nerve, cranial nerve III, rather than the abducent nerve. It primarily elevates the eye and also contributes to adduction and intorsion (not taken from the course material).\n\nInferior oblique is incorrect because it is also supplied by the oculomotor nerve. Its actions include elevation, abduction, and extorsion of the eye, but it is not innervated by cranial nerve VI (not taken from the course material).\n\nInferior rectus is incorrect because it is supplied by the oculomotor nerve. It primarily depresses the eye and also contributes to adduction and extorsion (not taken from the course material). Thus, among the listed muscles, only lateral rectus has abducent nerve innervation.\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Identify the extraocular muscle supplied by the abducent nerve.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q38, p.1797 (answer p.1798)'
},

{ id:'npep-fe3-39', bank:'endpoint', module:'neuropsych', chapter:'nr-backpain',
  stem:'What is the commonest site of lumbar disc prolapse?',
  options:['L3-LA', 'L2-L3', 'L5-S1.', 'L1-L2'],
  answer:2,
  explanation:'Epidemiology:\n1. The typical patient with acute lumbar disc prolapse is from 30- 50 years of age in the most productive period of his life\n2. Complaint of chronic low back pain starts for some time prior to the onset of acute disorder.\n3. Lumbar disc prolapse is the main cause of low back pain and sciatica.\n4. The majority of LDP occurs at L4-L5 and L5-S1 (95%).',
  objective:'Identify the commonest site of lumbar disc prolapse.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q39, p.1799 (answer p.1800)'
},

{ id:'npep-fe3-44', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'What is the most important symptom in patients with subarachnoid hemorrhage?',
  options:['Rapid deterioration of level of consciousness', 'Severe occipital headache.', 'New onset severe vomiting', 'Convulsions'],
  answer:1,
  explanation:'The printed key is severe occipital headache. Subarachnoid hemorrhage classically presents with a sudden, severe headache, often described as a thunderclap headache or the worst headache of life (not taken from the course material). Occipital pain may occur because blood in the subarachnoid space irritates the meninges, and associated neck stiffness, photophobia, nausea, or vomiting may develop (not taken from the course material). Thus, among these choices, severe occipital headache is the most important presenting symptom.\n\nRapid deterioration of level of consciousness can occur in severe subarachnoid hemorrhage, particularly with a large bleed, raised intracranial pressure, hydrocephalus, or rebleeding (not taken from the course material). However, it is not the characteristic principal symptom in all patients and may be absent initially. New onset severe vomiting may accompany the headache because of meningeal irritation or raised intracranial pressure (not taken from the course material), but it is a nonspecific associated symptom rather than the key presenting feature. Convulsions can occur at onset or later in some patients (not taken from the course material), but they are less common and do not define the usual clinical presentation. The bank therefore identifies the severe occipital headache as the most important symptom.\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Subarachnoid hemorrhage is most characteristically associated with severe occipital headache.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q44, p.1809 (answer p.1810)'
},

{ id:'npep-fe3-45', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'What is the most sensitive diagnostic tool for cardiac (left atrial ) source of embolization in ischemic stroke?',
  options:['ECG', 'Holter monitor', 'Transthoracic echocardiogram', 'Transesophageal echocardiogram'],
  answer:3,
  explanation:'Transesophageal echocardiogram is the printed answer because it provides the most sensitive echocardiographic assessment of left atrial and left atrial appendage sources of embolism, including thrombus, and it also evaluates structures such as the interatrial septum and thoracic aorta more clearly than transthoracic imaging (not taken from the course material). In ischemic stroke, this can help identify a cardioembolic source when one is suspected (not taken from the course material).\n\nECG is wrong because it records cardiac electrical activity rather than directly imaging the left atrium or demonstrating an atrial thrombus (not taken from the course material). It may show atrial fibrillation, an important embolic risk factor, but a normal ECG does not exclude intermittent arrhythmia or a structural embolic source (not taken from the course material).\n\nHolter monitor is wrong because prolonged rhythm monitoring can detect paroxysmal atrial fibrillation that a single ECG misses (not taken from the course material). However, it does not visualize the left atrium, left atrial appendage, thrombi, valves, or aortic lesions (not taken from the course material).\n\nTransthoracic echocardiogram is wrong as the most sensitive test for this specific left atrial question because acoustic windows may limit visualization of the left atrium and especially the left atrial appendage (not taken from the course material). It remains useful for many cardiac abnormalities, including ventricular function and some valvular disease, but is less sensitive for left atrial appendage thrombus than transesophageal echocardiography (not taken from the course material). Written for this bank — the endpoint file prints no explanation here.',
  objective:'Identify transesophageal echocardiography as the most sensitive test for a left atrial cardiac embolic source in ischemic stroke.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q45, p.1811 (answer p.1812)'
},

{ id:'npep-fe3-46', bank:'endpoint', module:'neuropsych', chapter:'nr-intro',
  stem:'Which type of brain tumor with genetic predisposition?',
  options:['ependymoma', 'Neurofibroma.', 'Germinoma', 'pituitary adenoma'],
  answer:1,
  explanation:'The printed key is Neurofibroma. The intended association is a genetic predisposition to nervous-system tumours in neurofibromatosis, especially neurofibromatosis type 1 or type 2 (not taken from the course material). Neurofibromatosis is inherited and can be associated with tumours involving neural tissues, including intracranial tumours such as optic pathway gliomas, meningiomas, and vestibular schwannomas (not taken from the course material). The bank prints “Neurofibroma.”, although neurofibroma itself is usually a benign peripheral nerve-sheath tumour rather than the name of the inherited syndrome (not taken from the course material).\n\nEpendymoma is a glial tumour arising from ependymal cells and is usually discussed by site and age distribution rather than as the classic inherited predisposition in this comparison (not taken from the course material). Germinoma is a germ-cell tumour, often occurring in midline intracranial locations, but it is not the usual answer for a broadly framed inherited tumour-predisposition question (not taken from the course material). Pituitary adenoma may occur as part of inherited syndromes such as multiple endocrine neoplasia type 1, but most pituitary adenomas are sporadic and this option is not the marked answer here (not taken from the course material). The key is therefore retained exactly as printed: option b, Neurofibroma.\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Tests the association between inherited neurofibromatosis-related disease and tumour predisposition.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q46, p.1813 (answer p.1814)'
},

{ id:'npep-fe3-48', bank:'endpoint', module:'neuropsych', chapter:'nr-nerve',
  stem:'A 24-year-old patient was subjected to a stab wound in the Proximal forearm of the right upper limb. On examination, the metacarpophalangeal joints were found hyperextended and the interphalangeal joints flexed. Which nerve is injured in this patient?',
  options:['Ulnar.', 'Posterior interosseous', 'Radial', 'Median'],
  answer:0,
  explanation:'3. Ulnar nerve injury:\nDeformity:\n• Partial claw hand: due to affection of the little and ring fingers only => flexion of the interphalangeal joint, hyperextension of metacarpophalangeal joints of the medial two fingers especially the little finger.\n• Radial deviation of the hand: due to paralysis of the flexor carpi ulnaris muscle.\n• Trophic changes: maximal on the tip of the little finger.\nAtrophic changes:\n• Sunken interossei spaces on the dorsum of the hand especially the first space (important).\n• Atrophy of the hypothenar muscles and the tip of the little finger.\n• Wasting of the muscles of the medial side of the forearm.',
  objective:'Identify ulnar nerve injury from the partial claw-hand posture.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q48, p.1817 (answer p.1818)'
},

{ id:'npep-fe3-49', bank:'endpoint', module:'neuropsych', chapter:'nr-backpain',
  stem:'A 41-year-old manual worker experienced lower back pain suddenly after carrying an object in the past 2 days. He has noticed a gradual. loss of sensation over his buttocks and inner thighs and difficulty urinating, Based on these symptoms, what is the probable diagnosis of this patient?',
  options:['Syringomyelia at dorsal level', 'Central cervical disc herniation', 'Lumbar disc prolapse.', 'Lateral lumbar disc herniation'],
  answer:2,
  explanation:'The patient\'s symptoms, including sudden lower back pain, gradual loss of sensation over the buttocks and inner thighs (saddle anesthesia), and difficulty urinating, are indicative of cauda equina syndrome',
  objective:'Recognize lumbar disc prolapse causing cauda equina syndrome.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q49, p.1819 (answer p.1820)'
},

{ id:'npep-fe3-52', bank:'endpoint', module:'neuropsych', chapter:'nr-backpain',
  stem:'The MRI lumbosacral spine of a 50-year-old patient showed L5,S1 root compression by disc prolapse. which muscle may be weak ?',
  options:['hamstring muscle.', 'Extensor carpi-radialis', 'quadriceps muscle', 'Flexor carpi radialis'],
  answer:0,
  explanation:'Level of disc prolapse\n\nL3-L4\n\nL4-L5\n\nL5-S1\n\nCompressed root\n\nL4 root\n\nL5 root\n\nS1 root\n\nMotor weakness\n\nQuadriceps\n\nDorsi-flexors & evertors of the foot\n\nPlantar flexors & invertors of the foot\n\nSensory impairment\n\nMedial side of the leg, medial malleolus and medial foot\n\nLateral side of the leg and dorsum of the foot and big toe\n\nPosterior part of the calf, lateral malleolus, lateral foot and sole\n\nReflexes\n\nImpaired knee jerk\n\nImpaired ankle jerk',
  objective:'Identify the muscle weakness associated with S1 root compression from an L5-S1 disc prolapse.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q52, p.1825 (answer p.1826)'
},

{ id:'npep-fe3-53', bank:'endpoint', module:'neuropsych', chapter:'ps-somato',
  stem:'A 44-year-old patient thought that she has heart disease, despite all her relevant investigations were proved to be negative. She spent . much of her time in bed and refused to do Her home duties',
  options:['Factitious disorder', 'Obsessive compulsive disorder', 'Hypochondriasis.', 'Panic disorder'],
  answer:2,
  explanation:'Hypochondriasis is the printed answer. The patient has a persistent belief or fear that she has heart disease despite negative relevant investigations, with consequent functional impairment: she spends much of her time in bed and refuses home duties. Illness anxiety focused on having a serious disease despite reassurance is characteristic of hypochondriasis; current diagnostic systems generally use related somatic symptom and illness-anxiety diagnoses (not taken from the course material).\n\nFactitious disorder is wrong because it involves intentional production, falsification, or induction of symptoms in order to assume the sick role (not taken from the course material). The stem describes a genuine belief that she has disease, rather than deliberate deception. There is also no evidence of fabricated symptoms, tampering with investigations, or deceptive presentation.\n\nObsessive compulsive disorder is wrong because its core features are intrusive, recurrent obsessions and/or repetitive compulsions performed to reduce distress or prevent a feared event (not taken from the course material). A fixed preoccupation with having heart disease after negative investigations is not presented as an intrusive obsession with ritual behaviour.\n\nPanic disorder is wrong because it is defined by recurrent unexpected panic attacks followed by persistent concern about further attacks or maladaptive behavioural change (not taken from the course material). No discrete attacks of sudden intense fear or accompanying autonomic symptoms are described.\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Tests recognition of hypochondriasis from persistent illness belief despite negative investigations.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q53, p.1827 (answer p.1828)'
},

{ id:'npep-fe3-55', bank:'endpoint', module:'neuropsych', chapter:'nr-para',
  stem:'A male child aged five years became incontinent to urine after being continent at the age of 4 years. On examination he had an abnormal gait with a tuft of hair was found on his back. The vertebral column is deviated to one side. What is the explanation for his clinical presentation?',
  options:['Meningomyelocele', 'Disc prolapse', 'Low lying cord below lumbar vertebra 4', 'Thin filum terminal'],
  answer:2,
  explanation:'The printed key is “Low lying cord below lumbar vertebra 4.” This describes a low-lying conus medullaris associated with tethered cord syndrome. A child may initially develop bladder control and then lose it as growth places traction on an abnormally tethered spinal cord. Gait abnormality, scoliosis, and a lumbosacral tuft of hair are compatible associated findings. A conus below the expected level supports the explanation for the progressive neurological and urinary features (not taken from the course material).\n\nMeningomyelocele is a neural-tube defect in which meninges and spinal cord protrude through a vertebral defect (not taken from the course material). It can cause lower-limb and bladder dysfunction, but it is usually an obvious congenital lesion rather than the stated explanation of late deterioration with a cutaneous stigma and low cord.\n\nDisc prolapse can compress nerve roots and cause back or radicular leg pain, and is uncommon as this presentation in a five-year-old (not taken from the course material). It does not account well for the congenital hair tuft, spinal deviation, and progressive bladder dysfunction.\n\nA thin filum terminal is generally a normal anatomical structure that anchors the conus to the coccyx (not taken from the course material). Tethering is associated with an abnormally thickened or shortened filum, rather than a thin filum. Therefore it does not provide the printed explanation.\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Identify tethered cord syndrome from progressive urinary incontinence, gait abnormality, lumbosacral hair tuft, and scoliosis.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q55, p.1831 (answer p.1832)'
},

{ id:'npep-fe3-56', bank:'endpoint', module:'neuropsych', chapter:'nr-nerve',
  stem:'What is the manifestation of carpal tunnel syndrome?',
  options:['Pain is more in the morning', 'Thenar hypertrophy', 'Males are less commonly affected.', 'Tapping on the median nerve at the wrist causes pain in the medial 3.5 fingers'],
  answer:2,
  explanation:'The keyed option is “Males are less commonly affected.” Carpal tunnel syndrome is more frequent in females, so males are less commonly affected. (not taken from the course material)\n\nOption a is wrong because symptoms commonly worsen at night rather than being more prominent in the morning. (not taken from the course material) Option b is wrong because longstanding median nerve compression may cause thenar muscle wasting and weakness, not thenar hypertrophy. (not taken from the course material) Option d is wrong because tapping over the median nerve at the wrist is the Tinel sign and may reproduce tingling or pain in the median nerve sensory distribution, classically the lateral 3.5 digits rather than the medial 3.5 fingers. (not taken from the course material)\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Carpal tunnel syndrome is less commonly affected in males.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q56, p.1833 (answer p.1834)'
},

{ id:'npep-fe3-57', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'A 55-year-old man complained of the sudden onset of severe headache and then lost consciousness. On examination, he was awake, but lethargic. He withdrew to pain in his Extremities and moaned, though he did not speak. What is the most likely diagnosis?',
  options:['Brain tumor', 'Subarachnoid hemorrhage.', 'Brain abscess', 'Ischemic stroke'],
  answer:1,
  explanation:'Subarachnoid hemorrhage is the keyed diagnosis because the presentation is abrupt, with sudden severe headache followed by loss of consciousness and impaired conscious level. This pattern is classically associated with bleeding into the subarachnoid space, often from rupture of an intracranial aneurysm (not taken from the course material). The patient is now lethargic, withdraws to pain, and moans without speaking, indicating a depressed level of consciousness after the acute event.\n\nBrain tumor is less likely because tumors usually produce gradually progressive symptoms, such as worsening headache, seizures, focal neurological deficits, or features of raised intracranial pressure, rather than a sudden severe headache with immediate collapse (not taken from the course material).\n\nBrain abscess is less likely because it commonly develops subacutely and may be associated with fever, infection, headache, focal deficits, or seizures. A sudden catastrophic onset with loss of consciousness is not its usual presentation (not taken from the course material).\n\nIschemic stroke can cause sudden neurological deficits and sometimes reduced consciousness, but the dominant presentation here is sudden severe headache followed by collapse. Severe abrupt headache is more characteristic of subarachnoid hemorrhage than uncomplicated ischemic stroke (not taken from the course material). Written for this bank — the endpoint file prints no explanation here.',
  objective:'Recognize sudden severe headache with collapse as a presentation of subarachnoid hemorrhage.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q57, p.1835 (answer p.1836)'
},

{ id:'npep-fe3-58', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'Which of the following is the most appropriate step in evolution of this patient?',
  options:['Cerebrospinal fluid analysis to look xanthochromia', 'CT scan.', 'MRI', 'MR angiogram'],
  answer:1,
  explanation:'The printed key selects CT scan. In an acute neurological presentation where intracranial bleeding or another urgent structural brain lesion is a concern, a non-contrast CT scan is generally the first rapid investigation because it is widely available and can promptly show acute blood, mass effect, hydrocephalus, and many other emergent abnormalities (not taken from the course material). It also helps determine whether lumbar puncture would be safe.\n\nCerebrospinal fluid analysis for xanthochromia is not the initial investigation when urgent brain imaging has not yet been performed. Xanthochromia may support subarachnoid haemorrhage when appropriate testing is needed after imaging, but lumbar puncture can be unsafe in patients with raised intracranial pressure or a mass lesion (not taken from the course material). MRI gives more detailed soft-tissue information in many neurological disorders, but it is usually slower and less practical than CT for immediate assessment of suspected acute haemorrhage (not taken from the course material). MR angiogram evaluates cerebral vessels and may identify aneurysms or vascular abnormalities, but it is not the usual first step before establishing the presence and nature of an acute intracranial lesion on initial imaging (not taken from the course material). Written for this bank — the endpoint file prints no explanation here.',
  objective:'To identify CT scan as the initial imaging step in an urgent suspected intracranial neurological presentation.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q58, p.1837 (answer p.1838)'
},

{ id:'npep-fe3-62', bank:'endpoint', module:'neuropsych', chapter:'nr-movement',
  stem:'Which disease is characterized by hypokinetic movements?',
  options:['Chorea', 'Tremors', 'Parkinsonism.', 'Dystonia'],
  answer:2,
  explanation:'Parkinsonism is the keyed answer because it is a hypokinetic movement disorder, meaning that voluntary movement is reduced or slowed. Bradykinesia is its defining motor feature, commonly accompanied by rigidity, resting tremor, and postural instability (not taken from the course material). The basal-ganglia dopamine deficiency characteristic of Parkinson disease produces this reduction in movement (not taken from the course material).\n\nChorea is incorrect because it consists of involuntary, irregular, brief, non-rhythmic movements that flow unpredictably from one body part to another; it is therefore a hyperkinetic movement disorder (not taken from the course material). Tremors are incorrect because tremor is a rhythmic oscillatory movement of a body part, rather than a disorder defined by reduced movement (not taken from the course material). A tremor may occur in parkinsonism, especially as a resting tremor, but tremor itself does not describe the hypokinetic syndrome (not taken from the course material). Dystonia is incorrect because it causes sustained or intermittent muscle contractions producing abnormal postures or repetitive twisting movements, and is categorized among hyperkinetic movement disorders (not taken from the course material). Thus, among the listed choices, Parkinsonism. is the condition characterized by hypokinetic movements.\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Identify parkinsonism as a hypokinetic movement disorder.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q62, p.1845 (answer p.1846)'
},

{ id:'npep-fe3-64', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'A 55-year-old hypertensive patient suddenly developed left hemiparesis and dysarthria. Examination revealed a blood pressure of 200/110 mmHg. Brain CT showed intracerebral hemorrhage in the right parietal lobe. Despite receiving the recommended initial management, the patient deteriorated in consciousness and developed unequal pupils. An increase in hematoma size and midline shift was detected in the follow-up brain CT. What could have been the immediate initial management of this patient?',
  options:['MRI brain', 'Immediate blood pressure lowering', 'Vitamin K administration', 'Observation'],
  answer:1,
  explanation:'The bank keys immediate blood pressure lowering. This patient has acute intracerebral hemorrhage with severe hypertension, and early controlled reduction of markedly elevated blood pressure is intended to reduce the risk of ongoing hematoma expansion. The later enlargement of the hematoma and midline shift illustrate the serious consequence that initial management aims to prevent. Acute blood-pressure treatment in intracerebral hemorrhage commonly uses titratable intravenous agents and avoids an abrupt excessive fall in pressure (not taken from the course material).\n\nMRI brain is wrong because CT has already demonstrated the hemorrhage, and MRI would not be the immediate priority in an unstable patient with a known acute intracerebral bleed. Vitamin K administration is wrong because it is used to reverse warfarin-associated coagulopathy; the stem provides no history of anticoagulant use or vitamin-K-dependent clotting-factor deficiency. In suspected anticoagulant-associated intracerebral hemorrhage, reversal is urgent and may also require other agents such as prothrombin complex concentrate (not taken from the course material). Observation is wrong because the patient is acutely symptomatic, severely hypertensive, and has radiologically confirmed hemorrhage; passive observation would not address a modifiable cause of further bleeding. With subsequent deterioration, unequal pupils, hematoma enlargement, and midline shift, urgent neurosurgical and critical-care assessment would be indicated (not taken from the course material). Written for this bank — the endpoint file prints no explanation here.',
  objective:'Severe hypertension in acute intracerebral hemorrhage requires immediate blood pressure lowering.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q64, p.1849 (answer p.1850)'
},

{ id:'npep-fe3-65', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'What is the recommended surgical intervention depending on findings of 2nd brain CT?',
  options:['Surgical evacuation of the hematoma', 'Blood pressure management', 'Vitamin K administration', 'Dehydrating measures'],
  answer:0,
  explanation:'The printed answer is surgical evacuation of the hematoma. A repeat brain CT may demonstrate a hematoma that is enlarging, causing mass effect, producing midline shift, or associated with neurological deterioration; in these circumstances, operative evacuation can relieve intracranial pressure and prevent further brain injury (not taken from the course material). The specific decision depends on the hematoma type, size, location, clinical state, and neurosurgical assessment (not taken from the course material). Thus, the wording “depending on findings of 2nd brain CT” directs attention to a lesion demonstrated on repeat imaging for which surgery may be required.\n\nBlood pressure management is not the recommended surgical intervention. Blood pressure may require careful control in acute intracranial hemorrhage or head injury, but it is supportive medical management rather than evacuation of a space-occupying hematoma (not taken from the course material). Vitamin K administration is used to reverse vitamin K antagonist-associated coagulopathy and may be relevant if anticoagulation contributes to bleeding, but it does not remove an established hematoma or constitute the indicated surgical procedure (not taken from the course material). Dehydrating measures, such as osmotherapy, can temporarily reduce raised intracranial pressure in selected patients, but they do not definitively treat a hematoma requiring evacuation (not taken from the course material). Written for this bank — the endpoint file prints no explanation here.',
  objective:'Identify surgical evacuation of a hematoma as the intervention indicated by relevant repeat brain CT findings.',
  source:'Neuro endpoint.pdf, Model Final Exam 3, Q65, p.1852 (answer p.1853)'
}
