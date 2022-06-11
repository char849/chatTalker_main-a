
AOS.init({
  duration: 1500,
  once: true
})

let swiper = new Swiper(".mainSwiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  loop: true,
  autoplay: { delay: 3000 },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
