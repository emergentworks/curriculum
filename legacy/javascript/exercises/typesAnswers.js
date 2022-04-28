// TYPES (and mutability)

// PRIMITIVES
// Strings
// print a string to the console that says "Hello, [your name]!"
console.log("Hello, your-name-goes-here!");
// assign your name to a variable and print the same string to the console using concatenation
let menteeName = "Plato";
console.log("Hello, " + menteeName); // naming the var name throws a deprecation warning

// write any string you want and assign it to a variable, then print the variable to the console
let myString = "any string you want";
console.log(myString);

// check if the variable you just created is a string with the typeof operator
console.log(typeof myString);

// Numbers
// print any number to the console
console.log(2347);
// assign the number to a variable, then print the variable to the console
let myNum = 2347;
console.log(myNum);
// check if the variable you just created is a number with the typeof operator
console.log(typeof myNum);
// for more exercises using numbers, go to the arithmetic.js exercises

// Symbols
// Side note: personally I don't find myself using this type very often in JS, but wanted to
// include it because it is a data type
// Because Symbols are used to create/represent a unique identifier, they're good for creating
// records that need a unique ID. Pretend that we're trying to create an ID for a new user, Adam, to
// register with the Not 911 app. Using a Symbol, assign a unique value to a variable to represent
// the new user's ID. 
const newUserID = Symbol("Adam");
// Print the value to the console.
console.log(newUserID.description);
console.log(newUserID);

// Booleans
// Do you have any siblings? Assign your answer to a boolean variable and print it to the console.
const hasSiblings = true;
console.log(hasSiblings);
// check if the variable you just created is a boolean with the typeof operator
console.log(typeof hasSiblings);
// Assign the number of siblings you have to a variable; check if this number is greater than 3
const numSiblings = 1;
console.log(numSiblings > 3);


// Undefined
// This is where we see mutability in action!
// Initialize a variable called userName without a value, then print it to the console
let userName;
console.log(userName);
// Now assign your name to the variable and print it to the console. 
userName = 'Your name';
console.log(userName);
// Did the value change? Why?
// yes! Undefined in JS is a mutable type (can be changed), so when we defined the variable
// as a string, we assigned a new value to it, meaning it was no longer undefined. 

// STRUCTURAL
// Objects
// create an object with some information about you stored in key-value pairs, such as your name, 
// your age, where you live, what your favorite coding language is so far, etc
const aboutMe = {
    name: 'Your name',
    age: 302,
    location: 'New York',
    faveProgrammingLang: 'ruby',
}
// print the object to the console
console.log(aboutMe);
// check the data type of your object with the typeof operator
console.log(typeof aboutMe);

// Arrays
// Arrays have a whole exercise file unto themselves, so this is just a very basic example.
// create an array with a collection of colors
const colorsArr = ['red', 'green', 'black', 'yellow'];
// print the array to the console
console.log(colorsArr);
// check the data type of your array with the typeof operator
console.log(colorsArr instanceof Array);
console.log(Array.isArray(colorsArr));

// Functions
// Functions have a whole exercise file unto themselves, so this is just a very basic example.
// Write a function named printName that prints your name to the console.
const printName = () => {
    console.log("your name"); // if the mentee is advanced, they might write a fn that takes the name as an arg
}
// Invoke the function to make sure it prints your name
printName();
// check if the function you just created is a function data type with the typeof operator
console.log(typeof printName);

// CONCEPTUAL QUESTIONS
// Alex is looking at the weather and it's raining outside. Should she bring an umbrella? What kind
// of data type would you use for this scenario? / What value could you assign to the variable 
// needsUmbrella for Alex?
let needsUmbrella = true; // boolean

// Lynn is filling out a form on a website; it has a section for comments and questions. What kind of 
// data type is the message she adds to the form?
// string

// Donald is making an appointment online. He selects a timeslot for a 30 minute appointment. What kind of 
// data type is the length of time for the appointment?
// number

// Desirée is looking up books in the catalog of her local library online. Each search result contains a
// title, author, date of publication and availability. What data type do you think this information is stored in?
// Bonus: what data types are used for the title, author, date of publication and availability?
// An object
// Title: string, Author: string, Date of publication: Date object (might be stored as a string), 
// Availability: boolean 
