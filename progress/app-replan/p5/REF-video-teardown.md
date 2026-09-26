# Reference video teardown — IMG_0539.MP4 (owner, 2026-09-26)

Source: owner's phone copy of the @wearebrand.io TikTok, 24.6 s, 464x848, frames at 1 fps (scratchpad only, not committed — third-party footage). Read by Codex gpt-5.6-terra, one pass, unchecked by a second seat.

1. On screen
f001–f002: phone footage of a laptop showing a likely product/e-commerce website; cans and packaging float around large campaign type.
f003–f005: a dark, neon-purple, gaming/esports-style website with hero art, then scrollable text/content sections. Small text is too blurry to read reliably.
f006–f009: a browser-based interactive city illustration/3D or composited scene expanding as the user scrolls.
f010–f012: an illustrated studio/interior scene; a large garment/object appears, with what looks like a side control panel.
f013–f016: another cinematic portfolio/site sequence: mountain/rock image, rock close-up, then a minimal interior and dark product/campaign scene.
f017–f021: minimalist digital-products/branding website with oversized typography and floating product images.
f022–f025: TikTok outro identifying @wearebrand.io.
Overall: edited phone video demonstrating several websites/browser experiences, not a single app or screen recording.

2. Techniques and rebuilds
CERTAIN: large editorial sans typography, extreme size contrast, generous whitespace, image-led layouts, strong art direction, scroll-triggered changes. Rebuild: CSS typography/layout plus IntersectionObserver or native CSS scroll-driven animations. Cost: small–medium.

CERTAIN: image/scene swaps and progressive reveals during scroll. Rebuild: pinned full-screen sections with CSS position: sticky; canvas/image sequence or absolutely layered images animated via scroll timelines. Cost: medium.

LIKELY: layered parallax and scale/zoom-on-scroll in the city, interior, rocks, and product scenes. Rebuild: layered transparent PNG/WebP assets transformed with CSS animation-timeline: scroll(), with JS scroll fallback. Cost: medium.

LIKELY: 3D renders/WebGL or carefully composited 2D scenes, especially the floating cans, city, garment, and rocks. Rebuild: pre-rendered image sequences for reliable offline use; Three.js/WebGL only if real camera interaction is needed. Cost: medium for sequences, large for 3D.

LIKELY: pinned sections, mask/wipe reveals, and text line/letter reveals. Rebuild: sticky sections; overflow-hidden text wrappers; clip-path/transform animations tied to scroll. Cost: small–medium.

LIKELY: smooth gradients, soft bloom/glow, directional lighting, atmospheric haze, and subtle grain/colour grading. Rebuild: authored raster assets plus CSS radial/linear gradients, overlays, mix-blend-mode, blur, and SVG noise. Cost: small–medium.

NOT CONFIRMED: particles, glassmorphism, cursor effects, View Transitions, or true depth-of-field; frames are too blurry/sparse to verify.

3. Motion
Between frames, scenes expand, crop changes, objects enter, and layout content is revealed continuously rather than snapped. That implies scroll-scrubbed interpolation with eased transforms, pinned scenes, and overlapping timeline segments—not ordinary fade-in sections.

4. Why it reads pro-made
It uses deliberate composition, consistent asset perspective/lighting, restrained type hierarchy, controlled empty space, scene-specific transitions, and many small linked motions. The craft is in choreography and asset preparation, not simply neon effects.

5. Visible names
“Claude Code + WordPress =” is an added video overlay. TikTok and @wearebrand.io are visible. Other site/brand names are too small or blurry to state confidently.
