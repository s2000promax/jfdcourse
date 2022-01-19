const formatExpression = expression => {
  const dictionaryArray = ['>', '<', '=', '+', '-', '*', '/'];
  let isArgumentA = false;
  let isArgumentB = false;
  let isOperation = false;
  let isError = false;
  const tempArray = [...expression];
  expression = [];

  if (tempArray.length) {
    let index = 0;
    while (!(isArgumentA && isArgumentB && isOperation) && !isError) {
      //Ищем аргумент A
      if (!isNaN(Number(tempArray[index])) && !isArgumentA) {
        expression[0] = Number(tempArray[index]);
        isArgumentA = true;
        //Ищем аргумент B
      } else if (!isNaN(Number(tempArray[index])) && !isArgumentB) {
        expression[2] = Number(tempArray[index]);
        isArgumentB = true;
        //Ищем аргумент символ операции
      } else if (isNaN(Number(tempArray[index])) && !isOperation) {
        //Пробегаемся по словарю символов, определяем является ли текущий символ знаком для доступной операции
        for (let symbol of dictionaryArray) {
          if (tempArray[index] === symbol) {
            expression[1] = tempArray[index];
            isOperation = true;
          }
        }
      }
      index += 1;
      if (index > tempArray.length) {
        isError = true;
      }
    }
    if (isError) {
      // console.log('###-Symbol or Number not found')
      return -1;
    }
  } else {
    return -1;
  }

  return expression;
}

const getMathResult = (expression, formatCallback) => {
  let result;

  expression = formatCallback(expression);
  // console.log('###-expression', expression)

  if (expression === -1) {
    result = 'ошибка'
  } else {
    const A = Number(expression[0]);
    const B = Number(expression[2]);

    switch (expression[1]) {
      case '>': result = Boolean(A > B);
        break;
      case '<': result = Boolean(A < B);
        break;
      case '=': result = Boolean(A === B);
        break;
      case '+': result = A + B;
        break;
      case '-': result = A - B;
        break;
      case '*': result = A * B;
        break;
      case '/': result = !!B ? A / B : 'Я этого делать не буду! (Infinity)';
        break;
      default:
        result = 'Ошибка';
        break;
    }
  }
  //Вывод результата в консоль
  console.log(result);
}

getMathResult(['200', '+', 300], formatExpression); // 500
getMathResult(['20', '-', '5'], formatExpression); // 15
getMathResult([100, '/', 100], formatExpression); // 1
getMathResult([2, '-', 2], formatExpression); // 0
getMathResult(['5', '>', '10'], formatExpression); // false
getMathResult(['5', '<', '10'], formatExpression); // true
getMathResult(['1', '=', 1], formatExpression); // true
getMathResult(['1', '**', 1], formatExpression); // 'Ошибка'
getMathResult(['200', '/', 0], formatExpression); //Infinity
getMathResult(['1d','-', '++', '2', 'd', '1d', '1', '+'], formatExpression); // 1
getMathResult(['1d','-', '++', '20', 'd', '1d', 'd', 1], formatExpression); // 19
getMathResult(['1d','-', '++', 'ddd2', 'd', '1d', '1', '+'], formatExpression); // ошибка
getMathResult(['1d','-', '++', 'ddd2', 'd', '1d', 'ввв', '+'], formatExpression); // ошибка
getMathResult(['1d','-', '++', 'ddd2', 'd', '1d', 'ввв', '++'], formatExpression); // ошибка
