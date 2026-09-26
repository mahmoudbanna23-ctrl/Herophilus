(function(){
  var stopped=false;
  function stopHomeMotion(){
    stopped=true;
    document.documentElement.classList.add('home-motion-stopped');
    var film=document.querySelector('.ambient .film');
    if(film&&film.pause)film.pause();
    if(typeof CLEP!=='undefined'){clearTimeout(CLEP.idleT);clearTimeout(CLEP.shiftT);clearTimeout(CLEP.settleT);}
  }
  window.syncDeskMotion=function(){
    var candle=document.querySelector('[data-desk-candle]');
    if(!candle)return;
    candle.setAttribute('aria-pressed',String(!stopped));
    if(stopped)stopHomeMotion();
  };
  document.addEventListener('click',function(event){
    var candle=event.target.closest&&event.target.closest('[data-desk-candle]');
    if(!candle)return;
    if(candle.getAttribute('aria-pressed')==='true')stopHomeMotion();
    candle.setAttribute('aria-pressed','false');
  });
}());
