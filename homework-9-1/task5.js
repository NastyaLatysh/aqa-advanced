let users = [
    {
        name: 'Petro',
        age: 39,
        email: 'petro.39@gmail.com'
    },
    {
        name: 'Ivan',
        age: 41,
        sex: 'male'
    },
    {
        name: 'Tamara',
        age: 28,
        job: 'Accountant'
    },
];

for (let user of users) {
    for (let [key, value] of Object.entries(user)) {
        console.log(`${key}: ${value}`);
    }
}

