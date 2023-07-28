let number = 10;
alert(number);
number = 20;
alert(number);

let creationIphone = 2007;
alert(creationIphone);

let creatorJavascript = 'Брендан Эйх';
alert(creatorJavascript);

let numberTen = 10;
let numberTwo = 2;
let sum = numberTen + numberTwo;
result = alert(sum);
let difference = numberTen - numberTwo;
result = alert(difference);
let multiply = numberTen * numberTwo;
result = alert(multiply);
let divide = numberTen / numberTwo;
result = alert(divide);

let exponentiation = 2 ** 5;
result = alert(exponentiation);

let remainder9 = 9;
let remainder2 = 2;
alert(remainder9 % remainder2);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = Number(prompt("Сколько вам лет?"));
alert(age);

const user = {
    name: 'Alex',
    age: 25,
    isAdmin: true,
    "city of residence": 'Saint-Petersburg',
}
console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);
console.log(user["city of residence"]);
user.age = "32";
delete user["city of residence"];
let info = prompt("Какую информацию хотите узнать о пользователе?", "name");
console.log(user[info]);
alert(user[info]);
info = prompt("Какую информацию хотите узнать о пользователе?", "age");
alert(user[info]);
info = prompt("Какую информацию хотите узнать о пользователе?", "isAdmin");
alert(user[info]);
info = prompt("Какую информацию хотите узнать о пользователе?", ["city of residence"]);
alert(user[info]);

let userName = prompt("Ваше имя", 'Привет, ИМЯ!');
alert(userName);
