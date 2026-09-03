// house-ch20-malignant.draft-B.js — DRAFT explanations for House ch.20 "Malignant disease", half B, n = 13..22.
// Codex's draft B never reached disk: it emitted literal garbage (" {Jsii") between two entries and the
// runner's JSON parse failed at line 146. Written by hand instead, from the staged array (stems, options
// and keys verbatim) and the cached theory in app/data/theory.peds.js, on 2026-09-03.
// n:14-n:17 share one option list; the comparative table is written once at pedhd-mal-14 and the three
// siblings give only their own discriminating token.
// n:21's printed key is arguable and is RECORDED in its explanation. The key does not move.
var PEDHD_MAL_DRAFT_B = [
  {
    "id": "pedhd-mal-13",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant",
    "stem": "Connor, a 4-year-old boy, presents to the Paediatric Assessment Unit with his parents. They are worried as he seems to be very tired and complains of his legs hurting. He also seems to have a fine rash that has developed on his arms. On examination he is pale, has a petechial rash on his arms and legs and has hepatosplenomegaly. A full blood count shows low haemoglobin and platelet count. Which of the following is the investigation most likely to confirm the diagnosis of that patient?",
    "options": [
      "Bone marrow aspirate",
      "Blood film",
      "Chest X-ray",
      "Clotting screen",
      "CT scan"
    ],
    "answer": 0,
    "explanation": "Bone marrow aspirate. Read the question carefully: it does not ask what to do next, it asks what confirms the diagnosis. The clinical picture is already made — pallor and fatigue, bone pain, petechiae, hepatosplenomegaly and a full blood count showing anaemia with thrombocytopenia. Bone pain is present in 23% of children with ALL at diagnosis and hepatosplenomegaly in 68% (`malignant` §`mal-6`), and the cytopenias are the marrow being crowded out (`malignant` §`mal-5`). What remains is proof, and proof is in the marrow: it is usually replaced by 80–100% blasts, megakaryocytes are usually absent, and leukaemia is suspected above 5% blasts (`malignant` §`mal-9`).\n\nBlood film is the trap, and it is a good one, because it is genuinely the right thing to send. The film shows blasts, and above a white count of 10,000/mm³ they are abundant. But 53% of children with ALL present with a white count under 10,000/mm³, and in a leukopenic child the blasts on the film may be very few or absent altogether (`malignant` §`mal-6`, §`mal-9`). A film can raise the diagnosis; it cannot confirm it, and it cannot classify the leukaemia — the morphology, the immunophenotype and the cytogenetics that decide treatment all come off the marrow (`malignant` §`mal-10`).\n\nChest X-ray has a real place here, but a different one. Bulky mediastinal lymphadenopathy causing superior vena cava syndrome is a recognised presentation, commoner in T-cell leukaemia in adolescents (`malignant` §`mal-7`), and the film is checked before a general anaesthetic for that reason. It stages and it warns; it does not diagnose.\n\nClotting screen answers a different question — is he bleeding because of a coagulopathy? His petechiae are explained by his platelet count, which is already known to be low, and a normal clotting screen would change nothing about the diagnosis.\n\nCT scan is for a mass. There is no mass in this vignette; the disease is diffuse and in the marrow, and the marrow is where the needle goes.\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Select bone marrow aspirate as the confirmatory investigation in suspected acute leukaemia, and explain why a blood film cannot confirm it.",
    "source": "pediatric .pdf p.145 (Part I, ch.20 Q13; the question straddles the page break from p.145 to p.146)"
  },
  {
    "id": "pedhd-mal-14",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant-solid",
    "stem": "Niamh, a 4-year-old girl, is taken to her general practitioner as her mother has noticed she has red urine. On further questioning she has been more tired than normal and has been complaining of abdominal pain. On examination she is pale with a left-sided abdominal mass. Her urine is red and a dipstick confirms that this is blood. Which of the following is the investigation most likely to confirm the diagnosis of that patient?",
    "options": [
      "Full blood count",
      "Magnetic resonance imaging (MRI) scan",
      "Positron emission tomography (PET) scan",
      "Ultrasound of abdomen",
      "Urine catecholamines"
    ],
    "answer": 3,
    "explanation": "Ultrasound of the abdomen. Niamh has a left-sided abdominal mass with frank haematuria in a 4-year-old — the age, the side-specific mass and the blood in the urine together say renal, and that means Wilms tumour. The material's comparison gives the constellation: Wilms arises from metanephric blastema, peaks at 3–4 years, gives a smooth mass that does not cross the midline in a child who is usually well, and its two associated findings are haematuria and hypertension (`malignant-solid` §`mal-22`, supplied and tagged in full). Ultrasound is the first-line imaging of a childhood abdominal mass: it says at once whether the mass is renal or extrarenal, whether it is solid or cystic, and whether the other kidney is involved — which matters, because 5–10% of Wilms tumours are bilateral (same section).\n\nThis question and the three that follow share one option list. The table below is the comparison; each sibling then names only its own discriminating token.\n\n|Investigation|What has to be present before it is the answer|Where that is printed|\n|---|---|---|\n|Full blood count|Cytopenias — pallor with infection or bruising — and hepatosplenomegaly, i.e. leukaemia|`malignant` §`mal-5`, §`mal-6`|\n|MRI scan|A lesion inside a bony box that ultrasound cannot see through: brain, spinal cord or orbit|`malignant-solid` §`mal-20`|\n|PET scan|A staging question in a known malignancy, not a first diagnostic step in a child|not taken from the course material|\n|Ultrasound of abdomen|An abdominal mass, especially a renal one; the first look, no radiation, no sedation|`malignant-solid` §`mal-22`|\n|Urine catecholamines|An unwell child with an irregular mass crossing the midline — neuroblastoma, marked by VMA and HVA|`malignant-solid` §`mal-22`|\n\nUrine catecholamines is the near miss in this particular stem, and the discriminators are that Niamh's mass is left-sided rather than central and that haematuria is a Wilms feature, not a neuroblastoma one. PET is not a paediatric first-line test and appears nowhere in the material (not taken from the course material); a full blood count would document her anaemia and confirm nothing.\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Select abdominal ultrasound as the first confirmatory investigation for a suspected Wilms tumour, and set out the shared investigation menu for this group of questions.",
    "source": "pediatric .pdf p.146 (Part I, ch.20 Q14)"
  },
  {
    "id": "pedhd-mal-15",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant-solid",
    "stem": "Oscar, a 3-year-old boy, attends the Emergency Department as his mother is worried he has lost weight and looks pale. On examination he has a large irregular mass extending across his abdomen. His blood pressure is high. Which of the following is the investigation most likely to confirm the diagnosis of that patient?",
    "options": [
      "Full blood count",
      "Magnetic resonance imaging (MRI) scan",
      "Positron emission tomography (PET) scan",
      "Ultrasound of abdomen",
      "Urine catecholamines"
    ],
    "answer": 4,
    "explanation": "Urine catecholamines. The discriminating token from the shared table at `pedhd-mal-14` is a large irregular mass extending across the abdomen — that is a mass crossing the midline — in a child who has lost weight and looks unwell. That pairing is neuroblastoma rather than Wilms tumour, where the mass is smooth, stays on one side and the child is usually well (`malignant-solid` §`mal-22`, supplied and tagged in full).\n\nThe marker follows from the cell of origin. Neuroblastoma arises from neural crest tissue in the adrenal medulla or the sympathetic chain, so it secretes catecholamines, and their urinary metabolites — VMA and HVA — are what confirm it (same section). The raised blood pressure fits the same mechanism, although hypertension is not specific: it occurs in Wilms tumour too, by a renal route.\n\nUltrasound would still be done, and would still be first: it shows the mass. It cannot say which tumour it is, and this question asks what confirms the diagnosis rather than what to order first.\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Use a midline-crossing abdominal mass in an unwell child to select urinary catecholamines as the confirmatory test for neuroblastoma.",
    "source": "pediatric .pdf p.146 (Part I, ch.20 Q15)"
  },
  {
    "id": "pedhd-mal-16",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant-solid",
    "stem": "Francis, a 2-year-old boy, is taken to his general practitioner by his father who is worried as he has become ‘cross-eyed’. Otherwise he is very well in himself and has no history of vomiting. On examination he appears to be well but has an absent red reflex in his left eye. Which of the following is the investigation most likely to confirm the diagnosis of that patient?",
    "options": [
      "Full blood count",
      "Magnetic resonance imaging (MRI) scan",
      "Positron emission tomography (PET) scan",
      "Ultrasound of abdomen",
      "Urine catecholamines"
    ],
    "answer": 1,
    "explanation": "Magnetic resonance imaging. The discriminating token from the shared table at `pedhd-mal-14` is an absent red reflex in one eye — the lesion is inside the orbit, where no abdominal investigation reaches. A squint plus leukocoria in a 2-year-old is retinoblastoma until proved otherwise, and MRI of the orbits and brain is what defines the tumour, shows optic nerve extension and excludes an associated intracranial (trilateral) tumour (not taken from the course material; neither retinoblastoma nor leukocoria appears anywhere in the material).\n\nWhat the material does supply is the screen that should have caught it earlier: the red reflex is examined at birth and again at the 6–8 week check, as part of the Newborn Infant Physical Examination (`dev-problems` §`dp-8`).\n\nNote the two clauses the stem inserts to close off the alternatives. 'Very well in himself' and 'no history of vomiting' remove raised intracranial pressure, so this is not the brain-tumour stem; and it is the eye, not the abdomen, so ultrasound and catecholamines have nothing to look at. Examination under anaesthesia by an ophthalmologist is the other half of the work-up, and biopsy is avoided because it risks seeding the tumour (not taken from the course material).\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Select MRI as the confirmatory imaging for suspected retinoblastoma presenting with squint and an absent red reflex.",
    "source": "pediatric .pdf p.146 (Part I, ch.20 Q16; the question straddles the page break from p.146 to p.147)"
  },
  {
    "id": "pedhd-mal-17",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant-solid",
    "stem": "Carla is a 4-year-old girl who is seen in the Paediatric Assessment Unit complaining of headaches. Her mother has noticed that her eye movements are not normal. The whole family has recently had a sickness bug but Carla seems to have continued vomiting. Which of the following is the investigation most likely to confirm the diagnosis of that patient?",
    "options": [
      "Full blood count",
      "Magnetic resonance imaging (MRI) scan",
      "Positron emission tomography (PET) scan",
      "Ultrasound of abdomen",
      "Urine catecholamines"
    ],
    "answer": 1,
    "explanation": "Magnetic resonance imaging. The discriminating token from the shared table at `pedhd-mal-14` is headache with abnormal eye movements and vomiting that has outlasted everyone else's gastroenteritis. The material lists headache — frequent, worse in the morning or with a change of position — together with visual, speech or motor deficits as the presentation of a brain tumour (`malignant-solid` §`mal-19`), and names MRI and CT as essential for locating and diagnosing it (`malignant-solid` §`mal-20`). MRI is preferred in children: better posterior fossa resolution, and no ionising radiation.\n\nThe family sickness bug is the whole design of this stem. It supplies an innocent explanation for the vomiting, and the word that dismantles it is 'continued' — everyone else recovered and Carla did not. Persistent vomiting with headache and an eye-movement abnormality is raised intracranial pressure, and a sixth nerve palsy is its classic false localising sign.\n\nOne caution the material makes explicit from the other direction: leukaemic CNS infiltration can produce the same picture — headache, morning vomiting, papilloedema and bilateral sixth nerve palsy (`malignant` §`mal-7`) — but it occurs in under 5% at diagnosis, and nothing else here suggests leukaemia.\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise persistent vomiting with headache and abnormal eye movements as raised intracranial pressure and select MRI to confirm a brain tumour.",
    "source": "pediatric .pdf p.147 (Part I, ch.20 Q17)"
  },
  {
    "id": "pedhd-mal-18",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant",
    "stem": "Solomon is a 12-year-old boy. He has recently lost weight and his ‘glands are up’. His mother reports that the ‘glands’ in his neck have been enlarged for several months now. He has no other medical problems. He has not been having any episodes of fever or night sweats. On examination he has several large, irregular, hard lymph nodes in his neck. They are all greater than 2 cm in size. You order a full blood count and blood film, which show normal results. Which of the following is the investigation most likely to confirm the diagnosis of that patient?",
    "options": [
      "Blood film",
      "Chest X-ray",
      "Clotting screen",
      "CT scan",
      "Excision biopsy"
    ],
    "answer": 4,
    "explanation": "Excision biopsy. Every feature of Solomon's nodes is on the malignant side of the reactive-versus-malignant line: several of them, larger than 2 cm, hard and irregular rather than soft and mobile, present for months rather than weeks, in a supraclavicular-to-cervical distribution, in an adolescent who is losing weight. Lymphoma is diagnosed on nodal architecture — the whole node has to be examined, not a sample of cells — so an excision biopsy is what confirms it, and a fine-needle aspirate is specifically inadequate for the same reason (not taken from the course material; lymphoma is named in the material only in passing, and neither Hodgkin nor non-Hodgkin lymphoma is taught).\n\nBlood film is excluded by the stem itself, which has already reported it as normal. This is worth noticing rather than skipping: lymphoma is a disease of nodes, and a normal blood count and film do not begin to exclude it. Leukaemia is the one that shows in the blood, because the marrow is involved (`malignant` §`mal-9`).\n\nChest X-ray belongs in the work-up and not in the answer. Mediastinal lymphadenopathy is looked for, and bulky mediastinal disease causing superior vena cava obstruction is a real hazard before anaesthesia (`malignant` §`mal-7`). It stages and it warns; it does not give a tissue diagnosis.\n\nClotting screen has no bearing on lymphadenopathy at all.\n\nCT scan defines the extent of disease and is part of staging once the diagnosis exists. It cannot distinguish a reactive node from a malignant one by size and shape alone, which is precisely the distinction at issue.\n\nThe absence of fever and night sweats is a deliberate distractor. B symptoms are prognostic in Hodgkin lymphoma and their absence is favourable; it is never reassuring about whether lymphoma is present (not taken from the course material).\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Select excision biopsy as the confirmatory investigation for persistent pathological lymphadenopathy, and recognise that a normal blood film does not exclude lymphoma.",
    "source": "pediatric .pdf p.147 (Part I, ch.20 Q18)"
  },
  {
    "id": "pedhd-mal-19",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant",
    "stem": "ALL is the commonest form of childhood leukaemia and carries a 5-year survival rate of over 80%. However, prognosis depends on a number of factors. Which of the following is a good prognostic factor in acute lymphoblastic leukaemia?",
    "options": [
      "White cell count (WCC) >50 x 10⁹/L at diagnosis",
      "Age >10 at diagnosis",
      "Age <1 year at diagnosis",
      "Non-B cell, non-T cell leukaemia",
      "Presence of translocations, e.g. Philadelphia chromosome"
    ],
    "answer": 3,
    "explanation": "Non-B cell, non-T cell leukaemia. The other four options are the four classic adverse features, and the risk-stratification table sets all of them out — favourable is age 1–10 years, an initial white count under 50,000/mm³, B-precursor lineage and favourable cytogenetics; adverse is age under 1 or 10 and over, a white count of 50,000/mm³ and over, T-cell or mature B-cell lineage, and BCR–ABL1 t(9;22), the Philadelphia chromosome (`malignant` §`mal-12`, which is itself tagged as supplied — the deck stops at diagnosis and teaches no ALL therapy or prognosis).\n\n'Non-B cell, non-T cell' is the older name for common ALL — the CALLA-positive precursor-B disease that most children have, defined historically by the absence of surface immunoglobulin and of T-cell markers. It is the same population the modern table calls B-precursor, and it is the favourable one. The material's immunophenotype tree gives the two lineages and the split of the B arm into pre-B and mature B (`malignant` §`mal-10`), which is the axis this option is on.\n\nA white count above 50 × 10⁹/L is the presenting feature with the clearest cut-off, and it is adverse. Note the units: the option prints 50 × 10⁹/L, which is the same number as 50,000/mm³.\n\nAge over 10 and age under 1 are both adverse, at opposite ends. Infant ALL is the worse of the two, being associated with KMT2A rearrangement.\n\nTranslocations are not adverse as a class — ETV6–RUNX1, t(12;21), is favourable — but the example the option names, the Philadelphia chromosome, is the archetypal adverse one, and it is the example that decides the option.\n\nOne feature outranks every one of these and is not offered: end-of-induction minimal residual disease, the single strongest predictor of outcome (`malignant` §`mal-12`, supplied and tagged).\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Identify non-B, non-T (common, B-precursor) immunophenotype as the favourable prognostic factor in childhood ALL and recognise the four adverse features.",
    "source": "pediatric .pdf p.147 (Part I, ch.20 Q19; the question straddles the page break from p.147 to p.148)"
  },
  {
    "id": "pedhd-mal-20",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant",
    "stem": "There are a number of syndromes that predispose to specific forms of malignancy and require vigilance and screening to make an early diagnosis. Which of the following conditions is not associated with an increased risk of malignancy?",
    "options": [
      "Down syndrome",
      "Beckwith-Wiedemann syndrome",
      "Ataxia telangiectasia",
      "Li Fraumeni syndrome",
      "Turner syndrome"
    ],
    "answer": 4,
    "explanation": "Turner syndrome. This is a negative stem — four of the five are cancer-predisposition syndromes and the odd one out is the answer. Turner syndrome's important associations are cardiovascular (coarctation, bicuspid aortic valve, aortic dissection), renal, and endocrine (ovarian failure, thyroid disease); it is not a general childhood cancer-predisposition syndrome, and it appears in neither of the material's two predisposition lists (not taken from the course material).\n\nDown syndrome is the one the material quantifies: a 1 in 95 risk of leukaemia under 10 years of age — the earliest risk window of the three chromosomal disorders it tabulates, alongside Bloom syndrome at 1 in 8 under 30 years and Fanconi anaemia at 1 in 12 under 16 years (`malignant` §`mal-3`). The material devotes a whole section to Down syndrome AML, where M7 leukaemia is commoner and yet the outcome is markedly superior — remission around 90%, event-free survival 70–80% — because Down syndrome blasts are unusually sensitive to cytarabine through the GATA1 mutation (`malignant` §`mal-11`).\n\nAtaxia telangiectasia is printed by name in the material's list of genetically determined conditions with increased incidence, alongside congenital agammaglobulinaemia, Poland syndrome, Shwachman–Diamond syndrome, neurofibromatosis, Diamond–Blackfan anaemia, Kostmann disease and Bloom syndrome (`malignant` §`mal-3`). It is a DNA-repair disorder, and lymphoma and leukaemia are its cancers.\n\nBeckwith–Wiedemann syndrome predisposes to embryonal tumours, and the material names it among the Wilms tumour associations along with WAGR and hemihypertrophy, which is why these children are entered into abdominal ultrasound surveillance (`malignant-solid` §`mal-22`, supplied and tagged in full).\n\nLi–Fraumeni syndrome is a germline TP53 disorder giving a broad, early-onset cancer risk — sarcoma, breast, brain, adrenocortical carcinoma and leukaemia. It appears nowhere in the material (not taken from the course material).\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Distinguish Turner syndrome from the syndromes that carry an increased risk of childhood malignancy.",
    "source": "pediatric .pdf p.148 (Part I, ch.20 Q20)"
  },
  {
    "id": "pedhd-mal-21",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant-solid",
    "stem": "Brain tumours are the most common solid tumour of childhood and presentation may be insidious leading to late diagnosis. Which of the following statements regarding brain tumours in childhood is true?",
    "options": [
      "They are usually supratentorial",
      "Signs of raised intracranial pressure are rare",
      "Astrocytomas carry poor prognosis",
      "Medulloblastomas are the most common type",
      "Metastasis is common"
    ],
    "answer": 2,
    "explanation": "The bank keys 'Astrocytomas carry poor prognosis'. Take the four rejected options first, because each is a clean teaching point.\n\n'They are usually supratentorial' is false. In children most brain tumours are infratentorial, which is why the classical presentation is cerebellar — truncal ataxia, unsteady gait — with obstructive hydrocephalus at the fourth ventricle (`malignant-solid` §`mal-19`, where the infratentorial predominance is recorded as supplied rather than taught, and §`mal-20`).\n\n'Signs of raised intracranial pressure are rare' is false and is the opposite of the chapter. Headache worse in the morning or with a change of position, and morning vomiting, are the presenting complaints, precisely because a posterior fossa mass obstructs CSF flow early (`malignant-solid` §`mal-19`).\n\n'Metastasis is common' is false as most students will read it. Brain tumours rarely metastasise outside the central nervous system. Medulloblastoma does seed drop metastases down the CSF pathway, which is why the whole neuraxis is imaged (`malignant-solid` §`mal-20`, supplied and tagged) — but that is spread within the CNS, not systemic metastasis.\n\n⚠️ Recorded, not corrected: the two remaining options are both arguable, and the bank's key sits on the weaker of them. Astrocytoma is a family, not one disease. Low-grade pilocytic astrocytoma — the commonest of them in children, and typically cerebellar — is often curable by surgery alone and carries an excellent prognosis; high-grade astrocytoma and diffuse midline glioma carry a very poor one. As printed, without a grade, the statement is true only of the high-grade end. Meanwhile 'Medulloblastomas are the most common type' is the answer many sources would accept if 'type' is read as commonest malignant tumour, which is how the material states it (`malignant-solid` §`mal-20`, supplied and tagged); it is false if 'type' means commonest overall, where astrocytoma leads. The printed key is left exactly as the bank prints it and the discrepancy is noted here (this analysis is not taken from the course material).\n\nWhat to carry into the exam: in children, infratentorial, raised pressure early, spread within the CNS rather than outside it.\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Know the site, presentation and spread of childhood brain tumours, and recognise that the printed key here rests on an ungraded statement about astrocytoma.",
    "source": "pediatric .pdf p.148 (Part I, ch.20 Q21)"
  },
  {
    "id": "pedhd-mal-22",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant-solid",
    "stem": "A 2-month-old baby is brought to the GP as a family photo shows a discrepancy in her eyes. On examination a red reflex is present in one eye only. She is otherwise healthy. Which of the following is the most likely diagnosis?",
    "options": [
      "Retinoblastoma",
      "Retinopathy of prematurity",
      "Congenital cataracts",
      "CMV retinitis",
      "Glaucoma"
    ],
    "answer": 0,
    "explanation": "Retinoblastoma. A unilateral absent red reflex in an otherwise healthy infant is retinoblastoma until proved otherwise, and the referral is urgent because the tumour threatens the eye and, untreated, life. It is not taught anywhere in the material; it is supplied here (not taken from the course material). What the material does give is how this child was meant to be found: the red reflex is examined at birth and again at the 6–8 week check, both part of the Newborn Infant Physical Examination (`dev-problems` §`dp-8`). She is 2 months old, so this is exactly the window that screening covers — and the family photograph did the job the examination is designed to do, since a camera flash returns the same reflex.\n\nUnilaterality is the strongest single clue. Retinoblastoma is unilateral in about 60% of cases, and unilateral disease is usually sporadic and presents later than bilateral, which is heritable (not taken from the course material).\n\nCongenital cataract is the true differential and cannot be separated from retinoblastoma at the bedside — it is the cause the material actually names as impeding the red reflex (`dev-problems` §`dp-8`). It is commonly bilateral, and dilated fundoscopy or examination under anaesthesia settles it. Choosing it here would not be foolish; retinoblastoma wins because it is unilateral, and because it is the diagnosis that cannot be allowed to wait.\n\nRetinopathy of prematurity requires prematurity and supplemental oxygen, and the stem gives neither. Advanced disease causes leukocoria, but the screening programme is confined to preterm infants.\n\nCMV retinitis in an infant means congenital CMV, which does not usually arrive alone — hearing loss, microcephaly, hepatosplenomegaly, thrombocytopenia. She is described as otherwise healthy.\n\nCongenital glaucoma is buphthalmos: a large, hazy, cloudy cornea with watering and photophobia, and an uncomfortable baby. The cornea, not the reflex, is what looks wrong.\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise a unilateral absent red reflex in an infant as retinoblastoma and separate it from cataract, retinopathy of prematurity, CMV retinitis and glaucoma.",
    "source": "pediatric .pdf p.148 (Part I, ch.20 Q22)"
  }
];
