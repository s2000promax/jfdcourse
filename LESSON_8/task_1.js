console.log(getName2('Ваня'))

const getName1 = name => `Имя равно ${name}`
console.log(getName1('Петя'))

function getName2(name = 'Вильгельм') {
    let resultString = `Имя равно ${name}`;

    return resultString;
}

const getName3 = function(name) {

    return `Имя равно ${name}`;
}
console.log(getName3('Женя'))
