# Outside-world sweep — third design input

## SWEEP 1 — the tells that say "AI made this"

Ranked by cross-source agreement, strongest first.

**1. shadcn/ui defaults left untouched** — slate/zinc neutrals, uniform 8px radius, muted indigo/zinc accent, Inter at default sizes. Most-repeated tell in this sweep. developersdigest.tech: "every AI-generated landing page without stylistic intervention converges on the shadcn visual." freedesignmd.com names the same defaults and calls the result "competent and forgettable," prescribing five token edits: swap the neutral scale (e.g. warm bone `oklch(0.97 0.01 80)`), move radius off the safe middle (0, 1rem, or 999px), pair a deliberate display+body font instead of Inter twice, pick one saturated brand accent, add one signature token the library doesn't ship. https://freedesignmd.com/blog/shadcn-looks-generic , https://www.developersdigest.tech/blog/ai-design-slop-and-how-to-spot-it

**2. "AI purple" / indigo-on-dark palette.** Named independently by two sources: a specific lavender-purple in gradients (developersdigest.tech), and the "Magic Blue" `#5E6AD2` Linear-derived indigo normalized by Tailwind's default palette and Shopify Polaris (dev.to/jaainil). A Chrome extension ("No More Purple") exists specifically to strip this. Real agreement, not one opinion. Fix cited: define brand tokens first, generate ramps in OKLCH/HCT, test gradients for 4.5:1 body-text contrast. https://dev.to/jaainil/ai-purple-problem-make-your-ui-unmistakable-3ono , https://www.developersdigest.tech/blog/ai-design-slop-and-how-to-spot-it

**3. Colored 3–4px left border stripe on cards** — developersdigest.tech: "almost as reliable a sign of AI-generated design as em-dashes for text." Single strong source, not corroborated elsewhere here — mark as plausible, unconfirmed by a second source. https://www.developersdigest.tech/blog/ai-design-slop-and-how-to-spot-it

**4. Inter used for both headline and body ("the Helvetica of the LLM era"), plus monospace body copy used decoratively** so the page "reads like a terminal." Alternatives named: Geist, Söhne, Untitled Sans; reserve monospace for actual code. https://www.developersdigest.tech/blog/ai-design-slop-and-how-to-spot-it , https://solodesign.cc/blog/ai-design-slop-the-tells/

**5. Decorative "eyebrow" labels** — uppercase micro-label with a leading dot and trailing hairline, plus all-caps headers throughout. Two sources, different names for the same pattern ("Eyebrow Chrome" vs. all-caps labels). Fix: cut the decoration, use real type hierarchy. https://solodesign.cc/blog/ai-design-slop-the-tells/ , https://www.developersdigest.tech/blog/ai-design-slop-and-how-to-spot-it

**6. Glassmorphism cards and colored glow/box-shadow halos** behind hero elements or buttons in dark layouts — named independently by both articles. Two-source agreement.

**7. The whole compositional template** — centered hero, badge above H1, three-feature-card grid, numbered "1‑2‑3" steps, stat-banner row — named as a set by developersdigest.tech, consistent with venngage.com's explanation that AI output is the statistical average of millions of landing pages. One direct source plus one consistent secondary.

**8. Emoji as UI icons.** One source (developersdigest.tech), not independently corroborated here, though consistent with this user's own standing design rule.

**9. Staggered load animations with no reduced-motion gate** — solodesign.cc, tied explicitly to accessibility (`prefers-reduced-motion`). One source.

