// script.js - Regelwerk
document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // Mobiel menu
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.querySelector('.close-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
    if (closeMenu) closeMenu.addEventListener('click', () => mobileMenu.classList.remove('open'));
  }

  // Accordion FAQ
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const question = item.querySelector('.accordion-question');
    const icon = question.querySelector('.accordion-icon');
    if (icon) {
      question.addEventListener('click', () => {
        item.classList.toggle('open');
        icon.textContent = item.classList.contains('open') ? '−' : '+';
      });
    } else {
      question.addEventListener('click', () => item.classList.toggle('open'));
    }
  });

  // Contact form (simulatie)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Verzenden...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Verstuurd!';
        btn.style.background = '#3A8C6E';
        contactForm.reset();
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1000);
    });
  }
});