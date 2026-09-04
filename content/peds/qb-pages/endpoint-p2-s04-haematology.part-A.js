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
  note:'Twin checked (p.267, unanswered, identical stem/options). Option C "Anemia of chronic disease" is highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim.' }

{ n:2, pr:2, p:270, key:3,
  stem:'Basophil stippling is seen in blood films of which of the following conditions?',
  opts:['Hereditary spherocytosis','Aplastic anemia','Liver disease','Thalassemia','Xerocytosis'],
  expl:'Basophilic stippling refers to aggregated ribosomes in red cells and is characteristic of thalassemia, lead poisoning, and some anemias. It is not typically seen in hereditary spherocytosis or aplastic anemia.',
  note:'Twin checked (p.269, unanswered, identical stem/options). Option D "Thalassemia" is highlighted yellow and underlined -> key=3. Printed box present, transcribed verbatim.' }

{ n:3, pr:3, p:272, key:0,
  stem:'A 4-month-old infant presents with progressive pallor,microcephaly, snub nose, high-arched palate, hypertelorism, low-set ears, and triphalangeal thumb. Peripheral blood smear shows macrocytic RBCs with low reticulocyte count. Which of the following is the MOST likely diagnosis ?',
  opts:['Diamond-Blackfan anemia','Fanconi anemia','Shwachman-Diamond syndrome','Pearson marrow-pancreas syndrome','Aase syndrome'],
  expl:'Diamond-Blackfan anemia presents in infancy with macrocytic anemia, low reticulocytes, and congenital anomalies like craniofacial defects and thumb abnormalities.',
  note:'Twin checked (p.271, unanswered, identical stem/options; comma after "pallor" with no space is printed on both, reproduced verbatim). Option A "Diamond-Blackfan anemia" is highlighted yellow and underlined -> key=0. Printed box present, transcribed verbatim.' }

{ n:4, pr:4, p:274, key:1,
  stem:'Which of the following is the mainstay therapy of Diamond-Blackfan anemia?',
  opts:['Chronic red cell transfusions','Corticosteroids','Hematopoietic stem cell transplantation','Hydroxyurea','splenectomy'],
  expl:'Corticosteroids are first-line treatment for Diamond-Blackfan anemia, improving red cell production. Some patients may also require chronic transfusions or stem cell transplant.',
  note:'Twin checked (p.273, unanswered, identical stem/options; option E printed lowercase "splenectomy" on both, reproduced verbatim). Option B "Corticosteroids" is highlighted yellow and underlined -> key=1. Printed box present, transcribed verbatim.' }

{ n:5, pr:5, p:276, key:3,
  stem:'Which of the following RBC indices is MOST helpful in the diagnosis of hereditary spherocytosis?',
  opts:['RBC count','MCV','MCH','MCHC','RDW'],
  expl:'In hereditary spherocytosis, MCHC (mean corpuscular hemoglobin concentration) is elevated due to reduced membrane surface area and cell dehydration.',
  note:'Twin checked (p.275, unanswered, identical stem/options). Option D "MCHC" is highlighted yellow and underlined -> key=3. Printed box present, transcribed verbatim.' }

{ n:6, pr:6, p:278, key:1,
  stem:'What is the MOST common inherited pancytopenia syndrome?',
  opts:['Dyskeratosis congenita','Fanconi anemia','Shwachman-Diamond syndrome','Diamond-Blackfan anemia','Congenital amegakaryocytic thrombocytopenia'],
  expl:'Fanconi anemia is the most common inherited cause of pancytopenia, often presenting with physical anomalies and progressive bone marrow failure.',
  note:'RE-READ 2026-09-04 to settle a contaminated note (this entry\'s note previously carried n:7\'s p.279/280 bruising-case text by copy error). Re-verified fresh against the images: p.277 (unanswered twin) and p.278 (answered) both print stem "What is the MOST common inherited pancytopenia syndrome?" with options A.Dyskeratosis congenita, B.Fanconi anemia, C.Shwachman-Diamond syndrome, D.Diamond-Blackfan anemia, E.Congenital amegakaryocytic thrombocytopenia -- identical on both pages, no numerals in this stem. On p.278, option B "Fanconi anemia" is highlighted yellow, bold and underlined -> key=1 (letter B, opts[1]). This CONFIRMS key:1 was already correct; expl already agreed. The prior note\'s "Option D \\"Fanconi anemia\\"... key=3" and its numeral/twin-bruising text did not belong to this entry at all -- they are n:7\'s content (p.279/280) and have been removed here, not merely commented on.' }