**Unconfirmed:** the "22%/32%/46% slop" statistic attributed to venngage.com was not verified by direct fetch — treat as unconfirmed. Raw HN/Reddit comment threads (the brief's first-choice source type) did not yield fetchable content within budget — everything above comes from practitioner blog writing (dev.to, solodesign.cc, freedesignmd.com), which is real but one step removed from raw forum argument.

---

## SWEEP 2 — steal this / skip this

**STEAL — McMaster-Carr-style dense grid, no card chrome.** Repeatedly named on an Ask HN thread on high-density UI as the reference example: "a lot of information at once" while staying "clean, functional," Tufte-influenced, grid-aligned, minimal decorative whitespace or rounded corners. Old (pre-redesign) Reddit praised on the same grounds. Survives the constraint fully — plain semantic tables/CSS grid, no library. https://news.ycombinator.com/item?id=43925732

**STEAL — terminal-style monitors (btop, htop) and pro creative tools (Blender, DAWs) as density models:** collapsible sections, strict row alignment, color reserved for state not branding. Generalizes to a chapter index: group-and-collapse, align question-count/done-state on a grid, color only for answered/flagged/new. Same HN thread, fully offline-compatible.

**SKIP as literally applied — Matthew Ström's "UI density" essay.** On direct fetch it is long on framework (Gestalt proximity/similarity, a latency-response table) and short on numbers — no padding values, no type scale, no border weights. Keep the vocabulary ("density = value delivered ÷ time+space occupied"), not the specifics. https://mattstromawn.com/writing/ui-density/

**STEAL, with a correction — avoid pure #000 backgrounds; use dark gray, target 15:1–18:1 contrast rather than maxing at 21:1.** A generic dark-mode piece argued for 21:1; Nielsen Norman Group's dedicated research is more specific and more credible, and names concrete failure modes worth stealing directly: non-transparent image backgrounds go tacky on dark canvases (use SVG/WEBP/transparent PNG, never JPG); "lighter shadow on black" elevation fails — darkest tone for background, lightest for foreground, never the reverse; thin font weights disappear on dark backgrounds while the same weight reads bolder light-on-dark than dark-on-light, so a dark type scale needs its own weight tuning, not a straight color-swap; thin gray dividers/card borders become invisible, "undermining the Gestalt principle of common regions" — worth a direct check on any hairline-token family in dark mode. Pure CSS, fully offline-compatible. https://www.nngroup.com/articles/dark-mode-users-issues/

**SKIP — "Inter for readability" as a blanket dark-mode rule.** Appears in generic roundups, but it's the same font Sweep 1 flags as tell #4. Not a real contradiction: Inter itself is fine, using it as the unexamined default is what reads as generic. Both rules point at "choose deliberately," not at Inter specifically.

**STEAL — enforce a hard size/scope limit per unit of study material.** A spaced-repetition design essay argues the whole mechanism depends on a constraint paper index cards enforced automatically ("you can't put a paragraph on one"); most apps silently drop it by allowing unlimited note length, degrading active retrieval into passive skimming. It also names oversized review queues as a specific failure: "when the algorithm is scheduling dozens of cards a day, the queue feels like email." Mostly a content-authoring lesson, not a CSS one. https://www.notedexapp.com/blog/what-spaced-repetition-is-actually-for

**STEAL — measured evidence that card *volume*, not time pressure, is the top reported Anki barrier.** A medical-student survey (Indiana University School of Medicine, via search-tool summary, not directly fetched) reports "overwhelmed by the number of cards" at 65.7% (N=71), "information overload" 40.0% (N=41), "not enough time" 37.0% (N=40) — overload beats time. Argues for surfacing progress in chunked form ("12 of 30 this session") rather than a raw global due-count. Exact Ns not independently re-verified against the primary paper. https://scholarworks.indianapolis.iu.edu/items/b2220124-2b3c-4eb9-85a3-e9ad7ab41722/full

**Weaker-confidence, same direction — Anki's stock interface is separately called hard to learn**, per a search-indexed (not directly fetched — 403 on WebFetch) medical-student forum thread describing "the least intuitive and user-friendly UI." Consistent with the independently-confirmed fact that Anki onboarding for first-years runs multi-hour formal training sessions — evidence the interface doesn't teach itself, though the direct quote is second-hand. https://forums.studentdoctor.net/threads/i-hate-anki-am-i-crazy.1349771/

**STEAL — RemNote's own trade-off: praised for power, penalized for exposing all of it at once**, described as "cluttered" with a "steep learning curve" for first-time users. Lesson for a 4-module/153-chapter app: keep configurability behind progressive disclosure, don't surface it all at module-select. https://minutereview.substack.com/p/remnote-futuristic-note-taking

**STEAL — TiddlyWiki as the strongest precedent that "single HTML file, no build, fully portable" is a respected pattern, not an apology.** Its own community and an independent review both frame it as a feature: emailable, USB-portable, diffable with any text tool, and specifically that "the core concepts are well chosen, so it doesn't force you to work the way the designer decided you ought to work" — the closest direct precedent found for this app's own offline/`file://`/no-build constraint. https://talk.tiddlywiki.org/t/the-philosophy-and-design-of-the-single-html-file-wiki/11210 , https://hackaday.com/2020/02/14/it-aint-over-til-the-paperwork-is-done-test-driving-tiddlywiki/

**Gaps, stated plainly rather than filled:** targeted searches for specific UWorld/Amboss interface complaints (site:reddit.com/r/medicalschool and general web) turned up nothing fetchable within budget — a real gap, not evidence complaints don't exist. Likewise, no well-regarded Show HN thread on a timed-exam/quiz interface with substantive comment discussion was found; a title match existed but its comments could not be confirmed. Both categories should be treated as **not covered** by this sweep rather than quietly assumed clean.
