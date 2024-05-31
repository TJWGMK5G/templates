const toggler = document.querySelector(".header-toggler");
const menu = document.querySelector(".header-menu");
const menuItems = document.querySelectorAll(".header-menu__item");

toggler.addEventListener("click", () => {
  menu.classList.toggle("header-menu--open");
  toggler.classList.toggle("header-toggler--open");
});

menuItems.forEach((e) => {
  e.addEventListener("click", () => {
    menu.classList.remove("header-menu--open");
    toggler.classList.remove("header-toggler--open");
    html.classList.remove("unscroll");
  });
});

let html = document.querySelector("html");
toggler.onclick = function () {
  html.classList.toggle("unscroll");
};

// coockie;
// var coockie = document.querySelector(".coockie");
// var accept = document.querySelector(".coockie-wrap-buttons__accept");
// var cancel = document.querySelector(".coockie-wrap-buttons__cancel");

// if (coockie !== null) {
//   accept.addEventListener("click", () => {
//     coockie.classList.add("coockie__hidden");
//   });

//   cancel.addEventListener("click", () => {
//     coockie.classList.add("coockie__hidden");
//   });

// var html = document.querySelector("html");
// coockie.onclick = function () {
//   html.classList.toggle("unscroll__bg");
// };
// }

//подтверждение возраста
// const modal = document.querySelector(".head-info");
// const acceptBtn = document.querySelector(".accept");
// const closeBtn = document.querySelector(".close");

// if (modal) {
//   acceptBtn.addEventListener("click", function () {
//     modal.classList.add("hidden");
//   });
// }
