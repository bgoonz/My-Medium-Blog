JavaScript Algorithmic Interview Questions And Considerations
=============================================================

Order the common complexity classes according to their growth rate

------------------------------------------------------------------------

### JavaScript Algorithmic Interview Questions And Considerations

#### Order the common complexity classes according to their growth rate

<figure><img src="https://cdn-images-1.medium.com/max/2560/0*RRUd6pLQXaM0XC3E.png" class="graf-image" /></figure>

### Big-O

1.  <span id="db0f">Order the common complexity classes according to their growth rate</span>

#### The following are in order from smallest growth (most efficient) to largest:

------------------------------------------------------------------------

> BEST

> constant O(1)

> logarithmic O(log n)

> linear O(n)

> loglinear, linearithmic, quasilinear O(n log n)

> polynomial O(n^c) -&gt; O(n²), O(n³)

> exponential O(c^n) -&gt; O(2^n), O(3^n)

> factorial O(n!)

> WORST

------------------------------------------------------------------------

1.  <span id="771f">Identify the complexity classes of common sort methods</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*1FjRLFXIIS9yS-yGb3oWRw.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*bnKAEgqnyCd22dd7.png" class="graf-image" /></figure>\*merge sort can be O(n) space complexity

-   <span id="fc01">if we are not creating a new array every time we call merge sort on the left and right side. We can make it O(n) if we keep track of the start and end index of the left/right sides in the original array and pass that into the merge sort calls to the left and right side. In the way we implement, merge sort’s space complexity is O(n log n) because we create a new array to pass into each call of merge sort to the left and right sides.</span>

***\*\*quick sort’s complexities are a little more complicated***

-   <span id="e4be">We are generally only concerned with the worst-scenario when we talk Big-O.</span>
-   <span id="19c0">With quick sort, the worst case is exceedingly rare (only occurs when our pivot for each round happens to be the next element, resulting in us having to choose n pivot points)</span>
-   <span id="0682">Because it is so rare that this occurs, most people will use consider quick sort to be closer to O(n log n) time complexity.</span>
-   <span id="f0ac">We also have two space complexities listed. The version that we used in class creates a new array for every call to quicksort, resulting in O(n log n) space. With some tweaking, we can sort in place, modifying the original array and cutting our space complexity to O(log n), which is just a result of the stack frames that we have to create. It’s good to know this method exists, but you will not need to create or identify this version.</span>

### Identify complexity classes of code

### Memoization and Tabulation

#### 1.) Apply memoization to recursive problems to make them less than polynomial time.

> Main steps for memoizing a problem:

2.) Write out the brute force recursion

3.) Add the memo object as an additional argument

> Keys on this object represent input, values are the corresponding output

4.) Add a base condition that returns the stored value if the argument is already in the memo

5.) Before returning a calculation, store the result in the memo for future use

> Example of a standard and memoized fibonacci:

### Apply tabulation to iterative problems to make them less than polynomial time.

#### Main considerations for using tabulation:

-   <span id="7e53">Figure out how big is your table</span>
-   <span id="070d">Typically going to be base on input size (number in fibonacci, length of string in wordBreak)</span>
-   <span id="d0e2">What does my table represent?</span>
-   <span id="cab7">You are generally building up your answer.</span>
-   <span id="4ae3">In fibonacci, we used the table to store the fib number at the corresponding index.</span>
-   <span id="5e26">In stepper, we stored the boolean of whether it was possible to get to that location.</span>
-   <span id="f38e">What initial values do I need to seed?</span>
-   <span id="b8eb">Consider what your end result should be (boolean, number, etc.).</span>
-   <span id="8df0">Your seed data is generally going to be the immediate answer that we know from our base condition.</span>
-   <span id="b5a2">In fibonacci, we knew the first two numbers of the series.</span>
-   <span id="7d24">In stepper, we knew that it was possible to get to our starting location, so we seeded it as true, defaulting the rest to false so that we could later change its value if we could make that step.</span>
-   <span id="331a">How do I iterate and fill out my table?</span>
-   <span id="4c27">We typically need to iterate over or up to our input in some way in order to update and build up our table until we get our final result.</span>
-   <span id="6db7">In fibonacci, we iterated up to our input number in order to calculate the fib number at each step.</span>
-   <span id="feee">In stepper, we iterated over each possible stepping location. If we could have made it to that point from our previous steps (ie that index was true in our table), we continued updating our table by marking the possible landing spots as true.</span>

