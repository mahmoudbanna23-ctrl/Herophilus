/*
 * "Neuro endpoint.pdf" - Model Final Exam 6, PDF pp.2095-2190 (divider p.2095, Q1 p.2096 ... Q45
 * p.2185, book ends p.2190 - confirmed by direct render, no questions past Q45).
 * 45/45 rows TRANSCRIBED DIRECTLY FROM PAGE IMAGES by a Claude subagent (ROUTE-OK: Codex had
 * already exhausted its quota on this exact chapter; gateway unreachable this session too) -
 * this file was NOT run through tools/bank-harness/npep-build.mjs, so it carries no machine
 * checks.json.
 *
 * FOLD PASS DONE (hand-verified against the live corpus, fresh sweep + manual dice re-check,
 * not the stale 29-candidate list handed off by the prior agent): 25 of 45 rows are same-book
 * duplicates (9 exact, 1 exact-stem/option-typo, 1 respelled, 3 reordered, 1 cross-chapter
 * exact, 2 heavily-reworded/paraphrased same-vignette pairs the automated sweep under-scored,
 * and 8 "D near stem" hits at dice>=0.89 all confirmed genuine on read) - each dropped here,
 * with a source-note citation added to its corpus survivor instead (see the close-out report,
 * not tracked in this file). One flagged F-stage hit (npep-fe6-30 vs npqb-nr-321) was a FALSE
 * POSITIVE on hand read - "most common cause of meningitis" vs "most common cause of sciatica"
 * are unrelated facts that only share the four-word template phrase; npep-fe6-30 stays as a
 * novel row. 20 rows below are the confirmed-novel survivors of that pass, ready for splice.
 */

{ id:'npep-fe6-2', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'Continuing the same patient as npep-mood-15 (referred for persistent headache, contrast-enhanced CT obtained). Which type of brain tumors could be suggestive of the findings seen in the contrast-enhanced CT scan?',
  options:['Temporal meningioma.', 'Cerebellar astrocytoma.', 'Foramen magnum schwannoma.', 'Brain stem Glioblastoma.'],
  answer:0,
  explanation:'The printed answer page carries a short handwritten-style note alongside the figure: “Left temporal / With homogenous enhancement / Mostly meningioma” (printed on the page, transcribed verbatim) — this is quoted directly from the source, not added by this bank.\n\nMeningiomas are extra-axial, dural-based tumours that classically show strong, homogeneous contrast enhancement on CT, and a left temporal location with this enhancement pattern is the printed reading of the image, matching option a (not taken from the course material).\n\nCerebellar astrocytoma is wrong because it is an infratentorial tumour, most typical in children, and does not match a left temporal supratentorial location (not taken from the course material). Foramen magnum schwannoma is wrong because it arises at the craniocervical junction, not the temporal lobe (not taken from the course material). Brain stem glioblastoma is wrong both on location (brainstem, not temporal lobe) and on enhancement pattern, since high-grade gliomas more typically show irregular, ring-like or heterogeneous enhancement rather than the homogeneous pattern described here (not taken from the course material).',
  objective:'A homogeneously enhancing, dural-based temporal mass on contrast CT is characteristic of a meningioma.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q2, p.2098 (answer p.2099)'
},

{ id:'npep-fe6-7', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'What is the characteristic feature of headache associated with brain tumors?',
  options:['Diurnal exacerbation.', 'Dull aching.', 'Continuous.', 'Decreased with Valsalva maneuver.'],
  answer:0,
  explanation:'The printed key is option a. Headache from raised intracranial pressure (as with a brain tumour) classically follows a diurnal pattern, characteristically worse on waking in the morning (from overnight recumbency, reduced CSF drainage and mild nocturnal CO2 retention raising intracranial pressure) and easing somewhat as the day goes on (not taken from the course material).\n\nDull aching (b) is not a discriminating feature, since tension-type headache is also typically dull and aching, so it does not distinguish a tumour headache from the far more common benign headache (not taken from the course material). Continuous (c) is wrong because raised-ICP headache from a tumour is often intermittent or positional rather than unremitting (not taken from the course material). Decreased with Valsalva maneuver (d) is wrong and in fact reverses the true relationship: raised intracranial pressure headache classically WORSENS with Valsalva-type manoeuvres (coughing, straining, bending) rather than improving with them (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'A morning-predominant (diurnal), Valsalva-worsened headache pattern suggests raised intracranial pressure, as from a brain tumour.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q7, p.2108 (answer p.2109)'
},

