function theoryChapters(mod){
  const m=moduleOf(mod);if(!m)return [];
  const out=[];
  m.groups.forEach(g=>g.chapters.forEach(c=>{if(THEORY[c[0]])out.push(c)}));
  return out;
}
function theoryCount(){return Object.keys(THEORY).length}

let termEntryPending=false, termLoading=false;

function termName(){
  const t=TERMS.find(x=>x.id===activeTerm);
  return t?t.name:'Choose your semester';
}
function activateTerm(id,force=false){
  if(!force&&activeTerm===id)return false;
  /* A quiz holds question ids and a timer independently of QUESTIONS. Keeping
     either alive would let the previous semester survive the pool change.
     Saved progress and saved papers stay in S and are never pruned here. */
  examStopTick();
  sessStopTick();
  Q={ids:[],i:0,title:'',sel:null,shown:false,t0:null,txt:'',peek:false,
    caret:null,did:{},attempts:{},chapter:null,sources:[],exam:null};
  activeTerm=id;
  rebuildQuestions(id);
  rebuildTheory(id);
  QTHEORY=null;
  mockMods={};
  sessDraft.scope='all';
  $('search').value='';
  $('results').innerHTML='';
  $('results').classList.remove('show');
  closeModal();
  document.body.classList.remove('bk-on');
  view={name:'home'};
  if(me&&!termEntryPending&&sess())sessStartTick();
  return true;
}
/* The pending year and semester live on termFields.pick rather than in a new
   global, the same place doSearch keeps its own flag. Both callers render
   through termFields() — the gate's own step and the settings modal — and both
   hand the answer to chooseTerm(), so there is exactly one place the choice can
   be read from and no way for the two to disagree. It is reset on every render
   so reopening the picker after cancelling shows the saved semester again
   rather than the abandoned selection. */
function termFields(){
  const choice=termChoice(S.term);
  const t=TERMS.find(x=>x.id===(choice?choice.id:activeTerm))||
    TERMS.find(x=>x.id==='y4s2');
  termFields.pick={year:t.year,semester:t.semester};
  return `<div class="tpick" id="tpick">${termChips()}</div>`;
}
/* Whether a term has anything in it is read from MODULES, not from a list kept
   by hand: a semester acquires content the moment a module names its id, and a
   hand-kept list would go stale on the commit that adds one. */
function termPublished(year,semester){
  const t=TERMS.find(x=>x.year===year&&x.semester===semester);
  return t?MODULES.filter(m=>m.term===t.id):[];
}
function termChips(){
  const p=termFields.pick;
  const years=TERMS.filter(x=>x.semester===1).map(x=>x.year);
  const chip=(kind,val,label,on)=>
    `<button type="button" class="tchip${on?' on':''}" role="radio"` +
    ` aria-checked="${on?'true':'false'}" onclick="termPick('${kind}',${val})">` +
    `${label}</button>`;
  const mods=termPublished(p.year,p.semester);
  const names=mods.map(m=>esc(m.name));
  const stat=names.length
    ? `${names.join(' · ')} — ${names.length===1?'one subject':names.length+' subjects'} published here.`
    : 'Nothing published in this semester yet. You can still pick it and come back.';
  return `<div>
      <p class="tlab" id="tlabYear">Year</p>
      <div class="trow" role="radiogroup" aria-labelledby="tlabYear">
        ${years.map(y=>chip('year',y,'Year '+y,y===p.year)).join('')}
      </div>
    </div>
    <div>
      <p class="tlab" id="tlabSem">Semester</p>
      <div class="trow" role="radiogroup" aria-labelledby="tlabSem">
        ${chip('semester',1,'1st semester',p.semester===1)}
        ${chip('semester',2,'2nd semester',p.semester===2)}
      </div>
    </div>
    <p class="tstat${names.length?'':' empty'}" role="status">${stat}</p>`;
}
/* Only the chips inside #tpick are rewritten. Calling render() here would
   rebuild the page underneath the gate — or close the modal this control is
   sitting in — for what is a change of highlight. */
