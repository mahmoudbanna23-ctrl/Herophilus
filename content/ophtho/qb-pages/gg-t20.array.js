/* =============================================================================
   GRADE GAIN OPHTHALMOLOGY — TOPIC 20 — VERBATIM STAGING RECORD
   Source: Semester 8\Opthalmo\Questions\ophthalmology qb.pdf
   Transcribed 2026-08-29. This file is the staging record, not app data.
   =============================================================================

   BANNER TITLE, read off the blue banner on book p.127:  "Drugs and The Eye"
   Running head on every page of the topic: "QUESTION BANK: Drugs and The Eye"
   (The title was NOT known in advance and is recorded here for the first time.)

   ---------------------------------------------------------------------------
   PAGE MAP — offset re-verified against each page's OWN printed footer
   ---------------------------------------------------------------------------
     PDF p-134.png  footer "P a g e 127"   book p.127   Q791–Q800
     PDF p-135.png  footer "P a g e 128"   book p.128   Q801–Q811
     PDF p-136.png  footer "P a g e 129"   book p.129   Q812–Q822
     PDF p-137.png  footer "P a g e 130"   book p.130   Q823–Q830
     PDF p-138.png  footer "P a g e 131"   book p.131   ANSWERS Q791–Q825
     PDF p-139.png  footer "P a g e 132"   book p.132   ANSWERS Q826–Q830
   PDF = book + 7 held on all six footers. No global off-by-one.

   ---------------------------------------------------------------------------
   COUNT: 40 printed, Q791–Q830, continuous.
   ---------------------------------------------------------------------------
   HOW MEASURED: counted off the printed question numbers on each rendered
   page, both columns, then re-derived from the page distribution —
     p.127 = 10 (left col 791–795, right col 796–800)
     p.128 = 11 (801–811)
     p.129 = 11 (812–822)
     p.130 =  8 (823–830)
     10 + 11 + 11 + 8 = 40, and 830 − 791 + 1 = 40. Both agree.
   Independent corroborations: the contents page promises 40; the app corpus
   (app\data\questions.ophtho.js, read from disk) has max opqb-t* number 790,
   so 791 is the correct opening number with no gap and no overlap.

   ANSWER BLOCK: the "Drugs and The Eye / Answers" banner sits at the top of
   the LEFT column of book p.131. Keys Q791–Q810 in that page's left column,
   Q811–Q825 in its right column; Q826–Q830 on p.132.
   ⚠️ The RIGHT COLUMN OF p.132 IS ENTIRELY BLANK — that is the proof the
   answer block ends there, which is why no page past p-139.png was needed.
   Known Grade Gain page defects that did NOT fire here: no question tail
   shared the first answer page (defect 2); the Answers banner was not pushed
   into the right column (defect 3).

   ---------------------------------------------------------------------------
   BOXES (printed explanation boxes): 6
   ---------------------------------------------------------------------------
     Q804, Q809, Q816, Q824   — on book p.131
     Q828, Q830               — on book p.132
   ⇒ markers required in the draft = 40 − 6 = 34
   Box text is transcribed verbatim below and carries NO marker.

   ---------------------------------------------------------------------------
   FIGURES: 0.
   ---------------------------------------------------------------------------
   No photograph, diagram or illustration appears anywhere in the four
   question pages (p.127–p.130) or the two answer pages (p.131–p.132).
   No crop work for the hub in this topic.

   ---------------------------------------------------------------------------
   OPTION COUNTS
   ---------------------------------------------------------------------------
   Every question prints four options A–D EXCEPT:
     Q823 — prints only THREE options (A, B, C). Not a transcription loss:
            the D slot is absent from the page, and the printed key for Q823
            is B (Trabecular meshwork), which is in range.
            (⚠️ An earlier draft of this header guessed "C" from the shape of
            the option list BEFORE the answer page was read. It was wrong.
            The key was then read off book p.131 and is B. Recorded here as
            the reason a key is never inferred from an option menu.)

   ---------------------------------------------------------------------------
   SOURCE TYPOS (kept verbatim in the staging text; repaired silently in the
   draft only where the rule allows, and flagged in the entry otherwise)
   ---------------------------------------------------------------------------
     Q793 option A — "Retinoapthy"           (for "Retinopathy")
     Q794 option C — "Cause glaucoma inversus" (no such entity)
     Q797 option C — "Centero-cecal scotoma" (for "Centrocaecal scotoma")
     Q830 box      — "Sildenafil,," with a doubled comma
     Q828 box      — numbers TWO items "2." (Optic neuropathy, then
                     Intracranial hypertension); no "3." is printed. Also
                     prints "cornea verticillate" for "cornea verticillata".
     Q808 option C — "Müller muscle" (correct spelling; noted only because
                     the umlaut is dropped in some renderings)

   ---------------------------------------------------------------------------
   HOME-CHAPTER CAVEAT — read before writing any absence claim
   ---------------------------------------------------------------------------
   This topic's home chapter is BOOK CHAPTER 20 "Drugs and the Eye",
   printed pp.254–270 (PDF 256–272). Per content\ophtho\book-map.md it has
   NO LECTURE DECK AT ALL, and it was NOT among the 12 cached book chapters
   in content\ophtho\book\. It was therefore rendered and read in full for
   this batch (scratchpad ch20\b-256.png … b-272.png).
   ⇒ No absence claim in this batch may be scoped to "the material". Anything
   scoped as absent is scoped to the 29 cached lecture decks in
   content\ophtho\lectures\ and the 12 cached book chapters, and says so.

   ✅ BOOK CHAPTER 20 WAS READ IN FULL FOR THIS BATCH — every page 254–270,
   no page skipped. What each page pays for:
     p.254  chapter objectives tree (the chapter's own scope)
     p.255  instructions to patients: one drop; 5 minutes between drops;
            ointments last; lower conjunctival fornix; avoid the cornea
            → Q798, Q799
     p.256  fluorescein dye; Seidel test; stains soft contact lenses
            → Q800, Q801, Q802
     p.257  TBUT definition and the <10 s cut-off; Jones I / Jones II
            → Q803, Q804 (the Q804 box is copied from this page)
     p.258  systemic fluorescein adverse effects; local anaesthetics /
            tetracaine corneal toxicity → Q805, Q806
     p.259  cholinergic-blocking mydriatics table (onset/duration);
            cycloplegic systemic toxicity; cyclopentolate for children
            → Q807, Q808, Q809, Q810
     p.260  adrenergic mydriatics (phenylephrine 2.5%, no cycloplegic
            effect); phenylephrine + tropicamide additive, brown irides;
            dilation cautions incl. angle closure → Q794, Q811, Q816
     p.261  decongestants (naphazoline, phenylephrine, tetrahydrozoline),
            rebound vasodilation, angle closure; anti-allergy agents
            (naphazoline+antazoline, ketotifen, ketorolac); steroid
            complications → Q812, Q813, Q814, Q817
     p.262  NSAIDs; dry-eye agents; antibiotics (neomycin sensitivity);
            antibiotic+corticosteroid caution (herpes simplex / fungal)
            → Q815
     p.263  anti-VEGF: wet AMD, intravitreal, ranibizumab, systemic
            thromboembolic events and myocardial infarction; punctal
            occlusion 30-60 s → Q818, Q819, Q820, Q821
     p.264  classification of glaucoma medications (all seven classes)
     p.265  beta-blockers (pulmonary and cardiac side effects; betaxolol
            cardio-selective); pilocarpine → trabecular meshwork
            → Q796, Q821, Q822, Q823
     p.266  brimonidine (the Q824 box is copied from this page);
            prostaglandin analogues, uveoscleral pathway, iris darkening,
            hypertrichosis → Q824, Q825, Q826
     p.267  carbonic anhydrase inhibitors; hyperosmotic agents
     p.268  the whole-class summary table (landscape)
     p.269  amiodarone; chloroquine / hydroxychloroquine bull's-eye
            → Q792, Q828, Q829
     p.270  corticosteroids; digitalis; ethambutol; statins; sildenafil
            → Q793, Q827, Q829, Q830
   Book citation convention used in the draft: `ophthalmology.pdf p.<PRINTED>`.

   MEASURED ABSENCES (scoped, and the grep named)
     - "keratomalacia" — case-insensitive grep of all 29 cached lecture decks
       and all 12 cached book chapters returns exactly ONE hit, and that hit
       is inside L6's own NOT-COVERED list ("keratomalacia = 0"), i.e. a
       record of the absence, not teaching. Chapter 20 does not mention it
       either. Q791's option B is therefore filled from general knowledge and
       tagged in the entry.
     - "Bitôt" IS taught: L6) Conjunctiva sl.62 is titled "Bitôt Spot"
       (circumflex, no possessive) — but the slide does NOT mention vitamin A.
     - "night blindness" IS taught: ophthalmology.pdf p.11 (rod function) and
       L1,2 sl.80.
     - Ophthalmoplegia as a thiamine/B1 (Wernicke) sign appears in none of the
       cached ophtho sources — tagged in Q791.

   ---------------------------------------------------------------------------
   BACK-REFERENCES — 7, every antecedent READ, not assumed
   ---------------------------------------------------------------------------
   ⚠️ Each repaired stem was checked BY HAND against (a) its own key and
   (b) the antecedent's key. Confirmed: no repaired stem states its own answer
   and no repaired stem leaks the antecedent's key.
     Q801 → Q800.  Q800's STEM names "fluorescein staining of the cornea", so
                   naming fluorescein in Q801 is safe (it is a stem word, not
                   Q800's key; Q800's key is "Epithelium defects").
     Q808 → Q807.  ⚠️ Q807's key is TROPICAMIDE. The repair must NOT name it.
                   Repaired via Q807's printed stem facts only: "a mydriatic
                   used for routine fundus examination because of its rapid
                   onset and short duration".
     Q810 → Q809.  ⚠️ Q809's key is CYCLOPENTOLATE. The repair must NOT name
                   it. Repaired via Q809's printed stem: "a 7-year-old child
                   brought for cycloplegic refraction".
     Q814 → Q813.  Q813's key is a drug class; restating its printed findings
                   ("16-year-old girl, itching, tearing, mild papillae") is
                   safe.
     Q819 → Q818.  ⚠️ Q818's key is RANIBIZUMAB. Repair uses Q818's printed
                   findings only.
     Q820 → Q818.  ⚠️ Must not name ranibizumab AND must not say
                   "intravitreal", which is Q819's key.
     Q826 → Q825.  Latanoprost is in Q825's STEM, so naming it is safe; the
                   repair must not mention uveoscleral outflow, which is
                   Q825's key.

   ---------------------------------------------------------------------------
   KEYS BELIEVED DEFECTIVE — noted, never disputed
   ---------------------------------------------------------------------------
     NONE. All 40 keys are in range and every one is supported by the source.

     One key was SUSPECTED defective before the book was read, and the book
     cleared it — recorded here because the suspicion was wrong:
       Q828 "Drug that causes vortex keratopathy" keys A (Amiodarone), and
       option B (Hydroxychloroquine) also deposits in the cornea. But
       ophthalmology.pdf p.269 reserves the term: amiodarone "produces
       whorl-shaped, pigmented deposits in the corneal epithelium (cornea
       verticillate or vortex keratopathy)", while the chloroquine /
       hydroxychloroquine paragraph on the SAME page calls its finding only
       "Corneal deposits ... usually asymptomatic but can produce glare and
       photophobia". The key is correct on the source's own wording. Recorded
       as a near-miss, not a defect. Do NOT open this as a key dispute.
     Q823's key B is likewise correct and NOT a truncation artefact:
       ophthalmology.pdf p.265 — "Pilocarpine ... lowers IOP by increasing
       aqueous outflow through the trabecular meshwork."

   ---------------------------------------------------------------------------
   NEAR-NEIGHBOURS ALREADY IN THE CORPUS — checked, NOT duplicates,
   discriminating token named for each
   ---------------------------------------------------------------------------
     Q812 (Decongestants) vs opqb-t11-459 — t11-459's options are
       Atropine / Cortisone / Vitamin A / Vitamin E; Q812's option menu is
       disjoint. Discriminating token: "Decongestants".
     Q802 (which test uses fluorescein) vs opmcq-c8-17 — c8-17's options are
       USES and its stem names the test; Q802's options are TEST NAMES and its
       stem names the dye. Opposite direction. Discriminating token: "Seidel"
       appears as an OPTION in Q802 and in the STEM of c8-17.
     Q791 (vitamin A deficiency causes all EXCEPT) vs opmcq-c8-18 (deficiency
       of WHICH vitamin causes corneal ulcers) — different stem direction,
       disjoint option menus. Discriminating token: "EXCEPT".

   ---------------------------------------------------------------------------
   WHERE THE TASK PROMPT WAS RIGHT / WRONG
   ---------------------------------------------------------------------------
   Right on every number it predicted: 40 questions; Q791 opening; Q830
   closing; six rendered pages sufficient; the title had to be read off the
   banner (it is not recorded anywhere in the project).
   Wrong: nothing. The only thing the prompt could not know — that the topic's
   home book chapter is uncached and undecked — is recorded above.

   ============================================================================= */

