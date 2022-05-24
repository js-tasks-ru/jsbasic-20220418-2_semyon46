import createElement from '../../assets/lib/create-element.js';

export default class ribbonDiv {
  constructor(categories) {
    this.categories = categories;
    const ribbonDiv = createElement(`<div class="ribbon"></div>`);
    const ribbonInner = createElement(`<nav class="ribbon__inner"></nav>`);

    for (let category of categories) {
      if (ribbonInner.name === 'All') {
        ribbonInner.innerHTML += `<a href="#" class="ribbon__item ribbon__item_active" data-id="">${category.name}</a>`
      } else {
        ribbonInner.innerHTML += `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`;
      }
    }
    const btnPrev = createElement(`<button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>`);
    const btnNext = createElement(`<button class="ribbon__arrow ribbon__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>`);
    ribbonDiv.appendChild(btnPrev);
    ribbonDiv.appendChild(ribbonInner);
    ribbonDiv.appendChild(btnNext);
    this.elem = ribbonDiv;

    btnPrev.classList.remove('ribbon__arrow_visible');
    btnNext.classList.add('ribbon__arrow_visible');


    ribbonInner.addEventListener('scroll', () => {
      if (ribbonInner.scrollLeft === 0) {
        btnPrev.classList.remove('ribbon__arrow_visible');
      } else {
        btnPrev.classList.add('ribbon__arrow_visible');
      }
      if (ribbonInner.scrollWidth - ribbonInner.scrollLeft - ribbonInner.clientWidth < 1) {
        btnNext.classList.remove('ribbon__arrow_visible');
      } else {
        btnNext.classList.add('ribbon__arrow_visible');
      }
    })

    btnPrev.addEventListener('click', () => {
      ribbonInner.scrollBy(-350, 0)
    })

    btnNext.addEventListener('click', () => {
      ribbonInner.scrollBy(350, 0)
    })

    ribbonInner.addEventListener('click', (e) => {

      e.preventDefault()

      for (let elem of ribbonInner.children) {
        elem.classList.remove('ribbon__item_active')
      }

      e.target.classList.add('ribbon__item_active')
      ribbonDiv.dispatchEvent(new CustomEvent('ribbon-select', {
        detail: e.target.getAttribute("data-id"),
        bubbles: true
      }))
    })
  }

}