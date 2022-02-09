// Нужное место для вставки тегов
const divToAddTasks = document.querySelector('.tasks-list');

// Вытащили MainClassName (task-item) - чтобы избежать дублирования кода
const tempaleForTask = (mainClassName, {id, text}) => {
  const divRoot = document.createElement('div');
  divRoot.className = mainClassName;
  divRoot.dataset.taskId = id;

  const divMainContainer = document.createElement('div');
  divMainContainer.className = mainClassName + '_' + '_main-container';

  const divMainContent = document.createElement('div');
  divMainContent.className = mainClassName + '_' + '_main-content';

  const formForCheckbox = document.createElement('form');
  const formClassName = 'checkbox-form';
  formForCheckbox.className = formClassName;

  const input = document.createElement('input');
  input.className = formClassName + '_' + '_checkbox';
  input.type = 'checkbox';
  input.id = id;

  const label = document.createElement('label');
  label.htmlFor = id;

  formForCheckbox.append(input, label);

  const spanElement = document.createElement('span');
  spanElement.className = mainClassName + '_' + '_text';
  spanElement.textContent = text;

  divMainContent.append(formForCheckbox, spanElement);

  const button = document.createElement('button');
  button.className = mainClassName + '_' + '_delete-button' + ' ' + 'default-button' + ' ' + 'delete-button'; // Разложим это так, на случай, если понадобится какой-либо из классов заменить/удалить/подменить...
  button.textContent = 'Удалить';
  button.dataset.deleteTaskId = id;

  divMainContainer.append(divMainContent, button);

  divRoot.append(divMainContainer);

  return divRoot;
}

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
      divToAddTasks.append(tempaleForTask('task-item', {id: Date.now(), text: target.taskName.value.trim()}));
    }

  } else {
    formCreateTaskBlock.append(createSpanError());
  }
})