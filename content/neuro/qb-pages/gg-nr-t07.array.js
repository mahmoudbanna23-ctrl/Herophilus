/* Grade Gain — neuropsychiatry & neurosurgery qb.pdf
 * SECTION 1 (Neurology), TOPIC 07 "Headache"
 * Questions book pp.27-29 (PDF 32-34) · Answers book p.30 (PDF 35)
 * Offset: PDF page = book page + 5
 *
 * VERBATIM STAGING RECORD. The source's own typos are PRESERVED here on purpose
 * (`planter extensor`, `Amitryptilin`, `sumitriptan`, `A 1 7-year-old`, `striking me head`,
 * and Q129's defective option lettering a/a/b/e). They are corrected only in the draft.
 *
 * 22 questions printed, Q119-Q140. Contents page promised 22 — EXACT for once.
 * Topic 08 "Epilepsy" opens at Q141 on book p.31 (PDF 36) — verified by the one-past render.
 *
 * ⚠️ ANSWER KEYS ARE BARE LETTERS. The bank prints NO name beside any key in this topic,
 * so the letter-vs-name cross-check (the `npqb-nr-23` defect shape) is UNAVAILABLE here.
 * That is stated rather than implied to have passed.
 *
 * 6 of the 22 carry a printed Explanation box: Q126, Q128, Q133, Q134, Q135, Q136.
 */
