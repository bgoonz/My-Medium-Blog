<a href="/features" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Features</a><a href="/screencasts" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u highlighted">Screencasts</a><a href="/blog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Blog</a><a href="/docs" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Docs</a><a href="/changelog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Changelog</a><a href="/pricing" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Pricing</a>

<a href="https://gitpod.io/login/" class="flex items-center justify-center h-8 w-20 rounded-xl bg-black font-bold text-off-white text-sm focus:text-off-white focus:bg-black-hover hover:text-off-white hover:bg-black-hover">Login</a>

<img src="/images/blog/journey-to-site-reliability-engineering-at-gitpod/teaser.png" alt="Journey to Site Reliability Engineering at Gitpod" class="headerImage" />

May 23, 2021

Journey to Site Reliability Engineering at Gitpod
=================================================

<span class="avatars"> <a href="https://twitter.com/ArthurSilvaSens" class="no-underline transition-none inline-flex mr-4 px-2 bg-white rounded-xl text-light-grey focus:bg-off-white focus:text-dark-grey hover:bg-off-white hover:text-dark-grey showAvatar"><img src="https://github.com/arthursens.png" alt="Avatar of arthursens" class="inline rounded-full border border-solid border-off-white mr-2 h-6 w-6 place-self-center" width="24" height="24" /> Arthur Sens</a> </span>

Gitpod is changing the way developers code. We’re breaking the paradigm of relying on local environments to develop applications, by making those environments available through a web browser. Those environments are hosted in the cloud, they are ephemeral and they can be customized through automation to make them perfect for the project being developed.

