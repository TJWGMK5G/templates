let menu = document.querySelector(".menu-toggler");
let menuVisible = document.querySelector("#ipotopmenuwrapper");

menu.addEventListener("click", function () {
  menuVisible.classList.toggle("block-visible");
});
