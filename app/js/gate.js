function cloudConfig(){
  if(FIREBASE_CONFIG&&FIREBASE_CONFIG.apiKey)return FIREBASE_CONFIG;
  try{
    const c=JSON.parse(localStorage.getItem('wardround.fbconfig')||'null');
    if(c&&c.apiKey)return c;
  }catch(e){}
  return null;
}
function cloudEnabled(){return location.protocol!=='file:'&&!!cloudConfig()}

function loadSDK(){
  if(window.firebase)return Promise.resolve(true);
  if(sdkLoading)return sdkLoading;
  sdkLoading=new Promise(res=>{
    let settled=false;
    const done=v=>{if(!settled){settled=true;res(v)}};
    /* never let a slow or blocked CDN strand the user on the splash */
    setTimeout(()=>done(!!window.firebase),8000);
    let i=0;
    const next=()=>{
      if(settled)return;
      if(i>=SDK.length)return done(!!window.firebase);
      const s=document.createElement('script');
      s.src=SDK[i++];
      s.onload=next;
      s.onerror=()=>done(false);
      document.head.appendChild(s);
    };
    next();
  });
  return sdkLoading;
}
async function initCloud(){
  if(!cloudEnabled())return false;
  const cfg=cloudConfig();
  if(!cfg)return false;
  const ok=await loadSDK();
  if(!ok)return false;
  try{
    if(!fbApp)fbApp=firebase.initializeApp(cfg);
  }catch(e){
    if(firebase.apps&&firebase.apps.length)fbApp=firebase.apps[0];
    else return false;
  }
  /* keep the session across browser restarts */
  try{await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)}catch(e){}
  return true;
}
function isStandalone(){
  return (window.navigator&&window.navigator.standalone===true)||
         (window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches);
}
let lastSyncAt=0;
const syncClock=ts=>new Date(ts).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
function setSync(s){
  if(s==='idle')lastSyncAt=Date.now();
  if(s==='off')lastSyncAt=0;
  syncState=s;
  if(s==='err'){if(!retryTimer)retryTimer=setInterval(retrySync,180000)}
  else stopRetry();
  const el=$('railSync');if(el&&me)drawRailSync();
}
function drawRailSync(){
  const el=$('railSync');
  if(!el)return;
  if(!fbUser){el.innerHTML='';el.style.display='none';return}
  el.style.display='flex';
  /* "Synced" alone is a claim with no time on it, and a push that quietly
     stopped an hour ago looks identical to one that finished a second ago.
     Say when. */
  const when=lastSyncAt?' '+syncClock(lastSyncAt):'';
  const label={idle:'Synced'+when,busy:'Syncing\u2026',err:'Sync failed \u2014 retry on next change',off:'Offline'}[syncState]||'Synced'+when;
  const cls={idle:'ok',busy:'busy',err:'err',off:''}[syncState]||'ok';
  el.innerHTML=`<span class="syncdot ${cls}"></span>${label}`;
}

async function signInGoogle(){
  const ok=await initCloud();
  if(!ok){toast('Sync is not available right now');return}
  const prov=new firebase.auth.GoogleAuthProvider();
  prov.setCustomParameters({prompt:'select_account'});
  /* popups are unreliable inside the iOS home-screen app \u2014 use a redirect there */
  if(isStandalone()){
    try{await firebase.auth().signInWithRedirect(prov)}
    catch(e){toast('Sign-in failed: '+(e&&e.code||e))}
    return;
  }
  try{
    const res=await firebase.auth().signInWithPopup(prov);
    await afterSignIn(res.user);
  }catch(e){
    const m=String(e&&e.code||e);
    if(/popup-closed|cancelled/i.test(m)){toast('Sign-in cancelled');return}
    if(/unauthorized-domain/i.test(m)){toast('This address is not authorised in Firebase');return}
    if(/popup-blocked/i.test(m)){
      try{await firebase.auth().signInWithRedirect(prov)}catch(e2){toast('Sign-in blocked by the browser')}
      return;
    }
    toast('Sign-in failed: '+m);
  }
}
async function afterSignIn(u){
  resetCloud();cloudAuth++;
  fbUser=u;
  const auth=cloudAuth;
  const local=new Map(profiles.map(p=>[p.id,JSON.stringify(rosterProfile(p))]));
  /* Signing in while studying keeps the local profile and merges its work.
     The picker stays usable while another device's roster is arriving. */
  if(me)pullCloud();else showGate('profiles');
  try{
    const ref=rosterRef();
    if(!ref)return;
    const snap=await cloudWait(ref.get());
    if(auth!==cloudAuth||!fbUser||fbUser.uid!==u.uid)return;
    rosterList(snap.exists?snap.data():{}).forEach(p=>{
      const old=profiles.find(x=>x.id===p.id);
      if(!old){if(!local.has(p.id))profiles.push(Object.assign({pin:''},p))}
      else if(local.get(p.id)===JSON.stringify(rosterProfile(old)))Object.assign(old,p);
    });
    saveProfiles();
    if(!me&&!draft){
      showGate('profiles');
      if(!profiles.length){
        draft={id:'g:'+u.uid,name:(u.displayName||'Me').split(' ')[0],
               /* No Google picture, so the account is given a portrait rather
                  than one house default: avKey hashes whatever it is handed, so
                  two colleagues signing in on the same laptop are not twins. */
               av:u.photoURL?{t:'p',v:u.photoURL,c:'#6d4c7d'}
                            :{t:'g',v:avKey({v:u.uid||u.email||''}),c:'#6d4c7d'},pin:''};
        drawProfileEditor(false);
      }
    }
  }catch(e){if(auth===cloudAuth)setSync('err')}
}
async function signOutCloud(){
  resetCloud();cloudAuth++;
  fbUser=null;setSync('off');
  me=null;closeModal();showGate();
  try{if(window.firebase&&firebase.auth)await cloudWait(firebase.auth().signOut())}catch(e){}
  toast('Signed out \u2014 your progress stays on this device');
}

