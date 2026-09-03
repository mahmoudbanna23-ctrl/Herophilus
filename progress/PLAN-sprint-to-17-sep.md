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
| **Codex** | nothing until it wins §6. **Installed 2026-09-03** — `codex-cli 0.153.0`, real disk, user-run `.bat`. Sign-in is the user's. |
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

**Task — REVISED 2026-09-03, the original went stale within hours.** The first draft of this
section named endpoint s7 half C. By 14:19 that day half C was on disk (`.draft-C.js`, 51,885 B)
and half A was being revised at 14:33 — the work chat had already done it. **Do not benchmark on
a task the fleet is about to finish; you measure a race nobody ran.**

The task is **endpoint section 8, Allergy — pp.904–928, 9 questions.** Verified against disk
2026-09-03: no `endpoint-s08-*` file of any kind exists. It is the next unstarted unit, it is
small enough to fail cheaply, and it is real work that ships if it passes.

**Codex owns a STREAM, not a file inside someone else's stream.** It writes only into
`content\peds\qb-pages\`. **Never `app\data\`.** So there is zero contention with either work
chat, and **the splice stays Claude's** — which keeps §4's "never delegated" list intact.

**Acceptance test:** `node tools/bank-harness/val-pd-ep.js 8 A` → exit 0, then
`keypos.py --calibrate` on the section array, then the §5 tier-3 hand-read of the sample.
Passing the validator is necessary and **not sufficient** — §5 says why.

**Measure it without watching it.** `codex exec --json` emits every event as JSONL and
`-o <file>` writes the final message; both were confirmed present in `codex --help` on
2026-09-03. Run it into a log, read the log **after it stops**, count steps from the log. This is
what makes the zero-supervision rule below cheap to obey rather than a discipline problem.

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

**⚠️ A WIN IS ONE MORE LANE, NOT A FAN-OUT.** If Codex passes s8, it gets **s9 next, alone** —
then the reprint sweep. It does **not** authorise handing streams to agy, OpenCode, Grok or
Mistral: their copyright exposure is unresolved (see the precondition below), and §2's arithmetic
is unchanged — every extra lane is supervised from the main chat, which is the 70%. Widening is
**sequential and evidence-led**: one lane proves itself on one stream before a second is opened.
This paragraph exists because "Codex won" is the sentence a later session will misread.

**Preconditions before a single stem is sent to any outside agent:**
- ⚠️ **Copyright / training data.** The drafting input is byte-identical copyrighted bank text.
  The workspace already bans Gemini free for project content because it trains on inputs; Grok
  free and Mistral free carry the same exposure, and the publisher-copyright gate is parked as a
  blocker for publishing. **The user paid for Codex on 2026-09-03, before this was verified** —
  so the gate moved from "verify before paying" to **"verify before the first stem is sent."**
  The concrete step, on the ChatGPT account that owns the subscription: Settings → Data controls
  → **"Improve the model for everyone" OFF.** ⚠️ **UNVERIFIED by Claude and unverifiable by
  Claude** — it lives behind a login Claude must never touch. The user confirms it, or the
  benchmark does not run.
- **Two accounts is fine, and is not a mistake.** The subscription sits on a different ChatGPT
  account from the one used for `/sama` paste-back debates. The CLI authenticates per-account, so
  `codex login` with the paid account is the whole of it. The only real risks are **paying twice**
  if the other account also carries a plan, and applying the training toggle **to the wrong
  account** — it must be set on the one the CLI is signed into.
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

## 9. The deadline — settled

✅ **CONFIRMED by the user 2026-09-03: the 14 Sep Peds OSCE is a PRACTICAL exam and this bank does
not feed it.** With the 2026-08-31 ruling to skip all OSCE content, the date this sprint serves is
**Peds papers, 17 Sep** — **14 days**, not 11. Nothing is dropped: the OSCE is not in scope, so it
is not a deadline that was missed.

Order of exams the bank does feed: **Peds papers 17 Sep** · ENT 22 Sep (closed) · Ophtho 27 Sep
(closed) · **Neuro 3 Oct** · Peds papers 18–19 Oct. So House and endpoint are the 17 Sep work and
neuro's ~29 remaining are the 3 Oct work — **do not let neuro pull ahead of peds.**
