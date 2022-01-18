const checkQuestionAnswer = (question='', correctAnswer = '') => {

  const userAnswer = prompt(question).trim();
  const answerAlert = correctAnswer.toLowerCase() === userAnswer.toLowerCase() ? 'верный' : 'неверный';

  alert(`Ответ ${userAnswer} - ${answerAlert}`);
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');