/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part2.pdf - SECTION 4: "Hematological Disorders"
   Verbatim staging record. PDF pages 245-451; PDF page = printed page, offset zero.
   Merged from endpoint-p2-s04-haematology.part-A.js + endpoint-p2-s04-haematology.part-B.js + endpoint-p2-s04-haematology.part-C.js + endpoint-p2-s04-haematology.part-D.js by merge-parts-ep2.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP2_S04_STAGED = [

/* endpoint PART 2, section 4 "Hematological Disorders" (banner p.245), PART A.
   Range assigned: PDF pp.255-308. Chapters: haematology / haem-bleeding (drafting pass assigns).
   Staged per tools/bank-harness/pd-ep2-staging-brief.md. OCR NOT opened during this pass.

   Page-kind map for this range (measured from images, not from the OCR index handed to me):
     245-254 notes (out of my range, not read) · 255 CONTENT SLIDE (see below) ·
     256 CONTENT SLIDE · 257 CONTENT SLIDE · 258-266 notes (out of range, not read) ·
     267 unanswered q1 · 268 answered q1 · then clean unanswered/answered alternation through 308.

   ALTERNATION-BREAK FINDING, pp.255-257: three consecutive pages the OCR index calls "answered"
   with no unanswered twin between them. Read all three whole. They are NOT questions -- they are
   lettered content/summary slides (same signature as section 3's four lettered summary slides):
     p.255 "4. Hemoglobinopathies / A. Beta-Thalassemia" -- Cause/Types/Clinical Features/
       Complications/Diagnosis/Management bullet slide, header line highlighted yellow.
     p.256 "B. Alpha-Thalassemia" -- Cause/Types bullet slide, header line highlighted yellow.
     p.257 "C. Sickle Cell Disease (SCD)" -- Cause/Inheritance/Types/Pathogenesis/Exacerbating
       Factors bullet slide plus a highlighted "Clinical Features:" sub-header; no options, no
       question stem, no highlighted answer choice anywhere on any of the three pages.
   Not staged as questions. The detector reads a highlighted heading as an "answered" signature;
   there is no printed question or key on any of these three pages.

   Question-number walk (pr = printed number, page by page):
     n1 pr1 p268 ... n21 pr21 p308. RANGE CLOSED at p.308, part A's full assigned range (255-308)
     now staged (21 questions, n1-n21, pp.268-308).

   BOUNDARY PROOF off the one-past page, read 2026-09-04: p.309 is a single full-width bordered
   teaching paragraph, no stem/options/key -- "Iron deficiency is the most common cause of anemia
   in toddlers and is often related to excessive cow's milk intake, which is low in iron. Dietary
   history is crucial to identify insufficient iron-rich foods." This CONFIRMS the prior report
   that p.309 is an unrelated teaching slide on iron deficiency -- read fresh here, not taken on
   trust. It is NOT staged (out of range, and not a question). p.310 is the unanswered twin of a
   NEW question ("22. Tia is a 4-year-old Caucasian girl..."), and p.311 is that twin's answered
   printing (option C "Hereditary spherocytosis" highlighted) -- confirms p.311 is the first
   answered page of part B's range, per the task prompt. Nothing past p.308 is staged in this file.

   n:21 (p.308) prints NO explanation box -- box test per brief §3a run: p.309 opened and found to
   be the teaching slide above, not an overflow box for n:21 (different box shape/position/font
   from every real overflow box in this range; see n:21's note). expl:'' for n:21 is correct as the
   page itself prints no box.

   n:6 (p.278) and n:7 (p.280) notes were corrected 2026-09-04 per an audit: n:6's note had been
   contaminated with n:7's p.279/280 content by a copy error (key:1 itself was always right -- p.278
   highlights option B "Fanconi anemia" -- only the prose was wrong, now rewritten). n:7's flat
   "5.0×109/L" / "80×109/L" was re-confirmed at 300 dpi (ep2-stage\\p-0279.jpg / p-0280.jpg): the
   book itself prints it flat, no superscript anywhere on either page -- staged exactly as printed,
   note updated to record the 300 dpi confirmation. */

{ n:1, pr:1, p:268, key:2,
  stem:'Microcytes are seen in blood films of which of the following conditions?',
  opts:['Aplastic anemia','Liver disease','Anemia of chronic disease','Down syndrome','Hypothyroidism'],
  expl:'Microcytes (small red blood cells) are commonly seen in iron deficiency and anemia of chronic disease due to impaired iron utilization. Other listed conditions typically show normocytic or macrocytic anemia.',
  note:'Twin checked (p.267, unanswered, identical stem/options). Option C "Anemia of chronic disease" is highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim.' },

{ n:2, pr:2, p:270, key:3,
  stem:'Basophil stippling is seen in blood films of which of the following conditions?',
  opts:['Hereditary spherocytosis','Aplastic anemia','Liver disease','Thalassemia','Xerocytosis'],
  expl:'Basophilic stippling refers to aggregated ribosomes in red cells and is characteristic of thalassemia, lead poisoning, and some anemias. It is not typically seen in hereditary spherocytosis or aplastic anemia.',
  note:'Twin checked (p.269, unanswered, identical stem/options). Option D "Thalassemia" is highlighted yellow and underlined -> key=3. Printed box present, transcribed verbatim.' },

{ n:3, pr:3, p:272, key:0,
  stem:'A 4-month-old infant presents with progressive pallor,microcephaly, snub nose, high-arched palate, hypertelorism, low-set ears, and triphalangeal thumb. Peripheral blood smear shows macrocytic RBCs with low reticulocyte count. Which of the following is the MOST likely diagnosis ?',
  opts:['Diamond-Blackfan anemia','Fanconi anemia','Shwachman-Diamond syndrome','Pearson marrow-pancreas syndrome','Aase syndrome'],
  expl:'Diamond-Blackfan anemia presents in infancy with macrocytic anemia, low reticulocytes, and congenital anomalies like craniofacial defects and thumb abnormalities.',
  note:'Twin checked (p.271, unanswered, identical stem/options; comma after "pallor" with no space is printed on both, reproduced verbatim). Option A "Diamond-Blackfan anemia" is highlighted yellow and underlined -> key=0. Printed box present, transcribed verbatim.' },

{ n:4, pr:4, p:274, key:1,
  stem:'Which of the following is the mainstay therapy of Diamond-Blackfan anemia?',
  opts:['Chronic red cell transfusions','Corticosteroids','Hematopoietic stem cell transplantation','Hydroxyurea','splenectomy'],
  expl:'Corticosteroids are first-line treatment for Diamond-Blackfan anemia, improving red cell production. Some patients may also require chronic transfusions or stem cell transplant.',
  note:'Twin checked (p.273, unanswered, identical stem/options; option E printed lowercase "splenectomy" on both, reproduced verbatim). Option B "Corticosteroids" is highlighted yellow and underlined -> key=1. Printed box present, transcribed verbatim.' },

{ n:5, pr:5, p:276, key:3,
  stem:'Which of the following RBC indices is MOST helpful in the diagnosis of hereditary spherocytosis?',
  opts:['RBC count','MCV','MCH','MCHC','RDW'],
  expl:'In hereditary spherocytosis, MCHC (mean corpuscular hemoglobin concentration) is elevated due to reduced membrane surface area and cell dehydration.',
  note:'Twin checked (p.275, unanswered, identical stem/options). Option D "MCHC" is highlighted yellow and underlined -> key=3. Printed box present, transcribed verbatim.' },

{ n:6, pr:6, p:278, key:1,
  stem:'What is the MOST common inherited pancytopenia syndrome?',
  opts:['Dyskeratosis congenita','Fanconi anemia','Shwachman-Diamond syndrome','Diamond-Blackfan anemia','Congenital amegakaryocytic thrombocytopenia'],
  expl:'Fanconi anemia is the most common inherited cause of pancytopenia, often presenting with physical anomalies and progressive bone marrow failure.',
  note:'RE-READ 2026-09-04 to settle a contaminated note (this entry\'s note previously carried n:7\'s p.279/280 bruising-case text by copy error). Re-verified fresh against the images: p.277 (unanswered twin) and p.278 (answered) both print stem "What is the MOST common inherited pancytopenia syndrome?" with options A.Dyskeratosis congenita, B.Fanconi anemia, C.Shwachman-Diamond syndrome, D.Diamond-Blackfan anemia, E.Congenital amegakaryocytic thrombocytopenia -- identical on both pages, no numerals in this stem. On p.278, option B "Fanconi anemia" is highlighted yellow, bold and underlined -> key=1 (letter B, opts[1]). This CONFIRMS key:1 was already correct; expl already agreed. The prior note\'s "Option D \\"Fanconi anemia\\"... key=3" and its numeral/twin-bruising text did not belong to this entry at all -- they are n:7\'s content (p.279/280) and have been removed here, not merely commented on.' },

{ n:7, pr:7, p:280, key:3,
  stem:'A 4-year-old male develops recurrent epistaxis and easy bruising.. The patient was the first child of unrelated healthy parents born after 41 weeks of pregnancy. Physical examination of the patient reveal short stature, clinodactyly with brachy mesophalangia on bilateral 5th fingers, multiple café-au-lait spots on both thighs and right buttock. He has no other abnormalities. His initial complete blood cell count results are as follows: white blood cell, 5.0×109/L; hemoglobin 9.5 g/dL; platelets 80×109/L.\n\nWhich of the following is the MOST likely diagnosis ?',
  opts:['megaloblastic anemia','Pearson syndrome','congenital Amegakaryocytic Thrombocytopenia','Fanconi anemia','Diamond-Blackfan anemia'],
  expl:'The combination of short stature, café-au-lait spots, congenital anomalies, and pancytopenia suggests Fanconi anemia, a DNA repair disorder.',
  note:'Twin checked (p.279, unanswered, identical stem/options, verbatim including double period after "bruising.."). Option D "Fanconi anemia" is highlighted yellow, bold and underlined -> key=3. Printed box present, transcribed verbatim. FLAGGED NUMERAL/UNIT: stem prints "5.0×109/L" and "80×109/L" with no superscript on the exponent. CONFIRMED AT 300 DPI 2026-09-04 (ep2-stage\\p-0280.jpg and ep2-stage\\p-0279.jpg, both re-rendered independently of the native 800x450 extraction): the "109" is the same size and baseline as the surrounding text on both the answered and unanswered page, no superscript glyph anywhere. This is the book\'s own printing, not an artefact of the low-res native image or of OCR -- staged exactly as printed, most likely intended as x10^9/L (standard WBC/platelet units). Note that n:6 (p.278) prints no numerals at all -- its stem is unrelated to this CBC; an earlier version of n:6\'s note wrongly carried this same flag, now corrected there.' },

{ n:8, pr:8, p:282, key:1,
  stem:'What is the MOST common hematological abnormality in Shwachman Diamond syndrome?',
  opts:['Anemia','Neutropenia','Lymphopenia','Thrombocytopenia','Pancytopenia'],
  expl:'Shwachman-Diamond syndrome typically presents with neutropenia, exocrine pancreatic insufficiency, and skeletal abnormalities.',
  note:'Twin checked (p.281, unanswered, identical stem/options). Option B "Neutropenia" is highlighted yellow, bold and underlined -> key=1. Printed box present, transcribed verbatim. No numerals in question.' },

{ n:9, pr:9, p:284, key:0,
  stem:'What is the MOST common non-hematological abnormality in Shwachman Diamond syndrome?',
  opts:['Pancreatic insufficiency','Elevated transaminase','Skeletal abnormality','Short stature','Rib cage abnormality'],
  expl:'Pancreatic insufficiency is a hallmark of Shwachman-Diamond syndrome, often leading to malabsorption, steatorrhea, and failure to thrive.',
  note:'Twin checked (p.283, unanswered, identical stem/options). Option A "Pancreatic insufficiency" is highlighted yellow, bold and underlined -> key=0. Printed box present, transcribed verbatim. No numerals in question.' },

{ n:10, pr:10, p:286, key:2,
  stem:'A 24-month-old girl was admitted to the hospital because of steatorrhea and short stature. At the age of three months, she presented with convulsions and neutropenia. Since then, she has had frequent purulent otitis media and pneumonias. She also has angular stomatitis and multiple dental caries. Laboratory results were as follows: Hemoglobin: 11.3 g/dL ,Leukocytes: 3,000/uL (Neutrophils 17.3%, Lymphocytes 59.5%, Monocytes 22.9%, Basophils 0.3%, Eosinophils 0% , Platelets: 152,000/uL\n\nWhich of the following is the MOST likely diagnosis ?',
  opts:['Cystic fibrosis','Primary lactase deficiency','Shwachman-Diamond syndrome','Alpha-1 antitrypsin deficiency'],
  expl:'This syndrome combines pancreatic insufficiency, neutropenia, recurrent infections, and poor growth, as seen in the described case.',
  note:'Twin checked (p.285, unanswered, identical stem/options/labs). Only 4 options printed (A-D), no E, on both pages -- not a transcription drop. Option C "Shwachman-Diamond syndrome" is highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim. Numerals checked against both pages, identical: Hgb 11.3 g/dL, Leukocytes 3,000/uL, Neutrophils 17.3%, Lymphocytes 59.5%, Monocytes 22.9%, Basophils 0.3%, Eosinophils 0%, Platelets 152,000/uL -- no exponents/superscripts involved, plain counts, legible at native 800x450 on both pages. Stem transcribed with plain "uL" (micro-litre) rather than the printed micro-sign glyph, and the small red bullet glyph printed before "Hemoglobin" is dropped -- both are typographic symbols, not clinical content; flagged here as a transcription simplification rather than left silent.' },

{ n:11, pr:11, p:288, key:1,
  stem:'A 3-year-old boy presents with a sudden onset of generalized petechiae and purpura for the past two days. He is otherwise healthy and playful. His parents deny any similar past episodes or family history of bleeding disorders. On examination, he is active with normal vital signs. There are no abnormalities apart from the skin lesions. Cardiac and respiratory examinations are unremarkable, and there is no hepatosplenomegaly. What is the most likely diagnosis?',
  opts:['Aplastic anemia','Immune thrombocytopenia','Acute leukemia','von Willebrand disease'],
  expl:'ITP often presents after a viral infection with isolated thrombocytopenia and mucocutaneous bleeding, without systemic illness or organomegaly.',
  note:'Twin checked (p.287, unanswered, identical stem/options). Only 4 options printed (A-D), no E, on both pages. Option B "Immune thrombocytopenia" is highlighted yellow, bold and underlined -> key=1. Printed box present, transcribed verbatim. No numerals in question. This is the first haem-bleeding-topic question in my range (ITP); flagging chapter transition for the drafting pass per brief -- staging does not assign chapters.' },

{ n:12, pr:12, p:290, key:1,
  stem:'Which of the following lab tests results is worrisome in immune thrombocytopenia and should raise the suspicion of another diagnosis?',
  opts:['A platelet count of 1.000 /mm3','A WBCs count of 2.500 /mm3','A hemoglobin count of 8.0 gm/dl','A bone marrow examination showing increase number of  megakaryocytes','A negative Coombs test'],
  expl:'Leukopenia suggests bone marrow involvement and raises concern for leukemia or aplastic anemia rather than isolated ITP.',
  note:'Twin checked (p.289, unanswered, identical stem/options, including the double space before "megakaryocytes" in option D, reproduced verbatim). Option B "A WBCs count of 2.500 /mm3" is highlighted yellow, bold and underlined -> key=1. Printed box present, transcribed verbatim. FLAGGED NUMERAL/UNIT: "1.000" and "2.500" use a period as thousands separator (=1,000 and 2,500, European/decimal-comma convention) -- staged exactly as printed, not converted. FLAGGED NUMERAL/UNIT: "/mm3" prints a PLAIN inline "3", not a superscript -- confirmed at native 800x450 AND at a 300 dpi crop of p.290 (ep2-stage\\p-0290.jpg): the "3" is the same size and baseline as the surrounding text on both options A and B, no superscript glyph anywhere on the page. This is the source slide itself, not an OCR reading -- staged as printed ("mm3"), most likely intended as mm^3.' },

{ n:13, pr:13, p:292, key:0,
  stem:'Autoimmune screen, in the context of immune thrombocytopenia, is required in which of the following clinical conditions?',
  opts:['Five-year-old girl with long history of skin and mucosal bleeding lasting more than one year','Acute history of severe profound epistaxis, heralding possible need for blood transfusion','Acute presentation of intracranial hemorrhage in a background of two weeks skin bleeding that wasn’t without a prior problem','Periorbital bleeding suggesting basal skull fracture after road traffic accident in a newly diagnosed immune thrombocytopenia with one month of the accident'],
  expl:'Chronic ITP with persistent bleeding over a year warrants evaluation for underlying autoimmune diseases such as lupus.',
  note:'Twin checked (p.291, unanswered, identical stem/options, including the curly apostrophe in "wasn’t", reproduced verbatim). Only 4 options printed (A-D), no E, on both pages. Option A "Five-year-old girl with long history..." is highlighted yellow, bold and underlined -> key=0. Printed box present, transcribed verbatim. No numerals in question.' },

{ n:14, pr:14, p:294, key:1,
  stem:'Which of the following is a TRUE fact regarding therapy of idiopathic immune thrombocytopenia?',
  opts:['The majority of patient have moderate to severe symptoms of bleeding','Early therapy does not prevent intracranial hemorrhage','Initiating early therapy affect the outcome of the disease','Antiplatelets antibodies bind to autologous rather than transfused platelets','Aggressive way of management is preferable so as to control bleeding'],
  expl:'Most ITP cases are mild and self-limited; early treatment does not necessarily prevent rare complications like intracranial bleeding.',
  note:'Twin checked (p.293, unanswered, identical stem/options). Option B "Early therapy does not prevent intracranial hemorrhage" is highlighted yellow, bold and underlined -> key=1. Printed box present, transcribed verbatim. No numerals in question.' },

{ n:15, pr:15, p:296, key:1,
  stem:'What is the BEST curative option for a chronic immune thrombocytopenia in a 10-year-old male child, with recurrent epistaxis and gum bleeding that impairs his daily active life style?',
  opts:['Observation','Splenectomy','IVIG','Rituximab','Thrombopoietin receptor agonist'],
  expl:'For chronic, symptomatic ITP unresponsive to medical therapy, splenectomy can offer a curative option by removing the primary site of platelet destruction.',
  note:'Twin checked (p.295, unanswered, identical stem/options). Option B "Splenectomy" is highlighted yellow, bold and underlined -> key=1. Printed box present, transcribed verbatim. No numerals in question.' },

{ n:16, pr:16, p:298, key:3,
  stem:'Splenectomy in Immune thrombocytopenia (ITP) is considered in which of the following conditions?',
  opts:['A two-year old boy with newly diagnosed ITP whose bleeding symptoms failed to be ameliorated with steroids and IVIG','A ten-year old girl with chronic ITP with recurrent symptoms of skin bleeding that is diffuse, not responding to steroids, rituximab and other  medical therapy.','A six-year old boy with acute ITP developed intracranial hemorrhage from a road traffic accident who is hemodynamically stable and his bleeding is controlled with IVIG and steroids','A thirteen-year old girl with chronic ITP and severe vaginal bleeding that necessitated blood transfusion and failed to respond to steroids, IVIG, rituximab and contraceptive therapy.'],
  expl:'Splenectomy is indicated in refractory chronic ITP with severe bleeding, especially after failure of steroids, IVIG, and rituximab.',
  note:'Twin checked (p.297, unanswered, identical stem/options -- line-wrap differs between pages but text is character-identical, including the double space before "medical therapy" in option B, reproduced verbatim). Only 4 options printed (A-D), no E, on both pages. Option D "A thirteen-year old girl..." is highlighted yellow, bold and underlined -> key=3. Printed box present, transcribed verbatim. No numerals in question.' },

{ n:17, pr:17, p:300, key:1,
  stem:'A 2-year-old boy has had pallor since the age of 6 months and received a blood transfusion one month ago. There is a history of a similar illness in an older sibling. On examination, the child has pallor, jaundice, frontal bossing, and hepatosplenomegaly.\n\nWhat is the most likely diagnosis?',
  opts:['Iron deficiency anemia','Beta thalassemia','Peutz-Jeghers syndrome','Sickle cell anemia','Dyskeratosis congenita'],
  expl:'Chronic hemolysis, transfusion dependence, family history, and skeletal changes like frontal bossing point to beta thalassemia major.',
  note:'Twin checked (p.299, unanswered, identical stem/options). Option b) "Beta thalassemia" is highlighted yellow, bold and underlined -> key=1. Printed box present, transcribed verbatim. No numerals in question. Options printed lowercase a)-e) on this page (unlike A.-E. on earlier pages in this range); reproduced as printed.' },

{ n:18, pr:18, p:302, key:0,
  stem:'A 9-month-old boy presents with progressive lethargy, irritability, and pallor since the age of 6 months. He is exclusively breastfed. Laboratory findings reveal:\nHemoglobin: 7 g/dL   MCV: 58 fL   MCH: 19.4 pg/cell\nOsmotic fragility: Normal\n\nWhat is the most likely diagnosis?',
  opts:['Iron deficiency anemia','Acute leukemia','Megaloblastic anemia','Hereditary spherocytosis','G6PD deficiency'],
  expl:'Exclusively breastfed infants may become iron-deficient by 6 months, leading to microcytic hypochromic anemia with low MCV and MCH.',
  note:'Twin checked (p.301, unanswered, identical stem/options/labs). Option a) "Iron deficiency anemia" is highlighted yellow, bold and underlined -> key=0. Printed box present, transcribed verbatim. Numerals plain and legible at native 800x450 on both pages, no exponents involved: Hgb 7 g/dL, MCV 58 fL, MCH 19.4 pg/cell. Three red bullet glyphs printed before Hemoglobin/MCV/MCH and one before Osmotic fragility line are dropped in stem (typographic, not clinical content), reproduced as plain text on separate lines.' },

{ n:19, pr:19, p:304, key:2,
  stem:'A child develops severe bleeding following a tonsillectomy. Laboratory tests show a prolonged bleeding time and a prolonged partial thromboplastin time (PTT).\n\nWhat is the most likely diagnosis?',
  opts:['Hemophilia A','Hemophilia B','Von Willebrand disease','Factor I deficiency'],
  expl:'This condition causes both platelet function defect (↑ bleeding time) and factor VIII deficiency (↑ PTT), and often presents with mucosal bleeding.',
  note:'Twin checked (p.303, unanswered, identical stem/options). Only 4 options printed (a-d), no e, on both pages. Option c) "Von Willebrand disease" is highlighted yellow, bold and underlined -> key=2. Printed box present, transcribed verbatim, including the printed up-arrow glyphs before "bleeding time" and "PTT" (reproduced as printed). No numerals in question.' },

{ n:20, pr:20, p:306, key:4,
  stem:'Frightened parents bring their 2-year-old son with a 2-week history of an upper respiratory tract infection. Yesterday, he developed bruises on his trunk and generalized petechiae, more prominent on the legs. On physical examination, he appears well, with no lymphadenopathy or hepatosplenomegaly. Laboratory testing shows normal hemoglobin, white blood cell count, and differential. The platelet count is 20,000/mm³.Which of the following is the most likely diagnosis?',
  opts:['Thrombotic thrombocytopenic purpura','Von Willebrand disease','Acute lymphoblastic leukemia','Aplastic anemia','Immune thrombocytopenic purpura'],
  expl:'A typical presentation of ITP is isolated thrombocytopenia following a viral illness, with a well child and no organomegaly or systemic signs.',
  note:'Twin checked (p.305, unanswered, identical stem/options, including missing space before "Which" after "20,000/mm³." reproduced verbatim). Option e) "Immune thrombocytopenic purpura" is highlighted yellow, bold and underlined -> key=4. Printed box present, transcribed verbatim. "20,000/mm³" prints a TRUE superscript "3" glyph on both pages at native 800x450 -- not flat, no exponent concern here.' },

{ n:21, pr:21, p:308, key:2,
  stem:'A 1-year-old boy is noted to be pale during a routine check-up. He is on the 75th percentile for weight and the 25th percentile for length. Physical examination is normal except for pallor. His hematocrit is 24%. One question could help identify the most common cause of his presentation.\n\nWhich of the following questions is most likely to reveal the cause of his anemia?',
  opts:['Did the child receive phototherapy for neonatal jaundice?','Has anyone in the family received a blood transfusion?',"What is the child's usual daily diet?",'Is the child on any medications?','What is the pattern and appearance of his bowel movements?'],
  expl:'',
  note:'Twin checked (p.307, unanswered, identical stem/options, including the curly apostrophe in "child\'s", reproduced verbatim). Option c) "What is the child\'s usual daily diet?" is highlighted yellow, bold and underlined -> key=2. NO explanation box printed on this page. Per brief §3a box test, opened the next page (p.309) before moving on: p.309 carries a single full-width bordered teaching paragraph ("Iron deficiency is the most common cause of anemia in toddlers... Dietary history is crucial...") -- NOT an overflow answer box. It differs structurally from every other explanation box in this range (those print as a SMALL box beside/below the options, in a smaller font); p.309\'s box spans nearly the full slide width in body-text size, and the page carries no stem, no options and no highlighted key. Thematically adjacent to this question\'s answer (diet history -> iron deficiency) but not formatted or positioned as this entry\'s box -- flagged for the drafting pass to weigh, not folded in here. Confirms the prior read of p.309 as an unrelated teaching slide (see file-boundary note). expl left "" as p.308 itself prints no box. Numerals (75th/25th percentile, 24% hematocrit) plain and legible on both pages, no exponents.' },

/* Peds ENDPOINT PART 2, section 4 "Hematological Disorders" (PDF pp.245-451), PART B of 4.
   Staged, not authored -- verbatim transcription only. Chapters in scope: haematology
   (Anaemia and marrow failure) and haem-bleeding (Bleeding and clotting disorders).
   Range assigned: PDF pp.311-357. Answered pages per the index: 311, 314, 316, 318, 320,
   322, 323, 325, 327, 329, 331, 333, 335, 337, 339, 341, 343, 345, 347, 349, 351, 353, 355, 357.
   n starts at 1 in this part (per instruction -- merge-parts-ep2.js validates n as position,
   does not renumber; it does not offset across parts).
   OCR (content\peds\qb-pages\ocr\ep2\) was NOT opened during this pass -- native/hires renders only.
   Geometry: this is a slide deck, one PDF page = one slide, offset zero, no 2-up, no ghost.

   PAGE-KIND WALK (measured page by page, confirming the parent's map):
   309 = notes-only slide (iron deficiency teaching box) -- NOT part of Q22, a preceding
         unrelated teaching slide, no question content.
   310 = Q22 unanswered (stem+options plain).
   311 = Q22 ANSWERED (key C highlighted, hereditary spherocytosis). No box printed on this
         page itself.
   312 = the explanation box for Q22, OVERFLOWED onto its own page (confirmed by reading both:
         312's box explicitly reasons through Q22's anemia/jaundice/spherocytosis vignette).
         So n=1 carries box:312 and expl is 312's text; 312 gets no entry of its own.
   313 = Q23 unanswered.
   314 = Q23 answered.
   315-320 = clean alternation (unanswered/answered pairs), to be confirmed page by page below.
   321 = to be inspected (parent flagged as lone notes page).
   322, 323 = BOTH flagged answered with no unanswered twin between -- to be inspected together;
              parent's box-overflow hypothesis (§3) to be tested against the alternative that
              323 is a genuine second question or reprint.
   324 = unanswered (per parent map).
   325 = answered.
   326-357 = clean alternation per parent map, to be confirmed as reached.

   QUESTION-NUMBER WALK (pr = printed number, n = true sequential index):
   n1 p.311 pr22 -- n2 p.314 pr23 -- n3 p.316 pr24 -- n4 p.318 pr25 -- n5 p.320 pr26 (box:321)
   -- n6 p.323 pr27 -- n7 p.325 pr28 -- n8 p.327 pr29 -- n9 p.329 pr30 -- n10 p.331 pr31
   -- n11 p.333 pr32 -- n12 p.335 pr33 -- n13 p.337 pr34 -- n14 p.339 pr35 (box TRUNCATED
   in its own printed border, not an overflow -- see n14 note) -- n15 p.341 pr36 -- n16 p.343
   pr37 -- n17 p.345 pr38. Printed numbers run 1-for-1 with n across this whole range (n
   offset is +21 vs pr throughout, ie pr = n+21), no printed-number repeats or skips found.

   pp.322/323 RESOLVED (this was the flagged structural question): p.322 carries no yellow
   highlight and no box -- it is an ordinary UNANSWERED printing of Q27, the page-kind index's
   "answered" tag for it was wrong. p.323 is the true answered page (key E). Neither an
   overflow-box split nor a duplicate-with/without-box reprint (the part-D pp.419/420 pattern)
   -- just a normal pair the index misclassified. Only p.323 staged (n:6).

   p.321 RESOLVED: it IS the overflow explanation box for n:5 (Q26, p.320) -- content
   (microcytic/hypochromic anemia, normal electrophoresis, HbA2 not raised) matches Q26's
   vignette exactly. n:5 carries box:321. This differs from p.309, which was an unrelated
   preceding teaching slide and correctly unstaged.

   RESUME POINT for the next agent: last complete entry is n:17, pr:38, p:345. Continue from
   the next answered page, p:347, through the rest of this part's range: 347, 349, 351, 353,
   355, 357. Render one page past 357 to confirm the section boundary before the file is
   declared done.

   Pages 329-351 in this file (n:9 through n:17 so far, and likely further) were RECORDED,
   NOT ACTED ON, as matching House-bank questions one-for-one in page order per the task
   instruction -- flagged in each affected entry's note; the House file was never opened,
   audited or compared, and nothing folds across files here.

   CONTINUATION 2026-09-04: staged the last 6 answered pages of this part's assigned range:
   347 (Q39,keyC), 349 (Q40,keyD), 351 (Q41,keyC), 353 (Q42,keyB), 355 (Q43,keyC),
   357 (Q44,keyA) -- n18-n23, pr39-pr44. Every unanswered twin (346/348/350/352/354/356)
   checked and identical to its answered page; every box fit on the answered page itself,
   no overflow, no misclassified "answered" tag, no duplicate reprint -- clean alternation
   throughout this stretch, confirmed page by page. pr = n+21 holds through n23 (44=23+21).
   PART B's ASSIGNED RANGE (pp.311-357) IS NOW CLOSED at n:23/pr:44/p:357.
   All six FBC-panel exponents (10^9) in this stretch confirmed as genuine superscript
   nines at a 300 dpi crop of p.347 (the first of the six); the identical typeset repeats
   unchanged across 349-357, so later pages were not separately re-escalated.
   Hb is printed in g/dL on all six of these pages (n18-n23) -- same unit already seen
   starting at n:17 (p.345) -- transcribed as printed, not converted, each flagged in its
   own note.
   BOUNDARY PROVEN: p.358 rendered and read -- Q45 UNANSWERED (WCC 1.0x10^9/L, Neutrophils
   0.4x10^9/L, Platelets 100x10^9/L, Hb 10 g/dL; options A-E, no highlight). p.359 rendered
   and read -- Q45 ANSWERED, key E "Intravenous antibiotics" highlighted, boxed explanation
   on febrile neutropenia. This CONFIRMS the task prompt's claim: p.359 is part C's first
   answered page, staged there as pr:45. Neither p.358 nor p.359 is staged in this file.
*/

{ n:22, pr:22, p:311, key:2, box:312,
  stem:'Tia is a 4-year-old Caucasian girl referred to the paediatric ward by her general practitioner because her mother noticed a yellow tinge to her eyes after an upper respiratory tract infection. She is otherwise well and has no history of weight loss. There is no family history of blood disorders. On examination, she is pale, and her spleen is enlarged 3 cm below the costal margin. Full blood count results are: Hb (hemoglobin): 60 g/L WBC (white blood cell count): 8 x 10^9/L Platelet count: 255 x 10^9/L Blood film: small red cells MCV (mean cell volume): 60 fL (normal: 75–87 fL)\nWhat is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukaemia','Glucose-6-phosphate dehydrogenase (G6PD) deficiency','Hereditary spherocytosis','Sickle cell disease','Thalassaemia'],
  expl:'This child presents with anemia, jaundice following a viral illness, splenomegaly, and a microcytic picture on blood film, which can be seen in hereditary spherocytosis, especially during aplastic crises. Though the MCV is low (which is more typical of thalassemia), spherocytes may have a falsely low MCV. Hereditary spherocytosis is also more common in Caucasian children and can worsen during infections, consistent with her history.',
  note:'Key highlighted = option C, "Hereditary spherocytosis" (index 2). Page 311 itself prints no box; the explanation box is on p.312, printed alone (the "notes" page the index flagged) -- confirmed by content, it reasons through this exact vignette. p.309 (also flagged notes) is a separate, unrelated preceding teaching slide on iron deficiency/toddler anemia, not part of this question; it precedes the unanswered twin p.310 and is not staged. Stem/options read cleanly off the answered page; the bullet-separated FBC line and superscripts (10^9) transcribed as printed with caret notation since the source renders "10" with a small raised "9"/"6" glyph -- read directly off the image, not OCR.' },

