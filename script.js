// Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
  document.getElementById('navbar').classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 70, // Adjust for fixed nav height
      behavior: 'smooth'
    });
    // Close mobile menu after clicking
    if (document.getElementById('navbar').classList.contains('active')) {
      document.getElementById('navbar').classList.remove('active');
    }
  });
});

// Contact form submission (demo)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! We will get back to you soon.');
  this.reset();
});