function cloudWait(work){
  let timer;
  return Promise.race([work,new Promise((_,reject)=>{
    timer=setTimeout(()=>reject(new Error('Sync timed out')),8000);
  })]).finally(()=>clearTimeout(timer));
}
function resetCloud(){
  clearTimeout(pushTimer);pushTimer=null;cloudSession=null;stopRetry();
}
function stopRetry(){clearInterval(retryTimer);retryTimer=null}
/* A push that failed offline must not go silent until reload — retry once
   the browser says we're back online, and slowly meanwhile in case that event
   never fires. Only runs while a session exists and the last sync actually failed. */
function retrySync(){
  if(syncState!=='err')return;
  if(!cloudEnabled()||!fbUser){stopRetry();return}
  if(currentCloud(cloudSession))pushCloud(cloudSession);
  else if(me)pullCloud();
}
window.addEventListener('online',retrySync);
function currentCloud(c){
  return !!(c&&c===cloudSession&&fbUser&&me&&c.auth===cloudAuth&&
            c.uid===fbUser.uid&&c.pid===me.id);
}
function rosterRef(uid=fbUser&&fbUser.uid){
  if(!uid||!cloudEnabled()||!window.firebase||!firebase.firestore)return null;
  try{return firebase.firestore().collection('users').doc(uid)}catch(e){return null}
}
function docRef(){
  if(!me||!fbUser)return null;
  const ref=rosterRef();
  return ref?ref.collection('profiles').doc(me.id):null;
}
function rosterProfile(p){
  const av=p.av||{};
  return {id:p.id,name:p.name||'Untitled',av:{t:av.t||'e',v:av.v||'',c:av.c||'#6d4c7d',f:av.f||'plain'}};
}
function rosterList(data,p,remove=false){
  const list=(Array.isArray(data.profiles)?data.profiles:[])
    .filter(x=>x&&typeof x.id==='string'&&x.id&&(!p||x.id!==p.id)).map(rosterProfile);
  if(p&&!remove)list.push(rosterProfile(p));
  return list;
}
async function syncRoster(p,remove=false){
  const ref=rosterRef(),auth=cloudAuth;
  if(!ref)return;
  const entry=rosterProfile(p);
  let live=true;
  try{
    await cloudWait(firebase.firestore().runTransaction(async tx=>{
      const snap=await tx.get(ref);
      if(!live||auth!==cloudAuth||!fbUser)return;
      /* Keep a legacy state until profile entry can adopt it atomically. */
      tx.set(ref,{profiles:rosterList(snap.exists?snap.data():{},entry,remove)},{merge:true});
      if(remove)tx.delete(ref.collection('profiles').doc(entry.id));
    }));
  }catch(e){if(auth===cloudAuth)setSync('err')}
  finally{live=false}
}
function mergeStates(a,b){
  const at=a.updatedAt||0, bt=b.updatedAt||0;
  const newer=at>=bt?a:b, older=at>=bt?b:a;
  const out=JSON.parse(JSON.stringify(newer));
  /* Answering on another device advances updatedAt without changing the
     student's semester. Only an explicit selection advances this clock.
     Equal clocks use the same tie-break in either merge direction. */
  const termA=termChoice(a.term), termB=termChoice(b.term);
  const chosenTerm=!termA?termB:!termB?termA:
    (termA.at>termB.at||(termA.at===termB.at&&termA.id>=termB.id)?termA:termB);
  if(chosenTerm)out.term=chosenTerm; else delete out.term;
  out.answers={};
  const ids=new Set(Object.keys(a.answers||{}).concat(Object.keys(b.answers||{})));
  ids.forEach(id=>{
    const x=(a.answers||{})[id], y=(b.answers||{})[id];
    if(!x){out.answers[id]=y;return}
    if(!y){out.answers[id]=x;return}
    out.answers[id]=((x.at||0)>=(y.at||0))?x:y;
  });
  ['srs','hl','flags','conf','days','sched'].forEach(k=>{
    out[k]=Object.assign({},older[k]||{},newer[k]||{});
  });
  /* Each chapter has its own clock: practising another chapter on a second
     device must not discard a more recent place in this one. */
  out.resumeByChapter={};
  const chapters=new Set(Object.keys(a.resumeByChapter||{}).concat(Object.keys(b.resumeByChapter||{})));
  chapters.forEach(cid=>{
    const x=(a.resumeByChapter||{})[cid], y=(b.resumeByChapter||{})[cid];
    out.resumeByChapter[cid]=!x?y:!y?x:((x.at||0)>=(y.at||0)?x:y);
  });
  /* A note and a report are written per question and stamped, so they merge the
     way answers do. Object.assign would let the whole of an older device's notes
     lose to the whole of a newer one's, which is how a note gets typed on a phone
     and vanishes on a laptop. */
  ['notes','reports'].forEach(k=>{
    out[k]={};
    const keys=new Set(Object.keys(a[k]||{}).concat(Object.keys(b[k]||{})));
    keys.forEach(id=>{
      const x=(a[k]||{})[id], y=(b[k]||{})[id];
      out[k][id]=!x?y:!y?x:((x.at||0)>=(y.at||0)?x:y);
    });
  });
  out.schedule=newer.schedule||older.schedule||null;
  /* A paper travels as one record. Combining picks from different sittings would
     invent a paper; a dated empty record also prevents an older copy returning. */
  const x=a.mockResume, y=b.mockResume;
  out.mockResume=!x?(y||null):!y?x:
    x.at!==y.at?(x.at>y.at?x:y):
    x.paper===null?x:y.paper===null?y:
    (JSON.stringify(x)>=JSON.stringify(y)?x:y);
  out.updatedAt=Math.max(at,bt);
  return out;
}
async function pullCloud(){
  const ref=docRef();
  if(!ref)return;
  if(!currentCloud(cloudSession))cloudSession={uid:fbUser.uid,pid:me.id,auth:cloudAuth,
    ref:ref,key:KEY,mode:storageMode,running:false,again:false};
  await pushCloud(cloudSession);
}
function schedulePush(){
  const c=cloudSession;
  if(!currentCloud(c))return;
  clearTimeout(pushTimer);
  pushTimer=setTimeout(()=>{if(currentCloud(c))pushCloud(c)},1200);
}
async function pushCloud(c=cloudSession){
  if(!currentCloud(c))return;
  if(c.running){c.again=true;return}
  c.running=true;c.again=false;
  let live=true;
  setSync('busy');
  try{
    const local=JSON.parse(JSON.stringify(S)),entry=rosterProfile(me),root=rosterRef(c.uid);
    /* mergeStates rebuilds answers and resumeByChapter key by key, so its output
       does not compare byte-for-byte against its input even when nothing moved.
       Merging local with itself gives the same normal form, which is what makes
       the comparison below mean "another device changed something" rather than
       "the keys came back in a different order". */
    const before=JSON.stringify(mergeStates(local,local));
    const merged=await cloudWait(firebase.firestore().runTransaction(async tx=>{
      const roster=await tx.get(root),snap=await tx.get(c.ref);
      if(!live||!currentCloud(c))return null;
      const data=roster.exists?roster.data():{};
      let out=local;
      if(snap.exists&&snap.data().state)out=mergeStates(out,JSON.parse(snap.data().state));
      /* Removing the old field and adopting its contents in the same commit
         makes retries and simultaneous first sign-ins adopt it only once. */
      if(Object.prototype.hasOwnProperty.call(data,'state'))out=mergeStates(out,JSON.parse(data.state));
      tx.set(c.ref,{state:JSON.stringify(out),updatedAt:Date.now()});
      const list=rosterList(data);
      if(!list.some(p=>p.id===entry.id))list.push(entry);
      tx.set(root,{profiles:list});
      return out;
    }));
    if(!merged||!currentCloud(c))return;
    /* Include edits made during the request without scheduling an endless
       save/push loop. Their existing debounce sends them on the next pass. */
    S=mergeStates(S,merged);
    if(!S.hl)S.hl={};
    /* Apply a remote semester before another input can use the old quiz.
       Profile entry draws its own screen after loading has finished. */
    const termChanged=!termEntryPending&&termChoice(S.term)&&S.term.id!==activeTerm;
    if(termChanged)render();
    const raw=JSON.stringify(S);
    try{
      if(c.mode==='cloud'&&window.storage&&window.storage.set)await cloudWait(window.storage.set(c.key,raw));
      else if(c.mode==='local')localStorage.setItem(c.key,raw);
    }catch(e){warnSaveFailure()}
    if(!currentCloud(c))return;
    bakSchedule();
    /* A push runs 1.2 s after every answer. Repainting unconditionally would
       rebuild the page under the student mid-question — losing the caret in a
       case's answer box — for a merge that changed nothing, which is what a
       merge changes on a single device. Repaint only when a second device
       actually sent something back. */
    if(!termEntryPending&&!termChanged&&JSON.stringify(merged)!==before)render();
    setSync('idle');
  }catch(e){if(currentCloud(c))setSync('err')}
  finally{
    live=false;c.running=false;
    if(currentCloud(c)&&c.again)schedulePush();
  }
}

