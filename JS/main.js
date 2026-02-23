// DARK MODE
const darkToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    darkToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// BURGER MENU (Simple alert pour test)
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    // Ajoute du CSS pour .nav-links.active si tu veux un menu mobile coulissant
});

// APPARITION AU SCROLL
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});
      
