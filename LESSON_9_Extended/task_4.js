//Объявляем массив как let, чтобы работал способ №2 - будем менять его структуру
let matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
];

//Способ №1. Классический перебор
const newArray = [];

for (let row = 0; row < 3; row += 1) {
  for (let col = 0; col < 3; col += 1) {
    newArray.push(matrix[row][col])
  }
}
console.log('newArray, 1 способ', newArray);

//Способ №2. Разбиваем на подмассивы
const arr1 = matrix.shift();
const arr2 = matrix.shift();
const arr3 = matrix.shift();
//Склеиваем
matrix = [...arr1, ...arr2, ...arr3]

console.log('newArray, 2 способ', matrix)
