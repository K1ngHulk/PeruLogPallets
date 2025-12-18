// Function to handle WhatsApp click
function openWhatsApp() {
    // Replace with the actual phone number
    const phoneNumber = "51999999999"; 
    const message = encodeURIComponent("Hola, estoy interesado en conocer más sobre sus servicios de pallets.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open in new tab
    window.open(url, '_blank');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple Console log to confirm init
console.log("PeruLog Landing Page Loaded");

// Navbar Scroll Effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Handle Contact Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get values (for demonstration)
        const name = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        
        // Simulate API call
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert(`¡Gracias ${name}! Hemos recibido tu solicitud. Te contactaremos pronto al correo ${email}.`);
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}
