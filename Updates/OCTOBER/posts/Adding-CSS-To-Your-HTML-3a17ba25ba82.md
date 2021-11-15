Adding CSS To Your HTML
=======================

For beginners … very picture heavy since CSS is such a visual discipline!

------------------------------------------------------------------------

### Adding CSS To Your HTML

#### For beginners … very picture heavy since CSS is such a visual discipline!

<figure><img src="https://cdn-images-1.medium.com/max/800/1*3hnCIyXstRSHgYO5-z-51g.png" class="graf-image" /></figure>

------------------------------------------------------------------------

### Element

An **element** is a part of a webpage. In <a href="https://developer.mozilla.org/en-US/docs/Glossary/XML" class="markup--anchor markup--p-anchor">XML</a> and <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML" class="markup--anchor markup--p-anchor">HTML</a>, an element may contain a data item or a chunk of text or an image, or perhaps nothing. A typical element includes an opening tag with some <a href="https://developer.mozilla.org/en-US/docs/Glossary/Attribute" class="markup--anchor markup--p-anchor">attributes</a>, enclosed text content, and a closing tag.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Q5WN9X-OPElif89O.png" class="graf-image" /></figure>Elements and <a href="https://developer.mozilla.org/en-US/docs/Glossary/Tag" class="markup--anchor markup--p-anchor">tags</a> are *not* the same things. Tags begin or end an element in source code, whereas elements are part of the <a href="https://developer.mozilla.org/en-US/docs/Glossary/DOM" class="markup--anchor markup--p-anchor">DOM</a>, the document model for displaying the page in the <a href="https://developer.mozilla.org/en-US/docs/Glossary/Browser" class="markup--anchor markup--p-anchor">browser</a>.

### <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#what_is_html" class="markup--anchor markup--h3-anchor" title="Permalink to What is HTML?">What is HTML?</a>

<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML" class="markup--anchor markup--p-anchor">HTML</a> (Hypertext Markup Language) is not a programming language. It is a *markup language* that tells web browsers how to structure the web pages you visit. It can be as complicated or as simple as the web developer wants it to be. HTML consists of a series of <a href="https://developer.mozilla.org/en-US/docs/Glossary/Element" class="markup--anchor markup--p-anchor">elements</a>, which you use to enclose, wrap, or *mark up* different parts of content to make it appear or act in a certain way. The enclosing <a href="https://developer.mozilla.org/en-US/docs/Glossary/Tag" class="markup--anchor markup--p-anchor">tags</a> can make content into a hyperlink to connect to another page, italicize words, and so on. For example, consider the following line of text:

    My cat is very grumpy

If we wanted the text to stand by itself, we could specify that it is a paragraph by enclosing it in a paragraph (`<p>`) element:

    <p>My cat is very grumpy</p>

Copy to Clipboard

**Note:** Tags in HTML are case-insensitive. This means they can be written in uppercase or lowercase. For example, a `<title>` tag could be written as `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>`, etc., and it will work. However, it is best practice to write all tags in lowercase for consistency and readability.

### <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#anatomy_of_an_html_element" class="markup--anchor markup--h3-anchor" title="Permalink to Anatomy of an HTML element">Anatomy of an HTML element</a>

Let’s further explore our paragraph element from the previous section:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*EHB3oKMslOLNf1RD.png" class="graf-image" /></figure>The anatomy of our element is:

-   <span id="9e4f">**The opening tag:** This consists of the name of the element (in this example, *p* for paragraph), wrapped in opening and closing angle brackets. This opening tag marks where the element begins or starts to take effect. In this example, it precedes the start of the paragraph text.</span>
-   <span id="03c3">**The content:** This is the content of the element. In this example, it is the paragraph text.</span>
-   <span id="bde0">**The closing tag:** This is the same as the opening tag, except that it includes a forward slash before the element name. This marks where the element ends. Failing to include a closing tag is a common beginner error that can produce peculiar results.</span>

