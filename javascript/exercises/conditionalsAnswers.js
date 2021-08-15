// PART ONE: Expressions
// 1. Create a variable named sayHello and assign it a boolean value (can be true or false). Write an 
// expression that prints "hello" to the console if sayHello is true, or "goodbye" if sayHello is false.
const sayHello = true;

if(sayHello){
  console.log("hello");
} else {
  console.log("goodbye");
}

// 2. Create a variable named myNumber and assign it an integer between 1 and 10. Write an expression
// that prints "number is less than 5" to the console if the number is less than 5, or "number is greater
// than or equal to 5" if the number is greater than or equal to 5. (Bonus: concatenate the variable so
// the message in the console prints the value of myNumber as part of the sentence.)

const myNum = 5;

if(myNum < 5){
  console.log("Number is less than 5");
} else {
  console.log("Number is greater than or equal to 5");
}

// 3. Building on the exercise above, write an expression that prints "number is less than 5" to the 
// console if the number is less than 5, or "number is equal to 5" if the number is 5, or "number is
// greater than 5" if the number is greater than or equal to 5.

if(myNum < 5){
    console.log("Number is less than 5");
} else if(myNum === 5) {
    console.log("Number is equal to 5");
} else if(myNum > 5) {
    console.log("Number is greater than 5");
}

// 4. Rewrite problem #1 using tertiary syntax.
sayHello ? console.log("hello") : console.log("goodbye");

// 5. Create two variables named hasOlderSibling and hasYoungerSibling. If you have an older sibling,
// assign hasOlderSibling to true (false if you do not); if you have a younger sibling, assign 
// hasYoungerSibling to true (false if you do not). Write an expression that prints "I have a sibling" to
// the console if either hasOlderSibling OR hasYoungerSibling is true, or else have it print "I have no
// siblings".

const hasOlderSibling = true;
const hasYoungerSibling = false;

if(hasOlderSibling || hasYoungerSibling) {
    console.log("I have a sibling");
} else {
    console.log("I have no siblings");
}

// 6. Building on the exercise above, write an expression that prints "I have an older and a younger sibling"
// if both variables are true, or have it print "I have an older sibling" if only hasOlderSibling is true, or
// have it print "I have a younger sibling" if only hasYoungerSibling is true, or have it print "I have no
// siblings" if neither are true.

if(hasOlderSibling && hasYoungerSibling) {
    console.log("I have an older and a younger sibling");
} else if(hasOlderSibling) {
    console.log("I have an older sibling");
} else if(hasYoungerSibling){
    console.log("I have a younger sibling");
} else {
    console.log("I have no siblings");
}

// 7. Create a variable named myNextClass and assign it a value of "Math", "English", "Chemistry" or "Music".
// Write a switch statement that evaluates myClass and prints "Bring a calculator" if the value of 
// myNextClass is Math, "Bring a notebook and pencil" if the value is English, "Bring a lab coat" if the 
// value is Chemistry and "Bring a mic" if the value is Music. If the value of myNextClass is none of those
// subjects, it should print "Take a study break".

const myNextClass = "English";

switch(myNextClass){
  case("Math"):
    console.log("Bring a calculator");
    break;    
  case("English"):
    console.log("Bring a notebook and pencil");
    break;
  case("Chemistry"):
    console.log("Bring a lab coat");
    break;
  case("Music"):
    console.log("Bring a mic");
    break;
  default:
    console.log("Take a study break");
}