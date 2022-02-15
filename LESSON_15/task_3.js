// Вводные данные:
// Не будем привязваться Лоадером к списку элелементов. Сделаем его самостоятельным
// Для этого добавим стиль loader в css

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';

const createHTMLelement = (tag, ...arg) => {
  //* Вспомогательная функция создания универсального HTML элемента (пора бы уже стандартизировать)
  //* Принимаем, что аргументы идут в следующем порядке:
  //* 0 - className
  //* 1 - textContent
  //* 2 - id
  //* 3 - href
  //* 4 - src
  if (!!tag) {
    const HTMLelement = document.createElement(tag);
    if (!!arg[0]) {
      HTMLelement.className = arg[0];
    }
    if (!!arg[1]) {
      HTMLelement.textContent = arg[1];
    }
    if (!!arg[2]) {
      HTMLelement.id = arg[2];
    }
    if (!!arg[3]) {
      HTMLelement.href = arg[3];
    }
    if (!!arg[4]) {
      HTMLelement.src = arg[4];
    }

    return HTMLelement;
  }

  return null;
}

const showLoader = (
  tagName = 'span',
  tagClassName = 'loader',
  appendElementTagOrClass = 'body',
  textMessage = 'Загрузка...'
) => {
  if (!document.querySelector(`.${tagClassName}`)) {
    const appendElement = document.querySelector(appendElementTagOrClass);
    appendElement.prepend(createHTMLelement(tagName, tagClassName, textMessage));
  } else {
    const loaderElement = document.querySelector(`.${tagClassName}`);
    loaderElement.classList.toggle('loader_hidden'); // Так компонент красиво скрывается
    // loaderElement.remove(); // Так его можно удалить из DOM
  }
}

const createList = photoObject => {
  const divContainer = createHTMLelement('div', null, null, 'data-container');

    const liElement = createHTMLelement('li');
    const img = createHTMLelement('img', 'photo-item__image', null, null, null, photoObject.url);
    const h3 = createHTMLelement('h3', 'photo-item__title', photoObject.title);
    liElement.append(img, h3);

  divContainer.append(liElement);

  const bodyElement = document.querySelector('body');
  bodyElement.prepend(divContainer);
}

const getFastestLoadedPhoto = arrayOfId => {
  showLoader(); // Начнем показывать Loader с этого момента, т.к. массив могбы содержать сотни или тысячи элементов

  const request = arrayOfId.map(id => fetch(
    `${PHOTOS_URL}/${id}`,
    {method: 'GET'}
  ))
  console.log('###-request', request);

  Promise.race(request)
    .then(response => {
      console.log('###-response', response);
      if (response.ok !== true) {
        console.log('###-error!!!', response);
        throw new Error(`Непредвиденная ошибка. Response - сломался. Status: ${response.status}`);
      }
      return response.json();
    })
    .then(photo => {
      console.log('###-photos', photo);
      createList(photo);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      showLoader();
    })
}

getFastestLoadedPhoto([60, 12, 'ёёё',55]); // Запрос с ошибкой
getFastestLoadedPhoto([60, 12, 55]); // Корректный запрос
