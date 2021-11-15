<a href="/features" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Features</a><a href="/screencasts" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u highlighted">Screencasts</a><a href="/blog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Blog</a><a href="/docs" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Docs</a><a href="/changelog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Changelog</a><a href="/pricing" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Pricing</a>

<a href="https://gitpod.io/login/" class="flex items-center justify-center h-8 w-20 rounded-xl bg-black font-bold text-off-white text-sm focus:text-off-white focus:bg-black-hover hover:text-off-white hover:bg-black-hover">Login</a>

<img src="/images/blog/cloud-based-development-for-everyone/teaser.jpg" alt="Cloud-based development for everyone" class="headerImage" />

Aug 13, 2021

Cloud-based development for everyone
====================================

<span class="avatars"> <a href="https://twitter.com/svenefftinge" class="no-underline transition-none inline-flex mr-4 px-2 bg-white rounded-xl text-light-grey focus:bg-off-white focus:text-dark-grey hover:bg-off-white hover:text-dark-grey showAvatar"><img src="https://github.com/svenefftinge.png" alt="Avatar of svenefftinge" class="inline rounded-full border border-solid border-off-white mr-2 h-6 w-6 place-self-center" width="24" height="24" /> Sven Efftinge</a> <a href="https://twitter.com/jolandgraf" class="no-underline transition-none inline-flex mr-4 px-2 bg-white rounded-xl text-light-grey focus:bg-off-white focus:text-dark-grey hover:bg-off-white hover:text-dark-grey showAvatar"><img src="https://github.com/JohannesLandgraf.png" alt="Avatar of JohannesLandgraf" class="inline rounded-full border border-solid border-off-white mr-2 h-6 w-6 place-self-center" width="24" height="24" /> Johannes Landgraf</a> </span>

**TL;DR**

