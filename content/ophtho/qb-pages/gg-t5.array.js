/* Grade Gain Ophthalmology — Topic 5, "Eyelid"
 * VERBATIM staging record. Source: Semester 8\Opthalmo\Questions\ophthalmology qb.pdf
 *
 * PAGE MAP ACTUALLY USED (offset re-verified against the printed footer on every one of
 * the eight pages: PDF = book + 7; PDF 32 carries "| P a g e 25", PDF 39 carries
 * "| P a g e 32")
 *   book p.25 (PDF 32) — Q165–Q175  (11)  + topic banner "Eyelid / Questions"
 *   book p.26 (PDF 33) — Q176–Q185  (10)  both columns end mid-page; a layout gap, not a
 *                                        lost tail — the numbering runs straight on
 *   book p.27 (PDF 34) — Q186–Q193  ( 8)
 *   book p.28 (PDF 35) — Q194–Q201  ( 8)  ⚠️ Q198 carries a PHOTOGRAPH (the topic's only
 *                                        figure); Q200 back-references Q199
 *   book p.29 (PDF 36) — Q202–Q210  ( 9)  ⚠️ Q202 back-references Q201
 *   book p.30 (PDF 37) — Q211–Q219  ( 9)  ⚠️ Q214 back-references Q213; Q219 back-
 *                                        references Q218
 *   book p.31 (PDF 38) — Q220–Q223 in the LEFT column (4)  ‖  ANSWERS Q165–Q189 in the
 *                                        RIGHT column under the banner "Eyelids / Answers"
 *   book p.32 (PDF 39) — ANSWERS Q190–Q223 (left column Q190–Q220, right column
 *                                        Q221–Q223); ends "223. Correct Answer: B" with
 *                                        the whole lower two-thirds of the sheet white
 *   11+10+8+8+9+9+4 = 59 questions.
 *
 * ✅ BOTH ENDS CONFIRMED FROM THE PRINTED NUMBERS, not computed. Book p.25 carries the
 *    "Eyelid / Questions" banner with **165** directly under it, and the previous topic's
 *    staging (`gg-t4.array.js`) ends at Q164 on book p.23 with its keys on p.24. The last
 *    number printed in this topic is **223**, and `gg-t6.array.js` records the
 *    "Conjunctiva / Questions" banner opening at **Q224 on book p.33**. So Q165–Q223,
 *    continuous, no gap and no repeated number.
 *
 * COUNT: 59 printed against 59 promised — the contents page was EXACT for the NINTH time
 *        running on this bank (71, 41, 26, 26, 65, 52, 8, 61, 59).
 *
 * ✅ THE "Page As" FIGURE IS CORRECT — the fifth correct one (topics 4, 7, 8, 9, 5).
 *    The contents page says answers start book p.31 and the "Eyelids / Answers" banner
 *    does open in the RIGHT column of p.31. The keys then run over onto p.32, which is
 *    not a defect of the figure (it states where answers BEGIN): 25 keys on p.31
 *    (Q165–Q189), 34 keys on p.32 (Q190–Q223). Measured — p.32 was rendered and read in
 *    full and ends at Q223 with nothing after it.
 *
 * ⚠️ DEFECT 2 RECURS FOR THE FOURTH TIME: A QUESTION TAIL SHARES THE FIRST ANSWER PAGE.
 *    Book p.31 carries **Q220, Q221, Q222 and Q223 in its left column** and the answers
 *    banner plus Q165–Q189 in its right column. FOUR questions — the whole remainder of
 *    the topic — would have been lost by reading only the right column. Both columns of
 *    every page were read.
 *
 * ⚠️ SHOW-THROUGH on book p.31, and it is legible: behind the orange "Eyelids / Answers"
 *    banner the reverse of the sheet prints through as mirrored fragments of p.30's
 *    Q211 ("differentiates … from … hordeolum"). It is p.30 bleeding forwards, not
 *    printed content. Not transcribed.
 *
 * EXPLANATION BOXES: **4 printed** — Q167, Q179 (both on p.31), Q194, Q196 (both on
 *        p.32). The other 55 print the key letter alone.
 *        (t1 0/71 · t2 8/41 · t3 4/26 · t4 6/26 · t5 4/59 · t7 3/8 · t8 12/52 · t9 12/61.)
 *        Box presence is again a property of the PAGE, not the question: none of the
 *        seven question pages prints anything, and all four boxes sit on answer pages.
 *        ⇒ MARKER CHECK FOR THE DRAFT: 59 entries − 4 boxes = **55 entries must carry
 *          the "Written for this bank — ophthalmology qb.pdf prints no explanation here."
 *          marker**, and the four boxed ones must NOT.
 *
 * ⚠️ FIGURE — ONE, AND NO CROP WAS CUT (the hub cuts and verifies).
 *   • Q198, book p.28 (PDF 35), RIGHT column, immediately under the stem
 *     "What is the name of the following condition?" and immediately above option "A."
 *   • Colour bounding box MEASURED at 400 dpi by scanning for saturated pixels:
 *     **x 1889–2990, y 677–1052** on the 3307×4677 render of PDF p.35. A safe cut with a
 *     hairline of white on every side is **x 1880–3000, y 668–1060** (1120 × 392 px).
 *     At 200 dpi the same box is x 946–1496, y 340–526.
 *   • NEAREST TEXT: the stem's last line ("condition?") ends at y≈365 at 400 dpi, and
 *     option "A. Entropion" begins at y≈1090. The photograph carries **NO printed text,
 *     no letter, no arrow and no caption inside it** — verified by eye on a 400 dpi crop.
 *     There is no answer caption to clip out; the danger that spoiled four of seven crops
 *     on this module is absent here.
 *   • WHAT IT SHOWS: a single colour clinical photograph, landscape, of one eye of an
 *     elderly pale-skinned patient in near close-up — brow above, cheek below, blue-grey
 *     iris, clear cornea. The LOWER lid is the subject: its margin lies hard against the
 *     globe with **no lash row visible along it**, the inferior bulbar conjunctiva is
 *     injected, and the lid skin below is lax and crinkled with a whitish keratinised
 *     streak along the margin. Consistent with the printed key (A, Entropion) — the
 *     disappearance of the lash line from view is the sign. At 200 and 400 dpi this is a
 *     scan of a scan and individual lashes cannot be resolved; the reading above is
 *     recorded as a reading.
 *   • ANSWERABLE WITHOUT IT? **No.** The stem is "What is the name of the following
 *     condition?" and names nothing. The crop is mandatory.
 *
 * ⚠️ NEAR-REPEAT PAIRS INSIDE THIS TOPIC — flagged, not folded (the hub runs the sweep):
 *   • **Q166 ‖ Q175** — the same organism asked twice. Q166 is the vignette form
 *     ("maceration of skin of the lids and conjunctiva redness at the inner and outer
 *     canthi … Conjunctival swab is expected to show") keyed **D, Morax- Axenfeld
 *     diplobacilli**; Q175 is the bare recall form ("Angular blepharitis is an infection
 *     caused by") keyed **C, Morax-Axenfeld diplobacillus**. Different option sets and
 *     different letters, same single fact. Nine printed questions apart, both on p.25.
 *   • **Q176 ‖ Q196** — both are "senile entropion … EXCEPT" with four options, and two
 *     of the four overlap in substance: Q176 has "Only in lower lid" / "Treated by
 *     everting", Q196 has "Mainly in the lower lid" / "Treated by everting sutures".
 *     They are NOT the same question — Q176's exception is the Snellen operation (key A),
 *     Q196's is "Lacrimation is the main symptom" (key C, and Q196 carries a printed
 *     explanation box while Q176 does not). If the hub folds anything here it should keep
 *     Q196 for the box; my reading is that these are two distinct questions.
 *   • **Q221 ‖ Q223** — the trichiasis-treatment pair. Q221 asks when epilation is
 *     indicated (key C); Q223 gives ten maldirected lashes with a normal lid margin and
 *     asks the best treatment (key B, Cryoapplication). Complementary, not duplicate, but
 *     they must be read together — see the note on Q221.
 *   • Softer clusters, listed so the sweep is not surprised by them: chalazion is asked at
 *     Q167, Q177, Q180, Q193, Q211, Q213, Q215 and Q222; blepharitis at Q173, Q178, Q204,
 *     Q205, Q209, Q219 and Q220; the ptosis-operation rule at Q169, Q174, Q181 and Q194.
 *     No two of those are the same question.
 *
 * ⚠️ SUSPECTED CROSS-TOPIC / CROSS-BANK MATCHES in the shipped corpus (checked by reading
 *   `app\data\questions.ophtho.js`, which holds 434 entries; I do NOT make fold calls):
 *   • Q192 option D ("The white line is the line through which the lid could be split into
 *     anterior & posterior lamellae") is the same fact, inverted, as **`opmcq-c1-31`**
 *     ("Which of the following best describes the grey line?", keyed "It marks the
 *     separation of the lid into anterior and posterior leaflets"). Not a duplicate —
 *     Q192 is a four-statement "concerning the lid" question keyed on the 1–2 mm limbus
 *     rule — but the two share their trap.
 *   • Q212 (hordeolum externum = glands of Zeiss or Moll) sits beside **`opmcq-c1-1`**,
 *     which asks where the external hordeolum incision is made (keyed "Grey line"). Same
 *     lesion, different fact.
 *   • Q185 (ectropion causes, keyed VII nerve) sits beside **`opqb-t1-17`** (78-year-old,
 *     outward-turning lower lid, keyed "Lower lid suspensory ligament laxity"). Same
 *     disease, different mechanism asked.
 *   • Q182/Q201/Q206 overlap **`opqb-t3-115`** ("Lagophthalmos can occur in all of the
 *     following EXCEPT", already filed `op-lid`), and Q170/Q172/Q183/Q187 overlap
 *     **`opqb-t3-120`** ("Ptosis can occur in the following clinical situations", also
 *     `op-lid`). Neither is a repeat; both are worth pointing at from the drafts rather
 *     than re-writing their tables, and the drafts do so.
 *   • Q191 ("Ectropion uvea is seen in", keyed Neovascular glaucoma) is not a lid
 *     question at all and is filed `op-glauc`. Nothing in the corpus asks it.
 *
 * ⚠️ SOURCE MISPRINTS CARRIED VERBATIM BELOW and repaired in the draft (both halves done,
 *   per the rule): Q166 "Streptococcus viridians" / "Streptococcus pneumonia" ·
 *   Q167 "Zies's gland" and "Wolfing's gland" (Zeis and Wolfring) · Q168 and Q171
 *   "Rolan's muscle" (Riolan; `L5` slide 2 prints "Muscle of Riolan") · Q169 "Fasanella
 *   servant operation" (Fasanella–Servat) · Q174 "levato function" twice · Q175
 *   "Koch Week's bacillus" (Koch–Weeks) · Q176 the bare surname "Snellen" and Q179 the bare
 *   surname "Webster", both without "operation" · Q186 "Extra raw eye lashes" (row, with the
 *   connecting "of" dropped) · Q188 a stray underline after "diagnosed" ·
 *   Q194 "6months", "was15mm", "The frontal is suspension" (frontalis suspension) and
 *   "Diploma may be associated due to weak convergence" (Diplopia) · Q195 "In still
 *   antibiotics topically" (Instil) and "In tubate the lacerated canaliculus" (Intubate) ·
 *   Q199 "symmetrical What is the most likely diagnosis?" (missing full stop) · Q210
 *   "apex. regarding management" · Q216 "the It. cheek" (Lt. = left) · Q222 a comma for a
 *   full stop after "anti-histamines".
 *
 * ⚠️ TWO KEYS ARE WORTH THE HUB'S EYE. Neither is disputed and neither `answer` moves;
 *   both are noted in the drafted `explanation`, quoting the source:
 *   • **Q187** — "Congenital ptosis is:" keyed **C**. Option **A, "Usually unilateral.",
 *     also reads as true** on the standard teaching and on `L5` slide 6, whose four
 *     photographs are three unilateral and one bilateral. The key is C and stays C.
 *   • **Q197** — "Cicatricial entropion:" keyed **C, "It's a blinding disease"**, while
 *     option **D, "It will cause corneal opacification & blindness", says the same thing
 *     by its mechanism**. The key is C and stays C.
 *   (A third, Q221, is not a key defect but is unusual — see its note.)
 *
 * GROUNDING — measured, not assumed, because this topic has a specific problem:
 *   • `content\ophtho\lectures\L5) Eyelid disease.txt` (47 slides, 86 pictures, **170
 *     typed words**) was read in full. It is a picture deck. Its own absence register was
 *     re-checked rather than quoted: slides 37–46 carry ZERO typed words and every lid
 *     tumour is in that run, so the deck names no tumour; MRD is absent; the only two
 *     digits in all 170 words are the levator-function **5 mm** (slide 8) and **4 mm**
 *     (slide 9); no drug is named; "Bell" is zero although slide 15 is headed
 *     "Lagophthalmos / Paralytic"; Zeis and Moll are zero although slides 17 and 20 are
 *     headed Hordeolum Externum and Internum; "thyroid"/"Graves" are zero although slide
 *     5 is headed "Lid Retraction". **All of that is scoped to L5 and the file says so
 *     itself.**
 *   • `content\ophtho\book\ch05-eyelids.txt` (printed 70–81, 12 pages, the book's own
 *     6.5 % weight) is the main source and carries most of what L5 only photographs —
 *     the hordeolum externum/internum table, the chalazion entry, both blepharitis types
 *     with their complications, the seven ptosis aetiologies, entropion's and ectropion's
 *     four clinical types each, trichiasis, epicanthus, the lid-swelling cause table,
 *     xanthelasma and lagophthalmos with tarsorrhaphy and **gold weight implantation**.
 *   • ⚠️ THREE THINGS THIS TOPIC ASKS ARE IN NEITHER SOURCE, and each was measured by
 *     grepping **every file in `content\ophtho\lectures\` and `content\ophtho\book\`**
 *     case-insensitively and then OPENING each hit:
 *       – **Distichiasis** (Q165). Hits in three files, and all three are ABSENCE
 *         REGISTERS: `ch05-eyelids.txt` lists it under "verified absent, printed 70–81";
 *         `L5` lists it under "conditions absent altogether"; `L27,28) Problems of
 *         External Appearance.txt` uses the word once, inside "[my reading, not printed]"
 *         on a photograph. **No source teaches it.** Gap-filled and tagged.
 *       – **Morax–Axenfeld / angular blepharitis** (Q166, Q175). "Morax" hits
 *         `L6) Conjunctiva.txt` and `ch06-conjunctiva.txt` — and BOTH hits are absence
 *         registers ("Morax / Moraxella = 0"; "angular conjunctivitis (Moraxella
 *         lacunata): absent"). The one live hit in the module is `L15,16) Cornea.txt`,
 *         which names *Moraxella* as a keratitis organism in "elderly, debilitated
 *         patients" — a real hit, opened and used, but it is not angular blepharitis.
 *         Gap-filled and tagged. "Koch-Weeks" is likewise zero everywhere except an
 *         absence register.
 *       – **The normal levator excursion in millimetres** (Q190). `ch05-eyelids.txt`
 *         states outright that no levator function graded in millimetres is printed
 *         anywhere in the chapter, and L5's only two numbers are the 5 mm / 4 mm surgical
 *         thresholds. Gap-filled and tagged.
 *     Also gap-tagged, same method: **"ectropion uveae"** as a term (Q191) is zero in
 *     every ophthalmology lecture and book file — although *rubeosis iridis* and
 *     neovascular glaucoma are taught (`L13,14) Uvea & Sclera` slide 9, `L12) Glaucoma 2`
 *     under secondary angle-closure, `L19.2` "Rubeosis irides in 50%", book ch.10) —
 *     and the named operations **Snellen** and **Webster** (Q176, Q179, Q197) are zero in
 *     every file (the only "Snellen" hits in the module are the visual-acuity chart).
 *   • Where the deck only photographs a thing, the draft says so and cites the book. No
 *     claim below or in the draft rests on a slide that carries no words.
 *
 * SCHEMA: { n, p, key, stem, opts, note } — n = printed number, p = BOOK page of the
 * question, key = the printed letter. Verbatim: the source's own typos, spacing and
 * capitals stay here and are repaired only in the draft.
 */

