document.addEventListener('DOMContentLoaded', () => {
    // Prefers Reduced Motion: Pause Hero Video if user has motion preference
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        heroVideo.removeAttribute('autoplay');
        heroVideo.pause();
    }
    
    // Header Scroll Effect
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    
    if (menuBtn && nav) {
        const openMenu = () => {
            nav.classList.add('active');
            menuBtn.setAttribute('aria-expanded', 'true');
            const spans = menuBtn.querySelectorAll('span');
            spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        };
        
        const closeMenu = () => {
            nav.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
            const spans = menuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        };
        
        menuBtn.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        
        // Close menu on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('active')) {
                closeMenu();
            }
        });
        
        // Close menu when nav link is clicked
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('active')) {
                    closeMenu();
                }
            });
        });
        
        // Initialize aria-expanded attribute
        menuBtn.setAttribute('aria-expanded', 'false');
    }

    // Fade In Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    if (menuBtn) {
                        menuBtn.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        });
    });
    
    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = contactForm.querySelector('button[type="submit"]');
            const formStatus = document.querySelector('.form-status');
            const originalText = btn.innerText;
            
            btn.innerText = 'Envoi en cours...';
            btn.disabled = true;
            
            // Clear any existing message
            if (formStatus) {
                formStatus.innerText = '';
            }
            
            setTimeout(() => {
                if (formStatus) {
                    formStatus.innerText = 'Merci ! Votre demande a bien été envoyée. Nous vous recontacterons sous 24h.';
                }
                contactForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
});