/* ===========================================================================
   BOOK p.127  (PDF p-134.png)  —  Q791–Q800
   Banner: "Drugs and The Eye / Questions"
   =========================================================================== */

791. Vitamin A deficiency can cause any of the following EXCEPT
     A. Ophthalmoplegia.
     B. Keratomalacia.
     C. Bitot spots.
     D. Night blindness

792. Retinal toxicity is a feature of chronic therapy with
     A. Tetracyclines.
     B. Corticosteroids
     C. Acetazolamide.
     D. Chloroquine.

793. Prolonged use of topical steroids:
     A. Retinoapthy                       [sic — "Retinopathy"]
     B. Glaucoma
     C. Cataract
     D. All of the Above

794. A mydriatic drug in a patient with shallow anterior chamber is dangerous
     because it can:
     A. Cause open angle glaucoma
     B. Precipitate an attack of angle closure glaucoma
     C. Cause glaucoma inversus            [sic — no such entity]
     D. Cause all of the above

795. Toxic amblyopia may be due to
     A. Vitamin A deficiency.
     B. Vitamin B deficiency.
     C. Vitamin C deficiency.
     D. Vitamin D deficiency.

796. All of the following drugs increase aqueous drainage EXCEPT:
     A. Prostaglandins.
     B. Beta blockers.
     C. Cholinergic drugs.
     D. Alpha adrenergic agonists.

