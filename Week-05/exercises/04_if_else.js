console.log('Exercise 04: If Else');

// a. Create a random number
var myNumber = Math.random();
console.log('the created number is', myNumber);
if (myNumber >= 0.5) {
    alert('Greater than 0.5');
  } else {
    alert('Lower than 0.5');
  }

// b. Create an Age variable
var age = Math.round(Math.random() * 100);
console.log('The age of my person is', age);
if (age < 2) {
    alert('It is a baby');
  } else if ((age >= 2) && (age <= 12)) {
    alert('It is a children');
  } else if ((age >= 13) && (age <= 19)) {
    alert('It is a teenager');
  } else if ((age >= 20) && (age <= 30)) {
    alert('It is a young');
  } else if ((age >= 31) && (age <= 60)) {
    alert('It is a adult');
  } else if ((age >= 61) && (age <= 75)) {
    alert('It is a elder');
  } else if (age > 75) {
    alert('It is a elderly');
  }