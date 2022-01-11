let number = 0 //1
console.log(Number(number), Boolean(number), String(number))

let bigint = 0n //1n
console.log(Number(bigint), Boolean(bigint), String(bigint))

let string = '' //'0' '1' 'Hello world'
console.log(Number(string), Boolean(string), String(string))

let isBoll = true //false
console.log(Number(isBoll), Boolean(isBoll), String(isBoll))

let object = {}
console.log(Number(object), Boolean(object), String(object))

let symbol = Symbol('id')
console.log(/*Number(symbol),*/ Boolean(symbol), String(symbol))

let nullType = null
console.log(Number(nullType), Boolean(nullType), String(nullType))

let undefinedType = undefined
console.log(Number(undefinedType), Boolean(undefinedType), String(undefinedType))