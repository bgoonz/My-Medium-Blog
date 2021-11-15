JavaScript Unit Testing & TDD
=============================

Get it over with…. before you’re set in your ways…and your code sucks because you can’t anticipate all the ways it will brake under normal…

------------------------------------------------------------------------

### JavaScript Unit Testing & TDD

#### Get it over with…. before you’re set in your ways…and your code sucks because you can’t anticipate all the ways it will brake under normal conditions … let alone under the invariable condition that at some point an idiot is going to use your software.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*fjJxb_pnJk4fe3_t.jpeg" class="graf-image" /></figure>Photo: <a href="https://www.browserstack.com/guide/testing-pyramid-for-test-automation" class="markup--anchor markup--p-anchor">Browser Stack</a>

I thought I would find an official definition on wikipedia but it most often comes from blog post or commercial site. Here are selected extracts:

-   <span id="20af">***Unit*** : quickly as possible in isolated conditions, tests individual components or functionalities to validate happy path, error handling, etc</span>
-   <span id="6820">***Integration*** : tests your application with all the parts that live outside of your application</span>
-   <span id="4b8c">***E2E*** : tests the entire software product from beginning to end to ensure the application flow behaves as expected</span>

### What is a Unit ?

Everyone asks this question “What is a unit?”: a feature, a class, a function,…? There is a consensus here: the term is vague.

When you have a pyramid with a fuzzy base, it’s not going well.

### Integrate, how?

Even if the intention is clear, the implementation is less : there are discussions about the starting point of its integration tests: the deployed application or just the code concerned. With a compromise between test coverage and precision.

### E2E, no limit?

We often see that it is necessary to limit as much as possible this kind of tests because they are expensive in time and money despite the fact that they provide a high degree of confidence. When we read the definition, we can see a “large variety of user scenarios” inconsistency and the fact that we must limit the number of tests.

It looks like there are more test cases than for the *integration* tests, which means that the pyramid become an hourglass.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*_D1BIoEQFg391__7" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*UJK8GaDDd68B0KUd.png" class="graf-image" /></figure>Test sandglass anti pattern

To find clarifications, maybe going back to the origin of the *Test Pyramid* could help.

### The original

<figure><img src="https://cdn-images-1.medium.com/max/800/0*2RTLsTFxcWUlUs4H" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*lYT6HYeTArARmlxl.jpeg" class="graf-image" /></figure>Photo : <a href="https://www.mountaingoatsoftware.com/blog/the-forgotten-layer-of-the-test-automation-pyramid" class="markup--anchor markup--p-anchor">Mountain Goat Software</a>

The first version comes from Mike Cohn who described it in his book <a href="https://www.mountaingoatsoftware.com/books/succeeding-with-agile-software-development-using-scrum" class="markup--anchor markup--p-anchor"><em>Succeeding with Agile</em></a>.

### Definition

Here are the short definitions from taken from the book:

-   <span id="ed64">***Unit*** : largest part, give specific feedback to a programmer, usually written in the same language, TDD</span>
-   <span id="f2a7">***Service*** : behavior of the application without GUI, using tools like FitNesse, ATDD</span>
-   <span id="0ffc">***UI*** : as little as possible, far less of it than any other test type, fragile, Expensive, Time consuming), confirm that the services are hooked up and that the values are displaying properly</span>

### Unit == xUnit

At the time, the most used framework was xUnit. Unit Test refer to anything that can be tested by an xUnit framework.

That concerns all the code of the application and does not implied any architectural layering. This makes it possible to specify a finer-grained strategy adapted to each project..

Mike Cohn associates Unit testing with TDD practice. This means that they are written on the fly. As test case are written by developer, these are rather technical tests.

### Service, behaviour-oriented

Thanks to *Unit* tests, teams are quite confident about their code. It is still necessary to verify that it meets the needs and that it works once deployed in an environment. This is where *Service* testing comes in.

As *UI* tests are fragile, painful to write and long to run, an alternative had to be found by directly calling the backend of the application. In reality, *Service* level is an accelerator for writing and running tests.

### All about Testing

-   <span id="640f">*The general idea across all testing frameworks is to allow developers to write code that would specify the behavior of a function or module or class.*</span>
-   <span id="11e6">Testing one function at a time is vulnerable to false negatives and false positives.</span>

### Why do we test?

-   <span id="c83e">To make sure everything works.</span>
-   <span id="3070">Increase flexibility & reduce fear of code.</span>

A**utomated Tests** are known as **Specs**, they:

-   <span id="b0d5">Make collaboration easier.</span>
-   <span id="1416">Produce Documentation.</span>

### How We Test

-   <span id="fd4c">**Testing Framework** : Runs the tests and presents them to a user.</span>
-   <span id="8569">**Assertion Libraries** : Backbone of written tests, the code that we use to write our tests.</span>
-   <span id="ec0c">**Mocha** : JS testing framework which is highly flexible; supports a variety of assertion libraries.</span>
-   <span id="b570">**Domain Specific Language** : Refers to a computer language specialized for a particular purpose</span>

### What do we Test?

-   <span id="d93c">The public interface:</span>
-   <span id="9d42">Ask yourself, “What is the public interface of the module or class I’m writing?”</span>
-   <span id="bddd">When in doubt, make sure that you at least have the most important and/or complex parts of that interface working as intended.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*-u18Iz0pA_e0pX2p" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*Moc1ywM-IYBKtL1l.png" class="graf-image" /></figure>*The Testing Pyramid*

### Unit Tests : The smallest unit of testing.

-   <span id="ad85">Used to test smallest pieces in isolation before putting everything together.</span>
-   <span id="82a9">Tests ONE THING.</span>

### Integration Tests : Test the interactions between two pieces of your application.

