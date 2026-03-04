document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "company-rating"
  const companyRatingBlocks = document.querySelectorAll('.company-rating')
  if (companyRatingBlocks.length) {
    companyRatingBlocks.forEach((companyRatingBlock) => {

      const showMoreBlock = companyRatingBlock?.querySelector('.company-rating__show-more');
      const showMoreButton = showMoreBlock?.querySelector('.pagination__show-more');

      const buttonYears = companyRatingBlock.querySelectorAll('.company-rating__button-year');
      const ratingYearLists = companyRatingBlock.querySelectorAll('.company-rating__list');
      const ratingItems = companyRatingBlock.querySelectorAll('.company-rating__list_item[data-rating]');
      const ratingImages = companyRatingBlock.querySelectorAll('.company-rating__image img[data-rating-img]');

      if (!buttonYears.length || !ratingYearLists.length || !ratingItems.length || !ratingImages.length) return;

      buttonYears.forEach(buttonYear => {

        buttonYear.addEventListener('click', () => {
          buttonYears.forEach(buttonYear => buttonYear.classList.remove('active'));

          const year = buttonYear.getAttribute('data-filter-year');
          const list = companyRatingBlock.querySelector(`.company-rating__list[data-rating-year="${year}"]`);

          if (year && list) {
            ratingYearLists.forEach(buttonYear => buttonYear.classList.remove('active'));
            buttonYear.classList.add('active');
            list.classList.add('active');
            toggleShowRatingItems();
            // showMoreBlock?.classList.remove('hide');
          }

        })

      })

      showMoreButton?.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          const activeRatingList = document.querySelector('.company-rating__list.active');

          if (!activeRatingList) return;

          const activeRatingItems = activeRatingList.querySelectorAll('.company-rating__list_item');
          activeRatingItems.forEach((item) => item.classList.remove('hidden'));
          showMoreBlock.classList.add('hide');
        }
      })

      ratingItems.forEach((ratingItem) => {
        const value = ratingItem.getAttribute('data-rating');
        const ratingImage = companyRatingBlock.querySelector(`.company-rating__image img[data-rating-img="${value}"]`);

        ratingItem.addEventListener('mouseenter', () => {
          ratingImages.forEach(image => {
            image.classList.remove('show')
          })
          ratingImage.classList.add('show');
        })
      })

    })
  }

  toggleShowRatingItems()

  window.addEventListener('resize', () => {
    toggleShowRatingItems()
  })

});

function toggleShowRatingItems() {

  const activeRatingList = document.querySelector('.company-rating__list.active');
  const ratingBlock = activeRatingList?.closest('.company-rating')

  if (!activeRatingList || !ratingBlock) return;

  const activeRatingItems = activeRatingList.querySelectorAll('.company-rating__list_item');

  const showMoreBlock = ratingBlock.querySelector('.company-rating__show-more');

  if (!activeRatingItems.length) return;

  if (window.innerWidth >= 992) {
    activeRatingItems.forEach((item) => item.classList.remove('hidden'));
  } else {
    activeRatingItems.forEach((item, index) => {
      if (index > 6) {
        item.classList.add('hidden')
      }
      showMoreBlock.classList.remove('hide');
    });
  }
}
