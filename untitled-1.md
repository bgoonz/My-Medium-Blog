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

#### React Class Components <a id="3e55"></a>

Class Components

* You can write React components using ES2015 Classes: Function Component

```text
// ./src/Message.js
import React from "react";
const Message = (props) => {
  return <div>{props.text}</div>;
};
export default Message;
```

ES2015 Version

```text
// ./src/Message.js
import React from "react";
class Message extends React.Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}
export default Message;
```

* We can access props within a `class component` by using `this.props`
* Keep in mind Class Components are used just like function components.

```text
// ./src/index.js
import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message";
ReactDOM.render(
  <React.StrictMode>
    <Message text="Hello world!" />
  </React.StrictMode>,
  document.getElementById("root")
);
```

Setting and accessing props

```text
class Message extends React.Component {
  constructor(props) {
    super(props);
    // TODO Initialize state, etc.
  }
  render() {
    return <div>{this.props.text}</div>;
  }
}
```

* If we define a constructor method in our Class Component, we have to define the `super` method with `props` passed through it.
* Side Note: Before React used ES2015 Classes, it used `React.createclass` function, if you ever need to use this antiquated method make sure you install a module called `create-react-class` Stateful components
* One of the major reasons why you would choose to use a Class Component over a Function Component is to add and manage local or internal state to your component.
* Second of the major reasons is to be able to use a Class Component’s lifecycle methods. What is state?
* Props are data that are provided by the consumer or caller of the component.
* Not meant to be changed by a component.
* State is data that is `internal` to the component.
* Intended to be updated or mutated. When to use state
* _Only Use State when it is absolutely necessary_
* If the data never changes, or if it’s needed through an entire application use props instead.
* State is more often used when creating components that retrieve data from APIs or render forms.
* The general rule of thumb: If a component doesn’t need to use state or lifecyle methods, it should be prioritized as a `function component`.
* Functional:Stateless \|\| Class:Stateful Initializing state
* Use a class constructor method to initialize `this.state` object. // Application Entry Point

```text
// ./src/index.js
import React from 'react'
import ReactDOM from 'react-dom';
import RandomQuote from './RandomQuote';
ReactDOM.render(
  <React.StrictMode>
    <RandomQuote />
  </React.StrictMode>
  document.getElementById('root');
)
```

// Class Component: RandomQuote

```text
import React from "react";
class RandomQuote extends React.Component {
  constructor() {
    super();
    const quotes = [
      "May the Force be with you.",
      "There's no place like home.",
      "I'm the king of the world!",
      "My mama always said life was like a box of chocolates.",
      "I'll be back.",
    ];
    this.state = {
      quotes,
      currentQuoteIndex: this.getRandomInt(quotes.length);
    }
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  render() {
    return (
      <div>
        <h2>Random Quote</h2>
        <p>{this.state.quotes[this.state.currentQuoteIndex]}</p>
      </div>
    )
  }
}
export default RandomQuote;
```

Updating State

* Let’s say we want to update our state with a new quote.
* We can set up event listeners in React similarly to how we did them before.
* &lt;button type=”button” onClick={this.changeQuote}&gt; Change Quote &lt;/button&gt;
* `onClick` is the event listener.
* `{this.changeQuote}` is the event handler method.
* Our Class Component File should now look like this with the new additions:

```text
import React from "react";
class RandomQuote extends React.Component {
  constructor() {
    super();
    const quotes = [
      "May the Force be with you.",
      "There's no place like home.",
      "I'm the king of the world!",
      "My mama always said life was like a box of chocolates.",
      "I'll be back.",
    ];
    this.state = {
      quotes,
      currentQuoteIndex: this.getRandomInt(quotes.length);
    }
  }
  changeQuote = () => {
    const newIndex = this.getRandomInt(this.state.quotes.length);
    // Setting the 'new state' of currentQuoteIndex state property
    // to newly generated random index #.
    this.setState({
      currentQuoteIndex: newIndex;
    })
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  render() {
    return (
      <div>
        <h2>Random Quote</h2>
        <p>{this.state.quotes[this.state.currentQuoteIndex]}</p>
        <button type="button" onClick={this.changeQuote}>
          Change Quote
        </button>
      </div>
    )
  }
}
export default RandomQuote;
```

Don’t modify state directly

* It is important to `never` modify your state directly!
* ALWAYS use `this.setState` method to update state.
* This is because when you only use this.state to re-assign, no re-rendering will occur =&gt; leaving our component out of sync. Properly updating state from the previous state
* In our current example, the way we have `changeQuote` set up leaves us with occasionally producing the same index twice in a row.
* One solution is to design a loop but keep in mind that state updates are handled asynchronously in React \(your current value is not guaranteed to be the latest\)
* A safe method is to pass an anonymous method to `this.setState` \(instead of an object literal\) Previous

```text
changeQuote = () => {
    const newIndex = this.getRandomInt(this.state.quotes.length);
    this.setState({
      currentQuoteIndex: newIndex;
    })
  }
```

Passing w/ Anon Method

```text
changeQuote = () => {
  this.setState((state, props) => {
    const { quotes, currentQuoteIndex } = state;
    let newIndex = -1;
    do {
      newIndex = this.getRandomInt(quote.length);
    } while (newIndex === currentQuoteIndex);
    return {
      currentQuoteIndex: newIndex,
    };
  });
};
```

Providing default values for props

* In our current example, we pass in a static array of predefined quotes in our constructor.
* The way it is set up right now leaves our list of quotes unchanged after initialization.
* We can make quotes more dynamic by replacing our static array with a `props` argument passed into `super`.
* constructor\(props\) { super\(props\); }
* We can now move our quotes array to our application entry point and pass it in as a prop. // Application Entry Point

