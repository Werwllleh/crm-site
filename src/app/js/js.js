document.addEventListener('DOMContentLoaded', () => {
    const collapseBlocks = document.querySelectorAll('.collapse-block')
    if (!collapseBlocks.length) return;
    collapseBlocks.forEach(collapseBlock => {

        const items = collapseBlock.querySelectorAll('.collapse-block__item');
        if (!items.length) return;

        items.forEach((item) => {

            const collapseBlockWrap = item.querySelector('.collapse-block__wrap');
            const collapseBlockData = item.querySelector('.collapse-block__data');

            if (item.classList.contains('active')) {
                collapseBlockWrap.style.maxHeight = getElementHeight(collapseBlockData);
                item.classList.add('active');
            }

            item.addEventListener('click', (e) => {

                if (
                  e.target.closest('.collapse-block__wrap') ||
                  e.target.closest('.collapse-block__data')
                ) {
                    return;
                }

                if (!collapseBlockWrap || !collapseBlockData) return;

                const isActive = item.classList.contains('active');

                items.forEach(i => {
                    i.classList.remove('active');
                    i.querySelector('.collapse-block__wrap').style.maxHeight = '';
                });

                if (!isActive) {
                    collapseBlockWrap.style.maxHeight = getElementHeight(collapseBlockData);
                    item.classList.add('active');
                }
            })
        })

        window.addEventListener('resize', () => {
            const collapseBlockActiveItem = collapseBlock.querySelector('.collapse-block__item.active');
            if (collapseBlockActiveItem) {
                const collapseStageInfo = collapseBlockActiveItem.querySelector('.collapse-block__wrap');
                const collapseStageList = collapseStageInfo?.querySelector('.collapse-block__data');

                collapseStageInfo.style.maxHeight = getElementHeight(collapseStageList);
            }
        })
    })

    const statisticsSwiper = document.querySelector('.statistics-list .swiper');
    if (statisticsSwiper) {
        new Swiper(statisticsSwiper, {
            parallax: true,
            breakpoints: {
                320: {
                    slidesPerView: 1.3,
                    spaceBetween: 10
                },
                480: {
                    slidesPerView: 1.6,
                    spaceBetween: 10
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
            }
        });
    }

    const segmentedItems = document.querySelectorAll('.segmented');
    if (segmentedItems.length) {
        segmentedItems.forEach(segmented => segmentedInit(segmented))
    }

    const lightGalleryBlocks = document.querySelectorAll('[data-lightgallery]');
    const galleryOptions = {
        plugins: [lgZoom, lgFullscreen, lgRotate],
        licenseKey: '0000-0000-0000-0000', // тестовый ключ
        speed: 300,
        download: false, // скрыть кнопку загрузки
    };
    if (lightGalleryBlocks.length) {

        lightGalleryBlocks.forEach(block => {
            if (!block.classList.contains('lg-initialized')) {
                lightGallery(block, galleryOptions);
            }
        });
    }

    const implementationPackageSwipers = document.querySelectorAll('.implementation-package__swiper');
    if (implementationPackageSwipers.length) {
        implementationPackageSwipers.forEach(swiper => {
            new Swiper(swiper, {
                slidesPerView: "auto",
                spaceBetween: 20,
            });
        })
    }

    setTimeout(() => {
        anim();
    }, 50);

    const aiExamplesBlocks = document.querySelectorAll('.ai-examples');
    if (aiExamplesBlocks.length) {
        aiExamplesBlocks.forEach(aiExamplesBlock => {
            const typeButtons = aiExamplesBlock.querySelectorAll('.ai-examples__type');
            const categories = aiExamplesBlock.querySelectorAll('.ai-examples__category');

            if (!typeButtons || !categories) return;

            typeButtons[0].classList.add('active');
            categories[0].style.display = 'block';
            categories[0].classList.add('active');

            typeButtons.forEach(button => {
                button.addEventListener('click',(e) => {
                    e.preventDefault();

                    const type = button.dataset.type;
                    if (!type) return;

                    const category = aiExamplesBlock.querySelector(`.ai-examples__category[data-category="${type}"]`)
                    if (!category) return;

                    if (category.classList.contains('active')) return;

                    typeButtons.forEach(i => i.classList.remove('active'));

                    categories.forEach(i => {
                        i.classList.remove('active');
                        i.style.display = '';
                    });

                    button.classList.add('active');
                    if (window.innerWidth <= 992) {
                        button.scrollIntoView(
                          {behavior: "smooth", block: "nearest", inline: "center"}
                        )
                    }

                    category.style.display = 'block';
                    setTimeout(() => {
                        category.classList.add('active');
                    }, 50)
                })
            })
        })
    }

    const aiSolutionsBlocks = document.querySelectorAll('.ai-solutions');
    if (aiSolutionsBlocks.length) {
        aiSolutionsBlocks.forEach(aiSolutionsBlock => {
            const tabs = aiSolutionsBlock.querySelectorAll('.ai-solutions__tab');
            const types = aiSolutionsBlock.querySelectorAll('.ai-solutions-type');

            if (!tabs || !types) return;

            tabs[0].classList.add('active');
            types[0].style.display = 'block';
            types[0].classList.add('active');

            tabs.forEach(button => {
                button.addEventListener('click',(e) => {
                    e.preventDefault();

                    const type = button.dataset.solution;
                    if (!type) return;

                    const category = aiSolutionsBlock.querySelector(`.ai-solutions-type[data-category="${type}"]`)
                    if (!category) return;

                    if (category.classList.contains('active')) return;

                    tabs.forEach(i => i.classList.remove('active'));

                    types.forEach(i => {
                        i.style.display = '';
                        i.classList.remove('active');

                    });

                    button.classList.add('active');
                    if (window.innerWidth <= 992) {
                        button.scrollIntoView(
                          {behavior: "smooth", block: "nearest", inline: "center"}
                        )
                    }
                    category.style.display = 'block';
                    setTimeout(() => {
                        category.classList.add('active');
                    }, 100)
                })
            })
        })
    }

    const aiBool = document.querySelector('.ai-bool');
    if (aiBool) {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aiBool,
                start: "-100px",
                end: `+=1500`,
                scrub: 1,
                anticipatePin: 1,
            },
        });

        tl.fromTo(
          aiBool,
          {
              yPercent: 0,
              scale: 1
          },
          {
              yPercent: 80,
              scale: 1.3,
              duration: 3,
              ease: "ease"
          },
          0
        );

    }

    const aiWave = document.querySelector('.ai-wave');
    if (aiWave) {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aiWave,
                start: "-100px",
                end: `+=2000`,
                scrub: 1,
                anticipatePin: 1,
            },
        });

        tl.fromTo(
          aiWave,
          {
              yPercent: 0,
              opacity: 1,
          },
          {
              yPercent: 40,
              opacity: 0.2,
              duration: 4,
              ease: "ease"
          },
          0
        );

    }

    (() => {

        const policyPage = document.querySelector('.policy-page');
        if (!policyPage) return;

        const sidebarLinks = Array.from(policyPage.querySelectorAll('.policy-sidebar span[data-tab]'));
        const docs = Array.from(policyPage.querySelectorAll('.policy-doc[data-id]'));
        if (!sidebarLinks.length || !docs.length) return;

        const docsById = new Map(docs.map(d => [d.getAttribute('data-id'), d]));

        const SHOW_DELAY = 50;

        let activeId = null;
        let activeDoc = null;

        const timers = {
            show: null,
            hide: null,
            hidePrev: null,
        };

        function clearTimers() {
            Object.keys(timers).forEach(k => {
                if (timers[k]) {
                    clearTimeout(timers[k]);
                    timers[k] = null;
                }
            });
        }

        function setActiveLink(tabHash) {
            sidebarLinks.forEach(tab => {

                tab.classList.toggle('active', tab.getAttribute('data-tab') === tabHash);

                if (window.innerWidth <= 992 && tab.classList.contains('active')) {
                    tab.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center"
                    });
                }
            });
        }

        function prepareDocForShow(doc) {
            doc.classList.add('active');
            doc.style.display = 'block';

            doc.style.opacity = '0';
            doc.style.transform = 'translateY(30px)';
        }

        function animateShow(doc) {
            timers.show = setTimeout(() => {
                doc.style.opacity = '1';
                doc.style.transform = 'translateY(0)';
            }, SHOW_DELAY);
        }

        function animateHide(doc) {
            doc.style.opacity = '0';
            doc.style.transform = 'translateY(30px)';
            doc.classList.remove('active');
            doc.style.display = 'none';
        }

        function showPolicyDoc(id, { updateUrl = true } = {}) {
            const nextDoc = docsById.get(id);
            if (!nextDoc) return false;
            if (id === activeId) return true;

            clearTimers();

            const tabHash = `#${id}`;
            setActiveLink(tabHash);

            if (activeDoc && activeDoc !== nextDoc) {
                animateHide(activeDoc);
            }

            prepareDocForShow(nextDoc);
            animateShow(nextDoc);

            activeId = id;
            activeDoc = nextDoc;

            if (updateUrl) {
                history.pushState(null, '', `./policy.html#${id}`);
            }

            const offsetTop = activeDoc.getBoundingClientRect().top + window.pageYOffset;
            const scrollTarget = offsetTop - 120;

            if (window.innerWidth > 992) {
                window.scrollTo({
                    top: scrollTarget,
                    behavior: "smooth",
                });
            } else {
                window.scrollTo({
                    top: scrollTarget,
                    behavior: "smooth",
                });
            }

            return true;
        }

        sidebarLinks.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();

                const tabHash = tab.getAttribute('data-tab');
                if (!tabHash || !tabHash.startsWith('#')) return;

                const id = tabHash.slice(1);
                if (!id) return;

                showPolicyDoc(id);

                if (window.innerWidth <= 992) {
                    tab.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center"
                    });
                }
            });
        });

        const initialId =
          (location.hash && location.hash.slice(1)) ||
          (policyPage.querySelector('.policy-sidebar span.active')?.getAttribute('data-tab')?.slice(1)) ||
          (docs[0]?.getAttribute('data-id') || null);

        if (initialId) {
            showPolicyDoc(initialId, { updateUrl: false });
        }

        window.addEventListener('popstate', () => {
            const id = location.hash ? location.hash.slice(1) : null;
            if (id) showPolicyDoc(id, { updateUrl: false });
        });
    })();



})

