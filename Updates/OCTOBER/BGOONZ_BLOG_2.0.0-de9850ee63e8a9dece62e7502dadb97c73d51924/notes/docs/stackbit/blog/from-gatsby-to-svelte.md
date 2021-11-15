<a href="/features" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Features</a><a href="/screencasts" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u highlighted">Screencasts</a><a href="/blog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Blog</a><a href="/docs" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Docs</a><a href="/changelog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Changelog</a><a href="/pricing" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Pricing</a>

<a href="https://gitpod.io/login/" class="flex items-center justify-center h-8 w-20 rounded-xl bg-black font-bold text-off-white text-sm focus:text-off-white focus:bg-black-hover hover:text-off-white hover:bg-black-hover">Login</a>

<img src="/images/blog/from-gatsby-to-svelte/teaser.png" alt="From Gatsby to Svelte in 3 weeks" class="headerImage" />

May 8, 2021

From Gatsby to Svelte in 3 weeks
================================

<span class="avatars"> <a href="https://twitter.com/mikenikles" class="no-underline transition-none inline-flex mr-4 px-2 bg-white rounded-xl text-light-grey focus:bg-off-white focus:text-dark-grey hover:bg-off-white hover:text-dark-grey showAvatar"><img src="https://github.com/mikenikles.png" alt="Avatar of mikenikles" class="inline rounded-full border border-solid border-off-white mr-2 h-6 w-6 place-self-center" width="24" height="24" /> Mike Nikles</a> </span>

**tl;dr:**

