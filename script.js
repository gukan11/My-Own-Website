// Navigation functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active section highlighting in navigation
const sections = document.querySelectorAll('.section');

function highlightActiveSection() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);
highlightActiveSection(); // Initial call

// Animate progress bars on scroll
const progressBars = document.querySelectorAll('.progress-fill');

function animateProgressBars() {
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible && !bar.classList.contains('animated')) {
            bar.style.width = `${percentage}%`;
            bar.classList.add('animated');
        }
    });
}

// Intersection Observer for progress bars
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const percentage = bar.getAttribute('data-percentage');
            bar.style.width = `${percentage}%`;
        }
    });
}, observerOptions);

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// Parallax effect for home section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const homeSection = document.querySelector('.home-section');
    if (homeSection) {
        homeSection.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Form submission handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to your backend API
    // For now, we'll show a success message
    try {
        // Replace this URL with your actual backend endpoint
        const response = await fetch('YOUR_BACKEND_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Thank you! Your message has been sent successfully.');
            contactForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        // Fallback: Show message (replace with actual API call)
        console.log('Form data:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    }
});

// Download CV button
const downloadBtn = document.getElementById('download-cv');

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Replaced 'path/to/your/cv.pdf' with the actual filename: Gukan Resume.pdf
    const cvPath = 'Gukan Resume.pdf'; 
    
    // Create a temporary link to download the file
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Gukan_M_Resume.pdf'; // This is the name the user's computer will save it as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.project-card, .skill-item, .highlight-section');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 13, 46, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.7)';
    } else {
        navbar.style.background = 'rgba(26, 13, 46, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    }
});

// Add hover glow effect to home title
const homeTitle = document.querySelector('.home-title');
if (homeTitle) {
    homeTitle.addEventListener('mouseenter', () => {
        homeTitle.style.textShadow = '0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(0, 212, 255, 0.5)';
    });
    
    homeTitle.addEventListener('mouseleave', () => {
        homeTitle.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.3)';
    });
}