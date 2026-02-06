// --- Navbar scroll effect ---
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// --- Mobile menu toggle ---
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');

mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileToggle.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileToggle.classList.remove('active');
  });
});

// --- Scroll animations ---
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add fade-in class to elements that should animate
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll(
    '.service-card, .package-card, .about-card, .highlight, .section-header, .contact-content, .contact-form'
  );

  animateElements.forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${index % 4 * 0.1}s`;
    observer.observe(el);
  });
});

// --- Contact form handling ---
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  // Show success message
  contactForm.innerHTML = `
    <div style="text-align: center; padding: 40px 0;">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8a45e" stroke-width="2" style="margin: 0 auto 16px;">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <path d="m9 11 3 3L22 4"/>
      </svg>
      <h3 style="margin-bottom: 8px; color: #0f2640;">Message sent!</h3>
      <p style="color: #5a6578;">Thank you for reaching out. We'll be in touch within 24 hours.</p>
    </div>
  `;
});

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = navbar.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