/* restore an existing session on load */
async function restoreSession(){
  if(!cloudEnabled())return false;
  const ok=await initCloud();
  if(!ok)return false;
  /* if we came back from a redirect sign-in, pick that up first */
  try{
    const r=await firebase.auth().getRedirectResult();
    if(r&&r.user){await afterSignIn(r.user);return true}
  }catch(e){console.warn('redirect result',e)}
  return new Promise(res=>{
    let done=false;
    const un=firebase.auth().onAuthStateChanged(async u=>{
      if(done)return;
      done=true;un();
      if(!u){res(false);return}
      await afterSignIn(u);
      res(true);
    });
    setTimeout(()=>{if(!done){done=true;try{un()}catch(e){}res(false)}},12000);
  });
}
function showSplash(msg){
  const s=$('splash');
  if(!s)return;
  if(msg){const m=$('splashMsg');if(m)m.textContent=msg}
  s.classList.remove('hide');
}
function hideSplash(){const s=$('splash');if(s)s.classList.add('hide')}

/* ---- setup helper ---- */
function syncSetup(){
  const cfg=cloudConfig();
  showModal(`<h3>Set up sync</h3>
   <p>Signing in with Google keeps your progress the same on your laptop, iPhone and iPad. It is free and needs no payment method.</p>
   <ol class="steps">
     <li>Go to <b>console.firebase.google.com</b> and click <b>Add project</b>. Any name will do.</li>
     <li>In the left menu open <b>Build \u2192 Authentication \u2192 Get started</b>, choose <b>Google</b>, enable it, and save.</li>
     <li>Open <b>Build \u2192 Firestore Database \u2192 Create database</b>. Pick <b>production mode</b>.</li>
     <li>Open the <b>Rules</b> tab and replace everything with this, then Publish:
       <div style="margin-top:6px"><code style="display:block;white-space:pre;padding:10px;line-height:1.5">rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null
                         &amp;&amp; request.auth.uid == uid;
      match /profiles/{pid} {
        allow read, write: if request.auth != null
                           &amp;&amp; request.auth.uid == uid;
      }
    }
  }
}</code></div>
       <div style="margin-top:5px;font-size:12px;color:var(--ink-4)">This is what stops anyone reading anyone else's progress. Don't skip it.</div>
     </li>
     <li>Click the gear \u2192 <b>Project settings</b>. Under <b>Your apps</b> choose the web icon <code>&lt;/&gt;</code>, register the app, and copy the <code>firebaseConfig</code> object.</li>
     <li>Paste it below and press Save.</li>
   </ol>
   <textarea class="cfgbox" id="cfgIn" placeholder='{ "apiKey": "\u2026", "authDomain": "\u2026", "projectId": "\u2026", "appId": "\u2026" }'>${cfg?esc(JSON.stringify(cfg,null,2)):''}</textarea>
   <div class="ai-note" style="font-size:11.5px;color:var(--ink-4);font-weight:600;margin-top:9px;line-height:1.55">
     These keys are meant to be public \u2014 Firebase security comes from the rules in step 4, not from hiding them.
     <br><b>Sign-in only works from a web address, not a downloaded file.</b> Step 7 below covers that.</div>
   <ol class="steps" start="7" style="margin-top:12px">
     <li>Put the app online so your phone can reach it. Easiest free route: in Firebase click <b>Build \u2192 Hosting \u2192 Get started</b>, or drop this file into any static host. You then open it at a real address like <code>yourproject.web.app</code>.</li>
     <li>On iPhone: open that address in Safari \u2192 Share \u2192 <b>Add to Home Screen</b>. It then behaves like an installed app.</li>
   </ol>
   <div class="modal-actions" style="margin-top:18px">
     <button class="btn sec" onclick="closeModal();showGate()">Close</button>
     ${cfg?`<button class="btn" style="background:var(--bad);border-color:var(--bad)" onclick="clearCfg()">Remove</button>`:''}
     <button class="btn go" onclick="saveCfg()">Save</button>
   </div>`,true);
}
function saveCfg(){
  const t=$('cfgIn');
  let raw=(t&&t.value||'').trim();
  if(!raw){toast('Paste the config first');return}
  raw=raw.replace(/^\s*(const|var|let)\s+\w+\s*=\s*/,'').replace(/;\s*$/,'');
  let obj=null;
  try{obj=JSON.parse(raw)}
  catch(e){
    try{obj=(new Function('return ('+raw+')'))()}
    catch(e2){toast('That does not look like a Firebase config');return}
  }
  if(!obj||!obj.apiKey){toast('Config is missing apiKey');return}
  try{localStorage.setItem('wardround.fbconfig',JSON.stringify(obj))}catch(e){}
  closeModal();toast('Saved \u2014 now sign in with Google');showGate();
}
function clearCfg(){
  try{localStorage.removeItem('wardround.fbconfig')}catch(e){}
  closeModal();showGate();toast('Sync configuration removed');
}

