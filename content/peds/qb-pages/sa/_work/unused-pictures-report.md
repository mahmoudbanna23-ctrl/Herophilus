### q-pd-sa-12-1.jpg

1. Picture record — `content/peds/qb-pages/sa/_work/pics/pictures.json:21-29`:
   > {
   >   "id": "pedsa-b2-8-3",
   >   "page": 12,
   >   "fig": "Fig. 2.7",
   >   "image": "q-pd-sa-12-1.jpg",
   >   "imgAlt": "Annotated diagram of the lungs and chest with examination findings",
   >   "how": "crop",
   >   "looked": true
   > },
2. Printed question `2.8.3`, staging id `pedsa-b2-8-3`: the staged figure map records Fig. 2.7 at p.12 on the QUESTION side (`content/peds/qb-pages/sa/_work/sa-book.before-18-7.js:14`); the stem says the findings are shown in Fig. 2.7 (`book/p0011.R.txt:47-54`). `Self Assessment Book.pdf p.11 2.8.3`; figure p.12.
3. Merged into live entry `pedep2-mf1-15` in `app/data/questions.peds.ep2.js:5275-5281`, per `content/peds/qb-pages/sa/_build/alsoin-plan.json:1797-1800`. It has no `image` field in that entry (lines 5275-5282).
4. Annotated lung/chest diagram, frontal view. Crop is clean: whole figure, no text cut through or missing.
5. Unused because the folded live entry has no image even though this is its question-side figure. **ATTACH to `pedep2-mf1-15`** — proposed `imgAlt`: `Annotated diagram of the lungs and chest, frontal view.`

### q-pd-sa-43.jpg

1. Picture record — `content/peds/qb-pages/sa/_work/pics/pictures.json:102-111`:
   > {
   >   "id": "pedsa-b7-3",
   >   "page": 43,
   >   "fig": "Fig. 7.5",
   >   "image": "q-pd-sa-43.jpg",
   >   "imgAlt": "Skull X-ray, lateral view, with an arrow",
   >   "how": "crop",
   >   "looked": true,
   >   "note": "figure printed with the answer explanation only; parent decides whether it belongs on the question"
   > },
2. Printed question `7.3`, staging id `pedsa-b7-3`: its figure map records Fig. 7.1 at p.39 on the QUESTION side and Fig. 7.5 at p.43 on the ANSWER side (`content/peds/qb-pages/sa/_work/sa-book.before-18-7.js:103`). The answer text introduces Fig. 7.5 under 7.3 (`book/p0043.L.txt:53-57`). `Self Assessment Book.pdf p.39 7.3`; answer figure p.43.
3. New entry `pedsa-b7-3` in `app/data/questions.peds.sa.js:7465`; current `image` is `q-pd-sa-39` (same entry, image field at line 7481). The ruling is: “Ruled NOT attached: … the answer figures of `pedsa-b7-3` …” (`progress/ledger.md:2162-2165`).
4. Skull radiograph, lateral view. Crop is clean: whole figure, no text cut through or missing.
5. Unused because it is an answer-side second figure and the entry already displays its question-side image. **LEAVE UNUSED** — answer-side figure; the renderer has one `q.image` field.

### q-pd-sa-59.jpg

1. Picture record — `content/peds/qb-pages/sa/_work/pics/pictures.json:184-193`:
   > {
   >   "id": "pedsa-b9-15-4",
   >   "page": 59,
   >   "fig": "Fig. 9.8",
   >   "image": "q-pd-sa-59.jpg",
   >   "imgAlt": "Clinical photograph of a child's face, frontal view",
   >   "how": "crop",
   >   "looked": true,
   >   "note": "figure printed with the answer explanation only; parent decides whether it belongs on the question"
   > },
2. Printed question `9.15.4`, staging id `pedsa-b9-15-4`: its figure map places Fig. 9.8 at p.59 on the ANSWER side (`content/peds/qb-pages/sa/_work/sa-book.before-18-7.js:144`), and the answer text says “See Box 9.3 and Fig. 9.8” (`book/p0059.txt:54-58`). `Self Assessment Book.pdf p.54 9.15.4`; answer figure p.59.
3. New entry `pedsa-b9-15-4` in `app/data/questions.peds.sa.js:8002`; it has no `image` field. The ruling is: “Ruled NOT attached: … `pedsa-b9-15-4` (answer-only figures)” (`progress/ledger.md:2162-2165`).
4. Clinical photograph of a child's face, frontal view. Crop is clean: whole figure, no text cut through or missing.
5. Unused because it is an answer-side figure that would give away the answer with the stem. **LEAVE UNUSED** — answer-side figure that gives the answer away.

### q-pd-sa-60.jpg

1. Picture record — `content/peds/qb-pages/sa/_work/pics/pictures.json:194-203`:
   > {
   >   "id": "pedsa-b9-16-3",
   >   "page": 60,
   >   "fig": "Fig. 9.9",
   >   "image": "q-pd-sa-60.jpg",
   >   "imgAlt": "Diagram of chromosome 15 inheritance in two family pedigrees",
   >   "how": "crop",
   >   "looked": true,
   >   "note": "figure printed with the answer explanation only; parent decides whether it belongs on the question"
   > },