```text
// ./src/index.js
import React from 'react'
import ReactDOM from 'react-dom';
import RandomQuote from './RandomQuote';
// Re-assign our array here and pass it in as a prop in Render.
const quotes = [
      "May the Force be with you.",
      "There's no place like home.",
      "I'm the king of the world!",
      "My mama always said life was like a box of chocolates.",
      "I'll be back.",
      "This way I can define more quotes",
    ];
ReactDOM.render(
  <React.StrictMode>
    <RandomQuote quotes={quotes}/>
  </React.StrictMode>
  document.getElementById('root');
)
```

* One thing to note about this workaround is that the caller of the component _must_ set the quotes prop or the component will throw an error =&gt; so use `defaultProps`!

```text
// At the bottom of RandomQuote.js...
RandomQuote.defaultProps = {
  quotes: [
    "May the Force be with you.",
    "There's no place like home.",
    "I'm the king of the world!",
    "My mama always said life was like a box of chocolates.",
    "I'll be back.",
    "This way I can define more quotes",
  ],
};
```

* A good safety net in case the consumer/caller doesn’t provide a value for the quotes array.
* We can even remove it from our index.js now and an error will not be thrown.

#### Handling Events <a id="9171"></a>

* To add an event listener to an element, just define a method to handle the event and associate that method with the element event you are listening for. Example

```text
import React from "react";
class AlertButton extends React.Component {
  showAlert = () => {
    window.alert("Button Clicked!");
  };
  render() {
    return (
      <button type="button" onClick={this.showAlert}>
        Submit
      </button>
    );
  }
}
```

* Note that when refering the handler method in onClick we’re not invoking showAlert simply just passing a reference. Preventing default behavior
* HTML Elements in the browser often have a lot of default behavior.
* I.E. Clicking on an `<a>` element navigates so a resource denoted by `<href>` property.
* Here is an example of where using `e.preventDefault()` could come in handy.

```text
import React from "react";
class NoDefaultSubmitForm extends React.Component {
  submitForm = (e) => {
    e.preventDefault();
    window.alert("Handling form submission...");
  };
  render() {
    return (
    <form onSubmit={this.submitForm}>
      <button>Submit</button>
    </form>;
    )}
}
```

* The button contained within the form will end up refreshing the page before `this.submitForm` method can be completed.
* We can stick an `e.preventDefault()` into the actual method to get around this problem.
* `e` : Parameter that references a `Synthetic Event` object type. Using `this` in event handlers

```text
// ./src/AlertButton.js
import React from "react";
class AlertButton extends React.Component {
  showAlert = () => {
    window.alert("Button clicked!");
    console.log(this);
  };
  render() {
    return (
      <button type="button" onClick={this.showAlert}>
        Click Me
      </button>
    );
  }
}
export default AlertButton;
```

* When we console log `this` we see the AlertButton object.
* If we were to write the showAlert method with a regular class method like:

```text
showAlert() {
  console.log(this);
}
```

* We would get `undefined` =&gt; remember that fat arrow binds to the current context! Reviewing class methods and the `this` keyword
* Let’s refresh on binding.

```text
class Boyfriend {
  constructor() {
    this.name = "Momato Riruru";
  }
  displayName() {
    console.log(this.name);
  }
}
const Ming = new Boyfriend();
Ming.displayName(); // => Momato Riruru
const displayAgain = Ming.displayName;
displayAgain(); // => Result in a Type Error: Cannot read property 'name' of undefined.
```

* The first time we use our `displayMethod` call, it is called directly on the instance of the boyfriend class, which is why `Momato Riruru` was printed out.
* The second time it was called, the ref of the method is stored as a variable and method is called on that variable instead of the instance; resulting in a type error \(it has lost it’s context\)
* Remember we can use the `bind` method to rebind context!
* We can refactor to get the second call working like this:
* const displayAgain = Ming.displayName.bind\(Ming\); displayAgain\(\); // =&gt; Now Momato Riruru will be printed out.
* To continue using function declarations vs fat arrow we can assign context in a constructor within a class component.

```text
import React from "react";
class AlertButton extends React.Component {
  constructor() {
    super();
    this.showAlert = this.showAlert.bind(this); // binding context
  }
  showAlert() {
    console.log(this);
  }
  render() {
    return (
      <button type="button" onClick={this.showAlert}>
        Submit
      </button>
    );
  }
}
export default AlertButton;
```

* `Experimental Syntax` : Syntax that has been proposed to add to ECMAScript but hasn't officially been added to the language specification yet.
* It’s good to pick one approach and use it consistently, either:

1. Class Properties & Arrow Functions
2. Bind Method & This Keyword The `SyntheticEvent` object

* Synthetic Event Objects: Cross Browser wrappeds around the browser’s native event.
* Includes the use of stopPropagation\(\) and preventDefault\(\);
* Attributes of the Synthetic Event Object:Attributesboolean bubblesboolean cancelableDOMEventTarget currentTargetboolean defaultPreventednumber eventPhaseboolean isTrustedDOMEvent nativeEventvoid preventDefault\(\)boolean isDefaultPrevented\(\)void stopPropagation\(\)boolean isPropagationStopped\(\)void persist\(\)DOMEventTarget targetnumber timeStampstring type
* `nativeEvent` : property defined in a synthetic event object that gives you access to the underlying native browser event \(rarely used!\)

#### Forms in React <a id="593c"></a>

_Exercise being done in a separate file_ Random Notes

