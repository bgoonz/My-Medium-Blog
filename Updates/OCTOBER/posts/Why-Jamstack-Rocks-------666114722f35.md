Why Jamstack Rocks🤘😎🤙
=====================

JAMstack websites don’t use the microservices architecture, but they go for the micro frontends architecture. Each static page with HTML…

------------------------------------------------------------------------

### Why Jamstack Rocks🤘😎🤙

#### JAMstack websites don’t use the microservices architecture, but they go for the <a href="https://relevant.software/blog/scale-frontend-micro-frontends-architecture/" class="markup--anchor markup--h4-anchor" title="https://relevant.software/blog/scale-frontend-micro-frontends-architecture/">micro frontends architecture</a>. Each static page with HTML and JavaScript is a micro frontend. And they can use any REST API, including the one built on the <a href="https://relevant.software/blog/microservices-on-aws/" class="markup--anchor markup--h4-anchor">microservices</a> architecture.

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b"><strong>ALLOFMYOTHERARTICLES</strong><br />
bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*kFwbfuUYkD3-jQq-.jpeg" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*ScYd6pUibdFOSaiSuJsaTA.png" class="graf-image" /></figure>### JAM stands for JavaScript, API & Markup.

> *“A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup”*

> *— Mathias Biilmann (CEO & Co-founder of Netlify).*

#### JavaScript

Dynamic functionalities are handled by JavaScript. There is no restriction on which framework or library you must use.

#### APIs

Server side operations are abstracted into reusable APIs and accessed over HTTPS with JavaScript. These can be third party services or your custom function.

#### Markup

Websites are served as static HTML files. These can be generated from source files, such as Markdown, using a Static Site Generator.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*ScYd6pUibdFOSaiSuJsaTA.png" class="graf-image" /></figure>### Terminology:

### API

API is the acronym for Application Programming Interface. It defines interactions that allows two applications to talk to each other.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*AxER6GxoeUPQUmkj.jpeg" class="graf-image" /></figure>### What is the use case?

### JAMstack while not suffering from a shortage of virtues is not a one size fits all solution!

#### Don’t use JAMstack when:

-   <span id="2b9a">You don’t generally do anything that consumes enough volume of static assets to cause your application to struggle with performance at least sometimes.</span>
-   <span id="d002">Your development team is used to different tech, and the cost of migration is higher than the reward.</span>
-   <span id="fc18">You are dealing with tons of real-time/user data, (i.e. audio or video processing in real time)</span>
-   <span id="c4bd">In most cases, it does not make sense to migrate a legacy project that is functioning just fine with no signs of depreciation on the horizon.</span>

### What is Jamstack?

Jamstack is an architecture designed to make the web faster, more secure, and easier to scale.The core tenants of <a href="https://jamstack.org/glossary/pre-render" class="markup--anchor markup--p-anchor">pre-rendering</a>, and <a href="https://jamstack.org/glossary/decoupling" class="markup--anchor markup--p-anchor">decoupling</a>, enable sites and applications to be delivered with greater confidence and resilience than ever before.

Explore more of the <a href="https://jamstack.org/why-jamstack" class="markup--anchor markup--p-anchor">benefits of Jamstack</a>.

------------------------------------------------------------------------

### Pre-rendering

With Jamstack, the entire front end is prebuilt into highly optimized static pages and assets during a build process. This process of pre-rendering results in sites which can be served directly from a <a href="https://jamstack.org/glossary/cdn/" class="markup--anchor markup--p-anchor">CDN</a>, reducing the cost, complexity and risk, of dynamic servers as critical infrastructure.

