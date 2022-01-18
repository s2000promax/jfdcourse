const getSumOfSequence = number => {
    const array = [];
    if (!Number.isInteger(number) || number < 1) {
        alert(`Number ${number} должен быть целым числом и больше нуля!`)

        return -1;
    } else
    {
        for (let index = 0; index < number; index += 1) {
            array[index] = index + 1;
        }

    return array[0] + array[array.length - 1];
    }
}

console.log(getSumOfSequence(5));