The gate is weaker than the write-up makes it sound. Confidence never did any work in your calibration; the parser caught the only real leak; and the proposed pipeline (Tesseract → LLM on **text only**) was never measured. You measured Tesseract against a previous vision-LLM transcript. Those are not the same system.

---

## 1. The gate is the wrong shape

**Mean word confidence ≥ 88 is almost a no-op.** Portrait/landscape block means were 93.8 and 95.0. You then set the cut at 88 because everything ≥ 85 looked clean. That is a threshold fit on the same 43 items, sitting 6–7 points below the observed mass, where it rejected **zero** content errors. In this sample the confidence half of the gate did not fire. You are proposing a two-part lock in which one part has never been observed to do anything.

Worse, **the mean is the wrong statistic even when it does fire.** A 40-word stem with 39 function words at 96 and one drug name at 70 still averages ~94. A single load-bearing substitution — `hyper`/`hypo`, `not` dropped, `0.5`/`O.5`, `mg`/`mcg`, `prednisone`/`prednisolone`, `α` read as `a` — does not move the mean. You already discarded minConf as noise from stray marks. What you need and do not have is a **token-weighted** score: numbers, negations, units, Greek letters, and out-of-vocabulary tokens (drug names, eponyms) must dominate. Averaging them with `the`/`of`/`a` is how a medical stem fails closed.

**Failure shapes that pass both mean≥88 and a clean a–e parse:**

- **Silent deletion of a short high-stakes word.** `not`, `except`, `never`, `least`, `non-`, `nor`. Tesseract dropping a 3-letter word does not lower the mean of what remains. The block still has a number, a stem, labels a–e, and a key token. The parser is happy. The item is now the opposite question. “All of the following except” is not an edge case in this genre; it **is** the genre.
- **High-confidence glyph substitution on a clinical antonym.** `O`/`0`, `l`/`1`/`I`, `rn`/`m`, `S`/`5`, `B`/`8`, `µ`/`u`/`m`. Tesseract routinely assigns 90+ to the wrong member of those pairs. Structure is intact.
- **Option-column reading order.** Two-column options (`a,b` left, `c,d,e` right) read as `a,c,b,d,e`. Parser finds five labels. Mean conf is excellent. Every option is attached to the wrong letter. That is a complete key-independent corruption and you have not listed it.
- **Shared vignette / “questions 3–5 refer to the passage.”** A strict per-block parser can still emit a well-formed question whose stem is the wrong passage, or whose options belong to the next item. “Malformed → halt” does not catch **well-formed mis-association**.
- **Header/footer/show-through insertion.** Running heads (`NOT FOR SALE`, `DO NOT DISTRIBUTE`), reverse-page bleed, stamped watermarks. Extra `NOT` in a stem is a negation **insertion**. Parser still sees a normal block.
- **Greek, italics, organisms.** `β-blocker` → `B-blocker`/`8-blocker`; `E. coli` colliding with option `e`; `μg` → `mg`. High conf, valid parse.

**Dropped negation, likelihood and a cheap catch.** You will not estimate likelihood from n=43 with zero numeric/negation-rich items. In Tesseract, short-word deletion is a standard error class; in MCQs, negation is a standard discourse class. Treat the intersection as **expected**, not theoretical.

Cheap checks that actually bite, in order of cost:

1. **Forced dual-channel, not optional image.** If the LLM receives fluent OCR, it has no reason to “reach for” the image. Optional vision is not a control. It is a prompt.
2. **Box-density / length check.** Characters per stem-box area (or OCR token count vs box height × width at 300 DPI) flags deletions without understanding English. A missing `not` is small; a missing clause is not. Tune on the 43, then freeze.
3. **Negation lexicon on the stem.** If the stem matches `all of the following` / `which of the following is true` **without** `except`/`not`/`least`/`never`, force visual. Over-triggers some items; that is the point.
4. **Do not let the transcribing LLM “fix” text.** Instruction must be copy-or-escalate, never paraphrase. Your own calibration already found the previous pipeline anglicising spelling and condensing a clause. Text-only makes that worse: an LLM given OCR will polish. Polishing is silent mutation.

