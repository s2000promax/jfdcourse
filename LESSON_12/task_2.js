const dog = {
  name: 'Чарли',
  type: 'Собака',
  makeSound() {
    return 'Гав-Гав';
  }
}

const bird = {
  name: 'Петя',
  type: 'Воробей',
  makeSound() {
    return 'Чик-чирик';
  }
}

function makeDomestic(isDomestic) {
  console.log('###-this-?', this);
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);

  return {...this, isDomestic};
}

// const newMakeDomestic = makeDomestic.bind(dog, true);  //...полная запись
// console.log('Result with bind():', newMakeDomestic());
console.log('Result with bind():', makeDomestic.bind(dog, true)()); //Наконец-то я понял эту запись bind

console.log('Result with call():', makeDomestic.call(bird, false));
console.log('Result with apply():', makeDomestic.apply(bird, [false]));