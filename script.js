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

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: ".swiper-button-next__custom",
    prevEl: ".swiper-button-prev__custom",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const btnModal = document.querySelector(".SBGpbCiEXANAIWd");
const modal = document.querySelector(".bmIsSJcxygEmByk ");

if (modal !== null) {
  btnModal.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
}
