# Scanned-PDF handling in Herophilus — everything that was tried, fixed, rejected, and left open

**Written 2026-09-03 for an outside debate.** Every number here was measured on the project's own
files and is cited to the file that records it. Where something is unverified, it says so.

The subject is narrow: **how a question bank that exists only as pixels becomes trustworthy text in
an app.** Not the app, not the study content — the reading problem.

---

## 0. The situation before any of this

- **11 bank PDFs, 12,537 pages** (`pdfinfo` count, 2026-08-31), **0 characters of text layer** at
  every sample point. `pdftotext` returns nothing. OCR is genuinely required, not merely convenient.
- Files run **79 MB – 332 MB**. The `Read` tool rejects a PDF over 100 MB outright.
- **A page image read in the main conversation is re-sent with every subsequent request for the
  rest of the session** (~1–2k tokens per page, per request). Verified 2026-08-17: single sessions
  carrying 606 / 305 / 207 page images were the workspace's largest token drain.

So three constraints at once: no text, files too big to open, and the obvious workaround (just look
at the pages) has a cost that compounds per request rather than per page.

---

## 1. THE FIRST FIX WAS NOTICING THERE ARE TWO DIFFERENT PROBLEMS

For weeks the corpus was treated as one thing: "scanned PDFs". It is two, and they fail differently.

| | **Class A — the scanned books** | **Class B — the "endpoint" PDFs** |
|---|---|---|
| What it physically is | Real paper, scanned, **2-up** (two book pages per sheet) | **Not a scan.** Each page carries ONE native **800×450 RGB JPEG at 96 ppi** — 16:9 slide captures |
| How it was established | Reading printed folios off rendered halves | `pymupdf` XObject inspection: sampled pp.3/100/101/400/900/1500/2100/2438 in ophtho; a 60-page census at pp.600–659 returned **60/60 identical**; **1,991/1,991 pages** on `Pediatrics endpoint part1.pdf` (2026-09-02) |
| Failure modes | Duplex show-through, skewed folios, thin paper, clipped digits | Line-drops in OCR, duplicated option lines, arrows → CJK glyphs |
| Cheapest route | Render at 300 dpi, crop numerals at 600 dpi | **Copy the embedded JPEG straight out — never rasterise.** 1,991 pages in ~26 s |

**Consequence.** Class B never needed a rasteriser at all. `tools\ep-index\extract.py` parses each
page's content stream for `/Name Do` to learn which image that page actually draws (the XObject
names are shared across the whole file, so the resource dictionary is useless), and copies the JPEG
byte-for-byte. That single realisation turned "1,991 pages, hours of rendering" into **74 seconds
end to end**.

Source: `tools\ep-index\README.md`, `tools\ep-index\extract.py` docstring, `progress\ocr-pipeline.md`
(SETTLED banner, 2026-09-01).

---

## 2. THE OCR TRUST BOUNDARY — the rule and the five failures behind it

