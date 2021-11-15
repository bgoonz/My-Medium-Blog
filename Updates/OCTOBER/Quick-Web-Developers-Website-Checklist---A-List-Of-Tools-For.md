Quick Web Developers Website Checklist & A List Of Tools For Improvement
========================================================================

A set of questions you should use before handing off your application to the client.

------------------------------------------------------------------------

### Quick Web Developers Website Checklist & A List Of Tools For Improvement

#### A set of questions you should use before handing off your application to the client.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*QD7rah374uFotVYN.jpg" class="graf-image" /></figure>First off… download this developer checklist extension for chrome that literally evaluates the checkpoints on any webpage you activate it on.. it also provides advice and html validation so that you can improve your site and it’s SEO rankings!

<a href="https://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp?hl=en-US" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp?hl=en-US"><strong>Web Developer Checklist</strong><br />
<em>Analyses any web page for violations of best practices</em>chrome.google.com</a><a href="https://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp?hl=en-US" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

#### Here it is in action :

<figure><img src="https://cdn-images-1.medium.com/max/800/1*Qh8BZUzF7nRISPrwDTz05Q.png" class="graf-image" /></figure>### Remainder of tool list is below this checklist:

------------------------------------------------------------------------

### Usefulness & Relevance:

> *Does the content meet user needs, goals, and interests?*

> *Does the content meet business goals?*

> *For how long will the content be useful? When should it expire? Has its usefulness already expired?*

> *Is the content timely and relevant?*

------------------------------------------------------------------------

### Clarity & Accuracy:

> **Is the content understandable to customers?**

> **Is the content organized logically & coherently?**

> **Is the content correct?**

> **Does the content contain factual errors, typos, or grammatical errors?**

> **Do images, video, and audio meet technical standards, so they are clear?**

------------------------------------------------------------------------

### Influence & Engagement:

> Does the content use the most appropriate techniques to influence or engage customers?

> Does the content execute those techniques effectively?

> Does the content use too many or too few techniques for the context?

------------------------------------------------------------------------

### Completeness:

> Does the content include all of the information customers need or might want about a topic?

> Does the content include too much or too little information about a topic for the context?

### Voice & Style:

> Does the content consistently reflect the editorial or brand voice?

> Does its tone adjust appropriately to the context — for example, sales versus customer service?

> Does the content convey the appropriate editorial and brand qualities?

> Does the content seem to have a style? If so, does the content adhere to it consistently?

> Does the content read, look, or sound as though it’s professionally crafted?

------------------------------------------------------------------------

### Usability & Findability:

> Is the content easy to scan or read?

> Is the content in a usable format, including headings, bulleted lists, tables, white space, or similar techniques, as appropriate to the content?

> Does the content have the appropriate metadata?

> Does the content follow search engine optimization (SEO) guidelines — such as using keywords — without sacrificing quality in other areas?

> Can customers find the content when searching using relevant keywords?

------------------------------------------------------------------------

### Head

> *Notes: You can find* <a href="https://github.com/joshbuchea/HEAD" class="markup--anchor markup--blockquote-anchor"><em>a list of everything</em></a> *that could be found in the* `<head>` *of an HTML document.*

### Meta tag

-   <span id="4ed0">Doctype:</span>
-   <span id="f434">The Doctype is HTML5 and is at the top of all your HTML pages.</span>

<!-- -->

    <!-- Doctype HTML5 -->
    <!doctype html>

-   <span id="98f8">📖 <a href="https://www.w3.org/TR/html5/syntax.html#determining-the-character-encoding" class="markup--anchor markup--li-anchor">Determining the character encoding — HTML5 W3C</a></span>

*The next 3 meta tags (Charset, X-UA Compatible and Viewport) need to come first in the head.*

-   <span id="1917">Charset:</span>
-   <span id="6cc4">The charset (UTF-8) is declared correctly.</span>

<!-- -->

    <!-- Set character encoding for the document -->
    <meta charset="utf-8">

-   <span id="a3da">X-UA-Compatible:</span>
-   <span id="94fe">The X-UA-Compatible meta tag is present.</span>

<!-- -->

    <!-- Instruct Internet Explorer to use its latest rendering engine -->
    <meta http-equiv="x-ua-compatible" content="ie=edge">

-   <span id="3d3b">📖 <a href="https://msdn.microsoft.com/en-us/library/jj676915%28v=vs.85%29.aspx" class="markup--anchor markup--li-anchor">Specifying legacy document modes (Internet Explorer)</a></span>
-   <span id="e335">Viewport:</span>
-   <span id="5267">The viewport is declared correctly.</span>

<!-- -->

    <!-- Viewport for responsive web design -->
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">

-   <span id="6088">Title:</span>
-   <span id="c5e7">A title is used on all pages (SEO: Google calculates the pixel width of the characters used in the title, and it cuts off between 472 and 482 pixels. The average character limit would be around 55-characters).</span>

<!-- -->

    <!-- Document Title -->
    <title>Page Title less than 55 characters</title>

-   <span id="8809">📖 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title" class="markup--anchor markup--li-anchor">Title — HTML — MDN</a></span>
-   <span id="56ed">🛠 <a href="https://www.sistrix.com/serp-snippet-generator/" class="markup--anchor markup--li-anchor">SERP Snippet Generator</a></span>
-   <span id="2f8c">Description:</span>
-   <span id="afa3">A meta description is provided, it is unique and doesn’t possess more than 150 characters.</span>

<!-- -->

    <!-- Meta Description -->
    <meta name="description" content="Description of the page less than 150 characters">

-   <span id="3b9b">📖 <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Adding_an_author_and_description" class="markup--anchor markup--li-anchor">Meta Description — HTML — MDN</a></span>

#### Favicons:

-   <span id="3476">Each favicon has been created and displays correctly. If you have only a `favicon.ico`, put it at the root of your site. Normally you won't need to use any markup. However, it's still good practice to link to it using the example below. Today, PNG format is recommended over `.ico` format (dimensions: 32x32px).</span>

<!-- -->

    <!-- Standard favicon -->
    <link rel="icon" type="image/x-icon" href="https://example.com/favicon.ico">
    <!-- Recommended favicon format -->
    <link rel="icon" type="image/png" href="https://example.com/favicon.png">

-   <span id="9522">🛠 <a href="https://www.favicon-generator.org/" class="markup--anchor markup--li-anchor">Favicon Generator</a></span>
-   <span id="7bba">🛠 <a href="https://realfavicongenerator.net/" class="markup--anchor markup--li-anchor">RealFaviconGenerator</a></span>
-   <span id="3e82">📖 <a href="https://github.com/audreyr/favicon-cheat-sheet" class="markup--anchor markup--li-anchor">Favicon Cheat Sheet</a></span>
-   <span id="94b9">📖 <a href="https://css-tricks.com/favicon-quiz/" class="markup--anchor markup--li-anchor">Favicons, Touch Icons, Tile Icons, etc. Which Do You Need? — CSS Tricks</a></span>
-   <span id="65d1">📖 <a href="https://caniuse.com/#feat=link-icon-png" class="markup--anchor markup--li-anchor">PNG favicons — caniuse</a></span>

#### Apple Web App Meta:

-   <span id="f2af">Apple meta-tags are present.</span>

<!-- -->

    <!-- Apple Touch Icon (at least 200x200px) -->
    <link rel="apple-touch-icon" href="/custom-icon.png">

    <!-- To run web application in full-screen -->
    <meta name="apple-mobile-web-app-capable" content="yes">

    <!-- Status Bar Style (see Supported Meta Tags below for available values) -->
    <!-- Has no effect unless you have the previous meta tag -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

-   <span id="e66a">📖 <a href="https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html" class="markup--anchor markup--li-anchor">Configuring Web Applications</a></span>
-   <span id="1d9a">📖 <a href="https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html" class="markup--anchor markup--li-anchor">Supported Meta Tags</a></span>
-   <span id="0cbb">Windows Tiles:</span>
-   <span id="14ca">Windows tiles are present and linked.</span>

<!-- -->

    <!-- Microsoft Tiles -->
    <meta name="msapplication-config" content="browserconfig.xml" />

Minimum required xml markup for the `browserconfig.xml` file is as follows:

    <?xml version="1.0" encoding="utf-8"?>
    <browserconfig>
       <msapplication>
         <tile>
            <square70x70logo src="small.png"/>
            <square150x150logo src="medium.png"/>
            <wide310x150logo src="wide.png"/>
            <square310x310logo src="large.png"/>
         </tile>
       </msapplication>
    </browserconfig>

-   <span id="67cd">📖 <a href="https://msdn.microsoft.com/en-us/library/dn320426%28v=vs.85%29.aspx" class="markup--anchor markup--li-anchor">Browser configuration schema reference</a></span>
-   <span id="1f7f">Canonical:</span>
-   <span id="399b">Use `rel="canonical"` to avoid duplicate content.</span>

<!-- -->

    <!-- Helps prevent duplicate content issues -->
    <link rel="canonical" href="http://example.com/2017/09/a-new-article-to-read.html">

-   <span id="00c2">📖 <a href="https://support.google.com/webmasters/answer/139066?hl=en" class="markup--anchor markup--li-anchor">Use canonical URLs — Search Console Help — Google Support</a></span>
-   <span id="b055">📖 <a href="https://webmasters.googleblog.com/2013/04/5-common-mistakes-with-relcanonical.html" class="markup--anchor markup--li-anchor">5 common mistakes with rel=canonical — Google Webmaster Blog</a></span>

### HTML tags

-   <span id="cd54">Language attribute:</span>
-   <span id="1d12">The `lang` attribute of your website is specified and related to the language of the current page.</span>

<!-- -->

    <html lang="en">

-   <span id="c96f">Direction attribute:</span>
-   <span id="ece8">The direction of lecture is specified on the html tag (It can be used on another HTML tag).</span>

<!-- -->

    <html dir="rtl">

-   <span id="09ce">📖 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir" class="markup--anchor markup--li-anchor">dir — HTML — MDN</a></span>
-   <span id="364a">Alternate language:</span>
-   <span id="69b5">The language tag of your website is specified and related to the language of the current page.</span>

<!-- -->

    <link rel="alternate" href="https://es.example.com/" hreflang="es">

-   <span id="8e6a">Conditional comments:</span>
-   <span id="36e6">Conditional comments are present for IE if needed.</span>
-   <span id="9f37">📖 <a href="https://msdn.microsoft.com/en-us/library/ms537512%28v=vs.85%29.aspx" class="markup--anchor markup--li-anchor">About conditional comments (Internet Explorer) — MSDN — Microsoft</a></span>
-   <span id="30ca">RSS feed:</span>
-   <span id="fcbc">If your project is a blog or has articles, an RSS link was provided.</span>
-   <span id="b050">CSS Critical:</span>
-   <span id="dd5d">The CSS critical (or “above the fold”) collects all the CSS used to render the visible portion of the page. It is embedded before your principal CSS call and between `<style></style>` in a single line (minified).</span>
-   <span id="a383">🛠 <a href="https://github.com/addyosmani/critical" class="markup--anchor markup--li-anchor">Critical by Addy Osmani on GitHub</a> automates this.</span>
-   <span id="201a">CSS order:</span>
-   <span id="edc2">All CSS files are loaded before any JavaScript files in the `<head>`. (Except the case where sometimes JS files are loaded asynchronously on top of your page).</span>

### Social meta

*Facebook OG* and *Twitter Cards* are, for any website, highly recommended. The other social media tags can be considered if you target a particular presence on those and want to ensure the display.

-   <span id="98ec">Facebook Open Graph:</span>
-   <span id="acae">All Facebook Open Graph (OG) are tested and no one is missing or with a false information. Images need to be at least 600 x 315 pixels, although 1200 x 630 pixels is recommended.</span>

> *Notes: Using* `og:image:width` *and* `og:image:height` *will specify the image dimensions to the crawler so that it can render the image immediately without having to asynchronously download and process it.*

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://example.com/page.html">
    <meta property="og:title" content="Content Title">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:description" content="Description Here">
    <meta property="og:site_name" content="Site Name">
    <meta property="og:locale" content="en_US">
    <!-- Next tags are optional but recommended -->
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">

-   <span id="cba0">📖 <a href="https://developers.facebook.com/docs/sharing/webmasters/" class="markup--anchor markup--li-anchor">A Guide to Sharing for Webmasters</a></span>
-   <span id="fdfe">📖 <a href="https://developers.facebook.com/docs/sharing/best-practices/" class="markup--anchor markup--li-anchor">Best Practices — Sharing</a></span>
-   <span id="a24b">🛠 Test your page with the <a href="https://developers.facebook.com/tools/debug/" class="markup--anchor markup--li-anchor">Facebook OG testing</a></span>

#### Twitter Card:

    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@site_account">
    <meta name="twitter:creator" content="@individual_account">
    <meta name="twitter:url" content="https://example.com/page.html">
    <meta name="twitter:title" content="Content Title">
    <meta name="twitter:description" content="Content description less than 200 characters">
    <meta name="twitter:image" content="https://example.com/image.jpg">

