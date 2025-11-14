document.addEventListener("DOMContentLoaded", () => {

 // Modo escuro sem localStorage
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

const toggleBtn = document.createElement('button');
toggleBtn.innerHTML = '🌙☀️';
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '20px';
toggleBtn.style.right = '20px';
toggleBtn.addEventListener('click', toggleDarkMode);
document.body.appendChild(toggleBtn);

  // Ativar link ativo ao rolar
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Iniciar animações AOS
  AOS.init({
    duration: 1000,
    once: true
  });

});
