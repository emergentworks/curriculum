
## Here is a very short introduction to JavaScript

JavaScript (or JS) is a programming language that allows you to do more complex things on web pages and apps than HTML and CSS allows. It seems like the sky's the limit on what JavaScript can do: update the page when a user clicks something, show animations, play audio and video, and other fun things–thanks to JavaScript, the Glitch fish logo changes depending on what time of the day it is!

Much like CSS, you can write JavaScript inline in your HTML, except you use the `<script>` tag:

```
<script>
  window.onload = function() {
    alert('hello from code cooperative!');
  };
</script>
```

...or if you put all the stuff between the `<script>` tag inside a separate file with the .js extension, you can import it into the html with the same tag but no content inside and with an `src` attribute whose value is the url of the JavaScript file you want to import:

```
<script src="example.js"></script>
```

Let's take a look at the first example, because a lot of powerful stuff is happening. In JavaScript, you'll work a lot of with events - things that happen. Some events include the user clicking, moving their mouse, and even just the window loading. Once your browser's window loads, you may want to start your JavaScript, which is why we start with this syntax:

```
window.onload = function() {
  alert('hello from code cooperative!');
};
```

This means that when the window loads, we run a function - and that function contains instructions. In this case, we want to pop up an alert window that says "hello from glitch!".

JavaScript, like HTML and CSS, have comment syntax for allowing you to document your code inline, for better readability and maintainability:

```
/* here is a multi-line comment 
    which is just like the CSS comment syntax */
    
window.onload = function() {
  // this is a single line comment
  alert('hello from glitch!');
  
  // if you prefer single line syntax
  // make sure that if you put it on multiple lines
  // that you remember the double slashes on each line!
};
```

In our app, we want to get the date, format it and update our site to show it. Let's go over some basics that will lead us there!

If you want to assign something in JavaScript, you use the `=` sign. We did this in the above example, assigning our function to the window onload event. We assign things to variable names too so we can use them later on. It's a good idea to name your variables something meaningful so your code is easy to read. Also, it's good to remember that JavaScript is case sensitive. In this app, we have an assignment:

```
const date = new Date();
```

In here, we created a variable called `date` and we assigned it a new `Date` object - which includes date and time info from the browser. The `const` keyword tells JavaScript this variable is a constant whose value won't change. You will encounter other keywords for assignments like `var` and `let` in your journey. Some objects exist already in JavaScript, like Date, and some you have to make yourself. Date includes functions that let us parse info from it. 

For example, we want the month. Unfortunately we don't have a nice function that tells us the month is "January." We need to get whatever info the Date object can give us and figure it out ourselves. JavaScript can be very frustrating, but these challenges are what help us practice and learn!

```
// getMonth() returns the index of a month, integers 0 - 11
const monthIndex = date.getMonth();
```

Take a look [in the app.js source code](https://glitch.com/edit/#!/first-app-js?path=app.js:21:1) to see how we use an `array` to get the right label for the month based on the index we get from `date.getMonth()` and format the rest of the date.

One of the most powerful parts of using JavaScript is the ability to update your web page after it's loaded. Most of the websites and apps you use everyday does this with JavaScript. In our app, we want to update the element in `index.html` that has the id of "date" so that it's HTML is our newly formatted date. Here is how you get an HTML element by its id in JavaScript (we're gonna assign it to a variable:

```
const dateElement = document.getElementById('date');
```

And once we have that element, we can set the content inside of it by setting its `innerHTML` property:

```
// assume dateString was a variable assigned a formatted date
dateElement.innerHTML = dateString;
```

If you've used other programming languages, you'll notice that we don't have to tell JavaScript if our variables are integers or strings–it guesses for us. This means less code for us to write at first, but we are also prone to errors. If you find that you have an error, your browser has developer tools that let you know what and where those errors are. Search your browser of choice and "dev tools" to figure out how to access them!


## You know a little about JavaScript, but there is a lot more!

Anything there is to know about JavaScript is already online, which is great but can also be very overwhelming! Googling what you're looking to do, or to look up code you don't recognize, helps. I also highly recommend [MDN's JS documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript), which includes info on JavaScript along with beginner tutorials. You can also find some intro to JavaScript apps on Glitch in our [Learn to Code category](https://glitch.com/learn-to-code).

Probably the most fun way to dive into JavaScript is to just go for it - check out the files in this project and play around until your site does what you want it to do - here is where you can both express yourself and the possibilities of the Web.

Tomorrow, we'll learn about writing JavaScript on the server with Node.js so we can make our site dynamically update as we update resolution statuses!


ヽ(๏∀๏ )ﾉ

## What files are in this project?

### ← README.md

This file you're reading is a file written in Markdown - which is shorthand for HTML. Developers use README files to describe what their project is, along with any other info they have for contributors and users. In this project's README.md file, we talk about what the project is and list the files that are within it. You should keep this file up to date as you add features and pages to your app!

### ← index.html

This is the home page of our app and it's written entirely in HTML. Keep it updated to let users know what the date is and if you're achieving your resolution goals or whatever status you want to track this month!

### ← about.html

This is another HTML page that we link to in `index.html`. In it, talk about what your resolution is and anything else that you want your audience to know about you and your goals this year!

### ← style.css

This file contains the CSS (Cascading Stylesheet) styling markup code for making our HTML content look nice.

### ← app.js

This is the newest file in the app and it contains the JavaScript that allows us to programmatically get the current date and place it onto the page so we don't have to edit that part of `index.html` every day.
