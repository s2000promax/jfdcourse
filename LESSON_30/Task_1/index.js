const minRange = 1016;
const maxRange = 1937;

// Поскольку перебор массива работает медленнее, чем работа оператора for,
// предлагаю не заполнять массив элементами (числами - номерами билетов), 
// а перебрать непосредственно числа:

const luckyTicket = (minRange, maxRange) => {
  const luckyTicketArray = [];
  for (let currentNumber = minRange; currentNumber <= maxRange; currentNumber += 1) {
    if (
        currentNumber % 3 === 0
        && currentNumber % 7 === 0
        && currentNumber % 2 !== 0
        && currentNumber % 5 !== 0
        ) {
      luckyTicketArray.push(currentNumber);
    }
  }
  // Предположим, что массив с номерами билетов заполнен рандомно (неотсортирован по возрастанию,
  // а сейчас у нас получилось, что элементы попадали в массив от младщего в старшему).
  // Найдем максимальный номер билета:
  return luckyTicketArray.reduce(
    (previousNumber, currentNumber) => previousNumber > currentNumber ? previousNumber : currentNumber );
}

console.log(`Сэр! Ваш номер выигрышного билета ${luckyTicket(minRange, maxRange)}, постарайтесь не упустить удачу`);
