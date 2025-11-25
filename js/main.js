function initHeroVideo() {
  const video = document.querySelector('.hero-video');
  if (!video) return;

  const fallback = document.querySelector('.hero-fallback') || null;
  let fallbackTimeoutId = null;

  function showFallback() {
    if (fallback) fallback.classList.add('hero-fallback--visible');
    video.classList.add('hero-video--hidden');
  }

  function hideFallback() {
    if (fallback) fallback.classList.remove('hero-fallback--visible');
    video.classList.remove('hero-video--hidden');
  }

  function safePlay() {
    try {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise
          .then(function () {
            hideFallback();
          })
          .catch(function () {
            showFallback();
          });
      } else {
        hideFallback();
      }
    } catch (e) {
      showFallback();
    }
  }

  function onLoadedData() {
    if (fallbackTimeoutId) {
      clearTimeout(fallbackTimeoutId);
      fallbackTimeoutId = null;
    }
    safePlay();
  }

  function onError() {
    if (fallbackTimeoutId) {
      clearTimeout(fallbackTimeoutId);
      fallbackTimeoutId = null;
    }
    showFallback();
  }

  function onEnded() {
    video.currentTime = 0;
    safePlay();
  }

  if (fallback) {
    fallbackTimeoutId = window.setTimeout(function () {
      showFallback();
    }, 3000);
  }

  video.addEventListener('loadeddata', onLoadedData);
  video.addEventListener('error', onError);
  video.addEventListener('ended', onEnded);

  safePlay();
}

document.addEventListener('DOMContentLoaded', () => {
    initHeroVideo();

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

window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    initHeroVideo();
  }
});
