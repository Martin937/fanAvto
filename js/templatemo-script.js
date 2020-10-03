/**
 *	www.templatemo.com
 */

/* HTML document is loaded. DOM is ready.
-----------------------------------------*/
$(document).ready(function() {

    // tabs
    $('ul.tm-tabs').on('click', 'li:not(.tm-tab-active)',
        function() {
            $(this)
                .addClass('tm-tab-active').siblings().removeClass('tm-tab-active')
                .closest('section.container').find('div.tm-content').removeClass('tm-content_active').eq($(this).index()).addClass('tm-content_active');
        });


    // Mobile menu
    $('.mobile-menu-icon').click(function() {
        $('.templatemo-nav').slideToggle();
    });

    $(window).resize(function() {
        if ($(window).width() > 767) {
            $('.templatemo-nav').show();
        } else {
            $('.templatemo-nav').hide();
        }
    });

    // Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.tm-item-action').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.tm-item-description').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
    // $("a[href^='#catalog']").click(function() {
    //     var _href = $(this).attr("href");
    //     $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    //     return false;
    // });
    // new WOW().init();

    // http://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers
    $('body').bind('touchstart', function() {});

    $('#example-getting-started').multiselect();



});