function userCreator(user) {
    try {
        console.log(user.name);
    } catch (error) {
        console.log("error");
    }
}

userCreator();


// function asdqwe (a , b) {
//     if (b === 0) {
//         throw new Error("Error b is 0");
//     }
//     return a / b;
// }
//
// asdqwe(10,0);

// let user;
// console.log(user?.name);
//
// let men = {
//     name: "Andriy",
//     age: 23,
//     wife: {
//         name: "Maria",
//         age: 20
//     }
// };
//
// let {name, age, wife, wife: {name:wifeName,age:wifeAge}} = men;
//
// console.log(name, age, wife, wifeName, wifeAge);

let boy = {
    name: "Vasia",
    surname: "Kost",
    age: 22,
    wife: {
        name: "oksana",
        surname: "Tukarchuk",
        age: 20
    }
};

let {name, surname, age, wife, wife:{name:wName, surname:wSurname, age:wAge}} = boy;

console.log(name, surname, age);
console.log(wife, wName, wSurname, wAge);







