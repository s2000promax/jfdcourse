const javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'

const indexOfSlice = !(javaScriptDescription.length % 2) 
                    ? javaScriptDescription.length / 2
                    : Math.floor(javaScriptDescription.length / 2)

let resultString = javaScriptDescription.slice(1, indexOfSlice)
                     .replaceAll('а', 'А') //Rus
                     .replaceAll('a', 'A') //En
                     .replaceAll(' ', '')
                     .repeat(3)

const indexOfMiddle = !(resultString.length % 2) 
? resultString.length / 2
: Math.floor(resultString.length / 2)

console.log(resultString[indexOfMiddle])
            