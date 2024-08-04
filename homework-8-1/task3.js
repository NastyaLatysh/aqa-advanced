const numbers = [10, 20, 30, 40, 50];

let result = numbers.reduce(function(sum, currentItem) {
    return sum + currentItem;
}, 0);

console.log(result);