> Example of a tabulated fibonacci:

------------------------------------------------------------------------

### Sorting Algorithms

#### binary search:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*ptJZwwu3qWW1-iFqWO3hHw.gif" class="graf-image" /></figure>#### bubble sort:

<figure><img src="https://cdn-images-1.medium.com/max/600/1*HbnJn-luQWsgmhU7xlnmOQ.gif" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*P-kiWQuAn9xSQf3Yi_AXTg.gif" class="graf-image" /></figure>

#### insertion sort:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*g6wukFsVXQCMw8AiFjWOpQ.gif" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/600/1*YhSImMY4cnAXHE_JUG70Fg.gif" class="graf-image" /></figure>

#### merge sort:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*-H27B-Cw_Itxw5Site8o0Q.gif" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/600/1*SRsp6U0YGfart3CYJ3CiFw.gif" class="graf-image" /></figure>

#### quick sort:

<figure><img src="https://cdn-images-1.medium.com/max/600/1*Fa1rZKJPKkPntirlfuPw0g.gif" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*815ToHJKLWPEHHHVQ5gc-A.gif" class="graf-image" /></figure>

#### selection sort:

<figure><img src="https://cdn-images-1.medium.com/max/600/1*k50VEDVDxZvkM7OXZUQ-rg.gif" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*DsLB2403CJuuPIuBhhiWtw.gif" class="graf-image" /></figure>

### Explain the complexity of and write a function that performs bubble sort on an array of numbers.

#### Time Complexity: O(n²)

-   <span id="819f">In our worst case, our input is in the opposite order. We have to perform n swaps and loop through our input n times because a swap is made each time.</span>

#### Space Complexity: O(1)

-   <span id="139e">We are creating the same number of variables with an exact size, independent of our input. No new arrays are created.</span>

> Code example for bubbleSort:

### Explain the complexity of and write a function that performs selection sort on an array of numbers.

#### Time Complexity: O(n²)

-   <span id="3ed5">Our nested loop structure is dependent on the size of our input.</span>
-   <span id="27dc">The outer loop always occurs n times.</span>
-   <span id="d3d7">For each of those iterations, we have another loop that runs (n — i) times. This just means that the inner loop runs one less time each iteration, but this averages out to (n/2).</span>
-   <span id="ae52">Our nested structure is then T(n \* n/2) = O(n²)</span>

#### Space Complexity: O(1)

-   <span id="5cc1">We are creating the same number of variables with an exact size, independent of our input. No new arrays are created.</span>

------------------------------------------------------------------------

> Code example for selectionSort:

------------------------------------------------------------------------

### Explain the complexity of and write a function that performs insertion sort on an array of numbers.

#### Time Complexity: O(n²)

-   <span id="ca0d">Our nested loop structure is dependent on the size of our input.</span>
-   <span id="a942">The outer loop always occurs n times.</span>
-   <span id="6aa5">For each of those iterations, we have another loop that runs a maximum of (i — 1) times. This just means that the inner loop runs one more time each iteration, but this averages out to (n/2).</span>
-   <span id="5148">Our nested structure is then T(n \* n/2) = O(n²)</span>

#### Space Complexity: O(1)

-   <span id="bd9c">We are creating the same number of variables with an exact size, independent of our input. No new arrays are created.</span>

------------------------------------------------------------------------

> Code example for insertionSort:

------------------------------------------------------------------------

### Explain the complexity of and write a function that performs merge sort on an array of numbers.

#### Time Complexity: O(n log n)

-   <span id="57c1">Our mergeSort function divides our input in half at each step, recursively calling itself with smaller and smaller input. This results in log n stack frames.</span>
-   <span id="ccc7">On each stack frame, our worst case scenario is having to make n comparisons in our merge function in order to determine which element should come next in our sorted array.</span>
-   <span id="024a">Since we have log n stack frames and n operations on each frame, we end up with an O(n log n) time complexity</span>

#### Space Complexity: O(n log n)

