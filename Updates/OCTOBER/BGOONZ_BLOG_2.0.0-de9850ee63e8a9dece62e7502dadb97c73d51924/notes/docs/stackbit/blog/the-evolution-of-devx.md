<a href="/features" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Features</a><a href="/screencasts" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u highlighted">Screencasts</a><a href="/blog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Blog</a><a href="/docs" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Docs</a><a href="/changelog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Changelog</a><a href="/pricing" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Pricing</a>

<a href="https://gitpod.io/login/" class="flex items-center justify-center h-8 w-20 rounded-xl bg-black font-bold text-off-white text-sm focus:text-off-white focus:bg-black-hover hover:text-off-white hover:bg-black-hover">Login</a>

DevX Digest
===========

Our newsletter where we cover everything about Developer Experience

Signup for the Newsletter <a href="https://www.twitter.com/gitpod" class="btn-secondary">Follow us on Twitter</a>

<img src="/images/blog/the-evolution-of-devx/evolution-of-devx.jpg" alt="DevX Digest 01 - The evolution of DevX 🌱" class="headerImage" />

Aug 5, 2021

DevX Digest 01 - The evolution of DevX 🌱
========================================

<span class="avatars"> <a href="https://twitter.com/paulienuh" class="no-underline transition-none inline-flex mr-4 px-2 bg-white rounded-xl text-light-grey focus:bg-off-white focus:text-dark-grey hover:bg-off-white hover:text-dark-grey showAvatar"><img src="https://github.com/pawlean.png" alt="Avatar of pawlean" class="inline rounded-full border border-solid border-off-white mr-2 h-6 w-6 place-self-center" width="24" height="24" /> Pauline Narvas</a> <a href="https://twitter.com/mikenikles" class="no-underline transition-none inline-flex mr-4 px-2 bg-white rounded-xl text-light-grey focus:bg-off-white focus:text-dark-grey hover:bg-off-white hover:text-dark-grey showAvatar"><img src="https://github.com/mikenikles.png" alt="Avatar of mikenikles" class="inline rounded-full border border-solid border-off-white mr-2 h-6 w-6 place-self-center" width="24" height="24" /> Mike Nikles</a> </span>

