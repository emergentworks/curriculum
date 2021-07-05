// PART ONE: Literals
// write a line of code that adds 2,930 and 6,272 together,
// assign it to a constant, and print it to the console
const addedNumbers = 2930 + 6272;
console.log(addedNumbers);

// write a line of code that multiplies 987 and 3,129,
// assign it to a constant, and print it to the console
const multipliedNumbers = 987 * 3129;
console.log(multipliedNumbers);

// write a line of code that subtracts 452 from 982,
// assign it to a constant, and print it to the console
const subtractedNumbers = 982 - 452;
console.log(subtractedNumbers);

// write a line of code that divides 1560 by 20,
// assign it to a const, and print it to the console
const dividedNumbers = 1560 / 20;
console.log(dividedNumbers);

// write a line of code that calculates 8 to the third power,
// assign it to a const, and print it to the console
const exponentialNumber = 8 ** 3;
console.log(exponentialNumber);

// write a line of code that finds the remainder of 86 divided by 3,
// assign it to a const, and print it to the console
const remainder = 86 % 3;
console.log(remainder);

// write a line of code that increments 100,
// assign it to a const, and print it to the console
let oneHundred = 100;
const incrementOneHundred = ++oneHundred;
console.log(incrementOneHundred);

// write a line of code that decrements 100, 
// assign it to a const, and print it to the console
const decrementOneHundred = --oneHundred;
console.log(decrementOneHundred);

// write a line of code that adds 8,237 and 836, then subtracts 304.
// assign it to a const, and print it to the console
const addAndSubtract = (8237 + 836) - 304; 
console.log(addAndSubtract);

// write a line of code that multiplies 986 by 4, then divide by 2.
// assign it to a const, and print it to the console
const multiplyAndDivide = (986 * 4) / 2;
console.log(multiplyAndDivide);

// write a line of code that subtracts 954 from 1254, then multiply
// it by 7. assign it to a const, and print it to the console
const subtractAndMultiply = (1254 - 954) * 7;
console.log(subtractAndMultiply);

// write a line of code that adds 633 and 877, then divide by 5.
// assign it to a const, and print it to the console
const addAndDivide = (633 + 877) / 5;
console.log(addAndDivide);

// PART TWO: Variables and Expressions
// write an expression with two variables, x and y, that adds two numbers together.
// if x is 238 and y is 9,271, what does the expression evaluate to?
// print the answer to the console
let x = 238;
let y = 9271;
const addTwoNumbers = x + y; 
console.log(addTwoNumbers);

// write an expression with three variables, a, b and c, that adds a and b together,
// then divides the answer by c. 
// if a is 16, b is 14, and c is 6, what does the expression evaluate to?
// print the answer to the console
let a = 16;
let b = 14;
let c = 6;
const addAndDivideNums = (a + b) / c;
console.log(addAndDivideNums);

// write an expression with three variables, d, e and f, that subtracts d from e,
// then multiplies the result by z.
// if d is 87, e is 27 and f is 4, what does the expression evaluate to?
// bonus: if you decrement the total, what does the expression evaluate to?
// what happens to the original value?
// print the answer to the console
let d = 87;
let e = 27;
let f = 4;
let subtractThenMultiply = (d - e) / f;
// const bonusSubtractThenMultiply = --subtractThenMultiply; 
console.log(subtractThenMultiply);

// write an expression with four variables, h, i, j and k, that adds together h and i,
// then adds together j and k, and subtracts the first result from the second.
// if h is 132, i is 258, j is 89 and k is 41, what does the expression evaluate to?
// bonus: if you increment the total, what does the expression evaluate to?
// what happens to the original value?
// print the answer to the console
let h = 132;
let i = 258;
let j = 89;
let k = 41;
let addThenSubtractNums = (h + i) - (j +k);
// const bonusAddThenSubtractNums = ++addThenSubtractNums;
console.log(addThenSubtractNums);

// PART THREE: Word problems
// Hannah is going to a coding bootcamp that last 16 weeks where she'll be in
// class 5 days per week for 8 hours. How many hours total will Hannah be in class?
const totalHours = 16 * 5 * 8;
console.log(totalHours);

// Joel is working at his neighborhood's community garden. The garden is divided 
// into 4 large sections and has 36 total rows of plants. If each section has the
// same number of rows, how many rows of plants does each section have?
const rowsPerSection = 36 / 4;
console.log(rowsPerSection);

// Charlene is handing out free samples at the grocery store. She starts with 48
// samples and gives away 14, then a coworker brings 22 more. How many samples
// does Charlene have left?
const samplesRemaining = 48 - 14 + 22;
console.log(samplesRemaining);

// Tara, James and Terrence are working at a coffee shop and will split the tips
// at the end of the day. In their first shift they make $106 in tips, during the 
// second shift they make $42, during the third shift they make $89 in tips. How
// much tip money will each person take home?
const tipsPerBarista = (106 + 42 + 89) / 3;
console.log(tipsPerBarista);