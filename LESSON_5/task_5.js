const userString = prompt('Введите текст для обрезки')
const startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки')
const endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки')
alert(`Результат: ${userString.trim().slice(Number(startSliceIndex.trim()), Number(endSliceIndex.trim()))}`)