{ id:'npep-fe6-8', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'What\'s the percentage of patients with history of optic neuritis that have abnormal visual evoked potential (VEP)?',
  options:['Less than 90%', 'More than 40', 'Less than 40%', 'More than 90%'],
  answer:3,
  explanation:'The printed key is option d, more than 90%. Visual evoked potentials remain abnormal (classically showing delayed P100 latency from residual demyelination of the optic nerve) in the large majority — over 90% — of patients with a past episode of optic neuritis, even after clinical visual recovery, which is why VEP is a useful test for detecting subclinical/past optic nerve demyelination (not taken from the course material).\n\nThe other three options (less than 90%, more than 40, less than 40%) all understate how consistently VEP stays abnormal after optic neuritis, and are wrong for that reason (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'VEP remains abnormal in over 90% of patients after an episode of optic neuritis, reflecting persistent optic nerve demyelination even after clinical recovery.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q8, p.2110 (answer p.2111)'
},

{ id:'npep-fe6-11', bank:'endpoint', module:'neuropsych', chapter:'nr-ms',
  stem:'A 22-year-old patient presented with acute onset of urine retention and bilateral lower limbs weakness and sensory loss that extend to lower abdomen. One year ago, she had attack of painful decreased visual acuity of left eye that responded to steroid. What is the most probable etiology of this patient\'s presentation?',
  options:['Demyelinating.', 'Degenerative.', 'infective.', 'Vascular'],
  answer:0,
  explanation:'The printed key is option a, demyelinating. A past episode of steroid-responsive painful visual loss (optic neuritis) followed a year later by an acute transverse myelitis-type presentation (bilateral leg weakness and sensory loss ascending to the lower abdomen, with urinary retention) represents CNS lesions separated in both time and space — the hallmark of a demyelinating disease such as multiple sclerosis (not taken from the course material).\n\nDegenerative (b) is wrong because degenerative disease is typically slowly progressive rather than presenting as two discrete, steroid-responsive attacks separated by a year (not taken from the course material). Infective (c) is wrong because there is no fever or infective picture described, and an infective myelitis would not typically explain the earlier steroid-responsive optic neuritis episode as part of the same process (not taken from the course material). Vascular (d) is wrong because a vascular (ischaemic) cord or optic nerve event would present acutely without the striking steroid-responsiveness and relapsing-remitting, multi-site pattern described here (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Lesions separated in time and space — here, optic neuritis followed a year later by transverse myelitis, both steroid-responsive — point to a demyelinating disease.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q11, p.2116 (answer p.2117)'
},

{ id:'npep-fe6-13', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'A patient developed sudden onset of severe thunderclap headache and loss of consciousness (the source prints the patient\'s age as "4-year-old," almost certainly a printing error given the presentation and the imaging work-up described — kept verbatim, not corrected). In the emergency department, as subarachnoid hemorrhage was suspected, initial treatment was given to prevent worsening of patient condition. Brain CT/CT Angiography was ordered. The imaging revealed that the patient had a ruptured aneurysm. What was the most likely treatment initially given to this patient?',
  options:['Nimodipine.', 'Steroid.', 'Sumatriptan.', 'Carbamazepine.'],
  answer:0,
  explanation:'The printed key is option a, nimodipine. Nimodipine is a calcium channel blocker specifically indicated after aneurysmal subarachnoid haemorrhage to reduce the risk and severity of cerebral vasospasm, one of the main causes of secondary neurological worsening in the days after the bleed — this is exactly the "initial treatment to prevent worsening of patient condition" described in the stem (not taken from the course material).\n\nSteroid (b) is not a standard component of aneurysmal SAH management (not taken from the course material). Sumatriptan (c) is a migraine-specific drug and is not used, and is in fact potentially harmful, in the setting of a vascular emergency such as SAH (not taken from the course material). Carbamazepine (d) is an antiepileptic maintenance drug with no role in the acute prevention of vasospasm (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Nimodipine is given after aneurysmal subarachnoid haemorrhage specifically to reduce the risk of cerebral vasospasm.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q13, p.2120 (answer p.2121)'
},