With so many popular tools for generating sites, like <a href="https://jamstack.org/generators/gatsby/" class="markup--anchor markup--p-anchor">Gatsby</a>, <a href="https://jamstack.org/generators/hugo/" class="markup--anchor markup--p-anchor">Hugo</a>, <a href="https://jamstack.org/generators/jekyll/" class="markup--anchor markup--p-anchor">Jekyll</a>, <a href="https://jamstack.org/generators/eleventy/" class="markup--anchor markup--p-anchor">Eleventy</a>, <a href="https://jamstack.org/generators/next/" class="markup--anchor markup--p-anchor">NextJS</a>, <a href="https://jamstack.org/generators/" class="markup--anchor markup--p-anchor">and very many more</a>, many web developers are already familiar with the tools needed to become productive Jamstack developers.

------------------------------------------------------------------------

### Enhancing with JavaScript

With the <a href="https://jamstack.org/glossary/markup/" class="markup--anchor markup--p-anchor">markup</a> and other user interface assets of Jamstack sites served directly from a CDN, they can be delivered very quickly and securely. On this foundation, Jamstack sites can use JavaScript and APIs to talk to backend services, allowing experiences to be enhanced and personalized.

------------------------------------------------------------------------

### Supercharging with services

The thriving <a href="https://jamstack.org/glossary/api-economy/" class="markup--anchor markup--p-anchor">API economy</a> has become a significant enabler for Jamstack sites. The ability to leverage domain experts who offer their products and service via APIs has allowed teams to build far more complex applications than if they were to take on the risk and burden of such capabilities themselves. Now we can outsource things like authentication and identity, payments, content management, data services, search, and much more.

Jamstack sites might utilise such services at build time, and also at run time directly from the browser via JavaScript. And the clean <a href="https://jamstack.org/glossary/decoupling/" class="markup--anchor markup--p-anchor">decoupling</a> of these services allows for greater portability and flexibility, as well as significantly reduced risk.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*z92TKSZStVeWTjEr.gif" class="graf-image" /></figure>The real power of JAMstack development is easiest to grasp when compared with CMS-driven dynamic websites. It’s easy to forget the sheer number of steps required to fulfill a single page request, and the complexity of the operations that are constantly performed on the server to generate the final HTML received by the user’s browser.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*K9Dcp8Q-sJ8_XOBO.png" class="graf-image" /></figure>When a user requests a page, your server queries a MySQL database and uses a PHP interpreter, combined with data from the active theme and plugins, to stitch together an HTML document which can then be served to the user’s browser. What this extraordinarily complex operation amounts to, in essence, is **templating**. Given that even a modest blog is far too complex to code every page by hand, this method of dividing content into reusable components and automating the assembly makes sense.

But why does this templating operation need to happen on the server? Do we *really* need databases and server-side software (which opens up dozens of security holes along the way) just to create a simple blog? At a time when browsers themselves have become operating systems, capable of interacting with countless APIs and running complex applications client-side, and when front-end development is dominated by JavaScript-based automation using npm, haven’t we outgrown this model?

<figure><img src="https://cdn-images-1.medium.com/max/800/0*zUEq7vaq3GKgq1dr.png" class="graf-image" /></figure>Static site generators like Jekyll and Hugo are part of what makes this possible. They essentially replace PHP as our templating system, but instead of running on a server and generating content on-the-fly, they **run locally** as part of your development process. Your HTML is generated up-front, and your website — now a collection of easily-cached static files — can be distributed to users by a blisteringly fast CDN (content distribution network).

> <a href="https://builtvisible.com/go-static-try-jamstack/" class="markup--anchor markup--blockquote-anchor">-source</a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*uJUtTgGIokzAP4cU.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*ScYd6pUibdFOSaiSuJsaTA.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/600/1*KWOwKbn3NQJ0DcX6TsUp0g.png" class="graf-image" /></figure>### Common Features Of The Jamstack Workflow:

#### Content delivery network

Since all the markup and assets are pre-built, they can be served via CDN. This provides better performance and easier scalability.

#### Atomic deploys

Each deploy is a full snapshot of the site. This helps guarantee a consistent version of the site globally.

#### Cache invalidation

Once your build is uploaded, the CDN invalidates its cache. This means that your new build is live in an instant.

