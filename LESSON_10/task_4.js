const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const giveJobToStudent = ({fullName}, jobName) => {
  console.log(`Поздравляем! У студента ${fullName} появилась новая работа! Теперь он ${jobName}`)
  return {
          ...student, //тут лучше spread оператора не придумать
          job: jobName,
          }
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log('source', student); //Объект student остался не тронутый, в исходном виде
console.log('result', updatedStudent); //Объединили student + новый ключ-значение
/*
updatedStudent = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    job: 'веб-разработчик',
}
*/