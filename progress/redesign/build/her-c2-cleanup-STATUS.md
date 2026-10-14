# her-c2 cleanup STATUS
- 2026-10-15 start. Read brief. her-c2 top level listed: 89 entries, newest mtime 2026-10-01 (nothing in last 24h at folder level; deep check pending).
- du per folder running (slow).
- Findings: trial-copy story/her is STALE (no face_rig.py, check_face.py, rig_her.5n-5r.py); read the live copy (read only) for script inputs.
- Inputs current scripts load: test8 (check_rig, face_rig), rig5n/rest_front.png (check_rig, optional, exists-guarded), rig5r (rig5s c5s.sh reads it), face9 (face_rig OUT). rig5q only named by rig5r/c5r.sh (history, kept folder's driver) -> removable.
- Keep: rig5r rig5s test8 face9 face9_run.sh rig5n/rest_front.png. Nothing modified in last 24h (find -mtime -1 empty).
- NEXT: copy small text to her-c2-reports, write her-c2-index.md, write bat, verify.
- DONE 2026-10-15. Index: progress/app-replan/p5/story/her/her-c2-index.md. Text copy: .../her/her-c2-reports/ (808 files, 14.7 MB, two >1 MB probe_meta.json skipped). Bat: C:\Users\Alfa388\Desktop\cleanup-her-c2.bat (81 names, no wildcards over folders; check passed: no keep name in remove list, every disk entry accounted for). Nothing deleted by the drafter. Bat NOT run.
