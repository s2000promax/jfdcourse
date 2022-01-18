const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map( price => {
  return price + 0.5
} )

coffees.forEach( (nameOfCoffee,index) => {
  return console.log(`Кофе ${nameOfCoffee} сейчас стоит ${updatedPrices[index]} евро`)
} );