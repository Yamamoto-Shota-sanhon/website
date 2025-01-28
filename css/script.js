$(document).ready(function() {
    const mySwiper = new Swiper('.swiper', {
    slidesPerView: 1, 
    spaceBetween: 0, 
    loop: true, 
    autoplay: { delay: 3000 }, 
    pagination: { el: '.swiper-pagination', }, 
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }, 
    scrollbar: { el: '.swiper-scrollbar', },
    breakpoints: {750:{slidesPerView: 2,}},
    });
});

$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const wScroll = $(window).scrollTop();
        $(".fade-in").each(function () {
            const bPosition = $(this).offset().top;
            if (wScroll > bPosition - wHeight + 450 ) {
                $(this).addClass("fadeIn");
            }
        });
        $(".fade-in2").each(function () {
            const bPosition = $(this).offset().top;
            if (wScroll > bPosition - wHeight + 200 ) {
                $(this).addClass("fadeIn");
            }
        });
    });
});