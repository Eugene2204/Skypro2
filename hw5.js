// задача 1

function min(a, b) {
    return a < b ? a : b;
}

console.log(min(8, 4));
console.log(min(6, 6));


// задача 2

function determineParity() {
    let number = Number(prompt('введите число'));
    if (number % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}

determineParity();


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
    let age = Number(prompt('Сколько вам лет?'));
    if (age <= 0) {
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
    let mult = a * b;
    if (isNaN(a, b)) {
        return console.log(mult);
    } else {
        console.log('Одно или оба значения не являются числом');
    }
}
numberType(4, 2);

// задача 6


function askNumber() {
    const num = Number(prompt(`Введите число`));
    if (num * num) {
        console.log(`n в кубе равняется ${num}`);
    } else {
        return console.log(`Переданный параметр не является числом`)
    }
}
askNumber();

// задача 7

function getCircleArea() {
    return this.pi * this.radius * this.radius;
}

function getCirclePerimeter() {
    return this.pi * 2 * this.radius;
}

const circle1 = {
    radius: 10,
    pi: 3.14,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

const circle2 = {
    radius: 20,
    pi: 3.14,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea());
console.log(Math.floor(circle1.getPerimeter()));
console.log(circle2.getArea());
console.log(Math.floor(circle2.getPerimeter()));


// задача 8

//  Находится в папке Site/hw5.1.js