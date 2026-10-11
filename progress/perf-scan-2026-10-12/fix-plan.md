# Fix plan — slow site, agreed after the debate (2026-10-12)

Sources: `claude-findings.md`, `codex-review.md`, `compare.md`, `measure.md`, `codex-debate.md`,
`claude-reply.md`. **Nothing here is built yet.** Every item needs the owner's go; nothing uploads
17-19 Oct. "Look" = the student sees a difference.

What is known and what is not:

- Measured on a desktop slowed 4x-6x, not on a real tablet. Drawing cost is a stand-in number.
- The cause of tab crashes is **unproven**. No fix below is promised to stop crashes.
- Timings behind each item: `measure.md` (M1-M8).

## Step 0 — two numbers before any edit (scratch copy, no site file)

- **Idle three-way test:** the same settled quiz question, 5 s, with (a) button ring off,
  (b) scan line off, (c) both; style and paint time per run. Names the real idle cost.
- **Split trace:** how much of one redraw is the side menu, and how much of opening a subject is
  the per-chapter scan against the accuracy pass, bank chips and row building. Decides whether
  B2 and B3 below are worth shipping at all.

## A. Before the exam — ship by 16 Oct or wait

| # | Fix | Files | Check | Look | Risk |
|---|---|---|---|---|---|
| A1 | Button ring stands still on the five reading views (quiz, results, mock, review, theory). Scan line too only if Step 0 blames it. Glitch untouched. | `app/css/views.css` (beside the orb pause, `:224-233`) | Step 0 rerun shows the drop; ring still turns on home; print unchanged; light and dark | **Yes, small** — the moving light on button edges stops while reading | Very low. CSS only. |
| A2 | Main film pauses while the sign-in screen shows | `app/js/render.js` `syncFilm()` (`:37-47`) | At sign-in: main film paused, sign-in film plays. After entry: plays on home, paused on quiz. Reduced-motion unchanged. | None | Very low. One condition. |
| A3 | Review list marks "due" with a Set | `app/js/quiz.js:1154` | Same rows, same order, same due marks, deck 1,254 | None | Very low. |
| B2 | Opening a subject: plain-chapter questions bucketed in one pass inside that one draw; Pediatrics exam shadows and Neurology exam order untouched (`storage.js:303-306`); nothing kept afterwards | `app/js/render.js` (module view, `:351`) | For all 4 subjects, every chapter, every bank-filter setting: **same ids in the same order**, old against new. Boot check 0 errors. | None | Medium. Ships only if the id check is identical and Step 0 shows a real gain. |
| B3 | Ordinary quiz only: picking an option and Next skip the side-menu redraw. Mock and every view change keep the full draw. | `app/js/quiz.js` (`:493`, `:552`), `app/js/render.js` | Side-menu counts after 20 questions equal a full redraw; mock unchanged; keyboard focus lands where it does now | None | Medium. Same condition as B2. |

A1-A3 are safe to ship together. B2 and B3 touch the quiz path four days before an exam: they
ship only if both checks pass cleanly, otherwise they wait for section C.

Each shipped fix: script check, then a checker from the other house, then `node
tools\boot-check\boot-check.js`, then the owner's yes for the upload.

## C. After the exam (from 20 Oct)

| # | Fix | Note |
|---|---|---|
| C1 | Review list in pages | Practise-all and printing must keep the full list. Look: a "show more" button. |
| C2 | Search waits for a pause in typing | Must cancel on Enter and on dismiss. Low gain (50 ms at x6). |
| C3 | Picture space reserved | Through `qFigure()`; local size table; print sizing checked. |
| C4 | Manual "calm mode" switch | Ring, orbs, film, glass off. Device setting, never synced. **Look: owner's call.** |
| C5 | Orbs removed on reading views | Needs a real-device number first. **Look: owner's call.** |
| C6 | Hosting cache rule | Read the live response headers first. |
| C7 | Per-subject loading | Own plan. Only if a real-device number justifies it. |
| C8 | Backup size undercount | Budget counts the inner text; the stored wrapper is larger (`boot.js:54,78`). |

## D. Needs something only the owner can supply

- **A crashing device.** Which device, which browser, on which screen it dies. Without this the
  crash cause stays a guess.
- **Cloud save cost and size.** Needs a real signed-in session (Claude does not sign in). Open
  risk: a very heavy user's progress approaching the cloud's size limit per record.
- **Search and switched-off banks.** Search shows questions from a bank the student has turned
  off (`sessions.js:459`). Bug or intended?

## Not doing

Pose preload, hidden-tab timers, confetti, home-card images: real, too small to matter.
