// Нужное место для вставки тегов
const divToAddTasks = document.querySelector('.tasks-list');

// Вытащили MainClassName (task-item) - чтобы измежать дублирования кода
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

//Вытаскиваем нужную форму и вешаем на неё обработчик событий
const formCreateTaskBlock= document.querySelector('.create-task-block');
formCreateTaskBlock.addEventListener('submit', event => {
  event.preventDefault();
  const {target} = event;
  if (!!target.taskName.value) {
    //Тут можно добавить проверку на уже существующую задачу. Но не будем перенасыщать код

    divToAddTasks.append(tempaleForTask('task-item', {id: Date.now(), text: target.taskName.value})); // Аппендим все задачи по шаблону и по массиву задач
  } else {
    alert(`Поле ${target.taskName.name} не может быть пустым! Введите название задачи`);
  }
})