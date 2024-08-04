//function declaration

function calculateArea1 (width, height) {
    return `The area is ${width * height}`;
}

//function expression

const calculateArea2 = function (width, height) {
    return `The area is ${width * height}`;
}

//arrow function

const calculateArea3 = (width, height) => {
    return `The area is ${width * height}`;
}

console.log(calculateArea1(5, 10));
console.log(calculateArea2(5, 10));
console.log(calculateArea3(5, 10));
