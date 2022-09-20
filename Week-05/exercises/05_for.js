console.log('Exercise 05: For');

// a. Create an array of 5 words
var lemonCurd = ['eggs', 'cornstarch', 'milk', 'lemon', 'butter'];
for (var i = 0; i < lemonCurd.length; i++) {
    alert(lemonCurd[i]);
}

// b. Convert letter to uppercase
for (var i = 0; i < lemonCurd.length; i++) {
    lemonCurd[i] = lemonCurd[i].substring(0, 1).toUpperCase() + lemonCurd[i].substring(1);
    alert(lemonCurd[i]);
}

// c. Create a sentence variable 
var sentence = '';
    for (var i = 0; i < lemonCurd.length; i++) {
    sentence += lemonCurd[i];
}
alert(sentence);

// d. Create an empty array
var emptyArray = [];
for (var i = 0; i < 10; i++) {
    emptyArray.push(i);
}
console.log(emptyArray);