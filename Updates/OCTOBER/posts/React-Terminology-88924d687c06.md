React Terminology
=================

Glossary of React Terms

------------------------------------------------------------------------

### React Terminology

#### Glossary of React Terms

<figure><img src="https://cdn-images-1.medium.com/max/800/0*FYAYBe2hJZB12oYi.png" class="graf-image" /></figure>### Single-page Application

A single-page application is an application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run. Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded.

Though you may build a single-page application in React, it is not a requirement. React can also be used for enhancing small parts of existing websites with additional interactivity. Code written in React can coexist peacefully with markup rendered on the server by something like PHP, or with other client-side libraries. In fact, this is exactly how React is being used at Facebook.

### ES6, ES2015, ES2016, etc.

These acronyms all refer to the most recent versions of the ECMAScript Language Specification standard, which the JavaScript language is an implementation of. The ES6 version (also known as ES2015) includes many additions to the previous versions such as: arrow functions, classes, template literals, `let` and `const` statements. You can learn more about specific versions <a href="https://en.wikipedia.org/wiki/ECMAScript#Versions" class="markup--anchor markup--p-anchor">here</a>.

### Compilers

A JavaScript compiler takes JavaScript code, transforms it and returns JavaScript code in a different format. The most common use case is to take ES6 syntax and transform it into syntax that older browsers are capable of interpreting. <a href="https://babeljs.io/" class="markup--anchor markup--p-anchor">Babel</a> is the compiler most commonly used with React.

### Bundlers

Bundlers take JavaScript and CSS code written as separate modules (often hundreds of them), and combine them together into a few files better optimized for the browsers. Some bundlers commonly used in React applications include <a href="https://webpack.js.org/" class="markup--anchor markup--p-anchor">Webpack</a> and <a href="http://browserify.org/" class="markup--anchor markup--p-anchor">Browserify</a>.

### Package Managers

Package managers are tools that allow you to manage dependencies in your project. <a href="https://www.npmjs.com/" class="markup--anchor markup--p-anchor">npm</a> and <a href="https://yarnpkg.com/" class="markup--anchor markup--p-anchor">Yarn</a> are two package managers commonly used in React applications. Both of them are clients for the same npm package registry.

### CDN

CDN stands for Content Delivery Network. CDNs deliver cached, static content from a network of servers across the globe.

### JSX

JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to `React.createElement()` calls which return plain JavaScript objects called “React elements”. To get a basic introduction to JSX <a href="https://reactjs.org/docs/introducing-jsx.html" class="markup--anchor markup--p-anchor">see the docs here</a> and find a more in-depth tutorial on JSX <a href="https://reactjs.org/docs/jsx-in-depth.html" class="markup--anchor markup--p-anchor">here</a>.

React DOM uses camelCase property naming convention instead of HTML attribute names. For example, `tabindex` becomes `tabIndex` in JSX. The attribute `class` is also written as `className` since `class` is a reserved word in JavaScript:

    const name = 'Clementine';
    ReactDOM.render(
      <h1 className="hello">My name is {name}!</h1>,
      document.getElementById('root')
    );

### <a href="https://reactjs.org/docs/rendering-elements.html" class="markup--anchor markup--h3-anchor">Elements</a>

React elements are the building blocks of React applications. One might confuse elements with a more widely known concept of “components”. An element describes what you want to see on the screen. React elements are immutable.

    const element = <h1>Hello, world</h1>;

Typically, elements are not used directly, but get returned from components.

### <a href="https://reactjs.org/docs/components-and-props.html" class="markup--anchor markup--h3-anchor">Components</a>

React components are small, reusable pieces of code that return a React element to be rendered to the page. The simplest version of React component is a plain JavaScript function that returns a React element:

    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

Components can also be ES6 classes:

    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }

Components can be broken down into distinct pieces of functionality and used within other components. Components can return other components, arrays, strings and numbers. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component. Component names should also always start with a capital letter (`<Wrapper/>` **not** `<wrapper/>`). See <a href="https://reactjs.org/docs/components-and-props.html#rendering-a-component" class="markup--anchor markup--p-anchor">this documentation</a> for more information on rendering components.

