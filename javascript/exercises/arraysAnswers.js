// PART ONE: Expressions
// 1. Declare an array with the names of some of your friends or family. Alphabetize the array and
// print it to the console.
const friendsAndFam = ['Melina', 'Mike', 'Kel', 'Chris', 'Caroline', 'Jackie'];
friendsAndFam.sort();
console.log(friendsAndFam);

// 2a. Declare an array with the ages of some of your friends or family. Find the length of the array
// and print it to the console.
const friendsAndFamAges = [34, 61, 37, 32, 33, 31];
console.log(friendsAndFamAges.length);

// 2b. Add some more integers to the array that are triple or quadruple digits. Sort the array and print
// it to the console. What happens?
friendsAndFamAges.push(100, 4302, 589, 2378);
// weirdly can't chain this ??
friendsAndFamAges.sort();
console.log(friendsAndFamAges);

// 3. Declare an array with the days of the week. Print out 'Wednesday' to the console using the day's
// index in the array.
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(daysOfWeek[2]);

// 4. Declare an array with at least 6 items (they can be strings/numbers/a mix of anything you want).
// Remove the first item in the array and print the array to the console.
const myNewArray = [35, 'pop rocks', 85, 12, 'Kelly Clarkson', 'hamburger'];
myNewArray.shift();
console.log(myNewArray);

// 5. Using the array from problem 4, remove the last item in the array and print it to the console.
myNewArray.pop();
console.log(myNewArray);

// 6. Declare an array with some of your favorite foods (at least 6). Print out the last 3 items of the array.
const myFaveFoods = ['peaches', 'watermelon', 'bagels', 'spicy tomato sauce', 'carnitas', 'eclair'];
myFaveFoods.splice(0, 3);
console.log(myFaveFoods);

// 7. Using the days of the week array, print the array as a string with commas separating each day.
const daysOfWeekString = daysOfWeek.join(", ");
console.log(daysOfWeekString);

// 8. Declare an array with 8 different numbers. Check if the array contains the number 32.
const arrayOfNums = [54, 16, 77, 38, 99, 100, 837, 56, 63];
console.log(arrayOfNums.indexOf(32));

// PART TWO: Word Problems