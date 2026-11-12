document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для компонента "pagination"
  const paginationBlocks = document.querySelectorAll('.pagination')
  if (paginationBlocks.length) {
    paginationBlocks.forEach(paginationBlock => {
      const showMoreButton = paginationBlock.querySelector('.pagination__show-more');
      if (showMoreButton) {
        showMoreButton.addEventListener('click', (e) => {
          e.preventDefault();
        })
      }

      const pageButtons = paginationBlock.querySelectorAll('.pagination__page');
      if (pageButtons.length) {
        pageButtons.forEach(pageButton => {
          if (!pageButton.classList.contains('disable')) {
            pageButton.addEventListener('click', () => {
              pageButtons.forEach(pageButton => pageButton.classList.remove('active'));
              pageButton.classList.add('active');
            })
          }
        })
      }
    })
  }
});
