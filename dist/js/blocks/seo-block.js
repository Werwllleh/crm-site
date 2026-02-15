document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "seo-block"
  const seoBlocks = document.querySelectorAll('.seo-block');

  if (seoBlocks.length) {

    seoBlocks.forEach(seoBlock => {

      const content = seoBlock.querySelector('.seo-block__content');
      const wrap = seoBlock.querySelector('.seo-block__wrap');
      const handleToggleButton = seoBlock.querySelector('.seo-block__button');

      if (!content || !wrap || !handleToggleButton) return;

      handleToggleButton.addEventListener('click', (e) => {

        if (content.classList.contains('show-all')) {
          content.style.maxHeight = '';
          content.classList.remove('show-all')
          handleToggleButton.textContent = 'Читать полностью';
        } else {
          content.style.maxHeight = `${wrap.offsetHeight}px`;
          content.classList.add('show-all')
          handleToggleButton.textContent = 'Скрыть';
        }
      })

      window.addEventListener('resize', () => {
        if (content.classList.contains('show-all')) {
          content.style.maxHeight = `${wrap.offsetHeight}px`;
        }
      })

    })
  }
});