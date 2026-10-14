# Disk cleanup — old 3D body tries in `D:\scratch 2026\her-c2` (builder brief)

ROUTE-OK: gateway down.

## §0 Marching orders
- Hand back at ~50 tool calls, stopped by 70. Write status to
  `progress/redesign/build/her-c2-cleanup-STATUS.md` AS YOU GO.
- **Delete nothing yourself.** Your job ends with a .bat the owner runs.
- Write project files ONLY in `D:\claude os\Medical school\Herophilus-redesign`. NEVER write in
  `D:\claude os\Medical school\Herophilus` (live copy). No git.
- Do NOT open images or .blend files. Text only.

## Owner decision (2026-10-15)
`D:\scratch 2026\her-c2` holds about 11.6 GB of Clepsydra 3D rig rounds (rig1..rig5s, face1..9,
test6..8, `*-refute` folders, loose scripts/logs/pngs at the top). The owner said yes: write down
what each superseded round showed, then remove it, keeping only what is still used.

## Keep — never on the delete list
- `rig5r` (current rig; Phase 3 renders it), `rig5s` (arms round, Phase 5), `test8` (approved
  look), `face9` (face rig; Phase 5 merges it).
- Any folder or file that a CURRENT script loads as INPUT (a `.blend` it opens, a file it reads).
  Find them: grep `her-c2` in `progress/app-replan/p5/story/her/*.py` of the trial copy; for each
  hit decide input (keep) vs output path (fine to remove). The newest script of each kind is the
  current one (e.g. `rig_her.py` / highest `rig_her.5x.py`, `face_rig.py`, `check_rig.py`,
  `check_face.py`, any `look_*.py`). When unsure: keep, and say why.
- Anything modified in the last 24 hours.

## The job
1. Read `progress/app-replan/p5/story/her/NOTES.md` and `progress/app-replan/p5/RESUME-p5.md` in the
   trial copy — only the lines that name `her-c2` (grep -n, then read short spans).
2. Write `progress/app-replan/p5/story/her/her-c2-index.md`: one row per her-c2 subfolder and loose
   file group: name | MB | what it was / what it showed (from NOTES; one line) | where NOTES records
   it (heading or line) | keep or remove + reason.
3. Save the text record: copy every small text file (`*.md`, `*.txt`, `*.json`, `*.log`, `*.py`,
   `*.sh`, each under 1 MB) from the to-be-removed folders into
   `progress/app-replan/p5/story/her/her-c2-reports/<folder>/` (same names). Report the total size
   copied; if it is over 20 MB, stop and report instead.
4. Write `C:\Users\Alfa388\Desktop\cleanup-her-c2.bat` in the style of
   `C:\Users\Alfa388\Desktop\cleanup-herophilus-scratch.bat` (read it): `rd /s /q` / `del /f /q`
   on exactly the remove list, each line logged REMOVED / LEFT, D: free before and after, a
   "Left on purpose" list, log file next to the bat, `pause` at the end. No wildcards that could
   reach a keep folder (`rig5*` would hit `rig5r`/`rig5s` — list names one by one).
5. Before handing back: check that no keep folder name appears in a remove line of the bat.

## Report back (short)
Remove list total MB, keep list with reasons, size of the copied text record, the bat path,
anything you were unsure about.