-   [Gitpod](/) recently announced new funding and a completely new brand ([read more](/blog/next-chapter-for-gitpod)) 🍊.
-   As part of that, we rebuilt the website from scratch, replacing React & Gatsby with [Svelte](https://svelte.dev) & [SvelteKit](https://kit.svelte.dev).
-   Look at the [source code on GitHub](https://github.com/gitpod-io/website) or start the website in a Gitpod development environment by visiting <a href="https://gitpod.io#https://github.com/gitpod-io/website" class="no-nowrap">https://gitpod.io#https://github.com/gitpod-io/website</a>.
-   Listen to the Svelte Radio episode ”[Migrating from Sapper to SvelteKit](https://share.transistor.fm/s/507ad528)” where I shared more details.

What we had previously…[<span class="icon icon-link"></span>](#what-we-had-previously)
--------------------------------------------------------------------------------------

Prior to April 8, 2021 the Gitpod website was built with React & Gatsby and the source code is [available on GitHub](https://github.com/gitpod-io/retired-gatsby-website). A static site was deployed to Netlify and a Netlify function took care of processing HTML form submissions by sending the form content via email to the Gitpod team (e.g. contact us, enterprise license requests, etc.) We leveraged the Gatsby ecosystem by adding plugins to the [`gatsby-config.js`](https://github.com/gitpod-io/retired-gatsby-website/blob/master/gatsby-config.js) file which took care of things like Markdown parsing and embedding Youtube videos, among other things.

### … and why we started from scratch[<span class="icon icon-link"></span>](#-and-why-we-started-from-scratch)

What was wrong with the previous stack? Why did we decide to rewrite the website with different technologies? Overall, Gatsby & React is a great choice and gets the job done just fine. Many people are already familiar with React and are ready to contribute with minimal effort.

**However**, at Gitpod we care deeply about developer experience & productivity - this is what our product is all about afterall. This is where we believe [Svelte](https://svelte.dev) and [SvelteKit](https://kit.svelte.dev) lead the pack in today’s web application development. By leveraging [Vite](https://vitejs.dev), developing a SvelteKit web app is as instant as it gets, it even persists local state when hot reloading the web application!

In addition, we had an extremely tight timeframe from the start of the project to the [announcement of our funding and the new brand](/blog/next-chapter-for-gitpod). While I have had two years of experience with Svelte & Sapper, the other three developers had not worked together previously and were not familiar with Svelte. Nevertheless, I was confident the rest of the team would pick up Svelte and be productive right away. To learn Svelte, all you really need is work your way through the [tutorial](https://svelte.dev/tutorial).

**To me, building a SvelteKit app from scratch felt less risky than modifying an existing Gatsby codebase!**

This is especially true in our case where we had to apply a completely new brand across all pages and would have had to learn Gatsby too.

The implementation[<span class="icon icon-link"></span>](#the-implementation)
-----------------------------------------------------------------------------

SvelteKit’s public beta [was announced](https://svelte.dev/blog/sveltekit-beta) at around the same time as we started our project. Knowing there would be bugs - the maintainers explicitly warned about that - we decided to start with a [Sapper](https://sapper.svelte.dev) app. Sapper is the predecessor of SvelteKit and was well established. There was also a promise from the maintainers to provide a [frictionless migration path](https://kit.svelte.dev/migrating).

With one week to go, we migrated from Sapper to SvelteKit ([pull request](https://github.com/gitpod-io/website/pull/120)). The team’s feedback was clear:

![Vote on the SvelteKit developer experience](/images/blog/from-gatsby-to-svelte/sveltekit-devx-vote.png)

Remember that frictionless migration we were promised? It was indeed smooth as butter! At this point, a huge thank you to the Svelte maintainers & contributors for their incredible work ❤️ !

We also configured [Tailwind CSS](https://tailwindcss.com), [mdsvex](https://mdsvex.com) and the [`adapter-netlify`](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify).

### Gatsby plugins[<span class="icon icon-link"></span>](#gatsby-plugins)

The Svelte ecosystem is not (yet) as established as the Gatsby ecosystem. However, thanks to the flexibility of mdsvex, we were able to use some Markdown related [remark](https://github.com/remarkjs/remark) plugins. For some use cases, we wrote [our own plugins](https://github.com/gitpod-io/website/tree/main/src/utils) to cover specific needs.

Dana Woodman recently shared an interesting [thought on the Svelte ecosystem](https://twitter.com/DanaWoodman/status/1390030682789859329) that is worth paraphrasing: Many existing, vanilla JS libraries work effortlessly with Svelte which opens up an even wider ecosystem than what you get with React.

Lessons learned[<span class="icon icon-link"></span>](#lessons-learned)
-----------------------------------------------------------------------

### Svelte & SvelteKit[<span class="icon icon-link"></span>](#svelte--sveltekit)

SvelteKit is in public beta and you may run into a rough edge or two - nothing though that makes it a showstopper. For example, we weren’t able to use prerendering to deploy static pages and launched the website with server-side rendering through a Netlify function instead. This has since been fixed, we upgraded to the latest version and the majority of pages are now static HTML files - taking full advantage of SvelteKit’s flexibility to mix & match SSR, SPA and static pages.

### Tailwind CSS[<span class="icon icon-link"></span>](#tailwind-css)

We configured Tailwind because the product team uses it and we want to align as much as possible. On the website team, only one out of four team members was familiar with it and we decided not to enforce the use of Tailwind. In hindsight, this was probably a mistake as there is now a mix of custom CSS and Tailwind that needs to be cleaned up over time. However, it was a risk mitigation worth applying given the tight deadline.

Going forward, we are likely going to develop a lightweight pattern library either by abstracting Tailwind classes in Svelte components or [extracting components](https://tailwindcss.com/docs/extracting-components) as per the Tailwind CSS docs.

### Netlify adapter[<span class="icon icon-link"></span>](#netlify-adapter)

A [bug](https://github.com/sveltejs/kit/issues/930) in the Netlify adapter caused a short-term headache because it completely ignored any redirects configured in the `netlify.toml` file. This is being worked on at the moment and we were able to apply [a temporary workaround](https://github.com/sveltejs/kit/issues/930#issuecomment-817216700).

### Differences between development & production environments[<span class="icon icon-link"></span>](#differences-between-development--production-environments)

Due to the use of SvelteKit adapters, you may run into different behavior when you run in development vs production. I recommend you set up automated preview deployments for each pull request and also test locally with the generated production web app. In our case, we can start a production-like environment with `npm run deploy && npm start` to verify code changes before we push the code.

### No CSS on the error page[<span class="icon icon-link"></span>](#no-css-on-the-error-page)

We noticed the `routes/$error.svelte` page lost all CSS when we deployed the web app ([GitHub issue](https://github.com/sveltejs/kit/issues/715)). We had to extract the header, footer and error page CSS into a separate CSS file and include it on the error page. Three days before our go-live date, that bug was fixed in SvelteKit.

Conclusion[<span class="icon icon-link"></span>](#conclusion)
-------------------------------------------------------------

**Would we do it again?** Absolutely!

**Was it risky?** A bit, due to the unknowns of SvelteKit’s beta label when we started the project, but given we had Sapper as a fallback option it was calculated risk. With today’s state of SvelteKit and the very recent bug fixes, the Sapper fallback is no longer needed and I recommend starting with SvelteKit.

**Should you use SvelteKit in production?** I can now say with confidence, go for it. As you work on your web app, deploy it to a production-like environment frequently to avoid any deployment surprises.

All in all, I am excited about the future of web development not least because Svelte is redefining what modern web development looks like - both from a developer and end user experience!

### What’s next?[<span class="icon icon-link"></span>](#whats-next)

Head over to <https://github.com/gitpod-io/website> to look at the source code or experience how we work by opening an ephemeral development environment with the following button:

<a href="https://gitpod.io/#https://github.com/gitpod-io/website" class="link-with-image-as-only-child"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" /></a>

To explore your own project in an online development environment, prefix your GitHub, GitLab or Bitbucket repository URL with `gitpod.io#`. [Learn more about that in the documentation](/docs/context-urls).

We welcome community contributions 🙏 . Please let us know what you think of the website and its implementation.

Share this post:
----------------

-   [<img src="/svg/brands/twitter.svg" alt="Twitter" width="24" height="24" />](https://twitter.com/intent/tweet?text=From%20Gatsby%20to%20Svelte%20in%203%20weeks%20by%20%40mikenikles%20https%3A%2F%2Fwww.gitpod.io%2Fblog%2Ffrom-gatsby-to-svelte)
-   [<img src="/svg/brands/reddit.svg" alt="Reddit" width="24" height="24" />](http://www.reddit.com/submit?url=https%3A%2F%2Fwww.gitpod.io%2Fblog%2Ffrom-gatsby-to-svelte%26title%3DFrom%20Gatsby%20to%20Svelte%20in%203%20weeks)

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
