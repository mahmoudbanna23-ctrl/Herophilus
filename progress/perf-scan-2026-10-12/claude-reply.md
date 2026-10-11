# Claude's reply to the debate round — 2026-10-12

Codex's attack is `codex-debate.md`. Ten of its cited spans were opened by the main chat before
this reply (`storage.js:296-308`, `quiz.js:476-496`, `quiz.js:120-126`, `gate.js:302-307`,
`sessions.js:457-464`, `boot.js:52-56`, `boot.js:76-80`, `clepsydra.js:54-57`, `boot.js:360-366`,
`render.js:17-20`). Every one says what Codex claims. No third Codex round is needed: nothing is
left where the two sides want different things, only things that need a number neither has.
Codex jobs used: 2 of 3.

## Per fix

| Fix | Codex | Ruling | Why |
|---|---|---|---|
| F1 ring off on reading views | agree, provisionally | **Codex's version** | Add the results view (`render.js:19` lists five still views, my draft named four). `animation:none`. The attribution stays unproven until the three-way test below is run. |
| F2 count once | disagree as specified | **Codex wins** | I missed that `qsIn` has three branches: Pediatrics exam shadows (`storage.js:303-304`), Neurology exam order (`:305-306`), and the plain scan (`:307`). A persistent index over the plain scan would have been right for one branch and silently wrong for two. And "counts equal" does not prove "same questions in the same order". Narrowed: buckets built inside the one module-view draw, plain branch only, thrown away afterwards; check is id-and-order equality. |
| F3 skip the side menu on taps | disagree with the blanket rule | **Codex wins** | In a mock, picking an option writes the answer at once (`quiz.js:478-481`) and moving question saves the resume point (`:124`). "Taps save nothing countable" was false. A counter bumped in `save()` also misses the cloud merge that replaces `S` directly (`gate.js:305`). Narrowed: ordinary quiz only, pick and Next only; mock and every view change keep the full draw. |
| F4 review list | Set yes, pages later | **Codex wins** | Paging risks practising only the visible slice and printing only the visible rows (`print.css:10` hides controls, not rows). Set change alone now. |
| F5 one film at sign-in | agree | agreed | |
| F6 search debounce | disagree with "one line" | **Codex wins, and it moves down** | A pending search can reopen a dismissed list or let Enter act on stale results. Search is 50 ms at x6; not worth the risk before an exam. |
| F7 orbs removed | needs a number | agreed | Real-device memory or frame number first. |
| F8 calm mode | manual first | **Codex wins** | A manual switch is cheaper and works on Safari, which has none of the detection signals anyway. |
| F9 picture space | agree, after exam | agreed | Through `qFigure()`, table local, print sizing checked. |
| F10 loading | defer splitting; headers first | agreed | **Claude's deferral of per-subject loading stands** (Codex: "Claude's deferral wins"). Cache rule only after reading the live response headers. |
| F11 save and cloud push | needs a number | **Codex wins on the wording** | "Leave alone" over-read my own measurement: 27 ms is the local save only. The cloud path (`gate.js:280-305`) clones, merges and packs several times and was never timed; notes, highlights and resume data grow the payload beyond answers. Unchanged before the exam, but it is an open question, not a closed one. |

## The four disagreements

1. **Backup budget.** I half-concede. My point holds that characters are the unit the browser
   counts. Codex's point also holds: the budget adds up the inner strings (`boot.js:78`) but what
   is stored is those strings wrapped and escaped again (`boot.js:54`), so the stored size is
   larger than the budget thinks. Real, small, not a cause of lag. After the exam.
2. **Loading cure.** Settled my way: not before the exam, own plan.
3. **Order.** Settled by the numbers, closer to Codex's first instinct than mine: drawing and
   subject-open first; search and save last. My pre-review ranking had search third. It was wrong.
4. **Crashes.** Still nobody's. 43 MB after clean-up says nothing about peak memory or drawing
   memory. Only a real device that crashes can answer it.

## Things Codex added that stand

- The clock figure's pose change forces a layout on purpose (`clepsydra.js:56`), so "layout after
  the call was tiny" in the timing run clears nothing.
- F2 removes only part of the subject-open cost; accuracy passes, bank chips and the id lists
  written into the rows remain (`storage.js:460`, `render.js:315,338`). A trace is needed before
  promising a number.
- Search ignores the bank filter (`sessions.js:459` loops `QUESTIONS` with no `bankOn`). Not a
  speed fault. Whether a switched-off bank should still show in search is the owner's call.

## Where I do not follow Codex

- It asks for a trace before F2. Agreed, but the trace is step one of the fix work, not a reason
  to hold F1 and F5, which do not depend on it.
- It lists mascot bob, pool glow and glitch as other idle suspects. True, but the glitch is the
  owner's ruling and the figure is his artwork; the three-way test names the ring and scan line
  first, and the figure is only raised with him if they turn out innocent.
