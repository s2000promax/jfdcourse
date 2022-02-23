
//Дождались import/export!!! Вынесем функцию создания HTML элемента в Utils

/**
 * Auxiliary function to create custom HTML element
 * @param {string} tag - The HTML tag, like: 'div', 'span'... etc.;
 * @param {string} arg[0] - The property - className;
 * @param {string} arg[1] - The property - innerText;
 * @param {string} arg[2] - The property - id;
 * @param {string} arg[3] - The property - href;
 * @returns {HTMLElement || null}.
 */
export const createCustomHtmlElement = (tag, ...arg) => {
  if (!!tag) {
    const htmlElement = document.createElement(tag);
    if (!!arg[0]) {
      htmlElement.className = arg[0];
    }
    if (!!arg[1]) {
      htmlElement.textContent = arg[1];
    }
    if (!!arg[2]) {
      htmlElement.id = arg[2];
    }
    if (!!arg[3]) {
      htmlElement.href = arg[3];
    }

    return htmlElement;
  }

  return null;
}

/**
 * Function generate random color
 * @returns {string} - random color in '#xxYYzz' hex format, like: rgb(0...FF, 0...FF. 0...FF).
 */
export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

