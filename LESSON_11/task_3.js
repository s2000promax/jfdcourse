const addDays = (dateObject, days = 1) => {
  //const msOfDay = 86400000; //День содержит 86 400 000 миллисекунд.
  const msOfDay = 1000 * 60 * 60 * 24; //  ms * s * m * h => day

  return new Date(dateObject.getTime() + days * msOfDay);
}

const result1 = addDays(new Date(2019, 0, 15) , 5);
const result2 = addDays(new Date(Date.now()) , 500);
const result3 = addDays(new Date(2632, 11, 2) , 15);
console.log('result 1:', result1);
console.log('result 2:', result2);
console.log('result 3:', result3);