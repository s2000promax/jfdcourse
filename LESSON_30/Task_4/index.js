
const isPalindrome = string => {
  if (string) {
    if (string === string.split('').reverse().join('')) {
      return true;
    }

    return false;
  }

  return null;
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('programmer')); // false