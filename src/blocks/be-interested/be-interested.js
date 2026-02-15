document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "be-interested"
  const beInterestedSwipers = document.querySelectorAll('.be-interested__swiper .swiper')
  if (beInterestedSwipers.length) {
    beInterestedSwipers.forEach(beInterestedSwiper => {
      new Swiper(beInterestedSwiper, {
        slidesPerView: 'auto',
        spaceBetween: 20,
      });
    })
  }
});
