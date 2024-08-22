const menuBtn = document.querySelector('.button');
const menuList = document.querySelector('.header__menu');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu--open');
});