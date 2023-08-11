
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

whatSeason();