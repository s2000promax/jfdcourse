const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const hero = {
    name: 'Batman',
    health: 100,
    heatEnemy: function (playerObject) {
        playerObject.health -= 10;
    },
}

const enemy = {
    name: 'Joker',
    health: 100,
    heatHero: function (playerObject) {
        playerObject.health -= 10;
    },
}

const startGame = (heroObject, enemyObject, randomNumber) => {

    while (heroObject.health > 0 && enemyObject.health > 0) {
        if (!!randomNumber(0, 1)) {
            enemyObject.heatHero(heroObject); //Отнимаем здоровье у противника
        } else {
            heroObject.heatEnemy(enemyObject); //Отнимаем здоровье у противника
        }
    }

    return heroObject.health <= 0 ? {
                                      name: enemyObject.name,
                                      health: enemyObject.health,
                                    }
                                    : {
                                         name: heroObject.name,
                                         health: heroObject.health,
                                        }
}

//Вывод результата
const {name, health} = startGame(hero, enemy, getRandomNumberInRange);
console.log(`${name} победил! У него осталось ${health} здоровья`);