* `onChange` : detects when a value of an input element changes.
* Assigning `onChange` to our input fields makes our component's state update in real time during user input.
* Dont forget to add `preventDefault` onto form submissions to deal with the default behavior of the browser refreshing the page!
* `submittedOn: new Date(),` Can be added to a form, most likely will persist into a DB.
* Controlled Components
* We use the `onChange` event handlers on form fields to keep our component's state as the `"one source of truth"`
* Adding an `onChange` event handler to every single input can massively bloat your code.
* Try assiging it to it’s own method to apply everywhere.
* `textarea` is handled differently in react: it takes in a value property to handle what the inner text will be.

```text
// ./src/ContactUs.js
import React from "react";
class ContactUs extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      phoneType: "",
      comments: "",
      validationErrors: [],
    };
  }
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  // Vanilla JS Function for validating inputs
  validate(name, email) {
    const validationErrors = [];
    if (!name) {
      validationErrors.push("Please provide a Name");
    }
    if (!email) {
      validationErrors.push("Please provide an Email");
    }
    return validationErrors;
  }
  onSubmit = (e) => {
    // Prevent the default form behavior
    // so the page doesn't reload.
    e.preventDefault();
    // Retrieve the contact us information from state.
    const { name, email, phone, phoneType, comments } = this.state;
    // Get Validation Errors - proceeding destructuring values from this.state.
    const validationErrors = this.validate(name, email);
    // If we have errors...
    if (validationErrors.length > 0) {
      this.setState({ validationErrors });
    } else {
      // Proceed normally
      // Create a new object for the contact us information.
      const contactUsInformation = {
        name,
        email,
        phone,
        phoneType,
        comments,
        submittedOn: new Date(),
      };
      console.log(contactUsInformation);
      // Reset the form state.
      this.setState({
        name: "",
        email: "",
        phone: "",
        phoneType: "",
        comments: "",
        validationErrors: [],
      });
    }
  };
  render() {
    const { name, email, phone, phoneType, comments, validationErrors } =
      this.state;
    return (
      <div>
        <h2>Contact Us</h2>
        {validationErrors.length > 0 && (
          <div>
            The following errors were found:
            <ul>
              {validationErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="text"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              name="phone"
              type="text"
              onChange={this.onChange}
              value={phone}
            />
            <select name="phoneType" onChange={this.onChange} value={phoneType}>
              <option value="">Select a phone type...</option>
              {this.props.phoneTypes.map((phoneType) => (
                <option key={phoneType}>{phoneType}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="comments">Comments:</label>
            <textarea
              id="comments"
              name="comments"
              onChange={this.onChange}
              value={comments}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
ContactUs.defaultProps = {
  phoneTypes: ["Home", "Work", "Mobile"],
};
export default ContactUs;
```

* We can use validation libraries like `validate` to make our validation functions more complex.

```text
import isEmail from "validator/es/lib/isEmail";
  validate(name, email) {
    const validationErrors = [];
    if (!name) {
      validationErrors.push("Please provide a Name");
    }
    if (!email) {
      validationErrors.push("Please provide an Email");
    } else if (!isEmail(email)) {
      validationErrors.push("Please provide a valid Email");
    }
    return validationErrors;
  }
```

Note About Client-side vs server-side validation

* Server-side validation is not optional.
* Tech-savvy users can manipulate client-side validations.
* Sometimes the ‘best approach’ is to skip implementing validations on the client-side and rely completely on the server-side validation.

#### Component Lifecycle <a id="4d46"></a>

