const getDivisorsCount = (number = 1) => {
  let resultByAllDivisors = '';
  let divisor = 1;
  let divisorsCounter = 0;

  if (!Number.isInteger(number) || number < 1) {
    alert(`Number ${number} должен быть целым числом и больше нуля!`)

    return -1;
  } else {
    while (divisor <= number) {
      if (!(number % divisor)) {
        resultByAllDivisors += divisor !== number ? divisor + ', ' : divisor;
        divisorsCounter += 1;
      }
      divisor += 1;
    }

    return `Return ${divisorsCounter} (divisors - ${resultByAllDivisors})`;
  }
}

console.log(getDivisorsCount(4));
console.log(getDivisorsCount(5));
console.log(getDivisorsCount(12));
console.log(getDivisorsCount(30));