function getElementHeight(element) {
    return `${element.offsetHeight}px`;
}

function segmentedInit(segmented) {

    if (!segmented) return;

    const wrap = segmented.querySelector('.segmented__wrap');
    const buttons = segmented.querySelectorAll('.segmented__item');
    const thumb = segmented.querySelector('.segmented__thumb');
    const input = segmented.querySelector('.segmented__input');

    const moveThumb = (activeBtn) => {
        const wrapStyles = getComputedStyle(wrap);
        const padLeft = parseFloat(wrapStyles.paddingLeft);
        const padTop = parseFloat(wrapStyles.paddingTop);
        const padBottom = parseFloat(wrapStyles.paddingBottom);

        const { offsetLeft, offsetWidth } = activeBtn;

        thumb.style.width = `${offsetWidth}px`;
        thumb.style.transform = `translateX(${offsetLeft - padLeft}px)`;
        thumb.style.top = `${padTop}px`;
        thumb.style.height = `${wrap.clientHeight - padTop - padBottom}px`;
    };

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            buttons.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            input.value = btn.getAttribute('data-value');
            input.dispatchEvent(new Event('change', {bubbles: true}))
            moveThumb(btn);
        });
    });

    const activeBtn = segmented.querySelector('.segmented__item.active');
    if (activeBtn) moveThumb(activeBtn);

    window.addEventListener('resize', () => {
        const currentActive = segmented.querySelector('.segmented__item.active');
        if (currentActive) moveThumb(currentActive);
    });
}

