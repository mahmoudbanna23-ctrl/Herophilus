Cross-parts duplicate adjudication — batch A (indices 0–8 of `crossparts-shortlist.json`)

Both `questions.peds.ep.js` (part 1, `pedep-` ids) and `questions.peds.ep2.js` (part 2, `pedep2-`
ids) carry `bank:'endpoint'` — this is one bank split across two source books, so a match here is a
WITHIN-bank duplicate (folds by deleting one entry), never a cross-bank ADD. All text below is taken
from `content\peds\qb-pages\crossparts-shortlist.json` (stems/options/answers) and the live data
files (`explanation`/`objective`, read-only, for the fullness call). No PDF was opened; no render was
made.

---

## 1. `pedep2-dp-29` / `pedep-gp-40`

- p2 source: `Pediatrics endpoint part2.pdf p.153`
- p1 source: `Pediatrics endpoint part1.pdf p.109 (reprinted in Model Final Exam 3, p.1595, with
  three of the four options replaced -- physiological gastroesophageal reflux and frequent minor
  upper respiratory infections giving way to acute UTI, mild intermittent asthma and acute
  gastroenteritis requiring IV fluids, a five-option ladder -- which moves the key from the second
  option to the third; the key text is unchanged)`

**Verdict: REPRINT.** Shape: **rebuilt distractor set with the stem and key concept unchanged.**
Stem is verbatim identical on both sides ("What is the most likely cause of faltering growth in a
9-month-old infant?"). Options 1–2 match exactly ("Small atrial septal defect (ASD)", "Persistent
diarrhea"); options 3–4 differ completely — p2 prints "Acute otitis media" / "Minor umbilical
hernia", p1 (at p.109) prints "Physiological gastroesophageal reflux" / "Frequent minor upper
respiratory infections". The key sits at index 1 on both sides and points at the same text,
**"Persistent diarrhea"**, in both.

Key option text quoted: p2 answer[1] = "Persistent diarrhea"; p1 answer[1] = "Persistent diarrhea".
Identical.

**Fuller printing: p1 (`pedep-gp-40`).** Its `explanation` is substantially longer (a four-box
mechanism table for faltering growth, a red-flag list, a "why each wrong option is wrong" section
tied to its own two distractors) and, critically, its `source` field already documents a *third*
printing of this same question (the MFE3 reprint at p.1595, itself a rebuilt-distractor variant).
`pedep-gp-40` is already the hub accumulating this question's printings; p2's p.153 printing is a
fourth. Recommend p2's citation folds into `pedep-gp-40`'s `source` as a further rebuilt-distractor
reprint, and `pedep2-dp-29` is deleted.

No numeric/dose/age contradiction — only the distractor set differs, which is the fold shape itself,
not a contradiction to record.

⚠️ Note for the parent: p2's own `explanation` text already states "This question and its printed
explanation box are a verbatim reprint of the bank's Part I volume" — the previous drafter of part 2
apparently already suspected/asserted a duplicate relationship to part 1, though the options are not
actually verbatim (see above). Worth knowing when this fold is executed.

---

## 2. `pedep2-mf1-28` / `pedep-mf3-13`

- p2 source: `Pediatrics endpoint part2.pdf p.1326` (chapter `normal-dev`)
- p1 source: `Pediatrics endpoint part1.pdf p.1509` (chapter `dev-problems`)

**Verdict: REPRINT.** Shape: **cross-chapter exact.** Stem is verbatim identical word-for-word on
both sides (13-month-old boy, crossing/dragging left hand, synkinesis, spastic gait, uses only right
side). All five options are identical in text and order: "Normal developmental milestones", "Fine
motor delay", "Speech and language delay", "Play and social delay", "Global delay". Both key the
same index, 1.

Key option text quoted: p2 answer[1] = "Fine motor delay"; p1 answer[1] = "Fine motor delay".
Identical.

**Fuller printing: p1 (`pedep-mf3-13`).** Both entries print no explanation box in their own source
PDF (both say "Written for this bank — [file] prints no explanation here"), so this call rests on
citation grounding. p1's explanation quotes an actual lecture file by name and text
(`` `2) developmental problems.txt` ``, with a direct quote on the global-vs-specific delay
framework) and separately flags the hand-preference red flag as outside-material. p2's explanation
cites only shorthand internal codes ("nd-15", "nd-3") with no named lecture file or quoted line.
Recommend `pedep2-mf1-28` folds into `pedep-mf3-13`'s `source`, and `pedep2-mf1-28` is deleted.

No numeric/dose/age contradiction.

⚠️ **Flagging per the brief's instruction:** `pedep-mf3-13` also matches `pedep2-nd-19` at sim 0.654
in the full shortlist (the other adjudicator's pair, not scored by me). If this REPRINT call is
acted on, a third entry citing the same stem/vignette may be in the same run — do not resolve that
third leg here; the other adjudicator's file should be checked before `pedep-mf3-13` is touched.

---

## 3. `pedep2-mf1-46` / `pedep-mf3-37`

- p2 source: `Pediatrics endpoint part2.pdf p.1362` (chapter `resp-bronch`)
- p1 source: `Pediatrics endpoint part1.pdf p.1557` (chapter `resp-bronch`, same chapter)

**Verdict: REPRINT.** Shape: **respelled** (same chapter, same stem, options differ only in
punctuation — p2 adds commas/periods p1 omits, no wording change). Stem verbatim identical
(3-month-old with bronchiolitis, grunting, best pathophysiologic explanation). Options match in
content: "Oxygen consumption is decreased with grunting[,] which helps resolve hypoxemia[.]" /
"During grunting[,] lung volume increases..." / "Grunting increases end[-]expiratory pressure and
promotes gas exchange" / "During grunting[,] the diameter of the bronchi and bronchioles is
increased." Both key index 2.

Key option text quoted: p2 answer[2] = "Grunting increases end-expiratory pressure and promotes gas
exchange."; p1 answer[2] = "Grunting increases end expiratory pressure and promotes gas exchange"
(no hyphen, no closing period). Same substance.

**Fuller printing: p1 (`pedep-mf3-37`).** Both explanations are comparably long and both quote a
printed box making the same physiological claim. The distinguishing factor is methodological rigor:
p1's expansion explicitly discloses that the mechanism is **not taken from the course material** and
states it searched the lecture cache for "end-expiratory", "PEEP" and "functional residual" and
found nothing — an explicit, checked gap-flag. p2's expansion states the same mechanism as settled
fact with no such disclosure. Per this project's grounding standard, p1's is the more defensible
printing. Recommend `pedep2-mf1-46` folds into `pedep-mf3-37`'s `source`, and `pedep2-mf1-46` is
deleted. **This call is closer than the others in the batch — flagging as a judgment call rather
than a clean-cut one**, since both printed boxes are of comparable length and neither prints more
options.

No numeric/dose/age contradiction.

---

## 4. `pedep2-mf1-25` / `pedep-inf-82`

- p2 source: `Pediatrics endpoint part2.pdf p.1320` (chapter `infection-rash`)
- p1 source: `Pediatrics endpoint part1.pdf p.1129` (chapter `infection`)

**Verdict: REPRINT.** Shape: **cross-chapter, reworded stem** (no option dropped — both print 5
options). Stem differs by one descriptor: p2 says "intense inflammation of the tonsils with
**purulent** discharge"; p1 says "intense inflammation of the tonsils with discharge" (no
"purulent"). Everything else in the stem (15-year-old boy, malaise, fever, mild jaundice,
splenomegaly, cervical lymphadenopathy) is identical. Options are the same five entities reworded
only in punctuation/word order: p2 "Non-Hodgkin's lymphoma" / p1 "Non-Hodgkins lymphoma"; p2
"Epstein-Barr virus (EBV) infection" / p1 "Epstein-Barr infection (EBV)" (same virus, words
reordered). Both key index 4.

Key option text quoted: p2 answer[4] = "Epstein-Barr virus (EBV) infection"; p1 answer[4] =
"Epstein-Barr infection (EBV)". Same virus/diagnosis, wording reordered — not a discrepancy in
meaning.

**Fuller printing: p2 (`pedep2-mf1-25`).** p2's own stem carries the extra clinical descriptor
"purulent" (more specific than p1's bare "discharge"), and its explanation adds a specific
epidemiological figure ("EBV accounts for around 90% of cases of this picture") and names the
classic **posterior** cervical lymphadenopathy location — detail p1's explanation does not include.
Recommend `pedep-inf-82`'s citation folds into `pedep2-mf1-25`'s `source`, and `pedep-inf-82` is
deleted. **Flag for the parent:** this is the one pair in the batch where the survivor I am
recommending sits in part 2, not part 1 — worth double-checking against part 1's "CLOSED, 705"
status before executing, since deleting a part-1 entry changes that closed count.

No numeric/dose/age contradiction.

---

## 5. `pedep2-mf1-13` / `pedep-mf3-29`

- p2 source: `Pediatrics endpoint part2.pdf p.1296` (chapter `normal-dev`)
- p1 source: `Pediatrics endpoint part1.pdf p.1541` (chapter `normal-dev`, same chapter)

**Verdict: REPRINT.** Shape: **respelled** (same chapter, near-identical stem, one word added).
p1's stem opens "A **healthy** infant can sit..."; p2's opens "An infant can sit..." — otherwise
identical wording (sits without support, rolls over, crawls, cannot stand alone, asks for
developmental age). Options identical on both sides: "4 months / 6 months / 9 months / 13 months /
16 months". Both key index 2.

Key option text quoted: p2 answer[2] = "9 months"; p1 answer[2] = "9 months". Identical.

**Fuller printing: p1 (`pedep-mf3-29`).** p1's explanation names an actual lecture file and quotes
its milestone table directly (`` `1) Normal development.txt` ``: C-shaped sitting at 6 months,
L-shaped sitting at 7 months, crawling at 8–9 months, standing with support at 10 months, unsupported
at 12, walking before 18), giving a floor-and-ceiling argument tied to a cited source. p2's
explanation instead cites two internal shorthand milestone tables ("nd-6", "nd-7") that give slightly
different ages for the same milestones (sitting unsupported at 8 vs. 7 months between the two) without
naming an actual lecture file. Recommend `pedep2-mf1-13` folds into `pedep-mf3-29`'s `source`, and
`pedep2-mf1-13` is deleted.

No numeric/dose/age contradiction in the stems themselves (the "healthy" qualifier does not change
the clinical picture).

---

## 6. `pedep2-liv-15` / `pedep-neo-39`

- p2 source: `Pediatrics endpoint part2.pdf p.1197` (chapter `neonatal`)
- p1 source: `Pediatrics endpoint part1.pdf p.874 (reprinted in Model Final Exam 2, p.1481, with
  "24 h" written out as "24 hours"; the options and the key are unchanged)` (chapter `neonatal`,
  same chapter)

**Verdict: REPRINT.** Shape: **dropped filler option** (relative to p1's fuller printing, p2 is
missing one distractor). p1 prints 5 options — "Prematurity", "Hemolysis", "Breastfeeding",
"Physiological jaundice", **"Early-onset sepsis"**; p2 prints only the first 4, with no fifth option
at all. Both key index 1.

Key option text quoted: p2 answer[1] = "Hemolysis"; p1 answer[1] = "Hemolysis". Identical.

**Fuller printing: p1 (`pedep-neo-39`).** More options (5 vs. 4), and its `source` field already
documents a second printing of this question (MFE2, p.1481) — it is already the hub for this
question's reprints, same as `pedep-gp-40` in pair 1. Its explanation also names and quotes an actual
lecture file (`` `8) COMMON PROBLEMS IN THE TERM NEWBORN.txt` ``) with the exact "TSB greater than 5
mg/dL before 24 hours" line, plus a worked rejection of all four other options including the
early-onset-sepsis one that p2 doesn't even offer. Recommend `pedep2-liv-15` folds into
`pedep-neo-39`'s `source` as a further dropped-option reprint, and `pedep2-liv-15` is deleted.

**Phrasing note, not a contradiction:** p1's *own* p.874 printing (shown in the shortlist `stem`)
abbreviates "24 h"; the shortlist records that the MFE2 reprint of that same p1 entry writes it out
as "24 hours". p2's independent p.1197 printing also happens to write "24 hours" in full. This is
coincidental phrasing overlap between two different printings, not a numeric contradiction — no
clinical value changes.

---

## 7. `pedep2-hem-83` / `pedep-mf3-43`

- p2 source: `Pediatrics endpoint part2.pdf p.436` (chapter `haematology`)
- p1 source: `Pediatrics endpoint part1.pdf p.1569` (chapter `neonatal-sepsis`)

**Verdict: NOT A REPRINT.** `opt: 0.000` — zero option overlap, confirmed by inspection: p2's
options are about red-cell morphology and iron studies (ferritin, target cells, macrocytosis,
inheritance); p1's options are about neonatal sepsis clinical/lab features (heart murmur, placental
transmission, pneumonia, fever, neutrophilia). **Discriminating token: the disease itself —
"thalassemia" (p2) vs. "neonatal sepsis" (p1).** These are two unrelated diseases in unrelated
chapters sharing nothing but the templated stem frame "Which of the following is TRUE about X?",
which is exactly the shared-frame trap the brief warned about. This pairs two distinct questions; it
does not fold them.

Key option text quoted for reference only (not folded): p2 answer[1] = "Presence of target cells in
blood film"; p1 answer[2] = "Pneumonia is the commonest presentation in early-onset sepsis." — plainly
different clinical facts, confirming the verdict.

---

## 8. `pedep2-liv-11` / `pedep-mf1-73`

- p2 source: `Pediatrics endpoint part2.pdf p.1189` (chapter `liver-hep`)
- p1 source: `Pediatrics endpoint part1.pdf p.1306` (chapter `perinatal`)

**Verdict: NOT A REPRINT.** `opt: 0.000` — zero option overlap, confirmed: p2's options are hepatitis
A virology facts (DNA/RNA, treatment urgency, cure timeline, chronicity); p1's options are
gastroschisis facts (defect side, chromosomal association, intestinal atresia association, cardiac
anomaly rate). **Discriminating token: the diagnosis itself — "hepatitis A" (p2) vs. "gastroschisis"
(p1).** These share only the templated stem frame "Which of the following is true regarding X?",
again the shared-frame trap, not a duplicate.

Key option text quoted for reference only (not folded): p2 answer[2] = "Cure is usually achieved
after 4 weeks of infection"; p1 answer[2] = "The most common association is intestinal atresia" —
different diseases, different facts, confirming the verdict.

---

## 9. `pedep2-end-25` / `pedep-emg-28`

- p2 source: `Pediatrics endpoint part2.pdf p.1142` (chapter `endo-dka`)
- p1 source: `Pediatrics endpoint part1.pdf p.632` (chapter `emergencies`)

**Verdict: REPRINT.** Shape: **cross-chapter, respelled/reworded** (no option dropped, 5 options
both sides). Same clinical vignette in both: 3-year-old boy, dehydration, rapid breathing following
abdominal pain and vomiting, glucose 850 mg/dL/dl, ketones ++/positive. Wording differs only
cosmetically: p2 "presents to the emergency department... urine ketones are positive (++)" vs. p1
"comes to the ER... ketones ++ in urine"; p2's 4th option is spelled out "Sodium bicarbonate
(NaHCO3)" vs. p1's abbreviation-only "NaHCO3" (same substance). Both key index 2.

Key option text quoted: p2 answer[2] = "IV bolus of normal saline"; p1 answer[2] = "IV bolus of
normal saline". Identical.

**Fuller printing: p1 (`pedep-emg-28`).** Its explanation names and quotes an actual lecture file
(`` `51) DKA.txt` ``) describing the three-goal sequence of fluid therapy and naming early-insulin
and bicarbonate as specific cerebral-oedema risk factors from that source. p2's explanation makes the
same clinical argument but without citing a named lecture file — it reads as paraphrase rather than
quoted source. Recommend `pedep2-end-25` folds into `pedep-emg-28`'s `source`, and `pedep2-end-25` is
deleted.

No numeric/dose/age contradiction — glucose (850 mg/dL/dl) and ketone status (++) match exactly on
both sides.

---

## Summary table

| pair | verdict | survivor | shape / discriminating token |
|---|---|---|---|
| `pedep2-dp-29` / `pedep-gp-40` | REPRINT | `pedep-gp-40` | rebuilt distractor set, key unchanged |
| `pedep2-mf1-28` / `pedep-mf3-13` | REPRINT | `pedep-mf3-13` | cross-chapter exact |
| `pedep2-mf1-46` / `pedep-mf3-37` | REPRINT | `pedep-mf3-37` | respelled (judgment call, close) |
| `pedep2-mf1-25` / `pedep-inf-82` | REPRINT | `pedep2-mf1-25` | cross-chapter, reworded stem |
| `pedep2-mf1-13` / `pedep-mf3-29` | REPRINT | `pedep-mf3-29` | respelled |
| `pedep2-liv-15` / `pedep-neo-39` | REPRINT | `pedep-neo-39` | dropped filler option |
| `pedep2-hem-83` / `pedep-mf3-43` | NOT A REPRINT | — | "thalassemia" vs "neonatal sepsis" |
| `pedep2-liv-11` / `pedep-mf1-73` | NOT A REPRINT | — | "hepatitis A" vs "gastroschisis" |
| `pedep2-end-25` / `pedep-emg-28` | REPRINT | `pedep-emg-28` | cross-chapter, respelled |

**Counts: 7 REPRINT · 2 NOT A REPRINT · 0 UNCERTAIN.**

No pair in this batch had the two keys pointing at genuinely different answers, and no numeric,
dose, unit, age or side contradiction was found between any printing pair — all differences were
either wording/punctuation or distractor-set reshuffling, which is the fold shape itself, not a
contradiction to record.
