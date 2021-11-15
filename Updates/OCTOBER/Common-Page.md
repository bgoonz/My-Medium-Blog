Common Page Events
==================

Events : When a user interacts with HTML Elements on a website.

------------------------------------------------------------------------

### Common Page Events

#### **Events** : When a user interacts with HTML Elements on a website.

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/800/1*xs8aqvDz-FWvCvn1MNHHpQ.gif" class="graf-image" /></figure>

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*xs8aqvDz-FWvCvn1MNHHpQ.gif" class="graf-image" /></figure>

### Common Page Events

-   <span id="c137">Events : When a user interacts with HTML Elements on a website.</span>

Handling a button click event

-   <span id="73f5">Typically some functionality occurs when a button is clicked:</span>
-   <span id="dbab">Displaying new page elements.</span>
-   <span id="18ee">Changing current elements.</span>
-   <span id="6708">Submitting a From</span>
-   <span id="933f">Etc.</span>

<!-- -->

    window.addEventListener(“DOMContentLoaded”, (event) => { const button = document.getElementById(“increment-count”); const count = document.getElementById(“clicked-count”); let clicks = 0; button.addEventListener(“click”, (event) => { clicks += 1; count.innerHTML = clicks; }); });

-   <span id="feb5">We grab our two elements: a button, and a count from a span tag.</span>
-   <span id="bce4">We set an event listener on our button variable, so that everytime a click is registered our click count is incremented.</span>
-   <span id="9ee3">Every time we click our innerHTML on the count is also updated to reflect the click count.</span>

### Using addEventListener() vs onclick

-   <span id="8ec2">**GlobalEventHandlers**.**onclick **: Alternative method to using an event listener.</span>

#### Differences:

-   <span id="4b61">**EventListener**: Can be bound to an event handler, and be called over and over. USE THIS IF YOU CAN.</span>
-   <span id="3f79">**OnClick**: Is a property, can be overwritten. Not preferred but might be needed on older browser versions.</span>

### Handling a checkbox check event

    <html>
      <head>
        <script src="script.js">
      </head>
      <body>
        <h1>Pizza Toppings</h1>
        <input type="checkbox" id="on-off">
        <label for="on-off">Extra Cheese</label>
        <div id="now-you-see-me" style="display:none">Add $1.00</div>
      </body>
    </html>

    window.addEventListener("DOMContentLoaded", (event) => {
      const checkbox = document.getElementById("on-off");
      const divShowHide = document.getElementById("now-you-see-me");
      checkbox.addEventListener("click", (event) => {
        if (checkbox.checked) {
          divShowHide.style.display = "block";
        } else {
          divShowHide.style.display = "none";
        }
      });
    });

-   <span id="f6e7">checked is an attribute we of our checkbox element.</span>
-   <span id="a75f">if we had multiple checkboxes on a page, we could use CSS to assign classes to all our checkboxes and re-use them for multiple elements.</span>

<!-- -->

    window.onload = () => { const checkbox = document.getElementById(“on-off”); const divShowHide = document.getElementById(“now-you-see-me”); checkbox.addEventListener(“click”, (event) => { if (checkbox.checked) { divShowHide.classList.remove(“hide”); divShowHide.classList.add(“show”); } else { divShowHide.classList.remove(“show”); divShowHide.classList.add(“hide”); } }); };

    .show { display: block; } .hide { display: none; }

-   <span id="760b">We can store our class behavior in CSS and use classList.add/remove to manipulate the behavior of our elements.</span>

### Handling a user input value

    window.addEventListener("DOMContentLoaded", (event) => {
      const stopCyanMadness = () => {
        const inputValue = document.getElementById("stopper").value;
        if (inputValue !== "STOP") {
          document.body.style.backgroundColor = "cyan";
        }
      };
      setTimeout(stopCyanMadness, 5000);
    });

#### After our DOM has loaded, we have a function that:

1.  <span id="1c9a">Assigns our input element’s value to a variable.</span>
2.  <span id="76c3">Conditional if that value doesn’t say STOP, our background will turn cyan.</span>
3.  <span id="7464">To give our user some time to input the value, we invoke the function with a setTimeout async call, and give them 5 seconds.</span>

------------------------------------------------------------------------

### Input Focus and Blur Events

Event Handling: Input Focus and Blur

Listening for focus and blur events

