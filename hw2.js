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
alert(Number(a) + Number(b));



let monthNumber = prompt('Ведите номер месяца');
switch (monthNumber) {
    case '1':
        console.log('Январь', 'Зима');
        break;
    case '2':
        console.log('Февраль', 'Зима');
        break;
    case '3':
        console.log('Март', 'Весна');
        break;
    case '4':
        console.log('Апрель', 'Весна');
        break;
    case '5':
        console.log('Май', 'Весна');
        break;
    case '6':
        console.log('Июнь', 'Лето');
        break;
    case '7':
        console.log('Июль', 'Лето');
        break;
    case '8':
        console.log('Август', 'Лето');
        break;
    case '9':
        console.log('Сентябрь', 'Осень');
        break;
    case '10':
        console.log('Октябрь', 'Осень');
        break;
    case '11':
        console.log('Ноябрь', 'Осень');
        break;
    case '12':
        console.log('Декабрь', 'Зима');
        break;

    default:
        console.log('Такого месяца не существует');
}



let number = Number(prompt('Пожалуйста, введите любое число'));
console.log(number);
if (number % 2) {
    alert('Число нечетное');
} else if (number) {
    alert('Число четное');
} else {
    alert('Такого числа нет');
}


let clientOS = confirm('Ваша операционная система Ios')
if (clientOS === true) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === false) {
    console.log('Установите версию приложения для Android по ссылке');
}




let clientDeviceYear = Number(prompt('укажите год выпуска'));
if (clientOS === true && clientDeviceYear < 2015) {
    console.log('Установите облегченую версию приложения для iOS по ссылке');
}
else if (clientOS === false && clientDeviceYear < 2015) {
    console.log('Установите облегченую версию приложения для Android по ссылке');
}