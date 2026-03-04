document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для компонента "header"
  const header = document.querySelector('.header');

  if (!header) return;

  const headerMobile = header.querySelector('.header-multiblock');

  //анимация шапки при загрузке
  setTimeout(() => {
    header.classList.add('visible')
  }, 300)

  const searchButtons = document.querySelectorAll('.search-button');
  const headerSearch = document.querySelector('.header-search');

  const burgerButtons = document.querySelectorAll('.burger-button');

  if (!burgerButtons.length) return;

  burgerButtons.forEach(burgerButton => {
    burgerButton.addEventListener('click', () => {

      burgerButton.classList.toggle('active');
      header.classList.remove('search-active');

      if (!headerSearch.classList.contains('shown')) {
        blockWrap(true);
      } else {
        headerSearch.classList.remove('shown');
        searchButtons.forEach(sb => sb.classList.remove('active'));
      }

      if (burgerButton.classList.contains('active')) {
        burgerButtons.forEach(bb => bb.classList.add('active'));
        headerMobile.classList.add('active');
      } else {
        burgerButtons.forEach(bb => bb.classList.remove('active'))
        headerMobile.classList.remove('active');
        blockWrap(false);
      }
    })
  })


  let isDesktop = window.innerWidth >= 992;
  subMenuInit(isDesktop);

  window.addEventListener('resize', debounce(() => {
    const newIsDesktop = window.innerWidth >= 992;

    if (newIsDesktop !== isDesktop) {
      isDesktop = newIsDesktop;
      subMenuInit(isDesktop);
    }
  }, 200));

  if (headerSearch && searchButtons.length) {

    const searchForm = headerSearch.querySelector('form[data-form="search"]');

    if (!searchForm) return;

    const headerSearchResultBlock = headerSearch.querySelector('.header-search__results');
    const searchFormInput = searchForm.querySelector('.header-search__form_input input');
    const searchFormInputClean = searchForm.querySelector('.header-search__form_input .clean-button');
    const searchFormNote = searchForm.querySelector('.header-search__form_note');

    if (!headerSearchResultBlock && !searchFormInput && !searchFormInputClean && !searchFormNote) return;

    searchFormInput.addEventListener('input', (e) => {
      if (searchFormInput.value.length > 0) {
        headerSearchResultBlock.classList.add('active')
        searchFormInputClean.classList.add('active');

        const resultList = headerSearchResultBlock.querySelectorAll('.header-search__results_list li');

        searchFormNote.textContent = `Найдено ${resultList.length} ${headerSearchResultText(resultList.length)}`;
      } else {
        headerSearchResultBlock.classList.remove('active')
        searchFormInputClean.classList.remove('active');
        searchFormNote.textContent = 'Начните вводить, чтобы начать поиск';
      }
    })

    searchFormInputClean.addEventListener('click', (e) => {
      e.preventDefault()
      searchFormInput.value = '';
      headerSearchResultBlock.classList.remove('active');
      searchFormInput.focus();
      searchFormInputClean.classList.remove('active');
      searchFormNote.textContent = 'Начните вводить, чтобы начать поиск';
    })

    searchButtons.forEach(searchButton => {
      searchButton.addEventListener('click', (e) => {
        e.preventDefault();

        searchButton.classList.toggle('active');

        if (searchButton.classList.contains('active')) {
          searchButtons.forEach(sb => sb.classList.add('active'));

          if (!headerMobile.classList.contains('active')) {
            blockWrap(true)
          } else {
            headerMobile.classList.remove('active');
            burgerButtons.forEach(bb => bb.classList.remove('active'));
          }

          header.classList.add('search-active');
          headerSearch.classList.add('shown');
          searchFormInput.focus();

        } else {
          searchButtons.forEach(sb => sb.classList.remove('active'));
          headerSearch.classList.remove('shown')


          setTimeout(() => {

            if (headerSearch.classList.contains('shown')) return;

            header.classList.remove('search-active');
            blockWrap(false)
            searchFormInput.value = '';
            headerSearchResultBlock.classList.remove('active');
          }, 600)

        }
      })
    })
  }

  showHeaderMessage()
  window.addEventListener('scroll', showHeaderMessage)
});

function showHeaderMessage() {
  const headerMessageBlock = document.querySelector('.header__message')
  if (headerMessageBlock) {
    let scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 200) {
      headerMessageBlock.classList.add('shown');
    } else {
      headerMessageBlock.classList.remove('shown');
    }
  }
}

function headerSearchResultText(value) {
  const mod10 = value % 10;
  const mod100 = value % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return 'результат';
  } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `результата`;
  } else {
    return `результатов`;
  }
}

function subMenuInit(isDesktop) {
  const overlay = document.querySelector('.overlay');
  const headerSearch = document.querySelector('.header-search');

  const headerDesktopNavbarBlocks = document.querySelectorAll('.header__navbar_list');
  if (!headerDesktopNavbarBlocks.length) return;

  headerDesktopNavbarBlocks.forEach(navbar => {
    const items = navbar.querySelectorAll('.header__navbar_item');
    if (!items.length) return;

    items.forEach(item => {
      const dropdown = item.querySelector('.header-dropdown');

      if (isDesktop) {
        item.addEventListener('mouseenter', () => handleItemMouseEnter(item, items, navbar, overlay));
        item.addEventListener('mouseleave', () => handleItemMouseLeave(items, overlay, headerSearch));
      } else {
        item.addEventListener('click', (e) => {
          if (dropdown) {
            e.preventDefault();
            dropdown.style.maxWidth = '';
            dropdown.style.left = '';
            dropdown.classList.add('active');

            if (!document.querySelector('html').classList.contains('block')) {
              blockWrap(true)
            }
          }
        });
      }
    });
  });

  const dropdownMenuBlocks = document.querySelectorAll('.header-dropdown');
  dropdownMenuBlocks.forEach(dropdown => {
    const closeButtons = dropdown.querySelectorAll('.header-dropdown-close');
    closeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.remove('active');
      });
    });
  });
}

function handleItemMouseEnter(item, items, navbar, overlay) {

  if (window.innerWidth < 992) return;

  items.forEach(i => i.classList.toggle('shade', i !== item));

  const dropdown = item.querySelector('.header-dropdown');
  if (!dropdown) return;

  const headerBottomBar = navbar.closest('.header__bottom-bar');
  if (!headerBottomBar) return;

  const { left, width } = headerBottomBar.getBoundingClientRect();
  dropdown.style.maxWidth = `${width + 50}px`;
  dropdown.style.left = `${left - 50}px`;

  const dropdownIconArrow = dropdown.querySelector('.header-dropdown__icon-arrow');
  if (dropdownIconArrow) {
    const itemRect = item.getBoundingClientRect();
    const dropdownRect = dropdown.getBoundingClientRect();
    const arrowWidth = dropdownIconArrow.offsetWidth;
    const relativeLeft = itemRect.left - dropdownRect.left + itemRect.width / 2 - arrowWidth / 2;
    dropdownIconArrow.style.left = `${relativeLeft}px`;
  }

  if (!document.documentElement.classList.contains('block')) {
    blockWrap(true);
  }

  overlay.classList.add('active');
  dropdown.classList.add('active');
}

function handleItemMouseLeave(items, overlay, headerSearch) {

  if (window.innerWidth < 992) return;

  items.forEach(i => i.classList.remove('shade'));
  overlay.classList.remove('active');

  document.querySelectorAll('.header-dropdown.active').forEach(d => d.classList.remove('active'));

  if (headerSearch && !headerSearch.classList.contains('shown')) {
    blockWrap(false);
  }
}

