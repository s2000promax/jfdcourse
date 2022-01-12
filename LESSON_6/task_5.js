let sum = 0
let i = 100

//while
while (i > 0)
 {
    sum += i
    i -= 1
 }
alert(`Sum with while cycle: ${sum}`)

 //for
sum = 0
for (; i <= 100; i += 1) sum += i
alert(`Sum with  cycle: ${sum}`)
