// ans is unmeasured and is documentation only; never a question count.
const SEC_P1 = {
  1: { prefix: 'ophep-exam-eye-', file: 'oph-ep-p1-s01-exam-eye.array.js', svar: 'OPHEP_S01_STAGED', draft: 'oph-ep-p1-s01-exam-eye.draft', chapter: 'op-intro-exam', pages: [6, 133], ans: null, folded: [27] },
  2: { prefix: 'ophep-optics-refraction-', file: 'oph-ep-p1-s02-optics-refraction.array.js', svar: 'OPHEP_S02_STAGED', draft: 'oph-ep-p1-s02-optics-refraction.draft', chapter: 'op-refract', pages: [134, 213], ans: null },
  // Section 3's two within-section folds, both dropped at drafting: n19 (marked p.268, unboxed
  // exact reprint) into n9 (marked p.248), and n7 (marked p.244, boxed second printing, box reading
  // "upper teeth" where n4's reads "gums") into n4 (marked p.238).
  3: { prefix: 'ophep-orbit-', file: 'oph-ep-p1-s03-orbit.array.js', svar: 'OPHEP_S03_STAGED', draft: 'oph-ep-p1-s03-orbit.draft', chapter: 'op-orbit', pages: [214, 272], ans: null, folded: [7, 19] },
  4: { prefix: 'ophep-lacrimal-system-', file: 'oph-ep-p1-s04-lacrimal-system.array.js', svar: 'OPHEP_S04_STAGED', draft: 'oph-ep-p1-s04-lacrimal-system.draft', chapter: 'op-lac', pages: [273, 342], ans: null },
  5: { prefix: 'ophep-eyelids-', file: 'oph-ep-p1-s05-eyelids.array.js', svar: 'OPHEP_S05_STAGED', draft: 'oph-ep-p1-s05-eyelids.draft', chapter: 'op-lid', pages: [343, 416], ans: null },
  6: { prefix: 'ophep-conjunctiva-', file: 'oph-ep-p1-s06-conjunctiva.array.js', svar: 'OPHEP_S06_STAGED', draft: 'oph-ep-p1-s06-conjunctiva.draft', chapter: 'op-conj', pages: [417, 522], ans: null },
  7: { prefix: 'ophep-sclera-', file: 'oph-ep-p1-s07-sclera.array.js', svar: 'OPHEP_S07_STAGED', draft: 'oph-ep-p1-s07-sclera.draft', chapter: 'op-sclera', pages: [523, 559], ans: null },
  8: { prefix: 'ophep-cornea-', file: 'oph-ep-p1-s08-cornea.array.js', svar: 'OPHEP_S08_STAGED', draft: 'oph-ep-p1-s08-cornea.draft', chapter: 'op-cornea', pages: [560, 638], ans: null },
  9: { prefix: 'ophep-lens-', file: 'oph-ep-p1-s09-lens.array.js', svar: 'OPHEP_S09_STAGED', draft: 'oph-ep-p1-s09-lens.draft', chapter: 'op-cat', pages: [639, 717], ans: null },
  10: { prefix: 'ophep-uveal-tract-', file: 'oph-ep-p1-s10-uveal-tract.array.js', svar: 'OPHEP_S10_STAGED', draft: 'oph-ep-p1-s10-uveal-tract.draft', chapter: 'op-uvea', pages: [718, 787], ans: null },
  11: { prefix: 'ophep-glaucoma-', file: 'oph-ep-p1-s11-glaucoma.array.js', svar: 'OPHEP_S11_STAGED', draft: 'oph-ep-p1-s11-glaucoma.draft', chapter: 'op-glauc', pages: [788, 849], ans: null },
  12: { prefix: 'ophep-vitreous-', file: 'oph-ep-p1-s12-vitreous.array.js', svar: 'OPHEP_S12_STAGED', draft: 'oph-ep-p1-s12-vitreous.draft', chapter: null, pages: [850, 879], ans: null }, // no chapter exists for Vitreous; one must be added to modules.js
  13: { prefix: 'ophep-retina-', file: 'oph-ep-p1-s13-retina.array.js', svar: 'OPHEP_S13_STAGED', draft: 'oph-ep-p1-s13-retina.draft', chapter: 'op-ret', pages: [880, 981], ans: null },
  14: { prefix: 'ophep-neuro-ophthalmology-', file: 'oph-ep-p1-s14-neuro-ophthalmology.array.js', svar: 'OPHEP_S14_STAGED', draft: 'oph-ep-p1-s14-neuro-ophthalmology.draft', chapter: 'op-neuro', pages: [982, 1065], ans: null },
  15: { prefix: 'ophep-squint-', file: 'oph-ep-p1-s15-squint.array.js', svar: 'OPHEP_S15_STAGED', draft: 'oph-ep-p1-s15-squint.draft', chapter: 'op-squint', pages: [1066, 1097], ans: null },
  16: { prefix: 'ophep-pediatric-ophthalmology-', file: 'oph-ep-p1-s16-pediatric-ophthalmology.array.js', svar: 'OPHEP_S16_STAGED', draft: 'oph-ep-p1-s16-pediatric-ophthalmology.draft', chapter: null, pages: [1098, 1149], ans: null }, // no chapter exists for Pediatric Ophthalmology; one must be added to modules.js
  17: { prefix: 'ophep-malignancies-eye-adnexa-', file: 'oph-ep-p1-s17-malignancies-eye-adnexa.array.js', svar: 'OPHEP_S17_STAGED', draft: 'oph-ep-p1-s17-malignancies-eye-adnexa.draft', chapter: 'op-onc', pages: [1150, 1181], ans: null },
  18: { prefix: 'ophep-ocular-trauma-', file: 'oph-ep-p1-s18-ocular-trauma.array.js', svar: 'OPHEP_S18_STAGED', draft: 'oph-ep-p1-s18-ocular-trauma.draft', chapter: 'op-trauma', pages: [1182, 1244], ans: null },
  19: { prefix: 'ophep-ocular-systemic-diseases-', file: 'oph-ep-p1-s19-ocular-systemic-diseases.array.js', svar: 'OPHEP_S19_STAGED', draft: 'oph-ep-p1-s19-ocular-systemic-diseases.draft', chapter: 'op-systemic', pages: [1245, 1331], ans: null },
  20: { prefix: 'ophep-drugs-eye-', file: 'oph-ep-p1-s20-drugs-eye.array.js', svar: 'OPHEP_S20_STAGED', draft: 'oph-ep-p1-s20-drugs-eye.draft', chapter: null, pages: [1332, 1373], ans: null }, // no chapter exists for Drugs and the Eye; one must be added to modules.js
  21: { prefix: 'ophep-diagnosis-keys-', file: 'oph-ep-p1-s21-diagnosis-keys.array.js', svar: 'OPHEP_S21_STAGED', draft: 'oph-ep-p1-s21-diagnosis-keys.draft', chapter: 'op-appear', pages: [1374, 1390], ans: null }, // also involves op-insid, op-white, op-acute, op-red
};

