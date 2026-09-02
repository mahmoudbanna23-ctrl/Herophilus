/* =============================================================================
   GRADE GAIN OPHTHALMOLOGY — "Tutorial Exam" — VERBATIM STAGING RECORD
   Source: Semester 8\Opthalmo\Questions\ophthalmology qb.pdf
   Transcribed 2026-09-02. This file is the staging record, not app data.
   =============================================================================

   Shape copied from the finished sibling gg-ee4.array.js exactly:
       { n:<QUESTION number 1..N>, p:<BOOK page>, key:'<LETTER>',
         stem:'...', opts:['...','...'], note:'...' }
   Field names are `p`/`key`/`opts`, never `page`/`answer`/`options`. This
   section carries no topic number of its own — the book heads it "Tutorial
   Exam", not "Topic N" — so the variable name says TUTORIAL, not a numeral.

   ---------------------------------------------------------------------------
   BANNER, transcribed off the pixels
   ---------------------------------------------------------------------------
   Blue banner at the top of the LEFT column of book p.160, two lines:
       "Tutorial Exam"  /  sub-banner "Questions"
   Answer banner on book p.167 — same wording, ORANGE/TAN fill (the same
   colour End Exam 4's answer banner used): "Tutorial Exam" / "Answers".
   Running head on every page of the section: "QUESTION BANK: Previous Exam",
   the generic past-paper running head, identical to the End Exams. The
   section title used in this header is the banner's own wording: Tutorial Exam.

   ---------------------------------------------------------------------------
   PAGE MAP — folio numerals read off each page's OWN printed footer
   ---------------------------------------------------------------------------
     book-160.png   footer "| P a g e 160"   banner + Q1-Q6
                    (left column Q1,Q2,Q3 · right column Q4,Q5,Q6)
     book-161.png   footer "| P a g e 161"   Q7-Q11   (left 7,8,9 · right 10,11)
     book-162.png   footer "| P a g e 162"   Q12-Q15  (left 12,13 · right 14,15)
     book-163.png   footer "| P a g e 163"   Q16-Q18  (left 16 · right 17,18)
     book-164.png   footer "| P a g e 164"   Q19-Q22  (left 19,20 · right 21,22)
     book-165.png   footer "| P a g e 165"   Q23-Q25  (left 23,24 · right 25)
     book-166.png   footer "| P a g e 166"   Q26-Q27  (left 26 · right 27)
     book-167.png   footer "| P a g e 167"   ANSWERS Q1-Q27
   EVERY filename matched the folio printed in its own footer. Eight for eight,
   no adjustment needed and none made. The brief's offset (book = sheet - 7)
   could not be re-derived here because no PDF was opened — only the FOLIOS
   were checked, which is what the brief asked for.

   ---------------------------------------------------------------------------
   COUNT: 27 printed, Q1-Q27. MEASURED THREE WAYS, ALL THREE AGREE.
   ---------------------------------------------------------------------------
   (1) FORWARDS, page by page, off the printed question numerals, each page
       tallied on its own so an offsetting error between two pages cannot hide
       inside the total:
         p.160 = 6 · p.161 = 5 · p.162 = 4 · p.163 = 3 · p.164 = 4 ·
         p.165 = 3 · p.166 = 2
         6+5+4+3+4+3+2 = 27.
   (2) BACKWARDS from the highest printed numeral: p.166 ends at "27."; walking
       upwards 27,26 | 25,24,23 | 22,21,20,19 | 18,17,16 | 15,14,13,12 |
       11,10,9,8,7 | 6,5,4,3,2,1 — contiguous, no skip, no repeat ⇒ 27.
   (3) ANSWER-KEY ENTRIES on book p.167: numbered lines 1. through 27., counted
       individually down the single column = 27 entries.
   27 = 27 = 27. The brief's prior of "27" was CORRECT — but it was measured,
   not adopted.

   ---------------------------------------------------------------------------
   BOUNDARIES
   ---------------------------------------------------------------------------
   OPENING: the "Tutorial Exam / Questions" banner is the first printed element
   in the left column of p.160, directly beneath the running head; Q1 starts
   immediately under it. Nothing of a previous section survives onto p.160.
   CLOSING: Q27 finishes inside the right column of p.166 with the lower ~55%
   of BOTH columns blank; p.167 is the Answers page, which prints the banner
   and 27 key lines and nothing else, its right column entirely empty and its
   lower half blank. No question tail spills onto the answer page.
   ⚠️ THE BRIEF ASKED FOR ONE PAGE PAST THE LAST AND THAT COULD NOT BE DONE.
   Only book-160…book-167 were supplied, and the brief forbids rendering or
   opening the PDF, so book p.168 was never seen. Stated plainly rather than
   silently skipped. The tail is nonetheless closed by construction: the key
   block runs 1→27 and stops, and a 28th question would need a 28th key.

   ---------------------------------------------------------------------------
   KEY-BLOCK ALIGNMENT — 27 key entries against 27 questions
   ---------------------------------------------------------------------------
   The key block is a SEPARATE page (book p.167), format "N. Correct Answer: X",
   one entry per line, single column, running 1 → 27 with no gap and no repeat.
   Counts match exactly (27 vs 27), so no shift is arithmetically possible.
   The letters were read OFF THE IMAGE, twice, at 3x zoom in two overlapping
   crops (entries 1-14 and 14-27, entry 14 read in both and agreeing). No key
   was inferred from the question text and no answer was reasoned about
   medically — that is a later pass's job.

   ---------------------------------------------------------------------------
   LETTERING INTEGRITY: CLEAN. Every one of the 27 questions prints exactly
   FOUR options lettered A. B. C. D. in order — no gap, no repeated letter, no
   skipped letter, no E anywhere in this section. Each menu was counted on its
   own; the brief's warning that option counts vary in this bank is real for
   the bank but did not bite here.
   ⇒ PRINTED LETTER AND ZERO-BASED INDEX AGREE THROUGHOUT: A=0, B=1, C=2, D=3.
   EVERY printed key letter (A, B, C, D and the lowercase d at 19) falls inside
   its own question's four-option menu. No key points past the end of a list.
   ---------------------------------------------------------------------------

   ---------------------------------------------------------------------------
   STRADDLES: NONE. No stem, option menu or key breaks across a page boundary.
   The only mid-page breaks are ordinary LINE WRAPS inside a single option
   (Q3 D, Q14 B/D, Q16 A/B/C/D, Q23 A/B/C/D, Q24 C/D, Q25 A/B/C/D, Q26 A/B/C/D,
   Q27 C/D) and inside stems — all within one column, all fully visible.
   ---------------------------------------------------------------------------

   ---------------------------------------------------------------------------
   PRINTED EXPLANATION BOXES: 0 — COUNTED ON ALL EIGHT PAGES, NOT ASSUMED.
   Every page was scanned top to bottom in both columns for a boxed, tinted or
   ruled explanatory block. There is none. No question carries explanatory text
   beneath it. ⇒ markers required in the draft = 27 entries − 0 boxes = 27.
   ---------------------------------------------------------------------------

   ---------------------------------------------------------------------------
   FIGURES: 0 — COUNTED. No photograph, diagram, chart or illustration on any
   of the eight pages. Every stem is answerable from text alone; there is no
   crop work for the hub in this section. The only non-text marks are the
   "ASM MinDS" publisher logo in the running head, the banner rules, and faint
   BLEED-THROUGH from the reverse of the sheet behind both banners (on p.167
   the ghost is p.166's Q27 opening lines). Bleed-through is not content and is
   not transcribed.
   ---------------------------------------------------------------------------

   ---------------------------------------------------------------------------
   SPELLING REGISTER (reported, NOT normalised): this section is uniformly
   AMERICAN — "hemorrhage" (Q4 opt B, Q12 opt A), "edema" (Q19, Q26),
   "hyperemia" (Q25 opt C, Q27), "color" (Q13, Q15 opt A), "ischemic" (Q24
   opt C), "neighbor" (Q25). ZERO British forms anywhere in the 27 questions.
   Left exactly as printed. The brief warned to keep British spellings such as
   "anaesthetics" — none occurs in this section.
   ---------------------------------------------------------------------------

   ---------------------------------------------------------------------------
   SOURCE DEFECTS — the per-entry `note:` fields below are the draft's
   AUTHORISED REPAIR LIST. Nothing was corrected in `stem` or `opts`.
   Twenty of the 27 entries carry a note. The recurring shapes are:
     * MISSING SENTENCE-ENDING FULL STOPS, so two sentences run together with
       a capital at the join — Q6, Q9, Q10 (three times), Q12, Q25, Q26,
       Q27 (three times). This is the section's signature defect.
     * A FULL STOP FOLLOWED BY LOWERCASE — Q13 ("OS 6/60. defective"),
       Q25 ("right eye. when"), Q26 ("anterior segment. you").
     * MISSPELLINGS — "imitated" for irritated (Q1), "me" for eye (Q4),
       "fluoresceine"/"Fluoresceine" for fluorescein (Q6, Q8, Q17 opt B,
       Q19 opt D), "vison" for vision (Q17).
     * A DOUBLED OPTION LABEL — Q10 option B prints "B CRAO".
     * A TRUNCATED OPTION — Q15 option D "OCT for optic", no noun.
     * INCONSISTENT OPTION PUNCTUATION inside one menu — Q16, Q23, Q25.
   ⚠️ NOTHING HERE WAS REPAIRED. A defective key is noted, never disputed.
   ---------------------------------------------------------------------------
*/
var GG_TUTORIAL_STAGING = [
  { n:1, p:160, key:'C',
    stem:'23-year-old teacher complains that her right eye is red and imitated. You note moderate injection of the larger conjunctival vessels, watery discharge, and a palpable preauricular lymph node. From this information alone, what tentative diagnosis would you make?',
    opts:['Bacterial conjunctivitis','Vernal kerato-conjunctivitis','Viral conjunctivitis','Atopic allergic conjunctivitis'],
    note:'SOURCE DEFECT: the stem prints "red and imitated" — "imitated" where the sense is "irritated". Confirmed at 3x zoom off book-160.png. NOT repaired here.' },
  { n:2, p:160, key:'B',
    stem:'In the previous Q, based on the above information, which of the following symptoms or facts might be elicited by careful history taking?',
    opts:['Blurred vision','Sore throat','Exposure to children with colds','Itching'] },
  { n:3, p:160, key:'D',
    stem:'In the previous Q, Management consists of which of the following?',
    opts:['Topical mast cell stabilizer','Broad-spectrum antibiotic eyedrops','Referral to an ophthalmologist','Strict hygienic measure and cold compresses'],
    note:'SOURCE DEFECT: mid-sentence capital in "Q, Management consists". Also "measure" singular in option D. As printed.' },
  { n:4, p:160, key:'B',
    stem:'65-year-old man with history of a recent bronchitis awoke this morning a red eye and has no other symptoms. He has no significant me problems. On examination, the patient has a sector of the eye that is solid red with injection of the conjunctival vessels. What is the most likely diagnosis?',
    opts:['Scleritis','Subconjunctival hemorrhage','Early viral conjunctivitis','Pterygium'],
    note:'SOURCE DEFECT: the stem prints "no significant me problems" — "me" where the sense is "eye". Confirmed at 3x zoom. Also "awoke this morning a red eye" is missing a preposition. NOT repaired here.' },
  { n:5, p:160, key:'B',
    stem:'In the previous Q, Management would consist of which of the following?',
    opts:['Oral NSAIDS','Assurance and follow up','Topical steroid','Urgent referral to ophthalmologist'],
    note:'SOURCE DEFECT: mid-sentence capital in "Q, Management would consist". Option A prints "NSAIDS" in full caps with no apostrophe. As printed.' },
  { n:6, p:160, key:'B',
    stem:'54-year-old woman with a red, painful eye and the patient is complaining of photophobia When you examine her, you note that visual acuity is decreased in the affected eye and cornea appears opaque and hazy with positive fluoresceine staining. What is the most likely diagnosis?',
    opts:['Conjunctivitis','Corneal ulcer','Old corneal scar','Scleritis'],
    note:'SOURCE DEFECTS: no full stop after "photophobia", so two sentences run together at "photophobia When"; "fluoresceine" for fluorescein. Both confirmed at 3x zoom. As printed.' },
  { n:7, p:161, key:'D',
    stem:'In the previous Q, regarding your management, which of the following should be avoided?',
    opts:['Intensive topical antimicrobial eye drops','Topical cycloplegic eye drops','Scraping for culture and sensitivity','Topical steroid therapy'] },
  { n:8, p:161, key:'A',
    stem:'45-year-old man reports a 2-day history of redness, pain, and photophobia of his left eye. He denies any trauma to the eye, fluoresceine staining reveals dendritic corneal ulcer. Management would consist of which of the following?',
    opts:['Topical antiviral like acyclovir','Topical steroid therapy','Topical antibiotics','Assurance and follow-up in one week'],
    note:'SOURCE DEFECTS: "fluoresceine" for fluorescein; comma splice at "trauma to the eye, fluoresceine staining reveals". As printed.' },
  { n:9, p:161, key:'C',
    stem:'50 years old female patient came to her family doctor complaining of redness of her left eye. Examination showed 28 mmHg IOP 6/24 VA, hazy cornea and pupillary constriction The most probable diagnosis is?',
    opts:['Bacterial conjunctivitis','Acute closed angle glaucoma','Acute iridocyclitis','Bacterial keratitis'],
    note:'SOURCE DEFECTS: no full stop after "constriction", so two sentences run together at "constriction The"; the closing sentence is a statement ending in a question mark. Numerals read WITH their units at 3x zoom: 28 mmHg IOP, 6/24 VA. As printed.' },
  { n:10, p:161, key:'B',
    stem:'60-year-old man notes sudden profound loss of vision in his right eye, with onset one hour ago, the patient has a past medical history of hypertension. On examination, the visual acuity is OD hand motion and OS 6/6 the pupil of the right eye shows RAPD The direct ophthalmoscope shows that the red reflex is clear in both eyes. Fundus examination in the right eyes reveals a white opacified retina with cherry red spot in the macular are. The left eye is normal. No other clinical manifestation What is your diagnosis?',
    opts:['AION','B CRAO','Optic neuritis','Retinal detachment'],
    note:'SOURCE DEFECTS, four of them, all confirmed at 3x zoom. (1) OPTION B PRINTS ITS OWN LABEL TWICE: the line reads "B. B CRAO", so the option TEXT is literally "B CRAO". Recorded verbatim. (2) "macular are." for "macular area". (3) Missing full stops after "OS 6/6", after "RAPD" and after "manifestation", each running two sentences together. (4) "right eyes" plural for one eye. Nothing repaired.' },
  { n:11, p:161, key:'B',
    stem:'In the previous Q, regarding your diagnosis, which of the following would be the most appropriate way of management?',
    opts:['Systemic steroid','AC paracentesis','Carotid doppler U/S','Anti-VEGF'] },
  { n:12, p:162, key:'C',
    stem:'A healthy 48-year-old man complains of seeing" floating black dots in the field of vision of his right eyes for 2 days, associated with sensation of flashing light in the periphery of the visual field later on, he noticed a disturbance in the temporal field of vision of his right eye like "curtain coming down". His visual acuity is 6/6 in both eyes. Anterior segment examination is normal. The red reflex of the left eye is normal but in the right eye reveals area of grayish reflex What is your diagnosis?',
    opts:['Vitreous hemorrhage','BRAO','Rhegmatogenous retinal detachment','Tractional retinal detachment'],
    note:'SOURCE DEFECTS: an UNPAIRED straight double quote (U+0022) after "seeing" — the opening mark of the quotation is missing, confirmed at 3x zoom; the later quotation round "curtain coming down" is properly paired. Also "his right eyes" plural, and no full stop after "grayish reflex". As printed.' },
  { n:13, p:162, key:'C',
    stem:'34-year-old woman notes acute vision loss in her left eye. She is in otherwise good health. On examination, her visual acuity is OD 6/6, OS 6/60. defective color vision is noticed in her left eye. Examination of the pupillary light reflex reveals RAPD in the left eye. The anterior segment examination is normal. The red reflex is clear and fundus examination is normal in both eyes. What is your diagnosis?',
    opts:['AION','Optic atrophy','Retrobulbar optic neuritis','Papillitis'],
    note:'SOURCE DEFECT: the sentence after "OS 6/60." begins with a lowercase "defective". Acuities read at 3x zoom: OD 6/6, OS 6/60. As printed.' },
  { n:14, p:162, key:'C',
    stem:'43 years old patient complaining of blurred vision. On detailed history the vision problem is mainly during doing his work on laptop. Visual acuity is 6/6 in both eyes with normal IOP. Examination of the anterior segment reveals nuclear sclerosis, while fundus examination is normal in both eyes. What do you recommend for this patient?',
    opts:['Glasses for distant vision correction','Preparing patient for phacoemulsification for nuclear sclerosis','Glasses for near vision correction','Assurance of the patient and scheduling follow up visits'],
    note:'SOURCE DEFECT: "mainly during doing his work on laptop" — non-idiomatic, and no article before "laptop". As printed.' },
  { n:15, p:162, key:'B',
    stem:"76-year-old man has noted visual distortion over the past week. His concern increased when he discovered that the distortion was in the right eye only. Straight lines viewed through his left eye remained straight. Visual acuity testing revealed OD 6/24, OS 6/6. What further tests will help determine the source of the patient's vision loss?",
    opts:['Color vision test','Amsler grid test','Visual field test','OCT for optic'],
    note:'SOURCE DEFECT: option D is TRUNCATED — the line ends "OCT for optic" with no noun following, confirmed at 3x zoom against Q17 option D, which prints the complete form "OCT for macula", and Q19 option B, which prints "OCT for optic nerve". Kept exactly as printed. The stem uses a straight apostrophe U+0027, not a typographic one.' },
  { n:16, p:163, key:'C',
    stem:'60 years old diabetic patient for more than 20 years is developing a nuclear cataract in his both eyes, and his visual acuity has decreased to OD 6/18 and OS 6/24. His vision bothers him while he is driving because he cannot read street signs. He went to an optometrist for new glasses but was told he needed cataract surgery. He was referred for cataract surgery in 2 weeks with a surgeon who has not examined his eyes, the patient asks your advice. What do you recommend to help this patient?',
    opts:['Proceed with the surgery to help prevent a car accident.','Advise him to defer cataract surgery for at least 6 month','Refer the patient to ophthalmologist to determine the impact of cataract on decreased vision.','Assurance of the patient and advise him to follow up regularly'],
    note:'SOURCE DEFECTS: option B prints "6 month" singular, confirmed at 3x zoom. Option punctuation is INCONSISTENT inside one menu — A and C end with a full stop, B and D do not; all four reproduced exactly. Stem also has a comma splice at "examined his eyes, the patient asks", and "in his both eyes" word order. As printed.' },
  { n:17, p:163, key:'A',
    stem:'53 years old patient complaining of near vison problems. The patient is asthmatic and has some degree of heart block that is controlled medically. His visual acuity is 6/6 in both eyes. While examination you notice nuclear sclerosis in both eyes. IOP is 28 mmHg in his right eye and 30 mmHg in his left eye, the fundus examination revealed large cup/disc ratio in both eyes. You suspect that patient has POAG. What further tests will help you to confirm the diagnosis?',
    opts:['Visual field test','Fluoresceine angiography','Amsler grid test','OCT for macula'],
    note:'SOURCE DEFECTS: "near vison problems" — "vison" for "vision", confirmed at 3x zoom. "While examination you notice" non-idiomatic. Option B "Fluoresceine" for fluorescein. Pressures read WITH their units at 3x zoom: 28 mmHg right, 30 mmHg left. As printed.' },
  { n:18, p:163, key:'B',
    stem:'In the previous Q, what are group of drugs that should be avoided in that patient?',
    opts:['PG analogues','B blockers','Alpha adrenergic agonist','Carbonic anhydrase inhibitor'],
    note:'SOURCE DEFECT: "what are group of drugs" — missing article. Option B prints "B blockers" (bare capital B, no beta symbol and no hyphen). As printed.' },
  { n:19, p:164, key:'D',
    stem:'65 years old patient complaining of gradual decrease visual acuity in both eyes in the last 3 months, Medical history of diabetes for more than 20 years. Visual acuity is 6/24 in both eyes. Patient is pseudophakic in both eyes with clear media. Fundus examination revealed bilateral diabetic macular edema and mild NPDR. What further tests could help in diagnosis?',
    opts:['Visual field test','OCT for optic nerve','Amsler grid test','Fluoresceine angiography'],
    note:'⚠️ KEY PRINTING DEFECT, CONFIRMED: the Answers block on book p.167 prints entry 19 as a LOWERCASE "d" — "19.Correct Answer: d" — while all 26 other entries print an uppercase letter. Read at 3x zoom on book-167.png. Recorded here as key D. A typographic slip in the CASE of the letter, NOT a different answer, and NOT disputed. STEM DEFECTS: "gradual decrease visual acuity" missing "in"; comma splice with a mid-sentence capital at "in the last 3 months, Medical history". Option D "Fluoresceine" for fluorescein. As printed.' },
  { n:20, p:164, key:'C',
    stem:'In the previous Q, what is the appropriate treatment for this patient?',
    opts:['YAG laser capsulotomy','PRP laser','Intravitreal Anti-VEGF','Oral antioxidant supplements'] },
  { n:21, p:164, key:'C',
    stem:'A 55 years old diabetic and hypertensive patient presented to the ER with left sided headache and drooping of the left upper eyelid since this morning. On examination, of the patient there is left ptosis, the left eye is deviated outward and downward, and the left pupil is dilated 3 mm more than the right. What is the most likely diagnosis?',
    opts:['Myasthenia gravis','Optic nerve disease','Third nerve palsy','Diabetic neuropathy'],
    note:'SOURCE DEFECT: the stem prints a stray comma in "On examination, of the patient there is left ptosis", leaving the clause ungrammatical. Confirmed at 3x zoom. As printed.' },
  { n:22, p:165, key:'B',
    stem:"A 40 years old patient presented with horizontal diplopia that is worse in the distance and on looking to the right. On examination, the patient's right eye is esotropic and cannot abduct past the midline. The pupils are equal and reactive and there is no ptosis. What is the most likely diagnosis?",
    opts:['Myasthenia gravis','6th nerve palsy','3rd nerve palsy','Increase ICP'],
    note:'SOURCE DEFECT: option D prints "Increase ICP" rather than "Increased ICP". As printed.' },
  { n:23, p:165, key:'D',
    stem:'A 45 years old female patient complaining of mild ptosis and visual distortion, the ptosis appear at the end of the day and improve with rest. What is the appropriate management for this patient?',
    opts:['Assurance and follow up of the patient','CT orbit and lab investigation in form of T3, T4, and TSH','Topical steroid eye drops and follow up in one week.','Make an appointment with ophthalmology and neurology clinic'],
    note:'SOURCE DEFECTS: comma splice at "visual distortion, the ptosis"; verb agreement in "the ptosis appear ... and improve". Option punctuation INCONSISTENT — only option C ends with a full stop. All reproduced as printed.' },
  { n:24, p:165, key:'B',
    stem:'A 50 years old female patient presented with bilateral proptosis, lid retraction and lid lag. She also complains of heat intolerance, weight loss and palpitation. What is the most likely diagnosis?',
    opts:['Myasthenia gravis','Thyroid eye disease','3rd nerve palsy due to microvascular ischemic lesion','3rd nerve palsy due to aneurysm of the posterior communicating artery'] },
  { n:25, p:165, key:'D',
    stem:'You are at home when your wife runs in from the garden screaming that she has splashed algaecide in her right eye. when you look at her eye, it appears red and she is in obvious pain. It has been about 1 minute after the injury. What should you do first?',
    opts:['Bundle her into your car and speed off for the nearest emergency center.','Run back to your study to look up the specific antidote for algaecide','Carefully examine her eye for evidence of ocular hyperemia.','Copious irrigation with water from the nearest source instructing her to hold her eyes open to flush out chemical'],
    note:'SOURCE DEFECTS: sentence boundary broken at "right eye. when you look" — full stop then a LOWERCASE w, confirmed at 3x zoom. Option punctuation INCONSISTENT — A and C end with a full stop, B and D do not. Option D "flush out chemical" is missing an article. As printed.' },
  { n:26, p:166, key:'A',
    stem:'A 25 years old male patient presented to the ER after being hit in the right eye with a ball while playing football. On examination of the anterior segment. you notice that there is a layer of blood Inferiorly Regarding your diagnosis what is the appropriate management?',
    opts:['Bed rest in 45 degrees and close follow up with an ophthalmologist','Prescribe steroid drops and antiglaucoma drops, and tell the patient to keep his head elevated','Hospitalization and immediately call for an ophthalmologist','Refer to ophthalmologist for surgical evacuation as soon as possible'],
    note:'SOURCE DEFECTS: sentence boundary broken twice. "anterior segment. you notice" prints a full stop followed by a LOWERCASE y; "a layer of blood Inferiorly Regarding your diagnosis" runs two sentences together with NO stop and two mid-sentence capitals. Both confirmed at 3x zoom. As printed.' },
  { n:27, p:166, key:'B',
    stem:"A 30 years old male patient presented to the outpatient clinic complaining of pain and redness in his right eye he was working in a metal factory and he noticed that something flying into his right eye Examination of the right eye reveals conjunctival hyperemia the pupil is round and reactive and there is a metallic foreign body at the limbus at 3 o'clock. Visual acuity is 6/6 in the right eye and 6/6 in the Left eye. What is the appropriate management for this patient?",
    opts:['Irrigation of the limbal foreign body','Application of a protective shield','Removal of the limbal foreign body using a cotton-tipped applicator','Removal of the limbal foreign body using forceps'],
    note:'SOURCE DEFECTS: THREE missing sentence stops, all confirmed at 3x zoom — after "in his right eye he was working", after "into his right eye Examination", and after "conjunctival hyperemia the pupil". Also "he noticed that something flying" (missing "was"), and a mid-sentence capital in "the Left eye". As printed.' }
];