-   <span id="2bed">📖 <a href="https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started" class="markup--anchor markup--li-anchor">Getting started with cards — Twitter Developers</a></span>
-   <span id="017b">🛠 Test your page with the <a href="https://cards-dev.twitter.com/validator" class="markup--anchor markup--li-anchor">Twitter card validator</a></span>

------------------------------------------------------------------------

### HTML

### Best practices

-   <span id="a88e">HTML5 Semantic Elements:</span>
-   <span id="3898">HTML5 Semantic Elements are used appropriately (header, section, footer, main…).</span>
-   <span id="a1b7">📖 <a href="http://htmlreference.io/" class="markup--anchor markup--li-anchor">HTML Reference</a></span>
-   <span id="b455">Error pages:</span>
-   <span id="3f0e">Error 404 page and 5xx exist. Remember that the 5xx error pages need to have their CSS integrated (no external call on the current server).</span>
-   <span id="b408">Noopener:</span>
-   <span id="5cb4">In case you are using external links with `target="_blank"`, your link should have a `rel="noopener"` attribute to prevent tab nabbing. If you need to support older versions of Firefox, use `rel="noopener noreferrer"`.</span>
-   <span id="a766">📖 <a href="https://mathiasbynens.github.io/rel-noopener/" class="markup--anchor markup--li-anchor">About rel=noopener</a></span>
-   <span id="7764">Clean up comments:</span>
-   <span id="28e4">Unnecessary code needs to be removed before sending the page to production.</span>

### HTML testing

-   <span id="d8c5">W3C compliant:</span>
-   <span id="7074">All pages need to be tested with the W3C validator to identify possible issues in the HTML code.</span>
-   <span id="a0bd">🛠 <a href="https://validator.w3.org/" class="markup--anchor markup--li-anchor">W3C validator</a></span>
-   <span id="9c6e">HTML Lint:</span>
-   <span id="e80c">I use tools to help me analyze any issues I could have on my HTML code.</span>
-   <span id="e95b">🛠 <a href="https://dirtymarkup.com/" class="markup--anchor markup--li-anchor">Dirty markup</a></span>
-   <span id="65b2">🛠 <a href="https://sonarwhal.com/" class="markup--anchor markup--li-anchor">Sonar a linting tool for the web</a></span>
-   <span id="634a">Link checker:</span>
-   <span id="cd7d">There are no broken links in my page, verify that you don’t have any 404 error.</span>
-   <span id="3797">🛠 <a href="https://validator.w3.org/checklink" class="markup--anchor markup--li-anchor">W3C Link Checker</a></span>
-   <span id="d4ef">Adblockers test:</span>
-   <span id="8558">Your website shows your content correctly with adblockers enabled (You can provide a message encouraging people to disable their adblocker).</span>

------------------------------------------------------------------------

### Webfonts

> *Notes: Using webfonts may cause Flash Of Unstyled Text/Flash Of Invisible Text — consider having fallback fonts and/or utilizing webfont loaders to control behavior.*

-   <span id="14a4">📖 <a href="https://developers.google.com/fonts/docs/technical_considerations" class="markup--anchor markup--li-anchor">Google Technical considerations about webfonts</a></span>
-   <span id="663f">Webfont format:</span>
-   <span id="e167">WOFF, WOFF2 and TTF are supported by all modern browsers.</span>
-   <span id="9f7d">📖 <a href="https://caniuse.com/#feat=woff" class="markup--anchor markup--li-anchor">WOFF — Web Open Font Format — Caniuse</a>.</span>
-   <span id="4fc8">📖 <a href="https://caniuse.com/#feat=woff2" class="markup--anchor markup--li-anchor">WOFF 2.0 — Web Open Font Format — Caniuse</a>.</span>
-   <span id="016d">📖 <a href="https://caniuse.com/#feat=ttf" class="markup--anchor markup--li-anchor">TTF/OTF — TrueType and OpenType font support</a></span>
-   <span id="62b2">📖 <a href="https://css-tricks.com/snippets/css/using-font-face/" class="markup--anchor markup--li-anchor">Using @font-face — CSS-Tricks</a></span>
-   <span id="0185">Webfont size:</span>
-   <span id="baf8">Webfont sizes don’t exceed 2 MB (all variants included).</span>
-   <span id="e0eb">Webfont loader:</span>
-   <span id="c90b">Control loading behavior with a webfont loader</span>
-   <span id="8f74">🛠 <a href="https://github.com/typekit/webfontloader" class="markup--anchor markup--li-anchor">Typekit Web Font Loader</a></span>

------------------------------------------------------------------------

### CSS

> *Notes: Take a look at* <a href="https://cssguidelin.es/" class="markup--anchor markup--blockquote-anchor"><em>CSS guidelines</em></a> *and* <a href="https://sass-guidelin.es/" class="markup--anchor markup--blockquote-anchor"><em>Sass Guidelines</em></a> *followed by most Front-End developers. If you have a doubt about CSS properties, you can visit* <a href="http://cssreference.io/" class="markup--anchor markup--blockquote-anchor"><em>CSS Reference</em></a>*. There is also a short* <a href="http://codeguide.co/" class="markup--anchor markup--blockquote-anchor"><em>Code Guide</em></a> *for consistency.*

-   <span id="89d0">Responsive Web Design:</span>
-   <span id="a34d">The website is using responsive web design.</span>
-   <span id="e3b7">CSS Print:</span>
-   <span id="5876">A print stylesheet is provided and is correct on each page.</span>
-   <span id="12b6">Preprocessors:</span>
-   <span id="4ba4">Your project is using a CSS preprocessor.</span>
-   <span id="a956">Unique ID:</span>
-   <span id="b425">If IDs are used, they are unique to a page.</span>
-   <span id="0c22">Reset CSS:</span>
-   <span id="35d4">A CSS reset (reset, normalize or reboot) is used and up to date. *(If you are using a CSS Framework like Bootstrap or Foundation, a Normalize is already included into it.)*</span>
-   <span id="13f0">📖 <a href="https://meyerweb.com/eric/tools/css/reset/" class="markup--anchor markup--li-anchor">Reset.css</a></span>
-   <span id="3111">📖 <a href="https://necolas.github.io/normalize.css/" class="markup--anchor markup--li-anchor">Normalize.css</a></span>
-   <span id="78ba">📖 <a href="https://getbootstrap.com/docs/4.0/content/reboot/" class="markup--anchor markup--li-anchor">Reboot</a></span>
-   <span id="8627">JS prefix:</span>
-   <span id="61e7">All classes (or id- used in JavaScript files) begin with js- and are not styled into the CSS files.</span>

<!-- -->

    <div id="js-slider" class="my-slider">
    <!-- Or -->
    <div id="id-used-by-cms" class="js-slider my-slider">

-   <span id="80ba">embedded or inline CSS:</span>
-   <span id="e9e2">Avoid at all cost embeding CSS in `<style>` tags or using inline CSS: only use for valid reasons (e.g. background-image for slider, critical CSS).</span>
-   <span id="6d87">Vendor prefixes:</span>
-   <span id="9181">CSS vendor prefixes are used and are generated accordingly with your browser support compatibility.</span>
-   <span id="c1a1">🛠 <a href="https://autoprefixer.github.io/" class="markup--anchor markup--li-anchor">Autoprefixer CSS online</a></span>

### Performance

-   <span id="aaa4">Concatenation:</span>
-   <span id="3c67">CSS files are concatenated in a single file *(Not for HTTP/2)*.</span>
-   <span id="b97c">Minification:</span>
-   <span id="8ab5">All CSS files are minified.</span>
-   <span id="2026">Non-blocking:</span>
-   <span id="d337">CSS files need to be non-blocking to prevent the DOM from taking time to load.</span>
-   <span id="f0e6">📖 <a href="https://github.com/filamentgroup/loadCSS" class="markup--anchor markup--li-anchor">loadCSS by filament group</a></span>
-   <span id="9ad5">📖 <a href="https://gist.github.com/thedaviddias/c24763b82b9991e53928e66a0bafc9bf" class="markup--anchor markup--li-anchor">Example of preload CSS using loadCSS</a></span>
-   <span id="be3c">Unused CSS:</span>
-   <span id="2a1f">Remove unused CSS.</span>
-   <span id="ace6">🛠 <a href="https://uncss-online.com/" class="markup--anchor markup--li-anchor">UnCSS Online</a></span>
-   <span id="2a72">🛠 <a href="https://github.com/purifycss/purifycss" class="markup--anchor markup--li-anchor">PurifyCSS</a></span>
-   <span id="c5cc">🛠 <a href="https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage" class="markup--anchor markup--li-anchor">Chrome DevTools Coverage</a></span>

### CSS testing

-   <span id="b757">Stylelint:</span>
-   <span id="5376">All CSS or SCSS files are without any errors.</span>
-   <span id="464f">🛠 <a href="https://stylelint.io/" class="markup--anchor markup--li-anchor">stylelint, a CSS linter</a></span>
-   <span id="c803">📖 <a href="https://sass-guidelin.es/" class="markup--anchor markup--li-anchor">Sass guidelines</a></span>
-   <span id="f650">Responsive web design:</span>
-   <span id="ea2a">All pages were tested at the following breakpoints: 320px, 768px, 1024px (can be more / different according to your analytics).</span>
-   <span id="dbe7">CSS Validator:</span>
-   <span id="be53">The CSS was tested and pertinent errors were corrected.</span>
-   <span id="4cb4">🛠 <a href="https://jigsaw.w3.org/css-validator/" class="markup--anchor markup--li-anchor">CSS Validator</a></span>
-   <span id="8b5f">Desktop Browsers:</span>
-   <span id="2dbd">All pages were tested on all current desktop browsers (Safari, Firefox, Chrome, Internet Explorer, EDGE…).</span>
-   <span id="1f87">Mobile Browsers:</span>
-   <span id="ce11">All pages were tested on all current mobile browsers (Native browser, Chrome, Safari…).</span>
-   <span id="260d">OS:</span>
-   <span id="7c62">All pages were tested on all current OS (Windows, Android, iOS, Mac…).</span>
-   <span id="f6c7">Pixel perfect:</span>
-   <span id="d222">Pages are close to pixel perfect. Depending on the quality of the creatives, you may not be 100% accurate, but your page needs to be close to your template.</span>

> <a href="https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en" class="markup--anchor markup--blockquote-anchor"><em>Pixel Perfect — Chrome Extension</em></a>

-   <span id="667b">Reading direction:</span>
-   <span id="7a4b">All pages need to be tested for LTR and RTL languages if they need to be supported.</span>
-   <span id="3d0c">📖 <a href="https://hacks.mozilla.org/2015/09/building-rtl-aware-web-apps-and-websites-part-1/" class="markup--anchor markup--li-anchor">Building RTL-Aware Web Apps &amp; Websites: Part 1 — Mozilla Hacks</a></span>
-   <span id="3251">📖 <a href="https://hacks.mozilla.org/2015/10/building-rtl-aware-web-apps-websites-part-2/" class="markup--anchor markup--li-anchor">Building RTL-Aware Web Apps &amp; Websites: Part 2 — Mozilla Hacks</a></span>

------------------------------------------------------------------------

### Images

> *Notes: For a complete understanding of image optimization, check the free ebook* <a href="https://images.guide/" class="markup--anchor markup--blockquote-anchor"><em>Essential Image Optimization</em></a> *from Addy Osmani.*

### Best practices

-   <span id="63ca">Optimization:</span>
-   <span id="4749">All images are optimized to be rendered in the browser. WebP format could be used for critical pages (like Homepage).</span>
-   <span id="9ece">🛠 <a href="https://github.com/imagemin/imagemin" class="markup--anchor markup--li-anchor">Imagemin</a></span>
-   <span id="4d2d">🛠 Use <a href="https://imageoptim.com/" class="markup--anchor markup--li-anchor">ImageOptim</a> to optimise your images for free.</span>
-   <span id="1ffb">🛠 Use <a href="https://kraken.io/web-interface" class="markup--anchor markup--li-anchor">Kraken.io</a> awesome alternative for both png and jpg optimization. Up to 1mb per files on free plan.</span>
-   <span id="fabe">Picture/Srcset:</span>
-   <span id="3759">You use picture/srcset to provide the most appropriate image for the current viewport of the user.</span>
-   <span id="c25a">📖 <a href="https://www.sitepoint.com/how-to-build-responsive-images-with-srcset/" class="markup--anchor markup--li-anchor">How to Build Responsive Images with srcset</a></span>
-   <span id="2c59">Retina:</span>
-   <span id="1668">You provide layout images 2x or 3x, support retina display.</span>
-   <span id="4ad1">Sprite:</span>
-   <span id="f450">Small images are in a sprite file (in the case of icons, they can be in an SVG sprite image).</span>
-   <span id="68cf">Width and Height:</span>
-   <span id="f508">Set `width` and `height` attributes on `<img>` if the final rendered image size is known (can be omitted for CSS sizing).</span>
-   <span id="b7a4">Alternative text:</span>
-   <span id="c53e">All `<img>` have an alternative text which describe the image visually.</span>
-   <span id="38ad">📖 <a href="https://axesslab.com/alt-texts/" class="markup--anchor markup--li-anchor">Alt-texts: The Ultimate Guide</a></span>
-   <span id="2ebf">Lazy loading:</span>
-   <span id="4c4d">Images are lazyloaded (A noscript fallback is always provided).</span>

