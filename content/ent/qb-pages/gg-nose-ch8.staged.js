/* Grade Gain — ENT QB.pdf — NOSE section, chapter 8: "Nasal septal diseases"
   Questions book pp.81-83 (PDF 90-92); answers book p.84 (PDF 93).
   Verbatim staging. Read 2026-08-11. ⚠️ READ AND STAGED — NOT YET WRITTEN.

   ── COUNT ────────────────────────────────────────────────────────────────
   23 printed, Q236 … Q258, against 22 promised. Fourteenth chapter running
   whose count is wrong upward. Page shape CLEAN for the third chapter in a
   row: all 23 keys on p.84, no question tail on it, no run-over. Book p.85
   opens "Minor Nasal Procedures" at Q259, and that chapter's whole question
   set (Q259-Q265, 7 promised) fits on that single page — confirmed by
   rendering one page past, as always.

   ── ⚠️ DEFECT: Q242 HAS TWO CORRECT ANSWERS ──────────────────────────────
   The key is a ("Caucasians … 92 % vs 40 %"), but option b — "DNS is more
   common in males than females" — is ALSO true, and `L24) diseases of the
   nasal septum.txt` states it: *"Extremly common 80 % of population, **more
   in males**."* Note also that the slide's own prevalence (80 %) matches
   NEITHER figure the bank offers (92 %/40 %, or 50 % in option c).
   Record, do not correct. Same shape as Nose ch.1 Q11/Q19 and ch.3 Q135.

   ── ⚠️ THE TYPE 1/2/3 CLASSIFICATION IS IN NO CACHED SLIDE ───────────────
   Q236-Q240 turn entirely on a three-type classification of nasal SEPTAL
   fracture by whether the line crosses the **osteocartilaginous junction**.
   `L24` gives only *"nature of injury / extent of deformity / pattern of
   fracture"* as its three axes and never names the types. **Five entries
   will rest on outside knowledge — tag them and add to §11.**
   The bank's own scheme, recoverable from its four keys read together:
     Type 1 — single line, does NOT cross the junction → stable, fewest complications
     Type 2 — single line, DOES cross the junction     → less stable
     Type 3 — multiple lines, may cross the junction   → least stable, most complications

   ── ⚠️ THE NUMBER-PRINTED-TWICE DEFECT MOVES TO THE ANSWER LIST ──────────
   New location for a known fault: **Q252-Q258 print their own number twice
   in the ANSWERS** ("252. 252.Correct answer: …"), seven in a row, while
   their question stems are clean. Every previous instance (Nose ch.3 ×3,
   ch.6 Q197, ch.7 Q220 and Q231) was in the QUESTION. Q265 on p.85 shows it
   again in a stem, so both forms are live.

   ── ⚠️ ANOTHER TRUE/FALSE ────────────────────────────────────────────────
   Q256 is a two-option true/false. Third non-four-option format after
   `entqb-nose6-198` (2) and `entqb-nose7-226` (3).

   ── FIGURES: TWO, BOTH PRINTED WITH THE QUESTION, BOTH CROPPABLE ─────────
   * Q250 book p.83 — coronal CT with a RED ARROW. The stem is "The most
     common complication in surgery of **this disease** is:" and the disease
     is named nowhere in the text: the answer box says only "The CT shows
     DNS". **LOAD-BEARING** → `q-gg-83a.jpg`, imgEssential.
     ⚠️ The arrow is part of the printed figure — do not crop it out.
   * Q258 book p.83 — endoscopic view of a septal perforation. The stem
     (recurrent epistaxis, crusting, whistling) is already diagnostic, so the
     figure is SUPPORTING → `q-gg-83b.jpg`.

   ── BOXES: 3 of 23 (~13 %) — Q247, Q248, Q250 ────────────────────────────

   ── SWEEP NOT YET RUN. Likely fold candidates to check first: ────────────
   septal haematoma/abscess cluster (`entep-nose-8`, `-25`, `-88`, `-101`,
   `entqb-nose7-210`); septal perforation (`entep-mfe5-40`); DNS symptoms and
   complications (`entep-nose-26`, `-77`, `-90`, `entep-mfe4-27`,
   `entqb-nose2-82`, `entqb-nose2-83`); Cottle test (`L24` names it — check
   `entep-nose-*` for a Cottle question); cacosmia (`entqb-nose3-131`,
   `entep-nose-44`).
*/

