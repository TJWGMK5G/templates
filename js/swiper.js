const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // autoplay: { delay: 3000 },
});

const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  direction: "vertical",
  slidesPerView: 2,
  slidesPerGroup: 2,
  loop: true,

  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },

  breakpoints: {
    550: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      autoplay: { delay: 3000 },
      direction: "horizontal",
    },
  },
});