{ n:7, pr:7, p:280, key:3,
  stem:'A 4-year-old male develops recurrent epistaxis and easy bruising.. The patient was the first child of unrelated healthy parents born after 41 weeks of pregnancy. Physical examination of the patient reveal short stature, clinodactyly with brachy mesophalangia on bilateral 5th fingers, multiple café-au-lait spots on both thighs and right buttock. He has no other abnormalities. His initial complete blood cell count results are as follows: white blood cell, 5.0×109/L; hemoglobin 9.5 g/dL; platelets 80×109/L.\n\nWhich of the following is the MOST likely diagnosis ?',
  opts:['megaloblastic anemia','Pearson syndrome','congenital Amegakaryocytic Thrombocytopenia','Fanconi anemia','Diamond-Blackfan anemia'],
  expl:'The combination of short stature, café-au-lait spots, congenital anomalies, and pancytopenia suggests Fanconi anemia, a DNA repair disorder.',
  note:'Twin checked (p.279, unanswered, identical stem/options, verbatim including double period after "bruising.."). Option D "Fanconi anemia" is highlighted yellow, bold and underlined -> key=3. Printed box present, transcribed verbatim. FLAGGED NUMERAL/UNIT: stem prints "5.0×109/L" and "80×109/L" with no superscript on the exponent. CONFIRMED AT 300 DPI 2026-09-04 (ep2-stage\\p-0280.jpg and ep2-stage\\p-0279.jpg, both re-rendered independently of the native 800x450 extraction): the "109" is the same size and baseline as the surrounding text on both the answered and unanswered page, no superscript glyph anywhere. This is the book\'s own printing, not an artefact of the low-res native image or of OCR -- staged exactly as printed, most likely intended as x10^9/L (standard WBC/platelet units). Note that n:6 (p.278) prints no numerals at all -- its stem is unrelated to this CBC; an earlier version of n:6\'s note wrongly carried this same flag, now corrected there.' }

{ n:8, pr:8, p:282, key:1,
  stem:'What is the MOST common hematological abnormality in Shwachman Diamond syndrome?',
  opts:['Anemia','Neutropenia','Lymphopenia','Thrombocytopenia','Pancytopenia'],
  expl:'Shwachman-Diamond syndrome typically presents with neutropenia, exocrine pancreatic insufficiency, and skeletal abnormalities.',
  note:'Twin checked (p.281, unanswered, identical stem/options). Option B "Neutropenia" is highlighted yellow, bold and underlined -> key=1. Printed box present, transcribed verbatim. No numerals in question.' }

{ n:9, pr:9, p:284, key:0,
  stem:'What is the MOST common non-hematological abnormality in Shwachman Diamond syndrome?',
  opts:['Pancreatic insufficiency','Elevated transaminase','Skeletal abnormality','Short stature','Rib cage abnormality'],
  expl:'Pancreatic insufficiency is a hallmark of Shwachman-Diamond syndrome, often leading to malabsorption, steatorrhea, and failure to thrive.',
  note:'Twin checked (p.283, unanswered, identical stem/options). Option A "Pancreatic insufficiency" is highlighted yellow, bold and underlined -> key=0. Printed box present, transcribed verbatim. No numerals in question.' }

{ n:10, pr:10, p:286, key:2,
  stem:'A 24-month-old girl was admitted to the hospital because of steatorrhea and short stature. At the age of three months, she presented with convulsions and neutropenia. Since then, she has had frequent purulent otitis media and pneumonias. She also has angular stomatitis and multiple dental caries. Laboratory results were as follows: Hemoglobin: 11.3 g/dL ,Leukocytes: 3,000/uL (Neutrophils 17.3%, Lymphocytes 59.5%, Monocytes 22.9%, Basophils 0.3%, Eosinophils 0% , Platelets: 152,000/uL\n\nWhich of the following is the MOST likely diagnosis ?',
  opts:['Cystic fibrosis','Primary lactase deficiency','Shwachman-Diamond syndrome','Alpha-1 antitrypsin deficiency'],
  expl:'This syndrome combines pancreatic insufficiency, neutropenia, recurrent infections, and poor growth, as seen in the described case.',
  note:'Twin checked (p.285, unanswered, identical stem/options/labs). Only 4 options printed (A-D), no E, on both pages -- not a transcription drop. Option C "Shwachman-Diamond syndrome" is highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim. Numerals checked against both pages, identical: Hgb 11.3 g/dL, Leukocytes 3,000/uL, Neutrophils 17.3%, Lymphocytes 59.5%, Monocytes 22.9%, Basophils 0.3%, Eosinophils 0%, Platelets 152,000/uL -- no exponents/superscripts involved, plain counts, legible at native 800x450 on both pages. Stem transcribed with plain "uL" (micro-litre) rather than the printed micro-sign glyph, and the small red bullet glyph printed before "Hemoglobin" is dropped -- both are typographic symbols, not clinical content; flagged here as a transcription simplification rather than left silent.' }

