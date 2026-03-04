document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "cloud-box-compare"
  const cloudBoxCompareSwiper = document.querySelector('.cloud-box-compare .swiper');
  if (cloudBoxCompareSwiper) {
    new Swiper(cloudBoxCompareSwiper, {
      parallax: true,
      slidesPerView: "auto",
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 1.4,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }
    });
  }
});