------------------------------------------------------------------------

### JavaScript

### Best practices

-   <span id="ff02">JavaScript Inline:</span>
-   <span id="a7bb">You don’t have any JavaScript code inline (mixed with your HTML code).</span>
-   <span id="db91">Concatenation:</span>
-   <span id="f4c3">JavaScript files are concatenated.</span>
-   <span id="f73c">Minification:</span>
-   <span id="17cc">JavaScript files are minified (you can add the `.min` suffix).</span>
-   <span id="61e8">📖 <a href="https://developers.google.com/speed/docs/insights/MinifyResources" class="markup--anchor markup--li-anchor">Minify Resources (HTML, CSS, and JavaScript)</a></span>
-   <span id="a12b">JavaScript security:</span>
-   <span id="7311">📖 <a href="https://www.owasp.org/index.php/DOM_based_XSS_Prevention_Cheat_Sheet#Guidelines_for_Developing_Secure_Applications_Utilizing_JavaScript" class="markup--anchor markup--li-anchor">Guidelines for Developing Secure Applications Utilizing JavaScript</a></span>
-   <span id="50d4">`noscript` tag:</span>
-   <span id="e359">Use `<noscript>` tag in the HTML body if a script type on the page is unsupported or if scripting is currently turned off in the browser. This will be helpful in client-side rendering heavy apps such as React.js, see <a href="https://webdesign.tutsplus.com/tutorials/quick-tip-dont-forget-the-noscript-element--cms-25498" class="markup--anchor markup--li-anchor">examples</a>.</span>

<!-- -->

    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>

-   <span id="aa2e">Non-blocking:</span>
-   <span id="6d0f">JavaScript files are loaded asynchronously using `async` or deferred using `defer` attribute.</span>
-   <span id="3669">📖 <a href="https://developers.google.com/speed/docs/insights/BlockingJS" class="markup--anchor markup--li-anchor">Remove Render-Blocking JavaScript</a></span>
-   <span id="0479">Modernizr:</span>
-   <span id="4d90">If you need to target some specific features you can use a custom Modernizr to add classes in your `<html>` tag.</span>
-   <span id="defa">🛠 <a href="https://modernizr.com/download?setclasses" class="markup--anchor markup--li-anchor">Customize your Modernizr</a></span>

### JavaScript testing

-   <span id="854d">ESLint:</span>
-   <span id="f929">No errors are flagged by ESLint (based on your configuration or standards rules).</span>
-   <span id="42de">📖 <a href="https://eslint.org/" class="markup--anchor markup--li-anchor">ESLint — The pluggable linting utility for JavaScript and JSX</a></span>

------------------------------------------------------------------------

### Security

### Scan and check your web site

-   <span id="135a"><a href="https://securityheaders.io/" class="markup--anchor markup--li-anchor">securityheaders.io</a></span>
-   <span id="6bc3"><a href="https://observatory.mozilla.org/" class="markup--anchor markup--li-anchor">Observatory by Mozilla</a></span>
-   <span id="56f2"><a href="https://asafaweb.com/" class="markup--anchor markup--li-anchor">ASafaWeb — Automated Security Analyser for ASP.NET Websites</a></span>

### Best practices

-   <span id="6393">HTTPS:</span>
-   <span id="4c18">HTTPS is used on every pages and for all external content (plugins, images…).</span>
-   <span id="4576">🛠 <a href="https://letsencrypt.org/" class="markup--anchor markup--li-anchor">Let’s Encrypt — Free SSL/TLS Certificates</a></span>
-   <span id="54cf">🛠 <a href="https://www.ssllabs.com/ssltest/index.html" class="markup--anchor markup--li-anchor">Free SSL Server Test</a></span>
-   <span id="fc12">📖 <a href="http://caniuse.com/#feat=stricttransportsecurity" class="markup--anchor markup--li-anchor">Strict Transport Security</a></span>
-   <span id="5196">HTTP Strict Transport Security (HSTS):</span>
-   <span id="88ba">The HTTP header is set to ‘Strict-Transport-Security’.</span>
-   <span id="30a8">🛠 <a href="https://hstspreload.org/" class="markup--anchor markup--li-anchor">Check HSTS preload status and eligibility</a></span>
-   <span id="da47">📖 <a href="https://www.owasp.org/index.php/HTTP_Strict_Transport_Security_Cheat_Sheet" class="markup--anchor markup--li-anchor">HTTP Strict Transport Security Cheat Sheet — OWASP</a></span>
-   <span id="47d4">📖 <a href="https://www.owasp.org/index.php/Transport_Layer_Protection_Cheat_Sheet" class="markup--anchor markup--li-anchor">Transport Layer Protection Cheat Sheet — OWASP</a></span>
-   <span id="e67c">Cross Site Request Forgery (CSRF):</span>
-   <span id="d86c">You ensure that requests made to your server-side are legitimate and originate from your website / app to prevent CSRF attacks.</span>
-   <span id="4295">📖 <a href="https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29_Prevention_Cheat_Sheet" class="markup--anchor markup--li-anchor">Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet — OWASP</a></span>
-   <span id="fe82">Cross Site Scripting (XSS):</span>
-   <span id="075d">Your page or website is free from XSS possible issues.</span>
-   <span id="1bf3">📖 <a href="https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet" class="markup--anchor markup--li-anchor">XSS (Cross Site Scripting) Prevention Cheat Sheet — OWASP</a></span>
-   <span id="b268">📖 <a href="https://www.owasp.org/index.php/DOM_based_XSS_Prevention_Cheat_Sheet" class="markup--anchor markup--li-anchor">DOM based XSS Prevention Cheat Sheet — OWASP</a></span>
-   <span id="d9b7">Content Type Options:</span>
-   <span id="3047">Prevents Google Chrome and Internet Explorer from trying to mime-sniff the content-type of a response away from the one being declared by the server.</span>
-   <span id="a12f">📖 <a href="https://scotthelme.co.uk/hardening-your-http-response-headers/#x-content-type-options" class="markup--anchor markup--li-anchor">X-Content-Type-Options — Scott Helme</a></span>
-   <span id="f7a8">X-Frame-Options (XFO):</span>
-   <span id="f638">Protects your visitors against clickjacking attacks.</span>
-   <span id="9131">📖 <a href="https://scotthelme.co.uk/hardening-your-http-response-headers/#x-frame-options" class="markup--anchor markup--li-anchor">X-Frame-Options — Scott Helme</a></span>
-   <span id="8d0f">📖 <a href="https://tools.ietf.org/html/rfc7034" class="markup--anchor markup--li-anchor">RFC7034 — HTTP Header Field X-Frame-Options</a></span>
-   <span id="2597">Content Security Policy:</span>
-   <span id="1203">Defines how content is loaded on your site and from where it is permitted to be loaded. Can also be used to protect against clickjacking attacks.</span>
-   <span id="8159">📖 <a href="https://scotthelme.co.uk/content-security-policy-an-introduction/" class="markup--anchor markup--li-anchor">Content Security Policy — An Introduction — Scott Helme</a></span>
-   <span id="38f4">📖 <a href="https://scotthelme.co.uk/csp-cheat-sheet/" class="markup--anchor markup--li-anchor">CSP Cheat Sheet — Scott Helme</a></span>
-   <span id="67b0">📖 <a href="https://www.owasp.org/index.php/Content_Security_Policy_Cheat_Sheet" class="markup--anchor markup--li-anchor">CSP Cheat Sheet — OWASP</a></span>
-   <span id="bace">📖 <a href="https://content-security-policy.com/" class="markup--anchor markup--li-anchor">Content Security Policy Reference</a></span>

------------------------------------------------------------------------

### Performance

### Best practices

-   <span id="3e32">Page weight:</span>
-   <span id="d59b">The weight of each page is between 0 and 500 KB.</span>
-   <span id="270c">🛠 <a href="https://tools.pingdom.com/" class="markup--anchor markup--li-anchor">Website Page Analysis</a></span>
-   <span id="87d1">📖 <a href="https://evilmartians.com/chronicles/size-limit-make-the-web-lighter" class="markup--anchor markup--li-anchor">Size Limit: Make the Web lighter</a></span>
-   <span id="6f5e">Minified HTML:</span>
-   <span id="9891">Your HTML is minified.</span>
-   <span id="b789">Lazy loading:</span>
-   <span id="a23c">Images, scripts and CSS need to be lazy loaded to improve the response time of the current page (See details in their respective sections).</span>
-   <span id="687f">Cookie size:</span>
-   <span id="0006">If you are using cookies be sure each cookie doesn’t exceed 4096 bytes and your domain name doesn’t have more than 20 cookies.</span>
-   <span id="d89a">📖 <a href="https://tools.ietf.org/html/rfc6265" class="markup--anchor markup--li-anchor">Cookie specification: RFC 6265</a></span>
-   <span id="129b">📖 <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies" class="markup--anchor markup--li-anchor">Cookies</a></span>
-   <span id="0765">🛠 <a href="http://browsercookielimits.squawky.net/" class="markup--anchor markup--li-anchor">Browser Cookie Limits</a></span>
-   <span id="b8f1">Third party components:</span>
-   <span id="6547">Third party iframes or components relying on external JS (like sharing buttons) are replaced by static components when possible, thus limiting calls to external APIs and keeping your users activity private.</span>
-   <span id="9ef5">🛠 <a href="https://simplesharingbuttons.com/" class="markup--anchor markup--li-anchor">Simple sharing buttons generator</a></span>

### Preparing upcoming requests

-   <span id="9122">📖 <a href="https://css-tricks.com/prefetching-preloading-prebrowsing/" class="markup--anchor markup--li-anchor">Explanation of the following techniques</a></span>
-   <span id="f1a7">DNS resolution:</span>
-   <span id="34c1">DNS of third-party services that may be needed are resolved in advance during idle time using `dns-prefetch`.</span>

<!-- -->

    <link rel="dns-prefetch" href="https://example.com">

-   <span id="2948">Preconnection:</span>
-   <span id="2012">DNS lookup, TCP handshake and TLS negotiation with services that will be needed soon is done in advance during idle time using `preconnect`.</span>

<!-- -->

    <link rel="preconnect" href="https://example.com">

-   <span id="ecaa">Prefetching:</span>
-   <span id="cd03">Resources that will be needed soon (e.g. lazy loaded images) are requested in advance during idle time using `prefetch`.</span>

<!-- -->

    <link rel="prefetch" href="image.png">

-   <span id="7940">Preloading:</span>
-   <span id="93bc">Resources needed in the current page (e.g. scripts placed at the end of `<body>`) in advance using `preload`.</span>

<!-- -->

    <link rel="preload" href="app.js">

-   <span id="51c3">📖 <a href="https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf" class="markup--anchor markup--li-anchor">Difference between prefetch and preload</a></span>

### Performance testing

-   <span id="0ec3">Google PageSpeed:</span>
-   <span id="f67f">All your pages were tested (not only the homepage) and have a score of at least 90/100.</span>
-   <span id="7275">🛠 <a href="https://developers.google.com/speed/pagespeed/insights/" class="markup--anchor markup--li-anchor">Google PageSpeed</a></span>
-   <span id="0e79">🛠 <a href="https://testmysite.withgoogle.com/" class="markup--anchor markup--li-anchor">Test your mobile speed with Google</a></span>
-   <span id="58d7">🛠 <a href="https://www.webpagetest.org/" class="markup--anchor markup--li-anchor">WebPagetest — Website Performance and Optimization Test</a></span>
-   <span id="f424">🛠 <a href="https://gtmetrix.com/" class="markup--anchor markup--li-anchor">GTmetrix — Website speed and performance optimization</a></span>

------------------------------------------------------------------------

### Accessibility

> *Notes: You can watch the playlist* <a href="https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g" class="markup--anchor markup--blockquote-anchor"><em>A11ycasts with Rob Dodson</em></a> *📹*

### Best practices

-   <span id="413a">Progressive enhancement:</span>
-   <span id="f0a8">Major functionality like main navigation and search should work without JavaScript enabled.</span>
-   <span id="f61d">📖 <a href="https://www.youtube.com/watch?v=kBmvq2cE0D8" class="markup--anchor markup--li-anchor">Enable / Disable JavaScript in Chrome Developer Tools</a></span>
-   <span id="3609">Color contrast:</span>
-   <span id="e4a4">Color contrast should at least pass WCAG AA (AAA for mobile).</span>
-   <span id="36eb">🛠 <a href="https://leaverou.github.io/contrast-ratio/" class="markup--anchor markup--li-anchor">Contrast ratio</a></span>

#### Headings

-   <span id="4df8">H1:</span>
-   <span id="7b0d">All pages have an H1 which is not the title of the website.</span>
-   <span id="7000">Headings:</span>
-   <span id="3d70">Headings should be used properly and in the right order (H1 to H6).</span>
-   <span id="0418">📹 <a href="https://www.youtube.com/watch?v=vAAzdi1xuUY&amp;index=9&amp;list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g" class="markup--anchor markup--li-anchor">Why headings and landmarks are so important — A11ycasts #18</a></span>

#### Landmarks

