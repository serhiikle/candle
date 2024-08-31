/* Mobile menu */

const menuBtn = document.querySelector('.burger-menu-btn');
const menuList = document.querySelector('.header__menu');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu--open');
});

/* feedback slider */

const feedbackSlider = new Swiper('.feedback__slider', {
 
  loop: true,

  // pagination
  pagination: {
    el: '.swiper-pagination',
  }
});

/* certificate slider */

const certificateSlider = new Swiper('.certificate__slider', {
 
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  // pagination
  pagination: {
    el: '.swiper-pagination',
  }
});