#### Everything in version control

Your codebase lives in Version Control System, such as Git. The main benefits are: change history of every file, collaborators and traceability.

#### Automated builds

Your server is notified when a new build is required, typically via webhooks. Server builds the project, updates the CDNs and the site is live.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*ScYd6pUibdFOSaiSuJsaTA.png" class="graf-image" /></figure>### Getting started

#### DEVELOPMENT

However you decide to generate your HTML assets is up to you. The three most common approaches are:

#### Hand coding

Simple and effective method of writing HTML, it’s ideal for super simple pages.

#### Static Site Generators

Most JAMstack sites are powered by a static site generator. There’s no enforcement on which SSG you decide to use.

-   <span id="4571"><a href="https://www.gatsbyjs.org/" class="markup--anchor markup--li-anchor" title="Gatsby">Gatsby</a></span>
-   <span id="ebc1"><a href="https://nextjs.org/" class="markup--anchor markup--li-anchor" title="Next.js">Next.js</a></span>
-   <span id="c6ae"><a href="https://gohugo.io/" class="markup--anchor markup--li-anchor" title="Hugo">Hugo</a></span>

#### Frontend Framework

Most frameworks don’t output static HTML files, however it is possible to do that but it requires more tooling experience and maintenance.

-   <span id="949a"><a href="http://reactjs.org/" class="markup--anchor markup--li-anchor" title="React">React</a></span>
-   <span id="42ed"><a href="https://preactjs.com/" class="markup--anchor markup--li-anchor" title="Preact">Preact</a></span>

### DEPLOYMENT

Your built site needs to be hosted somewhere. There are great services that provides this for free and with ease.

-   <span id="d14d"><a href="https://netlify.com/" class="markup--anchor markup--li-anchor" title="Netlify">Netlify</a></span>
-   <span id="8b6e"><a href="https://vercel.com/" class="markup--anchor markup--li-anchor" title="Vercel">Vercel</a></span>
-   <span id="de9c"><a href="https://pages.github.com/" class="markup--anchor markup--li-anchor" title="Github Pages">Github Pages</a></span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*ScYd6pUibdFOSaiSuJsaTA.png" class="graf-image" /></figure>### DYNAMIC PARTS

JAMstack websites don’t have to be static. There are great services available to help bring some dynamic data to your product.

#### Custom functions

You can also abstract your own functions into reusable APIs. For this you can use <a href="https://aws.amazon.com/lambda/features/" class="markup--anchor markup--p-anchor" title="AWS lambda functions">AWS lambda functions</a> or <a href="https://functions.netlify.com/examples/" class="markup--anchor markup--p-anchor" title="Netlify Functions">Netlify Functions</a>

#### Custom data

As you add features to your site, you may want to store user profiles, shopping cart data, game levels, or other dynamic data. Get started for free with <a href="https://fauna.com/" class="markup--anchor markup--p-anchor" title="FaunaDB Serverless GraphQL">FaunaDB Serverless GraphQL</a>

#### Comments

Many JAMstack products have dynamic comment sections. These are typically used on blogs

#### Forms

A great way to interact with your audience

#### E-Commerce

Setting up an online store on the JAMstack has never been easier

#### Search

Rely on third party services to integrate a search functionality

<figure><img src="https://cdn-images-1.medium.com/max/800/1*ScYd6pUibdFOSaiSuJsaTA.png" class="graf-image" /></figure>### CMS

JAMstack sites can also be controlled via a Content Management System, these are typically known as Headless CMS. Once a change in the CMS is made, a new build of your site will be triggered and then deployed as static assets.

