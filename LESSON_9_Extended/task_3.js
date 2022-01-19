const array = [[],[],[]];

for (let row = 0; row < 3; row += 1) {
  for (let col = 0; col < 5; col += 1) {
     array[row][col] = col + 1;
  }
}

console.log(array);