function termPick(kind,val){
  termFields.pick[kind]=val;
  const box=$('tpick');
  if(box)box.innerHTML=termChips();
}
function gateTermStep(){
  return `<div class="gstep" data-step="profiles">
    <h2>Choose your year and semester</h2>
    <p class="gtag">${me.name&&me.name!=='Untitled'?'For '+esc(me.name)+'. ':''}Only
      content from the semester you pick will appear anywhere in the app.</p>
    ${termFields()}
    <div class="gfoot">
      <button class="btn sec" onclick="leaveProfile()">Back to profiles</button>
      <button class="btn go" onclick="chooseTerm()">Continue</button>
    </div>
  </div>`;
}
function showTermPicker(){
  if(!me)return;
  showModal(`<h3>Year and semester</h3>
    ${termFields()}
    <p>Changing semester closes the current quiz. Unsubmitted study selections
      are discarded; saved answers and chapter positions remain.
      A saved mock paper and its deadline remain in its original semester.
      A study timer keeps its clock in its original semester.</p>
    <div class="modal-actions">
      <button class="btn sec" onclick="closeModal()">Cancel</button>
      <button class="btn go" onclick="chooseTerm()">Use this semester</button>
    </div>`);
}
function chooseTerm(){
  if(!me)return;
  /* The choice is read from termFields.pick, which the chips write, rather
     than out of the DOM. Reading the DOM would leave this function silently
     dependent on which of the two pickers happens to be on screen. */
  const p=termFields.pick;
  const t=p&&TERMS.find(x=>x.year===p.year&&x.semester===p.semester);
  if(!t)return;
  if(!termEntryPending&&t.id===activeTerm){closeModal();return}
  flushNote();
  if(Q.exam&&!Q.exam.done)saveResume();
  const previous=termChoice(S.term);
  S.term={id:t.id,at:Math.max(Date.now(),previous?previous.at+1:0)};
  save();
  if(termEntryPending)finishProfileEntry();
  else{activateTerm(t.id);render()}
}
function vEmptyTerm(p){
  p.innerHTML=`<div class="eyebrow">${esc(termName())}</div>
    <h1>No content published yet</h1>
    <p class="page-sub">This semester is available to choose, but its subjects,
      questions and notes have not been published yet. Your saved progress
      remains available in its original semester.</p>
    <button class="btn go" onclick="showTermPicker()">Change semester</button>`;
}
/* reverse index: question id -> {chapter, sectionId, heading} */
let QTHEORY=null;
function qTheory(qid){
  if(!QTHEORY){
    QTHEORY={};
    Object.keys(THEORY).forEach(ch=>{
      (THEORY[ch].sections||[]).forEach(s=>{
        (s.qs||[]).forEach(q=>{QTHEORY[q]={ch:ch,sec:s.id,h:s.h}});
      });
    });
  }
  return QTHEORY[qid]||null;
}

/* ⚠️⚠️ IS THIS ROW THE `|---|---|` RULE? The old test was
   `/^\s*\|?\s*[-: ]+\|/`, and it ATE THE HEADER of every table whose first
   column is unlabelled: in `| | **A** | **B** |` the `[-: ]+` happily matched
   the single SPACE between the first two pipes, so the header was discarded as
   a separator and the first data row was promoted into it — silently, with
   every column label shifted one row up. The rule row contains nothing but
   pipes, dashes, colons and spaces, and it must contain a dash; test for
   exactly that. */
function isMdRule(row){
  const t=String(row).trim();
  return /^[|\s:-]+$/.test(t)&&t.indexOf('-')>=0;
}
/* ⚠️ SPLIT A PIPE-TABLE ROW WITHOUT LOSING ITS EMPTY CELLS. The old code was
   `row.split('|').filter(c=>c.trim()!=='')`, which drops the two empty
   fragments either side of the row — and every empty cell INSIDE it too. A
   comparison table's header almost always starts with a blank corner cell
   (`| | **A** | **B** |`), so its header came out one column short and every
   column label shifted left by one against the body. Found by rendering a
   two-column comparison to PDF and reading it; nothing throws, and the table
   still looks like a table. Trim only the outer delimiters. */
/* ⚠️⚠️ THE HEADER ROW GOES IN A <thead>, AND IT IS A PRINT DECISION, NOT TIDINESS.
   Measured: compressing a chapter from prose into tables cut its word count by
   63 % and its PAGE count by nothing at all — 3,826 words still printed 16
   pages, where the 10,384-word prose version printed 30. Density fell from ~350
   words a page to ~240. The cause is `break-inside:avoid` on a page full of
   medium tables: a ten-row table that will not fit in the space left jumps
   whole to the next page and leaves the bottom third of the sheet blank, over
   and over. Letting tables break is only safe if the reader can still see the
   column labels on the continuation page, and `display:table-header-group` on a
   real <thead> is what repeats them. Emitted here so md() and mdBlock() cannot
   drift apart. */
