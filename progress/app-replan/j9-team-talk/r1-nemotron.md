**1. Fork positions**

1. **Corner figure on thresholds.** The plan already specifies this (§4: "she keeps today's small corner figure and speaks only on f20 thresholds"). Removing her entirely loses the companion role the owner defined; the corner figure is minimal, non-intrusive, and maintains continuity.

2. **Separate element beside the vessel (2D path).** The 3D pilot (P7) is owner-gated and may not proceed. A separate element works with current PNGs, requires no drawing on her art, and is trivial. Pre-rendered states only make sense if 3D happens — don't build for a maybe.

3. **Sound to drop IndexedDB.** On `file://` the question files are already local via `<script>` tags; on Pages the service worker (P9) caches for offline. IndexedDB would be a third cache layer adding complexity for no benefit. The f21/f22 double-cache gap is resolved.

4. **Baked-in desk video (H.264 mp4).** Explicitly measured to autoplay on `file://` (critical constraint). Transparent video needs two formats (WebM VP9 alpha + HEVC alpha), untested on `file://`, adds compositing complexity. Baked-in matches the single-desk ruling and avoids Safari/alpha problems.

5. **P0 and P1 before P3.** P0 fixes known broken checks and F-on-✕/c2-1 bugs that affect quiz behavior. P1 establishes the gate every later phase must pass. Building mock-ups on a broken baseline wastes owner review time.

6. **Keep the drop, marked owner-overrulable.** Retrospective lessons and "calm/professional" target argue against neon. Claude's call was deliberate. But the owner's recent preference is a signal — D2 already notes "owner may overrule." Let P3 mock-ups surface it; don't reopen debate now.

7. **Right.** Exams are high-stakes; the owner studies on the hosted version. Deploy risk (cache invalidation, SW update, regressions) on exam eve is unacceptable. Local work continues. The