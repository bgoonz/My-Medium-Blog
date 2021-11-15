<a href="/features" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Features</a><a href="/screencasts" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u highlighted">Screencasts</a><a href="/blog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Blog</a><a href="/docs" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Docs</a><a href="/changelog" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Changelog</a><a href="/pricing" class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u">Pricing</a>

<a href="https://gitpod.io/login/" class="flex items-center justify-center h-8 w-20 rounded-xl bg-black font-bold text-off-white text-sm focus:text-off-white focus:bg-black-hover hover:text-off-white hover:bg-black-hover">Login</a>

<img src="/images/blog/local-app/header-desktop.png" alt="Gitpod Local Companion - localhost is going remote" class="headerImage" />

Jun 9, 2021

Gitpod Local Companion - localhost is going remote
==================================================

<span class="avatars"> <a href="https://twitter.com/akosyakov" class="no-underline transition-none inline-flex mr-4 px-2 bg-white rounded-xl text-light-grey focus:bg-off-white focus:text-dark-grey hover:bg-off-white hover:text-dark-grey showAvatar"><img src="https://github.com/akosyakov.png" alt="Avatar of akosyakov" class="inline rounded-full border border-solid border-off-white mr-2 h-6 w-6 place-self-center" width="24" height="24" /> Anton Kosyakov</a> <a href="https://twitter.com/csweichel" class="no-underline transition-none inline-flex mr-4 px-2 bg-white rounded-xl text-light-grey focus:bg-off-white focus:text-dark-grey hover:bg-off-white hover:text-dark-grey showAvatar"><img src="https://github.com/csweichel.png" alt="Avatar of csweichel" class="inline rounded-full border border-solid border-off-white mr-2 h-6 w-6 place-self-center" width="24" height="24" /> Christian Weichel</a> <a href="https://www.linkedin.com/in/robert-leftwich" class="no-underline transition-none inline-flex mr-4 px-2 bg-white rounded-xl text-light-grey focus:bg-off-white focus:text-dark-grey hover:bg-off-white hover:text-dark-grey showAvatar"><img src="https://github.com/rl-gitpod.png" alt="Avatar of rl-gitpod" class="inline rounded-full border border-solid border-off-white mr-2 h-6 w-6 place-self-center" width="24" height="24" /> Robert Leftwich</a> </span>

