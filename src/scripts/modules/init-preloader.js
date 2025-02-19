const preloader = document.querySelector('.preloader');
const body = document.querySelector('body');
const delay = 2.4;

const initPreloader = () => {
  if (!preloader) {
    return;
  }

  body.style.overflow = "hidden";

  const removePreloader = () => {
    preloader.classList.add('preloader--none');
    body.style.overflow = "auto";
  }

  const hidePreloader = () => {
    preloader.classList.add('preloader--hidden');
  }

  setTimeout(() => {
    hidePreloader()
    setTimeout(removePreloader, 100)
  }, delay * 1000)
} 

export default initPreloader;