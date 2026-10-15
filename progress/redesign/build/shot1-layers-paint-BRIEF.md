# Phase 2 step 4, new route: shot 1 as painted LAYERS (Codex), no AI film (builder brief)

ROUTE-OK: gateway down.

## §0 Marching orders
- Hand back at ~45 tool calls, stopped by 65. Write status to
  `progress/redesign/build/shot1-layers-paint-STATUS.md` AS YOU GO.
- Work ONLY in `D:\claude os\Medical school\Herophilus-redesign`. NEVER write in
  `D:\claude os\Medical school\Herophilus` (live copy). No git — main chat commits.
- Codex paintings: **at most 4 finished images** this job (daily cap 8, one Codex job at a time —
  `paint-city.sh` already waits). If the painter asks a question instead of painting, fix the
  wording and run once more; that made no image and does not count.
- Do not judge the look yourself beyond: exists, right size, not blank, alpha yes/no. A looker
  judges. Do not open images.
- Do NOT touch `app/` in this job. Page code is a later job.

## Owner decision (2026-10-15)
The owner rejected both AI shot-1 films (Kaggle FLUX plates k8 and k6 + Wan film): art style and
sharpness are far from the city painting. New route, approved by him: Codex paints shot 1 at
full size like the city, and the page moves a camera over the painting itself in layers (sky,
lighthouse/coast, cloud layers sliding at different speeds; cloud rises to cover at the end,
then shot 2 plays as today). Every frame stays the real painting.

## Read first (narrow)
1. `progress/redesign/paint/paint-city.sh` — usage (section name = output name; `SCENE_REF`,
   `COMMON_SECTION`, size arg).
2. `progress/redesign/paint/prompts-city.md`: section `shot1-sky-dark` (the earlier Codex try)
   and `common-city-matte` — copy shape and style words.
3. `progress/redesign/build/shot1-plate-LOOK.md` — why the earlier Codex try failed (camera too
   low, cloud above the horizon). `progress/redesign/build/shot1-kaggle-LOOK.md` "### k8" — the
   LAYOUT that passed (horizon ~40%, small spark far left ~19%, thin coast with lamps trailing
   right, orange city glow at right, thick cloud bank filling the lower ~45%).
4. `app/js/city.js` lines 25-60 and 340-380 — how shot 2 and the painted cloud cover
   (`.city-cover`) work today, and which image the cover uses (list `app/assets/city/`).

## The job — paint into `progress/redesign/paint/` (new sections in `prompts-city.md`)
1. **`shot1-sky-dark-c`** — the base plate, 1536x1024, `COMMON_SECTION=common-city-matte`.
   Use `SCENE_REF=kaggle/shot1-sky-dark-k8.png` so Codex keeps that layout, and say in the
   section that the finish, palette and brushwork must match `city-dark-3.png` (the city plate)
   — if the script cannot pass both images, add an optional `STYLE_REF2` to a COPY of the script
   (`paint-city-2ref.sh`), never edit the original. Content: k8's layout; the cloud bank's top
   edge soft and broken (later layers overlap it); no text, people, birds, moon disc, lens flare.
2. **`shot1-cloud-mid`** and **`shot1-cloud-near`** — two cloud layers, 1536x1024 each, same
   palette and brushwork, painted on a flat pure-black background (or transparent if the painter
   gives alpha): `mid` = a broad bank whose top sits about 45% down, soft broken top edge;
   `near` = big soft wisps filling the lower half, denser at the bottom, that will rise and
   cover the whole frame. Same night light as the base (lavender-grey, amber from below).
3. Make alpha versions with a small local Python script (Pillow/numpy only; check they are
   installed, else report): black background -> transparent, soft edges kept (luminance or
   distance-from-black ramp, not a hard threshold). Save `shot1-cloud-mid-a.png`,
   `shot1-cloud-near-a.png`; keep the originals. Script lives in `progress/redesign/paint/`.
4. One spare painting allowed: only if a painter run produced no image or a wrong size.

## Report back (short)
Sections added (lines), image paths + sizes + alpha, paintings used, script path, anything that
went wrong.
