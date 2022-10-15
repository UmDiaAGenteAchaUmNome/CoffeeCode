(function ($) {
    'use strict';

    /*------------ Preloader -----------*/
    var browserWindow = $(window);

    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    /*------------ Header -----------*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $('.header-sticky').removeClass('header-scroll');
            $('#back-top').fadeOut(500);
        } else {
            $('.header-sticky').addClass('header-scroll');
            $('#back-top').fadeIn(500);
        }
    });

    /*------------ BtnScrollUp -----------*/
    $('#back-top a').on('click', function () {
        $('body, html').animate(
            {
                scrollTop: 0,
            },
            800
        );
        return false;
    });

    /*------------ Menu -----------*/
    var menu = $('ul#navigation');

    if (menu.length) {
        menu.slicknav({
            prependTo: '.mobile-menu',
            closedSymbol: '+',
            openedSymbol: '-',
        });
    }

    /***------------ Video Popup -----------***/

    const videoSrc = $('#playerOne').attr('src');

    $('.video-btn, #video-popup').on('click', function () {
        if ($('#video-popup').hasClass('open')) {
            $('#video-popup').removeClass('open');
            $('#playerOne').attr('src', '');
        } else {
            $('#video-popup').addClass('open');
            if ($('#playerOne').attr('src') == '') {
                $('#playerOne').attr('src', videoSrc);
            }
        }
    });
})(jQuery);
