// Import the ScrollReveal library

// Create a ScrollReveal instance
const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});

// Reveal elements with the class "col"
sr.reveal(".qq", {
  delay: 200,
  origin: "top",
});

// Grab nav element from the dom
const nav = document.querySelector(".mainHeader");

// Creating variales
let scroll_position = 300;
let scroll_direction;

// Show Navbar when dom loads
nav.classList.add("active__menu");

// Create an scroll event listener
window.addEventListener("scroll", () => {
  scroll_direction =
    document.body.getBoundingClientRect().top > scroll_position ? "up" : "down";
  scroll_position = document.body.getBoundingClientRect().top;

  if (scroll_direction === "up") {
    // If you are scrolling up, then add active menu class
    nav.classList.add("active__menu");
  } else {
    // If you Scrolling down, remove the active menu class
    nav.classList.remove("active__menu");
  }
});






let button = document.getElementById("navButton");

//const menu1 = document.getElementsByClassName("MainNav")[0];

button.addEventListener("click", function (e) {
  e.preventDefault(); //prevent default click

  //get header and toggle navigation
  const header = document.getElementsByClassName("mainHeader")[0];
  header.classList.toggle("navigationActive");



});

/*
Prevents animations and traansitions from firing when browser resized
https://css-tricks.com/stop-animations-during-window-resizing/
*/
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
