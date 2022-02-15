const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

const createHTMLelement = (tag, ...arg) => {
  //* Вспомогательная функция создания универсального HTML элемента (пора бы уже стандартизировать)
  //* Принимаем, что аргументы идут в следующем порядке:
  //* 0 - className
  //* 1 - textContent
  //* 2 - id
  //* 2 - href
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
    appendElement.prepend(createHTMLelement(tagName,tagClassName, textMessage));
  } else {
    const loaderElement = document.querySelector(`.${tagClassName}`);
      loaderElement.classList.toggle('loader_hidden'); // Так компонент красиво скрывается
      // loaderElement.remove(); // Так его можно удалить из DOM
  }
}

const createList = textArray => {
  const divContainer = createHTMLelement('div', null, null, 'data-container');
  const list = createHTMLelement('ul'); //Инетересно, что в видео используется ol, но с ним засветы цифр появляются

  textArray.forEach( item => {
    const liElement = createHTMLelement('li');
    liElement.append(createHTMLelement('a', null, item.title, null, '#'));

    list.append(liElement);
  });
  divContainer.append(list);

  const bodyElement = document.querySelector('body');
  bodyElement.prepend(divContainer);
}

const renderAlbums = async () => {
  try {
    showLoader();

    const response = await fetch(ALBUMS_URL, {
      method : 'GET',
    });
    if (!response.ok) {
      throw new Error(`Непредвиденная ошибка. Response - сломался. Status: ${response.status}`);
    }
    const albums = await response.json();
    createList(albums);
  } catch (error) {
    console.error(error);
  }finally {
    showLoader();
  }
}

console.log(renderAlbums());