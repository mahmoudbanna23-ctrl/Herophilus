/* Open smoke.html directly from file://.  It deliberately uses no app JS. */
(function(){
  var out=document.getElementById('results'), EXPECTED_TOTAL=6956, pass=0, fail=0;
  function test(name,ok,detail){var li=document.createElement('li');li.textContent=(ok?'PASS ':'FAIL ')+name+(detail?' — '+detail:'');out.appendChild(li);if(ok)pass++;else fail++;}
  function holes(a){for(var i=0;i<a.length;i++)if(!(i in a))return true;return false}
  var arrays=[Q_ENT,Q_PEDS,Q_PEDS_EP,Q_PEDS_EP2,Q_OPHTHO,Q_OPHTHO_EP,Q_OPHTHO_EP2,Q_NEURO,C_ENT,C_PEDS,C_OPHTHO,C_NEURO];
  var all=[].concat.apply([],arrays);
  test('fonts.js registered a stylesheet under file://',document.styleSheets.length>0);
  test('boot globals exist',typeof MODULES!=='undefined'&&typeof Q_ALL!=='undefined'&&typeof THEORY!=='undefined');
  test('four modules',MODULES.length===4,'got '+MODULES.length);
  test('validator question total',all.length===EXPECTED_TOTAL,'got '+all.length+' expected '+EXPECTED_TOTAL);
  test('aggregator contains every source question',Q_ALL.length===all.length,'got '+Q_ALL.length);
  test('no sparse holes in banks',!arrays.some(holes));
  test('no sparse holes in module groups',!MODULES.some(function(m){return holes(m.groups)||m.groups.some(function(g){return holes(g.chapters)})}));
  var q=Q_ENT[0], quiz=document.getElementById('quiz');quiz.textContent=q.stem;q.options.forEach(function(o){var b=document.createElement('button');b.textContent=o;quiz.appendChild(b)});
  test('quiz item renders each option',quiz.querySelectorAll('button').length===q.options.length);
  var banks={endpoint:0,house:0,gradegain:0};all.forEach(function(q){[q.bank].concat(q.alsoIn||[]).forEach(function(b){if(banks[b]!==undefined)banks[b]++})});
  Object.keys(banks).forEach(function(b){test(b+' bank badge has content',banks[b]>0,'count '+banks[b])});
  var summary=document.createElement('p');summary.textContent=pass+' passed, '+fail+' failed';document.body.appendChild(summary);document.title='SMOKE '+(fail?'FAIL':'PASS')+' '+pass+'/'+(pass+fail);
})();
