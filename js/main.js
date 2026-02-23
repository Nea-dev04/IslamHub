// Sécurité : Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    
    const darkToggle = document.getElementById('darkModeToggle');
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');

    // Mode Sombre
    darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        darkToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });

    // Menu Mobile Simple
    burgerMenu.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        // Petit style rapide pour le menu mobile
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--bg)';
        navLinks.style.padding = '20px';
    });

    // Animation au scroll
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
