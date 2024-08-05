function divide (numerator, denominator){

    if (typeof denominator !== 'number' || typeof numerator !== 'number') {
        throw new Error('Parameters is not a number!');
    }

    if (denominator == 0) {
        throw new Error('Parameter denominator is zero!');
    }

    let result = numerator / denominator;
    
    return result;
}

// Normal call
try {
    console.log(divide(10, 2));
} catch (exception) {
    console.log(exception.message);
} finally {
    console.log('Робота завершена');
}

// Error call. denominator = 0
try {
    console.log(divide(10, 0));
} catch (exception) {
    console.log(exception.message);
} finally {
    console.log('Робота завершена');
}

// Error call. Parameter is not a number
try {
    console.log(divide('ten', 2));
} catch (exception) {
    console.log(exception.message);
} finally {
    console.log('Робота завершена');
}
