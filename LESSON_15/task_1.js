// Вводные данные:
// Не будем привязваться Лоадером к списку элелементов. Сделаем его самостоятельным
// Для этого добавим стиль loader в css

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
// const USERS_URL = 'https://jsonplaceholder.typicode.com/posts';

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
    liElement.append(createHTMLelement('a', null, item.username, null, '#'));

    list.append(liElement);
  });
  divContainer.append(list);

  const bodyElement = document.querySelector('body');
  bodyElement.prepend(divContainer);
}

const result =  fetch(USERS_URL, {
  method : 'GET',
});

console.log('###-result', result);
showLoader(); //Для простоты вызовем без параметров, чтобы подставились параметры по умолчанию - частный случай

result
    .then( response => {
      if (!response.ok) {
        console.log('###-response', response);
        throw new Error(`Непредвиденная ошибка. Response - сломался. Status: ${response.status}`);
      }
      return response.json();
    })
    .then( users => {
      console.log('###-users', users);
      createList(users);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      showLoader(); //Получение данных окончено (либо данные вернули, либо ошибка, но процесс окончен, loader удаляем)
    })

