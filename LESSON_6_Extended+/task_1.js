const string = prompt('Введите строку').trim();

//For test
//const string = 'тАгДеН'
//const string = 'та4г';
// const string = 'та9г';
//const string = 'та999г';
//const string = '10а';
//const string = 'а9';
// const string = 'а111';

const dictionary = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
let result = '';
let counterLowerCaseStrings = 0;
let counteUpperCaseStrings = 0;

let indexOfNumber = 0;
let foundNumber = '';

for (let index = 0; index < string.length; index += 1) {
  //Проверяем на Number
  if (!isNaN(string[index])) {
    //Выделяем цифру, составляем число
    do {
      foundNumber += '' + string[index];
      index += 1;
    } while (!isNaN(string[index]));
    //console.log('###-foundNumber', foundNumber);
    //Если за числом есть символ выполняем условие по п.4
    if (string[index] !== undefined) {
      //Если число найдено и < 10, делаем реверс символов в кол-ве foundNumber
      if (foundNumber && foundNumber < 10) {
        let reversString = ''; // Реверсная строка
        let indexOfRevers = null;
        //Определение индекса символа, расположенного за числом
        for (let i = 0; i < dictionary.length; i += 1) {
          if (
            string[index] === dictionary[i] ||
            string[index] === dictionary[i].toLowerCase()
          ) {
            indexOfRevers = i;
          }
        }
        indexOfRevers += dictionary.length - foundNumber;
        //console.log('###-indexOfRevers define:', indexOfRevers);

        //Заполняем Реверсную строку
        while (foundNumber > 0) {
          reversString +=
            indexOfRevers < dictionary.length
              ? dictionary[indexOfRevers]
              : dictionary[indexOfRevers - dictionary.length].toLowerCase();
          foundNumber -= 1;
          indexOfRevers += 1;
        }
        //console.log('###-reversString:', reversString);
        //Склеиваем результат текущий rusult + reversString + Символ после числа
        result += reversString + string[index];
      } //End of if ( < 10) { }

      //Если число найдено и >= 10, делаем реверс символов в кол-ве foundNumber
      if (foundNumber && foundNumber >= 10 && foundNumber <= 999) {
        let forwardString = ''; // Реверсная строка
        let indexOfForward = null;
        //Определение индекса символа, расположенного за числом
        for (let i = 0; i < dictionary.length; i += 1) {
          if (
            string[index] === dictionary[i] ||
            string[index] === dictionary[i].toLowerCase()
          ) {
            indexOfForward = i + 1;
          }
        }
        //console.log('###-indexOfForward define:', indexOfForward);

        //Заполняем Прямую строку
        let isLowerCase = true;
        while (foundNumber > 0) {
          forwardString += isLowerCase
            ? dictionary[indexOfForward].toLowerCase()
            : dictionary[indexOfForward];
          foundNumber -= 1;
          indexOfForward += 1;
          if (indexOfForward > dictionary.length - 1) {
            indexOfForward = 0;
            isLowerCase = !isLowerCase;
          }
        }

        //console.log('###-forwardString:', forwardString);

        //Склеиваем результат текущий rusult + Символ после числа + forwardString
        result += string[index] + forwardString;
      } //End of if ( >= 10 && <= 999) { }

      if (foundNumber && foundNumber > 999) {
        alert(
          `Number ${foundNumber} big so much. Please restart and enter number less 1000`
        );
      } //End of if ( > 999) { }

      foundNumber = '';
    } //End of if ( string[index] !== undefined) { }
    else {
      //Если цифра находилась в конце строки
      // ==========================================================Дублеж кода
      //Если число найдено и < 10, делаем реверс символов в кол-ве foundNumber
      if (foundNumber && foundNumber < 10) {
        let reversString = ''; // Реверсная строка
        let indexOfRevers = null;
        //Определение индекса символа, расположенного за числом
        for (let i = 0; i < dictionary.length; i += 1) {
          if (
            string[index] === dictionary[i] ||
            string[index] === dictionary[i].toLowerCase()
          ) {
            indexOfRevers = i;
          }
        }
        indexOfRevers += dictionary.length - foundNumber;
        //console.log('###-indexOfRevers define:', indexOfRevers);

        //Заполняем Реверсную строку
        while (foundNumber > 0) {
          reversString +=
            indexOfRevers < dictionary.length
              ? dictionary[indexOfRevers]
              : dictionary[indexOfRevers - dictionary.length].toLowerCase();
          foundNumber -= 1;
          indexOfRevers += 1;
        }
        //console.log('###-reversString:', reversString);
        //Склеиваем результат текущий rusult + reversString + Символ после числа
        result += reversString;
      } //End of if ( < 10) { }

      //Если число найдено и >= 10, делаем реверс символов в кол-ве foundNumber
      if (foundNumber && foundNumber >= 10 && foundNumber <= 999) {
        let forwardString = ''; // Реверсная строка
        let indexOfForward = null;
        //Определение индекса символа, расположенного за числом
        for (let i = 0; i < dictionary.length; i += 1) {
          if (
            string[index - 1 - foundNumber.length] === dictionary[i] ||
            string[index - 1 - foundNumber.length] ===
              dictionary[i].toLowerCase()
          ) {
            indexOfForward = i + 1;
          }
        }
        //console.log('###-indexOfForward define:', indexOfForward);

        //Заполняем Прямую строку
        let isLowerCase = true;
        while (foundNumber > 0) {
          forwardString += isLowerCase
            ? dictionary[indexOfForward].toLowerCase()
            : dictionary[indexOfForward];
          foundNumber -= 1;
          indexOfForward += 1;
          if (indexOfForward > dictionary.length - 1) {
            indexOfForward = 0;
            isLowerCase = !isLowerCase;
          }
        }
        //console.log('###-forwardString:', forwardString);

        //Склеиваем результат текущий rusult + Символ после числа + forwardString
        result += forwardString;
      } //End of if ( >= 10 && <= 999) { }
      //End of=====================================================Дублеж кода

      foundNumber = '';
    } //Enf of else if ( string[index] !== undefined) { }
  } else {
    if (string[index] === string[index].toUpperCase()) {
      for (let i = 0; i < dictionary.length; i += 1) {
        if (string[index] === dictionary[i]) {
          result += dictionary[dictionary.length - 1 - i].toLowerCase();
        }
      }
      // console.log('###-Capital:', string[index]);
    } else {
      result += string[index];
    }
  }
}

