# Grade Gain — Neurology topic 03, "Ischemic Cerebrovascular Stroke"

**Source:** `neuropsychiatry & neurosurgery qb.pdf`, **book pp.7–13 = PDF pp.12–18** (offset +5).
Rendered at `-r 130`, read 2026-08-12. **20 questions printed, Q35–Q54 — matches the contents page
exactly (20 promised).**

**Layout — the first topic where questions and answers occupy SEPARATE pages:**

| | Book pp. | PDF pp. |
|---|---|---|
| Questions Q35–Q54 | **7–9** | 12–14 |
| Answers | **10–13** | 15–18 |

**PDF 19 (book p.14) was rendered as well**, per the standing rule. It opens *Hemorrhagic
Cerebrovascular Stroke* at **Q55** — so **no answers ran past book p.13** and the boundary is clean.

**Explanation boxes: 16 of 20.** Bare keys only for **Q36, Q41, Q45 and Q48**. Predicted
authored-marker delta for this batch: **+4**.

---

## ⚠️ STRUCTURAL FINDINGS

### 1. TWO header vignettes, covering eight questions

**Header A** — book p.7, printed above Q38, in the right column:

> A 60 year-old male patient presented to the ED complaining of weakness of the right upper limb and
> the right side of the face. **Questions below will be related to this scenario**

It governs **Q38, Q39, Q40, Q41** — and, through Q42's back-reference, Q42 as well.

**Header B** — book p.8, printed above Q46:

> An 80 year-old male patient presents to the ED complaining of left sided weakness and loss of
> sensation since 2 hours. His past medical history is significant for a right hip replacement
> surgery 2M ago, left sided ischemic stroke 2.5M ago, hypertension, DM type II, and peptic ulcer.
> Pulse is 88 bpm, bp is 170/100 mmHg, and RR is 20. **Questions 46 : 49 are related to this
> scenario**

It governs **Q46, Q47, Q48, Q49**. Note Header B names its range explicitly; Header A does not, and
its range has to be read off the back-references.

### 2. SIX back-references in twenty questions — 30 %, the highest rate yet

| Question | Points at | What must be restated |
|---|---|---|
| Q42 | "the management ordered in **question 41**" | Header A **and** Q41's answer (noncontrast head CT) |
| Q44 | "the patient in **question 43**" | Q43's whole vignette **and** its CT finding |
| Q48 | "Due to tPA contraindication" | Header B and the Q46 contraindications |
| Q49 | "the patient in **Q48**" | Header B and Q48's answer (thrombectomy was done) |
| Q52 | "the patient in **question 51**" | Q51's vignette |
| Q53 | "the patient in **question 51**" | Q51's vignette |

**The deck is shuffled, so every one of these is repaired in the written stem.**

### 3. Three multi-answer questions → `cases.neuro.js`

| Q | Printed key | Resolves to |
|---|---|---|
| 46 | `C AND D. History of hip replacement surgery and ischemic stroke.` | c + d ✓ |
| 49 | `B ND D. Clopidogrel and Statins.` *[sic — "AND" mis-set]* | b + d ✓ |
| 52 | `B, E and F. Staccato speech, vertigo and nystagmus` | b + e + f ✓ — **three** correct |

**Q52 is the first THREE-answer question.**

### 4. Option counts explode — up to nine

**Q43 prints NINE options (a–i)** and **Q51 prints EIGHT (a–h)**. Q46 and Q52 print six. Everything
in this project so far has been 2–5. Nothing in the app assumes a count, so these are held as
printed.

### 5. A figure printed WITH the question — Q43

Book p.8 prints an **axial noncontrast head CT** between Q43's vignette and its option list, with
the question sentence *below* the image. **The question cannot be answered without it** — the
vignette never states which side the bleed is on, and the option list offers both. Cropped to
`app\assets\q\q-np-8.jpg` (560×500, 74 KB) and marked `imgEssential`.

