(function() {
    'use strict';
    
    var particleCount = 30;
    var particlesCreated = false;
    
    function createParticles() {
        if (particlesCreated) return;
        particlesCreated = true;
        
        var particlesContainer = document.querySelector('.particles');
        if (!particlesContainer) return;
        
        var fragment = document.createDocumentFragment();
        
        for (var i = 0; i < particleCount; i++) {
            var particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particle.style.width = (Math.random() * 4 + 2) + 'px';
            particle.style.height = particle.style.width;
            particle.style.opacity = Math.random() * 0.5 + 0.3;
            fragment.appendChild(particle);
        }
        
        particlesContainer.appendChild(fragment);
    }
    
    function initSmoothScroll() {
        var navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                var href = this.getAttribute('href');
                
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    
                    if (href === '#') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        var targetId = href.substring(1);
                        var targetElement = document.getElementById(targetId);
                        
                        if (targetElement) {
                            var navHeight = 80;
                            var targetPosition = targetElement.offsetTop - navHeight;
                            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                        }
                    }
                    
                    navLinks.forEach(function(navLink) {
                        navLink.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
    }
    
    function initMobileMenu() {
        var menuToggle = document.querySelector('.menu-toggle');
        var navbarMenu = document.querySelector('.navbar-menu');
        var navLinks = document.querySelectorAll('.nav-link');
        
        if (!menuToggle || !navbarMenu) return;
        
        menuToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
            var icon = this.querySelector('i');
            if (icon) {
                if (navbarMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navbarMenu.classList.remove('active');
                var icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
    
    function initNavbarScroll() {
        var navbar = document.getElementById('navbar');
        if (!navbar) return;
        
        var lastScrollTop = 0;
        var scrollThreshold = 50;
        
        window.addEventListener('scroll', function() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > scrollThreshold) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScrollTop = scrollTop;
        }, { passive: true });
    }
    
    function initScrollAnimations() {
        var observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        var animatedElements = document.querySelectorAll('.card, .feature-card, .section-title');
        animatedElements.forEach(function(el) {
            el.classList.add('animate-ready');
            observer.observe(el);
        });
    }
    
    function initActiveNavLink() {
        var sections = document.querySelectorAll('section[id]');
        var navLinks = document.querySelectorAll('.nav-link');
        
        if (sections.length === 0 || navLinks.length === 0) return;
        
        window.addEventListener('scroll', function() {
            var scrollPosition = window.scrollY + 100;
            
            sections.forEach(function(section) {
                var sectionTop = section.offsetTop;
                var sectionHeight = section.offsetHeight;
                var sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(function(link) {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { passive: true });
    }
    
    function initLazyLoad() {
        var lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            var imageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                        }
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(function(img) {
                imageObserver.observe(img);
            });
        }
    }
    
    function initParallaxEffect() {
        var hero = document.querySelector('.hero');
        if (!hero) return;
        
        window.addEventListener('scroll', function() {
            var scrolled = window.pageYOffset;
            var rate = scrolled * 0.3;
            
            if (scrolled < window.innerHeight) {
                hero.style.transform = 'translateY(' + rate + 'px)';
            }
        }, { passive: true });
    }
    
    function initCardHoverEffects() {
        var cards = document.querySelectorAll('.card, .feature-card');
        
        cards.forEach(function(card) {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
    
    function initBackToTop() {
        var backToTopBtn = document.createElement('button');
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.setAttribute('aria-label', '返回顶部');
        document.body.appendChild(backToTopBtn);
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }, { passive: true });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    function init() {
        createParticles();
        initSmoothScroll();
        initMobileMenu();
        initNavbarScroll();
        initScrollAnimations();
        initActiveNavLink();
        initLazyLoad();
        initParallaxEffect();
        initCardHoverEffects();
        initBackToTop();
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