// Exam sections draw from every chapter; set chapter: null for all.
const SEC_P2 = {
  22: { prefix: 'ophep2-model-exam-1-', file: 'oph-ep-p2-s22-model-exam-1.array.js', svar: 'OPHEP2_S22_STAGED', draft: 'oph-ep-p2-s22-model-exam-1.draft', chapter: null, pages: [1391, 1545], ans: null }, // exam sections draw from every chapter
  23: { prefix: 'ophep2-model-exam-2-', file: 'oph-ep-p2-s23-model-exam-2.array.js', svar: 'OPHEP2_S23_STAGED', draft: 'oph-ep-p2-s23-model-exam-2.draft', chapter: null, pages: [1546, 1700], ans: null }, // exam sections draw from every chapter
  24: { prefix: 'ophep2-model-exam-3-', file: 'oph-ep-p2-s24-model-exam-3.array.js', svar: 'OPHEP2_S24_STAGED', draft: 'oph-ep-p2-s24-model-exam-3.draft', chapter: null, pages: [1701, 1856], ans: null }, // exam sections draw from every chapter
  25: { prefix: 'ophep2-model-exam-4-', file: 'oph-ep-p2-s25-model-exam-4.array.js', svar: 'OPHEP2_S25_STAGED', draft: 'oph-ep-p2-s25-model-exam-4.draft', chapter: null, pages: [1857, 2022], ans: null }, // exam sections draw from every chapter
  26: { prefix: 'ophep2-model-exam-5-', file: 'oph-ep-p2-s26-model-exam-5.array.js', svar: 'OPHEP2_S26_STAGED', draft: 'oph-ep-p2-s26-model-exam-5.draft', chapter: null, pages: [2023, 2175], ans: null }, // exam sections draw from every chapter
  27: { prefix: 'ophep2-summer-exam-', file: 'oph-ep-p2-s27-summer-exam.array.js', svar: 'OPHEP2_S27_STAGED', draft: 'oph-ep-p2-s27-summer-exam.draft', chapter: null, pages: [2176, 2330], ans: null }, // exam sections draw from every chapter
  28: { prefix: 'ophep2-night-review-', file: 'oph-ep-p2-s28-night-review.array.js', svar: 'OPHEP2_S28_STAGED', draft: 'oph-ep-p2-s28-night-review.draft', chapter: null, pages: [2331, 2442], ans: null }, // exam sections draw from every chapter
};

module.exports = { SEC_P1, SEC_P2 };