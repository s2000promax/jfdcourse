//Из допущений -не анализируем случай, если нет совпадений - просто пустая строка, чтобы не перегружать код

const getKiller = (suspectInfo, deadPeople) => {
  // Формат хранения:
  // первый индекс [] - порядковый номер подозреваемого
  // второй индекс [] - заполняется именем подозреваемого при совпадении при опознании
  // (названия условные)
  const isKiller = [[],[]];

  //Вспомогательный массив ключей (имена подозреваемых)
  const keysOfSuspect = Object.keys(suspectInfo);

  //Главный цикл обработки подозреваемых
  for (let index = 0; index < keysOfSuspect.length; index += 1) {
    suspectInfo[keysOfSuspect[index]].forEach( (item) => {
      deadPeople.forEach( body => {
        if (body === item) {
          isKiller[index].push(keysOfSuspect[index]); //Если подозреваемый засветился в день убийства - попадает в учёт
        }
      })
    } )
  }
    console.log('###- isKiller', isKiller);

  // Анализируем результат
  // (не знаю на сколько это допустимо и как это выглядит со стороны?)
  return isKiller.filter( (someArray) => someArray.length === deadPeople.length ).shift().shift();
}

let result = getKiller(
  {
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle'],
  },
  ['Lucas', 'Bill']
);
console.log('result 1:' , result);
// Убийца James

result = getKiller(
  {
    'Brad': [],
    'Megan': ['Ben', 'Kevin'],
    'Finn': [],
  },
  ['Ben']
);
console.log('result 2:' , result);
// Убийца Megan

result = getKiller(
  {
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['Bill', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle'],
  },
  ['Lucas', 'Bill']
);
console.log('result 3:' , result);
// Убийца James, Johnny