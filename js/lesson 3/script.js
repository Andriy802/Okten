// Exercise 1
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
console.log("Exercise 1");

let x = (+prompt('Write number') !==0 ) ? 'true' : 'false';
console.log(x);

console.log("______________");
// Exercise 2
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
console.log("Exercise 2");

let time = prompt("Write minutes (from 0 to 59)");
if (0 <= time && time <= 15) {
    console.log("The number falls in the first part of the hour");
} else if (15 < time && time <= 30) {
    console.log("The number falls in the second part of the hour");
} else if (30 < time && time <= 45) {
    console.log("The number falls in the third part of the hour");
} else if (45 < time && time < 60) {
    console.log("The number falls in the fourth part of the hour");
} else {
    console.log("You wrote not a minute")
}

console.log("______________");
// Exercise 3
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
console.log("Exercise 3");

let day = prompt("Write day (from 1 to 31)")
if (1 <= day && day <= 10) {
    console.log("The number falls in the first part of the month");
} else if (10 < day && day <= 20) {
    console.log("The number falls in the second part of the month");
} else if (20 < day && day <= 31) {
    console.log("The number falls in the third part of the month");
} else {
    console.log("You wrote not a day")
}

console.log("______________");
// Exercise 4
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
console.log("Exercise 4");
let numberDay = +prompt("Введіть порядковий номер дня тижня");
switch (numberDay) {
    case 1 :
        document.write('<h1>Monday</h1>')
        break;
    case 2 :
        document.write('<h1>Tuesday</h1>')
        break;
    case 3 :
        document.write('<h1>Wednesday</h1>')
        break;
    case 4 :
        document.write('<h1>Thursday</h1>')
        break;
    case 5 :
        document.write('<h1>Friday</h1>')
        break;
    case 6 :
        document.write('<h1>Saturday</h1>')
        break;
    case 7 :
        document.write('<h1>Sunday</h1>')
        break;
    default :
        console.log("Ви ввели некоректний порядковий номер дня тижня");
}

console.log("______________");

// Exercise 5
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
console.log("Exercise 5");

let a = +prompt("Введіть число а");
let b = +prompt("Введіть число b");
if (a > b) {
    console.log(`Число ${a} є більшим`);
} else if (a < b) {
    console.log(`Число ${b} є більшим`);
} else if (a === b) {
    console.log(`Число ${a} і ${b} є одинаковим`);
} else {
    console.log("Ви ввели не число");
}

console.log("______________");

// Exercise 6
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
console.log("Exercise 6");

let xxx = prompt();
if (xxx === "" || xxx === null || xxx === undefined || xxx === 0 || xxx === NaN) {
    xxx = "default";
    console.log(xxx);
} else {
    console.log(xxx);
}

console.log("______________");