**The rule, stated in every brief: OCR is a search index, never a clinical source.**
`content\peds\qb-pages\ocr\` may be used to *locate* something, never to *transcribe* it. Staging
agents are told not to open it during a pass and to state in their header that they did not.

The rule is not caution for its own sake. Five measured failure classes:

1. **Superscripts fail silently.** WPS read a printed **10⁶ as 10⁹** on this project; exponents also
   flatten (10⁶ → 106). That is a plausible wrong number, not visible garbage — nothing downstream
   can see it. *(`pd-staging-brief.md` §4.)*
2. **A whole option line gets duplicated.** Seen on **3 of 9** sampled ophtho pages: p.100 repeated
   option B, p.400 repeated option B, p.2100 repeated option D with the page number fused to the
   first copy. Position varies. A silent duplicate turns a 4-option question into a 5-option one
   with a repeated distractor. ⚠️ **Still unresolved whether this is an OCR artifact or a printed
   defect** — it needs a visual check before any endpoint question ships.
3. **Arrows become CJK characters.** p.2438 printed an up-arrow; OCR returned `glaucoma(个 IOP)`.
   Same class as the superscript failure: a plausible-looking wrong character.
4. **The engine silently drops whole lines — a *different* line at each resolution.** p.38's native
   read lost the highlighted key line B; p.145's 150 dpi read lost its key.
5. ⚠️ **The engine REORDERS options and deletes spaces.** On one set of House sheets WPS emitted
   Q9's options as **A, C, B, D, E**; Q12 with **B before A**; Q7 and Q26 with the **whole option
   block printed above the stem**; and rendered `Digitally- measured IOP was` as
   `Digitally-measuredIOPwas`. **Anyone splicing from OCR without looking at the page gets option
   order and spacing wrong** — and option order is not cosmetic when the key is a letter.
6. Minor and self-announcing: lost inter-word spaces, letter-spacing artifacts, a spurious inserted
   letter.

**The fix for (4) is the interesting one: run OCR twice at two resolutions and keep both reads.**
`index.py` writes `pNNNN.txt` as the native read, a `--- 150dpi ---` separator, then the 150 dpi
read. On 7 ground-truth pages checked against the staging record, **the union of the two reads
recovered every option and every stem**; word recall was 87–100 % native, 95–100 % at 150 dpi, and
stems came back **character-exact on all 7 pages, printed typos included**. Neither pass alone was
sufficient. *(`tools\ep-index\README.md`.)*

**What follows from (1) and (3):** never take an exponent, a unit, a dose, or an answer-key letter
from OCR text — under any engine. This is stated as engine-independent, not a WPS quirk.

---

## 2A. THE WPS ROUTE — the engine that was actually adopted for the books, and its full record

The scanned books do not go through the endpoint index. They go through **WPS Office's OCR**
(Kingsoft), and this is the most thoroughly measured decision in the project.

**The pipeline:** `pdftoppm -png -r 200` → `wpscli photo2word "<dir>/*.png" --output "<dir>/" --json`.
**Cost: $0** — a paid WPS tier the user already owned. The workspace's standing
no-free-tier-cloud rule was lifted *specifically* for WPS on that basis. `wpscli` resolves at
version 12.1.0.28032; the executable path must be **re-resolved from
`HKCU:\Software\Kingsoft\Office\6.0\Common` after any WPS update**, because the path carries the
version.

### The accuracy checkpoint (2026-08-31) — designed so it could actually fail

Two sets were run, and the design of the pair is the point:

- **A fresh section** (Grade Gain End Exam 3, 30 questions / 120 options) — no ground truth exists,
  because it is not yet drafted. Measured against a subagent's visual read of the same pages.
- **A calibration set of five already-shipped pages** (23 live entries) — measured against the app's
  own data file.

> The record states the reason explicitly: *"EE3 alone has no ground truth — it is not yet drafted —
> so the accuracy number would have been an assertion without the calibration set."*

| Set | Measured against | Result |
|---|---|---|
| EE3, 30 questions / 120 options | the rendered pages, read visually | **30 of 30 word-perfect**, stems and every option |
| EE3, 30 answer keys | the printed key list, both columns | **30 of 30 correct** |
| Calibration, 23 shipped questions | the live data file | 23/23 located; **91 of 93 options verbatim**; **23 of 23 keys** |
| Calibration, stems | the live data file | 17 of 23 verbatim |

### ⚠️⚠️ The most uncomfortable finding in the whole project

**All six stem "misses" were shipped-side, not OCR-side.** Three are deliberate back-reference
repairs. The other three are **silent normalisations in text this project had already shipped**, and
two were taken to the pixels to settle it:

- one page prints `&` twice and the American **`edematous`**; the shipped entry reads `and` and
  British **`oedematous`**
- another prints a bare superlative and no article; the shipped entry inserted an article and
  capitalised differently

**In both cases the OCR was faithful and the shipped, human-verified visual transcription was not.**
Content standards say questions are transcribed, never authored. Two confirmed silent normalisations
on a single page pair suggests the *visual* flow had been quietly tidying the source — the exact
failure the visual flow is supposed to be immune to.

**That inverts the usual framing.** The machine was not being checked against a reliable human
baseline; it was better than the baseline on the axis being measured, and it exposed a defect in the
corpus rather than in itself.

### Speed, measured rather than quoted

| Step | Measured |
|---|---|
| `pdftoppm -png -r 200` | **0.497 s/page** |
| `wpscli photo2word`, question pages | **3.03 s/page** |
| `wpscli photo2word`, dense explanation pages | **7.49 s/page** |
| End to end | **5.05 s/page** |
| Later batches: dense book text / GG portrait / House landscape 2-up | 5.48 / 2.98 / **8.74 s per sheet** = 4.37 s per book page |

⚠️ **The vendor-facing reference's 1.29 s/page did not reproduce.** Measured 3.0–7.5 s/page depending
on how much text the page carries; the reference is now treated as an **optimistic floor**, not a
figure. Render time is negligible next to OCR everywhere.

### The head-to-head that justified the route

Measured in the same session, on the same 6 pages:

| Route | Wall clock | Tokens |
|---|---|---|
| Visual read by a subagent | **262 s** | **120,000** |
| WPS OCR | **18 s** | **~3,000** |

**~40× cheaper in tokens, ~12× in wall clock.**

⚠️ **And the record refuses to let that number stand alone.** Verbatim from the journal: *"do not
expect the questions/day figure to move 40×."* OCR replaces **the transcription stage only**.
Drafting explanations, chapter filing, the fold sweep and every image crop are unchanged, and of 773
remaining questions **~304 are image questions and 132 are short-answer — OCR does nothing for
either.** The honest claim on the record is that OCR removes *the cheapest-to-automate stage of a
pipeline whose cost is dominated by drafting and crops*, and removes it almost completely.

For scale on the comparison that was rejected: the Tesseract calibration on the same class of pages
recorded **WER 0.48–0.71**. Not comparable.

### Three exit codes the vendor's own reference does not carry

Each was learned by losing work to it:

- **Exit 3 = the batch timed out.** Default is ~300 s **for the whole batch**, not per page, and it
  is **not** a quota failure. A 62-page batch died at page 35 of 62. **Pass `--timeout 1800` on any
  batch over ~30 pages.** Pages already converted survive — re-run only the remainder.
- **Exit 6 = completed with per-file failures.** The `batch_completed` JSON line names them.
- **429 is a RATE limit, not a daily quota.** ⚠️ **This was a documented correction to an earlier
  belief.** One page of 27 failed with "too frequent" while the other 26 succeeded, and an immediate
  single-file retry returned 429 again — it is a **cooldown**. The response is a paced driver with
  retries, not a smaller daily plan.
- ⚠️ **Two chats sharing one WPS login double the account-wide request rate**, so a driver pacing
  itself correctly can still trip the limit through no fault of its own. This is a
  concurrency-invisible-to-the-client problem, and the project's answer is a floor delay plus
  retries rather than coordination between chats.

*(Sources: `progress\resume-ophtho.md` 2026-08-31 WPS checkpoint block and the exit-code block ·
`Herophilus\MEMORY.md` OCR route banner · `progress\resume-2026-08-31-chatA-ophtho.md`.)*

---

## 3. THE ANSWER KEY IS READ FROM PIXELS, NOT FROM TEXT

Every endpoint question is printed **twice**: an unanswered page, then an answered page with the key
highlighted in yellow. So the key is a *colour*, and colour survives OCR failure.

`extract.py` downscales the 150 dpi page render to 400×225 and counts pixels with
`r > 200 AND g > 180 AND b < 120`, ×4. `index.py` classifies:

- `answered` — yellow present **AND** at least one option letter read
- `question` — no yellow, two or more option letters
- `notes` — no option letter in either pass
- `other` — yellow absent, a single option letter → look at it

**Calibration (2026-09-02, section 1, against the already-staged record):** the 89 answered pages
scored **936–20,128**; the 89 unanswered pages and the 3 overflow-box pages scored **≤ 524**. Clean
separation with no page in between. Threshold set at **750**.

⚠️ **A trap the classification survives only because it was anticipated:** notes slides *also* carry
yellow highlighting — all of pp.6–27 in part 1 do. So "answered" alone is not a question count; the
count is `kind == "answered"`, which requires an option letter too.

### ⚠️⚠️ The single most interesting failure in this whole record — page 584

A threshold with a **clean, gap-free separation on 178 calibration pages** still misfiled a real
answered page.

**p.584 measured 748. The gate is 750.** Two counts below.

The reason: on that page the highlight covers **two characters** — a letter and a single digit —
where a typical highlight covers a whole option line and scores 1,400–3,400 against a ~520
unanswered baseline. The page is genuinely answered; the *area* of the evidence was atypical.

It was not found by the threshold, by a re-calibration, or by any flag. It was found by a
**structural pairing walk**: every `question` page should be followed by an `answered` page. The
walk broke at exactly one place per section, naming pp.583/584/585 as three consecutive `question`
pages before an answered p.586. That located it as a hypothesis with a page number attached; the
image settled it.

**The generalisable claim:** a threshold calibrated to perfect separation on a large sample is still
only calibrated on the *distribution of evidence areas that happened to appear in that sample*. The
structural invariant (question→answered alternation) caught what the photometric measure could not,
because it depends on a different property of the data.

*(Sources: `tools\ep-index\extract.py`, `index.py`, `README.md`,
`progress\resume-2026-09-03-late-peds-endpoint.md`, `progress\resume-peds-endpoint.md` line ~381.)*

---

## 4. THE INDEX IS BUILT TO FAIL LOUDLY

Five flags, each meaning "this page is not to be trusted from the index alone":

| flag | meaning |
|---|---|
| `thin` | both reads under 40 % of the surrounding six pages' median word count — divider, overflow box, or a lost page |
| `few-options` | an answered page where both reads together found fewer than four option letters |
| `passes-differ` | word counts differ by more than 25 % between the two reads |
| `options-differ` | the two reads did not see the same set of option letters |
| `ocr-error` | the engine threw |

**Measured behaviour worth debating: `options-differ` has been spurious every time it has been
checked.** Worked example — p.559: the flag compared the unanswered and answered printings and
found option B different. Both pages print the same words. One read dropped a word entirely; the
other returned a mangled version of the same word. **The OCR differed, not the book.** The standing
instruction is therefore to check both `.txt` reads *before* spending a re-render on the flag.

A flag with a ~0 % true-positive rate so far is still kept, on the argument that its cost is one
grep and its absence would be silent. **This is a live question, not a settled one.**

**A second structural rule, from the same pass:** two discrepancies in the same section must not be
netted against each other. Section 6 has a classification artefact near its front (p.741/742) and a
reprint near its back (p.768). Cancelling them would produce a correct total by an **offsetting
error, which no sum can ever see.**

---

## 5. THE SCANNED-BOOK FIXES (class A)

### Geometry, stated as a prediction and then proven every time

`PDF sheet N = book page 2N-2 on the LEFT, 2N-1 on the RIGHT.` The brief explicitly calls this
**a prediction, not a fact**, and requires confirmation from the **printed folio at the foot of
every half rendered**, with the measured sheet→page table recorded. It has held on every chapter so
far; agents are required to say so explicitly rather than pass over it in silence.

### Two render passes, and the second is not optional

- **Pass 1 — 300 dpi whole page**, split into left/right halves (~1754×2480 px each). The reader
  shows those at ~1415×2000: **legible for prose, and NOT good enough to swear to a numeral.**
- **Pass 2 — 600 dpi band crops** of every weight, dose, volume, age, centile, z-score, unit **and
  every answer-key letter**, no wider than ~1150 px so the reader shows them 1:1.
- **Nothing numeric may come from the 300 dpi half.** The crop is named in the entry's note so the
  read can be audited later.
- If a band clips a digit at the image edge: **re-render the band shifted, never guess**, and record
  that it took a second render.

### ⚠️ Duplex show-through — the trap that nearly invented a question

The paper is thin and the reverse side ghosts through **mirrored**, which reads like real content.
In chapter 9 it nearly produced a transcribed question that does not exist.

The naive assumption — that a ghost comes from the page opposite — is **wrong**. Measured on sheets
38–41:

- LEFT half of an odd sheet ↔ RIGHT half of the next sheet — **three book pages away**
- RIGHT half of an odd sheet ↔ LEFT half of the next sheet — one book page away

p.80's ghost is **p.83**. The rule: where a faint passage matters, render its *predicted partner*
and match the ghost **word for word** before writing anything down or discarding it. **Nothing may
ever be transcribed from a ghost**, and the header must say which ghosts were matched and to what.

### Counting, where nothing is trusted

- Every page in range is read folio to folio. No page is skipped as "an answer page" — in this bank
  the answer line sits **inside** the question box.
- The printed question numbers are **walked in order and the walk recorded page by page**. Chapter 9
  printed **"18." twice and never printed 19.**
- **A book's own chapter numbers can be defective** — a chapter is identified by content and banner,
  never by its printed number.
- **Render one page PAST the last**, and prove the boundary off it by quoting the next chapter's
  banner and noting its numbering restarts at 1.
- Re-count from disk in node: `.length` **plus** an index walk for sparse holes, because
  **`Array.filter` skips sparse holes** and will report a clean count over a file with holes in it.
- "No figures on these pages" is only sayable if each page was rendered whole and examined — the
  brief requires stating *how* a zero was measured.

### The scope boundary, measured rather than assumed

The House MCQ bank ends at **book p.148 = PDF sheet 75, LEFT half**. Sheet 75 RIGHT begins a
**Pediatric surgery** section that runs to the end of the file (~sheet 104, book p.207) and is
entirely out of scope by user ruling.

⚠️ **Three separate things about that section would each fool a naive boundary detector:** its
numbering **restarts at 1**, its running header still prints the word **"MCQs"**, and it still
prints **"HOUSE"**. None of them makes it in scope. The reliable signal was the title page's
content, seen on the image.

### A cross-check this bank does not permit

The key prints as a **bare letter with no option name** ("Answer: C."). The letter-vs-name
cross-check that normally catches a mis-keyed transcription is therefore **unavailable, and must
never be reported as having passed** — the brief requires saying it was not possible.

*(All of §5: `tools\bank-harness\pd-staging-brief.md` §§2–8, 11a.)*

---

## 6. THE AGENT-DEATH FIX — why the work is ordered page by page

**Two consecutive staging agents died on chapter 12 leaving a ZERO-BYTE result.** The second died
*after* rendering the whole page range and generating all 30 band crops, at the moment it said "now
let's review them in batches". The entire render pass was lost.

**Both agents had, and obeyed, the rule "append one entry at a time."** They obeyed it in the
letter: they never reached an entry to append. Nothing in the rule forbade doing all the rendering,
then all the cropping, then all the reading, and only then the first write.

**§10a, the fix, added 2026-09-03:**

1. **Write the file with its header and an empty array BEFORE rendering anything.** The file must
   exist on disk within the first few tool calls.
2. Then loop, **one book page at a time**: render that page's half → band-crop that page's numerals
   and key letters → read them → **append that page's entries** → `node --check` → next page.
3. **Never render page N+1 before page N's entries are on disk.**

**It worked first try** — the third agent's file existed one minute after launch, and the chapter
completed. Cheap re-renders are explicitly accepted as the right trade: the render is seconds, the
*reading* is what costs.

**Measured, first time ever:** staging one chapter = **128 tool uses, 38.6 minutes, 86.4k tokens**
for 11 pages / 26 questions. Drafting the same chapter = 62 tool uses, ~15.5 min, ~53k tokens.

The general form of the fix: **checkpoint on the expensive-to-reproduce artifact, not on the
expensive-to-produce one.** Renders are cheap to redo and worthless if unwritten; a page written up
is worth its full cost even if the next call kills the agent.

---

## 7. TWO CHECKS THAT AGREED WITH EACH OTHER AND WERE BOTH WRONG

### 7a. The off-by-one that would have passed every automated test

Sections 1 and 2 staged `key` as a **zero-based index**. The section-3 staging brief specified
**one-based**, and both agents complied exactly. The validator compares the app's `answer` field to
the staged `key` **with no conversion**.

Drafting from that record would have set **every one of 67 answers one option too far** — and it
would have **passed every automated check in the harness**, because nothing in the harness knows
which option is actually correct. Staging, validator and splicer would all have agreed with each
other and all been wrong.

**Found by a human-shaped act**: reading one drafted entry beside its staging row and noticing the
answer named the 4th option while the field said 3.

**Rule extracted: two tools agreeing is not evidence when they read the same field from the same
file.**

Fixing it surfaced two more traps in one edit — Python's text writer silently converted the files to
**CRLF**, and the merger splits entries on a bare `\n\n`, so it reported `DOES NOT PARSE` in a way
that looks exactly like a corrupt staging file and is not; and a Bash heredoc **collapsed `\\` to
`\`** inside the Python source, breaking a JS string escape. Also: a bare `key:` grep over-counted
by one because a *note* contained the English phrase "key: reassurance" — the fix anchors on the
field, not the word.

### 7b. A zero from a probe you just wrote is a claim about the probe

`reprint-pd-ep.js` maps every answered page's OCR stem against the live banks to find reprints. Its
first version returned **0 matches over a section whose 89 answered pages ARE the 89 live entries**.

The bug: it compared with punctuation and spacing kept, and left the printed question number
("54.") on the front of every OCR stem, so nothing could align at character 0. The repair chain,
each step measured:

- tighten the comparison + strip the printed number → **82/89**
- 8 % edit-distance tolerance → **88/89**
- strip OCR's letter-shaped digits (p.48 prints "10."; **both reads returned "I O."**) → **89/89**

`--self-test` is now pinned at 89 and must stay there. The principle is written into the journal:
**a zero from a probe you just wrote is a claim about the probe first.**

---

## 8. FIGURES — the rules that came from actual damage

- **Every crop is LOOKED at.** No numeric check has ever caught a bad crop on this project.
- **`imgAlt` gives modality and view only.** Naming the finding answers the question — this gave
  away six answers once before the rule existed. The detailed read goes in the explanation.
- **A reference table can be an answer key.** A figure renders *between stem and options*, so a
  Glasgow Coma Scale table staged as a `fig` would hand the reader the answer before the options.
  It belongs in the explanation, **after** the key. (Live instruction for the next section.)
- **Free figure detection was designed but never shipped**: invert the OCR word boxes — a large
  region with no recognised words is a picture. It is part of the Tesseract gate described in §9,
  which was not adopted.
- A box that overflows onto the next page shows up in the index as text with no option letters —
  the same shape as `thin`. Overflow candidates are ≤90-word pages immediately after an answered
  page; a section's *last* such page is excluded, because that position is a closing/divider slide.

---

## 9. WHAT WAS REJECTED, AND WHY — including one thing that was built and then not used

### The cost ladder that was closed without running a rung

A five-rung pilot ladder (Windows OCR → PaddleOCR → iPad Apple Vision → Mistral tiling → Google
Cloud Vision) was designed to avoid an **$18–19** Mistral batch bill for ~9,100 remaining pages. It
was **closed unrun on 2026-09-01** by direct measurement: WPS reads the pages accurately at $0 on a
tier already owned, medical terms survive intact, and **zero rate-limit errors appeared across 9
consecutive calls at a 3 s gap** — the rate ceiling that motivated the whole ladder did not exist on
this workload. For the endpoint slide captures, **Windows.Media.Ocr** (built into Windows 10, ~50 ms
/page, free, offline) beat it on speed at equal measured quality.

⚠️ **Flagging a tension in the project's own record rather than smoothing it over:** that "zero rate
limits across 9 calls" reading (2026-09-01, endpoint pages) sits against §2A's documented 429
cooldown (2026-08-31, book pages) — where 1 page of 27 failed and an immediate retry failed again.
Nine calls is a small sample against a limit that is intermittent by nature. **The ladder may have
been closed on a sample too small to see the constraint it was built for.** See debate question 8.

**Gemini's free tier is banned outright** for this material — its terms permit human review and
training on uploads, and these are copyrighted commercial question banks.

### The Tesseract confidence gate — built, debated, adopted-with-changes, never wired in

The plan: OCR every page, and let any question block that scores above a confidence threshold ship
to the transcribing agent as **text only, no image** — removing ~1–2k image tokens from an estimated
85–90 % of pages.

**Calibration on 43 already-shipped questions: 0 clinically-material stem/option errors, House keys
20/20.** Looks like a pass. It was not:

- **Five Grade Gain key letters were entirely ABSENT from the OCR output at ~96 surrounding
  confidence.** Confidence cannot see a letter that was never emitted.
- An outside adversarial review found the **confidence half of the gate never fired at all** — the
  threshold was fitted on the same 43 blocks and sat 6–7 points below the observed mass, so it
  rejected nothing.
- **A mean over ~40 words cannot see one load-bearing word.** A dropped `not`/`except`, or a
  `hyper`→`hypo` substitution, does not move the average.
- ⚠️ **The calibration was an agreement study against our own previous vision transcript, not
  against print.** A shared miss scores as a match. That invalidates the headline result.

Verdict: ADOPT-WITH-CHANGES, six required. The consequential one is **"no text-only success path"** —
a gated block must send OCR text *plus* a tight 300 dpi crop. Stated honestly in the record: that
change means **the image never fully leaves the request**, so the saving shrinks from "no image on
85–90 % of pages" to "a tight per-question crop instead of a full page". Real, but far smaller than
designed.

**None of the six changes were built. Every batch still runs the classic visual flow.** The gate
that *was* built (`tools\ocr-gate.js`) halts loudly — its contracted behaviour — on every real
calibration page, because running headers sit at 7–16 % of page height and the brief gave it a 4 %
strip. The strip depth was never tuned.

### The deferral that is not about OCR at all

The endpoint banks stay deferred **because of drafting cost, not reading cost.** OCR is now cheap
and proven. Drafting and verifying questions into the app measured at **110–121 questions/day**; the
ophthalmology endpoint alone is on the order of **2,000 questions**. That is the binding constraint,
and it is a scheduling decision rather than a technical one.

---

## 10. WHAT IS STILL OPEN — the honest list

1. **The duplicated-option-line class was never resolved.** OCR artifact or printed defect is still
   unknown, on 3 of 9 sampled pages.
2. **The p.584 sweep gap.** The reprint sweep for the next section reported "60 answered pages"
   because it took the index's classification — so **p.584 was never swept.** The re-run is owed.
3. **`YELLOW_MIN = 750` is calibrated on one section of one book.** The README says to check the
   first ten pages of any new book and never assume. p.584 shows the threshold can be right for a
   distribution and wrong for a page.
4. **Windows.Media.Ocr has never been measured on the scanned books** — only on the slide captures.
   The two source classes have never been benchmarked with the same engine.
5. **The six gate changes are unbuilt**, and re-calibration against *print* (not against our own
   prior transcript) has never been done on a frozen holdout.
6. **The cross-bank `alsoIn` pass is unstarted** — 21 known House hits in one section alone.
7. **`options-differ` has produced no true positive yet** and is still run.

---

## 11. QUESTIONS WORTH ARGUING ABOUT

1. **p.584 says a photometric threshold with perfect separation on 178 pages still missed a page.
   Is the right lesson "widen the margin", "add a second independent invariant", or "never let a
   scalar measure classify at all"?** The structural pairing walk caught it; the walk is cheap; but
   the walk only works because questions are printed in a strict alternation that another book might
   not have.

2. **Is a flag with a 0 % true-positive rate worth keeping?** `options-differ` has been spurious
   every time. Cost: one grep. Benefit: unknown, possibly zero. The argument for keeping it is that
   its failure would be silent.

3. **§10a checkpoints on the written artifact rather than the rendered one. Is that a general law
   for long-running agents, or an artifact of this particular failure?** The counter-argument: it
   forbids batching that would be genuinely cheaper if the agent survives, and agents that die
   mid-task may be a solvable infrastructure problem rather than a permanent design constraint.

4. **"Two tools agreeing is not evidence when they read the same field from the same file."** The
   off-by-one passed a validator and a splicer. What class of check *would* have caught it, other
   than a human reading one entry beside its source? Is there a cheap independent oracle?

5. **The Tesseract gate's calibration was an agreement study against our own prior output — a shared
   miss scores as a match.** How much of the rest of this record has the same defect? The 89/89
   reprint self-test, for example, validates against the live bank, which came from the same
   reading process.

6. **Was closing the cost ladder unrun correct?** It was closed because the free route measured
   adequate. But "adequate" was measured on 9 pages of one book, and the ladder's rungs were never
   compared head to head.

7. **The honest cost accounting in §9 says the gate's saving shrinks from ~85–90 % of pages to "a
   crop instead of a page".** At that point, is the gate worth building at all against simply
   cropping tightly and skipping OCR entirely?

8. **§2A found the OCR faithful and the already-shipped human-verified text unfaithful** — two
   silent normalisations on one page pair. That means the visual route, which is the *fallback* and
   the thing OCR is checked against, has a demonstrated defect of its own. **What is the correct
   ground truth when both routes are known-fallible in different directions?** The project's answer
   is "the pixels, read again" — but that is the expensive thing both routes exist to avoid.

9. **Was the cost ladder closed on too small a sample?** Nine consecutive calls with no rate limit
   (2026-09-01) closed a ladder built to escape rate limits — while the record from ten days earlier
   documents a real 429 cooldown that a retry could not clear. An intermittent constraint is exactly
   the kind a nine-call sample fails to see. What sample size would have been defensible?

10. **WPS reorders options and drops spaces (§2, item 5).** Option order is not cosmetic when the
    answer key is a bare letter — a reordering silently re-keys the question. Given that, is
    "OCR is a search index, never a source" a *sufficient* mitigation, or does a defect that can
    invert an answer demand something stronger than a discipline rule an agent must remember?

---

## Appendix — where each claim lives

| § | File |
|---|---|
| 1, 2, 3, 4 | `tools\ep-index\README.md` · `extract.py` · `index.py` · `progress\ocr-pipeline.md` |
| 2A (WPS) | `progress\resume-ophtho.md` — the 2026-08-31 WPS checkpoint block and the exit-code block · `Herophilus\MEMORY.md` OCR banner · `progress\resume-2026-08-31-chatA-ophtho.md` · `tools\wps-ocr-reference.md` (treat as an optimistic floor) |
| 3 (p.584) | `progress\resume-2026-09-03-late-peds-endpoint.md` · `progress\resume-peds-endpoint.md` |
| 5 | `tools\bank-harness\pd-staging-brief.md` §§2–8, 11a |
| 6 | `pd-staging-brief.md` §10a · `progress\resume-2026-09-03b-chatB-peds.md` |
| 7 | `progress\resume-peds-endpoint.md` (key-convention block; tools block) |
| 8 | `Herophilus\CLAUDE.md` §4 · `progress\ocr-pipeline.md` |
| 9 | `progress\ocr-pipeline.md` · `progress\briefs\ocr-gate-debate-verdict.md` |

**No bank question content is reproduced in this brief** — the banks are the publisher's copyright.
