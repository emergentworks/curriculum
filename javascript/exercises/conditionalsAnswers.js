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
myNum > 5 ? console.log("Number is less than 5") : console.log("Number is greater than or equal to 5");

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
// Note: what happens if you switch around the order of the conditions in your expression?
// A: It creates an early return, so the code prints out the statement the first statement that is true,
// then stop executing the rest of the code. This is important here because if you don't check for both
// the truthiness of BOTH hasOlderSibling and hasYoungerSibling first, you could print out "I have an older 
// sibling" before checking the other conditions that might also be true.

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
// Note: what happens if you forget to add 'break' in a switch statement?
// A: The code keeps executing until it hits the default statement

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

// 8. Create a variable named mySnack and assign it a value of "orange", "cookie", "coffee" or "salad". 
// Write a switch statement that prints "it's a fruit" if the value of mySnack is orange, "it's a sweet" if 
// the value of mySnack is a cookie, "it's a caffeine fix" if the value is coffee, or "it's a vegetable" if
// the value is salad. If the value of mySnack is none of these things, it should print "stay hydrated, drink
// some water!"

const mySnack = "coffee";

switch(mySnack) {
    case("orange"):
      console.log("it's a fruit");
      break;    
    case("cookie"):
      console.log("it's a sweet");
      break;
    case("coffee"):
      console.log("it's a caffeine fix");
      break;
    case("salad"):
      console.log("it's a vegetable");
      break;
    default:
      console.log("stay hydrated, drink some water!");
}

// 9. Write a switch statement to print out whether or not it's a weekday (concentrate on using the fall through
// logic of a switch statement to your advantage, Friday can be either a weekday or a weekend day). Include a 
// default statement of your choice.

const dayOfWeek = "saturday";

switch(dayOfWeek) {
    case("monday"):   
    case("tuesday"):
    case("wednesday"):
    case("thursday"):
    case("friday"):
      console.log("it's a weekday");
      break;
    case("saturday"):
    case("sunday"):
      console.log("it's the weekend");
      break;
    default:
      console.log("Sorry, I don't recognize that day of the week");
}

// PART TWO: Word problems 
// 1. Sidney & Veronica are building a weather app. They want to show a message that says "Bring an umbrella"
// if it's raining outside. Create a variable and write a conditional expression that prints out "Bring an 
// umbrella" to the console if it's raining. If it's not raining, they don't want to print out any other message.
const isRaining = true;
if(isRaining){
    console.log("Bring an umbrella");
}

// 2a. Sidney & Veronica are building out more of their app and have decided they DO want another message if 
// it's not raining. Update your conditional expression to print out "Wear sunscreen" if it's not raining.
if(isRaining){
    console.log("Bring an umbrella");
} else {
    console.log("Wear sunscreen");
}

// 2b. Rewrite the conditional using tertiary syntax.
isRaining ? console.log("Bring an umbrella") : console.log("Wear sunscreen");

// 3. Sidney and Veronica want to take into account a few more variables for their weather app. They want to
// show the message for "Bring an umbrella" if it's raining or if it will rain later. Update the conditional
// with another variable for willRainLater so it prints out the message if it's currently raining or if it
// will rain later. 
const willRainLater = true;

if(isRaining || willRainLater){
    console.log("Bring an umbrella");
} else {
    console.log("Wear sunscreen");
}

// can also be written as a tertiary
// (isRaining || willRainLater) ? console.log("Bring an umbrella") : console.log("Wear sunscreen");

// 4. Sidney and Veronica want to think about even more variables for their umbrella messaging. They want to
// use one variable for currentWeather and assign it a value for "rain", "sun", "clouds", or "snow". Write an
// expression that prints out "Bring an umbrella" if it's raining, "Wear sunscreen" if it's sunny or cloudy, or
// or "Wear a coat" if it's snowy. You can add any fallback message you want. (You don't have to worry about
// future weather forecasts for this problem.)

const currentWeather = "clouds";

switch(currentWeather){
    case("rain"):
      console.log("Bring an umbrella");
      break;
    case("sun"):
    case("clouds"):
      console.log("Wear sunscreen");
      break;
      case("snow"):
      console.log("Wear a coat");
      break;
    default:
      console.log("Sorry, we don't know what the weather is right now");
}