{ n:23, pr:23, p:314, key:2,
  stem:'Ahmed, a 10-year-old boy of Egyptian descent, presents to his general practitioner. This evening, he is more lethargic than usual, and his urine has turned dark. There is no history of excessive exercise or beetroot consumption; lunch consisted of chicken, fish, broad beans, and rice. His examination is normal except he is febrile. There is no recent upper respiratory tract infection and no significant past medical history. What is the most likely underlying cause of his new symptoms?',
  opts:['Acute lymphoblastic leukaemia','Thalassemia trait','G6PD (Glucose-6-phosphate dehydrogenase) deficiency','Pyelonephritis','Sickle cell disease'],
  expl:'The history of broad bean ingestion, dark urine, and hemolytic features suggest G6PD deficiency, which is common in Middle Eastern populations. G6PD triggers include infections, certain foods, and drugs.',
  note:'Key highlighted = option C, "G6PD (Glucose-6-phosphate dehydrogenase) deficiency" (index 2). Box fits on the answered page itself, no overflow. Stem/options match the unanswered twin p.313 exactly.' },

{ n:24, pr:24, p:316, key:2,
  stem:'Tom is a 5-year-old boy presenting with a recent history of easy bruising. Two weeks ago, he had an upper respiratory tract infection that resolved spontaneously. Today, he is afebrile but has many widespread bruises and scattered petechiae. Investigations reveal: Hb (hemoglobin): 116 g/L WBC (white blood cell count): 10.2 x 10^9/L Platelet count: 32 x 10^9/L Prothrombin time: 15 seconds (control: 12–15 seconds) Activated partial thromboplastin time: 30 seconds (control: 25–35 seconds) Fibrinogen: 2.5 g/L (normal: 2–4 g/L)\nWhat is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukaemia','Hemophilia A','Immune thrombocytopenic purpura','Non-accidental injury','Vitamin D deficiency'],
  expl:'ITP typically presents after viral illness with isolated thrombocytopenia and petechiae or bruising in a well-appearing child. Normal Hb and WBCs, along with recent URTI, support this diagnosis.',
  note:'Key highlighted = option C, "Immune thrombocytopenic purpura" (index 2). haem-bleeding chapter content (platelet/coagulation panel). Box fits on page, no overflow. Stem/options match unanswered twin p.315 exactly. Platelet count 32 x 10^9/L and other lab values read directly off the image (not OCR).' },

