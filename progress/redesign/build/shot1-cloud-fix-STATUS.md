# Shot 1 near-cloud fix - status (2026-10-15) - DONE

Script: `paint/fix-near-cloud.py` (Pillow + numpy). Output `paint/shot1-cloud-near-b.png` RGBA 1536x1024.
Method: alpha ramp as make-cloud-alpha.py; floor 0.12 remapped; gaussian feather 2.5 px on alpha;
tint = mean-RGB shift 40% toward base lower-45% mean (keeps brushwork; not a flat blend).

Alpha (before -> after): mean 0.5734 -> 0.5704; fully clear 39.46% -> 37.68%; above 0.9 55.27% -> 54.13%.
Alpha-weighted mean RGB: 100.7,93.0,104.9 -> 102.5,94.7,106.7. Base lower-45% mean: 102.1,94.3,108.4.

Web copies `paint/shot1-web/`: shot1-base.jpg 369 KB (target <450 ok); shot1-near.webp 194 KB (<350 ok).

Previews `build/shot1-cloudfix-preview/` (1536x1024 jpg q88), mean luma: start 66.3, mid 62.5, end 78.7; base alone 66.3.
Not looked at (numbers only, per brief).
