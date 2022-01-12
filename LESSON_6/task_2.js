let correctAnswers = 0
let incorrectAnswers = 0

const trueAnswer1 = 4
const trueAnswer2 = 4
const trueAnswer3 = 1
const trueAnswer4 = 12
const trueAnswer5 = 6

const userAnswer1 = Number(prompt('Сколько будет 2 + 2?').trim())
console.log(userAnswer1);
if (userAnswer1 === trueAnswer1) {
    alert('Ответ Верный')
    correctAnswers += 1
} else {
    alert('Ответ Неверный')
    incorrectAnswers += 1
}

const userAnswer2 = Number(prompt('Сколько будет 2 * 2?').trim())
if (userAnswer2 === trueAnswer2) {
    alert('Ответ Верный')
    correctAnswers += 1
} else {
    alert('Ответ Неверный')
    incorrectAnswers += 1
}

const userAnswer3 = Number(prompt(
`У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. 
Сколько яблок у Пети осталось?`
                          ).trim())
if (userAnswer3 === trueAnswer3) {
    alert('Ответ Верный')
    correctAnswers += 1
} else {
    alert('Ответ Неверный')
    incorrectAnswers += 1
}

const userAnswer4 = Number(prompt(
`У Маши было 10 конфет. 2 она съела, 1 отдала другу. 
После мама дала Маше еще 5 конфет. 
Сколько в итоге конфет осталось у Маши?`
                          ).trim())
if (userAnswer4 === trueAnswer4) {
    alert('Ответ Верный')
    correctAnswers += 1
} else {
    alert('Ответ Неверный')
    incorrectAnswers += 1
}

const userAnswer5 = Number(prompt('Сколько будет 2 + 2 * 2?').trim())
if (userAnswer5 === trueAnswer5) {
    alert('Ответ Верный')
    correctAnswers += 1
} else {
    alert('Ответ Неверный')
    incorrectAnswers += 1
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`)