{ id:'npep-fe6-14', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'Continuing the same patient as npep-fe6-13 (ruptured aneurysm on CT angiography, on nimodipine). What should be the surgical treatment to prevent recurrence of such hemorrhage?',
  options:['Endovascular coiling of aneurysm.', 'Shunt insertion in 3rd ventricle.', 'Hematoma evacuation.', 'Thrombus recanalization.'],
  answer:0,
  explanation:'The printed key is option a. Endovascular coiling (or surgical clipping) of the ruptured aneurysm is the definitive treatment to obliterate the aneurysm sac and prevent rebleeding, which is the main early recurrence risk after aneurysmal subarachnoid haemorrhage (not taken from the course material).\n\nShunt insertion in the 3rd ventricle (b) treats a possible complication — hydrocephalus from blood obstructing CSF flow — but does not address the aneurysm itself or prevent rebleeding (not taken from the course material). Hematoma evacuation (c) may be needed for a large associated intracerebral haematoma causing mass effect, but again does not secure the aneurysm against rebleeding (not taken from the course material). Thrombus recanalization (d) is a treatment concept for ischaemic stroke (removing an occlusive clot), not for a ruptured aneurysm, and is not relevant here (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Endovascular coiling (or clipping) secures a ruptured aneurysm and is the definitive way to prevent rebleeding.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q14, p.2122 (answer p.2123)'
},

{ id:'npep-fe6-16', bank:'endpoint', module:'neuropsych', chapter:'nr-nerve',
  stem:'What is the most common cause of motor peripheral neuropathy?',
  options:['Diabetic peripheral neuropathy.', 'Vitamin B1 deficiency.', 'Gillian-Barre syndrome.', 'Arsenic poisoning'],
  answer:2,
  explanation:'The printed key is option c (printed as "Gillian-Barre syndrome" — the standard spelling is Guillain-Barré syndrome; kept verbatim as printed). While diabetic neuropathy is the most common peripheral neuropathy overall, it is typically a distal, symmetric, predominantly SENSORY neuropathy. The question specifically asks about MOTOR neuropathy, and Guillain-Barré syndrome, an acute immune-mediated polyradiculoneuropathy, is the most common cause of an acute, predominantly motor (ascending, areflexic) peripheral neuropathy (not taken from the course material).\n\nDiabetic peripheral neuropathy (a) is wrong for a pure motor picture, since it is usually sensory-predominant (not taken from the course material). Vitamin B1 (thiamine) deficiency (b) causes a sensorimotor neuropathy (as in beriberi) but is a far less common cause overall than Guillain-Barré syndrome (not taken from the course material). Arsenic poisoning (d) is a rare toxic cause of peripheral neuropathy, not a common one (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'When a peripheral neuropathy is predominantly motor, Guillain-Barré syndrome is the most common cause, in contrast to the sensory-predominant pattern of diabetic neuropathy.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q16, p.2126 (answer p.2127)'
},

