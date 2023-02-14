//Preload no transitions
document.body.classList.remove("preload");

const header = document.getElementsByTagName("header")[0];

// trigger this function every time the user scrolls
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
  },
  breakpoints: {
    300: {
      slidesPerView: 1.5,
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
