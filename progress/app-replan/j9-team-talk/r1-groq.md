**1. Fork positions (one‑sentence pick + reason)**  

1. **Mascot on quiz screens – corner figure** – The mascot already “speaks only on thresholds”; keeping a tiny, silent corner figure preserves the companion feel without cluttering the quiet exam‑like UI (the plan already mandates “scene absent” on quiz).  

2. **Water‑level display – separate element** – The 2‑D element can be added beside the vessel with a simple CSS transform; it works now and does not require the heavyweight 3‑D pipeline that the “five pre‑rendered states” would lock in before the pilot is even approved.  

3. **Drop IndexedDB cache** – ✅ Agree. All data lives locally on disk; the service‑worker cache on Pages covers the hosted case, eliminating double‑caching and the extra code‑path that was a source of bugs (see §3 “Data loading”).  

4. **3‑D mascot delivery – plain H.264 mp4 with background baked in** – This works everywhere (including Safari and `file://`) and respects the “no‑alpha” rule; the transparent‑video option adds browser‑specific complexity with no perceptible benefit.  

5. **Phase order – baseline (P0/P1) before mock‑ups (P3)** – The baseline establishes a green‑check foundation and root‑cause discipline (R3). Building mock‑ups on a shaky base would risk rework once hidden bugs surface.  

6. **Neon edges – keep them dropped** – The rules section already declared “neon edges DROPPED” superseding the earlier owner comment; reverting would re‑introduce a visual element that the team deliberately eliminated for calmness.  

7. **Exam‑eve freeze (R9) – keep it** – Deploying on the day before an exam risks a broken build affecting study time; the rule is already codified and matches the owner’s risk‑aversion.  

8. **Missing / mis‑ordered items** – *a)* The accessibility work (P10) should be introduced **before** the final theme switch (P11) to catch any colour‑contrast regressions early. *b)* The licence decision for the 3‑D pilot (P7) is a gating decision that ought to be recorded as a separate “owner‑approval” item; otherwise the pilot could proceed without legal clearance.  

---

**2. Worker assignment per phase**

| Phase | Best worker | Why |
|------|--------------|-----|
| **P0** | **Careful reviewer model** (Opus‑refuter) | It only needs root‑cause analysis and documentation; no code changes, just verification of existing checks. |
| **P1** | **Cheap single‑shot model call** (generate validator script) | The validator is a straightforward static rule set; a one‑off generation plus human sanity‑check is sufficient. |
| **P2** | **Coding agent with repo access** | Implements `data/manifest.js` and script‑injection logic; requires file edits and testing against the real payload size. |
| **P3** | **Human owner** | Mock‑up selection is a subjective visual decision limited to three options; only the owner can give the final pick. |
| **P4** | **Coding agent** | Builds UI components (buttons, chips, borders) – deterministic code change with clear spec. |
| **P5** | **Coding agent** | Constructs the home layout (desk band, candle, list); requires DOM/CSS work that can be automated. |
| **P6** | **Coding agent** | Adds voice hooks, placement, water‑level element – pure implementation against the existing `clepsydra.js`. |
| **P7** | **Human owner (approval) + coding agent** | Owner must approve the Meshy licence and visual fidelity; the coding agent then swaps in the video assets. |
| **P8** | **Coding agent** | Adds static reference panel and trends dashboard – pure UI + simple calculations. |
| **P9** | **Coding agent** | Generates `manifest.webmanifest`, `sw.js`, and auxiliary pages; no design judgement needed. |
| **P10** | **Careful reviewer model** | Runs accessibility audits, CSP report checks, and counts inline handlers – a verification‑heavy step. |
| **P11** | **Coding agent** | Switches CSS variables for light theme and validates contrast – straightforward code change. |
| **P12** | **Human owner** (final sign‑off) **+** reviewer model (full diff) | The owner decides “it feels made”; the reviewer confirms no stray regressions. |

---

**3. What I cannot do / do not know (seat limits)**  

- **I have no repository access**, so I cannot inspect the current file structure, confirm that `clepsydra.js` contains the exact line numbers cited, or verify that `data/manifest.js` will stay under 1 MB after injection.  
- **I cannot run any code** (e.g., test `file://` video autoplay, service‑worker caching, or the Node validator) – all performance and compatibility claims must be verified by a coding agent or the owner.  
- **Licensing status of Meshy outputs** is unknown; I can only flag that owner approval is required (see Fork 8).  
- **Browser‑specific behaviour** (e.g., Brave shield interaction with WebGL, font loading under `file://`) is mentioned as “UNVERIFIED” in the plan; I cannot confirm it without a live test environment.  
- **Battery impact measurements** (candle animation, 3‑D loops) are referenced but not quantified; I cannot guarantee that the added video won’t exceed the owner’s battery‑life tolerance.  

*Assumption*: the owner will provide the final visual mock‑up selections and licence decision when the respective phases are reached.