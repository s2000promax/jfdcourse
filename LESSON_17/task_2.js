function runCode() {
  console.log('before promise')
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Zero Promise')

      resolve()
    }, 0)
  })
}

setTimeout(() => {
  console.log('Zero')
}, 0)

runCode().then(() => console.log('Zero Promise Invoked'))

console.log('One')

/*
Порядок вызова следующий:
1. CallStack (в callStack попадает всё, но для упрощения пишем, что попадет в приоритеную первую очередь)
console.log('before promise')
console.log('One')

2. Microtask queue
.then(() => console.log('Zero Promise Invoked'))


3. Callback queue
setTimeout(() => {
  console.log('Zero')
}, 0)

setTimeout(() => {
      console.log('Zero Promise')

      resolve()
    }, 0)

//Консоль:
'before promise'
'One'
'Zero Promise Invoked' --не верно!
'Zero'
'Zero Promise'
'Zero Promise Invoked'

// Код не запускал. (Даже после записи ответа на листочке - не запускал)
 */