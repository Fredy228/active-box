$(function() {

    /*Slider*/

    let slider = $("#citySlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    $('ul.slick-dots li button').each(function(i) {
        $(this).text('TAB ' + i);
    });

});