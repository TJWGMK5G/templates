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

// coockie;
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

// var html = document.querySelector("html");
// coockie.onclick = function () {
//   html.classList.toggle("unscroll__bg");
// };

// DATE TIMER
const dataCard = document.querySelector(".correct_data");
const dataCard2 = document.querySelector(".correct_data2");
const dataCard3 = document.querySelector(".correct_data3");
const dataCard4 = document.querySelector(".correct_data4");
const dataCard5 = document.querySelector(".correct_data5");
const dataCard6 = document.querySelector(".correct_data6");
const dataCard7 = document.querySelector(".correct_data7");
const dataCard8 = document.querySelector(".correct_data8");
const dataCard9 = document.querySelector(".correct_data9");

if (dataCard !== null || dataCard4 !== null) {
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
      let dataTomorow5 = new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 * 5
      );
      let dataTomorow6 = new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 * 6
      );
      let dataTomorow7 = new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 * 7
      );
      let dataTomorow8 = new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 * 8
      );
      let dataTomorow9 = new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 * 9
      );

      if (dataCard) {
        dataCard.innerHTML = createDate(dataTomorow);
      }
      if (dataCard2) {
        dataCard2.innerHTML = createDate(dataTomorow2);
      }
      if (dataCard3) {
        dataCard3.innerHTML = createDate(dataTomorow3);
      }
      if (dataCard4) {
        dataCard4.innerHTML = createDate(dataTomorow4);
      }
      if (dataCard5) {
        dataCard5.innerHTML = createDate(dataTomorow5);
      }
      if (dataCard6) {
        dataCard6.innerHTML = createDate(dataTomorow6);
      }
      if (dataCard7) {
        dataCard7.innerHTML = createDate(dataTomorow7);
      }
      if (dataCard8) {
        dataCard8.innerHTML = createDate(dataTomorow8);
      }
      if (dataCard9) {
        dataCard9.innerHTML = createDate(dataTomorow9);
      }
    },
    false
  );
  function createDate(item) {
    return new Date(item).toLocaleDateString();
  }
}

// Modal
const btnModal = document.querySelector(".modal__btn");
const modal = document.querySelector(".modal ");

if (modal !== null) {
  btnModal.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
}
