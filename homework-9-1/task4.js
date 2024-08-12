let person = {
    firstName : 'Nastya',
    lastName : 'Latysheva',
    age : 27,
}

person.email = 'test@test.com';
delete person.age;

console.log(person);
