document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для компонента "textarea"
  const textareas = document.querySelectorAll('.textarea textarea');
  if (textareas.length) {
    textareas.forEach(textarea => {

      setTimeout(() => {
        checkInput(textarea)
      }, 100)


      textarea.addEventListener('input', () => {

        checkInput(textarea)

      })

      textarea.addEventListener('focus', () => {

        checkInput(textarea)

      })

    })
  }
});
