// Main JS file
console.log('Estudio Constructor loaded');

const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.main-header');

// Mobile Menu Toggle
if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Sticky Header Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Elements to animate
document.querySelectorAll('.premium-block, .preview-section, .sello-item, .bento-card, .testimonial-card').forEach(el => {
    el.classList.add('scroll-reveal'); // Use CSS class for initial state
    observer.observe(el);
});
