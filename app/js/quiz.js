function hasStoredMock(){return !!(S.mockResume&&S.mockResume.paper!==null)}
function hasSavedMock(){
  if(!hasStoredMock())return false;
  const p=S.mockResume.paper;
  /* Papers saved before terms existed all belong to the original semester.
     A hidden paper remains stored rather than becoming an unavailable-paper warning. */
  return ((p&&p.term)||'y4s2')===activeTerm;
}
function validMockResume(r){
  const obj=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
  const num=v=>typeof v==='number'&&Number.isFinite(v)&&v>=0;
  if(r===null)return true;
  if(!obj(r)||!num(r.at))return false;
  if(r.paper===null)return true;
  const p=r.paper, e=obj(p)&&p.exam;
  if(obj(p)&&Object.prototype.hasOwnProperty.call(p,'term')&&
     !TERMS.some(t=>t.id===p.term))return false;
  if(!obj(p)||!Array.isArray(p.ids)||!p.ids.length||
     !p.ids.every(id=>typeof id==='string'&&id&&
       ['__proto__','constructor','prototype'].indexOf(id)<0)||
     new Set(p.ids).size!==p.ids.length||
     !Number.isInteger(p.i)||p.i<0||p.i>=p.ids.length||
     typeof p.title!=='string'||!num(p.t0)||!obj(e)||
     !num(e.end)||e.end<=p.t0||!num(e.mins)||e.mins<=0||
     e.done!==false||!obj(e.picked))return false;
  return Object.keys(e.picked).every(id=>p.ids.indexOf(id)>=0&&
    Number.isInteger(e.picked[id])&&e.picked[id]>=0);
}
function writeMockResume(paper){
  const old=S.mockResume;
  const at=old&&Number.isFinite(old.at)?old.at:0;
  S.mockResume={at:Math.max(Date.now(),at+1),
    paper:paper===null?null:JSON.parse(JSON.stringify(paper))};
}
function savedMockProblem(r){
  if(!validMockResume(r))return 'The saved paper is damaged and cannot be resumed. Download a copy before discarding it.';
  const p=r.paper;
  const unavailable=p.ids.some(id=>{
    const q=QUESTIONS.find(x=>x.id===id);
    return !q||!mockable(q)||!Array.isArray(q.options)||!q.options.length||
      (Object.prototype.hasOwnProperty.call(p.exam.picked,id)&&p.exam.picked[id]>=q.options.length);
  });
  return unavailable?'Some saved questions or options are unavailable. The whole paper is kept; it cannot be resumed or handed in with questions removed. Download a copy before discarding it.':'';
}
function offerMockResume(){
  if(!hasSavedMock())return;
  const r=S.mockResume, entry=profileLoad;
  const problem=savedMockProblem(r);
  const expired=!problem&&r.paper.exam.end<=Date.now();
  const current=()=>entry===profileLoad&&JSON.stringify(S.mockResume)===JSON.stringify(r);
  const message=problem||(expired
    ?'The time limit passed while you were away. Nothing has been handed in. You can hand in the saved answers now, keep the paper for later, or discard it.'
    :'Your question order, choices and place are saved. The clock has kept running. Resuming continues the original time limit and hands in automatically when it ends.');
  showModal('<h3>Saved mock exam</h3><p>'+message+'</p><div class="modal-actions">'+
    '<button class="btn sec" onclick="closeModal()">Keep for later</button>'+
    '<button class="btn sec" onclick="exportData()">Download a copy</button>'+
    '<button class="btn sec" id="mockDiscard">Discard paper</button>'+
    (problem?'':'<button class="btn go" id="mockContinue">'+
      (expired?'Hand in saved answers':'Resume timed paper')+'</button>')+'</div>');
  $('mockDiscard').onclick=()=>{
    if(!current()){offerMockResume();return}
    if(!window.confirm('Discard this saved paper? Its order and clock will be lost. Answers already recorded in your progress remain.'))return;
    examStopTick(); Q.exam=null;
    writeMockResume(null); save(); closeModal(); go({name:'mock'});
  };
  if(problem)return;
  $('mockContinue').onclick=()=>{
    if(!current()){offerMockResume();return}
    /* A deadline can pass while this dialog is open. A Resume click must never
       turn into consent to hand in an already expired paper. */
    if(!expired&&r.paper.exam.end<=Date.now()){offerMockResume();return}
    if(savedMockProblem(r)){offerMockResume();return}
    const p=JSON.parse(JSON.stringify(r.paper));
    examStopTick();
    Q={ids:p.ids,i:p.i,title:p.title,sel:null,shown:false,t0:p.t0,txt:'',
      peek:false,caret:null,did:{},attempts:{},chapter:null,sources:[],exam:p.exam};
    Q.ids.forEach(id=>{
      Q.attempts[id]={sel:Object.prototype.hasOwnProperty.call(Q.exam.picked,id)?Q.exam.picked[id]:null,
        shown:false,txt:'',peek:false,caret:null};
    });
    Object.assign(Q,Q.attempts[Q.ids[Q.i]]);
    closeModal(); go({name:'quiz'});
    if(expired)examFinish(true); else examStartTick();
  };
}
function startChapter(cid,restart=false){
  const qs=qsIn(cid);
  if(!qs.length){toast('No questions in this chapter with the current sources. Change the source filter to continue.');return}
  const r=(S.resumeByChapter||{})[cid];
  if(r&&!r.finished&&!restart&&!qs.some(q=>q.id===r.qid)){
    const exists=QUESTIONS.some(q=>q.id===r.qid&&q.chapter===cid);
    showModal(`<h3>Saved question unavailable</h3>
      <p>${exists?'Your current source filter excludes the saved question. Change the source filter to continue there, or restart with the current sources.':'The saved question is no longer in this chapter. You can restart with the current questions.'}</p>
      <div class="modal-actions">
        <button class="btn sec" onclick="closeModal()">Close</button>
        <button class="btn go" onclick="closeModal();startChapter('${cid}',true)">Restart chapter</button>
      </div>`);
    return;
  }
  startQuiz(qs.map(q=>q.id),chapterName(cid),cid,r&&!r.finished&&!restart?r.qid:null);
}
function saveResume(finished=false){
  if(Q.exam){
    writeMockResume(Q.exam.done?null:{
      term:activeTerm,ids:Q.ids,i:Q.i,title:Q.title,t0:Q.t0,exam:Q.exam
    });
    save();
    return;
  }
  if(!Q.chapter)return;
  const qid=Q.ids[Q.i];
  if(!qid)return;
  if(!S.resumeByChapter)S.resumeByChapter={};
  S.resumeByChapter[Q.chapter]={qid:qid,sources:Q.sources.slice(),at:Date.now(),finished:finished};
  save();
}
function moveQ(i){
  /* Saved progress survives a new run; attempts only survive movement inside
     this run, including jumps and unfinished selections. */
  const input=$('caseInput');
  Q.attempts[Q.ids[Q.i]]={sel:Q.sel,shown:Q.shown,txt:input&&!Q.shown?input.value:Q.txt,peek:Q.peek,caret:Q.caret};
  Q.i=i;
  Object.assign(Q,Q.attempts[Q.ids[i]]||{sel:null,shown:false,txt:'',peek:false,caret:null});
  saveResume();
}
/* exam is null for ordinary study and an object under exam conditions. Fifth
   positional argument on purpose: every existing caller passes four or fewer
   and keeps behaving exactly as it did. */
function startQuiz(ids,title,chapter=null,qid=null,exam=null){
  if(!ids||!ids.length){toast('No questions there yet');return}
  /* A stale button must not open another term. Reject the set intact rather
     than quietly shortening a paper and changing what its score means. */
  const available=new Set(QUESTIONS.map(q=>q.id));
  if(ids.some(id=>!available.has(id))){
    toast('Those questions are unavailable in this semester.');
    return;
  }
  const q=QUESTIONS.find(x=>x.id===ids[0]);
  Q={ids:ids.slice(),i:Math.max(0,ids.indexOf(qid)),title:title,sel:null,shown:false,t0:Date.now(),txt:'',peek:false,caret:null,did:{},
     attempts:{},chapter:chapter,sources:chapter&&q?(S.banks[q.module]||[]).slice():[],exam:exam};
  strikeQuestion=null;strikes=new Set(); /* a restart or a profile switch on the same question must not inherit strikes */
  saveResume();
  go({name:'quiz'});
  /* Stop first either way: an abandoned paper's interval would otherwise keep
     running underneath an ordinary quiz and hand it in. */
  examStopTick();
  if(exam)examStartTick();
}

