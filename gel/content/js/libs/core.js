/// <reference path="/content/js/shared/scrollfix.js"/>

if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
              ? args[number]
              : match
            ;
        });
    };
}


// = Search and primary nav triggers and toggles
//-----------------------------------------------------------------------------//

$('.js-trigger__search').on('click', function () {
    $('.js-panel__search').toggle();
    $('.js-panel__nav-primary').hide();
    $('.js-trigger__nav-primary').removeClass('close');
    setAriaExpandedArea();
});


$('.js-trigger__nav-primary').on('click', function () {
    $('.js-panel__search').hide();
    $('.js-panel__nav-primary').toggle();
    setAriaExpandedArea();
});


function setAriaExpandedArea() {
    $('[class*="js-panel"]').each(function () {
        var isHidden = $(this).is(':visible') ? false : true;
        $(this).attr('aria-hidden', isHidden);
        var linkSelector = $(this).attr('class').match(/\bjs-panel\S+/g)[0].replace('js-panel', '');
        $('.js-trigger' + linkSelector).attr('aria-expanded', !isHidden);
    });
}


jQuery.expr[':'].parents = function(a,i,m){
    return jQuery(a).parents(m[3]).length < 1;
};





// = Email current page
//-----------------------------------------------------------------------------//
function emailCurrentPage() {
    window.location.href = "mailto:?subject=" + document.title + "&body=" + escape(window.location.href);
}


// = Sticky Primary nav
//-----------------------------------------------------------------------------//
function initStickyPrimaryNav() {
    var headerDiv = $('#fixed');
    var start = $(headerDiv).offset().top;
    $(window).bind("scroll", function () {
        var p = $(window).scrollTop();
        $(headerDiv).toggleClass('fixed', p > start);
        $('body').toggleClass('fixed-body', p > start);
    });
}
initStickyPrimaryNav();
var currentOpen = "";



// = Inline SVG data fallback
//-----------------------------------------------------------------------------//
$(function () {

    $(".no-inlinesvg img").each(function () {
        var fallback = $(this).attr("data-fallback");
        $(this).attr("src", fallback);

    });

});


 // = Limit text
 //-----------------------------------------------------------------------------//
 function characterLimit() {

     $(".char-lim--175").each(function (i) {
         len = $(this).text().length;

         if (len > 175) {
             $(this).text($(this).text().substr(0, 175) + '...');
         }
     });

     $(".char-lim--75").each(function (i) {
         len = $(this).text().length;

         if (len > 75) {
             $(this).text($(this).text().substr(0, 75) + '...');
         }

     });

 }

 characterLimit();



// = ScrollFix for campaign page navigation
//-----------------------------------------------------------------------------//
 $('#scrollfix').scrollFix();


// =  Navicon Transformicons
//-----------------------------------------------------------------------------//
 var anchors = $('.js-transformicon');

anchors.each(function(){
     var open = false;
     var anchor = $(this);
     $(this).click(function (event) {
         event.preventDefault();
         $(anchor).toggleClass('close');
     });
 });


