# A Comprehensive Deep Dive into React



#### React in Depth: A Comprehensive Guide <a id="0a81"></a>

**A deep dive into the world of React.**

![](https://cdn-images-1.medium.com/max/800/0*LnugLVhKbiGfSSHr)Photo by [Ferenc Almasi](https://unsplash.com/@flowforfrank?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)[**ALLOFMYOTHERARTICLES**  
bryanguner.medium.com](https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b)

#### Random Things to Remember <a id="7c3a"></a>

* Using `()` implictly returns components.
* Role of `index.js` is to _render_ your application.
* The reference to `root` comes from a div in the body of your public HTML file.
* State of a component is simply a regular JS Object.
* Class Components require `render()` method to return JSX.
* Functional Components directly return JSX.
* `Class` is `className` in React.
* When parsing for an integer just chain `Number.parseInt("123")`
* Use ternary operator if you want to make a conditional inside a fragment.

```text
{ x === y ? <div>Naisu</div> : <div>Not Naisu</div>; }
```

* Purpose of `React.Fragment` is to allow you to create groups of children without adding an extra dom element.

#### Front-End History <a id="015e"></a>

* React makes it easier for you to make front-end elements. A front-end timeline
* Some noteworthy front end libraries that have been used in the past few years:
* 2005: Script.aculo.us
* 2005: Dojo
* 2006: YUI
* 2010: Knockout
* 2011: AngularJS
* 2012: Elm
* 2013: React \(Considered the standard front-end library\)
* React manages the creation and updating of DOM nodes in your Web page.
* All it does is dynamically render stuff into your DOM.
* What it doesn’t do:
* Ajax
* Services
* Local Storage
* Provide a CSS framework
* React is unopinionated
* Just contains a few rules for developers to follow, and it just works.
* JSX : Javascript Extension is a language invented to help write React Applications \(looks like a mixture of JS and HTML\)
* Here is an overview of the difference between rendering out vanilla JS to create elements, and JSX:

```text
fetch("https://example.com/api/people")
  .then((response) => response.json())
  .then((people) => {
    const html = "<ul>";
    for (let person of data.people) {
      html += `<li>${person.lastName}, ${person.firstName}</li>`;
    }
    html += "</ul>";
    document.querySelector("#people-list").innerHTML = html;
  });
```

```text
function PeopleList(props) {
  return (
    <ul>
      $
      {props.people.map((person) => (
        <li>
          {person.lastName}, {person.firstName}
        </li>
      ))}
    </ul>
  );
}
const peopleListElement = document.querySelector("#people-list");
fetch("https://example.com/api/people")
  .then((response) => response.json())
  .then((people) => {
    const props = { people };
    ReactDOM.render(<PeopleList props={props} />, peopleListElement);
  });
```

* This may seem like a lot of code but when you end up building many components, it becomes nice to put each of those functions/classes into their own files to organize your code. Using tools with React
* `React DevTools` : New tool in your browser to see ow React is working in the browser
* `create-react-app` : Extensible command-line tool to help generate standard React applications.
* `Webpack` : In between tool for dealing with the extra build step involved.

