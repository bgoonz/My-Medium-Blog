JavaScript Basics Part 2
========================

Intro with emphasis in the concepts of object encapsulation and arrow functions

------------------------------------------------------------------------

### JavaScript Basics Part 2

#### Intro with emphasis in the concepts of object encapsulation and arrow functions

------------------------------------------------------------------------

### Here’s the repo that coincides with this article:

<a href="https://github.com/bgoonz/javascript-beginners-tutorial" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz/javascript-beginners-tutorial"><strong>GitHub - bgoonz/javascript-beginners-tutorial</strong><br />
<em>Contribute to bgoonz/javascript-beginners-tutorial development by creating an account on GitHub.</em>github.com</a><a href="https://github.com/bgoonz/javascript-beginners-tutorial" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/800/1*xcrk2St5zvHhLAiz83Cp5w.png" class="graf-image" /></figure>### Introduction

JavaScript was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser. The language has since been adopted by all other major graphical web browsers. It has made modern web applications possible — -applications with which you can interact directly without doing a page reload for every action. JavaScript is also used in more traditional websites to provide various forms of interactivity and cleverness.

It is important to note that JavaScript has almost nothing to do with the programming language named Java. The similar name was inspired by marketing considerations rather than good judgment. When JavaScript was being introduced, the Java language was being heavily marketed and was gaining popularity. Someone thought it was a good idea to try to ride along on this success. Now we are stuck with the name.

### Variables

The latest ECMAScript(ES6) standard defines seven data types: Out of which six data types are Primitive(predefined).

-   <span id="3022">Numbers: 1, 6.5, 7 etc.</span>
-   <span id="8618">String: `Hello NoobMaster69` etc.</span>
-   <span id="7b94">Boolean: Represent a logical entity and can have two values: true or false.</span>
-   <span id="404f">Null: This type has only one value : null.</span>
-   <span id="3744">Undefined: A variable that has not been assigned a value is undefined.</span>
-   <span id="d0cc">Object: It is the most important data-type and forms the building blocks for modern JavaScript. We will learn about these data types in details in further articles.</span>

### Variables in JavaScript are containers which hold reusable data. It is the basic unit of storage in a program

-   <span id="95fa">**The value stored in a variable can be changed during program execution.**</span>
-   <span id="b85c">**A variable is only a name given to a memory location, all the operations done on the variable effects that memory location.**</span>
-   <span id="7cd3">**In JavaScript, all the variables must be declared before they can be used.**</span>

Before ES2015, JavaScript variables were solely declared using the var keyword followed by the name of the variable and semi-colon.

> We can initialize the variables either at the time of declaration or also later when we want to use them. Below are some examples of declaring and initializing variables in JavaScript:

    /* declaring single variable */
    let name;

    /* declaring multiple variables */
    let name, title, num;

    /* initializng variables */
    let name = `Lasha`;
    name = `Lasha`;

> After ES2015, we now have two new variable containers : let and const. Now we shall look at both of them one by one. The variable type Let shares lots of similarities with var but unlike var it has scope constraints. Let’s make use of let variable:

    /* let variable */
    let x; // undefined
    let name = `Lasha`;

    /* declaring multiple values */
    let a = 1,
      b = 2,
      c = 3;

    /* assigment */
    let a = 3;
    a = `Lasha`; // works same as var

### Constants

> Constants are block-scoped, much like variables defined using the let statement. The value of a constant can’t be changed through reassignment, and it can’t be redeclared.

#### *Naming a const in JavaScript follow the same rule of naming a variable, except that the const keyword is always required, even for global constants.*

    /* const variable */
    const name = `Lasha`;
    name = `Selly`; // will give us an error

### What is Scope?

<a href="https://medium.com/codex/scope-closures-context-in-javascript-f126f1523104" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/scope-closures-context-in-javascript-f126f1523104"><strong>Breaking Down Scope, Context, And Closure In JavaScript In Simple Terms.</strong><br />
<em>“JavaScript’s global scope is like a public toilet. You can’t avoid going in there, but try to limit your contact with…</em>medium.com</a><a href="https://medium.com/codex/scope-closures-context-in-javascript-f126f1523104" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Scope determines the visibility or accessibility of a variable or other resource in the area of your code.**

#### There’s only one Global scope in the JavaScript document. The area outside all the functions is consider the global scope and the variables defined inside the global scope can be accessed and altered in any other scopes.

    /* global scope */
    let fruit = `apple`;
    console.log(fruit); // apple

    function getFruit() {
      /* fruit is accesable here */
      console.log(fruit);
    }

    getFruit(); // apple