// =  Keyboard only focus https://gist.github.com/arieh/2470682
//-----------------------------------------------------------------------------//
 (function () {
     function hasClass(el, name) {
         if ('classList' in el) return el.classList.contains(name);
         return el.className.explode(' ').indexOf(name) > -1;
     }

     this.Outliner = function Outliner(opts) {
         var key;
         for (key in opts) if (key in this.options) this.options[key] = opts[key];

         this.handleEvent = this.handleEvent.bind(this);

         if (this.options.useDelegation) this.className = this.options.selector.replace('.', '');

         this.generate();
         this.attach();
     };

     Outliner.prototype = {
         constructor: Outliner,
         options: {
             selector: 'a',
             useDelegation: false
         },
         generate: function () {
             this.element = document.createElement('style');
             document.head.appendChild(this.element);
         },
         handleEvent: function (e) {
             if (this.options.useDelegation && hasClass(e.target, this.className) == false) return;

             switch (e.type) {
                 case 'mouseover':
                     this.removeOutline();
                     break;
                 case 'keydown':
                     this.restoreOutline();
                     break;
             }
         },

         attach: function () {
             var compat = 'addEventListener' in document,
                 attachee = compat ? this : this.handleEvent,
                 key_ev = compat ? 'keydown' : 'onkeydown',
                 mouse_ev = compat ? 'mouseover' : 'onmouseover',
                 i, el;

             this.elements = this.options.useDelegation ? [document.body] : document.querySelectorAll(this.options.selector);

             for (i = 0; el = this.elements[i]; i++) {
                 el[compat ? 'addEventListener' : 'attachEvent'](key_ev, attachee, false);
                 el[compat ? 'addEventListener' : 'attachEvent'](mouse_ev, attachee, false);
             }
         },
         removeOutline: function () {
             this.element.innerHTML = this.options.selector + ' {outline:none}';
         },
         restoreOutline: function () {
             this.element.innerHTML = '';
         },
         detach: function () {
             var compat = 'addEventListener' in document,
                 attachee = compat ? this : this.handleEvent,
                 key_ev = compat ? 'keydown' : 'onkeydown',
                 mouse_ev = compat ? 'mouseover' : 'onmouseover',
                 i, el;

             for (i = 0; el = this.elements[i]; i++) {
                 el[compat ? 'removeEventListener' : 'detatchEvent'](key_ev, attachee, false);
                 el[compat ? 'removeEventListener' : 'detatchEvent'](mouse_ev, attachee, false);
             }

             this.elements = {};
         }
     };

 }).call(this);


// =  Fix for IE10 youtube embed partial z-index 
//-----------------------------------------------------------------------------//
 $(document).ready(function () {
     $(".video-container iframe").each(function () {
         var ifr_source = $(this).attr('src');
         var wmode = "wmode=transparent";
         if (ifr_source.indexOf('?') != -1) $(this).attr('src', ifr_source + '&' + wmode);
         else $(this).attr('src', ifr_source + '?' + wmode);
     });
 });






 /*global jQuery */
 /**
  *  InflateText.js -- 98% derived from FitText.js (http://fittextjs.com)
  *
  *  Options
  *  - scale       {Number}  Scaling factor for the final font-size (defaults to 1)
  *  - minFontSize {Number}
  *  - maxFontSize {Number}
  *
  *  @author RJ Zaworski <rj@rjzaworski.com
  *  Released under the WTFPL license
  *  http://sam.zoy.org/wtfpl/
  */

 (function ($) {

     var testSize = 96;

     var defaults = {
         'scale': 1,
         'minFontSize': Number.NEGATIVE_INFINITY,
         'maxFontSize': Number.POSITIVE_INFINITY
     };

     function _debounce(callback) {

         var handle;

         return function () {

             var args = Array.prototype.slice.call(arguments, 1),
                 interval = 100,
                 _test = function () {
                     callback.apply(this, args);
                     handle = null;
                 };

             if (handle) {
                 clearTimeout(handle);
             }

             handle = setTimeout(_test, interval);
         }
     }

     $.fn.inflateText = function (options) {

         var settings = $.extend({}, defaults, options);

         var minSize = parseFloat(settings.minFontSize),
             maxSize = parseFloat(settings.maxFontSize);

         return this.each(function () {

             var $this = $(this);

             // Remix: resize items based on object width divided by the scaling factor
             var resizer = function () {

                 var mask = $('<div style="height:1px;overflow:hidden;"></div>')
                     .appendTo('body');

                 var test = $this.clone().css({
                     display: 'inline',
                     fontSize: testSize + 'px'
                 }).appendTo(mask);

                 var scaledSize = settings.scale * testSize * $this.width() / test.width();

                 // scale font down to fix IE bug
                 $this.css('font-size', '12pt');

                 // update width
                 $this.css('font-size', Math.max(Math.min((scaledSize), maxSize), minSize));

                 // remove test element from DOM
                 mask.remove();
             };

             // Call once to set.
             resizer();

             // Call on resize. Opera debounces their resize by default.
             $(window).resize(_debounce(resizer));
         });
     };
 })(jQuery);


 $('.js-inflate-text').inflateText({
     maxFontSize: 240, //(px)
     minFontSize: 32, //(px)
     scale: 0.9
 });




//  Get Parameter By Name Query String
 function getParameterByName(name) {
     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
         results = regex.exec(location.search);
     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
 }
