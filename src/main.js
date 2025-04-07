// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
});

// Animation frame
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Feature Card Animations
const featureCards = document.querySelectorAll('.feature-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

featureCards.forEach(card => {
    observer.observe(card);
});

// Mobile Menu Toggle
const mobileMenuButton = document.querySelector('button.md\\:hidden');
const mobileMenu = document.querySelector('.hidden.md\\:flex');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Add scroll-based animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate stats on scroll
    const stats = document.querySelectorAll('.stat-card');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'float 3s ease-in-out infinite';
            }
        });
    }, {
        threshold: 0.5
    });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Add gradient animation to hero section
    const heroSection = document.querySelector('section.min-h-screen');
    if (heroSection) {
        heroSection.classList.add('hero-gradient');
    }
}); 