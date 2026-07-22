// Shared behaviour: scroll-reveal and count-up animations
(function () {
  function init() {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('ie-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.ie-reveal').forEach(function (el) { io.observe(el); });

    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        var el = e.target,
          v = parseFloat(el.getAttribute('data-val')),
          p = el.getAttribute('data-prefix') || '',
          s = el.getAttribute('data-suffix') || '',
          t0 = performance.now();
        function tick(t) {
          var k = Math.min(1, (t - t0) / 1200);
          k = 1 - Math.pow(1 - k, 3);
          el.textContent = p + Math.round(v * k).toLocaleString() + s;
          if (k < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.ie-count').forEach(function (el) { cio.observe(el); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