-   <span id="e12f">Role banner:</span>
-   <span id="7856">`<header>` has `role="banner"`.</span>
-   <span id="eab5">Role navigation:</span>
-   <span id="a89e">`<nav>` has `role="navigation"`.</span>
-   <span id="c008">Role main:</span>
-   <span id="b6bb">`<main>` has `role="main"`.</span>
-   <span id="c16d">📖 <a href="https://www.w3.org/WAI/GL/wiki/Using_ARIA_landmarks_to_identify_regions_of_a_page" class="markup--anchor markup--li-anchor">Using ARIA landmarks to identify regions of a page</a></span>
-   <span id="9c48">📖 <a href="https://www.w3.org/TR/wai-aria/roles#roles_categorization" class="markup--anchor markup--li-anchor">ARIA roles categorization</a></span>

### Semantics

-   <span id="376c">Specific HTML5 input types are used:</span>
-   <span id="ed4c">This is especially important for mobile devices that show customized keypads and widgets for different types.</span>
-   <span id="c9cb">📖 <a href="http://mobileinputtypes.com/" class="markup--anchor markup--li-anchor">Mobile Input Types</a></span>

### Form

-   <span id="904c">Label:</span>
-   <span id="550d">A label is associated with each input form element. In case a label can’t be displayed, use `aria-label` instead.</span>
-   <span id="2646">📖 <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute" class="markup--anchor markup--li-anchor">Using the aria-label attribute — MDN</a></span>

### Accessibility testing

-   <span id="236a">Accessibility standards testing:</span>
-   <span id="e36a">Use the WAVE tool to test if your page respects the accessibility standards.</span>
-   <span id="7713">🛠 <a href="http://wave.webaim.org/" class="markup--anchor markup--li-anchor">Wave testing</a></span>
-   <span id="09b5">Keyboard navigation:</span>
-   <span id="b387">Test your website using only your keyboard in a previsible order. All interactive elements are reachable and usable.</span>
-   <span id="1230">Screen-reader:</span>
-   <span id="dd30">All pages were tested in a screen-reader (VoiceOver, ChromeVox, NVDA or Lynx).</span>
-   <span id="00ee">Focus style:</span>
-   <span id="5728">If the focus is disabled, it is replaced by visible state in CSS.</span>
-   <span id="fe8b">📹 <a href="https://www.youtube.com/watch?v=srLRSQg6Jgg&amp;index=5&amp;list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g" class="markup--anchor markup--li-anchor">Managing Focus — A11ycasts #22</a></span>

------------------------------------------------------------------------

### SEO

-   <span id="3474">Google Analytics:</span>
-   <span id="8f47">Google Analytics is installed and correctly configured.</span>
-   <span id="3776">🛠 <a href="https://analytics.google.com/analytics/web/" class="markup--anchor markup--li-anchor">Google Analytics</a></span>
-   <span id="60f6">🛠 <a href="http://www.gachecker.com/" class="markup--anchor markup--li-anchor">GA Checker (and others)</a></span>
-   <span id="4e02">Headings logic:</span>
-   <span id="70db">Heading text helps to understand the content in the current page.</span>
-   <span id="d27f">🛠 <a href="http://khan.github.io/tota11y/#Try-it" class="markup--anchor markup--li-anchor">Tota11y, tab Headings</a></span>
-   <span id="719d">sitemap.xml:</span>
-   <span id="136b">A sitemap.xml exists and was submitted to Google Search Console (previously Google Webmaster Tools).</span>
-   <span id="064b">🛠 <a href="https://websiteseochecker.com/html-sitemap-generator/" class="markup--anchor markup--li-anchor">Sitemap generator</a></span>
-   <span id="8120">robots.txt:</span>
-   <span id="1d84">The robots.txt is not blocking webpages.</span>
-   <span id="7247">📖 <a href="https://varvy.com/robottxt.html" class="markup--anchor markup--li-anchor">The robots.txt file</a></span>
-   <span id="2de3">🛠 Test your robots.txt with <a href="https://www.google.com/webmasters/tools/robots-testing-tool" class="markup--anchor markup--li-anchor">Google Robots Testing Tool</a></span>
-   <span id="e764">Structured Data:</span>
-   <span id="3360">Pages using structured data are tested and are without errors. Structured data helps crawlers understand the content in the current page.</span>
-   <span id="cc48">📖 <a href="https://developers.google.com/search/docs/guides/intro-structured-data" class="markup--anchor markup--li-anchor">Introduction to Structured Data — Search — Google Developers</a></span>
-   <span id="227a">📖 <a href="https://rdfa.info/" class="markup--anchor markup--li-anchor">RDFa — Linked Data in HTML</a></span>
-   <span id="a562">📖 <a href="https://json-ld.org/" class="markup--anchor markup--li-anchor">JSON-LD</a></span>
-   <span id="9a99">📖 <a href="https://www.w3.org/TR/microdata/" class="markup--anchor markup--li-anchor">Microdata</a></span>
-   <span id="96d9">🛠 Test your page with the <a href="https://developers.google.com/structured-data/testing-tool/" class="markup--anchor markup--li-anchor">Structured Data Testing Tool</a></span>
-   <span id="fb7b">🛠 Complete list of vocabularies that can be used as structured data. <a href="http://schema.org/docs/full.html" class="markup--anchor markup--li-anchor">Schema.org Full Hierarchy</a></span>
-   <span id="6ff0">Sitemap HTML:</span>
-   <span id="3740">An HTML sitemap is provided and is accessible via a link in the footer of your website.</span>
-   <span id="59ef">📖 <a href="https://support.google.com/webmasters/answer/183668?hl=en" class="markup--anchor markup--li-anchor">Sitemap guidelines — Google Support</a></span>
-   <span id="91bb">Pagination link tags:</span>
-   <span id="3e79">Provide `rel="prev"` and `rel="next"` to indicate paginated content.</span>
-   <span id="4145">🛠 <a href="https://technicalseo.com/seo-tools/rel-prev-next/" class="markup--anchor markup--li-anchor">Pagination (rel=”prev/next”) Testing Tool</a></span>
-   <span id="fa52">📖 <a href="https://support.google.com/webmasters/answer/1663744?hl=en" class="markup--anchor markup--li-anchor">Pagination guidelines — Google Support</a></span>

<!-- -->

    <!-- Example: Pagination link tags for page 2 of a paginated list -->
    <link rel="prev" href="https://example.com/?page=1">
    <link rel="next" href="https://example.com/?page=3">

------------------------------------------------------------------------

### SEO Advice From Google:

### Help Google find your pages

-   <span id="6fe9">Ensure that all pages on the site can be reached by a link from another findable page. The referring link should include either text or, for images, an alt attribute, that is relevant to the target page. Crawlable links are `<a>` <a href="https://developers.google.com/search/docs/advanced/guidelines/links-crawlable" class="markup--anchor markup--li-anchor">tags with an href attribute</a>.</span>
-   <span id="f878">Provide a <a href="http://sitemaps.org/" class="markup--anchor markup--li-anchor">sitemap file</a> with links that point to the important pages on your site. Also provide a page with a human-readable list of links to these pages (sometimes called a site index or site map page).</span>
-   <span id="2ee0">Limit the number of links on a page to a reasonable number (a few thousand at most).</span>
-   <span id="9235">Make sure that your web server correctly supports the `If-Modified-Since` HTTP header. This feature directs your web server to tell Google if your content has changed since we last crawled your site. Supporting this feature saves you bandwidth and overhead.</span>
-   <span id="a839">Use the robots.txt file on your web server to manage your crawling budget by preventing crawling of infinite spaces such as search result pages. Keep your robots.txt file up to date. <a href="https://developers.google.com/search/docs/advanced/robots/robots-faq" class="markup--anchor markup--li-anchor">Learn how to manage crawling with the robots.txt file</a>. Test the coverage and syntax of your robots.txt file using the <a href="https://www.google.com/webmasters/tools/robots-testing-tool" class="markup--anchor markup--li-anchor">robots.txt Tester</a>.</span>

**Ways to help Google find your site:**

-   <span id="417a"><a href="https://developers.google.com/search/docs/advanced/crawling/ask-google-to-recrawl" class="markup--anchor markup--li-anchor">Ask Google to crawl your pages</a>.</span>
-   <span id="2ba7">Make sure that any sites that should know about your pages are aware your site is online.</span>

### Help Google understand your pages

-   <span id="6069">Create a useful, information-rich site, and write pages that clearly and accurately describe your content.</span>
-   <span id="16eb">Think about the words users would type to find your pages, and make sure that your site actually includes those words within it.</span>
-   <span id="5f2b">Ensure that your `<title>` elements and `alt` attributes are descriptive, specific, and accurate.</span>
-   <span id="86c8">Design your site to have a clear conceptual page hierarchy.</span>
-   <span id="aed5">Follow our recommended best practices for <a href="https://developers.google.com/search/docs/advanced/guidelines/google-images" class="markup--anchor markup--li-anchor">images</a>, <a href="https://developers.google.com/search/docs/advanced/guidelines/video" class="markup--anchor markup--li-anchor">video</a>, and <a href="https://developers.google.com/search/docs/guides/intro-structured-data" class="markup--anchor markup--li-anchor">structured data</a>.</span>
-   <span id="67f4">When using a content management system (for example, Wix or WordPress), make sure that it creates pages and links that search engines can crawl.</span>
-   <span id="5fcd">To help Google fully understand your site’s contents, allow all site assets that would significantly affect page rendering to be crawled: for example, CSS and JavaScript files that affect the understanding of the pages. The Google indexing system renders a web page as the user would see it, including images, CSS, and JavaScript files. To see which page assets that Googlebot cannot crawl use the <a href="https://support.google.com/webmasters/answer/9012289" class="markup--anchor markup--li-anchor">URL Inspection tool</a>; to debug directives in your robots.txt file, use the <a href="https://support.google.com/webmasters/answer/6062598" class="markup--anchor markup--li-anchor">robots.txt Tester</a> tool.</span>
-   <span id="b8ef">Allow search bots to crawl your site without session IDs or URL parameters that track their path through the site. These techniques are useful for tracking individual user behavior, but the access pattern of bots is entirely different. Using these techniques may result in incomplete indexing of your site, as bots may not be able to eliminate URLs that look different but actually point to the same page.</span>
-   <span id="e5c6">Make your site’s important content visible by default. Google is able to crawl HTML content hidden inside navigational elements such as tabs or expanding sections, however we consider this content less accessible to users, and believe that you should make your most important information visible in the default page view.</span>
-   <span id="58bf">Make a reasonable effort to ensure that advertisement links on your pages do not affect search engine rankings. For example, use <a href="https://developers.google.com/search/docs/advanced/robots/intro" class="markup--anchor markup--li-anchor">robots.txt</a>, `rel="nofollow"`, or `rel="sponsored"` to prevent advertisement links from being followed by a crawler.</span>

### Help visitors use your pages

-   <span id="76dc">Try to use text instead of images to display important names, content, or links. If you must use images for textual content, use the `alt` attribute to include a few words of descriptive text.</span>
-   <span id="d45e">Ensure that all links go to live web pages. Use <a href="https://validator.w3.org/" class="markup--anchor markup--li-anchor">valid HTML</a>.</span>
-   <span id="8b66">Optimize your page loading times. Fast sites make users happy and improve the overall quality of the web (especially for those users with slow Internet connections). Google recommends that you use tools like <a href="https://developers.google.com/speed/pagespeed/insights/" class="markup--anchor markup--li-anchor">PageSpeed Insights</a> and <a href="https://www.webpagetest.org/" class="markup--anchor markup--li-anchor">Webpagetest.org</a> to test the performance of your page.</span>
-   <span id="5f39">Design your site for all device types and sizes, including desktops, tablets, and smartphones. Use the <a href="https://search.google.com/test/mobile-friendly" class="markup--anchor markup--li-anchor">Mobile-Friendly Test</a> to test how well your pages work on mobile devices, and get feedback on what needs to be fixed.</span>
-   <span id="5f9b">Ensure that your site <a href="https://developers.google.com/search/docs/advanced/guidelines/browser-compatibility" class="markup--anchor markup--li-anchor">appears correctly in different browsers</a>.</span>
-   <span id="717b">If possible, <a href="https://developers.google.com/search/docs/advanced/security/https" class="markup--anchor markup--li-anchor">secure your site’s connections</a> with HTTPS. Encrypting interactions between the user and your website is a good practice for communication on the web.</span>
-   <span id="4156">Ensure that your pages are useful for readers with visual impairments, for example, by testing usability with a screen-reader.</span>

### Basic principles

-   <span id="0251">Make pages primarily for users, not for search engines.</span>
-   <span id="f565">Don’t deceive your users.</span>
-   <span id="5f8a">Avoid tricks intended to improve search engine rankings. A good rule of thumb is whether you’d feel comfortable explaining what you’ve done to a website that competes with you, or to a Google employee. Another useful test is to ask, “Does this help my users? Would I do this if search engines didn’t exist?”</span>
-   <span id="9acc">Think about what makes your website unique, valuable, or engaging. Make your website stand out from others in your field.</span>

### Specific guidelines

**Avoid** the following techniques:

