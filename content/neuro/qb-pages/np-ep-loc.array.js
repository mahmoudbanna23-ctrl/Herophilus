/*
 * "Neuro endpoint.pdf" — Chapter 1 "Localization"
 * Questions + answers: PDF/printed pages 16-51 (book page = PDF page, no offset — confirmed on
 * every sampled page in this range).
 * Format: one question per page, its answer on the immediately following page — EXCEPT Q5, which
 * has two extra supplementary reference-table pages (pp.25-26, Aphasia/Dysarthria/Dysphonia table
 * and Bulbar/Pseudobulbar palsy table) inserted between its question (p.24) and its answer (p.27).
 * Those two pages carry no question of their own and are not staged as separate items.
 * Net count: 17 questions (Q1-Q17), not 18 — the brief's provisional 18 assumed 2 pages/question
 * throughout; Q5's two extra pages absorb what would have been an 18th question's page budget.
 * p.52 rendered to confirm the boundary: it is the "Stroke" chapter title slide, no question on it —
 * confirms Q17 (p.50-51) is the last Localization item.
 * All 17 transcribed via Gemini 3.6-flash (gemini-3.6-flash), verbatim prompt, 5 batches of
 * rendered PNGs (pp.16-23, 24-31, 32-39, 40-47, 48-52).
 */

