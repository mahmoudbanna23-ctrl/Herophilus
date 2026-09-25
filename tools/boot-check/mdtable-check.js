/* mdtable-check.js — plain node, no Chrome, no framework.
   Loads isMdRule / mdCells / mdTable straight out of app/js/theory.js's own
   text (never re-typed here, so a drift in the real function cannot go
   unnoticed) and asserts the four cases from
   progress/app-replan/p0/p0-fix-brief.md (R-table) / REFUTE-round1.md
   fix-list item 5. Run: node tools/boot-check/mdtable-check.js */
'use strict';
const fs=require('fs');
const path=require('path');
const vm=require('vm');

const THEORY_PATH=path.join(__dirname,'..','..','app','js','theory.js');
const src=fs.readFileSync(THEORY_PATH,'utf8');

function extractFn(name){
  const marker='function '+name+'(';
  const start=src.indexOf(marker);
  if(start<0)throw new Error('mdtable-check: could not find function '+name+' in theory.js');
  const braceStart=src.indexOf('{',start);
  if(braceStart<0)throw new Error('mdtable-check: no opening brace for '+name);
  let depth=0,i=braceStart;
  for(;i<src.length;i++){
    if(src[i]==='{')depth++;
    else if(src[i]==='}'){
      depth--;
      if(depth===0)break;
    }
  }
  if(depth!==0)throw new Error('mdtable-check: unbalanced braces extracting '+name);
  return src.slice(start,i+1);
}

const extracted=[extractFn('isMdRule'),extractFn('mdCells'),extractFn('mdTable')].join('\n\n');
const sandbox={};
vm.createContext(sandbox);
try{
  vm.runInContext(extracted,sandbox,{filename:'theory.js (extracted)'});
}catch(e){
  console.error('FAIL setup: could not evaluate extracted functions: '+e.message);
  process.exit(1);
}
const {mdTable}=sandbox;
if(typeof mdTable!=='function'){
  console.error('FAIL setup: mdTable did not come out of the extracted sandbox');
  process.exit(1);
}

let failures=0;
function check(name,cond,detail){
  if(cond){
    console.log('PASS '+name);
  }else{
    failures++;
    console.log('FAIL '+name+(detail?(' — '+detail):''));
  }
}

// Case 1: a "| - | - |" BODY row (not in the separator position, rows[1])
// survives as <td>-</td> cells.
{
  const html=mdTable(['| H1 | H2 |','| 1 | 2 |','| - | - |'],'');
  check('body-row-dash-survives', html.includes('<td>-</td><td>-</td>'),
    'expected <td>-</td><td>-</td> in output, got: '+html);
}

// Case 2: a 1-dash separator in row 2 (rows[1]) is dropped.
{
  const html=mdTable(['| H1 | H2 |','| - | - |','| 1 | 2 |'],'');
  const oneDataRow=(html.match(/<tr>/g)||[]).length===2; // thead tr + one tbody tr
  check('one-dash-separator-dropped',
    html.includes('<td>1</td><td>2</td>')&&!html.includes('<td>-</td>')&&oneDataRow,
    'expected exactly one tbody row (1,2), no dash cells; got: '+html);
}

// Case 3: a "| --- | :---: |" separator in row 2 (rows[1]) is dropped.
{
  const html=mdTable(['| H1 | H2 |','| --- | :---: |','| 1 | 2 |'],'');
  const oneDataRow=(html.match(/<tr>/g)||[]).length===2;
  check('gfm-separator-dropped',
    html.includes('<td>1</td><td>2</td>')&&!html.includes(':---:')&&oneDataRow,
    'expected exactly one tbody row (1,2), no separator text; got: '+html);
}

// Case 4: a table whose row 2 (rows[1]) is data keeps that row.
{
  const html=mdTable(['| H1 | H2 |','| 1 | 2 |'],'');
  const twoRowsTotal=(html.match(/<tr>/g)||[]).length===2; // thead tr + tbody tr
  check('data-row-2-kept',
    html.includes('<td>1</td><td>2</td>')&&twoRowsTotal,
    'expected row 2 kept as a data row; got: '+html);
}

if(failures>0){
  console.error(failures+' case(s) FAILED');
  process.exit(1);
}
console.log('All mdtable-check cases PASS');
