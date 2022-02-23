export default class App {

  #cookieField;

  constructor(className) {
    this.#cookieField = 'isCookie';

    if (!localStorage.getItem(this.#cookieField)) {
      document.querySelector(`.${className}__button`).addEventListener('click', () => {
        localStorage.setItem(this.#cookieField, 'true');
        document.querySelector(`.${className}`).classList.toggle('hide');
      })
    } else {
      document.querySelector(`.${className}`).classList.toggle('hide');
    }
  }

  init() {
    console.log(`Application ${this.constructor.name} init: ok!`);
  }
}