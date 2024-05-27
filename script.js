// coockie;
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

  // var html = document.querySelector("html");
  // coockie.onclick = function () {
  //   html.classList.toggle("unscroll__bg");
  // };
}