Those cloud-based environments provide everything that our users have in their local machines, including [sudo access](/blog/root-docker-and-vscode#root-access) and [docker](/blog/root-docker-and-vscode#docker), and thanks to configuration-as-code (that can be automated) they remove the friction of installing and managing all different kinds of dependencies that we have when working on multiple projects. We want the world to forget about local environments and completely focus on our cloud-based environments.

*We gave those cloud-based environments a unique name: “Workspaces”.*

Workspaces are the core of Gitpod, it is impossible to be a user of Gitpod without using Workspaces. To achieve the goal of making the world forget about local environments, *we need to be a service provider that developers can trust and rely on*, therefore, Workspaces need to be just as reliable as local environments!

Gitpod is scaling! [We are glad to be backed by fantastic investors](/blog/next-chapter-for-gitpod) and the topic “Cloud-based development” is on fire right now! Being the pioneers in this topic, it’s only natural that we’re getting more and more users every day. This is truly a great thing for us! We are honored to receive so much love in the last couple of months and we want to keep this momentum going, but this extra love also puts an extra load on top of our clusters and extra load sometimes leads to unreliability. It is awesome that people are starting to forget about their local environments thanks to Gitpod, therefore *we want Workspaces to maintain a fantastic performance, doesn’t matter if we host ten, ten thousand, or ten million Workspaces concurrently.*

Reliability vs Velocity[<span class="icon icon-link"></span>](#reliability-vs-velocity)
---------------------------------------------------------------------------------------

Of course, Gitpod is a lot more than just an IDE with a terminal in the cloud. We have tons of features that make Gitpod shine amongst all other cloud-based development environments, such as [Prebuilds](/docs/prebuilds), [Sudo and Docker support](/blog/root-docker-and-vscode), [Shareable Workspaces](/docs/sharing-and-collaboration), while not mentioning our [Roadmap](https://www.notion.so/gitpod/Product-Roadmap-b9b5eac0a15147ac8d2dd25cf0519203) that is pretty ambitious too.

Developing and shipping new features is one of the things that make us more excited about our work, and hopefully our users too 😅, but making changes to production also comes with the risk of breaking stuff that was working just fine previously. Breaking small things is usually okay and we can keep focusing on new features, but we may break Gitpod so much that user experience decreases to a level that makes our users unhappy. That is a big no-no for us. If our users are unhappy then we need to do something about it, even if that means slowing down new features or completely stop them to fully focus on reliability depending on how bad the situation is. *But how do we decide if we should be focusing on reliability or feature velocity?*

Today we are not doing a great job when it comes to proactively identify degraded user experience. While we do have some metrics about Workspace startup latency and errors, most of our incidents were identified by noticing too many users complaining at our contact platforms, such as Github issues, email, and Twitter. Damn, we even got an incident that caused 100% unavailability because our SSL certificates expired back in February this year, and it took us almost half an hour to notice that 😅!

We do have things to be proud of though! Our Incident Response process, while it can be improved even further, has gotten a lot better since December 2020. We’re coming up with post-mortems after almost all incidents and the team is tackling every action item raised. On these occasions, reliability usually has a higher priority than feature velocity. Some action items are taking a little longer to implement though, and these items are exactly the ones that will solve the problem mentioned before: *we need to get better at proactively identify degraded user experience.*

Alerting on symptoms instead of causes[<span class="icon icon-link"></span>](#alerting-on-symptoms-instead-of-causes)
---------------------------------------------------------------------------------------------------------------------

Unfortunately, today we can’t have clear insights if our changes have a direct impact on user experience. We come from a mindset of measuring compute resources, e.g. CPU, RAM, and disk utilization, as a way to know if Gitpod is running smoothly. This strategy worked just fine for some time, it was simple to horizontally or vertically increase our nodes, but now we are often seeing that lack of resources are not the reason why Workspaces start to fail. Not to mention that keeping a high number of nodes under a certain threshold is quite challenging.

![Too many nodes to keep an eye on](/images/blog/journey-to-site-reliability-engineering-at-gitpod/too-many-nodes.png)

We want to change this mindset completely! Compute resource metrics may be good for debugging degraded performance during incidents, but shouldn’t be the way we look for degraded user experience. We should be gathering metrics that measure exactly the symptoms that our users complain about during incidents:

![Incident reporting](/images/blog/journey-to-site-reliability-engineering-at-gitpod/incident-report.png)

As previously said, Workspaces are the core of Gitpod. We should be measuring metrics that tell us how our users are interacting with them:

-   How many workspaces are being created and how many fail during this process?
-   How many of those Workspaces start in an acceptable time frame?
-   After they start, do they remain working until the user chooses to stop them?

Gitpod has a lot more features than just hosting Workspaces but, as a first step, *getting metrics and alerts around Workspace behavior will cover most of the complaints we had so far.*

Service Level Objectives[<span class="icon icon-link"></span>](#service-level-objectives)
-----------------------------------------------------------------------------------------

These Workspace metrics will be key to our team when performing Site Reliability Engineering, but they alone aren’t enough. They still don’t answer the question: should we be focusing on reliability or feature velocity? We need to set clear expectations about when we consider Gitpod unstable or not.

*Service Level Indicators and Service Level Objectives will be our North Stars.* And they will be implemented with the metrics mentioned in the previous section of this blog.

SLIs are simple once we implement those metrics. It’s a simple ratio calculation over some time period. E.g.:

-   ![Workspace Start SLI](/images/blog/journey-to-site-reliability-engineering-at-gitpod/sli-workspace-start.gif)

-   ![Workspace Latency SLI](/images/blog/journey-to-site-reliability-engineering-at-gitpod/sli-workspace-latency.gif)

-   ![Workspace Liveness SLI](/images/blog/journey-to-site-reliability-engineering-at-gitpod/sli-workspace-liveness.gif)

The SLOs, on the other hand, are a little bit more complicated. The SLO is a target of reliability that will better represent our users’ “happiness”, and measuring happiness is not really straightforward. We do know that aiming for 100% is not what we nor our users want though. Aiming for 100% means that 0 Workspaces can fail to start. Once we have a stable system, making changes to it, e.g. changing infrastructure to save costs or shipping a new exciting feature, is often the reason why said system becomes unstable even though those changes will often make us and our users more satisfied with our final product.

Now that we agreed that we won’t aim for 100% availability, then what will be our target? Well, internally we do have an informal agreement that:

-   95% of Workspaces should start in less than 2 mins
-   50% of Workspaces should start in less than 15s
-   99.8% of Workspaces should start successfully
-   99.8% of Workspaces should remain working after they start

To be honest, however, in our first interaction it is a little bit unreal to write those targets in stone already. As we already mentioned in this blog post, we still don’t have that measurement very well established, so we don’t know what is the reality that we live in right now. It could be that to achieve those targets, we will need to stop feature development completely just to manually keep everything stable, and this is not what we want!

After implementing our metrics and SLIs, we can create dashboards and reports based on the SLOs’ targets that we’re aiming for in the future, but we will only establish real policies after we get some war experience and develop a good grasp of what we’re dealing with 💪.

Share this post:
----------------

-   [<img src="/svg/brands/twitter.svg" alt="Twitter" width="24" height="24" />](https://twitter.com/intent/tweet?text=Journey%20to%20Site%20Reliability%20Engineering%20at%20Gitpod%20by%20%40arthursens%20https%3A%2F%2Fwww.gitpod.io%2Fblog%2Fjourney-to-site-reliability-engineering-at-gitpod)
-   [<img src="/svg/brands/reddit.svg" alt="Reddit" width="24" height="24" />](http://www.reddit.com/submit?url=https%3A%2F%2Fwww.gitpod.io%2Fblog%2Fjourney-to-site-reliability-engineering-at-gitpod%26title%3DJourney%20to%20Site%20Reliability%20Engineering%20at%20Gitpod)

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
