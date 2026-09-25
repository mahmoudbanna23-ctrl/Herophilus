AGENTS.md loaded — Herophilus

## A. GAPS

1. **High · GAP: shared-device account isolation is undefined.** Evidence: `app/js/gate.js:102–120` merges cloud profiles into the device-wide roster; `:135–140` retains local progress after sign-out; `:109` syncs an already-open profile with the newly signed-in account. Session guards exist, but do not establish profile ownership. **Fix:** record account association without renaming keys; require explicit adoption before uploading local profiles to another account; offer “remove my data from this device”; test account switching, failed sign-out and cross-tab sign-out. **Phase:** P0/P1, before sync expansion.

2. **High · GAP: sync conflict semantics remain unsafe.** Evidence: `gate.js:203–222` selects several maps using the whole-state clock; answer ties favour the first argument. `quiz.js:993` deletes highlights, while merging unions map keys—an older copy can restore deleted highlights. **Fix:** define per-record revisions, deterministic ties and deletion tombstones; test clock skew, concurrent edits, repeated merges and two local tabs. Preserve existing timestamped notes and mock protections. **Phase:** P1/P9c.

3. **High · GAP: per-subject migration lacks a complete protocol.** Evidence: plan P9c promises read-back matching, but does not define partial completion, concurrent old clients, global fields, unknown question IDs or rollback. Current storage is per profile (`gate.js:171–174`), so “per subject” must preserve that boundary. **Fix:** specify versioned state/export schemas, subject paths, global-state ownership, resumable migration markers, compatibility handling and recovery fixtures. Keep `wardround.*` names. **Phase:** design before P2; implementation P9c.

4. **High · GAP: Firestore rules do not cover the proposed schema or constrain payloads.** Evidence: `progress/firestore.rules:37–57` permits UID-owned roster/profile documents and denies other paths; it checks ownership, not fields, sizes or types. Nested subject documents would be denied. **Fix:** design rules alongside paths; constrain payload shape/size; test unauthenticated, cross-user, malformed and oversized requests; record which rules revision was deployed. Define abuse controls and operation budgets. **Phase:** P9c prerequisite.

5. **High · GAP: backup is confused with replication.** Evidence: plan §7 offers Git tags and same-browser snapshots; P9c adds a second live database. Neither establishes recovery from replicated corruption, deletion or account loss. **Fix:** specify retained independent exports, restoration authority, acceptable data-loss/recovery windows and a restore drill into a clean environment. Cover code, rules, configuration and user state separately. **Phase:** P2/P9c.

6. **High · GAP: privacy and deletion require implementation, not just wording.** Evidence: P9b checks policy against transmitted data; `gate.js:906–914` deletes the live local key and requests cloud deletion, but does not remove the backup key used by `boot.js:44`. Cloud deletion failure is not surfaced there as incomplete deletion. **Fix:** define sync disclosure/choice, retention, account/profile deletion, backup expiry and durable deletion retries; prevent stale devices resurrecting deleted data. Include D1/R2 if adopted. **Phase:** P9b/P9c before release.

7. **High · GAP: content/publication rights have no release gate.** Evidence: §4 and §6 address Meshy permission and leave Lyria licensing unresolved; no equivalent clearance is specified for scanned question banks, figures, desk art or TTS outputs. **Fix:** maintain a source/asset rights register, attribution requirements and withdrawal procedure; resolve unknown permissions before distribution. Do not silently alter defective printed keys during corrections. **Phase:** P1 content gate; P6b/P7/P9b asset gates.

8. **High · GAP: reports promise a service whose operation is unspecified.** Evidence: `quiz.js:768` promises review; `:794–802` saves a report inside private progress and displays delivery language. The plan names no intake queue or reviewer. **Fix:** either provide an explicit copy-and-contact route or a consented report inbox; assign triage, response and correction ownership. Include question ID, content revision and release ID; keep correction history and stable IDs. **Phase:** P1/P9b.

9. **High · GAP: security acceptance omits important trust boundaries.** Evidence: P10 says `textContent`/`esc()` and CSP reporting; `gate.js:287–290` parses cloud state directly before merging, unlike validated imports in `boot.js:275–284`. CDN scripts have pinned URLs (`theory.js:659–661`), but the loader sets no integrity metadata (`gate.js:23–27`). **Fix:** validate cloud input; audit HTML, attribute and inline-JavaScript contexts separately; test malicious imports/content; define dependency integrity/update handling and prevent privileged credentials entering shipped files. Existing `md()` escapes text (`utils.js:6–9`); do not claim all question HTML is currently unsafe. **Phase:** P1/P10, before new remote stores.

10. **Medium · GAP: performance budgets stop at the home payload.** Evidence: P2 specifies home under 1 MB; `index.html:115–131` currently loads all subject scripts, while `:53` preloads video. No subject parse-time, memory or interaction budget is given. **Fix:** measure compressed transfer, parsing and peak memory on a specified low-end Android device and throttled network; include fonts/media, failed subject loading and progress-save latency. **Phase:** P0/P2/P5/P6b.

