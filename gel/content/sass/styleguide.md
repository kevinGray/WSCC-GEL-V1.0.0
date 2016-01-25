#West Sussex County Council Patterns (Beta)

<div class="editor-content">


	<p>Here you can download all of the GEL boilerplate assets including sass, css, javascript, images and webfonts. An example index.html file with the correct asset references is also included</p>

	<a href="/content/kss/styleguide/releases/1.0.0.zip" class="btn btn--primary btn--icon no-external">
	
		Download Version 1.0.0
		
		<span class="icon icon-download-alt"></span>
	
	</a>

	<h2>Dynamic header and footer</h2>

	<p>

		http://beta.westsussex.gov.uk/?alttemplate=partialheaderview

		<br /><br />

		http://beta.westsussex.gov.uk/?alttemplate=partialfooterview

	</p>

	<p>These links provide a "live" up-to-date html version of the header and footer for the WSCC website.  They need to be used together as tags opened in the header, are closed in the footer.  The footer also requires stylesheet info that is contained in the header.  Custom html should be placed between the html of the header and footer.</p>

	<h2>Code guidelines</h2>

	<h3>About the patterns</h3>
	
	<p>A responsive system to support West Sussex County Council designers, developers and teams to begin the build of products, apps and services based on a core collection of flexible consistent elements. </p>
	
	<h3>CSS and Sass</h3>

	<p>The site's CSS is compiled and minified using <a href="http://sass-lang.com/">Sass </a>. Two files are compiled from many: all.css and all-old-ie.css. All.css is served to all modern browsers and uses a responsive grid and media queries.All-old-ie.css is served only to IE8 (and below although IE versions before 8 are not officially supported) and uses a fixed width grid with no media queries.The Sass code is split between many files so it easy to find the code you need.</p>

	<p>The CSS is built in a modular way and covers a huge variety of design patterns, so adding CSS will be needed often. If you are adding new CSS for a new section of the site, create a new partial Sass file (preceded by an underscore, .scss filetype) and add it to the sass directory. Then open all.scss and add a new import with the name of your file. Add it at the end of the file.</p>
	
	<p><a href="http://sass-lang.com/">Learn more about installing and compiling Sass</a></p>

	<h3>Mixins</h3>

	<p>The Sass code contains several mixins and variables to make development easier, quicker and more consistent. Look in sass/mixins.css for the full list.</p>

	<h4>Examples</h4>

	<pre>@include border-radius(4px);</pre>

	<p>becomes</p>

	<pre>
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
-ms-border-radius: 4px;
border-radius: 4px;
	</pre>

</div>	

