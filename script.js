// burger-menu
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


let html = document.querySelector("html")
document.querySelector(".header-toggler__icon").onclick = function(){
html.classList.toggle("unscroll")
}



// TABS

const tabsButtons = document.querySelectorAll('.tabs__button');


tabsButtons.forEach(btn => {
 
  btn.addEventListener('click', () => {
    const prevActiveItem = document.querySelector('.tabs__item._active');
    const prevActiveButton = document.querySelector('.tabs__button._active');
    
    if (prevActiveButton) {
      prevActiveButton.classList.remove('_active');
    }
    
    if (prevActiveItem) {
      prevActiveItem.classList.remove('_active');
    }

    const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
    const nextActiveItem = document.querySelector(nextActiveItemId);
    
    btn.classList.add('_active');
    nextActiveItem.classList.add('_active');
  });
})