const coffees = ['Latte', 'Cappuccino', 'Americano'];

const coffeeName = prompt('Поиск кофе по названию: (Latte, Cappuccino, Americano)').trim().toLowerCase();

const indexOfCoffee = coffees.findIndex(coffeeNameItem => {
  return coffeeNameItem.toLowerCase() === coffeeName;
})

if (indexOfCoffee !== -1) {
  alert(`Держите ваш любимый кофе ${coffees[indexOfCoffee]}. Он ${indexOfCoffee + 1}-й по популярности в нашей кофейне.`);
} else {
  alert(`К сожалению, такого вида кофе нет в наличии`);
}

//Второй вариант с функцией, для сравнения, как будет выглядеть код //Наверное сложнее для восприятия
/*
const indexOfCoffee = coffeeName => coffees.findIndex(coffeeNameItem => {
  return coffeeNameItem.toLowerCase() === coffeeName;
})

if (indexOfCoffee(coffeeName) !== -1) {
  alert(`Держите ваш любимый кофе ${coffees[indexOfCoffee(coffeeName)]}. Он ${indexOfCoffee(coffeeName) + 1}-й по популярности в нашей кофейне.`);
} else {
  alert(`К сожалению, такого вида кофе нет в наличии`);
}
 */