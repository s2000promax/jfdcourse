const goals = [8, 1, 1, 3, 2, -1, 5];

//Нашёл информацию, что метод reduce работает медленее, чем обычный for.
// А так всё хорошо начиналось - освоил новый метод
// const indexOfBestMatch = (array=[]) => array.indexOf(array.reduce((previousValue, currentValue, index) =>
//       previousValue = previousValue > currentValue ? previousValue : currentValue, 0 ));
const indexOfBestMatch = (array = []) => array.indexOf(Math.max(...array));

const worstMatches = (array=[]) => {
  //Сюда будем складывать все найденные индексы худших матчей
  //Применим духмерный массив для хранения:
  //[0][...] - хранятся все НОМЕРА худших матчей
  //[1][...] - [хранятся все результаты худших матчей
  const arrayOfWorstMatches =[[],[]];

  //Находим минимальный элемент среди результатов >=0 (Пропускаем результаты с автопоражением)
  const minElement = Math.min(...array.filter( (filter) => filter >= 0));

  //Ищем индексы всех минимальных элементов
  let position = array.indexOf(minElement);
  while (position !== -1) {
    //Закидываем в массив НОМЕР худщего матча;
    arrayOfWorstMatches[0].push(position + 1);
    //Закидываем в массив результат худщего матчей;
    arrayOfWorstMatches[1].push(array[position])
    //Сдвигаем позицию поиска
    position = array.indexOf(minElement, position + 1);
  }

  return arrayOfWorstMatches;
}

const otherStatistics = (array) => {
  //Сюда будем складывать остальные данные по статистике в формате:
  // [0] - Общее количество голов за сезон
  // [1] - Были автоматические поражения? да/нет
  // [3] - Среднее количество голов за матч
  //
  //Уже позже пришла мысль, что можно всю статистику так упаковать, но делать этого не стал.
  //Решил создать функцию с callback-ми и собрать, как конструктор того, что мне нужно
  const arrayOfStatistics = [];
  arrayOfStatistics[0] = array.filter( (filter) => filter >= 0).reduce( (total, current) => total + current );
  arrayOfStatistics[1] = array.some( item => item < 0) ? 'да' : 'нет';
  arrayOfStatistics[2] = array.filter( (filter) => filter >= 0).reduce( (total, current, index, array) => {
    total += current;
    if (index === array.length - 1) {
      return Math.trunc(total/array.length);
    } else {
      return total;
    }
  });

  return arrayOfStatistics;
}

const getStatisticsOfSeason = (array, bestMatchCallback, worstMatchesCallback, otherStatisticsCallback) => {
  console.log(`Самый результативный матч был под номером ${bestMatchCallback(array) + 1}. В нем было забито ${array[bestMatchCallback(array)]} гол(ов).`);
  console.log(`Самые нерезультативные матчи были под номерами ${worstMatchesCallback(array)[0]}. В каждом из них было забито по ${worstMatchesCallback(array)[1]} мячу(а).`);
  console.log(`Общее количество голов за сезон равно ${otherStatisticsCallback(array)[0]}`);
  console.log(`Были автоматические поражения: ${otherStatisticsCallback(array)[1]}`);
  console.log(`Среднее количество голов за матч равно ${otherStatisticsCallback(array)[2]}`);
  console.log([...array].filter( item => item >=0).sort( (a, b) => a - b))
}

getStatisticsOfSeason(goals, indexOfBestMatch, worstMatches, otherStatistics);

