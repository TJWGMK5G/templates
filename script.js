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

const btnModal = document.querySelector(".modal__btn");
const modal = document.querySelector(".modal ");

if (modal !== null) {
  btnModal.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
}

// coockie;
var coockie = document.querySelector(".coockie");
var accept = document.querySelector(".coockie-wrap-buttons__accept");
var cancel = document.querySelector(".coockie-wrap-buttons__cancel");

if (coockie !== null) {
  accept.addEventListener("click", () => {
    coockie.style.display = "none";
  });

  cancel.addEventListener("click", () => {
    coockie.style.display = "none";
  });
}
