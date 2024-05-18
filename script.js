// burger - menu;
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
  });
});

let html = document.querySelector("html");
document.querySelector(".header-toggler").onclick = function () {
  html.classList.toggle("unscroll");
};

// coockie
const coockie = document.querySelector(".coockie");
const accept = document.querySelector(".coockie-wrap-buttons__accept");
const cancel = document.querySelector(".coockie-wrap-buttons__cancel");

accept.addEventListener("click", () => {
  coockie.classList.add("coockie__hidden");
});

cancel.addEventListener("click", () => {
  coockie.classList.add("coockie__hidden");
});
