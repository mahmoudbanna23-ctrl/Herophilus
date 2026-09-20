function showModal(html,wide){const m=$('modal');m.innerHTML=html;if(m.classList){wide?m.classList.add('wide'):m.classList.remove('wide')}$('modalBg').classList.add('show')}
function closeModal(){$('modalBg').classList.remove('show')}
function showShortcuts(){
  showModal(`<h3>${ico('keys',19)} Shortcuts</h3>
   <div class="shortcuts">
     <span><span class="kbd">A</span>–<span class="kbd">E</span></span><span class="d">Pick an answer</span>
     <span><span class="kbd">Enter</span></span><span class="d">Check, then next</span>
     <span><span class="kbd">→</span> / <span class="kbd">←</span></span><span class="d">Next / previous</span>
     <span><span class="kbd">E</span></span><span class="d">Toggle explanation</span>
     <span><span class="kbd">F</span></span><span class="d">Flag question</span>
     <span><span class="kbd">J</span></span><span class="d">Jump to any question</span>
     <span><span class="kbd">1</span>–<span class="kbd">4</span></span><span class="d">Pick a highlighter colour</span>
     <span><span class="kbd">0</span></span><span class="d">Eraser</span>
     <span><span class="kbd">/</span></span><span class="d">Jump to search</span>
     <span><span class="kbd">T</span></span><span class="d">Light / dark mode</span>
     <span><span class="kbd">Esc</span></span><span class="d">Close</span>
   </div>
   <div class="modal-actions" style="margin-top:21px"><button class="btn go" onclick="closeModal()">Got it</button></div>`);
}
/* ============================================================================
   BACKUP — automatic.

   This replaced a pair of Export / Import buttons. The trouble with those is
   not that they did not work; it is that they only work if you remember to
   press them, and nobody presses Export the day before they need it.

   So: a dated snapshot is kept per profile, pruned to a size the browser will
   actually hold, and restored on its own when the live state is missing or
   unreadable. Everything else is one-click from the shield in the top bar.

   The one thing this deliberately does NOT do is second-guess a state that
   loads cleanly. "Your progress looks smaller than it did" is a judgement, and
   a wrong judgement here silently overwrites real work — so a thinner-but-valid
   state is left alone and offered in the list instead.

   Scope: this is a browser-local safety net. It survives a crash, a bad write
   and an accidental reset. It does NOT survive clearing browser data or moving
   to another machine — signing in is what covers those.
   ============================================================================ */
let bakTimer=null, bakLast=0, bakState='ok', bakRestored=0;
const BAK_MAX_BYTES=1500000;    /* localStorage gives ~5 MB; the live state and
                                   the profile list have to fit beside this */

function bakKey(){ return 'wardround.bak.'+((me&&me.id)||'local') }
function bakRead(){
  try{
    const o=JSON.parse(localStorage.getItem(bakKey())||'null');
    if(o&&Array.isArray(o.snaps))return o;
  }catch(e){}
  return {v:1,snaps:[]};
}
function bakWrite(box){
  try{
    localStorage.setItem(bakKey(),JSON.stringify(box));
    bakState='ok';
  }catch(e){
    /* out of room — drop back to the two most recent and try once more before
       admitting it. A backup that throws is worse than a shallow one. */
    try{
      box.snaps=box.snaps.slice(0,2);
      localStorage.setItem(bakKey(),JSON.stringify(box));
      bakState='ok';
    }catch(e2){ bakState='full' }
  }
  paintBakBtn();
}
/* Newest three always; then one per day for up to seven days; then whatever
   fits in the byte budget. Two survive the budget no matter what. */
function bakPrune(snaps){
  snaps.sort((a,b)=>b.at-a.at);
  const keep=[], days={};
  snaps.forEach((s,i)=>{
    if(i<3){keep.push(s);days[s.day]=1;return}
    if(!days[s.day]&&Object.keys(days).length<7){keep.push(s);days[s.day]=1}
  });
  const out=[]; let total=0;
  for(const s of keep){
    total+=s.json.length;
    if(total>BAK_MAX_BYTES&&out.length>=2)break;
    out.push(s);
  }
  return out;
}
function bakSnapshot(){
  if(!me)return;
  let json;
  try{ json=JSON.stringify(S) }catch(e){ return }
  const box=bakRead();
  /* nothing changed since the last one — do not spend a slot on a duplicate */
  if(box.snaps[0]&&box.snaps[0].json===json){ paintBakBtn(); return }
  box.snaps.unshift({at:Date.now(),day:todayISO(),json:json});
  box.snaps=bakPrune(box.snaps);
  bakWrite(box);
}
/* Debounced off save(): a burst of answers collapses into one snapshot, and
   after that at most one every four minutes. */
