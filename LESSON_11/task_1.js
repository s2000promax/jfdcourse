const getZeroFormat = dateObject => dateObject.toString().length > 1 ? dateObject : '0' + dateObject;

const getDateFormat = (dateObject, separator, format) => {
  //С этого всё началось
  /*
  const day = dateObject.getDate();
  const month = dateObject.getMonth();
  const year = dateObject.getFullYear();

  switch (separator) {
    case '-': return `${format(day)}-${format(format(month))}-${format(year)}`;
    default: return `${format(day)}.${format(format(month))}.${format(year)}`;
  }
   */

  //Закончилось оптимизацией с универсальностью
  const stringArrDate = [dateObject.getDate(), dateObject.getMonth() + 1, dateObject.getFullYear()];
  const [d, m, y] = [0, 1, 2]; //Управляем порядком отображения.
                               // 0, 1, 2 dd-mm-yyyy
                               // 2, 1, 0 yyyy-mm-dd
                               // 2, 0, 1 yyyy-dd-mm
                               // 0, 2, 1 dd-yyyy-mm
                               // 1, 2, 0 mm-yyyy-dd
                               // 1, 0, 2 mm-dd-yyyy

  separator = separator === '-' ? separator : '.'; //Определяем в каком формате оставить разделитель

  //Получем одну универсальную строку для возврата из функции
  return `${format(stringArrDate[d])}${separator}${format(stringArrDate[m])}${separator}${format(stringArrDate[y])}`;
}

const result1 = getDateFormat(new Date, '-', getZeroFormat); //Separator - "-"
console.log('result 1:', result1);

const result2 = getDateFormat(new Date, '', getZeroFormat); //Separator - любое значение
console.log('result 2:', result2);
