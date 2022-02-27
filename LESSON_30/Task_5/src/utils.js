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
 * Return date with custom format
 * @param {Date} date
 * @returns {`${string} ${string} ${string}, ${string} - `}
 */
export const getCustomDateFormat = (date = new Date) => {
  const month = ["January", "February", "March",
                 "April", "May", "June", "July",
                 "August", "September", "October",
                 "November", "December"];

  const currentDay = date.getDate() + 'th';
  const currentMonth = month[date.getMonth()];
  const currentYear = date.getFullYear().toString();
  const currentTime = date.toLocaleTimeString().toLowerCase();

  return `${currentMonth} ${currentDay} ${currentYear}, ${currentTime} - `;
}

