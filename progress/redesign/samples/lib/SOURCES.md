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

## Type specimen faces (round 2)

Date fetched: 2026-10-11. Source: the google/fonts GitHub repository, branch main, folder ofl/<face>/ (raw.githubusercontent.com). Files stored exactly as downloaded, unmodified, no conversion. Licence of every face: SIL Open Font License 1.1 (OFL.txt opened and read: title, permission block present). Used by samples/type.html only; nothing under app/.

Reserved Font Names declared in the OFL.txt copyright lines: marcellus = Reserved Font Name "Marcellus"; gentiumbookplus = Reserved Font Names "Gentium" and "SIL"; forum = Reserved Font Name "Forum"; gildadisplay = Reserved Font Name 'Gilda'; gfsdidot = Reserved Font Name <GFS Didot>. The other five state none. Files are unmodified, so the RFN rule is not engaged.

| Face | File | Source URL | Bytes | SHA-256 | Licence | Date |
|---|---|---|---|---|---|---|
| marcellus | fonts/marcellus/Marcellus-Regular.ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/marcellus/Marcellus-Regular.ttf | 46004 | 1cf0cd10b17d35e852729962cc1ffaffed94514895972458345e2df34abb2f81 | OFL 1.1 | 2026-10-11 |
| marcellus | fonts/marcellus/OFL.txt | https://raw.githubusercontent.com/google/fonts/main/ofl/marcellus/OFL.txt | 4430 | 715ba72697e14daa9b29a333545f69bde7c497b9f77d0a2a4c4a5a752d961801 | the licence text itself | 2026-10-11 |
| gentiumbookplus | fonts/gentiumbookplus/GentiumBookPlus-Regular.ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/gentiumbookplus/GentiumBookPlus-Regular.ttf | 818952 | fe7b64eeacc430fcf46836a6f0dfe00d2c5a15483ed36692a2a185cb23ec2a5c | OFL 1.1 | 2026-10-11 |
| gentiumbookplus | fonts/gentiumbookplus/GentiumBookPlus-Italic.ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/gentiumbookplus/GentiumBookPlus-Italic.ttf | 882904 | 7a0ab4bd78701fa46d325e362654c41a47e2a0a5cb4a3eebc94dce89c2ee7df1 | OFL 1.1 | 2026-10-11 |
| gentiumbookplus | fonts/gentiumbookplus/GentiumBookPlus-Bold.ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/gentiumbookplus/GentiumBookPlus-Bold.ttf | 834852 | b39c3fb12e2e15e2336f2ec6d051c778618ec25f7360bc4765bfe755b408c011 | OFL 1.1 | 2026-10-11 |
| gentiumbookplus | fonts/gentiumbookplus/OFL.txt | https://raw.githubusercontent.com/google/fonts/main/ofl/gentiumbookplus/OFL.txt | 4507 | c309a440be606e283ccacc746662d714b9c5b5a7a0a10dd2514b90206b55ddfe | the licence text itself | 2026-10-11 |
| forum | fonts/forum/Forum-Regular.ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/forum/Forum-Regular.ttf | 303316 | 5c9fbe9c4ce76d0269f5088d921d57e58082fd9c28433eacb6de95baf938adf8 | OFL 1.1 | 2026-10-11 |
| forum | fonts/forum/OFL.txt | https://raw.githubusercontent.com/google/fonts/main/ofl/forum/OFL.txt | 4399 | 1bfe7d2aca99042eabf37079152fef8abdda2c36dad454ae89b858a3cb1078c5 | the licence text itself | 2026-10-11 |
| alegreya | fonts/alegreya/Alegreya[wght].ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/alegreya/Alegreya%5Bwght%5D.ttf | 425288 | ba5564634b93a8f8ba57b48cd4f1ae7417d2b4656fbac779028679b00de3cf12 | OFL 1.1 | 2026-10-11 |
| alegreya | fonts/alegreya/Alegreya-Italic[wght].ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/alegreya/Alegreya-Italic%5Bwght%5D.ttf | 425852 | fa915eec76227935dc5fb678953c94b71287c360928013cfdb441dfe52f5a391 | OFL 1.1 | 2026-10-11 |
| alegreya | fonts/alegreya/OFL.txt | https://raw.githubusercontent.com/google/fonts/main/ofl/alegreya/OFL.txt | 4395 | f6f60d5d4cf4f4b1fc4e41353c897a2f5a16e6396c0cd8fa8bdfd2f4586a9a68 | the licence text itself | 2026-10-11 |
| cormorantsc | fonts/cormorantsc/CormorantSC-Regular.ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/cormorantsc/CormorantSC-Regular.ttf | 763624 | a51985a075f3884d8dc9b2d20367c51b6b05e53fdb912959acb785084579aeaa | OFL 1.1 | 2026-10-11 |
| cormorantsc | fonts/cormorantsc/OFL.txt | https://raw.githubusercontent.com/google/fonts/main/ofl/cormorantsc/OFL.txt | 4387 | 60700d351cac4650c51f3f9db318d2a420f8b45052dba2715eb5fec41f0f6956 | the licence text itself | 2026-10-11 |
| cardo | fonts/cardo/Cardo-Regular.ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/cardo/Cardo-Regular.ttf | 400468 | bcb81f376f1c3892c7026dabf2beafbd1a7ee8ae95d132ee7d4ff7d7c3988261 | OFL 1.1 | 2026-10-11 |
| cardo | fonts/cardo/Cardo-Italic.ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/cardo/Cardo-Italic.ttf | 262388 | 52c51cfde3a827dd9428511c4a968699952b8a917c5f0e97be782cbfa1880f9c | OFL 1.1 | 2026-10-11 |
| cardo | fonts/cardo/Cardo-Bold.ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/cardo/Cardo-Bold.ttf | 348320 | 6c9383b1471936ee83b08b67bf79f0ed92bee3d5e8363ec3ba21309d5a272e36 | OFL 1.1 | 2026-10-11 |
| cardo | fonts/cardo/OFL.txt | https://raw.githubusercontent.com/google/fonts/main/ofl/cardo/OFL.txt | 4372 | 8e28b778b6e1a7ff9ca72f4dee2d53120aa2856dc1bfd0be44307e365b0e45bb | the licence text itself | 2026-10-11 |
| gildadisplay | fonts/gildadisplay/GildaDisplay-Regular.ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/gildadisplay/GildaDisplay-Regular.ttf | 68020 | 8ca5475692552cd4f149bcd00099c098453c39b8541f4abe2192f84ad17a7aa0 | OFL 1.1 | 2026-10-11 |
| gildadisplay | fonts/gildadisplay/OFL.txt | https://raw.githubusercontent.com/google/fonts/main/ofl/gildadisplay/OFL.txt | 4428 | e8d94225bdcfecfb5a6e14bc0e2bb26fe48670f28ac46a7d676d9a90d8bfbe24 | the licence text itself | 2026-10-11 |
| imfelldoublepica | fonts/imfelldoublepica/IMFELLDoublePica-Regular.ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/imfelldoublepica/IMFELLDoublePica-Regular.ttf | 210736 | 481afa82a0060b3649668fa629455caeea407864d4c1f6d815380866c504df07 | OFL 1.1 | 2026-10-11 |
| imfelldoublepica | fonts/imfelldoublepica/IMFELLDoublePica-Italic.ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/imfelldoublepica/IMFELLDoublePica-Italic.ttf | 255092 | 00ac0e73855f16e7192a76bc284fb86f69b2f2c21b405e29991f99ece83d6391 | OFL 1.1 | 2026-10-11 |
| imfelldoublepica | fonts/imfelldoublepica/OFL.txt | https://raw.githubusercontent.com/google/fonts/main/ofl/imfelldoublepica/OFL.txt | 4452 | 2a3ca501fc4d5efcad9798531e3e06962b1e20c60e464f6cbd6c17630112c773 | the licence text itself | 2026-10-11 |
| gfsdidot | fonts/gfsdidot/GFSDidot-Regular.ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/gfsdidot/GFSDidot-Regular.ttf | 191168 | 4fc784ab824e8866eeef8ad55976b93e7e170fb1b8237fd4f8781b5b4dd297f9 | OFL 1.1 | 2026-10-11 |
| gfsdidot | fonts/gfsdidot/OFL.txt | https://raw.githubusercontent.com/google/fonts/main/ofl/gfsdidot/OFL.txt | 4543 | 9e19c0d2e7e7adcbe9dfd0749e34dda41e7e356e0f2cc082d61d2fc9b6e0cef7 | the licence text itself | 2026-10-11 |
| librecaslontext | fonts/librecaslontext/LibreCaslonText[wght].ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/librecaslontext/LibreCaslonText%5Bwght%5D.ttf | 126876 | c11809dbfd5445886293d89b32bfc2584075c80e77750cf1c284113e36b8b3f4 | OFL 1.1 | 2026-10-11 |
| librecaslontext | fonts/librecaslontext/LibreCaslonText-Italic[wght].ttf | https://raw.githubusercontent.com/google/fonts/main/ofl/librecaslontext/LibreCaslonText-Italic%5Bwght%5D.ttf | 176200 | 60ca1a3aade61c8c381800ca85b9b2f0fb341d89ebe065e12cd6ec2ee2e53e54 | OFL 1.1 | 2026-10-11 |
| librecaslontext | fonts/librecaslontext/OFL.txt | https://raw.githubusercontent.com/google/fonts/main/ofl/librecaslontext/OFL.txt | 4404 | a294245c822c5aa9fd9a9f3189418e99415428be5fecadf797793d5d8f6a3ad3 | the licence text itself | 2026-10-11 |

Total: 6,584,377 bytes in 27 files.
