# Sprint plan — finish the bank, spend the least doing it

**Agreed by the user 2026-09-03.** This is the plan of record for the window to **Peds papers
17 Sep**. It supersedes any earlier delegation or optimization plan. It does not supersede the
two work-chat resume prompts, which remain the operating instructions for their own streams.

**The goal is not an optimal Herophilus. It is ~311 remaining questions out the door at the
least additional spend.**

⚠️ Every number below was measured on 2026-09-03 and will drift by the commit. **Re-measure
before quoting.** Where this file and the disk disagree, the disk wins.

---

## 1. The two rulings

- **⛔ OPTIMIZATION STAYS CLOSED UNTIL 3 OCT** (user, 2026-09-03). Unchanged. Nothing in this
  plan reopens it.
- **🧊 NON-EXAM PROJECTS ARE FROZEN UNTIL 3 OCT** (user, 2026-09-03). Horus, Archives, Promos,
  Architecture-Support. Measured cause: of the twelve largest transcripts since 2026-09-02
  11:16, **~284M tokens / ~$252** were `D--claude-os-Personal` during an exam sprint. This is
  the largest zero-risk saving available and it needs no engineering.

## 2. Why the plan is not a delegation architecture

Measured with `node "D:/claude os/tools/token-audit.js" --agents`, since 2026-09-02 11:16:

| | tokens | steps | share |
|---|---|---|---|
| **main sessions** | 1,024.3M | 8,308 | **70%** |
| subagents | 447.0M | 5,167 | 30% |
| **total** | **1,471.3M ≈ $1,089** | 13,475 | cache reads 96% |

Every large main transcript peaks at **166–167k** — saturated context, 325–956 steps each. An
orchestration layer runs **in the main chat**, which is the 70%. Writing briefs, reading diffs
and integrating results are step-dense, and a step there costs ~$0.10–0.12. **A delegation
scheme that saves subagent tokens while adding main-chat steps is a net loss.** The lever is
fewer main-chat steps, not more workers.

## 3. What is actually left

| stream | remaining | how measured |
|---|---|---|
| Peds House | **124** (ch.13–20) | bank 393 − `Q_PEDS` 269 |
| Peds endpoint body | **158** (s7 53 · s8 9 · s9 96) | pre-map, `resume-peds-endpoint.md` §"Sections 3–9 pre-mapped" |
| Neuro | **~29** (psychiatry Q137–165) | `MEMORY.md`; exam 3 Oct, outside this window |
| **total drafting** | **~311** | + a 379-page model-exam reprint sweep (folds, not drafting) |

**Throughput is not the constraint.** From splice commits: 2026-09-02 shipped **~480 questions
in one day** across three chats (House +162, neuro +95, ophtho +58, endpoint +165);
2026-09-03 shipped ~167 in 6.5 h across two. The "110–121/day" figure is roughly one agent's
rate, not the system's. **~311 questions is two solid blocks.**

## 4. Lanes

| lane | job this window |
|---|---|
| **Claude — endpoint chat** | staging (vision), one `lean-drafter` at a time, verify from disk, `keypos.py --calibrate`, splice, fold, commit, journal. s7 → s8 → s9. |
| **Claude — Chat B** | the same for House ch.13–20, then neuro topics 22–23. |
| **Codex** | nothing until it wins §6. Not installed, not on PATH. |
| **agy · OpenCode · Grok · Mistral** | nothing on question content. Their only honest lane is repo chores touching no clinical text, and that lane is near-empty — the harness is written. |

**Do not spread work across four free CLIs to prove the fleet exists.**

### Never delegated, to any agent

Staging (vision, duplex show-through, 600 dpi band crops for every numeral) · key adjudication ·
fold decisions (six shapes; one moves the key letter) · `imgAlt` (must not answer the question) ·
the splice · any git write · the final medical read.

## 5. Review that does not become the bottleneck

Three tiers, cheapest first:

1. **`val-pd-ep.js` / `val-pd.js` exit 0** — form only. Free. ⚠️ **It cannot see a clinically
   wrong explanation.** That gap is why tier 3 exists.
2. **`keypos.py --calibrate` on the section array** — keys, from pixels, ~0.42 s a page,
   independent of OCR, `index.json` and staging.
