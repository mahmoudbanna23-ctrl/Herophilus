# shot1 layers paint: status

- 2026-10-15 prompts-city.md: sections shot1-sky-dark-c, shot1-cloud-mid, shot1-cloud-near appended.
- paint/paint-city-2ref.sh made (copy of paint-city.sh + optional STYLE_REF2). Pillow 12.3.0, numpy 2.3.5 present.
- Paintings used so far: 0 of 4.
- Resume check: 3 section headings present (prompts-city.md lines 363, 391, 412); 2ref script has STYLE_REF2; k8 ref exists.
- paint/make-cloud-alpha.py written (smoothstep alpha on peak channel, un-premultiplied colour).
- Painting 1/4 shot1-sky-dark-c started in background (log paint/paint-shot1-sky-dark-c.log, out paint/run-shot1-c.out).
- 2026-10-15 painting 1/4 shot1-sky-dark-c DONE (resumed run; earlier run died 06:29, logs renamed *.dead-0629). File exists, 3.0 MB; size/alpha checked in report. Paintings used: 1 of 4.
- 2026-10-15 painting 2/4 shot1-cloud-mid DONE (ROOM_REF=shot1-sky-dark-c.png). First launch was killed at 5 s before any image (no cost). Used: 2 of 4.
- 2026-10-15 painting 3/4 shot1-cloud-near DONE. Used: 3 of 4. Alpha made: shot1-cloud-mid-a.png, shot1-cloud-near-a.png (RGBA 1536x1024). Not looked at by any looker yet.
