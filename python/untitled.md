# Python Study Guide for a JavaScript Programmer

A guide to commands in Python from what you know in JavaScript

## Python Study Guide for a JavaScript Programmer <a id="03e2"></a>

![](https://cdn-images-1.medium.com/max/800/1*3V9VOfPk_hrFdbEAd3j-QQ.png)

## Applications of Tutorial & Cheat Sheet Respectivley \(At Bottom Of Tutorial\): <a id="5a5b"></a>

## Basics <a id="b0f3"></a>

* **PEP8** : Python Enhancement Proposals, style-guide for Python.
* `print` is the equivalent of `console.log`.

> ‘print\(\) == console.log\(\)’

## `#` is used to make comments in your code. <a id="117c"></a>

```text
def foo():
    """
    The foo function does many amazing things that you
    should not question. Just accept that it exists and
    use it with caution.
    """
    secretThing()
```

> _Python has a built in help function that let’s you see a description of the source code without having to navigate to it… “-SickNasty … Autor Unknown”_

## Numbers <a id="e708"></a>

* Python has three types of numbers:
* **Integer**
* **Positive and Negative Counting Numbers.**

No Decimal Point

> Created by a literal non-decimal point number … **or** … with the _`int()`_ constructor.

```text
print(3) # => 3
print(int(19)) # => 19
print(int()) # => 0
```

**3. Complex Numbers**

> Consist of a real part and imaginary part.

### Boolean is a subtype of integer in Python.🤷‍♂️ <a id="89c4"></a>

> If you came from a background in JavaScript and learned to accept the premise\(s\) of the following meme…

![](https://cdn-images-1.medium.com/max/800/0*eC4EvZcv6hhH88jX.png)

> Than I am sure you will find the means to suspend your disbelief.

```text
print(2.24) # => 2.24
print(2.) # => 2.0
print(float()) # => 0.0
print(27e-5) # => 0.00027
```

## KEEP IN MIND: <a id="2c13"></a>

> **The** **`i`** **is switched to a** **`j`** **in programming.**

T_his is because the letter i is common place as the de facto index for any and all enumerable entities so it just makes sense not to compete for name-**space**_ _when there’s another 25 letters that don’t get used for every loop under the sun. My most medium apologies to Leonhard Euler._

```text
print(7j) # => 7j
print(5.1+7.7j)) # => 5.1+7.7j
print(complex(3, 5)) # => 3+5j
print(complex(17)) # => 17+0j
print(complex()) # => 0j
```

* **Type Casting** : The process of converting one number to another.

```text
# Using Float
print(17)               # => 17
print(float(17))        # => 17.0
```

```text
# Using Int
print(17.0)             # => 17.0
print(int(17.0))        # => 17
```

```text
# Using Str
print(str(17.0) + ' and ' + str(17))        # => 17.0 and 17
```

**The arithmetic operators are the same between JS and Python, with two additions:**

* _“\*\*” : Double asterisk for exponent._
* _“//” : Integer Division._
* **There are no spaces between math operations in Python.**
* **Integer Division gives the other part of the number from Module; it is a way to do round down numbers replacing** **`Math.floor()`** **in JS.**
* **There are no** **`++`** **and** **`--`** **in Python, the only shorthand operators are:**

![](https://cdn-images-1.medium.com/max/600/0*Ez_1PZ93N4FfvkRr.png)

## Strings <a id="f25c"></a>

* Python uses both single and double quotes.
* You can escape strings like so `'Jodi asked, "What\'s up, Sam?"'`
* Multiline strings use triple quotes.

```text
print('''My instructions are very long so to make them
more readable in the code I am putting them on
more than one line. I can even include "quotes"
of any kind because they won't get confused with
the end of the string!''')
```

**Use the** **`len()`** **function to get the length of a string.**

```text
print(len(“Spaghetti”)) # => 9
```

## **Python uses** **`zero-based indexing`** <a id="3f9c"></a>

### Python allows negative indexing \(thank god!\) <a id="55b9"></a>

```text
print(“Spaghetti”[-1]) # => i
```

```text
print(“Spaghetti”[-4]) # => e
```

* Python let’s you use ranges

You can think of this as roughly equivalent to the slice method called on a JavaScript object or string… _\(mind you that in JS … strings are wrapped in an object \(under the hood\)… upon which the string methods are actually called. As a immutable privative type_ _**by textbook definition**, a string literal could not hope to invoke most of it’s methods without violating the state it was bound to on initialization if it were not for this bit of syntactic sugar.\)_

```text
print(“Spaghetti”[1:4]) # => pag
print(“Spaghetti”[4:-1]) # => hett
print(“Spaghetti”[4:4]) # => (empty string)
```

* The end range is exclusive just like `slice` in JS.

```text
# Shortcut to get from the beginning of a string to a certain index.
print("Spaghetti"[:4])  # => Spag
print("Spaghetti"[:-1])    # => Spaghett
```

```text
# Shortcut to get from a certain index to the end of a string.
print("Spaghetti"[1:])  # => paghetti
print("Spaghetti"[-4:])    # => etti
```

* The `index` string function is the equiv. of `indexOf()` in JS

```text
print("Spaghetti".index("h"))    # => 4
print("Spaghetti".index("t"))    # => 6
```

* The `count` function finds out how many times a substring appears in a string… pretty nifty for a hard coded feature of the language.

```text
print("Spaghetti".count("h"))    # => 1
print("Spaghetti".count("t"))    # => 2
print("Spaghetti".count("s"))    # => 0
print('''We choose to go to the moon in this decade and do the other things,
not because they are easy, but because they are hard, because that goal will
serve to organize and measure the best of our energies and skills, because that
challenge is one that we are willing to accept, one we are unwilling to
postpone, and one which we intend to win, and the others, too.
'''.count('the '))                # => 4
```

* **You can use** **`+`** **to concatenate strings, just like in JS.**
* **You can also use “\*” to repeat strings or multiply strings.**
* **Use the** **`format()`** **function to use placeholders in a string to input values later on.**

```text
first_name = "Billy"
last_name = "Bob"
print('Your name is {0} {1}'.format(first_name, last_name))  # => Your name is Billy Bob
```

* _Shorthand way to use format function is:_ `print(f'Your name is {first_name} {last_name}')`

### Some useful string methods. <a id="8ff4"></a>

* **Note that in JS** **`join`** **is used on an Array, in Python it is used on String.**

![](https://cdn-images-1.medium.com/max/800/0*eE3E5H0AoqkhqK1z.png)

* There are also many handy testing methods.

![](https://cdn-images-1.medium.com/max/800/0*Q0CMqFd4PozLDFPB.png)

## Variables and Expressions <a id="920e"></a>

* **Duck-Typing** : Programming Style which avoids checking an object’s type to figure out what it can do.
* Duck Typing is the fundamental approach of Python.
* Assignment of a value automatically declares a variable.

```text
a = 7
b = 'Marbles'
print(a)         # => 7
print(b)         # => Marbles
```

* _**You can chain variable assignments to give multiple var names the same value.**_

### Use with caution as this is highly unreadable <a id="ab40"></a>

```text
count = max = min = 0
print(count)           # => 0
print(max)             # => 0
print(min)             # => 0
```

### The value and type of a variable can be re-assigned at any time. <a id="c91a"></a>

```text
a = 17
print(a)         # => 17
a = 'seventeen'
print(a)         # => seventeen
```

* _`NaN`_ _does not exist in Python, but you can 'create' it like so: **`print(float("nan"))`**_
* _Python replaces_ _`null`_ _with_ _`none`._
* _**`none`**_ _**is an object**_ _and can be directly assigned to a variable._

> Using none is a convenient way to check to see why an action may not be operating correctly in your program.

## Boolean Data Type <a id="6f4e"></a>

* One of the biggest benefits of Python is that it reads more like English than JS does.

![](https://cdn-images-1.medium.com/max/800/0*HQpndNhm1Z_xSoHb.png)

```text
# Logical AND
print(True and True)    # => True
print(True and False)   # => False
print(False and False)  # => False
```

```text
# Logical OR
print(True or True)     # => True
print(True or False)    # => True
print(False or False)   # => False
```

```text
# Logical NOT
print(not True)             # => False
print(not False and True)   # => True
print(not True or False)    # => False
```

* By default, Python considers an object to be true UNLESS it is one of the following:
* Constant `None` or `False`
* Zero of any numeric type.
* Empty Sequence or Collection.
* `True` and `False` must be capitalized

## Comparison Operators <a id="586f"></a>

* Python uses all the same equality operators as JS.
* In Python, equality operators are processed from left to right.
* Logical operators are processed in this order:
* **NOT**
* **AND**
* **OR**

> Just like in JS, you can use `parentheses` to change the inherent order of operations.
>
> **Short Circuit** : Stopping a program when a `true` or `false` has been reached.

![](https://cdn-images-1.medium.com/max/800/0*qHzGRLTOMTf30miT.png)

## Identity vs Equality <a id="4ed8"></a>

```text
print (2 == '2')    # => False
print (2 is '2')    # => False
```

```text
print ("2" == '2')    # => True
print ("2" is '2')    # => True
```

```text
# There is a distinction between the number types.
print (2 == 2.0)    # => True
print (2 is 2.0)    # => False
```

* In the Python community it is better to use `is` and `is not` over `==` or `!=`

## If Statements <a id="a959"></a>

```text
if name == 'Monica':
    print('Hi, Monica.')
```

```text
if name == 'Monica':
    print('Hi, Monica.')
else:
    print('Hello, stranger.')
```

```text
if name == 'Monica':
    print('Hi, Monica.')
elif age < 12:
    print('You are not Monica, kiddo.')
elif age > 2000:
   print('Unlike you, Monica is not an undead, immortal vampire.')
elif age > 100:
   print('You are not Monica, grannie.')
```

> Remember the order of `elif` statements matter.

## While Statements <a id="bc26"></a>

```text
spam = 0
while spam < 5:
  print('Hello, world.')
  spam = spam + 1
```

* `Break` statement also exists in Python.

```text
spam = 0
while True:
  print('Hello, world.')
  spam = spam + 1
  if spam >= 5:
    break
```

* As are `continue` statements

```text
spam = 0
while True:
  print('Hello, world.')
  spam = spam + 1
  if spam < 5:
    continue
  break
```

## Try/Except Statements <a id="fb57"></a>

* Python equivalent to `try/catch`

```text
a = 321
try:
    print(len(a))
except:
    print('Silently handle error here')
```

```text
    # Optionally include a correction to the issue
    a = str(a)
    print(len(a)
```

```text
a = '321'
try:
    print(len(a))
except:
    print('Silently handle error here')
```

```text
    # Optionally include a correction to the issue
    a = str(a)
    print(len(a))
```

* You can name an error to give the output more specificity.

```text
a = 100
b = 0
try:
    c = a / b
except ZeroDivisionError:
    c = None
print(c)
```

* You can also use the `pass` commmand to by pass a certain error.

```text
a = 100
b = 0
try:
    print(a / b)
except ZeroDivisionError:
    pass
```

* The `pass` method won't allow you to bypass every single error so you can chain an exception series like so:

```text
a = 100
# b = "5"
try:
    print(a / b)
except ZeroDivisionError:
    pass
except (TypeError, NameError):
    print("ERROR!")
```

* You can use an `else` statement to end a chain of `except` statements.

```text
# tuple of file names
files = ('one.txt', 'two.txt', 'three.txt')
```

```text
# simple loop
for filename in files:
    try:
        # open the file in read mode
        f = open(filename, 'r')
    except OSError:
        # handle the case where file does not exist or permission is denied
        print('cannot open file', filename)
    else:
        # do stuff with the file object (f)
        print(filename, 'opened successfully')
        print('found', len(f.readlines()), 'lines')
        f.close()
```

* `finally` is used at the end to clean up all actions under any circumstance.

```text
def divide(x, y):
    try:
        result = x / y
    except ZeroDivisionError:
        print("Cannot divide by zero")
    else:
        print("Result is", result)
    finally:
        print("Finally...")
```

* Using duck typing to check to see if some value is able to use a certain method.

```text
# Try a number - nothing will print out
a = 321
if hasattr(a, '__len__'):
    print(len(a))
```

```text
# Try a string - the length will print out (4 in this case)
b = "5555"
if hasattr(b, '__len__'):
    print(len(b))
```

## Pass <a id="e485"></a>

* Pass Keyword is required to write the JS equivalent of :

```text
if (true) {
}
```

```text
while (true) {}
```

```text
if True:
  pass
```

```text
while True:
  pass
```

## Functions <a id="2623"></a>

* **Function definition includes:**
* **The** **`def`** **keyword**
* **The name of the function**
* **A list of parameters enclosed in parentheses.**
* **A colon at the end of the line.**
* **One tab indentation for the code to run.**
* **You can use default parameters just like in JS**

```text
def greeting(name, saying="Hello"):
    print(saying, name)
```

```text
greeting("Monica")
# Hello Monica
```

```text
greeting("Barry", "Hey")
# Hey Barry
```

### **Keep in mind, default parameters must always come after regular parameters.** <a id="f3f1"></a>

```text
# THIS IS BAD CODE AND WILL NOT RUN
def increment(delta=1, value):
    return delta + value
```

* _You can specify arguments by name without destructuring in Python._

```text
def greeting(name, saying="Hello"):
    print(saying, name)
```

```text
# name has no default value, so just provide the value
# saying has a default value, so use a keyword argument
greeting("Monica", saying="Hi")
```

* The `lambda` keyword is used to create anonymous functions and are supposed to be `one-liners`.

`toUpper = lambda s: s.upper()`

## Notes <a id="4564"></a>

### Formatted Strings <a id="b43f"></a>

> Remember that in Python join\(\) is called on a string with an array/list passed in as the argument.  
> Python has a very powerful formatting engine.  
> format\(\) is also applied directly to strings.

```text
shopping_list = [‘bread’,’milk’,’eggs’]
print(‘,’.join(shopping_list))
```

## Comma Thousands Separator <a id="5fda"></a>

```text
print(‘{:,}’.format(1234567890))
‘1,234,567,890’
```

## Date and Time <a id="d948"></a>

```text
d = datetime.datetime(2020, 7, 4, 12, 15, 58)
print(‘{:%Y-%m-%d %H:%M:%S}’.format(d))
‘2020–07–04 12:15:58’
```

## Percentage <a id="37d5"></a>

```text
points = 190
total = 220
print(‘Correct answers: {:.2%}’.format(points/total))
Correct answers: 86.36%
```

## Data Tables <a id="92ea"></a>

```text
width=8
print(‘ decimal hex binary’)
print(‘-’*27)
for num in range(1,16):
for base in ‘dXb’:
print(‘{0:{width}{base}}’.format(num, base=base, width=width), end=’ ‘)
print()
Getting Input from the Command Line
Python runs synchronously, all programs and processes will stop when listening for a user input.
The input function shows a prompt to a user and waits for them to type ‘ENTER’.
Scripts vs Programs
Programming Script : A set of code that runs in a linear fashion.
The largest difference between scripts and programs is the level of complexity and purpose. Programs typically have many UI’s.
```

**Python can be used to display html, css, and JS.**  
_It is common to use Python as an API \(Application Programming Interface\)_

### Structured Data <a id="71b4"></a>

### Sequence : The most basic data structure in Python where the index determines the order. <a id="d9a2"></a>

> List  
> Tuple  
> Range  
> Collections : Unordered data structures, hashable values.

### Dictionaries Sets <a id="56c2"></a>

### Iterable : Generic name for a sequence or collection; any object that can be iterated through. <a id="b683"></a>

### Can be mutable or immutable. Built In Data Types <a id="8011"></a>

## Lists are the python equivalent of arrays. <a id="71e2"></a>

```text
empty_list = []
departments = [‘HR’,’Development’,’Sales’,’Finance’,’IT’,’Customer Support’]
```

## You can instantiate <a id="97e6"></a>

```text
specials = list()
```

### Test if a value is in a list. <a id="e60f"></a>

```text
print(1 in [1, 2, 3]) #> True
print(4 in [1, 2, 3]) #> False
# Tuples : Very similar to lists, but they are immutable
```

### Instantiated with parentheses <a id="6c7d"></a>

```text
time_blocks = (‘AM’,’PM’)
```

### Sometimes instantiated without <a id="60f5"></a>

```text
colors = ‘red’,’blue’,’green’
numbers = 1, 2, 3
```

### Tuple\(\) built in can be used to convert other data into a tuple <a id="5ffb"></a>

```text
tuple(‘abc’) # returns (‘a’, ‘b’, ‘c’)
tuple([1,2,3]) # returns (1, 2, 3)
# Think of tuples as constant variables.
```

### Ranges : A list of numbers which can’t be changed; often used with for loops. <a id="9fca"></a>

**Declared using one to three parameters**.

> Start : opt. default 0, first \# in sequence.  
> Stop : required next number past the last number in the sequence.  
> Step : opt. default 1, difference between each number in the sequence.

```text
range(5) # [0, 1, 2, 3, 4]
range(1,5) # [1, 2, 3, 4]
range(0, 25, 5) # [0, 5, 10, 15, 20]
range(0) # [ ]
for let (i = 0; i < 5; i++)
for let (i = 1; i < 5; i++)
for let (i = 0; i < 25; i+=5)
for let(i = 0; i = 0; i++)
# Keep in mind that stop is not included in the range.
```

### Dictionaries : Mappable collection where a hashable value is used as a key to ref. an object stored in the dictionary. <a id="926c"></a>

### Mutable. <a id="364d"></a>

```text
a = {‘one’:1, ‘two’:2, ‘three’:3}
b = dict(one=1, two=2, three=3)
c = dict([(‘two’, 2), (‘one’, 1), (‘three’, 3)])
# a, b, and c are all equal
```

_**Declared with curly braces of the built in dict\(\)**_

> _Benefit of dictionaries in Python is that it doesn’t matter how it is defined, if the keys and values are the same the dictionaries are considered equal._

**Use the in operator to see if a key exists in a dictionary.**

S**ets : Unordered collection of distinct objects; objects that need to be hashable.**

> _Always be unique, duplicate items are auto dropped from the set._

### Common Uses: <a id="e4df"></a>

> Removing Duplicates  
> Membership Testing  
> Mathematical Operators: Intersection, Union, Difference, Symmetric Difference.

**Standard Set is mutable, Python has a immutable version called frozenset.  
Sets created by putting comma seperated values inside braces:**

```text
school_bag = {‘book’,’paper’,’pencil’,’pencil’,’book’,’book’,’book’,’eraser’}
print(school_bag)
```

### Also can use set constructor to automatically put it into a set. <a id="08b8"></a>

```text
letters = set(‘abracadabra’)
print(letters)
#Built-In Functions
#Functions using iterables
```

**filter\(function, iterable\) : creates new iterable of the same type which includes each item for which the function returns true.**

**map\(function, iterable\) : creates new iterable of the same type which includes the result of calling the function on every item of the iterable.**

**sorted\(iterable, key=None, reverse=False\) : creates a new sorted list from the items in the iterable.**

**Output is always a list**

**key: opt function which coverts and item to a value to be compared.**

**reverse: optional boolean.**

**enumerate\(iterable, start=0\) : starts with a sequence and converts it to a series of tuples**

```text
quarters = [‘First’, ‘Second’, ‘Third’, ‘Fourth’]
print(enumerate(quarters))
print(enumerate(quarters, start=1))
```

### \(0, ‘First’\), \(1, ‘Second’\), \(2, ‘Third’\), \(3, ‘Fourth’\) <a id="127e"></a>

### \(1, ‘First’\), \(2, ‘Second’\), \(3, ‘Third’\), \(4, ‘Fourth’\) <a id="3da0"></a>

> zip\(\*iterables\) : creates a zip object filled with tuples that combine 1 to 1 the items in each provided iterable.  
> Functions that analyze iterable

**len\(iterable\) : returns the count of the number of items.**

**max\(\*args, key=None\) : returns the largest of two or more arguments.**

**max\(iterable, key=None\) : returns the largest item in the iterable.**

_key optional function which converts an item to a value to be compared.  
min works the same way as max_

**sum\(iterable\) : used with a list of numbers to generate the total.**

_There is a faster way to concatenate an array of strings into one string, so do not use sum for that._

**any\(iterable\) : returns True if any items in the iterable are true.**

**all\(iterable\) : returns True is all items in the iterable are true.**

## Working with dictionaries <a id="92ad"></a>

**dir\(dictionary\) : returns the list of keys in the dictionary.  
Working with sets**

**Union : The pipe \| operator or union\(\*sets\) function can be used to produce a new set which is a combination of all elements in the provided set.**

```text
a = {1, 2, 3}
b = {2, 4, 6}
print(a | b) # => {1, 2, 3, 4, 6}
```

### Intersection : The & operator ca be used to produce a new set of only the elements that appear in all sets. <a id="e5aa"></a>

```text
a = {1, 2, 3}
b = {2, 4, 6}
print(a & b) # => {2}
Difference : The — operator can be used to produce a new set of only the elements that appear in the first set and NOT the others.
```

**Symmetric Difference : The ^ operator can be used to produce a new set of only the elements that appear in exactly one set and not in both.**

```text
a = {1, 2, 3}
b = {2, 4, 6}
print(a — b) # => {1, 3}
print(b — a) # => {4, 6}
print(a ^ b) # => {1, 3, 4, 6}
```

## **For Statements In python, there is only one for loop.** <a id="ed03"></a>

Always Includes:

> 1. The for keyword
> 2. A variable name
> 3. The ‘in’ keyword
> 4. An iterable of some kid
> 5. A colon
> 6. On the next line, an indented block of code called the for clause.

**You can use break and continue statements inside for loops as well.**

**You can use the range function as the iterable for the for loop.**

```text
print(‘My name is’)
for i in range(5):
print(‘Carlita Cinco (‘ + str(i) + ‘)’)
```

```text
total = 0
for num in range(101):
total += num
print(total)
Looping over a list in Python
for c in [‘a’, ‘b’, ‘c’]:
print(c)
```

```text
lst = [0, 1, 2, 3]
for i in lst:
print(i)
```

_**Common technique is to use the len\(\) on a pre-defined list with a for loop to iterate over the indices of the list.**_

```text
supplies = [‘pens’, ‘staplers’, ‘flame-throwers’, ‘binders’]
for i in range(len(supplies)):
print(‘Index ‘ + str(i) + ‘ in supplies is: ‘ + supplies[i])
```

**You can loop and destructure at the same time.**

```text
l = 1, 2], [3, 4], [5, 6
for a, b in l:
print(a, ‘, ‘, b)
```

> Prints 1, 2
>
> Prints 3, 4
>
> Prints 5, 6

**You can use values\(\) and keys\(\) to loop over dictionaries.**

```text
spam = {‘color’: ‘red’, ‘age’: 42}
for v in spam.values():
print(v)
```

_Prints red_

_Prints 42_

```text
for k in spam.keys():
print(k)
```

_Prints color_

_Prints age_

**For loops can also iterate over both keys and values.**

**Getting tuples**

```text
for i in spam.items():
print(i)
```

_Prints \(‘color’, ‘red’\)_

_Prints \(‘age’, 42\)_

_Destructuring to values_

```text
for k, v in spam.items():
print(‘Key: ‘ + k + ‘ Value: ‘ + str(v))
```

_Prints Key: age Value: 42_

_Prints Key: color Value: red_

**Looping over string**

```text
for c in “abcdefg”:
print(c)
```

**When you order arguments within a function or function call, the args need to occur in a particular order:**

_formal positional args._

\*args

_keyword args with default values_

\*\*kwargs

```text
def example(arg_1, arg_2, *args, **kwargs):
pass
```

```text
def example2(arg_1, arg_2, *args, kw_1=”shark”, kw_2=”blowfish”, **kwargs):
pass
```

## **Importing in Python** <a id="4451"></a>

**Modules are similar to packages in Node.js**  
Come in different types:

Built-In,

Third-Party,

Custom.

**All loaded using import statements.**

## **Terms** <a id="7c4f"></a>

> module : Python code in a separate file.  
> package : Path to a directory that contains modules.  
> [**init.py**](http://init.py/) : Default file for a package.  
> submodule : Another file in a module’s folder.  
> function : Function in a module.

**A module can be any file but it is usually created by placing a special file init.py into a folder. pic**

_Try to avoid importing with wildcards in Python._

_Use multiple lines for clarity when importing._

```text
from urllib.request import (
HTTPDefaultErrorHandler as ErrorHandler,
HTTPRedirectHandler as RedirectHandler,
Request,
pathname2url,
url2pathname,
urlopen,
)
```

## Watching Out for Python 2 <a id="7040"></a>

**Python 3 removed &lt;&gt; and only uses !=**

**format\(\) was introduced with P3**

**All strings in P3 are unicode and encoded.  
md5 was removed.**

**ConfigParser was renamed to configparser  
sets were killed in favor of set\(\) class.**

### **print was a statement in P2, but is a function in P3.** <a id="6db9"></a>

## Topics revisited \(in python syntax\) <a id="9427"></a>

## Cheat Sheet: <a id="3beb"></a>

### If you found this guide helpful feel free to checkout my github/gists where I host similar content: <a id="e89c"></a>

[bgoonz’s gists · GitHub](https://gist.github.com/bgoonz)

Or Checkout my personal Resource Site:

## Python Cheat Sheet: <a id="2eba"></a>

## If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content: <a id="56d3"></a>

## Or Checkout my personal Resource Site: <a id="a4a1"></a>

## Discover More: <a id="5b19"></a>