{ n:11, pr:11, p:288, key:1,
  stem:'A 3-year-old boy presents with a sudden onset of generalized petechiae and purpura for the past two days. He is otherwise healthy and playful. His parents deny any similar past episodes or family history of bleeding disorders. On examination, he is active with normal vital signs. There are no abnormalities apart from the skin lesions. Cardiac and respiratory examinations are unremarkable, and there is no hepatosplenomegaly. What is the most likely diagnosis?',
  opts:['Aplastic anemia','Immune thrombocytopenia','Acute leukemia','von Willebrand disease'],
  expl:'ITP often presents after a viral infection with isolated thrombocytopenia and mucocutaneous bleeding, without systemic illness or organomegaly.',
  note:'Twin checked (p.287, unanswered, identical stem/options). Only 4 options printed (A-D), no E, on both pages. Option B "Immune thrombocytopenia" is highlighted yellow, bold and underlined -> key=1. Printed box present, transcribed verbatim. No numerals in question. This is the first haem-bleeding-topic question in my range (ITP); flagging chapter transition for the drafting pass per brief -- staging does not assign chapters.' }

{ n:12, pr:12, p:290, key:1,
  stem:'Which of the following lab tests results is worrisome in immune thrombocytopenia and should raise the suspicion of another diagnosis?',
  opts:['A platelet count of 1.000 /mm3','A WBCs count of 2.500 /mm3','A hemoglobin count of 8.0 gm/dl','A bone marrow examination showing increase number of  megakaryocytes','A negative Coombs test'],
  expl:'Leukopenia suggests bone marrow involvement and raises concern for leukemia or aplastic anemia rather than isolated ITP.',
  note:'Twin checked (p.289, unanswered, identical stem/options, including the double space before "megakaryocytes" in option D, reproduced verbatim). Option B "A WBCs count of 2.500 /mm3" is highlighted yellow, bold and underlined -> key=1. Printed box present, transcribed verbatim. FLAGGED NUMERAL/UNIT: "1.000" and "2.500" use a period as thousands separator (=1,000 and 2,500, European/decimal-comma convention) -- staged exactly as printed, not converted. FLAGGED NUMERAL/UNIT: "/mm3" prints a PLAIN inline "3", not a superscript -- confirmed at native 800x450 AND at a 300 dpi crop of p.290 (ep2-stage\\p-0290.jpg): the "3" is the same size and baseline as the surrounding text on both options A and B, no superscript glyph anywhere on the page. This is the source slide itself, not an OCR reading -- staged as printed ("mm3"), most likely intended as mm^3.' }

{ n:13, pr:13, p:292, key:0,
  stem:'Autoimmune screen, in the context of immune thrombocytopenia, is required in which of the following clinical conditions?',
  opts:['Five-year-old girl with long history of skin and mucosal bleeding lasting more than one year','Acute history of severe profound epistaxis, heralding possible need for blood transfusion','Acute presentation of intracranial hemorrhage in a background of two weeks skin bleeding that wasn’t without a prior problem','Periorbital bleeding suggesting basal skull fracture after road traffic accident in a newly diagnosed immune thrombocytopenia with one month of the accident'],
  expl:'Chronic ITP with persistent bleeding over a year warrants evaluation for underlying autoimmune diseases such as lupus.',
  note:'Twin checked (p.291, unanswered, identical stem/options, including the curly apostrophe in "wasn’t", reproduced verbatim). Only 4 options printed (A-D), no E, on both pages. Option A "Five-year-old girl with long history..." is highlighted yellow, bold and underlined -> key=0. Printed box present, transcribed verbatim. No numerals in question.' }

