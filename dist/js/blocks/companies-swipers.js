document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "companies-swipers"
  const companiesSwipers = document.querySelectorAll('.companies-swiper');
  if (companiesSwipers.length) {
    companiesSwipers.forEach((companiesSwiper) => {

      const slides = companiesSwiper.querySelectorAll('.swiper-slide');
      const loopEnabled = slides.length > 3;

      new Swiper(companiesSwiper, {
        loop: loopEnabled,
        slidesPerView: 'auto',
        spaceBetween: 20,
        speed: 5000,
        parallax: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: companiesSwiper.classList.contains('reverse'),
        },
        lazy: {
          loadPrevNext: true,
        },

        breakpoints: {
          992:  {
            spaceBetween: 40
          },
        }
      });
    })
  }
});
