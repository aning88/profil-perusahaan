// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navUl.classList.remove('active'); // Close mobile menu after click
  });
});

// Animated Counter
function animateValue(id, target, duration) {
  let current = 0;
  const element = document.getElementById(id);
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    current += increment;
    element.textContent = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, 16);
}

// Trigger counter when section is in view
window.addEventListener('scroll', () => {
  const aboutSection = document.querySelector('.about');
  const rect = aboutSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    animateValue('client-count', 100, 2000);
    animateValue('project-count', 50, 2000);
    window.removeEventListener('scroll', this); // Stop after triggering
  }
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  if (!email.includes('@')) {
    alert('Please enter a valid email address!');
    return;
  }
  alert('Message sent successfully!');
  this.reset();
});