/* ---- Free-text cases ----------------------------------------------------
   Some sources print a vignette and a diagnosis with no options at all.
   Those become type:'case': the learner types a diagnosis and it is graded
   on concept keys, never on exact wording — "right otomycosis" and
   "fungal otitis externa of the right ear" both earn the same key.       */
function normTxt(s){
  return String(s||'').toLowerCase()
    .replace(/[^a-z0-9 ]+/g,' ').replace(/\s+/g,' ').trim();
}
function lev(a,b){                        // edit distance, for typo tolerance
  const m=a.length,n=b.length;
  if(!m)return n; if(!n)return m;
  let prev=Array.from({length:n+1},(_,j)=>j),cur=new Array(n+1);
  for(let i=1;i<=m;i++){
    cur[0]=i;
    for(let j=1;j<=n;j++){
      cur[j]=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));
    }
    [prev,cur]=[cur,prev];
  }
  return prev[n];
}
function keyHit(hay,terms){
  const words=hay.split(' ');
  return (terms||[]).some(t=>{
    const n=normTxt(t); if(!n)return false;
    if(hay.indexOf(n)>=0)return true;
    if(n.indexOf(' ')>=0)return false;          // multi-word: exact only
    const tol=n.length>7?2:(n.length>4?1:0);    // single word: allow typos
    return tol>0&&words.some(w=>Math.abs(w.length-n.length)<=tol&&lev(w,n)<=tol);
  });
}
function gradeCase(q,txt){
  const hay=normTxt(txt), keys=q.keys||[];
  const hits=keys.map(k=>keyHit(hay,k.terms));
  const got=hits.filter(Boolean).length;
  return {hits:hits,got:got,total:keys.length,ok:keys.length>0&&got===keys.length,blank:!hay};
}
function revealCase(){
  const q=QUESTIONS.find(x=>x.id===Q.ids[Q.i]);
  const el=document.getElementById('caseInput');
  const txt=el?el.value:'';
  if(!normTxt(txt)){toast('Type a diagnosis first');return}
  Q.txt=txt; Q.shown=true; Q.peek=false;
  const g=gradeCase(q,txt);
  if(!S.answers[q.id]||S.answers[q.id].text!==txt){
    S.answers[q.id]={text:txt,got:g.got,total:g.total,ok:g.ok,at:Date.now()};
    scheduleSRS(q.id,g.ok);
  }
  /* Outside the storage guard on purpose: retyping the same words is still an
     attempt made in this sitting, and the set's score is about the sitting. */
  Q.did[q.id]=g.ok;
  markDayActive();save();render();
  /* a case is graded got/total, so partly right gets its own reading */
  clepPose(g.ok?'dancing':(g.got>0?'thinking':'surprised')); clepSettle(3200);
}
/* Deliberate escape hatch for a learner who is stuck. It is never automatic,
   it scores nothing and it records no answer — otherwise a case with no
   recallable diagnosis would be a dead end, since Skip never shows the
   explanation either. */
function peekCase(){
  Q.txt=''; Q.shown=true; Q.peek=true;
  render();
}
function vCase(p,q,m,prev){
  /* A case is NEVER auto-revealed, not even one answered before — the whole
     point is to type the diagnosis first (user's instruction, 2026-07-26).
     A new run starts blank; movement within a run keeps its attempt. The
     previous score is shown as a chip so the earlier score is not lost. */
  const flagged=!!S.flags[q.id];
  const g=(Q.shown&&!Q.peek)?gradeCase(q,Q.txt):null;
  const verdict=Q.peek?['bad',ico('eye',18),'Revealed — not scored']
    :!g?null:(g.ok?['ok',ico('target',18),'Spot on']
    :g.got>0?['part',ico('hourglass',18),'Partly right — '+g.got+' of '+g.total+' key points']
    :['bad',ico('laurel',18),'Not quite']);

  let h=`<div class="qwrap">
   <div class="qhead">
    <button class="tb-btn" style="padding-left:0" onclick="go({name:'module',id:'${q.module}'})">←</button>
    <span class="pill" style="background:${m.hex}">${esc(chapterName(q.chapter))}</span>
    <span class="pill ghost">${ico('stylus',13)} Case</span>
    ${bankPills(q)}
    ${q.source?`<span class="pill ghost">${mdInline(q.source)}</span>`:''}
    <button class="qprog" title="Jump to a question (J)" onclick="openJump()">${Q.i+1} / ${Q.ids.length} &nbsp;&#9776;</button>
   </div>
   <div class="qcard">
    ${markbar(q.id)}
    <div class="stem${armed?' arm':''}">${md(q.stem)}</div>
    ${qFigure(q)}
    <div class="caseask">${ico('asclepius',17)} What is your diagnosis?</div>
    <textarea id="caseInput" class="caseinput" rows="3" ${Q.shown?'disabled':''}
      placeholder="Type the diagnosis in your own words — wording is not marked, the concepts are."
      oninput="Q.txt=this.value;Q.caret=this.selectionStart"
      >${esc(Q.txt||'')}</textarea>`;

  if(!Q.shown&&prev&&prev.text){
    h+=`<div class="lastgo">${ico('hourglass',15)} You answered this before — ${prev.got} of ${prev.total} key points. Have another go.</div>`;
  }

  if(!Q.shown){
    h+=`<div class="qactions">
      <button class="btn go" onclick="revealCase()">Check my answer</button>
      <button class="btn sec" onclick="peekCase()">${ico('eye',15)} Reveal</button>
      <button class="btn sec flag ${flagged?'on':''}" onclick="toggleFlag('${q.id}')">${ico('laurel',15)} ${flagged?'Flagged':'Flag'}</button>
      <div style="margin-left:auto;display:flex;gap:9px">
        ${Q.i>0?'<button class="btn sec" onclick="navQ(-1)">←</button>':''}
        <button class="btn sec" onclick="navQ(1)">Skip →</button>
      </div></div>`;
  }else{
    h+=`<div class="verdict ${verdict[0]}"><span class="big">${verdict[1]}</span>${verdict[2]}</div>`;
    h+=`<div class="modelans"><b>The source's diagnosis</b><div>${md(q.answer)}</div></div>`;
    if((q.keys||[]).length){
      h+=`<div class="keys"><div class="keys-h">What was being looked for</div>`;
      q.keys.forEach((k,i)=>{
        const hit=g?g.hits[i]:false;
        h+=`<div class="key ${g?(hit?'hit':'miss'):''}"><span>${g?(hit?'\u2713':'\u00d7'):'\u2022'}</span>
            <span>${esc(k.label)}</span></div>`;
      });
      h+=`</div>`;
    }
    if(!Q.peek&&(!prev||prev.conf===undefined)){
      h+=`<div class="conf"><div class="conf-q">${ico('target',15)} How sure were you? This sets when it comes back.</div>
       <div class="conf-btns">
        <button class="conf-b" onclick="setConf('${q.id}',0)">Guessed</button>
        <button class="conf-b" onclick="setConf('${q.id}',1)">Unsure</button>
        <button class="conf-b" onclick="setConf('${q.id}',2)">Confident</button>
       </div></div>`;
    }
    const hasExp=q.explanation&&q.explanation.trim().length>0;
    h+=`<div class="explain">
      <button class="ex-head" onclick="toggleExp(this)">${ico('lamp',16)} Explain this case<span class="chev">▾</span></button>
      <div class="ex-body">${hasExp?md(q.explanation):'<div class="noexp">No explanation came with this case.</div>'}
      ${q.objective?`<div class="objective"><b>${ico('laurel',15)} Educational objective</b>${md(q.objective).replace(/<\/?p>/g,'')}</div>`:''}
      </div></div>`;
    const th=THEORY_LOCKED?null:qTheory(q.id);
    if(th)h+=`<button class="readtheory" onclick="openTheoryFor('${q.id}')">
      ${ico('scroll',16)} <span>Read the notes on this &mdash; <b>${esc(th.h)}</b></span>
      <span style="margin-left:auto">&rarr;</span></button>`;
    h+=`<div class="qactions">
      <button class="btn sec flag ${flagged?'on':''}" onclick="toggleFlag('${q.id}')">${ico('laurel',15)} ${flagged?'Flagged':'Flag'}</button>
      <div style="margin-left:auto;display:flex;gap:9px">
        ${Q.i>0?'<button class="btn sec" onclick="navQ(-1)">←</button>':''}
        <button class="btn go" onclick="navQ(1)">${Q.i===Q.ids.length-1?'Finish':'Next →'}</button>
      </div></div>`;
  }
  h+=`</div></div>`;
  p.innerHTML=h;
  const stemEl=p.querySelector('.stem');
  if(stemEl){
    applyHighlights(stemEl,S.hl[q.id]||[]);
    stemEl.addEventListener('mouseup',onStemSelect);
    stemEl.addEventListener('touchend',onStemSelect);
  }
  /* The box is rebuilt from Q.txt by every render, and a render happens under
     the student's hands whenever they flag the question or pick a highlighter.
     Q.txt is kept current on the keystroke (see the textarea's oninput), so the
     words survive; the caret has to be put back by hand, or a half-typed answer
     restarts from the beginning of the line. */
  const inp=document.getElementById('caseInput');
  if(inp&&!Q.shown){
    inp.focus();
    const c=Q.caret==null?inp.value.length:Math.min(Q.caret,inp.value.length);
    try{inp.setSelectionRange(c,c)}catch(e){}
    inp.addEventListener('keydown',e=>{        // Ctrl/Cmd+Enter submits
      if(e.key==='Enter'&&(e.ctrlKey||e.metaKey)){e.preventDefault();revealCase()}
    });
  }
}

