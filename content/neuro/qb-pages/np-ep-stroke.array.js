/*
 * "Neuro endpoint.pdf" — Chapter 2 "Stroke", raw/verbatim transcription pass.
 * Printed pages 53-64 are lecture notes (stroke definitions, ischemic/hemorrhagic pathophysiology,
 * treatment protocols, arterial-territory table) — not questions. Page 65 is a plain "Questions"
 * section-divider slide (confirmed by eye, matches its 13-char OCR). Q1 begins at printed p.66.
 * One question per page, its answer (with the correct option highlighted yellow/bold/underlined in
 * the source, and often a printed explanation box) on the immediately following page.
 * The source's own printed numbering SKIPS "13" — Q12 (pp.88-89) is followed directly by "14."
 * (pp.90-91), no page in between. So this chapter yields 23 questions (1-12, 14-24), not 24,
 * spanning printed pp.66-111 (46 pages = 23 Q-pages + 23 answer-pages, no leftover).
 * p.112 is the "Epilepsy" chapter title/divider (matches TOC's printed p.112, confirmed by eye,
 * no question on it). Printed-page = PDF-page offset held throughout pp.53-120 (re-verified).
 * Each entry's `key` is the printed letter (lowercase a-d on some pages, uppercase A-E on others —
 * transcribed exactly as printed per question). `printedExplanation` is null where the source prints
 * no explanation box (Q1-Q3 only); schema-ready authored explanations for those are in
 * np-ep-stroke.draft.js, each ending with the required marker sentence.
 */

