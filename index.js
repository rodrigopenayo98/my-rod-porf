const hamburg = document.getElementById('hamburg');
const xSection = document.querySelector('.x-section');
const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelectorAll('.items-menu-toggle');

function toggleMenu() {
  menuToggle.classList.toggle('show');
}

xSection.addEventListener('click', toggleMenu);
hamburg.addEventListener('click', toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});
