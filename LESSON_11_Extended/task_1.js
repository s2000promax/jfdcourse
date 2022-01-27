const peopleWithVisa = [
  {
    firstName: 'Stasia',
    lastName: 'Ward',
    criminalRecord: true,
    passportExpiration: '19.06.2023',
  },
  {
    firstName: 'Elliot',
    lastName: 'Baker',
    criminalRecord: false,
    passportExpiration: '04.06.2021',
  },
  {
    firstName: 'Leighann',
    lastName: 'Scott',
    criminalRecord: true,
    passportExpiration: '31.07.2022',
  },
  {
    firstName: 'Nick',
    lastName: 'Pop',
    criminalRecord: false,
    passportExpiration: '31.12.2021',
  },
  {
    firstName: 'Luc',
    lastName: 'Besson',
    criminalRecord: false,
    passportExpiration: '31.12.2029',
  },
];

const allowVisa = objectOfPeople => {
  let result = [];

  objectOfPeople.forEach( item => {
    if (!item.criminalRecord && (Date.now() < Date.parse(item.passportExpiration.split('.').reverse().join('-'))) ) {
      result.push(item);
    }
  })

  return result;
}

const result = allowVisa(peopleWithVisa);
console.log('result', result);