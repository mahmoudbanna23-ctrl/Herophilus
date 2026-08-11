/* Grade Gain — ENT QB.pdf — NOSE section, chapter 6: "Nasal fractures"
   Questions book pp.73-74 (PDF 82-83); answers book p.75 (PDF 84).
   Verbatim staging. Read 2026-08-11.

   ── COUNT ────────────────────────────────────────────────────────────────
   13 printed, Q191 … Q203, against 12 promised by the contents map.
   Twelfth chapter running whose count is wrong upward.

   ── PAGE SHAPE: CLEAN, FOR THE FIRST TIME IN THREE CHAPTERS ──────────────
   No question tail on the answer page and NO run-over: all thirteen keys sit
   on book p.75, and book p.76 opens "Sino-nasal masses" at Q204 with its own
   Questions banner. Rendering one page past p.75 is what confirmed that —
   the rule costs one page and settles the boundary every time.
   Answer-page overlap now stands at six of fifteen chapters; run-over at two
   of three since it was first looked for.

   ── RUNNING HEADER ───────────────────────────────────────────────────────
   "Chapter 2: Nasal Fractures" throughout, and "Chapter 2: Sino-nasal Masses"
   on p.76. Number = section, title = topic. Sixth confirmation for Nose.

   ── SHAPES THIS BANK HAS NOT USED BEFORE ─────────────────────────────────
   * Q198 is a TRUE/FALSE with only two options (a. True, b. False).
   * Q191 offers "Both" as c and "None of the above" as d, and keys "Both".
     First "Both" key in the Grade Gain material.

   ── DEFECTS ──────────────────────────────────────────────────────────────
   * Q197 prints its own number twice — "197. 197.Nasal fracture is best
     diagnosed by". Fourth occurrence (Nose ch.3 Q102, Q103, Q145). Strip it.
   * Q199's printed box is LOOSE ABOUT ITS OWN MECHANISM while right about the
     key. It says the septum deviates "toward the opposite side of the impact"
     and then that strikes come "from the right side", which read literally
     gives a LEFT deviation — the opposite of the key it is defending. The
     coherent reading is that a right-handed opponent's punch lands on the
     victim's LEFT nasal sidewall and drives the nose to the victim's right.
     Fourth instance of a box wrong about a supporting fact while right about
     the answer (§14k Q72, §14l Q96, §14n Q176).
   * Q202 and Q203 are a LINKED SET hanging off Q201's vignette. Q203 says
     "this patient's nasal fracture" outright; Q202 says "a patient's" but its
     30-minutes-and-no-swelling clause only makes sense against Q201's man.
     The deck is SHUFFLED — both stems repaired to carry the scenario.

   ── PAIRS THAT ARE NOT FOLDS ─────────────────────────────────────────────
   * Q196 ("most informative INVESTIGATION" → 3D CT) vs Q197 ("best DIAGNOSED
     by" → physical examination). The option sets differ by a REPLACED
     distractor (physical examination for ultrasound), so this is a new
     question by the settled test, and the two keys are both correct: the
     diagnosis is clinical, the most informative imaging is 3D CT. Hold both.
   * Q192 / Q193 / Q194 are three cuts at one fact and agree with each other:
     angulated ← lateral blow, depressed ← frontal blow; wing fracture ←
     lateral; open book ← severe frontal. No contradiction anywhere.
   * Q200 and Q203 agree on the six-month rule from two directions: Q200's man
     is 6 months post-injury and is operated now; Q203's is 1 month post-injury
     and waits a further 5. 1 + 5 = 6.

   ── GROUNDING ────────────────────────────────────────────────────────────
   `L24) diseases of the nasal septum.txt` is the chapter's slide and was read
   for the first time here. It carries: the aetiopathogenesis (RTA, sport;
   blows from front, side or below), the signs list (deformity hard to assess
   acutely, better after oedema settles, look for eye movements, palpate for
   deformity/deviation/crepitus/mobility/tenderness, look for septal haematoma
   and abscess), "Investigation: xray nasal bone", "In severe facial injury:
   CT Scan nose and PNS", "Most patients don't need any active treatment in
   mild condition just observation", closed reduction under GA or LA, the
   reduction principle (mobilise by increasing then decreasing the deformity),
   the instruments Freer / Ashe / Walsham forceps, splints, and open reduction
   (septorhinoplasty) for dislocation of the nasal dorsum with significant
   septal deformity.

   WHAT THE SLIDE DOES NOT CARRY, and must be filled and tagged:
   * the angulated/depressed and wing/open-book classification by blow;
   * 3D CT by name, and the clinical-diagnosis-first rule;
   * the medicolegal indication for a plain X-ray;
   * digital reduction, Pollock-Dingman elevator, and the early/intermediate/
     late timing algorithm (the ANSWER BOXES supply all of these — prefer the
     bank's own boxes to outside knowledge, per the standing rule);
   * neglected septal haematoma → abscess → cartilage necrosis → saddle nose.
     `L26) nasal masses.txt` defines septal haematoma but states no sequela;
     `L24` says only "look for septal hematoma, abscess".
   `L30) Rhinitis 2.txt` does carry Wegener's: "Ulceration of the septum with
   crusting and saddle nose are common nasal presentations."

   ── CHAPTER ──────────────────────────────────────────────────────────────
   All thirteen land in `ent-septum` ("Septum diseases and nasal trauma").
*/

