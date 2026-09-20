/* Generated mechanically from the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json).
   Source pairs: unmarked p.1118 through marked p.1149.
   KEY CONVENTION: 0-based. `key` is an index into `opts` -- 0=A/a, 1=B/b, 2=C/c, 3=D/d, 4=E/e --
   taken directly from the staged marked-page key_index.
   `p` is the row's own UNMARKED page; the marked (answered) page is p+1. Numbering is by position (pair n,
   n=1..16, unmarked p.1118+2(n-1)).
   printed_q on unmarked p.1132 (n8), p.1140 (n12), p.1146 (n15) and p.1148 (n16) holds stem text or a
   leading number, not a plain number -- known, not re-derived here; `stem`/`options` were read clean
   regardless. n9 (p.1134/1135) and n15 (p.1146/1147) print the SAME question (identical stem, options,
   key C/2) TWICE in the source -- an exact within-section reprint, left unfolded here per instruction;
   the fold decision belongs to drafting, not to this row.
   `fig` is left false on every row: the only figure:true staged flag (n1, marked p.1119) describes
   "A table titled 'Predisposing factors:' listing items 1 through 4" -- a table inside the printed
   explanation box, not a clinical image or diagram belonging to the question stem, so it does not meet
   the brief's figure test. No other row stages figure:true.
   n11, n13 and n16 print their MARKED-page options with letter prefixes baked into the option text
   ("A. Transient perinatal conjunctivitis", n11's fourth option misprinted "0." for "D."); every other
   row's options carry no prefix. Copied byte-exact from the marked record per instruction -- flagged for
   the drafter, not normalized here.
   `expl` is verbatim only for boxed rows (boxPrinted true); all other rows keep expl empty. */

/* n11 option labels ("A. ", "B. ", "C. ", and a misprinted "0. " for D) stripped 2026-09-20: labels, not option text. n13 and n16 keep theirs; both are folded, never drafted. */

