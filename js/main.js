document.addEventListener('DOMContentLoaded', () => {
    
    // --- MODE SOMBRE ---
    const darkToggle = document.getElementById('darkModeToggle');
    darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        darkToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });

    // --- MENU MOBILE ---
    const burger = document.getElementById('burgerMenu');
    const nav = document.getElementById('navLinks');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Fermer le menu au clic sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // --- ANIMATION D'APPARITION ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
