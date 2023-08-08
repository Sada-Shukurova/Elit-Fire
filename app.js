const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {

    },
    speed: 1500,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

});



// range slider
const slider = document.getElementById("myRange");
const output = document.querySelector(".fireplace-length-value");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

// places for fireplaces data
const frontPanel = document.querySelector('.fireplace-panel-value')
const fireplacePrice = document.querySelector('.fireplace-price-value')
const sliderImages = document.querySelectorAll('.swiper-slide-images')

// data for fireplaces


let fireplaces = [
    {
        id: 0,
        name: 'Qara mat',
        price: 5000
    },
    {
        id: 1,
        name: 'Paslanmayan polad',
        price: 9000
    },
    {
        id: 2,
        name: 'Qara güzgü',
        price: 15600
    },
    {
        id: 3,
        name: 'Qızıl çiləmə',
        price: 90000
    },
]

// const myCallbackfunction = (this) => {
//     // console.log("ok");
//     console.log(this);
// }

