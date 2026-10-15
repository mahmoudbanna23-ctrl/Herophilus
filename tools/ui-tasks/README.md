# Engine task checks

From the trial repository root, using Node 22+ and installed Chrome or Edge:

```powershell
node tools/ui-tasks/tasks.js
node tools/ui-tasks/frozen.js 8bd99322
```

No npm packages are needed. UI_TASK_BROWSER may specify another browser executable.
tasks.js copies the whole app into a fresh temporary directory under os.tmpdir()
(the path must not contain `--`), seeds an isolated profile, stubs the gate,
disables animations, blocks HTTP(S) requests, and controls the browser via local CDP.
It reloads the real page for both resume checks and removes its temporary copy.
Seven PASS/FAIL lines are emitted; any failure gives a nonzero exit code.
Question 3 means Q.i === 2 (zero-based), displayed position 3.
The sync probe uses the real seeded local profile without changing cloud identity
or sync state. It requires a non-empty rail label matching the app sync state.
Today the local-profile renderer hides and clears that label; this requested
assertion conflicts with the current app behavior and needs owner resolution.
Only unavoidable DOM checks/actions use the selectors object at the top.
These checks exercise engine behavior, not visual appearance or live Google sync.

Always pass the redesign BASE commit `8bd99322` explicitly to frozen.js.
Never use HEAD once redesign commits land: that would compare against the changed baseline.
It uses read-only git rev-parse, ls-tree and show and compares SHA-256 bytes,
including missing/added files under app/data and app/js/lib.
Every mismatch is printed; mismatches or errors give a nonzero exit code.
