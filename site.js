// Casebook runtime: figure scaling + scroll reveals. Everything works without it
// except the fixed-size mockup iframes, which also need support.js anyway.
(() => {
  document.documentElement.classList.add('js');

  // Scale fixed-size mockup iframes to their container width.
  const ro = new ResizeObserver((entries) => {
    for (const e of entries) {
      const w = parseFloat(e.target.dataset.w) || 900;
      e.target.style.setProperty('--s', e.contentRect.width / w);
    }
  });
  document.querySelectorAll('.fig-viewport[data-w]').forEach((el) => ro.observe(el));

  // Reveal figures and evidence as they enter the viewport.
  const targets = document.querySelectorAll('[data-reveal]');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
  targets.forEach((el) => io.observe(el));
})();
