
function whatSeason() {
    let month = Number(prompt(`Введите номер месяца`));

    if (month === 1 || month === 2 || month === 12) {
        return alert(`Зима`);
    } else if (month > 2 && month < 6) {
        return alert(`Весна`);
    } else if (month > 5 && month < 9) {
        return alert(`Лето`);
    } else if (month > 8 && month < 12) {
        return alert(`Осень`);
    } else {
        return alert(`Вы ввели неверное значение`);
    }
}

// Задача 10 ДЗ 2.7
function guessWord() {
    let fruits = [' Яблоко ', ' Груша ', ' Дыня ', ' Виноград ', ' Персик ', ' Апельсин ', ' Мандарин '];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);

    let firstElem = prompt("Чему равнялся первый элемент массива?");
    let lastElem = prompt("Чему равнялся последний элемент массива?");

    for (let i = 0; i < fruits.length; i++) {

        if (fruits[0].toUpperCase().includes(firstElem.toUpperCase()) && fruits[fruits.length - 1].toUpperCase().includes(lastElem.toUpperCase())) {
            alert('Молодец поздравляю с победой!');
        } else if (fruits[0].toUpperCase().includes(firstElem.toUpperCase()) || fruits[fruits.length - 1].toUpperCase().includes(lastElem.toUpperCase())) {
            alert('Вы были близки к победе!');
        } else {
            alert('Не угадал');
        }
        break
    }
}