document.addEventListener("DOMContentLoaded", () => {

  if (!window.gsap) return;

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  ScrollTrigger.refresh();

  const blocks = document.querySelectorAll(".animate-steps");
  if (blocks.length) {
    blocks.forEach(block => {
      const cards = block.querySelectorAll(".animate-steps__card");
      const cardsWrap = block.querySelector(".animate-steps__cards");
      const logoWrap = block.querySelector(".animate-steps__image");
      const logoColored = logoWrap?.querySelector("img.colored");

      if (!cards.length) return;

      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {

        const cardHeight = cards[0].offsetHeight;
        const scrollLength = (cards.length - 1) * cardHeight;

        cards.forEach((card, i) => {
          gsap.set(card, {
            position: "relative",
            zIndex: i + 1
          });
        });

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "-100px",
            // end: () => "+=" + scrollLength,
            end: `+=${scrollLength}`,
            scrub: 1,
            anticipatePin: 1,
            pin: true,
            pinSpacing: false
          }
        });

        cards.forEach((c, i) => {
          if (i === 0) {
            return tl.fromTo(
              c,
              {
                scale: 1
              },
              {
                scale: 0.9,
                duration: 5,
                ease: "ease"
              },
              0
            );
          }

          tl.fromTo(
            c,
            {
              y: 0,
              scale: 1
            },
            {
              y: -(cardHeight - 50) * i,
              scale: 0.9 + (i * 0.015),
              duration: 5,
              ease: "ease"
            },
            "+=1"
          );
        })

        // Анимация логотипа (заливка clipPath)
        if (logoColored) {
          tl.fromTo(
            logoColored,
            {
              clipPath: "inset(100% 0 0 0)",
            },
            {
              clipPath: "inset(0% 0 0 0)",
              duration: 40,
              ease: "ease"
            },
            0
          );
        }
      });
    });
  }

  const hacBlocks = document.querySelectorAll('.horizontal-animate-cards');
  if (hacBlocks.length) {
    hacBlocks.forEach(block  => {
      const itemsWrap = block.querySelector('.horizontal-animate-cards__items');
      const line = block.querySelector('.horizontal-animate-cards__line');
      const cards = block.querySelectorAll('.horizontal-animate-cards__item');

      if (!cards.length) return;

      let mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        const wrapWidth = itemsWrap.offsetWidth;
        const wrapHeight = itemsWrap.offsetHeight;
        const cardHeight = cards[0].offsetHeight;

        const stepY =
          (wrapHeight - cardHeight) / (cards.length - 1);

        cards.forEach((card, i) => {
          gsap.set(card, {
            position: 'absolute',
            left: 0,
            top: 0,
            x: 0,
            y: i * stepY - i * 0.5 + 20,
            zIndex: cards.length + i
          });
        });

        gsap.set(line, {
          x: 0,
          transformOrigin: 'left center'
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "-80px",
            end: `+=${cards.length * cardHeight}`,
            scrub: 1,
            pin: true
          }
        });

        cards.forEach((card, i) => {
          tl.to(
            card,
            {
              x: 0,
              y: i * 80 + 20,
              duration: 1,
              ease: 'none'
            },
            i
          );
        });

        tl.to(
          line,
          {
            x: wrapWidth,
            duration: cards.length,
            ease: 'none'
          },
          0
        );
      })

      mm.add("(min-width: 768px)", () => {

        const wrapWidth = itemsWrap.offsetWidth;
        const wrapHeight = itemsWrap.offsetHeight;
        const cardWidth = cards[0].offsetWidth;
        const cardHeight = cards[0].offsetHeight;

        const stepX =
          (wrapWidth - cardWidth) / (cards.length - 1) + 1.5;

        const stepY =
          (wrapHeight - cardHeight) / (cards.length - 1);

        cards.forEach((card, i) => {
          gsap.set(card, {
            position: 'absolute',
            left: 0,
            top: 0,
            x: i * stepX - i,
            y: i * stepY - i * 3.5 + 20,
            zIndex: cards.length + i
          });
        });

        gsap.set(line, {
          x: 0,
          transformOrigin: 'left center'
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "-90px",
            end: `+=${cards.length * cardHeight}`,
            scrub: 1,
            pin: true
          }
        });

        cards.forEach((card, i) => {
          tl.to(
            card,
            {
              x: i * stepX - i,
              y: i * 80 + 20,
              duration: 1,
              ease: 'none'
            },
            i
          );
        });

        tl.to(
          line,
          {
            x: wrapWidth,
            duration: cards.length,
            ease: 'none'
          },
          0
        );
      })
    })
  }


  const aiCardsBlock = document.querySelector('.ai-mvp-list');
  if (aiCardsBlock) {
    const cards = aiCardsBlock.querySelectorAll('.ai-mvp-list__card');
    if (!cards.length) return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(max-width: 992.1px)", () => {
      const cardHeight = cards[0].offsetHeight;
      const scrollLength = cards.length * cardHeight + 60;

      cards.forEach((card, i) => {
        gsap.set(card, {
          position: "relative",
          zIndex: cards.length + i,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aiCardsBlock,
          start: "-100px",
          end: `+=${scrollLength}`,
          scrub: 1,
          pin: true,
          // pinSpacing: true,
          anticipatePin: 1,
        },
      });

      cards.forEach((c, i) => {
        if (i === 0) {
          return tl.fromTo(
            c,
            {
              y: 0,
              opacity: 0.7
            },
            {
              y: 0,
              opacity: 1,
              duration: 2,
              ease: "ease"
            },
            "+=1"
          );
        }

        tl.fromTo(
          c,
          {
            y: 0,
            opacity: 0.7
          },
          {
            y: -(cardHeight - 60) * i,
            opacity: 1,
            duration: 3,
            ease: "ease"
          },
          "+=1"
        );
      })
    });
  }

});

document.addEventListener('load', () => {
  if (!window.gsap) return;
  ScrollTrigger.refresh();
});

window.addEventListener('load', () => {
  if (!window.gsap) return;
  ScrollTrigger.refresh();
});
