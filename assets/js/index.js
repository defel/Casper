/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

        $('h1.blog-title').plaxify({"xRange":10,"yRange":180});
        $('h2.blog-description').plaxify({"xRange":10,"yRange":180});
        $('#site-cover').plaxify({"xRange":40,"yRange":140, background: true});

        $.plax.enable()
    });

}(jQuery));