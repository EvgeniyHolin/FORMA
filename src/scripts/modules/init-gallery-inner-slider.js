import Swiper from "swiper";

const galleryInnerSlider = document.querySelectorAll('.gallery__swiper-inner');

const initGalleryInnerSlider = () => {
  if (!galleryInnerSlider) {
    return;
  };

  galleryInnerSlider.forEach(slider => {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 0,

      breakpoints: {
        768: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        }
      }
    })
  });

};

export default initGalleryInnerSlider;