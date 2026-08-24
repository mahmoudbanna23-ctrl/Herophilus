/* Dr. HOUSE in ENT — End-of-round MCQs 2025, NOSE section.
 * Verbatim staging for drafting batch 4: Q316-Q340, book pp.92-97.
 * 25 questions. Folds are ALREADY REMOVED (see house-sweep-nose.md).
 * key = 0-based index into opts. The bank prints NO explanation boxes anywhere.
 * id = enthd-nose-<n>. The Nose section does NOT restart numbering; it runs on from Ear 236.
 * `ctx` = the antecedent case for a question whose stem back-references "the previous case".
 */

var HD_NOSE = [
{ n:316, p:92, key:3,
  stem:"Which of the following is a factor that contributes to epistaxis?",
  opts:["Thrombocytopenia","Nasal polyps","Septal spur","All of the above","None of the above"] },

{ n:317, p:92, key:0,
  stem:"A 4 year old boy has bilateral nasal obstruction, mucoid nasal discharge and fever (38.3C) for the past 3 days. His mother has tried some OTC medications, but she reports minimal improvement and has recently noted that the discharge has become discolored. Examination revealed marked nasal congestion and pharyngeal hyperemia. What is the best next step?",
  opts:["Assurance and symptomatic treatment","Culture of nasal discharge","X-ray nose and PNS","CT nose and PNS","Empirical antibiotic therapy against common pathogens"] },

{ n:318, p:92, key:3,
  stem:"The same patient did not improve on follow up on the 5th day but there was no deterioration. She asks you to prescribe an antibiotic and mentions that he gets these colds frequently. What is the best next step?",
  opts:["Empirical antibiotic therapy","Influenza vaccine after convalescence","CT nose and paranasal sinuses","Assurance, counselling and watchful waiting"],
  ctx:"BACK-REFERENCE: \"the previous case\" = Q317 (p.92): A 4 year old boy has bilateral nasal obstruction, mucoid nasal discharge and fever (38.3C) for the past 3 days. His mother has tried some OTC medications, but she reports minimal improvement and has recently noted that the discharge has become discolored. Examination revealed marked nasal congestion and pharyngeal hyperemia. What is the best next step? [printed key: Assurance and symptomatic treatment]. Restate enough of this case that the entry stands alone." },

{ n:319, p:92, key:1,
  stem:"A 22-year-old male patient comes to your clinic complaining of severe unilateral headache localized to right aspect of forehead that is exaggerated on bending forwards while doing the prayers together with cough and nasal discharge. He reports that he had a common cold infection 2 weeks ago that became worse overtime till he sought medical consultation. What is the most probable diagnosis?",
  opts:["Acute bacterial pansinusitis","Acute bacterial right frontal sinusitis","Chronic rhinosinusitis","Influenza virus infection"] },

{ n:320, p:93, key:3,
  stem:"In the previous case, what's the most appropriate means of diagnosis?",
  opts:["CT nose and paranasal sinuses","MRI nose and paranasal sinuses","X ray nose and paranasal sinuses","Clinical diagnosis"],
  ctx:"BACK-REFERENCE: \"the previous case\" = Q319 (p.92): A 22-year-old male patient comes to your clinic complaining of severe unilateral headache localized to right aspect of forehead that is exaggerated on bending forwards while doing the prayers together with cough and nasal discharge. He reports that he had a common cold infection 2 weeks ago that became worse overtime till he sought medical consultation. What is the most probable diagnosis? [printed key: Acute bacterial right frontal sinusitis]. Restate enough of this case that the entry stands alone." },

{ n:321, p:93, key:0,
  stem:"Which of the following is true regarding sinusitis complications?",
  opts:["Sinusitis is the most common cause of frontal lobe abscess","Sinusitis complications are more common in chronic cases than acute ones","Meningitis is among the cranial complications of sinusitis","Sinusitis complications can be managed without hospitalization"] },

{ n:322, p:93, key:3,
  stem:"All of the following sinuses open into ostiomeatal complex except?",
  opts:["Frontal sinus","Maxillary sinus","Anterior ethmoid sinus","Posterior ethmoid sinus"] },

{ n:323, p:93, key:3,
  stem:"What is the most appropriate investigation to be done in a case of chronic rhinosinusitis?",
  opts:["Contrast-enhanced CT nose and paranasal sinuses, axial view","Non-contrast CT nose and paranasal sinuses, axial view","Contrast-enhanced CT nose and paranasal sinuses, coronal view","Non-contrast CT nose and paranasal sinuses, coronal view"] },

{ n:324, p:94, key:3,
  stem:"CT scan of paranasal sinuses in case of chronic sinusitis is required to …?",
  opts:["Locate the diseased sinuses","Define ostiomeatal complex abnormalities","Diagnose DNS","All of the above","None of the above"] },

{ n:325, p:94, key:1,
  stem:"T / F: Complications of rhinosinusitis occur more frequently in adults than in children especially orbital complications",
  opts:["True","False"] },

{ n:326, p:94, key:1,
  stem:"Which of the following is the most common dental origin of maxillary sinusitis?",
  opts:["Upper central incisors","Upper 2nd premolar and 1st molar teeth","Upper 1st premolar and 2nd molar teeth","Lower lateral incisor tooth"] },

{ n:327, p:94, key:2,
  stem:"Which of the following is a predisposing factor for recurrent unilateral maxillary sinusitis that occurs over and over in the same side?",
  opts:["DM","Allergic rhinitis","Dental sepsis","AIDS"] },

{ n:328, p:94, key:0,
  stem:"All of the following are characteristics of acute odontogenic rhinosinusitis (rhinosinusitis originating from dental infection) except?",
  opts:["It causes bilateral foetid nasal discharge","It's responsible for like 10% of cases of acute bacterial rhinosinusitis","It mainly carries the infection to maxillary sinus","It mostly originates from upper 2nd premolar and 1st molar teeth"] },

{ n:329, p:95, key:3,
  stem:"Which of the following is the most common cause for acute sinusitis?",
  opts:["Allergic rhinitis","Nasal tumors","Deviated nasal septum","Common cold"] },

{ n:330, p:95, key:1,
  stem:"Which of the following is a characteristic of acute rhinosinusitis?",
  opts:["Never lasts for more than 10 days","Double sickening within 4-5 days of common cold infection","The majority of cases turn into chronic cases","All of the above"] },

{ n:331, p:95, key:3,
  stem:"An 18-year-old female patient presents to the rhinology clinic with a complaint of severe headache together with cough and colored nasal discharge. She reports that she had a common cold infection 4 days ago. What's your provisional diagnosis?",
  opts:["Acute bacterial sinusitis","Acute bacterial rhinosinusitis","Chronic bacterial rhinosinusitis","Acute viral rhinosinusitis"] },

{ n:332, p:95, key:1,
  stem:"A 10-year-old female patient presented with pain localized between eyes, headache and nasal discharge. What's your provisional diagnosis?",
  opts:["Acute frontal sinusitis","Acute ethmoidal sinusitis","Acute sphenoidal sinusitis","Acute maxillary sinusitis"] },

{ n:333, p:95, key:1,
  stem:"A 22-year-old female patient had common cold 10 days ago. Now she developed fever, nasal obstruction, mucopurulent rhinorrhea and cheek tenderness. What's your provisional diagnosis?",
  opts:["Acute viral maxillary sinusitis","Acute bacterial maxillary sinusitis","Acute viral ethmoiditis","Acute bacterial ethmoiditis"] },

{ n:334, p:96, key:2,
  stem:"CT nose and paranasal sinuses is not carried out in which of the following situations?",
  opts:["Recurrent acute sinusitis despite adequate medical treatment","Chronic rhinosinusitis","Acute rhinosinusitis","Acute rhinosinusitis with complications"] },

{ n:335, p:96, key:3,
  stem:"Which of the following best describes nasal discharge of odontogenic sinusitis (sinusitis of dental origin) ?",
  opts:["Bilateral odorless","Bilateral offensive","Unilateral odorless","Unilateral offensive"] },

{ n:336, p:96, key:0,
  stem:"T / F: Complications occur more frequently in acute rhinosinusitis than in chronic rhinosinusitis",
  opts:["True","False"] },

{ n:337, p:96, key:3,
  stem:"Which of the following characterizes frontal sinusitis headache?",
  opts:["It's maximum in the morning and decreases gradually till it disappears by noon","It's due to negative pressure (vacuum) in the sinus lumen","It increases by leaning forwards and straining","All of the above","None of the above"] },

{ n:338, p:96, key:1,
  stem:"A patient presented with common cold, edema of right cheek, dental pain and right earache. What's the most likely diagnosis?",
  opts:["Right ASOM","Right maxillary sinusitis","Right cancer maxilla","Pansinusitis"] },

{ n:339, p:97, key:0,
  stem:"In the previous case, otalgia is referred along which of the following CNs?",
  opts:["Trigeminal","Glossopharyngeal","Vagus","Hypoglossal"],
  ctx:"BACK-REFERENCE: \"the previous case\" = Q338 (p.96): A patient presented with common cold, edema of right cheek, dental pain and right earache. What's the most likely diagnosis? [printed key: Right maxillary sinusitis]. Restate enough of this case that the entry stands alone." },

{ n:340, p:97, key:3,
  stem:"Which of the following is the most important step in treatment of chronic rhinosinusitis?",
  opts:["Antibiotics according to culture and sensitivity","Corticosteroid therapy","Surgery","Eradication of predisposing factors"] }
];
