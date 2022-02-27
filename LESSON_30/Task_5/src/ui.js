import {createCustomHtmlElement, getCustomDateFormat} from "./utils";

export function addDonateItem(event) {
  if (event.target.className === (this.mainClassName + '__submit-button')) {

    this.formElement.childNodes.forEach( element => {
      if (element.id === 'total-amount') {
        element.innerText = parseInt(element.innerText) + Number(this.formElement.elements.amount.value) +'$'
      }
    });

    //Добавляем новую запись о новом донате
    document.querySelector('.donates-container__donates').append(createDonateItem(this.formElement.elements.amount.value * 1));
    //Очищаем поле ввода
    this.formElement.elements.amount.value = '';
  }
}

const createDonateItem = (donate) => {
  const div = createCustomHtmlElement('div', 'donate-item', getCustomDateFormat());
  div.append(createCustomHtmlElement('b', '', `${donate}$`));

  return div;
}