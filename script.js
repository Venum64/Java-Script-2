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

let clock = +prompt("Введите свое время");

if (clock == 0) {
    alert(clock + 12 + " часов ночи");
} else if (clock == 1) {
    alert(clock + " час ночи");
} else if (clock == 2) {
    alert(clock + " часа ночи");
} else if (clock >= 3 && clock <= 4) {
    alert(clock + " часа ночи");
} else if (clock >= 5 && clock <= 11) {
    alert(clock + " часов ночи");
} else if (clock == 12) {
    alert(clock + " часов дня");
} else if (clock == 13) {
    alert((clock - 12) + " час дня");
} else if (clock >= 14 && clock <= 16) {
    alert((clock - 12) + " часа дня");
} else if (clock >= 17 && clock <= 18) {
    alert((clock - 12) + " часов дня");
} else if (clock >= 19 && clock <= 23) {
    alert((clock - 12) + " часов вечера");
}
else {
    alert('Такого времени нету')
}
// clock end

// numbers start
var num1 = +prompt("Введите первое число:");
var num2 = +prompt("Введите второе число:");
var num3 = +prompt("Введите третье число:");

// Находим среднее число
if ((num1 >= num2 && num1 <= num3) || (num1 <= num2 && num1 >= num3)) {
    alert("Среднее число: " + num1);
} else if ((num2 >= num1 && num2 <= num3) || (num2 <= num1 && num2 >= num3)) {
    alert("Среднее число: " + num2);
} else {
    alert("Среднее число: " + num3);
}

// numbers end
