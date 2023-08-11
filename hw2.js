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



const userNumber = Number(prompt('Пожалуйста, введите любое число'));
if (isNaN(userNumber)) {
    alert(`Вы ввели не число`);
}  else {
    userNumber % 2 ? alert('Число нечетное') : alert('Число четное');
}




let clientOS = Number(prompt('Ваша операционная система Ios введите 0 , android 1'));
if (clientOS === 0) {
    console.log(`Установите версию приложения для Ios по ссылке`);
}  else if (clientOS === 1) {
    console.log(`Установите версию приложения для Android по ссылке`);
}

let clientDeviceYear = Number(prompt('Ваш год выпуска меньше 2015 года выпуска введите 0 ,больше 1'));
if (clientDeviceYear === 0 && clientDeviceYear === 1) {
    console.log(`Установите версию приложения для iOS по ссылке`);
} if (clientOS === 1 && clientDeviceYear === 1) {
    console.log('Установите версию приложения для Android по ссылке');
} else if  (clientOS === 1 && clientDeviceYear === 0) {
    console.log('Установите облегченую версию приложения для Android по ссылке')
} else if (clientOS === 0 && clientDeviceYear === 0) {
    console.log(`Установите облегченую версию приложения для iOS по ссылке`)
} 
 