797. Field examination in a case of tobacco poisoning shows:
     A. Tubular field.
     B. Arcuate field defect.
     C. Centero-cecal scotoma.             [sic — "Centrocaecal"]
     D. Baring of blind spot.

798. A 45-year-old woman is using multiple glaucoma eye drops. She complains
     of tearing and irritation after applying her medications. The most
     important instruction to give her when instilling multiple eye drops is:
     A. Apply all drops quickly one after another
     B. Allow 5 minutes between different drops
     C. Apply two drops each time
     D. Tilt head down after instillation

799. Which of the following is TRUE regarding eye drop technique?
     A. Drops must be placed directly on the cornea
     B. Pull the upper lid upward
     C. Apply in the lower conjunctival fornix
     D. Touch tip of the bottle to eyelids for accuracy

800. Fluorescein staining of the cornea primarily detects:
     A. Endothelial defects
     B. Epithelium defects
     C. Retinal edema
     D. Lens opacities

/* ===========================================================================
   BOOK p.128  (PDF p-135.png)  —  Q801-Q811
   =========================================================================== */

801. In the previous Q, a complication of this stain is:
     A. Stains hard contact lenses
     B. Stains soft contact lenses
     C. Causes corneal ulcer
     D. Permanent staining of cornea

802. A patient with a leaking corneal wound undergoes fluorescein testing.
     The test used to detect aqueous leak is:
     A. Jones test
     B. Seidel test
     C. Schirmer test
     D. Applanation tonometry