function mdTable(rows,attr){
  const body=rows.filter(r=>!isMdRule(r)).map(mdCells);
  if(!body.length)return '';
  const cell=(c,t)=>`<${t}>${c.trim()}</${t}>`;
  let t='<table'+(attr||'')+'>';
  t+='<thead><tr>'+body[0].map(c=>cell(c,'th')).join('')+'</tr></thead>';
  if(body.length>1)t+='<tbody>'+body.slice(1).map(r=>'<tr>'+r.map(c=>cell(c,'td')).join('')+'</tr>').join('')+'</tbody>';
  return t+'</table>';
}
function mdCells(row){
  const c=String(row).split('|');
  if(c.length&&c[0].trim()==='')c.shift();
  if(c.length&&c[c.length-1].trim()==='')c.pop();
  return c;
}
/* The coloured anchor at the head of an entity block or a "**Term** — fact"
   bullet. ⚠️ IT CANNOT BE DONE IN CSS. `strong:first-child` was tried and
   painted whole paragraphs terracotta: measured over all 30 ENT chapters, the
   MEDIAN line that opens in bold carries 71 characters of it and the longest
   440, because the telegraphic format bolds the whole clinical statement, not
   just its subject. Colouring that is a wall, not a rail.
   What the format really writes is `**TERM: rest**` or `**TERM — rest**`, so
   the anchor is the part before that punctuation — "Definition:", "TRUE:",
   "FETOR = OSTEITIS". 65 % of bold-opening lines yield one; the rest keep plain
   bold, which is the correct outcome for a line that has no single subject.
   Returns null when there is no anchor, so the caller leaves the line alone. */
function mdLead(t){
  if(!t.startsWith('<strong>'))return null;
  const end=t.indexOf('</strong>');
  if(end<0)return null;
  const inner=t.slice(8,end);
  /* Only ever cut inside the leading run of PLAIN text. An organism name is
     `<em>`-wrapped inside the bold, and splitting across a tag boundary would
     emit crossed tags — which browsers silently repair into something else. */
  const lt=inner.indexOf('<');
  const plain=lt<0?inner:inner.slice(0,lt);
  const ci=plain.slice(0,44).search(/[:—]/);
  let cut=-1;
  if(ci>0)cut=ci+1;
  else if(lt<0&&inner.length<=44)cut=inner.length;   // a short bold IS the term
  if(cut<0)return null;
  return '<strong><span class="lt">'+inner.slice(0,cut)+'</span>'+
         inner.slice(cut)+'</strong>'+t.slice(end+9);
}
function mdBlock(s){
  if(!s)return '';
  let h=esc(s);
  h=h.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/(^|[^*])\*([^*]+?)\*/g,'$1<em>$2</em>');
  const lines=h.split('\n');
  let out='',para=[],list=[],quote=[],tbl=[],pcls='';
  /* ⚠️ THE PARAGRAPH CLASS IS DECIDED BY THE LINE THAT OPENS THE PARAGRAPH, so it
     is captured when the first line is pushed and cleared when the paragraph is
     flushed. Deciding it at flush time would read the LAST line instead. */
  const fp=()=>{if(para.length){out+='<p'+(pcls?' class="'+pcls+'"':'')+'>'+para.join(' ')+'</p>';para=[];pcls=''}};
  const fl=()=>{if(list.length){out+='<ul>'+list.map(i=>'<li>'+i+'</li>').join('')+'</ul>';list=[]}};
  const fq=()=>{if(quote.length){out+='<blockquote>'+quote.join(' ')+'</blockquote>';quote=[]}};
  /* Pipe tables. The `table:{head,rows}` field still works and is unchanged — this
     is for tables written inline in `body`, which a section may hold several of.
     Same logic md() already runs on every question explanation, emitting the
     th-table class so it inherits the styling tableHTML() gets. Bold and italic
     are applied to the whole string above, so cells arrive already formatted. */
  const ft=()=>{
    if(!tbl.length)return;
    out+=mdTable(tbl,' class="th-table"');tbl=[];
  };
  lines.forEach(ln=>{
    const t=ln.trim();
    if(t.startsWith('|')){fp();fl();fq();tbl.push(t);return}
    ft();
    if(!t){fp();fl();fq();return}
    /* ⚠️ esc() runs above, so a markdown "> " has ALREADY become "&gt; " by the
       time we get here — matching only '> ' meant blockquotes never rendered at
       all and the marker showed as literal text. Match the escaped form too. */
    if(t.startsWith('&gt; ')){fp();fl();quote.push(t.slice(5));return}
    if(t.startsWith('> ')){fp();fl();quote.push(t.slice(2));return}
    /* A bare '>' separating two quotes has no text after it, so it matches
       neither test above and fell through to become a paragraph containing a
       single stray angle bracket. Close the open quote and drop the marker. */
    if(t==='&gt;'||t==='>'){fp();fl();fq();return}
    if(t.startsWith('- ')){fp();fq();const b=t.slice(2);list.push(mdLead(b)||b);return}
    /* ── THREE LINE KINDS THAT ARE NOT PROSE ────────────────────────────────
       ⚠️ ALL THREE MATCH THE CONVERTED HTML, NOT THE MARKDOWN. esc() and the
       bold/italic replacement both run over the WHOLE string above, before this
       loop, so by the time a line arrives here `**X**` is already `<strong>X…`
       and `*x*` is already `<em>x</em>`. Matching asterisks here finds nothing —
       and finds it silently, since a missed match just falls through to <p>. */
    if(t.startsWith('### ')){fp();fl();fq();out+='<h3 class="th-sub">'+t.slice(4)+'</h3>';return}
    /* The `Src:` line closes almost every section written under the §14 format.
       It is a citation, not a sentence — styled as a caption so the eye skips it
       while reading and finds it when checking. Every merged chapter already
       ends its sections this way, so they all take the new look with no rewrite. */
    if(t.startsWith('Src:')){fp();fl();fq();out+='<p class="src">'+t+'</p>';return}
    /* A whole line in italics is a cross-reference or an aside — "*full table in
       ent-csom*". Anchored at both ends and allowing no inner tag, so a paragraph
       that merely BEGINS with an italic phrase is not mistaken for one. */
    if(/^<em>[^<]*<\/em>$/.test(t)){fp();fl();fq();out+='<p class="xref">'+t+'</p>';return}
    fl();fq();
    /* A paragraph opening on a bold term is an ENTITY BLOCK — "**DIPHTHERIA (L3):**
       …". Marking it lets print colour just that first term, which is what turns a
       column of grey paragraphs into a scannable list without touching the words. */
    if(!para.length&&t.startsWith('<strong>')){pcls='lead';para.push(mdLead(t)||t);return}
    para.push(t);
  });
  fp();fl();fq();ft();
  return out;
}
function flowHTML(f){
  if(!f)return '';
  let h=`<div class="flow"><div class="flow-title">${esc(f.title||'Algorithm')}</div>`;
  (f.steps||[]).forEach((s,i)=>{
    if(i)h+='<div class="farrow">&#8595;</div>';
    if(s.k==='decision'){
      h+=`<div class="fstep"><div class="fbox dec"><div class="ft">${esc(s.t)}</div>
        <div class="fbranch">
          <div class="fb y"><b>Yes</b>${esc(s.yes||'')}</div>
          <div class="fb n"><b>No</b>${esc(s.no||'')}</div>
        </div></div></div>`;
    }else{
      h+=`<div class="fstep"><div class="fbox ${s.k==='alert'?'alert':''}">
        <div class="ft">${esc(s.t)}</div>${s.n?`<div class="fn">${esc(s.n)}</div>`:''}
      </div></div>`;
    }
  });
  return h+'</div>';
}
function tableHTML(t){
  if(!t)return '';
  /* <thead> for the same reason mdTable() uses one — it repeats the column
     labels when a long table breaks across a printed page. */
  let h='<table class="th-table"><thead><tr>';
  (t.head||[]).forEach(c=>{h+=`<th>${mdInline(c)}</th>`});
  h+='</tr></thead><tbody>';
  (t.rows||[]).forEach(r=>{
    h+='<tr>';
    r.forEach(c=>{h+=`<td>${mdInline(c)}</td>`});
    h+='</tr>';
  });
  return h+'</tbody></table>';
}
function mdInline(s){
  return esc(String(s||'')).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
}

