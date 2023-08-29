// Задача 1

const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

// Задача 2

function isPositive(filter) {
  if (filter > 0) 
  return true;
}
function isMale(filter) {
  if (filter.gender === 'male') 
    return true;
  
}
function filter(arr, ruleFunction) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
if (ruleFunction(arr[i])) {
  output.push(arr[i]);  
}
  }
  return output;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const peopleUser = [
  { name: 'Глеб', gender: 'male' },
  { name: 'Анна', gender: 'female' },
  { name: 'Олег', gender: 'male' },
  { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopleUser, isMale));

// Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}] 

// Задача 3

 let myDate = new Date;
 let interval = setInterval(() => console.log(new Date), 3000);
 setTimeout(() => {clearInterval(interval); console.log('30 секунд прошло')}, 30000);

// Задача 4

function delayForSecond(callback) {
   setTimeout(callback, 1000);
 }

 delayForSecond(function () {
   console.log('Привет, Глеб!');
 });

// Задача 5

function delayForSecond(cb) {
  setTimeout(() => {
    console.log('Прошла одна секунда');
    if (cb) { cb(); }

  }, 1000)
}

function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб')); 