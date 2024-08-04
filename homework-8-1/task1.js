const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for(let i = 0; i <= numbers.length; i++) {
    switch(true){
        case numbers[i] < 0 : 
            negativeCount++;
            break;
        case numbers[i] == 0 :
            zeroCount++;
            break;
        case numbers[i] > 0 :
            positiveCount++;
            break;
    }
}
console.log('positiveCount = ', positiveCount);
console.log('negativeCount = ', negativeCount);
console.log('zeroCount = ', zeroCount);
