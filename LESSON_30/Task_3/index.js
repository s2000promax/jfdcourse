
const unique = (array = []) => {
  if (array.length) {
    let uniqueArray = [];

    array.forEach( item => {
      if (!uniqueArray.some( uniqueElement => uniqueElement === item)) {
        uniqueArray.push(item);
      }
    })

    return uniqueArray;
  }
  return null;
}


console.log(unique()); // => null
console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3])); // => [1, 2, 4, 3, 7]
console.log(unique([3])); // => [3]