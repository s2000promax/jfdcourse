// 1
console.log(Number(' 1 2 3 4 5')); //NAN
// 2
console.log(Number('1234 5')); //NAN
// 3
console.log(Number('12345')); // 12345 as Number
// 4
console.log(String(false)); // false as String
// 5
console.log(Boolean(0000000)); // false as Boolean
// 6
console.log(Boolean(0.0000001)); // true as Boolean
// 7
console.log(String(undefined)); // undefined as String
// 8
console.log(Number('100f')); // NAN
// 9
console.log(Number('100')); // 100 as Number
// 10
console.log(Number('000001')); // 1 as Number