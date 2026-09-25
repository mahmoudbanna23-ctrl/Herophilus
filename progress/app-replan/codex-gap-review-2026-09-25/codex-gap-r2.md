AGENTS.md loaded — Herophilus

**C1 — HOLD.** Revisions everywhere are unnecessary, but existing timestamps do not cover every independently edited record. `gate.js:221–222` merges `srs`, `hl`, `flags`, `conf`, `days` and `sched` using the whole-state clock. Example: device A flags question X; device B retains X=false, then answers another question in the same subject. B’s newer state overwrites A’s flag. Per-subject documents do not prevent this. Confidence also changes inside an answer without advancing its timestamp (`quiz.js:526–536`). Schedule marks have actual deletions (`sessions.js:268,366`), outside the proposed tombstone list. Accept record clocks plus deterministic ties instead of a universal revision system, provided every independently mutable record and deletion is covered and clock-skew behaviour is explicit.

**C2 — CONCEDE.** Taking the supplied owner clearance ruling as the project’s authority, generated-asset register + source-material attestation + withdrawal procedure is sufficient as an internal release gate. Make the attestation identify the covered material/release and intended distribution, including figures; record any required attribution or restrictions. This records the owner’s clearance claim, not independent legal clearance. The plan already places a pre-upload licence gate on Meshy (§4) and identifies unresolved Lyria licensing (§6). Apply the generated-asset gate before external upload where relevant, and before shipping.

**C3 — CONCEDE.** A copy-and-contact route is proportionate; no inbox server is necessary. Include an actual owner-controlled destination and leave sending to the student. Copy/open actions must not display “delivered” or “review pending.” Evidence: the present report is stored in private progress (`quiz.js:797–798`); that is not an intake mechanism. The proposed identifiers supply useful correction context without backend work.

**C4 — HOLD.** No in-app usage metrics is acceptable. Dashboards and billing alerts address monitoring, but a client-read JSON switch is not an enforceable spending stop: an offline, stale or uncooperative client may never read it. The current push path writes directly through Firebase (`gate.js:282–294`). Define refresh/cache/failure behaviour and put a tested provider-side write-disable procedure in the runbook. Also specify the spend threshold, alert recipient and quota-failure behaviour. No telemetry service is required.

**C5 — CONCEDE.** One owner plus a runbook and sealed recovery document is the honest minimum. I withdraw the backup-human requirement. Keep recovery material accessible independently of the accounts/device it recovers, include recovery codes where supported, and rehearse recovery. The plan’s §7 Git tags cannot recover hosting or Firebase account access. Explicit limitation: owner incapacity can leave service recovery unavailable indefinitely; do not promise staffed continuity.

**C6 — HOLD.** The prompt handles an *unlinked* profile, but not a profile already linked to account A when account B signs in. Persist the owning UID and enforce it on profile selection, roster writes and progress uploads; changing ownership requires an explicit action. Evidence: `afterSignIn()` immediately syncs an open profile (`gate.js:109`), while `docRef()` combines the current account with the selected profile (`:171–174`). Optional device removal is useful but cannot enforce isolation when declined. Also surface failed sign-out: the existing catch silently ignores it (`:139`).

**C7 — HOLD: choose (a), conditional on provider capability and cost confirmation.** A scheduled export counts only with retained historical copies, appropriate access separation and a clean restore drill. Current provider requirements remain UNVERIFIED under this no-network brief. Option (b) is a valid $0 fallback only if described as **no operator-managed recovery guarantee**: multi-device copies can replicate corruption/deletion, and exports depend on student action (`boot.js:191–195`).

For daily successful exports, promise only a **target** of losing at most 24 hours of cloud-committed progress, contingent on export success monitoring; unsynced work is excluded. Establish restoration time from a drill, not an estimate. Under (b), recovery reaches only the last usable user export; potential loss and restoration time are unbounded.

**ACCEPTED items requiring earlier placement**

- **A6:** implement existing local-backup deletion and failure reporting in P1, not merely P9b; extend deletion to subject documents in P9c.
- **A9:** cloud-input validation belongs in P1 because that trust boundary exists today. SRI belongs before the next release using the loader.
- **A10:** establish device/network baselines in P0 and apply budgets in each media/loading phase, including P6b.
- **B1:** make sync correctness a P1 exit condition; P9c remains the storage migration.
- **B5:** enforcement and reporting proof must precede promotion of any release shipping the new CSP, rather than wait for P12.

Other accepted placements stand: A3 design before P2; A4 with P9c schema work; A11 in P1 and extended per phase; B2 in P9c; B3 in P9a; B4 in P2/P9a; B6 in P2/P9c.

**NEW**

1. Schedule marks use mutable array indices: deleting an item renumbers keys (`sessions.js:341–348`). Concurrent offline edits can therefore target different items under the same key. Give schedule items stable identities before claiming safe schedule merging; timestamps alone cannot repair identity collisions.

Read-only local inspection; no edits, tests, git or network.