// Option letters. Extended-matching questions ship up to ten options (npqb-nr-113..118),
// so this has to outrun 'ABCDE': past index 4 that string yields undefined, which rendered
// as the literal letter "undefined" and printed "the answer is undefined" on reveal.
const OPT_LETTERS='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
/* Deliberately outside Q and S: eliminations are a disposable reading aid.
   A redraw of this question keeps them; rendering another question clears them. */
let strikeQuestion=null;
let strikes=new Set();
function toggleStrike(i,e){
  e.stopPropagation();
  if(Q.shown||(Q.exam&&Q.exam.done))return;
  if(strikes.has(i))strikes.delete(i);else strikes.add(i);
  render();
  const btn=document.querySelector('.opts .opt:nth-child('+(i+1)+') .strike-btn');
  if(btn&&btn.focus)btn.focus();
}

function vQuiz(p){
  const q=QUESTIONS.find(x=>x.id===Q.ids[Q.i]);
  /* backticks, not quotes: ico() contains single quotes, which would close a
     single-quoted string and take the whole script down with it */
  if(!q){p.innerHTML=`<div class="empty"><div class="big">${ico('laurel',46)}</div><h3>Set complete</h3></div>`;return}
  const m=moduleOf(q.module)||{hex:'#7a6a55'};
  const prev=S.answers[q.id];
  if(strikeQuestion!==q.id){strikeQuestion=q.id;strikes=new Set()}
  if(q.type==='case'){vCase(p,q,m,prev);return}
  const flagged=!!S.flags[q.id];

  let h=`<div class="qwrap">
   <div class="qhead">
    <button class="tb-btn" style="padding-left:0" onclick="go({name:'module',id:'${q.module}'})">←</button>
    <span class="pill" style="background:${m.hex}">${esc(chapterName(q.chapter))}</span>
    ${bankPills(q)}
    ${q.source?`<span class="pill ghost">${mdInline(q.source)}</span>`:''}
    <button class="qprog" title="Jump to a question (J)" onclick="openJump()">${Q.i+1} / ${Q.ids.length} &nbsp;&#9776;</button>
    ${Q.exam?`<span class="exam-clock ${examClockClass()}" id="examClock" title="Time left in this paper">${examClockText()}</span>`:''}
   </div>
   <div class="qcard">
    ${markbar(q.id)}
    <div class="stem${armed?' arm':''}">${md(q.stem)}</div>
    ${qFigure(q)}
    <div class="opts">`;
  q.options.forEach((o,i)=>{
    let cls='opt';
    if(Q.shown){ if(i===q.answer)cls+=' correct'; else if(i===Q.sel)cls+=' wrong' }
    else if(i===Q.sel)cls+=' sel';
    const answered=Q.shown||Q.sel!==null||(Q.exam&&Object.prototype.hasOwnProperty.call(Q.exam.picked,q.id));
    const struck=!answered&&strikes.has(i);
    if(struck)cls+=' struck';
    const mark=Q.shown?(i===q.answer?'<span class="mark">\u2713</span>':(i===Q.sel?'<span class="mark">\u00d7</span>':'')):'';
    h+=`<div class="${cls}">
      <button type="button" class="opt-answer" ${Q.shown?'disabled':''} onclick="pick(${i},event.detail===0)">
      <span class="ltr">${OPT_LETTERS[i]}</span><span class="opt-text">${esc(o)}</span>${mark}</button>
      ${answered?'':`<button type="button" class="strike-btn" aria-label="${struck?'Restore option':'Strike out option'}" aria-pressed="${struck}" onclick="toggleStrike(${i},event)" onkeydown="if(event.key==='Enter'||event.key===' '||(/^[A-Za-z]$/.test(event.key)&&OPT_LETTERS.indexOf(event.key.toUpperCase())<${q.options.length}))event.stopPropagation()">${ico('strike',16)}</button>`}</div>`;
  });
  h+=`</div>`;
  /* Under exam conditions the previous attempt is somebody else's paper. */
  if(!Q.shown&&!Q.exam&&prev&&Number.isInteger(prev.pick)&&prev.pick>=0&&prev.pick<q.options.length){
    h+=`<details class="lastgo"><summary>Previous choice</summary>${OPT_LETTERS[prev.pick]} &middot; ${esc(q.options[prev.pick])}</details>`;
  }

  if(Q.exam){
    /* No Check answer here, and that is the whole point: Q.shown stays false
       for the length of the paper, so the verdict, the confidence rating, the
       explanation and the theory link below are never built at all. Moving on
       is the only thing this row does. */
    const last=Q.i+1>=Q.ids.length;
    const left=Q.ids.filter(id=>!(id in Q.exam.picked)).length;
    h+=`<div class="qactions">
      ${Q.i>0?'<button class="btn sec" onclick="navQ(-1)">←</button>':''}
      <button class="btn go" onclick="navQ(1)">${last?'Last one — hand in':'Next'} →</button>
      <button class="btn sec flag ${flagged?'on':''}" onclick="toggleFlag('${q.id}')">${ico('laurel',15)} ${flagged?'Flagged':'Flag'}</button>
      <div style="margin-left:auto;display:flex;gap:9px;align-items:center">
        <span class="ch-count">${left} unanswered</span>
        <button class="btn sec" onclick="examConfirmFinish()">Hand in</button>
      </div></div>`;
  }else if(!Q.shown){
    h+=`<div class="qactions">
      <button class="btn go" ${Q.sel===null?'disabled':''} onclick="reveal()">Check answer</button>
      <button class="btn sec flag ${flagged?'on':''}" onclick="toggleFlag('${q.id}')">${ico('laurel',15)} ${flagged?'Flagged':'Flag'}</button>
      <div style="margin-left:auto;display:flex;gap:9px">
        ${Q.i>0?'<button class="btn sec" onclick="navQ(-1)">←</button>':''}
        <button class="btn sec" onclick="navQ(1)">Skip →</button>
      </div></div>`;
  }else{
    const ok=Q.sel===q.answer;
    h+=`<div class="verdict ${ok?'ok':'bad'}"><span class="big">${ok?ico('target',26):ico('laurel',26)}</span>
      ${ok?'Correct.':'Not quite — the answer is '+OPT_LETTERS[q.answer]}</div>`;

    if(!prev||prev.conf===undefined){
      h+=`<div class="conf"><div class="conf-q">${ico('target',15)} How sure were you? This sets when it comes back.</div>
       <div class="conf-btns">
        <button class="conf-b" onclick="setConf('${q.id}',0)">Guessed</button>
        <button class="conf-b" onclick="setConf('${q.id}',1)">Unsure</button>
        <button class="conf-b" onclick="setConf('${q.id}',2)">Confident</button>
       </div></div>`;
    }

    const hasExp=q.explanation&&q.explanation.trim().length>0;
    h+=`<div class="explain">
      <button class="ex-head" onclick="toggleExp(this)">${ico('lamp',16)} Explain this answer<span class="chev">▾</span></button>
      <div class="ex-body">${hasExp?md(q.explanation):'<div class="noexp">No explanation came with this question.</div>'}
      ${q.objective?`<div class="objective"><b>${ico('laurel',15)} Educational objective</b>${md(q.objective).replace(/<\/?p>/g,'')}</div>`:''}
      </div></div>`;

    const th=THEORY_LOCKED?null:qTheory(q.id);
    if(th)h+=`<button class="readtheory" onclick="openTheoryFor('${q.id}')">
      ${ico('scroll',16)} <span>Read the notes on this &mdash; <b>${esc(th.h)}</b></span>
      <span style="margin-left:auto">&rarr;</span></button>`;

    /* An emptied note is kept as a stamped blank so it can win a merge (see
       saveNote), which means a record with no text is not a note. */
    const noteRec=(S.notes||{})[q.id];
    const note=(noteRec&&noteRec.txt)?noteRec:null;
    const reported=!!(S.reports||{})[q.id];
    h+=`<div class="qfoot">
      <button class="lnk ${note?'has':''}" onclick="toggleNote('${q.id}')">${note?'Your note':'Write a note on this'}</button>
      <button class="lnk ${reported?'has':''}" onclick="openReport('${q.id}')">${reported?'You reported this':'Something wrong here?'}</button>
     </div>`;
    if(note||Q.noteOpen===q.id){
      h+=`<div class="qnote">
        <span class="lb">Your note &mdash; only you see this</span>
        <textarea class="caseinput" id="qNote" rows="3" placeholder="Why you got it wrong, the bit you keep forgetting, a mnemonic…"
          oninput="saveNote('${q.id}',this.value)">${esc(note?note.txt:'')}</textarea>
        <div class="say" id="qNoteSay">${note?'Saved '+bakWhen(note.at):''}</div>
       </div>`;
    }

    h+=`<div class="qactions">
      <button class="btn sec flag ${flagged?'on':''}" onclick="toggleFlag('${q.id}')">${ico('laurel',15)} ${flagged?'Flagged':'Flag'}</button>
      <div style="margin-left:auto;display:flex;gap:9px">
        ${Q.i>0?'<button class="btn sec" onclick="navQ(-1)">←</button>':''}
        <button class="btn go" onclick="navQ(1)">${Q.i===Q.ids.length-1?'Finish':'Next →'}</button>
      </div></div>`;
  }
  h+=`</div></div>`;
  p.innerHTML=h;
  const stemEl=p.querySelector('.stem');
  if(stemEl){
    applyHighlights(stemEl,S.hl[q.id]||[]);
    stemEl.addEventListener('mouseup',onStemSelect);
    stemEl.addEventListener('touchend',onStemSelect);
  }
}
function pick(i,byKey){
  if(Q.shown||(Q.exam&&Q.exam.done))return;
  if(Q.exam&&examLeft()<=0){examFinish(true);return}
  Q.sel=i;
  /* In a paper the answer is committed to storage the moment it is chosen,
     because there is no Check answer to commit it later and a reload mid-exam
     must not cost the student the work they have already done. What is NOT
     done here is scheduleSRS — a paper is one sitting, and forty promotions
     fired one at a time as the student worked down the page would be forty
     separate reviews of the same sitting. It runs once each, at hand-in. */
  if(Q.exam){
    const q=QUESTIONS.find(x=>x.id===Q.ids[Q.i]);
    Q.exam.picked[q.id]=i;
    S.answers[q.id]={pick:i,ok:i===q.answer,at:Date.now()};
    saveResume();
  }
  /* The student who tabbed to option C and pressed Enter must not have to tab
     from the top of the page to reach Check answer next. render() rebuilds
     the question card from its HTML, which destroys every button inside it
     and lets focus fall back to <body>; the answer is now selected and we
     know which one, so put the focus back on the matching NEW button. Only
     when byKey is true: a mouse click is not asking for a focus ring under
     the cursor, and a touch tap even less so. event.detail===0 in the inline
     onclick is the keyboard signal (Enter or Space on the focused button);
     the letter-key handler passes byKey:true. The recording above is
     unchanged — only the place the focus lands after is. */
  render();
  if(byKey){
    const btn=document.querySelector('.opts .opt:nth-child('+(i+1)+') .opt-answer');
    if(btn&&btn.focus)btn.focus();
  }
}
function reveal(){
  if(Q.exam)return;                       /* no peeking: the promise on the mock page */
  if(Q.shown||Q.sel===null)return;
  const q=QUESTIONS.find(x=>x.id===Q.ids[Q.i]);
  const ok=Q.sel===q.answer;
  Q.shown=true;
  /* Repeating the same choice is still a new recall attempt. Schedule once
     on submission, never when revisiting the result inside this run. */
  S.answers[q.id]={pick:Q.sel,ok:ok,at:Date.now()};
  Q.did[q.id]=ok;                         /* what THIS sitting scored — see finishSet */
  scheduleSRS(q.id,ok);
  markDayActive();save();render();
  /* she reacts, then settles back to the screen's own pose */
  clepPose(ok?'dancing':'surprised'); clepSettle(3200);
}
/* The three ratings have to differ in what they DO, not only in what they
   store, or the heading above them — "this sets when it comes back" — is a
   lie on two of the three buttons.
     Guessed   rung 0, back tomorrow.
     Unsure    rung 1, back in three days.
     Confident untouched: the ordinary ladder, and out of the deck.
   Both intervals come off the existing SRS ladder rather than being new
   numbers, so the deck's own description of itself stays true.
   Unsure PINS the rung instead of inheriting it. scheduleSRS has already
   promoted a correct answer by the time this runs, so a question answered
   right at rung 3 would otherwise go out to 60 days while the student was
   telling us they did not trust it. Pinning can therefore demote, which is
   the intended reading of unsure: the memory is not solid yet.
   A wrong answer is deliberately NOT touched here. scheduleSRS has already
   put it at rung 0, due tomorrow, and tomorrow is the floor — no rating can
   make it come back sooner, and none should make it come back later. */
