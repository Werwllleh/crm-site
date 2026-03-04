document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "training"
  const trainingBlocks = document.querySelectorAll('.training')
  if (trainingBlocks.length) {
    trainingBlocks.forEach(trainingBlock => {
      const swiper = trainingBlock.querySelector('.swiper');
      if (swiper) {
        new Swiper(swiper, {
          slidesPerView: "auto",
          spaceBetween: 20,
        });
      }

      const types= trainingBlock.querySelector('.training-features__types');
      if (types) {
        const typesList = types.querySelectorAll('.training-features__type');
        const typesContentItems = trainingBlock.querySelectorAll('.training-features__content');

        if (typesList.length && typesContentItems.length) {
          typesList.forEach(type => {

            const collapseBlockWrap = type.querySelector('.collapse-block__wrap');
            const collapseBlockData = type.querySelector('.collapse-block__data');

            if (type.classList.contains('active')) {

              const typeAttribute = type.dataset.featureItem;
              if (!typeAttribute) return;

              collapseBlockWrap.style.maxHeight = getElementHeight(collapseBlockData);

              const typeContent = trainingBlock.querySelector(`.training-features__content[data-feature-content="${typeAttribute}"]`);
              if (!typeContent) return;

              type.classList.add('active');
              typeContent.classList.add('show');
            }


            type.addEventListener('click', (e) => {
              e.preventDefault();

              if (
                e.target.closest('.collapse-block__wrap')
              ) {
                return;
              }

              const isActive = type.classList.contains('active');
              if (isActive) return;

              if (!isActive) {
                typesList.forEach(i => {
                  i.classList.remove('active');
                  i.querySelector('.collapse-block__wrap').style.maxHeight = '';
                });

                collapseBlockWrap.style.maxHeight = getElementHeight(collapseBlockData);
                type.classList.add('active');
              }

              const typeAttribute = type.dataset.featureItem;

              if (!typeAttribute) return;

              typesContentItems.forEach(c => {
                c.classList.remove('show');
              })

              const typeContent = trainingBlock.querySelector(`.training-features__content[data-feature-content="${typeAttribute}"]`);
              if (!typeContent) return;

              typeContent.classList.add('show');

            })
          })
        }
      }
    })
  }
});