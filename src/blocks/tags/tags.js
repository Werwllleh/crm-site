document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "tags"
  const tagsBlocks = document.querySelectorAll('.tags')
  if (tagsBlocks.length) {
    tagsBlocks.forEach(tagsBlock => {
      const tags = tagsBlock.querySelectorAll('.tags__item');
      if (tags.length) {
        tags.forEach(tag => {
          tag.addEventListener('click', () => {
            tags.forEach(tag => tag.classList.remove('active'));

            tag.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: "center" });
            tag.classList.add('active')
          })
        })
      }
    })
  }
});