/* ============ PROFILES ============ */
const PKEY='wardround.profiles', LASTKEY='wardround.lastprofile';
let profiles=[], me=null, profileLoad=0;
/* THE EIGHT PORTRAITS. These were emoji first, then line emblems, and both
   failed the same way: an amphora and a lamp are objects, and nobody is an
   object. A profile picture is meant to be somebody, so these are people —
   the physicians and the healing gods this app is named out of, painted in
   the same low-key oil manner as the rest of the artwork so a profile sits
   inside the design instead of on top of it.

   Four men and four women, in that order, and each one carries a readable
   attribute because the picture is seen at 32px in the rail far more often
   than at 96px on a gate card: a stylus, a bald dome and a white beard, a
   scalpel, a serpent staff, an astrolabe, a serpent and bowl, a flask, a
   bronze helmet. Colour separates them before the face does.

   Eight, not twenty-four, because a wall of choices is not generosity: it is
   a picker to get through. */
const AVATARS=['herophilus','hippocrates','erasistratus','asclepius',
               'hypatia','hygieia','panacea','athena'];
const AVSET=new Set(AVATARS);
/* The file, not a data URI: eight portraits inlined would put a quarter of a
   megabyte of base64 in front of the first paint. Relative, so the app still
   opens from file:// with no server. */
function avSrc(k){return 'assets/av/'+k+'.jpg'}
/* Who each one is, for the picker's tooltip and the image's alt text. A face
   with no name is a decoration; with a name it is a choice. */
const AVNAMES={
  herophilus:'Herophilus of Alexandria',
  hippocrates:'Hippocrates of Kos',
  erasistratus:'Erasistratus of Ceos',
  asclepius:'Asclepius, god of medicine',
  hypatia:'Hypatia of Alexandria',
  hygieia:'Hygieia, goddess of health',
  panacea:'Panacea, goddess of remedies',
  athena:'Athena, goddess of wisdom'
};

/* A profile saved before this list existed holds an emoji, or an emblem key
   from the set before it, and those profiles are not rewritten — a stored
   record is not touched to suit a redesign, and a photo profile must keep its
   photo. So whatever is stored is resolved at DRAWING time, by hashing it into
   the current list. Deterministic, so a profile wears the same face on every
   device and every reload; and the moment it is next saved from the editor it
   writes a real key and stops hashing.

   Reordering or replacing AVATARS therefore changes which face those older
   profiles wear. That is accepted: it is cosmetic, it corrects itself on the
   next save, and the alternative is never being able to change the list. */
function avKey(av){
  if(!av)return AVATARS[0];
  if(av.t==='g'&&AVSET.has(av.v))return av.v;
  const s=String(av.v||'');
  if(!s)return AVATARS[0];
  let h=0;for(let i=0;i<s.length;i++)h=(Math.imul(h,31)+s.charCodeAt(i))>>>0;
  return AVATARS[h%AVATARS.length];
}
const AVCOLS=['#b4472f','#5c7a52','#6d4c7d','#2e5f8a','#9a6b1f','#8f3f5c','#3f7d7a','#7a6a55'];

function stateKey(id){return 'wardround.v3.'+id}
function loadProfiles(){
  try{profiles=JSON.parse(localStorage.getItem(PKEY))||[]}catch(e){profiles=[]}
}
function saveProfiles(){try{localStorage.setItem(PKEY,JSON.stringify(profiles))}catch(e){}}
function bootstrapProfiles(){
  loadProfiles();
  if(profiles.length)return;
  let old=null;
  try{old=localStorage.getItem('wardround.v2')}catch(e){}
  if(old){
    const p={id:'p'+Date.now(),name:'Me',av:{t:'g',v:AVATARS[0],c:'#6d4c7d'},pin:''};
    profiles.push(p);saveProfiles();
    try{localStorage.setItem(stateKey(p.id),old)}catch(e){}
  }
}
/* Wraps a ready-made <img> tag in whatever av.f asks for. "plain" (or no
   f at all — every profile made before this shipped) returns the image
   untouched, so the box's own border keeps drawing the ring it always has.
   The other three wrap it in a same-size inner span carrying that
   treatment's texture; moulding needs four nested spans for its stepped
   bands, mount and walnut need one. small drops the size-dependent detail
   (moulding's steps, walnut's swirl and knot) below the ~40px floor where
   they stop reading as detail — see the "Frame treatments" CSS block. */
function avFrame(f,imgHTML,small){
  f=f||'plain';
  if(f==='plain')return imgHTML;
  const cls='fr fr-'+f+(small?' fr-sm':'');
  if(f==='moulding')return `<span class="${cls}"><span class="b1"><span class="b2"><span class="bead"><span class="b3">${imgHTML}</span></span></span></span></span>`;
  return `<span class="${cls}">${imgHTML}</span>`;
}