![](https://cdn-images-1.medium.com/max/800/0*LHVHf7SPZ1t0UVAj)

* HMR : \(Hot Module Replacement\) When you make changes to your source code the changes are delivered in real-time.
* React Developers created something called `Flux Architecture` to moderate how their web page consumes and modifies data received from back-end API's.

![](https://cdn-images-1.medium.com/max/800/0*wR-lbD4zf45-IHoQ)

* Choosing React
* Basically, React is super important to learn and master.

#### React Concepts and Features <a id="589a"></a>

There are many benefits to using React over just Vanilla JavaScript.

* `Modularity`
* To avoid the mess of many event listeners and template strings, React gives you the benefit of a lot of modularity.
* `Easy to start`
* No specials tools are needed to use Basic React.
* You can start working directly with `createElement` method in React.
* `Declarative Programming`
* React is declarative in nature, utilizing either it’s built-in createElement method or the higher-level language known as JSX.
* `Reusability`
* Create elements that can be re-used over and over. One-flow of data
* React apps are built as a combination of parent and child components.
* Parents can have one or more child components, all children have parents.
* Data is never passed from child to the parent.
* `Virtual DOM` : React provides a Virtual DOM that acts as an agent between the real DOM and the developer to help debug, maintain, and provide general use.
* Due to this usage, React handles web pages much more intelligently; making it one of the speediest Front End Libraries available.

#### ES6 Refresher <a id="3b00"></a>

Exporting one item per file

* Use `export default` statement in ES6 to export an item. ES6

```text
export default class Wallet {
  // ...
}
// sayHello will not be exported
function sayHello() {
  console.log("Hello!");
}
```

CommonJS \(Equivalent\)

```text
class Wallet {
  // ...
}
// sayHello will not be exported
function sayHello() {
  console.log("Hello!");
}
module.exports = Wallet;
```

Exporting multiple items per file

* Use just thw `export` keyword \(without default\) to export multiple items per file. ES6 \(Better to export them individually like this, rather than bunching them all into an object\)

```text
export class Wallet {
  // ...
}
export function sayHello() {
  console.log("Hello!");
}
export const sayHi = () => {
  console.log("Hi!");
};
class Wallet {
  // ...
}
function sayHello() {
  console.log("Hello!");
}
const sayHi = () => {
  console.log("Hi!");
};
export { Wallet, sayHello, sayHi };
```

CommonJS \(Equivalent\)

```text
class Wallet {
  // ...
}
function sayHello() {
  console.log("Hello!");
}
const sayHi = () => {
  console.log("Hi!");
};
module.exports = {
  Wallet,
  sayHello,
  sayHi,
};
```

Importing with ES6 vs CommonJS![](https://cdn-images-1.medium.com/max/800/0*7EZESKf0XPbncXAY)

* Import statements in ES6 modules must always be at the top of the file, because all imports must occur before the rest of the file’s code runs. ES6

```text
import { Wallet } from "./wallet";
import * as fs from "fs";
const wallet = new Wallet();
```

CommonJS

```text
let { Wallet } = require("./wallet");
const wallet = new Wallet();
let fs = require("fs");
```

Unnamed default imports

* You can name unnamed items exported with export default any name when you import them.

```text
// exporting
export default class Wallet {
  // ...
}
// importing
import Money from "wallet.js";
const wallet = new Money();
```

* Just remember if you use `export` instead of `export default` then your import is already named and cannot be renamed.

```text
// exporting
export class Wallet {
  // ...
}
// importing
import { Wallet } from "wallet.js";
const wallet = new Wallet();
```

Aliasing imports

* Use as asterisk to import an entire module’s contents.
* Keep in mind you must use an `as` keyword to refer to it later.

```text
// export
export function sayHello() {
  console.log("Hello!");
}
export const sayHi = () => {
  console.log("Hi!");
};
//import
import * as Greetings from "greetings.js";
Greetings.sayHello(); // Hello!
Greetings.sayHi(); // Hi!
```

* You can also name identically named functions or items from different files.

```text
import { Wallet as W1 } from "./wallet1";
import { Wallet as W2 } from "./wallet2";
const w1 = new W1();
const w2 = new W2();
```

Browser support for ES6 Modules

* ES6 Modules can only be used when a JS file is specified as a module. `<script type="module" src="./wallet.js"></script>`
* You can get browser support for ES6 modules by adding module into your script tag.

#### Notes <a id="ea8b"></a>

#### JSX In Depth <a id="f19c"></a>

* Remember that JSX is just syntactic sugar for the built in `React.createElement(component, props, ...children)`
* React Library must always be in scope from your JSX code.
* Use Dot Notation for JSX Type
* User-Defined Components Must Be Capitalized `<Foo />` vs `<div>`
* Cannot use a general expression as the React element type. \(`Incorrect`\)

```text
function Story(props) {
  // Wrong! JSX type can't be an expression.
    return <components[props.storyType] story={props.story} />;
  };
```

\(`Corrected`\)

```text
function Story(props) {
  // Correct! JSX type can be a capitalized variable.
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
```

Props in JSX

* Several ways to specify props in JSX.
* `Javascript Expressions as Props`

```text
<MyComponent foo={1 + 2 + 3 + 4} />
```

* `String Literals`

```text
<MyComponent message="hello world" /> <MyComponent message={'hello world'} /> <MyComponent message="&lt;3" /> <MyComponent message={'❤'} />
```

* `Props Default to “True”`

```text
<MyTextBox autocomplete /> <MyTextBox autocomplete={true} />
```

* `Spread Attributes`

```text
function App1() { return <Greeting firstName="Ben" lastName="Hector" />; } function App2() { const props = { firstName: "Ben", lastName: "Hector" }; return <Greeting {…props} />; }
```

Children in JSX

* `props.children` : The content between opening and closing tag. JavaScript Expressions as Children

```text
function Item(props) {
  return <li>{props.message}</li>;
}
function TodoList() {
  const todos = ["finish doc", "submit pr", "nag dan to review"];
  return (
    <ul>
      {todos.map((message) => (
        <Item key={message} message={message} />
      ))}
    </ul>
  );
}
```

Functions as Children

* `props.children` works like any other prop, meaning it can pass any sort of data.

```text
// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}
function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
```

Booleans, Null, and Undefined Are Ignored

* `false`, `null`, `undefined`, and `true` are all valid children.
* They will not render.
* You can use these to conditionally render items.

```text
<div>
  {showHeader && <Header />}
  <Content />
</div>
```

* In this example, the component will only render if `showHeader` evals to True.

```text
// Before work-around
<div>
  {props.messages.length &&
    <MessageList messages={props.messages} />
  }
</div>
// After work-around
<div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div>
```

* Note that certain falsy values such as zero will still be rendered by React, you can work around this by ensuring situations like the above eval. into a boolean.
* In the times you want booleans to be rendered out, simply convert it into a string first.

```text
<div>My JavaScript variable is {String(myVariable)}.</div>
```

#### Reconciliation <a id="5256"></a>

The Diffing Algorithm

* `Diffing` : When the state of a component changes React creates a new virtual DOM tree.
* Elements of Different Types
* Every time the root elements have different types, React tears down the old tree and builds the new tree from scratch.
* DOM Elements Of the Same Type
* When comparing two DOM elements of the same type, React keeps the same underlying DOM node and only updates the changes attributes.

```text
<div className=”before” title=”stuff” /> <div className=”after” title=”stuff” />
```

```text
<div style={{ color: “red”, fontWeight: “bold” }} /> <div style={{color: ‘green’, fontWeight: ‘bold’}} />
```

* Component Elements Of The Same Type
* When components update, instances will remain the same, so that state maintains across renders.
* React will only update the props, to match the new element.
* Recursing On Children
* React will iterate both lists of children and generate a mutation whenever there’s a difference.
* This is why we use `keys`.
* Makes it easier for React to match children in the original tree with children in the subsequent tree.
* Tradeoffs
* Important to remember that reconciliation algorithm is an _implementation detail_.
* Re-rendering only to apply the differences following the rules stated in the previous sections.

#### Typechecking With PropTypes <a id="3c5c"></a>

* As your application grows, you can use React’s `typechecking` to catch bugs.
* `propTypes` is a special property to run typechecking.
* exports range of built in validators to ensure your received data is valid.
* propTypes is only checked in development mode.

```text
import PropTypes from "prop-types";
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
Greeting.propTypes = {
  name: PropTypes.string,
};
```

Requiring Single Child

* Use `PropTypes.element` to specify only a single child can be passed to a component as children.

```text
import PropTypes from "prop-types";
class MyComponent extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return <div>{children}</div>;
  }
}
MyComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
```

Default Prop Values

* Use `defaultProps` to assign default values for props.

```text
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
// Specifies the default values for props:
Greeting.defaultProps = {
  name: "Stranger",
};
// Renders "Hello, Stranger":
ReactDOM.render(<Greeting />, document.getElementById("example"));
```

```text
class Greeting extends React.Component {
  static defaultProps = {
    name: 'stranger'
  }
  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
```

#### Notes <a id="681f"></a>

#### React Router Introduction <a id="4c4d"></a>

* `React Router` is the answer for rendering different components for different pages.
* A front-end library that allows you to control which components to display using the browser location.
* `Client-side Routing` Getting started with routing
* Install React Router with:
* npm install — save react-router-dom@⁵.1.2
* Import `Browser Router` from package.
* import { BrowserRouter } from “react-router-dom”;
* `BrowserRouter` is the primary component of the router that wraps your route hierarchy.
* Wrap it around components.
* Creates a `React Context` that passes routing information down to all its descendant components.
* You can also use `HashRouter`, where it would generate a hash before the endpoint. Creating frontend routes
* React Router helps your app render specific components based on the URL.
* The most common component is `<Route>`
* Wrapped around another component, causing the comp. to only render if the a certain URL is matched.
* `Props` : path, component, exact, and \[render\]
* Browser Router can only have a single child component.
* The Browser Router wraps all routes within a parent div element.

```text
const Root = () => {
  const users = {
    1: { name: "Andrew" },
    2: { name: "Raymond" },
  };
  return (
    <BrowserRouter>
      <div>
        <h1>Hi, I'm Root!</h1>
        <Route exact path="/" component={App} />
        <Route path="/hello" render={() => <h1>Hello!</h1>} />
        <Route path="/users" render={() => <Users users={users} />} />
      </div>
    </BrowserRouter>
  );
};
```

* component
* Indicates component to render.
* path
* Indicates path to render a specific component.
* exact
* Tells route to not pattern match and only render a certain route exclusively to it’s associated component.
* render
* Optional prop that takes in a function to be called.
* Causes extra work for React.
* Preferred for inline rendering of simple functional components.
* Difference between `component` and `render` is that component returns new JSX that be re-mounted, but render returns the JSX that will be mounted only once.
* // This inline rendering will work, but is unnecessarily slow. &lt;Route path=”/hello” component={\(\) =&gt; &lt;h1&gt;Hello!&lt;/h1&gt;} /&gt; // This is the preferred way for inline rendering. &lt;Route path=”/hello” render={\(\) =&gt; &lt;h1&gt;Hello!&lt;/h1&gt;} /&gt;
* Also useful if you need to pass in specific props to a component.
* // \`users\` to be passed as a prop: const users = { 1: { name: “Andrew” }, 2: { name: “Raymond” }, }; &lt;Route path=”/users” render={\(\) =&gt; &lt;Users users={users} /&gt;} /&gt;;

Route path params

* Your component’s props can hold information about URL’s parameters.
* Will match segments starting at `:` to the next `/`, `?`, `#`.

```text
<Route
  path="/users/:userId"
  render={(props) => <Profile users={users} {...props} />}
/>
```

* `{...props}` spreads out the router's props.
* `props.match.params` is used to access the match prop's parameters.
* Useful keys on the `match` object:
* `isExact` : boolean that tells you whether or not the URL exactly matches the path.
* `url` : the currentURL
* `path` : Route path it matched against \(w/o wildcards\)
* `params` : Matches for the individual wildcard segments.

#### Navigation <a id="0ad8"></a>

React Router Navigation

* `Link`, `NavLink`, `Redirect`, `history` props of React Router are used to help your user navigate routes. Adding links for navigation
* Issues on-click navigation event to a route defined in app.
* Usage renders an anchor tag with a correctly set `href` attribute.

```text
import { BrowserRouter, Route, Link } from "react-router-dom";
```

* `Link` takes two properties: `to` and `onClick`.
* `to` : route location that points to an absolute path.
* `onClick` : clickHandler.
* `NavLink` works just like `Link` but has a bit of extra functionality.
* Adds extra styling, when the path it links to matches the current path.
* As it’s name suggests, it is used to Nav Bars.
* Takes three props:
* `activeClassName` : allows you to set a CSS class name for styling. \(default set to 'active'\)
* `activeStyle` : style object that is applied inline when it's `to` prop. matches the current URL.
* `exact` prop is a boolean that defaults to false; you can set it to true to apply requirement of an exact URL match.
* exact can also be used as a flag instead of a reg. property value.
* benefit of adding this is so that you don’t trigger other matches. Switching between routes
* `<Switch>` : Component allows you to only render one route even if several match the current URL.
* You may nest as many routes as you wish but only the first match of the current URL will be rendered.
* Very useful if we want a default component to render if none of our routes match.

```text
<Switch>
  <Route path="some/url" component={SomeComponent} />
  <Route path="some/other/url" component={OtherComponent} />
  <Route component={DefaultComponent} />
</Switch>
```

* `DefaultComponent` will only render if none of the other URLs match up.
* `<Redirect>` : Helps redirect users.
* Only takes a single prop: `to`.

```text
<Route
  exact
  path="/"
  render={() => (this.props.currentUser ? <Home /> : <Redirect to="/login" />)}
/>
```

History

* `History` allows you to update the URL programmatically.
* Contains two useful methods:
* `push` : Adds a new URL to the end of the history stack.
* `replace` : Replaces the current URL on the history stack, so the back button won't take you to it.

```text
// Pushing a new URL (and adding to the end of history stack):
const handleClick = () => this.props.history.push("/some/url");
// Replacing the current URL (won't be tracked in history stack):
const redirect = () => this.props.history.replace("/some/other/url");
```

#### Nested Routes <a id="7306"></a>

Why nested routes?

* Create routes that tunnel into main components vs getting rendered on the main page as it’s own thing. What are nested routes?

```text
const Profile = (props) => {
  // Custom call to database to fetch a user by a user ID.
  const user = fetchUser(props.match.params.userId);
  const { name, id } = user;
  return (
    <div>
      <h1>Welcome to the profile of {name}!</h1>
      <Link to={`/users/${id}/posts`}>{name}'s Posts</Link>
      <Link to={`/users/${id}/photos`}>{name}'s Photos</Link>
      <Route path="/users/:userId/posts" component={UserPosts} />
      <Route path="/users/:userId/photos" component={UserPhotos} />
    </div>
  );
};
```

Alt. version using `props.match`

```text
// Destructure `match` prop
const Profile = ({ match: { url, path, params }) => {
  // Custom call to database to fetch a user by a user ID.
  const user = fetchUser(params.userId);
  const { name, id } = user;
  return (
    <div>
      <h1>Welcome to the profile of {name}!</h1>
      <Link to={`${url}/posts`}>{name}'s Posts</Link>
      <Link to={`${url}/photos`}>{name}'s Photos</Link>
      <Route path={`${path}/posts`} component={UserPosts} />
      <Route path={`${path}/photos`} component={UserPhotos} />
    </div>}
  );
};
```

* As you can see above, our end URL isn’t even defined until we apply those flexible values in.

#### React Builds <a id="9deb"></a>

* `Build` : Process of converting code into something that can actually execute or run on the target platform.
* In regards to React, the minimum a build should do is convert JSX to something that browsers can understand. Reviewing common terminology
* `Linting` : Process of using a tool to analyze your code to catch common errors, bugs, inconsistencies etc...
* `Transpilation` : Process of converting source code, like JS, from one version to another.
* `Minification` : Process of removing all unnecessary characters in your code.
* `Bundling` : Process of combining multiple code files into a single file.
* `Tree Shaking` : Process of removing unused or dead code from your application before it's bundled. Configuration or code?
* `Configuration` allows developers to create build tasks by declaring either JSON, XML, or YAML without explicitly writing every step in the process.
* `Coding` or `Scripting` simply requires code. Babel and webpack \(yes, that's intentionally a lowercase 'w'\)
* `Babel` : Code Transpiler that allows you to use all of the latest features and syntax wihtout worrying about what browsers support what.
* `webpack` : Allows developers to use JS modules w/o requiring users to use a browser that natively supports ES modules.
* Create React App uses webpack and Babel under the hood to build applications. The Create React App build process
* What happens when you run `npm start`:

1. .env variables are loaded.
2. list of browsers to support are checked.
3. config’d HTTP port checked for availability.
4. application compiler is configured and created.
5. `webpack-dev-starter` is started
6. `webpack-dev-starter` compiles app.
7. `index.html` is loaded into browser
8. file watcher is started to watch for changes. Ejecting

* There is a script in Create React App called `eject` that allows you to 'eject' your application and expose all the hidden stuff. Preparing to deploy a React application for production
* Defining Env Variables

```text
REACT_APP_FOO: some value
REACT_APP_BAR: another value
```

```text
console.log(process.env.REACT_APP_FOO);
```

```text
Can be referenced in your index.html like so: <title>%REACT_APP_BAR%</title>
```

Configuring the supported browsers

```text
{
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

* If you specify older browsers it will affect how your code get’s transpiled. Creating a production build
* Run `npm run build` to create a production build.
* Bundles React in production mode and optimizes the build for the best performance.

#### Notes <a id="152e"></a>

#### Introduction to React <a id="ebbc"></a>

* Simply a nice library that turns data into DOM.
* `Tree Diffing` : Fast comparison and patching of data by comparing the current virtual DOM and new virtual DOM - updating only the pieces that change.
* `It's just a tree with some fancy diffing`

#### Create Element <a id="3799"></a>

From JavaScript To DOM

* The `React.createElement` function has the following form:

```text
React.createElement(type, [props], [...children]);
```

* `Type` : Type of element to create, i.e. a string for an HTML element or a reference to a function or class that is a React component.
* `Props` : Object that contains data to render the element.
* `Children` : Children of the elemet, as many as you want. Creating elements
* Our rendering goal:

```text
<ul>
  <li class="selected">
    <a href="/pets">Pets</a>
  </li>
  <li>
    <a href="/owners">Owners</a>
  </li>
</ul>
```

* There are five tags to create:
* One `ul`
* Two `li`
* Two `a`
* There are certain attributes we want to appear in the DOM for these tags as well:
* Each `li` has a `class` \(or `className` in React\)
* Both `a` ele's have `href` attributes
* Also keep in mind the parent child relationships happening between the tags.
* `ul` is the parent of both `li`
* Each `li` has an `a` element as a child
* Each `a` has a `text content` child

![](https://cdn-images-1.medium.com/max/800/0*8ls0PmtREELbf5Wm)

```text
React.createElement(
  "ul",
  null,
  React.createElement(
    "li",
    { className: "selected" },
    React.createElement("a", { href: "/pets" }, "Pets")
  ),
  React.createElement(
    "li",
    null,
    React.createElement("a", { href: "/owners" }, "Owners")
  )
);
```

Converting to virtual DOM

* After you set up your `React.createElement`, you use `React.render` to take the value returned from cE and a DOM node to insert into the conversion of the real DOM.

```text
// Put the element tree in a variable
const navList = React.createElement(
  "ul",
  null,
  React.createElement(
    "li",
    { className: "selected" },
    React.createElement("a", { href: "/pets" }, "Pets")
  ),
  React.createElement(
    "li",
    null,
    React.createElement("a", { href: "/owners" }, "Owners")
  )
);
// Get a DOM node for React to render to
const mainElement = document.querySelector("main");
// Give React the element tree and the target
ReactDOM.render(navList, mainElement);
```

* JS Code =&gt; Virtual DOM =&gt; Real Dom Updates
* If you call React.render a second or multiple times it just checks the existing Virtual DOM and it knows which smaller areas to change. Thinking in Components
* Components are pieces of reusable front-end pieces.
* Components should be Single Responsibility Principle compliant.

#### Create Element <a id="8bd3"></a>

`React.createElement Demo`

* Can import non-local dependencies with `import 'package-link'`

```text
const App = () => React.createElement("h1", null, "Hello, Programmers!");
const target = document.querySelector("main");
const app = React.createElement(App, null);
// Give React the element tree and the target
ReactDOM.render(app, target);
```

* Remember when importing modules from other files you have to denote the file type in the import statement. HTML Original

```text
<section class="clue">
  <h1 class="clue__title">Clue$ 268530</h1>
  <div class="clue__question">
      2009: I dreamed a Dream
  </div>
  <div class="clue__category">
      <<unparsed>>
  </div>
  <div class="clue__amount">
      $800
  </div>
</section>
```

React Version

```text
const Clue = () =>
  React.createElement(
    "section",
    { className: "clue" },
    React.createElement("h1", { className: "clue__title" }, "Title"),
    React.createElement("div", { className: "clue__question" }, "?"),
    React.createElement("div", { className: "clue__category" }, "Category"),
    React.createElement("div", { className: "clue__amount" }, "$800")
  );
```

* Because `class` is a reserved keyword in JS, in React we can use `className` to assign a class to an element.
* Remember the data that goes into createElement: element type, data to pass into the element, and then children.
* `props` : Properties;
* To handle certain values that are initially undefined, we can use `defaultProps`.

```text
Clue.defaultProps = {
  category: {},
};
```

* You can change in the devTools Network tab the internet speed to check for values that may be undefined to hangle with defaultProps.
* If we fetch multiple pieces of data, we can render many things by using `map`.
* You need to assign a unique key to each of the clues.
* We need to keep track of them individually so that React can easily refer to a specific one if there is an issue. `clue => { key:clue.id, ...clue }`

```text
const App = (props) =>
  React.createElement(
    "h1",
    null,
    props.clues.map((clue) =>
      React.createElement(Clue, { key: clue.id, ...clue })
    )
  );
export default App;
```

* Note: JSX is preferred over React.createElement;

#### Notes from Hello Programmer Exercise <a id="e5f8"></a>

* When you import modules from websites they must have CORs activated.
* These import statements, import `global variables`.
* When we want to move our code into production we need to change the imports into the production minified versions.

```text
import "https://unpkg.com/react@16/umd/react.production.min.js";
import "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js";
```

* While we will never actually be creating full apps with just React.createElement =&gt; it is the enginer that is running under the hood!

```text
import "https://unpkg.com/react@16/umd/react.development.js";
import "https://unpkg.com/react-dom@16/umd/react-dom.development.js";
const Links = () =>
  React.createElement(
    "ul",
    { id: "nav-links" },
    React.createElement(
      "li",
      { className: "is-selected" },
      React.createElement("a", { href: "http://appacademy.io" }, "App Academy")
    ),
    React.createElement(
      "li",
      null,
      React.createElement("a", { href: "https://aaonline.io" }, "a/A Open")
    )
  );
// Set up React Element: Type, Imported Data, Child (Child is Text in this Scenario)
// HelloWorld is a function based component
const HelloWorld = () => React.createElement("h1", null, "Hello, Programmers");
const AllTogether = () =>
  React.createElement(
    "div",
    null,
    React.createElement(HelloWorld, null),
    React.createElement(Links, null)
  );
// Target the Element to append new Ele
const target = document.querySelector("main");
// Assign your 'App' to your created Elements
// We are creating an element from the HelloWorld function.
const app = React.createElement(AllTogether, null);
// Render from the Virtual Dom to the Actual Dom
ReactDOM.render(app, target);
```

#### Introduction to JSX <a id="3bd4"></a>

* `JSX` : Javascript Extension, a new language created by React developers to have an easier way of interacting with the React API. How to use JSX
* We will use `babel` to convert version of modern JS into an older version of JS. React Create Element

```text
const ExampleComponent = (props) =>
  React.createElement(
    React.Fragment,
    null,
    React.createElement("h1", null, "Hello!"),
    React.createElement("img", { src: "https://via.placeholder.com/150" }),
    React.createElement("a", { href: props.searchUrl }, props.searchText)
  );
```

JSX Version

```text
const ExampleComponent = (props) => (
  <React.Fragment>
    <h1>Hello!</h1>
    <img src="https://via.placeholder.com/150" />
    <a href={props.searchUrl}>{props.searchText}</a>
  </React.Fragment>
);
```

* Keep in mind that self closing tags in React must have a `forward slash` to close it.

![](https://cdn-images-1.medium.com/max/800/0*NNxuFMF-sOL8Wvdl)

* Properties and Data

```text
<img src="https://via.placeholder.com/150" />;
// becomes..
React.createElement("img", { src: "https://via.placeholder.com/150" });
// if we want to pass in data vs just a string literal
<a href={props.searchUrl}>{props.searchText}</a>;
// so it becomes..
React.createElement("a", { href: props.searchUrl }, props.searchText);
// if you want the text search uppercase..
<a href={props.searchUrl}>{props.searchText.toUpperCase()}</a>;
```

* Comments in JSX have the following syntax:

```text
<div>
  <h2>This is JSX</h2>
  {/* This is a comment in JSX */}
</div>
```

* `Property Names`:
* `checked` : Attribute of input components such as checkbox or radio, use it to set whether the component is checked or not.
* `className` : Used to specify a CSS class.
* `dangerouslySetInnerHTML` : React's equivalent of innerHTML because it is risky to cross-site scripting attacks.
* `htmlFor` : Because `for` is protected keyword, React elements use this instead.
* `onChange` : Event fired whenever a form field is changed.
* `style` : Accepts a JS object with camelCase properties rather than a CSS string.
* `value` : Supported by Input, Select, and TextArea components; use it to set the value of the component.
* Note: React uses camel-case!!! The JSX semicolon gotcha

```text
function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <div>Welcome to JSX.</div>
    </div>
  );
}
```

create Element equivalent

```text
is equivalent to
function App() {
  return (
    React.createElement(
      'div',
      null,
      React.createElement('h1', null, 'Hello!'),
      React.createElement('div', null, 'Welcome to JSX.'),
    )
  );
}
```

* We wrap what want to return in parenthesis so JS doesn’t auto add semi-colons after every line and run the code incorrectly.
* Just remember if you decided to use the return keyword in a function to ‘return some JSX’, then make sure you wrap the JSX in parenthesis.

`npx create-react-app my-app`

* Single line used to initiate a React application.
* React has a great toolchain where you can see changes live as you’re editing your application.
* React errors will be rendered directly onto the browser window.
* A downside is that it installs a lot of bloat files.
* Examples of React create Element and JSX equivalent

```text
React.createElement(
  "a",
  {
    className: "active",
    href: "https://appacademy.io",
  },
  "App Academy"
);
// JSX Version
<a className="active" href="https://appacademy.io">
  App Academy
</a>;
```

```text
React.createElement(
  OwnerDetails,
  {
    owner: props.data.owner,
    number: props.index + 1,
  },
  props.name
);
// JSX Version
<OwnerDetails owner={props.data.owner} number={props.index + 1}>
  {props.name}
</OwnerDetails>;
```

More Complex JSX Example

```text
const BookPanel = (props) => {
  <section className="book" id={`book-${props.id}`}>
    <h1 className="book__title">{props.title}</h1>
    <img src={props.coverUrl} />
    <div className="book__desc">{props.description}</div>
  </section>;
};
```

#### Notes <a id="6fec"></a>

#### Using Custom CRA Templates <a id="87fd"></a>

Using a Custom Template `npx create-react-app my-app --template @appacademy/simple`

* Keep in mind that using `create-react-app` automatically initializes a git repository for you!
* App Academy custom template for creating a react app.
* If using the default react create project you can delete the following files:
* favicon.ico
* robots.txt
* logo192.png
* logo512.png
* manifest.json
* You can also simplify the `html` file into:

```text
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Simplifying the src folder

* Remove: App.css App.test.js logo.svg serviceWorker.js setupTests.js
* Update the Following Files:

```text
// ./src/App.js
import React from "react";
function App() {
  return <h1>Hello world!</h1>;
}
export default App;
``;
```

```text
// ./src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

