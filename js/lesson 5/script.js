// Exercise 1
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log("Exercise 1");

function sRectangle (a , b){
    return a * b;
}
console.log(sRectangle(4,3));

console.log("______________");

// Exercise 2
// - створити функцію яка обчислює та повертає площу кола з радіусом r

console.log("Exercise 2");

function sCircle (r) {
    const pi = 3.14;
    return pi * (r * r);
}
console.log(sCircle(5));

console.log("______________");

// Exercise 3
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
console.log("Exercise 3");

function sCylinder (r , h) {
    let pi = 3.14;
    return 2 * pi * r * h;
}
console.log(sCylinder(3 , 4));

console.log("______________");

// Exercise 4
// - створити функцію яка приймає масив та виводить кожен його елемент
console.log("Exercise 4");

function arrayPrintItem (arr) {
    for (let item of arr) {
        console.log(item);
    }
}
arrayPrintItem([22 , "Andriy" , 15]);
console.log("______________");

// Exercise 5
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createP (text) {
    document.write(`<p>${text}</p>`);
}

createP("lorem");
document.write("<hr>");

// Exercise 6
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createLi3 (text) {
    document.write("<ul>");
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write("</ul>");
}

createLi3("lorem");
document.write("<hr>");

// Exercise 7
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createLi (text , num) {
    document.write("<ul>");
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write("</ul>");
}

createLi("lorem" , 5);
document.write("<hr>");

// Exercise 8
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createList (arrList) {
    document.write("<ul>");
    for (let item of arrList) {
        document.write(`<li>${item}</li>`);
    }
    document.write("</ul>");
}

createList(["menu" , "logo" , "help" , "wallet"]);
document.write("<hr>");

// Exercise 9
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function createObjBlock (arrObj) {
    for (let item of arrObj) {
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
    }
}
createObjBlock([
    {id:1 , name:"Andriy", age:22},
    {id:2 , name:"Petro", age:20},
    {id:3 , name:"Ihor", age:25}
]);

// Exercise 10
// - створити функцію яка повертає найменьше число з масиву

function minNumArr (arr) {
    let min = arr[0];
    for (let arrElement of arr) {
        if (min >= arrElement) {
            min = arrElement;
        }
    }
    return min;
}

console.log(minNumArr([15 , 22 , 56 , 32 , 2]));

console.log("______________");

// Exercise 11
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13

function sumArr (arr) {
    let numNull = 0;
    for (let arrElement of arr) {
        numNull = numNull + arrElement;
    }
    return numNull;
}

console.log(sumArr([15, 25, 50, 33, 2]));

console.log("______________");