var OPHEP_S16_STAGED = [

{ n:1, p:1118, key:2,
  stem:"All of the following conditions can cause amblyopia EXCEPT:",
  opts:["Unilateral congenital cataract","Severe unilateral congenital ptosis","Alternating esotropia","Anisometropia"],
  expl:"Alternating esotropia allows both eyes to fixate alternately, preventing suppression and amblyopia. Amblyopia develops only when one eye is constantly deprived of visual stimulation (e.g., congenital cataract, ptosis, or anisometropia).",
  boxPrinted:true,
  keySource:"Recorded in the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json, marked p.1119), 2026-09-20, read by a vision model. Not re-derived by this script.",
  keypos:{"visualIndex":2,"keyposIndex":null,"agree":null},
  numberCheck:false,
  note:"KEY: 2 (c), from the staged s16 source, marked p.1119; printed_q \"1\". EXPLANATION BOX PRINTED -- expl transcribed verbatim from staged JSON, never from OCR. Staging note: 1, 2, 3, 4, 1119",
},

{ n:2, p:1120, key:1,
  stem:"Ophthalmia neonatorum may be caused by the following organisms EXCEPT:",
  opts:["Gonococci","Candida albicans","Herpes simplex","Chlamydia"],
  expl:"Ophthalmia neonatorum is a neonatal conjunctivitis caused mainly by Neisseria gonorrhoeae, Chlamydia trachomatis, or Herpes simplex virus. Candida infection is rare and not a typical cause.",
  boxPrinted:true,
  keySource:"Recorded in the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json, marked p.1121), 2026-09-20, read by a vision model. Not re-derived by this script.",
  keypos:{"visualIndex":1,"keyposIndex":null,"agree":null},
  numberCheck:false,
  note:"KEY: 1 (b), from the staged s16 source, marked p.1121; printed_q \"2\". EXPLANATION BOX PRINTED -- expl transcribed verbatim from staged JSON, never from OCR. Staging note: 2, 1121",
},

{ n:3, p:1122, key:2,
  stem:"The commonest cause of leukocoria in a child is:",
  opts:["Retinoblastoma","Persistent hyperplastic primary vitreous","Congenital cataract","Congenital toxoplasmosis"],
  expl:"",
  boxPrinted:false,
  keySource:"Recorded in the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json, marked p.1123), 2026-09-20, read by a vision model. Not re-derived by this script.",
  keypos:{"visualIndex":2,"keyposIndex":null,"agree":null},
  numberCheck:false,
  note:"KEY: 2 (c), from the staged s16 source, marked p.1123; printed_q \"3\". NO EXPLANATION BOX PRINTED on the marked page. Staging note: 3, 1123",
},

{ n:4, p:1124, key:2,
  stem:"A 7-year-old child with excessive tearing since birth presents with a painless, non-tender swelling near the medial canthus that appeared 2 days ago. What is the most likely diagnosis?",
  opts:["Dacryocystitis","Chalazion","Mucocele","Preseptal cellulitis"],
  expl:"A mucocele presents as a painless, non-tender swelling near the medial canthus due to obstruction of the nasolacrimal duct. It is chronic and non-inflammatory, unlike dacryocystitis.",
  boxPrinted:true,
  keySource:"Recorded in the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json, marked p.1125), 2026-09-20, read by a vision model. Not re-derived by this script.",
  keypos:{"visualIndex":2,"keyposIndex":null,"agree":null},
  numberCheck:false,
  note:"KEY: 2 (c), from the staged s16 source, marked p.1125; printed_q \"4\". EXPLANATION BOX PRINTED -- expl transcribed verbatim from staged JSON, never from OCR. Staging note: 4, 7, 2, 1125",
},

{ n:5, p:1126, key:0,
  stem:"A newborn presents with purulent eye discharge (ophthalmia neonatorum). The doctor treated the baby with topical antibiotics and systemic ceftriaxone. What is the most likely causative organism?",
  opts:["Neisseria gonorrhoeae","Chlamydia trachomatis","Staphylococcus aureus","Chlamydia pneumoniae"],
  expl:"Gonococcal ophthalmia neonatorum occurs within the first few days after birth and is characterized by purulent discharge. It requires systemic ceftriaxone because of the risk of corneal perforation.",
  boxPrinted:true,
  keySource:"Recorded in the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json, marked p.1127), 2026-09-20, read by a vision model. Not re-derived by this script.",
  keypos:{"visualIndex":0,"keyposIndex":null,"agree":null},
  numberCheck:false,
  note:"KEY: 0 (a), from the staged s16 source, marked p.1127; printed_q \"5\". EXPLANATION BOX PRINTED -- expl transcribed verbatim from staged JSON, never from OCR. Staging note: 1127",
},

{ n:6, p:1128, key:0,
  stem:"An infant presents with photophobia, tearing, and blepharospasm. On examination, the cornea appears enlarged and clear.\nWhat is the most likely diagnosis?",
  opts:["Primary congenital glaucoma","Keratoconjunctivitis","Congenital cataract","Retinoblastoma"],
  expl:"Infants with congenital glaucoma present with epiphora, photophobia, and blepharospasm due to high intraocular pressure. The cornea may appear enlarged and clear (buphthalmos).",
  boxPrinted:true,
  keySource:"Recorded in the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json, marked p.1129), 2026-09-20, read by a vision model. Not re-derived by this script.",
  keypos:{"visualIndex":0,"keyposIndex":null,"agree":null},
  numberCheck:false,
  note:"KEY: 0 (a), from the staged s16 source, marked p.1129; printed_q \"6\". EXPLANATION BOX PRINTED -- expl transcribed verbatim from staged JSON, never from OCR. Staging note: 6, 1129",
},

{ n:7, p:1130, key:0,
  stem:"What should pediatricians do for all neonates and infants?",
  opts:["Red reflex testing","Fundus photography","OCT","Visual acuity testing"],
  expl:"All neonates should undergo red reflex testing to detect early ocular abnormalities such as congenital cataract or retinoblastoma, which can threaten vision or life.",
  boxPrinted:true,
  keySource:"Recorded in the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json, marked p.1131), 2026-09-20, read by a vision model. Not re-derived by this script.",
  keypos:{"visualIndex":0,"keyposIndex":null,"agree":null},
  numberCheck:false,
  note:"KEY: 0 (a), from the staged s16 source, marked p.1131; printed_q \"7\". EXPLANATION BOX PRINTED -- expl transcribed verbatim from staged JSON, never from OCR. Staging note: 7, 1131",
},

{ n:8, p:1132, key:0,
  stem:"When to screen neonates born at 26 weeks gestation for ROP?",
  opts:["6 weeks after birth","At birth","2 weeks after birth","1 month after birth"],
  expl:"Screening for retinopathy of prematurity (ROP) is done at 6 weeks postnatal age or 31–33 weeks post-conceptional age, whichever is later. This allows early detection and treatment before retinal detachment develops.",
  boxPrinted:true,
  keySource:"Recorded in the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json, marked p.1133), 2026-09-20, read by a vision model. Not re-derived by this script.",
  keypos:{"visualIndex":0,"keyposIndex":null,"agree":null},
  numberCheck:false,
  note:"KEY: 0 (a), from the staged s16 source, marked p.1133; printed_q \"8\". EXPLANATION BOX PRINTED -- expl transcribed verbatim from staged JSON, never from OCR. Staging note: 8, 26, 6, 31, 33, 1133",
},

{ n:9, p:1134, key:2,
  stem:"A 2-year-old child with esotropia and amblyopia. What is the most appropriate management for that child?",
  opts:["Spectacles","Refractive surgery","Full cycloplegic correction with eye patching","Eye patching"],
  expl:"Treatment of amblyopia\nTreatment of the cause: spectacles for anisometropia, treat media opacity or ptosis... etc.\nOcclusion Therapy: Patching the good eye to force the brain to use the non-dominant eye and redevelop its vision.\nAtropine cycloplegic drops to impair accommodation and blur vision of the better-seeing eye.",
  boxPrinted:true,
  keySource:"Recorded in the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json, marked p.1135), 2026-09-20, read by a vision model. Not re-derived by this script.",
  keypos:{"visualIndex":2,"keyposIndex":null,"agree":null},
  numberCheck:false,
  note:"KEY: 2 (c), from the staged s16 source, marked p.1135; printed_q \"9\". EXPLANATION BOX PRINTED -- expl transcribed verbatim from staged JSON, never from OCR. Staging note: 2, 1135",
},

{ n:10, p:1136, key:2,
  stem:"A young boy with Down syndrome presents to the ophthalmologist with conical protrusion and thinning of the cornea. Which of the following is a useful tool for decision making and management of that patient?",
  opts:["Amsler's grid","CT orbit","Pentacam","None of the above"],
  expl:"Investigations of keratoconus -> Corneal topography (Map of corneal curvature is diagnostic), Pachymetry (measurement of the corneal thickness) & Pentacam (It gives, in addition to both topography and corneal thickness data, other data that help decision making and management of KC).",
  boxPrinted:true,
  keySource:"Recorded in the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json, marked p.1137), 2026-09-20, read by a vision model. Not re-derived by this script.",
  keypos:{"visualIndex":2,"keyposIndex":null,"agree":null},
  numberCheck:false,
  note:"KEY: 2 (c), from the staged s16 source, marked p.1137; printed_q \"10\". EXPLANATION BOX PRINTED -- expl transcribed verbatim from staged JSON, never from OCR. Staging note: 10, 1137",
},

{ n:11, p:1138, key:1,
  stem:"A newly-born baby was being examined by the neonatologist who concluded that the baby had some form of purulent conjunctivitis. Which of the following is the most likely diagnosis?",
  opts:["Transient perinatal conjunctivitis","Ophthalmia neonatorum","Viral conjunctivitis","None of the above"],
  expl:"",
  boxPrinted:false,
  keySource:"Recorded in the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json, marked p.1139), 2026-09-20, read by a vision model. Not re-derived by this script.",
  keypos:{"visualIndex":1,"keyposIndex":null,"agree":null},
  numberCheck:false,
  note:"KEY: 1 (b), from the staged s16 source, marked p.1139; printed_q \"11\". NO EXPLANATION BOX PRINTED on the marked page. Staging note: 11, 1139",
},

{ n:12, p:1140, key:1,
  stem:"An infant was found to have ox eye together with enlarged cloudy cornea. Which of the following is the most likely diagnosis?",
  opts:["Pediatriac cataract","Congenital glaucoma","RetinobU1stoma","Retinopathy of prematurity"],
  expl:"",
  boxPrinted:false,
  keySource:"Recorded in the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json, marked p.1141), 2026-09-20, read by a vision model. Not re-derived by this script.",
  keypos:{"visualIndex":1,"keyposIndex":null,"agree":null},
  numberCheck:false,
  note:"KEY: 1 (b), from the staged s16 source, marked p.1141; printed_q 12. NO EXPLANATION BOX PRINTED on the marked page. Staging note: 12, 1141",
},

{ n:13, p:1142, key:2,
  stem:"A 5-year-old girl was brought to the ophthalmologist with a complaint of impaired vision and strabismus. Red reflex was altered (leukocoria) and ultrasonography revealed a calcified mass within the retina. Which of the following is the most likely diagnosis?",
  opts:["A. Squamous cell carcinoma","B. Basal cell carcinoma","C. Retinoblastoma","D. Sebaceous carcinoma","E. Choroidal melanoma"],
  expl:"",
  boxPrinted:false,
  keySource:"Recorded in the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json, marked p.1143), 2026-09-20, read by a vision model. Not re-derived by this script.",
  keypos:{"visualIndex":2,"keyposIndex":null,"agree":null},
  numberCheck:false,
  note:"KEY: 2 (c), from the staged s16 source, marked p.1143; printed_q \"13\". NO EXPLANATION BOX PRINTED on the marked page. Staging note: 13, 5, 1143",
},

{ n:14, p:1144, key:1,
  stem:"A baby born at gestational age of 29 weeks. What is the optimal time to screen for retinopathy of prematurity in that baby?",
  opts:["3 weeks after delivery","4 weeks after delivery","5 weeks after delivery","6 weeks after delivery"],
  expl:"",
  boxPrinted:false,
  keySource:"Recorded in the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json, marked p.1145), 2026-09-20, read by a vision model. Not re-derived by this script.",
  keypos:{"visualIndex":1,"keyposIndex":null,"agree":null},
  numberCheck:false,
  note:"KEY: 1 (b), from the staged s16 source, marked p.1145; printed_q \"14\". NO EXPLANATION BOX PRINTED on the marked page. Staging note: 14, 29, 3, 4, 5, 6, 1145",
},

{ n:15, p:1146, key:2,
  stem:"A 2-year-old child with esotropia and amblyopia. What is the most appropriate management for that child?",
  opts:["Spectacles","Refractive surgery","Full cycloplegic correction with eye patching","Eye patching"],
  expl:"",
  boxPrinted:false,
  keySource:"Recorded in the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json, marked p.1147), 2026-09-20, read by a vision model. Not re-derived by this script.",
  keypos:{"visualIndex":2,"keyposIndex":null,"agree":null},
  numberCheck:false,
  note:"KEY: 2 (c), from the staged s16 source, marked p.1147; printed_q \"15\". NO EXPLANATION BOX PRINTED on the marked page. Staging note: 15, 2, 1147",
},

{ n:16, p:1148, key:1,
  stem:"Which of the following is the most common cause of amblyopia in children?",
  opts:["A. Strabismus","B. Anisometropia","C. Occlusion ambylopia","D. Bilateral uncorrected refractive errors"],
  expl:"",
  boxPrinted:false,
  keySource:"Recorded in the staged s16 source (oph-ep-p1-s16-pediatric-ophthalmology.staging.json, marked p.1149), 2026-09-20, read by a vision model. Not re-derived by this script.",
  keypos:{"visualIndex":1,"keyposIndex":null,"agree":null},
  numberCheck:false,
  note:"KEY: 1 (b), from the staged s16 source, marked p.1149; printed_q \"16\". NO EXPLANATION BOX PRINTED on the marked page. Staging note: 16, 1149",
},

];
if (typeof module !== "undefined") module.exports = OPHEP_S16_STAGED;