-   <span id="bcbb">We are ultimately creating n subarrays for every log n stack frames, making our space complexity quasilinear to our input size.</span>
-   <span id="a561">IDEALLY merge sort space complexity is O(n) see <a href="https://github.com/bgoonz/Data-Structures-Notes/blob/master/resources/General/W7D4/W7_filled_in_LOs.md#####*merge-sort-can-be-O%28n%29-space-complexity" class="markup--anchor markup--li-anchor">merge sort space complexity explanation</a></span>

> Code example for mergeSort:

------------------------------------------------------------------------

### Explain the complexity of and write a function that performs quick sort on an array of numbers.

#### Time Complexity: Average O(n log n), Worst O(n²)

-   <span id="54db">In our worst case, the pivot that we select results in every element going into either the left or right array. If this happens we end up making n recursive calls to quickSort, with n comparisons at each call.</span>
-   <span id="2f49">In our average case, we pick something that more evenly splits the arrays, resulting in approximately log n recursive calls and an overall complexity of O(n log n).</span>
-   <span id="5101">Quick sort is unique in that the worst case is so exceedingly rare that it is often considered an O(n log n) complexity, even though this is not technically accurate.</span>

#### Space Complexity: Our implementation O(n), Possible implementation O(log n)

-   <span id="7be0">The partition arrays that we create are directly proportional to the size of the input, resulting in O(n) space complexity.</span>
-   <span id="c741">With some tweaking, we could implement an in-place quick sort, which would eliminate the creation of new arrays. In this case, the log n stack frames from the recursion are the only proportional amount of space that is used, resulting in O(log n) space complexity.</span>

> Code example for quickSort:

### Explain the complexity of and write a function that performs a binary search on a sorted array of numbers.

#### Time Complexity: O(log n)

-   <span id="4547">With each recursive call, we split our input in half. This means we have to make at most log n checks to know if the element is in our array.</span>

#### Space Complexity: Our implementation O(n), Possible implementation O(1)

-   <span id="52ef">We have to make a subarray for each recursive call. In the worst case (we don’t find the element), the total length of these arrays is approximately equal to the length of the original (n).</span>
-   <span id="5d90">If we kept references to the beginning and end index of the portion of the array that we are searching, we could eliminate the need for creating new subarrays. We could also use a while loop to perform this functionality until we either found our target or our beginning and end indices crossed. This would eliminate the space required for recursive calls (adding stack frames). Ultimately we would be using the same number of variables independent of input size, resulting in O(1).</span>

#### Code example for binarySearch and binarySearchIndex:

### Lists, Stacks, and Queues

-   <span id="ec6d">Do the projects over and see make sure to know the following</span>

### Explain and implement a Linked List.

-   <span id="9f22">A linked list are a collection of ordered data that track three main components:</span>
-   <span id="2e24">head: beginning of the list</span>
-   <span id="8b97">tail: end of the list</span>
-   <span id="750d">length: count of the number of elements in the list</span>
-   <span id="b8d7">The main differences between lists and arrays are that a list does not have random access or indices to signify where in the list an element is.</span>
-   <span id="0696">The only references to elements that we have in a list are the head and the tail.</span>
-   <span id="cae5">If we want an element in the middle of the list, we would have to traverse the list until we encountered it.</span>
-   <span id="4668">The two main types of linked lists that we talked about are Singly Linked Lists and Doubly Linked Lists.</span>
-   <span id="9d88">Singly Linked Lists are composed of nodes that only have a reference to the next node in the list. We can only traverse the list in one direction.</span>
-   <span id="6c92">Doubly Linked Lists are composed of nodes that have a reference to both the next node and the previous node in the list. This allows us to traverse both forwards and backwards.</span>

### Methods of a linked list that we should know are:

-   <span id="333c">addToTail: Adds a new node to the end of the list.</span>
-   <span id="a488">addToHead: Adds a new node to the front of the list.</span>
-   <span id="3b08">insertAt: Adds a new node at the specified position (we need to traverse to that point, then update pointers)</span>
-   <span id="2342">removeTail: Removes the last node of the list.</span>
-   <span id="4909">removeHead: Removes the first node of the list.</span>
-   <span id="2198">removeFrom: Removes the node at the specified position.</span>
-   <span id="3853">contains: Traverses the list and returns a boolean to indicate if the value was found at any node.</span>
-   <span id="9720">get: Returns a reference to the node at the specified position.</span>
-   <span id="2b6e">set: Updates the value of the node at the specified position.</span>
-   <span id="a42b">size: Returns the current length of the list.</span>

