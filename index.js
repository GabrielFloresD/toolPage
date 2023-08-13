
const header = document.getElementById("header");

const navLogo = document.querySelector(".nav_logo");

const navToggle = document.getElementById("navToggle");

const navMenu = document.querySelector(".nav_ul");

document.addEventListener("scroll", ()=> {
    let winScroll = window.scrollY;
    if (winScroll == 0) {
        ulVisible();
        header.classList.remove("header-scroll");
        navLogo.classList.remove("nav_logo-scroll");
    } else if (winScroll > 0) {
        addClassScroll();
    }
});

navToggle.addEventListener("click", ()=> {
    navMenu.classList.toggle("nav_ul-visible");
    ulVisible();
});


function ulVisible() {
    if (navMenu.classList.contains("nav_ul-visible")) {
        navToggle.setAttribute("aria-label", "Close menu");
        addClassScroll();
    } else {
        navToggle.setAttribute("aria-label", "Open menu");
        navMenu.classList.remove("nav_ul-scroll");
    }
}

function addClassScroll() {
    header.classList.add("header-scroll");
    navMenu.classList.add("nav_ul-scroll");
    navLogo.classList.add("nav_logo-scroll");
}