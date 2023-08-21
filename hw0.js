// const user = {
//     name: 'Alex',
//     age: 32,
//     city: 'Saint-Petersburg',
//     getInfo () {
//         return(`Пользователь ${user.name},возраст ${user.age},проживает в городе ${user.city};`);
//     } 
// }
// console.log(user.getInfo());


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