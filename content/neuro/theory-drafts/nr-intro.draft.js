/* nr-intro — 'Introduction and localisation in neurology', Neuropsychiatry
   (Neurology). THE MODULE'S OPENER, AND ITS MOST QUESTION-DENSE CHAPTER.
   Written 2026-08-23 under START-HERE.md §14, §14.1, §14.2, §14.3,
   §14.3a, §14.5, plus content\neuro\theory-plan.md.

   SPLIT AFTER PRINTING, 2026-08-23. Written whole, PRINTED AT 14 pp - one
   over the hard shape - and cut at the seam between the anatomy and the
   bedside. This half keeps the id nr-intro and 7 of the 21 questions;
   nr-exam takes nx-1..nx-4 and the other 14. Nothing was reordered.

   ==========================================================================
   THE PAIR HOLDS 21 QUESTIONS - EVERY ONE STILL UNWRITTEN IN THE MODULE.
   This half holds 7 of them; nr-exam holds 14.
   All 21 checked against the sources BEFORE briefing, per the ophthalmology
   rule that a Decks column is an assignment and not coverage. ALL 21 ARE
   ANSWERABLE. The audit is in in-11.

   ==========================================================================
   SOURCES
     content\neuro\lectures\L1) INTRODUCTION AND LOCALISATION.txt
       - lines 1-180 only, 815 w, MINUS the 59-word UMN/LMN block (below).
         Deck share charged here: 756 w.
       - lines 181-end, 521 w, are HEMIPLEGIA IN FULL and are NOT written
         here. See the two declarations below.

     content\neuro\book\neuro-ch01-ch02a.txt        printed 1-14
     content\neuro\book\neuro-ch02b.txt             printed 15-27
     content\neuro\book\neuro-ch03-localization.txt printed 28-39
       - all three READ 2026-08-23 by subagents on the user's explicit
         authorisation, ~16,700 w over 39 pages. THE +11 NEUROLOGY OFFSET
         WAS RE-VERIFIED FOOTER BY FOOTER ON ALL 39 PAGES.

   ==========================================================================
   TWO THINGS THIS CHAPTER OWNS THE SOURCE OF AND DELIBERATELY DOES NOT WRITE

   1. THE UMN/LMN MANIFESTATIONS ARE L1'S AND ARE COUNTED TO nr-lmn's lm-1.
      lm-1 says so in its own body: 'the framework is NOT in L5 or L6. It is
      L1's, which is nr-intro's deck - so these lines are counted here and
      nr-intro must not count them again.' Honoured: 59 words removed from
      TERM 1, and in-11 POINTS at lm-1. Same shape as op-va / L1,2.

   2. L1'S BACK HALF IS HEMIPLEGIA IN FULL - clinical picture, the four
      localisation levels, Brown-Sequard, causes, tempo, progressive and
      transient lists. nr-hemi is ALREADY WRITTEN and covers all of it, but
      FROM L10 AND L12: its header states 'THE BOOK WAS NOT USED' and lists
      only those two decks. So L1's hemiplegia half was NEVER SPENT.
      CHECKED BEFORE DEFERRING, not assumed - hem-1..hem-6 carry cortical
      vs subcortical, brainstem, Brown-Sequard, the above-C5 rule,
      circumduction, Todd's and Sturge-Weber. NOTHING IS LOST BY POINTING.
      521 words excluded from TERM 1 on the §14.5 rule that the budget may
      understate a chapter, never overstate it.

   ==========================================================================
   BUDGET (§14.1)
     TERM 1: 756 deck words + the book pages actually used.
     TERM 2: 25 x 21 questions = 525.
     The BOOK is what makes this chapter possible and the CEILING is what
     governs it - 39 pages cannot be spent, only quarried. Scope is set
     BACKWARDS FROM THE 21 QUESTIONS, per §14.
   ==========================================================================
   MEASURED FROM DISK after the final edit - vdraft.js then print.sh:
     8 sections - 3,221 body words - PRINTED 10 pp. 322 w/pp. 7 questions.
   THE PAIR WAS WRITTEN WHOLE AT 5,128 w AND PRINTED 14 pp - ONE OVER THE
     HARD SHAPE - so it was cut. A 54-word trim was taken FIRST (in-11 held
     a consolidated second copy of the source-fault list) and recovered
     almost nothing, which is what settled it: there was no duplication left
     to cut, only facts. The ps-ocd shape exactly.
   AND THE SPLIT COST PAGES RATHER THAN SAVING THEM: 10 + 7 = 17 pp against
     the 14 of the unsplit chapter. Headers and section breaks are not free.
     That is expected and it is not a reason to compress instead.
*/
var THEORY_DRAFT = {
  "nr-intro": {
    "intro": "The module opens here. Two questions decide a neurological diagnosis — WHERE is the lesion, and WHAT is it — and this chapter answers the first by anatomy and the second by tempo. The pathways, and the levels they run through.",
    "sections": [
      {
        "id": "in-1",
        "w": "must",
        "h": "The two questions — and how tempo answers the second",
        "body": "### What localization is\n- **Neurological localization:** *the process of determining the site of a lesion within the nervous system based on the patient's symptoms and physical examination findings.* **It is the cornerstone of neurological diagnosis.**\n- **The book's version:** *our ability to figure out the exact site in the nervous system affected in each neurological disorder **according to specific neurological signs**.*\n\n### ⚠️ Diagnosis is a TWO-STEP approach, and the steps use different evidence\n|**Question**|**Answered by**|**Gives you**|\n|---|---|---|\n|**WHERE is the lesion?**|**the EXAMINATION** — the signs|**LOCALIZATION** — the anatomy, and the whole of `in-2` to `nr-exam` `nx-3`|\n|**WHAT is the lesion?**|**the HISTORY** — and the book says *in most cases even BEFORE carrying out the clinical examination*|**PATHOLOGY** — vascular, inflammatory, infectious, neoplastic, degenerative, metabolic|\n\n### ⚠️⚠️ THE TEMPO TABLE — the chapter's core teaching block\n*The book puts this at the end of the history, under the heading **What is the lesion → Pathology**. It first splits **PSYCHOGENIC** from **ORGANIC**, and organic into **CONGENITAL** (hereditary, error of development, intrauterine infection) and **ACQUIRED** — where **onset and course carry the diagnosis.***\n\n|**Onset and course**|**Pathology**|\n|---|---|\n|**SUDDEN** (seconds to minutes), **regressive**|**haemorrhagic · embolic · traumatic**|\n|**ACUTE** (minutes to hours), **regressive**|**thrombotic stroke · acute inflammation**|\n|**SUBACUTE** (days), **regressive**|**immune mediated · metabolic**|\n|**GRADUAL or CHRONIC** (weeks to months), **PROGRESSIVE**|**malignancy · neurodegenerative disease · chronic inflammation**|\n|**REMISSION and RELAPSE**|**demyelination · vasculitis**|\n|**STAIR-CASE curve**|**the cumulative effect of MULTIPLE MINOR VASCULAR EVENTS**, e.g. cerebral atherosclerosis|\n\n- **The deck's shorter version:** **vascular** acute or sudden · **epilepsy** and **migraine** over seconds to minutes · **demyelinating disease** over days · **space-occupying lesion** (tumour, abscess) over weeks. **Both are recorded; they agree in shape and differ in grain.**\n- **⚠️ Psychogenic needs TWO angles:** the **POSITIVE** angle — psychological stress — **and the NEGATIVE angle, no signs of organic disease.** *Hysterical hemiplegia is the book's example.*\n\n### ⚠️ The book opens with four cases and never solves them\n- **Ch.1 is a page and a half.** It poses **four vignettes, A to D, all presenting as RIGHT HEMIPARESIS**, and **comments only that the history distinguishes the four causes.** **No individual answer is printed anywhere.**\n- **⚠️ The tempo table above IS the answer** — it is the instrument ch.1 asks for, printed five pages later. *That reading is mine; the two blocks are the book's.*\n\nSrc: L1 sl. Neurological Localization, both slides · sl. Onset. Book: neuropsychiatry.pdf ch.3 printed p.28 (definition) · ch.1 printed p.1 (the four cases) · ch.2 printed p.6 (the whole tempo block, verbatim)",
        "qs": []
      },
      {
        "id": "in-2",
        "w": "must",
        "h": "The levels — the menu the answer is chosen from",
        "body": "### The three divisions\n|**Division**|**Contents**|\n|---|---|\n|**CENTRAL nervous system (CNS)**|**brain · spinal cord**|\n|**PERIPHERAL nervous system (PNS)**|**cranial nerves · spinal nerves · peripheral nerves**|\n|**AUTONOMIC nervous system (ANS)**|**sympathetic · parasympathetic**|\n\n### ⚠️ The nine anatomical levels — this list IS the localization answer sheet\n- **L1 prints them in order:** and **every later chapter of the module is one of them.**\n- **Cortex** → **subcortex** → **brainstem** → **cerebellum** → **spinal cord** → **nerve root** → **peripheral nerve** → **neuromuscular junction** → **muscle.**\n- **⚠️ Read the list as a descending chain.** A sign at any level is produced by that level or anything above it in the motor chain, and **the examination's job is to find the highest level that explains everything.**\n\n### The book's anatomical frame\n- **The brain divides into** *two cerebral hemispheres, two cerebellar hemispheres and a centrally located **brain stem (bulb)***, itself **midbrain · pons · medulla oblongata.**\n- **⚠️ The book's own wording is loose here** — it writes that *the **central** nervous system is divided into central and peripheral parts*, where the division belongs to the nervous system as a whole. **Recorded as printed, not corrected.**\n\n### Where each level is written in this module\n|**Level**|**Chapter**|\n|---|---|\n|cortex · subcortex|`nr-stroke` · `nr-hemi`, and `in-6` here|\n|brainstem|`nr-cranial` · `nr-hemi`|\n|cerebellum|`nr-hemi` `hem-14`/`hem-15` — the six ataxias|\n|spinal cord|`nr-backpain` · `nr-neckpain`, and `nr-exam` `nx-3` here|\n|nerve root · peripheral nerve|`nr-nerve`|\n|neuromuscular junction · muscle|`nr-lmn`|\n\nSrc: L1 sl. Nervus System · sl. Nervus system anatomy, both lists verbatim. Book ch.3 printed p.28, Basic anatomical background",
        "qs": []
      },
      {
        "id": "in-3",
        "w": "must",
        "h": "The pyramidal pathway — two neurons, and where they cross",
        "body": "### What the pyramidal system is\n- **Pyramidal tracts:** **DESCENDING MOTOR pathways** originating from the **upper motor neurons in the cerebral cortex**, responsible for **voluntary control of skeletal muscle**, including **fine motor movement of the limbs and face.**\n- **Two pathways:**\n\n|**Tract**|**Controls**|\n|---|---|\n|**CORTICOSPINAL**|voluntary movement of the **TRUNK and LIMBS**|\n|**CORTICOBULBAR (corticonuclear)**|voluntary movement of the **FACE, HEAD and NECK**, by **synapsing with CRANIAL NERVE MOTOR NUCLEI**|\n\n### A two-neuron system\n- **UPPER motor neuron:** cell body in the **PRIMARY MOTOR CORTEX**; its axon runs **all the way from the brain down to the spinal cord.**\n- **LOWER motor neuron:** cell body in the **ANTERIOR HORN** of the cord; its axon runs **from the cord to the skeletal muscle** of the arm or leg.\n- **Both axons are extremely long** — the deck says so twice, and it is why a single lesion anywhere along either produces a syndrome recognisable at the bedside.\n\n### ⚠️⚠️ THE DECUSSATION — 80 / 10 / 10, and this split is the deck's alone\n|**Fibres**|**Where they cross**|**Tract they travel in**|\n|---|---|---|\n|**about 80 %**|**cross to the contralateral side in the MEDULLA OBLONGATA — the PYRAMIDAL DECUSSATION**|**LATERAL corticospinal tract**|\n|**10 %**|**do NOT cross** — enter on the **SAME side**|**LATERAL corticospinal tract**|\n|**the remaining 10 %**|**cross AT THE LEVEL THEY EXIT the spinal cord**|**ANTERIOR corticospinal tract**|\n\n- **The book agrees on the site:** and is coarser on the arithmetic — printed p.33 has the tract **decussating at the lower medulla**, and printed p.34's figure labels **`Decussation of pyramids`**, **`Lateral corticospinal tract`** and **`Anterior corticospinal tract`**. ⚠️ **The anterior corticospinal tract is named ONLY in that figure — never in the book's running text.**\n\n### The internal capsule, and why a small lesion there is so costly\n- **What it is:** an area of **WHITE MATTER separating the CAUDATE NUCLEUS and THALAMUS from the LENTIFORM NUCLEUS**, containing **both ascending and descending axons**, running **between the cerebral cortex and the pyramids of the medulla.**\n- **⚠️ Why it matters clinically —** the book's own rule: **a very small lesion in the internal capsule may cause an EXTENSIVE area of weakness, because THE FIBRES ARE DENSELY ARRANGED**, while the same lesion in **cortex or corona radiata causes LESS extensive damage, because the fibres are widely distributed.** *(The book prints `corona radiate` in one place and `corona radiata` in another; both as printed.)*\n- *The capsular hemiplegia itself is written in `nr-hemi` `hem-3`. It is not repeated here.*\n\nSrc: L1 sl. Pyramidal tracts ×4 (the 80/10/10 split verbatim) · sl. internal capsule. Book ch.3 printed p.33 text · p.34 figure labels · p.38 (the density rule)",
        "qs": []
      },
      {
        "id": "in-4",
        "w": "should",
        "h": "Extrapyramidal, basal ganglia, cerebellum — the modulators",
        "body": "### The extrapyramidal system\n- **What it is:** a **neural network in the brain, part of the motor system, involved in the COORDINATION of movement.**\n- **⚠️ DIRECT against INDIRECT control:** the **pyramidal** pathways **may DIRECTLY innervate** motor neurons of the cord or brainstem — anterior horn cells, certain cranial nerve nuclei — whereas the extrapyramidal system **centres on the MODULATION and REGULATION (indirect control) of anterior horn cells.**\n- **Where the tracts run:** **chiefly in the RETICULAR FORMATION of the PONS and MEDULLA**, targeting cord neurons involved in **reflexes, locomotion, complex movements and POSTURAL CONTROL.**\n- **What modulates them:** the **nigrostriatal pathway · basal ganglia · cerebellum · vestibular nuclei · different sensory areas of the cortex.**\n\n### The basal ganglia, as the book itemises them\n- **⚠️ Corpus striatum — a FIGURE only:** printed p.30, and the book's running text never itemises it. **`CORPUS STRIATUM` = body of CAUDATE NUCLEUS + LENTIFORM NUCLEUS**, and **lentiform = PUTAMEN + GLOBUS PALLIDUS.**\n- **Diencephalon:** **thalamus · hypothalamus · subthalamus · epithalamus** — and **the subthalamus is considered WITH THE BASAL GANGLIA.**\n- *The movement disorders themselves are `nr-movement`. This section gives the wiring only.*\n\n### The cerebellum\n- **What it does:** *plays an important role in **motor control***; also **some cognitive functions such as attention and language**, and **probably some emotional functions** — regulating **fear and pleasure** responses.\n- **⚠️ It does NOT INITIATE movement.** It contributes **coordination, precision and ACCURATE TIMING**, receiving input from sensory systems and from other parts of the brain and cord and **integrating them to FINE-TUNE motor activity.**\n- **⚠️⚠️ And the consequence — which is the examinable half:** because its function is fine-tuning, **damage does NOT cause PARALYSIS** — it produces **disorders of FINE MOVEMENT, EQUILIBRIUM, POSTURE and MOTOR LEARNING.**\n- *The six ataxias and the three-column ataxia table are `nr-hemi` `hem-14`/`hem-15`. Not repeated.*\n\nSrc: L1 sl. Extrapyramidal system ×2 · sl. The cerebellum ×2, all in full. Book ch.3 printed p.30 (basal ganglia figure, the only itemisation) · p.30 The Diencephalon",
        "qs": []
      },
      {
        "id": "in-5",
        "w": "must",
        "h": "The sensory pathways, and the one sense that skips the thalamus",
        "body": "### The two ascending systems\n|**System**|**Carries**|**Crossed?**|\n|---|---|---|\n|**DORSAL (POSTERIOR) COLUMNS**|**LIGHT TOUCH · DEEP PRESSURE · PROPRIOCEPTION** — from muscle spindles and other sensory receptors|**UNCROSSED** in the cord — the deck's own word|\n|**SPINOTHALAMIC tracts**|**PAIN and TEMPERATURE**, from the **free nerve endings in skin** — **lateral** spinothalamic and **anterior** spinothalamic|**CROSSED**|\n\n- **⚠️ The deck answers it only halfway:** `npqb-nr-5` wants names the deck does not print. It calls the **dorsal columns** the deep-sensation tracts and stops. **GRACILE and CUNEATE are the BOOK's, printed p.36**, where the figure labels read **`Fasciculus gracilis`**, **`Fasciculus cuneatus`**, **`Nucleus gracilis`**, **`Nucleus cuneatus`**.\n- **⚠️⚠️ AND THEY ARE FIGURE LABELS ONLY.** Neither fasciculus is named in any running text in the whole book; the examination sheet says only *posterior column affection*. **The fact is real, sourced and citable — it just never appears in a sentence.**\n\n### ⚠️⚠️ A CONTRADICTION INSIDE THE BOOK, RECORDED AND NOT CORRECTED\n|**Source**|**Where the dorsal column decussates**|\n|---|---|\n|**printed p.35, the text**|*the **UPPER PART OF THE PONS***|\n|**printed p.36, the figure**|**in the MEDULLA**, at the **gracile and cuneate NUCLEI**|\n\n- **Both recorded, NEITHER corrected.** *The second is the conventional account, but this chapter states the disagreement rather than picking a winner.*\n\n### The thalamus — the relay, and its exception\n- **What it does:** *processes **ALL sensory input (EXCEPT OLFACTORY)** coming from the **CONTRALATERAL** side of the body to the cortex.* **Both systems relay there** — posterior column/**medial lemniscus** for **position and vibration**, spinothalamic for **pain and temperature.**\n- **⚠️ The lesion that makes it matter:** a lesion of this part of the thalamus **can cause LOSS OF ALL SENSATION ON ONE SIDE OF THE BODY.** *The book also gives it some influence on motor function, via basal ganglia and cerebellum input, and on cognition.*\n- **⚠️ OLFACTION SKIPS THE THALAMUS —** it is the one modality that does not relay there. The book states the exception and **never explains it.** *(Smell reaches cortex directly from the olfactory bulb; **that explanation is not taken from the course material**.)*\n\n### Where it lands\n- **The SOMATOSENSORY cortex** is the destination of the dorsal column — **postcentral gyrus, areas 3, 1, 2**, in `in-6`.\n\nSrc: L1 sl. Spinal tracts, both entries verbatim. Book ch.3 printed p.31 The Thalamus (verbatim, incl. the exception) · p.35 text and p.36 figure (the decussation pair, both as printed) · p.36 figure labels for the fasciculi",
        "qs": [
          "npqb-nr-5",
          "npqb-nr-25",
          "npqb-nr-26"
        ]
      },
      {
        "id": "in-6",
        "w": "must",
        "h": "Cortical localization, and the aphasias",
        "body": "### The four lobes, with the areas the book numbers\n|**Lobe**|**What it carries**|\n|---|---|\n|**FRONTAL**|**PREFRONTAL cortex** — anterior to the motor and pre-motor areas, subserving **EXECUTIVE FUNCTIONS**; damage gives **difficulty using information not immediately at hand to direct behaviour**, hence **POOR PLANNING AND JUDGEMENT.** · **MOTOR cortex** — **precentral gyrus, AREA 4**|\n|**PARIETAL**|the **sensory** cortex — **areas 3, 1, 2**|\n|**OCCIPITAL**|the **visual** cortex — **area 17**|\n|**TEMPORAL**|the **superior temporal gyrus** — auditory|\n|**⚠️ and a fifth**|the book adds **LIMBIC cortex** to a list it has just called **four lobes**|\n\n### ⚠️ The motor cortex, and the inversion that makes the homunculus examinable\n- **It holds the PYRAMIDAL CELLS:** they are **the FIRST PART of the motor descending tract** (corticospinal or pyramidal).\n- **The body map is INVERTED:** each motor cortex supplies the **CONTRALATERAL** side — **the HEAD area caudally and the LOWER LIMB area cranially.**\n- **⚠️ The homunculus figure, p.28:** the only place the cortical body map is given in detail — **and the only place in the whole chapter the ARTERIAL TERRITORIES appear at all** (anterior, middle and posterior cerebral artery, as a three-swatch key). **Figure-only, and flagged as such.**\n\n### Speech — the two levels the book examines\n|**Term**|**What is disturbed**|\n|---|---|\n|**DYSPHASIA / APHASIA**|**SPEECH** — named by severity|\n|**DYSARTHRIA / ANARTHRIA**|**ARTICULATION** — *faulty articulation of speech sounds*, and nothing more|\n\n### The six types of aphasia, as printed\n- **EXPRESSIVE aphasia** = **motor** = **Broca's aphasia.** *(The book prints `Boca's aphasia` — a typo, and the same page spells `Broca's area` correctly in two figures. As printed, not corrected.)*\n- **RECEPTIVE aphasia** = **sensory** = **Wernicke's aphasia.**\n- **GLOBAL aphasia:** **no reception AND no expression.**\n- **NOMINAL aphasia:** **cannot name objects.**\n- **ALEXIA:** cannot read. · **AGRAPHIA:** cannot write.\n- **⚠️ TAXONOMY, not bedside picture:** its `anterior speech area (Broca's)` / `posterior speech area (Wernicke's)` figure and the expressive-versus-receptive split are what carry `npqb-nr-10` — **expression impaired with comprehension spared is the expressive/motor/Broca column.** *That last step is an inference from the book's own labels, not a sentence it prints.*\n\n### Dysarthria — four patterns, four sites\n|**Speech**|**Lesion**|\n|---|---|\n|**SLURRED**|along the course of the **PYRAMIDAL tract**|\n|**STACCATO or SCANNING**|**CEREBELLAR**|\n|**LOW MONOTONOUS tone**|**PARKINSON**|\n|**NASAL tone of voice**|**MYASTHENIA GRAVIS**|\n\n- *Dysarthria may also follow **intoxication**, e.g. alcohol, or **neuromuscular disorders**. The book's bolding runs across the finding/lesion boundary in this paragraph; the table above separates them.*\n\nSrc: Book ch.3 printed pp.28-29, all four lobes and the fifth entry as printed · p.28 homunculus figure. Ch.2 printed p.10 (the speech/articulation definitions) · p.11 (all six aphasia types, the two figures, and the dysarthria paragraph, verbatim)",
        "qs": [
          "npqb-nr-10",
          "npqb-nr-23"
        ]
      },
      {
        "id": "in-7",
        "w": "must",
        "h": "The visual pathway, and the six field defects",
        "body": "### The pathway, exactly as the book prints it\n- **The pathway, as printed:** retina → optic nerve → optic chiasm → optic tract → lateral geniculate body → **OPTIC RADIATIONS** → visual cortex.\n- **⚠️ Printed as a bare noun-run:** no arrows and no punctuation, on printed p.29 — and it is the **only** place the book sets the pathway out. **The arrows above are mine; the sequence is the book's.**\n\n### ⚠️⚠️ THE A-F PANEL — printed p.12, and it answers two questions on its own\n|**Panel**|**Defect**|**Lesion**|\n|---|---|---|\n|**A**|**Unilateral anopia** — complete loss of vision in one eye|**UNILATERAL OPTIC NERVE** lesion, or ocular pathology|\n|**B**|**BITEMPORAL hemianopia** — loss of lateral vision in both eyes|**OPTIC CHIASMAL COMPRESSION**|\n|**C**|**HOMONYMOUS hemianopia** — loss of the left field in both eyes|**RIGHT OPTIC TRACT** lesion|\n|**D**|**Homonymous INFERIOR quadrantanopia** — loss of the left LOWER quarters|**RIGHT UPPER optic radiation, in the PARIETAL lobe**|\n|**E**|**Homonymous SUPERIOR quadrantanopia** — loss of the left UPPER quarters|**RIGHT LOWER optic radiation, in the TEMPORAL lobe**|\n|**F**|**Homonymous hemianopia WITH MACULAR SPARING**|**CONTRALATERAL OCCIPITAL LOBE** lesion|\n\n### How to read it in two moves\n- **SIDE first.** A field defect **on the LEFT in BOTH eyes means a RIGHT-sided lesion, behind the chiasm.** Everything after the chiasm carries the opposite half of the visual world.\n- **SITE second.** **Whole half-field → optic tract** (panel C). **A quarter → the radiation** (D, E). **A half-field that spares the macula → the occipital lobe** (F). **Both temporal fields → the chiasm** (B). **One whole eye → that optic nerve** (A).\n\n### ⚠️⚠️ THE BOOK CONTRADICTS THE QUESTION BANK, AND THE BANK'S KEY DOES NOT MOVE\n- **`npqb-nr-14`** asks for the site of a **homonymous INFERIOR quadrantanopia** and its printed key is **`Right lower optic radiation`.**\n- **⚠️ Panel D says the OPPOSITE half:** **RIGHT UPPER, in the PARIETAL lobe** — and panel E puts the **LOWER** radiation, in the **temporal** lobe, behind a **SUPERIOR** defect. **The pathway inverts the image, so the parietal (upper) fibres carry the inferior field.**\n- **The mnemonic is PITS — Parietal Inferior, Temporal Superior.** *(The mnemonic is not taken from the course material; the parietal/temporal assignment behind it is the book's own, printed p.12.)*\n- **⚠️⚠️ THE ANSWER STAYS AS THE BANK PRINTS IT.** A defective key is **noted, never disputed** — the discrepancy belongs in the explanation, and the question's laterality and structure are both right. **What has changed is the standing of the objection: it is no longer outside knowledge disagreeing with the bank, it is THE COURSE'S OWN BOOK, citable to a page.**\n\nSrc: Book ch.2 printed p.12 — the A-F list and its field-circle icons, all six verbatim. Ch.3 printed p.29 (the pathway noun-run). ⚠️ `optic radiation` returns ZERO across all 25 cached decks — this section is book-only",
        "qs": [
          "npqb-nr-13",
          "npqb-nr-14"
        ]
      },
      {
        "id": "in-8",
        "w": "must",
        "h": "What this chapter hands on, and what it does not write",
        "body": "### The examination half is the next chapter\n- **`nr-exam` is the other half:** *The neurological examination* — **tone and power**, **reflexes**, **the sensory examination and the cord in cross-section**, and **the register that audits all 21 questions of the pair.** ⚠️ **The two were written as ONE chapter and PRINTED AT 14 PAGES**, one over the shape; **the seam is where anatomy stops and the bedside begins, and nothing was reordered to make it.**\n\n### ⚠️⚠️ Two things this chapter owns the source of and deliberately does NOT write\n|**Content**|**Where it lives, and why**|\n|---|---|\n|**UMN / LMN manifestations**|**`nr-lmn` `lm-1`.** ⚠️ **The slides are L1's — THIS chapter's deck — and `lm-1` counted them**, saying so in its own body. **59 words were removed from this chapter's budget so they are not paid for twice.** Same shape as `op-va` / `L1,2` in ophthalmology|\n|**HEMIPLEGIA — L1's whole back half, 521 words**|**`nr-hemi`.** ⚠️⚠️ **CHECKED, NOT ASSUMED.** `nr-hemi` was written from **L10 and L12 only** — its header states *the book was not used* — **so L1's hemiplegia half had never been spent by anyone.** `hem-1` to `hem-6` were read from disk before deferring and carry **cortical against subcortical, brainstem, Brown-Séquard, the above-C5 rule, circumduction, Todd's and Sturge-Weber. Nothing is lost by pointing**|\n|**Ataxia and coordination**|`nr-hemi` `hem-14`/`hem-15` — the six types and the three-column table|\n|**The twelve cranial nerves**|`nr-cranial`. **L1 prints the list and nothing else**|\n|**Spinal shock**|`nr-hemi` `hem-9`|\n\n### The seven questions this half carries\n- **`in-5`** — deep-sensation tracts · dorsal-column lesion · the thalamic relay and its exception.\n- **`in-6`** — Broca's aphasia · the motor cortex.\n- **`in-7`** — homonymous hemianopia · inferior quadrantanopia.\n- *The other fourteen moved with the examination sections, by their theory `qs` links and not by title — the ophthalmology rule after a split misfiled twelve.*\n\n### ⚠️ Source faults in this half, recorded and not corrected\n- **`Boca's aphasia`** for Broca's, on a page that spells **`Broca's area`** correctly in two figures (`in-6`). · **The dorsal-column decussation is in the UPPER PONS by p.35's text and in the MEDULLA by p.36's figure** (`in-5`). · **Ch.1 poses FOUR right-hemiparesis vignettes and solves none** (`in-1`). · **The book writes that *the CENTRAL nervous system is divided into central and peripheral parts***, where the division belongs to the nervous system as a whole (`in-2`).\n- **⚠️ And several facts here are FIGURE-ONLY:** the **anterior corticospinal tract**, the **cortical arterial territories**, the **components of the corpus striatum** and **both fasciculi of the dorsal column** are each named in a figure and **in no sentence of the book.** The caches flag every one in place.\n\nSrc: register. `nr-hemi` and `nr-lmn` drafts read from disk before deferring, not assumed. Deck share measured at 815 w for L1 lines 1-180, less the 59-word UMN/LMN block; L1 lines 181-end (521 w) excluded and declared",
        "qs": []
      }
    ]
  }
};
