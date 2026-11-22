(() => {
  const host = document.querySelector('.embers');
  if (!host || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const count = window.innerWidth < 600 ? 16 : 30;
  for (let i = 0; i < count; i++) {
    const ember = document.createElement('i');
    ember.className = 'ember';
    ember.style.left = Math.random() * 100 + '%';
    ember.style.top = (48 + Math.random() * 58) + '%';
    ember.style.setProperty('--duration', (9 + Math.random() * 12) + 's');
    ember.style.setProperty('--delay', (-Math.random() * 20) + 's');
    ember.style.setProperty('--drift', (Math.random() * 110 - 55) + 'px');
    host.appendChild(ember);
  }
})();