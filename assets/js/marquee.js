
document.addEventListener('DOMContentLoaded', () => {

    const marqueeScrollRef1 = document.querySelector('.marquee1');

    const marqueeAnimateRef1 = document.querySelector('.marquee__inner1');

    const marqueeScrollRef2 = document.querySelector('.marquee2');

    const marqueeAnimateRef2 = document.querySelector('.marquee__inner2');
 
    const cloneMarquee1 = marqueeAnimateRef1.cloneNode(true);

    marqueeScrollRef1.append(cloneMarquee1);

    const cloneMarquee2 = marqueeAnimateRef2.cloneNode(true);

    marqueeScrollRef2.append(cloneMarquee2);
 
    const width1 = marqueeAnimateRef1.scrollWidth;

    const width2 = marqueeAnimateRef2.scrollWidth;
 
    const gap = 16;

    const distanceToTranslate1 = -1 * (gap + width1);

    const distanceToTranslate2 = -1 * (gap + width2);
 
    let currentX1 = 0;

    let currentX2 = 0;

    let direction = 1; // 1 for forward, -1 for backward
 
    function animateMarquee1() {

        currentX1 -= 1;

        if (currentX1 <= distanceToTranslate1) {

            currentX1 = 0;

        }

        marqueeAnimateRef1.style.transform = `translateX(${currentX1}px)`;

        cloneMarquee1.style.transform = `translateX(${currentX1 + width1}px)`;

        requestAnimationFrame(animateMarquee1);

    }
 
    function animateMarquee2() {

        currentX2 += 1;

        if (currentX2 >= width2) {

            currentX2 = 0;

        }

        marqueeAnimateRef2.style.transform = `translateX(${currentX2}px)`;

        cloneMarquee2.style.transform = `translateX(${currentX2 - width2}px)`;

        requestAnimationFrame(animateMarquee2);

    }
 
    function startAnimation() {

        requestAnimationFrame(animateMarquee1);

        requestAnimationFrame(animateMarquee2);

    }
 
    function stopAnimation() {

        cancelAnimationFrame(animateMarquee1);

        cancelAnimationFrame(animateMarquee2);

    }
 
    startAnimation();
 
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {

        const scrollY = window.scrollY;

        if (scrollY < lastScrollY) {

            direction = -1;

        } else {

            direction = 1;

        }

        lastScrollY = scrollY;

    });

});

 