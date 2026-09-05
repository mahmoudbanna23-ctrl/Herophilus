# Cross-parts duplicate adjudication — set B (indices 9–16 of `crossparts-shortlist.json`)

Both `questions.peds.ep.js` (part 1, `pedep-` ids) and `questions.peds.ep2.js` (part 2, `pedep2-`
ids) carry `bank:'endpoint'` — this is one bank split across two source PDFs, so a match here is a
within-bank duplicate (fold = delete one entry, fold its citation into the survivor), never a
cross-bank `alsoIn` add. Text below is quoted from `crossparts-shortlist.json` and, for fullness
comparisons, from the live data files (read-only — neither file was edited).

---

## 1. `pedep2-res-29` / `pedep-alg-1`

- **Sources:** `Pediatrics endpoint part2.pdf p.533` · `Pediatrics endpoint part1.pdf p.911`
- **Verdict: REPRINT** — shape: reworded stem, options and key unchanged (closest of the seven
  listed shapes; doesn't cleanly match any because no option was dropped — flagged rather than
  forced into one).
- **Fuller printing / survivor: `pedep-alg-1`.** Options are identical (5/5) and stems carry the
  same clinical content at the same length (patient's name changed, Ali → Jonathan, and several
  clauses paraphrased — "unable to say more than a single word" → "only able to say one word at a
  time", "raised, itchy rash" → "raised itchy rash", etc.). The deciding signal is the *printed*
  explanation box each source quotes: part 1's box — "Jonathan has multi-system involvement—
  respiratory distress, anxiety, and an urticarial rash—following likely allergen exposure,
  consistent with anaphylaxis. His underlying asthma also increases the risk of severe respiratory
  compromise in anaphylactic reactions." — is longer and more specific than part 2's — "Sudden
  breathing difficulty with rash and swelling after exposure to allergens strongly suggests
  anaphylaxis. Asthma is a risk factor for severe reactions."
- **Key option text, both sides:** answer index 2 both — `pedep2-res-29`: "Anaphylaxis" ·
  `pedep-alg-1`: "Anaphylaxis". Match, no contradiction.
- **Contradiction:** none in numbers/units/doses/ages (age 6 both sides). Patient name differs
  (Ali / Jonathan) — a printing difference, not a factual contradiction.

## 2. `pedep2-nd-19` / `pedep-mf3-13`

- **Sources:** `Pediatrics endpoint part2.pdf p.56` · `Pediatrics endpoint part1.pdf p.1509`
- **Verdict: NOT A REPRINT.**
- **Discriminating tokens:** age (12-month-old vs 13-month-old); the presenting findings are
  different clinical pictures — `pedep2-nd-19`'s infant is cruising furniture, responding to his
  name and saying "mama"/"papa" (normal gross-motor and language milestones), with the only
  concern being an early, fixed **left-hand** preference; `pedep-mf3-13`'s infant is described as
  "crossing arms in his left hand and dragging his left hand and synkinesis and spastic gait" and
  "only uses his right side" — a neurological (hemiparesis-pattern) presentation, not a normally
  developing infant. The option menus also differ at slot 0: `pedep2-nd-19` offers **"Gross motor
  delay"**, `pedep-mf3-13` offers **"Normal developmental milestones"** — not the same ladder
  (opt score 0.8, not 1.0). Both happen to key the same slot-1 text, "Fine motor delay", but that
  is the shared-partial-menu case the brief warns about, not evidence of duplication — a shared
  option menu pairs questions, it does not fold them.
- **Key option text, both sides:** answer index 1 both — `pedep2-nd-19`: "Fine motor delay" ·
  `pedep-mf3-13`: "Fine motor delay". Text matches but is coincidental given the menus otherwise
  differ and the vignettes are different questions.
- **Flag:** `pedep-mf3-13`'s stem here is **byte-identical** to `pedep2-mf1-28`
  ("At a routine health visitor consultation, a 13-month-old boy is noticed to be crossing arms in
  his left hand and dragging his left hand and synkinesis and spastic gait…", sim 1.000, opt 1.000
  in the shortlist), which is under adjudication by another agent as the real reprint pair. This
  pair (`pedep2-nd-19`/`pedep-mf3-13`) is judged on its own text above and is independent of that
  other pair; I have not attempted to resolve it.

## 3. `pedep2-liv-14` / `pedep-neo-8`

- **Sources:** `Pediatrics endpoint part2.pdf p.1195` · `Pediatrics endpoint part1.pdf p.812`
- **Verdict: REPRINT** — shape: **rebuilt distractor set with the stem and key concept unchanged.**
  Stem is the same case (full-term boy, mother group O Rh-positive, breastfeeding well, jaundice
  noticed by a family member, clinically well, bilirubin rising over 6 h despite intensive
  phototherapy started at 10 h, baby's own group is A Rh-positive). Options differ substantially:
  `pedep2-liv-14` = ["ABO incompatibility", "Biliary atresia", "Congenital hypothyroidism",
  "Rhesus hemolytic disease"] (4); `pedep-neo-8` = ["ABO incompatibility", "Biliary atresia",
  "Breastmilk jaundice", "Physiological jaundice", "Rhesus hemolytic disease"] (5) — two of the
  four p2 distractors ("Congenital hypothyroidism") don't appear in p1 at all, and two of p1's
  five ("Breastmilk jaundice", "Physiological jaundice") don't appear in p2.
- **Fuller printing / survivor: `pedep-neo-8`.** More options (5 vs 4); its live entry also carries
  a comparative table linking it to sibling questions on the same option ladder
  (`pedep-neo-9`/`-10`/`-11`), which the part-2 write-up (linking instead to `pedep2-liv-13`) does
  not reproduce.
- **Key option text, both sides:** answer index 0 both — `pedep2-liv-14`: "ABO incompatibility" ·
  `pedep-neo-8`: "ABO incompatibility". Match, no contradiction.
- **Contradiction:** units differ — p2 gives bilirubin in mg/dL (9 → 14.5), p1 in μmol/L (150 →
  250). These are numerically consistent (9 × 17.1 ≈ 154; 14.5 × 17.1 ≈ 248 — within rounding of
  150/250), so **not a contradiction**, just a unit-conversion difference between the two
  printings — noted per the brief's instruction to check units, not because the values disagree.
  Patient name differs (Kamal / Stewart) — cosmetic, not a contradiction.

## 4. `pedep2-res-41` / `pedep-mf3-43`

- **Sources:** `Pediatrics endpoint part2.pdf p.557` · `Pediatrics endpoint part1.pdf p.1569`
- **Verdict: REPRINT** — shape: respelled / reworded stem intro, options and key unchanged.
  Stems: "In neonatal sepsis, which of the following statements is TRUE?" (p2) vs "Which of the
  following is true about neonatal sepsis?" (p1) — same question, reordered clause. Options are
  the same five items with only punctuation/wording variants ("most common" vs "commonest",
  trailing periods present in p1, absent in p2).
- **Fuller printing / survivor: `pedep-mf3-43`.** Its printed explanation box is longer and names
  the organisms: "Early-onset neonatal sepsis (within the first 72 hours) is usually acquired from
  the maternal genital tract during delivery. The most frequent clinical manifestation is
  respiratory distress or pneumonia, often caused by pathogens like Group B Streptococcus or E.
  coli." — versus p2's box, "Early-onset neonatal sepsis, often acquired during delivery, commonly
  presents with pneumonia," which omits the organism names.
- **Key option text, both sides:** answer index 2 both — `pedep2-res-41`: "Pneumonia is the most
  common presentation in early-onset sepsis" · `pedep-mf3-43`: "Pneumonia is the commonest
  presentation in early-onset sepsis." Same claim, synonym wording ("most common" / "commonest") —
  not a contradiction.
- **Contradiction:** none in numbers/units/doses/ages (no such values in either stem).

## 5. `pedep2-end-18` / `pedep-neo-37`

- **Sources:** `Pediatrics endpoint part2.pdf p.1128` · `Pediatrics endpoint part1.pdf p.870`
- **Verdict: REPRINT** — shape: reworded stem with a DROPPED FILLER option. Same case exactly:
  mother with pre-eclampsia, baby delivered at 37 weeks, weighs 2.2 kg, admitted to Special Care
  Baby Unit for his size, appears well, has had a breastfeed, "what is he most at risk of?". `p1`
  adds one extra clinical clause p2 lacks — "her fetus has shown signs of intrauterine growth
  restriction on antenatal scans" — and carries a fifth option, "Hyperglycemia", that p2 drops
  entirely (p2 has only 4 options).
- **Fuller printing / survivor: `pedep-neo-37`.** Strictly fuller on every axis: longer stem (IUGR
  detail), more options (5 vs 4), and a longer printed box ("Small-for-gestational-age infants have
  reduced glycogen and fat stores, putting them at high risk of hypoglycemia. Close monitoring is
  required." plus a much longer expansion) versus p2's shorter box ("Infants of mothers with
  pre-eclampsia and low birth weight are at risk of neonatal hypoglycemia due to poor glycogen
  stores and immature glucose regulatory mechanisms, even if they appear well initially.").
- **Key option text, both sides:** answer index 3 both — `pedep2-end-18`: "Hypoglycemia" ·
  `pedep-neo-37`: "Hypoglycemia". Match, no contradiction.
- **Contradiction:** none — weight (2.2 kg) and gestation (37 weeks) match exactly on both sides.
- **See §7 below** — `pedep2-end-18` is also matched against a second part-1 entry
  (`pedep-mf3-16`), which raises a three-printings question addressed there.

## 6. `pedep2-res-30` / `pedep-mf3-42`

- **Sources:** `Pediatrics endpoint part2.pdf p.535` · `Pediatrics endpoint part1.pdf p.1567`
- **Verdict: REPRINT** — shape: reworded stem, options identical (opt 1.0, all five: "Nutritional
  anemia", "Nephrotic syndrome", "Hepatic insufficiency", "Angioedema", "Heart failure").
- **Fuller printing / survivor: `pedep2-res-30`, with a caveat.** The two sides split fullness in
  opposite directions and I am flagging this rather than treating it as clean: `pedep-mf3-42`
  states the patient's age explicitly ("A 5-year-old boy…"), which `pedep2-res-30` never gives
  ("A boy…"); `pedep2-res-30`, meanwhile, names an extra distribution site not repeated in p1
  ("…spread to the dorsum of the hands, **eyes**, and genitalia" vs p1's "…dorsum of the hands and
  the genitalia") and has the fuller printed box: "Angioedema presents with rapid, non-pitting
  edema of soft tissues, often triggered by allergens or idiopathically. It may accompany or
  precede anaphylaxis." against p1's terser "Rapid onset swelling without renal, hepatic, or
  cardiac features → allergic angioedema." I am calling `pedep2-res-30` fuller on a 2-signal-to-1
  count (extra site detail + longer box, vs p1's age detail alone), but folding this one would lose
  the explicit age of 5 years — worth the parent's attention before this fold is executed.
- **Key option text, both sides:** answer index 3 both — "Angioedema" / "Angioedema". Match, no
  contradiction.
- **Contradiction:** none in numbers otherwise; the age (5 years, printed only in p1) would be lost
  on a fold to p2's survivor — noted, not a contradiction between the two, just an asymmetric loss.

## 7. `pedep2-end-18` / `pedep-mf3-16`

- **Sources:** `Pediatrics endpoint part2.pdf p.1128` · `Pediatrics endpoint part1.pdf p.1515`
- **Verdict: REPRINT** — same underlying case as §5 (pre-eclamptic mother, 37 weeks, 2.2 kg,
  admitted to SCBU for size, appears well, key = Hypoglycemia).
- **⚠️ Ruling this REPRINT alongside §5 means `pedep2-end-18` is being called a duplicate of TWO
  different part-1 entries (`pedep-neo-37` and `pedep-mf3-16`) — i.e. a claim of three printings of
  one underlying question across the corpus (`pedep-neo-37` p.870 chapter `neonatal`,
  `pedep-mf3-16` p.1515 chapter `neonatal-seiz` — itself printed inside a Model Final Exam
  appendix — and `pedep2-end-18` p.1128). I am stating this explicitly per the brief's instruction
  rather than quietly folding three into one.** The numbers (2.2 kg, 37 weeks) and the key
  ("Hypoglycemia") are identical across all three, and `pedep-mf3-16`'s own live explanation cites
  the identical SGA/reduced-glycogen mechanism as `pedep-neo-37`'s — this reads as the same
  question printed three times, not three independently-written questions that happen to agree.
- **Fuller printing — genuinely mixed, flagging rather than forcing a clean call.** `pedep-mf3-16`
  has one more option (5, including "Hypercalcemia" as the fifth) that `pedep2-end-18` lacks (4
  options total); `pedep2-end-18`, meanwhile, has a stem clause `pedep-mf3-16` lacks ("…due to his
  **small** size. He appears well and **has had a breastfeed**." vs mf3-16's "…because of his
  size. He appears well." — no breastfeed mention), and a longer printed box ("Infants of mothers
  with pre-eclampsia and low birth weight are at risk of neonatal hypoglycemia due to poor
  glycogen stores and immature glucose regulatory mechanisms, even if they appear well initially."
  vs mf3-16's shorter "A low-birth-weight infant of a preeclamptic mother is at risk for
  hypoglycemia due to limited glycogen stores."). That is 2 of 3 fullness signals (stem detail +
  box length) favouring `pedep2-end-18`, against 1 (option count) favouring `pedep-mf3-16`. I am
  tentatively naming **`pedep2-end-18`** the survivor of this specific pair on that count, but
  given the three-printings situation in the bullet above, the actual fullest text across all three
  copies is `pedep-neo-37` (§5) — which already carries every option and every stem clause that
  either `pedep2-end-18` or `pedep-mf3-16` has, plus the IUGR detail neither has. **I am leaving
  the final single-survivor call to the parent** rather than deciding a three-way merge that spans
  outside the two pairs I was asked to adjudicate (the `pedep-neo-37`/`pedep-mf3-16` relationship
  is p1-internal and not one of my eight pairs).
- **Key option text, both sides:** answer index 3 both — "Hypoglycemia" / "Hypoglycemia". Match, no
  contradiction.
- **Contradiction:** none — weight and gestation match exactly across all three printings.

## 8. `pedep2-mf1-51` / `pedep-inf-68`

- **Sources:** `Pediatrics endpoint part2.pdf p.1372` · `Pediatrics endpoint part1.pdf p.1101`
- **Verdict: NOT A REPRINT.**
- **Discriminating token:** `pedep2-mf1-51` is a full clinical vignette — "brought into the
  emergency department by ambulance at night", "following a 2-day history of coryzal symptoms",
  and explicitly **"he is afebrile"** — none of which appears anywhere in `pedep-inf-68`'s stem,
  which is a bare fact-recall line: "A 2-year-old boy has barking cough, stridor, and intercostal
  recession. What's the most likely causative organism?" `pedep-inf-68` gives no timeline, no
  fever status, and no presentation context at all. The two questions share the classic
  croup triad (barking cough, stridor, intercostal recession) and the same five-virus option
  ladder (Adenovirus / RSV / Parainfluenza / Rhinovirus / Influenza), which is the shared-menu
  pattern the brief warns pairs questions but never folds them — this ladder plausibly recurs
  across several different respiratory-organism questions in this bank, the same way the
  neonatal-jaundice five-option ladder recurs across `pedep-neo-8/9/10/11` (§3, note). Stem
  lengths (326 vs 114 characters) and stem similarity (0.310) both reflect a real difference in
  scope, not a paraphrase of the same text.
- **Key option text, both sides:** answer index 2 both — `pedep2-mf1-51`: "Parainfluenza virus" ·
  `pedep-inf-68`: "Parainfluenza virus". Same organism, but this is expected of two independent
  questions on the same well-known teaching fact (barking cough/croup → parainfluenza), not
  evidence the questions are the same printing.
- **Contradiction:** none — not applicable, not a reprint.

---

## Summary

| pair | verdict | survivor | shape or discriminating token |
|---|---|---|---|
| `pedep2-res-29` / `pedep-alg-1` | REPRINT | `pedep-alg-1` | reworded stem, options/key unchanged |
| `pedep2-nd-19` / `pedep-mf3-13` | NOT A REPRINT | — | different age (12 vs 13 mo), different findings, option[0] differs ("Gross motor delay" vs "Normal developmental milestones") |
| `pedep2-liv-14` / `pedep-neo-8` | REPRINT | `pedep-neo-8` | rebuilt distractor set, stem/key unchanged |
| `pedep2-res-41` / `pedep-mf3-43` | REPRINT | `pedep-mf3-43` | respelled/reworded stem, options/key unchanged |
| `pedep2-end-18` / `pedep-neo-37` | REPRINT | `pedep-neo-37` | reworded stem with a dropped filler option (Hyperglycemia + IUGR clause) |
| `pedep2-res-30` / `pedep-mf3-42` | REPRINT (mixed fullness, flagged) | `pedep2-res-30` (tentative) | reworded stem, options identical (1.0) |
| `pedep2-end-18` / `pedep-mf3-16` | REPRINT (three-printings flag) | `pedep2-end-18` (tentative, see note) | reworded stem, one option swapped/dropped; overlaps §5 — escalated |
| `pedep2-mf1-51` / `pedep-inf-68` | NOT A REPRINT | — | p2 vignette states "afebrile" + 2-day coryzal prodrome + night ambulance presentation, entirely absent from p1's bare recall stem; shared option ladder only |

**Counts: REPRINT 6 · NOT A REPRINT 2 · UNCERTAIN 0.**

No pair had the two `answer` indices pointing at genuinely different option *text* — every REPRINT
call above has matching key text on both sides. No `answer` was moved and no key dispute was
adjudicated; per project rule, a defective key would be noted, never disputed, but none of these
eight pairs presented one.
