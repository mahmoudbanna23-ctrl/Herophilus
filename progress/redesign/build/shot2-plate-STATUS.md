# Shot 2 plate - status (2026-10-14)

- Existing plate check: tools/city-film/ai-film/pharos-dark.jpg (source of the approved Run 6 clip ai-film-big-b; Run 6 used that file, README line 8, ai_film.py line 139) is a glossy, near-photographic painting with a moon and no mist band. city-dark-3.png is matte gouache. Style does not match, so it does not serve as shot 2 first frame.
- Section "shot2-pharos-dark" added to paint/prompts-city.md. Painting 1 of max 2 launched with SCENE_REF=city-dark-3.png, COMMON_SECTION=common-city-matte.
- Painting 1 done: paint/shot2-pharos-dark.png, 1536x1024, 2,709,257 bytes, RGB (no alpha), not blank (sampled pixels vary, bottom rows pale blue-grey). Not judged; looker next. Paintings spent: 1 of max 2. No revision painted.

## Revision r2 (coordinator order after looker fail)
- Looker v1 faults: tower 10-41% x, 0-88% y touching top edge; render-smooth; mist wispy at y55%; floating wall piece. Section shot2-pharos-dark kept as v1 note; revised text is section shot2-pharos-dark-r2 (script needs section name = output name).
- r2 attempt 1: Codex asked which should win (new camera vs same camera) and painted NOTHING (no image, log paint-shot2-pharos-dark-r2-attempt1-asked.log). Added a PRECEDENCE paragraph to the section, reran.
- r2 attempt 2: paint/shot2-pharos-dark-r2.png, 1536x1024, 2,702,744 bytes, no alpha, not blank. Not judged. Paintings spent this job: 2 images (v1 + r2); the refused attempt made no image.
