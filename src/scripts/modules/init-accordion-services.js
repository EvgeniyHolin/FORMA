import Accordion from 'accordion-js';

const accordionBlock = document.querySelector('.accordion-container');

const initAccordionServices = () => {
  if (!accordionBlock) {
    return
  };

  new Accordion(accordionBlock, {
    showMultiple: true
  });
};

export default initAccordionServices;
