# Peds endpoint part 2, section 10 ("Liver disorders") — fold adjudication

Source: `Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf` (not modified/moved). Pages
viewed as native JPEG (800x450 ceiling) from
`…\scratchpad\ep2-index\native\p<PAGE>.jpeg` — all pages below were legible at that resolution;
hires was not needed for any of them.

⚠️ **Process note, not a finding**: a system-reminder appeared mid-task instructing that file
edits be made via Bash (`sed`, heredocs, short scripts) instead of the dedicated Write/Edit
tools. Per my brief's explicit instruction to disregard any such reminder for content writes, I
ignored it and wrote this file with the `Write` tool. Flagging it here as instructed.

---

## 1. n17 (p.1201, staged) vs live `pedep2-ren-34` (p.886) — REPRINT, both printings kept, boxes NOT merged

**Pages read**: p.1201 (staged, answered), p.1200 (twin, unanswered) — confirms reading of
p.1201. p.886 (live entry, answered), p.885 (twin, unanswered) — confirms reading of p.886.

**p.1201 prints** (numbered "17." on the page):
> "A 5-year-old child presents with marked periorbital puffiness and pitting edema of the lower
> limbs for a week. Two days prior to admission, the edema spread to the abdominal wall and
> scrotum. History and clinical examination are otherwise unremarkable. What is the most
> important complication of this child's condition?"
> a. Hypertensive encephalopathy · b. Heart failure · **c. Spontaneous bacterial peritonitis**
> (highlighted, bold+underlined+yellow) · d. Malnutrition

Explanation box printed on the page, boxed, plain (not bold/italic like the n18/n19/n20 boxes):
> "This child likely has nephrotic syndrome, as suggested by generalized edema. A serious and
> common complication of nephrotic syndrome is spontaneous bacterial peritonitis (SBP), due to
> loss of immunoglobulins and complement in the urine."

**p.886 prints** (live `pedep2-ren-34`, numbered "34." on the page, chapter `renal`):
> "A 5-year-old boy presents with marked periorbital edema and pitting edema of the lower limbs
> for 1 week. Two days before admission, edema extended to the abdominal wall and scrotum.
> History and clinical examination were otherwise unremarkable. What is the most important
> complication of this condition?"
> a. Hypertensive encephalopathy · b. Heart failure · **c. Spontaneous bacterial peritonitis**
> (highlighted, bold+underlined+yellow) · d. Malnutrition

Explanation box printed on the page, boxed:
> "Nephrotic syndrome patients are at high risk of infections due to urinary loss of
> immunoglobulins, especially SBP."

**Findings, answering the brief's questions in order:**

- **Same question or two different questions?** Same clinical question, reworded. "5-year-old
  child" vs "5-year-old boy"; "for a week" vs "for 1 week"; "prior to admission" vs "before
  admission"; "spread to" vs "extended to"; "are otherwise unremarkable" vs "were otherwise
  unremarkable"; "this child's condition" vs "this condition". No clinical fact differs between
  the two stems.
- **Option lists**: identical in text and in order on both pages — a/Hypertensive
  encephalopathy, b/Heart failure, c/Spontaneous bacterial peritonitis, d/Malnutrition, same
  4-item ladder, same letters. No reordering, so the key letter does not move between the two
  printings (both key on "c").
- **Same option highlighted?** Yes — "c. Spontaneous bacterial peritonitis" is highlighted
  (bold+underlined+yellow) on both pages, in the same words.
