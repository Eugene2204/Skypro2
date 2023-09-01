// person — это объект
const person = {
  // name, family, age — это свойства, или ключи, объекта person
  name: 'Анатолий',
  age: 29,
  // Объекты могут быть вложенными, в ключе family лежит объект со свойствами mother, father и children
  family: {
     mother: 'Елена',
     father: 'Антон',
     // В ключах объекта могут лежать массивы, в ключе children лежат дети Анатолия
     children: ['Варвара', 'Леонид']
 } 
};

// Так мы получаем значение свойства объекта
console.log(person.name); // => Анатолий
console.log(person.family.father); // => Антон

// Так мы можем изменить значение свойства в объекте
person.name = 'Иван'
console.log(person.name); // => Иван


// Так мы вызываем метод join у массива children
console.log(person.family.children.join(' и ')); // => Варвара и Леонид
person.family.children.push("Сергей");
// Так мы подставляем значения в строку с помощью шаблонных строк
console.log(`Имя: ${person.name}. Дети: ${person.family.children.join(', ')}`); // => Имя: Иван. Дети: Варвара и Леонид

function searchStart(arr, start)  {    //создали функцию с двумя аргументами
    
  const string = start.toLowerCase();  // приводим к нижнему регистру строку
  return  arr.filter((str) => str.toLowerCase().includes(string)); //к массиву применяем метод filter, применяем toLowerCase чтобы не учитывался регистр и startsWith проверить,есть ли такое значение
     
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['кошка', 'комар']
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []

let customString = 'abcdef';
let arrayString = [... customString].reverse().join('');
console.log(arrayString);


let num = [1, 2, 3, 4, 5, 6]
let arrNum = num.filter((el) => el < 3 || el > 4);
console.log(arrNum);

function removeExclamationMarks(s) {
  
let del = s.replace(/[^\w\s]/gi, '') 
  return del
}

console.log(removeExclamationMarks("Hello World!"))

function grow(x){
let mult = x.reduce((mult, item) => mult * item);
return mult;
}

console.log(grow([1, 2, 3, 4]))

function powersOfTwo(n) {
  const arr = [];
for (let i = 0; i <= n; i++) {
arr.push(Math.pow(n, i))
}
return arr;
}

console.log(powersOfTwo(1));

function invert(array) {
  return array.map(i => -i > 0 || i !== 0 ? - i : i);
}

console.log(invert([1,-2,3,-4,5]));

function mango(quantity, price) {
  let sharePrice = price * (quantity - Math.floor(quantity / 3));
  return sharePrice;
}
console.log(mango(5, 3));

function addLength(str) {
  let result = str.split(' ').map((str) => str + (' ') + str.length);
  return result;
  }

  console.log(addLength("apple ban"));

function solution(str){
let flipWord = str.split('').reverse().join('');
return flipWord;
}

console.log(solution('world'));

function nearstSq(n) {
  let lowerThreshold = nearstLow(n);
  let upperThreshold = nearstHigh(n);

  return n - lowerThreshold < upperThreshold - n ? lowerThreshold : upperThreshold;
}

function nearstHigh(n) {
  if (Math.sqrt(n) % 1 === 0) {
    return n;
  }

  return nearstHigh(++n);
}

function nearstLow(n) {
  if (Math.sqrt(n) % 1 === 0) {
    return n;
  }

  return nearstLow(--n);
}

console.log(nearstSq(144));

/*function squareSum(numbers) {

let square = numbers.map((num) => num * num);
let sum = square.reduce((sum, item) => sum + item,0);
return sum;
}

console.log(squareSum([1, 2, 2]));

function strCount(str, letter) {

  let result = str.split('').filter((str) => str === letter).length;
  
  return result ;  
}

console.log(strCount("Hello", "o"));
console.log(strCount("Hello", "l"));
console.log(strCount("", "z"));


function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return Math.floor(sum);
}

console.log(summation(Math.abs(-2)));

const litres = (time) => {
  return Math.floor(time / 2);
}
console.log(litres(3));
console.log(litres(6.7));
console.log(litres(11.8));

const user = {
     name: 'Alex',
     age: 32,
     city: 'Saint-Petersburg',
     getInfo () {
         return(`Пользователь ${user.name},возраст ${user.age},проживает в городе ${user.city};`);
     } 
 }
 console.log(user.getInfo());


function getString(arr) {
    return arr.join('. ') 
}

console.log(getString([9, 8, 7, 6, 5]));
    
function formatDate(date) {

    let day = date.getDate();
    if (day < 10) {day = '0' + day}
    
    let month = date.getMonth() + 1;
    if (month < 10) {month = '0' + month}

    let year = date.getFullYear();
    if (year < 10) year = '0' + year;

    return day + '.' + month + '.' + year;
} 

let getDayFormat = new Date();
console.log(formatDate(getDayFormat))

const fibonacci = [1, 1, 2, 3, 5, 8];
const multipleByTwoFib = fibonacci.map((num) => num * 2);
const plusTenFib = fibonacci.map((num) => num + 10);
const onlyBigFib = fibonacci.filter((num) => num > 3);

console.log(multipleByTwoFib);
console.log(plusTenFib);
console.log(onlyBigFib);

function callbackWithArrayLength(arr, callback) {
    //   console.log(arr);
    
    callback(arr.length);
  }
  
  callbackWithArrayLength([1], (length) => {
    console.log(length);
  });
  
  callbackWithArrayLength([1, 1], (len) => {
    console.log(len);
  });
  callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
    console.log(l);
  });


  function log(arrItem) {
    console.log("Элемент массива:", arrItem);
    
}

function each(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);

const stringArray = ['Кошка', 'Кит', 'Комар', 'Носорог'];

const search = 'ко';
const result = [];
stringArray.forEach((stringArray) => {

    if (stringArray.toLowerCase().includes(search.toLowerCase())) {
        result.push(stringArray);
    }
});
console.log(result);

Array.from(Array(num) , () => Math.floor(Math.random() * num));

let originalArray = [1, 2, 3, 4, 5, 6];

let filteredArray = originalArray.filter((elem) => elem < 3 || elem > 4);

console.log(filteredArray)
*/