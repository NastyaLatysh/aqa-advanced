function printNum (num) {
    
    console.log(num);

    if(num <= 0) {
        return;
    } else {
        printNum (num - 1);
    }
}

printNum(5);