const GG_T5 = [

{ n:165, p:25, key:'B',
  stem:'Distichiasis is:',
  opts:['Misdirected eyelashes','Accessory row of eyelashes','Downward drooping of upper lid','Outward protrusion of lower lid'],
  note:'Opens the topic, directly under the "Eyelid / Questions" banner. The three distractors are trichiasis, ptosis and ectropion — the topic defines itself by contrast in its first question. ⚠️ Distichiasis is taught in NO cached ophthalmology source; see the grounding note in the header. Chapter op-lid.' },

{ n:166, p:25, key:'D',
  stem:'A patient complains of maceration of skin of the lids and conjunctiva redness at the inner and outer canthi. Conjunctival swab is expected to show:',
  opts:['Staphylococcus aureus.','Streptococcus viridians.','Streptococcus pneumonia','Morax- Axenfeld diplobacilli'],
  note:'Angular blepharoconjunctivitis. ⚠️ NEAR-REPEAT with Q175, which asks the same organism as bare recall — see the header. Printed spellings kept: "viridians" for viridans, "pneumonia" for pneumoniae, and the space in "Morax- Axenfeld". Chapter op-lid.' },

{ n:167, p:25, key:'A',
  stem:'Chalazion is a chronic inflammatory granuloma of:',
  opts:['Meibomian Gland',"Zies's gland",'Sweat gland',"Wolfing's gland"],
  note:'⚠️ BOX PRINTED on p.31: "Chalazion (Meibomian cyst): Sterile chronic granulomatous inflammatory lesion of the meibomian glands due to retained sebaceous secretions" (with "granulomatous inflammatory" bold and underlined in the original). Printed misspellings: "Zies\'s" for Zeis, "Wolfing\'s" for Wolfring — and both eponyms are real lid glands, which is what makes them work as distractors. Chapter op-lid.' },

{ n:168, p:25, key:'C',
  stem:"Ptosis in Horner's syndrome, is due to paralysis of:",
  opts:["Rolan's muscle","Horner's muscle","Muller's muscle",'The levator palpebral muscle','Orbicularis oculi muscle'],
  note:'⚠️ FIVE OPTIONS, A–E — the only five-option question in this topic. "Rolan\'s" is the bank\'s spelling of Riolan; `L5` slide 2 prints "Muscle of Riolan" as an anatomy label. Chapter op-lid.' },

{ n:169, p:25, key:'C',
  stem:'Severe congenital ptosis with no levator function can be treated by:',
  opts:['Levator resection from skin side','Levator resection from conjunctival side','Fascia Lata sling operation','Fasanella servant operation'],
  note:'Pairs with Q174 (the same rule from the other side) and Q181D. "Fasanella servant" is the bank\'s spelling of Fasanella–Servat. Chapter op-lid.' },

{ n:170, p:25, key:'C',
  stem:'Ptosis and mydriasis are seen in:',
  opts:['Facial palsy','Peripheral neuritis','Oculomotor palsy','Sympathetic palsy'],
  note:'The Horner/third-nerve discriminator: option D is the deliberate trap, because sympathetic palsy gives ptosis with MIOSIS. Sits against Q168, three questions earlier. Chapter op-lid, secondary *op-neuro*.' },

{ n:171, p:25, key:'A',
  stem:'The lid sphincter muscle has the following portions:',
  opts:['Palpebral and orbital portions',"Horner's muscle and Rolan's muscle",'All of the above','None of the above'],
  note:'⚠️ Option B names two structures that ARE parts of orbicularis oculi (pars lacrimalis and the muscle of Riolan), which makes "All of the above" tempting; the printed key is A. Recorded, not disputed — see the drafted explanation. Chapter op-lid.' },

{ n:172, p:25, key:'D',
  stem:'Congenital ptosis is characterized by:',
  opts:['Absent eyelid crease','Chin elevation','Forehead corrugation','All of the above'],
  note:'All three are the standard congenital signs; the compensatory pair (chin up, brow up) is the half `L5` slide 6 photographs in its fourth picture without naming. Chapter op-lid.' },

{ n:173, p:25, key:'D',
  stem:'Inflammation of lid glands includes all of the following EXCEPT:',
  opts:['Ulcerative blepharitis','Hordeolum externum','Hordeolum Internum','Squamous blepharitis'],
  note:'"EXCEPT" is printed bold and underlined. "Squamous blepharitis" is this bank\'s name for the seborrhoeic type — scaling of the margin skin, not gland inflammation. Chapter op-lid.' },

{ n:174, p:25, key:'B',
  stem:'Levator resection operation should be used in:',
  opts:['Mild ptosis with levator function','Moderate ptosis with good levato function','Moderate ptosis with poor levato function','Severe ptosis with poor levator function'],
  note:'⚠️ "levato" for "levator" in options B and C — the bank\'s own typo, kept here and repaired in the draft. Option A is left incomplete by the source ("with levator function", no adjective). Answers directly to `L5` slide 8. Chapter op-lid.' },

{ n:175, p:25, key:'C',
  stem:'Angular blepharitis is an infection caused by:',
  opts:['Staphylococcus aureus',"Koch Week's bacillus",'Morax-Axenfeld diplobacillus','Pneumococci'],
  note:'⚠️ NEAR-REPEAT with Q166 — same organism, vignette vs recall, different option sets and different letters. "Koch Week\'s" is the bank\'s spelling of Koch–Weeks (Haemophilus aegyptius). Last question on p.25. Chapter op-lid.' },

{ n:176, p:26, key:'A',
  stem:'All true about senile entropion EXCEPT:',
  opts:['Can be treated by Snellen','Only in lower lid','Affected by lower lid retractor','Treated by everting'],
  note:'⚠️ NEAR-REPEAT with Q196 (same disease, same EXCEPT stem, two overlapping options) — see the header. "Snellen" here is the operation, not the chart; the operation is in no cached source. Chapter op-lid.' },

{ n:177, p:26, key:'A',
  stem:'Most common painless swelling of eyelid:',
  opts:['Chalazion','Stye','Squamous cell carcinoma','BCC'],
  note:'⚠️ Two of the four options are lid malignancies, which `L5` never names and book ch.5 never teaches (the book\'s malignancies are ch.17). The question is answerable without them because "painless" excludes the stye and "most common" settles the rest. Chapter op-lid, secondary *op-onc*.' },

{ n:178, p:26, key:'A',
  stem:'Complications of anterior blepharitis EXCEPT:',
  opts:['Recurrent chalazion','Recurrent stye','Trichiasis','Madarosis'],
  note:'Cleanly sourced: book printed 74 gives madarosis, trichiasis, poliosis, recurrent styes, chronic conjunctivitis and phlyctens to ANTERIOR (staphylococcal) blepharitis, and lists "Recurrent chalazia" as a symptom of POSTERIOR blepharitis on the same page. Chapter op-lid.' },

{ n:179, p:26, key:'D',
  stem:'All the following is used in treatment of trichiasis EXCEPT:',
  opts:['Argon laser','Cryotherapy','Electrolysis','Webster'],
  note:'⚠️ BOX PRINTED on p.31, and it is a numbered list: "Treatment of Trichiasis / 1. repeated epilation of the offending lashes. / 2. electrolysis of the lash follicles. / 3. cryotherapy. / 4. or surgery." (items 1–4 bold and underlined in the original). Note that ARGON LASER is keyed as correct although the box does not list it. Chapter op-lid.' },

{ n:180, p:26, key:'C',
  stem:'The following statement is true regarding a chalazion:',
  opts:['Usually, it is painful','Usually, it should be opened through a skin incision','When it is large, it can cause diminution of visual acuity','It usually points in front of the gray line'],
  note:'Option D turns on the grey line, the same landmark as `opmcq-c1-31` and `opmcq-c1-1` in the shipped corpus. Chapter op-lid.' },

{ n:181, p:26, key:'D',
  stem:'Considering the management of ptosis:',
  opts:['In paralytic ptosis, surgery should correct the ptosis before the strabismus','All congenital unilateral ptosis cases should be operated upon immediately','Mechanical ptosis necessitates a levator resection surgery','The frontalis suspension is needed if the levator function is absent'],
  note:'Four management statements, one true. D restates `L5` slide 9 ("Severe ptosis with poor levator function ( 4 mm or less )"). Chapter op-lid.' },

{ n:182, p:26, key:'C',
  stem:'Lagophthalmos is:',
  opts:['Wide palpebral fissure.','Lid lag.','Inability to close the palpebral fissure.','Incomplete opening of the palpebral fissure'],
  note:'Definition question; book printed 80 gives it verbatim. Option D is the deliberate inversion (opening for closing). Sits with `opqb-t3-115` in the shipped corpus. Chapter op-lid.' },

{ n:183, p:26, key:'C',
  stem:'Ptosis cannot be caused by:',
  opts:['Third nerve palsy.',"Horner's syndrome.",'Large chalazion of the lower lid.','Trauma.'],
  note:'"cannot" is printed bold and underlined. The trap is the word LOWER — a mass has to be in the UPPER lid to produce mechanical ptosis. Chapter op-lid.' },

{ n:184, p:26, key:'D',
  stem:'The following sign is NOT a manifestation of aponeurotic ptosis:',
  opts:['High upper lid skin creases.','Good levator function.','Thinning the lid above the tarsus.','Increased lid weight.'],
  note:'"NOT" printed bold and underlined. Increased lid weight is the mechanism of MECHANICAL ptosis, book printed 76 item 6 — the two aetiologies are being separated. Chapter op-lid.' },

{ n:185, p:26, key:'D',
  stem:'Ectropion can be due to:',
  opts:['Scarring of the conjunctiva.','Atrophic eyes.','Injury to the third nerve.','Injury to the seventh nerve.'],
  note:'Options A and B are entropion mechanisms (conjunctival shortening; loss of globe support), C is ptosis. Last question on p.26; both columns end mid-page. Overlaps `opqb-t1-17` in the corpus — same disease, different mechanism. Chapter op-lid.' },

{ n:186, p:27, key:'B',
  stem:'Madarosis is:',
  opts:['Lid margin eczema.','Loss of eye lashes.','Distortion of eye lashes.','Extra raw eye lashes.'],
  note:'⚠️ Option D is DISTICHIASIS restated, and Q165 keyed exactly that phrasing ("Accessory row of eyelashes") twenty-one questions earlier; option C is trichiasis. The topic recycles its own vocabulary as distractors. ⚠️ PRINTED MISPRINT: option D reads "Extra raw eye lashes." — "raw" for "row", with the connecting "of" dropped; repaired in the draft and the printing quoted there. Book printed 74 defines madarosis in parentheses. Chapter op-lid.' },

{ n:187, p:27, key:'C',
  stem:'Congenital ptosis is:',
  opts:['Usually unilateral.','Due mainly to faulty development of superior rectus.','Indicated for surgery if the lid covers the pupil preventing normal vision development.','Rarely associated with paralysis of extraocular muscle'],
  note:'⚠️ KEY WORTH THE HUB\'S EYE, not disputed: option A also reads as true on the standard teaching and on `L5` slide 6 (three of its four photographs are unilateral). The key is C and stays C; the drafted explanation records the overlap. Amblyopia — the reason C is the answer — is named NOWHERE in L5 and is a gap-fill. Chapter op-lid.' },

{ n:188, p:27, key:'C',
  stem:'A hordeolum Internum:',
  opts:['It is an inflammation of the gland of Zeiss.','It is treated surgically once it is diagnosed.','Points mainly in the palpebral conjunctiva.','It is a precancerous condition.'],
  note:'A stray underline is printed after "diagnosed" in option B — a typesetting artefact, no word is underlined. Book printed 72 supplies every option: Zeiss belongs to the externum, and the internum "should NEVER be incised during active inflammation UNLESS it forms an abscess". Chapter op-lid.' },

{ n:189, p:27, key:'D',
  stem:'Surgical emphysema of the lid is usually due to a fracture of:',
  opts:['Zygomatic bone.','Frontal bone.','Palatine bone.','Ethmoidal bone.'],
  note:'⚠️ Not a lid-disease question — it is orbital trauma. `L25) Trauma I` slide 18 is headed "Blunt trauma: Surgical emphysema" and sits immediately before the blow-out slides; book ch.3 names the medial wall alongside the floor. Chapter op-trauma, secondary *op-lid*.' },

{ n:190, p:27, key:'D',
  stem:'The normal range of action of the levator palpebrae superioris is:',
  opts:['2 – 4 mm.','28 – 30 mm.','More than 30 mm.','15 – 18 mm.'],
  note:'⚠️ GAP. `ch05-eyelids.txt` states that no levator function graded in millimetres is printed anywhere in the chapter, and L5\'s only two digits are the 5 mm / 4 mm surgical thresholds on slides 8–9. Filled from general knowledge and tagged in the draft. Chapter op-lid.' },

{ n:191, p:27, key:'D',
  stem:'Ectropion uvea is seen in:',
  opts:['Acute uveitis.','Acute angle closure glaucoma.','With ectropion of the lower lid.','Neovascular glaucoma.'],
  note:'⚠️ NOT A LID QUESTION — the bank has filed an iris sign in its Eyelid topic on the strength of the shared word "ectropion", and option C is the joke that gives that away. "Ectropion uveae" as a term is zero in every cached ophthalmology lecture and book file; rubeosis iridis and neovascular glaucoma ARE taught (`L13,14` slide 9, `L12`, `L19.2`, book ch.10). Chapter op-glauc, secondary *op-lid*.' },

{ n:192, p:27, key:'B',
  stem:'Concerning the lid:',
  opts:['The medial canthus is acute & measures 60 degrees when the eyes are open.','When the eye is looking ahead, the lid covers 1-2 mm of the upper limbus.','The posterior lid margin is rounded.','The white line is the line through which the lid could be split into anterior & posterior lamellae.'],
  note:'⚠️ Option D swaps the white line for the GREY line — the same trap as `opmcq-c1-31` in the shipped corpus, inverted. Option C swaps the posterior margin for the anterior (book printed 71: "The posterior lid margin is right-angled"). Option B is the complement of the book\'s ptosis definition ("covers more than 2 mm of the superior limbus"). Chapter op-lid.' },

{ n:193, p:27, key:'A',
  stem:'A 50-year-old male patient presented with a 3 mm well circumscribed painless swelling of the upper lid, it was firm, adherent to the tarsus but not to overlying skin:',
  opts:['It should be removed through a conjunctival incision & curettage.','Repeated recurrences of the swelling should be treated by intralesional steroids.','If it enlarges it may induce a low degree of myopia.','If pain develops with yellow pointing on conjunctival side, it should be evacuated by incision & curettage.'],
  note:'Chalazion vignette. Option B is the direct contradiction of book printed 73 (a recurrent chalazion should be BIOPSIED to exclude meibomian gland carcinoma) and Q222 keys exactly that. Option D is the hordeolum internum rule inverted. Last question on p.27. Chapter op-lid.' },

{ n:194, p:28, key:'D',
  stem:'A 60-year-old male patient presented with severe bilateral ptosis of 6months duration, the levator function was15mm:',
  opts:['The upper lid creases are about 8mm from lid margin','The frontal is suspension should be performed','Diploma may be associated due to weak convergence','This condition may be induced by cataract surgery'],
  note:'⚠️ BOX PRINTED on p.32: "This is probably a case of aponeurosis due to stretch & injury to the levator muscle aponeurosis by the speculum that keeps the lids open during cataract surgery, a very rare post-operative complication" ("aponeurosis" and the speculum clause bold and underlined in the original). ⚠️ THREE printed faults in one question: "6months" and "was15mm" set without spaces, "The frontal is suspension" for "frontalis suspension", and "Diploma" for "Diplopia" — all repaired in the draft with the printing quoted. Chapter op-lid.' },

{ n:195, p:28, key:'C',
  stem:'In repair of a lacerated eyelid, care should be taken for all of the following EXCEPT:',
  opts:['The first suture should be in the grey line','Suture layer by layer','In still antibiotics topically','In tubate the lacerated canaliculus'],
  note:'⚠️ "In still" for "Instil" and "In tubate" for "Intubate" — the source has split both verbs. Repaired in the draft, printing quoted. Lid laceration repair is ABSENT from book ch.5 (its trauma chapter is 18, unread) and from L5. Chapter op-trauma, secondary *op-lid*.' },

{ n:196, p:28, key:'C',
  stem:'All of the following are related to senile entropion EXCEPT:',
  opts:['Treated by everting sutures','Lead to blindness','Lacrimation is the main symptom','Mainly in the lower lid'],
  note:'⚠️ BOX PRINTED on p.32: "Irritation & foreign body sensation is the main symptom". ⚠️ NEAR-REPEAT with Q176 — see the header; this is the one with the box. ⚠️ Option B ("Lead to blindness") is keyed as TRUE here while Q197 keys "It\'s a blinding disease" as the answer for the cicatricial type; the two are consistent, both resting on book printed 77 ("If infectious keratitis occurs, it may lead to loss of vision"). Chapter op-lid.' },

{ n:197, p:28, key:'C',
  stem:'Cicatricial entropion:',
  opts:["Mainly treated by Webster's operation","Snellen's operation for treating lower lid","It's a blinding disease",'It will cause corneal opacification & blindness'],
  note:'⚠️ KEY WORTH THE HUB\'S EYE, not disputed: options C and D say the same thing by different routes and both read as true; the key is C and stays C. The Snellen and Webster operations are zero in every cached source; the bank\'s own internal evidence (Q176 A false for the senile type, Q179 D false for trichiasis) places Snellen on the upper lid and Webster outside trichiasis. Chapter op-lid.' },

{ n:198, p:28, key:'A',
  stem:'What is the name of the following condition?\n\n[FIGURE — see the header for bounds and description]',
  opts:['Entropion','Ectropion','Chalazion','None of the above'],
  note:'⚠️ THE TOPIC\'S ONLY FIGURE. Photograph sits between the stem and option A; full bounds, description and the "no printed text inside the crop" verification are in the header. NOT answerable without the crop. Chapter op-lid.' },

{ n:199, p:28, key:'B',
  stem:'A 4-year-old child is brought by his parents because they noticed that his eyes "look crossed" inwards. On examination, the corneal light reflex is central and symmetrical What is the most likely diagnosis?',
  opts:['Esotropia','Epicanthus fold','Entropion','Ptosis'],
  note:'A full stop is missing after "symmetrical" in the source. Pseudoesotropia; the central symmetrical reflexes are the whole discriminator, and `L5` slide 4 photographs exactly that without naming it. ⚠️ Q200 back-references this question. Chapter op-lid, secondary *op-squint*.' },

{ n:200, p:28, key:'C',
  stem:'In the previous Q, the main reason for treatment in this condition is:',
  opts:['To restore vision','To relieve eye pain','Cosmetic reason','To correct corneal exposure'],
  note:'⚠️ BACK-REFERENCE. The antecedent is **Q199** — one link back, read and confirmed, not assumed — and its answer is the epicanthal fold. Restated in the draft without naming the pseudoesotropia in a way that would answer Q199. Book printed 79: "Treatment for cosmetic reasons is surgical." Chapter op-lid.' },

{ n:201, p:28, key:'C',
  stem:'A 45-year-old male presents with inability to close his left eye completely after a recent episode of facial weakness. The cornea appears dry and mildly ulcerated inferiorly. The most likely cause of this presentation is:',
  opts:['Oculomotor nerve palsy','Trigeminal nerve palsy','Facial nerve palsy','Trochlear nerve palsy'],
  note:'⚠️ Q202 back-references this question. Option B is the exact discriminator already worked in `opqb-t3-115` (neurotrophic vs exposure keratopathy) — the draft points there rather than re-writing the table. Last question on p.28. Chapter op-lid.' },

{ n:202, p:29, key:'B',
  stem:'In the previous Q, what is the best immediate management to protect the cornea?',
  opts:['Topical steroids','Artificial tears and eyelid taping','Warm compress','Surgical correction only'],
  note:'⚠️ BACK-REFERENCE. The antecedent is **Q201** — one link back, read and confirmed — the 45-year-old with paralytic lagophthalmos after facial weakness. First question on p.29, so the antecedent is on the previous sheet. Book printed 81 lists lubrication and overnight taping first. Chapter op-lid.' },

{ n:203, p:29, key:'B',
  stem:'A 52-year-old woman presents with yellowish plaques on the medial aspect of both upper eyelids. What is the best management for cosmetic removal?',
  opts:['Topical steroids','Surgical excision','Cryotherapy','Antibiotic ointment'],
  note:'Xanthelasma. Book printed 80 gives three treatments — conservative (diet and statins, "therapeutic effect is questionable"), surgical excision, and CO2 laser (tutorial-marked). Pairs with Q207, which asks the site. Chapter op-lid, secondary *op-appear*.' },

{ n:204, p:29, key:'A',
  stem:'Which of the following complications may occur in chronic staphylococcal blepharitis?',
  opts:['Madarosis','Pterygium','Papilledema','Cataract'],
  note:'Book printed 74 gives the complication list verbatim. Overlaps Q178 (the EXCEPT form) and Q186 (the definition) — three questions on one chain, none of them duplicates. Chapter op-lid.' },

{ n:205, p:29, key:'B',
  stem:'A 35-year-old man presents with chronic red, itchy eyelids, crusts around the lashes, and occasional loss of lashes. Examination shows greasy scales on lid margins and telangiectatic vessels. The first-line management includes:',
  opts:['Systemic steroids','Lid hygiene and warm compresses','Surgical excision','Antifungal eye drops'],
  note:'⚠️ The vignette mixes anterior (greasy scales, crusts, madarosis) and posterior (telangiectatic vessels) signs; the answer is the same for both. ⚠️ `L5` prints NO lid-hygiene instruction on any of its three blepharitis slides — the answer comes from the book (printed 73, 74 and 75, three times). Chapter op-lid.' },

{ n:206, p:29, key:'B',
  stem:'Gold weight implantation is used in management of:',
  opts:['Ptosis','Lagophthalmos','Entropion','Blepharitis'],
  note:'Book printed 81, last line of the lagophthalmos treatment list — the only place "gold weight" occurs in ANY cached ophthalmology file. Chapter op-lid.' },

{ n:207, p:29, key:'B',
  stem:'Xanthelasma is most frequently located at:',
  opts:['Lateral canthus','Medial eyelid region','Upper tarsus','Lower lid margin'],
  note:'Book printed 79 and 80 both say medial; `L5` slide 34 photographs the medial, bilateral, symmetrical distribution without a word. Pairs with Q203. Chapter op-lid, secondary *op-appear*.' },

{ n:208, p:29, key:'B',
  stem:'Trichiasis differs from entropion because in trichiasis:',
  opts:['Lashes are absent','Lid margin is normal','Lid margin is inverted','There is lagophthalmos'],
  note:'Book printed 78 states the discriminator and the cache flags it as "stated here and nowhere else". Option C is the entropion definition. Chapter op-lid.' },

{ n:209, p:29, key:'B',
  stem:'Posterior blepharitis is mainly due to dysfunction of:',
  opts:['Glands of Zeiss','Meibomian glands','Glands of Moll','Lacrimal gland'],
  note:'⚠️ Zeis and Moll are named NOWHERE in `L5` (measured: zero in the typed text and zero in every slide block); the book carries them, Zeis in the hordeolum table on printed 72 and both as figure labels on printed 71. Chapter op-lid.' },

{ n:210, p:29, key:'C',
  stem:'A 17-year-old student presents with a painful, red swelling at the margin of his upper eyelid for 2 days. Examination shows a localized, tender swelling at the lash line with a small yellow point and a lash at its apex. regarding management, which statement is TRUE?',
  opts:['The lesion should be squeezed to drain pus','Oral antibiotics are mandatory in all cases','Topical antibiotic ointment and warm compresses are usually sufficient','Surgical incision through the conjunctiva is preferred'],
  note:'Hordeolum externum; "a lash at its apex" is the book\'s own phrase (printed 72). Option A is the direct contradiction of the chapter\'s only all-capital instruction, "IT MUST BE NEVER SQUEEZED", printed in red. The source runs "apex." into a lower-case "regarding". Last question on p.29. Chapter op-lid.' },

{ n:211, p:30, key:'D',
  stem:'Which of the following features differentiates chalazion from hordeolum?',
  opts:['Associated pain','Pointing to lid margin','Acute onset','Painless, chronic course'],
  note:'The first three are hordeolum features. This is the stem whose mirror image shows through the answers banner on p.31 — see the header. Chapter op-lid.' },

{ n:212, p:30, key:'B',
  stem:'Hordeolum externum is an infection of:',
  opts:['Meibomian gland','Glands of Zeiss or Moll','Lacrimal gland','Conjunctival gland'],
  note:'Book printed 72: "the follicle of the lash or the associated gland of Zeiss". Moll is added by the bank; the book prints it only as a figure label on printed 71. Sits beside `opmcq-c1-1` in the corpus, which asks where the incision goes. Chapter op-lid.' },

{ n:213, p:30, key:'C',
  stem:'Intralesional steroid injection is indicated in:',
  opts:['Hordeolum externum','Hordeolum internum','Chalazion','Blepharitis'],
  note:'⚠️ Q214 back-references this question, and the whole of Q214 depends on the answer being chalazion. Book printed 73 lists intralesional steroid first under the chalazion\'s surgical treatment. Chapter op-lid.' },

{ n:214, p:30, key:'A',
  stem:'In the previous Q, common association of Previous condition is:',
  opts:['Posterior blepharitis','Xanthelasma','Lagophthalmos','Epicanthus'],
  note:'⚠️ BACK-REFERENCE, and it is a TWO-STEP one: "the previous Q" is **Q213**, and "Previous condition" is not Q213\'s stem but Q213\'s ANSWER — the chalazion. Read and confirmed on the page, one question back, not two. Book printed 73: "Commonly associated with posterior or seborrheic blepharitis." Chapter op-lid.' },

{ n:215, p:30, key:'A',
  stem:'A patient presenting with a swelling in his upper lid for one year that does not change in size and is now becoming red and painful. The first line of management is:',
  opts:['Systemic and local antibiotics.','Immediate histo-pathological study.','Performing a CT scan.','Simple excision'],
  note:'⚠️ Reads against Q222 and must be kept apart from it: Q215 is a chalazion that has become ACUTELY INFECTED (treat the infection first), Q222 is a chalazion that has RECURRED THREE TIMES (excise and send it). Different keys, different reasons, same lesion. Chapter op-lid.' },

{ n:216, p:30, key:'B',
  stem:'A patient with a history of a skin cut wound in the It. cheek presents with inability to close this eye properly, the most serious complication to guard against is:',
  opts:['Corneal scarring.','Exposure corneal ulcer.','Corneal pannus.','Corneal vascularization.'],
  note:'⚠️ "It." is the source\'s rendering of "Lt." (left) — the capital L has been read as a capital I by whatever produced the file. Repaired in the draft, printing quoted. Same disease as Q201/Q202 (paralytic lagophthalmos) from a peripheral facial-nerve cut. Chapter op-lid.' },

{ n:217, p:30, key:'A',
  stem:'The most important examination in cases presenting with congenital ptosis is:',
  opts:['The function of the levator muscle','The state of the extraocular muscles.','The examination of the cranial nerves','The examination of the fundus.'],
  note:'Closes the ptosis-surgery chain that runs Q169 → Q174 → Q181 → Q194: levator function is what selects the operation, and `L5` slides 8 and 9 are the only two slides in the 47 with body text under the heading, both stating it. Chapter op-lid.' },

{ n:218, p:30, key:'D',
  stem:'A female patient 13-year-old, complaining of recurrent multiple painful swellings on the left eye lids. On examination, visual acuity was 6/12 and 6/18. The whole lower lid was red swollen and tender. The treatment of this case is:',
  opts:['Systemic non-steroidal anti-inflammatory drugs.','Topical antibiotic drops.','Surgical incision.','Systemic and topical antibiotics and hot fomentation.'],
  note:'⚠️ Q219 back-references this question ("In the above mentioned case"). The two acuities are printed without saying which eye is which. Multiple recurrent painful marginal swellings = recurrent styes on a blepharitic margin, which is why Q219\'s answer is what it is. Chapter op-lid.' },

{ n:219, p:30, key:'C',
  stem:'In the above mentioned case, recurrence may be prevented by:',
  opts:['A maintenance dose of systemic antibiotics','A maintenance dose of vitamins.','Treatment of Blepharitis.','Long term use of topical antibiotics'],
  note:'⚠️ BACK-REFERENCE, phrased "the above mentioned case" rather than "the previous Q". The antecedent is **Q218** — one link back, read and confirmed. Book printed 72 gives the rule in the stye column: "Prevent recurrence by treating any associated local disease (e.g., blepharitis)." Last question on p.30. Chapter op-lid.' },

{ n:220, p:31, key:'D',
  stem:'A female patient 16-year-old was complaining of presence of scales on her lashes. On examination the skin of the face was greasy. She had dandruff on the eye brows. This patient is suffering from:',
  opts:['Meibomianitis.','Angular blepharitis.','Contact dermatitis.','Seborrheic blepharitis'],
  note:'⚠️ FIRST OF THE FOUR QUESTIONS IN THE LEFT COLUMN OF THE FIRST ANSWER PAGE — defect 2, fourth occurrence. Book printed 73: seborrhoeic anterior blepharitis is "Associated with generalised seborrheic dermatitis" with greasy soft scales and no ulceration. Chapter op-lid.' },

{ n:221, p:31, key:'C',
  stem:'Epilation of maldirected rubbing eyelashes is indicated:',
  opts:['When the number of mal-directed eyelashes is less than six.','When the mal-directed eyelashes are present close to each other.','When there is an acute corneal condition.','When the number is more than six.'],
  note:'⚠️ AN UNUSUAL KEY, recorded and not disputed. The customary teaching — and the reading option A offers — is that epilation suits a FEW maldirected lashes; the bank keys **C**, the acute corneal problem. The book supports the key\'s logic without stating it: printed 78 lists "Repeated epilation of the offending lashes" first and marks it "(Temporary → Tutorial)", i.e. a holding measure. Reads directly against Q223, where ten lashes get cryotherapy instead. Chapter op-lid.' },

{ n:222, p:31, key:'D',
  stem:'A 52-year-old patient with recurrent chalazion (three times) in the upper eye lid should be managed by:',
  opts:['Antibiotics and steroids.','Systemic antibiotics and anti-histamines,','Excision and curette operation.','Excision and histopathology.'],
  note:'⚠️ Option C is the ORDINARY chalazion operation and would be right for a first chalazion — the word "recurrent" is the whole question. Book printed 73: "A recurrent chalazion (especially in elderly individuals) should be biopsied to exclude an underlying malignancy (meibomian gland carcinoma)" — the chapter\'s only oncological sentence. Option B ends with a comma for a full stop in the source. Chapter op-lid, secondary *op-onc*.' },

{ n:223, p:31, key:'B',
  stem:'A patient complaining of foreign body sensation was found to have 10 mal-directed lashes in the outer third of his upper eye lid. The lid margin was otherwise normal. The best treatment is:',
  opts:["Snellen's operation.",'Cryoapplication','Epilation','None of the above'],
  note:'⚠️ LAST QUESTION OF THE TOPIC — verified by reading book p.32 in full (its keys end at 223 with the sheet white below) and by `gg-t6.array.js`, which opens at Q224 on book p.33. "The lid margin was otherwise normal" is the book\'s trichiasis discriminator quoted back (printed 78). Reads against Q221 and Q179. Chapter op-lid.' }

];
