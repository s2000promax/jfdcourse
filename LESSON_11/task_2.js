const convertMsToDays = ms => Math.trunc(ms / 1000 / 60 / 60 / 24); //  Number / ms / s / m / h => day

const getDaysBeforeBirthday = (nextBirthdayDate, convertorToDays) => {
  //Для универсальности, можно устроить проверку строки на дату,
  //с вытаскиванием символа разделителя - для передачи символа разделителя в метод split
  //Но не будем перенасыщать код. Используем формат dd.mm.yyyy и разделитель "." (либо Date.parse())
  const date = nextBirthdayDate.trim().split('.').reverse();
  //trim() - если вдруг на вход придет строка из пользовательского ввода
 const result = convertorToDays(new Date(date[0] * 1, date[1] - 1, date[2] * 1).getTime() - Date.now());
  // * 1 - неявное преобразование к Number, чтобы IDE не подсвечивало ошибку

  return result === 0 ? 'Ваш день рождения сегодня! Поздравляем!'
                    : result > 0 ? `Ваш день рождения через ${result} дня/дней`
                    : `Ваш день рождения прошел ${Math.abs(result)} дня/дней назад`;
  //result === 0 - выпадает, только в первой половине дня ))) до полудня, поэтому применим в функции convertMsToDays()
  //не округение, а отбрасывание дробной части. Но это тоже допущение, чтобы не перенасыщать код
}

const result1 = getDaysBeforeBirthday('30.01.2022', convertMsToDays);
const result2 = getDaysBeforeBirthday('15.01.2022', convertMsToDays);
const result3 = getDaysBeforeBirthday('26.01.2022', convertMsToDays);
console.log('result 1: ',result1);
console.log('result 2: ',result2);
console.log('result 3: ',result3);