var GG_NR_T07_STAGED = [

{ n:119, p:27, key:'B', keyName:null,
  stem:'Indication for neuroimaging in headache:',
  opts:['Headache with vomiting','Headache with planter extensor','Severe headache','Associated with colored illusions'],
  box:null },

{ n:120, p:27, key:'D', keyName:null,
  stem:'A 20 yrs. old female presented with attacks of headache; unilateral or bilateral, pulsating in character, some attacks are associated with nausea and photophobia. What drugs can be used to prevent the attacks?',
  opts:['Nifedipine and Sumatriptan','Sumatriptan and Amitryptilin','Paracetamol and Nifedipine','Propranolol and Amitryptilin','Na valproate and sumitriptan'],
  box:null },

{ n:121, p:27, key:'C', keyName:null,
  stem:'A change in headache pattern, such as increasing pain, frequency, or the development of new features, may indicate:',
  opts:['Migraine progression','A need for stronger pain medications','A secondary cause, such as a tumor or increased intracranial pressure','Improved response to current treatment'],
  box:null },

{ n:122, p:27, key:'D', keyName:null,
  stem:'A disheveled male, seems to be in the 3rd decade of his life, came to you in E.R on 3.00A.M. He was screaming frightenedly "please help me; I have a very severe headache as if a thunderclap is striking me head. this denotes that my enemies are going to kill me as soon as possible. please help me". The best management to be done for him is:',
  opts:['Giving him 3 cc saline intravenously and then telling him "you will be fine. Go home".','Advising him to leave the e.r and go to a psychiatrist.','Prescribing antipsychotic drug for him and tell him to follow up with a psychiatrist.','Verification of the nature of his headache and asking for a psychiatric consultation.'],
  box:null },

{ n:123, p:27, key:'B', keyName:null,
  stem:'A patient present with pain that is boring in character in the periorbital area, which awakens them daily from sleep at 2 AM, accompanied by ptosis and lacrimation. What is the most probable diagnosis?',
  opts:['Tension headache','Cluster headache','Migraine','Sinusitis'],
  box:null },

{ n:124, p:27, key:'B', keyName:null,
  stem:'The drug used in aborting migraine attack is:',
  opts:['Levodopa','Sumatriptan','Propranolol','Topiramate'],
  box:null },

{ n:125, p:28, key:'B', keyName:null,
  stem:'Migraine is best classified as which of the following?',
  opts:['VC cause psychiatric manifestations','Nociceptive','Neuropathy'],
  note:'⚠️ THREE options only (a/b/c) — confirmed at 200 dpi, not a rendering cut. Option a is garbled in the source.',
  box:null },

{ n:126, p:28, key:'B', keyName:null,
  stem:'A cardiac patient with migraine presents for treatment. Which of the following is the most appropriate medication for migraine relief?',
  opts:['Ergotamine','IM Ketorolac','Subcutaneous Sumatriptan','IM dihydromergotamine'],
  box:'Ergotamine: is a vasoconstrictor and can be contraindicated in patients with CVD due to its potential to cause vascular spasm IM Ketorolac: is (NSAID) and can be used in the acute treatment of migraine for pain relief. It is generally safe for cardiac patients in appropriate doses Sumatriptan: is a serotonin agonist that causes vasoconstriction' },

{ n:127, p:28, key:'C', keyName:null,
  stem:'Which of the following anti-epileptic drugs is commonly used for preventing migraine?',
  opts:['verapamil','Lamotrigine','Topiramate','Carbamazepine'],
  box:null },

{ n:128, p:28, key:'A', keyName:null,
  stem:'A female patient with a history of migraine reports improvement with ergotamine during previous attacks. However, she now experiences a sudden severe migraine attack that continues without relief until examination. What is the next step in management?',
  opts:['CT scan','MRI of the brain','Administer another dose of ergotamine','Intravenous hydration and observe'],
  box:'This patient has a sudden severe headache that does not improve with her usual treatment. In this case, a new, severe headache that does not follow the typical pattern of her migraine could suggest a 2ry cause CT scan is the first imaging modality to rule out acute intracranial pathology MRI is also useful but CT is preferred in an emergency setting to quickly assess for life-threatening conditions like hemorrhage' },

{ n:129, p:28, key:'B', keyName:null,
  stem:'Recurrent unilateral primary headache that last for one hour daily at mid night with irritations:',
  opts:['Migraine','Cluster headache.','Tension type headache','Brain tumor'],
  printedLetters:['a','a','b','e'],
  note:'⚠️⚠️ THE OPTION LETTERS ARE MISPRINTED — the source prints a, a, b, e (the letter `a` twice, `c` and `d` skipped entirely). Verified at 200 dpi. The key is a bare `B`. Under the PRINTED letters `B` would resolve to "Tension type headache"; under the intended sequential lettering `B` is the SECOND option, "Cluster headache.", which is what the stem describes. Held as index 1.',
  box:null },

{ n:130, p:28, key:'A', keyName:null,
  stem:'What is the mechanism of action of triptans?',
  opts:['Serotonergic agonists','Calcium channel blockers','Dopamine antagonists','Opioid receptor agonists'],
  box:null },

{ n:131, p:28, key:'B', keyName:null,
  stem:'Which of the following drugs is a prophylactic drug for cluster headache?',
  opts:['Amitriptyline','Verapamil','Sumatriptan','Ibuprofen'],
  box:null },

{ n:132, p:28, key:'D', keyName:null,
  stem:'What is the most common type of migraine aura?',
  opts:['Olfactory','Auditory','Gustatory','Visual'],
  box:null },

{ n:133, p:28, key:'D', keyName:null,
  stem:'A 22-year-old woman presents with daily band like headaches for 2 weeks. The headaches are often precipitated by stress. Physical examination fails to disclose focal neurologic deficits. Which of the following is the most appropriate initial step in patient care?',
  opts:['Antidepressant drugs','Calcium-channel antagonists','Ergotamine-containing preparations','NSAIDs'],
  box:'The clinical suggest tension type, which are often associated with the neck muscles. Exploration of underlying causes of anxiety is often useful, but a trial with aspirin or other NSAIDs may be sufficient in most cases.' },

{ n:134, p:29, key:'D', keyName:null,
  stem:'A healthy 20-year-old man presents with a history of recurrent episodes of severe throbbing headache. The headaches are triggered or aggravated by noise and stress and last for several hours. The pain is frequently preceded by visual disturbances, such as luminous stars or zigzags of light, and accompanied by nausea and vomiting. His father experienced a similar form of headache. The patient has found no relief with aspirin and ibuprofen. Which of the following is the most appropriate drug treatment during the acute attacks?',
  opts:['Acetaminophen','Calcium-channel antagonists','Carbamazepine','Ergotamine','Prednisone'],
  box:'The clinical picture is for migraine. Effective drugs include ergotamine tartrate or sumatriptan. CCB for example, have been used for prophylaxis. Acetaminophen is very unlikely to provide relief in classic migraine, especially if aspirin and ibuprofen have already failed to do so' },

{ n:135, p:29, key:'C', keyName:null,
  stem:'A 1 7-year-old female presents with three attacks of headache over a six-month period. She describes the headaches, right-sided and lasting for twelve hours and associated with nausea and photophobia. Each is preceded by spots before her eyes. What is the most appropriate initial treatment for this patient?',
  opts:['Diclofenac. at the onset of the next attack','Ergotamine: suppository at the onset of the next attack','Paracetamol plus metoclopramide at the onset of the next attack','Prophylaxis with propranolol','Sumatriptan at the onset of the next attack'],
  note:'Stem prints "A 1 7-year-old" with a stray space — verified at 200 dpi. Reads as 17-year-old.',
  box:'1st line treatment of acute mild to moderate migraine consists of simple analgesic ex paracetamol and an antiemetic. Second line treatment includes the use of NSAIDs. If the above failed, then triptans therapy is indicated. Long-term prophylaxis with drugs (e.g. propranolol) is. only indicated if the attacks are frequent (>2/month)' },

{ n:136, p:29, key:'B', keyName:null,
  stem:'A 65-year-old woman presents with a headache that has lasted a few weeks. She gets pain in her mouth during meals and her scalp is tender on palpation. What is the most appropriate initial treatment for this patient?',
  opts:['Paracetamol','Prednisolone','Amitriptylin','Sumatriptan'],
  box:'Her symptoms and signs are suggestive of temporal/giant cell arteritis. Treatment of choice is high-dose oral prednisolone' },

{ n:137, p:29, key:'B', keyName:null,
  stem:'Which is false regarding migraine?',
  opts:['Hereditary predisposition','Always above 50 years','Common in women','Hemicranial headache','Prominent autonomic symptoms'],
  box:null },

{ n:138, p:29, key:'A', keyName:null,
  stem:'Which of the following medications is most commonly used for long-term management of Tension-type headache?',
  opts:['Antidepressants','Opioids','Corticosteroids','Triptans'],
  box:null },

{ n:139, p:29, key:'C', keyName:null,
  stem:'Which of the following is the most common type of primary headache?',
  opts:['Migraine','Cluster headache','Tension-type headache','Trigeminal neuralgia'],
  box:null },

{ n:140, p:29, key:'B', keyName:null,
  stem:'A 30-year-old male presents with a dull, aching headache that has been bothering him for the past three days. The pain is bilateral, and feels like a "band" around his head. The patient reports muscle stiffness in the neck and shoulders. What is the 1st line approach?',
  opts:['Triptans','Lifestyle modifications','Opioid analgesics','Corticosteroids'],
  box:null }

];