{ n:25, pr:25, p:318, key:2,
  stem:'Amir is a 2-year-old Bangladeshi boy with eczema. During a routine review, his general practitioner notices he is pale. The rest of the examination is normal. His mother reports that he has been eating bits of carpet recently. Investigations reveal: Hb (hemoglobin): 66 g/L WBC (white blood cell count): 10.2 x 10^9/L Platelet count: 350 x 10^9/L MCV (mean cell volume): 60 fL (normal: 75–87 fL). What is the most appropriate treatment?',
  opts:['Dietary advice','Folic acid','Iron supplements','Multivitamin tablets','Vitamin B12 injections'],
  expl:'The presence of pica (eating carpet) and microcytic anemia (MCV 60 fL) are classic for iron deficiency anemia. Iron supplementation is the first-line treatment.',
  note:'Key highlighted = option C, "Iron supplements" (index 2). Box fits on page, no overflow. Stem/options match unanswered twin p.317 exactly. Pica presentation echoes the standalone teaching box on p.309 (iron deficiency/toddler anemia) that precedes n=1 -- recorded as an observation only.' },

{ n:26, pr:26, p:320, key:2, box:321,
  stem:'Joseph, a 2-year-old Black Caribbean boy from London, is admitted to the hospital for elective inguinal hernia repair. He has no other medical problems. His pre-operative assessment reveals the following results: Hb (hemoglobin): 86 g/L MCV (mean cell volume): 68 fL (normal: 75–87 fL) MCHC (mean corpuscular hemoglobin concentration): 22 g/dL (normal: 32–35 g/dL) WBC (white blood cell count): 11.2 x 10^9/L Platelet count: 262 x 10^9/L Hemoglobin electrophoresis: HbA 98%, HbA2 2%\nWhat is the most likely diagnosis?',
  opts:['β-Thalassaemia trait','Glucose-6-phosphate dehydrogenase deficiency','Iron-deficiency anemia','Normal variation for age and ethnicity'],
  fig:'A stained peripheral blood film/smear image printed to the right of the answer options, low-to-medium power, showing numerous red cells on a pale background; most cells appear small with pale (hypochromic) centres, a few cells stain darker/more compact; no labels, arrows, or scale bar on the image itself.',
  figAlt:'peripheral blood film, low power',
  expl:'This child has microcytic, hypochromic anemia with normal hemoglobin electrophoresis, making thalassemia unlikely. Iron-deficiency anemia is the most common cause of these findings in young children and is usually due to dietary insufficiency. The absence of HbA2 or HbF elevation supports iron deficiency over β-thalassemia trait.',
  note:'Key highlighted = option C, "Iron-deficiency anemia" (index 2). Page 320 itself prints no box; the explanation box overflowed onto p.321 (the lone "notes" page flagged in the task) -- confirmed by content, it reasons through this exact vignette (microcytic/hypochromic, normal electrophoresis, HbA2 not elevated) and matches Q26, not a separate teaching slide. So p.321 IS the overflow box for n:5, unlike p.309 which was unrelated. Stem/options/values (Hb 86, MCV 68, MCHC 22, WBC 11.2 x 10^9/L, platelets 262 x 10^9/L, HbA 98%/HbA2 2%) read off the answered page and cross-checked against the unanswered twin p.319, identical. Only 4 options printed on this page (A-D), unlike the 5-option pages before it -- read directly off image, confirmed on both p.319 and p.320.' },

