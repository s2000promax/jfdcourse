//Массив задач - прилетает на вход
const tasks = [
  {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
  },
  {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
  },
  {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
  },
];

// Нужное место для вставки тегов
const divToAddTasks = document.querySelector('.tasks-list');

// Вариант 1 - наиболее лёгкий. Не нужно разбираться почему так и что как работает. Просто сделаем это - обработаем данные, которые пришли на вход
/*
//Это функция
const tempaleForTask = ({id, text}) => `
<div class="task-item" data-task-id="${id}">
   <div class="task-item__main-container">
       <div class="task-item__main-content">
           <form class="checkbox-form">
               <input class="checkbox-form__checkbox" type="checkbox" id="${id}">
               <label for="${id}"></label>
           </form>
           <span class="task-item__text">${text}</span>
       </div>
       <button class="task-item__delete-button default-button
        delete-button" data-delete-task-id="${id}">Удалить</button>
   </div>
</div>
`;
//Конец функции. Возможно, фигурные скобки, в этом функции, были бы кстати

tasks.forEach( item => divToAddTasks.innerHTML += tempaleForTask(item)); // Закидываем все задачи по шаблону и по массиву задач
*/

// Вариант 2. Полностью программная реализация.
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

tasks.forEach( item => divToAddTasks.append(tempaleForTask('task-item', item))); // Аппендим все задачи по шаблону и по массиву задач



