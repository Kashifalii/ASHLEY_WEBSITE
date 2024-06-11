// onload event
let effect = document.getElementById('onload-effect');

window.addEventListener('pageshow', () => {
    effect.classList.add("active");
    setTimeout(() => {
        effect.classList.remove("active");
        effect.style.opacity = 0;
        effect.style.transition = "all ease .5s";
    }, 3000)


});
// ============

let button = document.querySelector(".nav-btn");
let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");
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
    };
});

// news card hover effects

// let cardOne = document.getElementById("one");
// let topEff = document.getElementById("one-top");
// let bottomEff = document.getElementById("one-bottom");
// let leftEff = document.getElementById("one-left");
// let rightEff = document.getElementById("one-right");

// cardOne.addEventListener("mouseover", () => {
//     topEff.style.width = "100%";
//     if (topEff.style.width = "100%") {
//         rightEff.style.height = "100%";
//     }
//     if (rightEff.style.height = "100%") {
//         bottomEff.style.width = "100%";
//     }
//     if (bottomEff.style.width = "100%") {
//         leftEff.style.height = "100%";
//     }
// });

// cardOne.addEventListener("mouseleave", () => {
//     topEff.style.width = "0%";
//     rightEff.style.height = "0%";
//     bottomEff.style.width = "0%";
//     leftEff.style.height = "0%";

// });