-   [Welcome to the party, GitHub Codespaces!](https://www.gitpod.io/blog/github-codespaces)
-   Gitpod is now free for public **and private** repositories!

At Gitpod, [we believe](https://www.notion.so/gitpod/Gitpod-s-Direction-be35d064c0704fbda61c542b84e07ef6) that

> **By 2023 working with ephemeral cloud-based dev environments will be the standard. Just like CI/CD is today.**

This week, we got a step closer to our product vision becoming a reality. We welcome Microsoft and GitHub Codespaces to join forces in improving the developer experience status quo with ephemeral, cloud-based developer environments. The obligatory [cake](https://twitter.com/gitpod/status/1425494676237340672?s=20) is on its way to our friends at GitHub and VS Code! 🎂

Software development moves to the cloud[<span class="icon icon-link"></span>](#software-development-moves-to-the-cloud)
-----------------------------------------------------------------------------------------------------------------------

Today’s modern engineering teams use automation everywhere. They automate infrastructure, CI/CD build pipelines, linting, formatting and even writing code, and numerous other places where automation is used to help teams avoid costly errors and focus on product and customer value.

Developer environments, however, have not experienced this same adoption rate. They are brittle, an intimidating hurdle during onboarding and a constant source of friction during development.

The question is not if but when ephemeral, container-based dev environments are becoming the norm. Based on conversations with users there are a couple of recurring reasons accelerating this:

-   **Multi-track development** (develop and review complicated features with ease)
-   **Local machine limits** (larger workloads, more data, more dependencies, more testing)
-   **Security** (no source code on laptops policies)
-   **Consistency** (end of all “works on my machine” problems)
-   **Onboarding** (shave off a few initial days of tedious workspace setups)
-   **Remote work** (fully distributed or hybrid companies)

Google, Facebook and a few others have internally built solutions for these issues for a few years already. Gitpod and GitHub Codespaces bring container-based development in the cloud to the rest of the world.

### Ephemeral Developer Environments[<span class="icon icon-link"></span>](#ephemeral-developer-environments)

Putting developer experience first means working in developer environments that are fast, secure and most importantly **ephemeral**. Just moving your manually created and maintained dev environment to the cloud wouldn’t quite cut it. To get rid of configuration drift and “works on my machine” issues, we need to continuously create fresh dev environments based on configuration as code. Only then you are [**always ready-to-code™**](/).

For your day-to-day workflow this means that your developer environments become:

-   **Task-based** - for each Git context you start them, you code, you push your code, and you forget about them. For your next task, you’ll use a fresh one.
-   **Prebuilt** - Gitpod continuously builds all your git branches like a CI server. Whenever your code changes (i.e. when new commits are pushed to your repository), Gitpod will prebuild workspaces, i.e. run the init commands in your .gitpod.yml configuration file before you even start a workspace.
-   **Shareable** - similar to preview environments in CI/CD dev environments ephemeral dev environments become easily shareable with your colleagues via a URL.

In the screencast below, [@paulienuh](https://twitter.com/paulienuh) explains how that workflow has supercharged our development velocity while developing Gitpod in Gitpod.

<span class="video-container"></span>

The peace of mind, productivity boost and collaboration benefits you are experiencing once you adopt that task-based workflow make you never want to go back.

Gitpod dev environments are available to everyone — today[<span class="icon icon-link"></span>](#gitpod-dev-environments-are-available-to-everyone--today)
----------------------------------------------------------------------------------------------------------------------------------------------------------

Starting today our free tier is **open to every developer** with a GitLab, GitHub, and/or Bitbucket account. You will have access to both public and private repositories for 50 hours per month for free.

Go ahead and experience the peace of mind and productivity boost on your own.

Learn how to [use Gitpod](https://www.gitpod.io/docs/quickstart) in less than 5 minutes!

Share this post:
----------------

-   [<img src="/svg/brands/twitter.svg" alt="Twitter" width="24" height="24" />](https://twitter.com/intent/tweet?text=Cloud-based%20development%20for%20everyone%20by%20%40svenefftinge%2C%20%40JohannesLandgraf%20https%3A%2F%2Fwww.gitpod.io%2Fblog%2Fcloud-based-development-for-everyone)
-   [<img src="/svg/brands/reddit.svg" alt="Reddit" width="24" height="24" />](http://www.reddit.com/submit?url=https%3A%2F%2Fwww.gitpod.io%2Fblog%2Fcloud-based-development-for-everyone%26title%3DCloud-based%20development%20for%20everyone)

Stay updated
------------

Sign up now for our newsletter.

Sign up

More articles
-------------

<a href="/blog/the-evolution-of-devx" class="svelte-i5xvka"></a>

### <a href="/blog/the-evolution-of-devx" class="svelte-i5xvka">DevX Digest 01 - The evolution of DevX 🌱</a>

For our first DevX Digest, we explore the evolution of developer experience in the IDE world.

<span class="avatars"> <a href="https://twitter.com/paulienuh" class="no-underline transition-none filter hover:drop-shadow showAvatar"><img src="https://github.com/pawlean.png" alt="Avatar of pawlean" class="inline rounded-full border border-solid border-off-white" width="24" height="24" /></a> <a href="https://twitter.com/mikenikles" class="no-underline transition-none filter hover:drop-shadow showAvatar"><img src="https://github.com/mikenikles.png" alt="Avatar of mikenikles" class="inline rounded-full border border-solid border-off-white" width="24" height="24" /></a> </span> <a href="/blog/the-evolution-of-devx" class="date no-underline text-p-small ml-macro">Aug 5, 2021</a>

<a href="/blog/i-said-goodbye-to-local-development-and-so-can-you" class="svelte-i5xvka"></a>

### <a href="/blog/i-said-goodbye-to-local-development-and-so-can-you" class="svelte-i5xvka">I said goodbye to local development and so can you</a>

Stop maintaining your local development environment. Instead, automate the setup once and use a new environment for each task you work on - available in seconds and always ready-to-code.

<span class="avatars"> <a href="https://twitter.com/mikenikles" class="no-underline transition-none filter hover:drop-shadow showAvatar"><img src="https://github.com/mikenikles.png" alt="Avatar of mikenikles" class="inline rounded-full border border-solid border-off-white" width="24" height="24" /></a> </span> <a href="/blog/i-said-goodbye-to-local-development-and-so-can-you" class="date no-underline text-p-small ml-macro">Jun 30, 2021</a>

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
