Explore Promises in JavaScript
==============================

A detailed guide to how promises work in JavaScript

------------------------------------------------------------------------

### Explore Promises in JavaScript

#### A detailed guide to how promises work in JavaScript

Create a new folder with a JavaScript file within it (such as promises.js).

<figure><img src="https://cdn-images-1.medium.com/max/800/0*0QVccF8HPXHZCtwR" class="graf-image" /></figure>### Background:

### Practice Project

### Phase 1: `async`

In your file, create two similar functions. Each can return a number or string. Before the second function, place the `async` keyword. Use the console to log the calls to both functions.

    function num1() {
        return 1;
    }
    async function num2() {
        return 2;
    }

    console.log('num1', num1());
    console.log('num2', num2());

When you run your program (`node promises.js` ), you should see something like this:

    num1 1
    num2 Promise { 2 }

Notice that the “plain” function just returns the value and the “async” function returns a promise. Now add another call to the `async` function and attach the `then` function to get its result and log it.

    num2().then(result => console.log(result));

Run your program again and now you will see the plain number returned from the second function.

> *What have you learned so far?*

Whenever the `async` keyword is used, the function automatically returns a promise. Wow!

### Phase 2: `await`

Next, another `async` function. Declare a constant that `await` s the call to your other `async` function and logs the value. Make sure you remember to call your new function so it will run (since functions are only stored, but not run, when defined).

    async function waiting() {
        const value = await num2();
        console.log('waiting', value);
    }
    waiting();

Run your program again and now you should see something like this:

    waiting 2

Remember, `await` stops all flow until the promise returns. Of course, it is very quick in this example, since there's no delay caused by file reading or writing, web server calls, timeouts or anything else.

### Phase 3: DIY `Promise`

Now, it’s time to create your own, custom `Promise`  
so that you can have some delay before the promise is resolved. If you'd like to use `await` again, then you will need to wrap your experiment in a function (and call it).

    async function waitForMyPromise() {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve('done!!!');
            }, 1000)
        });

        const result = await promise;
        console.log('my promise is', result);
    }
    waitForMyPromise();

This time when you run your program, you will need to wait one second (1000 milliseconds) before the final message will appear.

    my promise is done!!!

### Phase 4: And `then` ...

As an alternative, you could also use `then` to wait for a promise; even a custom one. For example, you can create another `new Promise` and attach `.then()` to it.

    new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!');
        }, 1500)
    }).then(r => console.log('then my other promise is', r));

Now, when running your program the output would look something like this.

    my promise is done!!!
    then my other promise is done!!!

Maybe your statements are in the other order, depending on the timing you set for each `setTimeout` . Feel free to experiment with different values, if you'd like before continuing.

### Phase 5: About `setTimeout`

As you can see, `setTimeout` does not follow the Promises pattern. However, you could create your own `wait` function to remedy this. In the beginning of this project, you discovered that an `async`  
function returns a promise.

    function wait(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

This benefit here is all waiting can use the same flow in your code regardless of whether it is a file read or write, web calls, or even timeout! :)

Go ahead and try it out. See if you can cause a two-second pause before a message displays. Challenge yourself by writing the code before you scroll down to see an example.

…

…

…

    async function doStuff() {
      await wait(2000)
      console.log('The waiting is over!')
    }
    doStuff();

### Phase 6: `reject` ... `catch`

Next, you should explore the negative side of async calls and Promises for those times they are unable to do what they were asked to do. In other words, the Promise triggers `reject` instead of `resolve` .

Start by creating yourself a function that returns a promise. Give it one argument that is a random value, and use that value to determine if the promise is successful (`resolve` ) or unsuccessful (`reject` ).

    const tryRandomPromise = (random) => new Promise((resolve, reject) => {
        if (random > 0.5) {
            resolve('success!!!');
        } else {
            reject('random error');
        }
    });

In order to test this, you may want to use a loop (e.g. `for` loop) to call it several times, and hopefully see both success and failure. For your first experiment, use `.then()` and `.catch()` to handle the two cases.