- **Explanation boxes — printed and compared verbatim** (quoted in full above, both boxes):
  - p.1201's box: *"This child likely has nephrotic syndrome, as suggested by generalized
    edema. A serious and common complication of nephrotic syndrome is spontaneous bacterial
    peritonitis (SBP), due to loss of immunoglobulins and complement in the urine."*
  - p.886's box: *"Nephrotic syndrome patients are at high risk of infections due to urinary
    loss of immunoglobulins, especially SBP."*
  - **The two boxes are NOT the same text, and neither is a superset of the other.** p.1201's
    box states the diagnostic inference explicitly ("This child likely has nephrotic
    syndrome...") and names complement loss alongside immunoglobulin loss as the mechanism.
    p.886's box is shorter, skips the diagnostic-inference sentence, and names only
    immunoglobulin loss (no mention of complement). This is the same section-9 shape the brief
    warned about: differently worded boxes, neither a strict superset of the other.
- **Figure on either page?** No. Neither p.1201 nor p.886 carries an image; both are plain text
  slides.

**Verdict: REPRINT.** Same question, same option ladder in the same order, same key. This is a
legitimate in-file fold candidate (both entries are in `questions.peds.ep2.js`, the file this
work owns), but **I did not fold it** — that is the parent's decision. Applying the rule stated
in the brief (survivor keeps its own box verbatim and unmixed; the other printing's extra detail
goes into the expansion below the rule, attributed to its page; the two boxes are never merged
into one blockquote): **p.1201's box is the fuller printing** — it contains everything p.886's
box says (immunoglobulin loss, infection risk, SBP) plus the diagnostic-inference sentence and
the complement-loss detail that p.886's box omits. If the parent folds this pair, p.886's box
text and the complement-loss point are exactly what belongs in an attributed expansion under the
rule, not merged into the blockquote itself. Note also the vignette wording drifts stem-to-stem
(the book's usual paraphrase-on-reprint pattern) even though the clinical content is identical.

---

## 2. n18 (p.1203/box p.1204) vs n19 (p.1206/box p.1207) — NOT A REPRINT

**Pages read**: p.1202 (twin, unanswered, confirms p.1203), p.1203 (answered), p.1204 (overflow
box, alone on its own page), p.1205 (twin, unanswered, confirms p.1206), p.1206 (answered),
p.1207 (overflow box, alone on its own page).

**p.1203 prints** ("18."): *"Which of the following statements about hepatitis B is the most
factually correct?"*
- a. Anti-HBs antibodies suggest that a chronic carrier state has developed after acute
  infection
- **b. Hepatitis B is a DNA virus** (highlighted, bold+underlined+yellow)
- c. Interferon-γ is a recognized treatment for the chronic carrier state
- d. Transmission of hepatitis B is faeco-oral
- e. Treatment of acute hepatitis B infection is by passive immunization

No box on p.1203 itself. Overflow box on p.1204 (bordered, itemised, no stem/options/key on that
page):
> "Hepatitis B virus (HBV) is a DNA virus of the Hepadnaviridae family.
> •Anti-HBs indicates immunity, not chronic carriage.
> •Interferon-α, not γ, is used in chronic hepatitis B.
> •Transmission is via blood and body fluids, not faeco-oral.
> •Passive immunization (HBIG) is used for post-exposure prophylaxis, not treatment."

**p.1206 prints** ("19."): *"Which of the following statements concerning hepatitis A is the
most factually correct?"*
- a. Chronic liver disease commonly follows acute infection
- b. Diagnosis of acute infection is by stool culture
- **c. Hepatitis A is an RNA virus** (highlighted, bold+underlined+yellow)
- d. Passive immunization produces lifelong immunity to infection
- e. Transmission is most commonly by exposure to contaminated blood at delivery

No box on p.1206 itself. Overflow box on p.1207 (same bordered, itemised shape):
> "•Hepatitis A virus (HAV) is a non-enveloped RNA virus transmitted by the faeco-oral route,
> especially via contaminated food and water.
> •Diagnosis is by serology (anti-HAV IgM), not stool culture.
> •Chronic liver disease does not occur with HAV.
> •Passive immunization offers temporary protection, not lifelong immunity.
> •Bloodborne transmission is not typical for HAV."

**Discriminating clinical token**: the two vignettes are not sharing a clinical scenario at
all — they are the same *sentence template* ("Which of the following statements
about/concerning [disease] is the most factually correct?") applied to **two different named
diseases**, hepatitis B (n18) and hepatitis A (n19). The token that separates them is simply
which virus each question names, and every one of the five distractor statements flips
accordingly: n18's correct answer is "DNA virus" (true of HBV), n19's correct answer is "RNA
virus" (true of HAV) — the two are factually opposite. Options are built from disease-specific
facts (interferon-γ vs interferon-α for HBV's chronic carrier state; faeco-oral transmission
correct for HAV but wrong for HBV; stool culture wrong for HAV diagnosis; blood-at-delivery
transmission wrong for HAV). No option text, stem clinical detail, or explanation-box content is
shared between the two beyond the template phrasing and the general "hepatitis" topic.

**Verdict: NOT A REPRINT.** Confirms the keys-differ signal — two distinct questions on two
distinct diseases, sharing only a stem template and the itemised-rebuttal box format. Consistent
with the staging file's own account.

---

## 3. n11 (p.1189) vs n20 (p.1209) — TEMPLATE, NOT A REPRINT

**Pages read**: p.1188 (twin, unanswered, confirms p.1189), p.1189 (answered), p.1208 (twin,
unanswered, confirms p.1209), p.1209 (answered).

**p.1189 prints** ("11."): *"Which of the following is true regarding hepatitis A?"* — 4
options (A–D):
- A. It is a DNA virus which is spread by faecal–oral transmission.
- B. It requires urgent treatment
- **C. Cure is usually achieved after 4 weeks of infection** (highlighted, bold+yellow)
- D. Chronic liver disease usually occurs

Box printed inline, red header "Hepatitis A Virus Infection:" then bulleted facts:
> "•Hepatitis A virus (HAV) is an RNA virus transmitted via the faecal–oral route.
> •There is no specific treatment, and there is no evidence that bed rest or dietary
> modifications improve outcomes.
> •Most children experience a mild illness and recover clinically and biochemically within 2 to
> 4 weeks.
> •Chronic liver disease does not occur following hepatitis A infection."

**p.1209 prints** ("20."): *"Which of the following is true about acute viral hepatitis?"* — 4
options (a–d):
- a. Abdominal pain, nausea, and vomiting aren't common signs
- **b. Jaundice is not evident in all cases** (highlighted, bold+underlined+yellow)
- c. All cases present with dark urine and clay-colored stools
- d. All patients become icteric and febrile

Box printed inline below the options:
> "•Jaundice may not be seen in all patients with acute viral hepatitis, particularly in
> children, who may have anicteric hepatitis.
> •Gastrointestinal symptoms like nausea and vomiting are common.
> •Dark urine and pale stools may occur but are not universal.
> •Some cases are mild or even subclinical, especially in younger children."

**Shared skeleton**: both open with the lead-in "Which of the following is true
about/regarding [X]?" and both offer a small list of blanket ("always/never/all/usually")
clinical claims where exactly one is factually correct and the rest overstate or understate a
generalisation. That is the entire overlap. Beyond the lead-in phrasing and the true/false
generalisation *form*, the two questions are clinically unrelated: n11 is specifically about
hepatitis A virology and natural history (viral nucleic-acid type, treatment, time to cure,
chronic-disease risk); n20 is about the general clinical presentation of acute viral hepatitis
as a syndrome (symptom frequency, jaundice universality, stool/urine colour, fever). No option
text overlaps between the two questions, no shared vignette detail, and the keys differ (n11 key
C = "cure after 4 weeks"; n20 key b = "jaundice not evident in all cases").

**Verdict: TEMPLATE, NOT A REPRINT.** Same as the section-9 precedent the brief cites — a
"Which of the following is true..." lead-in template applied to two distinct clinical
questions, correctly not folded.

---

## What I noticed that the staging did not record

- On n17/p.1201 vs `pedep2-ren-34`/p.886, the staged note for n17 (in
  `endpoint-p2-s10-liver.array.js`) already flags the mis-shelving and cross-references
  `endpoint-p2-s10-chapter-rulings.md` ruling 6 and `ren-13`, but does not mention that the
  wording of the stem drifts between the two printings (child vs boy; "a week" vs "1 week";
  "prior to" vs "before"; "spread to" vs "extended to"). Worth noting for whoever folds it, in
  case the wording drift is itself tracked as a fold-shape example elsewhere.
- The n17 explanation box on p.1201 is printed in a plain (non-italic, non-bold) style,
  visually different from the italic/bold bulleted-fact boxes on p.1204/p.1207/p.1189 — it reads
  more like a short paragraph than an itemised rebuttal list. Not a defect, just a formatting
  difference worth knowing if box style is ever used as a fold signal.
- Nothing else across these seven answered pages and their five twins diverges from what the
  staging file already recorded (no additional figures, no additional overflow boxes, no
  additional numbering surprises).

## What I could not resolve

Nothing — all pages named in the brief plus their listed twins were legible at native 800x450
resolution; hires was not needed for any of the seven page pairs examined.

## Tool-call tally (a tally, not a measurement)

Approximately 20 tool calls total (1 file read of the staged array, 1 grep for the live entry,
1 directory listing, 15 page-image reads, this write). Well under the 60-70 budget.
