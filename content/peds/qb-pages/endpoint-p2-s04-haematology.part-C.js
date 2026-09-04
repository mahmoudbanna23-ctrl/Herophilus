/* endpoint PART 2, section 4 "Hematological Disorders" (banner p.245), PART C.
   Range assigned: PDF pp.359-405. Chapters: haematology / haem-bleeding (drafting pass assigns).
   Staged per tools/bank-harness/pd-ep2-staging-brief.md. OCR NOT opened during this pass.
   n starts at 1 in this part -- merge-parts-ep2.js validates position, it does not renumber.

   Page-kind map for this range (measured from images, not from the OCR index handed to me):
     p.358 unanswered twin of q45 (out of my range, read only as twin) ·
     359 answered q45 · then clean unanswered/answered alternation through 405 (in progress,
     extending as I go). No consecutive answered pages found yet; no notes pages interleaved.

   Question-number walk (pr = printed number, page by page):
     n1 pr45 p359 */

{ n:1, pr:45, p:359, key:4,
  stem:'A 4-year-old girl undergoing chemotherapy for acute lymphoblastic leukaemia presents 8 days after her last treatment with a fever of 39°C. She has a portacath in situ. Her FBC reveals: WCC: 1.0 × 10⁹/L Neutrophils: 0.4 × 10⁹/L Platelets: 100 × 10⁹/L Hb: 10 g/dL What is the most important step in her management?',
  opts:['Packed red cell transfusion','Platelet transfusion','G-CSF administration','Antipyretics','Intravenous antibiotics'],
  expl:'This patient is neutropenic with a fever, which is a medical emergency. Immediate IV antibiotics are essential to prevent sepsis and improve survival.',
  note:'Twin checked (p.358, unanswered, identical stem/options). Option E "Intravenous antibiotics" highlighted yellow and underlined -> key=4. Printed box present, transcribed verbatim.' }

{ n:2, pr:46, p:361, key:1,
  stem:'A 5-month-old baby is brought to the hospital with a swollen left upper arm. Both parents state that he fell while playing. A radiograph shows a spiral fracture of the left humerus. Which feature suggests non-accidental injury?',
  opts:['Immediate presentation to hospital','History does not match the injury','Parents appear distraught','Both parents give consistent accounts','No prior hospital attendances'],
  expl:'A spiral fracture in a non-mobile infant is highly suspicious for non-accidental injury, especially when the injury mechanism is inconsistent with developmental stage.',
  note:'Read clear on native, no twin needed. Option B "History does not match the injury" highlighted yellow and underlined -> key=1. Printed box present, transcribed verbatim.' }

{ n:3, pr:47, p:363, key:1,
  stem:'A 3-year-old male presents to the pediatrician with fever, anorexia, joint pain, petechiae and hepatosplenomegaly. Which of the following diagnostic procedures is MOST likely to yield a definitive diagnosis?',
  opts:['Joint MRI','Bone marrow aspiration','ASOT','Serum iron and TIBC','CSF examination'],
  expl:'Bone marrow aspiration is the most definitive test in a child with fever, joint pain, petechiae, hepatosplenomegaly, and suspected leukemia. It confirms the diagnosis by showing leukemic blasts.',
  note:'Read clear on native, no twin needed. Option b "Bone marrow aspiration" highlighted yellow and underlined -> key=1. Printed box present, transcribed verbatim.' }

{ n:4, pr:48, p:365, key:4,
  stem:'On a routine CBC-screening, a 1.5-year-old is noted to have a microcytic hypochromic anemia. A follow-up hemoglobin electrophoresis demonstrates increased level of hemoglobin A2. The child is MOST likely to have:',
  opts:['Lead poisoning','Iron deficiency','Chronic systemic illness','Sickle cell trait','Beta thalassemia minor'],
  expl:'Increased HbA2 on electrophoresis is the hallmark of β-thalassemia minor. These children present with microcytic hypochromic anemia that does not improve with iron.',
  note:'Read clear on native, no twin needed. Option e "Beta thalassemia minor" highlighted yellow and underlined -> key=4. Printed box present, transcribed verbatim.' }

{ n:5, pr:49, p:367, key:3,
  stem:'Which of the following is the confirmatory test for diagnosing leukemia in children?',
  opts:['Blast cells present in CBC','Hypercellularity of RBC precursors in bone marrow','Leukocytosis','Bone marrow aspiration with cytology'],
  expl:'The confirmatory test for leukemia is bone marrow aspiration, which shows blast cells. CBC alone is not sufficient for a definite diagnosis.',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option d "Bone marrow aspiration with cytology" highlighted yellow and underlined -> key=3. Printed box present, transcribed verbatim.' }

{ n:6, pr:50, p:369, key:2,
  stem:'A 14-month-old infant presents with pallor and anorexia. Laboratory results reveal: Hg 7 g/dl, hypochromic microcytic RBCs, normal WBCs morphology, and low serum ferritin. Which of the following statement is CORRECT?',
  opts:['He probably has beta-thalassemia major','Long-term treatment with packed RBCs transfusion will be required','A dietary history is important','Bone marrow examination is indicated','Osmotic fragility test should be done'],
  expl:'Low Hb, microcytic hypochromic anemia, and low ferritin suggest iron deficiency anemia. The most useful step is taking a dietary history to guide management.',
  note:'Read clear on native, no twin needed. Option c "A dietary history is important" highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim.' }

{ n:7, pr:51, p:371, key:0,
  stem:'What is the most common cause of anemia in school-aged children?',
  opts:['Iron deficiency anemia','Thalassemia','Sickle cell anemia','Megaloblastic anemia'],
  expl:'Iron deficiency anemia is the most common cause of anemia in school-aged children, usually due to poor diet or chronic blood loss.',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option a "Iron deficiency anemia" highlighted yellow and underlined -> key=0. Printed box present, transcribed verbatim.' }

{ n:8, pr:52, p:373, key:0,
  stem:'All of the following are true about thalassemia EXCEPT?',
  opts:['Decreased serum ferritin','Microcytic hypochromic anemia','Increased HbA2 in beta-thalassemia minor','Genetic inheritance'],
  expl:'Thalassemia shows normal or increased ferritin (not decreased), microcytic hypochromic anemia, and raised HbA2 in β-thalassemia minor.',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option a "Decreased serum ferritin" highlighted yellow and underlined -> key=0. Printed box present, transcribed verbatim.' }