var GGN8_STAGED = [

{ n:236, stem:'Which of the following describes Type 1 nasal fracture?',
  options:['Multiple fractures crossing the osteocartilaginous junction',
           'A single fracture line not crossing the osteocartilaginous junction, considered stable',
           'Multiple fractures, with high rate of complications',
           'A single fracture line crossing the osteocartilaginous junction, less stable'],
  key:'B. A single fracture line not crossing the osteocartilaginous junction, considered stable', box:null },

{ n:237, stem:'Which type of nasal fracture has the highest rate of complications?',
  options:['Type 1','Type 2','Type 3','None of the above'], key:'C. Type 3', box:null },

{ n:238, stem:'Which type of nasal fracture has the lowest rate of complications?',
  options:['Type 1','Type 2','Type 3','None of the above'], key:'A. Type 1', box:null },

{ n:239, stem:'Which of the following is true regarding Type 2 nasal fractures?',
  options:['The fracture line does not cross the osteocartilaginous junction',
           'It is considered the most stable type',
           'The fracture line crosses the osteocartilaginous junction, making it less stable',
           'It has the highest rate of complications'],
  key:'C. The fracture line crosses the osteocartilaginous junction, making it less stable', box:null },

{ n:240, stem:'Which of the following is true about Type 3 nasal septal fractures?',
  options:['Involves a single fracture line, crossing the osteocartilaginous junction, with lower stability.',
           'The least stable type with multiple fractures, Can be crossing the osteocartilaginous junction.',
           'Stable with minimal complications.',
           'Involves a single fracture line that does not cross the osteocartilaginous junction.'],
  key:'B. The least stable type with multiple fractures, Can be crossing the osteocartilaginous junction.', box:null },

{ n:241, stem:'Which of the following is the most common cause of symptomatic nasal septal deviation?',
  options:['Congenital anomalies','Trauma','Infections','Aging'], key:'B. Trauma', box:null },

{ n:242, stem:'Which of the following is true about the prevalence of Deviated Nasal Septum (DNS)?',
  options:['Caucasians are more affected than Africans, with a prevalence of 92% vs. 40%.',
           'DNS is more common in males than females.',
           'DNS affects 50% of the population worldwide.',
           'DNS is more common in Africans than Caucasians.'],
  key:'A. Caucasians are more affected than Africans, with a prevalence of 92% vs. 40%.', box:null,
  defect:'TWO CORRECT ANSWERS — option b is true and is stated on L24 ("more in males"); the slide\'s own 80 % matches neither offered figure.' },

{ n:243, stem:'What is the most common type of Deviated Nasal Septum (DNS)?',
  options:['S-shaped','C-shaped','Nasal spur','Thickened septum'], key:'B. C-shaped', box:null },

{ n:244, stem:'All of the following types of DNS cause bilateral nasal obstruction except:',
  options:['C-shaped DNS with compensatory turbinate hypertrophy','S-shaped DNS','Nasal spur','Thickened septum'],
  key:'C. Nasal spur', box:null },

{ n:245, stem:'A patient presents with bilateral nasal obstruction. During the examination, you perform the Cottle test to assess the cause of obstruction. What does a positive Cottle test indicate?',
  options:['Hypertrophied inferior turbinates','Nasal valve collapse','Nasal polyps','Chronic rhinosinusitis'],
  key:'B. Nasal valve collapse', box:null },

{ n:246, stem:'A 22-year-old male presents to the emergency department after a recent altercation. He reports having been punched in the nose and is complaining of nasal pain, swelling, and difficulty breathing through his nose. He denies any loss of consciousness or other head injuries. When palpating the nasal area, you note a soft, fluctuating mass in the septum. What is the most likely diagnosis?',
  options:['Nasal fracture','Septal hematoma','Nasal polyp','Deviated nasal septum'],
  key:'B. Septal hematoma', box:null },

{ n:247, stem:"A 28-year-old male presents with a complaint of severe nasal pain, fever and progressive swelling of his nose over the past two days. He reports a history of nasal trauma from a sports injury one week ago, but he didn't seek medical attention at the time. Recently, he has noticed increased pain, nasal obstruction, and a persistent feeling of pressure in his nose. On examination, his nasal dorsum is swollen, and there is significant tenderness on palpation. The nasal mucosa is red and inflamed, and there is a fluctuant mass in the septum. What is the most likely diagnosis?",
  options:['Septal hematoma','Septal abscess','Acute bacterial rhinosinusitis','Nasal polyps'],
  key:'B. Septal abscess',
  box:'Any hematoma more than 3 days = infection Any infection = abscess = necrosis of cartilage' },

{ n:248, stem:'A 25-year-old male presents to the emergency room with a painful, swollen nose following a sports injury. He has difficulty breathing through one nostril, and on examination, there is a noticeable bluish swelling on the nasal septum. The patient is otherwise healthy, and there are no signs of infection. What is the most appropriate treatment in this patient?',
  options:['Observation and nasal decongestants','Drainage and compression with packing','Antibiotic therapy alone','Surgical resection of the nasal septum'],
  key:'B. Drainage and compression with packing',
  box:'It is a case of nasal hematoma' },

{ n:249, stem:'Most common cause of nasal septum perforation',
  options:['Iatrogenic after SMR operation.','Trauma','Cocaine addiction','Septal abscess'],
  key:'A. Iatrogenic after SMR operation.', box:null },

{ n:250, stem:'The most common complication in surgery of this disease is: [CORONAL CT WITH RED ARROW]',
  options:['Septal perforation','Septal fracture','Septal synechae','Septal abscess'],
  key:'A. Septal perforation', box:'The CT shows DNS',
  fig:'q-gg-83a', figEssential:true },

{ n:251, stem:'All of the following are complications of a septal abscess except:',
  options:['Septal perforation','Nasal deformity','Epistaxis','Meningitis'],
  key:'C. Epistaxis', box:null },

{ n:252, stem:'A patient with bilateral nasal obstruction that does not improve with corticosteroids and improves slightly with decongestants but worsens again. What is the possible diagnosis?',
  options:['Allergic rhinitis','Chronic rhinosinusitis','Deviated nasal septum','Acute rhinosinusitis'],
  key:'C. Deviated nasal septum', box:null },

{ n:253, stem:'All of the following are causes of septal perforation except:',
  options:['Chronic cocaine use','Nasal surgery','Fungal infections','Hypertension'],
  key:'D. Hypertension', box:null },

{ n:254, stem:'Nasal synechiae are:',
  options:['Adhesions between the nasal septum and turbinates','Infections of the nasal mucosa','Benign growths of the nasal cavity','Thickened nasal mucosa caused by chronic inflammation'],
  key:'A. Adhesions between the nasal septum and turbinates', box:null },

{ n:255, stem:'Which of the following can occur due to deviated nasal septum?',
  options:['Nasal obstruction','Epistaxis','Hyposmia','All of the above'],
  key:'D. All of the above', box:null },

{ n:256, stem:'IN anterior dislocation DNS, the septum is not curved',
  options:['True','False'], key:'A. True', box:null },

{ n:257, stem:'All of the following are caused by DNS except',
  options:['Cacosmia','Epistaxis','Sinusitis','Headache'],
  key:'A. cacosmia', box:null },

{ n:258, stem:'A patient complains of recurrent epistaxis, Crustations, whistling. The diagnosis is: [ENDOSCOPIC VIEW]',
  options:['Septal hematoma','Septal perforation','Septal synechae','Septal abscess'],
  key:'B. Septal perforation', box:null,
  fig:'q-gg-83b' }

];

/* Boxes printed: Q247, Q248, Q250 — 3 of 23, ~13 %.
   ⚠️ Q252-Q258 print their own number twice IN THE ANSWER LIST, seven in a row. */
