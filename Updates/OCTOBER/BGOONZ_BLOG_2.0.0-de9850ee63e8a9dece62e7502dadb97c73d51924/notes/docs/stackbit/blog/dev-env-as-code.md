<a href="/features" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Features</a><a href="/screencasts" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u highlighted">Screencasts</a><a href="/blog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Blog</a><a href="/docs" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Docs</a><a href="/changelog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Changelog</a><a href="/pricing" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Pricing</a>

<a href="https://gitpod.io/login/" class="flex items-center justify-center h-8 w-20 rounded-xl bg-black font-bold text-off-white text-sm focus:text-off-white focus:bg-black-hover hover:text-off-white hover:bg-black-hover">Login</a>

<img src="/images/blog/dev-env-as-code/dev-env-gilbert.png" alt="Dev environments as code" class="headerImage" />

Nov 19, 2018

Dev environments as code
========================

<span class="avatars"> <a href="https://twitter.com/svenefftinge" class="no-underline transition-none inline-flex mr-4 px-2 bg-white rounded-xl text-light-grey focus:bg-off-white focus:text-dark-grey hover:bg-off-white hover:text-dark-grey showAvatar"><img src="https://github.com/svenefftinge.png" alt="Avatar of svenefftinge" class="inline rounded-full border border-solid border-off-white mr-2 h-6 w-6 place-self-center" width="24" height="24" /> Sven Efftinge</a> </span>

