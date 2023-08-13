const user = {
    name: 'Alex',
    age: 32,
    city: 'Saint-Petersburg',
    getInfo () {
        return(`Пользователь ${user.name},возраст ${user.age},проживает в городе ${user.city};`);
    } 
}
console.log(user.getInfo());



    
