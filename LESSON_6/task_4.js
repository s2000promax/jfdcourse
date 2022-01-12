let i = 0

//while
while (i < 3)
 {
    let newStudent = prompt('Введите имя нового студента!')
    newStudent = newStudent.trim()
    if (newStudent) {
       alert(`Добро пожаловать, ${newStudent}!`)
    }
    i += 1
 }

 i = 0

 //do...while
do
 {
    let newStudent = prompt('Введите имя нового студента!')
    newStudent = newStudent.trim()
    if (newStudent) {
       alert(`Добро пожаловать, ${newStudent}!`)
    }
    i += 1
 } while (i < 3)
