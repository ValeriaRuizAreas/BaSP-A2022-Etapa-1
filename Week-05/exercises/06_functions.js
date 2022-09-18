console.log('Exercise 06: Functions');

var r1, r2, r3;
r1 = suma(5, 2);
r2 = suma(5, 'pepe');
r3 = suma(5, 2.1);
console.log('the result r1 is:',r1);
console.log('the result r2 is:',r2);
console.log('the result r3 is:',r3);
function suma(a, b){
    if(isNaN(a) || isNaN(b)){
        alert('Erroneous parameters');
        return NaN;
    }
    var ia = integerValue(a);
    var ib = integerValue(b);
    return  ia + ib;
}
function integerValue(i){
    if(validateInteger(i)){
        return i;
    }
    alert('Is not an integer');
    return Math.round(i);
}
function validateInteger(vi){
    if (Number.isInteger(vi)){
        return true;
    } 
    return false;
}