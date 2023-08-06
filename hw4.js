let clientDeviceYear = Number(prompt('укажите год выпуска'));
if (clientOS === true && clientDeviceYear > 2015) {
    console.log(`Установите версию приложения для iOS по ссылке`);
}  else if (clientOS === true && clientDeviceYear < 2015) {
    console.log(`Установите облегченую версию приложения для iOS по ссылке`)
} 
if (clientOS ===false && clientDeviceYear > 2015) {
    console.log('Установите версию приложения для Android по ссылке');
} else if  (clientOS ===false && clientDeviceYear < 2015) {
    console.log('Установите облегченую версию приложения для Android по ссылке')
}

let clientDeviceYear = Number(prompt('укажите год выпуска'));
let Ios = clientOS === true && clientDeviceYear > 2015 ? ('Установите версию приложения для iOS по ссылке') : (`Установите облегченую версию приложения для iOS по ссылке`);
Ios = clientOS === false && clientDeviceYear < 2015 ? ('Установите версию приложения для Android по ссылке') : ('Установите облегченую версию приложения для Android по ссылке');
console.log(Ios);

else if (clientOS === true && clientDeviceYear < 2015) {
    
} 