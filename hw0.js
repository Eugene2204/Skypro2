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