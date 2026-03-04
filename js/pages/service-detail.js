document.addEventListener('DOMContentLoaded', () => {

  const companiesSwiper = document.querySelector('.service-layout__companies .swiper');
  if (companiesSwiper) {

    const slides = companiesSwiper.querySelectorAll('.swiper-slide');
    if (slides.length < 10) {
      slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        companiesSwiper.querySelector('.swiper-wrapper').appendChild(clone);
      });
    }

    const swiper = new Swiper(companiesSwiper, {
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      speed: 6000,
      parallax: true,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1.8,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 2.4,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 3.2,
          spaceBetween: 30
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1250: {
          slidesPerView: 4.8,
          spaceBetween: 30
        },
        1440: {
          slidesPerView: 5.7,
          spaceBetween: 30
        },
        1920: {
          slidesPerView: 6.7,
          spaceBetween: 40
        },
        2560: {
          slidesPerView: 8,
          spaceBetween: 40
        }
      }
    });

    companiesSwiper.addEventListener('mouseleave', () => {
      swiper.autoplay.start();
    });
  }



});