------------------------------------------------------------------------

### `props`

`props` are inputs to a React component. They are data passed down from a parent component to a child component.

Remember that `props` are readonly. They should not be modified in any way:

    // Wrong!
    props.number = 42;

If you need to modify some value in response to user input or a network response, use `state` instead.

------------------------------------------------------------------------

### `props.children`

`props.children` is available on every component. It contains the content between the opening and closing tags of a component. For example:

    <Welcome>Hello world!</Welcome>

The string `Hello world!` is available in `props.children` in the `Welcome` component:

    function Welcome(props) {
      return <p>{props.children}</p>;
    }

For components defined as classes, use `this.props.children`:

    class Welcome extends React.Component {
      render() {
        return <p>{this.props.children}</p>;
      }
    }

### `state`

A component needs `state` when some data associated with it changes over time. For example, a `Checkbox` component might need `isChecked` in its state, and a `NewsFeed` component might want to keep track of `fetchedPosts` in its state.

The most important difference between `state` and `props` is that `props` are passed from a parent component, but `state` is managed by the component itself. A component cannot change its `props`, but it can change its `state`.

For each particular piece of changing data, there should be just one component that “owns” it in its state. Don’t try to synchronize states of two different components. Instead, <a href="https://reactjs.org/docs/lifting-state-up.html" class="markup--anchor markup--p-anchor">lift it up</a> to their closest shared ancestor, and pass it down as props to both of them.

### <a href="https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class" class="markup--anchor markup--h3-anchor">Lifecycle Methods</a>

Lifecycle methods are custom functionality that gets executed during the different phases of a component. There are methods available when the component gets created and inserted into the DOM (<a href="https://reactjs.org/docs/react-component.html#mounting" class="markup--anchor markup--p-anchor">mounting</a>), when the component updates, and when the component gets unmounted or removed from the DOM.

### <a href="https://reactjs.org/docs/forms.html#controlled-components" class="markup--anchor markup--h3-anchor">Controlled</a> vs. <a href="https://reactjs.org/docs/uncontrolled-components.html" class="markup--anchor markup--h3-anchor">Uncontrolled Components</a>

React has two different approaches to dealing with form inputs.

An input form element whose value is controlled by React is called a *controlled component*. When a user enters data into a controlled component a change event handler is triggered and your code decides whether the input is valid (by re-rendering with the updated value). If you do not re-render then the form element will remain unchanged.

An *uncontrolled component* works like form elements do outside of React. When a user inputs data into a form field (an input box, dropdown, etc) the updated information is reflected without React needing to do anything. However, this also means that you can’t force the field to have a certain value.

In most cases you should use controlled components.

### <a href="https://reactjs.org/docs/lists-and-keys.html" class="markup--anchor markup--h3-anchor">Keys</a>

A “key” is a special string attribute you need to include when creating arrays of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside an array to give the elements a stable identity.

Keys only need to be unique among sibling elements in the same array. They don’t need to be unique across the whole application or even a single component.

Don’t pass something like `Math.random()` to keys. It is important that keys have a “stable identity” across re-renders so that React can determine when items are added, removed, or re-ordered. Ideally, keys should correspond to unique and stable identifiers coming from your data, such as `post.id`.

### <a href="https://reactjs.org/docs/refs-and-the-dom.html" class="markup--anchor markup--h3-anchor">Refs</a>

React supports a special attribute that you can attach to any component. The `ref` attribute can be an object created by `React.createRef()` <a href="https://reactjs.org/docs/react-api.html#reactcreateref" class="markup--anchor markup--p-anchor">function</a> or a callback function, or a string (in legacy API). When the `ref` attribute is a callback function, the function receives the underlying DOM element or class instance (depending on the type of element) as its argument. This allows you to have direct access to the DOM element or component instance.

Use refs sparingly. If you find yourself often using refs to “make things happen” in your app, consider getting more familiar with <a href="https://reactjs.org/docs/lifting-state-up.html" class="markup--anchor markup--p-anchor">top-down data flow</a>.

