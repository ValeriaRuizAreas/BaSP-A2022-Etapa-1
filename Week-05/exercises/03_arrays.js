console.log('Exercise 03: Arrays');

// a. Show months 5 and 11
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log('This are the months 5 and 11 of the year:', months[5], months[11]); 

// b. Sort the array alphabetically
months.sort();
console.log('this are the sorted months', months);

// c. Add elements to the beginning and end
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
months.unshift('First month');
months.push('Last month');
console.log('this are the extra months', months);

// d. Remove elements at the beginning and at the end
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
months.shift();
months.pop();
console.log('without the extra months', months);

//e. Reverse the order
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
months.reverse();
console.log('this are the reversed months', months);

// f. Join the elements and separate them with -.
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var joined = months.join('-');
console.log('Joined months:', joined);

// g. Copy of the array from May to November
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var someMonths = months.slice(4, 11);
console.log('This are the months since May to November:', someMonths);
