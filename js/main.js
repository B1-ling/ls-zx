(function() {
    'use strict';
    
    var particleCount = 25;
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
            particle.style.width = (Math.random() * 3 + 2) + 'px';
            particle.style.height = particle.style.width;
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
    
    function init() {
        createParticles();
        initSmoothScroll();
        initMobileMenu();
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
