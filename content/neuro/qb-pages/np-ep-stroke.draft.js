/*
 * "Neuro endpoint.pdf" — Chapter 2 "Stroke" (npep-stroke-1..12, 14..24)
 * Schema-ready, splice-ready. Source: content/neuro/qb-pages/np-ep-stroke.array.js (raw pass).
 * Bank 'endpoint' — distinct from the live 'gradegain' house bank already in questions.neuro.js.
 * Count is 23, not 24 — the source's own printed numbering skips "13" (Q12 on pp.88-89 is followed
 * directly by "14." on pp.90-91, no page 13 exists). Ids match the printed question numbers, so
 * npep-stroke-13 does not exist by design — see np-ep-stroke.array.js header for the full account.
 * p.65 confirmed as the "Questions" section-divider slide (not Q1) — Q1 starts at p.66.
 * p.112 confirmed as the "Epilepsy" chapter title/divider slide — the last Stroke item is Q24 (p.111).
 * All 23 filed to chapter 'nr-stroke' (app/data/modules.js confirms this is a real, distinct,
 * live neuropsych chapter id, separate from 'nr-hemi').
 */

var NP_EP_STROKE_DRAFT = [

{ id:'npep-stroke-1', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'Antiplatelet therapy is used in secondary stroke prevention in which of the following cases?',
  options:['Atrial fibrillation', 'Hypercholesteremia', 'Valvular Heart Disease', 'Mechanical valve replacement'],
  answer:1,
  explanation:'Antiplatelet therapy (e.g. aspirin, clopidogrel) is the secondary-prevention agent for non-cardioembolic ischaemic stroke — stroke driven by atherosclerotic disease, of which hypercholesterolaemia is a classic risk factor. Atrial fibrillation, valvular heart disease and a mechanical valve replacement are all cardioembolic sources of stroke, for which anticoagulation (not an antiplatelet) is the appropriate secondary-prevention strategy. Written for this bank — the endpoint file prints no explanation here.',
  objective:'Distinguish antiplatelet secondary prevention (non-cardioembolic/atherosclerotic stroke) from anticoagulant secondary prevention (cardioembolic stroke).',
  source:'Neuro endpoint.pdf, Stroke, Q1, p.66 (answer p.67)'
},

{ id:'npep-stroke-2', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'The most common cause of intracerebral hemorrhage is:',
  options:['Hypertension', 'Aneurysmal rupture', 'Coagulopathy', 'Hemorrhagic transformation of an ischemic infarct'],
  answer:0,
  explanation:'Chronic hypertension is the single most common cause of primary (spontaneous) intracerebral haemorrhage. It produces rupture of small deep perforating arteries (lenticulostriate, thalamoperforating, pontine) weakened by lipohyalinosis and Charcot-Bouchard microaneurysms, classically bleeding into the basal ganglia, thalamus, pons or cerebellum. Aneurysmal rupture more typically causes subarachnoid rather than intracerebral haemorrhage; coagulopathy and haemorrhagic transformation of an ischaemic infarct are recognised but less common causes. Written for this bank — the endpoint file prints no explanation here.',
  objective:'Identify chronic hypertension as the leading cause of primary intracerebral haemorrhage.',
  source:'Neuro endpoint.pdf, Stroke, Q2, p.68 (answer p.69)'
},

{ id:'npep-stroke-3', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'65-year-old male with acute right hemiplegia since 3 hours. He is diabetic, smoker, BP 146/90. CT brain is normal. What is the treatment?',
  options:['Tissue plasminogen activator (t-PA)', 'Heparin', 'Aspirin', 'Oral anticoagulant'],
  answer:0,
  explanation:'This patient presents 3 hours after acute ischaemic stroke onset (right hemiplegia), well inside the 4.5-hour thrombolysis window, and a normal (non-haemorrhagic) CT confirms he is not bleeding — so intravenous tissue plasminogen activator (t-PA) is indicated. Heparin and oral anticoagulants have no role in the acute management of ischaemic stroke, and aspirin is reserved for patients who fall outside the thrombolysis window or in whom t-PA is contraindicated. Written for this bank — the endpoint file prints no explanation here.',
  objective:'Apply the 4.5-hour IV t-PA window for acute ischaemic stroke once haemorrhage is excluded on CT.',
  source:'Neuro endpoint.pdf, Stroke, Q3, p.70 (answer p.71)'
},

{ id:'npep-stroke-4', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'A 50-year-old patient presented to ER, one hour, after acute onset of dysphasia, transient blindness and right sided hemiparesis. Plain CT scan was unremarkable. What is the most appropriate treatment of this patient?',
  options:['Start therapeutic anticoagulant', 'Intravenous diuretics', 'Bolus dose of Alteplase (tissue plasminogen activator)', 'Loading dose of acetylsalicylic acid'],
  answer:2,
  explanation:'The patient is presenting within the window for thrombolytic therapy with symptoms suggestive of acute ischemic stroke. Since the CT scan is negative for hemorrhage, alteplase (tPA) is the treatment of choice.',
  objective:'Recognise a within-window acute ischaemic stroke presentation as an indication for IV alteplase once haemorrhage is excluded.',
  source:'Neuro endpoint.pdf, Stroke, Q4, p.72 (answer p.73)'
},

{ id:'npep-stroke-5', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'A patient presented with acute onset dysarthria and mild left sided hemiparesis which started on 09:00 am during having breakfast. The patient presented to the ER at 02:00 pm. Blood pressure was 165/95 mmg. CT brain and CT angiography showed normal findings. What is the best next step in the management?',
  options:['Intravenous tissue plasminogen activator', 'Intravenous therapeutic heparin', 'Oral anticoagulant', 'Oral aspirin'],
  answer:3,
  explanation:'Since symptom onset was over 4.5 hours ago, thrombolysis is contraindicated. Aspirin is the appropriate next step for ischemic stroke management after imaging has ruled out hemorrhage.',
  objective:'Recognise that a patient presenting outside the 4.5-hour thrombolysis window is managed with aspirin, not tPA, once hemorrhage is excluded.',
  source:'Neuro endpoint.pdf, Stroke, Q5, p.74 (answer p.75) — the source prints the blood pressure unit as "mmg" (verbatim, likely intended "mmHg")'
},

{ id:'npep-stroke-6', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'When is mechanical thrombectomy used in ischemic stroke?',
  options:['The first 7 hours in cases of anterior large vessel circulation', 'The first 4.5 hours in cases of anterior large vessel circulation', 'The first 4.5 hours in cases of posterior large vessel circulation', 'The first 7 hours in cases of posterior large vessel circulation'],
  answer:0,
  explanation:'Mechanical thrombectomy is most effective when performed within 6–7 hours for anterior circulation strokes involving large vessels. Time is critical to prevent irreversible brain damage.',
  objective:'State the extended time window (up to ~7 hours) for mechanical thrombectomy in anterior large-vessel occlusion, longer than the IV tPA window.',
  source:'Neuro endpoint.pdf, Stroke, Q6, p.76 (answer p.77) — source stem reads "sed" (verbatim, likely intended "used")'
},

{ id:'npep-stroke-7', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'A 60 year-old male patient presented with dysphasia and right hemiplegia since 8 hours. The CT Scan was unremarkable. CT angiography showed occlusion of the left internal carotid artery and left middle cerebral artery. CT brain perfusion showed no mismatch. What is the most suitable treatment for this patient?',
  options:['Antiplatelet and physiotherapy', 'Decompression craniotomy', 'Mechanical thrombectomy', 'Intravenous alteplase'],
  answer:0,
  explanation:'The absence of perfusion mismatch on imaging indicates no viable tissue to salvage, so thrombolytic or surgical intervention is not warranted. Supportive care and secondary prevention are advised.',
  objective:'Interpret an absent perfusion mismatch on CT perfusion as no salvageable penumbra, ruling out thrombectomy/thrombolysis regardless of vessel occlusion.',
  source:'Neuro endpoint.pdf, Stroke, Q7, p.78 (answer p.79)'
},

{ id:'npep-stroke-8', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'A patient has a left facial droop, flattened nasolabial fold, and drooping mouth corner. He cannot puff his cheeks, and eye closure is slightly weak. Forehead movement is preserved. What is the diagnosis?',
  options:['Right middle cerebral artery stroke', 'Parotid gland tumour', 'Left internal capsule stroke', "Bell’s palsy", 'Cerebellopontine angle tumour'],
  answer:0,
  explanation:'Preserved forehead movement with lower facial weakness suggests an upper motor neuron lesion, as seen in a stroke affecting the contralateral cortex (right MCA affecting left face). LMN lesions like Bell’s palsy would affect the entire face.',
  objective:'Use forehead sparing to distinguish an UMN (contralateral cortical/stroke) facial palsy from an LMN (Bell’s palsy) facial palsy, and localise the side correctly (contralateral cortex).',
  source:'Neuro endpoint.pdf, Stroke, Q8, p.80 (answer p.81) — 5 options in the source (A-E), the only 5-option question in this chapter'
},

{ id:'npep-stroke-9', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'A 20-year-old female with a history of rheumatic heart disease presents with acute right hemiplegia and aphasia for a few hours. CT brain is normal. What is the best treatment option?',
  options:['Intravenous tissue plasminogen activator (tPA)', 'Aspirin', 'Heparin', 'Clopidogrel'],
  answer:0,
  explanation:'If CT shows no hemorrhage and symptoms are within the therapeutic window, IV tPA is indicated for acute ischemic stroke to improve outcomes.',
  objective:'Apply IV tPA eligibility criteria (within window, CT negative for haemorrhage) even when the presumed stroke mechanism is cardioembolic (rheumatic heart disease).',
  source:'Neuro endpoint.pdf, Stroke, Q9, p.82 (answer p.83)'
},

{ id:'npep-stroke-10', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'What is the most common risk factor for embolic stroke?',
  options:['Artery-to-artery embolization', 'Rheumatic mitral valve disease', 'Prosthetic valve replacement', 'Atrial fibrillation'],
  answer:3,
  explanation:'Atrial fibrillation leads to blood stasis in the atria, promoting clot formation that can embolize to cerebral vessels, causing ischemic stroke.',
  objective:'Identify atrial fibrillation as the most common cause/risk factor for embolic (cardioembolic) ischaemic stroke.',
  source:'Neuro endpoint.pdf, Stroke, Q10, p.84 (answer p.85) — possible duplicate: see report (npqb-nr-36, house bank, same fact)'
},

{ id:'npep-stroke-11', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'What is the most important risk factor for both ischemic and hemorrhagic stroke?',
  options:['Hyperuricemia', 'Diabetes mellitus', 'Dyslipidemia', 'Hypertension'],
  answer:3,
  explanation:'Chronic hypertension damages blood vessels, increasing the risk for both ischemic (via atherosclerosis) and hemorrhagic strokes (via rupture).',
  objective:'Recognise hypertension as the single risk factor shared by both ischaemic and haemorrhagic stroke.',
  source:'Neuro endpoint.pdf, Stroke, Q11, p.86 (answer p.87)'
},

{ id:'npep-stroke-12', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'Oral anticoagulants are indicated after ischemic stroke in which of the following cases?',
  options:['Small vessel disease', 'Vertebrobasilar stroke', 'Cardioembolic source', 'Large vessel atherosclerosis'],
  answer:2,
  explanation:'Anticoagulants are used to prevent further embolic events in patients with atrial fibrillation or other high-risk cardioembolic sources.',
  objective:'Match oral anticoagulation to cardioembolic-source ischaemic stroke, as opposed to small-vessel or large-vessel atherosclerotic stroke (antiplatelet territory).',
  source:'Neuro endpoint.pdf, Stroke, Q12, p.88 (answer p.89)'
},

{ id:'npep-stroke-14', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'A 50-year-old female with diabetes and hypertension presents with hemiplegia. ECG shows sinus rhythm. What is the most likely type of stroke?',
  options:['Embolic stroke', 'Hemorrhagic stroke', 'Thrombotic stroke', 'Lacunar infarct'],
  answer:2,
  explanation:'In patients with vascular risk factors and no arrhythmia, thrombotic stroke due to atherosclerotic disease is most likely.',
  objective:'Use atherosclerotic risk factors plus a normal (sinus) rhythm to favour thrombotic over embolic stroke.',
  source:'Neuro endpoint.pdf, Stroke, Q14, p.90 (answer p.91) — source’s own numbering skips "13"; possible duplicate: see report (npqb-nr-97, house bank, near-identical vignette)'
},

{ id:'npep-stroke-15', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'A patient had a stroke at 10:30 AM and arrived at the ER at 2:30 PM. What is the appropriate management?',
  options:['Intravenous tPA', 'Aspirin only', 'CT brain followed by aspirin', 'Mechanical thrombectomy only'],
  answer:0,
  explanation:'The patient arrived within the 4.5-hour window; after excluding hemorrhage via CT, tPA is indicated for eligible patients with ischemic stroke.',
  objective:'Calculate elapsed time from symptom onset to arrival (4 hours here) and apply it against the 4.5-hour tPA window.',
  source:'Neuro endpoint.pdf, Stroke, Q15, p.92 (answer p.93)'
},

{ id:'npep-stroke-16', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'Intravenous thrombolysis with tPA in acute ischemic stroke is most effective when given within how many hours of symptom onset?',
  options:['4.5 hours', '8 hours', '12 hours', '24 hours'],
  answer:0,
  explanation:'tPA is most effective when given within 4.5 hours of symptom onset, as this maximizes benefits and reduces the risk of complications.',
  objective:'State the 4.5-hour IV tPA window for acute ischaemic stroke.',
  source:'Neuro endpoint.pdf, Stroke, Q16, p.94 (answer p.95) — possible duplicate: see report (npqb-nr-45, house bank, same fact)'
},

{ id:'npep-stroke-17', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'A female with a 20-minute episode of dysarthria and left hemiparesis is diabetic and hypertensive. What is the best next step?',
  options:['Start aspirin immediately', 'Start anticoagulants', 'Administer tPA', 'Order a CT brain before starting aspirin'],
  answer:3,
  explanation:'Even with transient ischemic attack (TIA) symptoms, imaging is needed to rule out hemorrhage before initiating antiplatelet therapy.',
  objective:'Require CT before antiplatelet therapy even for a resolved (TIA-like) focal deficit, to exclude haemorrhage first.',
  source:'Neuro endpoint.pdf, Stroke, Q17, p.96 (answer p.97)'
},

{ id:'npep-stroke-18', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'What is the penumbra in acute ischemic stroke?',
  options:['Viable and functioning tissue', 'Non-viable and non-functioning tissue', 'Viable but non-functioning tissue', 'Non-viable but functioning tissue'],
  answer:2,
  explanation:'The penumbra is an area of ischemic brain tissue that is still viable but electrically silent. It can be salvaged with timely reperfusion therapy.',
  objective:'Define the ischaemic penumbra as viable but non-functioning tissue, salvageable with timely reperfusion.',
  source:'Neuro endpoint.pdf, Stroke, Q18, p.98 (answer p.99)'
},

{ id:'npep-stroke-19', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'A female patient presents with right hemiplegia and mouth deviation to the left. ECG shows irregularly irregular rhythm. What is the provisional diagnosis?',
  options:['Thrombotic stroke', 'Hemorrhagic stroke', 'Embolic ischemic stroke', 'Brainstem stroke'],
  answer:2,
  explanation:'Irregularly irregular ECG suggests atrial fibrillation, a common cause of embolic strokes. Sudden-onset right hemiplegia and mouth deviation indicate a left hemispheric embolic event.',
  objective:'Link an irregularly irregular pulse/ECG (atrial fibrillation) to embolic ischaemic stroke as the provisional diagnosis.',
  source:'Neuro endpoint.pdf, Stroke, Q19, p.100 (answer p.101)'
},

{ id:'npep-stroke-20', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'What is the best initial investigation in suspected ischemic stroke to exclude hemorrhage?',
  options:['CT brain without contrast', 'MRI brain', 'Lumbar puncture', 'Carotid Doppler'],
  answer:0,
  explanation:'Non-contrast CT is the fastest and most accessible tool to exclude intracranial hemorrhage, which is essential before initiating thrombolytic therapy.',
  objective:'State non-contrast CT as the initial imaging study to exclude haemorrhage before thrombolysis.',
  source:'Neuro endpoint.pdf, Stroke, Q20, p.102 (answer p.103) — possible duplicate: see report (npqb-nr-55, house bank, same fact)'
},

{ id:'npep-stroke-21', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'What is the recommended long-term prevention strategy for recurrent cardioembolic stroke?',
  options:['Antiplatelet therapy', 'Statins', 'Anticoagulants such as warfarin', 'Clopidogrel alone'],
  answer:2,
  explanation:'For cardioembolic strokes (e.g., due to atrial fibrillation or valvular disease), long-term anticoagulation with warfarin or DOACs is more effective than antiplatelets in preventing recurrence.',
  objective:'Recommend long-term anticoagulation (not antiplatelet therapy) for secondary prevention of recurrent cardioembolic stroke.',
  source:'Neuro endpoint.pdf, Stroke, Q21, p.104 (answer p.105)'
},

{ id:'npep-stroke-22', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'What is the most important laboratory investigation to assess in a suspected stroke patient?',
  options:['Electrolytes', 'Blood glucose', 'Coagulation profile', 'Liver function tests'],
  answer:1,
  explanation:'Hypoglycemia and hyperglycemia can mimic stroke or worsen outcomes. Therefore, checking blood glucose is essential in the initial evaluation of suspected stroke.',
  objective:'Prioritise bedside blood glucose in the initial stroke work-up, since hypo/hyperglycaemia can mimic or worsen a stroke presentation.',
  source:'Neuro endpoint.pdf, Stroke, Q22, p.106 (answer p.107)'
},

{ id:'npep-stroke-23', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'What is the most appropriate long-term treatment to prevent recurrent cardioembolic strokes in this patient?',
  options:['Warfarin', 'Clopidogrel', 'Aspirin', 'Combination aspirin and clopidogrel'],
  answer:0,
  explanation:'Patients with rheumatic heart disease and cardioembolic stroke benefit from long-term anticoagulation with warfarin to prevent recurrence. (The source prints this stem and explanation exactly as shown, including "in this patient" and a rheumatic-heart-disease reference with no vignette of its own on this page — likely an uncorrected editorial carryover from Q9, fourteen questions earlier, the only other rheumatic-heart-disease case in this chapter. Transcribed as printed; the key is not disputed.)',
  objective:'Recommend long-term warfarin for secondary prevention after a cardioembolic stroke of rheumatic valvular origin.',
  source:'Neuro endpoint.pdf, Stroke, Q23, p.108 (answer p.109)'
},

{ id:'npep-stroke-24', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'Which type of sensory deficit is most commonly seen in the lower limbs in anterior cerebral artery (ACA) infarction?',
  options:['Deep sensation', 'Temperature sensation', 'Pain sensation', 'Cortical sensation'],
  answer:3,
  explanation:'ACA infarction often affects the medial frontal and parietal lobes, causing contralateral lower limb weakness and cortical sensory loss, including proprioception and graphesthesia.',
  objective:'Attribute contralateral lower-limb-predominant weakness with cortical sensory loss to anterior cerebral artery territory infarction.',
  source:'Neuro endpoint.pdf, Stroke, Q24, p.110 (answer p.111)'
}

];
