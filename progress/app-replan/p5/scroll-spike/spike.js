(function () {
  'use strict';
  var scene = document.querySelector('.scene');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var nativeScroll = CSS.supports('animation-timeline: scroll()');
  function rangeFor(el) {
    var parts = getComputedStyle(el).getPropertyValue('--range').trim().split(/\s+/);
    return [parseFloat(parts[0]) / 100, parseFloat(parts[1]) / 100];
  }
  function localProgress(p, range) { return Math.min(1, Math.max(0, (p - range[0]) / (range[1] - range[0]))); }
  if (!nativeScroll && !reduced) {
    var targets = ['.plate','.candle-pool','.shaft','.letters','.tablet','.pile','.daily-mask','.line-a .line-content','.line-b .line-content','.book','.ring-sweep'];
    var items = [];
    targets.forEach(function (selector) { document.querySelectorAll(selector).forEach(function (el) { items.push([el, rangeFor(el)]); }); });
    var ticking = false;
    function update() {
      var max = document.documentElement.scrollHeight - innerHeight;
      var p = max ? Math.min(1, Math.max(0, scrollY / max)) : 0;
      items.forEach(function (item) { item[0].style.setProperty('--delay', (-localProgress(p, item[1])) + 's'); });
      document.querySelectorAll('.book').forEach(function (book) { book.style.setProperty('--edge-delay', (-localProgress(p, [.70,1])) + 's'); });
      ticking = false;
    }
    addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }
  if (reduced) return;
  var canvas = document.getElementById('dust'), ctx = canvas.getContext('2d'), motes = [], count = 36;
  function resize() { canvas.width = innerWidth * devicePixelRatio; canvas.height = innerHeight * devicePixelRatio; ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0); }
  for (var i = 0; i < count; i++) motes.push({ x: Math.random()*innerWidth, y: Math.random()*innerHeight, r: .4+Math.random()*1.7, v: .08+Math.random()*.32, d: Math.random()*6.28 });
  function draw(t) { ctx.clearRect(0,0,innerWidth,innerHeight); motes.forEach(function(m){ m.y -= m.v; m.x += Math.sin(t*.00035+m.d)*.12; if(m.y < -4){m.y=innerHeight+4;m.x=Math.random()*innerWidth;} ctx.fillStyle='rgba(255,229,171,.45)';ctx.beginPath();ctx.arc(m.x,m.y,m.r,0,6.283);ctx.fill(); }); requestAnimationFrame(draw); }
  addEventListener('resize', resize); resize(); requestAnimationFrame(draw);
}());
