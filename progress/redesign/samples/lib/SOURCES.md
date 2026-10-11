# Motion libraries - sources

Date fetched: 2026-10-11. Classic builds only (UMD / IIFE), loaded with plain script tags, no CDN at run time.
Sizes are exact bytes, hashes are SHA-256, both measured from the files on disk.

## GSAP 3.15.0

- Source: https://registry.npmjs.org/gsap/-/gsap-3.15.0.tgz (official GreenSock npm package; tarball sha512 checked against the registry)
- Licence: Standard "no charge" license, https://gsap.com/standard-license (the package ships no licence file; URL recorded only)
- Total: 158,872 bytes

| File (gsap/) | Bytes | SHA-256 |
|---|---|---|
| gsap.min.js | 72927 | 92bb9a96476f983d212a2bc4f54c889039c1696dd4461d40a736860938570fbb |
| ScrollTrigger.min.js | 44575 | b0b14d67b55b0c43c756ac0b106cfcb09d0879945f6ead64451065b0672916a2 |
| Flip.min.js | 25534 | cbe3ca726350f8d230da38a14ce2384e7772e05a45cee6144dd7fe6dde868c2f |
| DrawSVGPlugin.min.js | 4351 | beb19529f54c1212f1f5117d027be01afda2f363a4926d32aa979bc11140edc1 |
| CustomEase.min.js | 7143 | 466e426a5c60c21c94b15a30a3dffacac9bb39ce8f4e07d071d7d4bb1be43390 |
| CustomBounce.min.js | 2068 | e6c138934bbf4c25a0bfdba616aa6114da2641f86c9ee1fffdbf6b6f57ff0608 |
| CustomWiggle.min.js | 2274 | 606fa03b6e37dbf4d12c3237a1967c3ed9a016bbd1ac600bbe6621673c7935d6 |

## Lenis 1.3.26

- Source: https://registry.npmjs.org/lenis/-/lenis-1.3.26.tgz (official npm package; tarball sha512 checked against the registry)
- Licence: MIT (full text in lenis/LICENSE)
- Total: 25,079 bytes for the three code/style files (26,175 with LICENSE)

| File (lenis/) | Bytes | SHA-256 |
|---|---|---|
| lenis.min.js | 18722 | 53195c9797e7ce7bf9d7fa9242b08209e57f46de4c9dac126a6494fa780e3346 |
| lenis-snap.min.js | 5844 | 510e75108ec32d5f8ba239f63724f6cf89a12847e599839a8548b59d42f99b54 |
| lenis.css | 513 | 2f668ae84a668327f246faf8a770383a2bf69196d214290fbc4d5548910606c5 |
| LICENSE | 1096 | bba15b1137346a73ed8c35e7f20961a69e0ed842d956a50339240c3e7b08c089 |

Globals: `gsap`, `ScrollTrigger`, `Flip`, `DrawSVGPlugin`, `CustomEase`, `CustomBounce`, `CustomWiggle`, `Lenis`, `Snap` (Lenis snap add-on).

## GSAP 3.15.0 - five more plugins (added 2026-10-11, for motion-more.html)

- Source: the same saved tarball (gsap-3.15.0.tgz from the official npm package, saved earlier at `D:\scratch 2026\redesign\dl-gsap\gsap.tgz`, SHA-256 d2e33ad202d4811e9084883f7ff9a27967ac4095caef51ca4c9d20697a253b1c measured now). Unpacked into a fresh scratch folder, nothing run from inside it; only the `dist/` classic minified builds below were copied out. No download this session. The registry sha512 check was done when the tarball was first fetched, not repeated now.
- Licence: same as above (Standard "no charge" license, https://gsap.com/standard-license).
- Total: 94,026 bytes

| File (gsap/) | Bytes | SHA-256 |
|---|---|---|
| SplitText.min.js | 7732 | 419f7027a5f086a12cb7988736d8fdd3a6ed2200229661de25b6628ca7ced344 |
| MotionPathPlugin.min.js | 22002 | ace44a07c6c179f5347d9b46a152d468e4c9f272ee0d68bf0354e00d60000693 |
| Draggable.min.js | 35762 | eb28ff7ac2d320ba24a5c065563fcd8f61f2df9d7574b175b9b30942e5867e8c |
| InertiaPlugin.min.js | 7335 | 5ddbc518fe02e79d66713b8af6fab0b91ee5eb58ef3beaf589b70fdfb824733f |
| MorphSVGPlugin.min.js | 21195 | 19c891a412240d8521b13330813d9b551ea5b0f707907c365ffecaf1dfa0f5cf |

Globals: `SplitText`, `MotionPathPlugin`, `Draggable`, `InertiaPlugin`, `MorphSVGPlugin`.

## anime.js 4.5.0 (added 2026-10-11, for motion-anime.html)

- Source: https://registry.npmjs.org/animejs/-/animejs-4.5.0.tgz (official npm package; tarball 514152 bytes, sha512 integrity sha512-NQimYX+lz8WaXonGS9zVVoviCIAjONeJayxacUditaivYLqyXgGjFKjuyl0aUUhFKm5MriX9ty1TGovNzoJQWA== re-checked against the saved file this session)
- Unpacked into a fresh scratch folder, nothing run from inside it; only the classic UMD minified build and the licence were copied out.
- Licence: MIT (full text in animejs/LICENSE.md)
- Total: 119,118 bytes (118,043 code + 1,075 licence)

| File (animejs/) | Bytes | SHA-256 |
|---|---|---|
| anime.umd.min.js | 118043 | 8d5b3a58a1f64023a04a4cedeef135a2263b18da04b35177ac13438a0bad033b |
| LICENSE.md | 1075 | 3f3e835a9952cfc2a6ca836fb95b3257c981f24fa3ef51249055acb09931897b |

Global: `anime` (v4 API: `animate`, `stagger`, `createTimeline`, `spring`, `svg.createDrawable`, `utils`). `createSpring` is still exported but deprecated and logs a console warning; the page uses `spring()`.