var GGN6_STAGED = [

{ n:191, stem:'Saddle nose deformity occurs in which of the following conditions?',
  options:["Wegener's granulomatosis",'Neglected nasal hematoma(trauma)','Both','None of the above'],
  key:'C. both', box:null },

{ n:192, stem:'Which of the following statements is correct regarding nasal fractures?',
  options:['Angulated nasal fractures occur due to a frontal blow, while depressed fractures occur due to a lateral blow.',
           'Depressed nasal fractures occur due to a lateral blow, while angulated fractures occur due to a frontal blow.',
           'Angulated nasal fractures occur due to a lateral blow, while depressed fractures occur due to a frontal blow.',
           'Both angulated and depressed nasal fractures occur due to a lateral blow.'],
  key:'C. Angulated nasal fractures occur due to a lateral blow, while depressed fractures occur due to a frontal blow.', box:null },

{ n:193, stem:'A wing fracture of the nasal bones is typically caused by which type of blow?',
  options:['Lateral blow','Frontal blow','Direct frontal trauma','Blunt trauma'],
  key:'A. Lateral blow', box:null },

{ n:194, stem:'An open book fracture of the nasal bones is typically caused by which type of blow?',
  options:['Mild frontal blow','Moderate frontal blow','Severe frontal blow','Lateral blow'],
  key:'C. Severe frontal blow', box:null },

{ n:195, stem:'All are symptoms in nasal fracture except',
  options:['bloody rhinorrhea','purulent rhinorrhea','hyposmia','nasal obstruction'],
  key:'B-purulent rhinorrhea', box:null },

{ n:196, stem:'The most informative investigation for a nasal fracture is:',
  options:['3D CT','Plain X-ray','MRI','Ultrasound'],
  key:'A. 3D CT', box:null },

{ n:197, stem:'Nasal fracture is best diagnosed by',   /* printed "197. 197.Nasal fracture is best diagnosed by" */
  options:['Physical examination','3D CT scan','Plain X-ray','MRI'],
  key:'A. Physical examination', box:null },

{ n:198, stem:'In case of diagnosing a nasal fracture clinically, we should perform an X-ray for medicolegal purposes.',
  options:['True','False'],
  key:'A. True', box:null },

{ n:199, stem:'Boxing strikes are the most common cause of lateral nasal fractures. As a result, the nasal deviation is usually to which side?',
  options:['Left side','Right side','Bilateral deviation','No deviation'],
  key:'B. Right side',
  box:'Boxing strikes, due to the nature of the impact, often lead to lateral nasal fractures, with the deviation of the nasal septum typically occurring toward the opposite side of the impact. However, the right side is more commonly affected because the majority of people have a natural dominance of the right hand (right-handedness), which often leads to strikes coming from the right side, causing the deviation to the right.' },

{ n:200, stem:'A man with a nasal fracture since 6 months presenting with a deviation in the nasal axis and nasal obstruction, the most probable management is',
  options:['Digital reduction','Closed reduction','Rhinoplasty with osteotomy','Nasal reconstruction with a bilobed flap'],
  key:'C. Rhinoplasty with osteotomy',
  box:'Late: after two weeks from the injury: Wait 6 months then\no Rhinoplasty with Osteotomy (Open procedure under GA)\no Splint' },

{ n:201, stem:'A 28-year-old male presents to the emergency department with a complaint of a broken nose. He reports sustaining trauma to his face after being accidentally hit with an elbow while playing basketball. His nose is swollen and bruised, and he has difficulty breathing through his nostrils. There is a noticeable deformity with slight angulation of the nasal bridge. He was seen in the ER 12 hours ago and was given pain relief and ice packs for swelling. Now, he is asking about the next steps in managing his nasal fracture. What is the most appropriate treatment for his nasal fracture based on the timing of presentation?',
  options:['Immediate digital reduction','Conservative management for 1 w then closed reduction under GA','Immediate open reduction','No treatment required, follow up in 2 weeks'],
  key:'B. Conservative management for 1 w then closed reduction under GA',
  box:'Intermediate timing: within the first 2 weeks\n1- Drugs to decrease the edema and swelling "for 1 week"\n2- Procedures "loosening ", reduction by instruments (Using Walsham’s forceps or Pollock-Dingman elevator up to 2 weeks), closed procedure under General anesthesia.' },

{ n:202, stem:"What is the most appropriate treatment for a patient's nasal fracture, given that he presents within 30 minutes of injury and there is no visible swelling?",
  options:['Immediate digital reduction (within 30 minutes)','Conservative treatment with follow-up in 2 weeks','Closed reduction within 3-7 days','Open reduction surgery'],
  key:'A. Immediate digital reduction (within 30 minutes)',
  box:'- Early: within the first few hours.\n- Digital Reduction using a digit placed externally over the displaced fragment to bimanually reduce the bone. "Closed procedure with no anesthesia"\n- Intranasal packing is often needed to support these distal wing fractures.\n- Splint',
  linked:201 },

{ n:203, stem:"What is the most appropriate treatment for this patient's nasal fracture, given that he presents 1 month after the injury?",
  options:['Immediate closed reduction','Conservative management with nasal decongestants','Closed reduction after 1 week','Surgical correction (open reduction rhinoplasty with osteotomy) after 5 months'],
  key:'D. Surgical correction (open reduction rhinoplasty with osteotomy) after 5 months',
  box:null, linked:201 }

];

/* Boxes printed: Q199, Q200, Q201, Q202 — 4 of 13, ~31 %. */