-   <span id="33e7"><a href="https://www.netlifycms.org/" class="markup--anchor markup--li-anchor" title="Netlify CMS">Netlify CMS</a></span>
-   <span id="9240"><a href="http://contentful.com/" class="markup--anchor markup--li-anchor" title="Contentful">Contentful</a></span>
-   <span id="913c"><a href="https://developer.wordpress.org/rest-api/" class="markup--anchor markup--li-anchor" title="Headless WordPress">Headless WordPress</a></span>
-   <span id="7256"><a href="https://docs.ghost.org/api/content/" class="markup--anchor markup--li-anchor" title="Ghost">Ghost</a></span>
-   <span id="a9c0"><a href="https://strapi.io/" class="markup--anchor markup--li-anchor" title="Strapi">Strapi</a></span>
-   <span id="00ae"><a href="https://forestry.io/" class="markup--anchor markup--li-anchor" title="Forestry">Forestry</a></span>
-   <span id="e94d"><a href="https://www.sanity.io/" class="markup--anchor markup--li-anchor" title="Sanity">Sanity.io</a></span>
-   <span id="8956"><a href="https://www.kontent.ai/" class="markup--anchor markup--li-anchor" title="Kontent">Kontent</a></span>
-   <span id="ad3e"><a href="http://graphcms.com/" class="markup--anchor markup--li-anchor" title="GraphCMS">GraphCMS</a></span>
-   <span id="a03c"><a href="https://www.takeshape.io/" class="markup--anchor markup--li-anchor" title="TakeShape">TakeShape</a></span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*ScYd6pUibdFOSaiSuJsaTA.png" class="graf-image" /></figure>### Best Practice:

-   <span id="1be8">**Using CDNs for hosting.** Using content delivery networks improves performance and scalability.</span>
-   <span id="e935">**Atomic deploys.** Deploying lots of static files can be time-consuming. But with atomic deploys, you can forget about downtimes. Your app is always available to users, even when a new deployment is being executed. Besides, with each deploy being a full snapshot of your website, it guarantees global consistency.</span>
-   <span id="e5c0">**Instant cache invalidation.** CDNs store sites in their local caches. Thus, when you change something on your website, your CDN invalidates the affected files and replaces them with the new ones. However, the process can take hours. To avoid this, it’s recommended to choose CDNs with instant cache validation.</span>
-   <span id="d1f9">**Version control systems**. A version control system, such as <a href="https://git-scm.com/" class="markup--anchor markup--li-anchor">Git</a>, is a cloud for your code. It hosts your source code, keeps track of all changes, and streamlines collaboration. If a mistake is made, developers can easily compare the current code from its previous versions and identify the cause.</span>
-   <span id="e265">**Automated builds.** In terms of web development, build is a process of converting files and other assets into a final software product ready for deployment. Automating this process eliminates the risk of variation and defects. Besides, whenever a new build is required, your CDN is notified using webhooks.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*ScYd6pUibdFOSaiSuJsaTA.png" class="graf-image" /></figure>### Resources

------------------------------------------------------------------------

Here’s a list of hand-picked JAMstack resources ranging from learning materials to third party services.

#### Services

-   <span id="5f73"><a href="https://github.com/agarrharr/awesome-static-website-services" class="markup--anchor markup--li-anchor">Awesome Static Website Services</a></span>
-   <span id="f4a6"><a href="https://headlesscms.org/" class="markup--anchor markup--li-anchor">A List of Content Management Systems for JAMstack Sites</a></span>
-   <span id="5f45"><a href="https://www.staticgen.com/" class="markup--anchor markup--li-anchor">A List of Static Site Generators for JAMstack Sites</a></span>
-   <span id="5fbb"><a href="https://jamstackthemes.dev/" class="markup--anchor markup--li-anchor">A List of Themes and Starters for JAMstack Sites</a></span>
-   <span id="372a"><a href="https://www.thenewdynamic.org/tool/" class="markup--anchor markup--li-anchor">A curated collection of tools and services</a></span>

#### Articles

