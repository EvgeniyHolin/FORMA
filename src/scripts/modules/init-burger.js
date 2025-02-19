const initBurger = () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuItems = document.querySelectorAll('.header__link');

  if (!(burger && menu)) {
    return;
  };

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
  });

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.remove('active');
      burger.classList.remove('active');
    });
  });
};

export default initBurger;