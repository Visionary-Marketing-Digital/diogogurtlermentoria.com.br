AOS.init({
    duration: 800,
    easing: 'slide'
});

(function($) {

    "use strict";

    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll'
    });

    var fullHeight = function() {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
            $('.js-fullheight').css('height', $(window).height());
        });
    };
    fullHeight();

    // loader
    var loader = function() {
        setTimeout(function() {
            if($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    // Scrollax
    $.Scrollax();

    // Burger Menu
    var burgerMenu = function() {

        $('body').on('click', '.js-fh5co-nav-toggle', function(event){
            event.preventDefault();
            if ( $('#ftco-nav').is(':visible') ) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        });

    };
    burgerMenu();

    var onePageClick = function() {
        $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
            event.preventDefault();
            var href = $.attr(this, 'href');
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 70
            }, 500);
        });
    };
    onePageClick();

    var carousel = function() {
        $('.home-slider').owlCarousel({
            loop: false,
            autoplay: false,
            margin: 0,
            animateOut: false,
            animateIn: false,
            nav: false,
            autoplayHoverPause: false,
            items: 1,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
            responsive:{
                0:{ items:1 },
                600:{ items:1 },
                1000:{ items:1 }
            }
        });
    };
    carousel();

    $('nav .dropdown').hover(function(){
        var $this = $(this);
        $this.addClass('show');
        $this.find('> a').attr('aria-expanded', true);
        $this.find('.dropdown-menu').addClass('show');
    }, function(){
        var $this = $(this);
        $this.removeClass('show');
        $this.find('> a').attr('aria-expanded', false);
        $this.find('.dropdown-menu').removeClass('show');
    });

    $('#dropdown04').on('show.bs.dropdown', function () {
        console.log('show');
    });

    // scroll
    var scrollWindow = function() {
        $(window).scroll(function(){
            var $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.ftco_navbar'),
                sd = $('.js-scroll-wrap');

            if (st > 150) {
                if (!navbar.hasClass('scrolled')) {
                    navbar.addClass('scrolled');
                }
            }
            if (st < 150) {
                if (navbar.hasClass('scrolled')) {
                    navbar.removeClass('scrolled sleep');
                }
            } 
            if (st > 350) {
                if (!navbar.hasClass('awake')) {
                    navbar.addClass('awake');
                }
                if(sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if (st < 350) {
                if (navbar.hasClass('awake')) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if(sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();

    var counter = function() {
        $('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function(direction) {
            if(direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
                $('.number').each(function(){
                    var $this = $(this),
                        num = $this.data('number');
                    $this.animateNumber(
                        {
                            number: num,
                            numberStep: comma_separator_number_step
                        }, 7000
                    );
                });
            }
        }, { offset: '95%' });
    };
    counter();

    var contentWayPoint = function() {
        var i = 0;
        $('.ftco-animate').waypoint(function(direction) {
            if(direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function(){
                    $('body .ftco-animate.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn ftco-animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, { offset: '95%' });
    };
    contentWayPoint();

    // magnific popup de imagens e iframe
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: { verticalFit: true },
        zoom: { enabled: true, duration: 300 }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // =========================
    // POPUP DO VÍDEO (AJUSTADO)
    // =========================
    $(document).ready(function() {
        $('.video-popup').magnificPopup({
            type: 'inline',
            midClick: true,
            callbacks: {
                open: function() {
                    var video = document.getElementById('meuVideo');
                    video.currentTime = 0;
                    video.play();
                },
                close: function() {
                    var video = document.getElementById('meuVideo');
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    });

})(jQuery);

// =========================
// COUNTDOWN
// =========================
document.addEventListener('DOMContentLoaded', function () {
    const eventDate = new Date(2025, 10, 28, 20, 0, 0);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance <= 0) {
            document.getElementById("contador").innerHTML = "O evento já começou!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("dias").textContent = days.toString().padStart(2, '0');
        document.getElementById("horas").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutos").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("segundos").textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