/* One place draws an avatar, and every surface that shows one goes through it:
   the editor's preview and the rail (the gate cards and Manage profiles build
   their own wrapper — see the comments where they do). A portrait and an
   uploaded photo are now the same shape — an <img> filling the box — so both
   branches emit the same markup and the existing object-fit:cover rules size
   them.

   av.c survives as the ring rather than the backdrop. An opaque portrait hides
   whatever is painted behind it, and a colour picker that changes nothing is a
   dead control; on the border it still tells two profiles apart at a glance.
   --fr-c carries that same colour to the frame CSS. A ported frame (mount,
   moulding, walnut) draws its own edge, so the box's own border — the plain
   ring — is zeroed with the "hasfr" class whenever one is active; plain keeps
   the border exactly as it always has. */
function avHTML(av,cls){
  av=av||{t:'g',v:AVATARS[0],c:'#6d4c7d'};
  const src=av.t==='p'?av.v:avSrc(avKey(av));
  const f=av.f||'plain';
  const inner=avFrame(f,`<img src="${src}" alt="">`,cls==='rav');
  return `<div class="${cls}${f!=='plain'?' hasfr':''}" style="background:${av.c};border-color:${av.c};--fr-c:${av.c}">${inner}</div>`;
}

/* ---- gate ----
   TWO STEPS, in this order: sign in, then choose or create a profile.

   showGate() picks the step for itself unless told which one:
     - already signed in, or cloud unavailable  -> profiles. A sign-in step
       would be pointless in the first case and a dead end in the second.
     - otherwise                                -> sign-in first.
   Passing a step explicitly is how the Continue and Back buttons move.

   Every call rewrites innerHTML. That is deliberate: fresh elements are what
   makes the staggered entrance animations replay on each step change.        */
let gateStep='signin';
const GOOGLE_MARK=`<svg viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.7 1.22 9.2 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>`;

/* The orb field and the theme toggle belong to the gate, not to either step. */
function gateChrome(){
  return `<div class="gate-amb" aria-hidden="true">
      <video class="film" autoplay muted loop playsinline preload="auto"
             poster="assets/ambient-library.jpg" tabindex="-1">
        <source src="assets/ambient-library.mp4" type="video/mp4">
      </video>
      <span class="film-scrim"></span>
      <span class="gorb g1"></span><span class="gorb g2"></span>
      <span class="gorb g3"></span><span class="gorb g4"></span>
    </div>
    <button class="tb-btn themebtn gate-theme" onclick="toggleTheme()"></button>`;
}

function showGate(step){
  examStopTick();
  Q.exam=null;
  const g=$('gate');g.classList.remove('hide');hideSplash();
  /* She lives at z-index 150 and the gate at 200, so she would only ever be a
     glow behind the sign-in card. Hidden outright, and her session tick with
     her — nobody is studying on the gate. */
  clepHide(); sessStopTick();
  gateStep=step||((fbUser||!cloudEnabled())?'profiles':'signin');
  g.innerHTML=gateChrome()+(gateStep==='signin'?gateSignInStep():gateProfileStep());
  paintThemeBtn();
  /* innerHTML was just rewritten, so this is a brand-new <video> every time the
     gate moves between its two steps — autoplay covers the normal case, and
     this covers a browser that refuses it until asked. */
  syncFilm();
}
function hideGate(){$('gate').classList.add('hide');hideSplash();syncFilm()}

/* STEP 1 --------------------------------------------------------------------
   One decision and nothing else. The escape hatch is worded for what it
   actually does, which differs depending on whether this device already has
   profiles on it.                                                           */
function gateSignInStep(){
  /* Google OAuth requires an http(s) origin. Opened straight from disk as a
     file:// URL, signInGoogle() can ONLY ever fail, with
     auth/operation-not-supported-in-this-environment — verified in the browser,
     not assumed. Offering it as the primary action there would make step 1 a
     dead end, so on file:// the local path becomes the main button and the
     cloud button stays visible but explains itself. On a hosted copy the
     original order returns. */
  const offline=location.protocol==='file:';
  const onward=profiles.length?'Choose your profile':'Create your profile';
  if(offline){
    return `<div class="gstep" data-step="signin">
      <div class="gmark" style="--d:0ms"><img src="assets/icon-180.png" alt="" width="88" height="88"></div>
      <h1 class="gtitle" style="--d:80ms">Herophilus</h1>
      <p class="gtag" style="--d:150ms">Choose your profile, year and semester.<br>Question banks appear for your selected semester.</p>
      <button class="btn go gbig" style="--d:230ms" onclick="showGate('profiles')">${onward} →</button>
      <div class="gsign off" style="--d:300ms" aria-disabled="true">${GOOGLE_MARK}<span>Sign in with Google</span></div>
      <p class="gnote" style="--d:370ms"><b>Google sign-in needs the app to be online.</b> Opened directly from the file on this computer it cannot run — so your progress saves here instead, which works fully and offline.</p>
    </div>`;
  }
  return `<div class="gstep" data-step="signin">
    <div class="gmark" style="--d:0ms"><img src="assets/icon-180.png" alt="" width="88" height="88"></div>
    <h1 class="gtitle" style="--d:80ms">Herophilus</h1>
    <p class="gtag" style="--d:150ms">Choose your profile, year and semester.<br>Question banks appear for your selected semester.</p>
    <button class="gsign" style="--d:230ms" onclick="signInGoogle()">${GOOGLE_MARK}<span>Sign in with Google</span></button>
    <button class="glink" style="--d:300ms" onclick="showGate('profiles')">${profiles.length?'Use a profile on this device':'Continue without an account'} →</button>
    ${inAppBrowser()?`<p class="gnote warn" style="--d:370ms"><b>Open this in your own browser first.</b> You have arrived here from inside another app, and Google will not let anyone sign in from there. Use the menu in the corner and choose <b>Open in browser</b> — or carry on below and keep your progress on this device.</p>`
      :`<p class="gnote" style="--d:370ms">Signing in keeps your progress the same on your phone and your laptop. Without it everything still works — it just stays on this device.</p>`}
  </div>`;
}

