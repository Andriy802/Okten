// Exersice 1
// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
let form = document.forms[0];
form.onsubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let age = e.target.age.value;
    let obj = {name, age};
    localStorage.setItem("user", JSON.stringify(obj));
};

// Exersice 2
// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let form1 = document.forms[1];
form1.onsubmit = (e) => {
    e.preventDefault();
    let model = e.target.model.value;
    let type = e.target.type.value;
    let volume = e.target.volume.value;
    let car = {model, type, volume};
    let cars = localStorage.getItem("cars")
    console.log(cars)
    if (!cars) {
        let cars = [];
        cars.push(car);
        localStorage.setItem("cars", JSON.stringify(cars));
    } else  {
        let arrayCars = JSON.parse(cars);
        arrayCars.push(car);
        localStorage.setItem("cars", JSON.stringify(arrayCars));
    }
};