{ n:27, pr:27, p:323, key:4,
  stem:'Peter, aged 9 months, presents to the Emergency Department. His family moved to the UK when he was 6 weeks old. He has had pain in his fingers for the past 6 hours and an upper respiratory tract infection for the last 24 hours. He has no medical history and is not on any medications. The appearance of his left hand is shown in the figure What is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukaemia','β-Thalassaemia major','Glucose-6-phosphate dehydrogenase deficiency','Haemophilia A','Sickle cell disease'],
  fig:'Clinical colour photograph of an infant, printed to the right of the option list: an adult holds the infant\'s left hand/forearm, the fingers of the hand resting near a colourful shape-sorter toy; the hand/fingers are visibly swollen. Identical image on p.322 (unanswered twin) and p.323 (answered).',
  figAlt:'clinical photograph, infant\'s hand',
  expl:'Painful dactylitis (hand-foot syndrome) in an infant with recent infection is often the first manifestation of sickle cell disease. It is common in children of African origin and presents early in life.',
  note:'RESOLVES the pp.322-323 structural question flagged in the task: read both pages whole. p.322 carries NO yellow highlight and NO box -- it is a plain, ordinary UNANSWERED printing of Q27 (ie the index tagged it "answered" incorrectly; visually it is indistinguishable from every other unanswered page in this section). p.323 is the genuinely answered page: option E, "Sickle cell disease" (index 4), highlighted yellow, with an explanation box. So this is neither an overflow-box split, nor a duplicate-with/without-box reprint (the part-D pp.419/420 pattern) -- it is a normal unanswered/answered pair that the page-kind index misclassified. Only p.323 (the answered page) gets an entry; p.322 is the unanswered twin and is not staged, per the section\'s standing rule. Stem, options and figure identical on both pages.' },

{ n:28, pr:28, p:325, key:2,
  stem:'Shlomo is a 9-day-old Jewish boy born in the UK. He underwent religious circumcision yesterday, but the wound has not stopped bleeding. On examination, he is pale and tachycardic. There is oozing of blood from the circumcision site and, later, from the cannula site after insertion. Investigations show: Hb (hemoglobin): 84 g/L WBC (white blood cell count): 12 x 10^9/L Platelet count: 322 x 10^9/L Prothrombin time: 16 seconds (control: 12–15 seconds) Activated partial thromboplastin time: >120 seconds (control: 25–35 seconds)\nWhat is the most likely diagnosis?',
  opts:['β-Thalassaemia major','Liver disease','Hemophilia A','von Willebrand disease'],
  expl:'A significantly prolonged APTT with normal platelets and PT in a male infant with prolonged bleeding after circumcision is classic for Hemophilia A (factor VIII deficiency), an X-linked condition.',
  note:'Key highlighted = option C, "Hemophilia A" (index 2). Box fits on the answered page, no overflow. Stem/options/values (Hb 84, WBC 12 x 10^9/L, platelets 322 x 10^9/L, PT 16s, APTT >120s) read off the answered page and cross-checked against the unanswered twin p.324, identical. Only 4 options printed (A-D).' },

{ n:29, pr:29, p:327, key:3,
  stem:'Charlie, aged 5 years, has recurrent nosebleeds, the most recent of which lasted 1.5 hours. He has no other medical problems. On examination, he is pale, with normal findings otherwise. Investigations reveal: Hb (hemoglobin): 86 g/L WBC (white blood cell count): 10.2 x 10^9/L Platelet count: 350 x 10^9/L Prothrombin time: 16 seconds (control: 12–15 seconds) Activated partial thromboplastin time: 46 seconds (control: 25–35 seconds) Fibrinogen: 2.5 g/L (normal: 2–4 g/L) Factor VIII: just below the normal range\nWhat is the most likely diagnosis?',
  opts:['Vitamin K deficiency','Liver disease','Immune thrombocytopenic purpura','von Willebrand disease'],
  expl:'Recurrent mucosal bleeding with mild anemia, prolonged PTT, and slightly reduced factor VIII levels suggests von Willebrand disease. Platelets and PT are typically normal or near-normal.',
  note:'Key highlighted = option D, "von Willebrand disease" (index 3). Box fits on page, no overflow. Stem/options/values (Hb 86, WBC 10.2 x 10^9/L, platelets 350 x 10^9/L, PT 16s, APTT 46s, fibrinogen 2.5 g/L, "Factor VIII: just below the normal range" -- printed as prose, not a number) read off the answered page and cross-checked against unanswered twin p.326, identical. Only 4 options printed (A-D).' },

{ n:30, pr:30, p:329, key:0,
  stem:'Melissa is a 3-year-old girl. She presents to her general practitioner with a 3–4-week history of lethargy and weight loss. On examination, she is pale and has widespread bruising. She has no other medical history and is not currently on any medications. The general practitioner orders a full blood count, which reveals: Hb: 66 g/L WBC: 43.2 x 10^9/L Platelet count: 50 x 10^9/L\nWhich of the following is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukaemia','Acute myeloid leukaemia','Alpha-thalassaemia major','Beta-thalassaemia major','Iron deficiency anemia'],
  expl:'A child with pallor, bruising, and pancytopenia (low Hb, high WBCs, and low platelets) is highly suggestive of ALL, the most common childhood cancer',
  note:'Key highlighted = option A, "Acute lymphoblastic leukaemia" (index 0). Box fits on page, no overflow. Stem/options/values (Hb 66, WBC 43.2 x 10^9/L, platelets 50 x 10^9/L) read off the answered page and cross-checked against unanswered twin p.328, identical. This is the FIRST page of the pp.329-351 range flagged in the task as matching House-bank questions one-for-one in page order -- recorded here per instruction; the House file was not opened, audited or compared.' },

{ n:31, pr:31, p:331, key:1,
  stem:'Xevera is a 7-year-old Greek boy who is seen by a paediatrician for constipation and is noted to look pale. Hematological testing reveals that he is anaemic with an Hb of 100 g/L (both MCV and MCHC are low). He is given a course of iron therapy, but his anemia does not improve. Further testing reveals 5% hemoglobin A2 (HbA2) and 3% fetal hemoglobin (HbF). Which of the following is the most likely diagnosis?',
  opts:['Alpha-thalassaemia trait','Beta-thalassaemia trait','Thalassaemia major','Beta-thalassaemia major','Iron deficiency anemia'],
  expl:'Failure to respond to iron, along with elevated HbA2 and HbF on electrophoresis, is diagnostic of beta-thalassemia trait. Microcytic anemia is present despite adequate iron levels.',
  note:'Key highlighted = option B, "Beta-thalassaemia trait" (index 1). Box fits on page, no overflow. Stem/options/values (Hb 100 g/L, HbA2 5%, HbF 3%) read off the answered page and cross-checked against unanswered twin p.330, identical. Within the pp.329-351 House-overlap range flagged in the task -- observation only, not opened or compared.' },

{ n:32, pr:32, p:333, key:0,
  stem:'Ahmed is a 4-week-old infant of Somali refugees who have just fled to the UK. He was circumcised yesterday, but the wound will not stop bleeding. On examination, there is oozing of blood around the circumcision wound. Investigations reveal: Hb: 122 g/L WBC: 11 x 10^9/L Platelets: 312 x 10^9/L Prothrombin time: 36 seconds (control: 12–15 seconds) APTT: 25 seconds (control: 25–35 seconds)\nWhich of the following is the best treatment option for this patient?',
  opts:['Vitamin K','Vitamin D','Blood transfusion','Iron supplementation'],
  expl:'The infant has an isolated prolonged PT with normal platelets and APTT, which is consistent with vitamin K deficiency bleeding (VKDB), common in exclusively breastfed infants not given prophylaxis.',
  note:'Key highlighted = option A, "Vitamin K" (index 0). Box fits on page, no overflow. Stem/options/values (Hb 122, WBC 11 x 10^9/L, platelets 312 x 10^9/L, PT 36s, APTT 25s) read off the answered page and cross-checked against unanswered twin p.332, identical. Only 4 options printed (A-D). Within the pp.329-351 House-overlap range -- observation only.' },

{ n:33, pr:33, p:335, key:2,
  stem:'Lola is an 8-month-old girl from Cyprus. She is referred to the paediatric department because she is clinically anaemic and has faltering growth. Upon examination, you find that she has a large liver and spleen. Electrophoresis reveals an absence of hemoglobin A (HbA). Which of the following is the best treatment option for this patient?',
  opts:['Vitamin K','Vitamin D','Blood transfusion','Iron supplementation','Chemotherapy'],
  expl:'Absence of HbA on electrophoresis and hepatosplenomegaly in a symptomatic infant from a thalassemia-endemic area (Cyprus) suggest beta-thalassemia major. Lifelong transfusion therapy is often required.',
  note:'Key highlighted = option C, "Blood transfusion" (index 2). Box fits on page, no overflow. Stem/options read off the answered page and cross-checked against unanswered twin p.334, identical. Within the pp.329-351 House-overlap range -- observation only.' },

{ n:34, pr:34, p:337, key:3,
  stem:'George is a 3-month-old boy. He presents to the paediatric ward with a swollen leg. He had an immunization yesterday and there is now a large swelling at the injection site. Hematological investigation reveals: Hb: 102 g/L WBC: 9.0 x 10^9/L Platelets: 312 x 10^9/L Prothrombin time: 13 seconds (control: 12–15 s) APTT: 100 seconds (control: 25–35 s)\nThere is currently no bleeding and he is hemodynamically stable. His two older brothers both suffer from a bleeding disorder, but both his parents and older sister do not. Which of the following is the best treatment option?',
  opts:['Vitamin K','Blood transfusion','Folic acid supplementation','Recombinant factor VIII'],
  expl:'A prolonged APTT with normal PT and platelets in a male infant, plus a family history of bleeding in male siblings, strongly suggests Hemophilia A. Recombinant factor VIII is the treatment of choice.',
  note:'Key highlighted = option D, "Recombinant factor VIII" (index 3). Box fits on page, no overflow. Stem/options/values (Hb 102, WBC 9.0 x 10^9/L, platelets 312 x 10^9/L, PT 13s, APTT 100s) read off the answered page and cross-checked against unanswered twin p.336, identical. Only 4 options printed (A-D). Within the pp.329-351 House-overlap range -- observation only.' },

{ n:35, pr:35, p:339, key:4,
  stem:'Lizzie is a 9-year-old girl who presents to the paediatric clinic. She is known to have hereditary spherocytosis. Her mother is concerned that she is very pale. Three weeks ago, Lizzie had an upper respiratory tract infection. Her mother reports that she had a fever and was very flushed with bright red cheeks. She is otherwise well and has fully recovered from her infection. Her mother informs you that she has a very good diet. A complete blood count reveals an Hb of 88 g/L. A blood film reveals a normochromic normocytic anemia with no blast cells. Which of the following is the best treatment option?',
  opts:['Vitamin K','Blood transfusion','Folic acid supplementation','Recombinant factor VIII','No action required at present'],
  expl:'She probably had a parvovirus infection associated with bone marrow suppression. This level of anaemia does not need transfusion. If she has a good diet, she will not need iron supplementation. However, she will need a further full blood count in a couple of weeks to ensure that her haemoglobin has not dropped further and reached the level where a blood',
  note:'Key highlighted = option E, "No action required at present" (index 4). ⚠️ PRINTING DEFECT, flagged not corrected: the explanation box\'s own border cuts the last sentence off mid-word after "...reached the level where a blood" -- confirmed on both native and hires renders, the box border closes right there with no continuation visible; p.340 is the next question (Q36, unanswered), not a continuation of this box. Transcribed verbatim as truncated; not completed or guessed. Stem/options/Hb 88 g/L read off the answered page and cross-checked against unanswered twin p.338, identical. Within the pp.329-351 House-overlap range -- observation only.' },

{ n:36, pr:36, p:341, key:4,
  stem:'Angie is 6 weeks old. She was jaundiced at 24 hours of age when her hemoglobin (Hb) was checked and found to be 150 g/L. At 2 months of age, she presents with an upper respiratory tract infection. The full blood count is repeated, and she has an Hb of 102 g/L. Which of the following is the best treatment option for this patient?',
  opts:['Vitamin K','Blood transfusion','Folic acid supplementation','Recombinant factor VIII','No action required at present'],
  expl:'This is a normal variant. At birth, the haemoglobin in term infants is high, 140–215 g/L, to compensate for the low oxygen concentration in the fetus. The haemoglobin falls over the first few weeks, mainly due to reduced red cell production, reaching a nadir of around 100 g/L at 2 months of age',
  note:'Key highlighted = option E, "No action required at present" (index 4). Box fits on page, no overflow (unlike n:14, this box\'s border closes cleanly after a complete sentence). Stem/options/values (Hb 150 g/L at 24h, Hb 102 g/L at repeat, reference range 140-215 g/L) read off the answered page and cross-checked against unanswered twin p.340, identical. Within the pp.329-351 House-overlap range -- observation only.' },