While Gitpod can seamlessly integrate into your workflow in the vast majority of cases, there are times where you may want to access a workspace from localhost and were required to workaround some limitations, particularly with respect to [framework](/docs/languages/svelte) features such as [live reload](https://github.com/gitpod-io/gitpod/issues/3282).

Gitpod is pleased to announce a preview release of the *Gitpod Local Companion* app that is designed to allow localhost access to any TCP port in a remote workspace regardless of protocol.

The app runs locally and enables automatically tunneled connections to your workspace, either privately or, if required, publicly (on your laptops IP for example).

In particular, this opens up any environment or framework that assumes localhost access i.e. web frameworks such as Svelte and enables bundlers such as Parcel or Webpack hot reloading without requiring any changes. It also enables the use of non-HTTP protocols, most notably MQTT based brokers or the AMQP based services.

As a preview release, not all of the features are implemented, most notably the tunneling is 1-way only: local -&gt; workspace.

See it in action[<span class="icon icon-link"></span>](#see-it-in-action)
-------------------------------------------------------------------------

As a simple example, with the *Gitpod Local Companion* app installed and running, open the standard Svelte template in Gitpod, using this [link](https://gitpod.io/#https://github.com/sveltejs/template) or the Gitpod button [directly](https://github.com/sveltejs/template). This will create an ephemeral environment for you without requiring any local setup or installation. As per the template instructions, run the following:

    npm install && npm run dev

VS Code will detect the service on port 5000 and offer 3 options. Click on the ‘Open Browser’ icon or navigate to directly to [localhost](http://localhost:5000/) to see ‘Hello world!‘. Edit app.svelte and the page will live reload with your changes!

We love feedback here at Gitpod, so please give it a try and let us know what you think!

Installation[<span class="icon icon-link"></span>](#installation)
-----------------------------------------------------------------

To get started, download the preview release of the *Gitpod Local Companion* app for your platform (right click, ‘Save (Link) As’)

-   [Mac](https://gitpod.io/static/bin/gitpod-local-companion-darwin) - you will need to grant permission as it is not yet notarised. See <a href="https://support.apple.com/en-au/HT202491" class="no-nowrap">“open an app that hasn’t been notarised or is from an unidentified developer”</a> or click on the app in Finder while holding the Control key down and select ‘Open’ from the menu and then ‘Open’ in the prompt.
-   [Linux](https://gitpod.io/static/bin/gitpod-local-companion-linux)
-   [Windows](https://gitpod.io/static/bin/gitpod-local-companion-windows.exe)

Alternatively, in a terminal run the following:

      # mac
      curl -OL https://gitpod.io/static/bin/gitpod-local-companion-darwin
      chmod +x ./gitpod-local-companion-*

      # linux
      curl -OL https://gitpod.io/static/bin/gitpod-local-companion-linux
      chmod +x ./gitpod-local-companion-*

      # windows
      curl -OL https://gitpod.io/static/bin/gitpod-local-companion-windows.exe

Running[<span class="icon icon-link"></span>](#running)
-------------------------------------------------------

To run it using your local keyring for long term storage of the access token:

      ./gitpod-local-companion-[darwin|linux|windows]

To run it without storing the access token (it will generate a new token every time);

      ./gitpod-local-companion-[darwin|linux|windows] --mock-keyring

If you are not logged in to Gitpod, it will take you through that flow. If you haven’t run the local app previously it will also ask you to approve access to the control data of all your workspaces, returning a token that grants the access. This token will be stored in your local keyring for future use (unless you specify otherwise).

Once approval has been granted it will connect to your currently active workspaces and allow VSCode to control the tunnelling between the remote workspace and your local environment using the *Remote Explorer Ports View*.

Note that it currently requires a reload of the workspace VS Code page if the companion app is started after the workspace is open to synchronize the ports view - this is temporary.

Remote Explorer Ports View[<span class="icon icon-link"></span>](#remote-explorer-ports-view)
---------------------------------------------------------------------------------------------

Gitpod has extended the Remote Explorer Ports view to allow more control of how ports are exposed. As shown below there is an additional toggle on each port to switch between *Tunnel on localhost* exposure i.e. nothing outside of your laptop

![tunnel on localhost](/images/blog/local-app/tunnel-on-all.png)

and *Tunnel on all interfaces* to make that port available on 0.0.0.0. and, depending on your firewall settings, to anyone that can access your laptop externally.

![tunnel on all](/images/blog/local-app/tunnel-on-all.png)

By default it will attempt to tunnel on the same port, but it will pick a random port if the local port is unavailable. This is reflected in the Remote Explorer Ports view below where local port 3000 is tunneled via port 49605:

![tunnel on random](/images/blog/local-app/tunnel-on-random.png)

SSH Access[<span class="icon icon-link"></span>](#ssh-access)
-------------------------------------------------------------

Additionally, the *Gitpod Local Companion* preview release also has basic support for SSH access into your workspace. It currently requires that you have a default SSH key setup in the ~/.ssh directory i.e. id\_rsa.pub & id\_rsa. The public key will be copied to the workspace to permit access.

This opens up all the usual SSH-based features, such as secure copying, tunneling and remote execution.

Once you have installed the *Gitpod Local Companion* app and connected it to your workspaces, it dynamically creates entries for each workspace in the /tmp/gitpod\_ssh\_config file. You can use this to SSH into your workspace as follows:

    ssh -F /tmp/gitpod_ssh_config <your-workspace-id e.g.apricot-harrier-####>

You will be prompted to add the address to your known hosts file and you will be connected to your workspace!

What is next?[<span class="icon icon-link"></span>](#what-is-next)
------------------------------------------------------------------

We have big plans for the *Gitpod Local Companion* App! Future features **may** include:

-   2-way tunnelling
-   Listing what workspaces are running
-   Listing what ports are currently tunneled and in which direction (workspace to/from local)
-   Starting/stopping port forwarding from the command line
-   Connecting a local VS Code instance to a workspace
-   SSH into a workspace from the command line in a simple, straight forward way

Share this post:
----------------

-   [<img src="/svg/brands/twitter.svg" alt="Twitter" width="24" height="24" />](https://twitter.com/intent/tweet?text=Gitpod%20Local%20Companion%20-%20localhost%20is%20going%20remote%20by%20%40akosyakov%2C%20%40csweichel%2C%20Robert%20Leftwich%20https%3A%2F%2Fwww.gitpod.io%2Fblog%2Flocal-app)
-   [<img src="/svg/brands/reddit.svg" alt="Reddit" width="24" height="24" />](http://www.reddit.com/submit?url=https%3A%2F%2Fwww.gitpod.io%2Fblog%2Flocal-app%26title%3DGitpod%20Local%20Companion%20-%20localhost%20is%20going%20remote)

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
