# Peds toolchain — latent bugs reported while porting to ophthalmology (2026-09-08)

**These are UNVERIFIED reports from the porting agent (Codex, building the ophthalmology `-oph-ep`
toolchain from the pediatrics `-pd-ep2` scripts as the model). None of the seven items below has
been independently confirmed by a second read of the code, and none was fixed.** The pediatrics
files named here (`val-pd-ep2.js`, `splice-pd-ep2.js`, `pagecov-ep2.js`) are another chat's live
tools — they were deliberately left untouched, exactly as they stand in the peds endpoint part 2
work. The ophthalmology ports (`val-oph-ep.js`, `splice-oph-ep.js`, `pagecov-oph.js`) do not carry
any of these seven problems forward.

This file exists so whoever owns the peds endpoint files can decide, with full information,
whether each item is worth fixing, worth leaving, or worth a closer look before trusting the
tools' output on a future run.

## The seven items

1. **Letter-key conversion remained in place despite the numeric-key rule.** The validator or
   splicer still converts option letters somewhere in its logic, even though the project's
   numeric-key convention should have made that conversion unnecessary or dead code.

2. **Validator holes were reported without causing a failure.** The validator can detect and print
   a hole (a gap in expected data) but does not fail its own exit status on finding one — a
   caller that only checks the exit code would see a clean pass on a bank with a known hole.

3. **The splicer could not handle an inline `[]` stub as its live array.** If the target data file's
   array is written as an inline empty-array literal (`[]`) rather than in the splicer's expected
   form, splicing against it fails or behaves incorrectly.

4. **The all-discard early return bypassed later splice checks.** When every drafted entry in a
   section is a discard, the splicer takes an early-return path that skips checks run in the
   normal path — which could let a drafted discard be accepted in a section where every entry was
   supposed to be discarded, with no check catching it.

5. **Coverage excluded `answered:true` mismatches whose `kind` was not `"answered"`.** The
   page-coverage tool's matching logic appears to only compare `answered:true` entries against
   pages explicitly tagged `kind:"answered"` — a page marked `answered:true` under some other
   `kind` value would be excluded from the coverage check rather than flagged as a mismatch.

6. **The validator's and the splicer's fold tables disagreed for pediatrics sections 9 and 10.**
   The two tools carry their own copies of which entries are folded, and for sections 9 and 10
   those two copies do not match. This is the item most worth someone's attention: two tools
   disagreeing about the same fold table is exactly the kind of fault that produces a confident
   wrong answer rather than a visible error — the validator could pass an entry the splicer treats
   differently, or vice versa, with nothing surfacing the disagreement.

7. **Quoted-box differences remain warnings only and still require human review.** Where a
   transcribed quoted box differs from what the tool expects, the tool only warns; it does not
   block, so a human still has to read every such warning to catch a real transcription defect.

## What this file is not

This is not a fix list and not a task assignment. It is a record of what one porting pass
noticed while building a parallel toolchain for a different book, kept so the peds endpoint
owner does not have to rediscover it independently.