11. **Medium · GAP: browser support and release tests are underspecified.** Evidence: R10 distinguishes disk/Pages, but P1’s 8–15 smoke cases do not enumerate auth, sync, migration or update failures. `tools/dist-check.js:24–35` bypasses the gate; `:39` tests a disk URL. **Fix:** retain existing boot/attempt/strike checks and add named acceptance cases for real auth, blocked popup/redirect, offline restart, storage failure, migration interruption and worker update. Specify supported browser versions, including Safari/iOS installation and Android. **Phase:** P1, extended per phase.

12. **Medium · GAP: observability and cost controls lack operating decisions.** Evidence: P9c proposes 70% alerts and asks only for annual student numbers. **Fix:** estimate active users × sessions × sync operations, transaction retries, per-subject growth, media egress and five-year retention. Set spend ceilings, alert recipients, quota-exhaustion behaviour and a sync disable switch preserving local work. Define privacy-conscious diagnostics and whether usage metrics are collected at all. **Phase:** P9c.

13. **Medium · GAP: deployment and long-term ownership need runbooks.** Evidence: R8 supplies tags; P9a retains manual uploads; the J9 team sheet assigns model seats, not production custodians. **Fix:** document the exact upload artifact, exclusions, checksums, worker/rules configuration, preview auth setup, post-upload checks and rollback rehearsal. Assign human primary/backup owners for accounts, incidents, rights, reports and billing; document access recovery. Reconcile `CLAUDE.md`’s no-build rule with the existing optional packaging script and keep runtime build-free. **Phase:** P1/P9a/P12.

## B. WRONG OR RISKY in the plan

1. **High · “Sync: keep” contradicts the evidence and P9c’s redesign.** Evidence: plan §3 versus P9c and A1–A4. **Fix:** make sync correctness a prerequisite with explicit acceptance tests, rather than treating a storage rewrite as capacity work. **Phase:** P1/P9c.

2. **High · D1 primary plus Firestore secondary is premature complexity, and “newest updatedAt wins” risks lost work.** Evidence: P9c; current merges already preserve some records independently (`gate.js:213–250`). **Fix:** retain the owner’s per-subject split, first measure the single-store design, and separately justify any second store. If retained, specify authoritative revisions, idempotency, retry/reconciliation, outage behaviour and token validation. Whole-document wall-clock selection is not an adequate conflict protocol. **Phase:** P9c.

3. **High · “No upload during exams” does not prevent earlier workers activating during exams.** Evidence: R9 and P9a, which also clears old caches on activation. **Fix:** define waiting-worker behaviour, safe activation outside active study sessions, compatible open tabs, completed-cache validation and rollback retention. No deployment inside the fixed freeze windows. **Phase:** P9a.

4. **High · “Full corpus offline after one visit” conflicts with lazy loading unless download completion is explicit.** Evidence: P2 versus P9a. A visit can end before background downloads finish. **Fix:** distinguish cached subjects from a completed full download; show size, progress and readiness; resume interruptions and test eviction. Do not imply readiness merely because the shell opened. **Phase:** P2/P9a.

5. **High · Report-only CSP and a security pass after final upload are insufficient release gates.** Evidence: P10/P12. Report-only does not block violations; no reports can also mean failed collection. **Fix:** exercise malicious fixtures and prove reporting works, then enforce a compatible policy before promoting the release. Test the real worker/auth proxy and relevant headers in preview; retain post-upload checks. **Phase:** P10/P12.

6. **Medium · Several proposed safeguards overclaim or misstate current behaviour.** Evidence: P2 calls for exporting all `wardround.*` keys although validated per-profile export/import already exists (`boot.js:191–284`); P9c calls 1.2 seconds a sync interval although `gate.js:262–266` implements debounce. A mirror domain also cannot inherit permanent-origin localStorage. **Fix:** extend existing exports with scoped versioning and restore tests; use a bounded dirty-state scheduler with durable retry, treating hide/close as best effort; document mirror recovery via export/cloud and retain the permanent origin. **Phase:** P2/P9c.

## C. Fully covered checklist rows

Accessibility — **covered (R11, P3, P4, P10, P11)** at planning level; implementation evidence remains pending. Every other checklist row has a **GAP** above.

## D. UNVERIFIED

- Live deployment, deployed rules/headers, provider limits/prices, regional connectivity and licences: no network access used.
- Runtime behaviour and test results: no tests run; inspected harnesses write scratch files.
- `app/data/modules.js` and question bodies: not opened; standing `app/data/` restriction retained. Corpus counts and payload sizes were not independently measured.
- No service worker, webmanifest, `_headers` or `_redirects` appeared in the repository filename search.
- P9c’s second-store, mirror and billing proposals remain awaiting owner approval.