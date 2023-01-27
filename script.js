//mobile hamburger menu
const hamburgerIcon = document.getElementById("hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const lineOne = document.querySelector(".line-one");
console.log(lineOne);
const lineTwo = document.querySelector(".line-two");
const lineThree = document.querySelector(".line-three");

hamburgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle("open");
    lineOne.classList.toggle("hamburger-animate");
    lineTwo.classList.toggle("hamburger-animate");
    lineThree.classList.toggle("hamburger-animate");
})