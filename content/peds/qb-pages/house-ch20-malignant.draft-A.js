// house-ch20-malignant.draft-A.js — DRAFT explanations for House ch.20 "Malignant disease", half A, n = 1,2,3,4,5,6,7,8,9,10,11,12.
// Codex drafted the skeleton via tools/chapter-loop.js; every explanation below was rewritten by hand
// against the cached theory (app/data/theory.peds.js) on 2026-09-03. Codex had tagged the febrile
// neutropenia rule, the neuroblastoma catecholamine marker, medulloblastoma's posterior-fossa site and
// the varicella-in-the-immunocompromised pairing as "not taken from the course material" when the
// theory prints all four. Those tags are corrected here. Stems, options and keys are untouched staging.
var PEDHD_MAL_DRAFT_A = [
  {
    "id": "pedhd-mal-1",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant",
    "stem": "Concerning the epidemiology of childhood cancer, which of the following types is most common in the UK?",
    "options": [
      "Bone tumour",
      "Brain tumour",
      "Leukaemia",
      "Neuroblastoma",
      "Wilms tumour (nephroblastoma)"
    ],
    "answer": 2,
    "explanation": "Leukaemia. The course material states it plainly: acute leukaemia accounts for 25–30% of all childhood cancers, and ALL is the commonest cancer in paediatrics, peaking between 2 and 5 years. The scale is in the same section — 2,500–3,000 new cases of ALL a year in the USA against 500 of AML (`malignant` §`mal-2`).\n\nThe trap is the phrase most common, which has a different answer depending on the category you allow. Brain tumours are the commonest solid tumour of childhood, and in children most are infratentorial (not taken from the course material — the deck names medulloblastoma and ependymoma as the common paediatric brain tumours without ranking them against anything, `malignant-solid` §`mal-19`). A question that asked for the commonest solid tumour would key brain tumour. This one asks across all childhood cancer, where leukaemia outnumbers it.\n\nBone tumour covers osteosarcoma and Ewing sarcoma. Both matter, both are a small share of childhood cancer, and both are diseases of the second decade rather than of the toddler years.\n\nNeuroblastoma is the commonest tumour of infancy, peaking under 2 years — a much narrower claim than commonest childhood cancer, and the qualifier is what makes it true (not taken from the course material, `malignant-solid` §`mal-22`).\n\nWilms tumour peaks at 3–4 years and is the commonest renal tumour of childhood. Again the answer is true only with its qualifier attached (same section, also supplied).\n\nThe hierarchy worth carrying into the exam: leukaemia first overall, brain tumours first among solid tumours, neuroblastoma first in infancy.\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Identify leukaemia as the commonest childhood cancer and separate it from the commonest solid tumour and the commonest tumour of infancy.",
    "source": "pediatric .pdf p.141 (Part I, ch.20 Q1)"
  },
  {
    "id": "pedhd-mal-2",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant",
    "stem": "Polly is a 2-year-old girl who is receiving chemotherapy for her acute lymphoblastic leukaemia. She is known to be neutropenic and has developed a fever of over 38.5°C. What is the most appropriate course of action?",
    "options": [
      "Be admitted to hospital for observation",
      "Be started immediately on oral antibiotics",
      "Have her blood count and inflammatory markers (e.g. C-reactive protein) measured",
      "Have blood cultures taken and be started on intravenous antibiotics",
      "See her general practitioner for further assessment and decision regarding antibiotics"
    ],
    "answer": 3,
    "explanation": "Blood cultures, then intravenous antibiotics. Fever in a child who is neutropenic on chemotherapy is febrile neutropenia, and the material sets it out as an emergency with a clock attached: fever with an absolute neutrophil count under 500/mm³, or under 1,000 and falling; cultures, then broad-spectrum intravenous antibiotics within one hour; do not wait for the count and do not wait for a focus (`malignant` §`mal-13` — that section carries its own tag as supplied rather than drawn from the deck).\n\nWhy there may be no focus is printed earlier and is the part students skip: neutropenia is what produces fever, buccal ulceration and infection in leukaemia (`malignant` §`mal-5`), and a child with no neutrophils cannot make pus. The usual signs of a collection — swelling, fluctuance, a purulent focus — may all be absent while she is bacteraemic.\n\nEvery wrong option here is a delay, and they differ only in how much delay they buy.\n\nAdmission for observation puts her in the right building and gives her nothing. Observation does not treat bacteraemia, and a neutropenic child can go from well to shocked inside a few hours.\n\nOral antibiotics are the wrong route and, at this risk level, the wrong decision. Absorption is unreliable in a child who may vomit or become hypotensive, and oral outpatient therapy belongs to carefully selected low-risk patients — which a 2-year-old on ALL chemotherapy with a temperature over 38.5°C is not (the risk stratification itself is not taken from the course material).\n\nBlood count and CRP is the most seductive wrong answer, because it is not a lazy one: these are investigations you would send anyway. The error is sequencing. The count cannot change the immediate decision — she is already known to be neutropenic — and CRP rises too slowly to exclude anything in the first hours.\n\nSending her to her general practitioner inserts a journey, a triage and a referral in front of a child who may be bacteraemic now.\n\nCultures come first only because they take seconds and are ruined by antibiotics. They never hold the antibiotic up; if venous access is difficult, the antibiotic still goes in on time.\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise febrile neutropenia as an emergency and select cultures followed immediately by broad-spectrum intravenous antibiotics.",
    "source": "pediatric .pdf p.141 (Part I, ch.20 Q2)"
  },
  {
    "id": "pedhd-mal-3",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant-solid",
    "stem": "Mohammed is a 3-year-old boy who is reviewed in the Paediatric Assessment Unit. He has a history of weight loss and lethargy. His mother is also concerned as he keeps crying and complains of pain in his tummy. On examination of his abdomen he has an extensive mass. The doctor is worried he may have a childhood malignancy. Which of the following investigations would be the most useful in making the diagnosis?",
    "options": [
      "Plasma ammonia",
      "Plasma LDG (lactate dehydrogenase)",
      "Serum α-fetoprotein",
      "Serum beta-HCG (human chorionic gonadotrophin)",
      "Urinary catecholamines"
    ],
    "answer": 4,
    "explanation": "Urinary catecholamines. The vignette gives a 3-year-old with weight loss, lethargy, abdominal pain and an extensive abdominal mass — a child who is unwell, not a child who happens to have a lump. The material separates the two abdominal masses of early childhood on exactly that axis: neuroblastoma arises from neural crest, in the adrenal medulla or sympathetic chain; the mass is irregular and hard and crosses the midline; the child is unwell with bone pain and weight loss; and the marker is urinary catecholamines, VMA and HVA. Wilms tumour gives a smooth mass that does not cross the midline in a child who is usually well, and has no marker at all (`malignant-solid` §`mal-22`, supplied and tagged in full — no cached deck teaches either tumour).\n\n“Extensive” is the word doing the work. Paired with the systemic illness it points at the neural-crest tumour rather than the renal one, and only one investigation on the list speaks to it.\n\nPlasma ammonia belongs to hyperammonaemia — urea-cycle disorders, organic acidaemias, liver failure. It is the test for an encephalopathic child, not for a mass.\n\nPlasma LDG rises with cell turnover in many malignancies, and also in haemolysis, hepatitis and after vigorous exercise. It may well be raised in this child. It cannot say which tumour, so it is not what makes the diagnosis.\n\nSerum α-fetoprotein marks hepatoblastoma and yolk-sac germ-cell tumours, and is physiologically high in the first months of life anyway. Serum beta-HCG marks choriocarcinoma and some other germ-cell tumours. Both are the right answers to a different abdominal mass — hepatic or gonadal — and neither is characteristic of neuroblastoma (these tumour-marker pairings are not taken from the course material).\n\nImaging follows, and ultrasound is the usual first look at a childhood abdominal mass. But the question asks which of these five is most useful in making the diagnosis, and among them only one is specific to the tumour the vignette is describing.\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Select urinary catecholamines as the tumour-specific investigation for a suspected neuroblastoma, and distinguish it from the markers of hepatic and germ-cell tumours.",
    "source": "pediatric .pdf p.141 (Part I, ch.20 Q3)"
  },
  {
    "id": "pedhd-mal-4",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant",
    "stem": "Josh is a 2-year-old boy who presents to the Emergency Department with weight loss and lethargy. On examination he has splenomegaly. You are worried that he has leukaemia. You perform an urgent full blood count. What are the most likely haematology results if he has leukaemia?",
    "options": [
      "Low haemoglobin and low platelets",
      "High haemoglobin and low platelets",
      "Normal haemoglobin and normal platelets",
      "High haemoglobin and raised platelets",
      "Low haemoglobin and raised platelets"
    ],
    "answer": 0,
    "explanation": "Low haemoglobin and low platelets. Blasts fill the marrow — usually replaced by 80–100% of them — and the three normal lineages are crowded out (`malignant` §`mal-9`). The deck counts what that produces in ALL: 92% have platelets below normal, and its frequency table puts platelets above 100,000/mm³ in only 25% of children and haemoglobin above 11.0 g/dL in only 12% (`malignant` §`mal-6`, §`mal-9`). The anaemia is moderate to marked and normocytic normochromic, and it is what explains Josh's lethargy; thrombocytopenia is what would give him petechiae, purpura and easy bruising (`malignant` §`mal-5`).\n\nSplenomegaly fits. Hepatosplenomegaly is present in 68% of children with ALL at diagnosis and splenomegaly in 63%, outranking every symptom on the deck's list (`malignant` §`mal-6`).\n\nThe white cell count appears in none of the options, and that is deliberate rather than an omission. It can be low, normal or high; 53% present with leukocytes under 10,000/mm³ (`malignant` §`mal-6`, §`mal-9`). A normal white count never excludes leukaemia, and neither does a normal-looking film in a leukopenic child, where blasts may be very few or none.\n\nHigh haemoglobin with low platelets gets the platelet right and inverts the anaemia. Nothing about marrow replacement raises haemoglobin.\n\nNormal haemoglobin and normal platelets has to be actively refused rather than dismissed. It is not impossible — presentations vary, and 92% is not 100% — but with splenomegaly and weight loss already established, this is not an early presentation.\n\nHigh haemoglobin with raised platelets is a reactive picture: inflammation, iron deficiency, dehydration. It points away from marrow failure in every direction.\n\nLow haemoglobin with raised platelets is the trap for a student who reads “anaemia” and stops reading. A raised platelet count is itself reactive and argues against marrow replacement.\n\nThe full blood count is the urgent screening test, not the diagnostic one. The film shows blasts, abundant above a white count of 10,000/mm³, and the marrow makes the diagnosis — leukaemia is suspected above 5% blasts (`malignant` §`mal-9`).\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise anaemia with thrombocytopenia as the marrow-infiltration pattern of acute leukaemia, and know that the white cell count may be low, normal or high.",
    "source": "pediatric .pdf p.142 (Part I, ch.20 Q4)"
  },
  {
    "id": "pedhd-mal-5",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant-solid",
    "image": "q-pd-hd-142",
    "imgAlt": "CT scan of the brain, axial view.",
    "stem": "Amy is a 2-year-old girl who presents to the outpatient department with a history of developmental regression. She was able to walk but has ‘gone off her legs’ in the last few weeks. Her parents are very worried about her. On further questioning she had been well with no preceding coryzal illness. On examination, she is very unsteady on her feet and her power is reduced in her lower limbs. She has no obvious visual problems and seems able to follow the picture book her mother has brought to clinic. A CT scan is obtained and is shown in the opposite figure. What is the most likely underlying cause?",
    "options": [
      "Cerebral abscess",
      "Cortical astrocytoma",
      "Craniopharyngioma",
      "Medulloblastoma",
      "Viral encephalitis"
    ],
    "answer": 3,
    "explanation": "Medulloblastoma. Amy has lost a skill she had — she walked, and now does not — with truncal unsteadiness and reduced lower-limb power over a few weeks, no preceding illness and no visual problem. That is a posterior fossa syndrome. Medulloblastoma sits in the posterior fossa, in the cerebellar vermis, and is the commonest malignant brain tumour of childhood; it presents with truncal ataxia and an unsteady gait, and with morning headache and vomiting once it obstructs the fourth ventricle (`malignant-solid` §`mal-20`, supplied and tagged — “posterior fossa” returns no hit in the lecture itself). The deck does name medulloblastoma and ependymoma as the two common paediatric brain tumours (`malignant-solid` §`mal-19`).\n\nRegression is the word that should stop you. A child who acquires walking and then loses it is not developmentally delayed; something has been given and taken away, and in a previously well toddler that means a structural process rather than a slow one.\n\nCerebral abscess would ordinarily arrive with fever and an infective source — otitis media, sinusitis, cyanotic congenital heart disease — and often with seizures or a focal deficit. None is offered, and the illness has run for weeks without systemic upset.\n\nCortical astrocytoma is supratentorial. It would be expected to declare itself with seizures, hemiparesis or personality change rather than with a pure gait and balance failure.\n\nCraniopharyngioma is suprasellar, and its currency is endocrine: growth failure, diabetes insipidus, delayed puberty, plus bitemporal field loss from chiasmal compression. The stem quietly excludes it — Amy follows her picture book normally.\n\nViral encephalitis is acute, febrile and encephalopathic, with altered behaviour, reduced consciousness and seizures over days. Amy is alert enough to be assessed in a clinic and has been declining for weeks.\n\nTwo consequences follow from the diagnosis, and neither appears in the options. Medulloblastoma seeds drop metastases down the CSF pathway, so the whole neuraxis is imaged and the CSF examined before treatment is planned; and radiotherapy is avoided or deferred under 3 years of age, which matters directly for a 2-year-old (`malignant-solid` §`mal-20`, supplied and tagged).\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise subacute ataxia with regression in a toddler as a posterior fossa syndrome, and name medulloblastoma as its commonest malignant cause.",
    "source": "pediatric .pdf p.142 (Part I, ch.20 Q5)"
  },
  {
    "id": "pedhd-mal-6",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant",
    "image": "q-pd-hd-143",
    "imgAlt": "Clinical photograph of a child's skin.",
    "stem": "Mark, a 3-year-old boy, is currently receiving chemotherapy. His sister has developed the rash shown in the opposite figure. Mark is well and does not have a fever. Mark’s parents are worried and phone the oncology ward for advice. What information should they be given?",
    "options": [
      "Advise them to see their general practitioner to check that he is all right",
      "Mark needs urgent treatment to prevent him from becoming unwell",
      "Monitor Mark and if he becomes unwell with a fever, bring him to the ward",
      "Monitor Mark and if he has any signs of the rash, bring him to the ward",
      "Reassurance – this is a common illness that most children get"
    ],
    "answer": 1,
    "explanation": "Mark needs urgent treatment to prevent him from becoming unwell. The illness in the sister is chickenpox, and it is worth saying exactly where that comes from. The figure shows her rash — many small red-brown lesions scattered over the shoulder and trunk with one larger, darker, crusted lesion among them — but the reproduction is not sharp enough to call individual lesions vesicular, so the diagnosis is carried by the question rather than by the photograph: the stem offers reassurance that this is 'a common illness that most children get', and no other ordinary childhood exanthem turns a well sibling on chemotherapy into an emergency. The morphology to know is the one the material prints: lesions arrive in crops over 3–5 days so that macules, vesicles and scabs coexist, and that pleomorphism is the diagnostic feature of chickenpox (`infection-vesic` §`inf-32`).\n\nThe exposure, not Mark's current state, is the entire question. He is on chemotherapy and therefore immunocompromised, and the material's line for that group is explicit: aciclovir and/or VZIG in severe cases, the deck's own pairing (`infection-vesic` §`inf-33`). For post-exposure the options are vaccination within 3–5 days, or VZIG for high-risk contacts (`infection-vesic` §`inf-32`) — and for Mark the varicella vaccine is a live one, which is why immunoglobulin rather than vaccination is the route in an immunosuppressed child (not taken from the course material, though the deck approaches it from the other side: complications of the live vaccine are themselves a presentation of immunodeficiency, §`inf-33`).\n\nThe timing is already against them. His sister was infectious from 1–2 days before her rash appeared, so the exposure happened before anyone could see it. Incubation is 10–21 days, average 14–16 (§`inf-32`), which means there is a window in which Mark is well, afebrile and still preventable — and that window is precisely when this phone call is being made. “He is well and has no fever” is therefore not reassurance; it is the reason there is still something to do.\n\nAdvising the general practitioner delegates a time-critical oncology decision to a service that will have to refer it straight back.\n\nWaiting for fever abandons prophylaxis and waits for disease. In the immunocompromised that disease is disseminated varicella, with pneumonia and encephalitis, and antivirals then treat rather than prevent it.\n\nWaiting for the rash is later still, because the rash follows the viraemia rather than announcing it.\n\nReassurance is true of the sister and wrong about Mark. Chickenpox in a well child is mild and self-limiting, its commonest complication bacterial superinfection from scratching (§`inf-32`); the same virus in a child whose cellular immunity has been stripped by chemotherapy is a different illness with a different mortality.\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise varicella exposure in a child on chemotherapy as requiring urgent post-exposure treatment rather than observation or reassurance.",
    "source": "pediatric .pdf p.143 (Part I, ch.20 Q6)"
  },
  {
    "id": "pedhd-mal-7",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant-solid",
    "stem": "Essa is a 2-year-old boy whose parents have noticed his two eyes look different. He has no other medical history and is not currently on any medication. On examination, the movement of the eyes is normal and the pupils are equal and reactive to light. On checking his pupillary reflex you observe his left pupil looks red but the right looks white. His systemic examination is normal. What is the likely cause of this?",
    "options": [
      "Congenital cataract",
      "Glaucoma",
      "Retinoblastoma",
      "Allergic conjunctivitis",
      "VI nerve palsy"
    ],
    "answer": 2,
    "explanation": "Retinoblastoma. A white pupillary reflex — leukocoria — in one eye of a young child is retinoblastoma until proved otherwise, and it earns an urgent ophthalmology referral, because the tumour threatens sight in that eye and, left alone, life. Neither retinoblastoma nor leukocoria appears anywhere in the course material; both are supplied here (not taken from the course material).\n\nWhat the material does give is the screening designed to catch this: the red reflex is examined at birth and again at the 6–8 week check, both part of the Newborn Infant Physical Examination (`dev-problems` §`dp-8`). The deck names cataract as the thing that impedes the reflex. The screen is for any cause of an absent or asymmetric reflex, and retinoblastoma is the one that must not be missed.\n\nCongenital cataract is the other classic cause of leukocoria and remains a genuine differential — the stem cannot exclude it clinically, and it takes a dilated fundoscopy or a slit-lamp to separate the two. Retinoblastoma is what the question tests because it is the malignant cause and the one with a deadline attached (not taken from the course material).\n\nGlaucoma in infancy — buphthalmos — presents with a large, hazy, cloudy cornea, watering and photophobia, and an uncomfortable child. Essa's cornea is not described as abnormal and his eye is quiet.\n\nAllergic conjunctivitis gives itch, conjunctival redness, watering and lid swelling. It is a surface disease, and it cannot change the colour of a reflex that returns from the retina.\n\nSixth nerve palsy is a motility problem: failure of abduction, with a convergent squint. Essa's eye movements are explicitly normal, and in any case a complete palsy would leave the red reflex red.\n\nNotice how much the stem removes to leave one answer standing: pupils equal and reactive, movements normal, systemic examination normal, no medication, no past history. The single abnormality is that one reflex is white and the other red. Asymmetry of the red reflex in a child is never a normal variant.\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise unilateral leukocoria as a red-flag presentation of retinoblastoma and distinguish it from cataract, glaucoma and surface eye disease.",
    "source": "pediatric .pdf p.143 (Part I, ch.20 Q7)"
  },
  {
    "id": "pedhd-mal-8",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant-solid",
    "image": "q-pd-hd-144",
    "imgAlt": "Two-panel illustration of eye movements, viewed from the front.",
    "stem": "Brittney, aged 5 years, goes to her optician. She has needed glasses for 4 months but her mother thinks her prescription needs changing as she has been getting progressively worsening headaches. When the optician examines her eyes she finds the examination shown in the figure below (next page). Both her eyes have a red reflex. What is the most likely diagnosis?",
    "options": [
      "Craniopharyngioma",
      "Concomitant squint",
      "Optic glioma",
      "Posterior fossa tumour",
      "Retinoblastoma"
    ],
    "answer": 3,
    "explanation": "Posterior fossa tumour. Brittney's headaches have worsened over months while her spectacle prescription takes the blame, and the figure shows her eyes on gaze to each side — an ocular motility abnormality, not a refractive one. Progressive headache in a child, with an eye-movement defect and both red reflexes intact, is raised intracranial pressure until proved otherwise.\n\nThe deck lists what a brain tumour does: headache that is frequent and worse in the morning or with a change of position, seizures, deficits of vision, speech or motor function from pressure on the brain, and cognitive change (`malignant-solid` §`mal-19`). What it does not say — and what this question turns on — is that in children most brain tumours are infratentorial, so the picture is cerebellar signs with obstructive hydrocephalus rather than a focal cortical deficit (not taken from the course material, and recorded as such inside §`mal-19`). The sixth nerve is the classic false localising sign of raised pressure: it has the longest intracranial course, and its failure tells you about pressure rather than about site (not taken from the course material).\n\nCraniopharyngioma is suprasellar. It compresses the chiasm and the pituitary, so the expected findings are growth failure, endocrine disturbance and bitemporal field loss — not headache with a motility defect.\n\nConcomitant squint is the ordinary childhood squint: the angle of deviation is the same in every direction of gaze and no movement is limited. It does not progress, and it does not cause headache. Squint appears in the material only as a feature of a genetic syndrome (`genetics` §`gen-5`), never as an ophthalmic subject in its own right.\n\nOptic glioma impairs vision — reduced acuity, optic atrophy, sometimes proptosis — and is associated with neurofibromatosis type 1 (not taken from the course material). The function it takes is sight, not ocular movement.\n\nRetinoblastoma is excluded by the stem in a single clause: both eyes have a red reflex. That sentence is there deliberately, and it also ties this question to Q7 on the page before.\n\nThe practical rule is worth stating flatly. A child whose glasses keep needing changing and whose headaches keep worsening needs imaging, not another refraction.\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise progressive headache with an ocular motility defect as raised intracranial pressure from an infratentorial tumour, and separate it from primary ophthalmic causes.",
    "source": "pediatric .pdf p.143 (Part I, ch.20 Q8; the question straddles the page break from p.143 to p.144)"
  },
  {
    "id": "pedhd-mal-9",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant",
    "stem": "Natalia, a 4-year-old girl, presents to her general practitioner. This is her second bad episode of tonsillitis in the same month. She is tired and looks pale and has a number of bruises on her lower legs. On examination she has pallor, scattered purpuric skin lesions and hepatosplenomegaly. Which of the following is the most likely diagnosis of that patient?",
    "options": [
      "Neuroblastoma",
      "Brain tumour",
      "Wilms tumour (nephroblastoma)",
      "Acute lymphoblastic leukaemia",
      "Hodgkin disease"
    ],
    "answer": 3,
    "explanation": "Acute lymphoblastic leukaemia. Natalia has three cytopenias at once, which no solid tumour on this list produces: pallor and tiredness (anaemia), a second bad tonsillitis inside one month (neutropenia), and bruises with purpuric lesions (thrombocytopenia). Hepatosplenomegaly completes it — present in 68% of children with ALL at diagnosis, outranking every symptom on the deck's own frequency table, ahead of splenomegaly at 63%, fever at 61% and bleeding at 48% (`malignant` §`mal-6`). The mechanism is marrow invasion, and the deck maps each cytopenia onto its signs: anaemia gives pallor, fatigability, tachycardia and dyspnoea; neutropenia gives fever, buccal ulceration and infection; thrombocytopenia gives petechiae, purpura, easy bruising and mucosal bleeding (`malignant` §`mal-5`).\n\nThis question and the three that follow it share one option list. The comparative table is written here once; each sibling then names only its own discriminating token.\n\n|Option|What it needs before it can be chosen|Where that is printed|\n|---|---|---|\n|Acute lymphoblastic leukaemia|Two or more cytopenias — pallor, recurrent infection, bruising — with hepatosplenomegaly|`malignant` §`mal-5`, §`mal-6`|\n|Neuroblastoma|A hard irregular abdominal mass crossing the midline, in an unwell child with weight loss or bone pain|`malignant-solid` §`mal-22`|\n|Wilms tumour (nephroblastoma)|A smooth abdominal mass that does not cross the midline, in a child who is otherwise well|`malignant-solid` §`mal-22`|\n|Brain tumour|Progressive headache, morning vomiting, visual change, cognitive or school decline|`malignant-solid` §`mal-19`|\n|Hodgkin disease|Painless persistent lymphadenopathy, usually cervical, often with fever, night sweats and weight loss|not taken from the course material|\n\nHodgkin disease is this menu's filler option and appears nowhere in the material; it is supplied above so that it can be excluded on its own terms rather than by elimination. It would be argued for by rubbery painless nodes, not by cytopenias — and Natalia's tonsillitis is an infection, which is the opposite of what Hodgkin disease offers.\n\nThe confirmation is not among the options: an urgent full blood count and film, then marrow examination, where leukaemia is suspected above 5% blasts and the marrow at diagnosis is usually 80–100% blasts (`malignant` §`mal-9`).\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Recognise the combination of anaemia, recurrent infection, thrombocytopenia and hepatosplenomegaly as acute lymphoblastic leukaemia.",
    "source": "pediatric .pdf p.144 (Part I, ch.20 Q9)"
  },
  {
    "id": "pedhd-mal-10",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant-solid",
    "stem": "Angel, a 2-year-old boy, presents to his general practitioner with an abdominal mass noticed by his mother on dressing him. He has no other medical problems and is not on any medication. His stool pattern is regular. He is otherwise relatively well in himself. You examine his abdomen and feel a mass in his left abdomen, which does not cross the midline. There is no hepatosplenomegaly. Which of the following is the most likely diagnosis of that patient?",
    "options": [
      "Neuroblastoma",
      "Brain tumour",
      "Wilms tumour (nephroblastoma)",
      "Acute lymphoblastic leukaemia",
      "Hodgkin disease"
    ],
    "answer": 2,
    "explanation": "Wilms tumour (nephroblastoma). The discriminating token from the shared table at `pedhd-mal-9` is a mass that does not cross the midline in a child who is otherwise relatively well, with no hepatosplenomegaly and a normal stool pattern. That is the renal tumour rather than the neural-crest one: Wilms is smooth and stays on its own side of the midline and the child is usually well, whereas neuroblastoma is hard and irregular, crosses the midline, and the child is unwell with bone pain and weight loss (`malignant-solid` §`mal-22`, supplied and tagged in full).\n\nAngel's age fits — the Wilms peak is 3–4 years — and the two other features to look for are haematuria and hypertension, neither of which the stem gives or needs. Bilateral disease occurs in 5–10%, so both kidneys are imaged; treatment is nephrectomy with chemotherapy, and the prognosis is good (same section).\n\nUltrasound of the abdomen is the appropriate first investigation for a childhood abdominal mass.\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Use an abdominal mass that does not cross the midline in a well child to identify Wilms tumour.",
    "source": "pediatric .pdf p.144 (Part I, ch.20 Q10; the question straddles the page break from p.144 to p.145)"
  },
  {
    "id": "pedhd-mal-11",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant-solid",
    "stem": "Kay, a 3-year-old girl, presents to the Paediatric Assessment Unit as her mother is worried she is pale, tired and ‘not quite right’. She has also lost 2 kg of weight in the last month. On examination the child looks unwell, has pallor and a large firm, irregular abdominal mass in the centre of her abdomen. Which of the following is the most likely diagnosis of that patient?",
    "options": [
      "Neuroblastoma",
      "Brain tumour",
      "Wilms tumour (nephroblastoma)",
      "Acute lymphoblastic leukaemia",
      "Hodgkin disease"
    ],
    "answer": 0,
    "explanation": "Neuroblastoma. The discriminating token from the shared table at `pedhd-mal-9` is a large, firm, irregular mass in the centre of the abdomen in a child who looks unwell and has lost 2 kg in a month. Central and irregular means it is crossing the midline, and that finding paired with the systemic illness is what separates neuroblastoma from Wilms tumour, where the mass is smooth, stays on one side and the child is usually well (`malignant-solid` §`mal-22`, supplied and tagged in full).\n\nKay's age is compatible: neuroblastoma peaks under 2 years and is the commonest tumour of infancy, but it remains a tumour of early childhood. Its marker is urinary catecholamines, VMA and HVA; its signature sign is periorbital bruising with proptosis from orbital secondaries; and stage 4S disease in infants can regress spontaneously, which no other childhood malignancy does (same section).\n\nPallor here is part of a systemic illness with weight loss and a mass, not the isolated cytopenic picture that would argue for leukaemia.\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Use a hard irregular midline-crossing abdominal mass in an unwell child to identify neuroblastoma.",
    "source": "pediatric .pdf p.145 (Part I, ch.20 Q11)"
  },
  {
    "id": "pedhd-mal-12",
    "bank": "house",
    "module": "pediatrics",
    "chapter": "malignant-solid",
    "stem": "Douglas, a 7-year-old boy, visits his general practitioner with his mother. He has been getting headaches over the last 3–5 weeks which have increased in intensity. These have woken him from sleep. His mother reports that he has recently begun vomiting in the morning. His teachers have also commented his school work is getting worse. His mother thinks this may be because his sight has deteriorated as he keeps complaining of double vision. Which of the following is the most likely diagnosis of that patient?",
    "options": [
      "Neuroblastoma",
      "Brain tumour",
      "Wilms tumour (nephroblastoma)",
      "Acute lymphoblastic leukaemia",
      "Hodgkin disease"
    ],
    "answer": 1,
    "explanation": "Brain tumour. The discriminating token from the shared table at `pedhd-mal-9` is raised intracranial pressure: headaches over 3–5 weeks that are increasing in intensity and wake him from sleep, morning vomiting, falling school performance and double vision. The material lists that cluster almost item for item — headache frequent and worse in the morning or with a change of position, deficits of vision, speech or motor function from pressure on the brain, and cognitive change including altered memory, personality or confusion (`malignant-solid` §`mal-19`).\n\nEach of those is a red flag by itself, and four together are not a headache disorder. Diplopia in particular should not be handed to an optician: in a child with progressive headache it suggests a sixth nerve palsy from raised pressure (not taken from the course material).\n\nNothing in the stem is abdominal, so neither neuroblastoma nor Wilms tumour is in play. There is no pallor, bruising, recurrent infection or organomegaly to suggest leukaemia, and Hodgkin disease would be a nodal illness rather than this.\n\nThe next step is urgent neuroimaging — MRI and CT are essential for locating and diagnosing the tumour (`malignant-solid` §`mal-20`) — and not a repeat refraction.\nWritten for this bank — pediatric .pdf prints no explanation here.",
    "objective": "Identify progressive headache with morning vomiting, diplopia and school decline as the raised-pressure presentation of a brain tumour.",
    "source": "pediatric .pdf p.145 (Part I, ch.20 Q12)"
  }
];
