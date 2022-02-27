import {addDonateItem} from "./ui";

export default class App {

  constructor({mainClassName}) {
    this.mainClassName = mainClassName;
    this.formElement = document.querySelector(`.${this.mainClassName}`);

    if (this.formElement) {
      this.formElement.addEventListener('click', event => {
        event.preventDefault();

        if (this.formElement.elements.amount.value * 1) {
          addDonateItem.call(this, event);
        }
      });
    }
  }

}