**⚠️ Two crop attempts.** The first caught four lines of the vignette above the image and clipped
the right edge. Second pass at `-x 185 -y 1055 -W 560 -H 500` (200 dpi) is clean — whole CT, no
question or option text. **Both were looked at; no numeric check was trusted.**

**⚠️ `imgAlt` must not answer the question.** Written as *"Axial noncontrast CT of the brain at the
level of the posterior fossa"* — modality and view only. It does **not** name the finding or the
side, both of which decide the answer. The radiological read belongs in the explanation, which is
shown only after answering.

### 6. Every answer's LETTER was checked against its NAME

The `npqb-nr-23` defect made this a standing check. **All 20 agree in this topic**, including the
three multi-answer keys.

---

## Questions, verbatim

### Book p.7 (PDF 12) — Q35–Q41

**35.** A 50 year old male patient presents to the ED complaining of right sided weakness that lasted
for 30 mins. His medical history is significant for hypertension and DM II for 10 years. If a CT scan
were to be ordered, which of the following findings cannot be the cause of his symptoms?
- a. Hemorrhage
- b. Carotid artery thrombosis
- c. Embolism from veins through patent foramen ovale
- d. Embolism from an intramural thrombus of the left ventricle

**36.** What is the most common source of embolic ischemic stroke?
- a. Valvular heart disease
- b. Infective endocarditis
- c. Atrial fibrillation
- d. Dilated cardiomyopathy

**37.** Which of the following best describes a lacunar infarct?
- a. Brain infarction resulting from a thrombus in the middle cerebral artery
- b. Brain infarction resulting from a thrombus in the anterior cerebral artery
- c. Brain infarction resulting from a thrombus in the lenticulostriate arteries arising from the middle cerebral artery
- d. Brain infarction resulting from a thrombus in the basilar artery

> **[HEADER A]** A 60 year-old male patient presented to the ED complaining of weakness of the right
> upper limb and the right side of the face. Questions below will be related to this scenario

**38.** A thrombus in which of the following arteries will have caused these deficits?
- a. Right MCA
- b. Left MCA
- c. Right ACA
- d. Left ACA

**39.** While examining the patient's face, which of the following findings will you likely notice?
- a. Inability to raise his eyebrows and a deviation of the angle of his mouth to the right
- b. Inability to raise his eyebrows and a deviation of the angle of his mouth to the left
- c. Ability to raise his eyebrows and a deviation of the angle of his mouth to the right
- d. Ability to raise his eyebrows and a deviation of the angle of his mouth to the left

**40.** What other symptom would you expect to find in this patient?
- a. Ataxia
- b. Vertigo
- c. Poor left conjugate gaze
- d. Aphasia

**41.** What should be the first step of management in this patient?
- a. Order a head CT with contrast
- b. Order a head CT without contrast
- c. Order an MRI with gadolinium
- d. Order an MRI without gadolinium

### Book p.8 (PDF 13) — Q42–Q47

**42.** What is the rationale behind the management ordered in question 41?
- a. To exclude hemorrhagic stroke
- b. To visualize the region of the brain with ischemia
- c. To locate the artery with the thrombus
- d. To decide which cortex is ischemic

**43.** A 69 year-old male comes to the ED due to severe occipital headache, nausea, and vomiting for
the last 3 hours. He has never had a headache like this before and has otherwise been in good
physical condition. The patient was told several years ago that he has high blood pressure, but has
not been taking any medications or seen any health care providers. He has smoked half a pack of
cigarettes daily for 40 years. BP is 160/90 mmHg and pulse is 86 bpm and regular. His noncontrast
head CT is shown below:

*[IMAGE — axial noncontrast CT, posterior fossa level. Cropped to `q-np-8.jpg`.]*

Which of the following physical findings is most likely to be seen in this patient?
- a. Homonymous hemianopia
- b. Left hemineglect
- c. Left hemiplegia
- d. Left hemisensory loss
- e. Pinpoint pupils
- f. Right eye vision loss
- g. Right hemiataxia
- h. Right hemisensory loss
- i. Right hemiplegia

*(nine options; the question sentence is printed BELOW the image, unnumbered)*