{ id:'npep-fe6-17', bank:'endpoint', module:'neuropsych', chapter:'nr-exam',
  stem:'Which finding indicates the examination of optic nerve?',
  options:['Swelling of optic cup.', 'Appearance of ptosis.', 'Presence of nystagmus.', 'Eye movement deviation'],
  answer:0,
  explanation:'The printed key is option a. Swelling of the optic cup/disc (papilloedema) is seen directly on fundoscopic examination of the optic nerve (cranial nerve II) and is the finding that specifically reflects optic nerve/optic disc pathology (not taken from the course material).\n\nPtosis (b) reflects oculomotor (3rd) nerve or sympathetic pathway dysfunction, not the optic nerve (not taken from the course material). Nystagmus (c) reflects vestibular, cerebellar, or brainstem gaze-control pathway dysfunction rather than the optic nerve itself (not taken from the course material). Eye movement deviation (d) reflects dysfunction of the ocular motor nerves (3rd, 4th, 6th) or their supranuclear control, not the optic nerve (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Optic disc/cup swelling on fundoscopy is the direct examination finding of optic nerve involvement, distinct from ptosis, nystagmus, or eye movement signs referable to the ocular motor nerves.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q17, p.2128 (answer p.2129)'
},

{ id:'npep-fe6-20', bank:'endpoint', module:'neuropsych', chapter:'nr-headache',
  stem:'A 35-year-old female patient presented with acute headache, visual deterioration, and loss of consciousness. Her MRI brain showed sellar space occupying lesion with suprasellar extension. What is the best treatment plan for this patient?',
  options:['Endonasal endoscopic transsphenoidal excision.', 'Gamma knife radiosurgery.', 'Stereotactic aspiration.', 'Dopamine agonist medical treatment and observation'],
  answer:0,
  explanation:'The printed key is option a. A large sellar mass with suprasellar extension causing acute headache, visual deterioration and loss of consciousness represents an emergency requiring prompt mechanical decompression; endonasal endoscopic transsphenoidal excision is the standard surgical approach for a symptomatic pituitary macroadenoma needing urgent decompression of the optic apparatus (not taken from the course material).\n\nGamma knife radiosurgery (b) is not appropriate as a first-line treatment for a large, acutely symptomatic mass — it is better suited to small residual or recurrent lesions, and its effect is delayed, unsuitable for acute visual threat (not taken from the course material). Stereotactic aspiration (c) is not a standard approach for a solid pituitary tumour (not taken from the course material). Dopamine agonist therapy with observation (d) would only be appropriate if this were confirmed as a prolactinoma, which is not established in the stem, and observation alone is inappropriate given the acute, vision-threatening presentation requiring urgent decompression regardless of tumour subtype (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'An acutely symptomatic sellar mass with visual compromise needs urgent surgical decompression (transsphenoidal excision), not medical therapy or radiosurgery alone.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q20, p.2134 (answer p.2135)'
},

{ id:'npep-fe6-21', bank:'endpoint', module:'neuropsych', chapter:'nr-nerve',
  stem:'A 21-year-old male soldier presented to the clinic with a depression in the first web space and sensory loss involving little finger. He reported that he used to carry his weapon for 6 hours per day. What is the most likely affected nerve?',
  options:['Median.', 'Radial.', 'Ulnar.', 'Anterior interosseous.'],
  answer:2,
  explanation:'The printed key is option c. A "depression" (wasting/hollowing) in the first web space reflects wasting of the first dorsal interosseous muscle, an ulnar-innervated intrinsic hand muscle, and sensory loss over the little finger is classic ulnar nerve sensory territory. Prolonged direct pressure on the medial wrist/hand from carrying a rifle strap is a recognised mechanism of ulnar nerve compression (e.g. at Guyon’s canal) (not taken from the course material).\n\nMedian (a) is wrong because the median nerve supplies the thenar (lateral hand) muscles and sensation to the lateral three and a half digits, not the first dorsal interosseous or the little finger (not taken from the course material). Radial (b) is wrong because the radial nerve is a predominantly extensor/dorsal sensory nerve of the wrist and hand and does not supply the first dorsal interosseous or little finger sensation (not taken from the course material). Anterior interosseous (d) is wrong because it is a purely motor branch of the median nerve supplying deep forearm flexors, with no cutaneous sensory territory and no supply to the first dorsal interosseous (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'First dorsal interosseous wasting plus little-finger sensory loss localises to the ulnar nerve, here from chronic pressure at the wrist/hand.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q21, p.2136 (answer p.2137)'
},

