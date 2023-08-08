const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
    },
    speed: 1600,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
});