**44.** What is the best next step in management for the patient in question 43?
- a. Adminster tPA as he presented within the accepted time frame for thombolysis [sic ×2]
- b. No tPA should be administered because he presented out of the accepted time frame for thrombolysis
- c. No tPA should be administered because it would worsen his symptoms
- d. Reduce his bp to below 120/80 mm Hg

**45.** What is the window period within which tPA can be administered?
- a. 3 hours
- b. 3.5 hours
- c. 4 hours
- d. 4.5 hours

> **[HEADER B]** An 80 year-old male patient presents to the ED complaining of left sided weakness
> and loss of sensation since 2 hours. His past medical history is significant for a right hip
> replacement surgery 2M ago, left sided ischemic stroke 2.5M ago, hypertension, DM type II, and
> peptic ulcer. Pulse is 88 bpm, bp is 170/100 mmHg, and RR is 20.
> Questions *46 : 49* are related to this scenario

**46.** The patient is taken for a noncontrast head CT, which showed no cerebral hemorrhage. Despite
that a decision was made not to administer tPA. Which of the following are reasons behind this
decision? *Choose as many as applies.*
- a. The patient's age
- b. The duration of his symptoms
- c. His history of hip replacement surgery
- d. His history of ischemic stroke
- e. His hypertension
- f. His diabetes

**47.** What other symptoms would you expect to be present in this patient?
- a. Aphasia
- b. Apraxia
- c. Hemispatial neglect syndrome
- d. Ataxia

### Book p.9 (PDF 14) — Q48–Q54

**48.** Due to tPA contraindication, what is the best course of action?
- a. Reduce bp and await symptom improvement
- b. Admister anticoagulation [sic — *Administer*]
- c. Do immediate mechanical thrombectomy before further worsening of symptoms
- d. Reduce bp first then do mechanical thrombectomy

**49.** The management you have chosen for the patient in Q48 was done, and it is time to discharge
the patient. What needs to be prescribed to prevent stroke recurrence? *Choose as many as applies.*
- a. Asprin [sic — *Aspirin*]
- b. Clopidogrel
- c. NOACs
- d. Statins

**50.** In which of the following conditions will you be able to visualize brain ischemia in a stroke
patient?
- a. A CT scan taken within 30 minutes of symptom onset
- b. An MRI taken within 30 minutes of symptom onset
- c. A CT scan taken within 1 hour of symptom onset
- d. An MRI taken within 1 hour of symptom onset

**51.** A 70 year-old male patient presents to the ED with right sided hemiplegia and left limb
ataxia. The vessel most likely to have been occluded is:
- a. Left MCA
- b. Right MCA
- c. Left ACA
- d. Right ACA
- e. Left PCA
- f. Right PCA
- g. Left branch of the vertebrobasilar system
- h. A right branch of the vertebrobasilar system

*(eight options)*

**52.** For the patient in question 51, what other findings would you expect? *Choose as many as
applies.*
- a. Aphasia
- b. Staccato speech
- c. Apraxia
- d. Amnesia
- e. Nystagmus
- f. Vertigo

**53.** For the patient in question 51, what other findings would you expect?
- a. Inability to close his right eyes and mouth deviation to the left
- b. Inability to close his left eyes and mouth deviation to the right
- c. Can close his right eyes and mouth deviation to the left
- d. Can close his left eyes and mouth deviation to the right

**54.** A 65 year-old male patient presents to the ED with his wife who says that he suddenly started
mumbling irrelevant words and cannot move his right arm. What is the most immediate action you
should take?
- a. Order a noncontrast head CT
- b. Examine his vital signs
- c. Assess need for intubation
- d. Admit the patient to the neurology ward

---

## Answer key with printed boxes, verbatim (book pp.10–13)