function vTheory(p){
  if(!view.mod){
    let h=`<div class="eyebrow" style="background:var(--neuro)">Study notes</div><h1>${ico('scroll',26)} Theory</h1>
    <p class="page-sub">High-yield summaries written from the question bank \u2014 what the examiners actually test, in the order they test it. Each lecture opens as one continuous document you can read straight through or save as a PDF.</p>
    <div class="grid g3 mod-grid">`;
    activeModules().forEach(m=>{
      const chs=theoryChapters(m.id);
      const lock=isLocked(m.id);
      h+=`<button class="card mod-card${lock?' locked':''}" style="--c:${m.color}" ${chs.length?`onclick="go({name:'theory',mod:'${m.id}'})"`:'disabled style="opacity:.45"'}>
        ${(m.art||MOD_ART[m.id])?`<span class="mod-art" style="--art:url('assets/${m.art||MOD_ART[m.id]}.jpg')"></span>`:''}
        ${lock?'<span class="soon">Coming soon</span>':''}
        <div class="mod-info">
          <div class="mod-top"><span class="mod-ic">${ico(m.icon,25)}</span><span class="mod-name">${m.name}</span></div>
          <div class="mod-meta" style="margin-bottom:0">${lock?'Being written':chs.length?`${chs.length} lecture${chs.length===1?'':'s'} written`:'no notes yet'}</div>
        </div>
      </button>`;
    });
    p.innerHTML=h+'</div>';return;
  }
  const m=moduleOf(view.mod);
  if(!view.ch){
    const chs=theoryChapters(view.mod);
    let h=`<button class="tb-btn" style="padding-left:0;margin-bottom:8px" onclick="go({name:'theory'})">&larr; Theory</button>
    <div class="eyebrow" style="background:${m.hex}">${m.name}</div><h1>${ico(m.icon,26)} ${m.name} notes</h1>
    <p class="page-sub">Tap a lecture to open its full summary.</p>`;
    chs.forEach(([cid,cname])=>{
      const t=THEORY[cid];
      const nq=(t.sections||[]).reduce((n,s)=>n+(s.qs||[]).length,0);
      const must=(t.sections||[]).filter(s=>s.w==='must').length;
      h+=`<button class="th-ch" onclick="go({name:'theory',mod:'${view.mod}',ch:'${cid}'})">
        <span class="ch-dot" style="background:${m.hex}"></span>
        <span class="n">${esc(cname)}</span>
        <span class="m">${t.sections.length} sections \u00b7 ${must} must-know \u00b7 ${nq} linked Qs</span></button>`;
    });
    p.innerHTML=h;return;
  }

  /* ---- the lecture as one continuous document ---- */
  const t=THEORY[view.ch];
  if(!t){p.innerHTML=`<div class="empty"><div class="big">${ico('scroll',46)}</div><h3>No notes for this lecture</h3></div>`;return}
  const secs=t.sections||[];
  const allQs=[];
  secs.forEach(s=>(s.qs||[]).forEach(q=>{if(allQs.indexOf(q)<0)allQs.push(q)}));
  const LBL={must:'must know',high:'high yield',know:'background'};
  /* The printed chapter is designed in the MODULE's colour, so the stylesheet
     needs to know which module this is. Chrome supports neither `string-set` nor
     a var() inside an @page margin box, so the running head is written as a
     literal into a style element instead — one per chapter, replaced each time. */
  document.documentElement.style.setProperty('--mod',m.hex);
  (function(){
    let st=document.getElementById('printhead');
    if(!st){st=document.createElement('style');st.id='printhead';document.head.appendChild(st);}
    const esq=s=>String(s).replace(/\\/g,'\\\\').replace(/"/g,'\\"');
    st.textContent='@media print{@page{@top-right{content:"'+esq(chapterName(view.ch))+
      '";font-family:\'EB Garamond\',Georgia,serif;font-size:8.5pt;color:#8a94a3;'+
      'letter-spacing:.06em}}@page:first{@top-right{content:""}}}';
  })();
  const HEX={must:'var(--ent)',high:'var(--gold)',know:'var(--ink-4)'};

  /* .doc-head is the PRINTED COVER and nothing else now — the screen hides it
     while the reader is on, because the running head already names the chapter
     and the title was being set twice. */
  let h=`<div class="doc-head">
    <div class="eyebrow" style="background:${m.hex}">${ico(m.icon,13)} ${m.name}</div>
    <h1>${esc(chapterName(view.ch))}</h1>
    <div class="doc-meta">${secs.length} sections \u00b7 ${secs.filter(s=>s.w==='must').length} must-know \u00b7 ${allQs.length} linked questions</div>
  </div>`;

  /* ⚠️ ONE STRIP OF FURNITURE, ABOVE THE SHEET. The back link and the two
     actions used to sit in two separate bands, one above the reader and one
     below it, and between them they pushed the turn bar off the bottom of the
     window. Side by side they cost one line.
     The opening still goes INSIDE the book as its first page — left above it,
     it had to be scrolled past before the reader was even visible. */
  h+=`<div class="bk-wrap" id="bkWrap">
    <div class="bk-top">
      <button class="tb-btn" onclick="go({name:'theory',mod:'${view.mod}'})">&larr; ${esc(m.name)} notes</button>
      <div class="bk-acts">
        ${allQs.length?`<button class="btn go" onclick="startQuiz(${JSON.stringify(allQs).replace(/"/g,'&quot;')},'${esc(chapterName(view.ch)).replace(/'/g,"\\'")}')">\u25b6 Test the lecture (${allQs.length})</button>`:''}
        <button class="btn sec" onclick="window.print()">${ico('scroll',16)} Save as PDF</button>
      </div>
    </div>
    <div class="bk-stage" id="bkStage">
      <button class="bk-btn" id="bkPrev" onclick="bkTurn(-1)" aria-label="Previous page">${ico('chev-l',18)}</button>
      <div class="bk-sheet" id="bkSheet">
        <div class="bk-run"><span>${esc(chapterName(view.ch))}</span><span class="r" id="bkRun"></span></div>
        <div class="bk-view">
          <div class="bk-tap l" onclick="bkTurn(-1)" title="Previous page"></div>
          <div class="bk-tap r" onclick="bkTurn(1)" title="Next page"></div>
          <div class="bk-flow" id="bkFlow">`;

  h+=`<div class="bk-title">
    <div class="eyebrow" style="background:${m.hex}">${ico(m.icon,13)} ${m.name}</div>
    <h1>${esc(chapterName(view.ch))}</h1>
    <div class="doc-meta">${secs.length} sections \u00b7 ${secs.filter(s=>s.w==='must').length} must-know \u00b7 ${allQs.length} linked questions</div>
  </div>`;

  if(t.intro)h+=`<div class="th-intro bk-first">${mdBlock(t.intro)}</div>`;

  secs.forEach((s,i)=>{
    const c=HEX[s.w||'know'];
    h+=`<section class="th-sec" id="sec-${s.id}" style="--c:${c}">
      <div class="th-h">
        <span class="th-num">${String(i+1).padStart(2,'0')}</span>
        <h2>${esc(s.h)}</h2>
        <span class="wbadge ${s.w||'know'}">${LBL[s.w||'know']}</span>
      </div>
      <div class="th-body">${mdBlock(s.body)}`;
    if(s.table)h+=tableHTML(s.table);
    if(s.flow)h+=flowHTML(s.flow);
    if((s.qs||[]).length){
      h+=`<div class="th-test"><span class="lbl">Test yourself \u2014</span>
        <button class="btn go" onclick="startQuiz(${JSON.stringify(s.qs).replace(/"/g,'&quot;')},'${esc(s.h).replace(/'/g,"\\'")}')">${s.qs.length} question${s.qs.length===1?'':'s'} on this</button></div>`;
    }
    h+=`</div></section>`;
  });

  h+=`</div></div>
        <div class="bk-foot" id="bkNum"></div>
      </div>
      <button class="bk-btn" id="bkNext" onclick="bkTurn(1)" aria-label="Next page">${ico('chev-r',18)}</button>
    </div>
    <div class="bk-prog"><i id="bkProg"></i></div>
  </div>`;

  p.innerHTML=h;
  bkInit(view.sec);
}

