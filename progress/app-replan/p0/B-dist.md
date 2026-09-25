Symptom (measured)

`node tools/dist-check.js` run five consecutive times (one shell, hence one at a time): runs 1, 2, 4 and 5 printed `7 passed, 0 failed`; run 3 terminated with `TypeError: Cannot read properties of null (reading 'webSocketDebuggerUrl')` at `tools/dist-check.js:54`. The four completed runs all reported `nothing 404s` and the same 6,956-question shipping counts. This reproduces a 1/5 flake, but not an image-copy failure.

Root cause

CONFIRMED: the checker reuses and deletes one fixed temporary workspace/profile on every invocation (`tools/dist-check.js:13,19-21,42`) but does not wait for Chrome to exit after `proc.kill()` (`:135`). A following invocation can remove/recreate that profile while the prior Chrome shutdown is still in progress. The startup probe then silently discards every error (`:48-53`) and dereferences `t` even when it never found a page (`:54`), producing the observed nondiagnostic flake. There is no reproduced evidence that image copying is the fault.

Evidence

- `tools/dist-check.js:13,19-21` uses `%TEMP%/herophilus_dist`, deletes it, then copies `dist` into it; `:42-46` places Chrome's user-data directory under that same reused tree.
- `tools/dist-check.js:48-54` has a bounded 15 s port wait and 10 s page wait, catches all connection errors, then uses `t.webSocketDebuggerUrl` without a null guard.
- `tools/dist-check.js:135` sends `kill()` and immediately exits; no `close`/`exit` wait or cleanup `finally` exists. The error path at `:72` also calls `process.exit(1)` without killing Chrome.
- The image-removal loop is synchronous (`tools/build-launch.js:240-257`); the build's source-to-dist copy is synchronous too (`:95-101,117-120`). `dist-check` itself only copies the already-built `dist` synchronously (`tools/dist-check.js:16-21`). These reads support no asynchronous image-copy race.
- The five-run command output above had no failed image requests in any completed run; the sole failure occurred before WebSocket setup and before navigation (`dist-check.js:54`).

Proposed fix

`tools/dist-check.js` only: replace the fixed `WORK` with `fs.mkdtempSync(path.join(os.tmpdir(), 'herophilus_dist-'))`; wrap Chrome/WebSocket work in `try/finally`; close WebSocket, `proc.kill()`, and await the child `exit` before `rmrf(WORK)`. On a missing port/page, throw a diagnostic including child exit status and captured stderr, rather than dereferencing null. Do not change `tools/build-launch.js`: its image work is synchronous and no image failure was observed.

Check that proves the fix

Run `node tools/dist-check.js` at least 20 times sequentially, retaining each exit code/output. Pass requires 20 `7 passed, 0 failed` results, no startup diagnostic, and no Chrome process/profile cleanup error. Then run two instances concurrently: both must pass, demonstrating unique scratch/profile isolation. If concurrency is out of scope, record that separately; it must not replace the 20 sequential runs.

Unconfirmed

- Whether prior reports labelled the flake an “image-copy race” from an output not available here.
- The specific Chrome-side startup condition in the failed third run (the checker suppresses it at `tools/dist-check.js:48-53`).

## Round 2 (2026-09-25)

Changed, `tools/dist-check.js` only: `:14` `WORK` = `fs.mkdtempSync(...'herodist-')`, unique per
run · `:34-66` teardown in `cleanup()` — CDP `Browser.close` (raced 1 s) if socket open, `ws.close()`,
**`taskkill /T /F /PID` first**, then `proc.kill()` + 3 s exit wait, then `rmrf(WORK)` · `:78-80`
launch gained `--disable-crash-reporter --disable-breakpad --disable-component-update` · `:96`
missing page target now `throw`s (pid+port in message), no more null deref on `t` · `:72`-path
(`never booted`) `throw`s instead of bare `process.exit(1)` so `finally`/cleanup still runs — exit
happens once, after `main()` returns, since `process.exit()` inside `try` skips `finally` entirely.

Two batches of 10 sequential runs (never concurrent, single shell, `tasklist` chrome.exe count after
each): **Batch 1** (mkdtemp + taskkill-after-exit-wait, no crash-reporter flags) 10/10 passed but
chrome.exe climbed 13→21 (baseline 13 = user's own open Chrome). `wmic CommandLine` on the leftovers:
2 of 10 runs left a `--type=crashpad-handler` + a `--type=utility unzip.mojom.Unzipper`, both on the
run's `herodist-<id>` path — crashpad-handler detaches from the job object by design (crash
reporting survives the browser), so by the time `taskkill /T` ran the tree root was already gone.
Fixed by moving taskkill before proc.kill()/wait, plus the three flags above to stop crashpad
spawning. **Batch 2** (both fixes): 10/10 passed, chrome.exe held at baseline 13 every run, 0
orphans, no `herodist-*` left under `%TEMP%`. **20/20 total, 0 diagnostics, 0 cleanup errors.**

UNCONFIRMED: the two-concurrent-instance case from the round-1 check (fix-list item 3 only asked
for 10 sequential; brief and REFUTE-round1 both say sequential, never concurrent — not attempted,
per the one-Chrome-at-a-time rule in this run's own brief).