{ n:37, pr:37, p:343, key:1,
  stem:'Hemoglobin production differs through fetal life and extrauterine life, and the molecule itself changes with age. Which of the following statements regarding hemoglobin is correct?',
  opts:['At birth, HbA is predominant','Hb concentration falls after birth until around 7 weeks','Hematopoiesis mainly occurs in the liver and spleen at term','The lifespan of a normal red blood cell is 10 days','Fetal hemoglobin has lower affinity for oxygen'],
  expl:'After birth, Hb levels physiologically drop due to reduced erythropoiesis and transition from fetal to adult hemoglobin, reaching a nadir around 6–8 weeks. This is known as physiological anemia of infancy.',
  note:'Key highlighted = option B, "Hb concentration falls after birth until around 7 weeks" (index 1). p.342 (not in the assigned answered-page list, checked anyway) is the plain unanswered twin, identical stem/options -- confirmed. Box fits on the answered page, no overflow. Note the box text says nadir "around 6-8 weeks" while the correct-option text says "around 7 weeks" -- both printed as-is, not reconciled (7 weeks falls within the stated 6-8 week range, not a contradiction, recorded verbatim only).' },

{ n:38, pr:38, p:345, key:2,
  stem:"An 11-month-old Caucasian boy attends his GP as his mother has been struggling to wean him. He will drink cow's milk at regular intervals and eats some baby rice but refuses most other solids. On examination, he appears very pale but otherwise well. There is no hepatosplenomegaly. A complete blood count (FBC) shows: Hb: 7.8 g/dL MCV: 69 fL\nWhat is the most likely cause of his anemia?",
  opts:['Sickle cell anemia','Thalassaemia','Iron deficiency anemia','Vitamin B12 deficiency'],
  expl:'A diet high in cow’s milk and low in iron-rich solids commonly leads to iron deficiency anemia in infants. The low Hb and microcytic MCV (69 fL) confirm the diagnosis.',
  note:'Key highlighted = option C, "Iron deficiency anemia" (index 2). Box fits on page, no overflow. ⚠️ UNIT FLAG: Hb printed here as "7.8 g/dL" -- this is the first entry in this file using g/dL rather than g/L (every prior entry printed Hb in g/L); read directly off the image on both the answered page and its unanswered twin p.344, identical unit both places, not a transcription slip on my part. Transcribed as printed, not converted. MCV 69 fL also cross-checked against p.344, identical. Only 4 options printed (A-D).' },

{ n:39, pr:39, p:347, key:2,
  stem:'A 3-year-old Afro-Caribbean girl presents with severe pain in her hands and abdomen. On examination, there is mucosal pallor, yellow sclerae, generalized abdominal tenderness with hepatosplenomegaly. Bloods show: Hb: 6.1 g/dL MCV: 78 fL WBC: 6.0 x 10^9/L Platelets: 300 x 10^9/L\nWhat is the most likely cause of her anemia?',
  opts:['Thalassaemia','Iron deficiency anemia','Sickle cell disease','Anemia of chronic disease','G6PD deficiency'],
  expl:'The child’s symptoms (pain crisis, pallor, jaundice) and background are classic for sickle cell disease. The anemia, normocytic MCV, and hepatosplenomegaly support hemolysis from sickling.',
  note:'Key highlighted = option C, "Sickle cell disease" (index 2). Box fits on the answered page, no overflow. Stem/options/values (Hb 6.1 g/dL, MCV 78 fL, WBC 6.0 x 10^9/L, platelets 300 x 10^9/L) cross-checked against unanswered twin p.346, identical. Exponent confirmed genuine superscript 9 (not flattened) at a 300 dpi crop of p.347 -- caret notation used per file convention. ⚠️ UNIT: Hb again printed in g/dL here (as n:17 was), consistent within this run of pages, transcribed as printed.' },

{ n:40, pr:40, p:349, key:3,
  stem:'A 9-year-old girl with known sickle cell disease presents with a 4-day history of fever, coryza, and myalgia. Over the past 24 hours, she has developed a lacy rash particularly over her hands and feet and has become more lethargic. Her mother reports her looking more pale. An FBC reveals: Hb: 5.9 g/dL WCC: 1.0 x 10^9/L Platelets: 50 x 10^9/L\nWhat is the most likely cause for her blood results?',
  opts:['Splenic sequestration crisis','Painful crisis','Chest crisis','Parvovirus B19 infection','Pneumococcal sepsis'],
  expl:'Parvovirus B19 causes transient aplastic crisis in sickle cell patients, presenting with sudden anemia, reticulocytopenia, and pancytopenia. The lacy rash is characteristic of the virus.',
  note:'Key highlighted = option D, "Parvovirus B19 infection" (index 3). Box fits on page, no overflow. Stem/options/values (Hb 5.9 g/dL, WCC 1.0 x 10^9/L, platelets 50 x 10^9/L) cross-checked against unanswered twin p.348, identical. Exponent style (10^9) matches n:18\'s confirmed genuine-superscript reading; not re-escalated to 300 dpi as the same font/rendering was already confirmed one page prior. ⚠️ UNIT: Hb again in g/dL, third consecutive page in this style, transcribed as printed.' },

{ n:41, pr:41, p:351, key:2,
  stem:'An 8-month-old girl with Greek-Cypriot parents is brought to her GP as her parents are worried she is not growing well and is very pale. On examination, there is pallor and mildly icteric sclerae. She has a distended abdomen with hepatosplenomegaly and mild frontal bossing. She was born on the 25th centile and her weight has fallen below the 2nd centile. Blood tests show microcytic hypochromic anemia. What is the likely diagnosis?',
  opts:['Sickle cell disease','Hereditary spherocytosis','Thalassaemia major','G6PD deficiency','Iron deficiency anemia'],
  expl:'Features such as severe microcytic anemia, hepatosplenomegaly, and failure to thrive in a child from a high-risk ethnic group are classic for β-thalassaemia major.',
  note:'Key highlighted = option C, "Thalassaemia major" (index 2). Box fits on page, no overflow. Stem/options match unanswered twin p.350 exactly, no lab numerals or exponents on this page to check.' },

{ n:42, pr:42, p:353, key:1,
  stem:'A 14-month-old boy is brought to the emergency room by his mother with pain and swelling in his right knee. He is unable to weight bear, and on examination, several large bruises are noted over the lower limbs and arms. His blood tests show: Hb: 10.5 g/dL WCC: 11 x 10^9/L Platelets: 340 x 10^9/L PT: 13.3 seconds APTT: >120 seconds\nWhat is the most likely diagnosis?',
  opts:['Vitamin K deficiency','Hemophilia A','Von Willebrand disease','Immune thrombocytopenic purpura'],
  expl:'A significantly prolonged APTT with normal platelets and PT, plus joint bleeding, is typical for Hemophilia A, an X-linked deficiency of factor VIII.',
  note:'Key highlighted = option B, "Hemophilia A" (index 1). Box fits on page, no overflow. Stem/options/values (Hb 10.5 g/dL, WCC 11 x 10^9/L, platelets 340 x 10^9/L, PT 13.3s, APTT >120s) cross-checked against unanswered twin p.352, identical. Exponent style (10^9) matches the confirmed genuine-superscript reading from n:18/n:19; not re-escalated, same font/rendering. Only 4 options printed (A-D). ⚠️ UNIT: Hb again in g/dL, consistent with the run of pages since n:17.' },

{ n:43, pr:43, p:355, key:2,
  stem:'A 5-year-old boy attends the emergency department with a nosebleed that has lasted for 45 minutes. He had a viral upper respiratory tract infection 1 week ago. On examination, he has petechiae over his chest, legs, and abdomen. Blood tests reveal: Hb: 10.4 g/dL WCC: 13 x 10^9/L Platelets: 15 x 10^9/L Clotting screen: normal\nWhat is the most likely diagnosis?',
  opts:['Henoch–Schönlein purpura','Hemophilia B','Immune thrombocytopenic purpura','Meningococcal septicaemia'],
  expl:'Recent viral infection, petechiae, and isolated low platelets with normal clotting suggest ITP, a common immune-mediated cause of thrombocytopenia in children.',
  note:'Key highlighted = option C, "Immune thrombocytopenic purpura" (index 2). Box fits on page, no overflow. Stem/options/values (Hb 10.4 g/dL, WCC 13 x 10^9/L, platelets 15 x 10^9/L, "Clotting screen: normal") cross-checked against unanswered twin p.354, identical. Exponent style (10^9) matches the confirmed genuine-superscript reading from earlier pages in this run; not re-escalated. Only 4 options printed (A-D). ⚠️ UNIT: Hb again in g/dL.' },

{ n:44, pr:44, p:357, key:0,
  stem:'A 7-year-old Ghanaian boy presented to A&E 3 days after returning from West Africa with high fever and rigors. He was diagnosed with malaria and started on primaquine. His mother is now concerned about jaundice. On examination, he is pale, jaundiced, and breathless. Investigations reveal: Hb: 5.5 g/dL WCC: 15 x 10^9/L Platelets: 200 x 10^9/L Blood film: red cell fragments, bite cells, Heinz bodies\nWhat is the most likely diagnosis?',
  opts:['G6PD deficiency','Pyruvate kinase deficiency','Sickle cell disease','Beta-thalassaemia'],
  expl:'G6PD deficiency can cause hemolysis after exposure to oxidative drugs like primaquine. Bite cells and Heinz bodies on blood film confirm oxidative hemolysis.',
  note:'Key highlighted = option A, "G6PD deficiency" (index 0). Box fits on page, no overflow. Stem/options/values (Hb 5.5 g/dL, WCC 15 x 10^9/L, platelets 200 x 10^9/L, blood film findings) cross-checked against unanswered twin p.356, identical. Exponent style (10^9) matches the confirmed genuine-superscript reading from earlier pages in this run; not re-escalated. Only 4 options printed (A-D). ⚠️ UNIT: Hb again in g/dL. This is the LAST entry in Part B\'s assigned range (pp.311-357) -- range now closed at n:23/pr:44/p:357.' },

/* endpoint PART 2, section 4 "Hematological Disorders" (banner p.245), PART C.
   Range assigned: PDF pp.359-405. Chapters: haematology / haem-bleeding (drafting pass assigns).
   Staged per tools/bank-harness/pd-ep2-staging-brief.md. OCR NOT opened during this pass.
   n starts at 1 in this part -- merge-parts-ep2.js validates position, it does not renumber.

   Page-kind map for this range (measured from images, not from the OCR index handed to me):
     p.358 unanswered twin of q45 (out of my range, read only as twin) ·
     359 answered q45 · then clean unanswered/answered alternation through 405, COMPLETE. No
     consecutive answered pages found; no notes/box-overflow pages interleaved anywhere in this
     range (§3a box test applied at p.377 -> p.378 checked, ordinary unboxed question, no
     overflow). Range CLOSED at p.405; p.407 (part D) rendered once and confirmed as an ordinary
     continuation, not staged.

   ⚠️ Two pages flagged by the cross-part sweep as possible reprints, staged normally per
   instruction, unresolved: p.375 (q53, hemophilia) ~= p.442 (part D); p.383 (q57, ITP) ~= p.448
   (part D). See each entry's note for the exact stem opening / option count / key / box state.

   One numeral/text anomaly confirmed by 300dpi crop, not corrected: p.391 (q61) prints
   "Hb (6mg/dl)" and TWO options both reading "Thalassemia" (options d and e) -- both genuine
   printed defects, staged as-is.

   Question-number walk (pr = printed number, page by page):
     n1 pr45 p359 · n2 pr46 p361 · n3 pr47 p363 · n4 pr48 p365 · n5 pr49 p367 · n6 pr50 p369 ·
     n7 pr51 p371 · n8 pr52 p373 · n9 pr53 p375 · n10 pr54 p377 · n11 pr55 p379 · n12 pr56 p381 ·
     n13 pr57 p383 · n14 pr58 p385 · n15 pr59 p387 · n16 pr60 p389 · n17 pr61 p391 · n18 pr62 p393 ·
     n19 pr63 p395 · n20 pr64 p397 · n21 pr65 p399 · n22 pr66 p401 · n23 pr67 p403 · n24 pr68 p405 */

{ n:45, pr:45, p:359, key:4,
  stem:'A 4-year-old girl undergoing chemotherapy for acute lymphoblastic leukaemia presents 8 days after her last treatment with a fever of 39°C. She has a portacath in situ. Her FBC reveals: WCC: 1.0 × 10^9/L Neutrophils: 0.4 × 10^9/L Platelets: 100 × 10^9/L Hb: 10 g/dL What is the most important step in her management?',
  opts:['Packed red cell transfusion','Platelet transfusion','G-CSF administration','Antipyretics','Intravenous antibiotics'],
  expl:'This patient is neutropenic with a fever, which is a medical emergency. Immediate IV antibiotics are essential to prevent sepsis and improve survival.',
  note:'Twin checked (p.358, unanswered, identical stem/options). Option E "Intravenous antibiotics" highlighted yellow and underlined -> key=4. Printed box present, transcribed verbatim.' },

{ n:46, pr:46, p:361, key:1,
  stem:'A 5-month-old baby is brought to the hospital with a swollen left upper arm. Both parents state that he fell while playing. A radiograph shows a spiral fracture of the left humerus. Which feature suggests non-accidental injury?',
  opts:['Immediate presentation to hospital','History does not match the injury','Parents appear distraught','Both parents give consistent accounts','No prior hospital attendances'],
  expl:'A spiral fracture in a non-mobile infant is highly suspicious for non-accidental injury, especially when the injury mechanism is inconsistent with developmental stage.',
  note:'Read clear on native, no twin needed. Option B "History does not match the injury" highlighted yellow and underlined -> key=1. Printed box present, transcribed verbatim.' },

