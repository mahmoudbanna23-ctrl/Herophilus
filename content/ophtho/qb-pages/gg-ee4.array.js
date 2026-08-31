/* =============================================================================
   GRADE GAIN OPHTHALMOLOGY — TOPIC 24 — "End Exam 4" — VERBATIM STAGING RECORD
   Source: Semester 8\Opthalmo\Questions\ophthalmology qb.pdf
   Transcribed 2026-08-31. This file is the staging record, not app data.
   =============================================================================

   ---------------------------------------------------------------------------
   ⚠️ SHAPE NOTE — THE HUB BRIEF WAS WRONG ABOUT THE ENTRY SHAPE
   ---------------------------------------------------------------------------
   The brief specified  { n:24, num:<1..N>, page:<book>, stem, options[], answer }
   with `n` as the TOPIC number. gg-ee3.array.js does not use that shape at all.
   Its real shape — matched here exactly — is:
       { n:<QUESTION number 1..N>, p:<BOOK page>, key:'<LETTER>',
         stem:'...', opts:['...','...'] }
   The topic number (24) lives ONLY in the variable name and this header, the
   same way EE3 carries 23 in GG_EE3_STAGING. Field names are `p`/`key`/`opts`,
   not `page`/`answer`/`options`. The FILE won over the brief.

   ---------------------------------------------------------------------------
   BANNER, transcribed off the pixels
   ---------------------------------------------------------------------------
   Blue banner at the top of the LEFT column of book p.145, two lines:
       "End Exam 4"  /  sub-banner "Questions"
   Answer banner on book p.147 — same wording but the fill is ORANGE/TAN, not
   blue: "End Exam 4" / "Answers". (EE3's answer banner was blue; the colour
   change is cosmetic and carries no meaning, but it is what the page prints.)
   Running head on every page of the section: "QUESTION BANK: Previous Exam"
   — the generic past-paper running head, identical to End Exams 1, 2 and 3.

   ---------------------------------------------------------------------------
   PAGE MAP — folio numerals read off each page's OWN printed footer
   ---------------------------------------------------------------------------
     PDF p-152.png   footer "| P a g e 145"   book p.145   banner + Q1–Q10
                     (left column Q1–Q5, right column Q6–Q10;
                      lower ~quarter of the right column BLANK)
     PDF p-153.png   footer "| P a g e 146"   book p.146   Q11–Q20
                     (left column Q11–Q15, right column Q16–Q20;
                      lower ~quarter of BOTH columns BLANK)
     PDF p-154.png   footer "| P a g e 147"   book p.147   ANSWERS Q1–Q20
   PDF = book + 7 held on all three footers. No off-by-one anywhere.
   The hub brief's arithmetic (pdf.152 = book p.145) was CORRECT.

   ---------------------------------------------------------------------------
   BOUNDARY PROOF — both ends, from the pixels
   ---------------------------------------------------------------------------
   OPENING: the "End Exam 4 / Questions" banner is the first printed element
   below the running head on pdf.152 (book p.145), and the first numbered item
   under it is "1." — nothing from End Exam 3 spills onto this page. This is
   corroborated from the other side: gg-ee3.array.js records mirrored
   BLEED-THROUGH of "6. Posterior … detachment is most commonly" on EE3's own
   answer page (book p.144) — that is THIS section's Q6 showing through from
   the reverse of the sheet, i.e. p.145 is physically the back of p.144.
   CLOSING: pdf.155 (book p.148) opens with a fresh BLUE "End Exam 5 /
   Questions" banner and its own "1. What is The most common painful eyelid
   swelling?" — numbering restarted, so End Exam 4 is closed at book p.147.
   Its answer page (p.147) is 3/4 blank below key 20, and its right column is
   entirely empty — no keys hidden there, the whole page was read top to
   bottom in both columns before that was asserted.
   ⚠️ pdf.156 was NOT read. The brief asked for one page past the last; the
   boundary was already CLOSED conclusively by pdf.155's banner + Q1 restart,
   and pdf.156 is End Exam 5 Q10–Q18 (per the OCR index) — reading it would
   have loaded another section's content for no evidential gain. Stated
   plainly rather than silently skipped.

   ---------------------------------------------------------------------------
   COUNT: 20 printed, Q1–Q20. MEASURED THREE WAYS, ALL THREE AGREE.
   ---------------------------------------------------------------------------
   (1) FORWARDS, page by page, off the printed question numerals:
         book p.145 = 10   (left column 1,2,3,4,5 · right column 6,7,8,9,10)
         book p.146 = 10   (left column 11,12,13,14,15 · right column
                            16,17,18,19,20)
         10 + 10 = 20.
   (2) BACKWARDS from the highest printed numeral: the last item on p.146 is
       "20."; walking upwards the numerals descend 20,19,18,17,16 (right
       column) then 15,14,13,12,11 (left column), then on p.145
       10,9,8,7,6 then 5,4,3,2,1 — contiguous, no skip, no repeat, ⇒ 20.
   (3) ANSWER-KEY ENTRIES on book p.147: numbered lines 1. through 20.,
       counted individually down the single column = 20 entries.
   20 = 20 = 20. The brief's promise of "20" was CORRECT — but it was
   measured, not adopted. No question tail spills onto the answer page.
   ⚠️ Counting the PARTS, not just the sum: the two per-page tallies (10, 10)
   were each counted independently on their own page, so an offsetting error
   between the two pages could not hide inside the total.

   ---------------------------------------------------------------------------
   KEY-BLOCK ALIGNMENT — 20 key entries against 20 questions
   ---------------------------------------------------------------------------
   The key block is a SEPARATE page (book p.147), format "N. Correct Answer: X",
   one entry per line, single column, running 1 → 20 with no gap and no repeat.
   Counts match exactly (20 vs 20), so no shift is arithmetically possible; the
   alignment was then proved MEDICALLY at both ends and through the middle:
     Q1  key C "Acute painless loss of vision"  — CRVO with macular haemorrhage
         is exactly acute painless loss. Anchors the HEAD of the block.
     Q4  key A "5th cranial nerve"              — neurotrophic ulcer is
         trigeminal (V) denervation. Correct.
     Q9  key A "Morphine"                       — morphine is the only miotic
         in the menu; atropine, tropicamide and epinephrine all dilate.
     Q12 key D "All of the above"               — an "All of the above" option
         sitting at D and keyed D; a one-step shift would key it A or C.
     Q15 key B "Excision of the entire eyeball" — enucleation; option A is
         evisceration and option C is exenteration, so B is forced.
     Q17 key D "Optic Neuritis"                 — negative stem; the only item
         that is not a red eye. Correct.
     Q20 key D "All of the above"               — second "All of the above"
         at D keyed D. Anchors the TAIL of the block.
   Head and tail both anchored on independently-forced answers ⇒ the key list
   is aligned by one, to one, with the question list. ELEVEN spot-checks were
   run — Q1, Q4, Q5, Q7, Q9, Q12, Q14, Q15, Q17, Q19, Q20, each read stem-first
   off the PNG and only then compared to the key block. None disagreed with its
   printed key. (Q5 key A "Degenerative lesion of conjunctiva" — pinguecula is
   a conjunctival degeneration; Q19 key A "High myopia" — pathological myopia
   is the classic cause of posterior staphyloma.)

   ---------------------------------------------------------------------------
   LETTERING INTEGRITY: CLEAN. Every one of the 20 questions prints exactly
   four options lettered A. B. C. D. in order — no gap, no repeated letter, no
   skipped letter, no E anywhere in this section. (Contrast End Exam 5 Q8 on
   book p.148, which does print an E — not this section.)
   ⇒ PRINTED LETTER AND ZERO-BASED INDEX AGREE THROUGHOUT: A=0, B=1, C=2, D=3.
   The draft stage can convert `key` by simple ordinal subtraction with no
   per-question exception list.
   ---------------------------------------------------------------------------

   ---------------------------------------------------------------------------
   STRADDLES: NONE.
   ---------------------------------------------------------------------------
   No stem, option menu or key breaks across a page boundary. Q10 finishes
   inside the right column of p.145 with blank space beneath it; Q11 starts
   clean at the top of p.146's left column. The only mid-page breaks are
   ordinary LINE WRAPS inside a single option (Q11 opt B, Q15 opt A, Q16 opt D,
   Q18 opt C) and inside stems (Q1, Q4, Q12, Q14, Q18, Q19, Q20) — all within
   one column, all fully visible.

   ---------------------------------------------------------------------------
   PRINTED EXPLANATION BOXES: 0 — COUNTED ON THESE THREE PAGES, NOT ASSUMED.
   ---------------------------------------------------------------------------
   Book pp.145, 146 and 147 were each scanned top to bottom in both columns
   for a boxed, tinted or ruled explanatory block. There is none. p.147 prints
   the twenty key lines and nothing else; no question carries explanatory text
   beneath it. ⇒ markers required in the draft = 20 entries − 0 boxes = 20
   (every entry needs the written-for-this-bank marker).

   ---------------------------------------------------------------------------
   FIGURES: 0 — COUNTED.
   ---------------------------------------------------------------------------
   No photograph, diagram, chart or illustration on any of the three pages.
   Every stem is answerable from text alone; there is no crop work for the hub
   in this topic. The only non-text marks are the "ASM MinDS" publisher logo
   in the running head (top-right on p.145 and p.147, top-left on p.146), the
   blue banner rules, and — on p.147 — faint mirrored BLEED-THROUGH behind the
   Answers banner showing a reversed "16. Exophoria means: / A. Latent
   divergent squint / B. Latent …". That is p.146's Q16 showing through from
   the reverse of the sheet. It is not content and is not transcribed.

   ---------------------------------------------------------------------------
   SOURCE DEFECTS — verbatim, kept as printed below; this is the draft's
   AUTHORISED REPAIR LIST. Nothing here was corrected in the entries.
   ---------------------------------------------------------------------------
     Q2  stem — "Second vision loss in nuclear cataract is usually due to:"
                "Second vision loss" is malformed English; the sense is
                second/secondary visual loss AFTER the myopic shift of nuclear
                sclerosis. Printed exactly as shown. NOT repaired here.
     Q5  stem — "Pingueculum is classified as:" — the bank spells it
                "Pingueculum"; the standard form is "pinguecula". As printed.
     Q14 opt C — "Pas" — sentence-case rendering of the abbreviation PAS
                (peripheral anterior synechiae). As printed, capital P only.
     Q14 opt D — "Occlusio-pupillae" — hyphenated, capitalised. As printed.
     Q16 opt D — "Occurs due to excess accomodation reflex" — "accomodation"
                for "accommodation" (one m). MISSPELLING, as printed.
                Also a GRAMMAR MISMATCH: the stem is "Exophoria means:", so
                A/B/C are noun phrases while D is a verb clause.
     Q17 opt D — "Optic Neuritis" — mid-list Title Case where A/B/C are
                sentence case ("Keratitis", "Iridocyclitis", "Acute congestive
                glaucoma"). As printed.
     Q18 stem — "The most 2 important investigations before LASIK:" — numeral
                embedded mid-phrase, non-idiomatic. As printed.
     Q18 opt C — "pachymetery" (extra e) while opt D in the SAME menu prints
                "pachymetry" correctly. INCONSISTENT SPELLING INSIDE ONE
                QUESTION — both forms preserved exactly as printed.
     Q12 opt A — "Tenon's advancement" — straight apostrophe U+0027 in the
                scan, not a typographic apostrophe. Reproduced as straight.
     Q4  — the bank writes ordinals as "5th / 7th / 3rd / 2nd cranial nerve"
                rather than spelled-out ordinals. House style, kept.
     Q1  — "CRVO" used unexpanded in the stem; Q11 likewise uses "HZO"
                unexpanded; Q13 opt C "NSAIDs". Kept.
     Q3  stem — "The treatment of trachoma is:" then keys B "Azithromycin"
                while A is "Topical antibiotic only" — the "only" in A is what
                makes B the answer; not a defect, recorded so the draft does
                not read A as merely a weaker synonym.

   ---------------------------------------------------------------------------
   SPELLING REGISTER (reported, NOT normalised): this section is uniformly
   AMERICAN. "hemorrhage" (Q1), "edema" (Q2 opt C), "ischemia" (Q12 stem),
   "tumor" (Q5 opt C), "vascularization"/"transplantation" -ization forms.
   ZERO British forms (no haemo-, no oedema, no ischaemi-, no colour, no
   anaesth-) anywhere in the 20 questions. Left exactly as printed.
   ---------------------------------------------------------------------------

   ---------------------------------------------------------------------------
   KEY NOTES for the draft (recorded, NEVER disputed — the printed key is
   always the answer):
   ---------------------------------------------------------------------------
     Q6  keys A "Elderly patients" for posterior vitreous detachment. The menu
         offers Children / Young adults / Newborns as the alternatives; the
         key is internally forced. Note for the explanation: HIGH MYOPIA also
         causes early PVD, and the bank's own Q19 keys high myopia — the two
         sit together but do not conflict (Q6 asks the commonest setting).
     Q7  keys A "Canal of Schlemm". NOTE FOR THE HUB'S SWEEP: End Exam 3 Q23
         asks the OPPOSITE polarity ("Which ocular structure is NOT seen by
         gonioscopy", keyed C "Ora serrata") with a different menu. Flagged in
         gg-ee3.array.js from the other side. Opposite polarity + different
         menu ⇒ a PAIR, not a fold. Do not fold them blind.
     Q9  keys A "Morphine". End Exam 3 Q20 asks the same fact at a coarser
         granularity ("miotic pupil can result from" — drug CLASSES, not named
         drugs). Same fact, different menu. Flagged from the EE3 side too.
         A shared fact PAIRS questions; the discriminating token here is the
         named drug "Morphine" vs a class name. Not a fold on this reading.
     Q10 keys A "It increases with age" for absolute hypermetropia — correct
         and worth explaining: as accommodative amplitude falls with age,
         facultative hypermetropia converts to absolute, so the absolute
         component grows. Option B is the trap.
     Q11 keys A "Nose is affected by vesicular eruption" — Hutchinson's sign
         (nasociliary branch). Compare End Exam 5 Q12 (book p.148, NOT this
         section) which asks the near-identical fact as "Diagnosis of Herpes
         Zoster Ophthalmicus (HZO) is sure if:" with option A "Vesicles
         develop on the tip of the nose". SAME FACT, REWORDED STEM, DIFFERENT
         MENU WORDING — flagged for the hub's sweep when EE5 is transcribed;
         from this side it reads as a reworded reprint candidate, and the
         discriminating token is "The cornea is affected" (Q11, corneal
         involvement) vs "Diagnosis … is sure" (EE5 Q12, diagnostic
         certainty). Different question, same sign.
     Q14 keys A "Corneal vascularization" as the EXCEPT. Internally consistent
         — glaucoma, PAS and occlusio pupillae are all standard anterior
         uveitis complications; corneal vascularization is not.
     Q18 keys C "Corneal topography and pachymetery". Consistent — biometry is
         a cataract/IOL investigation, not a LASIK screen; topography plus
         pachymetry is the standard pre-LASIK pair.

   ---------------------------------------------------------------------------
   KEYS as printed on book p.147, all 20 present, none missing:
     1 C · 2 B · 3 B · 4 A · 5 A · 6 A · 7 A · 8 A · 9 A · 10 A
     11 A · 12 D · 13 A · 14 A · 15 B · 16 A · 17 D · 18 C · 19 A · 20 D
   ⚠️ The key distribution is extremely A-heavy: A×12, B×3, C×2, D×3 (sum 20).
   That is what the page prints. It was re-read letter by letter off the pixels
   a second time BECAUSE it is anomalous, and it is correct — the run
   4,5,6,7,8,9,10,11 is EIGHT consecutive A keys and the run 13,14 adds two
   more. Do not "fix" it and do not treat the run as a mis-read.
   ⚠️ SELF-CORRECTION, LOGGED: the first draft of this header wrote the
   distribution from the eye as A×13 B×3 C×2 D×2 — which ALSO sums to 20, so
   the sum check could not see it. The machine tally over the finished file
   returned A=12 B=3 C=2 D=3. The eye had moved one key from D into A. This
   is the "an offsetting error is invisible to a sum — count the parts" rule
   firing on this very file; the per-letter counts above are the measured
   ones, not the eyeballed ones.
   ---------------------------------------------------------------------------

   ---------------------------------------------------------------------------
   SUSPECTED DUPLICATES (past-paper section — recycling is BY DESIGN; the
   hub's A–F sweep decides). Candidates from the transcription pass only.
   ---------------------------------------------------------------------------
   WITHIN this section: NONE. No two of the 20 stems test the same fact. The
   nearest pair is Q1 (CRVO presentation) and Q19 (posterior staphyloma) —
   unrelated. Checked pairwise across all 20 stems.
   ACROSS the corpus, worth the sweep's attention (all read as THEMATIC from
   this side; none looked like an exact reprint):
     Q7  vs End Exam 3 Q23 — gonioscopy, opposite polarity. See KEY NOTES.
     Q9  vs End Exam 3 Q20 — miotic pupil, drug vs class. See KEY NOTES.
     Q11 vs End Exam 5 Q12 — Hutchinson's sign. See KEY NOTES.
     Q3  (treatment of trachoma) vs End Exam 5 Q11 (book p.148, "All of the
         following are used in the treatment of trachoma EXCEPT") — same
         topic, OPPOSITE polarity, different menu. Grep "rachoma".
     Q20 (causative organisms of ophthalmia neonatorum) — a recurring Grade
         Gain item; grep "eonatorum" across the corpus.
     Q6  (PVD most commonly seen in) — grep "vitreous detachment"; the
         MEMORY.md note that L20 and L31,32 both record PVD "not covered"
         while the BOOK explains it at p.17/p.41/p.42 applies to the
         explanation source, not to a fold.
     Q12 (limbal ischemia in chemical burns) and Q15 (enucleation) — both are
         heavily recycled House chapter items; grep "imbal ischemia" and
         "nucleation".
   ---------------------------------------------------------------------------
*/
var GG_EE4_STAGING = [
  { n:1, p:145, key:'C',
    stem:'Sudden loss of vision with CRVO and macular hemorrhage is best characterized by:',
    opts:['Gradual loss of vision over months','Painful red eye','Acute painless loss of vision','Photophobia and tearing'] },
  { n:2, p:145, key:'B',
    stem:'Second vision loss in nuclear cataract is usually due to:',
    opts:['Posterior subcapsular cataract','Nuclear sclerosis','Macular edema','Optic atrophy'],
    note:'SOURCE DEFECT: "Second vision loss" printed as shown — malformed English, not repaired here.' },
  { n:3, p:145, key:'B',
    stem:'The treatment of trachoma is:',
    opts:['Topical antibiotic only','Azithromycin','Surgical correction only','Steroid therapy'] },
  { n:4, p:145, key:'A',
    stem:'Neurotrophic ulcer is commonly associated with which cranial nerve?',
    opts:['5th cranial nerve','7th cranial nerve','3rd cranial nerve','2nd cranial nerve'] },
  { n:5, p:145, key:'A',
    stem:'Pingueculum is classified as:',
    opts:['Degenerative lesion of conjunctiva','Inflammatory lesion of cornea','Vascular tumor of iris','Lens opacity'],
    note:'SOURCE SPELLING: the bank prints "Pingueculum"; standard form is "pinguecula". As printed.' },
  { n:6, p:145, key:'A',
    stem:'Posterior vitreous detachment is most commonly seen in:',
    opts:['Elderly patients','Children','Young adults','Newborns'] },
  { n:7, p:145, key:'A',
    stem:'Gonioscopy is used to visualize which structure?',
    opts:['Canal of Schlemm','Retina','Lens','Corneal endothelium'],
    note:'SWEEP FLAG: opposite polarity of End Exam 3 Q23 (structure NOT seen by gonioscopy). Pair, not fold — see header.' },
  { n:8, p:145, key:'A',
    stem:'What is located behind the grey line of the eyelid?',
    opts:['Tarsal glands','Conjunctival vessels','Orbicularis muscle','Levator aponeurosis'] },
  { n:9, p:145, key:'A',
    stem:'A miotic pupil can be caused by which of the following drugs?',
    opts:['Morphine','Atropine','Tropicamide','Epinephrine'],
    note:'SWEEP FLAG: same fact as End Exam 3 Q20 at drug-CLASS granularity. See header.' },
  { n:10, p:145, key:'A',
    stem:'Which statement is correct regarding absolute hypermetropia?',
    opts:['It increases with age','It decreases with age','Remains constant throughout life','Only affects near vision'] },
  { n:11, p:146, key:'A',
    stem:'The cornea is affected in HZO if:',
    opts:['Nose is affected by vesicular eruption','Upper and lower eyelids are affected by vesicles','Treatment by Acyclovir is delayed','Patient receives steroids topically'],
    note:'SWEEP FLAG: same sign (Hutchinson) as End Exam 5 Q12, book p.148 — reworded stem, different menu. See header.' },
  { n:12, p:146, key:'D',
    stem:'Treatment of limbal ischemia in chemical burns is by:',
    opts:["Tenon's advancement",'Limbal cells transplantation','Amniotic graft','All of the above'] },
  { n:13, p:146, key:'A',
    stem:'Traumatic optic neuropathy is treated by:',
    opts:['Steroids','Atropine','NSAIDs','Vasodilator'] },
  { n:14, p:146, key:'A',
    stem:'Complications of anterior uveitis include the following except:',
    opts:['Corneal vascularization','Glaucoma','Pas','Occlusio-pupillae'],
    note:'SOURCE DEFECT: option C printed "Pas" (sentence case) for the abbreviation PAS = peripheral anterior synechiae. As printed.' },
  { n:15, p:146, key:'B',
    stem:'Enucleation is:',
    opts:['Removal of the eye contents, even the uvea','Excision of the entire eyeball','Removal of all orbital contents','Removal of the cornea only'] },
  { n:16, p:146, key:'A',
    stem:'Exophoria means:',
    opts:['Latent divergent squint','Latent convergent squint','Alternating exotropia','Occurs due to excess accomodation reflex'],
    note:'SOURCE DEFECT: option D prints "accomodation" (one m) and is a verb clause where A/B/C are noun phrases. As printed.' },
  { n:17, p:146, key:'D',
    stem:'All the following are causes of acute painful red eye except:',
    opts:['Keratitis','Iridocyclitis','Acute congestive glaucoma','Optic Neuritis'],
    note:'SOURCE DEFECT: option D printed Title Case "Optic Neuritis" against sentence-case A/B/C. As printed.' },
  { n:18, p:146, key:'C',
    stem:'The most 2 important investigations before LASIK:',
    opts:['Biometry and corneal topography','Biometry and keratometry','Corneal topography and pachymetery','Biometry and pachymetry'],
    note:'SOURCE DEFECT: option C prints "pachymetery" while option D in the SAME menu prints "pachymetry". Both kept verbatim. Stem also embeds the numeral "2" mid-phrase.' },
  { n:19, p:146, key:'A',
    stem:'Most common cause of posterior staphyloma is:',
    opts:['High myopia','Scleritis','Glaucoma','Trauma'] },
  { n:20, p:146, key:'D',
    stem:'Causative organisms of ophthalmia neonatorum:',
    opts:['Gonococci','Chlamydia','Herpes simplex','All of the above'] }
];