{ n:14, pr:14, p:294, key:1,
  stem:'Which of the following is a TRUE fact regarding therapy of idiopathic immune thrombocytopenia?',
  opts:['The majority of patient have moderate to severe symptoms of bleeding','Early therapy does not prevent intracranial hemorrhage','Initiating early therapy affect the outcome of the disease','Antiplatelets antibodies bind to autologous rather than transfused platelets','Aggressive way of management is preferable so as to control bleeding'],
  expl:'Most ITP cases are mild and self-limited; early treatment does not necessarily prevent rare complications like intracranial bleeding.',
  note:'Twin checked (p.293, unanswered, identical stem/options). Option B "Early therapy does not prevent intracranial hemorrhage" is highlighted yellow, bold and underlined -> key=1. Printed box present, transcribed verbatim. No numerals in question.' }

{ n:15, pr:15, p:296, key:1,
  stem:'What is the BEST curative option for a chronic immune thrombocytopenia in a 10-year-old male child, with recurrent epistaxis and gum bleeding that impairs his daily active life style?',
  opts:['Observation','Splenectomy','IVIG','Rituximab','Thrombopoietin receptor agonist'],
  expl:'For chronic, symptomatic ITP unresponsive to medical therapy, splenectomy can offer a curative option by removing the primary site of platelet destruction.',
  note:'Twin checked (p.295, unanswered, identical stem/options). Option B "Splenectomy" is highlighted yellow, bold and underlined -> key=1. Printed box present, transcribed verbatim. No numerals in question.' }

{ n:16, pr:16, p:298, key:3,
  stem:'Splenectomy in Immune thrombocytopenia (ITP) is considered in which of the following conditions?',
  opts:['A two-year old boy with newly diagnosed ITP whose bleeding symptoms failed to be ameliorated with steroids and IVIG','A ten-year old girl with chronic ITP with recurrent symptoms of skin bleeding that is diffuse, not responding to steroids, rituximab and other  medical therapy.','A six-year old boy with acute ITP developed intracranial hemorrhage from a road traffic accident who is hemodynamically stable and his bleeding is controlled with IVIG and steroids','A thirteen-year old girl with chronic ITP and severe vaginal bleeding that necessitated blood transfusion and failed to respond to steroids, IVIG, rituximab and contraceptive therapy.'],
  expl:'Splenectomy is indicated in refractory chronic ITP with severe bleeding, especially after failure of steroids, IVIG, and rituximab.',
  note:'Twin checked (p.297, unanswered, identical stem/options -- line-wrap differs between pages but text is character-identical, including the double space before "medical therapy" in option B, reproduced verbatim). Only 4 options printed (A-D), no E, on both pages. Option D "A thirteen-year old girl..." is highlighted yellow, bold and underlined -> key=3. Printed box present, transcribed verbatim. No numerals in question.' }

{ n:17, pr:17, p:300, key:1,
  stem:'A 2-year-old boy has had pallor since the age of 6 months and received a blood transfusion one month ago. There is a history of a similar illness in an older sibling. On examination, the child has pallor, jaundice, frontal bossing, and hepatosplenomegaly.\n\nWhat is the most likely diagnosis?',
  opts:['Iron deficiency anemia','Beta thalassemia','Peutz-Jeghers syndrome','Sickle cell anemia','Dyskeratosis congenita'],
  expl:'Chronic hemolysis, transfusion dependence, family history, and skeletal changes like frontal bossing point to beta thalassemia major.',
  note:'Twin checked (p.299, unanswered, identical stem/options). Option b) "Beta thalassemia" is highlighted yellow, bold and underlined -> key=1. Printed box present, transcribed verbatim. No numerals in question. Options printed lowercase a)-e) on this page (unlike A.-E. on earlier pages in this range); reproduced as printed.' }

{ n:18, pr:18, p:302, key:0,
  stem:'A 9-month-old boy presents with progressive lethargy, irritability, and pallor since the age of 6 months. He is exclusively breastfed. Laboratory findings reveal:\nHemoglobin: 7 g/dL   MCV: 58 fL   MCH: 19.4 pg/cell\nOsmotic fragility: Normal\n\nWhat is the most likely diagnosis?',
  opts:['Iron deficiency anemia','Acute leukemia','Megaloblastic anemia','Hereditary spherocytosis','G6PD deficiency'],
  expl:'Exclusively breastfed infants may become iron-deficient by 6 months, leading to microcytic hypochromic anemia with low MCV and MCH.',
  note:'Twin checked (p.301, unanswered, identical stem/options/labs). Option a) "Iron deficiency anemia" is highlighted yellow, bold and underlined -> key=0. Printed box present, transcribed verbatim. Numerals plain and legible at native 800x450 on both pages, no exponents involved: Hgb 7 g/dL, MCV 58 fL, MCH 19.4 pg/cell. Three red bullet glyphs printed before Hemoglobin/MCV/MCH and one before Osmotic fragility line are dropped in stem (typographic, not clinical content), reproduced as plain text on separate lines.' }

