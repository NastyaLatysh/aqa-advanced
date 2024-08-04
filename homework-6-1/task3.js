function checkOrder(available, ordered){


    switch(true) {
        case ordered === 0: 
            return 'Your order is empty';
      
        case ordered > available:
            return 'Your order is too large, we don’t have enough goods.';

        default:
          return 'Your order is accepted';
    }
}

console.log(checkOrder(10, 0));
console.log(checkOrder(10, 10));
console.log(checkOrder(10, 15));
