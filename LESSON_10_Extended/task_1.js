const groceries = {
    "Orange Juice": {
        price : 1.5,
        discount: 10,
    },
    "Chocolate": {
        price : 2,
        discount : 0,
    },
    "Bananas": {
        price : 0.75,
        discount : 20,
    },
    "Coca-cola": {
        price : 1.5,
        discount : 3,
    },
    // more items...
}

// С одной стороны, по заданию, в функцию мы передаём один параметр,
// с другой, стороны, чтобы функция была автономна и не обращалсь к данным извне
// предалагаю, закинуть в неё глобальный каталог продуктов, вторым параметром,
// останавливает только одно, что каталог может быть большого размеры и
// нужно ли это всё функции...Посмотрим походу решения задачи...

const getTotalPriceOfShoppingBag = (shoppingBag, allProducts) => {
    // Для наглядности заведем промежуточный массив, чтобы потом, по красоте,
    // пробежаться по мнему и методом reduce вытащить общую сумму.
    // Еще, я бы так и оставил промежуточный массив,
    // чтобы вытягивать и другие данные в чек (например скидки, бонусы...)
    const preResultArray = [];

    // Функция расчёта стоимости:
    // На сколько хорошо, вот так прописывать свойства .price и .discount??? Это вообще, законно?
    // A - товар, передается как объект
    // B - количество
    const costOfItemMath = (A, B) => Number(((A.price - (A.price * A.discount) / 100 )  * B).toFixed(2));

    // Вытащим значения ключа product -> и будем использовать его как ключ для поиска в allProducts
    shoppingBag.forEach( ({product, quantity}) => {
        preResultArray.push(
          {
              product,                 //Название продукта, будет нужно только для формирования печатной формы чека, например
              ...allProducts[product],
              quantity,
              costOfItem : costOfItemMath(allProducts[product], quantity),
          }
        )
    });
    //console.log('Your bill:', preResultArray);
return preResultArray.map( ({costOfItem}) => costOfItem).reduce( (previousValue, currentValue) => previousValue + currentValue );
}

let shoppingBag = [
    { product: 'Chocolate', quantity: 3 },
    { product: 'Orange Juice', quantity: 23 },
]

let totalPrice = getTotalPriceOfShoppingBag(shoppingBag, groceries);
console.log('totalPrice 1:', totalPrice); // Возвращает 37.05

shoppingBag = [
    { product: 'Chocolate', quantity: 3 },
    { product: 'Orange Juice', quantity: 23 },
    { product: 'Bananas', quantity: 2 },
    { product: 'Coca-cola', quantity: 5 },
]

totalPrice = getTotalPriceOfShoppingBag(shoppingBag, groceries);
console.log('totalPrice 2:', totalPrice); // Возвращает 45.53