function bakSchedule(){
  if(bakTimer)return;
  const wait=Math.max(4000,240000-(Date.now()-bakLast));
  bakTimer=setTimeout(()=>{ bakTimer=null; bakLast=Date.now(); bakSnapshot() },wait);
}
function bakNewest(){
  /* Walks the list newest-first. The previous version took only snaps[0], so a
     truncated or corrupt newest snapshot was a complete outage: loadState()
     would conclude there was nothing to rescue while five perfectly good
     snapshots sat behind the bad one. Walk past every entry that fails to
     parse, keep returning the same {at,state} shape the caller already reads,
     and only return null when nothing in the list is usable. A rescue path is
     the wrong place to delete anything — bad entries are left alone in storage
     so bakRestore() can still see them and the snapshot history is not
     quietly rewritten by the one path that exists to be safe. */
  const box=bakRead();
  const snaps=box.snaps||[];
  for(let i=0;i<snaps.length;i++){
    const s=snaps[i];
    if(!s)continue;
    try{ return {at:s.at,state:JSON.parse(s.json)} }catch(e){}
  }
  return null;
}
function bakWhen(ts){
  const d=Math.max(0,Date.now()-ts);
  if(d<90000)return 'just now';
  if(d<3600000)return Math.round(d/60000)+' min ago';
  if(d<86400000)return Math.round(d/3600000)+' h ago';
  const dd=new Date(ts);
  return dd.toLocaleDateString('en-GB',{day:'numeric',month:'short'})+' at '+
         dd.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
}
function paintBakBtn(){
  const b=$('bakBtn'); if(!b)return;
  const box=bakRead(), n=box.snaps.length;
  b.innerHTML=ico('shield',17)+`<span class="bak-dot${bakState==='full'?' warn':''}"></span>`;
  b.title=bakState==='full'
    ? 'Backup — no room left in this browser'
    : (n?`Backup — ${n} snapshot${n===1?'':'s'}, newest ${bakWhen(box.snaps[0].at)}`
        :'Backup — nothing snapshotted yet');
  b.setAttribute('aria-label',b.title);
}
function showBackup(){
  const box=bakRead();
  const rows=box.snaps.map(s=>{
    const kb=Math.max(1,Math.round(s.json.length/1024));
    let n=0; try{ n=Object.keys(JSON.parse(s.json).answers||{}).length }catch(e){}
    return `<div class="bak-row">
      <span class="bak-when">${bakWhen(s.at)}</span>
      <span class="bak-meta">${n} answered · ${kb} KB</span>
      <button class="ed-t" onclick="bakConfirm(${s.at})">Restore</button>
    </div>`;
  }).join('');
  showModal(`<h3>${ico('shield',19)} Backup</h3>
   <p>Your progress saves the moment you answer, and a dated snapshot is kept automatically.
      ${bakState==='full'?'<b style="color:var(--bad)">This browser has run out of storage, so new snapshots are not being kept.</b>':'There is nothing for you to press.'}</p>
   ${rows?`<div class="bak-list">${rows}</div>`
         :`<p style="color:var(--ink-4)">No snapshots yet — the first one is taken a few seconds after your next answer.</p>`}
   <p style="font-size:12.5px;color:var(--ink-4);margin-top:14px">
     Snapshots live in this browser. They survive a crash or a bad write, but not clearing your
     browser data — sign in if you want your progress kept off this machine.</p>
   <div class="modal-actions" style="margin-top:18px">
     <button class="btn sec" onclick="exportData()">Download a copy</button>
     <button class="btn sec" onclick="document.getElementById('importFile').click()">Restore from a file</button>
     <button class="btn go" onclick="closeModal()">Close</button>
   </div>`,true);
}
function bakConfirm(at){
  const box=bakRead(), s=box.snaps.find(x=>x.at===at);
  if(!s){toast('That snapshot is gone');return}
  let n=0; try{ n=Object.keys(JSON.parse(s.json).answers||{}).length }catch(e){}
  const now=Object.keys(S.answers||{}).length;
  showModal(`<h3>Restore ${bakWhen(at)}?</h3>
   <p>That snapshot holds <b>${n}</b> answered question${n===1?'':'s'}. You currently have <b>${now}</b>.
      Restoring replaces what is on this device now.</p>
   ${n<now?`<p style="color:var(--warn)"><b>Note:</b> the snapshot has fewer answers than you have now,
      so this would lose ${now-n} of them.</p>`:''}
   <div class="modal-actions">
     <button class="btn sec" onclick="showBackup()">Back</button>
     <button class="btn go" onclick="bakRestore(${at})">Restore it</button>
   </div>`);
}
function bakRestore(at){
  const box=bakRead(), s=box.snaps.find(x=>x.at===at);
  if(!s){toast('That snapshot is gone');return}
  let st; try{ st=checkedProgressState(JSON.parse(s.json)) }catch(e){ toast('That snapshot is unusable. Your current progress has been kept.'); return }
  S=Object.assign({answers:{},flags:{},conf:{},sched:{},srs:{},days:{},hl:{},banks:{},resumeByChapter:{},notes:{},reports:{}},st);
  if(Q.exam){examStopTick();Q.exam=null;view={name:'home'}}
  if(sess())sessStartTick(); else sessStopTick();
  save(); closeModal(); render();
  toast('Restored your progress from '+bakWhen(at));
}

