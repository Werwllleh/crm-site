function scrollTracking(entries) {
  entries.forEach(entry => {
    const target = entry.target;
    const dataUrl = target.getAttribute('data-url');

    if (entry.isIntersecting) {
      if (!target.getAttribute('url') && dataUrl) {
        target.setAttribute('url', dataUrl);

        setTimeout(() => {
          target.style.opacity = 1;
          target.style.visibility = 'visible';
        }, 300)
      }
    } else {
      if (target.hasAttribute('url')) {

        target.style.opacity = 0;
        target.style.visibility = 'hidden';
        setTimeout(() => {
          target.removeAttribute('url');
        }, 300)
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const splineElements = document.querySelectorAll('spline-viewer[data-url]');

  const observer = new IntersectionObserver(scrollTracking, {
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    rootMargin: '200px 0px 200px 0px'
  });

  splineElements.forEach(el => observer.observe(el));
});
