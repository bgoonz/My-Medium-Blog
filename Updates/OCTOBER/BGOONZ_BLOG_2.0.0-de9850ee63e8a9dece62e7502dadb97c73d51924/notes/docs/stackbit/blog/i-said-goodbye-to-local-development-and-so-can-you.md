<a href="/features" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Features</a><a href="/screencasts" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u highlighted">Screencasts</a><a href="/blog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Blog</a><a href="/docs" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Docs</a><a href="/changelog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Changelog</a><a href="/pricing" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Pricing</a>

<a href="https://gitpod.io/login/" class="flex items-center justify-center h-8 w-20 rounded-xl bg-black font-bold text-off-white text-sm focus:text-off-white focus:bg-black-hover hover:text-off-white hover:bg-black-hover">Login</a>

<img src="/images/blog/i-said-goodbye-to-local-development-and-so-can-you/teaser.jpg" alt="I said goodbye to local development and so can you" class="headerImage" />

Jun 30, 2021

I said goodbye to local development and so can you
==================================================

<span class="avatars"> <a href="https://twitter.com/mikenikles" class="no-underline transition-none inline-flex mr-4 px-2 bg-white rounded-xl text-light-grey focus:bg-off-white focus:text-dark-grey hover:bg-off-white hover:text-dark-grey showAvatar"><img src="https://github.com/mikenikles.png" alt="Avatar of mikenikles" class="inline rounded-full border border-solid border-off-white mr-2 h-6 w-6 place-self-center" width="24" height="24" /> Mike Nikles</a> </span>

**Key Takeaways**