### <a href="https://reactjs.org/docs/handling-events.html" class="markup--anchor markup--h3-anchor">Events</a>

Handling events with React elements has some syntactic differences:

-   <span id="40fc">React event handlers are named using camelCase, rather than lowercase.</span>
-   <span id="81cc">With JSX you pass a function as the event handler, rather than a string.</span>

### <a href="https://reactjs.org/docs/reconciliation.html" class="markup--anchor markup--h3-anchor">Reconciliation</a>

When a component’s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called “reconciliation”.

**State**  
Ex: “Redux is a state manager.”

The state of a program means all the information stored by that program at a particular point in time. It is generally used to refer to the data stored by the program at a particular instance in time, as opposed to the logic of the program, which doesn’t change over time. The job of Redux is to store the state of your app and make it available to entire app.

**Store**  
Ex: “Redux stores state in a single store.”

The Redux store is a single JavaScript object with a few methods, including getState, dispatch(action), and subscribe(listener). Any state you want Redux to handle is held in the store.

**Actions**  
Ex: “The Redux store is updated by dispatching actions.”

An action is a POJO (plain old JavaScript object) with a type property. Actions contain information that can be used to update the store. They can be dispatched, i.e. sent to the store, in response to user actions or AJAX requests. Typically Redux apps use functions called action creators that return actions. Action creators can take arguments which allow them to customize the data contained in the actions they generate.

**Pure functions**  
Ex: “Redux reducers are pure functions.”

A function is pure if its behavior depends only its arguments and it has no side effects. This means the function can’t depend on the value of any variables that aren’t passed to it as arguments, and it can’t alter the state of the program or any variable existing outside itself. It simply takes in arguments and returns a value.

**Reducer**  
Ex: “Redux handles actions using reducers.”

A reducer is a function that is called each time an action is dispatched. The reducer receives an action and the current state as arguments and returns an updated state.

Redux reducers are required to be pure functions of the dispatched action and the current state. This makes their behavior very predictable and allows their effects to potentially be reversed.

**Middleware**  
Ex: “You can customize your response to dispatched actions using middleware.”\*\*

Middleware is an optional component of Redux that allows custom responses to dispatched actions. When an action is dispatched, it passes through each middleware that has been added to the state. The middleware can take some action in response and choose whether or not to pass the action on down the chain. Behind the scenes, the middleware actually replaces the dispatch method of the store with a customized version. There is a large ecosystem of existing middleware ready to be plugged into any Redux projects. One example is a logger that records each action before passing it on to the reducer. Perhaps the most common use for middleware is to dispatch asynchronous requests to a server.

**Time traveling dev tools**  
Ex: “Redux has time traveling dev tools.”

Redux reducers are pure functions of the dispatched action and the current state. This means that if one were to store a list of the previous states over time and the actions that had been dispatched, one could retroactively cancel an action and recalculate the state as if that action had never been dispatched. This is precisely the functionality that the Redux DevTools provide. The dev tools can be added as middleware to any Redux project. They allow you to look back through the history of the state and toggle past actions on and off to see a live recalculation of the state. This ability to revert to a previous state is what is meant by time travel.

**Thunks**  
Ex: “Thunks are a convenient format for taking asynchronous actions in Redux.”

The traditional approach to middleware closely parallels the format of reducers. The actions being dispatched are POJOs with types and various middleware files are waiting to receive them. These files check the type of the action using a case statement just like reducers.

Thunks are an alternative approach. A thunk is a general concept in computer science referring to a function whose primary purpose is simply to call another function. In Redux a thunk action creator returns a function rather than an object. When they are dispatched, thunk actions are intercepted by a piece of middleware that simply checks if each action is a function. If it is, that function is called with the state and dispatch as arguments, otherwise it is passed on down the chain. Thunks are most commonly used to make asynchronous API requests.

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 31, 2021](https://medium.com/p/88924d687c06).

<a href="https://medium.com/@bryanguner/react-terminology-88924d687c06" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on October 14, 2021.