{ n:19, pr:19, p:304, key:2,
  stem:'A child develops severe bleeding following a tonsillectomy. Laboratory tests show a prolonged bleeding time and a prolonged partial thromboplastin time (PTT).\n\nWhat is the most likely diagnosis?',
  opts:['Hemophilia A','Hemophilia B','Von Willebrand disease','Factor I deficiency'],
  expl:'This condition causes both platelet function defect (↑ bleeding time) and factor VIII deficiency (↑ PTT), and often presents with mucosal bleeding.',
  note:'Twin checked (p.303, unanswered, identical stem/options). Only 4 options printed (a-d), no e, on both pages. Option c) "Von Willebrand disease" is highlighted yellow, bold and underlined -> key=2. Printed box present, transcribed verbatim, including the printed up-arrow glyphs before "bleeding time" and "PTT" (reproduced as printed). No numerals in question.' }

{ n:20, pr:20, p:306, key:4,
  stem:'Frightened parents bring their 2-year-old son with a 2-week history of an upper respiratory tract infection. Yesterday, he developed bruises on his trunk and generalized petechiae, more prominent on the legs. On physical examination, he appears well, with no lymphadenopathy or hepatosplenomegaly. Laboratory testing shows normal hemoglobin, white blood cell count, and differential. The platelet count is 20,000/mm³.Which of the following is the most likely diagnosis?',
  opts:['Thrombotic thrombocytopenic purpura','Von Willebrand disease','Acute lymphoblastic leukemia','Aplastic anemia','Immune thrombocytopenic purpura'],
  expl:'A typical presentation of ITP is isolated thrombocytopenia following a viral illness, with a well child and no organomegaly or systemic signs.',
  note:'Twin checked (p.305, unanswered, identical stem/options, including missing space before "Which" after "20,000/mm³." reproduced verbatim). Option e) "Immune thrombocytopenic purpura" is highlighted yellow, bold and underlined -> key=4. Printed box present, transcribed verbatim. "20,000/mm³" prints a TRUE superscript "3" glyph on both pages at native 800x450 -- not flat, no exponent concern here.' }

{ n:21, pr:21, p:308, key:2,
  stem:'A 1-year-old boy is noted to be pale during a routine check-up. He is on the 75th percentile for weight and the 25th percentile for length. Physical examination is normal except for pallor. His hematocrit is 24%. One question could help identify the most common cause of his presentation.\n\nWhich of the following questions is most likely to reveal the cause of his anemia?',
  opts:['Did the child receive phototherapy for neonatal jaundice?','Has anyone in the family received a blood transfusion?',"What is the child's usual daily diet?",'Is the child on any medications?','What is the pattern and appearance of his bowel movements?'],
  expl:'',
  note:'Twin checked (p.307, unanswered, identical stem/options, including the curly apostrophe in "child\'s", reproduced verbatim). Option c) "What is the child\'s usual daily diet?" is highlighted yellow, bold and underlined -> key=2. NO explanation box printed on this page. Per brief §3a box test, opened the next page (p.309) before moving on: p.309 carries a single full-width bordered teaching paragraph ("Iron deficiency is the most common cause of anemia in toddlers... Dietary history is crucial...") -- NOT an overflow answer box. It differs structurally from every other explanation box in this range (those print as a SMALL box beside/below the options, in a smaller font); p.309\'s box spans nearly the full slide width in body-text size, and the page carries no stem, no options and no highlighted key. Thematically adjacent to this question\'s answer (diet history -> iron deficiency) but not formatted or positioned as this entry\'s box -- flagged for the drafting pass to weigh, not folded in here. Confirms the prior read of p.309 as an unrelated teaching slide (see file-boundary note). expl left "" as p.308 itself prints no box. Numerals (75th/25th percentile, 24% hematocrit) plain and legible on both pages, no exponents.' }
