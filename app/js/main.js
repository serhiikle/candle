/* Mobile menu */

const menuBtn = document.querySelector('.burger-menu-btn');
const headerSection = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
  headerSection.classList.toggle('menu--open');
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
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    441: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    591: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  },
  // pagination
  pagination: {
    el: '.swiper-pagination',
  }
});

/* accordeon */

const accordeon = document.querySelector('.accordeon');
const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

accordeonTitles.forEach.call(accordeonTitles, function(accordeonTitle) {
  accordeonTitle.addEventListener('click', function(){
    const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

    accordeonTitle.classList.toggle('accordeon__title--active')
    currentText.classList.toggle('accordeon__text--expand');

    if (currentText.classList.contains('accordeon__text--expand')) {
      currentText.style.maxHeight = currentText.scrollHeight + 'px';
    } else {
      currentText.style.maxHeight = 0;
    }
  });
});