var NP_EP_LOC_STAGED = [

{ n:1, qp:16, ap:17,
  stem:'Diplopia with inward deviation of the left eye indicates a lesion of:',
  opts:['Left abducent palsy', 'Left oculomotor palsy', 'Right abducent palsy', 'Right facial palsy'],
  key:'a', keyName:'Left abducent palsy',
  box:null },

{ n:2, qp:18, ap:19,
  stem:'A patient presents with left hemiplegia and right lower motor facial palsy. What is the most likely site of lesion?',
  opts:['Cerebral cortex', 'Internal capsule', 'Brain stem', 'Cervical cord'],
  key:'c', keyName:'Brain stem',
  box:null },

{ n:3, qp:20, ap:21,
  stem:'Nasal tone of voice is commonly found in patients with affection of the:',
  opts:['Trigeminal nerve', 'Facial nerve', 'Vagus nerve', 'Hypoglossal nerve'],
  key:'c', keyName:'Vagus nerve',
  box:null },

{ n:4, qp:22, ap:23,
  stem:'What is the most common site of lesion in patient presenting with right LMN lesion facial palsy and left sided hemiplegia?',
  opts:['cortex', 'internal capsule', 'midbrain', 'Pons'],
  key:'d', keyName:'Pons',
  box:null },

{ n:5, qp:24, ap:27,
  note:'Two supplementary reference-table pages between Q and A: p.25 (Aphasia/Dysarthria/Dysphonia comparison table), p.26 (Bulbar vs Pseudobulbar palsy comparison table). Neither prints a question of its own.',
  stem:'Which brain lesion can cause speech disturbance?',
  opts:['bilateral upper motor neuron lesions above the Pons', 'unilateral cortical lesion on the dominant hemisphere', 'bilateral subcortical lesion', 'unilateral upper motor neuron lesions above the Pons'],
  key:'b', keyName:'unilateral cortical lesion on the dominant hemisphere',
  box:'Speech is primarily controlled by Broca’s and Wernicke’s areas, located in the dominant (usually left) cerebral hemisphere. A lesion here can lead to aphasia and speech disturbances.' },

{ n:6, qp:28, ap:29,
  stem:'A pure motor stroke is most like in.......',
  opts:['Internal capsule', 'Cerebellum', 'Caudate', 'Putamen'],
  key:'a', keyName:'Internal capsule',
  box:'The internal capsule is a key pathway for motor fibers, including the corticospinal tract. Damage to the internal capsule can result in pure motor strokes, characterized by weakness or paralysis of specific muscles or muscle groups on the opposite side of the body.' },

{ n:7, qp:30, ap:31,
  stem:'Which cranial nerve disturbance is responsible for vertigo?',
  opts:['facial', 'optic', 'Vestibulocochlear', 'trigeminal'],
  key:'c', keyName:'Vestibulocochlear',
  box:'The vestibulocochlear nerve (cranial nerve VIII) controls balance and hearing. Damage or dysfunction in its vestibular component can cause vertigo, characterized by dizziness and a spinning sensation.' },

{ n:8, qp:32, ap:33,
  stem:'A 65-year-old female patient presents with acute onset of paraparesis and bilateral facial weakness. Deep abdominal reflexes were all diminished, while other reflexes were preserved, and plantar reflexes were flexor. No sensory level was detected on the trunk. Where is the probable location of the inducing lesion?',
  opts:['Brainstem', 'Spinal cord', 'Peripheral nerves', 'Cerebral cortex'],
  key:'c', keyName:'Peripheral nerves',
  box:'NB: Planter reflexes were flexors = ( Planter reflexes are negative) , so we exclude any upper motor neuron lesions, so the correct answer is peripheral nerves ( lower motor neuron)' },

{ n:9, qp:34, ap:35,
  stem:'A 49-year-old patient presents with acute onset of left hemiplegia and right-side facial weakness, involving the upper and lower facial movements. What is the most likely site of brain infarction in this patient?',
  opts:['Right pontine', 'Right midbrain', 'Left midbrain', 'Left pontine'],
  key:'a', keyName:'Right pontine',
  box:null },

{ n:10, qp:36, ap:37,
  stem:'Crossed hemiplegia with abducent nerve palsy suggests a lesion in which area?',
  opts:['Brainstem tumor', 'Cerebral cortex', 'Internal capsule', 'Basal ganglia'],
  key:'A', keyName:'Brainstem tumor',
  box:'Crossed hemiplegia with cranial nerve palsy (e.g., abducent nerve) suggests a lesion in the brainstem, where cranial nerve nuclei and motor tracts are close together.' },

{ n:11, qp:38, ap:39,
  note:'Key looks odd at first read: a cerebellar lesion alone causes IPSILATERAL ataxia, not contralateral limb weakness, so the "cerebellar tumor" in the stem cannot itself be the source of the described right-sided weakness. Transcribed and keyed as printed — see explanation in the draft file for the reading that makes the key consistent.',
  stem:'A patient has weakness in the right upper and lower limbs and a cerebellar tumor. Where is the lesion most likely located?',
  opts:['Left cerebellar hemisphere', 'Right cerebellar hemisphere', 'Left motor cortex', 'Right basal ganglia'],
  key:'C', keyName:'Left motor cortex',
  box:null },

{ n:12, qp:40, ap:41,
  stem:'A patient presents with hemiplegia, hemisensory loss, and upper motor neuron-type facial weakness. What is the most likely site of the lesion?',
  opts:['Midbrain', 'Brainstem', 'Internal capsule', 'Cerebral cortex'],
  key:'C', keyName:'Internal capsule',
  box:'The internal capsule is a common site for lacunar strokes causing contralateral hemiplegia, hemisensory loss, and UMN facial weakness. It carries tightly packed motor and sensory fibers.' },

{ n:13, qp:42, ap:43,
  note:'CONTRADICTION vs live house-bank npqb-nr-92, which prints this same stem near-verbatim ("left-sided hemiplegia and loss of superficial sensation on the right side... most likely site") with the same four options, but keys "Cervical cord" — this book keys "Brainstem". Both transcribed and keyed exactly as printed in their own source, per the never-dispute-a-key rule; see the draft file explanation for the note.',
  stem:'A patient has left-sided hemiplegia and loss of superficial sensation on the right side of the body. What is the most likely location of the lesion?',
  opts:['Cerebral cortex', 'Internal capsule', 'Brainstem', 'Cervical spinal cord'],
  key:'C', keyName:'Brainstem',
  box:null },

{ n:14, qp:44, ap:45,
  stem:'A patient presents with lower motor neuron facial palsy and ipsilateral cerebellar signs. Where is the lesion most likely located?',
  opts:['Pons', 'Medulla', 'Midbrain', 'Cortex'],
  key:'A', keyName:'Pons',
  box:'The pons houses the facial nerve nucleus and is adjacent to cerebellar pathways. A lesion here can cause LMN facial palsy and ipsilateral cerebellar signs like ataxia.' },

{ n:15, qp:46, ap:47,
  stem:'Bilateral facial weakness with paraplegia, decreased deep tendon reflexes, but normal abdominal and plantar reflexes suggests a lesion in the:',
  opts:['Cerebral cortex', 'Spinal cord', 'Peripheral nerves', 'Neuromuscular junction'],
  key:'C', keyName:'Peripheral nerves',
  box:'This pattern suggests a peripheral neuropathy such as Guillain-Barré syndrome. The preservation of abdominal and plantar reflexes rules out central causes.' },

{ n:16, qp:48, ap:49,
  stem:'Aphasia is most likely to occur when the lesion affects which of the following areas?',
  opts:['Internal capsule', 'Right cortical hemisphere', 'Left cortical hemisphere', 'Brainstem'],
  key:'C', keyName:'Left cortical hemisphere',
  box:'Language centers, including Broca’s and Wernicke’s areas, are located in the dominant (usually left) hemisphere; damage here leads to aphasia.' },

{ n:17, qp:50, ap:51,
  stem:'A right occipital cortex lesion typically causes which of the following?',
  opts:['Right visual field loss', 'Left visual field loss', 'Total blindness', 'Diplopia'],
  key:'B', keyName:'Left visual field loss',
  box:'A right occipital cortex lesion results in a contralateral (left) homonymous hemianopia due to disruption of the visual processing pathways.' }

];