{ n:47, pr:47, p:363, key:1,
  stem:'A 3-year-old male presents to the pediatrician with fever, anorexia, joint pain, petechiae and hepatosplenomegaly. Which of the following diagnostic procedures is MOST likely to yield a definitive diagnosis?',
  opts:['Joint MRI','Bone marrow aspiration','ASOT','Serum iron and TIBC','CSF examination'],
  expl:'Bone marrow aspiration is the most definitive test in a child with fever, joint pain, petechiae, hepatosplenomegaly, and suspected leukemia. It confirms the diagnosis by showing leukemic blasts.',
  note:'Read clear on native, no twin needed. Option b "Bone marrow aspiration" highlighted yellow and underlined -> key=1. Printed box present, transcribed verbatim.' },

{ n:48, pr:48, p:365, key:4,
  stem:'On a routine CBC-screening, a 1.5-year-old is noted to have a microcytic hypochromic anemia. A follow-up hemoglobin electrophoresis demonstrates increased level of hemoglobin A2. The child is MOST likely to have:',
  opts:['Lead poisoning','Iron deficiency','Chronic systemic illness','Sickle cell trait','Beta thalassemia minor'],
  expl:'Increased HbA2 on electrophoresis is the hallmark of β-thalassemia minor. These children present with microcytic hypochromic anemia that does not improve with iron.',
  note:'Read clear on native, no twin needed. Option e "Beta thalassemia minor" highlighted yellow and underlined -> key=4. Printed box present, transcribed verbatim.' },

