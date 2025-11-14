/**
 * FOTOGRAFO GROTTAGLIE - MAIN.JS
 * Lightweight JavaScript for interactions
 */

// ====================================
// MOBILE NAVIGATION TOGGLE
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
});

// ====================================
// STICKY NAVBAR
// ====================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});

// ====================================
// PORTFOLIO FILTER
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'all') {
                        item.classList.remove('hidden');
                        // Fade in animation
                        item.style.animation = 'fadeInUp 0.5s ease';
                    } else {
                        const category = item.getAttribute('data-category');
                        if (category === filterValue) {
                            item.classList.remove('hidden');
                            item.style.animation = 'fadeInUp 0.5s ease';
                        } else {
                            item.classList.add('hidden');
                        }
                    }
                });
            });
        });
    }
});

// ====================================
// LIGHTBOX FUNCTIONALITY
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const viewButtons = document.querySelectorAll('.gallery-view-btn');

    let currentImageIndex = 0;
    let images = [];

    // Collect all images
    viewButtons.forEach((btn, index) => {
        images.push({
            src: btn.getAttribute('data-image'),
            title: btn.getAttribute('data-title'),
            desc: btn.getAttribute('data-desc')
        });

        btn.addEventListener('click', function(e) {
            e.preventDefault();
            currentImageIndex = index;
            openLightbox();
        });
    });

    function openLightbox() {
        if (lightbox && images.length > 0) {
            const image = images[currentImageIndex];
            lightboxImage.src = image.src;
            lightboxImage.alt = image.title;
            lightboxTitle.textContent = image.title;
            lightboxDesc.textContent = image.desc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        openLightbox();
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        openLightbox();
    }

    // Event listeners
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }

    // Close on background click
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });
});

// ====================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') {
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ====================================
// FORM VALIDATION & ENHANCEMENT
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form[name="contact"]');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Basic validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const message = document.getElementById('message');
            const privacy = document.querySelector('input[name="privacy"]');

            let isValid = true;
            let errorMessage = '';

            if (!name || name.value.trim() === '') {
                isValid = false;
                errorMessage += 'Il nome è obbligatorio.\n';
            }

            if (!email || !isValidEmail(email.value)) {
                isValid = false;
                errorMessage += 'Inserisci un\'email valida.\n';
            }

            if (!phone || phone.value.trim() === '') {
                isValid = false;
                errorMessage += 'Il telefono è obbligatorio.\n';
            }

            if (!message || message.value.trim() === '') {
                isValid = false;
                errorMessage += 'Il messaggio è obbligatorio.\n';
            }

            if (!privacy || !privacy.checked) {
                isValid = false;
                errorMessage += 'Devi accettare la privacy policy.\n';
            }

            if (!isValid) {
                e.preventDefault();
                alert(errorMessage);
            }
        });
    }

    // Email validation helper
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

// ====================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .testimonial-card, .mission-card, .why-choose-item, .faq-item');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
});

// ====================================
// LAZY LOADING ENHANCEMENT
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src; // Trigger loading
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
});

// ====================================
// PERFORMANCE: Preload critical resources
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    // Preload hero image if on homepage
    const hero = document.querySelector('.hero');
    if (hero) {
        const bgImage = window.getComputedStyle(hero).backgroundImage;
        if (bgImage && bgImage !== 'none') {
            const imageUrl = bgImage.slice(5, -2); // Extract URL from url("...")
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = imageUrl;
            document.head.appendChild(link);
        }
    }
});

// ====================================
// NETLIFY FORMS: Success Message
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the thank you page (after form submission)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        alert('Grazie per averci contattato! Ti risponderemo entro 24 ore.');
    }
});

console.log('Fotografo Grottaglie - Website loaded successfully');
