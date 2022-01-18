const clientsEstimations = [];

const askClientToGiveEstimation = () => {
  const rating = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?').trim());
  if (!Number.isInteger(rating) || rating < 1 || rating > 10) {
    alert('Неверный ввод, ваша оценка не будет учтена');

    return null;
  } else {

    return rating;
  }
}

//Применил do...while, чтобы обязать клиента поставить 5-ть оценок,
// хотя многие не любят опросы и будут ненавидеть эту кофейню)),
// т.к. проще ввести фейковые данные (типа: йцукен) и быстро покинуть опрос,
// но нам нужна честная статистика
do {
  const clientAnswer = askClientToGiveEstimation();
  if (!!clientAnswer) {
    clientsEstimations.push(clientAnswer);
  }

} while (clientsEstimations.length < 5);

//###- это типа метки, что это debug console.log и его можно безболезненно удалить
console.log('###-result Array:', clientsEstimations)

const notGoodEstimations = clientsEstimations.filter( value => {return value <= 5}).length;
const goodEstimations = clientsEstimations.filter( value => {return value > 5}).length;

alert(`Алексей, нравится тебе это или нет, но всего положительных оценок: ${goodEstimations}, всего отрицательных оценок: ${notGoodEstimations}`)

