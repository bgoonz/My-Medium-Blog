# Adding CSS To Your HTML

 For beginners … very picture heavy since CSS is such a visual discipline!

##  Adding CSS To Your HTML <a id="1962"></a>

###  For beginners … very picture heavy since CSS is such a visual discipline! <a id="9668"></a>

![](https://cdn-images-1.medium.com/max/800/1*3hnCIyXstRSHgYO5-z-51g.png)

##  Getting CSS Into Your HTML <a id="bff0"></a>

```text
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
```

*  _To connect your CSS sheet to your HTML page, use the link tag like so._
*  Many developers use External pre-written CSS stylesheets for consistent design.
*  You can connect multiple stylesheets.

##  CSS Selectors <a id="3935"></a>

*  **`CSS Selector`** : Applies styles to a specific DOM element\(s\), there are various types:
*  **`Type Selectors`** : Matches by node name.

![](https://cdn-images-1.medium.com/max/800/0*GOzh0U_yFtsOo9Hq)

*  **`Class Selectors`** : Matches by class name.

![](https://cdn-images-1.medium.com/max/800/1*WMQXdyBA2MeUYoVvY0Kjew.png)

*  **`ID Selectors`** : Matches by ID name.

![](https://cdn-images-1.medium.com/max/800/0*uyRa6tM8Jlg648Rl)

*  **`Universal Selectors`** : Selects all HTML elements on a page.

![](https://cdn-images-1.medium.com/max/800/0*LfKazZMelOZrcOsp.jpg)

*  **`Attribute Selectors`** : Matches elements based on the prescence or value of a given attribute. \(i.e. a\[title\] will match all a elements with a title attribute\)

```text
/* Type selector */
div {
  background-color: #000000;
}
```

```text
/* Class selector */
.active {
  color: #ffffff;
}
```

```text
/* ID selector */
#list-1 {
  border: 1px solid gray;
}
```

```text
/* Universal selector */
* {
  padding: 10px;
}
```

```text
/* Attribute selector */
a[title] {
  font-size: 2em;
}
```

###  **Class Selectors** <a id="9210"></a>

*  Used to select all elements of a certain class denoted with a `.[class name]`
*  You can assign multiple classes to a DOM element by separating them with a space.

###  **Compound Class Selectors** <a id="64a7"></a>

![](https://cdn-images-1.medium.com/max/800/1*iIOiP-ML_k6g0yTxZQyQ4A.png)

*  To get around accidentally selecting elements with multiple classes beyond what we want to grab we can chain dots.
*  TO use a compound class selector just append the classes together when referencing them in the CSS.

```text
<div class="box yellow"></div>
<div class="box orange"></div>
<div class="circle orange"></div>
```

*  i.e. .box.yellow will select only the first element.
*  **KEEP IN MIND** that if you do include a space it will make the selector into a _descendant selector_.

```text
h1#heading,
h2.subheading {
  font-style: italic;
}
```

*  When we want to target all `h1` tags with the id of `heading`.

###  **CSS Combinators** <a id="6afd"></a>

*  CSS Combinators are used to combine other selectors into more complex or targeted selectors — they are very powerful!
*  Be careful not to use too many of them as they will make your CSS far too complex.

###  **`Descendant Selectors`** <a id="2d84"></a>

![](https://cdn-images-1.medium.com/max/800/1*YPkGcUc4gf2WtJYdf6Yvmg.png)

*  Separated by a space.
*  Selects all descendants of a parent container.

###  **`Direct Child Selectors`** <a id="2cd5"></a>

![](https://cdn-images-1.medium.com/max/800/0*SByLFbio2RGGnFHj.jpg)

*  Indicated with a `>`.
*  Different from descendants because it only affects the direct children of an element.

###  CSS: <a id="30c0"></a>

```text
.menu > .is-active { background-color: #ffe0b2; }
```

###  HTML: <a id="9cf0"></a>

```text
<body> <div class=”menu”> <div class=”is-active”>Belka</div> <div> <div class=”is-active”>Strelka</div> </div> </div> </body> <div class=”is-active”> Laika </div> </body>
```

*  Belka would be the only element selected.

###  **`Adjacent Sibling Selectors`** <a id="291c"></a>

![](https://cdn-images-1.medium.com/max/800/0*m0yPz3xJPeP3br2C.png)

*  Uses the `+` symbol.
*  Used for elements that directly follow one another and who both have the same parent.

```text
h1 + h2 { font-style: italic;   }  
```

```text
//HTML:
```

```text
<h1>Big header</h1> <h2>This one is styled because it is directly adjacent to the H1</h2> <h2>This one is NOT styled because there is no H1 right before it</h2>
```

```text
h1 + h2 { font-style: italic;   }  
```

```text

<h1>Big header</h1> <h2>This one is styled because it is directly adjacent to the H1</h2> <h2>This one is NOT styled because there is no H1 right before it</h2>
```

###  **Pseudo-Classes** <a id="d0e1"></a>

 ![](https://cdn-images-1.medium.com/max/800/1*XfxhRpW1_nd02miTi4s_PA.png) courtesy of [Pseudo-classes — CSS: Cascading Style Sheets \| MDN \(mozilla.org\)](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

*  **`Pseudo-Class`** : Specifies a special state of the seleted element\(s\) and does not refer to any elements or attributes contained in the DOM.
*  Format is a `Selector:Pseudo-Class Name` or `A:B`

```text
a:hover { 
font-family: "Roboto Condensed", sans-serif; 
color: #4fc3f7;
text-decoration: none; 
border-bottom: 2px solid #4fc3f7;
}
```

> Some common pseudo-classes that are frequently used are:

*  **`active`** : 'push down', when elements are activated.
*  **`checked`** : applies to things like radio buttons or checkbox inputs.

![](https://cdn-images-1.medium.com/max/800/0*wg0YeoQ2mZKHWXaa.gif)

*  **`disabled`** : any disabled element.

![](https://cdn-images-1.medium.com/max/800/0*KmzLwGMr_FsbHF4u.gif)

*  **`first-child`** : first element in a group of children/siblings.
*  **`focus`** : elements that have current focus.
*  **`hover`** : elements that have cursor hovering over it.

![](https://cdn-images-1.medium.com/max/800/0*X7-ym7Relt83npDe.gif)

*  **`invalid`** : any form elements in an invalid state from client-side form validation.
*  **`last-child`** : last element in a group of children/siblings.
*  **`not(selector)`** : elements that do not match the provided selector.
*  **`required`** : form elements that are required.

![](https://cdn-images-1.medium.com/max/800/0*Cs9Jf4O0FHQB7Okc.gif)

*  **`valid`** : form elements in a valid state.
*  **`visited`** : anchor tags of which the user has already visited the URL that the href points to.

###  **`Pseudo-Selectors`** <a id="5527"></a>

*  Used to create pseudo-elements as children of the elements to which the property applies.
*  `::after`
*  `::before`

```text
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
```

*  Will add some blue smiley faces before the p tag elements.

###  **CSS Rules** <a id="8e74"></a>

*  **`CSS Rule`** : Collection of single or compound selectors, a curly brace, zero or more properties
*  **`CSS Rule Specificity`** : Sometimes CSS rules will contain multiple elements and may have overlapping properties rules for those same elements - there is an algorithm in CSS that calculates which rule takes precedence.
*  **`The Four Number Calculation` : listed in increasing order of importance.**

1.  Who has the most IDs? If no one, continue.
2.  Who has the most classes? If no one, continue.
3.  Who has the most tags? If no one, continue.
4.  Last Read in the browser wins.

 ![](https://cdn-images-1.medium.com/max/800/0*Z0iSQ0bhAiK5gYhk.png) ![](https://cdn-images-1.medium.com/max/800/0*RpC3i4EQM_HDRyUS.png)

```text
<style>
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
```

*  Coming back to our example where all the CSS Rules have tied, the last step 4 wins out so our element will have a `purple border`.

##  CSS: Type, Properties, and Imports <a id="9d7a"></a>

###  **Typography** <a id="b8aa"></a>

*  **`font-family`** : change the font.

![](https://cdn-images-1.medium.com/max/800/0*8298p-Vlu15C-pdw.png)

*  Remember that not all computers have the same fonts on them.
*  You can import web fonts via an api by using
*  `@import url('https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&display=swap');` and pasting it st the top of your CSS file.
*  And then reference it in your font-family.
*  **`font-size`** : Changes the size of your font.
*  Keep in mind the two kind of units CSS uses:
*  **`Absolute`** : **`Pixels`**, Points, Inches, Centimeters.
*  **`Relative`** : Em, Rem.
*  Em: Calculating the size relative to the previous div \(bubbles down\)
*  Rem: Calculates relative to the parent element always.
*  **`font-style`** : Used to set a font to italics.
*  **`font-weight`** : Used to make a font bold.
*  **`text-align`** : Used to align your text to the left, center, or right.
*  **`text-decoration`** : Use to put lines above, through, or under text. Lines can be solid, dashed, or wavy!
*  **`text-transform`** : Used to set text to all lowercase, uppercase, or capitalize all words.

###  **Background-Images** <a id="d0d1"></a>

*  You can use the background-image property to set a background image for an element.

##  CSS: Colors, Borders, and Shadows <a id="2ff1"></a>

###  **Colors** <a id="1cd1"></a>

*  You can set colors in CSS in three popular ways: by name, by hexadecimal RGB value, and by their decimal RGB value.
*  rgba\(\) is used to make an rbg value more transparent, the `a` is used to specify the `alpha channel`.
*  **Color** : Property used to change the color of text.
*  **Background-Color** : Property to change the backgrounf color of an element.

###  **Borders** <a id="8e0b"></a>

*  Borders take three values: The width of the border, the style \(i.e. solid, dotted, dashed\), color of the border.

###  **Shadows** <a id="89a7"></a>

*  There are two kinds of shadows in CSS: **`box shadows`** and **`text shadows`**.
*  Box refers to HTML elements.
*  Text refers to text.
*  Shadows take values such as, the horizontal & vertical offsets of the shadow, the blur radius of the shadow, the spread radius, and of course the colors.

##  My Blog: <a id="5639"></a>

