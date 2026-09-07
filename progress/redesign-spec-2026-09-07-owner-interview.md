# What the owner actually wants — interview, 2026-09-07 evening

The 2026-09-07 CSS pass (`8ffced4`, "the decoration stops doing typography's job") stripped the
app's depth: box-shadow 137 → 10, linear-gradient 25 → 11, backdrop-filter 11 → 8. The owner's
verdict on the result, twice: **"the app overall feels dead and less alive"**, then after the
motion and colour passes, **"the new design still feels very dead and dark."**

Interviewed rather than guessed. Answers below are the specification.

## Phase 1 — tonight, before the exams

The owner chose **"fix the dead feel now, redesign after"** with Peds OSCE seven days out.

1. **Bring the depth all back.** Asked directly whether to restore the shadows and glow removed
   today, the answer was **"bring it all back"** — not "some". The reference is `f7c359d`, the
   last commit before the CSS pass.
2. **Lighten the backgrounds AND add more colour on top.** Asked which of the two was closer, the
   answer was **both**. Backgrounds are too dark; there is also too little colour on the things
   sitting on them — buttons, chips, progress.
3. **Keep the live score out of the study run.** Confirmed a second time. `612d070` stands.
4. **Frames and avatars are untouched** in every option. Ruled at the top of the interview.

## Phase 2 — after the exams

**"This whole thing needs redesigning to more alive, creative and funny"**, and the scope is the
**whole app**, not one screen.

What "alive" means, in the owner's own selection — three of four offered, and note which one was
*not* chosen:

- ✅ **It talks with personality.** Level: **properly playful** — it jokes, teases a wrong streak,
  celebrates a good run. The owner rejected the safer "dry and human" and "only in the quiet
  corners" readings. ⚠️ This sits against the standing no-AI-tell rule: playful is not chirpy, and
  the voice still has to survive being read at 2am the night before an exam. Character comes from
  being specific and a little wry, never from exclamation marks or encouragement.
- ✅ **Surprising shapes and layout** — overlaps, angles, big type, things off the grid.
  **Browsing screens only.** The owner kept "alive to browse, calm to read": quiz, reading and
  review stay calm.
- ✅ **More artwork and drawing**, and the answer to new-versus-existing was **both** — use the
  Clepsydra and the four module paintings far more and far larger now, and make new pieces after
  the exams.
- ❌ **Not** "it reacts when you touch it". Press feedback landed tonight (`45a66d8`) and the owner
  did not ask for more of it. Motion is not the missing thing; depth, colour, voice and art are.

**The frame craft stays on the avatars.** Asked whether wood, moulding and gilding should spread
into the rest of the app, the answer was **no — keep it to the avatars**. The app does not become
a wooden object.

## Still binding, not re-opened

The core never changes: the name, the logo, the module card paintings, the Clepsydra. She is the
owner's own artwork — she is never redrawn and nothing is ever drawn onto her.

## What Phase 1 does not touch

The subject page stays a contents list for now. The owner's "this whole thing needs redesigning"
was said about it, but that is Phase 2 work — rolling it back to the old card grid would spend the
week undoing something that is going to be rebuilt anyway.
