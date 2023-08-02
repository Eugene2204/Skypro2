let password = 'пароль';
let enterPassword = prompt('Введите пароль');
if (password === enterPassword) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}



const c = prompt(5);
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}



let d = 45;
let e = 120;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}



let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
alert(a + b);



let monthNumber = prompt('Ведите номер месяца');
switch (monthNumber) {
    case '1':
        console.log('Январь');
        console.log('Зима');
        break;
    case '2':
        console.log('Февраль');
        console.log('Зима');
        break;
    case '3':
        console.log('Март');
        console.log('Весна');
        break;
    case '4':
        console.log('Апрель');
        console.log('Весна');
        break;
    case '5':
        console.log('Май');
        console.log('Весна');
        break;
    case '6':
        console.log('Июнь');
        console.log('Лето');
        break;
    case '7':
        console.log('Июль');
        console.log('Лето');
        break;
    case '8':
        console.log('Август');
        console.log('Лето');
        break;
    case '9':
        console.log('Сентябрь');
        console.log('Осень');
        break;
    case '10':
        console.log('Октябрь');
        console.log('Осень');
        break;
    case '11':
        console.log('Ноябрь');
        console.log('Осень');
        break;
    case '12':
        console.log('Декабрь');
        console.log('Зима');
        break;

    default:
        console.log('Такого месяца не существует');
}



let number = Number(prompt('Пожалуйста, введите любое число'));
if (typeof number === 'number') {
    console.log(number);
}
if (number % 2) {
    alert('Число нечетное');
} else if (number) {
    alert('Число четное');
} else {
    alert('Такого числа нет');
}


let clientOS = Number(prompt('Выберите свою операционную систему 0-ios или 1-android'));
let clientDeviceYear = Number(prompt('укажите год выпуска'));
if (clientOS === 0 && clientDeviceYear > 2015) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 0 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS > 0 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
} else if (clientOS > 0 && clientDeviceYear > 2015) {
    console.log('Установите версию приложения для Android по ссылке');
} else {
    console.log('Вы ввели неверный вариант');
}
