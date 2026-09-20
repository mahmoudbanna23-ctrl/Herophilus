function ico(name,size){
  const d=ICONS[name];
  if(!d)return '';
  const parts=d.split('@').map(p=>`<path d="${p}"/>`).join('');
  return `<svg class="gi" viewBox="0 0 24 24" width="${size||18}" height="${size||18}"
    fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round"
    stroke-linejoin="round" aria-hidden="true" focusable="false">${parts}</svg>`;
}

/* ============ THEME ============ */
/* Light/dark is a DEVICE preference, not a profile one — it is about the room
   you are sitting in, not who is studying. So it lives in its own localStorage
   key, survives a profile switch, and is deliberately NOT synced to the cloud:
   the same account on a phone at night and a laptop by a window wants two
   different answers.

   The key joins the existing wardround.* family. The prefix is legacy and
   invisible to users, but consistency matters more than tidiness here. */
const THKEY='wardround.theme';
