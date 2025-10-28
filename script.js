// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    // Section transition function
    function switchSection(targetSection) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        const activeSection = document.getElementById(targetSection);
        activeSection.classList.add('active');
    }
    
    // Navigation button clicks
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            switchSection(targetSection);
            
            // Add slight distortion effect on navigation
            document.body.style.filter = 'hue-rotate(5deg) contrast(1.1)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 300);
        });
    });
    
    // Add hover distortion effect to interactive elements
    const interactiveElements = document.querySelectorAll('.nav-btn, .contact-link');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.filter = 'hue-rotate(2deg) contrast(1.05)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.filter = 'none';
        });
    });
    
    // Random subtle flicker enhancement
    setInterval(() => {
        if (Math.random() > 0.7) {
            document.body.style.opacity = '0.99';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 50);
        }
    }, 3000);
});
