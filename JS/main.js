// Attendre DOM
document.addEventListener('DOMContentLoaded', () => {
  // MENU BURGER
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
  });

  // Fermer menu au clic sur lien
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      burger.classList.remove('toggle');
    });
  });

  // DARK MODE TOGGLE
  const darkToggle = document.getElementById('darkModeToggle');
  const updateToggleIcon = () => {
    darkToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  };
  updateToggleIcon();

  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    updateToggleIcon();
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
  });

  // Charger mode sombre sauvegardé
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
    updateToggleIcon();
  }

  // SCROLL REVEAL EFFECT
  const sections = document.querySelectorAll('.content-section');
  const revealSection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealSection, { threshold: 0.15 });
  sections.forEach(section => {
    observer.observe(section);
  });
});