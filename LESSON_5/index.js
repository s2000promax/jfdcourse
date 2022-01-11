//Task 1
const myName = 'Stan'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Vladilen\'s'
const reasonText = 'it\'s my dream'
const numberOfMonth = 13

let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования 
${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.\n
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал 
${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`

console.log(myInfoText)

//Task 2

const textToFind = 'JavaScript'
myInfoText = myInfoText.replaceAll(textToFind, textToFind.toUpperCase())
const textLength = myInfoText.length

console.log(myInfoText)
console.log(`Text length: ${textLength} symbols`);
console.log('First symbol of text:', myInfoText[0]);
console.log('Last symbol of text:', myInfoText[textLength - 1]);
