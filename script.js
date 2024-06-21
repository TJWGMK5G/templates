let swiperProverka = document.querySelector(".swiper");
if (swiperProverka) {
  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  const swiper1 = new Swiper(".swiper1", {
    breakpoints: {
      320: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      425: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      550: {
        slidesPerView: 8,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 10,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 10,
        spaceBetween: 50,
      },
      1500: {
        slidesPerView: 15,
        spaceBetween: 50,
      },
      1920: {
        slidesPerView: 20,
        spaceBetween: 50,
      },
    },
  });
}

const btnModal = document.querySelector(".modal__btn");
const modal = document.querySelector(".modal ");

if (modal !== null) {
  btnModal.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
}
