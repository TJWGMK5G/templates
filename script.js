const toggler = document.querySelector(".header-toggler");
const menu = document.querySelector(".header-menu");
const menuItems = document.querySelectorAll(".header-menu__item");
const menuActive = document.querySelector(".dKJTFCSEWAbuQZw");
const navHide = document.querySelector(".znIXvBGdDKjSZmt");

toggler.addEventListener("click", () => {
  menuActive.classList.toggle("visible-block");
  navHide.classList.toggle("hidden-block");
  // toggler.classList.toggle("header-toggler--open");
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
// let openChat = document.querySelector(".help-picture");
// let closeChat = document.querySelector(".help-text__title-close");
// let blockContent = document.querySelector(".help-text");

// if (blockContent !== null) {
//   openChat.addEventListener("click", function () {
//     blockContent.classList.toggle("visible-block");
//   });

//   closeChat.addEventListener("click", function () {
//     blockContent.classList.remove("visible-block");
//     blockContent.classList.remove("hidden-block");
//   });

//   setTimeout(() => {
//     openChat.classList.add("visible-block");
//   }, 2000);
// }

// DATE TIMER
const dataCard = document.querySelector(".correct_data");
const dataCard2 = document.querySelector(".correct_data2");
const dataCard3 = document.querySelector(".correct_data3");
const dataCard4 = document.querySelector(".correct_data4");

if (dataCard !== null) {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      let dataTomorow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      let dataTomorow2 = new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 * 2
      );
      let dataTomorow3 = new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 * 3
      );
      let dataTomorow4 = new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 * 4
      );

      if (dataCard4 !== null) {
        dataCard4.innerHTML = createDate(dataTomorow4);
      }
      dataCard.innerHTML = createDate(dataTomorow);
      dataCard2.innerHTML = createDate(dataTomorow2);
      dataCard3.innerHTML = createDate(dataTomorow3);
    },
    false
  );
  function createDate(item) {
    return new Date(item).toLocaleDateString();
  }
}
