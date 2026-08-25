/* Grade Gain Ophthalmology — Topic 12, "Vitreous"
 * VERBATIM staging record. Source: Semester 8\Opthalmo\Questions\ophthalmology qb.pdf
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ THE BRIEF'S SOURCE PATH WAS WRONG. It said
 *    `Semester 8\Ophthalmology\Questions\ophthalmology qb.pdf`. That directory
 *    does not exist. The file is at `Semester 8\Opthalmo\Questions\` — the
 *    folder is spelled "Opthalmo", one 'h', as the reusable brief itself says.
 *
 * ⚠️ THE BRIEF SAID TOPIC 11 "GLAUCOMA" ENDED AT Q494 ON BOOK p.75. IT DOES NOT.
 *    Read off the pages: Glaucoma's answer block runs book p.77 (keys Q448–Q474)
 *    and book p.78 (keys Q475–**Q497**, the last one carrying a printed box).
 *    Book p.79 then opens with the "Vitreous / Questions" banner at **Q498**.
 *    So Glaucoma is **Q448–Q497, 50 questions** — exactly its promised 50 — and
 *    topic 12 opens one number after Q497, not after Q494. The opening number
 *    was READ, not computed; the arithmetic is recorded here only because it
 *    happens to agree.
 *
 * ⚠️ THE BRIEF ALSO IMPLIED TOPIC 12 WAS UNIDENTIFIED ("topics 12 and 13 fill
 *    the gap"). The contents page (PDF p.4) names it: **12 · Vitreous ·
 *    Page Qs 79 · Page As 81 · 15 Questions.**
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * PAGE MAP ACTUALLY USED  (offset verified against the printed footer on every
 * page: PDF = book + 7. PDF 85 carries "| P a g e 78"; PDF 86 carries
 * "| P a g e 79"; PDF 88 carries "| P a g e 81"; PDF 89 carries "| P a g e 82"
 * under the NEXT topic's banner.)
 *
 *   book p.77 (PDF 84) — previous topic: Glaucoma answers, keys Q448–Q474.
 *                        Read only to fix the boundary. NOT transcribed.
 *   book p.78 (PDF 85) — previous topic: Glaucoma answers, keys Q475–Q497.
 *                        LAST Glaucoma key. NOT transcribed.
 *   book p.79 (PDF 86) — Q498–Q506 (9) + topic banner "Vitreous / Questions".
 *                        Left column Q498–Q501, right column Q502–Q506.
 *                        ⚠️ Q501 carries the topic's ONLY figure.
 *   book p.80 (PDF 87) — Q507–Q512 (6). Left column Q507–Q511, right column
 *                        Q512 ALONE; the rest of the right column is blank and
 *                        the bottom third of the page is blank.
 *                        LAST QUESTION PAGE.
 *   book p.81 (PDF 88) — "Vitreous / Answers" banner in the LEFT column + ALL
 *                        FIFTEEN keys Q498–Q512. Left column: banner, keys
 *                        Q498–Q507, boxes at Q502 and Q503. Right column: keys
 *                        Q508–Q512, boxes at Q508 and Q509. The bottom 40 % of
 *                        the page is blank.  ONLY ANSWER PAGE.
 *   book p.82 (PDF 89) — next topic: "Retina / Questions", opens Q513.
 *                        (Agrees with `gg-t13.array.js`, which was written
 *                        independently.)
 *
 *   9 + 6 = 15 questions.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ✅ COUNT: 15 printed, Q498–Q512 continuous — no gap, no repeated number, no
 *    number printed twice. The contents page promised 15 and was EXACT. Counted
 *    from the printed numbers on the rendered pages, not derived.
 *
 * ✅ THE "Page As" FIGURE WAS SIMPLY CORRECT THIS TIME. Contents says answers
 *    start book p.81; they start there AND end there — all fifteen keys sit on
 *    that single page, and book p.82 carries the Retina banner. Rendered one
 *    page past anyway (p.82, PDF 89) to prove the end, per the brief.
 *
 * ✅ DEFECT 2 (a question tail in the LEFT column of the first answer page) did
 *    NOT fire here. Book p.80 ends cleanly at Q512, and book p.81's left column
 *    opens with the Answers banner. Both columns of every page were read.
 *
 * ⚠️ SHOW-THROUGH: book p.79 carries a faint mirrored ghost of book p.80's text
 *    behind the "Vitreous / Questions" banner (a heading-shaped block reading
 *    something like "…characteristic…"); book p.81 carries the same ghost
 *    behind the "Vitreous / Answers" banner. NOT transcribed.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * BOXES PRINTED: **4** — Q502, Q503 (book p.81 left column) · Q508, Q509
 *    (book p.81 right column). Counted by looking at every key line on the only
 *    answer page. Eleven keys are bare "Correct Answer: X" lines.
 *
 *    MARKER ARITHMETIC: 15 entries − 4 boxes = **11 markers** in the draft.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * FIGURES: **1** — Q501, book p.79, LEFT COLUMN, between the stem and option A.
 *
 *   400 dpi INK BOUNDS (page rendered at 400 dpi = 3307 × 4677; measured with
 *   the ink test `max(r,g,b) < 225 OR (max−min) > 30`, full resolution, not
 *   downscaled):
 *       x 484 … 1717      (width 1234)
 *       y 3141 … 3667     (height 527)
 *   ⚠️ THE PHOTOGRAPH'S OWN BOTTOM EDGE, REPORTED SEPARATELY AS ASKED: the
 *   picture is solid to row **3666** (≈1230 ink px per row, i.e. full width);
 *   row **3667** carries only 114 ink px and is the antialiased last line of
 *   the photograph itself. Rows 3668–3694 are COMPLETELY BLANK.
 *   ✅ **THERE IS NO PRINTED HORIZONTAL RULE UNDER THIS PHOTOGRAPH.** The
 *   topic-10/11 trap does not fire here — measured, not assumed.
 *
 *   NEAREST PRINTED TEXT, with distances at 400 dpi:
 *     ABOVE — the stem's last line ("cause?"), ink rows 3072–3120.
 *             Gap to the photograph's top = **21 px**.
 *     BELOW — option line "A. Retinal detachment", ink rows 3695–3744.
 *             Gap from the photograph's bottom (3667) = **28 px**.
 *   ⚠️ THE OPTIONS ARE PRINTED **BELOW** THE PICTURE IN THIS LAYOUT, not beside
 *   it. A crop that runs past y≈3690 will swallow "A. Retinal detachment" —
 *   which is the printed option this bank does NOT key. Same shape as the
 *   "A. Viral" incident.
 *
 *   WHAT THE PHOTOGRAPH SHOWS (header note only — deliberately NOT in the stem):
 *   a tight colour close-up of a child's two eyes and the bridge of the nose,
 *   lids naturally open, taken with a flash. The eye on the VIEWER'S LEFT (the
 *   patient's RIGHT) shows a bright orange-red pupillary glow with a small white
 *   corneal flash reflex on it; a hand-drawn GREEN tick/arrow sits on the brow
 *   above it. The eye on the VIEWER'S RIGHT (the patient's LEFT) shows a
 *   uniformly BLACK pupil with no glow at all, only the white corneal flash
 *   reflex; a hand-drawn RED arrow sits on the brow above it. A small printed
 *   figure number "2" sits inside the picture at its bottom-right corner — part
 *   of the image, not a caption.
 *   ⚠️ ANSWERABLE WITHOUT THE FIGURE: **yes.** The printed stem already states
 *   the finding ("the left eye shows black reflex"), so the picture illustrates
 *   rather than carries the question. The figure was NOT cut — bounds only, as
 *   briefed.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * BACK-REFERENCES: **6 of 15** — Q503, Q504 (→ Q502) · Q506, Q507 (→ Q505) ·
 *    Q509, Q510 (→ Q508). Every one of them says "In the previous Q", and in
 *    each triple the SECOND back-reference points past its immediate
 *    predecessor to the VIGNETTE two numbers back — Q504's "previous Q" is the
 *    patient of Q502, not the Weiss ring of Q503. Antecedents were read, not
 *    assumed. Reconstructed in the draft by restating the VIGNETTE only; none
 *    of the three reconstructions carries the antecedent's key, and none leaks
 *    the following question's key.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * DEFECTS AND MISPRINTS, recorded and NEVER corrected in `answer`:
 *
 *  1. **Q502 — two options name overlapping entities.** "A. Iritis" and
 *     "B. Uveitis": iritis IS an anterior uveitis, so A is a subset of B. Both
 *     are wrong here (the key is C), so nothing turns on it, but it is the same
 *     defect shape as `opqb-t3-127`.
 *  2. **Q509 — the printed box has an UNCLOSED PARENTHESIS.** It reads
 *     "- Reduced red reflex or yellowish reflex (if the vitreous cavity is full
 *     of pus" and simply stops; the ")" is never printed. Transcribed as
 *     printed.
 *  3. **Q509 — the stem's grammar is broken and its capitalisation is wrong:**
 *     "which finding is most associated with Previous condition?" — no article,
 *     "Previous" capitalised mid-sentence. Verbatim below; repaired silently in
 *     the draft as transcription hygiene.
 *  4. **Q510 — the stem is not a sentence:** "In the previous Q, Best immediate
 *     management?" Verbatim below.
 *  5. **Q498 — erratic capitalisation across its own option list:** "long
 *     standing", "Tractional", "central", "intraocular". Verbatim below.
 *  6. **Q501 — "B&C" as option D**, with no space and no expansion.
 *  7. American spellings throughout ("hemorrhage", "tumor"). Kept verbatim.
 *
 *  ✅ NO DEFECTIVE KEY WAS FOUND IN THIS TOPIC. All fifteen printed keys are
 *     defensible against the cached decks; the closest thing to a quarrel is
 *     Q501, where option D ("B&C") is arguably tempting, and the deck settles
 *     it — see the draft entry.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * FIELDS: n = printed number · p = BOOK page of the question · key = printed
 * letter · stem/opts VERBATIM including the source's typos, capitals and
 * punctuation · note = defects, figures, back-references, box text.
 */

