// burger - menu;
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

var html = document.querySelector("html");
toggler.onclick = function () {
  html.classList.toggle("unscroll");
};

// coockie
var coockie = document.querySelector(".coockie");
var accept = document.querySelector(".coockie-wrap-buttons__accept");
var cancel = document.querySelector(".coockie-wrap-buttons__cancel");

if (coockie !== null) {
  accept.addEventListener("click", () => {
    coockie.classList.add("coockie__hidden");
  });

  cancel.addEventListener("click", () => {
    coockie.classList.add("coockie__hidden");
  });
}
