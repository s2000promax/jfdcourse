const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" },
];

//Решение не универсальное, корректный результат только при (ordersArr.length === people.length)
//Можно реализовать решение, когда квота на номерки больше, чем пришло поциентов (остаются свободные
//номерки) или наборот, квота меньше - такие-то id сегодня не попали в очередь
const giveTalonsInOrder = (arrayOfPeople, arrayOfOrders) => {
    const arraySorted = [];
    arrayOfOrders.forEach( itemOfOrder => arraySorted.push( arrayOfPeople.find( itemObject => itemObject.id === itemOfOrder ) ) );

    return arraySorted;
}

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);
/* Возвращает массив
[
   { id: 4, name: 'Виталий' },
   { id: 2, name: 'Николай' },
   { id: 1, name: 'Максим' },
   { id: 3, name: 'Ангелина' }
]
*/

//Второй вариант решения, который не давал мне покоя
//Когда мы принимаем, что ordersArr.length === people.length, массивы взаимозависимы
//И сортируем по массиву ordersArr, допуская, что исходный
//массив people был отсортирован (индекс 0 объекта соответсвует id = 1 и т.д.)
const giveTalonsInOrder2 = (arrayOfPeople, arrayOfOrders) => arrayOfOrders.map( item => arrayOfPeople[item - 1] );

const result2 = giveTalonsInOrder2(people, ordersArr);
console.log('result2', result2);