#### Time complexities for these methods:

-   <span id="8050">Accessing a node: O(n), because we may have to traverse the entire list.</span>
-   <span id="26a2">Searching a list: O(n), because we may have to traverse the entire list.</span>
-   <span id="9582">Inserting a value: O(1), under the assumption that we have a reference to the node that we want to insert it after/before. If we don’t have this reference we would first have to access it (O(n) from above), but the actual creation is O(1)</span>
-   <span id="10c9">Deleting a node: O(1), for the same reasons as insertion. If we first need to find the previous and next nodes, we would need to access them (O(n) from above), but the actual deletion is O(1)</span>
-   <span id="63b3">Be able to implement a Singly Linked List and a Doubly Linked List. This would require you to use a Node class with a value instance variable and an instance variable that points to the next (and possibly previous) Node instance(s). You should then be able to interact with these Nodes to perform all of the actions of a Linked List, as we defined above.</span>

### Explain and implement a Stack.

-   <span id="3bdc">A Last In First Out (LIFO) Abstract Data Type (ADT).</span>
-   <span id="8bcf">LIFO: The last element put into the stack is the first thing removed from it. Think of it as a can of Pringles or a pile of dishes.</span>
-   <span id="cddd">ADT: The actual implementation of the stack can vary as long as the main principles and methods associated with them are abided by. We could use Nodes like we did with Linked Lists, we could use an Array as an underlying instance variable as long as the methods we implement only interact with it in the way a stack should be interacted with, etc.</span>

### Methods of a Stack we should know are:

-   <span id="ae28">push: Adds an element to the top of the stack.</span>
-   <span id="3e15">pop: Removes an element from the top of the stack.</span>
-   <span id="54cd">peek: Returns the value of the top element of the stack.</span>
-   <span id="cc83">size: Returns the number of elements in the stack.</span>

### Time Complexities:

-   <span id="b73a">Adding an element: O(1), since we are always adding it to the top and the addition doesn’t affect any other elements.</span>
-   <span id="3303">Removing an element: O(1), we’re always taking the top element of the stack.</span>
-   <span id="75ed">Finding or Accessing a particular element: O(n), since we can only interact with our stack by removing elements from the top, we may have to remove every element to find what we’re looking for.</span>

### Explain and implement a Queue.

-   <span id="3d35">A First In First Out (FIFO OR LILO) Abstract Data Type (ADT).</span>
-   <span id="9d13">FIFO: The first element put into the queue is the first thing removed from it. Think of it as if you are waiting in line at a store, first come, first serve.</span>
-   <span id="32f7">ADT: The actual implementation of the queue can vary as long as the main principles and methods associated with them are abided by. We could use Nodes like we did with Linked Lists, we could use an Array as an underlying instance variable as long as the methods we implement only interact with it in the way a queue should be interacted with, etc.</span>

### Methods of a Queue we should know are:

-   <span id="4006">enqueue: Adds an element to the back of the queue.</span>
-   <span id="aab0">dequeue: Removes an element from the front of the queue.</span>
-   <span id="187a">peek: Returns the value of the front element of the queue.</span>
-   <span id="9890">size: Returns the number of elements in the queue.</span>

#### Time Complexities:

-   <span id="31b6">Adding an element: O(1), since we are always adding it to the back. If we are using Nodes instead of a simple array, keeping a reference to the last node allows us to immediately update these pointers without having to do any traversal.</span>
-   <span id="991a">Removing an element: O(1), we’re always taking the front element of the queue.</span>
-   <span id="9628">Finding or Accessing a particular element: O(n), since we can only interact with our queue by removing elements from the front, we may have to remove every element to find what we’re looking for.</span>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 31, 2021](https://medium.com/p/46e7e253c4c7).

<a href="https://medium.com/@bryanguner/javascript-algorithmic-interview-questions-and-considerations-46e7e253c4c7" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
