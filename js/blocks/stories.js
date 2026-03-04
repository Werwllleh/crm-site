document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "stories"
  const storiesSwipers = document.querySelectorAll('.stories .swiper');
  if (storiesSwipers.length) {
    storiesSwipers.forEach((storiesSwiper) => {

      const sectionStories = storiesSwiper.closest('.section-stories');
      const storiesSwiperPrevButton = sectionStories?.querySelector('.animate-button.prev');
      const storiesSwiperNextButton = sectionStories?.querySelector('.animate-button.next');


      new Swiper(storiesSwiper, {
        slidesPerView: 'auto',
        spaceBetween: 12,

        navigation: {
          enabled: !!(storiesSwiperNextButton && storiesSwiperPrevButton),
          nextEl: storiesSwiperNextButton ,
          prevEl: storiesSwiperPrevButton,
        },

        pagination: {
          el: '.stories__swiper_pagination',      // если у вас уже есть буллеты
          clickable: true,
        },

        breakpoints: {
          992:  {
            spaceBetween: 40
          },
        }
      });
    })
  }

  const storyCards = document.querySelectorAll('.story-card');
  if (storyCards.length) {
    storyCards.forEach((storyCard) => {
      const showActionBlock = storyCard.querySelector('.story-card__more');

      showActionBlock.addEventListener('mouseenter', (e) => {
        e.preventDefault();
        e.stopPropagation();
        storyCards.forEach((storyCard) => storyCard.classList.remove('show'));
        storyCard.classList.add('show');
      })

      storyCard.addEventListener('mouseleave', () => {
        storyCard.classList.remove('show');
      })

    })
  }


});
