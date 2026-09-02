/* =============================================================================
   GRADE GAIN OPHTHALMOLOGY — TOPIC 25 — "End Exam 5" — VERBATIM STAGING RECORD
   Source: Semester 8\Opthalmo\Questions\ophthalmology qb.pdf
   Transcribed 2026-09-02. This file is the staging record, not app data.
   =============================================================================

   ---------------------------------------------------------------------------
   SHAPE — copied from gg-ee4.array.js, not from the brief
   ---------------------------------------------------------------------------
       { n:<QUESTION number 1..20>, p:<BOOK page>, key:'<LETTER>',
         stem:'...', opts:['...','...'], note:'...' }
   The topic number (25) lives ONLY in the variable name and this header, the
   same way EE4 carries 24 in GG_EE4_STAGING. Field names are `p`/`key`/`opts`,
   never `page`/`answer`/`options`. `note` is present only where the printing
   is defective.

   ---------------------------------------------------------------------------
   PAGE MAP — folio numerals read off each page's OWN printed footer
   ---------------------------------------------------------------------------
     book-148.png   footer "| P a g e 148"   book p.148   banner + Q1-Q9
                    (left column Q1-Q4, right column Q5-Q9; the lower third of
                     the LEFT column is blank)
     book-149.png   footer "| P a g e 149"   book p.149   Q10-Q18
                    (left column Q10-Q14, right column Q15-Q18)
     book-150.png   footer "| P a g e 150"   book p.150   Q19-Q20 (left column)
                    + the ANSWERS block Q1-Q20 (right column)
   All three folios read exactly as the brief predicted (148, 149, 150), so
   PDF sheet = book + 7 held on all three. No off-by-one anywhere.

   ---------------------------------------------------------------------------
   BANNER, transcribed off the pixels
   ---------------------------------------------------------------------------
   Blue banner at the top of the LEFT column of book p.148, two lines:
       "End Exam 5"  /  sub-banner "Questions"
   Answer banner on book p.150, TOP OF THE RIGHT COLUMN, fill ORANGE/TAN:
       "End Exam 5"  /  "Answers"
   Running head on every page: "QUESTION BANK: Previous Exam", with the
   "ASM MinDS" publisher logo top-left on pp.148 and 150, top-right on p.149.

   ---------------------------------------------------------------------------
   BOUNDARY
   ---------------------------------------------------------------------------
   OPENING: the "End Exam 5 / Questions" banner is the first printed element
   below the running head on book p.148, and the first numbered item under it
   is "1. What is The most common painful eyelid swelling?" — numbering starts
   fresh; nothing from End Exam 4 spills onto this page. This corroborates
   gg-ee4.array.js, which closes End Exam 4 at book p.147 on exactly this
   evidence.
   CLOSING: book p.150 carries the last question (20) and the whole answer
   block; below key 20 the right column is blank and the entire lower HALF of
   the page is blank in both columns. The section is closed on this page.
   ⚠️ STATED PLAINLY: book p.151 was NOT read. Only three page images were
   supplied and the brief forbade rendering. The closure above rests on p.150's
   own blank lower half plus a complete 1-20 key, not on a look at p.151.

   ---------------------------------------------------------------------------
   COUNT: 20 printed, Q1-Q20. MEASURED THREE WAYS, ALL THREE AGREE.
   ---------------------------------------------------------------------------
   (1) FORWARDS, page by page, off the printed question numerals:
         book p.148 = 9    (left column 1,2,3,4 · right column 5,6,7,8,9)
         book p.149 = 9    (left column 10,11,12,13,14 · right column
                            15,16,17,18)
         book p.150 = 2    (left column 19,20)
         9 + 9 + 2 = 20.
       ⚠️ COUNTING THE PARTS, NOT JUST THE SUM: each per-page tally was counted
       on its own page before the total was taken, so an offsetting error
       between two pages could not hide inside the sum. Note p.149 holds 9, not
       10 — its right column runs 15,16,17,18 only, because Q16 and Q17 are
       long multi-line items.
   (2) BACKWARDS from the highest printed numeral: 20,19 (p.150), then
       18,17,16,15 (p.149 right), 14,13,12,11,10 (p.149 left), then 9,8,7,6,5
       (p.148 right), 4,3,2,1 (p.148 left) — contiguous, no skip, no repeat.
   (3) ANSWER-KEY ENTRIES on book p.150: numbered lines 1. through 20., counted
       individually down the single right-hand column = 20 entries.
   20 = 20 = 20. The brief's expectation of 20 was CORRECT — but it was
   measured, not adopted.

   ---------------------------------------------------------------------------
   KEY-BLOCK ALIGNMENT — 20 key entries against 20 questions
   ---------------------------------------------------------------------------
   The key block sits in the RIGHT COLUMN OF THE LAST QUESTION PAGE (p.150) —
   NOT on a page of its own, which is where End Exams 3 and 4 put theirs. Format
   "N. Correct Answer: X", one entry per line, running 1 -> 20 with no gap and
   no repeat. The letters were read off the pixels at 2.4x magnification, in two
   overlapping crops (1-10 and 10-20) so that line 10 was read twice; both reads
   agree. No key was inferred from the question text.

   ⚠️ THE KEY IS EXTREMELY A-HEAVY — 12 of 20 are A, and keys 9 through 16 are
   EIGHT CONSECUTIVE A's. That pattern is exactly what a one-off shift or a
   copy-paste fault looks like, so it was NOT taken on trust. Alignment was
   proved medically at both ends and through the run of A's:
     Q1  key A "Stye" — the stye IS the painful lid swelling; chalazion (C) is
         the painless one. Anchors the HEAD.
     Q4  key D "Intraocular pressure > 50 mmHg" — a D in the middle of the
         A-block's approach; a one-step shift would key it C ("Rebleeding").
     Q6  key D "A and C" — a compound option keyed at its own letter.
     Q8  key E "A + B" — the ONLY E in the section, and it lands on the ONLY
         question that prints an E. A shift of even one would put E on a
         four-option question, which is arithmetically impossible here.
     Q11 key A "Chloramphenicol" — negative stem; the one non-trachoma drug in
         a menu of erythromycin/azithromycin/tetracycline. Forced, inside the
         A-run.
     Q12 key A "Vesicles develop on the tip of the nose" — Hutchinson's sign.
         Forced, inside the A-run.
     Q16 key A "Iris nodules, mutton-fat keratic precipitates, disc edema" —
         sympathetic ophthalmia 6 weeks after penetrating injury to the FELLOW
         eye. Forced, and it is the LAST A of the run.
     Q18 key C "Arcuate fibers" — forced; ends the run cleanly.
     Q20 key B "Retinal pigment epithelium (RPE) and Bruch's membrane" —
         drusen sit between RPE and Bruch. Anchors the TAIL.
   Head and tail both anchored on independently-forced answers, and three
   separate items INSIDE the eight-A run are independently forced to A.
   ⇒ the A-heaviness is REAL, not a shift. All twenty were spot-checked
   stem-first against their printed key; none disagreed.

   ---------------------------------------------------------------------------
   LETTERING INTEGRITY — ONE EXCEPTION, AND THE BRIEF CALLED IT CORRECTLY
   ---------------------------------------------------------------------------
   Nineteen of the twenty questions print exactly four options lettered
   A. B. C. D. in order. Q8 prints FIVE, A. B. C. D. E., and its key is E.
   Every question's option count was counted on the page individually; no
   fixed-four assumption was used anywhere.
   No gap, no repeated letter and no skipped letter in any menu.
   ⇒ PRINTED LETTER AND ZERO-BASED INDEX AGREE THROUGHOUT: A=0 ... E=4, and
   every printed key letter exists inside its own question's option list. There
   is NO out-of-range key in this section.

   ---------------------------------------------------------------------------
   STRADDLES: NONE. No stem, option menu or key breaks across a page boundary.
   Q9 finishes inside the right column of p.148; Q10 starts clean at the top of
   p.149's left column; Q18 finishes on p.149 and Q19 starts clean on p.150.
   The only mid-item breaks are ordinary LINE WRAPS inside a single option
   (Q8 opt B, Q12 opt A, Q13 opt A, Q16 opts A-D, Q17 opt B, Q19 opts A/B/C,
   Q20 opts A/B/C) — all within one column, all fully visible.

   ---------------------------------------------------------------------------
   PRINTED EXPLANATION BOXES: 0 — COUNTED ON THESE THREE PAGES, NOT ASSUMED.
   Each page was scanned top to bottom in both columns for a boxed, tinted or
   ruled explanatory block. There is none. The answer block prints the twenty
   key lines and nothing else — no rationale, no reference.
   ⇒ markers required in the draft = 20 entries − 0 boxes = 20.

   ---------------------------------------------------------------------------
   FIGURES: 0 — COUNTED. No photograph, diagram, chart or illustration on any
   of the three pages. Every stem is answerable from text alone; there is no
   crop work for the hub in this topic. The only non-text marks are the
   "ASM MinDS" logo, the banner rules, and faint mirrored BLEED-THROUGH behind
   the orange Answers banner on p.150 (reversed text from the sheet's other
   side). Bleed-through is not content and is not transcribed.

   ---------------------------------------------------------------------------
   SOURCE DEFECTS — kept as printed in the entries below; this is the draft's
   AUTHORISED REPAIR LIST. Nothing here was corrected in `stem` or `opts`.
   ---------------------------------------------------------------------------
     Q1  stem — "What is The most common painful eyelid swelling?"
                mid-sentence capital "The".
     Q2  stem — "What is The most probable cause?" — same fault, same page.
     Q4  stem — ends "...in a case of hyphema if?" — an "if?" question mark on
                a conditional clause.
     Q4  optA — "Sever Pain" — missing the final "e" of "Severe", and Title
                Case against the sentence case of B/C/D.
     Q7  optD — "Ptylosis" — the standard form is "ptilosis".
     Q8  stem — prints an EN DASH, not a hyphen-minus, in "a –14D myope", and
                ends "includes?".
     Q8  menu — D "All of the above" and E "A + B" are mutually inconsistent:
                if D were true E could not be, and the key is E, which makes
                D a false option that the option list still asserts. Printed
                as shown; the key is NOT disputed.
     Q9  stem — ends "...all of the following EXCEPT?" — question mark after
                EXCEPT.
     Q12 optC — "Facial Pain" Title Case against sentence-case A/B/D.
     Q15 stem — "Dacryocystitis with red overlying skin. Treatment:" — a
                sentence fragment, no interrogative.
   NOTHING WAS ILLEGIBLE. Every stem, option and key letter on all three pages
   was read to the character. Q4 optA, Q7 optD, Q8 optE and Q20 optB were each
   re-read from a 2x-3x magnified crop before being written.

   ---------------------------------------------------------------------------
   FOLD LEADS for the hub's duplicate sweep (NOT folded here — staging only)
   ---------------------------------------------------------------------------
     Q11 (trachoma treatment EXCEPT) — gg-ee4.array.js Q3 is "The treatment of
         trachoma is:", same topic, OPPOSITE polarity, different menu. Grep
         "rachoma".
     Q6  (prognostic sign of chemical burn, "A and C") — EE4 Q12 is limbal
         ischemia in chemical burns. Grep "imbal ischemia".
     Q1  (most common painful eyelid swelling) — grep "tye" / "halazion".
     Q14 (pachymetry) — EE4 Q18 prints "pachymetery"/"pachymetry" in one menu.
         Grep "achymet" to catch both spellings.
     Q19/Q20 (dry vs wet AMD, drusen between RPE and Bruch) — grep "AMD" and
         "rusen".
   ---------------------------------------------------------------------------
*/
var GG_EE5_STAGING = [
  { n:1, p:148, key:'A',
    stem:'What is The most common painful eyelid swelling?',
    opts:['Stye','Hordeolum internum','Chalazion','Cyst of Moll'],
    note:'SOURCE DEFECT: stem prints "What is The most common" with a mid-sentence capital "The". As printed.' },
  { n:2, p:148, key:'A',
    stem:'A patient receiving long-term therapy for vernal conjunctivitis suffered from diminution of vision. What is The most probable cause?',
    opts:['Posterior subcapsular cataract','Corneal scarring','Optic neuropathy','Steroid-induced glaucoma'],
    note:'SOURCE DEFECT: stem prints "What is The most probable cause?" with a mid-sentence capital "The" — the same fault as Q1. As printed.' },
  { n:3, p:148, key:'A',
    stem:'A 1-year-old with acquired esotropia must undergo:',
    opts:['Fundus examination','Medial rectus resection','Lateral rectus resection','Cycloplegic refraction'] },
  { n:4, p:148, key:'D',
    stem:'Evacuation surgery is indicated in a case of hyphema if?',
    opts:['Sever Pain','Hyphema grade III','Rebleeding','Intraocular pressure > 50 mmHg'],
    note:'SOURCE DEFECT: option A prints "Sever Pain" — missing the final "e" of "Severe", and Title Case against sentence-case B/C/D. Stem also ends "...hyphema if?". Both as printed.' },
  { n:5, p:148, key:'A',
    stem:'In a patient with facial palsy, the most probable reason of epiphora is?',
    opts:['Failure of lacrimal pump','Lagophthalmos','Lower lid ectropion','Hypersecretion of tears'] },
  { n:6, p:148, key:'D',
    stem:'Which of the following is a prognostic sign of a chemical burn?',
    opts:['Limbal ischemia','Size of the ulcer','Degree of corneal haze','A and C'] },
  { n:7, p:148, key:'D',
    stem:'Complications of ulcerative blepharitis include all of the following EXCEPT:',
    opts:['Recurrent chalazion','Trichiasis','Madarosis','Ptylosis'],
    note:'SOURCE SPELLING: option D prints "Ptylosis"; the standard form is "ptilosis". As printed.' },
  { n:8, p:148, key:'E',
    stem:'Treatment of a –14D myope includes?',
    opts:['Phakic IOL implantation','Clear lens extraction and IOL implantation','LASIK','All of the above','A + B'],
    note:'FIVE OPTIONS (A-E) — the ONLY five-option question in this section; key E exists and is in range. SOURCE DEFECTS: stem prints an EN DASH (U+2013), not a hyphen-minus, before 14D, and ends "includes?"; option D "All of the above" and option E "A + B" are mutually inconsistent. Key is E as printed and is NOT disputed.' },
  { n:9, p:148, key:'A',
    stem:'A diabetic patient suffered from acute visual diminution. This may be caused by all of the following EXCEPT?',
    opts:['Refractive error','Vitreous hemorrhage','Retinal detachment','CRVO'],
    note:'SOURCE DEFECT: stem ends "...all of the following EXCEPT?" — a question mark after EXCEPT. As printed.' },
  { n:10, p:149, key:'A',
    stem:'Which of the following is used to test the function of photoreceptors of the retina?',
    opts:['Electroretinogram (ERG)','Electro-oculogram (EOG)','Visual evoked potential (VEP)','None of the above'] },
  { n:11, p:149, key:'A',
    stem:'All of the following are used in the treatment of trachoma EXCEPT:',
    opts:['Chloramphenicol','Erythromycin','Azithromycin','Tetracycline'] },
  { n:12, p:149, key:'A',
    stem:'Diagnosis of Herpes Zoster Ophthalmicus (HZO) is sure if:',
    opts:['Vesicles develop on the tip of the nose','Vesicles on upper eyelid','Facial Pain','Corneal edema'],
    note:'SOURCE DEFECT: option C prints Title Case "Facial Pain" against sentence-case A/B/D. As printed.' },
  { n:13, p:149, key:'A',
    stem:'Pannus is:',
    opts:['Vascularization and cellular infiltration of the cornea','Superficial vascularization','Corneal edema','Corneal scarring'] },
  { n:14, p:149, key:'A',
    stem:'Pachymetry is used to:',
    opts:['Measure corneal thickness','Measure corneal curvature','Test corneal sensitivity','Measure visual field'] },
  { n:15, p:149, key:'A',
    stem:'Dacryocystitis with red overlying skin. Treatment:',
    opts:['Systemic antibiotics','Localized antibiotics','Dacryocystorhinostomy (DCR)','Probing'],
    note:'SOURCE DEFECT: the stem is a sentence fragment, not a question — "Dacryocystitis with red overlying skin. Treatment:". As printed.' },
  { n:16, p:149, key:'A',
    stem:'A 25-year-old male presents 6 weeks after a penetrating injury to his left eye. He now complains of blurred vision in his right eye. Which of the following are classic clinical findings in this patient?',
    opts:['Iris nodules, mutton-fat keratic precipitates, disc edema','Corneal ulcer, hypopyon, conjunctival injection','Retinal detachment, macular edema, drusen','Cataract, lens subluxation, phthisis bulbi'] },
  { n:17, p:149, key:'B',
    stem:'Which of the following is a characteristic change of the optic disc in chronic glaucoma?',
    opts:['Horizontal C/D ratio > 0.6','Notching of the cup edge, especially inferotemporally','Diffuse thickening of the neural rim','Nasal thinning of the retina only'] },
  { n:18, p:149, key:'C',
    stem:'Which retinal fibers are most vulnerable to glaucomatous damage?',
    opts:['Nasal fibers','Papillomacular bundle fibers','Arcuate fibers','Foveal fibers'] },
  { n:19, p:150, key:'C',
    stem:'Which of the following statements is correct?',
    opts:['Dry AMD accounts for 10% of cases and is rapidly progressive','Wet AMD accounts for 90% of cases and rarely causes severe vision loss','Dry AMD is the most common type (90%) and progresses slowly','Wet AMD is less common and usually asymptomatic'] },
  { n:20, p:150, key:'B',
    stem:'Drusen formation in AMD occurs between which layers?',
    opts:['Photoreceptor layer and inner nuclear layer',"Retinal pigment epithelium (RPE) and Bruch's membrane",'Inner limiting membrane and nerve fiber layer','Choroid and sclera'] }
];
