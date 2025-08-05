// Hamburger Menu toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  mobileMenu.classList.toggle('show');
});
function showMoreInfo() {
  const info = document.getElementById("more-info");
  info.style.display = "block";
  info.scrollIntoView({ behavior: "smooth" });
}