-   <span id="2686"><a href="https://developers.google.com/search/docs/advanced/guidelines/auto-gen-content" class="markup--anchor markup--li-anchor">Automatically generated content</a></span>
-   <span id="a921">Participating in <a href="https://developers.google.com/search/docs/advanced/guidelines/link-schemes" class="markup--anchor markup--li-anchor">link schemes</a></span>
-   <span id="bbd9">Creating pages with <a href="https://support.google.com/webmasters/answer/66361" class="markup--anchor markup--li-anchor">little or no original content</a></span>
-   <span id="7ddf"><a href="https://developers.google.com/search/docs/advanced/guidelines/cloaking" class="markup--anchor markup--li-anchor">Cloaking</a></span>
-   <span id="e9b8"><a href="https://developers.google.com/search/docs/advanced/guidelines/sneaky-redirects" class="markup--anchor markup--li-anchor">Sneaky redirects</a></span>
-   <span id="47d2"><a href="https://developers.google.com/search/docs/advanced/guidelines/hidden-text-links" class="markup--anchor markup--li-anchor">Hidden text or links</a></span>
-   <span id="7ae2"><a href="https://developers.google.com/search/docs/advanced/guidelines/doorway-pages" class="markup--anchor markup--li-anchor">Doorway pages</a></span>
-   <span id="98d8"><a href="https://developers.google.com/search/docs/advanced/guidelines/scraped-content" class="markup--anchor markup--li-anchor">Scraped content</a></span>
-   <span id="156f">Participating in <a href="https://developers.google.com/search/docs/advanced/guidelines/affiliate-programs" class="markup--anchor markup--li-anchor">affiliate programs without adding sufficient value</a></span>
-   <span id="42e4">Loading pages with <a href="https://developers.google.com/search/docs/advanced/guidelines/irrelevant-keywords" class="markup--anchor markup--li-anchor">irrelevant keywords</a></span>
-   <span id="f583">Creating pages with <a href="https://developers.google.com/search/docs/advanced/guidelines/malicious-behavior" class="markup--anchor markup--li-anchor">malicious behavior</a>, such as phishing or installing viruses, trojans, or other badware</span>
-   <span id="777a">Abusing <a href="https://developers.google.com/search/docs/guides/sd-policies" class="markup--anchor markup--li-anchor">structured data</a> markup</span>
-   <span id="6c9f">Sending <a href="https://developers.google.com/search/docs/advanced/guidelines/automated-queries" class="markup--anchor markup--li-anchor">automated queries</a> to Google</span>

**Follow** good practices:

-   <span id="68a7">Monitoring your site for <a href="https://developers.google.com/search/docs/advanced/security/what-is-hacked" class="markup--anchor markup--li-anchor">hacking</a> and removing hacked content as soon as it appears</span>
-   <span id="8141">Preventing and removing <a href="https://developers.google.com/search/docs/advanced/guidelines/user-gen-spam" class="markup--anchor markup--li-anchor">user-generated spam</a> on your site</span>

If your site violates one or more of these guidelines, then Google may take <a href="https://support.google.com/webmasters/answer/9044175" class="markup--anchor markup--p-anchor">manual action</a> against it. Once you have remedied the problem, you can <a href="https://support.google.com/webmasters/answer/35843" class="markup--anchor markup--p-anchor">submit your site for reconsideration</a>.

------------------------------------------------------------------------

### Website Launch Checklist:

### Website design checklist

It’s all too easy to miss (or break) something during the many back-and-forths, client feedback sessions, and other design iterations you go through. That’s why we created the design checklist below will help you go back and check for any design mistakes.

To start, be sure to check your:

-   <span id="1b13">Spacing: Is spacing consistent across the site (i.e., did you stick to that 8px grid, or let a rogue 18px in there)? Do all elements have enough breathing room?</span>
-   <span id="589b">Colors: Have you stuck to a consistent, harmonious color palette? Are all instances of the brand blue *actually* the brand blue?</span>
-   <span id="dcfc">Shadows: If you used drop shadows, is the light source consistent for each and every one? Did you use the same blur, opacity, and spread values?</span>
-   <span id="021b">Typography: Is your font stack logical and consistent (i.e., is there a reason that element is set in a sans)? Are your heading sizes consistent? Have you used proper (not faux) italics and bolding? Do all text links look right? Is all text both legible and readable?</span>
-   <span id="fbb2">Imagery: Do any images look blurry, pixelated, or otherwise funky? Are any images broken or crazily heavy in terms of file size? Do all *non-decorative* images have alt tags?</span>
-   <span id="4760">Logo: It’s (usually) just another image, but it’s so important it warrants its own step. Is it the latest version? Is it crisp (not blurry or pixelated)?</span>

Once you’ve made these initial visual checks, you’ll want to ensure that your site’s appearance is consistent and functional on any screen.

### Cross-browser appearance

Different browsers may render your website in different ways, so it’s important to test your site in different browsers. Take a look at <a href="http://www.w3schools.com/browsers/browsers_stats.asp" class="markup--anchor markup--p-anchor">W3’s browser stats</a> to see where you should focus your testing. (Though if you’re working on a redesign, browser-usage stats will be more useful.)

During this process (and the next, in multi-device testing) you’ll want to make sure your layouts, typography, navigation, and other design elements are displaying properly.

The elements that tend to vary most across browsers, and therefore are most important to check, are:

-   <span id="f7ff">Fonts</span>
-   <span id="32b8">Colors/gradients</span>
-   <span id="5871">Images</span>
-   <span id="be77">Logo</span>

### Cross-device appearance

<figure><img src="https://cdn-images-1.medium.com/max/800/0*zXLmWvXkMI5Wv2LF.jpeg" class="graf-image" /></figure>Make sure your site looks and performs beautifully on any device.

There have never been more web-capable devices around, and with that comes a staggering array of screen sizes. Done right, your site *should* perform well on any screen size, but be sure to double check. (You are a perfectionist after all, right?)

This is also where mobile navigation is crucial. Be sure to test out the user’s ability to navigate around the website on a touchscreen device, and make sure nothing gets lost in device transition.

In Webflow, we make it easy for you to test the most popular devices and preview your website on almost any size, streamlining the process of cross-device testing all in one place. Of course, nothing replaces real-world testing on a variety of devices as small details may differ on the real device.

### Image optimization

Images and graphics are an important element of many websites, so you’ll want to make sure they display properly, especially on all those ultra-high-definition devices (like Apple’s Retina screens) out there.

The rule of thumb is to upload your image at twice the size it’ll display on your site. In some cases, you can upload two images: an actual-size version for lower-res devices, and another that’s twice the size for high-res devices.

Why? Because the heavier the image, the slower your page will load, and the worse your user experience will be (which also negatively affects SEO, which we’ll cover later on).

In Webflow, we automatically scale, compress, and optimize images for every device. Learn more about our <a href="https://webflow.com/feature/responsive-images" class="markup--anchor markup--p-anchor">responsive images feature or check out our more detailed</a> article on <a href="https://webflow.com/blog/how-to-boost-your-sites-performance" class="markup--anchor markup--p-anchor">image optimization</a>.

### Website functionality testing

Design and functionality go hand in hand, but I like to isolate the two to make sure the website both *looks* the way it was designed to and that it *performs* as intended.

### Integration testing

This one is super important, and can range from a quick task to a giant one, depending on how many integrations you have. Typically, I’ll create a list of integrations *as I add them* so I don’t forget later on.

Some common integrations to test might be:

-   <span id="54e1">Web forms (check that the forms work *and* that submitted information goes to the right place)</span>
-   <span id="5ad2">Autoresponders</span>
-   <span id="1079">Marketing emails (MailChimp, Constant Contact, HubSpot, drip campaigns, etc.)</span>
-   <span id="10e0">RSS feeds</span>
-   <span id="fe8e">Ecommerce</span>
-   <span id="5f3d">CRM</span>
-   <span id="dc4a">CMS</span>

### Link testing

This one can be a doozy, simply because most sites have dozens (if not hundreds) of links. More often than not, there’s a link or two that goes nowhere, and it’s important to find them before your end-users do.

Some of the most important links to check are:

-   <span id="fd34">Top navigation links</span>
-   <span id="88d4">Footer links</span>
-   <span id="d42d">Social media links (Facebook, Twitter, etc.)</span>
-   <span id="cde4">Logo (typically links to the home page)</span>

Rather than doing all this manually, I’d suggest trying a link crawler like the <a href="https://validator.w3.org/checklink" class="markup--anchor markup--p-anchor">W3C Link Checker</a>, the Chrome plugin <a href="https://chrome.google.com/webstore/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfglf?hl=en-GB" class="markup--anchor markup--p-anchor">Check My Links</a>, or <a href="http://www.screamingfrog.co.uk/seo-spider/" class="markup--anchor markup--p-anchor">Screaming Frog</a> (which is excellent for SEO audits, too).

### Content editing

<figure><img src="https://cdn-images-1.medium.com/max/800/0*HxnVQM9RoqyuTlLP.jpeg" class="graf-image" /></figure>Give the king its due.

Content is king, and the testing process should be fit for one. Typically this involves making sure that all content has been updated and approved. I can’t tell you how many websites I’ve found that *still* have a l*orem ipsum* paragraph somewhere.

Now, if you practice <a href="https://webflow.com/blog/content-first-design" class="markup--anchor markup--p-anchor">content-first design</a>, you should have final content already in place, so you can focus on more fine-toothed-comb review, like proofing for spelling and grammatical errors.

It’s also important to note here that it’s okay for content to be changed later on. Clients, team members, or you can always adjust text through a CMS. The main goal here is to ensure that your website content isn’t complete gibberish.

### Search engine optimization (SEO)

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Ukayn_ZyXfN-Wg-M.jpeg" class="graf-image" /></figure>Analyzing and optimizing your website *after* publishing is a never-ending process. And you need to consider semantic site structure from the get-go. But that doesn’t mean you won’t benefit from an SEO review before you hit publish.

There are multiple things that can be done to optimize your website for search engines.

### 1. Use proper semantic structure

Web crawlers (like Google’s bots) read through your website to get an understanding of your content, so that search engines know to display your website when people search for it. To help them crawl your site, you need to use language they’ll understand.

Historically, this has meant using the following semantic tags:

-   <span id="93f0">h1–h6 (heading tags)</span>
-   <span id="f999">p (paragraph tags)</span>
-   <span id="c0ab">ul/ol (unordered and ordered Lists)</span>

You can also go above and beyond with some new <a href="https://webflow.com/blog/html5-semantic-elements-and-webflow-the-essential-guide" class="markup--anchor markup--p-anchor">HTML5 semantic tags</a>:

-   <span id="4d08">&lt;article&gt;</span>
-   <span id="8074">&lt;aside&gt;</span>
-   <span id="9b75">&lt;details&gt;</span>
-   <span id="0652">&lt;figcaption&gt;</span>
-   <span id="721c">&lt;figure&gt;</span>
-   <span id="0cc5">&lt;footer&gt;</span>
-   <span id="2e07">&lt;header&gt;</span>
-   <span id="0e37">&lt;main&gt;</span>
-   <span id="6be6">&lt;mark&gt;</span>
-   <span id="1656">&lt;nav&gt;</span>
-   <span id="e390">&lt;section&gt;</span>
-   <span id="2858">&lt;summary&gt;</span>
-   <span id="d970">&lt;time&gt;</span>

These tags are important because they let you identify the content that’s most relevant to users. In short: making it easy for search engines makes it easier for users to find you.

### 2. Meta SEO tags

Aside from on-page structure, you can also help web crawlers understand your site by titling and describing your pages as a whole. We outline a few tips <a href="https://webflow.com/blog/website-seo" class="markup--anchor markup--p-anchor">on website SEO on our blog</a>, narrowed down to 2 main considerations below.

#### Meta title

Your page’s meta title translates to the linked text people will see on search engine result pages (SERPs). It also displays on the browser tab when people click through to your page. Some best practices include:

-   <span id="ed19">Define the page’s central topic</span>
-   <span id="c50a">Keep it under 70 characters in length (including spaces)</span>
-   <span id="e656">Use relevant keywords</span>
-   <span id="c74d">Put important keywords in the front of the title</span>

#### Meta description

The meta description is a short sentence (or two) that describes what your website has to offer. It will (sometimes) show up below your meta title in search results.

Some best practices include:

-   <span id="aec5">Include keywords that describe the page</span>
-   <span id="022c">Don’t go over 160 characters</span>
-   <span id="13ac">Write your description for people, not robots. (Google doesn’t use descriptions in web rankings).</span>

### 3. Open Graph settings

Social media has become a key element of SEO, so it’s crucial that you amplify this process by providing effective Open Graph information. Open Graph settings include three pieces of content: title, description, and an image.

The title and description follow the same rules as their SEO counterparts, but instead of showing up in search results, they appear as the default title and description on social media platforms when shared.

This is hugely beneficial because it lets you determine what the messaging (and image) will be when others share your website, helping you keep control of your brand.

------------------------------------------------------------------------

------------------------------------------------------------------------

### Tool List:

