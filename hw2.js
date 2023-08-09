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
    case '2':
    case '12':
        console.log('Зима');
        break;
    case '3':
    case '4':
    case '5':
        console.log('Весна');
        break;
    case '6':
    case '7':
    case '8':
        console.log('Лето');
        break;
    case '9':
    case '10':
    case '11':
        console.log('Осень');
        break;
    default:
        console.log('Такого месяца не существует');
}



const number = Number(prompt('Пожалуйста, введите любое число'));
if (isNaN(number % 2)) {
    alert(number);
} else if (number % 2 === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}




let clientOS = confirm('Ваша операционная система Ios');
if (clientOS) {
    console.log('Установите версию приложения для iOS по ссылке');
} else {
    console.log('Установите версию приложения для Android по ссылке');
}




let clientDeviceYear = Number(prompt('укажите год выпуска'));
if (clientOS && clientDeviceYear > 2015) {
    console.log(`Установите версию приложения для iOS по ссылке`);
} if (!clientOS && clientDeviceYear > 2015) {
    console.log('Установите версию приложения для Android по ссылке');
} else if (!clientOS && clientDeviceYear < 2015) {
    console.log('Установите облегченую версию приложения для Android по ссылке');
} else if (clientOS && clientDeviceYear < 2015) {
    console.log(`Установите облегченую версию приложения для iOS по ссылке`);
}


