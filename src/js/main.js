//Preload no transitions
document.body.classList.remove("preload");

//Navbar
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
});

const sidebar = document.querySelector("aside");
const noScroll = document.querySelector("body");
const headerFill = document.querySelector("header");

function openSidebar() {
  sidebar.classList.toggle("aside-active");
  noScroll.classList.toggle("no-scroll");
  header.classList.toggle("header-active");
}

hamburger.addEventListener("click", openSidebar);

//Language switcher
const langSwitcher = document.querySelectorAll(".lang");
const langMain = document.querySelector(".main-lang");
const langMainM = document.querySelector(".navbar-mobile .lang");

function langSwitchFn() {
  langSwitcher.forEach((el) => {
    el.addEventListener(
      "click",
      () => {
        el.classList.toggle("active");
        el.classList.toggle("lang-not");
      },
      true
    );
  });
}

langSwitchFn();

// trigger this function every time the user scrolls
const header = document.getElementsByTagName("header")[0];

window.onscroll = function (event) {
  var scroll = window.pageYOffset;
  if (scroll < 200) {
    header.style.background = "rgba(9, 24, 41, 0.9)";
    header.style.boxShadow = "none";
  } else if (scroll >= 200 && scroll < 600) {
    header.style.background = "rgba(9, 24, 41)";
    header.style.boxShadow = "0px 4px 8px 2px rgba(9,24,41,0.4)";
  }
};

//Sliders
const swiper = new Swiper(".main-hero .mySwiper", {
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".slider-wine .mySwiper", {
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 1.1,
    },
    700: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});
