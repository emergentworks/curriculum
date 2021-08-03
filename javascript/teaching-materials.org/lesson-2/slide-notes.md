# Lesson 2 Presentation Notes
These notes are copied directly from the slides on teaching-materials.org. Not every slide came with notes, so additional notes will be added over time.

## Control Flow & More Data Types

### Slide 2

An 'if' statement tests a condition to see if it is true. If the condition is true, the code inside the 'if' statement is run. If the condition is not true, the 'if' statement exits without being run. A simple 'if' statement looks like this...

Since the value of 'x' is 5, and 5 is greater than 0, the condition is evaluated as true and the code inside our 'if' statement is executed.

### Slide 3

https://developer.mozilla.org/en/JavaScript/Guide/Expressions_and_Operators#Comparison_operators
A comparison operator compares its operands and returns a logical value based on whether the comparison is true. The operands can be numerical, string, logical, or object values. Strings are compared based on standard lexicographical ordering, using Unicode values. In most cases, if the two operands are not of the same type, JavaScript attempts to convert the operands to an appropriate type for the comparison. (The sole exceptions to this rule are === and !==, which perform "strict" equality and inequality and which do not attempt to convert the operands to compatible types before checking equality.) This generally results in a numerical comparison being performed. The following table describes the comparison operators, assuming the following code:
Why can't we just use '='?
The equals sign is always an 'assignment operator' in Javascript. That means that whenever Javascript encounters a '=' it will try to assign the value on the right side of the '=' to the entity on the left side. So in the following example, the value of 'x' is overwritten...

``
    var x = 5;
    if(x = 6){
      console.log(x); //x will equal 6
    }
``

### Slide 4

Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value. However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value. The logical operators are described in the following table.
https://developer.mozilla.org/en/JavaScript/Guide/Expressions_and_Operators#Logical_operators

The 'and' (&&) and 'or' (||) operators allow us to test several conditions in one 'if' statement. To execute the same code if either 'x' or 'y' is 5 we can use the 'or' operator...

``
    if (x === 5 || y === 5) {
      //execute if the value of x is 5 or the value of y is 5
    }
``

If we want to execute some code only if both 'x' and 'y' have the value 5, we use the 'and' operator...

``
    if (x === 5 && y === 5) {
      //execute if the value of x is 5 and the value of y is 5
    }
``

It is important to remember that in both scenarios conditions are tested left to right, and only continue testing if needed.

### Slide 5

### Slide 6

### Slide 7

### Slide 8

### Slide 9

### Slide 10

### Slide 11

### Slide 12

### Slide 13

### Slide 14

### Slide 15

### Slide 16