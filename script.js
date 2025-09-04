// age start

var age = +prompt('Введите свой возраст');
if (age > 0 && age <= 18) {
    alert('Вы еще молоды, Вам нужно учиться');
} else if (age > 18 && age <= 50) {
    alert('Вам нужно работать');
} else if (age > 50 && age <= 59) {
    alert('Вам скоро на пенсию');
} else if (age > 59 && age <= 100) {
    alert('Вы пенсионер');
} else {
    alert('Что-то пошло не так');
}

// age end

// clock start

var clock = +prompt('Введите время');
switch (clock) {
    case 1:
        alert('1 час ночи');
        break;
    case 2:
        alert('2 часа ночи');
        break;
    case 3:
        alert('3 часа ночи');
        break;
    case 4:
        alert('4 часа ночи');
        break;
    case 5:
        alert('5 часов ночи');
        break;
    case 6:
        alert('6 часов утра');
        break;
    case 7:
        alert('7 часов утра');
        break;
    case 8:
        alert('8 часов утра');
        break;
    case 9:
        alert('9 часов утра');
        break;
    case 10:
        alert('10 часов утра');
        break;
    case 11:
        alert('11 часов утра');
        break;
    case 12:
        alert('12 часов утра');
        break;
    case 13:
        alert('1 час дня');
        break;
    case 14:
        alert('2 часа дня');
        break;
    case 15:
        alert('3 часа дня');
        break;
    case 16:
        alert('4 часа дня');
        break;
    case 17:
        alert('5 часов дня');
        break;
    case 18:
        alert('6 часов вечера');
        break;
    case 19:
        alert('7 часов вечера');
        break;
    case 20:
        alert('8 часов вечера');
        break;
    case 21:
        alert('9 часов вечера');
        break;
    case 22:
        alert('10 часов вечера');
        break;
    case 23:
        alert('11 часов вечера');
        break;
    case 24:
        alert('12 часов вечера');
        break;
}

// clock end

// numbers start

var X = +prompt("Введите первое число")
var Y = +prompt("Введите второе число")
var Z = +prompt("Введите третье число")
var res = (X + Y + Z) / 3;
alert("Ваше среднее арифметическое значение чисел цифра " + res)

// numbers end
