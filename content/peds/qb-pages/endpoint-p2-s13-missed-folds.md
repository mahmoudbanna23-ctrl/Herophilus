# Endpoint part 2 — two within-bank duplicates section 13 did not catch

Found on 2026-09-06 while consolidating **section 14's** fold adjudication, not by re-running section
13. Two of section 14's proposed reprint clauses named a **Model Final Exam 2** printing that the
target entry's `source` did not record — and a citation the file does not carry is either a wrong
claim by the agent or a fold that never happened. It was the second.

Both are **within-bank**: `bank:'endpoint'` on either side. Within-bank folds delete an entry; they
never take `alsoIn`. Nothing here touches House.

## The two pairs

| exam entry (deleted) | body entry (kept) | pages | fold shape |
|---|---|---|---|
| `pedep2-mf2-48` | `pedep2-car-43` | p.1528 / p.715 | reordered options, key text unchanged |
| `pedep2-mf2-62` | `pedep2-hem-84` | p.1557 / p.438 | stem and two options respelled, key text unchanged |

### `pedep2-mf2-48` == `pedep2-car-43` — Jones major criteria

Both print the same five options and key the same text, `Maculopapular rash`, which sits at index 3
in both printings despite the reordering — the first three options run *Chorea, Migratory arthritis,
Carditis* on p.1528 and *Carditis, Migratory arthritis, Chorea* on p.715. Both are
`chapter: cardiac-acq`, so the fold loses no chapter assignment.

Section 13 staged this as **n48** and `48` is absent from that section's `reprints` array in
`tools/bank-harness/splice-pd-ep2.js`, so it was drafted as a new entry rather than folded.

### `pedep2-mf2-62` == `pedep2-hem-84` — ITP at 30,000 with no bleeding

Same 4-year-old girl, same platelet count, same five-option ladder, same key text
(`Observation and follow up` / `Observation and follow-up`) at index 3 in both. The p.438 printing is
the fuller stem: it keeps `or mucous membrane purpura` and prints the unit as `30,000/dl`, where
p.1557 gives `30,000/μL` and drops the purpura clause. Both are `chapter: haem-bleeding`.

Section 13 staged this as **n62**, likewise absent from that section's `reprints` array.

## Why the deleted side is the exam side, and what had to be carried across

The convention this whole stream has followed — 29 reprints in section 13, 48 in section 14 — is that
the body-chapter entry survives and the exam printing folds into its `source`. That keeps the id
inside its chapter prefix and keeps every exam page cited, so page coverage still closes.

**But the measurement contradicted the usual justification and had to be honoured.** "Keep the fuller
printing" normally picks the same side; here it does not. Both sides carry a *printed explanation
box*, and in both pairs **the exam page's box is the fuller one**:

- p.1528 prints the minor Jones manifestations as well as the major ones (264 chars against p.715's
  113, which prints the major list alone).
- p.1557 explains why steroids and IVIG are held back (203 chars against p.438's 91).

So a plain deletion would have removed printed source text from the file while every count stayed
right. The fold therefore **quotes both boxes** in the surviving entry, each attributed to its own
page, and the closing marker still refers to the expansion only.

## What was changed

In `app/data/questions.peds.ep2.js`:

1. `pedep2-mf2-48` deleted; `pedep2-car-43` gains the p.1528 citation and the p.1528 box.
2. `pedep2-mf2-62` deleted; `pedep2-hem-84` gains the p.1557 citation and the p.1557 box.

The file drops from **591 to 589** entries. A shrink with a fold commit behind it is expected; a
shrink without one is the finding.

## Consequence for section 14

`pedep2-car-43` is also section 14's **n76** and `pedep2-hem-84` is its **n69**. The section-14
adjudication's proposed clause for n76 ends with a sentence recording the Model Final Exam 2 printing
at p.1528. **That sentence is dropped from the tail the reprint pass writes**, because this fold
already records it — leaving it in would print the same reprint twice in one `source`.

## What this says about the earlier sections

Section 13's sweep found 29 reprints against section 14's 48 on the same 80 pages, and it missed at
least these two. The misses are both **cross-section**, exam page against body-chapter page, which is
the widest comparison the sweep makes and the one where a reworded stem hides best. Neither would
have been caught by any count: both entries are well formed, both cite a real page, and the totals
reconcile either way.

**The closing cross-bank sweep must therefore re-run the within-bank comparison across the whole of
`questions.peds.ep2.js`, not only across the section being closed.** Sections 1–13 were each swept
against the file as it stood at the time, which cannot see a duplicate staged later.
