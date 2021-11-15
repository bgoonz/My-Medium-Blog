<a href="/features" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Features</a><a href="/screencasts" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u highlighted">Screencasts</a><a href="/blog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Blog</a><a href="/docs" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u active">Docs</a><a href="/changelog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Changelog</a><a href="/pricing" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Pricing</a>

<a href="https://gitpod.io/login/" class="flex items-center justify-center h-8 w-20 rounded-xl bg-black font-bold text-off-white text-sm focus:text-off-white focus:bg-black-hover hover:text-off-white hover:bg-black-hover">Login</a>

-   <a href="/docs" class="text-large active svelte-gpq0pb">Introduction</a>

-   <a href="/docs/quickstart" class="text-large svelte-gpq0pb">Quickstart</a>

-   <a href="/docs/getting-started" class="text-large svelte-gpq0pb">Getting Started</a>

-   <a href="/docs/configure" class="text-large svelte-gpq0pb">Configure</a>

-   <a href="/docs/develop" class="text-large svelte-gpq0pb">Develop</a>

-   <a href="/docs/integrations" class="text-large svelte-gpq0pb">Integrations</a>

-   <a href="/docs/self-hosted/latest" class="text-large svelte-gpq0pb">Gitpod Self-Hosted</a>

-   <a href="/docs/references" class="text-large svelte-gpq0pb">References</a>

Search <img src="/svg/mag-glass.svg" alt="Search" class="input-icon svelte-123f4xb" />

<img src="/arrow.svg" alt="See all topics" class="back-button__icon-arrow svelte-1dtjh89" width="12" height="7" />

All topics

<span class="ml-macro">Edit in Gitpod</span>

Introduction to Gitpod[<span class="icon icon-link"></span>](#introduction-to-gitpod)
=====================================================================================

[Gitpod](/) is a container-based development platform that puts developer experience first. Gitpod provisions **ready-to-code development environments** in the cloud accessible through your browser and [your local IDE](/blog/local-app).

Gitpod enables development teams to describe their dev environment as code and **start configurable and fresh development environments for each new task** entirely in the cloud. Think CI/CD for dev environments.

Always ready-to-code[<span class="icon icon-link"></span>](#always-ready-to-code)
---------------------------------------------------------------------------------

Too much time is lost to a poor development experience. Setting up local dev environments that are brittle. Waiting for compilation. Downloading dependencies. Massaging them over time to make sure they work with all projects. “Works on my machine” situations, configuration drift and broken tool chains are slowing down professional software teams.

With Gitpod this stops. Instead you treat dev environments as automated resources you spin up when you need them and close down (and forget about) when you are done with your task. Dev environments become fully ephemeral.

You even start switching between workspaces - one for your feature, one for reviewing a PR/MR, one for a bug, one for another MR/PR.

Only then you are **always ready-to-code** - immediately creative, immediately productive with the click of a button and without any friction. Allowing yourself and your team to build applications quicker and more collaboratively.

Your computer in the cloud[<span class="icon icon-link"></span>](#your-computer-in-the-cloud)
---------------------------------------------------------------------------------------------

A Gitpod workspace includes everything developers need to be productive: source code, a Linux shell with root/sudo, a file system, the full VS Code editing experience including extensions, language support and all other tools and binaries that run on Linux.

Workspaces are highly customizable and can be pre-configured and optimized on both a team/project as well as an individual/developer level. From themes to extensions developers have full control. Workspaces work with all major git hosting platforms including GitHub, GitLab and Bitbucket.

Leveraging the power of the cloud Gitpod provisions **blazingly fast, ephemeral and secure development environments**.

### ⚡ Fast[<span class="icon icon-link"></span>](#-fast)

Gitpod **launches workspaces in seconds** and removes long init and build times by continuously pre-building workspaces for your project. This enables you and everybody collaborating on your project to **start coding or debugging immediately**, from any git context, at any time, from any device. No more waiting for NPM or Maven to download the Internet.

Spinning up dev environments is easily repeatable and reproducible, because Gitpod creates a single configuration file in your repository allowing you to **automate, version-control and share consistent dev environments across your team**. We call this [dev-environments-as-code](/blog/dev-env-as-code).

### ⚙️ Ephemeral[<span class="icon icon-link"></span>](#%EF%B8%8F-ephemeral)

Gitpod continuously builds *all* your git branches like a CI server. Whenever your code changes (e.g. when new commits are pushed to your repository), Gitpod can prebuild workspaces, i.e. run the `init` commands in your `.gitpod.yml` configuration file before you even start a workspace.

Then, when someone from your team does create a new workspace on a branch or Pull/Merge Request a workspace will load almost instantly, because all dependencies will have been already downloaded ahead of time and your code will be already compiled.

As a result you can treat your dev environments as something ephemeral: you start them, you code, you push your code, and you forget about them. For your next task, you’ll use a fresh one.

More on [prebuilds](/docs/prebuilds).

### 🔒 Secure[<span class="icon icon-link"></span>](#-secure)

We are living in a remote world, where copies of your source code stored locally on countless unsecure machines and networks is considered bad practice. With Gitpod your code stays in the cloud only accessible from a secure browser connection. Gitpod works on any machine such as your Chromebook or iPad. All you need is a browser. Gitpod natively integrates with GitHub, GitLab and Bitbucket and creates one source of truth for your intellectual property. Gitpod is built with security in mind and currently in the process of becoming SOC 2 compliant.

Next Steps[<span class="icon icon-link"></span>](#next-steps)
-------------------------------------------------------------

-   [Quickstart with example project](/docs/quickstart) - understand the benefits in a learning environment
-   [Getting started with your project](/docs/getting-started) - configure one of your own existing projects

##### Was this helpful?

<img src="/images/docs/feedback-widget/1.svg" title="Feedback 1 of 4" alt="Feedback 1 of 4" class="h-6 w-6" />

<img src="/images/docs/feedback-widget/2.svg" title="Feedback 2 of 4" alt="Feedback 2 of 4" class="h-6 w-6" />

<img src="/images/docs/feedback-widget/3.svg" title="Feedback 3 of 4" alt="Feedback 3 of 4" class="h-6 w-6" />

<img src="/images/docs/feedback-widget/4.svg" title="Feedback 4 of 4" alt="Feedback 4 of 4" class="h-6 w-6" />

<a href="/docs/quickstart" class="svelte-1kanmwt" title="Next: Quickstart">Next</a>

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
