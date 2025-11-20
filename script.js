let button = document.querySelector(".nav-btn");
let navbar = document.getElementById("navbar");
let navSlide = document.getElementById("nav-slide");
let List = document.getElementById("list");

// Changing navbar background color on scroll.
let scrolling = 10;

window.addEventListener("scroll", () => {
  if (scrolling < scrollY) {
    navbar.style.opacity = "0";
    navbar.style.visibility = "hidden";
  } else if (scrolling > scrollY) {
    navbar.style.opacity = "1";
    navbar.style.visibility = "visible";
  }
});

// Navbar opening and closing.

button.addEventListener("click", () => {
  button.classList.toggle("active");
  if (button.classList.contains("active")) {
    navbar.style.backgroundColor = "#111111";
    navSlide.style.opacity = "1";
    navSlide.style.visibility = "visible";
    List.style.paddingLeft = "50px";
  } else {
    navbar.style.backgroundColor = "transparent";
    navSlide.style.opacity = "0";
    navSlide.style.visibility = "hidden";
    List.style.paddingLeft = "0px";
  }
});
