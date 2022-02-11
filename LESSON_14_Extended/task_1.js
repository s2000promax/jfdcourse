class CustomSelect {

  static defaultOptions = [
    {
      value: null, text: null,
    }
  ];

  #id;
  #options;
  #currentSelectedOption;

  constructor(id, options) {
    this.#id = id;
    this.#options = options || CustomSelect.defaultOptions; //Чтобы проинициализировать структуру
    this.#currentSelectedOption = null;
  }

  get selectedValue() {
    return this.#currentSelectedOption;
  }

  render(container) {
    container.append(this.#createDropdownList());

    // Контейнер с компонентом готов. Значит можно на него вешать события
    // Вопрос? Зачем просят сделать два обработчика событий, если можно повесить одно на контейнер?
    // Пока не знаю. Попробую реализовать с одним обработчиком и посмотреть что получится


    // Так сложилось, что по уcловию задачи у нас два разных тега, с одинаковым классом
    // Поэтому выделим нужный тег
    const mainClassName = `.select-dropdown--${this.#id}`; //Для поиска контейнера div

    const divForEventListener = this.#findTagByClassname(mainClassName, 'DIV');
    // console.log(`###id:${this.#id}#-1-divForEventListener`, divForEventListener);

    divForEventListener.addEventListener('click', event => {
      // console.log(`###id:${this.#id}#-2-event.target`, event.target);

      // Раскрытие списка
      // кликнуть можно как по span, так и по button
      if (event.target.className === `select-dropdown select-dropdown--${this.#id}`
        || event.target.className === `select-dropdown__button select-dropdown__button--${this.#id}`) {
        const currentUlElement = this.#findTagByClassname(null, 'UL', this.#findTagByClassname(mainClassName, 'DIV').childNodes);
        // console.log(`###id:${this.#id}#-3-ulFind`, currentUlElement);

        currentUlElement.classList.toggle('active');
      }

      // Выбор поля списка, выделение, запись в действия
      if (event.target.tagName === 'LI') {
        // console.log(`###id:${this.#id}#-4-click Li tag`, event.target)
        const currentUlElement = this.#findTagByClassname(null, 'UL', this.#findTagByClassname(mainClassName, 'DIV').childNodes);

        // Текущее выделение выбора
        event.target.classList.add('selected');

        // Обновление информации о текущем выранном элементе
        const span = document.querySelector(`.select-dropdown .select-dropdown--${this.#id}`)
        span.textContent = event.target.innerText;

        // Удаление предыдущего выделения
        if (!!this.#currentSelectedOption) {
          currentUlElement.childNodes.forEach( li => {
            if (li.getAttribute('data-value') === this.#currentSelectedOption.value) {
              li.classList.remove('selected');
            }
          });
        }

        // Обновления объекта с текущими данными
        this.#currentSelectedOption = {
          value: event.target.dataset.value,
          text: event.target.innerText,
        }

        // Закрытие списка
        event.target.closest('ul').classList.toggle('active'); //Можем быстро найти родителя
      }
    });
  }

  #createDropdownList() {
    const divContainer = this.#createHTMLelement('div', `select-dropdown select-dropdown--${this.#id}`);

    const button = this.#createHTMLelement('button', `select-dropdown__button select-dropdown__button--${this.#id}`);
    const span = this.#createHTMLelement('span', `select-dropdown select-dropdown--${this.#id}`, null, 'Выберите элемент');
    button.append(span);

    const ul = this.#createHTMLelement('ul', `select-dropdown__list select-dropdown__list--${this.#id}`);
    this.#options.forEach(({value, text}) => {
      ul.append(this.#createHTMLelement('li', 'select-dropdown__list-item', value, text));
    });

    divContainer.append(button, ul);

    return divContainer;
  }

  #createHTMLelement = (tag, ...arg) => {
    //* Вспомогательный метод создания универсального HTML элемента
    //* Принимаем, что аргументы идут в следующем порядке:
    //* 0 - className
    //* 1 - data-value
    //* 2 - textContent
    if (!!tag) {
      const HTMLelement = document.createElement(tag);
      if (!!arg[0]) {
        HTMLelement.className = arg[0];
      }
      if (!!arg[1]) {
        HTMLelement.dataset.value = arg[1];
      }
      if (!!arg[2]) {
        HTMLelement.textContent = arg[2];
      }

      return HTMLelement;
    }

    return null;
  }

  #findTagByClassname(className, tagName, collections) {
    // Двойное предназначение метода:
    // Если className передан - то осуществляем поиск в document
    // Если сlassName не передан, то делаем выборку тега TagName и коллекции collections
    let findTag = null;

    if (!!className) {
      document.querySelectorAll(className).forEach(element => {
        if (element.tagName === tagName) {
          findTag = element;
        }
      });
    } else {
      collections.forEach(element => {
        if (element.tagName === tagName) {
          findTag = element;
        }
      });
    }
    return findTag;
  }
}

const options = [
  { value: 1, text: 'JavaScript' },
  { value: 2, text: 'NodeJS' },
  { value: 3, text: 'ReactJS' },
  { value: 4, text: 'HTML' },
  { value: 5, text: 'CSS' }
];

const options2 = [
  { value: 'someValue-199', text: 'php' },
  { value: 'someValue-1', text: 'mongoDB' },
  { value: 31, text: '.Net' },
  { value: 42, text: 'SQL' },
  { value: 53, text: 'Python' },
  { value: 'someValue-3', text: 'BlackJack' }
];

const options3 = [
  { value: 512, text: 'Боевики' },
  { value: 34, text: 'Фэнтези' },
  { value: 125, text: 'Мелодрамы' },
  { value: 41, text: 'Детективы' },
  { value: 43, text: 'Документальное' },
  { value: 608, text: 'Историческое' },
  { value: 7, text: 'Историческое' }
];

const customSelect = new CustomSelect('123', options);

const mainContainer = document.querySelector('#container');
customSelect.render(mainContainer);

const customSelect2 = new CustomSelect('5464648', options2);
customSelect2.render(mainContainer);

const customSelect3 = new CustomSelect(Date.now(), options3);
customSelect3.render(mainContainer);


// Воспользуемся всплытием событий, чтобы выводить в консоль обновленное значение текущего выбора,
// для каждого экземпляра выпадающего списка. Например, чтобы использовать эти значения в другом месте нашего кода
const body = document.querySelector('body');
body.addEventListener('click', () => {
  console.log('Selected in customSelect', customSelect.selectedValue);
  console.log('Selected in customSelect2', customSelect2.selectedValue);
  console.log('Selected in customSelect3', customSelect3.selectedValue);
});



