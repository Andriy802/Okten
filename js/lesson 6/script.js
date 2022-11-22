// Exercise 1
//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

console.log("Exercise 1");

let hw = "hello world";
let li = "lorem ipsum";
let jic = "javascript is cool";

console.log(hw.length);
console.log(li.length);
console.log(jic.length);

console.log("______________");

hw = hw.toUpperCase();
li = li.toUpperCase();
jic = jic.toUpperCase();
console.log(hw);
console.log(li);
console.log(jic);

console.log("______________");

console.log(hw.toLowerCase());
console.log(li.toLowerCase());
console.log(jic.toLowerCase());

console.log("______________");

str = " dirty string   ";
console.log(str.trim());

console.log("______________");

// Exercise 2
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log("Exercise 2");

let stringToArray = (str) => str.split(" ");
let str2 = 'Ревуть воли як ясла повні';
let arr = stringToArray(str2);
console.log(arr);
document.writeln(arr);

console.log("______________");

// Exercise 3
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
console.log("Exercise 3");

let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let newArray = array.map((value) => value + "");
console.log(newArray);

console.log("______________");

// Exercise 4
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
console.log("Exercise 4");

let nums = [11,21,3];
let sortNums = (arr, direction) => {
    if (direction === "ascending") {
        console.log(arr.sort((current, next) => current - next));
    }else if (direction === "descending") {
        console.log(arr.sort((current, next) => next - current));
    } else {
        console.log("Not the correct direction ")
    }
}

sortNums(nums, 'ascending'); // [3,11,21]
sortNums(nums, 'descending'); // [21,11,3]

console.log("______________");

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Exercise 5
// -- відсортувати його за спаданням за monthDuration
console.log("Exercise 5");

console.log(coursesAndDurationArray.sort((current, next) => {
    return next.monthDuration - current.monthDuration;
}));

console.log("______________");

// Exercise 6
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log("Exercise 6");

console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5));

console.log("______________");

// Exercise 7
// описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [
    {cardSuit: 'spade' , value: '6' , color:'black'},
    {cardSuit: 'spade' , value: '7' , color:'black'},
    {cardSuit: 'spade' , value: '8' , color:'black'},
    {cardSuit: 'spade' , value: '9' , color:'black'},
    {cardSuit: 'spade' , value: '10' , color:'black'},
    {cardSuit: 'spade' , value: 'jack' , color:'black'},
    {cardSuit: 'spade' , value: 'queen' , color:'black'},
    {cardSuit: 'spade' , value: 'king' , color:'black'},
    {cardSuit: 'spade' , value: 'ace' , color:'black'},
    {cardSuit: 'clubs' , value: '6' , color:'black'},
    {cardSuit: 'clubs' , value: '7' , color:'black'},
    {cardSuit: 'clubs' , value: '8' , color:'black'},
    {cardSuit: 'clubs' , value: '9' , color:'black'},
    {cardSuit: 'clubs' , value: '10' , color:'black'},
    {cardSuit: 'clubs' , value: 'jack' , color:'black'},
    {cardSuit: 'clubs' , value: 'queen' , color:'black'},
    {cardSuit: 'clubs' , value: 'king' , color:'black'},
    {cardSuit: 'clubs' , value: 'ace' , color:'black'},
    {cardSuit: 'heart' , value: '6' , color:'red'},
    {cardSuit: 'heart' , value: '7' , color:'red'},
    {cardSuit: 'heart' , value: '8' , color:'red'},
    {cardSuit: 'heart' , value: '9' , color:'red'},
    {cardSuit: 'heart' , value: '10' , color:'red'},
    {cardSuit: 'heart' , value: 'jack' , color:'red'},
    {cardSuit: 'heart' , value: 'queen' , color:'red'},
    {cardSuit: 'heart' , value: 'king' , color:'red'},
    {cardSuit: 'heart' , value: 'ace' , color:'red'},
    {cardSuit: 'diamond' , value: '6' , color:'red'},
    {cardSuit: 'diamond' , value: '7' , color:'red'},
    {cardSuit: 'diamond' , value: '8' , color:'red'},
    {cardSuit: 'diamond' , value: '9' , color:'red'},
    {cardSuit: 'diamond' , value: '10' , color:'red'},
    {cardSuit: 'diamond' , value: 'jack' , color:'red'},
    {cardSuit: 'diamond' , value: 'queen' , color:'red'},
    {cardSuit: 'diamond' , value: 'king' , color:'red'},
    {cardSuit: 'diamond' , value: 'ace' , color:'red'},
];

// - знайти піковий туз

let spadeAce = cards.filter(card => card.cardSuit === "spade" && card.value === "ace");
console.log(spadeAce);

console.log("______________");

// - всі шістки

let all6 = cards.filter(card => card.value === "6");
console.log(all6);

console.log("______________");

// - всі червоні карти

let redCards = cards.filter(card => card.color === "red");
console.log(redCards);

console.log("______________");

// - всі буби

let diamondCards = cards.filter(card => card.cardSuit === "diamond");
console.log(diamondCards);

console.log("______________");

// - всі трефи від 9 та більше

let clubs9AceCards = cards.filter(card => card.cardSuit === "clubs" && card.value >= "9");
console.log(clubs9AceCards);

console.log("______________");

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cards.reduce((accoumulator,card) => {
    accoumulator.spades.push(card.cardSuit === "spades");
    accoumulator.diamonds.push(card.cardSuit === "diamonds");
    accoumulator.hearts.push(card.cardSuit === "hearts");
    accoumulator.clubs.push(card.cardSuit === "clubs");
} , {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});

console.log(reduce);

console.log("______________");








