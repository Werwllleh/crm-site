document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "solutions"
  const solutionBlocks = document.querySelectorAll('.solutions')
  if (solutionBlocks.length) {
    solutionBlocks.forEach(solutionBlock => {

      const links = solutionBlock.querySelectorAll('.solutions__link');
      const cards = solutionBlock.querySelectorAll('.solutions__card');

      if (!cards.length || !links.length) return;

      links.forEach((link, index) => {
        link.addEventListener('mouseenter', () => {
          links.forEach(link => link.classList.remove('active'));
          cards.forEach(card => card.classList.remove('active'));

          cards[index].classList.add('active');
          link.classList.add('active');
        })
      })

    })
  }
});
