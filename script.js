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

// let html = document.querySelector("html");
// document.querySelector(".header-toggler").onclick = function () {
//   html.classList.toggle("unscroll");
// };

const btnModal = document.querySelector(".modal__btn");
const modal = document.querySelector(".modal ");

if (modal !== null) {
  btnModal.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
}

// help user
let openChat = document.querySelector(".help-picture");
let closeChat = document.querySelector(".help-text__title-close");
let blockContent = document.querySelector(".help-text");

if (blockContent !== null) {
  openChat.addEventListener("click", function () {
    blockContent.classList.toggle("visible-block");
  });

  closeChat.addEventListener("click", function () {
    blockContent.classList.remove("visible-block");
    blockContent.classList.remove("hidden-block");
  });

  setTimeout(() => {
    openChat.classList.add("visible-block");
  }, 2000);
}
