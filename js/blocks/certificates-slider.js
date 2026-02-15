document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "certificates-slider"
  const certificatesSwiper = document.querySelector('.certificates-slider__swiper .swiper')
  if (certificatesSwiper) {

    /*const MIN_SLIDES = 6;

    const wrapper = certificatesSwiper.querySelector('.swiper-wrapper');
    let slides = certificatesSwiper.querySelectorAll('.swiper-slide');

    if (slides.length <= MIN_SLIDES) {
      const originalSlides = Array.from(slides);
      let i = 0;

      while (wrapper.querySelectorAll('.swiper-slide').length <= MIN_SLIDES * 2) {
        const clone = originalSlides[i % originalSlides.length].cloneNode(true);
        wrapper.appendChild(clone);
        i++;
      }

      if (certificatesSwiper.swiper) {
        certificatesSwiper.swiper.destroy(true, true);
      }
    }*/

    new Swiper(certificatesSwiper, {
      centeredSlides: true,

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        550: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 86,
          loop: true
        }
      },

      pagination: {
        el: '.certificates-slider__swiper .swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.certificates-slider__swiper .next',
        prevEl: '.certificates-slider__swiper .prev',
      },
    });
  }
});
