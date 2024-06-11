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

// const btnModal = document.querySelector(".SBGpbCiEXANAIWd");
// const modal = document.querySelector(".bmIsSJcxygEmByk ");

// if (modal !== null) {
//   btnModal.addEventListener("click", function () {
//     modal.classList.add("hidden");
//   });
// }
