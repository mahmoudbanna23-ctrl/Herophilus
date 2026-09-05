# Section 7 — drafting notes

Handed identically to all four drafting halves of peds endpoint part 2 section 7. Read this
**and** `endpoint-p2-s07-chapter-rulings.md` before writing an entry. Staging is
`endpoint-p2-s07-renal.array.js` (55 entries, n:1-55, pp.820-928).

## What is live: 51 of 55

Four staged entries are folded away and **must not be drafted**: **n:30, n:47, n:49, n:51.** The
splicer and the validator both carry `folded: [30, 47, 49, 51]`; an entry written for one of them
fails the gate.

## The four folds — the kept entry carries the citation

pp.876-928 systematically re-run the pp.820-874 material, so this section had eight near-duplicate
pairs. Four fold. The kept entry's `source` names both printings:

| kept | folded away | `source` |
|---|---|---|
| **n:1** (p.820) | n:30 (p.878) | `Pediatrics endpoint part2.pdf p.820 (reprinted at p.878)` |
| **n:31** (p.880) | n:51 (p.920) | `Pediatrics endpoint part2.pdf p.880 (reprinted at p.920)` |
| **n:36** (p.890) | n:49 (p.916) | `Pediatrics endpoint part2.pdf p.890 (reprinted at p.916)` |
| **n:39** (p.896) | n:47 (p.912) | `Pediatrics endpoint part2.pdf p.896 (reprinted at p.912)` |

Two of these need a sentence inside `explanation`, because a reader comparing the two printings
would otherwise think something was lost:

- **n:1** — the second printing **reorders the same five options**, which moves the key from index 2
  to index 3, renames the child from Emily to Iman, and adds "limping" to her symptoms. The kept
  stem stays byte-identical to its own printing; the reorder and the added symptom are recorded in
  the explanation, never merged into the stem.
- **n:36** — the second printing prints no explanation box at all, and spells the options slightly
  differently (`E coli`, `Faecalis` against `E.coli`, `S.Faecalis`). The kept box is n:36's.

n:31 and n:39 fold on options that differ by a hyphen and by abbreviation respectively, with the
key unmoved and the boxes saying the same thing; they need no extra note.

## ⚠️ Four pairs that are NOT folded — cross-reference them, never merge them

Each of these looks like a duplicate to a naive matcher and is not one. Where you draft one member,
**name the other in `explanation`** so the reader sees the contrast on purpose:

| pair | why they differ |
|---|---|
| **n:41 / n:54** | Both ask for a complication of minimal change nephrotic syndrome. n:41 asks the **most common** → repeated infections (urinary immunoglobulin loss). n:54 asks **a major** one → thrombosis (urinary antithrombin III loss). Both keys are correct; the adjective is the whole question. |
| **n:29 / n:50** | Mirror images. n:29 is *glomerular* causes of haematuria EXCEPT → renal stones. n:50 is *non-glomerular* causes EXCEPT → HSP. n:50's box prints the fuller two-column list; n:29's may cite it. |
| **n:11 / n:43** | One vignette (Harriet, false-negative nitrite), **two different option sets**. n:11 offers 5 and makes you exclude glomerulonephritis; n:43 offers 4, drops balanitis and glomerulonephritis, and adds "Normal result". Same answer, different discrimination. |
| **n:13 / n:35** | Same shape (George, red cell casts with a sterile culture → glomerulonephritis). n:13 offers 5 including balanitis and perineal contamination; n:35 offers 4 including kidney stones. |

**The line that decided all eight:** fold when the option set is the same question; pair when the
option set changes what is being discriminated. A reorder folds. A dropped filler folds. A dropped
**distractor** does not.

## Shared option ladders — pair, never fold

- **n:16, n:17, n:18** share one investigation ladder (DMSA · urinary electrolytes · urine
  microscopy and culture · ultrasound KUB · plasma creatinine and electrolytes). The discriminating
  tokens, measured off the pages: renal colic with haematuria → ultrasound; UTI symptoms →
  microscopy and culture; antenatal hydronephrosis with neonatal retention → ultrasound; dysplastic
  kidneys with hypertension and poor growth (CKD) → creatinine and electrolytes. Name the token in
  each explanation — a shared menu pairs questions, it never folds them.
- **n:2 / n:28** share a diagnosis ladder; **n:13 / n:14** share theirs.

## Printed defects — recorded, never corrected

- **⚠️ A unit defect, and it is systematic.** n:11, n:12, n:13 and n:14 (pp.840, 842, 844, 846)
  print a white-cell **concentration** as `/mm²`, an area unit, where `/mm³` is meant. n:10 (p.838)
  prints `/mm³` correctly, so the book switches mid-run. Every one was crop-checked at 300 dpi and
  the superscript 2 is a genuine typeset character, not a render artefact. **Transcribe `mm^2`
  exactly as printed in all four stems**, and give the point **one shared sentence** in n:11's
  explanation that the other three point back to — not four separate corrections. Numbers and units
  are the one class of source defect that is reported rather than silently transcribed.
- **n:29's explanation box starts mid-word** — "enal stones cause hematuria but are not a glomerular
  cause", missing its initial R. Read directly off the page at 300 dpi, not an OCR artefact.
  **Quote the box verbatim including the missing letter**, and note it in one clause.
- **n:11's stem gives a WBC count in `/mm^2`** and is also the entry that carries the shared unit
  note above.
- **n:12 (p.842) genuinely prints only four options.** Confirmed on the answered page and its twin —
  same layout, empty space below D. Not a truncation.
- **n:37** prints `m2` flat in its options and a true `m²` superscript in its explanation box.
  Transcribe each field as its own printing shows it; do not "restore" the exponent in the options.
- **pp.872 and 874 print lowercase `a.`-`e.` option labels** where the rest of the section prints
  uppercase. Cosmetic, transcribed silently, mentioned here only so nobody reports it as a fault.

## Structure

- **n:49 is a genuine boxless page** (p.916, key highlighted, no explanation printed) — and it is
  also folded away, so this only matters if you are reading the staging.
- **No overflow boxes anywhere in the section**; every explanation printed on its own answered page.
- **One figure: n:6** (p.830), a colour clinical photograph of a child's face with facial swelling.
  `imgAlt` names modality and view only and must not name the diagnosis.
- **The printed number runs one behind `n` from n:43 on**, because the book prints "42." twice —
  once on p.902 (n:42, Fady/HUS) and again on p.903-904 (n:43, Harriet/UTI). Two agents measured
  this independently from opposite sides of the seam. `source` cites the PDF page, so this changes
  nothing in the output; it is recorded so nobody "fixes" it later.

## Reminders that apply here specifically

- `answer` is always the bank's printed key, as a 0-based index into `options`.
- `stem` and `options` stay **byte-identical to the staging**, typos included.
- A boxed explanation opens with the lead line, blockquotes the box verbatim, rules off, expands,
  and closes with the curly-apostrophe marker as the final line. An unboxed one has no blockquote
  and closes with the part2 marker instead. The marker never lives in `source`.
- A gap in the material is **answered and tagged** `not taken from the course material`, never
  declared.
