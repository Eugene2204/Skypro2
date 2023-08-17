//  Задача 1

const numberArray = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i - 1] === 10) break;
    console.log(numberArray[i]);
}

//  Задача 2

const seriesNumbers = [1, 5, 4, 10, 0, 3];
result = seriesNumbers.indexOf(4, 0);
console.log(result);

// Задача 3

const newArray = [1, 3, 5, 10, 20];
result = newArray.join(" ");
console.log(result);

//  Задача 4

const multArray = []
for (let i = 0; i < 3; i++) {
    multArray[i] = [];
    for (let j = 0; j < 3; j++) {
        multArray[i].push(1);
    }
}
console.log(multArray);

// Задача 5

const addValueArray = [1, 1, 1];
addValueArray.push(2, 2, 2);
console.log(addValueArray);

// Задача 6

const removeArrayElement = [9, 8, 7, 'a', 6, 5];
removeArrayElement.sort();
removeArrayElement.pop();
console.log(removeArrayElement);

// Задача 7

const guessArrayNumber = [9, 8, 7, 6, 5];
const userNumber = Number(prompt(`Угалайте число`));
guessArrayNumber.includes(userNumber) ? alert(`Угадал`) : alert(`Неугадал`);

// Задача 8

let customString = 'abcdef';
let arrayString = Array.from(customString);
arrayString.reverse();
console.log(arrayString);

// Задача 9
const newMultArray = [
    [1, 2, 3,],
    [4, 5, 6]
]

result = [].concat(newMultArray[0], newMultArray[1]);
console.log(result);

// Задача 10

const arbitraryArray = [1, 3, 2, 6, 7, 2];
for (let i = 0; i < arbitraryArray.length - 1; i++) {
    console.log(arbitraryArray[i] + arbitraryArray[i + 1]);
}

// Задача 11

const arrayIntegers = [9, 8, 7, 6, 5];
const doubles = arrayIntegers.map((num) => num * 2);
console.log(doubles);

// Задача 12

const getLengthWords = source => source.map(str => str.length);
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

// Задача 13

function filterPositive(array) {
    let arrayInt = [];
    for (let num of array) {
        if (num < 0) {
            arrayInt.push(num);
        }
    }
    return arrayInt;
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

// Задача 14

const arrayTenElem = [];
for (let i = 0; i < 10; i += 1) {
    arrayTenElem.push(Math.floor(Math.random() * (0 + 10)));
}

const duplicate = arrayTenElem.filter(num => num % 2 === 0);

console.log(arrayTenElem);
console.log(duplicate);

// Задача 15

const arraySixElem = [];
for (let i = 0; i < 6; i += 1) {
    arraySixElem.push(Math.floor(Math.random() * (1 + 10)));
}

const arithmetic = arraySixElem.reduce((a, b) => (a + b)) / arraySixElem.length;

console.log(arraySixElem);
console.log(Math.floor(arithmetic));