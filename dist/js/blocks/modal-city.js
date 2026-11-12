document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "modal-city"
  const modalCity = document.querySelector('.modal-city');
  if (modalCity) {
    const modalCityList = modalCity.querySelector('.modal-city__list');
    const modalCityFilter = modalCity.querySelector('.modal-city__filter');
    const modalCityInput = modalCity.querySelector('.modal-city__input');
    const modalCityItems = modalCityFilter?.querySelectorAll('.city-select');

    if (!modalCityInput || !modalCityItems.length) return;

    modalCityInput.addEventListener('input', () => {
      const query = modalCityInput.value.trim().toLowerCase();

      if (query.length) {
        modalCityList.classList.add('hide');
        modalCityFilter.classList.remove('hide');
      } else {
        modalCityList.classList.remove('hide');
        modalCityFilter.classList.add('hide');
      }

      modalCityItems.forEach(item => {
        const text = item.getAttribute('data-city').trim().toLowerCase();
        if (text.includes(query)) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  }
});
