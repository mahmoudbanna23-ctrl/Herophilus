# Slice 4 — shot 1 plate (sky over the sea) (builder brief)

ROUTE-OK: gateway down.

## §0 Marching orders
- Hand back at ~40 tool calls, stopped by 60. Write status to
  `progress/redesign/build/shot1-plate-STATUS.md` AS YOU GO.
- Work ONLY in `D:\claude os\Medical school\Herophilus-redesign`. NEVER write in
  `D:\claude os\Medical school\Herophilus` (the live copy). No git — main chat commits.
- **ONE painting only** (daily cap: 7 of 8 used). If the painter asks a question instead of
  painting (it did once on shot 2 r2 — see `shot2-plate-STATUS.md`), that made no image: fix the
  section wording and run once more. Never a second finished image.
- Do not judge the image yourself beyond: exists, 1536x1024, not blank, no alpha. A looker judges.

## Read first (narrow)
1. `progress/redesign/build/shot2-plate-STATUS.md` (10 lines) — how shot 2 was painted.
2. `progress/redesign/paint/prompts-city.md` sections `shot2-pharos-dark-r2` (from line 241) and
   `common-city-matte` (line 159) — copy their shape and their style words.
3. `progress/redesign/paint/paint-city.sh` — usage only (section name must equal output name).

## The job
Add section `## shot1-sky-dark` to `prompts-city.md` (after `shot2-pharos-dark-r2`) and paint it:
`SCENE_REF=city-dark-3.png`, `COMMON_SECTION=common-city-matte`, 1536x1024, output
`paint/shot1-sky-dark.png`.

Content of the plate (the FIRST frame of the whole film; a camera will later drift forward and
down from here toward the coast, into cloud):
- Very high aerial view at night, looking out and down over the sea toward Alexandria's coast.
- Sky fills the top ~55%: deep blue night, a few stars, soft layered cloud banks lit faintly
  from below; a thick cloud bank sits low across the middle distance (the film dives into it).
- The coast is low and far, a thin dark line with tiny warm city lamps; the Pharos is only a
  small warm spark of fire on the coast, on the SAME side of frame as in `shot2-pharos-dark-r2`
  and `city-dark-3` (check those sections' wording for the side).
- Painted matte gouache, visible brushwork, same palette as city-dark-3. No text, no people,
  no birds, no moon disc (shot 2 has none), no glossy or 3D-render look, no lens flare.

## Report back (short)
Section added (line), image path, size/bytes, attempts used, anything that went wrong.