/* Google refuses OAuth inside an app's embedded browser — it answers
   disallowed_useragent — and this link will mostly arrive over WhatsApp, where
   tapping it opens exactly that. The student cannot be warned after the fact,
   because the refusal happens on Google's own page, off this site. */
const inAppBrowser=()=>/FBAN|FBAV|FB_IAB|Instagram|Line\/|MicroMessenger|Snapchat|TikTok|; ?wv\)/i.test(navigator.userAgent||'');

/* STEP 2 ------------------------------------------------------------------- */
function gateProfileStep(){
  if(termLoading)return `<div class="gstep" data-step="profiles">
    <h2 role="status">Loading your profile...</h2></div>`;
  if(termEntryPending&&me)return gateTermStep();
  /* Back only makes sense when there is a sign-in step to go back TO. */
  const canBack=!fbUser&&cloudEnabled();
  let d=0;const step=()=>`--d:${d+=70}ms`;
  let h=`<div class="gstep" data-step="profiles">
    <div class="glogo" style="--d:0ms"><span class="blip"><img src="assets/icon-96.png" alt="" width="38" height="38"></span> Herophilus</div>`;
  if(fbUser){
    h+=`<div class="gwho" style="${step()}">✓ Signed in as <b>${esc(fbUser.displayName||fbUser.email||'your Google account')}</b></div>`;
  }
  h+=`<h2 style="${step()}">${profiles.length?"Who's studying?":'Create your profile'}</h2>
    <div class="pgrid">`;
  profiles.forEach(p=>{
    /* The card cannot call avHTML: it hangs a PIN dot and a Google badge inside
       the same box. So it builds its own wrapper and borrows the resolver, which
       is the part that must not drift — a profile showing one emblem here and a
       different one in the rail is the bug this line exists to prevent. The same
       is now true of the frame: it goes through avFrame(), same as everywhere else. */
    const av=p.av||{t:'g',v:AVATARS[0],c:'#6d4c7d'};
    const img=av.t==='p'?`<img src="${av.v}" alt="" referrerpolicy="no-referrer">`:`<img src="${avSrc(avKey(av))}" alt="">`;
    const fr=av.f||'plain';
    const inner=avFrame(fr,img,false);
    h+=`<button class="pcard" style="${step()}" onclick="pickProfile('${p.id}')">
      <div class="pav${fr!=='plain'?' hasfr':''}" style="background:${av.c};border-color:${av.c};--fr-c:${av.c}">${inner}${p.pin?'<span class="lock" style="font-size:9px;letter-spacing:1.5px;padding-left:1.5px">\u2022\u2022\u2022\u2022</span>':''}${p.id.indexOf('g:')===0?'<span class="lock" style="background:#4285F4;color:#fff;font-size:14px;font-weight:900">G</span>':''}</div>
      <div class="pname">${esc(p.name)}</div></button>`;
  });
  h+=`<button class="pcard add" style="${step()}" onclick="editProfile(null)">
      <div class="pav">+</div><div class="pname">Add profile</div></button></div>`;
  h+=`<div class="gfoot" style="${step()}">`;
  if(canBack)h+=`<button class="btn sec" onclick="showGate('signin')">← Back</button>`;
  if(profiles.length)h+=`<button class="btn sec" onclick="manageProfiles()">Manage profiles</button>`;
  h+=`</div>`;
  /* cloudEnabled() is false whenever the app is opened as a file rather than
     from an address, which is the ordinary way a student ends up with a copy
     on a laptop. This used to offer them a "Set up sync" button, and behind it
     instructions for creating a Firebase project — a developer's door left in
     the front of the building. What they actually need is the plain fact: this
     copy keeps their work, and it keeps it here. syncSetup() still exists and
     is still callable by name for a rebuild of the file; it is simply not
     something to hand a reader. */
  if(!cloudEnabled())h+=`<p class="goffline" style="${step()}">Running from a file, so this copy is yours alone &mdash; your progress is saved on this device and does not travel. Open the app at its web address to sign in and carry it between devices.</p>`;
  h+=`</div>`;
  return h;
}

function pickProfile(id){
  const p=profiles.find(x=>x.id===id);
  if(!p)return;
  if(p.pin){askPin(p);return}
  enterProfile(p);
}
/* ---- one-time colour migration, 2026-07-28 --------------------------------
   The Greek palette replaced every module colour, but two things had already
   BAKED the old hex values into localStorage and so could never pick the change
   up from CSS:

     • a schedule the user has edited — buildSchedule() stores {label,text,hex}
       per item, so an edited plan keeps rendering vermilion tags forever
     • profile avatars — the colour is chosen once and saved on the profile

   Found by auditing the running app, not by reading the code: the contrast pass
   kept reporting rgb(255,90,95) on the schedule long after that hex was gone
   from the source. Anything that stores a colour rather than a token needs a
   migration; that is the general lesson.

   Keyed on the old values, so it is idempotent — a second run matches nothing. */
const COLOUR_MIGRATION={
  '#ff5a5f':'#b4472f','#00b37e':'#5c7a52','#8b5cf6':'#6d4c7d','#3b82f6':'#2e5f8a',
  '#f59e0b':'#9a6b1f','#ec4899':'#8f3f5c','#6a6390':'#7a6a55','#0e7490':'#2f6b8f',
  '#14b8a6':'#3f7d7a','#ffc94a':'#d9b44a'
};
function migrateColours(){
  const map=h=>COLOUR_MIGRATION[String(h||'').toLowerCase()];
  let stateChanged=false,profilesChanged=false;
  if(S.schedule&&S.schedule.length){
    S.schedule.forEach(d=>{
      (d.items||[]).forEach(it=>{const n=map(it.hex);if(n){it.hex=n;stateChanged=true}});
    });
  }
  profiles.forEach(p=>{
    if(p.av&&p.av.c){const n=map(p.av.c);if(n){p.av.c=n;profilesChanged=true}}
  });
  if(stateChanged)save();
  if(profilesChanged)saveProfiles();
}

