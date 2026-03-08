// js/nav.js — Navigation: scroll shrink + mobile burger

const nav     = document.getElementById('nav');
const burger  = document.getElementById('navBurger');
const navMenu = document.getElementById('navLinks');

// Scroll-based nav background
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 40);
});

// Burger toggle
burger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  burger.classList.toggle('is-open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
  // Prevent body scroll when menu open
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close menu on nav link click (mobile)
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Hero parallax on bg text
const heroBg = document.querySelector('.hero__bg-text');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBg.style.transform = `translate(-50%, calc(-50% + ${y * 0.28}px))`;
  }, { passive: true });
}
