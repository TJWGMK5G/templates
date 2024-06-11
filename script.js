// // burger - menu;
var toggler = document.querySelector(".header-toggler");
var menu = document.querySelector(".header-menu");
var menuItems = document.querySelectorAll(".header-menu__item");

toggler.addEventListener("click", () => {
  menu.classList.toggle("header-menu--open");
  toggler.classList.toggle("header-toggler--open");
});

menuItems.forEach((e) => {
  e.addEventListener("click", () => {
    menu.classList.remove("header-menu--open");
    toggler.classList.remove("header-toggler--open");
  });
});

// // var html = document.querySelector("html");
// // toggler.onclick = function () {
// //   html.classList.toggle("unscroll");
// // };

// // coockie;
// var coockie = document.querySelector(".coockie");
// var accept = document.querySelector(".coockie-wrap-buttons__accept");
// var cancel = document.querySelector(".coockie-wrap-buttons__cancel");

// if (coockie !== null) {
//   accept.addEventListener("click", () => {
//     coockie.style.display = "none";
//   });

//   cancel.addEventListener("click", () => {
//     coockie.style.display = "none";
//   });
// }

// // var html = document.querySelector("html");
// // coockie.onclick = function () {
// //   html.classList.toggle("unscroll__bg");
// // };

// // 18+ disclaimer
// const btnModal = document.querySelector(".SBGpbCiEXANAIWd");
// const modal = document.querySelector(".bmIsSJcxygEmByk ");

// if (modal !== null) {
//   btnModal.addEventListener("click", function () {
//     modal.classList.add("hidden");
//   });
// }

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  autoplay: {
    delay: 3000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next__custom",
    prevEl: ".swiper-button-prev__custom",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// 18+ disclaimer
const btnModal = document.querySelector(".SBGpbCiEXANAIWd");
const modal = document.querySelector(".bmIsSJcxygEmByk ");

if (modal !== null) {
  btnModal.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
}
