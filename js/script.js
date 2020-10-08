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

    // tabs
    $('ul.category__list').on('click', 'li:not(.category__item_active)',
        function() {
            $(this)
                .addClass('category__item_active').siblings().removeClass('category__item_active')
                .closest('div.box').find('div.tm-content').removeClass('tm-content_active').eq($(this).index()).addClass('tm-content_active');
        });


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
























// $(document).ready(function() {
//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//         responsive: [{
//             breakpoint: 992,
//             settings: {
//                 dots: true,
//                 arrows: false
//             }
//         }]
//     });

//     $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
//         $(this)
//             .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
//             .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
//     });

//     function toggleSlide(item) {
//         $(item).each(function(i) {
//             $(this).on('click', function(e) {
//                 e.preventDefault();
//                 $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//                 $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
//             })
//         });
//     };

//     toggleSlide('.catalog-item__link');
//     toggleSlide('.catalog-item__back');

//     // Modal

//     $('[data-modal=consultation]').on('click', function() {
//         $('.overlay, #consultation').fadeIn('slow');
//     });
//     $('.modal__close').on('click', function() {
//         $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
//     });

//     $('.button_mini').each(function(i) {
//         $(this).on('click', function() {
//             $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
//             $('.overlay, #order').fadeIn('slow');
//         })
//     });

//     function validateForms(form) {
//         $(form).validate({
//             rules: {
//                 name: {
//                     required: true,
//                     minlength: 2
//                 },
//                 phone: "required",
//                 email: {
//                     required: true,
//                     email: true
//                 }
//             },
//             messages: {
//                 name: {
//                     required: "Пожалуйста, введите свое имя",
//                     minlength: jQuery.validator.format("Введите {0} символа!")
//                 },
//                 phone: "Пожалуйста, введите свой номер телефона",
//                 email: {
//                     required: "Пожалуйста, введите свою почту",
//                     email: "Неправильно введен адрес почты"
//                 }
//             }
//         });
//     };

//     validateForms('#consultation-form');
//     validateForms('#consultation form');
//     validateForms('#order form');

//     $('input[name=phone]').mask("+7 (999) 999-99-99");

//     $('form').submit(function(e) {
//         e.preventDefault();
//         $.ajax({
//             type: "POST",
//             url: "mailer/smart.php",
//             data: $(this).serialize()
//         }).done(function() {
//             $(this).find("input").val("");
//             $('#consultation, #order').fadeOut();
//             $('.overlay, #thanks').fadeIn('slow');

//             $('form').trigger('reset');
//         });
//         return false;
//     });

//     // Smooth scroll and pageup

//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 1600) {
//             $('.pageup').fadeIn();
//         } else {
//             $('.pageup').fadeOut();
//         }
//     });

//     $("a[href=#up]").click(function() {
//         const _href = $(this).attr("href");
//         $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
//         return false;
//     });
//     $("a[href^='#catalog']").click(function() {
//         var _href = $(this).attr("href");
//         $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
//         return false;
//     });


//     new WOW().init();
// });