async function enterProfile(p){
  flushNote();
  resetCloud();
  const entry=++profileLoad;
  termEntryPending=true;
  termLoading=true;
  activateTerm(null,true);
  me=p;
  KEY=stateKey(p.id);
  try{localStorage.setItem(LASTKEY,p.id)}catch(e){}
  S={answers:{},flags:{},conf:{},sched:{},srs:{},days:{},hl:{},banks:{},resumeByChapter:{},notes:{},reports:{},schedule:null};
  showGate('profiles');
  await loadState();
  if(entry!==profileLoad||me!==p)return;
  /* A new device may already have this preference in the cloud. Try that
     before asking for another selection; offline entry still reaches the picker. */
  if(fbUser&&!termChoice(S.term)){
    await pullCloud();
    if(entry!==profileLoad||me!==p)return;
  }
  termLoading=false;
  if(!termChoice(S.term)){showGate('profiles');return}
  finishProfileEntry();
}
function finishProfileEntry(){
  termEntryPending=false;
  termLoading=false;
  activateTerm(S.term.id,true);
  sanitiseBanks();
  migrateColours();
  closeModal();hideGate();
  view={name:'home'};
  /* The companion belongs to a profile session, not to the gate — she appears
     once someone is actually studying. A session left running is picked back
     up here rather than restarted, because its clock is a timestamp. */
  CLEP.seen={}; _clLastView='';
  clepShow();
  if(sess())sessStartTick(); else sessStopTick();
  paintBakBtn();
  render();
  if(hasSavedMock())offerMockResume();
  if(bakRestored){
    toast('Progress restored from the backup taken '+bakWhen(bakRestored));
    bakRestored=0;
  }
  /* Every profile under the account syncs, including one created offline.
     Entry is already usable while the optional cloud merge runs. */
  if(fbUser&&!cloudSession)pullCloud();
}
function leaveProfile(){
  flushNote();
  resetCloud();
  me=null;
  termEntryPending=false;
  termLoading=false;
  activateTerm(null,true);
  showGate();
}
function switchProfile(){
  if(fbUser){
    showModal(`<h3>Switch or sign out?</h3>
     <p>You are signed in as <b>${esc(fbUser.displayName||fbUser.email||'your Google account')}</b>. Signing out stops syncing on this device; your progress stays in the cloud.</p>
     <div class="modal-actions">
       <button class="btn sec" onclick="closeModal()">Stay</button>
       <button class="btn sec" onclick="leaveProfile()">Switch profile</button>
       <button class="btn" style="background:var(--bad);border-color:var(--bad)" onclick="signOutCloud()">Sign out</button>
     </div>`);
    return;
  }
  leaveProfile();
}

/* ---- PIN ---- */
function askPin(p){
  showModal(`<h3>${esc(p.name)}</h3>
   <p>Enter the 4-digit PIN.</p>
   <div class="pinbox">
     ${[0,1,2,3].map(i=>`<input class="pind" id="pd${i}" inputmode="numeric" maxlength="1"
        oninput="pinHop(${i})" onkeydown="pinBack(event,${i})">`).join('')}
   </div>
   <div class="pinerr" id="pinErr"></div>
   <div class="modal-actions">
     <button class="btn sec" onclick="closeModal();showGate()">Back</button>
     <button class="btn go" onclick="tryPin('${p.id}')">Unlock</button>
   </div>`);
  setTimeout(()=>{const f=$('pd0');if(f&&f.focus)f.focus()},60);
}
function pinHop(i){
  const el=$('pd'+i);
  if(el&&el.value&&i<3){const n=$('pd'+(i+1));if(n&&n.focus)n.focus()}
}
function pinBack(e,i){
  if(e.key==='Backspace'&&!$('pd'+i).value&&i>0){const pv=$('pd'+(i-1));if(pv&&pv.focus)pv.focus()}
  if(e.key==='Enter'){const b=document.querySelector('.modal .btn.go');if(b)b.click()}
}
function readPin(){return [0,1,2,3].map(i=>($('pd'+i)||{}).value||'').join('')}
function tryPin(id){
  const p=profiles.find(x=>x.id===id);
  if(!p)return;
  if(readPin()===p.pin){enterProfile(p);return}
  const e=$('pinErr');if(e)e.textContent='Wrong PIN \u2014 try again';
  [0,1,2,3].forEach(i=>{const el=$('pd'+i);if(el)el.value=''});
  const f=$('pd0');if(f&&f.focus)f.focus();
}

