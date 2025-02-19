import Swiper from "swiper";

const interiorsSlider = document.querySelector('.interiors__swiper');

const initInteriorsSlider = () => {
  if (!interiorsSlider) {
    return;
  };

  new Swiper(interiorsSlider, {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 28,
  })
};

export default initInteriorsSlider;
