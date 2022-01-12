const existedUserLogin = 'the_best_user'
const existedUserPassword = '12345678'

const userLogin = prompt('Введите логин').trim()
const userPassword = prompt('Введите пароль').trim()

/*
if (userLogin !== existedUserLogin) {
    alert('Логин и (или) Пароль введены неверно!')
} else if (userPassword !== existedUserPassword) {
    alert('Логин и (или) Пароль введены неверно!')
} else alert(`Добро пожаловать, ${userLogin}!`)
*/

/*
if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
    alert(`Добро пожаловать, ${userLogin}!`)
} else {
    alert('Логин и (или) Пароль введены неверно!')
}
*/

/*
const message = userLogin === existedUserLogin && userPassword === existedUserPassword 
? `Добро пожаловать, ${userLogin}!`
: 'Логин и (или) Пароль введены неверно!'

alert(message)
*/

alert(
    userLogin === existedUserLogin && userPassword === existedUserPassword 
    ? `Добро пожаловать, ${userLogin}!`
    : 'Логин и (или) Пароль введены неверно!'
)