The element is the opening tag, followed by content, followed by the closing tag.

------------------------------------------------------------------------

### Getting CSS Into Your HTML

    <!-- example.html -->
    <!DOCTYPE html>
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css"
        />
        <link rel="stylesheet" href="/styles/site.css" />
      </head>
      <body></body>
    </html>

-   <span id="36f1">*To connect your CSS sheet to your HTML page, use the link tag like so.*</span>
-   <span id="f743">Many developers use External pre-written CSS stylesheets for consistent design.</span>
-   <span id="af3f">You can connect multiple stylesheets.</span>

### CSS Selectors

-   <span id="2d5b">`CSS Selector` : Applies styles to a specific DOM element(s), there are various types:</span>
-   <span id="29cd">`Type Selectors` : Matches by node name.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*GOzh0U_yFtsOo9Hq" class="graf-image" /></figure>-   <span id="e624">`Class Selectors` : Matches by class name.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*WMQXdyBA2MeUYoVvY0Kjew.png" class="graf-image" /></figure>-   <span id="8c31">`ID Selectors` : Matches by ID name.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*uyRa6tM8Jlg648Rl" class="graf-image" /></figure>-   <span id="d011">`Universal Selectors` : Selects all HTML elements on a page.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*LfKazZMelOZrcOsp.jpg" class="graf-image" /></figure>-   <span id="e143">`Attribute Selectors` : Matches elements based on the prescence or value of a given attribute. (i.e. a\[title\] will match all a elements with a title attribute)</span>

<!-- -->

    /* Type selector */
    div {
      background-color: #000000;
    }

    /* Class selector */
    .active {
      color: #ffffff;
    }

    /* ID selector */
    #list-1 {
      border: 1px solid gray;
    }

    /* Universal selector */
    * {
      padding: 10px;
    }

    /* Attribute selector */
    a[title] {
      font-size: 2em;
    }

#### **Class Selectors**

-   <span id="45c5">Used to select all elements of a certain class denoted with a `.[class name]`</span>
-   <span id="f9e4">You can assign multiple classes to a DOM element by separating them with a space.</span>

#### **Compound Class Selectors**

<figure><img src="https://cdn-images-1.medium.com/max/800/1*iIOiP-ML_k6g0yTxZQyQ4A.png" class="graf-image" /></figure>-   <span id="bcf1">To get around accidentally selecting elements with multiple classes beyond what we want to grab we can chain dots.</span>
-   <span id="a54c">TO use a compound class selector just append the classes together when referencing them in the CSS.</span>

<!-- -->

    <div class="box yellow"></div>
    <div class="box orange"></div>
    <div class="circle orange"></div>

-   <span id="e8ca">i.e. .box.yellow will select only the first element.</span>
-   <span id="34a4">**KEEP IN MIND** that if you do include a space it will make the selector into a *descendant selector*.</span>

<!-- -->

    h1#heading,
    h2.subheading {
      font-style: italic;
    }

-   <span id="b382">When we want to target all `h1` tags with the id of `heading`.</span>

#### **CSS Combinators**

-   <span id="383a">CSS Combinators are used to combine other selectors into more complex or targeted selectors — they are very powerful!</span>
-   <span id="2805">Be careful not to use too many of them as they will make your CSS far too complex.</span>

#### `Descendant Selectors`

<figure><img src="https://cdn-images-1.medium.com/max/800/1*YPkGcUc4gf2WtJYdf6Yvmg.png" class="graf-image" /></figure>-   <span id="5e1b">Separated by a space.</span>
-   <span id="5d0b">Selects all descendants of a parent container.</span>

#### `Direct Child Selectors`

<figure><img src="https://cdn-images-1.medium.com/max/800/0*SByLFbio2RGGnFHj.jpg" class="graf-image" /></figure>-   <span id="47ef">Indicated with a `>`.</span>
-   <span id="eff3">Different from descendants because it only affects the direct children of an element.</span>