3. **Claude hand-reads a SAMPLE, never the batch** — every entry with an outside-knowledge tag,
   every divergence the agent named, every figure entry, plus 3 at random. ~6–8 entries per 50.

**Minimum medical verification (the floor — do not lower it for throughput):** `stem`/`opts`
byte-identical to staging · `answer` = the staged 0-based key, never moved · `keypos.py`
agreement or a rendered page · every number, unit, dose and exponent read off the image and
never from OCR · every outside-knowledge claim tagged with the grep that established the gap ·
distractor sweep present.

## 6. The Codex benchmark — only if a block ends early

**Task:** endpoint section 7 half C, `n` 37–53 (17 entries) — or the next equivalent third if
s7 has closed. Real work, already gated, with a known-good comparator (half A: 18 entries,
passed, 4,710 words).

**Acceptance test:** `node tools/bank-harness/val-pd-ep.js 7 C` → exit 0.

**⚠️ ZERO SUPERVISION — the user's amendment, and the point of the exercise.** Hand over the
exact self-contained brief (`pd-ep-draft-brief.md` + the staging array + the task prompt), then
**do not answer questions, do not nudge, do not correct mid-run.** Inspect only after it stops.
Supervising it measures *Codex plus expensive Claude supervision*, which is the thing being
tested for, not a result.

**Record for each of Codex, OpenCode and one Claude `lean-drafter`:** wall-clock · steps ·
$ · validator exit on first attempt and after N retries · word counts against the 250/520
budget · **entries a Claude reviewer had to correct on the tier-3 sample** · **main-chat steps
consumed supervising it**. One task, three runs, ~90 minutes total.

**Pay for Codex only if it beats `lean-drafter` on time + cost + first-pass validator success +
correction rate.** First job if it wins: the **model-exam reprint sweep** (pp.1157–1991, 379
pages) — mechanical text comparison, no clinical claim, the largest block of non-medical labour
left.

**Preconditions before a single stem is sent to any outside agent:**
- ⚠️ **Copyright / training data.** The drafting input is byte-identical copyrighted bank text.
  The workspace already bans Gemini free for project content because it trains on inputs; Grok
  free and Mistral free carry the same exposure, and the publisher-copyright gate is parked as a
  blocker for publishing. **Codex's training and retention terms are UNVERIFIED — verify before
  paying, not after.**
- ⚠️ **The 2026-08-30 sandbox finding.** Installers and CLIs launched from Claude's shell landed
  in an overlay: reported success, files "existed" to Claude, real disk empty. **Install via a
  user-run Desktop `.bat`, verify with a user-run check that writes a report file.** Otherwise
  the benchmark measures a phantom.

## 7. Closed — do not re-propose

Each of these was checked against disk on 2026-09-03 and needs **zero work**:

- **Yellow-highlight vertical centroid** — already built as `tools\ep-index\keypos.py`: 150 dpi
  render → per-row yellow/ink profiles → yellow-weighted row centroid → 0-based option index,
  pixels only. Calibrated over the four closed sections: **235 staged keys → 232 agree, 2
  disagree, 1 abstain; all three misses rendered and read by eye, all 235 staged keys right.**
  Its docstring names **p.584** as the case it was built for. Adding a centroid to `extract.py`
  would rebuild it in the wrong file.
- **Verified-question cache** — the staging arrays already are that record.
- **Reading/drafting separation and image isolation** — already enforced by the subagent
  architecture.
- **`options-differ`** — already a warning only.
- **Checkpointing** — git is the source of truth. **Do not add a second state system**; two
  state sources disagreeing is a failure this project has already paid for.

## 8. Ignored until after 3 Oct

Everything the §4 optimization ruling already defers (tight-crop OCR, load-bearing-token
detection, further OCR-confidence work, alternative OCR providers, pipeline state machines),
plus `keypos.py`'s two documented misses (neither has produced a wrong shipped key), plus the
frozen non-exam projects.

## 9. Open question for the user

**The 14 Sep Peds OSCE is a practical exam, and the standing ruling of 2026-08-31 is to skip all
OSCE content.** This bank therefore does not feed 14 Sep. The date it serves is **Peds papers
17 Sep**. The window is planned to 17 Sep on that reading; say so if that is wrong.
