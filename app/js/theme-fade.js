/* lean-in: a user-initiated theme switch cross-fades with the browser's own View Transition (default animation, nothing authored).
   theme.js is frozen, so the fade wraps toggleTheme here; the OS-follow and boot calls to setTheme stay instant.
   The home painting for the incoming theme is decoded first so the fade never lands on a blank picture. */
(function(){
  const plain=toggleTheme;
  toggleTheme=function(){
    if(!document.startViewTransition||matchMedia('(prefers-reduced-motion:reduce)').matches)return plain();
    const t=currentTheme()==='light'?'dark':'light';
    const img=document.querySelector('.lean-plate .plate-'+(t==='light'?'day':'night')+' img');
    const tr=document.startViewTransition(async()=>{
      if(img){img.loading='eager';try{await img.decode()}catch(e){}}
      plain();
    });
    tr.ready.catch(()=>{});
    tr.finished.catch(()=>{});
  };
})();