-   Individual developer efficiency is hard to measure, but directly impacts a company’s bottom line and team morale.
-   Remote work requires developers to onboard in isolation, a process that was already challenging when teams were co-located.
-   Onboarding instructions are often outdated, as are automated onboarding scripts because only new hires run them.
-   [www.gitpod.io](http://www.gitpod.io) provides automated, one-off development environments you spin up in the cloud for each task. In seconds, repeatedly, and securely.

Table of contents[<span class="icon icon-link"></span>](#table-of-contents)
---------------------------------------------------------------------------

-   [What it’s like today](#what-its-like-today)
    -   [Open source project onboarding](#open-source-project-onboarding)
-   [Meet Alice and Bob](#meet-alice-and-bob)
    -   [Set up a new project](#set-up-a-new-project)
    -   [Develop a new feature](#develop-a-new-feature)
    -   [Switch context](#switch-context)
    -   [Set up a new computer](#set-up-a-new-computer)
    -   [Contribute to open source projects](#contribute-to-open-source-projects)
-   [What’s the catch?](#whats-the-catch)
-   [Conclusion](#conclusion)

What it’s like today[<span class="icon icon-link"></span>](#what-its-like-today)
--------------------------------------------------------------------------------

Whether you recently joined a new team or contributed to an open source project for the first time, I’m quite sure you spent anywhere from an hour to a few days onboarding. If you were lucky, other contributors provided detailed, up-to-date instructions you could follow. Possibly even commands you could copy & paste and watch your development environment set itself up one step at a time. If this is your experience, congratulations on finding such a great and diligent team - tell them what an awesome job they did 🤩!

> More often than not though, this is not what an onboarding experience is like.

It is more likely that there are no automated scripts while instructions, if there are any, are slightly outdated or incomplete - leaving you struggling to figure things out on your own. The techlead to the rescue, who then asks you to update the documentation so the next team member who joins does not run into the same issues. Except, the project evolves, and instructions fall behind again. This is no fault of anyone in particular, but simply a fact of life because once a developer sets up their local development environment, there is no need to set it up again when the code changes. Every team member applies incremental changes to their development environment without starting from scratch, leave alone following the onboarding documentation.

**This process is costly**, both in terms of time and team morale. The larger your team, the more time is lost on setting up development environments and keeping them maintained. At the same time, I don’t know anyone who enjoys reading outdated documentation. Feeling helpless on the first day working on a new project is certainly not a great way to get started 😕.

### Open source project onboarding[<span class="icon icon-link"></span>](#open-source-project-onboarding)

In addition, there is a cost that applies to open source projects that is almost impossible to measure: **the % of people who would like to contribute to a project, but give up because getting started is too complex or interferes with their other projects in their local environment!**

To illustrate this with an example, imagine you usually work with Java 8 and want to contribute to two open source projects. Project A requires Java 7, while project B only runs with Java 11. In order for you to contribute to these projects, you need to install a Java version manager and remember to switch Java version every time you change the project you work on. The exact same applies to databases (no need to install MySQL, MongoDB, Postgres, etc. locally), operating system libraries, anything you currently install locally.

Let’s look at a day in the life of two developers and see how cloud-based development environments simplify workflows significantly.

Meet Alice and Bob[<span class="icon icon-link"></span>](#meet-alice-and-bob)
-----------------------------------------------------------------------------

Bob is like most of us, he works on a desktop or laptop where he installs development tools, clones git repositories and installs dependencies for the projects he works on. He may or may not have had a great onboarding experience 😉. Once every so often, Bob is required to upgrade his tools and dependencies, a task he dreads because upgrading the version of an installed programming language may impact projects that are not compatible with that newer version. With every new version he installs, his cognitive load increases as he needs to remember to switch to the correct version based on the project he works on. Bob is very, very careful in the way he treats his computer because he really doesn’t want it to break… Just imagine setting everything up again from scratch 😱.

**Alice is not like Bob**, not anymore! Alice too lived a life like Bob where she carefully set up and maintained her local development environment over the lifetime of her laptop (we will talk about her experience when she gets a new laptop later). However, she has since realized there is a better way not only for herself, but for her entire team and anyone who contributes to their projects.

> Alice no longer has any code on her computer, none whatsoever. She does that thanks to cloud-based, ephemeral development environments provided by [www.gitpod.io](http://www.gitpod.io).

Let’s dive in and learn more about Bob and Alice and how you can turn yourself from being a traditional Bob to being a modern, efficient version of Alice 🥰.

### Set up a new project[<span class="icon icon-link"></span>](#set-up-a-new-project)

**Bob**

Bob starts by cloning the source code, then ensures he has the correct runtime versions installed (e.g. Java, Node, .NET) and also makes sure the project supports his operating system. Once that’s all good, he looks for onboarding instructions and works his way through that, potentially spending up to a few days on this task.

**Alice**

Alice creates a `.gitpod.yml` configuration file at the root of her project, then adds [start tasks](https://www.gitpod.io/docs/config-start-tasks) such as the following:

    tasks:
      - init: npm install
        command: npm run dev

She also enables Gitpod [Prebuilds](https://www.gitpod.io/docs/prebuilds) - telling Gitpod to continuously create new development environments as soon as her project’s source code changes! This significantly reduces the startup time when she or anyone who works on her project needs a development environment.

![Set up a new project](/images/blog/i-said-goodbye-to-local-development-and-so-can-you/set-up-a-new-project.png)

### Develop a new feature[<span class="icon icon-link"></span>](#develop-a-new-feature)

**Bob**

Bob is very familiar with this workflow, it’s something he does many times a week, possibly even a few times per day.

He starts by making sure his new feature branch is based on the latest code. He does that by first pulling the latest default branch and then creating a feature branch.

Since one of his colleagues may have added a new dependency or changed a required runtime version, Bob needs to ensure he has the latest versions. You know, otherwise he starts the dev server only to be presented with an error message telling him a dependency is missing. You know what I’m talking about 😉.

Then, Bob is ready to shift into feature development mode. Well… after he started the database and dev servers.

**Alice**

She’s keen to get started right away. Once she looks at the issue on GitHub, GitLab or Bitbucket, she simply clicks the “Gitpod” button\*. This opens a new workspace with a feature branch already created, all dependencies installed and the database and dev servers started!

\* She gets that by installing the [Gitpod browser extension](https://www.gitpod.io/docs/browser-extension). Alternatively, she could prefix the issue URL with `gitpod.io/#<issue-url>` to open a new development environment.

![Set up a new project](/images/blog/i-said-goodbye-to-local-development-and-so-can-you/develop-a-new-feature.png)

### Switch context[<span class="icon icon-link"></span>](#switch-context)

Imagine this: You’re working on a feature when your team member contacts you, letting you know she needs your review for a production hotfix pull request. Here’s how Bob and Alice handle this situation:

**Bob**

Hm… 🤔 Bob is a bit hesitant. He has a bunch of code changes that are not ready to be committed, he also removed a dependency that is no longer needed thanks to his feature - yay! The timing to review a pull request is less than ideal.

He stashes his changes, pulls the PR branch and switches to it. Since he removed a dependency in his feature branch, he needs to install that again because the production hotfix PR still requires it.

Time to start the dev server and review the hotfix. Looks good, LGTM 👍.

To get back to his feature branch and continue development, he first switches back to his branch. Next, Bob needs his stashed files back, then drops that dependency his feature no longer requires and eventually starts the servers.

**Alice**

Alice’s workflow is no different than when she develops a new feature. She opens a new browser tab, navigates to the pull request and opens a new development environment based on that PR. Within seconds, the environment starts and the database and dev servers already run - ready for Alice’s review.

She can even leave review comments right within VS Code and have them synced with GitHub.

When she’s done with the review, Alice closes the browser tab. This brings her back to her previous development environment where she continues to work on her feature.

![Set up a new project](/images/blog/i-said-goodbye-to-local-development-and-so-can-you/switch-context.png)

### Set up a new computer[<span class="icon icon-link"></span>](#set-up-a-new-computer)

**Bob**

Oh boy… where to start?! Ah right, from scratch 😰!

**Alice**

Alice, well Alice is excited to get a new computer and is up and running as soon as she installs her favourite browser 🚀. Way to go, Alice!

![Set up a new project](/images/blog/i-said-goodbye-to-local-development-and-so-can-you/set-up-a-new-dev-env.png)

### Contribute to open source projects[<span class="icon icon-link"></span>](#contribute-to-open-source-projects)

Remember the example with the three open source projects earlier that use different versions of Java? In Alice’s case, she does not have Java installed locally at all. She starts any open source project in an ephemeral development environment and uses whatever version of Java is configured for that project. She can even contribute to two projects in parallel - if she really wanted to 😛.

What’s the catch?[<span class="icon icon-link"></span>](#whats-the-catch)
-------------------------------------------------------------------------

Well, for the time being you need an internet connection to work like Alice. The good news, it doesn’t have to be high bandwidth since the data exchange between Gitpod and your browser is minimal. A decent latency is all you need for a smooth experience.

If you read this and think “Well, what about X?” please get in touch, I’d love to work with you and set up Gitpod for your project.

Conclusion[<span class="icon icon-link"></span>](#conclusion)
-------------------------------------------------------------

Alice & Bob, two not-so-fictional characters living their life as software developers. I used to be a Bob for close to two decades before I found [www.gitpod.io](http://www.gitpod.io) which gives me everything Alice has! Want to get a sneak peek? Click the following button to start your first development environment in the cloud (it will open the source file of this blog post):

<a href="https://gitpod.io/#https://github.com/gitpod-io/website/blob/main/src/routes/blog/i-said-goodbye-to-local-development-and-so-can-you.md" class="link-with-image-as-only-child"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" /></a>

I’d love to hear your thoughts and feedback, please get in touch 🙏.

Share this post:
----------------

-   [<img src="/svg/brands/twitter.svg" alt="Twitter" width="24" height="24" />](https://twitter.com/intent/tweet?text=I%20said%20goodbye%20to%20local%20development%20and%20so%20can%20you%20by%20%40mikenikles%20https%3A%2F%2Fwww.gitpod.io%2Fblog%2Fi-said-goodbye-to-local-development-and-so-can-you)
-   [<img src="/svg/brands/reddit.svg" alt="Reddit" width="24" height="24" />](http://www.reddit.com/submit?url=https%3A%2F%2Fwww.gitpod.io%2Fblog%2Fi-said-goodbye-to-local-development-and-so-can-you%26title%3DI%20said%20goodbye%20to%20local%20development%20and%20so%20can%20you)

Stay updated
------------

Sign up now for our newsletter.

Sign up

More articles
-------------

<a href="/blog/cloud-based-development-for-everyone" class="svelte-i5xvka"></a>

### <a href="/blog/cloud-based-development-for-everyone" class="svelte-i5xvka">Cloud-based development for everyone</a>

By 2023 working with ephemeral cloud-based dev environments will be the standard, just like CI/CD is today.

<span class="avatars"> <a href="https://twitter.com/svenefftinge" class="no-underline transition-none filter hover:drop-shadow showAvatar"><img src="https://github.com/svenefftinge.png" alt="Avatar of svenefftinge" class="inline rounded-full border border-solid border-off-white" width="24" height="24" /></a> <a href="https://twitter.com/jolandgraf" class="no-underline transition-none filter hover:drop-shadow showAvatar"><img src="https://github.com/JohannesLandgraf.png" alt="Avatar of JohannesLandgraf" class="inline rounded-full border border-solid border-off-white" width="24" height="24" /></a> </span> <a href="/blog/cloud-based-development-for-everyone" class="date no-underline text-p-small ml-macro">Aug 13, 2021</a>

<a href="/blog/the-evolution-of-devx" class="svelte-i5xvka"></a>

### <a href="/blog/the-evolution-of-devx" class="svelte-i5xvka">DevX Digest 01 - The evolution of DevX 🌱</a>

For our first DevX Digest, we explore the evolution of developer experience in the IDE world.

<span class="avatars"> <a href="https://twitter.com/paulienuh" class="no-underline transition-none filter hover:drop-shadow showAvatar"><img src="https://github.com/pawlean.png" alt="Avatar of pawlean" class="inline rounded-full border border-solid border-off-white" width="24" height="24" /></a> <a href="https://twitter.com/mikenikles" class="no-underline transition-none filter hover:drop-shadow showAvatar"><img src="https://github.com/mikenikles.png" alt="Avatar of mikenikles" class="inline rounded-full border border-solid border-off-white" width="24" height="24" /></a> </span> <a href="/blog/the-evolution-of-devx" class="date no-underline text-p-small ml-macro">Aug 5, 2021</a>

<a href="/blog/local-app" class="svelte-i5xvka"></a>

### <a href="/blog/local-app" class="svelte-i5xvka">Gitpod Local Companion - localhost is going remote</a>

While Gitpod can seamlessly integrate into your workflow in the vast majority of cases, there are times where you may want to access a workspace from localhost

<span class="avatars"> <a href="https://twitter.com/akosyakov" class="no-underline transition-none filter hover:drop-shadow showAvatar"><img src="https://github.com/akosyakov.png" alt="Avatar of akosyakov" class="inline rounded-full border border-solid border-off-white" width="24" height="24" /></a> <a href="https://twitter.com/csweichel" class="no-underline transition-none filter hover:drop-shadow showAvatar"><img src="https://github.com/csweichel.png" alt="Avatar of csweichel" class="inline rounded-full border border-solid border-off-white" width="24" height="24" /></a> <a href="https://www.linkedin.com/in/robert-leftwich" class="no-underline transition-none filter hover:drop-shadow showAvatar"><img src="https://github.com/rl-gitpod.png" alt="Avatar of rl-gitpod" class="inline rounded-full border border-solid border-off-white" width="24" height="24" /></a> </span> <a href="/blog/local-app" class="date no-underline text-p-small ml-macro">Jun 9, 2021</a>

-   Gitpod
-   <a href="/" class="svelte-1ivs93t">Home</a>
-   <a href="/features" class="svelte-1ivs93t">Features</a>
-   <a href="/pricing" class="svelte-1ivs93t">Pricing</a>
-   <a href="/changelog" class="svelte-1ivs93t">Changelog</a>
-   <a href="/self-hosted" class="svelte-1ivs93t">Self-Hosted</a>
-   <a href="/gitpod-vs-github-codespaces" class="svelte-1ivs93t">Gitpod vs GitHub<br />
    Codespaces</a>
-   <a href="https://www.gitpodstatus.com/" class="svelte-1ivs93t">Status</a>

<!-- -->

-   Developer
-   <a href="/#get-started" class="svelte-1ivs93t">Getting started</a>
-   <a href="/screencasts" class="svelte-1ivs93t">Screencasts</a>
-   <a href="/blog" class="svelte-1ivs93t">Blog</a>
-   <a href="/docs" class="svelte-1ivs93t">Documentation</a>
-   <a href="https://github.com/gitpod-io/gitpod/issues/new?template=bug_report.md" class="svelte-1ivs93t">Report a bug</a>
-   <a href="https://community.gitpod.io" class="svelte-1ivs93t">Community</a>

<!-- -->

-   Company
-   <a href="/about" class="svelte-1ivs93t">About</a>
-   <a href="/careers" class="highlighted svelte-1ivs93t">Careers</a>
-   <a href="/contact" class="svelte-1ivs93t">Contact</a>
-   <a href="/media-kit" class="svelte-1ivs93t">Media Kit</a>

<!-- -->

-   Legal
-   <a href="/imprint" class="svelte-1ivs93t">Imprint</a>
-   <a href="/terms" class="svelte-1ivs93t">Terms of Service</a>
-   <a href="/privacy" class="svelte-1ivs93t">Privacy Policy</a>

<a href="/" class="svelte-1ivs93t"></a>

<img src="/svg/logo-textless.svg" alt="Gitpod" width="24" height="24" />

<span class="ml-macro">Copyright © 2021 Gitpod</span>

<a href="https://twitter.com/gitpod" class="footer__social-link svelte-1ivs93t"><img src="/svg/brands/twitter.svg" alt="Twitter" width="24" height="24" /></a> <a href="https://github.com/gitpod-io" class="footer__social-link svelte-1ivs93t"><img src="/svg/brands/github.svg" alt="GitHub" width="24" height="24" /></a> <a href="https://community.gitpod.io/" class="footer__social-link svelte-1ivs93t"><img src="/svg/brands/discourse.svg" alt="Discourse" width="24" height="24" /></a> <a href="https://www.gitpod.io/chat" class="footer__social-link svelte-1ivs93t"><img src="/svg/brands/discord.svg" alt="Discord" width="24" height="24" /></a>
