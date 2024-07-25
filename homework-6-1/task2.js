function isAdult (age) {

    return age >= 18 
        ? `Age = ${age}, user is adult.`
        : `Age = ${age}, user is child.`;
    
}

console.log(isAdult(25));
console.log(isAdult(15));