### End to End : Closest automated tests come to testing the actual user experience of your application.

**Reading Tests**

-   <span id="c012">Most important thing about a test is that it is **readable** and **understandable.**</span>

<!-- -->

    describe("avgValue()", function () {
      it("should return the average of an array of numbers", function () {
        assert.equal(avgValue([10, 20]), 15);
      });
    });

-   <span id="70aa">avgValue() =&gt; The function we will be testing.</span>
-   <span id="95ad">it(“string”) =&gt; describes the desired output.</span>

### Test-Driven Development

-   <span id="abf2">TDD is a quick repetitive cycle that revolves around first determining what a piece of code should do and writing tests for that behavior *before actually writing any code*.</span>

### A simple example just to give an idea of what test code looks like… note that it reads more like spoken English than normal code…

### Writing Tests

### File Structure

-   <span id="d04b">Whenever you are running tests with Mocha the important thing to know is that the Mocha CLI will automatically be looking for a directory named `test`.</span>
-   <span id="145e">The files you want to test will be loaced in the `problems` directory.</span>
-   <span id="0037">The created `test` directory's file structure should mirror that of the `problems` directory.</span>
-   <span id="2cf8">Each test file should have the word `-spec` appended to the end of the file name.</span>

Ex:

    testing-demo
      └──
      problems
        └── myFile.js
      test
        └── myFile-spec.js

### Testing Blocks

-   <span id="814a">describe(string, callback)</span>
-   <span id="b559">The `describe` function is an organizational function that accepts a descriptive string and a callback. We'll use the `describe` function to `describe` what we will be testing.</span>
-   <span id="c259">The callback handed to the `describe` function will be where we insert our actual tests.</span>
-   <span id="be50">Note: When testing instance methods, it is customary to include “prototype.” followed by the method name in the description</span>
-   <span id="6bc0">it(string, callback)</span>
-   <span id="5880">The `it` function is an organizational function we will use to wrap around each test we write. The `it` function accepts a descriptive string and callback to set up our test.</span>
-   <span id="a5b3">We can insert the actual test we intend to write within the callback handed to the `it` function.</span>
-   <span id="0116">Arrange: Getting/creating what we’ll need for our test</span>
-   <span id="6357">Act: Executing logic to be tested</span>
-   <span id="e08b">Assert: Testing logic</span>
-   <span id="ebc3">context(string, callback)</span>
-   <span id="df07">The `context` function has the same functionality as the `describe` block and is used for organizational purposes.</span>
-   <span id="21b5">We use `context` instead of nesting `describe` blocks.</span>

### Testing Classes with Chai

Setup:

-   <span id="c9d0">npm init — y</span>
-   <span id="1733">npm install chai</span>

<!-- -->

    // set up chai in our test file
    const chai = require("chai");
    const expect = chai.expect;

We will frequently use the expect function inside our `it` blocks. Please use the following resources to find available methods: Docs: <a href="https://www.chaijs.com/api/bdd/" class="markup--anchor markup--p-anchor" title="https://www.chaijs.com/api/bdd/">https://www.chaijs.com/api/bdd/</a> Cheatsheet (right column): <a href="https://devhints.io/chai" class="markup--anchor markup--p-anchor" title="https://devhints.io/chai">https://devhints.io/chai</a>

### Mocha Hooks

We use Mocha Hooks to keep our code DRY. Mocha Hooks can:

-   <span id="67e9">do set up prior to running a related group of specs</span>
-   <span id="0ff7">do some clean up after running those specs</span>

Types of hooks:

1.  <span id="a86f">`beforeEach` be invoked before each test</span>

-   <span id="244c">Most common hook</span>

1.  <span id="c874">`before` will be invoked before the block of tests is run</span>

-   <span id="8e71">2nd most common hook</span>

1.  <span id="e792">`after` will be invoked after the block of tests is run</span>
2.  <span id="7add">`afterEach` will be invoked after each test</span>

Ex:

    const chai = require("chai");
    const expect = chai.expect;

    describe('Hooks demo', () => {
      before(() => {
        console.log('Before hook...');
      });

      beforeEach(() => {
        console.log('Before each hook...');
      });

      afterEach(() => {
        console.log('After each hook...');
      });

      after(() => {
        console.log('After hook...');
      });

      it('Placeholder one', () => {
        expect(true).to.be(true);   // will always pass
      });

      it('Placeholder two', () => {
        expect(true).to.be(true);   // will always pass
      });
    });

### beforeEach

We typically use `beforeEach` to set up an initial condition for each of our tests. We can also define these hooks within nested `describe` or `context` functions. However, it is very helpful to be able to define a `beforeEach` hook in a top-level `describe` function that will run before every test in that block and before every test within nested `describe` or `context` functions.

### Chai Spies

The Chai Spies library provides a lot of added functionality including the ability to determine if a function has been called and how many times that function has been called.

Setup: npm install chai-spies

    // set up chai and chai spies in our test file
    const chai = require("chai");
    const expect = chai.expect;
    const spies = require("chai-spies");
    chai.use(spies);

In order to spy on a function we first need to tell Chai which function we’d like to spy on using the `chai.spy.on` method.

Chai checks how many times a function has been invoked using the method chain `expect(func).to.have.been.called.exactly(n)` where `n` is the number of times `func` is expected to be called.

### Testing Errors

We do not want to invoke code which will throw an error. This will interupt our tests and throw an error.

The syntax we use in Chai for testing if an error will be thrown is:

    expect(() => myFunc()).to.throw(Error)

We pass the expect block a function which when invoked will then invoke the function which will throw the error.

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 25, 2021](https://medium.com/p/72908e7730f5).

<a href="https://medium.com/@bryanguner/javascript-unit-testing-tdd-72908e7730f5" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on October 14, 2021.
