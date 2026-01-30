(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.fixed-top .container').addClass('shadow-sm').css('max-width', '100%');
        } else {
            $('.fixed-top .container').removeClass('shadow-sm').css('max-width', '85%');
        }
    });


    // Donation
    $('.progress').waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    // Event carousel
    $(".event-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

// Mudar Tema
const btn_tema = document.getElementById('btn-tema');
const icone_tema = document.getElementById('icone-tema')
const link = document.getElementById('link_css')
let tema_escuro = false
btn_tema.addEventListener('click', ()=> {
    if (!tema_escuro){
        link.href = "css/style_escuro.css"
        icone_tema.classList.remove('fa-moon');
        icone_tema.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
    else {
        link.href = "css/style.css"
        icone_tema.classList.remove('fa-sun');
        icone_tema.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
    tema_escuro = !tema_escuro
})
if (localStorage.getItem('theme') === 'dark') {
    link.href = "css/style_escuro.css"
    icone_tema.classList.replace('fa-moon', 'fa-sun');
}