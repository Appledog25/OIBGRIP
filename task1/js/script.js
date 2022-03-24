$(document).ready(function () {
    // navigation bar toggle
    $('#navbar-toggler').click(function () {
        $('.navbar-collapse').slideToggle(400);
    });
    //navbar background change on scrolling
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos >= 100) {
            $('.navbar').addClass('cng-navbar');

        } else {
            $('.navbar').removeClass('cng.navbar');
        }
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

});