/* ---- create / edit ---- */
let draft=null;
function editProfile(id){
  const p=id?profiles.find(x=>x.id===id):null;
  draft=p?JSON.parse(JSON.stringify(p)):{id:'p'+Date.now(),name:'',av:{t:'g',v:AVATARS[0],c:AVCOLS[2]},pin:''};
  drawProfileEditor(!!p);
}
function drawProfileEditor(isEdit){
  showModal(`<h3>${isEdit?'Edit profile':'New profile'}</h3>
   ${avHTML(draft.av,'avprev')}
   <input class="keyin" id="pfName" placeholder="Name" value="${esc(draft.name)}"
     style="width:100%;font-family:inherit;font-weight:700;margin-bottom:14px"
     oninput="draft.name=this.value">
   <div style="font-size:11px;font-weight:900;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-3);margin-bottom:8px">Picture</div>
   <div class="emgrid">
     ${AVATARS.map(k=>`<button class="emb ${avKey(draft.av)===k&&draft.av.t!=='p'?'on':''}" title="${AVNAMES[k]}"
       onclick="draft.av={t:'g',v:'${k}',c:draft.av.c,f:draft.av.f};drawProfileEditor(${isEdit})"><img src="${avSrc(k)}" alt="${AVNAMES[k]}"></button>`).join('')}
   </div>
   <div class="colrow">
     ${AVCOLS.map(c=>`<button class="colb ${draft.av.c===c?'on':''}" style="background:${c}"
       onclick="draft.av.c='${c}';drawProfileEditor(${isEdit})"></button>`).join('')}
   </div>
   <div style="font-size:11px;font-weight:900;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-3);margin-bottom:8px">Frame</div>
   <div class="frgrid">
     ${(()=>{const tileImg=`<img src="${draft.av.t==='p'?draft.av.v:avSrc(avKey(draft.av))}" alt="">`;
       return ['plain','mount','moulding','walnut'].map(f=>`<button class="frtile ${f!=='plain'?'hasfr ':''}${(draft.av.f||'plain')===f?'on':''}"
         style="--fr-c:${draft.av.c};border-color:${f==='plain'?draft.av.c:'transparent'}"
         onclick="draft.av.f='${f}';drawProfileEditor(${isEdit})">${avFrame(f,tileImg,false)}</button>`).join('');})()}
   </div>
   <div style="margin-bottom:16px">
     <button class="btn sec" onclick="document.getElementById('pfPhoto').click()">Upload a photo</button>
     ${draft.av.t==='p'?`<button class="ai-p" onclick="draft.av={t:'g',v:AVATARS[0],c:draft.av.c,f:draft.av.f};drawProfileEditor(${isEdit})" style="border:2px solid var(--line-2);padding:7px 13px;border-radius:var(--r-lg);font-size:12px;font-weight:700;margin-left:7px">Use a portrait instead</button>`:''}
     <input type="file" id="pfPhoto" accept="image/*" style="display:none" onchange="pfUpload(event,${isEdit})">
   </div>
   <div style="font-size:11px;font-weight:900;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-3);margin-bottom:8px">PIN (optional)</div>
   <input class="keyin" id="pfPin" inputmode="numeric" maxlength="4" placeholder="4 digits \u2014 leave blank for none"
     value="${esc(draft.pin||'')}" style="width:100%;font-family:inherit;font-weight:700"
     oninput="draft.pin=this.value.replace(/[^0-9]/g,'').slice(0,4)">
   <div class="ai-note" style="font-size:11.5px;color:var(--ink-4);font-weight:600;margin-top:8px;line-height:1.5">
     Keeps other people from clicking into your profile by accident. It is not real security \u2014 anyone determined can get past it.</div>
   <div class="modal-actions" style="margin-top:18px">
     <button class="btn sec" onclick="closeModal();showGate()">Cancel</button>
     ${isEdit?`<button class="btn" style="background:var(--bad);border-color:var(--bad)" onclick="deleteProfile('${draft.id}')">Delete</button>`:''}
     <button class="btn go" onclick="saveProfile()">Save</button>
   </div>`,true);
}
function pfUpload(e,isEdit){
  const f=e.target.files&&e.target.files[0];
  if(!f)return;
  const d=draft;
  const r=new FileReader();
  r.onload=()=>{
    const img=new Image();
    img.onload=()=>{
      if(d!==draft)return;
      const c=document.createElement('canvas'),SZ=160;
      c.width=SZ;c.height=SZ;
      const x=c.getContext('2d');
      const s=Math.min(img.width,img.height);
      x.drawImage(img,(img.width-s)/2,(img.height-s)/2,s,s,0,0,SZ,SZ);
      draft.av={t:'p',v:c.toDataURL('image/jpeg',0.8),c:draft.av.c,f:draft.av.f};
      drawProfileEditor(isEdit);
    };
    img.onerror=()=>toast('Could not read that image');
    img.src=r.result;
  };
  r.readAsDataURL(f);
  e.target.value='';
}
function saveProfile(){
  const n=$('pfName');
  draft.name=((n&&n.value)||draft.name||'').trim()||'Untitled';
  if(draft.pin&&draft.pin.length!==4){toast('PIN must be 4 digits, or blank');return}
  const i=profiles.findIndex(p=>p.id===draft.id);
  if(i>=0)profiles[i]=draft; else profiles.push(draft);
  saveProfiles();
  const saved=draft;draft=null;
  syncRoster(saved);
  closeModal();
  if(me&&me.id===saved.id){me=saved;render();toast('Profile updated')}
  else if(!me)enterProfile(saved);
  else{showGate()}
}
function deleteProfile(id){
  const p=profiles.find(x=>x.id===id);
  if(!p)return;
  showModal(`<h3>Delete ${esc(p.name)}?</h3>
   <p>This erases that profile's answers, highlights, schedule and review deck. It cannot be undone.</p>
   <div class="modal-actions">
     <button class="btn sec" onclick="editProfile('${id}')">Cancel</button>
     <button class="btn" style="background:var(--bad);border-color:var(--bad)" onclick="doDeleteProfile('${id}')">Delete</button>
   </div>`);
}
function doDeleteProfile(id){
  const p=profiles.find(x=>x.id===id);
  if(!p)return;
  if(me&&me.id===id){resetCloud();me=null}
  profiles=profiles.filter(p=>p.id!==id);
  saveProfiles();
  try{localStorage.removeItem(stateKey(id))}catch(e){}
  syncRoster(p,true);
  closeModal();showGate();toast('Profile deleted');
}
function manageProfiles(){
  let h=`<h3>Manage profiles</h3><p>Pick one to rename, change its picture or PIN, or delete it.</p>`;
  profiles.forEach(p=>{
    const mav=p.av||{t:'g',v:AVATARS[0],c:'#6d4c7d'};
    const msrc=mav.t==='p'?mav.v:avSrc(avKey(mav));
    const mfr=mav.f||'plain';
    const minner=avFrame(mfr,`<img src="${msrc}" alt="">`,true);
    h+=`<button class="ch-row" style="margin-bottom:8px" onclick="editProfile('${p.id}')">
      <div class="rav${mfr!=='plain'?' hasfr':''}" style="width:34px;height:34px;border-radius:var(--r-lg);display:flex;align-items:center;justify-content:center;font-size:18px;overflow:hidden;border:${mfr==='plain'?'2px solid '+mav.c:'0'};background:${mav.c};--fr-c:${mav.c};--fr-t:3px">${minner}</div>
      <span class="ch-name">${esc(p.name)}</span>
      <span class="ch-count">${p.pin?'PIN set':'no PIN'}</span></button>`;
  });
  h+=`<div class="modal-actions" style="margin-top:16px">
     <button class="btn sec" onclick="closeModal();showGate()">Back</button>
     <button class="btn go" onclick="editProfile(null)">Add profile</button></div>`;
  showModal(h,true);
}

/* ============ ROUTER ============ */
let view={name:'home'};
/* The backstop for the one route that outlives a lock: a student who bookmarked
   a note, or whose last view was restored from a session on another device. */
