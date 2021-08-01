# Lesson 1 Presentation Notes
These notes are copied directly from the slides on teaching-materials.org. Not every slide came with notes, so additional notes will be added over time.

## Introduction to Programming

### Slide 2
A way of telling the computer what to do - commands. Computers can only do very basic things, but programs can put together basic commands to achieve complexity. (adders) Computers can execute sequences of basic commands quite fast.

### Slide 3
- Machine code: picture of punch cards
- Assembly language
- Higher-order language: gives programmer more abstract ways to express selves, take care of unnecessary details, common constructs
- How one turns into an other: compiler
- Diagram of all of them
- Where JavaScript fits in
http://moss.csc.ncsu.edu/~mueller/codeopt/codeopt00/notes/intro.html
http://en.wikipedia.org/wiki/Assembly_language#Example_listing_of_assembly_language_source_code
Basically: storing data in memory, manipulating it, doing something with result
http://www.play-hookey.com/computers/language_levels.html

### Slide 4

### Slide 5

### Slide 6

### Slide 7

## Introduction to JS

### Slide 2

### Slide 3
- Made in 10 days. Netscape + Sun marketing move to rename.
- Google Maps + GMail make it quite popular.
- We’ll use parts that are solid and have been around for a long time

### Slide 4

### Slide 5

Each separate instruction in Javascript is called a 'statement'. A 'simple' statement represents a single instruction and ends with a semi-colon. You can think of a simple statement like a sentence - the semi-colon is like a full stop and tells Javascript that your statement is finished.

Let's add a simple statement to our script tags and see what happens...

### Slide 6
Variables are one of the basic building blocks of Javascript. Just like 'x' in algebra, a variable in programming is a named container for a value that can change. Variables have to be 'declared' once before being used, using the 'var' keyword and the name of the variable. A variable declaration is a simple statement, so it ends with a semi-colon.

Assigning an initial value to a variable is called 'initialising'. You can declare and initialise in one go, or seperately.

If its not assigned, it's undefined.

### Slide 7
Variables can be populated with any one of the 'data types' available in Javascript. These are the simple ones we'll be working with today...
There are also data types that cater for situations where there is no value undefined and null.
- Loose typing- you don't tell JS what type of data type it is, it guesses. You can use typeof to see what it thinks.
http://www.daaq.net/old/javascript/index.php?page=js+data+types&parent=core+javascript
          

### Slide 8

### Slide 9

### Slide 10

### Slide 11
- Coercion: 

### Slide 12
- Elaborate on when to use comments

### Slide 13
Alright! We can declare a variable and write a statement - what next? 
- A function is a collection of statements that work together to do something. In the same way a statement is like a sentence, a function is like a paragraph. Functions look like this...
- There is no semi-colon at the end this time. That's because a function declaration is a 'compound' statement, or one that is made up of other statements contained inside curly braces.
- Functions are not run straight away, they are stored in memory until they are called. We call a function like this...
- Side effects

### Slide 14

### Slide 15
Arguments (sometimes called parameters) are values that are passed into a function so it can do the same processing job for different data inputs. We can name our arguments in the function definition, inside the parentheses, separated by commas. We can then access them by name inside the function just like variables...

In the function call, we insert our argument values in the parentheses...

### Slide 16
Functions can be used to do processing tasks, and they can also return a value to the function caller. To do this we use the 'return' keyword. 'Return' also quits the function so it must always be the last statement in your function.
          
If we assign a function call to a variable, it's value will be the result of running the function, ie whatever is 'returned'. If there is no return statement the variable's value will be 'undefined'.

### Slide 17

### Slide 18

### Slide 19