### Update:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*8luiRPwHqkyfqJfb" class="graf-image" /></figure><a href="https://caniuse.com/" class="markup--anchor markup--p-anchor">Can I UseProvides browser support information of front-end web technologies. Enter a search term to find out which browsers support it. <em>caniuse.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*t50QcwzBkwFuth4o" class="graf-image" /></figure><a href="https://html-online.com/editor/" class="markup--anchor markup--p-anchor">Online HTML EditorFree online HTML editor with WYSIWYG and source composer and instant preview and many useful built-in features <em>html-online.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*SnFMpz919DboGmr-" class="graf-image" /></figure><a href="https://html-cleaner.com/" class="markup--anchor markup--p-anchor">Web CleanerOnline HTML, CSS and JavaScript cleaner and code editors with syntax highlighting and customizable cleaning features. <em>html-cleaner.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*2KRsAowQaufNBiSs" class="graf-image" /></figure><a href="https://wordhtml.com/" class="markup--anchor markup--p-anchor">Word HTMLFree online Word and other rich text editor and HTML converter. Copy-paste your document in the editor and switch to HTML view to get the code. <em>wordhtml.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*A_wBLhhToeFlXuLg" class="graf-image" /></figure><a href="https://htmlcheatsheet.com/" class="markup--anchor markup--p-anchor">HTML Cheat SheetHTML, CSS, JavaScript and other web technology cheat sheet with interactive user interface. Grab the code you’re looking for quickly. <em>htmlcheatsheet.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*393SncqM14lxdAYX" class="graf-image" /></figure><a href="https://stackoverflow.com/" class="markup--anchor markup--p-anchor">Stack OverflowHuge programmer community where you usually don’t have to ask for help because probably someone has already answered the same question. <em>stackoverflow.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*veTjmob-9SlcsbfY" class="graf-image" /></figure><a href="https://www.w3schools.com/" class="markup--anchor markup--p-anchor">w3schoolsThe place to learn web technologies. There’s a big chance that this site gives the first search result when you’re looking for a HTML term. <em>w3schools.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*mcOcJb9_CRucZ8Hi" class="graf-image" /></figure><a href="https://developer.mozilla.org/" class="markup--anchor markup--p-anchor">Mozzilla Developer NetworkAn evolving learning platform for web technologies. Providing tutorials, developer tools and the information to easily build projects. <em>developer.mozilla.org</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*1A0zYmYhuNwVv-JD" class="graf-image" /></figure><a href="https://validator.w3.org/" class="markup--anchor markup--p-anchor">Markup ValidatorEnter the link of a webpage and the online tool will highlight the errors and warnings to fix in the source code. <em>validator.w3.org</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*qkBfaTWhlKlbtmsf" class="graf-image" /></figure><a href="https://github.com/" class="markup--anchor markup--p-anchor">GitHubCollaborate with other developers. Fork, send pull requests and manage all your public and private git repositories. <em>github.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*xuAlgMUU6yPrTp-y" class="graf-image" /></figure><a href="https://bitbucket.org/" class="markup--anchor markup--p-anchor">BitbucketWeb-based hosting service for development projects with version control system that makes it easy for you to collaborate with your team. <em>bitbucket.org</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*XiFbqTuL0zs0ZeWn" class="graf-image" /></figure><a href="https://dribbble.com/" class="markup--anchor markup--p-anchor">DribbleTell others what are you working on! Dribbble is a community of designers sharing screenshots of their work, process, and projects. <em>dribbble.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Z7rf2N2ZanFTyC24" class="graf-image" /></figure><a href="https://builtwith.com/" class="markup--anchor markup--p-anchor">Built WithEnter a domain name to find out who is hosting it, what CMS and framework is used and many other insights. <em>builtwith.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*JAKvGWN_Sd05kCwa" class="graf-image" /></figure><a href="https://htmltidy.net/" class="markup--anchor markup--p-anchor">HTML TidyAn online tool for checking and cleaning up HTML source files. Useful for finding and correcting errors in deeply nested HTML. <em>htmltidy.net</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*NobceO9h1WGoiAh5" class="graf-image" /></figure><a href="https://divtable.com/" class="markup--anchor markup--p-anchor">Div TableCreate or convert tables to responsive div tags with a few clicks. Use the provided CSS code to render the divs as table cells. <em>divtable.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*NFqBo-YVX2D2dtFh" class="graf-image" /></figure><a href="https://getbootstrap.com/" class="markup--anchor markup--p-anchor">BootstrapThe most popular free and open-source HTML, CSS, and JS framework makes front-end development easier and faster. <em>getbootstrap.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*rHGXn1mVlS3XJNCV" class="graf-image" /></figure><a href="https://htmlg.com/html-editor/" class="markup--anchor markup--p-anchor">HTMLGProfessional HTML editor. The free version is enough to do magic with your markup. Tag and attribute manager filter etc. <em>htmlg.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*zzrT9kYMdxxAHwb8" class="graf-image" /></figure><a href="https://developers.facebook.com/" class="markup--anchor markup--p-anchor">Facebook DevelopersDeveloper tools for login, share widget, analytics, monetization, messenger platform and more from the biggest social media site. <em>developers.facebook.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*CmpW2L4pVbESIh5J" class="graf-image" /></figure><a href="https://search.google.com/test/mobile-friendly" class="markup--anchor markup--p-anchor">Google Mobile-Friendly TestCheck if Google considers your web page mobile-friendly and adjust the deficiencies if there is any. <em>google.com/mobile-friendly</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*mKshXXHbzoStzvjr" class="graf-image" /></figure><a href="https://www.webpagetest.org/" class="markup--anchor markup--p-anchor">Webpage Speed TestAnalize the loading speed of a website from many available servers. The website creates a detailed analysis with screenshot and waterfall view. <em>webpagetest.org</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*sYIvpZGnkNhf-_XC" class="graf-image" /></figure><a href="https://netrenderer.com/" class="markup--anchor markup--p-anchor">NetRendererRenders quickly a webpage with the selected version of the old Internet Explorer web browser. NetRenderer goes back to IE version 5.5. <em>netrenderer.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*unIWXerRzCuxrzng" class="graf-image" /></figure><a href="http://browsershots.org/" class="markup--anchor markup--p-anchor">Browser ShotsCreate the screenshot of a webpage with many available browsers in various operating systems. <em>browsershots.org</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*bX3AIaYOSzadB8t6" class="graf-image" /></figure><a href="https://developers.google.com/speed/pagespeed/insights/" class="markup--anchor markup--p-anchor">PageSpeed InsightsThis tool by Google analyzes the submitted link from mobile and desktop to suggest you what to consider optimizing. <em>developers.google.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*v1hxqLrwUWL2dbBX" class="graf-image" /></figure><a href="https://fonts.google.com/" class="markup--anchor markup--p-anchor">Google FontsAn interactive directory of over 800 free hosted web fonts. It allows to optimize loading speed by including only what you need. <em>fonts.google.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*n4slofmCAW3PUOTn" class="graf-image" /></figure><a href="https://fontawesome.com/" class="markup--anchor markup--p-anchor">Font AwesomeThe most popular icon set based on CSS and LESS. The vector icons can be customized as text — size, color, drop shadow <em>fontawesome.io</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*_k2GQpr-IXMCfCbD" class="graf-image" /></figure><a href="https://rgbcolorcode.com/" class="markup--anchor markup--p-anchor">RGB Color CodesSearch and save color codes. Search by name or mix the RGB, HSV or CMYK values. Use the generated HTML/CSS codes. <em>rgbcolorcode.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*IH19Lh2SggZ5fNd_" class="graf-image" /></figure><a href="https://www.freepik.com/" class="markup--anchor markup--p-anchor">FreePicBrowse the large directory of free photos, vector arts, icons, illustrations, PSD files at FreePic. <em>freepik.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*g9YcUHOEU2oybdxl" class="graf-image" /></figure><a href="https://placehold.it/" class="markup--anchor markup--p-anchor">Placehold.it/Image placeholders with customizable size. Just add the image resolution after the domain name, for example placehold.it/400x250 <em>placehold.it</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*PSn8d5FL7_ngjJtU" class="graf-image" /></figure><a href="https://www.xml-sitemaps.com/" class="markup--anchor markup--p-anchor">XML SitemapsGenerate XML sitemaps and URL list of a website. The crawl limit is 500 pages. <em>xml-sitemaps.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*673487vh2n0o7Ub6" class="graf-image" /></figure><a href="http://www.brokenlinkcheck.com/" class="markup--anchor markup--p-anchor">Broken Link CheckerCrawl a domain for dead links. Locates both internal and external links pointing to 404 error pages. <em>brokenlinkcheck.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*NrZDjNLAdMcfK8Hy" class="graf-image" /></figure><a href="https://codepen.io/" class="markup--anchor markup--p-anchor">CodepenRegister to create, save and share HTML-CSS-JS code snippets and run them online. <em>codepen.io</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*1EEf11CeSLOOAAyu" class="graf-image" /></figure><a href="https://jsfiddle.net/" class="markup--anchor markup--p-anchor">JSFiddleSimilar to Codepen but this one doesn’t require registration. Test HTML-CSS-JS code online and save your small project in a shareable URL. <em>jsfiddle.net</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*2Aq8QOCznCo11ypk" class="graf-image" /></figure><a href="https://wordpress.org/" class="markup--anchor markup--p-anchor">WordPress.OrgMore than 10 million websites use this free and open-source content management system based on PHP-MySql. <em>wordpress.org</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*CJX2RwykNQ9O0RbL" class="graf-image" /></figure><a href="https://www.theblogstarter.com/" class="markup--anchor markup--p-anchor">Blog StarterA free guide that shows beginners how to start a blog using WordPress.org <em>theblogstarter.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*QSwvNaVB8SOgyDqp" class="graf-image" /></figure><a href="https://websitesetup.org/" class="markup--anchor markup--p-anchor">Website SetupA friendly guide about how to make a website, discussing the hosting, the CMS, domain name and promotion. <em>websitesetup.org</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*m7_ugygIICt4VLea" class="graf-image" /></figure><a href="https://www.expireddomains.net/" class="markup--anchor markup--p-anchor">Expired DomainsHunt for expired domain names or get inspiration for your next project. It’s worth registering for an account on this free website. <em>expireddomains.net</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*PNRVuj1GX-jgppng" class="graf-image" /></figure><a href="https://badhtml.com/" class="markup--anchor markup--p-anchor">Bad HTMLThe ugliest website on the internet, collecting bad UI/UX practices. A deterrent example about how not to build a website. <em>badhtml.com</em></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*66ncH3hioTVPIr2l" class="graf-image" /></figure><a href="https://1stwebdesigner.com/" class="markup--anchor markup--p-anchor">1st Web DesignerFollow this web design blog to find out what’s new in freelance, marketing, UX etc. categories. <em>1stwebdesigner.com</em></a>

------------------------------------------------------------------------