![Source: http://dilbert.com/strip/2017-01-02](/images/blog/dev-env-as-code/dev-env-gilbert.gif)

Imagine that only a decade ago system administrators deployed, configured, and maintained software systems manually. Doing so burned an endless amount of their precious lifetimes and energy.

Today, in the age of microservice architectures, systems have become even more complicated. Trying to maintain operations and deployments by hand isn’t optional anymore. These days we do “DevOps” or “Infrastructure as code”. We have learned that describing a software system in a declarative and formal way is mandatory to deploy applications automatically and continuously.

**What about our dev environments?**[<span class="icon icon-link"></span>](#what-about-our-dev-environments)
------------------------------------------------------------------------------------------------------------

While we have automated deployments of our applications, most of us don’t apply the same techniques to development environments, yet. Instead, on-boarding a new team member on any non-trivial project usually is a multiple hour (if not days) exercise.

It often goes like that:

1.  **A new developer gets pointed to the readme**

2.  **Reads lengthy, mostly outdated setup procedure**

3.  **Installs requirements on the developer machine, updates/downgrades versions, etc.**

4.  **Tries to run the build … waits 20 minutes**

5.  **Build Fails. Try figure out what went wrong.**

6.  **Asks colleague. “Oh, yes. You also need to do X & Y”**

7.  **goto 3**

After many iterations at some point, the build somehow works. You don’t know why, but that doesn’t matter now. Of course, you are not updating the document, as you are not sure and don’t know how you ended up with a working setup. Is that current state even reproducible? So if you update the readme, you better only add what you figured out. You don’t dare to remove parts that you didn’t understand or skipped because they didn’t work for you.

Too bad the setup only worked on first glance. During the following weeks, you will have to solve smaller issues here and there and add some tools that were not listed. Maybe debugging doesn’t work yet, or you don’t see the sources from upstream dependencies. Eventually, it smoothes out. Only when a colleague changes something in the requirements, it usually takes two days until the whole team has noticed and changes their environments accordingly.

Unfortunately, the pain doesn’t stop here.

**It works on my machine**[<span class="icon icon-link"></span>](#it-works-on-my-machine)
-----------------------------------------------------------------------------------------

You probably know the famous phrase “It works on my machine”? The situation when a bug only appears on one machine and is hard to reproduce on others? **That feeling when a bad thing happens in production, but you can’t reproduce it locally?** Not very surprising, though, as long you are running the code on a different platform based on a different setup.

![But it works... On my machine](https://cdn-images-1.medium.com/max/2000/1*I3-fRXyMaZDfesAxyA2eKw.jpeg)

**Going back to fix something on an old branch**[<span class="icon icon-link"></span>](#going-back-to-fix-something-on-an-old-branch)
-------------------------------------------------------------------------------------------------------------------------------------

Another pet peeve is when you need to fix something on a maintenance branch. Fixing the actual bug could have been so easy, as you know how to fix it. However, before you can call it done you need to be able to build and test that old beast. This is costing you an endless amount of time.

Tinkering with a six months old technology stack can be so annoying. You have to deal with all those old libraries and versions of them. However, you still have to make it work somehow.

![Woman biting a pen in front of a laptop](/images/blog/dev-env-as-code/jeeshoots.jpeg)*Photo by [JESHOOTS.COM](https://unsplash.com/@jeshoots?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

All this suffering can end if we applied the ‘infrastructure as code’ idea to our dev environments, too. Why not make dev environment setups automated, reliably reproducible, and versioned by writing them down in an executable format and checking them into the project’s source code repository?

**Dev environment as code**[<span class="icon icon-link"></span>](#dev-environment-as-code)
-------------------------------------------------------------------------------------------

After all, dev environments are often even more complicated than the runtime application they are used for. You typically need to add all the development tools such as build tools, compilers, linters, and a decent editor / IDE on top of the runtime requirements.

If you want to ensure that changes don’t break anything down the line, everybody needs to code, run, and test on the same environment the CI builds run on.

So let’s please stop polluting our readme files and start writing setup instructions down formally, so they can be executed.

### Dockerfiles[<span class="icon icon-link"></span>](#dockerfiles)

Docker files are a pretty neat way to describe a development environment. Imagine you want to add something like ‘*asciidoctor*’ to your project’s toolchain. You could just add the following line to your dev environment’s Dockerfile:

RUN apt-get install -y asciidoctor

Once you push the change to the repository and the docker image gets updated (automatically), all team members have the new tool in their development environment. We need to get to coding with a single click.

![Laptop with code on the screen](/images/blog/dev-env-as-code/clement-h.jpeg)*Photo by [Clément H](https://unsplash.com/@clemhlrdt?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

### **Automated IDE Setup**[<span class="icon icon-link"></span>](#automated-ide-setup)

The Docker approach gets a bit clumsy if your development tools have a UI such as a desktop IDE. You can package them in Docker, but you have to expose the IDE’s UI through X11. Another alternative is to go with a terminal editor like vim, but of course, that is not an option for most of us.

Some desktop IDEs have tools that allow automating setups. Eclipse, for instance, has a tool called Oomph. Oomph allows you to declaratively describe an Eclipse IDE including plug-ins, configuration and even workspace setup. (i.e. git information).

By far the best option is an IDE that runs in browsers, like the new [Theia I](https://theia-ide.org)DE. Theia is open-source under the Eclipse Foundation. It can be seen as VS Code that runs on browsers and desktops and is a bit more customizable.

For a simple Docker-based dev environment you could add Theia to your Docker image. It offers a full IDE including terminals to your workspace image.

The next step would be to treat your development environment as some serverless function which you only spawn when needed and forget about when done. The online service [Gitpod](/) does exactly that.

It integrates with code hosting platforms such as GitHub. It eliminates all the tedious transitions by automating them. You see code on some website and want to give it a spin in a real dev environment? Gitpod does everything it can to get you there with a single click. It lets you provide custom Docker files or Docker images and runs Theia IDE.

**Summary**[<span class="icon icon-link"></span>](#summary)
-----------------------------------------------------------

Applying the lessons learned from DevOps to our development setup can save us so much precious time and energy. <a href="https://www.activestate.com/developer-survey-2018-open-source-runtime-pains/" class="no-nowrap">ActiveState’s Developer Survey 2018</a> underlines this with some numbers:

![ActiveState’s Developer Survey 2018: How much time do you spent on managing dependencies and development tools](https://cdn-images-1.medium.com/max/3200/1*Vvl3N-1hDANiy15Pc9xeiQ.png)

Do we really need to welcome new colleagues or contributors with a painful on-boarding experience? Let’s skip the prose in the *readme* and write code to have our dev environment setup **automated, reproducible, and versioned.**

Share this post:
----------------

-   [<img src="/svg/brands/twitter.svg" alt="Twitter" width="24" height="24" />](https://twitter.com/intent/tweet?text=Dev%20environments%20as%20code%20by%20%40svenefftinge%20https%3A%2F%2Fwww.gitpod.io%2Fblog%2Fdev-env-as-code)
-   [<img src="/svg/brands/reddit.svg" alt="Reddit" width="24" height="24" />](http://www.reddit.com/submit?url=https%3A%2F%2Fwww.gitpod.io%2Fblog%2Fdev-env-as-code%26title%3DDev%20environments%20as%20code)

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

<a href="/blog/i-said-goodbye-to-local-development-and-so-can-you" class="svelte-i5xvka"></a>

### <a href="/blog/i-said-goodbye-to-local-development-and-so-can-you" class="svelte-i5xvka">I said goodbye to local development and so can you</a>

Stop maintaining your local development environment. Instead, automate the setup once and use a new environment for each task you work on - available in seconds and always ready-to-code.

<span class="avatars"> <a href="https://twitter.com/mikenikles" class="no-underline transition-none filter hover:drop-shadow showAvatar"><img src="https://github.com/mikenikles.png" alt="Avatar of mikenikles" class="inline rounded-full border border-solid border-off-white" width="24" height="24" /></a> </span> <a href="/blog/i-said-goodbye-to-local-development-and-so-can-you" class="date no-underline text-p-small ml-macro">Jun 30, 2021</a>

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
