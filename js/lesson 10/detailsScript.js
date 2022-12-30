let url = new URL(location.href);
let id = url.searchParams.get("id");

let userId = document.querySelector(".id");
let fullname = document.querySelector(".fullname");
let email = document.querySelector(".email");

let street = document.querySelector(".street");
let suite = document.querySelector(".suite");
let city = document.querySelector(".city");
let zipcode = document.querySelector(".zipcode");

let lat = document.querySelector(".lat");
let lng = document.querySelector(".lng");
let phone = document.querySelector(".phone");
let website = document.querySelector(".website");

let companyName = document.querySelector(".companyName");
let catchPhrase = document.querySelector(".catchPhrase");
let bs = document.querySelector(".bs");

fetch("https://jsonplaceholder.typicode.com/users/" + id)
    .then ((users) => users.json())
    .then (user => {
        userId.innerText = user.id;
        fullname.innerText = `${user.name} ${user.username}`;
        email.innerText = user.email;
        street.innerText = user.address.street;
        suite.innerText = user.address.suite;
        city.innerText = user.address.city;
        zipcode.innerText = user.address.zipcode;
        lat.innerText = user.address.geo.lat;
        lng.innerText = user.address.geo.lng;
        phone.innerText = user.phone;
        website.innerText = user.website;
        companyName.innerText = user.company.name;
        catchPhrase.innerText = user.company.catchPhrase;
        bs.innerText = user.company.bs;
    });
















