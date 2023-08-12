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




const clientOS = Number(prompt('Ваша операционная система Ios введите 0 , android 1'));
const clientDeviceYear = Number(prompt('Укажите год выпуска вашего телефона'));
console.log(`Установите ${clientDeviceYear < 2015 ? `облегченую` : ``} версию приложения для ${clientOS ? `Android` : `iOS`} по ссылке`);
 




