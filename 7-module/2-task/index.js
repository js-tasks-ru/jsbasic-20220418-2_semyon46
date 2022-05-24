import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modal = createElement(`<div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
        </h3>
      </div>
      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>
    </div>`)

    const buttonClose = this.modal.querySelector('.modal__close');
    buttonClose.addEventListener('click', () => {
      this.close()
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.close()
      }
    })
  }

  open() {
    document.body.append(this.modal);
    document.body.classList.add('is-modal-open')
  }
  setTitle(title) {
    const titleContainer = this.modal.querySelector('.modal__title')
    titleContainer.textContent = title

  }
  setBody(node) {
    const modalBody = this.modal.querySelector('.modal__body')
    modalBody.innerHTML = ''
    modalBody.appendChild(node)

  }
  close() {
    document.body.classList.remove('is-modal-open')
    document.removeEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.close()
      }
    });
    document.body.innerHTML = ''
  }
}