-   <span id="e6fa"><a href="https://snipcart.com/blog/jamstack" class="markup--anchor markup--li-anchor">New to JAMstack? Everything You Need to Know to Get Started</a></span>
-   <span id="ccc5"><a href="https://www.quora.com/What-is-the-concept-behind-JAMstack" class="markup--anchor markup--li-anchor">What is the concept behind JAMstack</a></span>
-   <span id="d712"><a href="https://bejamas.io/blog/jamstack-modern-web-development/" class="markup--anchor markup--li-anchor">JAMstack modern web development</a></span>
-   <span id="ac37"><a href="https://www.netlify.com/blog/2017/03/16/smashing-magazine-just-got-10x-faster/" class="markup--anchor markup--li-anchor">Smashing Magazine just got 10x faster</a></span>
-   <span id="a351"><a href="https://blog.ghost.org/jamstack/" class="markup--anchor markup--li-anchor">Ghost on the JAMstack</a></span>
-   <span id="8a42"><a href="https://medium.com/netlify/jamstack-with-gatsby-netlify-and-netlify-cms-a300735e2c5d" class="markup--anchor markup--li-anchor">JAMstack with Gatsby, Netlify and Netlify CMS</a></span>

### Videos

### resources and links:

-   <span id="a6ca"><a href="https://julesforrest.com/moving-to-gatsby/" class="markup--anchor markup--li-anchor">Moving to Gatsby</a> *by* <a href="https://twitter.com/julesforrest" class="markup--anchor markup--li-anchor"><em>Jules Forrest</em></a></span>
-   <span id="b8bf"><a href="https://www.gatsbyjs.org/blog/2017-11-08-migrate-from-jekyll-to-gatsby/" class="markup--anchor markup--li-anchor">Migrate from Jekyll to Gatsby</a> *by* <a href="https://twitter.com/@singuerinc" class="markup--anchor markup--li-anchor"><em>Nahuel Scotti</em></a></span>
-   <span id="7623"><a href="https://jamstack.org/" class="markup--anchor markup--li-anchor">JAMstack website</a></span>
-   <span id="e3a9"><a href="https://www.netlify.com/blog/2017/03/16/smashing-magazine-just-got-10x-faster/" class="markup--anchor markup--li-anchor">Smashing Magazine just got 10x faster</a></span>
-   <span id="9324"><a href="https://medium.com/@kyle.robert.gill/ridiculously-easy-image-optimization-with-gatsby-js-59d48e15db6e" class="markup--anchor markup--li-anchor">Image Optimization Made Easy with Gatsby.js</a> *by* <a href="https://medium.com/@kyle.robert.gill?source=post_header_lockup" class="markup--anchor markup--li-anchor"><em>Kyle Gill</em></a></span>
-   <span id="b4c7">Page loading bar with <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-nprogress//" class="markup--anchor markup--li-anchor"><em>gatsy-plugin-nprogress</em></a></span>
-   <span id="5d04">Support for SASS/SCSS with <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/" class="markup--anchor markup--li-anchor"><em>gatsby-plugin-sass</em></a></span>
-   <span id="dd5d">Default Netlify CMS implementation with <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-netlify-cms/" class="markup--anchor markup--li-anchor"><em>gatsby-plugin-netlify-cms</em></a></span>
-   <span id="6106">React Google Analytics module with <a href="https://github.com/react-ga/react-ga" class="markup--anchor markup--li-anchor"><em>react-ga</em></a></span>
-   <span id="5d11">Code images by <a href="https://carbon.now.sh/" class="markup--anchor markup--li-anchor">Carbon</a></span>

------------------------------------------------------------------------

### Update (Jamstack Resources):

#### <a href="https://snipcart.com/blog/jamstack" class="markup--anchor markup--h4-anchor" title="https://snipcart.com/blog/jamstack">New to JAMstack? Everything You Need to Know to Get Started</a>

Obviously, <a href="https://jamstack.org/" class="markup--anchor markup--p-anchor" title="https://jamstack.org/">JAMstack.org</a>, which is maintained by Netlify, is a worthwhile starting point, but if you are looking for a more thorough overview of everything from what JAMstack is to how to get started to even how to pitch the JAMstack to your business or clients, this post is invaluable. While it was originally create four years ago, thankfully the folks at Snipcart have kept it up to date.

