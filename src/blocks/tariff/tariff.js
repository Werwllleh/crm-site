document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "tariff"
  const tariffBlocks = document.querySelectorAll('.tariff')

  if (!tariffBlocks.length) return;

  tariffBlocks.forEach((tariffBlock) => {
    tariffBlockInit(tariffBlock)

    const swipersTariff = tariffBlock.querySelectorAll('.swiper');
    if (swipersTariff.length) {
      swipersTariff.forEach(swiper => {
        new Swiper(swiper, {
          slidesPerView: 'auto',
          spaceBetween: 12,
        })
      })
    }

    const tariffCards = tariffBlock.querySelectorAll('.tariff-card');

    if (tariffCards.length) {
      tariffCards.forEach(card => {

        const select = card.querySelector('.select');

        if (select) {
          select.addEventListener('click', () => {
            select.classList.toggle('active');
          })

          window.addEventListener('click', (e) => {
            if (!e.target.closest('.select')) {
              select.classList.remove('active');
            }
          })

          const selectTextContent = select.querySelector('.select__value');
          const selectContentItems = card.querySelectorAll('.tariff-card__price');

          if (!selectContentItems.length || !selectTextContent) return;

          const selectValues = select.querySelectorAll('.select__list li');
          if (selectValues.length) {
            selectValues.forEach(selectValue => {
              selectValue.addEventListener('click', () => {
                selectValues.forEach(selectValue => selectValue.classList.remove('selected'));

                const attr = selectValue.dataset.selectValue;
                if (!attr) return;

                selectContentItems.forEach(selectContentItem => selectContentItem.classList.add('hide'));

                const memoryValues = card.querySelectorAll(`.tariff-card__memory--item[data-select-content]`);

                memoryValues.forEach(memoryValue => {
                  memoryValue.classList.add('hide');
                })

                const selectContents = card.querySelectorAll(`[data-select-content="${attr}"]`);

                if (!selectContents.length) return;

                selectContents.forEach(item => {
                  selectTextContent.textContent = attr;
                  item.classList.remove('hide');
                  selectValue.classList.add('selected');
                });
              })
            })
          }


        }

        const segmentedBlock = card.querySelector('.segmented');

        if (!segmentedBlock) return;

        const segmentedInput = segmentedBlock.querySelector('.segmented__input');

        if (!segmentedInput) return;
        segmentedInput.addEventListener('change', () => {

          const value = segmentedInput.value;

          card.querySelectorAll('.tariff-card__price').forEach(cardPrice => {
            cardPrice.classList.add('hide');
          })

          const activeContent = card.querySelector(`.tariff-card__price[data-segment-content="${value}"]`);
          if (activeContent) {
            activeContent.classList.remove('hide');
          }

        })

      });
    }
  })

});

function tariffBlockInit(block) {

  const inputValue = block.querySelector('.segmented__input');

  if (!inputValue || !inputValue.value || inputValue.value === '') return;

  showActiveContent(block, inputValue.value)

  inputValue.addEventListener('change', (e) => {
    const value = e.target.value;

    showActiveContent(block, value)
  })

  function showActiveContent(block, value) {
    const contentBlocks = block.querySelectorAll('.tariff__type-data');

    if (!contentBlocks.length) return;

    contentBlocks.forEach((contentBlock) => {
      contentBlock.classList.remove('active')
    })

    const activeContent = block.querySelector(`.tariff__type-data[data-value="${value}"]`);

    if (activeContent) {
      activeContent.classList.add('active')
    }
  }
}