{ n:49, pr:49, p:367, key:3,
  stem:'Which of the following is the confirmatory test for diagnosing leukemia in children?',
  opts:['Blast cells present in CBC','Hypercellularity of RBC precursors in bone marrow','Leukocytosis','Bone marrow aspiration with cytology'],
  expl:'The confirmatory test for leukemia is bone marrow aspiration, which shows blast cells. CBC alone is not sufficient for a definite diagnosis.',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option d "Bone marrow aspiration with cytology" highlighted yellow and underlined -> key=3. Printed box present, transcribed verbatim.' },

{ n:50, pr:50, p:369, key:2,
  stem:'A 14-month-old infant presents with pallor and anorexia. Laboratory results reveal: Hg 7 g/dl, hypochromic microcytic RBCs, normal WBCs morphology, and low serum ferritin. Which of the following statement is CORRECT?',
  opts:['He probably has beta-thalassemia major','Long-term treatment with packed RBCs transfusion will be required','A dietary history is important','Bone marrow examination is indicated','Osmotic fragility test should be done'],
  expl:'Low Hb, microcytic hypochromic anemia, and low ferritin suggest iron deficiency anemia. The most useful step is taking a dietary history to guide management.',
  note:'Read clear on native, no twin needed. Option c "A dietary history is important" highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim.' },

{ n:51, pr:51, p:371, key:0,
  stem:'What is the most common cause of anemia in school-aged children?',
  opts:['Iron deficiency anemia','Thalassemia','Sickle cell anemia','Megaloblastic anemia'],
  expl:'Iron deficiency anemia is the most common cause of anemia in school-aged children, usually due to poor diet or chronic blood loss.',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option a "Iron deficiency anemia" highlighted yellow and underlined -> key=0. Printed box present, transcribed verbatim.' },

{ n:52, pr:52, p:373, key:0,
  stem:'All of the following are true about thalassemia EXCEPT?',
  opts:['Decreased serum ferritin','Microcytic hypochromic anemia','Increased HbA2 in beta-thalassemia minor','Genetic inheritance'],
  expl:'Thalassemia shows normal or increased ferritin (not decreased), microcytic hypochromic anemia, and raised HbA2 in β-thalassemia minor.',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option a "Decreased serum ferritin" highlighted yellow and underlined -> key=0. Printed box present, transcribed verbatim.' },

{ n:53, pr:53, p:375, key:3,
  stem:'A 3-year-old boy fell while playing in the garden. He developed a very painful swelling of his right knee, aspiration of which revealed the presence of blood. The following laboratory parameters have been obtained: INR normal, APTT increased, fibrinogen normal, antithrombin III level normal, bleeding time 3.3 min. What is the most likely cause?',
  opts:['Fibrinogen deficiency','Glucose-6-phosphate dehydrogenase deficiency','Prothrombin deficiency','Hemophilia','Factor VII deficiency'],
  expl:'Normal INR, prolonged APTT, and joint bleeding (hemarthrosis) strongly suggest hemophilia. Platelets and fibrinogen are normal.',
  note:'⚠️ FLAGGED cross-part: swept as possible reprint of p.442 (part D). Read clear on native, no twin needed. Printed number 53. 5 options (a-e). Stem opens "A 3-year-old boy fell while playing in the garden. He developed a very painful swelling of his right knee...". Option d "Hemophilia" highlighted yellow, bold and underlined -> key=3. Printed box present (bordered box to the right of option d), transcribed verbatim, reads: "Normal INR, prolonged APTT, and joint bleeding (hemarthrosis) strongly suggest hemophilia. Platelets and fibrinogen are normal." Not resolved against p.442 per instruction -- staged as-is for post-merge adjudication.' },

{ n:54, pr:54, p:377, key:3,
  stem:'A 16y old young man with sickle-cell anemia is admitted with recent breathlessness. He is febrile and has a clear chest with saturations of 98% on air. From his out-patient notes his usual Hb is 9 mg/dl. Labs showed WCC 8.6x10^9/L, Hb 4.7 mg/dl, PLT 573x10^9/L. Bilirubin is elevated. Which investigation is the most useful to perform next?',
  opts:['Serum haptoglobin','Urinary hemosiderin','Parvovirus serology','Reticulocyte count','Chest X-ray'],
  expl:'',
  note:'Read clear on native, no twin needed (twin would be p.376, out of range/not needed -- page reads unambiguously). Option d "Reticulocyte count" highlighted yellow and underlined -> key=3. No box printed on this page. §3a box test applied: opened p.378 (next page) -- it is q55 unanswered (plain, no highlight, no box), so the box did not overflow there; this is simply an unboxed question. expl left empty. Units read off image as printed: "8.6x10^9/L", "4.7 mg/dl", "573x10^9/L" (page prints "x10^9" as caret-style superscript already legible on native, no crop needed).' },

{ n:55, pr:55, p:379, key:2,
  stem:'Which of the following is the diagnostic test for hereditary spherocytosis?',
  opts:['Bone marrow examination','Coombs test','Osmotic fragility test','Hemoglobin electrophoresis'],
  expl:'Hereditary spherocytosis is confirmed by osmotic fragility testing. It shows increased red cell lysis in hypotonic solutions.',
  note:'Twin checked (p.378, unanswered, identical stem/options). Only 4 options printed (a-d). Option c "Osmotic fragility test" highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim.' },

{ n:56, pr:56, p:381, key:0,
  stem:'All of the following are true about Henoch–Schönlein purpura (HSP) EXCEPT?',
  opts:['Rash on flexor surfaces','Arthritis','Gastrointestinal bleeding','Acute abdomen'],
  expl:'Henoch–Schönlein purpura (HSP) rash typically occurs on extensor surfaces and buttocks, not flexors. It also presents with arthritis, abdominal pain, and GI bleeding.',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option a "Rash on flexor surfaces" highlighted yellow and underlined -> key=0. Printed box present, transcribed verbatim.' },

{ n:57, pr:57, p:383, key:0,
  stem:'A 5-year-old girl developed petechiae and bruises on her extremities while she was recovering from a cold. She is brought to medical attention after she has had hematemesis and nose bleeding. Physical examination shows a toddler with widespread petechiae and ecchymosis who otherwise looks healthy. What is the best treatment of this patient?',
  opts:['Intravenous gamma globulins','Rituximab','Intravenous antibiotics','Platelet transfusion','Plasma transfusion'],
  expl:'This child has immune thrombocytopenic purpura (ITP) after a viral infection. IVIG is the best treatment in symptomatic bleeding.',
  note:'⚠️ FLAGGED cross-part: swept as possible reprint of p.448 (part D). Read clear on native, no twin needed. Printed number 57. 5 options (a-e). Stem opens "A 5-year-old girl developed petechiae and bruises on her extremities while she was recovering from a cold...". Option a "Intravenous gamma globulins" highlighted yellow and underlined -> key=0. Printed box present (bordered box overlapping options c/d area), transcribed verbatim, reads: "This child has immune thrombocytopenic purpura (ITP) after a viral infection. IVIG is the best treatment in symptomatic bleeding." Not resolved against p.448 per instruction -- staged as-is for post-merge adjudication.' },

{ n:58, pr:58, p:385, key:0,
  stem:'A 5-year-old boy presents with a low-grade fever during the last two weeks. On examination, large lymph nodes are palpable on both sides of the neck, under the axilla and in inguinal regions and there is hepatosplenomegaly. He is pale and has some purpuric spots are over the back. What is the most likely diagnosis?',
  opts:['Acute lymphocytic leukemia','Military tuberculosis','Idiopathic thrombocytopenic purpura','Henoch Schonlein purpura','Aplastic anemia'],
  expl:'Generalized lymphadenopathy, hepatosplenomegaly, pallor, and purpura in a child strongly suggest acute lymphoblastic leukemia (ALL).',
  note:'Read clear on native, no twin needed. Option a "Acute lymphocytic leukemia" highlighted yellow and underlined -> key=0. Printed box present, transcribed verbatim.' },

{ n:59, pr:59, p:387, key:3,
  stem:'A 7-year-old boy presents with pallor. He was born at full-term weighing 2.89 kg. He is fully immunized, on no medications. Hb 9.2g/dl, MCV 69 (low). He has been treated with oral iron for three months, but there was no improvement in the CBC. A blood film shows Heinz bodies, target cells, aniso-poikilocytosis and reticulocytes. Supravital staining shows inclusions of precipitated hemoglobin. What is the most likely diagnosis?',
  opts:['Marrow failure','Iron deficiency','Blood loss in stools','Hemoglobinopathies','Malignancy'],
  expl:'Failure to respond to iron, microcytosis, target cells, and Heinz bodies suggest thalassemia or another hemoglobinopathy.',
  note:'Read clear on native, no twin needed. Option d "Hemoglobinopathies" highlighted yellow and underlined -> key=3. Printed box present, transcribed verbatim. Weight "2.89 kg", "Hb 9.2g/dl", "MCV 69" and stem wording read directly off image, plainly legible at native resolution, no crop needed.' },

{ n:60, pr:60, p:389, key:1,
  stem:'A female child presenting with epistaxis and bleeding gums for 2 days. Clinical examination revealed scattered petechiae and ecchymosis over the upper and lower limbs. No pallor. No organomegaly. CBC showed platelet count 50,000/ml, Hb 11 gm/dl. The most probable diagnosis is:',
  opts:['Henoch-Schonlein purpura','Immune thrombocytopenic purpura','Hemophilia A','Acute leukemia','Von Willebrand disease'],
  expl:'Normal Hb, low platelets, and no organomegaly with mucocutaneous bleeding fit ITP.',
  note:'Read clear on native, no twin needed. Option b "Immune thrombocytopenic purpura" highlighted yellow and underlined -> key=1. Printed box present, transcribed verbatim. "50,000/ml" and "Hb 11 gm/dl" read directly off image, plainly legible, no crop needed.' },

{ n:61, pr:61, p:391, key:2,
  stem:'Tia is a 4-year-old girl. She is referred to the pediatric ward by her general practitioner as her mother noted that she had a yellow tinge to her eyes since developing an upper respiratory tract infection. She is well in herself and has no history of weight loss. There is no family history of any blood disorders. On examination she was pale and her spleen was enlarged 3 cm below the costal margin. You perform a full blood count, which reveals: Hb (6mg/dl) WBC (white blood cell count): 8000/ml Platelet count: 255,000/ml Blood film: small red cells MCV (mean cell volume): 60 fl (but normal: 75–87 fl) What is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukemia','Glucose-6-phosphate dehydrogenase (G6PD) deficiency','Hereditary spherocytosis','Thalassemia','Thalassemia'],
  expl:'In hereditary spherocytosis the anaemia is usually mild (Hb 90–110 g/L), but the haemoglobin level may transiently fall during infections. Mild to moderate splenomegaly is common.',
  note:'⚠️ NUMERAL ESCALATION: confirmed at 300dpi crop (ep2-stage/p-0391.jpg) -- page prints "Hb (6mg/dl)" verbatim (unusual unit/value, box explanation instead cites "Hb 90-110 g/L", a unit mismatch on the page itself, not a misread on my part; staged as printed, not corrected). ⚠️ Options d and e are BOTH printed "Thalassemia" verbatim -- confirmed at 300dpi, not a transcription error; a genuine printed duplicate, staged as-is per "defective key/content recorded, never corrected." Option c "Hereditary spherocytosis" highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim. Bullet-point vitals in stem (originally red dot markers) flattened to plain text in order printed.' },

{ n:62, pr:62, p:393, key:1,
  stem:'In non-circumcised 2-year-old male patient with post-traumatic right knee swelling and past history of recurrent bluish patches over limbs and trunk. THE FIRST possibility to be considered is:',
  opts:['Sickle cell disease','Hemophilia A','Idiopathic thrombocytopenic purpura (ITP)','Henoch-Schonlein purpura','Hypersplenism'],
  expl:'Recurrent bleeding into joints and soft tissues after minor trauma, especially in a boy, suggests hemophilia A.',
  note:'Read clear on native, no twin needed. Option b "Hemophilia A" highlighted yellow and underlined -> key=1. Printed box present, transcribed verbatim.' },

{ n:63, pr:63, p:395, key:1,
  stem:'Vitamin k affects all the following factors except:',
  opts:['Factor 2','Factor 5','Factor 7','Factor 9'],
  expl:'Vitamin K is required for factors II, VII, IX, and X, but not factor V.',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option b "Factor 5" highlighted yellow and underlined -> key=1. Printed box present, transcribed verbatim.' },

{ n:64, pr:64, p:397, key:2,
  stem:'Which is not a cause of acute abdomen?',
  opts:['Henoch–Schönlein purpura (HSP)','UTI','Thalassemia','Sickle cell disease'],
  expl:'Thalassemia causes chronic anemia but not acute abdomen. HSP, UTI, and sickle cell disease can all present with acute abdominal pain.',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option c "Thalassemia" highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim.' },

{ n:65, pr:65, p:399, key:2,
  stem:'Which of the following is the most common cause of aplastic crisis in a patient with sickle cell disease?',
  opts:['Dehydration','Respiratory syncytial virus infection','Human parvovirus B19 infection','Repeated blood transfusion','Hemophilus influenzae septicemia'],
  expl:'Parvovirus B19 infection suppresses bone marrow, causing aplastic crisis in sickle cell patients.',
  note:'Read clear on native, no twin needed. Option c "Human parvovirus B19 infection" highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim.' },

{ n:66, pr:66, p:401, key:2,
  stem:'A 16y old boy is visiting relatives in West Africa after schooling in England. As part of his preparation to travel he has to be vaccinated against cholera & hepatitis A, and he has to take antimalarials such as primaquine. 2d after starting he notices that his urine is dark and he experiences back pain. He is also jaundiced. Which of these enzyme abnormalities is most likely to be responsible for his symptoms?',
  opts:['Pyruvate kinase deficiency','Triose phosphate isomerase deficiency','Glucose-6-phosphate dehydrogenase deficiency','Phosphoenolpyruvate deficiency','Hexokinase deficiency'],
  expl:'Antimalarials (like primaquine) trigger hemolysis in G6PD deficiency, leading to jaundice and dark urine.',
  note:'Read clear on native, no twin needed. Option c "Glucose-6-phosphate dehydrogenase deficiency" highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim.' },

{ n:67, pr:67, p:403, key:2,
  stem:'Which of the following is the most likely cause of acute onset of purpura and ecchymosis in a child?',
  opts:['Henoch–Schönlein purpura (HSP)','Acute leukemia','Immune thrombocytopenic purpura (ITP)','Hemophilia'],
  expl:'Sudden onset purpura and ecchymosis in a child after a viral illness is most likely ITP',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option c "Immune thrombocytopenic purpura (ITP)" highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim (no closing period printed at end of box text -- reproduced as printed).' },

{ n:68, pr:68, p:405, key:3,
  stem:'A 7-year-old boy has abdominal pain and a rash that started several days ago. On examination, you notice a palpable purpuric rash over his calves and buttocks, with swelling of both ankles. Abdominal examination is unremarkable. What is the most likely laboratory finding?',
  opts:['Decreased platelet count','Hypochromic microcytic anemia','Low C3 complement level','Normal clotting parameters','Prolonged prothrombin time'],
  expl:'HSP is a small-vessel vasculitis, so clotting studies are normal. It presents with palpable purpura, arthritis, and abdominal pain.',
  note:'Read clear on native, no twin needed. Option d "Normal clotting parameters" highlighted yellow and underlined -> key=3. Printed box present, transcribed verbatim. LAST ENTRY of my assigned range (p.359-405). Boundary proof: rendered p.407 (one page past range, belongs to part D) -- it is q69 "Ahmed is a 4-week-old infant who presents with persistent bleeding from a circumcision wound...", an ordinary answered page continuing the same clean 1-for-1 alternation, no section banner or heading change; not staged, part D territory only confirmed by render.' },

/* endpoint-p2-s04-haematology.part-D.js
   Peds ENDPOINT PART 2, section 4 "Hematological Disorders" (PDF pp.245-451), PART D of 4.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf -- NEVER modified.
   Images: <SCRATCH>\ep2-index\native\pNNNN.jpeg (800x450, primary) and
           <SCRATCH>\ep2-index\hires\pNNNN.png (upscale, no extra information -- brief confirmed).
   OCR NOT used to transcribe anything -- content\peds\qb-pages\ocr\ep2\ was not opened.

   Range assigned: PDF pp.407-450 (23 answered pages per the index):
   407, 409, 411, 413, 415, 417, 419, 420, 422, 424, 426, 428, 430, 432, 434, 436, 438, 440,
   442, 444, 446, 448, 450.

   This is a BARE sequence of { ... } object literals separated by one blank line. No array
   wrapper, no commas between entries -- merge-parts-ep2.js restores both. node --check on this
   file WILL fail and that failure is meaningless; validate with
   node tools/bank-harness/check-part-ep.js content/peds/qb-pages/endpoint-p2-s04-haematology.part-D.js

   n starts at 1 in this part (not offset -- merge validates position, does not renumber).

   PAGE-KIND WALK (recorded as read, page by page):
   406 q (twin of 407) -- to be filled in as I go
   ...
   RESUMED 2026-09-04 from n:8/p:422 (predecessor's last complete entry). Continued n:9..22,
   pp.424-450, all 13 remaining answered pages in the assigned range. Predecessor's p.419/420
   duplicate-reprint handling (staged once from p.419 as n:7) NOT revisited, per instructions.
   422 a (n8) / 424 a (n9) / 426 a (n10) / 428 a (n11, box overflow-of-scale exponent crop) /
   430 a (n12) / 432 a (n13) / 434 a (n14) / 436 a (n15) / 438 a (n16) / 440 a (n17) /
   442 a (n18, ⚠️ FLAGGED possible reprint of p.375 in part C -- staged normally, see note) /
   444 a (n19, 300dpi crop for dense numeral block) / 446 a (n20) /
   448 a (n21, ⚠️ FLAGGED possible reprint of p.383 in part C -- staged normally, see note) /
   450 a (n22, LAST ANSWERED PAGE OF SECTION 4) /
   451 = section-closing furniture, a full-page Arabic supplication ("Astaghfirullah..."),
         no stem, no options, no box, no connection to p.450's question -- same shape as
         section 3's closing page (p.244). Opened per §3a box-test / boundary-proof requirement
         before dismissing it. NOT a question, NOT an overflow box. Section 4 range CLOSED at n:22/p:450.

   PART D RANGE IS NOW CLOSED: pp.407-450, 22 entries (n:1-22; p.419+420 folded to one entry
   at n:7 per predecessor's finding), section 4 boundary confirmed at p.451.
*/

{ n:69, pr:69, p:407, key:2,
  stem:'Ahmed is a 4-week-old infant who presents with persistent bleeding from a circumcision wound. Laboratory results show normal platelet count, prolonged prothrombin time (PT), and normal activated partial thromboplastin time (aPTT). What is the most appropriate management?',
  opts:['No action needed','Recombinant factor VIII','Vitamin K','Platelet transfusion'],
  expl:'Prolonged PT with normal platelets and aPTT in a newborn suggests vitamin K deficiency bleeding. Vitamin K injection corrects it.',
  note:'Read native p0407.jpeg whole, clear. Option c "Vitamin K" highlighted yellow + bold + underlined, key=2. Twin at p0406 not yet cross-checked (will check on close-out pass if time permits) -- text on 407 fully legible at native res, no crop needed.' },

{ n:70, pr:70, p:409, key:1,
  stem:'George is a 3-month-old boy who presents with a swollen leg after immunization. Lab results show normal hemoglobin, WBC, and platelets, normal PT, but prolonged aPTT. He has two brothers with a bleeding disorder. What is the most appropriate management?',
  opts:['No action','Recombinant factor VIII','Vitamin K','Platelet transfusion'],
  expl:'Prolonged aPTT with family history of bleeding indicates hemophilia A. Treatment is with factor VIII replacement.',
  note:'Read native p0409.jpeg whole, clear, no crop needed. Option b "Recombinant factor VIII" highlighted yellow + bold + underlined, key=1.' },

{ n:71, pr:71, p:411, key:1,
  stem:'Hyperbilirubinemia in G6PD deficiency is mainly due to?',
  opts:['Reduced conjugation','Hemolysis','Both','Neither'],
  expl:'In G6PD deficiency, hyperbilirubinemia is due to hemolysis of red cells after oxidative stress.',
  note:'Read native p0411.jpeg whole, clear, no crop needed. Option b "Hemolysis" highlighted yellow + bold + underlined, key=1.' },

{ n:72, pr:72, p:413, key:0,
  stem:'All of the following are true medical causes of abdominal pain in children, EXCEPT?',
  opts:['Thalassemia','Sickle cell anemia','Henoch–Schönlein purpura','Porphyria'],
  expl:'Thalassemia causes chronic anemia but not abdominal pain. Sickle cell anemia, HSP, and porphyria are well-known causes of abdominal pain in children.',
  note:'Read native p0413.jpeg whole, clear, no crop needed. Option a "Thalassemia" highlighted yellow + bold + underlined, key=0 (this is an EXCEPT stem so the highlighted option is the non-cause).' },

{ n:73, pr:73, p:415, key:3,
  stem:'An 18-month-old boy whose main diet is cow milk presents with pallor. Stool is negative for blood. Which lab test will most probably reveal the diagnosis?',
  opts:['Chest Xray','Examination of stool for ova and parasites','Blood reticulocyte count','Serum ferritin','Bone marrow aspirate'],
  expl:'Cow’s milk diet predisposes to iron deficiency anemia. Serum ferritin is the best test for confirming low iron stores.',
  note:'Read native p0415.jpeg whole, clear, no crop needed. 5 options a-e. Option d "Serum ferritin" highlighted yellow + bold + underlined, key=3.' },

{ n:74, pr:74, p:417, key:4,
  stem:'Prolongation of Partial thromboplastin time (PTT) with normal Prothrombin time (PT) may be due to:',
  opts:['Hemorrhagic disease of the newborn','DIC','Chronic TP','Henoch-Schonlein purpura','Hemophilia A'],
  expl:'Hemophilia A affects factor VIII, which prolongs APTT but leaves PT normal. Other conditions usually alter both PT and PTT.',
  note:'Read native p0417.jpeg whole, clear, no crop needed. 5 options a-e. Option e "Hemophilia A" highlighted yellow + bold + underlined, key=4. Option c printed exactly "Chronic TP" (no expansion) -- transcribed verbatim as printed, not expanded to ITP.' },

{ n:75, pr:75, p:419, key:1,
  stem:'Splenectomy has NO beneficial therapeutic effect in:',
  opts:['Hereditary spherocytosis','Leukemia','Refractory chronic idiopathic thrombocytopenic purpura','B-thalassemia major'],
  expl:'Splenectomy helps in hereditary spherocytosis, ITP, and sometimes thalassemia, but not in leukemia where the problem is bone marrow, not spleen.',
  note:'⚠️ ALTERNATION BREAK, PART OF PROMPT-FLAGGED PAIR: p0419 and p0420 are BACK-TO-BACK answered pages, both printing the identical stem, identical 4 options a-d, and the identical option b "Leukemia" highlighted yellow+bold+underlined (key=1) -- pixel-for-pixel the same slide content. The ONLY difference is p0420 has NO explanation box at all (blank space where the box sits on p0419); p0420 is not a box-only page (it still carries the full stem+options), so this does NOT match the box:<page> overflow shape described in the brief. This reads as an exact duplicate reprint of the same slide, one with its box and one without -- not a second question, not an overflow box. Staged ONCE here from p0419 (fuller printing, carries the box). p0420 is deliberately NOT given its own entry. Flagging this pairing/reading in the report per instructions rather than deciding it further.' },

{ n:76, pr:76, p:422, key:2,
  stem:'What is the average lifespan of an erythrocyte once it has entered the bloodstream?',
  opts:['1 day','10 days','120 days','200 days','360 days'],
  expl:'Normal red blood cells survive around 120 days before being cleared by the spleen.',
  note:'Read native p0422.jpeg whole, clear, no crop needed -- numeral "120 days" legible plainly at native res. 5 options a-e. Option c "120 days" highlighted yellow + bold + underlined, key=2. Alternation resumed to normal q/a pattern here (p421 is the unanswered twin, not staged).' },

{ n:77, pr:77, p:424, key:1,
  stem:'In case of anemia of chronic disease, which is the most appropriate?',
  opts:['Iron supplements are contraindicated','The anemia is usually normocytic','The hemoglobin is usually <8 g/dL','The serum iron is usually increased','The total iron binding capacity is raised'],
  expl:'In chronic disease, anemia is typically mild and normocytic with low serum iron and low TIBC, but iron supplements don’t help.',
  note:'Read native p0424.jpeg whole, clear, no crop needed. 5 options a-e. Option b "The anemia is usually normocytic" highlighted yellow + bold + underlined, key=1. Box present, printed verbatim.' },

{ n:78, pr:78, p:426, key:0,
  stem:'You are asked to review a 2d old full term baby boy who started bleeding excessively following circumcision. You request a full CBC & clotting. The CBC is normal & the APTT is prolonged at 95 seconds. PT is normal. What is the most likely diagnosis?',
  opts:['Hemophilia','ITP','Severe von Willebrand\'s disease','Vitamin K deficiency'],
  expl:'Hemophilia (A or B) presents with prolonged APTT and normal PT, often first detected after procedures like circumcision.',
  note:'Read native p0426.jpeg whole, clear, no crop needed. 4 options a-d. Option a "Hemophilia" highlighted yellow + bold + underlined, key=0. Numeral "95 seconds" legible plainly at native res.' },

{ n:79, pr:79, p:428, key:2,
  stem:'A 4y old who has been on Rx for epilepsy with Carbamazepine without incident for some considerable time was admitted with a hx of multiple bruising. She had a seizure the previous day, had knocked her head during the attack, and now has a large bruise over the forehead in addition to several over her arms, legs & back. She had recently recovered from a flu like illness & has had a course of Cephalexin. She was on the \'at risk\' register at neglect & a violent father. Clinically, she appeared well & not anemic, with small shotty lymph nodes, otherwise active. Multiple bruises & fine petechiae noted over the trunk and limbs. Hb 11.3 g/dl, WBC 8.0 x 10^9/L, normal WCC, PLT 10x10^9/L. Increased platelet-associated IgG. Bone marrow showed increase in megakaryocytes. The most likely cause of her bruising is?',
  opts:['Glandular fever','Acute lymphoblastic leukemia (ALL)','Idiopathic thrombocytopenic purpura','Carbamazepine-induced bone marrow suppression','Physical abuse'],
  expl:'ITP presents with isolated thrombocytopenia, increased marrow megakaryocytes, and recent viral illness.',
  note:'Read native p0428.jpeg, exponent notation on WBC/PLT counts escalated to 300 dpi crop (ep2-stage/p-0428.jpg) to confirm -- page prints the literal caret "10^9/L" (not a rendered/flattened superscript, not a true superscript either), confirmed at 300 dpi and transcribed exactly as printed for both WBC and PLT counts, per brief note that a flat exponent can be the books own printing. 5 options a-e. Option c "Idiopathic thrombocytopenic purpura" highlighted yellow + bold + underlined, key=2. Stem also prints "normal WCC" immediately after the WBC count -- transcribed verbatim as printed, not corrected.' },

{ n:80, pr:80, p:430, key:3,
  stem:'Which one of the following is a feature of hereditary spherocytosis?',
  opts:['Conjugated hyperbilirubinemia','Hemolytic crises following fava bean ingestion','Short stature','Splenomegaly','X-linked inheritance'],
  expl:'Hereditary spherocytosis typically causes hemolysis, jaundice, gallstones, and splenomegaly.',
  note:'Read native p0430.jpeg whole, clear, no crop needed. 5 options a-e. Option d "Splenomegaly" highlighted yellow + bold + underlined, key=3.' },

{ n:81, pr:81, p:432, key:2,
  stem:'The diagnostic test of hereditary spherocytosis is',
  opts:['Bone marrow examination','Hemoglobin electrophoresis','Osmotic fragility','Coombs test','RBC enzyme Assay'],
  expl:'RBCs in hereditary spherocytosis lyse easily in hypotonic saline, which is the diagnostic hallmark.',
  note:'Read native p0432.jpeg whole, clear, no crop needed. 5 options a-e. Option c "Osmotic fragility" highlighted yellow + bold + underlined, key=2.' },

{ n:82, pr:82, p:434, key:3,
  stem:'A 3-year-old child looks pale. The diagnosis of iron deficiency anemia was made. The found hematologic findings should be (N: MCV 70-100):',
  opts:['Hemoglobin (10); MCV (70); reticulocyte (10%)','Hemoglobin (15); MCV (78); reticulocyte (2%)','Hemoglobin (8), MCV (45), reticulocyte (9%)','Hemoglobin (7.5), MCV (65), reticulocyte (1.0%)','Hemoglobin (7), MCV (80), reticulocyte (16%)'],
  expl:'IDA shows low Hb, low MCV (microcytic anemia), and low reticulocyte count due to lack of iron for RBC production.',
  note:'Read native p0434.jpeg whole, all numerals plainly legible at native res, no crop needed. 5 options a-e. Option d "Hemoglobin (7.5), MCV (65), reticulocyte (1.0%)" highlighted yellow + bold + underlined, key=3.' },

{ n:83, pr:83, p:436, key:1,
  stem:'Which of the following is TRUE about thalassemia?',
  opts:['Increased serum ferritin','Presence of target cells in blood film','Macrocytosis is a typical finding','It is not inherited'],
  expl:'Thalassemia shows hypochromia, microcytosis, and target cells. It is inherited and usually associated with normal or increased ferritin.',
  note:'Read native p0436.jpeg whole, clear, no crop needed. 4 options a-d. Option b "Presence of target cells in blood film" highlighted yellow + bold + underlined, key=1.' },

{ n:84, pr:84, p:438, key:3,
  stem:'A 4-year-old girl diagnosed as ITP, her platelet count is 30,000/dl with no active bleeding or mucous membrane purpura. The next step in her management is:',
  opts:['Steroid','IVIG','Anti-D','Observation and follow up','Splenectomy'],
  expl:'In ITP without bleeding, observation is recommended since most cases resolve spontaneously.',
  note:'Read native p0438.jpeg whole, clear, no crop needed. Unit printed plainly "30,000/dl" (dl, not the more usual /uL) -- transcribed exactly as printed, not corrected. 5 options a-e. Option d "Observation and follow up" highlighted yellow + bold + underlined, key=3.' },

{ n:85, pr:85, p:440, key:2,
  stem:'A 7-year-old boy presents acutely with petechiae on his legs, severe abdominal pain, bloody feces, hematuria and painful joint swelling. The hematology laboratory results are normal. Which one of the following is the most likely diagnosis?',
  opts:['Acute lymphocytic leukemia','Aplast syndrome','Henoch-Schönlein purpura','Juvenile rheumatoid arthritis','Typhus abdominalis'],
  expl:'HSP is a small-vessel vasculitis presenting with purpuric rash, abdominal pain, hematuria, and joint swelling.',
  note:'Read native p0440.jpeg whole, clear, no crop needed. 5 options a-e. Option c "Henoch-Schönlein purpura" highlighted yellow + bold + underlined, key=2. Option b printed exactly "Aplast syndrome" -- transcribed verbatim as printed.' },

{ n:86, pr:86, p:442, key:3,
  stem:'A 12-year-old boy fell while playing in the garden. He developed a very painful swelling of his right knee, aspiration of which revealed the presence of blood. The following laboratory parameters have been obtained: INR is normal, APTT is increased, fibrinogen is normal, antithrombin III level is normal. Bleeding time is 3.3 min (3-8 min). Which one of the following is the most likely cause?',
  opts:['Fibrinogen deficiency','Glucose-6-phosphate dehydrogenase deficiency','Prothrombin deficiency','Hemophilia','Factor VII deficiency'],
  expl:'Hemophilia presents with bleeding into joints (hemarthrosis), prolonged APTT, and normal PT.',
  note:'⚠️ FLAGGED AS POSSIBLE REPRINT OF p.375 (part C range, not opened, per instructions). For adjudication: printed number 86; stem opens exactly "A 12-year-old boy fell while playing in the garden. He developed a very painful swelling of his right knee, aspiration of which revealed the presence of blood."; 5 options a-e (Fibrinogen deficiency / G6PD deficiency / Prothrombin deficiency / Hemophilia / Factor VII deficiency); option d "Hemophilia" highlighted yellow + bold + underlined, key=3; a bordered explanation box IS present, text: "Hemophilia presents with bleeding into joints (hemarthrosis), prolonged APTT, and normal PT." Read native p0442.jpeg whole, clear, no crop needed.' },

{ n:87, pr:87, p:444, key:2,
  stem:'A 2y old boy is admitted to hospital for an elective repair of an inguinal hernia. he has no other medical problems. His preoperative assessment reveals the following results: Hb: 8.6 g/dl, MCV: 58 fl (normal: 75-87 fl), MCHC: 22 g/dl (normal: 32-35 g/dl), WBC 11,200 /dl, platelets: 262.000/dl, HB electrophoresis: hemoglobin A (HbA) 98%; hemoglobin A2 (HbA2) 2%. What is the most likely diagnosis?',
  opts:['Thalassemia trait','Glucose-6-phosphate dehydrogenase deficiency','Iron-deficiency anemia','Normal variation for age','Sickle cell trait'],
  expl:'Microcytic hypochromic anemia with normal Hb electrophoresis indicates iron deficiency, not thalassemia trait.',
  note:'Escalated to 300 dpi crop (ep2-stage/p-0444.jpg) to confirm the dense numeral block; all values confirmed identical to native res: Hb 8.6 g/dl, MCV 58 fl, MCHC 22 g/dl, WBC 11,200 /dl, platelets 262.000/dl (dot as printed, transcribed verbatim), HbA 98%, HbA2 2%. 5 options a-e. Option c "Iron-deficiency anemia" highlighted yellow + bold + underlined, key=2. Stem also prints lowercase "he has no other medical problems" mid-sentence -- transcribed verbatim.' },

{ n:88, pr:88, p:446, key:3,
  stem:'Which of the following is NOT a cause of hydrops fetalis?',
  opts:['Rh incompatibility','ABO incompatibility','Alpha thalassemia major','Beta thalassemia major'],
  expl:'Alpha thalassemia major causes hydrops, but beta thalassemia major presents after birth, not in utero.',
  note:'Read native p0446.jpeg whole, clear, no crop needed. 4 options a-d. Option d "Beta thalassemia major" highlighted yellow + bold + underlined, key=3 (EXCEPT-style stem, highlighted option is the non-cause).' },

{ n:89, pr:89, p:448, key:0,
  stem:'A 3-year-old girl developed petechiae and bruises on her extremities while she is recovering from a cold. She is brought to medical attention after she has had hematemesis and nose bleeding. Physical examination shows a toddler with widespread petechiae and bruising who otherwise looks healthy. What is the best treatment of this patient?',
  opts:['Intravenous gammaglobulins','Rituximab','Intravenous antibiotics','Platelet transfusion','Plasma transfusion'],
  expl:'In ITP with significant bleeding, IVIG is given to quickly raise platelets.',
  note:'⚠️ FLAGGED AS POSSIBLE REPRINT OF p.383 (part C range, not opened, per instructions). For adjudication: printed number 89; stem opens exactly "A 3-year-old girl developed petechiae and bruises on her extremities while she is recovering from a cold."; 5 options a-e (Intravenous gammaglobulins / Rituximab / Intravenous antibiotics / Platelet transfusion / Plasma transfusion); option a "Intravenous gammaglobulins" highlighted yellow + bold + underlined, key=0; a bordered explanation box IS present, text: "In ITP with significant bleeding, IVIG is given to quickly raise platelets." Read native p0448.jpeg whole, clear, no crop needed.' },

{ n:90, pr:90, p:450, key:3,
  stem:'A 3-year-old child looks pale and is diagnosed with iron deficiency anemia (IDA). Which of the following hematological findings would be expected? (Normal MCV: 75–100 fL)',
  opts:['Hemoglobin 10 g/dL, MCV 70 fL, Reticulocyte count 10%','Hemoglobin 15 g/dL, MCV 78 fL, Reticulocyte count 2%','Hemoglobin 8 g/dL, MCV 45 fL, Reticulocyte count 9%','Hemoglobin 7.5 g/dL, MCV 65 fL, Reticulocyte count 1%'],
  expl:'Iron deficiency anemia is microcytic, hypochromic, and has a low reticulocyte response due to impaired iron supply.',
  note:'Read native p0450.jpeg whole, all numerals plainly legible, no crop needed. Only 4 options a-d (no option e on this page). Option d "Hemoglobin 7.5 g/dL, MCV 65 fL, Reticulocyte count 1%" highlighted yellow + bold + underlined, key=3. NOTE: this question is a close near-duplicate of n:14 (p.434, pr:82) -- same clinical framing (3-year-old, IDA, matching Hb/MCV/reticulocyte values a-d), but stem wording differs (this one explicitly names the diagnosis and drops the option-e distractor "Hemoglobin 7, MCV 80, reticulocyte 16%"), and normal MCV range printed here is 75-100 fL vs 70-100 on p.434. Recorded per brief S7 as an observation only -- not folded, not decided here.' }

];
