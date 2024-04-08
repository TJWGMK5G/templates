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

// cards-menu
// if(document.querySelector('.main-goods-wrapper')) {
//   const goodItems = document.querySelectorAll('.main-goods-wrapper-item')
//   const goodBtn = document.querySelector('.main-goods__more')
//   let goodIsOpen = false;
//   console.log(goodItems.length)
//   for(let y = 3; y < goodItems.length; y++) {
//     goodItems[y].style.display = 'none'
//   }

//   goodBtn.addEventListener('click', () => {

//     goodIsOpen = !goodIsOpen
//     goodItems.forEach((e) => {
//       if(!goodIsOpen) {
//         for(let y = 3; y < goodItems.length; y++) {
//           goodItems[y].style.display = 'none'
//           goodBtn.innerHTML = 'Mais sugestões'
//         }
//       } else {
//         e.style.display = 'block'
//         goodBtn.innerHTML = 'Esconder'
//       }
//     })
//   })
// }

// accord-menu
// const questionsWrapper = document.querySelector(".main-questions-wrapper");
// if (questionsWrapper) {
//   const questItems = document.querySelectorAll(".main-questions-wrapper-item");
//   questItems.forEach((e) => {
//     e.addEventListener("click", () => {
//       e.classList.toggle("main-questions-wrapper-item--open");
//     });
//   });
// }
