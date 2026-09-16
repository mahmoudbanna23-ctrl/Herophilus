/*
 * Grade Gain "neuropsychiatry & neurosurgery qb.pdf"
 * Topic 14 "Back & Lower Limb Pain"
 * Questions: PDF pages 066-068 (printed pp.61-63)
 * Answers: PDF page 069 (printed p.64)
 * Offset: PDF page = book page + 5
 * Section markers: Boxed "Back and Lower limb pain / Questions" banner confirmed on PDF 066 (p.61).
 * Boxed "Back and Lower limb pain / Answers" banner confirmed on PDF 069 (p.64).
 * Caveat: The running header at the top corner of each page lags the true section by about one page and cannot be used to identify section boundaries.
 */

var GG_NR_T14_STAGED = [
{ n:316, p:61, key:'B', keyName:null,
  stem:'Which of the following is the most common cause of lower back pain (LBP)?',
  opts:['Lumbar disc herniation', 'Mechanical back pain', 'Osteoporotic fracture', 'Spinal tumor'],
  box:null },

{ n:317, p:61, key:'B', keyName:null,
  stem:'A 45-year-old male presents with acute low back pain after lifting a heavy object. He denies fever, weight loss, or any history of cancer. The pain is localized and does not radiate down the legs. Which of the following is the most likely diagnosis?',
  opts:['Herniated disc', 'Mechanical low back pain', 'Spinal metastasis', 'Cauda equina syndrome'],
  box:null },

{ n:318, p:61, key:'B', keyName:null,
  stem:'A 60-year-old male with a history of neck pain for the last several months presents with new-onset arm pain radiating down the left arm. The pain is worsened by neck movement and relieved by arm abduction. He has numbness and tingling along the left C6 dermatome. Which of the following is the most likely diagnosis?',
  opts:['Cervical spondylosis', 'Cervical disc prolapses (C5-C6 level)', 'Brachial plexus injury', 'Thoracic outlet syndrome'],
  box:null },

{ n:319, p:61, key:'A', keyName:null,
  stem:'A 50-year-old patient complains of chronic neck pain and stiffness with headaches. Examination, there is loss of cervical lordosis and tenderness at the C5-C6 level with a weakness in abduction of the little finger. Which condition is most likely?',
  opts:['Cervical spondylosis', 'Cervical disc prolapses', 'Radiculopathy due to a herniated disc'],
  box:null },

{ n:320, p:61, key:'B', keyName:null,
  stem:'A 40-year-old male presents with chronic LBP. He has no history of trauma, and the pain is localized to the lower back, without any radiation to the legs. He also reports feeling depressed and has difficulty concentrating due to the pain. He is working long hours. What is the most appropriate management?',
  opts:['Opioid analgesics', 'Multidisciplinary approach for both physical and psychological aspects', 'MRI of the lumbar spine', 'Referral to a pain clinic for injections'],
  box:null },

{ n:321, p:61, key:'A', keyName:null,
  stem:'What is the most common cause of sciatica?',
  opts:['Lumbar dacs prolapse', 'Diabetic ischemia of the nerve', 'Sciatic nerve entrapment'],
  box:null },

{ n:322, p:61, key:'C', keyName:null,
  stem:'The MRI cervical spine of patient showed C5 root compression, what is the most common sine of numbness in that patient?',
  opts:['Medial aspect of arm', 'Medial aspect of forearm', 'lateral aspect of the left arm', 'Lateral aspect of forearm'],
  box:null },

{ n:323, p:62, key:'A', keyName:null,
  stem:'A 55-year-old woman complains of chronic neck pain that radiates to her right shoulder and arm. The pain has been ongoing for the past 6 months and is aggravated by neck movement, particularly neck extension. On examination, she has weakness of the right triceps and diminished sensation over the middle finger. Which of the following is the most likely diagnosis?',
  opts:['Cervical spondylosis with radiculopathy (C6-C7)', 'Cervical disc prolapse at C5-C6', 'Cervical myelopathy', 'Thoracic outlet syndrome'],
  box:null },

{ n:324, p:62, key:'B', keyName:null,
  stem:'The most common site for cervical disc herniation is:',
  opts:['C4-C5', 'C5-C6', 'C6-C7', 'C7-T1'],
  box:null },

{ n:325, p:62, key:'B', keyName:null,
  stem:'Which of the following is the best diagnostic technique for cervical disc herniation?',
  opts:['Plain X-ray', 'MRI cervical spine', 'CT cervical spine', 'Ultrasound cervical spine'],
  box:null },

{ n:326, p:62, key:'A', keyName:null,
  stem:'Which of the following findings on a plain X-ray of the cervical spine would raise suspicion for cervical disc herniation?',
  opts:['Loss of normal cervical lordosis', 'Increased cervical lordosis', 'Widening of the disc space', 'Decreased osteophyte formation'],
  box:null },

{ n:327, p:62, key:'B', keyName:null,
  stem:'A 50-year-old patient with cervical disc herniation continues to have severe brachialgia despite medical treatment. The most appropriate next step would be:',
  opts:['MRI cervical spine', 'Surgery for decompression', 'A second round of physical therapy', 'Bed rest and avoidance of lifting'],
  box:null },

{ n:328, p:62, key:'B', keyName:null,
  stem:'A 70-year-old woman presents with acute back pain followed by weakness of dorsiflexion of her left foot. Where would you expect the associated sensory loss?',
  opts:['Anterior thigh', 'Dorsum of foot', 'Perineum', 'Posterior calf', 'Sole of foot'],
  box:'Explanation: The features suggest an LS radiculopathy which would be associated with a loss of sensation in the dorsum of the foot and big toe.' },

{ n:329, p:62, key:'B', keyName:null,
  stem:'A patient with sciatica has pain radiating down the back of the leg to the foot. Which of the following is most likely involved?',
  opts:['L4-L5 nerve root', 'L5-S1 nerve root', 'S1-S2 nerve root', 'T12-L1 nerve root'],
  box:null },

{ n:330, p:62, key:'B', keyName:null,
  stem:'Which of the following clinical features is suggestive of cauda equina syndrome?',
  opts:['Unilateral leg weakness and sensory loss', 'Urinary retention with overflow incontinence', 'Positive straight leg raising test', 'Leg pain aggravated by coughing and sneezing'],
  box:null },

{ n:331, p:63, key:'A', keyName:null,
  stem:'A 45-year-old patient with lumbar disc prolapse complains of pain radiating down the back of the leg, along with numbness in the outer thigh and foot. Which of the following findings is most consistent with this presentation?',
  opts:['Decreased sensation along L5 dermatome, weakness of dorsiflexion', 'Decreased sensation along S1 dermatome, weakness of plantar flexion', 'Absent patellar reflexes', 'Positive Trendelenburg sign'],
  box:'Explanation:(L5 is commonly affected in disc prolapse at the L4-L5 level.)' },

{ n:332, p:63, key:'D', keyName:null,
  stem:'A positive straight leg raising test (SLRT) is indicative of:',
  opts:['Radiculopathy', 'Cauda equina syndrome', 'Sciatica', 'Both A and C'],
  box:null },

{ n:333, p:63, key:'B', keyName:null,
  stem:'What is the main treatment goal for a patient diagnosed with cauda equina syndrome?',
  opts:['Pain management with muscle relaxants', 'Immediate surgical decompression', 'Physical therapy', 'Conservative rest and observation'],
  box:null },

{ n:334, p:63, key:'C', keyName:null,
  stem:'What is the first-line investigation for a patient with uncomplicated mechanical low back pain?',
  opts:['MRI of the lumbar spine', 'X-ray of the lumbosacral spine', 'No imaging required', 'CBC, ESR, and markers'],
  box:null },

{ n:335, p:63, key:'C', keyName:null,
  stem:'In which of the following scenarios should you order imaging for low back pain?',
  opts:['Acute LBP without red flags in a 35-year-old', 'Chronic low back pain in a 55-year-old with no neurological symptoms', 'Low back pain radiating below the knees in a 45-year-old', 'Mechanical low back pain with no associated symptoms'],
  box:null },

{ n:336, p:63, key:'C', keyName:null,
  stem:'A patient present with sensory loss bilaterally below the level of the umbilicus. Which spinal level is most likely involved?',
  opts:['T5', 'T8', 'T10', 'L1'],
  box:'Explanation: T10 is the spinal level that corresponds to the umbilicus' },

{ n:337, p:63, key:'B', keyName:null,
  stem:'A 45-year-old patient presents with sensory loss along the medial shin and front of the knee. On examination, weakness is noted in the hamstrings, and tibialis anterior muscles. Which spinal level is most likely affected?',
  opts:['L3', 'L4', 'L5', 'S1'],
  box:null },

{ n:338, p:63, key:'C', keyName:null,
  stem:'A 50-year-old patient complains of difficulty extending their great toe, and they have sensory loss on the dorsum of the foot. The affected spinal level is:',
  opts:['L3', 'L4', 'L5', 'S1'],
  box:null }
];
