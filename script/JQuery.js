document.addEventListener('DOMContentLoaded', function () {
    // slider slick
    $('#slider-m-partners').slick({
        // autoSlidesToShow: true,
        // speed: 300,
        variableWidth: true,
        slidesToScroll: 1,
        infinite: false,
        slidesToShow: 3.5,
        prevArrow: $('#btn_partners_prev'),
        nextArrow: $('#btn_partners_next'),
        rows: 0,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                }
            },
        ]
    });// ./ slider slick

    // slider slick proud
    $('#m-proud_slider').slick({
        dots: false,
        infinite: true,
        lazyLoad: 'ondemand',
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('#btn_proud_prev'),
        nextArrow: $('#btn_proud_next'),
        // rows: 0,
    });// ./ slider slick proud

    // hover effect on btn start
    $(".button_su_inner").mouseenter(function (e) {
        var parentOffset = $(this).offset();
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle").css({ "left": relX, "top": relY });
        $(this).prev(".su_button_circle").removeClass("desplode-circle");
        $(this).prev(".su_button_circle").addClass("explode-circle");
    });

    $(".button_su_inner").mouseleave(function (e) {
        var parentOffset = $(this).offset();
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle").css({ "left": relX, "top": relY });
        $(this).prev(".su_button_circle").removeClass("explode-circle");
        $(this).prev(".su_button_circle").addClass("desplode-circle");
    });// ./ hover effect on btn start
});