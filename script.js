//mobile hamburger menu
const hamburgerIcon = document.getElementById("hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle("open");
    console.log(mobileMenu)
})