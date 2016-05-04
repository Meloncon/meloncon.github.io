$(document).ready(function(){
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $('.slider').slider({height: 600});

    $(".desktop-carousel").owlCarousel({
        items: 1
    });

    $(".mobile-pics-carousel").owlCarousel({
        items: 3,
    });

    // $("#carousel").flexslider({
    //     animation: "slide",
    //     controlNav: false,
    //     animationLoop: false,
    //     slideshow: false,
    //     itemWidth: 210,
    //     itemMargin: 5,
    //     asNavFor: "#slider"
    // });
    //
    // $(".flexslider").flexslider({
    //     animation: "slide",
    //     controlNav: false,
    //     animationLoop: false,
    //     slideshow: false,
    //     sync: "#carousel"
    // });
});
