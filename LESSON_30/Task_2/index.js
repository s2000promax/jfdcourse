
const isEqualSymbols = (str1, str2) => {
  if (str1.length === str2.length) { //Первое условие сравнения
    for (let index = 0; index < str1.length; index += 1) {

      if (!str2.split('').some( item => item === str1[index])) { //Первое true. Второе условие сравнения
        return false;
      }

        }
  } else {
    return false;
  }
  return true;
}

console.log(isEqualSymbols('адрес', 'среда')) // true
console.log(isEqualSymbols('ноутбук', 'программист')) // false