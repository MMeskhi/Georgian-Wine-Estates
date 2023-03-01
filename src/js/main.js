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
const langMainM = document.querySelector(".aside-cont .main-lang");

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

//Click outside of lang switcher to close
document.addEventListener("click", (e) => {
  if (!langMain.contains(e.target)) {
    langMain.classList.remove("active");
    langMain.classList.add("lang-not");
  }
  if (!langMainM.contains(e.target)) {
    langMainM.classList.remove("active");
    langMainM.classList.add("lang-not");
  }
});

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

//Hero slider text animation
if (document.getElementById("mainPage")) {
  const textWrapper = document.querySelector(".ml3");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 60,
    delay: (el, i) => 60 * (i + 1),
  });
}

//Sliders
if (document.getElementById("mainPage")) {
  const swiper = new Swiper(".main-hero .mySwiper", {
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    speed: 600,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

if (document.querySelectorAll("mainPage, slider")) {
  const swiper2 = new Swiper(".slider-wine .mySwiper", {
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 300,
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
}

if (document.getElementById("slider")) {
  const swiper3 = new Swiper(".product-main-slider .mySwiper", {
    spaceBetween: 16,
    speed: 300,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
