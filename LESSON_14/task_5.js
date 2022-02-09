// *******************************************************************************
// * Интересно наращивать сложность, поэтому в качестве исходного кода,          *
// * возьмем код из предыдущей задачи №4, а не из задачи №2                      *
// * Так же, в шаблоне функции tempaleForTask - для наглядности полностью        *
// * пропишем названия классов, т.к. применять будем метод toggle()              *
//                                                                               *
// * p.s. теперь этот JSDoc - будет подсвечиваться в подсказках у функции ниже)) *
// *******************************************************************************

//Шаблон модального окна
const createConfirmWindow = () =>{
  return `
  <div class="modal-overlay modal-overlay_hidden">
   <div class="delete-modal">
       <h3 class="delete-modal__question">
           Вы действительно хотите удалить эту задачу?
       </h3>
       <div class="delete-modal__buttons">
           <button class="delete-modal__button delete-modal__cancel-button">
               Отмена
           </button>
           <button class="delete-modal__button delete-modal__confirm-button">
               Удалить
           </button>
       </div>
   </div>
</div>
  `
}

// Нужное место для вставки тегов
const divToAddTasks = document.querySelector('.tasks-list');
//Добавим модальное окно, как тег со скрывающим классом
divToAddTasks.innerHTML += createConfirmWindow();

// Программный шаблон тега Task
const tempaleForTask = ( {id, text} ) => {
  const divRoot = document.createElement('div');
  divRoot.className = 'task-item';
  divRoot.dataset.taskId = id;

  const divMainContainer = document.createElement('div');
  divMainContainer.className = 'task-item__main-container';

  const divMainContent = document.createElement('div');
  divMainContent.className = 'task-item__main-content';

  const formForCheckbox = document.createElement('form');
  formForCheckbox.className = 'checkbox-form';

  const input = document.createElement('input');
  input.className = 'checkbox-form__checkbox';
  input.type = 'checkbox';
  input.id = id;

  const label = document.createElement('label');
  label.htmlFor = id;

  formForCheckbox.append(input, label);

  const spanElement = document.createElement('span');
  spanElement.className = 'task-item__text';
  spanElement.textContent = text;

  divMainContent.append(formForCheckbox, spanElement);

  const button = document.createElement('button');
  button.className = 'task-item__delete-button default-button delete-button';
  button.textContent = 'Удалить';
  button.dataset.deleteTaskId = id;

  divMainContainer.append(divMainContent, button);

  divRoot.append(divMainContainer);

  return divRoot;
}

// Функция создает HTML элемент spanError
const createSpanError = message => {
  const spanError = document.createElement('span');
  spanError.className = 'error-message-block';

  if (!!message) {
    spanError.textContent = `Задача с таким названием ${message} уже существует`;
  } else {
    spanError.textContent = 'Название задачи не должно быть пустым';
  }

  return spanError;
}

// Функция удаляет HTML элемент spanError
const deleteSpanError = className => {
  const spanError = document.querySelector(className);
  if (!!spanError) {
    spanError.remove();
  }
}

//Вытаскиваем нужную форму и вешаем на неё обработчик событий
const formCreateTaskBlock= document.querySelector('.create-task-block');
formCreateTaskBlock.addEventListener('submit', event => {
  event.preventDefault();
  deleteSpanError('.error-message-block'); //Удалит spanError, если он существует - так мы избегаем перерерисовки друг-на друга

  const {target} = event;
  if (!!target.taskName.value.trim()) {
    let isCompare = false;

    // Проверяем во всех найденных span, существет ли такая задача
    const elementsForCompare = document.querySelectorAll('span');
    elementsForCompare.forEach( tag => {
      if (tag.innerText === target.taskName.value.trim()) {
        isCompare = true;
      }
    });

    if (isCompare) { // Не делаем !!isCompare, т.к. знаем что тип isCompare - Boolean
      formCreateTaskBlock.append(createSpanError(target.taskName.value.trim()));
    } else {
      // Аппендим все задачи по шаблону и по введенным от пользователя данным
      divToAddTasks.append(tempaleForTask({id: Date.now(), text: target.taskName.value.trim()}));
    }

  } else {
    formCreateTaskBlock.append(createSpanError());
  }
})

// Реализуем функциональность удаления задач
// Элемент для события уже был получен ранее, поэтому просто используем его для делегирования событий
divToAddTasks.addEventListener('click', even => {
  const taskIdForDelete = even.target.dataset.deleteTaskId;
  const classNameConfirmationButton = even.target.className;
  const modalOverlayWindow = document.querySelector('.modal-overlay');

  if (!!taskIdForDelete) {
    //Передадим id задачи кнопке Confirm модального окна
    const taskIdToModalWindow = document.querySelector('.delete-modal__confirm-button');
    taskIdToModalWindow.dataset.taskId = taskIdForDelete;
    //Показываем модальное окно
    modalOverlayWindow.classList.toggle('modal-overlay_hidden');
  }

  if (classNameConfirmationButton === 'delete-modal__button delete-modal__confirm-button') {

    //Вытащим id задачи, (подтверждение на удаление получено)
    const taskIdToModalWindow = document.querySelector('.delete-modal__confirm-button');
    const taskId = taskIdToModalWindow.dataset.taskId;
    taskIdToModalWindow.removeAttribute('data-task-id');

    // Ищем нужный тег по id и удаляем его
    const task = document.querySelector(`[data-task-id="${taskId}"]`);
    task.remove();

    // Скрываем окно
    modalOverlayWindow.classList.toggle('modal-overlay_hidden');

  } else if (classNameConfirmationButton === 'delete-modal__button delete-modal__cancel-button') {

    // удалим id из кнопки Confirm
    const taskIdToModalWindow = document.querySelector('.delete-modal__confirm-button');
    taskIdToModalWindow.removeAttribute('data-task-id');

    // скрываем окно
    modalOverlayWindow.classList.toggle('modal-overlay_hidden');
  }

});
