console.log('Exercise 02: Strings');

// a. Create a string variable 
var city = 'Montevideo';
city = city.toUpperCase();
console.log('I live in ', city);

// b. Create a substring variable with the first 5 character
var anotherCity, shortCity;
anotherCity = 'Chinandega';
shortCity = anotherCity.substring(0, 4);
console.log('The short city name is ', shortCity);

// c. Create a substring variable with the last 3 character
var myCountry, shortCountry;
myCountry = 'My beloved Nicaragua';
shortCountry = myCountry.substring(17);
console.log('The last three letters of Nicaragua are ', shortCountry);

// d. Create a variable using substring, toUpperCase, toLowerCase and +
var myComputer, myComputerCapitalized;
myComputer = 'my Dell Laptop';
myComputerCapitalized = myComputer.substring(0, 1).toUpperCase() + myComputer.substring(1).toLowerCase();
console.log(myComputerCapitalized);

// e. Create a variable finding the first space using indexOf
var wordWithSpaces, firstSpace;
wordWithSpaces = 'My favorite movie is'
firstSpace = wordWithSpaces.indexOf(' ');
console.log('The first space of',wordWithSpaces,'is in the position', firstSpace);

// f. Create a variable using indexOf, substring, toUpperCase, toLowerCase and +
var animalNames, result, space;
animalNames = 'hUMMINGBIRD hipPopotamus';
space = animalNames.indexOf(' ');
result = animalNames.substring(0, 1).toUpperCase() + animalNames.substring(1, space).toLowerCase();
result += animalNames.substring(space + 1, space + 2).toUpperCase() + animalNames.substring(space + 2).toLowerCase();
console.log('The result is ', result);