A regex for `not`/`except` is incomplete (`non-`, `unless`, `incorrect`, `false`, `least likely`, `all are true EXCEPT` split across a line break). Use it as a tripwire, not a theory of negation.

---

## 2. The calibration is not a validation

It is a **same-day agreement study against your own previous output**, on a convenience slice.

- **You did not score against print.** You aligned OCR to shipped stem+options and inspected diffs. Two diffs were OCR-right / transcript-wrong, which is honest and also the tell: the only time you opened the book, the “ground truth” lost. Every undiffed token was never checked against paper. If the 150 DPI vision LLM and Tesseract **share** a miss — faint `not`, crushed decimal, styled key — calibration records a match.
- **n=43, zero events, contiguous chapters, GT-exists sampling.** Rule of three: a 0/43 observation only bounds a clinically-material OCR error rate at ~7% (95%). That is not a shipping bound for a bank that will teach medicine. Early chapters are the wrong stratum (prose, larger type, no tables, no lab panels). You noted later chapters may differ and then still want to adopt the gate.
- **The sample contained no decimals, no units, no tables, one already-visual figure.** That is not “holes we declare.” That is **the actual risk distribution of a medical MCQ bank, excluded by construction.**
- **You never ran the system you want to ship.** Proposed path: OCR text → transcribing LLM (image optional). Measured path: OCR words ≟ old visual transcript. LLM-from-OCR-text will insert, expand, “correct” eponyms, and normalize units. That error class is unmeasured.
- **“Every block ≥85 had zero true OCR content errors”** is circular if “true error” means “diff vs us,” and underpowered if it means “checked vs print.”
- **Landscape-was-better is not a finding you get to keep.** One 2-up scan of one bank beat one portrait scan. Do not update the prior that 2-up is the safe one. Gutter merge, duplicated question numbers across the spread, and column-order options are still the layout that can parse clean and still be wrong.

Self-selection plus shared-error plus no end-to-end LLM step: this calibration cannot license a text-only fast path.

---

## 3. Keys must not ship from OCR text

The five missing letters are not a parser success story. They are a **typography warning**.

Keys in this product class are a single glyph, often circled, bold, colored, boxed, or a filled bubble. Confidence cannot see absence (you learned that). Confidence also cannot see **a present but wrong glyph**. The rule “marker then exactly one A–E” catches dropouts. It does not catch:

- stylized `B` read as `E`/`8`/`S`/`3` at conf 96
- the first A–E token after `Answer:` being from the explanation (`Answer: see A above`, `Answer: A 45-year-old…` wait — different page type, same pattern)
- the adjacent 2-up question’s key leaking across the gutter
- a circled option letter on the **question** page being eaten as the key
- red/green printed keys that **disappear or collapse in grayscale** (this is a plausible mechanism for your five absences; you rendered grayscale)

Landscape 20/20 exact is n=20 of **inline, unstyled** keys. The failure you already have is in the other profile. Shipping keys from OCR because the parser is now strict is the classic fix of the detection path while leaving the substitution path open.

Key blocks are tiny. Vision on a tight crop is cheap. **Visual-always for keys.** If you refuse that, require two independent reads (OCR letter ∩ vision letter) and still human-spot-check a sample. There is no world where a single Tesseract A–E token should be allowed to teach the answer.

---

## 4. Decimals/units: “any digit → visual” is the right bias

You have **zero** calibration on the class you already named as the thing you fear. So you do not get to be clever.

- `any digit → text-only forbidden` is not too aggressive. It is the accuracy rule applied to the untested set. In later chapters this will throw a large fraction back to visual. Good. The OCR path is an optimization. If it only wins on prose anatomy items, it is still a win.
- Slightly less brutal, still acceptable: **any digit, unit, `%`, `/L`, `^`, `µ`/`mcg`/`IU`, decimal point, or superscript → forced image+text, agreement required, else visual-only.** Not optional image.
- Block-level is the right granularity; per-token visual for the number span is even better if you already have boxes.
- Do not build a unit dictionary and then trust it. `mg/dL` vs `mg/dI` vs `mg/dl` vs `rng/dL` is exactly where dictionaries and OCR both feel sure.

If “any digit → visual” kills the cost case, the cost case was assuming the hard pages would take the cheap path. They should not.

