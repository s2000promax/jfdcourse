const clientName = 'Игорь'
let clientSpentForAllTime = 110
let discount = 0
let clientSpentToday = 25

//Определяем текущий уровень скидки для клиента
if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10
    alert(`Вам предоставляется скидка в ${discount}%!`)
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20
    alert(`Вам предоставляется скидка в ${discount}%!`)
} else if (clientSpentForAllTime >= 500) {
    discount = 30
    alert(`Вам предоставляется скидка в ${discount}%!`)
}

//Выставляем счёт на текущую покупку с учётом скидки
clientSpentToday -= clientSpentToday * discount / 1000

//Обновляем уровень клиента для будующих скидок 
//Я бы перенёс эту строку за alert, т.к. нет подтверждения текущей оплаты
clientSpentForAllTime += clientSpentToday

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)