For an added challenge, you can also use the `wait`  
promise you created above in a chain with the random promise.

    for (let i=1; i<10; i++) {
        const random = Math.random();
        wait(2000 + random*1000)
            .then(() => tryRandomPromise(random))
            .then(result => console.log('random try #', i, result))
            .catch(error => console.error('random try #', i, error));
    }

In this example, the wait is a minimum of 2 seconds and a maximum of 3 seconds. That is because `Math.random()` returns a value between 0 and 1. This choice was made so the new messages will appear after the other experiments. Of course, you can adjust the timeouts anyway you'd like!

Because the same random number is used with the wait and the random promise, the output shows all the errors before the successes (in random numeric order).

    ... (other output here) ...
    random try # 3 random error
    random try # 8 random error
    random try # 5 random error
    random try # 1 random error
    random try # 9 random error
    random try # 6 success!!!
    random try # 7 success!!!
    random try # 2 success!!!
    random try # 4 success!!!

### Phase 7: `try` ... `await` ... `catch`

The `await` approach to promises also works. Most developers find it easier to read, so they will use it whenever possible (sometimes you just have to use `.then()` and `.catch()` ). It's really a personal or team choice most of the time. Since you are exploring Promises in this project, go ahead and create a second version of the functionality above using the `await` approach.

First, remember that calls to `await` must be within an `async` function. Second, realize that the `wait` promise you create only returns successfully and never returns a value, it is simple to call using `await wait(<your timeout here>)` . Finally, when using `await` with a promise that calls `reject` , that wrapping the call in a`try` block will trigger the `catch` block in the error case.

Here’s an example of a possible `async` function. You will probably write something similar.

    const tryTryAgain = async (i) => {
        const random = Math.random();

        // no need for try-catch if there's no possibility of error (rarely happens)
        await wait(3000 + random*1000);

        // usually you need to wrap the await to gracefully handle the error
        try {
            const result = await tryRandomPromise(random);
            console.log('random again #', i, result);
        } catch (error) {
            console.error('random again #', i, error);
        }
    };

Finally, you can call your function in a `for` loop again if you'd like to see a variety of results.

    for (let i=1; i<10; i++) {
        tryTryAgain(i);
    }

If all goes well, when you run your program, you’ll have one more set of outputs for this part of the experiment.

    random again # 7 random error
    random again # 2 random error
    random again # 1 success!!!
    random again # 6 success!!!
    random again # 5 success!!!
    random again # 8 success!!!
    random again # 4 success!!!
    random again # 9 success!!!
    random again # 3 success!!!

### Phase 8: Appreciate asynchronous functions

In order to really appreciate the asynchronous nature of Promises, you may add one additional `console.log` to the end of your file.

    console.log('END OF PROGRAM');

Before you run your program, you can challenge yourself to predict the order and timing of the log messages (try to predict when “END OF PROGRAM” will be logged). Also, feel free to rerun your program as many times as you’d like until you feel like you fully understand why the order and timing happens as it does.

