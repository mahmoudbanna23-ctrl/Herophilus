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

## Owner console steps — ALL FOUR DONE 2026-09-08

**The site is live at https://herophilus.pages.dev** — Cloudflare Pages, 202 files / 28 MB,
deployed 2026-09-08. That is the permanent origin; it must not be renamed or moved again, because
`localStorage` is per-origin. It replaces herophilus.netlify.app the same day — see "The host moved"
below. Nobody had the Netlify link and no progress had been saved, which is the only window in
which a move is free.

From `LAUNCH-owner-steps.md`. None can be scripted; Claude may not enter credentials.

1. ~~Drag `dist` onto app.netlify.com~~ — **SUPERSEDED 2026-09-08.** `dist` now goes to
   **Cloudflare Pages**: dash.cloudflare.com → Workers & Pages → the `herophilus` project → drag the
   `dist` FOLDER (not a zip) onto the dropzone. The wrapper folder is stripped, so `index.html`
   lands at the root. A rebuild is re-dropped onto the SAME project, never a new one.
   ⚠️ Claude cannot do this step through the browser tool — its file-upload cap is 10 MB and the
   build is 28 MB. Either the owner drops the folder, or Wrangler is used (`wrangler login` is an
   OAuth grant covering far more than Pages, so it is the owner's call, and it is not set up).
2. ~~Publish `progress\firestore.rules`~~ — **DONE 2026-09-08.** The rules that had been live since
   **25 July 2026** granted `users/{uid}` only: **no `profiles` subcollection block and no
   default-deny.** Per-profile sync was therefore being refused in production, silently, for every
   profile on every account. The file was published whole and re-read after a full page reload:
   2,808 characters, 61 lines, the `/users/{uid}/profiles/{profileId}` block present and the
   `if false` backstop present.
3. ~~Add the live domain to Authorized domains~~ — **DONE 2026-09-08, TWICE.** Both
   `herophilus.netlify.app` and, after the move, `herophilus.pages.dev` are listed as `Custom`
   beside `localhost`, the two `*.firebaseapp.com`/`*.web.app` defaults and the older
   `steep-feather-4c9b.mahmoud-banna23.workers.dev`. The Netlify entry was left in place — it costs
   nothing and removing it would break nothing but could not be undone without the console.
4. ~~Publish the OAuth consent screen out of "Testing"~~ — **ALREADY DONE**, nothing changed.
   Google Auth Platform → Audience reads publishing status **In production**, user type
   **External**, 0 users against a 100-user cap.

⚠️ **THE FIREBASE CONSOLE IS BEHIND MANDATORY 2SV.** On 2026-09-08 every
`console.firebase.google.com` address redirected to `/mfa` — *"Multi-factor authentication (MFA),
also called two-step verification (2SV), is now required for users."* The owner enabled it and the
console opened. Anyone hitting that wall again enables 2SV on the Google account; it needs a phone,
so it is the owner's to do. The Google **Cloud** console is not affected — only Firebase.

**Note for whoever touches sync next:** the live `users/{uid}` documents still carry a `state`
field directly on the account document, the pre-per-profile shape. The published rules allow both
shapes, so nothing is broken, but the old documents have not been migrated.

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

## The host moved to Cloudflare Pages, 2026-09-08 — and why

**HOST: Cloudflare Pages, https://herophilus.pages.dev.** The owner chose the move on 2026-09-08
after the diagnosis below. Netlify had been chosen earlier the same day and was live for a few
hours; that decision is superseded, not still open.

⚠️ **The earlier note in this file — "the block is the owner network, almost certainly DNS" — was
wrong, and it is corrected here rather than left standing.** Measured four ways from the owner line:

1. **DNS is innocent.** System resolver, 1.1.1.1, 8.8.8.8 and encrypted Google DoH all return the
   same two Netlify IPs. A public resolver fixes nothing.
2. **TCP is the failure.** Ports 80 **and** 443 to both of those IPs fail, while netlify.com,
   app.netlify.com and Google all succeed on the same connection in the same minute.
3. **It is not the home router.** Traceroute reaches hop 6, `212.133.4.230` — Telecom Egypt's
   international transit — before dying. ⚠️ The silence past hop 6 is not itself proof: the control
   trace to a host that works fine on 443 died at the same place. The decisive evidence is the TCP
   result, not the ICMP.
4. **It is Netlify's whole app-serving edge, not one site.** `netlify.app` resolves to the same two
   blocked IPs. Cloudflare — `cloudflare.com`, `pages.dev`, and the owner's own
   `steep-feather-4c9b.mahmoud-banna23.workers.dev` — is fully reachable.

**Conclusion: Netlify's serving IPs are blocked upstream, at Telecom Egypt's international edge.**
A block there most likely hits every TE Data subscriber, which would include a large share of
classmates in Alexandria — but that is inference from one vantage point, not measurement, and it
cannot be proved from this machine.

**Verified after the move, from the same home wifi:** TCP 443 to herophilus.pages.dev succeeds;
`GET /` returns 200 and 443,033 bytes; `/data/questions.ent.js` and `/assets/ambient-library.jpg`
both return 200, so the dropped `dist` wrapper was stripped and paths resolve at the root.

⚠️ **herophilus.netlify.app is dead to the owner's network and must not be treated as a fallback.**

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
