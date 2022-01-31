const STACKS = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

//Вариант 1. По заданию...

const student = {
  stack : ['HTML'],
  level : 1,
  improveLevel() {
    if (this.level++ >= 5) {
      console.log('Студент выучил все технологии!');
    } else {
      this.stack.push(STACKS[this.level - 1]);
      console.log('level', this.level, 'stack', this.stack.join(', '));
    }

    return this;
  },
}
console.log('###- var.1');

student
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel();

console.log('result 1:',student);


//Вариант 2. Потеря контекста + передача аргумента в функцию методом call()

const student2 = {
  stack : ['HTML'],
  level : 1,
  improveLevel(constArray) {
    // console.log('###-this?', this, 'otherArg:', constArray[this.level]);
    if (this.level++ >= 5) {
      console.log('Студент выучил все технологии!');
    } else {
     this.stack.push(constArray[this.level - 1]);
     console.log('level', this.level, 'stack', this.stack.join(', '));
    }

    return this;
  },
}
console.log('###- var.2');

const newImproveLevel = student2.improveLevel; //Создаём искусственную потерю контекста
  // newImproveLevel() //Теперь при таком вызове, this возвращает объект window
  newImproveLevel.call(student2, STACKS); //Передача контекста, а заодно и других праметров (для красоты и универсальности кода)
  newImproveLevel.call(student2, STACKS);
  newImproveLevel.call(student2, STACKS);
  newImproveLevel.call(student2, STACKS);
  newImproveLevel.call(student2, STACKS);

console.log('result 2:',student2);