803. TBUT is the time between:
     A. Instillation of dye -> appearance of red reflex
     B. Last blink -> first dark spot
     C. Last blink -> green staining
     D. Drop -> disappearance of dye

804. A patient has persistent tearing. Primary Jones test is negative. What
     is the next step?
     A. Stop testing
     B. Perform Jones II
     C. Repeat TBUT
     D. Perform Schirmer test

805. A patient has been self-using tetracaine for 1 week for pain relief. The
     most serious risk is:
     A. Mydriasis
     B. Retinal toxicity
     C. Corneal ulceration
     D. Choroidal rupture

806. Adverse effect of IV fluorescein:
     A. Permanent retinal damage
     B. Yellow skin/urine
     C. Orbital cellulitis
     D. Optic neuritis

807. A 23-year-old healthy man presents for routine fundus examination. The
     ophthalmologist wants rapid onset and short duration mydriasis. The best
     drug for this purpose is:
     A. Atropine
     B. Cyclopentolate
     C. Tropicamide
     D. Homatropine

808. In the previous Q, the previous drug acts by:
     A. Stimulating dilator pupillae
     B. Blocking sphincter pupillae
     C. Paralyzing Muller muscle          [printed with the umlaut: Mueller]
     D. Selective beta-1 agonist

809. A 7-year-old child is brought for cycloplegic refraction. Best
     cycloplegic for him is:
     A. Tropicamide
     B. Cyclopentolate
     C. Atropine
     D. Phenylephrine