function setConf(id,c){
  S.conf[id]=c;
  if(S.answers[id]){
    S.answers[id].conf=c;
    if(isCorrect(id)&&(c===0||c===1)){
      const lvl=c===0?0:1;
      const d=new Date();d.setDate(d.getDate()+SRS[lvl]);
      S.srs[id]={lvl:lvl,due:isoLocal(d)};
    }
  }
  save();render();
  toast(c===0?'In your review deck, back tomorrow.'
    :c===1?'In your review deck, back in three days.'
    :'Left on the normal schedule.');
}
function navQ(d){
  const n=Q.i+d;
  if(n<0)return;
  if(n>=Q.ids.length){finishSet();return}
  moveQ(n);render();
  /* a new question: back to the screen's own pose. clepOnView cannot do this —
     the view key has not changed, so its dedupe returns early. */
  clearTimeout(CLEP.settleT); clepPose(clepViewPose());
}
/* ⚠️ THIS SCORES THE SITTING, NOT THE CHAPTER. It used to count Q.ids through
   isAnswered/isCorrect, which read S.answers — lifetime state. So a student who
   had worked the chapter last week and now skipped straight through it was told
   they had answered forty questions at 92%, "in 1 min"; and a brand-new profile
   skipping everything was congratulated with "0%, you answered 0, all correct."
   Q.did is written only where an answer is actually submitted in this run
   (reveal and revealCase), so what the card reports is what just happened. */
function finishSet(){
  if(Q.exam){examFinish(false);return}
  saveResume(true);
  const ids=Object.keys(Q.did||{});
  const done=ids.length;
  const right=ids.filter(id=>Q.did[id]).length;
  const missed=done-right;
  const mins=Math.round((Date.now()-Q.t0)/60000);
  const pct=done?Math.round(right/done*100):0;

  /* Nothing answered is not a score of zero — it is not a score at all, and
     dressing it as one is how the end of a set started reading as a machine
     talking to itself. */
  if(!done){
    clepPose('presenting'); clepSettle(5000);
    showModal(`<h3>${ico('scroll',40)} End of the set</h3>
     <p>You reached the end without answering anything, so there is nothing to score. Everything here is still waiting whenever you want it.</p>
     <div class="modal-actions">
       <button class="btn sec" onclick="closeModal();go({name:'home'})">Dashboard</button>
       <button class="btn go" onclick="closeModal();Q.i=0;render()">Back to the first question</button>
     </div>`);
    return;
  }

  if(pct>=80&&done>=3)confetti();
  /* the end of a set is the one moment she gets to jump */
  clepPose(pct>=80&&done>=3?'jumping':'presenting'); clepSettle(5000);
  const face=ico(pct>=90?'laurel':pct>=75?'target':pct>=50?'hourglass':'scroll',40);
  const skipped=Q.ids.length-done;
  showModal(`<h3>${face} ${pct}%</h3>
   <p>You answered <strong>${done}</strong> question${done===1?'':'s'} and got <strong>${right}</strong> right${mins?` in ${mins} min`:''}.
   ${missed>0?` The ${missed} you missed ${missed===1?'is':'are'} in your review deck.`:' All correct.'}
   ${skipped>0?`<br><span style="color:var(--ink-4)">${skipped} skipped, still unanswered.</span>`:''}</p>
   <div class="modal-actions">
     <button class="btn sec" onclick="closeModal();go({name:'home'})">Dashboard</button>
     ${missed>0?`<button class="btn go" onclick="closeModal();go({name:'review'})">Review mistakes</button>`:`<button class="btn go" onclick="closeModal()">Continue</button>`}
   </div>`);
}
/* ---- Exam conditions ----------------------------------------------------
   The mock page has always promised three things: random order, a running
   clock, and no peeking at explanations until you finish. Only the first was
   ever true. These functions are the other two.

   Nothing here is a second quiz engine. Exam mode is one extra field on Q, and
   the reason that is enough is that the whole verdict / confidence /
   explanation / theory block in vQuiz lives inside `if(Q.shown)`. A paper
   never sets Q.shown, so none of it is built, and there is nothing to peek at
   even with the developer tools open.

   The end time is a timestamp, not a countdown, so a tab that gets throttled
   or suspended loses repaints but never loses time — the clock is right again
   the instant it is looked at.                                             */
