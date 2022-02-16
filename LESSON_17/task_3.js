const getData = (callback) => {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
    .then((user) => {
      console.log('Success');
      callback(user);
    })
    .catch((error) => {
      console.log(error);
    });
}

getData(() => {
  console.log('user received');

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('promise resolved');
    }, 500);

    console.log('in promise');
    setTimeout(() => {
      console.log('last set timeout');
    }, 400);

  });

  promise.then((result) => {
    console.log(result);
  })
});

console.log('End')

/*
Порядок вызова следующий:
1. CallStack (в callStack попадает всё, но для упрощения пишем, что попадет в приоритеную первую очередь)
 I - этап:
 console.log('End')

 II - этап: выполнение callback функции: callback(user);
 console.log('user received');
 console.log('in promise');

2. Microtask queue
I - этап:
then((user) => {
      console.log('Success');

II - этап:
 promise.then((result) => {
    console.log(result);

3. Callback queue
II - этап:
  setTimeout(() => { // Попадет в очередь первым
      console.log('last set timeout');
    }, 400);

 setTimeout(() => { // Попадет в очередь вторым
      resolve('promise resolved');
    }, 500);

//Консоль:
'End'
'Success'
'user received'
'in promise'
undefined   --> //console.log(result); a result - это resolve('promise resolved'), а resolve ещё в очереди 3
'last set timeout'

// Код не запускал. (Даже после записи ответа на листочке - не запускал. Даже не создавал index.html, чтобы
// небыло соблазна запустить браузерные функции...)
 */