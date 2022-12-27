// Exercise 1
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

console.log("Exercise 1");

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let array = [
    new User(10, "Andriy", "Gavanchak", "AndriyG@gmail.com", "063-246-19-19"),
    new User(3, "Maria", "Marchiv", "MariaM@gmail.com", "068-774-20-53"),
    new User(6, "Vasia", "Kost", "VasiaK@gmail.com", "063-654-25-56"),
    new User(8, "Olia", "Marchiv", "OliaM@gmail.com", "093-235-19-61"),
    new User(5, "Andriy", "Havanchak", "AndriyH@gmail.com", "050-352-88-24"),
    new User(2, "Kristina", "Taravska", "KristinaT@gmail.com", "093-951-55-91"),
    new User(7, "Volodia", "Taravska", "VolodiaT@gmail.com", "068-667-84-51"),
    new User(4, "Anna", "Taravska", "AnnaT@gmail.com", "068-485-65-64"),
    new User(9, "Olia", "Maukyt", "OliaM@gmail.com", "063-558-99-57"),
    new User(1, "Maksum", "Maukyt", "MaksumM@gmail.com", "050-225-77-22")
];
console.log(array);

console.log("______________");

// Exercise 2
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log("Exercise 2");

console.log(array.filter(user => !(user.id % 2)));
console.log(array.sort((a, b) => a.id - b.id));

console.log("______________");

// Exercise 3
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log("Exercise 2");

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrayClient = [
    new Client(10, "Andriy", "Gavanchak", "AndriyG@gmail.com", "063-246-19-19", ["potato", "juice", "tomato"]),
    new Client(3, "Maria", "Marchiv", "MariaM@gmail.com", "068-774-20-53", ["apple", "juice"]),
    new Client(6, "Vasia", "Kost", "VasiaK@gmail.com", "063-654-25-56", ["tomato", "juice", "orange"]),
    new Client(8, "Olia", "Marchiv", "OliaM@gmail.com", "093-235-19-61", ["potato", "juice"]),
    new Client(5, "Andriy", "Havanchak", "AndriyH@gmail.com", "050-352-88-24", ["juice", "tomato"]),
    new Client(2, "Kristina", "Taravska", "KristinaT@gmail.com", "093-951-55-91", ["orange", "juice", "apple"]),
    new Client(7, "Volodia", "Taravska", "VolodiaT@gmail.com", "068-667-84-51", ["juice", "potato", "tomato", "pineapple"]),
    new Client(4, "Anna", "Taravska", "AnnaT@gmail.com", "068-485-65-64", ["orange", "apple"]),
    new Client(9, "Olia", "Maukyt", "OliaM@gmail.com", "063-558-99-57", ["orange", "juice", "apple"]),
    new Client(1, "Maksum", "Maukyt", "MaksumM@gmail.com", "050-225-77-22", ["cake", "juice", "pineapple"])
];

console.log(arrayClient.sort((a, b) => a.order.length - b.order.length));

console.log("______________");

// Exercise 4
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log("Exercise 4");

function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
    let car = {
        model: model,
        manufacturer: manufacturer,
        year: year,
        maxSpeed: maxSpeed,
        engineCapacity: engineCapacity
    };
    return {
        drive: function () {
            console.log(`їдемо зі швидкістю ${car.maxSpeed} на годину`);
        },
        info: function () {
            console.log(car);
        },
        increaseMaxSpeed: function (newSpeed) {
            return car.maxSpeed = car.maxSpeed + newSpeed;
        },
        changeYear: function (newValue) {
            return car.year = newValue;
        },
        addDriver: function (driver) {
            return car.driver = driver;
        }
    }
}

let car1 = new Car("BMW", "Німеччина", 2015, 220, 2.0);
car1.drive();
car1.info();
car1.increaseMaxSpeed(20);
car1.changeYear(2016);
// car1.addDriver({
//     name: "Andriy",
//     age: 22,
//     experience: "2 years"
// });
car1.info();

console.log("______________");

// Exercise 5
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log("Exercise 5");

class classCar {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(this);
    }

    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed = this.maxSpeed + newSpeed;
    }

    changeYear(newValue) {
        return this.year = newValue;
    }

    addDriver(driver) {
        return this.driver = driver;
    }

}

let car2 = new classCar("Lexus", "Японія", 2020, 250, 2.0);
car2.drive();
car2.info();
car2.increaseMaxSpeed(20);
car2.changeYear(2021);
car2.addDriver({
    name: "Andriy",
    age: 22,
    experience: "2 years"
});
car2.info();

console.log("______________");

// Exercise 6
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log("Exercise 6");

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('Ann', 22, 37),
    new Cinderella('Mary', 23, 38),
    new Cinderella('Vika', 12, 35),
    new Cinderella('Tany', 24, 39),
    new Cinderella('Svitlana', 58, 39),
    new Cinderella('Ann', 45, 33),
    new Cinderella('Olya', 32, 36),
    new Cinderella('Julia', 22, 34),
    new Cinderella('Katy', 13, 36),
    new Cinderella('Oksana', 25, 37),
]

class Prince {
    constructor(name, age, findedFootSize) {
        this.name = name;
        this.age = age;
        this.findedFootSize = findedFootSize;
    }
}

let prince = new Prince('Andriy', 25, 38);

for (let cinderella of cinderellas) {
    if (cinderella.footSize == prince.findedFootSize) {
        console.log(`Prince find cinderella: ${cinderella.name}`);
    }
}

console.log("Додаткове завдання");

cinderellas.find((cinderella, index) => {
    if (cinderella.footSize === prince.findedFootSize) {
        console.log(cinderella);
    }
});