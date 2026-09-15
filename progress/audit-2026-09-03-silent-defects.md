# Silent-defect audit, 2026-09-03 — result and verdict

Codex ran a read-only audit over all 4,726 shipped questions and returned five ranked findings.
**Every one was re-measured independently before being believed. Three were false.**

## Verified

| # | Codex claimed | Verified | Status |
|---|---|---|---|
| 1 | 37 explanations name a different answer letter than the stored key | **0** | FALSE |
| 2 | 4 clusters / 8 entries: identical stem+options, incompatible keys | **0** (for the pair read) | FALSE |
| 3 | `pedep-neo-` collapsed into `neonatal` — 52 entries, 5 stem-provable | **confirmed** | REAL (was supplied in the brief) |
| 4 | 24 declared chapters hold zero questions | **24, identical list** | REAL |
| 5 | 1 cited lecture `.txt` unreachable on disk | **0 of 791** | FALSE |

## Why the false ones were false

- **#1** matched the English article: `/…answer\s*(?:is|:)?\s*([A-D])/gi` — the `gi` flag lets
  "the answer is **a** chest diagnosis" read as "answer is A". The survivors of a case-sensitive
  re-run were also spurious: a cross-reference to *another* question's key, a combined option
  (key `E` = "A & C", explanation names "C"), and the project's own **documented-divergence**
  convention, where an explanation is *required* to state that the printed key disagrees with the
  material. `opqb-t18-747` says outright: *"The key is C and it is keyed C here."*
- **#2** compares stem text, but image questions share stem text by design. `pedhd-card-6` and
  `pedhd-card-8` are byte-identical in stem and options and correctly carry different answers —
  the stem says *"given the findings shown in the figure"* and the figures are `q-pd-hd-25` and
  `q-pd-hd-26b`.
- **#5** compared a citation's full path against a set of bare filenames. 0 unreachable of 791.

## The finding that outranks the audit

**This corpus is hostile to text-pattern checks**, and not because of who ran them — Claude
independently reproduced both bug classes (the article `a`, and path-vs-basename) while verifying.
Two properties cause it: explanations deliberately discuss keys and divergences, and questions
deliberately share stems while differing only by figure. **Any static check here must be verified
against real records before its count is reported.**

## Verdict on the audit lane

Codex's own acceptance gate was: keep it only if it *"materially raises defects found per owner
review hour."* Measured, it did not — three false alarms, two of them ranked above the real
findings, and #1 asserted with explicit confidence (*"this is not a general prose inference"*).
Verification cost more than the audit returned.

**Kept:** the orphan-chapter check (finding #4) — cheap, exact, and independently reproduced.
**Dropped:** the explanation/key, duplicate-stem and citation-reachability checks as written.

## Open, for the owner

**24 chapters are dead buttons reading "coming soon"** (`app/index.html:4373` renders zero-count
chapters that way, so a misfiled chapter is indistinguishable from an unwritten one).

- **pediatrics (10):** `infection-immunity` `puberty` `resp-pneumonia` `respiratory` `resp-bronch`
  `mental` `endocrine` `endo-dka` `endo-thyroid` `liver-hep`
- **neuropsych (13):** `ps-interview` `ps-osce` `ps-ptsd` `ps-sud` `ps-emerg` `ps-therapy`
  `nr-epilepsy` `nr-nerve` `nr-cns` `nr-coma` `nr-comapproach` `nr-backpain` `nr-neckpain`
- **ophtho (1):** `op-appear`

A loose keyword probe suggests `puberty` is a parent/child pairing rather than a gap (27 puberty
questions sit in `growth-puberty`), and that `endocrine` and `mental` are genuinely thin.
**That probe is suggestive only** — it cannot separate neonatal respiratory distress from
childhood asthma. Only the owner knows which of the 24 are on the 17 September syllabus.
