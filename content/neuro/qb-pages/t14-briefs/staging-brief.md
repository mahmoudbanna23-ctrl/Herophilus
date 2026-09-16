Topic 14 "Back & Lower Limb Pain" — staging transcription brief

GOAL: transcribe verbatim, from the attached page images, every question and its printed
answer key for topic 14 "Back & Lower Limb Pain" into a new file:

  content/neuro/qb-pages/gg-nr-t14.array.js

SCOPE: Grade Gain "neuropsychiatry & neurosurgery qb.pdf". Book pp.61-64 = PDF 066-069
(neuropsychiatry offset: PDF page = book page + 5, confirmed across this whole bank — do not
recompute it). Contents-page promised count: 23 questions. CONFIRMED THIS SESSION by a direct
page read: the section runs Q316-338 exactly, 23 questions — matches the promise exactly, but
still COUNT WHAT IS ACTUALLY PRINTED rather than trusting this brief; say so if the pages
disagree. This is the LAST topic of the neurology run — book p.65 (topic 15 "Symptomatology &
Myths", psychiatry section, already live in the app) starts immediately after and is confirmed
clean, no overlap.

⚠️ KNOWN PRINTING DEFECT IN THIS BOOK: the running header at the top corner of each page LAGS
the true section by about one page and CANNOT be used to identify section boundaries or topic
identity. The only reliable section markers are (a) the BOXED section-title banner that appears
once at the true start of a section, and (b) the actual clinical content of the question stems.
Topic 14's boxed banner reads "Back and Lower limb pain / Questions" on PDF 066 (printed p.61).
Its answer key has its own boxed banner, "Back and Lower limb pain / Answers", on PDF 069
(printed p.64) — this page is ANSWERS ONLY, no question tail.

Attached images: pg-066.png through pg-069.png (PDF pages, 4 total).
- pg-066 (printed p.61): boxed "Back and Lower limb pain / Questions" banner, Q316-322.
- pg-067 (printed p.62): Q323-330.
- pg-068 (printed p.63): Q331-338 (end of questions).
- pg-069 (printed p.64): boxed "Back and Lower limb pain / Answers" banner, answers 316-338, all
  of them.
If any of these pages actually holds content outside Q316-338, or the boxed "Symptomatology &
Myths / Questions" banner (confirmed to start at Q1 on PDF 070, printed p.65, NOT included here
— that is psychiatry topic 15, already live in the app, do not touch it) appears earlier than
expected, stop and flag it rather than transcribing past the boundary.

OUTPUT FORMAT — mirror content/neuro/qb-pages/gg-nr-t13.array.js byte-for-byte in structure:
- A leading /* ... */ header comment: bank name, section/topic line, book/PDF page range for
  questions and for answers, the offset math, banner text confirmation, the running-header-lag
  caveat above, and anything else worth flagging (same style as t12/t13's header).
- `var GG_NR_T14_STAGED = [` then one object per question, blank line between entries, ending `];`.
- Each entry: `{ n:<int>, p:<book page int>, key:'<letter>', keyName:<string or null>,\n  stem:'<verbatim stem>',\n  opts:['<verbatim option>', ...],\n  box:<null, or the verbatim printed explanation box as a string if one is printed> },`
  (note: no trailing comma after the LAST entry's closing `}`, matching t12/t13).
- `n` continues the running numbering from topic 13's last id (npqb-nr-315), so topic 14 starts
  at n:316.
- `key` is the letter the bank actually prints for that question, taken from the answer page —
  never inferred, never guessed. If a key is ambiguous, illegible, or missing on the page, set
  key to null and say so in the header comment, naming the question number.
- `keyName` is the option's own printed name/text if the answer page prints it next to the
  letter (rare); otherwise null. Do not fabricate one.
- `box` is a VERBATIM printed explanation, exactly as printed, if the bank prints one under
  the answer; otherwise null. Never paraphrase a printed box into your own words here — this
  stage only captures what is printed, it does not write new explanations.
- Options print in whatever order the page shows them; do not reorder.
- Every string is single-quoted, matching t12/t13. Escape internal single quotes as \'.
- No blank/placeholder entries. If a question is genuinely illegible even at this resolution,
  say so in the header comment by number rather than inventing content.
- This topic's own title ("Back & Lower Limb Pain" / "back pain / low back pain / sciatica /
  disc prolapse") should appear in the clinical content of the stems — if a page's content looks
  unrelated (e.g. still CNS infections, or already psychiatry), stop and flag it as a boundary
  mismatch rather than transcribing it.

RULES:
- This is a TRANSCRIPTION stage only. Do not write clinical explanations of your own, do not
  correct anything the bank prints, do not skip anything because it looks like an error — GG
  house rule is a defective key is recorded, never disputed; note it in the header instead.
- Cite nothing from outside knowledge here — that only happens in a later drafting stage.
- Do not touch, rename, or delete any other file in this repo. Write ONLY
  content/neuro/qb-pages/gg-nr-t14.array.js.
- If a command fails, say FAILED and quote the error. Do not report success without having
  actually written and verified the output file exists and is non-empty.
- When done, print: the final entry count, the n range you produced, and a one-line summary of
  anything you flagged (illegible key, page overrun, mixed page, etc.) or "nothing flagged".
