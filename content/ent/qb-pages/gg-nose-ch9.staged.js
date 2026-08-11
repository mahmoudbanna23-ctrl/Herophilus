/* Grade Gain — ENT QB.pdf — NOSE section, chapter 9: "Minor Nasal Procedures"
   Questions book p.85 (PDF 94); answers book p.86 (PDF 95).
   Verbatim staging. Read 2026-08-11.

   ── COUNT: 7 printed, Q259 … Q265, against 7 promised — EXACT ─────────────
   **The first exact count since Nose ch.1**, and only the third in eighteen
   chapters (29/29, 46/46, 7/7). The whole question set fits on one page and
   every key is on the next; no question tail on the answer page, no run-over.
   **Fourth clean sheet running.**

   ── ✅ THE NOSE SECTION CLOSES HERE ───────────────────────────────────────
   Book p.87 (PDF 96) opens a full-page banner reading **"CHAPTER 3: THROAT"**,
   the first topic is *"Anatomy & physiology of throat"*, and **the numbering
   RESTARTS AT 1**. That settles the prediction carried since Ear: the running
   header's **number is the section** and its **title is the topic**, and the
   numbers run continuously within a section and restart only at one.
   **⚠️ Throat ids therefore need their own section token — `entqb-thr1-1` —
   or they collide with Nose Q1 and Ear Q1.**

   ── BOXES: 2 of 7 (~29 %) — Q262 and Q265 ────────────────────────────────
   Q265's is the longest box in the Nose section and is unusually good: it
   explains septal perforation mechanically, in the first person.

   ── ⚠️ Q265 PRINTS ITS OWN NUMBER TWICE IN THE STEM ──────────────────────
   *"265. 265.Which of the following is a complication of SMR?"* — predicted
   from the ch.8 read. Both the stem form and the answer-list form of this
   fault are live in the same bank.

   ── ⚠️ Q259 SETTLES A RANKING THIS PROJECT GOT SLIGHTLY WRONG ────────────
   It keys **SMR first, cocaine abuse second** for the causes of septal
   perforation. `entqb-nose8-249` (written earlier today) keys SMR as commonest
   and its explanation called trauma *"the commonest non-surgical cause"* —
   **the bank's own later printing puts COCAINE second, ahead of trauma.**
   Correct that entry rather than leaving the two inconsistent. Fresh instance
   of the settled rule that **a later printing resolves an earlier judgement.**

   ── NO FIGURES ON EITHER PAGE ────────────────────────────────────────────
*/

var GGN9_STAGED = [

{ n:259, stem:'The most common cause of septal perforation is ________, while the second most common cause is ________.',
  options:["Cocaine abuse, Wegener's granulomatosis",
           'SMR, Cocaine abuse',
           'Tuberculosis, Syphilis',
           'Sarcoidosis, Trauma'],
  key:'B. SMR, Cocaine abuse', box:null,
  note:'Printed as a two-blank fill-in-the-blank; the options are PAIRS. Confirms and extends `entqb-nose8-249`.' },

{ n:260, stem:'Cobblestone appearance of the nasal mucosa (mulberry like) occurs in all except:',
  options:['Allergic rhinitis','Chronic rhinosinusitis','Vasomotor rhinitis','Atrophic rhinitis'],
  key:'D. Atrophic rhinitis', box:null },

{ n:261, stem:'Gold Standard Treatment for Deviated Nasal Septum (DNS) is:',
  options:['Nasal decongestants','Antihistamines','Septoplasty','Intranasal corticosteroids'],
  key:'C. Septoplasty', box:null },

{ n:262, stem:'The Gold Standard for Treatment of Turbinate Hypertrophy is:',
  options:['Total turbinectomy','Partial turbinectomy','Intranasal steroids','Laser ablation'],
  key:'B. Partial turbinectomy',
  box:'You must leave head of inferior turbinate and part of it to protect from secondary atrophic rhinitis (empty nose syndrome)' },

{ n:263, stem:'Over-resection of the inferior turbinate can lead to:',
  options:['Chronic rhinosinusitis','Secondary atrophic rhinitis','Allergic rhinitis','Nasal polyps'],
  key:'B. Secondary atrophic rhinitis', box:null },

{ n:264, stem:'Silver nitrate cautery in epistaxis, when applied to both sides of the nasal septum, can lead to:',
  options:['Nasal polyps','Septal perforation','Sinusitis','Nasal congestion'],
  key:'B. Septal perforation', box:null },

{ n:265, stem:'Which of the following is a complication of SMR?',
  options:['Septal perforation','Bad odor','Functional nasal obstruction','All of the above'],
  key:'D. All of the above',
  box:'The problem with this procedure is that it is mucosa on mucosa without cartilage in between so more liable for septal perforation→ so you must instruct the patient to maintain good hygiene to not get infection in the area devoid of cartilage\n▪ Another problem caused by septal perforation→ normally the septum makes air enter at both sides equally but in perforation the air enters through the perforation to both sides causing resistance to air in both sides → we call this functional nasal obstruction→ I converted laminar flow to turbulent flow leading to crustations, bleeding, bad odor and resistance to flow.',
  note:'⚠️ The printed stem reads "265. 265.Which of the following…" — the number appears twice; stripped.' }

];
