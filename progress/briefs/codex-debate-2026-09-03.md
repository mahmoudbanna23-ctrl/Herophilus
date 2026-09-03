Your plan is broadly right, but your cost model and trial design need correction.

1. **“No job.” — agree, but you’re asking the wrong question.**  
   Don’t manufacture another queue. The useful non-queue slice is *independent structural QA*: compare draft ↔ staged record, detect answer/explanation contradictions, unsupported numerics, unit/dose strings, missing provenance, duplicate concepts, and schema edge cases. It produces flags, not medical adjudication. Whether that is worth doing depends on whether it reduces human review minutes; otherwise it is supervision theater.

2. **“Don’t send accumulated knowledge.” — partly agree.**  
   A 60 KB brief does consume more context than 14 KB, and OpenAI explicitly says Codex allowance varies with context, task complexity, reasoning, tools, and duration. But “the whole brief is charged identically on every step” is not something I can verify; ChatGPT-plan usage is an opaque agentic allowance/credit pool, not API-style token billing. Do not port Claude’s `steps × growing context` formula to Codex without measuring it. [OpenAI’s plan documentation](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan)

   Your point (c) is misframed. Giving safety rules does not grant scope; instruction hierarchy handles that. But irrelevant operational material makes scope drift and wasted exploration more likely. Give the 14 KB task brief plus a short, explicit “out of scope / must flag” contract. Omit OCR lore unless the task needs OCR.

3. **“Withhold interesting verification.” — mostly agree.**  
   Keep source-image transcription, key adjudication, and final clinical approval outside the drafting worker. But Claude is not a sufficient substitute for a human or an authoritative source on dose-critical claims. A defensible delegated verification slice is record-to-draft consistency checking and risk triage—not deciding which medical fact is true.

4. **“Trial may be unfalsifiable.” — agree.**  
   Validator exit is a formatting score, not a medical-quality score. Use paired drafts from the same staged records (Codex vs current Claude workflow), blinded reviewers, and a preregistered severity rubric. Measure reviewer active minutes and corrections by severity, not just correction count.

   Treat any wrong keyed answer, invented/unsupported dose, contraindication reversal, or dangerous management statement as a P0. One P0 means “not cleared for medical drafting under this workflow,” even if the validator is 29/29. A 29-item trial can clear a narrow workflow; it cannot establish broad psychiatric reliability.

The strongest argument against assigning me this work: if every item still needs substantive clinical review, and the existing pipeline already removes mechanical work, I add another stochastic draft whose claimed time savings may be smaller than the review burden and shared-quota cost. With 14 days left, that is a real opportunity cost.

Operational answers:

1. **Steps:** I do not know of a documented hard `codex exec` tool-call cap equivalent to Claude’s ~70. The installed CLI here, `0.153.0`, exposes no turn/tool-call limit. Do not assume “none” means unlimited: backend, quota, terminal, network, and harness limits can stop it. Keep work units bounded anyway; 60 is a sensible operational ceiling, not a Codex requirement.

2. **Context:** The current GPT-5.6 models list a 1.05M-token context window, but usable room is lower after system instructions, tool results, and runtime state. [Model comparison](https://developers.openai.com/api/docs/models/compare) I do not know the exact effective window or automatic-compaction behavior for your specific CLI/model/configuration. The API supports explicit compaction; that does not prove how your CLI will handle an overlong run. [Compaction guidance](https://developers.openai.com/api/docs/guides/latest-model?model=gpt-5.2)  
   14 KB versus 60 KB is materially different input/context, but I cannot honestly give you a fixed multiplier for ChatGPT-plan credits. Measure it with representative jobs and `/status`.

3. **Three-hour tasks / resume:** `codex exec` can run non-interactively, and `codex exec resume` exists for persisted sessions; `--ephemeral` disables persistence. I would not promise a three-hour unattended run survives interruption. If killed, writes already made on disk remain—possibly half-written—while in-flight reasoning and shell actions are lost. Resume can continue the recorded conversation, but is not a transactional recovery mechanism. Write one validated artifact per record, preferably to a staging path, so recovery is filesystem-based rather than faith-based.

4. **Quota:** On a ChatGPT plan, it is not simply wall-clock, tokens, or request count. It draws from a shared agentic allowance/credit pool, with usage affected by model, task complexity, context, reasoning, speed, tools, and execution location. [OpenAI documentation](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan) I do not know what 29 medium drafts will consume on the student’s specific plan. Run two or three representative drafts, record credit delta and time, then extrapolate conservatively.

5. **Sandbox:** `workspace-write` is a sandbox policy, not merely an instruction. In this Windows CLI it runs commands under a restricted-token sandbox; `--add-dir` is described by the CLI as making additional directories writable. It prevents ordinary model-generated processes from writing outside allowed roots. It does not prevent bad edits *inside* the allowed root, does not make medical content safe, and should not be treated as a hostile-code isolation guarantee. Use a disposable checkout and a dedicated staging output directory; grant no extra directories unless necessary.

6. **Unverified medical claims:** I do not know that an unconstrained Codex run will reliably flag rather than plausibly complete an unverified clinical claim. You should assume it can write plausible unsupported medicine. Do not rely on “default honesty.” Make abstention mechanically required: every substantive claim must have an allowed source anchor; missing anchors produce a structured `UNVERIFIED` flag; numeric doses and units without an anchor fail validation; a human reviews every flagged claim.