let EXAM_T=null;
function examLeft(){ return Q.exam?Math.max(0,Q.exam.end-Date.now()):0 }
function examClockText(){
  const s=Math.round(examLeft()/1000);
  const digits=String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');
  const cls=examClockClass();
  /* Naming the state keeps the warning readable without its colour. */
  const word=s<=0?' Time expired':cls?' Low time':'';
  return digits+word;
}
function examClockClass(){ const s=examLeft()/1000; return s<=30?'out':s<=120?'low':'' }
/* Repaint one node. render() once a second would rebuild the stem the student
   is in the middle of reading, and take their highlighter selection with it. */
function paintExamClock(){
  const el=$('examClock'); if(!el)return;
  el.textContent=examClockText();
  el.className='exam-clock '+examClockClass();
}
/* Its own interval, not sessStartTick — that one returns early unless a study
   session is running, and a mock exam is not a study session. */
function examStartTick(){
  examStopTick();
  EXAM_T=setInterval(()=>{
    /* Leaving the quiz view during a paper is walking out of the hall. */
    if(!Q.exam||Q.exam.done||view.name!=='quiz'){examStopTick();return}
    paintExamClock();
    if(examLeft()<=0)examFinish(true);
  },1000);
}
function examStopTick(){ clearInterval(EXAM_T); EXAM_T=null }
function examConfirmFinish(){
  const left=Q.exam?Q.ids.filter(id=>!(id in Q.exam.picked)).length:0;
  showModal(`<h3>Hand in the paper?</h3>
   <p>${left?`<strong>${left}</strong> question${left===1?' is':'s are'} still unanswered. Unanswered counts as wrong, the same as it would on the day.`:'Every question is answered.'}</p>
   <div class="modal-actions">
     <button class="btn sec" onclick="closeModal()">Keep working</button>
     <button class="btn go" onclick="closeModal();examFinish(false)">Hand in</button>
   </div>`);
}
function examFinish(byClock){
  if(!Q.exam||Q.exam.done)return;
  Q.exam.done=true;
  examStopTick();
  const picked=Q.exam.picked, ids=Q.ids;
  const answered=ids.filter(id=>id in picked);
  /* Scheduled once each, here, rather than on every tap: a paper is one
     sitting, and a question whose answer was changed three times is still one
     attempt. Unanswered questions are deliberately left out — they score as
     wrong on the paper, because that is what an exam does, but a question the
     student never reached is not one they got wrong, and putting it in the
     review deck would claim they had.
     This is also what fixes the old scoring: finishSet() counted every
     question the student had ever answered, in any earlier session, as part of
     today's mark. */
  /* Progress may have changed while the paper was away. Its mark must come
     from its own picks, not a later practice answer or a cloud merge. */
  const correct=id=>picked[id]===QUESTIONS.find(q=>q.id===id).answer;
  answered.forEach(id=>scheduleSRS(id,correct(id)));
  markDayActive(); saveResume();
  const right=answered.filter(correct).length;
  const pct=Math.round(right/ids.length*100);
  const secs=Math.max(0,Math.round((Math.min(Date.now(),Q.exam.end)-Q.t0)/1000));
  const mins=Math.floor(secs/60), rem=secs%60;
  const taken=mins?`${mins} min ${rem} s`:`${rem} s`;
  const blank=ids.length-answered.length;
  if(pct>=80)confetti();
  clepPose(pct>=80?'jumping':'presenting'); clepSettle(5000);
  const face=ico(pct>=90?'laurel':pct>=75?'target':pct>=50?'hourglass':'scroll',40);
  showModal(`<h3>${face} ${pct}%</h3>
   <p>${byClock?'Time is up. ':''}<strong>${right}</strong> right out of <strong>${ids.length}</strong>, in ${taken}.${blank?` <strong>${blank}</strong> left blank, counted as wrong.`:''}</p>
   <div class="modal-actions">
     <button class="btn sec" onclick="closeModal();go({name:'home'})">Dashboard</button>
     <button class="btn go" onclick="examReview()">Go through the paper</button>
   </div>`);
}
/* Marking every question as revealed hands the paper back to the ordinary quiz
   view, which already knows how to show a verdict, an explanation, the theory
   link and the confidence rating. A question left blank opens with no
   selection, which reads as "not quite — the answer is C". That is what it was. */
function examReview(){
  closeModal();
  if(!Q.exam)return;
  const picked=Q.exam.picked;
  Q.exam=null;
  Q.ids.forEach(id=>{ Q.attempts[id]={sel:(id in picked)?picked[id]:null,shown:true,txt:'',peek:false} });
  Q.i=0; Object.assign(Q,Q.attempts[Q.ids[0]]);
  Q.title='Mock exam — the paper';
  render();
}
/* The session listener above returns early when no session is running, so a
   paper needs its own. Same reason: a backgrounded tab stops repainting, and
   the clock would otherwise show the minute the student looked away. */
document.addEventListener('visibilitychange',()=>{
  if(document.hidden||!Q.exam||Q.exam.done||view.name!=='quiz')return;
  const g=$('gate'); if(g&&!g.classList.contains('hide'))return;
  examStartTick(); paintExamClock();
});

/* ============ A NOTE ON A QUESTION, AND A WAY TO SAY IT IS WRONG ============ */

/* The note saves as it is typed and never re-renders, because a render would
   take the cursor out of the box mid-sentence.

   Emptying the box stores a blank note rather than deleting the key. Deleting
   it looks tidier and loses the student's work: mergeStates treats an absent
   key as "this device has nothing to say" and takes the other side's copy, so
   a note cleared on the laptop came back from the phone's older copy on the
   next sync, box open, reading "Saved 4 min ago". A blank note carries a
   timestamp, so it wins the merge the way any other edit does. Everything
   downstream reads a note with no text as no note. */
let NOTE_T=null, NOTE_DIRTY=false;
/* Only the write to disk is debounced; the state is updated on the keystroke.
   Debouncing the state too meant a render inside the window — a confidence
   button, Next, anything — rebuilt the textarea from state that had not caught
   up yet and blanked the box under the student's hands. */
function flushNote(){
  if(!NOTE_DIRTY)return;
  clearTimeout(NOTE_T); NOTE_T=null; NOTE_DIRTY=false;
  save();
}
/* A tab being hidden is the last event a phone reliably delivers before the
   browser is killed, so the pending write goes out here. pagehide covers the
   desktop close; both are cheap and idempotent. */
document.addEventListener('visibilitychange',()=>{ if(document.hidden)flushNote() });
window.addEventListener('pagehide',flushNote);
function toggleNote(qid){
  Q.noteOpen=(Q.noteOpen===qid)?null:qid;
  render();
  if(Q.noteOpen===qid){const el=$('qNote'); if(el)el.focus()}
}
function saveNote(qid,txt){
  clearTimeout(NOTE_T);
  if(!S.notes)S.notes={};
  const t=(txt||'').trim();
  S.notes[qid]={txt:t,at:Date.now()};
  NOTE_DIRTY=true;
  const say=$('qNoteSay'); if(say)say.textContent='Saving…';
  NOTE_T=setTimeout(()=>{
    NOTE_T=null; NOTE_DIRTY=false;
    save();
    const s2=$('qNoteSay'); if(s2)s2.textContent=t?'Saved just now':'';
  },500);
}

/* Reports live in the student's own state, so they ride the same sync as
   everything else and reach whoever runs the bank without anybody having to
   publish an email address. Copy puts the same text on the clipboard for a
   student who would rather just send it. */
