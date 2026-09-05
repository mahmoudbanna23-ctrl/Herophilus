/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part1.pdf - MODEL TRAINING EXAM 2, half A
   Rows n1..n8 (8 entries), ids pedep-tr2-1..pedep-tr2-8.
   The splicer strips this header.
   =========================================================================== */

{ id: 'pedep-tr2-1',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'infection-rash',
  stem: 'A 14-year-old girl awakens with a mild sore throat, low-grade fever, and a diffuse maculopapular rash. During the next 24 h, she develops tender swelling of her wrists and redness of her eyes. In addition, her physician notes mild tenderness and marked swelling of her posterior cervical and occipital lymph nodes. Four days after the onset of her illness, the rash has vanished.\nThe most likely diagnosis of this girl\'s condition is:',
  options: [
    'Rubella',
    'Roseola',
    'Erythema infectiosum',
    'Erythema multiforme'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Low-grade fever, sore throat, maculopapular rash with posterior cervical and occipital lymphadenopathy are classic. Rash disappears within 3-4 days.\n\n---\n\n`infectious diseases causing maculopapular rash.txt` names tender post-auricular, occipital and posterior cervical lymphadenopathy as rubella\'s hallmark prodromal feature, and lists mild conjunctivitis among the prodrome\'s own symptoms and arthralgia/arthritis of the small joints (up to 70% of affected adolescent females) as a recognised complication -- together accounting for this stem\'s added detail of tender wrist swelling and red eyes riding on top of the fever, sore throat and brief maculopapular rash. `pedep-mf3-8` prints the same case on a different menu: an identical stem core (14-year-old girl, low-grade fever, sore throat, maculopapular rash, posterior cervical/occipital nodes, rash gone by day four), but this exam expands the vignette with the arthritis-and-conjunctivitis detail and swaps two of the five live options for a different pair, so it stands as its own entry rather than a straight reprint.\n\n**Why the other three fail.** *Roseola* needs several days of high fever *before* the rash, with the rash appearing only once the fever breaks -- the opposite of this stem\'s concurrent low-grade fever and rash -- and it is a disease of infants and toddlers, not a 14-year-old. *Erythema infectiosum* produces a "slapped-cheek" facial flush before a lacy body rash, a different morphology and without rubella\'s posterior cervical/occipital node pattern. *Erythema multiforme* is a hypersensitivity reaction producing target-shaped lesions rather than a diffuse maculopapular eruption, and carries no link to posterior lymphadenopathy at all. Had the live sibling\'s two dropped distractors been offered here instead, *Measles* would be ruled out by its Koplik-spot/three-Cs prodrome and confluent cephalocaudal rash rather than rubella\'s brief, milder eruption, and *Chickenpox* would be ruled out by morphology alone, since its lesions are vesicular rather than maculopapular.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise posterior cervical/occipital lymphadenopathy with a brief self-resolving maculopapular rash, plus rubella\'s arthritis and conjunctivitis complications, against roseola\'s fever-then-rash sequence, erythema infectiosum\'s slapped-cheek pattern and erythema multiforme\'s target lesions.',
  source: 'Pediatrics endpoint part1.pdf p.1876'
},

{ id: 'pedep-tr2-2',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'growth-puberty',
  stem: 'A 14-year-old boy is evaluated for short stature. He has no significant past medical history and is considered otherwise healthy by his parents. He eats a normal diet and has regular meals. His height and weight have been consistently at the 5th percentile since early childhood. His physical examination is normal, with genitalia at Tanner stage 3.\nWhich of the following is the most likely laboratory finding for this boy?',
  options: [
    'Bone age that is equivalent to chronologic age',
    'Decreased complement C3 level',
    'Decreased serum albumin concentration',
    'Decreased thyroid stimulating hormone',
    'Increased serum creatinine concentration'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Consistent growth at 5th percentile with normal puberty = familial short stature, where bone age matches chronological age.\n\n---\n\n`13) Short stature.txt` works through the same picture as its own teaching case: an 11-year-old boy at the 3rd centile, normal growth velocity, short parents, normal proportions and normal puberty stage, resolved as "Familial short stature" with "Bone age = chronological age". This boy\'s steady 5th-percentile tracking since early childhood and normal Tanner stage 3 puberty match that case exactly. Steady percentile tracking, rather than crossing centiles downward over time, is what the lecture uses to separate a familial pattern from a pathological one.\n\n**Why each distractor fails.** *Decreased complement C3* points toward a glomerulonephritis -- nothing in this healthy boy\'s picture suggests renal or immune disease. *Decreased serum albumin* would flag malnutrition, liver disease or a protein-losing state, contradicted by his normal diet and regular meals. *Decreased thyroid stimulating hormone* points to hypothyroidism, which the same lecture files under endocrine causes of short stature that classically slow growth velocity and delay bone age -- this boy\'s growth has been steady, not decelerating, and no other hypothyroid feature is given. *Increased serum creatinine* would flag chronic kidney disease, another organic cause the lecture pairs with poor height velocity, again inconsistent with his steady growth and otherwise normal exam.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise steady percentile tracking with normal pubertal staging as familial short stature, where bone age equals chronological age, against the organic/endocrine causes (renal, hepatic/nutritional, thyroid) that would instead show a decelerating growth velocity.',
  source: 'Pediatrics endpoint part1.pdf p.1878'
},

{ id: 'pedep-tr2-3',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'nutrition',
  stem: 'The mother brought her 10-month-old son complaining that he is not thriving well for the last 4 months although he did not have any disease. You find his weight is just below -2 Z-score, his length is below -1 Z-score, and his head circumference is below 0-Z-score.\nYour correct comment will be as follows:',
  options: [
    'he has microcephaly',
    'he has short stature',
    'his feeding and weaning is proper',
    'he has chronic problem since birth',
    'he has recent improper feeding and weaning'
  ],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> Weight is most affected, length mildly affected, and head spared → indicates recent nutritional problem, not chronic disease.\n\n---\n\n*The ordering of which anthropometric parameter falls first in a nutritional insult (weight, then length, then head circumference) is standard growth-assessment teaching, not taken from the course material -- the cached `15.1) Faltering ﻿Growth.txt` and `16) P.E.M.txt` decks describe growth faltering\'s red flags and PEM\'s severity grading but do not teach the weight/length/head-circumference sequence used to time an insult.* Weight reflects fat and muscle mass, which depletes within weeks of inadequate intake; linear growth (length) only slows once a deficit has run for months; head circumference, driven by ongoing brain growth, is protected until malnutrition is both severe and prolonged. A weight clearly reduced (just below -2 Z), a length only mildly reduced (below -1 Z) and a head circumference still essentially average (below 0 Z) is exactly the pattern of an insult that started recently, over the four months this mother describes, rather than one present since birth.\n\n**Why each distractor fails.** *Microcephaly* requires a head circumference itself markedly reduced (conventionally below -2 Z), and here it sits close to average -- the head is the one parameter this vignette says is spared. *Short stature* is a diagnosis built on a length/height clearly below -2 Z sustained over time; a mild -1 Z reduction over only four months does not meet that bar. *"Feeding and weaning is proper"* is contradicted by the weight deficit itself -- an adequately fed infant would not be losing weight-for-age this way. *"Chronic problem since birth"* is contradicted both by the history (no disease, well until four months ago) and by the spared head circumference, which a truly longstanding, severe insult would eventually also drag down.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Use the relative depth of weight, length and head-circumference Z-scores to time a growth insult as recent (weight-led) rather than chronic (length- and eventually head-circumference-led), and to reject microcephaly or short stature where the deficits are too shallow to meet either definition.',
  source: 'Pediatrics endpoint part1.pdf p.1880'
},

{ id: 'pedep-tr2-4',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'infection-rash',
  stem: 'A 6-year-old boy presented with fever for the last 3 days, associated with headache and sore throat. He had frequent episodes of vomiting and abdominal pain. He appears ill, febrile, skin rash, with tender bilateral cervical lymphadenopathy, the tongue covered with heavy white coat with obvious red papillae protruded. The tonsils were red and edematous.\nThe most likely diagnosis is:',
  options: [
    'Measles',
    'Infectious Mononucleosis',
    'Scarlet fever',
    'Erythema infectiosum',
    'Rubella'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Fever, sore throat, abdominal pain, "strawberry tongue," sandpaper rash = streptococcal scarlet fever.\n\n---\n\n`infectious diseases causing maculopapular rash.txt` describes scarlet fever\'s prodrome exactly as printed here: abrupt high fever, sore throat with red/edematous tonsils, and abdominal pain/vomiting are called out explicitly as common in children, alongside the white-coated tongue with red papillae protruding through it ("White Strawberry Tongue") that later peels to a "Red Strawberry Tongue". The rash itself is a rough, sandpaper-textured eruption, and the tender cervical lymphadenopathy given here fits the streptococcal pharyngitis driving the whole picture.\n\n**Why the other four fail.** *Measles* is defined by a cough/coryza/conjunctivitis prodrome and pathognomonic Koplik spots, neither present here, and its rash is a confluent, cephalocaudal eruption rather than a strawberry tongue and sandpaper texture. *Infectious Mononucleosis* also causes fever, sore throat and lymphadenopathy, but the same lecture places its nodal swelling primarily in the posterior cervical chain rather than diffusely bilateral, its pharyngitis with exudative tonsils rather than a strawberry tongue, and its own spontaneous rash in only about 10% of cases -- none of which is this stem\'s picture. *Erythema infectiosum* produces a "slapped-cheek" facial flush, a different morphology entirely, with no strawberry tongue. *Rubella* causes only a mild, brief illness with posterior cervical/occipital nodes and a fine, quickly fading rash, not the abrupt high fever, tonsillar exudate and strawberry tongue described here.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise scarlet fever from an abrupt fever/sore throat, a strawberry tongue and a sandpaper rash, against measles\' Koplik-spot prodrome, mononucleosis\' posterior cervical nodes and exudative pharyngitis, erythema infectiosum\'s slapped-cheek pattern and rubella\'s milder posterior-node illness.',
  source: 'Pediatrics endpoint part1.pdf p.1882'
},

{ id: 'pedep-tr2-5',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'infection-rash',
  stem: 'A 3-month-old boy has a maculopapular rash that appeared on the face then spread all over the body. It has been preceded by very high fever for 3 days. Today he looks well active, afebrile with this rash. The most likely causative agent is:',
  options: [
    'Rubella virus',
    'Human herpes virus type 1',
    'Human herpes virus type 6',
    'Epstein–Barr virus',
    'Measles'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> High fever for 3 days then maculopapular rash after defervescence = roseola infantum.\n\n---\n\n`infectious diseases causing maculopapular rash.txt` names Human Herpesvirus 6 (and less often HHV-7) as roseola infantum\'s cause, and its whole entry turns on this exact sequence: an abrupt, very high fever lasting 3 to 5 days in a well-looking infant, ending in a "crisis" after which the rash appears -- "the rash and the fever rarely overlap." This 3-month-old\'s 3 days of high fever followed by an afebrile, active child with a maculopapular rash is that sequence precisely, and roseola is a disease of infants and toddlers, matching the age here.\n\n*One vignette detail sits oddly against the source: the same lecture describes roseola\'s rash as starting on the trunk and rarely affecting the face at all, where this stem has the rash appear on the face first. The diagnostic sequence (fever resolving, then rash) is unambiguous on its own and is what the answer turns on; the face-first spread does not match the lecture\'s own description of roseola\'s distribution.*\n\n**Why the other four fail.** *Rubella virus* would need a preceding prodrome and posterior cervical/occipital lymphadenopathy, neither given here, and its rash typically runs concurrent with a milder fever rather than only appearing once a high fever has broken. *Human herpesvirus type 1* (HSV-1) causes oral/facial vesicular disease (gingivostomatitis, cold sores), not a maculopapular exanthem following a febrile illness. *Epstein–Barr virus* causes infectious mononucleosis, a disease of older children and young adults with pharyngitis and lymphadenopathy, not an afebrile rash in a 3-month-old. *Measles* produces its rash while the fever is still high, alongside a cough/coryza/conjunctivitis prodrome and Koplik spots -- the opposite timing to this stem\'s fever-then-rash sequence.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Use the "fever resolves, then rash appears" sequence to identify HHV-6/roseola infantum, against rubella\'s concurrent fever-and-rash, HSV-1\'s vesicular disease, EBV\'s mononucleosis and measles\' rash-during-fever pattern.',
  source: 'Pediatrics endpoint part1.pdf p.1884'
},

{ id: 'pedep-tr2-6',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'gi-diarrhoea',
  stem: 'A 6-year-old girl presented with recurrent abdominal pain, bloating, and foul-smelling diarrhea. These symptoms exacerbate after consuming foods such as bread and pasta. Her pediatrician suspected her to have a celiac disease. Which of the following would be the most appropriate choice?',
  options: [
    'Testing serum antibodies for tissue transglutaminase (tTG-IgA)',
    'Performing upper gastrointestinal endoscopy with duodenal biopsy',
    'Conducting a complete blood count',
    'Examining stool for fecal fat content',
    'Carrying out a barium follow-through'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> The best first step for suspected celiac disease is checking tissue transglutaminase antibodies. Biopsy is confirmatory but not first.\n\n---\n\n*Coeliac disease\'s own diagnostic workup is not taught in the cached peds lectures -- grepping "celiac", "coeliac", "tTG", "transglutaminase" and "gluten" across the set returns only two passing mentions, both listing coeliac disease as a differential to consider for chronic diarrhoea (`23).1) Acute diarrhea.txt`) and for constipation (`23).2)Constipation.txt`), with no lecture teaching how it is actually confirmed. The reasoning below is standard paediatric gastroenterology practice, not taken from the course material.* Serum IgA anti-tissue transglutaminase (tTG-IgA) is the recommended first-line serologic screen for suspected coeliac disease: it is inexpensive, non-invasive and highly sensitive, and this girl\'s bread/pasta-triggered bloating and foul-smelling diarrhoea is exactly the picture it is used to screen. A positive screen is what then leads on to the confirmatory step.\n\n**Why each distractor fails.** *Upper GI endoscopy with duodenal biopsy* is the diagnostic gold standard, but it is confirmatory and invasive -- it follows a positive serology, it is not the first test reached for. *A complete blood count* may incidentally show iron-deficiency anaemia from malabsorption, but it is nonspecific and diagnoses nothing about coeliac disease itself. *Stool fecal fat* tests generalised fat malabsorption and would not distinguish coeliac disease from any other cause of steatorrhoea. *A barium follow-through* is an imaging study for structural bowel disease, not the serologic or histologic route used to diagnose an autoimmune enteropathy like coeliac disease.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Reach for tTG-IgA serology as the first-line screen for suspected coeliac disease, reserving duodenal biopsy for confirmation, and reject the nonspecific (CBC, faecal fat) and structural (barium) tests that diagnose nothing about coeliac disease itself.',
  source: 'Pediatrics endpoint part1.pdf p.1886'
},

{ id: 'pedep-tr2-7',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'nutrition-pem',
  stem: 'You are assessing child nutrition. Which of the following anthropometric measures is best used to assess the nutritional status of this child?',
  options: [
    'Head circumference',
    'Height for age',
    'Mid upper arm circumference',
    'Weight for age',
    'Weight for height'
  ],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> Best indicator of acute malnutrition because it shows wasting.\n\n---\n\n`16) P.E.M.txt` lists exactly this menu among its anthropometric assessment tools -- length/height, weight for age and weight for height, head/chest/abdominal circumference, and mid-arm circumference -- as the data a nutritional assessment is built from. *Ranking weight-for-height above mid-upper-arm circumference as the single best acute-malnutrition indicator is general paediatric nutrition teaching beyond what this deck ranks explicitly -- not taken from the course material.* Weight-for-height compares a child\'s current weight against the expected weight for their current height, so it reflects **wasting** -- a recent, acute loss of soft tissue -- independent of the child\'s age, which is what makes it the standard acute-malnutrition indicator.\n\n**Why each distractor fails.** *Head circumference* tracks brain growth and is one of the last parameters to fall in malnutrition, so it is a poor marker of current nutritional status. *Height for age* reflects **stunting**, the cumulative effect of chronic, longstanding undernutrition, not the acute picture the stem asks about. *Mid upper arm circumference* is a genuinely useful acute-wasting screen, especially in the field, but it is a screening proxy rather than the reference anthropometric standard weight-for-height provides. *Weight for age* is a composite measure that cannot separate a child who is wasted (acute) from one who is stunted but proportionate (chronic), so it does not specifically demonstrate wasting the way weight-for-height does.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify weight-for-height as the anthropometric indicator of acute wasting, distinct from height-for-age (chronic stunting), weight-for-age (a composite that cannot separate the two) and head circumference (a late-falling parameter).',
  source: 'Pediatrics endpoint part1.pdf p.1888'
},

{ id: 'pedep-tr2-8',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-hie',
  stem: 'At one minute of age, an infant exhibits central and peripheral cyanosis, floppy tone, gasping respiration, and a weak cry. The HR is 70 beats/min, and facial grimacing is observed but no crying is elicited by a nasal catheter.\nThe one-minute Apgar score for this neonate is:',
  options: [
    '2',
    '3',
    '4',
    '5',
    '6'
  ],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> 1.Appearance (color): Central + peripheral cyanosis → 0\n> 2.Pulse (HR): 70 bpm (<100) → 1\n> 3.Grimace (reflex): Grimace only, no cry → 1\n> 4.Activity (tone): Floppy → 0\n> 5.Respiration: Gasping, weak cry → 1\n> 👉 Total = 0 + 1 + 1 + 0 + 1 = 3\n>\n> Also printed alongside, a reference SCORE table (columns "0 points" / "1 point" / "2 points"):\n> Appearance (Skin color): Cyanotic / Pale all over | Peripheral cyanosis only | Pink\n> Pulse (Heart rate): 0 | <100 | 100-140\n> Grimace (Reflex irritability): No response to stimulation | Grimace or weak cry when stimulated | Cry when stimulated\n> Activity (Tone): Floppy | Some flexion | Well flexed and resisting extension\n> Respiration: Apneic | Slow, irregular breathing | Strong cry\n\n---\n\nThe five Apgar components are each scored 0/1/2 and summed *(the standard scoring table above is general obstetric/paediatric practice -- not taken from the course material; the cached decks mention Apgar only as a clinical marker, e.g. `12) HIE.txt`\'s depressed score at 5/10 minutes flagging birth asphyxia, without printing the point breakdown)*. Here: colour scores 0 (cyanotic centrally and peripherally, not even the acrocyanosis-only 1), heart rate scores 1 (70/min is below the 100/min cutoff for full marks), reflex scores 1 (grimace without a cry), tone scores 0 (floppy), and respiration scores 1 (gasping with a weak cry, short of the vigorous crying needed for 2). Summing 0 + 1 + 1 + 0 + 1 gives 3, matching both the box\'s own worked arithmetic and the highlighted key.\n\n**Why each wrong option is wrong.** A score of 2 would require losing a point on a fourth component beyond the three already lost (colour, tone) and the two partial credits (pulse, reflex) -- there is no further deduction to make from this description. Scores of 4, 5 or 6 would each require full marks somewhere this infant does not have them: he is neither pink (colour = 2) nor actively crying (reflex or respiration = 2), so nothing here supports a total above 3.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Score each of the five Apgar components (colour, heart rate, reflex irritability, tone, respiration) from a clinical description and sum them correctly, distinguishing a component scoring 0 from one scoring a partial 1.',
  source: 'Pediatrics endpoint part1.pdf p.1890'
}
