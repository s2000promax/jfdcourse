const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const todaysWinner = {
  prize: '10 000$',
}

const winnerApplicants = {
  '001': {
    name: 'Максим',
    age: 25,
  },
  '201': {
    name: 'Светлана',
    age: 20,
  },
  '304': {
    name: 'Екатерина',
    age: 35,
  },
}

const getWinner = (applicants, winnerObject, randomNumber) => {
  let result = {};
  let isWinner = false;
  const keyOfApplicants = Object.keys(applicants); //.map( str => str * 1) - не стал этого делать, т.к. ключ '001' - превратится в '1'

  while (!isWinner) {
    keyOfApplicants.forEach( number => {
      //Добавил + 1 в диапазон максимум, т.к. верхняя граница ни разу не выпадала, связано с окрулением...
      //Теперь у всех равные шансы выиграть
      //...keyOfApplicants - typeof String  - подсвечивает Warning. Пока оставлю это в таком виде
      if ( number * 1 === randomNumber(Math.min(...keyOfApplicants), Math.max(...keyOfApplicants) + 1) ) {
        isWinner = !isWinner;
        result = {
                   ...winnerObject,
                   ...applicants[number],
                  }
      }
    })
  }

  return result;
};

const resultWinner = getWinner(winnerApplicants, todaysWinner, getRandomNumberInRange);
console.log('resultWinner', resultWinner);
// { prize: '10 000$', name: 'Максим', age: 25 }