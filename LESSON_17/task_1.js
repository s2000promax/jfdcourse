setTimeout(() => {
  console.log('setTimeout');
}, 0);

const promise = new Promise((resolve) => {
  console.log('Promise');
  resolve();
});

promise.then(() => {
  console.log('Promise resolve');
});

console.log('End');

/*
Порядок вызова следующий:
1. CallStack (в callStack попадает всё, но для упрощения пишем, что попадет в приоритеную первую очередь)
console.log('Promise');
console.log('End');

2. Microtask queue
promise.then(() => {
  console.log('Promise resolve');
});


3. Callback queue
setTimeout(() => {
  console.log('setTimeout');
}, 0);

//Консоль:
'Promise'
'End'
'Promise resolve'
'setTimeout'

// Код не запускал. (Даже после записи ответа на листочке - не запускал)
 */