#### <a href="https://jamstack.wtf/" class="markup--anchor markup--h4-anchor" title="https://jamstack.wtf/">JAMstack WTF</a>

A really well done and comprehensive beginners guide created by Pedro Duarte and featuring information and links to articles and resources.

#### <a href="https://www.netlify.com/oreilly-jamstack/" class="markup--anchor markup--h4-anchor" title="https://www.netlify.com/oreilly-jamstack/">Modern Web Development on the JAMstack</a>

This is the only up-to-date general JAMstack book that I’m aware of (though there are books like <a href="https://www.manning.com/books/hugo-in-action" class="markup--anchor markup--p-anchor" title="https://www.manning.com/books/hugo-in-action">Hugo In Action</a> that are specific to a single tool as opposed to the broad ecosystem). It was written by Matt Biilmann, one of Netlify’s founders, and Phil Hawksworth, one of their developer advocates, and is made available free via Netlify.

#### <a href="https://github.com/automata/awesome-jamstack" class="markup--anchor markup--h4-anchor" title="https://github.com/automata/awesome-jamstack">Awesome JAMstack</a>

Every worthwhile technology deserves a well-maintained awesome list or everyone will question its legitimacy. Thanks to Vilson Vieira for providing the JAMstack with one.

#### Ecosystem

So you know what the JAMstack is and are ready to get started, but there are so many tools to choose from. Thankfully there are some good sites that help organize the wide array of tools that make up the JAMstack ecosystem.

#### <a href="https://www.staticgen.com/" class="markup--anchor markup--h4-anchor" title="https://www.staticgen.com/">StaticGen.com</a>

Sure, <a href="https://staticsitegenerators.net/" class="markup--anchor markup--p-anchor" title="https://staticsitegenerators.net/">StaticSiteGenerators.net</a> is the more comprehensive list, but this site, maintained by Netlify, makes the information more digestible, especially since you can filter and sort the list by a variety of criteria.

#### <a href="https://headlesscms.org/" class="markup--anchor markup--h4-anchor" title="https://headlesscms.org/">HeadlessCMS.org</a>

In most real-world cases, your JAMstack site will need some sort of content management system so that writers and editors can maintain the content beyond editing flat files. This site, again maintained by Netlify, makes finding one that fits your needs easier.

#### <a href="https://jamstackthemes.dev/" class="markup--anchor markup--h4-anchor" title="https://jamstackthemes.dev/">JAMstackThemes.dev</a>

Perhaps, like me, you suck at designing. Or perhaps you simply want a solid head start on your JAMstack site’s look and feel. This site, maintained by <a href="https://www.stackbit.com/" class="markup--anchor markup--p-anchor" title="https://www.stackbit.com/">Stackbit</a> where I am a developer advocate, has over 400 themes filterable by static site generator and CMS.

#### Digging Deeper

Alright, you’re already well into building your first JAMstack site and now you’re looking for a way to keep up with new developments, trends and learn advanced techniques. Well, here are some useful sites to get you going.

#### <a href="https://www.thenewdynamic.org/" class="markup--anchor markup--h4-anchor" title="https://www.thenewdynamic.org/">The New Dynamic Newsletter</a>

<a href="https://www.thenewdynamic.org/" class="markup--anchor markup--p-anchor" title="https://www.thenewdynamic.org/">The New Dynamic website</a> website, maintained by Bud Parr, is a great resource in and of itself, with searchable directories of tools and services, articles, events and more. But the newsletter will ensure that you keep up to date on all the articles, tutorials and other information going on throughout the ecosystem and community.

#### <a href="https://dev.to/t/jamstack" class="markup--anchor markup--h4-anchor" title="https://dev.to/t/jamstack">JAMstack on Dev.to</a> and 10. <a href="https://css-tricks.com/tag/jamstack/" class="markup--anchor markup--h4-anchor" title="https://css-tricks.com/tag/jamstack/">JAMstack on CSS-Tricks</a>

