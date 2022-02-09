const body = document.querySelector('body');

//Способ №1 - innerHTML
const tempText = body.innerHTML; //Делаем так, чтобы сохранить последовательноть тегов (<script> идет в конце) иначе можно было бы обойтись простым body.innerHTML += 'теги...'
body.innerHTML = `
<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>
` + tempText;

//Способ №2 - createElement

//Просто оставлю это здесь. Не люблю дублирование кода
/*
const form = document.createElement('form');
form.className = 'create-user-form';

  let label = document.createElement('label');
  label.textContent = 'Имя';
    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'username';
    input.placeholder = 'Введите ваше имя';
    label.append(input);

form.append(label);

  label = document.createElement('label'); // Необходимо переопределить, чтобы обновились внутренние id элемента
  label.textContent = 'Пароль';
    input = document.createElement('input'); // Необходимо переопределить, чтобы обновились внутренние id элемента
    input.type = 'password';
    input.name = 'password';
    input.placeholder = 'Придумайте Пароль';
    label.append(input);

form.append(label);

    let button = document.createElement('button');
    button.textContent = 'Подтвердить';
    button.type = 'submit';

form.append(button);
body.prepend(form);
*/

// Для способа 2. Допустим, что нам нужно динамически создать кастомную форму с многократно повоторяющимися элементами

// Вспомогательная универсальная функция создания HTML элемента
const createHTMLelement = (tag, ...arg) => {
  //Принимаем, что аргументы идут в следующем порядке:
  // 0 - className
  // 1 - textContent
  // 2 - type
  // 3 - name
  // 4 - placeHolder
  if (!!tag) {
    const HTMLelement = document.createElement(tag);
    if (!!arg[0]) { HTMLelement.className = arg[0]; }
    if (!!arg[1]) { HTMLelement.textContent = arg[1]; }
    if (!!arg[2]) { HTMLelement.type = arg[2]; }
    if (!!arg[3]) { HTMLelement.name = arg[3]; }
    if (!!arg[4]) { HTMLelement.placeholder = arg[4]; }
    return HTMLelement;
  }

  return null;
}

//Создаем массив необходимых тегов (однотипных)
const tags = [
  createHTMLelement('label', null, 'Имя'),
  createHTMLelement('input', null, null,'text', 'userName', 'Введите ваше имя'),
  createHTMLelement('label', null, 'Имя'),
  createHTMLelement('input', null, null,'password', 'password', 'Придумайте Пароль')
]

//Форматируем теги. На эту тему можно разные конструкции придумать.
const newTags = []
tags.forEach( (tag, index) =>{
  if (index % 2 !== 0) {
    tags[index - 1].append(tags[index]);
    newTags.push(tags[index - 1]);
  }
})

//по необходимости добавляем и другие теги
newTags.push(createHTMLelement('button', null, 'Подтвердить', 'submit')); //Добавляем кнопку

const form = createHTMLelement('form', 'create-user-form'); //Добавляем тег form и оборачиваем в него ранее созданные теги
form.append(...newTags);

body.prepend(form); //Результат - сейчас не так важна последовательность, закидываем тег первым