function resetForm(form) {
    setTimeout(() => {
        form.reset()

        const focusedFields = form.querySelectorAll('.focus');
        if (focusedFields.length) {
            focusedFields.forEach(focusedField => {
                focusedField.classList.remove('focus')

                if (focusedField.classList.contains('error') || focusedField.classList.contains('verified')) {
                    focusedField.classList.remove('error')
                    focusedField.classList.remove('verified')
                }
            })
        }

    }, 300)
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function getStyles(elem) {
    return window.getComputedStyle(elem, null);
}

function anim() {
    document.querySelectorAll(".anim").forEach((elem) => {
        let top = elem.getBoundingClientRect().top;

        const classList = [
            "animmask",
            "animslide",
            "animslidefast",
            "animslideup",
            "animslideleft",
            "animslidebig",
            "animgraph",
        ];

        let dalaypx;
        if (window.innerWidth > 650) dalaypx = 120;
        else dalaypx = 30;

        if (elem.classList.contains("animgraph")) dalaypx = 0;

        if (top < window.innerHeight - dalaypx) {
            classList.forEach((cl) => {
                if (elem.classList.contains(cl)) elem.classList.remove(cl + "hide");
            });

            elem.classList.forEach((wordClass) => {
                let delay = 0;
                if (wordClass.includes("animdalay")) {
                    delay = parseInt(wordClass.replace("animdalay", ""));
                }
                let duration = parseFloat(getStyles(elem).transitionDuration) * 1000;

                setTimeout(() => {
                    elem.classList.remove("animdalay" + delay, "anim", ...classList);
                }, delay + duration);
            });
        }
    });
}

window.addEventListener("load", () => {
    setTimeout(() => {
        anim();
    }, 50);
});
