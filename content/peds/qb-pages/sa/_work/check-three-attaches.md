### q-pd-sa-12-1.jpg — pedep2-mf1-15

A. **PASS** — `book/p0011.txt:50-61` prints `2.8.3` and says that Darren's examination findings are shown in `Fig. 2.7`; the picture record identifies that figure as `q-pd-sa-12-1.jpg` (`_work/pics/pictures.json:22-28`).

B. **PASS** — page 12, Fig. 2.7 (the supplied image) reads `Respiratory rate 36 breaths/min`, `Reduced air entry on the left chest`, `Heart apex beat displaced to right`, and `Percussion normal`. The entry's source copy prints the same four findings in its stem (`endpoint-p2-s12-mfe1.draft-A.js:94`); no mismatch found.

C. **PASS** — the mapped caption is `Annotated diagram of the lungs and chest with examination findings` (`_work/pics/pictures.json:25-27`). The source copy has options including `Inhaled foreign body (left side)` and keys option 0 (`endpoint-p2-s12-mfe1.draft-A.js:95-96`). No: the caption does not state a diagnosis or side and therefore does not steer to the key.

D. **PASS** — not applicable: this is a question-side figure, not an answer-side spoiler.

E. **PASS** — the source picture record uses basename `q-pd-sa-12-1.jpg` (`_work/pics/pictures.json:25`), and `app/assets/q/q-pd-sa-12-1.jpg` exists. The current live `image`/`imgAlt` fields are **unverified** because `AGENTS.md` prohibits opening `app/data/`.

### q-pd-sa-59.jpg — pedsa-b9-15-4

A. **PASS** — the printed answer page labels `9.15.4` and then `G. Fragile X syndrome` (`book/p0059.txt:61-65`); it says `See Box 9.3 and Fig. 9.8` (`book/p0059.txt:29-31`). The picture record maps Fig. 9.8 to this id and file (`_work/pics/pictures.json:184-192`).

B. **PASS** — not applicable to this clinical photograph.

C. **PASS** — source build caption: `Clinical photograph of a child's face, frontal view` (`_build/questions.peds.sa.js:8027-8029`). The source question record lists `Fragile X syndrome` in the options and keys index 6 (`sa-book.array.js:144`). No: the caption names neither syndrome nor characteristic feature and does not steer to the key.

D. **PASS** — yes, blur is needed: the supplied photograph is the answer-page Fig. 9.8 cited with the Fragile X explanation (`book/p0059.txt:61-65`), so displaying that diagnostic illustration before answering would disclose answer-side material.

E. **PASS** — build output stores basename `q-pd-sa-59`, caption, and `imgSpoils: true` (`_build/questions.peds.sa.js:8027-8029`); the picture record stores the `.jpg` source filename (`_work/pics/pictures.json:184-192`), and `app/assets/q/q-pd-sa-59.jpg` exists. Current live-field equality is **unverified** because `app/data/` is closed by `AGENTS.md`.

### q-pd-sa-60.jpg — pedsa-b9-16-4

A. **PASS** — the question page prints `9.16.4` above the Prader-Willi/no-deletion stem (`book/p0055.txt:14-17`). The answer page then prints `9.16.4`, `C. Imprinting from uniparental disomy`, and `See Fig. 9.9` (`book/p0060.txt:43-45`); therefore Fig. 9.9 belongs to **9.16.4, not 9.16.3** (which is separately headed at `book/p0060.txt:8-10`). The picture map confirms Fig. 9.9 -> `pedsa-b9-16-4` (`_work/pics/pictures.json:195-203`).

B. **PASS** — not applicable to this inheritance diagram.

C. **PASS** — source build caption: `Diagram of chromosome inheritance from the parents in two families` (`_build/questions.peds.sa.js:8117-8119`). The source question record keys index 2, `Imprinting from uniparental disomy` (`sa-book.array.js:149`). No: the caption does not name imprinting or the keyed option.

D. **PASS** — yes, blur is needed: the supplied figure itself is titled `Imprinting from a uniparental disomy` and labels Prader-Willi syndrome; this is the keyed wording on the answer page (`book/p0060.txt:43-49`).

E. **PASS** — build output stores basename `q-pd-sa-60`, caption, and `imgSpoils: true` (`_build/questions.peds.sa.js:8117-8119`); the source record uses `q-pd-sa-60.jpg` (`_work/pics/pictures.json:195-203`), and `app/assets/q/q-pd-sa-60.jpg` exists. Current live-field equality is **unverified** because `app/data/` is closed by `AGENTS.md`.
