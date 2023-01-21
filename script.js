const mobileMenu = document.getElementById("mobile-menu");
const hamburgerButton = document.getElementById("hamburger-btn");
hamburgerButton.addEventListener("click", showMobileMenu);
function showMobileMenu() {
  mobileMenu.style.display = "block";
}
const mobileX = document.getElementById("times");
mobileX.addEventListener("click", closemenu);
function closemenu() {
  mobileMenu.style.display = "none";
}
