const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const closeMenu = document.querySelector('.close');

const loadTl = gsap.timeline();
const menuTl = gsap.timeline({
  paused: true,
  onStart: () => menu.classList.add('menu--open'),
  onReverseComplete: () => menu.classList.remove('menu--open')
});

loadTl.to('.hero__title', 0.7, { y: 0 }, '0.4')
.to('.hero__title', 1.1, { opacity: 1 }, '-=0.7')
.to('.hero__btn', 0.5, { y: 0 }, '-=1.1')
.to('.hero__btn', 0.9, { opacity: 1 }, '-=1.1')
.to('.hero__descr', 0.8, { opacity: 1 }, '-=0.5')
.to('.photos__wrap img', 0.4, { scale: 1, stagger: 0.3 }, '-=0.7')
.to('.photos__wrap img', 0.6, { opacity: 1, stagger: 0.3 }, '-=1')
.to('.photos__author', 0.9, { opacity: 1 }, '-=0.5');

menuTl.to('.menu__top', 0.2, { yPercent: 0 })
.to('.menu__top', 0.5, { opacity: 1 }, '-=0.2')
.to('.close', 0.2, { opacity: 1 }, '-=0.3')
.to('.menu__bottom', 0.3, { y: 0 }, '-=0.3')
.to('.menu__bottom', 0.7, { opacity: 1 }, '-=0.3')
.to('.menu__nav', 0.7, { y: 0, opacity: 1 }, '-=0.2')
.to('.social, .menu__right', 0.7, { y: 0, opacity: 1 }, '-=0.3');

burger.addEventListener('click', () => {
  menuTl.play();
});

closeMenu.addEventListener('click', () => {
  menuTl.reverse();
});