{ id:'npep-fe6-22', bank:'endpoint', module:'neuropsych', chapter:'nr-stroke',
  stem:'What is the most common type of stroke?',
  options:['ischemic embolic.', 'intracerebral hemorrhage.', 'ischemic thrombotic.', 'subarachnoid hemorrhage'],
  answer:2,
  explanation:'The printed key is option c, ischaemic thrombotic. Ischaemic stroke overall accounts for the large majority of strokes, and within the ischaemic category, thrombotic mechanisms (large-artery atherosclerotic thrombosis together with small-vessel/lacunar thrombotic disease) are taught here as the most common subtype, outweighing purely embolic and haemorrhagic causes combined (printed key kept as-is; some sources instead emphasise cardioembolic stroke as the single leading mechanism, but the bank’s printed answer is transcribed and not disputed) (not taken from the course material).\n\nIschaemic embolic (a) is a recognised and common ischaemic subtype but is printed here as less common than the thrombotic category. Intracerebral haemorrhage (b) and subarachnoid haemorrhage (d) are both haemorrhagic stroke types, which are collectively less common than ischaemic stroke overall (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Ischaemic stroke is more common than haemorrhagic stroke overall; the bank keys the thrombotic ischaemic subtype as the single most common type.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q22, p.2138 (answer p.2139)'
},

{ id:'npep-fe6-23', bank:'endpoint', module:'neuropsych', chapter:'nr-coma',
  stem:'What is the sign of middle cranial skull base fracture?',
  options:['CSF otorrhea.', 'Bilateral Raccoons eyes.', 'Anosmia.', 'Battie sign.'],
  answer:0,
  explanation:'The printed key is option a. CSF otorrhea (cerebrospinal fluid leaking from the ear) requires a fracture through the temporal bone/tegmen tympani with a dural tear, which localises directly to the middle cranial fossa, making it a direct and specific sign of a middle fossa fracture (not taken from the course material).\n\nBilateral raccoon eyes (b) — periorbital ecchymosis — and anosmia (c) — loss of smell from olfactory nerve/cribriform plate injury — are both signs of an ANTERIOR cranial fossa fracture, not the middle fossa (not taken from the course material). Battle’s sign (mastoid ecchymosis, printed here as "Battie sign") is classically associated with a posterior fossa/temporal bone (basilar) fracture and, unlike CSF otorrhea, is an indirect bruising sign that can take a day or more to appear, making it a less immediate/specific indicator than CSF otorrhea for the middle fossa (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'CSF otorrhea is a direct sign of a middle cranial fossa (temporal bone) fracture, in contrast to raccoon eyes and anosmia, which localise to the anterior fossa.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q23, p.2140 (answer p.2141)'
},

{ id:'npep-fe6-24', bank:'endpoint', module:'neuropsych', chapter:'nr-movement',
  stem:'A 60-year-old patient complains of seeing children and pets that no one else seems to see. He has a history of tremor and rigidity for 5 years. What is the possible diagnosis in this patient?',
  options:['Hallucination from comorbid psychiatric illness.', 'Hallucination from in patient with dementia.', 'Hallucination from drug side effects.', 'Hallucination in patient with Parkinson.'],
  answer:3,
  explanation:'The printed key is option d. Well-formed visual hallucinations (commonly of people, children, or animals) are a recognised, intrinsic non-motor complication of longstanding Parkinson’s disease itself, related to disease progression and Lewy body pathology affecting visual processing pathways, and are described here as occurring in the context of 5 years of tremor and rigidity (not taken from the course material).\n\nHallucination from comorbid psychiatric illness (a) is wrong because no separate psychiatric diagnosis or history is given. Hallucination from dementia (b) is wrong because no cognitive decline is described in the stem. Hallucination from drug side effects (c) is a clinically important and common alternative explanation in a levodopa/dopamine-agonist-treated Parkinson’s patient, and in practice both a medication effect and intrinsic Parkinson’s disease psychosis must be considered — the printed key selects option d, attributing the hallucinations to the disease itself rather than to medication, and that printed key is kept here without dispute (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Visual hallucinations are a recognised non-motor feature of longstanding Parkinson’s disease itself, in addition to being a possible dopaminergic drug side effect.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q24, p.2142 (answer p.2143)'
},

