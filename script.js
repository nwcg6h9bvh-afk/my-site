const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const modalToggleButtons = document.querySelectorAll('.modal-toggle');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');

navToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});

modalToggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('active')) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
});

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
  });
});