var GG_T12 = [

{ n:498, p:79, key:'C',
  stem:'Pars plana vitrectomy is NOT indicated in:',
  opts:['long standing vitreous hemorrhage','Tractional retinal detachment','central serous retinopathy','intraocular foreign body'],
  note:'"NOT" printed bold and underlined. Option capitalisation is erratic in the source and is kept: a/c/d lower case, b capitalised. Key printed on book p.81, no box.' },

{ n:499, p:79, key:'A',
  stem:'Vitrectomy is carried out in cases of:',
  opts:['Non-resolving vitreous hemorrhage.','Non-proliferative diabetic retinopathy.','Choroidal melanoma.','High myopia.'],
  note:'Every option ends with a full stop in the source. Key on book p.81, no box.' },

{ n:500, p:79, key:'D',
  stem:'Regarding posterior vitreous detachment:',
  opts:['It is more common in hypermetropies.','It is due to separation of the vitreous from the choroid.','It always leads to retinal detachment.','It is a physiological aging process'],
  note:'Options A–C end with a full stop; option D does NOT. Key on book p.81, no box.' },

{ n:501, p:79, key:'B',
  stem:'On performing red reflex, the left eye shows black reflex, what is the possible cause?',
  opts:['Retinal detachment','Deep vitreous hemorrhage','Endophthalmitis','B&C'],
  note:'⚠️ FIGURE — the topic\'s only one. Printed BETWEEN the stem and option A, left column, book p.79. 400 dpi ink bounds x 484–1717, y 3141–3667; photograph solid to row 3666, row 3667 antialiased edge; NO printed rule beneath it (rows 3668–3694 blank). Nearest text above = stem line, rows 3072–3120 (21 px gap); nearest text below = "A. Retinal detachment", rows 3695–3744 (28 px gap). Photograph: flash close-up of a child\'s two eyes; patient\'s RIGHT eye a bright orange-red pupillary glow with a green hand-drawn tick above it, patient\'s LEFT pupil uniformly BLACK with a red hand-drawn arrow above it; printed figure number "2" inside the bottom-right corner. Stem is answerable without it. Option D is printed exactly as "B&C". Key on book p.81, no box.' },

{ n:502, p:79, key:'C',
  stem:'A 65-year-old highly myopic woman presents with sudden onset of “flying flies” and intermittent flashes of light for 2 days. VA is normal. What is the most likely diagnosis?',
  opts:['Iritis','Uveitis','Posterior vitreous detachment','Central retinal artery occlusion'],
  note:'“flying flies” printed with curly double quotes. ⚠️ DEFECT: options A "Iritis" and B "Uveitis" overlap — iritis is an anterior uveitis — but both are wrong, so the key is unaffected. ANTECEDENT of Q503 and Q504. ⚠️ BOX PRINTED (book p.81, left column), verbatim:\n"Explanation: Symptoms of PVD:\n1. Floaters: the patient complains of seeing "bugs", "cobwebs", or "spots" due to vitreous condensations that move with eye movements appearing especially in bright light. Although most floaters are benign, new, or markedly increased floaters or flashes of light require a dilated fundus exam to rule out Retinal tears/detachment,\n2. Flashes of light (Photopsia): due to traction on the retina by the vitreous base"\n(The box ends without a full stop. "bugs"/"cobwebs"/"spots" are printed with straight double quotes, unlike the stem\'s curly ones.)' },

{ n:503, p:79, key:'B',
  stem:'In the previous Q, what finding on fundus exam is characteristic of this condition?',
  opts:['Cherry-red spot','Weiss ring','Flame hemorrhages','Drusen'],
  note:'BACK-REFERENCE → Q502 (the 65-year-old highly myopic woman). ⚠️ BOX PRINTED (book p.81, left column), verbatim:\n"Explanation:  Ophthalmoscopy:\nWeiss ring: a ring formed by the glial tissue around the optic disc that remains attached to the detached posterior vitreous"\n(Two spaces after "Explanation:" in the source; "Weiss ring" underlined; the box ends without a full stop.)' },

{ n:504, p:79, key:'C',
  stem:'In the previous Q, what is the most important next step?',
  opts:['Start topical steroids','Order CT orbit','Dilated fundus exam to rule out retinal tear','Reassure and discharge'],
  note:'BACK-REFERENCE → the VIGNETTE at Q502, NOT to Q503. Confirmed by reading the antecedent: the question asks for a next step in a patient, and Q503 is a finding, not a patient. Key on book p.81, no box. ⚠️ Note that Q502\'s printed box already contains this answer ("require a dilated fundus exam to rule out Retinal tears/detachment") — the bank keys the same sentence twice, once as an explanation and once as an option.' },

{ n:505, p:79, key:'B',
  stem:'A 58-year-old diabetic patient reports sudden, painless loss of vision followed by complete blackness. Fundus view is obscured. What is the most likely cause in this patient?',
  opts:['PVD','Proliferative diabetic retinopathy','Optic neuritis','Cataract'],
  note:'ANTECEDENT of Q506 and Q507. Key on book p.81, no box.' },

{ n:506, p:79, key:'C',
  stem:'In the previous Q, what would you expect on ophthalmoscopy?',
  opts:['Cherry-red spot','Cup-to-disc enlargement','Black shadows against red reflex','Cotton-wool spots only'],
  note:'BACK-REFERENCE → Q505 (the 58-year-old diabetic). Key on book p.81, no box.' },

{ n:507, p:80, key:'C',
  stem:'In the previous Q, what investigation is essential to rule out retinal detachment?',
  opts:['OCT','CT orbit','B-scan ultrasound','MRI'],
  note:'BACK-REFERENCE → the VIGNETTE at Q505, NOT to Q506 — Q506 is a finding, and "in this patient" is what the chain is tracking. ⚠️ This back-reference CROSSES A PAGE BREAK: Q505 and Q506 are the last two entries of book p.79\'s right column, Q507 opens book p.80\'s left column. Key on book p.81, no box.' },

{ n:508, p:80, key:'B',
  stem:'A 70-year-old man presents 3 days after cataract surgery with severe eye pain, redness, photophobia and marked vision drop to PL. What is the most likely diagnosis?',
  opts:['Acute angle-closure glaucoma','Endophthalmitis','Optic neuritis','Scleritis'],
  note:'ANTECEDENT of Q509 and Q510. ⚠️ BOX PRINTED (book p.81, right column), verbatim:\n"Explanation: Etiology of Endophthalmitis and Vitritis\nA. Exogenous:\n1. As postoperative complication: Most common cause [the risk following cataract surgery is less than 0.1%].\n2. Penetrating injury to the eye (risk is 3-7%).\n(Remember to ask about tetanus vaccination in post -traumatic endophthalmitis)\n3. Intravitreal injections.\nB. Endogenous spread.\n- Infectious organisms are mostly bacterial but may be fungal."\n("post -traumatic" is printed with the space before the hyphen; the bracketed 0.1 % clause is bold and underlined.)' },

{ n:509, p:80, key:'B',
  stem:'In the previous Q, which finding is most associated with Previous condition?',
  opts:['Weiss ring','Hypopyon','Drusen','Kayser-Fleischer ring'],
  note:'BACK-REFERENCE → Q508. ⚠️ MISPRINT IN THE STEM: "most associated with Previous condition" — no article, "Previous" capitalised mid-sentence. Verbatim above. ⚠️ BOX PRINTED (book p.81, right column), verbatim:\n"Explanation:  Ophthalmoscopy of Endophthalmitis:\n- Reduced red reflex or yellowish reflex (if the vitreous cavity is full of pus\n- Associated signs of a ruptured globe may be present e.g., severe subconjunctival hemorrhage, hyphema, decreased IOP, etc"\n⚠️ MISPRINT IN THE BOX: the parenthesis opened at "(if the vitreous cavity is full of pus" is NEVER CLOSED — the line ends there. Checked at 300 dpi. Transcribed as printed.' },

{ n:510, p:80, key:'B',
  stem:'In the previous Q, Best immediate management?',
  opts:['Topical steroids only','Immediate intravitreal antibiotics ± vitrectomy','Oral doxycycline','Eye patch'],
  note:'BACK-REFERENCE → the VIGNETTE at Q508. ⚠️ MISPRINT: the stem is not a sentence — "In the previous Q, Best immediate management?" Verbatim above. Option B prints the ± sign. Key on book p.81, no box.' },

{ n:511, p:80, key:'C',
  stem:'Flashes of light in PVD are due to:',
  opts:['Inflammation','Damage to optic nerve','Traction on retina','Myopic error'],
  note:'Standalone, not a back-reference, although it restates the second half of Q502\'s printed box. Key on book p.81, no box.' },

{ n:512, p:80, key:'B',
  stem:'Yellowish reflex in fundus is characteristic of:',
  opts:['Macular edema','Endophthalmitis','Retinal vein occlusion','Optic neuritis'],
  note:'ALONE in the right column of book p.80; the rest of that column is blank. Key on book p.81, no box.' }

];
