# The evidence archive was MOVED out of this project — 2026-09-01

It is **not deleted.** Nothing was lost; the SHA-256 sums in `SHA256SUMS.txt` still verify,
because they are content hashes and no byte was touched.

**New location:**

```
D:\claude os\_archive\herophilus-token-economy-2026-08-31\
    archive\                              the whole original folder, unchanged
        transcripts-raw\*.jsonl           11 raw session transcripts, 205 MB
        corpus-snapshot-2026-08-31\       app\data\ at closure, 17 MB
        README.md  SHA256SUMS.txt  ...
    questions.ophtho.PRESPLICE18.js       5 MB pre-ch.18-splice backup, moved out of app\data\
```

**Why it moved.** It was 222 MB sitting inside the project folder. Any recursive search over
the project — `grep -r`, a glob, an agent sweeping for a filename — walked into 205 MB of raw
JSON transcripts. That is a session-killing amount of output for a search that was looking for
something else entirely. Measured 2026-09-01: `progress\token-economy\` went from **222 MB to
132 KB.**

`questions.ophtho.PRESPLICE18.js` moved for the same reason — it is a backup, not app data, and
it sat in `app\data\`, the folder that gets grepped and globbed on every splice.

**Nothing in the closed token-economy decision depends on the path.** The three files that stayed
here — `DECISION-2026-08-31-project-closed.md`, `plan.md`, `debate-round-6-brief.md` — are the
record. The archive is the evidence behind it, kept because Claude Code prunes its own
transcripts and those 11 files are the only irreplaceable item in the set.
