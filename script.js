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
