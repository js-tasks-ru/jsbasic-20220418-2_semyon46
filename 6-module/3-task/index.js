import createElement from '../../assets/lib/create-element.js';


export default class Carousel {
  constructor(slides) {
    this.slides = slides
    let carousel = createElement(`
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    </div>`)
    let inner = createElement(`<div class="carousel__inner"></div>`);
    for (let slide of slides) {
      inner.innerHTML += `
       <div class="carousel__slide" data-id="penang-shrimp">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
      `;
    }
    carousel.appendChild(inner);
    this.elem = carousel;

    const buttonRight = carousel.querySelector('.carousel__arrow_right')
    const buttonLeft = carousel.querySelector('.carousel__arrow_left')
    const carouselInner = carousel.querySelector('.carousel__inner')
    const slidesAmount = carouselInner.querySelectorAll('.carousel__slide').length

    let currentSlideIndex = 0
    buttonLeft.style.display = 'none'

    buttonRight.addEventListener('click', () => {
      toggleSlide('right')
    });
    buttonLeft.addEventListener('click', () => {
      toggleSlide('left')
    });

    function toggleSlide(direction) {

      switch(direction){
        case 'left':
          currentSlideIndex--
          break
        case 'right':
          currentSlideIndex++
          break
      }

      if (currentSlideIndex !== 0) {
        buttonLeft.style.display = ''
      } else {
        buttonLeft.style.display = 'none'
      }
      if (currentSlideIndex === slidesAmount - 1) {
        buttonRight.style.display = 'none'
      } else {
        buttonRight.style.display = ''
      }

      carouselInner.style.transform = `translateX(-${currentSlideIndex * carouselInner.offsetWidth}px)`;
    }

    let carouselButtonPseudoArr = carouselInner.querySelectorAll('.carousel__button')

    carouselButtonPseudoArr.forEach(btn=>{
      btn.addEventListener('click', function() {
        carouselButtonPseudoArr[currentSlideIndex].dispatchEvent(new CustomEvent("product-add", {
          detail: slides[currentSlideIndex].id,
          bubbles: true
        }))
      })
    })
  }
}