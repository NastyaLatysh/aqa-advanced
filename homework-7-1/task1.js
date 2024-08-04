function handleNum (num, handleEven, handleOdd){
    num % 2 == 0 
        ? handleEven() 
        : handleOdd();
}

function handleEven(){
    console.log('number is even');
}

function handleOdd(){
    console.log('number is odd');
}

handleNum(4, handleEven, handleOdd);
