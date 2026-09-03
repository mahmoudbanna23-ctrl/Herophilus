/* ===========================================================================
   ENDPOINT — Pediatrics endpoint part1.pdf — SECTION 8 "Allergy", PART A.
   Verbatim staging record. Written 2026-09-03. Covers n=1..9 (pp.911-927,
   answered pages only). 1-up exported slide deck: one PDF page = one book
   page = the cited page number, offset zero. Pages pulled as native embedded
   JPEGs via tools\ep-index\pull.py. The OCR index under
   content\peds\qb-pages\ocr\ep1\ was NOT opened for transcription -- locate
   aid only, and cited where used.

   pp.905-909 checked by eye at the start of this pass: all five are prose
   preamble notes (Definitions; Mechanisms of Allergy; Hygiene Hypothesis /
   Clinical Evaluation; Food Allergy; Other Allergic Conditions), yellow
   highlighting on section headers only, no lettered options anywhere.
   Nothing staged from pp.905-909.

   Header extended page by page as staging proceeds.
   =========================================================================== */

{ n: 1, pr: 1, p: 911,
  key: 2,
  stem: 'Jonathan, aged 6 years, is brought to the Emergency Department after becoming unwell at a family party. He is only able to say one word at a time and indicates that he is struggling to breathe. He appears very anxious and has a raised itchy rash spreading from his face down to his chest. This has never happened before. His mother says he has asthma and uses a salbutamol inhaler for wheezy episodes.What is the most likely diagnosis?',
  opts: ['Acute asthma', 'Allergic reaction', 'Anaphylaxis', 'Idiopathic urticaria', 'Inhaled foreign body'],
  expl: 'Jonathan has multi-system involvement—respiratory distress, anxiety, and an urticarial rash—following likely allergen exposure, consistent with anaphylaxis. His underlying asthma also increases the risk of severe respiratory compromise in anaphylactic reactions.',
  note: 'Key highlighted: yellow box on "C. Anaphylaxis".' },
{ n: 2, pr: 2, p: 913,
  key: 1,
  stem: 'What is the first step in Jonathan\'s management?',
  opts: ['Administer a budesonide nebulizer', 'Assess his airway and give high-flow oxygen', 'Give intramuscular benzylpenicillin', 'Insert an intravenous cannula', 'Lie him flat'],
  expl: 'In anaphylaxis, prompt assessment of airway and oxygen delivery is essential to prevent respiratory failure. Oxygen is a priority before medications or IV access.',
  note: 'Key highlighted: yellow box on "B. Assess his airway and give high-flow oxygen". Continues the Jonathan vignette from n=1 (p.911).' },
{ n: 3, pr: 3, p: 915,
  key: 3,
  stem: 'Cordelia, a 5-month-old infant, was exclusively breastfed until yesterday when her mother introduced formula feeding. Soon after the feed, the baby developed a rash covering her body. She has no past medical history and is not on medications.What term best describes the rash?',
  opts: ['Annular', 'Maculopapular', 'Purpuric', 'Urticarial', 'Vesicular'],
  expl: 'Urticarial rashes are raised, itchy, and often appear suddenly, especially in allergic reactions such as cow\'s milk protein allergy following formula introduction.',
  note: 'Key highlighted: yellow box on "D. Urticarial".' },
{ n: 4, pr: 4, p: 917,
  key: 3,
  stem: 'Eddy, an 8-month-old infant, had diarrhea and vomiting with fever for three days, managed at home with oral rehydration. Vomiting resolved, but diarrhea has persisted for three weeks. Stool microscopy and culture are negative. He appears well, with a soft, mildly distended abdomen.\nWhat is the most likely cause of his prolonged diarrhea?',
  opts: ['Coeliac disease', 'Giardiasis', 'IgE-mediated cow\'s milk protein allergy', 'Non-allergic food hypersensitivity', 'Non-IgE-mediated cow\'s milk protein allergy'],
  expl: 'Post-infectious or non-allergic food hypersensitivity can cause prolonged diarrhea after gastroenteritis in infants, even in the absence of a specific pathogen or allergy.',
  note: 'Key highlighted: yellow box on "D. Non-allergic food hypersensitivity". Stem prints as two lines/paragraphs on the page; joined here with a literal newline.' },
{ n: 5, pr: 5, p: 919,
  key: 3,
  stem: 'A 4-year-old girl with a family history of atopy visits her GP. Her brother has a nut allergy and hay fever. Her mother wants skin-prick testing before introducing nuts.Which of the following statements about skin-prick testing is true?',
  opts: ['The severity of a reaction can be predicted by the size of the skin-prick reaction', 'It detects both IgE- and non-IgE-mediated allergies', 'It is more accurate than blinded food challenge', 'Positive (histamine) and negative (saline) controls should be used to ensure test validity', 'It tests for specific serum IgE levels'],
  expl: 'Skin-prick testing requires control samples to confirm that the test was performed and interpreted correctly. It only detects IgE-mediated allergy and cannot predict severity.',
  note: 'Key highlighted: yellow box on "D. Positive (histamine) and negative (saline) controls should be used to ensure test validity".' },
{ n: 6, pr: 6, p: 921,
  key: 0,
  stem: 'A 6-month-old boy presents with bloody diarrhea and failure to thrive. Examination is normal, and there is no vomiting. Cow\'s milk allergy is suspected.\nWhich of the following statements is true regarding food allergy?',
  opts: ['It is commonly non-IgE mediated', 'RAST testing will identify all food allergies accurately', 'A positive skin-prick test to soya confirms allergy', 'Elimination/reintroduction is unhelpful', 'Most children do not outgrow their allergies'],
  expl: 'In infants, cow\'s milk protein allergy often presents as a non-IgE-mediated condition with gastrointestinal symptoms. Skin tests and RAST may be negative, and elimination/reintroduction is the diagnostic gold standard.',
  note: 'Key highlighted: yellow box on "A. It is commonly non-IgE mediated". OCR index flagged this page options-differ, but all five options A-E read clearly and distinctly on the page image -- OCR artefact, no page defect.' },
{ n: 7, pr: 7, p: 923,
  key: 0,
  stem: 'A 5-month-old infant is exclusively breastfed until yesterday when her mother started her on formula as she is planning to go back to work. The mother noticed that her baby developed an urticarial rash all over her body very soon after the formula feed. What is the most likely mechanism of this baby\'s urticaria?',
  opts: ['IgE-mediated cow milk allergy', 'Non-IgE mediated cow milk allergy', 'Non-allergic hypersensitivity', 'Lactose intolerance', 'Immune complex-mediated hypersensitivity reaction'],
  expl: 'Immediate urticaria after exposure is due to IgE-mediated allergy. Non-IgE allergy causes delayed GI symptoms.',
  note: 'Key highlighted: yellow box on "A. IgE-mediated cow milk allergy". Same clinical scenario shape as n=3 (Cordelia, p.915, breastfed infant given formula, urticarial rash) but a distinct question asking for mechanism rather than rash description -- staged separately, not folded.' },
{ n: 8, pr: 8, p: 925,
  key: 2,
  stem: 'A 4-year-old child presents with vomiting and diarrhea after eating shellfish for the first time. Which of the following findings would most likely indicate a food allergy rather than food intolerance?',
  opts: ['Elevated blood glucose', 'Presence of eosinophils in stool', 'Positive skin prick test', 'Elevated serum amylase', 'Negative IgE levels'],
  expl: 'Food allergy is IgE-mediated and confirmed with positive allergy testing, unlike intolerance which does not involve the immune system.',
  note: 'Key highlighted: yellow box on "C. Positive skin prick test". OCR index flagged this page options-differ, but all five options A-E read clearly and distinctly on the page image -- OCR artefact, no page defect.' },
{ n: 9, pr: 9, p: 927,
  key: 1,
  stem: 'A 7-year-old girl has a history of severe allergic reactions to multiple foods. Which of the following is the most critical component of her management plan?',
  opts: ['Avoidance of relevant foods', 'Carrying an epinephrine auto-injector', 'Regular skin testing', 'Routine blood tests for IgE levels', 'Consultation with a dietitian'],
  expl: 'Avoidance is important, but accidental exposure can still occur. The most critical life-saving measure is prompt administration of epinephrine in anaphylaxis, so the child must always carry an auto-injector.',
  note: 'Key highlighted: yellow box on "B. Carrying an epinephrine auto-injector". OCR index flagged this page options-differ, but all five options A-E read clearly and distinctly on the page image -- OCR artefact, no page defect. This is the last of the nine answered pages in section 8 (pp.911-927).' }
