# AGENTS.md — Herophilus

Rules for any agent run from this directory. They bind before any prompt is read; a prompt may
narrow them, never loosen them.

1. Read-only unless the brief says otherwise. **Never write anywhere under `app\`** — `app\data\`
   above all; that is the live app.
   **App-lane exception (owner 2026-09-20):** a brief under `progress\app-replan\` may open
   `app\css\`, `app\js\` and `app\index.html` for writing, and only the files it names under
   "May change". `app\data\` stays closed — never open it, never write it. Running
   `node tools\boot-check\*.js` and `node tools\dist-check.js` is allowed on that lane.
2. **Never modify, rename, move or delete anything in `Semester 8\`.** Never copy a scanned page
   off this machine. Rendered PNGs live in the session scratchpad only.
3. **`key` is a zero-based index into `opts`, never a letter.** `null` if unreadable — never guess.
4. **Verbatim means verbatim:** no corrected spelling, units, grammar or abbreviations, no reordered
   options, even where the page is plainly wrong.
5. **Numbers, units, doses and exponents are transcribed, never normalised.** Anything not
   unambiguous at the given resolution goes in `note` instead of being read confidently.
6. **A defective printed key is recorded, never disputed and never corrected.**
7. **Figures: modality and view only.** Never interpret one, and never let a description answer
   the question it belongs to.
8. Where the brief lets you write, write results to disk as you go. **A partial job reported
   honestly is a success.**
9. **On ambiguity, stop and hand back** — do not decide.
10. Output is data awaiting a human check. **Never assert that a fact is verified.**
11. Never run git — except, on the app lane, read-only `git diff` and `git status`. No network beyond the model call itself.
12. **Begin every final reply with the exact line `AGENTS.md loaded — Herophilus`.** The runner
    checks for it; a reply without it is discarded.
