// MENU BURGER
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// DARK MODE TOGGLE
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// SCROLL REVEAL EFFECT
const sections = document.querySelectorAll('.content-section');

const revealSection = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(revealSection, { threshold: 0.15 });

sections.forEach(section => {
  section.classList.add('hidden'); // initial hidden
  observer.observe(section);
});
