document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "exp-numbers"
  const expNumbersSwipers = document.querySelectorAll('.exp-numbers .swiper')
  if (expNumbersSwipers.length) {
    expNumbersSwipers.forEach((swiper) => {
      new Swiper(swiper, {
        spaceBetween: 20,
        slidesPerView: "auto",
      });
    })
  }
});