const REPORT_KINDS=[
  ['key','The marked answer looks wrong'],
  ['typo','A typo, or an option that makes no sense'],
  ['exp','The explanation is wrong or contradicts itself'],
  ['img','The picture is missing, cut off, or gives the answer away'],
  ['other','Something else'],
];
function openReport(qid){
  const q=QUESTIONS.find(x=>x.id===qid); if(!q)return;
  const old=(S.reports||{})[qid];
  showModal(`<h3>${ico('stylus',19)} Something wrong with this question</h3>
   <p style="margin-bottom:15px">Tell us what you saw and we will check it against the book. Nothing you write here changes your score.</p>
   <div class="conf-btns" id="repKinds" style="flex-wrap:wrap;margin-bottom:13px">
     ${REPORT_KINDS.map(([k,label])=>`<button class="conf-b${old&&old.kind===k?' on':''}" data-k="${k}" onclick="pickReportKind(this)">${label}</button>`).join('')}
   </div>
   <textarea class="caseinput" id="repTxt" rows="4" placeholder="Anything that helps us find it — which option, which line.">${esc(old?old.txt:'')}</textarea>
   <div class="modal-actions">
     <button class="btn sec" onclick="closeModal()">Cancel</button>
     <button class="btn sec" onclick="copyReport('${qid}')">Copy it instead</button>
     <button class="btn go" onclick="sendReport('${qid}')">Send</button>
   </div>`);
  const el=$('repTxt'); if(el)el.dataset.kind=old?old.kind:'';
}
function pickReportKind(btn){
  const box=$('repKinds'); if(box)Array.from(box.children).forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  const el=$('repTxt'); if(el)el.dataset.kind=btn.dataset.k;
}
/* kind comes back empty when nothing was picked, and stays empty, so the caller
   can tell an unfilled form from one where the student chose "Something else".
   Defaulting it here would make the guard below unable to ever fire. */
function reportText(qid){
  const el=$('repTxt');
  const kind=el?(el.dataset.kind||''):'';
  const label=(REPORT_KINDS.find(r=>r[0]===kind)||['','Something else'])[1];
  return {kind:kind,label:label,txt:el?el.value.trim():''};
}
function sendReport(qid){
  const r=reportText(qid);
  if(!r.kind&&!r.txt){toast('Pick what is wrong, or write a line');return}
  if(!S.reports)S.reports={};
  S.reports[qid]={kind:r.kind||'other',txt:r.txt,at:Date.now()};
  save();
  closeModal();
  render();
  toast(fbUser?'Thank you — it is on its way':'Thank you — it goes up next time you sign in');
}
function copyReport(qid){
  const r=reportText(qid);
  const line=qid+' — '+r.label+(r.txt?': '+r.txt:'');
  const done=()=>toast('Copied — paste it wherever you like');
  /* The old path is the fallback for a REJECTION as well as for an absent API.
     navigator.clipboard exists over file:// and on any page the browser does
     not consider secure, and then writeText rejects — so the branch that has
     the API is exactly the branch most likely to fail, and it was the one with
     no second try. */
  const legacy=()=>{
    const t=document.createElement('textarea');
    t.value=line; t.style.position='fixed'; t.style.opacity='0';
    document.body.appendChild(t); t.select();
    let ok=false;
    try{ok=document.execCommand('copy')}catch(e){}
    document.body.removeChild(t);
    ok?done():toast('Could not copy on this browser');
  };
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(line).then(done,legacy);
  }else legacy();
}

function toggleFlag(id){S.flags[id]=!S.flags[id];save();render();toast(S.flags[id]?'Flagged':'Flag removed')}
function toggleExp(b){b.classList.toggle('open');b.nextElementSibling.classList.toggle('open')}




/* ============ JUMP NAVIGATOR ============ */
function openJump(){
  const n=Q.ids.length;
  let h=`<h3>${ico('target',19)} Go to question</h3>
   <p style="margin-bottom:15px">${n} question${n===1?'':'s'} in this set. Type a number or pick one from the grid.</p>
   <div class="jumprow">
     <input class="jumpin" id="jumpNum" type="number" min="1" max="${n}" placeholder="e.g. ${Math.min(100,n)}"
       onkeydown="if(event.key==='Enter'){event.preventDefault();jumpGo()}">
     <button class="btn go" onclick="jumpGo()">Go</button>
     <button class="btn sec" onclick="jumpNextUnanswered()">Next unanswered</button>
     ${Q.exam?'':'<button class="btn sec" onclick="jumpFirstWrong()">First wrong</button>'}
   </div>
   <div class="jumpkey">
     <span class="k"><span class="sw" style="background:var(--neuro)"></span>Current</span>
     ${Q.exam
       ? `<span class="k"><span class="sw" style="background:var(--fill);border-color:var(--tx)"></span>Answered</span>`
       : `<span class="k"><span class="sw" style="background:var(--ok-bg);border-color:var(--ok)"></span>Correct</span>
     <span class="k"><span class="sw" style="background:var(--bad-bg);border-color:var(--bad)"></span>Wrong</span>`}
     <span class="k"><span class="sw" style="background:var(--card)"></span>Not answered</span>
     <span class="k"><span class="sw" style="background:var(--gold)"></span>Flagged</span>
   </div>
   <div class="qgrid" id="qgrid">`;
  Q.ids.forEach((id,i)=>{
    const cls=['qg'];
    if(i===Q.i)cls.push('cur');
    /* Q.exam.picked, not isAnswered — isAnswered reads S.answers, which also
       holds every attempt at this question from every earlier session, so it
       would light a question green before the student had even reached it. */
    else if(Q.exam){ if(id in Q.exam.picked)cls.push('done') }
    else if(isAnswered(id))cls.push(isCorrect(id)?'ok':'bad');
    if(S.flags[id])cls.push('flagged');
    h+=`<button class="${cls.join(' ')}" onclick="jumpTo(${i})">${i+1}</button>`;
  });
  h+=`</div><div class="modal-actions" style="margin-top:18px">
     <button class="btn sec" onclick="closeModal()">Close</button></div>`;
  showModal(h,true);
  setTimeout(()=>{
    const inp=$('jumpNum');if(inp&&inp.focus)inp.focus();
    const cur=document.querySelector('.qg.cur');
    if(cur&&cur.scrollIntoView)cur.scrollIntoView({block:'center'});
  },40);
}
function jumpTo(i){
  if(i<0||i>=Q.ids.length)return;
  moveQ(i);
  closeModal();render();window.scrollTo(0,0);
}
function jumpGo(){
  const inp=$('jumpNum');
  const v=parseInt(inp&&inp.value,10);
  if(!v||v<1||v>Q.ids.length){toast(`Enter a number between 1 and ${Q.ids.length}`);return}
  jumpTo(v-1);
}
function jumpNextUnanswered(){
  /* In a paper "unanswered" means unanswered in this paper. Falling back to
     isAnswered would step over every question the student happened to have
     seen weeks ago and leave it blank. */
  const seen=id=>Q.exam?(id in Q.exam.picked):isAnswered(id);
  for(let k=1;k<=Q.ids.length;k++){
    const i=(Q.i+k)%Q.ids.length;
    if(!seen(Q.ids[i])){jumpTo(i);return}
  }
  toast(Q.exam?'Every question in this paper is answered':'Every question in this set is answered');
}
function jumpFirstWrong(){
  if(Q.exam)return;
  for(let k=1;k<=Q.ids.length;k++){
    const i=(Q.i+k)%Q.ids.length;
    const id=Q.ids[i];
    if(isAnswered(id)&&!isCorrect(id)){jumpTo(i);return}
  }
  toast('Nothing wrong in this set');
}

/* ============ HIGHLIGHTER ============ */
let armed='y';           /* active pen: y/g/p/b, or 'er' to erase */
const PENS=[['y','Yellow'],['g','Green'],['p','Pink'],['b','Blue']];

function setPen(c){armed=(armed===c)?null:c;render()}

