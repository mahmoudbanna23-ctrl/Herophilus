# Resume prompt — Herophilus launch

Paste everything below the line as the first message of a fresh chat.

---

We are resuming the **Herophilus launch**. Read this whole message before acting.

## Read first, in this order

1. `D:\claude os\Medical school\Herophilus\progress\launch-meeting-2026-09-06.md` — the board
   decisions and the order of work; this is the authority
2. `D:\claude os\Medical school\Herophilus\progress\LAUNCH-owner-steps.md` — the four owner-only
   console tasks
3. `D:\claude os\Medical school\Herophilus\MEMORY.md`
4. `D:\claude os\Medical school\Herophilus\progress\PLAN-sprint-to-17-sep.md` — the copyright section

## Done and verified on disk, 2026-09-06

- B2 harness fix (`309d797`); B1+B7 cross-profile cloud-overwrite fix plus the sync-identity test
- **The lock**: `LOCKED_MODULES=['ophtho','neuropsych']` across all 14 surfaces, "Coming soon" badges
- Exam mode, timed MCQ paper (`38ac0e0`); B5 SRS/toast copy fix
- Mobile pass — `node tools/boot-check/mobile-check.js`, PASS, no overflow
- **Trimmed build**: `node tools/build-launch.js` → `dist\`, 197 files, 28,905,461 bytes, with locked
  subject data and images physically stripped, not merely hidden. Verified by
  `node tools/boot-check/boot-check.js --dir=dist` → 4,049 questions, 81 theory, 0 console errors,
  no locked ids leaked.

## Blocked on the owner — four console steps, none confirmed done

From `LAUNCH-owner-steps.md`. None can be scripted; Claude may not enter credentials.

1. Drag `D:\claude os\Medical school\Herophilus\dist` onto app.netlify.com. ⚠️ **Not the `app` folder.**
2. Publish `progress\firestore.rules` in the Firebase console — status unknown from the repo.
3. Add the Netlify domain to Firebase **Authorized domains**.
4. Publish the OAuth consent screen out of "Testing" at console.cloud.google.com.

**Ask which of the four are done before planning anything downstream.** The repo cannot see a console.

## ✅ The two gates — BOTH CLOSED BY THE OWNER, 2026-09-08

Neither was a technical task and neither was Claude's to decide. The owner ruled on both on
2026-09-08, asked directly and answering directly: the transcribed bank text is authorised, and
that authorisation covers ENT Q153's photograph of an identifiable child. Recorded here as the
owner's decision, not as a finding of Claude's. The reasoning below is kept as history; it is no
longer a blocker.

1. **Publisher copyright.** The drafting input is byte-identical copyrighted bank text
   (`PLAN-sprint-to-17-sep.md`); the publisher-copyright gate is parked as a blocker for publishing.
2. **An identifiable child.** `ledger-closed-1-16.md` records that Q153 is a clinical photograph of
   an identifiable child — *"a question to settle before any publication, alongside the copyright
   question already open on the transcribed content."*

**HOST DECIDED 2026-09-08: Netlify**, by the owner, and permanent — `localStorage` is per-origin,
so a later move orphans every student saved progress. This supersedes the "Netlify is ruled out by
measurement" note in `redesign-direction-2026-09-07.md`, and 2026-09-08 explains that note: the
first deploy, `dapper-blancmange-ba9474.netlify.app`, would not load over the owner home wifi but
loaded immediately over mobile data on the same phone. The block is the owner network, almost
certainly DNS, NOT Netlify edge — the site is reachable for everyone else. Suggested fix on the
owner side is a public resolver (1.1.1.1 or 8.8.8.8). ⚠️ It follows that the owner cannot test
their own live site on home wifi, so a report of "the site is down" from that network is not
evidence the site is down; check from another connection before believing it.

With both gates closed and the host chosen, nothing stands between the build and the four console
steps. A green build still is not permission on its own — the permission is the ruling above.

If asked to push the site live while either gate is open, say plainly that the gate is open, name it,
and put the decision to the owner. Unpublishing does not unpublish.

## Built, not yet done — the meeting's new items

B7 whole-blob write races · design-authenticity cleanup (emoji use, border-radius scale) · a visible
sync-state indicator · in-app-browser warning copy. None are launch blockers by themselves; confirm
priority against the two gates above before spending a session on them.

## The harness — run these, do not rebuild them

- `node tools/boot-check/boot-check.js [--dir=dist] [--selftest]` — headless boot, stubs the gate,
  seeds a profile, walks all four modules, nonzero exit on any console error. Companions in the same
  directory: `lock-check.js`, `mobile-check.js`, `image-check.js`, `navclock-check.js`,
  `attempt-check.js`.
- `node tools/build-launch.js` — builds `dist\` with locked-module data stripped.
- `node tools/dist-check.js` — **run it after `build-launch.js`**; boots `dist\` and confirms the
  withheld content is genuinely gone.
- `node tools/bank-harness/validate-all.js [module...]` — read-only sweep of every live
  `app/data/questions.*.js`: ids, answer ranges, refs.

⚠️ **Never run `val-pd.js` / `splice-pd.js` on endpoint files** — they write another chat's live file.
The endpoint uses the `-pd-ep` / `-pd-ep2` pair. A citation gate already exists twice over — the
machine gate and `tools/bank-harness/pagecov-ep2.js`. **Do not build a third.**

## How the work is routed

Lowest rung that can do the job, and **say which rung before starting**:

1. Fleet seat for anything that can leave Anthropic. App code and config can; **bank content cannot** —
   questions are transcribed copyrighted material and never leave Claude, in any encoding.
2. Cheapest capable seat inside the fleet, free lanes before Codex.
3. Claude subagent when no seat can do it — `haiku` read-only, `sonnet` drafting.
4. **Main chat: review and routing.** Verification of anything a seat returns never leaves Claude.
5. Opus itself: critical only, and ask first.

## Register

Caveman ultra per `C:\Users\Alfa388\.claude\caveman.md`, which **outranks the output style**. The
`PostToolUse` hook `Tools\guard\drift-guard.js` fires a reminder every ten tool calls — act on it.

## Git

Git is Claude's job, not the owner's. The repo is `main` tracking `origin/main`, remote
`mahmoudbanna23-ctrl/Herophilus`, **private**. A dirty tree is normal — two chats run at once.

- `git commit -F <msgfile> -- <explicit paths>`
- **Never `git add -A`** — it swallows the other chat's live edits
- Never `--force`
- ⚠️ **A push that makes anything public is confirmed with the owner first**, and the two gates above
  must be resolved before any public artefact exists.

## Deadlines

No deadline on launch itself. The exams around it: Peds OSCE 14 Sep · Peds papers 17 Sep ·
ENT 22 Sep · Ophtho 27 Sep · Neuro 3 Oct · Peds papers 18–19 Oct. Exam freeze until 3 Oct means
Herophilus only — launch work qualifies, but it competes with revision for the same hours.
