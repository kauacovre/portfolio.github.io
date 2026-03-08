// js/cursor.js — Custom cursor (desktop only)

const isTouchDevice = () =>
  window.matchMedia('(max-width: 600px)').matches ||
  ('ontouchstart' in window);

if (!isTouchDevice()) {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');

  let mx = -100, my = -100;
  let rx = -100, ry = -100;

  // Snap cursor dot to mouse
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  // Lag ring follows with inertia
  function animateRing() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Grow ring on interactive elements
  const interactives = document.querySelectorAll('a, button');
  interactives.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      ring.style.width  = '52px';
      ring.style.height = '52px';
      ring.style.borderColor = 'var(--color-accent-2)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width  = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'var(--color-accent)';
    });
  });
}
