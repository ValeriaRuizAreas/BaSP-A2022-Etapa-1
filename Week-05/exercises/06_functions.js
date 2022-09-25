console.log('Exercise 06: Functions');

// a. Create a sum function that receives two numeric values
var sum1 = sumA(5, 2);
console.log('5 + 2 =', sum1);

function sumA(a, b){
    return a + b;
}

// b. Validation to control if the parameter is not numeric
sum1 = sumB(6, 3);
console.log('6 + 3 =', sum1);

sum1 = sumB(6, 'pepe');
console.log('6 + pepe =', sum1);

function sumB(a, b){
    if(typeof a != 'number' || typeof b != 'number'){
        alert('Erroneous parameters');
        return NaN;
    }
    return a + b;
}

// c. Create a validate integer function
var isInteger = validateInteger(5);
console.log('5 is integer', isInteger);

isInteger = validateInteger(2.1);
console.log('2.1 is integer', isInteger);

function validateInteger(i){
    return Number.isInteger(i)
}

// d. To the sum of exercise 6b add a call to the function of exercise 6c
sum1 = sumD(7, 4);
console.log('7 + 4 =', sum1);

sum1 = sumD(7, 2.1);
console.log('7 + 2.1 =', sum1);

function sumD(a, b){
    if(typeof a != 'number' || typeof b != 'number'){
        alert('Erroneous parameters');
        return NaN;
    }

    if(!validateInteger(a)){
        alert(a + ' is not a integer');
        return Math.round(a);
    }

    if(!validateInteger(b)){
        alert(b + ' is not a integer');
        return Math.round(b);
    } 
    return a + b;
}

// e. Convert the validation of exercise 6d to a separate function
sum1 = sumE(8, 5);
console.log('8 + 5 =', sum1);

sum1 = sumE(8, 'pepe');
console.log('8 + pepe =', sum1);

sum1 = sumE(8, 5.3);
console.log('8 + 5.3 =', sum1);

function sumE(a, b){
    return validated(a) + validated(b);
}

function validated(v){
    if(typeof v != 'number'){
        alert('Erroneous parameters');
        return NaN;
    }

    if(!validateInteger(v)){
        alert(v + ' is not a integer');
        return Math.round(v);
    }  
    return v;
}
