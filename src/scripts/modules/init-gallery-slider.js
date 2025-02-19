import { Navigation } from 'swiper/modules';
import Swiper from "swiper";

const gallerySlider = document.querySelector('.gallery__swiper');
const galleryBtnPrev = document.querySelector('.gallery__prev');
const galleryBtnNext = document.querySelector('.gallery__next');


const initGallerySlider = () => {
  if (!gallerySlider) {
    return;
  };

  new Swiper(gallerySlider, {
    modules: [Navigation],
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 50,
    simulateTouch: false,
    allowTouchMove: false,
    navigation: {
      prevEl: galleryBtnPrev,
      nextEl: galleryBtnNext
    }
  })
};

export default initGallerySlider;