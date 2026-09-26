/* Open smoke.html directly from file://.  It runs no app boot logic of its
   own, but it does load js/utils.js and js/storage.js (see smoke.html) so
   the bank-badge check below exercises the app's own bankPills()/BANKS
   colour lookup instead of reimplementing it here. */
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
  /* Bank badge colour: find a real question in each bank and render its
     actual pill through the app's own bankPills(), checking the hex it
     produces matches BANKS — not just that the bank has questions. */
  /* Literal, NOT read from BANKS: a wrong hex in BANKS must fail here. */
  var BANK_HEX={endpoint:"#9a6b1f",house:"#2f6b8f",gradegain:"#8f3f5c"};
  Object.keys(BANK_HEX).forEach(function(b){
    var q=all.find(function(x){return banksOf(x).indexOf(b)>=0});
    var html=q?bankPills(q):'';
    test(b+' bank badge renders its own colour',!!q&&html.indexOf('background:'+BANK_HEX[b])>=0,q?'':'no question found in bank '+b);
  });
  var summary=document.createElement('p');summary.textContent=pass+' passed, '+fail+' failed';document.body.appendChild(summary);document.title='SMOKE '+(fail?'FAIL':'PASS')+' '+pass+'/'+(pass+fail);
})();