{ id:'npep-fe6-25', bank:'endpoint', module:'neuropsych', chapter:'nr-para',
  stem:'What is the main clinical manifestation of posterior cord syndrome?',
  options:['Motor weakness in one lower limb and sensory loss on the other limb.', 'Sensory ataxia.', 'Dissociated suspended sensory loss.', 'Lost pain brick sensation.'],
  answer:1,
  explanation:'Printed explanation box (transcribed verbatim): "Spinal cord syndromes. These are groups of manifestations that occur due to spinal cord compression and depend on the onset and site of compression. 1) Complete cord syndrome: Complete loss of motor, sensory and autonomic functions below the level of the lesion. 2) Anterior cord syndrome: Anterior corticospinal tract injury (pyramidal tract) → loss of motor function mainly in the lower limbs, it is mostly due to anterior spinal cord artery injury or due to trauma. 3) Posterior cord syndrome: Dorsal column injury, affection of the deep sensation (proprioception and vibration sense) leads to sensory ataxia. 4) Central cord syndrome: It occurs due to central cord compression as in cases of syringomyelia. It presents with motor loss in upper limbs more than lower limbs and in proximal muscles more than distal one (because the fibers of the upper limb and proximal muscles are more medial within the cord than those of the lower limb and distal muscles). It also presents with dissociated sensory loss (suspended sensory level) like jacket with long sleeves. 5) Lateral cord syndrome (Brown-Sequard) (Cord hemisection): It is a rare condition occurs due to unilateral affection of the cord so there is a group of manifestation occur at the same side of the lesion and another manifestation occur at the contralateral side due to long tract decussation inside the cord as follows:" (text continues past the edge of this printed page).\n\nPer the printed box, posterior cord syndrome is defined by dorsal column injury causing loss of proprioception and vibration sense, which produces sensory ataxia — matching option b. Option a (crossed motor/sensory loss on opposite limbs) instead describes a Brown-Séquard-type pattern, option c (dissociated suspended sensory loss) is the CENTRAL cord syndrome pattern per the same box, and option d ("lost pain brick sensation," printed with what is almost certainly a typographical error, likely intended as loss of pain/pressure sensation) describes a spinothalamic-type deficit, which is an ANTEROLATERAL, not posterior (dorsal column), tract finding.',
  objective:'Posterior (dorsal column) cord syndrome causes sensory ataxia from loss of proprioception/vibration sense, distinct from the central, anterior, and Brown-Séquard cord syndromes.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q25, p.2144 (answer p.2145)'
},