810. In the previous Q, the major risk of previous drug toxicity includes:
     A. Hypothermia
     B. Bradycardia
     C. Hallucinations and flushing
     D. Severe miosis

811. Phenylephrine 2.5% differs from tropicamide because:
     A. Causes cycloplegia
     B. Does NOT affect accommodation
     C. Causes permanent dilation
     D. Never stings

/* ===========================================================================
   BOOK p.129  (PDF p-136.png)  —  Q812-Q822
   =========================================================================== */

812. Decongestants may precipitate:
     A. Open-angle glaucoma
     B. Keratoconus
     C. Acute angle-closure glaucoma
     D. Optic neuritis

813. A 16-year-old girl presents with itching, tearing, mild papillae. Best
     OTC combination drug:
     A. Naphazoline + antazoline
     B. Timolol + brimonidine
     C. Tropicamide + phenylephrine
     D. Erythromycin + dexamethasone

814. In the previous Q, if we need to use a Drug that reduces eosinophil
     chemotaxis, which of the following is best:
     A. Neomycin
     B. Ketotifen
     C. Diclofenac
     D. Cyclopentolate

815. A major contraindication to steroid with antibiotic combinations:
     A. Viral keratitis suspected
     B. Age > 50
     C. Diabetic patient
     D. Wearing contact lenses

816. Best drug for maximum mydriasis in dark irides:
     A. Tropicamide alone
     B. Phenylephrine alone
     C. Tropicamide + phenylephrine
     D. Atropine

817. Rebound redness occurs with:
     A. Cyclopentolate
     B. Tetrahydrozoline
     C. Atropine
     D. Ketotifen

818. A 72-year-old diabetic with sudden central visual loss is diagnosed with
     wet age-related macular degeneration. First-line treatment:
     A. Timolol
     B. Ranibizumab
     C. Cyclopentolate
     D. Atropine

819. In the previous Q, route of administration of the selected drug:
     A. Topical drops
     B. Oral tablets
     C. Intravitreal injection
     D. Subcutaneous injection

820. In the previous Q, possible adverse effects of the selected drug include:
     A. Arrhythmia
     B. Myocardial infarction
     C. Retinal tear
     D. Glaucoma

821. An 80-year-old male taking timolol drops complains of shortness of breath
     and bradycardia. Which action reduces systemic absorption the MOST?
     A. Closing eyes firmly
     B. Pressing on medial canthus
     C. Using dark glasses
     D. Using ointments

822. A 65-year-old patient on timolol presents with worsening cough and
     wheezing. You recommend a safer drug which is:
     A. Pilocarpine
     B. Betaxolol
     C. Brimonidine
     D. Tropicamide

/* ===========================================================================
   BOOK p.130  (PDF p-137.png)  —  Q823-Q830
   Left column ends after Q826; the lower half of the right column is blank.
   =========================================================================== */

823. Pilocarpine increases aqueous outflow through:
     A. Uveoscleral
     B. Trabecular meshwork
     C. Schlemm canal ONLY
     [THREE OPTIONS ONLY - no D printed]

824. A 34-year-old glaucoma patient using a newly prescribed topical
     medication presents with dry mouth, fatigue, headache, and noticeable
     drowsiness. The drug is known to cross the blood-brain barrier and
     lowers intraocular pressure by both reducing aqueous humor production
     and increasing uveoscleral outflow. What is the most likely mechanism of
     action of this medication?
     A. Alpha-1 agonist
     B. Alpha-2 agonist
     C. Beta blocker
     D. Adrenergic antagonist

825. A 50-year-old woman on latanoprost reports brown darkening of her hazel
     eyes and long eyelashes. Mechanism of IOP reduction:
     A. (down-arrow) aqueous formation
     B. (up-arrow) uveoscleral outflow
     C. (down-arrow) episcleral venous pressure
     D. (up-arrow) trabecular flow

826. In the previous Q, Side effect unique to previous drug is:
     A. Miosis
     B. Iris hyperpigmentation
     C. Retinal artery occlusion
     D. Diplopia

827. A 55-year-old man receiving long-term treatment for pulmonary
     tuberculosis presents with progressive, painless, bilateral decrease in
     central vision over several weeks. Fundus examination may appear normal
     initially, but visual field testing shows central or cecocentral defects,
     and color vision is reduced. What is the most likely ocular finding in
     this patient?
     A. Retinal detachment
     B. Optic neuropathy
     C. Iris atrophy
     D. Keratitis