| Q | Key | Box? |
|---|---|---|
| 35 | A. Hemorrhage | yes |
| 36 | C. Atrial fibrillation | **no** |
| 37 | C. Brain infarction resulting from a thrombus in the lenticulostriate artery arising from the middle cerebral artery | yes + bold addendum |
| 38 | B. Left MCA | yes |
| 39 | D. Ability to raise his eyebrows and deviation of the angle of the mouth to the left | yes |
| 40 | D. Aphasia | yes |
| 41 | B. Order a head CT without contrast | **no** |
| 42 | A. To exclude a hemorrhagic stroke | yes + bold addendum |
| 43 | G. Right hemiataxia | yes |
| 44 | C. No tPA should be administered because it worsen his symptoms | yes |
| 45 | D. 4.5 hours | **no** |
| 46 | **C AND D.** History of hip replacement surgery and ischemic stroke | yes |
| 47 | C. Hemispatial neglect syndrome | yes |
| 48 | C. Do immediate mechanical thrombectomy before further worsening of symptoms | **no** |
| 49 | **B ND D.** Clopidogrel and Statins | yes |
| 50 | D. An MRI taken within 1 hour of symptom onset | yes |
| 51 | G. A left branch of the vertebrobasilar artery | yes |
| 52 | **B, E and F.** Staccato speech, vertigo and nystagmus | yes |
| 53 | B. Inability to close his left eyes and mouth deviation to the right | yes |
| 54 | C. Assess need for intubation | yes |

Boxes are transcribed verbatim into each entry's `explanation` and expanded beneath.

Two of the boxes carry a **bolded addendum** set apart from the main text — Q37 (*"Note that
knowledge of the lenticulostriate artery and what it supplies was not needed to answer the
question…"*) and Q42 (*"Note that we do not need to visualize the ischemic brain… if you were to
visualize brain ischemia, MRI would be the best to accomplish so."*). Both are part of the printed
explanation and are kept.

---

## Defects recorded (keyed as printed, noted in the explanation)

| Q | Defect |
|---|---|
| **43** | printed inside the **Ischemic** stroke topic, but the CT shows a **haemorrhage** and the box says so — a haemorrhagic question filed under ischaemia by the bank |
| **44** | box says bp "should not be lowered to less than 140/80 **NOT** 120/80". `L10) Stroke` gives the ICH target as **systolic <140 mmHg**, so the box is right and option d is the trap |
| **49** | key printed **"B ND D"** — "AND" mis-set |
| **50** | box states "A CT cannot detect brain ischemia until **48 hours** from symptom onset, while an MRI can do so within 1 hour only". `L10` does not give either number; DWI-MRI is positive within minutes and CT hypodensity typically appears at 6–24 h, so **48 hours is generous**. Recorded, keyed as printed |
| **51** | key names *"a left branch of the vertebrobasilar **artery**"* where option g reads *"…vertebrobasilar **system**"* — same option, different noun |
| **53** | stem is word-for-word identical to Q52's except for the *Choose as many as applies* instruction; different option sets and different keys. **Not a fold** |
| several | spelling: "Adminster", "thombolysis", "Admister", "Asprin", "sympytom", "hemipsphere" |

## Within-bank duplicate sweep — topic 03 against topics 01–03

- **Q52 vs Q53** — identical stems, different option lists, different keys. The *same-stem
  different-options* case: **both held, not a fold.**
- **Q41 vs Q42 vs Q50 vs Q55 (topic 04)** — all four turn on CT-vs-MRI and contrast-vs-none, but each
  asks a different thing (which test, why that test, when ischemia becomes visible, and — in topic
  04 — how to exclude haemorrhage). **Not folds**, though Q41 and Q55 are close enough to re-check
  when topic 04 is written.
- **Q38 vs Q51** — both ask which vessel is occluded, but from opposite circulations and with
  different option lists (4 vs 8). **Not a fold.**
- **Q39 vs Q53** — both ask what the face will look like. Q39 is an **UMN** facial palsy from a
  hemispheric stroke; Q53 is an **LMN** palsy from a brainstem stroke. Opposite answers by design.
  **Not a fold**, and the pair is worth studying together.
- Nothing in topics 01–02 overlaps this material.

**0 folds in topic 03.**
