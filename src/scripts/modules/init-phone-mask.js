import Inputmask from 'inputmask';

const PhoneInputMask = () => {
  const input = document.getElementById('phone');

  if (!phone) {
    return;
  };

  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(input);
}

export default PhoneInputMask;