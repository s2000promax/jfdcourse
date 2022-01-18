const numbers = [10, 4, 100, -5, 54, 2];
let cubicSum = 0;

//for
for (let index = 0; index < numbers.length; index += 1) {
  cubicSum += (numbers[index] ** 3);
}
console.log('By "for". Cubic sum:', cubicSum);

//for of
cubicSum = 0;

for(const item of numbers) {
  cubicSum += (item ** 3);
}
console.log('By "for of". Cubic sum:', cubicSum);

//forEach
cubicSum = 0;
numbers.forEach( value => cubicSum += (value ** 3) );
console.log('By "forEach". Cubic sum:', cubicSum);

//reduce
//cubicSum = 0; // в этом случае не обязательно обнулять значение, но лучше обнулить
cubicSum = numbers.reduce( (total, current) => total + (current ** 3), 0);
console.log('By "reduce". Cubic sum:', cubicSum);
