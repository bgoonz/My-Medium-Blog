A Practice-Oriented Guide to JavaScript Basics
==============================================

Understand the essentials of JavaScript while solving problems.

------------------------------------------------------------------------

### A Practice-Oriented Guide to JavaScript Basics

#### Understand the essentials of JavaScript while solving problems.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*lGeGOpKDU551rq82.gif" class="graf-image" /></figure><a href="https://gist.github.com/bgoonz/b34213cae5851d7169b6c78aacb37f3a" class="markup--anchor markup--p-anchor">https://gist.github.com/bgoonz/b34213cae5851d7169b6c78aacb37f3a</a>

### Expressions

> Given a working REPL interface, write and execute a statement that will print “hello world” using console.log

-   <span id="1db8">We can use the `console.log` function to print out statements during code execution. While we are learning introductory material, this may be our end goal. Moving forward, `console.log` will become very valuable not as an end result, but as a tool to aid us in debugging larger and more complex pieces of code.</span>

<!-- -->

    console.log("hello world");

> Identify that strings are a list of characters defined by using double or single quotes

-   <span id="eac4">In JavaScript, we can define a string using either double or single quotes. Both implementations will be treated the same.</span>

<!-- -->

    let validString = "hello";
    let anotherValidString = 'hello';

-   <span id="2589">In general, we want to be consistent in our code. If we start out using single quotes, use them throughout!</span>

> Given an arithmetic expression using +, -, \*, /, %, compute its value

-   <span id="f3cf">We can use the following expressions for mathematical operations in our code:</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*pzuUovrXxWBp8uWbckQ8YA.png" class="graf-image" /></figure>-   <span id="05aa">If you are unfamiliar with the term, modulo can be though of as the remainder when doing division.</span>

> Given an expression, predict if its value is NaN

-   <span id="2a10">In general, any nonsensical arithmetic will result in NaN.</span>
-   <span id="1c4e">Math operations involving `undefined` is perhaps the most common mistake:</span>

<!-- -->

    console.log(undefined + 3); // NaN
    console.log("fish" * 2); // NaN

<figure><img src="https://cdn-images-1.medium.com/max/800/1*V6jsCczPExN88OviJESUrg.png" class="graf-image" /></figure>Apply De Morgan’s law to a boolean expression

-   <span id="9e38">De Morgan’s law explains how to distribute `!` (a negation) across parentheses.</span>
-   <span id="acdc">If we would like to distribute the negation, we also have to flip the comparison operator between `&&` and `||`:</span>
-   <span id="5239">`!(A || B)` is equivalent to `!A && !B`</span>
-   <span id="403b">In words: “Neither A or B can be true -&gt; Both A and B must be false”</span>
-   <span id="0900">`!(A && B)` is equivalent to `!A || !B`</span>
-   <span id="c387">In words: “A and B cannot both be true -&gt; A is false or B is false”</span>

> Given an expression that utilizes operator precedence, compute its value

-   <span id="f1d1">Standard mathematical operator precedence takes place in JavaScript (PEMDAS)</span>
-   <span id="5f56">2 + 3 \* 4 === 14</span>
-   <span id="7f11">4 % 3 + 6 / 2 === 4 (modulo takes place with multiplication/division)</span>

> Given an expression, use the grouping operator to change it’s evaluation

-   <span id="58b1">Reflecting on order of operations, parentheses (grouping operators) are highest priority. Anything inside is evaluated first.</span>
-   <span id="bf42">2 + 3 \* 4 === 14</span>
-   <span id="b83a">(2 + 3) \* 4 === 20</span>

> Given expressions using == and ===, compute their values

-   <span id="bf4a">`===` is used for strict equality, while `==` may coerce a value into another type in order to compare them.</span>
-   <span id="ae25">This coercion can sometimes be hard to predict, so we generaly try to avoid it, opting for a `===` strict equality check.</span>

<!-- -->

    console.log(5 === "5"); // false
    console.log(5 == "5"); // true
    console.log(0 === false); // false
    console.log(0 == false); //true

> Given a code snippet using postfix ++, postfix — , +=, -=, /=, \*=, predict the value of labeled lines

-   <span id="02bb">We can use the shorthand in order to perform common mathematical operations and reassignments for a variable.</span>

<!-- -->

    let number = 0;
    number++; // equivalent to number = number + 1, currently 1
    number--; // equivalent to number = number - 1, currently 0
    number += 10; // equivalent to number = number + 10, currently 10
    number -= 2; // equivalent to number = number - 2, currently 8
    number /= 4; // equivalent to number = number / 4, currently 2
    number *= 7; // equivalent to number = number * 7, currently 14
    console.log(number); // 14

> Create and assign a variable using `let` to a string, integer, and a boolean. Read its value and print to the console.

-   <span id="bdeb">The keyword `let` creates a variable with the given name.</span>
-   <span id="ecd0">We can assign the variable immediately, or later on in our code. If it is not given a value right away, the default value is `undefined`.</span>
-   <span id="1300">In JavaScript, a variable can be reassigned to a completely different type without issue, so a variable that previously held an integer can be reassigned to a string, etc.</span>
-   <span id="d9f5">Whenever we want to use the value in our code, we can reference the variable name.</span>

<!-- -->

    let num; // num is currently undefined
    num = '5'; // num is given the value of the string '5'
    num = 5; // reassigned to an integer is no issue
    let sum = num + 4; // sum is assigned a value in the same line it is declared. num is also used in the calculation by simply referencing its name.
    console.log(sum); // prints 9 to the console.

### Intro to Functions

> Define a function using function declaration

-   <span id="02d1">We can use the keyword `function` to define a function.</span>
-   <span id="f7e4">A function declaration requires three components:</span>
-   <span id="12d3">The name of the function</span>
-   <span id="9417">Parameters that the function will utilize, declared within `()`</span>
-   <span id="ebf9">The code to run when the function is invoked, written within `{}`</span>

<!-- -->

    function myFunction(firstParam, secondParam, thirdParam) {
      // code to run when myFunction is invoked
      // In this code block we can use the parameters passed in to the function
    }

> Define a function that calculates the average of two numbers, call it, pass in arguments, and print it’s return value

    function average(number1, number2) {
      return (number1 + number2) / 2;
    }

    let score = average (100, 90);
    console.log(score); // 95

> Identify the difference between parameters vs arguments

-   <span id="c67c">Parameters are the list of variables that are specified during a function declaration. They are what are referenced in the code that is run when the function is invoked.</span>
-   <span id="35b4">Arguments are the values that are passed in to the function when it is invoked.</span>
-   <span id="a802">In the example above, `number1` and `number2` are the parameters while `100` and `90` are the arguments.</span>

------------------------------------------------------------------------

### Practice:

*More content at* <a href="http://plainenglish.io/" class="markup--anchor markup--p-anchor"><strong><em>plainenglish.io</em></strong></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [September 23, 2021](https://medium.com/p/529617f35a1c).

<a href="https://medium.com/@bryanguner/basic-javascript-529617f35a1c" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on October 14, 2021.
