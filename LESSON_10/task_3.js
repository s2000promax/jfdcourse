const student = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
}

const handleObject = (obj, key, action) => {
  switch (action) {
    case 'get': return obj[key];

    case 'add': {
      obj[key] = '';
      return obj;
    }

    case 'delete': {
      delete obj[key];
      return obj;
    }

    default: return obj;
  }
}

//Для корректного теста, должен быть раскомментирован только один соответствующий блок

// const result1 = handleObject(student, 'programmingLanguage', 'get');
// console.log('result1', result1);

// const result2 = handleObject(student, 'salary', 'add');
// console.log('result2', result2);

// const result3 = handleObject(student, 'programmingLanguage', 'delete');
// console.log('result3', result3);

const result4 = handleObject(student, 'salary', 'reset');
console.log('result4', result4);
