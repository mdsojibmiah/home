
(function ($) {
    "use strict";


    // -----------HOME 1 NAVBAR START---------------

    $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
            $(".navbar-top").addClass("fixed-me");
        } else {
            $(".navbar-top").removeClass("fixed-me");
        }
    });

    // -----------HOME 1 NAVBAR END---------------


    // ----------OWL CAROUSEL TESTIMONIAL START -------------

    $(".person").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        nav: true,
        navText: [
            "<i class='ti-arrow-left'></i>",
            "<i class='ti-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    // ----------OWL CAROUSEL TESTIMONIAL  END-------------


    // ----------HOME PAGE 2 NAVBAR START----------

    $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
            $(".navbar-top").addClass("sticky");
        } else {
            $(".navbar-top").removeClass("sticky");
        }
    });

    // ----------HOME PAGE 2 NAVBAR END----------


    // ---------OWL CAROUSEL SLIDER- START--------------


    $(".slider").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // ---------OWL CAROUSEL SLIDER END---------------

    // ---------OWL CAROUSEL SLIDER 2 START---------------
    $(".slider2").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // ---------OWL CAROUSEL SLIDER 2 END---------------

    // ----------HOME PAGE 3 START-------------------

    $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
            $(".navbar-top").addClass("sticky-nav3");
        } else {
            $(".navbar-top").removeClass("sticky-nav3");
        }
    });

    // ----------HOME PAGE 3 END-------------------

    // ----------WOW JS START------------------

    new WOW().init();

    // ----------WOW JS END------------------

    //======================
    // GOOGLE MAP SCRIPT
    //======================
    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.67, -73.94) // New York
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById("map");

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
    }
    if ($("#map").length > 0) {
        google.maps.event.addDomListener(window, "load", init);
    }


})(jQuery);