<a href="http://toptal.com/developers" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://toptal.com/developers"><strong>Hire Freelance Developers from the Top 3% - Toptal®</strong><br />
<em>Toptal is a marketplace for top developers, engineers, programmers, coders, architects, and consultants. Top companies…</em>toptal.com</a><a href="http://toptal.com/developers" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp?hl=en-US" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp?hl=en-US"><strong>Web Developer Checklist</strong><br />
<em>Analyses any web page for violations of best practices</em>chrome.google.com</a><a href="https://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp?hl=en-US" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://addons.mozilla.org/en-US/firefox/addon/webdeveloperchecklist/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://addons.mozilla.org/en-US/firefox/addon/webdeveloperchecklist/"><strong>Web Developer Checklist - Get this Extension for 🦊 Firefox (en-US)</strong><br />
<em>Download Web Developer Checklist for Firefox. Analyzes any web page for violations of best practices.</em>addons.mozilla.org</a><a href="https://addons.mozilla.org/en-US/firefox/addon/webdeveloperchecklist/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://validator.w3.org/checklink" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://validator.w3.org/checklink"><strong>Link Checker</strong><br />
<em>Check links and anchors in Web pages or full Web sites This Link Checker looks for issues in links, anchors and…</em>validator.w3.org</a><a href="https://validator.w3.org/checklink" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://en.wikipedia.org/wiki/Capitalization" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://en.wikipedia.org/wiki/Capitalization"><strong>Capitalization - Wikipedia</strong><br />
<em>Capitalization ( American English) or capitalisation ( British English) is writing a word with its first letter as a…</em>en.wikipedia.org</a><a href="https://en.wikipedia.org/wiki/Capitalization" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://en.wikipedia.org/wiki/Writing_style" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://en.wikipedia.org/wiki/Writing_style"><strong>Writing style - Wikipedia</strong><br />
<em>In literature, writing style is the manner of expressing thought in language characteristic of an individual, period…</em>en.wikipedia.org</a><a href="https://en.wikipedia.org/wiki/Writing_style" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://en.wikipedia.org/wiki/American_and_British_English_spelling_differences" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://en.wikipedia.org/wiki/American_and_British_English_spelling_differences"><strong>American and British English spelling differences - Wikipedia</strong><br />
<em>Despite the various English dialects spoken from country to country and within different regions of the same country…</em>en.wikipedia.org</a><a href="https://en.wikipedia.org/wiki/American_and_British_English_spelling_differences" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://browsershots.org/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://browsershots.org/"><strong>Check Browser Compatibility, Cross Platform Browser Test - Browsershots</strong><br />
<em>Browsershots makes screenshots of your web design in different operating systems and browsers. It is a free open-source…</em>browsershots.org</a><a href="http://browsershots.org/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://browserling.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://browserling.com/"><strong>Online cross-browser testing</strong><br />
<em>Browserling did a custom cross-browser testing solution for UK's National Health Service. Our application needs to…</em>browserling.com</a><a href="https://browserling.com/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.browserstack.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.browserstack.com/"><strong>Most Reliable App &amp; Cross Browser Testing Platform | BrowserStack</strong><br />
<em>Just played around with BrowserStack: Quite cool, instant access to a browser in a VM with dev tools. Big thanks to…</em>www.browserstack.com</a><a href="https://www.browserstack.com/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.lambdatest.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.lambdatest.com/"><strong>Most Powerful Cross Browser Testing Tool Online | LambdaTest</strong><br />
<em>Perform Live Interactive and Automated Cross Browser Testing on 2000+ Real Browsers and Operating Systems Online Run…</em>www.lambdatest.com</a><a href="https://www.lambdatest.com/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://crossbrowsertesting.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://crossbrowsertesting.com/"><strong>Cross Browser Testing Tool: 2050+ Real Browsers &amp; Devices</strong><br />
<em>We have estimated that by transitioning to automated front-end visual testing and by having easy access to so many…</em>crossbrowsertesting.com</a><a href="https://crossbrowsertesting.com/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://no-www.org/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://no-www.org/"><strong>www. is deprecated.</strong><br />
<em>Stay in touch! Dec 21, 2012 No-WWW now hasa a social media presence! Check us out on Twitter at @www_deprecated . We…</em>no-www.org</a><a href="http://no-www.org/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://www.yes-www.org/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.yes-www.org/"><strong>www. is not deprecated</strong><br />
<em>Ever since the first traditional media ads began to appear with Web site addresses in them 25 years ago, people have…</em>www.yes-www.org</a><a href="https://www.yes-www.org/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="http://madskristensen.net/post/url-rewrite-and-the-www-subdomain" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://madskristensen.net/post/url-rewrite-and-the-www-subdomain"><strong>URL rewrite and the www subdomain</strong><br />
<em>What's the address of your website? www.domain.com or domain.com? There are two camps on the subject of the www…</em>madskristensen.net</a><a href="http://madskristensen.net/post/url-rewrite-and-the-www-subdomain" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://www.google.com/webmasters/tools/mobile-friendly/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.google.com/webmasters/tools/mobile-friendly/"><strong>Mobile-Friendly Test - Google Search Console</strong><br />
<em>Is your web page mobile-friendly? Test how easily a visitor can use your page on a mobile device. Just enter a page URL…</em>www.google.com</a><a href="https://www.google.com/webmasters/tools/mobile-friendly/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://webdesign.tutsplus.com/articles/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://webdesign.tutsplus.com/articles/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972"><strong>Quick Tip: Don't Forget the Viewport Meta Tag</strong><br />
<em>I remember my maiden voyage into responsive web design; I'd used a classic grid, wrestled with a flexible layout, and…</em>webdesign.tutsplus.com</a><a href="https://webdesign.tutsplus.com/articles/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://html5tutorial.info/html5-contact.php" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://html5tutorial.info/html5-contact.php"><strong>Input Type : Email,URL,Phone</strong><br />
<em>Email, Phone number and Website url are the three most commonly used contact detail which has its unique input…</em>html5tutorial.info</a><a href="https://html5tutorial.info/html5-contact.php" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://diveintohtml5.info/forms.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://diveintohtml5.info/forms.html"><strong>Web Forms - Dive Into HTML5</strong><br />
<em>Edit description</em>diveintohtml5.info</a><a href="http://diveintohtml5.info/forms.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.browserstack.com/responsive" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.browserstack.com/responsive"><strong>Responsive Testing On 2000+ Real Devices &amp; Browsers | BrowserStack</strong><br />
<em>Frequently Asked Questions Why is responsive testing critical for your website? Responsive design enables a website to…</em>www.browserstack.com</a><a href="https://www.browserstack.com/responsive" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.uptimerobot.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.uptimerobot.com/"><strong>UptimeRobot | Free Website Monitoring</strong><br />
<em>Get up to 50 website, port or heartbeat monitors for free. When something happens, we'll notify you via email, SMS…</em>www.uptimerobot.com</a><a href="https://www.uptimerobot.com/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.statuscake.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.statuscake.com/"><strong>StatusCake: Website Monitoring with Uptime Monitoring solution</strong><br />
<em>Website Monitoring solution that drives revenue &amp; keeps you online. Track your uptime, page speed, domain, server, &amp;…</em>www.statuscake.com</a><a href="https://www.statuscake.com/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.google.com/analytics" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.google.com/analytics"><strong>Analytics Tools &amp; Solutions for Your Business - Google Analytics</strong><br />
<em>Easily access data from other Google solutions while working in Analytics, for a seamless workflow that saves you time…</em>www.google.com</a><a href="https://www.google.com/analytics" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://statcounter.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://statcounter.com/"><strong>Statcounter - Web Analytics Made Easy</strong><br />
<em>Watch in real time as visitors navigate through your website. Are they flowing through your site the way you expect…</em>statcounter.com</a><a href="https://statcounter.com/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://clicky.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://clicky.com/"><strong>Real Time Web Analytics</strong><br />
<em>Clicky Web Analytics is simply the best way to monitor, analyze, and react to your blog or web site's traffic in real…</em>clicky.com</a><a href="https://clicky.com/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://matomo.org/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://matomo.org/"><strong>Matomo - The Google Analytics alternative that protects your data</strong><br />
<em>Matomo's the Google Analytics alternative that protects your data and your customer's privacy. A powerful web analytics…</em>matomo.org</a><a href="https://matomo.org/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developers.google.com/speed/pagespeed/insights/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developers.google.com/speed/pagespeed/insights/"><strong>PageSpeed Insights</strong><br />
<em>Have specific, answerable questions about using PageSpeed Insights? Ask your question on Stack Overflow. For general…</em>developers.google.com</a><a href="https://developers.google.com/speed/pagespeed/insights/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://redbot.org/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://redbot.org/"><strong>REDbot</strong><br />
<em>Lint for your HTTP resources</em>redbot.org</a><a href="https://redbot.org/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://pageweight.imgix.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://pageweight.imgix.com/"><strong>imgix Page Weight Tool * Learn how to improve your site or app's speed.</strong><br />
<em>imgix Page Weight Tool measures the resources on your site and then recommends how to improve your site's load time.</em>pageweight.imgix.com</a><a href="https://pageweight.imgix.com/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://tinypng.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://tinypng.com/"><strong>TinyPNG - Compress PNG images while preserving transparency</strong><br />
<em>Excellent question! Let me give you a side by side comparison. Below are two photos of my cousin. The left image is…</em>tinypng.com</a><a href="https://tinypng.com/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://kraken.io/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://kraken.io/"><strong>Kraken.io Image Optimizer</strong><br />
<em>Kraken.io is a robust, ultra-fast image optimizer. Thanks to its vast array of optimization algorithms Kraken.io is a…</em>kraken.io</a><a href="https://kraken.io/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://squoosh.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://squoosh.app/"><strong>Squoosh</strong><br />
<em>Compress and compare images with different codecs, right in your browser</em>squoosh.app</a><a href="https://squoosh.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://pnggauntlet.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://pnggauntlet.com/"><strong>PNGGauntlet - PNG Compression Software</strong><br />
<em>PNGGauntlet 3.1.2 is a minor update that resolves some bugs, and adds a much-requested option. First, the bugfixes …</em>pnggauntlet.com</a><a href="http://pnggauntlet.com/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://imageoptim.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://imageoptim.com/"><strong>ImageOptim - better Save for Web</strong><br />
<em>Reduces image file sizes - so they take up less disk space and down­load faster - by applying advanced compression…</em>imageoptim.com</a><a href="https://imageoptim.com/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://caniuse.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://caniuse.com/"><strong>Can I use... Support tables for HTML5, CSS3, etc</strong><br />
<em>Test a feature Our partnership with BrowserStack now lets you test your website for compatibility across 2,000+ real…</em>caniuse.com</a><a href="https://caniuse.com/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://modernizr.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://modernizr.com/"><strong>Modernizr: the feature detection library for HTML5/CSS3</strong><br />
<em>All web developers come up against differences between browsers and devices. That's largely due to different feature…</em>modernizr.com</a><a href="https://modernizr.com/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://validator.w3.org/i18n-checker/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://validator.w3.org/i18n-checker/"><strong>W3C I18n Checker</strong><br />
<em>This checker performs various tests on a Web Page to determine its level of internationalisation-friendliness. It also…</em>validator.w3.org</a><a href="https://validator.w3.org/i18n-checker/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.alistapart.com/articles/amoreuseful404/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.alistapart.com/articles/amoreuseful404/"><strong>A More Useful 404</strong><br />
<em>Encountering 404 errors is not new. Often, developers provide custom 404 pages to make the experience a little less…</em>www.alistapart.com</a><a href="https://www.alistapart.com/articles/amoreuseful404/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://realfavicongenerator.net/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://realfavicongenerator.net/"><strong>Favicon Generator for perfect icons on all browsers</strong><br />
<em>The ultimate favicon generator. Design your icons platform per platform and make them look great everywhere. Including…</em>realfavicongenerator.net</a><a href="https://realfavicongenerator.net/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/audreyr/favicon-cheat-sheet" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/audreyr/favicon-cheat-sheet"><strong>audreyfeldroy/favicon-cheat-sheet</strong><br />
<em>A painfully obsessive cheat sheet to favicon sizes/types. Compiled from: For the main favicon itself, it's best for…</em>github.com</a><a href="https://github.com/audreyr/favicon-cheat-sheet" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://moz.com/learn/seo/url" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://moz.com/learn/seo/url"><strong>URL Structure [2021 SEO]</strong><br />
<em>Keeping URLs as simple, relevant, compelling, and accurate as possible is key to getting both your users and search…</em>moz.com</a><a href="https://moz.com/learn/seo/url" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://docs.microsoft.com/en-us/iis/extensions/url-rewrite-module/url-rewrite-module-configuration-reference" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://docs.microsoft.com/en-us/iis/extensions/url-rewrite-module/url-rewrite-module-configuration-reference"><strong>URL Rewrite Module Configuration Reference</strong><br />
<em>by Ruslan Yakushev This article provides an overview of the URL Rewrite Module and explains the configuration concepts…</em>docs.microsoft.com</a><a href="https://docs.microsoft.com/en-us/iis/extensions/url-rewrite-module/url-rewrite-module-configuration-reference" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://httpd.apache.org/docs/current/mod/mod_rewrite.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://httpd.apache.org/docs/current/mod/mod_rewrite.html"><strong>mod_rewrite - Apache HTTP Server Version 2.4</strong><br />
<em>The mod_rewrite module uses a rule-based rewriting engine, based on a PCRE regular-expression parser, to rewrite…</em>httpd.apache.org</a><a href="https://httpd.apache.org/docs/current/mod/mod_rewrite.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.nginx.com/blog/creating-nginx-rewrite-rules/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.nginx.com/blog/creating-nginx-rewrite-rules/"><strong>How to Create NGINX Rewrite Rules | NGINX</strong><br />
<em>In this blog post, we discuss how to create NGINX rewrite rules (the same methods work for both NGINX Plus and the open…</em>www.nginx.com</a><a href="https://www.nginx.com/blog/creating-nginx-rewrite-rules/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/"><strong>How To Set Up A Print Style Sheet - Smashing Magazine</strong><br />
<em>In a time when everyone seems to have a tablet, which makes it possible to consume everything digitally, and the only…</em>www.smashingmagazine.com</a><a href="https://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.google.com/cse/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.google.com/cse/"><strong>Programmable Search Engine by Google</strong><br />
<em>Decide if you want users to search only your website, or include other sites on the web. Match the design to your site…</em>www.google.com</a><a href="https://www.google.com/cse/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/dewitt/opensearch" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/dewitt/opensearch"><strong>dewitt/opensearch</strong><br />
<em>OpenSearch is a collection of simple formats for the sharing of search results. The most recent version of the…</em>github.com</a><a href="https://github.com/dewitt/opensearch" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html"><strong>Configuring Web Applications</strong><br />
<em>A web application is designed to look and behave in a way similar to a native application-for example, it is scaled to…</em>developer.apple.com</a><a href="https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh781490%28v=vs.85%29" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh781490(v=vs.85)"><strong>Windows 8 integration (Windows)</strong><br />
<em>This section details the ways in which web developers can take advantage of the tight integration of Windows 8 and…</em>docs.microsoft.com</a><a href="https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh781490%28v=vs.85%29" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://schema.org/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://schema.org/"><strong>Schema.org - Schema.org</strong><br />
<em>Schema.org is a collaborative, community activity with a mission to create, maintain, and promote schemas for…</em>schema.org</a><a href="https://schema.org/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://seoscout.com/tools/schema-generator" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://seoscout.com/tools/schema-generator"><strong>Schema Markup Generator &amp; Structured Data Testing Tool (inc JSON-LD)</strong><br />
<em>By adding the JSON-LD this tool generates to your pages you help Google better understand their purpose.Make it easy…</em>seoscout.com</a><a href="https://seoscout.com/tools/schema-generator" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://search.google.com/structured-data/testing-tool/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://search.google.com/structured-data/testing-tool/"><strong>Structured Data Testing Tool</strong><br />
<em>Edit description</em>search.google.com</a><a href="https://search.google.com/structured-data/testing-tool/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://developers.facebook.com/tools/debug/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developers.facebook.com/tools/debug/"><strong>Sharing Debugger - Facebook for Developers</strong><br />
<em>Sharing Debugger lets you preview how your content will look when it's shared to Facebook and debug any issues with…</em>developers.facebook.com</a><a href="https://developers.facebook.com/tools/debug/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://cards-dev.twitter.com/validator" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://cards-dev.twitter.com/validator"><strong>JavaScript is not available.</strong><br />
<em>Edit description</em>cards-dev.twitter.com</a><a href="https://cards-dev.twitter.com/validator" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://search.google.com/test/rich-results" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://search.google.com/test/rich-results"><strong>Rich Results Test - Google Search Console</strong><br />
<em>Does your page support rich results? What are rich results? Rich results are experiences on Google surfaces, such as…</em>search.google.com</a><a href="https://search.google.com/test/rich-results" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://schema.org/docs/gs.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://schema.org/docs/gs.html"><strong>Getting Started - schema.org</strong><br />
<em>Most webmasters are familiar with HTML tags on their pages. Usually, HTML tags tell the browser how to display the…</em>schema.org</a><a href="https://schema.org/docs/gs.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="http://tools.seobook.com/robots-txt/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://tools.seobook.com/robots-txt/"><strong>Robots.txt Tutorial</strong><br />
<em>Use our Robots.txt generator to create a robots.txt file. Use our Robots.txt analyzer to analyze your robots.txt file…</em>tools.seobook.com</a><a href="http://tools.seobook.com/robots-txt/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.robotsgenerator.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.robotsgenerator.com/"><strong>Robots Generator | Generate robots.txt Files Instantly - RobotsGenerator.com</strong><br />
<em>Select folders and/or files If there are areas of your page you do not wish made public, simply indicate the…</em>www.robotsgenerator.com</a><a href="http://www.robotsgenerator.com/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://www.xml-sitemaps.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.xml-sitemaps.com/"><strong>Create your Google Sitemap Online - XML Sitemaps Generator</strong><br />
<em>Free Online Google Sitemap Generator. XML-sitemaps.com provides free online sitemap generator service, creating an XML…</em>www.xml-sitemaps.com</a><a href="https://www.xml-sitemaps.com/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://validator.w3.org/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://validator.w3.org/"><strong>Markup Validation Service</strong><br />
<em>W3C's easy-to-use markup validation service, based on SGML and XML parsers.</em>validator.w3.org</a><a href="https://validator.w3.org/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://html5.validator.nu/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://html5.validator.nu/"><strong>Validator.nu (X)HTML5 Validator</strong><br />
<em>Edit description</em>html5.validator.nu</a><a href="https://html5.validator.nu/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://jigsaw.w3.org/css-validator/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jigsaw.w3.org/css-validator/"><strong>CSS Validation Service</strong><br />
<em>Check Cascading Style Sheets (CSS) and (X)HTML documents with style sheets</em>jigsaw.w3.org</a><a href="https://jigsaw.w3.org/css-validator/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://csslint.net/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://csslint.net/"><strong>CSS Lint</strong><br />
<em>CSS lint found 0 errors and 0 warnings. How can you fix it? See the details below.</em>csslint.net</a><a href="http://csslint.net/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://jslint.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jslint.com/"><strong>JSLint: The JavaScript Code Quality Tool</strong><br />
<em>JSLint, The JavaScript Code Quality Tool. This file allows JSLint to be run from a web browser. It can accept a source…</em>jslint.com</a><a href="https://jslint.com/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://jshint.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jshint.com/"><strong>JSHint, a JavaScript Code Quality Tool</strong><br />
<em>Report Cyclomatic complexity Unused variables Undefined variables Warn About == null About debugging code About unsafe…</em>jshint.com</a><a href="https://jshint.com/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://www.w3.org/WAI/standards-guidelines/wcag/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.w3.org/WAI/standards-guidelines/wcag/"><strong>Web Content Accessibility Guidelines (WCAG) Overview</strong><br />
<em>Introducing the Web Content Accessibility Guidelines (WCAG), including WCAG 2.0 and WCAG 2.1. Quick links to resources…</em>www.w3.org</a><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility"><strong>Handling common accessibility problems - Learn web development | MDN</strong><br />
<em>Next we turn our attention to accessibility, providing information on common problems, how to do simple testing, and…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://wave.webaim.org/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://wave.webaim.org/"><strong>WAVE Web Accessibility Evaluation Tool</strong><br />
<em>WAVE is a suite of evaluation tools that helps authors make their web content more accessible to individuals with…</em>wave.webaim.org</a><a href="https://wave.webaim.org/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.nvaccess.org/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.nvaccess.org/"><strong>NV Access</strong><br />
<em>Access to technology no matter your language, location or financial situation Quality over growth, access over profit…</em>www.nvaccess.org</a><a href="https://www.nvaccess.org/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://webaim.org/resources/contrastchecker/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://webaim.org/resources/contrastchecker/"><strong>Contrast Checker</strong><br />
<em>The five boxing wizards jump quickly. The five boxing wizards jump quickly. Enter a foreground and background color in…</em>webaim.org</a><a href="https://webaim.org/resources/contrastchecker/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://accessibility.oit.ncsu.edu/using-aria-landmarks-a-demonstration/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://accessibility.oit.ncsu.edu/using-aria-landmarks-a-demonstration/"><strong>Using ARIA Landmarks - A Demonstration</strong><br />
<em>ARIA landmarks are attributes you add to elements to create semantically defined sections of a page that allow users of…</em>accessibility.oit.ncsu.edu</a><a href="https://accessibility.oit.ncsu.edu/using-aria-landmarks-a-demonstration/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://alistapart.com/article/the-accessibility-of-wai-aria/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://alistapart.com/article/the-accessibility-of-wai-aria/"><strong>The Accessibility of WAI-ARIA</strong><br />
<em>Web developers interested in accessibility issues often discuss WAI-ARIA, an upcoming W3C candidate recommendation…</em>alistapart.com</a><a href="https://alistapart.com/article/the-accessibility-of-wai-aria/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.punkchip.com/2010/11/aria-basic-findings/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.punkchip.com/2010/11/aria-basic-findings/"><strong>WAI-ARIA states and properties: Practical examples</strong><br />
<em>I've been trying to include some WAI-ARIA into the project I'm currently working on. Luckily for me I'm using jQuery's…</em>www.punkchip.com</a><a href="http://www.punkchip.com/2010/11/aria-basic-findings/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://observatory.mozilla.org/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://observatory.mozilla.org/"><strong>Mozilla Observatory</strong><br />
<em>The Mozilla Observatory is a project designed to help developers, system administrators, and security professionals…</em>observatory.mozilla.org</a><a href="https://observatory.mozilla.org/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"><strong>Cross Site Scripting Prevention - OWASP Cheat Sheet Series</strong><br />
<em>This article provides a simple positive model for preventing XSS using output encoding properly. While there are a huge…</em>cheatsheetseries.owasp.org</a><a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html"><strong>DOM based XSS Prevention - OWASP Cheat Sheet Series</strong><br />
<em>When looking at XSS (Cross-Site Scripting), there are three generally recognized forms of XSS: The XSS Prevention…</em>cheatsheetseries.owasp.org</a><a href="https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://blog.codinghorror.com/cross-site-request-forgeries-and-you/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.codinghorror.com/cross-site-request-forgeries-and-you/"><strong>Cross-Site Request Forgeries and You</strong><br />
<em>As the web becomes more and more pervasive, so do web-based security vulnerabilities. I talked a little bit about the…</em>blog.codinghorror.com</a><a href="https://blog.codinghorror.com/cross-site-request-forgeries-and-you/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html"><strong>Cross-Site Request Forgery Prevention - OWASP Cheat Sheet Series</strong><br />
<em>Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant…</em>cheatsheetseries.owasp.org</a><a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://letsencrypt.org/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://letsencrypt.org/"><strong>Let's Encrypt</strong><br />
<em>Let's Encrypt is a free, automated, and open certificate authority brought to you by the nonprofit Internet Security…</em>letsencrypt.org</a><a href="https://letsencrypt.org/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://support.microsoft.com/en-gb/help/299875/how-to-implement-ssl-in-iis" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://support.microsoft.com/en-gb/help/299875/how-to-implement-ssl-in-iis"><strong>How to Set Up SSL on IIS 7</strong><br />
<em>by Saad Ladki The steps for configuring Secure Sockets Layer (SSL) for a site are the same in IIS 7 and above and IIS…</em>support.microsoft.com</a><a href="https://support.microsoft.com/en-gb/help/299875/how-to-implement-ssl-in-iis" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.digicert.com/kb/csr-ssl-installation/apache-openssl.htm#ssl_certificate_install" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.digicert.com/kb/csr-ssl-installation/apache-openssl.htm#ssl_certificate_install"><strong>Apache: CSR &amp; SSL Installation (OpenSSL)</strong><br />
<em>Use the instructions on this page to use OpenSSL to create your certificate signing request (CSR) and then to install…</em>www.digicert.com</a><a href="https://www.digicert.com/kb/csr-ssl-installation/apache-openssl.htm#ssl_certificate_install" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://nginx.org/en/docs/http/configuring_https_servers.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://nginx.org/en/docs/http/configuring_https_servers.html"><strong>Configuring HTTPS servers</strong><br />
<em>To configure an HTTPS server, the ssl parameter must be enabled on listening sockets in the server block, and the…</em>nginx.org</a><a href="https://nginx.org/en/docs/http/configuring_https_servers.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://www.ssllabs.com/ssltest/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.ssllabs.com/ssltest/"><strong>SSL Server Test</strong><br />
<em>This free online service performs a deep analysis of the configuration of any SSL web server on the public Internet…</em>www.ssllabs.com</a><a href="https://www.ssllabs.com/ssltest/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security"><strong>Strict-Transport-Security - HTTP | MDN</strong><br />
<em>The HTTP Strict-Transport-Security response header (often abbreviated as HSTS) lets a web site tell browsers that it…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html"><strong>HTTP Strict Transport Security - OWASP Cheat Sheet Series</strong><br />
<em>HTTP Strict Transport Security (also named HSTS) is an opt-in security enhancement that is specified by a web…</em>cheatsheetseries.owasp.org</a><a href="https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://www.html5rocks.com/en/tutorials/security/content-security-policy/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.html5rocks.com/en/tutorials/security/content-security-policy/"><strong>Content Security Policy | Web Fundamentals | Google Developers</strong><br />
<em>The web's security model is rooted in the same-origin policy . Code from https://mybank.com should only have access to…</em>www.html5rocks.com</a><a href="https://www.html5rocks.com/en/tutorials/security/content-security-policy/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"><strong>Content Security Policy (CSP) - HTTP | MDN</strong><br />
<em>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://csp-evaluator.withgoogle.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://csp-evaluator.withgoogle.com/"><strong>CSP Evaluator</strong><br />
<em>CSP Evaluator allows developers and security experts to check if a Content Security Policy (CSP) serves as a strong…</em>csp-evaluator.withgoogle.com</a><a href="https://csp-evaluator.withgoogle.com/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://developers.google.com/search/docs/guides/intro-structured-data" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developers.google.com/search/docs/guides/intro-structured-data"><strong>Understand How Structured Data Works | Google Search Central</strong><br />
<em>Google Search works hard to understand the content of a page. You can help us by providing explicit clues about the…</em>developers.google.com</a><a href="https://developers.google.com/search/docs/guides/intro-structured-data" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://ogp.me/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://ogp.me/"><strong>Open Graph protocol</strong><br />
<em>The Open Graph protocol enables any web page to become a rich object in a social graph. For instance, this is used on…</em>ogp.me</a><a href="https://ogp.me/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards"><strong>About Twitter Cards</strong><br />
<em>With Twitter Cards, you can attach rich photos, videos and media experiences to Tweets, helping to drive traffic to…</em>developer.twitter.com</a><a href="https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developers.facebook.com/docs/sharing/webmasters#markup" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developers.facebook.com/docs/sharing/webmasters#markup"><strong>Webmasters - Sharing - Documentation - Facebook for Developers</strong><br />
<em>Most content is shared to Facebook as a URL, so it's important that you mark up your website with Open Graph tags to…</em>developers.facebook.com</a><a href="https://developers.facebook.com/docs/sharing/webmasters#markup" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://humanstxt.org/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://humanstxt.org/"><strong>Humans TXT: We Are People, Not Machines.</strong><br />
<em>It's an initiative for knowing the people behind a website. It's a TXT file that contains information about the…</em>humanstxt.org</a><a href="http://humanstxt.org/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Discover More:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Stackbit Web-Dev-HubTheme</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [June 24, 2021](https://medium.com/p/9a52e11c8ee1).

<a href="https://medium.com/@bryanguner/quick-web-developers-website-checklist-a-list-of-tools-for-improvement-9a52e11c8ee1" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on October 14, 2021.