828. Drug that causes vortex keratopathy:
     A. Amiodarone
     B. Hydroxychloroquine
     C. Atropine
     D. Mannitol

829. Drug causing bull's-eye retinopathy:
     A. Digoxin
     B. Hydroxychloroquine
     C. Glycerin
     D. Neomycin

830. Sildenafil causes:
     A. Permanent blindness
     B. Blue vision
     C. Red vision
     D. Central scotoma

/* ===========================================================================
   BOOK p.131  (PDF p-138.png)  —  ANSWERS Q791-Q825
   Banner "Drugs and The Eye / Answers" at the TOP OF THE LEFT COLUMN.
   Left column: 791-810.  Right column: 811-825.
   =========================================================================== */

791. A     792. D     793. D     794. B     795. B
796. B     797. C     798. B     799. C     800. B
801. B     802. B     803. B

804. B   [BOXED]
  Explanation: Secondary test (Jones II)
  Only performed if the primary test is negative
  +ve test: fluorescein-stained saline is recovered from the nose indicating
  partial obstruction of the lacrimal drainage system
  - ve test: unstained saline is recovered indicating upper lacrimal (punctal
  or canalicular) dysfunction or lacrimal pump failure

805. C     806. B     807. C     808. B

809. B   [BOXED]
  Explanation: In infants, the combination of cyclopentolate hydrochloride
  0.2% and phenylephrine hydrochloride 1.0% is the safest and most effective

810. C     811. B     812. C     813. A     814. B     815. A

816. C   [BOXED]
  Explanation: When maximum mydriasis is required, phenylephrine in
  combination with tropicamide is ideal because the effects are additive.
  - This combination is often used to dilate the pupil of a brown iris as well

817. B     818. B     819. C     820. B     821. B     822. B     823. B

824. B   [BOXED]
  Explanation: Alpha-2 adrenergic agonists
  - Brimonidine tartrate is a relatively selective a2 agonist that lowers IOP
  by a presumed dual mechanism of decreased aqueous production and increased
  uveoscleral (non-trabecular meshwork) aqueous outflow.
  - Its systemic side effects are few but may include:
  1. Oral dryness
  2. Headache
  3. Fatigue
  4. Local allergic reaction.
  5. Drowsiness (as it is lipid soluble and crosses the blood-brain barrier)
  In infants brimonidine carries the risk of producing severe hypotension and
  apnoea

825. B

/* ===========================================================================
   BOOK p.132  (PDF p-139.png)  —  ANSWERS Q826-Q830
   ONLY THE LEFT COLUMN IS USED. The right column and the lower two thirds of
   the page are entirely blank -> proof the topic ends here.
   =========================================================================== */

826. B     827. B

828. A   [BOXED]
  Explanation: Amiodarone
  - Amiodarone is a cardiac arrhythmia drug that has been associated with:
  1. Corneal deposits:
  o Amiodarone also produces whorl-shaped, pigmented deposits in the corneal
  epithelium (cornea verticillate or vortex keratopathy).
  o These deposits are dosage-related and reversible if the dosage is
  decreased, or the drug is discontinued entirely.
  o These epithelial deposits rarely cause visual symptoms
  2. Optic neuropathy (non-arteritic AION)
  o Patients present with mildly decreased vision,
  o visual field defects, and bilateral optic disc swelling.
  2. Intracranial hypertension
  [SIC - the box numbers TWO items "2."; there is no "3." printed. Also
   "cornea verticillate" for "cornea verticillata".]

829. B

830. B   [BOXED]
  Explanation: At the time of peak plasma levels of Sildenafil,, patients may
  experience transient, mild impairment of color discrimination, often noted
  as a blue color tinge of vision.
  [SIC - doubled comma after "Sildenafil".]

/* ===========================================================================
   FULL KEY LIST, one line, as transcribed above:
   791 A · 792 D · 793 D · 794 B · 795 B · 796 B · 797 C · 798 B · 799 C
   800 B · 801 B · 802 B · 803 B · 804 B · 805 C · 806 B · 807 C · 808 B
   809 B · 810 C · 811 B · 812 C · 813 A · 814 B · 815 A · 816 C · 817 B
   818 B · 819 C · 820 B · 821 B · 822 B · 823 B · 824 B · 825 B · 826 B
   827 B · 828 A · 829 B · 830 B
   40 keys, all in range (Q823's B is inside its three-option menu).
   =========================================================================== */
