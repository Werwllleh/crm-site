document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "header-message"

  headerMarquee()


});


function headerMarquee () {
  const headerMessage = document.querySelector('.header-message');

  if (headerMessage) {
    const headerMessageMarquee = document.querySelector('.header-message__marquee');
    const headerMessageMarqueeInner = headerMessageMarquee.querySelector('.header-message__marquee_inner');

    let clone = headerMessageMarqueeInner.cloneNode(true);
    headerMessageMarquee.appendChild(clone);

  }
}
