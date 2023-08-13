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
    document.write(key + ' - зарплата ' + obj[key] + ' долларов');
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



for (let day =6;day <= 31;day+=7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
    }