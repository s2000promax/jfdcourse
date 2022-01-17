const getSumOfNumbers = (number, type) => {
    let resultSum = 0;
    switch (type) {
        case 'odd' :
            while (number > 0) {
                if (number % 2) {
                    resultSum += number;
                }
                number -= 1;
            }
            break;

        case 'even':
            //console.log('###-even:', !(number % 2))
            while (number > 0) {
                if (!(number % 2)) {
                    resultSum += number;
                }
                number -= 1;
            }
            break;

        default:
            while (number > 0) {
                resultSum += number;
                number -= 1;
            }
            break;
    }

    return resultSum;
}

console.log('Sum of Odd', getSumOfNumbers(10, 'odd'));
console.log('Sum of Even', getSumOfNumbers(10, 'even'));
console.log('Sum of all numbers', getSumOfNumbers(10, ''));
console.log('Sum of all numbers', getSumOfNumbers(10));