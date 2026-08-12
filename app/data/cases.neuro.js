/* Neuropsychiatry free-text cases — vignette + diagnosis, no options.
   Used where a bank prints a case with a written answer rather than an MCQ;
   forcing those into the MCQ schema would mean inventing distractors, which is
   authoring. Schema and grading rules: CLAUDE.md §4 "Free-text cases".
   Concatenated into QUESTIONS by data/questions.js, so the quiz engine, SRS,
   search and progress counters pick them up with no special casing.

   `var`, not `const`: the aggregator reads this off `window`, so an empty or
   missing file degrades to an empty list instead of throwing a ReferenceError. */
var C_NEURO = [

/* ---------------------------------------------------------------------------
   GRADE GAIN - Neurology topic 02 "Localization", the MULTI-ANSWER questions.

   Q24, Q27 and Q28 ask "which TWO of the following" and the bank keys two
   letters - "A + B", "B + C", "D + E". The MCQ schema holds ONE 0-based
   `answer` index, so keying either one would mark a learner WRONG for picking
   the other correct option. That breaks the standing rule that nothing may be
   left wrong, so they are held here instead.

   NOTHING IS INVENTED AND NOTHING IS LOST: the bank's own option list is kept
   verbatim inside the `stem`, the learner types the two structures, and each
   correct option gets its own key so the score is got/total.
   Decision recorded in progress\resume-neuro.md 4.
   --------------------------------------------------------------------------- */

{
  id: "npqb-nr-24",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  type: "case",
  stem: "**Which two of the following cortices are located in the same lobe?**\n\n- a. Prefrontal Cortex\n- b. Motor Cortex\n- c. Somatosensory Cortex\n- d. Visual Cortex\n\n*Name both.*",
  answer: "A + B. Motor and Prefrontal Cortex.",
  keys: [
    { label: "Motor cortex", terms: ["motor", "precentral", "primary motor", "m1"] },
    { label: "Prefrontal cortex", terms: ["prefrontal", "pre frontal", "pre-frontal"] }
  ],
  explanation: "**Both the motor and the prefrontal cortex sit in the FRONTAL lobe. The other two options are in different lobes entirely.**\n\n**The bank's printed explanation, verbatim:**\n\n> Both the motor and prefrontal cortices are located in the frontal lobe. Conversely, the somatosensory one is located in the parietal lobe, and the visual one is located in the occipital lobe.\n\n*Expanded here:*\n\n**The four cortices by lobe, and what each one does**\n\n| Cortex | Lobe | Landmark | Function | Lesion produces |\n|---|---|---|---|---|\n| **Prefrontal** | **frontal** | in front of the motor areas | executive function, planning, judgement, social behaviour | disinhibition, apathy, poor planning, personality change |\n| **Motor** | **frontal** | **precentral** gyrus, in front of the central sulcus | voluntary movement — origin of the corticospinal tract | contralateral paralysis |\n| **Somatosensory** | **parietal** | **postcentral** gyrus, behind the central sulcus | touch, proprioception, discrimination | contralateral sensory loss, astereognosis |\n| **Visual** | **occipital** | around the calcarine sulcus | vision | contralateral homonymous hemianopia |\n\n**The central sulcus is the divider that makes this question answerable.** Everything in front of it on the lateral surface is frontal lobe — the motor strip, the premotor and supplementary motor areas, then the prefrontal cortex. Everything immediately behind it is parietal. So motor and prefrontal are neighbours in one lobe, while motor and somatosensory are neighbours **across a lobar boundary** — which is exactly the confusion the question is built on.\n\n**Why the adjacency matters clinically.** Because the motor and sensory strips face each other across a single sulcus, one middle cerebral artery stroke commonly produces weakness *and* sensory loss in the same limb. And because the prefrontal cortex lies just in front of the motor strip, a frontal tumour can produce personality change long before any weakness appears — the reason a frontal lobe lesion is so often missed.\n\n`L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY` supports the motor half directly: the corticospinal tract consists of “upper motor neurons in the **Primary Motor Cortex** and lower motor neurons in the anterior horn of the spinal cord”, and `L12) hemi,parap&ataxia` notes that cortical lesions produce weakness “associated with signs of cortical dysfunction (aphasia, seizures)”.\n\n**Bottom line:** frontal lobe holds prefrontal *and* motor. The central sulcus is the boundary — cross it and you are in the parietal lobe.",
  objective: "The prefrontal and motor cortices share the frontal lobe; somatosensory is parietal and visual is occipital.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.4 (answer p.5) — printed as a multi-answer MCQ keyed A + B"
},

{
  id: "npqb-nr-27",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-intro",
  type: "case",
  stem: "**Which two of the following brain structures are associated directly or indirectly with emotional processing?**\n\n- a. Somatosensory Cortex\n- b. Hypothalamus\n- c. Amygdala\n- d. Thalamus\n\n*Name both.*",
  answer: "B + C. Amygdala and hypothalamus.",
  keys: [
    { label: "Amygdala", terms: ["amygdala", "amygdal", "amygdaloid"] },
    { label: "Hypothalamus", terms: ["hypothalamus", "hypothalamic", "hypo thalamus"] }
  ],
  explanation: "**The amygdala and the hypothalamus are both limbic structures. The amygdala assigns emotional meaning; the hypothalamus produces the bodily expression of it.**\n\n**The bank's printed explanation, verbatim:**\n\n> The amygdala controls emotions related to fear, and the anterior nucleus of the hypothalamus is part of the limbic system, which is responsible for several emotions.\n\n*Expanded here:*\n\n**The division of labour between the two** is what makes them a pair rather than duplicates:\n\n| | **Amygdala** | **Hypothalamus** |\n|---|---|---|\n| **Role** | **appraisal** — decides that something is threatening or significant | **execution** — turns that appraisal into a bodily state |\n| **Handles** | fear and threat detection, emotional memory, reading facial expression | autonomic output, endocrine output via the pituitary, temperature, hunger, thirst, circadian rhythm |\n| **Output** | to the hypothalamus, brainstem and prefrontal cortex | to the autonomic nervous system and the pituitary |\n| **In a fear response** | recognises the threat | raises the heart rate, sweating, pupil size, cortisol |\n\nSo the amygdala's connection is **direct** and the hypothalamus's is **indirect** — which is why the stem says *“directly or indirectly”*. That phrase is the clue that two structures of different kinds are wanted.\n\n**The wider limbic system** (*the limbic circuit is not set out in any cached neurology deck — general medical knowledge, not taken from the course material*): amygdala, hippocampus, hypothalamus, cingulate gyrus, fornix, mammillary bodies and the anterior thalamic nucleus, largely connected through the **Papez circuit**. Bilateral amygdala damage produces **Klüver-Bucy syndrome** — loss of fear, hyperorality, hypersexuality and visual agnosia.\n\n**Why the amygdala matters across this whole module.** It is the structure at the centre of the fear circuitry that psychiatry keeps returning to — the anxiety disorders, PTSD, and the physiology of panic. Its output to the hypothalamus is precisely what generates the palpitations, sweating and tremor a panic attack presents with, which is why those patients so often arrive believing they have a cardiac problem.\n\n**Why the other options are wrong**\n\n- **Somatosensory cortex** — postcentral gyrus, parietal lobe. It processes touch, proprioception and discrimination. It has no emotional role.\n- **Thalamus** — a **relay**, not a processor of emotion. Every sense but smell passes through it on the way to the cortex, as question 26 of this topic sets out. Note the trap: the *anterior* thalamic nucleus **is** part of the Papez circuit, so the thalamus is not wholly unconnected — but the option names the thalamus as a whole, and its defining function is relay. Note also that the neighbouring **hypo**thalamus is the correct answer, which is what the option is trading on.\n\n**Bottom line:** amygdala assigns the emotion, hypothalamus produces the physiology of it. The thalamus in this list is a relay and a deliberate near-miss for the hypothalamus.",
  objective: "The amygdala (threat appraisal) and hypothalamus (autonomic and endocrine output) are the limbic structures behind emotional processing.",
  source: "neuropsychiatry & neurosurgery qb.pdf p.4 (answer p.5) — printed as a multi-answer MCQ keyed B + C"
},

{
  id: "npqb-nr-28",
  bank: "gradegain",
  module: "neuropsych",
  chapter: "nr-movement",
  type: "case",
  stem: "**A lesion in which two of the following structures can cause a hyperkinetic disorder?**\n\n- a. Thalamus\n- b. Hypothalamus\n- c. Epithalamus\n- d. Subthalamus\n- e. Basal Ganglia\n\n*Name both.*",
  answer: "D + E. Basal ganglia and subthalamus.",
  keys: [
    { label: "Subthalamus / subthalamic nucleus", terms: ["subthalamus", "subthalamic", "sub thalamus", "sub-thalamic", "luys"] },
    { label: "Basal ganglia", terms: ["basal ganglia", "basal ganglion", "striatum", "caudate", "putamen"] }
  ],
  explanation: "**A subthalamic lesion causes hemiballismus and a basal ganglia lesion causes chorea — both hyperkinetic, meaning too much involuntary movement.**\n\n**The bank's printed explanation, verbatim** (its own spelling kept):\n\n> A lesion in the subthalamus causes contralateral hemiballismus, which is a hyperkinetic disorder. A lesion in the basal ganglia causes Huntington's disease, which is characterized by hypotonia and hyperkintetic disorder in the form of chorea.\n\n**⚠️ One error in that box, noted rather than corrected.** It says a basal ganglia lesion **“causes Huntington's disease”**. The causation runs the other way: Huntington's is an **autosomal dominant genetic** disease that *damages* the basal ganglia. `L3) MOVEMENT DISORDERS` is clear — “It is an autosomal dominant hereditary disorder… Pathogenesis: Macroscopic atrophy of the **caudate nucleus, putamen**, and cerebral corte[x]”. The rest of the box is sound: `L3` confirms the onset is “with choreic movements and **hypotonia**”.\n\n**What hyperkinetic means.** `L3` defines the split that this question rests on:\n\n> “1) **Hyperkinetic** movement disorders (also called dyskinesias) refers to excessive, often repetitive, involuntary movements that intrude into the normal flow of motor activity. This category includes **chorea, dystonia, myoclonus, stereotypies, tics, and tremor**.”\n>\n> “2) **Hypokinetic** movement disorders refers to akinesia… hypokinesia… bradykinesia (slow movement), and rigidity. **Parkinsonism is the primary hypokinetic movement disorder.**”\n\n**The two answers in detail**\n\n| | **Subthalamic nucleus** | **Basal ganglia (striatum)** |\n|---|---|---|\n| **Disorder** | **hemiballismus** | **chorea** |\n| `L3`'s description | “a violent hemichorea, with movements that primarily affect the **proximal** joints” | “abrupt, jerky, and quite irregular (in terms of form, location, and time interval)” |\n| **Onset** | “begins suddenly in middle and old age following a **vascular injury**” | insidious in Huntington's; acute in Sydenham's |\n| **Side** | **contralateral** to the lesion | generalised |\n| **Treatment** | `L3`: treat the vascular cause, plus haloperidol or phenothiazine | haloperidol, tetrabenazine |\n\n`L3` places the subthalamic nuclei inside the basal ganglia system — “In the diencephalon: The **subthalamic nuclei**” — so the two answers are related rather than separate systems. *(That a subthalamic lesion specifically produces hemiballismus is standard teaching but is not stated on the slide, which attributes hemiballismus to “a vascular injury” without naming the site — not taken from the course material.)*\n\n**Causes of chorea**, from `L3`: hereditary (Huntington's); acquired — **Sydenham's** (rheumatic, “the most common cause of acquired chorea in young people”, ages 5–15, female 2:1, following group A streptococcus), drug-induced (levodopa, lithium), Wilson's disease, post-kernicterus, post-anoxic, and vasculitis including SLE.\n\n**Why the other options are wrong**\n\n- **Thalamus** — a sensory relay. A lesion causes contralateral sensory loss and the **thalamic pain syndrome**, not involuntary movement.\n- **Hypothalamus** — autonomic and endocrine control, temperature, appetite, circadian rhythm. No motor role.\n- **Epithalamus** — mainly the **pineal gland** and habenula; melatonin and circadian rhythm. A pineal mass compresses the dorsal midbrain and causes **Parinaud's syndrome** (upgaze palsy), not dyskinesia.\n\n**Bottom line:** hyperkinetic disorders come from the basal ganglia circuit — striatum for chorea, subthalamic nucleus for hemiballismus. Parkinsonism, from the same circuit, is the hypokinetic counterpart.",
  objective: "Hyperkinetic movement disorders arise from the basal ganglia (chorea) and the subthalamic nucleus (contralateral hemiballismus).",
  source: "neuropsychiatry & neurosurgery qb.pdf p.4 (answer p.6) — printed as a multi-answer MCQ keyed D + E"
}

];
