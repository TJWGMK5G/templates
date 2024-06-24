let swiperProverka = document.querySelector(".swiper");
if (swiperProverka) {
  const swiper = new Swiper(".swiper", {
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

// const btnModal = document.querySelector(".modal__btn");
// const modal = document.querySelector(".modal ");

// if (modal !== null) {
//   btnModal.addEventListener("click", function () {
//     modal.classList.add("hidden");
//   });
// }
