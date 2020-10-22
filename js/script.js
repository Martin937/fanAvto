$(document).ready(function() {
    // Remove preloader
    // https://ihatetomatoes.net/create-custom-preloading-screen/

    setTimeout(function() {
        $('body').addClass('loaded');
    });
    // flexslider
    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide",
            slideshow: true,
            pauseOnHover: false,
            slideshowSpeed: 5000,
            animationSpeed: 800,
            prevText: "&#60;",
            nextText: "&#62;"
        });
    });
    // modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    // tabs
    $('ul.tabs_choice').on('click', 'li:not(.tab_active)',
        function() {
            $(this)
                .addClass('tab_active').siblings().removeClass('tab_active')
                .closest('div.container').find('form.on').removeClass('on_active').eq($(this).index()).addClass('on_active');
        });

    $('ul.tabs_which').on('click', 'li:not(.tab_active)',
        function() {
            $(this)
                .addClass('tab_active').siblings().removeClass('tab_active')
                .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });

    // добавление и удаление классов

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.services-promo__content').eq(i).toggleClass('services-promo__content_active');
                $('.services-promo__details').eq(i).toggleClass('services-promo__details_active');
                // $('.services-promo__inner').eq(i).toggleClass('services-promo__inner_active');
            })
        });
    };

    toggleSlide('.content-prew');
    toggleSlide('.details-back');


    // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
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


});
'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__list'),
        menuItem = document.querySelectorAll('.nav__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav__list_active');
        })
    })
})