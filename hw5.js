// задача 1

function min(a, b) {
    return a < b ? a : b;
}

console.log(min(8, 4));
console.log(min(6, 6));


// задача 2

function determineParity(a) {

    if (a % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}

determineParity(2);
determineParity(3);


// задача 3.1

function square(num) {
    console.log(num * num);
}

square(10);

// задача 3.2

function squareNumber(number) {
    return number * number;
}

console.log(squareNumber(2));


// задача 4

function getUserAge() {
    let age = prompt('Сколько вам лет?');
    if (isNaN(age) || age === "" || age === null || age ===" ") {
        return ('не число');
    } else if (age < 0) {
        return ('Вы ввели неправильное значение');
    } else if (age <= 12) {
        return ('Привет, друг!');
    } else if (age >= 13) {
        return ('Добро пожаловать!');
    }
}

console.log(getUserAge());


// задача 5

const numberType = (a, b) => {

    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return ('Одно или оба значения не являются числом');
    } else {
        return (a * b);
    }
}
console.log(numberType(2, 5));
console.log(numberType(NaN, NaN));


// задача 6


function askNumber() {
    const userNumber = prompt('Введите число');

    if (isNaN(userNumber) || userNumber === "" || userNumber === " " || userNumber === null) {
         console.log('Переданный параметр не является числом');
    } else {
         console.log(`${userNumber} в кубе равняется ${userNumber ** 3}`);
    }
}

askNumber();

// задача 7

function getCircleArea() {
    return Math.PI * this.radius * this.radius;
}

function getCirclePerimeter() {
    return Math.PI * 2 * this.radius;
}

const circle1 = {
    radius: 10,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

const circle2 = {
    radius: 20,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

console.log(Math.floor(circle1.getArea()));
console.log(Math.floor(circle1.getPerimeter()));
console.log(Math.floor(circle2.getArea()));
console.log(Math.floor(circle2.getPerimeter()));


// задача 8

//  Находится в папке Site/hw5.1.js