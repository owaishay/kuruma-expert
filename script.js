// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        if (mobileMenu.style.display === 'none' || !mobileMenu.style.display) {
            mobileMenu.style.display = 'block';
        } else {
            mobileMenu.style.display = 'none';
        }
    });

    // Close menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
        });
    });
}

// Footer Toggle Sections - Mobile
const footerToggles = document.querySelectorAll('.footer-toggle');

footerToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        
        if (section) {
            section.classList.toggle('show');
            this.classList.toggle('collapsed');
        }
    });
});

// Initialize footer menus as visible on desktop
if (window.innerWidth >= 768) {
    const menus = document.querySelectorAll('.footer-menu, .footer-contact');
    menus.forEach(menu => {
        menu.classList.add('show');
    });
}

// Handle window resize for footer
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        const menus = document.querySelectorAll('.footer-menu, .footer-contact');
        menus.forEach(menu => {
            menu.classList.add('show');
        });
        
        const toggles = document.querySelectorAll('.footer-toggle');
        toggles.forEach(toggle => {
            toggle.classList.remove('collapsed');
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
