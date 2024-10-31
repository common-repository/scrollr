/*
 *  All regular jQuery here
 */
jQuery(document).ready(function ($) {


    "use strict";




    /*
     * Link to section
     */

    // on click behavior 1 - with a link (a) on the same level as a .scrollr class
    $('.scrollr').on('click', function (e) {

        // get anchor (href value)
        var exists_a_1 = $(this).attr('href') ? true : false,
                    a_1 = exists_a_1 === true ? $(this).attr('href') : '';

        // if href's value starts with '#' & a section present on the page
        if (exists_a_1 === true && a_1.charAt(0) === '#' && $(a_1).length) {

            e.preventDefault();

            // scroll to the section
            $('body,html').animate({
                scrollTop: $(a_1).offset().top
            }, 800);

        }

    });

    // on click behavior 2 - with a link (a) delegated under the .scrollr class, e.g. inside the paragraph
    $('.scrollr').on('click', 'a', function (e) {

        // get anchor (href value)
        var exists_a_2 = $(this).attr('href') ? true : false,
                    a_2 =  exists_a_2 === true ? $(this).attr('href') : '';

        // if href's value starts with '#' & a section present on the page
        if (exists_a_2 === true && a_2.charAt(0) === '#' && $(a_2).length) {

            e.preventDefault();

            // scroll to the section
            $('body,html').animate({
                scrollTop: $(a_2).offset().top
            }, 800);

        }

    });



    /**
     * One Pager
     */
    if ( $('.scrollr').length ) {

        // mark the sections to be watched
        $.each($('.scrollr'), function () {

            // get anchor (href value)
            var exists_a_1 = $(this).attr('href') ? true : false, // href value is on the same level as the .scrollr
                exists_a_2 = $(this).find('a').attr('href') ? true : false, // in p or button wrap
                a_1        = exists_a_1 === true ? $(this).attr('href') : '', // get href attr
                a_2        = exists_a_2 === true ? $(this).find('a').attr('href') : ''; // get href attr

            // if href's value starts with '#' & "linking to section" i.e. a_1 is present on the page
            if(exists_a_1 === true && a_1.charAt(0) === '#' && $(a_1).length) {

                $(this).addClass('scrollr-anchor');

                $(a_1)
                .addClass('scrollr-section') // mark the section to be observed
                .attr('data-scrollr-section', a_1); // match the data with the .scrollr-anchor

            // if in p or button wrap
            } else if ( exists_a_2 === true && a_2.charAt(0) === '#' && $(a_2).length ) {

                $(this).find('a').addClass('scrollr-anchor');

                $(a_2)
                .addClass('scrollr-section') // mark the section to be observed
                .attr('data-scrollr-section', a_2); // match the data with the .scrollr-anchor

            }

        });

    } // end scrollr.length


    // observe the page sections entering the viewport (by watching the previously added class)
    function scrollrToObserver() {

        var options = {
            root: null,
            //rootMargin: "0px",
            threshold: 0.1 // do not execute immediately, coz a section can be marked even though it's actually on the edge
        };

        var observer    =   new IntersectionObserver(scrollrToObserverCallback, options),
            items       =   document.querySelectorAll('.scrollr-section'); // watch the previously added class

        for(var i in items) {

            if(!items.hasOwnProperty(i)) {
                continue;
            }
            observer.observe(items[i]);

        }

    }


    // mark the .scrollr-anchor as active (e.g. add a border)
    function scrollrToObserverCallback(entries) {

        entries.forEach(function (entry) {

            var id = entry.target.getAttribute('data-scrollr-section');

            if (entry.isIntersecting) {

                /**
                 * Mark scrollr anchor, i.e. add styling based on the vertical or horizontal mark (set in UI).
                 * It can be set individually on the link's wrapper, i.e. the 'li' of the menu.
                 * Additionally, set it on the paragraph/column/etc. which contains one or more .scrollr
                 */

                // if horizontal (hor) marker is set in UI
                if ( $('.scrollr-anchor[href="' +id +'"]').closest('.scrollr-mark-hor').length ) {

                    $('.scrollr-mark-hor .scrollr-anchor[href="' +id +'"]')
                        .addClass('scrollr-nav-active')
                        .css({
                            'border-bottom' : '2px solid',
                            'padding-bottom': '4px',
                    });

                }

                // if vertical (ver) marker is set in UI
                if ( $('.scrollr-anchor[href="' +id +'"]').closest('.scrollr-mark-ver').length ) {

                    $('.scrollr-mark-ver .scrollr-anchor[href="' +id +'"]')
                        .addClass('scrollr-nav-active')
                        .css({
                            'border-left': '4px solid',
                            'padding-left': '8px',
                    });

                }

            } else {


                // if horizontal (hor) marker is set in UI
                if ( $('.scrollr-anchor[href="' +id +'"]').closest('.scrollr-mark-hor').length ) {

                    $('.scrollr-mark-hor .scrollr-anchor[href="' +id +'"]')
                        .removeClass('scrollr-nav-active')
                        .css({
                            'border-bottom' : '',
                            'padding-bottom': '',
                    });

                }

                // if vertical (ver) marker is set in UI
                if ( $('.scrollr-anchor[href="' +id +'"]').closest('.scrollr-mark-ver').length ) {

                    $('.scrollr-mark-ver .scrollr-anchor[href="' +id +'"]')
                        .removeClass('scrollr-nav-active')
                        .css({
                            'border-left': '',
                            'padding-left': '',
                    });

                }

            }

        });

    }


    // watching by IntersectionObserver
    if (window.IntersectionObserver) {
        scrollrToObserver();
    }
    //else {
    //    console.log("IntersectionObserver not supported.");
    //}




    /**
     *  totop anchor
     * "scrollr-top" would be added to individual block, e.g. button
     * and it comes intgrated as a wrapper of the 'Scrollr - to top' block
     */
    if ( $('.scrollr-top').length ) {

        // initally floating buttons are hidden
        $('.scrollr-top > .float').hide();

        $('.scrollr-top > .float').css({
            'position': 'fixed',
            'left': '3vw',
            'bottom': '3vh',
            'z-index': '999',
        });
        
        // alignments
        $('.scrollr-top.is-content-justification-right > .float').css({'left': 'auto', 'right': '3vw'});
        $('.scrollr-top.is-content-justification-center > .float').css({'left': '50%', 'transform': 'translateX(-50%)'});
        $('.scrollr-top > *').attr('title', scrollr_localize.back_to_top); // with '> *' target is the anchor inside the usual paragraph as well (besides the '> float')
        $('.scrollr-top > .reduce-opacity').css('opacity', .8);

        // scrollr-top button on window scrolling)
        $(window).scroll(function () {

            if ($(this).scrollTop() > 400) {

                $('.scrollr-top > .float')
                .css('display', 'flex'); //using flex as display, which will keep the order of the icon & label when used in button

            } else {

                $('.scrollr-top > .float')
                .hide(500);

            }

        });


        // ...and action on click for the scrollr-top button
        // With '> *' target is the anchor inside the usual paragraph as well (besides the '> float')
        $('.scrollr-top > *').on('click', function (e) {
            e.preventDefault();

            $('body,html').animate({
                scrollTop: 0
            }, 800);

        });

    } // end scrollr-top.length





}); // end jQuerys
