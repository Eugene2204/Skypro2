// Задача 1
let upperValue = "js";
console.log(upperValue.toUpperCase());

//  Задача 2

  function searchStart(arr, start)  {    //создали функцию с двумя аргументами
    
    const string = start.toLowerCase();  // приводим к нижнему регистру строку
    return  arr.filter((str) => str.toLowerCase().includes(string)); //к массиву применяем метод filter, применяем toLowerCase чтобы не учитывался регистр и startsWith проверить,есть ли такое значение
       
 }

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['кошка', 'комар']
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []

// Задача 3

console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

// Задача 4

const number = [52, 53, 49, 77, 21, 32];

const min = (value) => value.reduce((x, y) => Math.min(x, y));
const max = (value) => value.reduce((x, y) => Math.max(x, y));
console.log(min(number), max(number));

// Задача 5

function showRandomNumber() {
    return Math.floor(Math.random() * 10 + 1);
}
console.log(showRandomNumber());

// Задача 6

let getRandomArrNumbers = (num) => {
    let arr = [];
     for (let i = 0; i < Math.floor(num / 2); i++) {
        arr.push(Math.floor(Math.random() * (num + 1)));
     }
     return arr;
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));
console.log(getRandomArrNumbers(15));

// Задача 7

const integers = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
console.log(integers(2, 6));

// Задача 8

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

let dateNow = new Date();
let fullDate = "Сегодня: " + dateNow.getDate() + " " + months[dateNow.getMonth()] + " " + dateNow.getFullYear() + " - " + days[dateNow.getDay()];

console.log(fullDate);

// Задача 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задача 10

let myDate = new Date();
function formatDate(date) {
    
    const day = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        
    let second = date.getSeconds();
    if (second < 10) { second = `0` + second }
    let minutes = date.getMinutes();
    if (minutes < 10) { minutes = `0` + minutes }
    let hours = date.getHours();
    if (hours < 10) { hours = `0` + hours }
   
    let dateFormat = "Дата:" + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear() + " - это " + day[date.getDay()] + ` Время: ` + `${hours}` + `:${minutes}` + `:${second}`

    return dateFormat;

}

console.log(formatDate(myDate));

// Задача 11

//  Находится в папке Site/hw5.1.js