function offsetOf(root,node,off){
  let acc=0;
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  let n;
  while(n=w.nextNode()){
    if(n===node)return acc+off;
    acc+=n.nodeValue.length;
  }
  return -1;
}
function stripMarks(root){
  root.querySelectorAll('mark.hl').forEach(m=>{
    const p=m.parentNode;
    while(m.firstChild)p.insertBefore(m.firstChild,m);
    p.removeChild(m);
  });
  root.normalize();
}
function paint(root,s,e,c){
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  let acc=0,n;const hits=[];
  while(n=w.nextNode()){
    const len=n.nodeValue.length, ns=acc, ne=acc+len;
    if(ne>s&&ns<e)hits.push({node:n,from:Math.max(s-ns,0),to:Math.min(e-ns,len)});
    acc=ne;
  }
  hits.forEach(({node,from,to})=>{
    if(to<=from)return;
    const r=document.createRange();
    r.setStart(node,from);r.setEnd(node,to);
    const m=document.createElement('mark');
    m.className='hl';m.dataset.c=c;
    try{r.surroundContents(m)}
    catch(err){const f=r.extractContents();m.appendChild(f);r.insertNode(m)}
  });
}
function applyHighlights(root,list){
  stripMarks(root);
  (list||[]).slice().sort((a,b)=>a.s-b.s).forEach(h=>paint(root,h.s,h.e,h.c));
}
function carve(list,s,e){
  const out=[];
  (list||[]).forEach(h=>{
    if(h.e<=s||h.s>=e){out.push(h);return}
    if(h.s<s)out.push({s:h.s,e:s,c:h.c});
    if(h.e>e)out.push({s:e,e:h.e,c:h.c});
  });
  return out;
}
function onStemSelect(){
  if(!armed)return;
  const sel=window.getSelection();
  if(!sel||sel.isCollapsed||!sel.rangeCount)return;
  const root=document.querySelector('.stem');
  if(!root)return;
  const r=sel.getRangeAt(0);
  if(!root.contains(r.commonAncestorContainer))return;
  const s=offsetOf(root,r.startContainer,r.startOffset);
  const e=offsetOf(root,r.endContainer,r.endOffset);
  if(s<0||e<0||e<=s)return;
  const q=QUESTIONS.find(x=>x.id===Q.ids[Q.i]);
  if(!q)return;
  let list=carve(S.hl[q.id]||[],s,e);
  if(armed!=='er')list.push({s:s,e:e,c:armed});
  list.sort((a,b)=>a.s-b.s);
  /* merge touching runs of the same colour */
  const merged=[];
  list.forEach(h=>{
    const p=merged[merged.length-1];
    if(p&&p.c===h.c&&h.s<=p.e)p.e=Math.max(p.e,h.e);
    else merged.push(Object.assign({},h));
  });
  S.hl[q.id]=merged;
  sel.removeAllRanges();
  save();
  applyHighlights(root,merged);
}
function clearHl(){
  const q=QUESTIONS.find(x=>x.id===Q.ids[Q.i]);
  if(!q)return;
  delete S.hl[q.id];save();render();
  toast('Highlights cleared');
}
function markbar(qid){
  const n=(S.hl[qid]||[]).length;
  let h=`<div class="mkbar"><span class="lb">${ico('stylus',14)} Marker</span>`;
  PENS.forEach(([c,name])=>{
    h+=`<button class="pen ${c} ${armed===c?'on':''}" title="${name} highlighter" onclick="setPen('${c}')"></button>`;
  });
  h+=`<button class="pen er ${armed==='er'?'on':''}" title="Eraser" onclick="setPen('er')">&#9003;</button>`;
  if(n)h+=`<button class="clr" onclick="clearHl()">Clear all</button>`;
  h+=`<span class="hint">${armed?(armed==='er'?'Select text to erase':'Select text to highlight'):'Pick a colour to start'}</span>`;
  return h+'</div>';
}

/* ============ WEAKEST CHAPTERS ============ */

/* A chapter needs this many answered before it is ranked. Below it the number
   is noise: one wrong out of two reads as 50% and would sit above a chapter
   the student has genuinely failed forty questions in. */
const WEAK_MIN=5;

function weakChapters(){
  /* One pass over QUESTIONS, bucketed by chapter — not qsIn() per chapter,
     which is a full scan of the array each time. At 153 chapters that was 153
     passes over four thousand questions, and renderNav calls this on every
     render: every answer, every Next, every flag, every confidence tap. It
     measured 7.7 ms a call on this desktop and a phone is several times that,
     which is a stutter on the hottest path in the app rather than a fault
     anybody would report. The bucketing runs once at 4,049 iterations. */
  const by={};
  for(let i=0;i<QUESTIONS.length;i++){
    const q=QUESTIONS[i];
    if(!bankOn(q))continue;
    (by[q.chapter]||(by[q.chapter]=[])).push(q);
  }
  const out=[];
  openModules().forEach(m=>{
    m.groups.forEach(g=>{
      g.chapters.forEach(([cid,cname])=>{
        const cq=by[cid];
        if(!cq||!cq.length)return;
        /* One walk of the chapter, not three filters and then accuracy() over
           the same array again. The accuracy is the same number accuracy(cq)
           returns — answered questions only — computed from the counts this
           walk already has. */
        let done=0; const wrong=[];
        for(let j=0;j<cq.length;j++){
          const a=S.answers[cq[j].id];
          if(a===undefined)continue;
          done++; if(!a.ok)wrong.push(cq[j].id);
        }
        if(!done)return;
        out.push({cid:cid,name:cname,mod:m,total:cq.length,done:done,
                  wrong:wrong,acc:Math.round((done-wrong.length)/done*100)});
      });
    });
  });
  /* Worst first; on a tie the one with more answered questions, because that
     verdict rests on more evidence. */
  out.sort((a,b)=>a.acc-b.acc||b.done-a.done);
  return out;
}

function vWeak(p){
  const all=weakChapters();
  const ranked=all.filter(c=>c.done>=WEAK_MIN);
  const early=all.filter(c=>c.done<WEAK_MIN);
  let h=`<div class="eyebrow" style="background:var(--bad)">Where it hurts</div><h1>${ico('target',26)} Weakest chapters</h1>
  <p class="page-sub">Every chapter you have started, worst score first. A chapter is only ranked once you have answered ${WEAK_MIN} of its questions &mdash; below that the percentage says more about luck than about you.</p>`;

  if(!all.length){
    h+=`<div class="empty"><div class="big">${ico('target',46)}</div><h3>Nothing to rank yet</h3>
     <p>Answer a few questions and this page will tell you where to spend your time.</p></div>`;
    p.innerHTML=h;return;
  }

  const worst=ranked.slice(0,5);
  const drill=worst.reduce((a,c)=>a.concat(c.wrong),[]);
  if(drill.length){
    h+=`<div class="filterbar">
      <button class="btn go" onclick="startQuiz(${JSON.stringify(drill).replace(/"/g,'&quot;')},'Weakest chapters — what you got wrong')">${ico('play')} Drill the ${drill.length} you got wrong in your ${worst.length===1?'weakest chapter':`${worst.length} weakest chapters`}</button>
    </div>`;
  }

  if(ranked.length){
    h+=`<div class="grouphdr">Ranked</div>`;
    ranked.forEach(c=>{
      h+=`<button class="ch-row" onclick="startChapter('${c.cid}')">
        <span class="ch-dot" style="background:${accColor(c.acc)}"></span>
        <span class="ch-name">${c.name}<span class="wk-mod">${c.mod.name}</span></span>
        <span class="ch-count">${c.done} of ${c.total} answered${c.wrong.length?` &middot; ${c.wrong.length} wrong`:''}</span>
        <span class="ch-acc" style="color:${accColor(c.acc)}">${c.acc}%</span>
      </button>`;
    });
  }else{
    h+=`<p class="page-sub">No chapter has ${WEAK_MIN} answered questions yet, so nothing is ranked. The chapters you have started are below.</p>`;
  }

  if(early.length){
    h+=`<div class="grouphdr">Too early to tell</div>`;
    early.forEach(c=>{
      h+=`<button class="ch-row" onclick="startChapter('${c.cid}')">
        <span class="ch-dot" style="background:var(--line-2)"></span>
        <span class="ch-name">${c.name}<span class="wk-mod">${c.mod.name}</span></span>
        <span class="ch-count">${c.done} of ${c.total} answered</span>
        <span class="ch-acc" style="color:var(--ink-4)">&mdash;</span>
      </button>`;
    });
  }
  p.innerHTML=h;
}

