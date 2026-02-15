document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "see-also"
  const seeAlsoSwipers = document.querySelectorAll('.see-also__swiper .swiper')
  if (seeAlsoSwipers.length) {
    seeAlsoSwipers.forEach(seeAlsoSwiper => {
      new Swiper(seeAlsoSwiper, {
        slidesPerView: 'auto',
        spaceBetween: 20,
      });
    })
  }
});
