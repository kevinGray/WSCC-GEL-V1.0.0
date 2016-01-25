// = Search and primary nav triggers and toggles
//-----------------------------------------------------------------------------//

$('.js-trigger__search').on('click', function() {
    $('.js-panel__search').toggle(); 
    $('.js-panel__nav-primary').hide();
    setAriaExpandedArea();
});


$('.js-trigger__nav-primary').on('click', function() {
    $('.js-panel__nav-primary').toggle();
    $('.js-panel__search').hide();
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




$(function () {
    
    $('#tabs').children('li').first().children('a').addClass('active')
        .next().addClass('is-open').show();
        
    $('#tabs').on('click', 'li > a', function() {
        
      if (!$(this).hasClass('active')) {

        $('#tabs .is-open').removeClass('is-open').hide();
        $(this).next().toggleClass('is-open').toggle();
        
        $('#tabs').find('.active').removeClass('active');
        $(this).addClass('active');
      } else {
        $('#tabs .is-open').removeClass('is-open').hide();
        $(this).removeClass('active');
      }
   });
});




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



// = Inline SVG data fallback
//-----------------------------------------------------------------------------//
$(function () {

    $(".no-inlinesvg img").each(function () {
        var fallback = $(this).attr("data-fallback");
        $(this).attr("src", fallback);

    });

});