const numberOfLowerCaseStringFind = Number(
  prompt('Введите длину для поиска подстроки в нижнем регистре').trim()
);
const numberOfUpperCaseStringFind = Number(
  prompt('Введите длину для поиска подстроки в верхнем регистре').trim()
);

//For test

// const numberOfLowerCaseStringFind = 2;
// const numberOfUpperCaseStringFind = 2;

if (isNaN(numberOfLowerCaseStringFind) || isNaN(numberOfUpperCaseStringFind)) {
  alert(
    'Перегрузите страницу и введите данные корректно (число должно быть Number)'
  );
} else {
  //Заполняем шаблоны для поиска вхождений
  //Для LowerCase
  let templateLowerCaseString = '';

  //формируем подстроку поиска динамически
  for (let i = 0; i < dictionary.length - numberOfLowerCaseStringFind; i += 1) {
    for (let j = 0; j < numberOfLowerCaseStringFind; j += 1) {
      templateLowerCaseString += dictionary[i + j].toLowerCase();
    }

    //Считаем вхождения
    let pos = result.indexOf(templateLowerCaseString);
    while (pos !== -1) {
      counterLowerCaseStrings += 1;
      pos = result.indexOf(templateLowerCaseString, pos + 1);
    }

    i += numberOfLowerCaseStringFind - 1;
    templateLowerCaseString = '';
  }
  //console.log('####-includesLowerCase', counterLowerCaseStrings);

  //Для UpperCase
  let templateUpperCaseString = '';

  //формируем подстроку поиска динамически
  for (let i = 0; i < dictionary.length - numberOfUpperCaseStringFind; i += 1) {
    for (let j = 0; j < numberOfUpperCaseStringFind; j += 1) {
      templateUpperCaseString += dictionary[i + j];
    }

    //Считаем вхождения
    let pos = result.indexOf(templateUpperCaseString);
    while (pos !== -1) {
      counteUpperCaseStrings += 1;
      pos = result.indexOf(templateUpperCaseString, pos + 1);
    }

    i += numberOfUpperCaseStringFind - 1;
    templateUpperCaseString = '';
  }

  console.log('Введенная строка:', string);
  console.log('Измененная строка:', result);
  console.log(
    `Количество подстрок с ${numberOfLowerCaseStringFind} подряд идущими символами в нижнем регистре:`,
    counterLowerCaseStrings
  );
  console.log(
    `Количество подстрок с ${numberOfUpperCaseStringFind} подряд идущими символами в верхнем регистре:`,
    counteUpperCaseStrings
  );
}