![](https://cdn-images-1.medium.com/max/800/0*c24XQBvqBBg0Eztz)

* Component Lifecycle is simply a way of describing the key moments in the lifetime of a component.

1. Loading \(Mounting\)
2. Updating
3. Unloading \(Unmounting\) The lifecycle of a React component

* Each `Class Component` has several `lifecycle methods` that you can add to run code at specific times.
* `componentDidMount` : Method called after your component has been added to the component tree.
* `componentDidUpdate` : Method called after your component has been updated.
* `componentWillUnmount` : Method called just before your component is removed from the component tree.
* `Mounting`

1. `constructor` method is called
2. `render` method is called
3. React updates the `DOM`
4. `componentDidMount` is called

* `Updating`
* When component receives new `props`

1. `render` method is called
2. React updates the `DOM`
3. `componentDidUpdate` is called

* When `setState` is called

1. `render` method is called
2. React updates the `DOM`
3. `componentDidUpdate` is called

* `Unmounting`
* The moment before a class component is removed from the component tree:
* `componentDidMount` will be called. Avoiding the legacy lifecycle methods
* Occasionally you will encounter some deprecated lifecycle methods:
* UNSAFE\_componentWillMount
* UNSAFE\_componentWillReceiveProps
* UNSAFE\_componentWillUpdate
* Just know they will be removed soon from React’s API, peace. Using the class component lifecycle methods _Exercise done in sep. directory_
* Assorted Notes:
* Common Use for `componentDidMount` lifecycle method is for fetching data from an API.

—

#### Notes <a id="bd96"></a>

#### React Context <a id="209c"></a>

* You can use `React Context` to pass data through a component tree without having to manually thread props.
* Convenient way to share & update `global data`. Creating a Context

```text
// PupContext.js
import { createContext } from "react";
const PupContext = createContext();
export default PupContext;
```

* We use `React.createContext` to create context.
* Keep in mind if you invoke this method with aruguments, those arguments will be set as default context. Adding a Provider to the App component
* In order to pass context over to child components we need to wrap them in a provider component.
* The provider component takes in a value property that points to the information that needs to be passed to the children.

```text
<MyContext.Provider value={/* some value */}>
  <ChildComponent />
</MyContext.Provider>
```

Setting up a Consumer

```text
<MyContext.Consumer>
  {(value) => <Component value={value} />}
</MyContext.Consumer>
```

* Keep in mind that `Context.Consumer` expects a function as a child.
* The function has a value prop passed in from `Context.Provider`

#### Notes <a id="e985"></a>

#### Redux Explained <a id="05b8"></a>

* JS Framework for managing the frontend state of a web application.
* Gives us ability to store information in an organized manner in a web app and quickly retrieve that information from anywhere in the app.
* `Redux`
* Client Side Data Management
* Controls “Frontend State”
* NOT Your Database
* NOT Component State
* Just used for managing Data

![](https://cdn-images-1.medium.com/max/800/0*N7KFfhOZZ7UrY8s4)

* Visual of how an app without React manages it’s data.
* A lot of prop threading happening.
* Data stored in a sep. location — `global data`. The Anatomy of Redux
* `Store`
* Holds the Frontend State
* Provides an API for the Frontend State
* `Action`
* POJOs
* Outline Changes to Frontend State
* `Reducers`
* Functions
* Make Changes to Frontend State Where did Redux come from?
* There are three central philosophies of Redux:

1. `A Single Source of Truth` : state is stored in a POJO
2. `State is Read Only` : State is immutable, modified by dispatching actions.
3. `Changes are Made with Pure Functions` : Reducers that receive the actions and return updated state are pure functions of the old state and action. When is it appropriate to use Redux?

* When doing a project with simpler global state requirements, it may be better to choose React’s Context API over Redux.
* Redux offers more flexibility and support for middleware along with richer developer tools. Vocabulary
* `State`
* _Redux is a State Manager_
* State is all the information stored by that program at a particular point in time.
* Redux’s main job is to store the state and make it directly available to your entire app.
* `Store`
* _Redux stores state in a single store_.
* Redux store is a single JS object with a couple of methods \(not a class!\)
* Methods include: `getState`, `dispatch(action)`, and `subscribe(listener)`
* `Actions`
* _Redux store is updated by dispatching actions_
* Action is just a POJO that includes a mandatory `type` property.
* Contain info to update the store.
* We dispatch actions in response to User actions or AJAX requests.
* `Pure Functions`
* _Redux Reducers are Pure Functions_
* Functions are pure when their behavior depends only on it’s arguments as has no side effects.
* Simply takes in an argument and outputs a value.
* `Reducer`
* _Redux handles actions using reducers_
* A function that is called each time an action is dispatched.
* Takes in an `action` and `current state`
* Required to be pure functions so their behavior is predictable.
* `Middleware`
* _Customize response to dispatch actions by using Middleware_
* Middleware is an optional component of Redus that allows custom responses to dispatched actions.
* Most common use is to dispatch async requests to a server.
* `Time Traveling Dev Tools`
* _Redux can time travel wow_
* Time travel refers to Redux’s ability to revert to a previous state because reducers are all pure functions.
* `Thunks`
* _Convenient format for taking async actions in Redux_
* General concept in CS referring to a function who’s primary purpose is to call another function.
* Most commonly used to make async API requests.

#### Flux and Redux <a id="40b9"></a>

What is Flux?

* Front-end application architecutre.
* A pattern in which to structure an application.
* Unidirectional Data Flow — offers more predictability.
* `Actions` : Begins the data flow of data, simple object that contains a type; type indicates the type of change to be performed.
* `Dispatcher` : Mechanism for distributing actions to the store.
* `Store` : The entire state of the application, responsible for updating the state of your app.
* `View` : Unit of code that's responsible for rendering the user interface. Used to re-render the application when actions and changes occur.

![](https://cdn-images-1.medium.com/max/800/0*ywV6dO4a4QcGJxK5)

* Redux

![](https://cdn-images-1.medium.com/max/800/0*Nd73GjTY1PVQtjtQ)

* Library that facilitates the implementation of Flux.
* Redux Three Principles
* `Single Source of Truth`
* `State is Read-Only`
* `Only Pure Functions Change State`

#### Store <a id="a5be"></a>

* Simply an object that holds the application state wrapped in an API.
* `Three methods`:
* `getState()` : Returns the store's current state.
* `dispatch(action)` : Passes an action into the store's reducer to tell it what info to update.
* `subscribe(callback)` : Registers a callback to be triggered whenever the store updates. Updating the Store

```text
store.dispatch(action);
// Add Orange Action
const addOrange = {
  type: "ADD_FRUIT",
  fruit: "orange",
};
// Reducer for Orange Action
const fruitReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FRUIT":
      return [...state, action.fruit];
    default:
      return state;
  }
};
// Run the Dispatch
console.log(store.getState()); // []
store.dispatch(addOrange);
console.log(store.getState()); // [ 'orange' ]
```

Subscribing to the store

* Whenever a store process a dispatch\(\), it triggers all its subscribers.
* `Subscribers` : callbacks that can be added to the store via subscribe\(\).

```text
const display = () => {
  console.log(store.getState());
};
const unsubscribeDisplay = store.subscribe(display);
store.dispatch(addOrange); // [ 'orange', 'orange' ]
// display will no longer be invoked after store.dispatch()
unsubscribeDisplay();
store.dispatch(addOrange); // no output
```

Reviewing a simple example

```text
// app.js
const { createStore } = require("redux");
// Define the store's reducer.
const fruitReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FRUIT":
      return [...state, action.fruit];
    default:
      return state;
  }
};
// Create the store.
const store = createStore(fruitReducer);
// Define an 'ADD_FRUIT' action for adding an orange to the store.
const addOrange = {
  type: "ADD_FRUIT",
  fruit: "orange",
};
// Log to the console the store's state before and after
// dispatching the 'ADD_FRUIT' action.
console.log(store.getState()); // []
store.dispatch(addOrange);
console.log(store.getState()); // [ 'orange' ]
// Define and register a callback to listen for store updates
// and console log the store's state.
const display = () => {
  console.log(store.getState());
};
const unsubscribeDisplay = store.subscribe(display);
// Dispatch the 'ADD_FRUIT' action. This time the `display` callback
// will be called by the store when its state is updated.
store.dispatch(addOrange); // [ 'orange', 'orange' ]
// Unsubscribe the `display` callback to stop listening for store updates.
unsubscribeDisplay();
// Dispatch the 'ADD_FRUIT' action one more time
// to confirm that the `display` method won't be called
// when the store state is updated.
store.dispatch(addOrange); // no output
```

#### Reducers <a id="22c1"></a>

* Reducer function receives the current `state` and `action`, updates the state appropriately based on the `action.type` and returns the following state.
* You can bundles different action types and ensuing logic by using a switch/case statement.

```text
const fruitReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FRUIT":
      return [...state, action.fruit];
    case "ADD_FRUITS":
      return [...state, ...action.fruits];
    case "SELL_FRUIT":
      const index = state.indexOf(action.fruit);
      if (index !== -1) {
        // remove first instance of action.fruit
        return [...state.slice(0, index), ...state.slice(index + 1)];
      }
      return state; // if action.fruit is not in state, return previous state
    case "SELL_OUT":
      return [];
    default:
      return state;
  }
};
```

Reviewing how Array\#slice works

```text
const fruits = ["apple", "apple", "orange", "banana", "watermelon"];
// The index of the 'orange' element is 2.
const index = fruits.indexOf("orange");
// `...fruits.slice(0, index)` returns the array ['apple', 'apple']
// `...fruits.slice(index + 1)` returns the array ['banana', 'watermelon']
// The spread syntax combines the two array slices into the array
// ['apple', 'apple', 'banana', 'watermelon']
const newFruits = [...fruits.slice(0, index), ...fruits.slice(index + 1)];
```

* Approach that can be used to remove an element without mutating the original array. Avoiding state mutations
* Your reducer must always return a new object if the state changes. GOOD

```text
const goodReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      const nextState = Object.assign({}, state);
      nextState.count++;
      return nextState;
    default:
      return state;
  }
};
```

BAD

```text
const badReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      state.count++;
      return state;
    default:
      return state;
  }
};
```

#### Actions <a id="ad53"></a>

* Actions are the only way to trigger changes to the store’s state. Using action creators

```text
const addOrange = {
  type: "ADD_FRUIT",
  fruit: "orange",
};
store.dispatch(addOrange);
console.log(store.getState()); // [ 'orange' ]
```

* fruit is the `payload key` and orange is the `state data`
* `Action Creators` : Functions created from extrapolating the creation of an action object.

```text
const addFruit = (fruit) => ({
  type: "ADD_FRUIT",
  fruit,
});
```

* Use parenthesis for implicit return value.
* We can now add whatever fruit we’d like.

```text
store.dispatch(addFruit("apple"));
store.dispatch(addFruit("strawberry"));
store.dispatch(addFruit("lychee"));
console.log(store.getState()); // [ 'orange', 'apple', 'strawberry', 'lychee' ]
```

Preventing typos in action type string literals

```text
const ADD_FRUIT = "ADD_FRUIT";
const ADD_FRUITS = "ADD_FRUITS";
const SELL_FRUIT = "SELL_FRUIT";
const SELL_OUT = "SELL_OUT";
const addFruit = (fruit) => ({
  type: ADD_FRUIT,
  fruit,
});
const addFruits = (fruits) => ({
  type: ADD_FRUITS,
  fruits,
});
const sellFruit = (fruit) => ({
  type: SELL_FRUIT,
  fruit,
});
const sellOut = () => ({
  type: SELL_OUT,
});
```

* Using constant variables helps reduce simple typos in a reducer’s case clauses.

#### Debugging Arrow Functions <a id="04b5"></a>

* It is important to learn how to use debugger statements with arrow functions to effectively debug Redux cycle. Understanding the limitations of implicit return values

```text
const addFruit = (fruit) => {
  return {
    type: "ADD_FRUIT",
    fruit,
  };
};
const addFruit = (fruit) => {
  debugger;
  return {
    type: "ADD_FRUIT",
    fruit,
  };
};
```

* You must use explicit return statement arrow function to use a debugger.

#### React Router Introduction <a id="1b66"></a>

Now that you know how to render components in a React app, how do you handle rendering different components for different website pages? React Router is the answer!

Think of how you have created server-side routes in Express. Take the following URL and server-side route. Notice how the `/users/:userId` path corresponds with the `http://localhost:3000/users/2` URL to render a specific HTML page.

```text
// http://localhost:3000/users/2
app.get('/users/:userId', (req, res) => {
  res.render('userProfile.pug');
});
```

In the default React setup, you lose the ability to create routes in the same manner as in Express. This is what React Router aims to solve!

[React Router](https://github.com/ReactTraining/react-router) is a frontend routing library that allows you to control which components to display using the browser location. A user can also copy and paste a URL and email it to a friend or link to it from their own website.

When you finish this article, you should be able to use the following from the `react-router-dom` library:

* `<BrowserRouter>` to provide your application access to the `react-router-dom` library; and
* `<Route>` to connect specific URL paths to specific components you want rendered; and
* `<Switch>` to wrap several `Route` elements, rendering only one even if several match the current URL; and
* React Router’s `match` prop to access route path parameters.

#### Getting started with routing <a id="e166"></a>

Since you are writing single page apps, you don’t want to refresh the page each time you change the browser location. Instead, you want to update the browser location and your app’s response using JavaScript. This is known as client-side routing. You are using React, so you will use React Router to do this.

Create a simple react project template:

```text
npx create-react-app my-app --template @appacademy/simple
```

Then install React Router:

```text
npm install --save react-router-dom@^5.1.2
```

Now import `BrowserRouter` from `react-router-dom` in your entry file:

```text
import { BrowserRouter } from 'react-router-dom`;
```

#### BrowserRouter <a id="9870"></a>

`BrowserRouter` is the primary component of the router that wraps your route hierarchy. It creates a React context that passes routing information down to all its descendent components. For example, if you want to give `<App>` and all its children components access to React Router, you would wrap `<App>` like so:

```text
// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
```

```text
const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
```

```text
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

Now you can route the rendering of certain components to certain URLs \(i.e [`https://www.website.com/profile`](https://www.website.com/profile%29.)[\).](https://www.website.com/profile%29.)

#### HashRouter <a id="8fd1"></a>

Alternatively, you could import and use `HashRouter` from `react-router-dom`. Links for applications that use `<HashRouter>` would look like `https://www.website.com/#/profile` \(with an `#` between the domain and path\).

You’ll focus on using the `<BrowserRouter>`.

#### Creating frontend routes <a id="2387"></a>

React Router helps your React application render specific components based on the URL. The React Router component you’ll use most often is `<Route>`.

The `<Route>` component is used to wrap another component, causing that component to only be rendered if a certain URL is matched. The behavior of the `<Route>` component is controlled by the following props: `path`, `component`, `exact`, and `render` \(optional\).

Create a simple `Users` component that returns `<h1>This is the users index!</h1>`. Now let's refactor your `index.js` file so that you can create your routes within the component:

```text
// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Users from './Users';
```

```text
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        {/* TODO: Routes */}
      </div>
    </BrowserRouter>
  );
};
```

```text
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

Note that `BrowserRouter` can only have a single child component, so the snippet above wraps all routes within parent a `<div>` element. Now let's create some routes!

#### component <a id="b4a5"></a>

Begin with the `component` prop. This prop takes a reference to the component to be rendered. Let's render your `App` component:

```text
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route component={App} />
      </div>
    </BrowserRouter>
  );
};
```

Now you’ll need to connect a path to the component!

#### path <a id="57c2"></a>

The wrapped component will only be rendered when the path is matched. The path matches the URL when it matches some initial portion of the URL. For example, a path of `/` would match both of the following URLs: `/` and `/users`. \(Because `/users` begins with a `/` it matches the path `/`\)

```text
<Route path='/' component={App} />
<Route path='/users' component={Users} />
```

Take a moment to navigate to `http://localhost:3000/users` to see how both the `App` component and `Users` component are rendering.

#### exact <a id="85f8"></a>

If this `exact` flag is set, the path will only match when it exactly matches the URL. Then browsing to the `/users` path would no longer match `/` and only the `Users` component will be rendered \(instead of both the `App` component and `Users` component\).

```text
<Route exact path='/' component={App} />
<Route path='/users' component={Users} />
```

#### render <a id="f550"></a>

This is an optional prop that takes in a function to be called. The function will be called when the path matches. The function’s return value is rendered. You could also define a functional component inside the `component` prop, but this results in extra, unnecessary work for React. The `render` prop is preferred for inline rendering of simple functional components.

The difference between using `component` and `render` is that `component` returns new JSX to be re-mounted every time the route renders, while `render` simply returns to JSX what will be mounted once and re-rendered. For any given route, you should only use either the `component` prop, or the `render` prop. If both are supplied, only the `component` prop will be used.

```text
// This inline rendering will work, but is unnecessarily slow.
<Route path="/hello" component={() => <h1>Hello!</h1>} />
```

```text
// This is the preferred way for inline rendering.
<Route path="/hello" render={() => <h1>Hello!</h1>} />
```

It can be helpful to use `render` instead of `component` in your `<Route>` when you need to pass props into the rendered component. For example, imagine that you needed to pass the `users` object as a prop to your `Users` component. Then you could pass in props from `Root` to `Users` by returning the `Users` component like so:

```text
// `users` to be passed as a prop:
const users = {
  1: { name: 'Andrew' },
  2: { name: 'Raymond' }
};
```

```text
<Route path="/users" render={() => <Users users={users} />} />
```

As a reminder, `BrowserRouter` can only have a single child component. That's why you have wrapped all your routes within parent a `<div>` element.

```text
const Root = () => {
  const users = {
    1: { name: 'Andrew' },
    2: { name: 'Raymond' }
  };
```

```text
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

With this `Root` component, you will always render the `<h1>Hi, I'm Root!</h1>`, regardless of the path. Because of the first `<Route>`, you will only render the `App` component if the path exactly matches `/`. Because of the second `<Route>`, you will only render the `Users` component if the path matches `/users`.

#### Route path params <a id="adca"></a>

A component’s props can also hold information about a URL’s parameters. The router will match route segments starting at `:` up to the next `/`, `?`, or `#`. Those matched values are then passed to components via their props. Such segments are _wildcard_ values that make up your route parameters.

For example, take the route below:

```text
<Route path="/users/:userId"
       render={(props) => <Profile users={users} {...props} />} />
```

The router would break down the full `/users/:userId/photos` path to two parts: `/users`, `:userId`.

The `Profile` component's props would have access to the `:userId` part of the `http://localhost:3000/users/:userId/photos` URL through the `props` with router parameter information. You would access the the `match` prop's parameters \(`props.match.params`\). If you are using the `render` prop of the `Route` component, make sure to spread the props back into the component if you want it to know about the "match" parameters.

```text
// Route's `render` prop allows you to pass the `users`
// prop and spread the router `props`.
render={(props) => <Profile users={users} {...props} />}
```

The `params` object would then have a property of `userId` which would hold the value of the `:userId` _wildcard_ value. Let's render the `userId` parameter in a user profile component. Take a moment to create a `Profile.js` file with the following code:

```text
// ./src/Profile.js
import React from "react";
```

```text
const Profile = (props) => (
  <div>
    The user's id is {props.match.params.userId}.
  </div>
);
```

```text
export default Profile;
```

Notice how it uses the `match` prop to access the `:userId` parameter from the URL. You can use this wildcard to make and AJAX call to fetch the user information from the database and render the return data in the `Profile` component. Recall that your `Profile` component was rendered at the path `/users/:userId`. Thus you can use your `userId` parameters from `match.params` to fetch a specific user:

```text
// ./src/Profile.js
import React from "react";
```

```text
const Profile = ({ users, match: { params } }) => {
```

```text
  // In a real-world scenario, you'd make a call to an API to fetch the user,
  // instead of passing down and keying into a `users` prop.
  const user = users[params.userId];
```

```text
  return (
    <div>
      The user's id is {params.userId} and the user's name is {user.name}.
    </div>
  );
};
```

```text
export default Profile;
```

#### Match <a id="c94c"></a>

Now that you’ve seen your React Router’s `match` prop in action, let's go over more about [route props](https://reacttraining.com/react-router/web/api/Route/route-props)! React Router passes information to the components as route props, accessible to all components with access to the React Router. The three props it makes available are `location`, `match` and `history`. You've learned about `props.match.params`, but now let's review the other properties of the `match` prop!

This is an object that contains important information about how the current URL matches the route path. Here are some of the more useful keys on the `match` object:

* `isExact`: a boolean that tells you whether or not the URL exactly matches the path
* `url`: the current URL
* `path`: the route path it matched against \(without wildcards filled in\)
* `params`: the matches for the individual wildcard segments, nested under their names

When you use React Router, the browser `location` and `history` are a part of the state of your app. You can store information about which component should be displayed, which user profile you are currently viewing, or any other piece of state, in the browser location. You can then access that information from anywhere your Router props are passed to in your app.

Now that you’ve learned about parameters and route props, let’s revisit your `Root` component to add an `exact` flag to your `/users` route so that it does not render with your `/users/:userId` route. Your component should look something like this:

```text
const Root = () => {
  const users = {
    1: { name: 'Andrew' },
    2: { name: 'Raymond' }
  };
```

```text
  return (
    <BrowserRouter>
      <h1>Hi, I'm Root!</h1>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/hello" render={() => <h1>Hello!</h1>} />
```

```text
        {/* Render the `Users` page if no ID is included. */}
        <Route exact path="/users" render={() => <Users users={users} />} />
```

```text
        {/* Otherwise, render the profile page for that userId. */}
        <Route path="/users/:userId" component={(props) => <Profile users={users} {...props} />} />
      </div>
    </BrowserRouter>
  );
};
```

#### What you learned <a id="1774"></a>

In this article, you learned how to:

* Use components from the React Router library; and
* Create routes to render specific components; and
* Manage the order of rendered routes; and
* Use the `exact` flag to ensure that a specific path renders a specific component; and
* Use the React Router `match` prop to access Router params.

#### React Router Navigation <a id="b260"></a>

Now that you know how to create front-end routes with React Router, you’ll need to implement a way for your users to navigate the routes! This is what using React Router’s `Link`, `NavLink`, `Redirect`, and `history` prop can help you do.

In this article, you’ll be working off of the demo project you built in the React Router Intro reading. When you finish this article, you should be able to use the following components from the `react-router-dom` library:

* `<Link>` or `<NavLink>` to create links with absolute paths to routes in your application \(like "/users/1"\); and,
* `<Redirect>` to redirect a user to another path \(i.e. a login page when the user is not logged in\); and
* React Router’s `history` prop to update a browser's URL programmatically.

#### Adding links for navigation <a id="daf0"></a>

React Router’s `<Link>` is one way to simplify navigation around your app. It issues an on-click navigation event to a route defined in your app's router. Using `<Link>` renders an anchor tag with a correctly set `href` attribute.

#### Link <a id="7364"></a>

To use it, update your imports from the `react-router-dom` package to include `Link`:

```text
import { BrowserRouter, Route, Link } from 'react-router-dom';
```

Note that `<Link>` can take two props: `to` and `onClick`.

The `to` prop is a route location description that points to an absolute path, \(i.e. `/users`\). Add the following `Link` components in your `index.js` file above your routes:

```text
<Link to="/">App</Link>
<Link to="/users">Users</Link>
<Link to="/users/1">Andrew's Profile</Link>
```

The `onClick` prop is just like any other JSX click handler. You can write a function that takes in an `event` and handles it. Add the following `Link` before your routes and the following click handler function within your `Root` component:

```text
// Link with onClick prop
<Link to="/" onClick={handleClick}>App with click handler</Link>
```

```text
// Click handler function
const handleClick = () => {
  console.log('Thanks for clicking!')
};
```

Now, test your routes and links! If you inspect the page, you’ll see that your links are now rendered as `<a>` elements. Notice that clicking the `App with click handler` link logs a message in your console while directing your browser to render the `App` component.

#### NavLink <a id="4811"></a>

The `<NavLink>` works just like a `<Link>`, but with a little extra functionality. It has the ability to add extra styling when the path it links to matches the current path. This makes it an ideal choice for a navigation bar, hence the name. This styling can be controlled by three extra props: `activeClassName`, `activeStyle`, and `exact`. To begin using `NavLink`, update your imports from the `react-router-dom` package:

```text
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
```

The `activeClassName` prop of the `NavLink` component allows you to set a CSS class name for styling the `NavLink` when its route is active. By default, the `activeClassName` is already set to `active`. This means that you simply need to add an `.active` class to your CSS file to add active styling to your link. A `NavLink` will be active if its `to` prop path matches the current URL.

Let’s change your “Users”, “Hello”, and “Andrew’s Profile” links to be different colors and have a larger font size when active.

```text
<NavLink to="/">App</NavLink>
<NavLink activeClassName="red" to="/users">Users</NavLink>
<NavLink activeClassName="blue" to="/hello">Hello</NavLink>
<NavLink activeClassName="green" to="/users/1">Andrew's Profile</NavLink>
<NavLink to="/" onClick={handleClick}>App with click handler</NavLink>
```

For example, this is what the rendered HTML `<a>` tag would look like when when the browser is navigated to the `/` path or the `/users` path:

```text
<!-- Navigated to the / path (the activeClassName
     prop is set to active by default) -->
<a href="/" class="active">App</a>
```

```text
<!-- NOT navigated to the `/` path -->
<a href="/">App</a>
```

```text
<!-- Navigated to the /users path (the activeClassName
     prop is manually set to red) -->
<a href="/users" class="red">Users</a>
```

```text
<!-- NOT navigated to the `/users` path -->
<a href="/users">Users</a>
```

Import `NavLink` into your `index.js` file and take a moment to update all your `Link` elements to `NavLink` elements. Set an `activeClassName` prop to an `active` class. Add the following `.active` class to your `index.css` file:

```text
.active {
  font-weight: bold;
}
```

```text
.red {
  color: red;
  font-size: 30px;
}
```

```text
.blue {
  color: blue;
  font-size: 30px;
}
```

```text
.green {
  color: green;
  font-size: 30px;
}
```

Test your styled links! Notice how the `App` and `App with click handler` links are always bolded. This is because all of your links include the `/` path, meaning that the link to `/` will be active when browsing to `/users` and `/users/1` because of how `users` and `users/1` are both prefaced by a `/`.

The `activeStyle` prop is a style object that will be applied inline to the `NavLink` when its `to` prop matches the current URL. Add the following `activeStyle` to your `App` link and comment out the `.active` class in your CSS file.

```text
<NavLink to="/" activeStyle={{ fontWeight: "bold" }}>App</NavLink>
```

The following html is rendered when at the `/` path:

```text
<a href="/" style="font-weight:bold;" class="active">App</a>
```

Notice how your `App with click handler` is not bolded anymore. This is because the default `active` class being applied does not have any CSS stylings set to the class. Uncomment your `.active` class in your CSS file to bring back bolding to this NavLink.

The `exact` prop is a boolean that defaults to `false`. If set to `true`, then the `activeStyle` and `activeClassName` props will only be applied when the current URL exactly matches the `to` prop. Update your `App` and `App with click handler` links with an `exact` prop set. Just like in your routes, you can use the `exact` flag instead of `exact={true}`.

```text
<NavLink to="/" exact={true} activeStyle={{ fontWeight: "bold" }}>App</NavLink>
<NavLink to="/" exact onClick={handleClick}>App with click handler</NavLink>
```

Now your `App` and `App with click handler` links will only be bolded when you have navigated precisely to the `/` path.

#### Switching between routes <a id="b2b3"></a>

You came across styling issues when the `/users` and `/users/1` paths matched the `/` path. Routing can have this issue as well. This is why you need to control the switching between routes.

React Router’s `<Switch>` component allows you to only render one `<Route>` even if several match the current URL. You can nest as many `Route`s as you wish between the opening and closing `Switch` tags, but only the first one that matches the current URL will be rendered.

This is particularly useful if you want a default component that will only render if none of our other routes match. View the example below. Without the Switch, `DefaultComponent` would always render. Since there isn't set a path in the `DefaultComponent` route, it will simply use the default path of `/`. Now the `DefaultComponent` will only render when neither of the preceding routes match.

```text
<Switch>
  <Route path="some/url" component={SomeComponent} />
  <Route path="some/other/url" component={OtherComponent} />
  <Route component={DefaultComponent} />
</Switch>
```

Import `Switch` from `react-router-dom` and add `<Switch>` tags around your routes to take care of ordering and switching between your routes! Begin by adding the following route to the bottom of your routes to render that a `404: Page not found` message:

```text
<Route render={() => <h1>404: Page not found</h1>} />
```

This is what your `Root` component should look like at this point:

```text
const Root = () => {
  const users = [
    { name: 'andrew' },
    { name: 'raymond' }
  ];
```

```text
  const handleClick = () => {
    console.log('Thanks for clicking!')
  };
```

```text
  return (
    <BrowserRouter>
      <h1>Hi, I'm Root!</h1>
```

```text
      <div>
        <NavLink to="/" exact={true} activeStyle={{ fontWeight: "bold" }}>App</NavLink>
        <NavLink activeClassName="red" to="/users">Users</NavLink>
        <NavLink activeClassName="blue" to="/hello">Hello</NavLink>
        <NavLink activeClassName="green" to="/users/1">Andrew's Profile</NavLink>
        <NavLink to="/" exact onClick={handleClick}>App with click handler</NavLink>
```

```text
        <Switch>
          <Route path="/users/:userId" component={(props) => <Profile users={users} {...props} />} />
          <Route exact path="/users" render={() => <Users users={users} />} />
          <Route path="/hello" render={() => <h1>Hello!</h1>} />
          <Route exact path="/" component={App} />
          <Route render={() => <h1>404: Page not found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
```

Now you have control over the precedence of rendered components! Try navigating to `http://localhost:3000/asdf` or any other route you have not defined. The `<h1>404: Page not found</h1>` JSX of the last `<Route>` will be rendered whenever the browser attempts to visit an undefined route.

