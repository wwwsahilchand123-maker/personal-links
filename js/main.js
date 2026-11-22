(() => {
  const host = document.querySelector('.embers');
  if (!host || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const count = window.innerWidth < 600 ? 18 : 34;
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('i');
    dot.className = 'ember';
    dot.style.left = Math.random() * 100 + '%';
    dot.style.top = (55 + Math.random() * 55) + '%';
    dot.style.setProperty('--duration', (8 + Math.random() * 11) + 's');
    dot.style.setProperty('--delay', (-Math.random() * 18) + 's');
    dot.style.setProperty('--drift', (Math.random() * 100 - 50) + 'px');
    host.appendChild(dot);
  }
})();