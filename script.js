document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Handle Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get user name for the alert
            const firstName = document.getElementById('first-name').value;
            
            // Show success message
            alert(`Yo Muemi! ${firstName} just sent you a message. Check your email!`);
            
            // Clear form
            this.reset();
        });
    }

    // 2. Smooth Scrolling for Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});