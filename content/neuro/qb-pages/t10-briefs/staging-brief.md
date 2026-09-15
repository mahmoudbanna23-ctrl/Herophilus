Topic 10 "Movement Disorders" — staging transcription brief

GOAL: transcribe verbatim, from the attached page images, every question and its printed
answer key for topic 10 "Movement Disorders" into a new file:

  content/neuro/qb-pages/gg-nr-t10.array.js

SCOPE: Grade Gain "neuropsychiatry & neurosurgery qb.pdf". Book pp.41-45 = PDF 046-050
(neuropsychiatry offset: PDF page = book page + 5, confirmed across this whole bank — do not
recompute it). Promised count from the book's own contents page: 23 questions. A prior topic's
contents-page count has been wrong (always undercounting) on 8 of the last topics measured, so
COUNT WHAT IS ACTUALLY PRINTED, do not force it to 23 if the pages show a different number.

Attached images: pg-046.png through pg-051.png. pg-051.png is one page PAST the expected end —
render it too and confirm it holds nothing from this topic (either the next topic's banner, or
blank/other content). If pg-051 DOES carry topic 10 content, include it and say so plainly.

OUTPUT FORMAT — mirror content/neuro/qb-pages/gg-nr-t08.array.js byte-for-byte in structure:
- A leading /* ... */ header comment: bank name, section/topic line, book/PDF page range for
  questions and for answers, the offset math, banner text confirmation, any page that mixes
  question-tail and answer-head, and anything else worth flagging (the same style as t08's header).
- `var GG_NR_T10_STAGED = [` then one object per question, blank line between entries, ending `];`.
- Each entry: `{ n:<int>, p:<book page int>, key:'<letter>', keyName:<string or null>,\n  stem:'<verbatim stem>',\n  opts:['<verbatim option>', ...],\n  box:<null, or the verbatim printed explanation box as a string if one is printed> },`
  (note: no trailing comma after the LAST entry's closing `}`, matching t08).
- `n` continues the running numbering from topic 09's last id (npqb-nr-198), so topic 10 starts
  at n:199.
- `key` is the letter the bank actually prints for that question, taken from the answer page —
  never inferred, never guessed. If a key is ambiguous, illegible, or missing on the page, set
  key to null and say so in the header comment, naming the question number.
- `keyName` is the option's own printed name/text if the answer page prints it next to the
  letter (rare); otherwise null. Do not fabricate one.
- `box` is a VERBATIM printed explanation, exactly as printed, if the bank prints one under
  the answer; otherwise null. Never paraphrase a printed box into your own words here — this
  stage only captures what is printed, it does not write new explanations.
- Options print in whatever order the page shows them; do not reorder.
- Every string is single-quoted, matching t08. Escape internal single quotes as \'.
- No blank/placeholder entries. If a question is genuinely illegible even at this resolution,
  say so in the header comment by number rather than inventing content.

RULES:
- This is a TRANSCRIPTION stage only. Do not write clinical explanations of your own, do not
  correct anything the bank prints, do not skip anything because it looks like an error — GG
  house rule is a defective key is recorded, never disputed; note it in the header instead.
- Cite nothing from outside knowledge here — that only happens in a later drafting stage.
- Do not touch, rename, or delete any other file in this repo. Write ONLY
  content/neuro/qb-pages/gg-nr-t10.array.js.
- If a command fails, say FAILED and quote the error. Do not report success without having
  actually written and verified the output file exists and is non-empty.
- When done, print: the final entry count, the n range you produced, and a one-line summary of
  anything you flagged (illegible key, page overrun, mixed page, etc.) or "nothing flagged".
