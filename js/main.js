document.addEventListener('DOMContentLoaded', () => {
    
    // 1. GESTION DU MODE SOMBRE
    const darkToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    if (darkToggle) {
        darkToggle.addEventListener('click', () => {
            body.classList.toggle('dark');
            // Change l'icône selon le mode
            darkToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
            
            // Optionnel: Sauvegarder la préférence de l'utilisateur
            const isDark = body.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // 2. MENU BURGER MOBILE
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animation du burger (optionnel : transforme les barres en X)
            burgerMenu.classList.toggle('toggle');
        });

        // Fermer le menu si on clique sur un lien (très important pour mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 3. ANIMATION D'APPARITION (SCROLL REVEAL)
    // On utilise IntersectionObserver pour un rendu High-Tech fluide
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Une fois visible, on arrête d'observer cet élément
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // On applique l'animation aux cartes et aux titres de section
    const animatedElements = document.querySelectorAll('.card, .content-section h2');
    
    animatedElements.forEach(el => {
        el.classList.add('reveal-init'); // État de départ (caché)
        observer.observe(el);
    });
});
            
