document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для компонента "chapters"
  const chapters = document.querySelectorAll('.chapters');
  if (chapters.length) {
    chapters.forEach(chapter => {
      const chapterLinks = chapter.querySelectorAll('.chapters__link');
      if (chapterLinks.length) {
        chapterLinks.forEach(chapterLink => {

          chapterLink.addEventListener('click', (e) => {
            e.preventDefault();

            const anchorValue = chapterLink.getAttribute('href');

            if (!anchorValue) return;

            const searchBlock = document.querySelector(`${anchorValue}`);

            if (!searchBlock) return;
            chapterLinks.forEach(chapterLink => chapterLink.classList.remove('active'));
            searchBlock.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

            chapterLink.classList.add('active');

          })
        })
      }
    })
  }
});