Welcome to **DevX Digest - the place to hear all about Developer Experience**, brought to you by Pauline Narvas [(@paulienuh)](https://twitter.com/paulienuh) and Mike Nikles [(@mikenikles)](https://twitter.com/mikenikles) from Gitpod. You’re reading the first ever newsletter from us 🎉!

What is DevX?[<span class="icon icon-link"></span>](#what-is-devx)
------------------------------------------------------------------

When we’ve asked folks what they think developer experience (DevX) is, the answers vastly differ. For some, it’s good documentation; it’s a language, it’s the best framework, it’s how quickly you can go from idea to execution with minimal headaches…

No matter how you define developer experience, it is crucial to get it right; a good (or bad) experience could be the make or break relationship developers have with a tool. On top of that, the industry is saturated with choice on which tool is best to use - it is so overwhelming. How can we pick the right one?

It’s strange how even though we recognise how important developer experience is, it’s still an area that just isn’t talked about often. Redmonk gave this a name, [“developer experience gap”](https://redmonk.com/sogrady/2020/10/06/developer-experience-gap/):

> “…developers are forced to borrow time from writing code and redirect it towards managing the issues associated with highly complex, multi-factor developer toolchains held together in places by duct tape and baling wire.”

DevX in the IDE world[<span class="icon icon-link"></span>](#devx-in-the-ide-world)
-----------------------------------------------------------------------------------

To illustrate how DevX has evolved to become a more seamless, joyful, efficient experience, let’s talk about the integrated development environment (IDE).

A few years ago there were two approaches for devs, either use a fully-integrated development environment (IDE) that would be a fat application equipped with everything a developer could possibly need. Examples of this are Eclipse, Jetbrains’ IDEs or Apple’s Xcode. On the other end of the spectrum we would find developers who find all this tooling too heavy weight and slow. Those devs would cheer for the lightness and flexibility of command lines paired with text editors, such as sublime but also vi or emacs.

Has this changed? Yes, that is the short answer to that. You can see that another IDE, namely Visual Studio Code, has since taken over.

VS Code takes over - Why is that?[<span class="icon icon-link"></span>](#vs-code-takes-over---why-is-that)
----------------------------------------------------------------------------------------------------------

Classic heavy-weight IDEs, such as Eclipse, were the trailblazers that paved the way for many important DevX improvements. What made it a fantastic experience for developers was how they could vastly customise environments using their extensible plugin system. But they often went a bit too far, by adding tools and abstractions that slowed down the overall experience and ignoring powerful tools like CLIs that were contributed by the various language communities.

[Sven Efftinge](https://twitter.com/svenefftinge) and [Erich Gamma](https://twitter.com/erichgamma) recently talked about this very topic during DevX Conf ([YouTube video](https://www.youtube.com/watch?v=JiBUDS9odA8)). Erich led the original development of the Eclipse IDE. He co-authored the book **“Design Patterns: Elements of Reusable Object-Oriented Software”** and currently works at Microsoft, where he is the VS Code Dev Lead. Their conversation gave an interesting insight on the history of these IDEs, design decisions made at the time and how that has changed over time influenced by developer experience.

One thing we know that is certain is that things change.

Eclipse was designed to run extensions on the same process as the core. At the time, this single process architecture made sense. In the spirit of moving fast, this was the quickest way to integrate extensions to the core.

![Source: Stackoverflow Surveys 2015-2019 (professional developers)](/images/blog/the-evolution-of-devx/source.png) *Source: Stackoverflow Surveys 2015-2019 (professional developers)*

However, the more Eclipse grew, including its extensions, the downsides became more apparent. This complex architecture’s side effects often led to slow start-up times, a bloated IDE and extensions depending on specific versions. The mindset of loading everything in the same process implied that every extension had to be written in Java, but what about other languages?

Over time slow and bloated software can leave folks wondering if there are alternatives - something that could relieve the pain of those downsides!

And then… VS Code enters the chat.

JSON-RPC, the Language Server Protocol (LSP), API-driven, a multi-process architecture (extensions not part of the ‘core’) leading to faster start-up times, less bloat and leaner. The pain points and limitations developers had experienced from Eclipse, VS Code was developed to reduce. It is no wonder that today, VS Code is the most used IDE.

Less is better[<span class="icon icon-link"></span>](#less-is-better)
---------------------------------------------------------------------

For those extreme power users, upon the first inspection, the VS Code extension model may seem limited in some way in comparison to the one from Eclipse, but that can be a good thing. What’s the saying again? Simplicity is better! This simplicity is deliberate, of course. Often, it is the simpler designs that extend the lifespan of software for years to come.

It’s interesting how the mindset from Eclipse to VS Code has shifted, which has massively been led by the experience of developers.

Let’s look at challenges developers face today[<span class="icon icon-link"></span>](#lets-look-at-challenges-developers-face-today)
------------------------------------------------------------------------------------------------------------------------------------

With this in mind, the next question is, what are some pain points developers have today? And what is next to help with those pain points?

Speaking personally, despite massive leaps to VS Code, I still think of roaring loud fans, a burning hot laptop, especially if you were like me — hanging on to dear life to old tech. Sound familiar? My six-year-old Macbook Pro fits this description.

VS Code with all my extensions ran slow despite it being relatively light compared to other IDEs; my laptop couldn’t handle it. I wasn’t able to start writing code immediately when the creative juices started flowing! Don’t even get me started on the uphill battle of getting the correct developer environment setup (*e.g. cloning, installing dependencies on an old, bloated piece of hardware*)… At that point, it just wasn’t worth it. So what is the solution?

What’s next for developer experience?[<span class="icon icon-link"></span>](#whats-next-for-developer-experience)
-----------------------------------------------------------------------------------------------------------------

Tech has constantly been talking about the power of the cloud in recent years. As Chris Aniszczyk describes in his post, [“Cloud Native predictions for 2021 and beyond.”](https://www.aniszczyk.org/2021/01/19/cloud-native-predictions-for-2021-and-beyond/):

> “The future will hold that the development lifecycle (code, build, debug) will happen mostly in the cloud versus your local Emacs or VSCode setup. You will end up getting a full dev environment setup for every pull request, pre-configured and connected to their deployment to aid your development and debugging needs.”

Sounds like a dream, huh? The next generation of IDEs is already here! You can do this right now with Gitpod and GitHub Codespaces beta. The constant innovation excites me the most about tech in general; it’s truly magical to see how developer experience will continue to shape our tool kit as developers. As long as we can imagine it, it is possible and isn’t that exciting?

Join us for the ride![<span class="icon icon-link"></span>](#join-us-for-the-ride)
----------------------------------------------------------------------------------

We hope to highlight DevX further and bring to you curated content about what truly makes for great developer experiences! Over the next few months, we’ll be sharing best practices and frameworks that continue to spark dialogue across four different areas:

1.  Develop
2.  Collaborate
3.  Test, build & deploy
4.  Run

DevX newsletter is community-driven[<span class="icon icon-link"></span>](#devx-newsletter-is-community-driven)
---------------------------------------------------------------------------------------------------------------

Another thing about Gitpodders is that we’re all driven by community feedback, and this newsletter is no exception! Please send us your thoughts, feedback and help us drive this conversation. We may even feature some of your takes and comments in future newsletters!

Come and hang out with us over on [our Discord channel](https://gitpod.io/chat).

Share this post:
----------------

-   [<img src="/svg/brands/twitter.svg" alt="Twitter" width="24" height="24" />](https://twitter.com/intent/tweet?text=DevX%20Digest%2001%20-%20The%20evolution%20of%20DevX%20%F0%9F%8C%B1%20by%20%40pawlean%2C%20%40mikenikles%20https%3A%2F%2Fwww.gitpod.io%2Fblog%2Fthe-evolution-of-devx)
-   [<img src="/svg/brands/reddit.svg" alt="Reddit" width="24" height="24" />](http://www.reddit.com/submit?url=https%3A%2F%2Fwww.gitpod.io%2Fblog%2Fthe-evolution-of-devx%26title%3DDevX%20Digest%2001%20-%20The%20evolution%20of%20DevX%20%F0%9F%8C%B1)

##### Was this helpful?

<img src="/images/docs/feedback-widget/1.svg" title="Feedback 1 of 4" alt="Feedback 1 of 4" class="h-6 w-6" />

<img src="/images/docs/feedback-widget/2.svg" title="Feedback 2 of 4" alt="Feedback 2 of 4" class="h-6 w-6" />

<img src="/images/docs/feedback-widget/3.svg" title="Feedback 3 of 4" alt="Feedback 3 of 4" class="h-6 w-6" />

<img src="/images/docs/feedback-widget/4.svg" title="Feedback 4 of 4" alt="Feedback 4 of 4" class="h-6 w-6" />

More articles
-------------

<a href="/blog/cloud-based-development-for-everyone" class="svelte-i5xvka"></a>

### <a href="/blog/cloud-based-development-for-everyone" class="svelte-i5xvka">Cloud-based development for everyone</a>

By 2023 working with ephemeral cloud-based dev environments will be the standard, just like CI/CD is today.

<span class="avatars"> <a href="https://twitter.com/svenefftinge" class="no-underline transition-none filter hover:drop-shadow showAvatar"><img src="https://github.com/svenefftinge.png" alt="Avatar of svenefftinge" class="inline rounded-full border border-solid border-off-white" width="24" height="24" /></a> <a href="https://twitter.com/jolandgraf" class="no-underline transition-none filter hover:drop-shadow showAvatar"><img src="https://github.com/JohannesLandgraf.png" alt="Avatar of JohannesLandgraf" class="inline rounded-full border border-solid border-off-white" width="24" height="24" /></a> </span> <a href="/blog/cloud-based-development-for-everyone" class="date no-underline text-p-small ml-macro">Aug 13, 2021</a>

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
