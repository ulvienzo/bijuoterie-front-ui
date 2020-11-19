$('.carousel').carousel({
    interval: 1000,
    pause: "hover",
    ride: "carousel",
    touch: true,
    dots: false
});
$('.brands__owl-carousel .owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    center: true,
    responsive: {
        0: {
            items: 2,


        },
        600: {
            items: 3,



        },
        1000: {
            items: 5,



        }
    }
});
$('.reviewer .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    lazyLoad: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            dots: true,
            slideBy: 1,
            dotsEach: 1,

        },
        768: {
            center: false,
            items: 1,
            dots: true,
            margin: 30,
            stagePadding: 0,
            slideBy: 1,
            dotsEach: 1,

        },
        1024: {
            center: true,
            items: 1,
            slideBy: 1,
            dotsEach: 1,
        }

    }
});