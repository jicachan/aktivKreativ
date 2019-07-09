$(document).ready(function () {

    // NAVIGERING
    // Smartmenu
    if ($('.sm').length > 0) {

        $('.sm').smartmenus();
    }


    // Portfolio hover
    $('.opacity').hover(function () {
        $(this).animate({ opacity: 0.5 }, 100);
    }, function() {
        $(this).animate({opacity: 1.0}, 100);
    });


    // Banner
    $('.banner-info').css('opacity', 0).animate(
        { opacity: 1, top:"40%" },
        { queue: false, duration: 500 }
    );


    // Success (formulärdata)
    var url_string = window.location.href;
    var url = new URL(url_string);

    $('#firstname').text(url.searchParams.get("firstname"));
    $('#lastname').text(url.searchParams.get("lastname"));
    $('#email').text(url.searchParams.get("email"));
    $('#subject').text(url.searchParams.get("subject"));
    $('#message').text(url.searchParams.get("message"));



}); //end document ready
