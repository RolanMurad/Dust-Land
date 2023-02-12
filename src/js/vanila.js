// !BURER MENU 
//!VARS
const burger = document?.querySelector('[data-burger]');
const navbar = document?.querySelector('[data-navbar]');
const body = document.body;
const navItems = document?.querySelectorAll('.nav__list-item');
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);


//!CLICK ON BURGER
burger?.addEventListener('click', function () {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  navbar?.classList.toggle('navbar--visible');
});


//!Closing by clicking on the menu item
navItems.forEach(function (e) {
  e.addEventListener('click', function () {
    body.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    navbar?.classList.remove('navbar--visible');
  });
});