-   <span id="1c84">A focus event fires when an element receives focus (i.e. user has clicked on an element)</span>
-   <span id="280b">A blur event fires when an element has lost focus (i.e. when a user clicks out of that element)</span>
-   <span id="bf08">window.addEventListener(“DOMContentLoaded”, (event) =&gt; { const input = document.getElementById(“fancypants”);</span>

<!-- -->

    input.addEventListener(“focus”, (event) => { event.target.style.backgroundColor = “#E8F5E9”; }); input.addEventListener(“blur”, (event) => { event.target.style.backgroundColor = “initial”; }); });

-   <span id="bf67">We have to add two separate event listeners here because “focus” and “blur” are two sep. events.</span>

------------------------------------------------------------------------

### Form Validation

Event Handling: Form Validation Validate passwords before submitting a form

-   <span id="aa59">event.preventDefault : prevents the typical submission behavior.</span>
-   <span id="ccc2">We grab the form element b/c we want to add an event listener to it (since our target elements are contained within it).</span>
-   <span id="16b9">We created a function to be used as a callback in our event listener, where we check the values of our elements.</span>

------------------------------------------------------------------------

### Drag and Drop API

-   <span id="c08a">Drag and drop can useful for users such as letting them drag files into a drop zone. Basic Drag-and-drop functions</span>
-   <span id="4301">Steps for creating a drag and drop:</span>
-   <span id="1ef9">Mark an element as “draggable”.</span>
-   <span id="9e98">Create a dragstart handler (occurs when the use clicks the mouse and starts dragging)</span>
-   <span id="c1f5">Create a drop handler (occurs when the user releses the mouse click and “drops” the element)</span>

<!-- -->

    <title>Red Square is a Drag</title> <script type=”text/javascript”> const handleDragStart = e => { e.target.classList.add(‘is-being-dragged’); e.dataTransfer.setData(‘text/plain’, e.target.id); e.dataTransfer.dropEffect = ‘move’; };

    </script> <style> #drop-zone { align-items: center; border: 1px solid #DDD; color: #CCC; display: flex; font-family: Arial, Helvetica, sans-serif; font-size: 2em; font-weight: bold; height: 200px; justify-content: center; position: absolute; right: 0; top: 100px; width: 200px; }

-   <span id="e1da">drop zone</span>
-   <span id="97b8">First step is to assign the attribute draggable=“true” to our red square div.</span>
-   <span id="fd1d">Will finish deciphering a step by step for this later</span>

------------------------------------------------------------------------

### Click Events with Targets

-   <span id="f529">event.target : property we can use to find out which element the event occured on.</span>
-   <span id="0c2a">event.currentTarget : refers to the element to which the event handler has been attached, such as the parent element of the event.target.</span>

Use event.target to console.log the ID of a clicked div

    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="example.css" />
        <script type="text/javascript" src="example.js"></script>
      </head>
      <body>
        <div id="div-1" class="box">1</div>
        <div id="div-2" class="box">2</div>
        <div id="div-3" class="box">3</div>
        <div id="div-4" class="box">4</div>
        <div id="div-5" class="box">5</div>
        <div id="div-6" class="box">6</div>
        <div id="div-7" class="box">7</div>
        <div id="div-8" class="box">8</div>
        <div id="div-9" class="box">9</div>
        <div id="div-10" class="box">10</div>
      </body>
    </html>

    .box {
      border: 2px solid gray;
      height: 50px;
      width: 50px;
      margin: 5px;
    }

    window.addEventListener("DOMContentLoaded", (event) => {
      document.body.addEventListener("click", (event) => {
        console.log(event.target.id);
      });
    });

-   <span id="f21f">We originally had 10 divs, by adding a class via CSS each of our 10 divs are now expressed as bordered boxes on our HTML page.</span>
-   <span id="e62e">When we add an event listener on our entire document’s body, whenever we click on one of these boxes we can console.log targeted info about it.</span>

------------------------------------------------------------------------

### The Bubbling Principle

> What is the bubbling princple? The Bubble Principle means `that when an event happens on an element, it first runs the handlers on it, then on it's parent, then all the way up on other ancestors.`

<a href="https://gist.github.com/DanHefrman/d3a0a76ba67576fa33701c556b806236" class="markup--anchor markup--p-anchor">https://gist.github.com/DanHefrman/d3a0a76ba67576fa33701c556b806236</a>

-   <span id="8d8e">Everytime we click the p tag in our html file, our console lots the tag name of all the parents. `P, DIV, MAIN`.</span>
-   <span id="ffc8">Think of the succession as bubbles popping, first the innermost bubble popped, then it’s parent the div popped, and then the div’s parent, the main popped.</span>

#### Stopping Event bubble with stopPropogation()

    document.querySelector("video").addEventListener("click", (event) => {
      event.stopPropagation();
      video.play();
    });

-   <span id="77ed">We can stop annoying side effects of bubbling by using the stopPropogation() method on an event.</span>

Event Delegation

-   <span id="7573">Bubbling is also very helpful, it allows us to make use of event delegation.</span>
-   <span id="2710">Event Delegation : Means that we can delegate events to a single element/handler — a parent element that will handle all events on it’s children elements.</span>
-   <span id="18ae">This is list item 1.</span>
-   <span id="b228">This is list item 2.</span>
-   <span id="9c40">This is list item 3.</span>
-   <span id="0b6e">This is list item 4.</span>
-   <span id="f94c">This is list item 5.</span>
-   <span id="618a">&lt;script async&gt; document .getElementById(‘my-list’) .addEventListener(‘click’, e =&gt; { console.log(e.target.innerHTML); console.log(e.currentTarget.id); }); &lt;/script&gt;</span>
-   <span id="84bb">The output will always print out the ID of the parent but will provide the innerHTML of each list item.</span>

<a href="https://bryanguner.medium.com/membership" class="markup--anchor markup--p-anchor">https://bryanguner.medium.com/membership</a>

<a href="https://bryanguner.medium.com/membership" class="markup--anchor markup--p-anchor">https://bryanguner.medium.com/membership</a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [September 28, 2021](https://medium.com/p/e46e5cbed803).

<a href="https://medium.com/@bryanguner/common-page-events-e46e5cbed803" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on October 14, 2021.
