Things That Confuse Me As A Web Developer
=========================================

.babelrc

------------------------------------------------------------------------

### Things That Confuse Me As A Web Developer

  

### .babelrc

<a href="https://babeljs.io/docs/usage/babelrc/" class="markup--anchor markup--p-anchor">.babelrc</a> is a configuration file for passing options to <a href="https://babeljs.io/" class="markup--anchor markup--p-anchor">Babel</a> — the ES2015 transpiler recommended for writing next-generation JavaScript in Web Starter Kit.

### .editorconfig

<a href="http://editorconfig.org/" class="markup--anchor markup--p-anchor">EditorConfig</a> is a file format and collection of text editor plugins for maintaining consistent coding styles between different editors and IDEs.

### gulpfile.babel.js

<a href="http://gulpjs.com/" class="markup--anchor markup--p-anchor">Gulp</a> is a streaming build system that allows you to automate tedious development tasks. Compared with other build systems, such as Grunt, gulp uses Node.js streams as a means to automate tasks, thereby removing the need to create intermediate files when transforming source files.

In gulp, you would install plugins, that do one thing and do it well, and construct a ‘pipeline’ by connecting them to each other. A `gulpfile` allows you to put together tasks that use plugins to accomplish a task like minification.

`gulpfile.babel.js` is a gulpfile written in ES2015. The `babel` portion of the name refers to its use of the <a href="https://babeljs.io/" class="markup--anchor markup--p-anchor">Babel</a> transpiler for enabling ES2015 code to run there.

### app/scripts/main.js

This is a file where your custom JavaScript can go.

### app/styles/main.css

This is a file where your custom CSS can go. You can place any Sass you wish to have compiled into the `styles` directory and renaming `main.css` to `main.scss` will cause Web Starter Kit to treat the file as Sass instead.

### app/manifest.json

`manifest.json` contains a <a href="https://w3c.github.io/manifest/" class="markup--anchor markup--p-anchor">Web Application Manifest</a> - a simple JSON file that gives you the ability to control how your app appears to the user in the areas that they would expect to see apps (for example the mobile home screen). In here you can control what the user can launch and more importantly how they can launch it.

For more information on the manifest, see <a href="https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android" class="markup--anchor markup--p-anchor">Web Fundamentals</a>.

### app/manifest.webapp

`manifest.webapp` refers to the proprietary <a href="https://developer.mozilla.org/en-US/Apps/Build/Manifest" class="markup--anchor markup--p-anchor">Firefox OS manifest format</a>, and not the W3C <a href="https://w3c.github.io/manifest/" class="markup--anchor markup--p-anchor">manifest spec</a>, designed for cross-browser open web applications.

The Firefox OS app manifest provides information about an app (such as name, author, icon, and description) and a list of Web APIs that your app needs.

This manifest included in Web Starter Kit until Firefox OS switches to using the manifest spec instead.

### package.json

A <a href="https://docs.npmjs.com/files/package.json" class="markup--anchor markup--p-anchor">package.json</a> file is used to specify project tooling dependencies from <a href="http://npmjs.org/" class="markup--anchor markup--p-anchor">npm</a> — the Node package manager. When you run `npm install`, `package.json` is read to discover what packages need to be installed.

`package.json` can also contain other metadata such as a project description, version, license and configuration information.

### app/service-worker.js

A <a href="http://www.html5rocks.com/en/tutorials/service-worker/introduction/" class="markup--anchor markup--p-anchor">service worker</a> is a script that is run by your browser in the background, separate from a web page, opening the door to features such as offline support. In Web Starter Kit, the `app/service-worker.js` script is automatically generated for you by our build process via <a href="https://github.com/GoogleChrome/sw-precache/" class="markup--anchor markup--p-anchor">sw-precache</a>.

[View original.](https://medium.com/p/d221d06c48cd)

Exported from [Medium](https://medium.com) on October 14, 2021.
