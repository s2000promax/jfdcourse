import { createCustomHtmlElement, getRandomColor } from './utils';

export default function initApp() {
  console.log('Hello world');

  document.body.append(createCustomHtmlElement('button', 'button', 'Change page color'));

  document.querySelector('.button')
    .addEventListener('click', () => document.body.style.backgroundColor = getRandomColor());
}