---

## 5. Second OCR engine: not now, and not as a substitute for vision

RapidOCR ∩ Tesseract will agree on the same easy substitutions and the same faint deletions. Dual OCR is correlated. It adds ops cost and a false sense of independence.

Worth introducing **after** a demonstrated leak, or as a cheap disagreement tripwire **in addition to** forced vision on numbers/keys — never instead of it. The cheaper control you already have is the 300 DPI image you rendered to run Tesseract. **Stop throwing it away on the “success” path.**

---

## 6. Medical-bank specifics you under-listed

- **Colored answers and grayscale.** If keys or emphasis are not black, 300 DPI grayscale is an information-destroying transform. Recheck the five missing letters in color. If they are colored, your render choice caused the leak.
- **Fallback is 150 DPI while OCR is 300 DPI.** The “hard” path is the worse image. Incoherent. Fallback must be at least the render you already paid for.
- **Hand annotation on second-hand scans.** Underlines, crossed-out options, extra `√`/`×`, margin `B` written in. Insertions and deletions that still parse.
- **Tables of labs.** Word boxes flatten row/column. Parser may halt (ok) or stuff a row into the stem as prose (not ok). Table-ish aligned boxes should force visual; inversion-for-figures will **miss** tables because they are full of words.
- **Figure detector by wordless region** misses labeled diagrams, ECGs with axis text, structures with atom labels, arrows with `ATP`/`cAMP`. Those are the figures in this domain.
- **Answer-key pages** (`1. A  2. C  3. B`) are a different layout from question pages. You calibrated on questions. Key-index pages are where a single-column OCR slip rewrites a whole chapter.
- **True/false, matching, “more than one correct,” assertion–reason.** Strict a–e parser will either halt (ops pain → people loosen it) or mutilate.
- **Cross-page stems.** Complete-looking page-N block that is actually half a vignette.
- **Italic binomials and option labels** colliding.
- **The LLM-as-copyist problem**, again: text-only transcription is editing. That is a content-standard change smuggled in as a reading-mechanism change.

Production note: “halt loudly” decays. Someone will add a recovery heuristic after the third broken chapter. Design as if the parser will be softened, and put the safety in **what is allowed to ship without an image**, not in the parser remaining priestly.

---

## What would actually make this adoptable

Ranked:

1. **Keys visual-always** (or dual-read with disagreement → visual). Never text-only for the letter that teaches the answer.
2. **No text-only success path.** Gated blocks send OCR **plus** the 300 DPI crop; the LLM must copy or escalate, and must flag image use. Optional image is theater.
3. **Any digit / unit / Greek / superscript → cannot be text-only.** Start with “any digit → visual” until you have a print-checked numeric sample.
4. **Re-calibrate against print, end-to-end, on a frozen holdout** that includes numbers, tables, a figure-heavy chapter, and an answer-key page. Score the **LLM output**, not the Tesseract stream. Pre-register the threshold; stop fitting 88 on the same 43.
5. **Weight the gate on dangerous tokens** (negations, numbers, OOV, single-letter keys), plus a box-density deletion check. Mean of all words is not a medical control.
6. **Fallback at 300 DPI**, color render at least for key crops; grayscale is a hypothesis that already has a body count of five letters.
7. Dual OCR only as an extra tripwire after (1)–(3), not as the next project.

Until 1–4 exist, you are licensing an untested text-only rewriter with a threshold that has never caught a content error.

---

**ADOPT-WITH-CHANGES** — (1) keys visual-always, (2) never text-only: OCR+image on the “success” path with copy-or-escalate, (3) digits/units/Greek cannot take a cheap path until print-checked, (4) end-to-end vs print on a real holdout, (5) dangerous-token + density gate instead of mean≥88, (6) 300 DPI color fallback.

**Single most dangerous failure mode:** a fluent, high-confidence stem with a silent clinical inversion — dropped `not`/`except`, `hyper`/`hypo`, or a numeric/unit glyph — that still parses a–e, sails through mean≥88, is sent to the transcribing LLM **as text**, looks grammatical so the model never opens the image, and ships inverted medicine. Your calibration would call this a match if the old 150 DPI visual read made the same miss.
