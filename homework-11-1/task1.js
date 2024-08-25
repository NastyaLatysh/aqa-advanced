function delayText(text, msec){
    setTimeout(function() {
        console.log(text) 
    }, msec);
};


delayText('hello world!', 4000);
