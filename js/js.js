const promo__box = document.querySelectorAll('.promo__box');

function promoFunction(img_length) {
  let index = 0;
  const img = img_length.querySelectorAll('.promo__img');
  const img_number = img_length.querySelectorAll('.promo__img').length;

  setInterval(function () {

    if (index == img_number) index = 0;

    img.forEach(item => item.classList.remove('promo__img_active'))

    img[index].classList.add('promo__img_active');

    index++;
  }, 3000);
}

for(let i=0; i<promo__box.length; i++){
  promoFunction(promo__box[i]);
}
// promo__box




// accordion
document.querySelector('.accordion').addEventListener('click', (event) => {
  if (event.target.closest('.accordion__item') && !event.target.closest('ul')) {
    event.target.closest('.accordion__item').classList.toggle('open')
  }
})
// / accordion




// slider
sliderFunction('.slider_1')
sliderFunction('.slider_2')

function sliderFunction(name) {
  const prev = document.querySelector(`${name} .slider__btn-left`),
        next = document.querySelector(`${name} .slider__btn-right`),
        item_slider = document.querySelectorAll(`${name} .slider__item`),
        carousel_slider = document.querySelector(`${name} .slider__carousel`),
        window_slider = document.querySelector(`${name} .slider__window`).offsetWidth;

  let offset = 0,
    number = () => {
      return (990 <= window_slider) ? 4 : (990 >= window_slider && 450 <= window_slider) ? 3 : 1
    };

  let item_width = Math.floor(window_slider / number()) + 'px';

  item_slider.forEach(slide => {
    slide.style.width = item_width;
  })

  const calculation = item_slider[0].offsetWidth * item_slider.length,
        calculation_1 = item_slider[0].offsetWidth * number(),
        formula = calculation - calculation_1;

        
  carousel_slider.onmousedown = () => { return false }

  // _________________

  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = +formula;
    } else {
      offset -= +item_slider[0].offsetWidth;
    }
    if (offset >= formula) {
      offset = 0;
    }

    setPosition();
    checkBtns();

  })

  next.addEventListener('click', () => {
    if (offset == formula) {
      return;
    }
    if (offset <= formula) {
      offset += item_slider[0].offsetWidth;
    }

    setPosition();
    checkBtns();
  })

  const setPosition = () => {
    carousel_slider.style.transform = `translateX(-${offset}px)`;
  }

  const checkBtns = () => {

    if (offset == 0) {
      prev.classList.add('slider__none')
    }
    else {
      prev.classList.remove('slider__none')
    }

    if (offset == formula) {
      next.classList.add('slider__none')
    }
    else {
      next.classList.remove('slider__none')
    }

  }

  checkBtns();

  // _________

  let slider = document.querySelector(`${name} .slider__window`),
      posInit = 0,
      posX1 = 0,
      posX2 = 0,
      posFinal = 0,
      posThreshold = item_slider[0].offsetWidth * 0.35,
      trfRegExp = /([-0-9.]+(?=px))/,
    getEvent = function () {
      return (event.type.search('touch') !== -1) ? event.touches[0] : event;
    },
    slide = function () {

      setPosition();

      checkBtns();
    },
    swipeStart = function () {
      let evt = getEvent();

      posInit = posX1 = evt.clientX;

      carousel_slider.style.transition = '';

      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);
    },
    swipeAction = function () {

      let evt = getEvent(),
          style = carousel_slider.style.transform,
          transform = +style.match(trfRegExp)[0];

      posX2 = posX1 - evt.clientX;
      posX1 = evt.clientX;

      carousel_slider.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    },
    swipeEnd = function () {
      posFinal = posInit - posX1;

      document.removeEventListener('touchmove', swipeAction);
      document.removeEventListener('mousemove', swipeAction);
      document.removeEventListener('touchend', swipeEnd);
      document.removeEventListener('mouseup', swipeEnd);

      if (Math.abs(posFinal) > posThreshold) {
        if (offset !== 0 && posInit < posX1) {

          offset -= +item_slider[0].offsetWidth;
        } else if (offset !== formula && posInit > posX1) {

          offset += item_slider[0].offsetWidth;
        }
      }

      if (posInit !== posX1) {
        slide();
      }
    };

  setPosition();

  slider.addEventListener('touchstart', swipeStart);
  slider.addEventListener('mousedown', swipeStart);

}
// slider bar

// a
window.addEventListener('click', (event)=>{
  if(event.target.hasAttribute('href')){
    location.href = event.target.getAttribute('href');
  }
})
// a