function exportData(){
  const blob=new Blob([JSON.stringify({v:2,saved:new Date().toISOString(),state:S},null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);a.download=`herophilus-progress-${todayISO()}.json`;a.click();
  toast('Progress downloaded');
}
/* Known fields are checked where their readers need a particular shape. Extra
   JSON fields are retained, so adding a runtime field does not make exports lossy. */
function checkedProgressState(st){
  const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
  const obj=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
  const num=v=>typeof v==='number'&&Number.isFinite(v)&&v>=0;
  const int=v=>Number.isInteger(v)&&v>=0;
  const str=v=>typeof v==='string';
  const bool=v=>typeof v==='boolean';
  const strings=v=>Array.isArray(v)&&v.every(str);
  const date=v=>str(v)&&/^\d{4}-\d{2}-\d{2}$/.test(v)&&Number.isFinite(Date.parse(v));
  const optional=(o,k,test)=>!own(o,k)||test(o[k]);
  const map=(v,test)=>obj(v)&&Object.keys(v).every(k=>test(v[k]));
  const bad=k=>{throw new Error('Invalid progress field: '+k)};
  /* JSON.parse accepts these names as data, but Object.assign and later map
     writes can give them prototype behaviour. Reject them before any merge. */
  function safe(v){
    if(v===null||str(v)||bool(v))return true;
    if(typeof v==='number')return Number.isFinite(v);
    if(Array.isArray(v))return v.every(safe);
    return obj(v)&&Object.keys(v).every(k=>
      ['__proto__','constructor','prototype'].indexOf(k)<0&&safe(v[k]));
  }
  if(!obj(st)||!own(st,'answers')||!safe(st))bad('state');
  const rating=v=>int(v)&&v<=2;
  const answer=v=>obj(v)&&bool(v.ok)&&optional(v,'at',num)&&
    (own(v,'pick')||own(v,'text'))&&
    optional(v,'pick',x=>x===null||int(x))&&optional(v,'text',str)&&
    optional(v,'got',int)&&optional(v,'total',int)&&optional(v,'conf',rating);
  const checks={
    answers:v=>map(v,answer),
    flags:v=>map(v,bool),
    conf:v=>map(v,rating),
    sched:v=>map(v,x=>x==='done'||x==='missed'),
    srs:v=>map(v,x=>obj(x)&&int(x.lvl)&&x.lvl<SRS.length&&date(x.due)),
    days:v=>map(v,bool),
    hl:v=>map(v,x=>Array.isArray(x)&&x.every(h=>obj(h)&&int(h.s)&&int(h.e)&&
      h.e>h.s&&['y','g','p','b'].indexOf(h.c)>=0)),
    banks:v=>map(v,strings),
    resumeByChapter:v=>map(v,x=>obj(x)&&str(x.qid)&&strings(x.sources)&&
      num(x.at)&&bool(x.finished)),
    notes:v=>map(v,x=>obj(x)&&str(x.txt)&&num(x.at)),
    reports:v=>map(v,x=>obj(x)&&str(x.kind)&&str(x.txt)&&num(x.at))
  };
  const out=Object.assign({},st);
  Object.keys(checks).forEach(k=>{
    if(!own(out,k))out[k]={};
    else if(!checks[k](out[k]))bad(k);
  });
  const item=x=>obj(x)&&str(x.label)&&str(x.text)&&
    optional(x,'hex',v=>str(v)&&/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(v));
  const schedule=v=>v===null||(Array.isArray(v)&&v.every(d=>obj(d)&&date(d.date)&&
    optional(d,'rest',bool)&&Array.isArray(d.items)&&d.items.every(item)));
  const session=v=>v===null||(obj(v)&&obj(v.plan)&&
    num(v.startedAt)&&num(v.phaseStart)&&num(v.pausedAt)&&bool(v.paused)&&
    (v.phase==='focus'||v.phase==='break')&&int(v.cycle)&&v.cycle>0&&
    num(v.plan.focus)&&v.plan.focus>0&&num(v.plan.brk)&&v.plan.brk>0&&
    int(v.plan.cycles)&&v.plan.cycles>0&&str(v.scope)&&
    optional(v,'term',id=>TERMS.some(t=>t.id===id))&&
    optional(v,'lost',num)&&optional(v,'focusMs',num)&&optional(v,'done',bool));
  const log=v=>Array.isArray(v)&&v.every(x=>obj(x)&&num(x.start)&&num(x.end)&&
    int(x.cycles)&&num(x.focusMin)&&int(x.answered)&&int(x.correct)&&
    str(x.scope)&&bool(x.completed)&&optional(x,'term',id=>TERMS.some(t=>t.id===id)));
  const extra={term:v=>v===null||!!termChoice(v),
    schedule:schedule,updatedAt:num,editSched:bool,sess:session,
    sessLog:log,mockResume:validMockResume};
  Object.keys(extra).forEach(k=>{if(!optional(out,k,extra[k]))bad(k)});
  return out;
}
function importData(e){
  const f=e.target.files[0];if(!f)return;
  const entry=profileLoad, key=KEY, profile=me;
  const r=new FileReader();
  r.onload=async()=>{
    if(entry!==profileLoad||key!==KEY||profile!==me)return;
    let incoming;
    try{
      const d=JSON.parse(r.result);
      if(!d||d.v!==2)throw new Error('Expected a version 2 progress export');
      incoming=checkedProgressState(d.state);
    }catch(err){toast('Could not import that file. '+err.message);return}
    if(!window.confirm('Merge this file into the current profile? Existing progress is kept where possible; more recent entries and settings win conflicts, including the saved mock paper.'))return;
    if(entry!==profileLoad||key!==KEY||profile!==me)return;
    let next;
    try{
      const newer=(S.updatedAt||0)>=(incoming.updatedAt||0)?S:incoming;
      const older=newer===S?incoming:S;
      next=checkedProgressState(Object.assign({},older,newer,mergeStates(S,incoming)));
    }catch(err){toast('Could not merge that progress. '+err.message);return}
    S=next;
    /* A running paper must reopen from the merged record, or its next tap would
       overwrite the imported paper with the quiz that was already on screen. */
    if(Q.exam){examStopTick();Q.exam=null;view={name:'home'}}
    if(sess())sessStartTick(); else sessStopTick();
    render();
    const saved=await save();
    if(entry===profileLoad&&key===KEY&&profile===me){
      toast(saved?'Progress merged':'Progress merged in memory. Download a copy before leaving.');
    }
  };
  r.onerror=()=>{if(entry===profileLoad&&key===KEY&&profile===me)toast('Could not read that file')};
  r.readAsText(f);e.target.value='';
}
function toggleRail(){$('rail').classList.toggle('open')}
function closeRail(){$('rail').classList.remove('open')}

/* ============ KEYBOARD ============ */
document.addEventListener('keydown',e=>{
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT')return;
  /* The handler has to know when an overlay is up. Without this guard, a student
     who opens the keyboard-shortcuts dialog (or any modal built by showModal)
     still has every quiz shortcut live underneath it: a letter answers the
     question behind the dialog, E toggles its explanation, 1-4 sets a pen, and
     pick() writes that answer to storage as if the student had really chosen
     it. The only overlay that intercepts the page underneath is #modalBg.show
     — the toast is transient and non-blocking, the gate covers the page before
     any quiz view, and the rail slides alongside. While the modal is open,
     Escape still has to close it (already wired below); nothing else does. */
  if($('modalBg').classList.contains('show')){
    if(e.key==='Escape'){closeModal();return}
    return;
  }
  /* The search results listbox is a different case and belongs to doSearch(): a
     focused result button answers its own keys (ArrowDown/Up/Enter/Escape) via
     the keydown listener attached at render time. If focus is on a result while
     the listbox is open, the page underneath must also stay silent — without
     this, pressing A on a focused result would pick an answer behind it. */
  if($('results').classList.contains('show')&&e.target.closest&&e.target.closest('#results'))return;
  if(e.key==='Escape'){closeModal();$('results').classList.remove('show');return}
  if(e.key==='/'){e.preventDefault();$('search').focus();return}
  /* Global, so it works while reading theory as well as in a quiz. Safe above
     the quiz guard because typing targets bailed out at the top of the handler. */
  if(e.key==='t'||e.key==='T'){toggleTheme();return}
  /* Page turning. Above the quiz guard so it works while reading, and it only
     fires when the reader is actually up. */
  if(bkOn()){
    if(e.key==='ArrowRight'||e.key==='PageDown'||e.key===' '){e.preventDefault();bkTurn(1);return}
    if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();bkTurn(-1);return}
    if(e.key==='Home'){e.preventDefault();BK.page=0;bkPaint();return}
    if(e.key==='End'){e.preventDefault();BK.page=BK.pages-1;bkPaint();return}
  }
  if(view.name!=='quiz')return;
  const q=QUESTIONS.find(x=>x.id===Q.ids[Q.i]);
  if(!q)return;
  const k=e.key.toUpperCase();
  if(!Q.shown&&q.options&&k.length===1){const i=OPT_LETTERS.indexOf(k);if(i>=0&&i<q.options.length){pick(i,true);return}}
  if(k==='E'&&Q.shown){const b=document.querySelector('.ex-head');if(b)toggleExp(b);return}
  if('1234'.includes(e.key)){setPen(PENS[+e.key-1][0]);return}
  if(e.key==='0'){setPen('er');return}
  if(k==='J'){openJump();return}
  if(k==='F'){toggleFlag(q.id);return}
  /* In a paper Enter moves on — there is nothing to reveal. */
  if(e.key==='Enter'){e.preventDefault();(Q.shown||Q.exam)?navQ(1):(q.type==='case'?revealCase():reveal());return}
  if(e.key==='ArrowRight'){navQ(1);return}
  if(e.key==='ArrowLeft'){navQ(-1);return}
});
$('search').addEventListener('input',function(){doSearch.all=false;doSearch()});
document.addEventListener('click',e=>{
  if(!e.target.closest('.search-wrap')){
    $('results').classList.remove('show');
    $('search').setAttribute('aria-expanded','false');
  }
});
/* The long placeholder is worth having — it is where a student learns the
   search reads explanations too — but on a phone it clips mid-word to
   "Search questions, to", which reads as breakage rather than as a hint. CSS
   cannot change placeholder text, so the swap is here. matchMedia rather than
   a resize handler: it fires only on the crossing, not on every pixel. */
(function(){
  var narrow=matchMedia('(max-width:520px)'), el=$('search');
  function setPh(){ el.placeholder = narrow.matches ? 'Search questions'
    : 'Search questions, topics, explanations\u2026'; }
  narrow.addEventListener('change',setPh); setPh();
})();

boot();
async function boot(){
  if(!warnSaveFailure.checkData()){hideSplash();return}
  paintThemeBtn();          /* the icon depends on the theme the head script chose */
  clepLoadCfg();            /* where she stands is a device preference, like the theme */
  paintBakBtn();
  bootstrapProfiles();
  if(cloudEnabled()){
    showSplash('Restoring your session\u2026');
    let restored=false;
    try{
      restored=await Promise.race([
        restoreSession(),
        new Promise(r=>setTimeout(()=>r(false),15000))
      ]);
    }catch(e){}
    hideSplash();
    /* A restored session no longer means "straight into the app": afterSignIn()
       now hands off to gate step 2 so a profile is always chosen explicitly.
       Returning here is still right \u2014 that path has already drawn the gate. */
    if(restored)return;
  }else{
    hideSplash();
  }
  showGate();
}
