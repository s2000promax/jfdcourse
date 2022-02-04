// Предположим, что игра получит успех - и выйдет продолжение,
// где у игровых элементов появятся новые виды оружия,
// поэтому не будем привязыватья к конктретным видам и количествам вооружения
// и вытащим их в отдельный массив (но это как допущение)
// Так же, допускаем, что количество и типа вооружения у всех игровыъ элементов одинаков
// Решение будет основано на динамической обработке вооружения (ключей)
// Для этого воспользуемся вспомогательным методом getWeaponsKeys - делает выборку из ключей объекта, исключая методы

const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  rockets: 8, //Теперь можем добавлять любое кол-во вооружения, но одновременно в два объекта!

  checkChancesToWin(defenderObject) {

    // Формат хранения в массиве:
    // 0 - текущие шансы на победу
    // 1 - значение максимального шанса на захват (количество ключей в объекте defenderObject === this)
    return [
      this.getWeaponsKeys().reduce( (total, key) => total + (this[key] > defenderObject[key] ? 1 : 0), 0 ),
      this.getWeaponsKeys(defenderObject).length //Можно было бы принять длину this-объекта, потому, как допустили, что количество ключей у обоих объекстов совпадают, но оставим это так в виду универсальности метода
    ]
  },

  improveArmy() {
    //Увеличиваем каждое вооружение на 5 единиц
    this.getWeaponsKeys().forEach( key => this[key] += 5 );
  },

  attack(defenderObject) {
    //Определяем универсальную шкалу 0...100%, переводим шансы из единиц "n из N" в % (проценты)
    const [ourArmyChances, maximumChances] = this.checkChancesToWin(defenderObject)
    const chancesToPercent = Math.round(100 / maximumChances * ourArmyChances);
    // console.log('###-chancesToPercent', chancesToPercent)

    if (chancesToPercent < 70) {
      this.improveArmy();

      return `Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`;
    } else {

      return `Мы усилились! Мы несомненно победим! Наши шансы высоки!`;
    }
  },

  //Вспомогательный метод, чтобы избежать дублирования кода. Собираем все вооружения в виде ключей
  getWeaponsKeys(someObject = this) {
    return Object.keys(someObject).filter( key => typeof someObject[key] !== 'function');
  },
}

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
  rockets: 80,
}

console.log(attacker.attack(defender));
console.log(attacker.attack(defender));
console.log(attacker.attack(defender));
console.log(attacker.attack(defender));
console.log(attacker.attack(defender));
console.log(attacker.attack(defender));
console.log(attacker.attack(defender));
console.log(attacker.attack(defender));