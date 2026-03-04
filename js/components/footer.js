document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для компонента "footer"
  const component = document.querySelector('.footer')
  if (component) {}

  const currentYear = new Date().getFullYear();

  const footerYearBlocks = document.querySelectorAll('.footer-date');
  if (footerYearBlocks.length) {
    footerYearBlocks.forEach((footerYearBlock) => {
      const valueField = footerYearBlock.querySelector('.footer-date__value');

      if (valueField && currentYear) {
        valueField.textContent = currentYear;
      }
    })
  }


  const collapses = document.querySelectorAll('.footer .collapse');
  if (collapses.length) {
    collapses.forEach((collapse) => {
      const collapseItems = collapse.querySelectorAll('.collapse__item');

      if (!collapseItems.length) return;

      collapseItems.forEach((collapseItem) => {
        const header = collapseItem.querySelector('.collapse__header');
        const contentWrap = collapseItem.querySelector('.collapse__wrap');
        const contentInner = collapseItem.querySelector('.collapse__inner');

        header.addEventListener('click', () => {
          const isActive = collapseItem.classList.contains('active');

          collapseItems.forEach((item) => {
            item.classList.remove('active');
            const wrap = item.querySelector('.collapse__wrap');
            if (wrap) wrap.style.maxHeight = '';
          });

          if (!isActive) {
            collapseItem.classList.add('active');
            contentWrap.style.maxHeight = `${contentInner.offsetHeight}px`;
          }
        });

        window.addEventListener('resize', () => {

          const isActive = collapseItem.classList.contains('active');

          if (isActive) {
            if (window.innerWidth >= 1250) {
              collapseItem.classList.remove('active');
              contentWrap.style.maxHeight = '';
            } else {
              contentWrap.style.maxHeight = `${contentInner.offsetHeight}px`;
            }
          }

        })
      });
    })
  }
});