/* ---------- book reader ----------
   BK.page is the current column index. Everything else is derived from the
   layout, never stored, so a resize or a font swap cannot leave it stale. */
var BK={page:0,pages:1,step:0,secs:[]};
function bkOn(){return document.body.classList.contains('bk-on')}
function bkInit(jumpTo){
  const wrap=document.getElementById('bkWrap');
  if(!wrap)return;
  document.body.classList.add('bk-on');
  BK.page=0;
  bkMeasure();
  if(jumpTo)bkToSec(jumpTo);
  else bkPaint();
  /* ⚠️ MEASURE AGAIN ONCE LAYOUT HAS SETTLED. The first pass runs in the same
     tick as the render, and anything that changes height afterwards — a font
     finishing, an image arriving — repaginates the columns while BK.pages still
     describes the old layout. The symptom is silent and ugly: the final pages
     turn up BLANK, because the transform walks past where the content now ends.
     Two rAFs cover same-frame layout; fonts.ready covers the slow case. */
  const settle=()=>{
    if(!bkOn())return;
    let anchor='';BK.secs.forEach(s=>{if(s.page<=BK.page)anchor=s.id});
    const was=BK.pages;
    bkMeasure();
    if(BK.pages!==was&&anchor)bkToSec(anchor);else bkPaint();
  };
  requestAnimationFrame(()=>requestAnimationFrame(settle));
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(settle).catch(()=>{});
}
function bkMeasure(){
  const flow=document.getElementById('bkFlow'),view=flow&&flow.parentElement;
  if(!flow)return;
  /* ⚠️ THE PAGE IS SIZED FIRST, AND EVERYTHING ELSE IS MEASURED OUT OF IT. The
     sheet is A4 by aspect-ratio, so only its HEIGHT is chosen here; the width
     follows, and the type block is then whatever the flex column leaves between
     the running head and the folio. Reading the type block back out of the DOM
     rather than computing it is what keeps the two in step when a font or a
     hairline changes.
     ⚠️ RESERVE WHAT THE FURNITURE ACTUALLY MEASURES, never a constant. The old
     reserve was the constant 118, measured once against a layout that has since
     changed three times; too small a reserve is what put the turn controls below
     the fold. */
  const wrap=document.getElementById('bkWrap');
  const stage=document.getElementById('bkStage'),sheet=document.getElementById('bkSheet');
  if(stage&&sheet){
    const host=wrap.parentElement;
    let tail=parseFloat(getComputedStyle(host).paddingBottom)||0;
    const pr=wrap.querySelector('.bk-prog');
    if(pr){const cs=getComputedStyle(pr);
      tail+=pr.offsetHeight+(parseFloat(cs.marginTop)||0)+(parseFloat(cs.marginBottom)||0);}
    let sh=Math.round(window.innerHeight-stage.getBoundingClientRect().top-tail-6);
    /* ⚠️ AND THE WIDTH CAN BE THE BINDING CONSTRAINT, not the height — a short
       wide window, or a phone where the arrows sit beside the page. A4 is taller
       than it is wide, so a sheet sized only by height silently overflows the
       stage and the arrows fall off the side. */
    const btns=[].slice.call(stage.querySelectorAll(':scope > .bk-btn'));
    const arrows=btns.reduce((acc,b)=>acc+b.offsetWidth,0);
    const sgap=parseFloat(getComputedStyle(stage).columnGap)||16;
    /* ⚠️ ASK THE LAYOUT WHERE THE ARROWS ARE — do not assume. Below 700px they
       wrap onto their own line under the page, where they cost HEIGHT and no
       width at all; charging the row for them there squeezed the sheet to a
       square. flex-wrap is the media query's own signal, so the two cannot drift
       apart the way a duplicated breakpoint in JS would. */
    const wrapped=getComputedStyle(stage).flexWrap==='wrap';
    const availW=stage.clientWidth-(wrapped?0:arrows+sgap*2)-2;
    if(wrapped&&btns.length)sh-=btns[0].offsetHeight+sgap;
    /* ⚠️ THE ORDER MATTERS. Math.max(floor, Math.min(sh, byWidth)) lets the
       floor beat the width clamp, and the page then overflows the stage and
       pushes an arrow off the side — seen at 435x311, where a 420px floor asked
       for a 297px width the row could not give. The floor is applied FIRST and
       the width clamp last, so the narrow case degrades by shrinking rather
       than by breaking. */
    sh=Math.min(Math.max(340,sh),Math.floor(availW*297/210));
    sheet.style.setProperty('--bk-sheet-h',sh+'px');
    /* The paper margins are a fraction of the PAGE's width — see the note on
       .bk-sheet for why they cannot be percentages in CSS. */
    const sw=sh*210/297;
    sheet.style.setProperty('--bk-pad-x',Math.round(sw*0.068)+'px');
    sheet.style.setProperty('--bk-pad-t',Math.round(sw*0.058)+'px');
    sheet.style.setProperty('--bk-pad-b',Math.round(sw*0.034)+'px');
    /* The progress rule under the page is set to the page's width, not the
       stage's, so it reads as part of the sheet rather than of the window. */
    wrap.style.setProperty('--bk-sheet-w',Math.round(sw)+'px');
  }
  const gap=parseFloat(getComputedStyle(flow).columnGap)||54;
  const h=Math.max(180,view.clientHeight);
  flow.style.setProperty('--bk-h',h+'px');
  const w=view.clientWidth;
  flow.style.columnWidth=w+'px';
  BK.step=w+gap;
  /* ⚠️ Decide per element whether it may be kept whole, by MEASURING it against
     the page height. A table or flowchart that fits gets `th-keep` and is never
     split; one that is taller than the page must be allowed to break, because
     break-inside:avoid on an over-tall block clips it — and a clipped table is
     content the learner never sees, with nothing on screen to say so.
     Measured with the class off, so a previous pass cannot bias the reading.
     ⚠️⚠️ A LIST IS NOT A TABLE, AND TREATING THEM ALIKE IS WHAT EMPTIED THE
     BOTTOM OF PAGES. A table broken across a page turn loses its column labels,
     so it is worth a gap; a list broken across a turn loses nothing at all, and
     keeping a twelve-item list whole strands the heading above it at the foot of
     the page with a third of the sheet blank under it — measured on op-glauc
     page 1, 140px of nothing. Lists and quotes are now held together only while
     they are SHORT enough that doing so cannot cost much: 45 % of the page. Past
     that they break, and the page fills.
     ⚠️ The two limits are different numbers on purpose. Do not collapse them. */
  const keepIf=(sel,limit)=>[].slice.call(flow.querySelectorAll(sel)).forEach(el=>{
    el.classList.remove('th-keep');
    if(el.getBoundingClientRect().height<=limit)el.classList.add('th-keep');
  });
  /* ⚠️ "IT FITS" IS THE WRONG TEST FOR A BIG BLOCK. A table 90 % of the page
     tall fits, so it was kept whole, so it jumped — and left 90 % of a sheet
     blank with only a heading on it. MEASURED before this line existed: op-lid
     and op-ret each carried a page filled to 3 %. What a table loses by breaking
     is its column labels, and .th-table thead is a table-header-group in the
     reader now, so the continuation column repeats them and it loses nothing.
     Past 60 % of the page a table or a flowchart therefore breaks. */
  keepIf('.th-table,.flow',h*0.6);
  keepIf('.th-body blockquote,.th-body ul',h*0.45);
  /* ⚠️ WHERE DOES THE CONTENT ACTUALLY STOP? Two obvious answers are both
     wrong and both give a BLANK FINAL PAGE, which only a screenshot reveals:
       - scrollWidth: the arithmetic is exact (N columns span N*w + (N-1)*gap)
         but the browser keeps a trailing empty column once content ends near a
         boundary, so it counts one too many;
       - the greatest offsetLeft in the flow: inside a multi-column container
         Chrome does not reliably report the FRAGMENTED position, so this
         returned the same inflated number.
     A Range over the flow's contents does report one rect per column fragment,
     so the right-most rect is the last column holding anything. Measured with
     the transform off, or every rect is displaced by the current page. */
  const prevT=flow.style.transform;
  flow.style.transform='none';
  const fr=flow.getBoundingClientRect();
  let maxL=0;
  const note=r=>{const rel=r.left-fr.left;if(r.width>0&&r.height>0&&rel>maxL)maxL=rel;};
  /* ⚠️ ONLY REAL TEXT COUNTS. A range over the whole flow also returns a rect
     for a section's BOX fragment — its border-left and padding spill into the
     next column carrying no words — which is what kept manufacturing a blank
     last page. Walk the text nodes instead and ignore whitespace-only ones. */
  const tw=document.createTreeWalker(flow,NodeFilter.SHOW_TEXT,{
    acceptNode:n=>n.nodeValue&&n.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT
  });
  const rg=document.createRange();
  let n;
  while((n=tw.nextNode())){
    rg.selectNodeContents(n);
    const rs=rg.getClientRects();
    for(let i=0;i<rs.length;i++)note(rs[i]);
  }
  [].slice.call(flow.querySelectorAll('img')).forEach(im=>note(im.getBoundingClientRect()));
  flow.style.transform=prevT;
  BK.pages=Math.max(1,Math.round(maxL/BK.step)+1);
  BK.secs=[].slice.call(flow.querySelectorAll('.th-sec')).map(el=>({
    id:el.id.replace(/^sec-/,''),
    h:(el.querySelector('h2')||{}).textContent||'',
    page:Math.max(0,Math.round(el.offsetLeft/BK.step))
  }));
  if(BK.page>BK.pages-1)BK.page=BK.pages-1;
}
function bkPaint(){
  const flow=document.getElementById('bkFlow');
  if(!flow)return;
  flow.style.transform='translateX('+(-BK.page*BK.step)+'px)';
  const n=document.getElementById('bkNum');
  if(n)n.textContent='Page '+(BK.page+1)+' of '+BK.pages;
  const pr=document.getElementById('bkProg');
  if(pr)pr.style.width=(BK.pages<2?100:(BK.page/(BK.pages-1))*100)+'%';
  const pv=document.getElementById('bkPrev'),nx=document.getElementById('bkNext');
  if(pv)pv.disabled=BK.page<=0;
  if(nx)nx.disabled=BK.page>=BK.pages-1;
  /* Running head: the last section that has started on or before this page. */
  const run=document.getElementById('bkRun');
  if(run){
    let cur='';
    BK.secs.forEach(s=>{if(s.page<=BK.page)cur=s.h});
    run.textContent=cur;
  }
}
function bkTurn(d){
  if(!bkOn())return;
  const p=BK.page+d;
  if(p<0||p>BK.pages-1)return;
  BK.page=p;bkPaint();
}
function bkToSec(id){
  const s=BK.secs.filter(x=>x.id===id)[0];
  BK.page=s?s.page:0;
  bkPaint();
}
function openTheoryFor(qid){
  if(THEORY_LOCKED)return;
  const t=qTheory(qid);
  if(!t)return;
  const q=QUESTIONS.find(x=>x.id===qid);
  go({name:'theory',mod:q?q.module:'pediatrics',ch:t.ch,sec:t.sec});
}

/* ============ CLOUD SYNC ============ */
const SDK=['https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
           'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js',
           'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js'];
let fbApp=null, fbUser=null, syncState='off', pushTimer=null, sdkLoading=null;
let cloudSession=null, cloudAuth=0, retryTimer=null;

