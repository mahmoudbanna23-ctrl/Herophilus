# G-perf — baseline (2026-09-25)

## Symptom (measured)

- **SUPERSEDED (Round 3):** Desktop home first load has 40 local references in `app/index.html:6,36-42,53-55,64,97,114-143`.
  Its on-disk response-byte total was reported as **26,048,019 B**: 31 JavaScript files = **25,480,595 B**,
  six CSS files = **162,319 B**, and three initially referenced media/image assets = **405,105 B**.
  **Corrected in Round 2:** 41 local references total **26,080,321 B**: 31 JavaScript files = **25,480,957 B**,
  six CSS files = **162,319 B**, and four initially referenced media/image assets = **437,045 B**.
  Command actually run: PowerShell extracted `src`/`href` from `app/index.html`, then `Get-Item`
  each local path; output: `40`, `26048019`, and JS `Sum 25480595`.
- Largest individual loaded script candidates (same command output):
  `data/questions.ent.js` 7,785,695 B; `data/questions.ophtho.js` 4,706,093 B;
  `data/questions.neuro.js` 2,524,330 B; `data/questions.peds.ep.js` 2,075,143 B;
  `data/questions.peds.ep2.js` 1,699,737 B; `data/questions.peds.js` 1,540,772 B.
- Headless Chrome desktop run (1440×1000, fresh `--user-data-dir`): DOMContentLoaded **77.4 ms**,
  `load` **78.4 ms**, splash-hidden sampling point **18,844.7 ms**, sampled peak JS heap
  **663,136 B** ← **WRONG, corrected in Round 2 below**; not sampled on the navigated page target.

## Root cause

Baseline only; no performance defect is asserted. The byte distribution is predominantly the
classic, eagerly loaded question-script set named by `app/index.html:114-132`; `boot()` starts
only after those scripts, at `app/js/boot.js:372-373`.

## Evidence

- `app/index.html:114-143` contains the 30 data/app script tags; `:36-42` contains fonts plus
  six stylesheets; `:53-55`, `:64`, and `:97` add the first-load video/poster/icons.
- `app/js/boot.js:373-399` calls `bootstrapProfiles()` then, when cloud is enabled, races restore
  against a 15,000-ms timeout before `hideSplash()`; otherwise it calls `hideSplash()` immediately.
  Therefore the 18.845-s splash sample is not parse time alone.
- Method: a temporary in-memory Node HTTP server served `app/`; Chrome was launched headless with
  CDP (`--remote-debugging-port=0`, fresh profile, no extensions), `Page.navigate` loaded `/index.html`;
  `Runtime.getHeapUsage` was polled until `#splash.hide`; Navigation Timing supplied DCL/load.
  No repository file was created or changed by the measurement commands.

## Proposed fix

none — baseline

## Check that proves the fix

Re-run the CDP method above twice per profile, with a fresh Chrome profile each time: (1) desktop
1440×1000 and (2) `Emulation.setCPUThrottlingRate({rate:4})` plus
`Network.emulateNetworkConditions({latency:400,downloadThroughput:50000,uploadThroughput:50000,
connectionType:'cellular3g'})`. Record `performance` resource `transferSize`, navigation timing,
and the maximum polled `Runtime.getHeapUsage.usedSize`; retain every resource path/byte pair.

## Round 2 (2026-09-25) — heap + transfer re-measured on the navigated target

Method (repeatable; probe script lived only in `%TEMP%`, never the repo — brief `tools\dist-check.js`
pattern reused): a Node HTTP server (random free port) serves `app\` verbatim; headless Chrome
navigates `Page.navigate` straight to `http://127.0.0.1:<port>/index.html` — **the same page target**
that `Network`/`Runtime` are already enabled on, never `about:blank`. `Network.requestWillBeSent` /
`Network.loadingFinished` (`encodedDataLength`) capture per-request transfer; `Runtime.getHeapUsage`
is polled every 300 ms for a fixed window and the max `usedSize` kept, matching the refuter's own
method; DCL/load come from `performance.timing` evaluated in-page after `Page.loadEventFired`.

- **Media, corrected**: exact byte count (`wc -c`, not `ls -la` rounding) confirms the refuter exactly
  — `ambient-library.jpg` 31,940 + `ambient-library.mp4` 328,896 + `icon-180.png` 58,169 +
  `icon-96.png` 18,040 = **437,045 B, 4 files**. The old **3 files / 405,105 B** in "Symptom" above
  was wrong (missed `icon-96.png`, referenced `app\index.html:64,97`).
- **JS/CSS, essentially unchanged**: disk-stat re-check of all 31 script `src` + 6 stylesheet `href`
  in `app\index.html` gives JS **25,480,957 B** (was 25,480,595 — 362 B drift, a file changed since
  the original run, not a measurement fix) and CSS **162,319 B** (unchanged, confirmed).
- **Heap, corrected — the old number was wrong**: desktop run, 20 s poll on the navigated target,
  peak `usedSize` **47,318,896 B** (~47.3 MB). This is the same order of magnitude as the refuter's
  46,109,024 B (both far above the old 663,136 B); the residual ~1.2 MB difference is normal run-to-run
  GC/timing variance, not a method disagreement.
- **Transfer, measured (new)**: desktop CDP `Network` capture over the same navigated target totalled
  **26,652,934 B across 48 requests**. This is higher than the 26,079,959 B local-file content
  inventory because `encodedDataLength` includes HTTP framing, not file bytes alone — expected, not a
  defect. One artifact found and excluded from the headline number: the minimal probe server has no
  `Range`/206 support, so `ambient-library.mp4` was double-fetched (658,132 B captured vs 328,896 B on
  disk) — a probe-server limitation, not a real transfer defect; production (Cloudflare Pages, which
  does serve Range) would not double-fetch it. Use the disk-stat 437,045 B for media, not the
  network-captured mp4 figure.

  **Round 3 correction:** The preceding HTTP-framing explanation is **superseded**. The corrected
  local-file inventory is **26,080,321 B**, so the capture exceeds it by **572,613 B**. The MP4
  double-fetch accounts for **329,236 B** of that difference; the remaining **243,377 B** is
  **unexplained**. This run retained no per-URL request/size list, so no attribution to HTTP framing
  is supported.

## Unconfirmed

- **Slow-3G + CPU-4× — attempted, still not fully observed** (was UNCONFIRMED in Round 1, stays
  UNCONFIRMED for completion in Round 2, now with a bounded reason instead of a runner timeout): with
  `Emulation.setCPUThrottlingRate(4)` and `Network.emulateNetworkConditions({latency:400,
  downloadThroughput:50000,uploadThroughput:50000,connectionType:'cellular3g'})` on a fresh profile,
  a 45 s poll captured only 12/48 requests and 437,607 B (html+css+the poster jpg+one small js file);
  `load` never fired, so DCL/load and heap-under-load are not observed. At the capped 50,000 B/s
  download throughput, the **26,079,959 B eager desktop payload extrapolates to ~522 s (~8.7 min)**
  to finish transferring alone, before boot can run — that scale is the finding itself, not a gap in
  the method; a full run to completion was out of this job's budget.
- The desktop resource-timing array returned empty on file:// in Round 1; Round 2's HTTP-server
  method reads `Network.loadingFinished` instead, which **is** now a real observed CDP transfer sum
  (26,652,934 B, see above) — this replaces the old "transfer totals remain UNCONFIRMED" line.
