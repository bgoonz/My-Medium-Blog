<a href="/features" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Features</a><a href="/screencasts" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u highlighted">Screencasts</a><a href="/blog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Blog</a><a href="/docs" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Docs</a><a href="/changelog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Changelog</a><a href="/pricing" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Pricing</a>

<a href="https://gitpod.io/login/" class="flex items-center justify-center h-8 w-20 rounded-xl bg-black font-bold text-off-white text-sm focus:text-off-white focus:bg-black-hover hover:text-off-white hover:bg-black-hover">Login</a>

<img src="/images/blog/when-code-reviews-lgtm/when-code-reviews-lgtm.jpeg" alt="When code reviews LGTM" class="headerImage" />

Dec 20, 2018

When code reviews LGTM
======================

<span class="avatars"> <a href="https://twitter.com/svenefftinge" class="no-underline transition-none inline-flex mr-4 px-2 bg-white rounded-xl text-light-grey focus:bg-off-white focus:text-dark-grey hover:bg-off-white hover:text-dark-grey showAvatar"><img src="https://github.com/svenefftinge.png" alt="Avatar of svenefftinge" class="inline rounded-full border border-solid border-off-white mr-2 h-6 w-6 place-self-center" width="24" height="24" /> Sven Efftinge</a> </span>

Learn how to streamline your code review experience.

Code reviews are one of the best things you can do to keep your codebase clean. They improve code quality, reduce code ownership and let you learn a lot from your teammates.

Much has been said about the [advantages](https://blog.codinghorror.com/code-reviews-just-do-it/) [of code reviews](https://www.quora.com/Why-is-code-review-so-important-in-the-software-industry) for individuals, teams and codebases. Research has found that projects that do proper code reviews identify <a href="https://web.archive.org/web/20151009203148/http://ieeexplore.ieee.org/xpl/login.jsp?reload=true&amp;tp=&amp;arnumber=4815279" class="no-nowrap">“… more than half of the defects in code reviews”</a>.

Assuming you understood the importance of it, I want to discuss the tools, the process and how you can improve your code review experience using [Gitpod](/) and new app for GitHub that lets you do deep code reviews.

Context Switches & Shallow Reviews[<span class="icon icon-link"></span>](#context-switches--shallow-reviews)
------------------------------------------------------------------------------------------------------------

Code reviews are super valuable but they add friction to our daily tasks. Without reviews you would probably write code all day, maybe have a discussion here and there. But you would would mostly working on a single task or at least one after the other.

Therefore, changing our local dev environment between different branches is something we want to avoid. Especially if setup times (rebuilding, etc.) are long. So instead of doing our colleague a favor and providing a proper code review, we too often take the shortcut and just glimpse over the code online in a code review tool. Be it GitHub, Gitlab, Bitbucket, or Gerrit they all just present syntax coloured diffs. These tools allow us to glimpse over the changes, but we cannot run the code, navigate around (and use the smart editing features for that) or even add code (e.g. tests).

As a result, many bugs are not spotted and potentially wrong assumptions are not identified during such shallow code reviews.

Deep Code Reviews[<span class="icon icon-link"></span>](#deep-code-reviews)
---------------------------------------------------------------------------

Instead of glimpsing over the changes on GitHub, we should check out the branch in a real development environment. So we can read, run, and test them.

Yes, it messes up our local development context and might even take a bit of time to set up. And, yes, we have to go back to the online code review tool to add our comments. It’s all a bit cumbersome so … **maybe for this little change I could just go with a quick LGTM?**

I feel your pain, but you should not take that shortcut. It will fire back eventually. Instead, let’s improve our workflows, streamline the context switches and get rid of unnecessary overhead.

Enter Gitpod[<span class="icon icon-link"></span>](#enter-gitpod)
-----------------------------------------------------------------

[Gitpod](/) gives you a full development environment with a single click for any pull request on GitHub. You don’t have to manually setup or even change anything on your local development environment. Just click a button and you have the best of both worlds:

-   a full development environment (similar to VS Code)

-   a great code review experience (similar to GitHub)

Code Review in Gitpod[<span class="icon icon-link"></span>](#code-review-in-gitpod)
-----------------------------------------------------------------------------------

When you start a Gitpod workspace from a pull request, it will automatically open with the list of changes on the left. You can now use either the cursor keys or the mouse to go through the changes one by one.

![Gitpod Diff Editor](https://cdn-images-1.medium.com/max/2880/1*JXfHOvLeHj-RyczGleIpZg.gif)

The opened diff editors are full-fledged code editors, so you can navigate to inspect references and easily check out alternative code. You can even comment right within those editors.

![Diff Editor an example review comment](https://cdn-images-1.medium.com/max/6200/1*qGnEh6LFqkiChDY9-UXk8w.png)

The build starts automatically, so you can already spot any issues coming up from there, while you are reviewing.

Launching the tests or even running and trying the application is something that is part of a good code review as well.

The last thing you do is to submit your review and close the browser tab.

![Gitpod submit review tab](https://cdn-images-1.medium.com/max/6200/1*eu_d_3DJvBOhC9rMDwjb1w.png)

TL;DR[<span class="icon icon-link"></span>](#tldr)
--------------------------------------------------

While we cannot get rid of context switches completely when doing code reviews, we can streamline and automate those switches so that they are less time consuming and distracting.

Gitpod integrates the review features of GitHub in an online IDE and provides an automated experience with a single click. All you need is a browser, and once you are done with the review, you just close the window and don’t need to look back.

Gitpod is free and you can use it now. Just go to any pull request on GitHub and prefix the URL with. `gitpod.io/#`, e.g. <https://gitpod.io/#https://github.com/theia-ide/theia/pull/1204>

Share this post:
----------------

-   [<img src="/svg/brands/twitter.svg" alt="Twitter" width="24" height="24" />](https://twitter.com/intent/tweet?text=When%20code%20reviews%20LGTM%20by%20%40svenefftinge%20https%3A%2F%2Fwww.gitpod.io%2Fblog%2Fwhen-code-reviews-lgtm)
-   [<img src="/svg/brands/reddit.svg" alt="Reddit" width="24" height="24" />](http://www.reddit.com/submit?url=https%3A%2F%2Fwww.gitpod.io%2Fblog%2Fwhen-code-reviews-lgtm%26title%3DWhen%20code%20reviews%20LGTM)

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
