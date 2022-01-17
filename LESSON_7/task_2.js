const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
console.log('###-typeof:', typeof temperatureInCelsius);

if (temperatureInCelsius * 1 === 0) {
    debugger;
    alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
    debugger;
    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

const temperatureInFahrenheit = temperatureInCelsius * 9 / 5 + 32;
console.log('###-Fahrenheit:', temperatureInFahrenheit );
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по 
Фаренгейту.`);