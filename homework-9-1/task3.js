let car1 = {
    brand : 'audi',
    model : 'TT',
    year : 2020,
}

let car2 = {
    brand : 'volkswagen',
    model : 'passat',
    owner : 'Oleksii',
}

let car3 = {...car2, ...car1};

console.log(car3);