-   <span id="e79e">**Variables declared inside the functions become Local to the function and are considered in the corresponding local scope.**</span>
-   <span id="bbcf">**Every Functions has its own scope. Same variable can be used in different functions because they are bound to the respective functions and are not mutual visible.**</span>

<!-- -->

    function foo1() {
      /* local scope 1 */
      function foo2() {
        /* local scope 2 */
      }
    }
    /* global scope */
    function foo3() {
      /* local scope 3 */
    }
    /* global scope */

#### Local scope can be divided into function scope and block scope. The concept of block scope is introduced in ES2015 together with the new ways to declare variables — const and let.

------------------------------------------------------------------------

### Objects

Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.

**In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.**

*A JavaScript object has properties associated with it. A property of an object can be explained as a variable that is attached to the object. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects. The properties of an object define the characteristics of the object.*

    const myCar = new Object();
    myCar.make = `Ford`;
    myCar.model = `Mustang`;
    myCar.year = 1969;

Unassigned properties of an object are undefined (and not null).

    myCar.color; /* undefined */

> An object property name can be any valid JavaScript string, or anything that can be converted to a string, including the empty string. However, any property name that is not a valid JavaScript identifier (for example, a property name that has a space or a hyphen, or that starts with a number) can only be accessed using the square bracket notation. This notation is also very useful when property names are to be dynamically determined (when the property name is not determined until runtime).

#### Examples are as follows:

    /* four variables are created and assigned in a single go, separated by commas */
    const myObj = new Object(),
      str = `myString`,
      rand = Math.random(),
      obj = new Object();

    myObj.type = `Dot syntax`;
    myObj[`date created`] = `String with space`;
    myObj[str] = `String value`;
    myObj[rand] = `Random Number`;
    myObj[obj] = `Object`;
    myObj[``] = `Even an empty string`;

    console.log(myObj);

### Arrays

An array is a special variable, which can hold more than one value at a time. If you have a list of items (a list of anime series, for example), storing the animes in single variables could look like this:

    const anime1 = `One Piece`;
    const anime2 = `Steins;Gate`;
    const anime3 = `Berserk`;

*However, what if you want to loop through the animes and find a specific one? And what if you had not 3 animes, but 300? The solution is an array! An array can hold many values under a single name, and you can access the values by referring to an index number.*

    const animes = [`One Piece`, `Steins;Gate`, `Berserk`];

You access an array element by referring to the index number.This statement accesses the value of the first element in animes:

**Note: Array indexes start with 0. \[0\] is the first element. \[1\] is the second element.**

    const name1 = animes[0]; // One Piece
    const name2 = animes[1]; // Steins;Gate
    const name3 = animes[2]; // Berserk

The length property of an array returns the length of an array (the number of array elements).

    const fruits = [`Banana`, `Orange`, `Apple`, `Kiwi`];
    fruits.length; // the length of fruits is 4

### Comparison Operators

In most of my JavaScript interviews for a Front-End Developer position, I have been asked this exact question. What is the difference between comparing variables using `==` and `===` operator?

We will see couple of example of both operator in this article, to understand difference between them much better.

> Since JavaScript support both strict equality and type-converting equality, it’s important to know which operator is used for which operation. As I said that, === takes type of variable in consideration, while == make type correction based upon values of variables, following are couple of more differences between `==` and `===` operator in JavaScript programming language :

`==` *operator is known as type coercion operator and anytime if both values are same and compared using ==operator, type coercion happens. On the other hand === is known as strictly equality operator. It's much similar Java's equality operator (==), which gives compilation error if you compare two variables, whose types are not compatible to each other. In fact, you should always use* `===` *operator for comparing variables or just for any comparison.*

***When we compare two variables of different type e.g. a boolean with a string or a number with String using == operator, it automatically converts one type* into *another and return value based upon content equality. This will be much clear with following example of == and === operator in JavaScript :***

    0 == false; // true, because false is equivalent of 0
    0 === false; // false, because both operands are of different type
    2 == `2`; // true, auto type coercion, string converted into number
    2 === `2`; // false, since both operands are not of same type

### Embed JavaScript code in an HTML page

Here’s an example you can look at for combining js css and html!

Placing JavaScript code inside the `<script>` element directly is not recommended and should be used only for proof of concept or testing purposes.

The JavaScript code in the `<script>` element is interpreted from top to bottom. For example:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>JavaScript Hello World Example</title>
        <script>
            alert('Hello, World!');
        </script>
    </head>
    <body>
    </body>
    </html>

    Code language: HTML, XML (xml)

In the `<script>` element, we use the `alert()` function to display the `Hello, World!` message.

### Include an external JavaScript file

