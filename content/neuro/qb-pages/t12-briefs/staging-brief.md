Topic 12 "Neuromuscular Disorders" — staging transcription brief

GOAL: transcribe verbatim, from the attached page images, every question and its printed
answer key for topic 12 "Neuromuscular Disorders" into a new file:

  content/neuro/qb-pages/gg-nr-t12.array.js

SCOPE: Grade Gain "neuropsychiatry & neurosurgery qb.pdf". Book pp.50-56 = PDF 055-061
(neuropsychiatry offset: PDF page = book page + 5, confirmed across this whole bank — do not
recompute it). Contents-page promised count: 45 questions. CONFIRMED THIS SESSION by a direct
two-independent-read page check: the section runs Q251-295 exactly, 45 questions — this is one
of the rare topics where the contents page is exactly right, but still COUNT WHAT IS ACTUALLY
PRINTED rather than trusting this brief; say so if the pages disagree.

⚠️ KNOWN PRINTING DEFECT IN THIS BOOK, CONFIRMED THIS SESSION: the running header at the top
corner of each page LAGS the true section by about one page and CANNOT be used to identify
section boundaries or topic identity. On these very pages, printed pp.50-54 (PDF 055-059) show
the running header alternating between "CNS Infections" and "Neuromuscular Disorders" with no
relationship to the actual content — ignore it completely. The only reliable section markers
are (a) the BOXED section-title banner that appears once at the true start of a section, and
(b) the actual clinical content of the question stems. Topic 12's boxed banner reads
"Neuromuscular Disorders / Questions" on PDF 055 (printed p.50), first question Q251
("Management of choice in Guillain-Barre syndrome is..."). Its answer key has its own boxed
banner, "Neuromuscular Disorders — Answers", appearing partway down PDF 060 (printed p.55)
after the last question (Q295) on that same page.

Attached images: pg-055.png through pg-061.png (PDF pages, 7 total).
- pg-055 (printed p.50): boxed "Neuromuscular Disorders / Questions" banner, Q251-257.
- pg-056 (printed p.51): Q258-264.
- pg-057 (printed p.52): Q265-274.
- pg-058 (printed p.53): Q275-284.
- pg-059 (printed p.54): Q285-292.
- pg-060 (printed p.55): Q293-295 (end of questions), then boxed "Neuromuscular Disorders —
  Answers" banner, answers 251-258 shown. THIS PAGE MIXES QUESTION-TAIL AND ANSWER-HEAD — say
  so in the header comment, matching how prior topics have flagged the same pattern.
- pg-061 (printed p.56): continuation of the answer key, answers 259-295.
If any of these pages actually holds content outside Q251-295, or the boxed "CNS Infections —
Questions" banner (confirmed to start at Q296 on PDF 062, NOT included here) appears earlier
than expected, stop and flag it rather than transcribing past the boundary.

OUTPUT FORMAT — mirror content/neuro/qb-pages/gg-nr-t11.array.js byte-for-byte in structure:
- A leading /* ... */ header comment: bank name, section/topic line, book/PDF page range for
  questions and for answers, the offset math, banner text confirmation, the running-header-lag
  caveat above, the mixed page (pg-060), and anything else worth flagging (the same style as
  t10/t11's header).
- `var GG_NR_T12_STAGED = [` then one object per question, blank line between entries, ending `];`.
- Each entry: `{ n:<int>, p:<book page int>, key:'<letter>', keyName:<string or null>,\n  stem:'<verbatim stem>',\n  opts:['<verbatim option>', ...],\n  box:<null, or the verbatim printed explanation box as a string if one is printed> },`
  (note: no trailing comma after the LAST entry's closing `}`, matching t10/t11).
- `n` continues the running numbering from topic 11's last id (npqb-nr-250), so topic 12 starts
  at n:251.
- `key` is the letter the bank actually prints for that question, taken from the answer page —
  never inferred, never guessed. If a key is ambiguous, illegible, or missing on the page, set
  key to null and say so in the header comment, naming the question number.
- `keyName` is the option's own printed name/text if the answer page prints it next to the
  letter (rare); otherwise null. Do not fabricate one.
- `box` is a VERBATIM printed explanation, exactly as printed, if the bank prints one under
  the answer; otherwise null. Never paraphrase a printed box into your own words here — this
  stage only captures what is printed, it does not write new explanations.
- Options print in whatever order the page shows them; do not reorder.
- Every string is single-quoted, matching t10/t11. Escape internal single quotes as \'.
- No blank/placeholder entries. If a question is genuinely illegible even at this resolution,
  say so in the header comment by number rather than inventing content.

RULES:
- This is a TRANSCRIPTION stage only. Do not write clinical explanations of your own, do not
  correct anything the bank prints, do not skip anything because it looks like an error — GG
  house rule is a defective key is recorded, never disputed; note it in the header instead.
- Cite nothing from outside knowledge here — that only happens in a later drafting stage.
- Do not touch, rename, or delete any other file in this repo. Write ONLY
  content/neuro/qb-pages/gg-nr-t12.array.js.
- If a command fails, say FAILED and quote the error. Do not report success without having
  actually written and verified the output file exists and is non-empty.
- When done, print: the final entry count, the n range you produced, and a one-line summary of
  anything you flagged (illegible key, page overrun, mixed page, etc.) or "nothing flagged".
