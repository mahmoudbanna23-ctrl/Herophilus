# Shot 1 base plate, sharper repaint (builder brief)

ROUTE-OK: gateway down.

## §0 Marching orders
- Hand back at ~30 tool calls, stopped by 45. Write status to
  `progress/redesign/build/shot1-sharp-paint-STATUS.md` AS YOU GO.
- Work ONLY in `D:\claude os\Medical school\Herophilus-redesign`. NEVER write in
  `D:\claude os\Medical school\Herophilus` (live copy). No git.
- **At most 2 finished paintings.** Run one, check it exists, then the second only as stated below.
  A run that asks a question instead of painting does not count; fix wording, rerun once.
- Never kill processes by a name pattern (last job's `codex` match may have hit other chats'
  jobs). To stop your own run, kill only the PID you started.
- Do not open images. Exists / 1536x1024 / not blank only. A looker judges.

## Owner decision (2026-10-15)
Owner saw `paint/shot1-sky-dark-c.png` next to `paint/city-dark-3.png` and said "try a sharper
one". Looker notes (`build/shot1-layers-LOOK.md`, point 1): palette matches, but the city is crisp
and detailed while the sky plate is a soft dab painting with blocky edges. Layout passed — keep it.

## The job (in `progress/redesign/paint/`)
1. Add section `## shot1-sky-dark-d` to `prompts-city.md` after `shot1-cloud-near`: copy
   `shot1-sky-dark-c`, keep the layout words, and replace the finish words with the city's: crisp
   defined brush edges, fine painted detail (lighthouse stones and fire, individual coast lamps,
   wave glints, sharp small stars), cloud bank with sculpted, clearly lit tops and crisp edges
   (lit amber from below, lavender-grey), high detail density like `city-dark-3.png`. Say
   explicitly: NOT soft blurred dabs, NOT blocky smudges, NOT airbrushed, NOT out of focus.
   Read `common-city-matte` first: if any of its words push softness (e.g. "loose", "soft"),
   override them inside the new section and note which.
2. Paint it with `paint-city-2ref.sh`: `SCENE_REF=shot1-sky-dark-c.png` (keeps the layout),
   `STYLE_REF2=city-dark-3.png`, `COMMON_SECTION=common-city-matte`, 1536x1024.
3. Second painting `shot1-sky-dark-e` ONLY if run 1 produced no image or a wrong size; otherwise
   stop at one.

## Report back (short)
Section line, image path + size, paintings used, which common-city-matte words you overrode.
