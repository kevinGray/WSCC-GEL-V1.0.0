# WSCC-GEL-V1.0.0

## Code guidlines

### About the patterns
A responsive system to support West Sussex County Council designers, developers and teams to begin the build of products, apps and services based on a core collection of flexible consistent elements. 

### CSS and Sass
The site's CSS is compiled and minified using [Sass](http://sass-lang.com/). Two files are compiled from many: all.css and all-old-ie.css. All.css is served to all modern browsers and uses a responsive grid and media queries.All-old-ie.css is served only to IE8 (and below although IE versions before 8 are not officially supported) and uses a fixed width grid with no media queries.The Sass code is split between many files so it easy to find the code you need.

The CSS is built in a modular way and covers a huge variety of design patterns, so adding CSS will be needed often. If you are adding new CSS for a new section of the site, create a new partial Sass file (preceded by an underscore, .scss filetype) and add it to the sass directory. Then open all.scss and add a new import with the name of your file. Add it at the end of the file.

[Learn more about installing and compiling Sass](http://sass-lang.com/)

### Mixins
The Sass code contains several mixins and variables to make development easier, quicker and more consistent. Look in sass/mixins.css for the full list.

#### Examples

```css
@include border-radius(4px);
```

becomes

```css
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
-ms-border-radius: 4px;
border-radius: 4px;
```