{ id:'npep-fe6-26', bank:'endpoint', module:'neuropsych', chapter:'nr-nerve',
  stem:'A 27-year-old pregnant lady presents to the clinic with numbness over her right thumb and index finger particularly at night. Phalen\'s test is positive on examination. What is the other expected clinical finding in this patient?',
  options:['Atrophy of the thenar eminence.', 'Impaired sensations over the dorsum of the hand.', 'Atrophy of the abductor pollicis brevis muscle', 'impaired sensations over the thenar eminence.'],
  answer:0,
  explanation:'A positive Phalen’s test with nocturnal numbness of the thumb and index finger in pregnancy is classic median nerve compression at the wrist (carpal tunnel syndrome, common in pregnancy from fluid retention). The printed answer page highlights BOTH option a and option c, with a printed note: "Both A and c. Abductor pollicis brevis one of the thenar muscles" (transcribed verbatim) — the book marks both as correct because they describe the same underlying fact: the abductor pollicis brevis is one of the median-innervated thenar eminence muscles, so its atrophy IS thenar eminence atrophy. Option a is kept as the primary printed key here since it is the more general statement and is listed first; option c is the equivalent, more specific restatement of the same finding, also marked correct by the book (not taken from the course material).\n\nImpaired sensation over the dorsum of the hand (b) is wrong because the dorsal hand is supplied by the radial nerve (dorsal cutaneous branch) and the ulnar nerve, not the median nerve, so this is not an expected median-nerve carpal tunnel finding (not taken from the course material). Impaired sensation over the thenar eminence (d) is wrong because the thenar eminence skin itself is supplied by the palmar cutaneous branch of the median nerve, which arises PROXIMAL to the carpal tunnel and is characteristically SPARED in carpal tunnel syndrome, which is why sensation over the thenar eminence is classically preserved even though thumb/index finger sensation is lost (not taken from the course material).',
  objective:'Carpal tunnel syndrome (median nerve compression) spares thenar-eminence skin sensation (palmar cutaneous branch bypasses the tunnel) while producing thenar muscle wasting, including of the abductor pollicis brevis.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q26, p.2146 (answer p.2147)'
},

{ id:'npep-fe6-30', bank:'endpoint', module:'neuropsych', chapter:'nr-cns',
  stem:'What is the most common cause of meningitis?',
  options:['Bacterial.', 'Tuberculous.', 'Viral.', 'Fungal.'],
  answer:2,
  explanation:'The printed key is option c, viral. Viral meningitis is the most common overall cause of meningitis (more common than bacterial), even though bacterial meningitis is typically more severe and carries higher morbidity/mortality (not taken from the course material).\n\nBacterial (a) is a common and clinically important cause, but printed here as less common overall than viral (not taken from the course material). Tuberculous (b) meningitis is a less common, typically subacute/chronic cause (not taken from the course material). Fungal (d) meningitis is uncommon overall and mainly seen in immunocompromised patients (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Viral meningitis is the most common overall cause of meningitis, though bacterial meningitis is more severe.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q30, p.2155 (answer p.2156)'
},

{ id:'npep-fe6-35', bank:'endpoint', module:'neuropsych', chapter:'ps-ocd',
  stem:'What class of drugs could produce rapid improvement in symptoms of body dysmorphic disorder?',
  options:['Anxiolytics', 'Selective serotonin reuptake inhibitors', 'Mood stabilizer', 'Benzodiazepines'],
  answer:1,
  explanation:'The printed key is option b. Body dysmorphic disorder is classified among the obsessive-compulsive-related disorders, and SSRIs are the first-line, evidence-based pharmacological treatment for it, often used at higher doses than for depression (not taken from the course material).\n\nAnxiolytics (a) and benzodiazepines (d) can reduce associated anxiety symptomatically but do not target the core obsessive preoccupation with perceived appearance defects the way SSRIs do (not taken from the course material). Mood stabilizers (c) are not a standard or evidence-based treatment for body dysmorphic disorder (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'SSRIs are the first-line pharmacological treatment for body dysmorphic disorder, an OCD-related disorder.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q35, p.2165 (answer p.2166)'
},

{ id:'npep-fe6-38', bank:'endpoint', module:'neuropsych', chapter:'nr-nerve',
  stem:'Which nerve could be compressed by the pronator teres muscle?',
  options:['Median.', 'Radial', 'Musculocutaneous', 'Ulnar'],
  answer:0,
  explanation:'The printed key is option a. The median nerve passes between the two heads (humeral and ulnar) of the pronator teres muscle in the proximal forearm, and it can become compressed there, producing pronator teres syndrome, a recognised median nerve entrapment at the elbow/proximal forearm (not taken from the course material).\n\nThe radial nerve (b) runs in the posterior compartment/radial groove and around the lateral elbow, not through pronator teres (not taken from the course material). The musculocutaneous nerve (c) runs through coracobrachialis in the arm and does not pass through pronator teres (not taken from the course material). The ulnar nerve (d) passes posterior to the medial epicondyle (cubital tunnel) and through flexor carpi ulnaris, not through pronator teres (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'The median nerve passes between the two heads of pronator teres and can be entrapped there (pronator teres syndrome).',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q38, p.2171 (answer p.2172)'
},

