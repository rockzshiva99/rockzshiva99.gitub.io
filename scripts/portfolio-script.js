!function(jQuery) {
  
    "use strict";
    jQuery("a.page-scroll").bind("click", function(b) {
        var c = jQuery(this);
        jQuery("html, body").stop().animate({
            scrollTop: jQuery(c.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"),
        b.preventDefault()
    }),
    jQuery("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 51
    }),
    jQuery(".navbar-collapse ul li a").click(function() {
        jQuery(".navbar-toggle:visible").click()
    }),
    jQuery("#mainNav").affix({
        offset: {
            top: 100
        }
    }),
    jQuery(window).stellar({
        horizontalScrolling: false,
        verticalOffset: 0,
        horizontalOffset: 0
    }),
    window.sr = ScrollReveal(),
    sr.reveal(".sr-icons", {
        duration: 600,
        scale: .3,
        distance: "0px"
    }, 200),
    sr.reveal(".sr-button", {
        duration: 1e3,
        delay: 200
    }),
    sr.reveal(".sr-contact", {
        duration: 600,
        scale: .3,
        distance: "0px"
    }, 300)
}(jQuery);