/* ============ REVIEW DECK — CHANGE 3: by module ============ */
function vReview(p){
  const deck=deckAll();
  const due=dueNow();
  let h=`<div class="eyebrow" style="background:var(--ent)">Spaced repetition</div><h1>${ico('hourglass',26)} Review deck</h1>
  <p class="page-sub">Anything you got wrong, or got right but marked as a guess or as unsure, lands here. A guess comes back tomorrow, an unsure one in three days, then 7, 21, 60. Right answer moves it out a step; wrong resets it.</p>`;
  if(!deck.length){
    h+=`<div class="empty"><div class="big">${ico('hourglass',46)}</div><h3>Deck is empty</h3>
     <p>Nothing wrong, nothing guessed, nothing unsure.</p></div>`;
    p.innerHTML=h;return;
  }
  h+=`<div class="grid g4" style="margin-bottom:24px">
    <div class="stat"><span class="emo">${ico('hourglass',20)}</span><div class="n" style="color:${due.length?'var(--ent)':'var(--ok)'}">${due.length}</div><div class="l">Due today</div></div>
    <div class="stat"><span class="emo">${ico('amphora',20)}</span><div class="n">${deck.length}</div><div class="l">In the deck</div></div>
    <div class="stat"><span class="emo">${ico('target',20)}</span><div class="n">${deck.filter(q=>S.answers[q.id].conf===0&&isCorrect(q.id)).length}</div><div class="l">Lucky guesses</div></div>
    <div class="stat"><span class="emo">${ico('laurel',20)}</span><div class="n">${deck.filter(q=>(S.srs[q.id]||{}).lvl>=3).length}</div><div class="l">Nearly retired</div></div>
  </div>`;
  if(due.length){
    h+=`<div class="filterbar"><button class="btn go" onclick="startQuiz(${JSON.stringify(due.map(q=>q.id)).replace(/"/g,'&quot;')},'Review — due today')">${ico('play')} Start ${due.length} due</button>
    <button class="btn sec" onclick="startQuiz(${JSON.stringify(deck.map(q=>q.id)).replace(/"/g,'&quot;')},'Review — all')">Whole deck (${deck.length})</button></div>`;
  }else{
    h+=`<div class="filterbar"><button class="btn sec" onclick="startQuiz(${JSON.stringify(deck.map(q=>q.id)).replace(/"/g,'&quot;')},'Review — all')">Nothing due — practise anyway (${deck.length})</button></div>`;
  }

  activeModules().forEach(m=>{
    const md_=deck.filter(q=>q.module===m.id);
    if(!md_.length)return;
    const mdue=md_.filter(q=>due.includes(q));
    h+=`<div class="grouphdr">${ico(m.icon,15)} ${m.name} — ${md_.length}${mdue.length?` · ${mdue.length} due`:''}</div>`;
    h+=`<div class="filterbar">
      ${mdue.length?`<button class="chip on" style="--c:${m.hex}" onclick="startQuiz(${JSON.stringify(mdue.map(q=>q.id)).replace(/"/g,'&quot;')},'${m.name} — due')">${ico('play')} ${mdue.length} due now</button>`:''}
      <button class="chip" onclick="startQuiz(${JSON.stringify(md_.map(q=>q.id)).replace(/"/g,'&quot;')},'${m.name} — review')">All ${md_.length}</button>
    </div>`;
    md_.forEach(q=>{
      const s=S.srs[q.id]||{lvl:0,due:todayISO()};
      const isDue=s.due<=todayISO();
      const guess=isCorrect(q.id)&&S.answers[q.id].conf===0;
      h+=`<button class="ch-row" onclick="startQuiz(['${q.id}'],'Single question')">
        <span class="ch-dot" style="background:${isDue?'var(--ent)':'var(--line-2)'}"></span>
        <span class="ch-name" style="font-size:13.2px;font-weight:600">${guess?ico('target',13)+' ':''}${esc(q.stem.slice(0,96))}…</span>
        <span class="ch-count">${esc(chapterName(q.chapter))}</span>
        <span class="ch-acc" style="color:${isDue?'var(--ent)':'var(--ink-4)'};min-width:62px">${isDue?'due now':'in '+daysUntil(s.due)+'d'}</span>
      </button>`;
    });
  });
  p.innerHTML=h;
}
function daysUntil(iso){return Math.max(Math.ceil((new Date(iso)-new Date(todayISO()))/86400000),0)}

function vFlagged(p){
  const f=QUESTIONS.filter(q=>S.flags[q.id]);
  let h=`<div class="eyebrow" style="background:var(--gold);color:var(--on-accent)">Marked by you</div><h1>${ico('laurel',26)} Flagged</h1>
  <p class="page-sub">Anything you wanted to come back to, right or wrong.</p>`;
  if(!f.length){
    h+=`<div class="empty"><div class="big">${ico('laurel',46)}</div><h3>No flags yet</h3><p>Hit the flag button on any question — or press <b>F</b> — to park it here.</p></div>`;
  }else{
    activeModules().forEach(m=>{
      const fm=f.filter(q=>q.module===m.id);
      if(!fm.length)return;
      h+=`<div class="grouphdr">${ico(m.icon,15)} ${m.name} — ${fm.length}</div>
      <div class="filterbar"><button class="chip on" style="--c:${m.hex}" onclick="startQuiz(${JSON.stringify(fm.map(q=>q.id)).replace(/"/g,'&quot;')},'${m.name} — flagged')">${ico('play')} Practise ${fm.length}</button></div>`;
      fm.forEach(q=>{
        h+=`<button class="ch-row" onclick="startQuiz(['${q.id}'],'Flagged')">
          <span class="ch-dot" style="background:var(--gold)"></span>
          <span class="ch-name" style="font-size:13.2px;font-weight:600">${esc(q.stem.slice(0,100))}…</span>
          <span class="ch-count">${esc(chapterName(q.chapter))}</span></button>`;
      });
    });
  }
  p.innerHTML=h;
}

/* ============ MOCK — CHANGE 3: by module ============ */
let mockMods={};
/* Free-text cases stay out of a paper. They reveal themselves through vCase's
   own path, which exam mode does not intercept, so one in the pool would be a
   hole in the no-peeking promise. Both the pool and the counts beside the
   module chips have to use this, or the chip promises questions the paper
   will not contain. Both pools must also use bankOn, as the chip counts do,
   or the paper can include questions from sources the student switched off. */
function mockable(q){ return q.type!=='case' }
function vMock(p){
  activeModules().forEach(m=>{if(mockMods[m.id]===undefined)mockMods[m.id]=qsInModule(m.id).filter(mockable).length>0});
  const pool=QUESTIONS.filter(q=>mockMods[q.module]&&mockable(q)&&bankOn(q));
  let h=`<div class="eyebrow" style="background:var(--neuro)">Exam conditions</div><h1>${ico('amphora',26)} Mock exam</h1>
  <p class="page-sub">Pick your modules, pick a length. Random order, a clock you can see, and no explanations until you hand the paper in. Anything left blank counts as wrong.</p>
  <h2>1 · Choose modules</h2><div class="filterbar">`;
  openModules().forEach(m=>{
    const n=qsInModule(m.id).filter(mockable).length;
    h+=`<button class="chip ${mockMods[m.id]&&n?'on':''}" style="--c:${m.hex};${n?'':'opacity:.4'}" aria-pressed="${!!(mockMods[m.id]&&n)}"
      ${n?`onclick="mockMods['${m.id}']=!mockMods['${m.id}'];render()"`:'disabled'}>
      ${ico(m.icon,15)} ${m.name} <span style="opacity:.7">${n}</span></button>`;
  });
  h+=`</div>`;
  h+=`<h2>2 · Choose length</h2>`;
  if(!pool.length){
    const filtered=QUESTIONS.some(q=>mockMods[q.module]&&mockable(q));
    h+=`<div class="empty"><div class="big">${ico('amphora',46)}</div><h3>${filtered?'No questions match your source filter':'Nothing selected'}</h3><p>${filtered?'Your source filter hides all questions in the selected modules. Change it on the module page.':'Pick at least one module that has questions loaded.'}</p></div>`;
  }else{
    h+=`<p class="page-sub" style="margin-bottom:14px">${pool.length} question${pool.length===1?'':'s'} in the selected pool.</p><div class="grid g3" style="max-width:780px">`;
    [10,20,40].forEach(n=>{
      const ok=pool.length>=n;
      h+=`<button class="card" ${ok?`onclick="runMock(${n})"`:'disabled'} style="--c:rgba(109,76,125,.4)">
        <div class="mod-top"><span class="mod-ic" style="background:var(--neuro)">${ico('clepsydra',22)}</span><span class="mod-name">${n} questions</span></div>
        <div class="mod-meta">${examMins(n)} minutes on the clock${ok?'':' · pool too small'}</div></button>`;
    });
    if(pool.length<40)h+=`<button class="card" onclick="runMock(${pool.length})" style="--c:rgba(109,76,125,.4)">
      <div class="mod-top"><span class="mod-ic" style="background:var(--gold);color:var(--on-accent)">${ico('target',22)}</span><span class="mod-name">All ${pool.length}</span></div>
      <div class="mod-meta">${examMins(pool.length)} minutes on the clock</div></button>`;
    h+=`</div>`;
  }
  p.innerHTML=h;
}
/* 72 seconds a question. The card said "~1.2 minutes each" long before there
   was a clock to hold it to; keeping the same figure means the length the
   student has been choosing all along is the length they now get. */
function examMins(n){ return Math.max(1,Math.round(n*1.2)) }
function runMock(n){
  if(hasSavedMock()){offerMockResume();return}
  if(hasStoredMock()){
    toast('A saved paper belongs to another semester. Switch back to resume or discard it before starting another.');
    return;
  }
  const pool=QUESTIONS.filter(q=>mockMods[q.module]&&mockable(q)&&bankOn(q)).slice();
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]}
  const mins=examMins(n);
  startQuiz(pool.slice(0,n).map(q=>q.id),'Mock exam',null,null,
    {end:Date.now()+mins*60000,mins:mins,picked:{},done:false});
}

/* ============ STUDY SESSION — the screen ============ */
