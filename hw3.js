let greetings = 'Привет';
let i = 0;
while (i < 2) {
    console.log(greetings);
    i++;
}



let number = 1;
while (number <= 5) {
    console.log(number);
    number++;
}



let sequenceNumbers = 7;
while (sequenceNumbers <= 22) {
    console.log(sequenceNumbers);
    sequenceNumbers++;
}



const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400',
}
for (let key in obj) {
    document.write(key + ' - зарплата ' + obj[key] + ' долларов' + '<br>');
    console.log(key + ' - зарплата ' + obj[key] + ' долларов');
    break;
}


let n = 1000;
let num = 0;
while (n > 50) {
    num++;
    n /= 2;
}
console.log(n);
console.log(num);



let friday = 6;
for (month = 1; month < 31/7; month++) {
    if (friday) {
        console.log('Сегодня пятница, ...-е число. Необходимо подготовить отчет.');
    }
}

   