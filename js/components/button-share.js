document.addEventListener('DOMContentLoaded', () => {
  const shareActionWraps = document.querySelectorAll('.button-share')

  if (!shareActionWraps.length) return;

  shareActionWraps.forEach((shareActionWrap) => {

    const button = shareActionWrap.querySelector('.button-share__button');
    const tooltip = shareActionWrap.querySelector('.button-share-tooltip');

    button.addEventListener('click', (e) => {
      e.preventDefault();

      closeAllShareTooltips();

      tooltip.style.display = 'block';

      positionShareTooltip(shareActionWrap, tooltip);

      setTimeout(() => {
        shareActionWrap.classList.add('active');
      }, 50)

    });

    const tooltipItems = tooltip.querySelectorAll('.button-share-tooltip__item');

    tooltipItems.forEach(tooltipItem => {
      const type = tooltipItem.dataset.share;

      tooltipItem.addEventListener('click', (e) => {
        e.preventDefault();

        if (type === 'link') {
          navigator.clipboard.writeText(window.location.href)
            .then(() => console.log(`Скопирован ${window.location.href}`))
            .catch(err => console.error(err));
        }

        closeShareTooltip(shareActionWrap, tooltip);
      });
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.button-share')) {
      closeAllShareTooltips();
    }
  });

});

function closeShareTooltip(wrap, tooltip) {
  wrap.classList.remove('active');
  tooltip.style.display = '';
  tooltip.classList.remove('above');
  tooltip.classList.remove('below');
}

function closeAllShareTooltips() {
  document.querySelectorAll('.button-share').forEach(wrap => {
    const tooltip = wrap.querySelector('.button-share-tooltip');
    wrap.classList.remove('active');
    tooltip.style.display = '';
    tooltip.classList.remove('above');
    tooltip.classList.remove('below');
  });
}

function positionShareTooltip(wrap, tooltip) {

  const button = wrap.querySelector('.button-share__button');
  const rect = button.getBoundingClientRect();
  const tooltipHeight = tooltip.offsetHeight;

  const spaceBelow = window.innerHeight - (rect.bottom);
  const spaceAbove = rect.top;

  tooltip.classList.remove('above', 'below');

  if (spaceBelow < tooltipHeight && spaceAbove > tooltipHeight) {
    tooltip.classList.add('above');
  } else {
    tooltip.classList.add('below');
  }
}
