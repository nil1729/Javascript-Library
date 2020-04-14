var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 300,
        modifier: 5,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});