const password = prompt('Введите пароль') //Про очишение от пробелов в условии не сказано, trim не применяем
let isValid = false
let isNumber = false
let isCapital = false

if (password) {
  //console.log('###-1')
  if (password.length >= 3 && password.length <= 20) {
    //console.log('###-2')
    for (let item = 0; item < password.length; item += 1) {
       //console.log('###-char:', password.charAt(item))
      if (!isNaN(password.charAt(item) * 1)) {
          isNumber = true
          //console.log('###-isNumber:',isNumber)  
       } else if (password.charAt(item) == password.charAt(item).toUpperCase()) {
          isCapital = true
          //console.log('###-isCapital:', isCapital)
          } 
    }
  }
}
isValid = isNumber && isCapital
//console.log('###-5, isValid:', isValid)
if (isValid) {
  alert('Пароль валидный. Добро пожаловать в аккаунт!')
} else
  alert(
    'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.'
  )
