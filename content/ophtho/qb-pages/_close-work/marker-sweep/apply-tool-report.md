# Marker apply fixture report — 2026-09-21

Fixture: `_fixture-apply`; no `app/` path was opened or written.

## Closing-marker forms before writing

- `*Written for this bank — Opthalmology endpoint.pdf prints no explanation here.*` — 61
- `Written for this bank — Opthalmology endpoint.pdf prints no explanation here.` — 235
- Other whitelisted forms — 0 each; no unmatched form observed.

## Runs and checks

- Dry run: planned `ophep-exam-eye-16`, `ophep-orbit-11`; 2 applies, 0 skips.
- Literal coverage: `ophep-exam-eye-16` is single-quoted; `ophep-orbit-11` double-quoted.
- First `--write`: `PASS decisions=2 applied=2 skipped=0 markers=296->294`.
- Second `--write`: `PASS decisions=2 applied=0 skipped=2 markers=294->294`.
- Second-run skips: `ophep-exam-eye-16`, `ophep-orbit-11`.
- Tool proof checked array lengths, untouched entry bytes, allowed field changes, marker delta,
  decoded boxes, cites, and fixture-file `node --check`.
- Explicit `node --check` passed for the tool and both fixture data files (silent exit 0).
- `_fixture-apply/_orig/` was copied before the first successful write.
- Current-vs-original bytes: `questions.ophtho.ep.js` differs as expected (two applied entries);
  `questions.ophtho.ep2.js` is byte-identical.

## Defect fixed

- Corrected the write-path snapshot to call `read(f.path)`; the original passed an object to
  `readFileSync` and failed before writing.

## Unverified

- No direct `app/data/` read or byte comparison was performed. The supplied fixture copies were
  treated as the originals; the tool's internal proof is the requested comparison path.
