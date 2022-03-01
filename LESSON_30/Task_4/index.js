
const isPalindrome = string => string === string.split('').reverse().join('');

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('programmer')); // false