2. Record id `pedsa-b9-16-3` is printed question `9.16.3` (`content/peds/qb-pages/sa/_work/sa-book.before-18-7.js:148`; `Self Assessment Book.pdf p.55 9.16.3`). The cached p.60 answer text places Fig. 9.9 under answer `9.16.4`, not 9.16.3 (`book/p0060.L.txt:39-45`): it is ANSWER-side and does not belong to the record's question. This association is therefore `unverified` as a picture-to-9.16.3 match.
3. New entry `pedsa-b9-16-3` in `app/data/questions.peds.sa.js:8076`; it has no `image` field. The ruling is: “Ruled NOT attached: `pedsa-b9-16-3`” (`progress/ledger.md:2162-2165`); the picture check says it “does not depict the autosomal-dominant inheritance question” (`content/peds/qb-pages/sa/_work/pics/check10/verdicts.jsonl:22`).
4. Chromosome-inheritance diagram, no view. Crop is clean: whole figure, no text cut through or missing.
5. Unused because it is answer-side and does not match `pedsa-b9-16-3`. **LEAVE UNUSED** — wrong question / answer-side figure.

### q-pd-sa-170.jpg

1. Picture records — `content/peds/qb-pages/sa/_work/pics/pictures.json:475-494`:
   > {
   >   "id": "pedsa-b28-2",
   >   "page": 170,
   >   "fig": "Fig. 28.5",
   >   "image": "q-pd-sa-170.jpg",
   >   "imgAlt": "Pelvic X-ray, frontal view, with an arrow",
   >   "how": "crop",
   >   "looked": true,
   >   "note": "figure printed with the answer explanation only; parent decides whether it belongs on the question"
   > },
   > {
   >   "id": "pedsa-b28-8",
   >   "page": 170,
   >   "fig": "Fig. 28.5",
   >   "image": "q-pd-sa-170.jpg",
   >   "imgAlt": "Pelvic X-ray, frontal view, with an arrow",
   >   "how": "crop",
   >   "looked": true,
   >   "note": "figure printed with the answer explanation only; parent decides whether it belongs on the question"
   > },
2. For `pedsa-b28-2`, printed question `28.2`, the figure map places Fig. 28.5 at p.170 on the ANSWER side (`content/peds/qb-pages/sa/_work/sa-book.before-18-7.js:395`); `Self Assessment Book.pdf p.165 28.2`, answer figure p.170. For `pedsa-b28-8`, printed question `28.8`, the record likewise marks Fig. 28.5 p.170 as ANSWER-side (`.../sa-book.before-18-7.js:401`); `Self Assessment Book.pdf p.166 28.8`, answer figure p.170. The question-8 association is `unverified` as a match: the picture check says it does not depict the newborn feet (`pics/check10/verdicts.jsonl:54`).
3. Both are new entries in `app/data/questions.peds.sa.js`: `pedsa-b28-2` (`:9343`) currently has `image` `q-pd-sa-165` (line 9359); `pedsa-b28-8` (`:9455`) has no `image`. The ruling is: “Ruled NOT attached: `pedsa-b28-8` … and the answer figures of `pedsa-b28-2`” (`progress/ledger.md:2162-2165`).
4. Pelvic radiograph, frontal view. Crop is clean: whole figure, no text cut through or missing.
5. Unused because it is an answer-side second figure for `pedsa-b28-2`, which already has a question-side image, and it does not match `pedsa-b28-8`. **LEAVE UNUSED** — answer-side / wrong-question figure.

### q-pd-sa-172.jpg

1. Picture record — `content/peds/qb-pages/sa/_work/pics/pictures.json:495-504`:
   > {
   >   "id": "pedsa-b28-10",
   >   "page": 172,
   >   "fig": "Fig. 28.6",
   >   "image": "q-pd-sa-172.jpg",
   >   "imgAlt": "Pelvic X-ray, frontal view, with an arrow",
   >   "how": "crop",
   >   "looked": true,
   >   "note": "figure printed with the answer explanation only; parent decides whether it belongs on the question"
   > },
2. Printed question `28.10`, staging id `pedsa-b28-10`: its figure map places Fig. 28.3 at p.167 on the QUESTION side and Fig. 28.6 at p.172 on the ANSWER side (`content/peds/qb-pages/sa/_work/sa-book.before-18-7.js:403`). The answer text identifies Fig. 28.6 under 28.10 (`book/p0172.L.txt:18-24`). `Self Assessment Book.pdf p.167 28.10`; answer figure p.172.
3. New entry `pedsa-b28-10` in `app/data/questions.peds.sa.js:9491`; current `image` is `q-pd-sa-167-1` (line 9507). The ruling is: “Ruled NOT attached: … the answer figures of … `pedsa-b28-10`” (`progress/ledger.md:2162-2165`).
4. Pelvic radiograph, frontal view. Crop is clean: whole figure, no text cut through or missing.
5. Unused because it is an answer-side second figure and the entry already displays its question-side image. **LEAVE UNUSED** — answer-side figure; the renderer has one `q.image` field.

### Renderer / multiple-picture check

`app/js/quiz.js` contains no `qImgSrc`, `q.image`, or `images` use (searched all 1,269 lines). The live renderer is `app/js/storage.js`: `qImgSrc(name)` builds one asset URL (line 200); `qFigure(q)` returns no figure without one `q.image` (line 207) and renders one `<img>` from `qImgSrc(q.image)` (line 212); `openZoom(name)` likewise takes one image name (lines 234-237). It does not support more than one picture on a question or a separately placed explanation-side picture. `imgSpoils` only blurs the same question figure until an answer is shown (`storage.js:210-215`).

No existing Pediatrics entry uses an `image` array, `images`, `image2`, or another second-image field: searched `app/data/questions.peds.js`, `questions.peds.ep.js`, `questions.peds.ep2.js`, and `questions.peds.sa.js`. Existing entries with two printed figures are stored as one cropped composite image where applicable, e.g. `pedhd-nutr-1` has one `image:'q-pd-hd-75'` with an alt describing two images (`app/data/questions.peds.js:2102-2105`).