Both Dev.to and CSS-Tricks are two of the best developer resources on the web in their own right, but they’ve both included a ton of articles on the JAMstack in recent months from a variety of outstanding authors.

#### The Community

After your initial experiences with the JAMstack, you’re now in love with it…because of course you are! You want to get more involved in the community — getting to know folks who contribute to it, helping out others who want to get started. Here are some great resources to do that.

#### <a href="https://join.slack.com/t/thenewdynamic/shared_invite/enQtMjkwNjYwNTY0NjkxLTFkNGQ1YjMwZGNjNjY0YzY4MmM2YTBhZTY0YjkyOTBmYmE4NjMwY2M3ODMzZDIwNzg2ZTBkZjdjYjVlM2Q2ZDA" class="markup--anchor markup--h4-anchor" title="https://join.slack.com/t/thenewdynamic/shared_invite/enQtMjkwNjYwNTY0NjkxLTFkNGQ1YjMwZGNjNjY0YzY4MmM2YTBhZTY0YjkyOTBmYmE4NjMwY2M3ODMzZDIwNzg2ZTBkZjdjYjVlM2Q2ZDA">The New Dynamic Slack</a> and 12. <a href="https://jamstack.slack.com/join/shared_invite/enQtNjc4OTI1NDk3NDI1LWIxZjk1YWRjOWVlMzM0MTVlMTg4YmY1OTBjZDc1M2I3N2NhODBlZDNmNjAzMGMwNzI5MTVlMWEwYjBiMTU2NzE" class="markup--anchor markup--h4-anchor" title="https://jamstack.slack.com/join/shared_invite/enQtNjc4OTI1NDk3NDI1LWIxZjk1YWRjOWVlMzM0MTVlMTg4YmY1OTBjZDc1M2I3N2NhODBlZDNmNjAzMGMwNzI5MTVlMWEwYjBiMTU2NzE">JAMstack Community Slack</a>

The New Dynamic slack is an extension of the New Dynamic site and newsletter and has been around for some time — enough so that many of the folks who created the tools you’ll use are active members and always super helpful. The JAMstack community slack is maintained by Phil Hawksworth and Netlify. While relatively recent, it is growing fast and already offers great opportunities for community discussion.

#### <a href="https://www.heavybit.com/library/podcasts/jamstack-radio/" class="markup--anchor markup--h4-anchor" title="https://www.heavybit.com/library/podcasts/jamstack-radio/">JAMstack Radio</a> and 14. <a href="https://thatsmyjamstack.com/" class="markup--anchor markup--h4-anchor" title="https://thatsmyjamstack.com/">That’s My JAMstack</a>

JAMstack Radio, hosted by Brian Douglas, centers on interviews with individuals and companies working in the JAMstack. That’s My JAMstack also focuses on interviews but with the goal of understanding people’s journey into learning the JAMstack.

#### <a href="https://jamstackconf.com/" class="markup--anchor markup--h4-anchor" title="https://jamstackconf.com/">JAMstack_conf</a>

While there are <a href="https://jamstack.org/community/" class="markup--anchor markup--p-anchor" title="https://jamstack.org/community/">JAMstack meetups</a> in a number of cities around the world, this is the one major event focused solely on the topic. Hosted by Netlify, the conference has been held in New York, London and San Francisco. The best part for those of us who missed it is that the recent <a href="https://jamstackconf.com/sf/schedule/" class="markup--anchor markup--p-anchor" title="https://jamstackconf.com/sf/schedule/">JAMstack<em>conf</em>sf</a> has all its sessions recorded and online.

### Even More Resources:

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [July 7, 2021](https://medium.com/p/666114722f35).

<a href="https://medium.com/@bryanguner/why-jamstack-rocks-666114722f35" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on October 14, 2021.