### Solutions:

    //! Phase 1:
    //- create two similar functions.
    //- Each can return a number or string. 
    //-Before the second function, place the async keyword. 
    //-Use the console to log the calls to both functions.

    //function num1() {
    //    return 1;
    //}
    //async function num2() {
    //    return 2;
    //}
    //console.log( 'num1', num1() ); //num1 1
    //console.log( 'num2', num2() ); //num2 Promise {2}

    //-When you run your program (node promises.js ), you should see something like this:
    /*
     *   num1 1
     *   num2 Promise {
     *       2
     *   }
     */
    //-Notice that the "plain" function just returns the value 
    //-the "async" function returns a promise. 
    //#Now add another call to the async function and attach the then function to get its result and log it.

    //num2().then( (result) => console.log( result ) ); //2

    //!Phase 2: await
    //-Declare a constant that awaits the call to your other async function and logs the value. 
    //-remember to call your new function so it will run 
    //-(since functions are only stored, but not run, when defined).

    //-Run your program again and now you should see something like this:
    //*waiting 2

    //-await stops all flow until the promise returns.

    //!Phase 3: DIY Promise ( custom Promise so that you can have some delay before the promise is resolved. )
    //#If you'd like to use await again, then you will need to wrap your experiment in a function (and call it).

    //---------------------------------------------------------------------------------------
    ////                  |
    //// official answer  ˅
    /*
    async function waitForMyPromise() {
        const promise = new Promise( ( resolve ) => {
            setTimeout( () => {
                resolve( 'done!!!' );
            }, 1000 )
        } );
        const result = await promise;
        console.log( 'my promise is', result );
    }
    waitForMyPromise();
    */
    //-This time when you run your program, you will need to wait one second (1000 milliseconds) before the final message will appear.
    //*my promise is done!!!
    //!Phase 4: And then ...
    //- you could also use (then) to wait for a promise; even a custom one. 
    //- you can create another new Promise and attach .then() to it.

    //new Promise( ( resolve ) => {
    //    setTimeout( () => {
    //        resolve( '2' );
    //    }, 2000 )
    //} ).then( ( resu ) => console.log( 'my promise:', resu, 'my other promise:', resu ) ); //my promise: 2 my other promise: 2

    /*
    new Promise( ( resolve ) => {
        setTimeout( () => {
            resolve( 'done!' );
        }, 1500 )
    } ).then( r => console.log( 'then my other promise is', r ) );
    */
    //-Now, when running your program the output would look something like this.
    //*my promise is done!!!
    //*then my other promise is done!!!

    //!Phase 5: About setTimeout:

    //-setTimeout does not follow the Promises pattern.
    //-you could create your own wait function to remedy this
    //-you already discovered that an async function returns a promise.

    function wait( ms ) {
        return new Promise( ( resolve ) => {
            setTimeout( resolve, ms ) //*resolve of new promise is similar to .then which calls setTimeout and passes resolve into the callback of the setTimeout function.
        } );
    }
    wait();

    //-all waiting can use the same flow in your code regardless of whether it is a file read or write, web calls, or even timeout! 😃

    //#Go ahead and try it out. See if you can cause a two-second pause before a message displays.
    /*
    async function doStuff() {
        await wait( 2000 )
        console.log( 'The waiting is over!' )
    }
    doStuff();
    */

    //!Phase 6: reject ... catch

    //-explore the negative side of async calls and Promises for those times they are unable to do what they were asked to do. 
    //-In other words, the Promise triggers reject instead of resolve .

    //#Start by creating yourself a function that returns a promise. 
    //#Give it one argument that is a random value,
    //# and use that value to determine if the promise is successful (resolve ) or unsuccessful (reject ).

    /*
    const tryRandomPromise = ( random ) => new Promise( ( resolve, reject ) => {
        if ( random > 0.5 ) {
            resolve( 'success!!!' );
        } else {
            reject( 'random error' );
        }
    } );
    */

    /*
    n order to test this, you may want to use a loop( e.g.for loop ) to call it several times, and hopefully see both success and failure.For your first experiment, use.then() and.catch() to handle the two cases.
    For an added challenge, you can also use the wait
    promise you created above in a chain with the random promise.
    for ( let i = 1; i < 10; i++ ) {
        const random = Math.random();
        wait( 2000 + random * 1000 )
            .then( () => tryRandomPromise( random ) )
            .then( result => console.log( 'random try #', i, result ) )
            .catch( error => console.error( 'random try #', i, error ) );
    }
    In this example, the wait is a minimum of 2 seconds and a maximum of 3 seconds.That is because Math.random() returns a value between 0 and 1. This choice was made so the new messages will appear after the other experiments.Of course, you can adjust the timeouts anyway you 'd like!
    Because the same random number is used with the wait and the random promise, the output shows all the errors before the successes( in random numeric order ).
    */

*More content at* <a href="http://plainenglish.io/" class="markup--anchor markup--p-anchor"><strong><em>plainenglish.io</em></strong></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [September 15, 2021](https://medium.com/p/f5ebe3ead6ac).

<a href="https://medium.com/@bryanguner/exploring-promises-f5ebe3ead6ac" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on October 14, 2021.
