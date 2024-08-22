const menuBtn = document.querySelector('.burger-menu-btn');
const menuList = document.querySelector('.header__menu');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu--open');
});