{ id:'npep-fe6-41', bank:'endpoint', module:'neuropsych', chapter:'nr-delirium',
  stem:'What is the diagnostic symptom of normal pressure hydrocephalous?',
  options:['Macrocephaly', 'Flat anterior fontanel', 'Memory loss', 'Diplopia.'],
  answer:2,
  explanation:'The printed key is option c. Cognitive decline/memory loss is a component of the classic normal pressure hydrocephalus triad (gait disturbance, urinary incontinence, and cognitive impairment) among the options given (not taken from the course material).\n\nMacrocephaly (a) and a flat/open versus closed anterior fontanel (b) are relevant to INFANT hydrocephalus (with open cranial sutures), not to adult-onset normal pressure hydrocephalus, where the sutures are already fused (not taken from the course material). Diplopia (d) is not a recognised part of the classic normal pressure hydrocephalus triad (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'Cognitive decline (memory loss) is part of the classic normal pressure hydrocephalus triad, unlike macrocephaly or fontanel findings, which apply to infant hydrocephalus.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q41, p.2177 (answer p.2178)'
},

{ id:'npep-fe6-45', bank:'endpoint', module:'neuropsych', chapter:'nr-cranial',
  stem:'A 61-year-old woman with a history of diabetes, presents to ER with double vision as she woke up this morning. On examination, she has a complete left oculomotor nerve palsy with intact pupillary function. What is the most likely cause of her findings?',
  options:['Brainstem infarction involving the midbrain.', 'Diabetic oculomotor nerve palsy.', 'Aneurysmal compression of the oculomotor nerve.', 'Myasthenia gravis.'],
  answer:1,
  explanation:'The printed key is option b. A complete, isolated oculomotor (3rd) nerve palsy with PUPIL SPARING (intact pupillary function) in a diabetic patient is the classic presentation of diabetic (microvascular/ischaemic) oculomotor nerve palsy. This occurs because diabetic microvascular ischaemia damages the central fascicular motor fibres of the nerve while relatively sparing the parasympathetic pupillary fibres, which run peripherally in the nerve and are supplied by a separate superficial blood supply, and are therefore less vulnerable to an ischaemic (as opposed to compressive) insult (not taken from the course material).\n\nBrainstem infarction involving the midbrain (a) is wrong because a midbrain lesion causing 3rd nerve palsy would typically also produce additional brainstem signs (such as a contralateral hemiparesis or ataxia, as in Weber’s or Claude’s syndrome), which are not described here — this is an isolated peripheral 3rd nerve palsy (not taken from the course material). Aneurysmal compression of the oculomotor nerve (c) is wrong because compressive lesions such as a posterior communicating artery aneurysm classically affect the peripherally-located pupillary fibres FIRST, producing a pupil-INVOLVING (dilated, poorly reactive) 3rd nerve palsy — the opposite of the pupil-sparing pattern described here (not taken from the course material). Myasthenia gravis (d) is wrong because it is a neuromuscular junction disorder that never affects the pupil (smooth muscle, not supplied via the neuromuscular junction affected in MG) and typically causes fluctuating, fatigable ptosis/diplopia rather than a fixed, acute-onset complete palsy as described (not taken from the course material).\n\nWritten for this bank — the endpoint file prints no explanation here.',
  objective:'A pupil-sparing complete oculomotor nerve palsy in a diabetic patient reflects microvascular ischaemia of the central fascicular fibres, in contrast to the pupil-involving pattern of a compressive (e.g. aneurysmal) 3rd nerve palsy.',
  source:'Neuro endpoint.pdf, Model Final Exam 6, Q45, p.2185 (answer p.2186)'
},
