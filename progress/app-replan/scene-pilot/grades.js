/* SCENE_GRADES — programmatic time-of-day grade over ONE master plate (master-v2-b.png).
   No new plates; each preset only re-tints the existing pixels. Classic script (var), no
   ES modules — matches app/data/* convention (workspace CLAUDE.md, root §7).

   ambient: whole-plate layers, CSS mix-blend-mode multiply then screen, in that order.
     multiply '#ffffff' = no darkening; screen '#000000' = no lightening. Together they can
     both darken (multiply < white) and lift shadows (screen > black) without ever crushing
     to pure black/white, because a flat-colour multiply/screen pair is monotonic per channel.
   window: a flat colour tint drawn ONLY over SCENE_MAP.window.box, blended with `blend` at
     `opacity`. Flat colour, no gradient (brief requirement).
   lamp: 0..1 flame intensity, DATA ONLY — no flame/glow is drawn by this pilot.

   Master plate (master-v2-b.png) is a NIGHT scene: dark sky/sea in the window, lamp unlit.
   So `night` is the identity grade; every other preset re-lights it. */
var SCENE_GRADES = {
  // Rose dawn: dim, cool-warm blush light; sky just starting to pale pink; lamp still on low.
  dawn: {
    ambient: { multiply: '#c8a8ac', screen: '#180a10' },
    window:  { color: '#ffb3a0', blend: 'soft-light', opacity: 0.50 },
    lamp: 0.30,
  },

  // Clear bright day: full daylight lift, cool-neutral cast, lamp essentially off.
  day: {
    ambient: { multiply: '#f5f5f2', screen: '#3a3a38' },
    window:  { color: '#bfe3ff', blend: 'screen', opacity: 0.45 },
    lamp: 0.05,
  },

  // Amber dusk: warm, mid-low light, sun going down through the window; lamp trimmed up.
  dusk: {
    ambient: { multiply: '#c89060', screen: '#1c0e04' },
    window:  { color: '#ff9a4d', blend: 'color', opacity: 0.60 },
    lamp: 0.75,
  },

  // Night: identity grade — the master plate already IS this state. Lamp at full.
  night: {
    ambient: { multiply: '#ffffff', screen: '#000000' },
    window:  { color: '#000000', blend: 'screen', opacity: 0.00 },
    lamp: 1.00,
  },
};
