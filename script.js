document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section:not(#hero)');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => observer.observe(section));

    // Smooth scroll via JS for nav links (in addition to CSS)
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetID = link.getAttribute('href');
            const targetEl = document.querySelector(targetID);
            if(targetEl) {
                window.scrollTo({
                    top: targetEl.offsetTop - 70, // Adjust offset for sticky nav
                    behavior: 'smooth'
                });
            }
        });
    });
});
