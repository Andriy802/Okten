// Exercise 1
// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
let target = document.querySelector(".target");

fetch("https://jsonplaceholder.typicode.com/users")
    .then ((value) => value.json())
    .then (users => {
        for (const user of users) {
            let li = document.createElement("li");
            target.appendChild(li);
            let a = document.createElement("a");
            a.innerText = `${user.id} ${user.name}`;
            a.href = "user-details.html?id=" + user.id;
            li.appendChild(a);
        }
    });