#### CSS:

    .menu > .is-active { background-color: #ffe0b2; }

#### HTML:

    <body> <div class=”menu”> <div class=”is-active”>Belka</div> <div> <div class=”is-active”>Strelka</div> </div> </div> </body> <div class=”is-active”> Laika </div> </body>

-   <span id="b452">Belka would be the only element selected.</span>

#### `Adjacent Sibling Selectors`

<figure><img src="https://cdn-images-1.medium.com/max/800/0*m0yPz3xJPeP3br2C.png" class="graf-image" /></figure>-   <span id="5dca">Uses the `+` symbol.</span>
-   <span id="9063">Used for elements that directly follow one another and who both have the same parent.</span>

<!-- -->

    h1 + h2 { font-style: italic;   }  

    //HTML:

    <h1>Big header</h1> <h2>This one is styled because it is directly adjacent to the H1</h2> <h2>This one is NOT styled because there is no H1 right before it</h2>

    h1 + h2 { font-style: italic;   }  

    <h1>Big header</h1> <h2>This one is styled because it is directly adjacent to the H1</h2> <h2>This one is NOT styled because there is no H1 right before it</h2>

#### **Pseudo-Classes**

<figure><img src="https://cdn-images-1.medium.com/max/800/1*XfxhRpW1_nd02miTi4s_PA.png" alt="courtesy of Pseudo-classes — CSS: Cascading Style Sheets | MDN (mozilla.org)" class="graf-image" /><figcaption>courtesy of <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" class="markup--anchor markup--figure-anchor">Pseudo-classes — CSS: Cascading Style Sheets | MDN (mozilla.org)</a></figcaption></figure>-   <span id="0b5c">`Pseudo-Class` : Specifies a special state of the seleted element(s) and does not refer to any elements or attributes contained in the DOM.</span>
-   <span id="1c1d">Format is a `Selector:Pseudo-Class Name` or `A:B`</span>

<!-- -->

    a:hover { 
    font-family: "Roboto Condensed", sans-serif; 
    color: #4fc3f7;
    text-decoration: none; 
    border-bottom: 2px solid #4fc3f7;
    }

> Some common pseudo-classes that are frequently used are:

-   <span id="1aac">`active` : 'push down', when elements are activated.</span>
-   <span id="587a">`checked` : applies to things like radio buttons or checkbox inputs.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*wg0YeoQ2mZKHWXaa.gif" class="graf-image" /></figure>-   <span id="cf58">`disabled` : any disabled element.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*KmzLwGMr_FsbHF4u.gif" class="graf-image" /></figure>-   <span id="1b81">`first-child` : first element in a group of children/siblings.</span>
-   <span id="eefb">`focus` : elements that have current focus.</span>
-   <span id="c1da">`hover` : elements that have cursor hovering over it.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*X7-ym7Relt83npDe.gif" class="graf-image" /></figure>-   <span id="128b">`invalid` : any form elements in an invalid state from client-side form validation.</span>
-   <span id="8fe0">`last-child` : last element in a group of children/siblings.</span>
-   <span id="fac8">`not(selector)` : elements that do not match the provided selector.</span>
-   <span id="037a">`required` : form elements that are required.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Cs9Jf4O0FHQB7Okc.gif" class="graf-image" /></figure>-   <span id="2d63">`valid` : form elements in a valid state.</span>
-   <span id="7eaf">`visited` : anchor tags of which the user has already visited the URL that the href points to.</span>

#### `Pseudo-Selectors`

-   <span id="571c">Used to create pseudo-elements as children of the elements to which the property applies.</span>
-   <span id="8995">`::after`</span>
-   <span id="9e9b">`::before`</span>

<!-- -->

    <style>
      p::before {
        background-color: lightblue;
        border-right: 4px solid violet;
        content: ":-) ";
        margin-right: 4px;
        padding-left: 4px;
      }
    </style>
    <p>This is the first paragraph</p>
    <p>This is the second paragraph</p>
    <p>This is the third paragraph</p>

-   <span id="22c4">Will add some blue smiley faces before the p tag elements.</span>

#### **CSS Rules**

-   <span id="66b6">`CSS Rule` : Collection of single or compound selectors, a curly brace, zero or more properties</span>
-   <span id="9ec3">`CSS Rule Specificity` : Sometimes CSS rules will contain multiple elements and may have overlapping properties rules for those same elements - there is an algorithm in CSS that calculates which rule takes precedence.</span>
-   <span id="bc57">`The Four Number Calculation`** : listed in increasing order of importance.**</span>

1.  <span id="c45f">Who has the most IDs? If no one, continue.</span>
2.  <span id="3aff">Who has the most classes? If no one, continue.</span>
3.  <span id="b70b">Who has the most tags? If no one, continue.</span>
4.  <span id="59f0">Last Read in the browser wins.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Z0iSQ0bhAiK5gYhk.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*RpC3i4EQM_HDRyUS.png" class="graf-image" /></figure><style>
      .box {
        width: 50px;
        height: 50px;
        border: 1px solid black;
      }
      .orange {
        background-color: orange;
      }
      .yellow {
        background-color: yellow;
        border: 1px solid purple;
      }
    </style>
    <div class="box yellow"></div>
    <div class="box orange"></div>

-   <span id="2b20">Coming back to our example where all the CSS Rules have tied, the last step 4 wins out so our element will have a `purple border`.</span>

### CSS: Type, Properties, and Imports

#### **Typography**

-   <span id="af08">`font-family` : change the font.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*8298p-Vlu15C-pdw.png" class="graf-image" /></figure>-   <span id="9771">Remember that not all computers have the same fonts on them.</span>
-   <span id="d248">You can import web fonts via an api by using</span>
-   <span id="8578">`@import url('https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&display=swap');` and pasting it st the top of your CSS file.</span>
-   <span id="82b1">And then reference it in your font-family.</span>
-   <span id="c651">`font-size` : Changes the size of your font.</span>
-   <span id="a7dc">Keep in mind the two kind of units CSS uses:</span>
-   <span id="c034">`Absolute` : `Pixels`, Points, Inches, Centimeters.</span>
-   <span id="7221">`Relative` : Em, Rem.</span>
-   <span id="80e1">Em: Calculating the size relative to the previous div (bubbles down)</span>
-   <span id="6c9e">Rem: Calculates relative to the parent element always.</span>
-   <span id="0f35">`font-style` : Used to set a font to italics.</span>
-   <span id="20a3">`font-weight` : Used to make a font bold.</span>
-   <span id="ba17">`text-align` : Used to align your text to the left, center, or right.</span>
-   <span id="e694">`text-decoration` : Use to put lines above, through, or under text. Lines can be solid, dashed, or wavy!</span>
-   <span id="0777">`text-transform` : Used to set text to all lowercase, uppercase, or capitalize all words.</span>

#### **Background-Images**

-   <span id="a7cc">You can use the background-image property to set a background image for an element.</span>

### CSS: Colors, Borders, and Shadows

#### **Colors**

-   <span id="6887">You can set colors in CSS in three popular ways: by name, by hexadecimal RGB value, and by their decimal RGB value.</span>
-   <span id="1d78">rgba() is used to make an rbg value more transparent, the `a` is used to specify the `alpha channel`.</span>
-   <span id="a422">**Color** : Property used to change the color of text.</span>
-   <span id="6bcb">**Background-Color** : Property to change the backgrounf color of an element.</span>

#### **Borders**

-   <span id="cce0">Borders take three values: The width of the border, the style (i.e. solid, dotted, dashed), color of the border.</span>

#### **Shadows**

-   <span id="6391">There are two kinds of shadows in CSS: `box shadows` and `text shadows`.</span>
-   <span id="7fc1">Box refers to HTML elements.</span>
-   <span id="8c59">Text refers to text.</span>
-   <span id="266d">Shadows take values such as, the horizontal & vertical offsets of the shadow, the blur radius of the shadow, the spread radius, and of course the colors.</span>

### My Blog:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>my resource sharing and blog site ... centered mostly on web development and just a bit of audio production / generally…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Grid Cheat Sheet:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*8cBZz0yj-ND3af2uh7J-dw.png" class="graf-image" /></figure>Summary:

#### What is a CSS rule?

-   <span id="7466">A CSS rule consists of a selector and curly braces around property-value combinations.</span>

#### How to import other CSS files into your CSS file How to link a stylesheet into an HTML page

-   <span id="983d">css into css : with use of the `@import` tag!</span>
-   <span id="d560">css into html : by using the `link` HTML element.</span>
-   <span id="043b">The link element has to have the `rel` and `href` attributes configured like so:</span>

<!-- -->

    <link rel=”stylesheet” href=”file.css”>

#### Explain how CSS rules are applied based on their order and specificity, and be able to calculate the specificity of CSS rules and determine which rule override the properties of another.

-   <span id="d4ab">`IDs` are unique, thus are considered highly specific since they always target one element.</span>
-   <span id="6057">Calculating the `score specificity` of selectors, and the one with the highest score is the most specific.</span>
-   <span id="e7ce">`in-line styling > id > pseudo-class selectors > class > tag name`</span>

#### Write “combinators” to create compound selector statements to target specific elements

-   <span id="5d0a">*Direct child selector*: the carrot, `>` means a direct child.</span>
-   <span id="c7d9">*All descendants/children selector*: denotes with a `space` in between selectors</span>
-   <span id="da01">*Multiple items selection*: `comma` dileniated selectors (ex-&gt; body, div, html {})</span>

#### Explain and apply pseudo selectors for specific elements in specific states (i.e. :hover)

#### html:

    <a href=”https://google.com">Link</a>

#### CSS:

    a:hover { 
    font-family: 
    "Roboto Condensed", sans-serif;
     color: #4fc3f7;
     text-decoration: none;
     border-bottom: 2px solid #4fc3f7;
     }

    a:hover { font-family: "Roboto Condensed", sans-serif; color: #4fc3f7; text-decoration: none; border-bottom: 2px solid #4fc3f7; }

> The not pseudo-class selector: html:

    <div class=”hello”>Hello</div> <div class=”world”>World</div> <div>Random</div>

#### CSS:

    div:not(.world) { background-color: red; }

-   <span id="4cca">Only `div`s containing the text `"Hello"` and `"Random"` will have a `background-color` of `red`.</span>

#### Explain and apply the `::before` and `::after` pseudo elements, & Use the content CSS property to define the content of an element:

#### html:

    <p> this is a paragraph tag</p>

#### css:

    p::after { background-color: lightblue; border-right: 1px solid violet; content: ‘:-D’; margin-right: 4px; margin-left: 4px; }

#### What are these ?!

-   <span id="aab8">`font-size` : size of letters</span>
-   <span id="7c4a">`font-weight` : boldness of letters</span>
-   <span id="ce51">`font-style` : italicization</span>
-   <span id="7389">`font-family` : actualy font</span>

#### Some general font families: \[ sans-serif, serif, cursive \]

-   <span id="5081">`text-transform` : text casing</span>
-   <span id="7665">`text-decoration` : underlining</span>
-   <span id="2919">`text-align` : text justification (left, right, etc.)</span>

#### Colors expressed as names, hexadecimal RGB values, and decimal RGB values

-   <span id="4194">The `color` css property changes the color of the *text*.</span>
-   <span id="5084">The `background-color` css property does just what it says</span>
-   <span id="dd49">`rgb()` - takes in 3 integer values denoting levels of `red, green and blue`</span>
-   <span id="17b7">`rgba()` - Same as above but with additional argument (the 'a') called alpha which represents how transparent the color will be and is on a scale from 0 to 1 where 0 is transparent and 1 is opaque.</span>

1.  <span id="5af0">Everything about borders, Shadows, & Opacity</span>

-   <span id="c169">takes in three arguments: thickness, line style, line color</span>
-   <span id="9096">Text and box shadows</span>
-   <span id="4b11">Opacity set to 0 can make an element completely transparent.</span>

<!-- -->

    h2 { border: 4px solid red; text-shadow: 0px 2px 10px orange; box-shadow: 5px 5px yellow; opacity: 0.5; }

#### Covering an element with a background image

    #picture-here { 
    background-image: url(https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
     background-size: cover; height: 100px; width: 100px;
     }

#### \`Explain why using Web fonts helps with consistent experience across viewing devices:

-   <span id="2e41">Web fonts are good to use because every browser has different default font families, but there is a drawback. Google tracks when you use their fonts using google fonts</span>
-   <span id="14a1">Will be the same in any browser.</span>

#### Explain absolute and relative length units in CSS

> Relative :

-   <span id="b065">`rem` - relative to root</span>
-   <span id="9f0c">`em` - relative to parent</span>

> Absolute Measure :

-   <span id="e623">`pt`</span>
-   <span id="2ed2">`px`</span>
-   <span id="edd9">`cm`</span>

#### `display` property:

-   <span id="a8ec">`inline`</span>
-   <span id="ff09">`inline-block`</span>
-   <span id="f22a">`block`</span>
-   <span id="503f">`flex`</span>
-   <span id="fb95">`grid`</span>

#### Identify the different types of media that a media query can target

-   <span id="2088">all</span>
-   <span id="3af0">print</span>
-   <span id="06a4">screen</span>
-   <span id="a6f1">speech</span>

#### Know the Box Model

#### Describe the following

-   <span id="6f8a">padding</span>
-   <span id="2d55">margin</span>
-   <span id="0f09">`position: fixed` -</span>
-   <span id="e005">`position: relative` - positioned relative to closest parent ancestor</span>
-   <span id="0afa">`position: absolute` - removes from regular flow of the page.</span>
-   <span id="6f42">`position: static` - the default positioning of all elements.</span>

1.  <span id="f340">Identify elements rendered with specific padding and margin settings</span>
2.  <span id="bd13">Apply padding and margins to HTML elements to achieve a desired layout</span>
3.  <span id="012a">Apply positioning settings to elements (fixed, relative, and absolute) to HTML elements to achieve a desired layout</span>

#### Identify which HTML elements have a default “inline” display value

-   <span id="5936">`fill in`</span>

#### Identify which HTML elements have a default “block” display value

-   <span id="2dff">`fill in`</span>

#### Describe and use z-index positioning of elements

-   <span id="e5cc">`z-index` : refers to the "third dimension" i.e. stacking elements on top of each other. a higher z-index means bringing the element to the top.</span>

#### Explain how flexible box layout lays out elements

-   <span id="161f">displays items in flexible container so layout is responsive</span>
-   <span id="1369">containers height/width adjust to fit viewport</span>
-   <span id="e8fe">`justify-content`</span>
-   <span id="840d">alignment of items along main axis</span>
-   <span id="6c4d">distributes extra space around/between items</span>
-   <span id="692c">`align-items`</span>
-   <span id="bf56">justify content for cross axis</span>
-   <span id="8e76">Use the flex property to specify `grow`, `shrink`, and `basis` values.</span>
-   <span id="5ba3">`grow` determines how much available space it will take up</span>
-   <span id="6e1c">`shrink` determines how much the element can shrink</span>
-   <span id="e98e">`basis` is considered to be the default size of the element</span>
-   <span id="c37e">Use the `flex-direction` property to direct the layout of the content.</span>
-   <span id="187e">Use the `flex-wrap` property to affect the wrap of content layout within an element using flexible box layout.</span>
-   <span id="ed17">Use `align-self`, `justify-content`, and `align-items` to change the way that children elements are laid out in a flexible box layout.</span>
-   <span id="4066">Use the `order` property to change the order in which elements will appear in a flexible box layout.</span>
-   <span id="437e">Use the `grid-template-columns`, `grid-template-rows`, and `grid-template` properties to specify the layout of the grid using relative and absolute measures.</span>
-   <span id="7dd1">Use `grid-template-areas` to label areas of a grid and `grid-area` to assign an element to the area.</span>
-   <span id="068c">Use `grid-column-gap`, `grid-row-gap`, and `grid-gap` to set the "gutter" areas between elements in a grid layout.</span>
-   <span id="15f2">Use `grid-column-start`/`grid-column-end `and `grid-row-start`/`grid-row-end`to create spans across multiple columns and rows with positive integers, negative integers, and in conjunction with the "span" operator.</span>
-   <span id="f958">Use `justify-items`, `align-items`, `justify-content` and `align-content` to layout items in each grid area.</span>
-   <span id="d698">Use the `order` property to change the default order in which items are laid out</span>

#### Explain how grid layout lays out elements

-   <span id="5ad6">Sections off your document into smaller sections that can be organized and customized via the CSS grid layout properties.</span>

#### Explain and use the shorthand versions of `grid-column` and `grid-row` to define how an element will span a grid layout

-   <span id="f259">`grid-column: grid-column-start / grid-column-end`</span>
-   <span id="f6f9">`grid-row: grid-row-start / grid-row-end`</span>
-   <span id="e79a">can use grid-area with grid-template-areas to visualize grid layout</span>
-   <span id="52ab">grid-template-areas: each string represents one row</span>
-   <span id="d47d">use grid-areas name to define region element will take up</span>
-   <span id="ec2a">`grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end`</span>

#### Explain and use the “fr” unit of measure

-   <span id="a865">`fr` : fraction unit of measure used for creating grid layout</span>

#### Describe what `Block`, `Element`, and `Modifier` means in BEM

-   <span id="1fd2">`block__element--modifier` `element` has `n` for `underscore` and `modifier` has `d` for `dash`</span>
-   <span id="a2bc">Block: standalone entity that is meaningful on its own</span>
-   <span id="03ca">header, container, menu, navbar, input</span>
-   <span id="de6d">name can contain lain letters, digits, dashes</span>
-   <span id="d414">Element — part of a block, no meaning on its own</span>
-   <span id="8454">menu item, list-item, header title, input label</span>
-   <span id="f77e">name can contain Latin letters, digits, dashes, underscore</span>
-   <span id="d083">class formed by block name + two underscores + element name</span>
-   <span id="b559">Modifier — flag on a block or element used to change appearance or behavior</span>
-   <span id="0ced">disabled, color yellow, size big, fixed</span>
-   <span id="6aad">add modifier class to blocks/el they modify and keep original class</span>
-   <span id="23bd">CSS class formed as block or el name plus two dashes</span>

#### Identify CSS class names that follow the BEM principle.

    <header class=”header header — color>

#### Describe and use the transition property show animated changes due to class and pseudo-class CSS rule application

-   <span id="1097">`transition-property`</span>
-   <span id="5a11">name/names of css props to which transitions should apply</span>
-   <span id="0f97">transition effect starts when specified CSS prop changes</span>
-   <span id="21b0">`transition-duration`</span>
-   <span id="518b">duration over which transition occurs</span>
-   <span id="0a00">`transition-delay`</span>
-   <span id="ca6b">how long to wait between time prop is changed and transition begins</span>
-   <span id="ee5f">`transition`</span>
-   <span id="ebfb">shorthand: property, duration, delay</span>

#### Describe and use the overflow, overflow-x, and overflow-y properties to effect clipping and scrolling on elements

-   <span id="ddc3">`overflow: auto`</span>
-   <span id="55c9">`overflow: scroll`</span>
-   <span id="9730">`overflow: hidden`</span>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 22, 2021](https://medium.com/p/3a17ba25ba82).

<a href="https://medium.com/@bryanguner/adding-css-to-your-html-3a17ba25ba82" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on October 14, 2021.