var NP_EP_STROKE_ARRAY = [

{ num:1, pageQ:66, pageA:67,
  stem:'Antiplatelet therapy is used in secondary stroke prevention in which of the following cases?',
  options:['a. Atrial fibrillation', 'b. Hypercholesteremia', 'c. Valvular Heart Disease', 'd. Mechanical valve replacement'],
  key:'b', printedExplanation:null },

{ num:2, pageQ:68, pageA:69,
  stem:'The most common cause of intracerebral hemorrhage is:',
  options:['a. Hypertension', 'b. Aneurysmal rupture', 'c. Coagulopathy', 'd. Hemorrhagic transformation of an ischemic infarct'],
  key:'a', printedExplanation:null },

{ num:3, pageQ:70, pageA:71,
  stem:'65-year-old male with acute right hemiplegia since 3 hours. He is diabetic, smoker, BP 146/90. CT brain is normal. What is the treatment?',
  options:['a. Tissue plasminogen activator (t-PA)', 'b. Heparin', 'c. Aspirin', 'd. Oral anticoagulant'],
  key:'a', printedExplanation:null },

{ num:4, pageQ:72, pageA:73,
  stem:'A 50-year-old patient presented to ER, one hour, after acute onset of dysphasia, transient blindness and right sided hemiparesis. Plain CT scan was unremarkable. What is the most appropriate treatment of this patient?',
  options:['A. Start therapeutic anticoagulant', 'B. Intravenous diuretics', 'C. Bolus dose of Alteplase (tissue plasminogen activator)', 'D. Loading dose of acetylsalicylic acid'],
  key:'C', printedExplanation:'The patient is presenting within the window for thrombolytic therapy with symptoms suggestive of acute ischemic stroke. Since the CT scan is negative for hemorrhage, alteplase (tPA) is the treatment of choice.' },

{ num:5, pageQ:74, pageA:75,
  stem:'A patient presented with acute onset dysarthria and mild left sided hemiparesis which started on 09:00 am during having breakfast. The patient presented to the ER at 02:00 pm. Blood pressure was 165/95 mmg. CT brain and CT angiography showed normal findings. What is the best next step in the management?',
  options:['A. Intravenous tissue plasminogen activator', 'B. Intravenous therapeutic heparin', 'C. Oral anticoagulant', 'D. Oral aspirin'],
  key:'D', printedExplanation:'Since symptom onset was over 4.5 hours ago, thrombolysis is contraindicated. Aspirin is the appropriate next step for ischemic stroke management after imaging has ruled out hemorrhage.',
  rawNotes:'Source prints blood pressure unit as "mmg" (verbatim, likely intended "mmHg") — transcribed as printed per project rule (units are not silently corrected). 09:00-14:00 = 5 hours, consistent with printed explanation\'s ">4.5 hours."' },

{ num:6, pageQ:76, pageA:77,
  stem:'When is mechanical thrombectomy sed in ischemic stroke?',
  options:['a) The first 7 hours in cases of anterior large vessel circulation.', 'b) The first 4.5 hours in cases of anterior large vessel circulation', 'c) The first 4.5 hours in cases of posterior large vessel circulation', 'd) The first 7 hours in cases of posterior large vessel circulation'],
  key:'a', printedExplanation:'Mechanical thrombectomy is most effective when performed within 6–7 hours for anterior circulation strokes involving large vessels. Time is critical to prevent irreversible brain damage.',
  rawNotes:'Source stem reads "sed" verbatim (source typo, likely intended "used") — transcribed as printed, not an OCR artifact.' },

{ num:7, pageQ:78, pageA:79,
  stem:'A 60 year-old male patient presented with dysphasia and right hemiplegia since 8 hours. The CT Scan was unremarkable. CT angiography showed occlusion of the left internal carotid artery and left middle cerebral artery. CT brain perfusion showed no mismatch. What is the most suitable treatment for this patient?',
  options:['a) Antiplatelet and physiotherapy.', 'b) Decompression craniotomy', 'c) Mechanical thrombectomy', 'd) Intravenous alteplase.'],
  key:'a', printedExplanation:'The absence of perfusion mismatch on imaging indicates no viable tissue to salvage, so thrombolytic or surgical intervention is not warranted. Supportive care and secondary prevention are advised.' },

{ num:8, pageQ:80, pageA:81,
  stem:'A patient has a left facial droop, flattened nasolabial fold, and drooping mouth corner. He cannot puff his cheeks, and eye closure is slightly weak. Forehead movement is preserved. What is the diagnosis?',
  options:['A. Right middle cerebral artery stroke', 'B. Parotid gland tumour', 'C. Left internal capsule stroke', "D. Bell’s palsy", 'E. Cerebellopontine angle tumour'],
  key:'A', printedExplanation:'Preserved forehead movement with lower facial weakness suggests an upper motor neuron lesion, as seen in a stroke affecting the contralateral cortex (right MCA affecting left face). LMN lesions like Bell’s palsy would affect the entire face.',
  rawNotes:'5 options (A-E), not 4 — the only 5-option question in this chapter.' },

{ num:9, pageQ:82, pageA:83,
  stem:'A 20-year-old female with a history of rheumatic heart disease presents with acute right hemiplegia and aphasia for a few hours. CT brain is normal. What is the best treatment option?',
  options:['A) Intravenous tissue plasminogen activator (tPA)', 'B) Aspirin', 'C) Heparin', 'D) Clopidogrel'],
  key:'A', printedExplanation:'If CT shows no hemorrhage and symptoms are within the therapeutic window, IV tPA is indicated for acute ischemic stroke to improve outcomes.' },

{ num:10, pageQ:84, pageA:85,
  stem:'What is the most common risk factor for embolic stroke?',
  options:['A) Artery-to-artery embolization', 'B) Rheumatic mitral valve disease', 'C) Prosthetic valve replacement', 'D) Atrial fibrillation'],
  key:'D', printedExplanation:'Atrial fibrillation leads to blood stasis in the atria, promoting clot formation that can embolize to cerebral vessels, causing ischemic stroke.',
  rawNotes:'DUPLICATE-CHECK FLAG: near-duplicate of the live house-bank question npqb-nr-36 ("What is the most common source of embolic ischemic stroke?", chapter nr-stroke, gradegain) — same fact (atrial fibrillation), different option set. Left as a separate entry per brief; flagged, not folded.' },

{ num:11, pageQ:86, pageA:87,
  stem:'What is the most important risk factor for both ischemic and hemorrhagic stroke?',
  options:['A) Hyperuricemia', 'B) Diabetes mellitus', 'C) Dyslipidemia', 'D) Hypertension'],
  key:'D', printedExplanation:'Chronic hypertension damages blood vessels, increasing the risk for both ischemic (via atherosclerosis) and hemorrhagic strokes (via rupture).' },

{ num:12, pageQ:88, pageA:89,
  stem:'Oral anticoagulants are indicated after ischemic stroke in which of the following cases?',
  options:['A) Small vessel disease', 'B) Vertebrobasilar stroke', 'C) Cardioembolic source', 'D) Large vessel atherosclerosis'],
  key:'C', printedExplanation:'Anticoagulants are used to prevent further embolic events in patients with atrial fibrillation or other high-risk cardioembolic sources.' },

{ num:14, pageQ:90, pageA:91,
  stem:'A 50-year-old female with diabetes and hypertension presents with hemiplegia. ECG shows sinus rhythm. What is the most likely type of stroke?',
  options:['A) Embolic stroke', 'B) Hemorrhagic stroke', 'C) Thrombotic stroke', 'D) Lacunar infarct'],
  key:'C', printedExplanation:'In patients with vascular risk factors and no arrhythmia, thrombotic stroke due to atherosclerotic disease is most likely.',
  rawNotes:'DUPLICATE-CHECK FLAG: near-verbatim duplicate of the live house-bank question npqb-nr-97 ("A 50-year-old female, diabetic and hypertensive, presents with hemiplegia. Her heart rate was in sinus rhythm. The type of stroke is:", chapter nr-stroke, gradegain, answer Thrombotic) — same vignette, same fact pattern, same answer. Left as a separate entry per brief; flagged, not folded. Source\'s own numbering skips "13" here — Q12 (pp.88-89) is followed directly by "14." (pp.90-91), no page 13 exists in the book.' },

{ num:15, pageQ:92, pageA:93,
  stem:'A patient had a stroke at 10:30 AM and arrived at the ER at 2:30 PM. What is the appropriate management?',
  options:['A) Intravenous tPA', 'B) Aspirin only', 'C) CT brain followed by aspirin', 'D) Mechanical thrombectomy only'],
  key:'A', printedExplanation:'The patient arrived within the 4.5-hour window; after excluding hemorrhage via CT, tPA is indicated for eligible patients with ischemic stroke.',
  rawNotes:'10:30 AM to 2:30 PM = 4 hours, consistent with the printed explanation\'s "within the 4.5-hour window."' },

{ num:16, pageQ:94, pageA:95,
  stem:'Intravenous thrombolysis with tPA in acute ischemic stroke is most effective when given within how many hours of symptom onset?',
  options:['A) 4.5 hours', 'B) 8 hours', 'C) 12 hours', 'D) 24 hours'],
  key:'A', printedExplanation:'tPA is most effective when given within 4.5 hours of symptom onset, as this maximizes benefits and reduces the risk of complications.',
  rawNotes:'DUPLICATE-CHECK FLAG: near-duplicate of the live house-bank question npqb-nr-45 ("What is the window period within which tPA can be administered?", chapter nr-stroke, gradegain, answer 4.5 hours) — same fact, near-identical question shape. Left as a separate entry per brief; flagged, not folded.' },

{ num:17, pageQ:96, pageA:97,
  stem:'A female with a 20-minute episode of dysarthria and left hemiparesis is diabetic and hypertensive. What is the best next step?',
  options:['A) Start aspirin immediately', 'B) Start anticoagulants', 'C) Administer tPA', 'D) Order a CT brain before starting aspirin'],
  key:'D', printedExplanation:'Even with transient ischemic attack (TIA) symptoms, imaging is needed to rule out hemorrhage before initiating antiplatelet therapy.' },

{ num:18, pageQ:98, pageA:99,
  stem:'What is the penumbra in acute ischemic stroke?',
  options:['A) Viable and functioning tissue', 'B) Non-viable and non-functioning tissue', 'C) Viable but non-functioning tissue', 'D) Non-viable but functioning tissue'],
  key:'C', printedExplanation:'The penumbra is an area of ischemic brain tissue that is still viable but electrically silent. It can be salvaged with timely reperfusion therapy.' },

{ num:19, pageQ:100, pageA:101,
  stem:'A female patient presents with right hemiplegia and mouth deviation to the left. ECG shows irregularly irregular rhythm. What is the provisional diagnosis?',
  options:['A) Thrombotic stroke', 'B) Hemorrhagic stroke', 'C) Embolic ischemic stroke', 'D) Brainstem stroke'],
  key:'C', printedExplanation:'Irregularly irregular ECG suggests atrial fibrillation, a common cause of embolic strokes. Sudden-onset right hemiplegia and mouth deviation indicate a left hemispheric embolic event.' },

{ num:20, pageQ:102, pageA:103,
  stem:'What is the best initial investigation in suspected ischemic stroke to exclude hemorrhage?',
  options:['A) CT brain without contrast', 'B) MRI brain', 'C) Lumbar puncture', 'D) Carotid Doppler'],
  key:'A', printedExplanation:'Non-contrast CT is the fastest and most accessible tool to exclude intracranial hemorrhage, which is essential before initiating thrombolytic therapy.',
  rawNotes:'DUPLICATE-CHECK FLAG: near-duplicate of the live house-bank question npqb-nr-55 ("What is the best initial investigation to exclude an intracranial hemorrhage?", chapter nr-stroke, gradegain, answer CT without IV contrast) — same fact, near-identical question shape. Left as a separate entry per brief; flagged, not folded.' },

{ num:21, pageQ:104, pageA:105,
  stem:'What is the recommended long-term prevention strategy for recurrent cardioembolic stroke?',
  options:['A) Antiplatelet therapy', 'B) Statins', 'C) Anticoagulants such as warfarin', 'D) Clopidogrel alone'],
  key:'C', printedExplanation:'For cardioembolic strokes (e.g., due to atrial fibrillation or valvular disease), long-term anticoagulation with warfarin or DOACs is more effective than antiplatelets in preventing recurrence.' },

{ num:22, pageQ:106, pageA:107,
  stem:'What is the most important laboratory investigation to assess in a suspected stroke patient?',
  options:['A) Electrolytes', 'B) Blood glucose', 'C) Coagulation profile', 'D) Liver function tests'],
  key:'B', printedExplanation:'Hypoglycemia and hyperglycemia can mimic stroke or worsen outcomes. Therefore, checking blood glucose is essential in the initial evaluation of suspected stroke.' },

{ num:23, pageQ:108, pageA:109,
  stem:'What is the most appropriate long-term treatment to prevent recurrent cardioembolic strokes in this patient?',
  options:['A) Warfarin', 'B) Clopidogrel', 'C) Aspirin', 'D) Combination aspirin and clopidogrel'],
  key:'A', printedExplanation:'Patients with rheumatic heart disease and cardioembolic stroke benefit from long-term anticoagulation with warfarin to prevent recurrence.',
  rawNotes:'ANOMALY: this page carries no vignette of its own — the stem\'s "in this patient" and the explanation\'s "rheumatic heart disease" have no antecedent on pp.108-109; both appear to be an uncorrected editorial carryover from Q9 (pp.82-83, 14 questions earlier), which is the only other rheumatic-heart-disease vignette in this chapter. Transcribed exactly as printed; key not disputed, per project rule.' },

{ num:24, pageQ:110, pageA:111,
  stem:'Which type of sensory deficit is most commonly seen in the lower limbs in anterior cerebral artery (ACA) infarction?',
  options:['A) Deep sensation', 'B) Temperature sensation', 'C) Pain sensation', 'D) Cortical sensation'],
  key:'D', printedExplanation:'ACA infarction often affects the medial frontal and parietal lobes, causing contralateral lower limb weakness and cortical sensory loss, including proprioception and graphesthesia.' }

];