To include a JavaScript from an external file:

-   <span id="bd6e">First, create a file whose extension is `.js` e.g., `app.js` and place it in the `js` subfolder. Note that placing the JavaScript file in the `js `folder is not required however it is a good practice.</span>
-   <span id="6a17">Then, use the URL to the JavasScript source code file in the `src` attribute of the `<script>` element.</span>

The following shows the contents of the app.js file:

    alert('Hello, World!');

    Code language: JavaScript (javascript)

And the following shows the `helloworld.html` file:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>JavaScript Hello World Example</title>
        <script src="js/app.js"></script>
    </head>
    <body>

    </body>
    </html>

    Code language: HTML, XML (xml)

If you launch the `helloworld.html` file in the web browser, you will see a popup that has the `Hello, World!` message.

Note that you can load a JavaScript file from a remote server. This allows you to serve up JavaScript from various domains e.g., content delivery network (CDN) to speed up the page.

When you have multiple JavaScript files on a page, the JavaScript engine interprets the files in the order that they appear. See the following example:

    <script src="js/service.js"></script>
    <script src="js/app.js"></script>

    Code language: HTML, XML (xml)

JavaScript engine will interpret the `service.js` and the `app.js` files in sequence. It completes interpreting the `service.js` file first before interpreting the `app.js` file.

For the page that includes many external JavaScript files, the blank page is shown during the page rendering phase. To avoid this, you include the JavaScript file just before the `</body>` tag as shown in this example:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>JavaScript Hello World Example</title>
    </head>
    <body>
     
       <!-- end of page content here-->
       <script src="js/service.js"></script>
       <script src="js/app.js"></script>
    </body>
    </html>

    Code language: HTML, XML (xml)

### The `async` and `defer` attributes

To change how the JavaScript code load and execute, you use one of two attributes of the `<script>` element `async` and `defer`.

These attributes take effect only on the external script files. The `async` attribute, if visible, instructs the web browser to execute the JavaScript file asynchronously if possible. The `async` attribute does not guarantee the script files to execute in the order that they appear. For example:

    <script async src="service.js"></script>
    <script async src="app.js"></script>

    Code language: HTML, XML (xml)

The `app.js` file might execute before the `service.js` file, therefore, you must ensure that there is no dependency between them.

The `defer` attribute, if visible, requests the web browser to execute the script file after the document has been parsed.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>JavaScript defer demonstration</title>
        <script defer src="defer-script.js"></script>
    </head>
    <body>
    </body>
    </html>

    Code language: HTML, XML (xml)

Even though we place the `<script>` element in the `<head>` section, the script will wait for the browser to receive the closing tag `<html>` to start executing.

### Summary

-   <span id="380c">Use `<script>` element to include a JavaScript file in a HTML page.</span>
-   <span id="e369">The `async` attribute of the `<script>` element instructs the web browser to fetch the JavaScript file in parallel and then parse and execute as soon as the JavaScript file is available.</span>
-   <span id="ddd0">The `defer` attribute of the `<script>` element allows the web browser to execute the JavaScript file after the document has been parsed.</span>

### What is a Closure?

<a href="https://bryanguner.medium.com/closure-in-javascript-50a59e79703f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/closure-in-javascript-50a59e79703f"><strong>Closure In JavaScript</strong><br />
<em>And why you’ve been stressed about it for no reason.</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/closure-in-javascript-50a59e79703f" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).**

> **In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.**

To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function. The inner function will have access to the variables in the outer function scope, even after the outer function has returned.

#### **In JavaScript, closures are the primary mechanism used to enable data privacy.**

-   <span id="f692">**When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function.**</span>
-   <span id="feb0">**You can’t get at the data from an outside scope except through the object’s privileged methods.**</span>

#### Example :

    var passed = 3;

    var addTo = function () {
      var inner = 2;
      return passed + inner;
    };

    console.log(addTo(3)); // 5

#### Here is the same function using ES2015 syntax:

    const passed = 3;

    const addTo = () => {
      const inner = 2;
      return passed + inner;
    };

    console.log(addTo(3)); // 5

------------------------------------------------------------------------

Here’s a REPL with examples supporting the numbered points below:

------------------------------------------------------------------------

------------------------------------------------------------------------

------------------------------------------------------------------------

#### Callback Examples (Can you guess what the result of calling the greaterCB function with different callback functions passed in as arguments?)

------------------------------------------------------------------------

------------------------------------------------------------------------

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [October 2, 2021](https://medium.com/p/e38998aec226).

<a href="https://medium.com/@bryanguner/javascript-basics-part-2-e38998aec226" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on October 14, 2021.
