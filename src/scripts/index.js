import initPreloader from "./modules/init-preloader";
import initAccordionServices from "./modules/init-accordion-services";
import initBurger from "./modules/init-burger";
import initGalleryInnerSlider from "./modules/init-gallery-inner-slider";
import initGallerySlider from "./modules/init-gallery-slider";
import initInteriorsSlider from "./modules/init-interiors-slider";
import PhoneInputMask from "./modules/init-phone-mask";
import initSubmitForm from "./modules/init-submit-form";

window.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initInteriorsSlider();
  initAccordionServices();
  initSubmitForm();
  initBurger();
  PhoneInputMask();
  initGallerySlider();
  initGalleryInnerSlider();
}, true);