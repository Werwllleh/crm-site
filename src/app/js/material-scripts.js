document.addEventListener('DOMContentLoaded', () => {
  /*=============VIDEO=============*/

  const videoBlocks = document.querySelectorAll('.material-content-video');
  if (videoBlocks.length) {
    videoBlocks.forEach((videoBlock) => {
      const playButton = videoBlock.querySelector('.material-content-video__play-button');
      const iframe = videoBlock.querySelector('iframe');
      const video = videoBlock.querySelector('video');

      if (!playButton) return;

      playButton.addEventListener('click', () => {
        playButton.classList.add('hide');

        if (video) {
          video.play();
          video.setAttribute('controls', 'true');
        }

        if (iframe) {
          let src = iframe.getAttribute('src') || '';
          if (!src.includes('autoplay=1')) {
            const separator = src.includes('?') ? '&' : '?';
            src = src + separator + 'autoplay=1&mute=1'; // mute=1 для автостарта
          }
          iframe.setAttribute('src', src);
          iframe.setAttribute('allow', 'autoplay; fullscreen'); // критично для работы
        }
      });
    });
  }

  const materialSwipers = document.querySelectorAll('.material-swiper .swiper');
  if (materialSwipers.length) {
    materialSwipers.forEach((swiper) => {

      const pagination = swiper.querySelector('.swiper-pagination');
      const buttonNext = swiper.querySelector('.swiper-button-next .animate-button');
      const buttonPrev = swiper.querySelector('.swiper-button-prev .animate-button');

      if (!pagination || !buttonNext || !buttonPrev) return;

      new Swiper(swiper, {
        slidesPerView: 'auto',
        loop: true,
        pagination: {
          el: pagination,
          clickable: true,
        },

        navigation: {
          nextEl: buttonNext,
          prevEl: buttonPrev,
        },
      });
    })
  }

  const materialCollapses = document.querySelectorAll('.material-collapse');

  if (materialCollapses.length) {

    materialCollapses.forEach((collapse) => {

      const collapseItems = collapse.querySelectorAll('.material-collapse__item');
      if (collapseItems.length) {
        collapseItems.forEach((collapseItem) => {
          const collapseHeader = collapseItem.querySelector('.material-collapse__item_header');
          const collapseContentWrap = collapseItem.querySelector('.material-collapse__item_data');
          const collapseContent = collapseContentWrap?.querySelector('.material-collapse__item_content');

          collapseHeader.addEventListener('click', () => {


            const isActive = collapseItem.classList.contains('active');

            collapseItems.forEach((item) => {
              item.classList.remove('active');
              const contentWrap = item.querySelector('.material-collapse__item_data');
              contentWrap.style.maxHeight = '';
            });

            if (!isActive) {
              collapseContentWrap.style.maxHeight = collapseContent.offsetHeight + 'px';
              collapseItem.classList.add('active');


            }
          })
        })

        window.addEventListener('resize', () => {
          const collapseActiveItem = collapse.querySelector('.material-collapse__item.active');
          if (collapseActiveItem) {
            const collapseContentWrap = collapseActiveItem.querySelector('.material-collapse__item_data');
            const collapseContent = collapseContentWrap?.querySelector('.material-collapse__item_content');

            collapseContentWrap.style.maxHeight = collapseContent.offsetHeight + 'px';
          }

        })
      }
    })
  }

  const tables = document.querySelectorAll('.material-content table');
  if (tables.length) {
    tables.forEach((table) => {
      wrap(table, 'div', 'table');
    })
  }

  function wrap(el, tag, className) {
    const block = document.createElement(tag);
    if (className) {
      block.classList.add(className);
    }
    el.parentNode.insertBefore(block, el);
    block.appendChild(el);
  }

  /*============/VIDEO=============*/
})
